export const id = 75;
export const ids = [75, 91];
export const modules = {
    4311: (TT, oT, IT) => {
      IT.d(oT, {
        d: () => MT,
        g: () => rT
      });
      var iT = IT(1042),
        zT = IT.n(iT),
        kT = IT(46),
        WT = IT(1171),
        XT = IT(4320),
        BT = IT(1729),
        FT = IT(2227),
        ST = IT(4328),
        DT = IT(1083);
      const LT = new WeakMap;
      let xT = 0;

      function cT(TT) {
        let oT = LT.get(TT);
        return void 0 === oT && (oT = xT++, LT.set(TT, oT)), oT
      }

      function KT(TT) {
        let {
          piece: oT
        } = TT;
        return "space" === oT.kind ? (0, DT.jsx)(DT.Fragment, {
          children: oT.text
        }) : (0, DT.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${oT.delayMs}ms`
          },
          children: (0, DT.jsx)(XT.c, {
            text: "icon" === oT.kind ? `[[${oT.icon}]]` : oT.text
          })
        })
      }

      function MT(TT) {
        let {
          display: oT
        } = TT;
        const {
          selectedLanguage: IT
        } = (0, WT.t)(), iT = (0, kT.useMemo)((() => (0, ST.d)((0, ST.h)(oT).plan.pieces)), [oT, IT.code]);
        return (0, DT.jsxs)("div", {
          className: zT()("Dialogue", {
            DialogueAnimateIn: !1 !== oT.animateIn
          }),
          children: [oT.speakerName && (0, DT.jsx)(BT.c, {
            text: oT.speakerName,
            className: "DialogueSpeaker"
          }), (0, DT.jsx)("p", {
            className: "DialogueLine",
            children: iT.map(((TT, oT) => 1 === TT.length && "space" === TT[0].kind ? TT[0].text : (0, DT.jsx)("span", {
              className: "DialogueGlue",
              children: TT.map(((TT, oT) => (0, DT.jsx)(KT, {
                piece: TT
              }, oT)))
            }, oT)))
          })]
        })
      }
      const rT = (0, kT.memo)((function() {
        const TT = (0, FT.g)("dialogue");
        return (0, DT.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: TT && (0, DT.jsx)(MT, {
            display: TT
          }, cT(TT))
        })
      }))
    },
    4203: (TT, oT, IT) => {
        IT.r(oT), IT.d(oT, {
          default: () => iW
        });
        var iT = IT(46),
          zT = IT(1042),
          kT = IT.n(zT),
          WT = IT(1476),
          XT = IT(1484),
          BT = IT(12),
          FT = IT(68),
          ST = IT(4209),
          DT = IT(4224),
          LT = IT(4226),
          xT = IT(3895),
          cT = IT(1083);
        const KT = "/textures/docs/icons";

        function MT(TT) {
          let {
            name: oT,
            isTinted: IT,
            className: iT,
            style: zT
          } = TT;
          const WT = `${KT}/${oT}.png`;
          return IT ? (0, cT.jsxs)("span", {
            className: kT()("DocsPixelIcon", "Tinted", iT),
            "aria-hidden": "true",
            style: zT,
            children: [(0, cT.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${WT}")`,
                WebkitMaskImage: `url("${WT}")`
              }
            }), (0, cT.jsx)("img", {
              src: WT,
              alt: ""
            })]
          }) : (0, cT.jsx)("img", {
            className: kT()("DocsPixelIcon", iT),
            src: WT,
            alt: "",
            "aria-hidden": "true",
            style: zT
          })
        }
        const rT = 1500;

        function AT() {
          const [TT, oT] = (0, iT.useState)(null);
          (0, iT.useEffect)((() => {
            if (null === TT) return;
            const IT = setTimeout((() => {
              oT(null)
            }), rT);
            return () => {
              clearTimeout(IT)
            }
          }), [TT]);
          return [TT, TT => {
            (0, xT.d)(TT).then((() => {
              oT({
                text: TT,
                failed: !1
              })
            }), (IT => {
              console.error("Could not copy to the clipboard", IT), oT({
                text: TT,
                failed: !0
              })
            }))
          }]
        }

        function gT(TT) {
          let {
            text: oT,
            label: IT,
            className: iT
          } = TT;
          const [zT, WT] = AT(), XT = !1 === (null === zT || void 0 === zT ? void 0 : zT.failed);
          return (0, cT.jsxs)("button", {
            type: "button",
            className: kT()("DocsCopyButton", iT, {
              Copied: XT
            }),
            title: `Copy ${oT.length>40?"to clipboard":oT}`,
            "aria-label": IT ? void 0 : `Copy ${oT}`,
            onClick: TT => {
              TT.stopPropagation(), WT(oT)
            },
            children: [(0, cT.jsx)(MT, {
              name: XT ? "check" : "copy"
            }), IT && (0, cT.jsx)("span", {
              children: XT ? "Copied" : null !== zT && void 0 !== zT && zT.failed ? "Copy failed" : IT
            })]
          })
        }
        ST.b.registerLanguage("javascript", DT.b), ST.b.registerLanguage("typescript", LT.c);
        const hT = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          wT = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          mT = 24;

        function eT(TT) {
          let {
            code: oT,
            lang: IT,
            compact: zT = !1
          } = TT;
          const WT = (0, iT.useMemo)((() => function(TT, oT) {
              const IT = hT[oT];
              return IT ? ST.b.highlight(TT, {
                language: IT
              }).value : TT.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(oT, IT)), [oT, IT]),
            XT = oT.split("\n").length,
            BT = !zT && XT > mT + 6,
            [FT, DT] = (0, iT.useState)(!1),
            LT = hT[IT];
          return (0, cT.jsxs)("div", {
            className: kT()("DocsCodeBlock", {
              Compact: zT,
              Collapsed: BT && !FT
            }),
            children: [!zT && (0, cT.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, cT.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: LT ? wT[LT] : "Text"
              }), (0, cT.jsx)(gT, {
                text: oT,
                label: "Copy"
              })]
            }), (0, cT.jsx)("pre", {
              children: (0, cT.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: WT
                }
              })
            }), BT && (0, cT.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": FT,
              onClick: () => {
                DT(!FT)
              },
              children: [(0, cT.jsx)(MT, {
                name: FT ? "chevron-up" : "chevron-down"
              }), FT ? "Show less" : `Show all ${XT} lines`]
            })]
          })
        }
        var RT = IT(4229);
        var uT = IT(4231);
        const vT = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function ET(TT) {
          const oT = new Map;
          let IT, iT = [],
            zT = !1;
          const kT = () => {
            IT && oT.set(IT.name, IT.lines.join("\n").trimEnd())
          };
          for (const WT of TT.split("\n")) {
            const TT = WT.match(vT);
            zT || WT.startsWith("/*") ? (zT || (kT(), IT = void 0), iT.push(WT), zT = !WT.includes("*/")) : TT ? (kT(), IT = {
              name: TT[1],
              lines: [...iT, WT]
            }, iT = []) : IT && (WT.startsWith(" ") || WT.startsWith("\t") || /^[}\])|]/.test(WT)) ? IT.lines.push(WT) : IT && "" !== WT.trim() && (kT(), IT = void 0)
          }
          return kT(), oT
        }

        function fT(TT) {
          return "methods" === TT || "callbacks" === TT || "settings" === TT
        }
        const CT = {
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
              setterSnippet: (TT, oT) => `api.setClientOption(playerId, "${TT}", ${oT})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (TT, oT) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${TT}", ${oT})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (TT, oT) => `api.setMobSetting(mobId, "${TT}", ${oT})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (TT, oT) => `api.setVehicleSetting(vehicleId, "${TT}", ${oT})`
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
          jT = {
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

        function JT(TT) {
          return TT.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function UT(TT) {
          let oT = !1;
          return TT.split("\n").map((TT => (TT.startsWith("```") && (oT = !oT), !oT && /^#{3,} /.test(TT) ? TT.slice(1) : TT))).join("\n")
        }

        function aT(TT) {
          return "readme" === TT ? "getting-started" : JT(TT)
        }
        const YT = "## Glossary of Referenced Types";
        const QT = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...uT.d.flatMap((TT => {
            const oT = {
              id: TT.id,
              slug: aT(TT.id),
              title: TT.title,
              markdown: TT.content,
              ...CT[TT.id]
            };
            if ("readme" === TT.id) return function(TT) {
              const oT = TT.markdown.indexOf(YT),
                IT = TT.markdown.indexOf("\n```", oT),
                iT = TT.markdown.indexOf("\n```", IT + 1);
              if (-1 === oT || -1 === IT || -1 === iT) throw new Error(`Getting started has no "${YT}" section with a code block`);
              const zT = TT.markdown.slice(oT + 31, IT).trim(),
                kT = [...ET(TT.markdown.slice(TT.markdown.indexOf("\n", IT + 1) + 1, iT))].map((TT => {
                  let [oT, IT] = TT;
                  return `## ${oT}\n\n\`\`\`ts\n${IT}\n\`\`\`\n`
                })),
                WT = TT.markdown.slice(TT.markdown.indexOf("\n", iT + 1) + 1);
              return [{
                ...TT,
                markdown: `${TT.markdown.slice(0,oT)}${WT}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${zT}\n\n${kT.join("\n")}`
              }]
            }(oT);
            if ("howTo" === TT.id) {
              const {
                parent: TT,
                guides: IT
              } = function(TT) {
                const [oT, ...IT] = TT.markdown.split(/^(?=## )/m), iT = [oT], zT = [];
                for (const WT of IT) {
                  var kT;
                  const oT = WT.indexOf("\n"),
                    IT = WT.slice(3, oT).trim(),
                    XT = WT.slice(oT + 1);
                  if (!XT.includes("```")) {
                    iT.push(WT);
                    continue
                  }
                  const BT = null !== (kT = jT[IT]) && void 0 !== kT ? kT : {
                    icon: "lightbulb",
                    summary: `How to use ${IT.toLowerCase()} in World Code.`
                  };
                  zT.push({
                    id: `${TT.id}${IT.split(/[^A-Za-z0-9]+/).map((TT=>TT.charAt(0).toUpperCase()+TT.slice(1))).join("")}`,
                    slug: `${TT.slug}-${JT(IT)}`,
                    title: IT,
                    layout: "article",
                    sourceAnchor: (0, RT.r)(IT),
                    markdown: `# ${IT}\n\n${UT(XT)}`,
                    ...BT
                  })
                }
                return {
                  parent: {
                    ...TT,
                    markdown: iT.join(""),
                    childPageIds: zT.map((TT => TT.id))
                  },
                  guides: zT
                }
              }(oT);
              return [TT, ...IT]
            }
            return [oT]
          }))],
          OT = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...QT.filter((TT => void 0 !== TT.sourceAnchor)).map((TT => TT.id))]
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

        function HT(TT) {
          return QT.find((oT => oT.id === TT))
        }
        const nT = new Map;

        function qT(TT) {
          let oT = nT.get(TT.id);
          return oT || (oT = (0, RT.v)(TT.markdown, "changelog" === TT.layout ? 3 : 2), nT.set(TT.id, oT)), oT
        }

        function ZT(TT, oT) {
          return qT(TT).sections.some((TT => TT.heading.anchor === oT || TT.blocks.some((TT => "heading" === TT.kind && TT.anchor === oT))))
        }

        function lT(TT) {
          const [oT, ...IT] = TT.replace(/^#/, "").split("-"), iT = QT.find((TT => TT.id === oT));
          if (!iT) return null;
          const zT = IT.length > 0 ? (0, RT.r)(IT.join("-")) : "";
          for (const WT of null !== (kT = iT.childPageIds) && void 0 !== kT ? kT : []) {
            var kT;
            const TT = HT(WT);
            if (TT.sourceAnchor === zT) return {
              page: TT,
              anchor: ""
            };
            if (ZT(TT, zT)) return {
              page: TT,
              anchor: zT
            }
          }
          return {
            page: iT,
            anchor: zT
          }
        }
        const sT = {
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

        function tT(TT, oT) {
          let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const iT = oT.slug ? `${TT}/${oT.slug}` : TT;
          return IT ? `${iT}#${IT}` : iT
        }
        var GT = IT(4243);
        const pT = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          bT = new Set(["GameApi", "Console", "_TypeOf"]),
          yT = 4;

        function NT(TT) {
          let oT = TT.length;
          for (; oT > 0 && "" === TT[oT - 1].trim();) oT--;
          return TT.slice(0, oT)
        }

        function PT(TT) {
          var oT;
          const IT = NT(TT);
          if (null === (oT = IT.at(-1)) || void 0 === oT || !oT.trimEnd().endsWith("*/")) return {
            lines: IT,
            doc: ""
          };
          const iT = IT.findLastIndex((TT => TT.startsWith("/**")));
          return -1 === iT ? {
            lines: IT,
            doc: ""
          } : {
            lines: NT(IT.slice(0, iT)),
            doc: IT.slice(iT).join("\n")
          }
        }

        function dT(TT) {
          var oT;
          const IT = TT.split("\n"),
            iT = IT.flatMap(((TT, oT) => pT.test(TT) ? [oT] : []));
          let zT = PT(IT.slice(0, null !== (oT = iT[0]) && void 0 !== oT ? oT : IT.length)).doc;
          return iT.map(((TT, oT) => {
            var kT;
            const WT = PT(IT.slice(TT, null !== (kT = iT[oT + 1]) && void 0 !== kT ? kT : IT.length)),
              XT = {
                name: IT[TT].match(pT)[1],
                doc: zT,
                lines: WT.lines
              };
            return zT = WT.doc, XT
          }))
        }

        function VT(TT) {
          var oT;
          const IT = TT.match(/^readonly \[([\s\S]*)\]$/);
          return IT ? null !== (oT = IT[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== oT ? oT : [] : null
        }

        function To(TT) {
          if (!TT.startsWith("{") || !TT.endsWith("}")) return null;
          const oT = {
              keys: [],
              values: []
            },
            IT = TT => {
              const IT = TT.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              IT && (oT.keys.push(IT[1].startsWith('"') ? IT[1] : `"${IT[1]}"`), oT.values.push(IT[2].trim()))
            };
          let iT = 0,
            zT = "";
          for (const kT of TT.slice(1, -1)) "{[(".includes(kT) ? iT++ : "}])".includes(kT) && iT--, ";" === kT && 0 === iT ? (IT(zT), zT = "") : zT += kT;
          return IT(zT), oT
        }

        function oo(TT) {
          return TT.length > yT ? `\n\t| ${TT.join("\n\t| ")}` : TT.join(" | ")
        }

        function Io(TT, oT) {
          const IT = function(TT, oT) {
            return TT.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((TT, IT) => {
              var iT;
              const zT = null === (iT = oT.get(IT)) || void 0 === iT ? void 0 : iT.object;
              return zT ? oo(zT.values) : TT
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((TT, IT) => {
              var iT, zT;
              const kT = null === (iT = oT.get(IT)) || void 0 === iT || null === (zT = iT.object) || void 0 === zT ? void 0 : zT.values.map(VT);
              return null !== kT && void 0 !== kT && kT.every((TT => null !== TT)) ? oo([...new Set(kT.flat())]) : TT
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((TT, IT) => {
              var iT;
              const zT = null === (iT = oT.get(IT)) || void 0 === iT ? void 0 : iT.members;
              return zT ? oo(zT) : TT
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((TT, IT) => {
              var iT;
              const zT = null === (iT = oT.get(IT)) || void 0 === iT ? void 0 : iT.object;
              return zT ? oo(zT.keys) : TT
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((TT, IT) => {
              var iT, zT;
              return null !== (iT = null === (zT = oT.get(IT)) || void 0 === zT ? void 0 : zT.text) && void 0 !== iT ? iT : TT
            }))
          }(TT.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), oT);
          return [TT.doc, IT].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function io(TT) {
          const oT = dT(TT),
            IT = function(TT) {
              const oT = new Map,
                IT = TT.find((TT => "_TypeOf" === TT.name));
              let iT = null;
              const zT = () => {
                if (iT) {
                  const TT = iT.lines.join("\n");
                  oT.set(iT.name, {
                    text: TT,
                    members: VT(TT),
                    object: To(TT)
                  })
                }
              };
              for (const kT of IT.lines.slice(1, -1)) {
                const TT = kT.match(/^\t([\w$]+): (.+)$/);
                TT ? (zT(), iT = {
                  name: TT[1],
                  lines: [TT[2]]
                }) : iT && iT.lines.push(kT.replace(/^\t/, ""))
              }
              return zT(), oT
            }(oT),
            iT = new Map;
          for (const zT of oT) bT.has(zT.name) || iT.has(zT.name) || iT.set(zT.name, Io(zT, IT));
          return iT
        }
        let zo, ko, Wo;

        function Xo() {
          return ko ??= function(TT) {
            const oT = dT(TT).find((TT => "GameApi" === TT.name)),
              IT = new Map,
              iT = oT.lines;
            for (let kT = 0; kT < iT.length; kT++) {
              var zT;
              if (!iT[kT].trimStart().startsWith("/**")) continue;
              const TT = kT;
              for (; kT < iT.length && !iT[kT].includes("*/");) kT++;
              const oT = null === (zT = iT[kT + 1]) || void 0 === zT ? void 0 : zT.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!oT) continue;
              let WT = null;
              const XT = [];
              let BT = "description",
                FT = !1;
              for (const IT of iT.slice(TT, kT + 1).join("\n").split("\n").map((TT => TT.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const TT = IT.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                TT ? (WT = TT[1].trim(), BT = "deprecation") : IT.startsWith("@") ? (BT = "otherTag", FT = !0) : "" === IT.trim() ? FT || (BT = "description", XT.push(IT)) : "deprecation" !== BT || /^[A-Z]/.test(IT.trim()) ? "otherTag" !== BT && (BT = "description", XT.push(IT)) : WT = `${WT} ${IT.trim()}`.trim()
              }
              IT.set(oT[1], {
                deprecation: WT,
                description: XT.join("\n").trim()
              })
            }
            return IT
          }(GT.default), ko
        }

        function Bo() {
          if (!Wo) {
            Wo = new Map;
            for (const TT of QT) {
              const oT = (0, RT.s)(qT(TT)).flatMap((TT => TT.blocks));
              for (const TT of (0, RT.j)(oT))
                if ("ts" === TT.lang || "typescript" === TT.lang)
                  for (const [oT, IT] of ET(TT.code)) Wo.set(oT, IT)
            }
            for (const [TT, oT] of(zo ??= io(GT.default), zo)) Wo.has(TT) || Wo.set(TT, oT)
          }
          return Wo
        }
        const Fo = {
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
        let So;

        function Do() {
          if (!So) {
            So = new Map;
            for (const TT of QT)
              if (fT(TT.layout))
                for (const oT of qT(TT).sections) So.has(oT.heading.text) || So.set(oT.heading.text, {
                  pageId: TT.id,
                  anchor: oT.heading.anchor
                })
          }
          return So
        }

        function Lo(TT) {
          const oT = TT.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return oT ? Do().get(oT[1]) : void 0
        }
        const xo = (0, iT.createContext)("/docs"),
          co = (0, iT.createContext)(null),
          Ko = (0, iT.createContext)(!1),
          Mo = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function ro(TT) {
          const oT = TT.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return oT ? oT[1] : null
        }

        function Ao(TT) {
          let {
            colour: oT
          } = TT;
          return (0, cT.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: oT
            },
            "aria-hidden": "true"
          })
        }

        function go(TT) {
          const oT = [];
          let IT = 0;
          for (const iT of TT.matchAll(Mo)) oT.push(TT.slice(IT, iT.index), (0, cT.jsx)(Ao, {
            colour: iT[0]
          }), iT[0]), IT = iT.index + iT[0].length;
          return oT.push(TT.slice(IT)), oT
        }

        function ho(TT) {
          let {
            href: oT,
            children: IT
          } = TT;
          const zT = (0, iT.useContext)(xo);
          if (oT.startsWith("#")) {
            const TT = lT(oT);
            if (TT) return (0, cT.jsx)(WT.b, {
              to: tT(zT, TT.page, TT.anchor),
              children: (0, cT.jsx)(Ko.Provider, {
                value: !0,
                children: IT
              })
            })
          }
          return (0, cT.jsx)("a", {
            href: oT,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, cT.jsx)(Ko.Provider, {
              value: !0,
              children: IT
            })
          })
        }

        function wo(TT) {
          let {
            code: oT
          } = TT;
          const IT = (0, iT.useContext)(xo);
          if ((0, iT.useContext)(Ko)) return (0, cT.jsx)("code", {
            className: "DocsInlineCode",
            children: oT
          });
          if (Bo().has(oT)) return (0, cT.jsx)(uo, {
            type: oT
          });
          const zT = Lo(oT);
          if (zT) return (0, cT.jsx)(WT.b, {
            className: "DocsInlineCode DocsSymbolLink",
            to: tT(IT, HT(zT.pageId), zT.anchor),
            children: oT
          });
          const kT = ro(oT);
          return (0, cT.jsxs)("code", {
            className: "DocsInlineCode",
            children: [kT && (0, cT.jsx)(Ao, {
              colour: kT
            }), oT]
          })
        }

        function mo(TT) {
          let {
            text: oT
          } = TT;
          const IT = [];
          let zT = 0;
          for (const iT of oT.matchAll(RT.e)) {
            iT.index > zT && IT.push(...go(oT.slice(zT, iT.index)));
            const [, TT, kT, WT, XT, BT] = iT;
            TT ? IT.push((0, cT.jsx)(wo, {
              code: (0, RT.l)(TT, kT)
            })) : WT ? IT.push((0, cT.jsx)("strong", {
              children: (0, cT.jsx)(mo, {
                text: WT
              })
            })) : IT.push((0, cT.jsx)(ho, {
              href: BT,
              children: (0, cT.jsx)(mo, {
                text: XT
              })
            })), zT = iT.index + iT[0].length
          }
          return zT < oT.length && IT.push(...go(oT.slice(zT))), (0, cT.jsx)(cT.Fragment, {
            children: IT.map(((TT, oT) => (0, cT.jsx)(iT.Fragment, {
              children: TT
            }, oT)))
          })
        }
        const eo = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          Ro = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function uo(TT) {
          let {
            type: oT
          } = TT;
          const IT = Bo(),
            zT = [];
          for (const iT of oT.trim().matchAll(eo)) {
            const [TT, oT, kT, WT, XT] = iT;
            oT ? zT.push((0, cT.jsx)("span", {
              className: "DocsTypeString",
              children: TT
            })) : kT && IT.has(kT) ? zT.push((0, cT.jsx)(jo, {
              name: kT,
              definition: IT.get(kT)
            })) : kT ? zT.push((0, cT.jsx)("span", {
              className: Ro.has(kT) ? "DocsTypeKeyword" : "DocsTypeName",
              children: TT
            })) : WT ? zT.push((0, cT.jsx)("span", {
              className: "DocsTypeNumber",
              children: TT
            })) : XT ? zT.push(" ") : zT.push((0, cT.jsx)("span", {
              className: "DocsTypePunctuation",
              children: TT
            }))
          }
          return (0, cT.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: zT.map(((TT, oT) => (0, cT.jsx)(iT.Fragment, {
              children: TT
            }, oT)))
          })
        }
        const vo = 480,
          Eo = 6,
          fo = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Co = 0;

        function jo(TT) {
          let {
            name: oT,
            definition: IT
          } = TT;
          const zT = (0, iT.useContext)(xo),
            kT = Fo[oT],
            XT = (0, iT.useRef)(null),
            BT = (0, iT.useRef)(null),
            ST = (0, iT.useRef)(null),
            [DT, LT] = (0, iT.useState)(!1),
            [xT, KT] = (0, iT.useState)(null),
            rT = (0, iT.useRef)(),
            AT = (0, iT.useContext)(co),
            [gT] = (0, iT.useState)((() => "DocsTypePopover-" + Co++)),
            hT = () => {
              clearTimeout(rT.current), LT(!0)
            },
            wT = () => {
              clearTimeout(rT.current), rT.current = setTimeout((() => {
                LT(!1)
              }), 120)
            };
          return (0, iT.useEffect)((() => {
            if (!DT) return;
            const TT = TT => {
              if ("Escape" === TT.key) {
                var oT, IT;
                if (null !== (oT = BT.current) && void 0 !== oT && oT.contains(document.activeElement)) null === (IT = XT.current) || void 0 === IT || IT.focus();
                LT(!1)
              }
            };
            return document.addEventListener("keydown", TT), () => {
              document.removeEventListener("keydown", TT)
            }
          }), [DT]), (0, iT.useEffect)((() => () => {
            clearTimeout(rT.current)
          }), []), (0, iT.useLayoutEffect)((() => {
            if (!DT || !XT.current || !BT.current) return void KT(null);
            const TT = XT.current.getBoundingClientRect(),
              oT = BT.current.offsetHeight,
              IT = Math.min(vo, window.innerWidth - 32),
              iT = Math.min(Math.max(16, TT.left), window.innerWidth - IT - 16),
              zT = TT.bottom + Eo + oT < window.innerHeight;
            KT({
              left: iT,
              top: zT ? TT.bottom + Eo : Math.max(16, TT.top - Eo - oT)
            })
          }), [DT]), (0, cT.jsxs)(cT.Fragment, {
            children: [(0, cT.jsx)("button", {
              type: "button",
              ref: XT,
              className: "DocsTypeLink",
              "aria-expanded": DT,
              "aria-describedby": DT ? gT : void 0,
              onMouseEnter: hT,
              onMouseLeave: wT,
              onFocus: hT,
              onBlur: wT,
              onKeyDown: TT => {
                "Tab" === TT.key && !TT.shiftKey && ST.current && (TT.preventDefault(), ST.current.focus())
              },
              onClick: hT,
              children: oT
            }), DT && (0, FT.createPortal)((0, cT.jsxs)("span", {
              ref: BT,
              id: gT,
              className: "DocsTypePopover",
              role: "tooltip",
              style: xT ? {
                left: xT.left,
                top: xT.top,
                maxWidth: vo
              } : {
                visibility: "hidden"
              },
              onMouseEnter: hT,
              onMouseLeave: wT,
              onFocus: hT,
              onBlur: wT,
              children: [(0, cT.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, cT.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: oT
                }), kT && (0, cT.jsxs)(WT.b, {
                  ref: ST,
                  className: "DocsTypePopoverLink",
                  to: tT(zT, HT(kT)),
                  onClick: () => {
                    LT(!1)
                  },
                  onKeyDown: TT => {
                    if ("Tab" === TT.key) {
                      var oT;
                      if (TT.preventDefault(), TT.shiftKey || !XT.current || ! function(TT, oT) {
                          const IT = [...document.querySelectorAll(fo)],
                            iT = IT.slice(IT.indexOf(TT) + 1).find((TT => TT.getClientRects().length > 0 && !(null !== oT && void 0 !== oT && oT.contains(TT))));
                          return null === iT || void 0 === iT || iT.focus(), void 0 !== iT
                        }(XT.current, BT.current)) null === (oT = XT.current) || void 0 === oT || oT.focus();
                      TT.shiftKey || LT(!1)
                    }
                  },
                  children: [HT(kT).title, (0, cT.jsx)(MT, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, cT.jsx)(eT, {
                lang: "ts",
                code: IT,
                compact: !0
              })]
            }), null !== AT && void 0 !== AT ? AT : document.body)]
          })
        }
        var Jo = IT(193),
          Uo = IT(4251),
          ao = IT(4260),
          Yo = IT(4266);
        const Qo = {
          progressBar: {
            tI: 30,
            GI: .075,
            pI: 5,
            bI: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            yI: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            dI: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            VI: !0,
            scale: 3,
            rotation: 15,
            Ti: !1
          },
          gravityBar: {
            tI: 30,
            Ii: .25,
            ii: 3,
            zi: .8,
            gravity: 1,
            ki: 1.5,
            Wi: 8,
            Xi: 4,
            bI: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            Fi: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            Di: 5,
            Li: 1200,
            xi: .15,
            Ki: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var Oo = IT(306),
          Ho = IT(1803);

        function no(TT) {
          return TT.startsWith("fa-")
        }
        const qo = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          Zo = {
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

        function so(TT) {
          return "string" === typeof TT ? "text" : "entityName" in TT || "translationKey" in TT ? "other" : (0, Oo.xb)(TT) ? "progressBar" : (0, Oo.wb)(TT) ? "keyBinding" : "icon" in TT ? "icon" : "str" in TT && "string" === typeof TT.str ? "text" : "other"
        }
        const to = [{
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
          Go = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...to],
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
                options: Ho.h
              },
              isRequired: !0
            }, ...to],
            other: []
          };

        function po(TT) {
          return "string" === typeof TT ? {
            str: TT
          } : TT
        }

        function bo(TT, oT) {
          let IT = po(TT);
          for (const iT of oT) IT = IT && "object" === typeof IT ? IT[iT] : void 0;
          return IT
        }

        function yo(TT, oT, IT) {
          const iT = (TT, zT) => {
            var kT;
            const WT = oT[zT],
              XT = {
                ...TT
              };
            if (zT === oT.length - 1) return void 0 === IT ? delete XT[WT] : XT[WT] = IT, XT;
            const BT = iT(null !== (kT = TT[WT]) && void 0 !== kT ? kT : {}, zT + 1);
            return 0 === Object.keys(BT).length ? delete XT[WT] : XT[WT] = BT, XT
          };
          return function(TT) {
            const oT = Object.keys(TT);
            return "string" === typeof TT.str && 1 === oT.length ? TT.str : TT
          }(iT(po(TT), 0))
        }

        function No(TT, oT) {
          const IT = so(TT),
            iT = Go[IT].find((TT => TT.path.join(".") === oT.join("."))),
            zT = null !== iT && void 0 !== iT && iT.isRequired && "other" !== IT ? bo(Zo[IT], oT) : void 0;
          return yo(TT, oT, zT)
        }

        function Po(TT) {
          switch (so(TT)) {
            case "text":
              return String(bo(TT, ["str"]));
            case "icon":
              return String(bo(TT, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(bo(TT,["progress"])))}%`;
            case "keyBinding":
              return String(bo(TT, ["action"]));
            case "other":
              return JSON.stringify(TT)
          }
        }
        const Vo = /^[A-Za-z_$][\w$]*$/;

        function TI(TT) {
          if (Array.isArray(TT)) return `[${TT.map(TI).join(", ")}]`;
          if (TT && "object" === typeof TT) {
            const oT = Object.entries(TT).map((TT => {
              let [oT, IT] = TT;
              return `${Vo.test(oT)?oT:JSON.stringify(oT)}: ${TI(IT)}`
            }));
            return 0 === oT.length ? "{}" : `{ ${oT.join(", ")} }`
          }
          return JSON.stringify(TT)
        }

        function oI(TT) {
          const oT = TT.map(TI),
            IT = `[${oT.join(", ")}]`;
          return IT.length <= 60 ? IT : `[\n${oT.map((TT=>`    ${TT},`)).join("\n")}\n]`
        }
        const II = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function iI(TT) {
          let oT = "";
          for (let zT = 0; zT < TT.length; zT++) {
            const kT = TT[zT];
            if ("\\" === kT) {
              var IT;
              const iT = null !== (IT = TT[zT + 1]) && void 0 !== IT ? IT : "";
              oT += "'" === iT ? "'" : kT + iT, zT++
            } else if ('"' === kT) oT += '\\"';
            else {
              var iT;
              oT += null !== (iT = II[kT]) && void 0 !== iT ? iT : kT
            }
          }
          return `"${oT}"`
        }

        function zI(TT) {
          if ("string" === typeof TT) return !0;
          if (!TT || "object" !== typeof TT || Array.isArray(TT)) return !1;
          const oT = TT;
          return "ProgressBar" === oT.type ? "number" === typeof oT.progress : "StyledKeyBinding" === oT.type ? Ho.h.includes(oT.action) : "string" === typeof oT.icon || "string" === typeof oT.str || "string" === typeof oT.entityName || "string" === typeof oT.translationKey
        }

        function kI(TT) {
          let oT;
          try {
            oT = function(TT) {
              let oT = "",
                IT = "",
                iT = 0;
              const zT = () => {
                oT += IT.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), IT = ""
              };
              for (; iT < TT.length;) {
                const kT = TT.slice(iT).search(/["'`]|\/\//);
                if (-1 === kT) {
                  IT += TT.slice(iT);
                  break
                }
                IT += TT.slice(iT, iT + kT);
                const WT = iT + kT,
                  XT = TT[WT];
                if ("/" === XT) {
                  const oT = TT.indexOf("\n", WT);
                  iT = -1 === oT ? TT.length : oT;
                  continue
                }
                if (zT(), "`" === XT) throw new Error("Use quotes rather than template strings.");
                let BT = WT + 1;
                for (; BT < TT.length && TT[BT] !== XT;) BT += "\\" === TT[BT] ? 2 : 1;
                if (BT >= TT.length) throw new Error("A string is missing its closing quote.");
                const FT = TT.slice(WT + 1, BT);
                oT += iI(FT), iT = BT + 1
              }
              return zT(), JSON.parse(oT)
            }(TT.trim())
          } catch (iT) {
            return {
              parts: null,
              error: iT instanceof SyntaxError ? "This isn't a valid array yet." : iT.message
            }
          }
          if (!Array.isArray(oT)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const IT = oT.findIndex((TT => !zI(TT)));
          return -1 !== IT ? {
            parts: null,
            error: `Part ${IT+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: oT,
            error: null
          }
        }
        const WI = 1 / Jo.c.clientTicksPerSecond,
          XI = 700,
          BI = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          FI = {
            progressBar: Qo.progressBar.yI,
            timedClick: Qo.timedClick.icon,
            gravityBar: Qo.gravityBar.icon,
            precisionBar: Qo.precisionBar.icon,
            rhythmClick: Qo.rhythmClick.icon
          };

        function SI(TT) {
          let {
            type: oT
          } = TT;
          const [IT, zT] = (0, iT.useState)("ready"), [WT, XT] = (0, iT.useState)(1), [BT, FT] = (0, iT.useState)(!0), ST = (0, iT.useRef)(null), DT = (0, iT.useRef)(null), LT = (0, iT.useRef)(null), xT = (0, iT.useRef)(new Set), KT = (0, iT.useRef)(!1), rT = FI[oT], AT = (0, iT.useMemo)((() => ({
            getState: () => {
              var TT, oT;
              return null !== (TT = null === (oT = LT.current) || void 0 === oT ? void 0 : oT.getState()) && void 0 !== TT ? TT : BI
            },
            onFrame: TT => (xT.current.add(TT), () => {
              xT.current.delete(TT)
            })
          })), []);
          (0, iT.useEffect)((() => {
            const TT = ST.current,
              oT = DT.current;
            if (!TT || !oT) return;
            const IT = new ResizeObserver((() => {
              XT(TT.clientWidth / Math.max(1, oT.offsetWidth))
            }));
            return IT.observe(TT), () => {
              IT.disconnect()
            }
          }), []), (0, iT.useEffect)((() => {
            var TT;
            if ("playing" !== IT) return;
            let iT = !1;
            const kT = new Yo.f[oT](Qo[oT], (TT => {
              iT = !0, FT(!1), zT(TT ? "succeeded" : "failed")
            }), (() => {}));
            LT.current = kT;
            let WT = 0,
              XT = performance.now(),
              BT = requestAnimationFrame((function TT(oT) {
                for (WT += Math.min(.25, (oT - XT) / 1e3), XT = oT; WT >= WI && !iT;) WT -= WI, kT.handleTick(WI);
                for (const IT of xT.current) IT();
                iT || (BT = requestAnimationFrame(TT))
              }));
            return null === (TT = ST.current) || void 0 === TT || TT.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(BT), kT.tearDown(), LT.current = null, KT.current = !1
            }
          }), [IT, oT]), (0, iT.useEffect)((() => {
            if (BT) return;
            const TT = setTimeout((() => {
              FT(!0)
            }), XI);
            return () => {
              clearTimeout(TT)
            }
          }), [BT]);
          const gT = TT => {
            var oT;
            "playing" === IT && KT.current !== TT && (KT.current = TT, null === (oT = LT.current) || void 0 === oT || oT.handleMouseInput(TT))
          };
          return (0, cT.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, cT.jsxs)("div", {
              ref: ST,
              className: kT()("DocsQteStage", {
                Playing: "playing" === IT
              }),
              tabIndex: "playing" === IT ? 0 : -1,
              role: "playing" === IT ? "button" : void 0,
              "aria-label": "playing" === IT ? `${oT} quick time event: click or press Space` : void 0,
              onPointerDown: TT => {
                0 === TT.button && gT(!0)
              },
              onPointerUp: () => {
                gT(!1)
              },
              onPointerLeave: () => {
                gT(!1)
              },
              onPointerCancel: () => {
                gT(!1)
              },
              onKeyDown: TT => {
                "playing" !== IT || " " !== TT.key && "Enter" !== TT.key || (TT.preventDefault(), gT(!0))
              },
              onKeyUp: TT => {
                "playing" !== IT || " " !== TT.key && "Enter" !== TT.key || gT(!1)
              },
              children: [(0, cT.jsx)("div", {
                ref: DT,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${WT})`
                },
                children: "playing" === IT && (0, cT.jsx)(ao.e.Provider, {
                  value: AT,
                  children: (0, cT.jsx)(Uo.d, {
                    qte: {
                      type: oT,
                      parameters: Qo[oT]
                    }
                  })
                })
              }), "playing" !== IT && (0, cT.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== IT && (0, cT.jsxs)("div", {
                  className: kT()("DocsQteResult", "succeeded" === IT ? "Succeeded" : "Failed"),
                  children: [(0, cT.jsx)(MT, {
                    name: "succeeded" === IT ? "check" : "cross",
                    isTinted: !0
                  }), (0, cT.jsx)("span", {
                    children: "succeeded" === IT ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, cT.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !BT,
                  onClick: () => {
                    zT("playing")
                  },
                  children: [(0, cT.jsx)(MT, {
                    name: "ready" === IT ? "play" : "replay"
                  }), (0, cT.jsx)("span", {
                    children: "ready" === IT ? `Try ${oT}` : "Play again"
                  })]
                })]
              })]
            }), rT && !no(rT) && (0, cT.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, cT.jsx)("code", {
                children: rT
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function DI(TT) {
          let {
            level: oT,
            text: IT,
            anchor: iT,
            className: zT
          } = TT;
          const WT = `h${Math.min(oT,6)}`;
          return (0, cT.jsxs)(WT, {
                id: iT,
                className: kT()("DocsHeading", zT),
                children: [(0, cT.jsx)(mo, {
                      text: IT
                    }), (0, cT.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${iT}`,
                        "aria-label": `Link to ${IT.replace(/`/g,"")}`,children:"#"})]})}function LI(TT){let{items:oT,ordered:IT}=TT;const iT=IT?"ol":"ul";return(0,cT.jsx)(iT,{className:"DocsList",children:oT.map(((TT,oT)=>(0,cT.jsxs)("li",{children:[(0,cT.jsx)(mo,{text:TT.text}),TT.children.length>0&&(0,cT.jsx)(LI,{items:TT.children,ordered:IT})]},oT)))})}function xI(TT){const oT=TT[0],IT="paragraph"===(null===oT||void 0===oT?void 0:oT.kind)?oT.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(IT)?"warning":/^\*\*(tip|prefer)/.test(IT)?"tip":"note"}function cI(TT){let{block:oT}=TT;switch(oT.kind){case"heading":return(0,cT.jsx)(DI,{level:oT.level,text:oT.text,anchor:oT.anchor});case"paragraph":return(0,cT.jsx)("p",{children:(0,cT.jsx)(mo,{text:oT.text})});case"code":{const TT="ts"===oT.lang?function(TT){const oT=TT.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return oT&&Object.hasOwn(Qo,oT[1])?oT[1]:null}(oT.code):null;return(0,cT.jsxs)(cT.Fragment,{children:[(0,cT.jsx)(eT,{code:oT.code,lang:oT.lang}),TT&&(0,cT.jsx)(SI,{type:TT})]})}case"table":return(0,cT.jsx)("div",{className:"DocsTableScroll",children:(0,cT.jsxs)("table",{className:"DocsTable",children:[(0,cT.jsx)("thead",{children:(0,cT.jsx)("tr",{children:oT.header.map(((TT,oT)=>(0,cT.jsx)("th",{children:(0,cT.jsx)(mo,{text:TT})},oT)))})}),(0,cT.jsx)("tbody",{children:oT.rows.map(((TT,oT)=>(0,cT.jsx)("tr",{children:TT.map(((TT,oT)=>(0,cT.jsx)("td",{children:(0,cT.jsx)(mo,{text:TT})},oT)))},oT)))})]})});case"list":return(0,cT.jsx)(LI,{items:oT.items,ordered:oT.ordered});case"quote":return(0,cT.jsx)("aside",{className:kT()("DocsCallout",xI(oT.blocks)),children:(0,cT.jsx)(KI,{blocks:oT.blocks})});case"rule":return(0,cT.jsx)("hr",{className:"DocsRule"})}}function KI(TT){let{blocks:oT}=TT;return(0,cT.jsx)(cT.Fragment,{children:oT.map(((TT,oT)=>(0,cT.jsx)(cI,{block:TT},oT)))})}var MI=IT(4235),rI=IT(4238);function AI(TT){return"blocks"===TT||"items"===TT}const gI=new Map;function hI(TT){let oT=gI.get(TT);return oT||(oT=function(TT){const oT={entries:[],legend:[],notes:[],examples:[]};let IT=!1;for(const kT of TT.split(/\r?\n/).slice(1)){if(kT.startsWith("#")){const TT=kT.replace(/^# ?/,""),iT=TT.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);iT?oT.legend.push({code:iT[1],meaning:iT[2],usage:iT[3].trim()}):/^Examples:/.test(TT.trim())?IT=!0:IT&&TT.trim()?oT.examples.push(TT.trim()):TT.trim()&&!/^\s/.test(TT)&&oT.notes.push(TT.trim());continue}const TT=kT.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var iT,zT;TT&&oT.entries.push({name:TT[1],variants:null!==(iT=null===(zT=TT[2])||void 0===zT?void 0:zT.split(","))&&void 0!==iT?iT:[]})}return oT}("blocks"===TT?MI:rI),gI.set(TT,oT)),oT}function wI(TT){let{className:oT,value:IT,placeholder:iT,label:zT,onChange:kT,count:WT,children:XT}=TT;return(0,cT.jsxs)("div",{className:oT,children:[(0,cT.jsx)(MT,{name:"magnifying-glass"}),(0,cT.jsx)("input",{type:"search",value:IT,placeholder:iT,"aria-label":zT,onChange:TT=>{kT(TT.target.value)}}),XT,WT&&(0,cT.jsxs)("span",{className:"DocsFilterCount",children:[WT.visible," of ",WT.total]})]})}var mI=IT(1055);function eI(TT){const oT=TT.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return oT?oT[2]:null}function RI(TT){return"paragraph"===TT.kind&&""===TT.text.trim()}function uI(TT){const oT={name:TT.heading.text,description:[],params:[],returns:null};let IT="description";for(const zT of TT.blocks)if(!RI(zT))if("heading"===zT.kind&&/^Parameters:?$/.test(zT.text))IT="params";else if("heading"===zT.kind&&/^Returns:?$/.test(zT.text))IT="returns",oT.returns={type:"",description:[]};else if("params"!==IT||"table"!==zT.kind){if("returns"===IT&&"paragraph"===zT.kind&&""===oT.returns.type){const TT=eI(zT.text);if(null!==TT){oT.returns.type=TT.replaceAll("\\|","|");continue}}"returns"===IT?oT.returns.description.push(zT):oT.description.push(zT)}else for(const[TT,IT,kT]of zT.rows){var iT;oT.params.push({name:TT,type:null!==(iT=eI(IT))&&void 0!==iT?iT:IT,description:null!==kT&&void 0!==kT?kT:""})}return oT}const vI=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function EI(TT){return TT.filter((TT=>!RI(TT)))}const fI=/^[\w][\w .'&!:()-]*$/,CI=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function jI(TT){var oT;if("code"===TT.kind&&"text"===TT.lang){const oT=TT.code.split("\n").map((TT=>TT.trim())).filter(Boolean);return oT.length>0&&oT.every((TT=>fI.test(TT)))?oT.map((TT=>({name:TT}))):null}return"paragraph"===TT.kind&&CI.test(TT.text.trim())?[...TT.text.matchAll(/`([ ^ `]+)` / g)].flatMap((TT => TT[1].split(/,\s*/).map((TT => ({
                              name: TT.trim()
                            }))))): "table" === TT.kind && null !== (oT = TT.header[0]) && void 0 !== oT && oT.startsWith("Song") ? TT.rows.map((TT => {
                              let [oT, IT] = TT;
                              return {
                                name: oT.replace(/`/g, ""),
                                caption: IT
                              }
                            })) : null
                          }

                          function JI(TT) {
                            const oT = [];
                            for (const IT of TT) {
                              const TT = jI(IT),
                                iT = oT.at(-1),
                                zT = "table" === IT.kind;
                              TT ? "names" === (null === iT || void 0 === iT ? void 0 : iT.kind) && iT.isSongs === zT ? iT.names.push(...TT) : oT.push({
                                kind: "names",
                                names: TT,
                                isSongs: zT
                              }) : oT.push({
                                kind: "block",
                                block: IT
                              })
                            }
                            return oT
                          }
                          const UI = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function aI(TT, oT) {
                            return `${UI[TT]}-${(0,RT.r)(oT)}`
                          }
                          const YI = new WeakMap;

                          function QI(TT, oT, IT) {
                            let iT = YI.get(oT);
                            if (!iT) {
                              iT = new Map;
                              const IT = new Set;
                              for (const zT of (0, RT.s)(oT)) {
                                const oT = JI(EI(zT.blocks)).map((oT => {
                                  if ("block" === oT.kind) return oT;
                                  return {
                                    kind: "names",
                                    names: oT.names.map((oT => {
                                      var iT, kT;
                                      const WT = aI(TT, oT.name);
                                      let XT = WT;
                                      for (let TT = 2; IT.has(XT); TT++) XT = `${WT}-${TT}`;
                                      return IT.add(XT), {
                                        ...oT,
                                        anchor: XT,
                                        heading: null !== (iT = null === (kT = zT.heading) || void 0 === kT ? void 0 : kT.text) && void 0 !== iT ? iT : ""
                                      }
                                    })),
                                    isSongs: oT.isSongs
                                  }
                                }));
                                iT.set(zT.blocks, oT)
                              }
                              YI.set(oT, iT)
                            }
                            const zT = iT.get(IT);
                            if (!zT) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return zT
                          }
                          const OI = "/textures/docs/skinPreviews",
                            HI = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var nI = IT(3795),
                            qI = IT(3811);

                          function ZI(TT) {
                            return Object.hasOwn(nI.i, TT) ? nI.i[TT] : null
                          }
                          const lI = {
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
                            blendMode: qI.h.Standard
                          };

                          function sI(TT, oT, IT) {
                            return oT + (IT - oT) * TT()
                          }

                          function tI(TT, oT, IT) {
                            return TT + (oT - TT) * IT
                          }

                          function GI(TT) {
                            return TT.length > 0 && "timeFraction" in TT[0]
                          }

                          function pI(TT, oT) {
                            if (0 === TT.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!GI(TT.colorGradients)) {
                              const IT = TT.colorGradients,
                                {
                                  color: iT
                                } = IT[Math.floor(oT() * IT.length) % IT.length];
                              return [{
                                at: 0,
                                colour: [iT[0] / 255, iT[1] / 255, iT[2] / 255, 1]
                              }]
                            }
                            return [...TT.colorGradients].sort(((TT, oT) => TT.timeFraction - oT.timeFraction)).map((TT => {
                              var IT, iT, zT;
                              const kT = TT.minColor,
                                WT = null !== (IT = TT.maxColor) && void 0 !== IT ? IT : kT,
                                XT = oT(),
                                BT = [tI(kT[0], WT[0], XT) / 255, tI(kT[1], WT[1], XT) / 255, tI(kT[2], WT[2], XT) / 255, tI(null !== (iT = kT[3]) && void 0 !== iT ? iT : 1, null !== (zT = WT[3]) && void 0 !== zT ? zT : 1, XT)];
                              return {
                                at: TT.timeFraction,
                                colour: BT
                              }
                            }))
                          }

                          function bI(TT, oT, IT, iT) {
                            const zT = sI(iT, TT.minEmitPower, TT.maxEmitPower),
                              kT = oT => sI(iT, Math.min(TT.dir1[oT], TT.dir2[oT]), Math.max(TT.dir1[oT], TT.dir2[oT])) * zT,
                              WT = [...TT.velocityGradients].sort(((TT, oT) => TT.timeFraction - oT.timeFraction)).map((TT => ({
                                at: TT.timeFraction,
                                factor: sI(iT, TT.factor, TT.factor2)
                              })));
                            return {
                              pos: [sI(iT, oT[0], IT[0]), sI(iT, oT[1], IT[1]), sI(iT, oT[2], IT[2])],
                              dir: [kT(0), kT(1), kT(2)],
                              age: 0,
                              life: sI(iT, TT.minLifeTime, TT.maxLifeTime),
                              size: sI(iT, TT.minSize, TT.maxSize),
                              colours: pI(TT, iT),
                              velocityFactors: WT
                            }
                          }

                          function yI(TT, oT, IT, iT) {
                            if (oT < TT[0].at) return IT(Math.min(1, TT.length - 1));
                            for (let zT = 0; zT < TT.length - 1; zT++)
                              if (oT <= TT[zT + 1].at) {
                                const kT = TT[zT + 1].at - TT[zT].at;
                                return iT(IT(zT), IT(zT + 1), kT > 0 ? (oT - TT[zT].at) / kT : 1)
                              } return IT(TT.length - 1)
                          }

                          function NI(TT) {
                            return yI(TT.colours, TT.age / TT.life, (oT => TT.colours[oT].colour), ((TT, oT, IT) => [tI(TT[0], oT[0], IT), tI(TT[1], oT[1], IT), tI(TT[2], oT[2], IT), tI(TT[3], oT[3], IT)]))
                          }

                          function PI(TT, oT, IT) {
                            if (TT.age += IT, TT.age >= TT.life) return !1;
                            const iT = function(TT) {
                              return 0 === TT.velocityFactors.length ? 1 : yI(TT.velocityFactors, TT.age / TT.life, (oT => TT.velocityFactors[oT].factor), tI)
                            }(TT) * IT;
                            for (let kT = 0; kT < 3; kT++) {
                              var zT;
                              TT.pos[kT] += TT.dir[kT] * iT, TT.dir[kT] += (null !== (zT = oT[kT]) && void 0 !== zT ? zT : 0) * IT
                            }
                            return !0
                          }

                          function dI(TT) {
                            return String(Math.round(1e6 * TT) / 1e6)
                          }

                          function VI(TT) {
                            return `[${TT.map(dI).join(", ")}]`
                          }

                          function Ti(TT, oT) {
                            const IT = `${oT}    `;
                            return `[\n${(GI(TT)?TT.map((TT=>{const oT=[`${IT}    timeFraction: ${dI(TT.timeFraction)},`,`${IT}    minColor: ${VI(TT.minColor)},`];return TT.maxColor&&oT.push(`${IT}    maxColor: ${VI(TT.maxColor)},`),`${IT}{\n${oT.join("\n")}\n${IT}},`})):TT.map((TT=>`
                            $ {
                              IT
                            } {
                              color: $ {
                                VI(TT.color)
                              }
                            }, `))).join("\n")}\n${oT}]`
                          }
                          const oi = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            Ii = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const ii = .6;

                          function zi(TT, oT) {
                            return `${oT?"song":"sound"}:${TT}`
                          }
                          let ki = {
                              track: null,
                              volume: ii
                            },
                            Wi = null,
                            Xi = 0,
                            Bi = 0;
                          const Fi = new Set;

                          function Si(TT) {
                            ki = {
                              ...ki,
                              ...TT
                            }, Fi.forEach((TT => {
                              TT()
                            }))
                          }

                          function Di(TT) {
                            ki.track && Si({
                              track: {
                                ...ki.track,
                                ...TT
                              }
                            })
                          }

                          function Li(TT) {
                            const [oT, IT] = (0, iT.useState)((() => TT(ki))), zT = (0, iT.useRef)(TT);
                            return zT.current = TT, (0, iT.useEffect)((() => {
                              const TT = () => {
                                IT((() => zT.current(ki)))
                              };
                              return Fi.add(TT), TT(), () => {
                                Fi.delete(TT)
                              }
                            }), []), oT
                          }

                          function xi() {
                            Xi++;
                            const TT = Wi;
                            Wi = null, null === TT || void 0 === TT || TT.stop()
                          }

                          function ci(TT, oT) {
                            let iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            xi();
                            const zT = Xi,
                              {
                                track: kT
                              } = ki,
                              WT = kT && kT.name === TT && kT.isSong === oT ? kT.duration : 0;
                            Bi = iT, Si({
                              track: {
                                name: TT,
                                isSong: oT,
                                status: "loading",
                                duration: WT
                              }
                            }), Promise.all([IT.e(210), IT.e(238)]).then((() => IT(38577))).then((IT => {
                              let {
                                playDocsSound: kT
                              } = IT;
                              zT === Xi && (Wi = kT(TT, oT, ki.volume, iT, {
                                onPlay: TT => {
                                  zT === Xi && Di({
                                    status: "playing",
                                    duration: TT
                                  })
                                },
                                onEnd: TT => {
                                  var oT, IT;
                                  zT === Xi && (Wi = null, TT ? Si({
                                    track: null
                                  }) : (Bi = null !== (oT = null === (IT = ki.track) || void 0 === IT ? void 0 : IT.duration) && void 0 !== oT ? oT : 0, Di({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((oT => {
                              console.error(`Could not play docs sound ${TT}`, oT), zT === Xi && Si({
                                track: null
                              })
                            }))
                          }

                          function Ki() {
                            const {
                              track: TT
                            } = ki;
                            if (!TT) return;
                            if ("playing" === TT.status && Wi) return Bi = Wi.Wm(), Wi.pause(), void Di({
                              status: "paused"
                            });
                            if ("loading" === TT.status) return xi(), void Di({
                              status: "paused"
                            });
                            if (Wi) return void Wi.resume();
                            const oT = TT.duration > 0 && Bi >= TT.duration - .05;
                            ci(TT.name, TT.isSong, oT ? 0 : Bi)
                          }

                          function Mi() {
                            var TT;
                            return Wi && "playing" === (null === (TT = ki.track) || void 0 === TT ? void 0 : TT.status) ? Wi.Wm() : Bi
                          }

                          function ri(TT) {
                            var oT;
                            null === (oT = Wi) || void 0 === oT || oT.setVolume(TT), Si({
                              volume: TT
                            })
                          }

                          function Ai() {
                            xi(), Bi = 0, Si({
                              track: null
                            })
                          }
                          const gi = (0, iT.createContext)(null);
                          let wi = null;

                          function mi() {
                            const [TT, oT] = (0, iT.useState)(null);
                            return (0, iT.useEffect)((() => {
                              let TT = !1;
                              return wi ??= Promise.all([IT.e(69), IT.e(72), IT.e(71), IT.e(70), IT.e(194), IT.e(97), IT.e(216)]).then((() => IT(38572))), wi.then((IT => {
                                TT || oT(IT)
                              }), (TT => {
                                console.error("Could not load the docs gallery's textures", TT), wi = null
                              })), () => {
                                TT = !0
                              }
                            }), []), TT
                          }
                          const ei = 24,
                            Ri = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function ui(TT, oT) {
                            const IT = "skins" === TT ? function(TT, oT) {
                              const IT = HI.find((oT => TT.startsWith(oT.heading)));
                              return IT ? function(TT, oT) {
                                return `${TT}-${oT}`
                              }(IT.prefix, oT) : null
                            }(oT.heading, oT.name) : null;
                            return null === IT ? null : `${OI}/${IT}.webp`
                          }

                          function vi(TT) {
                            let {
                              kind: oT,
                              entry: IT,
                              assets: zT,
                              renderedUrl: WT
                            } = TT;
                            const {
                              name: XT
                            } = IT, [BT, FT] = (0, iT.useState)(!1);
                            if ("icons" === oT && no(XT)) return (0, cT.jsx)(mI.e, {
                              className: "DocsTileIcon",
                              name: XT
                            });
                            let ST = null;
                            var DT;
                            if ("icons" === oT) ST = null !== (DT = null === zT || void 0 === zT ? void 0 : zT.getIngameIconUrl(XT)) && void 0 !== DT ? DT : null;
                            else if ("particles" === oT) {
                              var LT, xT, KT;
                              ST = null !== (LT = null === zT || void 0 === zT ? void 0 : zT.getParticleTextureUrl(null !== (xT = null === (KT = ZI(XT)) || void 0 === KT ? void 0 : KT.texture) && void 0 !== xT ? xT : XT)) && void 0 !== LT ? LT : null
                            } else "skins" === oT && (ST = null !== WT && void 0 !== WT ? WT : Ri.test(XT) ? `/textures/charSkins/previews/${XT}_preview.png` : null);
                            return !ST || BT ? (0, cT.jsx)(MT, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === oT ? "person" : "image"
                            }) : (0, cT.jsx)("img", {
                              className: kT()("DocsTileImage", {
                                Pixelated: "skins" !== oT
                              }),
                              src: ST,
                              srcSet: ST === WT ? `${ST} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${ST}`), FT(!0)
                              }
                            })
                          }

                          function Ei(TT) {
                            let {
                              entry: oT,
                              isSong: IT
                            } = TT;
                            const iT = Li((TT => {
                                let {
                                  track: iT
                                } = TT;
                                return (null === iT || void 0 === iT ? void 0 : iT.name) === oT.name && iT.isSong === IT ? iT.status : null
                              })),
                              zT = null !== iT && "paused" !== iT;
                            return (0, cT.jsxs)("button", {
                              type: "button",
                              id: oT.anchor,
                              className: kT()("DocsSoundTile", {
                                Playing: zT
                              }),
                              "data-docs-track": zi(oT.name, IT),
                              "aria-label": zT ? `Pause ${oT.name}` : `Play ${oT.name}`,
                              onClick: () => {
                                null !== iT ? Ki() : ci(oT.name, IT)
                              },
                              children: [(0, cT.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, cT.jsx)(MT, {
                                  name: zT ? "pause" : "play"
                                })
                              }), (0, cT.jsx)("code", {
                                className: "DocsSoundName",
                                children: oT.name
                              }), oT.caption && (0, cT.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: oT.caption
                              })]
                            })
                          }

                          function fi(TT) {
                            let {
                              kind: oT,
                              names: IT,
                              isSongs: zT
                            } = TT;
                            const WT = mi(),
                              [XT, BT] = AT(),
                              FT = !1 === (null === XT || void 0 === XT ? void 0 : XT.failed) ? XT.text : null,
                              ST = (0, iT.useContext)(gi),
                              [DT, LT] = (0, iT.useState)(""),
                              xT = DT.trim().toLowerCase(),
                              KT = xT ? IT.filter((TT => TT.name.toLowerCase().includes(xT))) : IT;
                            return (0, cT.jsxs)("div", {
                              className: "DocsGallery",
                              children: [IT.length > ei && (0, cT.jsx)(wI, {
                                className: "DocsGalleryFilter",
                                value: DT,
                                placeholder: `Filter ${IT.length} names\u2026`,
                                label: "Filter names",
                                onChange: LT,
                                count: xT ? {
                                  visible: KT.length,
                                  total: IT.length
                                } : null
                              }), (0, cT.jsx)("div", {
                                className: kT()("DocsGalleryGrid", `Kind-${oT}`, {
                                  Songs: zT
                                }),
                                children: KT.map((TT => {
                                  if ("sounds" === oT) return (0, cT.jsx)(Ei, {
                                    entry: TT,
                                    isSong: zT
                                  }, TT.anchor);
                                  if (ST && "particles" === oT && ZI(TT.name)) return (0, cT.jsxs)("button", {
                                    type: "button",
                                    id: TT.anchor,
                                    className: kT()("DocsTile Previewable", {
                                      Copied: FT === TT.name
                                    }),
                                    title: `Play "${TT.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      ST(TT.name), BT(TT.name)
                                    },
                                    children: [(0, cT.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, cT.jsx)(vi, {
                                        kind: oT,
                                        entry: TT,
                                        assets: WT,
                                        renderedUrl: null
                                      }), (0, cT.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, cT.jsx)(MT, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, cT.jsx)("span", {
                                      className: "DocsTileName",
                                      children: FT === TT.name ? "Copied!" : TT.name
                                    })]
                                  }, TT.anchor);
                                  const IT = ui(oT, TT);
                                  return (0, cT.jsxs)("button", {
                                    type: "button",
                                    id: TT.anchor,
                                    className: kT()("DocsTile", {
                                      Copied: FT === TT.name
                                    }),
                                    title: `Copy "${TT.name}"`,
                                    onClick: () => {
                                      BT(TT.name)
                                    },
                                    children: [(0, cT.jsx)("span", {
                                      className: kT()("DocsTilePreview", {
                                        Rendered: null !== IT
                                      }),
                                      children: (0, cT.jsx)(vi, {
                                        kind: oT,
                                        entry: TT,
                                        assets: WT,
                                        renderedUrl: IT
                                      })
                                    }), (0, cT.jsx)("span", {
                                      className: "DocsTileName",
                                      children: FT === TT.name ? "Copied!" : TT.name
                                    })]
                                  }, TT.anchor)
                                }))
                              })]
                            })
                          }

                          function Ci(TT) {
                            let {
                              kind: oT,
                              content: IT,
                              blocks: iT
                            } = TT;
                            return (0, cT.jsx)(cT.Fragment, {
                              children: QI(oT, IT, iT).map(((TT, IT) => "block" === TT.kind ? (0, cT.jsx)(cI, {
                                block: TT.block
                              }, IT) : (0, cT.jsx)(fi, {
                                kind: oT,
                                names: TT.names,
                                isSongs: TT.isSongs
                              }, IT)))
                            })
                          }
                          const ji = [{
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

                          function Ji(TT) {
                            let {
                              cards: oT = ji,
                              label: IT = "Start here"
                            } = TT;
                            const zT = (0, iT.useContext)(xo);
                            return (0, cT.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": IT,
                              children: oT.map((TT => {
                                let {
                                  pageId: oT,
                                  countNoun: IT
                                } = TT;
                                const iT = HT(oT);
                                return (0, cT.jsxs)(WT.b, {
                                  to: tT(zT, iT),
                                  className: "DocsLandingCard",
                                  children: [(0, cT.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, cT.jsx)(MT, {
                                      name: iT.icon
                                    })
                                  }), (0, cT.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: iT.title
                                  }), (0, cT.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: iT.summary
                                  }), IT && (0, cT.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [qT(iT).sections.length, " ", IT]
                                  })]
                                }, oT)
                              }))
                            })
                          }
                          const Ui = 240;

                          function ai(TT) {
                            let {
                              faces: oT
                            } = TT;
                            return (0, cT.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, cT.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${oT.top}")`
                                }
                              }), (0, cT.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${oT.left}")`
                                }
                              }), (0, cT.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${oT.right}")`
                                }
                              })]
                            })
                          }

                          function Yi(TT) {
                            let {
                              src: oT
                            } = TT;
                            const [IT, zT] = (0, iT.useState)(!1);
                            return IT ? null : (0, cT.jsx)("img", {
                              src: oT,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${oT}`), zT(!0)
                              }
                            })
                          }

                          function Qi(TT) {
                            let {
                              kind: oT
                            } = TT;
                            const IT = hI(oT),
                              zT = mi(),
                              WT = (0, XT.t)(),
                              [BT, FT] = (0, iT.useState)(""),
                              [ST, DT] = (0, iT.useState)(null),
                              [LT, xT] = (0, iT.useState)(Ui),
                              [KT, rT] = (0, iT.useState)(null),
                              AT = (0, iT.useRef)(null),
                              hT = BT.trim().toLowerCase();
                            (0, iT.useEffect)((() => {
                              const TT = (0, RT.p)(WT.hash),
                                iT = IT.entries.find((IT => aI(oT, IT.name) === TT));
                              if (iT) AT.current = iT.name, FT(iT.name), DT(null), rT(iT.name);
                              else if (null !== AT.current) {
                                const TT = AT.current;
                                AT.current = null, FT((oT => oT === TT ? "" : oT)), rT(null)
                              }
                            }), [IT, oT, WT.hash, WT.key]), (0, iT.useEffect)((() => {
                              var TT;
                              null !== KT && (null === (TT = document.getElementById(aI(oT, KT))) || void 0 === TT || TT.scrollIntoView({
                                block: "center"
                              }))
                            }), [oT, KT]);
                            const wT = IT.entries.filter((TT => (!hT || TT.name.toLowerCase().includes(hT)) && (!ST || TT.variants.includes(ST))));
                            return (0, cT.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [IT.notes.length > 0 && (0, cT.jsx)("div", {
                                className: "DocsProse",
                                children: IT.notes.map((TT => (0, cT.jsx)("p", {
                                  children: TT
                                }, TT)))
                              }), IT.legend.length > 0 && (0, cT.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, cT.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, cT.jsx)("thead", {
                                    children: (0, cT.jsxs)("tr", {
                                      children: [(0, cT.jsx)("th", {
                                        children: "Code"
                                      }), (0, cT.jsx)("th", {
                                        children: "Variant"
                                      }), (0, cT.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, cT.jsx)("tbody", {
                                    children: IT.legend.map((TT => (0, cT.jsxs)("tr", {
                                      children: [(0, cT.jsx)("td", {
                                        children: (0, cT.jsx)("button", {
                                          type: "button",
                                          className: kT()("DocsVariantChip", {
                                            Active: ST === TT.code
                                          }),
                                          "aria-pressed": ST === TT.code,
                                          title: `Show only ${oT} with ${TT.meaning} variants`,
                                          onClick: () => {
                                            DT(ST === TT.code ? null : TT.code)
                                          },
                                          children: TT.code
                                        })
                                      }), (0, cT.jsx)("td", {
                                        children: TT.meaning
                                      }), (0, cT.jsx)("td", {
                                        children: (0, cT.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: TT.usage
                                        })
                                      })]
                                    }, TT.code)))
                                  })]
                                })
                              }), IT.examples.length > 0 && (0, cT.jsx)(eT, {
                                lang: "text",
                                code: IT.examples.join("\n")
                              }), (0, cT.jsx)(wI, {
                                className: "DocsFilterBar",
                                value: BT,
                                placeholder: `Search ${IT.entries.length} ${oT}\u2026`,
                                label: `Search ${oT}`,
                                onChange: TT => {
                                  FT(TT), xT(Ui)
                                },
                                count: hT || ST ? {
                                  visible: wT.length,
                                  total: IT.entries.length
                                } : null,
                                children: ST && (0, cT.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    DT(null)
                                  },
                                  children: [ST, " ", (0, cT.jsx)(MT, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, cT.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: wT.slice(0, LT).map((TT => {
                                  const IT = "blocks" === oT ? null === zT || void 0 === zT ? void 0 : zT.getBlockFaces(TT.name) : null,
                                    iT = zT && !IT ? zT.getItemTextureUrl(TT.name) : null;
                                  return (0, cT.jsxs)("div", {
                                    id: aI(oT, TT.name),
                                    className: kT()("DocsCatalogueTile", {
                                      Linked: TT.name === KT
                                    }),
                                    children: [(0, cT.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [IT && (0, cT.jsx)(ai, {
                                        faces: IT
                                      }), iT && (0, cT.jsx)(Yi, {
                                        src: iT
                                      })]
                                    }), (0, cT.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: TT.name
                                    }), TT.variants.length > 0 && (0, cT.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: TT.variants.map((TT => (0, cT.jsx)("span", {
                                        children: TT
                                      }, TT)))
                                    }), (0, cT.jsx)(gT, {
                                      text: TT.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, TT.name)
                                }))
                              }), wT.length > LT && (0, cT.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  xT(wT.length)
                                },
                                children: ["Show all ", wT.length]
                              }), 0 === wT.length && (0, cT.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", oT, " match."]
                              })]
                            })
                          }
                          var Oi = IT(4304),
                            Hi = IT(1531);
                          const ni = .95 * Oi.c;

                          function qi(TT) {
                            return /^\s*```/.test(TT)
                          }

                          function Zi(TT, oT) {
                            const IT = [
                              []
                            ];
                            let iT = !1;
                            for (const zT of TT.split("\n")) !iT && oT(zT) && IT.at(-1).length > 0 && IT.push([]), qi(zT) && (iT = !iT), IT.at(-1).push(zT);
                            return IT.map((TT => TT.join("\n").trim())).filter(Boolean)
                          }

                          function li(TT, oT) {
                            const IT = `${"#".repeat(oT)} `,
                              iT = [];
                            let zT = !1;
                            for (const kT of TT.split("\n")) qi(kT) ? zT = !zT : !zT && kT.startsWith(IT) && iT.push(kT.slice(IT.length).trim());
                            return iT
                          }

                          function si(TT) {
                            return TT.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class ti {
                            constructor(TT, oT) {
                              this.origin = oT, this.pages = void 0, this.partPaths = new Map;
                              const IT = TT.map((TT => {
                                const oT = oT => this.resolveLinks(TT, oT).length,
                                  IT = function(TT, oT) {
                                    const IT = TT.map((TT => oT(TT.markdown) + 2)),
                                      iT = IT.reduce(((TT, oT) => TT + oT), 0),
                                      zT = iT / Math.ceil(iT / ni),
                                      kT = [];
                                    let WT = 0;
                                    return TT.forEach(((TT, oT) => {
                                      const iT = IT[oT];
                                      (0 === kT.length || WT + iT > ni || WT + iT / 2 > zT) && (kT.push([]), WT = 0), kT.at(-1).push(TT), WT += iT
                                    })), kT
                                  }(function(TT, oT) {
                                    return Zi(TT, (TT => TT.startsWith("## "))).flatMap((TT => {
                                      var IT;
                                      const iT = null !== (IT = li(TT, 2)[0]) && void 0 !== IT ? IT : "";
                                      if (oT(TT) <= ni) return [{
                                        markdown: TT,
                                        section: iT
                                      }];
                                      let zT = !1,
                                        kT = "";
                                      return Zi(TT, (TT => {
                                        const oT = zT && "" !== TT.trim();
                                        return zT = "" === TT.trim(), oT
                                      })).map((TT => {
                                        var oT;
                                        const IT = li(TT, 3),
                                          zT = TT.startsWith("### ") ? IT[0] : kT;
                                        return kT = null !== (oT = IT.at(-1)) && void 0 !== oT ? oT : kT, {
                                          markdown: TT,
                                          section: iT || zT
                                        }
                                      }))
                                    }))
                                  }(si(TT), oT), oT);
                                return {
                                  page: TT,
                                  groups: IT.length > 1 ? IT : []
                                }
                              }));
                              for (const {
                                  page: iT,
                                  groups: zT
                                }
                                of IT) zT.forEach(((TT, oT) => {
                                const IT = (0, Oi.w)(iT.slug, oT);
                                for (const zT of TT.flatMap((TT => [...li(TT.markdown, 2), ...li(TT.markdown, 3)]))) {
                                  const TT = `${iT.id}#${(0,RT.r)(zT)}`;
                                  this.partPaths.has(TT) || this.partPaths.set(TT, IT)
                                }
                              }));
                              this.pages = IT.map((TT => {
                                let {
                                  page: oT,
                                  groups: IT
                                } = TT;
                                return {
                                  page: oT,
                                  path: (0, Oi.t)(oT.slug),
                                  markdown: `# ${oT.title}\n\n${this.resolveLinks(oT,si(oT))}\n`,
                                  parts: IT.map(((TT, iT) => this.renderPart(oT, TT, iT, IT.length)))
                                }
                              }))
                            }
                            url(TT) {
                              return `${this.origin}${TT}`
                            }
                            getPage(TT) {
                              return this.pages.find((oT => oT.page.id === TT))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((TT => (TT.parts.length > 0 ? TT.parts : [{
                                path: TT.path,
                                label: "",
                                markdown: TT.markdown
                              }]).filter((TT => TT.markdown.length > Oi.c))))
                            }
                            markdownUrl(TT, oT) {
                              const IT = oT && this.partPaths.get(`${TT.id}#${oT}`) || (0, Oi.t)(TT.slug);
                              return this.url(oT ? `${IT}#${oT}` : IT)
                            }
                            resolveLinks(TT, oT) {
                              return oT.replace(/\]\((#[^)]+)\)/g, ((oT, IT) => {
                                var iT;
                                const zT = null !== (iT = lT(IT)) && void 0 !== iT ? iT : this.samePageTarget(TT, IT);
                                return zT ? `](${this.markdownUrl(zT.page,zT.anchor)})` : oT
                              }))
                            }
                            samePageTarget(TT, oT) {
                              const IT = (0, RT.r)(oT.slice(1));
                              return ZT(TT, IT) ? {
                                page: TT,
                                anchor: IT
                              } : null
                            }
                            renderPart(TT, oT, IT, iT) {
                              const zT = function(TT) {
                                  const oT = TT.map((TT => TT.section)).filter(Boolean);
                                  if (0 === oT.length) return "";
                                  const IT = oT[0],
                                    iT = oT.at(-1);
                                  return IT === iT ? IT : `${IT} to ${iT}`
                                }(oT),
                                kT = oT.map((TT => TT.markdown)).join("\n\n"),
                                WT = zT ? `It covers ${zT}. ` : "",
                                XT = `Part ${IT+1} of ${iT} of [${TT.title}](${this.url((0,Oi.t)(TT.slug))}). ${WT}[llms.txt](${this.url(Oi.j)}) lists every part.`;
                              return {
                                path: (0, Oi.w)(TT.slug, IT),
                                label: zT,
                                markdown: `# ${TT.title}, part ${IT+1} of ${iT}\n\n${XT}\n\n${this.resolveLinks(TT,kT)}\n`
                              }
                            }
                            llmsTxt(TT) {
                              const oT = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${Gi(Oi.c)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const IT of OT) {
                                oT.push("", `## ${IT.title}`, "");
                                for (const TT of IT.pageIds) {
                                  const IT = this.getPage(TT),
                                    {
                                      page: iT,
                                      parts: zT
                                    } = IT,
                                    kT = `About ${Gi(IT.markdown.length)} tokens${zT.length>0?`, in ${zT.length} parts:`:"."}`;
                                  oT.push(`- [${iT.title}](${this.url(IT.path)}): ${iT.summary} ${kT}`), zT.forEach(((TT, IT) => {
                                    oT.push(`  - [Part ${IT+1}${TT.label?`: ${TT.label}`:""}](${this.url(TT.path)})`)
                                  }))
                                }
                              }
                              return oT.push("", "## Optional", "", `- [Every page in one file](${this.url(Oi.f)}): About ${Gi(TT.length)} tokens, for a model with a large context window.`, ""), oT.join("\n")
                            }
                            llmsFullTxt() {
                              return OT.flatMap((TT => TT.pageIds.map((TT => this.getPage(TT).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const TT = this.llmsFullTxt(),
                                oT = this.llmsTxt(TT),
                                IT = new Map([
                                  [Oi.o, oT],
                                  [Oi.j, oT],
                                  [Oi.f, TT]
                                ]);
                              for (const iT of this.pages) {
                                IT.set(iT.path, iT.markdown);
                                for (const TT of iT.parts) IT.set(TT.path, TT.markdown)
                              }
                              return IT
                            }
                          }

                          function Gi(TT) {
                            return `${Math.max(1,Math.round(TT/4e3))}K`
                          }
                          let bi = null;

                          function yi() {
                            return bi ??= new ti(QT, Hi.d), bi
                          }
                          const Ni = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function Pi(TT) {
                            return yi().getPage(TT.id).parts.length > 0 ? `Read ${Oi.n}, then the parts of the Bloxd Code API's ${TT.title} page it lists, so I can ask questions about it.` : `Read ${Hi.d}${(0,Oi.t)(TT.slug)} so I can ask questions about it. ${Oi.n} lists every page of the Bloxd Code API docs.`
                          }

                          function di(TT) {
                            let {
                              page: oT
                            } = TT;
                            const [IT, iT] = AT();
                            return (0, cT.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, cT.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  iT(yi().getPage(oT.id).markdown)
                                },
                                children: [(0, cT.jsx)(MT, {
                                  name: !1 === (null === IT || void 0 === IT ? void 0 : IT.failed) ? "check" : "copy"
                                }), (0, cT.jsx)("span", {
                                  children: IT ? IT.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), Ni.map((TT => (0, cT.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${TT.url}${encodeURIComponent(Pi(oT))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, cT.jsx)(MT, {
                                  name: "external-link"
                                }), (0, cT.jsxs)("span", {
                                  children: ["Open in ", TT.name]
                                })]
                              }, TT.name)))]
                            })
                          }

                          function Vi(TT) {
                            return `#${[0,1,2].map((oT=>Math.round(Math.min(255,Math.max(0,TT[oT]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function Tz(TT) {
                            return [parseInt(TT.slice(1, 3), 16), parseInt(TT.slice(3, 5), 16), parseInt(TT.slice(5, 7), 16)]
                          }

                          function oz(TT) {
                            let {
                              label: oT,
                              min: IT,
                              max: iT,
                              step: zT,
                              low: kT,
                              high: WT,
                              onChange: XT
                            } = TT;
                            return (0, cT.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, cT.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, cT.jsx)("span", {
                                  children: oT
                                }), (0, cT.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: kT === WT ? kT : `${kT}\u2013${WT}`
                                })]
                              }), (0, cT.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, cT.jsx)("input", {
                                  type: "range",
                                  min: IT,
                                  max: iT,
                                  step: zT,
                                  value: Math.min(iT, kT),
                                  "aria-label": `Minimum ${oT.toLowerCase()}`,
                                  onChange: TT => {
                                    const oT = Number(TT.target.value);
                                    XT(oT, Math.max(oT, WT))
                                  }
                                }), (0, cT.jsx)("input", {
                                  type: "range",
                                  min: IT,
                                  max: iT,
                                  step: zT,
                                  value: Math.min(iT, WT),
                                  "aria-label": `Maximum ${oT.toLowerCase()}`,
                                  onChange: TT => {
                                    const oT = Number(TT.target.value);
                                    XT(Math.min(oT, kT), oT)
                                  }
                                })]
                              })]
                            })
                          }

                          function Iz(TT) {
                            let {
                              label: oT,
                              min: IT,
                              max: iT,
                              step: zT,
                              value: kT,
                              onChange: WT,
                              format: XT = String
                            } = TT;
                            return (0, cT.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, cT.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, cT.jsx)("span", {
                                  children: oT
                                }), (0, cT.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: XT(kT)
                                })]
                              }), (0, cT.jsx)("input", {
                                type: "range",
                                min: IT,
                                max: iT,
                                step: zT,
                                value: Math.min(iT, Math.max(IT, kT)),
                                "aria-label": oT,
                                onChange: TT => {
                                  WT(Number(TT.target.value))
                                }
                              })]
                            })
                          }

                          function iz(TT) {
                            let {
                              opts: oT,
                              onChange: IT
                            } = TT;
                            const iT = oT.colorGradients;
                            if (!GI(iT)) return (0, cT.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, cT.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, cT.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, cT.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: iT.map(((TT, oT) => (0, cT.jsx)("input", {
                                  type: "color",
                                  value: Vi(TT.color),
                                  "aria-label": `Colour ${oT+1}`,
                                  onChange: TT => {
                                    const zT = [...iT];
                                    zT[oT] = {
                                      color: Tz(TT.target.value)
                                    }, IT(zT)
                                  }
                                }, oT)))
                              })]
                            });
                            const zT = (TT, oT) => {
                              const zT = [...iT];
                              zT[TT] = oT, IT(zT)
                            };
                            return (0, cT.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, cT.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, cT.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, cT.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), iT.map(((TT, oT) => {
                                var IT;
                                const iT = null !== (IT = TT.maxColor) && void 0 !== IT ? IT : TT.minColor;
                                return (0, cT.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, cT.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * TT.timeFraction), "%"]
                                  }), (0, cT.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${Vi(TT.minColor)}, ${Vi(iT)})`
                                    }
                                  }), (0, cT.jsx)("input", {
                                    type: "color",
                                    value: Vi(TT.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*TT.timeFraction)}%`,
                                    onChange: IT => {
                                      zT(oT, {
                                        ...TT,
                                        minColor: [...Tz(IT.target.value), TT.minColor[3]]
                                      })
                                    }
                                  }), (0, cT.jsx)("input", {
                                    type: "color",
                                    value: Vi(iT),
                                    "aria-label": `Maximum colour at ${Math.round(100*TT.timeFraction)}%`,
                                    onChange: IT => {
                                      zT(oT, {
                                        ...TT,
                                        maxColor: [...Tz(IT.target.value), iT[3]]
                                      })
                                    }
                                  })]
                                }, oT)
                              }))]
                            })
                          }
                          const zz = [-.5, -.5, -.5],
                            kz = [.5, .5, .5],
                            Wz = [0, 1, 2, 3, 4, 5, 6, 7].map((TT => [1 & TT ? kz[0] : zz[0], 2 & TT ? kz[1] : zz[1], 4 & TT ? kz[2] : zz[2]]));class Xz {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(TT, oT, IT, iT) {
                              const zT = Math.round(31 * oT),
                                kT = Math.round(31 * IT),
                                WT = Math.round(31 * iT),
                                XT = `${zT}|${kT}|${WT}`;
                              let BT = this.tints.get(TT);
                              (!BT || BT.size > 2e3) && (BT = new Map, this.tints.set(TT, BT));
                              let FT = BT.get(XT);
                              if (FT) return FT;
                              FT = document.createElement("canvas"), FT.width = TT.naturalWidth || 16, FT.height = TT.naturalHeight || 16;
                              const ST = FT.getContext("2d");
                              return ST ? (ST.imageSmoothingEnabled = !1, ST.drawImage(TT, 0, 0, FT.width, FT.height), ST.globalCompositeOperation = "multiply", ST.fillStyle = `rgb(${zT/31*255}, ${kT/31*255}, ${WT/31*255})`, ST.fillRect(0, 0, FT.width, FT.height), ST.globalCompositeOperation = "destination-in", ST.drawImage(TT, 0, 0, FT.width, FT.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), BT.set(XT, FT), FT
                            }
                          }

                          function Bz(TT) {
                            let {
                              opts: oT,
                              textureUrl: IT,
                              burst: zT,
                              paused: kT
                            } = TT;
                            const WT = (0, iT.useRef)(null),
                              XT = (0, iT.useRef)(oT);
                            XT.current = oT;
                            const BT = (0, iT.useRef)(kT);
                            BT.current = kT;
                            const FT = (0, iT.useRef)(null),
                              ST = (0, iT.useRef)(null),
                              DT = (0, iT.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(TT) {
                                let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const IT = [-.5, -.5, -.5],
                                  iT = [.5, .5, .5];
                                let zT = .5;
                                for (let kT = 0; kT < 40; kT++) {
                                  const kT = bI(TT, IT, iT, oT),
                                    WT = Math.max(kT.life / 30, .001);
                                  for (; PI(kT, TT.gravity, WT);) zT = Math.max(zT, Math.hypot(kT.pos[0], kT.pos[1], kT.pos[2]) + kT.size / 2)
                                }
                                return zT
                              }(oT)))), [oT]),
                              LT = (0, iT.useRef)(DT);
                            return LT.current = DT, (0, iT.useEffect)((() => {
                              if (FT.current = null, !IT) return;
                              const TT = new Image;
                              let oT = !1;
                              return TT.onload = () => {
                                oT || (FT.current = TT)
                              }, TT.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${IT}`)
                              }, TT.src = IT, () => {
                                oT = !0
                              }
                            }), [IT]), (0, iT.useEffect)((() => {
                              var TT;
                              null === (TT = ST.current) || void 0 === TT || TT.call(ST)
                            }), [oT, zT]), (0, iT.useEffect)((() => {
                              const TT = WT.current,
                                oT = null === TT || void 0 === TT ? void 0 : TT.getContext("2d");
                              if (!TT || !oT) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const IT = new Xz;
                              let iT = [],
                                zT = 0,
                                kT = -.7,
                                DT = LT.current,
                                xT = performance.now(),
                                cT = 0,
                                KT = !0,
                                MT = null;
                              const rT = () => {
                                const TT = XT.current,
                                  oT = Math.min(400, Math.max(0, Math.ceil(TT.manualEmitCount)));
                                iT = [];
                                for (let IT = 0; IT < oT; IT++) iT.push(bI(TT, zz, kz, Math.random));
                                zT = 0
                              };
                              ST.current = rT, rT();
                              const AT = WT => {
                                cT = requestAnimationFrame(AT);
                                const ST = Math.min(.05, (WT - xT) / 1e3);
                                if (xT = WT, !KT) return;
                                const gT = window.devicePixelRatio || 1,
                                  hT = Math.round(TT.clientWidth * gT),
                                  wT = Math.round(TT.clientHeight * gT);
                                if (0 === hT || 0 === wT) return;
                                TT.width === hT && TT.height === wT || (TT.width = hT, TT.height = wT);
                                const mT = XT.current;
                                null === MT && (kT += .18 * ST), DT += (LT.current - DT) * Math.min(1, 4 * ST);
                                const eT = .6 * ST;
                                iT = iT.filter((TT => PI(TT, mT.gravity, eT))), 0 !== iT.length || BT.current || (zT += ST, zT > .6 && rT());
                                const RT = function(TT, oT, IT, iT) {
                                  const zT = 3.2 * iT,
                                    kT = .44 * Math.min(TT, oT) * zT / iT,
                                    WT = Math.cos(IT),
                                    XT = Math.sin(IT),
                                    BT = Math.cos(.42),
                                    FT = Math.sin(.42);
                                  return (IT, iT, ST) => {
                                    const DT = IT * XT + ST * WT,
                                      LT = zT - (iT * FT + DT * BT);
                                    if (LT < .05) return null;
                                    const xT = kT / LT;
                                    return {
                                      x: TT / 2 + (IT * WT - ST * XT) * xT,
                                      y: oT / 2 - (iT * BT - DT * FT) * xT,
                                      scale: xT,
                                      depth: LT
                                    }
                                  }
                                }(hT, wT, kT, DT);
                                ! function(TT, oT, IT, iT, zT) {
                                  const kT = TT.createLinearGradient(0, 0, 0, IT);
                                  kT.addColorStop(0, "#23262d"), kT.addColorStop(1, "#16181c"), TT.globalCompositeOperation = "source-over", TT.globalAlpha = 1, TT.fillStyle = kT, TT.fillRect(0, 0, oT, IT);
                                  const WT = (oT, IT) => {
                                      const zT = iT(oT[0], oT[1], oT[2]),
                                        kT = iT(IT[0], IT[1], IT[2]);
                                      zT && kT && (TT.beginPath(), TT.moveTo(zT.x, zT.y), TT.lineTo(kT.x, kT.y), TT.stroke())
                                    },
                                    XT = Math.ceil(zT) + 1,
                                    BT = zz[1];
                                  TT.lineWidth = 1, TT.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let FT = -XT; FT <= XT; FT++) WT([FT + .5, BT, .5 - XT], [FT + .5, BT, XT + .5]), WT([.5 - XT, BT, FT + .5], [XT + .5, BT, FT + .5]);
                                  TT.strokeStyle = "rgba(255, 255, 255, 0.28)", TT.setLineDash([4, 4]);
                                  for (const FT of Wz)
                                    for (const TT of Wz) {
                                      const oT = [0, 1, 2].filter((oT => FT[oT] !== TT[oT]));
                                      1 === oT.length && FT[oT[0]] < TT[oT[0]] && WT(FT, TT)
                                    }
                                  TT.setLineDash([])
                                }(oT, hT, wT, RT, DT);
                                const uT = FT.current,
                                  vT = iT.map((TT => ({
                                    particle: TT,
                                    at: RT(TT.pos[0], TT.pos[1], TT.pos[2])
                                  }))).filter((TT => null !== TT.at)).sort(((TT, oT) => oT.at.depth - TT.at.depth));
                                oT.imageSmoothingEnabled = !1;
                                for (const TT of function(TT) {
                                    switch (TT) {
                                      case qI.h.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case qI.h.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case qI.h.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case qI.h.MultiplyAdd:
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
                                  }(mT.blendMode)) {
                                  oT.globalCompositeOperation = TT.operation;
                                  for (const {
                                      particle: iT,
                                      at: zT
                                    }
                                    of vT) {
                                    const [kT, WT, XT, BT] = NI(iT), FT = Math.max(1, iT.size * zT.scale);
                                    oT.globalAlpha = TT.usesAlpha ? Math.min(1, Math.max(0, BT)) : 1, uT ? oT.drawImage(IT.get(uT, kT, WT, XT), zT.x - FT / 2, zT.y - FT / 2, FT, FT) : (oT.fillStyle = `rgb(${255*kT}, ${255*WT}, ${255*XT})`, oT.fillRect(zT.x - FT / 2, zT.y - FT / 2, FT, FT))
                                  }
                                }
                                oT.globalCompositeOperation = "source-over", oT.globalAlpha = 1
                              };
                              cT = requestAnimationFrame(AT);
                              const gT = new IntersectionObserver((TT => {
                                let [oT] = TT;
                                KT = oT.isIntersecting
                              }));
                              gT.observe(TT);
                              const hT = oT => {
                                  MT = oT.clientX, TT.setPointerCapture(oT.pointerId)
                                },
                                wT = TT => {
                                  null !== MT && (kT += .01 * (TT.clientX - MT), MT = TT.clientX)
                                },
                                mT = () => {
                                  MT = null
                                };
                              return TT.addEventListener("pointerdown", hT), TT.addEventListener("pointermove", wT), TT.addEventListener("pointerup", mT), TT.addEventListener("pointercancel", mT), () => {
                                cancelAnimationFrame(cT), gT.disconnect(), ST.current = null, TT.removeEventListener("pointerdown", hT), TT.removeEventListener("pointermove", wT), TT.removeEventListener("pointerup", mT), TT.removeEventListener("pointercancel", mT)
                              }
                            }), []), (0, cT.jsx)("canvas", {
                              ref: WT,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${oT.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const Fz = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            Sz = [{
                              mode: qI.h.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: qI.h.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: qI.h.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: qI.h.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: qI.h.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            Dz = (0, iT.forwardRef)((function(TT, oT) {
                              var IT, zT;
                              let {
                                textures: WT
                              } = TT;
                              const XT = mi(),
                                BT = (0, iT.useRef)(null),
                                [FT, ST] = (0, iT.useState)(lI),
                                [DT, LT] = (0, iT.useState)("example"),
                                [xT, KT] = (0, iT.useState)(0),
                                [rT, AT] = (0, iT.useState)(!1),
                                hT = TT => {
                                  const oT = "example" === TT ? lI : ZI(TT);
                                  oT && (ST(oT), LT(TT))
                                };
                              (0, iT.useImperativeHandle)(oT, (() => ({
                                preview: TT => {
                                  var oT;
                                  hT(TT), null === (oT = BT.current) || void 0 === oT || oT.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const wT = TT => {
                                  ST({
                                    ...FT,
                                    ...TT
                                  }), LT(null)
                                },
                                mT = function(TT, oT) {
                                  if (null !== oT) return `${oi}    presetId: "${oT}",\n${Ii}\n})`;
                                  const IT = TT.velocityGradients.map((TT => `        {\n            timeFraction: ${dI(TT.timeFraction)},\n            factor: ${dI(TT.factor)},\n            factor2: ${dI(TT.factor2)},\n        },`)),
                                    iT = [`    dir1: ${VI(TT.dir1)},`, `    dir2: ${VI(TT.dir2)},`, Ii, `    texture: "${TT.texture}",`, `    minLifeTime: ${dI(TT.minLifeTime)},`, `    maxLifeTime: ${dI(TT.maxLifeTime)},`, `    minEmitPower: ${dI(TT.minEmitPower)},`, `    maxEmitPower: ${dI(TT.maxEmitPower)},`, `    minSize: ${dI(TT.minSize)},`, `    maxSize: ${dI(TT.maxSize)},`, `    manualEmitCount: ${dI(TT.manualEmitCount)},`, `    gravity: ${VI(TT.gravity)},`, `    colorGradients: ${Ti(TT.colorGradients,"    ")},`, `    velocityGradients: ${IT.length>0?`[\n${IT.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${dI(TT.blendMode)},`];
                                  return void 0 !== TT.hideDist && iT.push(`    hideDist: ${dI(TT.hideDist)},`), `${oi}${iT.join("\n")}\n})`
                                }(FT, null === DT || "example" === DT ? null : DT),
                                RT = WT.includes(FT.texture) ? WT : [...WT, FT.texture];
                              return (0, cT.jsxs)("section", {
                                ref: BT,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, cT.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, cT.jsxs)("div", {
                                    children: [(0, cT.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, cT.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, cT.jsx)(gT, {
                                    text: mT,
                                    label: "Copy code"
                                  })]
                                }), (0, cT.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, cT.jsx)("button", {
                                    type: "button",
                                    className: kT()("DocsVariantChip", {
                                      Active: "example" === DT
                                    }),
                                    onClick: () => {
                                      hT("example")
                                    },
                                    children: "Example"
                                  }), Fz.filter((TT => null !== ZI(TT))).map((TT => (0, cT.jsx)("button", {
                                    type: "button",
                                    className: kT()("DocsVariantChip", {
                                      Active: DT === TT
                                    }),
                                    onClick: () => {
                                      hT(TT)
                                    },
                                    children: TT
                                  }, TT))), (0, cT.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== DT && void 0 !== DT ? DT : "custom",
                                    "aria-label": "Preset",
                                    onChange: TT => {
                                      hT(TT.target.value)
                                    },
                                    children: [(0, cT.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === DT && (0, cT.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), nI.e.map((TT => (0, cT.jsx)("option", {
                                      value: TT,
                                      children: TT
                                    }, TT)))]
                                  })]
                                }), (0, cT.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, cT.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, cT.jsx)(Bz, {
                                      opts: FT,
                                      textureUrl: null !== (IT = null === XT || void 0 === XT ? void 0 : XT.getParticleTextureUrl(FT.texture)) && void 0 !== IT ? IT : null,
                                      burst: xT,
                                      paused: rT
                                    }), (0, cT.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, cT.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          KT(xT + 1)
                                        },
                                        children: [(0, cT.jsx)(MT, {
                                          name: "replay"
                                        }), (0, cT.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, cT.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": rT,
                                        onClick: () => {
                                          AT(!rT)
                                        },
                                        children: [(0, cT.jsx)(MT, {
                                          name: rT ? "play" : "pause"
                                        }), (0, cT.jsx)("span", {
                                          children: rT ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, cT.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, cT.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, cT.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, cT.jsx)("span", {
                                          children: "Texture"
                                        }), (0, cT.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: FT.texture
                                        })]
                                      }), (0, cT.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: RT.map((TT => {
                                          var oT;
                                          const IT = null !== (oT = null === XT || void 0 === XT ? void 0 : XT.getParticleTextureUrl(TT)) && void 0 !== oT ? oT : null;
                                          return (0, cT.jsx)("button", {
                                            type: "button",
                                            className: kT()("DocsParticleTexture", {
                                              Active: FT.texture === TT
                                            }),
                                            title: TT,
                                            "aria-label": TT,
                                            "aria-pressed": FT.texture === TT,
                                            onClick: () => {
                                              wT({
                                                texture: TT
                                              })
                                            },
                                            children: IT ? (0, cT.jsx)("img", {
                                              src: IT,
                                              alt: ""
                                            }) : (0, cT.jsx)(MT, {
                                              name: "image"
                                            })
                                          }, TT)
                                        }))
                                      })]
                                    }), (0, cT.jsx)(Iz, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: FT.manualEmitCount,
                                      onChange: TT => {
                                        wT({
                                          manualEmitCount: TT
                                        })
                                      }
                                    }), (0, cT.jsx)(oz, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: FT.minLifeTime,
                                      high: FT.maxLifeTime,
                                      onChange: (TT, oT) => {
                                        wT({
                                          minLifeTime: TT,
                                          maxLifeTime: oT
                                        })
                                      }
                                    }), (0, cT.jsx)(oz, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: FT.minEmitPower,
                                      high: FT.maxEmitPower,
                                      onChange: (TT, oT) => {
                                        wT({
                                          minEmitPower: TT,
                                          maxEmitPower: oT
                                        })
                                      }
                                    }), (0, cT.jsx)(oz, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: FT.minSize,
                                      high: FT.maxSize,
                                      onChange: (TT, oT) => {
                                        wT({
                                          minSize: TT,
                                          maxSize: oT
                                        })
                                      }
                                    }), (0, cT.jsx)(Iz, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (zT = FT.gravity[1]) && void 0 !== zT ? zT : 0,
                                      onChange: TT => {
                                        var oT, IT;
                                        wT({
                                          gravity: [null !== (oT = FT.gravity[0]) && void 0 !== oT ? oT : 0, TT, null !== (IT = FT.gravity[2]) && void 0 !== IT ? IT : 0]
                                        })
                                      }
                                    }), (0, cT.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, cT.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, cT.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, cT.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: FT.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: TT => {
                                          wT({
                                            blendMode: Number(TT.target.value)
                                          })
                                        },
                                        children: Sz.map((TT => {
                                          let {
                                            mode: oT,
                                            label: IT
                                          } = TT;
                                          return (0, cT.jsx)("option", {
                                            value: oT,
                                            children: IT
                                          }, oT)
                                        }))
                                      })]
                                    }), (0, cT.jsx)(iz, {
                                      opts: FT,
                                      onChange: TT => {
                                        wT({
                                          colorGradients: TT
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, cT.jsx)(eT, {
                                  code: mT,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var Lz = IT(3992),
                            xz = IT(1729);

                          function cz(TT, oT) {
                            return TT ? Lz.d.includes(oT) ? TT.getIngameIconUrl(oT) : TT.getItemIconUrl(oT) : null
                          }

                          function Kz(TT) {
                            var oT, IT, iT;
                            let {
                              part: zT,
                              assets: WT
                            } = TT;
                            const XT = cz(WT, zT.icon),
                              BT = null !== (oT = null === (IT = zT.style) || void 0 === IT ? void 0 : IT.fontSize) && void 0 !== oT ? oT : "1.8em",
                              FT = (0, Oo.Sb)(zT.style);
                            return (0, cT.jsxs)("span", {
                              className: kT()("DocsBloxdTextIcon", {
                                Missing: !XT
                              }),
                              style: {
                                width: BT,
                                height: BT,
                                opacity: null === (iT = zT.style) || void 0 === iT ? void 0 : iT.opacity
                              },
                              title: XT ? void 0 : `No Bloxd icon, item or block is called "${zT.icon}"`,
                              children: [XT && FT && (0, cT.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: FT,
                                  maskImage: `url("${XT}")`,
                                  WebkitMaskImage: `url("${XT}")`
                                }
                              }), XT ? (0, cT.jsx)("img", {
                                src: XT,
                                alt: "",
                                className: kT()({
                                  Tinted: FT
                                })
                              }) : (0, cT.jsx)(MT, {
                                name: "image"
                              })]
                            })
                          }

                          function Mz(TT) {
                            let {
                              parts: oT,
                              className: IT
                            } = TT;
                            const iT = mi(),
                              zT = [];
                            let WT = [];
                            const XT = TT => {
                              WT.length > 0 && (zT.push((0, cT.jsx)(xz.c, {
                                text: WT
                              }, `run-${TT}`)), WT = [])
                            };
                            return oT.forEach(((TT, oT) => {
                              "icon" !== so(TT) || no(TT.icon) ? WT.push(TT) : (XT(oT), zT.push((0, cT.jsx)(Kz, {
                                part: TT,
                                assets: iT
                              }, `icon-${oT}`)))
                            })), XT(oT.length), (0, cT.jsx)("div", {
                              className: kT()("DocsStyledTextPreview", IT),
                              children: zT
                            })
                          }
                          const rz = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let Az = null;

                          function gz(TT) {
                            if (Az ??= document.createElement("canvas").getContext("2d"), !Az) return "#000000";
                            Az.fillStyle = "#000000", Az.fillStyle = TT;
                            const oT = Az.fillStyle;
                            return oT.startsWith("#") ? oT : "#000000"
                          }

                          function hz(TT) {
                            let {
                              value: oT,
                              label: IT,
                              onChange: iT
                            } = TT;
                            return (0, cT.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, cT.jsx)("input", {
                                type: "color",
                                value: gz(oT),
                                "aria-label": `${IT} picker`,
                                onChange: TT => {
                                  iT(TT.target.value)
                                }
                              }), (0, cT.jsx)("input", {
                                type: "text",
                                value: oT,
                                placeholder: "#ffb914 or gold",
                                "aria-label": IT,
                                spellCheck: !1,
                                onChange: TT => {
                                  iT(TT.target.value)
                                }
                              })]
                            })
                          }

                          function wz(TT) {
                            let {
                              value: oT,
                              fontAwesomeIcons: IT,
                              onChange: zT
                            } = TT;
                            const WT = mi(),
                              [XT, BT] = (0, iT.useState)(no(oT) ? "fontAwesome" : "bloxd"),
                              [FT, ST] = (0, iT.useState)(""),
                              DT = FT.trim().toLowerCase(),
                              LT = "bloxd" === XT ? Lz.d : IT,
                              xT = DT ? LT.filter((TT => TT.toLowerCase().includes(DT))) : LT;
                            return (0, cT.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, cT.jsx)("input", {
                                type: "text",
                                value: oT,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: TT => {
                                  zT(TT.target.value)
                                }
                              }), (0, cT.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, cT.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((TT => (0, cT.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": XT === TT,
                                    className: kT()("DocsVariantChip", {
                                      Active: XT === TT
                                    }),
                                    onClick: () => {
                                      BT(TT)
                                    },
                                    children: "bloxd" === TT ? `Bloxd icons (${Lz.d.length})` : `Font Awesome (${IT.length})`
                                  }, TT))), (0, cT.jsx)("input", {
                                    type: "search",
                                    value: FT,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: TT => {
                                      ST(TT.target.value)
                                    }
                                  })
                                ]
                              }), (0, cT.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [xT.map((TT => {
                                  const IT = "bloxd" === XT ? cz(WT, TT) : null;
                                  return (0, cT.jsx)("button", {
                                    type: "button",
                                    title: TT,
                                    "aria-label": TT,
                                    "aria-pressed": TT === oT,
                                    className: kT()("DocsIconPickerOption", {
                                      Active: TT === oT
                                    }),
                                    onClick: () => {
                                      zT(TT)
                                    },
                                    children: "fontAwesome" === XT ? (0, cT.jsx)(mI.e, {
                                      name: TT
                                    }) : IT ? (0, cT.jsx)("img", {
                                      src: IT,
                                      alt: ""
                                    }) : (0, cT.jsx)(MT, {
                                      name: "image"
                                    })
                                  }, TT)
                                })), 0 === xT.length && (0, cT.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", FT, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function mz(TT) {
                            let {
                              property: oT,
                              value: IT,
                              fontAwesomeIcons: iT,
                              onChange: zT
                            } = TT;
                            const {
                              field: kT,
                              label: WT
                            } = oT, XT = TT => "" !== TT || oT.isRequired ? TT : void 0;
                            switch (kT.kind) {
                              case "text":
                                return kT.multiline ? (0, cT.jsx)("textarea", {
                                  value: String(null !== IT && void 0 !== IT ? IT : ""),
                                  rows: 2,
                                  "aria-label": WT,
                                  onChange: TT => {
                                    zT(TT.target.value)
                                  }
                                }) : (0, cT.jsx)("input", {
                                  type: "text",
                                  value: String(null !== IT && void 0 !== IT ? IT : ""),
                                  "aria-label": WT,
                                  onChange: TT => {
                                    zT(XT(TT.target.value))
                                  }
                                });
                              case "size":
                                return (0, cT.jsx)("input", {
                                  type: "text",
                                  value: String(null !== IT && void 0 !== IT ? IT : ""),
                                  placeholder: oT.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": WT,
                                  spellCheck: !1,
                                  onChange: TT => {
                                    zT(XT(TT.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, cT.jsx)(hz, {
                                  value: String(null !== IT && void 0 !== IT ? IT : ""),
                                  label: WT,
                                  onChange: TT => {
                                    zT(XT(TT))
                                  }
                                });
                              case "colours": {
                                const TT = Array.isArray(IT) ? IT : [],
                                  oT = TT => {
                                    zT(TT.length > 0 ? TT : void 0)
                                  };
                                return (0, cT.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [TT.map(((IT, iT) => (0, cT.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, cT.jsx)(hz, {
                                      value: IT,
                                      label: `${WT} ${iT+1}`,
                                      onChange: IT => {
                                        oT(TT.map(((TT, oT) => oT === iT ? IT : TT)))
                                      }
                                    }), (0, cT.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${iT+1}`,
                                      onClick: () => {
                                        oT(TT.filter(((TT, oT) => oT !== iT)))
                                      },
                                      children: (0, cT.jsx)(MT, {
                                        name: "cross"
                                      })
                                    })]
                                  }, iT))), (0, cT.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var IT;
                                      oT([...TT, null !== (IT = TT.at(-1)) && void 0 !== IT ? IT : "#ffffff"])
                                    },
                                    children: [(0, cT.jsx)(MT, {
                                      name: "plus"
                                    }), 0 === TT.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var BT;
                                const TT = "number" === typeof IT ? IT : Number(null !== (BT = oT.defaultText) && void 0 !== BT ? BT : 0);
                                return (0, cT.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, cT.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: TT,
                                    "aria-label": WT,
                                    onChange: TT => {
                                      zT(Number(TT.target.value))
                                    }
                                  }), (0, cT.jsx)("output", {
                                    children: TT.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, cT.jsxs)("select", {
                                  value: String(null !== IT && void 0 !== IT ? IT : ""),
                                  "aria-label": WT,
                                  onChange: TT => {
                                    zT(XT(TT.target.value))
                                  },
                                  children: [!oT.isRequired && (0, cT.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", oT.defaultText, ")"]
                                  }), kT.options.map((TT => (0, cT.jsx)("option", {
                                    value: TT,
                                    children: TT
                                  }, TT)))]
                                });
                              case "icon":
                                return (0, cT.jsx)(wz, {
                                  value: String(null !== IT && void 0 !== IT ? IT : ""),
                                  fontAwesomeIcons: iT,
                                  onChange: zT
                                })
                            }
                          }

                          function ez(TT) {
                            let oT;
                            try {
                              oT = JSON.parse(TT)
                            } catch (IT) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${IT.message}`
                              }
                            }
                            return zI(oT) ? {
                              part: oT,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function Rz(TT) {
                            let {
                              parts: oT,
                              index: IT,
                              fontAwesomeIcons: zT,
                              onChange: kT,
                              zC: WT,
                              onClose: XT
                            } = TT;
                            const BT = (0, iT.useContext)(co),
                              ST = (0, iT.useRef)(null),
                              DT = oT[IT],
                              LT = so(DT),
                              [xT, KT] = (0, iT.useState)((() => JSON.stringify(DT, null, 2))),
                              rT = (0, iT.useMemo)((() => "other" === LT ? ez(xT).error : null), [LT, xT]);
                            (0, iT.useEffect)((() => {
                              var TT;
                              null === (TT = ST.current) || void 0 === TT || TT.focus()
                            }), []);
                            const AT = (0, cT.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: TT => {
                                TT.target === TT.currentTarget && XT()
                              },
                              children: (0, cT.jsxs)("div", {
                                ref: ST,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${IT+1}: ${qo[LT]}`,
                                tabIndex: -1,
                                onKeyDown: TT => {
                                  "Escape" === TT.key ? (TT.stopPropagation(), XT()) : "Tab" === TT.key && ST.current && function(TT, oT) {
                                    const IT = Array.from(TT.querySelectorAll(fo)),
                                      iT = IT[0],
                                      zT = IT.at(-1);
                                    if (!iT || !zT) return;
                                    const kT = document.activeElement;
                                    !oT.shiftKey || kT !== iT && kT !== TT ? oT.shiftKey || kT !== zT || (oT.preventDefault(), iT.focus()) : (oT.preventDefault(), zT.focus())
                                  }(ST.current, TT)
                                },
                                children: [(0, cT.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, cT.jsxs)("div", {
                                    children: [(0, cT.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", IT + 1]
                                    }), (0, cT.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: qo[LT]
                                    })]
                                  }), (0, cT.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: XT,
                                    children: (0, cT.jsx)(MT, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, cT.jsx)(Mz, {
                                  parts: oT,
                                  className: "DocsTextDialogPreview"
                                }), (0, cT.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === LT ? (0, cT.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, cT.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, cT.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: xT,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: TT => {
                                        KT(TT.target.value);
                                        const oT = ez(TT.target.value);
                                        null !== oT.part && kT(oT.part)
                                      }
                                    }), rT && (0, cT.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: rT
                                    })]
                                  }) : Go[LT].map((TT => {
                                    const oT = bo(DT, TT.path),
                                      IT = TT.isRequired ? JSON.stringify(No(DT, TT.path)) === JSON.stringify(DT) : void 0 === oT;
                                    return (0, cT.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, cT.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, cT.jsx)("span", {
                                          children: TT.label
                                        }), (0, cT.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: IT,
                                          "aria-label": `Reset ${TT.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            kT(No(DT, TT.path))
                                          },
                                          children: [(0, cT.jsx)(MT, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, cT.jsx)(mz, {
                                        property: TT,
                                        value: oT,
                                        fontAwesomeIcons: zT,
                                        onChange: oT => {
                                          kT(yo(DT, TT.path, oT))
                                        }
                                      }), !TT.isRequired && (0, cT.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", TT.defaultText]
                                      })]
                                    }, TT.path.join("."))
                                  }))
                                }), (0, cT.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, cT.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: WT,
                                    children: [(0, cT.jsx)(MT, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, cT.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: XT,
                                    children: "Done"
                                  })]
                                }), (0, cT.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: rz.map((TT => (0, cT.jsx)("option", {
                                    value: TT
                                  }, TT)))
                                })]
                              })
                            });
                            return BT ? (0, FT.createPortal)(AT, BT) : AT
                          }
                          const uz = [{
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
                            vz = Object.keys(Zo);

                          function Ez(TT) {
                            let {
                              fontAwesomeIcons: oT
                            } = TT;
                            const [IT, zT] = (0, iT.useState)(uz[0].parts), [WT, XT] = (0, iT.useState)((() => oI(uz[0].parts))), [BT, FT] = (0, iT.useState)(null), [ST, DT] = (0, iT.useState)(!1), [LT, xT] = (0, iT.useState)(null), [KT, rT] = (0, iT.useState)(!1), [AT, gT] = (0, iT.useState)(null), hT = (0, iT.useRef)(null), wT = oI(IT);
                            (0, iT.useLayoutEffect)((() => {
                              var TT;
                              if (!AT) return;
                              const oT = TT => {
                                  var oT;
                                  return null === (oT = hT.current) || void 0 === oT ? void 0 : oT.querySelector(`[data-focus-key="${TT}"]`)
                                },
                                IT = oT(AT.key);
                              null === (TT = IT && !IT.disabled ? IT : oT(AT.fallback)) || void 0 === TT || TT.focus(), gT(null)
                            }), [AT]);
                            const mT = TT => {
                                zT(TT), XT(oI(TT)), FT(null)
                              },
                              RT = TT => {
                                mT(IT.filter(((oT, IT) => IT !== TT))), gT({
                                  key: `edit-${Math.min(TT,IT.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              uT = (TT, oT) => {
                                const iT = [...IT],
                                  [zT] = iT.splice(TT, 1);
                                iT.splice(TT + oT, 0, zT), mT(iT);
                                gT({
                                  key: `${oT<0?"up":"down"}-${TT+oT}`,
                                  fallback: `edit-${TT+oT}`
                                })
                              };
                            return (0, cT.jsxs)("section", {
                              ref: hT,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, cT.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, cT.jsxs)("div", {
                                  children: [(0, cT.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, cT.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, cT.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: uz.map((TT => (0, cT.jsx)("button", {
                                  type: "button",
                                  className: kT()("DocsVariantChip", {
                                    Active: wT === oI(TT.parts)
                                  }),
                                  onClick: () => {
                                    mT(TT.parts)
                                  },
                                  children: TT.label
                                }, TT.label)))
                              }), (0, cT.jsx)(Mz, {
                                parts: IT,
                                className: "DocsTextEditorPreview"
                              }), (0, cT.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, cT.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, cT.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, cT.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [IT.map(((TT, oT) => {
                                      const iT = so(TT);
                                      return (0, cT.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, cT.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${oT}`,
                                          "aria-label": `Edit part ${oT+1}, ${qo[iT]}`,
                                          onClick: () => {
                                            xT(oT)
                                          },
                                          children: [(0, cT.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: qo[iT]
                                          }), (0, cT.jsx)(Mz, {
                                            parts: [TT],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== iT && (0, cT.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: Po(TT)
                                          })]
                                        }), (0, cT.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, cT.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${oT+1} up`,
                                            "data-focus-key": `up-${oT}`,
                                            disabled: 0 === oT,
                                            onClick: () => {
                                              uT(oT, -1)
                                            },
                                            children: (0, cT.jsx)(MT, {
                                              name: "chevron-up"
                                            })
                                          }), (0, cT.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${oT+1} down`,
                                            "data-focus-key": `down-${oT}`,
                                            disabled: oT === IT.length - 1,
                                            onClick: () => {
                                              uT(oT, 1)
                                            },
                                            children: (0, cT.jsx)(MT, {
                                              name: "chevron-down"
                                            })
                                          }), (0, cT.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${oT+1}`,
                                            onClick: () => {
                                              RT(oT)
                                            },
                                            children: (0, cT.jsx)(MT, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, oT)
                                    })), 0 === IT.length && (0, cT.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, cT.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: TT => {
                                      "Escape" === TT.key && KT && (TT.stopPropagation(), rT(!1), gT({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, cT.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": KT,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        rT(!KT)
                                      },
                                      children: [(0, cT.jsx)(MT, {
                                        name: "plus"
                                      }), "Add a part", (0, cT.jsx)(MT, {
                                        name: KT ? "chevron-up" : "chevron-down"
                                      })]
                                    }), KT && (0, cT.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: vz.map((TT => (0, cT.jsx)("li", {
                                        children: (0, cT.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (TT => {
                                              mT([...IT, Zo[TT]]), rT(!1), xT(IT.length)
                                            })(TT)
                                          },
                                          children: qo[TT]
                                        })
                                      }, TT)))
                                    })]
                                  })]
                                }), (0, cT.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, cT.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, cT.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": ST,
                                      onClick: () => {
                                        DT(!ST)
                                      },
                                      children: [(0, cT.jsx)(MT, {
                                        name: ST ? "check" : "pencil"
                                      }), ST ? "Done" : "Edit"]
                                    })]
                                  }), ST ? (0, cT.jsxs)(cT.Fragment, {
                                    children: [(0, cT.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: WT,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: TT => {
                                        XT(TT.target.value);
                                        const oT = kI(TT.target.value);
                                        FT(oT.error), oT.parts && zT(oT.parts)
                                      }
                                    }), BT && (0, cT.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: BT
                                    })]
                                  }) : (0, cT.jsx)(eT, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${wT})`
                                  })]
                                })]
                              }), null !== LT && LT < IT.length && (0, cT.jsx)(Rz, {
                                parts: IT,
                                index: LT,
                                fontAwesomeIcons: oT,
                                onChange: TT => {
                                  ((TT, oT) => {
                                    mT(IT.map(((IT, iT) => iT === TT ? oT : IT)))
                                  })(LT, TT)
                                },
                                zC: () => {
                                  RT(LT), xT(null)
                                },
                                onClose: () => {
                                  xT(null), gT({
                                    key: `edit-${LT}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var fz = IT(4336),
                            Cz = IT(4311),
                            jz = IT(4328),
                            Jz = IT(4339);
                          const Uz = 40,
                            az = 800,
                            Yz = 150,
                            Qz = 8e3,
                            Oz = 2e3;

                          function Hz(TT, oT) {
                            return 12 * Math.log2(oT / TT)
                          }

                          function nz(TT, oT) {
                            return Math.round(TT * 2 ** (oT / 12) * 10) / 10
                          }

                          function qz(TT) {
                            return `${TT} ms`
                          }

                          function Zz(TT) {
                            return `${TT} st`
                          }
                          const lz = [{
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

                          function sz(TT) {
                            let {
                              synth: oT,
                              onChange: IT
                            } = TT;
                            const iT = (0, fz.j)(oT);
                            return (0, cT.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, cT.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, cT.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, cT.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, cT.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, cT.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, cT.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: fz.f.map((TT => (0, cT.jsx)("button", {
                                      type: "button",
                                      className: kT()("DocsVariantChip", {
                                        Active: oT.waveform === TT
                                      }),
                                      "aria-pressed": oT.waveform === TT,
                                      onClick: () => {
                                        IT({
                                          waveform: TT
                                        })
                                      },
                                      children: TT
                                    }, TT)))
                                  })]
                                }), (0, cT.jsx)(Iz, {
                                  label: "Pitch",
                                  min: 0,
                                  max: Hz(Uz, az),
                                  step: .1,
                                  value: Hz(Uz, oT.pitchHz),
                                  format: () => `${oT.pitchHz} Hz`,
                                  onChange: TT => {
                                    IT({
                                      pitchHz: nz(Uz, TT)
                                    })
                                  }
                                }), (0, cT.jsx)(Iz, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: oT.syllableMs,
                                  format: qz,
                                  onChange: TT => {
                                    IT({
                                      syllableMs: TT
                                    })
                                  }
                                }), (0, cT.jsx)(Iz, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: oT.volume,
                                  onChange: TT => {
                                    IT({
                                      volume: TT
                                    })
                                  }
                                })]
                              }), (0, cT.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, cT.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, cT.jsx)(Iz, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: oT.durationMs,
                                  format: qz,
                                  onChange: TT => {
                                    IT({
                                      durationMs: TT
                                    })
                                  }
                                }), (0, cT.jsx)(Iz, {
                                  label: "Fade in",
                                  min: 0,
                                  max: iT.durationMs,
                                  step: 1,
                                  value: iT.attackMs,
                                  format: qz,
                                  onChange: TT => {
                                    IT({
                                      attackMs: TT
                                    })
                                  }
                                }), (0, cT.jsx)(Iz, {
                                  label: "Fade out",
                                  min: 0,
                                  max: iT.durationMs - iT.attackMs,
                                  step: 1,
                                  value: iT.releaseMs,
                                  format: qz,
                                  onChange: TT => {
                                    IT({
                                      releaseMs: TT
                                    })
                                  }
                                }), (0, cT.jsx)(Iz, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: oT.glideSemitones,
                                  format: Zz,
                                  onChange: TT => {
                                    IT({
                                      glideSemitones: TT
                                    })
                                  }
                                }), (0, cT.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, cT.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== oT.lowpassHz,
                                    onChange: TT => {
                                      IT({
                                        lowpassHz: TT.target.checked ? Oz : null
                                      })
                                    }
                                  }), (0, cT.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== oT.lowpassHz && (0, cT.jsx)(Iz, {
                                  label: "Filter",
                                  min: 0,
                                  max: Hz(Yz, Qz),
                                  step: .1,
                                  value: Hz(Yz, oT.lowpassHz),
                                  format: () => `${oT.lowpassHz} Hz`,
                                  onChange: TT => {
                                    IT({
                                      lowpassHz: nz(Yz, TT)
                                    })
                                  }
                                })]
                              }), (0, cT.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, cT.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), lz.map((TT => {
                                  let {
                                    key: iT,
                                    label: zT,
                                    max: kT
                                  } = TT;
                                  return (0, cT.jsx)(Iz, {
                                    label: zT,
                                    min: 0,
                                    max: kT,
                                    step: .1,
                                    value: oT.intonation[iT],
                                    format: Zz,
                                    onChange: TT => {
                                      IT({
                                        intonation: {
                                          ...oT.intonation,
                                          [iT]: TT
                                        }
                                      })
                                    }
                                  }, iT)
                                }))]
                              })]
                            })
                          }
                          const tz = Object.keys(fz.g),
                            Gz = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function pz(TT) {
                            var oT;
                            const IT = JSON.stringify((0, fz.j)(TT));
                            return null !== (oT = tz.find((TT => JSON.stringify((0, fz.j)(fz.g[TT])) === IT))) && void 0 !== oT ? oT : null
                          }

                          function bz(TT) {
                            let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof TT || null === TT) return JSON.stringify(TT);
                            return `{\n${Object.entries(TT).map((TT=>{let[IT,iT]=TT;return`${oT}    ${IT}: ${bz(iT,`${oT}    `)},`})).join("\n")}\n${oT}}`
                          }

                          function yz(TT, oT, IT) {
                            const iT = pz(TT),
                              zT = [`    line: ${JSON.stringify(oT)},`];
                            return IT && zT.push(`    speakerName: ${JSON.stringify(IT)},`), zT.push("    voice,"), `const voice = ${iT?JSON.stringify(iT):bz((0,fz.j)(TT))}\n\napi.setClientOption(playerId, "dialogue", {\n${zT.join("\n")}\n})`
                          }
                          const Nz = 400,
                            Pz = 90;
                          let dz = null;

                          function Vz(TT, oT, IT) {
                            return dz ??= new AudioContext, dz.resume(), (0, Jz.c)(dz, dz.destination, TT, oT, IT, (() => {}))
                          }

                          function Tk() {
                            const [TT, oT] = (0, iT.useState)(fz.g.regular), [IT, zT] = (0, iT.useState)(Gz[0]), [WT, XT] = (0, iT.useState)("Innkeeper"), [BT, FT] = (0, iT.useState)(0), ST = Li((TT => TT.volume)), DT = (0, iT.useRef)(null), LT = (0, iT.useRef)(0), xT = (0, iT.useRef)(0), KT = () => {
                              var TT;
                              null === (TT = DT.current) || void 0 === TT || TT.call(DT), DT.current = null
                            };
                            (0, iT.useEffect)((() => () => {
                              var TT;
                              null === (TT = DT.current) || void 0 === TT || TT.call(DT), window.clearTimeout(LT.current)
                            }), []);
                            const rT = (0, iT.useMemo)((() => ({
                                line: IT,
                                speakerName: WT || void 0,
                                voice: TT
                              })), [IT, WT, TT]),
                              AT = (0, iT.useRef)(rT);
                            AT.current = rT;
                            const hT = pz(TT),
                              wT = TT => {
                                window.clearTimeout(LT.current), KT();
                                const {
                                  plan: oT,
                                  synth: IT
                                } = (0, jz.h)(TT);
                                IT && (DT.current = Vz(IT, oT.blips, ST)), FT((TT => TT + 1))
                              },
                              mT = yz(TT, IT, WT);
                            return (0, cT.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, cT.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, cT.jsxs)("div", {
                                  children: [(0, cT.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, cT.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, cT.jsx)(gT, {
                                  text: mT,
                                  label: "Copy code"
                                })]
                              }), (0, cT.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [tz.map((TT => (0, cT.jsx)("button", {
                                  type: "button",
                                  className: kT()("DocsVariantChip", {
                                    Active: hT === TT
                                  }),
                                  "aria-pressed": hT === TT,
                                  onClick: () => {
                                    (TT => {
                                      const IT = fz.g[TT];
                                      oT(IT), wT({
                                        ...rT,
                                        voice: IT
                                      })
                                    })(TT)
                                  },
                                  children: TT
                                }, TT))), !hT && (0, cT.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, cT.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, cT.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, cT.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, cT.jsx)(Cz.d, {
                                      display: rT
                                    }, BT)
                                  }), (0, cT.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: TT => {
                                      TT.preventDefault(), wT(rT)
                                    },
                                    children: [(0, cT.jsx)("input", {
                                      value: IT,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: TT => {
                                        zT(TT.target.value)
                                      }
                                    }), (0, cT.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, cT.jsx)(MT, {
                                        name: "play"
                                      }), (0, cT.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, cT.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: Gz.map((TT => (0, cT.jsx)("button", {
                                      type: "button",
                                      className: kT()("DocsVariantChip", {
                                        Active: IT === TT
                                      }),
                                      onClick: () => {
                                        var oT;
                                        zT(oT = TT), wT({
                                          ...rT,
                                          line: oT
                                        })
                                      },
                                      children: TT
                                    }, TT)))
                                  }), (0, cT.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, cT.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, cT.jsx)("input", {
                                      value: WT,
                                      placeholder: "No name",
                                      onChange: TT => {
                                        XT(TT.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, cT.jsx)(sz, {
                                  synth: TT,
                                  onChange: IT => {
                                    const iT = {
                                      ...TT,
                                      ...IT
                                    };
                                    oT(iT);
                                    const zT = {
                                        ...rT,
                                        voice: iT
                                      },
                                      kT = performance.now();
                                    if (kT - xT.current >= Pz) {
                                      xT.current = kT, KT();
                                      const TT = (0, jz.h)(zT).plan.blips[0];
                                      TT && (DT.current = Vz((0, fz.j)(iT), [{
                                        ...TT,
                                        atMs: 0
                                      }], ST))
                                    }
                                    window.clearTimeout(LT.current), LT.current = window.setTimeout((() => {
                                      wT(AT.current)
                                    }), Nz)
                                  }
                                })]
                              }), (0, cT.jsx)(eT, {
                                code: mT,
                                lang: "ts"
                              })]
                            })
                          }
                          var Ik = IT(4355);
                          const ik = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            zk = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            kk = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${zk}`, "g"), Ik.k],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, Ik.k]
                            ];

                          function Wk(TT) {
                            return `${TT.pageId}#${TT.anchor}`
                          }
                          let Xk, Bk, Fk;

                          function Sk(TT) {
                            const oT = (0, RT.f)(TT),
                              IT = new Set;
                            for (const [, , iT] of oT.matchAll(RT.c)) {
                              const TT = iT.startsWith("#") ? lT(iT) : null,
                                oT = TT ? Wk({
                                  pageId: TT.page.id,
                                  anchor: TT.anchor
                                }) : null;
                              null !== oT && (Xk || (Xk = new Set(QT.flatMap((TT => fT(TT.layout) ? qT(TT).sections.map((oT => Wk({
                                pageId: TT.id,
                                anchor: oT.heading.anchor
                              }))) : [])))), Xk).has(oT) && IT.add(oT)
                            }
                            for (const [, , iT] of oT.matchAll(ik)) {
                              const TT = Lo(iT);
                              TT && IT.add(Wk(TT))
                            }
                            return IT
                          }

                          function Dk(TT, oT) {
                            const IT = new Set,
                              iT = function(TT) {
                                return TT.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(TT);
                            for (const [, zT] of iT.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) IT.add(zT);
                            for (const [zT, kT] of kk)
                              for (const [, TT] of(0, Ik.f)(iT, zT, kT)) oT.has(TT) && IT.add(TT);
                            return IT
                          }

                          function Lk(TT, oT, IT, iT) {
                            const zT = TT.get(oT);
                            zT ? !iT && zT.some((TT => TT.pageId === IT.pageId)) || zT.push(IT) : TT.set(oT, [IT])
                          }
                          const xk = /^[A-Za-z_$][\w$]*$/;

                          function ck(TT) {
                            return xk.test(TT.name) ? TT.name : "options"
                          }

                          function Kk(TT, oT) {
                            const IT = TT.params.map(ck).join(", ");
                            return oT ? `${TT.name} = (${IT}) => {\n\t\n}` : `api.${TT.name}(${IT})`
                          }

                          function Mk(TT) {
                            let {
                              method: oT,
                              isCallback: IT
                            } = TT;
                            return (0, cT.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, cT.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [IT ? (0, cT.jsxs)(cT.Fragment, {
                                  children: [(0, cT.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: oT.name
                                  }), (0, cT.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, cT.jsxs)(cT.Fragment, {
                                  children: [(0, cT.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, cT.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: oT.name
                                  }), (0, cT.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), oT.params.map(((TT, IT) => (0, cT.jsxs)(iT.Fragment, {
                                  children: [IT > 0 && (0, cT.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, cT.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${oT.name}-${ck(TT)}`,
                                    children: TT.name
                                  })]
                                }, TT.name))), (0, cT.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: IT ? ") => " : ")"
                                }), IT && !oT.returns && (0, cT.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), oT.returns && oT.returns.type && (0, cT.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!IT && (0, cT.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, cT.jsx)(uo, {
                                  type: oT.returns.type
                                })]
                              })]
                            })
                          }

                          function rk(TT) {
                            let {
                              title: oT,
                              references: IT
                            } = TT;
                            const zT = (0, iT.useContext)(xo);
                            return (0, cT.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, cT.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: oT
                              }), IT.map((TT => (0, cT.jsx)(WT.b, {
                                to: tT(zT, HT(TT.pageId), TT.anchor),
                                children: TT.label
                              }, `${TT.pageId}#${TT.anchor}`)))]
                            })
                          }

                          function Ak(TT) {
                            var oT, IT;
                            let {
                              pageId: iT,
                              anchor: zT
                            } = TT;
                            const kT = Wk({
                                pageId: iT,
                                anchor: zT
                              }),
                              WT = null !== (oT = function() {
                                if (!Fk) {
                                  Fk = new Map;
                                  const iT = new Set(QT.filter((TT => "callbacks" === TT.layout)).flatMap((TT => qT(TT).sections.map((TT => TT.heading.text)))));
                                  for (const zT of QT)
                                    if ("article" === zT.layout || "snippets" === zT.layout)
                                      for (const kT of (0, RT.s)(qT(zT)))
                                        for (const {
                                            code: WT
                                          }
                                          of(0, RT.j)(kT.blocks))
                                          for (const XT of Dk(WT, iT)) {
                                            const iT = Do().get(XT);
                                            if (iT) {
                                              var TT, oT, IT;
                                              const WT = {
                                                pageId: zT.id,
                                                anchor: null !== (TT = null === (oT = kT.heading) || void 0 === oT ? void 0 : oT.anchor) && void 0 !== TT ? TT : "",
                                                label: null !== (IT = zT.navTitle) && void 0 !== IT ? IT : zT.title
                                              };
                                              Lk(Fk, Wk(iT), WT, !1)
                                            }
                                          }
                                }
                                return Fk
                              }().get(kT)) && void 0 !== oT ? oT : [],
                              XT = null !== (IT = function() {
                                if (!Bk) {
                                  Bk = new Map;
                                  const TT = HT("changelog");
                                  for (const oT of qT(TT).sections) {
                                    const IT = new Set(oT.blocks.flatMap((TT => [...Sk(TT)])));
                                    for (const iT of IT) {
                                      const IT = {
                                        pageId: TT.id,
                                        anchor: oT.heading.anchor,
                                        label: oT.heading.text
                                      };
                                      Lk(Bk, iT, IT, !0)
                                    }
                                  }
                                }
                                return Bk
                              }().get(kT)) && void 0 !== IT ? IT : [];
                            return 0 === WT.length && 0 === XT.length ? null : (0, cT.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [WT.length > 0 && (0, cT.jsx)(rk, {
                                title: "Used in",
                                references: WT
                              }), XT.length > 0 && (0, cT.jsx)(rk, {
                                title: "Changelog",
                                references: XT
                              })]
                            })
                          }

                          function gk(TT) {
                            let {
                              method: oT,
                              pageId: IT,
                              anchor: iT,
                              isCallback: zT
                            } = TT;
                            const kT = zT ? void 0 : Xo().get(oT.name),
                              WT = oT.description.length > 0 || null === kT || void 0 === kT || !kT.description ? oT.description : (0, RT.y)(kT.description);
                            return (0, cT.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, cT.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, cT.jsx)(DI, {
                                  level: 2,
                                  text: oT.name,
                                  anchor: iT,
                                  className: "DocsCardTitle"
                                }), (0, cT.jsx)(gT, {
                                  text: Kk(oT, zT),
                                  label: zT ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, cT.jsx)(Mk, {
                                method: oT,
                                isCallback: zT
                              }), kT && null !== kT.deprecation && (0, cT.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, cT.jsx)("strong", {
                                  children: "Deprecated"
                                }), kT.deprecation && (0, cT.jsxs)(cT.Fragment, {
                                  children: [": ", (0, cT.jsx)(mo, {
                                    text: (XT = kT.deprecation, (0, Ik.r)(XT, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, Ik.i)("`\\w"), (TT => {
                                      let [oT] = TT;
                                      return Do().has(oT) ? `\`${oT}\`` : oT
                                    })))
                                  })]
                                })]
                              }), WT.length > 0 && (0, cT.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, cT.jsx)(KI, {
                                  blocks: WT
                                })
                              }), oT.params.length > 0 && (0, cT.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, cT.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, cT.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: oT.params.map((TT => (0, cT.jsxs)("div", {
                                    id: `${oT.name}-${ck(TT)}`,
                                    className: "DocsParam",
                                    children: [(0, cT.jsxs)("dt", {
                                      children: [(0, cT.jsx)("code", {
                                        className: "DocsParamName",
                                        children: TT.name
                                      }), (0, cT.jsx)(uo, {
                                        type: TT.type
                                      })]
                                    }), TT.description && (0, cT.jsx)("dd", {
                                      children: (0, cT.jsx)(mo, {
                                        text: TT.description
                                      })
                                    })]
                                  }, TT.name)))
                                })]
                              }), oT.returns && (oT.returns.type || oT.returns.description.length > 0) && (0, cT.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, cT.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, cT.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [oT.returns.type && (0, cT.jsx)(uo, {
                                    type: oT.returns.type
                                  }), oT.returns.description.length > 0 && (0, cT.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, cT.jsx)(KI, {
                                      blocks: oT.returns.description
                                    })
                                  })]
                                })]
                              }), (0, cT.jsx)(Ak, {
                                pageId: IT,
                                anchor: iT
                              })]
                            });
                            var XT
                          }

                          function hk(TT) {
                            var oT;
                            return null !== TT.defaultValue && "undefined" !== TT.defaultValue ? TT.defaultValue : null !== (oT = TT.example) && void 0 !== oT ? oT : "value"
                          }

                          function wk(TT) {
                            let {
                              setting: oT,
                              pageId: IT,
                              anchor: iT,
                              setterSnippet: zT
                            } = TT;
                            const kT = null === oT.defaultValue ? null : ro(oT.defaultValue);
                            return (0, cT.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, cT.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, cT.jsx)(DI, {
                                  level: 2,
                                  text: oT.name,
                                  anchor: iT,
                                  className: "DocsCardTitle"
                                }), (0, cT.jsx)(gT, {
                                  text: zT(oT.name, hk(oT)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, cT.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, cT.jsxs)("div", {
                                  children: [(0, cT.jsx)("dt", {
                                    children: "Type"
                                  }), (0, cT.jsx)("dd", {
                                    children: (0, cT.jsx)(uo, {
                                      type: oT.type
                                    })
                                  })]
                                }), null !== oT.defaultValue && (0, cT.jsxs)("div", {
                                  children: [(0, cT.jsx)("dt", {
                                    children: "Default"
                                  }), (0, cT.jsx)("dd", {
                                    children: (0, cT.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [kT && (0, cT.jsx)(Ao, {
                                        colour: kT
                                      }), oT.defaultValue]
                                    })
                                  })]
                                }), null !== oT.example && (0, cT.jsxs)("div", {
                                  children: [(0, cT.jsx)("dt", {
                                    children: "Example"
                                  }), (0, cT.jsx)("dd", {
                                    children: (0, cT.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: oT.example
                                    })
                                  })]
                                })]
                              }), oT.description.length > 0 && (0, cT.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, cT.jsx)(KI, {
                                  blocks: oT.description
                                })
                              }), (0, cT.jsx)(Ak, {
                                pageId: IT,
                                anchor: iT
                              })]
                            })
                          }

                          function mk(TT) {
                            let {
                              section: oT
                            } = TT;
                            return (0, cT.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, cT.jsx)(DI, {
                                level: 2,
                                text: oT.heading.text,
                                anchor: oT.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, cT.jsx)("div", {
                                className: "DocsProse",
                                children: (0, cT.jsx)(KI, {
                                  blocks: oT.blocks
                                })
                              })]
                            })
                          }

                          function ek(TT) {
                            let {
                              section: oT
                            } = TT;
                            return (0, cT.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, cT.jsx)(DI, {
                                level: oT.heading.level,
                                text: oT.heading.text,
                                anchor: oT.heading.anchor
                              }), (0, cT.jsx)(KI, {
                                blocks: oT.blocks
                              })]
                            })
                          }
                          const Rk = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function uk(TT) {
                            let {
                              page: oT,
                              section: IT
                            } = TT;
                            if ("methods" === oT.layout || "callbacks" === oT.layout) return (0, cT.jsx)(gk, {
                              method: uI(IT),
                              pageId: oT.id,
                              anchor: IT.heading.anchor,
                              isCallback: "callbacks" === oT.layout
                            });
                            if ("settings" === oT.layout) {
                              const TT = function(TT) {
                                const oT = {
                                  name: TT.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const iT of TT.blocks) {
                                  var IT;
                                  if (RI(iT)) continue;
                                  const TT = "paragraph" === iT.kind ? iT.text.match(vI) : null;
                                  if (!TT) {
                                    oT.description.push(iT);
                                    continue
                                  }
                                  const zT = null !== (IT = eI(TT[2])) && void 0 !== IT ? IT : TT[2];
                                  "Type" === TT[1] ? oT.type = zT : "Default" === TT[1] ? oT.defaultValue = zT : "" !== zT && (oT.example = zT)
                                }
                                return oT.type ? oT : null
                              }(IT);
                              if (TT) return (0, cT.jsx)(wk, {
                                setting: TT,
                                pageId: oT.id,
                                anchor: IT.heading.anchor,
                                setterSnippet: oT.setterSnippet
                              })
                            }
                            return "snippets" === oT.layout ? (0, cT.jsx)(mk, {
                              section: IT
                            }) : "changelog" === oT.layout ? (0, cT.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, cT.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, cT.jsx)(DI, {
                                  level: 2,
                                  text: IT.heading.text,
                                  anchor: IT.heading.anchor
                                })
                              }), (0, cT.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, cT.jsx)(KI, {
                                  blocks: EI(IT.blocks)
                                })
                              })]
                            }) : oT.gallery ? (0, cT.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, cT.jsx)(DI, {
                                level: IT.heading.level,
                                text: IT.heading.text,
                                anchor: IT.heading.anchor
                              }), (0, cT.jsx)(Ci, {
                                kind: oT.gallery,
                                content: qT(oT),
                                blocks: IT.blocks
                              })]
                            }) : (0, cT.jsx)(ek, {
                              section: IT
                            })
                          }

                          function vk(TT) {
                            let {
                              page: oT,
                              onTocChange: IT
                            } = TT;
                            const zT = qT(oT),
                              [kT, WT] = (0, iT.useState)(""),
                              XT = "article" !== oT.layout,
                              BT = AI(oT.gallery) ? oT.gallery : null,
                              FT = null !== BT,
                              ST = kT.trim().toLowerCase(),
                              DT = (0, iT.useRef)(null),
                              LT = (0, iT.useCallback)((TT => {
                                var oT;
                                null === (oT = DT.current) || void 0 === oT || oT.preview(TT)
                              }), []),
                              xT = (0, iT.useMemo)((() => {
                                if (!oT.hasParticlePlayground) return [];
                                const TT = JI(zT.intro).find((TT => "names" === TT.kind && !TT.names.some((TT => null !== ZI(TT.name)))));
                                return "names" === (null === TT || void 0 === TT ? void 0 : TT.kind) ? TT.names.map((TT => TT.name)) : []
                              }), [oT, zT]),
                              KT = (0, iT.useMemo)((() => {
                                if (!oT.hasTextPlayground) return [];
                                const TT = zT.sections.flatMap((TT => TT.blocks.flatMap((TT => {
                                  var oT;
                                  return (null !== (oT = jI(TT)) && void 0 !== oT ? oT : []).flatMap((TT => no(TT.name) ? [TT.name] : []))
                                }))));
                                return [...new Set(TT)]
                              }), [oT, zT]),
                              MT = (0, iT.useMemo)((() => ST ? zT.sections.filter((TT => function(TT, oT) {
                                return !!TT.heading.text.toLowerCase().includes(oT) || TT.blocks.some((TT => (0, RT.f)(TT).toLowerCase().includes(oT)))
                              }(TT, ST))) : zT.sections), [zT, ST]),
                              rT = (0, iT.useMemo)((() => function(TT, oT) {
                                return "article" !== TT.layout ? oT.map((TT => ({
                                  anchor: TT.heading.anchor,
                                  text: TT.heading.text,
                                  level: 2
                                }))) : oT.flatMap((TT => {
                                  const oT = TT.blocks.flatMap((TT => "heading" === TT.kind && 3 === TT.level ? [{
                                    anchor: TT.anchor,
                                    text: TT.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: TT.heading.anchor,
                                    text: TT.heading.text,
                                    level: 2
                                  }, ...oT]
                                }))
                              }(oT, MT)), [oT, MT]);
                            return (0, iT.useEffect)((() => {
                              IT(rT)
                            }), [rT, IT]), (0, cT.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, cT.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, cT.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: zT.title || oT.title
                                }), (0, cT.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: oT.summary
                                }), (0, cT.jsx)(di, {
                                  page: oT
                                }), XT && (0, cT.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, cT.jsxs)("span", {
                                    children: [(0, cT.jsx)("strong", {
                                      children: zT.sections.length
                                    }), " ", Rk[oT.layout]]
                                  })
                                })]
                              }), "" === oT.slug && (0, cT.jsx)(Ji, {}), BT && (0, cT.jsx)(Qi, {
                                kind: BT
                              }, BT), oT.hasParticlePlayground && (0, cT.jsx)(Dz, {
                                ref: DT,
                                textures: xT
                              }), !FT && zT.intro.length > 0 && (0, cT.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: oT.gallery ? (0, cT.jsx)(gi.Provider, {
                                  value: oT.hasParticlePlayground ? LT : null,
                                  children: (0, cT.jsx)(Ci, {
                                    kind: oT.gallery,
                                    content: zT,
                                    blocks: zT.intro
                                  })
                                }) : (0, cT.jsx)(KI, {
                                  blocks: EI(zT.intro)
                                })
                              }), oT.hasTextPlayground && (0, cT.jsx)(Ez, {
                                fontAwesomeIcons: KT
                              }), oT.hasVoicePlayground && (0, cT.jsx)(Tk, {}), oT.childPageIds && (0, cT.jsx)(Ji, {
                                cards: oT.childPageIds.map((TT => ({
                                  pageId: TT
                                }))),
                                label: oT.title
                              }), XT && (0, cT.jsx)(wI, {
                                className: "DocsFilterBar",
                                value: kT,
                                placeholder: `Filter ${zT.sections.length} ${Rk[oT.layout]}\u2026`,
                                label: `Filter ${Rk[oT.layout]}`,
                                onChange: WT,
                                count: ST ? {
                                  visible: MT.length,
                                  total: zT.sections.length
                                } : null
                              }), !FT && (0, cT.jsxs)("div", {
                                className: `DocsSections Layout-${oT.layout}`,
                                children: [MT.map((TT => (0, cT.jsx)(uk, {
                                  page: oT,
                                  section: TT
                                }, TT.heading.anchor))), 0 === MT.length && (0, cT.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", Rk[oT.layout], " match \u201c", kT, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const Ek = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function fk(TT) {
                            let {
                              entry: oT,
                              isActive: IT,
                              onNavigate: iT,
                              label: zT,
                              children: WT
                            } = TT;
                            return (0, cT.jsx)("a", {
                              href: `#${oT.anchor}`,
                              "aria-label": zT,
                              className: kT()(`Level${oT.level}`, {
                                Active: IT
                              }),
                              "aria-current": IT ? "location" : void 0,
                              onClick: TT => {
                                TT.preventDefault(), iT(oT.anchor)
                              },
                              children: WT
                            })
                          }

                          function Ck(TT) {
                            let {
                              toc: oT,
                              activeAnchor: IT,
                              onNavigate: zT
                            } = TT;
                            const WT = Math.max(0, oT.findIndex((TT => TT.anchor === IT))),
                              XT = (0, iT.useRef)(null),
                              BT = (0, iT.useRef)(!1);
                            (0, iT.useEffect)((() => {
                              var TT, IT;
                              const iT = null === (TT = XT.current) || void 0 === TT ? void 0 : TT.closest(".DocsToc"),
                                zT = null === (IT = XT.current) || void 0 === IT ? void 0 : IT.querySelector(".DocsTimelineNotch.Active");
                              if (!iT || !zT) return;
                              let kT = 0;
                              if (WT === oT.length - 1) kT = iT.scrollHeight;
                              else if (WT > 0) {
                                const TT = iT.getBoundingClientRect(),
                                  oT = zT.getBoundingClientRect();
                                kT = iT.scrollTop + oT.top + oT.height / 2 - (TT.top + iT.clientHeight / 2)
                              }
                              iT.scrollTo({
                                top: kT,
                                behavior: BT.current ? "smooth" : "auto"
                              }), BT.current = !0
                            }), [WT, oT.length]);
                            const FT = [];
                            return oT.forEach(((TT, oT) => {
                              var IT, iT, zT;
                              const kT = function(TT) {
                                  const oT = TT.trim().match(Ek);
                                  return oT ? {
                                    day: oT[1],
                                    month: `${oT[2]} ${oT[3]}`
                                  } : null
                                }(TT.text),
                                WT = null !== (IT = null === kT || void 0 === kT ? void 0 : kT.month) && void 0 !== IT ? IT : null;
                              null !== WT && (null === (iT = FT.at(-1)) || void 0 === iT ? void 0 : iT.month) === WT || FT.push({
                                month: WT,
                                entries: []
                              }), FT.at(-1).entries.push({
                                entry: TT,
                                day: null !== (zT = null === kT || void 0 === kT ? void 0 : kT.day) && void 0 !== zT ? zT : null,
                                index: oT
                              })
                            })), (0, cT.jsx)("ol", {
                              ref: XT,
                              className: "DocsTimeline",
                              children: FT.map((TT => {
                                let {
                                  month: oT,
                                  entries: IT
                                } = TT;
                                return (0, cT.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [oT && (0, cT.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: oT
                                  }), (0, cT.jsx)("ol", {
                                    children: IT.map((TT => {
                                      let {
                                        entry: oT,
                                        day: IT,
                                        index: iT
                                      } = TT;
                                      return (0, cT.jsx)("li", {
                                        className: kT()("DocsTimelineNotch", {
                                          Passed: iT < WT,
                                          Active: iT === WT
                                        }),
                                        children: (0, cT.jsx)(fk, {
                                          entry: oT,
                                          isActive: iT === WT,
                                          onNavigate: zT,
                                          label: oT.text,
                                          children: (0, cT.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== IT && void 0 !== IT ? IT : oT.text
                                          })
                                        })
                                      }, oT.anchor)
                                    }))
                                  })]
                                }, IT[0].entry.anchor)
                              }))
                            })
                          }

                          function jk(TT) {
                            let {
                              isChangelog: oT,
                              toc: IT,
                              activeAnchor: iT,
                              onNavigate: zT
                            } = TT;
                            return 0 === IT.length ? null : (0, cT.jsxs)(cT.Fragment, {
                              children: [(0, cT.jsx)("div", {
                                className: "DocsTocTitle",
                                children: oT ? "Updates" : "On this page"
                              }), oT ? (0, cT.jsx)(Ck, {
                                toc: IT,
                                activeAnchor: iT,
                                onNavigate: zT
                              }) : (0, cT.jsx)("ul", {
                                children: IT.map((TT => (0, cT.jsx)("li", {
                                  children: (0, cT.jsx)(fk, {
                                    entry: TT,
                                    isActive: TT.anchor === iT,
                                    onNavigate: zT,
                                    children: TT.text.replace(/`/g, "")
                                  })
                                }, TT.anchor)))
                              })]
                            })
                          }
                          const Jk = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            Uk = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            ak = 20,
                            Yk = 10,
                            Qk = 40,
                            Ok = 120;
                          let Hk;

                          function nk(TT) {
                            const oT = TT.gallery;
                            if (!oT) return [];
                            if (AI(oT)) return function(TT) {
                              return hI(TT).entries.map((TT => TT.name))
                            }(oT).map((IT => ({
                              page: TT,
                              anchor: aI(oT, IT),
                              title: IT,
                              kind: Uk[oT],
                              text: "",
                              listedUnder: TT.title
                            })));
                            const IT = qT(TT);
                            return (0, RT.s)(IT).flatMap((iT => {
                              const zT = iT.heading ? `${TT.title} \u203a ${iT.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : TT.title;
                              return QI(oT, IT, iT.blocks).flatMap((IT => "names" !== IT.kind ? [] : IT.names.map((iT => {
                                const kT = IT.isSongs ? "Song" : Uk[oT];
                                return {
                                  page: TT,
                                  anchor: iT.anchor,
                                  title: iT.name,
                                  kind: kT,
                                  text: "",
                                  listedUnder: zT
                                }
                              }))))
                            }))
                          }

                          function qk(TT, oT, IT) {
                            const iT = TT.title.toLowerCase();
                            let zT = 0;
                            if (iT === oT) zT = 100;
                            else if (iT.startsWith(oT)) zT = 80;
                            else if (iT.includes(oT)) zT = 60;
                            else if (IT.every((TT => iT.includes(TT)))) zT = 45;
                            else {
                              if (!TT.text.toLowerCase().includes(oT)) return 0;
                              zT = 20
                            }
                            return zT - Math.min(iT.length / 10, 9) + ("Page" === TT.kind ? 8 : "Method" === TT.kind ? 3 : 0) - (TT.listedUnder ? ak : 0)
                          }

                          function Zk(TT, oT) {
                            const IT = TT.toLowerCase().indexOf(oT),
                              iT = Math.max(0, IT - Ok / 3);
                            return `${iT>0?"\u2026":""}${TT.slice(iT,iT+Ok)}${iT+Ok<TT.length?"\u2026":""}`
                          }

                          function lk(TT) {
                            let {
                              text: oT,
                              query: IT
                            } = TT;
                            const iT = IT ? oT.toLowerCase().indexOf(IT) : -1;
                            return -1 === iT ? (0, cT.jsx)(cT.Fragment, {
                              children: oT
                            }) : (0, cT.jsxs)(cT.Fragment, {
                              children: [oT.slice(0, iT), (0, cT.jsx)("mark", {
                                children: oT.slice(iT, iT + IT.length)
                              }), oT.slice(iT + IT.length)]
                            })
                          }

                          function sk(TT) {
                            let {
                              basePath: oT,
                              onClose: IT
                            } = TT;
                            const zT = (0, XT.w)(),
                              [WT, BT] = (0, iT.useState)(""),
                              [FT, ST] = (0, iT.useState)(0),
                              DT = (0, iT.useRef)(null),
                              LT = (0, iT.useRef)(null),
                              xT = WT.trim().toLowerCase(),
                              KT = (0, iT.useMemo)((() => {
                                const TT = (Hk || (Hk = QT.flatMap((TT => {
                                  const oT = qT(TT);
                                  return [{
                                    page: TT,
                                    anchor: "",
                                    title: TT.title,
                                    kind: "Page",
                                    text: TT.summary
                                  }, ...oT.sections.flatMap((oT => {
                                    const IT = oT.blocks.filter((TT => "paragraph" === TT.kind)).map(RT.f).join(" ").replace(/[`*]/g, ""),
                                      iT = {
                                        page: TT,
                                        anchor: oT.heading.anchor,
                                        title: oT.heading.text.replace(/`/g, ""),
                                        kind: Jk[TT.layout],
                                        text: IT
                                      },
                                      zT = oT.blocks.flatMap((oT => "article" === TT.layout && "heading" === oT.kind && 3 === oT.level ? [{
                                        page: TT,
                                        anchor: oT.anchor,
                                        title: oT.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: iT.title
                                      }] : []));
                                    return [iT, ...zT]
                                  })), ...nk(TT)]
                                }))), Hk);
                                if (!xT) return TT.filter((TT => "Page" === TT.kind));
                                const oT = xT.split(/\s+/);
                                let IT = 0;
                                return TT.map((TT => ({
                                  entry: TT,
                                  score: qk(TT, xT, oT)
                                }))).filter((TT => TT.score > 0)).sort(((TT, oT) => oT.score - TT.score)).filter((TT => !TT.entry.listedUnder || (IT++, IT <= Yk))).slice(0, Qk).map((TT => TT.entry))
                              }), [xT]);
                            (0, iT.useEffect)((() => {
                              ST(0)
                            }), [xT]), (0, iT.useEffect)((() => {
                              const TT = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === TT || void 0 === TT || TT.focus()
                              }
                            }), []), (0, iT.useEffect)((() => {
                              var TT, oT;
                              null === (TT = DT.current) || void 0 === TT || null === (oT = TT.querySelector(".Active")) || void 0 === oT || oT.scrollIntoView({
                                block: "nearest"
                              })
                            }), [FT]);
                            const rT = TT => {
                              zT(tT(oT, TT.page, TT.anchor)), IT()
                            };
                            return (0, cT.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: TT => {
                                TT.target === TT.currentTarget && IT()
                              },
                              children: (0, cT.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: TT => {
                                  TT.target !== LT.current && TT.preventDefault()
                                },
                                onKeyDown: TT => {
                                  if ("Escape" === TT.key) IT();
                                  else if ("Tab" === TT.key) {
                                    var oT;
                                    TT.preventDefault(), null === (oT = LT.current) || void 0 === oT || oT.focus()
                                  }
                                },
                                children: [(0, cT.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, cT.jsx)(MT, {
                                    name: "magnifying-glass"
                                  }), (0, cT.jsx)("input", {
                                    ref: LT,
                                    autoFocus: !0,
                                    value: WT,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": KT.length > 0 ? `DocsSearchResult-${FT}` : void 0,
                                    onChange: TT => {
                                      BT(TT.target.value)
                                    },
                                    onKeyDown: TT => {
                                      if ("ArrowDown" === TT.key || "ArrowUp" === TT.key) {
                                        TT.preventDefault();
                                        const oT = "ArrowDown" === TT.key ? 1 : -1;
                                        ST((FT + oT + KT.length) % Math.max(KT.length, 1))
                                      } else "Enter" === TT.key && KT[FT] && rT(KT[FT])
                                    }
                                  }), (0, cT.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, cT.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: DT,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!xT && (0, cT.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), KT.map(((TT, oT) => {
                                    var IT;
                                    return (0, cT.jsxs)("li", {
                                      id: `DocsSearchResult-${oT}`,
                                      role: "option",
                                      "aria-selected": oT === FT,
                                      className: kT()("DocsSearchResult", {
                                        Active: oT === FT
                                      }),
                                      onMouseMove: () => {
                                        ST(oT)
                                      },
                                      onClick: () => {
                                        rT(TT)
                                      },
                                      children: [(0, cT.jsx)(MT, {
                                        name: TT.page.icon
                                      }), (0, cT.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, cT.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, cT.jsx)(lk, {
                                            text: TT.title,
                                            query: xT
                                          })
                                        }), TT.text && (0, cT.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, cT.jsx)(lk, {
                                            text: Zk(TT.text, xT),
                                            query: xT
                                          })
                                        })]
                                      }), (0, cT.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === TT.kind ? "Page" : null !== (IT = TT.listedUnder) && void 0 !== IT ? IT : `${TT.kind} \xb7 ${TT.page.title}`
                                      })]
                                    }, `${TT.page.id}#${TT.anchor}`)
                                  })), xT && 0 === KT.length && (0, cT.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", WT, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function tk(TT, oT) {
                            if (oT < 10) return `${TT.toFixed(1)}s`;
                            const IT = Math.floor(TT);
                            return `${Math.floor(IT/60)}:${String(IT%60).padStart(2,"0")}`
                          }

                          function Gk() {
                            const TT = Li((TT => TT.track)),
                              oT = Li((TT => TT.volume)),
                              [IT, zT] = (0, iT.useState)(0),
                              WT = (0, iT.useRef)(ii);
                            if ((0, iT.useEffect)((() => {
                                if (!TT) return;
                                if (zT(Mi()), "playing" !== TT.status) return;
                                let oT = 0;
                                const IT = () => {
                                  zT(Mi()), oT = requestAnimationFrame(IT)
                                };
                                return oT = requestAnimationFrame(IT), () => {
                                  cancelAnimationFrame(oT)
                                }
                              }), [TT]), !TT) return null;
                            const XT = "paused" !== TT.status,
                              BT = Math.min(IT, TT.duration);
                            return (0, cT.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, cT.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, cT.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": XT ? `Pause ${TT.name}` : `Play ${TT.name}`,
                                  onClick: Ki,
                                  children: (0, cT.jsx)(MT, {
                                    name: XT ? "pause" : "play"
                                  })
                                }), (0, cT.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, cT.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, cT.jsx)("code", {
                                      children: TT.name
                                    }), (0, cT.jsx)("span", {
                                      children: TT.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, cT.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, cT.jsx)("span", {
                                      children: tk(BT, TT.duration)
                                    }), (0, cT.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: TT.duration || 1,
                                      step: .01,
                                      value: BT,
                                      disabled: 0 === TT.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${tk(BT,TT.duration)} of ${tk(TT.duration,TT.duration)}`,
                                      onChange: TT => {
                                        const oT = Number(TT.target.value);
                                        ! function(TT) {
                                          var oT;
                                          Bi = TT, null === (oT = Wi) || void 0 === oT || oT.seek(TT)
                                        }(oT), zT(oT)
                                      }
                                    }), (0, cT.jsx)("span", {
                                      children: TT.duration > 0 ? tk(TT.duration, TT.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, cT.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, cT.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === oT ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === oT ? ri(WT.current) : (WT.current = oT, ri(0))
                                    },
                                    children: (0, cT.jsx)(MT, {
                                      name: "volume",
                                      className: kT()({
                                        Muted: 0 === oT
                                      })
                                    })
                                  }), (0, cT.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: oT,
                                    "aria-label": "Volume",
                                    onChange: TT => {
                                      ri(Number(TT.target.value))
                                    }
                                  })]
                                }), (0, cT.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var oT;
                                    null === (oT = document.querySelector(`[data-docs-track="${CSS.escape(zi(TT.name,TT.isSong))}"]`)) || void 0 === oT || oT.focus(), Ai()
                                  },
                                  children: (0, cT.jsx)(MT, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var pk = IT(26);
                          const bk = "docsTheme",
                            yk = window.matchMedia("(prefers-color-scheme: light)");

                          function Nk(TT) {
                            let {
                              theme: oT,
                              onChange: IT
                            } = TT;
                            const iT = "dark" === oT ? "light" : "dark";
                            return (0, cT.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${iT} theme`,
                              title: `Switch to ${iT} theme`,
                              onClick: () => {
                                IT(iT)
                              },
                              children: (0, cT.jsx)(MT, {
                                name: "dark" === oT ? "moon" : "sun"
                              })
                            })
                          }
                          const Pk = "https://github.com/Bloxdy/code-api",
                            dk = "https://discord.gg/playbloxd",
                            Vk = 180,
                            TW = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function oW(TT) {
                            let {
                              basePath: oT,
                              activePageId: IT,
                              onNavigate: iT
                            } = TT;
                            return (0, cT.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: OT.map((TT => (0, cT.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, cT.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: TT.title
                                }), TT.pageIds.map((TT => {
                                  var zT;
                                  const XT = HT(TT);
                                  return (0, cT.jsxs)(WT.b, {
                                    to: tT(oT, XT),
                                    className: kT()("DocsNavLink", {
                                      Active: XT.id === IT
                                    }),
                                    "aria-current": XT.id === IT ? "page" : void 0,
                                    onClick: iT,
                                    children: [(0, cT.jsx)(MT, {
                                      name: XT.icon
                                    }), (0, cT.jsx)("span", {
                                      children: null !== (zT = XT.navTitle) && void 0 !== zT ? zT : XT.title
                                    })]
                                  }, XT.id)
                                }))]
                              }, TT.title)))
                            })
                          }

                          function IW(TT) {
                            let {
                              basePath: oT,
                              pageId: IT
                            } = TT;
                            const iT = OT.flatMap((TT => TT.pageIds)),
                              zT = iT.indexOf(IT),
                              kT = zT > 0 ? HT(iT[zT - 1]) : null,
                              XT = zT < iT.length - 1 ? HT(iT[zT + 1]) : null;
                            return (0, cT.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [kT ? (0, cT.jsxs)(WT.b, {
                                className: "DocsPagerLink Previous",
                                to: tT(oT, kT),
                                children: [(0, cT.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, cT.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: kT.title
                                })]
                              }) : (0, cT.jsx)("span", {}), XT && (0, cT.jsxs)(WT.b, {
                                className: "DocsPagerLink Next",
                                to: tT(oT, XT),
                                children: [(0, cT.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, cT.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: XT.title
                                })]
                              })]
                            })
                          }

                          function iW(TT) {
                            let {
                              basePath: oT,
                              embedded: IT = !1
                            } = TT;
                            const {
                              pageSlug: zT = ""
                            } = (0, XT.C)(), FT = (0, XT.t)(), ST = (0, XT.w)(), DT = (LT = zT, QT.find((TT => TT.slug === LT)));
                            var LT;
                            const [xT, KT] = function() {
                              const [TT, oT] = (0, iT.useState)((() => {
                                const TT = pk.e.getItem(bk);
                                return "dark" === TT || "light" === TT ? TT : null
                              })), [IT, zT] = (0, iT.useState)(yk.matches ? "light" : "dark");
                              return (0, iT.useEffect)((() => {
                                const TT = () => {
                                  zT(yk.matches ? "light" : "dark")
                                };
                                return yk.addEventListener("change", TT), () => {
                                  yk.removeEventListener("change", TT)
                                }
                              }), []), [null !== TT && void 0 !== TT ? TT : IT, TT => {
                                pk.e.setItem(bk, TT), oT(TT)
                              }]
                            }(), [rT, AT] = (0, iT.useState)(null), [gT, hT] = (0, iT.useState)(!1), [wT, mT] = (0, iT.useState)(!1), [eT, uT] = (0, iT.useState)([]), vT = function(TT, oT) {
                              const [IT, zT] = (0, iT.useState)("");
                              return (0, iT.useEffect)((() => {
                                if (!oT) return;
                                let IT = 0;
                                const iT = () => {
                                    var iT, kT;
                                    IT = 0;
                                    const WT = oT.getBoundingClientRect().top + Vk;
                                    let XT = null !== (iT = null === (kT = TT[0]) || void 0 === kT ? void 0 : kT.anchor) && void 0 !== iT ? iT : "";
                                    for (const oT of TT) {
                                      const TT = document.getElementById(oT.anchor);
                                      TT && TT.getBoundingClientRect().top <= WT && (XT = oT.anchor)
                                    }
                                    oT.scrollTop + oT.clientHeight >= oT.scrollHeight - 2 && oT.scrollTop > 0 && TT.length > 0 && (XT = TT[TT.length - 1].anchor), zT(XT)
                                  },
                                  kT = () => {
                                    IT || (IT = requestAnimationFrame(iT))
                                  };
                                return iT(), oT.addEventListener("scroll", kT, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(IT), oT.removeEventListener("scroll", kT)
                                }
                              }), [TT, oT]), IT
                            }(eT, rT), ET = "" === zT && FT.hash ? function(TT) {
                              const oT = (0, RT.p)(TT);
                              if (ZT(HT("welcome"), oT)) return null;
                              const IT = Object.hasOwn(sT, oT) ? sT[oT] : null;
                              if (IT) return {
                                page: HT(IT.pageId),
                                anchor: IT.anchor
                              };
                              const iT = HT("readme");
                              return ZT(iT, oT) ? {
                                page: iT,
                                anchor: oT
                              } : lT(`#${oT}`)
                            }(FT.hash) : null;
                            (0, iT.useEffect)((() => (BT.c.set({
                              musicOnFromPage: !1
                            }), () => {
                              BT.c.set({
                                musicOnFromPage: !0
                              }), Ai()
                            })), []), (0, iT.useEffect)((() => {
                              const TT = TT => {
                                const oT = TT.target;
                                if (oT.closest(".DocsTextDialog")) return;
                                const IT = oT.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(oT.tagName);
                                "k" === TT.key && (TT.metaKey || TT.ctrlKey) || "/" === TT.key && !IT ? (TT.preventDefault(), mT(!0)) : "Escape" === TT.key && hT(!1)
                              };
                              return window.addEventListener("keydown", TT), () => {
                                window.removeEventListener("keydown", TT)
                              }
                            }), []);
                            const fT = (0, iT.useRef)(null);
                            (0, iT.useLayoutEffect)((() => {
                              var TT, oT;
                              if (!rT) return;
                              const IT = fT.current === FT.pathname;
                              fT.current = FT.pathname;
                              const iT = (0, RT.p)(FT.hash),
                                zT = iT ? document.getElementById(iT) : null;
                              if (null === (TT = rT.querySelector(".DocsTargeted")) || void 0 === TT || TT.classList.remove("DocsTargeted"), null === zT || void 0 === zT || null === (oT = zT.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === oT || oT.classList.add("DocsTargeted"), zT) {
                                var kT;
                                const TT = zT.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (kT = zT.closest(".DocsChangelogEntry")) && void 0 !== kT ? kT : zT).scrollIntoView({
                                  block: TT ? "center" : "start",
                                  behavior: IT ? "smooth" : "auto"
                                })
                              } else IT || rT.scrollTo({
                                top: 0
                              })
                            }), [rT, FT.pathname, FT.hash, FT.key]);
                            const CT = (0, iT.useCallback)((() => {
                                hT(!1)
                              }), []),
                              jT = (0, iT.useCallback)((TT => {
                                ST({
                                  hash: TT
                                })
                              }), [ST]);
                            if (ET) return (0, cT.jsx)(XT.c, {
                              replace: !0,
                              to: tT(oT, ET.page, ET.anchor)
                            });
                            if (!DT) return (0, cT.jsx)(XT.c, {
                              replace: !0,
                              to: oT
                            });
                            const JT = IT ? "div" : "main";
                            return (0, cT.jsx)(xo.Provider, {
                              value: oT,
                              children: (0, cT.jsx)(co.Provider, {
                                value: rT,
                                children: (0, cT.jsxs)("div", {
                                  ref: AT,
                                  className: kT()("DocsSite", {
                                    Embedded: IT,
                                    NavOpen: gT
                                  }),
                                  "data-theme": xT,
                                  children: [(0, cT.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, cT.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": gT ? "Close menu" : "Open menu",
                                      "aria-expanded": gT,
                                      onClick: () => {
                                        hT(!gT)
                                      },
                                      children: (0, cT.jsx)(MT, {
                                        name: gT ? "cross" : "menu"
                                      })
                                    }), (0, cT.jsxs)(WT.b, {
                                      to: oT,
                                      className: "DocsBrand",
                                      children: [(0, cT.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, cT.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, cT.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, cT.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        mT(!0)
                                      },
                                      children: [(0, cT.jsx)(MT, {
                                        name: "magnifying-glass"
                                      }), (0, cT.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, cT.jsxs)("kbd", {
                                        children: [TW ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, cT.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, cT.jsxs)("a", {
                                        href: dk,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, cT.jsx)(MT, {
                                          name: "discord"
                                        }), (0, cT.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, cT.jsxs)("a", {
                                        href: Pk,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, cT.jsx)(MT, {
                                          name: "external-link"
                                        }), (0, cT.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !IT && (0, cT.jsxs)(WT.b, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, cT.jsx)(MT, {
                                          name: "play"
                                        }), (0, cT.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, cT.jsx)(Nk, {
                                        theme: xT,
                                        onChange: KT
                                      })]
                                    })]
                                  }), (0, cT.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, cT.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, cT.jsx)(oW, {
                                        basePath: oT,
                                        activePageId: DT.id,
                                        onNavigate: CT
                                      })
                                    }), (0, cT.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: CT
                                    }), (0, cT.jsxs)(JT, {
                                      className: "DocsMain",
                                      children: [(0, cT.jsx)(vk, {
                                        page: DT,
                                        onTocChange: uT
                                      }, DT.id), (0, cT.jsx)(IW, {
                                        basePath: oT,
                                        pageId: DT.id
                                      })]
                                    }), (0, cT.jsx)("aside", {
                                      className: kT()("DocsToc", {
                                        Timeline: "changelog" === DT.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, cT.jsx)(jk, {
                                        isChangelog: "changelog" === DT.layout,
                                        toc: eT,
                                        activeAnchor: vT,
                                        onNavigate: jT
                                      })
                                    })]
                                  }), (0, cT.jsx)(Gk, {}), wT && (0, cT.jsx)(sk, {
                                    basePath: oT,
                                    onClose: () => {
                                      mT(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4229: (TT, oT, IT) => {
                          IT.d(oT, {
                            c: () => iT,
                            e: () => WT,
                            f: () => MT,
                            j: () => KT,
                            l: () => XT,
                            p: () => zT,
                            r: () => kT,
                            s: () => cT,
                            v: () => xT,
                            y: () => LT
                          });
                          const iT = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function zT(TT) {
                            try {
                              return decodeURIComponent(TT.slice(1))
                            } catch {
                              return TT.slice(1)
                            }
                          }

                          function kT(TT) {
                            return TT.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const WT = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${iT.source}`, "g");

                          function XT(TT, oT) {
                            return 2 === TT.length ? oT.replace(/^ (.*) $/, "$1") : oT
                          }

                          function BT(TT) {
                            return "" === TT.trim()
                          }

                          function FT(TT) {
                            const oT = [];
                            for (const IT of TT.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) oT.length > 0 && oT[oT.length - 1].endsWith("\\") ? oT[oT.length - 1] += `|${IT}` : oT.push(IT);
                            return oT.map((TT => TT.trim().replaceAll("\\|", "|")))
                          }
                          const ST = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function DT(TT) {
                            const oT = [],
                              IT = [{
                                indent: -1,
                                items: oT
                              }];
                            let iT = null;
                            for (const zT of TT) {
                              const TT = zT.match(ST);
                              if (!TT) {
                                iT && (iT.text += ` ${zT.trim()}`);
                                continue
                              }
                              const oT = TT[1].replace(/\t/g, "  ").length;
                              for (; oT <= IT[IT.length - 1].indent;) IT.pop();
                              iT = {
                                text: TT[3].trim(),
                                children: []
                              }, IT[IT.length - 1].items.push(iT), IT.push({
                                indent: oT,
                                items: iT.children
                              })
                            }
                            return oT
                          }

                          function LT(TT) {
                            const oT = TT.replace(/\r\n/g, "\n").split("\n"),
                              IT = [];
                            let iT = 0;
                            for (; iT < oT.length;) {
                              const TT = oT[iT];
                              if (BT(TT)) {
                                iT++;
                                continue
                              }
                              const zT = TT.match(/^\s*```\s*(\w*)\s*$/);
                              if (zT) {
                                const TT = [];
                                for (iT++; iT < oT.length && !/^\s*```\s*$/.test(oT[iT]);) TT.push(oT[iT]), iT++;
                                iT++, IT.push({
                                  kind: "code",
                                  lang: zT[1] || "text",
                                  code: TT.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const WT = TT.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (WT) {
                                const TT = WT[2].trim();
                                IT.push({
                                  kind: "heading",
                                  level: WT[1].length,
                                  text: TT,
                                  anchor: kT(TT)
                                }), iT++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(TT)) {
                                IT.push({
                                  kind: "rule"
                                }), iT++;
                                continue
                              }
                              if (TT.trim().startsWith("|") && iT + 1 < oT.length && /^\s*\|[\s:|-]+\|\s*$/.test(oT[iT + 1])) {
                                const zT = FT(TT),
                                  kT = [];
                                for (iT += 2; iT < oT.length && oT[iT].trim().startsWith("|");) kT.push(FT(oT[iT])), iT++;
                                IT.push({
                                  kind: "table",
                                  header: zT,
                                  rows: kT
                                });
                                continue
                              }
                              if (TT.startsWith(">")) {
                                const TT = [];
                                for (; iT < oT.length && oT[iT].startsWith(">");) TT.push(oT[iT].replace(/^>\s?/, "")), iT++;
                                IT.push({
                                  kind: "quote",
                                  blocks: LT(TT.join("\n"))
                                });
                                continue
                              }
                              if (ST.test(TT)) {
                                const zT = [],
                                  kT = /^\s*\d+\./.test(TT);
                                for (; iT < oT.length && !BT(oT[iT]) && (ST.test(oT[iT]) || /^\s+\S/.test(oT[iT]));) zT.push(oT[iT]), iT++;
                                IT.push({
                                  kind: "list",
                                  ordered: kT,
                                  items: DT(zT)
                                });
                                continue
                              }
                              const XT = [];
                              for (; iT < oT.length && !BT(oT[iT]) && !/^\s*```/.test(oT[iT]) && !/^#{1,6}\s/.test(oT[iT]) && !oT[iT].startsWith(">") && !ST.test(oT[iT]) && (!oT[iT].trim().startsWith("|") || 0 !== XT.length);) XT.push(oT[iT].trim()), iT++;
                              0 === XT.length && (XT.push(oT[iT].trim()), iT++), IT.push({
                                kind: "paragraph",
                                text: XT.join(" ")
                              })
                            }
                            return IT
                          }

                          function xT(TT) {
                            let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const IT = LT(TT);
                            let iT = "";
                            const zT = [],
                              kT = [],
                              WT = new Map;
                            for (const FT of IT) {
                              if ("heading" === FT.kind) {
                                var XT;
                                const TT = (null !== (XT = WT.get(FT.anchor)) && void 0 !== XT ? XT : 0) + 1;
                                WT.set(FT.anchor, TT), TT > 1 && (FT.anchor = `${FT.anchor}-${TT}`)
                              }
                              if ("heading" === FT.kind && 1 === FT.level && !iT) {
                                iT = FT.text;
                                continue
                              }
                              if ("heading" === FT.kind && FT.level <= oT) {
                                kT.push({
                                  heading: FT,
                                  blocks: []
                                });
                                continue
                              }
                              const TT = kT.at(-1);
                              TT ? TT.blocks.push(FT) : zT.push(FT)
                            }
                            const BT = TT => {
                              for (;
                                "rule" === (null === (oT = TT.at(-1)) || void 0 === oT ? void 0 : oT.kind);) {
                                var oT;
                                TT.pop()
                              }
                            };
                            BT(zT);
                            for (const FT of kT) BT(FT.blocks);
                            return {
                              title: iT,
                              intro: zT,
                              sections: kT
                            }
                          }

                          function cT(TT) {
                            return [{
                              heading: null,
                              blocks: TT.intro
                            }, ...TT.sections.map((TT => ({
                              heading: TT.heading,
                              blocks: TT.blocks
                            })))]
                          }

                          function KT(TT) {
                            return TT.flatMap((TT => "code" === TT.kind ? [TT] : "quote" === TT.kind ? KT(TT.blocks) : []))
                          }

                          function MT(TT) {
                            switch (TT.kind) {
                              case "heading":
                              case "paragraph":
                                return TT.text;
                              case "code":
                                return TT.code;
                              case "table":
                                return [TT.header, ...TT.rows].map((TT => TT.join(" "))).join(" ");
                              case "list": {
                                const oT = TT => TT.map((TT => `${TT.text} ${oT(TT.children)}`)).join(" ");
                                return oT(TT.items)
                              }
                              case "quote":
                                return TT.blocks.map(MT).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4320: (TT, oT, IT) => {
                          IT.d(oT, {
                            c: () => XT
                          });
                          var iT = IT(46),
                            zT = IT(306),
                            kT = IT(1747),
                            WT = IT(1083);

                          function XT(TT) {
                            let {
                              text: oT
                            } = TT;
                            const IT = [];
                            let XT = "";
                            return (0, zT.ac)(oT).forEach(((TT, oT) => {
                              if ("string" === typeof TT || !(0, kT.g)(TT.icon)) return void(XT += "string" === typeof TT ? TT : TT.icon);
                              const zT = Math.max(0, XT.trimEnd().search(/\S{1,12}$/));
                              IT.push((0, WT.jsxs)(iT.Fragment, {
                                children: [XT.slice(0, zT), (0, WT.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [XT.slice(zT), (0, WT.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": TT.icon,
                                    children: (0, WT.jsx)(kT.c, {
                                      itemName: TT.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, oT)), XT = ""
                            })), IT.push(XT), (0, WT.jsx)(WT.Fragment, {
                              children: IT
                            })
                          }
                        }, 4251: (TT, oT, IT) => {
                          IT.d(oT, {
                            f: () => AT,
                            d: () => rT
                          });
                          var iT = IT(46),
                            zT = IT(1403),
                            kT = IT(1729),
                            WT = IT(4260),
                            XT = IT(1083);
                          const BT = (0, iT.memo)((function(TT) {
                            let {
                              initialParameters: oT
                            } = TT;
                            const IT = (0, iT.useRef)(null),
                              zT = (0, iT.useRef)(null),
                              BT = (0, iT.useRef)(0),
                              FT = (0, iT.useRef)(null),
                              ST = oT.description,
                              DT = oT.yI,
                              {
                                scale: LT,
                                rotation: xT
                              } = null !== oT && void 0 !== oT ? oT : {},
                              cT = (0, WT.g)();
                            return (0, iT.useEffect)((() => {
                              const TT = cT.onFrame((() => {
                                const TT = cT.getState();
                                if (!TT.isActive || !IT.current || !zT.current) return;
                                const oT = TT.state;
                                if (IT.current.value = oT.progress, oT.clickCount > BT.current) {
                                  BT.current = oT.clickCount;
                                  const TT = zT.current;
                                  TT.classList.add("pulse"), FT.current = setTimeout((() => {
                                    TT.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(FT.current), TT()
                              }
                            }), [cT]), (0, XT.jsx)(XT.Fragment, {
                              children: (0, XT.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== LT && {
                                    "--scale": LT
                                  },
                                  ...null !== xT && {
                                    "--rotation": `${xT}deg`
                                  }
                                },
                                children: [(0, XT.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: IT
                                }), (0, XT.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: zT,
                                  children: (0, XT.jsx)(kT.c, {
                                    text: [{
                                      icon: DT
                                    }]
                                  })
                                }), (0, XT.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, XT.jsx)(kT.c, {
                                    text: ST
                                  })
                                })]
                              })
                            })
                          }));
                          var FT = IT(1042),
                            ST = IT.n(FT);
                          const DT = 2 * Math.PI * 90,
                            LT = (0, iT.memo)((function(TT) {
                              let {
                                initialParameters: oT
                              } = TT;
                              const IT = (0, iT.useRef)(null),
                                zT = (0, iT.useRef)(null),
                                BT = (0, iT.useRef)(null),
                                FT = oT.label,
                                LT = oT.icon,
                                xT = oT.VI,
                                {
                                  scale: cT,
                                  rotation: KT,
                                  Ti: MT
                                } = null !== oT && void 0 !== oT ? oT : {},
                                rT = (0, WT.g)();
                              return (0, iT.useEffect)((() => {
                                const TT = rT.onFrame((() => {
                                  var TT, oT;
                                  const iT = rT.getState();
                                  if (!iT.isActive || !zT.current) return;
                                  const kT = iT.state,
                                    WT = null !== (TT = kT.timeRemaining) && void 0 !== TT ? TT : 0,
                                    XT = null !== (oT = kT.dI) && void 0 !== oT ? oT : 1,
                                    FT = DT * (1 - WT / XT);
                                  zT.current.style.strokeDashoffset = `${FT}`, IT.current && (IT.current.style.opacity = WT > 0 ? "1" : "0"), BT.current && xT && (BT.current.textContent = `${(WT/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  TT()
                                }
                              }), [rT, xT]), (0, XT.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: IT,
                                style: {
                                  ...null !== cT && {
                                    "--scale": cT
                                  },
                                  ...null !== KT && {
                                    "--rotation": `${KT}deg`
                                  }
                                },
                                children: [(0, XT.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, XT.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, XT.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, XT.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: DT,
                                      ref: zT
                                    })]
                                  }), (0, XT.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, XT.jsx)(kT.c, {
                                      text: [{
                                        icon: LT
                                      }],
                                      className: ST()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: MT
                                      })
                                    })
                                  })]
                                }), (0, XT.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, XT.jsx)(kT.c, {
                                    text: FT,
                                    className: "QTETimedClickLabelText"
                                  }), xT && (0, XT.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: BT
                                  })]
                                })]
                              })
                            })),
                            xT = (0, iT.memo)((function(TT) {
                              let {
                                initialParameters: oT
                              } = TT;
                              const IT = (0, iT.useRef)(null),
                                zT = (0, iT.useRef)(null),
                                BT = (0, iT.useRef)(null),
                                FT = (0, iT.useRef)(!1),
                                ST = oT.description,
                                DT = null === oT || void 0 === oT ? void 0 : oT.icon,
                                LT = (0, WT.g)();
                              return (0, iT.useEffect)((() => {
                                const TT = LT.onFrame((() => {
                                  const TT = LT.getState();
                                  if (!TT.isActive) return;
                                  const oT = TT.state;
                                  if (IT.current) {
                                    const TT = 100 * (oT.catchZonePosition - oT.Ii / 2);
                                    IT.current.style.left = `${TT}%`, IT.current.style.width = 100 * oT.Ii + "%", oT.isCatching !== FT.current && (FT.current = oT.isCatching, oT.isCatching ? IT.current.classList.add("catching") : IT.current.classList.remove("catching"))
                                  }
                                  zT.current && (zT.current.style.left = 100 * oT.moverPosition + "%"), BT.current && (BT.current.value = oT.progress)
                                }));
                                return () => {
                                  TT()
                                }
                              }), [LT]), (0, XT.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, XT.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, XT.jsx)(kT.c, {
                                    text: ST
                                  })
                                }), (0, XT.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: BT
                                }), (0, XT.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, XT.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: IT
                                  }), (0, XT.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: zT,
                                    children: (0, XT.jsx)("span", {
                                      children: DT && (0, XT.jsx)(kT.c, {
                                        text: [{
                                          icon: DT,
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
                          var cT = IT(618);
                          const KT = (0, iT.memo)((function(TT) {
                              let {
                                initialParameters: oT
                              } = TT;
                              const IT = (0, iT.useRef)(null),
                                zT = oT.label,
                                BT = oT.Fi,
                                {
                                  icon: FT,
                                  scale: ST,
                                  rotation: DT
                                } = null !== oT && void 0 !== oT ? oT : {},
                                LT = 100 * (.5 - BT / 2),
                                xT = 100 * BT,
                                KT = (0, WT.g)();
                              return (0, iT.useEffect)((() => {
                                const TT = KT.onFrame((() => {
                                  const TT = KT.getState();
                                  if (!TT.isActive || !IT.current) return;
                                  const oT = TT.state;
                                  IT.current.style.left = 100 * oT.markerPosition + "%"
                                }));
                                return () => {
                                  TT()
                                }
                              }), [KT]), (0, XT.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, cT.K)(ST) && {
                                    "--scale": ST
                                  },
                                  ...!(0, cT.K)(DT) && {
                                    "--rotation": `${DT}deg`
                                  }
                                },
                                children: [FT && (0, XT.jsx)(kT.c, {
                                  text: [{
                                    icon: FT
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, XT.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, XT.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${LT}%`,
                                      width: `${xT}%`
                                    }
                                  }), (0, XT.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: IT
                                  })]
                                }), (0, XT.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, XT.jsx)(kT.c, {
                                    text: zT
                                  })
                                })]
                              })
                            })),
                            MT = (0, iT.memo)((function(TT) {
                              let {
                                initialParameters: oT
                              } = TT;
                              const IT = (0, iT.useRef)(null),
                                [zT, BT] = (0, iT.useState)((() => new Array(oT.Di).fill("pending"))),
                                [FT, ST] = (0, iT.useState)((() => {
                                  const TT = oT.Ki;
                                  return (0, cT.K)(TT) || TT <= 0 ? [] : new Array(TT).fill("pending")
                                })),
                                DT = oT.label,
                                {
                                  icon: LT
                                } = oT,
                                xT = (0, iT.useRef)(0),
                                KT = (0, iT.useRef)(0),
                                MT = (0, iT.useRef)([]),
                                rT = (0, WT.g)();
                              return (0, iT.useEffect)((() => {
                                const TT = rT.onFrame((() => {
                                  const TT = rT.getState();
                                  if (!TT.isActive || !IT.current) return;
                                  const oT = TT.state,
                                    iT = 30 + 60 * oT.outerCircleProgress;
                                  if (IT.current.setAttribute("r", String(iT)), !0 === oT.lastClickResult && oT.successes > xT.current) {
                                    IT.current.classList.remove("QTERhythmClickOuterCircle--miss"), IT.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const TT = setTimeout((() => {
                                      var TT;
                                      null === (TT = IT.current) || void 0 === TT || TT.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    MT.current.push(TT)
                                  } else if (!1 === oT.lastClickResult && oT.misses > KT.current) {
                                    IT.current.classList.remove("QTERhythmClickOuterCircle--hit"), IT.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const TT = setTimeout((() => {
                                      var TT;
                                      null === (TT = IT.current) || void 0 === TT || TT.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    MT.current.push(TT)
                                  }
                                  oT.successes === xT.current && oT.misses === KT.current || (xT.current = oT.successes, KT.current = oT.misses, BT((TT => {
                                    const IT = [...TT];
                                    for (let iT = 0; iT < oT.Di; iT++) IT[iT] = iT < oT.successes ? "success" : "pending";
                                    return IT
                                  })), ST((TT => {
                                    if (0 === TT.length) return TT;
                                    const IT = [...TT];
                                    for (let iT = 0; iT < IT.length; iT++) IT[iT] = iT < oT.misses ? "miss" : "pending";
                                    return IT
                                  })))
                                }));
                                return () => {
                                  TT();
                                  for (const TT of MT.current) clearTimeout(TT);
                                  MT.current = []
                                }
                              }), [rT]), (0, XT.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, XT.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: zT.map(((TT, oT) => (0, XT.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === TT ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, oT)))
                                }), (0, XT.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, XT.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, XT.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, XT.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: IT
                                    })]
                                  }), LT && (0, XT.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, XT.jsx)(kT.c, {
                                      text: [{
                                        icon: LT
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), FT.length > 0 && (0, XT.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: FT.map(((TT, oT) => (0, XT.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === TT ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, oT)))
                                }), (0, XT.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, XT.jsx)(kT.c, {
                                    text: DT
                                  })
                                })]
                              })
                            }));

                          function rT(TT) {
                            let {
                              qte: oT
                            } = TT;
                            switch (oT.type) {
                              case "progressBar":
                                return (0, XT.jsx)(BT, {
                                  initialParameters: oT.parameters
                                });
                              case "timedClick":
                                return (0, XT.jsx)(LT, {
                                  initialParameters: oT.parameters
                                });
                              case "gravityBar":
                                return (0, XT.jsx)(xT, {
                                  initialParameters: oT.parameters
                                });
                              case "precisionBar":
                                return (0, XT.jsx)(KT, {
                                  initialParameters: oT.parameters
                                });
                              case "rhythmClick":
                                return (0, XT.jsx)(MT, {
                                  initialParameters: oT.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const AT = (0, iT.memo)((function() {
                            const [TT, oT] = (0, iT.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, zT.g)("qteStateUpdated", (TT => {
                              oT(TT)
                            })), TT.isActive && TT.type ? (0, XT.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, XT.jsx)(rT, {
                                qte: TT
                              })
                            }) : null
                          }))
                        }, 4260: (TT, oT, IT) => {
                          IT.d(oT, {
                            e: () => XT,
                            g: () => BT
                          });
                          var iT = IT(46),
                            zT = IT(1266),
                            kT = IT(4266);
                          const WT = {
                              getState: () => kT.e.getCurrentState(),
                              onFrame: zT.n
                            },
                            XT = (0, iT.createContext)(WT);

                          function BT() {
                            return (0, iT.useContext)(XT)
                          }
                        }, 4328: (TT, oT, IT) => {
                          IT.d(oT, {
                            d: () => aT,
                            h: () => UT
                          });
                          var iT = IT(4336),
                            zT = IT(306);
                          const kT = 120,
                            WT = 260,
                            XT = 1.15,
                            BT = 1.2,
                            FT = 2,
                            ST = 1.08,
                            DT = .8,
                            LT = .95,
                            xT = 8,
                            cT = "[\"')\\]\u300d\u300f\uff09]*",
                            KT = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${cT}$`),
                            MT = new RegExp(`[?\uff1f]${cT}$`),
                            rT = new RegExp(`[!\uff01]${cT}$`),
                            AT = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            gT = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            hT = new RegExp(`[${gT}]`),
                            wT = new RegExp(`[${gT}]|[^${gT}]+`, "g"),
                            mT = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function eT(TT) {
                            let oT = 2166136261;
                            for (let IT = 0; IT < TT.length; IT++) oT ^= TT.charCodeAt(IT), oT = Math.imul(oT, 16777619);
                            return (oT >>> 0) / 4294967295 * 2 - 1
                          }

                          function RT(TT) {
                            var oT;
                            if (hT.test(TT)) return 1;
                            const IT = TT.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              iT = IT.replace(/[^0-9]/g, "");
                            if (iT.length > 0 && !/\p{L}/u.test(IT)) return Math.min(iT.length, 4);
                            const zT = null !== (oT = IT.match(mT)) && void 0 !== oT ? oT : [];
                            if (0 === zT.length) {
                              var kT, WT;
                              const TT = null !== (kT = null === (WT = IT.match(/\p{L}/gu)) || void 0 === WT ? void 0 : WT.length) && void 0 !== kT ? kT : 0;
                              return 0 === TT ? 0 : Math.min(Math.max(1, Math.round(TT / 2.5)), xT)
                            }
                            const XT = IT.replace(/[^\p{L}]/gu, ""),
                              BT = zT.length > 1 && "e" === zT.at(-1) && XT.endsWith("e") && !XT.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(TT.replace(/[^\p{L}]/gu, ""));
                            return Math.min(zT.length - (BT ? 1 : 0), xT)
                          }

                          function uT(TT) {
                            return TT.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function vT(TT) {
                            const oT = TT.replace(/[^\p{L}]/gu, "");
                            return oT.length >= 2 && oT === oT.toUpperCase() && oT !== oT.toLowerCase()
                          }

                          function ET(TT, oT) {
                            var IT;
                            const xT = oT && (0, iT.j)(oT),
                              cT = null !== (IT = null === xT || void 0 === xT ? void 0 : xT.syllableMs) && void 0 !== IT ? IT : iT.d,
                              gT = function(TT) {
                                const oT = [];
                                for (const iT of (0, zT.ac)(TT))
                                  if ("string" === typeof iT)
                                    for (const TT of iT.split(/(\s+)/)) {
                                      if ("" === TT) continue;
                                      if (/^\s+$/.test(TT)) {
                                        oT.push({
                                          kind: "space",
                                          text: TT
                                        });
                                        continue
                                      }
                                      if (!hT.test(TT)) {
                                        oT.push({
                                          kind: "word",
                                          text: TT,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let iT = !0;
                                      for (const zT of null !== (IT = TT.match(wT)) && void 0 !== IT ? IT : []) {
                                        var IT;
                                        const TT = oT.at(-1);
                                        iT || "word" !== (null === TT || void 0 === TT ? void 0 : TT.kind) || hT.test(zT) || /[\p{L}\p{N}]/u.test(zT) ? (iT || oT.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), oT.push({
                                          kind: "word",
                                          text: zT,
                                          delayMs: 0
                                        }), iT = !1) : TT.text += zT
                                      }
                                    } else oT.push({
                                      kind: "icon",
                                      text: iT.icon,
                                      delayMs: 0
                                    });
                                return oT
                              }(TT),
                              mT = [];
                            let ET = [];
                            for (const iT of gT) "space" !== iT.kind && (ET.push(iT), KT.test(iT.text) && (mT.push(ET), ET = []));
                            mT.push(ET);
                            const fT = [];
                            let CT = 0;
                            for (const iT of mT) {
                              var jT, JT;
                              const TT = null !== (jT = null === (JT = iT.at(-1)) || void 0 === JT ? void 0 : JT.text) && void 0 !== jT ? jT : "",
                                oT = MT.test(TT),
                                IT = rT.test(TT),
                                zT = iT.map((TT => "word" === TT.kind ? RT(TT.text) : 1)),
                                gT = zT.findLastIndex((TT => TT > 0));
                              for (const [MT, rT] of iT.entries()) {
                                const TT = "word" === rT.kind,
                                  iT = zT[MT];
                                rT.delayMs = CT;
                                for (let zT = 0; xT && zT < iT; zT++) {
                                  const {
                                    intonation: kT
                                  } = xT;
                                  let WT = gT > 0 ? -kT.declineSemitones * (MT / gT) : 0;
                                  WT += eT(`${uT(rT.text)}|${zT}`) * kT.variationSemitones;
                                  const KT = Math.min(1, kT.variationSemitones);
                                  let AT = xT.glideSemitones,
                                    hT = 1;
                                  IT && (WT += kT.exclaimLiftSemitones, hT *= XT), oT && MT === gT && (WT += kT.questionRiseSemitones * (iT > 1 ? .5 + .5 * zT / (iT - 1) : 1), zT === iT - 1 && (AT = Math.abs(AT) + kT.questionRiseSemitones / 2)), TT && vT(rT.text) && (WT += FT * KT, hT *= BT), iT > 1 && 0 === zT && (WT += DT * KT, hT *= ST), fT.push({
                                    atMs: CT + zT * cT,
                                    semitones: WT,
                                    glideSemitones: AT,
                                    durationMs: zT < iT - 1 ? Math.min(xT.durationMs, cT * LT) : xT.durationMs,
                                    level: hT
                                  })
                                }
                                CT += iT * cT + (KT.test(rT.text) ? WT : AT.test(rT.text) ? kT : 0)
                              }
                            }
                            return {
                              pieces: gT.map((TT => "space" === TT.kind ? TT : "icon" === TT.kind ? {
                                kind: "icon",
                                icon: TT.text,
                                delayMs: TT.delayMs
                              } : {
                                kind: "word",
                                text: TT.text,
                                delayMs: TT.delayMs
                              })),
                              blips: fT
                            }
                          }
                          var fT = IT(1171),
                            CT = IT(1220),
                            jT = IT(1755);

                          function JT(TT) {
                            if ("string" === typeof TT) return TT;
                            const oT = CT.d.get().getCurrentLanguageCode();
                            return (0, fT.n)(oT, TT.translationKey, (0, fT.m)(TT.params, jT.e.shown))
                          }

                          function UT(TT) {
                            const oT = void 0 === TT.voice ? null : (0, iT.m)(TT.voice),
                              IT = oT && (0, iT.j)(oT);
                            return {
                              plan: ET(JT(TT.line), IT),
                              synth: IT
                            }
                          }

                          function aT(TT) {
                            const oT = [];
                            let IT = [];
                            for (const [zT, kT] of TT.entries()) {
                              var iT;
                              "space" === kT.kind && (" " !== kT.text || "icon" !== (null === (iT = TT[zT + 1]) || void 0 === iT ? void 0 : iT.kind)) ? (IT.length > 0 && oT.push(IT), oT.push([kT]), IT = []) : IT.push(kT)
                            }
                            return IT.length > 0 && oT.push(IT), oT
                          }
                        }, 4339: (TT, oT, IT) => {
                          IT.d(oT, {
                            c: () => ST,
                            e: () => DT
                          });
                          var iT = IT(4341),
                            zT = IT(12);
                          const kT = .25,
                            WT = .85,
                            XT = .02,
                            BT = .01;

                          function FT(TT, oT, IT, iT, zT, kT, XT) {
                            const {
                              waveform: BT,
                              pitchHz: FT,
                              attackMs: ST,
                              releaseMs: DT,
                              lowpassHz: LT
                            } = IT, xT = zT + iT.durationMs / 1e3, cT = FT * 2 ** (iT.semitones / 12), KT = TT.createOscillator();
                            KT.type = BT, KT.frequency.setValueAtTime(cT, zT), KT.frequency.exponentialRampToValueAtTime(cT * 2 ** (iT.glideSemitones / 12), xT);
                            const MT = zT + Math.min(ST, iT.durationMs) / 1e3,
                              rT = TT.createGain();
                            rT.gain.setValueAtTime(0, zT), rT.gain.linearRampToValueAtTime(kT, MT), rT.gain.linearRampToValueAtTime(kT * WT, Math.max(MT, xT - DT / 1e3)), rT.gain.linearRampToValueAtTime(0, xT);
                            const AT = [KT];
                            if (null !== LT) {
                              const oT = TT.createBiquadFilter();
                              oT.type = "lowpass", oT.frequency.value = LT, AT.push(oT)
                            }
                            AT.push(rT, oT);
                            for (let WT = 1; WT < AT.length; WT++) AT[WT - 1].connect(AT[WT]);
                            return KT.onended = () => {
                              for (const TT of AT.slice(0, -1)) TT.disconnect();
                              XT()
                            }, KT.start(zT), KT.stop(xT), KT
                          }

                          function ST(TT, oT, IT, iT, zT, WT) {
                            if (0 === iT.length) return WT(), () => {};
                            const ST = kT * IT.volume * zT,
                              DT = TT.createGain();
                            DT.connect(oT);
                            const LT = TT.currentTime + XT,
                              xT = new Set;
                            for (const kT of iT) {
                              const oT = FT(TT, DT, IT, kT, LT + kT.atMs / 1e3, ST * kT.level, (() => {
                                xT.delete(oT), 0 === xT.size && (DT.disconnect(), WT())
                              }));
                              xT.add(oT)
                            }
                            return () => {
                              const oT = TT.currentTime;
                              DT.gain.setTargetAtTime(0, oT, BT);
                              for (const TT of xT) try {
                                TT.stop(oT + 5 * BT)
                              } catch {}
                            }
                          }

                          function DT(TT, oT) {
                            var IT;
                            const kT = iT.Howler.ctx,
                              WT = iT.Howler.masterGain;
                            if (!kT || !WT || !zT.c.get("soundOnFromAd")) return () => {};
                            const XT = iT.Howler;
                            return null === (IT = XT._autoResume) || void 0 === IT || IT.call(XT), ST(kT, WT, TT, oT, zT.c.get("soundVolume"), (() => {
                              var TT;
                              null === (TT = XT._autoSuspend) || void 0 === TT || TT.call(XT)
                            }))
                          }
                        }, 4341: (TT, oT, IT) => {
                          IT.r(oT), IT.d(oT, {
                            Howl: () => zT.Howl,
                            Howler: () => zT.Howler,
                            iosAudio: () => BT,
                            musicOutput: () => MT,
                            readyAudioContext: () => rT
                          });
                          var iT, zT = IT(4349),
                            kT = IT(90);
                          const WT = zT.Howler;
                          let XT;

                          function BT() {
                            return XT ??= "ios" === (0, kT.getOperatingSystem)(), XT
                          }

                          function FT() {
                            var TT, oT;
                            if (WT.ctx || !WT.usingWebAudio || "undefined" === typeof AudioContext || !BT()) return;
                            const IT = navigator.audioSession;
                            let iT;
                            "auto" === (null === IT || void 0 === IT ? void 0 : IT.type) && (IT.type = "ambient");
                            try {
                              iT = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const zT = iT.createGain();
                            zT.gain.setValueAtTime(WT._muted ? 0 : null !== (TT = WT._volume) && void 0 !== TT ? TT : 1, iT.currentTime), zT.connect(iT.destination), WT.ctx = iT, WT.masterGain = zT, null === (oT = WT._setup) || void 0 === oT || oT.call(WT)
                          }
                          WT._mobileUnloaded = !0;
                          const ST = WT.volume.bind(zT.Howler);
                          WT.volume = function() {
                            return FT(), ST(...arguments)
                          };
                          const DT = WT.mute.bind(zT.Howler);
                          WT.mute = TT => (FT(), DT(TT));
                          const LT = zT.Howl.prototype,
                            xT = LT.init;
                          LT.init = function(TT) {
                            return FT(), xT.call(this, TT)
                          };
                          let cT = 0;
                          const KT = null === (iT = WT._autoSuspend) || void 0 === iT ? void 0 : iT.bind(zT.Howler);

                          function MT() {
                            rT();
                            const {
                              ctx: TT,
                              masterGain: oT
                            } = WT;
                            return TT && oT ? {
                              ctx: TT,
                              destination: oT,
                              holdAwake: TT => {
                                var oT, IT;
                                (cT += TT ? 1 : -1, TT) ? null === (oT = WT._autoResume) || void 0 === oT || oT.call(WT): null === (IT = WT._autoSuspend) || void 0 === IT || IT.call(WT)
                              },
                              wake: () => {
                                var oT;
                                "running" !== TT.state && (null === (oT = WT._autoResume) || void 0 === oT || oT.call(WT), TT.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function rT() {
                            var TT;
                            (WT.volume(), WT.ctx && WT.autoUnlock) && (null === (TT = WT._unlockAudio) || void 0 === TT || TT.call(WT))
                          }
                          KT && (WT._autoSuspend = () => cT > 0 ? zT.Howler : KT())
                        }, 4355: (TT, oT, IT) => {
                          function iT(TT) {
                            return {
                              notAfter: TT
                            }
                          }
                          IT.d(oT, {
                            d: () => BT,
                            f: () => FT,
                            g: () => XT,
                            i: () => iT,
                            k: () => zT,
                            m: () => kT,
                            p: () => WT,
                            r: () => ST,
                            u: () => DT
                          });
                          const zT = iT("\\w$."),
                            kT = iT("\\w.,");

                          function WT(TT) {
                            return oT => BT(oT, TT)
                          }

                          function XT(TT) {
                            return oT => !TT.test(oT.input.slice(0, oT.index))
                          }

                          function BT(TT, oT) {
                            return TT.index > 0 && new RegExp(`[${oT}]`).test(TT.input[TT.index - 1])
                          }

                          function FT(TT, oT, IT) {
                            return function(TT) {
                              return void 0 !== TT && "function" !== typeof TT
                            }(IT) ? function(TT, oT, IT) {
                              const iT = oT.flags.replace(/[gy]/g, ""),
                                zT = new RegExp(`[^${IT}](?:${oT.source})`, `${iT}g`),
                                kT = [],
                                WT = IT => {
                                  const iT = IT.index + IT[0].length;
                                  return ("" === IT[0] ? LT(TT, oT, iT) : iT) - 1
                                },
                                XT = new RegExp(`(?:${oT.source})`, `${iT}y`).exec(TT);
                              if (XT) {
                                if (kT.push(XT), !oT.global) return kT;
                                zT.lastIndex = WT(XT)
                              }
                              for (let BT = zT.exec(TT); BT; BT = zT.exec(TT)) {
                                const IT = LT(TT, oT, BT.index) - BT.index;
                                if (BT[0] = BT[0].slice(IT), BT.index += IT, kT.push(BT), !oT.global) break;
                                zT.lastIndex = WT(BT)
                              }
                              return kT
                            }(TT, oT, IT.notAfter) : function(TT, oT, IT) {
                              const iT = new RegExp(oT.source, `${oT.flags.replace(/[gy]/g,"")}g`),
                                zT = [];
                              for (let kT = iT.exec(TT); kT; kT = iT.exec(TT))
                                if (!IT || IT(kT)) {
                                  if (zT.push(kT), !oT.global) break;
                                  "" === kT[0] && (iT.lastIndex = LT(TT, oT, iT.lastIndex))
                                } else iT.lastIndex = LT(TT, oT, kT.index);
                              return zT
                            }(TT, oT, IT)
                          }

                          function ST(TT, oT, IT, iT) {
                            let zT = "",
                              kT = 0;
                            for (const WT of FT(TT, oT, IT)) zT += TT.slice(kT, WT.index) + iT(WT), kT = WT.index + WT[0].length;
                            return zT + TT.slice(kT)
                          }

                          function DT(TT, oT, IT) {
                            const iT = [];
                            let zT = 0;
                            for (const kT of FT(TT, oT, IT)) iT.push(TT.slice(zT, kT.index)), zT = kT.index + kT[0].length;
                            return [...iT, TT.slice(zT)]
                          }

                          function LT(TT, oT, IT) {
                            var iT;
                            return IT + (oT.unicode && (null !== (iT = TT.codePointAt(IT)) && void 0 !== iT ? iT : 0) > 65535 ? 2 : 1)
                          }
                        }, 4304: (TT, oT, IT) => {
                          IT.d(oT, {
                            c: () => zT,
                            f: () => BT,
                            j: () => kT,
                            n: () => WT,
                            o: () => XT,
                            s: () => MT,
                            t: () => ST,
                            w: () => DT,
                            x: () => KT,
                            y: () => xT
                          });
                          var iT = IT(1531);
                          const zT = 24e3,
                            kT = "/docs/llms.txt",
                            WT = `${iT.d}${kT}`,
                            XT = "/llms.txt",
                            BT = "/docs/llms-full.txt";

                          function FT(TT) {
                            return TT || "index"
                          }

                          function ST(TT) {
                            return `/docs/${FT(TT)}.md`
                          }

                          function DT(TT, oT) {
                            return `/docs/${FT(TT)}/${oT+1}.md`
                          }
                          const LT = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function xT(TT) {
                            const oT = LT.exec(TT);
                            return null === oT ? null : {
                              name: oT[1],
                              part: void 0 === oT[2] ? null : Number(oT[2])
                            }
                          }
                          const cT = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function KT(TT) {
                            const oT = cT.exec(TT);
                            if (null === oT) return null;
                            const [, IT = "", iT] = oT;
                            return void 0 === iT ? ST(IT) : DT(IT, Number(iT) - 1)
                          }

                          function MT(TT) {
                            return `/docsHtml/${FT(TT)}.html`
                          }
                        }, 4336: (TT, oT, IT) => {
                          IT.d(oT, {
                            d: () => zT,
                            f: () => iT,
                            g: () => kT,
                            j: () => BT,
                            m: () => WT
                          });
                          const iT = ["sine", "triangle", "square", "sawtooth"],
                            zT = 55,
                            kT = {
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

                          function WT(TT) {
                            return "string" !== typeof TT ? TT : Object.hasOwn(kT, TT) ? kT[TT] : null
                          }

                          function XT(TT, oT, IT) {
                            return Math.min(IT, Math.max(oT, TT))
                          }

                          function BT(TT) {
                            const oT = XT(TT.durationMs, 10, 500),
                              IT = XT(TT.attackMs, 0, oT),
                              {
                                intonation: zT
                              } = TT;
                            return {
                              waveform: iT.includes(TT.waveform) ? TT.waveform : "sine",
                              pitchHz: XT(TT.pitchHz, 20, 4e3),
                              glideSemitones: XT(TT.glideSemitones, -24, 24),
                              durationMs: oT,
                              attackMs: IT,
                              releaseMs: XT(TT.releaseMs, 0, oT - IT),
                              lowpassHz: null === TT.lowpassHz ? null : XT(TT.lowpassHz, 20, 2e4),
                              volume: XT(TT.volume, 0, 2),
                              intonation: {
                                variationSemitones: XT(zT.variationSemitones, 0, 6),
                                declineSemitones: XT(zT.declineSemitones, 0, 12),
                                questionRiseSemitones: XT(zT.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: XT(zT.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: XT(TT.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const TT in modules) Object.freeze(modules[TT]);