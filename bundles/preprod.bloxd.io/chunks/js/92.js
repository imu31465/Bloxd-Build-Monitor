export const id = 92;
export const ids = [92, 108];
export const modules = {
    5358: (UU, XU, zU) => {
      zU.d(XU, {
        d: () => tU,
        f: () => gU
      });
      var cU = zU(1106),
        yU = zU.n(cU),
        QU = zU(61),
        AU = zU(1193),
        FU = zU(5360),
        oU = zU(1978),
        DU = zU(2616),
        EU = zU(5364),
        YU = zU(1305);
      const NU = new WeakMap;
      let IU = 0;

      function pU(UU) {
        let XU = NU.get(UU);
        return void 0 === XU && (XU = IU++, NU.set(UU, XU)), XU
      }

      function aU(UU) {
        let {
          piece: XU
        } = UU;
        return "space" === XU.kind ? (0, YU.jsx)(YU.Fragment, {
          children: XU.text
        }) : (0, YU.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${XU.delayMs}ms`
          },
          children: (0, YU.jsx)(FU.e, {
            text: "icon" === XU.kind ? `[[${XU.icon}]]` : XU.text
          })
        })
      }

      function tU(UU) {
        let {
          display: XU
        } = UU;
        const {
          selectedLanguage: zU
        } = (0, AU.I)(), cU = (0, QU.useMemo)((() => (0, EU.d)((0, EU.g)(XU).plan.pieces)), [XU, zU.code]);
        return (0, YU.jsxs)("div", {
          className: yU()("Dialogue", {
            DialogueAnimateIn: !1 !== XU.animateIn
          }),
          children: [XU.speakerName && (0, YU.jsx)(oU.d, {
            text: XU.speakerName,
            className: "DialogueSpeaker"
          }), (0, YU.jsx)("p", {
            className: "DialogueLine",
            children: cU.map(((UU, XU) => 1 === UU.length && "space" === UU[0].kind ? UU[0].text : (0, YU.jsx)("span", {
              className: "DialogueGlue",
              children: UU.map(((UU, XU) => (0, YU.jsx)(aU, {
                piece: UU
              }, XU)))
            }, XU)))
          })]
        })
      }
      const gU = (0, QU.memo)((function() {
        const UU = (0, DU.f)("dialogue");
        return (0, YU.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: UU && (0, YU.jsx)(tU, {
            display: UU
          }, pU(UU))
        })
      }))
    },
    5226: (UU, XU, zU) => {
        zU.r(XU), zU.d(XU, {
          default: () => hQ
        });
        var cU = zU(61),
          yU = zU(1106),
          QU = zU.n(yU),
          AU = zU(1574),
          FU = zU(1577),
          oU = zU(27),
          DU = zU(73),
          EU = zU(5235),
          YU = zU(5251),
          NU = zU(5253),
          IU = zU(4771),
          pU = zU(1305);
        const aU = "/textures/docs/icons";

        function tU(UU) {
          let {
            name: XU,
            isTinted: zU,
            className: cU,
            style: yU
          } = UU;
          const AU = `${aU}/${XU}.png`;
          return zU ? (0, pU.jsxs)("span", {
            className: QU()("DocsPixelIcon", "Tinted", cU),
            "aria-hidden": "true",
            style: yU,
            children: [(0, pU.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${AU}")`,
                WebkitMaskImage: `url("${AU}")`
              }
            }), (0, pU.jsx)("img", {
              src: AU,
              alt: ""
            })]
          }) : (0, pU.jsx)("img", {
            className: QU()("DocsPixelIcon", cU),
            src: AU,
            alt: "",
            "aria-hidden": "true",
            style: yU
          })
        }
        const gU = 1500;

        function kU() {
          const [UU, XU] = (0, cU.useState)(null);
          (0, cU.useEffect)((() => {
            if (null === UU) return;
            const zU = setTimeout((() => {
              XU(null)
            }), gU);
            return () => {
              clearTimeout(zU)
            }
          }), [UU]);
          return [UU, UU => {
            (0, IU.e)(UU).then((() => {
              XU({
                text: UU,
                failed: !1
              })
            }), (zU => {
              console.error("Could not copy to the clipboard", zU), XU({
                text: UU,
                failed: !0
              })
            }))
          }]
        }

        function GU(UU) {
          let {
            text: XU,
            label: zU,
            className: cU
          } = UU;
          const [yU, AU] = kU(), FU = !1 === (null === yU || void 0 === yU ? void 0 : yU.failed);
          return (0, pU.jsxs)("button", {
            type: "button",
            className: QU()("DocsCopyButton", cU, {
              Copied: FU
            }),
            title: "Copy to clipboard",
            "aria-label": zU ? void 0 : `Copy ${XU}`,
            onClick: UU => {
              UU.stopPropagation(), AU(XU)
            },
            children: [(0, pU.jsx)(tU, {
              name: FU ? "check" : "copy"
            }), zU && (0, pU.jsx)("span", {
              children: FU ? "Copied" : null !== yU && void 0 !== yU && yU.failed ? "Copy failed" : zU
            })]
          })
        }
        EU.b.registerLanguage("javascript", YU.c), EU.b.registerLanguage("typescript", NU.c);
        const BU = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          ZU = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          RU = 24;

        function PU(UU) {
          let {
            code: XU,
            lang: zU,
            compact: yU = !1
          } = UU;
          const AU = (0, cU.useMemo)((() => function(UU, XU) {
              const zU = BU[XU];
              return zU ? EU.b.highlight(UU, {
                language: zU
              }).value : UU.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(XU, zU)), [XU, zU]),
            FU = XU.split("\n").length,
            oU = !yU && FU > RU + 6,
            [DU, YU] = (0, cU.useState)(!1),
            NU = BU[zU];
          return (0, pU.jsxs)("div", {
            className: QU()("DocsCodeBlock", {
              Compact: yU,
              Collapsed: oU && !DU
            }),
            children: [!yU && (0, pU.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, pU.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: NU ? ZU[NU] : "Text"
              }), (0, pU.jsx)(GU, {
                text: XU,
                label: "Copy"
              })]
            }), (0, pU.jsx)("pre", {
              children: (0, pU.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: AU
                }
              })
            }), oU && (0, pU.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": DU,
              onClick: () => {
                YU(!DU)
              },
              children: [(0, pU.jsx)(tU, {
                name: DU ? "chevron-up" : "chevron-down"
              }), DU ? "Show less" : `Show all ${FU} lines`]
            })]
          })
        }
        var WU = zU(5262);
        var dU = zU(5270);
        const LU = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function eU(UU) {
          const XU = new Map;
          let zU, cU = [],
            yU = !1;
          const QU = () => {
            zU && XU.set(zU.name, zU.lines.join("\n").trimEnd())
          };
          for (const AU of UU.split("\n")) {
            const UU = AU.match(LU);
            yU || AU.startsWith("/*") ? (yU || (QU(), zU = void 0), cU.push(AU), yU = !AU.includes("*/")) : UU ? (QU(), zU = {
              name: UU[1],
              lines: [...cU, AU]
            }, cU = []) : zU && (AU.startsWith(" ") || AU.startsWith("\t") || /^[}\])|]/.test(AU)) ? zU.lines.push(AU) : zU && "" !== AU.trim() && (QU(), zU = void 0)
          }
          return QU(), XU
        }

        function CU(UU) {
          return "methods" === UU || "callbacks" === UU || "settings" === UU
        }
        const wU = {
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
              setterSnippet: (UU, XU) => `api.setClientOption(playerId, "${UU}", ${XU})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (UU, XU) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${UU}", ${XU})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (UU, XU) => `api.setMobSetting(mobId, "${UU}", ${XU})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (UU, XU) => `api.setVehicleSetting(vehicleId, "${UU}", ${XU})`
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
          qU = {
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

        function OU(UU) {
          return UU.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function SU(UU) {
          let XU = !1;
          return UU.split("\n").map((UU => (UU.startsWith("```") && (XU = !XU), !XU && /^#{3,} /.test(UU) ? UU.slice(1) : UU))).join("\n")
        }

        function rU(UU) {
          return "readme" === UU ? "getting-started" : OU(UU)
        }
        const uU = "## Glossary of Referenced Types";
        const fU = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...dU.b.flatMap((UU => {
            const XU = {
              id: UU.id,
              slug: rU(UU.id),
              title: UU.title,
              markdown: UU.content,
              ...wU[UU.id]
            };
            if ("readme" === UU.id) return function(UU) {
              const XU = UU.markdown.indexOf(uU),
                zU = UU.markdown.indexOf("\n```", XU),
                cU = UU.markdown.indexOf("\n```", zU + 1);
              if (-1 === XU || -1 === zU || -1 === cU) throw new Error(`Getting started has no "${uU}" section with a code block`);
              const yU = UU.markdown.slice(XU + 31, zU).trim(),
                QU = [...eU(UU.markdown.slice(UU.markdown.indexOf("\n", zU + 1) + 1, cU))].map((UU => {
                  let [XU, zU] = UU;
                  return `## ${XU}\n\n\`\`\`ts\n${zU}\n\`\`\`\n`
                })),
                AU = UU.markdown.slice(UU.markdown.indexOf("\n", cU + 1) + 1);
              return [{
                ...UU,
                markdown: `${UU.markdown.slice(0,XU)}${AU}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${yU}\n\n${QU.join("\n")}`
              }]
            }(XU);
            if ("howTo" === UU.id) {
              const {
                parent: UU,
                guides: zU
              } = function(UU) {
                const [XU, ...zU] = UU.markdown.split(/^(?=## )/m), cU = [XU], yU = [];
                for (const AU of zU) {
                  var QU;
                  const XU = AU.indexOf("\n"),
                    zU = AU.slice(3, XU).trim(),
                    FU = AU.slice(XU + 1);
                  if (!FU.includes("```")) {
                    cU.push(AU);
                    continue
                  }
                  const oU = null !== (QU = qU[zU]) && void 0 !== QU ? QU : {
                    icon: "lightbulb",
                    summary: `How to use ${zU.toLowerCase()} in World Code.`
                  };
                  yU.push({
                    id: `${UU.id}${zU.split(/[^A-Za-z0-9]+/).map((UU=>UU.charAt(0).toUpperCase()+UU.slice(1))).join("")}`,
                    slug: `${UU.slug}-${OU(zU)}`,
                    title: zU,
                    layout: "article",
                    sourceAnchor: (0, WU.r)(zU),
                    markdown: `# ${zU}\n\n${SU(FU)}`,
                    ...oU
                  })
                }
                return {
                  parent: {
                    ...UU,
                    markdown: cU.join(""),
                    childPageIds: yU.map((UU => UU.id))
                  },
                  guides: yU
                }
              }(XU);
              return [UU, ...zU]
            }
            return [XU]
          }))],
          iU = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...fU.filter((UU => void 0 !== UU.sourceAnchor)).map((UU => UU.id))]
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
          return fU.find((XU => XU.id === UU))
        }
        const MU = new Map;

        function vU(UU) {
          let XU = MU.get(UU.id);
          return XU || (XU = (0, WU.w)(UU.markdown, "changelog" === UU.layout ? 3 : 2), MU.set(UU.id, XU)), XU
        }

        function VU(UU, XU) {
          return vU(UU).sections.some((UU => UU.heading.anchor === XU || UU.blocks.some((UU => "heading" === UU.kind && UU.anchor === XU))))
        }

        function sU(UU) {
          const [XU, ...zU] = UU.replace(/^#/, "").split("-"), cU = fU.find((UU => UU.id === XU));
          if (!cU) return null;
          const yU = zU.length > 0 ? (0, WU.r)(zU.join("-")) : "";
          for (const AU of null !== (QU = cU.childPageIds) && void 0 !== QU ? QU : []) {
            var QU;
            const UU = HU(AU);
            if (UU.sourceAnchor === yU) return {
              page: UU,
              anchor: ""
            };
            if (VU(UU, yU)) return {
              page: UU,
              anchor: yU
            }
          }
          return {
            page: cU,
            anchor: yU
          }
        }
        const nU = {
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

        function mU(UU, XU) {
          let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const cU = XU.slug ? `${UU}/${XU.slug}` : UU;
          return zU ? `${cU}#${zU}` : cU
        }
        var lU = zU(5290);
        const xU = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          JU = new Set(["GameApi", "Console", "_TypeOf"]),
          jU = 4;

        function KU(UU) {
          let XU = UU.length;
          for (; XU > 0 && "" === UU[XU - 1].trim();) XU--;
          return UU.slice(0, XU)
        }

        function bU(UU) {
          var XU;
          const zU = KU(UU);
          if (null === (XU = zU.at(-1)) || void 0 === XU || !XU.trimEnd().endsWith("*/")) return {
            lines: zU,
            doc: ""
          };
          const cU = zU.findLastIndex((UU => UU.startsWith("/**")));
          return -1 === cU ? {
            lines: zU,
            doc: ""
          } : {
            lines: KU(zU.slice(0, cU)),
            doc: zU.slice(cU).join("\n")
          }
        }

        function TU(UU) {
          var XU;
          const zU = UU.split("\n"),
            cU = zU.flatMap(((UU, XU) => xU.test(UU) ? [XU] : []));
          let yU = bU(zU.slice(0, null !== (XU = cU[0]) && void 0 !== XU ? XU : zU.length)).doc;
          return cU.map(((UU, XU) => {
            var QU;
            const AU = bU(zU.slice(UU, null !== (QU = cU[XU + 1]) && void 0 !== QU ? QU : zU.length)),
              FU = {
                name: zU[UU].match(xU)[1],
                doc: yU,
                lines: AU.lines
              };
            return yU = AU.doc, FU
          }))
        }

        function hU(UU) {
          var XU;
          const zU = UU.match(/^readonly \[([\s\S]*)\]$/);
          return zU ? null !== (XU = zU[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== XU ? XU : [] : null
        }

        function UX(UU) {
          if (!UU.startsWith("{") || !UU.endsWith("}")) return null;
          const XU = {
              keys: [],
              values: []
            },
            zU = UU => {
              const zU = UU.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              zU && (XU.keys.push(zU[1].startsWith('"') ? zU[1] : `"${zU[1]}"`), XU.values.push(zU[2].trim()))
            };
          let cU = 0,
            yU = "";
          for (const QU of UU.slice(1, -1)) "{[(".includes(QU) ? cU++ : "}])".includes(QU) && cU--, ";" === QU && 0 === cU ? (zU(yU), yU = "") : yU += QU;
          return zU(yU), XU
        }

        function XX(UU) {
          return UU.length > jU ? `\n\t| ${UU.join("\n\t| ")}` : UU.join(" | ")
        }

        function zX(UU, XU) {
          const zU = function(UU, XU) {
            return UU.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((UU, zU) => {
              var cU;
              const yU = null === (cU = XU.get(zU)) || void 0 === cU ? void 0 : cU.object;
              return yU ? XX(yU.values) : UU
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((UU, zU) => {
              var cU, yU;
              const QU = null === (cU = XU.get(zU)) || void 0 === cU || null === (yU = cU.object) || void 0 === yU ? void 0 : yU.values.map(hU);
              return null !== QU && void 0 !== QU && QU.every((UU => null !== UU)) ? XX([...new Set(QU.flat())]) : UU
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((UU, zU) => {
              var cU;
              const yU = null === (cU = XU.get(zU)) || void 0 === cU ? void 0 : cU.members;
              return yU ? XX(yU) : UU
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((UU, zU) => {
              var cU;
              const yU = null === (cU = XU.get(zU)) || void 0 === cU ? void 0 : cU.object;
              return yU ? XX(yU.keys) : UU
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((UU, zU) => {
              var cU, yU;
              return null !== (cU = null === (yU = XU.get(zU)) || void 0 === yU ? void 0 : yU.text) && void 0 !== cU ? cU : UU
            }))
          }(UU.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), XU);
          return [UU.doc, zU].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function cX(UU) {
          const XU = TU(UU),
            zU = function(UU) {
              const XU = new Map,
                zU = UU.find((UU => "_TypeOf" === UU.name));
              let cU = null;
              const yU = () => {
                if (cU) {
                  const UU = cU.lines.join("\n");
                  XU.set(cU.name, {
                    text: UU,
                    members: hU(UU),
                    object: UX(UU)
                  })
                }
              };
              for (const QU of zU.lines.slice(1, -1)) {
                const UU = QU.match(/^\t([\w$]+): (.+)$/);
                UU ? (yU(), cU = {
                  name: UU[1],
                  lines: [UU[2]]
                }) : cU && cU.lines.push(QU.replace(/^\t/, ""))
              }
              return yU(), XU
            }(XU),
            cU = new Map;
          for (const yU of XU) JU.has(yU.name) || cU.has(yU.name) || cU.set(yU.name, zX(yU, zU));
          return cU
        }
        let yX, QX, AX;

        function FX() {
          return QX ??= function(UU) {
            const XU = TU(UU).find((UU => "GameApi" === UU.name)),
              zU = new Map,
              cU = XU.lines;
            for (let QU = 0; QU < cU.length; QU++) {
              var yU;
              if (!cU[QU].trimStart().startsWith("/**")) continue;
              const UU = QU;
              for (; QU < cU.length && !cU[QU].includes("*/");) QU++;
              const XU = null === (yU = cU[QU + 1]) || void 0 === yU ? void 0 : yU.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!XU) continue;
              let AU = null;
              const FU = [];
              let oU = "description",
                DU = !1;
              for (const zU of cU.slice(UU, QU + 1).join("\n").split("\n").map((UU => UU.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const UU = zU.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                UU ? (AU = UU[1].trim(), oU = "deprecation") : zU.startsWith("@") ? (oU = "otherTag", DU = !0) : "" === zU.trim() ? DU || (oU = "description", FU.push(zU)) : "deprecation" !== oU || /^[A-Z]/.test(zU.trim()) ? "otherTag" !== oU && (oU = "description", FU.push(zU)) : AU = `${AU} ${zU.trim()}`.trim()
              }
              zU.set(XU[1], {
                deprecation: AU,
                description: FU.join("\n").trim()
              })
            }
            return zU
          }(lU.default), QX
        }

        function oX() {
          if (!AX) {
            AX = new Map;
            for (const UU of fU) {
              const XU = (0, WU.u)(vU(UU)).flatMap((UU => UU.blocks));
              for (const UU of (0, WU.k)(XU))
                if ("ts" === UU.lang || "typescript" === UU.lang)
                  for (const [XU, zU] of eU(UU.code)) AX.set(XU, zU)
            }
            for (const [UU, XU] of(yX ??= cX(lU.default), yX)) AX.has(UU) || AX.set(UU, XU)
          }
          return AX
        }
        const DX = {
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
        let EX;

        function YX() {
          if (!EX) {
            EX = new Map;
            for (const UU of fU)
              if (CU(UU.layout))
                for (const XU of vU(UU).sections) EX.has(XU.heading.text) || EX.set(XU.heading.text, {
                  pageId: UU.id,
                  anchor: XU.heading.anchor
                })
          }
          return EX
        }

        function NX(UU) {
          const XU = UU.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return XU ? YX().get(XU[1]) : void 0
        }
        const IX = (0, cU.createContext)("/docs"),
          pX = (0, cU.createContext)(null),
          aX = (0, cU.createContext)(!1),
          tX = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function gX(UU) {
          const XU = UU.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return XU ? XU[1] : null
        }

        function kX(UU) {
          let {
            colour: XU
          } = UU;
          return (0, pU.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: XU
            },
            "aria-hidden": "true"
          })
        }

        function GX(UU) {
          const XU = [];
          let zU = 0;
          for (const cU of UU.matchAll(tX)) XU.push(UU.slice(zU, cU.index), (0, pU.jsx)(kX, {
            colour: cU[0]
          }), cU[0]), zU = cU.index + cU[0].length;
          return XU.push(UU.slice(zU)), XU
        }

        function BX(UU) {
          let {
            href: XU,
            children: zU
          } = UU;
          const yU = (0, cU.useContext)(IX);
          if (XU.startsWith("#")) {
            const UU = sU(XU);
            if (UU) return (0, pU.jsx)(AU.b, {
              to: mU(yU, UU.page, UU.anchor),
              children: (0, pU.jsx)(aX.Provider, {
                value: !0,
                children: zU
              })
            })
          }
          return (0, pU.jsx)("a", {
            href: XU,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, pU.jsx)(aX.Provider, {
              value: !0,
              children: zU
            })
          })
        }

        function ZX(UU) {
          let {
            code: XU
          } = UU;
          const zU = (0, cU.useContext)(IX);
          if ((0, cU.useContext)(aX)) return (0, pU.jsx)("code", {
            className: "DocsInlineCode",
            children: XU
          });
          if (oX().has(XU)) return (0, pU.jsx)(dX, {
            type: XU
          });
          const yU = NX(XU);
          if (yU) return (0, pU.jsx)(AU.b, {
            className: "DocsInlineCode DocsSymbolLink",
            to: mU(zU, HU(yU.pageId), yU.anchor),
            children: XU
          });
          const QU = gX(XU);
          return (0, pU.jsxs)("code", {
            className: "DocsInlineCode",
            children: [QU && (0, pU.jsx)(kX, {
              colour: QU
            }), XU]
          })
        }

        function RX(UU) {
          let {
            text: XU
          } = UU;
          const zU = [];
          let yU = 0;
          for (const cU of XU.matchAll(WU.e)) {
            cU.index > yU && zU.push(...GX(XU.slice(yU, cU.index)));
            const [, UU, QU, AU, FU, oU] = cU;
            UU ? zU.push((0, pU.jsx)(ZX, {
              code: (0, WU.l)(UU, QU)
            })) : AU ? zU.push((0, pU.jsx)("strong", {
              children: (0, pU.jsx)(RX, {
                text: AU
              })
            })) : zU.push((0, pU.jsx)(BX, {
              href: oU,
              children: (0, pU.jsx)(RX, {
                text: FU
              })
            })), yU = cU.index + cU[0].length
          }
          return yU < XU.length && zU.push(...GX(XU.slice(yU))), (0, pU.jsx)(pU.Fragment, {
            children: zU.map(((UU, XU) => (0, pU.jsx)(cU.Fragment, {
              children: UU
            }, XU)))
          })
        }
        const PX = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          WX = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function dX(UU) {
          let {
            type: XU
          } = UU;
          const zU = oX(),
            yU = [];
          for (const cU of XU.trim().matchAll(PX)) {
            const [UU, XU, QU, AU, FU] = cU;
            XU ? yU.push((0, pU.jsx)("span", {
              className: "DocsTypeString",
              children: UU
            })) : QU && zU.has(QU) ? yU.push((0, pU.jsx)(qX, {
              name: QU,
              definition: zU.get(QU)
            })) : QU ? yU.push((0, pU.jsx)("span", {
              className: WX.has(QU) ? "DocsTypeKeyword" : "DocsTypeName",
              children: UU
            })) : AU ? yU.push((0, pU.jsx)("span", {
              className: "DocsTypeNumber",
              children: UU
            })) : FU ? yU.push(" ") : yU.push((0, pU.jsx)("span", {
              className: "DocsTypePunctuation",
              children: UU
            }))
          }
          return (0, pU.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: yU.map(((UU, XU) => (0, pU.jsx)(cU.Fragment, {
              children: UU
            }, XU)))
          })
        }
        const LX = 480,
          eX = 6,
          CX = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let wX = 0;

        function qX(UU) {
          let {
            name: XU,
            definition: zU
          } = UU;
          const yU = (0, cU.useContext)(IX),
            QU = DX[XU],
            FU = (0, cU.useRef)(null),
            oU = (0, cU.useRef)(null),
            EU = (0, cU.useRef)(null),
            [YU, NU] = (0, cU.useState)(!1),
            [IU, aU] = (0, cU.useState)(null),
            gU = (0, cU.useRef)(),
            kU = (0, cU.useContext)(pX),
            [GU] = (0, cU.useState)((() => "DocsTypePopover-" + wX++)),
            BU = () => {
              clearTimeout(gU.current), NU(!0)
            },
            ZU = () => {
              clearTimeout(gU.current), gU.current = setTimeout((() => {
                NU(!1)
              }), 120)
            };
          return (0, cU.useEffect)((() => {
            if (!YU) return;
            const UU = UU => {
              if ("Escape" === UU.key) {
                var XU, zU;
                if (null !== (XU = oU.current) && void 0 !== XU && XU.contains(document.activeElement)) null === (zU = FU.current) || void 0 === zU || zU.focus();
                NU(!1)
              }
            };
            return document.addEventListener("keydown", UU), () => {
              document.removeEventListener("keydown", UU)
            }
          }), [YU]), (0, cU.useEffect)((() => () => {
            clearTimeout(gU.current)
          }), []), (0, cU.useLayoutEffect)((() => {
            if (!YU || !FU.current || !oU.current) return void aU(null);
            const UU = FU.current.getBoundingClientRect(),
              XU = oU.current.offsetHeight,
              zU = Math.min(LX, window.innerWidth - 32),
              cU = Math.min(Math.max(16, UU.left), window.innerWidth - zU - 16),
              yU = UU.bottom + eX + XU < window.innerHeight;
            aU({
              left: cU,
              top: yU ? UU.bottom + eX : Math.max(16, UU.top - eX - XU)
            })
          }), [YU]), (0, pU.jsxs)(pU.Fragment, {
            children: [(0, pU.jsx)("button", {
              type: "button",
              ref: FU,
              className: "DocsTypeLink",
              "aria-expanded": YU,
              "aria-describedby": YU ? GU : void 0,
              onMouseEnter: BU,
              onMouseLeave: ZU,
              onFocus: BU,
              onBlur: ZU,
              onKeyDown: UU => {
                "Tab" === UU.key && !UU.shiftKey && EU.current && (UU.preventDefault(), EU.current.focus())
              },
              onClick: BU,
              children: XU
            }), YU && (0, DU.createPortal)((0, pU.jsxs)("span", {
              ref: oU,
              id: GU,
              className: "DocsTypePopover",
              role: "tooltip",
              style: IU ? {
                left: IU.left,
                top: IU.top,
                maxWidth: LX
              } : {
                visibility: "hidden"
              },
              onMouseEnter: BU,
              onMouseLeave: ZU,
              onFocus: BU,
              onBlur: ZU,
              children: [(0, pU.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, pU.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: XU
                }), QU && (0, pU.jsxs)(AU.b, {
                  ref: EU,
                  className: "DocsTypePopoverLink",
                  to: mU(yU, HU(QU)),
                  onClick: () => {
                    NU(!1)
                  },
                  onKeyDown: UU => {
                    if ("Tab" === UU.key) {
                      var XU;
                      if (UU.preventDefault(), UU.shiftKey || !FU.current || ! function(UU, XU) {
                          const zU = [...document.querySelectorAll(CX)],
                            cU = zU.slice(zU.indexOf(UU) + 1).find((UU => UU.getClientRects().length > 0 && !(null !== XU && void 0 !== XU && XU.contains(UU))));
                          return null === cU || void 0 === cU || cU.focus(), void 0 !== cU
                        }(FU.current, oU.current)) null === (XU = FU.current) || void 0 === XU || XU.focus();
                      UU.shiftKey || NU(!1)
                    }
                  },
                  children: [HU(QU).title, (0, pU.jsx)(tU, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, pU.jsx)(PU, {
                lang: "ts",
                code: zU,
                compact: !0
              })]
            }), null !== kU && void 0 !== kU ? kU : document.body)]
          })
        }
        var OX = zU(212),
          SX = zU(5299),
          rX = zU(5301),
          uX = zU(5303);
        const fX = {
          progressBar: {
            Sz: 30,
            rz: .075,
            uz: 5,
            fz: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            iz: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            vz: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            Vz: !0,
            scale: 3,
            rotation: 15,
            sz: !1
          },
          gravityBar: {
            Sz: 30,
            mz: .25,
            lz: 3,
            xz: .8,
            gravity: 1,
            Jz: 1.5,
            jz: 8,
            Kz: 4,
            fz: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            Tz: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            Uc: 5,
            Xc: 1200,
            zc: .15,
            yc: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var iX = zU(320),
          HX = zU(2067);

        function MX(UU) {
          return UU.startsWith("fa-")
        }
        const vX = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          VX = {
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

        function sX(UU) {
          return "string" === typeof UU ? "text" : "entityName" in UU || "translationKey" in UU ? "other" : (0, iX.Cb)(UU) ? "progressBar" : (0, iX.yb)(UU) ? "keyBinding" : "icon" in UU ? "icon" : "str" in UU && "string" === typeof UU.str ? "text" : "other"
        }
        const nX = [{
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
          mX = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...nX],
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
                options: HX.j
              },
              isRequired: !0
            }, ...nX],
            other: []
          };

        function lX(UU) {
          return "string" === typeof UU ? {
            str: UU
          } : UU
        }

        function xX(UU, XU) {
          let zU = lX(UU);
          for (const cU of XU) zU = zU && "object" === typeof zU ? zU[cU] : void 0;
          return zU
        }

        function JX(UU, XU, zU) {
          const cU = (UU, yU) => {
            var QU;
            const AU = XU[yU],
              FU = {
                ...UU
              };
            if (yU === XU.length - 1) return void 0 === zU ? delete FU[AU] : FU[AU] = zU, FU;
            const oU = cU(null !== (QU = UU[AU]) && void 0 !== QU ? QU : {}, yU + 1);
            return 0 === Object.keys(oU).length ? delete FU[AU] : FU[AU] = oU, FU
          };
          return function(UU) {
            const XU = Object.keys(UU);
            return "string" === typeof UU.str && 1 === XU.length ? UU.str : UU
          }(cU(lX(UU), 0))
        }

        function jX(UU, XU) {
          const zU = sX(UU),
            cU = mX[zU].find((UU => UU.path.join(".") === XU.join("."))),
            yU = null !== cU && void 0 !== cU && cU.isRequired && "other" !== zU ? xX(VX[zU], XU) : void 0;
          return JX(UU, XU, yU)
        }

        function KX(UU) {
          switch (sX(UU)) {
            case "text":
              return String(xX(UU, ["str"]));
            case "icon":
              return String(xX(UU, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(xX(UU,["progress"])))}%`;
            case "keyBinding":
              return String(xX(UU, ["action"]));
            case "other":
              return JSON.stringify(UU)
          }
        }
        const bX = /^[A-Za-z_$][\w$]*$/;

        function TX(UU) {
          if (Array.isArray(UU)) return `[${UU.map(TX).join(", ")}]`;
          if (UU && "object" === typeof UU) {
            const XU = Object.entries(UU).map((UU => {
              let [XU, zU] = UU;
              return `${bX.test(XU)?XU:JSON.stringify(XU)}: ${TX(zU)}`
            }));
            return 0 === XU.length ? "{}" : `{ ${XU.join(", ")} }`
          }
          return JSON.stringify(UU)
        }

        function hX(UU) {
          const XU = UU.map(TX),
            zU = `[${XU.join(", ")}]`;
          return zU.length <= 60 ? zU : `[\n${XU.map((UU=>`    ${UU},`)).join("\n")}\n]`
        }
        const Uz = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function Xz(UU) {
          let XU = "";
          for (let yU = 0; yU < UU.length; yU++) {
            const QU = UU[yU];
            if ("\\" === QU) {
              var zU;
              const cU = null !== (zU = UU[yU + 1]) && void 0 !== zU ? zU : "";
              XU += "'" === cU ? "'" : QU + cU, yU++
            } else if ('"' === QU) XU += '\\"';
            else {
              var cU;
              XU += null !== (cU = Uz[QU]) && void 0 !== cU ? cU : QU
            }
          }
          return `"${XU}"`
        }

        function zz(UU) {
          if ("string" === typeof UU) return !0;
          if (!UU || "object" !== typeof UU || Array.isArray(UU)) return !1;
          const XU = UU;
          return "ProgressBar" === XU.type ? "number" === typeof XU.progress : "StyledKeyBinding" === XU.type ? HX.j.includes(XU.action) : "string" === typeof XU.icon || "string" === typeof XU.str || "string" === typeof XU.entityName || "string" === typeof XU.translationKey
        }

        function cz(UU) {
          let XU;
          try {
            XU = function(UU) {
              let XU = "",
                zU = "",
                cU = 0;
              const yU = () => {
                XU += zU.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), zU = ""
              };
              for (; cU < UU.length;) {
                const QU = UU.slice(cU).search(/["'`]|\/\//);
                if (-1 === QU) {
                  zU += UU.slice(cU);
                  break
                }
                zU += UU.slice(cU, cU + QU);
                const AU = cU + QU,
                  FU = UU[AU];
                if ("/" === FU) {
                  const XU = UU.indexOf("\n", AU);
                  cU = -1 === XU ? UU.length : XU;
                  continue
                }
                if (yU(), "`" === FU) throw new Error("Use quotes rather than template strings.");
                let oU = AU + 1;
                for (; oU < UU.length && UU[oU] !== FU;) oU += "\\" === UU[oU] ? 2 : 1;
                if (oU >= UU.length) throw new Error("A string is missing its closing quote.");
                const DU = UU.slice(AU + 1, oU);
                XU += Xz(DU), cU = oU + 1
              }
              return yU(), JSON.parse(XU)
            }(UU.trim())
          } catch (cU) {
            return {
              parts: null,
              error: cU instanceof SyntaxError ? "This isn't a valid array yet." : cU.message
            }
          }
          if (!Array.isArray(XU)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const zU = XU.findIndex((UU => !zz(UU)));
          return -1 !== zU ? {
            parts: null,
            error: `Part ${zU+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: XU,
            error: null
          }
        }
        const yz = 1 / OX.f.clientTicksPerSecond,
          Qz = 700,
          Az = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          Fz = {
            progressBar: fX.progressBar.iz,
            timedClick: fX.timedClick.icon,
            gravityBar: fX.gravityBar.icon,
            precisionBar: fX.precisionBar.icon,
            rhythmClick: fX.rhythmClick.icon
          };

        function oz(UU) {
          let {
            type: XU
          } = UU;
          const [zU, yU] = (0, cU.useState)("ready"), [AU, FU] = (0, cU.useState)(1), [oU, DU] = (0, cU.useState)(!0), EU = (0, cU.useRef)(null), YU = (0, cU.useRef)(null), NU = (0, cU.useRef)(null), IU = (0, cU.useRef)(new Set), aU = (0, cU.useRef)(!1), gU = Fz[XU], kU = (0, cU.useMemo)((() => ({
            getState: () => {
              var UU, XU;
              return null !== (UU = null === (XU = NU.current) || void 0 === XU ? void 0 : XU.getState()) && void 0 !== UU ? UU : Az
            },
            onFrame: UU => (IU.current.add(UU), () => {
              IU.current.delete(UU)
            })
          })), []);
          (0, cU.useEffect)((() => {
            const UU = EU.current,
              XU = YU.current;
            if (!UU || !XU) return;
            const zU = new ResizeObserver((() => {
              FU(UU.clientWidth / Math.max(1, XU.offsetWidth))
            }));
            return zU.observe(UU), () => {
              zU.disconnect()
            }
          }), []), (0, cU.useEffect)((() => {
            var UU;
            if ("playing" !== zU) return;
            let cU = !1;
            const QU = new uX.g[XU](fX[XU], (UU => {
              cU = !0, DU(!1), yU(UU ? "succeeded" : "failed")
            }), (() => {}));
            NU.current = QU;
            let AU = 0,
              FU = performance.now(),
              oU = requestAnimationFrame((function UU(XU) {
                for (AU += Math.min(.25, (XU - FU) / 1e3), FU = XU; AU >= yz && !cU;) AU -= yz, QU.handleTick(yz);
                for (const zU of IU.current) zU();
                cU || (oU = requestAnimationFrame(UU))
              }));
            return null === (UU = EU.current) || void 0 === UU || UU.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(oU), QU.tearDown(), NU.current = null, aU.current = !1
            }
          }), [zU, XU]), (0, cU.useEffect)((() => {
            if (oU) return;
            const UU = setTimeout((() => {
              DU(!0)
            }), Qz);
            return () => {
              clearTimeout(UU)
            }
          }), [oU]);
          const GU = UU => {
            var XU;
            "playing" === zU && aU.current !== UU && (aU.current = UU, null === (XU = NU.current) || void 0 === XU || XU.handleMouseInput(UU))
          };
          return (0, pU.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, pU.jsxs)("div", {
              ref: EU,
              className: QU()("DocsQteStage", {
                Playing: "playing" === zU
              }),
              tabIndex: "playing" === zU ? 0 : -1,
              role: "playing" === zU ? "button" : void 0,
              "aria-label": "playing" === zU ? `${XU} quick time event: click or press Space` : void 0,
              onPointerDown: UU => {
                0 === UU.button && GU(!0)
              },
              onPointerUp: () => {
                GU(!1)
              },
              onPointerLeave: () => {
                GU(!1)
              },
              onPointerCancel: () => {
                GU(!1)
              },
              onKeyDown: UU => {
                "playing" !== zU || " " !== UU.key && "Enter" !== UU.key || (UU.preventDefault(), GU(!0))
              },
              onKeyUp: UU => {
                "playing" !== zU || " " !== UU.key && "Enter" !== UU.key || GU(!1)
              },
              children: [(0, pU.jsx)("div", {
                ref: YU,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${AU})`
                },
                children: "playing" === zU && (0, pU.jsx)(rX.b.Provider, {
                  value: kU,
                  children: (0, pU.jsx)(SX.d, {
                    qte: {
                      type: XU,
                      parameters: fX[XU]
                    }
                  })
                })
              }), "playing" !== zU && (0, pU.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== zU && (0, pU.jsxs)("div", {
                  className: QU()("DocsQteResult", "succeeded" === zU ? "Succeeded" : "Failed"),
                  children: [(0, pU.jsx)(tU, {
                    name: "succeeded" === zU ? "check" : "cross",
                    isTinted: !0
                  }), (0, pU.jsx)("span", {
                    children: "succeeded" === zU ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, pU.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !oU,
                  onClick: () => {
                    yU("playing")
                  },
                  children: [(0, pU.jsx)(tU, {
                    name: "ready" === zU ? "play" : "replay"
                  }), (0, pU.jsx)("span", {
                    children: "ready" === zU ? `Try ${XU}` : "Play again"
                  })]
                })]
              })]
            }), gU && !MX(gU) && (0, pU.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, pU.jsx)("code", {
                children: gU
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function Dz(UU) {
          let {
            level: XU,
            text: zU,
            anchor: cU,
            className: yU
          } = UU;
          const AU = `h${Math.min(XU,6)}`;
          return (0, pU.jsxs)(AU, {
                id: cU,
                className: QU()("DocsHeading", yU),
                children: [(0, pU.jsx)(RX, {
                      text: zU
                    }), (0, pU.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${cU}`,
                        "aria-label": `Link to ${zU.replace(/`/g,"")}`,children:"#"})]})}function Ez(UU){let{items:XU,ordered:zU}=UU;const cU=zU?"ol":"ul";return(0,pU.jsx)(cU,{className:"DocsList",children:XU.map(((UU,XU)=>(0,pU.jsxs)("li",{children:[(0,pU.jsx)(RX,{text:UU.text}),UU.children.length>0&&(0,pU.jsx)(Ez,{items:UU.children,ordered:zU})]},XU)))})}function Yz(UU){const XU=UU[0],zU="paragraph"===(null===XU||void 0===XU?void 0:XU.kind)?XU.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(zU)?"warning":/^\*\*(tip|prefer)/.test(zU)?"tip":"note"}function Nz(UU){let{block:XU}=UU;switch(XU.kind){case"heading":return(0,pU.jsx)(Dz,{level:XU.level,text:XU.text,anchor:XU.anchor});case"paragraph":return(0,pU.jsx)("p",{children:(0,pU.jsx)(RX,{text:XU.text})});case"code":{const UU="ts"===XU.lang?function(UU){const XU=UU.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return XU&&Object.hasOwn(fX,XU[1])?XU[1]:null}(XU.code):null;return(0,pU.jsxs)(pU.Fragment,{children:[(0,pU.jsx)(PU,{code:XU.code,lang:XU.lang}),UU&&(0,pU.jsx)(oz,{type:UU})]})}case"table":return(0,pU.jsx)("div",{className:"DocsTableScroll",children:(0,pU.jsxs)("table",{className:"DocsTable",children:[(0,pU.jsx)("thead",{children:(0,pU.jsx)("tr",{children:XU.header.map(((UU,XU)=>(0,pU.jsx)("th",{children:(0,pU.jsx)(RX,{text:UU})},XU)))})}),(0,pU.jsx)("tbody",{children:XU.rows.map(((UU,XU)=>(0,pU.jsx)("tr",{children:UU.map(((UU,XU)=>(0,pU.jsx)("td",{children:(0,pU.jsx)(RX,{text:UU})},XU)))},XU)))})]})});case"list":return(0,pU.jsx)(Ez,{items:XU.items,ordered:XU.ordered});case"quote":return(0,pU.jsx)("aside",{className:QU()("DocsCallout",Yz(XU.blocks)),children:(0,pU.jsx)(Iz,{blocks:XU.blocks})});case"rule":return(0,pU.jsx)("hr",{className:"DocsRule"})}}function Iz(UU){let{blocks:XU}=UU;return(0,pU.jsx)(pU.Fragment,{children:XU.map(((UU,XU)=>(0,pU.jsx)(Nz,{block:UU},XU)))})}var pz=zU(5276),az=zU(5282);function tz(UU){return"blocks"===UU||"items"===UU}const gz=new Map;function kz(UU){let XU=gz.get(UU);return XU||(XU=function(UU){const XU={entries:[],legend:[],notes:[],examples:[]};let zU=!1;for(const QU of UU.split(/\r?\n/).slice(1)){if(QU.startsWith("#")){const UU=QU.replace(/^# ?/,""),cU=UU.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);cU?XU.legend.push({code:cU[1],meaning:cU[2],usage:cU[3].trim()}):/^Examples:/.test(UU.trim())?zU=!0:zU&&UU.trim()?XU.examples.push(UU.trim()):UU.trim()&&!/^\s/.test(UU)&&XU.notes.push(UU.trim());continue}const UU=QU.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var cU,yU;UU&&XU.entries.push({name:UU[1],variants:null!==(cU=null===(yU=UU[2])||void 0===yU?void 0:yU.split(","))&&void 0!==cU?cU:[]})}return XU}("blocks"===UU?pz:az),gz.set(UU,XU)),XU}function Gz(UU){let{className:XU,value:zU,placeholder:cU,label:yU,onChange:QU,count:AU,children:FU}=UU;return(0,pU.jsxs)("div",{className:XU,children:[(0,pU.jsx)(tU,{name:"magnifying-glass"}),(0,pU.jsx)("input",{type:"search",value:zU,placeholder:cU,"aria-label":yU,onChange:UU=>{QU(UU.target.value)}}),FU,AU&&(0,pU.jsxs)("span",{className:"DocsFilterCount",children:[AU.visible," of ",AU.total]})]})}var Bz=zU(1390);function Zz(UU){const XU=UU.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return XU?XU[2]:null}function Rz(UU){return"paragraph"===UU.kind&&""===UU.text.trim()}function Pz(UU){const XU={name:UU.heading.text,description:[],params:[],returns:null};let zU="description";for(const yU of UU.blocks)if(!Rz(yU))if("heading"===yU.kind&&/^Parameters:?$/.test(yU.text))zU="params";else if("heading"===yU.kind&&/^Returns:?$/.test(yU.text))zU="returns",XU.returns={type:"",description:[]};else if("params"!==zU||"table"!==yU.kind){if("returns"===zU&&"paragraph"===yU.kind&&""===XU.returns.type){const UU=Zz(yU.text);if(null!==UU){XU.returns.type=UU.replaceAll("\\|","|");continue}}"returns"===zU?XU.returns.description.push(yU):XU.description.push(yU)}else for(const[UU,zU,QU]of yU.rows){var cU;XU.params.push({name:UU,type:null!==(cU=Zz(zU))&&void 0!==cU?cU:zU,description:null!==QU&&void 0!==QU?QU:""})}return XU}const Wz=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function dz(UU){return UU.filter((UU=>!Rz(UU)))}const Lz=/^[\w][\w .'&!:()-]*$/,ez=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function Cz(UU){var XU;if("code"===UU.kind&&"text"===UU.lang){const XU=UU.code.split("\n").map((UU=>UU.trim())).filter(Boolean);return XU.length>0&&XU.every((UU=>Lz.test(UU)))?XU.map((UU=>({name:UU}))):null}return"paragraph"===UU.kind&&ez.test(UU.text.trim())?[...UU.text.matchAll(/`([ ^ `]+)` / g)].flatMap((UU => UU[1].split(/,\s*/).map((UU => ({
                              name: UU.trim()
                            }))))): "table" === UU.kind && null !== (XU = UU.header[0]) && void 0 !== XU && XU.startsWith("Song") ? UU.rows.map((UU => {
                              let [XU, zU] = UU;
                              return {
                                name: XU.replace(/`/g, ""),
                                caption: zU
                              }
                            })) : null
                          }

                          function wz(UU) {
                            const XU = [];
                            for (const zU of UU) {
                              const UU = Cz(zU),
                                cU = XU.at(-1),
                                yU = "table" === zU.kind;
                              UU ? "names" === (null === cU || void 0 === cU ? void 0 : cU.kind) && cU.isSongs === yU ? cU.names.push(...UU) : XU.push({
                                kind: "names",
                                names: UU,
                                isSongs: yU
                              }) : XU.push({
                                kind: "block",
                                block: zU
                              })
                            }
                            return XU
                          }
                          const qz = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function Oz(UU, XU) {
                            return `${qz[UU]}-${(0,WU.r)(XU)}`
                          }
                          const Sz = new WeakMap;

                          function rz(UU, XU, zU) {
                            let cU = Sz.get(XU);
                            if (!cU) {
                              cU = new Map;
                              const zU = new Set;
                              for (const yU of (0, WU.u)(XU)) {
                                const XU = wz(dz(yU.blocks)).map((XU => {
                                  if ("block" === XU.kind) return XU;
                                  return {
                                    kind: "names",
                                    names: XU.names.map((XU => {
                                      var cU, QU;
                                      const AU = Oz(UU, XU.name);
                                      let FU = AU;
                                      for (let UU = 2; zU.has(FU); UU++) FU = `${AU}-${UU}`;
                                      return zU.add(FU), {
                                        ...XU,
                                        anchor: FU,
                                        heading: null !== (cU = null === (QU = yU.heading) || void 0 === QU ? void 0 : QU.text) && void 0 !== cU ? cU : ""
                                      }
                                    })),
                                    isSongs: XU.isSongs
                                  }
                                }));
                                cU.set(yU.blocks, XU)
                              }
                              Sz.set(XU, cU)
                            }
                            const yU = cU.get(zU);
                            if (!yU) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return yU
                          }
                          const uz = "/textures/docs/skinPreviews",
                            fz = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var iz = zU(4593),
                            Hz = zU(4608);

                          function Mz(UU) {
                            return Object.hasOwn(iz.i, UU) ? iz.i[UU] : null
                          }
                          const vz = {
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
                            blendMode: Hz.f.Standard
                          };

                          function Vz(UU, XU, zU) {
                            return XU + (zU - XU) * UU()
                          }

                          function sz(UU, XU, zU) {
                            return UU + (XU - UU) * zU
                          }

                          function nz(UU) {
                            return UU.length > 0 && "timeFraction" in UU[0]
                          }

                          function mz(UU, XU) {
                            if (0 === UU.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!nz(UU.colorGradients)) {
                              const zU = UU.colorGradients,
                                {
                                  color: cU
                                } = zU[Math.floor(XU() * zU.length) % zU.length];
                              return [{
                                at: 0,
                                colour: [cU[0] / 255, cU[1] / 255, cU[2] / 255, 1]
                              }]
                            }
                            return [...UU.colorGradients].sort(((UU, XU) => UU.timeFraction - XU.timeFraction)).map((UU => {
                              var zU, cU, yU;
                              const QU = UU.minColor,
                                AU = null !== (zU = UU.maxColor) && void 0 !== zU ? zU : QU,
                                FU = XU(),
                                oU = [sz(QU[0], AU[0], FU) / 255, sz(QU[1], AU[1], FU) / 255, sz(QU[2], AU[2], FU) / 255, sz(null !== (cU = QU[3]) && void 0 !== cU ? cU : 1, null !== (yU = AU[3]) && void 0 !== yU ? yU : 1, FU)];
                              return {
                                at: UU.timeFraction,
                                colour: oU
                              }
                            }))
                          }

                          function lz(UU, XU, zU, cU) {
                            const yU = Vz(cU, UU.minEmitPower, UU.maxEmitPower),
                              QU = XU => Vz(cU, Math.min(UU.dir1[XU], UU.dir2[XU]), Math.max(UU.dir1[XU], UU.dir2[XU])) * yU,
                              AU = [...UU.velocityGradients].sort(((UU, XU) => UU.timeFraction - XU.timeFraction)).map((UU => ({
                                at: UU.timeFraction,
                                factor: Vz(cU, UU.factor, UU.factor2)
                              })));
                            return {
                              pos: [Vz(cU, XU[0], zU[0]), Vz(cU, XU[1], zU[1]), Vz(cU, XU[2], zU[2])],
                              dir: [QU(0), QU(1), QU(2)],
                              age: 0,
                              life: Vz(cU, UU.minLifeTime, UU.maxLifeTime),
                              size: Vz(cU, UU.minSize, UU.maxSize),
                              colours: mz(UU, cU),
                              velocityFactors: AU
                            }
                          }

                          function xz(UU, XU, zU, cU) {
                            if (XU < UU[0].at) return zU(Math.min(1, UU.length - 1));
                            for (let yU = 0; yU < UU.length - 1; yU++)
                              if (XU <= UU[yU + 1].at) {
                                const QU = UU[yU + 1].at - UU[yU].at;
                                return cU(zU(yU), zU(yU + 1), QU > 0 ? (XU - UU[yU].at) / QU : 1)
                              } return zU(UU.length - 1)
                          }

                          function Jz(UU) {
                            return xz(UU.colours, UU.age / UU.life, (XU => UU.colours[XU].colour), ((UU, XU, zU) => [sz(UU[0], XU[0], zU), sz(UU[1], XU[1], zU), sz(UU[2], XU[2], zU), sz(UU[3], XU[3], zU)]))
                          }

                          function jz(UU, XU, zU) {
                            if (UU.age += zU, UU.age >= UU.life) return !1;
                            const cU = function(UU) {
                              return 0 === UU.velocityFactors.length ? 1 : xz(UU.velocityFactors, UU.age / UU.life, (XU => UU.velocityFactors[XU].factor), sz)
                            }(UU) * zU;
                            for (let QU = 0; QU < 3; QU++) {
                              var yU;
                              UU.pos[QU] += UU.dir[QU] * cU, UU.dir[QU] += (null !== (yU = XU[QU]) && void 0 !== yU ? yU : 0) * zU
                            }
                            return !0
                          }

                          function Kz(UU) {
                            return String(Math.round(1e6 * UU) / 1e6)
                          }

                          function bz(UU) {
                            return `[${UU.map(Kz).join(", ")}]`
                          }

                          function Tz(UU, XU) {
                            const zU = `${XU}    `;
                            return `[\n${(nz(UU)?UU.map((UU=>{const XU=[`${zU}    timeFraction: ${Kz(UU.timeFraction)},`,`${zU}    minColor: ${bz(UU.minColor)},`];return UU.maxColor&&XU.push(`${zU}    maxColor: ${bz(UU.maxColor)},`),`${zU}{\n${XU.join("\n")}\n${zU}},`})):UU.map((UU=>`
                            $ {
                              zU
                            } {
                              color: $ {
                                bz(UU.color)
                              }
                            }, `))).join("\n")}\n${XU}]`
                          }
                          const hz = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            Uc = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const Xc = .6;

                          function zc(UU, XU) {
                            return `${XU?"song":"sound"}:${UU}`
                          }
                          let cc = {
                              track: null,
                              volume: Xc
                            },
                            yc = null,
                            Qc = 0,
                            Ac = 0;
                          const Fc = new Set;

                          function oc(UU) {
                            cc = {
                              ...cc,
                              ...UU
                            }, Fc.forEach((UU => {
                              UU()
                            }))
                          }

                          function Dc(UU) {
                            cc.track && oc({
                              track: {
                                ...cc.track,
                                ...UU
                              }
                            })
                          }

                          function Ec(UU) {
                            const [XU, zU] = (0, cU.useState)((() => UU(cc))), yU = (0, cU.useRef)(UU);
                            return yU.current = UU, (0, cU.useEffect)((() => {
                              const UU = () => {
                                zU((() => yU.current(cc)))
                              };
                              return Fc.add(UU), UU(), () => {
                                Fc.delete(UU)
                              }
                            }), []), XU
                          }

                          function Yc() {
                            Qc++;
                            const UU = yc;
                            yc = null, null === UU || void 0 === UU || UU.stop()
                          }

                          function Nc(UU, XU) {
                            let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            Yc();
                            const yU = Qc,
                              {
                                track: QU
                              } = cc,
                              AU = QU && QU.name === UU && QU.isSong === XU ? QU.duration : 0;
                            Ac = cU, oc({
                              track: {
                                name: UU,
                                isSong: XU,
                                status: "loading",
                                duration: AU
                              }
                            }), Promise.all([zU.e(241), zU.e(272)]).then((() => zU(40909))).then((zU => {
                              let {
                                playDocsSound: QU
                              } = zU;
                              yU === Qc && (yc = QU(UU, XU, cc.volume, cU, {
                                onPlay: UU => {
                                  yU === Qc && Dc({
                                    status: "playing",
                                    duration: UU
                                  })
                                },
                                onEnd: UU => {
                                  var XU, zU;
                                  yU === Qc && (yc = null, UU ? oc({
                                    track: null
                                  }) : (Ac = null !== (XU = null === (zU = cc.track) || void 0 === zU ? void 0 : zU.duration) && void 0 !== XU ? XU : 0, Dc({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((XU => {
                              console.error(`Could not play docs sound ${UU}`, XU), yU === Qc && oc({
                                track: null
                              })
                            }))
                          }

                          function Ic() {
                            const {
                              track: UU
                            } = cc;
                            if (!UU) return;
                            if ("playing" === UU.status && yc) return Ac = yc.wG(), yc.pause(), void Dc({
                              status: "paused"
                            });
                            if ("loading" === UU.status) return Yc(), void Dc({
                              status: "paused"
                            });
                            if (yc) return void yc.resume();
                            const XU = UU.duration > 0 && Ac >= UU.duration - .05;
                            Nc(UU.name, UU.isSong, XU ? 0 : Ac)
                          }

                          function pc() {
                            var UU;
                            return yc && "playing" === (null === (UU = cc.track) || void 0 === UU ? void 0 : UU.status) ? yc.wG() : Ac
                          }

                          function ac(UU) {
                            var XU;
                            null === (XU = yc) || void 0 === XU || XU.setVolume(UU), oc({
                              volume: UU
                            })
                          }

                          function tc() {
                            Yc(), Ac = 0, oc({
                              track: null
                            })
                          }
                          const gc = (0, cU.createContext)(null);
                          let kc = null;

                          function Gc() {
                            const [UU, XU] = (0, cU.useState)(null);
                            return (0, cU.useEffect)((() => {
                              let UU = !1;
                              return kc ??= Promise.all([zU.e(84), zU.e(87), zU.e(85), zU.e(86), zU.e(200), zU.e(35), zU.e(245)]).then((() => zU(40906))), kc.then((zU => {
                                UU || XU(zU)
                              }), (UU => {
                                console.error("Could not load the docs gallery's textures", UU), kc = null
                              })), () => {
                                UU = !0
                              }
                            }), []), UU
                          }
                          const Bc = 24,
                            Zc = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function Rc(UU, XU) {
                            const zU = "skins" === UU ? function(UU, XU) {
                              const zU = fz.find((XU => UU.startsWith(XU.heading)));
                              return zU ? function(UU, XU) {
                                return `${UU}-${XU}`
                              }(zU.prefix, XU) : null
                            }(XU.heading, XU.name) : null;
                            return null === zU ? null : `${uz}/${zU}.webp`
                          }

                          function Pc(UU) {
                            let {
                              kind: XU,
                              entry: zU,
                              assets: yU,
                              renderedUrl: AU
                            } = UU;
                            const {
                              name: FU
                            } = zU, [oU, DU] = (0, cU.useState)(!1);
                            if ("icons" === XU && MX(FU)) return (0, pU.jsx)(Bz.d, {
                              className: "DocsTileIcon",
                              name: FU
                            });
                            let EU = null;
                            var YU;
                            if ("icons" === XU) EU = null !== (YU = null === yU || void 0 === yU ? void 0 : yU.getIngameIconUrl(FU)) && void 0 !== YU ? YU : null;
                            else if ("particles" === XU) {
                              var NU, IU, aU;
                              EU = null !== (NU = null === yU || void 0 === yU ? void 0 : yU.getParticleTextureUrl(null !== (IU = null === (aU = Mz(FU)) || void 0 === aU ? void 0 : aU.texture) && void 0 !== IU ? IU : FU)) && void 0 !== NU ? NU : null
                            } else "skins" === XU && (EU = null !== AU && void 0 !== AU ? AU : Zc.test(FU) ? `/textures/charSkins/previews/${FU}_preview.png` : null);
                            return !EU || oU ? (0, pU.jsx)(tU, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === XU ? "person" : "image"
                            }) : (0, pU.jsx)("img", {
                              className: QU()("DocsTileImage", {
                                Pixelated: "skins" !== XU
                              }),
                              src: EU,
                              srcSet: EU === AU ? `${EU} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${EU}`), DU(!0)
                              }
                            })
                          }

                          function Wc(UU) {
                            let {
                              entry: XU,
                              isSong: zU
                            } = UU;
                            const cU = Ec((UU => {
                                let {
                                  track: cU
                                } = UU;
                                return (null === cU || void 0 === cU ? void 0 : cU.name) === XU.name && cU.isSong === zU ? cU.status : null
                              })),
                              yU = null !== cU && "paused" !== cU;
                            return (0, pU.jsxs)("button", {
                              type: "button",
                              id: XU.anchor,
                              className: QU()("DocsSoundTile", {
                                Playing: yU
                              }),
                              "data-docs-track": zc(XU.name, zU),
                              "aria-label": yU ? `Pause ${XU.name}` : `Play ${XU.name}`,
                              onClick: () => {
                                null !== cU ? Ic() : Nc(XU.name, zU)
                              },
                              children: [(0, pU.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, pU.jsx)(tU, {
                                  name: yU ? "pause" : "play"
                                })
                              }), (0, pU.jsx)("code", {
                                className: "DocsSoundName",
                                children: XU.name
                              }), XU.caption && (0, pU.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: XU.caption
                              })]
                            })
                          }

                          function dc(UU) {
                            let {
                              kind: XU,
                              names: zU,
                              isSongs: yU
                            } = UU;
                            const AU = Gc(),
                              [FU, oU] = kU(),
                              DU = !1 === (null === FU || void 0 === FU ? void 0 : FU.failed) ? FU.text : null,
                              EU = (0, cU.useContext)(gc),
                              [YU, NU] = (0, cU.useState)(""),
                              IU = YU.trim().toLowerCase(),
                              aU = IU ? zU.filter((UU => UU.name.toLowerCase().includes(IU))) : zU;
                            return (0, pU.jsxs)("div", {
                              className: "DocsGallery",
                              children: [zU.length > Bc && (0, pU.jsx)(Gz, {
                                className: "DocsGalleryFilter",
                                value: YU,
                                placeholder: `Filter ${zU.length} names\u2026`,
                                label: "Filter names",
                                onChange: NU,
                                count: IU ? {
                                  visible: aU.length,
                                  total: zU.length
                                } : null
                              }), (0, pU.jsx)("div", {
                                className: QU()("DocsGalleryGrid", `Kind-${XU}`, {
                                  Songs: yU
                                }),
                                children: aU.map((UU => {
                                  if ("sounds" === XU) return (0, pU.jsx)(Wc, {
                                    entry: UU,
                                    isSong: yU
                                  }, UU.anchor);
                                  if (EU && "particles" === XU && Mz(UU.name)) return (0, pU.jsxs)("button", {
                                    type: "button",
                                    id: UU.anchor,
                                    className: QU()("DocsTile Previewable", {
                                      Copied: DU === UU.name
                                    }),
                                    title: `Play "${UU.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      EU(UU.name), oU(UU.name)
                                    },
                                    children: [(0, pU.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, pU.jsx)(Pc, {
                                        kind: XU,
                                        entry: UU,
                                        assets: AU,
                                        renderedUrl: null
                                      }), (0, pU.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, pU.jsx)(tU, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, pU.jsx)("span", {
                                      className: "DocsTileName",
                                      children: DU === UU.name ? "Copied!" : UU.name
                                    })]
                                  }, UU.anchor);
                                  const zU = Rc(XU, UU);
                                  return (0, pU.jsxs)("button", {
                                    type: "button",
                                    id: UU.anchor,
                                    className: QU()("DocsTile", {
                                      Copied: DU === UU.name
                                    }),
                                    title: `Copy "${UU.name}"`,
                                    onClick: () => {
                                      oU(UU.name)
                                    },
                                    children: [(0, pU.jsx)("span", {
                                      className: QU()("DocsTilePreview", {
                                        Rendered: null !== zU
                                      }),
                                      children: (0, pU.jsx)(Pc, {
                                        kind: XU,
                                        entry: UU,
                                        assets: AU,
                                        renderedUrl: zU
                                      })
                                    }), (0, pU.jsx)("span", {
                                      className: "DocsTileName",
                                      children: DU === UU.name ? "Copied!" : UU.name
                                    })]
                                  }, UU.anchor)
                                }))
                              })]
                            })
                          }

                          function Lc(UU) {
                            let {
                              kind: XU,
                              content: zU,
                              blocks: cU
                            } = UU;
                            return (0, pU.jsx)(pU.Fragment, {
                              children: rz(XU, zU, cU).map(((UU, zU) => "block" === UU.kind ? (0, pU.jsx)(Nz, {
                                block: UU.block
                              }, zU) : (0, pU.jsx)(dc, {
                                kind: XU,
                                names: UU.names,
                                isSongs: UU.isSongs
                              }, zU)))
                            })
                          }
                          const ec = [{
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

                          function Cc(UU) {
                            let {
                              cards: XU = ec,
                              label: zU = "Start here"
                            } = UU;
                            const yU = (0, cU.useContext)(IX);
                            return (0, pU.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": zU,
                              children: XU.map((UU => {
                                let {
                                  pageId: XU,
                                  countNoun: zU
                                } = UU;
                                const cU = HU(XU);
                                return (0, pU.jsxs)(AU.b, {
                                  to: mU(yU, cU),
                                  className: "DocsLandingCard",
                                  children: [(0, pU.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, pU.jsx)(tU, {
                                      name: cU.icon
                                    })
                                  }), (0, pU.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: cU.title
                                  }), (0, pU.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: cU.summary
                                  }), zU && (0, pU.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [vU(cU).sections.length, " ", zU]
                                  })]
                                }, XU)
                              }))
                            })
                          }
                          const wc = 240;

                          function qc(UU) {
                            let {
                              faces: XU
                            } = UU;
                            return (0, pU.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, pU.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${XU.top}")`
                                }
                              }), (0, pU.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${XU.left}")`
                                }
                              }), (0, pU.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${XU.right}")`
                                }
                              })]
                            })
                          }

                          function Oc(UU) {
                            let {
                              src: XU
                            } = UU;
                            const [zU, yU] = (0, cU.useState)(!1);
                            return zU ? null : (0, pU.jsx)("img", {
                              src: XU,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${XU}`), yU(!0)
                              }
                            })
                          }

                          function Sc(UU) {
                            let {
                              kind: XU
                            } = UU;
                            const zU = kz(XU),
                              yU = Gc(),
                              AU = (0, FU.w)(),
                              [oU, DU] = (0, cU.useState)(""),
                              [EU, YU] = (0, cU.useState)(null),
                              [NU, IU] = (0, cU.useState)(wc),
                              [aU, gU] = (0, cU.useState)(null),
                              kU = (0, cU.useRef)(null),
                              BU = oU.trim().toLowerCase();
                            (0, cU.useEffect)((() => {
                              const UU = (0, WU.n)(AU.hash),
                                cU = zU.entries.find((zU => Oz(XU, zU.name) === UU));
                              if (cU) kU.current = cU.name, DU(cU.name), YU(null), gU(cU.name);
                              else if (null !== kU.current) {
                                const UU = kU.current;
                                kU.current = null, DU((XU => XU === UU ? "" : XU)), gU(null)
                              }
                            }), [zU, XU, AU.hash, AU.key]), (0, cU.useEffect)((() => {
                              var UU;
                              null !== aU && (null === (UU = document.getElementById(Oz(XU, aU))) || void 0 === UU || UU.scrollIntoView({
                                block: "center"
                              }))
                            }), [XU, aU]);
                            const ZU = zU.entries.filter((UU => (!BU || UU.name.toLowerCase().includes(BU)) && (!EU || UU.variants.includes(EU))));
                            return (0, pU.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [zU.notes.length > 0 && (0, pU.jsx)("div", {
                                className: "DocsProse",
                                children: zU.notes.map((UU => (0, pU.jsx)("p", {
                                  children: UU
                                }, UU)))
                              }), zU.legend.length > 0 && (0, pU.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, pU.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, pU.jsx)("thead", {
                                    children: (0, pU.jsxs)("tr", {
                                      children: [(0, pU.jsx)("th", {
                                        children: "Code"
                                      }), (0, pU.jsx)("th", {
                                        children: "Variant"
                                      }), (0, pU.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, pU.jsx)("tbody", {
                                    children: zU.legend.map((UU => (0, pU.jsxs)("tr", {
                                      children: [(0, pU.jsx)("td", {
                                        children: (0, pU.jsx)("button", {
                                          type: "button",
                                          className: QU()("DocsVariantChip", {
                                            Active: EU === UU.code
                                          }),
                                          "aria-pressed": EU === UU.code,
                                          title: `Show only ${XU} with ${UU.meaning} variants`,
                                          onClick: () => {
                                            YU(EU === UU.code ? null : UU.code)
                                          },
                                          children: UU.code
                                        })
                                      }), (0, pU.jsx)("td", {
                                        children: UU.meaning
                                      }), (0, pU.jsx)("td", {
                                        children: (0, pU.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: UU.usage
                                        })
                                      })]
                                    }, UU.code)))
                                  })]
                                })
                              }), zU.examples.length > 0 && (0, pU.jsx)(PU, {
                                lang: "text",
                                code: zU.examples.join("\n")
                              }), (0, pU.jsx)(Gz, {
                                className: "DocsFilterBar",
                                value: oU,
                                placeholder: `Search ${zU.entries.length} ${XU}\u2026`,
                                label: `Search ${XU}`,
                                onChange: UU => {
                                  DU(UU), IU(wc)
                                },
                                count: BU || EU ? {
                                  visible: ZU.length,
                                  total: zU.entries.length
                                } : null,
                                children: EU && (0, pU.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    YU(null)
                                  },
                                  children: [EU, " ", (0, pU.jsx)(tU, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, pU.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: ZU.slice(0, NU).map((UU => {
                                  const zU = "blocks" === XU ? null === yU || void 0 === yU ? void 0 : yU.getBlockFaces(UU.name) : null,
                                    cU = yU && !zU ? yU.getItemTextureUrl(UU.name) : null;
                                  return (0, pU.jsxs)("div", {
                                    id: Oz(XU, UU.name),
                                    className: QU()("DocsCatalogueTile", {
                                      Linked: UU.name === aU
                                    }),
                                    children: [(0, pU.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [zU && (0, pU.jsx)(qc, {
                                        faces: zU
                                      }), cU && (0, pU.jsx)(Oc, {
                                        src: cU
                                      })]
                                    }), (0, pU.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: UU.name
                                    }), UU.variants.length > 0 && (0, pU.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: UU.variants.map((UU => (0, pU.jsx)("span", {
                                        children: UU
                                      }, UU)))
                                    }), (0, pU.jsx)(GU, {
                                      text: UU.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, UU.name)
                                }))
                              }), ZU.length > NU && (0, pU.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  IU(ZU.length)
                                },
                                children: ["Show all ", ZU.length]
                              }), 0 === ZU.length && (0, pU.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", XU, " match."]
                              })]
                            })
                          }
                          var rc = zU(5349),
                            uc = zU(1639);
                          const fc = .95 * rc.c;

                          function ic(UU) {
                            return /^\s*```/.test(UU)
                          }

                          function Hc(UU, XU) {
                            const zU = [
                              []
                            ];
                            let cU = !1;
                            for (const yU of UU.split("\n")) !cU && XU(yU) && zU.at(-1).length > 0 && zU.push([]), ic(yU) && (cU = !cU), zU.at(-1).push(yU);
                            return zU.map((UU => UU.join("\n").trim())).filter(Boolean)
                          }

                          function Mc(UU, XU) {
                            const zU = `${"#".repeat(XU)} `,
                              cU = [];
                            let yU = !1;
                            for (const QU of UU.split("\n")) ic(QU) ? yU = !yU : !yU && QU.startsWith(zU) && cU.push(QU.slice(zU.length).trim());
                            return cU
                          }

                          function vc(UU) {
                            return UU.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class Vc {
                            constructor(UU, XU) {
                              this.origin = XU, this.pages = void 0, this.partPaths = new Map;
                              const zU = UU.map((UU => {
                                const XU = XU => this.resolveLinks(UU, XU).length,
                                  zU = function(UU, XU) {
                                    const zU = UU.map((UU => XU(UU.markdown) + 2)),
                                      cU = zU.reduce(((UU, XU) => UU + XU), 0),
                                      yU = cU / Math.ceil(cU / fc),
                                      QU = [];
                                    let AU = 0;
                                    return UU.forEach(((UU, XU) => {
                                      const cU = zU[XU];
                                      (0 === QU.length || AU + cU > fc || AU + cU / 2 > yU) && (QU.push([]), AU = 0), QU.at(-1).push(UU), AU += cU
                                    })), QU
                                  }(function(UU, XU) {
                                    return Hc(UU, (UU => UU.startsWith("## "))).flatMap((UU => {
                                      var zU;
                                      const cU = null !== (zU = Mc(UU, 2)[0]) && void 0 !== zU ? zU : "";
                                      if (XU(UU) <= fc) return [{
                                        markdown: UU,
                                        section: cU
                                      }];
                                      let yU = !1,
                                        QU = "";
                                      return Hc(UU, (UU => {
                                        const XU = yU && "" !== UU.trim();
                                        return yU = "" === UU.trim(), XU
                                      })).map((UU => {
                                        var XU;
                                        const zU = Mc(UU, 3),
                                          yU = UU.startsWith("### ") ? zU[0] : QU;
                                        return QU = null !== (XU = zU.at(-1)) && void 0 !== XU ? XU : QU, {
                                          markdown: UU,
                                          section: cU || yU
                                        }
                                      }))
                                    }))
                                  }(vc(UU), XU), XU);
                                return {
                                  page: UU,
                                  groups: zU.length > 1 ? zU : []
                                }
                              }));
                              for (const {
                                  page: cU,
                                  groups: yU
                                }
                                of zU) yU.forEach(((UU, XU) => {
                                const zU = (0, rc.u)(cU.slug, XU);
                                for (const yU of UU.flatMap((UU => [...Mc(UU.markdown, 2), ...Mc(UU.markdown, 3)]))) {
                                  const UU = `${cU.id}#${(0,WU.r)(yU)}`;
                                  this.partPaths.has(UU) || this.partPaths.set(UU, zU)
                                }
                              }));
                              this.pages = zU.map((UU => {
                                let {
                                  page: XU,
                                  groups: zU
                                } = UU;
                                return {
                                  page: XU,
                                  path: (0, rc.t)(XU.slug),
                                  markdown: `# ${XU.title}\n\n${this.resolveLinks(XU,vc(XU))}\n`,
                                  parts: zU.map(((UU, cU) => this.renderPart(XU, UU, cU, zU.length)))
                                }
                              }))
                            }
                            url(UU) {
                              return `${this.origin}${UU}`
                            }
                            getPage(UU) {
                              return this.pages.find((XU => XU.page.id === UU))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((UU => (UU.parts.length > 0 ? UU.parts : [{
                                path: UU.path,
                                label: "",
                                markdown: UU.markdown
                              }]).filter((UU => UU.markdown.length > rc.c))))
                            }
                            markdownUrl(UU, XU) {
                              const zU = XU && this.partPaths.get(`${UU.id}#${XU}`) || (0, rc.t)(UU.slug);
                              return this.url(XU ? `${zU}#${XU}` : zU)
                            }
                            resolveLinks(UU, XU) {
                              return XU.replace(/\]\((#[^)]+)\)/g, ((XU, zU) => {
                                var cU;
                                const yU = null !== (cU = sU(zU)) && void 0 !== cU ? cU : this.samePageTarget(UU, zU);
                                return yU ? `](${this.markdownUrl(yU.page,yU.anchor)})` : XU
                              }))
                            }
                            samePageTarget(UU, XU) {
                              const zU = (0, WU.r)(XU.slice(1));
                              return VU(UU, zU) ? {
                                page: UU,
                                anchor: zU
                              } : null
                            }
                            renderPart(UU, XU, zU, cU) {
                              const yU = function(UU) {
                                  const XU = UU.map((UU => UU.section)).filter(Boolean);
                                  if (0 === XU.length) return "";
                                  const zU = XU[0],
                                    cU = XU.at(-1);
                                  return zU === cU ? zU : `${zU} to ${cU}`
                                }(XU),
                                QU = XU.map((UU => UU.markdown)).join("\n\n"),
                                AU = yU ? `It covers ${yU}. ` : "",
                                FU = `Part ${zU+1} of ${cU} of [${UU.title}](${this.url((0,rc.t)(UU.slug))}). ${AU}[llms.txt](${this.url(rc.i)}) lists every part.`;
                              return {
                                path: (0, rc.u)(UU.slug, zU),
                                label: yU,
                                markdown: `# ${UU.title}, part ${zU+1} of ${cU}\n\n${FU}\n\n${this.resolveLinks(UU,QU)}\n`
                              }
                            }
                            llmsTxt(UU) {
                              const XU = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${sc(rc.c)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const zU of iU) {
                                XU.push("", `## ${zU.title}`, "");
                                for (const UU of zU.pageIds) {
                                  const zU = this.getPage(UU),
                                    {
                                      page: cU,
                                      parts: yU
                                    } = zU,
                                    QU = `About ${sc(zU.markdown.length)} tokens${yU.length>0?`, in ${yU.length} parts:`:"."}`;
                                  XU.push(`- [${cU.title}](${this.url(zU.path)}): ${cU.summary} ${QU}`), yU.forEach(((UU, zU) => {
                                    XU.push(`  - [Part ${zU+1}${UU.label?`: ${UU.label}`:""}](${this.url(UU.path)})`)
                                  }))
                                }
                              }
                              return XU.push("", "## Optional", "", `- [Every page in one file](${this.url(rc.e)}): About ${sc(UU.length)} tokens, for a model with a large context window.`, ""), XU.join("\n")
                            }
                            llmsFullTxt() {
                              return iU.flatMap((UU => UU.pageIds.map((UU => this.getPage(UU).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const UU = this.llmsFullTxt(),
                                XU = this.llmsTxt(UU),
                                zU = new Map([
                                  [rc.o, XU],
                                  [rc.i, XU],
                                  [rc.e, UU]
                                ]);
                              for (const cU of this.pages) {
                                zU.set(cU.path, cU.markdown);
                                for (const UU of cU.parts) zU.set(UU.path, UU.markdown)
                              }
                              return zU
                            }
                          }

                          function sc(UU) {
                            return `${Math.max(1,Math.round(UU/4e3))}K`
                          }
                          let nc = null;

                          function mc() {
                            return nc ??= new Vc(fU, uc.b), nc
                          }
                          var lc = zU(5353);
                          const xc = [lc.i, lc.p];

                          function Jc(UU) {
                            return mc().getPage(UU.id).parts.length > 0 ? `Read ${rc.l}, then the parts of the Bloxd Code API's ${UU.title} page it lists, so I can ask questions about it.` : `Read ${uc.b}${(0,rc.t)(UU.slug)} so I can ask questions about it. ${lc.o}`
                          }

                          function jc(UU) {
                            let {
                              page: XU
                            } = UU;
                            const [zU, cU] = kU();
                            return (0, pU.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, pU.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  cU(mc().getPage(XU.id).markdown)
                                },
                                children: [(0, pU.jsx)(tU, {
                                  name: !1 === (null === zU || void 0 === zU ? void 0 : zU.failed) ? "check" : "copy"
                                }), (0, pU.jsx)("span", {
                                  children: zU ? zU.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), xc.map((UU => (0, pU.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, lc.e)(UU, Jc(XU)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, pU.jsx)(tU, {
                                  name: "external-link"
                                }), (0, pU.jsxs)("span", {
                                  children: ["Open in ", UU.name]
                                })]
                              }, UU.name)))]
                            })
                          }

                          function Kc(UU) {
                            return `#${[0,1,2].map((XU=>Math.round(Math.min(255,Math.max(0,UU[XU]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function bc(UU) {
                            return [parseInt(UU.slice(1, 3), 16), parseInt(UU.slice(3, 5), 16), parseInt(UU.slice(5, 7), 16)]
                          }

                          function Tc(UU) {
                            let {
                              label: XU,
                              min: zU,
                              max: cU,
                              step: yU,
                              low: QU,
                              high: AU,
                              onChange: FU
                            } = UU;
                            return (0, pU.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, pU.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, pU.jsx)("span", {
                                  children: XU
                                }), (0, pU.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: QU === AU ? QU : `${QU}\u2013${AU}`
                                })]
                              }), (0, pU.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, pU.jsx)("input", {
                                  type: "range",
                                  min: zU,
                                  max: cU,
                                  step: yU,
                                  value: Math.min(cU, QU),
                                  "aria-label": `Minimum ${XU.toLowerCase()}`,
                                  onChange: UU => {
                                    const XU = Number(UU.target.value);
                                    FU(XU, Math.max(XU, AU))
                                  }
                                }), (0, pU.jsx)("input", {
                                  type: "range",
                                  min: zU,
                                  max: cU,
                                  step: yU,
                                  value: Math.min(cU, AU),
                                  "aria-label": `Maximum ${XU.toLowerCase()}`,
                                  onChange: UU => {
                                    const XU = Number(UU.target.value);
                                    FU(Math.min(XU, QU), XU)
                                  }
                                })]
                              })]
                            })
                          }

                          function hc(UU) {
                            let {
                              label: XU,
                              min: zU,
                              max: cU,
                              step: yU,
                              value: QU,
                              onChange: AU,
                              format: FU = String
                            } = UU;
                            return (0, pU.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, pU.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, pU.jsx)("span", {
                                  children: XU
                                }), (0, pU.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: FU(QU)
                                })]
                              }), (0, pU.jsx)("input", {
                                type: "range",
                                min: zU,
                                max: cU,
                                step: yU,
                                value: Math.min(cU, Math.max(zU, QU)),
                                "aria-label": XU,
                                onChange: UU => {
                                  AU(Number(UU.target.value))
                                }
                              })]
                            })
                          }

                          function Uy(UU) {
                            let {
                              opts: XU,
                              onChange: zU
                            } = UU;
                            const cU = XU.colorGradients;
                            if (!nz(cU)) return (0, pU.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, pU.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, pU.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, pU.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: cU.map(((UU, XU) => (0, pU.jsx)("input", {
                                  type: "color",
                                  value: Kc(UU.color),
                                  "aria-label": `Colour ${XU+1}`,
                                  onChange: UU => {
                                    const yU = [...cU];
                                    yU[XU] = {
                                      color: bc(UU.target.value)
                                    }, zU(yU)
                                  }
                                }, XU)))
                              })]
                            });
                            const yU = (UU, XU) => {
                              const yU = [...cU];
                              yU[UU] = XU, zU(yU)
                            };
                            return (0, pU.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, pU.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, pU.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, pU.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), cU.map(((UU, XU) => {
                                var zU;
                                const cU = null !== (zU = UU.maxColor) && void 0 !== zU ? zU : UU.minColor;
                                return (0, pU.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, pU.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * UU.timeFraction), "%"]
                                  }), (0, pU.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${Kc(UU.minColor)}, ${Kc(cU)})`
                                    }
                                  }), (0, pU.jsx)("input", {
                                    type: "color",
                                    value: Kc(UU.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*UU.timeFraction)}%`,
                                    onChange: zU => {
                                      yU(XU, {
                                        ...UU,
                                        minColor: [...bc(zU.target.value), UU.minColor[3]]
                                      })
                                    }
                                  }), (0, pU.jsx)("input", {
                                    type: "color",
                                    value: Kc(cU),
                                    "aria-label": `Maximum colour at ${Math.round(100*UU.timeFraction)}%`,
                                    onChange: zU => {
                                      yU(XU, {
                                        ...UU,
                                        maxColor: [...bc(zU.target.value), cU[3]]
                                      })
                                    }
                                  })]
                                }, XU)
                              }))]
                            })
                          }
                          const Xy = [-.5, -.5, -.5],
                            zy = [.5, .5, .5],
                            cy = [0, 1, 2, 3, 4, 5, 6, 7].map((UU => [1 & UU ? zy[0] : Xy[0], 2 & UU ? zy[1] : Xy[1], 4 & UU ? zy[2] : Xy[2]]));class yy {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(UU, XU, zU, cU) {
                              const yU = Math.round(31 * XU),
                                QU = Math.round(31 * zU),
                                AU = Math.round(31 * cU),
                                FU = `${yU}|${QU}|${AU}`;
                              let oU = this.tints.get(UU);
                              (!oU || oU.size > 2e3) && (oU = new Map, this.tints.set(UU, oU));
                              let DU = oU.get(FU);
                              if (DU) return DU;
                              DU = document.createElement("canvas"), DU.width = UU.naturalWidth || 16, DU.height = UU.naturalHeight || 16;
                              const EU = DU.getContext("2d");
                              return EU ? (EU.imageSmoothingEnabled = !1, EU.drawImage(UU, 0, 0, DU.width, DU.height), EU.globalCompositeOperation = "multiply", EU.fillStyle = `rgb(${yU/31*255}, ${QU/31*255}, ${AU/31*255})`, EU.fillRect(0, 0, DU.width, DU.height), EU.globalCompositeOperation = "destination-in", EU.drawImage(UU, 0, 0, DU.width, DU.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), oU.set(FU, DU), DU
                            }
                          }

                          function Qy(UU) {
                            let {
                              opts: XU,
                              textureUrl: zU,
                              burst: yU,
                              paused: QU
                            } = UU;
                            const AU = (0, cU.useRef)(null),
                              FU = (0, cU.useRef)(XU);
                            FU.current = XU;
                            const oU = (0, cU.useRef)(QU);
                            oU.current = QU;
                            const DU = (0, cU.useRef)(null),
                              EU = (0, cU.useRef)(null),
                              YU = (0, cU.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(UU) {
                                let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const zU = [-.5, -.5, -.5],
                                  cU = [.5, .5, .5];
                                let yU = .5;
                                for (let QU = 0; QU < 40; QU++) {
                                  const QU = lz(UU, zU, cU, XU),
                                    AU = Math.max(QU.life / 30, .001);
                                  for (; jz(QU, UU.gravity, AU);) yU = Math.max(yU, Math.hypot(QU.pos[0], QU.pos[1], QU.pos[2]) + QU.size / 2)
                                }
                                return yU
                              }(XU)))), [XU]),
                              NU = (0, cU.useRef)(YU);
                            return NU.current = YU, (0, cU.useEffect)((() => {
                              if (DU.current = null, !zU) return;
                              const UU = new Image;
                              let XU = !1;
                              return UU.onload = () => {
                                XU || (DU.current = UU)
                              }, UU.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${zU}`)
                              }, UU.src = zU, () => {
                                XU = !0
                              }
                            }), [zU]), (0, cU.useEffect)((() => {
                              var UU;
                              null === (UU = EU.current) || void 0 === UU || UU.call(EU)
                            }), [XU, yU]), (0, cU.useEffect)((() => {
                              const UU = AU.current,
                                XU = null === UU || void 0 === UU ? void 0 : UU.getContext("2d");
                              if (!UU || !XU) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const zU = new yy;
                              let cU = [],
                                yU = 0,
                                QU = -.7,
                                YU = NU.current,
                                IU = performance.now(),
                                pU = 0,
                                aU = !0,
                                tU = null;
                              const gU = () => {
                                const UU = FU.current,
                                  XU = Math.min(400, Math.max(0, Math.ceil(UU.manualEmitCount)));
                                cU = [];
                                for (let zU = 0; zU < XU; zU++) cU.push(lz(UU, Xy, zy, Math.random));
                                yU = 0
                              };
                              EU.current = gU, gU();
                              const kU = AU => {
                                pU = requestAnimationFrame(kU);
                                const EU = Math.min(.05, (AU - IU) / 1e3);
                                if (IU = AU, !aU) return;
                                const GU = window.devicePixelRatio || 1,
                                  BU = Math.round(UU.clientWidth * GU),
                                  ZU = Math.round(UU.clientHeight * GU);
                                if (0 === BU || 0 === ZU) return;
                                UU.width === BU && UU.height === ZU || (UU.width = BU, UU.height = ZU);
                                const RU = FU.current;
                                null === tU && (QU += .18 * EU), YU += (NU.current - YU) * Math.min(1, 4 * EU);
                                const PU = .6 * EU;
                                cU = cU.filter((UU => jz(UU, RU.gravity, PU))), 0 !== cU.length || oU.current || (yU += EU, yU > .6 && gU());
                                const WU = function(UU, XU, zU, cU) {
                                  const yU = 3.2 * cU,
                                    QU = .44 * Math.min(UU, XU) * yU / cU,
                                    AU = Math.cos(zU),
                                    FU = Math.sin(zU),
                                    oU = Math.cos(.42),
                                    DU = Math.sin(.42);
                                  return (zU, cU, EU) => {
                                    const YU = zU * FU + EU * AU,
                                      NU = yU - (cU * DU + YU * oU);
                                    if (NU < .05) return null;
                                    const IU = QU / NU;
                                    return {
                                      x: UU / 2 + (zU * AU - EU * FU) * IU,
                                      y: XU / 2 - (cU * oU - YU * DU) * IU,
                                      scale: IU,
                                      depth: NU
                                    }
                                  }
                                }(BU, ZU, QU, YU);
                                ! function(UU, XU, zU, cU, yU) {
                                  const QU = UU.createLinearGradient(0, 0, 0, zU);
                                  QU.addColorStop(0, "#23262d"), QU.addColorStop(1, "#16181c"), UU.globalCompositeOperation = "source-over", UU.globalAlpha = 1, UU.fillStyle = QU, UU.fillRect(0, 0, XU, zU);
                                  const AU = (XU, zU) => {
                                      const yU = cU(XU[0], XU[1], XU[2]),
                                        QU = cU(zU[0], zU[1], zU[2]);
                                      yU && QU && (UU.beginPath(), UU.moveTo(yU.x, yU.y), UU.lineTo(QU.x, QU.y), UU.stroke())
                                    },
                                    FU = Math.ceil(yU) + 1,
                                    oU = Xy[1];
                                  UU.lineWidth = 1, UU.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let DU = -FU; DU <= FU; DU++) AU([DU + .5, oU, .5 - FU], [DU + .5, oU, FU + .5]), AU([.5 - FU, oU, DU + .5], [FU + .5, oU, DU + .5]);
                                  UU.strokeStyle = "rgba(255, 255, 255, 0.28)", UU.setLineDash([4, 4]);
                                  for (const DU of cy)
                                    for (const UU of cy) {
                                      const XU = [0, 1, 2].filter((XU => DU[XU] !== UU[XU]));
                                      1 === XU.length && DU[XU[0]] < UU[XU[0]] && AU(DU, UU)
                                    }
                                  UU.setLineDash([])
                                }(XU, BU, ZU, WU, YU);
                                const dU = DU.current,
                                  LU = cU.map((UU => ({
                                    particle: UU,
                                    at: WU(UU.pos[0], UU.pos[1], UU.pos[2])
                                  }))).filter((UU => null !== UU.at)).sort(((UU, XU) => XU.at.depth - UU.at.depth));
                                XU.imageSmoothingEnabled = !1;
                                for (const UU of function(UU) {
                                    switch (UU) {
                                      case Hz.f.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case Hz.f.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case Hz.f.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case Hz.f.MultiplyAdd:
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
                                  }(RU.blendMode)) {
                                  XU.globalCompositeOperation = UU.operation;
                                  for (const {
                                      particle: cU,
                                      at: yU
                                    }
                                    of LU) {
                                    const [QU, AU, FU, oU] = Jz(cU), DU = Math.max(1, cU.size * yU.scale);
                                    XU.globalAlpha = UU.usesAlpha ? Math.min(1, Math.max(0, oU)) : 1, dU ? XU.drawImage(zU.get(dU, QU, AU, FU), yU.x - DU / 2, yU.y - DU / 2, DU, DU) : (XU.fillStyle = `rgb(${255*QU}, ${255*AU}, ${255*FU})`, XU.fillRect(yU.x - DU / 2, yU.y - DU / 2, DU, DU))
                                  }
                                }
                                XU.globalCompositeOperation = "source-over", XU.globalAlpha = 1
                              };
                              pU = requestAnimationFrame(kU);
                              const GU = new IntersectionObserver((UU => {
                                let [XU] = UU;
                                aU = XU.isIntersecting
                              }));
                              GU.observe(UU);
                              const BU = XU => {
                                  tU = XU.clientX, UU.setPointerCapture(XU.pointerId)
                                },
                                ZU = UU => {
                                  null !== tU && (QU += .01 * (UU.clientX - tU), tU = UU.clientX)
                                },
                                RU = () => {
                                  tU = null
                                };
                              return UU.addEventListener("pointerdown", BU), UU.addEventListener("pointermove", ZU), UU.addEventListener("pointerup", RU), UU.addEventListener("pointercancel", RU), () => {
                                cancelAnimationFrame(pU), GU.disconnect(), EU.current = null, UU.removeEventListener("pointerdown", BU), UU.removeEventListener("pointermove", ZU), UU.removeEventListener("pointerup", RU), UU.removeEventListener("pointercancel", RU)
                              }
                            }), []), (0, pU.jsx)("canvas", {
                              ref: AU,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${XU.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const Ay = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            Fy = [{
                              mode: Hz.f.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: Hz.f.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: Hz.f.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: Hz.f.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: Hz.f.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            oy = (0, cU.forwardRef)((function(UU, XU) {
                              var zU, yU;
                              let {
                                textures: AU
                              } = UU;
                              const FU = Gc(),
                                oU = (0, cU.useRef)(null),
                                [DU, EU] = (0, cU.useState)(vz),
                                [YU, NU] = (0, cU.useState)("example"),
                                [IU, aU] = (0, cU.useState)(0),
                                [gU, kU] = (0, cU.useState)(!1),
                                BU = UU => {
                                  const XU = "example" === UU ? vz : Mz(UU);
                                  XU && (EU(XU), NU(UU))
                                };
                              (0, cU.useImperativeHandle)(XU, (() => ({
                                preview: UU => {
                                  var XU;
                                  BU(UU), null === (XU = oU.current) || void 0 === XU || XU.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const ZU = UU => {
                                  EU({
                                    ...DU,
                                    ...UU
                                  }), NU(null)
                                },
                                RU = function(UU, XU) {
                                  if (null !== XU) return `${hz}    presetId: "${XU}",\n${Uc}\n})`;
                                  const zU = UU.velocityGradients.map((UU => `        {\n            timeFraction: ${Kz(UU.timeFraction)},\n            factor: ${Kz(UU.factor)},\n            factor2: ${Kz(UU.factor2)},\n        },`)),
                                    cU = [`    dir1: ${bz(UU.dir1)},`, `    dir2: ${bz(UU.dir2)},`, Uc, `    texture: "${UU.texture}",`, `    minLifeTime: ${Kz(UU.minLifeTime)},`, `    maxLifeTime: ${Kz(UU.maxLifeTime)},`, `    minEmitPower: ${Kz(UU.minEmitPower)},`, `    maxEmitPower: ${Kz(UU.maxEmitPower)},`, `    minSize: ${Kz(UU.minSize)},`, `    maxSize: ${Kz(UU.maxSize)},`, `    manualEmitCount: ${Kz(UU.manualEmitCount)},`, `    gravity: ${bz(UU.gravity)},`, `    colorGradients: ${Tz(UU.colorGradients,"    ")},`, `    velocityGradients: ${zU.length>0?`[\n${zU.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${Kz(UU.blendMode)},`];
                                  return void 0 !== UU.hideDist && cU.push(`    hideDist: ${Kz(UU.hideDist)},`), `${hz}${cU.join("\n")}\n})`
                                }(DU, null === YU || "example" === YU ? null : YU),
                                WU = AU.includes(DU.texture) ? AU : [...AU, DU.texture];
                              return (0, pU.jsxs)("section", {
                                ref: oU,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, pU.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, pU.jsxs)("div", {
                                    children: [(0, pU.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, pU.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, pU.jsx)(GU, {
                                    text: RU,
                                    label: "Copy code"
                                  })]
                                }), (0, pU.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, pU.jsx)("button", {
                                    type: "button",
                                    className: QU()("DocsVariantChip", {
                                      Active: "example" === YU
                                    }),
                                    onClick: () => {
                                      BU("example")
                                    },
                                    children: "Example"
                                  }), Ay.filter((UU => null !== Mz(UU))).map((UU => (0, pU.jsx)("button", {
                                    type: "button",
                                    className: QU()("DocsVariantChip", {
                                      Active: YU === UU
                                    }),
                                    onClick: () => {
                                      BU(UU)
                                    },
                                    children: UU
                                  }, UU))), (0, pU.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== YU && void 0 !== YU ? YU : "custom",
                                    "aria-label": "Preset",
                                    onChange: UU => {
                                      BU(UU.target.value)
                                    },
                                    children: [(0, pU.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === YU && (0, pU.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), iz.e.map((UU => (0, pU.jsx)("option", {
                                      value: UU,
                                      children: UU
                                    }, UU)))]
                                  })]
                                }), (0, pU.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, pU.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, pU.jsx)(Qy, {
                                      opts: DU,
                                      textureUrl: null !== (zU = null === FU || void 0 === FU ? void 0 : FU.getParticleTextureUrl(DU.texture)) && void 0 !== zU ? zU : null,
                                      burst: IU,
                                      paused: gU
                                    }), (0, pU.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, pU.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          aU(IU + 1)
                                        },
                                        children: [(0, pU.jsx)(tU, {
                                          name: "replay"
                                        }), (0, pU.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, pU.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": gU,
                                        onClick: () => {
                                          kU(!gU)
                                        },
                                        children: [(0, pU.jsx)(tU, {
                                          name: gU ? "play" : "pause"
                                        }), (0, pU.jsx)("span", {
                                          children: gU ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, pU.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, pU.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, pU.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, pU.jsx)("span", {
                                          children: "Texture"
                                        }), (0, pU.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: DU.texture
                                        })]
                                      }), (0, pU.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: WU.map((UU => {
                                          var XU;
                                          const zU = null !== (XU = null === FU || void 0 === FU ? void 0 : FU.getParticleTextureUrl(UU)) && void 0 !== XU ? XU : null;
                                          return (0, pU.jsx)("button", {
                                            type: "button",
                                            className: QU()("DocsParticleTexture", {
                                              Active: DU.texture === UU
                                            }),
                                            title: UU,
                                            "aria-label": UU,
                                            "aria-pressed": DU.texture === UU,
                                            onClick: () => {
                                              ZU({
                                                texture: UU
                                              })
                                            },
                                            children: zU ? (0, pU.jsx)("img", {
                                              src: zU,
                                              alt: ""
                                            }) : (0, pU.jsx)(tU, {
                                              name: "image"
                                            })
                                          }, UU)
                                        }))
                                      })]
                                    }), (0, pU.jsx)(hc, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: DU.manualEmitCount,
                                      onChange: UU => {
                                        ZU({
                                          manualEmitCount: UU
                                        })
                                      }
                                    }), (0, pU.jsx)(Tc, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: DU.minLifeTime,
                                      high: DU.maxLifeTime,
                                      onChange: (UU, XU) => {
                                        ZU({
                                          minLifeTime: UU,
                                          maxLifeTime: XU
                                        })
                                      }
                                    }), (0, pU.jsx)(Tc, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: DU.minEmitPower,
                                      high: DU.maxEmitPower,
                                      onChange: (UU, XU) => {
                                        ZU({
                                          minEmitPower: UU,
                                          maxEmitPower: XU
                                        })
                                      }
                                    }), (0, pU.jsx)(Tc, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: DU.minSize,
                                      high: DU.maxSize,
                                      onChange: (UU, XU) => {
                                        ZU({
                                          minSize: UU,
                                          maxSize: XU
                                        })
                                      }
                                    }), (0, pU.jsx)(hc, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (yU = DU.gravity[1]) && void 0 !== yU ? yU : 0,
                                      onChange: UU => {
                                        var XU, zU;
                                        ZU({
                                          gravity: [null !== (XU = DU.gravity[0]) && void 0 !== XU ? XU : 0, UU, null !== (zU = DU.gravity[2]) && void 0 !== zU ? zU : 0]
                                        })
                                      }
                                    }), (0, pU.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, pU.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, pU.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, pU.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: DU.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: UU => {
                                          ZU({
                                            blendMode: Number(UU.target.value)
                                          })
                                        },
                                        children: Fy.map((UU => {
                                          let {
                                            mode: XU,
                                            label: zU
                                          } = UU;
                                          return (0, pU.jsx)("option", {
                                            value: XU,
                                            children: zU
                                          }, XU)
                                        }))
                                      })]
                                    }), (0, pU.jsx)(Uy, {
                                      opts: DU,
                                      onChange: UU => {
                                        ZU({
                                          colorGradients: UU
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, pU.jsx)(PU, {
                                  code: RU,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var Dy = zU(4906),
                            Ey = zU(1978);

                          function Yy(UU, XU) {
                            return UU ? Dy.e.includes(XU) ? UU.getIngameIconUrl(XU) : UU.getItemIconUrl(XU) : null
                          }

                          function Ny(UU) {
                            var XU, zU, cU;
                            let {
                              part: yU,
                              assets: AU
                            } = UU;
                            const FU = Yy(AU, yU.icon),
                              oU = null !== (XU = null === (zU = yU.style) || void 0 === zU ? void 0 : zU.fontSize) && void 0 !== XU ? XU : "1.8em",
                              DU = (0, iX.fc)(yU.style);
                            return (0, pU.jsxs)("span", {
                              className: QU()("DocsBloxdTextIcon", {
                                Missing: !FU
                              }),
                              style: {
                                width: oU,
                                height: oU,
                                opacity: null === (cU = yU.style) || void 0 === cU ? void 0 : cU.opacity
                              },
                              title: FU ? void 0 : "No Bloxd icon, item or block has this name",
                              children: [FU && DU && (0, pU.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: DU,
                                  maskImage: `url("${FU}")`,
                                  WebkitMaskImage: `url("${FU}")`
                                }
                              }), FU ? (0, pU.jsx)("img", {
                                src: FU,
                                alt: "",
                                className: QU()({
                                  Tinted: DU
                                })
                              }) : (0, pU.jsx)(tU, {
                                name: "image"
                              })]
                            })
                          }

                          function Iy(UU) {
                            let {
                              parts: XU,
                              className: zU
                            } = UU;
                            const cU = Gc(),
                              yU = [];
                            let AU = [];
                            const FU = UU => {
                              AU.length > 0 && (yU.push((0, pU.jsx)(Ey.d, {
                                text: AU
                              }, `run-${UU}`)), AU = [])
                            };
                            return XU.forEach(((UU, XU) => {
                              "icon" !== sX(UU) || MX(UU.icon) ? AU.push(UU) : (FU(XU), yU.push((0, pU.jsx)(Ny, {
                                part: UU,
                                assets: cU
                              }, `icon-${XU}`)))
                            })), FU(XU.length), (0, pU.jsx)("div", {
                              className: QU()("DocsStyledTextPreview", zU),
                              children: yU
                            })
                          }
                          const py = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let ay = null;

                          function ty(UU) {
                            if (ay ??= document.createElement("canvas").getContext("2d"), !ay) return "#000000";
                            ay.fillStyle = "#000000", ay.fillStyle = UU;
                            const XU = ay.fillStyle;
                            return XU.startsWith("#") ? XU : "#000000"
                          }

                          function gy(UU) {
                            let {
                              value: XU,
                              label: zU,
                              onChange: cU
                            } = UU;
                            return (0, pU.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, pU.jsx)("input", {
                                type: "color",
                                value: ty(XU),
                                "aria-label": `${zU} picker`,
                                onChange: UU => {
                                  cU(UU.target.value)
                                }
                              }), (0, pU.jsx)("input", {
                                type: "text",
                                value: XU,
                                placeholder: "#ffb914 or gold",
                                "aria-label": zU,
                                spellCheck: !1,
                                onChange: UU => {
                                  cU(UU.target.value)
                                }
                              })]
                            })
                          }

                          function ky(UU) {
                            let {
                              value: XU,
                              fontAwesomeIcons: zU,
                              onChange: yU
                            } = UU;
                            const AU = Gc(),
                              [FU, oU] = (0, cU.useState)(MX(XU) ? "fontAwesome" : "bloxd"),
                              [DU, EU] = (0, cU.useState)(""),
                              YU = DU.trim().toLowerCase(),
                              NU = "bloxd" === FU ? Dy.e : zU,
                              IU = YU ? NU.filter((UU => UU.toLowerCase().includes(YU))) : NU;
                            return (0, pU.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, pU.jsx)("input", {
                                type: "text",
                                value: XU,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: UU => {
                                  yU(UU.target.value)
                                }
                              }), (0, pU.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, pU.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((UU => (0, pU.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": FU === UU,
                                    className: QU()("DocsVariantChip", {
                                      Active: FU === UU
                                    }),
                                    onClick: () => {
                                      oU(UU)
                                    },
                                    children: "bloxd" === UU ? `Bloxd icons (${Dy.e.length})` : `Font Awesome (${zU.length})`
                                  }, UU))), (0, pU.jsx)("input", {
                                    type: "search",
                                    value: DU,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: UU => {
                                      EU(UU.target.value)
                                    }
                                  })
                                ]
                              }), (0, pU.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [IU.map((UU => {
                                  const zU = "bloxd" === FU ? Yy(AU, UU) : null;
                                  return (0, pU.jsx)("button", {
                                    type: "button",
                                    title: UU,
                                    "aria-label": UU,
                                    "aria-pressed": UU === XU,
                                    className: QU()("DocsIconPickerOption", {
                                      Active: UU === XU
                                    }),
                                    onClick: () => {
                                      yU(UU)
                                    },
                                    children: "fontAwesome" === FU ? (0, pU.jsx)(Bz.d, {
                                      name: UU
                                    }) : zU ? (0, pU.jsx)("img", {
                                      src: zU,
                                      alt: ""
                                    }) : (0, pU.jsx)(tU, {
                                      name: "image"
                                    })
                                  }, UU)
                                })), 0 === IU.length && (0, pU.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", DU, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function Gy(UU) {
                            let {
                              property: XU,
                              value: zU,
                              fontAwesomeIcons: cU,
                              onChange: yU
                            } = UU;
                            const {
                              field: QU,
                              label: AU
                            } = XU, FU = UU => "" !== UU || XU.isRequired ? UU : void 0;
                            switch (QU.kind) {
                              case "text":
                                return QU.multiline ? (0, pU.jsx)("textarea", {
                                  value: String(null !== zU && void 0 !== zU ? zU : ""),
                                  rows: 2,
                                  "aria-label": AU,
                                  onChange: UU => {
                                    yU(UU.target.value)
                                  }
                                }) : (0, pU.jsx)("input", {
                                  type: "text",
                                  value: String(null !== zU && void 0 !== zU ? zU : ""),
                                  "aria-label": AU,
                                  onChange: UU => {
                                    yU(FU(UU.target.value))
                                  }
                                });
                              case "size":
                                return (0, pU.jsx)("input", {
                                  type: "text",
                                  value: String(null !== zU && void 0 !== zU ? zU : ""),
                                  placeholder: XU.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": AU,
                                  spellCheck: !1,
                                  onChange: UU => {
                                    yU(FU(UU.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, pU.jsx)(gy, {
                                  value: String(null !== zU && void 0 !== zU ? zU : ""),
                                  label: AU,
                                  onChange: UU => {
                                    yU(FU(UU))
                                  }
                                });
                              case "colours": {
                                const UU = Array.isArray(zU) ? zU : [],
                                  XU = UU => {
                                    yU(UU.length > 0 ? UU : void 0)
                                  };
                                return (0, pU.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [UU.map(((zU, cU) => (0, pU.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, pU.jsx)(gy, {
                                      value: zU,
                                      label: `${AU} ${cU+1}`,
                                      onChange: zU => {
                                        XU(UU.map(((UU, XU) => XU === cU ? zU : UU)))
                                      }
                                    }), (0, pU.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${cU+1}`,
                                      onClick: () => {
                                        XU(UU.filter(((UU, XU) => XU !== cU)))
                                      },
                                      children: (0, pU.jsx)(tU, {
                                        name: "cross"
                                      })
                                    })]
                                  }, cU))), (0, pU.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var zU;
                                      XU([...UU, null !== (zU = UU.at(-1)) && void 0 !== zU ? zU : "#ffffff"])
                                    },
                                    children: [(0, pU.jsx)(tU, {
                                      name: "plus"
                                    }), 0 === UU.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var oU;
                                const UU = "number" === typeof zU ? zU : Number(null !== (oU = XU.defaultText) && void 0 !== oU ? oU : 0);
                                return (0, pU.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, pU.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: UU,
                                    "aria-label": AU,
                                    onChange: UU => {
                                      yU(Number(UU.target.value))
                                    }
                                  }), (0, pU.jsx)("output", {
                                    children: UU.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, pU.jsxs)("select", {
                                  value: String(null !== zU && void 0 !== zU ? zU : ""),
                                  "aria-label": AU,
                                  onChange: UU => {
                                    yU(FU(UU.target.value))
                                  },
                                  children: [!XU.isRequired && (0, pU.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", XU.defaultText, ")"]
                                  }), QU.options.map((UU => (0, pU.jsx)("option", {
                                    value: UU,
                                    children: UU
                                  }, UU)))]
                                });
                              case "icon":
                                return (0, pU.jsx)(ky, {
                                  value: String(null !== zU && void 0 !== zU ? zU : ""),
                                  fontAwesomeIcons: cU,
                                  onChange: yU
                                })
                            }
                          }

                          function By(UU) {
                            let XU;
                            try {
                              XU = JSON.parse(UU)
                            } catch (zU) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${zU.message}`
                              }
                            }
                            return zz(XU) ? {
                              part: XU,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function Zy(UU) {
                            let {
                              parts: XU,
                              index: zU,
                              fontAwesomeIcons: yU,
                              onChange: QU,
                              Cw: AU,
                              onClose: FU
                            } = UU;
                            const oU = (0, cU.useContext)(pX),
                              EU = (0, cU.useRef)(null),
                              YU = XU[zU],
                              NU = sX(YU),
                              [IU, aU] = (0, cU.useState)((() => JSON.stringify(YU, null, 2))),
                              gU = (0, cU.useMemo)((() => "other" === NU ? By(IU).error : null), [NU, IU]);
                            (0, cU.useEffect)((() => {
                              var UU;
                              null === (UU = EU.current) || void 0 === UU || UU.focus()
                            }), []);
                            const kU = (0, pU.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: UU => {
                                UU.target === UU.currentTarget && FU()
                              },
                              children: (0, pU.jsxs)("div", {
                                ref: EU,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${zU+1}: ${vX[NU]}`,
                                tabIndex: -1,
                                onKeyDown: UU => {
                                  "Escape" === UU.key ? (UU.stopPropagation(), FU()) : "Tab" === UU.key && EU.current && function(UU, XU) {
                                    const zU = Array.from(UU.querySelectorAll(CX)),
                                      cU = zU[0],
                                      yU = zU.at(-1);
                                    if (!cU || !yU) return;
                                    const QU = document.activeElement;
                                    !XU.shiftKey || QU !== cU && QU !== UU ? XU.shiftKey || QU !== yU || (XU.preventDefault(), cU.focus()) : (XU.preventDefault(), yU.focus())
                                  }(EU.current, UU)
                                },
                                children: [(0, pU.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, pU.jsxs)("div", {
                                    children: [(0, pU.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", zU + 1]
                                    }), (0, pU.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: vX[NU]
                                    })]
                                  }), (0, pU.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: FU,
                                    children: (0, pU.jsx)(tU, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, pU.jsx)(Iy, {
                                  parts: XU,
                                  className: "DocsTextDialogPreview"
                                }), (0, pU.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === NU ? (0, pU.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, pU.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, pU.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: IU,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: UU => {
                                        aU(UU.target.value);
                                        const XU = By(UU.target.value);
                                        null !== XU.part && QU(XU.part)
                                      }
                                    }), gU && (0, pU.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: gU
                                    })]
                                  }) : mX[NU].map((UU => {
                                    const XU = xX(YU, UU.path),
                                      zU = UU.isRequired ? JSON.stringify(jX(YU, UU.path)) === JSON.stringify(YU) : void 0 === XU;
                                    return (0, pU.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, pU.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, pU.jsx)("span", {
                                          children: UU.label
                                        }), (0, pU.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: zU,
                                          "aria-label": `Reset ${UU.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            QU(jX(YU, UU.path))
                                          },
                                          children: [(0, pU.jsx)(tU, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, pU.jsx)(Gy, {
                                        property: UU,
                                        value: XU,
                                        fontAwesomeIcons: yU,
                                        onChange: XU => {
                                          QU(JX(YU, UU.path, XU))
                                        }
                                      }), !UU.isRequired && (0, pU.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", UU.defaultText]
                                      })]
                                    }, UU.path.join("."))
                                  }))
                                }), (0, pU.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, pU.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: AU,
                                    children: [(0, pU.jsx)(tU, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, pU.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: FU,
                                    children: "Done"
                                  })]
                                }), (0, pU.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: py.map((UU => (0, pU.jsx)("option", {
                                    value: UU
                                  }, UU)))
                                })]
                              })
                            });
                            return oU ? (0, DU.createPortal)(kU, oU) : kU
                          }
                          const Ry = [{
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
                            Py = Object.keys(VX);

                          function Wy(UU) {
                            let {
                              fontAwesomeIcons: XU
                            } = UU;
                            const [zU, yU] = (0, cU.useState)(Ry[0].parts), [AU, FU] = (0, cU.useState)((() => hX(Ry[0].parts))), [oU, DU] = (0, cU.useState)(null), [EU, YU] = (0, cU.useState)(!1), [NU, IU] = (0, cU.useState)(null), [aU, gU] = (0, cU.useState)(!1), [kU, GU] = (0, cU.useState)(null), BU = (0, cU.useRef)(null), ZU = hX(zU);
                            (0, cU.useLayoutEffect)((() => {
                              var UU;
                              if (!kU) return;
                              const XU = UU => {
                                  var XU;
                                  return null === (XU = BU.current) || void 0 === XU ? void 0 : XU.querySelector(`[data-focus-key="${UU}"]`)
                                },
                                zU = XU(kU.key);
                              null === (UU = zU && !zU.disabled ? zU : XU(kU.fallback)) || void 0 === UU || UU.focus(), GU(null)
                            }), [kU]);
                            const RU = UU => {
                                yU(UU), FU(hX(UU)), DU(null)
                              },
                              WU = UU => {
                                RU(zU.filter(((XU, zU) => zU !== UU))), GU({
                                  key: `edit-${Math.min(UU,zU.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              dU = (UU, XU) => {
                                const cU = [...zU],
                                  [yU] = cU.splice(UU, 1);
                                cU.splice(UU + XU, 0, yU), RU(cU);
                                GU({
                                  key: `${XU<0?"up":"down"}-${UU+XU}`,
                                  fallback: `edit-${UU+XU}`
                                })
                              };
                            return (0, pU.jsxs)("section", {
                              ref: BU,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, pU.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, pU.jsxs)("div", {
                                  children: [(0, pU.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, pU.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, pU.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: Ry.map((UU => (0, pU.jsx)("button", {
                                  type: "button",
                                  className: QU()("DocsVariantChip", {
                                    Active: ZU === hX(UU.parts)
                                  }),
                                  onClick: () => {
                                    RU(UU.parts)
                                  },
                                  children: UU.label
                                }, UU.label)))
                              }), (0, pU.jsx)(Iy, {
                                parts: zU,
                                className: "DocsTextEditorPreview"
                              }), (0, pU.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, pU.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, pU.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, pU.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [zU.map(((UU, XU) => {
                                      const cU = sX(UU);
                                      return (0, pU.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, pU.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${XU}`,
                                          "aria-label": `Edit part ${XU+1}, ${vX[cU]}`,
                                          onClick: () => {
                                            IU(XU)
                                          },
                                          children: [(0, pU.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: vX[cU]
                                          }), (0, pU.jsx)(Iy, {
                                            parts: [UU],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== cU && (0, pU.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: KX(UU)
                                          })]
                                        }), (0, pU.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, pU.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${XU+1} up`,
                                            "data-focus-key": `up-${XU}`,
                                            disabled: 0 === XU,
                                            onClick: () => {
                                              dU(XU, -1)
                                            },
                                            children: (0, pU.jsx)(tU, {
                                              name: "chevron-up"
                                            })
                                          }), (0, pU.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${XU+1} down`,
                                            "data-focus-key": `down-${XU}`,
                                            disabled: XU === zU.length - 1,
                                            onClick: () => {
                                              dU(XU, 1)
                                            },
                                            children: (0, pU.jsx)(tU, {
                                              name: "chevron-down"
                                            })
                                          }), (0, pU.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${XU+1}`,
                                            onClick: () => {
                                              WU(XU)
                                            },
                                            children: (0, pU.jsx)(tU, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, XU)
                                    })), 0 === zU.length && (0, pU.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, pU.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: UU => {
                                      "Escape" === UU.key && aU && (UU.stopPropagation(), gU(!1), GU({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, pU.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": aU,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        gU(!aU)
                                      },
                                      children: [(0, pU.jsx)(tU, {
                                        name: "plus"
                                      }), "Add a part", (0, pU.jsx)(tU, {
                                        name: aU ? "chevron-up" : "chevron-down"
                                      })]
                                    }), aU && (0, pU.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: Py.map((UU => (0, pU.jsx)("li", {
                                        children: (0, pU.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (UU => {
                                              RU([...zU, VX[UU]]), gU(!1), IU(zU.length)
                                            })(UU)
                                          },
                                          children: vX[UU]
                                        })
                                      }, UU)))
                                    })]
                                  })]
                                }), (0, pU.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, pU.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, pU.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": EU,
                                      onClick: () => {
                                        YU(!EU)
                                      },
                                      children: [(0, pU.jsx)(tU, {
                                        name: EU ? "check" : "pencil"
                                      }), EU ? "Done" : "Edit"]
                                    })]
                                  }), EU ? (0, pU.jsxs)(pU.Fragment, {
                                    children: [(0, pU.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: AU,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: UU => {
                                        FU(UU.target.value);
                                        const XU = cz(UU.target.value);
                                        DU(XU.error), XU.parts && yU(XU.parts)
                                      }
                                    }), oU && (0, pU.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: oU
                                    })]
                                  }) : (0, pU.jsx)(PU, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${ZU})`
                                  })]
                                })]
                              }), null !== NU && NU < zU.length && (0, pU.jsx)(Zy, {
                                parts: zU,
                                index: NU,
                                fontAwesomeIcons: XU,
                                onChange: UU => {
                                  ((UU, XU) => {
                                    RU(zU.map(((zU, cU) => cU === UU ? XU : zU)))
                                  })(NU, UU)
                                },
                                Cw: () => {
                                  WU(NU), IU(null)
                                },
                                onClose: () => {
                                  IU(null), GU({
                                    key: `edit-${NU}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var dy = zU(5369),
                            Ly = zU(5358),
                            ey = zU(5364),
                            Cy = zU(5374);
                          const wy = 40,
                            qy = 800,
                            Oy = 150,
                            Sy = 8e3,
                            ry = 2e3;

                          function uy(UU, XU) {
                            return 12 * Math.log2(XU / UU)
                          }

                          function fy(UU, XU) {
                            return Math.round(UU * 2 ** (XU / 12) * 10) / 10
                          }

                          function iy(UU) {
                            return `${UU} ms`
                          }

                          function Hy(UU) {
                            return `${UU} st`
                          }
                          const My = [{
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

                          function vy(UU) {
                            let {
                              synth: XU,
                              onChange: zU
                            } = UU;
                            const cU = (0, dy.l)(XU);
                            return (0, pU.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, pU.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, pU.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, pU.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, pU.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, pU.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, pU.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: dy.h.map((UU => (0, pU.jsx)("button", {
                                      type: "button",
                                      className: QU()("DocsVariantChip", {
                                        Active: XU.waveform === UU
                                      }),
                                      "aria-pressed": XU.waveform === UU,
                                      onClick: () => {
                                        zU({
                                          waveform: UU
                                        })
                                      },
                                      children: UU
                                    }, UU)))
                                  })]
                                }), (0, pU.jsx)(hc, {
                                  label: "Pitch",
                                  min: 0,
                                  max: uy(wy, qy),
                                  step: .1,
                                  value: uy(wy, XU.pitchHz),
                                  format: () => `${XU.pitchHz} Hz`,
                                  onChange: UU => {
                                    zU({
                                      pitchHz: fy(wy, UU)
                                    })
                                  }
                                }), (0, pU.jsx)(hc, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: XU.syllableMs,
                                  format: iy,
                                  onChange: UU => {
                                    zU({
                                      syllableMs: UU
                                    })
                                  }
                                }), (0, pU.jsx)(hc, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: XU.volume,
                                  onChange: UU => {
                                    zU({
                                      volume: UU
                                    })
                                  }
                                })]
                              }), (0, pU.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, pU.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, pU.jsx)(hc, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: XU.durationMs,
                                  format: iy,
                                  onChange: UU => {
                                    zU({
                                      durationMs: UU
                                    })
                                  }
                                }), (0, pU.jsx)(hc, {
                                  label: "Fade in",
                                  min: 0,
                                  max: cU.durationMs,
                                  step: 1,
                                  value: cU.attackMs,
                                  format: iy,
                                  onChange: UU => {
                                    zU({
                                      attackMs: UU
                                    })
                                  }
                                }), (0, pU.jsx)(hc, {
                                  label: "Fade out",
                                  min: 0,
                                  max: cU.durationMs - cU.attackMs,
                                  step: 1,
                                  value: cU.releaseMs,
                                  format: iy,
                                  onChange: UU => {
                                    zU({
                                      releaseMs: UU
                                    })
                                  }
                                }), (0, pU.jsx)(hc, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: XU.glideSemitones,
                                  format: Hy,
                                  onChange: UU => {
                                    zU({
                                      glideSemitones: UU
                                    })
                                  }
                                }), (0, pU.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, pU.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== XU.lowpassHz,
                                    onChange: UU => {
                                      zU({
                                        lowpassHz: UU.target.checked ? ry : null
                                      })
                                    }
                                  }), (0, pU.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== XU.lowpassHz && (0, pU.jsx)(hc, {
                                  label: "Filter",
                                  min: 0,
                                  max: uy(Oy, Sy),
                                  step: .1,
                                  value: uy(Oy, XU.lowpassHz),
                                  format: () => `${XU.lowpassHz} Hz`,
                                  onChange: UU => {
                                    zU({
                                      lowpassHz: fy(Oy, UU)
                                    })
                                  }
                                })]
                              }), (0, pU.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, pU.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), My.map((UU => {
                                  let {
                                    key: cU,
                                    label: yU,
                                    max: QU
                                  } = UU;
                                  return (0, pU.jsx)(hc, {
                                    label: yU,
                                    min: 0,
                                    max: QU,
                                    step: .1,
                                    value: XU.intonation[cU],
                                    format: Hy,
                                    onChange: UU => {
                                      zU({
                                        intonation: {
                                          ...XU.intonation,
                                          [cU]: UU
                                        }
                                      })
                                    }
                                  }, cU)
                                }))]
                              })]
                            })
                          }
                          const Vy = Object.keys(dy.i),
                            sy = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function ny(UU) {
                            var XU;
                            const zU = JSON.stringify((0, dy.l)(UU));
                            return null !== (XU = Vy.find((UU => JSON.stringify((0, dy.l)(dy.i[UU])) === zU))) && void 0 !== XU ? XU : null
                          }

                          function my(UU) {
                            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof UU || null === UU) return JSON.stringify(UU);
                            return `{\n${Object.entries(UU).map((UU=>{let[zU,cU]=UU;return`${XU}    ${zU}: ${my(cU,`${XU}    `)},`})).join("\n")}\n${XU}}`
                          }

                          function ly(UU, XU, zU) {
                            const cU = ny(UU),
                              yU = [`    line: ${JSON.stringify(XU)},`];
                            return zU && yU.push(`    speakerName: ${JSON.stringify(zU)},`), yU.push("    voice,"), `const voice = ${cU?JSON.stringify(cU):my((0,dy.l)(UU))}\n\napi.setClientOption(playerId, "dialogue", {\n${yU.join("\n")}\n})`
                          }
                          const xy = 400,
                            Jy = 90;
                          let jy = null;

                          function Ky(UU, XU, zU) {
                            return jy ??= new AudioContext, jy.resume(), (0, Cy.b)(jy, jy.destination, UU, XU, zU, (() => {}))
                          }

                          function by() {
                            const [UU, XU] = (0, cU.useState)(dy.i.regular), [zU, yU] = (0, cU.useState)(sy[0]), [AU, FU] = (0, cU.useState)("Innkeeper"), [oU, DU] = (0, cU.useState)(0), EU = Ec((UU => UU.volume)), YU = (0, cU.useRef)(null), NU = (0, cU.useRef)(0), IU = (0, cU.useRef)(0), aU = () => {
                              var UU;
                              null === (UU = YU.current) || void 0 === UU || UU.call(YU), YU.current = null
                            };
                            (0, cU.useEffect)((() => () => {
                              var UU;
                              null === (UU = YU.current) || void 0 === UU || UU.call(YU), window.clearTimeout(NU.current)
                            }), []);
                            const gU = (0, cU.useMemo)((() => ({
                                line: zU,
                                speakerName: AU || void 0,
                                voice: UU
                              })), [zU, AU, UU]),
                              kU = (0, cU.useRef)(gU);
                            kU.current = gU;
                            const BU = ny(UU),
                              ZU = UU => {
                                window.clearTimeout(NU.current), aU();
                                const {
                                  plan: XU,
                                  synth: zU
                                } = (0, ey.g)(UU);
                                zU && (YU.current = Ky(zU, XU.blips, EU)), DU((UU => UU + 1))
                              },
                              RU = ly(UU, zU, AU);
                            return (0, pU.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, pU.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, pU.jsxs)("div", {
                                  children: [(0, pU.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, pU.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, pU.jsx)(GU, {
                                  text: RU,
                                  label: "Copy code"
                                })]
                              }), (0, pU.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [Vy.map((UU => (0, pU.jsx)("button", {
                                  type: "button",
                                  className: QU()("DocsVariantChip", {
                                    Active: BU === UU
                                  }),
                                  "aria-pressed": BU === UU,
                                  onClick: () => {
                                    (UU => {
                                      const zU = dy.i[UU];
                                      XU(zU), ZU({
                                        ...gU,
                                        voice: zU
                                      })
                                    })(UU)
                                  },
                                  children: UU
                                }, UU))), !BU && (0, pU.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, pU.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, pU.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, pU.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, pU.jsx)(Ly.d, {
                                      display: gU
                                    }, oU)
                                  }), (0, pU.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: UU => {
                                      UU.preventDefault(), ZU(gU)
                                    },
                                    children: [(0, pU.jsx)("input", {
                                      value: zU,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: UU => {
                                        yU(UU.target.value)
                                      }
                                    }), (0, pU.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, pU.jsx)(tU, {
                                        name: "play"
                                      }), (0, pU.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, pU.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: sy.map((UU => (0, pU.jsx)("button", {
                                      type: "button",
                                      className: QU()("DocsVariantChip", {
                                        Active: zU === UU
                                      }),
                                      onClick: () => {
                                        var XU;
                                        yU(XU = UU), ZU({
                                          ...gU,
                                          line: XU
                                        })
                                      },
                                      children: UU
                                    }, UU)))
                                  }), (0, pU.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, pU.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, pU.jsx)("input", {
                                      value: AU,
                                      placeholder: "No name",
                                      onChange: UU => {
                                        FU(UU.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, pU.jsx)(vy, {
                                  synth: UU,
                                  onChange: zU => {
                                    const cU = {
                                      ...UU,
                                      ...zU
                                    };
                                    XU(cU);
                                    const yU = {
                                        ...gU,
                                        voice: cU
                                      },
                                      QU = performance.now();
                                    if (QU - IU.current >= Jy) {
                                      IU.current = QU, aU();
                                      const UU = (0, ey.g)(yU).plan.blips[0];
                                      UU && (YU.current = Ky((0, dy.l)(cU), [{
                                        ...UU,
                                        atMs: 0
                                      }], EU))
                                    }
                                    window.clearTimeout(NU.current), NU.current = window.setTimeout((() => {
                                      ZU(kU.current)
                                    }), xy)
                                  }
                                })]
                              }), (0, pU.jsx)(PU, {
                                code: RU,
                                lang: "ts"
                              })]
                            })
                          }
                          var Ty = zU(5387);
                          const hy = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            UQ = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            XQ = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${UQ}`, "g"), Ty.n],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, Ty.n]
                            ];

                          function zQ(UU) {
                            return `${UU.pageId}#${UU.anchor}`
                          }
                          let cQ, yQ, QQ;

                          function AQ(UU) {
                            const XU = (0, WU.i)(UU),
                              zU = new Set;
                            for (const [, , cU] of XU.matchAll(WU.d)) {
                              const UU = cU.startsWith("#") ? sU(cU) : null,
                                XU = UU ? zQ({
                                  pageId: UU.page.id,
                                  anchor: UU.anchor
                                }) : null;
                              null !== XU && (cQ || (cQ = new Set(fU.flatMap((UU => CU(UU.layout) ? vU(UU).sections.map((XU => zQ({
                                pageId: UU.id,
                                anchor: XU.heading.anchor
                              }))) : [])))), cQ).has(XU) && zU.add(XU)
                            }
                            for (const [, , cU] of XU.matchAll(hy)) {
                              const UU = NX(cU);
                              UU && zU.add(zQ(UU))
                            }
                            return zU
                          }

                          function FQ(UU, XU) {
                            const zU = new Set,
                              cU = function(UU) {
                                return UU.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(UU);
                            for (const [, yU] of cU.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) zU.add(yU);
                            for (const [yU, QU] of XQ)
                              for (const [, UU] of(0, Ty.e)(cU, yU, QU)) XU.has(UU) && zU.add(UU);
                            return zU
                          }

                          function oQ(UU, XU, zU, cU) {
                            const yU = UU.get(XU);
                            yU ? !cU && yU.some((UU => UU.pageId === zU.pageId)) || yU.push(zU) : UU.set(XU, [zU])
                          }
                          const DQ = /^[A-Za-z_$][\w$]*$/;

                          function EQ(UU) {
                            return DQ.test(UU.name) ? UU.name : "options"
                          }

                          function YQ(UU, XU) {
                            const zU = UU.params.map(EQ).join(", ");
                            return XU ? `${UU.name} = (${zU}) => {\n\t\n}` : `api.${UU.name}(${zU})`
                          }

                          function NQ(UU) {
                            let {
                              method: XU,
                              isCallback: zU
                            } = UU;
                            return (0, pU.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, pU.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [zU ? (0, pU.jsxs)(pU.Fragment, {
                                  children: [(0, pU.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: XU.name
                                  }), (0, pU.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, pU.jsxs)(pU.Fragment, {
                                  children: [(0, pU.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, pU.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: XU.name
                                  }), (0, pU.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), XU.params.map(((UU, zU) => (0, pU.jsxs)(cU.Fragment, {
                                  children: [zU > 0 && (0, pU.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, pU.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${XU.name}-${EQ(UU)}`,
                                    children: UU.name
                                  })]
                                }, UU.name))), (0, pU.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: zU ? ") => " : ")"
                                }), zU && !XU.returns && (0, pU.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), XU.returns && XU.returns.type && (0, pU.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!zU && (0, pU.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, pU.jsx)(dX, {
                                  type: XU.returns.type
                                })]
                              })]
                            })
                          }

                          function IQ(UU) {
                            let {
                              title: XU,
                              references: zU
                            } = UU;
                            const yU = (0, cU.useContext)(IX);
                            return (0, pU.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, pU.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: XU
                              }), zU.map((UU => (0, pU.jsx)(AU.b, {
                                to: mU(yU, HU(UU.pageId), UU.anchor),
                                children: UU.label
                              }, `${UU.pageId}#${UU.anchor}`)))]
                            })
                          }

                          function pQ(UU) {
                            var XU, zU;
                            let {
                              pageId: cU,
                              anchor: yU
                            } = UU;
                            const QU = zQ({
                                pageId: cU,
                                anchor: yU
                              }),
                              AU = null !== (XU = function() {
                                if (!QQ) {
                                  QQ = new Map;
                                  const cU = new Set(fU.filter((UU => "callbacks" === UU.layout)).flatMap((UU => vU(UU).sections.map((UU => UU.heading.text)))));
                                  for (const yU of fU)
                                    if ("article" === yU.layout || "snippets" === yU.layout)
                                      for (const QU of (0, WU.u)(vU(yU)))
                                        for (const {
                                            code: AU
                                          }
                                          of(0, WU.k)(QU.blocks))
                                          for (const FU of FQ(AU, cU)) {
                                            const cU = YX().get(FU);
                                            if (cU) {
                                              var UU, XU, zU;
                                              const AU = {
                                                pageId: yU.id,
                                                anchor: null !== (UU = null === (XU = QU.heading) || void 0 === XU ? void 0 : XU.anchor) && void 0 !== UU ? UU : "",
                                                label: null !== (zU = yU.navTitle) && void 0 !== zU ? zU : yU.title
                                              };
                                              oQ(QQ, zQ(cU), AU, !1)
                                            }
                                          }
                                }
                                return QQ
                              }().get(QU)) && void 0 !== XU ? XU : [],
                              FU = null !== (zU = function() {
                                if (!yQ) {
                                  yQ = new Map;
                                  const UU = HU("changelog");
                                  for (const XU of vU(UU).sections) {
                                    const zU = new Set(XU.blocks.flatMap((UU => [...AQ(UU)])));
                                    for (const cU of zU) {
                                      const zU = {
                                        pageId: UU.id,
                                        anchor: XU.heading.anchor,
                                        label: XU.heading.text
                                      };
                                      oQ(yQ, cU, zU, !0)
                                    }
                                  }
                                }
                                return yQ
                              }().get(QU)) && void 0 !== zU ? zU : [];
                            return 0 === AU.length && 0 === FU.length ? null : (0, pU.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [AU.length > 0 && (0, pU.jsx)(IQ, {
                                title: "Used in",
                                references: AU
                              }), FU.length > 0 && (0, pU.jsx)(IQ, {
                                title: "Changelog",
                                references: FU
                              })]
                            })
                          }

                          function aQ(UU) {
                            let {
                              method: XU,
                              pageId: zU,
                              anchor: cU,
                              isCallback: yU
                            } = UU;
                            const QU = yU ? void 0 : FX().get(XU.name),
                              AU = XU.description.length > 0 || null === QU || void 0 === QU || !QU.description ? XU.description : (0, WU.y)(QU.description);
                            return (0, pU.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, pU.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, pU.jsx)(Dz, {
                                  level: 2,
                                  text: XU.name,
                                  anchor: cU,
                                  className: "DocsCardTitle"
                                }), (0, pU.jsx)(GU, {
                                  text: YQ(XU, yU),
                                  label: yU ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, pU.jsx)(NQ, {
                                method: XU,
                                isCallback: yU
                              }), QU && null !== QU.deprecation && (0, pU.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, pU.jsx)("strong", {
                                  children: "Deprecated"
                                }), QU.deprecation && (0, pU.jsxs)(pU.Fragment, {
                                  children: [": ", (0, pU.jsx)(RX, {
                                    text: (FU = QU.deprecation, (0, Ty.z)(FU, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, Ty.j)("`\\w"), (UU => {
                                      let [XU] = UU;
                                      return YX().has(XU) ? `\`${XU}\`` : XU
                                    })))
                                  })]
                                })]
                              }), AU.length > 0 && (0, pU.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, pU.jsx)(Iz, {
                                  blocks: AU
                                })
                              }), XU.params.length > 0 && (0, pU.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, pU.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, pU.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: XU.params.map((UU => (0, pU.jsxs)("div", {
                                    id: `${XU.name}-${EQ(UU)}`,
                                    className: "DocsParam",
                                    children: [(0, pU.jsxs)("dt", {
                                      children: [(0, pU.jsx)("code", {
                                        className: "DocsParamName",
                                        children: UU.name
                                      }), (0, pU.jsx)(dX, {
                                        type: UU.type
                                      })]
                                    }), UU.description && (0, pU.jsx)("dd", {
                                      children: (0, pU.jsx)(RX, {
                                        text: UU.description
                                      })
                                    })]
                                  }, UU.name)))
                                })]
                              }), XU.returns && (XU.returns.type || XU.returns.description.length > 0) && (0, pU.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, pU.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, pU.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [XU.returns.type && (0, pU.jsx)(dX, {
                                    type: XU.returns.type
                                  }), XU.returns.description.length > 0 && (0, pU.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, pU.jsx)(Iz, {
                                      blocks: XU.returns.description
                                    })
                                  })]
                                })]
                              }), (0, pU.jsx)(pQ, {
                                pageId: zU,
                                anchor: cU
                              })]
                            });
                            var FU
                          }

                          function tQ(UU) {
                            var XU;
                            return null !== UU.defaultValue && "undefined" !== UU.defaultValue ? UU.defaultValue : null !== (XU = UU.example) && void 0 !== XU ? XU : "value"
                          }

                          function gQ(UU) {
                            let {
                              setting: XU,
                              pageId: zU,
                              anchor: cU,
                              setterSnippet: yU
                            } = UU;
                            const QU = null === XU.defaultValue ? null : gX(XU.defaultValue);
                            return (0, pU.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, pU.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, pU.jsx)(Dz, {
                                  level: 2,
                                  text: XU.name,
                                  anchor: cU,
                                  className: "DocsCardTitle"
                                }), (0, pU.jsx)(GU, {
                                  text: yU(XU.name, tQ(XU)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, pU.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, pU.jsxs)("div", {
                                  children: [(0, pU.jsx)("dt", {
                                    children: "Type"
                                  }), (0, pU.jsx)("dd", {
                                    children: (0, pU.jsx)(dX, {
                                      type: XU.type
                                    })
                                  })]
                                }), null !== XU.defaultValue && (0, pU.jsxs)("div", {
                                  children: [(0, pU.jsx)("dt", {
                                    children: "Default"
                                  }), (0, pU.jsx)("dd", {
                                    children: (0, pU.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [QU && (0, pU.jsx)(kX, {
                                        colour: QU
                                      }), XU.defaultValue]
                                    })
                                  })]
                                }), null !== XU.example && (0, pU.jsxs)("div", {
                                  children: [(0, pU.jsx)("dt", {
                                    children: "Example"
                                  }), (0, pU.jsx)("dd", {
                                    children: (0, pU.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: XU.example
                                    })
                                  })]
                                })]
                              }), XU.description.length > 0 && (0, pU.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, pU.jsx)(Iz, {
                                  blocks: XU.description
                                })
                              }), (0, pU.jsx)(pQ, {
                                pageId: zU,
                                anchor: cU
                              })]
                            })
                          }

                          function kQ(UU) {
                            let {
                              section: XU
                            } = UU;
                            return (0, pU.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, pU.jsx)(Dz, {
                                level: 2,
                                text: XU.heading.text,
                                anchor: XU.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, pU.jsx)("div", {
                                className: "DocsProse",
                                children: (0, pU.jsx)(Iz, {
                                  blocks: XU.blocks
                                })
                              })]
                            })
                          }

                          function GQ(UU) {
                            let {
                              section: XU
                            } = UU;
                            return (0, pU.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, pU.jsx)(Dz, {
                                level: XU.heading.level,
                                text: XU.heading.text,
                                anchor: XU.heading.anchor
                              }), (0, pU.jsx)(Iz, {
                                blocks: XU.blocks
                              })]
                            })
                          }
                          const BQ = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function ZQ(UU) {
                            let {
                              page: XU,
                              section: zU
                            } = UU;
                            if ("methods" === XU.layout || "callbacks" === XU.layout) return (0, pU.jsx)(aQ, {
                              method: Pz(zU),
                              pageId: XU.id,
                              anchor: zU.heading.anchor,
                              isCallback: "callbacks" === XU.layout
                            });
                            if ("settings" === XU.layout) {
                              const UU = function(UU) {
                                const XU = {
                                  name: UU.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const cU of UU.blocks) {
                                  var zU;
                                  if (Rz(cU)) continue;
                                  const UU = "paragraph" === cU.kind ? cU.text.match(Wz) : null;
                                  if (!UU) {
                                    XU.description.push(cU);
                                    continue
                                  }
                                  const yU = null !== (zU = Zz(UU[2])) && void 0 !== zU ? zU : UU[2];
                                  "Type" === UU[1] ? XU.type = yU : "Default" === UU[1] ? XU.defaultValue = yU : "" !== yU && (XU.example = yU)
                                }
                                return XU.type ? XU : null
                              }(zU);
                              if (UU) return (0, pU.jsx)(gQ, {
                                setting: UU,
                                pageId: XU.id,
                                anchor: zU.heading.anchor,
                                setterSnippet: XU.setterSnippet
                              })
                            }
                            return "snippets" === XU.layout ? (0, pU.jsx)(kQ, {
                              section: zU
                            }) : "changelog" === XU.layout ? (0, pU.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, pU.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, pU.jsx)(Dz, {
                                  level: 2,
                                  text: zU.heading.text,
                                  anchor: zU.heading.anchor
                                })
                              }), (0, pU.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, pU.jsx)(Iz, {
                                  blocks: dz(zU.blocks)
                                })
                              })]
                            }) : XU.gallery ? (0, pU.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, pU.jsx)(Dz, {
                                level: zU.heading.level,
                                text: zU.heading.text,
                                anchor: zU.heading.anchor
                              }), (0, pU.jsx)(Lc, {
                                kind: XU.gallery,
                                content: vU(XU),
                                blocks: zU.blocks
                              })]
                            }) : (0, pU.jsx)(GQ, {
                              section: zU
                            })
                          }

                          function RQ(UU) {
                            let {
                              page: XU,
                              onTocChange: zU
                            } = UU;
                            const yU = vU(XU),
                              [QU, AU] = (0, cU.useState)(""),
                              FU = "article" !== XU.layout,
                              oU = tz(XU.gallery) ? XU.gallery : null,
                              DU = null !== oU,
                              EU = QU.trim().toLowerCase(),
                              YU = (0, cU.useRef)(null),
                              NU = (0, cU.useCallback)((UU => {
                                var XU;
                                null === (XU = YU.current) || void 0 === XU || XU.preview(UU)
                              }), []),
                              IU = (0, cU.useMemo)((() => {
                                if (!XU.hasParticlePlayground) return [];
                                const UU = wz(yU.intro).find((UU => "names" === UU.kind && !UU.names.some((UU => null !== Mz(UU.name)))));
                                return "names" === (null === UU || void 0 === UU ? void 0 : UU.kind) ? UU.names.map((UU => UU.name)) : []
                              }), [XU, yU]),
                              aU = (0, cU.useMemo)((() => {
                                if (!XU.hasTextPlayground) return [];
                                const UU = yU.sections.flatMap((UU => UU.blocks.flatMap((UU => {
                                  var XU;
                                  return (null !== (XU = Cz(UU)) && void 0 !== XU ? XU : []).flatMap((UU => MX(UU.name) ? [UU.name] : []))
                                }))));
                                return [...new Set(UU)]
                              }), [XU, yU]),
                              tU = (0, cU.useMemo)((() => EU ? yU.sections.filter((UU => function(UU, XU) {
                                return !!UU.heading.text.toLowerCase().includes(XU) || UU.blocks.some((UU => (0, WU.i)(UU).toLowerCase().includes(XU)))
                              }(UU, EU))) : yU.sections), [yU, EU]),
                              gU = (0, cU.useMemo)((() => function(UU, XU) {
                                return "article" !== UU.layout ? XU.map((UU => ({
                                  anchor: UU.heading.anchor,
                                  text: UU.heading.text,
                                  level: 2
                                }))) : XU.flatMap((UU => {
                                  const XU = UU.blocks.flatMap((UU => "heading" === UU.kind && 3 === UU.level ? [{
                                    anchor: UU.anchor,
                                    text: UU.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: UU.heading.anchor,
                                    text: UU.heading.text,
                                    level: 2
                                  }, ...XU]
                                }))
                              }(XU, tU)), [XU, tU]);
                            return (0, cU.useEffect)((() => {
                              zU(gU)
                            }), [gU, zU]), (0, pU.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, pU.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, pU.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: yU.title || XU.title
                                }), (0, pU.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: XU.summary
                                }), (0, pU.jsx)(jc, {
                                  page: XU
                                }), FU && (0, pU.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, pU.jsxs)("span", {
                                    children: [(0, pU.jsx)("strong", {
                                      children: yU.sections.length
                                    }), " ", BQ[XU.layout]]
                                  })
                                })]
                              }), "" === XU.slug && (0, pU.jsx)(Cc, {}), oU && (0, pU.jsx)(Sc, {
                                kind: oU
                              }, oU), XU.hasParticlePlayground && (0, pU.jsx)(oy, {
                                ref: YU,
                                textures: IU
                              }), !DU && yU.intro.length > 0 && (0, pU.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: XU.gallery ? (0, pU.jsx)(gc.Provider, {
                                  value: XU.hasParticlePlayground ? NU : null,
                                  children: (0, pU.jsx)(Lc, {
                                    kind: XU.gallery,
                                    content: yU,
                                    blocks: yU.intro
                                  })
                                }) : (0, pU.jsx)(Iz, {
                                  blocks: dz(yU.intro)
                                })
                              }), XU.hasTextPlayground && (0, pU.jsx)(Wy, {
                                fontAwesomeIcons: aU
                              }), XU.hasVoicePlayground && (0, pU.jsx)(by, {}), XU.childPageIds && (0, pU.jsx)(Cc, {
                                cards: XU.childPageIds.map((UU => ({
                                  pageId: UU
                                }))),
                                label: XU.title
                              }), FU && (0, pU.jsx)(Gz, {
                                className: "DocsFilterBar",
                                value: QU,
                                placeholder: `Filter ${yU.sections.length} ${BQ[XU.layout]}\u2026`,
                                label: `Filter ${BQ[XU.layout]}`,
                                onChange: AU,
                                count: EU ? {
                                  visible: tU.length,
                                  total: yU.sections.length
                                } : null
                              }), !DU && (0, pU.jsxs)("div", {
                                className: `DocsSections Layout-${XU.layout}`,
                                children: [tU.map((UU => (0, pU.jsx)(ZQ, {
                                  page: XU,
                                  section: UU
                                }, UU.heading.anchor))), 0 === tU.length && (0, pU.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", BQ[XU.layout], " match \u201c", QU, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const PQ = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function WQ(UU) {
                            let {
                              entry: XU,
                              isActive: zU,
                              onNavigate: cU,
                              label: yU,
                              children: AU
                            } = UU;
                            return (0, pU.jsx)("a", {
                              href: `#${XU.anchor}`,
                              "aria-label": yU,
                              className: QU()(`Level${XU.level}`, {
                                Active: zU
                              }),
                              "aria-current": zU ? "location" : void 0,
                              onClick: UU => {
                                UU.preventDefault(), cU(XU.anchor)
                              },
                              children: AU
                            })
                          }

                          function dQ(UU) {
                            let {
                              toc: XU,
                              activeAnchor: zU,
                              onNavigate: yU
                            } = UU;
                            const AU = Math.max(0, XU.findIndex((UU => UU.anchor === zU))),
                              FU = (0, cU.useRef)(null),
                              oU = (0, cU.useRef)(!1);
                            (0, cU.useEffect)((() => {
                              var UU, zU;
                              const cU = null === (UU = FU.current) || void 0 === UU ? void 0 : UU.closest(".DocsToc"),
                                yU = null === (zU = FU.current) || void 0 === zU ? void 0 : zU.querySelector(".DocsTimelineNotch.Active");
                              if (!cU || !yU) return;
                              let QU = 0;
                              if (AU === XU.length - 1) QU = cU.scrollHeight;
                              else if (AU > 0) {
                                const UU = cU.getBoundingClientRect(),
                                  XU = yU.getBoundingClientRect();
                                QU = cU.scrollTop + XU.top + XU.height / 2 - (UU.top + cU.clientHeight / 2)
                              }
                              cU.scrollTo({
                                top: QU,
                                behavior: oU.current ? "smooth" : "auto"
                              }), oU.current = !0
                            }), [AU, XU.length]);
                            const DU = [];
                            return XU.forEach(((UU, XU) => {
                              var zU, cU, yU;
                              const QU = function(UU) {
                                  const XU = UU.trim().match(PQ);
                                  return XU ? {
                                    day: XU[1],
                                    month: `${XU[2]} ${XU[3]}`
                                  } : null
                                }(UU.text),
                                AU = null !== (zU = null === QU || void 0 === QU ? void 0 : QU.month) && void 0 !== zU ? zU : null;
                              null !== AU && (null === (cU = DU.at(-1)) || void 0 === cU ? void 0 : cU.month) === AU || DU.push({
                                month: AU,
                                entries: []
                              }), DU.at(-1).entries.push({
                                entry: UU,
                                day: null !== (yU = null === QU || void 0 === QU ? void 0 : QU.day) && void 0 !== yU ? yU : null,
                                index: XU
                              })
                            })), (0, pU.jsx)("ol", {
                              ref: FU,
                              className: "DocsTimeline",
                              children: DU.map((UU => {
                                let {
                                  month: XU,
                                  entries: zU
                                } = UU;
                                return (0, pU.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [XU && (0, pU.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: XU
                                  }), (0, pU.jsx)("ol", {
                                    children: zU.map((UU => {
                                      let {
                                        entry: XU,
                                        day: zU,
                                        index: cU
                                      } = UU;
                                      return (0, pU.jsx)("li", {
                                        className: QU()("DocsTimelineNotch", {
                                          Passed: cU < AU,
                                          Active: cU === AU
                                        }),
                                        children: (0, pU.jsx)(WQ, {
                                          entry: XU,
                                          isActive: cU === AU,
                                          onNavigate: yU,
                                          label: XU.text,
                                          children: (0, pU.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== zU && void 0 !== zU ? zU : XU.text
                                          })
                                        })
                                      }, XU.anchor)
                                    }))
                                  })]
                                }, zU[0].entry.anchor)
                              }))
                            })
                          }

                          function LQ(UU) {
                            let {
                              isChangelog: XU,
                              toc: zU,
                              activeAnchor: cU,
                              onNavigate: yU
                            } = UU;
                            return 0 === zU.length ? null : (0, pU.jsxs)(pU.Fragment, {
                              children: [(0, pU.jsx)("div", {
                                className: "DocsTocTitle",
                                children: XU ? "Updates" : "On this page"
                              }), XU ? (0, pU.jsx)(dQ, {
                                toc: zU,
                                activeAnchor: cU,
                                onNavigate: yU
                              }) : (0, pU.jsx)("ul", {
                                children: zU.map((UU => (0, pU.jsx)("li", {
                                  children: (0, pU.jsx)(WQ, {
                                    entry: UU,
                                    isActive: UU.anchor === cU,
                                    onNavigate: yU,
                                    children: UU.text.replace(/`/g, "")
                                  })
                                }, UU.anchor)))
                              })]
                            })
                          }
                          const eQ = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            CQ = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            wQ = 20,
                            qQ = 10,
                            OQ = 40,
                            SQ = 120;
                          let rQ;

                          function uQ(UU) {
                            const XU = UU.gallery;
                            if (!XU) return [];
                            if (tz(XU)) return function(UU) {
                              return kz(UU).entries.map((UU => UU.name))
                            }(XU).map((zU => ({
                              page: UU,
                              anchor: Oz(XU, zU),
                              title: zU,
                              kind: CQ[XU],
                              text: "",
                              listedUnder: UU.title
                            })));
                            const zU = vU(UU);
                            return (0, WU.u)(zU).flatMap((cU => {
                              const yU = cU.heading ? `${UU.title} \u203a ${cU.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : UU.title;
                              return rz(XU, zU, cU.blocks).flatMap((zU => "names" !== zU.kind ? [] : zU.names.map((cU => {
                                const QU = zU.isSongs ? "Song" : CQ[XU];
                                return {
                                  page: UU,
                                  anchor: cU.anchor,
                                  title: cU.name,
                                  kind: QU,
                                  text: "",
                                  listedUnder: yU
                                }
                              }))))
                            }))
                          }

                          function fQ(UU, XU, zU) {
                            const cU = UU.title.toLowerCase();
                            let yU = 0;
                            if (cU === XU) yU = 100;
                            else if (cU.startsWith(XU)) yU = 80;
                            else if (cU.includes(XU)) yU = 60;
                            else if (zU.every((UU => cU.includes(UU)))) yU = 45;
                            else {
                              if (!UU.text.toLowerCase().includes(XU)) return 0;
                              yU = 20
                            }
                            return yU - Math.min(cU.length / 10, 9) + ("Page" === UU.kind ? 8 : "Method" === UU.kind ? 3 : 0) - (UU.listedUnder ? wQ : 0)
                          }

                          function iQ(UU, XU) {
                            const zU = UU.toLowerCase().indexOf(XU),
                              cU = Math.max(0, zU - SQ / 3);
                            return `${cU>0?"\u2026":""}${UU.slice(cU,cU+SQ)}${cU+SQ<UU.length?"\u2026":""}`
                          }

                          function HQ(UU) {
                            let {
                              text: XU,
                              query: zU
                            } = UU;
                            const cU = zU ? XU.toLowerCase().indexOf(zU) : -1;
                            return -1 === cU ? (0, pU.jsx)(pU.Fragment, {
                              children: XU
                            }) : (0, pU.jsxs)(pU.Fragment, {
                              children: [XU.slice(0, cU), (0, pU.jsx)("mark", {
                                children: XU.slice(cU, cU + zU.length)
                              }), XU.slice(cU + zU.length)]
                            })
                          }

                          function MQ(UU) {
                            let {
                              basePath: XU,
                              onClose: zU
                            } = UU;
                            const yU = (0, FU.y)(),
                              [AU, oU] = (0, cU.useState)(""),
                              [DU, EU] = (0, cU.useState)(0),
                              YU = (0, cU.useRef)(null),
                              NU = (0, cU.useRef)(null),
                              IU = AU.trim().toLowerCase(),
                              aU = (0, cU.useMemo)((() => {
                                const UU = (rQ || (rQ = fU.flatMap((UU => {
                                  const XU = vU(UU);
                                  return [{
                                    page: UU,
                                    anchor: "",
                                    title: UU.title,
                                    kind: "Page",
                                    text: UU.summary
                                  }, ...XU.sections.flatMap((XU => {
                                    const zU = XU.blocks.filter((UU => "paragraph" === UU.kind)).map(WU.i).join(" ").replace(/[`*]/g, ""),
                                      cU = {
                                        page: UU,
                                        anchor: XU.heading.anchor,
                                        title: XU.heading.text.replace(/`/g, ""),
                                        kind: eQ[UU.layout],
                                        text: zU
                                      },
                                      yU = XU.blocks.flatMap((XU => "article" === UU.layout && "heading" === XU.kind && 3 === XU.level ? [{
                                        page: UU,
                                        anchor: XU.anchor,
                                        title: XU.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: cU.title
                                      }] : []));
                                    return [cU, ...yU]
                                  })), ...uQ(UU)]
                                }))), rQ);
                                if (!IU) return UU.filter((UU => "Page" === UU.kind));
                                const XU = IU.split(/\s+/);
                                let zU = 0;
                                return UU.map((UU => ({
                                  entry: UU,
                                  score: fQ(UU, IU, XU)
                                }))).filter((UU => UU.score > 0)).sort(((UU, XU) => XU.score - UU.score)).filter((UU => !UU.entry.listedUnder || (zU++, zU <= qQ))).slice(0, OQ).map((UU => UU.entry))
                              }), [IU]);
                            (0, cU.useEffect)((() => {
                              EU(0)
                            }), [IU]), (0, cU.useEffect)((() => {
                              const UU = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === UU || void 0 === UU || UU.focus()
                              }
                            }), []), (0, cU.useEffect)((() => {
                              var UU, XU;
                              null === (UU = YU.current) || void 0 === UU || null === (XU = UU.querySelector(".Active")) || void 0 === XU || XU.scrollIntoView({
                                block: "nearest"
                              })
                            }), [DU]);
                            const gU = UU => {
                              yU(mU(XU, UU.page, UU.anchor)), zU()
                            };
                            return (0, pU.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: UU => {
                                UU.target === UU.currentTarget && zU()
                              },
                              children: (0, pU.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: UU => {
                                  UU.target !== NU.current && UU.preventDefault()
                                },
                                onKeyDown: UU => {
                                  if ("Escape" === UU.key) zU();
                                  else if ("Tab" === UU.key) {
                                    var XU;
                                    UU.preventDefault(), null === (XU = NU.current) || void 0 === XU || XU.focus()
                                  }
                                },
                                children: [(0, pU.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, pU.jsx)(tU, {
                                    name: "magnifying-glass"
                                  }), (0, pU.jsx)("input", {
                                    ref: NU,
                                    autoFocus: !0,
                                    value: AU,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": aU.length > 0 ? `DocsSearchResult-${DU}` : void 0,
                                    onChange: UU => {
                                      oU(UU.target.value)
                                    },
                                    onKeyDown: UU => {
                                      if ("ArrowDown" === UU.key || "ArrowUp" === UU.key) {
                                        UU.preventDefault();
                                        const XU = "ArrowDown" === UU.key ? 1 : -1;
                                        EU((DU + XU + aU.length) % Math.max(aU.length, 1))
                                      } else "Enter" === UU.key && aU[DU] && gU(aU[DU])
                                    }
                                  }), (0, pU.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, pU.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: YU,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!IU && (0, pU.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), aU.map(((UU, XU) => {
                                    var zU;
                                    return (0, pU.jsxs)("li", {
                                      id: `DocsSearchResult-${XU}`,
                                      role: "option",
                                      "aria-selected": XU === DU,
                                      className: QU()("DocsSearchResult", {
                                        Active: XU === DU
                                      }),
                                      onMouseMove: () => {
                                        EU(XU)
                                      },
                                      onClick: () => {
                                        gU(UU)
                                      },
                                      children: [(0, pU.jsx)(tU, {
                                        name: UU.page.icon
                                      }), (0, pU.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, pU.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, pU.jsx)(HQ, {
                                            text: UU.title,
                                            query: IU
                                          })
                                        }), UU.text && (0, pU.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, pU.jsx)(HQ, {
                                            text: iQ(UU.text, IU),
                                            query: IU
                                          })
                                        })]
                                      }), (0, pU.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === UU.kind ? "Page" : null !== (zU = UU.listedUnder) && void 0 !== zU ? zU : `${UU.kind} \xb7 ${UU.page.title}`
                                      })]
                                    }, `${UU.page.id}#${UU.anchor}`)
                                  })), IU && 0 === aU.length && (0, pU.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", AU, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function vQ(UU, XU) {
                            if (XU < 10) return `${UU.toFixed(1)}s`;
                            const zU = Math.floor(UU);
                            return `${Math.floor(zU/60)}:${String(zU%60).padStart(2,"0")}`
                          }

                          function VQ() {
                            const UU = Ec((UU => UU.track)),
                              XU = Ec((UU => UU.volume)),
                              [zU, yU] = (0, cU.useState)(0),
                              AU = (0, cU.useRef)(Xc);
                            if ((0, cU.useEffect)((() => {
                                if (!UU) return;
                                if (yU(pc()), "playing" !== UU.status) return;
                                let XU = 0;
                                const zU = () => {
                                  yU(pc()), XU = requestAnimationFrame(zU)
                                };
                                return XU = requestAnimationFrame(zU), () => {
                                  cancelAnimationFrame(XU)
                                }
                              }), [UU]), !UU) return null;
                            const FU = "paused" !== UU.status,
                              oU = Math.min(zU, UU.duration);
                            return (0, pU.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, pU.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, pU.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": FU ? `Pause ${UU.name}` : `Play ${UU.name}`,
                                  onClick: Ic,
                                  children: (0, pU.jsx)(tU, {
                                    name: FU ? "pause" : "play"
                                  })
                                }), (0, pU.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, pU.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, pU.jsx)("code", {
                                      children: UU.name
                                    }), (0, pU.jsx)("span", {
                                      children: UU.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, pU.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, pU.jsx)("span", {
                                      children: vQ(oU, UU.duration)
                                    }), (0, pU.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: UU.duration || 1,
                                      step: .01,
                                      value: oU,
                                      disabled: 0 === UU.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${vQ(oU,UU.duration)} of ${vQ(UU.duration,UU.duration)}`,
                                      onChange: UU => {
                                        const XU = Number(UU.target.value);
                                        ! function(UU) {
                                          var XU;
                                          Ac = UU, null === (XU = yc) || void 0 === XU || XU.seek(UU)
                                        }(XU), yU(XU)
                                      }
                                    }), (0, pU.jsx)("span", {
                                      children: UU.duration > 0 ? vQ(UU.duration, UU.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, pU.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, pU.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === XU ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === XU ? ac(AU.current) : (AU.current = XU, ac(0))
                                    },
                                    children: (0, pU.jsx)(tU, {
                                      name: "volume",
                                      className: QU()({
                                        Muted: 0 === XU
                                      })
                                    })
                                  }), (0, pU.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: XU,
                                    "aria-label": "Volume",
                                    onChange: UU => {
                                      ac(Number(UU.target.value))
                                    }
                                  })]
                                }), (0, pU.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var XU;
                                    null === (XU = document.querySelector(`[data-docs-track="${CSS.escape(zc(UU.name,UU.isSong))}"]`)) || void 0 === XU || XU.focus(), tc()
                                  },
                                  children: (0, pU.jsx)(tU, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var sQ = zU(42);
                          const nQ = "docsTheme",
                            mQ = window.matchMedia("(prefers-color-scheme: light)");

                          function lQ(UU) {
                            let {
                              theme: XU,
                              onChange: zU
                            } = UU;
                            const cU = "dark" === XU ? "light" : "dark";
                            return (0, pU.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${cU} theme`,
                              title: `Switch to ${cU} theme`,
                              onClick: () => {
                                zU(cU)
                              },
                              children: (0, pU.jsx)(tU, {
                                name: "dark" === XU ? "moon" : "sun"
                              })
                            })
                          }
                          const xQ = "https://github.com/Bloxdy/code-api",
                            JQ = "https://discord.gg/playbloxd",
                            jQ = 180,
                            KQ = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function bQ(UU) {
                            let {
                              basePath: XU,
                              activePageId: zU,
                              onNavigate: cU
                            } = UU;
                            return (0, pU.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: iU.map((UU => (0, pU.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, pU.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: UU.title
                                }), UU.pageIds.map((UU => {
                                  var yU;
                                  const FU = HU(UU);
                                  return (0, pU.jsxs)(AU.b, {
                                    to: mU(XU, FU),
                                    className: QU()("DocsNavLink", {
                                      Active: FU.id === zU
                                    }),
                                    "aria-current": FU.id === zU ? "page" : void 0,
                                    onClick: cU,
                                    children: [(0, pU.jsx)(tU, {
                                      name: FU.icon
                                    }), (0, pU.jsx)("span", {
                                      children: null !== (yU = FU.navTitle) && void 0 !== yU ? yU : FU.title
                                    })]
                                  }, FU.id)
                                }))]
                              }, UU.title)))
                            })
                          }

                          function TQ(UU) {
                            let {
                              basePath: XU,
                              pageId: zU
                            } = UU;
                            const cU = iU.flatMap((UU => UU.pageIds)),
                              yU = cU.indexOf(zU),
                              QU = yU > 0 ? HU(cU[yU - 1]) : null,
                              FU = yU < cU.length - 1 ? HU(cU[yU + 1]) : null;
                            return (0, pU.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [QU ? (0, pU.jsxs)(AU.b, {
                                className: "DocsPagerLink Previous",
                                to: mU(XU, QU),
                                children: [(0, pU.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, pU.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: QU.title
                                })]
                              }) : (0, pU.jsx)("span", {}), FU && (0, pU.jsxs)(AU.b, {
                                className: "DocsPagerLink Next",
                                to: mU(XU, FU),
                                children: [(0, pU.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, pU.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: FU.title
                                })]
                              })]
                            })
                          }

                          function hQ(UU) {
                            let {
                              basePath: XU,
                              embedded: zU = !1
                            } = UU;
                            const {
                              pageSlug: yU = ""
                            } = (0, FU.C)(), DU = (0, FU.w)(), EU = (0, FU.y)(), YU = (NU = yU, fU.find((UU => UU.slug === NU)));
                            var NU;
                            const [IU, aU] = function() {
                              const [UU, XU] = (0, cU.useState)((() => {
                                const UU = sQ.k.getItem(nQ);
                                return "dark" === UU || "light" === UU ? UU : null
                              })), [zU, yU] = (0, cU.useState)(mQ.matches ? "light" : "dark");
                              return (0, cU.useEffect)((() => {
                                const UU = () => {
                                  yU(mQ.matches ? "light" : "dark")
                                };
                                return mQ.addEventListener("change", UU), () => {
                                  mQ.removeEventListener("change", UU)
                                }
                              }), []), [null !== UU && void 0 !== UU ? UU : zU, UU => {
                                sQ.k.setItem(nQ, UU), XU(UU)
                              }]
                            }(), [gU, kU] = (0, cU.useState)(null), [GU, BU] = (0, cU.useState)(!1), [ZU, RU] = (0, cU.useState)(!1), [PU, dU] = (0, cU.useState)([]), LU = function(UU, XU) {
                              const [zU, yU] = (0, cU.useState)("");
                              return (0, cU.useEffect)((() => {
                                if (!XU) return;
                                let zU = 0;
                                const cU = () => {
                                    var cU, QU;
                                    zU = 0;
                                    const AU = XU.getBoundingClientRect().top + jQ;
                                    let FU = null !== (cU = null === (QU = UU[0]) || void 0 === QU ? void 0 : QU.anchor) && void 0 !== cU ? cU : "";
                                    for (const XU of UU) {
                                      const UU = document.getElementById(XU.anchor);
                                      UU && UU.getBoundingClientRect().top <= AU && (FU = XU.anchor)
                                    }
                                    XU.scrollTop + XU.clientHeight >= XU.scrollHeight - 2 && XU.scrollTop > 0 && UU.length > 0 && (FU = UU[UU.length - 1].anchor), yU(FU)
                                  },
                                  QU = () => {
                                    zU || (zU = requestAnimationFrame(cU))
                                  };
                                return cU(), XU.addEventListener("scroll", QU, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(zU), XU.removeEventListener("scroll", QU)
                                }
                              }), [UU, XU]), zU
                            }(PU, gU), eU = "" === yU && DU.hash ? function(UU) {
                              const XU = (0, WU.n)(UU);
                              if (VU(HU("welcome"), XU)) return null;
                              const zU = Object.hasOwn(nU, XU) ? nU[XU] : null;
                              if (zU) return {
                                page: HU(zU.pageId),
                                anchor: zU.anchor
                              };
                              const cU = HU("readme");
                              return VU(cU, XU) ? {
                                page: cU,
                                anchor: XU
                              } : sU(`#${XU}`)
                            }(DU.hash) : null;
                            (0, cU.useEffect)((() => (oU.e.set({
                              musicOnFromPage: !1
                            }), () => {
                              oU.e.set({
                                musicOnFromPage: !0
                              }), tc()
                            })), []), (0, cU.useEffect)((() => {
                              const UU = UU => {
                                const XU = UU.target;
                                if (XU.closest(".DocsTextDialog")) return;
                                const zU = XU.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(XU.tagName);
                                "k" === UU.key && (UU.metaKey || UU.ctrlKey) || "/" === UU.key && !zU ? (UU.preventDefault(), RU(!0)) : "Escape" === UU.key && BU(!1)
                              };
                              return window.addEventListener("keydown", UU), () => {
                                window.removeEventListener("keydown", UU)
                              }
                            }), []);
                            const CU = (0, cU.useRef)(null);
                            (0, cU.useLayoutEffect)((() => {
                              var UU, XU;
                              if (!gU) return;
                              const zU = CU.current === DU.pathname;
                              CU.current = DU.pathname;
                              const cU = (0, WU.n)(DU.hash),
                                yU = cU ? document.getElementById(cU) : null;
                              if (null === (UU = gU.querySelector(".DocsTargeted")) || void 0 === UU || UU.classList.remove("DocsTargeted"), null === yU || void 0 === yU || null === (XU = yU.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === XU || XU.classList.add("DocsTargeted"), yU) {
                                var QU;
                                const UU = yU.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (QU = yU.closest(".DocsChangelogEntry")) && void 0 !== QU ? QU : yU).scrollIntoView({
                                  block: UU ? "center" : "start",
                                  behavior: zU ? "smooth" : "auto"
                                })
                              } else zU || gU.scrollTo({
                                top: 0
                              })
                            }), [gU, DU.pathname, DU.hash, DU.key]);
                            const wU = (0, cU.useCallback)((() => {
                                BU(!1)
                              }), []),
                              qU = (0, cU.useCallback)((UU => {
                                EU({
                                  hash: UU
                                })
                              }), [EU]);
                            if (eU) return (0, pU.jsx)(FU.e, {
                              replace: !0,
                              to: mU(XU, eU.page, eU.anchor)
                            });
                            if (!YU) return (0, pU.jsx)(FU.e, {
                              replace: !0,
                              to: XU
                            });
                            const OU = zU ? "div" : "main";
                            return (0, pU.jsx)(IX.Provider, {
                              value: XU,
                              children: (0, pU.jsx)(pX.Provider, {
                                value: gU,
                                children: (0, pU.jsxs)("div", {
                                  ref: kU,
                                  className: QU()("DocsSite", {
                                    Embedded: zU,
                                    NavOpen: GU
                                  }),
                                  "data-theme": IU,
                                  children: [(0, pU.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, pU.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": GU ? "Close menu" : "Open menu",
                                      "aria-expanded": GU,
                                      onClick: () => {
                                        BU(!GU)
                                      },
                                      children: (0, pU.jsx)(tU, {
                                        name: GU ? "cross" : "menu"
                                      })
                                    }), (0, pU.jsxs)(AU.b, {
                                      to: XU,
                                      className: "DocsBrand",
                                      children: [(0, pU.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, pU.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, pU.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, pU.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        RU(!0)
                                      },
                                      children: [(0, pU.jsx)(tU, {
                                        name: "magnifying-glass"
                                      }), (0, pU.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, pU.jsxs)("kbd", {
                                        children: [KQ ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, pU.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, pU.jsxs)("a", {
                                        href: JQ,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, pU.jsx)(tU, {
                                          name: "discord"
                                        }), (0, pU.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, pU.jsxs)("a", {
                                        href: xQ,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, pU.jsx)(tU, {
                                          name: "external-link"
                                        }), (0, pU.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !zU && (0, pU.jsxs)(AU.b, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, pU.jsx)(tU, {
                                          name: "play"
                                        }), (0, pU.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, pU.jsx)(lQ, {
                                        theme: IU,
                                        onChange: aU
                                      })]
                                    })]
                                  }), (0, pU.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, pU.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, pU.jsx)(bQ, {
                                        basePath: XU,
                                        activePageId: YU.id,
                                        onNavigate: wU
                                      })
                                    }), (0, pU.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: wU
                                    }), (0, pU.jsxs)(OU, {
                                      className: "DocsMain",
                                      children: [(0, pU.jsx)(RQ, {
                                        page: YU,
                                        onTocChange: dU
                                      }, YU.id), (0, pU.jsx)(TQ, {
                                        basePath: XU,
                                        pageId: YU.id
                                      })]
                                    }), (0, pU.jsx)("aside", {
                                      className: QU()("DocsToc", {
                                        Timeline: "changelog" === YU.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, pU.jsx)(LQ, {
                                        isChangelog: "changelog" === YU.layout,
                                        toc: PU,
                                        activeAnchor: LU,
                                        onNavigate: qU
                                      })
                                    })]
                                  }), (0, pU.jsx)(VQ, {}), ZU && (0, pU.jsx)(MQ, {
                                    basePath: XU,
                                    onClose: () => {
                                      RU(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 5262: (UU, XU, zU) => {
                          zU.d(XU, {
                            d: () => cU,
                            e: () => AU,
                            i: () => tU,
                            k: () => aU,
                            l: () => FU,
                            n: () => yU,
                            r: () => QU,
                            u: () => pU,
                            w: () => IU,
                            y: () => NU
                          });
                          const cU = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function yU(UU) {
                            try {
                              return decodeURIComponent(UU.slice(1))
                            } catch {
                              return UU.slice(1)
                            }
                          }

                          function QU(UU) {
                            return UU.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const AU = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${cU.source}`, "g");

                          function FU(UU, XU) {
                            return 2 === UU.length ? XU.replace(/^ (.*) $/, "$1") : XU
                          }

                          function oU(UU) {
                            return "" === UU.trim()
                          }

                          function DU(UU) {
                            const XU = [];
                            for (const zU of UU.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) XU.length > 0 && XU[XU.length - 1].endsWith("\\") ? XU[XU.length - 1] += `|${zU}` : XU.push(zU);
                            return XU.map((UU => UU.trim().replaceAll("\\|", "|")))
                          }
                          const EU = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function YU(UU) {
                            const XU = [],
                              zU = [{
                                indent: -1,
                                items: XU
                              }];
                            let cU = null;
                            for (const yU of UU) {
                              const UU = yU.match(EU);
                              if (!UU) {
                                cU && (cU.text += ` ${yU.trim()}`);
                                continue
                              }
                              const XU = UU[1].replace(/\t/g, "  ").length;
                              for (; XU <= zU[zU.length - 1].indent;) zU.pop();
                              cU = {
                                text: UU[3].trim(),
                                children: []
                              }, zU[zU.length - 1].items.push(cU), zU.push({
                                indent: XU,
                                items: cU.children
                              })
                            }
                            return XU
                          }

                          function NU(UU) {
                            const XU = UU.replace(/\r\n/g, "\n").split("\n"),
                              zU = [];
                            let cU = 0;
                            for (; cU < XU.length;) {
                              const UU = XU[cU];
                              if (oU(UU)) {
                                cU++;
                                continue
                              }
                              const yU = UU.match(/^\s*```\s*(\w*)\s*$/);
                              if (yU) {
                                const UU = [];
                                for (cU++; cU < XU.length && !/^\s*```\s*$/.test(XU[cU]);) UU.push(XU[cU]), cU++;
                                cU++, zU.push({
                                  kind: "code",
                                  lang: yU[1] || "text",
                                  code: UU.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const AU = UU.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (AU) {
                                const UU = AU[2].trim();
                                zU.push({
                                  kind: "heading",
                                  level: AU[1].length,
                                  text: UU,
                                  anchor: QU(UU)
                                }), cU++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(UU)) {
                                zU.push({
                                  kind: "rule"
                                }), cU++;
                                continue
                              }
                              if (UU.trim().startsWith("|") && cU + 1 < XU.length && /^\s*\|[\s:|-]+\|\s*$/.test(XU[cU + 1])) {
                                const yU = DU(UU),
                                  QU = [];
                                for (cU += 2; cU < XU.length && XU[cU].trim().startsWith("|");) QU.push(DU(XU[cU])), cU++;
                                zU.push({
                                  kind: "table",
                                  header: yU,
                                  rows: QU
                                });
                                continue
                              }
                              if (UU.startsWith(">")) {
                                const UU = [];
                                for (; cU < XU.length && XU[cU].startsWith(">");) UU.push(XU[cU].replace(/^>\s?/, "")), cU++;
                                zU.push({
                                  kind: "quote",
                                  blocks: NU(UU.join("\n"))
                                });
                                continue
                              }
                              if (EU.test(UU)) {
                                const yU = [],
                                  QU = /^\s*\d+\./.test(UU);
                                for (; cU < XU.length && !oU(XU[cU]) && (EU.test(XU[cU]) || /^\s+\S/.test(XU[cU]));) yU.push(XU[cU]), cU++;
                                zU.push({
                                  kind: "list",
                                  ordered: QU,
                                  items: YU(yU)
                                });
                                continue
                              }
                              const FU = [];
                              for (; cU < XU.length && !oU(XU[cU]) && !/^\s*```/.test(XU[cU]) && !/^#{1,6}\s/.test(XU[cU]) && !XU[cU].startsWith(">") && !EU.test(XU[cU]) && (!XU[cU].trim().startsWith("|") || 0 !== FU.length);) FU.push(XU[cU].trim()), cU++;
                              0 === FU.length && (FU.push(XU[cU].trim()), cU++), zU.push({
                                kind: "paragraph",
                                text: FU.join(" ")
                              })
                            }
                            return zU
                          }

                          function IU(UU) {
                            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const zU = NU(UU);
                            let cU = "";
                            const yU = [],
                              QU = [],
                              AU = new Map;
                            for (const DU of zU) {
                              if ("heading" === DU.kind) {
                                var FU;
                                const UU = (null !== (FU = AU.get(DU.anchor)) && void 0 !== FU ? FU : 0) + 1;
                                AU.set(DU.anchor, UU), UU > 1 && (DU.anchor = `${DU.anchor}-${UU}`)
                              }
                              if ("heading" === DU.kind && 1 === DU.level && !cU) {
                                cU = DU.text;
                                continue
                              }
                              if ("heading" === DU.kind && DU.level <= XU) {
                                QU.push({
                                  heading: DU,
                                  blocks: []
                                });
                                continue
                              }
                              const UU = QU.at(-1);
                              UU ? UU.blocks.push(DU) : yU.push(DU)
                            }
                            const oU = UU => {
                              for (;
                                "rule" === (null === (XU = UU.at(-1)) || void 0 === XU ? void 0 : XU.kind);) {
                                var XU;
                                UU.pop()
                              }
                            };
                            oU(yU);
                            for (const DU of QU) oU(DU.blocks);
                            return {
                              title: cU,
                              intro: yU,
                              sections: QU
                            }
                          }

                          function pU(UU) {
                            return [{
                              heading: null,
                              blocks: UU.intro
                            }, ...UU.sections.map((UU => ({
                              heading: UU.heading,
                              blocks: UU.blocks
                            })))]
                          }

                          function aU(UU) {
                            return UU.flatMap((UU => "code" === UU.kind ? [UU] : "quote" === UU.kind ? aU(UU.blocks) : []))
                          }

                          function tU(UU) {
                            switch (UU.kind) {
                              case "heading":
                              case "paragraph":
                                return UU.text;
                              case "code":
                                return UU.code;
                              case "table":
                                return [UU.header, ...UU.rows].map((UU => UU.join(" "))).join(" ");
                              case "list": {
                                const XU = UU => UU.map((UU => `${UU.text} ${XU(UU.children)}`)).join(" ");
                                return XU(UU.items)
                              }
                              case "quote":
                                return UU.blocks.map(tU).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 5360: (UU, XU, zU) => {
                          zU.d(XU, {
                            e: () => FU
                          });
                          var cU = zU(61),
                            yU = zU(320),
                            QU = zU(1993),
                            AU = zU(1305);

                          function FU(UU) {
                            let {
                              text: XU
                            } = UU;
                            const zU = [];
                            let FU = "";
                            return (0, yU.rc)(XU).forEach(((UU, XU) => {
                              if ("string" === typeof UU || !(0, QU.g)(UU.icon)) return void(FU += "string" === typeof UU ? UU : UU.icon);
                              const yU = Math.max(0, FU.trimEnd().search(/\S{1,12}$/));
                              zU.push((0, AU.jsxs)(cU.Fragment, {
                                children: [FU.slice(0, yU), (0, AU.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [FU.slice(yU), (0, AU.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": UU.icon,
                                    children: (0, AU.jsx)(QU.c, {
                                      itemName: UU.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, XU)), FU = ""
                            })), zU.push(FU), (0, AU.jsx)(AU.Fragment, {
                              children: zU
                            })
                          }
                        }, 5299: (UU, XU, zU) => {
                          zU.d(XU, {
                            g: () => kU,
                            d: () => gU
                          });
                          var cU = zU(61),
                            yU = zU(1492),
                            QU = zU(1978),
                            AU = zU(5301),
                            FU = zU(1305);
                          const oU = (0, cU.memo)((function(UU) {
                            let {
                              initialParameters: XU
                            } = UU;
                            const zU = (0, cU.useRef)(null),
                              yU = (0, cU.useRef)(null),
                              oU = (0, cU.useRef)(0),
                              DU = (0, cU.useRef)(null),
                              EU = XU.description,
                              YU = XU.iz,
                              {
                                scale: NU,
                                rotation: IU
                              } = null !== XU && void 0 !== XU ? XU : {},
                              pU = (0, AU.d)();
                            return (0, cU.useEffect)((() => {
                              const UU = pU.onFrame((() => {
                                const UU = pU.getState();
                                if (!UU.isActive || !zU.current || !yU.current) return;
                                const XU = UU.state;
                                if (zU.current.value = XU.progress, XU.clickCount > oU.current) {
                                  oU.current = XU.clickCount;
                                  const UU = yU.current;
                                  UU.classList.add("pulse"), DU.current = setTimeout((() => {
                                    UU.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(DU.current), UU()
                              }
                            }), [pU]), (0, FU.jsx)(FU.Fragment, {
                              children: (0, FU.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== NU && {
                                    "--scale": NU
                                  },
                                  ...null !== IU && {
                                    "--rotation": `${IU}deg`
                                  }
                                },
                                children: [(0, FU.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: zU
                                }), (0, FU.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: yU,
                                  children: (0, FU.jsx)(QU.d, {
                                    text: [{
                                      icon: YU
                                    }]
                                  })
                                }), (0, FU.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, FU.jsx)(QU.d, {
                                    text: EU
                                  })
                                })]
                              })
                            })
                          }));
                          var DU = zU(1106),
                            EU = zU.n(DU);
                          const YU = 2 * Math.PI * 90,
                            NU = (0, cU.memo)((function(UU) {
                              let {
                                initialParameters: XU
                              } = UU;
                              const zU = (0, cU.useRef)(null),
                                yU = (0, cU.useRef)(null),
                                oU = (0, cU.useRef)(null),
                                DU = XU.label,
                                NU = XU.icon,
                                IU = XU.Vz,
                                {
                                  scale: pU,
                                  rotation: aU,
                                  sz: tU
                                } = null !== XU && void 0 !== XU ? XU : {},
                                gU = (0, AU.d)();
                              return (0, cU.useEffect)((() => {
                                const UU = gU.onFrame((() => {
                                  var UU, XU;
                                  const cU = gU.getState();
                                  if (!cU.isActive || !yU.current) return;
                                  const QU = cU.state,
                                    AU = null !== (UU = QU.timeRemaining) && void 0 !== UU ? UU : 0,
                                    FU = null !== (XU = QU.vz) && void 0 !== XU ? XU : 1,
                                    DU = YU * (1 - AU / FU);
                                  yU.current.style.strokeDashoffset = `${DU}`, zU.current && (zU.current.style.opacity = AU > 0 ? "1" : "0"), oU.current && IU && (oU.current.textContent = `${(AU/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  UU()
                                }
                              }), [gU, IU]), (0, FU.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: zU,
                                style: {
                                  ...null !== pU && {
                                    "--scale": pU
                                  },
                                  ...null !== aU && {
                                    "--rotation": `${aU}deg`
                                  }
                                },
                                children: [(0, FU.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, FU.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, FU.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, FU.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: YU,
                                      ref: yU
                                    })]
                                  }), (0, FU.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, FU.jsx)(QU.d, {
                                      text: [{
                                        icon: NU
                                      }],
                                      className: EU()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: tU
                                      })
                                    })
                                  })]
                                }), (0, FU.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, FU.jsx)(QU.d, {
                                    text: DU,
                                    className: "QTETimedClickLabelText"
                                  }), IU && (0, FU.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: oU
                                  })]
                                })]
                              })
                            })),
                            IU = (0, cU.memo)((function(UU) {
                              let {
                                initialParameters: XU
                              } = UU;
                              const zU = (0, cU.useRef)(null),
                                yU = (0, cU.useRef)(null),
                                oU = (0, cU.useRef)(null),
                                DU = (0, cU.useRef)(!1),
                                EU = XU.description,
                                YU = null === XU || void 0 === XU ? void 0 : XU.icon,
                                NU = (0, AU.d)();
                              return (0, cU.useEffect)((() => {
                                const UU = NU.onFrame((() => {
                                  const UU = NU.getState();
                                  if (!UU.isActive) return;
                                  const XU = UU.state;
                                  if (zU.current) {
                                    const UU = 100 * (XU.catchZonePosition - XU.mz / 2);
                                    zU.current.style.left = `${UU}%`, zU.current.style.width = 100 * XU.mz + "%", XU.isCatching !== DU.current && (DU.current = XU.isCatching, XU.isCatching ? zU.current.classList.add("catching") : zU.current.classList.remove("catching"))
                                  }
                                  yU.current && (yU.current.style.left = 100 * XU.moverPosition + "%"), oU.current && (oU.current.value = XU.progress)
                                }));
                                return () => {
                                  UU()
                                }
                              }), [NU]), (0, FU.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, FU.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, FU.jsx)(QU.d, {
                                    text: EU
                                  })
                                }), (0, FU.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: oU
                                }), (0, FU.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, FU.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: zU
                                  }), (0, FU.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: yU,
                                    children: (0, FU.jsx)("span", {
                                      children: YU && (0, FU.jsx)(QU.d, {
                                        text: [{
                                          icon: YU,
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
                          var pU = zU(646);
                          const aU = (0, cU.memo)((function(UU) {
                              let {
                                initialParameters: XU
                              } = UU;
                              const zU = (0, cU.useRef)(null),
                                yU = XU.label,
                                oU = XU.Tz,
                                {
                                  icon: DU,
                                  scale: EU,
                                  rotation: YU
                                } = null !== XU && void 0 !== XU ? XU : {},
                                NU = 100 * (.5 - oU / 2),
                                IU = 100 * oU,
                                aU = (0, AU.d)();
                              return (0, cU.useEffect)((() => {
                                const UU = aU.onFrame((() => {
                                  const UU = aU.getState();
                                  if (!UU.isActive || !zU.current) return;
                                  const XU = UU.state;
                                  zU.current.style.left = 100 * XU.markerPosition + "%"
                                }));
                                return () => {
                                  UU()
                                }
                              }), [aU]), (0, FU.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, pU.P)(EU) && {
                                    "--scale": EU
                                  },
                                  ...!(0, pU.P)(YU) && {
                                    "--rotation": `${YU}deg`
                                  }
                                },
                                children: [DU && (0, FU.jsx)(QU.d, {
                                  text: [{
                                    icon: DU
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, FU.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, FU.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${NU}%`,
                                      width: `${IU}%`
                                    }
                                  }), (0, FU.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: zU
                                  })]
                                }), (0, FU.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, FU.jsx)(QU.d, {
                                    text: yU
                                  })
                                })]
                              })
                            })),
                            tU = (0, cU.memo)((function(UU) {
                              let {
                                initialParameters: XU
                              } = UU;
                              const zU = (0, cU.useRef)(null),
                                [yU, oU] = (0, cU.useState)((() => new Array(XU.Uc).fill("pending"))),
                                [DU, EU] = (0, cU.useState)((() => {
                                  const UU = XU.yc;
                                  return (0, pU.P)(UU) || UU <= 0 ? [] : new Array(UU).fill("pending")
                                })),
                                YU = XU.label,
                                {
                                  icon: NU
                                } = XU,
                                IU = (0, cU.useRef)(0),
                                aU = (0, cU.useRef)(0),
                                tU = (0, cU.useRef)([]),
                                gU = (0, AU.d)();
                              return (0, cU.useEffect)((() => {
                                const UU = gU.onFrame((() => {
                                  const UU = gU.getState();
                                  if (!UU.isActive || !zU.current) return;
                                  const XU = UU.state,
                                    cU = 30 + 60 * XU.outerCircleProgress;
                                  if (zU.current.setAttribute("r", String(cU)), !0 === XU.lastClickResult && XU.successes > IU.current) {
                                    zU.current.classList.remove("QTERhythmClickOuterCircle--miss"), zU.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const UU = setTimeout((() => {
                                      var UU;
                                      null === (UU = zU.current) || void 0 === UU || UU.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    tU.current.push(UU)
                                  } else if (!1 === XU.lastClickResult && XU.misses > aU.current) {
                                    zU.current.classList.remove("QTERhythmClickOuterCircle--hit"), zU.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const UU = setTimeout((() => {
                                      var UU;
                                      null === (UU = zU.current) || void 0 === UU || UU.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    tU.current.push(UU)
                                  }
                                  XU.successes === IU.current && XU.misses === aU.current || (IU.current = XU.successes, aU.current = XU.misses, oU((UU => {
                                    const zU = [...UU];
                                    for (let cU = 0; cU < XU.Uc; cU++) zU[cU] = cU < XU.successes ? "success" : "pending";
                                    return zU
                                  })), EU((UU => {
                                    if (0 === UU.length) return UU;
                                    const zU = [...UU];
                                    for (let cU = 0; cU < zU.length; cU++) zU[cU] = cU < XU.misses ? "miss" : "pending";
                                    return zU
                                  })))
                                }));
                                return () => {
                                  UU();
                                  for (const UU of tU.current) clearTimeout(UU);
                                  tU.current = []
                                }
                              }), [gU]), (0, FU.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, FU.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: yU.map(((UU, XU) => (0, FU.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === UU ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, XU)))
                                }), (0, FU.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, FU.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, FU.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, FU.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: zU
                                    })]
                                  }), NU && (0, FU.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, FU.jsx)(QU.d, {
                                      text: [{
                                        icon: NU
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), DU.length > 0 && (0, FU.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: DU.map(((UU, XU) => (0, FU.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === UU ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, XU)))
                                }), (0, FU.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, FU.jsx)(QU.d, {
                                    text: YU
                                  })
                                })]
                              })
                            }));

                          function gU(UU) {
                            let {
                              qte: XU
                            } = UU;
                            switch (XU.type) {
                              case "progressBar":
                                return (0, FU.jsx)(oU, {
                                  initialParameters: XU.parameters
                                });
                              case "timedClick":
                                return (0, FU.jsx)(NU, {
                                  initialParameters: XU.parameters
                                });
                              case "gravityBar":
                                return (0, FU.jsx)(IU, {
                                  initialParameters: XU.parameters
                                });
                              case "precisionBar":
                                return (0, FU.jsx)(aU, {
                                  initialParameters: XU.parameters
                                });
                              case "rhythmClick":
                                return (0, FU.jsx)(tU, {
                                  initialParameters: XU.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const kU = (0, cU.memo)((function() {
                            const [UU, XU] = (0, cU.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, yU.f)("qteStateUpdated", (UU => {
                              XU(UU)
                            })), UU.isActive && UU.type ? (0, FU.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, FU.jsx)(gU, {
                                qte: UU
                              })
                            }) : null
                          }))
                        }, 5301: (UU, XU, zU) => {
                          zU.d(XU, {
                            b: () => FU,
                            d: () => oU
                          });
                          var cU = zU(61),
                            yU = zU(1322),
                            QU = zU(5303);
                          const AU = {
                              getState: () => QU.e.getCurrentState(),
                              onFrame: yU.r
                            },
                            FU = (0, cU.createContext)(AU);

                          function oU() {
                            return (0, cU.useContext)(FU)
                          }
                        }, 5364: (UU, XU, zU) => {
                          zU.d(XU, {
                            d: () => rU,
                            g: () => SU
                          });
                          var cU = zU(5369),
                            yU = zU(320);
                          const QU = 120,
                            AU = 260,
                            FU = 1.15,
                            oU = 1.2,
                            DU = 2,
                            EU = 1.08,
                            YU = .8,
                            NU = .95,
                            IU = 8,
                            pU = "[\"')\\]\u300d\u300f\uff09]*",
                            aU = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${pU}$`),
                            tU = new RegExp(`[?\uff1f]${pU}$`),
                            gU = new RegExp(`[!\uff01]${pU}$`),
                            kU = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            GU = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            BU = new RegExp(`[${GU}]`),
                            ZU = new RegExp(`[${GU}]|[^${GU}]+`, "g"),
                            RU = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function PU(UU) {
                            let XU = 2166136261;
                            for (let zU = 0; zU < UU.length; zU++) XU ^= UU.charCodeAt(zU), XU = Math.imul(XU, 16777619);
                            return (XU >>> 0) / 4294967295 * 2 - 1
                          }

                          function WU(UU) {
                            var XU;
                            if (BU.test(UU)) return 1;
                            const zU = UU.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              cU = zU.replace(/[^0-9]/g, "");
                            if (cU.length > 0 && !/\p{L}/u.test(zU)) return Math.min(cU.length, 4);
                            const yU = null !== (XU = zU.match(RU)) && void 0 !== XU ? XU : [];
                            if (0 === yU.length) {
                              var QU, AU;
                              const UU = null !== (QU = null === (AU = zU.match(/\p{L}/gu)) || void 0 === AU ? void 0 : AU.length) && void 0 !== QU ? QU : 0;
                              return 0 === UU ? 0 : Math.min(Math.max(1, Math.round(UU / 2.5)), IU)
                            }
                            const FU = zU.replace(/[^\p{L}]/gu, ""),
                              oU = yU.length > 1 && "e" === yU.at(-1) && FU.endsWith("e") && !FU.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(UU.replace(/[^\p{L}]/gu, ""));
                            return Math.min(yU.length - (oU ? 1 : 0), IU)
                          }

                          function dU(UU) {
                            return UU.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function LU(UU) {
                            const XU = UU.replace(/[^\p{L}]/gu, "");
                            return XU.length >= 2 && XU === XU.toUpperCase() && XU !== XU.toLowerCase()
                          }

                          function eU(UU, XU) {
                            var zU;
                            const IU = XU && (0, cU.l)(XU),
                              pU = null !== (zU = null === IU || void 0 === IU ? void 0 : IU.syllableMs) && void 0 !== zU ? zU : cU.e,
                              GU = function(UU) {
                                const XU = [];
                                for (const cU of (0, yU.rc)(UU))
                                  if ("string" === typeof cU)
                                    for (const UU of cU.split(/(\s+)/)) {
                                      if ("" === UU) continue;
                                      if (/^\s+$/.test(UU)) {
                                        XU.push({
                                          kind: "space",
                                          text: UU
                                        });
                                        continue
                                      }
                                      if (!BU.test(UU)) {
                                        XU.push({
                                          kind: "word",
                                          text: UU,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let cU = !0;
                                      for (const yU of null !== (zU = UU.match(ZU)) && void 0 !== zU ? zU : []) {
                                        var zU;
                                        const UU = XU.at(-1);
                                        cU || "word" !== (null === UU || void 0 === UU ? void 0 : UU.kind) || BU.test(yU) || /[\p{L}\p{N}]/u.test(yU) ? (cU || XU.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), XU.push({
                                          kind: "word",
                                          text: yU,
                                          delayMs: 0
                                        }), cU = !1) : UU.text += yU
                                      }
                                    } else XU.push({
                                      kind: "icon",
                                      text: cU.icon,
                                      delayMs: 0
                                    });
                                return XU
                              }(UU),
                              RU = [];
                            let eU = [];
                            for (const cU of GU) "space" !== cU.kind && (eU.push(cU), aU.test(cU.text) && (RU.push(eU), eU = []));
                            RU.push(eU);
                            const CU = [];
                            let wU = 0;
                            for (const cU of RU) {
                              var qU, OU;
                              const UU = null !== (qU = null === (OU = cU.at(-1)) || void 0 === OU ? void 0 : OU.text) && void 0 !== qU ? qU : "",
                                XU = tU.test(UU),
                                zU = gU.test(UU),
                                yU = cU.map((UU => "word" === UU.kind ? WU(UU.text) : 1)),
                                GU = yU.findLastIndex((UU => UU > 0));
                              for (const [tU, gU] of cU.entries()) {
                                const UU = "word" === gU.kind,
                                  cU = yU[tU];
                                gU.delayMs = wU;
                                for (let yU = 0; IU && yU < cU; yU++) {
                                  const {
                                    intonation: QU
                                  } = IU;
                                  let AU = GU > 0 ? -QU.declineSemitones * (tU / GU) : 0;
                                  AU += PU(`${dU(gU.text)}|${yU}`) * QU.variationSemitones;
                                  const aU = Math.min(1, QU.variationSemitones);
                                  let kU = IU.glideSemitones,
                                    BU = 1;
                                  zU && (AU += QU.exclaimLiftSemitones, BU *= FU), XU && tU === GU && (AU += QU.questionRiseSemitones * (cU > 1 ? .5 + .5 * yU / (cU - 1) : 1), yU === cU - 1 && (kU = Math.abs(kU) + QU.questionRiseSemitones / 2)), UU && LU(gU.text) && (AU += DU * aU, BU *= oU), cU > 1 && 0 === yU && (AU += YU * aU, BU *= EU), CU.push({
                                    atMs: wU + yU * pU,
                                    semitones: AU,
                                    glideSemitones: kU,
                                    durationMs: yU < cU - 1 ? Math.min(IU.durationMs, pU * NU) : IU.durationMs,
                                    level: BU
                                  })
                                }
                                wU += cU * pU + (aU.test(gU.text) ? AU : kU.test(gU.text) ? QU : 0)
                              }
                            }
                            return {
                              pieces: GU.map((UU => "space" === UU.kind ? UU : "icon" === UU.kind ? {
                                kind: "icon",
                                icon: UU.text,
                                delayMs: UU.delayMs
                              } : {
                                kind: "word",
                                text: UU.text,
                                delayMs: UU.delayMs
                              })),
                              blips: CU
                            }
                          }
                          var CU = zU(1193),
                            wU = zU(1266),
                            qU = zU(2012);

                          function OU(UU) {
                            if ("string" === typeof UU) return UU;
                            const XU = wU.h.get().getCurrentLanguageCode();
                            return (0, CU.t)(XU, UU.translationKey, (0, CU.p)(UU.params, qU.c.shown))
                          }

                          function SU(UU) {
                            const XU = void 0 === UU.voice ? null : (0, cU.o)(UU.voice),
                              zU = XU && (0, cU.l)(XU);
                            return {
                              plan: eU(OU(UU.line), zU),
                              synth: zU
                            }
                          }

                          function rU(UU) {
                            const XU = [];
                            let zU = [];
                            for (const [yU, QU] of UU.entries()) {
                              var cU;
                              "space" === QU.kind && (" " !== QU.text || "icon" !== (null === (cU = UU[yU + 1]) || void 0 === cU ? void 0 : cU.kind)) ? (zU.length > 0 && XU.push(zU), XU.push([QU]), zU = []) : zU.push(QU)
                            }
                            return zU.length > 0 && XU.push(zU), XU
                          }
                        }, 5374: (UU, XU, zU) => {
                          zU.d(XU, {
                            b: () => EU,
                            e: () => YU
                          });
                          var cU = zU(5378),
                            yU = zU(27);
                          const QU = .25,
                            AU = .85,
                            FU = .02,
                            oU = .01;

                          function DU(UU, XU, zU, cU, yU, QU, FU) {
                            const {
                              waveform: oU,
                              pitchHz: DU,
                              attackMs: EU,
                              releaseMs: YU,
                              lowpassHz: NU
                            } = zU, IU = yU + cU.durationMs / 1e3, pU = DU * 2 ** (cU.semitones / 12), aU = UU.createOscillator();
                            aU.type = oU, aU.frequency.setValueAtTime(pU, yU), aU.frequency.exponentialRampToValueAtTime(pU * 2 ** (cU.glideSemitones / 12), IU);
                            const tU = yU + Math.min(EU, cU.durationMs) / 1e3,
                              gU = UU.createGain();
                            gU.gain.setValueAtTime(0, yU), gU.gain.linearRampToValueAtTime(QU, tU), gU.gain.linearRampToValueAtTime(QU * AU, Math.max(tU, IU - YU / 1e3)), gU.gain.linearRampToValueAtTime(0, IU);
                            const kU = [aU];
                            if (null !== NU) {
                              const XU = UU.createBiquadFilter();
                              XU.type = "lowpass", XU.frequency.value = NU, kU.push(XU)
                            }
                            kU.push(gU, XU);
                            for (let AU = 1; AU < kU.length; AU++) kU[AU - 1].connect(kU[AU]);
                            return aU.onended = () => {
                              for (const UU of kU.slice(0, -1)) UU.disconnect();
                              FU()
                            }, aU.start(yU), aU.stop(IU), aU
                          }

                          function EU(UU, XU, zU, cU, yU, AU) {
                            if (0 === cU.length) return AU(), () => {};
                            const EU = QU * zU.volume * yU,
                              YU = UU.createGain();
                            YU.connect(XU);
                            const NU = UU.currentTime + FU,
                              IU = new Set;
                            for (const QU of cU) {
                              const XU = DU(UU, YU, zU, QU, NU + QU.atMs / 1e3, EU * QU.level, (() => {
                                IU.delete(XU), 0 === IU.size && (YU.disconnect(), AU())
                              }));
                              IU.add(XU)
                            }
                            return () => {
                              const XU = UU.currentTime;
                              YU.gain.setTargetAtTime(0, XU, oU);
                              for (const UU of IU) try {
                                UU.stop(XU + 5 * oU)
                              } catch {}
                            }
                          }

                          function YU(UU, XU) {
                            var zU;
                            const QU = cU.Howler.ctx,
                              AU = cU.Howler.masterGain;
                            if (!QU || !AU || !yU.e.get("soundOnFromAd")) return () => {};
                            const FU = cU.Howler;
                            return null === (zU = FU._autoResume) || void 0 === zU || zU.call(FU), EU(QU, AU, UU, XU, yU.e.get("soundVolume"), (() => {
                              var UU;
                              null === (UU = FU._autoSuspend) || void 0 === UU || UU.call(FU)
                            }))
                          }
                        }, 5353: (UU, XU, zU) => {
                          zU.d(XU, {
                            e: () => FU,
                            i: () => yU,
                            l: () => oU,
                            o: () => AU,
                            p: () => QU
                          });
                          var cU = zU(5349);
                          const yU = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            QU = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            AU = `${cU.l} lists every page of the Bloxd Code API docs.`;

                          function FU(UU, XU) {
                            return `${UU.url}${encodeURIComponent(XU.toWellFormed())}`
                          }

                          function oU(UU) {
                            const XU = FU(yU, UU);
                            return XU.length <= 3e4 ? {
                              url: XU,
                              sendsPrompt: !0
                            } : {
                              url: new URL(yU.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 5378: (UU, XU, zU) => {
                          zU.r(XU), zU.d(XU, {
                            Howl: () => yU.Howl,
                            Howler: () => yU.Howler,
                            musicOutput: () => tU,
                            readyAudioContext: () => gU
                          });
                          var cU, yU = zU(5383),
                            QU = zU(3837),
                            AU = zU(5092);
                          const FU = yU.Howler;

                          function oU() {
                            var UU, XU;
                            if (FU.ctx || !FU.usingWebAudio || "undefined" === typeof AudioContext || !(0, AU.j)()) return;
                            const zU = navigator.audioSession;
                            let cU;
                            "auto" === (null === zU || void 0 === zU ? void 0 : zU.type) && (zU.type = "ambient");
                            try {
                              cU = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const yU = cU.createGain();
                            yU.gain.setValueAtTime(FU._muted ? 0 : null !== (UU = FU._volume) && void 0 !== UU ? UU : 1, cU.currentTime), yU.connect(cU.destination), FU.ctx = cU, FU.masterGain = yU, null === (XU = FU._setup) || void 0 === XU || XU.call(FU)
                          }
                          FU._mobileUnloaded = !0;
                          const DU = FU.volume.bind(yU.Howler);
                          FU.volume = function() {
                            return oU(), DU(...arguments)
                          };
                          const EU = FU.mute.bind(yU.Howler);
                          FU.mute = UU => (oU(), EU(UU));
                          const YU = yU.Howl.prototype,
                            NU = YU.init;

                          function IU() {
                            for (; FU._html5AudioPool.length < FU.html5PoolSize;) {
                              const UU = new Audio;
                              UU._unlocked = !0, FU._releaseHtml5Audio(UU)
                            }
                            for (const XU of FU._howls)
                              if (!XU._webAudio)
                                for (const zU of XU._getSoundIds()) {
                                  var UU;
                                  const cU = null === (UU = XU._soundById(zU)) || void 0 === UU ? void 0 : UU._node;
                                  cU && !cU._unlocked && (cU._unlocked = !0, cU.load())
                                }
                          }
                          YU.init = function(UU) {
                            return oU(), NU.call(this, UU)
                          }, (0, AU.j)() && (FU._unlockAudio = () => {
                            const UU = FU.ctx;
                            if (FU._audioUnlocked || !UU) return;
                            FU.autoUnlock = !1;
                            const XU = UU.createBuffer(1, 1, 22050);
                            FU._scratchBuffer = XU;
                            const zU = new AbortController;
                            let cU = "afterPaint";
                            const yU = () => {
                                var cU;
                                if (FU._audioUnlocked) return;
                                null === (cU = FU._autoResume) || void 0 === cU || cU.call(FU);
                                const yU = UU.createBufferSource();
                                yU.buffer = XU, yU.connect(UU.destination), yU.start(0), UU.resume().catch((() => {})), yU.onended = () => {
                                  yU.disconnect(0), FU._audioUnlocked = !0, zU.abort();
                                  for (const UU of FU._howls) UU._emit("unlock")
                                }
                              },
                              oU = () => {
                                IU(), yU()
                              },
                              DU = XU => {
                                if (IU(), "inTap" === cU) {
                                  if ("running" === UU.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), yU()
                                } else "afterPaint" === cU && (cU = "queued", (0, QU.d)(XU.timeStamp, (() => {
                                  cU = "inTap", yU()
                                })))
                              };
                            for (const QU of ["touchstart", "touchend"]) document.addEventListener(QU, oU, {
                              capture: !0,
                              signal: zU.signal
                            });
                            for (const QU of AU.c) document.addEventListener(QU, DU, {
                              capture: !0,
                              signal: zU.signal
                            })
                          });
                          let pU = 0;
                          const aU = null === (cU = FU._autoSuspend) || void 0 === cU ? void 0 : cU.bind(yU.Howler);

                          function tU() {
                            gU();
                            const {
                              ctx: UU,
                              masterGain: XU
                            } = FU;
                            return UU && XU ? {
                              ctx: UU,
                              destination: XU,
                              holdAwake: UU => {
                                var XU, zU;
                                (pU += UU ? 1 : -1, UU) ? null === (XU = FU._autoResume) || void 0 === XU || XU.call(FU): null === (zU = FU._autoSuspend) || void 0 === zU || zU.call(FU)
                              },
                              wake: () => {
                                var XU;
                                "running" !== UU.state && (null === (XU = FU._autoResume) || void 0 === XU || XU.call(FU), UU.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function gU() {
                            var UU;
                            (FU.volume(), FU.ctx && FU.autoUnlock) && (null === (UU = FU._unlockAudio) || void 0 === UU || UU.call(FU))
                          }
                          aU && (FU._autoSuspend = () => pU > 0 ? yU.Howler : aU())
                        }, 5387: (UU, XU, zU) => {
                          function cU(UU) {
                            return {
                              notAfter: UU
                            }
                          }
                          zU.d(XU, {
                            C: () => YU,
                            d: () => oU,
                            e: () => DU,
                            i: () => FU,
                            j: () => cU,
                            n: () => yU,
                            r: () => QU,
                            v: () => AU,
                            z: () => EU
                          });
                          const yU = cU("\\w$."),
                            QU = cU("\\w.,");

                          function AU(UU) {
                            return XU => oU(XU, UU)
                          }

                          function FU(UU) {
                            return XU => !UU.test(XU.input.slice(0, XU.index))
                          }

                          function oU(UU, XU) {
                            return UU.index > 0 && new RegExp(`[${XU}]`).test(UU.input[UU.index - 1])
                          }

                          function DU(UU, XU, zU) {
                            return function(UU) {
                              return void 0 !== UU && "function" !== typeof UU
                            }(zU) ? function(UU, XU, zU) {
                              const cU = XU.flags.replace(/[gy]/g, ""),
                                yU = new RegExp(`[^${zU}](?:${XU.source})`, `${cU}g`),
                                QU = [],
                                AU = zU => {
                                  const cU = zU.index + zU[0].length;
                                  return ("" === zU[0] ? NU(UU, XU, cU) : cU) - 1
                                },
                                FU = new RegExp(`(?:${XU.source})`, `${cU}y`).exec(UU);
                              if (FU) {
                                if (QU.push(FU), !XU.global) return QU;
                                yU.lastIndex = AU(FU)
                              }
                              for (let oU = yU.exec(UU); oU; oU = yU.exec(UU)) {
                                const zU = NU(UU, XU, oU.index) - oU.index;
                                if (oU[0] = oU[0].slice(zU), oU.index += zU, QU.push(oU), !XU.global) break;
                                yU.lastIndex = AU(oU)
                              }
                              return QU
                            }(UU, XU, zU.notAfter) : function(UU, XU, zU) {
                              const cU = new RegExp(XU.source, `${XU.flags.replace(/[gy]/g,"")}g`),
                                yU = [];
                              for (let QU = cU.exec(UU); QU; QU = cU.exec(UU))
                                if (!zU || zU(QU)) {
                                  if (yU.push(QU), !XU.global) break;
                                  "" === QU[0] && (cU.lastIndex = NU(UU, XU, cU.lastIndex))
                                } else cU.lastIndex = NU(UU, XU, QU.index);
                              return yU
                            }(UU, XU, zU)
                          }

                          function EU(UU, XU, zU, cU) {
                            let yU = "",
                              QU = 0;
                            for (const AU of DU(UU, XU, zU)) yU += UU.slice(QU, AU.index) + cU(AU), QU = AU.index + AU[0].length;
                            return yU + UU.slice(QU)
                          }

                          function YU(UU, XU, zU) {
                            const cU = [];
                            let yU = 0;
                            for (const QU of DU(UU, XU, zU)) cU.push(UU.slice(yU, QU.index)), yU = QU.index + QU[0].length;
                            return [...cU, UU.slice(yU)]
                          }

                          function NU(UU, XU, zU) {
                            var cU;
                            return zU + (XU.unicode && (null !== (cU = UU.codePointAt(zU)) && void 0 !== cU ? cU : 0) > 65535 ? 2 : 1)
                          }
                        }, 5349: (UU, XU, zU) => {
                          zU.d(XU, {
                            c: () => yU,
                            e: () => oU,
                            i: () => QU,
                            l: () => AU,
                            o: () => FU,
                            q: () => tU,
                            t: () => EU,
                            u: () => YU,
                            x: () => aU,
                            y: () => IU
                          });
                          var cU = zU(1639);
                          const yU = 24e3,
                            QU = "/docs/llms.txt",
                            AU = `${cU.b}${QU}`,
                            FU = "/llms.txt",
                            oU = "/docs/llms-full.txt";

                          function DU(UU) {
                            return UU || "index"
                          }

                          function EU(UU) {
                            return `/docs/${DU(UU)}.md`
                          }

                          function YU(UU, XU) {
                            return `/docs/${DU(UU)}/${XU+1}.md`
                          }
                          const NU = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function IU(UU) {
                            const XU = NU.exec(UU);
                            return null === XU ? null : {
                              name: XU[1],
                              part: void 0 === XU[2] ? null : Number(XU[2])
                            }
                          }
                          const pU = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function aU(UU) {
                            const XU = pU.exec(UU);
                            if (null === XU) return null;
                            const [, zU = "", cU] = XU;
                            return void 0 === cU ? EU(zU) : YU(zU, Number(cU) - 1)
                          }

                          function tU(UU) {
                            return `/docsHtml/${DU(UU)}.html`
                          }
                        }, 5369: (UU, XU, zU) => {
                          zU.d(XU, {
                            e: () => yU,
                            h: () => cU,
                            i: () => QU,
                            l: () => oU,
                            o: () => AU
                          });
                          const cU = ["sine", "triangle", "square", "sawtooth"],
                            yU = 55,
                            QU = {
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

                          function AU(UU) {
                            return "string" !== typeof UU ? UU : Object.hasOwn(QU, UU) ? QU[UU] : null
                          }

                          function FU(UU, XU, zU) {
                            return Math.min(zU, Math.max(XU, UU))
                          }

                          function oU(UU) {
                            const XU = FU(UU.durationMs, 10, 500),
                              zU = FU(UU.attackMs, 0, XU),
                              {
                                intonation: yU
                              } = UU;
                            return {
                              waveform: cU.includes(UU.waveform) ? UU.waveform : "sine",
                              pitchHz: FU(UU.pitchHz, 20, 4e3),
                              glideSemitones: FU(UU.glideSemitones, -24, 24),
                              durationMs: XU,
                              attackMs: zU,
                              releaseMs: FU(UU.releaseMs, 0, XU - zU),
                              lowpassHz: null === UU.lowpassHz ? null : FU(UU.lowpassHz, 20, 2e4),
                              volume: FU(UU.volume, 0, 2),
                              intonation: {
                                variationSemitones: FU(yU.variationSemitones, 0, 6),
                                declineSemitones: FU(yU.declineSemitones, 0, 12),
                                questionRiseSemitones: FU(yU.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: FU(yU.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: FU(UU.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const UU in modules) Object.freeze(modules[UU]);