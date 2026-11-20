export const id = 76;
export const ids = [76, 92];
export const modules = {
    4798: (TT, kT, cT) => {
      cT.d(kT, {
        e: () => hT,
        i: () => NT
      });
      var lT = cT(1046),
        MT = cT.n(lT),
        KT = cT(71),
        OT = cT(1195),
        yT = cT(4800),
        fT = cT(1921),
        xT = cT(2462),
        IT = cT(4806),
        AT = cT(1099);
      const CT = new WeakMap;
      let jT = 0;

      function vT(TT) {
        let kT = CT.get(TT);
        return void 0 === kT && (kT = jT++, CT.set(TT, kT)), kT
      }

      function tT(TT) {
        let {
          piece: kT
        } = TT;
        return "space" === kT.kind ? (0, AT.jsx)(AT.Fragment, {
          children: kT.text
        }) : (0, AT.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${kT.delayMs}ms`
          },
          children: (0, AT.jsx)(yT.e, {
            text: "icon" === kT.kind ? `[[${kT.icon}]]` : kT.text
          })
        })
      }

      function hT(TT) {
        let {
          display: kT
        } = TT;
        const {
          selectedLanguage: cT
        } = (0, OT.B)(), lT = (0, KT.useMemo)((() => (0, IT.b)((0, IT.e)(kT).plan.pieces)), [kT, cT.code]);
        return (0, AT.jsxs)("div", {
          className: MT()("Dialogue", {
            DialogueAnimateIn: !1 !== kT.animateIn
          }),
          children: [kT.speakerName && (0, AT.jsx)(fT.b, {
            text: kT.speakerName,
            className: "DialogueSpeaker"
          }), (0, AT.jsx)("p", {
            className: "DialogueLine",
            children: lT.map(((TT, kT) => 1 === TT.length && "space" === TT[0].kind ? TT[0].text : (0, AT.jsx)("span", {
              className: "DialogueGlue",
              children: TT.map(((TT, kT) => (0, AT.jsx)(tT, {
                piece: TT
              }, kT)))
            }, kT)))
          })]
        })
      }
      const NT = (0, KT.memo)((function() {
        const TT = (0, xT.f)("dialogue");
        return (0, AT.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: TT && (0, AT.jsx)(hT, {
            display: TT
          }, vT(TT))
        })
      }))
    },
    4690: (TT, kT, cT) => {
        cT.r(kT), cT.d(kT, {
          default: () => sK
        });
        var lT = cT(71),
          MT = cT(1046),
          KT = cT.n(MT),
          OT = cT(1532),
          yT = cT(1535),
          fT = cT(31),
          xT = cT(94),
          IT = cT(4698),
          AT = cT(4702),
          CT = cT(4705),
          jT = cT(4347),
          vT = cT(1099);
        const tT = "/textures/docs/icons";

        function hT(TT) {
          let {
            name: kT,
            isTinted: cT,
            className: lT,
            style: MT
          } = TT;
          const OT = `${tT}/${kT}.png`;
          return cT ? (0, vT.jsxs)("span", {
            className: KT()("DocsPixelIcon", "Tinted", lT),
            "aria-hidden": "true",
            style: MT,
            children: [(0, vT.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${OT}")`,
                WebkitMaskImage: `url("${OT}")`
              }
            }), (0, vT.jsx)("img", {
              src: OT,
              alt: ""
            })]
          }) : (0, vT.jsx)("img", {
            className: KT()("DocsPixelIcon", lT),
            src: OT,
            alt: "",
            "aria-hidden": "true",
            style: MT
          })
        }
        const NT = 1500;

        function QT() {
          const [TT, kT] = (0, lT.useState)(null);
          (0, lT.useEffect)((() => {
            if (null === TT) return;
            const cT = setTimeout((() => {
              kT(null)
            }), NT);
            return () => {
              clearTimeout(cT)
            }
          }), [TT]);
          return [TT, TT => {
            (0, jT.e)(TT).then((() => {
              kT({
                text: TT,
                failed: !1
              })
            }), (cT => {
              console.error("Could not copy to the clipboard", cT), kT({
                text: TT,
                failed: !0
              })
            }))
          }]
        }

        function ST(TT) {
          let {
            text: kT,
            label: cT,
            className: lT
          } = TT;
          const [MT, OT] = QT(), yT = !1 === (null === MT || void 0 === MT ? void 0 : MT.failed);
          return (0, vT.jsxs)("button", {
            type: "button",
            className: KT()("DocsCopyButton", lT, {
              Copied: yT
            }),
            title: `Copy ${kT.length>40?"to clipboard":kT}`,
            "aria-label": cT ? void 0 : `Copy ${kT}`,
            onClick: TT => {
              TT.stopPropagation(), OT(kT)
            },
            children: [(0, vT.jsx)(hT, {
              name: yT ? "check" : "copy"
            }), cT && (0, vT.jsx)("span", {
              children: yT ? "Copied" : null !== MT && void 0 !== MT && MT.failed ? "Copy failed" : cT
            })]
          })
        }
        IT.d.registerLanguage("javascript", AT.b), IT.d.registerLanguage("typescript", CT.d);
        const DT = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          aT = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          FT = 24;

        function rT(TT) {
          let {
            code: kT,
            lang: cT,
            compact: MT = !1
          } = TT;
          const OT = (0, lT.useMemo)((() => function(TT, kT) {
              const cT = DT[kT];
              return cT ? IT.d.highlight(TT, {
                language: cT
              }).value : TT.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(kT, cT)), [kT, cT]),
            yT = kT.split("\n").length,
            fT = !MT && yT > FT + 6,
            [xT, AT] = (0, lT.useState)(!1),
            CT = DT[cT];
          return (0, vT.jsxs)("div", {
            className: KT()("DocsCodeBlock", {
              Compact: MT,
              Collapsed: fT && !xT
            }),
            children: [!MT && (0, vT.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, vT.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: CT ? aT[CT] : "Text"
              }), (0, vT.jsx)(ST, {
                text: kT,
                label: "Copy"
              })]
            }), (0, vT.jsx)("pre", {
              children: (0, vT.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: OT
                }
              })
            }), fT && (0, vT.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": xT,
              onClick: () => {
                AT(!xT)
              },
              children: [(0, vT.jsx)(hT, {
                name: xT ? "chevron-up" : "chevron-down"
              }), xT ? "Show less" : `Show all ${yT} lines`]
            })]
          })
        }
        var PT = cT(4707);
        var wT = cT(4711);
        const mT = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function bT(TT) {
          const kT = new Map;
          let cT, lT = [],
            MT = !1;
          const KT = () => {
            cT && kT.set(cT.name, cT.lines.join("\n").trimEnd())
          };
          for (const OT of TT.split("\n")) {
            const TT = OT.match(mT);
            MT || OT.startsWith("/*") ? (MT || (KT(), cT = void 0), lT.push(OT), MT = !OT.includes("*/")) : TT ? (KT(), cT = {
              name: TT[1],
              lines: [...lT, OT]
            }, lT = []) : cT && (OT.startsWith(" ") || OT.startsWith("\t") || /^[}\])|]/.test(OT)) ? cT.lines.push(OT) : cT && "" !== OT.trim() && (KT(), cT = void 0)
          }
          return KT(), kT
        }

        function zT(TT) {
          return "methods" === TT || "callbacks" === TT || "settings" === TT
        }
        const JT = {
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
              setterSnippet: (TT, kT) => `api.setClientOption(playerId, "${TT}", ${kT})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (TT, kT) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${TT}", ${kT})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (TT, kT) => `api.setMobSetting(mobId, "${TT}", ${kT})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (TT, kT) => `api.setVehicleSetting(vehicleId, "${TT}", ${kT})`
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
          oT = {
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

        function HT(TT) {
          return TT.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function eT(TT) {
          let kT = !1;
          return TT.split("\n").map((TT => (TT.startsWith("```") && (kT = !kT), !kT && /^#{3,} /.test(TT) ? TT.slice(1) : TT))).join("\n")
        }

        function GT(TT) {
          return "readme" === TT ? "getting-started" : HT(TT)
        }
        const VT = "## Glossary of Referenced Types";
        const ET = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...wT.b.flatMap((TT => {
            const kT = {
              id: TT.id,
              slug: GT(TT.id),
              title: TT.title,
              markdown: TT.content,
              ...JT[TT.id]
            };
            if ("readme" === TT.id) return function(TT) {
              const kT = TT.markdown.indexOf(VT),
                cT = TT.markdown.indexOf("\n```", kT),
                lT = TT.markdown.indexOf("\n```", cT + 1);
              if (-1 === kT || -1 === cT || -1 === lT) throw new Error(`Getting started has no "${VT}" section with a code block`);
              const MT = TT.markdown.slice(kT + 31, cT).trim(),
                KT = [...bT(TT.markdown.slice(TT.markdown.indexOf("\n", cT + 1) + 1, lT))].map((TT => {
                  let [kT, cT] = TT;
                  return `## ${kT}\n\n\`\`\`ts\n${cT}\n\`\`\`\n`
                })),
                OT = TT.markdown.slice(TT.markdown.indexOf("\n", lT + 1) + 1);
              return [{
                ...TT,
                markdown: `${TT.markdown.slice(0,kT)}${OT}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${MT}\n\n${KT.join("\n")}`
              }]
            }(kT);
            if ("howTo" === TT.id) {
              const {
                parent: TT,
                guides: cT
              } = function(TT) {
                const [kT, ...cT] = TT.markdown.split(/^(?=## )/m), lT = [kT], MT = [];
                for (const OT of cT) {
                  var KT;
                  const kT = OT.indexOf("\n"),
                    cT = OT.slice(3, kT).trim(),
                    yT = OT.slice(kT + 1);
                  if (!yT.includes("```")) {
                    lT.push(OT);
                    continue
                  }
                  const fT = null !== (KT = oT[cT]) && void 0 !== KT ? KT : {
                    icon: "lightbulb",
                    summary: `How to use ${cT.toLowerCase()} in World Code.`
                  };
                  MT.push({
                    id: `${TT.id}${cT.split(/[^A-Za-z0-9]+/).map((TT=>TT.charAt(0).toUpperCase()+TT.slice(1))).join("")}`,
                    slug: `${TT.slug}-${HT(cT)}`,
                    title: cT,
                    layout: "article",
                    sourceAnchor: (0, PT.p)(cT),
                    markdown: `# ${cT}\n\n${eT(yT)}`,
                    ...fT
                  })
                }
                return {
                  parent: {
                    ...TT,
                    markdown: lT.join(""),
                    childPageIds: MT.map((TT => TT.id))
                  },
                  guides: MT
                }
              }(kT);
              return [TT, ...cT]
            }
            return [kT]
          }))],
          ZT = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...ET.filter((TT => void 0 !== TT.sourceAnchor)).map((TT => TT.id))]
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

        function uT(TT) {
          return ET.find((kT => kT.id === TT))
        }
        const XT = new Map;

        function dT(TT) {
          let kT = XT.get(TT.id);
          return kT || (kT = (0, PT.s)(TT.markdown, "changelog" === TT.layout ? 3 : 2), XT.set(TT.id, kT)), kT
        }

        function LT(TT, kT) {
          return dT(TT).sections.some((TT => TT.heading.anchor === kT || TT.blocks.some((TT => "heading" === TT.kind && TT.anchor === kT))))
        }

        function RT(TT) {
          const [kT, ...cT] = TT.replace(/^#/, "").split("-"), lT = ET.find((TT => TT.id === kT));
          if (!lT) return null;
          const MT = cT.length > 0 ? (0, PT.p)(cT.join("-")) : "";
          for (const OT of null !== (KT = lT.childPageIds) && void 0 !== KT ? KT : []) {
            var KT;
            const TT = uT(OT);
            if (TT.sourceAnchor === MT) return {
              page: TT,
              anchor: ""
            };
            if (LT(TT, MT)) return {
              page: TT,
              anchor: MT
            }
          }
          return {
            page: lT,
            anchor: MT
          }
        }
        const gT = {
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

        function UT(TT, kT) {
          let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const lT = kT.slug ? `${TT}/${kT.slug}` : TT;
          return cT ? `${lT}#${cT}` : lT
        }
        var YT = cT(4725);
        const BT = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          WT = new Set(["GameApi", "Console", "_TypeOf"]),
          nT = 4;

        function pT(TT) {
          let kT = TT.length;
          for (; kT > 0 && "" === TT[kT - 1].trim();) kT--;
          return TT.slice(0, kT)
        }

        function iT(TT) {
          var kT;
          const cT = pT(TT);
          if (null === (kT = cT.at(-1)) || void 0 === kT || !kT.trimEnd().endsWith("*/")) return {
            lines: cT,
            doc: ""
          };
          const lT = cT.findLastIndex((TT => TT.startsWith("/**")));
          return -1 === lT ? {
            lines: cT,
            doc: ""
          } : {
            lines: pT(cT.slice(0, lT)),
            doc: cT.slice(lT).join("\n")
          }
        }

        function qT(TT) {
          var kT;
          const cT = TT.split("\n"),
            lT = cT.flatMap(((TT, kT) => BT.test(TT) ? [kT] : []));
          let MT = iT(cT.slice(0, null !== (kT = lT[0]) && void 0 !== kT ? kT : cT.length)).doc;
          return lT.map(((TT, kT) => {
            var KT;
            const OT = iT(cT.slice(TT, null !== (KT = lT[kT + 1]) && void 0 !== KT ? KT : cT.length)),
              yT = {
                name: cT[TT].match(BT)[1],
                doc: MT,
                lines: OT.lines
              };
            return MT = OT.doc, yT
          }))
        }

        function sT(TT) {
          var kT;
          const cT = TT.match(/^readonly \[([\s\S]*)\]$/);
          return cT ? null !== (kT = cT[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== kT ? kT : [] : null
        }

        function Tk(TT) {
          if (!TT.startsWith("{") || !TT.endsWith("}")) return null;
          const kT = {
              keys: [],
              values: []
            },
            cT = TT => {
              const cT = TT.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              cT && (kT.keys.push(cT[1].startsWith('"') ? cT[1] : `"${cT[1]}"`), kT.values.push(cT[2].trim()))
            };
          let lT = 0,
            MT = "";
          for (const KT of TT.slice(1, -1)) "{[(".includes(KT) ? lT++ : "}])".includes(KT) && lT--, ";" === KT && 0 === lT ? (cT(MT), MT = "") : MT += KT;
          return cT(MT), kT
        }

        function kk(TT) {
          return TT.length > nT ? `\n\t| ${TT.join("\n\t| ")}` : TT.join(" | ")
        }

        function ck(TT, kT) {
          const cT = function(TT, kT) {
            return TT.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((TT, cT) => {
              var lT;
              const MT = null === (lT = kT.get(cT)) || void 0 === lT ? void 0 : lT.object;
              return MT ? kk(MT.values) : TT
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((TT, cT) => {
              var lT, MT;
              const KT = null === (lT = kT.get(cT)) || void 0 === lT || null === (MT = lT.object) || void 0 === MT ? void 0 : MT.values.map(sT);
              return null !== KT && void 0 !== KT && KT.every((TT => null !== TT)) ? kk([...new Set(KT.flat())]) : TT
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((TT, cT) => {
              var lT;
              const MT = null === (lT = kT.get(cT)) || void 0 === lT ? void 0 : lT.members;
              return MT ? kk(MT) : TT
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((TT, cT) => {
              var lT;
              const MT = null === (lT = kT.get(cT)) || void 0 === lT ? void 0 : lT.object;
              return MT ? kk(MT.keys) : TT
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((TT, cT) => {
              var lT, MT;
              return null !== (lT = null === (MT = kT.get(cT)) || void 0 === MT ? void 0 : MT.text) && void 0 !== lT ? lT : TT
            }))
          }(TT.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), kT);
          return [TT.doc, cT].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function lk(TT) {
          const kT = qT(TT),
            cT = function(TT) {
              const kT = new Map,
                cT = TT.find((TT => "_TypeOf" === TT.name));
              let lT = null;
              const MT = () => {
                if (lT) {
                  const TT = lT.lines.join("\n");
                  kT.set(lT.name, {
                    text: TT,
                    members: sT(TT),
                    object: Tk(TT)
                  })
                }
              };
              for (const KT of cT.lines.slice(1, -1)) {
                const TT = KT.match(/^\t([\w$]+): (.+)$/);
                TT ? (MT(), lT = {
                  name: TT[1],
                  lines: [TT[2]]
                }) : lT && lT.lines.push(KT.replace(/^\t/, ""))
              }
              return MT(), kT
            }(kT),
            lT = new Map;
          for (const MT of kT) WT.has(MT.name) || lT.has(MT.name) || lT.set(MT.name, ck(MT, cT));
          return lT
        }
        let Mk, Kk, Ok;

        function yk() {
          return Kk ??= function(TT) {
            const kT = qT(TT).find((TT => "GameApi" === TT.name)),
              cT = new Map,
              lT = kT.lines;
            for (let KT = 0; KT < lT.length; KT++) {
              var MT;
              if (!lT[KT].trimStart().startsWith("/**")) continue;
              const TT = KT;
              for (; KT < lT.length && !lT[KT].includes("*/");) KT++;
              const kT = null === (MT = lT[KT + 1]) || void 0 === MT ? void 0 : MT.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!kT) continue;
              let OT = null;
              const yT = [];
              let fT = "description",
                xT = !1;
              for (const cT of lT.slice(TT, KT + 1).join("\n").split("\n").map((TT => TT.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const TT = cT.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                TT ? (OT = TT[1].trim(), fT = "deprecation") : cT.startsWith("@") ? (fT = "otherTag", xT = !0) : "" === cT.trim() ? xT || (fT = "description", yT.push(cT)) : "deprecation" !== fT || /^[A-Z]/.test(cT.trim()) ? "otherTag" !== fT && (fT = "description", yT.push(cT)) : OT = `${OT} ${cT.trim()}`.trim()
              }
              cT.set(kT[1], {
                deprecation: OT,
                description: yT.join("\n").trim()
              })
            }
            return cT
          }(YT.default), Kk
        }

        function fk() {
          if (!Ok) {
            Ok = new Map;
            for (const TT of ET) {
              const kT = (0, PT.q)(dT(TT)).flatMap((TT => TT.blocks));
              for (const TT of (0, PT.k)(kT))
                if ("ts" === TT.lang || "typescript" === TT.lang)
                  for (const [kT, cT] of bT(TT.code)) Ok.set(kT, cT)
            }
            for (const [TT, kT] of(Mk ??= lk(YT.default), Mk)) Ok.has(TT) || Ok.set(TT, kT)
          }
          return Ok
        }
        const xk = {
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
        let Ik;

        function Ak() {
          if (!Ik) {
            Ik = new Map;
            for (const TT of ET)
              if (zT(TT.layout))
                for (const kT of dT(TT).sections) Ik.has(kT.heading.text) || Ik.set(kT.heading.text, {
                  pageId: TT.id,
                  anchor: kT.heading.anchor
                })
          }
          return Ik
        }

        function Ck(TT) {
          const kT = TT.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return kT ? Ak().get(kT[1]) : void 0
        }
        const jk = (0, lT.createContext)("/docs"),
          vk = (0, lT.createContext)(null),
          tk = (0, lT.createContext)(!1),
          hk = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function Nk(TT) {
          const kT = TT.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return kT ? kT[1] : null
        }

        function Qk(TT) {
          let {
            colour: kT
          } = TT;
          return (0, vT.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: kT
            },
            "aria-hidden": "true"
          })
        }

        function Sk(TT) {
          const kT = [];
          let cT = 0;
          for (const lT of TT.matchAll(hk)) kT.push(TT.slice(cT, lT.index), (0, vT.jsx)(Qk, {
            colour: lT[0]
          }), lT[0]), cT = lT.index + lT[0].length;
          return kT.push(TT.slice(cT)), kT
        }

        function Dk(TT) {
          let {
            href: kT,
            children: cT
          } = TT;
          const MT = (0, lT.useContext)(jk);
          if (kT.startsWith("#")) {
            const TT = RT(kT);
            if (TT) return (0, vT.jsx)(OT.e, {
              to: UT(MT, TT.page, TT.anchor),
              children: (0, vT.jsx)(tk.Provider, {
                value: !0,
                children: cT
              })
            })
          }
          return (0, vT.jsx)("a", {
            href: kT,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, vT.jsx)(tk.Provider, {
              value: !0,
              children: cT
            })
          })
        }

        function ak(TT) {
          let {
            code: kT
          } = TT;
          const cT = (0, lT.useContext)(jk);
          if ((0, lT.useContext)(tk)) return (0, vT.jsx)("code", {
            className: "DocsInlineCode",
            children: kT
          });
          if (fk().has(kT)) return (0, vT.jsx)(wk, {
            type: kT
          });
          const MT = Ck(kT);
          if (MT) return (0, vT.jsx)(OT.e, {
            className: "DocsInlineCode DocsSymbolLink",
            to: UT(cT, uT(MT.pageId), MT.anchor),
            children: kT
          });
          const KT = Nk(kT);
          return (0, vT.jsxs)("code", {
            className: "DocsInlineCode",
            children: [KT && (0, vT.jsx)(Qk, {
              colour: KT
            }), kT]
          })
        }

        function Fk(TT) {
          let {
            text: kT
          } = TT;
          const cT = [];
          let MT = 0;
          for (const lT of kT.matchAll(PT.g)) {
            lT.index > MT && cT.push(...Sk(kT.slice(MT, lT.index)));
            const [, TT, KT, OT, yT, fT] = lT;
            TT ? cT.push((0, vT.jsx)(ak, {
              code: (0, PT.l)(TT, KT)
            })) : OT ? cT.push((0, vT.jsx)("strong", {
              children: (0, vT.jsx)(Fk, {
                text: OT
              })
            })) : cT.push((0, vT.jsx)(Dk, {
              href: fT,
              children: (0, vT.jsx)(Fk, {
                text: yT
              })
            })), MT = lT.index + lT[0].length
          }
          return MT < kT.length && cT.push(...Sk(kT.slice(MT))), (0, vT.jsx)(vT.Fragment, {
            children: cT.map(((TT, kT) => (0, vT.jsx)(lT.Fragment, {
              children: TT
            }, kT)))
          })
        }
        const rk = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          Pk = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function wk(TT) {
          let {
            type: kT
          } = TT;
          const cT = fk(),
            MT = [];
          for (const lT of kT.trim().matchAll(rk)) {
            const [TT, kT, KT, OT, yT] = lT;
            kT ? MT.push((0, vT.jsx)("span", {
              className: "DocsTypeString",
              children: TT
            })) : KT && cT.has(KT) ? MT.push((0, vT.jsx)(Hk, {
              name: KT,
              definition: cT.get(KT)
            })) : KT ? MT.push((0, vT.jsx)("span", {
              className: Pk.has(KT) ? "DocsTypeKeyword" : "DocsTypeName",
              children: TT
            })) : OT ? MT.push((0, vT.jsx)("span", {
              className: "DocsTypeNumber",
              children: TT
            })) : yT ? MT.push(" ") : MT.push((0, vT.jsx)("span", {
              className: "DocsTypePunctuation",
              children: TT
            }))
          }
          return (0, vT.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: MT.map(((TT, kT) => (0, vT.jsx)(lT.Fragment, {
              children: TT
            }, kT)))
          })
        }
        const mk = 480,
          bk = 6,
          zk = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Jk = 0;

        function Hk(TT) {
          let {
            name: kT,
            definition: cT
          } = TT;
          const MT = (0, lT.useContext)(jk),
            KT = xk[kT],
            yT = (0, lT.useRef)(null),
            fT = (0, lT.useRef)(null),
            IT = (0, lT.useRef)(null),
            [AT, CT] = (0, lT.useState)(!1),
            [jT, tT] = (0, lT.useState)(null),
            NT = (0, lT.useRef)(),
            QT = (0, lT.useContext)(vk),
            [ST] = (0, lT.useState)((() => "DocsTypePopover-" + Jk++)),
            DT = () => {
              clearTimeout(NT.current), CT(!0)
            },
            aT = () => {
              clearTimeout(NT.current), NT.current = setTimeout((() => {
                CT(!1)
              }), 120)
            };
          return (0, lT.useEffect)((() => {
            if (!AT) return;
            const TT = TT => {
              if ("Escape" === TT.key) {
                var kT, cT;
                if (null !== (kT = fT.current) && void 0 !== kT && kT.contains(document.activeElement)) null === (cT = yT.current) || void 0 === cT || cT.focus();
                CT(!1)
              }
            };
            return document.addEventListener("keydown", TT), () => {
              document.removeEventListener("keydown", TT)
            }
          }), [AT]), (0, lT.useEffect)((() => () => {
            clearTimeout(NT.current)
          }), []), (0, lT.useLayoutEffect)((() => {
            if (!AT || !yT.current || !fT.current) return void tT(null);
            const TT = yT.current.getBoundingClientRect(),
              kT = fT.current.offsetHeight,
              cT = Math.min(mk, window.innerWidth - 32),
              lT = Math.min(Math.max(16, TT.left), window.innerWidth - cT - 16),
              MT = TT.bottom + bk + kT < window.innerHeight;
            tT({
              left: lT,
              top: MT ? TT.bottom + bk : Math.max(16, TT.top - bk - kT)
            })
          }), [AT]), (0, vT.jsxs)(vT.Fragment, {
            children: [(0, vT.jsx)("button", {
              type: "button",
              ref: yT,
              className: "DocsTypeLink",
              "aria-expanded": AT,
              "aria-describedby": AT ? ST : void 0,
              onMouseEnter: DT,
              onMouseLeave: aT,
              onFocus: DT,
              onBlur: aT,
              onKeyDown: TT => {
                "Tab" === TT.key && !TT.shiftKey && IT.current && (TT.preventDefault(), IT.current.focus())
              },
              onClick: DT,
              children: kT
            }), AT && (0, xT.createPortal)((0, vT.jsxs)("span", {
              ref: fT,
              id: ST,
              className: "DocsTypePopover",
              role: "tooltip",
              style: jT ? {
                left: jT.left,
                top: jT.top,
                maxWidth: mk
              } : {
                visibility: "hidden"
              },
              onMouseEnter: DT,
              onMouseLeave: aT,
              onFocus: DT,
              onBlur: aT,
              children: [(0, vT.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, vT.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: kT
                }), KT && (0, vT.jsxs)(OT.e, {
                  ref: IT,
                  className: "DocsTypePopoverLink",
                  to: UT(MT, uT(KT)),
                  onClick: () => {
                    CT(!1)
                  },
                  onKeyDown: TT => {
                    if ("Tab" === TT.key) {
                      var kT;
                      if (TT.preventDefault(), TT.shiftKey || !yT.current || ! function(TT, kT) {
                          const cT = [...document.querySelectorAll(zk)],
                            lT = cT.slice(cT.indexOf(TT) + 1).find((TT => TT.getClientRects().length > 0 && !(null !== kT && void 0 !== kT && kT.contains(TT))));
                          return null === lT || void 0 === lT || lT.focus(), void 0 !== lT
                        }(yT.current, fT.current)) null === (kT = yT.current) || void 0 === kT || kT.focus();
                      TT.shiftKey || CT(!1)
                    }
                  },
                  children: [uT(KT).title, (0, vT.jsx)(hT, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, vT.jsx)(rT, {
                lang: "ts",
                code: cT,
                compact: !0
              })]
            }), null !== QT && void 0 !== QT ? QT : document.body)]
          })
        }
        var ek = cT(218),
          Gk = cT(4730),
          Vk = cT(4739),
          Ek = cT(4745);
        const Zk = {
          progressBar: {
            Xk: 30,
            Lk: .075,
            Rk: 5,
            gk: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            Uk: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            Bk: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            Wk: !0,
            scale: 3,
            rotation: 15,
            nk: !1
          },
          gravityBar: {
            Xk: 30,
            qk: .25,
            sk: 3,
            Tc: .8,
            gravity: 1,
            kc: 1.5,
            cc: 8,
            lc: 4,
            gk: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            Kc: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            yc: 5,
            fc: 1200,
            xc: .15,
            Ic: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var uk = cT(328),
          Xk = cT(2022);

        function dk(TT) {
          return TT.startsWith("fa-")
        }
        const Lk = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          Rk = {
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

        function gk(TT) {
          return "string" === typeof TT ? "text" : "entityName" in TT || "translationKey" in TT ? "other" : (0, uk.gb)(TT) ? "progressBar" : (0, uk.eb)(TT) ? "keyBinding" : "icon" in TT ? "icon" : "str" in TT && "string" === typeof TT.str ? "text" : "other"
        }
        const Uk = [{
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
          Yk = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...Uk],
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
                options: Xk.m
              },
              isRequired: !0
            }, ...Uk],
            other: []
          };

        function Bk(TT) {
          return "string" === typeof TT ? {
            str: TT
          } : TT
        }

        function Wk(TT, kT) {
          let cT = Bk(TT);
          for (const lT of kT) cT = cT && "object" === typeof cT ? cT[lT] : void 0;
          return cT
        }

        function nk(TT, kT, cT) {
          const lT = (TT, MT) => {
            var KT;
            const OT = kT[MT],
              yT = {
                ...TT
              };
            if (MT === kT.length - 1) return void 0 === cT ? delete yT[OT] : yT[OT] = cT, yT;
            const fT = lT(null !== (KT = TT[OT]) && void 0 !== KT ? KT : {}, MT + 1);
            return 0 === Object.keys(fT).length ? delete yT[OT] : yT[OT] = fT, yT
          };
          return function(TT) {
            const kT = Object.keys(TT);
            return "string" === typeof TT.str && 1 === kT.length ? TT.str : TT
          }(lT(Bk(TT), 0))
        }

        function pk(TT, kT) {
          const cT = gk(TT),
            lT = Yk[cT].find((TT => TT.path.join(".") === kT.join("."))),
            MT = null !== lT && void 0 !== lT && lT.isRequired && "other" !== cT ? Wk(Rk[cT], kT) : void 0;
          return nk(TT, kT, MT)
        }

        function ik(TT) {
          switch (gk(TT)) {
            case "text":
              return String(Wk(TT, ["str"]));
            case "icon":
              return String(Wk(TT, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(Wk(TT,["progress"])))}%`;
            case "keyBinding":
              return String(Wk(TT, ["action"]));
            case "other":
              return JSON.stringify(TT)
          }
        }
        const qk = /^[A-Za-z_$][\w$]*$/;

        function sk(TT) {
          if (Array.isArray(TT)) return `[${TT.map(sk).join(", ")}]`;
          if (TT && "object" === typeof TT) {
            const kT = Object.entries(TT).map((TT => {
              let [kT, cT] = TT;
              return `${qk.test(kT)?kT:JSON.stringify(kT)}: ${sk(cT)}`
            }));
            return 0 === kT.length ? "{}" : `{ ${kT.join(", ")} }`
          }
          return JSON.stringify(TT)
        }

        function Tc(TT) {
          const kT = TT.map(sk),
            cT = `[${kT.join(", ")}]`;
          return cT.length <= 60 ? cT : `[\n${kT.map((TT=>`    ${TT},`)).join("\n")}\n]`
        }
        const kc = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function cc(TT) {
          let kT = "";
          for (let MT = 0; MT < TT.length; MT++) {
            const KT = TT[MT];
            if ("\\" === KT) {
              var cT;
              const lT = null !== (cT = TT[MT + 1]) && void 0 !== cT ? cT : "";
              kT += "'" === lT ? "'" : KT + lT, MT++
            } else if ('"' === KT) kT += '\\"';
            else {
              var lT;
              kT += null !== (lT = kc[KT]) && void 0 !== lT ? lT : KT
            }
          }
          return `"${kT}"`
        }

        function lc(TT) {
          if ("string" === typeof TT) return !0;
          if (!TT || "object" !== typeof TT || Array.isArray(TT)) return !1;
          const kT = TT;
          return "ProgressBar" === kT.type ? "number" === typeof kT.progress : "StyledKeyBinding" === kT.type ? Xk.m.includes(kT.action) : "string" === typeof kT.icon || "string" === typeof kT.str || "string" === typeof kT.entityName || "string" === typeof kT.translationKey
        }

        function Mc(TT) {
          let kT;
          try {
            kT = function(TT) {
              let kT = "",
                cT = "",
                lT = 0;
              const MT = () => {
                kT += cT.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), cT = ""
              };
              for (; lT < TT.length;) {
                const KT = TT.slice(lT).search(/["'`]|\/\//);
                if (-1 === KT) {
                  cT += TT.slice(lT);
                  break
                }
                cT += TT.slice(lT, lT + KT);
                const OT = lT + KT,
                  yT = TT[OT];
                if ("/" === yT) {
                  const kT = TT.indexOf("\n", OT);
                  lT = -1 === kT ? TT.length : kT;
                  continue
                }
                if (MT(), "`" === yT) throw new Error("Use quotes rather than template strings.");
                let fT = OT + 1;
                for (; fT < TT.length && TT[fT] !== yT;) fT += "\\" === TT[fT] ? 2 : 1;
                if (fT >= TT.length) throw new Error("A string is missing its closing quote.");
                const xT = TT.slice(OT + 1, fT);
                kT += cc(xT), lT = fT + 1
              }
              return MT(), JSON.parse(kT)
            }(TT.trim())
          } catch (lT) {
            return {
              parts: null,
              error: lT instanceof SyntaxError ? "This isn't a valid array yet." : lT.message
            }
          }
          if (!Array.isArray(kT)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const cT = kT.findIndex((TT => !lc(TT)));
          return -1 !== cT ? {
            parts: null,
            error: `Part ${cT+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: kT,
            error: null
          }
        }
        const Kc = 1 / ek.f.clientTicksPerSecond,
          Oc = 700,
          yc = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          fc = {
            progressBar: Zk.progressBar.Uk,
            timedClick: Zk.timedClick.icon,
            gravityBar: Zk.gravityBar.icon,
            precisionBar: Zk.precisionBar.icon,
            rhythmClick: Zk.rhythmClick.icon
          };

        function xc(TT) {
          let {
            type: kT
          } = TT;
          const [cT, MT] = (0, lT.useState)("ready"), [OT, yT] = (0, lT.useState)(1), [fT, xT] = (0, lT.useState)(!0), IT = (0, lT.useRef)(null), AT = (0, lT.useRef)(null), CT = (0, lT.useRef)(null), jT = (0, lT.useRef)(new Set), tT = (0, lT.useRef)(!1), NT = fc[kT], QT = (0, lT.useMemo)((() => ({
            getState: () => {
              var TT, kT;
              return null !== (TT = null === (kT = CT.current) || void 0 === kT ? void 0 : kT.getState()) && void 0 !== TT ? TT : yc
            },
            onFrame: TT => (jT.current.add(TT), () => {
              jT.current.delete(TT)
            })
          })), []);
          (0, lT.useEffect)((() => {
            const TT = IT.current,
              kT = AT.current;
            if (!TT || !kT) return;
            const cT = new ResizeObserver((() => {
              yT(TT.clientWidth / Math.max(1, kT.offsetWidth))
            }));
            return cT.observe(TT), () => {
              cT.disconnect()
            }
          }), []), (0, lT.useEffect)((() => {
            var TT;
            if ("playing" !== cT) return;
            let lT = !1;
            const KT = new Ek.g[kT](Zk[kT], (TT => {
              lT = !0, xT(!1), MT(TT ? "succeeded" : "failed")
            }), (() => {}));
            CT.current = KT;
            let OT = 0,
              yT = performance.now(),
              fT = requestAnimationFrame((function TT(kT) {
                for (OT += Math.min(.25, (kT - yT) / 1e3), yT = kT; OT >= Kc && !lT;) OT -= Kc, KT.handleTick(Kc);
                for (const cT of jT.current) cT();
                lT || (fT = requestAnimationFrame(TT))
              }));
            return null === (TT = IT.current) || void 0 === TT || TT.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(fT), KT.tearDown(), CT.current = null, tT.current = !1
            }
          }), [cT, kT]), (0, lT.useEffect)((() => {
            if (fT) return;
            const TT = setTimeout((() => {
              xT(!0)
            }), Oc);
            return () => {
              clearTimeout(TT)
            }
          }), [fT]);
          const ST = TT => {
            var kT;
            "playing" === cT && tT.current !== TT && (tT.current = TT, null === (kT = CT.current) || void 0 === kT || kT.handleMouseInput(TT))
          };
          return (0, vT.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, vT.jsxs)("div", {
              ref: IT,
              className: KT()("DocsQteStage", {
                Playing: "playing" === cT
              }),
              tabIndex: "playing" === cT ? 0 : -1,
              role: "playing" === cT ? "button" : void 0,
              "aria-label": "playing" === cT ? `${kT} quick time event: click or press Space` : void 0,
              onPointerDown: TT => {
                0 === TT.button && ST(!0)
              },
              onPointerUp: () => {
                ST(!1)
              },
              onPointerLeave: () => {
                ST(!1)
              },
              onPointerCancel: () => {
                ST(!1)
              },
              onKeyDown: TT => {
                "playing" !== cT || " " !== TT.key && "Enter" !== TT.key || (TT.preventDefault(), ST(!0))
              },
              onKeyUp: TT => {
                "playing" !== cT || " " !== TT.key && "Enter" !== TT.key || ST(!1)
              },
              children: [(0, vT.jsx)("div", {
                ref: AT,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${OT})`
                },
                children: "playing" === cT && (0, vT.jsx)(Vk.d.Provider, {
                  value: QT,
                  children: (0, vT.jsx)(Gk.e, {
                    qte: {
                      type: kT,
                      parameters: Zk[kT]
                    }
                  })
                })
              }), "playing" !== cT && (0, vT.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== cT && (0, vT.jsxs)("div", {
                  className: KT()("DocsQteResult", "succeeded" === cT ? "Succeeded" : "Failed"),
                  children: [(0, vT.jsx)(hT, {
                    name: "succeeded" === cT ? "check" : "cross",
                    isTinted: !0
                  }), (0, vT.jsx)("span", {
                    children: "succeeded" === cT ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, vT.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !fT,
                  onClick: () => {
                    MT("playing")
                  },
                  children: [(0, vT.jsx)(hT, {
                    name: "ready" === cT ? "play" : "replay"
                  }), (0, vT.jsx)("span", {
                    children: "ready" === cT ? `Try ${kT}` : "Play again"
                  })]
                })]
              })]
            }), NT && !dk(NT) && (0, vT.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, vT.jsx)("code", {
                children: NT
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function Ic(TT) {
          let {
            level: kT,
            text: cT,
            anchor: lT,
            className: MT
          } = TT;
          const OT = `h${Math.min(kT,6)}`;
          return (0, vT.jsxs)(OT, {
                id: lT,
                className: KT()("DocsHeading", MT),
                children: [(0, vT.jsx)(Fk, {
                      text: cT
                    }), (0, vT.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${lT}`,
                        "aria-label": `Link to ${cT.replace(/`/g,"")}`,children:"#"})]})}function Ac(TT){let{items:kT,ordered:cT}=TT;const lT=cT?"ol":"ul";return(0,vT.jsx)(lT,{className:"DocsList",children:kT.map(((TT,kT)=>(0,vT.jsxs)("li",{children:[(0,vT.jsx)(Fk,{text:TT.text}),TT.children.length>0&&(0,vT.jsx)(Ac,{items:TT.children,ordered:cT})]},kT)))})}function Cc(TT){const kT=TT[0],cT="paragraph"===(null===kT||void 0===kT?void 0:kT.kind)?kT.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(cT)?"warning":/^\*\*(tip|prefer)/.test(cT)?"tip":"note"}function jc(TT){let{block:kT}=TT;switch(kT.kind){case"heading":return(0,vT.jsx)(Ic,{level:kT.level,text:kT.text,anchor:kT.anchor});case"paragraph":return(0,vT.jsx)("p",{children:(0,vT.jsx)(Fk,{text:kT.text})});case"code":{const TT="ts"===kT.lang?function(TT){const kT=TT.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return kT&&Object.hasOwn(Zk,kT[1])?kT[1]:null}(kT.code):null;return(0,vT.jsxs)(vT.Fragment,{children:[(0,vT.jsx)(rT,{code:kT.code,lang:kT.lang}),TT&&(0,vT.jsx)(xc,{type:TT})]})}case"table":return(0,vT.jsx)("div",{className:"DocsTableScroll",children:(0,vT.jsxs)("table",{className:"DocsTable",children:[(0,vT.jsx)("thead",{children:(0,vT.jsx)("tr",{children:kT.header.map(((TT,kT)=>(0,vT.jsx)("th",{children:(0,vT.jsx)(Fk,{text:TT})},kT)))})}),(0,vT.jsx)("tbody",{children:kT.rows.map(((TT,kT)=>(0,vT.jsx)("tr",{children:TT.map(((TT,kT)=>(0,vT.jsx)("td",{children:(0,vT.jsx)(Fk,{text:TT})},kT)))},kT)))})]})});case"list":return(0,vT.jsx)(Ac,{items:kT.items,ordered:kT.ordered});case"quote":return(0,vT.jsx)("aside",{className:KT()("DocsCallout",Cc(kT.blocks)),children:(0,vT.jsx)(vc,{blocks:kT.blocks})});case"rule":return(0,vT.jsx)("hr",{className:"DocsRule"})}}function vc(TT){let{blocks:kT}=TT;return(0,vT.jsx)(vT.Fragment,{children:kT.map(((TT,kT)=>(0,vT.jsx)(jc,{block:TT},kT)))})}var tc=cT(4717),hc=cT(4720);function Nc(TT){return"blocks"===TT||"items"===TT}const Qc=new Map;function Sc(TT){let kT=Qc.get(TT);return kT||(kT=function(TT){const kT={entries:[],legend:[],notes:[],examples:[]};let cT=!1;for(const KT of TT.split(/\r?\n/).slice(1)){if(KT.startsWith("#")){const TT=KT.replace(/^# ?/,""),lT=TT.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);lT?kT.legend.push({code:lT[1],meaning:lT[2],usage:lT[3].trim()}):/^Examples:/.test(TT.trim())?cT=!0:cT&&TT.trim()?kT.examples.push(TT.trim()):TT.trim()&&!/^\s/.test(TT)&&kT.notes.push(TT.trim());continue}const TT=KT.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var lT,MT;TT&&kT.entries.push({name:TT[1],variants:null!==(lT=null===(MT=TT[2])||void 0===MT?void 0:MT.split(","))&&void 0!==lT?lT:[]})}return kT}("blocks"===TT?tc:hc),Qc.set(TT,kT)),kT}function Dc(TT){let{className:kT,value:cT,placeholder:lT,label:MT,onChange:KT,count:OT,children:yT}=TT;return(0,vT.jsxs)("div",{className:kT,children:[(0,vT.jsx)(hT,{name:"magnifying-glass"}),(0,vT.jsx)("input",{type:"search",value:cT,placeholder:lT,"aria-label":MT,onChange:TT=>{KT(TT.target.value)}}),yT,OT&&(0,vT.jsxs)("span",{className:"DocsFilterCount",children:[OT.visible," of ",OT.total]})]})}var ac=cT(1061);function Fc(TT){const kT=TT.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return kT?kT[2]:null}function rc(TT){return"paragraph"===TT.kind&&""===TT.text.trim()}function Pc(TT){const kT={name:TT.heading.text,description:[],params:[],returns:null};let cT="description";for(const MT of TT.blocks)if(!rc(MT))if("heading"===MT.kind&&/^Parameters:?$/.test(MT.text))cT="params";else if("heading"===MT.kind&&/^Returns:?$/.test(MT.text))cT="returns",kT.returns={type:"",description:[]};else if("params"!==cT||"table"!==MT.kind){if("returns"===cT&&"paragraph"===MT.kind&&""===kT.returns.type){const TT=Fc(MT.text);if(null!==TT){kT.returns.type=TT.replaceAll("\\|","|");continue}}"returns"===cT?kT.returns.description.push(MT):kT.description.push(MT)}else for(const[TT,cT,KT]of MT.rows){var lT;kT.params.push({name:TT,type:null!==(lT=Fc(cT))&&void 0!==lT?lT:cT,description:null!==KT&&void 0!==KT?KT:""})}return kT}const wc=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function mc(TT){return TT.filter((TT=>!rc(TT)))}const bc=/^[\w][\w .'&!:()-]*$/,zc=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function Jc(TT){var kT;if("code"===TT.kind&&"text"===TT.lang){const kT=TT.code.split("\n").map((TT=>TT.trim())).filter(Boolean);return kT.length>0&&kT.every((TT=>bc.test(TT)))?kT.map((TT=>({name:TT}))):null}return"paragraph"===TT.kind&&zc.test(TT.text.trim())?[...TT.text.matchAll(/`([ ^ `]+)` / g)].flatMap((TT => TT[1].split(/,\s*/).map((TT => ({
                              name: TT.trim()
                            }))))): "table" === TT.kind && null !== (kT = TT.header[0]) && void 0 !== kT && kT.startsWith("Song") ? TT.rows.map((TT => {
                              let [kT, cT] = TT;
                              return {
                                name: kT.replace(/`/g, ""),
                                caption: cT
                              }
                            })) : null
                          }

                          function oc(TT) {
                            const kT = [];
                            for (const cT of TT) {
                              const TT = Jc(cT),
                                lT = kT.at(-1),
                                MT = "table" === cT.kind;
                              TT ? "names" === (null === lT || void 0 === lT ? void 0 : lT.kind) && lT.isSongs === MT ? lT.names.push(...TT) : kT.push({
                                kind: "names",
                                names: TT,
                                isSongs: MT
                              }) : kT.push({
                                kind: "block",
                                block: cT
                              })
                            }
                            return kT
                          }
                          const Hc = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function ec(TT, kT) {
                            return `${Hc[TT]}-${(0,PT.p)(kT)}`
                          }
                          const Gc = new WeakMap;

                          function Vc(TT, kT, cT) {
                            let lT = Gc.get(kT);
                            if (!lT) {
                              lT = new Map;
                              const cT = new Set;
                              for (const MT of (0, PT.q)(kT)) {
                                const kT = oc(mc(MT.blocks)).map((kT => {
                                  if ("block" === kT.kind) return kT;
                                  return {
                                    kind: "names",
                                    names: kT.names.map((kT => {
                                      var lT, KT;
                                      const OT = ec(TT, kT.name);
                                      let yT = OT;
                                      for (let TT = 2; cT.has(yT); TT++) yT = `${OT}-${TT}`;
                                      return cT.add(yT), {
                                        ...kT,
                                        anchor: yT,
                                        heading: null !== (lT = null === (KT = MT.heading) || void 0 === KT ? void 0 : KT.text) && void 0 !== lT ? lT : ""
                                      }
                                    })),
                                    isSongs: kT.isSongs
                                  }
                                }));
                                lT.set(MT.blocks, kT)
                              }
                              Gc.set(kT, lT)
                            }
                            const MT = lT.get(cT);
                            if (!MT) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return MT
                          }
                          const Ec = "/textures/docs/skinPreviews",
                            Zc = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var uc = cT(4220),
                            Xc = cT(4235);

                          function dc(TT) {
                            return Object.hasOwn(uc.d, TT) ? uc.d[TT] : null
                          }
                          const Lc = {
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
                            blendMode: Xc.f.Standard
                          };

                          function Rc(TT, kT, cT) {
                            return kT + (cT - kT) * TT()
                          }

                          function gc(TT, kT, cT) {
                            return TT + (kT - TT) * cT
                          }

                          function Uc(TT) {
                            return TT.length > 0 && "timeFraction" in TT[0]
                          }

                          function Yc(TT, kT) {
                            if (0 === TT.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!Uc(TT.colorGradients)) {
                              const cT = TT.colorGradients,
                                {
                                  color: lT
                                } = cT[Math.floor(kT() * cT.length) % cT.length];
                              return [{
                                at: 0,
                                colour: [lT[0] / 255, lT[1] / 255, lT[2] / 255, 1]
                              }]
                            }
                            return [...TT.colorGradients].sort(((TT, kT) => TT.timeFraction - kT.timeFraction)).map((TT => {
                              var cT, lT, MT;
                              const KT = TT.minColor,
                                OT = null !== (cT = TT.maxColor) && void 0 !== cT ? cT : KT,
                                yT = kT(),
                                fT = [gc(KT[0], OT[0], yT) / 255, gc(KT[1], OT[1], yT) / 255, gc(KT[2], OT[2], yT) / 255, gc(null !== (lT = KT[3]) && void 0 !== lT ? lT : 1, null !== (MT = OT[3]) && void 0 !== MT ? MT : 1, yT)];
                              return {
                                at: TT.timeFraction,
                                colour: fT
                              }
                            }))
                          }

                          function Bc(TT, kT, cT, lT) {
                            const MT = Rc(lT, TT.minEmitPower, TT.maxEmitPower),
                              KT = kT => Rc(lT, Math.min(TT.dir1[kT], TT.dir2[kT]), Math.max(TT.dir1[kT], TT.dir2[kT])) * MT,
                              OT = [...TT.velocityGradients].sort(((TT, kT) => TT.timeFraction - kT.timeFraction)).map((TT => ({
                                at: TT.timeFraction,
                                factor: Rc(lT, TT.factor, TT.factor2)
                              })));
                            return {
                              pos: [Rc(lT, kT[0], cT[0]), Rc(lT, kT[1], cT[1]), Rc(lT, kT[2], cT[2])],
                              dir: [KT(0), KT(1), KT(2)],
                              age: 0,
                              life: Rc(lT, TT.minLifeTime, TT.maxLifeTime),
                              size: Rc(lT, TT.minSize, TT.maxSize),
                              colours: Yc(TT, lT),
                              velocityFactors: OT
                            }
                          }

                          function Wc(TT, kT, cT, lT) {
                            if (kT < TT[0].at) return cT(Math.min(1, TT.length - 1));
                            for (let MT = 0; MT < TT.length - 1; MT++)
                              if (kT <= TT[MT + 1].at) {
                                const KT = TT[MT + 1].at - TT[MT].at;
                                return lT(cT(MT), cT(MT + 1), KT > 0 ? (kT - TT[MT].at) / KT : 1)
                              } return cT(TT.length - 1)
                          }

                          function nc(TT) {
                            return Wc(TT.colours, TT.age / TT.life, (kT => TT.colours[kT].colour), ((TT, kT, cT) => [gc(TT[0], kT[0], cT), gc(TT[1], kT[1], cT), gc(TT[2], kT[2], cT), gc(TT[3], kT[3], cT)]))
                          }

                          function pc(TT, kT, cT) {
                            if (TT.age += cT, TT.age >= TT.life) return !1;
                            const lT = function(TT) {
                              return 0 === TT.velocityFactors.length ? 1 : Wc(TT.velocityFactors, TT.age / TT.life, (kT => TT.velocityFactors[kT].factor), gc)
                            }(TT) * cT;
                            for (let KT = 0; KT < 3; KT++) {
                              var MT;
                              TT.pos[KT] += TT.dir[KT] * lT, TT.dir[KT] += (null !== (MT = kT[KT]) && void 0 !== MT ? MT : 0) * cT
                            }
                            return !0
                          }

                          function ic(TT) {
                            return String(Math.round(1e6 * TT) / 1e6)
                          }

                          function qc(TT) {
                            return `[${TT.map(ic).join(", ")}]`
                          }

                          function sc(TT, kT) {
                            const cT = `${kT}    `;
                            return `[\n${(Uc(TT)?TT.map((TT=>{const kT=[`${cT}    timeFraction: ${ic(TT.timeFraction)},`,`${cT}    minColor: ${qc(TT.minColor)},`];return TT.maxColor&&kT.push(`${cT}    maxColor: ${qc(TT.maxColor)},`),`${cT}{\n${kT.join("\n")}\n${cT}},`})):TT.map((TT=>`
                            $ {
                              cT
                            } {
                              color: $ {
                                qc(TT.color)
                              }
                            }, `))).join("\n")}\n${kT}]`
                          }
                          const Tl = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            kl = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const cl = .6;

                          function ll(TT, kT) {
                            return `${kT?"song":"sound"}:${TT}`
                          }
                          let Ml = {
                              track: null,
                              volume: cl
                            },
                            Kl = null,
                            Ol = 0,
                            yl = 0;
                          const fl = new Set;

                          function xl(TT) {
                            Ml = {
                              ...Ml,
                              ...TT
                            }, fl.forEach((TT => {
                              TT()
                            }))
                          }

                          function Il(TT) {
                            Ml.track && xl({
                              track: {
                                ...Ml.track,
                                ...TT
                              }
                            })
                          }

                          function Al(TT) {
                            const [kT, cT] = (0, lT.useState)((() => TT(Ml))), MT = (0, lT.useRef)(TT);
                            return MT.current = TT, (0, lT.useEffect)((() => {
                              const TT = () => {
                                cT((() => MT.current(Ml)))
                              };
                              return fl.add(TT), TT(), () => {
                                fl.delete(TT)
                              }
                            }), []), kT
                          }

                          function Cl() {
                            Ol++;
                            const TT = Kl;
                            Kl = null, null === TT || void 0 === TT || TT.stop()
                          }

                          function jl(TT, kT) {
                            let lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            Cl();
                            const MT = Ol,
                              {
                                track: KT
                              } = Ml,
                              OT = KT && KT.name === TT && KT.isSong === kT ? KT.duration : 0;
                            yl = lT, xl({
                              track: {
                                name: TT,
                                isSong: kT,
                                status: "loading",
                                duration: OT
                              }
                            }), Promise.all([cT.e(216), cT.e(241)]).then((() => cT(39432))).then((cT => {
                              let {
                                playDocsSound: KT
                              } = cT;
                              MT === Ol && (Kl = KT(TT, kT, Ml.volume, lT, {
                                onPlay: TT => {
                                  MT === Ol && Il({
                                    status: "playing",
                                    duration: TT
                                  })
                                },
                                onEnd: TT => {
                                  var kT, cT;
                                  MT === Ol && (Kl = null, TT ? xl({
                                    track: null
                                  }) : (yl = null !== (kT = null === (cT = Ml.track) || void 0 === cT ? void 0 : cT.duration) && void 0 !== kT ? kT : 0, Il({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((kT => {
                              console.error(`Could not play docs sound ${TT}`, kT), MT === Ol && xl({
                                track: null
                              })
                            }))
                          }

                          function vl() {
                            const {
                              track: TT
                            } = Ml;
                            if (!TT) return;
                            if ("playing" === TT.status && Kl) return yl = Kl.kN(), Kl.pause(), void Il({
                              status: "paused"
                            });
                            if ("loading" === TT.status) return Cl(), void Il({
                              status: "paused"
                            });
                            if (Kl) return void Kl.resume();
                            const kT = TT.duration > 0 && yl >= TT.duration - .05;
                            jl(TT.name, TT.isSong, kT ? 0 : yl)
                          }

                          function tl() {
                            var TT;
                            return Kl && "playing" === (null === (TT = Ml.track) || void 0 === TT ? void 0 : TT.status) ? Kl.kN() : yl
                          }

                          function hl(TT) {
                            var kT;
                            null === (kT = Kl) || void 0 === kT || kT.setVolume(TT), xl({
                              volume: TT
                            })
                          }

                          function Nl() {
                            Cl(), yl = 0, xl({
                              track: null
                            })
                          }
                          const Ql = (0, lT.createContext)(null);
                          let Sl = null;

                          function Dl() {
                            const [TT, kT] = (0, lT.useState)(null);
                            return (0, lT.useEffect)((() => {
                              let TT = !1;
                              return Sl ??= Promise.all([cT.e(70), cT.e(73), cT.e(72), cT.e(71), cT.e(196), cT.e(97), cT.e(221)]).then((() => cT(39426))), Sl.then((cT => {
                                TT || kT(cT)
                              }), (TT => {
                                console.error("Could not load the docs gallery's textures", TT), Sl = null
                              })), () => {
                                TT = !0
                              }
                            }), []), TT
                          }
                          const al = 24,
                            Fl = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function rl(TT, kT) {
                            const cT = "skins" === TT ? function(TT, kT) {
                              const cT = Zc.find((kT => TT.startsWith(kT.heading)));
                              return cT ? function(TT, kT) {
                                return `${TT}-${kT}`
                              }(cT.prefix, kT) : null
                            }(kT.heading, kT.name) : null;
                            return null === cT ? null : `${Ec}/${cT}.webp`
                          }

                          function Pl(TT) {
                            let {
                              kind: kT,
                              entry: cT,
                              assets: MT,
                              renderedUrl: OT
                            } = TT;
                            const {
                              name: yT
                            } = cT, [fT, xT] = (0, lT.useState)(!1);
                            if ("icons" === kT && dk(yT)) return (0, vT.jsx)(ac.e, {
                              className: "DocsTileIcon",
                              name: yT
                            });
                            let IT = null;
                            var AT;
                            if ("icons" === kT) IT = null !== (AT = null === MT || void 0 === MT ? void 0 : MT.getIngameIconUrl(yT)) && void 0 !== AT ? AT : null;
                            else if ("particles" === kT) {
                              var CT, jT, tT;
                              IT = null !== (CT = null === MT || void 0 === MT ? void 0 : MT.getParticleTextureUrl(null !== (jT = null === (tT = dc(yT)) || void 0 === tT ? void 0 : tT.texture) && void 0 !== jT ? jT : yT)) && void 0 !== CT ? CT : null
                            } else "skins" === kT && (IT = null !== OT && void 0 !== OT ? OT : Fl.test(yT) ? `/textures/charSkins/previews/${yT}_preview.png` : null);
                            return !IT || fT ? (0, vT.jsx)(hT, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === kT ? "person" : "image"
                            }) : (0, vT.jsx)("img", {
                              className: KT()("DocsTileImage", {
                                Pixelated: "skins" !== kT
                              }),
                              src: IT,
                              srcSet: IT === OT ? `${IT} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${IT}`), xT(!0)
                              }
                            })
                          }

                          function wl(TT) {
                            let {
                              entry: kT,
                              isSong: cT
                            } = TT;
                            const lT = Al((TT => {
                                let {
                                  track: lT
                                } = TT;
                                return (null === lT || void 0 === lT ? void 0 : lT.name) === kT.name && lT.isSong === cT ? lT.status : null
                              })),
                              MT = null !== lT && "paused" !== lT;
                            return (0, vT.jsxs)("button", {
                              type: "button",
                              id: kT.anchor,
                              className: KT()("DocsSoundTile", {
                                Playing: MT
                              }),
                              "data-docs-track": ll(kT.name, cT),
                              "aria-label": MT ? `Pause ${kT.name}` : `Play ${kT.name}`,
                              onClick: () => {
                                null !== lT ? vl() : jl(kT.name, cT)
                              },
                              children: [(0, vT.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, vT.jsx)(hT, {
                                  name: MT ? "pause" : "play"
                                })
                              }), (0, vT.jsx)("code", {
                                className: "DocsSoundName",
                                children: kT.name
                              }), kT.caption && (0, vT.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: kT.caption
                              })]
                            })
                          }

                          function ml(TT) {
                            let {
                              kind: kT,
                              names: cT,
                              isSongs: MT
                            } = TT;
                            const OT = Dl(),
                              [yT, fT] = QT(),
                              xT = !1 === (null === yT || void 0 === yT ? void 0 : yT.failed) ? yT.text : null,
                              IT = (0, lT.useContext)(Ql),
                              [AT, CT] = (0, lT.useState)(""),
                              jT = AT.trim().toLowerCase(),
                              tT = jT ? cT.filter((TT => TT.name.toLowerCase().includes(jT))) : cT;
                            return (0, vT.jsxs)("div", {
                              className: "DocsGallery",
                              children: [cT.length > al && (0, vT.jsx)(Dc, {
                                className: "DocsGalleryFilter",
                                value: AT,
                                placeholder: `Filter ${cT.length} names\u2026`,
                                label: "Filter names",
                                onChange: CT,
                                count: jT ? {
                                  visible: tT.length,
                                  total: cT.length
                                } : null
                              }), (0, vT.jsx)("div", {
                                className: KT()("DocsGalleryGrid", `Kind-${kT}`, {
                                  Songs: MT
                                }),
                                children: tT.map((TT => {
                                  if ("sounds" === kT) return (0, vT.jsx)(wl, {
                                    entry: TT,
                                    isSong: MT
                                  }, TT.anchor);
                                  if (IT && "particles" === kT && dc(TT.name)) return (0, vT.jsxs)("button", {
                                    type: "button",
                                    id: TT.anchor,
                                    className: KT()("DocsTile Previewable", {
                                      Copied: xT === TT.name
                                    }),
                                    title: `Play "${TT.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      IT(TT.name), fT(TT.name)
                                    },
                                    children: [(0, vT.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, vT.jsx)(Pl, {
                                        kind: kT,
                                        entry: TT,
                                        assets: OT,
                                        renderedUrl: null
                                      }), (0, vT.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, vT.jsx)(hT, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, vT.jsx)("span", {
                                      className: "DocsTileName",
                                      children: xT === TT.name ? "Copied!" : TT.name
                                    })]
                                  }, TT.anchor);
                                  const cT = rl(kT, TT);
                                  return (0, vT.jsxs)("button", {
                                    type: "button",
                                    id: TT.anchor,
                                    className: KT()("DocsTile", {
                                      Copied: xT === TT.name
                                    }),
                                    title: `Copy "${TT.name}"`,
                                    onClick: () => {
                                      fT(TT.name)
                                    },
                                    children: [(0, vT.jsx)("span", {
                                      className: KT()("DocsTilePreview", {
                                        Rendered: null !== cT
                                      }),
                                      children: (0, vT.jsx)(Pl, {
                                        kind: kT,
                                        entry: TT,
                                        assets: OT,
                                        renderedUrl: cT
                                      })
                                    }), (0, vT.jsx)("span", {
                                      className: "DocsTileName",
                                      children: xT === TT.name ? "Copied!" : TT.name
                                    })]
                                  }, TT.anchor)
                                }))
                              })]
                            })
                          }

                          function bl(TT) {
                            let {
                              kind: kT,
                              content: cT,
                              blocks: lT
                            } = TT;
                            return (0, vT.jsx)(vT.Fragment, {
                              children: Vc(kT, cT, lT).map(((TT, cT) => "block" === TT.kind ? (0, vT.jsx)(jc, {
                                block: TT.block
                              }, cT) : (0, vT.jsx)(ml, {
                                kind: kT,
                                names: TT.names,
                                isSongs: TT.isSongs
                              }, cT)))
                            })
                          }
                          const zl = [{
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

                          function Jl(TT) {
                            let {
                              cards: kT = zl,
                              label: cT = "Start here"
                            } = TT;
                            const MT = (0, lT.useContext)(jk);
                            return (0, vT.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": cT,
                              children: kT.map((TT => {
                                let {
                                  pageId: kT,
                                  countNoun: cT
                                } = TT;
                                const lT = uT(kT);
                                return (0, vT.jsxs)(OT.e, {
                                  to: UT(MT, lT),
                                  className: "DocsLandingCard",
                                  children: [(0, vT.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, vT.jsx)(hT, {
                                      name: lT.icon
                                    })
                                  }), (0, vT.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: lT.title
                                  }), (0, vT.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: lT.summary
                                  }), cT && (0, vT.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [dT(lT).sections.length, " ", cT]
                                  })]
                                }, kT)
                              }))
                            })
                          }
                          const ol = 240;

                          function Hl(TT) {
                            let {
                              faces: kT
                            } = TT;
                            return (0, vT.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, vT.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${kT.top}")`
                                }
                              }), (0, vT.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${kT.left}")`
                                }
                              }), (0, vT.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${kT.right}")`
                                }
                              })]
                            })
                          }

                          function el(TT) {
                            let {
                              src: kT
                            } = TT;
                            const [cT, MT] = (0, lT.useState)(!1);
                            return cT ? null : (0, vT.jsx)("img", {
                              src: kT,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${kT}`), MT(!0)
                              }
                            })
                          }

                          function Gl(TT) {
                            let {
                              kind: kT
                            } = TT;
                            const cT = Sc(kT),
                              MT = Dl(),
                              OT = (0, yT.s)(),
                              [fT, xT] = (0, lT.useState)(""),
                              [IT, AT] = (0, lT.useState)(null),
                              [CT, jT] = (0, lT.useState)(ol),
                              [tT, NT] = (0, lT.useState)(null),
                              QT = (0, lT.useRef)(null),
                              DT = fT.trim().toLowerCase();
                            (0, lT.useEffect)((() => {
                              const TT = (0, PT.o)(OT.hash),
                                lT = cT.entries.find((cT => ec(kT, cT.name) === TT));
                              if (lT) QT.current = lT.name, xT(lT.name), AT(null), NT(lT.name);
                              else if (null !== QT.current) {
                                const TT = QT.current;
                                QT.current = null, xT((kT => kT === TT ? "" : kT)), NT(null)
                              }
                            }), [cT, kT, OT.hash, OT.key]), (0, lT.useEffect)((() => {
                              var TT;
                              null !== tT && (null === (TT = document.getElementById(ec(kT, tT))) || void 0 === TT || TT.scrollIntoView({
                                block: "center"
                              }))
                            }), [kT, tT]);
                            const aT = cT.entries.filter((TT => (!DT || TT.name.toLowerCase().includes(DT)) && (!IT || TT.variants.includes(IT))));
                            return (0, vT.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [cT.notes.length > 0 && (0, vT.jsx)("div", {
                                className: "DocsProse",
                                children: cT.notes.map((TT => (0, vT.jsx)("p", {
                                  children: TT
                                }, TT)))
                              }), cT.legend.length > 0 && (0, vT.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, vT.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, vT.jsx)("thead", {
                                    children: (0, vT.jsxs)("tr", {
                                      children: [(0, vT.jsx)("th", {
                                        children: "Code"
                                      }), (0, vT.jsx)("th", {
                                        children: "Variant"
                                      }), (0, vT.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, vT.jsx)("tbody", {
                                    children: cT.legend.map((TT => (0, vT.jsxs)("tr", {
                                      children: [(0, vT.jsx)("td", {
                                        children: (0, vT.jsx)("button", {
                                          type: "button",
                                          className: KT()("DocsVariantChip", {
                                            Active: IT === TT.code
                                          }),
                                          "aria-pressed": IT === TT.code,
                                          title: `Show only ${kT} with ${TT.meaning} variants`,
                                          onClick: () => {
                                            AT(IT === TT.code ? null : TT.code)
                                          },
                                          children: TT.code
                                        })
                                      }), (0, vT.jsx)("td", {
                                        children: TT.meaning
                                      }), (0, vT.jsx)("td", {
                                        children: (0, vT.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: TT.usage
                                        })
                                      })]
                                    }, TT.code)))
                                  })]
                                })
                              }), cT.examples.length > 0 && (0, vT.jsx)(rT, {
                                lang: "text",
                                code: cT.examples.join("\n")
                              }), (0, vT.jsx)(Dc, {
                                className: "DocsFilterBar",
                                value: fT,
                                placeholder: `Search ${cT.entries.length} ${kT}\u2026`,
                                label: `Search ${kT}`,
                                onChange: TT => {
                                  xT(TT), jT(ol)
                                },
                                count: DT || IT ? {
                                  visible: aT.length,
                                  total: cT.entries.length
                                } : null,
                                children: IT && (0, vT.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    AT(null)
                                  },
                                  children: [IT, " ", (0, vT.jsx)(hT, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, vT.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: aT.slice(0, CT).map((TT => {
                                  const cT = "blocks" === kT ? null === MT || void 0 === MT ? void 0 : MT.getBlockFaces(TT.name) : null,
                                    lT = MT && !cT ? MT.getItemTextureUrl(TT.name) : null;
                                  return (0, vT.jsxs)("div", {
                                    id: ec(kT, TT.name),
                                    className: KT()("DocsCatalogueTile", {
                                      Linked: TT.name === tT
                                    }),
                                    children: [(0, vT.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [cT && (0, vT.jsx)(Hl, {
                                        faces: cT
                                      }), lT && (0, vT.jsx)(el, {
                                        src: lT
                                      })]
                                    }), (0, vT.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: TT.name
                                    }), TT.variants.length > 0 && (0, vT.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: TT.variants.map((TT => (0, vT.jsx)("span", {
                                        children: TT
                                      }, TT)))
                                    }), (0, vT.jsx)(ST, {
                                      text: TT.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, TT.name)
                                }))
                              }), aT.length > CT && (0, vT.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  jT(aT.length)
                                },
                                children: ["Show all ", aT.length]
                              }), 0 === aT.length && (0, vT.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", kT, " match."]
                              })]
                            })
                          }
                          var Vl = cT(4789),
                            El = cT(1602);
                          const Zl = .95 * Vl.b;

                          function ul(TT) {
                            return /^\s*```/.test(TT)
                          }

                          function Xl(TT, kT) {
                            const cT = [
                              []
                            ];
                            let lT = !1;
                            for (const MT of TT.split("\n")) !lT && kT(MT) && cT.at(-1).length > 0 && cT.push([]), ul(MT) && (lT = !lT), cT.at(-1).push(MT);
                            return cT.map((TT => TT.join("\n").trim())).filter(Boolean)
                          }

                          function dl(TT, kT) {
                            const cT = `${"#".repeat(kT)} `,
                              lT = [];
                            let MT = !1;
                            for (const KT of TT.split("\n")) ul(KT) ? MT = !MT : !MT && KT.startsWith(cT) && lT.push(KT.slice(cT.length).trim());
                            return lT
                          }

                          function Ll(TT) {
                            return TT.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class Rl {
                            constructor(TT, kT) {
                              this.origin = kT, this.pages = void 0, this.partPaths = new Map;
                              const cT = TT.map((TT => {
                                const kT = kT => this.resolveLinks(TT, kT).length,
                                  cT = function(TT, kT) {
                                    const cT = TT.map((TT => kT(TT.markdown) + 2)),
                                      lT = cT.reduce(((TT, kT) => TT + kT), 0),
                                      MT = lT / Math.ceil(lT / Zl),
                                      KT = [];
                                    let OT = 0;
                                    return TT.forEach(((TT, kT) => {
                                      const lT = cT[kT];
                                      (0 === KT.length || OT + lT > Zl || OT + lT / 2 > MT) && (KT.push([]), OT = 0), KT.at(-1).push(TT), OT += lT
                                    })), KT
                                  }(function(TT, kT) {
                                    return Xl(TT, (TT => TT.startsWith("## "))).flatMap((TT => {
                                      var cT;
                                      const lT = null !== (cT = dl(TT, 2)[0]) && void 0 !== cT ? cT : "";
                                      if (kT(TT) <= Zl) return [{
                                        markdown: TT,
                                        section: lT
                                      }];
                                      let MT = !1,
                                        KT = "";
                                      return Xl(TT, (TT => {
                                        const kT = MT && "" !== TT.trim();
                                        return MT = "" === TT.trim(), kT
                                      })).map((TT => {
                                        var kT;
                                        const cT = dl(TT, 3),
                                          MT = TT.startsWith("### ") ? cT[0] : KT;
                                        return KT = null !== (kT = cT.at(-1)) && void 0 !== kT ? kT : KT, {
                                          markdown: TT,
                                          section: lT || MT
                                        }
                                      }))
                                    }))
                                  }(Ll(TT), kT), kT);
                                return {
                                  page: TT,
                                  groups: cT.length > 1 ? cT : []
                                }
                              }));
                              for (const {
                                  page: lT,
                                  groups: MT
                                }
                                of cT) MT.forEach(((TT, kT) => {
                                const cT = (0, Vl.t)(lT.slug, kT);
                                for (const MT of TT.flatMap((TT => [...dl(TT.markdown, 2), ...dl(TT.markdown, 3)]))) {
                                  const TT = `${lT.id}#${(0,PT.p)(MT)}`;
                                  this.partPaths.has(TT) || this.partPaths.set(TT, cT)
                                }
                              }));
                              this.pages = cT.map((TT => {
                                let {
                                  page: kT,
                                  groups: cT
                                } = TT;
                                return {
                                  page: kT,
                                  path: (0, Vl.p)(kT.slug),
                                  markdown: `# ${kT.title}\n\n${this.resolveLinks(kT,Ll(kT))}\n`,
                                  parts: cT.map(((TT, lT) => this.renderPart(kT, TT, lT, cT.length)))
                                }
                              }))
                            }
                            url(TT) {
                              return `${this.origin}${TT}`
                            }
                            getPage(TT) {
                              return this.pages.find((kT => kT.page.id === TT))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((TT => (TT.parts.length > 0 ? TT.parts : [{
                                path: TT.path,
                                label: "",
                                markdown: TT.markdown
                              }]).filter((TT => TT.markdown.length > Vl.b))))
                            }
                            markdownUrl(TT, kT) {
                              const cT = kT && this.partPaths.get(`${TT.id}#${kT}`) || (0, Vl.p)(TT.slug);
                              return this.url(kT ? `${cT}#${kT}` : cT)
                            }
                            resolveLinks(TT, kT) {
                              return kT.replace(/\]\((#[^)]+)\)/g, ((kT, cT) => {
                                var lT;
                                const MT = null !== (lT = RT(cT)) && void 0 !== lT ? lT : this.samePageTarget(TT, cT);
                                return MT ? `](${this.markdownUrl(MT.page,MT.anchor)})` : kT
                              }))
                            }
                            samePageTarget(TT, kT) {
                              const cT = (0, PT.p)(kT.slice(1));
                              return LT(TT, cT) ? {
                                page: TT,
                                anchor: cT
                              } : null
                            }
                            renderPart(TT, kT, cT, lT) {
                              const MT = function(TT) {
                                  const kT = TT.map((TT => TT.section)).filter(Boolean);
                                  if (0 === kT.length) return "";
                                  const cT = kT[0],
                                    lT = kT.at(-1);
                                  return cT === lT ? cT : `${cT} to ${lT}`
                                }(kT),
                                KT = kT.map((TT => TT.markdown)).join("\n\n"),
                                OT = MT ? `It covers ${MT}. ` : "",
                                yT = `Part ${cT+1} of ${lT} of [${TT.title}](${this.url((0,Vl.p)(TT.slug))}). ${OT}[llms.txt](${this.url(Vl.e)}) lists every part.`;
                              return {
                                path: (0, Vl.t)(TT.slug, cT),
                                label: MT,
                                markdown: `# ${TT.title}, part ${cT+1} of ${lT}\n\n${yT}\n\n${this.resolveLinks(TT,KT)}\n`
                              }
                            }
                            llmsTxt(TT) {
                              const kT = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${gl(Vl.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const cT of ZT) {
                                kT.push("", `## ${cT.title}`, "");
                                for (const TT of cT.pageIds) {
                                  const cT = this.getPage(TT),
                                    {
                                      page: lT,
                                      parts: MT
                                    } = cT,
                                    KT = `About ${gl(cT.markdown.length)} tokens${MT.length>0?`, in ${MT.length} parts:`:"."}`;
                                  kT.push(`- [${lT.title}](${this.url(cT.path)}): ${lT.summary} ${KT}`), MT.forEach(((TT, cT) => {
                                    kT.push(`  - [Part ${cT+1}${TT.label?`: ${TT.label}`:""}](${this.url(TT.path)})`)
                                  }))
                                }
                              }
                              return kT.push("", "## Optional", "", `- [Every page in one file](${this.url(Vl.c)}): About ${gl(TT.length)} tokens, for a model with a large context window.`, ""), kT.join("\n")
                            }
                            llmsFullTxt() {
                              return ZT.flatMap((TT => TT.pageIds.map((TT => this.getPage(TT).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const TT = this.llmsFullTxt(),
                                kT = this.llmsTxt(TT),
                                cT = new Map([
                                  [Vl.i, kT],
                                  [Vl.e, kT],
                                  [Vl.c, TT]
                                ]);
                              for (const lT of this.pages) {
                                cT.set(lT.path, lT.markdown);
                                for (const TT of lT.parts) cT.set(TT.path, TT.markdown)
                              }
                              return cT
                            }
                          }

                          function gl(TT) {
                            return `${Math.max(1,Math.round(TT/4e3))}K`
                          }
                          let Ul = null;

                          function Yl() {
                            return Ul ??= new Rl(ET, El.b), Ul
                          }
                          const Bl = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function Wl(TT) {
                            return Yl().getPage(TT.id).parts.length > 0 ? `Read ${Vl.g}, then the parts of the Bloxd Code API's ${TT.title} page it lists, so I can ask questions about it.` : `Read ${El.b}${(0,Vl.p)(TT.slug)} so I can ask questions about it. ${Vl.g} lists every page of the Bloxd Code API docs.`
                          }

                          function nl(TT) {
                            let {
                              page: kT
                            } = TT;
                            const [cT, lT] = QT();
                            return (0, vT.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, vT.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  lT(Yl().getPage(kT.id).markdown)
                                },
                                children: [(0, vT.jsx)(hT, {
                                  name: !1 === (null === cT || void 0 === cT ? void 0 : cT.failed) ? "check" : "copy"
                                }), (0, vT.jsx)("span", {
                                  children: cT ? cT.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), Bl.map((TT => (0, vT.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${TT.url}${encodeURIComponent(Wl(kT))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, vT.jsx)(hT, {
                                  name: "external-link"
                                }), (0, vT.jsxs)("span", {
                                  children: ["Open in ", TT.name]
                                })]
                              }, TT.name)))]
                            })
                          }

                          function pl(TT) {
                            return `#${[0,1,2].map((kT=>Math.round(Math.min(255,Math.max(0,TT[kT]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function il(TT) {
                            return [parseInt(TT.slice(1, 3), 16), parseInt(TT.slice(3, 5), 16), parseInt(TT.slice(5, 7), 16)]
                          }

                          function ql(TT) {
                            let {
                              label: kT,
                              min: cT,
                              max: lT,
                              step: MT,
                              low: KT,
                              high: OT,
                              onChange: yT
                            } = TT;
                            return (0, vT.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, vT.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, vT.jsx)("span", {
                                  children: kT
                                }), (0, vT.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: KT === OT ? KT : `${KT}\u2013${OT}`
                                })]
                              }), (0, vT.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, vT.jsx)("input", {
                                  type: "range",
                                  min: cT,
                                  max: lT,
                                  step: MT,
                                  value: Math.min(lT, KT),
                                  "aria-label": `Minimum ${kT.toLowerCase()}`,
                                  onChange: TT => {
                                    const kT = Number(TT.target.value);
                                    yT(kT, Math.max(kT, OT))
                                  }
                                }), (0, vT.jsx)("input", {
                                  type: "range",
                                  min: cT,
                                  max: lT,
                                  step: MT,
                                  value: Math.min(lT, OT),
                                  "aria-label": `Maximum ${kT.toLowerCase()}`,
                                  onChange: TT => {
                                    const kT = Number(TT.target.value);
                                    yT(Math.min(kT, KT), kT)
                                  }
                                })]
                              })]
                            })
                          }

                          function sl(TT) {
                            let {
                              label: kT,
                              min: cT,
                              max: lT,
                              step: MT,
                              value: KT,
                              onChange: OT,
                              format: yT = String
                            } = TT;
                            return (0, vT.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, vT.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, vT.jsx)("span", {
                                  children: kT
                                }), (0, vT.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: yT(KT)
                                })]
                              }), (0, vT.jsx)("input", {
                                type: "range",
                                min: cT,
                                max: lT,
                                step: MT,
                                value: Math.min(lT, Math.max(cT, KT)),
                                "aria-label": kT,
                                onChange: TT => {
                                  OT(Number(TT.target.value))
                                }
                              })]
                            })
                          }

                          function TM(TT) {
                            let {
                              opts: kT,
                              onChange: cT
                            } = TT;
                            const lT = kT.colorGradients;
                            if (!Uc(lT)) return (0, vT.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, vT.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, vT.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, vT.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: lT.map(((TT, kT) => (0, vT.jsx)("input", {
                                  type: "color",
                                  value: pl(TT.color),
                                  "aria-label": `Colour ${kT+1}`,
                                  onChange: TT => {
                                    const MT = [...lT];
                                    MT[kT] = {
                                      color: il(TT.target.value)
                                    }, cT(MT)
                                  }
                                }, kT)))
                              })]
                            });
                            const MT = (TT, kT) => {
                              const MT = [...lT];
                              MT[TT] = kT, cT(MT)
                            };
                            return (0, vT.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, vT.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, vT.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, vT.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), lT.map(((TT, kT) => {
                                var cT;
                                const lT = null !== (cT = TT.maxColor) && void 0 !== cT ? cT : TT.minColor;
                                return (0, vT.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, vT.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * TT.timeFraction), "%"]
                                  }), (0, vT.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${pl(TT.minColor)}, ${pl(lT)})`
                                    }
                                  }), (0, vT.jsx)("input", {
                                    type: "color",
                                    value: pl(TT.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*TT.timeFraction)}%`,
                                    onChange: cT => {
                                      MT(kT, {
                                        ...TT,
                                        minColor: [...il(cT.target.value), TT.minColor[3]]
                                      })
                                    }
                                  }), (0, vT.jsx)("input", {
                                    type: "color",
                                    value: pl(lT),
                                    "aria-label": `Maximum colour at ${Math.round(100*TT.timeFraction)}%`,
                                    onChange: cT => {
                                      MT(kT, {
                                        ...TT,
                                        maxColor: [...il(cT.target.value), lT[3]]
                                      })
                                    }
                                  })]
                                }, kT)
                              }))]
                            })
                          }
                          const kM = [-.5, -.5, -.5],
                            cM = [.5, .5, .5],
                            lM = [0, 1, 2, 3, 4, 5, 6, 7].map((TT => [1 & TT ? cM[0] : kM[0], 2 & TT ? cM[1] : kM[1], 4 & TT ? cM[2] : kM[2]]));class MM {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(TT, kT, cT, lT) {
                              const MT = Math.round(31 * kT),
                                KT = Math.round(31 * cT),
                                OT = Math.round(31 * lT),
                                yT = `${MT}|${KT}|${OT}`;
                              let fT = this.tints.get(TT);
                              (!fT || fT.size > 2e3) && (fT = new Map, this.tints.set(TT, fT));
                              let xT = fT.get(yT);
                              if (xT) return xT;
                              xT = document.createElement("canvas"), xT.width = TT.naturalWidth || 16, xT.height = TT.naturalHeight || 16;
                              const IT = xT.getContext("2d");
                              return IT ? (IT.imageSmoothingEnabled = !1, IT.drawImage(TT, 0, 0, xT.width, xT.height), IT.globalCompositeOperation = "multiply", IT.fillStyle = `rgb(${MT/31*255}, ${KT/31*255}, ${OT/31*255})`, IT.fillRect(0, 0, xT.width, xT.height), IT.globalCompositeOperation = "destination-in", IT.drawImage(TT, 0, 0, xT.width, xT.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), fT.set(yT, xT), xT
                            }
                          }

                          function KM(TT) {
                            let {
                              opts: kT,
                              textureUrl: cT,
                              burst: MT,
                              paused: KT
                            } = TT;
                            const OT = (0, lT.useRef)(null),
                              yT = (0, lT.useRef)(kT);
                            yT.current = kT;
                            const fT = (0, lT.useRef)(KT);
                            fT.current = KT;
                            const xT = (0, lT.useRef)(null),
                              IT = (0, lT.useRef)(null),
                              AT = (0, lT.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(TT) {
                                let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const cT = [-.5, -.5, -.5],
                                  lT = [.5, .5, .5];
                                let MT = .5;
                                for (let KT = 0; KT < 40; KT++) {
                                  const KT = Bc(TT, cT, lT, kT),
                                    OT = Math.max(KT.life / 30, .001);
                                  for (; pc(KT, TT.gravity, OT);) MT = Math.max(MT, Math.hypot(KT.pos[0], KT.pos[1], KT.pos[2]) + KT.size / 2)
                                }
                                return MT
                              }(kT)))), [kT]),
                              CT = (0, lT.useRef)(AT);
                            return CT.current = AT, (0, lT.useEffect)((() => {
                              if (xT.current = null, !cT) return;
                              const TT = new Image;
                              let kT = !1;
                              return TT.onload = () => {
                                kT || (xT.current = TT)
                              }, TT.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${cT}`)
                              }, TT.src = cT, () => {
                                kT = !0
                              }
                            }), [cT]), (0, lT.useEffect)((() => {
                              var TT;
                              null === (TT = IT.current) || void 0 === TT || TT.call(IT)
                            }), [kT, MT]), (0, lT.useEffect)((() => {
                              const TT = OT.current,
                                kT = null === TT || void 0 === TT ? void 0 : TT.getContext("2d");
                              if (!TT || !kT) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const cT = new MM;
                              let lT = [],
                                MT = 0,
                                KT = -.7,
                                AT = CT.current,
                                jT = performance.now(),
                                vT = 0,
                                tT = !0,
                                hT = null;
                              const NT = () => {
                                const TT = yT.current,
                                  kT = Math.min(400, Math.max(0, Math.ceil(TT.manualEmitCount)));
                                lT = [];
                                for (let cT = 0; cT < kT; cT++) lT.push(Bc(TT, kM, cM, Math.random));
                                MT = 0
                              };
                              IT.current = NT, NT();
                              const QT = OT => {
                                vT = requestAnimationFrame(QT);
                                const IT = Math.min(.05, (OT - jT) / 1e3);
                                if (jT = OT, !tT) return;
                                const ST = window.devicePixelRatio || 1,
                                  DT = Math.round(TT.clientWidth * ST),
                                  aT = Math.round(TT.clientHeight * ST);
                                if (0 === DT || 0 === aT) return;
                                TT.width === DT && TT.height === aT || (TT.width = DT, TT.height = aT);
                                const FT = yT.current;
                                null === hT && (KT += .18 * IT), AT += (CT.current - AT) * Math.min(1, 4 * IT);
                                const rT = .6 * IT;
                                lT = lT.filter((TT => pc(TT, FT.gravity, rT))), 0 !== lT.length || fT.current || (MT += IT, MT > .6 && NT());
                                const PT = function(TT, kT, cT, lT) {
                                  const MT = 3.2 * lT,
                                    KT = .44 * Math.min(TT, kT) * MT / lT,
                                    OT = Math.cos(cT),
                                    yT = Math.sin(cT),
                                    fT = Math.cos(.42),
                                    xT = Math.sin(.42);
                                  return (cT, lT, IT) => {
                                    const AT = cT * yT + IT * OT,
                                      CT = MT - (lT * xT + AT * fT);
                                    if (CT < .05) return null;
                                    const jT = KT / CT;
                                    return {
                                      x: TT / 2 + (cT * OT - IT * yT) * jT,
                                      y: kT / 2 - (lT * fT - AT * xT) * jT,
                                      scale: jT,
                                      depth: CT
                                    }
                                  }
                                }(DT, aT, KT, AT);
                                ! function(TT, kT, cT, lT, MT) {
                                  const KT = TT.createLinearGradient(0, 0, 0, cT);
                                  KT.addColorStop(0, "#23262d"), KT.addColorStop(1, "#16181c"), TT.globalCompositeOperation = "source-over", TT.globalAlpha = 1, TT.fillStyle = KT, TT.fillRect(0, 0, kT, cT);
                                  const OT = (kT, cT) => {
                                      const MT = lT(kT[0], kT[1], kT[2]),
                                        KT = lT(cT[0], cT[1], cT[2]);
                                      MT && KT && (TT.beginPath(), TT.moveTo(MT.x, MT.y), TT.lineTo(KT.x, KT.y), TT.stroke())
                                    },
                                    yT = Math.ceil(MT) + 1,
                                    fT = kM[1];
                                  TT.lineWidth = 1, TT.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let xT = -yT; xT <= yT; xT++) OT([xT + .5, fT, .5 - yT], [xT + .5, fT, yT + .5]), OT([.5 - yT, fT, xT + .5], [yT + .5, fT, xT + .5]);
                                  TT.strokeStyle = "rgba(255, 255, 255, 0.28)", TT.setLineDash([4, 4]);
                                  for (const xT of lM)
                                    for (const TT of lM) {
                                      const kT = [0, 1, 2].filter((kT => xT[kT] !== TT[kT]));
                                      1 === kT.length && xT[kT[0]] < TT[kT[0]] && OT(xT, TT)
                                    }
                                  TT.setLineDash([])
                                }(kT, DT, aT, PT, AT);
                                const wT = xT.current,
                                  mT = lT.map((TT => ({
                                    particle: TT,
                                    at: PT(TT.pos[0], TT.pos[1], TT.pos[2])
                                  }))).filter((TT => null !== TT.at)).sort(((TT, kT) => kT.at.depth - TT.at.depth));
                                kT.imageSmoothingEnabled = !1;
                                for (const TT of function(TT) {
                                    switch (TT) {
                                      case Xc.f.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case Xc.f.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case Xc.f.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case Xc.f.MultiplyAdd:
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
                                  }(FT.blendMode)) {
                                  kT.globalCompositeOperation = TT.operation;
                                  for (const {
                                      particle: lT,
                                      at: MT
                                    }
                                    of mT) {
                                    const [KT, OT, yT, fT] = nc(lT), xT = Math.max(1, lT.size * MT.scale);
                                    kT.globalAlpha = TT.usesAlpha ? Math.min(1, Math.max(0, fT)) : 1, wT ? kT.drawImage(cT.get(wT, KT, OT, yT), MT.x - xT / 2, MT.y - xT / 2, xT, xT) : (kT.fillStyle = `rgb(${255*KT}, ${255*OT}, ${255*yT})`, kT.fillRect(MT.x - xT / 2, MT.y - xT / 2, xT, xT))
                                  }
                                }
                                kT.globalCompositeOperation = "source-over", kT.globalAlpha = 1
                              };
                              vT = requestAnimationFrame(QT);
                              const ST = new IntersectionObserver((TT => {
                                let [kT] = TT;
                                tT = kT.isIntersecting
                              }));
                              ST.observe(TT);
                              const DT = kT => {
                                  hT = kT.clientX, TT.setPointerCapture(kT.pointerId)
                                },
                                aT = TT => {
                                  null !== hT && (KT += .01 * (TT.clientX - hT), hT = TT.clientX)
                                },
                                FT = () => {
                                  hT = null
                                };
                              return TT.addEventListener("pointerdown", DT), TT.addEventListener("pointermove", aT), TT.addEventListener("pointerup", FT), TT.addEventListener("pointercancel", FT), () => {
                                cancelAnimationFrame(vT), ST.disconnect(), IT.current = null, TT.removeEventListener("pointerdown", DT), TT.removeEventListener("pointermove", aT), TT.removeEventListener("pointerup", FT), TT.removeEventListener("pointercancel", FT)
                              }
                            }), []), (0, vT.jsx)("canvas", {
                              ref: OT,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${kT.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const OM = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            yM = [{
                              mode: Xc.f.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: Xc.f.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: Xc.f.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: Xc.f.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: Xc.f.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            fM = (0, lT.forwardRef)((function(TT, kT) {
                              var cT, MT;
                              let {
                                textures: OT
                              } = TT;
                              const yT = Dl(),
                                fT = (0, lT.useRef)(null),
                                [xT, IT] = (0, lT.useState)(Lc),
                                [AT, CT] = (0, lT.useState)("example"),
                                [jT, tT] = (0, lT.useState)(0),
                                [NT, QT] = (0, lT.useState)(!1),
                                DT = TT => {
                                  const kT = "example" === TT ? Lc : dc(TT);
                                  kT && (IT(kT), CT(TT))
                                };
                              (0, lT.useImperativeHandle)(kT, (() => ({
                                preview: TT => {
                                  var kT;
                                  DT(TT), null === (kT = fT.current) || void 0 === kT || kT.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const aT = TT => {
                                  IT({
                                    ...xT,
                                    ...TT
                                  }), CT(null)
                                },
                                FT = function(TT, kT) {
                                  if (null !== kT) return `${Tl}    presetId: "${kT}",\n${kl}\n})`;
                                  const cT = TT.velocityGradients.map((TT => `        {\n            timeFraction: ${ic(TT.timeFraction)},\n            factor: ${ic(TT.factor)},\n            factor2: ${ic(TT.factor2)},\n        },`)),
                                    lT = [`    dir1: ${qc(TT.dir1)},`, `    dir2: ${qc(TT.dir2)},`, kl, `    texture: "${TT.texture}",`, `    minLifeTime: ${ic(TT.minLifeTime)},`, `    maxLifeTime: ${ic(TT.maxLifeTime)},`, `    minEmitPower: ${ic(TT.minEmitPower)},`, `    maxEmitPower: ${ic(TT.maxEmitPower)},`, `    minSize: ${ic(TT.minSize)},`, `    maxSize: ${ic(TT.maxSize)},`, `    manualEmitCount: ${ic(TT.manualEmitCount)},`, `    gravity: ${qc(TT.gravity)},`, `    colorGradients: ${sc(TT.colorGradients,"    ")},`, `    velocityGradients: ${cT.length>0?`[\n${cT.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${ic(TT.blendMode)},`];
                                  return void 0 !== TT.hideDist && lT.push(`    hideDist: ${ic(TT.hideDist)},`), `${Tl}${lT.join("\n")}\n})`
                                }(xT, null === AT || "example" === AT ? null : AT),
                                PT = OT.includes(xT.texture) ? OT : [...OT, xT.texture];
                              return (0, vT.jsxs)("section", {
                                ref: fT,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, vT.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, vT.jsxs)("div", {
                                    children: [(0, vT.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, vT.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, vT.jsx)(ST, {
                                    text: FT,
                                    label: "Copy code"
                                  })]
                                }), (0, vT.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, vT.jsx)("button", {
                                    type: "button",
                                    className: KT()("DocsVariantChip", {
                                      Active: "example" === AT
                                    }),
                                    onClick: () => {
                                      DT("example")
                                    },
                                    children: "Example"
                                  }), OM.filter((TT => null !== dc(TT))).map((TT => (0, vT.jsx)("button", {
                                    type: "button",
                                    className: KT()("DocsVariantChip", {
                                      Active: AT === TT
                                    }),
                                    onClick: () => {
                                      DT(TT)
                                    },
                                    children: TT
                                  }, TT))), (0, vT.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== AT && void 0 !== AT ? AT : "custom",
                                    "aria-label": "Preset",
                                    onChange: TT => {
                                      DT(TT.target.value)
                                    },
                                    children: [(0, vT.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === AT && (0, vT.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), uc.c.map((TT => (0, vT.jsx)("option", {
                                      value: TT,
                                      children: TT
                                    }, TT)))]
                                  })]
                                }), (0, vT.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, vT.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, vT.jsx)(KM, {
                                      opts: xT,
                                      textureUrl: null !== (cT = null === yT || void 0 === yT ? void 0 : yT.getParticleTextureUrl(xT.texture)) && void 0 !== cT ? cT : null,
                                      burst: jT,
                                      paused: NT
                                    }), (0, vT.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, vT.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          tT(jT + 1)
                                        },
                                        children: [(0, vT.jsx)(hT, {
                                          name: "replay"
                                        }), (0, vT.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, vT.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": NT,
                                        onClick: () => {
                                          QT(!NT)
                                        },
                                        children: [(0, vT.jsx)(hT, {
                                          name: NT ? "play" : "pause"
                                        }), (0, vT.jsx)("span", {
                                          children: NT ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, vT.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, vT.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, vT.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, vT.jsx)("span", {
                                          children: "Texture"
                                        }), (0, vT.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: xT.texture
                                        })]
                                      }), (0, vT.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: PT.map((TT => {
                                          var kT;
                                          const cT = null !== (kT = null === yT || void 0 === yT ? void 0 : yT.getParticleTextureUrl(TT)) && void 0 !== kT ? kT : null;
                                          return (0, vT.jsx)("button", {
                                            type: "button",
                                            className: KT()("DocsParticleTexture", {
                                              Active: xT.texture === TT
                                            }),
                                            title: TT,
                                            "aria-label": TT,
                                            "aria-pressed": xT.texture === TT,
                                            onClick: () => {
                                              aT({
                                                texture: TT
                                              })
                                            },
                                            children: cT ? (0, vT.jsx)("img", {
                                              src: cT,
                                              alt: ""
                                            }) : (0, vT.jsx)(hT, {
                                              name: "image"
                                            })
                                          }, TT)
                                        }))
                                      })]
                                    }), (0, vT.jsx)(sl, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: xT.manualEmitCount,
                                      onChange: TT => {
                                        aT({
                                          manualEmitCount: TT
                                        })
                                      }
                                    }), (0, vT.jsx)(ql, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: xT.minLifeTime,
                                      high: xT.maxLifeTime,
                                      onChange: (TT, kT) => {
                                        aT({
                                          minLifeTime: TT,
                                          maxLifeTime: kT
                                        })
                                      }
                                    }), (0, vT.jsx)(ql, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: xT.minEmitPower,
                                      high: xT.maxEmitPower,
                                      onChange: (TT, kT) => {
                                        aT({
                                          minEmitPower: TT,
                                          maxEmitPower: kT
                                        })
                                      }
                                    }), (0, vT.jsx)(ql, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: xT.minSize,
                                      high: xT.maxSize,
                                      onChange: (TT, kT) => {
                                        aT({
                                          minSize: TT,
                                          maxSize: kT
                                        })
                                      }
                                    }), (0, vT.jsx)(sl, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (MT = xT.gravity[1]) && void 0 !== MT ? MT : 0,
                                      onChange: TT => {
                                        var kT, cT;
                                        aT({
                                          gravity: [null !== (kT = xT.gravity[0]) && void 0 !== kT ? kT : 0, TT, null !== (cT = xT.gravity[2]) && void 0 !== cT ? cT : 0]
                                        })
                                      }
                                    }), (0, vT.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, vT.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, vT.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, vT.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: xT.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: TT => {
                                          aT({
                                            blendMode: Number(TT.target.value)
                                          })
                                        },
                                        children: yM.map((TT => {
                                          let {
                                            mode: kT,
                                            label: cT
                                          } = TT;
                                          return (0, vT.jsx)("option", {
                                            value: kT,
                                            children: cT
                                          }, kT)
                                        }))
                                      })]
                                    }), (0, vT.jsx)(TM, {
                                      opts: xT,
                                      onChange: TT => {
                                        aT({
                                          colorGradients: TT
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, vT.jsx)(rT, {
                                  code: FT,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var xM = cT(4450),
                            IM = cT(1921);

                          function AM(TT, kT) {
                            return TT ? xM.e.includes(kT) ? TT.getIngameIconUrl(kT) : TT.getItemIconUrl(kT) : null
                          }

                          function CM(TT) {
                            var kT, cT, lT;
                            let {
                              part: MT,
                              assets: OT
                            } = TT;
                            const yT = AM(OT, MT.icon),
                              fT = null !== (kT = null === (cT = MT.style) || void 0 === cT ? void 0 : cT.fontSize) && void 0 !== kT ? kT : "1.8em",
                              xT = (0, uk.Jb)(MT.style);
                            return (0, vT.jsxs)("span", {
                              className: KT()("DocsBloxdTextIcon", {
                                Missing: !yT
                              }),
                              style: {
                                width: fT,
                                height: fT,
                                opacity: null === (lT = MT.style) || void 0 === lT ? void 0 : lT.opacity
                              },
                              title: yT ? void 0 : `No Bloxd icon, item or block is called "${MT.icon}"`,
                              children: [yT && xT && (0, vT.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: xT,
                                  maskImage: `url("${yT}")`,
                                  WebkitMaskImage: `url("${yT}")`
                                }
                              }), yT ? (0, vT.jsx)("img", {
                                src: yT,
                                alt: "",
                                className: KT()({
                                  Tinted: xT
                                })
                              }) : (0, vT.jsx)(hT, {
                                name: "image"
                              })]
                            })
                          }

                          function jM(TT) {
                            let {
                              parts: kT,
                              className: cT
                            } = TT;
                            const lT = Dl(),
                              MT = [];
                            let OT = [];
                            const yT = TT => {
                              OT.length > 0 && (MT.push((0, vT.jsx)(IM.b, {
                                text: OT
                              }, `run-${TT}`)), OT = [])
                            };
                            return kT.forEach(((TT, kT) => {
                              "icon" !== gk(TT) || dk(TT.icon) ? OT.push(TT) : (yT(kT), MT.push((0, vT.jsx)(CM, {
                                part: TT,
                                assets: lT
                              }, `icon-${kT}`)))
                            })), yT(kT.length), (0, vT.jsx)("div", {
                              className: KT()("DocsStyledTextPreview", cT),
                              children: MT
                            })
                          }
                          const vM = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let tM = null;

                          function hM(TT) {
                            if (tM ??= document.createElement("canvas").getContext("2d"), !tM) return "#000000";
                            tM.fillStyle = "#000000", tM.fillStyle = TT;
                            const kT = tM.fillStyle;
                            return kT.startsWith("#") ? kT : "#000000"
                          }

                          function NM(TT) {
                            let {
                              value: kT,
                              label: cT,
                              onChange: lT
                            } = TT;
                            return (0, vT.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, vT.jsx)("input", {
                                type: "color",
                                value: hM(kT),
                                "aria-label": `${cT} picker`,
                                onChange: TT => {
                                  lT(TT.target.value)
                                }
                              }), (0, vT.jsx)("input", {
                                type: "text",
                                value: kT,
                                placeholder: "#ffb914 or gold",
                                "aria-label": cT,
                                spellCheck: !1,
                                onChange: TT => {
                                  lT(TT.target.value)
                                }
                              })]
                            })
                          }

                          function QM(TT) {
                            let {
                              value: kT,
                              fontAwesomeIcons: cT,
                              onChange: MT
                            } = TT;
                            const OT = Dl(),
                              [yT, fT] = (0, lT.useState)(dk(kT) ? "fontAwesome" : "bloxd"),
                              [xT, IT] = (0, lT.useState)(""),
                              AT = xT.trim().toLowerCase(),
                              CT = "bloxd" === yT ? xM.e : cT,
                              jT = AT ? CT.filter((TT => TT.toLowerCase().includes(AT))) : CT;
                            return (0, vT.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, vT.jsx)("input", {
                                type: "text",
                                value: kT,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: TT => {
                                  MT(TT.target.value)
                                }
                              }), (0, vT.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, vT.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((TT => (0, vT.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": yT === TT,
                                    className: KT()("DocsVariantChip", {
                                      Active: yT === TT
                                    }),
                                    onClick: () => {
                                      fT(TT)
                                    },
                                    children: "bloxd" === TT ? `Bloxd icons (${xM.e.length})` : `Font Awesome (${cT.length})`
                                  }, TT))), (0, vT.jsx)("input", {
                                    type: "search",
                                    value: xT,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: TT => {
                                      IT(TT.target.value)
                                    }
                                  })
                                ]
                              }), (0, vT.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [jT.map((TT => {
                                  const cT = "bloxd" === yT ? AM(OT, TT) : null;
                                  return (0, vT.jsx)("button", {
                                    type: "button",
                                    title: TT,
                                    "aria-label": TT,
                                    "aria-pressed": TT === kT,
                                    className: KT()("DocsIconPickerOption", {
                                      Active: TT === kT
                                    }),
                                    onClick: () => {
                                      MT(TT)
                                    },
                                    children: "fontAwesome" === yT ? (0, vT.jsx)(ac.e, {
                                      name: TT
                                    }) : cT ? (0, vT.jsx)("img", {
                                      src: cT,
                                      alt: ""
                                    }) : (0, vT.jsx)(hT, {
                                      name: "image"
                                    })
                                  }, TT)
                                })), 0 === jT.length && (0, vT.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", xT, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function SM(TT) {
                            let {
                              property: kT,
                              value: cT,
                              fontAwesomeIcons: lT,
                              onChange: MT
                            } = TT;
                            const {
                              field: KT,
                              label: OT
                            } = kT, yT = TT => "" !== TT || kT.isRequired ? TT : void 0;
                            switch (KT.kind) {
                              case "text":
                                return KT.multiline ? (0, vT.jsx)("textarea", {
                                  value: String(null !== cT && void 0 !== cT ? cT : ""),
                                  rows: 2,
                                  "aria-label": OT,
                                  onChange: TT => {
                                    MT(TT.target.value)
                                  }
                                }) : (0, vT.jsx)("input", {
                                  type: "text",
                                  value: String(null !== cT && void 0 !== cT ? cT : ""),
                                  "aria-label": OT,
                                  onChange: TT => {
                                    MT(yT(TT.target.value))
                                  }
                                });
                              case "size":
                                return (0, vT.jsx)("input", {
                                  type: "text",
                                  value: String(null !== cT && void 0 !== cT ? cT : ""),
                                  placeholder: kT.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": OT,
                                  spellCheck: !1,
                                  onChange: TT => {
                                    MT(yT(TT.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, vT.jsx)(NM, {
                                  value: String(null !== cT && void 0 !== cT ? cT : ""),
                                  label: OT,
                                  onChange: TT => {
                                    MT(yT(TT))
                                  }
                                });
                              case "colours": {
                                const TT = Array.isArray(cT) ? cT : [],
                                  kT = TT => {
                                    MT(TT.length > 0 ? TT : void 0)
                                  };
                                return (0, vT.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [TT.map(((cT, lT) => (0, vT.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, vT.jsx)(NM, {
                                      value: cT,
                                      label: `${OT} ${lT+1}`,
                                      onChange: cT => {
                                        kT(TT.map(((TT, kT) => kT === lT ? cT : TT)))
                                      }
                                    }), (0, vT.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${lT+1}`,
                                      onClick: () => {
                                        kT(TT.filter(((TT, kT) => kT !== lT)))
                                      },
                                      children: (0, vT.jsx)(hT, {
                                        name: "cross"
                                      })
                                    })]
                                  }, lT))), (0, vT.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var cT;
                                      kT([...TT, null !== (cT = TT.at(-1)) && void 0 !== cT ? cT : "#ffffff"])
                                    },
                                    children: [(0, vT.jsx)(hT, {
                                      name: "plus"
                                    }), 0 === TT.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var fT;
                                const TT = "number" === typeof cT ? cT : Number(null !== (fT = kT.defaultText) && void 0 !== fT ? fT : 0);
                                return (0, vT.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, vT.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: TT,
                                    "aria-label": OT,
                                    onChange: TT => {
                                      MT(Number(TT.target.value))
                                    }
                                  }), (0, vT.jsx)("output", {
                                    children: TT.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, vT.jsxs)("select", {
                                  value: String(null !== cT && void 0 !== cT ? cT : ""),
                                  "aria-label": OT,
                                  onChange: TT => {
                                    MT(yT(TT.target.value))
                                  },
                                  children: [!kT.isRequired && (0, vT.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", kT.defaultText, ")"]
                                  }), KT.options.map((TT => (0, vT.jsx)("option", {
                                    value: TT,
                                    children: TT
                                  }, TT)))]
                                });
                              case "icon":
                                return (0, vT.jsx)(QM, {
                                  value: String(null !== cT && void 0 !== cT ? cT : ""),
                                  fontAwesomeIcons: lT,
                                  onChange: MT
                                })
                            }
                          }

                          function DM(TT) {
                            let kT;
                            try {
                              kT = JSON.parse(TT)
                            } catch (cT) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${cT.message}`
                              }
                            }
                            return lc(kT) ? {
                              part: kT,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function aM(TT) {
                            let {
                              parts: kT,
                              index: cT,
                              fontAwesomeIcons: MT,
                              onChange: KT,
                              Om: OT,
                              onClose: yT
                            } = TT;
                            const fT = (0, lT.useContext)(vk),
                              IT = (0, lT.useRef)(null),
                              AT = kT[cT],
                              CT = gk(AT),
                              [jT, tT] = (0, lT.useState)((() => JSON.stringify(AT, null, 2))),
                              NT = (0, lT.useMemo)((() => "other" === CT ? DM(jT).error : null), [CT, jT]);
                            (0, lT.useEffect)((() => {
                              var TT;
                              null === (TT = IT.current) || void 0 === TT || TT.focus()
                            }), []);
                            const QT = (0, vT.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: TT => {
                                TT.target === TT.currentTarget && yT()
                              },
                              children: (0, vT.jsxs)("div", {
                                ref: IT,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${cT+1}: ${Lk[CT]}`,
                                tabIndex: -1,
                                onKeyDown: TT => {
                                  "Escape" === TT.key ? (TT.stopPropagation(), yT()) : "Tab" === TT.key && IT.current && function(TT, kT) {
                                    const cT = Array.from(TT.querySelectorAll(zk)),
                                      lT = cT[0],
                                      MT = cT.at(-1);
                                    if (!lT || !MT) return;
                                    const KT = document.activeElement;
                                    !kT.shiftKey || KT !== lT && KT !== TT ? kT.shiftKey || KT !== MT || (kT.preventDefault(), lT.focus()) : (kT.preventDefault(), MT.focus())
                                  }(IT.current, TT)
                                },
                                children: [(0, vT.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, vT.jsxs)("div", {
                                    children: [(0, vT.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", cT + 1]
                                    }), (0, vT.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: Lk[CT]
                                    })]
                                  }), (0, vT.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: yT,
                                    children: (0, vT.jsx)(hT, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, vT.jsx)(jM, {
                                  parts: kT,
                                  className: "DocsTextDialogPreview"
                                }), (0, vT.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === CT ? (0, vT.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, vT.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, vT.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: jT,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: TT => {
                                        tT(TT.target.value);
                                        const kT = DM(TT.target.value);
                                        null !== kT.part && KT(kT.part)
                                      }
                                    }), NT && (0, vT.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: NT
                                    })]
                                  }) : Yk[CT].map((TT => {
                                    const kT = Wk(AT, TT.path),
                                      cT = TT.isRequired ? JSON.stringify(pk(AT, TT.path)) === JSON.stringify(AT) : void 0 === kT;
                                    return (0, vT.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, vT.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, vT.jsx)("span", {
                                          children: TT.label
                                        }), (0, vT.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: cT,
                                          "aria-label": `Reset ${TT.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            KT(pk(AT, TT.path))
                                          },
                                          children: [(0, vT.jsx)(hT, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, vT.jsx)(SM, {
                                        property: TT,
                                        value: kT,
                                        fontAwesomeIcons: MT,
                                        onChange: kT => {
                                          KT(nk(AT, TT.path, kT))
                                        }
                                      }), !TT.isRequired && (0, vT.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", TT.defaultText]
                                      })]
                                    }, TT.path.join("."))
                                  }))
                                }), (0, vT.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, vT.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: OT,
                                    children: [(0, vT.jsx)(hT, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, vT.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: yT,
                                    children: "Done"
                                  })]
                                }), (0, vT.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: vM.map((TT => (0, vT.jsx)("option", {
                                    value: TT
                                  }, TT)))
                                })]
                              })
                            });
                            return fT ? (0, xT.createPortal)(QT, fT) : QT
                          }
                          const FM = [{
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
                            rM = Object.keys(Rk);

                          function PM(TT) {
                            let {
                              fontAwesomeIcons: kT
                            } = TT;
                            const [cT, MT] = (0, lT.useState)(FM[0].parts), [OT, yT] = (0, lT.useState)((() => Tc(FM[0].parts))), [fT, xT] = (0, lT.useState)(null), [IT, AT] = (0, lT.useState)(!1), [CT, jT] = (0, lT.useState)(null), [tT, NT] = (0, lT.useState)(!1), [QT, ST] = (0, lT.useState)(null), DT = (0, lT.useRef)(null), aT = Tc(cT);
                            (0, lT.useLayoutEffect)((() => {
                              var TT;
                              if (!QT) return;
                              const kT = TT => {
                                  var kT;
                                  return null === (kT = DT.current) || void 0 === kT ? void 0 : kT.querySelector(`[data-focus-key="${TT}"]`)
                                },
                                cT = kT(QT.key);
                              null === (TT = cT && !cT.disabled ? cT : kT(QT.fallback)) || void 0 === TT || TT.focus(), ST(null)
                            }), [QT]);
                            const FT = TT => {
                                MT(TT), yT(Tc(TT)), xT(null)
                              },
                              PT = TT => {
                                FT(cT.filter(((kT, cT) => cT !== TT))), ST({
                                  key: `edit-${Math.min(TT,cT.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              wT = (TT, kT) => {
                                const lT = [...cT],
                                  [MT] = lT.splice(TT, 1);
                                lT.splice(TT + kT, 0, MT), FT(lT);
                                ST({
                                  key: `${kT<0?"up":"down"}-${TT+kT}`,
                                  fallback: `edit-${TT+kT}`
                                })
                              };
                            return (0, vT.jsxs)("section", {
                              ref: DT,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, vT.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, vT.jsxs)("div", {
                                  children: [(0, vT.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, vT.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, vT.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: FM.map((TT => (0, vT.jsx)("button", {
                                  type: "button",
                                  className: KT()("DocsVariantChip", {
                                    Active: aT === Tc(TT.parts)
                                  }),
                                  onClick: () => {
                                    FT(TT.parts)
                                  },
                                  children: TT.label
                                }, TT.label)))
                              }), (0, vT.jsx)(jM, {
                                parts: cT,
                                className: "DocsTextEditorPreview"
                              }), (0, vT.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, vT.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, vT.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, vT.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [cT.map(((TT, kT) => {
                                      const lT = gk(TT);
                                      return (0, vT.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, vT.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${kT}`,
                                          "aria-label": `Edit part ${kT+1}, ${Lk[lT]}`,
                                          onClick: () => {
                                            jT(kT)
                                          },
                                          children: [(0, vT.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: Lk[lT]
                                          }), (0, vT.jsx)(jM, {
                                            parts: [TT],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== lT && (0, vT.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: ik(TT)
                                          })]
                                        }), (0, vT.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, vT.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${kT+1} up`,
                                            "data-focus-key": `up-${kT}`,
                                            disabled: 0 === kT,
                                            onClick: () => {
                                              wT(kT, -1)
                                            },
                                            children: (0, vT.jsx)(hT, {
                                              name: "chevron-up"
                                            })
                                          }), (0, vT.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${kT+1} down`,
                                            "data-focus-key": `down-${kT}`,
                                            disabled: kT === cT.length - 1,
                                            onClick: () => {
                                              wT(kT, 1)
                                            },
                                            children: (0, vT.jsx)(hT, {
                                              name: "chevron-down"
                                            })
                                          }), (0, vT.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${kT+1}`,
                                            onClick: () => {
                                              PT(kT)
                                            },
                                            children: (0, vT.jsx)(hT, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, kT)
                                    })), 0 === cT.length && (0, vT.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, vT.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: TT => {
                                      "Escape" === TT.key && tT && (TT.stopPropagation(), NT(!1), ST({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, vT.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": tT,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        NT(!tT)
                                      },
                                      children: [(0, vT.jsx)(hT, {
                                        name: "plus"
                                      }), "Add a part", (0, vT.jsx)(hT, {
                                        name: tT ? "chevron-up" : "chevron-down"
                                      })]
                                    }), tT && (0, vT.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: rM.map((TT => (0, vT.jsx)("li", {
                                        children: (0, vT.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (TT => {
                                              FT([...cT, Rk[TT]]), NT(!1), jT(cT.length)
                                            })(TT)
                                          },
                                          children: Lk[TT]
                                        })
                                      }, TT)))
                                    })]
                                  })]
                                }), (0, vT.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, vT.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, vT.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": IT,
                                      onClick: () => {
                                        AT(!IT)
                                      },
                                      children: [(0, vT.jsx)(hT, {
                                        name: IT ? "check" : "pencil"
                                      }), IT ? "Done" : "Edit"]
                                    })]
                                  }), IT ? (0, vT.jsxs)(vT.Fragment, {
                                    children: [(0, vT.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: OT,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: TT => {
                                        yT(TT.target.value);
                                        const kT = Mc(TT.target.value);
                                        xT(kT.error), kT.parts && MT(kT.parts)
                                      }
                                    }), fT && (0, vT.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: fT
                                    })]
                                  }) : (0, vT.jsx)(rT, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${aT})`
                                  })]
                                })]
                              }), null !== CT && CT < cT.length && (0, vT.jsx)(aM, {
                                parts: cT,
                                index: CT,
                                fontAwesomeIcons: kT,
                                onChange: TT => {
                                  ((TT, kT) => {
                                    FT(cT.map(((cT, lT) => lT === TT ? kT : cT)))
                                  })(CT, TT)
                                },
                                Om: () => {
                                  PT(CT), jT(null)
                                },
                                onClose: () => {
                                  jT(null), ST({
                                    key: `edit-${CT}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var wM = cT(4813),
                            mM = cT(4798),
                            bM = cT(4806),
                            zM = cT(4815);
                          const JM = 40,
                            oM = 800,
                            HM = 150,
                            eM = 8e3,
                            GM = 2e3;

                          function VM(TT, kT) {
                            return 12 * Math.log2(kT / TT)
                          }

                          function EM(TT, kT) {
                            return Math.round(TT * 2 ** (kT / 12) * 10) / 10
                          }

                          function ZM(TT) {
                            return `${TT} ms`
                          }

                          function uM(TT) {
                            return `${TT} st`
                          }
                          const XM = [{
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

                          function dM(TT) {
                            let {
                              synth: kT,
                              onChange: cT
                            } = TT;
                            const lT = (0, wM.j)(kT);
                            return (0, vT.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, vT.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, vT.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, vT.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, vT.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, vT.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, vT.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: wM.f.map((TT => (0, vT.jsx)("button", {
                                      type: "button",
                                      className: KT()("DocsVariantChip", {
                                        Active: kT.waveform === TT
                                      }),
                                      "aria-pressed": kT.waveform === TT,
                                      onClick: () => {
                                        cT({
                                          waveform: TT
                                        })
                                      },
                                      children: TT
                                    }, TT)))
                                  })]
                                }), (0, vT.jsx)(sl, {
                                  label: "Pitch",
                                  min: 0,
                                  max: VM(JM, oM),
                                  step: .1,
                                  value: VM(JM, kT.pitchHz),
                                  format: () => `${kT.pitchHz} Hz`,
                                  onChange: TT => {
                                    cT({
                                      pitchHz: EM(JM, TT)
                                    })
                                  }
                                }), (0, vT.jsx)(sl, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: kT.syllableMs,
                                  format: ZM,
                                  onChange: TT => {
                                    cT({
                                      syllableMs: TT
                                    })
                                  }
                                }), (0, vT.jsx)(sl, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: kT.volume,
                                  onChange: TT => {
                                    cT({
                                      volume: TT
                                    })
                                  }
                                })]
                              }), (0, vT.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, vT.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, vT.jsx)(sl, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: kT.durationMs,
                                  format: ZM,
                                  onChange: TT => {
                                    cT({
                                      durationMs: TT
                                    })
                                  }
                                }), (0, vT.jsx)(sl, {
                                  label: "Fade in",
                                  min: 0,
                                  max: lT.durationMs,
                                  step: 1,
                                  value: lT.attackMs,
                                  format: ZM,
                                  onChange: TT => {
                                    cT({
                                      attackMs: TT
                                    })
                                  }
                                }), (0, vT.jsx)(sl, {
                                  label: "Fade out",
                                  min: 0,
                                  max: lT.durationMs - lT.attackMs,
                                  step: 1,
                                  value: lT.releaseMs,
                                  format: ZM,
                                  onChange: TT => {
                                    cT({
                                      releaseMs: TT
                                    })
                                  }
                                }), (0, vT.jsx)(sl, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: kT.glideSemitones,
                                  format: uM,
                                  onChange: TT => {
                                    cT({
                                      glideSemitones: TT
                                    })
                                  }
                                }), (0, vT.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, vT.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== kT.lowpassHz,
                                    onChange: TT => {
                                      cT({
                                        lowpassHz: TT.target.checked ? GM : null
                                      })
                                    }
                                  }), (0, vT.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== kT.lowpassHz && (0, vT.jsx)(sl, {
                                  label: "Filter",
                                  min: 0,
                                  max: VM(HM, eM),
                                  step: .1,
                                  value: VM(HM, kT.lowpassHz),
                                  format: () => `${kT.lowpassHz} Hz`,
                                  onChange: TT => {
                                    cT({
                                      lowpassHz: EM(HM, TT)
                                    })
                                  }
                                })]
                              }), (0, vT.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, vT.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), XM.map((TT => {
                                  let {
                                    key: lT,
                                    label: MT,
                                    max: KT
                                  } = TT;
                                  return (0, vT.jsx)(sl, {
                                    label: MT,
                                    min: 0,
                                    max: KT,
                                    step: .1,
                                    value: kT.intonation[lT],
                                    format: uM,
                                    onChange: TT => {
                                      cT({
                                        intonation: {
                                          ...kT.intonation,
                                          [lT]: TT
                                        }
                                      })
                                    }
                                  }, lT)
                                }))]
                              })]
                            })
                          }
                          const LM = Object.keys(wM.h),
                            RM = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function gM(TT) {
                            var kT;
                            const cT = JSON.stringify((0, wM.j)(TT));
                            return null !== (kT = LM.find((TT => JSON.stringify((0, wM.j)(wM.h[TT])) === cT))) && void 0 !== kT ? kT : null
                          }

                          function UM(TT) {
                            let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof TT || null === TT) return JSON.stringify(TT);
                            return `{\n${Object.entries(TT).map((TT=>{let[cT,lT]=TT;return`${kT}    ${cT}: ${UM(lT,`${kT}    `)},`})).join("\n")}\n${kT}}`
                          }

                          function YM(TT, kT, cT) {
                            const lT = gM(TT),
                              MT = [`    line: ${JSON.stringify(kT)},`];
                            return cT && MT.push(`    speakerName: ${JSON.stringify(cT)},`), MT.push("    voice,"), `const voice = ${lT?JSON.stringify(lT):UM((0,wM.j)(TT))}\n\napi.setClientOption(playerId, "dialogue", {\n${MT.join("\n")}\n})`
                          }
                          const BM = 400,
                            WM = 90;
                          let nM = null;

                          function pM(TT, kT, cT) {
                            return nM ??= new AudioContext, nM.resume(), (0, zM.e)(nM, nM.destination, TT, kT, cT, (() => {}))
                          }

                          function iM() {
                            const [TT, kT] = (0, lT.useState)(wM.h.regular), [cT, MT] = (0, lT.useState)(RM[0]), [OT, yT] = (0, lT.useState)("Innkeeper"), [fT, xT] = (0, lT.useState)(0), IT = Al((TT => TT.volume)), AT = (0, lT.useRef)(null), CT = (0, lT.useRef)(0), jT = (0, lT.useRef)(0), tT = () => {
                              var TT;
                              null === (TT = AT.current) || void 0 === TT || TT.call(AT), AT.current = null
                            };
                            (0, lT.useEffect)((() => () => {
                              var TT;
                              null === (TT = AT.current) || void 0 === TT || TT.call(AT), window.clearTimeout(CT.current)
                            }), []);
                            const NT = (0, lT.useMemo)((() => ({
                                line: cT,
                                speakerName: OT || void 0,
                                voice: TT
                              })), [cT, OT, TT]),
                              QT = (0, lT.useRef)(NT);
                            QT.current = NT;
                            const DT = gM(TT),
                              aT = TT => {
                                window.clearTimeout(CT.current), tT();
                                const {
                                  plan: kT,
                                  synth: cT
                                } = (0, bM.e)(TT);
                                cT && (AT.current = pM(cT, kT.blips, IT)), xT((TT => TT + 1))
                              },
                              FT = YM(TT, cT, OT);
                            return (0, vT.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, vT.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, vT.jsxs)("div", {
                                  children: [(0, vT.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, vT.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, vT.jsx)(ST, {
                                  text: FT,
                                  label: "Copy code"
                                })]
                              }), (0, vT.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [LM.map((TT => (0, vT.jsx)("button", {
                                  type: "button",
                                  className: KT()("DocsVariantChip", {
                                    Active: DT === TT
                                  }),
                                  "aria-pressed": DT === TT,
                                  onClick: () => {
                                    (TT => {
                                      const cT = wM.h[TT];
                                      kT(cT), aT({
                                        ...NT,
                                        voice: cT
                                      })
                                    })(TT)
                                  },
                                  children: TT
                                }, TT))), !DT && (0, vT.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, vT.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, vT.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, vT.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, vT.jsx)(mM.e, {
                                      display: NT
                                    }, fT)
                                  }), (0, vT.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: TT => {
                                      TT.preventDefault(), aT(NT)
                                    },
                                    children: [(0, vT.jsx)("input", {
                                      value: cT,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: TT => {
                                        MT(TT.target.value)
                                      }
                                    }), (0, vT.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, vT.jsx)(hT, {
                                        name: "play"
                                      }), (0, vT.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, vT.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: RM.map((TT => (0, vT.jsx)("button", {
                                      type: "button",
                                      className: KT()("DocsVariantChip", {
                                        Active: cT === TT
                                      }),
                                      onClick: () => {
                                        var kT;
                                        MT(kT = TT), aT({
                                          ...NT,
                                          line: kT
                                        })
                                      },
                                      children: TT
                                    }, TT)))
                                  }), (0, vT.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, vT.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, vT.jsx)("input", {
                                      value: OT,
                                      placeholder: "No name",
                                      onChange: TT => {
                                        yT(TT.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, vT.jsx)(dM, {
                                  synth: TT,
                                  onChange: cT => {
                                    const lT = {
                                      ...TT,
                                      ...cT
                                    };
                                    kT(lT);
                                    const MT = {
                                        ...NT,
                                        voice: lT
                                      },
                                      KT = performance.now();
                                    if (KT - jT.current >= WM) {
                                      jT.current = KT, tT();
                                      const TT = (0, bM.e)(MT).plan.blips[0];
                                      TT && (AT.current = pM((0, wM.j)(lT), [{
                                        ...TT,
                                        atMs: 0
                                      }], IT))
                                    }
                                    window.clearTimeout(CT.current), CT.current = window.setTimeout((() => {
                                      aT(QT.current)
                                    }), BM)
                                  }
                                })]
                              }), (0, vT.jsx)(rT, {
                                code: FT,
                                lang: "ts"
                              })]
                            })
                          }
                          var qM = cT(4831);
                          const sM = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            TK = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            kK = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${TK}`, "g"), qM.p],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, qM.p]
                            ];

                          function cK(TT) {
                            return `${TT.pageId}#${TT.anchor}`
                          }
                          let lK, MK, KK;

                          function OK(TT) {
                            const kT = (0, PT.j)(TT),
                              cT = new Set;
                            for (const [, , lT] of kT.matchAll(PT.e)) {
                              const TT = lT.startsWith("#") ? RT(lT) : null,
                                kT = TT ? cK({
                                  pageId: TT.page.id,
                                  anchor: TT.anchor
                                }) : null;
                              null !== kT && (lK || (lK = new Set(ET.flatMap((TT => zT(TT.layout) ? dT(TT).sections.map((kT => cK({
                                pageId: TT.id,
                                anchor: kT.heading.anchor
                              }))) : [])))), lK).has(kT) && cT.add(kT)
                            }
                            for (const [, , lT] of kT.matchAll(sM)) {
                              const TT = Ck(lT);
                              TT && cT.add(cK(TT))
                            }
                            return cT
                          }

                          function yK(TT, kT) {
                            const cT = new Set,
                              lT = function(TT) {
                                return TT.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(TT);
                            for (const [, MT] of lT.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) cT.add(MT);
                            for (const [MT, KT] of kK)
                              for (const [, TT] of(0, qM.h)(lT, MT, KT)) kT.has(TT) && cT.add(TT);
                            return cT
                          }

                          function fK(TT, kT, cT, lT) {
                            const MT = TT.get(kT);
                            MT ? !lT && MT.some((TT => TT.pageId === cT.pageId)) || MT.push(cT) : TT.set(kT, [cT])
                          }
                          const xK = /^[A-Za-z_$][\w$]*$/;

                          function IK(TT) {
                            return xK.test(TT.name) ? TT.name : "options"
                          }

                          function AK(TT, kT) {
                            const cT = TT.params.map(IK).join(", ");
                            return kT ? `${TT.name} = (${cT}) => {\n\t\n}` : `api.${TT.name}(${cT})`
                          }

                          function CK(TT) {
                            let {
                              method: kT,
                              isCallback: cT
                            } = TT;
                            return (0, vT.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, vT.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [cT ? (0, vT.jsxs)(vT.Fragment, {
                                  children: [(0, vT.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: kT.name
                                  }), (0, vT.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, vT.jsxs)(vT.Fragment, {
                                  children: [(0, vT.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, vT.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: kT.name
                                  }), (0, vT.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), kT.params.map(((TT, cT) => (0, vT.jsxs)(lT.Fragment, {
                                  children: [cT > 0 && (0, vT.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, vT.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${kT.name}-${IK(TT)}`,
                                    children: TT.name
                                  })]
                                }, TT.name))), (0, vT.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: cT ? ") => " : ")"
                                }), cT && !kT.returns && (0, vT.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), kT.returns && kT.returns.type && (0, vT.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!cT && (0, vT.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, vT.jsx)(wk, {
                                  type: kT.returns.type
                                })]
                              })]
                            })
                          }

                          function jK(TT) {
                            let {
                              title: kT,
                              references: cT
                            } = TT;
                            const MT = (0, lT.useContext)(jk);
                            return (0, vT.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, vT.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: kT
                              }), cT.map((TT => (0, vT.jsx)(OT.e, {
                                to: UT(MT, uT(TT.pageId), TT.anchor),
                                children: TT.label
                              }, `${TT.pageId}#${TT.anchor}`)))]
                            })
                          }

                          function vK(TT) {
                            var kT, cT;
                            let {
                              pageId: lT,
                              anchor: MT
                            } = TT;
                            const KT = cK({
                                pageId: lT,
                                anchor: MT
                              }),
                              OT = null !== (kT = function() {
                                if (!KK) {
                                  KK = new Map;
                                  const lT = new Set(ET.filter((TT => "callbacks" === TT.layout)).flatMap((TT => dT(TT).sections.map((TT => TT.heading.text)))));
                                  for (const MT of ET)
                                    if ("article" === MT.layout || "snippets" === MT.layout)
                                      for (const KT of (0, PT.q)(dT(MT)))
                                        for (const {
                                            code: OT
                                          }
                                          of(0, PT.k)(KT.blocks))
                                          for (const yT of yK(OT, lT)) {
                                            const lT = Ak().get(yT);
                                            if (lT) {
                                              var TT, kT, cT;
                                              const OT = {
                                                pageId: MT.id,
                                                anchor: null !== (TT = null === (kT = KT.heading) || void 0 === kT ? void 0 : kT.anchor) && void 0 !== TT ? TT : "",
                                                label: null !== (cT = MT.navTitle) && void 0 !== cT ? cT : MT.title
                                              };
                                              fK(KK, cK(lT), OT, !1)
                                            }
                                          }
                                }
                                return KK
                              }().get(KT)) && void 0 !== kT ? kT : [],
                              yT = null !== (cT = function() {
                                if (!MK) {
                                  MK = new Map;
                                  const TT = uT("changelog");
                                  for (const kT of dT(TT).sections) {
                                    const cT = new Set(kT.blocks.flatMap((TT => [...OK(TT)])));
                                    for (const lT of cT) {
                                      const cT = {
                                        pageId: TT.id,
                                        anchor: kT.heading.anchor,
                                        label: kT.heading.text
                                      };
                                      fK(MK, lT, cT, !0)
                                    }
                                  }
                                }
                                return MK
                              }().get(KT)) && void 0 !== cT ? cT : [];
                            return 0 === OT.length && 0 === yT.length ? null : (0, vT.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [OT.length > 0 && (0, vT.jsx)(jK, {
                                title: "Used in",
                                references: OT
                              }), yT.length > 0 && (0, vT.jsx)(jK, {
                                title: "Changelog",
                                references: yT
                              })]
                            })
                          }

                          function tK(TT) {
                            let {
                              method: kT,
                              pageId: cT,
                              anchor: lT,
                              isCallback: MT
                            } = TT;
                            const KT = MT ? void 0 : yk().get(kT.name),
                              OT = kT.description.length > 0 || null === KT || void 0 === KT || !KT.description ? kT.description : (0, PT.v)(KT.description);
                            return (0, vT.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, vT.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, vT.jsx)(Ic, {
                                  level: 2,
                                  text: kT.name,
                                  anchor: lT,
                                  className: "DocsCardTitle"
                                }), (0, vT.jsx)(ST, {
                                  text: AK(kT, MT),
                                  label: MT ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, vT.jsx)(CK, {
                                method: kT,
                                isCallback: MT
                              }), KT && null !== KT.deprecation && (0, vT.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, vT.jsx)("strong", {
                                  children: "Deprecated"
                                }), KT.deprecation && (0, vT.jsxs)(vT.Fragment, {
                                  children: [": ", (0, vT.jsx)(Fk, {
                                    text: (yT = KT.deprecation, (0, qM.v)(yT, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, qM.m)("`\\w"), (TT => {
                                      let [kT] = TT;
                                      return Ak().has(kT) ? `\`${kT}\`` : kT
                                    })))
                                  })]
                                })]
                              }), OT.length > 0 && (0, vT.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, vT.jsx)(vc, {
                                  blocks: OT
                                })
                              }), kT.params.length > 0 && (0, vT.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, vT.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, vT.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: kT.params.map((TT => (0, vT.jsxs)("div", {
                                    id: `${kT.name}-${IK(TT)}`,
                                    className: "DocsParam",
                                    children: [(0, vT.jsxs)("dt", {
                                      children: [(0, vT.jsx)("code", {
                                        className: "DocsParamName",
                                        children: TT.name
                                      }), (0, vT.jsx)(wk, {
                                        type: TT.type
                                      })]
                                    }), TT.description && (0, vT.jsx)("dd", {
                                      children: (0, vT.jsx)(Fk, {
                                        text: TT.description
                                      })
                                    })]
                                  }, TT.name)))
                                })]
                              }), kT.returns && (kT.returns.type || kT.returns.description.length > 0) && (0, vT.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, vT.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, vT.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [kT.returns.type && (0, vT.jsx)(wk, {
                                    type: kT.returns.type
                                  }), kT.returns.description.length > 0 && (0, vT.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, vT.jsx)(vc, {
                                      blocks: kT.returns.description
                                    })
                                  })]
                                })]
                              }), (0, vT.jsx)(vK, {
                                pageId: cT,
                                anchor: lT
                              })]
                            });
                            var yT
                          }

                          function hK(TT) {
                            var kT;
                            return null !== TT.defaultValue && "undefined" !== TT.defaultValue ? TT.defaultValue : null !== (kT = TT.example) && void 0 !== kT ? kT : "value"
                          }

                          function NK(TT) {
                            let {
                              setting: kT,
                              pageId: cT,
                              anchor: lT,
                              setterSnippet: MT
                            } = TT;
                            const KT = null === kT.defaultValue ? null : Nk(kT.defaultValue);
                            return (0, vT.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, vT.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, vT.jsx)(Ic, {
                                  level: 2,
                                  text: kT.name,
                                  anchor: lT,
                                  className: "DocsCardTitle"
                                }), (0, vT.jsx)(ST, {
                                  text: MT(kT.name, hK(kT)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, vT.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, vT.jsxs)("div", {
                                  children: [(0, vT.jsx)("dt", {
                                    children: "Type"
                                  }), (0, vT.jsx)("dd", {
                                    children: (0, vT.jsx)(wk, {
                                      type: kT.type
                                    })
                                  })]
                                }), null !== kT.defaultValue && (0, vT.jsxs)("div", {
                                  children: [(0, vT.jsx)("dt", {
                                    children: "Default"
                                  }), (0, vT.jsx)("dd", {
                                    children: (0, vT.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [KT && (0, vT.jsx)(Qk, {
                                        colour: KT
                                      }), kT.defaultValue]
                                    })
                                  })]
                                }), null !== kT.example && (0, vT.jsxs)("div", {
                                  children: [(0, vT.jsx)("dt", {
                                    children: "Example"
                                  }), (0, vT.jsx)("dd", {
                                    children: (0, vT.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: kT.example
                                    })
                                  })]
                                })]
                              }), kT.description.length > 0 && (0, vT.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, vT.jsx)(vc, {
                                  blocks: kT.description
                                })
                              }), (0, vT.jsx)(vK, {
                                pageId: cT,
                                anchor: lT
                              })]
                            })
                          }

                          function QK(TT) {
                            let {
                              section: kT
                            } = TT;
                            return (0, vT.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, vT.jsx)(Ic, {
                                level: 2,
                                text: kT.heading.text,
                                anchor: kT.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, vT.jsx)("div", {
                                className: "DocsProse",
                                children: (0, vT.jsx)(vc, {
                                  blocks: kT.blocks
                                })
                              })]
                            })
                          }

                          function SK(TT) {
                            let {
                              section: kT
                            } = TT;
                            return (0, vT.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, vT.jsx)(Ic, {
                                level: kT.heading.level,
                                text: kT.heading.text,
                                anchor: kT.heading.anchor
                              }), (0, vT.jsx)(vc, {
                                blocks: kT.blocks
                              })]
                            })
                          }
                          const DK = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function aK(TT) {
                            let {
                              page: kT,
                              section: cT
                            } = TT;
                            if ("methods" === kT.layout || "callbacks" === kT.layout) return (0, vT.jsx)(tK, {
                              method: Pc(cT),
                              pageId: kT.id,
                              anchor: cT.heading.anchor,
                              isCallback: "callbacks" === kT.layout
                            });
                            if ("settings" === kT.layout) {
                              const TT = function(TT) {
                                const kT = {
                                  name: TT.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const lT of TT.blocks) {
                                  var cT;
                                  if (rc(lT)) continue;
                                  const TT = "paragraph" === lT.kind ? lT.text.match(wc) : null;
                                  if (!TT) {
                                    kT.description.push(lT);
                                    continue
                                  }
                                  const MT = null !== (cT = Fc(TT[2])) && void 0 !== cT ? cT : TT[2];
                                  "Type" === TT[1] ? kT.type = MT : "Default" === TT[1] ? kT.defaultValue = MT : "" !== MT && (kT.example = MT)
                                }
                                return kT.type ? kT : null
                              }(cT);
                              if (TT) return (0, vT.jsx)(NK, {
                                setting: TT,
                                pageId: kT.id,
                                anchor: cT.heading.anchor,
                                setterSnippet: kT.setterSnippet
                              })
                            }
                            return "snippets" === kT.layout ? (0, vT.jsx)(QK, {
                              section: cT
                            }) : "changelog" === kT.layout ? (0, vT.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, vT.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, vT.jsx)(Ic, {
                                  level: 2,
                                  text: cT.heading.text,
                                  anchor: cT.heading.anchor
                                })
                              }), (0, vT.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, vT.jsx)(vc, {
                                  blocks: mc(cT.blocks)
                                })
                              })]
                            }) : kT.gallery ? (0, vT.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, vT.jsx)(Ic, {
                                level: cT.heading.level,
                                text: cT.heading.text,
                                anchor: cT.heading.anchor
                              }), (0, vT.jsx)(bl, {
                                kind: kT.gallery,
                                content: dT(kT),
                                blocks: cT.blocks
                              })]
                            }) : (0, vT.jsx)(SK, {
                              section: cT
                            })
                          }

                          function FK(TT) {
                            let {
                              page: kT,
                              onTocChange: cT
                            } = TT;
                            const MT = dT(kT),
                              [KT, OT] = (0, lT.useState)(""),
                              yT = "article" !== kT.layout,
                              fT = Nc(kT.gallery) ? kT.gallery : null,
                              xT = null !== fT,
                              IT = KT.trim().toLowerCase(),
                              AT = (0, lT.useRef)(null),
                              CT = (0, lT.useCallback)((TT => {
                                var kT;
                                null === (kT = AT.current) || void 0 === kT || kT.preview(TT)
                              }), []),
                              jT = (0, lT.useMemo)((() => {
                                if (!kT.hasParticlePlayground) return [];
                                const TT = oc(MT.intro).find((TT => "names" === TT.kind && !TT.names.some((TT => null !== dc(TT.name)))));
                                return "names" === (null === TT || void 0 === TT ? void 0 : TT.kind) ? TT.names.map((TT => TT.name)) : []
                              }), [kT, MT]),
                              tT = (0, lT.useMemo)((() => {
                                if (!kT.hasTextPlayground) return [];
                                const TT = MT.sections.flatMap((TT => TT.blocks.flatMap((TT => {
                                  var kT;
                                  return (null !== (kT = Jc(TT)) && void 0 !== kT ? kT : []).flatMap((TT => dk(TT.name) ? [TT.name] : []))
                                }))));
                                return [...new Set(TT)]
                              }), [kT, MT]),
                              hT = (0, lT.useMemo)((() => IT ? MT.sections.filter((TT => function(TT, kT) {
                                return !!TT.heading.text.toLowerCase().includes(kT) || TT.blocks.some((TT => (0, PT.j)(TT).toLowerCase().includes(kT)))
                              }(TT, IT))) : MT.sections), [MT, IT]),
                              NT = (0, lT.useMemo)((() => function(TT, kT) {
                                return "article" !== TT.layout ? kT.map((TT => ({
                                  anchor: TT.heading.anchor,
                                  text: TT.heading.text,
                                  level: 2
                                }))) : kT.flatMap((TT => {
                                  const kT = TT.blocks.flatMap((TT => "heading" === TT.kind && 3 === TT.level ? [{
                                    anchor: TT.anchor,
                                    text: TT.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: TT.heading.anchor,
                                    text: TT.heading.text,
                                    level: 2
                                  }, ...kT]
                                }))
                              }(kT, hT)), [kT, hT]);
                            return (0, lT.useEffect)((() => {
                              cT(NT)
                            }), [NT, cT]), (0, vT.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, vT.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, vT.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: MT.title || kT.title
                                }), (0, vT.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: kT.summary
                                }), (0, vT.jsx)(nl, {
                                  page: kT
                                }), yT && (0, vT.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, vT.jsxs)("span", {
                                    children: [(0, vT.jsx)("strong", {
                                      children: MT.sections.length
                                    }), " ", DK[kT.layout]]
                                  })
                                })]
                              }), "" === kT.slug && (0, vT.jsx)(Jl, {}), fT && (0, vT.jsx)(Gl, {
                                kind: fT
                              }, fT), kT.hasParticlePlayground && (0, vT.jsx)(fM, {
                                ref: AT,
                                textures: jT
                              }), !xT && MT.intro.length > 0 && (0, vT.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: kT.gallery ? (0, vT.jsx)(Ql.Provider, {
                                  value: kT.hasParticlePlayground ? CT : null,
                                  children: (0, vT.jsx)(bl, {
                                    kind: kT.gallery,
                                    content: MT,
                                    blocks: MT.intro
                                  })
                                }) : (0, vT.jsx)(vc, {
                                  blocks: mc(MT.intro)
                                })
                              }), kT.hasTextPlayground && (0, vT.jsx)(PM, {
                                fontAwesomeIcons: tT
                              }), kT.hasVoicePlayground && (0, vT.jsx)(iM, {}), kT.childPageIds && (0, vT.jsx)(Jl, {
                                cards: kT.childPageIds.map((TT => ({
                                  pageId: TT
                                }))),
                                label: kT.title
                              }), yT && (0, vT.jsx)(Dc, {
                                className: "DocsFilterBar",
                                value: KT,
                                placeholder: `Filter ${MT.sections.length} ${DK[kT.layout]}\u2026`,
                                label: `Filter ${DK[kT.layout]}`,
                                onChange: OT,
                                count: IT ? {
                                  visible: hT.length,
                                  total: MT.sections.length
                                } : null
                              }), !xT && (0, vT.jsxs)("div", {
                                className: `DocsSections Layout-${kT.layout}`,
                                children: [hT.map((TT => (0, vT.jsx)(aK, {
                                  page: kT,
                                  section: TT
                                }, TT.heading.anchor))), 0 === hT.length && (0, vT.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", DK[kT.layout], " match \u201c", KT, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const rK = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function PK(TT) {
                            let {
                              entry: kT,
                              isActive: cT,
                              onNavigate: lT,
                              label: MT,
                              children: OT
                            } = TT;
                            return (0, vT.jsx)("a", {
                              href: `#${kT.anchor}`,
                              "aria-label": MT,
                              className: KT()(`Level${kT.level}`, {
                                Active: cT
                              }),
                              "aria-current": cT ? "location" : void 0,
                              onClick: TT => {
                                TT.preventDefault(), lT(kT.anchor)
                              },
                              children: OT
                            })
                          }

                          function wK(TT) {
                            let {
                              toc: kT,
                              activeAnchor: cT,
                              onNavigate: MT
                            } = TT;
                            const OT = Math.max(0, kT.findIndex((TT => TT.anchor === cT))),
                              yT = (0, lT.useRef)(null),
                              fT = (0, lT.useRef)(!1);
                            (0, lT.useEffect)((() => {
                              var TT, cT;
                              const lT = null === (TT = yT.current) || void 0 === TT ? void 0 : TT.closest(".DocsToc"),
                                MT = null === (cT = yT.current) || void 0 === cT ? void 0 : cT.querySelector(".DocsTimelineNotch.Active");
                              if (!lT || !MT) return;
                              let KT = 0;
                              if (OT === kT.length - 1) KT = lT.scrollHeight;
                              else if (OT > 0) {
                                const TT = lT.getBoundingClientRect(),
                                  kT = MT.getBoundingClientRect();
                                KT = lT.scrollTop + kT.top + kT.height / 2 - (TT.top + lT.clientHeight / 2)
                              }
                              lT.scrollTo({
                                top: KT,
                                behavior: fT.current ? "smooth" : "auto"
                              }), fT.current = !0
                            }), [OT, kT.length]);
                            const xT = [];
                            return kT.forEach(((TT, kT) => {
                              var cT, lT, MT;
                              const KT = function(TT) {
                                  const kT = TT.trim().match(rK);
                                  return kT ? {
                                    day: kT[1],
                                    month: `${kT[2]} ${kT[3]}`
                                  } : null
                                }(TT.text),
                                OT = null !== (cT = null === KT || void 0 === KT ? void 0 : KT.month) && void 0 !== cT ? cT : null;
                              null !== OT && (null === (lT = xT.at(-1)) || void 0 === lT ? void 0 : lT.month) === OT || xT.push({
                                month: OT,
                                entries: []
                              }), xT.at(-1).entries.push({
                                entry: TT,
                                day: null !== (MT = null === KT || void 0 === KT ? void 0 : KT.day) && void 0 !== MT ? MT : null,
                                index: kT
                              })
                            })), (0, vT.jsx)("ol", {
                              ref: yT,
                              className: "DocsTimeline",
                              children: xT.map((TT => {
                                let {
                                  month: kT,
                                  entries: cT
                                } = TT;
                                return (0, vT.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [kT && (0, vT.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: kT
                                  }), (0, vT.jsx)("ol", {
                                    children: cT.map((TT => {
                                      let {
                                        entry: kT,
                                        day: cT,
                                        index: lT
                                      } = TT;
                                      return (0, vT.jsx)("li", {
                                        className: KT()("DocsTimelineNotch", {
                                          Passed: lT < OT,
                                          Active: lT === OT
                                        }),
                                        children: (0, vT.jsx)(PK, {
                                          entry: kT,
                                          isActive: lT === OT,
                                          onNavigate: MT,
                                          label: kT.text,
                                          children: (0, vT.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== cT && void 0 !== cT ? cT : kT.text
                                          })
                                        })
                                      }, kT.anchor)
                                    }))
                                  })]
                                }, cT[0].entry.anchor)
                              }))
                            })
                          }

                          function mK(TT) {
                            let {
                              isChangelog: kT,
                              toc: cT,
                              activeAnchor: lT,
                              onNavigate: MT
                            } = TT;
                            return 0 === cT.length ? null : (0, vT.jsxs)(vT.Fragment, {
                              children: [(0, vT.jsx)("div", {
                                className: "DocsTocTitle",
                                children: kT ? "Updates" : "On this page"
                              }), kT ? (0, vT.jsx)(wK, {
                                toc: cT,
                                activeAnchor: lT,
                                onNavigate: MT
                              }) : (0, vT.jsx)("ul", {
                                children: cT.map((TT => (0, vT.jsx)("li", {
                                  children: (0, vT.jsx)(PK, {
                                    entry: TT,
                                    isActive: TT.anchor === lT,
                                    onNavigate: MT,
                                    children: TT.text.replace(/`/g, "")
                                  })
                                }, TT.anchor)))
                              })]
                            })
                          }
                          const bK = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            zK = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            JK = 20,
                            oK = 10,
                            HK = 40,
                            eK = 120;
                          let GK;

                          function VK(TT) {
                            const kT = TT.gallery;
                            if (!kT) return [];
                            if (Nc(kT)) return function(TT) {
                              return Sc(TT).entries.map((TT => TT.name))
                            }(kT).map((cT => ({
                              page: TT,
                              anchor: ec(kT, cT),
                              title: cT,
                              kind: zK[kT],
                              text: "",
                              listedUnder: TT.title
                            })));
                            const cT = dT(TT);
                            return (0, PT.q)(cT).flatMap((lT => {
                              const MT = lT.heading ? `${TT.title} \u203a ${lT.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : TT.title;
                              return Vc(kT, cT, lT.blocks).flatMap((cT => "names" !== cT.kind ? [] : cT.names.map((lT => {
                                const KT = cT.isSongs ? "Song" : zK[kT];
                                return {
                                  page: TT,
                                  anchor: lT.anchor,
                                  title: lT.name,
                                  kind: KT,
                                  text: "",
                                  listedUnder: MT
                                }
                              }))))
                            }))
                          }

                          function EK(TT, kT, cT) {
                            const lT = TT.title.toLowerCase();
                            let MT = 0;
                            if (lT === kT) MT = 100;
                            else if (lT.startsWith(kT)) MT = 80;
                            else if (lT.includes(kT)) MT = 60;
                            else if (cT.every((TT => lT.includes(TT)))) MT = 45;
                            else {
                              if (!TT.text.toLowerCase().includes(kT)) return 0;
                              MT = 20
                            }
                            return MT - Math.min(lT.length / 10, 9) + ("Page" === TT.kind ? 8 : "Method" === TT.kind ? 3 : 0) - (TT.listedUnder ? JK : 0)
                          }

                          function ZK(TT, kT) {
                            const cT = TT.toLowerCase().indexOf(kT),
                              lT = Math.max(0, cT - eK / 3);
                            return `${lT>0?"\u2026":""}${TT.slice(lT,lT+eK)}${lT+eK<TT.length?"\u2026":""}`
                          }

                          function uK(TT) {
                            let {
                              text: kT,
                              query: cT
                            } = TT;
                            const lT = cT ? kT.toLowerCase().indexOf(cT) : -1;
                            return -1 === lT ? (0, vT.jsx)(vT.Fragment, {
                              children: kT
                            }) : (0, vT.jsxs)(vT.Fragment, {
                              children: [kT.slice(0, lT), (0, vT.jsx)("mark", {
                                children: kT.slice(lT, lT + cT.length)
                              }), kT.slice(lT + cT.length)]
                            })
                          }

                          function XK(TT) {
                            let {
                              basePath: kT,
                              onClose: cT
                            } = TT;
                            const MT = (0, yT.t)(),
                              [OT, fT] = (0, lT.useState)(""),
                              [xT, IT] = (0, lT.useState)(0),
                              AT = (0, lT.useRef)(null),
                              CT = (0, lT.useRef)(null),
                              jT = OT.trim().toLowerCase(),
                              tT = (0, lT.useMemo)((() => {
                                const TT = (GK || (GK = ET.flatMap((TT => {
                                  const kT = dT(TT);
                                  return [{
                                    page: TT,
                                    anchor: "",
                                    title: TT.title,
                                    kind: "Page",
                                    text: TT.summary
                                  }, ...kT.sections.flatMap((kT => {
                                    const cT = kT.blocks.filter((TT => "paragraph" === TT.kind)).map(PT.j).join(" ").replace(/[`*]/g, ""),
                                      lT = {
                                        page: TT,
                                        anchor: kT.heading.anchor,
                                        title: kT.heading.text.replace(/`/g, ""),
                                        kind: bK[TT.layout],
                                        text: cT
                                      },
                                      MT = kT.blocks.flatMap((kT => "article" === TT.layout && "heading" === kT.kind && 3 === kT.level ? [{
                                        page: TT,
                                        anchor: kT.anchor,
                                        title: kT.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: lT.title
                                      }] : []));
                                    return [lT, ...MT]
                                  })), ...VK(TT)]
                                }))), GK);
                                if (!jT) return TT.filter((TT => "Page" === TT.kind));
                                const kT = jT.split(/\s+/);
                                let cT = 0;
                                return TT.map((TT => ({
                                  entry: TT,
                                  score: EK(TT, jT, kT)
                                }))).filter((TT => TT.score > 0)).sort(((TT, kT) => kT.score - TT.score)).filter((TT => !TT.entry.listedUnder || (cT++, cT <= oK))).slice(0, HK).map((TT => TT.entry))
                              }), [jT]);
                            (0, lT.useEffect)((() => {
                              IT(0)
                            }), [jT]), (0, lT.useEffect)((() => {
                              const TT = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === TT || void 0 === TT || TT.focus()
                              }
                            }), []), (0, lT.useEffect)((() => {
                              var TT, kT;
                              null === (TT = AT.current) || void 0 === TT || null === (kT = TT.querySelector(".Active")) || void 0 === kT || kT.scrollIntoView({
                                block: "nearest"
                              })
                            }), [xT]);
                            const NT = TT => {
                              MT(UT(kT, TT.page, TT.anchor)), cT()
                            };
                            return (0, vT.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: TT => {
                                TT.target === TT.currentTarget && cT()
                              },
                              children: (0, vT.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: TT => {
                                  TT.target !== CT.current && TT.preventDefault()
                                },
                                onKeyDown: TT => {
                                  if ("Escape" === TT.key) cT();
                                  else if ("Tab" === TT.key) {
                                    var kT;
                                    TT.preventDefault(), null === (kT = CT.current) || void 0 === kT || kT.focus()
                                  }
                                },
                                children: [(0, vT.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, vT.jsx)(hT, {
                                    name: "magnifying-glass"
                                  }), (0, vT.jsx)("input", {
                                    ref: CT,
                                    autoFocus: !0,
                                    value: OT,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": tT.length > 0 ? `DocsSearchResult-${xT}` : void 0,
                                    onChange: TT => {
                                      fT(TT.target.value)
                                    },
                                    onKeyDown: TT => {
                                      if ("ArrowDown" === TT.key || "ArrowUp" === TT.key) {
                                        TT.preventDefault();
                                        const kT = "ArrowDown" === TT.key ? 1 : -1;
                                        IT((xT + kT + tT.length) % Math.max(tT.length, 1))
                                      } else "Enter" === TT.key && tT[xT] && NT(tT[xT])
                                    }
                                  }), (0, vT.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, vT.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: AT,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!jT && (0, vT.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), tT.map(((TT, kT) => {
                                    var cT;
                                    return (0, vT.jsxs)("li", {
                                      id: `DocsSearchResult-${kT}`,
                                      role: "option",
                                      "aria-selected": kT === xT,
                                      className: KT()("DocsSearchResult", {
                                        Active: kT === xT
                                      }),
                                      onMouseMove: () => {
                                        IT(kT)
                                      },
                                      onClick: () => {
                                        NT(TT)
                                      },
                                      children: [(0, vT.jsx)(hT, {
                                        name: TT.page.icon
                                      }), (0, vT.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, vT.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, vT.jsx)(uK, {
                                            text: TT.title,
                                            query: jT
                                          })
                                        }), TT.text && (0, vT.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, vT.jsx)(uK, {
                                            text: ZK(TT.text, jT),
                                            query: jT
                                          })
                                        })]
                                      }), (0, vT.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === TT.kind ? "Page" : null !== (cT = TT.listedUnder) && void 0 !== cT ? cT : `${TT.kind} \xb7 ${TT.page.title}`
                                      })]
                                    }, `${TT.page.id}#${TT.anchor}`)
                                  })), jT && 0 === tT.length && (0, vT.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", OT, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function dK(TT, kT) {
                            if (kT < 10) return `${TT.toFixed(1)}s`;
                            const cT = Math.floor(TT);
                            return `${Math.floor(cT/60)}:${String(cT%60).padStart(2,"0")}`
                          }

                          function LK() {
                            const TT = Al((TT => TT.track)),
                              kT = Al((TT => TT.volume)),
                              [cT, MT] = (0, lT.useState)(0),
                              OT = (0, lT.useRef)(cl);
                            if ((0, lT.useEffect)((() => {
                                if (!TT) return;
                                if (MT(tl()), "playing" !== TT.status) return;
                                let kT = 0;
                                const cT = () => {
                                  MT(tl()), kT = requestAnimationFrame(cT)
                                };
                                return kT = requestAnimationFrame(cT), () => {
                                  cancelAnimationFrame(kT)
                                }
                              }), [TT]), !TT) return null;
                            const yT = "paused" !== TT.status,
                              fT = Math.min(cT, TT.duration);
                            return (0, vT.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, vT.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, vT.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": yT ? `Pause ${TT.name}` : `Play ${TT.name}`,
                                  onClick: vl,
                                  children: (0, vT.jsx)(hT, {
                                    name: yT ? "pause" : "play"
                                  })
                                }), (0, vT.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, vT.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, vT.jsx)("code", {
                                      children: TT.name
                                    }), (0, vT.jsx)("span", {
                                      children: TT.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, vT.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, vT.jsx)("span", {
                                      children: dK(fT, TT.duration)
                                    }), (0, vT.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: TT.duration || 1,
                                      step: .01,
                                      value: fT,
                                      disabled: 0 === TT.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${dK(fT,TT.duration)} of ${dK(TT.duration,TT.duration)}`,
                                      onChange: TT => {
                                        const kT = Number(TT.target.value);
                                        ! function(TT) {
                                          var kT;
                                          yl = TT, null === (kT = Kl) || void 0 === kT || kT.seek(TT)
                                        }(kT), MT(kT)
                                      }
                                    }), (0, vT.jsx)("span", {
                                      children: TT.duration > 0 ? dK(TT.duration, TT.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, vT.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, vT.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === kT ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === kT ? hl(OT.current) : (OT.current = kT, hl(0))
                                    },
                                    children: (0, vT.jsx)(hT, {
                                      name: "volume",
                                      className: KT()({
                                        Muted: 0 === kT
                                      })
                                    })
                                  }), (0, vT.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: kT,
                                    "aria-label": "Volume",
                                    onChange: TT => {
                                      hl(Number(TT.target.value))
                                    }
                                  })]
                                }), (0, vT.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var kT;
                                    null === (kT = document.querySelector(`[data-docs-track="${CSS.escape(ll(TT.name,TT.isSong))}"]`)) || void 0 === kT || kT.focus(), Nl()
                                  },
                                  children: (0, vT.jsx)(hT, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var RK = cT(47);
                          const gK = "docsTheme",
                            UK = window.matchMedia("(prefers-color-scheme: light)");

                          function YK(TT) {
                            let {
                              theme: kT,
                              onChange: cT
                            } = TT;
                            const lT = "dark" === kT ? "light" : "dark";
                            return (0, vT.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${lT} theme`,
                              title: `Switch to ${lT} theme`,
                              onClick: () => {
                                cT(lT)
                              },
                              children: (0, vT.jsx)(hT, {
                                name: "dark" === kT ? "moon" : "sun"
                              })
                            })
                          }
                          const BK = "https://github.com/Bloxdy/code-api",
                            WK = "https://discord.gg/playbloxd",
                            nK = 180,
                            pK = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function iK(TT) {
                            let {
                              basePath: kT,
                              activePageId: cT,
                              onNavigate: lT
                            } = TT;
                            return (0, vT.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: ZT.map((TT => (0, vT.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, vT.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: TT.title
                                }), TT.pageIds.map((TT => {
                                  var MT;
                                  const yT = uT(TT);
                                  return (0, vT.jsxs)(OT.e, {
                                    to: UT(kT, yT),
                                    className: KT()("DocsNavLink", {
                                      Active: yT.id === cT
                                    }),
                                    "aria-current": yT.id === cT ? "page" : void 0,
                                    onClick: lT,
                                    children: [(0, vT.jsx)(hT, {
                                      name: yT.icon
                                    }), (0, vT.jsx)("span", {
                                      children: null !== (MT = yT.navTitle) && void 0 !== MT ? MT : yT.title
                                    })]
                                  }, yT.id)
                                }))]
                              }, TT.title)))
                            })
                          }

                          function qK(TT) {
                            let {
                              basePath: kT,
                              pageId: cT
                            } = TT;
                            const lT = ZT.flatMap((TT => TT.pageIds)),
                              MT = lT.indexOf(cT),
                              KT = MT > 0 ? uT(lT[MT - 1]) : null,
                              yT = MT < lT.length - 1 ? uT(lT[MT + 1]) : null;
                            return (0, vT.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [KT ? (0, vT.jsxs)(OT.e, {
                                className: "DocsPagerLink Previous",
                                to: UT(kT, KT),
                                children: [(0, vT.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, vT.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: KT.title
                                })]
                              }) : (0, vT.jsx)("span", {}), yT && (0, vT.jsxs)(OT.e, {
                                className: "DocsPagerLink Next",
                                to: UT(kT, yT),
                                children: [(0, vT.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, vT.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: yT.title
                                })]
                              })]
                            })
                          }

                          function sK(TT) {
                            let {
                              basePath: kT,
                              embedded: cT = !1
                            } = TT;
                            const {
                              pageSlug: MT = ""
                            } = (0, yT.v)(), xT = (0, yT.s)(), IT = (0, yT.t)(), AT = (CT = MT, ET.find((TT => TT.slug === CT)));
                            var CT;
                            const [jT, tT] = function() {
                              const [TT, kT] = (0, lT.useState)((() => {
                                const TT = RK.e.getItem(gK);
                                return "dark" === TT || "light" === TT ? TT : null
                              })), [cT, MT] = (0, lT.useState)(UK.matches ? "light" : "dark");
                              return (0, lT.useEffect)((() => {
                                const TT = () => {
                                  MT(UK.matches ? "light" : "dark")
                                };
                                return UK.addEventListener("change", TT), () => {
                                  UK.removeEventListener("change", TT)
                                }
                              }), []), [null !== TT && void 0 !== TT ? TT : cT, TT => {
                                RK.e.setItem(gK, TT), kT(TT)
                              }]
                            }(), [NT, QT] = (0, lT.useState)(null), [ST, DT] = (0, lT.useState)(!1), [aT, FT] = (0, lT.useState)(!1), [rT, wT] = (0, lT.useState)([]), mT = function(TT, kT) {
                              const [cT, MT] = (0, lT.useState)("");
                              return (0, lT.useEffect)((() => {
                                if (!kT) return;
                                let cT = 0;
                                const lT = () => {
                                    var lT, KT;
                                    cT = 0;
                                    const OT = kT.getBoundingClientRect().top + nK;
                                    let yT = null !== (lT = null === (KT = TT[0]) || void 0 === KT ? void 0 : KT.anchor) && void 0 !== lT ? lT : "";
                                    for (const kT of TT) {
                                      const TT = document.getElementById(kT.anchor);
                                      TT && TT.getBoundingClientRect().top <= OT && (yT = kT.anchor)
                                    }
                                    kT.scrollTop + kT.clientHeight >= kT.scrollHeight - 2 && kT.scrollTop > 0 && TT.length > 0 && (yT = TT[TT.length - 1].anchor), MT(yT)
                                  },
                                  KT = () => {
                                    cT || (cT = requestAnimationFrame(lT))
                                  };
                                return lT(), kT.addEventListener("scroll", KT, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(cT), kT.removeEventListener("scroll", KT)
                                }
                              }), [TT, kT]), cT
                            }(rT, NT), bT = "" === MT && xT.hash ? function(TT) {
                              const kT = (0, PT.o)(TT);
                              if (LT(uT("welcome"), kT)) return null;
                              const cT = Object.hasOwn(gT, kT) ? gT[kT] : null;
                              if (cT) return {
                                page: uT(cT.pageId),
                                anchor: cT.anchor
                              };
                              const lT = uT("readme");
                              return LT(lT, kT) ? {
                                page: lT,
                                anchor: kT
                              } : RT(`#${kT}`)
                            }(xT.hash) : null;
                            (0, lT.useEffect)((() => (fT.e.set({
                              musicOnFromPage: !1
                            }), () => {
                              fT.e.set({
                                musicOnFromPage: !0
                              }), Nl()
                            })), []), (0, lT.useEffect)((() => {
                              const TT = TT => {
                                const kT = TT.target;
                                if (kT.closest(".DocsTextDialog")) return;
                                const cT = kT.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(kT.tagName);
                                "k" === TT.key && (TT.metaKey || TT.ctrlKey) || "/" === TT.key && !cT ? (TT.preventDefault(), FT(!0)) : "Escape" === TT.key && DT(!1)
                              };
                              return window.addEventListener("keydown", TT), () => {
                                window.removeEventListener("keydown", TT)
                              }
                            }), []);
                            const zT = (0, lT.useRef)(null);
                            (0, lT.useLayoutEffect)((() => {
                              var TT, kT;
                              if (!NT) return;
                              const cT = zT.current === xT.pathname;
                              zT.current = xT.pathname;
                              const lT = (0, PT.o)(xT.hash),
                                MT = lT ? document.getElementById(lT) : null;
                              if (null === (TT = NT.querySelector(".DocsTargeted")) || void 0 === TT || TT.classList.remove("DocsTargeted"), null === MT || void 0 === MT || null === (kT = MT.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === kT || kT.classList.add("DocsTargeted"), MT) {
                                var KT;
                                const TT = MT.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (KT = MT.closest(".DocsChangelogEntry")) && void 0 !== KT ? KT : MT).scrollIntoView({
                                  block: TT ? "center" : "start",
                                  behavior: cT ? "smooth" : "auto"
                                })
                              } else cT || NT.scrollTo({
                                top: 0
                              })
                            }), [NT, xT.pathname, xT.hash, xT.key]);
                            const JT = (0, lT.useCallback)((() => {
                                DT(!1)
                              }), []),
                              oT = (0, lT.useCallback)((TT => {
                                IT({
                                  hash: TT
                                })
                              }), [IT]);
                            if (bT) return (0, vT.jsx)(yT.e, {
                              replace: !0,
                              to: UT(kT, bT.page, bT.anchor)
                            });
                            if (!AT) return (0, vT.jsx)(yT.e, {
                              replace: !0,
                              to: kT
                            });
                            const HT = cT ? "div" : "main";
                            return (0, vT.jsx)(jk.Provider, {
                              value: kT,
                              children: (0, vT.jsx)(vk.Provider, {
                                value: NT,
                                children: (0, vT.jsxs)("div", {
                                  ref: QT,
                                  className: KT()("DocsSite", {
                                    Embedded: cT,
                                    NavOpen: ST
                                  }),
                                  "data-theme": jT,
                                  children: [(0, vT.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, vT.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": ST ? "Close menu" : "Open menu",
                                      "aria-expanded": ST,
                                      onClick: () => {
                                        DT(!ST)
                                      },
                                      children: (0, vT.jsx)(hT, {
                                        name: ST ? "cross" : "menu"
                                      })
                                    }), (0, vT.jsxs)(OT.e, {
                                      to: kT,
                                      className: "DocsBrand",
                                      children: [(0, vT.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, vT.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, vT.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, vT.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        FT(!0)
                                      },
                                      children: [(0, vT.jsx)(hT, {
                                        name: "magnifying-glass"
                                      }), (0, vT.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, vT.jsxs)("kbd", {
                                        children: [pK ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, vT.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, vT.jsxs)("a", {
                                        href: WK,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, vT.jsx)(hT, {
                                          name: "discord"
                                        }), (0, vT.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, vT.jsxs)("a", {
                                        href: BK,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, vT.jsx)(hT, {
                                          name: "external-link"
                                        }), (0, vT.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !cT && (0, vT.jsxs)(OT.e, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, vT.jsx)(hT, {
                                          name: "play"
                                        }), (0, vT.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, vT.jsx)(YK, {
                                        theme: jT,
                                        onChange: tT
                                      })]
                                    })]
                                  }), (0, vT.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, vT.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, vT.jsx)(iK, {
                                        basePath: kT,
                                        activePageId: AT.id,
                                        onNavigate: JT
                                      })
                                    }), (0, vT.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: JT
                                    }), (0, vT.jsxs)(HT, {
                                      className: "DocsMain",
                                      children: [(0, vT.jsx)(FK, {
                                        page: AT,
                                        onTocChange: wT
                                      }, AT.id), (0, vT.jsx)(qK, {
                                        basePath: kT,
                                        pageId: AT.id
                                      })]
                                    }), (0, vT.jsx)("aside", {
                                      className: KT()("DocsToc", {
                                        Timeline: "changelog" === AT.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, vT.jsx)(mK, {
                                        isChangelog: "changelog" === AT.layout,
                                        toc: rT,
                                        activeAnchor: mT,
                                        onNavigate: oT
                                      })
                                    })]
                                  }), (0, vT.jsx)(LK, {}), aT && (0, vT.jsx)(XK, {
                                    basePath: kT,
                                    onClose: () => {
                                      FT(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4707: (TT, kT, cT) => {
                          cT.d(kT, {
                            e: () => lT,
                            g: () => OT,
                            j: () => hT,
                            k: () => tT,
                            l: () => yT,
                            o: () => MT,
                            p: () => KT,
                            q: () => vT,
                            s: () => jT,
                            v: () => CT
                          });
                          const lT = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function MT(TT) {
                            try {
                              return decodeURIComponent(TT.slice(1))
                            } catch {
                              return TT.slice(1)
                            }
                          }

                          function KT(TT) {
                            return TT.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const OT = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${lT.source}`, "g");

                          function yT(TT, kT) {
                            return 2 === TT.length ? kT.replace(/^ (.*) $/, "$1") : kT
                          }

                          function fT(TT) {
                            return "" === TT.trim()
                          }

                          function xT(TT) {
                            const kT = [];
                            for (const cT of TT.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) kT.length > 0 && kT[kT.length - 1].endsWith("\\") ? kT[kT.length - 1] += `|${cT}` : kT.push(cT);
                            return kT.map((TT => TT.trim().replaceAll("\\|", "|")))
                          }
                          const IT = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function AT(TT) {
                            const kT = [],
                              cT = [{
                                indent: -1,
                                items: kT
                              }];
                            let lT = null;
                            for (const MT of TT) {
                              const TT = MT.match(IT);
                              if (!TT) {
                                lT && (lT.text += ` ${MT.trim()}`);
                                continue
                              }
                              const kT = TT[1].replace(/\t/g, "  ").length;
                              for (; kT <= cT[cT.length - 1].indent;) cT.pop();
                              lT = {
                                text: TT[3].trim(),
                                children: []
                              }, cT[cT.length - 1].items.push(lT), cT.push({
                                indent: kT,
                                items: lT.children
                              })
                            }
                            return kT
                          }

                          function CT(TT) {
                            const kT = TT.replace(/\r\n/g, "\n").split("\n"),
                              cT = [];
                            let lT = 0;
                            for (; lT < kT.length;) {
                              const TT = kT[lT];
                              if (fT(TT)) {
                                lT++;
                                continue
                              }
                              const MT = TT.match(/^\s*```\s*(\w*)\s*$/);
                              if (MT) {
                                const TT = [];
                                for (lT++; lT < kT.length && !/^\s*```\s*$/.test(kT[lT]);) TT.push(kT[lT]), lT++;
                                lT++, cT.push({
                                  kind: "code",
                                  lang: MT[1] || "text",
                                  code: TT.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const OT = TT.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (OT) {
                                const TT = OT[2].trim();
                                cT.push({
                                  kind: "heading",
                                  level: OT[1].length,
                                  text: TT,
                                  anchor: KT(TT)
                                }), lT++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(TT)) {
                                cT.push({
                                  kind: "rule"
                                }), lT++;
                                continue
                              }
                              if (TT.trim().startsWith("|") && lT + 1 < kT.length && /^\s*\|[\s:|-]+\|\s*$/.test(kT[lT + 1])) {
                                const MT = xT(TT),
                                  KT = [];
                                for (lT += 2; lT < kT.length && kT[lT].trim().startsWith("|");) KT.push(xT(kT[lT])), lT++;
                                cT.push({
                                  kind: "table",
                                  header: MT,
                                  rows: KT
                                });
                                continue
                              }
                              if (TT.startsWith(">")) {
                                const TT = [];
                                for (; lT < kT.length && kT[lT].startsWith(">");) TT.push(kT[lT].replace(/^>\s?/, "")), lT++;
                                cT.push({
                                  kind: "quote",
                                  blocks: CT(TT.join("\n"))
                                });
                                continue
                              }
                              if (IT.test(TT)) {
                                const MT = [],
                                  KT = /^\s*\d+\./.test(TT);
                                for (; lT < kT.length && !fT(kT[lT]) && (IT.test(kT[lT]) || /^\s+\S/.test(kT[lT]));) MT.push(kT[lT]), lT++;
                                cT.push({
                                  kind: "list",
                                  ordered: KT,
                                  items: AT(MT)
                                });
                                continue
                              }
                              const yT = [];
                              for (; lT < kT.length && !fT(kT[lT]) && !/^\s*```/.test(kT[lT]) && !/^#{1,6}\s/.test(kT[lT]) && !kT[lT].startsWith(">") && !IT.test(kT[lT]) && (!kT[lT].trim().startsWith("|") || 0 !== yT.length);) yT.push(kT[lT].trim()), lT++;
                              0 === yT.length && (yT.push(kT[lT].trim()), lT++), cT.push({
                                kind: "paragraph",
                                text: yT.join(" ")
                              })
                            }
                            return cT
                          }

                          function jT(TT) {
                            let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const cT = CT(TT);
                            let lT = "";
                            const MT = [],
                              KT = [],
                              OT = new Map;
                            for (const xT of cT) {
                              if ("heading" === xT.kind) {
                                var yT;
                                const TT = (null !== (yT = OT.get(xT.anchor)) && void 0 !== yT ? yT : 0) + 1;
                                OT.set(xT.anchor, TT), TT > 1 && (xT.anchor = `${xT.anchor}-${TT}`)
                              }
                              if ("heading" === xT.kind && 1 === xT.level && !lT) {
                                lT = xT.text;
                                continue
                              }
                              if ("heading" === xT.kind && xT.level <= kT) {
                                KT.push({
                                  heading: xT,
                                  blocks: []
                                });
                                continue
                              }
                              const TT = KT.at(-1);
                              TT ? TT.blocks.push(xT) : MT.push(xT)
                            }
                            const fT = TT => {
                              for (;
                                "rule" === (null === (kT = TT.at(-1)) || void 0 === kT ? void 0 : kT.kind);) {
                                var kT;
                                TT.pop()
                              }
                            };
                            fT(MT);
                            for (const xT of KT) fT(xT.blocks);
                            return {
                              title: lT,
                              intro: MT,
                              sections: KT
                            }
                          }

                          function vT(TT) {
                            return [{
                              heading: null,
                              blocks: TT.intro
                            }, ...TT.sections.map((TT => ({
                              heading: TT.heading,
                              blocks: TT.blocks
                            })))]
                          }

                          function tT(TT) {
                            return TT.flatMap((TT => "code" === TT.kind ? [TT] : "quote" === TT.kind ? tT(TT.blocks) : []))
                          }

                          function hT(TT) {
                            switch (TT.kind) {
                              case "heading":
                              case "paragraph":
                                return TT.text;
                              case "code":
                                return TT.code;
                              case "table":
                                return [TT.header, ...TT.rows].map((TT => TT.join(" "))).join(" ");
                              case "list": {
                                const kT = TT => TT.map((TT => `${TT.text} ${kT(TT.children)}`)).join(" ");
                                return kT(TT.items)
                              }
                              case "quote":
                                return TT.blocks.map(hT).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4800: (TT, kT, cT) => {
                          cT.d(kT, {
                            e: () => yT
                          });
                          var lT = cT(71),
                            MT = cT(328),
                            KT = cT(1943),
                            OT = cT(1099);

                          function yT(TT) {
                            let {
                              text: kT
                            } = TT;
                            const cT = [];
                            let yT = "";
                            return (0, MT.Pb)(kT).forEach(((TT, kT) => {
                              if ("string" === typeof TT || !(0, KT.e)(TT.icon)) return void(yT += "string" === typeof TT ? TT : TT.icon);
                              const MT = Math.max(0, yT.trimEnd().search(/\S{1,12}$/));
                              cT.push((0, OT.jsxs)(lT.Fragment, {
                                children: [yT.slice(0, MT), (0, OT.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [yT.slice(MT), (0, OT.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": TT.icon,
                                    children: (0, OT.jsx)(KT.d, {
                                      itemName: TT.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, kT)), yT = ""
                            })), cT.push(yT), (0, OT.jsx)(OT.Fragment, {
                              children: cT
                            })
                          }
                        }, 4730: (TT, kT, cT) => {
                          cT.d(kT, {
                            g: () => QT,
                            e: () => NT
                          });
                          var lT = cT(71),
                            MT = cT(1461),
                            KT = cT(1921),
                            OT = cT(4739),
                            yT = cT(1099);
                          const fT = (0, lT.memo)((function(TT) {
                            let {
                              initialParameters: kT
                            } = TT;
                            const cT = (0, lT.useRef)(null),
                              MT = (0, lT.useRef)(null),
                              fT = (0, lT.useRef)(0),
                              xT = (0, lT.useRef)(null),
                              IT = kT.description,
                              AT = kT.Uk,
                              {
                                scale: CT,
                                rotation: jT
                              } = null !== kT && void 0 !== kT ? kT : {},
                              vT = (0, OT.g)();
                            return (0, lT.useEffect)((() => {
                              const TT = vT.onFrame((() => {
                                const TT = vT.getState();
                                if (!TT.isActive || !cT.current || !MT.current) return;
                                const kT = TT.state;
                                if (cT.current.value = kT.progress, kT.clickCount > fT.current) {
                                  fT.current = kT.clickCount;
                                  const TT = MT.current;
                                  TT.classList.add("pulse"), xT.current = setTimeout((() => {
                                    TT.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(xT.current), TT()
                              }
                            }), [vT]), (0, yT.jsx)(yT.Fragment, {
                              children: (0, yT.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== CT && {
                                    "--scale": CT
                                  },
                                  ...null !== jT && {
                                    "--rotation": `${jT}deg`
                                  }
                                },
                                children: [(0, yT.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: cT
                                }), (0, yT.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: MT,
                                  children: (0, yT.jsx)(KT.b, {
                                    text: [{
                                      icon: AT
                                    }]
                                  })
                                }), (0, yT.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, yT.jsx)(KT.b, {
                                    text: IT
                                  })
                                })]
                              })
                            })
                          }));
                          var xT = cT(1046),
                            IT = cT.n(xT);
                          const AT = 2 * Math.PI * 90,
                            CT = (0, lT.memo)((function(TT) {
                              let {
                                initialParameters: kT
                              } = TT;
                              const cT = (0, lT.useRef)(null),
                                MT = (0, lT.useRef)(null),
                                fT = (0, lT.useRef)(null),
                                xT = kT.label,
                                CT = kT.icon,
                                jT = kT.Wk,
                                {
                                  scale: vT,
                                  rotation: tT,
                                  nk: hT
                                } = null !== kT && void 0 !== kT ? kT : {},
                                NT = (0, OT.g)();
                              return (0, lT.useEffect)((() => {
                                const TT = NT.onFrame((() => {
                                  var TT, kT;
                                  const lT = NT.getState();
                                  if (!lT.isActive || !MT.current) return;
                                  const KT = lT.state,
                                    OT = null !== (TT = KT.timeRemaining) && void 0 !== TT ? TT : 0,
                                    yT = null !== (kT = KT.Bk) && void 0 !== kT ? kT : 1,
                                    xT = AT * (1 - OT / yT);
                                  MT.current.style.strokeDashoffset = `${xT}`, cT.current && (cT.current.style.opacity = OT > 0 ? "1" : "0"), fT.current && jT && (fT.current.textContent = `${(OT/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  TT()
                                }
                              }), [NT, jT]), (0, yT.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: cT,
                                style: {
                                  ...null !== vT && {
                                    "--scale": vT
                                  },
                                  ...null !== tT && {
                                    "--rotation": `${tT}deg`
                                  }
                                },
                                children: [(0, yT.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, yT.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, yT.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, yT.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: AT,
                                      ref: MT
                                    })]
                                  }), (0, yT.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, yT.jsx)(KT.b, {
                                      text: [{
                                        icon: CT
                                      }],
                                      className: IT()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: hT
                                      })
                                    })
                                  })]
                                }), (0, yT.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, yT.jsx)(KT.b, {
                                    text: xT,
                                    className: "QTETimedClickLabelText"
                                  }), jT && (0, yT.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: fT
                                  })]
                                })]
                              })
                            })),
                            jT = (0, lT.memo)((function(TT) {
                              let {
                                initialParameters: kT
                              } = TT;
                              const cT = (0, lT.useRef)(null),
                                MT = (0, lT.useRef)(null),
                                fT = (0, lT.useRef)(null),
                                xT = (0, lT.useRef)(!1),
                                IT = kT.description,
                                AT = null === kT || void 0 === kT ? void 0 : kT.icon,
                                CT = (0, OT.g)();
                              return (0, lT.useEffect)((() => {
                                const TT = CT.onFrame((() => {
                                  const TT = CT.getState();
                                  if (!TT.isActive) return;
                                  const kT = TT.state;
                                  if (cT.current) {
                                    const TT = 100 * (kT.catchZonePosition - kT.qk / 2);
                                    cT.current.style.left = `${TT}%`, cT.current.style.width = 100 * kT.qk + "%", kT.isCatching !== xT.current && (xT.current = kT.isCatching, kT.isCatching ? cT.current.classList.add("catching") : cT.current.classList.remove("catching"))
                                  }
                                  MT.current && (MT.current.style.left = 100 * kT.moverPosition + "%"), fT.current && (fT.current.value = kT.progress)
                                }));
                                return () => {
                                  TT()
                                }
                              }), [CT]), (0, yT.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, yT.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, yT.jsx)(KT.b, {
                                    text: IT
                                  })
                                }), (0, yT.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: fT
                                }), (0, yT.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, yT.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: cT
                                  }), (0, yT.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: MT,
                                    children: (0, yT.jsx)("span", {
                                      children: AT && (0, yT.jsx)(KT.b, {
                                        text: [{
                                          icon: AT,
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
                          var vT = cT(617);
                          const tT = (0, lT.memo)((function(TT) {
                              let {
                                initialParameters: kT
                              } = TT;
                              const cT = (0, lT.useRef)(null),
                                MT = kT.label,
                                fT = kT.Kc,
                                {
                                  icon: xT,
                                  scale: IT,
                                  rotation: AT
                                } = null !== kT && void 0 !== kT ? kT : {},
                                CT = 100 * (.5 - fT / 2),
                                jT = 100 * fT,
                                tT = (0, OT.g)();
                              return (0, lT.useEffect)((() => {
                                const TT = tT.onFrame((() => {
                                  const TT = tT.getState();
                                  if (!TT.isActive || !cT.current) return;
                                  const kT = TT.state;
                                  cT.current.style.left = 100 * kT.markerPosition + "%"
                                }));
                                return () => {
                                  TT()
                                }
                              }), [tT]), (0, yT.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, vT.R)(IT) && {
                                    "--scale": IT
                                  },
                                  ...!(0, vT.R)(AT) && {
                                    "--rotation": `${AT}deg`
                                  }
                                },
                                children: [xT && (0, yT.jsx)(KT.b, {
                                  text: [{
                                    icon: xT
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, yT.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, yT.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${CT}%`,
                                      width: `${jT}%`
                                    }
                                  }), (0, yT.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: cT
                                  })]
                                }), (0, yT.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, yT.jsx)(KT.b, {
                                    text: MT
                                  })
                                })]
                              })
                            })),
                            hT = (0, lT.memo)((function(TT) {
                              let {
                                initialParameters: kT
                              } = TT;
                              const cT = (0, lT.useRef)(null),
                                [MT, fT] = (0, lT.useState)((() => new Array(kT.yc).fill("pending"))),
                                [xT, IT] = (0, lT.useState)((() => {
                                  const TT = kT.Ic;
                                  return (0, vT.R)(TT) || TT <= 0 ? [] : new Array(TT).fill("pending")
                                })),
                                AT = kT.label,
                                {
                                  icon: CT
                                } = kT,
                                jT = (0, lT.useRef)(0),
                                tT = (0, lT.useRef)(0),
                                hT = (0, lT.useRef)([]),
                                NT = (0, OT.g)();
                              return (0, lT.useEffect)((() => {
                                const TT = NT.onFrame((() => {
                                  const TT = NT.getState();
                                  if (!TT.isActive || !cT.current) return;
                                  const kT = TT.state,
                                    lT = 30 + 60 * kT.outerCircleProgress;
                                  if (cT.current.setAttribute("r", String(lT)), !0 === kT.lastClickResult && kT.successes > jT.current) {
                                    cT.current.classList.remove("QTERhythmClickOuterCircle--miss"), cT.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const TT = setTimeout((() => {
                                      var TT;
                                      null === (TT = cT.current) || void 0 === TT || TT.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    hT.current.push(TT)
                                  } else if (!1 === kT.lastClickResult && kT.misses > tT.current) {
                                    cT.current.classList.remove("QTERhythmClickOuterCircle--hit"), cT.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const TT = setTimeout((() => {
                                      var TT;
                                      null === (TT = cT.current) || void 0 === TT || TT.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    hT.current.push(TT)
                                  }
                                  kT.successes === jT.current && kT.misses === tT.current || (jT.current = kT.successes, tT.current = kT.misses, fT((TT => {
                                    const cT = [...TT];
                                    for (let lT = 0; lT < kT.yc; lT++) cT[lT] = lT < kT.successes ? "success" : "pending";
                                    return cT
                                  })), IT((TT => {
                                    if (0 === TT.length) return TT;
                                    const cT = [...TT];
                                    for (let lT = 0; lT < cT.length; lT++) cT[lT] = lT < kT.misses ? "miss" : "pending";
                                    return cT
                                  })))
                                }));
                                return () => {
                                  TT();
                                  for (const TT of hT.current) clearTimeout(TT);
                                  hT.current = []
                                }
                              }), [NT]), (0, yT.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, yT.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: MT.map(((TT, kT) => (0, yT.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === TT ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, kT)))
                                }), (0, yT.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, yT.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, yT.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, yT.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: cT
                                    })]
                                  }), CT && (0, yT.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, yT.jsx)(KT.b, {
                                      text: [{
                                        icon: CT
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), xT.length > 0 && (0, yT.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: xT.map(((TT, kT) => (0, yT.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === TT ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, kT)))
                                }), (0, yT.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, yT.jsx)(KT.b, {
                                    text: AT
                                  })
                                })]
                              })
                            }));

                          function NT(TT) {
                            let {
                              qte: kT
                            } = TT;
                            switch (kT.type) {
                              case "progressBar":
                                return (0, yT.jsx)(fT, {
                                  initialParameters: kT.parameters
                                });
                              case "timedClick":
                                return (0, yT.jsx)(CT, {
                                  initialParameters: kT.parameters
                                });
                              case "gravityBar":
                                return (0, yT.jsx)(jT, {
                                  initialParameters: kT.parameters
                                });
                              case "precisionBar":
                                return (0, yT.jsx)(tT, {
                                  initialParameters: kT.parameters
                                });
                              case "rhythmClick":
                                return (0, yT.jsx)(hT, {
                                  initialParameters: kT.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const QT = (0, lT.memo)((function() {
                            const [TT, kT] = (0, lT.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, MT.g)("qteStateUpdated", (TT => {
                              kT(TT)
                            })), TT.isActive && TT.type ? (0, yT.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, yT.jsx)(NT, {
                                qte: TT
                              })
                            }) : null
                          }))
                        }, 4739: (TT, kT, cT) => {
                          cT.d(kT, {
                            d: () => yT,
                            g: () => fT
                          });
                          var lT = cT(71),
                            MT = cT(1303),
                            KT = cT(4745);
                          const OT = {
                              getState: () => KT.d.getCurrentState(),
                              onFrame: MT.o
                            },
                            yT = (0, lT.createContext)(OT);

                          function fT() {
                            return (0, lT.useContext)(yT)
                          }
                        }, 4806: (TT, kT, cT) => {
                          cT.d(kT, {
                            b: () => GT,
                            e: () => eT
                          });
                          var lT = cT(4813),
                            MT = cT(328);
                          const KT = 120,
                            OT = 260,
                            yT = 1.15,
                            fT = 1.2,
                            xT = 2,
                            IT = 1.08,
                            AT = .8,
                            CT = .95,
                            jT = 8,
                            vT = "[\"')\\]\u300d\u300f\uff09]*",
                            tT = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${vT}$`),
                            hT = new RegExp(`[?\uff1f]${vT}$`),
                            NT = new RegExp(`[!\uff01]${vT}$`),
                            QT = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            ST = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            DT = new RegExp(`[${ST}]`),
                            aT = new RegExp(`[${ST}]|[^${ST}]+`, "g"),
                            FT = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function rT(TT) {
                            let kT = 2166136261;
                            for (let cT = 0; cT < TT.length; cT++) kT ^= TT.charCodeAt(cT), kT = Math.imul(kT, 16777619);
                            return (kT >>> 0) / 4294967295 * 2 - 1
                          }

                          function PT(TT) {
                            var kT;
                            if (DT.test(TT)) return 1;
                            const cT = TT.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              lT = cT.replace(/[^0-9]/g, "");
                            if (lT.length > 0 && !/\p{L}/u.test(cT)) return Math.min(lT.length, 4);
                            const MT = null !== (kT = cT.match(FT)) && void 0 !== kT ? kT : [];
                            if (0 === MT.length) {
                              var KT, OT;
                              const TT = null !== (KT = null === (OT = cT.match(/\p{L}/gu)) || void 0 === OT ? void 0 : OT.length) && void 0 !== KT ? KT : 0;
                              return 0 === TT ? 0 : Math.min(Math.max(1, Math.round(TT / 2.5)), jT)
                            }
                            const yT = cT.replace(/[^\p{L}]/gu, ""),
                              fT = MT.length > 1 && "e" === MT.at(-1) && yT.endsWith("e") && !yT.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(TT.replace(/[^\p{L}]/gu, ""));
                            return Math.min(MT.length - (fT ? 1 : 0), jT)
                          }

                          function wT(TT) {
                            return TT.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function mT(TT) {
                            const kT = TT.replace(/[^\p{L}]/gu, "");
                            return kT.length >= 2 && kT === kT.toUpperCase() && kT !== kT.toLowerCase()
                          }

                          function bT(TT, kT) {
                            var cT;
                            const jT = kT && (0, lT.j)(kT),
                              vT = null !== (cT = null === jT || void 0 === jT ? void 0 : jT.syllableMs) && void 0 !== cT ? cT : lT.b,
                              ST = function(TT) {
                                const kT = [];
                                for (const lT of (0, MT.Pb)(TT))
                                  if ("string" === typeof lT)
                                    for (const TT of lT.split(/(\s+)/)) {
                                      if ("" === TT) continue;
                                      if (/^\s+$/.test(TT)) {
                                        kT.push({
                                          kind: "space",
                                          text: TT
                                        });
                                        continue
                                      }
                                      if (!DT.test(TT)) {
                                        kT.push({
                                          kind: "word",
                                          text: TT,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let lT = !0;
                                      for (const MT of null !== (cT = TT.match(aT)) && void 0 !== cT ? cT : []) {
                                        var cT;
                                        const TT = kT.at(-1);
                                        lT || "word" !== (null === TT || void 0 === TT ? void 0 : TT.kind) || DT.test(MT) || /[\p{L}\p{N}]/u.test(MT) ? (lT || kT.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), kT.push({
                                          kind: "word",
                                          text: MT,
                                          delayMs: 0
                                        }), lT = !1) : TT.text += MT
                                      }
                                    } else kT.push({
                                      kind: "icon",
                                      text: lT.icon,
                                      delayMs: 0
                                    });
                                return kT
                              }(TT),
                              FT = [];
                            let bT = [];
                            for (const lT of ST) "space" !== lT.kind && (bT.push(lT), tT.test(lT.text) && (FT.push(bT), bT = []));
                            FT.push(bT);
                            const zT = [];
                            let JT = 0;
                            for (const lT of FT) {
                              var oT, HT;
                              const TT = null !== (oT = null === (HT = lT.at(-1)) || void 0 === HT ? void 0 : HT.text) && void 0 !== oT ? oT : "",
                                kT = hT.test(TT),
                                cT = NT.test(TT),
                                MT = lT.map((TT => "word" === TT.kind ? PT(TT.text) : 1)),
                                ST = MT.findLastIndex((TT => TT > 0));
                              for (const [hT, NT] of lT.entries()) {
                                const TT = "word" === NT.kind,
                                  lT = MT[hT];
                                NT.delayMs = JT;
                                for (let MT = 0; jT && MT < lT; MT++) {
                                  const {
                                    intonation: KT
                                  } = jT;
                                  let OT = ST > 0 ? -KT.declineSemitones * (hT / ST) : 0;
                                  OT += rT(`${wT(NT.text)}|${MT}`) * KT.variationSemitones;
                                  const tT = Math.min(1, KT.variationSemitones);
                                  let QT = jT.glideSemitones,
                                    DT = 1;
                                  cT && (OT += KT.exclaimLiftSemitones, DT *= yT), kT && hT === ST && (OT += KT.questionRiseSemitones * (lT > 1 ? .5 + .5 * MT / (lT - 1) : 1), MT === lT - 1 && (QT = Math.abs(QT) + KT.questionRiseSemitones / 2)), TT && mT(NT.text) && (OT += xT * tT, DT *= fT), lT > 1 && 0 === MT && (OT += AT * tT, DT *= IT), zT.push({
                                    atMs: JT + MT * vT,
                                    semitones: OT,
                                    glideSemitones: QT,
                                    durationMs: MT < lT - 1 ? Math.min(jT.durationMs, vT * CT) : jT.durationMs,
                                    level: DT
                                  })
                                }
                                JT += lT * vT + (tT.test(NT.text) ? OT : QT.test(NT.text) ? KT : 0)
                              }
                            }
                            return {
                              pieces: ST.map((TT => "space" === TT.kind ? TT : "icon" === TT.kind ? {
                                kind: "icon",
                                icon: TT.text,
                                delayMs: TT.delayMs
                              } : {
                                kind: "word",
                                text: TT.text,
                                delayMs: TT.delayMs
                              })),
                              blips: zT
                            }
                          }
                          var zT = cT(1195),
                            JT = cT(1261),
                            oT = cT(1960);

                          function HT(TT) {
                            if ("string" === typeof TT) return TT;
                            const kT = JT.f.get().getCurrentLanguageCode();
                            return (0, zT.p)(kT, TT.translationKey, (0, zT.m)(TT.params, oT.c.shown))
                          }

                          function eT(TT) {
                            const kT = void 0 === TT.voice ? null : (0, lT.m)(TT.voice),
                              cT = kT && (0, lT.j)(kT);
                            return {
                              plan: bT(HT(TT.line), cT),
                              synth: cT
                            }
                          }

                          function GT(TT) {
                            const kT = [];
                            let cT = [];
                            for (const [MT, KT] of TT.entries()) {
                              var lT;
                              "space" === KT.kind && (" " !== KT.text || "icon" !== (null === (lT = TT[MT + 1]) || void 0 === lT ? void 0 : lT.kind)) ? (cT.length > 0 && kT.push(cT), kT.push([KT]), cT = []) : cT.push(KT)
                            }
                            return cT.length > 0 && kT.push(cT), kT
                          }
                        }, 4815: (TT, kT, cT) => {
                          cT.d(kT, {
                            e: () => IT,
                            g: () => AT
                          });
                          var lT = cT(4820),
                            MT = cT(31);
                          const KT = .25,
                            OT = .85,
                            yT = .02,
                            fT = .01;

                          function xT(TT, kT, cT, lT, MT, KT, yT) {
                            const {
                              waveform: fT,
                              pitchHz: xT,
                              attackMs: IT,
                              releaseMs: AT,
                              lowpassHz: CT
                            } = cT, jT = MT + lT.durationMs / 1e3, vT = xT * 2 ** (lT.semitones / 12), tT = TT.createOscillator();
                            tT.type = fT, tT.frequency.setValueAtTime(vT, MT), tT.frequency.exponentialRampToValueAtTime(vT * 2 ** (lT.glideSemitones / 12), jT);
                            const hT = MT + Math.min(IT, lT.durationMs) / 1e3,
                              NT = TT.createGain();
                            NT.gain.setValueAtTime(0, MT), NT.gain.linearRampToValueAtTime(KT, hT), NT.gain.linearRampToValueAtTime(KT * OT, Math.max(hT, jT - AT / 1e3)), NT.gain.linearRampToValueAtTime(0, jT);
                            const QT = [tT];
                            if (null !== CT) {
                              const kT = TT.createBiquadFilter();
                              kT.type = "lowpass", kT.frequency.value = CT, QT.push(kT)
                            }
                            QT.push(NT, kT);
                            for (let OT = 1; OT < QT.length; OT++) QT[OT - 1].connect(QT[OT]);
                            return tT.onended = () => {
                              for (const TT of QT.slice(0, -1)) TT.disconnect();
                              yT()
                            }, tT.start(MT), tT.stop(jT), tT
                          }

                          function IT(TT, kT, cT, lT, MT, OT) {
                            if (0 === lT.length) return OT(), () => {};
                            const IT = KT * cT.volume * MT,
                              AT = TT.createGain();
                            AT.connect(kT);
                            const CT = TT.currentTime + yT,
                              jT = new Set;
                            for (const KT of lT) {
                              const kT = xT(TT, AT, cT, KT, CT + KT.atMs / 1e3, IT * KT.level, (() => {
                                jT.delete(kT), 0 === jT.size && (AT.disconnect(), OT())
                              }));
                              jT.add(kT)
                            }
                            return () => {
                              const kT = TT.currentTime;
                              AT.gain.setTargetAtTime(0, kT, fT);
                              for (const TT of jT) try {
                                TT.stop(kT + 5 * fT)
                              } catch {}
                            }
                          }

                          function AT(TT, kT) {
                            var cT;
                            const KT = lT.Howler.ctx,
                              OT = lT.Howler.masterGain;
                            if (!KT || !OT || !MT.e.get("soundOnFromAd")) return () => {};
                            const yT = lT.Howler;
                            return null === (cT = yT._autoResume) || void 0 === cT || cT.call(yT), IT(KT, OT, TT, kT, MT.e.get("soundVolume"), (() => {
                              var TT;
                              null === (TT = yT._autoSuspend) || void 0 === TT || TT.call(yT)
                            }))
                          }
                        }, 4820: (TT, kT, cT) => {
                          cT.r(kT), cT.d(kT, {
                            Howl: () => MT.Howl,
                            Howler: () => MT.Howler,
                            musicOutput: () => vT,
                            readyAudioContext: () => tT
                          });
                          var lT, MT = cT(4825),
                            KT = cT(4641);
                          const OT = MT.Howler;

                          function yT() {
                            var TT, kT;
                            if (OT.ctx || !OT.usingWebAudio || "undefined" === typeof AudioContext || !(0, KT.f)()) return;
                            const cT = navigator.audioSession;
                            let lT;
                            "auto" === (null === cT || void 0 === cT ? void 0 : cT.type) && (cT.type = "ambient");
                            try {
                              lT = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const MT = lT.createGain();
                            MT.gain.setValueAtTime(OT._muted ? 0 : null !== (TT = OT._volume) && void 0 !== TT ? TT : 1, lT.currentTime), MT.connect(lT.destination), OT.ctx = lT, OT.masterGain = MT, null === (kT = OT._setup) || void 0 === kT || kT.call(OT)
                          }
                          OT._mobileUnloaded = !0;
                          const fT = OT.volume.bind(MT.Howler);
                          OT.volume = function() {
                            return yT(), fT(...arguments)
                          };
                          const xT = OT.mute.bind(MT.Howler);
                          OT.mute = TT => (yT(), xT(TT));
                          const IT = MT.Howl.prototype,
                            AT = IT.init;
                          IT.init = function(TT) {
                            return yT(), AT.call(this, TT)
                          };
                          let CT = 0;
                          const jT = null === (lT = OT._autoSuspend) || void 0 === lT ? void 0 : lT.bind(MT.Howler);

                          function vT() {
                            tT();
                            const {
                              ctx: TT,
                              masterGain: kT
                            } = OT;
                            return TT && kT ? {
                              ctx: TT,
                              destination: kT,
                              holdAwake: TT => {
                                var kT, cT;
                                (CT += TT ? 1 : -1, TT) ? null === (kT = OT._autoResume) || void 0 === kT || kT.call(OT): null === (cT = OT._autoSuspend) || void 0 === cT || cT.call(OT)
                              },
                              wake: () => {
                                var kT;
                                "running" !== TT.state && (null === (kT = OT._autoResume) || void 0 === kT || kT.call(OT), TT.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function tT() {
                            var TT;
                            (OT.volume(), OT.ctx && OT.autoUnlock) && (null === (TT = OT._unlockAudio) || void 0 === TT || TT.call(OT))
                          }
                          jT && (OT._autoSuspend = () => CT > 0 ? MT.Howler : jT())
                        }, 4831: (TT, kT, cT) => {
                          function lT(TT) {
                            return {
                              notAfter: TT
                            }
                          }
                          cT.d(kT, {
                            d: () => fT,
                            h: () => xT,
                            k: () => yT,
                            m: () => lT,
                            p: () => MT,
                            q: () => KT,
                            r: () => OT,
                            v: () => IT,
                            x: () => AT
                          });
                          const MT = lT("\\w$."),
                            KT = lT("\\w.,");

                          function OT(TT) {
                            return kT => fT(kT, TT)
                          }

                          function yT(TT) {
                            return kT => !TT.test(kT.input.slice(0, kT.index))
                          }

                          function fT(TT, kT) {
                            return TT.index > 0 && new RegExp(`[${kT}]`).test(TT.input[TT.index - 1])
                          }

                          function xT(TT, kT, cT) {
                            return function(TT) {
                              return void 0 !== TT && "function" !== typeof TT
                            }(cT) ? function(TT, kT, cT) {
                              const lT = kT.flags.replace(/[gy]/g, ""),
                                MT = new RegExp(`[^${cT}](?:${kT.source})`, `${lT}g`),
                                KT = [],
                                OT = cT => {
                                  const lT = cT.index + cT[0].length;
                                  return ("" === cT[0] ? CT(TT, kT, lT) : lT) - 1
                                },
                                yT = new RegExp(`(?:${kT.source})`, `${lT}y`).exec(TT);
                              if (yT) {
                                if (KT.push(yT), !kT.global) return KT;
                                MT.lastIndex = OT(yT)
                              }
                              for (let fT = MT.exec(TT); fT; fT = MT.exec(TT)) {
                                const cT = CT(TT, kT, fT.index) - fT.index;
                                if (fT[0] = fT[0].slice(cT), fT.index += cT, KT.push(fT), !kT.global) break;
                                MT.lastIndex = OT(fT)
                              }
                              return KT
                            }(TT, kT, cT.notAfter) : function(TT, kT, cT) {
                              const lT = new RegExp(kT.source, `${kT.flags.replace(/[gy]/g,"")}g`),
                                MT = [];
                              for (let KT = lT.exec(TT); KT; KT = lT.exec(TT))
                                if (!cT || cT(KT)) {
                                  if (MT.push(KT), !kT.global) break;
                                  "" === KT[0] && (lT.lastIndex = CT(TT, kT, lT.lastIndex))
                                } else lT.lastIndex = CT(TT, kT, KT.index);
                              return MT
                            }(TT, kT, cT)
                          }

                          function IT(TT, kT, cT, lT) {
                            let MT = "",
                              KT = 0;
                            for (const OT of xT(TT, kT, cT)) MT += TT.slice(KT, OT.index) + lT(OT), KT = OT.index + OT[0].length;
                            return MT + TT.slice(KT)
                          }

                          function AT(TT, kT, cT) {
                            const lT = [];
                            let MT = 0;
                            for (const KT of xT(TT, kT, cT)) lT.push(TT.slice(MT, KT.index)), MT = KT.index + KT[0].length;
                            return [...lT, TT.slice(MT)]
                          }

                          function CT(TT, kT, cT) {
                            var lT;
                            return cT + (kT.unicode && (null !== (lT = TT.codePointAt(cT)) && void 0 !== lT ? lT : 0) > 65535 ? 2 : 1)
                          }
                        }, 4789: (TT, kT, cT) => {
                          cT.d(kT, {
                            b: () => MT,
                            c: () => fT,
                            e: () => KT,
                            g: () => OT,
                            i: () => yT,
                            m: () => hT,
                            p: () => IT,
                            t: () => AT,
                            u: () => tT,
                            x: () => jT
                          });
                          var lT = cT(1602);
                          const MT = 24e3,
                            KT = "/docs/llms.txt",
                            OT = `${lT.b}${KT}`,
                            yT = "/llms.txt",
                            fT = "/docs/llms-full.txt";

                          function xT(TT) {
                            return TT || "index"
                          }

                          function IT(TT) {
                            return `/docs/${xT(TT)}.md`
                          }

                          function AT(TT, kT) {
                            return `/docs/${xT(TT)}/${kT+1}.md`
                          }
                          const CT = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function jT(TT) {
                            const kT = CT.exec(TT);
                            return null === kT ? null : {
                              name: kT[1],
                              part: void 0 === kT[2] ? null : Number(kT[2])
                            }
                          }
                          const vT = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function tT(TT) {
                            const kT = vT.exec(TT);
                            if (null === kT) return null;
                            const [, cT = "", lT] = kT;
                            return void 0 === lT ? IT(cT) : AT(cT, Number(lT) - 1)
                          }

                          function hT(TT) {
                            return `/docsHtml/${xT(TT)}.html`
                          }
                        }, 4813: (TT, kT, cT) => {
                          cT.d(kT, {
                            b: () => MT,
                            f: () => lT,
                            h: () => KT,
                            j: () => fT,
                            m: () => OT
                          });
                          const lT = ["sine", "triangle", "square", "sawtooth"],
                            MT = 55,
                            KT = {
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

                          function OT(TT) {
                            return "string" !== typeof TT ? TT : Object.hasOwn(KT, TT) ? KT[TT] : null
                          }

                          function yT(TT, kT, cT) {
                            return Math.min(cT, Math.max(kT, TT))
                          }

                          function fT(TT) {
                            const kT = yT(TT.durationMs, 10, 500),
                              cT = yT(TT.attackMs, 0, kT),
                              {
                                intonation: MT
                              } = TT;
                            return {
                              waveform: lT.includes(TT.waveform) ? TT.waveform : "sine",
                              pitchHz: yT(TT.pitchHz, 20, 4e3),
                              glideSemitones: yT(TT.glideSemitones, -24, 24),
                              durationMs: kT,
                              attackMs: cT,
                              releaseMs: yT(TT.releaseMs, 0, kT - cT),
                              lowpassHz: null === TT.lowpassHz ? null : yT(TT.lowpassHz, 20, 2e4),
                              volume: yT(TT.volume, 0, 2),
                              intonation: {
                                variationSemitones: yT(MT.variationSemitones, 0, 6),
                                declineSemitones: yT(MT.declineSemitones, 0, 12),
                                questionRiseSemitones: yT(MT.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: yT(MT.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: yT(TT.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const TT in modules) Object.freeze(modules[TT]);