export const id = 78;
export const ids = [78, 93];
export const modules = {
    4760: (CC, zC, ZC) => {
      ZC.d(zC, {
        c: () => pC,
        d: () => PC
      });
      var QC = ZC(1002),
        wC = ZC.n(QC),
        bC = ZC(48),
        nC = ZC(1143),
        fC = ZC(4769),
        oC = ZC(1811),
        qC = ZC(2369),
        FC = ZC(4775),
        WC = ZC(1056);
      const NC = new WeakMap;
      let MC = 0;

      function gC(CC) {
        let zC = NC.get(CC);
        return void 0 === zC && (zC = MC++, NC.set(CC, zC)), zC
      }

      function SC(CC) {
        let {
          piece: zC
        } = CC;
        return "space" === zC.kind ? (0, WC.jsx)(WC.Fragment, {
          children: zC.text
        }) : (0, WC.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${zC.delayMs}ms`
          },
          children: (0, WC.jsx)(fC.e, {
            text: "icon" === zC.kind ? `[[${zC.icon}]]` : zC.text
          })
        })
      }

      function pC(CC) {
        let {
          display: zC
        } = CC;
        const {
          selectedLanguage: ZC
        } = (0, nC.y)(), QC = (0, bC.useMemo)((() => (0, FC.c)((0, FC.f)(zC).plan.pieces)), [zC, ZC.code]);
        return (0, WC.jsxs)("div", {
          className: wC()("Dialogue", {
            DialogueAnimateIn: !1 !== zC.animateIn
          }),
          children: [zC.speakerName && (0, WC.jsx)(oC.e, {
            text: zC.speakerName,
            className: "DialogueSpeaker"
          }), (0, WC.jsx)("p", {
            className: "DialogueLine",
            children: QC.map(((CC, zC) => 1 === CC.length && "space" === CC[0].kind ? CC[0].text : (0, WC.jsx)("span", {
              className: "DialogueGlue",
              children: CC.map(((CC, zC) => (0, WC.jsx)(SC, {
                piece: CC
              }, zC)))
            }, zC)))
          })]
        })
      }
      const PC = (0, bC.memo)((function() {
        const CC = (0, qC.h)("dialogue");
        return (0, WC.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: CC && (0, WC.jsx)(pC, {
            display: CC
          }, gC(CC))
        })
      }))
    },
    4648: (CC, zC, ZC) => {
        ZC.r(zC), ZC.d(zC, {
          default: () => Vb
        });
        var QC = ZC(48),
          wC = ZC(1002),
          bC = ZC.n(wC),
          nC = ZC(1455),
          fC = ZC(1463),
          oC = ZC(20),
          qC = ZC(60),
          FC = ZC(4657),
          WC = ZC(4668),
          NC = ZC(4672),
          MC = ZC(4296),
          gC = ZC(1056);
        const SC = "/textures/docs/icons";

        function pC(CC) {
          let {
            name: zC,
            isTinted: ZC,
            className: QC,
            style: wC
          } = CC;
          const nC = `${SC}/${zC}.png`;
          return ZC ? (0, gC.jsxs)("span", {
            className: bC()("DocsPixelIcon", "Tinted", QC),
            "aria-hidden": "true",
            style: wC,
            children: [(0, gC.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${nC}")`,
                WebkitMaskImage: `url("${nC}")`
              }
            }), (0, gC.jsx)("img", {
              src: nC,
              alt: ""
            })]
          }) : (0, gC.jsx)("img", {
            className: bC()("DocsPixelIcon", QC),
            src: nC,
            alt: "",
            "aria-hidden": "true",
            style: wC
          })
        }
        const PC = 1500;

        function GC() {
          const [CC, zC] = (0, QC.useState)(null);
          (0, QC.useEffect)((() => {
            if (null === CC) return;
            const ZC = setTimeout((() => {
              zC(null)
            }), PC);
            return () => {
              clearTimeout(ZC)
            }
          }), [CC]);
          return [CC, CC => {
            (0, MC.e)(CC).then((() => {
              zC({
                text: CC,
                failed: !1
              })
            }), (ZC => {
              console.error("Could not copy to the clipboard", ZC), zC({
                text: CC,
                failed: !0
              })
            }))
          }]
        }

        function RC(CC) {
          let {
            text: zC,
            label: ZC,
            className: QC
          } = CC;
          const [wC, nC] = GC(), fC = !1 === (null === wC || void 0 === wC ? void 0 : wC.failed);
          return (0, gC.jsxs)("button", {
            type: "button",
            className: bC()("DocsCopyButton", QC, {
              Copied: fC
            }),
            title: `Copy ${zC.length>40?"to clipboard":zC}`,
            "aria-label": ZC ? void 0 : `Copy ${zC}`,
            onClick: CC => {
              CC.stopPropagation(), nC(zC)
            },
            children: [(0, gC.jsx)(pC, {
              name: fC ? "check" : "copy"
            }), ZC && (0, gC.jsx)("span", {
              children: fC ? "Copied" : null !== wC && void 0 !== wC && wC.failed ? "Copy failed" : ZC
            })]
          })
        }
        FC.c.registerLanguage("javascript", WC.b), FC.c.registerLanguage("typescript", NC.b);
        const AC = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          xC = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          JC = 24;

        function IC(CC) {
          let {
            code: zC,
            lang: ZC,
            compact: wC = !1
          } = CC;
          const nC = (0, QC.useMemo)((() => function(CC, zC) {
              const ZC = AC[zC];
              return ZC ? FC.c.highlight(CC, {
                language: ZC
              }).value : CC.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(zC, ZC)), [zC, ZC]),
            fC = zC.split("\n").length,
            oC = !wC && fC > JC + 6,
            [qC, WC] = (0, QC.useState)(!1),
            NC = AC[ZC];
          return (0, gC.jsxs)("div", {
            className: bC()("DocsCodeBlock", {
              Compact: wC,
              Collapsed: oC && !qC
            }),
            children: [!wC && (0, gC.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, gC.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: NC ? xC[NC] : "Text"
              }), (0, gC.jsx)(RC, {
                text: zC,
                label: "Copy"
              })]
            }), (0, gC.jsx)("pre", {
              children: (0, gC.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: nC
                }
              })
            }), oC && (0, gC.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": qC,
              onClick: () => {
                WC(!qC)
              },
              children: [(0, gC.jsx)(pC, {
                name: qC ? "chevron-up" : "chevron-down"
              }), qC ? "Show less" : `Show all ${fC} lines`]
            })]
          })
        }
        var iC = ZC(4674);
        var vC = ZC(4679);
        const eC = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function hC(CC) {
          const zC = new Map;
          let ZC, QC = [],
            wC = !1;
          const bC = () => {
            ZC && zC.set(ZC.name, ZC.lines.join("\n").trimEnd())
          };
          for (const nC of CC.split("\n")) {
            const CC = nC.match(eC);
            wC || nC.startsWith("/*") ? (wC || (bC(), ZC = void 0), QC.push(nC), wC = !nC.includes("*/")) : CC ? (bC(), ZC = {
              name: CC[1],
              lines: [...QC, nC]
            }, QC = []) : ZC && (nC.startsWith(" ") || nC.startsWith("\t") || /^[}\])|]/.test(nC)) ? ZC.lines.push(nC) : ZC && "" !== nC.trim() && (bC(), ZC = void 0)
          }
          return bC(), zC
        }

        function KC(CC) {
          return "methods" === CC || "callbacks" === CC || "settings" === CC
        }
        const YC = {
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
              setterSnippet: (CC, zC) => `api.setClientOption(playerId, "${CC}", ${zC})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (CC, zC) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${CC}", ${zC})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (CC, zC) => `api.setMobSetting(mobId, "${CC}", ${zC})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (CC, zC) => `api.setVehicleSetting(vehicleId, "${CC}", ${zC})`
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
          dC = {
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

        function mC(CC) {
          return CC.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function HC(CC) {
          let zC = !1;
          return CC.split("\n").map((CC => (CC.startsWith("```") && (zC = !zC), !zC && /^#{3,} /.test(CC) ? CC.slice(1) : CC))).join("\n")
        }

        function EC(CC) {
          return "readme" === CC ? "getting-started" : mC(CC)
        }
        const lC = "## Glossary of Referenced Types";
        const XC = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...vC.c.flatMap((CC => {
            const zC = {
              id: CC.id,
              slug: EC(CC.id),
              title: CC.title,
              markdown: CC.content,
              ...YC[CC.id]
            };
            if ("readme" === CC.id) return function(CC) {
              const zC = CC.markdown.indexOf(lC),
                ZC = CC.markdown.indexOf("\n```", zC),
                QC = CC.markdown.indexOf("\n```", ZC + 1);
              if (-1 === zC || -1 === ZC || -1 === QC) throw new Error(`Getting started has no "${lC}" section with a code block`);
              const wC = CC.markdown.slice(zC + 31, ZC).trim(),
                bC = [...hC(CC.markdown.slice(CC.markdown.indexOf("\n", ZC + 1) + 1, QC))].map((CC => {
                  let [zC, ZC] = CC;
                  return `## ${zC}\n\n\`\`\`ts\n${ZC}\n\`\`\`\n`
                })),
                nC = CC.markdown.slice(CC.markdown.indexOf("\n", QC + 1) + 1);
              return [{
                ...CC,
                markdown: `${CC.markdown.slice(0,zC)}${nC}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${wC}\n\n${bC.join("\n")}`
              }]
            }(zC);
            if ("howTo" === CC.id) {
              const {
                parent: CC,
                guides: ZC
              } = function(CC) {
                const [zC, ...ZC] = CC.markdown.split(/^(?=## )/m), QC = [zC], wC = [];
                for (const nC of ZC) {
                  var bC;
                  const zC = nC.indexOf("\n"),
                    ZC = nC.slice(3, zC).trim(),
                    fC = nC.slice(zC + 1);
                  if (!fC.includes("```")) {
                    QC.push(nC);
                    continue
                  }
                  const oC = null !== (bC = dC[ZC]) && void 0 !== bC ? bC : {
                    icon: "lightbulb",
                    summary: `How to use ${ZC.toLowerCase()} in World Code.`
                  };
                  wC.push({
                    id: `${CC.id}${ZC.split(/[^A-Za-z0-9]+/).map((CC=>CC.charAt(0).toUpperCase()+CC.slice(1))).join("")}`,
                    slug: `${CC.slug}-${mC(ZC)}`,
                    title: ZC,
                    layout: "article",
                    sourceAnchor: (0, iC.p)(ZC),
                    markdown: `# ${ZC}\n\n${HC(fC)}`,
                    ...oC
                  })
                }
                return {
                  parent: {
                    ...CC,
                    markdown: QC.join(""),
                    childPageIds: wC.map((CC => CC.id))
                  },
                  guides: wC
                }
              }(zC);
              return [CC, ...ZC]
            }
            return [zC]
          }))],
          cC = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...XC.filter((CC => void 0 !== CC.sourceAnchor)).map((CC => CC.id))]
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

        function uC(CC) {
          return XC.find((zC => zC.id === CC))
        }
        const rC = new Map;

        function sC(CC) {
          let zC = rC.get(CC.id);
          return zC || (zC = (0, iC.s)(CC.markdown, "changelog" === CC.layout ? 3 : 2), rC.set(CC.id, zC)), zC
        }

        function TC(CC, zC) {
          return sC(CC).sections.some((CC => CC.heading.anchor === zC || CC.blocks.some((CC => "heading" === CC.kind && CC.anchor === zC))))
        }

        function aC(CC) {
          const [zC, ...ZC] = CC.replace(/^#/, "").split("-"), QC = XC.find((CC => CC.id === zC));
          if (!QC) return null;
          const wC = ZC.length > 0 ? (0, iC.p)(ZC.join("-")) : "";
          for (const nC of null !== (bC = QC.childPageIds) && void 0 !== bC ? bC : []) {
            var bC;
            const CC = uC(nC);
            if (CC.sourceAnchor === wC) return {
              page: CC,
              anchor: ""
            };
            if (TC(CC, wC)) return {
              page: CC,
              anchor: wC
            }
          }
          return {
            page: QC,
            anchor: wC
          }
        }
        const tC = {
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

        function DC(CC, zC) {
          let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const QC = zC.slug ? `${CC}/${zC.slug}` : CC;
          return ZC ? `${QC}#${ZC}` : QC
        }
        var jC = ZC(4696);
        const yC = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          LC = new Set(["GameApi", "Console", "_TypeOf"]),
          UC = 4;

        function BC(CC) {
          let zC = CC.length;
          for (; zC > 0 && "" === CC[zC - 1].trim();) zC--;
          return CC.slice(0, zC)
        }

        function OC(CC) {
          var zC;
          const ZC = BC(CC);
          if (null === (zC = ZC.at(-1)) || void 0 === zC || !zC.trimEnd().endsWith("*/")) return {
            lines: ZC,
            doc: ""
          };
          const QC = ZC.findLastIndex((CC => CC.startsWith("/**")));
          return -1 === QC ? {
            lines: ZC,
            doc: ""
          } : {
            lines: BC(ZC.slice(0, QC)),
            doc: ZC.slice(QC).join("\n")
          }
        }

        function kC(CC) {
          var zC;
          const ZC = CC.split("\n"),
            QC = ZC.flatMap(((CC, zC) => yC.test(CC) ? [zC] : []));
          let wC = OC(ZC.slice(0, null !== (zC = QC[0]) && void 0 !== zC ? zC : ZC.length)).doc;
          return QC.map(((CC, zC) => {
            var bC;
            const nC = OC(ZC.slice(CC, null !== (bC = QC[zC + 1]) && void 0 !== bC ? bC : ZC.length)),
              fC = {
                name: ZC[CC].match(yC)[1],
                doc: wC,
                lines: nC.lines
              };
            return wC = nC.doc, fC
          }))
        }

        function VC(CC) {
          var zC;
          const ZC = CC.match(/^readonly \[([\s\S]*)\]$/);
          return ZC ? null !== (zC = ZC[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== zC ? zC : [] : null
        }

        function Cz(CC) {
          if (!CC.startsWith("{") || !CC.endsWith("}")) return null;
          const zC = {
              keys: [],
              values: []
            },
            ZC = CC => {
              const ZC = CC.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              ZC && (zC.keys.push(ZC[1].startsWith('"') ? ZC[1] : `"${ZC[1]}"`), zC.values.push(ZC[2].trim()))
            };
          let QC = 0,
            wC = "";
          for (const bC of CC.slice(1, -1)) "{[(".includes(bC) ? QC++ : "}])".includes(bC) && QC--, ";" === bC && 0 === QC ? (ZC(wC), wC = "") : wC += bC;
          return ZC(wC), zC
        }

        function zz(CC) {
          return CC.length > UC ? `\n\t| ${CC.join("\n\t| ")}` : CC.join(" | ")
        }

        function Zz(CC, zC) {
          const ZC = function(CC, zC) {
            return CC.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((CC, ZC) => {
              var QC;
              const wC = null === (QC = zC.get(ZC)) || void 0 === QC ? void 0 : QC.object;
              return wC ? zz(wC.values) : CC
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((CC, ZC) => {
              var QC, wC;
              const bC = null === (QC = zC.get(ZC)) || void 0 === QC || null === (wC = QC.object) || void 0 === wC ? void 0 : wC.values.map(VC);
              return null !== bC && void 0 !== bC && bC.every((CC => null !== CC)) ? zz([...new Set(bC.flat())]) : CC
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((CC, ZC) => {
              var QC;
              const wC = null === (QC = zC.get(ZC)) || void 0 === QC ? void 0 : QC.members;
              return wC ? zz(wC) : CC
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((CC, ZC) => {
              var QC;
              const wC = null === (QC = zC.get(ZC)) || void 0 === QC ? void 0 : QC.object;
              return wC ? zz(wC.keys) : CC
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((CC, ZC) => {
              var QC, wC;
              return null !== (QC = null === (wC = zC.get(ZC)) || void 0 === wC ? void 0 : wC.text) && void 0 !== QC ? QC : CC
            }))
          }(CC.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), zC);
          return [CC.doc, ZC].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function Qz(CC) {
          const zC = kC(CC),
            ZC = function(CC) {
              const zC = new Map,
                ZC = CC.find((CC => "_TypeOf" === CC.name));
              let QC = null;
              const wC = () => {
                if (QC) {
                  const CC = QC.lines.join("\n");
                  zC.set(QC.name, {
                    text: CC,
                    members: VC(CC),
                    object: Cz(CC)
                  })
                }
              };
              for (const bC of ZC.lines.slice(1, -1)) {
                const CC = bC.match(/^\t([\w$]+): (.+)$/);
                CC ? (wC(), QC = {
                  name: CC[1],
                  lines: [CC[2]]
                }) : QC && QC.lines.push(bC.replace(/^\t/, ""))
              }
              return wC(), zC
            }(zC),
            QC = new Map;
          for (const wC of zC) LC.has(wC.name) || QC.has(wC.name) || QC.set(wC.name, Zz(wC, ZC));
          return QC
        }
        let wz, bz, nz;

        function fz() {
          return bz ??= function(CC) {
            const zC = kC(CC).find((CC => "GameApi" === CC.name)),
              ZC = new Map,
              QC = zC.lines;
            for (let bC = 0; bC < QC.length; bC++) {
              var wC;
              if (!QC[bC].trimStart().startsWith("/**")) continue;
              const CC = bC;
              for (; bC < QC.length && !QC[bC].includes("*/");) bC++;
              const zC = null === (wC = QC[bC + 1]) || void 0 === wC ? void 0 : wC.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!zC) continue;
              let nC = null;
              const fC = [];
              let oC = "description",
                qC = !1;
              for (const ZC of QC.slice(CC, bC + 1).join("\n").split("\n").map((CC => CC.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const CC = ZC.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                CC ? (nC = CC[1].trim(), oC = "deprecation") : ZC.startsWith("@") ? (oC = "otherTag", qC = !0) : "" === ZC.trim() ? qC || (oC = "description", fC.push(ZC)) : "deprecation" !== oC || /^[A-Z]/.test(ZC.trim()) ? "otherTag" !== oC && (oC = "description", fC.push(ZC)) : nC = `${nC} ${ZC.trim()}`.trim()
              }
              ZC.set(zC[1], {
                deprecation: nC,
                description: fC.join("\n").trim()
              })
            }
            return ZC
          }(jC.default), bz
        }

        function oz() {
          if (!nz) {
            nz = new Map;
            for (const CC of XC) {
              const zC = (0, iC.r)(sC(CC)).flatMap((CC => CC.blocks));
              for (const CC of (0, iC.h)(zC))
                if ("ts" === CC.lang || "typescript" === CC.lang)
                  for (const [zC, ZC] of hC(CC.code)) nz.set(zC, ZC)
            }
            for (const [CC, zC] of(wz ??= Qz(jC.default), wz)) nz.has(CC) || nz.set(CC, zC)
          }
          return nz
        }
        const qz = {
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
        let Fz;

        function Wz() {
          if (!Fz) {
            Fz = new Map;
            for (const CC of XC)
              if (KC(CC.layout))
                for (const zC of sC(CC).sections) Fz.has(zC.heading.text) || Fz.set(zC.heading.text, {
                  pageId: CC.id,
                  anchor: zC.heading.anchor
                })
          }
          return Fz
        }

        function Nz(CC) {
          const zC = CC.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return zC ? Wz().get(zC[1]) : void 0
        }
        const Mz = (0, QC.createContext)("/docs"),
          gz = (0, QC.createContext)(null),
          Sz = (0, QC.createContext)(!1),
          pz = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function Pz(CC) {
          const zC = CC.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return zC ? zC[1] : null
        }

        function Gz(CC) {
          let {
            colour: zC
          } = CC;
          return (0, gC.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: zC
            },
            "aria-hidden": "true"
          })
        }

        function Rz(CC) {
          const zC = [];
          let ZC = 0;
          for (const QC of CC.matchAll(pz)) zC.push(CC.slice(ZC, QC.index), (0, gC.jsx)(Gz, {
            colour: QC[0]
          }), QC[0]), ZC = QC.index + QC[0].length;
          return zC.push(CC.slice(ZC)), zC
        }

        function Az(CC) {
          let {
            href: zC,
            children: ZC
          } = CC;
          const wC = (0, QC.useContext)(Mz);
          if (zC.startsWith("#")) {
            const CC = aC(zC);
            if (CC) return (0, gC.jsx)(nC.d, {
              to: DC(wC, CC.page, CC.anchor),
              children: (0, gC.jsx)(Sz.Provider, {
                value: !0,
                children: ZC
              })
            })
          }
          return (0, gC.jsx)("a", {
            href: zC,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, gC.jsx)(Sz.Provider, {
              value: !0,
              children: ZC
            })
          })
        }

        function xz(CC) {
          let {
            code: zC
          } = CC;
          const ZC = (0, QC.useContext)(Mz);
          if ((0, QC.useContext)(Sz)) return (0, gC.jsx)("code", {
            className: "DocsInlineCode",
            children: zC
          });
          if (oz().has(zC)) return (0, gC.jsx)(vz, {
            type: zC
          });
          const wC = Nz(zC);
          if (wC) return (0, gC.jsx)(nC.d, {
            className: "DocsInlineCode DocsSymbolLink",
            to: DC(ZC, uC(wC.pageId), wC.anchor),
            children: zC
          });
          const bC = Pz(zC);
          return (0, gC.jsxs)("code", {
            className: "DocsInlineCode",
            children: [bC && (0, gC.jsx)(Gz, {
              colour: bC
            }), zC]
          })
        }

        function Jz(CC) {
          let {
            text: zC
          } = CC;
          const ZC = [];
          let wC = 0;
          for (const QC of zC.matchAll(iC.e)) {
            QC.index > wC && ZC.push(...Rz(zC.slice(wC, QC.index)));
            const [, CC, bC, nC, fC, oC] = QC;
            CC ? ZC.push((0, gC.jsx)(xz, {
              code: (0, iC.j)(CC, bC)
            })) : nC ? ZC.push((0, gC.jsx)("strong", {
              children: (0, gC.jsx)(Jz, {
                text: nC
              })
            })) : ZC.push((0, gC.jsx)(Az, {
              href: oC,
              children: (0, gC.jsx)(Jz, {
                text: fC
              })
            })), wC = QC.index + QC[0].length
          }
          return wC < zC.length && ZC.push(...Rz(zC.slice(wC))), (0, gC.jsx)(gC.Fragment, {
            children: ZC.map(((CC, zC) => (0, gC.jsx)(QC.Fragment, {
              children: CC
            }, zC)))
          })
        }
        const Iz = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          iz = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function vz(CC) {
          let {
            type: zC
          } = CC;
          const ZC = oz(),
            wC = [];
          for (const QC of zC.trim().matchAll(Iz)) {
            const [CC, zC, bC, nC, fC] = QC;
            zC ? wC.push((0, gC.jsx)("span", {
              className: "DocsTypeString",
              children: CC
            })) : bC && ZC.has(bC) ? wC.push((0, gC.jsx)(dz, {
              name: bC,
              definition: ZC.get(bC)
            })) : bC ? wC.push((0, gC.jsx)("span", {
              className: iz.has(bC) ? "DocsTypeKeyword" : "DocsTypeName",
              children: CC
            })) : nC ? wC.push((0, gC.jsx)("span", {
              className: "DocsTypeNumber",
              children: CC
            })) : fC ? wC.push(" ") : wC.push((0, gC.jsx)("span", {
              className: "DocsTypePunctuation",
              children: CC
            }))
          }
          return (0, gC.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: wC.map(((CC, zC) => (0, gC.jsx)(QC.Fragment, {
              children: CC
            }, zC)))
          })
        }
        const ez = 480,
          hz = 6,
          Kz = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Yz = 0;

        function dz(CC) {
          let {
            name: zC,
            definition: ZC
          } = CC;
          const wC = (0, QC.useContext)(Mz),
            bC = qz[zC],
            fC = (0, QC.useRef)(null),
            oC = (0, QC.useRef)(null),
            FC = (0, QC.useRef)(null),
            [WC, NC] = (0, QC.useState)(!1),
            [MC, SC] = (0, QC.useState)(null),
            PC = (0, QC.useRef)(),
            GC = (0, QC.useContext)(gz),
            [RC] = (0, QC.useState)((() => "DocsTypePopover-" + Yz++)),
            AC = () => {
              clearTimeout(PC.current), NC(!0)
            },
            xC = () => {
              clearTimeout(PC.current), PC.current = setTimeout((() => {
                NC(!1)
              }), 120)
            };
          return (0, QC.useEffect)((() => {
            if (!WC) return;
            const CC = CC => {
              if ("Escape" === CC.key) {
                var zC, ZC;
                if (null !== (zC = oC.current) && void 0 !== zC && zC.contains(document.activeElement)) null === (ZC = fC.current) || void 0 === ZC || ZC.focus();
                NC(!1)
              }
            };
            return document.addEventListener("keydown", CC), () => {
              document.removeEventListener("keydown", CC)
            }
          }), [WC]), (0, QC.useEffect)((() => () => {
            clearTimeout(PC.current)
          }), []), (0, QC.useLayoutEffect)((() => {
            if (!WC || !fC.current || !oC.current) return void SC(null);
            const CC = fC.current.getBoundingClientRect(),
              zC = oC.current.offsetHeight,
              ZC = Math.min(ez, window.innerWidth - 32),
              QC = Math.min(Math.max(16, CC.left), window.innerWidth - ZC - 16),
              wC = CC.bottom + hz + zC < window.innerHeight;
            SC({
              left: QC,
              top: wC ? CC.bottom + hz : Math.max(16, CC.top - hz - zC)
            })
          }), [WC]), (0, gC.jsxs)(gC.Fragment, {
            children: [(0, gC.jsx)("button", {
              type: "button",
              ref: fC,
              className: "DocsTypeLink",
              "aria-expanded": WC,
              "aria-describedby": WC ? RC : void 0,
              onMouseEnter: AC,
              onMouseLeave: xC,
              onFocus: AC,
              onBlur: xC,
              onKeyDown: CC => {
                "Tab" === CC.key && !CC.shiftKey && FC.current && (CC.preventDefault(), FC.current.focus())
              },
              onClick: AC,
              children: zC
            }), WC && (0, qC.createPortal)((0, gC.jsxs)("span", {
              ref: oC,
              id: RC,
              className: "DocsTypePopover",
              role: "tooltip",
              style: MC ? {
                left: MC.left,
                top: MC.top,
                maxWidth: ez
              } : {
                visibility: "hidden"
              },
              onMouseEnter: AC,
              onMouseLeave: xC,
              onFocus: AC,
              onBlur: xC,
              children: [(0, gC.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, gC.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: zC
                }), bC && (0, gC.jsxs)(nC.d, {
                  ref: FC,
                  className: "DocsTypePopoverLink",
                  to: DC(wC, uC(bC)),
                  onClick: () => {
                    NC(!1)
                  },
                  onKeyDown: CC => {
                    if ("Tab" === CC.key) {
                      var zC;
                      if (CC.preventDefault(), CC.shiftKey || !fC.current || ! function(CC, zC) {
                          const ZC = [...document.querySelectorAll(Kz)],
                            QC = ZC.slice(ZC.indexOf(CC) + 1).find((CC => CC.getClientRects().length > 0 && !(null !== zC && void 0 !== zC && zC.contains(CC))));
                          return null === QC || void 0 === QC || QC.focus(), void 0 !== QC
                        }(fC.current, oC.current)) null === (zC = fC.current) || void 0 === zC || zC.focus();
                      CC.shiftKey || NC(!1)
                    }
                  },
                  children: [uC(bC).title, (0, gC.jsx)(pC, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, gC.jsx)(IC, {
                lang: "ts",
                code: ZC,
                compact: !0
              })]
            }), null !== GC && void 0 !== GC ? GC : document.body)]
          })
        }
        var mz = ZC(184),
          Hz = ZC(4698),
          Ez = ZC(4701),
          lz = ZC(4706);
        const Xz = {
          progressBar: {
            iZ: 30,
            vZ: .075,
            eZ: 5,
            hZ: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            dZ: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            HZ: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            EZ: !0,
            scale: 3,
            rotation: 15,
            lZ: !1
          },
          gravityBar: {
            iZ: 30,
            cZ: .25,
            uZ: 3,
            rZ: .8,
            gravity: 1,
            sZ: 1.5,
            TZ: 8,
            aZ: 4,
            hZ: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            DZ: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            yZ: 5,
            LZ: 1200,
            UZ: .15,
            BZ: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var cz = ZC(310),
          uz = ZC(1894);

        function rz(CC) {
          return CC.startsWith("fa-")
        }
        const sz = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          Tz = {
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

        function az(CC) {
          return "string" === typeof CC ? "text" : "entityName" in CC || "translationKey" in CC ? "other" : (0, cz.ub)(CC) ? "progressBar" : (0, cz.tb)(CC) ? "keyBinding" : "icon" in CC ? "icon" : "str" in CC && "string" === typeof CC.str ? "text" : "other"
        }
        const tz = [{
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
          Dz = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...tz],
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
                options: uz.o
              },
              isRequired: !0
            }, ...tz],
            other: []
          };

        function jz(CC) {
          return "string" === typeof CC ? {
            str: CC
          } : CC
        }

        function yz(CC, zC) {
          let ZC = jz(CC);
          for (const QC of zC) ZC = ZC && "object" === typeof ZC ? ZC[QC] : void 0;
          return ZC
        }

        function Lz(CC, zC, ZC) {
          const QC = (CC, wC) => {
            var bC;
            const nC = zC[wC],
              fC = {
                ...CC
              };
            if (wC === zC.length - 1) return void 0 === ZC ? delete fC[nC] : fC[nC] = ZC, fC;
            const oC = QC(null !== (bC = CC[nC]) && void 0 !== bC ? bC : {}, wC + 1);
            return 0 === Object.keys(oC).length ? delete fC[nC] : fC[nC] = oC, fC
          };
          return function(CC) {
            const zC = Object.keys(CC);
            return "string" === typeof CC.str && 1 === zC.length ? CC.str : CC
          }(QC(jz(CC), 0))
        }

        function Uz(CC, zC) {
          const ZC = az(CC),
            QC = Dz[ZC].find((CC => CC.path.join(".") === zC.join("."))),
            wC = null !== QC && void 0 !== QC && QC.isRequired && "other" !== ZC ? yz(Tz[ZC], zC) : void 0;
          return Lz(CC, zC, wC)
        }

        function Bz(CC) {
          switch (az(CC)) {
            case "text":
              return String(yz(CC, ["str"]));
            case "icon":
              return String(yz(CC, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(yz(CC,["progress"])))}%`;
            case "keyBinding":
              return String(yz(CC, ["action"]));
            case "other":
              return JSON.stringify(CC)
          }
        }
        const Oz = /^[A-Za-z_$][\w$]*$/;

        function kz(CC) {
          if (Array.isArray(CC)) return `[${CC.map(kz).join(", ")}]`;
          if (CC && "object" === typeof CC) {
            const zC = Object.entries(CC).map((CC => {
              let [zC, ZC] = CC;
              return `${Oz.test(zC)?zC:JSON.stringify(zC)}: ${kz(ZC)}`
            }));
            return 0 === zC.length ? "{}" : `{ ${zC.join(", ")} }`
          }
          return JSON.stringify(CC)
        }

        function Vz(CC) {
          const zC = CC.map(kz),
            ZC = `[${zC.join(", ")}]`;
          return ZC.length <= 60 ? ZC : `[\n${zC.map((CC=>`    ${CC},`)).join("\n")}\n]`
        }
        const CZ = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function zZ(CC) {
          let zC = "";
          for (let wC = 0; wC < CC.length; wC++) {
            const bC = CC[wC];
            if ("\\" === bC) {
              var ZC;
              const QC = null !== (ZC = CC[wC + 1]) && void 0 !== ZC ? ZC : "";
              zC += "'" === QC ? "'" : bC + QC, wC++
            } else if ('"' === bC) zC += '\\"';
            else {
              var QC;
              zC += null !== (QC = CZ[bC]) && void 0 !== QC ? QC : bC
            }
          }
          return `"${zC}"`
        }

        function ZZ(CC) {
          if ("string" === typeof CC) return !0;
          if (!CC || "object" !== typeof CC || Array.isArray(CC)) return !1;
          const zC = CC;
          return "ProgressBar" === zC.type ? "number" === typeof zC.progress : "StyledKeyBinding" === zC.type ? uz.o.includes(zC.action) : "string" === typeof zC.icon || "string" === typeof zC.str || "string" === typeof zC.entityName || "string" === typeof zC.translationKey
        }

        function QZ(CC) {
          let zC;
          try {
            zC = function(CC) {
              let zC = "",
                ZC = "",
                QC = 0;
              const wC = () => {
                zC += ZC.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), ZC = ""
              };
              for (; QC < CC.length;) {
                const bC = CC.slice(QC).search(/["'`]|\/\//);
                if (-1 === bC) {
                  ZC += CC.slice(QC);
                  break
                }
                ZC += CC.slice(QC, QC + bC);
                const nC = QC + bC,
                  fC = CC[nC];
                if ("/" === fC) {
                  const zC = CC.indexOf("\n", nC);
                  QC = -1 === zC ? CC.length : zC;
                  continue
                }
                if (wC(), "`" === fC) throw new Error("Use quotes rather than template strings.");
                let oC = nC + 1;
                for (; oC < CC.length && CC[oC] !== fC;) oC += "\\" === CC[oC] ? 2 : 1;
                if (oC >= CC.length) throw new Error("A string is missing its closing quote.");
                const qC = CC.slice(nC + 1, oC);
                zC += zZ(qC), QC = oC + 1
              }
              return wC(), JSON.parse(zC)
            }(CC.trim())
          } catch (QC) {
            return {
              parts: null,
              error: QC instanceof SyntaxError ? "This isn't a valid array yet." : QC.message
            }
          }
          if (!Array.isArray(zC)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const ZC = zC.findIndex((CC => !ZZ(CC)));
          return -1 !== ZC ? {
            parts: null,
            error: `Part ${ZC+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: zC,
            error: null
          }
        }
        const wZ = 1 / mz.f.clientTicksPerSecond,
          bZ = 700,
          nZ = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          fZ = {
            progressBar: Xz.progressBar.dZ,
            timedClick: Xz.timedClick.icon,
            gravityBar: Xz.gravityBar.icon,
            precisionBar: Xz.precisionBar.icon,
            rhythmClick: Xz.rhythmClick.icon
          };

        function oZ(CC) {
          let {
            type: zC
          } = CC;
          const [ZC, wC] = (0, QC.useState)("ready"), [nC, fC] = (0, QC.useState)(1), [oC, qC] = (0, QC.useState)(!0), FC = (0, QC.useRef)(null), WC = (0, QC.useRef)(null), NC = (0, QC.useRef)(null), MC = (0, QC.useRef)(new Set), SC = (0, QC.useRef)(!1), PC = fZ[zC], GC = (0, QC.useMemo)((() => ({
            getState: () => {
              var CC, zC;
              return null !== (CC = null === (zC = NC.current) || void 0 === zC ? void 0 : zC.getState()) && void 0 !== CC ? CC : nZ
            },
            onFrame: CC => (MC.current.add(CC), () => {
              MC.current.delete(CC)
            })
          })), []);
          (0, QC.useEffect)((() => {
            const CC = FC.current,
              zC = WC.current;
            if (!CC || !zC) return;
            const ZC = new ResizeObserver((() => {
              fC(CC.clientWidth / Math.max(1, zC.offsetWidth))
            }));
            return ZC.observe(CC), () => {
              ZC.disconnect()
            }
          }), []), (0, QC.useEffect)((() => {
            var CC;
            if ("playing" !== ZC) return;
            let QC = !1;
            const bC = new lz.f[zC](Xz[zC], (CC => {
              QC = !0, qC(!1), wC(CC ? "succeeded" : "failed")
            }), (() => {}));
            NC.current = bC;
            let nC = 0,
              fC = performance.now(),
              oC = requestAnimationFrame((function CC(zC) {
                for (nC += Math.min(.25, (zC - fC) / 1e3), fC = zC; nC >= wZ && !QC;) nC -= wZ, bC.handleTick(wZ);
                for (const ZC of MC.current) ZC();
                QC || (oC = requestAnimationFrame(CC))
              }));
            return null === (CC = FC.current) || void 0 === CC || CC.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(oC), bC.tearDown(), NC.current = null, SC.current = !1
            }
          }), [ZC, zC]), (0, QC.useEffect)((() => {
            if (oC) return;
            const CC = setTimeout((() => {
              qC(!0)
            }), bZ);
            return () => {
              clearTimeout(CC)
            }
          }), [oC]);
          const RC = CC => {
            var zC;
            "playing" === ZC && SC.current !== CC && (SC.current = CC, null === (zC = NC.current) || void 0 === zC || zC.handleMouseInput(CC))
          };
          return (0, gC.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, gC.jsxs)("div", {
              ref: FC,
              className: bC()("DocsQteStage", {
                Playing: "playing" === ZC
              }),
              tabIndex: "playing" === ZC ? 0 : -1,
              role: "playing" === ZC ? "button" : void 0,
              "aria-label": "playing" === ZC ? `${zC} quick time event: click or press Space` : void 0,
              onPointerDown: CC => {
                0 === CC.button && RC(!0)
              },
              onPointerUp: () => {
                RC(!1)
              },
              onPointerLeave: () => {
                RC(!1)
              },
              onPointerCancel: () => {
                RC(!1)
              },
              onKeyDown: CC => {
                "playing" !== ZC || " " !== CC.key && "Enter" !== CC.key || (CC.preventDefault(), RC(!0))
              },
              onKeyUp: CC => {
                "playing" !== ZC || " " !== CC.key && "Enter" !== CC.key || RC(!1)
              },
              children: [(0, gC.jsx)("div", {
                ref: WC,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${nC})`
                },
                children: "playing" === ZC && (0, gC.jsx)(Ez.b.Provider, {
                  value: GC,
                  children: (0, gC.jsx)(Hz.d, {
                    qte: {
                      type: zC,
                      parameters: Xz[zC]
                    }
                  })
                })
              }), "playing" !== ZC && (0, gC.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== ZC && (0, gC.jsxs)("div", {
                  className: bC()("DocsQteResult", "succeeded" === ZC ? "Succeeded" : "Failed"),
                  children: [(0, gC.jsx)(pC, {
                    name: "succeeded" === ZC ? "check" : "cross",
                    isTinted: !0
                  }), (0, gC.jsx)("span", {
                    children: "succeeded" === ZC ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, gC.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !oC,
                  onClick: () => {
                    wC("playing")
                  },
                  children: [(0, gC.jsx)(pC, {
                    name: "ready" === ZC ? "play" : "replay"
                  }), (0, gC.jsx)("span", {
                    children: "ready" === ZC ? `Try ${zC}` : "Play again"
                  })]
                })]
              })]
            }), PC && !rz(PC) && (0, gC.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, gC.jsx)("code", {
                children: PC
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function qZ(CC) {
          let {
            level: zC,
            text: ZC,
            anchor: QC,
            className: wC
          } = CC;
          const nC = `h${Math.min(zC,6)}`;
          return (0, gC.jsxs)(nC, {
                id: QC,
                className: bC()("DocsHeading", wC),
                children: [(0, gC.jsx)(Jz, {
                      text: ZC
                    }), (0, gC.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${QC}`,
                        "aria-label": `Link to ${ZC.replace(/`/g,"")}`,children:"#"})]})}function FZ(CC){let{items:zC,ordered:ZC}=CC;const QC=ZC?"ol":"ul";return(0,gC.jsx)(QC,{className:"DocsList",children:zC.map(((CC,zC)=>(0,gC.jsxs)("li",{children:[(0,gC.jsx)(Jz,{text:CC.text}),CC.children.length>0&&(0,gC.jsx)(FZ,{items:CC.children,ordered:ZC})]},zC)))})}function WZ(CC){const zC=CC[0],ZC="paragraph"===(null===zC||void 0===zC?void 0:zC.kind)?zC.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(ZC)?"warning":/^\*\*(tip|prefer)/.test(ZC)?"tip":"note"}function NZ(CC){let{block:zC}=CC;switch(zC.kind){case"heading":return(0,gC.jsx)(qZ,{level:zC.level,text:zC.text,anchor:zC.anchor});case"paragraph":return(0,gC.jsx)("p",{children:(0,gC.jsx)(Jz,{text:zC.text})});case"code":{const CC="ts"===zC.lang?function(CC){const zC=CC.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return zC&&Object.hasOwn(Xz,zC[1])?zC[1]:null}(zC.code):null;return(0,gC.jsxs)(gC.Fragment,{children:[(0,gC.jsx)(IC,{code:zC.code,lang:zC.lang}),CC&&(0,gC.jsx)(oZ,{type:CC})]})}case"table":return(0,gC.jsx)("div",{className:"DocsTableScroll",children:(0,gC.jsxs)("table",{className:"DocsTable",children:[(0,gC.jsx)("thead",{children:(0,gC.jsx)("tr",{children:zC.header.map(((CC,zC)=>(0,gC.jsx)("th",{children:(0,gC.jsx)(Jz,{text:CC})},zC)))})}),(0,gC.jsx)("tbody",{children:zC.rows.map(((CC,zC)=>(0,gC.jsx)("tr",{children:CC.map(((CC,zC)=>(0,gC.jsx)("td",{children:(0,gC.jsx)(Jz,{text:CC})},zC)))},zC)))})]})});case"list":return(0,gC.jsx)(FZ,{items:zC.items,ordered:zC.ordered});case"quote":return(0,gC.jsx)("aside",{className:bC()("DocsCallout",WZ(zC.blocks)),children:(0,gC.jsx)(MZ,{blocks:zC.blocks})});case"rule":return(0,gC.jsx)("hr",{className:"DocsRule"})}}function MZ(CC){let{blocks:zC}=CC;return(0,gC.jsx)(gC.Fragment,{children:zC.map(((CC,zC)=>(0,gC.jsx)(NZ,{block:CC},zC)))})}var gZ=ZC(4688),SZ=ZC(4694);function pZ(CC){return"blocks"===CC||"items"===CC}const PZ=new Map;function GZ(CC){let zC=PZ.get(CC);return zC||(zC=function(CC){const zC={entries:[],legend:[],notes:[],examples:[]};let ZC=!1;for(const bC of CC.split(/\r?\n/).slice(1)){if(bC.startsWith("#")){const CC=bC.replace(/^# ?/,""),QC=CC.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);QC?zC.legend.push({code:QC[1],meaning:QC[2],usage:QC[3].trim()}):/^Examples:/.test(CC.trim())?ZC=!0:ZC&&CC.trim()?zC.examples.push(CC.trim()):CC.trim()&&!/^\s/.test(CC)&&zC.notes.push(CC.trim());continue}const CC=bC.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var QC,wC;CC&&zC.entries.push({name:CC[1],variants:null!==(QC=null===(wC=CC[2])||void 0===wC?void 0:wC.split(","))&&void 0!==QC?QC:[]})}return zC}("blocks"===CC?gZ:SZ),PZ.set(CC,zC)),zC}function RZ(CC){let{className:zC,value:ZC,placeholder:QC,label:wC,onChange:bC,count:nC,children:fC}=CC;return(0,gC.jsxs)("div",{className:zC,children:[(0,gC.jsx)(pC,{name:"magnifying-glass"}),(0,gC.jsx)("input",{type:"search",value:ZC,placeholder:QC,"aria-label":wC,onChange:CC=>{bC(CC.target.value)}}),fC,nC&&(0,gC.jsxs)("span",{className:"DocsFilterCount",children:[nC.visible," of ",nC.total]})]})}var AZ=ZC(1013);function xZ(CC){const zC=CC.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return zC?zC[2]:null}function JZ(CC){return"paragraph"===CC.kind&&""===CC.text.trim()}function IZ(CC){const zC={name:CC.heading.text,description:[],params:[],returns:null};let ZC="description";for(const wC of CC.blocks)if(!JZ(wC))if("heading"===wC.kind&&/^Parameters:?$/.test(wC.text))ZC="params";else if("heading"===wC.kind&&/^Returns:?$/.test(wC.text))ZC="returns",zC.returns={type:"",description:[]};else if("params"!==ZC||"table"!==wC.kind){if("returns"===ZC&&"paragraph"===wC.kind&&""===zC.returns.type){const CC=xZ(wC.text);if(null!==CC){zC.returns.type=CC.replaceAll("\\|","|");continue}}"returns"===ZC?zC.returns.description.push(wC):zC.description.push(wC)}else for(const[CC,ZC,bC]of wC.rows){var QC;zC.params.push({name:CC,type:null!==(QC=xZ(ZC))&&void 0!==QC?QC:ZC,description:null!==bC&&void 0!==bC?bC:""})}return zC}const iZ=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function vZ(CC){return CC.filter((CC=>!JZ(CC)))}const eZ=/^[\w][\w .'&!:()-]*$/,hZ=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function KZ(CC){var zC;if("code"===CC.kind&&"text"===CC.lang){const zC=CC.code.split("\n").map((CC=>CC.trim())).filter(Boolean);return zC.length>0&&zC.every((CC=>eZ.test(CC)))?zC.map((CC=>({name:CC}))):null}return"paragraph"===CC.kind&&hZ.test(CC.text.trim())?[...CC.text.matchAll(/`([ ^ `]+)` / g)].flatMap((CC => CC[1].split(/,\s*/).map((CC => ({
                              name: CC.trim()
                            }))))): "table" === CC.kind && null !== (zC = CC.header[0]) && void 0 !== zC && zC.startsWith("Song") ? CC.rows.map((CC => {
                              let [zC, ZC] = CC;
                              return {
                                name: zC.replace(/`/g, ""),
                                caption: ZC
                              }
                            })) : null
                          }

                          function YZ(CC) {
                            const zC = [];
                            for (const ZC of CC) {
                              const CC = KZ(ZC),
                                QC = zC.at(-1),
                                wC = "table" === ZC.kind;
                              CC ? "names" === (null === QC || void 0 === QC ? void 0 : QC.kind) && QC.isSongs === wC ? QC.names.push(...CC) : zC.push({
                                kind: "names",
                                names: CC,
                                isSongs: wC
                              }) : zC.push({
                                kind: "block",
                                block: ZC
                              })
                            }
                            return zC
                          }
                          const dZ = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function mZ(CC, zC) {
                            return `${dZ[CC]}-${(0,iC.p)(zC)}`
                          }
                          const HZ = new WeakMap;

                          function EZ(CC, zC, ZC) {
                            let QC = HZ.get(zC);
                            if (!QC) {
                              QC = new Map;
                              const ZC = new Set;
                              for (const wC of (0, iC.r)(zC)) {
                                const zC = YZ(vZ(wC.blocks)).map((zC => {
                                  if ("block" === zC.kind) return zC;
                                  return {
                                    kind: "names",
                                    names: zC.names.map((zC => {
                                      var QC, bC;
                                      const nC = mZ(CC, zC.name);
                                      let fC = nC;
                                      for (let CC = 2; ZC.has(fC); CC++) fC = `${nC}-${CC}`;
                                      return ZC.add(fC), {
                                        ...zC,
                                        anchor: fC,
                                        heading: null !== (QC = null === (bC = wC.heading) || void 0 === bC ? void 0 : bC.text) && void 0 !== QC ? QC : ""
                                      }
                                    })),
                                    isSongs: zC.isSongs
                                  }
                                }));
                                QC.set(wC.blocks, zC)
                              }
                              HZ.set(zC, QC)
                            }
                            const wC = QC.get(ZC);
                            if (!wC) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return wC
                          }
                          const lZ = "/textures/docs/skinPreviews",
                            XZ = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var cZ = ZC(4166),
                            uZ = ZC(4179);

                          function rZ(CC) {
                            return Object.hasOwn(cZ.e, CC) ? cZ.e[CC] : null
                          }
                          const sZ = {
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
                            blendMode: uZ.d.Standard
                          };

                          function TZ(CC, zC, ZC) {
                            return zC + (ZC - zC) * CC()
                          }

                          function aZ(CC, zC, ZC) {
                            return CC + (zC - CC) * ZC
                          }

                          function tZ(CC) {
                            return CC.length > 0 && "timeFraction" in CC[0]
                          }

                          function DZ(CC, zC) {
                            if (0 === CC.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!tZ(CC.colorGradients)) {
                              const ZC = CC.colorGradients,
                                {
                                  color: QC
                                } = ZC[Math.floor(zC() * ZC.length) % ZC.length];
                              return [{
                                at: 0,
                                colour: [QC[0] / 255, QC[1] / 255, QC[2] / 255, 1]
                              }]
                            }
                            return [...CC.colorGradients].sort(((CC, zC) => CC.timeFraction - zC.timeFraction)).map((CC => {
                              var ZC, QC, wC;
                              const bC = CC.minColor,
                                nC = null !== (ZC = CC.maxColor) && void 0 !== ZC ? ZC : bC,
                                fC = zC(),
                                oC = [aZ(bC[0], nC[0], fC) / 255, aZ(bC[1], nC[1], fC) / 255, aZ(bC[2], nC[2], fC) / 255, aZ(null !== (QC = bC[3]) && void 0 !== QC ? QC : 1, null !== (wC = nC[3]) && void 0 !== wC ? wC : 1, fC)];
                              return {
                                at: CC.timeFraction,
                                colour: oC
                              }
                            }))
                          }

                          function jZ(CC, zC, ZC, QC) {
                            const wC = TZ(QC, CC.minEmitPower, CC.maxEmitPower),
                              bC = zC => TZ(QC, Math.min(CC.dir1[zC], CC.dir2[zC]), Math.max(CC.dir1[zC], CC.dir2[zC])) * wC,
                              nC = [...CC.velocityGradients].sort(((CC, zC) => CC.timeFraction - zC.timeFraction)).map((CC => ({
                                at: CC.timeFraction,
                                factor: TZ(QC, CC.factor, CC.factor2)
                              })));
                            return {
                              pos: [TZ(QC, zC[0], ZC[0]), TZ(QC, zC[1], ZC[1]), TZ(QC, zC[2], ZC[2])],
                              dir: [bC(0), bC(1), bC(2)],
                              age: 0,
                              life: TZ(QC, CC.minLifeTime, CC.maxLifeTime),
                              size: TZ(QC, CC.minSize, CC.maxSize),
                              colours: DZ(CC, QC),
                              velocityFactors: nC
                            }
                          }

                          function yZ(CC, zC, ZC, QC) {
                            if (zC < CC[0].at) return ZC(Math.min(1, CC.length - 1));
                            for (let wC = 0; wC < CC.length - 1; wC++)
                              if (zC <= CC[wC + 1].at) {
                                const bC = CC[wC + 1].at - CC[wC].at;
                                return QC(ZC(wC), ZC(wC + 1), bC > 0 ? (zC - CC[wC].at) / bC : 1)
                              } return ZC(CC.length - 1)
                          }

                          function LZ(CC) {
                            return yZ(CC.colours, CC.age / CC.life, (zC => CC.colours[zC].colour), ((CC, zC, ZC) => [aZ(CC[0], zC[0], ZC), aZ(CC[1], zC[1], ZC), aZ(CC[2], zC[2], ZC), aZ(CC[3], zC[3], ZC)]))
                          }

                          function UZ(CC, zC, ZC) {
                            if (CC.age += ZC, CC.age >= CC.life) return !1;
                            const QC = function(CC) {
                              return 0 === CC.velocityFactors.length ? 1 : yZ(CC.velocityFactors, CC.age / CC.life, (zC => CC.velocityFactors[zC].factor), aZ)
                            }(CC) * ZC;
                            for (let bC = 0; bC < 3; bC++) {
                              var wC;
                              CC.pos[bC] += CC.dir[bC] * QC, CC.dir[bC] += (null !== (wC = zC[bC]) && void 0 !== wC ? wC : 0) * ZC
                            }
                            return !0
                          }

                          function BZ(CC) {
                            return String(Math.round(1e6 * CC) / 1e6)
                          }

                          function OZ(CC) {
                            return `[${CC.map(BZ).join(", ")}]`
                          }

                          function kZ(CC, zC) {
                            const ZC = `${zC}    `;
                            return `[\n${(tZ(CC)?CC.map((CC=>{const zC=[`${ZC}    timeFraction: ${BZ(CC.timeFraction)},`,`${ZC}    minColor: ${OZ(CC.minColor)},`];return CC.maxColor&&zC.push(`${ZC}    maxColor: ${OZ(CC.maxColor)},`),`${ZC}{\n${zC.join("\n")}\n${ZC}},`})):CC.map((CC=>`
                            $ {
                              ZC
                            } {
                              color: $ {
                                OZ(CC.color)
                              }
                            }, `))).join("\n")}\n${zC}]`
                          }
                          const VZ = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            CQ = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const zQ = .6;

                          function ZQ(CC, zC) {
                            return `${zC?"song":"sound"}:${CC}`
                          }
                          let QQ = {
                              track: null,
                              volume: zQ
                            },
                            wQ = null,
                            bQ = 0,
                            nQ = 0;
                          const fQ = new Set;

                          function oQ(CC) {
                            QQ = {
                              ...QQ,
                              ...CC
                            }, fQ.forEach((CC => {
                              CC()
                            }))
                          }

                          function qQ(CC) {
                            QQ.track && oQ({
                              track: {
                                ...QQ.track,
                                ...CC
                              }
                            })
                          }

                          function FQ(CC) {
                            const [zC, ZC] = (0, QC.useState)((() => CC(QQ))), wC = (0, QC.useRef)(CC);
                            return wC.current = CC, (0, QC.useEffect)((() => {
                              const CC = () => {
                                ZC((() => wC.current(QQ)))
                              };
                              return fQ.add(CC), CC(), () => {
                                fQ.delete(CC)
                              }
                            }), []), zC
                          }

                          function WQ() {
                            bQ++;
                            const CC = wQ;
                            wQ = null, null === CC || void 0 === CC || CC.stop()
                          }

                          function NQ(CC, zC) {
                            let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            WQ();
                            const wC = bQ,
                              {
                                track: bC
                              } = QQ,
                              nC = bC && bC.name === CC && bC.isSong === zC ? bC.duration : 0;
                            nQ = QC, oQ({
                              track: {
                                name: CC,
                                isSong: zC,
                                status: "loading",
                                duration: nC
                              }
                            }), Promise.all([ZC.e(222), ZC.e(249)]).then((() => ZC(39621))).then((ZC => {
                              let {
                                playDocsSound: bC
                              } = ZC;
                              wC === bQ && (wQ = bC(CC, zC, QQ.volume, QC, {
                                onPlay: CC => {
                                  wC === bQ && qQ({
                                    status: "playing",
                                    duration: CC
                                  })
                                },
                                onEnd: CC => {
                                  var zC, ZC;
                                  wC === bQ && (wQ = null, CC ? oQ({
                                    track: null
                                  }) : (nQ = null !== (zC = null === (ZC = QQ.track) || void 0 === ZC ? void 0 : ZC.duration) && void 0 !== zC ? zC : 0, qQ({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((zC => {
                              console.error(`Could not play docs sound ${CC}`, zC), wC === bQ && oQ({
                                track: null
                              })
                            }))
                          }

                          function MQ() {
                            const {
                              track: CC
                            } = QQ;
                            if (!CC) return;
                            if ("playing" === CC.status && wQ) return nQ = wQ.yG(), wQ.pause(), void qQ({
                              status: "paused"
                            });
                            if ("loading" === CC.status) return WQ(), void qQ({
                              status: "paused"
                            });
                            if (wQ) return void wQ.resume();
                            const zC = CC.duration > 0 && nQ >= CC.duration - .05;
                            NQ(CC.name, CC.isSong, zC ? 0 : nQ)
                          }

                          function gQ() {
                            var CC;
                            return wQ && "playing" === (null === (CC = QQ.track) || void 0 === CC ? void 0 : CC.status) ? wQ.yG() : nQ
                          }

                          function SQ(CC) {
                            var zC;
                            null === (zC = wQ) || void 0 === zC || zC.setVolume(CC), oQ({
                              volume: CC
                            })
                          }

                          function pQ() {
                            WQ(), nQ = 0, oQ({
                              track: null
                            })
                          }
                          const PQ = (0, QC.createContext)(null);
                          let GQ = null;

                          function RQ() {
                            const [CC, zC] = (0, QC.useState)(null);
                            return (0, QC.useEffect)((() => {
                              let CC = !1;
                              return GQ ??= Promise.all([ZC.e(72), ZC.e(75), ZC.e(74), ZC.e(73), ZC.e(186), ZC.e(98), ZC.e(226)]).then((() => ZC(39617))), GQ.then((ZC => {
                                CC || zC(ZC)
                              }), (CC => {
                                console.error("Could not load the docs gallery's textures", CC), GQ = null
                              })), () => {
                                CC = !0
                              }
                            }), []), CC
                          }
                          const AQ = 24,
                            xQ = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function JQ(CC, zC) {
                            const ZC = "skins" === CC ? function(CC, zC) {
                              const ZC = XZ.find((zC => CC.startsWith(zC.heading)));
                              return ZC ? function(CC, zC) {
                                return `${CC}-${zC}`
                              }(ZC.prefix, zC) : null
                            }(zC.heading, zC.name) : null;
                            return null === ZC ? null : `${lZ}/${ZC}.webp`
                          }

                          function IQ(CC) {
                            let {
                              kind: zC,
                              entry: ZC,
                              assets: wC,
                              renderedUrl: nC
                            } = CC;
                            const {
                              name: fC
                            } = ZC, [oC, qC] = (0, QC.useState)(!1);
                            if ("icons" === zC && rz(fC)) return (0, gC.jsx)(AZ.c, {
                              className: "DocsTileIcon",
                              name: fC
                            });
                            let FC = null;
                            var WC;
                            if ("icons" === zC) FC = null !== (WC = null === wC || void 0 === wC ? void 0 : wC.getIngameIconUrl(fC)) && void 0 !== WC ? WC : null;
                            else if ("particles" === zC) {
                              var NC, MC, SC;
                              FC = null !== (NC = null === wC || void 0 === wC ? void 0 : wC.getParticleTextureUrl(null !== (MC = null === (SC = rZ(fC)) || void 0 === SC ? void 0 : SC.texture) && void 0 !== MC ? MC : fC)) && void 0 !== NC ? NC : null
                            } else "skins" === zC && (FC = null !== nC && void 0 !== nC ? nC : xQ.test(fC) ? `/textures/charSkins/previews/${fC}_preview.png` : null);
                            return !FC || oC ? (0, gC.jsx)(pC, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === zC ? "person" : "image"
                            }) : (0, gC.jsx)("img", {
                              className: bC()("DocsTileImage", {
                                Pixelated: "skins" !== zC
                              }),
                              src: FC,
                              srcSet: FC === nC ? `${FC} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${FC}`), qC(!0)
                              }
                            })
                          }

                          function iQ(CC) {
                            let {
                              entry: zC,
                              isSong: ZC
                            } = CC;
                            const QC = FQ((CC => {
                                let {
                                  track: QC
                                } = CC;
                                return (null === QC || void 0 === QC ? void 0 : QC.name) === zC.name && QC.isSong === ZC ? QC.status : null
                              })),
                              wC = null !== QC && "paused" !== QC;
                            return (0, gC.jsxs)("button", {
                              type: "button",
                              id: zC.anchor,
                              className: bC()("DocsSoundTile", {
                                Playing: wC
                              }),
                              "data-docs-track": ZQ(zC.name, ZC),
                              "aria-label": wC ? `Pause ${zC.name}` : `Play ${zC.name}`,
                              onClick: () => {
                                null !== QC ? MQ() : NQ(zC.name, ZC)
                              },
                              children: [(0, gC.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, gC.jsx)(pC, {
                                  name: wC ? "pause" : "play"
                                })
                              }), (0, gC.jsx)("code", {
                                className: "DocsSoundName",
                                children: zC.name
                              }), zC.caption && (0, gC.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: zC.caption
                              })]
                            })
                          }

                          function vQ(CC) {
                            let {
                              kind: zC,
                              names: ZC,
                              isSongs: wC
                            } = CC;
                            const nC = RQ(),
                              [fC, oC] = GC(),
                              qC = !1 === (null === fC || void 0 === fC ? void 0 : fC.failed) ? fC.text : null,
                              FC = (0, QC.useContext)(PQ),
                              [WC, NC] = (0, QC.useState)(""),
                              MC = WC.trim().toLowerCase(),
                              SC = MC ? ZC.filter((CC => CC.name.toLowerCase().includes(MC))) : ZC;
                            return (0, gC.jsxs)("div", {
                              className: "DocsGallery",
                              children: [ZC.length > AQ && (0, gC.jsx)(RZ, {
                                className: "DocsGalleryFilter",
                                value: WC,
                                placeholder: `Filter ${ZC.length} names\u2026`,
                                label: "Filter names",
                                onChange: NC,
                                count: MC ? {
                                  visible: SC.length,
                                  total: ZC.length
                                } : null
                              }), (0, gC.jsx)("div", {
                                className: bC()("DocsGalleryGrid", `Kind-${zC}`, {
                                  Songs: wC
                                }),
                                children: SC.map((CC => {
                                  if ("sounds" === zC) return (0, gC.jsx)(iQ, {
                                    entry: CC,
                                    isSong: wC
                                  }, CC.anchor);
                                  if (FC && "particles" === zC && rZ(CC.name)) return (0, gC.jsxs)("button", {
                                    type: "button",
                                    id: CC.anchor,
                                    className: bC()("DocsTile Previewable", {
                                      Copied: qC === CC.name
                                    }),
                                    title: `Play "${CC.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      FC(CC.name), oC(CC.name)
                                    },
                                    children: [(0, gC.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, gC.jsx)(IQ, {
                                        kind: zC,
                                        entry: CC,
                                        assets: nC,
                                        renderedUrl: null
                                      }), (0, gC.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, gC.jsx)(pC, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, gC.jsx)("span", {
                                      className: "DocsTileName",
                                      children: qC === CC.name ? "Copied!" : CC.name
                                    })]
                                  }, CC.anchor);
                                  const ZC = JQ(zC, CC);
                                  return (0, gC.jsxs)("button", {
                                    type: "button",
                                    id: CC.anchor,
                                    className: bC()("DocsTile", {
                                      Copied: qC === CC.name
                                    }),
                                    title: `Copy "${CC.name}"`,
                                    onClick: () => {
                                      oC(CC.name)
                                    },
                                    children: [(0, gC.jsx)("span", {
                                      className: bC()("DocsTilePreview", {
                                        Rendered: null !== ZC
                                      }),
                                      children: (0, gC.jsx)(IQ, {
                                        kind: zC,
                                        entry: CC,
                                        assets: nC,
                                        renderedUrl: ZC
                                      })
                                    }), (0, gC.jsx)("span", {
                                      className: "DocsTileName",
                                      children: qC === CC.name ? "Copied!" : CC.name
                                    })]
                                  }, CC.anchor)
                                }))
                              })]
                            })
                          }

                          function eQ(CC) {
                            let {
                              kind: zC,
                              content: ZC,
                              blocks: QC
                            } = CC;
                            return (0, gC.jsx)(gC.Fragment, {
                              children: EZ(zC, ZC, QC).map(((CC, ZC) => "block" === CC.kind ? (0, gC.jsx)(NZ, {
                                block: CC.block
                              }, ZC) : (0, gC.jsx)(vQ, {
                                kind: zC,
                                names: CC.names,
                                isSongs: CC.isSongs
                              }, ZC)))
                            })
                          }
                          const hQ = [{
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

                          function KQ(CC) {
                            let {
                              cards: zC = hQ,
                              label: ZC = "Start here"
                            } = CC;
                            const wC = (0, QC.useContext)(Mz);
                            return (0, gC.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": ZC,
                              children: zC.map((CC => {
                                let {
                                  pageId: zC,
                                  countNoun: ZC
                                } = CC;
                                const QC = uC(zC);
                                return (0, gC.jsxs)(nC.d, {
                                  to: DC(wC, QC),
                                  className: "DocsLandingCard",
                                  children: [(0, gC.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, gC.jsx)(pC, {
                                      name: QC.icon
                                    })
                                  }), (0, gC.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: QC.title
                                  }), (0, gC.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: QC.summary
                                  }), ZC && (0, gC.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [sC(QC).sections.length, " ", ZC]
                                  })]
                                }, zC)
                              }))
                            })
                          }
                          const YQ = 240;

                          function dQ(CC) {
                            let {
                              faces: zC
                            } = CC;
                            return (0, gC.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, gC.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${zC.top}")`
                                }
                              }), (0, gC.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${zC.left}")`
                                }
                              }), (0, gC.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${zC.right}")`
                                }
                              })]
                            })
                          }

                          function mQ(CC) {
                            let {
                              src: zC
                            } = CC;
                            const [ZC, wC] = (0, QC.useState)(!1);
                            return ZC ? null : (0, gC.jsx)("img", {
                              src: zC,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${zC}`), wC(!0)
                              }
                            })
                          }

                          function HQ(CC) {
                            let {
                              kind: zC
                            } = CC;
                            const ZC = GZ(zC),
                              wC = RQ(),
                              nC = (0, fC.v)(),
                              [oC, qC] = (0, QC.useState)(""),
                              [FC, WC] = (0, QC.useState)(null),
                              [NC, MC] = (0, QC.useState)(YQ),
                              [SC, PC] = (0, QC.useState)(null),
                              GC = (0, QC.useRef)(null),
                              AC = oC.trim().toLowerCase();
                            (0, QC.useEffect)((() => {
                              const CC = (0, iC.n)(nC.hash),
                                QC = ZC.entries.find((ZC => mZ(zC, ZC.name) === CC));
                              if (QC) GC.current = QC.name, qC(QC.name), WC(null), PC(QC.name);
                              else if (null !== GC.current) {
                                const CC = GC.current;
                                GC.current = null, qC((zC => zC === CC ? "" : zC)), PC(null)
                              }
                            }), [ZC, zC, nC.hash, nC.key]), (0, QC.useEffect)((() => {
                              var CC;
                              null !== SC && (null === (CC = document.getElementById(mZ(zC, SC))) || void 0 === CC || CC.scrollIntoView({
                                block: "center"
                              }))
                            }), [zC, SC]);
                            const xC = ZC.entries.filter((CC => (!AC || CC.name.toLowerCase().includes(AC)) && (!FC || CC.variants.includes(FC))));
                            return (0, gC.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [ZC.notes.length > 0 && (0, gC.jsx)("div", {
                                className: "DocsProse",
                                children: ZC.notes.map((CC => (0, gC.jsx)("p", {
                                  children: CC
                                }, CC)))
                              }), ZC.legend.length > 0 && (0, gC.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, gC.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, gC.jsx)("thead", {
                                    children: (0, gC.jsxs)("tr", {
                                      children: [(0, gC.jsx)("th", {
                                        children: "Code"
                                      }), (0, gC.jsx)("th", {
                                        children: "Variant"
                                      }), (0, gC.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, gC.jsx)("tbody", {
                                    children: ZC.legend.map((CC => (0, gC.jsxs)("tr", {
                                      children: [(0, gC.jsx)("td", {
                                        children: (0, gC.jsx)("button", {
                                          type: "button",
                                          className: bC()("DocsVariantChip", {
                                            Active: FC === CC.code
                                          }),
                                          "aria-pressed": FC === CC.code,
                                          title: `Show only ${zC} with ${CC.meaning} variants`,
                                          onClick: () => {
                                            WC(FC === CC.code ? null : CC.code)
                                          },
                                          children: CC.code
                                        })
                                      }), (0, gC.jsx)("td", {
                                        children: CC.meaning
                                      }), (0, gC.jsx)("td", {
                                        children: (0, gC.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: CC.usage
                                        })
                                      })]
                                    }, CC.code)))
                                  })]
                                })
                              }), ZC.examples.length > 0 && (0, gC.jsx)(IC, {
                                lang: "text",
                                code: ZC.examples.join("\n")
                              }), (0, gC.jsx)(RZ, {
                                className: "DocsFilterBar",
                                value: oC,
                                placeholder: `Search ${ZC.entries.length} ${zC}\u2026`,
                                label: `Search ${zC}`,
                                onChange: CC => {
                                  qC(CC), MC(YQ)
                                },
                                count: AC || FC ? {
                                  visible: xC.length,
                                  total: ZC.entries.length
                                } : null,
                                children: FC && (0, gC.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    WC(null)
                                  },
                                  children: [FC, " ", (0, gC.jsx)(pC, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, gC.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: xC.slice(0, NC).map((CC => {
                                  const ZC = "blocks" === zC ? null === wC || void 0 === wC ? void 0 : wC.getBlockFaces(CC.name) : null,
                                    QC = wC && !ZC ? wC.getItemTextureUrl(CC.name) : null;
                                  return (0, gC.jsxs)("div", {
                                    id: mZ(zC, CC.name),
                                    className: bC()("DocsCatalogueTile", {
                                      Linked: CC.name === SC
                                    }),
                                    children: [(0, gC.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [ZC && (0, gC.jsx)(dQ, {
                                        faces: ZC
                                      }), QC && (0, gC.jsx)(mQ, {
                                        src: QC
                                      })]
                                    }), (0, gC.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: CC.name
                                    }), CC.variants.length > 0 && (0, gC.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: CC.variants.map((CC => (0, gC.jsx)("span", {
                                        children: CC
                                      }, CC)))
                                    }), (0, gC.jsx)(RC, {
                                      text: CC.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, CC.name)
                                }))
                              }), xC.length > NC && (0, gC.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  MC(xC.length)
                                },
                                children: ["Show all ", xC.length]
                              }), 0 === xC.length && (0, gC.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", zC, " match."]
                              })]
                            })
                          }
                          var EQ = ZC(4755),
                            lQ = ZC(1520);
                          const XQ = .95 * EQ.b;

                          function cQ(CC) {
                            return /^\s*```/.test(CC)
                          }

                          function uQ(CC, zC) {
                            const ZC = [
                              []
                            ];
                            let QC = !1;
                            for (const wC of CC.split("\n")) !QC && zC(wC) && ZC.at(-1).length > 0 && ZC.push([]), cQ(wC) && (QC = !QC), ZC.at(-1).push(wC);
                            return ZC.map((CC => CC.join("\n").trim())).filter(Boolean)
                          }

                          function rQ(CC, zC) {
                            const ZC = `${"#".repeat(zC)} `,
                              QC = [];
                            let wC = !1;
                            for (const bC of CC.split("\n")) cQ(bC) ? wC = !wC : !wC && bC.startsWith(ZC) && QC.push(bC.slice(ZC.length).trim());
                            return QC
                          }

                          function sQ(CC) {
                            return CC.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class TQ {
                            constructor(CC, zC) {
                              this.origin = zC, this.pages = void 0, this.partPaths = new Map;
                              const ZC = CC.map((CC => {
                                const zC = zC => this.resolveLinks(CC, zC).length,
                                  ZC = function(CC, zC) {
                                    const ZC = CC.map((CC => zC(CC.markdown) + 2)),
                                      QC = ZC.reduce(((CC, zC) => CC + zC), 0),
                                      wC = QC / Math.ceil(QC / XQ),
                                      bC = [];
                                    let nC = 0;
                                    return CC.forEach(((CC, zC) => {
                                      const QC = ZC[zC];
                                      (0 === bC.length || nC + QC > XQ || nC + QC / 2 > wC) && (bC.push([]), nC = 0), bC.at(-1).push(CC), nC += QC
                                    })), bC
                                  }(function(CC, zC) {
                                    return uQ(CC, (CC => CC.startsWith("## "))).flatMap((CC => {
                                      var ZC;
                                      const QC = null !== (ZC = rQ(CC, 2)[0]) && void 0 !== ZC ? ZC : "";
                                      if (zC(CC) <= XQ) return [{
                                        markdown: CC,
                                        section: QC
                                      }];
                                      let wC = !1,
                                        bC = "";
                                      return uQ(CC, (CC => {
                                        const zC = wC && "" !== CC.trim();
                                        return wC = "" === CC.trim(), zC
                                      })).map((CC => {
                                        var zC;
                                        const ZC = rQ(CC, 3),
                                          wC = CC.startsWith("### ") ? ZC[0] : bC;
                                        return bC = null !== (zC = ZC.at(-1)) && void 0 !== zC ? zC : bC, {
                                          markdown: CC,
                                          section: QC || wC
                                        }
                                      }))
                                    }))
                                  }(sQ(CC), zC), zC);
                                return {
                                  page: CC,
                                  groups: ZC.length > 1 ? ZC : []
                                }
                              }));
                              for (const {
                                  page: QC,
                                  groups: wC
                                }
                                of ZC) wC.forEach(((CC, zC) => {
                                const ZC = (0, EQ.t)(QC.slug, zC);
                                for (const wC of CC.flatMap((CC => [...rQ(CC.markdown, 2), ...rQ(CC.markdown, 3)]))) {
                                  const CC = `${QC.id}#${(0,iC.p)(wC)}`;
                                  this.partPaths.has(CC) || this.partPaths.set(CC, ZC)
                                }
                              }));
                              this.pages = ZC.map((CC => {
                                let {
                                  page: zC,
                                  groups: ZC
                                } = CC;
                                return {
                                  page: zC,
                                  path: (0, EQ.p)(zC.slug),
                                  markdown: `# ${zC.title}\n\n${this.resolveLinks(zC,sQ(zC))}\n`,
                                  parts: ZC.map(((CC, QC) => this.renderPart(zC, CC, QC, ZC.length)))
                                }
                              }))
                            }
                            url(CC) {
                              return `${this.origin}${CC}`
                            }
                            getPage(CC) {
                              return this.pages.find((zC => zC.page.id === CC))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((CC => (CC.parts.length > 0 ? CC.parts : [{
                                path: CC.path,
                                label: "",
                                markdown: CC.markdown
                              }]).filter((CC => CC.markdown.length > EQ.b))))
                            }
                            markdownUrl(CC, zC) {
                              const ZC = zC && this.partPaths.get(`${CC.id}#${zC}`) || (0, EQ.p)(CC.slug);
                              return this.url(zC ? `${ZC}#${zC}` : ZC)
                            }
                            resolveLinks(CC, zC) {
                              return zC.replace(/\]\((#[^)]+)\)/g, ((zC, ZC) => {
                                var QC;
                                const wC = null !== (QC = aC(ZC)) && void 0 !== QC ? QC : this.samePageTarget(CC, ZC);
                                return wC ? `](${this.markdownUrl(wC.page,wC.anchor)})` : zC
                              }))
                            }
                            samePageTarget(CC, zC) {
                              const ZC = (0, iC.p)(zC.slice(1));
                              return TC(CC, ZC) ? {
                                page: CC,
                                anchor: ZC
                              } : null
                            }
                            renderPart(CC, zC, ZC, QC) {
                              const wC = function(CC) {
                                  const zC = CC.map((CC => CC.section)).filter(Boolean);
                                  if (0 === zC.length) return "";
                                  const ZC = zC[0],
                                    QC = zC.at(-1);
                                  return ZC === QC ? ZC : `${ZC} to ${QC}`
                                }(zC),
                                bC = zC.map((CC => CC.markdown)).join("\n\n"),
                                nC = wC ? `It covers ${wC}. ` : "",
                                fC = `Part ${ZC+1} of ${QC} of [${CC.title}](${this.url((0,EQ.p)(CC.slug))}). ${nC}[llms.txt](${this.url(EQ.g)}) lists every part.`;
                              return {
                                path: (0, EQ.t)(CC.slug, ZC),
                                label: wC,
                                markdown: `# ${CC.title}, part ${ZC+1} of ${QC}\n\n${fC}\n\n${this.resolveLinks(CC,bC)}\n`
                              }
                            }
                            llmsTxt(CC) {
                              const zC = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${aQ(EQ.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const ZC of cC) {
                                zC.push("", `## ${ZC.title}`, "");
                                for (const CC of ZC.pageIds) {
                                  const ZC = this.getPage(CC),
                                    {
                                      page: QC,
                                      parts: wC
                                    } = ZC,
                                    bC = `About ${aQ(ZC.markdown.length)} tokens${wC.length>0?`, in ${wC.length} parts:`:"."}`;
                                  zC.push(`- [${QC.title}](${this.url(ZC.path)}): ${QC.summary} ${bC}`), wC.forEach(((CC, ZC) => {
                                    zC.push(`  - [Part ${ZC+1}${CC.label?`: ${CC.label}`:""}](${this.url(CC.path)})`)
                                  }))
                                }
                              }
                              return zC.push("", "## Optional", "", `- [Every page in one file](${this.url(EQ.d)}): About ${aQ(CC.length)} tokens, for a model with a large context window.`, ""), zC.join("\n")
                            }
                            llmsFullTxt() {
                              return cC.flatMap((CC => CC.pageIds.map((CC => this.getPage(CC).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const CC = this.llmsFullTxt(),
                                zC = this.llmsTxt(CC),
                                ZC = new Map([
                                  [EQ.m, zC],
                                  [EQ.g, zC],
                                  [EQ.d, CC]
                                ]);
                              for (const QC of this.pages) {
                                ZC.set(QC.path, QC.markdown);
                                for (const CC of QC.parts) ZC.set(CC.path, CC.markdown)
                              }
                              return ZC
                            }
                          }

                          function aQ(CC) {
                            return `${Math.max(1,Math.round(CC/4e3))}K`
                          }
                          let tQ = null;

                          function DQ() {
                            return tQ ??= new TQ(XC, lQ.d), tQ
                          }
                          const jQ = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function yQ(CC) {
                            return DQ().getPage(CC.id).parts.length > 0 ? `Read ${EQ.k}, then the parts of the Bloxd Code API's ${CC.title} page it lists, so I can ask questions about it.` : `Read ${lQ.d}${(0,EQ.p)(CC.slug)} so I can ask questions about it. ${EQ.k} lists every page of the Bloxd Code API docs.`
                          }

                          function LQ(CC) {
                            let {
                              page: zC
                            } = CC;
                            const [ZC, QC] = GC();
                            return (0, gC.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, gC.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  QC(DQ().getPage(zC.id).markdown)
                                },
                                children: [(0, gC.jsx)(pC, {
                                  name: !1 === (null === ZC || void 0 === ZC ? void 0 : ZC.failed) ? "check" : "copy"
                                }), (0, gC.jsx)("span", {
                                  children: ZC ? ZC.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), jQ.map((CC => (0, gC.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${CC.url}${encodeURIComponent(yQ(zC))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, gC.jsx)(pC, {
                                  name: "external-link"
                                }), (0, gC.jsxs)("span", {
                                  children: ["Open in ", CC.name]
                                })]
                              }, CC.name)))]
                            })
                          }

                          function UQ(CC) {
                            return `#${[0,1,2].map((zC=>Math.round(Math.min(255,Math.max(0,CC[zC]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function BQ(CC) {
                            return [parseInt(CC.slice(1, 3), 16), parseInt(CC.slice(3, 5), 16), parseInt(CC.slice(5, 7), 16)]
                          }

                          function OQ(CC) {
                            let {
                              label: zC,
                              min: ZC,
                              max: QC,
                              step: wC,
                              low: bC,
                              high: nC,
                              onChange: fC
                            } = CC;
                            return (0, gC.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, gC.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, gC.jsx)("span", {
                                  children: zC
                                }), (0, gC.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: bC === nC ? bC : `${bC}\u2013${nC}`
                                })]
                              }), (0, gC.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, gC.jsx)("input", {
                                  type: "range",
                                  min: ZC,
                                  max: QC,
                                  step: wC,
                                  value: Math.min(QC, bC),
                                  "aria-label": `Minimum ${zC.toLowerCase()}`,
                                  onChange: CC => {
                                    const zC = Number(CC.target.value);
                                    fC(zC, Math.max(zC, nC))
                                  }
                                }), (0, gC.jsx)("input", {
                                  type: "range",
                                  min: ZC,
                                  max: QC,
                                  step: wC,
                                  value: Math.min(QC, nC),
                                  "aria-label": `Maximum ${zC.toLowerCase()}`,
                                  onChange: CC => {
                                    const zC = Number(CC.target.value);
                                    fC(Math.min(zC, bC), zC)
                                  }
                                })]
                              })]
                            })
                          }

                          function kQ(CC) {
                            let {
                              label: zC,
                              min: ZC,
                              max: QC,
                              step: wC,
                              value: bC,
                              onChange: nC,
                              format: fC = String
                            } = CC;
                            return (0, gC.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, gC.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, gC.jsx)("span", {
                                  children: zC
                                }), (0, gC.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: fC(bC)
                                })]
                              }), (0, gC.jsx)("input", {
                                type: "range",
                                min: ZC,
                                max: QC,
                                step: wC,
                                value: Math.min(QC, Math.max(ZC, bC)),
                                "aria-label": zC,
                                onChange: CC => {
                                  nC(Number(CC.target.value))
                                }
                              })]
                            })
                          }

                          function VQ(CC) {
                            let {
                              opts: zC,
                              onChange: ZC
                            } = CC;
                            const QC = zC.colorGradients;
                            if (!tZ(QC)) return (0, gC.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, gC.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, gC.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, gC.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: QC.map(((CC, zC) => (0, gC.jsx)("input", {
                                  type: "color",
                                  value: UQ(CC.color),
                                  "aria-label": `Colour ${zC+1}`,
                                  onChange: CC => {
                                    const wC = [...QC];
                                    wC[zC] = {
                                      color: BQ(CC.target.value)
                                    }, ZC(wC)
                                  }
                                }, zC)))
                              })]
                            });
                            const wC = (CC, zC) => {
                              const wC = [...QC];
                              wC[CC] = zC, ZC(wC)
                            };
                            return (0, gC.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, gC.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, gC.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, gC.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), QC.map(((CC, zC) => {
                                var ZC;
                                const QC = null !== (ZC = CC.maxColor) && void 0 !== ZC ? ZC : CC.minColor;
                                return (0, gC.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, gC.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * CC.timeFraction), "%"]
                                  }), (0, gC.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${UQ(CC.minColor)}, ${UQ(QC)})`
                                    }
                                  }), (0, gC.jsx)("input", {
                                    type: "color",
                                    value: UQ(CC.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*CC.timeFraction)}%`,
                                    onChange: ZC => {
                                      wC(zC, {
                                        ...CC,
                                        minColor: [...BQ(ZC.target.value), CC.minColor[3]]
                                      })
                                    }
                                  }), (0, gC.jsx)("input", {
                                    type: "color",
                                    value: UQ(QC),
                                    "aria-label": `Maximum colour at ${Math.round(100*CC.timeFraction)}%`,
                                    onChange: ZC => {
                                      wC(zC, {
                                        ...CC,
                                        maxColor: [...BQ(ZC.target.value), QC[3]]
                                      })
                                    }
                                  })]
                                }, zC)
                              }))]
                            })
                          }
                          const Cw = [-.5, -.5, -.5],
                            zw = [.5, .5, .5],
                            Zw = [0, 1, 2, 3, 4, 5, 6, 7].map((CC => [1 & CC ? zw[0] : Cw[0], 2 & CC ? zw[1] : Cw[1], 4 & CC ? zw[2] : Cw[2]]));class Qw {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(CC, zC, ZC, QC) {
                              const wC = Math.round(31 * zC),
                                bC = Math.round(31 * ZC),
                                nC = Math.round(31 * QC),
                                fC = `${wC}|${bC}|${nC}`;
                              let oC = this.tints.get(CC);
                              (!oC || oC.size > 2e3) && (oC = new Map, this.tints.set(CC, oC));
                              let qC = oC.get(fC);
                              if (qC) return qC;
                              qC = document.createElement("canvas"), qC.width = CC.naturalWidth || 16, qC.height = CC.naturalHeight || 16;
                              const FC = qC.getContext("2d");
                              return FC ? (FC.imageSmoothingEnabled = !1, FC.drawImage(CC, 0, 0, qC.width, qC.height), FC.globalCompositeOperation = "multiply", FC.fillStyle = `rgb(${wC/31*255}, ${bC/31*255}, ${nC/31*255})`, FC.fillRect(0, 0, qC.width, qC.height), FC.globalCompositeOperation = "destination-in", FC.drawImage(CC, 0, 0, qC.width, qC.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), oC.set(fC, qC), qC
                            }
                          }

                          function ww(CC) {
                            let {
                              opts: zC,
                              textureUrl: ZC,
                              burst: wC,
                              paused: bC
                            } = CC;
                            const nC = (0, QC.useRef)(null),
                              fC = (0, QC.useRef)(zC);
                            fC.current = zC;
                            const oC = (0, QC.useRef)(bC);
                            oC.current = bC;
                            const qC = (0, QC.useRef)(null),
                              FC = (0, QC.useRef)(null),
                              WC = (0, QC.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(CC) {
                                let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const ZC = [-.5, -.5, -.5],
                                  QC = [.5, .5, .5];
                                let wC = .5;
                                for (let bC = 0; bC < 40; bC++) {
                                  const bC = jZ(CC, ZC, QC, zC),
                                    nC = Math.max(bC.life / 30, .001);
                                  for (; UZ(bC, CC.gravity, nC);) wC = Math.max(wC, Math.hypot(bC.pos[0], bC.pos[1], bC.pos[2]) + bC.size / 2)
                                }
                                return wC
                              }(zC)))), [zC]),
                              NC = (0, QC.useRef)(WC);
                            return NC.current = WC, (0, QC.useEffect)((() => {
                              if (qC.current = null, !ZC) return;
                              const CC = new Image;
                              let zC = !1;
                              return CC.onload = () => {
                                zC || (qC.current = CC)
                              }, CC.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${ZC}`)
                              }, CC.src = ZC, () => {
                                zC = !0
                              }
                            }), [ZC]), (0, QC.useEffect)((() => {
                              var CC;
                              null === (CC = FC.current) || void 0 === CC || CC.call(FC)
                            }), [zC, wC]), (0, QC.useEffect)((() => {
                              const CC = nC.current,
                                zC = null === CC || void 0 === CC ? void 0 : CC.getContext("2d");
                              if (!CC || !zC) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const ZC = new Qw;
                              let QC = [],
                                wC = 0,
                                bC = -.7,
                                WC = NC.current,
                                MC = performance.now(),
                                gC = 0,
                                SC = !0,
                                pC = null;
                              const PC = () => {
                                const CC = fC.current,
                                  zC = Math.min(400, Math.max(0, Math.ceil(CC.manualEmitCount)));
                                QC = [];
                                for (let ZC = 0; ZC < zC; ZC++) QC.push(jZ(CC, Cw, zw, Math.random));
                                wC = 0
                              };
                              FC.current = PC, PC();
                              const GC = nC => {
                                gC = requestAnimationFrame(GC);
                                const FC = Math.min(.05, (nC - MC) / 1e3);
                                if (MC = nC, !SC) return;
                                const RC = window.devicePixelRatio || 1,
                                  AC = Math.round(CC.clientWidth * RC),
                                  xC = Math.round(CC.clientHeight * RC);
                                if (0 === AC || 0 === xC) return;
                                CC.width === AC && CC.height === xC || (CC.width = AC, CC.height = xC);
                                const JC = fC.current;
                                null === pC && (bC += .18 * FC), WC += (NC.current - WC) * Math.min(1, 4 * FC);
                                const IC = .6 * FC;
                                QC = QC.filter((CC => UZ(CC, JC.gravity, IC))), 0 !== QC.length || oC.current || (wC += FC, wC > .6 && PC());
                                const iC = function(CC, zC, ZC, QC) {
                                  const wC = 3.2 * QC,
                                    bC = .44 * Math.min(CC, zC) * wC / QC,
                                    nC = Math.cos(ZC),
                                    fC = Math.sin(ZC),
                                    oC = Math.cos(.42),
                                    qC = Math.sin(.42);
                                  return (ZC, QC, FC) => {
                                    const WC = ZC * fC + FC * nC,
                                      NC = wC - (QC * qC + WC * oC);
                                    if (NC < .05) return null;
                                    const MC = bC / NC;
                                    return {
                                      x: CC / 2 + (ZC * nC - FC * fC) * MC,
                                      y: zC / 2 - (QC * oC - WC * qC) * MC,
                                      scale: MC,
                                      depth: NC
                                    }
                                  }
                                }(AC, xC, bC, WC);
                                ! function(CC, zC, ZC, QC, wC) {
                                  const bC = CC.createLinearGradient(0, 0, 0, ZC);
                                  bC.addColorStop(0, "#23262d"), bC.addColorStop(1, "#16181c"), CC.globalCompositeOperation = "source-over", CC.globalAlpha = 1, CC.fillStyle = bC, CC.fillRect(0, 0, zC, ZC);
                                  const nC = (zC, ZC) => {
                                      const wC = QC(zC[0], zC[1], zC[2]),
                                        bC = QC(ZC[0], ZC[1], ZC[2]);
                                      wC && bC && (CC.beginPath(), CC.moveTo(wC.x, wC.y), CC.lineTo(bC.x, bC.y), CC.stroke())
                                    },
                                    fC = Math.ceil(wC) + 1,
                                    oC = Cw[1];
                                  CC.lineWidth = 1, CC.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let qC = -fC; qC <= fC; qC++) nC([qC + .5, oC, .5 - fC], [qC + .5, oC, fC + .5]), nC([.5 - fC, oC, qC + .5], [fC + .5, oC, qC + .5]);
                                  CC.strokeStyle = "rgba(255, 255, 255, 0.28)", CC.setLineDash([4, 4]);
                                  for (const qC of Zw)
                                    for (const CC of Zw) {
                                      const zC = [0, 1, 2].filter((zC => qC[zC] !== CC[zC]));
                                      1 === zC.length && qC[zC[0]] < CC[zC[0]] && nC(qC, CC)
                                    }
                                  CC.setLineDash([])
                                }(zC, AC, xC, iC, WC);
                                const vC = qC.current,
                                  eC = QC.map((CC => ({
                                    particle: CC,
                                    at: iC(CC.pos[0], CC.pos[1], CC.pos[2])
                                  }))).filter((CC => null !== CC.at)).sort(((CC, zC) => zC.at.depth - CC.at.depth));
                                zC.imageSmoothingEnabled = !1;
                                for (const CC of function(CC) {
                                    switch (CC) {
                                      case uZ.d.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case uZ.d.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case uZ.d.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case uZ.d.MultiplyAdd:
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
                                  }(JC.blendMode)) {
                                  zC.globalCompositeOperation = CC.operation;
                                  for (const {
                                      particle: QC,
                                      at: wC
                                    }
                                    of eC) {
                                    const [bC, nC, fC, oC] = LZ(QC), qC = Math.max(1, QC.size * wC.scale);
                                    zC.globalAlpha = CC.usesAlpha ? Math.min(1, Math.max(0, oC)) : 1, vC ? zC.drawImage(ZC.get(vC, bC, nC, fC), wC.x - qC / 2, wC.y - qC / 2, qC, qC) : (zC.fillStyle = `rgb(${255*bC}, ${255*nC}, ${255*fC})`, zC.fillRect(wC.x - qC / 2, wC.y - qC / 2, qC, qC))
                                  }
                                }
                                zC.globalCompositeOperation = "source-over", zC.globalAlpha = 1
                              };
                              gC = requestAnimationFrame(GC);
                              const RC = new IntersectionObserver((CC => {
                                let [zC] = CC;
                                SC = zC.isIntersecting
                              }));
                              RC.observe(CC);
                              const AC = zC => {
                                  pC = zC.clientX, CC.setPointerCapture(zC.pointerId)
                                },
                                xC = CC => {
                                  null !== pC && (bC += .01 * (CC.clientX - pC), pC = CC.clientX)
                                },
                                JC = () => {
                                  pC = null
                                };
                              return CC.addEventListener("pointerdown", AC), CC.addEventListener("pointermove", xC), CC.addEventListener("pointerup", JC), CC.addEventListener("pointercancel", JC), () => {
                                cancelAnimationFrame(gC), RC.disconnect(), FC.current = null, CC.removeEventListener("pointerdown", AC), CC.removeEventListener("pointermove", xC), CC.removeEventListener("pointerup", JC), CC.removeEventListener("pointercancel", JC)
                              }
                            }), []), (0, gC.jsx)("canvas", {
                              ref: nC,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${zC.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const bw = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            nw = [{
                              mode: uZ.d.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: uZ.d.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: uZ.d.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: uZ.d.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: uZ.d.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            fw = (0, QC.forwardRef)((function(CC, zC) {
                              var ZC, wC;
                              let {
                                textures: nC
                              } = CC;
                              const fC = RQ(),
                                oC = (0, QC.useRef)(null),
                                [qC, FC] = (0, QC.useState)(sZ),
                                [WC, NC] = (0, QC.useState)("example"),
                                [MC, SC] = (0, QC.useState)(0),
                                [PC, GC] = (0, QC.useState)(!1),
                                AC = CC => {
                                  const zC = "example" === CC ? sZ : rZ(CC);
                                  zC && (FC(zC), NC(CC))
                                };
                              (0, QC.useImperativeHandle)(zC, (() => ({
                                preview: CC => {
                                  var zC;
                                  AC(CC), null === (zC = oC.current) || void 0 === zC || zC.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const xC = CC => {
                                  FC({
                                    ...qC,
                                    ...CC
                                  }), NC(null)
                                },
                                JC = function(CC, zC) {
                                  if (null !== zC) return `${VZ}    presetId: "${zC}",\n${CQ}\n})`;
                                  const ZC = CC.velocityGradients.map((CC => `        {\n            timeFraction: ${BZ(CC.timeFraction)},\n            factor: ${BZ(CC.factor)},\n            factor2: ${BZ(CC.factor2)},\n        },`)),
                                    QC = [`    dir1: ${OZ(CC.dir1)},`, `    dir2: ${OZ(CC.dir2)},`, CQ, `    texture: "${CC.texture}",`, `    minLifeTime: ${BZ(CC.minLifeTime)},`, `    maxLifeTime: ${BZ(CC.maxLifeTime)},`, `    minEmitPower: ${BZ(CC.minEmitPower)},`, `    maxEmitPower: ${BZ(CC.maxEmitPower)},`, `    minSize: ${BZ(CC.minSize)},`, `    maxSize: ${BZ(CC.maxSize)},`, `    manualEmitCount: ${BZ(CC.manualEmitCount)},`, `    gravity: ${OZ(CC.gravity)},`, `    colorGradients: ${kZ(CC.colorGradients,"    ")},`, `    velocityGradients: ${ZC.length>0?`[\n${ZC.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${BZ(CC.blendMode)},`];
                                  return void 0 !== CC.hideDist && QC.push(`    hideDist: ${BZ(CC.hideDist)},`), `${VZ}${QC.join("\n")}\n})`
                                }(qC, null === WC || "example" === WC ? null : WC),
                                iC = nC.includes(qC.texture) ? nC : [...nC, qC.texture];
                              return (0, gC.jsxs)("section", {
                                ref: oC,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, gC.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, gC.jsxs)("div", {
                                    children: [(0, gC.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, gC.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, gC.jsx)(RC, {
                                    text: JC,
                                    label: "Copy code"
                                  })]
                                }), (0, gC.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, gC.jsx)("button", {
                                    type: "button",
                                    className: bC()("DocsVariantChip", {
                                      Active: "example" === WC
                                    }),
                                    onClick: () => {
                                      AC("example")
                                    },
                                    children: "Example"
                                  }), bw.filter((CC => null !== rZ(CC))).map((CC => (0, gC.jsx)("button", {
                                    type: "button",
                                    className: bC()("DocsVariantChip", {
                                      Active: WC === CC
                                    }),
                                    onClick: () => {
                                      AC(CC)
                                    },
                                    children: CC
                                  }, CC))), (0, gC.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== WC && void 0 !== WC ? WC : "custom",
                                    "aria-label": "Preset",
                                    onChange: CC => {
                                      AC(CC.target.value)
                                    },
                                    children: [(0, gC.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === WC && (0, gC.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), cZ.b.map((CC => (0, gC.jsx)("option", {
                                      value: CC,
                                      children: CC
                                    }, CC)))]
                                  })]
                                }), (0, gC.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, gC.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, gC.jsx)(ww, {
                                      opts: qC,
                                      textureUrl: null !== (ZC = null === fC || void 0 === fC ? void 0 : fC.getParticleTextureUrl(qC.texture)) && void 0 !== ZC ? ZC : null,
                                      burst: MC,
                                      paused: PC
                                    }), (0, gC.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, gC.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          SC(MC + 1)
                                        },
                                        children: [(0, gC.jsx)(pC, {
                                          name: "replay"
                                        }), (0, gC.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, gC.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": PC,
                                        onClick: () => {
                                          GC(!PC)
                                        },
                                        children: [(0, gC.jsx)(pC, {
                                          name: PC ? "play" : "pause"
                                        }), (0, gC.jsx)("span", {
                                          children: PC ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, gC.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, gC.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, gC.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, gC.jsx)("span", {
                                          children: "Texture"
                                        }), (0, gC.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: qC.texture
                                        })]
                                      }), (0, gC.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: iC.map((CC => {
                                          var zC;
                                          const ZC = null !== (zC = null === fC || void 0 === fC ? void 0 : fC.getParticleTextureUrl(CC)) && void 0 !== zC ? zC : null;
                                          return (0, gC.jsx)("button", {
                                            type: "button",
                                            className: bC()("DocsParticleTexture", {
                                              Active: qC.texture === CC
                                            }),
                                            title: CC,
                                            "aria-label": CC,
                                            "aria-pressed": qC.texture === CC,
                                            onClick: () => {
                                              xC({
                                                texture: CC
                                              })
                                            },
                                            children: ZC ? (0, gC.jsx)("img", {
                                              src: ZC,
                                              alt: ""
                                            }) : (0, gC.jsx)(pC, {
                                              name: "image"
                                            })
                                          }, CC)
                                        }))
                                      })]
                                    }), (0, gC.jsx)(kQ, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: qC.manualEmitCount,
                                      onChange: CC => {
                                        xC({
                                          manualEmitCount: CC
                                        })
                                      }
                                    }), (0, gC.jsx)(OQ, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: qC.minLifeTime,
                                      high: qC.maxLifeTime,
                                      onChange: (CC, zC) => {
                                        xC({
                                          minLifeTime: CC,
                                          maxLifeTime: zC
                                        })
                                      }
                                    }), (0, gC.jsx)(OQ, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: qC.minEmitPower,
                                      high: qC.maxEmitPower,
                                      onChange: (CC, zC) => {
                                        xC({
                                          minEmitPower: CC,
                                          maxEmitPower: zC
                                        })
                                      }
                                    }), (0, gC.jsx)(OQ, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: qC.minSize,
                                      high: qC.maxSize,
                                      onChange: (CC, zC) => {
                                        xC({
                                          minSize: CC,
                                          maxSize: zC
                                        })
                                      }
                                    }), (0, gC.jsx)(kQ, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (wC = qC.gravity[1]) && void 0 !== wC ? wC : 0,
                                      onChange: CC => {
                                        var zC, ZC;
                                        xC({
                                          gravity: [null !== (zC = qC.gravity[0]) && void 0 !== zC ? zC : 0, CC, null !== (ZC = qC.gravity[2]) && void 0 !== ZC ? ZC : 0]
                                        })
                                      }
                                    }), (0, gC.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, gC.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, gC.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, gC.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: qC.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: CC => {
                                          xC({
                                            blendMode: Number(CC.target.value)
                                          })
                                        },
                                        children: nw.map((CC => {
                                          let {
                                            mode: zC,
                                            label: ZC
                                          } = CC;
                                          return (0, gC.jsx)("option", {
                                            value: zC,
                                            children: ZC
                                          }, zC)
                                        }))
                                      })]
                                    }), (0, gC.jsx)(VQ, {
                                      opts: qC,
                                      onChange: CC => {
                                        xC({
                                          colorGradients: CC
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, gC.jsx)(IC, {
                                  code: JC,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var ow = ZC(4397),
                            qw = ZC(1811);

                          function Fw(CC, zC) {
                            return CC ? ow.c.includes(zC) ? CC.getIngameIconUrl(zC) : CC.getItemIconUrl(zC) : null
                          }

                          function Ww(CC) {
                            var zC, ZC, QC;
                            let {
                              part: wC,
                              assets: nC
                            } = CC;
                            const fC = Fw(nC, wC.icon),
                              oC = null !== (zC = null === (ZC = wC.style) || void 0 === ZC ? void 0 : ZC.fontSize) && void 0 !== zC ? zC : "1.8em",
                              qC = (0, cz.Wb)(wC.style);
                            return (0, gC.jsxs)("span", {
                              className: bC()("DocsBloxdTextIcon", {
                                Missing: !fC
                              }),
                              style: {
                                width: oC,
                                height: oC,
                                opacity: null === (QC = wC.style) || void 0 === QC ? void 0 : QC.opacity
                              },
                              title: fC ? void 0 : `No Bloxd icon, item or block is called "${wC.icon}"`,
                              children: [fC && qC && (0, gC.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: qC,
                                  maskImage: `url("${fC}")`,
                                  WebkitMaskImage: `url("${fC}")`
                                }
                              }), fC ? (0, gC.jsx)("img", {
                                src: fC,
                                alt: "",
                                className: bC()({
                                  Tinted: qC
                                })
                              }) : (0, gC.jsx)(pC, {
                                name: "image"
                              })]
                            })
                          }

                          function Nw(CC) {
                            let {
                              parts: zC,
                              className: ZC
                            } = CC;
                            const QC = RQ(),
                              wC = [];
                            let nC = [];
                            const fC = CC => {
                              nC.length > 0 && (wC.push((0, gC.jsx)(qw.e, {
                                text: nC
                              }, `run-${CC}`)), nC = [])
                            };
                            return zC.forEach(((CC, zC) => {
                              "icon" !== az(CC) || rz(CC.icon) ? nC.push(CC) : (fC(zC), wC.push((0, gC.jsx)(Ww, {
                                part: CC,
                                assets: QC
                              }, `icon-${zC}`)))
                            })), fC(zC.length), (0, gC.jsx)("div", {
                              className: bC()("DocsStyledTextPreview", ZC),
                              children: wC
                            })
                          }
                          const Mw = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let gw = null;

                          function Sw(CC) {
                            if (gw ??= document.createElement("canvas").getContext("2d"), !gw) return "#000000";
                            gw.fillStyle = "#000000", gw.fillStyle = CC;
                            const zC = gw.fillStyle;
                            return zC.startsWith("#") ? zC : "#000000"
                          }

                          function pw(CC) {
                            let {
                              value: zC,
                              label: ZC,
                              onChange: QC
                            } = CC;
                            return (0, gC.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, gC.jsx)("input", {
                                type: "color",
                                value: Sw(zC),
                                "aria-label": `${ZC} picker`,
                                onChange: CC => {
                                  QC(CC.target.value)
                                }
                              }), (0, gC.jsx)("input", {
                                type: "text",
                                value: zC,
                                placeholder: "#ffb914 or gold",
                                "aria-label": ZC,
                                spellCheck: !1,
                                onChange: CC => {
                                  QC(CC.target.value)
                                }
                              })]
                            })
                          }

                          function Pw(CC) {
                            let {
                              value: zC,
                              fontAwesomeIcons: ZC,
                              onChange: wC
                            } = CC;
                            const nC = RQ(),
                              [fC, oC] = (0, QC.useState)(rz(zC) ? "fontAwesome" : "bloxd"),
                              [qC, FC] = (0, QC.useState)(""),
                              WC = qC.trim().toLowerCase(),
                              NC = "bloxd" === fC ? ow.c : ZC,
                              MC = WC ? NC.filter((CC => CC.toLowerCase().includes(WC))) : NC;
                            return (0, gC.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, gC.jsx)("input", {
                                type: "text",
                                value: zC,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: CC => {
                                  wC(CC.target.value)
                                }
                              }), (0, gC.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, gC.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((CC => (0, gC.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": fC === CC,
                                    className: bC()("DocsVariantChip", {
                                      Active: fC === CC
                                    }),
                                    onClick: () => {
                                      oC(CC)
                                    },
                                    children: "bloxd" === CC ? `Bloxd icons (${ow.c.length})` : `Font Awesome (${ZC.length})`
                                  }, CC))), (0, gC.jsx)("input", {
                                    type: "search",
                                    value: qC,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: CC => {
                                      FC(CC.target.value)
                                    }
                                  })
                                ]
                              }), (0, gC.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [MC.map((CC => {
                                  const ZC = "bloxd" === fC ? Fw(nC, CC) : null;
                                  return (0, gC.jsx)("button", {
                                    type: "button",
                                    title: CC,
                                    "aria-label": CC,
                                    "aria-pressed": CC === zC,
                                    className: bC()("DocsIconPickerOption", {
                                      Active: CC === zC
                                    }),
                                    onClick: () => {
                                      wC(CC)
                                    },
                                    children: "fontAwesome" === fC ? (0, gC.jsx)(AZ.c, {
                                      name: CC
                                    }) : ZC ? (0, gC.jsx)("img", {
                                      src: ZC,
                                      alt: ""
                                    }) : (0, gC.jsx)(pC, {
                                      name: "image"
                                    })
                                  }, CC)
                                })), 0 === MC.length && (0, gC.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", qC, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function Gw(CC) {
                            let {
                              property: zC,
                              value: ZC,
                              fontAwesomeIcons: QC,
                              onChange: wC
                            } = CC;
                            const {
                              field: bC,
                              label: nC
                            } = zC, fC = CC => "" !== CC || zC.isRequired ? CC : void 0;
                            switch (bC.kind) {
                              case "text":
                                return bC.multiline ? (0, gC.jsx)("textarea", {
                                  value: String(null !== ZC && void 0 !== ZC ? ZC : ""),
                                  rows: 2,
                                  "aria-label": nC,
                                  onChange: CC => {
                                    wC(CC.target.value)
                                  }
                                }) : (0, gC.jsx)("input", {
                                  type: "text",
                                  value: String(null !== ZC && void 0 !== ZC ? ZC : ""),
                                  "aria-label": nC,
                                  onChange: CC => {
                                    wC(fC(CC.target.value))
                                  }
                                });
                              case "size":
                                return (0, gC.jsx)("input", {
                                  type: "text",
                                  value: String(null !== ZC && void 0 !== ZC ? ZC : ""),
                                  placeholder: zC.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": nC,
                                  spellCheck: !1,
                                  onChange: CC => {
                                    wC(fC(CC.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, gC.jsx)(pw, {
                                  value: String(null !== ZC && void 0 !== ZC ? ZC : ""),
                                  label: nC,
                                  onChange: CC => {
                                    wC(fC(CC))
                                  }
                                });
                              case "colours": {
                                const CC = Array.isArray(ZC) ? ZC : [],
                                  zC = CC => {
                                    wC(CC.length > 0 ? CC : void 0)
                                  };
                                return (0, gC.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [CC.map(((ZC, QC) => (0, gC.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, gC.jsx)(pw, {
                                      value: ZC,
                                      label: `${nC} ${QC+1}`,
                                      onChange: ZC => {
                                        zC(CC.map(((CC, zC) => zC === QC ? ZC : CC)))
                                      }
                                    }), (0, gC.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${QC+1}`,
                                      onClick: () => {
                                        zC(CC.filter(((CC, zC) => zC !== QC)))
                                      },
                                      children: (0, gC.jsx)(pC, {
                                        name: "cross"
                                      })
                                    })]
                                  }, QC))), (0, gC.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var ZC;
                                      zC([...CC, null !== (ZC = CC.at(-1)) && void 0 !== ZC ? ZC : "#ffffff"])
                                    },
                                    children: [(0, gC.jsx)(pC, {
                                      name: "plus"
                                    }), 0 === CC.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var oC;
                                const CC = "number" === typeof ZC ? ZC : Number(null !== (oC = zC.defaultText) && void 0 !== oC ? oC : 0);
                                return (0, gC.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, gC.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: CC,
                                    "aria-label": nC,
                                    onChange: CC => {
                                      wC(Number(CC.target.value))
                                    }
                                  }), (0, gC.jsx)("output", {
                                    children: CC.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, gC.jsxs)("select", {
                                  value: String(null !== ZC && void 0 !== ZC ? ZC : ""),
                                  "aria-label": nC,
                                  onChange: CC => {
                                    wC(fC(CC.target.value))
                                  },
                                  children: [!zC.isRequired && (0, gC.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", zC.defaultText, ")"]
                                  }), bC.options.map((CC => (0, gC.jsx)("option", {
                                    value: CC,
                                    children: CC
                                  }, CC)))]
                                });
                              case "icon":
                                return (0, gC.jsx)(Pw, {
                                  value: String(null !== ZC && void 0 !== ZC ? ZC : ""),
                                  fontAwesomeIcons: QC,
                                  onChange: wC
                                })
                            }
                          }

                          function Rw(CC) {
                            let zC;
                            try {
                              zC = JSON.parse(CC)
                            } catch (ZC) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${ZC.message}`
                              }
                            }
                            return ZZ(zC) ? {
                              part: zC,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function Aw(CC) {
                            let {
                              parts: zC,
                              index: ZC,
                              fontAwesomeIcons: wC,
                              onChange: bC,
                              lY: nC,
                              onClose: fC
                            } = CC;
                            const oC = (0, QC.useContext)(gz),
                              FC = (0, QC.useRef)(null),
                              WC = zC[ZC],
                              NC = az(WC),
                              [MC, SC] = (0, QC.useState)((() => JSON.stringify(WC, null, 2))),
                              PC = (0, QC.useMemo)((() => "other" === NC ? Rw(MC).error : null), [NC, MC]);
                            (0, QC.useEffect)((() => {
                              var CC;
                              null === (CC = FC.current) || void 0 === CC || CC.focus()
                            }), []);
                            const GC = (0, gC.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: CC => {
                                CC.target === CC.currentTarget && fC()
                              },
                              children: (0, gC.jsxs)("div", {
                                ref: FC,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${ZC+1}: ${sz[NC]}`,
                                tabIndex: -1,
                                onKeyDown: CC => {
                                  "Escape" === CC.key ? (CC.stopPropagation(), fC()) : "Tab" === CC.key && FC.current && function(CC, zC) {
                                    const ZC = Array.from(CC.querySelectorAll(Kz)),
                                      QC = ZC[0],
                                      wC = ZC.at(-1);
                                    if (!QC || !wC) return;
                                    const bC = document.activeElement;
                                    !zC.shiftKey || bC !== QC && bC !== CC ? zC.shiftKey || bC !== wC || (zC.preventDefault(), QC.focus()) : (zC.preventDefault(), wC.focus())
                                  }(FC.current, CC)
                                },
                                children: [(0, gC.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, gC.jsxs)("div", {
                                    children: [(0, gC.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", ZC + 1]
                                    }), (0, gC.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: sz[NC]
                                    })]
                                  }), (0, gC.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: fC,
                                    children: (0, gC.jsx)(pC, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, gC.jsx)(Nw, {
                                  parts: zC,
                                  className: "DocsTextDialogPreview"
                                }), (0, gC.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === NC ? (0, gC.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, gC.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, gC.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: MC,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: CC => {
                                        SC(CC.target.value);
                                        const zC = Rw(CC.target.value);
                                        null !== zC.part && bC(zC.part)
                                      }
                                    }), PC && (0, gC.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: PC
                                    })]
                                  }) : Dz[NC].map((CC => {
                                    const zC = yz(WC, CC.path),
                                      ZC = CC.isRequired ? JSON.stringify(Uz(WC, CC.path)) === JSON.stringify(WC) : void 0 === zC;
                                    return (0, gC.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, gC.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, gC.jsx)("span", {
                                          children: CC.label
                                        }), (0, gC.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: ZC,
                                          "aria-label": `Reset ${CC.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            bC(Uz(WC, CC.path))
                                          },
                                          children: [(0, gC.jsx)(pC, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, gC.jsx)(Gw, {
                                        property: CC,
                                        value: zC,
                                        fontAwesomeIcons: wC,
                                        onChange: zC => {
                                          bC(Lz(WC, CC.path, zC))
                                        }
                                      }), !CC.isRequired && (0, gC.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", CC.defaultText]
                                      })]
                                    }, CC.path.join("."))
                                  }))
                                }), (0, gC.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, gC.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: nC,
                                    children: [(0, gC.jsx)(pC, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, gC.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: fC,
                                    children: "Done"
                                  })]
                                }), (0, gC.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: Mw.map((CC => (0, gC.jsx)("option", {
                                    value: CC
                                  }, CC)))
                                })]
                              })
                            });
                            return oC ? (0, qC.createPortal)(GC, oC) : GC
                          }
                          const xw = [{
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
                            Jw = Object.keys(Tz);

                          function Iw(CC) {
                            let {
                              fontAwesomeIcons: zC
                            } = CC;
                            const [ZC, wC] = (0, QC.useState)(xw[0].parts), [nC, fC] = (0, QC.useState)((() => Vz(xw[0].parts))), [oC, qC] = (0, QC.useState)(null), [FC, WC] = (0, QC.useState)(!1), [NC, MC] = (0, QC.useState)(null), [SC, PC] = (0, QC.useState)(!1), [GC, RC] = (0, QC.useState)(null), AC = (0, QC.useRef)(null), xC = Vz(ZC);
                            (0, QC.useLayoutEffect)((() => {
                              var CC;
                              if (!GC) return;
                              const zC = CC => {
                                  var zC;
                                  return null === (zC = AC.current) || void 0 === zC ? void 0 : zC.querySelector(`[data-focus-key="${CC}"]`)
                                },
                                ZC = zC(GC.key);
                              null === (CC = ZC && !ZC.disabled ? ZC : zC(GC.fallback)) || void 0 === CC || CC.focus(), RC(null)
                            }), [GC]);
                            const JC = CC => {
                                wC(CC), fC(Vz(CC)), qC(null)
                              },
                              iC = CC => {
                                JC(ZC.filter(((zC, ZC) => ZC !== CC))), RC({
                                  key: `edit-${Math.min(CC,ZC.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              vC = (CC, zC) => {
                                const QC = [...ZC],
                                  [wC] = QC.splice(CC, 1);
                                QC.splice(CC + zC, 0, wC), JC(QC);
                                RC({
                                  key: `${zC<0?"up":"down"}-${CC+zC}`,
                                  fallback: `edit-${CC+zC}`
                                })
                              };
                            return (0, gC.jsxs)("section", {
                              ref: AC,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, gC.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, gC.jsxs)("div", {
                                  children: [(0, gC.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, gC.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, gC.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: xw.map((CC => (0, gC.jsx)("button", {
                                  type: "button",
                                  className: bC()("DocsVariantChip", {
                                    Active: xC === Vz(CC.parts)
                                  }),
                                  onClick: () => {
                                    JC(CC.parts)
                                  },
                                  children: CC.label
                                }, CC.label)))
                              }), (0, gC.jsx)(Nw, {
                                parts: ZC,
                                className: "DocsTextEditorPreview"
                              }), (0, gC.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, gC.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, gC.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, gC.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [ZC.map(((CC, zC) => {
                                      const QC = az(CC);
                                      return (0, gC.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, gC.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${zC}`,
                                          "aria-label": `Edit part ${zC+1}, ${sz[QC]}`,
                                          onClick: () => {
                                            MC(zC)
                                          },
                                          children: [(0, gC.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: sz[QC]
                                          }), (0, gC.jsx)(Nw, {
                                            parts: [CC],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== QC && (0, gC.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: Bz(CC)
                                          })]
                                        }), (0, gC.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, gC.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${zC+1} up`,
                                            "data-focus-key": `up-${zC}`,
                                            disabled: 0 === zC,
                                            onClick: () => {
                                              vC(zC, -1)
                                            },
                                            children: (0, gC.jsx)(pC, {
                                              name: "chevron-up"
                                            })
                                          }), (0, gC.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${zC+1} down`,
                                            "data-focus-key": `down-${zC}`,
                                            disabled: zC === ZC.length - 1,
                                            onClick: () => {
                                              vC(zC, 1)
                                            },
                                            children: (0, gC.jsx)(pC, {
                                              name: "chevron-down"
                                            })
                                          }), (0, gC.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${zC+1}`,
                                            onClick: () => {
                                              iC(zC)
                                            },
                                            children: (0, gC.jsx)(pC, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, zC)
                                    })), 0 === ZC.length && (0, gC.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, gC.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: CC => {
                                      "Escape" === CC.key && SC && (CC.stopPropagation(), PC(!1), RC({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, gC.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": SC,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        PC(!SC)
                                      },
                                      children: [(0, gC.jsx)(pC, {
                                        name: "plus"
                                      }), "Add a part", (0, gC.jsx)(pC, {
                                        name: SC ? "chevron-up" : "chevron-down"
                                      })]
                                    }), SC && (0, gC.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: Jw.map((CC => (0, gC.jsx)("li", {
                                        children: (0, gC.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (CC => {
                                              JC([...ZC, Tz[CC]]), PC(!1), MC(ZC.length)
                                            })(CC)
                                          },
                                          children: sz[CC]
                                        })
                                      }, CC)))
                                    })]
                                  })]
                                }), (0, gC.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, gC.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, gC.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": FC,
                                      onClick: () => {
                                        WC(!FC)
                                      },
                                      children: [(0, gC.jsx)(pC, {
                                        name: FC ? "check" : "pencil"
                                      }), FC ? "Done" : "Edit"]
                                    })]
                                  }), FC ? (0, gC.jsxs)(gC.Fragment, {
                                    children: [(0, gC.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: nC,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: CC => {
                                        fC(CC.target.value);
                                        const zC = QZ(CC.target.value);
                                        qC(zC.error), zC.parts && wC(zC.parts)
                                      }
                                    }), oC && (0, gC.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: oC
                                    })]
                                  }) : (0, gC.jsx)(IC, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${xC})`
                                  })]
                                })]
                              }), null !== NC && NC < ZC.length && (0, gC.jsx)(Aw, {
                                parts: ZC,
                                index: NC,
                                fontAwesomeIcons: zC,
                                onChange: CC => {
                                  ((CC, zC) => {
                                    JC(ZC.map(((ZC, QC) => QC === CC ? zC : ZC)))
                                  })(NC, CC)
                                },
                                lY: () => {
                                  iC(NC), MC(null)
                                },
                                onClose: () => {
                                  MC(null), RC({
                                    key: `edit-${NC}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var iw = ZC(4783),
                            vw = ZC(4760),
                            ew = ZC(4775),
                            hw = ZC(4788);
                          const Kw = 40,
                            Yw = 800,
                            dw = 150,
                            mw = 8e3,
                            Hw = 2e3;

                          function Ew(CC, zC) {
                            return 12 * Math.log2(zC / CC)
                          }

                          function lw(CC, zC) {
                            return Math.round(CC * 2 ** (zC / 12) * 10) / 10
                          }

                          function Xw(CC) {
                            return `${CC} ms`
                          }

                          function uw(CC) {
                            return `${CC} st`
                          }
                          const rw = [{
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

                          function sw(CC) {
                            let {
                              synth: zC,
                              onChange: ZC
                            } = CC;
                            const QC = (0, iw.m)(zC);
                            return (0, gC.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, gC.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, gC.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, gC.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, gC.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, gC.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, gC.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: iw.f.map((CC => (0, gC.jsx)("button", {
                                      type: "button",
                                      className: bC()("DocsVariantChip", {
                                        Active: zC.waveform === CC
                                      }),
                                      "aria-pressed": zC.waveform === CC,
                                      onClick: () => {
                                        ZC({
                                          waveform: CC
                                        })
                                      },
                                      children: CC
                                    }, CC)))
                                  })]
                                }), (0, gC.jsx)(kQ, {
                                  label: "Pitch",
                                  min: 0,
                                  max: Ew(Kw, Yw),
                                  step: .1,
                                  value: Ew(Kw, zC.pitchHz),
                                  format: () => `${zC.pitchHz} Hz`,
                                  onChange: CC => {
                                    ZC({
                                      pitchHz: lw(Kw, CC)
                                    })
                                  }
                                }), (0, gC.jsx)(kQ, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: zC.syllableMs,
                                  format: Xw,
                                  onChange: CC => {
                                    ZC({
                                      syllableMs: CC
                                    })
                                  }
                                }), (0, gC.jsx)(kQ, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: zC.volume,
                                  onChange: CC => {
                                    ZC({
                                      volume: CC
                                    })
                                  }
                                })]
                              }), (0, gC.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, gC.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, gC.jsx)(kQ, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: zC.durationMs,
                                  format: Xw,
                                  onChange: CC => {
                                    ZC({
                                      durationMs: CC
                                    })
                                  }
                                }), (0, gC.jsx)(kQ, {
                                  label: "Fade in",
                                  min: 0,
                                  max: QC.durationMs,
                                  step: 1,
                                  value: QC.attackMs,
                                  format: Xw,
                                  onChange: CC => {
                                    ZC({
                                      attackMs: CC
                                    })
                                  }
                                }), (0, gC.jsx)(kQ, {
                                  label: "Fade out",
                                  min: 0,
                                  max: QC.durationMs - QC.attackMs,
                                  step: 1,
                                  value: QC.releaseMs,
                                  format: Xw,
                                  onChange: CC => {
                                    ZC({
                                      releaseMs: CC
                                    })
                                  }
                                }), (0, gC.jsx)(kQ, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: zC.glideSemitones,
                                  format: uw,
                                  onChange: CC => {
                                    ZC({
                                      glideSemitones: CC
                                    })
                                  }
                                }), (0, gC.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, gC.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== zC.lowpassHz,
                                    onChange: CC => {
                                      ZC({
                                        lowpassHz: CC.target.checked ? Hw : null
                                      })
                                    }
                                  }), (0, gC.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== zC.lowpassHz && (0, gC.jsx)(kQ, {
                                  label: "Filter",
                                  min: 0,
                                  max: Ew(dw, mw),
                                  step: .1,
                                  value: Ew(dw, zC.lowpassHz),
                                  format: () => `${zC.lowpassHz} Hz`,
                                  onChange: CC => {
                                    ZC({
                                      lowpassHz: lw(dw, CC)
                                    })
                                  }
                                })]
                              }), (0, gC.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, gC.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), rw.map((CC => {
                                  let {
                                    key: QC,
                                    label: wC,
                                    max: bC
                                  } = CC;
                                  return (0, gC.jsx)(kQ, {
                                    label: wC,
                                    min: 0,
                                    max: bC,
                                    step: .1,
                                    value: zC.intonation[QC],
                                    format: uw,
                                    onChange: CC => {
                                      ZC({
                                        intonation: {
                                          ...zC.intonation,
                                          [QC]: CC
                                        }
                                      })
                                    }
                                  }, QC)
                                }))]
                              })]
                            })
                          }
                          const Tw = Object.keys(iw.i),
                            aw = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function tw(CC) {
                            var zC;
                            const ZC = JSON.stringify((0, iw.m)(CC));
                            return null !== (zC = Tw.find((CC => JSON.stringify((0, iw.m)(iw.i[CC])) === ZC))) && void 0 !== zC ? zC : null
                          }

                          function Dw(CC) {
                            let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof CC || null === CC) return JSON.stringify(CC);
                            return `{\n${Object.entries(CC).map((CC=>{let[ZC,QC]=CC;return`${zC}    ${ZC}: ${Dw(QC,`${zC}    `)},`})).join("\n")}\n${zC}}`
                          }

                          function jw(CC, zC, ZC) {
                            const QC = tw(CC),
                              wC = [`    line: ${JSON.stringify(zC)},`];
                            return ZC && wC.push(`    speakerName: ${JSON.stringify(ZC)},`), wC.push("    voice,"), `const voice = ${QC?JSON.stringify(QC):Dw((0,iw.m)(CC))}\n\napi.setClientOption(playerId, "dialogue", {\n${wC.join("\n")}\n})`
                          }
                          const yw = 400,
                            Lw = 90;
                          let Uw = null;

                          function Bw(CC, zC, ZC) {
                            return Uw ??= new AudioContext, Uw.resume(), (0, hw.b)(Uw, Uw.destination, CC, zC, ZC, (() => {}))
                          }

                          function Ow() {
                            const [CC, zC] = (0, QC.useState)(iw.i.regular), [ZC, wC] = (0, QC.useState)(aw[0]), [nC, fC] = (0, QC.useState)("Innkeeper"), [oC, qC] = (0, QC.useState)(0), FC = FQ((CC => CC.volume)), WC = (0, QC.useRef)(null), NC = (0, QC.useRef)(0), MC = (0, QC.useRef)(0), SC = () => {
                              var CC;
                              null === (CC = WC.current) || void 0 === CC || CC.call(WC), WC.current = null
                            };
                            (0, QC.useEffect)((() => () => {
                              var CC;
                              null === (CC = WC.current) || void 0 === CC || CC.call(WC), window.clearTimeout(NC.current)
                            }), []);
                            const PC = (0, QC.useMemo)((() => ({
                                line: ZC,
                                speakerName: nC || void 0,
                                voice: CC
                              })), [ZC, nC, CC]),
                              GC = (0, QC.useRef)(PC);
                            GC.current = PC;
                            const AC = tw(CC),
                              xC = CC => {
                                window.clearTimeout(NC.current), SC();
                                const {
                                  plan: zC,
                                  synth: ZC
                                } = (0, ew.f)(CC);
                                ZC && (WC.current = Bw(ZC, zC.blips, FC)), qC((CC => CC + 1))
                              },
                              JC = jw(CC, ZC, nC);
                            return (0, gC.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, gC.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, gC.jsxs)("div", {
                                  children: [(0, gC.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, gC.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, gC.jsx)(RC, {
                                  text: JC,
                                  label: "Copy code"
                                })]
                              }), (0, gC.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [Tw.map((CC => (0, gC.jsx)("button", {
                                  type: "button",
                                  className: bC()("DocsVariantChip", {
                                    Active: AC === CC
                                  }),
                                  "aria-pressed": AC === CC,
                                  onClick: () => {
                                    (CC => {
                                      const ZC = iw.i[CC];
                                      zC(ZC), xC({
                                        ...PC,
                                        voice: ZC
                                      })
                                    })(CC)
                                  },
                                  children: CC
                                }, CC))), !AC && (0, gC.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, gC.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, gC.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, gC.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, gC.jsx)(vw.c, {
                                      display: PC
                                    }, oC)
                                  }), (0, gC.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: CC => {
                                      CC.preventDefault(), xC(PC)
                                    },
                                    children: [(0, gC.jsx)("input", {
                                      value: ZC,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: CC => {
                                        wC(CC.target.value)
                                      }
                                    }), (0, gC.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, gC.jsx)(pC, {
                                        name: "play"
                                      }), (0, gC.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, gC.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: aw.map((CC => (0, gC.jsx)("button", {
                                      type: "button",
                                      className: bC()("DocsVariantChip", {
                                        Active: ZC === CC
                                      }),
                                      onClick: () => {
                                        var zC;
                                        wC(zC = CC), xC({
                                          ...PC,
                                          line: zC
                                        })
                                      },
                                      children: CC
                                    }, CC)))
                                  }), (0, gC.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, gC.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, gC.jsx)("input", {
                                      value: nC,
                                      placeholder: "No name",
                                      onChange: CC => {
                                        fC(CC.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, gC.jsx)(sw, {
                                  synth: CC,
                                  onChange: ZC => {
                                    const QC = {
                                      ...CC,
                                      ...ZC
                                    };
                                    zC(QC);
                                    const wC = {
                                        ...PC,
                                        voice: QC
                                      },
                                      bC = performance.now();
                                    if (bC - MC.current >= Lw) {
                                      MC.current = bC, SC();
                                      const CC = (0, ew.f)(wC).plan.blips[0];
                                      CC && (WC.current = Bw((0, iw.m)(QC), [{
                                        ...CC,
                                        atMs: 0
                                      }], FC))
                                    }
                                    window.clearTimeout(NC.current), NC.current = window.setTimeout((() => {
                                      xC(GC.current)
                                    }), yw)
                                  }
                                })]
                              }), (0, gC.jsx)(IC, {
                                code: JC,
                                lang: "ts"
                              })]
                            })
                          }
                          var kw = ZC(4804);
                          const Vw = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            Cb = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            zb = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${Cb}`, "g"), kw.n],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, kw.n]
                            ];

                          function Zb(CC) {
                            return `${CC.pageId}#${CC.anchor}`
                          }
                          let Qb, wb, bb;

                          function nb(CC) {
                            const zC = (0, iC.g)(CC),
                              ZC = new Set;
                            for (const [, , QC] of zC.matchAll(iC.b)) {
                              const CC = QC.startsWith("#") ? aC(QC) : null,
                                zC = CC ? Zb({
                                  pageId: CC.page.id,
                                  anchor: CC.anchor
                                }) : null;
                              null !== zC && (Qb || (Qb = new Set(XC.flatMap((CC => KC(CC.layout) ? sC(CC).sections.map((zC => Zb({
                                pageId: CC.id,
                                anchor: zC.heading.anchor
                              }))) : [])))), Qb).has(zC) && ZC.add(zC)
                            }
                            for (const [, , QC] of zC.matchAll(Vw)) {
                              const CC = Nz(QC);
                              CC && ZC.add(Zb(CC))
                            }
                            return ZC
                          }

                          function fb(CC, zC) {
                            const ZC = new Set,
                              QC = function(CC) {
                                return CC.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(CC);
                            for (const [, wC] of QC.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) ZC.add(wC);
                            for (const [wC, bC] of zb)
                              for (const [, CC] of(0, kw.f)(QC, wC, bC)) zC.has(CC) && ZC.add(CC);
                            return ZC
                          }

                          function ob(CC, zC, ZC, QC) {
                            const wC = CC.get(zC);
                            wC ? !QC && wC.some((CC => CC.pageId === ZC.pageId)) || wC.push(ZC) : CC.set(zC, [ZC])
                          }
                          const qb = /^[A-Za-z_$][\w$]*$/;

                          function Fb(CC) {
                            return qb.test(CC.name) ? CC.name : "options"
                          }

                          function Wb(CC, zC) {
                            const ZC = CC.params.map(Fb).join(", ");
                            return zC ? `${CC.name} = (${ZC}) => {\n\t\n}` : `api.${CC.name}(${ZC})`
                          }

                          function Nb(CC) {
                            let {
                              method: zC,
                              isCallback: ZC
                            } = CC;
                            return (0, gC.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, gC.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [ZC ? (0, gC.jsxs)(gC.Fragment, {
                                  children: [(0, gC.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: zC.name
                                  }), (0, gC.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, gC.jsxs)(gC.Fragment, {
                                  children: [(0, gC.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, gC.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: zC.name
                                  }), (0, gC.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), zC.params.map(((CC, ZC) => (0, gC.jsxs)(QC.Fragment, {
                                  children: [ZC > 0 && (0, gC.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, gC.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${zC.name}-${Fb(CC)}`,
                                    children: CC.name
                                  })]
                                }, CC.name))), (0, gC.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: ZC ? ") => " : ")"
                                }), ZC && !zC.returns && (0, gC.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), zC.returns && zC.returns.type && (0, gC.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!ZC && (0, gC.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, gC.jsx)(vz, {
                                  type: zC.returns.type
                                })]
                              })]
                            })
                          }

                          function Mb(CC) {
                            let {
                              title: zC,
                              references: ZC
                            } = CC;
                            const wC = (0, QC.useContext)(Mz);
                            return (0, gC.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, gC.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: zC
                              }), ZC.map((CC => (0, gC.jsx)(nC.d, {
                                to: DC(wC, uC(CC.pageId), CC.anchor),
                                children: CC.label
                              }, `${CC.pageId}#${CC.anchor}`)))]
                            })
                          }

                          function gb(CC) {
                            var zC, ZC;
                            let {
                              pageId: QC,
                              anchor: wC
                            } = CC;
                            const bC = Zb({
                                pageId: QC,
                                anchor: wC
                              }),
                              nC = null !== (zC = function() {
                                if (!bb) {
                                  bb = new Map;
                                  const QC = new Set(XC.filter((CC => "callbacks" === CC.layout)).flatMap((CC => sC(CC).sections.map((CC => CC.heading.text)))));
                                  for (const wC of XC)
                                    if ("article" === wC.layout || "snippets" === wC.layout)
                                      for (const bC of (0, iC.r)(sC(wC)))
                                        for (const {
                                            code: nC
                                          }
                                          of(0, iC.h)(bC.blocks))
                                          for (const fC of fb(nC, QC)) {
                                            const QC = Wz().get(fC);
                                            if (QC) {
                                              var CC, zC, ZC;
                                              const nC = {
                                                pageId: wC.id,
                                                anchor: null !== (CC = null === (zC = bC.heading) || void 0 === zC ? void 0 : zC.anchor) && void 0 !== CC ? CC : "",
                                                label: null !== (ZC = wC.navTitle) && void 0 !== ZC ? ZC : wC.title
                                              };
                                              ob(bb, Zb(QC), nC, !1)
                                            }
                                          }
                                }
                                return bb
                              }().get(bC)) && void 0 !== zC ? zC : [],
                              fC = null !== (ZC = function() {
                                if (!wb) {
                                  wb = new Map;
                                  const CC = uC("changelog");
                                  for (const zC of sC(CC).sections) {
                                    const ZC = new Set(zC.blocks.flatMap((CC => [...nb(CC)])));
                                    for (const QC of ZC) {
                                      const ZC = {
                                        pageId: CC.id,
                                        anchor: zC.heading.anchor,
                                        label: zC.heading.text
                                      };
                                      ob(wb, QC, ZC, !0)
                                    }
                                  }
                                }
                                return wb
                              }().get(bC)) && void 0 !== ZC ? ZC : [];
                            return 0 === nC.length && 0 === fC.length ? null : (0, gC.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [nC.length > 0 && (0, gC.jsx)(Mb, {
                                title: "Used in",
                                references: nC
                              }), fC.length > 0 && (0, gC.jsx)(Mb, {
                                title: "Changelog",
                                references: fC
                              })]
                            })
                          }

                          function Sb(CC) {
                            let {
                              method: zC,
                              pageId: ZC,
                              anchor: QC,
                              isCallback: wC
                            } = CC;
                            const bC = wC ? void 0 : fz().get(zC.name),
                              nC = zC.description.length > 0 || null === bC || void 0 === bC || !bC.description ? zC.description : (0, iC.u)(bC.description);
                            return (0, gC.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, gC.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, gC.jsx)(qZ, {
                                  level: 2,
                                  text: zC.name,
                                  anchor: QC,
                                  className: "DocsCardTitle"
                                }), (0, gC.jsx)(RC, {
                                  text: Wb(zC, wC),
                                  label: wC ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, gC.jsx)(Nb, {
                                method: zC,
                                isCallback: wC
                              }), bC && null !== bC.deprecation && (0, gC.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, gC.jsx)("strong", {
                                  children: "Deprecated"
                                }), bC.deprecation && (0, gC.jsxs)(gC.Fragment, {
                                  children: [": ", (0, gC.jsx)(Jz, {
                                    text: (fC = bC.deprecation, (0, kw.v)(fC, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, kw.l)("`\\w"), (CC => {
                                      let [zC] = CC;
                                      return Wz().has(zC) ? `\`${zC}\`` : zC
                                    })))
                                  })]
                                })]
                              }), nC.length > 0 && (0, gC.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, gC.jsx)(MZ, {
                                  blocks: nC
                                })
                              }), zC.params.length > 0 && (0, gC.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, gC.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, gC.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: zC.params.map((CC => (0, gC.jsxs)("div", {
                                    id: `${zC.name}-${Fb(CC)}`,
                                    className: "DocsParam",
                                    children: [(0, gC.jsxs)("dt", {
                                      children: [(0, gC.jsx)("code", {
                                        className: "DocsParamName",
                                        children: CC.name
                                      }), (0, gC.jsx)(vz, {
                                        type: CC.type
                                      })]
                                    }), CC.description && (0, gC.jsx)("dd", {
                                      children: (0, gC.jsx)(Jz, {
                                        text: CC.description
                                      })
                                    })]
                                  }, CC.name)))
                                })]
                              }), zC.returns && (zC.returns.type || zC.returns.description.length > 0) && (0, gC.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, gC.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, gC.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [zC.returns.type && (0, gC.jsx)(vz, {
                                    type: zC.returns.type
                                  }), zC.returns.description.length > 0 && (0, gC.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, gC.jsx)(MZ, {
                                      blocks: zC.returns.description
                                    })
                                  })]
                                })]
                              }), (0, gC.jsx)(gb, {
                                pageId: ZC,
                                anchor: QC
                              })]
                            });
                            var fC
                          }

                          function pb(CC) {
                            var zC;
                            return null !== CC.defaultValue && "undefined" !== CC.defaultValue ? CC.defaultValue : null !== (zC = CC.example) && void 0 !== zC ? zC : "value"
                          }

                          function Pb(CC) {
                            let {
                              setting: zC,
                              pageId: ZC,
                              anchor: QC,
                              setterSnippet: wC
                            } = CC;
                            const bC = null === zC.defaultValue ? null : Pz(zC.defaultValue);
                            return (0, gC.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, gC.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, gC.jsx)(qZ, {
                                  level: 2,
                                  text: zC.name,
                                  anchor: QC,
                                  className: "DocsCardTitle"
                                }), (0, gC.jsx)(RC, {
                                  text: wC(zC.name, pb(zC)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, gC.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, gC.jsxs)("div", {
                                  children: [(0, gC.jsx)("dt", {
                                    children: "Type"
                                  }), (0, gC.jsx)("dd", {
                                    children: (0, gC.jsx)(vz, {
                                      type: zC.type
                                    })
                                  })]
                                }), null !== zC.defaultValue && (0, gC.jsxs)("div", {
                                  children: [(0, gC.jsx)("dt", {
                                    children: "Default"
                                  }), (0, gC.jsx)("dd", {
                                    children: (0, gC.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [bC && (0, gC.jsx)(Gz, {
                                        colour: bC
                                      }), zC.defaultValue]
                                    })
                                  })]
                                }), null !== zC.example && (0, gC.jsxs)("div", {
                                  children: [(0, gC.jsx)("dt", {
                                    children: "Example"
                                  }), (0, gC.jsx)("dd", {
                                    children: (0, gC.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: zC.example
                                    })
                                  })]
                                })]
                              }), zC.description.length > 0 && (0, gC.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, gC.jsx)(MZ, {
                                  blocks: zC.description
                                })
                              }), (0, gC.jsx)(gb, {
                                pageId: ZC,
                                anchor: QC
                              })]
                            })
                          }

                          function Gb(CC) {
                            let {
                              section: zC
                            } = CC;
                            return (0, gC.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, gC.jsx)(qZ, {
                                level: 2,
                                text: zC.heading.text,
                                anchor: zC.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, gC.jsx)("div", {
                                className: "DocsProse",
                                children: (0, gC.jsx)(MZ, {
                                  blocks: zC.blocks
                                })
                              })]
                            })
                          }

                          function Rb(CC) {
                            let {
                              section: zC
                            } = CC;
                            return (0, gC.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, gC.jsx)(qZ, {
                                level: zC.heading.level,
                                text: zC.heading.text,
                                anchor: zC.heading.anchor
                              }), (0, gC.jsx)(MZ, {
                                blocks: zC.blocks
                              })]
                            })
                          }
                          const Ab = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function xb(CC) {
                            let {
                              page: zC,
                              section: ZC
                            } = CC;
                            if ("methods" === zC.layout || "callbacks" === zC.layout) return (0, gC.jsx)(Sb, {
                              method: IZ(ZC),
                              pageId: zC.id,
                              anchor: ZC.heading.anchor,
                              isCallback: "callbacks" === zC.layout
                            });
                            if ("settings" === zC.layout) {
                              const CC = function(CC) {
                                const zC = {
                                  name: CC.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const QC of CC.blocks) {
                                  var ZC;
                                  if (JZ(QC)) continue;
                                  const CC = "paragraph" === QC.kind ? QC.text.match(iZ) : null;
                                  if (!CC) {
                                    zC.description.push(QC);
                                    continue
                                  }
                                  const wC = null !== (ZC = xZ(CC[2])) && void 0 !== ZC ? ZC : CC[2];
                                  "Type" === CC[1] ? zC.type = wC : "Default" === CC[1] ? zC.defaultValue = wC : "" !== wC && (zC.example = wC)
                                }
                                return zC.type ? zC : null
                              }(ZC);
                              if (CC) return (0, gC.jsx)(Pb, {
                                setting: CC,
                                pageId: zC.id,
                                anchor: ZC.heading.anchor,
                                setterSnippet: zC.setterSnippet
                              })
                            }
                            return "snippets" === zC.layout ? (0, gC.jsx)(Gb, {
                              section: ZC
                            }) : "changelog" === zC.layout ? (0, gC.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, gC.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, gC.jsx)(qZ, {
                                  level: 2,
                                  text: ZC.heading.text,
                                  anchor: ZC.heading.anchor
                                })
                              }), (0, gC.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, gC.jsx)(MZ, {
                                  blocks: vZ(ZC.blocks)
                                })
                              })]
                            }) : zC.gallery ? (0, gC.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, gC.jsx)(qZ, {
                                level: ZC.heading.level,
                                text: ZC.heading.text,
                                anchor: ZC.heading.anchor
                              }), (0, gC.jsx)(eQ, {
                                kind: zC.gallery,
                                content: sC(zC),
                                blocks: ZC.blocks
                              })]
                            }) : (0, gC.jsx)(Rb, {
                              section: ZC
                            })
                          }

                          function Jb(CC) {
                            let {
                              page: zC,
                              onTocChange: ZC
                            } = CC;
                            const wC = sC(zC),
                              [bC, nC] = (0, QC.useState)(""),
                              fC = "article" !== zC.layout,
                              oC = pZ(zC.gallery) ? zC.gallery : null,
                              qC = null !== oC,
                              FC = bC.trim().toLowerCase(),
                              WC = (0, QC.useRef)(null),
                              NC = (0, QC.useCallback)((CC => {
                                var zC;
                                null === (zC = WC.current) || void 0 === zC || zC.preview(CC)
                              }), []),
                              MC = (0, QC.useMemo)((() => {
                                if (!zC.hasParticlePlayground) return [];
                                const CC = YZ(wC.intro).find((CC => "names" === CC.kind && !CC.names.some((CC => null !== rZ(CC.name)))));
                                return "names" === (null === CC || void 0 === CC ? void 0 : CC.kind) ? CC.names.map((CC => CC.name)) : []
                              }), [zC, wC]),
                              SC = (0, QC.useMemo)((() => {
                                if (!zC.hasTextPlayground) return [];
                                const CC = wC.sections.flatMap((CC => CC.blocks.flatMap((CC => {
                                  var zC;
                                  return (null !== (zC = KZ(CC)) && void 0 !== zC ? zC : []).flatMap((CC => rz(CC.name) ? [CC.name] : []))
                                }))));
                                return [...new Set(CC)]
                              }), [zC, wC]),
                              pC = (0, QC.useMemo)((() => FC ? wC.sections.filter((CC => function(CC, zC) {
                                return !!CC.heading.text.toLowerCase().includes(zC) || CC.blocks.some((CC => (0, iC.g)(CC).toLowerCase().includes(zC)))
                              }(CC, FC))) : wC.sections), [wC, FC]),
                              PC = (0, QC.useMemo)((() => function(CC, zC) {
                                return "article" !== CC.layout ? zC.map((CC => ({
                                  anchor: CC.heading.anchor,
                                  text: CC.heading.text,
                                  level: 2
                                }))) : zC.flatMap((CC => {
                                  const zC = CC.blocks.flatMap((CC => "heading" === CC.kind && 3 === CC.level ? [{
                                    anchor: CC.anchor,
                                    text: CC.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: CC.heading.anchor,
                                    text: CC.heading.text,
                                    level: 2
                                  }, ...zC]
                                }))
                              }(zC, pC)), [zC, pC]);
                            return (0, QC.useEffect)((() => {
                              ZC(PC)
                            }), [PC, ZC]), (0, gC.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, gC.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, gC.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: wC.title || zC.title
                                }), (0, gC.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: zC.summary
                                }), (0, gC.jsx)(LQ, {
                                  page: zC
                                }), fC && (0, gC.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, gC.jsxs)("span", {
                                    children: [(0, gC.jsx)("strong", {
                                      children: wC.sections.length
                                    }), " ", Ab[zC.layout]]
                                  })
                                })]
                              }), "" === zC.slug && (0, gC.jsx)(KQ, {}), oC && (0, gC.jsx)(HQ, {
                                kind: oC
                              }, oC), zC.hasParticlePlayground && (0, gC.jsx)(fw, {
                                ref: WC,
                                textures: MC
                              }), !qC && wC.intro.length > 0 && (0, gC.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: zC.gallery ? (0, gC.jsx)(PQ.Provider, {
                                  value: zC.hasParticlePlayground ? NC : null,
                                  children: (0, gC.jsx)(eQ, {
                                    kind: zC.gallery,
                                    content: wC,
                                    blocks: wC.intro
                                  })
                                }) : (0, gC.jsx)(MZ, {
                                  blocks: vZ(wC.intro)
                                })
                              }), zC.hasTextPlayground && (0, gC.jsx)(Iw, {
                                fontAwesomeIcons: SC
                              }), zC.hasVoicePlayground && (0, gC.jsx)(Ow, {}), zC.childPageIds && (0, gC.jsx)(KQ, {
                                cards: zC.childPageIds.map((CC => ({
                                  pageId: CC
                                }))),
                                label: zC.title
                              }), fC && (0, gC.jsx)(RZ, {
                                className: "DocsFilterBar",
                                value: bC,
                                placeholder: `Filter ${wC.sections.length} ${Ab[zC.layout]}\u2026`,
                                label: `Filter ${Ab[zC.layout]}`,
                                onChange: nC,
                                count: FC ? {
                                  visible: pC.length,
                                  total: wC.sections.length
                                } : null
                              }), !qC && (0, gC.jsxs)("div", {
                                className: `DocsSections Layout-${zC.layout}`,
                                children: [pC.map((CC => (0, gC.jsx)(xb, {
                                  page: zC,
                                  section: CC
                                }, CC.heading.anchor))), 0 === pC.length && (0, gC.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", Ab[zC.layout], " match \u201c", bC, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const Ib = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function ib(CC) {
                            let {
                              entry: zC,
                              isActive: ZC,
                              onNavigate: QC,
                              label: wC,
                              children: nC
                            } = CC;
                            return (0, gC.jsx)("a", {
                              href: `#${zC.anchor}`,
                              "aria-label": wC,
                              className: bC()(`Level${zC.level}`, {
                                Active: ZC
                              }),
                              "aria-current": ZC ? "location" : void 0,
                              onClick: CC => {
                                CC.preventDefault(), QC(zC.anchor)
                              },
                              children: nC
                            })
                          }

                          function vb(CC) {
                            let {
                              toc: zC,
                              activeAnchor: ZC,
                              onNavigate: wC
                            } = CC;
                            const nC = Math.max(0, zC.findIndex((CC => CC.anchor === ZC))),
                              fC = (0, QC.useRef)(null),
                              oC = (0, QC.useRef)(!1);
                            (0, QC.useEffect)((() => {
                              var CC, ZC;
                              const QC = null === (CC = fC.current) || void 0 === CC ? void 0 : CC.closest(".DocsToc"),
                                wC = null === (ZC = fC.current) || void 0 === ZC ? void 0 : ZC.querySelector(".DocsTimelineNotch.Active");
                              if (!QC || !wC) return;
                              let bC = 0;
                              if (nC === zC.length - 1) bC = QC.scrollHeight;
                              else if (nC > 0) {
                                const CC = QC.getBoundingClientRect(),
                                  zC = wC.getBoundingClientRect();
                                bC = QC.scrollTop + zC.top + zC.height / 2 - (CC.top + QC.clientHeight / 2)
                              }
                              QC.scrollTo({
                                top: bC,
                                behavior: oC.current ? "smooth" : "auto"
                              }), oC.current = !0
                            }), [nC, zC.length]);
                            const qC = [];
                            return zC.forEach(((CC, zC) => {
                              var ZC, QC, wC;
                              const bC = function(CC) {
                                  const zC = CC.trim().match(Ib);
                                  return zC ? {
                                    day: zC[1],
                                    month: `${zC[2]} ${zC[3]}`
                                  } : null
                                }(CC.text),
                                nC = null !== (ZC = null === bC || void 0 === bC ? void 0 : bC.month) && void 0 !== ZC ? ZC : null;
                              null !== nC && (null === (QC = qC.at(-1)) || void 0 === QC ? void 0 : QC.month) === nC || qC.push({
                                month: nC,
                                entries: []
                              }), qC.at(-1).entries.push({
                                entry: CC,
                                day: null !== (wC = null === bC || void 0 === bC ? void 0 : bC.day) && void 0 !== wC ? wC : null,
                                index: zC
                              })
                            })), (0, gC.jsx)("ol", {
                              ref: fC,
                              className: "DocsTimeline",
                              children: qC.map((CC => {
                                let {
                                  month: zC,
                                  entries: ZC
                                } = CC;
                                return (0, gC.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [zC && (0, gC.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: zC
                                  }), (0, gC.jsx)("ol", {
                                    children: ZC.map((CC => {
                                      let {
                                        entry: zC,
                                        day: ZC,
                                        index: QC
                                      } = CC;
                                      return (0, gC.jsx)("li", {
                                        className: bC()("DocsTimelineNotch", {
                                          Passed: QC < nC,
                                          Active: QC === nC
                                        }),
                                        children: (0, gC.jsx)(ib, {
                                          entry: zC,
                                          isActive: QC === nC,
                                          onNavigate: wC,
                                          label: zC.text,
                                          children: (0, gC.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== ZC && void 0 !== ZC ? ZC : zC.text
                                          })
                                        })
                                      }, zC.anchor)
                                    }))
                                  })]
                                }, ZC[0].entry.anchor)
                              }))
                            })
                          }

                          function eb(CC) {
                            let {
                              isChangelog: zC,
                              toc: ZC,
                              activeAnchor: QC,
                              onNavigate: wC
                            } = CC;
                            return 0 === ZC.length ? null : (0, gC.jsxs)(gC.Fragment, {
                              children: [(0, gC.jsx)("div", {
                                className: "DocsTocTitle",
                                children: zC ? "Updates" : "On this page"
                              }), zC ? (0, gC.jsx)(vb, {
                                toc: ZC,
                                activeAnchor: QC,
                                onNavigate: wC
                              }) : (0, gC.jsx)("ul", {
                                children: ZC.map((CC => (0, gC.jsx)("li", {
                                  children: (0, gC.jsx)(ib, {
                                    entry: CC,
                                    isActive: CC.anchor === QC,
                                    onNavigate: wC,
                                    children: CC.text.replace(/`/g, "")
                                  })
                                }, CC.anchor)))
                              })]
                            })
                          }
                          const hb = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            Kb = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            Yb = 20,
                            db = 10,
                            mb = 40,
                            Hb = 120;
                          let Eb;

                          function lb(CC) {
                            const zC = CC.gallery;
                            if (!zC) return [];
                            if (pZ(zC)) return function(CC) {
                              return GZ(CC).entries.map((CC => CC.name))
                            }(zC).map((ZC => ({
                              page: CC,
                              anchor: mZ(zC, ZC),
                              title: ZC,
                              kind: Kb[zC],
                              text: "",
                              listedUnder: CC.title
                            })));
                            const ZC = sC(CC);
                            return (0, iC.r)(ZC).flatMap((QC => {
                              const wC = QC.heading ? `${CC.title} \u203a ${QC.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : CC.title;
                              return EZ(zC, ZC, QC.blocks).flatMap((ZC => "names" !== ZC.kind ? [] : ZC.names.map((QC => {
                                const bC = ZC.isSongs ? "Song" : Kb[zC];
                                return {
                                  page: CC,
                                  anchor: QC.anchor,
                                  title: QC.name,
                                  kind: bC,
                                  text: "",
                                  listedUnder: wC
                                }
                              }))))
                            }))
                          }

                          function Xb(CC, zC, ZC) {
                            const QC = CC.title.toLowerCase();
                            let wC = 0;
                            if (QC === zC) wC = 100;
                            else if (QC.startsWith(zC)) wC = 80;
                            else if (QC.includes(zC)) wC = 60;
                            else if (ZC.every((CC => QC.includes(CC)))) wC = 45;
                            else {
                              if (!CC.text.toLowerCase().includes(zC)) return 0;
                              wC = 20
                            }
                            return wC - Math.min(QC.length / 10, 9) + ("Page" === CC.kind ? 8 : "Method" === CC.kind ? 3 : 0) - (CC.listedUnder ? Yb : 0)
                          }

                          function cb(CC, zC) {
                            const ZC = CC.toLowerCase().indexOf(zC),
                              QC = Math.max(0, ZC - Hb / 3);
                            return `${QC>0?"\u2026":""}${CC.slice(QC,QC+Hb)}${QC+Hb<CC.length?"\u2026":""}`
                          }

                          function ub(CC) {
                            let {
                              text: zC,
                              query: ZC
                            } = CC;
                            const QC = ZC ? zC.toLowerCase().indexOf(ZC) : -1;
                            return -1 === QC ? (0, gC.jsx)(gC.Fragment, {
                              children: zC
                            }) : (0, gC.jsxs)(gC.Fragment, {
                              children: [zC.slice(0, QC), (0, gC.jsx)("mark", {
                                children: zC.slice(QC, QC + ZC.length)
                              }), zC.slice(QC + ZC.length)]
                            })
                          }

                          function rb(CC) {
                            let {
                              basePath: zC,
                              onClose: ZC
                            } = CC;
                            const wC = (0, fC.w)(),
                              [nC, oC] = (0, QC.useState)(""),
                              [qC, FC] = (0, QC.useState)(0),
                              WC = (0, QC.useRef)(null),
                              NC = (0, QC.useRef)(null),
                              MC = nC.trim().toLowerCase(),
                              SC = (0, QC.useMemo)((() => {
                                const CC = (Eb || (Eb = XC.flatMap((CC => {
                                  const zC = sC(CC);
                                  return [{
                                    page: CC,
                                    anchor: "",
                                    title: CC.title,
                                    kind: "Page",
                                    text: CC.summary
                                  }, ...zC.sections.flatMap((zC => {
                                    const ZC = zC.blocks.filter((CC => "paragraph" === CC.kind)).map(iC.g).join(" ").replace(/[`*]/g, ""),
                                      QC = {
                                        page: CC,
                                        anchor: zC.heading.anchor,
                                        title: zC.heading.text.replace(/`/g, ""),
                                        kind: hb[CC.layout],
                                        text: ZC
                                      },
                                      wC = zC.blocks.flatMap((zC => "article" === CC.layout && "heading" === zC.kind && 3 === zC.level ? [{
                                        page: CC,
                                        anchor: zC.anchor,
                                        title: zC.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: QC.title
                                      }] : []));
                                    return [QC, ...wC]
                                  })), ...lb(CC)]
                                }))), Eb);
                                if (!MC) return CC.filter((CC => "Page" === CC.kind));
                                const zC = MC.split(/\s+/);
                                let ZC = 0;
                                return CC.map((CC => ({
                                  entry: CC,
                                  score: Xb(CC, MC, zC)
                                }))).filter((CC => CC.score > 0)).sort(((CC, zC) => zC.score - CC.score)).filter((CC => !CC.entry.listedUnder || (ZC++, ZC <= db))).slice(0, mb).map((CC => CC.entry))
                              }), [MC]);
                            (0, QC.useEffect)((() => {
                              FC(0)
                            }), [MC]), (0, QC.useEffect)((() => {
                              const CC = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === CC || void 0 === CC || CC.focus()
                              }
                            }), []), (0, QC.useEffect)((() => {
                              var CC, zC;
                              null === (CC = WC.current) || void 0 === CC || null === (zC = CC.querySelector(".Active")) || void 0 === zC || zC.scrollIntoView({
                                block: "nearest"
                              })
                            }), [qC]);
                            const PC = CC => {
                              wC(DC(zC, CC.page, CC.anchor)), ZC()
                            };
                            return (0, gC.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: CC => {
                                CC.target === CC.currentTarget && ZC()
                              },
                              children: (0, gC.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: CC => {
                                  CC.target !== NC.current && CC.preventDefault()
                                },
                                onKeyDown: CC => {
                                  if ("Escape" === CC.key) ZC();
                                  else if ("Tab" === CC.key) {
                                    var zC;
                                    CC.preventDefault(), null === (zC = NC.current) || void 0 === zC || zC.focus()
                                  }
                                },
                                children: [(0, gC.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, gC.jsx)(pC, {
                                    name: "magnifying-glass"
                                  }), (0, gC.jsx)("input", {
                                    ref: NC,
                                    autoFocus: !0,
                                    value: nC,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": SC.length > 0 ? `DocsSearchResult-${qC}` : void 0,
                                    onChange: CC => {
                                      oC(CC.target.value)
                                    },
                                    onKeyDown: CC => {
                                      if ("ArrowDown" === CC.key || "ArrowUp" === CC.key) {
                                        CC.preventDefault();
                                        const zC = "ArrowDown" === CC.key ? 1 : -1;
                                        FC((qC + zC + SC.length) % Math.max(SC.length, 1))
                                      } else "Enter" === CC.key && SC[qC] && PC(SC[qC])
                                    }
                                  }), (0, gC.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, gC.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: WC,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!MC && (0, gC.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), SC.map(((CC, zC) => {
                                    var ZC;
                                    return (0, gC.jsxs)("li", {
                                      id: `DocsSearchResult-${zC}`,
                                      role: "option",
                                      "aria-selected": zC === qC,
                                      className: bC()("DocsSearchResult", {
                                        Active: zC === qC
                                      }),
                                      onMouseMove: () => {
                                        FC(zC)
                                      },
                                      onClick: () => {
                                        PC(CC)
                                      },
                                      children: [(0, gC.jsx)(pC, {
                                        name: CC.page.icon
                                      }), (0, gC.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, gC.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, gC.jsx)(ub, {
                                            text: CC.title,
                                            query: MC
                                          })
                                        }), CC.text && (0, gC.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, gC.jsx)(ub, {
                                            text: cb(CC.text, MC),
                                            query: MC
                                          })
                                        })]
                                      }), (0, gC.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === CC.kind ? "Page" : null !== (ZC = CC.listedUnder) && void 0 !== ZC ? ZC : `${CC.kind} \xb7 ${CC.page.title}`
                                      })]
                                    }, `${CC.page.id}#${CC.anchor}`)
                                  })), MC && 0 === SC.length && (0, gC.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", nC, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function sb(CC, zC) {
                            if (zC < 10) return `${CC.toFixed(1)}s`;
                            const ZC = Math.floor(CC);
                            return `${Math.floor(ZC/60)}:${String(ZC%60).padStart(2,"0")}`
                          }

                          function Tb() {
                            const CC = FQ((CC => CC.track)),
                              zC = FQ((CC => CC.volume)),
                              [ZC, wC] = (0, QC.useState)(0),
                              nC = (0, QC.useRef)(zQ);
                            if ((0, QC.useEffect)((() => {
                                if (!CC) return;
                                if (wC(gQ()), "playing" !== CC.status) return;
                                let zC = 0;
                                const ZC = () => {
                                  wC(gQ()), zC = requestAnimationFrame(ZC)
                                };
                                return zC = requestAnimationFrame(ZC), () => {
                                  cancelAnimationFrame(zC)
                                }
                              }), [CC]), !CC) return null;
                            const fC = "paused" !== CC.status,
                              oC = Math.min(ZC, CC.duration);
                            return (0, gC.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, gC.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, gC.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": fC ? `Pause ${CC.name}` : `Play ${CC.name}`,
                                  onClick: MQ,
                                  children: (0, gC.jsx)(pC, {
                                    name: fC ? "pause" : "play"
                                  })
                                }), (0, gC.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, gC.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, gC.jsx)("code", {
                                      children: CC.name
                                    }), (0, gC.jsx)("span", {
                                      children: CC.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, gC.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, gC.jsx)("span", {
                                      children: sb(oC, CC.duration)
                                    }), (0, gC.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: CC.duration || 1,
                                      step: .01,
                                      value: oC,
                                      disabled: 0 === CC.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${sb(oC,CC.duration)} of ${sb(CC.duration,CC.duration)}`,
                                      onChange: CC => {
                                        const zC = Number(CC.target.value);
                                        ! function(CC) {
                                          var zC;
                                          nQ = CC, null === (zC = wQ) || void 0 === zC || zC.seek(CC)
                                        }(zC), wC(zC)
                                      }
                                    }), (0, gC.jsx)("span", {
                                      children: CC.duration > 0 ? sb(CC.duration, CC.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, gC.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, gC.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === zC ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === zC ? SQ(nC.current) : (nC.current = zC, SQ(0))
                                    },
                                    children: (0, gC.jsx)(pC, {
                                      name: "volume",
                                      className: bC()({
                                        Muted: 0 === zC
                                      })
                                    })
                                  }), (0, gC.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: zC,
                                    "aria-label": "Volume",
                                    onChange: CC => {
                                      SQ(Number(CC.target.value))
                                    }
                                  })]
                                }), (0, gC.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var zC;
                                    null === (zC = document.querySelector(`[data-docs-track="${CSS.escape(ZQ(CC.name,CC.isSong))}"]`)) || void 0 === zC || zC.focus(), pQ()
                                  },
                                  children: (0, gC.jsx)(pC, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var ab = ZC(38);
                          const tb = "docsTheme",
                            Db = window.matchMedia("(prefers-color-scheme: light)");

                          function jb(CC) {
                            let {
                              theme: zC,
                              onChange: ZC
                            } = CC;
                            const QC = "dark" === zC ? "light" : "dark";
                            return (0, gC.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${QC} theme`,
                              title: `Switch to ${QC} theme`,
                              onClick: () => {
                                ZC(QC)
                              },
                              children: (0, gC.jsx)(pC, {
                                name: "dark" === zC ? "moon" : "sun"
                              })
                            })
                          }
                          const yb = "https://github.com/Bloxdy/code-api",
                            Lb = "https://discord.gg/playbloxd",
                            Ub = 180,
                            Bb = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function Ob(CC) {
                            let {
                              basePath: zC,
                              activePageId: ZC,
                              onNavigate: QC
                            } = CC;
                            return (0, gC.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: cC.map((CC => (0, gC.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, gC.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: CC.title
                                }), CC.pageIds.map((CC => {
                                  var wC;
                                  const fC = uC(CC);
                                  return (0, gC.jsxs)(nC.d, {
                                    to: DC(zC, fC),
                                    className: bC()("DocsNavLink", {
                                      Active: fC.id === ZC
                                    }),
                                    "aria-current": fC.id === ZC ? "page" : void 0,
                                    onClick: QC,
                                    children: [(0, gC.jsx)(pC, {
                                      name: fC.icon
                                    }), (0, gC.jsx)("span", {
                                      children: null !== (wC = fC.navTitle) && void 0 !== wC ? wC : fC.title
                                    })]
                                  }, fC.id)
                                }))]
                              }, CC.title)))
                            })
                          }

                          function kb(CC) {
                            let {
                              basePath: zC,
                              pageId: ZC
                            } = CC;
                            const QC = cC.flatMap((CC => CC.pageIds)),
                              wC = QC.indexOf(ZC),
                              bC = wC > 0 ? uC(QC[wC - 1]) : null,
                              fC = wC < QC.length - 1 ? uC(QC[wC + 1]) : null;
                            return (0, gC.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [bC ? (0, gC.jsxs)(nC.d, {
                                className: "DocsPagerLink Previous",
                                to: DC(zC, bC),
                                children: [(0, gC.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, gC.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: bC.title
                                })]
                              }) : (0, gC.jsx)("span", {}), fC && (0, gC.jsxs)(nC.d, {
                                className: "DocsPagerLink Next",
                                to: DC(zC, fC),
                                children: [(0, gC.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, gC.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: fC.title
                                })]
                              })]
                            })
                          }

                          function Vb(CC) {
                            let {
                              basePath: zC,
                              embedded: ZC = !1
                            } = CC;
                            const {
                              pageSlug: wC = ""
                            } = (0, fC.C)(), qC = (0, fC.v)(), FC = (0, fC.w)(), WC = (NC = wC, XC.find((CC => CC.slug === NC)));
                            var NC;
                            const [MC, SC] = function() {
                              const [CC, zC] = (0, QC.useState)((() => {
                                const CC = ab.i.getItem(tb);
                                return "dark" === CC || "light" === CC ? CC : null
                              })), [ZC, wC] = (0, QC.useState)(Db.matches ? "light" : "dark");
                              return (0, QC.useEffect)((() => {
                                const CC = () => {
                                  wC(Db.matches ? "light" : "dark")
                                };
                                return Db.addEventListener("change", CC), () => {
                                  Db.removeEventListener("change", CC)
                                }
                              }), []), [null !== CC && void 0 !== CC ? CC : ZC, CC => {
                                ab.i.setItem(tb, CC), zC(CC)
                              }]
                            }(), [PC, GC] = (0, QC.useState)(null), [RC, AC] = (0, QC.useState)(!1), [xC, JC] = (0, QC.useState)(!1), [IC, vC] = (0, QC.useState)([]), eC = function(CC, zC) {
                              const [ZC, wC] = (0, QC.useState)("");
                              return (0, QC.useEffect)((() => {
                                if (!zC) return;
                                let ZC = 0;
                                const QC = () => {
                                    var QC, bC;
                                    ZC = 0;
                                    const nC = zC.getBoundingClientRect().top + Ub;
                                    let fC = null !== (QC = null === (bC = CC[0]) || void 0 === bC ? void 0 : bC.anchor) && void 0 !== QC ? QC : "";
                                    for (const zC of CC) {
                                      const CC = document.getElementById(zC.anchor);
                                      CC && CC.getBoundingClientRect().top <= nC && (fC = zC.anchor)
                                    }
                                    zC.scrollTop + zC.clientHeight >= zC.scrollHeight - 2 && zC.scrollTop > 0 && CC.length > 0 && (fC = CC[CC.length - 1].anchor), wC(fC)
                                  },
                                  bC = () => {
                                    ZC || (ZC = requestAnimationFrame(QC))
                                  };
                                return QC(), zC.addEventListener("scroll", bC, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(ZC), zC.removeEventListener("scroll", bC)
                                }
                              }), [CC, zC]), ZC
                            }(IC, PC), hC = "" === wC && qC.hash ? function(CC) {
                              const zC = (0, iC.n)(CC);
                              if (TC(uC("welcome"), zC)) return null;
                              const ZC = Object.hasOwn(tC, zC) ? tC[zC] : null;
                              if (ZC) return {
                                page: uC(ZC.pageId),
                                anchor: ZC.anchor
                              };
                              const QC = uC("readme");
                              return TC(QC, zC) ? {
                                page: QC,
                                anchor: zC
                              } : aC(`#${zC}`)
                            }(qC.hash) : null;
                            (0, QC.useEffect)((() => (oC.b.set({
                              musicOnFromPage: !1
                            }), () => {
                              oC.b.set({
                                musicOnFromPage: !0
                              }), pQ()
                            })), []), (0, QC.useEffect)((() => {
                              const CC = CC => {
                                const zC = CC.target;
                                if (zC.closest(".DocsTextDialog")) return;
                                const ZC = zC.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(zC.tagName);
                                "k" === CC.key && (CC.metaKey || CC.ctrlKey) || "/" === CC.key && !ZC ? (CC.preventDefault(), JC(!0)) : "Escape" === CC.key && AC(!1)
                              };
                              return window.addEventListener("keydown", CC), () => {
                                window.removeEventListener("keydown", CC)
                              }
                            }), []);
                            const KC = (0, QC.useRef)(null);
                            (0, QC.useLayoutEffect)((() => {
                              var CC, zC;
                              if (!PC) return;
                              const ZC = KC.current === qC.pathname;
                              KC.current = qC.pathname;
                              const QC = (0, iC.n)(qC.hash),
                                wC = QC ? document.getElementById(QC) : null;
                              if (null === (CC = PC.querySelector(".DocsTargeted")) || void 0 === CC || CC.classList.remove("DocsTargeted"), null === wC || void 0 === wC || null === (zC = wC.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === zC || zC.classList.add("DocsTargeted"), wC) {
                                var bC;
                                const CC = wC.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (bC = wC.closest(".DocsChangelogEntry")) && void 0 !== bC ? bC : wC).scrollIntoView({
                                  block: CC ? "center" : "start",
                                  behavior: ZC ? "smooth" : "auto"
                                })
                              } else ZC || PC.scrollTo({
                                top: 0
                              })
                            }), [PC, qC.pathname, qC.hash, qC.key]);
                            const YC = (0, QC.useCallback)((() => {
                                AC(!1)
                              }), []),
                              dC = (0, QC.useCallback)((CC => {
                                FC({
                                  hash: CC
                                })
                              }), [FC]);
                            if (hC) return (0, gC.jsx)(fC.e, {
                              replace: !0,
                              to: DC(zC, hC.page, hC.anchor)
                            });
                            if (!WC) return (0, gC.jsx)(fC.e, {
                              replace: !0,
                              to: zC
                            });
                            const mC = ZC ? "div" : "main";
                            return (0, gC.jsx)(Mz.Provider, {
                              value: zC,
                              children: (0, gC.jsx)(gz.Provider, {
                                value: PC,
                                children: (0, gC.jsxs)("div", {
                                  ref: GC,
                                  className: bC()("DocsSite", {
                                    Embedded: ZC,
                                    NavOpen: RC
                                  }),
                                  "data-theme": MC,
                                  children: [(0, gC.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, gC.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": RC ? "Close menu" : "Open menu",
                                      "aria-expanded": RC,
                                      onClick: () => {
                                        AC(!RC)
                                      },
                                      children: (0, gC.jsx)(pC, {
                                        name: RC ? "cross" : "menu"
                                      })
                                    }), (0, gC.jsxs)(nC.d, {
                                      to: zC,
                                      className: "DocsBrand",
                                      children: [(0, gC.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, gC.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, gC.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, gC.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        JC(!0)
                                      },
                                      children: [(0, gC.jsx)(pC, {
                                        name: "magnifying-glass"
                                      }), (0, gC.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, gC.jsxs)("kbd", {
                                        children: [Bb ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, gC.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, gC.jsxs)("a", {
                                        href: Lb,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, gC.jsx)(pC, {
                                          name: "discord"
                                        }), (0, gC.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, gC.jsxs)("a", {
                                        href: yb,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, gC.jsx)(pC, {
                                          name: "external-link"
                                        }), (0, gC.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !ZC && (0, gC.jsxs)(nC.d, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, gC.jsx)(pC, {
                                          name: "play"
                                        }), (0, gC.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, gC.jsx)(jb, {
                                        theme: MC,
                                        onChange: SC
                                      })]
                                    })]
                                  }), (0, gC.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, gC.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, gC.jsx)(Ob, {
                                        basePath: zC,
                                        activePageId: WC.id,
                                        onNavigate: YC
                                      })
                                    }), (0, gC.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: YC
                                    }), (0, gC.jsxs)(mC, {
                                      className: "DocsMain",
                                      children: [(0, gC.jsx)(Jb, {
                                        page: WC,
                                        onTocChange: vC
                                      }, WC.id), (0, gC.jsx)(kb, {
                                        basePath: zC,
                                        pageId: WC.id
                                      })]
                                    }), (0, gC.jsx)("aside", {
                                      className: bC()("DocsToc", {
                                        Timeline: "changelog" === WC.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, gC.jsx)(eb, {
                                        isChangelog: "changelog" === WC.layout,
                                        toc: IC,
                                        activeAnchor: eC,
                                        onNavigate: dC
                                      })
                                    })]
                                  }), (0, gC.jsx)(Tb, {}), xC && (0, gC.jsx)(rb, {
                                    basePath: zC,
                                    onClose: () => {
                                      JC(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4674: (CC, zC, ZC) => {
                          ZC.d(zC, {
                            b: () => QC,
                            e: () => nC,
                            g: () => pC,
                            h: () => SC,
                            j: () => fC,
                            n: () => wC,
                            p: () => bC,
                            r: () => gC,
                            s: () => MC,
                            u: () => NC
                          });
                          const QC = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function wC(CC) {
                            try {
                              return decodeURIComponent(CC.slice(1))
                            } catch {
                              return CC.slice(1)
                            }
                          }

                          function bC(CC) {
                            return CC.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const nC = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${QC.source}`, "g");

                          function fC(CC, zC) {
                            return 2 === CC.length ? zC.replace(/^ (.*) $/, "$1") : zC
                          }

                          function oC(CC) {
                            return "" === CC.trim()
                          }

                          function qC(CC) {
                            const zC = [];
                            for (const ZC of CC.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) zC.length > 0 && zC[zC.length - 1].endsWith("\\") ? zC[zC.length - 1] += `|${ZC}` : zC.push(ZC);
                            return zC.map((CC => CC.trim().replaceAll("\\|", "|")))
                          }
                          const FC = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function WC(CC) {
                            const zC = [],
                              ZC = [{
                                indent: -1,
                                items: zC
                              }];
                            let QC = null;
                            for (const wC of CC) {
                              const CC = wC.match(FC);
                              if (!CC) {
                                QC && (QC.text += ` ${wC.trim()}`);
                                continue
                              }
                              const zC = CC[1].replace(/\t/g, "  ").length;
                              for (; zC <= ZC[ZC.length - 1].indent;) ZC.pop();
                              QC = {
                                text: CC[3].trim(),
                                children: []
                              }, ZC[ZC.length - 1].items.push(QC), ZC.push({
                                indent: zC,
                                items: QC.children
                              })
                            }
                            return zC
                          }

                          function NC(CC) {
                            const zC = CC.replace(/\r\n/g, "\n").split("\n"),
                              ZC = [];
                            let QC = 0;
                            for (; QC < zC.length;) {
                              const CC = zC[QC];
                              if (oC(CC)) {
                                QC++;
                                continue
                              }
                              const wC = CC.match(/^\s*```\s*(\w*)\s*$/);
                              if (wC) {
                                const CC = [];
                                for (QC++; QC < zC.length && !/^\s*```\s*$/.test(zC[QC]);) CC.push(zC[QC]), QC++;
                                QC++, ZC.push({
                                  kind: "code",
                                  lang: wC[1] || "text",
                                  code: CC.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const nC = CC.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (nC) {
                                const CC = nC[2].trim();
                                ZC.push({
                                  kind: "heading",
                                  level: nC[1].length,
                                  text: CC,
                                  anchor: bC(CC)
                                }), QC++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(CC)) {
                                ZC.push({
                                  kind: "rule"
                                }), QC++;
                                continue
                              }
                              if (CC.trim().startsWith("|") && QC + 1 < zC.length && /^\s*\|[\s:|-]+\|\s*$/.test(zC[QC + 1])) {
                                const wC = qC(CC),
                                  bC = [];
                                for (QC += 2; QC < zC.length && zC[QC].trim().startsWith("|");) bC.push(qC(zC[QC])), QC++;
                                ZC.push({
                                  kind: "table",
                                  header: wC,
                                  rows: bC
                                });
                                continue
                              }
                              if (CC.startsWith(">")) {
                                const CC = [];
                                for (; QC < zC.length && zC[QC].startsWith(">");) CC.push(zC[QC].replace(/^>\s?/, "")), QC++;
                                ZC.push({
                                  kind: "quote",
                                  blocks: NC(CC.join("\n"))
                                });
                                continue
                              }
                              if (FC.test(CC)) {
                                const wC = [],
                                  bC = /^\s*\d+\./.test(CC);
                                for (; QC < zC.length && !oC(zC[QC]) && (FC.test(zC[QC]) || /^\s+\S/.test(zC[QC]));) wC.push(zC[QC]), QC++;
                                ZC.push({
                                  kind: "list",
                                  ordered: bC,
                                  items: WC(wC)
                                });
                                continue
                              }
                              const fC = [];
                              for (; QC < zC.length && !oC(zC[QC]) && !/^\s*```/.test(zC[QC]) && !/^#{1,6}\s/.test(zC[QC]) && !zC[QC].startsWith(">") && !FC.test(zC[QC]) && (!zC[QC].trim().startsWith("|") || 0 !== fC.length);) fC.push(zC[QC].trim()), QC++;
                              0 === fC.length && (fC.push(zC[QC].trim()), QC++), ZC.push({
                                kind: "paragraph",
                                text: fC.join(" ")
                              })
                            }
                            return ZC
                          }

                          function MC(CC) {
                            let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const ZC = NC(CC);
                            let QC = "";
                            const wC = [],
                              bC = [],
                              nC = new Map;
                            for (const qC of ZC) {
                              if ("heading" === qC.kind) {
                                var fC;
                                const CC = (null !== (fC = nC.get(qC.anchor)) && void 0 !== fC ? fC : 0) + 1;
                                nC.set(qC.anchor, CC), CC > 1 && (qC.anchor = `${qC.anchor}-${CC}`)
                              }
                              if ("heading" === qC.kind && 1 === qC.level && !QC) {
                                QC = qC.text;
                                continue
                              }
                              if ("heading" === qC.kind && qC.level <= zC) {
                                bC.push({
                                  heading: qC,
                                  blocks: []
                                });
                                continue
                              }
                              const CC = bC.at(-1);
                              CC ? CC.blocks.push(qC) : wC.push(qC)
                            }
                            const oC = CC => {
                              for (;
                                "rule" === (null === (zC = CC.at(-1)) || void 0 === zC ? void 0 : zC.kind);) {
                                var zC;
                                CC.pop()
                              }
                            };
                            oC(wC);
                            for (const qC of bC) oC(qC.blocks);
                            return {
                              title: QC,
                              intro: wC,
                              sections: bC
                            }
                          }

                          function gC(CC) {
                            return [{
                              heading: null,
                              blocks: CC.intro
                            }, ...CC.sections.map((CC => ({
                              heading: CC.heading,
                              blocks: CC.blocks
                            })))]
                          }

                          function SC(CC) {
                            return CC.flatMap((CC => "code" === CC.kind ? [CC] : "quote" === CC.kind ? SC(CC.blocks) : []))
                          }

                          function pC(CC) {
                            switch (CC.kind) {
                              case "heading":
                              case "paragraph":
                                return CC.text;
                              case "code":
                                return CC.code;
                              case "table":
                                return [CC.header, ...CC.rows].map((CC => CC.join(" "))).join(" ");
                              case "list": {
                                const zC = CC => CC.map((CC => `${CC.text} ${zC(CC.children)}`)).join(" ");
                                return zC(CC.items)
                              }
                              case "quote":
                                return CC.blocks.map(pC).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4769: (CC, zC, ZC) => {
                          ZC.d(zC, {
                            e: () => fC
                          });
                          var QC = ZC(48),
                            wC = ZC(310),
                            bC = ZC(1822),
                            nC = ZC(1056);

                          function fC(CC) {
                            let {
                              text: zC
                            } = CC;
                            const ZC = [];
                            let fC = "";
                            return (0, wC.dc)(zC).forEach(((CC, zC) => {
                              if ("string" === typeof CC || !(0, bC.h)(CC.icon)) return void(fC += "string" === typeof CC ? CC : CC.icon);
                              const wC = Math.max(0, fC.trimEnd().search(/\S{1,12}$/));
                              ZC.push((0, nC.jsxs)(QC.Fragment, {
                                children: [fC.slice(0, wC), (0, nC.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [fC.slice(wC), (0, nC.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": CC.icon,
                                    children: (0, nC.jsx)(bC.e, {
                                      itemName: CC.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, zC)), fC = ""
                            })), ZC.push(fC), (0, nC.jsx)(nC.Fragment, {
                              children: ZC
                            })
                          }
                        }, 4698: (CC, zC, ZC) => {
                          ZC.d(zC, {
                            e: () => GC,
                            d: () => PC
                          });
                          var QC = ZC(48),
                            wC = ZC(1383),
                            bC = ZC(1811),
                            nC = ZC(4701),
                            fC = ZC(1056);
                          const oC = (0, QC.memo)((function(CC) {
                            let {
                              initialParameters: zC
                            } = CC;
                            const ZC = (0, QC.useRef)(null),
                              wC = (0, QC.useRef)(null),
                              oC = (0, QC.useRef)(0),
                              qC = (0, QC.useRef)(null),
                              FC = zC.description,
                              WC = zC.dZ,
                              {
                                scale: NC,
                                rotation: MC
                              } = null !== zC && void 0 !== zC ? zC : {},
                              gC = (0, nC.f)();
                            return (0, QC.useEffect)((() => {
                              const CC = gC.onFrame((() => {
                                const CC = gC.getState();
                                if (!CC.isActive || !ZC.current || !wC.current) return;
                                const zC = CC.state;
                                if (ZC.current.value = zC.progress, zC.clickCount > oC.current) {
                                  oC.current = zC.clickCount;
                                  const CC = wC.current;
                                  CC.classList.add("pulse"), qC.current = setTimeout((() => {
                                    CC.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(qC.current), CC()
                              }
                            }), [gC]), (0, fC.jsx)(fC.Fragment, {
                              children: (0, fC.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== NC && {
                                    "--scale": NC
                                  },
                                  ...null !== MC && {
                                    "--rotation": `${MC}deg`
                                  }
                                },
                                children: [(0, fC.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: ZC
                                }), (0, fC.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: wC,
                                  children: (0, fC.jsx)(bC.e, {
                                    text: [{
                                      icon: WC
                                    }]
                                  })
                                }), (0, fC.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, fC.jsx)(bC.e, {
                                    text: FC
                                  })
                                })]
                              })
                            })
                          }));
                          var qC = ZC(1002),
                            FC = ZC.n(qC);
                          const WC = 2 * Math.PI * 90,
                            NC = (0, QC.memo)((function(CC) {
                              let {
                                initialParameters: zC
                              } = CC;
                              const ZC = (0, QC.useRef)(null),
                                wC = (0, QC.useRef)(null),
                                oC = (0, QC.useRef)(null),
                                qC = zC.label,
                                NC = zC.icon,
                                MC = zC.EZ,
                                {
                                  scale: gC,
                                  rotation: SC,
                                  lZ: pC
                                } = null !== zC && void 0 !== zC ? zC : {},
                                PC = (0, nC.f)();
                              return (0, QC.useEffect)((() => {
                                const CC = PC.onFrame((() => {
                                  var CC, zC;
                                  const QC = PC.getState();
                                  if (!QC.isActive || !wC.current) return;
                                  const bC = QC.state,
                                    nC = null !== (CC = bC.timeRemaining) && void 0 !== CC ? CC : 0,
                                    fC = null !== (zC = bC.HZ) && void 0 !== zC ? zC : 1,
                                    qC = WC * (1 - nC / fC);
                                  wC.current.style.strokeDashoffset = `${qC}`, ZC.current && (ZC.current.style.opacity = nC > 0 ? "1" : "0"), oC.current && MC && (oC.current.textContent = `${(nC/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  CC()
                                }
                              }), [PC, MC]), (0, fC.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: ZC,
                                style: {
                                  ...null !== gC && {
                                    "--scale": gC
                                  },
                                  ...null !== SC && {
                                    "--rotation": `${SC}deg`
                                  }
                                },
                                children: [(0, fC.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, fC.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, fC.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, fC.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: WC,
                                      ref: wC
                                    })]
                                  }), (0, fC.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, fC.jsx)(bC.e, {
                                      text: [{
                                        icon: NC
                                      }],
                                      className: FC()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: pC
                                      })
                                    })
                                  })]
                                }), (0, fC.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, fC.jsx)(bC.e, {
                                    text: qC,
                                    className: "QTETimedClickLabelText"
                                  }), MC && (0, fC.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: oC
                                  })]
                                })]
                              })
                            })),
                            MC = (0, QC.memo)((function(CC) {
                              let {
                                initialParameters: zC
                              } = CC;
                              const ZC = (0, QC.useRef)(null),
                                wC = (0, QC.useRef)(null),
                                oC = (0, QC.useRef)(null),
                                qC = (0, QC.useRef)(!1),
                                FC = zC.description,
                                WC = null === zC || void 0 === zC ? void 0 : zC.icon,
                                NC = (0, nC.f)();
                              return (0, QC.useEffect)((() => {
                                const CC = NC.onFrame((() => {
                                  const CC = NC.getState();
                                  if (!CC.isActive) return;
                                  const zC = CC.state;
                                  if (ZC.current) {
                                    const CC = 100 * (zC.catchZonePosition - zC.cZ / 2);
                                    ZC.current.style.left = `${CC}%`, ZC.current.style.width = 100 * zC.cZ + "%", zC.isCatching !== qC.current && (qC.current = zC.isCatching, zC.isCatching ? ZC.current.classList.add("catching") : ZC.current.classList.remove("catching"))
                                  }
                                  wC.current && (wC.current.style.left = 100 * zC.moverPosition + "%"), oC.current && (oC.current.value = zC.progress)
                                }));
                                return () => {
                                  CC()
                                }
                              }), [NC]), (0, fC.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, fC.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, fC.jsx)(bC.e, {
                                    text: FC
                                  })
                                }), (0, fC.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: oC
                                }), (0, fC.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, fC.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: ZC
                                  }), (0, fC.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: wC,
                                    children: (0, fC.jsx)("span", {
                                      children: WC && (0, fC.jsx)(bC.e, {
                                        text: [{
                                          icon: WC,
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
                          var gC = ZC(600);
                          const SC = (0, QC.memo)((function(CC) {
                              let {
                                initialParameters: zC
                              } = CC;
                              const ZC = (0, QC.useRef)(null),
                                wC = zC.label,
                                oC = zC.DZ,
                                {
                                  icon: qC,
                                  scale: FC,
                                  rotation: WC
                                } = null !== zC && void 0 !== zC ? zC : {},
                                NC = 100 * (.5 - oC / 2),
                                MC = 100 * oC,
                                SC = (0, nC.f)();
                              return (0, QC.useEffect)((() => {
                                const CC = SC.onFrame((() => {
                                  const CC = SC.getState();
                                  if (!CC.isActive || !ZC.current) return;
                                  const zC = CC.state;
                                  ZC.current.style.left = 100 * zC.markerPosition + "%"
                                }));
                                return () => {
                                  CC()
                                }
                              }), [SC]), (0, fC.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, gC.H)(FC) && {
                                    "--scale": FC
                                  },
                                  ...!(0, gC.H)(WC) && {
                                    "--rotation": `${WC}deg`
                                  }
                                },
                                children: [qC && (0, fC.jsx)(bC.e, {
                                  text: [{
                                    icon: qC
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, fC.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, fC.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${NC}%`,
                                      width: `${MC}%`
                                    }
                                  }), (0, fC.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: ZC
                                  })]
                                }), (0, fC.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, fC.jsx)(bC.e, {
                                    text: wC
                                  })
                                })]
                              })
                            })),
                            pC = (0, QC.memo)((function(CC) {
                              let {
                                initialParameters: zC
                              } = CC;
                              const ZC = (0, QC.useRef)(null),
                                [wC, oC] = (0, QC.useState)((() => new Array(zC.yZ).fill("pending"))),
                                [qC, FC] = (0, QC.useState)((() => {
                                  const CC = zC.BZ;
                                  return (0, gC.H)(CC) || CC <= 0 ? [] : new Array(CC).fill("pending")
                                })),
                                WC = zC.label,
                                {
                                  icon: NC
                                } = zC,
                                MC = (0, QC.useRef)(0),
                                SC = (0, QC.useRef)(0),
                                pC = (0, QC.useRef)([]),
                                PC = (0, nC.f)();
                              return (0, QC.useEffect)((() => {
                                const CC = PC.onFrame((() => {
                                  const CC = PC.getState();
                                  if (!CC.isActive || !ZC.current) return;
                                  const zC = CC.state,
                                    QC = 30 + 60 * zC.outerCircleProgress;
                                  if (ZC.current.setAttribute("r", String(QC)), !0 === zC.lastClickResult && zC.successes > MC.current) {
                                    ZC.current.classList.remove("QTERhythmClickOuterCircle--miss"), ZC.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const CC = setTimeout((() => {
                                      var CC;
                                      null === (CC = ZC.current) || void 0 === CC || CC.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    pC.current.push(CC)
                                  } else if (!1 === zC.lastClickResult && zC.misses > SC.current) {
                                    ZC.current.classList.remove("QTERhythmClickOuterCircle--hit"), ZC.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const CC = setTimeout((() => {
                                      var CC;
                                      null === (CC = ZC.current) || void 0 === CC || CC.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    pC.current.push(CC)
                                  }
                                  zC.successes === MC.current && zC.misses === SC.current || (MC.current = zC.successes, SC.current = zC.misses, oC((CC => {
                                    const ZC = [...CC];
                                    for (let QC = 0; QC < zC.yZ; QC++) ZC[QC] = QC < zC.successes ? "success" : "pending";
                                    return ZC
                                  })), FC((CC => {
                                    if (0 === CC.length) return CC;
                                    const ZC = [...CC];
                                    for (let QC = 0; QC < ZC.length; QC++) ZC[QC] = QC < zC.misses ? "miss" : "pending";
                                    return ZC
                                  })))
                                }));
                                return () => {
                                  CC();
                                  for (const CC of pC.current) clearTimeout(CC);
                                  pC.current = []
                                }
                              }), [PC]), (0, fC.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, fC.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: wC.map(((CC, zC) => (0, fC.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === CC ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, zC)))
                                }), (0, fC.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, fC.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, fC.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, fC.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: ZC
                                    })]
                                  }), NC && (0, fC.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, fC.jsx)(bC.e, {
                                      text: [{
                                        icon: NC
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), qC.length > 0 && (0, fC.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: qC.map(((CC, zC) => (0, fC.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === CC ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, zC)))
                                }), (0, fC.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, fC.jsx)(bC.e, {
                                    text: WC
                                  })
                                })]
                              })
                            }));

                          function PC(CC) {
                            let {
                              qte: zC
                            } = CC;
                            switch (zC.type) {
                              case "progressBar":
                                return (0, fC.jsx)(oC, {
                                  initialParameters: zC.parameters
                                });
                              case "timedClick":
                                return (0, fC.jsx)(NC, {
                                  initialParameters: zC.parameters
                                });
                              case "gravityBar":
                                return (0, fC.jsx)(MC, {
                                  initialParameters: zC.parameters
                                });
                              case "precisionBar":
                                return (0, fC.jsx)(SC, {
                                  initialParameters: zC.parameters
                                });
                              case "rhythmClick":
                                return (0, fC.jsx)(pC, {
                                  initialParameters: zC.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const GC = (0, QC.memo)((function() {
                            const [CC, zC] = (0, QC.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, wC.c)("qteStateUpdated", (CC => {
                              zC(CC)
                            })), CC.isActive && CC.type ? (0, fC.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, fC.jsx)(PC, {
                                qte: CC
                              })
                            }) : null
                          }))
                        }, 4701: (CC, zC, ZC) => {
                          ZC.d(zC, {
                            b: () => fC,
                            f: () => oC
                          });
                          var QC = ZC(48),
                            wC = ZC(1257),
                            bC = ZC(4706);
                          const nC = {
                              getState: () => bC.c.getCurrentState(),
                              onFrame: wC.r
                            },
                            fC = (0, QC.createContext)(nC);

                          function oC() {
                            return (0, QC.useContext)(fC)
                          }
                        }, 4775: (CC, zC, ZC) => {
                          ZC.d(zC, {
                            c: () => EC,
                            f: () => HC
                          });
                          var QC = ZC(4783),
                            wC = ZC(310);
                          const bC = 120,
                            nC = 260,
                            fC = 1.15,
                            oC = 1.2,
                            qC = 2,
                            FC = 1.08,
                            WC = .8,
                            NC = .95,
                            MC = 8,
                            gC = "[\"')\\]\u300d\u300f\uff09]*",
                            SC = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${gC}$`),
                            pC = new RegExp(`[?\uff1f]${gC}$`),
                            PC = new RegExp(`[!\uff01]${gC}$`),
                            GC = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            RC = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            AC = new RegExp(`[${RC}]`),
                            xC = new RegExp(`[${RC}]|[^${RC}]+`, "g"),
                            JC = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function IC(CC) {
                            let zC = 2166136261;
                            for (let ZC = 0; ZC < CC.length; ZC++) zC ^= CC.charCodeAt(ZC), zC = Math.imul(zC, 16777619);
                            return (zC >>> 0) / 4294967295 * 2 - 1
                          }

                          function iC(CC) {
                            var zC;
                            if (AC.test(CC)) return 1;
                            const ZC = CC.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              QC = ZC.replace(/[^0-9]/g, "");
                            if (QC.length > 0 && !/\p{L}/u.test(ZC)) return Math.min(QC.length, 4);
                            const wC = null !== (zC = ZC.match(JC)) && void 0 !== zC ? zC : [];
                            if (0 === wC.length) {
                              var bC, nC;
                              const CC = null !== (bC = null === (nC = ZC.match(/\p{L}/gu)) || void 0 === nC ? void 0 : nC.length) && void 0 !== bC ? bC : 0;
                              return 0 === CC ? 0 : Math.min(Math.max(1, Math.round(CC / 2.5)), MC)
                            }
                            const fC = ZC.replace(/[^\p{L}]/gu, ""),
                              oC = wC.length > 1 && "e" === wC.at(-1) && fC.endsWith("e") && !fC.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(CC.replace(/[^\p{L}]/gu, ""));
                            return Math.min(wC.length - (oC ? 1 : 0), MC)
                          }

                          function vC(CC) {
                            return CC.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function eC(CC) {
                            const zC = CC.replace(/[^\p{L}]/gu, "");
                            return zC.length >= 2 && zC === zC.toUpperCase() && zC !== zC.toLowerCase()
                          }

                          function hC(CC, zC) {
                            var ZC;
                            const MC = zC && (0, QC.m)(zC),
                              gC = null !== (ZC = null === MC || void 0 === MC ? void 0 : MC.syllableMs) && void 0 !== ZC ? ZC : QC.b,
                              RC = function(CC) {
                                const zC = [];
                                for (const QC of (0, wC.dc)(CC))
                                  if ("string" === typeof QC)
                                    for (const CC of QC.split(/(\s+)/)) {
                                      if ("" === CC) continue;
                                      if (/^\s+$/.test(CC)) {
                                        zC.push({
                                          kind: "space",
                                          text: CC
                                        });
                                        continue
                                      }
                                      if (!AC.test(CC)) {
                                        zC.push({
                                          kind: "word",
                                          text: CC,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let QC = !0;
                                      for (const wC of null !== (ZC = CC.match(xC)) && void 0 !== ZC ? ZC : []) {
                                        var ZC;
                                        const CC = zC.at(-1);
                                        QC || "word" !== (null === CC || void 0 === CC ? void 0 : CC.kind) || AC.test(wC) || /[\p{L}\p{N}]/u.test(wC) ? (QC || zC.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), zC.push({
                                          kind: "word",
                                          text: wC,
                                          delayMs: 0
                                        }), QC = !1) : CC.text += wC
                                      }
                                    } else zC.push({
                                      kind: "icon",
                                      text: QC.icon,
                                      delayMs: 0
                                    });
                                return zC
                              }(CC),
                              JC = [];
                            let hC = [];
                            for (const QC of RC) "space" !== QC.kind && (hC.push(QC), SC.test(QC.text) && (JC.push(hC), hC = []));
                            JC.push(hC);
                            const KC = [];
                            let YC = 0;
                            for (const QC of JC) {
                              var dC, mC;
                              const CC = null !== (dC = null === (mC = QC.at(-1)) || void 0 === mC ? void 0 : mC.text) && void 0 !== dC ? dC : "",
                                zC = pC.test(CC),
                                ZC = PC.test(CC),
                                wC = QC.map((CC => "word" === CC.kind ? iC(CC.text) : 1)),
                                RC = wC.findLastIndex((CC => CC > 0));
                              for (const [pC, PC] of QC.entries()) {
                                const CC = "word" === PC.kind,
                                  QC = wC[pC];
                                PC.delayMs = YC;
                                for (let wC = 0; MC && wC < QC; wC++) {
                                  const {
                                    intonation: bC
                                  } = MC;
                                  let nC = RC > 0 ? -bC.declineSemitones * (pC / RC) : 0;
                                  nC += IC(`${vC(PC.text)}|${wC}`) * bC.variationSemitones;
                                  const SC = Math.min(1, bC.variationSemitones);
                                  let GC = MC.glideSemitones,
                                    AC = 1;
                                  ZC && (nC += bC.exclaimLiftSemitones, AC *= fC), zC && pC === RC && (nC += bC.questionRiseSemitones * (QC > 1 ? .5 + .5 * wC / (QC - 1) : 1), wC === QC - 1 && (GC = Math.abs(GC) + bC.questionRiseSemitones / 2)), CC && eC(PC.text) && (nC += qC * SC, AC *= oC), QC > 1 && 0 === wC && (nC += WC * SC, AC *= FC), KC.push({
                                    atMs: YC + wC * gC,
                                    semitones: nC,
                                    glideSemitones: GC,
                                    durationMs: wC < QC - 1 ? Math.min(MC.durationMs, gC * NC) : MC.durationMs,
                                    level: AC
                                  })
                                }
                                YC += QC * gC + (SC.test(PC.text) ? nC : GC.test(PC.text) ? bC : 0)
                              }
                            }
                            return {
                              pieces: RC.map((CC => "space" === CC.kind ? CC : "icon" === CC.kind ? {
                                kind: "icon",
                                icon: CC.text,
                                delayMs: CC.delayMs
                              } : {
                                kind: "word",
                                text: CC.text,
                                delayMs: CC.delayMs
                              })),
                              blips: KC
                            }
                          }
                          var KC = ZC(1143),
                            YC = ZC(1192),
                            dC = ZC(1843);

                          function mC(CC) {
                            if ("string" === typeof CC) return CC;
                            const zC = YC.h.get().getCurrentLanguageCode();
                            return (0, KC.r)(zC, CC.translationKey, (0, KC.q)(CC.params, dC.d.shown))
                          }

                          function HC(CC) {
                            const zC = void 0 === CC.voice ? null : (0, QC.q)(CC.voice),
                              ZC = zC && (0, QC.m)(zC);
                            return {
                              plan: hC(mC(CC.line), ZC),
                              synth: ZC
                            }
                          }

                          function EC(CC) {
                            const zC = [];
                            let ZC = [];
                            for (const [wC, bC] of CC.entries()) {
                              var QC;
                              "space" === bC.kind && (" " !== bC.text || "icon" !== (null === (QC = CC[wC + 1]) || void 0 === QC ? void 0 : QC.kind)) ? (ZC.length > 0 && zC.push(ZC), zC.push([bC]), ZC = []) : ZC.push(bC)
                            }
                            return ZC.length > 0 && zC.push(ZC), zC
                          }
                        }, 4788: (CC, zC, ZC) => {
                          ZC.d(zC, {
                            b: () => FC,
                            f: () => WC
                          });
                          var QC = ZC(4797),
                            wC = ZC(20);
                          const bC = .25,
                            nC = .85,
                            fC = .02,
                            oC = .01;

                          function qC(CC, zC, ZC, QC, wC, bC, fC) {
                            const {
                              waveform: oC,
                              pitchHz: qC,
                              attackMs: FC,
                              releaseMs: WC,
                              lowpassHz: NC
                            } = ZC, MC = wC + QC.durationMs / 1e3, gC = qC * 2 ** (QC.semitones / 12), SC = CC.createOscillator();
                            SC.type = oC, SC.frequency.setValueAtTime(gC, wC), SC.frequency.exponentialRampToValueAtTime(gC * 2 ** (QC.glideSemitones / 12), MC);
                            const pC = wC + Math.min(FC, QC.durationMs) / 1e3,
                              PC = CC.createGain();
                            PC.gain.setValueAtTime(0, wC), PC.gain.linearRampToValueAtTime(bC, pC), PC.gain.linearRampToValueAtTime(bC * nC, Math.max(pC, MC - WC / 1e3)), PC.gain.linearRampToValueAtTime(0, MC);
                            const GC = [SC];
                            if (null !== NC) {
                              const zC = CC.createBiquadFilter();
                              zC.type = "lowpass", zC.frequency.value = NC, GC.push(zC)
                            }
                            GC.push(PC, zC);
                            for (let nC = 1; nC < GC.length; nC++) GC[nC - 1].connect(GC[nC]);
                            return SC.onended = () => {
                              for (const CC of GC.slice(0, -1)) CC.disconnect();
                              fC()
                            }, SC.start(wC), SC.stop(MC), SC
                          }

                          function FC(CC, zC, ZC, QC, wC, nC) {
                            if (0 === QC.length) return nC(), () => {};
                            const FC = bC * ZC.volume * wC,
                              WC = CC.createGain();
                            WC.connect(zC);
                            const NC = CC.currentTime + fC,
                              MC = new Set;
                            for (const bC of QC) {
                              const zC = qC(CC, WC, ZC, bC, NC + bC.atMs / 1e3, FC * bC.level, (() => {
                                MC.delete(zC), 0 === MC.size && (WC.disconnect(), nC())
                              }));
                              MC.add(zC)
                            }
                            return () => {
                              const zC = CC.currentTime;
                              WC.gain.setTargetAtTime(0, zC, oC);
                              for (const CC of MC) try {
                                CC.stop(zC + 5 * oC)
                              } catch {}
                            }
                          }

                          function WC(CC, zC) {
                            var ZC;
                            const bC = QC.Howler.ctx,
                              nC = QC.Howler.masterGain;
                            if (!bC || !nC || !wC.b.get("soundOnFromAd")) return () => {};
                            const fC = QC.Howler;
                            return null === (ZC = fC._autoResume) || void 0 === ZC || ZC.call(fC), FC(bC, nC, CC, zC, wC.b.get("soundVolume"), (() => {
                              var CC;
                              null === (CC = fC._autoSuspend) || void 0 === CC || CC.call(fC)
                            }))
                          }
                        }, 4797: (CC, zC, ZC) => {
                          ZC.r(zC), ZC.d(zC, {
                            Howl: () => wC.Howl,
                            Howler: () => wC.Howler,
                            musicOutput: () => pC,
                            readyAudioContext: () => PC
                          });
                          var QC, wC = ZC(4801),
                            bC = ZC(3419),
                            nC = ZC(4587);
                          const fC = wC.Howler;

                          function oC() {
                            var CC, zC;
                            if (fC.ctx || !fC.usingWebAudio || "undefined" === typeof AudioContext || !(0, nC.h)()) return;
                            const ZC = navigator.audioSession;
                            let QC;
                            "auto" === (null === ZC || void 0 === ZC ? void 0 : ZC.type) && (ZC.type = "ambient");
                            try {
                              QC = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const wC = QC.createGain();
                            wC.gain.setValueAtTime(fC._muted ? 0 : null !== (CC = fC._volume) && void 0 !== CC ? CC : 1, QC.currentTime), wC.connect(QC.destination), fC.ctx = QC, fC.masterGain = wC, null === (zC = fC._setup) || void 0 === zC || zC.call(fC)
                          }
                          fC._mobileUnloaded = !0;
                          const qC = fC.volume.bind(wC.Howler);
                          fC.volume = function() {
                            return oC(), qC(...arguments)
                          };
                          const FC = fC.mute.bind(wC.Howler);
                          fC.mute = CC => (oC(), FC(CC));
                          const WC = wC.Howl.prototype,
                            NC = WC.init;

                          function MC() {
                            for (; fC._html5AudioPool.length < fC.html5PoolSize;) {
                              const CC = new Audio;
                              CC._unlocked = !0, fC._releaseHtml5Audio(CC)
                            }
                            for (const zC of fC._howls)
                              if (!zC._webAudio)
                                for (const ZC of zC._getSoundIds()) {
                                  var CC;
                                  const QC = null === (CC = zC._soundById(ZC)) || void 0 === CC ? void 0 : CC._node;
                                  QC && !QC._unlocked && (QC._unlocked = !0, QC.load())
                                }
                          }
                          WC.init = function(CC) {
                            return oC(), NC.call(this, CC)
                          }, (0, nC.h)() && (fC._unlockAudio = () => {
                            const CC = fC.ctx;
                            if (fC._audioUnlocked || !CC) return;
                            fC.autoUnlock = !1;
                            const zC = CC.createBuffer(1, 1, 22050);
                            fC._scratchBuffer = zC;
                            const ZC = new AbortController;
                            let QC = "afterPaint";
                            const wC = () => {
                                var QC;
                                if (fC._audioUnlocked) return;
                                null === (QC = fC._autoResume) || void 0 === QC || QC.call(fC);
                                const wC = CC.createBufferSource();
                                wC.buffer = zC, wC.connect(CC.destination), wC.start(0), CC.resume().catch((() => {})), wC.onended = () => {
                                  wC.disconnect(0), fC._audioUnlocked = !0, ZC.abort();
                                  for (const CC of fC._howls) CC._emit("unlock")
                                }
                              },
                              oC = () => {
                                MC(), wC()
                              },
                              qC = zC => {
                                if (MC(), "inTap" === QC) {
                                  if ("running" === CC.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), wC()
                                } else "afterPaint" === QC && (QC = "queued", (0, bC.c)(zC.timeStamp, (() => {
                                  QC = "inTap", wC()
                                })))
                              };
                            for (const bC of ["touchstart", "touchend"]) document.addEventListener(bC, oC, {
                              capture: !0,
                              signal: ZC.signal
                            });
                            for (const bC of nC.c) document.addEventListener(bC, qC, {
                              capture: !0,
                              signal: ZC.signal
                            })
                          });
                          let gC = 0;
                          const SC = null === (QC = fC._autoSuspend) || void 0 === QC ? void 0 : QC.bind(wC.Howler);

                          function pC() {
                            PC();
                            const {
                              ctx: CC,
                              masterGain: zC
                            } = fC;
                            return CC && zC ? {
                              ctx: CC,
                              destination: zC,
                              holdAwake: CC => {
                                var zC, ZC;
                                (gC += CC ? 1 : -1, CC) ? null === (zC = fC._autoResume) || void 0 === zC || zC.call(fC): null === (ZC = fC._autoSuspend) || void 0 === ZC || ZC.call(fC)
                              },
                              wake: () => {
                                var zC;
                                "running" !== CC.state && (null === (zC = fC._autoResume) || void 0 === zC || zC.call(fC), CC.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function PC() {
                            var CC;
                            (fC.volume(), fC.ctx && fC.autoUnlock) && (null === (CC = fC._unlockAudio) || void 0 === CC || CC.call(fC))
                          }
                          SC && (fC._autoSuspend = () => gC > 0 ? wC.Howler : SC())
                        }, 4804: (CC, zC, ZC) => {
                          function QC(CC) {
                            return {
                              notAfter: CC
                            }
                          }
                          ZC.d(zC, {
                            d: () => oC,
                            f: () => qC,
                            h: () => fC,
                            l: () => QC,
                            n: () => wC,
                            q: () => bC,
                            s: () => nC,
                            v: () => FC,
                            z: () => WC
                          });
                          const wC = QC("\\w$."),
                            bC = QC("\\w.,");

                          function nC(CC) {
                            return zC => oC(zC, CC)
                          }

                          function fC(CC) {
                            return zC => !CC.test(zC.input.slice(0, zC.index))
                          }

                          function oC(CC, zC) {
                            return CC.index > 0 && new RegExp(`[${zC}]`).test(CC.input[CC.index - 1])
                          }

                          function qC(CC, zC, ZC) {
                            return function(CC) {
                              return void 0 !== CC && "function" !== typeof CC
                            }(ZC) ? function(CC, zC, ZC) {
                              const QC = zC.flags.replace(/[gy]/g, ""),
                                wC = new RegExp(`[^${ZC}](?:${zC.source})`, `${QC}g`),
                                bC = [],
                                nC = ZC => {
                                  const QC = ZC.index + ZC[0].length;
                                  return ("" === ZC[0] ? NC(CC, zC, QC) : QC) - 1
                                },
                                fC = new RegExp(`(?:${zC.source})`, `${QC}y`).exec(CC);
                              if (fC) {
                                if (bC.push(fC), !zC.global) return bC;
                                wC.lastIndex = nC(fC)
                              }
                              for (let oC = wC.exec(CC); oC; oC = wC.exec(CC)) {
                                const ZC = NC(CC, zC, oC.index) - oC.index;
                                if (oC[0] = oC[0].slice(ZC), oC.index += ZC, bC.push(oC), !zC.global) break;
                                wC.lastIndex = nC(oC)
                              }
                              return bC
                            }(CC, zC, ZC.notAfter) : function(CC, zC, ZC) {
                              const QC = new RegExp(zC.source, `${zC.flags.replace(/[gy]/g,"")}g`),
                                wC = [];
                              for (let bC = QC.exec(CC); bC; bC = QC.exec(CC))
                                if (!ZC || ZC(bC)) {
                                  if (wC.push(bC), !zC.global) break;
                                  "" === bC[0] && (QC.lastIndex = NC(CC, zC, QC.lastIndex))
                                } else QC.lastIndex = NC(CC, zC, bC.index);
                              return wC
                            }(CC, zC, ZC)
                          }

                          function FC(CC, zC, ZC, QC) {
                            let wC = "",
                              bC = 0;
                            for (const nC of qC(CC, zC, ZC)) wC += CC.slice(bC, nC.index) + QC(nC), bC = nC.index + nC[0].length;
                            return wC + CC.slice(bC)
                          }

                          function WC(CC, zC, ZC) {
                            const QC = [];
                            let wC = 0;
                            for (const bC of qC(CC, zC, ZC)) QC.push(CC.slice(wC, bC.index)), wC = bC.index + bC[0].length;
                            return [...QC, CC.slice(wC)]
                          }

                          function NC(CC, zC, ZC) {
                            var QC;
                            return ZC + (zC.unicode && (null !== (QC = CC.codePointAt(ZC)) && void 0 !== QC ? QC : 0) > 65535 ? 2 : 1)
                          }
                        }, 4755: (CC, zC, ZC) => {
                          ZC.d(zC, {
                            b: () => wC,
                            d: () => oC,
                            g: () => bC,
                            k: () => nC,
                            m: () => fC,
                            n: () => pC,
                            p: () => FC,
                            t: () => WC,
                            w: () => SC,
                            y: () => MC
                          });
                          var QC = ZC(1520);
                          const wC = 24e3,
                            bC = "/docs/llms.txt",
                            nC = `${QC.d}${bC}`,
                            fC = "/llms.txt",
                            oC = "/docs/llms-full.txt";

                          function qC(CC) {
                            return CC || "index"
                          }

                          function FC(CC) {
                            return `/docs/${qC(CC)}.md`
                          }

                          function WC(CC, zC) {
                            return `/docs/${qC(CC)}/${zC+1}.md`
                          }
                          const NC = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function MC(CC) {
                            const zC = NC.exec(CC);
                            return null === zC ? null : {
                              name: zC[1],
                              part: void 0 === zC[2] ? null : Number(zC[2])
                            }
                          }
                          const gC = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function SC(CC) {
                            const zC = gC.exec(CC);
                            if (null === zC) return null;
                            const [, ZC = "", QC] = zC;
                            return void 0 === QC ? FC(ZC) : WC(ZC, Number(QC) - 1)
                          }

                          function pC(CC) {
                            return `/docsHtml/${qC(CC)}.html`
                          }
                        }, 4783: (CC, zC, ZC) => {
                          ZC.d(zC, {
                            b: () => wC,
                            f: () => QC,
                            i: () => bC,
                            m: () => oC,
                            q: () => nC
                          });
                          const QC = ["sine", "triangle", "square", "sawtooth"],
                            wC = 55,
                            bC = {
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

                          function nC(CC) {
                            return "string" !== typeof CC ? CC : Object.hasOwn(bC, CC) ? bC[CC] : null
                          }

                          function fC(CC, zC, ZC) {
                            return Math.min(ZC, Math.max(zC, CC))
                          }

                          function oC(CC) {
                            const zC = fC(CC.durationMs, 10, 500),
                              ZC = fC(CC.attackMs, 0, zC),
                              {
                                intonation: wC
                              } = CC;
                            return {
                              waveform: QC.includes(CC.waveform) ? CC.waveform : "sine",
                              pitchHz: fC(CC.pitchHz, 20, 4e3),
                              glideSemitones: fC(CC.glideSemitones, -24, 24),
                              durationMs: zC,
                              attackMs: ZC,
                              releaseMs: fC(CC.releaseMs, 0, zC - ZC),
                              lowpassHz: null === CC.lowpassHz ? null : fC(CC.lowpassHz, 20, 2e4),
                              volume: fC(CC.volume, 0, 2),
                              intonation: {
                                variationSemitones: fC(wC.variationSemitones, 0, 6),
                                declineSemitones: fC(wC.declineSemitones, 0, 12),
                                questionRiseSemitones: fC(wC.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: fC(wC.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: fC(CC.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const CC in modules) Object.freeze(modules[CC]);