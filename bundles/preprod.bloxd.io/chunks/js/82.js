export const id = 82;
export const ids = [82, 98];
export const modules = {
    5178: (QQ, WQ, XQ) => {
      XQ.d(WQ, {
        c: () => yQ,
        f: () => VQ
      });
      var wQ = XQ(1081),
        qQ = XQ.n(wQ),
        TQ = XQ(61),
        zQ = XQ(1226),
        sQ = XQ(5181),
        FQ = XQ(1975),
        PQ = XQ(2535),
        gQ = XQ(5187),
        JQ = XQ(1145);
      const rQ = new WeakMap;
      let IQ = 0;

      function jQ(QQ) {
        let WQ = rQ.get(QQ);
        return void 0 === WQ && (WQ = IQ++, rQ.set(QQ, WQ)), WQ
      }

      function BQ(QQ) {
        let {
          piece: WQ
        } = QQ;
        return "space" === WQ.kind ? (0, JQ.jsx)(JQ.Fragment, {
          children: WQ.text
        }) : (0, JQ.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${WQ.delayMs}ms`
          },
          children: (0, JQ.jsx)(sQ.e, {
            text: "icon" === WQ.kind ? `[[${WQ.icon}]]` : WQ.text
          })
        })
      }

      function yQ(QQ) {
        let {
          display: WQ
        } = QQ;
        const {
          selectedLanguage: XQ
        } = (0, zQ.C)(), wQ = (0, TQ.useMemo)((() => (0, gQ.c)((0, gQ.f)(WQ).plan.pieces)), [WQ, XQ.code]);
        return (0, JQ.jsxs)("div", {
          className: qQ()("Dialogue", {
            DialogueAnimateIn: !1 !== WQ.animateIn
          }),
          children: [WQ.speakerName && (0, JQ.jsx)(FQ.e, {
            text: WQ.speakerName,
            className: "DialogueSpeaker"
          }), (0, JQ.jsx)("p", {
            className: "DialogueLine",
            children: wQ.map(((QQ, WQ) => 1 === QQ.length && "space" === QQ[0].kind ? QQ[0].text : (0, JQ.jsx)("span", {
              className: "DialogueGlue",
              children: QQ.map(((QQ, WQ) => (0, JQ.jsx)(BQ, {
                piece: QQ
              }, WQ)))
            }, WQ)))
          })]
        })
      }
      const VQ = (0, TQ.memo)((function() {
        const QQ = (0, PQ.g)("dialogue");
        return (0, JQ.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: QQ && (0, JQ.jsx)(yQ, {
            display: QQ
          }, jQ(QQ))
        })
      }))
    },
    5033: (QQ, WQ, XQ) => {
        XQ.r(WQ), XQ.d(WQ, {
          default: () => Qz
        });
        var wQ = XQ(61),
          qQ = XQ(1081),
          TQ = XQ.n(qQ),
          zQ = XQ(1575),
          sQ = XQ(1581),
          FQ = XQ(26),
          PQ = XQ(78),
          gQ = XQ(5036),
          JQ = XQ(5049),
          rQ = XQ(5057),
          IQ = XQ(4671),
          jQ = XQ(1145);
        const BQ = "/textures/docs/icons";

        function yQ(QQ) {
          let {
            name: WQ,
            isTinted: XQ,
            className: wQ,
            style: qQ
          } = QQ;
          const zQ = `${BQ}/${WQ}.png`;
          return XQ ? (0, jQ.jsxs)("span", {
            className: TQ()("DocsPixelIcon", "Tinted", wQ),
            "aria-hidden": "true",
            style: qQ,
            children: [(0, jQ.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${zQ}")`,
                WebkitMaskImage: `url("${zQ}")`
              }
            }), (0, jQ.jsx)("img", {
              src: zQ,
              alt: ""
            })]
          }) : (0, jQ.jsx)("img", {
            className: TQ()("DocsPixelIcon", wQ),
            src: zQ,
            alt: "",
            "aria-hidden": "true",
            style: qQ
          })
        }
        const VQ = 1500;

        function DQ() {
          const [QQ, WQ] = (0, wQ.useState)(null);
          (0, wQ.useEffect)((() => {
            if (null === QQ) return;
            const XQ = setTimeout((() => {
              WQ(null)
            }), VQ);
            return () => {
              clearTimeout(XQ)
            }
          }), [QQ]);
          return [QQ, QQ => {
            (0, IQ.e)(QQ).then((() => {
              WQ({
                text: QQ,
                failed: !1
              })
            }), (XQ => {
              console.error("Could not copy to the clipboard", XQ), WQ({
                text: QQ,
                failed: !0
              })
            }))
          }]
        }

        function pQ(QQ) {
          let {
            text: WQ,
            label: XQ,
            className: wQ
          } = QQ;
          const [qQ, zQ] = DQ(), sQ = !1 === (null === qQ || void 0 === qQ ? void 0 : qQ.failed);
          return (0, jQ.jsxs)("button", {
            type: "button",
            className: TQ()("DocsCopyButton", wQ, {
              Copied: sQ
            }),
            title: `Copy ${WQ.length>40?"to clipboard":WQ}`,
            "aria-label": XQ ? void 0 : `Copy ${WQ}`,
            onClick: QQ => {
              QQ.stopPropagation(), zQ(WQ)
            },
            children: [(0, jQ.jsx)(yQ, {
              name: sQ ? "check" : "copy"
            }), XQ && (0, jQ.jsx)("span", {
              children: sQ ? "Copied" : null !== qQ && void 0 !== qQ && qQ.failed ? "Copy failed" : XQ
            })]
          })
        }
        gQ.d.registerLanguage("javascript", JQ.b), gQ.d.registerLanguage("typescript", rQ.c);
        const GQ = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          UQ = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          bQ = 24;

        function vQ(QQ) {
          let {
            code: WQ,
            lang: XQ,
            compact: qQ = !1
          } = QQ;
          const zQ = (0, wQ.useMemo)((() => function(QQ, WQ) {
              const XQ = GQ[WQ];
              return XQ ? gQ.d.highlight(QQ, {
                language: XQ
              }).value : QQ.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(WQ, XQ)), [WQ, XQ]),
            sQ = WQ.split("\n").length,
            FQ = !qQ && sQ > bQ + 6,
            [PQ, JQ] = (0, wQ.useState)(!1),
            rQ = GQ[XQ];
          return (0, jQ.jsxs)("div", {
            className: TQ()("DocsCodeBlock", {
              Compact: qQ,
              Collapsed: FQ && !PQ
            }),
            children: [!qQ && (0, jQ.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, jQ.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: rQ ? UQ[rQ] : "Text"
              }), (0, jQ.jsx)(pQ, {
                text: WQ,
                label: "Copy"
              })]
            }), (0, jQ.jsx)("pre", {
              children: (0, jQ.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: zQ
                }
              })
            }), FQ && (0, jQ.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": PQ,
              onClick: () => {
                JQ(!PQ)
              },
              children: [(0, jQ.jsx)(yQ, {
                name: PQ ? "chevron-up" : "chevron-down"
              }), PQ ? "Show less" : `Show all ${sQ} lines`]
            })]
          })
        }
        var dQ = XQ(5062);
        var HQ = XQ(5071);
        const aQ = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function lQ(QQ) {
          const WQ = new Map;
          let XQ, wQ = [],
            qQ = !1;
          const TQ = () => {
            XQ && WQ.set(XQ.name, XQ.lines.join("\n").trimEnd())
          };
          for (const zQ of QQ.split("\n")) {
            const QQ = zQ.match(aQ);
            qQ || zQ.startsWith("/*") ? (qQ || (TQ(), XQ = void 0), wQ.push(zQ), qQ = !zQ.includes("*/")) : QQ ? (TQ(), XQ = {
              name: QQ[1],
              lines: [...wQ, zQ]
            }, wQ = []) : XQ && (zQ.startsWith(" ") || zQ.startsWith("\t") || /^[}\])|]/.test(zQ)) ? XQ.lines.push(zQ) : XQ && "" !== zQ.trim() && (TQ(), XQ = void 0)
          }
          return TQ(), WQ
        }

        function hQ(QQ) {
          return "methods" === QQ || "callbacks" === QQ || "settings" === QQ
        }
        const iQ = {
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
              setterSnippet: (QQ, WQ) => `api.setClientOption(playerId, "${QQ}", ${WQ})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (QQ, WQ) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${QQ}", ${WQ})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (QQ, WQ) => `api.setMobSetting(mobId, "${QQ}", ${WQ})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (QQ, WQ) => `api.setVehicleSetting(vehicleId, "${QQ}", ${WQ})`
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
          cQ = {
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

        function AQ(QQ) {
          return QQ.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function RQ(QQ) {
          let WQ = !1;
          return QQ.split("\n").map((QQ => (QQ.startsWith("```") && (WQ = !WQ), !WQ && /^#{3,} /.test(QQ) ? QQ.slice(1) : QQ))).join("\n")
        }

        function EQ(QQ) {
          return "readme" === QQ ? "getting-started" : AQ(QQ)
        }
        const CQ = "## Glossary of Referenced Types";
        const uQ = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...HQ.e.flatMap((QQ => {
            const WQ = {
              id: QQ.id,
              slug: EQ(QQ.id),
              title: QQ.title,
              markdown: QQ.content,
              ...iQ[QQ.id]
            };
            if ("readme" === QQ.id) return function(QQ) {
              const WQ = QQ.markdown.indexOf(CQ),
                XQ = QQ.markdown.indexOf("\n```", WQ),
                wQ = QQ.markdown.indexOf("\n```", XQ + 1);
              if (-1 === WQ || -1 === XQ || -1 === wQ) throw new Error(`Getting started has no "${CQ}" section with a code block`);
              const qQ = QQ.markdown.slice(WQ + 31, XQ).trim(),
                TQ = [...lQ(QQ.markdown.slice(QQ.markdown.indexOf("\n", XQ + 1) + 1, wQ))].map((QQ => {
                  let [WQ, XQ] = QQ;
                  return `## ${WQ}\n\n\`\`\`ts\n${XQ}\n\`\`\`\n`
                })),
                zQ = QQ.markdown.slice(QQ.markdown.indexOf("\n", wQ + 1) + 1);
              return [{
                ...QQ,
                markdown: `${QQ.markdown.slice(0,WQ)}${zQ}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${qQ}\n\n${TQ.join("\n")}`
              }]
            }(WQ);
            if ("howTo" === QQ.id) {
              const {
                parent: QQ,
                guides: XQ
              } = function(QQ) {
                const [WQ, ...XQ] = QQ.markdown.split(/^(?=## )/m), wQ = [WQ], qQ = [];
                for (const zQ of XQ) {
                  var TQ;
                  const WQ = zQ.indexOf("\n"),
                    XQ = zQ.slice(3, WQ).trim(),
                    sQ = zQ.slice(WQ + 1);
                  if (!sQ.includes("```")) {
                    wQ.push(zQ);
                    continue
                  }
                  const FQ = null !== (TQ = cQ[XQ]) && void 0 !== TQ ? TQ : {
                    icon: "lightbulb",
                    summary: `How to use ${XQ.toLowerCase()} in World Code.`
                  };
                  qQ.push({
                    id: `${QQ.id}${XQ.split(/[^A-Za-z0-9]+/).map((QQ=>QQ.charAt(0).toUpperCase()+QQ.slice(1))).join("")}`,
                    slug: `${QQ.slug}-${AQ(XQ)}`,
                    title: XQ,
                    layout: "article",
                    sourceAnchor: (0, dQ.s)(XQ),
                    markdown: `# ${XQ}\n\n${RQ(sQ)}`,
                    ...FQ
                  })
                }
                return {
                  parent: {
                    ...QQ,
                    markdown: wQ.join(""),
                    childPageIds: qQ.map((QQ => QQ.id))
                  },
                  guides: qQ
                }
              }(WQ);
              return [QQ, ...XQ]
            }
            return [WQ]
          }))],
          LQ = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...uQ.filter((QQ => void 0 !== QQ.sourceAnchor)).map((QQ => QQ.id))]
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

        function kQ(QQ) {
          return uQ.find((WQ => WQ.id === QQ))
        }
        const fQ = new Map;

        function SQ(QQ) {
          let WQ = fQ.get(QQ.id);
          return WQ || (WQ = (0, dQ.x)(QQ.markdown, "changelog" === QQ.layout ? 3 : 2), fQ.set(QQ.id, WQ)), WQ
        }

        function tQ(QQ, WQ) {
          return SQ(QQ).sections.some((QQ => QQ.heading.anchor === WQ || QQ.blocks.some((QQ => "heading" === QQ.kind && QQ.anchor === WQ))))
        }

        function oQ(QQ) {
          const [WQ, ...XQ] = QQ.replace(/^#/, "").split("-"), wQ = uQ.find((QQ => QQ.id === WQ));
          if (!wQ) return null;
          const qQ = XQ.length > 0 ? (0, dQ.s)(XQ.join("-")) : "";
          for (const zQ of null !== (TQ = wQ.childPageIds) && void 0 !== TQ ? TQ : []) {
            var TQ;
            const QQ = kQ(zQ);
            if (QQ.sourceAnchor === qQ) return {
              page: QQ,
              anchor: ""
            };
            if (tQ(QQ, qQ)) return {
              page: QQ,
              anchor: qQ
            }
          }
          return {
            page: wQ,
            anchor: qQ
          }
        }
        const eQ = {
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

        function nQ(QQ, WQ) {
          let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const wQ = WQ.slug ? `${QQ}/${WQ.slug}` : QQ;
          return XQ ? `${wQ}#${XQ}` : wQ
        }
        var xQ = XQ(5085);
        const YQ = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          NQ = new Set(["GameApi", "Console", "_TypeOf"]),
          ZQ = 4;

        function OQ(QQ) {
          let WQ = QQ.length;
          for (; WQ > 0 && "" === QQ[WQ - 1].trim();) WQ--;
          return QQ.slice(0, WQ)
        }

        function KQ(QQ) {
          var WQ;
          const XQ = OQ(QQ);
          if (null === (WQ = XQ.at(-1)) || void 0 === WQ || !WQ.trimEnd().endsWith("*/")) return {
            lines: XQ,
            doc: ""
          };
          const wQ = XQ.findLastIndex((QQ => QQ.startsWith("/**")));
          return -1 === wQ ? {
            lines: XQ,
            doc: ""
          } : {
            lines: OQ(XQ.slice(0, wQ)),
            doc: XQ.slice(wQ).join("\n")
          }
        }

        function mQ(QQ) {
          var WQ;
          const XQ = QQ.split("\n"),
            wQ = XQ.flatMap(((QQ, WQ) => YQ.test(QQ) ? [WQ] : []));
          let qQ = KQ(XQ.slice(0, null !== (WQ = wQ[0]) && void 0 !== WQ ? WQ : XQ.length)).doc;
          return wQ.map(((QQ, WQ) => {
            var TQ;
            const zQ = KQ(XQ.slice(QQ, null !== (TQ = wQ[WQ + 1]) && void 0 !== TQ ? TQ : XQ.length)),
              sQ = {
                name: XQ[QQ].match(YQ)[1],
                doc: qQ,
                lines: zQ.lines
              };
            return qQ = zQ.doc, sQ
          }))
        }

        function MQ(QQ) {
          var WQ;
          const XQ = QQ.match(/^readonly \[([\s\S]*)\]$/);
          return XQ ? null !== (WQ = XQ[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== WQ ? WQ : [] : null
        }

        function QW(QQ) {
          if (!QQ.startsWith("{") || !QQ.endsWith("}")) return null;
          const WQ = {
              keys: [],
              values: []
            },
            XQ = QQ => {
              const XQ = QQ.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              XQ && (WQ.keys.push(XQ[1].startsWith('"') ? XQ[1] : `"${XQ[1]}"`), WQ.values.push(XQ[2].trim()))
            };
          let wQ = 0,
            qQ = "";
          for (const TQ of QQ.slice(1, -1)) "{[(".includes(TQ) ? wQ++ : "}])".includes(TQ) && wQ--, ";" === TQ && 0 === wQ ? (XQ(qQ), qQ = "") : qQ += TQ;
          return XQ(qQ), WQ
        }

        function WW(QQ) {
          return QQ.length > ZQ ? `\n\t| ${QQ.join("\n\t| ")}` : QQ.join(" | ")
        }

        function XW(QQ, WQ) {
          const XQ = function(QQ, WQ) {
            return QQ.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((QQ, XQ) => {
              var wQ;
              const qQ = null === (wQ = WQ.get(XQ)) || void 0 === wQ ? void 0 : wQ.object;
              return qQ ? WW(qQ.values) : QQ
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((QQ, XQ) => {
              var wQ, qQ;
              const TQ = null === (wQ = WQ.get(XQ)) || void 0 === wQ || null === (qQ = wQ.object) || void 0 === qQ ? void 0 : qQ.values.map(MQ);
              return null !== TQ && void 0 !== TQ && TQ.every((QQ => null !== QQ)) ? WW([...new Set(TQ.flat())]) : QQ
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((QQ, XQ) => {
              var wQ;
              const qQ = null === (wQ = WQ.get(XQ)) || void 0 === wQ ? void 0 : wQ.members;
              return qQ ? WW(qQ) : QQ
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((QQ, XQ) => {
              var wQ;
              const qQ = null === (wQ = WQ.get(XQ)) || void 0 === wQ ? void 0 : wQ.object;
              return qQ ? WW(qQ.keys) : QQ
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((QQ, XQ) => {
              var wQ, qQ;
              return null !== (wQ = null === (qQ = WQ.get(XQ)) || void 0 === qQ ? void 0 : qQ.text) && void 0 !== wQ ? wQ : QQ
            }))
          }(QQ.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), WQ);
          return [QQ.doc, XQ].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function wW(QQ) {
          const WQ = mQ(QQ),
            XQ = function(QQ) {
              const WQ = new Map,
                XQ = QQ.find((QQ => "_TypeOf" === QQ.name));
              let wQ = null;
              const qQ = () => {
                if (wQ) {
                  const QQ = wQ.lines.join("\n");
                  WQ.set(wQ.name, {
                    text: QQ,
                    members: MQ(QQ),
                    object: QW(QQ)
                  })
                }
              };
              for (const TQ of XQ.lines.slice(1, -1)) {
                const QQ = TQ.match(/^\t([\w$]+): (.+)$/);
                QQ ? (qQ(), wQ = {
                  name: QQ[1],
                  lines: [QQ[2]]
                }) : wQ && wQ.lines.push(TQ.replace(/^\t/, ""))
              }
              return qQ(), WQ
            }(WQ),
            wQ = new Map;
          for (const qQ of WQ) NQ.has(qQ.name) || wQ.has(qQ.name) || wQ.set(qQ.name, XW(qQ, XQ));
          return wQ
        }
        let qW, TW, zW;

        function sW() {
          return TW ??= function(QQ) {
            const WQ = mQ(QQ).find((QQ => "GameApi" === QQ.name)),
              XQ = new Map,
              wQ = WQ.lines;
            for (let TQ = 0; TQ < wQ.length; TQ++) {
              var qQ;
              if (!wQ[TQ].trimStart().startsWith("/**")) continue;
              const QQ = TQ;
              for (; TQ < wQ.length && !wQ[TQ].includes("*/");) TQ++;
              const WQ = null === (qQ = wQ[TQ + 1]) || void 0 === qQ ? void 0 : qQ.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!WQ) continue;
              let zQ = null;
              const sQ = [];
              let FQ = "description",
                PQ = !1;
              for (const XQ of wQ.slice(QQ, TQ + 1).join("\n").split("\n").map((QQ => QQ.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const QQ = XQ.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                QQ ? (zQ = QQ[1].trim(), FQ = "deprecation") : XQ.startsWith("@") ? (FQ = "otherTag", PQ = !0) : "" === XQ.trim() ? PQ || (FQ = "description", sQ.push(XQ)) : "deprecation" !== FQ || /^[A-Z]/.test(XQ.trim()) ? "otherTag" !== FQ && (FQ = "description", sQ.push(XQ)) : zQ = `${zQ} ${XQ.trim()}`.trim()
              }
              XQ.set(WQ[1], {
                deprecation: zQ,
                description: sQ.join("\n").trim()
              })
            }
            return XQ
          }(xQ.default), TW
        }

        function FW() {
          if (!zW) {
            zW = new Map;
            for (const QQ of uQ) {
              const WQ = (0, dQ.t)(SQ(QQ)).flatMap((QQ => QQ.blocks));
              for (const QQ of (0, dQ.k)(WQ))
                if ("ts" === QQ.lang || "typescript" === QQ.lang)
                  for (const [WQ, XQ] of lQ(QQ.code)) zW.set(WQ, XQ)
            }
            for (const [QQ, WQ] of(qW ??= wW(xQ.default), qW)) zW.has(QQ) || zW.set(QQ, WQ)
          }
          return zW
        }
        const PW = {
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
        let gW;

        function JW() {
          if (!gW) {
            gW = new Map;
            for (const QQ of uQ)
              if (hQ(QQ.layout))
                for (const WQ of SQ(QQ).sections) gW.has(WQ.heading.text) || gW.set(WQ.heading.text, {
                  pageId: QQ.id,
                  anchor: WQ.heading.anchor
                })
          }
          return gW
        }

        function rW(QQ) {
          const WQ = QQ.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return WQ ? JW().get(WQ[1]) : void 0
        }
        const IW = (0, wQ.createContext)("/docs"),
          jW = (0, wQ.createContext)(null),
          BW = (0, wQ.createContext)(!1),
          yW = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function VW(QQ) {
          const WQ = QQ.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return WQ ? WQ[1] : null
        }

        function DW(QQ) {
          let {
            colour: WQ
          } = QQ;
          return (0, jQ.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: WQ
            },
            "aria-hidden": "true"
          })
        }

        function pW(QQ) {
          const WQ = [];
          let XQ = 0;
          for (const wQ of QQ.matchAll(yW)) WQ.push(QQ.slice(XQ, wQ.index), (0, jQ.jsx)(DW, {
            colour: wQ[0]
          }), wQ[0]), XQ = wQ.index + wQ[0].length;
          return WQ.push(QQ.slice(XQ)), WQ
        }

        function GW(QQ) {
          let {
            href: WQ,
            children: XQ
          } = QQ;
          const qQ = (0, wQ.useContext)(IW);
          if (WQ.startsWith("#")) {
            const QQ = oQ(WQ);
            if (QQ) return (0, jQ.jsx)(zQ.d, {
              to: nQ(qQ, QQ.page, QQ.anchor),
              children: (0, jQ.jsx)(BW.Provider, {
                value: !0,
                children: XQ
              })
            })
          }
          return (0, jQ.jsx)("a", {
            href: WQ,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, jQ.jsx)(BW.Provider, {
              value: !0,
              children: XQ
            })
          })
        }

        function UW(QQ) {
          let {
            code: WQ
          } = QQ;
          const XQ = (0, wQ.useContext)(IW);
          if ((0, wQ.useContext)(BW)) return (0, jQ.jsx)("code", {
            className: "DocsInlineCode",
            children: WQ
          });
          if (FW().has(WQ)) return (0, jQ.jsx)(HW, {
            type: WQ
          });
          const qQ = rW(WQ);
          if (qQ) return (0, jQ.jsx)(zQ.d, {
            className: "DocsInlineCode DocsSymbolLink",
            to: nQ(XQ, kQ(qQ.pageId), qQ.anchor),
            children: WQ
          });
          const TQ = VW(WQ);
          return (0, jQ.jsxs)("code", {
            className: "DocsInlineCode",
            children: [TQ && (0, jQ.jsx)(DW, {
              colour: TQ
            }), WQ]
          })
        }

        function bW(QQ) {
          let {
            text: WQ
          } = QQ;
          const XQ = [];
          let qQ = 0;
          for (const wQ of WQ.matchAll(dQ.g)) {
            wQ.index > qQ && XQ.push(...pW(WQ.slice(qQ, wQ.index)));
            const [, QQ, TQ, zQ, sQ, FQ] = wQ;
            QQ ? XQ.push((0, jQ.jsx)(UW, {
              code: (0, dQ.m)(QQ, TQ)
            })) : zQ ? XQ.push((0, jQ.jsx)("strong", {
              children: (0, jQ.jsx)(bW, {
                text: zQ
              })
            })) : XQ.push((0, jQ.jsx)(GW, {
              href: FQ,
              children: (0, jQ.jsx)(bW, {
                text: sQ
              })
            })), qQ = wQ.index + wQ[0].length
          }
          return qQ < WQ.length && XQ.push(...pW(WQ.slice(qQ))), (0, jQ.jsx)(jQ.Fragment, {
            children: XQ.map(((QQ, WQ) => (0, jQ.jsx)(wQ.Fragment, {
              children: QQ
            }, WQ)))
          })
        }
        const vW = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          dW = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function HW(QQ) {
          let {
            type: WQ
          } = QQ;
          const XQ = FW(),
            qQ = [];
          for (const wQ of WQ.trim().matchAll(vW)) {
            const [QQ, WQ, TQ, zQ, sQ] = wQ;
            WQ ? qQ.push((0, jQ.jsx)("span", {
              className: "DocsTypeString",
              children: QQ
            })) : TQ && XQ.has(TQ) ? qQ.push((0, jQ.jsx)(cW, {
              name: TQ,
              definition: XQ.get(TQ)
            })) : TQ ? qQ.push((0, jQ.jsx)("span", {
              className: dW.has(TQ) ? "DocsTypeKeyword" : "DocsTypeName",
              children: QQ
            })) : zQ ? qQ.push((0, jQ.jsx)("span", {
              className: "DocsTypeNumber",
              children: QQ
            })) : sQ ? qQ.push(" ") : qQ.push((0, jQ.jsx)("span", {
              className: "DocsTypePunctuation",
              children: QQ
            }))
          }
          return (0, jQ.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: qQ.map(((QQ, WQ) => (0, jQ.jsx)(wQ.Fragment, {
              children: QQ
            }, WQ)))
          })
        }
        const aW = 480,
          lW = 6,
          hW = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let iW = 0;

        function cW(QQ) {
          let {
            name: WQ,
            definition: XQ
          } = QQ;
          const qQ = (0, wQ.useContext)(IW),
            TQ = PW[WQ],
            sQ = (0, wQ.useRef)(null),
            FQ = (0, wQ.useRef)(null),
            gQ = (0, wQ.useRef)(null),
            [JQ, rQ] = (0, wQ.useState)(!1),
            [IQ, BQ] = (0, wQ.useState)(null),
            VQ = (0, wQ.useRef)(),
            DQ = (0, wQ.useContext)(jW),
            [pQ] = (0, wQ.useState)((() => "DocsTypePopover-" + iW++)),
            GQ = () => {
              clearTimeout(VQ.current), rQ(!0)
            },
            UQ = () => {
              clearTimeout(VQ.current), VQ.current = setTimeout((() => {
                rQ(!1)
              }), 120)
            };
          return (0, wQ.useEffect)((() => {
            if (!JQ) return;
            const QQ = QQ => {
              if ("Escape" === QQ.key) {
                var WQ, XQ;
                if (null !== (WQ = FQ.current) && void 0 !== WQ && WQ.contains(document.activeElement)) null === (XQ = sQ.current) || void 0 === XQ || XQ.focus();
                rQ(!1)
              }
            };
            return document.addEventListener("keydown", QQ), () => {
              document.removeEventListener("keydown", QQ)
            }
          }), [JQ]), (0, wQ.useEffect)((() => () => {
            clearTimeout(VQ.current)
          }), []), (0, wQ.useLayoutEffect)((() => {
            if (!JQ || !sQ.current || !FQ.current) return void BQ(null);
            const QQ = sQ.current.getBoundingClientRect(),
              WQ = FQ.current.offsetHeight,
              XQ = Math.min(aW, window.innerWidth - 32),
              wQ = Math.min(Math.max(16, QQ.left), window.innerWidth - XQ - 16),
              qQ = QQ.bottom + lW + WQ < window.innerHeight;
            BQ({
              left: wQ,
              top: qQ ? QQ.bottom + lW : Math.max(16, QQ.top - lW - WQ)
            })
          }), [JQ]), (0, jQ.jsxs)(jQ.Fragment, {
            children: [(0, jQ.jsx)("button", {
              type: "button",
              ref: sQ,
              className: "DocsTypeLink",
              "aria-expanded": JQ,
              "aria-describedby": JQ ? pQ : void 0,
              onMouseEnter: GQ,
              onMouseLeave: UQ,
              onFocus: GQ,
              onBlur: UQ,
              onKeyDown: QQ => {
                "Tab" === QQ.key && !QQ.shiftKey && gQ.current && (QQ.preventDefault(), gQ.current.focus())
              },
              onClick: GQ,
              children: WQ
            }), JQ && (0, PQ.createPortal)((0, jQ.jsxs)("span", {
              ref: FQ,
              id: pQ,
              className: "DocsTypePopover",
              role: "tooltip",
              style: IQ ? {
                left: IQ.left,
                top: IQ.top,
                maxWidth: aW
              } : {
                visibility: "hidden"
              },
              onMouseEnter: GQ,
              onMouseLeave: UQ,
              onFocus: GQ,
              onBlur: UQ,
              children: [(0, jQ.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, jQ.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: WQ
                }), TQ && (0, jQ.jsxs)(zQ.d, {
                  ref: gQ,
                  className: "DocsTypePopoverLink",
                  to: nQ(qQ, kQ(TQ)),
                  onClick: () => {
                    rQ(!1)
                  },
                  onKeyDown: QQ => {
                    if ("Tab" === QQ.key) {
                      var WQ;
                      if (QQ.preventDefault(), QQ.shiftKey || !sQ.current || ! function(QQ, WQ) {
                          const XQ = [...document.querySelectorAll(hW)],
                            wQ = XQ.slice(XQ.indexOf(QQ) + 1).find((QQ => QQ.getClientRects().length > 0 && !(null !== WQ && void 0 !== WQ && WQ.contains(QQ))));
                          return null === wQ || void 0 === wQ || wQ.focus(), void 0 !== wQ
                        }(sQ.current, FQ.current)) null === (WQ = sQ.current) || void 0 === WQ || WQ.focus();
                      QQ.shiftKey || rQ(!1)
                    }
                  },
                  children: [kQ(TQ).title, (0, jQ.jsx)(yQ, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, jQ.jsx)(vQ, {
                lang: "ts",
                code: XQ,
                compact: !0
              })]
            }), null !== DQ && void 0 !== DQ ? DQ : document.body)]
          })
        }
        var AW = XQ(231),
          RW = XQ(5094),
          EW = XQ(5103),
          CW = XQ(5111);
        const uW = {
          progressBar: {
            ZQ: 30,
            OQ: .075,
            KQ: 5,
            mQ: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            WW: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            wW: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            qW: !0,
            scale: 3,
            rotation: 15,
            TW: !1
          },
          gravityBar: {
            ZQ: 30,
            sW: .25,
            FW: 3,
            PW: .8,
            gravity: 1,
            gW: 1.5,
            JW: 8,
            rW: 4,
            mQ: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            jW: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            yW: 5,
            VW: 1200,
            DW: .15,
            pW: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var LW = XQ(382),
          kW = XQ(2067);

        function fW(QQ) {
          return QQ.startsWith("fa-")
        }
        const SW = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          tW = {
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

        function oW(QQ) {
          return "string" === typeof QQ ? "text" : "entityName" in QQ || "translationKey" in QQ ? "other" : (0, LW.zb)(QQ) ? "progressBar" : (0, LW.xb)(QQ) ? "keyBinding" : "icon" in QQ ? "icon" : "str" in QQ && "string" === typeof QQ.str ? "text" : "other"
        }
        const eW = [{
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
          nW = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...eW],
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
                options: kW.i
              },
              isRequired: !0
            }, ...eW],
            other: []
          };

        function xW(QQ) {
          return "string" === typeof QQ ? {
            str: QQ
          } : QQ
        }

        function YW(QQ, WQ) {
          let XQ = xW(QQ);
          for (const wQ of WQ) XQ = XQ && "object" === typeof XQ ? XQ[wQ] : void 0;
          return XQ
        }

        function NW(QQ, WQ, XQ) {
          const wQ = (QQ, qQ) => {
            var TQ;
            const zQ = WQ[qQ],
              sQ = {
                ...QQ
              };
            if (qQ === WQ.length - 1) return void 0 === XQ ? delete sQ[zQ] : sQ[zQ] = XQ, sQ;
            const FQ = wQ(null !== (TQ = QQ[zQ]) && void 0 !== TQ ? TQ : {}, qQ + 1);
            return 0 === Object.keys(FQ).length ? delete sQ[zQ] : sQ[zQ] = FQ, sQ
          };
          return function(QQ) {
            const WQ = Object.keys(QQ);
            return "string" === typeof QQ.str && 1 === WQ.length ? QQ.str : QQ
          }(wQ(xW(QQ), 0))
        }

        function ZW(QQ, WQ) {
          const XQ = oW(QQ),
            wQ = nW[XQ].find((QQ => QQ.path.join(".") === WQ.join("."))),
            qQ = null !== wQ && void 0 !== wQ && wQ.isRequired && "other" !== XQ ? YW(tW[XQ], WQ) : void 0;
          return NW(QQ, WQ, qQ)
        }

        function OW(QQ) {
          switch (oW(QQ)) {
            case "text":
              return String(YW(QQ, ["str"]));
            case "icon":
              return String(YW(QQ, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(YW(QQ,["progress"])))}%`;
            case "keyBinding":
              return String(YW(QQ, ["action"]));
            case "other":
              return JSON.stringify(QQ)
          }
        }
        const KW = /^[A-Za-z_$][\w$]*$/;

        function mW(QQ) {
          if (Array.isArray(QQ)) return `[${QQ.map(mW).join(", ")}]`;
          if (QQ && "object" === typeof QQ) {
            const WQ = Object.entries(QQ).map((QQ => {
              let [WQ, XQ] = QQ;
              return `${KW.test(WQ)?WQ:JSON.stringify(WQ)}: ${mW(XQ)}`
            }));
            return 0 === WQ.length ? "{}" : `{ ${WQ.join(", ")} }`
          }
          return JSON.stringify(QQ)
        }

        function MW(QQ) {
          const WQ = QQ.map(mW),
            XQ = `[${WQ.join(", ")}]`;
          return XQ.length <= 60 ? XQ : `[\n${WQ.map((QQ=>`    ${QQ},`)).join("\n")}\n]`
        }
        const QX = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function WX(QQ) {
          let WQ = "";
          for (let qQ = 0; qQ < QQ.length; qQ++) {
            const TQ = QQ[qQ];
            if ("\\" === TQ) {
              var XQ;
              const wQ = null !== (XQ = QQ[qQ + 1]) && void 0 !== XQ ? XQ : "";
              WQ += "'" === wQ ? "'" : TQ + wQ, qQ++
            } else if ('"' === TQ) WQ += '\\"';
            else {
              var wQ;
              WQ += null !== (wQ = QX[TQ]) && void 0 !== wQ ? wQ : TQ
            }
          }
          return `"${WQ}"`
        }

        function XX(QQ) {
          if ("string" === typeof QQ) return !0;
          if (!QQ || "object" !== typeof QQ || Array.isArray(QQ)) return !1;
          const WQ = QQ;
          return "ProgressBar" === WQ.type ? "number" === typeof WQ.progress : "StyledKeyBinding" === WQ.type ? kW.i.includes(WQ.action) : "string" === typeof WQ.icon || "string" === typeof WQ.str || "string" === typeof WQ.entityName || "string" === typeof WQ.translationKey
        }

        function wX(QQ) {
          let WQ;
          try {
            WQ = function(QQ) {
              let WQ = "",
                XQ = "",
                wQ = 0;
              const qQ = () => {
                WQ += XQ.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), XQ = ""
              };
              for (; wQ < QQ.length;) {
                const TQ = QQ.slice(wQ).search(/["'`]|\/\//);
                if (-1 === TQ) {
                  XQ += QQ.slice(wQ);
                  break
                }
                XQ += QQ.slice(wQ, wQ + TQ);
                const zQ = wQ + TQ,
                  sQ = QQ[zQ];
                if ("/" === sQ) {
                  const WQ = QQ.indexOf("\n", zQ);
                  wQ = -1 === WQ ? QQ.length : WQ;
                  continue
                }
                if (qQ(), "`" === sQ) throw new Error("Use quotes rather than template strings.");
                let FQ = zQ + 1;
                for (; FQ < QQ.length && QQ[FQ] !== sQ;) FQ += "\\" === QQ[FQ] ? 2 : 1;
                if (FQ >= QQ.length) throw new Error("A string is missing its closing quote.");
                const PQ = QQ.slice(zQ + 1, FQ);
                WQ += WX(PQ), wQ = FQ + 1
              }
              return qQ(), JSON.parse(WQ)
            }(QQ.trim())
          } catch (wQ) {
            return {
              parts: null,
              error: wQ instanceof SyntaxError ? "This isn't a valid array yet." : wQ.message
            }
          }
          if (!Array.isArray(WQ)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const XQ = WQ.findIndex((QQ => !XX(QQ)));
          return -1 !== XQ ? {
            parts: null,
            error: `Part ${XQ+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: WQ,
            error: null
          }
        }
        const qX = 1 / AW.h.clientTicksPerSecond,
          TX = 700,
          zX = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          sX = {
            progressBar: uW.progressBar.WW,
            timedClick: uW.timedClick.icon,
            gravityBar: uW.gravityBar.icon,
            precisionBar: uW.precisionBar.icon,
            rhythmClick: uW.rhythmClick.icon
          };

        function FX(QQ) {
          let {
            type: WQ
          } = QQ;
          const [XQ, qQ] = (0, wQ.useState)("ready"), [zQ, sQ] = (0, wQ.useState)(1), [FQ, PQ] = (0, wQ.useState)(!0), gQ = (0, wQ.useRef)(null), JQ = (0, wQ.useRef)(null), rQ = (0, wQ.useRef)(null), IQ = (0, wQ.useRef)(new Set), BQ = (0, wQ.useRef)(!1), VQ = sX[WQ], DQ = (0, wQ.useMemo)((() => ({
            getState: () => {
              var QQ, WQ;
              return null !== (QQ = null === (WQ = rQ.current) || void 0 === WQ ? void 0 : WQ.getState()) && void 0 !== QQ ? QQ : zX
            },
            onFrame: QQ => (IQ.current.add(QQ), () => {
              IQ.current.delete(QQ)
            })
          })), []);
          (0, wQ.useEffect)((() => {
            const QQ = gQ.current,
              WQ = JQ.current;
            if (!QQ || !WQ) return;
            const XQ = new ResizeObserver((() => {
              sQ(QQ.clientWidth / Math.max(1, WQ.offsetWidth))
            }));
            return XQ.observe(QQ), () => {
              XQ.disconnect()
            }
          }), []), (0, wQ.useEffect)((() => {
            var QQ;
            if ("playing" !== XQ) return;
            let wQ = !1;
            const TQ = new CW.d[WQ](uW[WQ], (QQ => {
              wQ = !0, PQ(!1), qQ(QQ ? "succeeded" : "failed")
            }), (() => {}));
            rQ.current = TQ;
            let zQ = 0,
              sQ = performance.now(),
              FQ = requestAnimationFrame((function QQ(WQ) {
                for (zQ += Math.min(.25, (WQ - sQ) / 1e3), sQ = WQ; zQ >= qX && !wQ;) zQ -= qX, TQ.handleTick(qX);
                for (const XQ of IQ.current) XQ();
                wQ || (FQ = requestAnimationFrame(QQ))
              }));
            return null === (QQ = gQ.current) || void 0 === QQ || QQ.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(FQ), TQ.tearDown(), rQ.current = null, BQ.current = !1
            }
          }), [XQ, WQ]), (0, wQ.useEffect)((() => {
            if (FQ) return;
            const QQ = setTimeout((() => {
              PQ(!0)
            }), TX);
            return () => {
              clearTimeout(QQ)
            }
          }), [FQ]);
          const pQ = QQ => {
            var WQ;
            "playing" === XQ && BQ.current !== QQ && (BQ.current = QQ, null === (WQ = rQ.current) || void 0 === WQ || WQ.handleMouseInput(QQ))
          };
          return (0, jQ.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, jQ.jsxs)("div", {
              ref: gQ,
              className: TQ()("DocsQteStage", {
                Playing: "playing" === XQ
              }),
              tabIndex: "playing" === XQ ? 0 : -1,
              role: "playing" === XQ ? "button" : void 0,
              "aria-label": "playing" === XQ ? `${WQ} quick time event: click or press Space` : void 0,
              onPointerDown: QQ => {
                0 === QQ.button && pQ(!0)
              },
              onPointerUp: () => {
                pQ(!1)
              },
              onPointerLeave: () => {
                pQ(!1)
              },
              onPointerCancel: () => {
                pQ(!1)
              },
              onKeyDown: QQ => {
                "playing" !== XQ || " " !== QQ.key && "Enter" !== QQ.key || (QQ.preventDefault(), pQ(!0))
              },
              onKeyUp: QQ => {
                "playing" !== XQ || " " !== QQ.key && "Enter" !== QQ.key || pQ(!1)
              },
              children: [(0, jQ.jsx)("div", {
                ref: JQ,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${zQ})`
                },
                children: "playing" === XQ && (0, jQ.jsx)(EW.d.Provider, {
                  value: DQ,
                  children: (0, jQ.jsx)(RW.d, {
                    qte: {
                      type: WQ,
                      parameters: uW[WQ]
                    }
                  })
                })
              }), "playing" !== XQ && (0, jQ.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== XQ && (0, jQ.jsxs)("div", {
                  className: TQ()("DocsQteResult", "succeeded" === XQ ? "Succeeded" : "Failed"),
                  children: [(0, jQ.jsx)(yQ, {
                    name: "succeeded" === XQ ? "check" : "cross",
                    isTinted: !0
                  }), (0, jQ.jsx)("span", {
                    children: "succeeded" === XQ ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, jQ.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !FQ,
                  onClick: () => {
                    qQ("playing")
                  },
                  children: [(0, jQ.jsx)(yQ, {
                    name: "ready" === XQ ? "play" : "replay"
                  }), (0, jQ.jsx)("span", {
                    children: "ready" === XQ ? `Try ${WQ}` : "Play again"
                  })]
                })]
              })]
            }), VQ && !fW(VQ) && (0, jQ.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, jQ.jsx)("code", {
                children: VQ
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function PX(QQ) {
          let {
            level: WQ,
            text: XQ,
            anchor: wQ,
            className: qQ
          } = QQ;
          const zQ = `h${Math.min(WQ,6)}`;
          return (0, jQ.jsxs)(zQ, {
                id: wQ,
                className: TQ()("DocsHeading", qQ),
                children: [(0, jQ.jsx)(bW, {
                      text: XQ
                    }), (0, jQ.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${wQ}`,
                        "aria-label": `Link to ${XQ.replace(/`/g,"")}`,children:"#"})]})}function gX(QQ){let{items:WQ,ordered:XQ}=QQ;const wQ=XQ?"ol":"ul";return(0,jQ.jsx)(wQ,{className:"DocsList",children:WQ.map(((QQ,WQ)=>(0,jQ.jsxs)("li",{children:[(0,jQ.jsx)(bW,{text:QQ.text}),QQ.children.length>0&&(0,jQ.jsx)(gX,{items:QQ.children,ordered:XQ})]},WQ)))})}function JX(QQ){const WQ=QQ[0],XQ="paragraph"===(null===WQ||void 0===WQ?void 0:WQ.kind)?WQ.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(XQ)?"warning":/^\*\*(tip|prefer)/.test(XQ)?"tip":"note"}function rX(QQ){let{block:WQ}=QQ;switch(WQ.kind){case"heading":return(0,jQ.jsx)(PX,{level:WQ.level,text:WQ.text,anchor:WQ.anchor});case"paragraph":return(0,jQ.jsx)("p",{children:(0,jQ.jsx)(bW,{text:WQ.text})});case"code":{const QQ="ts"===WQ.lang?function(QQ){const WQ=QQ.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return WQ&&Object.hasOwn(uW,WQ[1])?WQ[1]:null}(WQ.code):null;return(0,jQ.jsxs)(jQ.Fragment,{children:[(0,jQ.jsx)(vQ,{code:WQ.code,lang:WQ.lang}),QQ&&(0,jQ.jsx)(FX,{type:QQ})]})}case"table":return(0,jQ.jsx)("div",{className:"DocsTableScroll",children:(0,jQ.jsxs)("table",{className:"DocsTable",children:[(0,jQ.jsx)("thead",{children:(0,jQ.jsx)("tr",{children:WQ.header.map(((QQ,WQ)=>(0,jQ.jsx)("th",{children:(0,jQ.jsx)(bW,{text:QQ})},WQ)))})}),(0,jQ.jsx)("tbody",{children:WQ.rows.map(((QQ,WQ)=>(0,jQ.jsx)("tr",{children:QQ.map(((QQ,WQ)=>(0,jQ.jsx)("td",{children:(0,jQ.jsx)(bW,{text:QQ})},WQ)))},WQ)))})]})});case"list":return(0,jQ.jsx)(gX,{items:WQ.items,ordered:WQ.ordered});case"quote":return(0,jQ.jsx)("aside",{className:TQ()("DocsCallout",JX(WQ.blocks)),children:(0,jQ.jsx)(IX,{blocks:WQ.blocks})});case"rule":return(0,jQ.jsx)("hr",{className:"DocsRule"})}}function IX(QQ){let{blocks:WQ}=QQ;return(0,jQ.jsx)(jQ.Fragment,{children:WQ.map(((QQ,WQ)=>(0,jQ.jsx)(rX,{block:QQ},WQ)))})}var jX=XQ(5075),BX=XQ(5083);function yX(QQ){return"blocks"===QQ||"items"===QQ}const VX=new Map;function DX(QQ){let WQ=VX.get(QQ);return WQ||(WQ=function(QQ){const WQ={entries:[],legend:[],notes:[],examples:[]};let XQ=!1;for(const TQ of QQ.split(/\r?\n/).slice(1)){if(TQ.startsWith("#")){const QQ=TQ.replace(/^# ?/,""),wQ=QQ.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);wQ?WQ.legend.push({code:wQ[1],meaning:wQ[2],usage:wQ[3].trim()}):/^Examples:/.test(QQ.trim())?XQ=!0:XQ&&QQ.trim()?WQ.examples.push(QQ.trim()):QQ.trim()&&!/^\s/.test(QQ)&&WQ.notes.push(QQ.trim());continue}const QQ=TQ.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var wQ,qQ;QQ&&WQ.entries.push({name:QQ[1],variants:null!==(wQ=null===(qQ=QQ[2])||void 0===qQ?void 0:qQ.split(","))&&void 0!==wQ?wQ:[]})}return WQ}("blocks"===QQ?jX:BX),VX.set(QQ,WQ)),WQ}function pX(QQ){let{className:WQ,value:XQ,placeholder:wQ,label:qQ,onChange:TQ,count:zQ,children:sQ}=QQ;return(0,jQ.jsxs)("div",{className:WQ,children:[(0,jQ.jsx)(yQ,{name:"magnifying-glass"}),(0,jQ.jsx)("input",{type:"search",value:XQ,placeholder:wQ,"aria-label":qQ,onChange:QQ=>{TQ(QQ.target.value)}}),sQ,zQ&&(0,jQ.jsxs)("span",{className:"DocsFilterCount",children:[zQ.visible," of ",zQ.total]})]})}var GX=XQ(1094);function UX(QQ){const WQ=QQ.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return WQ?WQ[2]:null}function bX(QQ){return"paragraph"===QQ.kind&&""===QQ.text.trim()}function vX(QQ){const WQ={name:QQ.heading.text,description:[],params:[],returns:null};let XQ="description";for(const qQ of QQ.blocks)if(!bX(qQ))if("heading"===qQ.kind&&/^Parameters:?$/.test(qQ.text))XQ="params";else if("heading"===qQ.kind&&/^Returns:?$/.test(qQ.text))XQ="returns",WQ.returns={type:"",description:[]};else if("params"!==XQ||"table"!==qQ.kind){if("returns"===XQ&&"paragraph"===qQ.kind&&""===WQ.returns.type){const QQ=UX(qQ.text);if(null!==QQ){WQ.returns.type=QQ.replaceAll("\\|","|");continue}}"returns"===XQ?WQ.returns.description.push(qQ):WQ.description.push(qQ)}else for(const[QQ,XQ,TQ]of qQ.rows){var wQ;WQ.params.push({name:QQ,type:null!==(wQ=UX(XQ))&&void 0!==wQ?wQ:XQ,description:null!==TQ&&void 0!==TQ?TQ:""})}return WQ}const dX=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function HX(QQ){return QQ.filter((QQ=>!bX(QQ)))}const aX=/^[\w][\w .'&!:()-]*$/,lX=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function hX(QQ){var WQ;if("code"===QQ.kind&&"text"===QQ.lang){const WQ=QQ.code.split("\n").map((QQ=>QQ.trim())).filter(Boolean);return WQ.length>0&&WQ.every((QQ=>aX.test(QQ)))?WQ.map((QQ=>({name:QQ}))):null}return"paragraph"===QQ.kind&&lX.test(QQ.text.trim())?[...QQ.text.matchAll(/`([ ^ `]+)` / g)].flatMap((QQ => QQ[1].split(/,\s*/).map((QQ => ({
                              name: QQ.trim()
                            }))))): "table" === QQ.kind && null !== (WQ = QQ.header[0]) && void 0 !== WQ && WQ.startsWith("Song") ? QQ.rows.map((QQ => {
                              let [WQ, XQ] = QQ;
                              return {
                                name: WQ.replace(/`/g, ""),
                                caption: XQ
                              }
                            })) : null
                          }

                          function iX(QQ) {
                            const WQ = [];
                            for (const XQ of QQ) {
                              const QQ = hX(XQ),
                                wQ = WQ.at(-1),
                                qQ = "table" === XQ.kind;
                              QQ ? "names" === (null === wQ || void 0 === wQ ? void 0 : wQ.kind) && wQ.isSongs === qQ ? wQ.names.push(...QQ) : WQ.push({
                                kind: "names",
                                names: QQ,
                                isSongs: qQ
                              }) : WQ.push({
                                kind: "block",
                                block: XQ
                              })
                            }
                            return WQ
                          }
                          const cX = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function AX(QQ, WQ) {
                            return `${cX[QQ]}-${(0,dQ.s)(WQ)}`
                          }
                          const RX = new WeakMap;

                          function EX(QQ, WQ, XQ) {
                            let wQ = RX.get(WQ);
                            if (!wQ) {
                              wQ = new Map;
                              const XQ = new Set;
                              for (const qQ of (0, dQ.t)(WQ)) {
                                const WQ = iX(HX(qQ.blocks)).map((WQ => {
                                  if ("block" === WQ.kind) return WQ;
                                  return {
                                    kind: "names",
                                    names: WQ.names.map((WQ => {
                                      var wQ, TQ;
                                      const zQ = AX(QQ, WQ.name);
                                      let sQ = zQ;
                                      for (let QQ = 2; XQ.has(sQ); QQ++) sQ = `${zQ}-${QQ}`;
                                      return XQ.add(sQ), {
                                        ...WQ,
                                        anchor: sQ,
                                        heading: null !== (wQ = null === (TQ = qQ.heading) || void 0 === TQ ? void 0 : TQ.text) && void 0 !== wQ ? wQ : ""
                                      }
                                    })),
                                    isSongs: WQ.isSongs
                                  }
                                }));
                                wQ.set(qQ.blocks, WQ)
                              }
                              RX.set(WQ, wQ)
                            }
                            const qQ = wQ.get(XQ);
                            if (!qQ) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return qQ
                          }
                          const CX = "/textures/docs/skinPreviews",
                            uX = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var LX = XQ(4523),
                            kX = XQ(4534);

                          function fX(QQ) {
                            return Object.hasOwn(LX.i, QQ) ? LX.i[QQ] : null
                          }
                          const SX = {
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
                            blendMode: kX.c.Standard
                          };

                          function tX(QQ, WQ, XQ) {
                            return WQ + (XQ - WQ) * QQ()
                          }

                          function oX(QQ, WQ, XQ) {
                            return QQ + (WQ - QQ) * XQ
                          }

                          function eX(QQ) {
                            return QQ.length > 0 && "timeFraction" in QQ[0]
                          }

                          function nX(QQ, WQ) {
                            if (0 === QQ.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!eX(QQ.colorGradients)) {
                              const XQ = QQ.colorGradients,
                                {
                                  color: wQ
                                } = XQ[Math.floor(WQ() * XQ.length) % XQ.length];
                              return [{
                                at: 0,
                                colour: [wQ[0] / 255, wQ[1] / 255, wQ[2] / 255, 1]
                              }]
                            }
                            return [...QQ.colorGradients].sort(((QQ, WQ) => QQ.timeFraction - WQ.timeFraction)).map((QQ => {
                              var XQ, wQ, qQ;
                              const TQ = QQ.minColor,
                                zQ = null !== (XQ = QQ.maxColor) && void 0 !== XQ ? XQ : TQ,
                                sQ = WQ(),
                                FQ = [oX(TQ[0], zQ[0], sQ) / 255, oX(TQ[1], zQ[1], sQ) / 255, oX(TQ[2], zQ[2], sQ) / 255, oX(null !== (wQ = TQ[3]) && void 0 !== wQ ? wQ : 1, null !== (qQ = zQ[3]) && void 0 !== qQ ? qQ : 1, sQ)];
                              return {
                                at: QQ.timeFraction,
                                colour: FQ
                              }
                            }))
                          }

                          function xX(QQ, WQ, XQ, wQ) {
                            const qQ = tX(wQ, QQ.minEmitPower, QQ.maxEmitPower),
                              TQ = WQ => tX(wQ, Math.min(QQ.dir1[WQ], QQ.dir2[WQ]), Math.max(QQ.dir1[WQ], QQ.dir2[WQ])) * qQ,
                              zQ = [...QQ.velocityGradients].sort(((QQ, WQ) => QQ.timeFraction - WQ.timeFraction)).map((QQ => ({
                                at: QQ.timeFraction,
                                factor: tX(wQ, QQ.factor, QQ.factor2)
                              })));
                            return {
                              pos: [tX(wQ, WQ[0], XQ[0]), tX(wQ, WQ[1], XQ[1]), tX(wQ, WQ[2], XQ[2])],
                              dir: [TQ(0), TQ(1), TQ(2)],
                              age: 0,
                              life: tX(wQ, QQ.minLifeTime, QQ.maxLifeTime),
                              size: tX(wQ, QQ.minSize, QQ.maxSize),
                              colours: nX(QQ, wQ),
                              velocityFactors: zQ
                            }
                          }

                          function YX(QQ, WQ, XQ, wQ) {
                            if (WQ < QQ[0].at) return XQ(Math.min(1, QQ.length - 1));
                            for (let qQ = 0; qQ < QQ.length - 1; qQ++)
                              if (WQ <= QQ[qQ + 1].at) {
                                const TQ = QQ[qQ + 1].at - QQ[qQ].at;
                                return wQ(XQ(qQ), XQ(qQ + 1), TQ > 0 ? (WQ - QQ[qQ].at) / TQ : 1)
                              } return XQ(QQ.length - 1)
                          }

                          function NX(QQ) {
                            return YX(QQ.colours, QQ.age / QQ.life, (WQ => QQ.colours[WQ].colour), ((QQ, WQ, XQ) => [oX(QQ[0], WQ[0], XQ), oX(QQ[1], WQ[1], XQ), oX(QQ[2], WQ[2], XQ), oX(QQ[3], WQ[3], XQ)]))
                          }

                          function ZX(QQ, WQ, XQ) {
                            if (QQ.age += XQ, QQ.age >= QQ.life) return !1;
                            const wQ = function(QQ) {
                              return 0 === QQ.velocityFactors.length ? 1 : YX(QQ.velocityFactors, QQ.age / QQ.life, (WQ => QQ.velocityFactors[WQ].factor), oX)
                            }(QQ) * XQ;
                            for (let TQ = 0; TQ < 3; TQ++) {
                              var qQ;
                              QQ.pos[TQ] += QQ.dir[TQ] * wQ, QQ.dir[TQ] += (null !== (qQ = WQ[TQ]) && void 0 !== qQ ? qQ : 0) * XQ
                            }
                            return !0
                          }

                          function OX(QQ) {
                            return String(Math.round(1e6 * QQ) / 1e6)
                          }

                          function KX(QQ) {
                            return `[${QQ.map(OX).join(", ")}]`
                          }

                          function mX(QQ, WQ) {
                            const XQ = `${WQ}    `;
                            return `[\n${(eX(QQ)?QQ.map((QQ=>{const WQ=[`${XQ}    timeFraction: ${OX(QQ.timeFraction)},`,`${XQ}    minColor: ${KX(QQ.minColor)},`];return QQ.maxColor&&WQ.push(`${XQ}    maxColor: ${KX(QQ.maxColor)},`),`${XQ}{\n${WQ.join("\n")}\n${XQ}},`})):QQ.map((QQ=>`
                            $ {
                              XQ
                            } {
                              color: $ {
                                KX(QQ.color)
                              }
                            }, `))).join("\n")}\n${WQ}]`
                          }
                          const MX = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            Qw = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const Ww = .6;

                          function Xw(QQ, WQ) {
                            return `${WQ?"song":"sound"}:${QQ}`
                          }
                          let ww = {
                              track: null,
                              volume: Ww
                            },
                            qw = null,
                            Tw = 0,
                            zw = 0;
                          const sw = new Set;

                          function Fw(QQ) {
                            ww = {
                              ...ww,
                              ...QQ
                            }, sw.forEach((QQ => {
                              QQ()
                            }))
                          }

                          function Pw(QQ) {
                            ww.track && Fw({
                              track: {
                                ...ww.track,
                                ...QQ
                              }
                            })
                          }

                          function gw(QQ) {
                            const [WQ, XQ] = (0, wQ.useState)((() => QQ(ww))), qQ = (0, wQ.useRef)(QQ);
                            return qQ.current = QQ, (0, wQ.useEffect)((() => {
                              const QQ = () => {
                                XQ((() => qQ.current(ww)))
                              };
                              return sw.add(QQ), QQ(), () => {
                                sw.delete(QQ)
                              }
                            }), []), WQ
                          }

                          function Jw() {
                            Tw++;
                            const QQ = qw;
                            qw = null, null === QQ || void 0 === QQ || QQ.stop()
                          }

                          function rw(QQ, WQ) {
                            let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            Jw();
                            const qQ = Tw,
                              {
                                track: TQ
                              } = ww,
                              zQ = TQ && TQ.name === QQ && TQ.isSong === WQ ? TQ.duration : 0;
                            zw = wQ, Fw({
                              track: {
                                name: QQ,
                                isSong: WQ,
                                status: "loading",
                                duration: zQ
                              }
                            }), Promise.all([XQ.e(231), XQ.e(257)]).then((() => XQ(40071))).then((XQ => {
                              let {
                                playDocsSound: TQ
                              } = XQ;
                              qQ === Tw && (qw = TQ(QQ, WQ, ww.volume, wQ, {
                                onPlay: QQ => {
                                  qQ === Tw && Pw({
                                    status: "playing",
                                    duration: QQ
                                  })
                                },
                                onEnd: QQ => {
                                  var WQ, XQ;
                                  qQ === Tw && (qw = null, QQ ? Fw({
                                    track: null
                                  }) : (zw = null !== (WQ = null === (XQ = ww.track) || void 0 === XQ ? void 0 : XQ.duration) && void 0 !== WQ ? WQ : 0, Pw({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((WQ => {
                              console.error(`Could not play docs sound ${QQ}`, WQ), qQ === Tw && Fw({
                                track: null
                              })
                            }))
                          }

                          function Iw() {
                            const {
                              track: QQ
                            } = ww;
                            if (!QQ) return;
                            if ("playing" === QQ.status && qw) return zw = qw.xV(), qw.pause(), void Pw({
                              status: "paused"
                            });
                            if ("loading" === QQ.status) return Jw(), void Pw({
                              status: "paused"
                            });
                            if (qw) return void qw.resume();
                            const WQ = QQ.duration > 0 && zw >= QQ.duration - .05;
                            rw(QQ.name, QQ.isSong, WQ ? 0 : zw)
                          }

                          function jw() {
                            var QQ;
                            return qw && "playing" === (null === (QQ = ww.track) || void 0 === QQ ? void 0 : QQ.status) ? qw.xV() : zw
                          }

                          function Bw(QQ) {
                            var WQ;
                            null === (WQ = qw) || void 0 === WQ || WQ.setVolume(QQ), Fw({
                              volume: QQ
                            })
                          }

                          function yw() {
                            Jw(), zw = 0, Fw({
                              track: null
                            })
                          }
                          const Vw = (0, wQ.createContext)(null);
                          let Dw = null;

                          function pw() {
                            const [QQ, WQ] = (0, wQ.useState)(null);
                            return (0, wQ.useEffect)((() => {
                              let QQ = !1;
                              return Dw ??= Promise.all([XQ.e(75), XQ.e(78), XQ.e(77), XQ.e(76), XQ.e(190), XQ.e(103), XQ.e(235)]).then((() => XQ(40068))), Dw.then((XQ => {
                                QQ || WQ(XQ)
                              }), (QQ => {
                                console.error("Could not load the docs gallery's textures", QQ), Dw = null
                              })), () => {
                                QQ = !0
                              }
                            }), []), QQ
                          }
                          const Gw = 24,
                            Uw = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function bw(QQ, WQ) {
                            const XQ = "skins" === QQ ? function(QQ, WQ) {
                              const XQ = uX.find((WQ => QQ.startsWith(WQ.heading)));
                              return XQ ? function(QQ, WQ) {
                                return `${QQ}-${WQ}`
                              }(XQ.prefix, WQ) : null
                            }(WQ.heading, WQ.name) : null;
                            return null === XQ ? null : `${CX}/${XQ}.webp`
                          }

                          function vw(QQ) {
                            let {
                              kind: WQ,
                              entry: XQ,
                              assets: qQ,
                              renderedUrl: zQ
                            } = QQ;
                            const {
                              name: sQ
                            } = XQ, [FQ, PQ] = (0, wQ.useState)(!1);
                            if ("icons" === WQ && fW(sQ)) return (0, jQ.jsx)(GX.d, {
                              className: "DocsTileIcon",
                              name: sQ
                            });
                            let gQ = null;
                            var JQ;
                            if ("icons" === WQ) gQ = null !== (JQ = null === qQ || void 0 === qQ ? void 0 : qQ.getIngameIconUrl(sQ)) && void 0 !== JQ ? JQ : null;
                            else if ("particles" === WQ) {
                              var rQ, IQ, BQ;
                              gQ = null !== (rQ = null === qQ || void 0 === qQ ? void 0 : qQ.getParticleTextureUrl(null !== (IQ = null === (BQ = fX(sQ)) || void 0 === BQ ? void 0 : BQ.texture) && void 0 !== IQ ? IQ : sQ)) && void 0 !== rQ ? rQ : null
                            } else "skins" === WQ && (gQ = null !== zQ && void 0 !== zQ ? zQ : Uw.test(sQ) ? `/textures/charSkins/previews/${sQ}_preview.png` : null);
                            return !gQ || FQ ? (0, jQ.jsx)(yQ, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === WQ ? "person" : "image"
                            }) : (0, jQ.jsx)("img", {
                              className: TQ()("DocsTileImage", {
                                Pixelated: "skins" !== WQ
                              }),
                              src: gQ,
                              srcSet: gQ === zQ ? `${gQ} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${gQ}`), PQ(!0)
                              }
                            })
                          }

                          function dw(QQ) {
                            let {
                              entry: WQ,
                              isSong: XQ
                            } = QQ;
                            const wQ = gw((QQ => {
                                let {
                                  track: wQ
                                } = QQ;
                                return (null === wQ || void 0 === wQ ? void 0 : wQ.name) === WQ.name && wQ.isSong === XQ ? wQ.status : null
                              })),
                              qQ = null !== wQ && "paused" !== wQ;
                            return (0, jQ.jsxs)("button", {
                              type: "button",
                              id: WQ.anchor,
                              className: TQ()("DocsSoundTile", {
                                Playing: qQ
                              }),
                              "data-docs-track": Xw(WQ.name, XQ),
                              "aria-label": qQ ? `Pause ${WQ.name}` : `Play ${WQ.name}`,
                              onClick: () => {
                                null !== wQ ? Iw() : rw(WQ.name, XQ)
                              },
                              children: [(0, jQ.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, jQ.jsx)(yQ, {
                                  name: qQ ? "pause" : "play"
                                })
                              }), (0, jQ.jsx)("code", {
                                className: "DocsSoundName",
                                children: WQ.name
                              }), WQ.caption && (0, jQ.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: WQ.caption
                              })]
                            })
                          }

                          function Hw(QQ) {
                            let {
                              kind: WQ,
                              names: XQ,
                              isSongs: qQ
                            } = QQ;
                            const zQ = pw(),
                              [sQ, FQ] = DQ(),
                              PQ = !1 === (null === sQ || void 0 === sQ ? void 0 : sQ.failed) ? sQ.text : null,
                              gQ = (0, wQ.useContext)(Vw),
                              [JQ, rQ] = (0, wQ.useState)(""),
                              IQ = JQ.trim().toLowerCase(),
                              BQ = IQ ? XQ.filter((QQ => QQ.name.toLowerCase().includes(IQ))) : XQ;
                            return (0, jQ.jsxs)("div", {
                              className: "DocsGallery",
                              children: [XQ.length > Gw && (0, jQ.jsx)(pX, {
                                className: "DocsGalleryFilter",
                                value: JQ,
                                placeholder: `Filter ${XQ.length} names\u2026`,
                                label: "Filter names",
                                onChange: rQ,
                                count: IQ ? {
                                  visible: BQ.length,
                                  total: XQ.length
                                } : null
                              }), (0, jQ.jsx)("div", {
                                className: TQ()("DocsGalleryGrid", `Kind-${WQ}`, {
                                  Songs: qQ
                                }),
                                children: BQ.map((QQ => {
                                  if ("sounds" === WQ) return (0, jQ.jsx)(dw, {
                                    entry: QQ,
                                    isSong: qQ
                                  }, QQ.anchor);
                                  if (gQ && "particles" === WQ && fX(QQ.name)) return (0, jQ.jsxs)("button", {
                                    type: "button",
                                    id: QQ.anchor,
                                    className: TQ()("DocsTile Previewable", {
                                      Copied: PQ === QQ.name
                                    }),
                                    title: `Play "${QQ.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      gQ(QQ.name), FQ(QQ.name)
                                    },
                                    children: [(0, jQ.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, jQ.jsx)(vw, {
                                        kind: WQ,
                                        entry: QQ,
                                        assets: zQ,
                                        renderedUrl: null
                                      }), (0, jQ.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, jQ.jsx)(yQ, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, jQ.jsx)("span", {
                                      className: "DocsTileName",
                                      children: PQ === QQ.name ? "Copied!" : QQ.name
                                    })]
                                  }, QQ.anchor);
                                  const XQ = bw(WQ, QQ);
                                  return (0, jQ.jsxs)("button", {
                                    type: "button",
                                    id: QQ.anchor,
                                    className: TQ()("DocsTile", {
                                      Copied: PQ === QQ.name
                                    }),
                                    title: `Copy "${QQ.name}"`,
                                    onClick: () => {
                                      FQ(QQ.name)
                                    },
                                    children: [(0, jQ.jsx)("span", {
                                      className: TQ()("DocsTilePreview", {
                                        Rendered: null !== XQ
                                      }),
                                      children: (0, jQ.jsx)(vw, {
                                        kind: WQ,
                                        entry: QQ,
                                        assets: zQ,
                                        renderedUrl: XQ
                                      })
                                    }), (0, jQ.jsx)("span", {
                                      className: "DocsTileName",
                                      children: PQ === QQ.name ? "Copied!" : QQ.name
                                    })]
                                  }, QQ.anchor)
                                }))
                              })]
                            })
                          }

                          function aw(QQ) {
                            let {
                              kind: WQ,
                              content: XQ,
                              blocks: wQ
                            } = QQ;
                            return (0, jQ.jsx)(jQ.Fragment, {
                              children: EX(WQ, XQ, wQ).map(((QQ, XQ) => "block" === QQ.kind ? (0, jQ.jsx)(rX, {
                                block: QQ.block
                              }, XQ) : (0, jQ.jsx)(Hw, {
                                kind: WQ,
                                names: QQ.names,
                                isSongs: QQ.isSongs
                              }, XQ)))
                            })
                          }
                          const lw = [{
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

                          function hw(QQ) {
                            let {
                              cards: WQ = lw,
                              label: XQ = "Start here"
                            } = QQ;
                            const qQ = (0, wQ.useContext)(IW);
                            return (0, jQ.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": XQ,
                              children: WQ.map((QQ => {
                                let {
                                  pageId: WQ,
                                  countNoun: XQ
                                } = QQ;
                                const wQ = kQ(WQ);
                                return (0, jQ.jsxs)(zQ.d, {
                                  to: nQ(qQ, wQ),
                                  className: "DocsLandingCard",
                                  children: [(0, jQ.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, jQ.jsx)(yQ, {
                                      name: wQ.icon
                                    })
                                  }), (0, jQ.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: wQ.title
                                  }), (0, jQ.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: wQ.summary
                                  }), XQ && (0, jQ.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [SQ(wQ).sections.length, " ", XQ]
                                  })]
                                }, WQ)
                              }))
                            })
                          }
                          const iw = 240;

                          function Aw(QQ) {
                            let {
                              faces: WQ
                            } = QQ;
                            return (0, jQ.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, jQ.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${WQ.top}")`
                                }
                              }), (0, jQ.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${WQ.left}")`
                                }
                              }), (0, jQ.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${WQ.right}")`
                                }
                              })]
                            })
                          }

                          function Rw(QQ) {
                            let {
                              src: WQ
                            } = QQ;
                            const [XQ, qQ] = (0, wQ.useState)(!1);
                            return XQ ? null : (0, jQ.jsx)("img", {
                              src: WQ,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${WQ}`), qQ(!0)
                              }
                            })
                          }

                          function Ew(QQ) {
                            let {
                              kind: WQ
                            } = QQ;
                            const XQ = DX(WQ),
                              qQ = pw(),
                              zQ = (0, sQ.w)(),
                              [FQ, PQ] = (0, wQ.useState)(""),
                              [gQ, JQ] = (0, wQ.useState)(null),
                              [rQ, IQ] = (0, wQ.useState)(iw),
                              [BQ, VQ] = (0, wQ.useState)(null),
                              DQ = (0, wQ.useRef)(null),
                              GQ = FQ.trim().toLowerCase();
                            (0, wQ.useEffect)((() => {
                              const QQ = (0, dQ.p)(zQ.hash),
                                wQ = XQ.entries.find((XQ => AX(WQ, XQ.name) === QQ));
                              if (wQ) DQ.current = wQ.name, PQ(wQ.name), JQ(null), VQ(wQ.name);
                              else if (null !== DQ.current) {
                                const QQ = DQ.current;
                                DQ.current = null, PQ((WQ => WQ === QQ ? "" : WQ)), VQ(null)
                              }
                            }), [XQ, WQ, zQ.hash, zQ.key]), (0, wQ.useEffect)((() => {
                              var QQ;
                              null !== BQ && (null === (QQ = document.getElementById(AX(WQ, BQ))) || void 0 === QQ || QQ.scrollIntoView({
                                block: "center"
                              }))
                            }), [WQ, BQ]);
                            const UQ = XQ.entries.filter((QQ => (!GQ || QQ.name.toLowerCase().includes(GQ)) && (!gQ || QQ.variants.includes(gQ))));
                            return (0, jQ.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [XQ.notes.length > 0 && (0, jQ.jsx)("div", {
                                className: "DocsProse",
                                children: XQ.notes.map((QQ => (0, jQ.jsx)("p", {
                                  children: QQ
                                }, QQ)))
                              }), XQ.legend.length > 0 && (0, jQ.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, jQ.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, jQ.jsx)("thead", {
                                    children: (0, jQ.jsxs)("tr", {
                                      children: [(0, jQ.jsx)("th", {
                                        children: "Code"
                                      }), (0, jQ.jsx)("th", {
                                        children: "Variant"
                                      }), (0, jQ.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, jQ.jsx)("tbody", {
                                    children: XQ.legend.map((QQ => (0, jQ.jsxs)("tr", {
                                      children: [(0, jQ.jsx)("td", {
                                        children: (0, jQ.jsx)("button", {
                                          type: "button",
                                          className: TQ()("DocsVariantChip", {
                                            Active: gQ === QQ.code
                                          }),
                                          "aria-pressed": gQ === QQ.code,
                                          title: `Show only ${WQ} with ${QQ.meaning} variants`,
                                          onClick: () => {
                                            JQ(gQ === QQ.code ? null : QQ.code)
                                          },
                                          children: QQ.code
                                        })
                                      }), (0, jQ.jsx)("td", {
                                        children: QQ.meaning
                                      }), (0, jQ.jsx)("td", {
                                        children: (0, jQ.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: QQ.usage
                                        })
                                      })]
                                    }, QQ.code)))
                                  })]
                                })
                              }), XQ.examples.length > 0 && (0, jQ.jsx)(vQ, {
                                lang: "text",
                                code: XQ.examples.join("\n")
                              }), (0, jQ.jsx)(pX, {
                                className: "DocsFilterBar",
                                value: FQ,
                                placeholder: `Search ${XQ.entries.length} ${WQ}\u2026`,
                                label: `Search ${WQ}`,
                                onChange: QQ => {
                                  PQ(QQ), IQ(iw)
                                },
                                count: GQ || gQ ? {
                                  visible: UQ.length,
                                  total: XQ.entries.length
                                } : null,
                                children: gQ && (0, jQ.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    JQ(null)
                                  },
                                  children: [gQ, " ", (0, jQ.jsx)(yQ, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, jQ.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: UQ.slice(0, rQ).map((QQ => {
                                  const XQ = "blocks" === WQ ? null === qQ || void 0 === qQ ? void 0 : qQ.getBlockFaces(QQ.name) : null,
                                    wQ = qQ && !XQ ? qQ.getItemTextureUrl(QQ.name) : null;
                                  return (0, jQ.jsxs)("div", {
                                    id: AX(WQ, QQ.name),
                                    className: TQ()("DocsCatalogueTile", {
                                      Linked: QQ.name === BQ
                                    }),
                                    children: [(0, jQ.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [XQ && (0, jQ.jsx)(Aw, {
                                        faces: XQ
                                      }), wQ && (0, jQ.jsx)(Rw, {
                                        src: wQ
                                      })]
                                    }), (0, jQ.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: QQ.name
                                    }), QQ.variants.length > 0 && (0, jQ.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: QQ.variants.map((QQ => (0, jQ.jsx)("span", {
                                        children: QQ
                                      }, QQ)))
                                    }), (0, jQ.jsx)(pQ, {
                                      text: QQ.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, QQ.name)
                                }))
                              }), UQ.length > rQ && (0, jQ.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  IQ(UQ.length)
                                },
                                children: ["Show all ", UQ.length]
                              }), 0 === UQ.length && (0, jQ.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", WQ, " match."]
                              })]
                            })
                          }
                          var Cw = XQ(5161),
                            uw = XQ(1651);
                          const Lw = .95 * Cw.b;

                          function kw(QQ) {
                            return /^\s*```/.test(QQ)
                          }

                          function fw(QQ, WQ) {
                            const XQ = [
                              []
                            ];
                            let wQ = !1;
                            for (const qQ of QQ.split("\n")) !wQ && WQ(qQ) && XQ.at(-1).length > 0 && XQ.push([]), kw(qQ) && (wQ = !wQ), XQ.at(-1).push(qQ);
                            return XQ.map((QQ => QQ.join("\n").trim())).filter(Boolean)
                          }

                          function Sw(QQ, WQ) {
                            const XQ = `${"#".repeat(WQ)} `,
                              wQ = [];
                            let qQ = !1;
                            for (const TQ of QQ.split("\n")) kw(TQ) ? qQ = !qQ : !qQ && TQ.startsWith(XQ) && wQ.push(TQ.slice(XQ.length).trim());
                            return wQ
                          }

                          function tw(QQ) {
                            return QQ.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class ow {
                            constructor(QQ, WQ) {
                              this.origin = WQ, this.pages = void 0, this.partPaths = new Map;
                              const XQ = QQ.map((QQ => {
                                const WQ = WQ => this.resolveLinks(QQ, WQ).length,
                                  XQ = function(QQ, WQ) {
                                    const XQ = QQ.map((QQ => WQ(QQ.markdown) + 2)),
                                      wQ = XQ.reduce(((QQ, WQ) => QQ + WQ), 0),
                                      qQ = wQ / Math.ceil(wQ / Lw),
                                      TQ = [];
                                    let zQ = 0;
                                    return QQ.forEach(((QQ, WQ) => {
                                      const wQ = XQ[WQ];
                                      (0 === TQ.length || zQ + wQ > Lw || zQ + wQ / 2 > qQ) && (TQ.push([]), zQ = 0), TQ.at(-1).push(QQ), zQ += wQ
                                    })), TQ
                                  }(function(QQ, WQ) {
                                    return fw(QQ, (QQ => QQ.startsWith("## "))).flatMap((QQ => {
                                      var XQ;
                                      const wQ = null !== (XQ = Sw(QQ, 2)[0]) && void 0 !== XQ ? XQ : "";
                                      if (WQ(QQ) <= Lw) return [{
                                        markdown: QQ,
                                        section: wQ
                                      }];
                                      let qQ = !1,
                                        TQ = "";
                                      return fw(QQ, (QQ => {
                                        const WQ = qQ && "" !== QQ.trim();
                                        return qQ = "" === QQ.trim(), WQ
                                      })).map((QQ => {
                                        var WQ;
                                        const XQ = Sw(QQ, 3),
                                          qQ = QQ.startsWith("### ") ? XQ[0] : TQ;
                                        return TQ = null !== (WQ = XQ.at(-1)) && void 0 !== WQ ? WQ : TQ, {
                                          markdown: QQ,
                                          section: wQ || qQ
                                        }
                                      }))
                                    }))
                                  }(tw(QQ), WQ), WQ);
                                return {
                                  page: QQ,
                                  groups: XQ.length > 1 ? XQ : []
                                }
                              }));
                              for (const {
                                  page: wQ,
                                  groups: qQ
                                }
                                of XQ) qQ.forEach(((QQ, WQ) => {
                                const XQ = (0, Cw.x)(wQ.slug, WQ);
                                for (const qQ of QQ.flatMap((QQ => [...Sw(QQ.markdown, 2), ...Sw(QQ.markdown, 3)]))) {
                                  const QQ = `${wQ.id}#${(0,dQ.s)(qQ)}`;
                                  this.partPaths.has(QQ) || this.partPaths.set(QQ, XQ)
                                }
                              }));
                              this.pages = XQ.map((QQ => {
                                let {
                                  page: WQ,
                                  groups: XQ
                                } = QQ;
                                return {
                                  page: WQ,
                                  path: (0, Cw.t)(WQ.slug),
                                  markdown: `# ${WQ.title}\n\n${this.resolveLinks(WQ,tw(WQ))}\n`,
                                  parts: XQ.map(((QQ, wQ) => this.renderPart(WQ, QQ, wQ, XQ.length)))
                                }
                              }))
                            }
                            url(QQ) {
                              return `${this.origin}${QQ}`
                            }
                            getPage(QQ) {
                              return this.pages.find((WQ => WQ.page.id === QQ))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((QQ => (QQ.parts.length > 0 ? QQ.parts : [{
                                path: QQ.path,
                                label: "",
                                markdown: QQ.markdown
                              }]).filter((QQ => QQ.markdown.length > Cw.b))))
                            }
                            markdownUrl(QQ, WQ) {
                              const XQ = WQ && this.partPaths.get(`${QQ.id}#${WQ}`) || (0, Cw.t)(QQ.slug);
                              return this.url(WQ ? `${XQ}#${WQ}` : XQ)
                            }
                            resolveLinks(QQ, WQ) {
                              return WQ.replace(/\]\((#[^)]+)\)/g, ((WQ, XQ) => {
                                var wQ;
                                const qQ = null !== (wQ = oQ(XQ)) && void 0 !== wQ ? wQ : this.samePageTarget(QQ, XQ);
                                return qQ ? `](${this.markdownUrl(qQ.page,qQ.anchor)})` : WQ
                              }))
                            }
                            samePageTarget(QQ, WQ) {
                              const XQ = (0, dQ.s)(WQ.slice(1));
                              return tQ(QQ, XQ) ? {
                                page: QQ,
                                anchor: XQ
                              } : null
                            }
                            renderPart(QQ, WQ, XQ, wQ) {
                              const qQ = function(QQ) {
                                  const WQ = QQ.map((QQ => QQ.section)).filter(Boolean);
                                  if (0 === WQ.length) return "";
                                  const XQ = WQ[0],
                                    wQ = WQ.at(-1);
                                  return XQ === wQ ? XQ : `${XQ} to ${wQ}`
                                }(WQ),
                                TQ = WQ.map((QQ => QQ.markdown)).join("\n\n"),
                                zQ = qQ ? `It covers ${qQ}. ` : "",
                                sQ = `Part ${XQ+1} of ${wQ} of [${QQ.title}](${this.url((0,Cw.t)(QQ.slug))}). ${zQ}[llms.txt](${this.url(Cw.i)}) lists every part.`;
                              return {
                                path: (0, Cw.x)(QQ.slug, XQ),
                                label: qQ,
                                markdown: `# ${QQ.title}, part ${XQ+1} of ${wQ}\n\n${sQ}\n\n${this.resolveLinks(QQ,TQ)}\n`
                              }
                            }
                            llmsTxt(QQ) {
                              const WQ = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${ew(Cw.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const XQ of LQ) {
                                WQ.push("", `## ${XQ.title}`, "");
                                for (const QQ of XQ.pageIds) {
                                  const XQ = this.getPage(QQ),
                                    {
                                      page: wQ,
                                      parts: qQ
                                    } = XQ,
                                    TQ = `About ${ew(XQ.markdown.length)} tokens${qQ.length>0?`, in ${qQ.length} parts:`:"."}`;
                                  WQ.push(`- [${wQ.title}](${this.url(XQ.path)}): ${wQ.summary} ${TQ}`), qQ.forEach(((QQ, XQ) => {
                                    WQ.push(`  - [Part ${XQ+1}${QQ.label?`: ${QQ.label}`:""}](${this.url(QQ.path)})`)
                                  }))
                                }
                              }
                              return WQ.push("", "## Optional", "", `- [Every page in one file](${this.url(Cw.f)}): About ${ew(QQ.length)} tokens, for a model with a large context window.`, ""), WQ.join("\n")
                            }
                            llmsFullTxt() {
                              return LQ.flatMap((QQ => QQ.pageIds.map((QQ => this.getPage(QQ).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const QQ = this.llmsFullTxt(),
                                WQ = this.llmsTxt(QQ),
                                XQ = new Map([
                                  [Cw.o, WQ],
                                  [Cw.i, WQ],
                                  [Cw.f, QQ]
                                ]);
                              for (const wQ of this.pages) {
                                XQ.set(wQ.path, wQ.markdown);
                                for (const QQ of wQ.parts) XQ.set(QQ.path, QQ.markdown)
                              }
                              return XQ
                            }
                          }

                          function ew(QQ) {
                            return `${Math.max(1,Math.round(QQ/4e3))}K`
                          }
                          let nw = null;

                          function xw() {
                            return nw ??= new ow(uQ, uw.d), nw
                          }
                          var Yw = XQ(5169);
                          const Nw = [Yw.h, Yw.o];

                          function Zw(QQ) {
                            return xw().getPage(QQ.id).parts.length > 0 ? `Read ${Cw.m}, then the parts of the Bloxd Code API's ${QQ.title} page it lists, so I can ask questions about it.` : `Read ${uw.d}${(0,Cw.t)(QQ.slug)} so I can ask questions about it. ${Yw.n}`
                          }

                          function Ow(QQ) {
                            let {
                              page: WQ
                            } = QQ;
                            const [XQ, wQ] = DQ();
                            return (0, jQ.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, jQ.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  wQ(xw().getPage(WQ.id).markdown)
                                },
                                children: [(0, jQ.jsx)(yQ, {
                                  name: !1 === (null === XQ || void 0 === XQ ? void 0 : XQ.failed) ? "check" : "copy"
                                }), (0, jQ.jsx)("span", {
                                  children: XQ ? XQ.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), Nw.map((QQ => (0, jQ.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, Yw.e)(QQ, Zw(WQ)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, jQ.jsx)(yQ, {
                                  name: "external-link"
                                }), (0, jQ.jsxs)("span", {
                                  children: ["Open in ", QQ.name]
                                })]
                              }, QQ.name)))]
                            })
                          }

                          function Kw(QQ) {
                            return `#${[0,1,2].map((WQ=>Math.round(Math.min(255,Math.max(0,QQ[WQ]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function mw(QQ) {
                            return [parseInt(QQ.slice(1, 3), 16), parseInt(QQ.slice(3, 5), 16), parseInt(QQ.slice(5, 7), 16)]
                          }

                          function Mw(QQ) {
                            let {
                              label: WQ,
                              min: XQ,
                              max: wQ,
                              step: qQ,
                              low: TQ,
                              high: zQ,
                              onChange: sQ
                            } = QQ;
                            return (0, jQ.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, jQ.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, jQ.jsx)("span", {
                                  children: WQ
                                }), (0, jQ.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: TQ === zQ ? TQ : `${TQ}\u2013${zQ}`
                                })]
                              }), (0, jQ.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, jQ.jsx)("input", {
                                  type: "range",
                                  min: XQ,
                                  max: wQ,
                                  step: qQ,
                                  value: Math.min(wQ, TQ),
                                  "aria-label": `Minimum ${WQ.toLowerCase()}`,
                                  onChange: QQ => {
                                    const WQ = Number(QQ.target.value);
                                    sQ(WQ, Math.max(WQ, zQ))
                                  }
                                }), (0, jQ.jsx)("input", {
                                  type: "range",
                                  min: XQ,
                                  max: wQ,
                                  step: qQ,
                                  value: Math.min(wQ, zQ),
                                  "aria-label": `Maximum ${WQ.toLowerCase()}`,
                                  onChange: QQ => {
                                    const WQ = Number(QQ.target.value);
                                    sQ(Math.min(WQ, TQ), WQ)
                                  }
                                })]
                              })]
                            })
                          }

                          function Qq(QQ) {
                            let {
                              label: WQ,
                              min: XQ,
                              max: wQ,
                              step: qQ,
                              value: TQ,
                              onChange: zQ,
                              format: sQ = String
                            } = QQ;
                            return (0, jQ.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, jQ.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, jQ.jsx)("span", {
                                  children: WQ
                                }), (0, jQ.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: sQ(TQ)
                                })]
                              }), (0, jQ.jsx)("input", {
                                type: "range",
                                min: XQ,
                                max: wQ,
                                step: qQ,
                                value: Math.min(wQ, Math.max(XQ, TQ)),
                                "aria-label": WQ,
                                onChange: QQ => {
                                  zQ(Number(QQ.target.value))
                                }
                              })]
                            })
                          }

                          function Wq(QQ) {
                            let {
                              opts: WQ,
                              onChange: XQ
                            } = QQ;
                            const wQ = WQ.colorGradients;
                            if (!eX(wQ)) return (0, jQ.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, jQ.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, jQ.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, jQ.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: wQ.map(((QQ, WQ) => (0, jQ.jsx)("input", {
                                  type: "color",
                                  value: Kw(QQ.color),
                                  "aria-label": `Colour ${WQ+1}`,
                                  onChange: QQ => {
                                    const qQ = [...wQ];
                                    qQ[WQ] = {
                                      color: mw(QQ.target.value)
                                    }, XQ(qQ)
                                  }
                                }, WQ)))
                              })]
                            });
                            const qQ = (QQ, WQ) => {
                              const qQ = [...wQ];
                              qQ[QQ] = WQ, XQ(qQ)
                            };
                            return (0, jQ.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, jQ.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, jQ.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, jQ.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), wQ.map(((QQ, WQ) => {
                                var XQ;
                                const wQ = null !== (XQ = QQ.maxColor) && void 0 !== XQ ? XQ : QQ.minColor;
                                return (0, jQ.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, jQ.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * QQ.timeFraction), "%"]
                                  }), (0, jQ.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${Kw(QQ.minColor)}, ${Kw(wQ)})`
                                    }
                                  }), (0, jQ.jsx)("input", {
                                    type: "color",
                                    value: Kw(QQ.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*QQ.timeFraction)}%`,
                                    onChange: XQ => {
                                      qQ(WQ, {
                                        ...QQ,
                                        minColor: [...mw(XQ.target.value), QQ.minColor[3]]
                                      })
                                    }
                                  }), (0, jQ.jsx)("input", {
                                    type: "color",
                                    value: Kw(wQ),
                                    "aria-label": `Maximum colour at ${Math.round(100*QQ.timeFraction)}%`,
                                    onChange: XQ => {
                                      qQ(WQ, {
                                        ...QQ,
                                        maxColor: [...mw(XQ.target.value), wQ[3]]
                                      })
                                    }
                                  })]
                                }, WQ)
                              }))]
                            })
                          }
                          const Xq = [-.5, -.5, -.5],
                            wq = [.5, .5, .5],
                            qq = [0, 1, 2, 3, 4, 5, 6, 7].map((QQ => [1 & QQ ? wq[0] : Xq[0], 2 & QQ ? wq[1] : Xq[1], 4 & QQ ? wq[2] : Xq[2]]));class Tq {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(QQ, WQ, XQ, wQ) {
                              const qQ = Math.round(31 * WQ),
                                TQ = Math.round(31 * XQ),
                                zQ = Math.round(31 * wQ),
                                sQ = `${qQ}|${TQ}|${zQ}`;
                              let FQ = this.tints.get(QQ);
                              (!FQ || FQ.size > 2e3) && (FQ = new Map, this.tints.set(QQ, FQ));
                              let PQ = FQ.get(sQ);
                              if (PQ) return PQ;
                              PQ = document.createElement("canvas"), PQ.width = QQ.naturalWidth || 16, PQ.height = QQ.naturalHeight || 16;
                              const gQ = PQ.getContext("2d");
                              return gQ ? (gQ.imageSmoothingEnabled = !1, gQ.drawImage(QQ, 0, 0, PQ.width, PQ.height), gQ.globalCompositeOperation = "multiply", gQ.fillStyle = `rgb(${qQ/31*255}, ${TQ/31*255}, ${zQ/31*255})`, gQ.fillRect(0, 0, PQ.width, PQ.height), gQ.globalCompositeOperation = "destination-in", gQ.drawImage(QQ, 0, 0, PQ.width, PQ.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), FQ.set(sQ, PQ), PQ
                            }
                          }

                          function zq(QQ) {
                            let {
                              opts: WQ,
                              textureUrl: XQ,
                              burst: qQ,
                              paused: TQ
                            } = QQ;
                            const zQ = (0, wQ.useRef)(null),
                              sQ = (0, wQ.useRef)(WQ);
                            sQ.current = WQ;
                            const FQ = (0, wQ.useRef)(TQ);
                            FQ.current = TQ;
                            const PQ = (0, wQ.useRef)(null),
                              gQ = (0, wQ.useRef)(null),
                              JQ = (0, wQ.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(QQ) {
                                let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const XQ = [-.5, -.5, -.5],
                                  wQ = [.5, .5, .5];
                                let qQ = .5;
                                for (let TQ = 0; TQ < 40; TQ++) {
                                  const TQ = xX(QQ, XQ, wQ, WQ),
                                    zQ = Math.max(TQ.life / 30, .001);
                                  for (; ZX(TQ, QQ.gravity, zQ);) qQ = Math.max(qQ, Math.hypot(TQ.pos[0], TQ.pos[1], TQ.pos[2]) + TQ.size / 2)
                                }
                                return qQ
                              }(WQ)))), [WQ]),
                              rQ = (0, wQ.useRef)(JQ);
                            return rQ.current = JQ, (0, wQ.useEffect)((() => {
                              if (PQ.current = null, !XQ) return;
                              const QQ = new Image;
                              let WQ = !1;
                              return QQ.onload = () => {
                                WQ || (PQ.current = QQ)
                              }, QQ.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${XQ}`)
                              }, QQ.src = XQ, () => {
                                WQ = !0
                              }
                            }), [XQ]), (0, wQ.useEffect)((() => {
                              var QQ;
                              null === (QQ = gQ.current) || void 0 === QQ || QQ.call(gQ)
                            }), [WQ, qQ]), (0, wQ.useEffect)((() => {
                              const QQ = zQ.current,
                                WQ = null === QQ || void 0 === QQ ? void 0 : QQ.getContext("2d");
                              if (!QQ || !WQ) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const XQ = new Tq;
                              let wQ = [],
                                qQ = 0,
                                TQ = -.7,
                                JQ = rQ.current,
                                IQ = performance.now(),
                                jQ = 0,
                                BQ = !0,
                                yQ = null;
                              const VQ = () => {
                                const QQ = sQ.current,
                                  WQ = Math.min(400, Math.max(0, Math.ceil(QQ.manualEmitCount)));
                                wQ = [];
                                for (let XQ = 0; XQ < WQ; XQ++) wQ.push(xX(QQ, Xq, wq, Math.random));
                                qQ = 0
                              };
                              gQ.current = VQ, VQ();
                              const DQ = zQ => {
                                jQ = requestAnimationFrame(DQ);
                                const gQ = Math.min(.05, (zQ - IQ) / 1e3);
                                if (IQ = zQ, !BQ) return;
                                const pQ = window.devicePixelRatio || 1,
                                  GQ = Math.round(QQ.clientWidth * pQ),
                                  UQ = Math.round(QQ.clientHeight * pQ);
                                if (0 === GQ || 0 === UQ) return;
                                QQ.width === GQ && QQ.height === UQ || (QQ.width = GQ, QQ.height = UQ);
                                const bQ = sQ.current;
                                null === yQ && (TQ += .18 * gQ), JQ += (rQ.current - JQ) * Math.min(1, 4 * gQ);
                                const vQ = .6 * gQ;
                                wQ = wQ.filter((QQ => ZX(QQ, bQ.gravity, vQ))), 0 !== wQ.length || FQ.current || (qQ += gQ, qQ > .6 && VQ());
                                const dQ = function(QQ, WQ, XQ, wQ) {
                                  const qQ = 3.2 * wQ,
                                    TQ = .44 * Math.min(QQ, WQ) * qQ / wQ,
                                    zQ = Math.cos(XQ),
                                    sQ = Math.sin(XQ),
                                    FQ = Math.cos(.42),
                                    PQ = Math.sin(.42);
                                  return (XQ, wQ, gQ) => {
                                    const JQ = XQ * sQ + gQ * zQ,
                                      rQ = qQ - (wQ * PQ + JQ * FQ);
                                    if (rQ < .05) return null;
                                    const IQ = TQ / rQ;
                                    return {
                                      x: QQ / 2 + (XQ * zQ - gQ * sQ) * IQ,
                                      y: WQ / 2 - (wQ * FQ - JQ * PQ) * IQ,
                                      scale: IQ,
                                      depth: rQ
                                    }
                                  }
                                }(GQ, UQ, TQ, JQ);
                                ! function(QQ, WQ, XQ, wQ, qQ) {
                                  const TQ = QQ.createLinearGradient(0, 0, 0, XQ);
                                  TQ.addColorStop(0, "#23262d"), TQ.addColorStop(1, "#16181c"), QQ.globalCompositeOperation = "source-over", QQ.globalAlpha = 1, QQ.fillStyle = TQ, QQ.fillRect(0, 0, WQ, XQ);
                                  const zQ = (WQ, XQ) => {
                                      const qQ = wQ(WQ[0], WQ[1], WQ[2]),
                                        TQ = wQ(XQ[0], XQ[1], XQ[2]);
                                      qQ && TQ && (QQ.beginPath(), QQ.moveTo(qQ.x, qQ.y), QQ.lineTo(TQ.x, TQ.y), QQ.stroke())
                                    },
                                    sQ = Math.ceil(qQ) + 1,
                                    FQ = Xq[1];
                                  QQ.lineWidth = 1, QQ.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let PQ = -sQ; PQ <= sQ; PQ++) zQ([PQ + .5, FQ, .5 - sQ], [PQ + .5, FQ, sQ + .5]), zQ([.5 - sQ, FQ, PQ + .5], [sQ + .5, FQ, PQ + .5]);
                                  QQ.strokeStyle = "rgba(255, 255, 255, 0.28)", QQ.setLineDash([4, 4]);
                                  for (const PQ of qq)
                                    for (const QQ of qq) {
                                      const WQ = [0, 1, 2].filter((WQ => PQ[WQ] !== QQ[WQ]));
                                      1 === WQ.length && PQ[WQ[0]] < QQ[WQ[0]] && zQ(PQ, QQ)
                                    }
                                  QQ.setLineDash([])
                                }(WQ, GQ, UQ, dQ, JQ);
                                const HQ = PQ.current,
                                  aQ = wQ.map((QQ => ({
                                    particle: QQ,
                                    at: dQ(QQ.pos[0], QQ.pos[1], QQ.pos[2])
                                  }))).filter((QQ => null !== QQ.at)).sort(((QQ, WQ) => WQ.at.depth - QQ.at.depth));
                                WQ.imageSmoothingEnabled = !1;
                                for (const QQ of function(QQ) {
                                    switch (QQ) {
                                      case kX.c.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case kX.c.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case kX.c.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case kX.c.MultiplyAdd:
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
                                  }(bQ.blendMode)) {
                                  WQ.globalCompositeOperation = QQ.operation;
                                  for (const {
                                      particle: wQ,
                                      at: qQ
                                    }
                                    of aQ) {
                                    const [TQ, zQ, sQ, FQ] = NX(wQ), PQ = Math.max(1, wQ.size * qQ.scale);
                                    WQ.globalAlpha = QQ.usesAlpha ? Math.min(1, Math.max(0, FQ)) : 1, HQ ? WQ.drawImage(XQ.get(HQ, TQ, zQ, sQ), qQ.x - PQ / 2, qQ.y - PQ / 2, PQ, PQ) : (WQ.fillStyle = `rgb(${255*TQ}, ${255*zQ}, ${255*sQ})`, WQ.fillRect(qQ.x - PQ / 2, qQ.y - PQ / 2, PQ, PQ))
                                  }
                                }
                                WQ.globalCompositeOperation = "source-over", WQ.globalAlpha = 1
                              };
                              jQ = requestAnimationFrame(DQ);
                              const pQ = new IntersectionObserver((QQ => {
                                let [WQ] = QQ;
                                BQ = WQ.isIntersecting
                              }));
                              pQ.observe(QQ);
                              const GQ = WQ => {
                                  yQ = WQ.clientX, QQ.setPointerCapture(WQ.pointerId)
                                },
                                UQ = QQ => {
                                  null !== yQ && (TQ += .01 * (QQ.clientX - yQ), yQ = QQ.clientX)
                                },
                                bQ = () => {
                                  yQ = null
                                };
                              return QQ.addEventListener("pointerdown", GQ), QQ.addEventListener("pointermove", UQ), QQ.addEventListener("pointerup", bQ), QQ.addEventListener("pointercancel", bQ), () => {
                                cancelAnimationFrame(jQ), pQ.disconnect(), gQ.current = null, QQ.removeEventListener("pointerdown", GQ), QQ.removeEventListener("pointermove", UQ), QQ.removeEventListener("pointerup", bQ), QQ.removeEventListener("pointercancel", bQ)
                              }
                            }), []), (0, jQ.jsx)("canvas", {
                              ref: zQ,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${WQ.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const sq = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            Fq = [{
                              mode: kX.c.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: kX.c.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: kX.c.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: kX.c.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: kX.c.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            Pq = (0, wQ.forwardRef)((function(QQ, WQ) {
                              var XQ, qQ;
                              let {
                                textures: zQ
                              } = QQ;
                              const sQ = pw(),
                                FQ = (0, wQ.useRef)(null),
                                [PQ, gQ] = (0, wQ.useState)(SX),
                                [JQ, rQ] = (0, wQ.useState)("example"),
                                [IQ, BQ] = (0, wQ.useState)(0),
                                [VQ, DQ] = (0, wQ.useState)(!1),
                                GQ = QQ => {
                                  const WQ = "example" === QQ ? SX : fX(QQ);
                                  WQ && (gQ(WQ), rQ(QQ))
                                };
                              (0, wQ.useImperativeHandle)(WQ, (() => ({
                                preview: QQ => {
                                  var WQ;
                                  GQ(QQ), null === (WQ = FQ.current) || void 0 === WQ || WQ.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const UQ = QQ => {
                                  gQ({
                                    ...PQ,
                                    ...QQ
                                  }), rQ(null)
                                },
                                bQ = function(QQ, WQ) {
                                  if (null !== WQ) return `${MX}    presetId: "${WQ}",\n${Qw}\n})`;
                                  const XQ = QQ.velocityGradients.map((QQ => `        {\n            timeFraction: ${OX(QQ.timeFraction)},\n            factor: ${OX(QQ.factor)},\n            factor2: ${OX(QQ.factor2)},\n        },`)),
                                    wQ = [`    dir1: ${KX(QQ.dir1)},`, `    dir2: ${KX(QQ.dir2)},`, Qw, `    texture: "${QQ.texture}",`, `    minLifeTime: ${OX(QQ.minLifeTime)},`, `    maxLifeTime: ${OX(QQ.maxLifeTime)},`, `    minEmitPower: ${OX(QQ.minEmitPower)},`, `    maxEmitPower: ${OX(QQ.maxEmitPower)},`, `    minSize: ${OX(QQ.minSize)},`, `    maxSize: ${OX(QQ.maxSize)},`, `    manualEmitCount: ${OX(QQ.manualEmitCount)},`, `    gravity: ${KX(QQ.gravity)},`, `    colorGradients: ${mX(QQ.colorGradients,"    ")},`, `    velocityGradients: ${XQ.length>0?`[\n${XQ.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${OX(QQ.blendMode)},`];
                                  return void 0 !== QQ.hideDist && wQ.push(`    hideDist: ${OX(QQ.hideDist)},`), `${MX}${wQ.join("\n")}\n})`
                                }(PQ, null === JQ || "example" === JQ ? null : JQ),
                                dQ = zQ.includes(PQ.texture) ? zQ : [...zQ, PQ.texture];
                              return (0, jQ.jsxs)("section", {
                                ref: FQ,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, jQ.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, jQ.jsxs)("div", {
                                    children: [(0, jQ.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, jQ.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, jQ.jsx)(pQ, {
                                    text: bQ,
                                    label: "Copy code"
                                  })]
                                }), (0, jQ.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, jQ.jsx)("button", {
                                    type: "button",
                                    className: TQ()("DocsVariantChip", {
                                      Active: "example" === JQ
                                    }),
                                    onClick: () => {
                                      GQ("example")
                                    },
                                    children: "Example"
                                  }), sq.filter((QQ => null !== fX(QQ))).map((QQ => (0, jQ.jsx)("button", {
                                    type: "button",
                                    className: TQ()("DocsVariantChip", {
                                      Active: JQ === QQ
                                    }),
                                    onClick: () => {
                                      GQ(QQ)
                                    },
                                    children: QQ
                                  }, QQ))), (0, jQ.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== JQ && void 0 !== JQ ? JQ : "custom",
                                    "aria-label": "Preset",
                                    onChange: QQ => {
                                      GQ(QQ.target.value)
                                    },
                                    children: [(0, jQ.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === JQ && (0, jQ.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), LX.e.map((QQ => (0, jQ.jsx)("option", {
                                      value: QQ,
                                      children: QQ
                                    }, QQ)))]
                                  })]
                                }), (0, jQ.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, jQ.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, jQ.jsx)(zq, {
                                      opts: PQ,
                                      textureUrl: null !== (XQ = null === sQ || void 0 === sQ ? void 0 : sQ.getParticleTextureUrl(PQ.texture)) && void 0 !== XQ ? XQ : null,
                                      burst: IQ,
                                      paused: VQ
                                    }), (0, jQ.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, jQ.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          BQ(IQ + 1)
                                        },
                                        children: [(0, jQ.jsx)(yQ, {
                                          name: "replay"
                                        }), (0, jQ.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, jQ.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": VQ,
                                        onClick: () => {
                                          DQ(!VQ)
                                        },
                                        children: [(0, jQ.jsx)(yQ, {
                                          name: VQ ? "play" : "pause"
                                        }), (0, jQ.jsx)("span", {
                                          children: VQ ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, jQ.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, jQ.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, jQ.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, jQ.jsx)("span", {
                                          children: "Texture"
                                        }), (0, jQ.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: PQ.texture
                                        })]
                                      }), (0, jQ.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: dQ.map((QQ => {
                                          var WQ;
                                          const XQ = null !== (WQ = null === sQ || void 0 === sQ ? void 0 : sQ.getParticleTextureUrl(QQ)) && void 0 !== WQ ? WQ : null;
                                          return (0, jQ.jsx)("button", {
                                            type: "button",
                                            className: TQ()("DocsParticleTexture", {
                                              Active: PQ.texture === QQ
                                            }),
                                            title: QQ,
                                            "aria-label": QQ,
                                            "aria-pressed": PQ.texture === QQ,
                                            onClick: () => {
                                              UQ({
                                                texture: QQ
                                              })
                                            },
                                            children: XQ ? (0, jQ.jsx)("img", {
                                              src: XQ,
                                              alt: ""
                                            }) : (0, jQ.jsx)(yQ, {
                                              name: "image"
                                            })
                                          }, QQ)
                                        }))
                                      })]
                                    }), (0, jQ.jsx)(Qq, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: PQ.manualEmitCount,
                                      onChange: QQ => {
                                        UQ({
                                          manualEmitCount: QQ
                                        })
                                      }
                                    }), (0, jQ.jsx)(Mw, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: PQ.minLifeTime,
                                      high: PQ.maxLifeTime,
                                      onChange: (QQ, WQ) => {
                                        UQ({
                                          minLifeTime: QQ,
                                          maxLifeTime: WQ
                                        })
                                      }
                                    }), (0, jQ.jsx)(Mw, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: PQ.minEmitPower,
                                      high: PQ.maxEmitPower,
                                      onChange: (QQ, WQ) => {
                                        UQ({
                                          minEmitPower: QQ,
                                          maxEmitPower: WQ
                                        })
                                      }
                                    }), (0, jQ.jsx)(Mw, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: PQ.minSize,
                                      high: PQ.maxSize,
                                      onChange: (QQ, WQ) => {
                                        UQ({
                                          minSize: QQ,
                                          maxSize: WQ
                                        })
                                      }
                                    }), (0, jQ.jsx)(Qq, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (qQ = PQ.gravity[1]) && void 0 !== qQ ? qQ : 0,
                                      onChange: QQ => {
                                        var WQ, XQ;
                                        UQ({
                                          gravity: [null !== (WQ = PQ.gravity[0]) && void 0 !== WQ ? WQ : 0, QQ, null !== (XQ = PQ.gravity[2]) && void 0 !== XQ ? XQ : 0]
                                        })
                                      }
                                    }), (0, jQ.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, jQ.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, jQ.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, jQ.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: PQ.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: QQ => {
                                          UQ({
                                            blendMode: Number(QQ.target.value)
                                          })
                                        },
                                        children: Fq.map((QQ => {
                                          let {
                                            mode: WQ,
                                            label: XQ
                                          } = QQ;
                                          return (0, jQ.jsx)("option", {
                                            value: WQ,
                                            children: XQ
                                          }, WQ)
                                        }))
                                      })]
                                    }), (0, jQ.jsx)(Wq, {
                                      opts: PQ,
                                      onChange: QQ => {
                                        UQ({
                                          colorGradients: QQ
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, jQ.jsx)(vQ, {
                                  code: bQ,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var gq = XQ(4780),
                            Jq = XQ(1975);

                          function rq(QQ, WQ) {
                            return QQ ? gq.d.includes(WQ) ? QQ.getIngameIconUrl(WQ) : QQ.getItemIconUrl(WQ) : null
                          }

                          function Iq(QQ) {
                            var WQ, XQ, wQ;
                            let {
                              part: qQ,
                              assets: zQ
                            } = QQ;
                            const sQ = rq(zQ, qQ.icon),
                              FQ = null !== (WQ = null === (XQ = qQ.style) || void 0 === XQ ? void 0 : XQ.fontSize) && void 0 !== WQ ? WQ : "1.8em",
                              PQ = (0, LW.ac)(qQ.style);
                            return (0, jQ.jsxs)("span", {
                              className: TQ()("DocsBloxdTextIcon", {
                                Missing: !sQ
                              }),
                              style: {
                                width: FQ,
                                height: FQ,
                                opacity: null === (wQ = qQ.style) || void 0 === wQ ? void 0 : wQ.opacity
                              },
                              title: sQ ? void 0 : `No Bloxd icon, item or block is called "${qQ.icon}"`,
                              children: [sQ && PQ && (0, jQ.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: PQ,
                                  maskImage: `url("${sQ}")`,
                                  WebkitMaskImage: `url("${sQ}")`
                                }
                              }), sQ ? (0, jQ.jsx)("img", {
                                src: sQ,
                                alt: "",
                                className: TQ()({
                                  Tinted: PQ
                                })
                              }) : (0, jQ.jsx)(yQ, {
                                name: "image"
                              })]
                            })
                          }

                          function jq(QQ) {
                            let {
                              parts: WQ,
                              className: XQ
                            } = QQ;
                            const wQ = pw(),
                              qQ = [];
                            let zQ = [];
                            const sQ = QQ => {
                              zQ.length > 0 && (qQ.push((0, jQ.jsx)(Jq.e, {
                                text: zQ
                              }, `run-${QQ}`)), zQ = [])
                            };
                            return WQ.forEach(((QQ, WQ) => {
                              "icon" !== oW(QQ) || fW(QQ.icon) ? zQ.push(QQ) : (sQ(WQ), qQ.push((0, jQ.jsx)(Iq, {
                                part: QQ,
                                assets: wQ
                              }, `icon-${WQ}`)))
                            })), sQ(WQ.length), (0, jQ.jsx)("div", {
                              className: TQ()("DocsStyledTextPreview", XQ),
                              children: qQ
                            })
                          }
                          const Bq = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let yq = null;

                          function Vq(QQ) {
                            if (yq ??= document.createElement("canvas").getContext("2d"), !yq) return "#000000";
                            yq.fillStyle = "#000000", yq.fillStyle = QQ;
                            const WQ = yq.fillStyle;
                            return WQ.startsWith("#") ? WQ : "#000000"
                          }

                          function Dq(QQ) {
                            let {
                              value: WQ,
                              label: XQ,
                              onChange: wQ
                            } = QQ;
                            return (0, jQ.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, jQ.jsx)("input", {
                                type: "color",
                                value: Vq(WQ),
                                "aria-label": `${XQ} picker`,
                                onChange: QQ => {
                                  wQ(QQ.target.value)
                                }
                              }), (0, jQ.jsx)("input", {
                                type: "text",
                                value: WQ,
                                placeholder: "#ffb914 or gold",
                                "aria-label": XQ,
                                spellCheck: !1,
                                onChange: QQ => {
                                  wQ(QQ.target.value)
                                }
                              })]
                            })
                          }

                          function pq(QQ) {
                            let {
                              value: WQ,
                              fontAwesomeIcons: XQ,
                              onChange: qQ
                            } = QQ;
                            const zQ = pw(),
                              [sQ, FQ] = (0, wQ.useState)(fW(WQ) ? "fontAwesome" : "bloxd"),
                              [PQ, gQ] = (0, wQ.useState)(""),
                              JQ = PQ.trim().toLowerCase(),
                              rQ = "bloxd" === sQ ? gq.d : XQ,
                              IQ = JQ ? rQ.filter((QQ => QQ.toLowerCase().includes(JQ))) : rQ;
                            return (0, jQ.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, jQ.jsx)("input", {
                                type: "text",
                                value: WQ,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: QQ => {
                                  qQ(QQ.target.value)
                                }
                              }), (0, jQ.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, jQ.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((QQ => (0, jQ.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": sQ === QQ,
                                    className: TQ()("DocsVariantChip", {
                                      Active: sQ === QQ
                                    }),
                                    onClick: () => {
                                      FQ(QQ)
                                    },
                                    children: "bloxd" === QQ ? `Bloxd icons (${gq.d.length})` : `Font Awesome (${XQ.length})`
                                  }, QQ))), (0, jQ.jsx)("input", {
                                    type: "search",
                                    value: PQ,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: QQ => {
                                      gQ(QQ.target.value)
                                    }
                                  })
                                ]
                              }), (0, jQ.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [IQ.map((QQ => {
                                  const XQ = "bloxd" === sQ ? rq(zQ, QQ) : null;
                                  return (0, jQ.jsx)("button", {
                                    type: "button",
                                    title: QQ,
                                    "aria-label": QQ,
                                    "aria-pressed": QQ === WQ,
                                    className: TQ()("DocsIconPickerOption", {
                                      Active: QQ === WQ
                                    }),
                                    onClick: () => {
                                      qQ(QQ)
                                    },
                                    children: "fontAwesome" === sQ ? (0, jQ.jsx)(GX.d, {
                                      name: QQ
                                    }) : XQ ? (0, jQ.jsx)("img", {
                                      src: XQ,
                                      alt: ""
                                    }) : (0, jQ.jsx)(yQ, {
                                      name: "image"
                                    })
                                  }, QQ)
                                })), 0 === IQ.length && (0, jQ.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", PQ, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function Gq(QQ) {
                            let {
                              property: WQ,
                              value: XQ,
                              fontAwesomeIcons: wQ,
                              onChange: qQ
                            } = QQ;
                            const {
                              field: TQ,
                              label: zQ
                            } = WQ, sQ = QQ => "" !== QQ || WQ.isRequired ? QQ : void 0;
                            switch (TQ.kind) {
                              case "text":
                                return TQ.multiline ? (0, jQ.jsx)("textarea", {
                                  value: String(null !== XQ && void 0 !== XQ ? XQ : ""),
                                  rows: 2,
                                  "aria-label": zQ,
                                  onChange: QQ => {
                                    qQ(QQ.target.value)
                                  }
                                }) : (0, jQ.jsx)("input", {
                                  type: "text",
                                  value: String(null !== XQ && void 0 !== XQ ? XQ : ""),
                                  "aria-label": zQ,
                                  onChange: QQ => {
                                    qQ(sQ(QQ.target.value))
                                  }
                                });
                              case "size":
                                return (0, jQ.jsx)("input", {
                                  type: "text",
                                  value: String(null !== XQ && void 0 !== XQ ? XQ : ""),
                                  placeholder: WQ.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": zQ,
                                  spellCheck: !1,
                                  onChange: QQ => {
                                    qQ(sQ(QQ.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, jQ.jsx)(Dq, {
                                  value: String(null !== XQ && void 0 !== XQ ? XQ : ""),
                                  label: zQ,
                                  onChange: QQ => {
                                    qQ(sQ(QQ))
                                  }
                                });
                              case "colours": {
                                const QQ = Array.isArray(XQ) ? XQ : [],
                                  WQ = QQ => {
                                    qQ(QQ.length > 0 ? QQ : void 0)
                                  };
                                return (0, jQ.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [QQ.map(((XQ, wQ) => (0, jQ.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, jQ.jsx)(Dq, {
                                      value: XQ,
                                      label: `${zQ} ${wQ+1}`,
                                      onChange: XQ => {
                                        WQ(QQ.map(((QQ, WQ) => WQ === wQ ? XQ : QQ)))
                                      }
                                    }), (0, jQ.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${wQ+1}`,
                                      onClick: () => {
                                        WQ(QQ.filter(((QQ, WQ) => WQ !== wQ)))
                                      },
                                      children: (0, jQ.jsx)(yQ, {
                                        name: "cross"
                                      })
                                    })]
                                  }, wQ))), (0, jQ.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var XQ;
                                      WQ([...QQ, null !== (XQ = QQ.at(-1)) && void 0 !== XQ ? XQ : "#ffffff"])
                                    },
                                    children: [(0, jQ.jsx)(yQ, {
                                      name: "plus"
                                    }), 0 === QQ.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var FQ;
                                const QQ = "number" === typeof XQ ? XQ : Number(null !== (FQ = WQ.defaultText) && void 0 !== FQ ? FQ : 0);
                                return (0, jQ.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, jQ.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: QQ,
                                    "aria-label": zQ,
                                    onChange: QQ => {
                                      qQ(Number(QQ.target.value))
                                    }
                                  }), (0, jQ.jsx)("output", {
                                    children: QQ.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, jQ.jsxs)("select", {
                                  value: String(null !== XQ && void 0 !== XQ ? XQ : ""),
                                  "aria-label": zQ,
                                  onChange: QQ => {
                                    qQ(sQ(QQ.target.value))
                                  },
                                  children: [!WQ.isRequired && (0, jQ.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", WQ.defaultText, ")"]
                                  }), TQ.options.map((QQ => (0, jQ.jsx)("option", {
                                    value: QQ,
                                    children: QQ
                                  }, QQ)))]
                                });
                              case "icon":
                                return (0, jQ.jsx)(pq, {
                                  value: String(null !== XQ && void 0 !== XQ ? XQ : ""),
                                  fontAwesomeIcons: wQ,
                                  onChange: qQ
                                })
                            }
                          }

                          function Uq(QQ) {
                            let WQ;
                            try {
                              WQ = JSON.parse(QQ)
                            } catch (XQ) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${XQ.message}`
                              }
                            }
                            return XX(WQ) ? {
                              part: WQ,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function bq(QQ) {
                            let {
                              parts: WQ,
                              index: XQ,
                              fontAwesomeIcons: qQ,
                              onChange: TQ,
                              JA: zQ,
                              onClose: sQ
                            } = QQ;
                            const FQ = (0, wQ.useContext)(jW),
                              gQ = (0, wQ.useRef)(null),
                              JQ = WQ[XQ],
                              rQ = oW(JQ),
                              [IQ, BQ] = (0, wQ.useState)((() => JSON.stringify(JQ, null, 2))),
                              VQ = (0, wQ.useMemo)((() => "other" === rQ ? Uq(IQ).error : null), [rQ, IQ]);
                            (0, wQ.useEffect)((() => {
                              var QQ;
                              null === (QQ = gQ.current) || void 0 === QQ || QQ.focus()
                            }), []);
                            const DQ = (0, jQ.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: QQ => {
                                QQ.target === QQ.currentTarget && sQ()
                              },
                              children: (0, jQ.jsxs)("div", {
                                ref: gQ,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${XQ+1}: ${SW[rQ]}`,
                                tabIndex: -1,
                                onKeyDown: QQ => {
                                  "Escape" === QQ.key ? (QQ.stopPropagation(), sQ()) : "Tab" === QQ.key && gQ.current && function(QQ, WQ) {
                                    const XQ = Array.from(QQ.querySelectorAll(hW)),
                                      wQ = XQ[0],
                                      qQ = XQ.at(-1);
                                    if (!wQ || !qQ) return;
                                    const TQ = document.activeElement;
                                    !WQ.shiftKey || TQ !== wQ && TQ !== QQ ? WQ.shiftKey || TQ !== qQ || (WQ.preventDefault(), wQ.focus()) : (WQ.preventDefault(), qQ.focus())
                                  }(gQ.current, QQ)
                                },
                                children: [(0, jQ.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, jQ.jsxs)("div", {
                                    children: [(0, jQ.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", XQ + 1]
                                    }), (0, jQ.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: SW[rQ]
                                    })]
                                  }), (0, jQ.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: sQ,
                                    children: (0, jQ.jsx)(yQ, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, jQ.jsx)(jq, {
                                  parts: WQ,
                                  className: "DocsTextDialogPreview"
                                }), (0, jQ.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === rQ ? (0, jQ.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, jQ.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, jQ.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: IQ,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: QQ => {
                                        BQ(QQ.target.value);
                                        const WQ = Uq(QQ.target.value);
                                        null !== WQ.part && TQ(WQ.part)
                                      }
                                    }), VQ && (0, jQ.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: VQ
                                    })]
                                  }) : nW[rQ].map((QQ => {
                                    const WQ = YW(JQ, QQ.path),
                                      XQ = QQ.isRequired ? JSON.stringify(ZW(JQ, QQ.path)) === JSON.stringify(JQ) : void 0 === WQ;
                                    return (0, jQ.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, jQ.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, jQ.jsx)("span", {
                                          children: QQ.label
                                        }), (0, jQ.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: XQ,
                                          "aria-label": `Reset ${QQ.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            TQ(ZW(JQ, QQ.path))
                                          },
                                          children: [(0, jQ.jsx)(yQ, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, jQ.jsx)(Gq, {
                                        property: QQ,
                                        value: WQ,
                                        fontAwesomeIcons: qQ,
                                        onChange: WQ => {
                                          TQ(NW(JQ, QQ.path, WQ))
                                        }
                                      }), !QQ.isRequired && (0, jQ.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", QQ.defaultText]
                                      })]
                                    }, QQ.path.join("."))
                                  }))
                                }), (0, jQ.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, jQ.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: zQ,
                                    children: [(0, jQ.jsx)(yQ, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, jQ.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: sQ,
                                    children: "Done"
                                  })]
                                }), (0, jQ.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: Bq.map((QQ => (0, jQ.jsx)("option", {
                                    value: QQ
                                  }, QQ)))
                                })]
                              })
                            });
                            return FQ ? (0, PQ.createPortal)(DQ, FQ) : DQ
                          }
                          const vq = [{
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
                            dq = Object.keys(tW);

                          function Hq(QQ) {
                            let {
                              fontAwesomeIcons: WQ
                            } = QQ;
                            const [XQ, qQ] = (0, wQ.useState)(vq[0].parts), [zQ, sQ] = (0, wQ.useState)((() => MW(vq[0].parts))), [FQ, PQ] = (0, wQ.useState)(null), [gQ, JQ] = (0, wQ.useState)(!1), [rQ, IQ] = (0, wQ.useState)(null), [BQ, VQ] = (0, wQ.useState)(!1), [DQ, pQ] = (0, wQ.useState)(null), GQ = (0, wQ.useRef)(null), UQ = MW(XQ);
                            (0, wQ.useLayoutEffect)((() => {
                              var QQ;
                              if (!DQ) return;
                              const WQ = QQ => {
                                  var WQ;
                                  return null === (WQ = GQ.current) || void 0 === WQ ? void 0 : WQ.querySelector(`[data-focus-key="${QQ}"]`)
                                },
                                XQ = WQ(DQ.key);
                              null === (QQ = XQ && !XQ.disabled ? XQ : WQ(DQ.fallback)) || void 0 === QQ || QQ.focus(), pQ(null)
                            }), [DQ]);
                            const bQ = QQ => {
                                qQ(QQ), sQ(MW(QQ)), PQ(null)
                              },
                              dQ = QQ => {
                                bQ(XQ.filter(((WQ, XQ) => XQ !== QQ))), pQ({
                                  key: `edit-${Math.min(QQ,XQ.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              HQ = (QQ, WQ) => {
                                const wQ = [...XQ],
                                  [qQ] = wQ.splice(QQ, 1);
                                wQ.splice(QQ + WQ, 0, qQ), bQ(wQ);
                                pQ({
                                  key: `${WQ<0?"up":"down"}-${QQ+WQ}`,
                                  fallback: `edit-${QQ+WQ}`
                                })
                              };
                            return (0, jQ.jsxs)("section", {
                              ref: GQ,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, jQ.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, jQ.jsxs)("div", {
                                  children: [(0, jQ.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, jQ.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, jQ.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: vq.map((QQ => (0, jQ.jsx)("button", {
                                  type: "button",
                                  className: TQ()("DocsVariantChip", {
                                    Active: UQ === MW(QQ.parts)
                                  }),
                                  onClick: () => {
                                    bQ(QQ.parts)
                                  },
                                  children: QQ.label
                                }, QQ.label)))
                              }), (0, jQ.jsx)(jq, {
                                parts: XQ,
                                className: "DocsTextEditorPreview"
                              }), (0, jQ.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, jQ.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, jQ.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, jQ.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [XQ.map(((QQ, WQ) => {
                                      const wQ = oW(QQ);
                                      return (0, jQ.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, jQ.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${WQ}`,
                                          "aria-label": `Edit part ${WQ+1}, ${SW[wQ]}`,
                                          onClick: () => {
                                            IQ(WQ)
                                          },
                                          children: [(0, jQ.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: SW[wQ]
                                          }), (0, jQ.jsx)(jq, {
                                            parts: [QQ],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== wQ && (0, jQ.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: OW(QQ)
                                          })]
                                        }), (0, jQ.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, jQ.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${WQ+1} up`,
                                            "data-focus-key": `up-${WQ}`,
                                            disabled: 0 === WQ,
                                            onClick: () => {
                                              HQ(WQ, -1)
                                            },
                                            children: (0, jQ.jsx)(yQ, {
                                              name: "chevron-up"
                                            })
                                          }), (0, jQ.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${WQ+1} down`,
                                            "data-focus-key": `down-${WQ}`,
                                            disabled: WQ === XQ.length - 1,
                                            onClick: () => {
                                              HQ(WQ, 1)
                                            },
                                            children: (0, jQ.jsx)(yQ, {
                                              name: "chevron-down"
                                            })
                                          }), (0, jQ.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${WQ+1}`,
                                            onClick: () => {
                                              dQ(WQ)
                                            },
                                            children: (0, jQ.jsx)(yQ, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, WQ)
                                    })), 0 === XQ.length && (0, jQ.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, jQ.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: QQ => {
                                      "Escape" === QQ.key && BQ && (QQ.stopPropagation(), VQ(!1), pQ({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, jQ.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": BQ,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        VQ(!BQ)
                                      },
                                      children: [(0, jQ.jsx)(yQ, {
                                        name: "plus"
                                      }), "Add a part", (0, jQ.jsx)(yQ, {
                                        name: BQ ? "chevron-up" : "chevron-down"
                                      })]
                                    }), BQ && (0, jQ.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: dq.map((QQ => (0, jQ.jsx)("li", {
                                        children: (0, jQ.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (QQ => {
                                              bQ([...XQ, tW[QQ]]), VQ(!1), IQ(XQ.length)
                                            })(QQ)
                                          },
                                          children: SW[QQ]
                                        })
                                      }, QQ)))
                                    })]
                                  })]
                                }), (0, jQ.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, jQ.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, jQ.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": gQ,
                                      onClick: () => {
                                        JQ(!gQ)
                                      },
                                      children: [(0, jQ.jsx)(yQ, {
                                        name: gQ ? "check" : "pencil"
                                      }), gQ ? "Done" : "Edit"]
                                    })]
                                  }), gQ ? (0, jQ.jsxs)(jQ.Fragment, {
                                    children: [(0, jQ.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: zQ,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: QQ => {
                                        sQ(QQ.target.value);
                                        const WQ = wX(QQ.target.value);
                                        PQ(WQ.error), WQ.parts && qQ(WQ.parts)
                                      }
                                    }), FQ && (0, jQ.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: FQ
                                    })]
                                  }) : (0, jQ.jsx)(vQ, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${UQ})`
                                  })]
                                })]
                              }), null !== rQ && rQ < XQ.length && (0, jQ.jsx)(bq, {
                                parts: XQ,
                                index: rQ,
                                fontAwesomeIcons: WQ,
                                onChange: QQ => {
                                  ((QQ, WQ) => {
                                    bQ(XQ.map(((XQ, wQ) => wQ === QQ ? WQ : XQ)))
                                  })(rQ, QQ)
                                },
                                JA: () => {
                                  dQ(rQ), IQ(null)
                                },
                                onClose: () => {
                                  IQ(null), pQ({
                                    key: `edit-${rQ}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var aq = XQ(5196),
                            lq = XQ(5178),
                            hq = XQ(5187),
                            iq = XQ(5205);
                          const cq = 40,
                            Aq = 800,
                            Rq = 150,
                            Eq = 8e3,
                            Cq = 2e3;

                          function uq(QQ, WQ) {
                            return 12 * Math.log2(WQ / QQ)
                          }

                          function Lq(QQ, WQ) {
                            return Math.round(QQ * 2 ** (WQ / 12) * 10) / 10
                          }

                          function kq(QQ) {
                            return `${QQ} ms`
                          }

                          function fq(QQ) {
                            return `${QQ} st`
                          }
                          const Sq = [{
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

                          function tq(QQ) {
                            let {
                              synth: WQ,
                              onChange: XQ
                            } = QQ;
                            const wQ = (0, aq.l)(WQ);
                            return (0, jQ.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, jQ.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, jQ.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, jQ.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, jQ.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, jQ.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, jQ.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: aq.f.map((QQ => (0, jQ.jsx)("button", {
                                      type: "button",
                                      className: TQ()("DocsVariantChip", {
                                        Active: WQ.waveform === QQ
                                      }),
                                      "aria-pressed": WQ.waveform === QQ,
                                      onClick: () => {
                                        XQ({
                                          waveform: QQ
                                        })
                                      },
                                      children: QQ
                                    }, QQ)))
                                  })]
                                }), (0, jQ.jsx)(Qq, {
                                  label: "Pitch",
                                  min: 0,
                                  max: uq(cq, Aq),
                                  step: .1,
                                  value: uq(cq, WQ.pitchHz),
                                  format: () => `${WQ.pitchHz} Hz`,
                                  onChange: QQ => {
                                    XQ({
                                      pitchHz: Lq(cq, QQ)
                                    })
                                  }
                                }), (0, jQ.jsx)(Qq, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: WQ.syllableMs,
                                  format: kq,
                                  onChange: QQ => {
                                    XQ({
                                      syllableMs: QQ
                                    })
                                  }
                                }), (0, jQ.jsx)(Qq, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: WQ.volume,
                                  onChange: QQ => {
                                    XQ({
                                      volume: QQ
                                    })
                                  }
                                })]
                              }), (0, jQ.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, jQ.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, jQ.jsx)(Qq, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: WQ.durationMs,
                                  format: kq,
                                  onChange: QQ => {
                                    XQ({
                                      durationMs: QQ
                                    })
                                  }
                                }), (0, jQ.jsx)(Qq, {
                                  label: "Fade in",
                                  min: 0,
                                  max: wQ.durationMs,
                                  step: 1,
                                  value: wQ.attackMs,
                                  format: kq,
                                  onChange: QQ => {
                                    XQ({
                                      attackMs: QQ
                                    })
                                  }
                                }), (0, jQ.jsx)(Qq, {
                                  label: "Fade out",
                                  min: 0,
                                  max: wQ.durationMs - wQ.attackMs,
                                  step: 1,
                                  value: wQ.releaseMs,
                                  format: kq,
                                  onChange: QQ => {
                                    XQ({
                                      releaseMs: QQ
                                    })
                                  }
                                }), (0, jQ.jsx)(Qq, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: WQ.glideSemitones,
                                  format: fq,
                                  onChange: QQ => {
                                    XQ({
                                      glideSemitones: QQ
                                    })
                                  }
                                }), (0, jQ.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, jQ.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== WQ.lowpassHz,
                                    onChange: QQ => {
                                      XQ({
                                        lowpassHz: QQ.target.checked ? Cq : null
                                      })
                                    }
                                  }), (0, jQ.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== WQ.lowpassHz && (0, jQ.jsx)(Qq, {
                                  label: "Filter",
                                  min: 0,
                                  max: uq(Rq, Eq),
                                  step: .1,
                                  value: uq(Rq, WQ.lowpassHz),
                                  format: () => `${WQ.lowpassHz} Hz`,
                                  onChange: QQ => {
                                    XQ({
                                      lowpassHz: Lq(Rq, QQ)
                                    })
                                  }
                                })]
                              }), (0, jQ.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, jQ.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), Sq.map((QQ => {
                                  let {
                                    key: wQ,
                                    label: qQ,
                                    max: TQ
                                  } = QQ;
                                  return (0, jQ.jsx)(Qq, {
                                    label: qQ,
                                    min: 0,
                                    max: TQ,
                                    step: .1,
                                    value: WQ.intonation[wQ],
                                    format: fq,
                                    onChange: QQ => {
                                      XQ({
                                        intonation: {
                                          ...WQ.intonation,
                                          [wQ]: QQ
                                        }
                                      })
                                    }
                                  }, wQ)
                                }))]
                              })]
                            })
                          }
                          const oq = Object.keys(aq.h),
                            eq = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function nq(QQ) {
                            var WQ;
                            const XQ = JSON.stringify((0, aq.l)(QQ));
                            return null !== (WQ = oq.find((QQ => JSON.stringify((0, aq.l)(aq.h[QQ])) === XQ))) && void 0 !== WQ ? WQ : null
                          }

                          function xq(QQ) {
                            let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof QQ || null === QQ) return JSON.stringify(QQ);
                            return `{\n${Object.entries(QQ).map((QQ=>{let[XQ,wQ]=QQ;return`${WQ}    ${XQ}: ${xq(wQ,`${WQ}    `)},`})).join("\n")}\n${WQ}}`
                          }

                          function Yq(QQ, WQ, XQ) {
                            const wQ = nq(QQ),
                              qQ = [`    line: ${JSON.stringify(WQ)},`];
                            return XQ && qQ.push(`    speakerName: ${JSON.stringify(XQ)},`), qQ.push("    voice,"), `const voice = ${wQ?JSON.stringify(wQ):xq((0,aq.l)(QQ))}\n\napi.setClientOption(playerId, "dialogue", {\n${qQ.join("\n")}\n})`
                          }
                          const Nq = 400,
                            Zq = 90;
                          let Oq = null;

                          function Kq(QQ, WQ, XQ) {
                            return Oq ??= new AudioContext, Oq.resume(), (0, iq.e)(Oq, Oq.destination, QQ, WQ, XQ, (() => {}))
                          }

                          function mq() {
                            const [QQ, WQ] = (0, wQ.useState)(aq.h.regular), [XQ, qQ] = (0, wQ.useState)(eq[0]), [zQ, sQ] = (0, wQ.useState)("Innkeeper"), [FQ, PQ] = (0, wQ.useState)(0), gQ = gw((QQ => QQ.volume)), JQ = (0, wQ.useRef)(null), rQ = (0, wQ.useRef)(0), IQ = (0, wQ.useRef)(0), BQ = () => {
                              var QQ;
                              null === (QQ = JQ.current) || void 0 === QQ || QQ.call(JQ), JQ.current = null
                            };
                            (0, wQ.useEffect)((() => () => {
                              var QQ;
                              null === (QQ = JQ.current) || void 0 === QQ || QQ.call(JQ), window.clearTimeout(rQ.current)
                            }), []);
                            const VQ = (0, wQ.useMemo)((() => ({
                                line: XQ,
                                speakerName: zQ || void 0,
                                voice: QQ
                              })), [XQ, zQ, QQ]),
                              DQ = (0, wQ.useRef)(VQ);
                            DQ.current = VQ;
                            const GQ = nq(QQ),
                              UQ = QQ => {
                                window.clearTimeout(rQ.current), BQ();
                                const {
                                  plan: WQ,
                                  synth: XQ
                                } = (0, hq.f)(QQ);
                                XQ && (JQ.current = Kq(XQ, WQ.blips, gQ)), PQ((QQ => QQ + 1))
                              },
                              bQ = Yq(QQ, XQ, zQ);
                            return (0, jQ.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, jQ.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, jQ.jsxs)("div", {
                                  children: [(0, jQ.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, jQ.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, jQ.jsx)(pQ, {
                                  text: bQ,
                                  label: "Copy code"
                                })]
                              }), (0, jQ.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [oq.map((QQ => (0, jQ.jsx)("button", {
                                  type: "button",
                                  className: TQ()("DocsVariantChip", {
                                    Active: GQ === QQ
                                  }),
                                  "aria-pressed": GQ === QQ,
                                  onClick: () => {
                                    (QQ => {
                                      const XQ = aq.h[QQ];
                                      WQ(XQ), UQ({
                                        ...VQ,
                                        voice: XQ
                                      })
                                    })(QQ)
                                  },
                                  children: QQ
                                }, QQ))), !GQ && (0, jQ.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, jQ.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, jQ.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, jQ.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, jQ.jsx)(lq.c, {
                                      display: VQ
                                    }, FQ)
                                  }), (0, jQ.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: QQ => {
                                      QQ.preventDefault(), UQ(VQ)
                                    },
                                    children: [(0, jQ.jsx)("input", {
                                      value: XQ,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: QQ => {
                                        qQ(QQ.target.value)
                                      }
                                    }), (0, jQ.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, jQ.jsx)(yQ, {
                                        name: "play"
                                      }), (0, jQ.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, jQ.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: eq.map((QQ => (0, jQ.jsx)("button", {
                                      type: "button",
                                      className: TQ()("DocsVariantChip", {
                                        Active: XQ === QQ
                                      }),
                                      onClick: () => {
                                        var WQ;
                                        qQ(WQ = QQ), UQ({
                                          ...VQ,
                                          line: WQ
                                        })
                                      },
                                      children: QQ
                                    }, QQ)))
                                  }), (0, jQ.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, jQ.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, jQ.jsx)("input", {
                                      value: zQ,
                                      placeholder: "No name",
                                      onChange: QQ => {
                                        sQ(QQ.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, jQ.jsx)(tq, {
                                  synth: QQ,
                                  onChange: XQ => {
                                    const wQ = {
                                      ...QQ,
                                      ...XQ
                                    };
                                    WQ(wQ);
                                    const qQ = {
                                        ...VQ,
                                        voice: wQ
                                      },
                                      TQ = performance.now();
                                    if (TQ - IQ.current >= Zq) {
                                      IQ.current = TQ, BQ();
                                      const QQ = (0, hq.f)(qQ).plan.blips[0];
                                      QQ && (JQ.current = Kq((0, aq.l)(wQ), [{
                                        ...QQ,
                                        atMs: 0
                                      }], gQ))
                                    }
                                    window.clearTimeout(rQ.current), rQ.current = window.setTimeout((() => {
                                      UQ(DQ.current)
                                    }), Nq)
                                  }
                                })]
                              }), (0, jQ.jsx)(vQ, {
                                code: bQ,
                                lang: "ts"
                              })]
                            })
                          }
                          var Mq = XQ(5223);
                          const QT = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            WT = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            XT = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${WT}`, "g"), Mq.p],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, Mq.p]
                            ];

                          function wT(QQ) {
                            return `${QQ.pageId}#${QQ.anchor}`
                          }
                          let qT, TT, zT;

                          function sT(QQ) {
                            const WQ = (0, dQ.j)(QQ),
                              XQ = new Set;
                            for (const [, , wQ] of WQ.matchAll(dQ.d)) {
                              const QQ = wQ.startsWith("#") ? oQ(wQ) : null,
                                WQ = QQ ? wT({
                                  pageId: QQ.page.id,
                                  anchor: QQ.anchor
                                }) : null;
                              null !== WQ && (qT || (qT = new Set(uQ.flatMap((QQ => hQ(QQ.layout) ? SQ(QQ).sections.map((WQ => wT({
                                pageId: QQ.id,
                                anchor: WQ.heading.anchor
                              }))) : [])))), qT).has(WQ) && XQ.add(WQ)
                            }
                            for (const [, , wQ] of WQ.matchAll(QT)) {
                              const QQ = rW(wQ);
                              QQ && XQ.add(wT(QQ))
                            }
                            return XQ
                          }

                          function FT(QQ, WQ) {
                            const XQ = new Set,
                              wQ = function(QQ) {
                                return QQ.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(QQ);
                            for (const [, qQ] of wQ.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) XQ.add(qQ);
                            for (const [qQ, TQ] of XT)
                              for (const [, QQ] of(0, Mq.h)(wQ, qQ, TQ)) WQ.has(QQ) && XQ.add(QQ);
                            return XQ
                          }

                          function PT(QQ, WQ, XQ, wQ) {
                            const qQ = QQ.get(WQ);
                            qQ ? !wQ && qQ.some((QQ => QQ.pageId === XQ.pageId)) || qQ.push(XQ) : QQ.set(WQ, [XQ])
                          }
                          const gT = /^[A-Za-z_$][\w$]*$/;

                          function JT(QQ) {
                            return gT.test(QQ.name) ? QQ.name : "options"
                          }

                          function rT(QQ, WQ) {
                            const XQ = QQ.params.map(JT).join(", ");
                            return WQ ? `${QQ.name} = (${XQ}) => {\n\t\n}` : `api.${QQ.name}(${XQ})`
                          }

                          function IT(QQ) {
                            let {
                              method: WQ,
                              isCallback: XQ
                            } = QQ;
                            return (0, jQ.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, jQ.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [XQ ? (0, jQ.jsxs)(jQ.Fragment, {
                                  children: [(0, jQ.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: WQ.name
                                  }), (0, jQ.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, jQ.jsxs)(jQ.Fragment, {
                                  children: [(0, jQ.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, jQ.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: WQ.name
                                  }), (0, jQ.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), WQ.params.map(((QQ, XQ) => (0, jQ.jsxs)(wQ.Fragment, {
                                  children: [XQ > 0 && (0, jQ.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, jQ.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${WQ.name}-${JT(QQ)}`,
                                    children: QQ.name
                                  })]
                                }, QQ.name))), (0, jQ.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: XQ ? ") => " : ")"
                                }), XQ && !WQ.returns && (0, jQ.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), WQ.returns && WQ.returns.type && (0, jQ.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!XQ && (0, jQ.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, jQ.jsx)(HW, {
                                  type: WQ.returns.type
                                })]
                              })]
                            })
                          }

                          function jT(QQ) {
                            let {
                              title: WQ,
                              references: XQ
                            } = QQ;
                            const qQ = (0, wQ.useContext)(IW);
                            return (0, jQ.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, jQ.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: WQ
                              }), XQ.map((QQ => (0, jQ.jsx)(zQ.d, {
                                to: nQ(qQ, kQ(QQ.pageId), QQ.anchor),
                                children: QQ.label
                              }, `${QQ.pageId}#${QQ.anchor}`)))]
                            })
                          }

                          function BT(QQ) {
                            var WQ, XQ;
                            let {
                              pageId: wQ,
                              anchor: qQ
                            } = QQ;
                            const TQ = wT({
                                pageId: wQ,
                                anchor: qQ
                              }),
                              zQ = null !== (WQ = function() {
                                if (!zT) {
                                  zT = new Map;
                                  const wQ = new Set(uQ.filter((QQ => "callbacks" === QQ.layout)).flatMap((QQ => SQ(QQ).sections.map((QQ => QQ.heading.text)))));
                                  for (const qQ of uQ)
                                    if ("article" === qQ.layout || "snippets" === qQ.layout)
                                      for (const TQ of (0, dQ.t)(SQ(qQ)))
                                        for (const {
                                            code: zQ
                                          }
                                          of(0, dQ.k)(TQ.blocks))
                                          for (const sQ of FT(zQ, wQ)) {
                                            const wQ = JW().get(sQ);
                                            if (wQ) {
                                              var QQ, WQ, XQ;
                                              const zQ = {
                                                pageId: qQ.id,
                                                anchor: null !== (QQ = null === (WQ = TQ.heading) || void 0 === WQ ? void 0 : WQ.anchor) && void 0 !== QQ ? QQ : "",
                                                label: null !== (XQ = qQ.navTitle) && void 0 !== XQ ? XQ : qQ.title
                                              };
                                              PT(zT, wT(wQ), zQ, !1)
                                            }
                                          }
                                }
                                return zT
                              }().get(TQ)) && void 0 !== WQ ? WQ : [],
                              sQ = null !== (XQ = function() {
                                if (!TT) {
                                  TT = new Map;
                                  const QQ = kQ("changelog");
                                  for (const WQ of SQ(QQ).sections) {
                                    const XQ = new Set(WQ.blocks.flatMap((QQ => [...sT(QQ)])));
                                    for (const wQ of XQ) {
                                      const XQ = {
                                        pageId: QQ.id,
                                        anchor: WQ.heading.anchor,
                                        label: WQ.heading.text
                                      };
                                      PT(TT, wQ, XQ, !0)
                                    }
                                  }
                                }
                                return TT
                              }().get(TQ)) && void 0 !== XQ ? XQ : [];
                            return 0 === zQ.length && 0 === sQ.length ? null : (0, jQ.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [zQ.length > 0 && (0, jQ.jsx)(jT, {
                                title: "Used in",
                                references: zQ
                              }), sQ.length > 0 && (0, jQ.jsx)(jT, {
                                title: "Changelog",
                                references: sQ
                              })]
                            })
                          }

                          function yT(QQ) {
                            let {
                              method: WQ,
                              pageId: XQ,
                              anchor: wQ,
                              isCallback: qQ
                            } = QQ;
                            const TQ = qQ ? void 0 : sW().get(WQ.name),
                              zQ = WQ.description.length > 0 || null === TQ || void 0 === TQ || !TQ.description ? WQ.description : (0, dQ.B)(TQ.description);
                            return (0, jQ.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, jQ.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, jQ.jsx)(PX, {
                                  level: 2,
                                  text: WQ.name,
                                  anchor: wQ,
                                  className: "DocsCardTitle"
                                }), (0, jQ.jsx)(pQ, {
                                  text: rT(WQ, qQ),
                                  label: qQ ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, jQ.jsx)(IT, {
                                method: WQ,
                                isCallback: qQ
                              }), TQ && null !== TQ.deprecation && (0, jQ.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, jQ.jsx)("strong", {
                                  children: "Deprecated"
                                }), TQ.deprecation && (0, jQ.jsxs)(jQ.Fragment, {
                                  children: [": ", (0, jQ.jsx)(bW, {
                                    text: (sQ = TQ.deprecation, (0, Mq.v)(sQ, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, Mq.o)("`\\w"), (QQ => {
                                      let [WQ] = QQ;
                                      return JW().has(WQ) ? `\`${WQ}\`` : WQ
                                    })))
                                  })]
                                })]
                              }), zQ.length > 0 && (0, jQ.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, jQ.jsx)(IX, {
                                  blocks: zQ
                                })
                              }), WQ.params.length > 0 && (0, jQ.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, jQ.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, jQ.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: WQ.params.map((QQ => (0, jQ.jsxs)("div", {
                                    id: `${WQ.name}-${JT(QQ)}`,
                                    className: "DocsParam",
                                    children: [(0, jQ.jsxs)("dt", {
                                      children: [(0, jQ.jsx)("code", {
                                        className: "DocsParamName",
                                        children: QQ.name
                                      }), (0, jQ.jsx)(HW, {
                                        type: QQ.type
                                      })]
                                    }), QQ.description && (0, jQ.jsx)("dd", {
                                      children: (0, jQ.jsx)(bW, {
                                        text: QQ.description
                                      })
                                    })]
                                  }, QQ.name)))
                                })]
                              }), WQ.returns && (WQ.returns.type || WQ.returns.description.length > 0) && (0, jQ.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, jQ.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, jQ.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [WQ.returns.type && (0, jQ.jsx)(HW, {
                                    type: WQ.returns.type
                                  }), WQ.returns.description.length > 0 && (0, jQ.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, jQ.jsx)(IX, {
                                      blocks: WQ.returns.description
                                    })
                                  })]
                                })]
                              }), (0, jQ.jsx)(BT, {
                                pageId: XQ,
                                anchor: wQ
                              })]
                            });
                            var sQ
                          }

                          function VT(QQ) {
                            var WQ;
                            return null !== QQ.defaultValue && "undefined" !== QQ.defaultValue ? QQ.defaultValue : null !== (WQ = QQ.example) && void 0 !== WQ ? WQ : "value"
                          }

                          function DT(QQ) {
                            let {
                              setting: WQ,
                              pageId: XQ,
                              anchor: wQ,
                              setterSnippet: qQ
                            } = QQ;
                            const TQ = null === WQ.defaultValue ? null : VW(WQ.defaultValue);
                            return (0, jQ.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, jQ.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, jQ.jsx)(PX, {
                                  level: 2,
                                  text: WQ.name,
                                  anchor: wQ,
                                  className: "DocsCardTitle"
                                }), (0, jQ.jsx)(pQ, {
                                  text: qQ(WQ.name, VT(WQ)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, jQ.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, jQ.jsxs)("div", {
                                  children: [(0, jQ.jsx)("dt", {
                                    children: "Type"
                                  }), (0, jQ.jsx)("dd", {
                                    children: (0, jQ.jsx)(HW, {
                                      type: WQ.type
                                    })
                                  })]
                                }), null !== WQ.defaultValue && (0, jQ.jsxs)("div", {
                                  children: [(0, jQ.jsx)("dt", {
                                    children: "Default"
                                  }), (0, jQ.jsx)("dd", {
                                    children: (0, jQ.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [TQ && (0, jQ.jsx)(DW, {
                                        colour: TQ
                                      }), WQ.defaultValue]
                                    })
                                  })]
                                }), null !== WQ.example && (0, jQ.jsxs)("div", {
                                  children: [(0, jQ.jsx)("dt", {
                                    children: "Example"
                                  }), (0, jQ.jsx)("dd", {
                                    children: (0, jQ.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: WQ.example
                                    })
                                  })]
                                })]
                              }), WQ.description.length > 0 && (0, jQ.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, jQ.jsx)(IX, {
                                  blocks: WQ.description
                                })
                              }), (0, jQ.jsx)(BT, {
                                pageId: XQ,
                                anchor: wQ
                              })]
                            })
                          }

                          function pT(QQ) {
                            let {
                              section: WQ
                            } = QQ;
                            return (0, jQ.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, jQ.jsx)(PX, {
                                level: 2,
                                text: WQ.heading.text,
                                anchor: WQ.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, jQ.jsx)("div", {
                                className: "DocsProse",
                                children: (0, jQ.jsx)(IX, {
                                  blocks: WQ.blocks
                                })
                              })]
                            })
                          }

                          function GT(QQ) {
                            let {
                              section: WQ
                            } = QQ;
                            return (0, jQ.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, jQ.jsx)(PX, {
                                level: WQ.heading.level,
                                text: WQ.heading.text,
                                anchor: WQ.heading.anchor
                              }), (0, jQ.jsx)(IX, {
                                blocks: WQ.blocks
                              })]
                            })
                          }
                          const UT = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function bT(QQ) {
                            let {
                              page: WQ,
                              section: XQ
                            } = QQ;
                            if ("methods" === WQ.layout || "callbacks" === WQ.layout) return (0, jQ.jsx)(yT, {
                              method: vX(XQ),
                              pageId: WQ.id,
                              anchor: XQ.heading.anchor,
                              isCallback: "callbacks" === WQ.layout
                            });
                            if ("settings" === WQ.layout) {
                              const QQ = function(QQ) {
                                const WQ = {
                                  name: QQ.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const wQ of QQ.blocks) {
                                  var XQ;
                                  if (bX(wQ)) continue;
                                  const QQ = "paragraph" === wQ.kind ? wQ.text.match(dX) : null;
                                  if (!QQ) {
                                    WQ.description.push(wQ);
                                    continue
                                  }
                                  const qQ = null !== (XQ = UX(QQ[2])) && void 0 !== XQ ? XQ : QQ[2];
                                  "Type" === QQ[1] ? WQ.type = qQ : "Default" === QQ[1] ? WQ.defaultValue = qQ : "" !== qQ && (WQ.example = qQ)
                                }
                                return WQ.type ? WQ : null
                              }(XQ);
                              if (QQ) return (0, jQ.jsx)(DT, {
                                setting: QQ,
                                pageId: WQ.id,
                                anchor: XQ.heading.anchor,
                                setterSnippet: WQ.setterSnippet
                              })
                            }
                            return "snippets" === WQ.layout ? (0, jQ.jsx)(pT, {
                              section: XQ
                            }) : "changelog" === WQ.layout ? (0, jQ.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, jQ.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, jQ.jsx)(PX, {
                                  level: 2,
                                  text: XQ.heading.text,
                                  anchor: XQ.heading.anchor
                                })
                              }), (0, jQ.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, jQ.jsx)(IX, {
                                  blocks: HX(XQ.blocks)
                                })
                              })]
                            }) : WQ.gallery ? (0, jQ.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, jQ.jsx)(PX, {
                                level: XQ.heading.level,
                                text: XQ.heading.text,
                                anchor: XQ.heading.anchor
                              }), (0, jQ.jsx)(aw, {
                                kind: WQ.gallery,
                                content: SQ(WQ),
                                blocks: XQ.blocks
                              })]
                            }) : (0, jQ.jsx)(GT, {
                              section: XQ
                            })
                          }

                          function vT(QQ) {
                            let {
                              page: WQ,
                              onTocChange: XQ
                            } = QQ;
                            const qQ = SQ(WQ),
                              [TQ, zQ] = (0, wQ.useState)(""),
                              sQ = "article" !== WQ.layout,
                              FQ = yX(WQ.gallery) ? WQ.gallery : null,
                              PQ = null !== FQ,
                              gQ = TQ.trim().toLowerCase(),
                              JQ = (0, wQ.useRef)(null),
                              rQ = (0, wQ.useCallback)((QQ => {
                                var WQ;
                                null === (WQ = JQ.current) || void 0 === WQ || WQ.preview(QQ)
                              }), []),
                              IQ = (0, wQ.useMemo)((() => {
                                if (!WQ.hasParticlePlayground) return [];
                                const QQ = iX(qQ.intro).find((QQ => "names" === QQ.kind && !QQ.names.some((QQ => null !== fX(QQ.name)))));
                                return "names" === (null === QQ || void 0 === QQ ? void 0 : QQ.kind) ? QQ.names.map((QQ => QQ.name)) : []
                              }), [WQ, qQ]),
                              BQ = (0, wQ.useMemo)((() => {
                                if (!WQ.hasTextPlayground) return [];
                                const QQ = qQ.sections.flatMap((QQ => QQ.blocks.flatMap((QQ => {
                                  var WQ;
                                  return (null !== (WQ = hX(QQ)) && void 0 !== WQ ? WQ : []).flatMap((QQ => fW(QQ.name) ? [QQ.name] : []))
                                }))));
                                return [...new Set(QQ)]
                              }), [WQ, qQ]),
                              yQ = (0, wQ.useMemo)((() => gQ ? qQ.sections.filter((QQ => function(QQ, WQ) {
                                return !!QQ.heading.text.toLowerCase().includes(WQ) || QQ.blocks.some((QQ => (0, dQ.j)(QQ).toLowerCase().includes(WQ)))
                              }(QQ, gQ))) : qQ.sections), [qQ, gQ]),
                              VQ = (0, wQ.useMemo)((() => function(QQ, WQ) {
                                return "article" !== QQ.layout ? WQ.map((QQ => ({
                                  anchor: QQ.heading.anchor,
                                  text: QQ.heading.text,
                                  level: 2
                                }))) : WQ.flatMap((QQ => {
                                  const WQ = QQ.blocks.flatMap((QQ => "heading" === QQ.kind && 3 === QQ.level ? [{
                                    anchor: QQ.anchor,
                                    text: QQ.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: QQ.heading.anchor,
                                    text: QQ.heading.text,
                                    level: 2
                                  }, ...WQ]
                                }))
                              }(WQ, yQ)), [WQ, yQ]);
                            return (0, wQ.useEffect)((() => {
                              XQ(VQ)
                            }), [VQ, XQ]), (0, jQ.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, jQ.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, jQ.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: qQ.title || WQ.title
                                }), (0, jQ.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: WQ.summary
                                }), (0, jQ.jsx)(Ow, {
                                  page: WQ
                                }), sQ && (0, jQ.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, jQ.jsxs)("span", {
                                    children: [(0, jQ.jsx)("strong", {
                                      children: qQ.sections.length
                                    }), " ", UT[WQ.layout]]
                                  })
                                })]
                              }), "" === WQ.slug && (0, jQ.jsx)(hw, {}), FQ && (0, jQ.jsx)(Ew, {
                                kind: FQ
                              }, FQ), WQ.hasParticlePlayground && (0, jQ.jsx)(Pq, {
                                ref: JQ,
                                textures: IQ
                              }), !PQ && qQ.intro.length > 0 && (0, jQ.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: WQ.gallery ? (0, jQ.jsx)(Vw.Provider, {
                                  value: WQ.hasParticlePlayground ? rQ : null,
                                  children: (0, jQ.jsx)(aw, {
                                    kind: WQ.gallery,
                                    content: qQ,
                                    blocks: qQ.intro
                                  })
                                }) : (0, jQ.jsx)(IX, {
                                  blocks: HX(qQ.intro)
                                })
                              }), WQ.hasTextPlayground && (0, jQ.jsx)(Hq, {
                                fontAwesomeIcons: BQ
                              }), WQ.hasVoicePlayground && (0, jQ.jsx)(mq, {}), WQ.childPageIds && (0, jQ.jsx)(hw, {
                                cards: WQ.childPageIds.map((QQ => ({
                                  pageId: QQ
                                }))),
                                label: WQ.title
                              }), sQ && (0, jQ.jsx)(pX, {
                                className: "DocsFilterBar",
                                value: TQ,
                                placeholder: `Filter ${qQ.sections.length} ${UT[WQ.layout]}\u2026`,
                                label: `Filter ${UT[WQ.layout]}`,
                                onChange: zQ,
                                count: gQ ? {
                                  visible: yQ.length,
                                  total: qQ.sections.length
                                } : null
                              }), !PQ && (0, jQ.jsxs)("div", {
                                className: `DocsSections Layout-${WQ.layout}`,
                                children: [yQ.map((QQ => (0, jQ.jsx)(bT, {
                                  page: WQ,
                                  section: QQ
                                }, QQ.heading.anchor))), 0 === yQ.length && (0, jQ.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", UT[WQ.layout], " match \u201c", TQ, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const dT = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function HT(QQ) {
                            let {
                              entry: WQ,
                              isActive: XQ,
                              onNavigate: wQ,
                              label: qQ,
                              children: zQ
                            } = QQ;
                            return (0, jQ.jsx)("a", {
                              href: `#${WQ.anchor}`,
                              "aria-label": qQ,
                              className: TQ()(`Level${WQ.level}`, {
                                Active: XQ
                              }),
                              "aria-current": XQ ? "location" : void 0,
                              onClick: QQ => {
                                QQ.preventDefault(), wQ(WQ.anchor)
                              },
                              children: zQ
                            })
                          }

                          function aT(QQ) {
                            let {
                              toc: WQ,
                              activeAnchor: XQ,
                              onNavigate: qQ
                            } = QQ;
                            const zQ = Math.max(0, WQ.findIndex((QQ => QQ.anchor === XQ))),
                              sQ = (0, wQ.useRef)(null),
                              FQ = (0, wQ.useRef)(!1);
                            (0, wQ.useEffect)((() => {
                              var QQ, XQ;
                              const wQ = null === (QQ = sQ.current) || void 0 === QQ ? void 0 : QQ.closest(".DocsToc"),
                                qQ = null === (XQ = sQ.current) || void 0 === XQ ? void 0 : XQ.querySelector(".DocsTimelineNotch.Active");
                              if (!wQ || !qQ) return;
                              let TQ = 0;
                              if (zQ === WQ.length - 1) TQ = wQ.scrollHeight;
                              else if (zQ > 0) {
                                const QQ = wQ.getBoundingClientRect(),
                                  WQ = qQ.getBoundingClientRect();
                                TQ = wQ.scrollTop + WQ.top + WQ.height / 2 - (QQ.top + wQ.clientHeight / 2)
                              }
                              wQ.scrollTo({
                                top: TQ,
                                behavior: FQ.current ? "smooth" : "auto"
                              }), FQ.current = !0
                            }), [zQ, WQ.length]);
                            const PQ = [];
                            return WQ.forEach(((QQ, WQ) => {
                              var XQ, wQ, qQ;
                              const TQ = function(QQ) {
                                  const WQ = QQ.trim().match(dT);
                                  return WQ ? {
                                    day: WQ[1],
                                    month: `${WQ[2]} ${WQ[3]}`
                                  } : null
                                }(QQ.text),
                                zQ = null !== (XQ = null === TQ || void 0 === TQ ? void 0 : TQ.month) && void 0 !== XQ ? XQ : null;
                              null !== zQ && (null === (wQ = PQ.at(-1)) || void 0 === wQ ? void 0 : wQ.month) === zQ || PQ.push({
                                month: zQ,
                                entries: []
                              }), PQ.at(-1).entries.push({
                                entry: QQ,
                                day: null !== (qQ = null === TQ || void 0 === TQ ? void 0 : TQ.day) && void 0 !== qQ ? qQ : null,
                                index: WQ
                              })
                            })), (0, jQ.jsx)("ol", {
                              ref: sQ,
                              className: "DocsTimeline",
                              children: PQ.map((QQ => {
                                let {
                                  month: WQ,
                                  entries: XQ
                                } = QQ;
                                return (0, jQ.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [WQ && (0, jQ.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: WQ
                                  }), (0, jQ.jsx)("ol", {
                                    children: XQ.map((QQ => {
                                      let {
                                        entry: WQ,
                                        day: XQ,
                                        index: wQ
                                      } = QQ;
                                      return (0, jQ.jsx)("li", {
                                        className: TQ()("DocsTimelineNotch", {
                                          Passed: wQ < zQ,
                                          Active: wQ === zQ
                                        }),
                                        children: (0, jQ.jsx)(HT, {
                                          entry: WQ,
                                          isActive: wQ === zQ,
                                          onNavigate: qQ,
                                          label: WQ.text,
                                          children: (0, jQ.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== XQ && void 0 !== XQ ? XQ : WQ.text
                                          })
                                        })
                                      }, WQ.anchor)
                                    }))
                                  })]
                                }, XQ[0].entry.anchor)
                              }))
                            })
                          }

                          function lT(QQ) {
                            let {
                              isChangelog: WQ,
                              toc: XQ,
                              activeAnchor: wQ,
                              onNavigate: qQ
                            } = QQ;
                            return 0 === XQ.length ? null : (0, jQ.jsxs)(jQ.Fragment, {
                              children: [(0, jQ.jsx)("div", {
                                className: "DocsTocTitle",
                                children: WQ ? "Updates" : "On this page"
                              }), WQ ? (0, jQ.jsx)(aT, {
                                toc: XQ,
                                activeAnchor: wQ,
                                onNavigate: qQ
                              }) : (0, jQ.jsx)("ul", {
                                children: XQ.map((QQ => (0, jQ.jsx)("li", {
                                  children: (0, jQ.jsx)(HT, {
                                    entry: QQ,
                                    isActive: QQ.anchor === wQ,
                                    onNavigate: qQ,
                                    children: QQ.text.replace(/`/g, "")
                                  })
                                }, QQ.anchor)))
                              })]
                            })
                          }
                          const hT = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            iT = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            cT = 20,
                            AT = 10,
                            RT = 40,
                            ET = 120;
                          let CT;

                          function uT(QQ) {
                            const WQ = QQ.gallery;
                            if (!WQ) return [];
                            if (yX(WQ)) return function(QQ) {
                              return DX(QQ).entries.map((QQ => QQ.name))
                            }(WQ).map((XQ => ({
                              page: QQ,
                              anchor: AX(WQ, XQ),
                              title: XQ,
                              kind: iT[WQ],
                              text: "",
                              listedUnder: QQ.title
                            })));
                            const XQ = SQ(QQ);
                            return (0, dQ.t)(XQ).flatMap((wQ => {
                              const qQ = wQ.heading ? `${QQ.title} \u203a ${wQ.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : QQ.title;
                              return EX(WQ, XQ, wQ.blocks).flatMap((XQ => "names" !== XQ.kind ? [] : XQ.names.map((wQ => {
                                const TQ = XQ.isSongs ? "Song" : iT[WQ];
                                return {
                                  page: QQ,
                                  anchor: wQ.anchor,
                                  title: wQ.name,
                                  kind: TQ,
                                  text: "",
                                  listedUnder: qQ
                                }
                              }))))
                            }))
                          }

                          function LT(QQ, WQ, XQ) {
                            const wQ = QQ.title.toLowerCase();
                            let qQ = 0;
                            if (wQ === WQ) qQ = 100;
                            else if (wQ.startsWith(WQ)) qQ = 80;
                            else if (wQ.includes(WQ)) qQ = 60;
                            else if (XQ.every((QQ => wQ.includes(QQ)))) qQ = 45;
                            else {
                              if (!QQ.text.toLowerCase().includes(WQ)) return 0;
                              qQ = 20
                            }
                            return qQ - Math.min(wQ.length / 10, 9) + ("Page" === QQ.kind ? 8 : "Method" === QQ.kind ? 3 : 0) - (QQ.listedUnder ? cT : 0)
                          }

                          function kT(QQ, WQ) {
                            const XQ = QQ.toLowerCase().indexOf(WQ),
                              wQ = Math.max(0, XQ - ET / 3);
                            return `${wQ>0?"\u2026":""}${QQ.slice(wQ,wQ+ET)}${wQ+ET<QQ.length?"\u2026":""}`
                          }

                          function fT(QQ) {
                            let {
                              text: WQ,
                              query: XQ
                            } = QQ;
                            const wQ = XQ ? WQ.toLowerCase().indexOf(XQ) : -1;
                            return -1 === wQ ? (0, jQ.jsx)(jQ.Fragment, {
                              children: WQ
                            }) : (0, jQ.jsxs)(jQ.Fragment, {
                              children: [WQ.slice(0, wQ), (0, jQ.jsx)("mark", {
                                children: WQ.slice(wQ, wQ + XQ.length)
                              }), WQ.slice(wQ + XQ.length)]
                            })
                          }

                          function ST(QQ) {
                            let {
                              basePath: WQ,
                              onClose: XQ
                            } = QQ;
                            const qQ = (0, sQ.z)(),
                              [zQ, FQ] = (0, wQ.useState)(""),
                              [PQ, gQ] = (0, wQ.useState)(0),
                              JQ = (0, wQ.useRef)(null),
                              rQ = (0, wQ.useRef)(null),
                              IQ = zQ.trim().toLowerCase(),
                              BQ = (0, wQ.useMemo)((() => {
                                const QQ = (CT || (CT = uQ.flatMap((QQ => {
                                  const WQ = SQ(QQ);
                                  return [{
                                    page: QQ,
                                    anchor: "",
                                    title: QQ.title,
                                    kind: "Page",
                                    text: QQ.summary
                                  }, ...WQ.sections.flatMap((WQ => {
                                    const XQ = WQ.blocks.filter((QQ => "paragraph" === QQ.kind)).map(dQ.j).join(" ").replace(/[`*]/g, ""),
                                      wQ = {
                                        page: QQ,
                                        anchor: WQ.heading.anchor,
                                        title: WQ.heading.text.replace(/`/g, ""),
                                        kind: hT[QQ.layout],
                                        text: XQ
                                      },
                                      qQ = WQ.blocks.flatMap((WQ => "article" === QQ.layout && "heading" === WQ.kind && 3 === WQ.level ? [{
                                        page: QQ,
                                        anchor: WQ.anchor,
                                        title: WQ.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: wQ.title
                                      }] : []));
                                    return [wQ, ...qQ]
                                  })), ...uT(QQ)]
                                }))), CT);
                                if (!IQ) return QQ.filter((QQ => "Page" === QQ.kind));
                                const WQ = IQ.split(/\s+/);
                                let XQ = 0;
                                return QQ.map((QQ => ({
                                  entry: QQ,
                                  score: LT(QQ, IQ, WQ)
                                }))).filter((QQ => QQ.score > 0)).sort(((QQ, WQ) => WQ.score - QQ.score)).filter((QQ => !QQ.entry.listedUnder || (XQ++, XQ <= AT))).slice(0, RT).map((QQ => QQ.entry))
                              }), [IQ]);
                            (0, wQ.useEffect)((() => {
                              gQ(0)
                            }), [IQ]), (0, wQ.useEffect)((() => {
                              const QQ = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === QQ || void 0 === QQ || QQ.focus()
                              }
                            }), []), (0, wQ.useEffect)((() => {
                              var QQ, WQ;
                              null === (QQ = JQ.current) || void 0 === QQ || null === (WQ = QQ.querySelector(".Active")) || void 0 === WQ || WQ.scrollIntoView({
                                block: "nearest"
                              })
                            }), [PQ]);
                            const VQ = QQ => {
                              qQ(nQ(WQ, QQ.page, QQ.anchor)), XQ()
                            };
                            return (0, jQ.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: QQ => {
                                QQ.target === QQ.currentTarget && XQ()
                              },
                              children: (0, jQ.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: QQ => {
                                  QQ.target !== rQ.current && QQ.preventDefault()
                                },
                                onKeyDown: QQ => {
                                  if ("Escape" === QQ.key) XQ();
                                  else if ("Tab" === QQ.key) {
                                    var WQ;
                                    QQ.preventDefault(), null === (WQ = rQ.current) || void 0 === WQ || WQ.focus()
                                  }
                                },
                                children: [(0, jQ.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, jQ.jsx)(yQ, {
                                    name: "magnifying-glass"
                                  }), (0, jQ.jsx)("input", {
                                    ref: rQ,
                                    autoFocus: !0,
                                    value: zQ,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": BQ.length > 0 ? `DocsSearchResult-${PQ}` : void 0,
                                    onChange: QQ => {
                                      FQ(QQ.target.value)
                                    },
                                    onKeyDown: QQ => {
                                      if ("ArrowDown" === QQ.key || "ArrowUp" === QQ.key) {
                                        QQ.preventDefault();
                                        const WQ = "ArrowDown" === QQ.key ? 1 : -1;
                                        gQ((PQ + WQ + BQ.length) % Math.max(BQ.length, 1))
                                      } else "Enter" === QQ.key && BQ[PQ] && VQ(BQ[PQ])
                                    }
                                  }), (0, jQ.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, jQ.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: JQ,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!IQ && (0, jQ.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), BQ.map(((QQ, WQ) => {
                                    var XQ;
                                    return (0, jQ.jsxs)("li", {
                                      id: `DocsSearchResult-${WQ}`,
                                      role: "option",
                                      "aria-selected": WQ === PQ,
                                      className: TQ()("DocsSearchResult", {
                                        Active: WQ === PQ
                                      }),
                                      onMouseMove: () => {
                                        gQ(WQ)
                                      },
                                      onClick: () => {
                                        VQ(QQ)
                                      },
                                      children: [(0, jQ.jsx)(yQ, {
                                        name: QQ.page.icon
                                      }), (0, jQ.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, jQ.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, jQ.jsx)(fT, {
                                            text: QQ.title,
                                            query: IQ
                                          })
                                        }), QQ.text && (0, jQ.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, jQ.jsx)(fT, {
                                            text: kT(QQ.text, IQ),
                                            query: IQ
                                          })
                                        })]
                                      }), (0, jQ.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === QQ.kind ? "Page" : null !== (XQ = QQ.listedUnder) && void 0 !== XQ ? XQ : `${QQ.kind} \xb7 ${QQ.page.title}`
                                      })]
                                    }, `${QQ.page.id}#${QQ.anchor}`)
                                  })), IQ && 0 === BQ.length && (0, jQ.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", zQ, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function tT(QQ, WQ) {
                            if (WQ < 10) return `${QQ.toFixed(1)}s`;
                            const XQ = Math.floor(QQ);
                            return `${Math.floor(XQ/60)}:${String(XQ%60).padStart(2,"0")}`
                          }

                          function oT() {
                            const QQ = gw((QQ => QQ.track)),
                              WQ = gw((QQ => QQ.volume)),
                              [XQ, qQ] = (0, wQ.useState)(0),
                              zQ = (0, wQ.useRef)(Ww);
                            if ((0, wQ.useEffect)((() => {
                                if (!QQ) return;
                                if (qQ(jw()), "playing" !== QQ.status) return;
                                let WQ = 0;
                                const XQ = () => {
                                  qQ(jw()), WQ = requestAnimationFrame(XQ)
                                };
                                return WQ = requestAnimationFrame(XQ), () => {
                                  cancelAnimationFrame(WQ)
                                }
                              }), [QQ]), !QQ) return null;
                            const sQ = "paused" !== QQ.status,
                              FQ = Math.min(XQ, QQ.duration);
                            return (0, jQ.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, jQ.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, jQ.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": sQ ? `Pause ${QQ.name}` : `Play ${QQ.name}`,
                                  onClick: Iw,
                                  children: (0, jQ.jsx)(yQ, {
                                    name: sQ ? "pause" : "play"
                                  })
                                }), (0, jQ.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, jQ.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, jQ.jsx)("code", {
                                      children: QQ.name
                                    }), (0, jQ.jsx)("span", {
                                      children: QQ.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, jQ.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, jQ.jsx)("span", {
                                      children: tT(FQ, QQ.duration)
                                    }), (0, jQ.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: QQ.duration || 1,
                                      step: .01,
                                      value: FQ,
                                      disabled: 0 === QQ.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${tT(FQ,QQ.duration)} of ${tT(QQ.duration,QQ.duration)}`,
                                      onChange: QQ => {
                                        const WQ = Number(QQ.target.value);
                                        ! function(QQ) {
                                          var WQ;
                                          zw = QQ, null === (WQ = qw) || void 0 === WQ || WQ.seek(QQ)
                                        }(WQ), qQ(WQ)
                                      }
                                    }), (0, jQ.jsx)("span", {
                                      children: QQ.duration > 0 ? tT(QQ.duration, QQ.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, jQ.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, jQ.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === WQ ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === WQ ? Bw(zQ.current) : (zQ.current = WQ, Bw(0))
                                    },
                                    children: (0, jQ.jsx)(yQ, {
                                      name: "volume",
                                      className: TQ()({
                                        Muted: 0 === WQ
                                      })
                                    })
                                  }), (0, jQ.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: WQ,
                                    "aria-label": "Volume",
                                    onChange: QQ => {
                                      Bw(Number(QQ.target.value))
                                    }
                                  })]
                                }), (0, jQ.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var WQ;
                                    null === (WQ = document.querySelector(`[data-docs-track="${CSS.escape(Xw(QQ.name,QQ.isSong))}"]`)) || void 0 === WQ || WQ.focus(), yw()
                                  },
                                  children: (0, jQ.jsx)(yQ, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var eT = XQ(43);
                          const nT = "docsTheme",
                            xT = window.matchMedia("(prefers-color-scheme: light)");

                          function YT(QQ) {
                            let {
                              theme: WQ,
                              onChange: XQ
                            } = QQ;
                            const wQ = "dark" === WQ ? "light" : "dark";
                            return (0, jQ.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${wQ} theme`,
                              title: `Switch to ${wQ} theme`,
                              onClick: () => {
                                XQ(wQ)
                              },
                              children: (0, jQ.jsx)(yQ, {
                                name: "dark" === WQ ? "moon" : "sun"
                              })
                            })
                          }
                          const NT = "https://github.com/Bloxdy/code-api",
                            ZT = "https://discord.gg/playbloxd",
                            OT = 180,
                            KT = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function mT(QQ) {
                            let {
                              basePath: WQ,
                              activePageId: XQ,
                              onNavigate: wQ
                            } = QQ;
                            return (0, jQ.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: LQ.map((QQ => (0, jQ.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, jQ.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: QQ.title
                                }), QQ.pageIds.map((QQ => {
                                  var qQ;
                                  const sQ = kQ(QQ);
                                  return (0, jQ.jsxs)(zQ.d, {
                                    to: nQ(WQ, sQ),
                                    className: TQ()("DocsNavLink", {
                                      Active: sQ.id === XQ
                                    }),
                                    "aria-current": sQ.id === XQ ? "page" : void 0,
                                    onClick: wQ,
                                    children: [(0, jQ.jsx)(yQ, {
                                      name: sQ.icon
                                    }), (0, jQ.jsx)("span", {
                                      children: null !== (qQ = sQ.navTitle) && void 0 !== qQ ? qQ : sQ.title
                                    })]
                                  }, sQ.id)
                                }))]
                              }, QQ.title)))
                            })
                          }

                          function MT(QQ) {
                            let {
                              basePath: WQ,
                              pageId: XQ
                            } = QQ;
                            const wQ = LQ.flatMap((QQ => QQ.pageIds)),
                              qQ = wQ.indexOf(XQ),
                              TQ = qQ > 0 ? kQ(wQ[qQ - 1]) : null,
                              sQ = qQ < wQ.length - 1 ? kQ(wQ[qQ + 1]) : null;
                            return (0, jQ.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [TQ ? (0, jQ.jsxs)(zQ.d, {
                                className: "DocsPagerLink Previous",
                                to: nQ(WQ, TQ),
                                children: [(0, jQ.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, jQ.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: TQ.title
                                })]
                              }) : (0, jQ.jsx)("span", {}), sQ && (0, jQ.jsxs)(zQ.d, {
                                className: "DocsPagerLink Next",
                                to: nQ(WQ, sQ),
                                children: [(0, jQ.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, jQ.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: sQ.title
                                })]
                              })]
                            })
                          }

                          function Qz(QQ) {
                            let {
                              basePath: WQ,
                              embedded: XQ = !1
                            } = QQ;
                            const {
                              pageSlug: qQ = ""
                            } = (0, sQ.E)(), PQ = (0, sQ.w)(), gQ = (0, sQ.z)(), JQ = (rQ = qQ, uQ.find((QQ => QQ.slug === rQ)));
                            var rQ;
                            const [IQ, BQ] = function() {
                              const [QQ, WQ] = (0, wQ.useState)((() => {
                                const QQ = eT.i.getItem(nT);
                                return "dark" === QQ || "light" === QQ ? QQ : null
                              })), [XQ, qQ] = (0, wQ.useState)(xT.matches ? "light" : "dark");
                              return (0, wQ.useEffect)((() => {
                                const QQ = () => {
                                  qQ(xT.matches ? "light" : "dark")
                                };
                                return xT.addEventListener("change", QQ), () => {
                                  xT.removeEventListener("change", QQ)
                                }
                              }), []), [null !== QQ && void 0 !== QQ ? QQ : XQ, QQ => {
                                eT.i.setItem(nT, QQ), WQ(QQ)
                              }]
                            }(), [VQ, DQ] = (0, wQ.useState)(null), [pQ, GQ] = (0, wQ.useState)(!1), [UQ, bQ] = (0, wQ.useState)(!1), [vQ, HQ] = (0, wQ.useState)([]), aQ = function(QQ, WQ) {
                              const [XQ, qQ] = (0, wQ.useState)("");
                              return (0, wQ.useEffect)((() => {
                                if (!WQ) return;
                                let XQ = 0;
                                const wQ = () => {
                                    var wQ, TQ;
                                    XQ = 0;
                                    const zQ = WQ.getBoundingClientRect().top + OT;
                                    let sQ = null !== (wQ = null === (TQ = QQ[0]) || void 0 === TQ ? void 0 : TQ.anchor) && void 0 !== wQ ? wQ : "";
                                    for (const WQ of QQ) {
                                      const QQ = document.getElementById(WQ.anchor);
                                      QQ && QQ.getBoundingClientRect().top <= zQ && (sQ = WQ.anchor)
                                    }
                                    WQ.scrollTop + WQ.clientHeight >= WQ.scrollHeight - 2 && WQ.scrollTop > 0 && QQ.length > 0 && (sQ = QQ[QQ.length - 1].anchor), qQ(sQ)
                                  },
                                  TQ = () => {
                                    XQ || (XQ = requestAnimationFrame(wQ))
                                  };
                                return wQ(), WQ.addEventListener("scroll", TQ, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(XQ), WQ.removeEventListener("scroll", TQ)
                                }
                              }), [QQ, WQ]), XQ
                            }(vQ, VQ), lQ = "" === qQ && PQ.hash ? function(QQ) {
                              const WQ = (0, dQ.p)(QQ);
                              if (tQ(kQ("welcome"), WQ)) return null;
                              const XQ = Object.hasOwn(eQ, WQ) ? eQ[WQ] : null;
                              if (XQ) return {
                                page: kQ(XQ.pageId),
                                anchor: XQ.anchor
                              };
                              const wQ = kQ("readme");
                              return tQ(wQ, WQ) ? {
                                page: wQ,
                                anchor: WQ
                              } : oQ(`#${WQ}`)
                            }(PQ.hash) : null;
                            (0, wQ.useEffect)((() => (FQ.b.set({
                              musicOnFromPage: !1
                            }), () => {
                              FQ.b.set({
                                musicOnFromPage: !0
                              }), yw()
                            })), []), (0, wQ.useEffect)((() => {
                              const QQ = QQ => {
                                const WQ = QQ.target;
                                if (WQ.closest(".DocsTextDialog")) return;
                                const XQ = WQ.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(WQ.tagName);
                                "k" === QQ.key && (QQ.metaKey || QQ.ctrlKey) || "/" === QQ.key && !XQ ? (QQ.preventDefault(), bQ(!0)) : "Escape" === QQ.key && GQ(!1)
                              };
                              return window.addEventListener("keydown", QQ), () => {
                                window.removeEventListener("keydown", QQ)
                              }
                            }), []);
                            const hQ = (0, wQ.useRef)(null);
                            (0, wQ.useLayoutEffect)((() => {
                              var QQ, WQ;
                              if (!VQ) return;
                              const XQ = hQ.current === PQ.pathname;
                              hQ.current = PQ.pathname;
                              const wQ = (0, dQ.p)(PQ.hash),
                                qQ = wQ ? document.getElementById(wQ) : null;
                              if (null === (QQ = VQ.querySelector(".DocsTargeted")) || void 0 === QQ || QQ.classList.remove("DocsTargeted"), null === qQ || void 0 === qQ || null === (WQ = qQ.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === WQ || WQ.classList.add("DocsTargeted"), qQ) {
                                var TQ;
                                const QQ = qQ.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (TQ = qQ.closest(".DocsChangelogEntry")) && void 0 !== TQ ? TQ : qQ).scrollIntoView({
                                  block: QQ ? "center" : "start",
                                  behavior: XQ ? "smooth" : "auto"
                                })
                              } else XQ || VQ.scrollTo({
                                top: 0
                              })
                            }), [VQ, PQ.pathname, PQ.hash, PQ.key]);
                            const iQ = (0, wQ.useCallback)((() => {
                                GQ(!1)
                              }), []),
                              cQ = (0, wQ.useCallback)((QQ => {
                                gQ({
                                  hash: QQ
                                })
                              }), [gQ]);
                            if (lQ) return (0, jQ.jsx)(sQ.b, {
                              replace: !0,
                              to: nQ(WQ, lQ.page, lQ.anchor)
                            });
                            if (!JQ) return (0, jQ.jsx)(sQ.b, {
                              replace: !0,
                              to: WQ
                            });
                            const AQ = XQ ? "div" : "main";
                            return (0, jQ.jsx)(IW.Provider, {
                              value: WQ,
                              children: (0, jQ.jsx)(jW.Provider, {
                                value: VQ,
                                children: (0, jQ.jsxs)("div", {
                                  ref: DQ,
                                  className: TQ()("DocsSite", {
                                    Embedded: XQ,
                                    NavOpen: pQ
                                  }),
                                  "data-theme": IQ,
                                  children: [(0, jQ.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, jQ.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": pQ ? "Close menu" : "Open menu",
                                      "aria-expanded": pQ,
                                      onClick: () => {
                                        GQ(!pQ)
                                      },
                                      children: (0, jQ.jsx)(yQ, {
                                        name: pQ ? "cross" : "menu"
                                      })
                                    }), (0, jQ.jsxs)(zQ.d, {
                                      to: WQ,
                                      className: "DocsBrand",
                                      children: [(0, jQ.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, jQ.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, jQ.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, jQ.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        bQ(!0)
                                      },
                                      children: [(0, jQ.jsx)(yQ, {
                                        name: "magnifying-glass"
                                      }), (0, jQ.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, jQ.jsxs)("kbd", {
                                        children: [KT ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, jQ.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, jQ.jsxs)("a", {
                                        href: ZT,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, jQ.jsx)(yQ, {
                                          name: "discord"
                                        }), (0, jQ.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, jQ.jsxs)("a", {
                                        href: NT,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, jQ.jsx)(yQ, {
                                          name: "external-link"
                                        }), (0, jQ.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !XQ && (0, jQ.jsxs)(zQ.d, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, jQ.jsx)(yQ, {
                                          name: "play"
                                        }), (0, jQ.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, jQ.jsx)(YT, {
                                        theme: IQ,
                                        onChange: BQ
                                      })]
                                    })]
                                  }), (0, jQ.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, jQ.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, jQ.jsx)(mT, {
                                        basePath: WQ,
                                        activePageId: JQ.id,
                                        onNavigate: iQ
                                      })
                                    }), (0, jQ.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: iQ
                                    }), (0, jQ.jsxs)(AQ, {
                                      className: "DocsMain",
                                      children: [(0, jQ.jsx)(vT, {
                                        page: JQ,
                                        onTocChange: HQ
                                      }, JQ.id), (0, jQ.jsx)(MT, {
                                        basePath: WQ,
                                        pageId: JQ.id
                                      })]
                                    }), (0, jQ.jsx)("aside", {
                                      className: TQ()("DocsToc", {
                                        Timeline: "changelog" === JQ.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, jQ.jsx)(lT, {
                                        isChangelog: "changelog" === JQ.layout,
                                        toc: vQ,
                                        activeAnchor: aQ,
                                        onNavigate: cQ
                                      })
                                    })]
                                  }), (0, jQ.jsx)(oT, {}), UQ && (0, jQ.jsx)(ST, {
                                    basePath: WQ,
                                    onClose: () => {
                                      bQ(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 5062: (QQ, WQ, XQ) => {
                          XQ.d(WQ, {
                            B: () => rQ,
                            d: () => wQ,
                            g: () => zQ,
                            j: () => yQ,
                            k: () => BQ,
                            m: () => sQ,
                            p: () => qQ,
                            s: () => TQ,
                            t: () => jQ,
                            x: () => IQ
                          });
                          const wQ = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function qQ(QQ) {
                            try {
                              return decodeURIComponent(QQ.slice(1))
                            } catch {
                              return QQ.slice(1)
                            }
                          }

                          function TQ(QQ) {
                            return QQ.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const zQ = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${wQ.source}`, "g");

                          function sQ(QQ, WQ) {
                            return 2 === QQ.length ? WQ.replace(/^ (.*) $/, "$1") : WQ
                          }

                          function FQ(QQ) {
                            return "" === QQ.trim()
                          }

                          function PQ(QQ) {
                            const WQ = [];
                            for (const XQ of QQ.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) WQ.length > 0 && WQ[WQ.length - 1].endsWith("\\") ? WQ[WQ.length - 1] += `|${XQ}` : WQ.push(XQ);
                            return WQ.map((QQ => QQ.trim().replaceAll("\\|", "|")))
                          }
                          const gQ = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function JQ(QQ) {
                            const WQ = [],
                              XQ = [{
                                indent: -1,
                                items: WQ
                              }];
                            let wQ = null;
                            for (const qQ of QQ) {
                              const QQ = qQ.match(gQ);
                              if (!QQ) {
                                wQ && (wQ.text += ` ${qQ.trim()}`);
                                continue
                              }
                              const WQ = QQ[1].replace(/\t/g, "  ").length;
                              for (; WQ <= XQ[XQ.length - 1].indent;) XQ.pop();
                              wQ = {
                                text: QQ[3].trim(),
                                children: []
                              }, XQ[XQ.length - 1].items.push(wQ), XQ.push({
                                indent: WQ,
                                items: wQ.children
                              })
                            }
                            return WQ
                          }

                          function rQ(QQ) {
                            const WQ = QQ.replace(/\r\n/g, "\n").split("\n"),
                              XQ = [];
                            let wQ = 0;
                            for (; wQ < WQ.length;) {
                              const QQ = WQ[wQ];
                              if (FQ(QQ)) {
                                wQ++;
                                continue
                              }
                              const qQ = QQ.match(/^\s*```\s*(\w*)\s*$/);
                              if (qQ) {
                                const QQ = [];
                                for (wQ++; wQ < WQ.length && !/^\s*```\s*$/.test(WQ[wQ]);) QQ.push(WQ[wQ]), wQ++;
                                wQ++, XQ.push({
                                  kind: "code",
                                  lang: qQ[1] || "text",
                                  code: QQ.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const zQ = QQ.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (zQ) {
                                const QQ = zQ[2].trim();
                                XQ.push({
                                  kind: "heading",
                                  level: zQ[1].length,
                                  text: QQ,
                                  anchor: TQ(QQ)
                                }), wQ++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(QQ)) {
                                XQ.push({
                                  kind: "rule"
                                }), wQ++;
                                continue
                              }
                              if (QQ.trim().startsWith("|") && wQ + 1 < WQ.length && /^\s*\|[\s:|-]+\|\s*$/.test(WQ[wQ + 1])) {
                                const qQ = PQ(QQ),
                                  TQ = [];
                                for (wQ += 2; wQ < WQ.length && WQ[wQ].trim().startsWith("|");) TQ.push(PQ(WQ[wQ])), wQ++;
                                XQ.push({
                                  kind: "table",
                                  header: qQ,
                                  rows: TQ
                                });
                                continue
                              }
                              if (QQ.startsWith(">")) {
                                const QQ = [];
                                for (; wQ < WQ.length && WQ[wQ].startsWith(">");) QQ.push(WQ[wQ].replace(/^>\s?/, "")), wQ++;
                                XQ.push({
                                  kind: "quote",
                                  blocks: rQ(QQ.join("\n"))
                                });
                                continue
                              }
                              if (gQ.test(QQ)) {
                                const qQ = [],
                                  TQ = /^\s*\d+\./.test(QQ);
                                for (; wQ < WQ.length && !FQ(WQ[wQ]) && (gQ.test(WQ[wQ]) || /^\s+\S/.test(WQ[wQ]));) qQ.push(WQ[wQ]), wQ++;
                                XQ.push({
                                  kind: "list",
                                  ordered: TQ,
                                  items: JQ(qQ)
                                });
                                continue
                              }
                              const sQ = [];
                              for (; wQ < WQ.length && !FQ(WQ[wQ]) && !/^\s*```/.test(WQ[wQ]) && !/^#{1,6}\s/.test(WQ[wQ]) && !WQ[wQ].startsWith(">") && !gQ.test(WQ[wQ]) && (!WQ[wQ].trim().startsWith("|") || 0 !== sQ.length);) sQ.push(WQ[wQ].trim()), wQ++;
                              0 === sQ.length && (sQ.push(WQ[wQ].trim()), wQ++), XQ.push({
                                kind: "paragraph",
                                text: sQ.join(" ")
                              })
                            }
                            return XQ
                          }

                          function IQ(QQ) {
                            let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const XQ = rQ(QQ);
                            let wQ = "";
                            const qQ = [],
                              TQ = [],
                              zQ = new Map;
                            for (const PQ of XQ) {
                              if ("heading" === PQ.kind) {
                                var sQ;
                                const QQ = (null !== (sQ = zQ.get(PQ.anchor)) && void 0 !== sQ ? sQ : 0) + 1;
                                zQ.set(PQ.anchor, QQ), QQ > 1 && (PQ.anchor = `${PQ.anchor}-${QQ}`)
                              }
                              if ("heading" === PQ.kind && 1 === PQ.level && !wQ) {
                                wQ = PQ.text;
                                continue
                              }
                              if ("heading" === PQ.kind && PQ.level <= WQ) {
                                TQ.push({
                                  heading: PQ,
                                  blocks: []
                                });
                                continue
                              }
                              const QQ = TQ.at(-1);
                              QQ ? QQ.blocks.push(PQ) : qQ.push(PQ)
                            }
                            const FQ = QQ => {
                              for (;
                                "rule" === (null === (WQ = QQ.at(-1)) || void 0 === WQ ? void 0 : WQ.kind);) {
                                var WQ;
                                QQ.pop()
                              }
                            };
                            FQ(qQ);
                            for (const PQ of TQ) FQ(PQ.blocks);
                            return {
                              title: wQ,
                              intro: qQ,
                              sections: TQ
                            }
                          }

                          function jQ(QQ) {
                            return [{
                              heading: null,
                              blocks: QQ.intro
                            }, ...QQ.sections.map((QQ => ({
                              heading: QQ.heading,
                              blocks: QQ.blocks
                            })))]
                          }

                          function BQ(QQ) {
                            return QQ.flatMap((QQ => "code" === QQ.kind ? [QQ] : "quote" === QQ.kind ? BQ(QQ.blocks) : []))
                          }

                          function yQ(QQ) {
                            switch (QQ.kind) {
                              case "heading":
                              case "paragraph":
                                return QQ.text;
                              case "code":
                                return QQ.code;
                              case "table":
                                return [QQ.header, ...QQ.rows].map((QQ => QQ.join(" "))).join(" ");
                              case "list": {
                                const WQ = QQ => QQ.map((QQ => `${QQ.text} ${WQ(QQ.children)}`)).join(" ");
                                return WQ(QQ.items)
                              }
                              case "quote":
                                return QQ.blocks.map(yQ).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 5181: (QQ, WQ, XQ) => {
                          XQ.d(WQ, {
                            e: () => sQ
                          });
                          var wQ = XQ(61),
                            qQ = XQ(382),
                            TQ = XQ(1988),
                            zQ = XQ(1145);

                          function sQ(QQ) {
                            let {
                              text: WQ
                            } = QQ;
                            const XQ = [];
                            let sQ = "";
                            return (0, qQ.gc)(WQ).forEach(((QQ, WQ) => {
                              if ("string" === typeof QQ || !(0, TQ.e)(QQ.icon)) return void(sQ += "string" === typeof QQ ? QQ : QQ.icon);
                              const qQ = Math.max(0, sQ.trimEnd().search(/\S{1,12}$/));
                              XQ.push((0, zQ.jsxs)(wQ.Fragment, {
                                children: [sQ.slice(0, qQ), (0, zQ.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [sQ.slice(qQ), (0, zQ.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": QQ.icon,
                                    children: (0, zQ.jsx)(TQ.d, {
                                      itemName: QQ.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, WQ)), sQ = ""
                            })), XQ.push(sQ), (0, zQ.jsx)(zQ.Fragment, {
                              children: XQ
                            })
                          }
                        }, 5094: (QQ, WQ, XQ) => {
                          XQ.d(WQ, {
                            g: () => DQ,
                            d: () => VQ
                          });
                          var wQ = XQ(61),
                            qQ = XQ(1498),
                            TQ = XQ(1975),
                            zQ = XQ(5103),
                            sQ = XQ(1145);
                          const FQ = (0, wQ.memo)((function(QQ) {
                            let {
                              initialParameters: WQ
                            } = QQ;
                            const XQ = (0, wQ.useRef)(null),
                              qQ = (0, wQ.useRef)(null),
                              FQ = (0, wQ.useRef)(0),
                              PQ = (0, wQ.useRef)(null),
                              gQ = WQ.description,
                              JQ = WQ.WW,
                              {
                                scale: rQ,
                                rotation: IQ
                              } = null !== WQ && void 0 !== WQ ? WQ : {},
                              jQ = (0, zQ.h)();
                            return (0, wQ.useEffect)((() => {
                              const QQ = jQ.onFrame((() => {
                                const QQ = jQ.getState();
                                if (!QQ.isActive || !XQ.current || !qQ.current) return;
                                const WQ = QQ.state;
                                if (XQ.current.value = WQ.progress, WQ.clickCount > FQ.current) {
                                  FQ.current = WQ.clickCount;
                                  const QQ = qQ.current;
                                  QQ.classList.add("pulse"), PQ.current = setTimeout((() => {
                                    QQ.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(PQ.current), QQ()
                              }
                            }), [jQ]), (0, sQ.jsx)(sQ.Fragment, {
                              children: (0, sQ.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== rQ && {
                                    "--scale": rQ
                                  },
                                  ...null !== IQ && {
                                    "--rotation": `${IQ}deg`
                                  }
                                },
                                children: [(0, sQ.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: XQ
                                }), (0, sQ.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: qQ,
                                  children: (0, sQ.jsx)(TQ.e, {
                                    text: [{
                                      icon: JQ
                                    }]
                                  })
                                }), (0, sQ.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, sQ.jsx)(TQ.e, {
                                    text: gQ
                                  })
                                })]
                              })
                            })
                          }));
                          var PQ = XQ(1081),
                            gQ = XQ.n(PQ);
                          const JQ = 2 * Math.PI * 90,
                            rQ = (0, wQ.memo)((function(QQ) {
                              let {
                                initialParameters: WQ
                              } = QQ;
                              const XQ = (0, wQ.useRef)(null),
                                qQ = (0, wQ.useRef)(null),
                                FQ = (0, wQ.useRef)(null),
                                PQ = WQ.label,
                                rQ = WQ.icon,
                                IQ = WQ.qW,
                                {
                                  scale: jQ,
                                  rotation: BQ,
                                  TW: yQ
                                } = null !== WQ && void 0 !== WQ ? WQ : {},
                                VQ = (0, zQ.h)();
                              return (0, wQ.useEffect)((() => {
                                const QQ = VQ.onFrame((() => {
                                  var QQ, WQ;
                                  const wQ = VQ.getState();
                                  if (!wQ.isActive || !qQ.current) return;
                                  const TQ = wQ.state,
                                    zQ = null !== (QQ = TQ.timeRemaining) && void 0 !== QQ ? QQ : 0,
                                    sQ = null !== (WQ = TQ.wW) && void 0 !== WQ ? WQ : 1,
                                    PQ = JQ * (1 - zQ / sQ);
                                  qQ.current.style.strokeDashoffset = `${PQ}`, XQ.current && (XQ.current.style.opacity = zQ > 0 ? "1" : "0"), FQ.current && IQ && (FQ.current.textContent = `${(zQ/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  QQ()
                                }
                              }), [VQ, IQ]), (0, sQ.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: XQ,
                                style: {
                                  ...null !== jQ && {
                                    "--scale": jQ
                                  },
                                  ...null !== BQ && {
                                    "--rotation": `${BQ}deg`
                                  }
                                },
                                children: [(0, sQ.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, sQ.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, sQ.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, sQ.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: JQ,
                                      ref: qQ
                                    })]
                                  }), (0, sQ.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, sQ.jsx)(TQ.e, {
                                      text: [{
                                        icon: rQ
                                      }],
                                      className: gQ()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: yQ
                                      })
                                    })
                                  })]
                                }), (0, sQ.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, sQ.jsx)(TQ.e, {
                                    text: PQ,
                                    className: "QTETimedClickLabelText"
                                  }), IQ && (0, sQ.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: FQ
                                  })]
                                })]
                              })
                            })),
                            IQ = (0, wQ.memo)((function(QQ) {
                              let {
                                initialParameters: WQ
                              } = QQ;
                              const XQ = (0, wQ.useRef)(null),
                                qQ = (0, wQ.useRef)(null),
                                FQ = (0, wQ.useRef)(null),
                                PQ = (0, wQ.useRef)(!1),
                                gQ = WQ.description,
                                JQ = null === WQ || void 0 === WQ ? void 0 : WQ.icon,
                                rQ = (0, zQ.h)();
                              return (0, wQ.useEffect)((() => {
                                const QQ = rQ.onFrame((() => {
                                  const QQ = rQ.getState();
                                  if (!QQ.isActive) return;
                                  const WQ = QQ.state;
                                  if (XQ.current) {
                                    const QQ = 100 * (WQ.catchZonePosition - WQ.sW / 2);
                                    XQ.current.style.left = `${QQ}%`, XQ.current.style.width = 100 * WQ.sW + "%", WQ.isCatching !== PQ.current && (PQ.current = WQ.isCatching, WQ.isCatching ? XQ.current.classList.add("catching") : XQ.current.classList.remove("catching"))
                                  }
                                  qQ.current && (qQ.current.style.left = 100 * WQ.moverPosition + "%"), FQ.current && (FQ.current.value = WQ.progress)
                                }));
                                return () => {
                                  QQ()
                                }
                              }), [rQ]), (0, sQ.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, sQ.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, sQ.jsx)(TQ.e, {
                                    text: gQ
                                  })
                                }), (0, sQ.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: FQ
                                }), (0, sQ.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, sQ.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: XQ
                                  }), (0, sQ.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: qQ,
                                    children: (0, sQ.jsx)("span", {
                                      children: JQ && (0, sQ.jsx)(TQ.e, {
                                        text: [{
                                          icon: JQ,
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
                          var jQ = XQ(663);
                          const BQ = (0, wQ.memo)((function(QQ) {
                              let {
                                initialParameters: WQ
                              } = QQ;
                              const XQ = (0, wQ.useRef)(null),
                                qQ = WQ.label,
                                FQ = WQ.jW,
                                {
                                  icon: PQ,
                                  scale: gQ,
                                  rotation: JQ
                                } = null !== WQ && void 0 !== WQ ? WQ : {},
                                rQ = 100 * (.5 - FQ / 2),
                                IQ = 100 * FQ,
                                BQ = (0, zQ.h)();
                              return (0, wQ.useEffect)((() => {
                                const QQ = BQ.onFrame((() => {
                                  const QQ = BQ.getState();
                                  if (!QQ.isActive || !XQ.current) return;
                                  const WQ = QQ.state;
                                  XQ.current.style.left = 100 * WQ.markerPosition + "%"
                                }));
                                return () => {
                                  QQ()
                                }
                              }), [BQ]), (0, sQ.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, jQ.G)(gQ) && {
                                    "--scale": gQ
                                  },
                                  ...!(0, jQ.G)(JQ) && {
                                    "--rotation": `${JQ}deg`
                                  }
                                },
                                children: [PQ && (0, sQ.jsx)(TQ.e, {
                                  text: [{
                                    icon: PQ
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, sQ.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, sQ.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${rQ}%`,
                                      width: `${IQ}%`
                                    }
                                  }), (0, sQ.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: XQ
                                  })]
                                }), (0, sQ.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, sQ.jsx)(TQ.e, {
                                    text: qQ
                                  })
                                })]
                              })
                            })),
                            yQ = (0, wQ.memo)((function(QQ) {
                              let {
                                initialParameters: WQ
                              } = QQ;
                              const XQ = (0, wQ.useRef)(null),
                                [qQ, FQ] = (0, wQ.useState)((() => new Array(WQ.yW).fill("pending"))),
                                [PQ, gQ] = (0, wQ.useState)((() => {
                                  const QQ = WQ.pW;
                                  return (0, jQ.G)(QQ) || QQ <= 0 ? [] : new Array(QQ).fill("pending")
                                })),
                                JQ = WQ.label,
                                {
                                  icon: rQ
                                } = WQ,
                                IQ = (0, wQ.useRef)(0),
                                BQ = (0, wQ.useRef)(0),
                                yQ = (0, wQ.useRef)([]),
                                VQ = (0, zQ.h)();
                              return (0, wQ.useEffect)((() => {
                                const QQ = VQ.onFrame((() => {
                                  const QQ = VQ.getState();
                                  if (!QQ.isActive || !XQ.current) return;
                                  const WQ = QQ.state,
                                    wQ = 30 + 60 * WQ.outerCircleProgress;
                                  if (XQ.current.setAttribute("r", String(wQ)), !0 === WQ.lastClickResult && WQ.successes > IQ.current) {
                                    XQ.current.classList.remove("QTERhythmClickOuterCircle--miss"), XQ.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const QQ = setTimeout((() => {
                                      var QQ;
                                      null === (QQ = XQ.current) || void 0 === QQ || QQ.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    yQ.current.push(QQ)
                                  } else if (!1 === WQ.lastClickResult && WQ.misses > BQ.current) {
                                    XQ.current.classList.remove("QTERhythmClickOuterCircle--hit"), XQ.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const QQ = setTimeout((() => {
                                      var QQ;
                                      null === (QQ = XQ.current) || void 0 === QQ || QQ.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    yQ.current.push(QQ)
                                  }
                                  WQ.successes === IQ.current && WQ.misses === BQ.current || (IQ.current = WQ.successes, BQ.current = WQ.misses, FQ((QQ => {
                                    const XQ = [...QQ];
                                    for (let wQ = 0; wQ < WQ.yW; wQ++) XQ[wQ] = wQ < WQ.successes ? "success" : "pending";
                                    return XQ
                                  })), gQ((QQ => {
                                    if (0 === QQ.length) return QQ;
                                    const XQ = [...QQ];
                                    for (let wQ = 0; wQ < XQ.length; wQ++) XQ[wQ] = wQ < WQ.misses ? "miss" : "pending";
                                    return XQ
                                  })))
                                }));
                                return () => {
                                  QQ();
                                  for (const QQ of yQ.current) clearTimeout(QQ);
                                  yQ.current = []
                                }
                              }), [VQ]), (0, sQ.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, sQ.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: qQ.map(((QQ, WQ) => (0, sQ.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === QQ ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, WQ)))
                                }), (0, sQ.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, sQ.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, sQ.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, sQ.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: XQ
                                    })]
                                  }), rQ && (0, sQ.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, sQ.jsx)(TQ.e, {
                                      text: [{
                                        icon: rQ
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), PQ.length > 0 && (0, sQ.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: PQ.map(((QQ, WQ) => (0, sQ.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === QQ ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, WQ)))
                                }), (0, sQ.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, sQ.jsx)(TQ.e, {
                                    text: JQ
                                  })
                                })]
                              })
                            }));

                          function VQ(QQ) {
                            let {
                              qte: WQ
                            } = QQ;
                            switch (WQ.type) {
                              case "progressBar":
                                return (0, sQ.jsx)(FQ, {
                                  initialParameters: WQ.parameters
                                });
                              case "timedClick":
                                return (0, sQ.jsx)(rQ, {
                                  initialParameters: WQ.parameters
                                });
                              case "gravityBar":
                                return (0, sQ.jsx)(IQ, {
                                  initialParameters: WQ.parameters
                                });
                              case "precisionBar":
                                return (0, sQ.jsx)(BQ, {
                                  initialParameters: WQ.parameters
                                });
                              case "rhythmClick":
                                return (0, sQ.jsx)(yQ, {
                                  initialParameters: WQ.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const DQ = (0, wQ.memo)((function() {
                            const [QQ, WQ] = (0, wQ.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, qQ.f)("qteStateUpdated", (QQ => {
                              WQ(QQ)
                            })), QQ.isActive && QQ.type ? (0, sQ.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, sQ.jsx)(VQ, {
                                qte: QQ
                              })
                            }) : null
                          }))
                        }, 5103: (QQ, WQ, XQ) => {
                          XQ.d(WQ, {
                            d: () => sQ,
                            h: () => FQ
                          });
                          var wQ = XQ(61),
                            qQ = XQ(1345),
                            TQ = XQ(5111);
                          const zQ = {
                              getState: () => TQ.c.getCurrentState(),
                              onFrame: qQ.q
                            },
                            sQ = (0, wQ.createContext)(zQ);

                          function FQ() {
                            return (0, wQ.useContext)(sQ)
                          }
                        }, 5187: (QQ, WQ, XQ) => {
                          XQ.d(WQ, {
                            c: () => EQ,
                            f: () => RQ
                          });
                          var wQ = XQ(5196),
                            qQ = XQ(382);
                          const TQ = 120,
                            zQ = 260,
                            sQ = 1.15,
                            FQ = 1.2,
                            PQ = 2,
                            gQ = 1.08,
                            JQ = .8,
                            rQ = .95,
                            IQ = 8,
                            jQ = "[\"')\\]\u300d\u300f\uff09]*",
                            BQ = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${jQ}$`),
                            yQ = new RegExp(`[?\uff1f]${jQ}$`),
                            VQ = new RegExp(`[!\uff01]${jQ}$`),
                            DQ = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            pQ = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            GQ = new RegExp(`[${pQ}]`),
                            UQ = new RegExp(`[${pQ}]|[^${pQ}]+`, "g"),
                            bQ = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function vQ(QQ) {
                            let WQ = 2166136261;
                            for (let XQ = 0; XQ < QQ.length; XQ++) WQ ^= QQ.charCodeAt(XQ), WQ = Math.imul(WQ, 16777619);
                            return (WQ >>> 0) / 4294967295 * 2 - 1
                          }

                          function dQ(QQ) {
                            var WQ;
                            if (GQ.test(QQ)) return 1;
                            const XQ = QQ.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              wQ = XQ.replace(/[^0-9]/g, "");
                            if (wQ.length > 0 && !/\p{L}/u.test(XQ)) return Math.min(wQ.length, 4);
                            const qQ = null !== (WQ = XQ.match(bQ)) && void 0 !== WQ ? WQ : [];
                            if (0 === qQ.length) {
                              var TQ, zQ;
                              const QQ = null !== (TQ = null === (zQ = XQ.match(/\p{L}/gu)) || void 0 === zQ ? void 0 : zQ.length) && void 0 !== TQ ? TQ : 0;
                              return 0 === QQ ? 0 : Math.min(Math.max(1, Math.round(QQ / 2.5)), IQ)
                            }
                            const sQ = XQ.replace(/[^\p{L}]/gu, ""),
                              FQ = qQ.length > 1 && "e" === qQ.at(-1) && sQ.endsWith("e") && !sQ.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(QQ.replace(/[^\p{L}]/gu, ""));
                            return Math.min(qQ.length - (FQ ? 1 : 0), IQ)
                          }

                          function HQ(QQ) {
                            return QQ.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function aQ(QQ) {
                            const WQ = QQ.replace(/[^\p{L}]/gu, "");
                            return WQ.length >= 2 && WQ === WQ.toUpperCase() && WQ !== WQ.toLowerCase()
                          }

                          function lQ(QQ, WQ) {
                            var XQ;
                            const IQ = WQ && (0, wQ.l)(WQ),
                              jQ = null !== (XQ = null === IQ || void 0 === IQ ? void 0 : IQ.syllableMs) && void 0 !== XQ ? XQ : wQ.d,
                              pQ = function(QQ) {
                                const WQ = [];
                                for (const wQ of (0, qQ.gc)(QQ))
                                  if ("string" === typeof wQ)
                                    for (const QQ of wQ.split(/(\s+)/)) {
                                      if ("" === QQ) continue;
                                      if (/^\s+$/.test(QQ)) {
                                        WQ.push({
                                          kind: "space",
                                          text: QQ
                                        });
                                        continue
                                      }
                                      if (!GQ.test(QQ)) {
                                        WQ.push({
                                          kind: "word",
                                          text: QQ,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let wQ = !0;
                                      for (const qQ of null !== (XQ = QQ.match(UQ)) && void 0 !== XQ ? XQ : []) {
                                        var XQ;
                                        const QQ = WQ.at(-1);
                                        wQ || "word" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) || GQ.test(qQ) || /[\p{L}\p{N}]/u.test(qQ) ? (wQ || WQ.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), WQ.push({
                                          kind: "word",
                                          text: qQ,
                                          delayMs: 0
                                        }), wQ = !1) : QQ.text += qQ
                                      }
                                    } else WQ.push({
                                      kind: "icon",
                                      text: wQ.icon,
                                      delayMs: 0
                                    });
                                return WQ
                              }(QQ),
                              bQ = [];
                            let lQ = [];
                            for (const wQ of pQ) "space" !== wQ.kind && (lQ.push(wQ), BQ.test(wQ.text) && (bQ.push(lQ), lQ = []));
                            bQ.push(lQ);
                            const hQ = [];
                            let iQ = 0;
                            for (const wQ of bQ) {
                              var cQ, AQ;
                              const QQ = null !== (cQ = null === (AQ = wQ.at(-1)) || void 0 === AQ ? void 0 : AQ.text) && void 0 !== cQ ? cQ : "",
                                WQ = yQ.test(QQ),
                                XQ = VQ.test(QQ),
                                qQ = wQ.map((QQ => "word" === QQ.kind ? dQ(QQ.text) : 1)),
                                pQ = qQ.findLastIndex((QQ => QQ > 0));
                              for (const [yQ, VQ] of wQ.entries()) {
                                const QQ = "word" === VQ.kind,
                                  wQ = qQ[yQ];
                                VQ.delayMs = iQ;
                                for (let qQ = 0; IQ && qQ < wQ; qQ++) {
                                  const {
                                    intonation: TQ
                                  } = IQ;
                                  let zQ = pQ > 0 ? -TQ.declineSemitones * (yQ / pQ) : 0;
                                  zQ += vQ(`${HQ(VQ.text)}|${qQ}`) * TQ.variationSemitones;
                                  const BQ = Math.min(1, TQ.variationSemitones);
                                  let DQ = IQ.glideSemitones,
                                    GQ = 1;
                                  XQ && (zQ += TQ.exclaimLiftSemitones, GQ *= sQ), WQ && yQ === pQ && (zQ += TQ.questionRiseSemitones * (wQ > 1 ? .5 + .5 * qQ / (wQ - 1) : 1), qQ === wQ - 1 && (DQ = Math.abs(DQ) + TQ.questionRiseSemitones / 2)), QQ && aQ(VQ.text) && (zQ += PQ * BQ, GQ *= FQ), wQ > 1 && 0 === qQ && (zQ += JQ * BQ, GQ *= gQ), hQ.push({
                                    atMs: iQ + qQ * jQ,
                                    semitones: zQ,
                                    glideSemitones: DQ,
                                    durationMs: qQ < wQ - 1 ? Math.min(IQ.durationMs, jQ * rQ) : IQ.durationMs,
                                    level: GQ
                                  })
                                }
                                iQ += wQ * jQ + (BQ.test(VQ.text) ? zQ : DQ.test(VQ.text) ? TQ : 0)
                              }
                            }
                            return {
                              pieces: pQ.map((QQ => "space" === QQ.kind ? QQ : "icon" === QQ.kind ? {
                                kind: "icon",
                                icon: QQ.text,
                                delayMs: QQ.delayMs
                              } : {
                                kind: "word",
                                text: QQ.text,
                                delayMs: QQ.delayMs
                              })),
                              blips: hQ
                            }
                          }
                          var hQ = XQ(1226),
                            iQ = XQ(1285),
                            cQ = XQ(2010);

                          function AQ(QQ) {
                            if ("string" === typeof QQ) return QQ;
                            const WQ = iQ.h.get().getCurrentLanguageCode();
                            return (0, hQ.t)(WQ, QQ.translationKey, (0, hQ.r)(QQ.params, cQ.e.shown))
                          }

                          function RQ(QQ) {
                            const WQ = void 0 === QQ.voice ? null : (0, wQ.p)(QQ.voice),
                              XQ = WQ && (0, wQ.l)(WQ);
                            return {
                              plan: lQ(AQ(QQ.line), XQ),
                              synth: XQ
                            }
                          }

                          function EQ(QQ) {
                            const WQ = [];
                            let XQ = [];
                            for (const [qQ, TQ] of QQ.entries()) {
                              var wQ;
                              "space" === TQ.kind && (" " !== TQ.text || "icon" !== (null === (wQ = QQ[qQ + 1]) || void 0 === wQ ? void 0 : wQ.kind)) ? (XQ.length > 0 && WQ.push(XQ), WQ.push([TQ]), XQ = []) : XQ.push(TQ)
                            }
                            return XQ.length > 0 && WQ.push(XQ), WQ
                          }
                        }, 5205: (QQ, WQ, XQ) => {
                          XQ.d(WQ, {
                            e: () => gQ,
                            g: () => JQ
                          });
                          var wQ = XQ(5212),
                            qQ = XQ(26);
                          const TQ = .25,
                            zQ = .85,
                            sQ = .02,
                            FQ = .01;

                          function PQ(QQ, WQ, XQ, wQ, qQ, TQ, sQ) {
                            const {
                              waveform: FQ,
                              pitchHz: PQ,
                              attackMs: gQ,
                              releaseMs: JQ,
                              lowpassHz: rQ
                            } = XQ, IQ = qQ + wQ.durationMs / 1e3, jQ = PQ * 2 ** (wQ.semitones / 12), BQ = QQ.createOscillator();
                            BQ.type = FQ, BQ.frequency.setValueAtTime(jQ, qQ), BQ.frequency.exponentialRampToValueAtTime(jQ * 2 ** (wQ.glideSemitones / 12), IQ);
                            const yQ = qQ + Math.min(gQ, wQ.durationMs) / 1e3,
                              VQ = QQ.createGain();
                            VQ.gain.setValueAtTime(0, qQ), VQ.gain.linearRampToValueAtTime(TQ, yQ), VQ.gain.linearRampToValueAtTime(TQ * zQ, Math.max(yQ, IQ - JQ / 1e3)), VQ.gain.linearRampToValueAtTime(0, IQ);
                            const DQ = [BQ];
                            if (null !== rQ) {
                              const WQ = QQ.createBiquadFilter();
                              WQ.type = "lowpass", WQ.frequency.value = rQ, DQ.push(WQ)
                            }
                            DQ.push(VQ, WQ);
                            for (let zQ = 1; zQ < DQ.length; zQ++) DQ[zQ - 1].connect(DQ[zQ]);
                            return BQ.onended = () => {
                              for (const QQ of DQ.slice(0, -1)) QQ.disconnect();
                              sQ()
                            }, BQ.start(qQ), BQ.stop(IQ), BQ
                          }

                          function gQ(QQ, WQ, XQ, wQ, qQ, zQ) {
                            if (0 === wQ.length) return zQ(), () => {};
                            const gQ = TQ * XQ.volume * qQ,
                              JQ = QQ.createGain();
                            JQ.connect(WQ);
                            const rQ = QQ.currentTime + sQ,
                              IQ = new Set;
                            for (const TQ of wQ) {
                              const WQ = PQ(QQ, JQ, XQ, TQ, rQ + TQ.atMs / 1e3, gQ * TQ.level, (() => {
                                IQ.delete(WQ), 0 === IQ.size && (JQ.disconnect(), zQ())
                              }));
                              IQ.add(WQ)
                            }
                            return () => {
                              const WQ = QQ.currentTime;
                              JQ.gain.setTargetAtTime(0, WQ, FQ);
                              for (const QQ of IQ) try {
                                QQ.stop(WQ + 5 * FQ)
                              } catch {}
                            }
                          }

                          function JQ(QQ, WQ) {
                            var XQ;
                            const TQ = wQ.Howler.ctx,
                              zQ = wQ.Howler.masterGain;
                            if (!TQ || !zQ || !qQ.b.get("soundOnFromAd")) return () => {};
                            const sQ = wQ.Howler;
                            return null === (XQ = sQ._autoResume) || void 0 === XQ || XQ.call(sQ), gQ(TQ, zQ, QQ, WQ, qQ.b.get("soundVolume"), (() => {
                              var QQ;
                              null === (QQ = sQ._autoSuspend) || void 0 === QQ || QQ.call(sQ)
                            }))
                          }
                        }, 5169: (QQ, WQ, XQ) => {
                          XQ.d(WQ, {
                            e: () => sQ,
                            h: () => qQ,
                            j: () => FQ,
                            n: () => zQ,
                            o: () => TQ
                          });
                          var wQ = XQ(5161);
                          const qQ = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            TQ = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            zQ = `${wQ.m} lists every page of the Bloxd Code API docs.`;

                          function sQ(QQ, WQ) {
                            return `${QQ.url}${encodeURIComponent(WQ.toWellFormed())}`
                          }

                          function FQ(QQ) {
                            const WQ = sQ(qQ, QQ);
                            return WQ.length <= 3e4 ? {
                              url: WQ,
                              sendsPrompt: !0
                            } : {
                              url: new URL(qQ.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 5212: (QQ, WQ, XQ) => {
                          XQ.r(WQ), XQ.d(WQ, {
                            Howl: () => qQ.Howl,
                            Howler: () => qQ.Howler,
                            musicOutput: () => yQ,
                            readyAudioContext: () => VQ
                          });
                          var wQ, qQ = XQ(5216),
                            TQ = XQ(3699),
                            zQ = XQ(4969);
                          const sQ = qQ.Howler;

                          function FQ() {
                            var QQ, WQ;
                            if (sQ.ctx || !sQ.usingWebAudio || "undefined" === typeof AudioContext || !(0, zQ.f)()) return;
                            const XQ = navigator.audioSession;
                            let wQ;
                            "auto" === (null === XQ || void 0 === XQ ? void 0 : XQ.type) && (XQ.type = "ambient");
                            try {
                              wQ = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const qQ = wQ.createGain();
                            qQ.gain.setValueAtTime(sQ._muted ? 0 : null !== (QQ = sQ._volume) && void 0 !== QQ ? QQ : 1, wQ.currentTime), qQ.connect(wQ.destination), sQ.ctx = wQ, sQ.masterGain = qQ, null === (WQ = sQ._setup) || void 0 === WQ || WQ.call(sQ)
                          }
                          sQ._mobileUnloaded = !0;
                          const PQ = sQ.volume.bind(qQ.Howler);
                          sQ.volume = function() {
                            return FQ(), PQ(...arguments)
                          };
                          const gQ = sQ.mute.bind(qQ.Howler);
                          sQ.mute = QQ => (FQ(), gQ(QQ));
                          const JQ = qQ.Howl.prototype,
                            rQ = JQ.init;

                          function IQ() {
                            for (; sQ._html5AudioPool.length < sQ.html5PoolSize;) {
                              const QQ = new Audio;
                              QQ._unlocked = !0, sQ._releaseHtml5Audio(QQ)
                            }
                            for (const WQ of sQ._howls)
                              if (!WQ._webAudio)
                                for (const XQ of WQ._getSoundIds()) {
                                  var QQ;
                                  const wQ = null === (QQ = WQ._soundById(XQ)) || void 0 === QQ ? void 0 : QQ._node;
                                  wQ && !wQ._unlocked && (wQ._unlocked = !0, wQ.load())
                                }
                          }
                          JQ.init = function(QQ) {
                            return FQ(), rQ.call(this, QQ)
                          }, (0, zQ.f)() && (sQ._unlockAudio = () => {
                            const QQ = sQ.ctx;
                            if (sQ._audioUnlocked || !QQ) return;
                            sQ.autoUnlock = !1;
                            const WQ = QQ.createBuffer(1, 1, 22050);
                            sQ._scratchBuffer = WQ;
                            const XQ = new AbortController;
                            let wQ = "afterPaint";
                            const qQ = () => {
                                var wQ;
                                if (sQ._audioUnlocked) return;
                                null === (wQ = sQ._autoResume) || void 0 === wQ || wQ.call(sQ);
                                const qQ = QQ.createBufferSource();
                                qQ.buffer = WQ, qQ.connect(QQ.destination), qQ.start(0), QQ.resume().catch((() => {})), qQ.onended = () => {
                                  qQ.disconnect(0), sQ._audioUnlocked = !0, XQ.abort();
                                  for (const QQ of sQ._howls) QQ._emit("unlock")
                                }
                              },
                              FQ = () => {
                                IQ(), qQ()
                              },
                              PQ = WQ => {
                                if (IQ(), "inTap" === wQ) {
                                  if ("running" === QQ.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), qQ()
                                } else "afterPaint" === wQ && (wQ = "queued", (0, TQ.c)(WQ.timeStamp, (() => {
                                  wQ = "inTap", qQ()
                                })))
                              };
                            for (const TQ of ["touchstart", "touchend"]) document.addEventListener(TQ, FQ, {
                              capture: !0,
                              signal: XQ.signal
                            });
                            for (const TQ of zQ.d) document.addEventListener(TQ, PQ, {
                              capture: !0,
                              signal: XQ.signal
                            })
                          });
                          let jQ = 0;
                          const BQ = null === (wQ = sQ._autoSuspend) || void 0 === wQ ? void 0 : wQ.bind(qQ.Howler);

                          function yQ() {
                            VQ();
                            const {
                              ctx: QQ,
                              masterGain: WQ
                            } = sQ;
                            return QQ && WQ ? {
                              ctx: QQ,
                              destination: WQ,
                              holdAwake: QQ => {
                                var WQ, XQ;
                                (jQ += QQ ? 1 : -1, QQ) ? null === (WQ = sQ._autoResume) || void 0 === WQ || WQ.call(sQ): null === (XQ = sQ._autoSuspend) || void 0 === XQ || XQ.call(sQ)
                              },
                              wake: () => {
                                var WQ;
                                "running" !== QQ.state && (null === (WQ = sQ._autoResume) || void 0 === WQ || WQ.call(sQ), QQ.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function VQ() {
                            var QQ;
                            (sQ.volume(), sQ.ctx && sQ.autoUnlock) && (null === (QQ = sQ._unlockAudio) || void 0 === QQ || QQ.call(sQ))
                          }
                          BQ && (sQ._autoSuspend = () => jQ > 0 ? qQ.Howler : BQ())
                        }, 5223: (QQ, WQ, XQ) => {
                          function wQ(QQ) {
                            return {
                              notAfter: QQ
                            }
                          }
                          XQ.d(WQ, {
                            e: () => FQ,
                            h: () => PQ,
                            l: () => sQ,
                            o: () => wQ,
                            p: () => qQ,
                            q: () => TQ,
                            u: () => zQ,
                            v: () => gQ,
                            y: () => JQ
                          });
                          const qQ = wQ("\\w$."),
                            TQ = wQ("\\w.,");

                          function zQ(QQ) {
                            return WQ => FQ(WQ, QQ)
                          }

                          function sQ(QQ) {
                            return WQ => !QQ.test(WQ.input.slice(0, WQ.index))
                          }

                          function FQ(QQ, WQ) {
                            return QQ.index > 0 && new RegExp(`[${WQ}]`).test(QQ.input[QQ.index - 1])
                          }

                          function PQ(QQ, WQ, XQ) {
                            return function(QQ) {
                              return void 0 !== QQ && "function" !== typeof QQ
                            }(XQ) ? function(QQ, WQ, XQ) {
                              const wQ = WQ.flags.replace(/[gy]/g, ""),
                                qQ = new RegExp(`[^${XQ}](?:${WQ.source})`, `${wQ}g`),
                                TQ = [],
                                zQ = XQ => {
                                  const wQ = XQ.index + XQ[0].length;
                                  return ("" === XQ[0] ? rQ(QQ, WQ, wQ) : wQ) - 1
                                },
                                sQ = new RegExp(`(?:${WQ.source})`, `${wQ}y`).exec(QQ);
                              if (sQ) {
                                if (TQ.push(sQ), !WQ.global) return TQ;
                                qQ.lastIndex = zQ(sQ)
                              }
                              for (let FQ = qQ.exec(QQ); FQ; FQ = qQ.exec(QQ)) {
                                const XQ = rQ(QQ, WQ, FQ.index) - FQ.index;
                                if (FQ[0] = FQ[0].slice(XQ), FQ.index += XQ, TQ.push(FQ), !WQ.global) break;
                                qQ.lastIndex = zQ(FQ)
                              }
                              return TQ
                            }(QQ, WQ, XQ.notAfter) : function(QQ, WQ, XQ) {
                              const wQ = new RegExp(WQ.source, `${WQ.flags.replace(/[gy]/g,"")}g`),
                                qQ = [];
                              for (let TQ = wQ.exec(QQ); TQ; TQ = wQ.exec(QQ))
                                if (!XQ || XQ(TQ)) {
                                  if (qQ.push(TQ), !WQ.global) break;
                                  "" === TQ[0] && (wQ.lastIndex = rQ(QQ, WQ, wQ.lastIndex))
                                } else wQ.lastIndex = rQ(QQ, WQ, TQ.index);
                              return qQ
                            }(QQ, WQ, XQ)
                          }

                          function gQ(QQ, WQ, XQ, wQ) {
                            let qQ = "",
                              TQ = 0;
                            for (const zQ of PQ(QQ, WQ, XQ)) qQ += QQ.slice(TQ, zQ.index) + wQ(zQ), TQ = zQ.index + zQ[0].length;
                            return qQ + QQ.slice(TQ)
                          }

                          function JQ(QQ, WQ, XQ) {
                            const wQ = [];
                            let qQ = 0;
                            for (const TQ of PQ(QQ, WQ, XQ)) wQ.push(QQ.slice(qQ, TQ.index)), qQ = TQ.index + TQ[0].length;
                            return [...wQ, QQ.slice(qQ)]
                          }

                          function rQ(QQ, WQ, XQ) {
                            var wQ;
                            return XQ + (WQ.unicode && (null !== (wQ = QQ.codePointAt(XQ)) && void 0 !== wQ ? wQ : 0) > 65535 ? 2 : 1)
                          }
                        }, 5161: (QQ, WQ, XQ) => {
                          XQ.d(WQ, {
                            A: () => BQ,
                            D: () => IQ,
                            b: () => qQ,
                            f: () => FQ,
                            i: () => TQ,
                            m: () => zQ,
                            o: () => sQ,
                            s: () => yQ,
                            t: () => gQ,
                            x: () => JQ
                          });
                          var wQ = XQ(1651);
                          const qQ = 24e3,
                            TQ = "/docs/llms.txt",
                            zQ = `${wQ.d}${TQ}`,
                            sQ = "/llms.txt",
                            FQ = "/docs/llms-full.txt";

                          function PQ(QQ) {
                            return QQ || "index"
                          }

                          function gQ(QQ) {
                            return `/docs/${PQ(QQ)}.md`
                          }

                          function JQ(QQ, WQ) {
                            return `/docs/${PQ(QQ)}/${WQ+1}.md`
                          }
                          const rQ = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function IQ(QQ) {
                            const WQ = rQ.exec(QQ);
                            return null === WQ ? null : {
                              name: WQ[1],
                              part: void 0 === WQ[2] ? null : Number(WQ[2])
                            }
                          }
                          const jQ = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function BQ(QQ) {
                            const WQ = jQ.exec(QQ);
                            if (null === WQ) return null;
                            const [, XQ = "", wQ] = WQ;
                            return void 0 === wQ ? gQ(XQ) : JQ(XQ, Number(wQ) - 1)
                          }

                          function yQ(QQ) {
                            return `/docsHtml/${PQ(QQ)}.html`
                          }
                        }, 5196: (QQ, WQ, XQ) => {
                          XQ.d(WQ, {
                            d: () => qQ,
                            f: () => wQ,
                            h: () => TQ,
                            l: () => FQ,
                            p: () => zQ
                          });
                          const wQ = ["sine", "triangle", "square", "sawtooth"],
                            qQ = 55,
                            TQ = {
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

                          function zQ(QQ) {
                            return "string" !== typeof QQ ? QQ : Object.hasOwn(TQ, QQ) ? TQ[QQ] : null
                          }

                          function sQ(QQ, WQ, XQ) {
                            return Math.min(XQ, Math.max(WQ, QQ))
                          }

                          function FQ(QQ) {
                            const WQ = sQ(QQ.durationMs, 10, 500),
                              XQ = sQ(QQ.attackMs, 0, WQ),
                              {
                                intonation: qQ
                              } = QQ;
                            return {
                              waveform: wQ.includes(QQ.waveform) ? QQ.waveform : "sine",
                              pitchHz: sQ(QQ.pitchHz, 20, 4e3),
                              glideSemitones: sQ(QQ.glideSemitones, -24, 24),
                              durationMs: WQ,
                              attackMs: XQ,
                              releaseMs: sQ(QQ.releaseMs, 0, WQ - XQ),
                              lowpassHz: null === QQ.lowpassHz ? null : sQ(QQ.lowpassHz, 20, 2e4),
                              volume: sQ(QQ.volume, 0, 2),
                              intonation: {
                                variationSemitones: sQ(qQ.variationSemitones, 0, 6),
                                declineSemitones: sQ(qQ.declineSemitones, 0, 12),
                                questionRiseSemitones: sQ(qQ.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: sQ(qQ.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: sQ(QQ.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const QQ in modules) Object.freeze(modules[QQ]);