export const id = 76;
export const ids = [76, 92];
export const modules = {
    4665: (QQ, FQ, wQ) => {
      wQ.d(FQ, {
        c: () => tQ,
        f: () => eQ
      });
      var LQ = wQ(1070),
        qQ = wQ.n(LQ),
        oQ = wQ(53),
        DQ = wQ(1207),
        kQ = wQ(4674),
        vQ = wQ(1873),
        mQ = wQ(2345),
        uQ = wQ(4680),
        HQ = wQ(1107);
      const bQ = new WeakMap;
      let YQ = 0;

      function xQ(QQ) {
        let FQ = bQ.get(QQ);
        return void 0 === FQ && (FQ = YQ++, bQ.set(QQ, FQ)), FQ
      }

      function AQ(QQ) {
        let {
          piece: FQ
        } = QQ;
        return "space" === FQ.kind ? (0, HQ.jsx)(HQ.Fragment, {
          children: FQ.text
        }) : (0, HQ.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${FQ.delayMs}ms`
          },
          children: (0, HQ.jsx)(kQ.d, {
            text: "icon" === FQ.kind ? `[[${FQ.icon}]]` : FQ.text
          })
        })
      }

      function tQ(QQ) {
        let {
          display: FQ
        } = QQ;
        const {
          selectedLanguage: wQ
        } = (0, DQ.y)(), LQ = (0, oQ.useMemo)((() => (0, uQ.b)((0, uQ.f)(FQ).plan.pieces)), [FQ, wQ.code]);
        return (0, HQ.jsxs)("div", {
          className: qQ()("Dialogue", {
            DialogueAnimateIn: !1 !== FQ.animateIn
          }),
          children: [FQ.speakerName && (0, HQ.jsx)(vQ.e, {
            text: FQ.speakerName,
            className: "DialogueSpeaker"
          }), (0, HQ.jsx)("p", {
            className: "DialogueLine",
            children: LQ.map(((QQ, FQ) => 1 === QQ.length && "space" === QQ[0].kind ? QQ[0].text : (0, HQ.jsx)("span", {
              className: "DialogueGlue",
              children: QQ.map(((QQ, FQ) => (0, HQ.jsx)(AQ, {
                piece: QQ
              }, FQ)))
            }, FQ)))
          })]
        })
      }
      const eQ = (0, oQ.memo)((function() {
        const QQ = (0, mQ.l)("dialogue");
        return (0, HQ.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: QQ && (0, HQ.jsx)(tQ, {
            display: QQ
          }, xQ(QQ))
        })
      }))
    },
    4552: (QQ, FQ, wQ) => {
        wQ.r(FQ), wQ.d(FQ, {
          default: () => FD
        });
        var LQ = wQ(53),
          qQ = wQ(1070),
          oQ = wQ.n(qQ),
          DQ = wQ(1508),
          kQ = wQ(1515),
          vQ = wQ(17),
          mQ = wQ(71),
          uQ = wQ(4557),
          HQ = wQ(4575),
          bQ = wQ(4582),
          YQ = wQ(4226),
          xQ = wQ(1107);
        const AQ = "/textures/docs/icons";

        function tQ(QQ) {
          let {
            name: FQ,
            isTinted: wQ,
            className: LQ,
            style: qQ
          } = QQ;
          const DQ = `${AQ}/${FQ}.png`;
          return wQ ? (0, xQ.jsxs)("span", {
            className: oQ()("DocsPixelIcon", "Tinted", LQ),
            "aria-hidden": "true",
            style: qQ,
            children: [(0, xQ.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${DQ}")`,
                WebkitMaskImage: `url("${DQ}")`
              }
            }), (0, xQ.jsx)("img", {
              src: DQ,
              alt: ""
            })]
          }) : (0, xQ.jsx)("img", {
            className: oQ()("DocsPixelIcon", LQ),
            src: DQ,
            alt: "",
            "aria-hidden": "true",
            style: qQ
          })
        }
        const eQ = 1500;

        function MQ() {
          const [QQ, FQ] = (0, LQ.useState)(null);
          (0, LQ.useEffect)((() => {
            if (null === QQ) return;
            const wQ = setTimeout((() => {
              FQ(null)
            }), eQ);
            return () => {
              clearTimeout(wQ)
            }
          }), [QQ]);
          return [QQ, QQ => {
            (0, YQ.d)(QQ).then((() => {
              FQ({
                text: QQ,
                failed: !1
              })
            }), (wQ => {
              console.error("Could not copy to the clipboard", wQ), FQ({
                text: QQ,
                failed: !0
              })
            }))
          }]
        }

        function GQ(QQ) {
          let {
            text: FQ,
            label: wQ,
            className: LQ
          } = QQ;
          const [qQ, DQ] = MQ(), kQ = !1 === (null === qQ || void 0 === qQ ? void 0 : qQ.failed);
          return (0, xQ.jsxs)("button", {
            type: "button",
            className: oQ()("DocsCopyButton", LQ, {
              Copied: kQ
            }),
            title: `Copy ${FQ.length>40?"to clipboard":FQ}`,
            "aria-label": wQ ? void 0 : `Copy ${FQ}`,
            onClick: QQ => {
              QQ.stopPropagation(), DQ(FQ)
            },
            children: [(0, xQ.jsx)(tQ, {
              name: kQ ? "check" : "copy"
            }), wQ && (0, xQ.jsx)("span", {
              children: kQ ? "Copied" : null !== qQ && void 0 !== qQ && qQ.failed ? "Copy failed" : wQ
            })]
          })
        }
        uQ.d.registerLanguage("javascript", HQ.e), uQ.d.registerLanguage("typescript", bQ.c);
        const pQ = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          cQ = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          CQ = 24;

        function SQ(QQ) {
          let {
            code: FQ,
            lang: wQ,
            compact: qQ = !1
          } = QQ;
          const DQ = (0, LQ.useMemo)((() => function(QQ, FQ) {
              const wQ = pQ[FQ];
              return wQ ? uQ.d.highlight(QQ, {
                language: wQ
              }).value : QQ.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(FQ, wQ)), [FQ, wQ]),
            kQ = FQ.split("\n").length,
            vQ = !qQ && kQ > CQ + 6,
            [mQ, HQ] = (0, LQ.useState)(!1),
            bQ = pQ[wQ];
          return (0, xQ.jsxs)("div", {
            className: oQ()("DocsCodeBlock", {
              Compact: qQ,
              Collapsed: vQ && !mQ
            }),
            children: [!qQ && (0, xQ.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, xQ.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: bQ ? cQ[bQ] : "Text"
              }), (0, xQ.jsx)(GQ, {
                text: FQ,
                label: "Copy"
              })]
            }), (0, xQ.jsx)("pre", {
              children: (0, xQ.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: DQ
                }
              })
            }), vQ && (0, xQ.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": mQ,
              onClick: () => {
                HQ(!mQ)
              },
              children: [(0, xQ.jsx)(tQ, {
                name: mQ ? "chevron-up" : "chevron-down"
              }), mQ ? "Show less" : `Show all ${kQ} lines`]
            })]
          })
        }
        var iQ = wQ(4585);
        var WQ = wQ(4593);
        const RQ = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function OQ(QQ) {
          const FQ = new Map;
          let wQ, LQ = [],
            qQ = !1;
          const oQ = () => {
            wQ && FQ.set(wQ.name, wQ.lines.join("\n").trimEnd())
          };
          for (const DQ of QQ.split("\n")) {
            const QQ = DQ.match(RQ);
            qQ || DQ.startsWith("/*") ? (qQ || (oQ(), wQ = void 0), LQ.push(DQ), qQ = !DQ.includes("*/")) : QQ ? (oQ(), wQ = {
              name: QQ[1],
              lines: [...LQ, DQ]
            }, LQ = []) : wQ && (DQ.startsWith(" ") || DQ.startsWith("\t") || /^[}\])|]/.test(DQ)) ? wQ.lines.push(DQ) : wQ && "" !== DQ.trim() && (oQ(), wQ = void 0)
          }
          return oQ(), FQ
        }

        function sQ(QQ) {
          return "methods" === QQ || "callbacks" === QQ || "settings" === QQ
        }
        const rQ = {
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
              setterSnippet: (QQ, FQ) => `api.setClientOption(playerId, "${QQ}", ${FQ})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (QQ, FQ) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${QQ}", ${FQ})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (QQ, FQ) => `api.setMobSetting(mobId, "${QQ}", ${FQ})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (QQ, FQ) => `api.setVehicleSetting(vehicleId, "${QQ}", ${FQ})`
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
          IQ = {
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

        function UQ(QQ) {
          return QQ.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function NQ(QQ) {
          let FQ = !1;
          return QQ.split("\n").map((QQ => (QQ.startsWith("```") && (FQ = !FQ), !FQ && /^#{3,} /.test(QQ) ? QQ.slice(1) : QQ))).join("\n")
        }

        function TQ(QQ) {
          return "readme" === QQ ? "getting-started" : UQ(QQ)
        }
        const KQ = "## Glossary of Referenced Types";
        const zQ = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...WQ.c.flatMap((QQ => {
            const FQ = {
              id: QQ.id,
              slug: TQ(QQ.id),
              title: QQ.title,
              markdown: QQ.content,
              ...rQ[QQ.id]
            };
            if ("readme" === QQ.id) return function(QQ) {
              const FQ = QQ.markdown.indexOf(KQ),
                wQ = QQ.markdown.indexOf("\n```", FQ),
                LQ = QQ.markdown.indexOf("\n```", wQ + 1);
              if (-1 === FQ || -1 === wQ || -1 === LQ) throw new Error(`Getting started has no "${KQ}" section with a code block`);
              const qQ = QQ.markdown.slice(FQ + 31, wQ).trim(),
                oQ = [...OQ(QQ.markdown.slice(QQ.markdown.indexOf("\n", wQ + 1) + 1, LQ))].map((QQ => {
                  let [FQ, wQ] = QQ;
                  return `## ${FQ}\n\n\`\`\`ts\n${wQ}\n\`\`\`\n`
                })),
                DQ = QQ.markdown.slice(QQ.markdown.indexOf("\n", LQ + 1) + 1);
              return [{
                ...QQ,
                markdown: `${QQ.markdown.slice(0,FQ)}${DQ}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${qQ}\n\n${oQ.join("\n")}`
              }]
            }(FQ);
            if ("howTo" === QQ.id) {
              const {
                parent: QQ,
                guides: wQ
              } = function(QQ) {
                const [FQ, ...wQ] = QQ.markdown.split(/^(?=## )/m), LQ = [FQ], qQ = [];
                for (const DQ of wQ) {
                  var oQ;
                  const FQ = DQ.indexOf("\n"),
                    wQ = DQ.slice(3, FQ).trim(),
                    kQ = DQ.slice(FQ + 1);
                  if (!kQ.includes("```")) {
                    LQ.push(DQ);
                    continue
                  }
                  const vQ = null !== (oQ = IQ[wQ]) && void 0 !== oQ ? oQ : {
                    icon: "lightbulb",
                    summary: `How to use ${wQ.toLowerCase()} in World Code.`
                  };
                  qQ.push({
                    id: `${QQ.id}${wQ.split(/[^A-Za-z0-9]+/).map((QQ=>QQ.charAt(0).toUpperCase()+QQ.slice(1))).join("")}`,
                    slug: `${QQ.slug}-${UQ(wQ)}`,
                    title: wQ,
                    layout: "article",
                    sourceAnchor: (0, iQ.u)(wQ),
                    markdown: `# ${wQ}\n\n${NQ(kQ)}`,
                    ...vQ
                  })
                }
                return {
                  parent: {
                    ...QQ,
                    markdown: LQ.join(""),
                    childPageIds: qQ.map((QQ => QQ.id))
                  },
                  guides: qQ
                }
              }(FQ);
              return [QQ, ...wQ]
            }
            return [FQ]
          }))],
          lQ = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...zQ.filter((QQ => void 0 !== QQ.sourceAnchor)).map((QQ => QQ.id))]
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

        function jQ(QQ) {
          return zQ.find((FQ => FQ.id === QQ))
        }
        const aQ = new Map;

        function XQ(QQ) {
          let FQ = aQ.get(QQ.id);
          return FQ || (FQ = (0, iQ.B)(QQ.markdown, "changelog" === QQ.layout ? 3 : 2), aQ.set(QQ.id, FQ)), FQ
        }

        function fQ(QQ, FQ) {
          return XQ(QQ).sections.some((QQ => QQ.heading.anchor === FQ || QQ.blocks.some((QQ => "heading" === QQ.kind && QQ.anchor === FQ))))
        }

        function VQ(QQ) {
          const [FQ, ...wQ] = QQ.replace(/^#/, "").split("-"), LQ = zQ.find((QQ => QQ.id === FQ));
          if (!LQ) return null;
          const qQ = wQ.length > 0 ? (0, iQ.u)(wQ.join("-")) : "";
          for (const DQ of null !== (oQ = LQ.childPageIds) && void 0 !== oQ ? oQ : []) {
            var oQ;
            const QQ = jQ(DQ);
            if (QQ.sourceAnchor === qQ) return {
              page: QQ,
              anchor: ""
            };
            if (fQ(QQ, qQ)) return {
              page: QQ,
              anchor: qQ
            }
          }
          return {
            page: LQ,
            anchor: qQ
          }
        }
        const hQ = {
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

        function JQ(QQ, FQ) {
          let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const LQ = FQ.slug ? `${QQ}/${FQ.slug}` : QQ;
          return wQ ? `${LQ}#${wQ}` : LQ
        }
        var EQ = wQ(4610);
        const nQ = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          gQ = new Set(["GameApi", "Console", "_TypeOf"]),
          PQ = 4;

        function ZQ(QQ) {
          let FQ = QQ.length;
          for (; FQ > 0 && "" === QQ[FQ - 1].trim();) FQ--;
          return QQ.slice(0, FQ)
        }

        function yQ(QQ) {
          var FQ;
          const wQ = ZQ(QQ);
          if (null === (FQ = wQ.at(-1)) || void 0 === FQ || !FQ.trimEnd().endsWith("*/")) return {
            lines: wQ,
            doc: ""
          };
          const LQ = wQ.findLastIndex((QQ => QQ.startsWith("/**")));
          return -1 === LQ ? {
            lines: wQ,
            doc: ""
          } : {
            lines: ZQ(wQ.slice(0, LQ)),
            doc: wQ.slice(LQ).join("\n")
          }
        }

        function BQ(QQ) {
          var FQ;
          const wQ = QQ.split("\n"),
            LQ = wQ.flatMap(((QQ, FQ) => nQ.test(QQ) ? [FQ] : []));
          let qQ = yQ(wQ.slice(0, null !== (FQ = LQ[0]) && void 0 !== FQ ? FQ : wQ.length)).doc;
          return LQ.map(((QQ, FQ) => {
            var oQ;
            const DQ = yQ(wQ.slice(QQ, null !== (oQ = LQ[FQ + 1]) && void 0 !== oQ ? oQ : wQ.length)),
              kQ = {
                name: wQ[QQ].match(nQ)[1],
                doc: qQ,
                lines: DQ.lines
              };
            return qQ = DQ.doc, kQ
          }))
        }

        function dQ(QQ) {
          var FQ;
          const wQ = QQ.match(/^readonly \[([\s\S]*)\]$/);
          return wQ ? null !== (FQ = wQ[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== FQ ? FQ : [] : null
        }

        function QF(QQ) {
          if (!QQ.startsWith("{") || !QQ.endsWith("}")) return null;
          const FQ = {
              keys: [],
              values: []
            },
            wQ = QQ => {
              const wQ = QQ.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              wQ && (FQ.keys.push(wQ[1].startsWith('"') ? wQ[1] : `"${wQ[1]}"`), FQ.values.push(wQ[2].trim()))
            };
          let LQ = 0,
            qQ = "";
          for (const oQ of QQ.slice(1, -1)) "{[(".includes(oQ) ? LQ++ : "}])".includes(oQ) && LQ--, ";" === oQ && 0 === LQ ? (wQ(qQ), qQ = "") : qQ += oQ;
          return wQ(qQ), FQ
        }

        function FF(QQ) {
          return QQ.length > PQ ? `\n\t| ${QQ.join("\n\t| ")}` : QQ.join(" | ")
        }

        function wF(QQ, FQ) {
          const wQ = function(QQ, FQ) {
            return QQ.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((QQ, wQ) => {
              var LQ;
              const qQ = null === (LQ = FQ.get(wQ)) || void 0 === LQ ? void 0 : LQ.object;
              return qQ ? FF(qQ.values) : QQ
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((QQ, wQ) => {
              var LQ, qQ;
              const oQ = null === (LQ = FQ.get(wQ)) || void 0 === LQ || null === (qQ = LQ.object) || void 0 === qQ ? void 0 : qQ.values.map(dQ);
              return null !== oQ && void 0 !== oQ && oQ.every((QQ => null !== QQ)) ? FF([...new Set(oQ.flat())]) : QQ
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((QQ, wQ) => {
              var LQ;
              const qQ = null === (LQ = FQ.get(wQ)) || void 0 === LQ ? void 0 : LQ.members;
              return qQ ? FF(qQ) : QQ
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((QQ, wQ) => {
              var LQ;
              const qQ = null === (LQ = FQ.get(wQ)) || void 0 === LQ ? void 0 : LQ.object;
              return qQ ? FF(qQ.keys) : QQ
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((QQ, wQ) => {
              var LQ, qQ;
              return null !== (LQ = null === (qQ = FQ.get(wQ)) || void 0 === qQ ? void 0 : qQ.text) && void 0 !== LQ ? LQ : QQ
            }))
          }(QQ.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), FQ);
          return [QQ.doc, wQ].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function LF(QQ) {
          const FQ = BQ(QQ),
            wQ = function(QQ) {
              const FQ = new Map,
                wQ = QQ.find((QQ => "_TypeOf" === QQ.name));
              let LQ = null;
              const qQ = () => {
                if (LQ) {
                  const QQ = LQ.lines.join("\n");
                  FQ.set(LQ.name, {
                    text: QQ,
                    members: dQ(QQ),
                    object: QF(QQ)
                  })
                }
              };
              for (const oQ of wQ.lines.slice(1, -1)) {
                const QQ = oQ.match(/^\t([\w$]+): (.+)$/);
                QQ ? (qQ(), LQ = {
                  name: QQ[1],
                  lines: [QQ[2]]
                }) : LQ && LQ.lines.push(oQ.replace(/^\t/, ""))
              }
              return qQ(), FQ
            }(FQ),
            LQ = new Map;
          for (const qQ of FQ) gQ.has(qQ.name) || LQ.has(qQ.name) || LQ.set(qQ.name, wF(qQ, wQ));
          return LQ
        }
        let qF, oF, DF;

        function kF() {
          return oF ??= function(QQ) {
            const FQ = BQ(QQ).find((QQ => "GameApi" === QQ.name)),
              wQ = new Map,
              LQ = FQ.lines;
            for (let oQ = 0; oQ < LQ.length; oQ++) {
              var qQ;
              if (!LQ[oQ].trimStart().startsWith("/**")) continue;
              const QQ = oQ;
              for (; oQ < LQ.length && !LQ[oQ].includes("*/");) oQ++;
              const FQ = null === (qQ = LQ[oQ + 1]) || void 0 === qQ ? void 0 : qQ.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!FQ) continue;
              let DQ = null;
              const kQ = [];
              let vQ = "description",
                mQ = !1;
              for (const wQ of LQ.slice(QQ, oQ + 1).join("\n").split("\n").map((QQ => QQ.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const QQ = wQ.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                QQ ? (DQ = QQ[1].trim(), vQ = "deprecation") : wQ.startsWith("@") ? (vQ = "otherTag", mQ = !0) : "" === wQ.trim() ? mQ || (vQ = "description", kQ.push(wQ)) : "deprecation" !== vQ || /^[A-Z]/.test(wQ.trim()) ? "otherTag" !== vQ && (vQ = "description", kQ.push(wQ)) : DQ = `${DQ} ${wQ.trim()}`.trim()
              }
              wQ.set(FQ[1], {
                deprecation: DQ,
                description: kQ.join("\n").trim()
              })
            }
            return wQ
          }(EQ.default), oF
        }

        function vF() {
          if (!DF) {
            DF = new Map;
            for (const QQ of zQ) {
              const FQ = (0, iQ.y)(XQ(QQ)).flatMap((QQ => QQ.blocks));
              for (const QQ of (0, iQ.l)(FQ))
                if ("ts" === QQ.lang || "typescript" === QQ.lang)
                  for (const [FQ, wQ] of OQ(QQ.code)) DF.set(FQ, wQ)
            }
            for (const [QQ, FQ] of(qF ??= LF(EQ.default), qF)) DF.has(QQ) || DF.set(QQ, FQ)
          }
          return DF
        }
        const mF = {
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
        let uF;

        function HF() {
          if (!uF) {
            uF = new Map;
            for (const QQ of zQ)
              if (sQ(QQ.layout))
                for (const FQ of XQ(QQ).sections) uF.has(FQ.heading.text) || uF.set(FQ.heading.text, {
                  pageId: QQ.id,
                  anchor: FQ.heading.anchor
                })
          }
          return uF
        }

        function bF(QQ) {
          const FQ = QQ.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return FQ ? HF().get(FQ[1]) : void 0
        }
        const YF = (0, LQ.createContext)("/docs"),
          xF = (0, LQ.createContext)(null),
          AF = (0, LQ.createContext)(!1),
          tF = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function eF(QQ) {
          const FQ = QQ.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return FQ ? FQ[1] : null
        }

        function MF(QQ) {
          let {
            colour: FQ
          } = QQ;
          return (0, xQ.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: FQ
            },
            "aria-hidden": "true"
          })
        }

        function GF(QQ) {
          const FQ = [];
          let wQ = 0;
          for (const LQ of QQ.matchAll(tF)) FQ.push(QQ.slice(wQ, LQ.index), (0, xQ.jsx)(MF, {
            colour: LQ[0]
          }), LQ[0]), wQ = LQ.index + LQ[0].length;
          return FQ.push(QQ.slice(wQ)), FQ
        }

        function pF(QQ) {
          let {
            href: FQ,
            children: wQ
          } = QQ;
          const qQ = (0, LQ.useContext)(YF);
          if (FQ.startsWith("#")) {
            const QQ = VQ(FQ);
            if (QQ) return (0, xQ.jsx)(DQ.b, {
              to: JQ(qQ, QQ.page, QQ.anchor),
              children: (0, xQ.jsx)(AF.Provider, {
                value: !0,
                children: wQ
              })
            })
          }
          return (0, xQ.jsx)("a", {
            href: FQ,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, xQ.jsx)(AF.Provider, {
              value: !0,
              children: wQ
            })
          })
        }

        function cF(QQ) {
          let {
            code: FQ
          } = QQ;
          const wQ = (0, LQ.useContext)(YF);
          if ((0, LQ.useContext)(AF)) return (0, xQ.jsx)("code", {
            className: "DocsInlineCode",
            children: FQ
          });
          if (vF().has(FQ)) return (0, xQ.jsx)(WF, {
            type: FQ
          });
          const qQ = bF(FQ);
          if (qQ) return (0, xQ.jsx)(DQ.b, {
            className: "DocsInlineCode DocsSymbolLink",
            to: JQ(wQ, jQ(qQ.pageId), qQ.anchor),
            children: FQ
          });
          const oQ = eF(FQ);
          return (0, xQ.jsxs)("code", {
            className: "DocsInlineCode",
            children: [oQ && (0, xQ.jsx)(MF, {
              colour: oQ
            }), FQ]
          })
        }

        function CF(QQ) {
          let {
            text: FQ
          } = QQ;
          const wQ = [];
          let qQ = 0;
          for (const LQ of FQ.matchAll(iQ.f)) {
            LQ.index > qQ && wQ.push(...GF(FQ.slice(qQ, LQ.index)));
            const [, QQ, oQ, DQ, kQ, vQ] = LQ;
            QQ ? wQ.push((0, xQ.jsx)(cF, {
              code: (0, iQ.m)(QQ, oQ)
            })) : DQ ? wQ.push((0, xQ.jsx)("strong", {
              children: (0, xQ.jsx)(CF, {
                text: DQ
              })
            })) : wQ.push((0, xQ.jsx)(pF, {
              href: vQ,
              children: (0, xQ.jsx)(CF, {
                text: kQ
              })
            })), qQ = LQ.index + LQ[0].length
          }
          return qQ < FQ.length && wQ.push(...GF(FQ.slice(qQ))), (0, xQ.jsx)(xQ.Fragment, {
            children: wQ.map(((QQ, FQ) => (0, xQ.jsx)(LQ.Fragment, {
              children: QQ
            }, FQ)))
          })
        }
        const SF = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          iF = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function WF(QQ) {
          let {
            type: FQ
          } = QQ;
          const wQ = vF(),
            qQ = [];
          for (const LQ of FQ.trim().matchAll(SF)) {
            const [QQ, FQ, oQ, DQ, kQ] = LQ;
            FQ ? qQ.push((0, xQ.jsx)("span", {
              className: "DocsTypeString",
              children: QQ
            })) : oQ && wQ.has(oQ) ? qQ.push((0, xQ.jsx)(IF, {
              name: oQ,
              definition: wQ.get(oQ)
            })) : oQ ? qQ.push((0, xQ.jsx)("span", {
              className: iF.has(oQ) ? "DocsTypeKeyword" : "DocsTypeName",
              children: QQ
            })) : DQ ? qQ.push((0, xQ.jsx)("span", {
              className: "DocsTypeNumber",
              children: QQ
            })) : kQ ? qQ.push(" ") : qQ.push((0, xQ.jsx)("span", {
              className: "DocsTypePunctuation",
              children: QQ
            }))
          }
          return (0, xQ.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: qQ.map(((QQ, FQ) => (0, xQ.jsx)(LQ.Fragment, {
              children: QQ
            }, FQ)))
          })
        }
        const RF = 480,
          OF = 6,
          sF = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let rF = 0;

        function IF(QQ) {
          let {
            name: FQ,
            definition: wQ
          } = QQ;
          const qQ = (0, LQ.useContext)(YF),
            oQ = mF[FQ],
            kQ = (0, LQ.useRef)(null),
            vQ = (0, LQ.useRef)(null),
            uQ = (0, LQ.useRef)(null),
            [HQ, bQ] = (0, LQ.useState)(!1),
            [YQ, AQ] = (0, LQ.useState)(null),
            eQ = (0, LQ.useRef)(),
            MQ = (0, LQ.useContext)(xF),
            [GQ] = (0, LQ.useState)((() => "DocsTypePopover-" + rF++)),
            pQ = () => {
              clearTimeout(eQ.current), bQ(!0)
            },
            cQ = () => {
              clearTimeout(eQ.current), eQ.current = setTimeout((() => {
                bQ(!1)
              }), 120)
            };
          return (0, LQ.useEffect)((() => {
            if (!HQ) return;
            const QQ = QQ => {
              if ("Escape" === QQ.key) {
                var FQ, wQ;
                if (null !== (FQ = vQ.current) && void 0 !== FQ && FQ.contains(document.activeElement)) null === (wQ = kQ.current) || void 0 === wQ || wQ.focus();
                bQ(!1)
              }
            };
            return document.addEventListener("keydown", QQ), () => {
              document.removeEventListener("keydown", QQ)
            }
          }), [HQ]), (0, LQ.useEffect)((() => () => {
            clearTimeout(eQ.current)
          }), []), (0, LQ.useLayoutEffect)((() => {
            if (!HQ || !kQ.current || !vQ.current) return void AQ(null);
            const QQ = kQ.current.getBoundingClientRect(),
              FQ = vQ.current.offsetHeight,
              wQ = Math.min(RF, window.innerWidth - 32),
              LQ = Math.min(Math.max(16, QQ.left), window.innerWidth - wQ - 16),
              qQ = QQ.bottom + OF + FQ < window.innerHeight;
            AQ({
              left: LQ,
              top: qQ ? QQ.bottom + OF : Math.max(16, QQ.top - OF - FQ)
            })
          }), [HQ]), (0, xQ.jsxs)(xQ.Fragment, {
            children: [(0, xQ.jsx)("button", {
              type: "button",
              ref: kQ,
              className: "DocsTypeLink",
              "aria-expanded": HQ,
              "aria-describedby": HQ ? GQ : void 0,
              onMouseEnter: pQ,
              onMouseLeave: cQ,
              onFocus: pQ,
              onBlur: cQ,
              onKeyDown: QQ => {
                "Tab" === QQ.key && !QQ.shiftKey && uQ.current && (QQ.preventDefault(), uQ.current.focus())
              },
              onClick: pQ,
              children: FQ
            }), HQ && (0, mQ.createPortal)((0, xQ.jsxs)("span", {
              ref: vQ,
              id: GQ,
              className: "DocsTypePopover",
              role: "tooltip",
              style: YQ ? {
                left: YQ.left,
                top: YQ.top,
                maxWidth: RF
              } : {
                visibility: "hidden"
              },
              onMouseEnter: pQ,
              onMouseLeave: cQ,
              onFocus: pQ,
              onBlur: cQ,
              children: [(0, xQ.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, xQ.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: FQ
                }), oQ && (0, xQ.jsxs)(DQ.b, {
                  ref: uQ,
                  className: "DocsTypePopoverLink",
                  to: JQ(qQ, jQ(oQ)),
                  onClick: () => {
                    bQ(!1)
                  },
                  onKeyDown: QQ => {
                    if ("Tab" === QQ.key) {
                      var FQ;
                      if (QQ.preventDefault(), QQ.shiftKey || !kQ.current || ! function(QQ, FQ) {
                          const wQ = [...document.querySelectorAll(sF)],
                            LQ = wQ.slice(wQ.indexOf(QQ) + 1).find((QQ => QQ.getClientRects().length > 0 && !(null !== FQ && void 0 !== FQ && FQ.contains(QQ))));
                          return null === LQ || void 0 === LQ || LQ.focus(), void 0 !== LQ
                        }(kQ.current, vQ.current)) null === (FQ = kQ.current) || void 0 === FQ || FQ.focus();
                      QQ.shiftKey || bQ(!1)
                    }
                  },
                  children: [jQ(oQ).title, (0, xQ.jsx)(tQ, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, xQ.jsx)(SQ, {
                lang: "ts",
                code: wQ,
                compact: !0
              })]
            }), null !== MQ && void 0 !== MQ ? MQ : document.body)]
          })
        }
        var UF = wQ(201),
          NF = wQ(4612),
          TF = wQ(4615),
          KF = wQ(4619);
        const zF = {
          progressBar: {
            rL: 30,
            IL: .075,
            UL: 5,
            NL: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            TL: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            zL: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            lL: !0,
            scale: 3,
            rotation: 15,
            jL: !1
          },
          gravityBar: {
            rL: 30,
            XL: .25,
            fL: 3,
            VL: .8,
            gravity: 1,
            hL: 1.5,
            JL: 8,
            EL: 4,
            NL: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            gL: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            ZL: 5,
            yL: 1200,
            BL: .15,
            dL: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var lF = wQ(307),
          jF = wQ(1951);

        function aF(QQ) {
          return QQ.startsWith("fa-")
        }
        const XF = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          fF = {
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

        function VF(QQ) {
          return "string" === typeof QQ ? "text" : "entityName" in QQ || "translationKey" in QQ ? "other" : (0, lF.qb)(QQ) ? "progressBar" : (0, lF.mb)(QQ) ? "keyBinding" : "icon" in QQ ? "icon" : "str" in QQ && "string" === typeof QQ.str ? "text" : "other"
        }
        const hF = [{
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
          JF = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...hF],
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
                options: jF.n
              },
              isRequired: !0
            }, ...hF],
            other: []
          };

        function EF(QQ) {
          return "string" === typeof QQ ? {
            str: QQ
          } : QQ
        }

        function nF(QQ, FQ) {
          let wQ = EF(QQ);
          for (const LQ of FQ) wQ = wQ && "object" === typeof wQ ? wQ[LQ] : void 0;
          return wQ
        }

        function gF(QQ, FQ, wQ) {
          const LQ = (QQ, qQ) => {
            var oQ;
            const DQ = FQ[qQ],
              kQ = {
                ...QQ
              };
            if (qQ === FQ.length - 1) return void 0 === wQ ? delete kQ[DQ] : kQ[DQ] = wQ, kQ;
            const vQ = LQ(null !== (oQ = QQ[DQ]) && void 0 !== oQ ? oQ : {}, qQ + 1);
            return 0 === Object.keys(vQ).length ? delete kQ[DQ] : kQ[DQ] = vQ, kQ
          };
          return function(QQ) {
            const FQ = Object.keys(QQ);
            return "string" === typeof QQ.str && 1 === FQ.length ? QQ.str : QQ
          }(LQ(EF(QQ), 0))
        }

        function PF(QQ, FQ) {
          const wQ = VF(QQ),
            LQ = JF[wQ].find((QQ => QQ.path.join(".") === FQ.join("."))),
            qQ = null !== LQ && void 0 !== LQ && LQ.isRequired && "other" !== wQ ? nF(fF[wQ], FQ) : void 0;
          return gF(QQ, FQ, qQ)
        }

        function ZF(QQ) {
          switch (VF(QQ)) {
            case "text":
              return String(nF(QQ, ["str"]));
            case "icon":
              return String(nF(QQ, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(nF(QQ,["progress"])))}%`;
            case "keyBinding":
              return String(nF(QQ, ["action"]));
            case "other":
              return JSON.stringify(QQ)
          }
        }
        const yF = /^[A-Za-z_$][\w$]*$/;

        function BF(QQ) {
          if (Array.isArray(QQ)) return `[${QQ.map(BF).join(", ")}]`;
          if (QQ && "object" === typeof QQ) {
            const FQ = Object.entries(QQ).map((QQ => {
              let [FQ, wQ] = QQ;
              return `${yF.test(FQ)?FQ:JSON.stringify(FQ)}: ${BF(wQ)}`
            }));
            return 0 === FQ.length ? "{}" : `{ ${FQ.join(", ")} }`
          }
          return JSON.stringify(QQ)
        }

        function dF(QQ) {
          const FQ = QQ.map(BF),
            wQ = `[${FQ.join(", ")}]`;
          return wQ.length <= 60 ? wQ : `[\n${FQ.map((QQ=>`    ${QQ},`)).join("\n")}\n]`
        }
        const Qw = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function Fw(QQ) {
          let FQ = "";
          for (let qQ = 0; qQ < QQ.length; qQ++) {
            const oQ = QQ[qQ];
            if ("\\" === oQ) {
              var wQ;
              const LQ = null !== (wQ = QQ[qQ + 1]) && void 0 !== wQ ? wQ : "";
              FQ += "'" === LQ ? "'" : oQ + LQ, qQ++
            } else if ('"' === oQ) FQ += '\\"';
            else {
              var LQ;
              FQ += null !== (LQ = Qw[oQ]) && void 0 !== LQ ? LQ : oQ
            }
          }
          return `"${FQ}"`
        }

        function ww(QQ) {
          if ("string" === typeof QQ) return !0;
          if (!QQ || "object" !== typeof QQ || Array.isArray(QQ)) return !1;
          const FQ = QQ;
          return "ProgressBar" === FQ.type ? "number" === typeof FQ.progress : "StyledKeyBinding" === FQ.type ? jF.n.includes(FQ.action) : "string" === typeof FQ.icon || "string" === typeof FQ.str || "string" === typeof FQ.entityName || "string" === typeof FQ.translationKey
        }

        function Lw(QQ) {
          let FQ;
          try {
            FQ = function(QQ) {
              let FQ = "",
                wQ = "",
                LQ = 0;
              const qQ = () => {
                FQ += wQ.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), wQ = ""
              };
              for (; LQ < QQ.length;) {
                const oQ = QQ.slice(LQ).search(/["'`]|\/\//);
                if (-1 === oQ) {
                  wQ += QQ.slice(LQ);
                  break
                }
                wQ += QQ.slice(LQ, LQ + oQ);
                const DQ = LQ + oQ,
                  kQ = QQ[DQ];
                if ("/" === kQ) {
                  const FQ = QQ.indexOf("\n", DQ);
                  LQ = -1 === FQ ? QQ.length : FQ;
                  continue
                }
                if (qQ(), "`" === kQ) throw new Error("Use quotes rather than template strings.");
                let vQ = DQ + 1;
                for (; vQ < QQ.length && QQ[vQ] !== kQ;) vQ += "\\" === QQ[vQ] ? 2 : 1;
                if (vQ >= QQ.length) throw new Error("A string is missing its closing quote.");
                const mQ = QQ.slice(DQ + 1, vQ);
                FQ += Fw(mQ), LQ = vQ + 1
              }
              return qQ(), JSON.parse(FQ)
            }(QQ.trim())
          } catch (LQ) {
            return {
              parts: null,
              error: LQ instanceof SyntaxError ? "This isn't a valid array yet." : LQ.message
            }
          }
          if (!Array.isArray(FQ)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const wQ = FQ.findIndex((QQ => !ww(QQ)));
          return -1 !== wQ ? {
            parts: null,
            error: `Part ${wQ+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: FQ,
            error: null
          }
        }
        const qw = 1 / UF.e.clientTicksPerSecond,
          ow = 700,
          Dw = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          kw = {
            progressBar: zF.progressBar.TL,
            timedClick: zF.timedClick.icon,
            gravityBar: zF.gravityBar.icon,
            precisionBar: zF.precisionBar.icon,
            rhythmClick: zF.rhythmClick.icon
          };

        function vw(QQ) {
          let {
            type: FQ
          } = QQ;
          const [wQ, qQ] = (0, LQ.useState)("ready"), [DQ, kQ] = (0, LQ.useState)(1), [vQ, mQ] = (0, LQ.useState)(!0), uQ = (0, LQ.useRef)(null), HQ = (0, LQ.useRef)(null), bQ = (0, LQ.useRef)(null), YQ = (0, LQ.useRef)(new Set), AQ = (0, LQ.useRef)(!1), eQ = kw[FQ], MQ = (0, LQ.useMemo)((() => ({
            getState: () => {
              var QQ, FQ;
              return null !== (QQ = null === (FQ = bQ.current) || void 0 === FQ ? void 0 : FQ.getState()) && void 0 !== QQ ? QQ : Dw
            },
            onFrame: QQ => (YQ.current.add(QQ), () => {
              YQ.current.delete(QQ)
            })
          })), []);
          (0, LQ.useEffect)((() => {
            const QQ = uQ.current,
              FQ = HQ.current;
            if (!QQ || !FQ) return;
            const wQ = new ResizeObserver((() => {
              kQ(QQ.clientWidth / Math.max(1, FQ.offsetWidth))
            }));
            return wQ.observe(QQ), () => {
              wQ.disconnect()
            }
          }), []), (0, LQ.useEffect)((() => {
            var QQ;
            if ("playing" !== wQ) return;
            let LQ = !1;
            const oQ = new KF.d[FQ](zF[FQ], (QQ => {
              LQ = !0, mQ(!1), qQ(QQ ? "succeeded" : "failed")
            }), (() => {}));
            bQ.current = oQ;
            let DQ = 0,
              kQ = performance.now(),
              vQ = requestAnimationFrame((function QQ(FQ) {
                for (DQ += Math.min(.25, (FQ - kQ) / 1e3), kQ = FQ; DQ >= qw && !LQ;) DQ -= qw, oQ.handleTick(qw);
                for (const wQ of YQ.current) wQ();
                LQ || (vQ = requestAnimationFrame(QQ))
              }));
            return null === (QQ = uQ.current) || void 0 === QQ || QQ.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(vQ), oQ.tearDown(), bQ.current = null, AQ.current = !1
            }
          }), [wQ, FQ]), (0, LQ.useEffect)((() => {
            if (vQ) return;
            const QQ = setTimeout((() => {
              mQ(!0)
            }), ow);
            return () => {
              clearTimeout(QQ)
            }
          }), [vQ]);
          const GQ = QQ => {
            var FQ;
            "playing" === wQ && AQ.current !== QQ && (AQ.current = QQ, null === (FQ = bQ.current) || void 0 === FQ || FQ.handleMouseInput(QQ))
          };
          return (0, xQ.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, xQ.jsxs)("div", {
              ref: uQ,
              className: oQ()("DocsQteStage", {
                Playing: "playing" === wQ
              }),
              tabIndex: "playing" === wQ ? 0 : -1,
              role: "playing" === wQ ? "button" : void 0,
              "aria-label": "playing" === wQ ? `${FQ} quick time event: click or press Space` : void 0,
              onPointerDown: QQ => {
                0 === QQ.button && GQ(!0)
              },
              onPointerUp: () => {
                GQ(!1)
              },
              onPointerLeave: () => {
                GQ(!1)
              },
              onPointerCancel: () => {
                GQ(!1)
              },
              onKeyDown: QQ => {
                "playing" !== wQ || " " !== QQ.key && "Enter" !== QQ.key || (QQ.preventDefault(), GQ(!0))
              },
              onKeyUp: QQ => {
                "playing" !== wQ || " " !== QQ.key && "Enter" !== QQ.key || GQ(!1)
              },
              children: [(0, xQ.jsx)("div", {
                ref: HQ,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${DQ})`
                },
                children: "playing" === wQ && (0, xQ.jsx)(TF.d.Provider, {
                  value: MQ,
                  children: (0, xQ.jsx)(NF.b, {
                    qte: {
                      type: FQ,
                      parameters: zF[FQ]
                    }
                  })
                })
              }), "playing" !== wQ && (0, xQ.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== wQ && (0, xQ.jsxs)("div", {
                  className: oQ()("DocsQteResult", "succeeded" === wQ ? "Succeeded" : "Failed"),
                  children: [(0, xQ.jsx)(tQ, {
                    name: "succeeded" === wQ ? "check" : "cross",
                    isTinted: !0
                  }), (0, xQ.jsx)("span", {
                    children: "succeeded" === wQ ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, xQ.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !vQ,
                  onClick: () => {
                    qQ("playing")
                  },
                  children: [(0, xQ.jsx)(tQ, {
                    name: "ready" === wQ ? "play" : "replay"
                  }), (0, xQ.jsx)("span", {
                    children: "ready" === wQ ? `Try ${FQ}` : "Play again"
                  })]
                })]
              })]
            }), eQ && !aF(eQ) && (0, xQ.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, xQ.jsx)("code", {
                children: eQ
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function mw(QQ) {
          let {
            level: FQ,
            text: wQ,
            anchor: LQ,
            className: qQ
          } = QQ;
          const DQ = `h${Math.min(FQ,6)}`;
          return (0, xQ.jsxs)(DQ, {
                id: LQ,
                className: oQ()("DocsHeading", qQ),
                children: [(0, xQ.jsx)(CF, {
                      text: wQ
                    }), (0, xQ.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${LQ}`,
                        "aria-label": `Link to ${wQ.replace(/`/g,"")}`,children:"#"})]})}function uw(QQ){let{items:FQ,ordered:wQ}=QQ;const LQ=wQ?"ol":"ul";return(0,xQ.jsx)(LQ,{className:"DocsList",children:FQ.map(((QQ,FQ)=>(0,xQ.jsxs)("li",{children:[(0,xQ.jsx)(CF,{text:QQ.text}),QQ.children.length>0&&(0,xQ.jsx)(uw,{items:QQ.children,ordered:wQ})]},FQ)))})}function Hw(QQ){const FQ=QQ[0],wQ="paragraph"===(null===FQ||void 0===FQ?void 0:FQ.kind)?FQ.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(wQ)?"warning":/^\*\*(tip|prefer)/.test(wQ)?"tip":"note"}function bw(QQ){let{block:FQ}=QQ;switch(FQ.kind){case"heading":return(0,xQ.jsx)(mw,{level:FQ.level,text:FQ.text,anchor:FQ.anchor});case"paragraph":return(0,xQ.jsx)("p",{children:(0,xQ.jsx)(CF,{text:FQ.text})});case"code":{const QQ="ts"===FQ.lang?function(QQ){const FQ=QQ.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return FQ&&Object.hasOwn(zF,FQ[1])?FQ[1]:null}(FQ.code):null;return(0,xQ.jsxs)(xQ.Fragment,{children:[(0,xQ.jsx)(SQ,{code:FQ.code,lang:FQ.lang}),QQ&&(0,xQ.jsx)(vw,{type:QQ})]})}case"table":return(0,xQ.jsx)("div",{className:"DocsTableScroll",children:(0,xQ.jsxs)("table",{className:"DocsTable",children:[(0,xQ.jsx)("thead",{children:(0,xQ.jsx)("tr",{children:FQ.header.map(((QQ,FQ)=>(0,xQ.jsx)("th",{children:(0,xQ.jsx)(CF,{text:QQ})},FQ)))})}),(0,xQ.jsx)("tbody",{children:FQ.rows.map(((QQ,FQ)=>(0,xQ.jsx)("tr",{children:QQ.map(((QQ,FQ)=>(0,xQ.jsx)("td",{children:(0,xQ.jsx)(CF,{text:QQ})},FQ)))},FQ)))})]})});case"list":return(0,xQ.jsx)(uw,{items:FQ.items,ordered:FQ.ordered});case"quote":return(0,xQ.jsx)("aside",{className:oQ()("DocsCallout",Hw(FQ.blocks)),children:(0,xQ.jsx)(Yw,{blocks:FQ.blocks})});case"rule":return(0,xQ.jsx)("hr",{className:"DocsRule"})}}function Yw(QQ){let{blocks:FQ}=QQ;return(0,xQ.jsx)(xQ.Fragment,{children:FQ.map(((QQ,FQ)=>(0,xQ.jsx)(bw,{block:QQ},FQ)))})}var xw=wQ(4597),Aw=wQ(4605);function tw(QQ){return"blocks"===QQ||"items"===QQ}const ew=new Map;function Mw(QQ){let FQ=ew.get(QQ);return FQ||(FQ=function(QQ){const FQ={entries:[],legend:[],notes:[],examples:[]};let wQ=!1;for(const oQ of QQ.split(/\r?\n/).slice(1)){if(oQ.startsWith("#")){const QQ=oQ.replace(/^# ?/,""),LQ=QQ.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);LQ?FQ.legend.push({code:LQ[1],meaning:LQ[2],usage:LQ[3].trim()}):/^Examples:/.test(QQ.trim())?wQ=!0:wQ&&QQ.trim()?FQ.examples.push(QQ.trim()):QQ.trim()&&!/^\s/.test(QQ)&&FQ.notes.push(QQ.trim());continue}const QQ=oQ.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var LQ,qQ;QQ&&FQ.entries.push({name:QQ[1],variants:null!==(LQ=null===(qQ=QQ[2])||void 0===qQ?void 0:qQ.split(","))&&void 0!==LQ?LQ:[]})}return FQ}("blocks"===QQ?xw:Aw),ew.set(QQ,FQ)),FQ}function Gw(QQ){let{className:FQ,value:wQ,placeholder:LQ,label:qQ,onChange:oQ,count:DQ,children:kQ}=QQ;return(0,xQ.jsxs)("div",{className:FQ,children:[(0,xQ.jsx)(tQ,{name:"magnifying-glass"}),(0,xQ.jsx)("input",{type:"search",value:wQ,placeholder:LQ,"aria-label":qQ,onChange:QQ=>{oQ(QQ.target.value)}}),kQ,DQ&&(0,xQ.jsxs)("span",{className:"DocsFilterCount",children:[DQ.visible," of ",DQ.total]})]})}var pw=wQ(1079);function Cw(QQ){const FQ=QQ.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return FQ?FQ[2]:null}function Sw(QQ){return"paragraph"===QQ.kind&&""===QQ.text.trim()}function iw(QQ){const FQ={name:QQ.heading.text,description:[],params:[],returns:null};let wQ="description";for(const qQ of QQ.blocks)if(!Sw(qQ))if("heading"===qQ.kind&&/^Parameters:?$/.test(qQ.text))wQ="params";else if("heading"===qQ.kind&&/^Returns:?$/.test(qQ.text))wQ="returns",FQ.returns={type:"",description:[]};else if("params"!==wQ||"table"!==qQ.kind){if("returns"===wQ&&"paragraph"===qQ.kind&&""===FQ.returns.type){const QQ=Cw(qQ.text);if(null!==QQ){FQ.returns.type=QQ.replaceAll("\\|","|");continue}}"returns"===wQ?FQ.returns.description.push(qQ):FQ.description.push(qQ)}else for(const[QQ,wQ,oQ]of qQ.rows){var LQ;FQ.params.push({name:QQ,type:null!==(LQ=Cw(wQ))&&void 0!==LQ?LQ:wQ,description:null!==oQ&&void 0!==oQ?oQ:""})}return FQ}const Ww=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function Rw(QQ){return QQ.filter((QQ=>!Sw(QQ)))}const Ow=/^[\w][\w .'&!:()-]*$/,sw=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function rw(QQ){var FQ;if("code"===QQ.kind&&"text"===QQ.lang){const FQ=QQ.code.split("\n").map((QQ=>QQ.trim())).filter(Boolean);return FQ.length>0&&FQ.every((QQ=>Ow.test(QQ)))?FQ.map((QQ=>({name:QQ}))):null}return"paragraph"===QQ.kind&&sw.test(QQ.text.trim())?[...QQ.text.matchAll(/`([ ^ `]+)` / g)].flatMap((QQ => QQ[1].split(/,\s*/).map((QQ => ({
                              name: QQ.trim()
                            }))))): "table" === QQ.kind && null !== (FQ = QQ.header[0]) && void 0 !== FQ && FQ.startsWith("Song") ? QQ.rows.map((QQ => {
                              let [FQ, wQ] = QQ;
                              return {
                                name: FQ.replace(/`/g, ""),
                                caption: wQ
                              }
                            })) : null
                          }

                          function Iw(QQ) {
                            const FQ = [];
                            for (const wQ of QQ) {
                              const QQ = rw(wQ),
                                LQ = FQ.at(-1),
                                qQ = "table" === wQ.kind;
                              QQ ? "names" === (null === LQ || void 0 === LQ ? void 0 : LQ.kind) && LQ.isSongs === qQ ? LQ.names.push(...QQ) : FQ.push({
                                kind: "names",
                                names: QQ,
                                isSongs: qQ
                              }) : FQ.push({
                                kind: "block",
                                block: wQ
                              })
                            }
                            return FQ
                          }
                          const Uw = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function Nw(QQ, FQ) {
                            return `${Uw[QQ]}-${(0,iQ.u)(FQ)}`
                          }
                          const Tw = new WeakMap;

                          function Kw(QQ, FQ, wQ) {
                            let LQ = Tw.get(FQ);
                            if (!LQ) {
                              LQ = new Map;
                              const wQ = new Set;
                              for (const qQ of (0, iQ.y)(FQ)) {
                                const FQ = Iw(Rw(qQ.blocks)).map((FQ => {
                                  if ("block" === FQ.kind) return FQ;
                                  return {
                                    kind: "names",
                                    names: FQ.names.map((FQ => {
                                      var LQ, oQ;
                                      const DQ = Nw(QQ, FQ.name);
                                      let kQ = DQ;
                                      for (let QQ = 2; wQ.has(kQ); QQ++) kQ = `${DQ}-${QQ}`;
                                      return wQ.add(kQ), {
                                        ...FQ,
                                        anchor: kQ,
                                        heading: null !== (LQ = null === (oQ = qQ.heading) || void 0 === oQ ? void 0 : oQ.text) && void 0 !== LQ ? LQ : ""
                                      }
                                    })),
                                    isSongs: FQ.isSongs
                                  }
                                }));
                                LQ.set(qQ.blocks, FQ)
                              }
                              Tw.set(FQ, LQ)
                            }
                            const qQ = LQ.get(wQ);
                            if (!qQ) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return qQ
                          }
                          const zw = "/textures/docs/skinPreviews",
                            lw = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var jw = wQ(4109),
                            aw = wQ(4119);

                          function Xw(QQ) {
                            return Object.hasOwn(jw.e, QQ) ? jw.e[QQ] : null
                          }
                          const fw = {
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
                            blendMode: aw.f.Standard
                          };

                          function Vw(QQ, FQ, wQ) {
                            return FQ + (wQ - FQ) * QQ()
                          }

                          function hw(QQ, FQ, wQ) {
                            return QQ + (FQ - QQ) * wQ
                          }

                          function Jw(QQ) {
                            return QQ.length > 0 && "timeFraction" in QQ[0]
                          }

                          function Ew(QQ, FQ) {
                            if (0 === QQ.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!Jw(QQ.colorGradients)) {
                              const wQ = QQ.colorGradients,
                                {
                                  color: LQ
                                } = wQ[Math.floor(FQ() * wQ.length) % wQ.length];
                              return [{
                                at: 0,
                                colour: [LQ[0] / 255, LQ[1] / 255, LQ[2] / 255, 1]
                              }]
                            }
                            return [...QQ.colorGradients].sort(((QQ, FQ) => QQ.timeFraction - FQ.timeFraction)).map((QQ => {
                              var wQ, LQ, qQ;
                              const oQ = QQ.minColor,
                                DQ = null !== (wQ = QQ.maxColor) && void 0 !== wQ ? wQ : oQ,
                                kQ = FQ(),
                                vQ = [hw(oQ[0], DQ[0], kQ) / 255, hw(oQ[1], DQ[1], kQ) / 255, hw(oQ[2], DQ[2], kQ) / 255, hw(null !== (LQ = oQ[3]) && void 0 !== LQ ? LQ : 1, null !== (qQ = DQ[3]) && void 0 !== qQ ? qQ : 1, kQ)];
                              return {
                                at: QQ.timeFraction,
                                colour: vQ
                              }
                            }))
                          }

                          function nw(QQ, FQ, wQ, LQ) {
                            const qQ = Vw(LQ, QQ.minEmitPower, QQ.maxEmitPower),
                              oQ = FQ => Vw(LQ, Math.min(QQ.dir1[FQ], QQ.dir2[FQ]), Math.max(QQ.dir1[FQ], QQ.dir2[FQ])) * qQ,
                              DQ = [...QQ.velocityGradients].sort(((QQ, FQ) => QQ.timeFraction - FQ.timeFraction)).map((QQ => ({
                                at: QQ.timeFraction,
                                factor: Vw(LQ, QQ.factor, QQ.factor2)
                              })));
                            return {
                              pos: [Vw(LQ, FQ[0], wQ[0]), Vw(LQ, FQ[1], wQ[1]), Vw(LQ, FQ[2], wQ[2])],
                              dir: [oQ(0), oQ(1), oQ(2)],
                              age: 0,
                              life: Vw(LQ, QQ.minLifeTime, QQ.maxLifeTime),
                              size: Vw(LQ, QQ.minSize, QQ.maxSize),
                              colours: Ew(QQ, LQ),
                              velocityFactors: DQ
                            }
                          }

                          function gw(QQ, FQ, wQ, LQ) {
                            if (FQ < QQ[0].at) return wQ(Math.min(1, QQ.length - 1));
                            for (let qQ = 0; qQ < QQ.length - 1; qQ++)
                              if (FQ <= QQ[qQ + 1].at) {
                                const oQ = QQ[qQ + 1].at - QQ[qQ].at;
                                return LQ(wQ(qQ), wQ(qQ + 1), oQ > 0 ? (FQ - QQ[qQ].at) / oQ : 1)
                              } return wQ(QQ.length - 1)
                          }

                          function Pw(QQ) {
                            return gw(QQ.colours, QQ.age / QQ.life, (FQ => QQ.colours[FQ].colour), ((QQ, FQ, wQ) => [hw(QQ[0], FQ[0], wQ), hw(QQ[1], FQ[1], wQ), hw(QQ[2], FQ[2], wQ), hw(QQ[3], FQ[3], wQ)]))
                          }

                          function Zw(QQ, FQ, wQ) {
                            if (QQ.age += wQ, QQ.age >= QQ.life) return !1;
                            const LQ = function(QQ) {
                              return 0 === QQ.velocityFactors.length ? 1 : gw(QQ.velocityFactors, QQ.age / QQ.life, (FQ => QQ.velocityFactors[FQ].factor), hw)
                            }(QQ) * wQ;
                            for (let oQ = 0; oQ < 3; oQ++) {
                              var qQ;
                              QQ.pos[oQ] += QQ.dir[oQ] * LQ, QQ.dir[oQ] += (null !== (qQ = FQ[oQ]) && void 0 !== qQ ? qQ : 0) * wQ
                            }
                            return !0
                          }

                          function yw(QQ) {
                            return String(Math.round(1e6 * QQ) / 1e6)
                          }

                          function Bw(QQ) {
                            return `[${QQ.map(yw).join(", ")}]`
                          }

                          function dw(QQ, FQ) {
                            const wQ = `${FQ}    `;
                            return `[\n${(Jw(QQ)?QQ.map((QQ=>{const FQ=[`${wQ}    timeFraction: ${yw(QQ.timeFraction)},`,`${wQ}    minColor: ${Bw(QQ.minColor)},`];return QQ.maxColor&&FQ.push(`${wQ}    maxColor: ${Bw(QQ.maxColor)},`),`${wQ}{\n${FQ.join("\n")}\n${wQ}},`})):QQ.map((QQ=>`
                            $ {
                              wQ
                            } {
                              color: $ {
                                Bw(QQ.color)
                              }
                            }, `))).join("\n")}\n${FQ}]`
                          }
                          const QL = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            FL = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const wL = .6;

                          function LL(QQ, FQ) {
                            return `${FQ?"song":"sound"}:${QQ}`
                          }
                          let qL = {
                              track: null,
                              volume: wL
                            },
                            oL = null,
                            DL = 0,
                            kL = 0;
                          const vL = new Set;

                          function mL(QQ) {
                            qL = {
                              ...qL,
                              ...QQ
                            }, vL.forEach((QQ => {
                              QQ()
                            }))
                          }

                          function uL(QQ) {
                            qL.track && mL({
                              track: {
                                ...qL.track,
                                ...QQ
                              }
                            })
                          }

                          function HL(QQ) {
                            const [FQ, wQ] = (0, LQ.useState)((() => QQ(qL))), qQ = (0, LQ.useRef)(QQ);
                            return qQ.current = QQ, (0, LQ.useEffect)((() => {
                              const QQ = () => {
                                wQ((() => qQ.current(qL)))
                              };
                              return vL.add(QQ), QQ(), () => {
                                vL.delete(QQ)
                              }
                            }), []), FQ
                          }

                          function bL() {
                            DL++;
                            const QQ = oL;
                            oL = null, null === QQ || void 0 === QQ || QQ.stop()
                          }

                          function YL(QQ, FQ) {
                            let LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            bL();
                            const qQ = DL,
                              {
                                track: oQ
                              } = qL,
                              DQ = oQ && oQ.name === QQ && oQ.isSong === FQ ? oQ.duration : 0;
                            kL = LQ, mL({
                              track: {
                                name: QQ,
                                isSong: FQ,
                                status: "loading",
                                duration: DQ
                              }
                            }), Promise.all([wQ.e(217), wQ.e(241)]).then((() => wQ(39195))).then((wQ => {
                              let {
                                playDocsSound: oQ
                              } = wQ;
                              qQ === DL && (oL = oQ(QQ, FQ, qL.volume, LQ, {
                                onPlay: QQ => {
                                  qQ === DL && uL({
                                    status: "playing",
                                    duration: QQ
                                  })
                                },
                                onEnd: QQ => {
                                  var FQ, wQ;
                                  qQ === DL && (oL = null, QQ ? mL({
                                    track: null
                                  }) : (kL = null !== (FQ = null === (wQ = qL.track) || void 0 === wQ ? void 0 : wQ.duration) && void 0 !== FQ ? FQ : 0, uL({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((FQ => {
                              console.error(`Could not play docs sound ${QQ}`, FQ), qQ === DL && mL({
                                track: null
                              })
                            }))
                          }

                          function xL() {
                            const {
                              track: QQ
                            } = qL;
                            if (!QQ) return;
                            if ("playing" === QQ.status && oL) return kL = oL.Qp(), oL.pause(), void uL({
                              status: "paused"
                            });
                            if ("loading" === QQ.status) return bL(), void uL({
                              status: "paused"
                            });
                            if (oL) return void oL.resume();
                            const FQ = QQ.duration > 0 && kL >= QQ.duration - .05;
                            YL(QQ.name, QQ.isSong, FQ ? 0 : kL)
                          }

                          function AL() {
                            var QQ;
                            return oL && "playing" === (null === (QQ = qL.track) || void 0 === QQ ? void 0 : QQ.status) ? oL.Qp() : kL
                          }

                          function tL(QQ) {
                            var FQ;
                            null === (FQ = oL) || void 0 === FQ || FQ.setVolume(QQ), mL({
                              volume: QQ
                            })
                          }

                          function eL() {
                            bL(), kL = 0, mL({
                              track: null
                            })
                          }
                          const ML = (0, LQ.createContext)(null);
                          let GL = null;

                          function pL() {
                            const [QQ, FQ] = (0, LQ.useState)(null);
                            return (0, LQ.useEffect)((() => {
                              let QQ = !1;
                              return GL ??= Promise.all([wQ.e(70), wQ.e(73), wQ.e(72), wQ.e(71), wQ.e(197), wQ.e(97), wQ.e(221)]).then((() => wQ(39193))), GL.then((wQ => {
                                QQ || FQ(wQ)
                              }), (QQ => {
                                console.error("Could not load the docs gallery's textures", QQ), GL = null
                              })), () => {
                                QQ = !0
                              }
                            }), []), QQ
                          }
                          const cL = 24,
                            CL = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function SL(QQ, FQ) {
                            const wQ = "skins" === QQ ? function(QQ, FQ) {
                              const wQ = lw.find((FQ => QQ.startsWith(FQ.heading)));
                              return wQ ? function(QQ, FQ) {
                                return `${QQ}-${FQ}`
                              }(wQ.prefix, FQ) : null
                            }(FQ.heading, FQ.name) : null;
                            return null === wQ ? null : `${zw}/${wQ}.webp`
                          }

                          function iL(QQ) {
                            let {
                              kind: FQ,
                              entry: wQ,
                              assets: qQ,
                              renderedUrl: DQ
                            } = QQ;
                            const {
                              name: kQ
                            } = wQ, [vQ, mQ] = (0, LQ.useState)(!1);
                            if ("icons" === FQ && aF(kQ)) return (0, xQ.jsx)(pw.c, {
                              className: "DocsTileIcon",
                              name: kQ
                            });
                            let uQ = null;
                            var HQ;
                            if ("icons" === FQ) uQ = null !== (HQ = null === qQ || void 0 === qQ ? void 0 : qQ.getIngameIconUrl(kQ)) && void 0 !== HQ ? HQ : null;
                            else if ("particles" === FQ) {
                              var bQ, YQ, AQ;
                              uQ = null !== (bQ = null === qQ || void 0 === qQ ? void 0 : qQ.getParticleTextureUrl(null !== (YQ = null === (AQ = Xw(kQ)) || void 0 === AQ ? void 0 : AQ.texture) && void 0 !== YQ ? YQ : kQ)) && void 0 !== bQ ? bQ : null
                            } else "skins" === FQ && (uQ = null !== DQ && void 0 !== DQ ? DQ : CL.test(kQ) ? `/textures/charSkins/previews/${kQ}_preview.png` : null);
                            return !uQ || vQ ? (0, xQ.jsx)(tQ, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === FQ ? "person" : "image"
                            }) : (0, xQ.jsx)("img", {
                              className: oQ()("DocsTileImage", {
                                Pixelated: "skins" !== FQ
                              }),
                              src: uQ,
                              srcSet: uQ === DQ ? `${uQ} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${uQ}`), mQ(!0)
                              }
                            })
                          }

                          function WL(QQ) {
                            let {
                              entry: FQ,
                              isSong: wQ
                            } = QQ;
                            const LQ = HL((QQ => {
                                let {
                                  track: LQ
                                } = QQ;
                                return (null === LQ || void 0 === LQ ? void 0 : LQ.name) === FQ.name && LQ.isSong === wQ ? LQ.status : null
                              })),
                              qQ = null !== LQ && "paused" !== LQ;
                            return (0, xQ.jsxs)("button", {
                              type: "button",
                              id: FQ.anchor,
                              className: oQ()("DocsSoundTile", {
                                Playing: qQ
                              }),
                              "data-docs-track": LL(FQ.name, wQ),
                              "aria-label": qQ ? `Pause ${FQ.name}` : `Play ${FQ.name}`,
                              onClick: () => {
                                null !== LQ ? xL() : YL(FQ.name, wQ)
                              },
                              children: [(0, xQ.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, xQ.jsx)(tQ, {
                                  name: qQ ? "pause" : "play"
                                })
                              }), (0, xQ.jsx)("code", {
                                className: "DocsSoundName",
                                children: FQ.name
                              }), FQ.caption && (0, xQ.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: FQ.caption
                              })]
                            })
                          }

                          function RL(QQ) {
                            let {
                              kind: FQ,
                              names: wQ,
                              isSongs: qQ
                            } = QQ;
                            const DQ = pL(),
                              [kQ, vQ] = MQ(),
                              mQ = !1 === (null === kQ || void 0 === kQ ? void 0 : kQ.failed) ? kQ.text : null,
                              uQ = (0, LQ.useContext)(ML),
                              [HQ, bQ] = (0, LQ.useState)(""),
                              YQ = HQ.trim().toLowerCase(),
                              AQ = YQ ? wQ.filter((QQ => QQ.name.toLowerCase().includes(YQ))) : wQ;
                            return (0, xQ.jsxs)("div", {
                              className: "DocsGallery",
                              children: [wQ.length > cL && (0, xQ.jsx)(Gw, {
                                className: "DocsGalleryFilter",
                                value: HQ,
                                placeholder: `Filter ${wQ.length} names\u2026`,
                                label: "Filter names",
                                onChange: bQ,
                                count: YQ ? {
                                  visible: AQ.length,
                                  total: wQ.length
                                } : null
                              }), (0, xQ.jsx)("div", {
                                className: oQ()("DocsGalleryGrid", `Kind-${FQ}`, {
                                  Songs: qQ
                                }),
                                children: AQ.map((QQ => {
                                  if ("sounds" === FQ) return (0, xQ.jsx)(WL, {
                                    entry: QQ,
                                    isSong: qQ
                                  }, QQ.anchor);
                                  if (uQ && "particles" === FQ && Xw(QQ.name)) return (0, xQ.jsxs)("button", {
                                    type: "button",
                                    id: QQ.anchor,
                                    className: oQ()("DocsTile Previewable", {
                                      Copied: mQ === QQ.name
                                    }),
                                    title: `Play "${QQ.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      uQ(QQ.name), vQ(QQ.name)
                                    },
                                    children: [(0, xQ.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, xQ.jsx)(iL, {
                                        kind: FQ,
                                        entry: QQ,
                                        assets: DQ,
                                        renderedUrl: null
                                      }), (0, xQ.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, xQ.jsx)(tQ, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, xQ.jsx)("span", {
                                      className: "DocsTileName",
                                      children: mQ === QQ.name ? "Copied!" : QQ.name
                                    })]
                                  }, QQ.anchor);
                                  const wQ = SL(FQ, QQ);
                                  return (0, xQ.jsxs)("button", {
                                    type: "button",
                                    id: QQ.anchor,
                                    className: oQ()("DocsTile", {
                                      Copied: mQ === QQ.name
                                    }),
                                    title: `Copy "${QQ.name}"`,
                                    onClick: () => {
                                      vQ(QQ.name)
                                    },
                                    children: [(0, xQ.jsx)("span", {
                                      className: oQ()("DocsTilePreview", {
                                        Rendered: null !== wQ
                                      }),
                                      children: (0, xQ.jsx)(iL, {
                                        kind: FQ,
                                        entry: QQ,
                                        assets: DQ,
                                        renderedUrl: wQ
                                      })
                                    }), (0, xQ.jsx)("span", {
                                      className: "DocsTileName",
                                      children: mQ === QQ.name ? "Copied!" : QQ.name
                                    })]
                                  }, QQ.anchor)
                                }))
                              })]
                            })
                          }

                          function OL(QQ) {
                            let {
                              kind: FQ,
                              content: wQ,
                              blocks: LQ
                            } = QQ;
                            return (0, xQ.jsx)(xQ.Fragment, {
                              children: Kw(FQ, wQ, LQ).map(((QQ, wQ) => "block" === QQ.kind ? (0, xQ.jsx)(bw, {
                                block: QQ.block
                              }, wQ) : (0, xQ.jsx)(RL, {
                                kind: FQ,
                                names: QQ.names,
                                isSongs: QQ.isSongs
                              }, wQ)))
                            })
                          }
                          const sL = [{
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

                          function rL(QQ) {
                            let {
                              cards: FQ = sL,
                              label: wQ = "Start here"
                            } = QQ;
                            const qQ = (0, LQ.useContext)(YF);
                            return (0, xQ.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": wQ,
                              children: FQ.map((QQ => {
                                let {
                                  pageId: FQ,
                                  countNoun: wQ
                                } = QQ;
                                const LQ = jQ(FQ);
                                return (0, xQ.jsxs)(DQ.b, {
                                  to: JQ(qQ, LQ),
                                  className: "DocsLandingCard",
                                  children: [(0, xQ.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, xQ.jsx)(tQ, {
                                      name: LQ.icon
                                    })
                                  }), (0, xQ.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: LQ.title
                                  }), (0, xQ.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: LQ.summary
                                  }), wQ && (0, xQ.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [XQ(LQ).sections.length, " ", wQ]
                                  })]
                                }, FQ)
                              }))
                            })
                          }
                          const IL = 240;

                          function UL(QQ) {
                            let {
                              faces: FQ
                            } = QQ;
                            return (0, xQ.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, xQ.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${FQ.top}")`
                                }
                              }), (0, xQ.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${FQ.left}")`
                                }
                              }), (0, xQ.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${FQ.right}")`
                                }
                              })]
                            })
                          }

                          function NL(QQ) {
                            let {
                              src: FQ
                            } = QQ;
                            const [wQ, qQ] = (0, LQ.useState)(!1);
                            return wQ ? null : (0, xQ.jsx)("img", {
                              src: FQ,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${FQ}`), qQ(!0)
                              }
                            })
                          }

                          function TL(QQ) {
                            let {
                              kind: FQ
                            } = QQ;
                            const wQ = Mw(FQ),
                              qQ = pL(),
                              DQ = (0, kQ.r)(),
                              [vQ, mQ] = (0, LQ.useState)(""),
                              [uQ, HQ] = (0, LQ.useState)(null),
                              [bQ, YQ] = (0, LQ.useState)(IL),
                              [AQ, eQ] = (0, LQ.useState)(null),
                              MQ = (0, LQ.useRef)(null),
                              pQ = vQ.trim().toLowerCase();
                            (0, LQ.useEffect)((() => {
                              const QQ = (0, iQ.q)(DQ.hash),
                                LQ = wQ.entries.find((wQ => Nw(FQ, wQ.name) === QQ));
                              if (LQ) MQ.current = LQ.name, mQ(LQ.name), HQ(null), eQ(LQ.name);
                              else if (null !== MQ.current) {
                                const QQ = MQ.current;
                                MQ.current = null, mQ((FQ => FQ === QQ ? "" : FQ)), eQ(null)
                              }
                            }), [wQ, FQ, DQ.hash, DQ.key]), (0, LQ.useEffect)((() => {
                              var QQ;
                              null !== AQ && (null === (QQ = document.getElementById(Nw(FQ, AQ))) || void 0 === QQ || QQ.scrollIntoView({
                                block: "center"
                              }))
                            }), [FQ, AQ]);
                            const cQ = wQ.entries.filter((QQ => (!pQ || QQ.name.toLowerCase().includes(pQ)) && (!uQ || QQ.variants.includes(uQ))));
                            return (0, xQ.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [wQ.notes.length > 0 && (0, xQ.jsx)("div", {
                                className: "DocsProse",
                                children: wQ.notes.map((QQ => (0, xQ.jsx)("p", {
                                  children: QQ
                                }, QQ)))
                              }), wQ.legend.length > 0 && (0, xQ.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, xQ.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, xQ.jsx)("thead", {
                                    children: (0, xQ.jsxs)("tr", {
                                      children: [(0, xQ.jsx)("th", {
                                        children: "Code"
                                      }), (0, xQ.jsx)("th", {
                                        children: "Variant"
                                      }), (0, xQ.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, xQ.jsx)("tbody", {
                                    children: wQ.legend.map((QQ => (0, xQ.jsxs)("tr", {
                                      children: [(0, xQ.jsx)("td", {
                                        children: (0, xQ.jsx)("button", {
                                          type: "button",
                                          className: oQ()("DocsVariantChip", {
                                            Active: uQ === QQ.code
                                          }),
                                          "aria-pressed": uQ === QQ.code,
                                          title: `Show only ${FQ} with ${QQ.meaning} variants`,
                                          onClick: () => {
                                            HQ(uQ === QQ.code ? null : QQ.code)
                                          },
                                          children: QQ.code
                                        })
                                      }), (0, xQ.jsx)("td", {
                                        children: QQ.meaning
                                      }), (0, xQ.jsx)("td", {
                                        children: (0, xQ.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: QQ.usage
                                        })
                                      })]
                                    }, QQ.code)))
                                  })]
                                })
                              }), wQ.examples.length > 0 && (0, xQ.jsx)(SQ, {
                                lang: "text",
                                code: wQ.examples.join("\n")
                              }), (0, xQ.jsx)(Gw, {
                                className: "DocsFilterBar",
                                value: vQ,
                                placeholder: `Search ${wQ.entries.length} ${FQ}\u2026`,
                                label: `Search ${FQ}`,
                                onChange: QQ => {
                                  mQ(QQ), YQ(IL)
                                },
                                count: pQ || uQ ? {
                                  visible: cQ.length,
                                  total: wQ.entries.length
                                } : null,
                                children: uQ && (0, xQ.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    HQ(null)
                                  },
                                  children: [uQ, " ", (0, xQ.jsx)(tQ, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, xQ.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: cQ.slice(0, bQ).map((QQ => {
                                  const wQ = "blocks" === FQ ? null === qQ || void 0 === qQ ? void 0 : qQ.getBlockFaces(QQ.name) : null,
                                    LQ = qQ && !wQ ? qQ.getItemTextureUrl(QQ.name) : null;
                                  return (0, xQ.jsxs)("div", {
                                    id: Nw(FQ, QQ.name),
                                    className: oQ()("DocsCatalogueTile", {
                                      Linked: QQ.name === AQ
                                    }),
                                    children: [(0, xQ.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [wQ && (0, xQ.jsx)(UL, {
                                        faces: wQ
                                      }), LQ && (0, xQ.jsx)(NL, {
                                        src: LQ
                                      })]
                                    }), (0, xQ.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: QQ.name
                                    }), QQ.variants.length > 0 && (0, xQ.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: QQ.variants.map((QQ => (0, xQ.jsx)("span", {
                                        children: QQ
                                      }, QQ)))
                                    }), (0, xQ.jsx)(GQ, {
                                      text: QQ.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, QQ.name)
                                }))
                              }), cQ.length > bQ && (0, xQ.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  YQ(cQ.length)
                                },
                                children: ["Show all ", cQ.length]
                              }), 0 === cQ.length && (0, xQ.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", FQ, " match."]
                              })]
                            })
                          }
                          var KL = wQ(4659),
                            zL = wQ(1582);
                          const lL = .95 * KL.b;

                          function jL(QQ) {
                            return /^\s*```/.test(QQ)
                          }

                          function aL(QQ, FQ) {
                            const wQ = [
                              []
                            ];
                            let LQ = !1;
                            for (const qQ of QQ.split("\n")) !LQ && FQ(qQ) && wQ.at(-1).length > 0 && wQ.push([]), jL(qQ) && (LQ = !LQ), wQ.at(-1).push(qQ);
                            return wQ.map((QQ => QQ.join("\n").trim())).filter(Boolean)
                          }

                          function XL(QQ, FQ) {
                            const wQ = `${"#".repeat(FQ)} `,
                              LQ = [];
                            let qQ = !1;
                            for (const oQ of QQ.split("\n")) jL(oQ) ? qQ = !qQ : !qQ && oQ.startsWith(wQ) && LQ.push(oQ.slice(wQ.length).trim());
                            return LQ
                          }

                          function fL(QQ) {
                            return QQ.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class VL {
                            constructor(QQ, FQ) {
                              this.origin = FQ, this.pages = void 0, this.partPaths = new Map;
                              const wQ = QQ.map((QQ => {
                                const FQ = FQ => this.resolveLinks(QQ, FQ).length,
                                  wQ = function(QQ, FQ) {
                                    const wQ = QQ.map((QQ => FQ(QQ.markdown) + 2)),
                                      LQ = wQ.reduce(((QQ, FQ) => QQ + FQ), 0),
                                      qQ = LQ / Math.ceil(LQ / lL),
                                      oQ = [];
                                    let DQ = 0;
                                    return QQ.forEach(((QQ, FQ) => {
                                      const LQ = wQ[FQ];
                                      (0 === oQ.length || DQ + LQ > lL || DQ + LQ / 2 > qQ) && (oQ.push([]), DQ = 0), oQ.at(-1).push(QQ), DQ += LQ
                                    })), oQ
                                  }(function(QQ, FQ) {
                                    return aL(QQ, (QQ => QQ.startsWith("## "))).flatMap((QQ => {
                                      var wQ;
                                      const LQ = null !== (wQ = XL(QQ, 2)[0]) && void 0 !== wQ ? wQ : "";
                                      if (FQ(QQ) <= lL) return [{
                                        markdown: QQ,
                                        section: LQ
                                      }];
                                      let qQ = !1,
                                        oQ = "";
                                      return aL(QQ, (QQ => {
                                        const FQ = qQ && "" !== QQ.trim();
                                        return qQ = "" === QQ.trim(), FQ
                                      })).map((QQ => {
                                        var FQ;
                                        const wQ = XL(QQ, 3),
                                          qQ = QQ.startsWith("### ") ? wQ[0] : oQ;
                                        return oQ = null !== (FQ = wQ.at(-1)) && void 0 !== FQ ? FQ : oQ, {
                                          markdown: QQ,
                                          section: LQ || qQ
                                        }
                                      }))
                                    }))
                                  }(fL(QQ), FQ), FQ);
                                return {
                                  page: QQ,
                                  groups: wQ.length > 1 ? wQ : []
                                }
                              }));
                              for (const {
                                  page: LQ,
                                  groups: qQ
                                }
                                of wQ) qQ.forEach(((QQ, FQ) => {
                                const wQ = (0, KL.r)(LQ.slug, FQ);
                                for (const qQ of QQ.flatMap((QQ => [...XL(QQ.markdown, 2), ...XL(QQ.markdown, 3)]))) {
                                  const QQ = `${LQ.id}#${(0,iQ.u)(qQ)}`;
                                  this.partPaths.has(QQ) || this.partPaths.set(QQ, wQ)
                                }
                              }));
                              this.pages = wQ.map((QQ => {
                                let {
                                  page: FQ,
                                  groups: wQ
                                } = QQ;
                                return {
                                  page: FQ,
                                  path: (0, KL.q)(FQ.slug),
                                  markdown: `# ${FQ.title}\n\n${this.resolveLinks(FQ,fL(FQ))}\n`,
                                  parts: wQ.map(((QQ, LQ) => this.renderPart(FQ, QQ, LQ, wQ.length)))
                                }
                              }))
                            }
                            url(QQ) {
                              return `${this.origin}${QQ}`
                            }
                            getPage(QQ) {
                              return this.pages.find((FQ => FQ.page.id === QQ))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((QQ => (QQ.parts.length > 0 ? QQ.parts : [{
                                path: QQ.path,
                                label: "",
                                markdown: QQ.markdown
                              }]).filter((QQ => QQ.markdown.length > KL.b))))
                            }
                            markdownUrl(QQ, FQ) {
                              const wQ = FQ && this.partPaths.get(`${QQ.id}#${FQ}`) || (0, KL.q)(QQ.slug);
                              return this.url(FQ ? `${wQ}#${FQ}` : wQ)
                            }
                            resolveLinks(QQ, FQ) {
                              return FQ.replace(/\]\((#[^)]+)\)/g, ((FQ, wQ) => {
                                var LQ;
                                const qQ = null !== (LQ = VQ(wQ)) && void 0 !== LQ ? LQ : this.samePageTarget(QQ, wQ);
                                return qQ ? `](${this.markdownUrl(qQ.page,qQ.anchor)})` : FQ
                              }))
                            }
                            samePageTarget(QQ, FQ) {
                              const wQ = (0, iQ.u)(FQ.slice(1));
                              return fQ(QQ, wQ) ? {
                                page: QQ,
                                anchor: wQ
                              } : null
                            }
                            renderPart(QQ, FQ, wQ, LQ) {
                              const qQ = function(QQ) {
                                  const FQ = QQ.map((QQ => QQ.section)).filter(Boolean);
                                  if (0 === FQ.length) return "";
                                  const wQ = FQ[0],
                                    LQ = FQ.at(-1);
                                  return wQ === LQ ? wQ : `${wQ} to ${LQ}`
                                }(FQ),
                                oQ = FQ.map((QQ => QQ.markdown)).join("\n\n"),
                                DQ = qQ ? `It covers ${qQ}. ` : "",
                                kQ = `Part ${wQ+1} of ${LQ} of [${QQ.title}](${this.url((0,KL.q)(QQ.slug))}). ${DQ}[llms.txt](${this.url(KL.i)}) lists every part.`;
                              return {
                                path: (0, KL.r)(QQ.slug, wQ),
                                label: qQ,
                                markdown: `# ${QQ.title}, part ${wQ+1} of ${LQ}\n\n${kQ}\n\n${this.resolveLinks(QQ,oQ)}\n`
                              }
                            }
                            llmsTxt(QQ) {
                              const FQ = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${hL(KL.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const wQ of lQ) {
                                FQ.push("", `## ${wQ.title}`, "");
                                for (const QQ of wQ.pageIds) {
                                  const wQ = this.getPage(QQ),
                                    {
                                      page: LQ,
                                      parts: qQ
                                    } = wQ,
                                    oQ = `About ${hL(wQ.markdown.length)} tokens${qQ.length>0?`, in ${qQ.length} parts:`:"."}`;
                                  FQ.push(`- [${LQ.title}](${this.url(wQ.path)}): ${LQ.summary} ${oQ}`), qQ.forEach(((QQ, wQ) => {
                                    FQ.push(`  - [Part ${wQ+1}${QQ.label?`: ${QQ.label}`:""}](${this.url(QQ.path)})`)
                                  }))
                                }
                              }
                              return FQ.push("", "## Optional", "", `- [Every page in one file](${this.url(KL.f)}): About ${hL(QQ.length)} tokens, for a model with a large context window.`, ""), FQ.join("\n")
                            }
                            llmsFullTxt() {
                              return lQ.flatMap((QQ => QQ.pageIds.map((QQ => this.getPage(QQ).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const QQ = this.llmsFullTxt(),
                                FQ = this.llmsTxt(QQ),
                                wQ = new Map([
                                  [KL.m, FQ],
                                  [KL.i, FQ],
                                  [KL.f, QQ]
                                ]);
                              for (const LQ of this.pages) {
                                wQ.set(LQ.path, LQ.markdown);
                                for (const QQ of LQ.parts) wQ.set(QQ.path, QQ.markdown)
                              }
                              return wQ
                            }
                          }

                          function hL(QQ) {
                            return `${Math.max(1,Math.round(QQ/4e3))}K`
                          }
                          let JL = null;

                          function EL() {
                            return JL ??= new VL(zQ, zL.c), JL
                          }
                          const nL = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function gL(QQ) {
                            return EL().getPage(QQ.id).parts.length > 0 ? `Read ${KL.j}, then the parts of the Bloxd Code API's ${QQ.title} page it lists, so I can ask questions about it.` : `Read ${zL.c}${(0,KL.q)(QQ.slug)} so I can ask questions about it. ${KL.j} lists every page of the Bloxd Code API docs.`
                          }

                          function PL(QQ) {
                            let {
                              page: FQ
                            } = QQ;
                            const [wQ, LQ] = MQ();
                            return (0, xQ.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, xQ.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  LQ(EL().getPage(FQ.id).markdown)
                                },
                                children: [(0, xQ.jsx)(tQ, {
                                  name: !1 === (null === wQ || void 0 === wQ ? void 0 : wQ.failed) ? "check" : "copy"
                                }), (0, xQ.jsx)("span", {
                                  children: wQ ? wQ.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), nL.map((QQ => (0, xQ.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${QQ.url}${encodeURIComponent(gL(FQ))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, xQ.jsx)(tQ, {
                                  name: "external-link"
                                }), (0, xQ.jsxs)("span", {
                                  children: ["Open in ", QQ.name]
                                })]
                              }, QQ.name)))]
                            })
                          }

                          function ZL(QQ) {
                            return `#${[0,1,2].map((FQ=>Math.round(Math.min(255,Math.max(0,QQ[FQ]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function yL(QQ) {
                            return [parseInt(QQ.slice(1, 3), 16), parseInt(QQ.slice(3, 5), 16), parseInt(QQ.slice(5, 7), 16)]
                          }

                          function BL(QQ) {
                            let {
                              label: FQ,
                              min: wQ,
                              max: LQ,
                              step: qQ,
                              low: oQ,
                              high: DQ,
                              onChange: kQ
                            } = QQ;
                            return (0, xQ.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, xQ.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, xQ.jsx)("span", {
                                  children: FQ
                                }), (0, xQ.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: oQ === DQ ? oQ : `${oQ}\u2013${DQ}`
                                })]
                              }), (0, xQ.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, xQ.jsx)("input", {
                                  type: "range",
                                  min: wQ,
                                  max: LQ,
                                  step: qQ,
                                  value: Math.min(LQ, oQ),
                                  "aria-label": `Minimum ${FQ.toLowerCase()}`,
                                  onChange: QQ => {
                                    const FQ = Number(QQ.target.value);
                                    kQ(FQ, Math.max(FQ, DQ))
                                  }
                                }), (0, xQ.jsx)("input", {
                                  type: "range",
                                  min: wQ,
                                  max: LQ,
                                  step: qQ,
                                  value: Math.min(LQ, DQ),
                                  "aria-label": `Maximum ${FQ.toLowerCase()}`,
                                  onChange: QQ => {
                                    const FQ = Number(QQ.target.value);
                                    kQ(Math.min(FQ, oQ), FQ)
                                  }
                                })]
                              })]
                            })
                          }

                          function dL(QQ) {
                            let {
                              label: FQ,
                              min: wQ,
                              max: LQ,
                              step: qQ,
                              value: oQ,
                              onChange: DQ,
                              format: kQ = String
                            } = QQ;
                            return (0, xQ.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, xQ.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, xQ.jsx)("span", {
                                  children: FQ
                                }), (0, xQ.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: kQ(oQ)
                                })]
                              }), (0, xQ.jsx)("input", {
                                type: "range",
                                min: wQ,
                                max: LQ,
                                step: qQ,
                                value: Math.min(LQ, Math.max(wQ, oQ)),
                                "aria-label": FQ,
                                onChange: QQ => {
                                  DQ(Number(QQ.target.value))
                                }
                              })]
                            })
                          }

                          function Qq(QQ) {
                            let {
                              opts: FQ,
                              onChange: wQ
                            } = QQ;
                            const LQ = FQ.colorGradients;
                            if (!Jw(LQ)) return (0, xQ.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, xQ.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, xQ.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, xQ.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: LQ.map(((QQ, FQ) => (0, xQ.jsx)("input", {
                                  type: "color",
                                  value: ZL(QQ.color),
                                  "aria-label": `Colour ${FQ+1}`,
                                  onChange: QQ => {
                                    const qQ = [...LQ];
                                    qQ[FQ] = {
                                      color: yL(QQ.target.value)
                                    }, wQ(qQ)
                                  }
                                }, FQ)))
                              })]
                            });
                            const qQ = (QQ, FQ) => {
                              const qQ = [...LQ];
                              qQ[QQ] = FQ, wQ(qQ)
                            };
                            return (0, xQ.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, xQ.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, xQ.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, xQ.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), LQ.map(((QQ, FQ) => {
                                var wQ;
                                const LQ = null !== (wQ = QQ.maxColor) && void 0 !== wQ ? wQ : QQ.minColor;
                                return (0, xQ.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, xQ.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * QQ.timeFraction), "%"]
                                  }), (0, xQ.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${ZL(QQ.minColor)}, ${ZL(LQ)})`
                                    }
                                  }), (0, xQ.jsx)("input", {
                                    type: "color",
                                    value: ZL(QQ.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*QQ.timeFraction)}%`,
                                    onChange: wQ => {
                                      qQ(FQ, {
                                        ...QQ,
                                        minColor: [...yL(wQ.target.value), QQ.minColor[3]]
                                      })
                                    }
                                  }), (0, xQ.jsx)("input", {
                                    type: "color",
                                    value: ZL(LQ),
                                    "aria-label": `Maximum colour at ${Math.round(100*QQ.timeFraction)}%`,
                                    onChange: wQ => {
                                      qQ(FQ, {
                                        ...QQ,
                                        maxColor: [...yL(wQ.target.value), LQ[3]]
                                      })
                                    }
                                  })]
                                }, FQ)
                              }))]
                            })
                          }
                          const Fq = [-.5, -.5, -.5],
                            wq = [.5, .5, .5],
                            Lq = [0, 1, 2, 3, 4, 5, 6, 7].map((QQ => [1 & QQ ? wq[0] : Fq[0], 2 & QQ ? wq[1] : Fq[1], 4 & QQ ? wq[2] : Fq[2]]));class qq {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(QQ, FQ, wQ, LQ) {
                              const qQ = Math.round(31 * FQ),
                                oQ = Math.round(31 * wQ),
                                DQ = Math.round(31 * LQ),
                                kQ = `${qQ}|${oQ}|${DQ}`;
                              let vQ = this.tints.get(QQ);
                              (!vQ || vQ.size > 2e3) && (vQ = new Map, this.tints.set(QQ, vQ));
                              let mQ = vQ.get(kQ);
                              if (mQ) return mQ;
                              mQ = document.createElement("canvas"), mQ.width = QQ.naturalWidth || 16, mQ.height = QQ.naturalHeight || 16;
                              const uQ = mQ.getContext("2d");
                              return uQ ? (uQ.imageSmoothingEnabled = !1, uQ.drawImage(QQ, 0, 0, mQ.width, mQ.height), uQ.globalCompositeOperation = "multiply", uQ.fillStyle = `rgb(${qQ/31*255}, ${oQ/31*255}, ${DQ/31*255})`, uQ.fillRect(0, 0, mQ.width, mQ.height), uQ.globalCompositeOperation = "destination-in", uQ.drawImage(QQ, 0, 0, mQ.width, mQ.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), vQ.set(kQ, mQ), mQ
                            }
                          }

                          function oq(QQ) {
                            let {
                              opts: FQ,
                              textureUrl: wQ,
                              burst: qQ,
                              paused: oQ
                            } = QQ;
                            const DQ = (0, LQ.useRef)(null),
                              kQ = (0, LQ.useRef)(FQ);
                            kQ.current = FQ;
                            const vQ = (0, LQ.useRef)(oQ);
                            vQ.current = oQ;
                            const mQ = (0, LQ.useRef)(null),
                              uQ = (0, LQ.useRef)(null),
                              HQ = (0, LQ.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(QQ) {
                                let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const wQ = [-.5, -.5, -.5],
                                  LQ = [.5, .5, .5];
                                let qQ = .5;
                                for (let oQ = 0; oQ < 40; oQ++) {
                                  const oQ = nw(QQ, wQ, LQ, FQ),
                                    DQ = Math.max(oQ.life / 30, .001);
                                  for (; Zw(oQ, QQ.gravity, DQ);) qQ = Math.max(qQ, Math.hypot(oQ.pos[0], oQ.pos[1], oQ.pos[2]) + oQ.size / 2)
                                }
                                return qQ
                              }(FQ)))), [FQ]),
                              bQ = (0, LQ.useRef)(HQ);
                            return bQ.current = HQ, (0, LQ.useEffect)((() => {
                              if (mQ.current = null, !wQ) return;
                              const QQ = new Image;
                              let FQ = !1;
                              return QQ.onload = () => {
                                FQ || (mQ.current = QQ)
                              }, QQ.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${wQ}`)
                              }, QQ.src = wQ, () => {
                                FQ = !0
                              }
                            }), [wQ]), (0, LQ.useEffect)((() => {
                              var QQ;
                              null === (QQ = uQ.current) || void 0 === QQ || QQ.call(uQ)
                            }), [FQ, qQ]), (0, LQ.useEffect)((() => {
                              const QQ = DQ.current,
                                FQ = null === QQ || void 0 === QQ ? void 0 : QQ.getContext("2d");
                              if (!QQ || !FQ) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const wQ = new qq;
                              let LQ = [],
                                qQ = 0,
                                oQ = -.7,
                                HQ = bQ.current,
                                YQ = performance.now(),
                                xQ = 0,
                                AQ = !0,
                                tQ = null;
                              const eQ = () => {
                                const QQ = kQ.current,
                                  FQ = Math.min(400, Math.max(0, Math.ceil(QQ.manualEmitCount)));
                                LQ = [];
                                for (let wQ = 0; wQ < FQ; wQ++) LQ.push(nw(QQ, Fq, wq, Math.random));
                                qQ = 0
                              };
                              uQ.current = eQ, eQ();
                              const MQ = DQ => {
                                xQ = requestAnimationFrame(MQ);
                                const uQ = Math.min(.05, (DQ - YQ) / 1e3);
                                if (YQ = DQ, !AQ) return;
                                const GQ = window.devicePixelRatio || 1,
                                  pQ = Math.round(QQ.clientWidth * GQ),
                                  cQ = Math.round(QQ.clientHeight * GQ);
                                if (0 === pQ || 0 === cQ) return;
                                QQ.width === pQ && QQ.height === cQ || (QQ.width = pQ, QQ.height = cQ);
                                const CQ = kQ.current;
                                null === tQ && (oQ += .18 * uQ), HQ += (bQ.current - HQ) * Math.min(1, 4 * uQ);
                                const SQ = .6 * uQ;
                                LQ = LQ.filter((QQ => Zw(QQ, CQ.gravity, SQ))), 0 !== LQ.length || vQ.current || (qQ += uQ, qQ > .6 && eQ());
                                const iQ = function(QQ, FQ, wQ, LQ) {
                                  const qQ = 3.2 * LQ,
                                    oQ = .44 * Math.min(QQ, FQ) * qQ / LQ,
                                    DQ = Math.cos(wQ),
                                    kQ = Math.sin(wQ),
                                    vQ = Math.cos(.42),
                                    mQ = Math.sin(.42);
                                  return (wQ, LQ, uQ) => {
                                    const HQ = wQ * kQ + uQ * DQ,
                                      bQ = qQ - (LQ * mQ + HQ * vQ);
                                    if (bQ < .05) return null;
                                    const YQ = oQ / bQ;
                                    return {
                                      x: QQ / 2 + (wQ * DQ - uQ * kQ) * YQ,
                                      y: FQ / 2 - (LQ * vQ - HQ * mQ) * YQ,
                                      scale: YQ,
                                      depth: bQ
                                    }
                                  }
                                }(pQ, cQ, oQ, HQ);
                                ! function(QQ, FQ, wQ, LQ, qQ) {
                                  const oQ = QQ.createLinearGradient(0, 0, 0, wQ);
                                  oQ.addColorStop(0, "#23262d"), oQ.addColorStop(1, "#16181c"), QQ.globalCompositeOperation = "source-over", QQ.globalAlpha = 1, QQ.fillStyle = oQ, QQ.fillRect(0, 0, FQ, wQ);
                                  const DQ = (FQ, wQ) => {
                                      const qQ = LQ(FQ[0], FQ[1], FQ[2]),
                                        oQ = LQ(wQ[0], wQ[1], wQ[2]);
                                      qQ && oQ && (QQ.beginPath(), QQ.moveTo(qQ.x, qQ.y), QQ.lineTo(oQ.x, oQ.y), QQ.stroke())
                                    },
                                    kQ = Math.ceil(qQ) + 1,
                                    vQ = Fq[1];
                                  QQ.lineWidth = 1, QQ.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let mQ = -kQ; mQ <= kQ; mQ++) DQ([mQ + .5, vQ, .5 - kQ], [mQ + .5, vQ, kQ + .5]), DQ([.5 - kQ, vQ, mQ + .5], [kQ + .5, vQ, mQ + .5]);
                                  QQ.strokeStyle = "rgba(255, 255, 255, 0.28)", QQ.setLineDash([4, 4]);
                                  for (const mQ of Lq)
                                    for (const QQ of Lq) {
                                      const FQ = [0, 1, 2].filter((FQ => mQ[FQ] !== QQ[FQ]));
                                      1 === FQ.length && mQ[FQ[0]] < QQ[FQ[0]] && DQ(mQ, QQ)
                                    }
                                  QQ.setLineDash([])
                                }(FQ, pQ, cQ, iQ, HQ);
                                const WQ = mQ.current,
                                  RQ = LQ.map((QQ => ({
                                    particle: QQ,
                                    at: iQ(QQ.pos[0], QQ.pos[1], QQ.pos[2])
                                  }))).filter((QQ => null !== QQ.at)).sort(((QQ, FQ) => FQ.at.depth - QQ.at.depth));
                                FQ.imageSmoothingEnabled = !1;
                                for (const QQ of function(QQ) {
                                    switch (QQ) {
                                      case aw.f.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case aw.f.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case aw.f.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case aw.f.MultiplyAdd:
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
                                  }(CQ.blendMode)) {
                                  FQ.globalCompositeOperation = QQ.operation;
                                  for (const {
                                      particle: LQ,
                                      at: qQ
                                    }
                                    of RQ) {
                                    const [oQ, DQ, kQ, vQ] = Pw(LQ), mQ = Math.max(1, LQ.size * qQ.scale);
                                    FQ.globalAlpha = QQ.usesAlpha ? Math.min(1, Math.max(0, vQ)) : 1, WQ ? FQ.drawImage(wQ.get(WQ, oQ, DQ, kQ), qQ.x - mQ / 2, qQ.y - mQ / 2, mQ, mQ) : (FQ.fillStyle = `rgb(${255*oQ}, ${255*DQ}, ${255*kQ})`, FQ.fillRect(qQ.x - mQ / 2, qQ.y - mQ / 2, mQ, mQ))
                                  }
                                }
                                FQ.globalCompositeOperation = "source-over", FQ.globalAlpha = 1
                              };
                              xQ = requestAnimationFrame(MQ);
                              const GQ = new IntersectionObserver((QQ => {
                                let [FQ] = QQ;
                                AQ = FQ.isIntersecting
                              }));
                              GQ.observe(QQ);
                              const pQ = FQ => {
                                  tQ = FQ.clientX, QQ.setPointerCapture(FQ.pointerId)
                                },
                                cQ = QQ => {
                                  null !== tQ && (oQ += .01 * (QQ.clientX - tQ), tQ = QQ.clientX)
                                },
                                CQ = () => {
                                  tQ = null
                                };
                              return QQ.addEventListener("pointerdown", pQ), QQ.addEventListener("pointermove", cQ), QQ.addEventListener("pointerup", CQ), QQ.addEventListener("pointercancel", CQ), () => {
                                cancelAnimationFrame(xQ), GQ.disconnect(), uQ.current = null, QQ.removeEventListener("pointerdown", pQ), QQ.removeEventListener("pointermove", cQ), QQ.removeEventListener("pointerup", CQ), QQ.removeEventListener("pointercancel", CQ)
                              }
                            }), []), (0, xQ.jsx)("canvas", {
                              ref: DQ,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${FQ.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const Dq = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            kq = [{
                              mode: aw.f.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: aw.f.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: aw.f.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: aw.f.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: aw.f.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            vq = (0, LQ.forwardRef)((function(QQ, FQ) {
                              var wQ, qQ;
                              let {
                                textures: DQ
                              } = QQ;
                              const kQ = pL(),
                                vQ = (0, LQ.useRef)(null),
                                [mQ, uQ] = (0, LQ.useState)(fw),
                                [HQ, bQ] = (0, LQ.useState)("example"),
                                [YQ, AQ] = (0, LQ.useState)(0),
                                [eQ, MQ] = (0, LQ.useState)(!1),
                                pQ = QQ => {
                                  const FQ = "example" === QQ ? fw : Xw(QQ);
                                  FQ && (uQ(FQ), bQ(QQ))
                                };
                              (0, LQ.useImperativeHandle)(FQ, (() => ({
                                preview: QQ => {
                                  var FQ;
                                  pQ(QQ), null === (FQ = vQ.current) || void 0 === FQ || FQ.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const cQ = QQ => {
                                  uQ({
                                    ...mQ,
                                    ...QQ
                                  }), bQ(null)
                                },
                                CQ = function(QQ, FQ) {
                                  if (null !== FQ) return `${QL}    presetId: "${FQ}",\n${FL}\n})`;
                                  const wQ = QQ.velocityGradients.map((QQ => `        {\n            timeFraction: ${yw(QQ.timeFraction)},\n            factor: ${yw(QQ.factor)},\n            factor2: ${yw(QQ.factor2)},\n        },`)),
                                    LQ = [`    dir1: ${Bw(QQ.dir1)},`, `    dir2: ${Bw(QQ.dir2)},`, FL, `    texture: "${QQ.texture}",`, `    minLifeTime: ${yw(QQ.minLifeTime)},`, `    maxLifeTime: ${yw(QQ.maxLifeTime)},`, `    minEmitPower: ${yw(QQ.minEmitPower)},`, `    maxEmitPower: ${yw(QQ.maxEmitPower)},`, `    minSize: ${yw(QQ.minSize)},`, `    maxSize: ${yw(QQ.maxSize)},`, `    manualEmitCount: ${yw(QQ.manualEmitCount)},`, `    gravity: ${Bw(QQ.gravity)},`, `    colorGradients: ${dw(QQ.colorGradients,"    ")},`, `    velocityGradients: ${wQ.length>0?`[\n${wQ.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${yw(QQ.blendMode)},`];
                                  return void 0 !== QQ.hideDist && LQ.push(`    hideDist: ${yw(QQ.hideDist)},`), `${QL}${LQ.join("\n")}\n})`
                                }(mQ, null === HQ || "example" === HQ ? null : HQ),
                                iQ = DQ.includes(mQ.texture) ? DQ : [...DQ, mQ.texture];
                              return (0, xQ.jsxs)("section", {
                                ref: vQ,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, xQ.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, xQ.jsxs)("div", {
                                    children: [(0, xQ.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, xQ.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, xQ.jsx)(GQ, {
                                    text: CQ,
                                    label: "Copy code"
                                  })]
                                }), (0, xQ.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, xQ.jsx)("button", {
                                    type: "button",
                                    className: oQ()("DocsVariantChip", {
                                      Active: "example" === HQ
                                    }),
                                    onClick: () => {
                                      pQ("example")
                                    },
                                    children: "Example"
                                  }), Dq.filter((QQ => null !== Xw(QQ))).map((QQ => (0, xQ.jsx)("button", {
                                    type: "button",
                                    className: oQ()("DocsVariantChip", {
                                      Active: HQ === QQ
                                    }),
                                    onClick: () => {
                                      pQ(QQ)
                                    },
                                    children: QQ
                                  }, QQ))), (0, xQ.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== HQ && void 0 !== HQ ? HQ : "custom",
                                    "aria-label": "Preset",
                                    onChange: QQ => {
                                      pQ(QQ.target.value)
                                    },
                                    children: [(0, xQ.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === HQ && (0, xQ.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), jw.d.map((QQ => (0, xQ.jsx)("option", {
                                      value: QQ,
                                      children: QQ
                                    }, QQ)))]
                                  })]
                                }), (0, xQ.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, xQ.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, xQ.jsx)(oq, {
                                      opts: mQ,
                                      textureUrl: null !== (wQ = null === kQ || void 0 === kQ ? void 0 : kQ.getParticleTextureUrl(mQ.texture)) && void 0 !== wQ ? wQ : null,
                                      burst: YQ,
                                      paused: eQ
                                    }), (0, xQ.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, xQ.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          AQ(YQ + 1)
                                        },
                                        children: [(0, xQ.jsx)(tQ, {
                                          name: "replay"
                                        }), (0, xQ.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, xQ.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": eQ,
                                        onClick: () => {
                                          MQ(!eQ)
                                        },
                                        children: [(0, xQ.jsx)(tQ, {
                                          name: eQ ? "play" : "pause"
                                        }), (0, xQ.jsx)("span", {
                                          children: eQ ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, xQ.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, xQ.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, xQ.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, xQ.jsx)("span", {
                                          children: "Texture"
                                        }), (0, xQ.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: mQ.texture
                                        })]
                                      }), (0, xQ.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: iQ.map((QQ => {
                                          var FQ;
                                          const wQ = null !== (FQ = null === kQ || void 0 === kQ ? void 0 : kQ.getParticleTextureUrl(QQ)) && void 0 !== FQ ? FQ : null;
                                          return (0, xQ.jsx)("button", {
                                            type: "button",
                                            className: oQ()("DocsParticleTexture", {
                                              Active: mQ.texture === QQ
                                            }),
                                            title: QQ,
                                            "aria-label": QQ,
                                            "aria-pressed": mQ.texture === QQ,
                                            onClick: () => {
                                              cQ({
                                                texture: QQ
                                              })
                                            },
                                            children: wQ ? (0, xQ.jsx)("img", {
                                              src: wQ,
                                              alt: ""
                                            }) : (0, xQ.jsx)(tQ, {
                                              name: "image"
                                            })
                                          }, QQ)
                                        }))
                                      })]
                                    }), (0, xQ.jsx)(dL, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: mQ.manualEmitCount,
                                      onChange: QQ => {
                                        cQ({
                                          manualEmitCount: QQ
                                        })
                                      }
                                    }), (0, xQ.jsx)(BL, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: mQ.minLifeTime,
                                      high: mQ.maxLifeTime,
                                      onChange: (QQ, FQ) => {
                                        cQ({
                                          minLifeTime: QQ,
                                          maxLifeTime: FQ
                                        })
                                      }
                                    }), (0, xQ.jsx)(BL, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: mQ.minEmitPower,
                                      high: mQ.maxEmitPower,
                                      onChange: (QQ, FQ) => {
                                        cQ({
                                          minEmitPower: QQ,
                                          maxEmitPower: FQ
                                        })
                                      }
                                    }), (0, xQ.jsx)(BL, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: mQ.minSize,
                                      high: mQ.maxSize,
                                      onChange: (QQ, FQ) => {
                                        cQ({
                                          minSize: QQ,
                                          maxSize: FQ
                                        })
                                      }
                                    }), (0, xQ.jsx)(dL, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (qQ = mQ.gravity[1]) && void 0 !== qQ ? qQ : 0,
                                      onChange: QQ => {
                                        var FQ, wQ;
                                        cQ({
                                          gravity: [null !== (FQ = mQ.gravity[0]) && void 0 !== FQ ? FQ : 0, QQ, null !== (wQ = mQ.gravity[2]) && void 0 !== wQ ? wQ : 0]
                                        })
                                      }
                                    }), (0, xQ.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, xQ.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, xQ.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, xQ.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: mQ.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: QQ => {
                                          cQ({
                                            blendMode: Number(QQ.target.value)
                                          })
                                        },
                                        children: kq.map((QQ => {
                                          let {
                                            mode: FQ,
                                            label: wQ
                                          } = QQ;
                                          return (0, xQ.jsx)("option", {
                                            value: FQ,
                                            children: wQ
                                          }, FQ)
                                        }))
                                      })]
                                    }), (0, xQ.jsx)(Qq, {
                                      opts: mQ,
                                      onChange: QQ => {
                                        cQ({
                                          colorGradients: QQ
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, xQ.jsx)(SQ, {
                                  code: CQ,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var mq = wQ(4315),
                            uq = wQ(1873);

                          function Hq(QQ, FQ) {
                            return QQ ? mq.d.includes(FQ) ? QQ.getIngameIconUrl(FQ) : QQ.getItemIconUrl(FQ) : null
                          }

                          function bq(QQ) {
                            var FQ, wQ, LQ;
                            let {
                              part: qQ,
                              assets: DQ
                            } = QQ;
                            const kQ = Hq(DQ, qQ.icon),
                              vQ = null !== (FQ = null === (wQ = qQ.style) || void 0 === wQ ? void 0 : wQ.fontSize) && void 0 !== FQ ? FQ : "1.8em",
                              mQ = (0, lF.Wb)(qQ.style);
                            return (0, xQ.jsxs)("span", {
                              className: oQ()("DocsBloxdTextIcon", {
                                Missing: !kQ
                              }),
                              style: {
                                width: vQ,
                                height: vQ,
                                opacity: null === (LQ = qQ.style) || void 0 === LQ ? void 0 : LQ.opacity
                              },
                              title: kQ ? void 0 : `No Bloxd icon, item or block is called "${qQ.icon}"`,
                              children: [kQ && mQ && (0, xQ.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: mQ,
                                  maskImage: `url("${kQ}")`,
                                  WebkitMaskImage: `url("${kQ}")`
                                }
                              }), kQ ? (0, xQ.jsx)("img", {
                                src: kQ,
                                alt: "",
                                className: oQ()({
                                  Tinted: mQ
                                })
                              }) : (0, xQ.jsx)(tQ, {
                                name: "image"
                              })]
                            })
                          }

                          function Yq(QQ) {
                            let {
                              parts: FQ,
                              className: wQ
                            } = QQ;
                            const LQ = pL(),
                              qQ = [];
                            let DQ = [];
                            const kQ = QQ => {
                              DQ.length > 0 && (qQ.push((0, xQ.jsx)(uq.e, {
                                text: DQ
                              }, `run-${QQ}`)), DQ = [])
                            };
                            return FQ.forEach(((QQ, FQ) => {
                              "icon" !== VF(QQ) || aF(QQ.icon) ? DQ.push(QQ) : (kQ(FQ), qQ.push((0, xQ.jsx)(bq, {
                                part: QQ,
                                assets: LQ
                              }, `icon-${FQ}`)))
                            })), kQ(FQ.length), (0, xQ.jsx)("div", {
                              className: oQ()("DocsStyledTextPreview", wQ),
                              children: qQ
                            })
                          }
                          const xq = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let Aq = null;

                          function tq(QQ) {
                            if (Aq ??= document.createElement("canvas").getContext("2d"), !Aq) return "#000000";
                            Aq.fillStyle = "#000000", Aq.fillStyle = QQ;
                            const FQ = Aq.fillStyle;
                            return FQ.startsWith("#") ? FQ : "#000000"
                          }

                          function eq(QQ) {
                            let {
                              value: FQ,
                              label: wQ,
                              onChange: LQ
                            } = QQ;
                            return (0, xQ.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, xQ.jsx)("input", {
                                type: "color",
                                value: tq(FQ),
                                "aria-label": `${wQ} picker`,
                                onChange: QQ => {
                                  LQ(QQ.target.value)
                                }
                              }), (0, xQ.jsx)("input", {
                                type: "text",
                                value: FQ,
                                placeholder: "#ffb914 or gold",
                                "aria-label": wQ,
                                spellCheck: !1,
                                onChange: QQ => {
                                  LQ(QQ.target.value)
                                }
                              })]
                            })
                          }

                          function Mq(QQ) {
                            let {
                              value: FQ,
                              fontAwesomeIcons: wQ,
                              onChange: qQ
                            } = QQ;
                            const DQ = pL(),
                              [kQ, vQ] = (0, LQ.useState)(aF(FQ) ? "fontAwesome" : "bloxd"),
                              [mQ, uQ] = (0, LQ.useState)(""),
                              HQ = mQ.trim().toLowerCase(),
                              bQ = "bloxd" === kQ ? mq.d : wQ,
                              YQ = HQ ? bQ.filter((QQ => QQ.toLowerCase().includes(HQ))) : bQ;
                            return (0, xQ.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, xQ.jsx)("input", {
                                type: "text",
                                value: FQ,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: QQ => {
                                  qQ(QQ.target.value)
                                }
                              }), (0, xQ.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, xQ.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((QQ => (0, xQ.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": kQ === QQ,
                                    className: oQ()("DocsVariantChip", {
                                      Active: kQ === QQ
                                    }),
                                    onClick: () => {
                                      vQ(QQ)
                                    },
                                    children: "bloxd" === QQ ? `Bloxd icons (${mq.d.length})` : `Font Awesome (${wQ.length})`
                                  }, QQ))), (0, xQ.jsx)("input", {
                                    type: "search",
                                    value: mQ,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: QQ => {
                                      uQ(QQ.target.value)
                                    }
                                  })
                                ]
                              }), (0, xQ.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [YQ.map((QQ => {
                                  const wQ = "bloxd" === kQ ? Hq(DQ, QQ) : null;
                                  return (0, xQ.jsx)("button", {
                                    type: "button",
                                    title: QQ,
                                    "aria-label": QQ,
                                    "aria-pressed": QQ === FQ,
                                    className: oQ()("DocsIconPickerOption", {
                                      Active: QQ === FQ
                                    }),
                                    onClick: () => {
                                      qQ(QQ)
                                    },
                                    children: "fontAwesome" === kQ ? (0, xQ.jsx)(pw.c, {
                                      name: QQ
                                    }) : wQ ? (0, xQ.jsx)("img", {
                                      src: wQ,
                                      alt: ""
                                    }) : (0, xQ.jsx)(tQ, {
                                      name: "image"
                                    })
                                  }, QQ)
                                })), 0 === YQ.length && (0, xQ.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", mQ, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function Gq(QQ) {
                            let {
                              property: FQ,
                              value: wQ,
                              fontAwesomeIcons: LQ,
                              onChange: qQ
                            } = QQ;
                            const {
                              field: oQ,
                              label: DQ
                            } = FQ, kQ = QQ => "" !== QQ || FQ.isRequired ? QQ : void 0;
                            switch (oQ.kind) {
                              case "text":
                                return oQ.multiline ? (0, xQ.jsx)("textarea", {
                                  value: String(null !== wQ && void 0 !== wQ ? wQ : ""),
                                  rows: 2,
                                  "aria-label": DQ,
                                  onChange: QQ => {
                                    qQ(QQ.target.value)
                                  }
                                }) : (0, xQ.jsx)("input", {
                                  type: "text",
                                  value: String(null !== wQ && void 0 !== wQ ? wQ : ""),
                                  "aria-label": DQ,
                                  onChange: QQ => {
                                    qQ(kQ(QQ.target.value))
                                  }
                                });
                              case "size":
                                return (0, xQ.jsx)("input", {
                                  type: "text",
                                  value: String(null !== wQ && void 0 !== wQ ? wQ : ""),
                                  placeholder: FQ.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": DQ,
                                  spellCheck: !1,
                                  onChange: QQ => {
                                    qQ(kQ(QQ.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, xQ.jsx)(eq, {
                                  value: String(null !== wQ && void 0 !== wQ ? wQ : ""),
                                  label: DQ,
                                  onChange: QQ => {
                                    qQ(kQ(QQ))
                                  }
                                });
                              case "colours": {
                                const QQ = Array.isArray(wQ) ? wQ : [],
                                  FQ = QQ => {
                                    qQ(QQ.length > 0 ? QQ : void 0)
                                  };
                                return (0, xQ.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [QQ.map(((wQ, LQ) => (0, xQ.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, xQ.jsx)(eq, {
                                      value: wQ,
                                      label: `${DQ} ${LQ+1}`,
                                      onChange: wQ => {
                                        FQ(QQ.map(((QQ, FQ) => FQ === LQ ? wQ : QQ)))
                                      }
                                    }), (0, xQ.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${LQ+1}`,
                                      onClick: () => {
                                        FQ(QQ.filter(((QQ, FQ) => FQ !== LQ)))
                                      },
                                      children: (0, xQ.jsx)(tQ, {
                                        name: "cross"
                                      })
                                    })]
                                  }, LQ))), (0, xQ.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var wQ;
                                      FQ([...QQ, null !== (wQ = QQ.at(-1)) && void 0 !== wQ ? wQ : "#ffffff"])
                                    },
                                    children: [(0, xQ.jsx)(tQ, {
                                      name: "plus"
                                    }), 0 === QQ.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var vQ;
                                const QQ = "number" === typeof wQ ? wQ : Number(null !== (vQ = FQ.defaultText) && void 0 !== vQ ? vQ : 0);
                                return (0, xQ.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, xQ.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: QQ,
                                    "aria-label": DQ,
                                    onChange: QQ => {
                                      qQ(Number(QQ.target.value))
                                    }
                                  }), (0, xQ.jsx)("output", {
                                    children: QQ.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, xQ.jsxs)("select", {
                                  value: String(null !== wQ && void 0 !== wQ ? wQ : ""),
                                  "aria-label": DQ,
                                  onChange: QQ => {
                                    qQ(kQ(QQ.target.value))
                                  },
                                  children: [!FQ.isRequired && (0, xQ.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", FQ.defaultText, ")"]
                                  }), oQ.options.map((QQ => (0, xQ.jsx)("option", {
                                    value: QQ,
                                    children: QQ
                                  }, QQ)))]
                                });
                              case "icon":
                                return (0, xQ.jsx)(Mq, {
                                  value: String(null !== wQ && void 0 !== wQ ? wQ : ""),
                                  fontAwesomeIcons: LQ,
                                  onChange: qQ
                                })
                            }
                          }

                          function pq(QQ) {
                            let FQ;
                            try {
                              FQ = JSON.parse(QQ)
                            } catch (wQ) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${wQ.message}`
                              }
                            }
                            return ww(FQ) ? {
                              part: FQ,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function cq(QQ) {
                            let {
                              parts: FQ,
                              index: wQ,
                              fontAwesomeIcons: qQ,
                              onChange: oQ,
                              rU: DQ,
                              onClose: kQ
                            } = QQ;
                            const vQ = (0, LQ.useContext)(xF),
                              uQ = (0, LQ.useRef)(null),
                              HQ = FQ[wQ],
                              bQ = VF(HQ),
                              [YQ, AQ] = (0, LQ.useState)((() => JSON.stringify(HQ, null, 2))),
                              eQ = (0, LQ.useMemo)((() => "other" === bQ ? pq(YQ).error : null), [bQ, YQ]);
                            (0, LQ.useEffect)((() => {
                              var QQ;
                              null === (QQ = uQ.current) || void 0 === QQ || QQ.focus()
                            }), []);
                            const MQ = (0, xQ.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: QQ => {
                                QQ.target === QQ.currentTarget && kQ()
                              },
                              children: (0, xQ.jsxs)("div", {
                                ref: uQ,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${wQ+1}: ${XF[bQ]}`,
                                tabIndex: -1,
                                onKeyDown: QQ => {
                                  "Escape" === QQ.key ? (QQ.stopPropagation(), kQ()) : "Tab" === QQ.key && uQ.current && function(QQ, FQ) {
                                    const wQ = Array.from(QQ.querySelectorAll(sF)),
                                      LQ = wQ[0],
                                      qQ = wQ.at(-1);
                                    if (!LQ || !qQ) return;
                                    const oQ = document.activeElement;
                                    !FQ.shiftKey || oQ !== LQ && oQ !== QQ ? FQ.shiftKey || oQ !== qQ || (FQ.preventDefault(), LQ.focus()) : (FQ.preventDefault(), qQ.focus())
                                  }(uQ.current, QQ)
                                },
                                children: [(0, xQ.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, xQ.jsxs)("div", {
                                    children: [(0, xQ.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", wQ + 1]
                                    }), (0, xQ.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: XF[bQ]
                                    })]
                                  }), (0, xQ.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: kQ,
                                    children: (0, xQ.jsx)(tQ, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, xQ.jsx)(Yq, {
                                  parts: FQ,
                                  className: "DocsTextDialogPreview"
                                }), (0, xQ.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === bQ ? (0, xQ.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, xQ.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, xQ.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: YQ,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: QQ => {
                                        AQ(QQ.target.value);
                                        const FQ = pq(QQ.target.value);
                                        null !== FQ.part && oQ(FQ.part)
                                      }
                                    }), eQ && (0, xQ.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: eQ
                                    })]
                                  }) : JF[bQ].map((QQ => {
                                    const FQ = nF(HQ, QQ.path),
                                      wQ = QQ.isRequired ? JSON.stringify(PF(HQ, QQ.path)) === JSON.stringify(HQ) : void 0 === FQ;
                                    return (0, xQ.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, xQ.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, xQ.jsx)("span", {
                                          children: QQ.label
                                        }), (0, xQ.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: wQ,
                                          "aria-label": `Reset ${QQ.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            oQ(PF(HQ, QQ.path))
                                          },
                                          children: [(0, xQ.jsx)(tQ, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, xQ.jsx)(Gq, {
                                        property: QQ,
                                        value: FQ,
                                        fontAwesomeIcons: qQ,
                                        onChange: FQ => {
                                          oQ(gF(HQ, QQ.path, FQ))
                                        }
                                      }), !QQ.isRequired && (0, xQ.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", QQ.defaultText]
                                      })]
                                    }, QQ.path.join("."))
                                  }))
                                }), (0, xQ.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, xQ.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: DQ,
                                    children: [(0, xQ.jsx)(tQ, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, xQ.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: kQ,
                                    children: "Done"
                                  })]
                                }), (0, xQ.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: xq.map((QQ => (0, xQ.jsx)("option", {
                                    value: QQ
                                  }, QQ)))
                                })]
                              })
                            });
                            return vQ ? (0, mQ.createPortal)(MQ, vQ) : MQ
                          }
                          const Cq = [{
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
                            Sq = Object.keys(fF);

                          function iq(QQ) {
                            let {
                              fontAwesomeIcons: FQ
                            } = QQ;
                            const [wQ, qQ] = (0, LQ.useState)(Cq[0].parts), [DQ, kQ] = (0, LQ.useState)((() => dF(Cq[0].parts))), [vQ, mQ] = (0, LQ.useState)(null), [uQ, HQ] = (0, LQ.useState)(!1), [bQ, YQ] = (0, LQ.useState)(null), [AQ, eQ] = (0, LQ.useState)(!1), [MQ, GQ] = (0, LQ.useState)(null), pQ = (0, LQ.useRef)(null), cQ = dF(wQ);
                            (0, LQ.useLayoutEffect)((() => {
                              var QQ;
                              if (!MQ) return;
                              const FQ = QQ => {
                                  var FQ;
                                  return null === (FQ = pQ.current) || void 0 === FQ ? void 0 : FQ.querySelector(`[data-focus-key="${QQ}"]`)
                                },
                                wQ = FQ(MQ.key);
                              null === (QQ = wQ && !wQ.disabled ? wQ : FQ(MQ.fallback)) || void 0 === QQ || QQ.focus(), GQ(null)
                            }), [MQ]);
                            const CQ = QQ => {
                                qQ(QQ), kQ(dF(QQ)), mQ(null)
                              },
                              iQ = QQ => {
                                CQ(wQ.filter(((FQ, wQ) => wQ !== QQ))), GQ({
                                  key: `edit-${Math.min(QQ,wQ.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              WQ = (QQ, FQ) => {
                                const LQ = [...wQ],
                                  [qQ] = LQ.splice(QQ, 1);
                                LQ.splice(QQ + FQ, 0, qQ), CQ(LQ);
                                GQ({
                                  key: `${FQ<0?"up":"down"}-${QQ+FQ}`,
                                  fallback: `edit-${QQ+FQ}`
                                })
                              };
                            return (0, xQ.jsxs)("section", {
                              ref: pQ,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, xQ.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, xQ.jsxs)("div", {
                                  children: [(0, xQ.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, xQ.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, xQ.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: Cq.map((QQ => (0, xQ.jsx)("button", {
                                  type: "button",
                                  className: oQ()("DocsVariantChip", {
                                    Active: cQ === dF(QQ.parts)
                                  }),
                                  onClick: () => {
                                    CQ(QQ.parts)
                                  },
                                  children: QQ.label
                                }, QQ.label)))
                              }), (0, xQ.jsx)(Yq, {
                                parts: wQ,
                                className: "DocsTextEditorPreview"
                              }), (0, xQ.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, xQ.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, xQ.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, xQ.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [wQ.map(((QQ, FQ) => {
                                      const LQ = VF(QQ);
                                      return (0, xQ.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, xQ.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${FQ}`,
                                          "aria-label": `Edit part ${FQ+1}, ${XF[LQ]}`,
                                          onClick: () => {
                                            YQ(FQ)
                                          },
                                          children: [(0, xQ.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: XF[LQ]
                                          }), (0, xQ.jsx)(Yq, {
                                            parts: [QQ],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== LQ && (0, xQ.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: ZF(QQ)
                                          })]
                                        }), (0, xQ.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, xQ.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${FQ+1} up`,
                                            "data-focus-key": `up-${FQ}`,
                                            disabled: 0 === FQ,
                                            onClick: () => {
                                              WQ(FQ, -1)
                                            },
                                            children: (0, xQ.jsx)(tQ, {
                                              name: "chevron-up"
                                            })
                                          }), (0, xQ.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${FQ+1} down`,
                                            "data-focus-key": `down-${FQ}`,
                                            disabled: FQ === wQ.length - 1,
                                            onClick: () => {
                                              WQ(FQ, 1)
                                            },
                                            children: (0, xQ.jsx)(tQ, {
                                              name: "chevron-down"
                                            })
                                          }), (0, xQ.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${FQ+1}`,
                                            onClick: () => {
                                              iQ(FQ)
                                            },
                                            children: (0, xQ.jsx)(tQ, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, FQ)
                                    })), 0 === wQ.length && (0, xQ.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, xQ.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: QQ => {
                                      "Escape" === QQ.key && AQ && (QQ.stopPropagation(), eQ(!1), GQ({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, xQ.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": AQ,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        eQ(!AQ)
                                      },
                                      children: [(0, xQ.jsx)(tQ, {
                                        name: "plus"
                                      }), "Add a part", (0, xQ.jsx)(tQ, {
                                        name: AQ ? "chevron-up" : "chevron-down"
                                      })]
                                    }), AQ && (0, xQ.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: Sq.map((QQ => (0, xQ.jsx)("li", {
                                        children: (0, xQ.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (QQ => {
                                              CQ([...wQ, fF[QQ]]), eQ(!1), YQ(wQ.length)
                                            })(QQ)
                                          },
                                          children: XF[QQ]
                                        })
                                      }, QQ)))
                                    })]
                                  })]
                                }), (0, xQ.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, xQ.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, xQ.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": uQ,
                                      onClick: () => {
                                        HQ(!uQ)
                                      },
                                      children: [(0, xQ.jsx)(tQ, {
                                        name: uQ ? "check" : "pencil"
                                      }), uQ ? "Done" : "Edit"]
                                    })]
                                  }), uQ ? (0, xQ.jsxs)(xQ.Fragment, {
                                    children: [(0, xQ.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: DQ,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: QQ => {
                                        kQ(QQ.target.value);
                                        const FQ = Lw(QQ.target.value);
                                        mQ(FQ.error), FQ.parts && qQ(FQ.parts)
                                      }
                                    }), vQ && (0, xQ.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: vQ
                                    })]
                                  }) : (0, xQ.jsx)(SQ, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${cQ})`
                                  })]
                                })]
                              }), null !== bQ && bQ < wQ.length && (0, xQ.jsx)(cq, {
                                parts: wQ,
                                index: bQ,
                                fontAwesomeIcons: FQ,
                                onChange: QQ => {
                                  ((QQ, FQ) => {
                                    CQ(wQ.map(((wQ, LQ) => LQ === QQ ? FQ : wQ)))
                                  })(bQ, QQ)
                                },
                                rU: () => {
                                  iQ(bQ), YQ(null)
                                },
                                onClose: () => {
                                  YQ(null), GQ({
                                    key: `edit-${bQ}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var Wq = wQ(4686),
                            Rq = wQ(4665),
                            Oq = wQ(4680),
                            sq = wQ(4691);
                          const rq = 40,
                            Iq = 800,
                            Uq = 150,
                            Nq = 8e3,
                            Tq = 2e3;

                          function Kq(QQ, FQ) {
                            return 12 * Math.log2(FQ / QQ)
                          }

                          function zq(QQ, FQ) {
                            return Math.round(QQ * 2 ** (FQ / 12) * 10) / 10
                          }

                          function lq(QQ) {
                            return `${QQ} ms`
                          }

                          function jq(QQ) {
                            return `${QQ} st`
                          }
                          const aq = [{
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

                          function Xq(QQ) {
                            let {
                              synth: FQ,
                              onChange: wQ
                            } = QQ;
                            const LQ = (0, Wq.i)(FQ);
                            return (0, xQ.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, xQ.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, xQ.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, xQ.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, xQ.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, xQ.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, xQ.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: Wq.d.map((QQ => (0, xQ.jsx)("button", {
                                      type: "button",
                                      className: oQ()("DocsVariantChip", {
                                        Active: FQ.waveform === QQ
                                      }),
                                      "aria-pressed": FQ.waveform === QQ,
                                      onClick: () => {
                                        wQ({
                                          waveform: QQ
                                        })
                                      },
                                      children: QQ
                                    }, QQ)))
                                  })]
                                }), (0, xQ.jsx)(dL, {
                                  label: "Pitch",
                                  min: 0,
                                  max: Kq(rq, Iq),
                                  step: .1,
                                  value: Kq(rq, FQ.pitchHz),
                                  format: () => `${FQ.pitchHz} Hz`,
                                  onChange: QQ => {
                                    wQ({
                                      pitchHz: zq(rq, QQ)
                                    })
                                  }
                                }), (0, xQ.jsx)(dL, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: FQ.syllableMs,
                                  format: lq,
                                  onChange: QQ => {
                                    wQ({
                                      syllableMs: QQ
                                    })
                                  }
                                }), (0, xQ.jsx)(dL, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: FQ.volume,
                                  onChange: QQ => {
                                    wQ({
                                      volume: QQ
                                    })
                                  }
                                })]
                              }), (0, xQ.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, xQ.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, xQ.jsx)(dL, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: FQ.durationMs,
                                  format: lq,
                                  onChange: QQ => {
                                    wQ({
                                      durationMs: QQ
                                    })
                                  }
                                }), (0, xQ.jsx)(dL, {
                                  label: "Fade in",
                                  min: 0,
                                  max: LQ.durationMs,
                                  step: 1,
                                  value: LQ.attackMs,
                                  format: lq,
                                  onChange: QQ => {
                                    wQ({
                                      attackMs: QQ
                                    })
                                  }
                                }), (0, xQ.jsx)(dL, {
                                  label: "Fade out",
                                  min: 0,
                                  max: LQ.durationMs - LQ.attackMs,
                                  step: 1,
                                  value: LQ.releaseMs,
                                  format: lq,
                                  onChange: QQ => {
                                    wQ({
                                      releaseMs: QQ
                                    })
                                  }
                                }), (0, xQ.jsx)(dL, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: FQ.glideSemitones,
                                  format: jq,
                                  onChange: QQ => {
                                    wQ({
                                      glideSemitones: QQ
                                    })
                                  }
                                }), (0, xQ.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, xQ.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== FQ.lowpassHz,
                                    onChange: QQ => {
                                      wQ({
                                        lowpassHz: QQ.target.checked ? Tq : null
                                      })
                                    }
                                  }), (0, xQ.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== FQ.lowpassHz && (0, xQ.jsx)(dL, {
                                  label: "Filter",
                                  min: 0,
                                  max: Kq(Uq, Nq),
                                  step: .1,
                                  value: Kq(Uq, FQ.lowpassHz),
                                  format: () => `${FQ.lowpassHz} Hz`,
                                  onChange: QQ => {
                                    wQ({
                                      lowpassHz: zq(Uq, QQ)
                                    })
                                  }
                                })]
                              }), (0, xQ.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, xQ.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), aq.map((QQ => {
                                  let {
                                    key: LQ,
                                    label: qQ,
                                    max: oQ
                                  } = QQ;
                                  return (0, xQ.jsx)(dL, {
                                    label: qQ,
                                    min: 0,
                                    max: oQ,
                                    step: .1,
                                    value: FQ.intonation[LQ],
                                    format: jq,
                                    onChange: QQ => {
                                      wQ({
                                        intonation: {
                                          ...FQ.intonation,
                                          [LQ]: QQ
                                        }
                                      })
                                    }
                                  }, LQ)
                                }))]
                              })]
                            })
                          }
                          const fq = Object.keys(Wq.f),
                            Vq = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function hq(QQ) {
                            var FQ;
                            const wQ = JSON.stringify((0, Wq.i)(QQ));
                            return null !== (FQ = fq.find((QQ => JSON.stringify((0, Wq.i)(Wq.f[QQ])) === wQ))) && void 0 !== FQ ? FQ : null
                          }

                          function Jq(QQ) {
                            let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof QQ || null === QQ) return JSON.stringify(QQ);
                            return `{\n${Object.entries(QQ).map((QQ=>{let[wQ,LQ]=QQ;return`${FQ}    ${wQ}: ${Jq(LQ,`${FQ}    `)},`})).join("\n")}\n${FQ}}`
                          }

                          function Eq(QQ, FQ, wQ) {
                            const LQ = hq(QQ),
                              qQ = [`    line: ${JSON.stringify(FQ)},`];
                            return wQ && qQ.push(`    speakerName: ${JSON.stringify(wQ)},`), qQ.push("    voice,"), `const voice = ${LQ?JSON.stringify(LQ):Jq((0,Wq.i)(QQ))}\n\napi.setClientOption(playerId, "dialogue", {\n${qQ.join("\n")}\n})`
                          }
                          const nq = 400,
                            gq = 90;
                          let Pq = null;

                          function Zq(QQ, FQ, wQ) {
                            return Pq ??= new AudioContext, Pq.resume(), (0, sq.c)(Pq, Pq.destination, QQ, FQ, wQ, (() => {}))
                          }

                          function yq() {
                            const [QQ, FQ] = (0, LQ.useState)(Wq.f.regular), [wQ, qQ] = (0, LQ.useState)(Vq[0]), [DQ, kQ] = (0, LQ.useState)("Innkeeper"), [vQ, mQ] = (0, LQ.useState)(0), uQ = HL((QQ => QQ.volume)), HQ = (0, LQ.useRef)(null), bQ = (0, LQ.useRef)(0), YQ = (0, LQ.useRef)(0), AQ = () => {
                              var QQ;
                              null === (QQ = HQ.current) || void 0 === QQ || QQ.call(HQ), HQ.current = null
                            };
                            (0, LQ.useEffect)((() => () => {
                              var QQ;
                              null === (QQ = HQ.current) || void 0 === QQ || QQ.call(HQ), window.clearTimeout(bQ.current)
                            }), []);
                            const eQ = (0, LQ.useMemo)((() => ({
                                line: wQ,
                                speakerName: DQ || void 0,
                                voice: QQ
                              })), [wQ, DQ, QQ]),
                              MQ = (0, LQ.useRef)(eQ);
                            MQ.current = eQ;
                            const pQ = hq(QQ),
                              cQ = QQ => {
                                window.clearTimeout(bQ.current), AQ();
                                const {
                                  plan: FQ,
                                  synth: wQ
                                } = (0, Oq.f)(QQ);
                                wQ && (HQ.current = Zq(wQ, FQ.blips, uQ)), mQ((QQ => QQ + 1))
                              },
                              CQ = Eq(QQ, wQ, DQ);
                            return (0, xQ.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, xQ.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, xQ.jsxs)("div", {
                                  children: [(0, xQ.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, xQ.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, xQ.jsx)(GQ, {
                                  text: CQ,
                                  label: "Copy code"
                                })]
                              }), (0, xQ.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [fq.map((QQ => (0, xQ.jsx)("button", {
                                  type: "button",
                                  className: oQ()("DocsVariantChip", {
                                    Active: pQ === QQ
                                  }),
                                  "aria-pressed": pQ === QQ,
                                  onClick: () => {
                                    (QQ => {
                                      const wQ = Wq.f[QQ];
                                      FQ(wQ), cQ({
                                        ...eQ,
                                        voice: wQ
                                      })
                                    })(QQ)
                                  },
                                  children: QQ
                                }, QQ))), !pQ && (0, xQ.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, xQ.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, xQ.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, xQ.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, xQ.jsx)(Rq.c, {
                                      display: eQ
                                    }, vQ)
                                  }), (0, xQ.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: QQ => {
                                      QQ.preventDefault(), cQ(eQ)
                                    },
                                    children: [(0, xQ.jsx)("input", {
                                      value: wQ,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: QQ => {
                                        qQ(QQ.target.value)
                                      }
                                    }), (0, xQ.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, xQ.jsx)(tQ, {
                                        name: "play"
                                      }), (0, xQ.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, xQ.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: Vq.map((QQ => (0, xQ.jsx)("button", {
                                      type: "button",
                                      className: oQ()("DocsVariantChip", {
                                        Active: wQ === QQ
                                      }),
                                      onClick: () => {
                                        var FQ;
                                        qQ(FQ = QQ), cQ({
                                          ...eQ,
                                          line: FQ
                                        })
                                      },
                                      children: QQ
                                    }, QQ)))
                                  }), (0, xQ.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, xQ.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, xQ.jsx)("input", {
                                      value: DQ,
                                      placeholder: "No name",
                                      onChange: QQ => {
                                        kQ(QQ.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, xQ.jsx)(Xq, {
                                  synth: QQ,
                                  onChange: wQ => {
                                    const LQ = {
                                      ...QQ,
                                      ...wQ
                                    };
                                    FQ(LQ);
                                    const qQ = {
                                        ...eQ,
                                        voice: LQ
                                      },
                                      oQ = performance.now();
                                    if (oQ - YQ.current >= gq) {
                                      YQ.current = oQ, AQ();
                                      const QQ = (0, Oq.f)(qQ).plan.blips[0];
                                      QQ && (HQ.current = Zq((0, Wq.i)(LQ), [{
                                        ...QQ,
                                        atMs: 0
                                      }], uQ))
                                    }
                                    window.clearTimeout(bQ.current), bQ.current = window.setTimeout((() => {
                                      cQ(MQ.current)
                                    }), nq)
                                  }
                                })]
                              }), (0, xQ.jsx)(SQ, {
                                code: CQ,
                                lang: "ts"
                              })]
                            })
                          }
                          var Bq = wQ(4705);
                          const dq = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            Qo = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            Fo = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${Qo}`, "g"), Bq.m],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, Bq.m]
                            ];

                          function wo(QQ) {
                            return `${QQ.pageId}#${QQ.anchor}`
                          }
                          let Lo, qo, oo;

                          function Do(QQ) {
                            const FQ = (0, iQ.h)(QQ),
                              wQ = new Set;
                            for (const [, , LQ] of FQ.matchAll(iQ.c)) {
                              const QQ = LQ.startsWith("#") ? VQ(LQ) : null,
                                FQ = QQ ? wo({
                                  pageId: QQ.page.id,
                                  anchor: QQ.anchor
                                }) : null;
                              null !== FQ && (Lo || (Lo = new Set(zQ.flatMap((QQ => sQ(QQ.layout) ? XQ(QQ).sections.map((FQ => wo({
                                pageId: QQ.id,
                                anchor: FQ.heading.anchor
                              }))) : [])))), Lo).has(FQ) && wQ.add(FQ)
                            }
                            for (const [, , LQ] of FQ.matchAll(dq)) {
                              const QQ = bF(LQ);
                              QQ && wQ.add(wo(QQ))
                            }
                            return wQ
                          }

                          function ko(QQ, FQ) {
                            const wQ = new Set,
                              LQ = function(QQ) {
                                return QQ.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(QQ);
                            for (const [, qQ] of LQ.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) wQ.add(qQ);
                            for (const [qQ, oQ] of Fo)
                              for (const [, QQ] of(0, Bq.d)(LQ, qQ, oQ)) FQ.has(QQ) && wQ.add(QQ);
                            return wQ
                          }

                          function vo(QQ, FQ, wQ, LQ) {
                            const qQ = QQ.get(FQ);
                            qQ ? !LQ && qQ.some((QQ => QQ.pageId === wQ.pageId)) || qQ.push(wQ) : QQ.set(FQ, [wQ])
                          }
                          const mo = /^[A-Za-z_$][\w$]*$/;

                          function uo(QQ) {
                            return mo.test(QQ.name) ? QQ.name : "options"
                          }

                          function Ho(QQ, FQ) {
                            const wQ = QQ.params.map(uo).join(", ");
                            return FQ ? `${QQ.name} = (${wQ}) => {\n\t\n}` : `api.${QQ.name}(${wQ})`
                          }

                          function bo(QQ) {
                            let {
                              method: FQ,
                              isCallback: wQ
                            } = QQ;
                            return (0, xQ.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, xQ.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [wQ ? (0, xQ.jsxs)(xQ.Fragment, {
                                  children: [(0, xQ.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: FQ.name
                                  }), (0, xQ.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, xQ.jsxs)(xQ.Fragment, {
                                  children: [(0, xQ.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, xQ.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: FQ.name
                                  }), (0, xQ.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), FQ.params.map(((QQ, wQ) => (0, xQ.jsxs)(LQ.Fragment, {
                                  children: [wQ > 0 && (0, xQ.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, xQ.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${FQ.name}-${uo(QQ)}`,
                                    children: QQ.name
                                  })]
                                }, QQ.name))), (0, xQ.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: wQ ? ") => " : ")"
                                }), wQ && !FQ.returns && (0, xQ.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), FQ.returns && FQ.returns.type && (0, xQ.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!wQ && (0, xQ.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, xQ.jsx)(WF, {
                                  type: FQ.returns.type
                                })]
                              })]
                            })
                          }

                          function Yo(QQ) {
                            let {
                              title: FQ,
                              references: wQ
                            } = QQ;
                            const qQ = (0, LQ.useContext)(YF);
                            return (0, xQ.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, xQ.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: FQ
                              }), wQ.map((QQ => (0, xQ.jsx)(DQ.b, {
                                to: JQ(qQ, jQ(QQ.pageId), QQ.anchor),
                                children: QQ.label
                              }, `${QQ.pageId}#${QQ.anchor}`)))]
                            })
                          }

                          function xo(QQ) {
                            var FQ, wQ;
                            let {
                              pageId: LQ,
                              anchor: qQ
                            } = QQ;
                            const oQ = wo({
                                pageId: LQ,
                                anchor: qQ
                              }),
                              DQ = null !== (FQ = function() {
                                if (!oo) {
                                  oo = new Map;
                                  const LQ = new Set(zQ.filter((QQ => "callbacks" === QQ.layout)).flatMap((QQ => XQ(QQ).sections.map((QQ => QQ.heading.text)))));
                                  for (const qQ of zQ)
                                    if ("article" === qQ.layout || "snippets" === qQ.layout)
                                      for (const oQ of (0, iQ.y)(XQ(qQ)))
                                        for (const {
                                            code: DQ
                                          }
                                          of(0, iQ.l)(oQ.blocks))
                                          for (const kQ of ko(DQ, LQ)) {
                                            const LQ = HF().get(kQ);
                                            if (LQ) {
                                              var QQ, FQ, wQ;
                                              const DQ = {
                                                pageId: qQ.id,
                                                anchor: null !== (QQ = null === (FQ = oQ.heading) || void 0 === FQ ? void 0 : FQ.anchor) && void 0 !== QQ ? QQ : "",
                                                label: null !== (wQ = qQ.navTitle) && void 0 !== wQ ? wQ : qQ.title
                                              };
                                              vo(oo, wo(LQ), DQ, !1)
                                            }
                                          }
                                }
                                return oo
                              }().get(oQ)) && void 0 !== FQ ? FQ : [],
                              kQ = null !== (wQ = function() {
                                if (!qo) {
                                  qo = new Map;
                                  const QQ = jQ("changelog");
                                  for (const FQ of XQ(QQ).sections) {
                                    const wQ = new Set(FQ.blocks.flatMap((QQ => [...Do(QQ)])));
                                    for (const LQ of wQ) {
                                      const wQ = {
                                        pageId: QQ.id,
                                        anchor: FQ.heading.anchor,
                                        label: FQ.heading.text
                                      };
                                      vo(qo, LQ, wQ, !0)
                                    }
                                  }
                                }
                                return qo
                              }().get(oQ)) && void 0 !== wQ ? wQ : [];
                            return 0 === DQ.length && 0 === kQ.length ? null : (0, xQ.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [DQ.length > 0 && (0, xQ.jsx)(Yo, {
                                title: "Used in",
                                references: DQ
                              }), kQ.length > 0 && (0, xQ.jsx)(Yo, {
                                title: "Changelog",
                                references: kQ
                              })]
                            })
                          }

                          function Ao(QQ) {
                            let {
                              method: FQ,
                              pageId: wQ,
                              anchor: LQ,
                              isCallback: qQ
                            } = QQ;
                            const oQ = qQ ? void 0 : kF().get(FQ.name),
                              DQ = FQ.description.length > 0 || null === oQ || void 0 === oQ || !oQ.description ? FQ.description : (0, iQ.F)(oQ.description);
                            return (0, xQ.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, xQ.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, xQ.jsx)(mw, {
                                  level: 2,
                                  text: FQ.name,
                                  anchor: LQ,
                                  className: "DocsCardTitle"
                                }), (0, xQ.jsx)(GQ, {
                                  text: Ho(FQ, qQ),
                                  label: qQ ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, xQ.jsx)(bo, {
                                method: FQ,
                                isCallback: qQ
                              }), oQ && null !== oQ.deprecation && (0, xQ.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, xQ.jsx)("strong", {
                                  children: "Deprecated"
                                }), oQ.deprecation && (0, xQ.jsxs)(xQ.Fragment, {
                                  children: [": ", (0, xQ.jsx)(CF, {
                                    text: (kQ = oQ.deprecation, (0, Bq.x)(kQ, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, Bq.i)("`\\w"), (QQ => {
                                      let [FQ] = QQ;
                                      return HF().has(FQ) ? `\`${FQ}\`` : FQ
                                    })))
                                  })]
                                })]
                              }), DQ.length > 0 && (0, xQ.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, xQ.jsx)(Yw, {
                                  blocks: DQ
                                })
                              }), FQ.params.length > 0 && (0, xQ.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, xQ.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, xQ.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: FQ.params.map((QQ => (0, xQ.jsxs)("div", {
                                    id: `${FQ.name}-${uo(QQ)}`,
                                    className: "DocsParam",
                                    children: [(0, xQ.jsxs)("dt", {
                                      children: [(0, xQ.jsx)("code", {
                                        className: "DocsParamName",
                                        children: QQ.name
                                      }), (0, xQ.jsx)(WF, {
                                        type: QQ.type
                                      })]
                                    }), QQ.description && (0, xQ.jsx)("dd", {
                                      children: (0, xQ.jsx)(CF, {
                                        text: QQ.description
                                      })
                                    })]
                                  }, QQ.name)))
                                })]
                              }), FQ.returns && (FQ.returns.type || FQ.returns.description.length > 0) && (0, xQ.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, xQ.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, xQ.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [FQ.returns.type && (0, xQ.jsx)(WF, {
                                    type: FQ.returns.type
                                  }), FQ.returns.description.length > 0 && (0, xQ.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, xQ.jsx)(Yw, {
                                      blocks: FQ.returns.description
                                    })
                                  })]
                                })]
                              }), (0, xQ.jsx)(xo, {
                                pageId: wQ,
                                anchor: LQ
                              })]
                            });
                            var kQ
                          }

                          function to(QQ) {
                            var FQ;
                            return null !== QQ.defaultValue && "undefined" !== QQ.defaultValue ? QQ.defaultValue : null !== (FQ = QQ.example) && void 0 !== FQ ? FQ : "value"
                          }

                          function eo(QQ) {
                            let {
                              setting: FQ,
                              pageId: wQ,
                              anchor: LQ,
                              setterSnippet: qQ
                            } = QQ;
                            const oQ = null === FQ.defaultValue ? null : eF(FQ.defaultValue);
                            return (0, xQ.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, xQ.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, xQ.jsx)(mw, {
                                  level: 2,
                                  text: FQ.name,
                                  anchor: LQ,
                                  className: "DocsCardTitle"
                                }), (0, xQ.jsx)(GQ, {
                                  text: qQ(FQ.name, to(FQ)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, xQ.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, xQ.jsxs)("div", {
                                  children: [(0, xQ.jsx)("dt", {
                                    children: "Type"
                                  }), (0, xQ.jsx)("dd", {
                                    children: (0, xQ.jsx)(WF, {
                                      type: FQ.type
                                    })
                                  })]
                                }), null !== FQ.defaultValue && (0, xQ.jsxs)("div", {
                                  children: [(0, xQ.jsx)("dt", {
                                    children: "Default"
                                  }), (0, xQ.jsx)("dd", {
                                    children: (0, xQ.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [oQ && (0, xQ.jsx)(MF, {
                                        colour: oQ
                                      }), FQ.defaultValue]
                                    })
                                  })]
                                }), null !== FQ.example && (0, xQ.jsxs)("div", {
                                  children: [(0, xQ.jsx)("dt", {
                                    children: "Example"
                                  }), (0, xQ.jsx)("dd", {
                                    children: (0, xQ.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: FQ.example
                                    })
                                  })]
                                })]
                              }), FQ.description.length > 0 && (0, xQ.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, xQ.jsx)(Yw, {
                                  blocks: FQ.description
                                })
                              }), (0, xQ.jsx)(xo, {
                                pageId: wQ,
                                anchor: LQ
                              })]
                            })
                          }

                          function Mo(QQ) {
                            let {
                              section: FQ
                            } = QQ;
                            return (0, xQ.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, xQ.jsx)(mw, {
                                level: 2,
                                text: FQ.heading.text,
                                anchor: FQ.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, xQ.jsx)("div", {
                                className: "DocsProse",
                                children: (0, xQ.jsx)(Yw, {
                                  blocks: FQ.blocks
                                })
                              })]
                            })
                          }

                          function Go(QQ) {
                            let {
                              section: FQ
                            } = QQ;
                            return (0, xQ.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, xQ.jsx)(mw, {
                                level: FQ.heading.level,
                                text: FQ.heading.text,
                                anchor: FQ.heading.anchor
                              }), (0, xQ.jsx)(Yw, {
                                blocks: FQ.blocks
                              })]
                            })
                          }
                          const po = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function co(QQ) {
                            let {
                              page: FQ,
                              section: wQ
                            } = QQ;
                            if ("methods" === FQ.layout || "callbacks" === FQ.layout) return (0, xQ.jsx)(Ao, {
                              method: iw(wQ),
                              pageId: FQ.id,
                              anchor: wQ.heading.anchor,
                              isCallback: "callbacks" === FQ.layout
                            });
                            if ("settings" === FQ.layout) {
                              const QQ = function(QQ) {
                                const FQ = {
                                  name: QQ.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const LQ of QQ.blocks) {
                                  var wQ;
                                  if (Sw(LQ)) continue;
                                  const QQ = "paragraph" === LQ.kind ? LQ.text.match(Ww) : null;
                                  if (!QQ) {
                                    FQ.description.push(LQ);
                                    continue
                                  }
                                  const qQ = null !== (wQ = Cw(QQ[2])) && void 0 !== wQ ? wQ : QQ[2];
                                  "Type" === QQ[1] ? FQ.type = qQ : "Default" === QQ[1] ? FQ.defaultValue = qQ : "" !== qQ && (FQ.example = qQ)
                                }
                                return FQ.type ? FQ : null
                              }(wQ);
                              if (QQ) return (0, xQ.jsx)(eo, {
                                setting: QQ,
                                pageId: FQ.id,
                                anchor: wQ.heading.anchor,
                                setterSnippet: FQ.setterSnippet
                              })
                            }
                            return "snippets" === FQ.layout ? (0, xQ.jsx)(Mo, {
                              section: wQ
                            }) : "changelog" === FQ.layout ? (0, xQ.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, xQ.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, xQ.jsx)(mw, {
                                  level: 2,
                                  text: wQ.heading.text,
                                  anchor: wQ.heading.anchor
                                })
                              }), (0, xQ.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, xQ.jsx)(Yw, {
                                  blocks: Rw(wQ.blocks)
                                })
                              })]
                            }) : FQ.gallery ? (0, xQ.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, xQ.jsx)(mw, {
                                level: wQ.heading.level,
                                text: wQ.heading.text,
                                anchor: wQ.heading.anchor
                              }), (0, xQ.jsx)(OL, {
                                kind: FQ.gallery,
                                content: XQ(FQ),
                                blocks: wQ.blocks
                              })]
                            }) : (0, xQ.jsx)(Go, {
                              section: wQ
                            })
                          }

                          function Co(QQ) {
                            let {
                              page: FQ,
                              onTocChange: wQ
                            } = QQ;
                            const qQ = XQ(FQ),
                              [oQ, DQ] = (0, LQ.useState)(""),
                              kQ = "article" !== FQ.layout,
                              vQ = tw(FQ.gallery) ? FQ.gallery : null,
                              mQ = null !== vQ,
                              uQ = oQ.trim().toLowerCase(),
                              HQ = (0, LQ.useRef)(null),
                              bQ = (0, LQ.useCallback)((QQ => {
                                var FQ;
                                null === (FQ = HQ.current) || void 0 === FQ || FQ.preview(QQ)
                              }), []),
                              YQ = (0, LQ.useMemo)((() => {
                                if (!FQ.hasParticlePlayground) return [];
                                const QQ = Iw(qQ.intro).find((QQ => "names" === QQ.kind && !QQ.names.some((QQ => null !== Xw(QQ.name)))));
                                return "names" === (null === QQ || void 0 === QQ ? void 0 : QQ.kind) ? QQ.names.map((QQ => QQ.name)) : []
                              }), [FQ, qQ]),
                              AQ = (0, LQ.useMemo)((() => {
                                if (!FQ.hasTextPlayground) return [];
                                const QQ = qQ.sections.flatMap((QQ => QQ.blocks.flatMap((QQ => {
                                  var FQ;
                                  return (null !== (FQ = rw(QQ)) && void 0 !== FQ ? FQ : []).flatMap((QQ => aF(QQ.name) ? [QQ.name] : []))
                                }))));
                                return [...new Set(QQ)]
                              }), [FQ, qQ]),
                              tQ = (0, LQ.useMemo)((() => uQ ? qQ.sections.filter((QQ => function(QQ, FQ) {
                                return !!QQ.heading.text.toLowerCase().includes(FQ) || QQ.blocks.some((QQ => (0, iQ.h)(QQ).toLowerCase().includes(FQ)))
                              }(QQ, uQ))) : qQ.sections), [qQ, uQ]),
                              eQ = (0, LQ.useMemo)((() => function(QQ, FQ) {
                                return "article" !== QQ.layout ? FQ.map((QQ => ({
                                  anchor: QQ.heading.anchor,
                                  text: QQ.heading.text,
                                  level: 2
                                }))) : FQ.flatMap((QQ => {
                                  const FQ = QQ.blocks.flatMap((QQ => "heading" === QQ.kind && 3 === QQ.level ? [{
                                    anchor: QQ.anchor,
                                    text: QQ.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: QQ.heading.anchor,
                                    text: QQ.heading.text,
                                    level: 2
                                  }, ...FQ]
                                }))
                              }(FQ, tQ)), [FQ, tQ]);
                            return (0, LQ.useEffect)((() => {
                              wQ(eQ)
                            }), [eQ, wQ]), (0, xQ.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, xQ.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, xQ.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: qQ.title || FQ.title
                                }), (0, xQ.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: FQ.summary
                                }), (0, xQ.jsx)(PL, {
                                  page: FQ
                                }), kQ && (0, xQ.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, xQ.jsxs)("span", {
                                    children: [(0, xQ.jsx)("strong", {
                                      children: qQ.sections.length
                                    }), " ", po[FQ.layout]]
                                  })
                                })]
                              }), "" === FQ.slug && (0, xQ.jsx)(rL, {}), vQ && (0, xQ.jsx)(TL, {
                                kind: vQ
                              }, vQ), FQ.hasParticlePlayground && (0, xQ.jsx)(vq, {
                                ref: HQ,
                                textures: YQ
                              }), !mQ && qQ.intro.length > 0 && (0, xQ.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: FQ.gallery ? (0, xQ.jsx)(ML.Provider, {
                                  value: FQ.hasParticlePlayground ? bQ : null,
                                  children: (0, xQ.jsx)(OL, {
                                    kind: FQ.gallery,
                                    content: qQ,
                                    blocks: qQ.intro
                                  })
                                }) : (0, xQ.jsx)(Yw, {
                                  blocks: Rw(qQ.intro)
                                })
                              }), FQ.hasTextPlayground && (0, xQ.jsx)(iq, {
                                fontAwesomeIcons: AQ
                              }), FQ.hasVoicePlayground && (0, xQ.jsx)(yq, {}), FQ.childPageIds && (0, xQ.jsx)(rL, {
                                cards: FQ.childPageIds.map((QQ => ({
                                  pageId: QQ
                                }))),
                                label: FQ.title
                              }), kQ && (0, xQ.jsx)(Gw, {
                                className: "DocsFilterBar",
                                value: oQ,
                                placeholder: `Filter ${qQ.sections.length} ${po[FQ.layout]}\u2026`,
                                label: `Filter ${po[FQ.layout]}`,
                                onChange: DQ,
                                count: uQ ? {
                                  visible: tQ.length,
                                  total: qQ.sections.length
                                } : null
                              }), !mQ && (0, xQ.jsxs)("div", {
                                className: `DocsSections Layout-${FQ.layout}`,
                                children: [tQ.map((QQ => (0, xQ.jsx)(co, {
                                  page: FQ,
                                  section: QQ
                                }, QQ.heading.anchor))), 0 === tQ.length && (0, xQ.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", po[FQ.layout], " match \u201c", oQ, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const So = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function io(QQ) {
                            let {
                              entry: FQ,
                              isActive: wQ,
                              onNavigate: LQ,
                              label: qQ,
                              children: DQ
                            } = QQ;
                            return (0, xQ.jsx)("a", {
                              href: `#${FQ.anchor}`,
                              "aria-label": qQ,
                              className: oQ()(`Level${FQ.level}`, {
                                Active: wQ
                              }),
                              "aria-current": wQ ? "location" : void 0,
                              onClick: QQ => {
                                QQ.preventDefault(), LQ(FQ.anchor)
                              },
                              children: DQ
                            })
                          }

                          function Wo(QQ) {
                            let {
                              toc: FQ,
                              activeAnchor: wQ,
                              onNavigate: qQ
                            } = QQ;
                            const DQ = Math.max(0, FQ.findIndex((QQ => QQ.anchor === wQ))),
                              kQ = (0, LQ.useRef)(null),
                              vQ = (0, LQ.useRef)(!1);
                            (0, LQ.useEffect)((() => {
                              var QQ, wQ;
                              const LQ = null === (QQ = kQ.current) || void 0 === QQ ? void 0 : QQ.closest(".DocsToc"),
                                qQ = null === (wQ = kQ.current) || void 0 === wQ ? void 0 : wQ.querySelector(".DocsTimelineNotch.Active");
                              if (!LQ || !qQ) return;
                              let oQ = 0;
                              if (DQ === FQ.length - 1) oQ = LQ.scrollHeight;
                              else if (DQ > 0) {
                                const QQ = LQ.getBoundingClientRect(),
                                  FQ = qQ.getBoundingClientRect();
                                oQ = LQ.scrollTop + FQ.top + FQ.height / 2 - (QQ.top + LQ.clientHeight / 2)
                              }
                              LQ.scrollTo({
                                top: oQ,
                                behavior: vQ.current ? "smooth" : "auto"
                              }), vQ.current = !0
                            }), [DQ, FQ.length]);
                            const mQ = [];
                            return FQ.forEach(((QQ, FQ) => {
                              var wQ, LQ, qQ;
                              const oQ = function(QQ) {
                                  const FQ = QQ.trim().match(So);
                                  return FQ ? {
                                    day: FQ[1],
                                    month: `${FQ[2]} ${FQ[3]}`
                                  } : null
                                }(QQ.text),
                                DQ = null !== (wQ = null === oQ || void 0 === oQ ? void 0 : oQ.month) && void 0 !== wQ ? wQ : null;
                              null !== DQ && (null === (LQ = mQ.at(-1)) || void 0 === LQ ? void 0 : LQ.month) === DQ || mQ.push({
                                month: DQ,
                                entries: []
                              }), mQ.at(-1).entries.push({
                                entry: QQ,
                                day: null !== (qQ = null === oQ || void 0 === oQ ? void 0 : oQ.day) && void 0 !== qQ ? qQ : null,
                                index: FQ
                              })
                            })), (0, xQ.jsx)("ol", {
                              ref: kQ,
                              className: "DocsTimeline",
                              children: mQ.map((QQ => {
                                let {
                                  month: FQ,
                                  entries: wQ
                                } = QQ;
                                return (0, xQ.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [FQ && (0, xQ.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: FQ
                                  }), (0, xQ.jsx)("ol", {
                                    children: wQ.map((QQ => {
                                      let {
                                        entry: FQ,
                                        day: wQ,
                                        index: LQ
                                      } = QQ;
                                      return (0, xQ.jsx)("li", {
                                        className: oQ()("DocsTimelineNotch", {
                                          Passed: LQ < DQ,
                                          Active: LQ === DQ
                                        }),
                                        children: (0, xQ.jsx)(io, {
                                          entry: FQ,
                                          isActive: LQ === DQ,
                                          onNavigate: qQ,
                                          label: FQ.text,
                                          children: (0, xQ.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== wQ && void 0 !== wQ ? wQ : FQ.text
                                          })
                                        })
                                      }, FQ.anchor)
                                    }))
                                  })]
                                }, wQ[0].entry.anchor)
                              }))
                            })
                          }

                          function Ro(QQ) {
                            let {
                              isChangelog: FQ,
                              toc: wQ,
                              activeAnchor: LQ,
                              onNavigate: qQ
                            } = QQ;
                            return 0 === wQ.length ? null : (0, xQ.jsxs)(xQ.Fragment, {
                              children: [(0, xQ.jsx)("div", {
                                className: "DocsTocTitle",
                                children: FQ ? "Updates" : "On this page"
                              }), FQ ? (0, xQ.jsx)(Wo, {
                                toc: wQ,
                                activeAnchor: LQ,
                                onNavigate: qQ
                              }) : (0, xQ.jsx)("ul", {
                                children: wQ.map((QQ => (0, xQ.jsx)("li", {
                                  children: (0, xQ.jsx)(io, {
                                    entry: QQ,
                                    isActive: QQ.anchor === LQ,
                                    onNavigate: qQ,
                                    children: QQ.text.replace(/`/g, "")
                                  })
                                }, QQ.anchor)))
                              })]
                            })
                          }
                          const Oo = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            so = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            ro = 20,
                            Io = 10,
                            Uo = 40,
                            No = 120;
                          let To;

                          function Ko(QQ) {
                            const FQ = QQ.gallery;
                            if (!FQ) return [];
                            if (tw(FQ)) return function(QQ) {
                              return Mw(QQ).entries.map((QQ => QQ.name))
                            }(FQ).map((wQ => ({
                              page: QQ,
                              anchor: Nw(FQ, wQ),
                              title: wQ,
                              kind: so[FQ],
                              text: "",
                              listedUnder: QQ.title
                            })));
                            const wQ = XQ(QQ);
                            return (0, iQ.y)(wQ).flatMap((LQ => {
                              const qQ = LQ.heading ? `${QQ.title} \u203a ${LQ.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : QQ.title;
                              return Kw(FQ, wQ, LQ.blocks).flatMap((wQ => "names" !== wQ.kind ? [] : wQ.names.map((LQ => {
                                const oQ = wQ.isSongs ? "Song" : so[FQ];
                                return {
                                  page: QQ,
                                  anchor: LQ.anchor,
                                  title: LQ.name,
                                  kind: oQ,
                                  text: "",
                                  listedUnder: qQ
                                }
                              }))))
                            }))
                          }

                          function zo(QQ, FQ, wQ) {
                            const LQ = QQ.title.toLowerCase();
                            let qQ = 0;
                            if (LQ === FQ) qQ = 100;
                            else if (LQ.startsWith(FQ)) qQ = 80;
                            else if (LQ.includes(FQ)) qQ = 60;
                            else if (wQ.every((QQ => LQ.includes(QQ)))) qQ = 45;
                            else {
                              if (!QQ.text.toLowerCase().includes(FQ)) return 0;
                              qQ = 20
                            }
                            return qQ - Math.min(LQ.length / 10, 9) + ("Page" === QQ.kind ? 8 : "Method" === QQ.kind ? 3 : 0) - (QQ.listedUnder ? ro : 0)
                          }

                          function jo(QQ, FQ) {
                            const wQ = QQ.toLowerCase().indexOf(FQ),
                              LQ = Math.max(0, wQ - No / 3);
                            return `${LQ>0?"\u2026":""}${QQ.slice(LQ,LQ+No)}${LQ+No<QQ.length?"\u2026":""}`
                          }

                          function ao(QQ) {
                            let {
                              text: FQ,
                              query: wQ
                            } = QQ;
                            const LQ = wQ ? FQ.toLowerCase().indexOf(wQ) : -1;
                            return -1 === LQ ? (0, xQ.jsx)(xQ.Fragment, {
                              children: FQ
                            }) : (0, xQ.jsxs)(xQ.Fragment, {
                              children: [FQ.slice(0, LQ), (0, xQ.jsx)("mark", {
                                children: FQ.slice(LQ, LQ + wQ.length)
                              }), FQ.slice(LQ + wQ.length)]
                            })
                          }

                          function Xo(QQ) {
                            let {
                              basePath: FQ,
                              onClose: wQ
                            } = QQ;
                            const qQ = (0, kQ.v)(),
                              [DQ, vQ] = (0, LQ.useState)(""),
                              [mQ, uQ] = (0, LQ.useState)(0),
                              HQ = (0, LQ.useRef)(null),
                              bQ = (0, LQ.useRef)(null),
                              YQ = DQ.trim().toLowerCase(),
                              AQ = (0, LQ.useMemo)((() => {
                                const QQ = (To || (To = zQ.flatMap((QQ => {
                                  const FQ = XQ(QQ);
                                  return [{
                                    page: QQ,
                                    anchor: "",
                                    title: QQ.title,
                                    kind: "Page",
                                    text: QQ.summary
                                  }, ...FQ.sections.flatMap((FQ => {
                                    const wQ = FQ.blocks.filter((QQ => "paragraph" === QQ.kind)).map(iQ.h).join(" ").replace(/[`*]/g, ""),
                                      LQ = {
                                        page: QQ,
                                        anchor: FQ.heading.anchor,
                                        title: FQ.heading.text.replace(/`/g, ""),
                                        kind: Oo[QQ.layout],
                                        text: wQ
                                      },
                                      qQ = FQ.blocks.flatMap((FQ => "article" === QQ.layout && "heading" === FQ.kind && 3 === FQ.level ? [{
                                        page: QQ,
                                        anchor: FQ.anchor,
                                        title: FQ.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: LQ.title
                                      }] : []));
                                    return [LQ, ...qQ]
                                  })), ...Ko(QQ)]
                                }))), To);
                                if (!YQ) return QQ.filter((QQ => "Page" === QQ.kind));
                                const FQ = YQ.split(/\s+/);
                                let wQ = 0;
                                return QQ.map((QQ => ({
                                  entry: QQ,
                                  score: zo(QQ, YQ, FQ)
                                }))).filter((QQ => QQ.score > 0)).sort(((QQ, FQ) => FQ.score - QQ.score)).filter((QQ => !QQ.entry.listedUnder || (wQ++, wQ <= Io))).slice(0, Uo).map((QQ => QQ.entry))
                              }), [YQ]);
                            (0, LQ.useEffect)((() => {
                              uQ(0)
                            }), [YQ]), (0, LQ.useEffect)((() => {
                              const QQ = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === QQ || void 0 === QQ || QQ.focus()
                              }
                            }), []), (0, LQ.useEffect)((() => {
                              var QQ, FQ;
                              null === (QQ = HQ.current) || void 0 === QQ || null === (FQ = QQ.querySelector(".Active")) || void 0 === FQ || FQ.scrollIntoView({
                                block: "nearest"
                              })
                            }), [mQ]);
                            const eQ = QQ => {
                              qQ(JQ(FQ, QQ.page, QQ.anchor)), wQ()
                            };
                            return (0, xQ.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: QQ => {
                                QQ.target === QQ.currentTarget && wQ()
                              },
                              children: (0, xQ.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: QQ => {
                                  QQ.target !== bQ.current && QQ.preventDefault()
                                },
                                onKeyDown: QQ => {
                                  if ("Escape" === QQ.key) wQ();
                                  else if ("Tab" === QQ.key) {
                                    var FQ;
                                    QQ.preventDefault(), null === (FQ = bQ.current) || void 0 === FQ || FQ.focus()
                                  }
                                },
                                children: [(0, xQ.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, xQ.jsx)(tQ, {
                                    name: "magnifying-glass"
                                  }), (0, xQ.jsx)("input", {
                                    ref: bQ,
                                    autoFocus: !0,
                                    value: DQ,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": AQ.length > 0 ? `DocsSearchResult-${mQ}` : void 0,
                                    onChange: QQ => {
                                      vQ(QQ.target.value)
                                    },
                                    onKeyDown: QQ => {
                                      if ("ArrowDown" === QQ.key || "ArrowUp" === QQ.key) {
                                        QQ.preventDefault();
                                        const FQ = "ArrowDown" === QQ.key ? 1 : -1;
                                        uQ((mQ + FQ + AQ.length) % Math.max(AQ.length, 1))
                                      } else "Enter" === QQ.key && AQ[mQ] && eQ(AQ[mQ])
                                    }
                                  }), (0, xQ.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, xQ.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: HQ,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!YQ && (0, xQ.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), AQ.map(((QQ, FQ) => {
                                    var wQ;
                                    return (0, xQ.jsxs)("li", {
                                      id: `DocsSearchResult-${FQ}`,
                                      role: "option",
                                      "aria-selected": FQ === mQ,
                                      className: oQ()("DocsSearchResult", {
                                        Active: FQ === mQ
                                      }),
                                      onMouseMove: () => {
                                        uQ(FQ)
                                      },
                                      onClick: () => {
                                        eQ(QQ)
                                      },
                                      children: [(0, xQ.jsx)(tQ, {
                                        name: QQ.page.icon
                                      }), (0, xQ.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, xQ.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, xQ.jsx)(ao, {
                                            text: QQ.title,
                                            query: YQ
                                          })
                                        }), QQ.text && (0, xQ.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, xQ.jsx)(ao, {
                                            text: jo(QQ.text, YQ),
                                            query: YQ
                                          })
                                        })]
                                      }), (0, xQ.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === QQ.kind ? "Page" : null !== (wQ = QQ.listedUnder) && void 0 !== wQ ? wQ : `${QQ.kind} \xb7 ${QQ.page.title}`
                                      })]
                                    }, `${QQ.page.id}#${QQ.anchor}`)
                                  })), YQ && 0 === AQ.length && (0, xQ.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", DQ, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function fo(QQ, FQ) {
                            if (FQ < 10) return `${QQ.toFixed(1)}s`;
                            const wQ = Math.floor(QQ);
                            return `${Math.floor(wQ/60)}:${String(wQ%60).padStart(2,"0")}`
                          }

                          function Vo() {
                            const QQ = HL((QQ => QQ.track)),
                              FQ = HL((QQ => QQ.volume)),
                              [wQ, qQ] = (0, LQ.useState)(0),
                              DQ = (0, LQ.useRef)(wL);
                            if ((0, LQ.useEffect)((() => {
                                if (!QQ) return;
                                if (qQ(AL()), "playing" !== QQ.status) return;
                                let FQ = 0;
                                const wQ = () => {
                                  qQ(AL()), FQ = requestAnimationFrame(wQ)
                                };
                                return FQ = requestAnimationFrame(wQ), () => {
                                  cancelAnimationFrame(FQ)
                                }
                              }), [QQ]), !QQ) return null;
                            const kQ = "paused" !== QQ.status,
                              vQ = Math.min(wQ, QQ.duration);
                            return (0, xQ.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, xQ.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, xQ.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": kQ ? `Pause ${QQ.name}` : `Play ${QQ.name}`,
                                  onClick: xL,
                                  children: (0, xQ.jsx)(tQ, {
                                    name: kQ ? "pause" : "play"
                                  })
                                }), (0, xQ.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, xQ.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, xQ.jsx)("code", {
                                      children: QQ.name
                                    }), (0, xQ.jsx)("span", {
                                      children: QQ.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, xQ.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, xQ.jsx)("span", {
                                      children: fo(vQ, QQ.duration)
                                    }), (0, xQ.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: QQ.duration || 1,
                                      step: .01,
                                      value: vQ,
                                      disabled: 0 === QQ.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${fo(vQ,QQ.duration)} of ${fo(QQ.duration,QQ.duration)}`,
                                      onChange: QQ => {
                                        const FQ = Number(QQ.target.value);
                                        ! function(QQ) {
                                          var FQ;
                                          kL = QQ, null === (FQ = oL) || void 0 === FQ || FQ.seek(QQ)
                                        }(FQ), qQ(FQ)
                                      }
                                    }), (0, xQ.jsx)("span", {
                                      children: QQ.duration > 0 ? fo(QQ.duration, QQ.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, xQ.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, xQ.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === FQ ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === FQ ? tL(DQ.current) : (DQ.current = FQ, tL(0))
                                    },
                                    children: (0, xQ.jsx)(tQ, {
                                      name: "volume",
                                      className: oQ()({
                                        Muted: 0 === FQ
                                      })
                                    })
                                  }), (0, xQ.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: FQ,
                                    "aria-label": "Volume",
                                    onChange: QQ => {
                                      tL(Number(QQ.target.value))
                                    }
                                  })]
                                }), (0, xQ.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var FQ;
                                    null === (FQ = document.querySelector(`[data-docs-track="${CSS.escape(LL(QQ.name,QQ.isSong))}"]`)) || void 0 === FQ || FQ.focus(), eL()
                                  },
                                  children: (0, xQ.jsx)(tQ, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var ho = wQ(27);
                          const Jo = "docsTheme",
                            Eo = window.matchMedia("(prefers-color-scheme: light)");

                          function no(QQ) {
                            let {
                              theme: FQ,
                              onChange: wQ
                            } = QQ;
                            const LQ = "dark" === FQ ? "light" : "dark";
                            return (0, xQ.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${LQ} theme`,
                              title: `Switch to ${LQ} theme`,
                              onClick: () => {
                                wQ(LQ)
                              },
                              children: (0, xQ.jsx)(tQ, {
                                name: "dark" === FQ ? "moon" : "sun"
                              })
                            })
                          }
                          const go = "https://github.com/Bloxdy/code-api",
                            Po = "https://discord.gg/playbloxd",
                            Zo = 180,
                            yo = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function Bo(QQ) {
                            let {
                              basePath: FQ,
                              activePageId: wQ,
                              onNavigate: LQ
                            } = QQ;
                            return (0, xQ.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: lQ.map((QQ => (0, xQ.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, xQ.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: QQ.title
                                }), QQ.pageIds.map((QQ => {
                                  var qQ;
                                  const kQ = jQ(QQ);
                                  return (0, xQ.jsxs)(DQ.b, {
                                    to: JQ(FQ, kQ),
                                    className: oQ()("DocsNavLink", {
                                      Active: kQ.id === wQ
                                    }),
                                    "aria-current": kQ.id === wQ ? "page" : void 0,
                                    onClick: LQ,
                                    children: [(0, xQ.jsx)(tQ, {
                                      name: kQ.icon
                                    }), (0, xQ.jsx)("span", {
                                      children: null !== (qQ = kQ.navTitle) && void 0 !== qQ ? qQ : kQ.title
                                    })]
                                  }, kQ.id)
                                }))]
                              }, QQ.title)))
                            })
                          }

                          function QD(QQ) {
                            let {
                              basePath: FQ,
                              pageId: wQ
                            } = QQ;
                            const LQ = lQ.flatMap((QQ => QQ.pageIds)),
                              qQ = LQ.indexOf(wQ),
                              oQ = qQ > 0 ? jQ(LQ[qQ - 1]) : null,
                              kQ = qQ < LQ.length - 1 ? jQ(LQ[qQ + 1]) : null;
                            return (0, xQ.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [oQ ? (0, xQ.jsxs)(DQ.b, {
                                className: "DocsPagerLink Previous",
                                to: JQ(FQ, oQ),
                                children: [(0, xQ.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, xQ.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: oQ.title
                                })]
                              }) : (0, xQ.jsx)("span", {}), kQ && (0, xQ.jsxs)(DQ.b, {
                                className: "DocsPagerLink Next",
                                to: JQ(FQ, kQ),
                                children: [(0, xQ.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, xQ.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: kQ.title
                                })]
                              })]
                            })
                          }

                          function FD(QQ) {
                            let {
                              basePath: FQ,
                              embedded: wQ = !1
                            } = QQ;
                            const {
                              pageSlug: qQ = ""
                            } = (0, kQ.y)(), mQ = (0, kQ.r)(), uQ = (0, kQ.v)(), HQ = (bQ = qQ, zQ.find((QQ => QQ.slug === bQ)));
                            var bQ;
                            const [YQ, AQ] = function() {
                              const [QQ, FQ] = (0, LQ.useState)((() => {
                                const QQ = ho.i.getItem(Jo);
                                return "dark" === QQ || "light" === QQ ? QQ : null
                              })), [wQ, qQ] = (0, LQ.useState)(Eo.matches ? "light" : "dark");
                              return (0, LQ.useEffect)((() => {
                                const QQ = () => {
                                  qQ(Eo.matches ? "light" : "dark")
                                };
                                return Eo.addEventListener("change", QQ), () => {
                                  Eo.removeEventListener("change", QQ)
                                }
                              }), []), [null !== QQ && void 0 !== QQ ? QQ : wQ, QQ => {
                                ho.i.setItem(Jo, QQ), FQ(QQ)
                              }]
                            }(), [eQ, MQ] = (0, LQ.useState)(null), [GQ, pQ] = (0, LQ.useState)(!1), [cQ, CQ] = (0, LQ.useState)(!1), [SQ, WQ] = (0, LQ.useState)([]), RQ = function(QQ, FQ) {
                              const [wQ, qQ] = (0, LQ.useState)("");
                              return (0, LQ.useEffect)((() => {
                                if (!FQ) return;
                                let wQ = 0;
                                const LQ = () => {
                                    var LQ, oQ;
                                    wQ = 0;
                                    const DQ = FQ.getBoundingClientRect().top + Zo;
                                    let kQ = null !== (LQ = null === (oQ = QQ[0]) || void 0 === oQ ? void 0 : oQ.anchor) && void 0 !== LQ ? LQ : "";
                                    for (const FQ of QQ) {
                                      const QQ = document.getElementById(FQ.anchor);
                                      QQ && QQ.getBoundingClientRect().top <= DQ && (kQ = FQ.anchor)
                                    }
                                    FQ.scrollTop + FQ.clientHeight >= FQ.scrollHeight - 2 && FQ.scrollTop > 0 && QQ.length > 0 && (kQ = QQ[QQ.length - 1].anchor), qQ(kQ)
                                  },
                                  oQ = () => {
                                    wQ || (wQ = requestAnimationFrame(LQ))
                                  };
                                return LQ(), FQ.addEventListener("scroll", oQ, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(wQ), FQ.removeEventListener("scroll", oQ)
                                }
                              }), [QQ, FQ]), wQ
                            }(SQ, eQ), OQ = "" === qQ && mQ.hash ? function(QQ) {
                              const FQ = (0, iQ.q)(QQ);
                              if (fQ(jQ("welcome"), FQ)) return null;
                              const wQ = Object.hasOwn(hQ, FQ) ? hQ[FQ] : null;
                              if (wQ) return {
                                page: jQ(wQ.pageId),
                                anchor: wQ.anchor
                              };
                              const LQ = jQ("readme");
                              return fQ(LQ, FQ) ? {
                                page: LQ,
                                anchor: FQ
                              } : VQ(`#${FQ}`)
                            }(mQ.hash) : null;
                            (0, LQ.useEffect)((() => (vQ.c.set({
                              musicOnFromPage: !1
                            }), () => {
                              vQ.c.set({
                                musicOnFromPage: !0
                              }), eL()
                            })), []), (0, LQ.useEffect)((() => {
                              const QQ = QQ => {
                                const FQ = QQ.target;
                                if (FQ.closest(".DocsTextDialog")) return;
                                const wQ = FQ.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(FQ.tagName);
                                "k" === QQ.key && (QQ.metaKey || QQ.ctrlKey) || "/" === QQ.key && !wQ ? (QQ.preventDefault(), CQ(!0)) : "Escape" === QQ.key && pQ(!1)
                              };
                              return window.addEventListener("keydown", QQ), () => {
                                window.removeEventListener("keydown", QQ)
                              }
                            }), []);
                            const sQ = (0, LQ.useRef)(null);
                            (0, LQ.useLayoutEffect)((() => {
                              var QQ, FQ;
                              if (!eQ) return;
                              const wQ = sQ.current === mQ.pathname;
                              sQ.current = mQ.pathname;
                              const LQ = (0, iQ.q)(mQ.hash),
                                qQ = LQ ? document.getElementById(LQ) : null;
                              if (null === (QQ = eQ.querySelector(".DocsTargeted")) || void 0 === QQ || QQ.classList.remove("DocsTargeted"), null === qQ || void 0 === qQ || null === (FQ = qQ.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === FQ || FQ.classList.add("DocsTargeted"), qQ) {
                                var oQ;
                                const QQ = qQ.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (oQ = qQ.closest(".DocsChangelogEntry")) && void 0 !== oQ ? oQ : qQ).scrollIntoView({
                                  block: QQ ? "center" : "start",
                                  behavior: wQ ? "smooth" : "auto"
                                })
                              } else wQ || eQ.scrollTo({
                                top: 0
                              })
                            }), [eQ, mQ.pathname, mQ.hash, mQ.key]);
                            const rQ = (0, LQ.useCallback)((() => {
                                pQ(!1)
                              }), []),
                              IQ = (0, LQ.useCallback)((QQ => {
                                uQ({
                                  hash: QQ
                                })
                              }), [uQ]);
                            if (OQ) return (0, xQ.jsx)(kQ.e, {
                              replace: !0,
                              to: JQ(FQ, OQ.page, OQ.anchor)
                            });
                            if (!HQ) return (0, xQ.jsx)(kQ.e, {
                              replace: !0,
                              to: FQ
                            });
                            const UQ = wQ ? "div" : "main";
                            return (0, xQ.jsx)(YF.Provider, {
                              value: FQ,
                              children: (0, xQ.jsx)(xF.Provider, {
                                value: eQ,
                                children: (0, xQ.jsxs)("div", {
                                  ref: MQ,
                                  className: oQ()("DocsSite", {
                                    Embedded: wQ,
                                    NavOpen: GQ
                                  }),
                                  "data-theme": YQ,
                                  children: [(0, xQ.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, xQ.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": GQ ? "Close menu" : "Open menu",
                                      "aria-expanded": GQ,
                                      onClick: () => {
                                        pQ(!GQ)
                                      },
                                      children: (0, xQ.jsx)(tQ, {
                                        name: GQ ? "cross" : "menu"
                                      })
                                    }), (0, xQ.jsxs)(DQ.b, {
                                      to: FQ,
                                      className: "DocsBrand",
                                      children: [(0, xQ.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, xQ.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, xQ.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, xQ.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        CQ(!0)
                                      },
                                      children: [(0, xQ.jsx)(tQ, {
                                        name: "magnifying-glass"
                                      }), (0, xQ.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, xQ.jsxs)("kbd", {
                                        children: [yo ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, xQ.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, xQ.jsxs)("a", {
                                        href: Po,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, xQ.jsx)(tQ, {
                                          name: "discord"
                                        }), (0, xQ.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, xQ.jsxs)("a", {
                                        href: go,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, xQ.jsx)(tQ, {
                                          name: "external-link"
                                        }), (0, xQ.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !wQ && (0, xQ.jsxs)(DQ.b, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, xQ.jsx)(tQ, {
                                          name: "play"
                                        }), (0, xQ.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, xQ.jsx)(no, {
                                        theme: YQ,
                                        onChange: AQ
                                      })]
                                    })]
                                  }), (0, xQ.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, xQ.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, xQ.jsx)(Bo, {
                                        basePath: FQ,
                                        activePageId: HQ.id,
                                        onNavigate: rQ
                                      })
                                    }), (0, xQ.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: rQ
                                    }), (0, xQ.jsxs)(UQ, {
                                      className: "DocsMain",
                                      children: [(0, xQ.jsx)(Co, {
                                        page: HQ,
                                        onTocChange: WQ
                                      }, HQ.id), (0, xQ.jsx)(QD, {
                                        basePath: FQ,
                                        pageId: HQ.id
                                      })]
                                    }), (0, xQ.jsx)("aside", {
                                      className: oQ()("DocsToc", {
                                        Timeline: "changelog" === HQ.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, xQ.jsx)(Ro, {
                                        isChangelog: "changelog" === HQ.layout,
                                        toc: SQ,
                                        activeAnchor: RQ,
                                        onNavigate: IQ
                                      })
                                    })]
                                  }), (0, xQ.jsx)(Vo, {}), cQ && (0, xQ.jsx)(Xo, {
                                    basePath: FQ,
                                    onClose: () => {
                                      CQ(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4585: (QQ, FQ, wQ) => {
                          wQ.d(FQ, {
                            B: () => YQ,
                            F: () => bQ,
                            c: () => LQ,
                            f: () => DQ,
                            h: () => tQ,
                            l: () => AQ,
                            m: () => kQ,
                            q: () => qQ,
                            u: () => oQ,
                            y: () => xQ
                          });
                          const LQ = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function qQ(QQ) {
                            try {
                              return decodeURIComponent(QQ.slice(1))
                            } catch {
                              return QQ.slice(1)
                            }
                          }

                          function oQ(QQ) {
                            return QQ.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const DQ = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${LQ.source}`, "g");

                          function kQ(QQ, FQ) {
                            return 2 === QQ.length ? FQ.replace(/^ (.*) $/, "$1") : FQ
                          }

                          function vQ(QQ) {
                            return "" === QQ.trim()
                          }

                          function mQ(QQ) {
                            const FQ = [];
                            for (const wQ of QQ.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) FQ.length > 0 && FQ[FQ.length - 1].endsWith("\\") ? FQ[FQ.length - 1] += `|${wQ}` : FQ.push(wQ);
                            return FQ.map((QQ => QQ.trim().replaceAll("\\|", "|")))
                          }
                          const uQ = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function HQ(QQ) {
                            const FQ = [],
                              wQ = [{
                                indent: -1,
                                items: FQ
                              }];
                            let LQ = null;
                            for (const qQ of QQ) {
                              const QQ = qQ.match(uQ);
                              if (!QQ) {
                                LQ && (LQ.text += ` ${qQ.trim()}`);
                                continue
                              }
                              const FQ = QQ[1].replace(/\t/g, "  ").length;
                              for (; FQ <= wQ[wQ.length - 1].indent;) wQ.pop();
                              LQ = {
                                text: QQ[3].trim(),
                                children: []
                              }, wQ[wQ.length - 1].items.push(LQ), wQ.push({
                                indent: FQ,
                                items: LQ.children
                              })
                            }
                            return FQ
                          }

                          function bQ(QQ) {
                            const FQ = QQ.replace(/\r\n/g, "\n").split("\n"),
                              wQ = [];
                            let LQ = 0;
                            for (; LQ < FQ.length;) {
                              const QQ = FQ[LQ];
                              if (vQ(QQ)) {
                                LQ++;
                                continue
                              }
                              const qQ = QQ.match(/^\s*```\s*(\w*)\s*$/);
                              if (qQ) {
                                const QQ = [];
                                for (LQ++; LQ < FQ.length && !/^\s*```\s*$/.test(FQ[LQ]);) QQ.push(FQ[LQ]), LQ++;
                                LQ++, wQ.push({
                                  kind: "code",
                                  lang: qQ[1] || "text",
                                  code: QQ.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const DQ = QQ.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (DQ) {
                                const QQ = DQ[2].trim();
                                wQ.push({
                                  kind: "heading",
                                  level: DQ[1].length,
                                  text: QQ,
                                  anchor: oQ(QQ)
                                }), LQ++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(QQ)) {
                                wQ.push({
                                  kind: "rule"
                                }), LQ++;
                                continue
                              }
                              if (QQ.trim().startsWith("|") && LQ + 1 < FQ.length && /^\s*\|[\s:|-]+\|\s*$/.test(FQ[LQ + 1])) {
                                const qQ = mQ(QQ),
                                  oQ = [];
                                for (LQ += 2; LQ < FQ.length && FQ[LQ].trim().startsWith("|");) oQ.push(mQ(FQ[LQ])), LQ++;
                                wQ.push({
                                  kind: "table",
                                  header: qQ,
                                  rows: oQ
                                });
                                continue
                              }
                              if (QQ.startsWith(">")) {
                                const QQ = [];
                                for (; LQ < FQ.length && FQ[LQ].startsWith(">");) QQ.push(FQ[LQ].replace(/^>\s?/, "")), LQ++;
                                wQ.push({
                                  kind: "quote",
                                  blocks: bQ(QQ.join("\n"))
                                });
                                continue
                              }
                              if (uQ.test(QQ)) {
                                const qQ = [],
                                  oQ = /^\s*\d+\./.test(QQ);
                                for (; LQ < FQ.length && !vQ(FQ[LQ]) && (uQ.test(FQ[LQ]) || /^\s+\S/.test(FQ[LQ]));) qQ.push(FQ[LQ]), LQ++;
                                wQ.push({
                                  kind: "list",
                                  ordered: oQ,
                                  items: HQ(qQ)
                                });
                                continue
                              }
                              const kQ = [];
                              for (; LQ < FQ.length && !vQ(FQ[LQ]) && !/^\s*```/.test(FQ[LQ]) && !/^#{1,6}\s/.test(FQ[LQ]) && !FQ[LQ].startsWith(">") && !uQ.test(FQ[LQ]) && (!FQ[LQ].trim().startsWith("|") || 0 !== kQ.length);) kQ.push(FQ[LQ].trim()), LQ++;
                              0 === kQ.length && (kQ.push(FQ[LQ].trim()), LQ++), wQ.push({
                                kind: "paragraph",
                                text: kQ.join(" ")
                              })
                            }
                            return wQ
                          }

                          function YQ(QQ) {
                            let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const wQ = bQ(QQ);
                            let LQ = "";
                            const qQ = [],
                              oQ = [],
                              DQ = new Map;
                            for (const mQ of wQ) {
                              if ("heading" === mQ.kind) {
                                var kQ;
                                const QQ = (null !== (kQ = DQ.get(mQ.anchor)) && void 0 !== kQ ? kQ : 0) + 1;
                                DQ.set(mQ.anchor, QQ), QQ > 1 && (mQ.anchor = `${mQ.anchor}-${QQ}`)
                              }
                              if ("heading" === mQ.kind && 1 === mQ.level && !LQ) {
                                LQ = mQ.text;
                                continue
                              }
                              if ("heading" === mQ.kind && mQ.level <= FQ) {
                                oQ.push({
                                  heading: mQ,
                                  blocks: []
                                });
                                continue
                              }
                              const QQ = oQ.at(-1);
                              QQ ? QQ.blocks.push(mQ) : qQ.push(mQ)
                            }
                            const vQ = QQ => {
                              for (;
                                "rule" === (null === (FQ = QQ.at(-1)) || void 0 === FQ ? void 0 : FQ.kind);) {
                                var FQ;
                                QQ.pop()
                              }
                            };
                            vQ(qQ);
                            for (const mQ of oQ) vQ(mQ.blocks);
                            return {
                              title: LQ,
                              intro: qQ,
                              sections: oQ
                            }
                          }

                          function xQ(QQ) {
                            return [{
                              heading: null,
                              blocks: QQ.intro
                            }, ...QQ.sections.map((QQ => ({
                              heading: QQ.heading,
                              blocks: QQ.blocks
                            })))]
                          }

                          function AQ(QQ) {
                            return QQ.flatMap((QQ => "code" === QQ.kind ? [QQ] : "quote" === QQ.kind ? AQ(QQ.blocks) : []))
                          }

                          function tQ(QQ) {
                            switch (QQ.kind) {
                              case "heading":
                              case "paragraph":
                                return QQ.text;
                              case "code":
                                return QQ.code;
                              case "table":
                                return [QQ.header, ...QQ.rows].map((QQ => QQ.join(" "))).join(" ");
                              case "list": {
                                const FQ = QQ => QQ.map((QQ => `${QQ.text} ${FQ(QQ.children)}`)).join(" ");
                                return FQ(QQ.items)
                              }
                              case "quote":
                                return QQ.blocks.map(tQ).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4674: (QQ, FQ, wQ) => {
                          wQ.d(FQ, {
                            d: () => kQ
                          });
                          var LQ = wQ(53),
                            qQ = wQ(307),
                            oQ = wQ(1887),
                            DQ = wQ(1107);

                          function kQ(QQ) {
                            let {
                              text: FQ
                            } = QQ;
                            const wQ = [];
                            let kQ = "";
                            return (0, qQ.ec)(FQ).forEach(((QQ, FQ) => {
                              if ("string" === typeof QQ || !(0, oQ.g)(QQ.icon)) return void(kQ += "string" === typeof QQ ? QQ : QQ.icon);
                              const qQ = Math.max(0, kQ.trimEnd().search(/\S{1,12}$/));
                              wQ.push((0, DQ.jsxs)(LQ.Fragment, {
                                children: [kQ.slice(0, qQ), (0, DQ.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [kQ.slice(qQ), (0, DQ.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": QQ.icon,
                                    children: (0, DQ.jsx)(oQ.e, {
                                      itemName: QQ.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, FQ)), kQ = ""
                            })), wQ.push(kQ), (0, DQ.jsx)(DQ.Fragment, {
                              children: wQ
                            })
                          }
                        }, 4612: (QQ, FQ, wQ) => {
                          wQ.d(FQ, {
                            c: () => MQ,
                            b: () => eQ
                          });
                          var LQ = wQ(53),
                            qQ = wQ(1447),
                            oQ = wQ(1873),
                            DQ = wQ(4615),
                            kQ = wQ(1107);
                          const vQ = (0, LQ.memo)((function(QQ) {
                            let {
                              initialParameters: FQ
                            } = QQ;
                            const wQ = (0, LQ.useRef)(null),
                              qQ = (0, LQ.useRef)(null),
                              vQ = (0, LQ.useRef)(0),
                              mQ = (0, LQ.useRef)(null),
                              uQ = FQ.description,
                              HQ = FQ.TL,
                              {
                                scale: bQ,
                                rotation: YQ
                              } = null !== FQ && void 0 !== FQ ? FQ : {},
                              xQ = (0, DQ.f)();
                            return (0, LQ.useEffect)((() => {
                              const QQ = xQ.onFrame((() => {
                                const QQ = xQ.getState();
                                if (!QQ.isActive || !wQ.current || !qQ.current) return;
                                const FQ = QQ.state;
                                if (wQ.current.value = FQ.progress, FQ.clickCount > vQ.current) {
                                  vQ.current = FQ.clickCount;
                                  const QQ = qQ.current;
                                  QQ.classList.add("pulse"), mQ.current = setTimeout((() => {
                                    QQ.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(mQ.current), QQ()
                              }
                            }), [xQ]), (0, kQ.jsx)(kQ.Fragment, {
                              children: (0, kQ.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== bQ && {
                                    "--scale": bQ
                                  },
                                  ...null !== YQ && {
                                    "--rotation": `${YQ}deg`
                                  }
                                },
                                children: [(0, kQ.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: wQ
                                }), (0, kQ.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: qQ,
                                  children: (0, kQ.jsx)(oQ.e, {
                                    text: [{
                                      icon: HQ
                                    }]
                                  })
                                }), (0, kQ.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, kQ.jsx)(oQ.e, {
                                    text: uQ
                                  })
                                })]
                              })
                            })
                          }));
                          var mQ = wQ(1070),
                            uQ = wQ.n(mQ);
                          const HQ = 2 * Math.PI * 90,
                            bQ = (0, LQ.memo)((function(QQ) {
                              let {
                                initialParameters: FQ
                              } = QQ;
                              const wQ = (0, LQ.useRef)(null),
                                qQ = (0, LQ.useRef)(null),
                                vQ = (0, LQ.useRef)(null),
                                mQ = FQ.label,
                                bQ = FQ.icon,
                                YQ = FQ.lL,
                                {
                                  scale: xQ,
                                  rotation: AQ,
                                  jL: tQ
                                } = null !== FQ && void 0 !== FQ ? FQ : {},
                                eQ = (0, DQ.f)();
                              return (0, LQ.useEffect)((() => {
                                const QQ = eQ.onFrame((() => {
                                  var QQ, FQ;
                                  const LQ = eQ.getState();
                                  if (!LQ.isActive || !qQ.current) return;
                                  const oQ = LQ.state,
                                    DQ = null !== (QQ = oQ.timeRemaining) && void 0 !== QQ ? QQ : 0,
                                    kQ = null !== (FQ = oQ.zL) && void 0 !== FQ ? FQ : 1,
                                    mQ = HQ * (1 - DQ / kQ);
                                  qQ.current.style.strokeDashoffset = `${mQ}`, wQ.current && (wQ.current.style.opacity = DQ > 0 ? "1" : "0"), vQ.current && YQ && (vQ.current.textContent = `${(DQ/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  QQ()
                                }
                              }), [eQ, YQ]), (0, kQ.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: wQ,
                                style: {
                                  ...null !== xQ && {
                                    "--scale": xQ
                                  },
                                  ...null !== AQ && {
                                    "--rotation": `${AQ}deg`
                                  }
                                },
                                children: [(0, kQ.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, kQ.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, kQ.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, kQ.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: HQ,
                                      ref: qQ
                                    })]
                                  }), (0, kQ.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, kQ.jsx)(oQ.e, {
                                      text: [{
                                        icon: bQ
                                      }],
                                      className: uQ()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: tQ
                                      })
                                    })
                                  })]
                                }), (0, kQ.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, kQ.jsx)(oQ.e, {
                                    text: mQ,
                                    className: "QTETimedClickLabelText"
                                  }), YQ && (0, kQ.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: vQ
                                  })]
                                })]
                              })
                            })),
                            YQ = (0, LQ.memo)((function(QQ) {
                              let {
                                initialParameters: FQ
                              } = QQ;
                              const wQ = (0, LQ.useRef)(null),
                                qQ = (0, LQ.useRef)(null),
                                vQ = (0, LQ.useRef)(null),
                                mQ = (0, LQ.useRef)(!1),
                                uQ = FQ.description,
                                HQ = null === FQ || void 0 === FQ ? void 0 : FQ.icon,
                                bQ = (0, DQ.f)();
                              return (0, LQ.useEffect)((() => {
                                const QQ = bQ.onFrame((() => {
                                  const QQ = bQ.getState();
                                  if (!QQ.isActive) return;
                                  const FQ = QQ.state;
                                  if (wQ.current) {
                                    const QQ = 100 * (FQ.catchZonePosition - FQ.XL / 2);
                                    wQ.current.style.left = `${QQ}%`, wQ.current.style.width = 100 * FQ.XL + "%", FQ.isCatching !== mQ.current && (mQ.current = FQ.isCatching, FQ.isCatching ? wQ.current.classList.add("catching") : wQ.current.classList.remove("catching"))
                                  }
                                  qQ.current && (qQ.current.style.left = 100 * FQ.moverPosition + "%"), vQ.current && (vQ.current.value = FQ.progress)
                                }));
                                return () => {
                                  QQ()
                                }
                              }), [bQ]), (0, kQ.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, kQ.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, kQ.jsx)(oQ.e, {
                                    text: uQ
                                  })
                                }), (0, kQ.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: vQ
                                }), (0, kQ.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, kQ.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: wQ
                                  }), (0, kQ.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: qQ,
                                    children: (0, kQ.jsx)("span", {
                                      children: HQ && (0, kQ.jsx)(oQ.e, {
                                        text: [{
                                          icon: HQ,
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
                          var xQ = wQ(619);
                          const AQ = (0, LQ.memo)((function(QQ) {
                              let {
                                initialParameters: FQ
                              } = QQ;
                              const wQ = (0, LQ.useRef)(null),
                                qQ = FQ.label,
                                vQ = FQ.gL,
                                {
                                  icon: mQ,
                                  scale: uQ,
                                  rotation: HQ
                                } = null !== FQ && void 0 !== FQ ? FQ : {},
                                bQ = 100 * (.5 - vQ / 2),
                                YQ = 100 * vQ,
                                AQ = (0, DQ.f)();
                              return (0, LQ.useEffect)((() => {
                                const QQ = AQ.onFrame((() => {
                                  const QQ = AQ.getState();
                                  if (!QQ.isActive || !wQ.current) return;
                                  const FQ = QQ.state;
                                  wQ.current.style.left = 100 * FQ.markerPosition + "%"
                                }));
                                return () => {
                                  QQ()
                                }
                              }), [AQ]), (0, kQ.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, xQ.F)(uQ) && {
                                    "--scale": uQ
                                  },
                                  ...!(0, xQ.F)(HQ) && {
                                    "--rotation": `${HQ}deg`
                                  }
                                },
                                children: [mQ && (0, kQ.jsx)(oQ.e, {
                                  text: [{
                                    icon: mQ
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, kQ.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, kQ.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${bQ}%`,
                                      width: `${YQ}%`
                                    }
                                  }), (0, kQ.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: wQ
                                  })]
                                }), (0, kQ.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, kQ.jsx)(oQ.e, {
                                    text: qQ
                                  })
                                })]
                              })
                            })),
                            tQ = (0, LQ.memo)((function(QQ) {
                              let {
                                initialParameters: FQ
                              } = QQ;
                              const wQ = (0, LQ.useRef)(null),
                                [qQ, vQ] = (0, LQ.useState)((() => new Array(FQ.ZL).fill("pending"))),
                                [mQ, uQ] = (0, LQ.useState)((() => {
                                  const QQ = FQ.dL;
                                  return (0, xQ.F)(QQ) || QQ <= 0 ? [] : new Array(QQ).fill("pending")
                                })),
                                HQ = FQ.label,
                                {
                                  icon: bQ
                                } = FQ,
                                YQ = (0, LQ.useRef)(0),
                                AQ = (0, LQ.useRef)(0),
                                tQ = (0, LQ.useRef)([]),
                                eQ = (0, DQ.f)();
                              return (0, LQ.useEffect)((() => {
                                const QQ = eQ.onFrame((() => {
                                  const QQ = eQ.getState();
                                  if (!QQ.isActive || !wQ.current) return;
                                  const FQ = QQ.state,
                                    LQ = 30 + 60 * FQ.outerCircleProgress;
                                  if (wQ.current.setAttribute("r", String(LQ)), !0 === FQ.lastClickResult && FQ.successes > YQ.current) {
                                    wQ.current.classList.remove("QTERhythmClickOuterCircle--miss"), wQ.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const QQ = setTimeout((() => {
                                      var QQ;
                                      null === (QQ = wQ.current) || void 0 === QQ || QQ.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    tQ.current.push(QQ)
                                  } else if (!1 === FQ.lastClickResult && FQ.misses > AQ.current) {
                                    wQ.current.classList.remove("QTERhythmClickOuterCircle--hit"), wQ.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const QQ = setTimeout((() => {
                                      var QQ;
                                      null === (QQ = wQ.current) || void 0 === QQ || QQ.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    tQ.current.push(QQ)
                                  }
                                  FQ.successes === YQ.current && FQ.misses === AQ.current || (YQ.current = FQ.successes, AQ.current = FQ.misses, vQ((QQ => {
                                    const wQ = [...QQ];
                                    for (let LQ = 0; LQ < FQ.ZL; LQ++) wQ[LQ] = LQ < FQ.successes ? "success" : "pending";
                                    return wQ
                                  })), uQ((QQ => {
                                    if (0 === QQ.length) return QQ;
                                    const wQ = [...QQ];
                                    for (let LQ = 0; LQ < wQ.length; LQ++) wQ[LQ] = LQ < FQ.misses ? "miss" : "pending";
                                    return wQ
                                  })))
                                }));
                                return () => {
                                  QQ();
                                  for (const QQ of tQ.current) clearTimeout(QQ);
                                  tQ.current = []
                                }
                              }), [eQ]), (0, kQ.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, kQ.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: qQ.map(((QQ, FQ) => (0, kQ.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === QQ ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, FQ)))
                                }), (0, kQ.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, kQ.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, kQ.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, kQ.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: wQ
                                    })]
                                  }), bQ && (0, kQ.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, kQ.jsx)(oQ.e, {
                                      text: [{
                                        icon: bQ
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), mQ.length > 0 && (0, kQ.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: mQ.map(((QQ, FQ) => (0, kQ.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === QQ ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, FQ)))
                                }), (0, kQ.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, kQ.jsx)(oQ.e, {
                                    text: HQ
                                  })
                                })]
                              })
                            }));

                          function eQ(QQ) {
                            let {
                              qte: FQ
                            } = QQ;
                            switch (FQ.type) {
                              case "progressBar":
                                return (0, kQ.jsx)(vQ, {
                                  initialParameters: FQ.parameters
                                });
                              case "timedClick":
                                return (0, kQ.jsx)(bQ, {
                                  initialParameters: FQ.parameters
                                });
                              case "gravityBar":
                                return (0, kQ.jsx)(YQ, {
                                  initialParameters: FQ.parameters
                                });
                              case "precisionBar":
                                return (0, kQ.jsx)(AQ, {
                                  initialParameters: FQ.parameters
                                });
                              case "rhythmClick":
                                return (0, kQ.jsx)(tQ, {
                                  initialParameters: FQ.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const MQ = (0, LQ.memo)((function() {
                            const [QQ, FQ] = (0, LQ.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, qQ.g)("qteStateUpdated", (QQ => {
                              FQ(QQ)
                            })), QQ.isActive && QQ.type ? (0, kQ.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, kQ.jsx)(eQ, {
                                qte: QQ
                              })
                            }) : null
                          }))
                        }, 4615: (QQ, FQ, wQ) => {
                          wQ.d(FQ, {
                            d: () => kQ,
                            f: () => vQ
                          });
                          var LQ = wQ(53),
                            qQ = wQ(1314),
                            oQ = wQ(4619);
                          const DQ = {
                              getState: () => oQ.c.getCurrentState(),
                              onFrame: qQ.q
                            },
                            kQ = (0, LQ.createContext)(DQ);

                          function vQ() {
                            return (0, LQ.useContext)(kQ)
                          }
                        }, 4680: (QQ, FQ, wQ) => {
                          wQ.d(FQ, {
                            b: () => TQ,
                            f: () => NQ
                          });
                          var LQ = wQ(4686),
                            qQ = wQ(307);
                          const oQ = 120,
                            DQ = 260,
                            kQ = 1.15,
                            vQ = 1.2,
                            mQ = 2,
                            uQ = 1.08,
                            HQ = .8,
                            bQ = .95,
                            YQ = 8,
                            xQ = "[\"')\\]\u300d\u300f\uff09]*",
                            AQ = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${xQ}$`),
                            tQ = new RegExp(`[?\uff1f]${xQ}$`),
                            eQ = new RegExp(`[!\uff01]${xQ}$`),
                            MQ = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            GQ = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            pQ = new RegExp(`[${GQ}]`),
                            cQ = new RegExp(`[${GQ}]|[^${GQ}]+`, "g"),
                            CQ = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function SQ(QQ) {
                            let FQ = 2166136261;
                            for (let wQ = 0; wQ < QQ.length; wQ++) FQ ^= QQ.charCodeAt(wQ), FQ = Math.imul(FQ, 16777619);
                            return (FQ >>> 0) / 4294967295 * 2 - 1
                          }

                          function iQ(QQ) {
                            var FQ;
                            if (pQ.test(QQ)) return 1;
                            const wQ = QQ.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              LQ = wQ.replace(/[^0-9]/g, "");
                            if (LQ.length > 0 && !/\p{L}/u.test(wQ)) return Math.min(LQ.length, 4);
                            const qQ = null !== (FQ = wQ.match(CQ)) && void 0 !== FQ ? FQ : [];
                            if (0 === qQ.length) {
                              var oQ, DQ;
                              const QQ = null !== (oQ = null === (DQ = wQ.match(/\p{L}/gu)) || void 0 === DQ ? void 0 : DQ.length) && void 0 !== oQ ? oQ : 0;
                              return 0 === QQ ? 0 : Math.min(Math.max(1, Math.round(QQ / 2.5)), YQ)
                            }
                            const kQ = wQ.replace(/[^\p{L}]/gu, ""),
                              vQ = qQ.length > 1 && "e" === qQ.at(-1) && kQ.endsWith("e") && !kQ.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(QQ.replace(/[^\p{L}]/gu, ""));
                            return Math.min(qQ.length - (vQ ? 1 : 0), YQ)
                          }

                          function WQ(QQ) {
                            return QQ.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function RQ(QQ) {
                            const FQ = QQ.replace(/[^\p{L}]/gu, "");
                            return FQ.length >= 2 && FQ === FQ.toUpperCase() && FQ !== FQ.toLowerCase()
                          }

                          function OQ(QQ, FQ) {
                            var wQ;
                            const YQ = FQ && (0, LQ.i)(FQ),
                              xQ = null !== (wQ = null === YQ || void 0 === YQ ? void 0 : YQ.syllableMs) && void 0 !== wQ ? wQ : LQ.c,
                              GQ = function(QQ) {
                                const FQ = [];
                                for (const LQ of (0, qQ.ec)(QQ))
                                  if ("string" === typeof LQ)
                                    for (const QQ of LQ.split(/(\s+)/)) {
                                      if ("" === QQ) continue;
                                      if (/^\s+$/.test(QQ)) {
                                        FQ.push({
                                          kind: "space",
                                          text: QQ
                                        });
                                        continue
                                      }
                                      if (!pQ.test(QQ)) {
                                        FQ.push({
                                          kind: "word",
                                          text: QQ,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let LQ = !0;
                                      for (const qQ of null !== (wQ = QQ.match(cQ)) && void 0 !== wQ ? wQ : []) {
                                        var wQ;
                                        const QQ = FQ.at(-1);
                                        LQ || "word" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) || pQ.test(qQ) || /[\p{L}\p{N}]/u.test(qQ) ? (LQ || FQ.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), FQ.push({
                                          kind: "word",
                                          text: qQ,
                                          delayMs: 0
                                        }), LQ = !1) : QQ.text += qQ
                                      }
                                    } else FQ.push({
                                      kind: "icon",
                                      text: LQ.icon,
                                      delayMs: 0
                                    });
                                return FQ
                              }(QQ),
                              CQ = [];
                            let OQ = [];
                            for (const LQ of GQ) "space" !== LQ.kind && (OQ.push(LQ), AQ.test(LQ.text) && (CQ.push(OQ), OQ = []));
                            CQ.push(OQ);
                            const sQ = [];
                            let rQ = 0;
                            for (const LQ of CQ) {
                              var IQ, UQ;
                              const QQ = null !== (IQ = null === (UQ = LQ.at(-1)) || void 0 === UQ ? void 0 : UQ.text) && void 0 !== IQ ? IQ : "",
                                FQ = tQ.test(QQ),
                                wQ = eQ.test(QQ),
                                qQ = LQ.map((QQ => "word" === QQ.kind ? iQ(QQ.text) : 1)),
                                GQ = qQ.findLastIndex((QQ => QQ > 0));
                              for (const [tQ, eQ] of LQ.entries()) {
                                const QQ = "word" === eQ.kind,
                                  LQ = qQ[tQ];
                                eQ.delayMs = rQ;
                                for (let qQ = 0; YQ && qQ < LQ; qQ++) {
                                  const {
                                    intonation: oQ
                                  } = YQ;
                                  let DQ = GQ > 0 ? -oQ.declineSemitones * (tQ / GQ) : 0;
                                  DQ += SQ(`${WQ(eQ.text)}|${qQ}`) * oQ.variationSemitones;
                                  const AQ = Math.min(1, oQ.variationSemitones);
                                  let MQ = YQ.glideSemitones,
                                    pQ = 1;
                                  wQ && (DQ += oQ.exclaimLiftSemitones, pQ *= kQ), FQ && tQ === GQ && (DQ += oQ.questionRiseSemitones * (LQ > 1 ? .5 + .5 * qQ / (LQ - 1) : 1), qQ === LQ - 1 && (MQ = Math.abs(MQ) + oQ.questionRiseSemitones / 2)), QQ && RQ(eQ.text) && (DQ += mQ * AQ, pQ *= vQ), LQ > 1 && 0 === qQ && (DQ += HQ * AQ, pQ *= uQ), sQ.push({
                                    atMs: rQ + qQ * xQ,
                                    semitones: DQ,
                                    glideSemitones: MQ,
                                    durationMs: qQ < LQ - 1 ? Math.min(YQ.durationMs, xQ * bQ) : YQ.durationMs,
                                    level: pQ
                                  })
                                }
                                rQ += LQ * xQ + (AQ.test(eQ.text) ? DQ : MQ.test(eQ.text) ? oQ : 0)
                              }
                            }
                            return {
                              pieces: GQ.map((QQ => "space" === QQ.kind ? QQ : "icon" === QQ.kind ? {
                                kind: "icon",
                                icon: QQ.text,
                                delayMs: QQ.delayMs
                              } : {
                                kind: "word",
                                text: QQ.text,
                                delayMs: QQ.delayMs
                              })),
                              blips: sQ
                            }
                          }
                          var sQ = wQ(1207),
                            rQ = wQ(1265),
                            IQ = wQ(1899);

                          function UQ(QQ) {
                            if ("string" === typeof QQ) return QQ;
                            const FQ = rQ.e.get().getCurrentLanguageCode();
                            return (0, sQ.o)(FQ, QQ.translationKey, (0, sQ.m)(QQ.params, IQ.b.shown))
                          }

                          function NQ(QQ) {
                            const FQ = void 0 === QQ.voice ? null : (0, LQ.k)(QQ.voice),
                              wQ = FQ && (0, LQ.i)(FQ);
                            return {
                              plan: OQ(UQ(QQ.line), wQ),
                              synth: wQ
                            }
                          }

                          function TQ(QQ) {
                            const FQ = [];
                            let wQ = [];
                            for (const [qQ, oQ] of QQ.entries()) {
                              var LQ;
                              "space" === oQ.kind && (" " !== oQ.text || "icon" !== (null === (LQ = QQ[qQ + 1]) || void 0 === LQ ? void 0 : LQ.kind)) ? (wQ.length > 0 && FQ.push(wQ), FQ.push([oQ]), wQ = []) : wQ.push(oQ)
                            }
                            return wQ.length > 0 && FQ.push(wQ), FQ
                          }
                        }, 4691: (QQ, FQ, wQ) => {
                          wQ.d(FQ, {
                            c: () => uQ,
                            d: () => HQ
                          });
                          var LQ = wQ(4694),
                            qQ = wQ(17);
                          const oQ = .25,
                            DQ = .85,
                            kQ = .02,
                            vQ = .01;

                          function mQ(QQ, FQ, wQ, LQ, qQ, oQ, kQ) {
                            const {
                              waveform: vQ,
                              pitchHz: mQ,
                              attackMs: uQ,
                              releaseMs: HQ,
                              lowpassHz: bQ
                            } = wQ, YQ = qQ + LQ.durationMs / 1e3, xQ = mQ * 2 ** (LQ.semitones / 12), AQ = QQ.createOscillator();
                            AQ.type = vQ, AQ.frequency.setValueAtTime(xQ, qQ), AQ.frequency.exponentialRampToValueAtTime(xQ * 2 ** (LQ.glideSemitones / 12), YQ);
                            const tQ = qQ + Math.min(uQ, LQ.durationMs) / 1e3,
                              eQ = QQ.createGain();
                            eQ.gain.setValueAtTime(0, qQ), eQ.gain.linearRampToValueAtTime(oQ, tQ), eQ.gain.linearRampToValueAtTime(oQ * DQ, Math.max(tQ, YQ - HQ / 1e3)), eQ.gain.linearRampToValueAtTime(0, YQ);
                            const MQ = [AQ];
                            if (null !== bQ) {
                              const FQ = QQ.createBiquadFilter();
                              FQ.type = "lowpass", FQ.frequency.value = bQ, MQ.push(FQ)
                            }
                            MQ.push(eQ, FQ);
                            for (let DQ = 1; DQ < MQ.length; DQ++) MQ[DQ - 1].connect(MQ[DQ]);
                            return AQ.onended = () => {
                              for (const QQ of MQ.slice(0, -1)) QQ.disconnect();
                              kQ()
                            }, AQ.start(qQ), AQ.stop(YQ), AQ
                          }

                          function uQ(QQ, FQ, wQ, LQ, qQ, DQ) {
                            if (0 === LQ.length) return DQ(), () => {};
                            const uQ = oQ * wQ.volume * qQ,
                              HQ = QQ.createGain();
                            HQ.connect(FQ);
                            const bQ = QQ.currentTime + kQ,
                              YQ = new Set;
                            for (const oQ of LQ) {
                              const FQ = mQ(QQ, HQ, wQ, oQ, bQ + oQ.atMs / 1e3, uQ * oQ.level, (() => {
                                YQ.delete(FQ), 0 === YQ.size && (HQ.disconnect(), DQ())
                              }));
                              YQ.add(FQ)
                            }
                            return () => {
                              const FQ = QQ.currentTime;
                              HQ.gain.setTargetAtTime(0, FQ, vQ);
                              for (const QQ of YQ) try {
                                QQ.stop(FQ + 5 * vQ)
                              } catch {}
                            }
                          }

                          function HQ(QQ, FQ) {
                            var wQ;
                            const oQ = LQ.Howler.ctx,
                              DQ = LQ.Howler.masterGain;
                            if (!oQ || !DQ || !qQ.c.get("soundOnFromAd")) return () => {};
                            const kQ = LQ.Howler;
                            return null === (wQ = kQ._autoResume) || void 0 === wQ || wQ.call(kQ), uQ(oQ, DQ, QQ, FQ, qQ.c.get("soundVolume"), (() => {
                              var QQ;
                              null === (QQ = kQ._autoSuspend) || void 0 === QQ || QQ.call(kQ)
                            }))
                          }
                        }, 4694: (QQ, FQ, wQ) => {
                          wQ.r(FQ), wQ.d(FQ, {
                            Howl: () => qQ.Howl,
                            Howler: () => qQ.Howler,
                            musicOutput: () => xQ,
                            readyAudioContext: () => AQ
                          });
                          var LQ, qQ = wQ(4702),
                            oQ = wQ(4494);
                          const DQ = qQ.Howler;

                          function kQ() {
                            var QQ, FQ;
                            if (DQ.ctx || !DQ.usingWebAudio || "undefined" === typeof AudioContext || !(0, oQ.i)()) return;
                            const wQ = navigator.audioSession;
                            let LQ;
                            "auto" === (null === wQ || void 0 === wQ ? void 0 : wQ.type) && (wQ.type = "ambient");
                            try {
                              LQ = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const qQ = LQ.createGain();
                            qQ.gain.setValueAtTime(DQ._muted ? 0 : null !== (QQ = DQ._volume) && void 0 !== QQ ? QQ : 1, LQ.currentTime), qQ.connect(LQ.destination), DQ.ctx = LQ, DQ.masterGain = qQ, null === (FQ = DQ._setup) || void 0 === FQ || FQ.call(DQ)
                          }
                          DQ._mobileUnloaded = !0;
                          const vQ = DQ.volume.bind(qQ.Howler);
                          DQ.volume = function() {
                            return kQ(), vQ(...arguments)
                          };
                          const mQ = DQ.mute.bind(qQ.Howler);
                          DQ.mute = QQ => (kQ(), mQ(QQ));
                          const uQ = qQ.Howl.prototype,
                            HQ = uQ.init;
                          uQ.init = function(QQ) {
                            return kQ(), HQ.call(this, QQ)
                          };
                          let bQ = 0;
                          const YQ = null === (LQ = DQ._autoSuspend) || void 0 === LQ ? void 0 : LQ.bind(qQ.Howler);

                          function xQ() {
                            AQ();
                            const {
                              ctx: QQ,
                              masterGain: FQ
                            } = DQ;
                            return QQ && FQ ? {
                              ctx: QQ,
                              destination: FQ,
                              holdAwake: QQ => {
                                var FQ, wQ;
                                (bQ += QQ ? 1 : -1, QQ) ? null === (FQ = DQ._autoResume) || void 0 === FQ || FQ.call(DQ): null === (wQ = DQ._autoSuspend) || void 0 === wQ || wQ.call(DQ)
                              },
                              wake: () => {
                                var FQ;
                                "running" !== QQ.state && (null === (FQ = DQ._autoResume) || void 0 === FQ || FQ.call(DQ), QQ.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function AQ() {
                            var QQ;
                            (DQ.volume(), DQ.ctx && DQ.autoUnlock) && (null === (QQ = DQ._unlockAudio) || void 0 === QQ || QQ.call(DQ))
                          }
                          YQ && (DQ._autoSuspend = () => bQ > 0 ? qQ.Howler : YQ())
                        }, 4705: (QQ, FQ, wQ) => {
                          function LQ(QQ) {
                            return {
                              notAfter: QQ
                            }
                          }
                          wQ.d(FQ, {
                            c: () => vQ,
                            d: () => mQ,
                            g: () => kQ,
                            i: () => LQ,
                            m: () => qQ,
                            q: () => oQ,
                            u: () => DQ,
                            x: () => uQ,
                            y: () => HQ
                          });
                          const qQ = LQ("\\w$."),
                            oQ = LQ("\\w.,");

                          function DQ(QQ) {
                            return FQ => vQ(FQ, QQ)
                          }

                          function kQ(QQ) {
                            return FQ => !QQ.test(FQ.input.slice(0, FQ.index))
                          }

                          function vQ(QQ, FQ) {
                            return QQ.index > 0 && new RegExp(`[${FQ}]`).test(QQ.input[QQ.index - 1])
                          }

                          function mQ(QQ, FQ, wQ) {
                            return function(QQ) {
                              return void 0 !== QQ && "function" !== typeof QQ
                            }(wQ) ? function(QQ, FQ, wQ) {
                              const LQ = FQ.flags.replace(/[gy]/g, ""),
                                qQ = new RegExp(`[^${wQ}](?:${FQ.source})`, `${LQ}g`),
                                oQ = [],
                                DQ = wQ => {
                                  const LQ = wQ.index + wQ[0].length;
                                  return ("" === wQ[0] ? bQ(QQ, FQ, LQ) : LQ) - 1
                                },
                                kQ = new RegExp(`(?:${FQ.source})`, `${LQ}y`).exec(QQ);
                              if (kQ) {
                                if (oQ.push(kQ), !FQ.global) return oQ;
                                qQ.lastIndex = DQ(kQ)
                              }
                              for (let vQ = qQ.exec(QQ); vQ; vQ = qQ.exec(QQ)) {
                                const wQ = bQ(QQ, FQ, vQ.index) - vQ.index;
                                if (vQ[0] = vQ[0].slice(wQ), vQ.index += wQ, oQ.push(vQ), !FQ.global) break;
                                qQ.lastIndex = DQ(vQ)
                              }
                              return oQ
                            }(QQ, FQ, wQ.notAfter) : function(QQ, FQ, wQ) {
                              const LQ = new RegExp(FQ.source, `${FQ.flags.replace(/[gy]/g,"")}g`),
                                qQ = [];
                              for (let oQ = LQ.exec(QQ); oQ; oQ = LQ.exec(QQ))
                                if (!wQ || wQ(oQ)) {
                                  if (qQ.push(oQ), !FQ.global) break;
                                  "" === oQ[0] && (LQ.lastIndex = bQ(QQ, FQ, LQ.lastIndex))
                                } else LQ.lastIndex = bQ(QQ, FQ, oQ.index);
                              return qQ
                            }(QQ, FQ, wQ)
                          }

                          function uQ(QQ, FQ, wQ, LQ) {
                            let qQ = "",
                              oQ = 0;
                            for (const DQ of mQ(QQ, FQ, wQ)) qQ += QQ.slice(oQ, DQ.index) + LQ(DQ), oQ = DQ.index + DQ[0].length;
                            return qQ + QQ.slice(oQ)
                          }

                          function HQ(QQ, FQ, wQ) {
                            const LQ = [];
                            let qQ = 0;
                            for (const oQ of mQ(QQ, FQ, wQ)) LQ.push(QQ.slice(qQ, oQ.index)), qQ = oQ.index + oQ[0].length;
                            return [...LQ, QQ.slice(qQ)]
                          }

                          function bQ(QQ, FQ, wQ) {
                            var LQ;
                            return wQ + (FQ.unicode && (null !== (LQ = QQ.codePointAt(wQ)) && void 0 !== LQ ? LQ : 0) > 65535 ? 2 : 1)
                          }
                        }, 4659: (QQ, FQ, wQ) => {
                          wQ.d(FQ, {
                            b: () => qQ,
                            f: () => vQ,
                            i: () => oQ,
                            j: () => DQ,
                            m: () => kQ,
                            o: () => tQ,
                            q: () => uQ,
                            r: () => HQ,
                            s: () => AQ,
                            t: () => YQ
                          });
                          var LQ = wQ(1582);
                          const qQ = 24e3,
                            oQ = "/docs/llms.txt",
                            DQ = `${LQ.c}${oQ}`,
                            kQ = "/llms.txt",
                            vQ = "/docs/llms-full.txt";

                          function mQ(QQ) {
                            return QQ || "index"
                          }

                          function uQ(QQ) {
                            return `/docs/${mQ(QQ)}.md`
                          }

                          function HQ(QQ, FQ) {
                            return `/docs/${mQ(QQ)}/${FQ+1}.md`
                          }
                          const bQ = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function YQ(QQ) {
                            const FQ = bQ.exec(QQ);
                            return null === FQ ? null : {
                              name: FQ[1],
                              part: void 0 === FQ[2] ? null : Number(FQ[2])
                            }
                          }
                          const xQ = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function AQ(QQ) {
                            const FQ = xQ.exec(QQ);
                            if (null === FQ) return null;
                            const [, wQ = "", LQ] = FQ;
                            return void 0 === LQ ? uQ(wQ) : HQ(wQ, Number(LQ) - 1)
                          }

                          function tQ(QQ) {
                            return `/docsHtml/${mQ(QQ)}.html`
                          }
                        }, 4686: (QQ, FQ, wQ) => {
                          wQ.d(FQ, {
                            c: () => qQ,
                            d: () => LQ,
                            f: () => oQ,
                            i: () => vQ,
                            k: () => DQ
                          });
                          const LQ = ["sine", "triangle", "square", "sawtooth"],
                            qQ = 55,
                            oQ = {
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

                          function DQ(QQ) {
                            return "string" !== typeof QQ ? QQ : Object.hasOwn(oQ, QQ) ? oQ[QQ] : null
                          }

                          function kQ(QQ, FQ, wQ) {
                            return Math.min(wQ, Math.max(FQ, QQ))
                          }

                          function vQ(QQ) {
                            const FQ = kQ(QQ.durationMs, 10, 500),
                              wQ = kQ(QQ.attackMs, 0, FQ),
                              {
                                intonation: qQ
                              } = QQ;
                            return {
                              waveform: LQ.includes(QQ.waveform) ? QQ.waveform : "sine",
                              pitchHz: kQ(QQ.pitchHz, 20, 4e3),
                              glideSemitones: kQ(QQ.glideSemitones, -24, 24),
                              durationMs: FQ,
                              attackMs: wQ,
                              releaseMs: kQ(QQ.releaseMs, 0, FQ - wQ),
                              lowpassHz: null === QQ.lowpassHz ? null : kQ(QQ.lowpassHz, 20, 2e4),
                              volume: kQ(QQ.volume, 0, 2),
                              intonation: {
                                variationSemitones: kQ(qQ.variationSemitones, 0, 6),
                                declineSemitones: kQ(qQ.declineSemitones, 0, 12),
                                questionRiseSemitones: kQ(qQ.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: kQ(qQ.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: kQ(QQ.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const QQ in modules) Object.freeze(modules[QQ]);