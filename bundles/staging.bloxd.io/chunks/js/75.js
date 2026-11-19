export const id = 75;
export const ids = [75, 91];
export const modules = {
    4599: (DD, CD, cD) => {
      cD.d(CD, {
        c: () => oD,
        e: () => vD
      });
      var ID = cD(1049),
        pD = cD.n(ID),
        iD = cD(53),
        fD = cD(1192),
        bD = cD(4606),
        QD = cD(1872),
        wD = cD(2358),
        SD = cD(4608),
        BD = cD(1093);
      const yD = new WeakMap;
      let MD = 0;

      function tD(DD) {
        let CD = yD.get(DD);
        return void 0 === CD && (CD = MD++, yD.set(DD, CD)), CD
      }

      function ZD(DD) {
        let {
          piece: CD
        } = DD;
        return "space" === CD.kind ? (0, BD.jsx)(BD.Fragment, {
          children: CD.text
        }) : (0, BD.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${CD.delayMs}ms`
          },
          children: (0, BD.jsx)(bD.b, {
            text: "icon" === CD.kind ? `[[${CD.icon}]]` : CD.text
          })
        })
      }

      function oD(DD) {
        let {
          display: CD
        } = DD;
        const {
          selectedLanguage: cD
        } = (0, fD.F)(), ID = (0, iD.useMemo)((() => (0, SD.d)((0, SD.e)(CD).plan.pieces)), [CD, cD.code]);
        return (0, BD.jsxs)("div", {
          className: pD()("Dialogue", {
            DialogueAnimateIn: !1 !== CD.animateIn
          }),
          children: [CD.speakerName && (0, BD.jsx)(QD.c, {
            text: CD.speakerName,
            className: "DialogueSpeaker"
          }), (0, BD.jsx)("p", {
            className: "DialogueLine",
            children: ID.map(((DD, CD) => 1 === DD.length && "space" === DD[0].kind ? DD[0].text : (0, BD.jsx)("span", {
              className: "DialogueGlue",
              children: DD.map(((DD, CD) => (0, BD.jsx)(ZD, {
                piece: DD
              }, CD)))
            }, CD)))
          })]
        })
      }
      const vD = (0, iD.memo)((function() {
        const DD = (0, wD.h)("dialogue");
        return (0, BD.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: DD && (0, BD.jsx)(oD, {
            display: DD
          }, tD(DD))
        })
      }))
    },
    4504: (DD, CD, cD) => {
        cD.r(CD), cD.d(CD, {
          default: () => Cf
        });
        var ID = cD(53),
          pD = cD(1049),
          iD = cD.n(pD),
          fD = cD(1510),
          bD = cD(1517),
          QD = cD(16),
          wD = cD(62),
          SD = cD(4512),
          BD = cD(4524),
          yD = cD(4526),
          MD = cD(4175),
          tD = cD(1093);
        const ZD = "/textures/docs/icons";

        function oD(DD) {
          let {
            name: CD,
            isTinted: cD,
            className: ID,
            style: pD
          } = DD;
          const fD = `${ZD}/${CD}.png`;
          return cD ? (0, tD.jsxs)("span", {
            className: iD()("DocsPixelIcon", "Tinted", ID),
            "aria-hidden": "true",
            style: pD,
            children: [(0, tD.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${fD}")`,
                WebkitMaskImage: `url("${fD}")`
              }
            }), (0, tD.jsx)("img", {
              src: fD,
              alt: ""
            })]
          }) : (0, tD.jsx)("img", {
            className: iD()("DocsPixelIcon", ID),
            src: fD,
            alt: "",
            "aria-hidden": "true",
            style: pD
          })
        }
        const vD = 1500;

        function ND() {
          const [DD, CD] = (0, ID.useState)(null);
          (0, ID.useEffect)((() => {
            if (null === DD) return;
            const cD = setTimeout((() => {
              CD(null)
            }), vD);
            return () => {
              clearTimeout(cD)
            }
          }), [DD]);
          return [DD, DD => {
            (0, MD.c)(DD).then((() => {
              CD({
                text: DD,
                failed: !1
              })
            }), (cD => {
              console.error("Could not copy to the clipboard", cD), CD({
                text: DD,
                failed: !0
              })
            }))
          }]
        }

        function gD(DD) {
          let {
            text: CD,
            label: cD,
            className: ID
          } = DD;
          const [pD, fD] = ND(), bD = !1 === (null === pD || void 0 === pD ? void 0 : pD.failed);
          return (0, tD.jsxs)("button", {
            type: "button",
            className: iD()("DocsCopyButton", ID, {
              Copied: bD
            }),
            title: `Copy ${CD.length>40?"to clipboard":CD}`,
            "aria-label": cD ? void 0 : `Copy ${CD}`,
            onClick: DD => {
              DD.stopPropagation(), fD(CD)
            },
            children: [(0, tD.jsx)(oD, {
              name: bD ? "check" : "copy"
            }), cD && (0, tD.jsx)("span", {
              children: bD ? "Copied" : null !== pD && void 0 !== pD && pD.failed ? "Copy failed" : cD
            })]
          })
        }
        SD.c.registerLanguage("javascript", BD.e), SD.c.registerLanguage("typescript", yD.d);
        const XD = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          mD = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          nD = 24;

        function OD(DD) {
          let {
            code: CD,
            lang: cD,
            compact: pD = !1
          } = DD;
          const fD = (0, ID.useMemo)((() => function(DD, CD) {
              const cD = XD[CD];
              return cD ? SD.c.highlight(DD, {
                language: cD
              }).value : DD.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(CD, cD)), [CD, cD]),
            bD = CD.split("\n").length,
            QD = !pD && bD > nD + 6,
            [wD, BD] = (0, ID.useState)(!1),
            yD = XD[cD];
          return (0, tD.jsxs)("div", {
            className: iD()("DocsCodeBlock", {
              Compact: pD,
              Collapsed: QD && !wD
            }),
            children: [!pD && (0, tD.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, tD.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: yD ? mD[yD] : "Text"
              }), (0, tD.jsx)(gD, {
                text: CD,
                label: "Copy"
              })]
            }), (0, tD.jsx)("pre", {
              children: (0, tD.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: fD
                }
              })
            }), QD && (0, tD.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": wD,
              onClick: () => {
                BD(!wD)
              },
              children: [(0, tD.jsx)(oD, {
                name: wD ? "chevron-up" : "chevron-down"
              }), wD ? "Show less" : `Show all ${bD} lines`]
            })]
          })
        }
        var PD = cD(4534);
        var HD = cD(4537);
        const UD = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function xD(DD) {
          const CD = new Map;
          let cD, ID = [],
            pD = !1;
          const iD = () => {
            cD && CD.set(cD.name, cD.lines.join("\n").trimEnd())
          };
          for (const fD of DD.split("\n")) {
            const DD = fD.match(UD);
            pD || fD.startsWith("/*") ? (pD || (iD(), cD = void 0), ID.push(fD), pD = !fD.includes("*/")) : DD ? (iD(), cD = {
              name: DD[1],
              lines: [...ID, fD]
            }, ID = []) : cD && (fD.startsWith(" ") || fD.startsWith("\t") || /^[}\])|]/.test(fD)) ? cD.lines.push(fD) : cD && "" !== fD.trim() && (iD(), cD = void 0)
          }
          return iD(), CD
        }

        function qD(DD) {
          return "methods" === DD || "callbacks" === DD || "settings" === DD
        }
        const JD = {
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
              setterSnippet: (DD, CD) => `api.setClientOption(playerId, "${DD}", ${CD})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (DD, CD) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${DD}", ${CD})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (DD, CD) => `api.setMobSetting(mobId, "${DD}", ${CD})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (DD, CD) => `api.setVehicleSetting(vehicleId, "${DD}", ${CD})`
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
          KD = {
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

        function aD(DD) {
          return DD.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function VD(DD) {
          let CD = !1;
          return DD.split("\n").map((DD => (DD.startsWith("```") && (CD = !CD), !CD && /^#{3,} /.test(DD) ? DD.slice(1) : DD))).join("\n")
        }

        function zD(DD) {
          return "readme" === DD ? "getting-started" : aD(DD)
        }
        const jD = "## Glossary of Referenced Types";
        const lD = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...HD.c.flatMap((DD => {
            const CD = {
              id: DD.id,
              slug: zD(DD.id),
              title: DD.title,
              markdown: DD.content,
              ...JD[DD.id]
            };
            if ("readme" === DD.id) return function(DD) {
              const CD = DD.markdown.indexOf(jD),
                cD = DD.markdown.indexOf("\n```", CD),
                ID = DD.markdown.indexOf("\n```", cD + 1);
              if (-1 === CD || -1 === cD || -1 === ID) throw new Error(`Getting started has no "${jD}" section with a code block`);
              const pD = DD.markdown.slice(CD + 31, cD).trim(),
                iD = [...xD(DD.markdown.slice(DD.markdown.indexOf("\n", cD + 1) + 1, ID))].map((DD => {
                  let [CD, cD] = DD;
                  return `## ${CD}\n\n\`\`\`ts\n${cD}\n\`\`\`\n`
                })),
                fD = DD.markdown.slice(DD.markdown.indexOf("\n", ID + 1) + 1);
              return [{
                ...DD,
                markdown: `${DD.markdown.slice(0,CD)}${fD}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${pD}\n\n${iD.join("\n")}`
              }]
            }(CD);
            if ("howTo" === DD.id) {
              const {
                parent: DD,
                guides: cD
              } = function(DD) {
                const [CD, ...cD] = DD.markdown.split(/^(?=## )/m), ID = [CD], pD = [];
                for (const fD of cD) {
                  var iD;
                  const CD = fD.indexOf("\n"),
                    cD = fD.slice(3, CD).trim(),
                    bD = fD.slice(CD + 1);
                  if (!bD.includes("```")) {
                    ID.push(fD);
                    continue
                  }
                  const QD = null !== (iD = KD[cD]) && void 0 !== iD ? iD : {
                    icon: "lightbulb",
                    summary: `How to use ${cD.toLowerCase()} in World Code.`
                  };
                  pD.push({
                    id: `${DD.id}${cD.split(/[^A-Za-z0-9]+/).map((DD=>DD.charAt(0).toUpperCase()+DD.slice(1))).join("")}`,
                    slug: `${DD.slug}-${aD(cD)}`,
                    title: cD,
                    layout: "article",
                    sourceAnchor: (0, PD.u)(cD),
                    markdown: `# ${cD}\n\n${VD(bD)}`,
                    ...QD
                  })
                }
                return {
                  parent: {
                    ...DD,
                    markdown: ID.join(""),
                    childPageIds: pD.map((DD => DD.id))
                  },
                  guides: pD
                }
              }(CD);
              return [DD, ...cD]
            }
            return [CD]
          }))],
          LD = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...lD.filter((DD => void 0 !== DD.sourceAnchor)).map((DD => DD.id))]
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

        function TD(DD) {
          return lD.find((CD => CD.id === DD))
        }
        const GD = new Map;

        function RD(DD) {
          let CD = GD.get(DD.id);
          return CD || (CD = (0, PD.B)(DD.markdown, "changelog" === DD.layout ? 3 : 2), GD.set(DD.id, CD)), CD
        }

        function kD(DD, CD) {
          return RD(DD).sections.some((DD => DD.heading.anchor === CD || DD.blocks.some((DD => "heading" === DD.kind && DD.anchor === CD))))
        }

        function dD(DD) {
          const [CD, ...cD] = DD.replace(/^#/, "").split("-"), ID = lD.find((DD => DD.id === CD));
          if (!ID) return null;
          const pD = cD.length > 0 ? (0, PD.u)(cD.join("-")) : "";
          for (const fD of null !== (iD = ID.childPageIds) && void 0 !== iD ? iD : []) {
            var iD;
            const DD = TD(fD);
            if (DD.sourceAnchor === pD) return {
              page: DD,
              anchor: ""
            };
            if (kD(DD, pD)) return {
              page: DD,
              anchor: pD
            }
          }
          return {
            page: ID,
            anchor: pD
          }
        }
        const YD = {
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

        function WD(DD, CD) {
          let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const ID = CD.slug ? `${DD}/${CD.slug}` : DD;
          return cD ? `${ID}#${cD}` : ID
        }
        var sD = cD(4550);
        const ED = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          eD = new Set(["GameApi", "Console", "_TypeOf"]),
          uD = 4;

        function hD(DD) {
          let CD = DD.length;
          for (; CD > 0 && "" === DD[CD - 1].trim();) CD--;
          return DD.slice(0, CD)
        }

        function rD(DD) {
          var CD;
          const cD = hD(DD);
          if (null === (CD = cD.at(-1)) || void 0 === CD || !CD.trimEnd().endsWith("*/")) return {
            lines: cD,
            doc: ""
          };
          const ID = cD.findLastIndex((DD => DD.startsWith("/**")));
          return -1 === ID ? {
            lines: cD,
            doc: ""
          } : {
            lines: hD(cD.slice(0, ID)),
            doc: cD.slice(ID).join("\n")
          }
        }

        function AD(DD) {
          var CD;
          const cD = DD.split("\n"),
            ID = cD.flatMap(((DD, CD) => ED.test(DD) ? [CD] : []));
          let pD = rD(cD.slice(0, null !== (CD = ID[0]) && void 0 !== CD ? CD : cD.length)).doc;
          return ID.map(((DD, CD) => {
            var iD;
            const fD = rD(cD.slice(DD, null !== (iD = ID[CD + 1]) && void 0 !== iD ? iD : cD.length)),
              bD = {
                name: cD[DD].match(ED)[1],
                doc: pD,
                lines: fD.lines
              };
            return pD = fD.doc, bD
          }))
        }

        function FD(DD) {
          var CD;
          const cD = DD.match(/^readonly \[([\s\S]*)\]$/);
          return cD ? null !== (CD = cD[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== CD ? CD : [] : null
        }

        function DC(DD) {
          if (!DD.startsWith("{") || !DD.endsWith("}")) return null;
          const CD = {
              keys: [],
              values: []
            },
            cD = DD => {
              const cD = DD.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              cD && (CD.keys.push(cD[1].startsWith('"') ? cD[1] : `"${cD[1]}"`), CD.values.push(cD[2].trim()))
            };
          let ID = 0,
            pD = "";
          for (const iD of DD.slice(1, -1)) "{[(".includes(iD) ? ID++ : "}])".includes(iD) && ID--, ";" === iD && 0 === ID ? (cD(pD), pD = "") : pD += iD;
          return cD(pD), CD
        }

        function CC(DD) {
          return DD.length > uD ? `\n\t| ${DD.join("\n\t| ")}` : DD.join(" | ")
        }

        function cC(DD, CD) {
          const cD = function(DD, CD) {
            return DD.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((DD, cD) => {
              var ID;
              const pD = null === (ID = CD.get(cD)) || void 0 === ID ? void 0 : ID.object;
              return pD ? CC(pD.values) : DD
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((DD, cD) => {
              var ID, pD;
              const iD = null === (ID = CD.get(cD)) || void 0 === ID || null === (pD = ID.object) || void 0 === pD ? void 0 : pD.values.map(FD);
              return null !== iD && void 0 !== iD && iD.every((DD => null !== DD)) ? CC([...new Set(iD.flat())]) : DD
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((DD, cD) => {
              var ID;
              const pD = null === (ID = CD.get(cD)) || void 0 === ID ? void 0 : ID.members;
              return pD ? CC(pD) : DD
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((DD, cD) => {
              var ID;
              const pD = null === (ID = CD.get(cD)) || void 0 === ID ? void 0 : ID.object;
              return pD ? CC(pD.keys) : DD
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((DD, cD) => {
              var ID, pD;
              return null !== (ID = null === (pD = CD.get(cD)) || void 0 === pD ? void 0 : pD.text) && void 0 !== ID ? ID : DD
            }))
          }(DD.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), CD);
          return [DD.doc, cD].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function IC(DD) {
          const CD = AD(DD),
            cD = function(DD) {
              const CD = new Map,
                cD = DD.find((DD => "_TypeOf" === DD.name));
              let ID = null;
              const pD = () => {
                if (ID) {
                  const DD = ID.lines.join("\n");
                  CD.set(ID.name, {
                    text: DD,
                    members: FD(DD),
                    object: DC(DD)
                  })
                }
              };
              for (const iD of cD.lines.slice(1, -1)) {
                const DD = iD.match(/^\t([\w$]+): (.+)$/);
                DD ? (pD(), ID = {
                  name: DD[1],
                  lines: [DD[2]]
                }) : ID && ID.lines.push(iD.replace(/^\t/, ""))
              }
              return pD(), CD
            }(CD),
            ID = new Map;
          for (const pD of CD) eD.has(pD.name) || ID.has(pD.name) || ID.set(pD.name, cC(pD, cD));
          return ID
        }
        let pC, iC, fC;

        function bC() {
          return iC ??= function(DD) {
            const CD = AD(DD).find((DD => "GameApi" === DD.name)),
              cD = new Map,
              ID = CD.lines;
            for (let iD = 0; iD < ID.length; iD++) {
              var pD;
              if (!ID[iD].trimStart().startsWith("/**")) continue;
              const DD = iD;
              for (; iD < ID.length && !ID[iD].includes("*/");) iD++;
              const CD = null === (pD = ID[iD + 1]) || void 0 === pD ? void 0 : pD.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!CD) continue;
              let fD = null;
              const bD = [];
              let QD = "description",
                wD = !1;
              for (const cD of ID.slice(DD, iD + 1).join("\n").split("\n").map((DD => DD.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const DD = cD.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                DD ? (fD = DD[1].trim(), QD = "deprecation") : cD.startsWith("@") ? (QD = "otherTag", wD = !0) : "" === cD.trim() ? wD || (QD = "description", bD.push(cD)) : "deprecation" !== QD || /^[A-Z]/.test(cD.trim()) ? "otherTag" !== QD && (QD = "description", bD.push(cD)) : fD = `${fD} ${cD.trim()}`.trim()
              }
              cD.set(CD[1], {
                deprecation: fD,
                description: bD.join("\n").trim()
              })
            }
            return cD
          }(sD.default), iC
        }

        function QC() {
          if (!fC) {
            fC = new Map;
            for (const DD of lD) {
              const CD = (0, PD.y)(RD(DD)).flatMap((DD => DD.blocks));
              for (const DD of (0, PD.l)(CD))
                if ("ts" === DD.lang || "typescript" === DD.lang)
                  for (const [CD, cD] of xD(DD.code)) fC.set(CD, cD)
            }
            for (const [DD, CD] of(pC ??= IC(sD.default), pC)) fC.has(DD) || fC.set(DD, CD)
          }
          return fC
        }
        const wC = {
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
        let SC;

        function BC() {
          if (!SC) {
            SC = new Map;
            for (const DD of lD)
              if (qD(DD.layout))
                for (const CD of RD(DD).sections) SC.has(CD.heading.text) || SC.set(CD.heading.text, {
                  pageId: DD.id,
                  anchor: CD.heading.anchor
                })
          }
          return SC
        }

        function yC(DD) {
          const CD = DD.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return CD ? BC().get(CD[1]) : void 0
        }
        const MC = (0, ID.createContext)("/docs"),
          tC = (0, ID.createContext)(null),
          ZC = (0, ID.createContext)(!1),
          oC = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function vC(DD) {
          const CD = DD.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return CD ? CD[1] : null
        }

        function NC(DD) {
          let {
            colour: CD
          } = DD;
          return (0, tD.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: CD
            },
            "aria-hidden": "true"
          })
        }

        function gC(DD) {
          const CD = [];
          let cD = 0;
          for (const ID of DD.matchAll(oC)) CD.push(DD.slice(cD, ID.index), (0, tD.jsx)(NC, {
            colour: ID[0]
          }), ID[0]), cD = ID.index + ID[0].length;
          return CD.push(DD.slice(cD)), CD
        }

        function XC(DD) {
          let {
            href: CD,
            children: cD
          } = DD;
          const pD = (0, ID.useContext)(MC);
          if (CD.startsWith("#")) {
            const DD = dD(CD);
            if (DD) return (0, tD.jsx)(fD.d, {
              to: WD(pD, DD.page, DD.anchor),
              children: (0, tD.jsx)(ZC.Provider, {
                value: !0,
                children: cD
              })
            })
          }
          return (0, tD.jsx)("a", {
            href: CD,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, tD.jsx)(ZC.Provider, {
              value: !0,
              children: cD
            })
          })
        }

        function mC(DD) {
          let {
            code: CD
          } = DD;
          const cD = (0, ID.useContext)(MC);
          if ((0, ID.useContext)(ZC)) return (0, tD.jsx)("code", {
            className: "DocsInlineCode",
            children: CD
          });
          if (QC().has(CD)) return (0, tD.jsx)(HC, {
            type: CD
          });
          const pD = yC(CD);
          if (pD) return (0, tD.jsx)(fD.d, {
            className: "DocsInlineCode DocsSymbolLink",
            to: WD(cD, TD(pD.pageId), pD.anchor),
            children: CD
          });
          const iD = vC(CD);
          return (0, tD.jsxs)("code", {
            className: "DocsInlineCode",
            children: [iD && (0, tD.jsx)(NC, {
              colour: iD
            }), CD]
          })
        }

        function nC(DD) {
          let {
            text: CD
          } = DD;
          const cD = [];
          let pD = 0;
          for (const ID of CD.matchAll(PD.i)) {
            ID.index > pD && cD.push(...gC(CD.slice(pD, ID.index)));
            const [, DD, iD, fD, bD, QD] = ID;
            DD ? cD.push((0, tD.jsx)(mC, {
              code: (0, PD.o)(DD, iD)
            })) : fD ? cD.push((0, tD.jsx)("strong", {
              children: (0, tD.jsx)(nC, {
                text: fD
              })
            })) : cD.push((0, tD.jsx)(XC, {
              href: QD,
              children: (0, tD.jsx)(nC, {
                text: bD
              })
            })), pD = ID.index + ID[0].length
          }
          return pD < CD.length && cD.push(...gC(CD.slice(pD))), (0, tD.jsx)(tD.Fragment, {
            children: cD.map(((DD, CD) => (0, tD.jsx)(ID.Fragment, {
              children: DD
            }, CD)))
          })
        }
        const OC = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          PC = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function HC(DD) {
          let {
            type: CD
          } = DD;
          const cD = QC(),
            pD = [];
          for (const ID of CD.trim().matchAll(OC)) {
            const [DD, CD, iD, fD, bD] = ID;
            CD ? pD.push((0, tD.jsx)("span", {
              className: "DocsTypeString",
              children: DD
            })) : iD && cD.has(iD) ? pD.push((0, tD.jsx)(KC, {
              name: iD,
              definition: cD.get(iD)
            })) : iD ? pD.push((0, tD.jsx)("span", {
              className: PC.has(iD) ? "DocsTypeKeyword" : "DocsTypeName",
              children: DD
            })) : fD ? pD.push((0, tD.jsx)("span", {
              className: "DocsTypeNumber",
              children: DD
            })) : bD ? pD.push(" ") : pD.push((0, tD.jsx)("span", {
              className: "DocsTypePunctuation",
              children: DD
            }))
          }
          return (0, tD.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: pD.map(((DD, CD) => (0, tD.jsx)(ID.Fragment, {
              children: DD
            }, CD)))
          })
        }
        const UC = 480,
          xC = 6,
          qC = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let JC = 0;

        function KC(DD) {
          let {
            name: CD,
            definition: cD
          } = DD;
          const pD = (0, ID.useContext)(MC),
            iD = wC[CD],
            bD = (0, ID.useRef)(null),
            QD = (0, ID.useRef)(null),
            SD = (0, ID.useRef)(null),
            [BD, yD] = (0, ID.useState)(!1),
            [MD, ZD] = (0, ID.useState)(null),
            vD = (0, ID.useRef)(),
            ND = (0, ID.useContext)(tC),
            [gD] = (0, ID.useState)((() => "DocsTypePopover-" + JC++)),
            XD = () => {
              clearTimeout(vD.current), yD(!0)
            },
            mD = () => {
              clearTimeout(vD.current), vD.current = setTimeout((() => {
                yD(!1)
              }), 120)
            };
          return (0, ID.useEffect)((() => {
            if (!BD) return;
            const DD = DD => {
              if ("Escape" === DD.key) {
                var CD, cD;
                if (null !== (CD = QD.current) && void 0 !== CD && CD.contains(document.activeElement)) null === (cD = bD.current) || void 0 === cD || cD.focus();
                yD(!1)
              }
            };
            return document.addEventListener("keydown", DD), () => {
              document.removeEventListener("keydown", DD)
            }
          }), [BD]), (0, ID.useEffect)((() => () => {
            clearTimeout(vD.current)
          }), []), (0, ID.useLayoutEffect)((() => {
            if (!BD || !bD.current || !QD.current) return void ZD(null);
            const DD = bD.current.getBoundingClientRect(),
              CD = QD.current.offsetHeight,
              cD = Math.min(UC, window.innerWidth - 32),
              ID = Math.min(Math.max(16, DD.left), window.innerWidth - cD - 16),
              pD = DD.bottom + xC + CD < window.innerHeight;
            ZD({
              left: ID,
              top: pD ? DD.bottom + xC : Math.max(16, DD.top - xC - CD)
            })
          }), [BD]), (0, tD.jsxs)(tD.Fragment, {
            children: [(0, tD.jsx)("button", {
              type: "button",
              ref: bD,
              className: "DocsTypeLink",
              "aria-expanded": BD,
              "aria-describedby": BD ? gD : void 0,
              onMouseEnter: XD,
              onMouseLeave: mD,
              onFocus: XD,
              onBlur: mD,
              onKeyDown: DD => {
                "Tab" === DD.key && !DD.shiftKey && SD.current && (DD.preventDefault(), SD.current.focus())
              },
              onClick: XD,
              children: CD
            }), BD && (0, wD.createPortal)((0, tD.jsxs)("span", {
              ref: QD,
              id: gD,
              className: "DocsTypePopover",
              role: "tooltip",
              style: MD ? {
                left: MD.left,
                top: MD.top,
                maxWidth: UC
              } : {
                visibility: "hidden"
              },
              onMouseEnter: XD,
              onMouseLeave: mD,
              onFocus: XD,
              onBlur: mD,
              children: [(0, tD.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, tD.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: CD
                }), iD && (0, tD.jsxs)(fD.d, {
                  ref: SD,
                  className: "DocsTypePopoverLink",
                  to: WD(pD, TD(iD)),
                  onClick: () => {
                    yD(!1)
                  },
                  onKeyDown: DD => {
                    if ("Tab" === DD.key) {
                      var CD;
                      if (DD.preventDefault(), DD.shiftKey || !bD.current || ! function(DD, CD) {
                          const cD = [...document.querySelectorAll(qC)],
                            ID = cD.slice(cD.indexOf(DD) + 1).find((DD => DD.getClientRects().length > 0 && !(null !== CD && void 0 !== CD && CD.contains(DD))));
                          return null === ID || void 0 === ID || ID.focus(), void 0 !== ID
                        }(bD.current, QD.current)) null === (CD = bD.current) || void 0 === CD || CD.focus();
                      DD.shiftKey || yD(!1)
                    }
                  },
                  children: [TD(iD).title, (0, tD.jsx)(oD, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, tD.jsx)(OD, {
                lang: "ts",
                code: cD,
                compact: !0
              })]
            }), null !== ND && void 0 !== ND ? ND : document.body)]
          })
        }
        var aC = cD(194),
          VC = cD(4557),
          zC = cD(4560),
          jC = cD(4562);
        const lC = {
          progressBar: {
            KD: 30,
            aD: .075,
            VD: 5,
            zD: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            LD: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            GD: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            RD: !0,
            scale: 3,
            rotation: 15,
            kD: !1
          },
          gravityBar: {
            KD: 30,
            YD: .25,
            WD: 3,
            sD: .8,
            gravity: 1,
            ED: 1.5,
            eD: 8,
            uD: 4,
            zD: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            rD: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            FD: 5,
            DC: 1200,
            CC: .15,
            cC: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var LC = cD(312),
          TC = cD(1969);

        function GC(DD) {
          return DD.startsWith("fa-")
        }
        const RC = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          kC = {
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

        function dC(DD) {
          return "string" === typeof DD ? "text" : "entityName" in DD || "translationKey" in DD ? "other" : (0, LC.wb)(DD) ? "progressBar" : (0, LC.sb)(DD) ? "keyBinding" : "icon" in DD ? "icon" : "str" in DD && "string" === typeof DD.str ? "text" : "other"
        }
        const YC = [{
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
          WC = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...YC],
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
                options: TC.k
              },
              isRequired: !0
            }, ...YC],
            other: []
          };

        function sC(DD) {
          return "string" === typeof DD ? {
            str: DD
          } : DD
        }

        function EC(DD, CD) {
          let cD = sC(DD);
          for (const ID of CD) cD = cD && "object" === typeof cD ? cD[ID] : void 0;
          return cD
        }

        function eC(DD, CD, cD) {
          const ID = (DD, pD) => {
            var iD;
            const fD = CD[pD],
              bD = {
                ...DD
              };
            if (pD === CD.length - 1) return void 0 === cD ? delete bD[fD] : bD[fD] = cD, bD;
            const QD = ID(null !== (iD = DD[fD]) && void 0 !== iD ? iD : {}, pD + 1);
            return 0 === Object.keys(QD).length ? delete bD[fD] : bD[fD] = QD, bD
          };
          return function(DD) {
            const CD = Object.keys(DD);
            return "string" === typeof DD.str && 1 === CD.length ? DD.str : DD
          }(ID(sC(DD), 0))
        }

        function uC(DD, CD) {
          const cD = dC(DD),
            ID = WC[cD].find((DD => DD.path.join(".") === CD.join("."))),
            pD = null !== ID && void 0 !== ID && ID.isRequired && "other" !== cD ? EC(kC[cD], CD) : void 0;
          return eC(DD, CD, pD)
        }

        function hC(DD) {
          switch (dC(DD)) {
            case "text":
              return String(EC(DD, ["str"]));
            case "icon":
              return String(EC(DD, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(EC(DD,["progress"])))}%`;
            case "keyBinding":
              return String(EC(DD, ["action"]));
            case "other":
              return JSON.stringify(DD)
          }
        }
        const rC = /^[A-Za-z_$][\w$]*$/;

        function AC(DD) {
          if (Array.isArray(DD)) return `[${DD.map(AC).join(", ")}]`;
          if (DD && "object" === typeof DD) {
            const CD = Object.entries(DD).map((DD => {
              let [CD, cD] = DD;
              return `${rC.test(CD)?CD:JSON.stringify(CD)}: ${AC(cD)}`
            }));
            return 0 === CD.length ? "{}" : `{ ${CD.join(", ")} }`
          }
          return JSON.stringify(DD)
        }

        function FC(DD) {
          const CD = DD.map(AC),
            cD = `[${CD.join(", ")}]`;
          return cD.length <= 60 ? cD : `[\n${CD.map((DD=>`    ${DD},`)).join("\n")}\n]`
        }
        const Dc = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function Cc(DD) {
          let CD = "";
          for (let pD = 0; pD < DD.length; pD++) {
            const iD = DD[pD];
            if ("\\" === iD) {
              var cD;
              const ID = null !== (cD = DD[pD + 1]) && void 0 !== cD ? cD : "";
              CD += "'" === ID ? "'" : iD + ID, pD++
            } else if ('"' === iD) CD += '\\"';
            else {
              var ID;
              CD += null !== (ID = Dc[iD]) && void 0 !== ID ? ID : iD
            }
          }
          return `"${CD}"`
        }

        function cc(DD) {
          if ("string" === typeof DD) return !0;
          if (!DD || "object" !== typeof DD || Array.isArray(DD)) return !1;
          const CD = DD;
          return "ProgressBar" === CD.type ? "number" === typeof CD.progress : "StyledKeyBinding" === CD.type ? TC.k.includes(CD.action) : "string" === typeof CD.icon || "string" === typeof CD.str || "string" === typeof CD.entityName || "string" === typeof CD.translationKey
        }

        function Ic(DD) {
          let CD;
          try {
            CD = function(DD) {
              let CD = "",
                cD = "",
                ID = 0;
              const pD = () => {
                CD += cD.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), cD = ""
              };
              for (; ID < DD.length;) {
                const iD = DD.slice(ID).search(/["'`]|\/\//);
                if (-1 === iD) {
                  cD += DD.slice(ID);
                  break
                }
                cD += DD.slice(ID, ID + iD);
                const fD = ID + iD,
                  bD = DD[fD];
                if ("/" === bD) {
                  const CD = DD.indexOf("\n", fD);
                  ID = -1 === CD ? DD.length : CD;
                  continue
                }
                if (pD(), "`" === bD) throw new Error("Use quotes rather than template strings.");
                let QD = fD + 1;
                for (; QD < DD.length && DD[QD] !== bD;) QD += "\\" === DD[QD] ? 2 : 1;
                if (QD >= DD.length) throw new Error("A string is missing its closing quote.");
                const wD = DD.slice(fD + 1, QD);
                CD += Cc(wD), ID = QD + 1
              }
              return pD(), JSON.parse(CD)
            }(DD.trim())
          } catch (ID) {
            return {
              parts: null,
              error: ID instanceof SyntaxError ? "This isn't a valid array yet." : ID.message
            }
          }
          if (!Array.isArray(CD)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const cD = CD.findIndex((DD => !cc(DD)));
          return -1 !== cD ? {
            parts: null,
            error: `Part ${cD+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: CD,
            error: null
          }
        }
        const pc = 1 / aC.h.clientTicksPerSecond,
          ic = 700,
          fc = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          bc = {
            progressBar: lC.progressBar.LD,
            timedClick: lC.timedClick.icon,
            gravityBar: lC.gravityBar.icon,
            precisionBar: lC.precisionBar.icon,
            rhythmClick: lC.rhythmClick.icon
          };

        function Qc(DD) {
          let {
            type: CD
          } = DD;
          const [cD, pD] = (0, ID.useState)("ready"), [fD, bD] = (0, ID.useState)(1), [QD, wD] = (0, ID.useState)(!0), SD = (0, ID.useRef)(null), BD = (0, ID.useRef)(null), yD = (0, ID.useRef)(null), MD = (0, ID.useRef)(new Set), ZD = (0, ID.useRef)(!1), vD = bc[CD], ND = (0, ID.useMemo)((() => ({
            getState: () => {
              var DD, CD;
              return null !== (DD = null === (CD = yD.current) || void 0 === CD ? void 0 : CD.getState()) && void 0 !== DD ? DD : fc
            },
            onFrame: DD => (MD.current.add(DD), () => {
              MD.current.delete(DD)
            })
          })), []);
          (0, ID.useEffect)((() => {
            const DD = SD.current,
              CD = BD.current;
            if (!DD || !CD) return;
            const cD = new ResizeObserver((() => {
              bD(DD.clientWidth / Math.max(1, CD.offsetWidth))
            }));
            return cD.observe(DD), () => {
              cD.disconnect()
            }
          }), []), (0, ID.useEffect)((() => {
            var DD;
            if ("playing" !== cD) return;
            let ID = !1;
            const iD = new jC.f[CD](lC[CD], (DD => {
              ID = !0, wD(!1), pD(DD ? "succeeded" : "failed")
            }), (() => {}));
            yD.current = iD;
            let fD = 0,
              bD = performance.now(),
              QD = requestAnimationFrame((function DD(CD) {
                for (fD += Math.min(.25, (CD - bD) / 1e3), bD = CD; fD >= pc && !ID;) fD -= pc, iD.handleTick(pc);
                for (const cD of MD.current) cD();
                ID || (QD = requestAnimationFrame(DD))
              }));
            return null === (DD = SD.current) || void 0 === DD || DD.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(QD), iD.tearDown(), yD.current = null, ZD.current = !1
            }
          }), [cD, CD]), (0, ID.useEffect)((() => {
            if (QD) return;
            const DD = setTimeout((() => {
              wD(!0)
            }), ic);
            return () => {
              clearTimeout(DD)
            }
          }), [QD]);
          const gD = DD => {
            var CD;
            "playing" === cD && ZD.current !== DD && (ZD.current = DD, null === (CD = yD.current) || void 0 === CD || CD.handleMouseInput(DD))
          };
          return (0, tD.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, tD.jsxs)("div", {
              ref: SD,
              className: iD()("DocsQteStage", {
                Playing: "playing" === cD
              }),
              tabIndex: "playing" === cD ? 0 : -1,
              role: "playing" === cD ? "button" : void 0,
              "aria-label": "playing" === cD ? `${CD} quick time event: click or press Space` : void 0,
              onPointerDown: DD => {
                0 === DD.button && gD(!0)
              },
              onPointerUp: () => {
                gD(!1)
              },
              onPointerLeave: () => {
                gD(!1)
              },
              onPointerCancel: () => {
                gD(!1)
              },
              onKeyDown: DD => {
                "playing" !== cD || " " !== DD.key && "Enter" !== DD.key || (DD.preventDefault(), gD(!0))
              },
              onKeyUp: DD => {
                "playing" !== cD || " " !== DD.key && "Enter" !== DD.key || gD(!1)
              },
              children: [(0, tD.jsx)("div", {
                ref: BD,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${fD})`
                },
                children: "playing" === cD && (0, tD.jsx)(zC.c.Provider, {
                  value: ND,
                  children: (0, tD.jsx)(VC.b, {
                    qte: {
                      type: CD,
                      parameters: lC[CD]
                    }
                  })
                })
              }), "playing" !== cD && (0, tD.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== cD && (0, tD.jsxs)("div", {
                  className: iD()("DocsQteResult", "succeeded" === cD ? "Succeeded" : "Failed"),
                  children: [(0, tD.jsx)(oD, {
                    name: "succeeded" === cD ? "check" : "cross",
                    isTinted: !0
                  }), (0, tD.jsx)("span", {
                    children: "succeeded" === cD ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, tD.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !QD,
                  onClick: () => {
                    pD("playing")
                  },
                  children: [(0, tD.jsx)(oD, {
                    name: "ready" === cD ? "play" : "replay"
                  }), (0, tD.jsx)("span", {
                    children: "ready" === cD ? `Try ${CD}` : "Play again"
                  })]
                })]
              })]
            }), vD && !GC(vD) && (0, tD.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, tD.jsx)("code", {
                children: vD
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function wc(DD) {
          let {
            level: CD,
            text: cD,
            anchor: ID,
            className: pD
          } = DD;
          const fD = `h${Math.min(CD,6)}`;
          return (0, tD.jsxs)(fD, {
                id: ID,
                className: iD()("DocsHeading", pD),
                children: [(0, tD.jsx)(nC, {
                      text: cD
                    }), (0, tD.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${ID}`,
                        "aria-label": `Link to ${cD.replace(/`/g,"")}`,children:"#"})]})}function Sc(DD){let{items:CD,ordered:cD}=DD;const ID=cD?"ol":"ul";return(0,tD.jsx)(ID,{className:"DocsList",children:CD.map(((DD,CD)=>(0,tD.jsxs)("li",{children:[(0,tD.jsx)(nC,{text:DD.text}),DD.children.length>0&&(0,tD.jsx)(Sc,{items:DD.children,ordered:cD})]},CD)))})}function Bc(DD){const CD=DD[0],cD="paragraph"===(null===CD||void 0===CD?void 0:CD.kind)?CD.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(cD)?"warning":/^\*\*(tip|prefer)/.test(cD)?"tip":"note"}function yc(DD){let{block:CD}=DD;switch(CD.kind){case"heading":return(0,tD.jsx)(wc,{level:CD.level,text:CD.text,anchor:CD.anchor});case"paragraph":return(0,tD.jsx)("p",{children:(0,tD.jsx)(nC,{text:CD.text})});case"code":{const DD="ts"===CD.lang?function(DD){const CD=DD.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return CD&&Object.hasOwn(lC,CD[1])?CD[1]:null}(CD.code):null;return(0,tD.jsxs)(tD.Fragment,{children:[(0,tD.jsx)(OD,{code:CD.code,lang:CD.lang}),DD&&(0,tD.jsx)(Qc,{type:DD})]})}case"table":return(0,tD.jsx)("div",{className:"DocsTableScroll",children:(0,tD.jsxs)("table",{className:"DocsTable",children:[(0,tD.jsx)("thead",{children:(0,tD.jsx)("tr",{children:CD.header.map(((DD,CD)=>(0,tD.jsx)("th",{children:(0,tD.jsx)(nC,{text:DD})},CD)))})}),(0,tD.jsx)("tbody",{children:CD.rows.map(((DD,CD)=>(0,tD.jsx)("tr",{children:DD.map(((DD,CD)=>(0,tD.jsx)("td",{children:(0,tD.jsx)(nC,{text:DD})},CD)))},CD)))})]})});case"list":return(0,tD.jsx)(Sc,{items:CD.items,ordered:CD.ordered});case"quote":return(0,tD.jsx)("aside",{className:iD()("DocsCallout",Bc(CD.blocks)),children:(0,tD.jsx)(Mc,{blocks:CD.blocks})});case"rule":return(0,tD.jsx)("hr",{className:"DocsRule"})}}function Mc(DD){let{blocks:CD}=DD;return(0,tD.jsx)(tD.Fragment,{children:CD.map(((DD,CD)=>(0,tD.jsx)(yc,{block:DD},CD)))})}var tc=cD(4543),Zc=cD(4548);function oc(DD){return"blocks"===DD||"items"===DD}const vc=new Map;function Nc(DD){let CD=vc.get(DD);return CD||(CD=function(DD){const CD={entries:[],legend:[],notes:[],examples:[]};let cD=!1;for(const iD of DD.split(/\r?\n/).slice(1)){if(iD.startsWith("#")){const DD=iD.replace(/^# ?/,""),ID=DD.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);ID?CD.legend.push({code:ID[1],meaning:ID[2],usage:ID[3].trim()}):/^Examples:/.test(DD.trim())?cD=!0:cD&&DD.trim()?CD.examples.push(DD.trim()):DD.trim()&&!/^\s/.test(DD)&&CD.notes.push(DD.trim());continue}const DD=iD.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var ID,pD;DD&&CD.entries.push({name:DD[1],variants:null!==(ID=null===(pD=DD[2])||void 0===pD?void 0:pD.split(","))&&void 0!==ID?ID:[]})}return CD}("blocks"===DD?tc:Zc),vc.set(DD,CD)),CD}function gc(DD){let{className:CD,value:cD,placeholder:ID,label:pD,onChange:iD,count:fD,children:bD}=DD;return(0,tD.jsxs)("div",{className:CD,children:[(0,tD.jsx)(oD,{name:"magnifying-glass"}),(0,tD.jsx)("input",{type:"search",value:cD,placeholder:ID,"aria-label":pD,onChange:DD=>{iD(DD.target.value)}}),bD,fD&&(0,tD.jsxs)("span",{className:"DocsFilterCount",children:[fD.visible," of ",fD.total]})]})}var Xc=cD(1064);function mc(DD){const CD=DD.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return CD?CD[2]:null}function nc(DD){return"paragraph"===DD.kind&&""===DD.text.trim()}function Oc(DD){const CD={name:DD.heading.text,description:[],params:[],returns:null};let cD="description";for(const pD of DD.blocks)if(!nc(pD))if("heading"===pD.kind&&/^Parameters:?$/.test(pD.text))cD="params";else if("heading"===pD.kind&&/^Returns:?$/.test(pD.text))cD="returns",CD.returns={type:"",description:[]};else if("params"!==cD||"table"!==pD.kind){if("returns"===cD&&"paragraph"===pD.kind&&""===CD.returns.type){const DD=mc(pD.text);if(null!==DD){CD.returns.type=DD.replaceAll("\\|","|");continue}}"returns"===cD?CD.returns.description.push(pD):CD.description.push(pD)}else for(const[DD,cD,iD]of pD.rows){var ID;CD.params.push({name:DD,type:null!==(ID=mc(cD))&&void 0!==ID?ID:cD,description:null!==iD&&void 0!==iD?iD:""})}return CD}const Pc=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function Hc(DD){return DD.filter((DD=>!nc(DD)))}const Uc=/^[\w][\w .'&!:()-]*$/,xc=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function qc(DD){var CD;if("code"===DD.kind&&"text"===DD.lang){const CD=DD.code.split("\n").map((DD=>DD.trim())).filter(Boolean);return CD.length>0&&CD.every((DD=>Uc.test(DD)))?CD.map((DD=>({name:DD}))):null}return"paragraph"===DD.kind&&xc.test(DD.text.trim())?[...DD.text.matchAll(/`([ ^ `]+)` / g)].flatMap((DD => DD[1].split(/,\s*/).map((DD => ({
                              name: DD.trim()
                            }))))): "table" === DD.kind && null !== (CD = DD.header[0]) && void 0 !== CD && CD.startsWith("Song") ? DD.rows.map((DD => {
                              let [CD, cD] = DD;
                              return {
                                name: CD.replace(/`/g, ""),
                                caption: cD
                              }
                            })) : null
                          }

                          function Jc(DD) {
                            const CD = [];
                            for (const cD of DD) {
                              const DD = qc(cD),
                                ID = CD.at(-1),
                                pD = "table" === cD.kind;
                              DD ? "names" === (null === ID || void 0 === ID ? void 0 : ID.kind) && ID.isSongs === pD ? ID.names.push(...DD) : CD.push({
                                kind: "names",
                                names: DD,
                                isSongs: pD
                              }) : CD.push({
                                kind: "block",
                                block: cD
                              })
                            }
                            return CD
                          }
                          const Kc = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function ac(DD, CD) {
                            return `${Kc[DD]}-${(0,PD.u)(CD)}`
                          }
                          const Vc = new WeakMap;

                          function zc(DD, CD, cD) {
                            let ID = Vc.get(CD);
                            if (!ID) {
                              ID = new Map;
                              const cD = new Set;
                              for (const pD of (0, PD.y)(CD)) {
                                const CD = Jc(Hc(pD.blocks)).map((CD => {
                                  if ("block" === CD.kind) return CD;
                                  return {
                                    kind: "names",
                                    names: CD.names.map((CD => {
                                      var ID, iD;
                                      const fD = ac(DD, CD.name);
                                      let bD = fD;
                                      for (let DD = 2; cD.has(bD); DD++) bD = `${fD}-${DD}`;
                                      return cD.add(bD), {
                                        ...CD,
                                        anchor: bD,
                                        heading: null !== (ID = null === (iD = pD.heading) || void 0 === iD ? void 0 : iD.text) && void 0 !== ID ? ID : ""
                                      }
                                    })),
                                    isSongs: CD.isSongs
                                  }
                                }));
                                ID.set(pD.blocks, CD)
                              }
                              Vc.set(CD, ID)
                            }
                            const pD = ID.get(cD);
                            if (!pD) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return pD
                          }
                          const jc = "/textures/docs/skinPreviews",
                            lc = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var Lc = cD(4068),
                            Tc = cD(4081);

                          function Gc(DD) {
                            return Object.hasOwn(Lc.i, DD) ? Lc.i[DD] : null
                          }
                          const Rc = {
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
                            blendMode: Tc.c.Standard
                          };

                          function kc(DD, CD, cD) {
                            return CD + (cD - CD) * DD()
                          }

                          function dc(DD, CD, cD) {
                            return DD + (CD - DD) * cD
                          }

                          function Yc(DD) {
                            return DD.length > 0 && "timeFraction" in DD[0]
                          }

                          function Wc(DD, CD) {
                            if (0 === DD.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!Yc(DD.colorGradients)) {
                              const cD = DD.colorGradients,
                                {
                                  color: ID
                                } = cD[Math.floor(CD() * cD.length) % cD.length];
                              return [{
                                at: 0,
                                colour: [ID[0] / 255, ID[1] / 255, ID[2] / 255, 1]
                              }]
                            }
                            return [...DD.colorGradients].sort(((DD, CD) => DD.timeFraction - CD.timeFraction)).map((DD => {
                              var cD, ID, pD;
                              const iD = DD.minColor,
                                fD = null !== (cD = DD.maxColor) && void 0 !== cD ? cD : iD,
                                bD = CD(),
                                QD = [dc(iD[0], fD[0], bD) / 255, dc(iD[1], fD[1], bD) / 255, dc(iD[2], fD[2], bD) / 255, dc(null !== (ID = iD[3]) && void 0 !== ID ? ID : 1, null !== (pD = fD[3]) && void 0 !== pD ? pD : 1, bD)];
                              return {
                                at: DD.timeFraction,
                                colour: QD
                              }
                            }))
                          }

                          function sc(DD, CD, cD, ID) {
                            const pD = kc(ID, DD.minEmitPower, DD.maxEmitPower),
                              iD = CD => kc(ID, Math.min(DD.dir1[CD], DD.dir2[CD]), Math.max(DD.dir1[CD], DD.dir2[CD])) * pD,
                              fD = [...DD.velocityGradients].sort(((DD, CD) => DD.timeFraction - CD.timeFraction)).map((DD => ({
                                at: DD.timeFraction,
                                factor: kc(ID, DD.factor, DD.factor2)
                              })));
                            return {
                              pos: [kc(ID, CD[0], cD[0]), kc(ID, CD[1], cD[1]), kc(ID, CD[2], cD[2])],
                              dir: [iD(0), iD(1), iD(2)],
                              age: 0,
                              life: kc(ID, DD.minLifeTime, DD.maxLifeTime),
                              size: kc(ID, DD.minSize, DD.maxSize),
                              colours: Wc(DD, ID),
                              velocityFactors: fD
                            }
                          }

                          function Ec(DD, CD, cD, ID) {
                            if (CD < DD[0].at) return cD(Math.min(1, DD.length - 1));
                            for (let pD = 0; pD < DD.length - 1; pD++)
                              if (CD <= DD[pD + 1].at) {
                                const iD = DD[pD + 1].at - DD[pD].at;
                                return ID(cD(pD), cD(pD + 1), iD > 0 ? (CD - DD[pD].at) / iD : 1)
                              } return cD(DD.length - 1)
                          }

                          function ec(DD) {
                            return Ec(DD.colours, DD.age / DD.life, (CD => DD.colours[CD].colour), ((DD, CD, cD) => [dc(DD[0], CD[0], cD), dc(DD[1], CD[1], cD), dc(DD[2], CD[2], cD), dc(DD[3], CD[3], cD)]))
                          }

                          function uc(DD, CD, cD) {
                            if (DD.age += cD, DD.age >= DD.life) return !1;
                            const ID = function(DD) {
                              return 0 === DD.velocityFactors.length ? 1 : Ec(DD.velocityFactors, DD.age / DD.life, (CD => DD.velocityFactors[CD].factor), dc)
                            }(DD) * cD;
                            for (let iD = 0; iD < 3; iD++) {
                              var pD;
                              DD.pos[iD] += DD.dir[iD] * ID, DD.dir[iD] += (null !== (pD = CD[iD]) && void 0 !== pD ? pD : 0) * cD
                            }
                            return !0
                          }

                          function hc(DD) {
                            return String(Math.round(1e6 * DD) / 1e6)
                          }

                          function rc(DD) {
                            return `[${DD.map(hc).join(", ")}]`
                          }

                          function Ac(DD, CD) {
                            const cD = `${CD}    `;
                            return `[\n${(Yc(DD)?DD.map((DD=>{const CD=[`${cD}    timeFraction: ${hc(DD.timeFraction)},`,`${cD}    minColor: ${rc(DD.minColor)},`];return DD.maxColor&&CD.push(`${cD}    maxColor: ${rc(DD.maxColor)},`),`${cD}{\n${CD.join("\n")}\n${cD}},`})):DD.map((DD=>`
                            $ {
                              cD
                            } {
                              color: $ {
                                rc(DD.color)
                              }
                            }, `))).join("\n")}\n${CD}]`
                          }
                          const Fc = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            DI = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const CI = .6;

                          function cI(DD, CD) {
                            return `${CD?"song":"sound"}:${DD}`
                          }
                          let II = {
                              track: null,
                              volume: CI
                            },
                            pI = null,
                            iI = 0,
                            fI = 0;
                          const bI = new Set;

                          function QI(DD) {
                            II = {
                              ...II,
                              ...DD
                            }, bI.forEach((DD => {
                              DD()
                            }))
                          }

                          function wI(DD) {
                            II.track && QI({
                              track: {
                                ...II.track,
                                ...DD
                              }
                            })
                          }

                          function SI(DD) {
                            const [CD, cD] = (0, ID.useState)((() => DD(II))), pD = (0, ID.useRef)(DD);
                            return pD.current = DD, (0, ID.useEffect)((() => {
                              const DD = () => {
                                cD((() => pD.current(II)))
                              };
                              return bI.add(DD), DD(), () => {
                                bI.delete(DD)
                              }
                            }), []), CD
                          }

                          function BI() {
                            iI++;
                            const DD = pI;
                            pI = null, null === DD || void 0 === DD || DD.stop()
                          }

                          function yI(DD, CD) {
                            let ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            BI();
                            const pD = iI,
                              {
                                track: iD
                              } = II,
                              fD = iD && iD.name === DD && iD.isSong === CD ? iD.duration : 0;
                            fI = ID, QI({
                              track: {
                                name: DD,
                                isSong: CD,
                                status: "loading",
                                duration: fD
                              }
                            }), Promise.all([cD.e(215), cD.e(239)]).then((() => cD(38947))).then((cD => {
                              let {
                                playDocsSound: iD
                              } = cD;
                              pD === iI && (pI = iD(DD, CD, II.volume, ID, {
                                onPlay: DD => {
                                  pD === iI && wI({
                                    status: "playing",
                                    duration: DD
                                  })
                                },
                                onEnd: DD => {
                                  var CD, cD;
                                  pD === iI && (pI = null, DD ? QI({
                                    track: null
                                  }) : (fI = null !== (CD = null === (cD = II.track) || void 0 === cD ? void 0 : cD.duration) && void 0 !== CD ? CD : 0, wI({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((CD => {
                              console.error(`Could not play docs sound ${DD}`, CD), pD === iI && QI({
                                track: null
                              })
                            }))
                          }

                          function MI() {
                            const {
                              track: DD
                            } = II;
                            if (!DD) return;
                            if ("playing" === DD.status && pI) return fI = pI.FX(), pI.pause(), void wI({
                              status: "paused"
                            });
                            if ("loading" === DD.status) return BI(), void wI({
                              status: "paused"
                            });
                            if (pI) return void pI.resume();
                            const CD = DD.duration > 0 && fI >= DD.duration - .05;
                            yI(DD.name, DD.isSong, CD ? 0 : fI)
                          }

                          function tI() {
                            var DD;
                            return pI && "playing" === (null === (DD = II.track) || void 0 === DD ? void 0 : DD.status) ? pI.FX() : fI
                          }

                          function ZI(DD) {
                            var CD;
                            null === (CD = pI) || void 0 === CD || CD.setVolume(DD), QI({
                              volume: DD
                            })
                          }

                          function oI() {
                            BI(), fI = 0, QI({
                              track: null
                            })
                          }
                          const vI = (0, ID.createContext)(null);
                          let NI = null;

                          function gI() {
                            const [DD, CD] = (0, ID.useState)(null);
                            return (0, ID.useEffect)((() => {
                              let DD = !1;
                              return NI ??= Promise.all([cD.e(69), cD.e(72), cD.e(71), cD.e(70), cD.e(196), cD.e(96), cD.e(220)]).then((() => cD(38945))), NI.then((cD => {
                                DD || CD(cD)
                              }), (DD => {
                                console.error("Could not load the docs gallery's textures", DD), NI = null
                              })), () => {
                                DD = !0
                              }
                            }), []), DD
                          }
                          const XI = 24,
                            mI = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function nI(DD, CD) {
                            const cD = "skins" === DD ? function(DD, CD) {
                              const cD = lc.find((CD => DD.startsWith(CD.heading)));
                              return cD ? function(DD, CD) {
                                return `${DD}-${CD}`
                              }(cD.prefix, CD) : null
                            }(CD.heading, CD.name) : null;
                            return null === cD ? null : `${jc}/${cD}.webp`
                          }

                          function OI(DD) {
                            let {
                              kind: CD,
                              entry: cD,
                              assets: pD,
                              renderedUrl: fD
                            } = DD;
                            const {
                              name: bD
                            } = cD, [QD, wD] = (0, ID.useState)(!1);
                            if ("icons" === CD && GC(bD)) return (0, tD.jsx)(Xc.c, {
                              className: "DocsTileIcon",
                              name: bD
                            });
                            let SD = null;
                            var BD;
                            if ("icons" === CD) SD = null !== (BD = null === pD || void 0 === pD ? void 0 : pD.getIngameIconUrl(bD)) && void 0 !== BD ? BD : null;
                            else if ("particles" === CD) {
                              var yD, MD, ZD;
                              SD = null !== (yD = null === pD || void 0 === pD ? void 0 : pD.getParticleTextureUrl(null !== (MD = null === (ZD = Gc(bD)) || void 0 === ZD ? void 0 : ZD.texture) && void 0 !== MD ? MD : bD)) && void 0 !== yD ? yD : null
                            } else "skins" === CD && (SD = null !== fD && void 0 !== fD ? fD : mI.test(bD) ? `/textures/charSkins/previews/${bD}_preview.png` : null);
                            return !SD || QD ? (0, tD.jsx)(oD, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === CD ? "person" : "image"
                            }) : (0, tD.jsx)("img", {
                              className: iD()("DocsTileImage", {
                                Pixelated: "skins" !== CD
                              }),
                              src: SD,
                              srcSet: SD === fD ? `${SD} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${SD}`), wD(!0)
                              }
                            })
                          }

                          function PI(DD) {
                            let {
                              entry: CD,
                              isSong: cD
                            } = DD;
                            const ID = SI((DD => {
                                let {
                                  track: ID
                                } = DD;
                                return (null === ID || void 0 === ID ? void 0 : ID.name) === CD.name && ID.isSong === cD ? ID.status : null
                              })),
                              pD = null !== ID && "paused" !== ID;
                            return (0, tD.jsxs)("button", {
                              type: "button",
                              id: CD.anchor,
                              className: iD()("DocsSoundTile", {
                                Playing: pD
                              }),
                              "data-docs-track": cI(CD.name, cD),
                              "aria-label": pD ? `Pause ${CD.name}` : `Play ${CD.name}`,
                              onClick: () => {
                                null !== ID ? MI() : yI(CD.name, cD)
                              },
                              children: [(0, tD.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, tD.jsx)(oD, {
                                  name: pD ? "pause" : "play"
                                })
                              }), (0, tD.jsx)("code", {
                                className: "DocsSoundName",
                                children: CD.name
                              }), CD.caption && (0, tD.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: CD.caption
                              })]
                            })
                          }

                          function HI(DD) {
                            let {
                              kind: CD,
                              names: cD,
                              isSongs: pD
                            } = DD;
                            const fD = gI(),
                              [bD, QD] = ND(),
                              wD = !1 === (null === bD || void 0 === bD ? void 0 : bD.failed) ? bD.text : null,
                              SD = (0, ID.useContext)(vI),
                              [BD, yD] = (0, ID.useState)(""),
                              MD = BD.trim().toLowerCase(),
                              ZD = MD ? cD.filter((DD => DD.name.toLowerCase().includes(MD))) : cD;
                            return (0, tD.jsxs)("div", {
                              className: "DocsGallery",
                              children: [cD.length > XI && (0, tD.jsx)(gc, {
                                className: "DocsGalleryFilter",
                                value: BD,
                                placeholder: `Filter ${cD.length} names\u2026`,
                                label: "Filter names",
                                onChange: yD,
                                count: MD ? {
                                  visible: ZD.length,
                                  total: cD.length
                                } : null
                              }), (0, tD.jsx)("div", {
                                className: iD()("DocsGalleryGrid", `Kind-${CD}`, {
                                  Songs: pD
                                }),
                                children: ZD.map((DD => {
                                  if ("sounds" === CD) return (0, tD.jsx)(PI, {
                                    entry: DD,
                                    isSong: pD
                                  }, DD.anchor);
                                  if (SD && "particles" === CD && Gc(DD.name)) return (0, tD.jsxs)("button", {
                                    type: "button",
                                    id: DD.anchor,
                                    className: iD()("DocsTile Previewable", {
                                      Copied: wD === DD.name
                                    }),
                                    title: `Play "${DD.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      SD(DD.name), QD(DD.name)
                                    },
                                    children: [(0, tD.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, tD.jsx)(OI, {
                                        kind: CD,
                                        entry: DD,
                                        assets: fD,
                                        renderedUrl: null
                                      }), (0, tD.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, tD.jsx)(oD, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, tD.jsx)("span", {
                                      className: "DocsTileName",
                                      children: wD === DD.name ? "Copied!" : DD.name
                                    })]
                                  }, DD.anchor);
                                  const cD = nI(CD, DD);
                                  return (0, tD.jsxs)("button", {
                                    type: "button",
                                    id: DD.anchor,
                                    className: iD()("DocsTile", {
                                      Copied: wD === DD.name
                                    }),
                                    title: `Copy "${DD.name}"`,
                                    onClick: () => {
                                      QD(DD.name)
                                    },
                                    children: [(0, tD.jsx)("span", {
                                      className: iD()("DocsTilePreview", {
                                        Rendered: null !== cD
                                      }),
                                      children: (0, tD.jsx)(OI, {
                                        kind: CD,
                                        entry: DD,
                                        assets: fD,
                                        renderedUrl: cD
                                      })
                                    }), (0, tD.jsx)("span", {
                                      className: "DocsTileName",
                                      children: wD === DD.name ? "Copied!" : DD.name
                                    })]
                                  }, DD.anchor)
                                }))
                              })]
                            })
                          }

                          function UI(DD) {
                            let {
                              kind: CD,
                              content: cD,
                              blocks: ID
                            } = DD;
                            return (0, tD.jsx)(tD.Fragment, {
                              children: zc(CD, cD, ID).map(((DD, cD) => "block" === DD.kind ? (0, tD.jsx)(yc, {
                                block: DD.block
                              }, cD) : (0, tD.jsx)(HI, {
                                kind: CD,
                                names: DD.names,
                                isSongs: DD.isSongs
                              }, cD)))
                            })
                          }
                          const xI = [{
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

                          function qI(DD) {
                            let {
                              cards: CD = xI,
                              label: cD = "Start here"
                            } = DD;
                            const pD = (0, ID.useContext)(MC);
                            return (0, tD.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": cD,
                              children: CD.map((DD => {
                                let {
                                  pageId: CD,
                                  countNoun: cD
                                } = DD;
                                const ID = TD(CD);
                                return (0, tD.jsxs)(fD.d, {
                                  to: WD(pD, ID),
                                  className: "DocsLandingCard",
                                  children: [(0, tD.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, tD.jsx)(oD, {
                                      name: ID.icon
                                    })
                                  }), (0, tD.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: ID.title
                                  }), (0, tD.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: ID.summary
                                  }), cD && (0, tD.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [RD(ID).sections.length, " ", cD]
                                  })]
                                }, CD)
                              }))
                            })
                          }
                          const JI = 240;

                          function KI(DD) {
                            let {
                              faces: CD
                            } = DD;
                            return (0, tD.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, tD.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${CD.top}")`
                                }
                              }), (0, tD.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${CD.left}")`
                                }
                              }), (0, tD.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${CD.right}")`
                                }
                              })]
                            })
                          }

                          function aI(DD) {
                            let {
                              src: CD
                            } = DD;
                            const [cD, pD] = (0, ID.useState)(!1);
                            return cD ? null : (0, tD.jsx)("img", {
                              src: CD,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${CD}`), pD(!0)
                              }
                            })
                          }

                          function VI(DD) {
                            let {
                              kind: CD
                            } = DD;
                            const cD = Nc(CD),
                              pD = gI(),
                              fD = (0, bD.w)(),
                              [QD, wD] = (0, ID.useState)(""),
                              [SD, BD] = (0, ID.useState)(null),
                              [yD, MD] = (0, ID.useState)(JI),
                              [ZD, vD] = (0, ID.useState)(null),
                              ND = (0, ID.useRef)(null),
                              XD = QD.trim().toLowerCase();
                            (0, ID.useEffect)((() => {
                              const DD = (0, PD.s)(fD.hash),
                                ID = cD.entries.find((cD => ac(CD, cD.name) === DD));
                              if (ID) ND.current = ID.name, wD(ID.name), BD(null), vD(ID.name);
                              else if (null !== ND.current) {
                                const DD = ND.current;
                                ND.current = null, wD((CD => CD === DD ? "" : CD)), vD(null)
                              }
                            }), [cD, CD, fD.hash, fD.key]), (0, ID.useEffect)((() => {
                              var DD;
                              null !== ZD && (null === (DD = document.getElementById(ac(CD, ZD))) || void 0 === DD || DD.scrollIntoView({
                                block: "center"
                              }))
                            }), [CD, ZD]);
                            const mD = cD.entries.filter((DD => (!XD || DD.name.toLowerCase().includes(XD)) && (!SD || DD.variants.includes(SD))));
                            return (0, tD.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [cD.notes.length > 0 && (0, tD.jsx)("div", {
                                className: "DocsProse",
                                children: cD.notes.map((DD => (0, tD.jsx)("p", {
                                  children: DD
                                }, DD)))
                              }), cD.legend.length > 0 && (0, tD.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, tD.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, tD.jsx)("thead", {
                                    children: (0, tD.jsxs)("tr", {
                                      children: [(0, tD.jsx)("th", {
                                        children: "Code"
                                      }), (0, tD.jsx)("th", {
                                        children: "Variant"
                                      }), (0, tD.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, tD.jsx)("tbody", {
                                    children: cD.legend.map((DD => (0, tD.jsxs)("tr", {
                                      children: [(0, tD.jsx)("td", {
                                        children: (0, tD.jsx)("button", {
                                          type: "button",
                                          className: iD()("DocsVariantChip", {
                                            Active: SD === DD.code
                                          }),
                                          "aria-pressed": SD === DD.code,
                                          title: `Show only ${CD} with ${DD.meaning} variants`,
                                          onClick: () => {
                                            BD(SD === DD.code ? null : DD.code)
                                          },
                                          children: DD.code
                                        })
                                      }), (0, tD.jsx)("td", {
                                        children: DD.meaning
                                      }), (0, tD.jsx)("td", {
                                        children: (0, tD.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: DD.usage
                                        })
                                      })]
                                    }, DD.code)))
                                  })]
                                })
                              }), cD.examples.length > 0 && (0, tD.jsx)(OD, {
                                lang: "text",
                                code: cD.examples.join("\n")
                              }), (0, tD.jsx)(gc, {
                                className: "DocsFilterBar",
                                value: QD,
                                placeholder: `Search ${cD.entries.length} ${CD}\u2026`,
                                label: `Search ${CD}`,
                                onChange: DD => {
                                  wD(DD), MD(JI)
                                },
                                count: XD || SD ? {
                                  visible: mD.length,
                                  total: cD.entries.length
                                } : null,
                                children: SD && (0, tD.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    BD(null)
                                  },
                                  children: [SD, " ", (0, tD.jsx)(oD, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, tD.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: mD.slice(0, yD).map((DD => {
                                  const cD = "blocks" === CD ? null === pD || void 0 === pD ? void 0 : pD.getBlockFaces(DD.name) : null,
                                    ID = pD && !cD ? pD.getItemTextureUrl(DD.name) : null;
                                  return (0, tD.jsxs)("div", {
                                    id: ac(CD, DD.name),
                                    className: iD()("DocsCatalogueTile", {
                                      Linked: DD.name === ZD
                                    }),
                                    children: [(0, tD.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [cD && (0, tD.jsx)(KI, {
                                        faces: cD
                                      }), ID && (0, tD.jsx)(aI, {
                                        src: ID
                                      })]
                                    }), (0, tD.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: DD.name
                                    }), DD.variants.length > 0 && (0, tD.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: DD.variants.map((DD => (0, tD.jsx)("span", {
                                        children: DD
                                      }, DD)))
                                    }), (0, tD.jsx)(gD, {
                                      text: DD.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, DD.name)
                                }))
                              }), mD.length > yD && (0, tD.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  MD(mD.length)
                                },
                                children: ["Show all ", mD.length]
                              }), 0 === mD.length && (0, tD.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", CD, " match."]
                              })]
                            })
                          }
                          var zI = cD(4597),
                            jI = cD(1577);
                          const lI = .95 * zI.b;

                          function LI(DD) {
                            return /^\s*```/.test(DD)
                          }

                          function TI(DD, CD) {
                            const cD = [
                              []
                            ];
                            let ID = !1;
                            for (const pD of DD.split("\n")) !ID && CD(pD) && cD.at(-1).length > 0 && cD.push([]), LI(pD) && (ID = !ID), cD.at(-1).push(pD);
                            return cD.map((DD => DD.join("\n").trim())).filter(Boolean)
                          }

                          function GI(DD, CD) {
                            const cD = `${"#".repeat(CD)} `,
                              ID = [];
                            let pD = !1;
                            for (const iD of DD.split("\n")) LI(iD) ? pD = !pD : !pD && iD.startsWith(cD) && ID.push(iD.slice(cD.length).trim());
                            return ID
                          }

                          function RI(DD) {
                            return DD.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class kI {
                            constructor(DD, CD) {
                              this.origin = CD, this.pages = void 0, this.partPaths = new Map;
                              const cD = DD.map((DD => {
                                const CD = CD => this.resolveLinks(DD, CD).length,
                                  cD = function(DD, CD) {
                                    const cD = DD.map((DD => CD(DD.markdown) + 2)),
                                      ID = cD.reduce(((DD, CD) => DD + CD), 0),
                                      pD = ID / Math.ceil(ID / lI),
                                      iD = [];
                                    let fD = 0;
                                    return DD.forEach(((DD, CD) => {
                                      const ID = cD[CD];
                                      (0 === iD.length || fD + ID > lI || fD + ID / 2 > pD) && (iD.push([]), fD = 0), iD.at(-1).push(DD), fD += ID
                                    })), iD
                                  }(function(DD, CD) {
                                    return TI(DD, (DD => DD.startsWith("## "))).flatMap((DD => {
                                      var cD;
                                      const ID = null !== (cD = GI(DD, 2)[0]) && void 0 !== cD ? cD : "";
                                      if (CD(DD) <= lI) return [{
                                        markdown: DD,
                                        section: ID
                                      }];
                                      let pD = !1,
                                        iD = "";
                                      return TI(DD, (DD => {
                                        const CD = pD && "" !== DD.trim();
                                        return pD = "" === DD.trim(), CD
                                      })).map((DD => {
                                        var CD;
                                        const cD = GI(DD, 3),
                                          pD = DD.startsWith("### ") ? cD[0] : iD;
                                        return iD = null !== (CD = cD.at(-1)) && void 0 !== CD ? CD : iD, {
                                          markdown: DD,
                                          section: ID || pD
                                        }
                                      }))
                                    }))
                                  }(RI(DD), CD), CD);
                                return {
                                  page: DD,
                                  groups: cD.length > 1 ? cD : []
                                }
                              }));
                              for (const {
                                  page: ID,
                                  groups: pD
                                }
                                of cD) pD.forEach(((DD, CD) => {
                                const cD = (0, zI.p)(ID.slug, CD);
                                for (const pD of DD.flatMap((DD => [...GI(DD.markdown, 2), ...GI(DD.markdown, 3)]))) {
                                  const DD = `${ID.id}#${(0,PD.u)(pD)}`;
                                  this.partPaths.has(DD) || this.partPaths.set(DD, cD)
                                }
                              }));
                              this.pages = cD.map((DD => {
                                let {
                                  page: CD,
                                  groups: cD
                                } = DD;
                                return {
                                  page: CD,
                                  path: (0, zI.m)(CD.slug),
                                  markdown: `# ${CD.title}\n\n${this.resolveLinks(CD,RI(CD))}\n`,
                                  parts: cD.map(((DD, ID) => this.renderPart(CD, DD, ID, cD.length)))
                                }
                              }))
                            }
                            url(DD) {
                              return `${this.origin}${DD}`
                            }
                            getPage(DD) {
                              return this.pages.find((CD => CD.page.id === DD))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((DD => (DD.parts.length > 0 ? DD.parts : [{
                                path: DD.path,
                                label: "",
                                markdown: DD.markdown
                              }]).filter((DD => DD.markdown.length > zI.b))))
                            }
                            markdownUrl(DD, CD) {
                              const cD = CD && this.partPaths.get(`${DD.id}#${CD}`) || (0, zI.m)(DD.slug);
                              return this.url(CD ? `${cD}#${CD}` : cD)
                            }
                            resolveLinks(DD, CD) {
                              return CD.replace(/\]\((#[^)]+)\)/g, ((CD, cD) => {
                                var ID;
                                const pD = null !== (ID = dD(cD)) && void 0 !== ID ? ID : this.samePageTarget(DD, cD);
                                return pD ? `](${this.markdownUrl(pD.page,pD.anchor)})` : CD
                              }))
                            }
                            samePageTarget(DD, CD) {
                              const cD = (0, PD.u)(CD.slice(1));
                              return kD(DD, cD) ? {
                                page: DD,
                                anchor: cD
                              } : null
                            }
                            renderPart(DD, CD, cD, ID) {
                              const pD = function(DD) {
                                  const CD = DD.map((DD => DD.section)).filter(Boolean);
                                  if (0 === CD.length) return "";
                                  const cD = CD[0],
                                    ID = CD.at(-1);
                                  return cD === ID ? cD : `${cD} to ${ID}`
                                }(CD),
                                iD = CD.map((DD => DD.markdown)).join("\n\n"),
                                fD = pD ? `It covers ${pD}. ` : "",
                                bD = `Part ${cD+1} of ${ID} of [${DD.title}](${this.url((0,zI.m)(DD.slug))}). ${fD}[llms.txt](${this.url(zI.g)}) lists every part.`;
                              return {
                                path: (0, zI.p)(DD.slug, cD),
                                label: pD,
                                markdown: `# ${DD.title}, part ${cD+1} of ${ID}\n\n${bD}\n\n${this.resolveLinks(DD,iD)}\n`
                              }
                            }
                            llmsTxt(DD) {
                              const CD = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${dI(zI.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const cD of LD) {
                                CD.push("", `## ${cD.title}`, "");
                                for (const DD of cD.pageIds) {
                                  const cD = this.getPage(DD),
                                    {
                                      page: ID,
                                      parts: pD
                                    } = cD,
                                    iD = `About ${dI(cD.markdown.length)} tokens${pD.length>0?`, in ${pD.length} parts:`:"."}`;
                                  CD.push(`- [${ID.title}](${this.url(cD.path)}): ${ID.summary} ${iD}`), pD.forEach(((DD, cD) => {
                                    CD.push(`  - [Part ${cD+1}${DD.label?`: ${DD.label}`:""}](${this.url(DD.path)})`)
                                  }))
                                }
                              }
                              return CD.push("", "## Optional", "", `- [Every page in one file](${this.url(zI.c)}): About ${dI(DD.length)} tokens, for a model with a large context window.`, ""), CD.join("\n")
                            }
                            llmsFullTxt() {
                              return LD.flatMap((DD => DD.pageIds.map((DD => this.getPage(DD).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const DD = this.llmsFullTxt(),
                                CD = this.llmsTxt(DD),
                                cD = new Map([
                                  [zI.k, CD],
                                  [zI.g, CD],
                                  [zI.c, DD]
                                ]);
                              for (const ID of this.pages) {
                                cD.set(ID.path, ID.markdown);
                                for (const DD of ID.parts) cD.set(DD.path, DD.markdown)
                              }
                              return cD
                            }
                          }

                          function dI(DD) {
                            return `${Math.max(1,Math.round(DD/4e3))}K`
                          }
                          let YI = null;

                          function WI() {
                            return YI ??= new kI(lD, jI.c), YI
                          }
                          const sI = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function EI(DD) {
                            return WI().getPage(DD.id).parts.length > 0 ? `Read ${zI.i}, then the parts of the Bloxd Code API's ${DD.title} page it lists, so I can ask questions about it.` : `Read ${jI.c}${(0,zI.m)(DD.slug)} so I can ask questions about it. ${zI.i} lists every page of the Bloxd Code API docs.`
                          }

                          function eI(DD) {
                            let {
                              page: CD
                            } = DD;
                            const [cD, ID] = ND();
                            return (0, tD.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, tD.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  ID(WI().getPage(CD.id).markdown)
                                },
                                children: [(0, tD.jsx)(oD, {
                                  name: !1 === (null === cD || void 0 === cD ? void 0 : cD.failed) ? "check" : "copy"
                                }), (0, tD.jsx)("span", {
                                  children: cD ? cD.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), sI.map((DD => (0, tD.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${DD.url}${encodeURIComponent(EI(CD))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, tD.jsx)(oD, {
                                  name: "external-link"
                                }), (0, tD.jsxs)("span", {
                                  children: ["Open in ", DD.name]
                                })]
                              }, DD.name)))]
                            })
                          }

                          function uI(DD) {
                            return `#${[0,1,2].map((CD=>Math.round(Math.min(255,Math.max(0,DD[CD]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function hI(DD) {
                            return [parseInt(DD.slice(1, 3), 16), parseInt(DD.slice(3, 5), 16), parseInt(DD.slice(5, 7), 16)]
                          }

                          function rI(DD) {
                            let {
                              label: CD,
                              min: cD,
                              max: ID,
                              step: pD,
                              low: iD,
                              high: fD,
                              onChange: bD
                            } = DD;
                            return (0, tD.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, tD.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, tD.jsx)("span", {
                                  children: CD
                                }), (0, tD.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: iD === fD ? iD : `${iD}\u2013${fD}`
                                })]
                              }), (0, tD.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, tD.jsx)("input", {
                                  type: "range",
                                  min: cD,
                                  max: ID,
                                  step: pD,
                                  value: Math.min(ID, iD),
                                  "aria-label": `Minimum ${CD.toLowerCase()}`,
                                  onChange: DD => {
                                    const CD = Number(DD.target.value);
                                    bD(CD, Math.max(CD, fD))
                                  }
                                }), (0, tD.jsx)("input", {
                                  type: "range",
                                  min: cD,
                                  max: ID,
                                  step: pD,
                                  value: Math.min(ID, fD),
                                  "aria-label": `Maximum ${CD.toLowerCase()}`,
                                  onChange: DD => {
                                    const CD = Number(DD.target.value);
                                    bD(Math.min(CD, iD), CD)
                                  }
                                })]
                              })]
                            })
                          }

                          function AI(DD) {
                            let {
                              label: CD,
                              min: cD,
                              max: ID,
                              step: pD,
                              value: iD,
                              onChange: fD,
                              format: bD = String
                            } = DD;
                            return (0, tD.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, tD.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, tD.jsx)("span", {
                                  children: CD
                                }), (0, tD.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: bD(iD)
                                })]
                              }), (0, tD.jsx)("input", {
                                type: "range",
                                min: cD,
                                max: ID,
                                step: pD,
                                value: Math.min(ID, Math.max(cD, iD)),
                                "aria-label": CD,
                                onChange: DD => {
                                  fD(Number(DD.target.value))
                                }
                              })]
                            })
                          }

                          function FI(DD) {
                            let {
                              opts: CD,
                              onChange: cD
                            } = DD;
                            const ID = CD.colorGradients;
                            if (!Yc(ID)) return (0, tD.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, tD.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, tD.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, tD.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: ID.map(((DD, CD) => (0, tD.jsx)("input", {
                                  type: "color",
                                  value: uI(DD.color),
                                  "aria-label": `Colour ${CD+1}`,
                                  onChange: DD => {
                                    const pD = [...ID];
                                    pD[CD] = {
                                      color: hI(DD.target.value)
                                    }, cD(pD)
                                  }
                                }, CD)))
                              })]
                            });
                            const pD = (DD, CD) => {
                              const pD = [...ID];
                              pD[DD] = CD, cD(pD)
                            };
                            return (0, tD.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, tD.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, tD.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, tD.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), ID.map(((DD, CD) => {
                                var cD;
                                const ID = null !== (cD = DD.maxColor) && void 0 !== cD ? cD : DD.minColor;
                                return (0, tD.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, tD.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * DD.timeFraction), "%"]
                                  }), (0, tD.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${uI(DD.minColor)}, ${uI(ID)})`
                                    }
                                  }), (0, tD.jsx)("input", {
                                    type: "color",
                                    value: uI(DD.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*DD.timeFraction)}%`,
                                    onChange: cD => {
                                      pD(CD, {
                                        ...DD,
                                        minColor: [...hI(cD.target.value), DD.minColor[3]]
                                      })
                                    }
                                  }), (0, tD.jsx)("input", {
                                    type: "color",
                                    value: uI(ID),
                                    "aria-label": `Maximum colour at ${Math.round(100*DD.timeFraction)}%`,
                                    onChange: cD => {
                                      pD(CD, {
                                        ...DD,
                                        maxColor: [...hI(cD.target.value), ID[3]]
                                      })
                                    }
                                  })]
                                }, CD)
                              }))]
                            })
                          }
                          const Dp = [-.5, -.5, -.5],
                            Cp = [.5, .5, .5],
                            cp = [0, 1, 2, 3, 4, 5, 6, 7].map((DD => [1 & DD ? Cp[0] : Dp[0], 2 & DD ? Cp[1] : Dp[1], 4 & DD ? Cp[2] : Dp[2]]));class Ip {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(DD, CD, cD, ID) {
                              const pD = Math.round(31 * CD),
                                iD = Math.round(31 * cD),
                                fD = Math.round(31 * ID),
                                bD = `${pD}|${iD}|${fD}`;
                              let QD = this.tints.get(DD);
                              (!QD || QD.size > 2e3) && (QD = new Map, this.tints.set(DD, QD));
                              let wD = QD.get(bD);
                              if (wD) return wD;
                              wD = document.createElement("canvas"), wD.width = DD.naturalWidth || 16, wD.height = DD.naturalHeight || 16;
                              const SD = wD.getContext("2d");
                              return SD ? (SD.imageSmoothingEnabled = !1, SD.drawImage(DD, 0, 0, wD.width, wD.height), SD.globalCompositeOperation = "multiply", SD.fillStyle = `rgb(${pD/31*255}, ${iD/31*255}, ${fD/31*255})`, SD.fillRect(0, 0, wD.width, wD.height), SD.globalCompositeOperation = "destination-in", SD.drawImage(DD, 0, 0, wD.width, wD.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), QD.set(bD, wD), wD
                            }
                          }

                          function pp(DD) {
                            let {
                              opts: CD,
                              textureUrl: cD,
                              burst: pD,
                              paused: iD
                            } = DD;
                            const fD = (0, ID.useRef)(null),
                              bD = (0, ID.useRef)(CD);
                            bD.current = CD;
                            const QD = (0, ID.useRef)(iD);
                            QD.current = iD;
                            const wD = (0, ID.useRef)(null),
                              SD = (0, ID.useRef)(null),
                              BD = (0, ID.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(DD) {
                                let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const cD = [-.5, -.5, -.5],
                                  ID = [.5, .5, .5];
                                let pD = .5;
                                for (let iD = 0; iD < 40; iD++) {
                                  const iD = sc(DD, cD, ID, CD),
                                    fD = Math.max(iD.life / 30, .001);
                                  for (; uc(iD, DD.gravity, fD);) pD = Math.max(pD, Math.hypot(iD.pos[0], iD.pos[1], iD.pos[2]) + iD.size / 2)
                                }
                                return pD
                              }(CD)))), [CD]),
                              yD = (0, ID.useRef)(BD);
                            return yD.current = BD, (0, ID.useEffect)((() => {
                              if (wD.current = null, !cD) return;
                              const DD = new Image;
                              let CD = !1;
                              return DD.onload = () => {
                                CD || (wD.current = DD)
                              }, DD.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${cD}`)
                              }, DD.src = cD, () => {
                                CD = !0
                              }
                            }), [cD]), (0, ID.useEffect)((() => {
                              var DD;
                              null === (DD = SD.current) || void 0 === DD || DD.call(SD)
                            }), [CD, pD]), (0, ID.useEffect)((() => {
                              const DD = fD.current,
                                CD = null === DD || void 0 === DD ? void 0 : DD.getContext("2d");
                              if (!DD || !CD) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const cD = new Ip;
                              let ID = [],
                                pD = 0,
                                iD = -.7,
                                BD = yD.current,
                                MD = performance.now(),
                                tD = 0,
                                ZD = !0,
                                oD = null;
                              const vD = () => {
                                const DD = bD.current,
                                  CD = Math.min(400, Math.max(0, Math.ceil(DD.manualEmitCount)));
                                ID = [];
                                for (let cD = 0; cD < CD; cD++) ID.push(sc(DD, Dp, Cp, Math.random));
                                pD = 0
                              };
                              SD.current = vD, vD();
                              const ND = fD => {
                                tD = requestAnimationFrame(ND);
                                const SD = Math.min(.05, (fD - MD) / 1e3);
                                if (MD = fD, !ZD) return;
                                const gD = window.devicePixelRatio || 1,
                                  XD = Math.round(DD.clientWidth * gD),
                                  mD = Math.round(DD.clientHeight * gD);
                                if (0 === XD || 0 === mD) return;
                                DD.width === XD && DD.height === mD || (DD.width = XD, DD.height = mD);
                                const nD = bD.current;
                                null === oD && (iD += .18 * SD), BD += (yD.current - BD) * Math.min(1, 4 * SD);
                                const OD = .6 * SD;
                                ID = ID.filter((DD => uc(DD, nD.gravity, OD))), 0 !== ID.length || QD.current || (pD += SD, pD > .6 && vD());
                                const PD = function(DD, CD, cD, ID) {
                                  const pD = 3.2 * ID,
                                    iD = .44 * Math.min(DD, CD) * pD / ID,
                                    fD = Math.cos(cD),
                                    bD = Math.sin(cD),
                                    QD = Math.cos(.42),
                                    wD = Math.sin(.42);
                                  return (cD, ID, SD) => {
                                    const BD = cD * bD + SD * fD,
                                      yD = pD - (ID * wD + BD * QD);
                                    if (yD < .05) return null;
                                    const MD = iD / yD;
                                    return {
                                      x: DD / 2 + (cD * fD - SD * bD) * MD,
                                      y: CD / 2 - (ID * QD - BD * wD) * MD,
                                      scale: MD,
                                      depth: yD
                                    }
                                  }
                                }(XD, mD, iD, BD);
                                ! function(DD, CD, cD, ID, pD) {
                                  const iD = DD.createLinearGradient(0, 0, 0, cD);
                                  iD.addColorStop(0, "#23262d"), iD.addColorStop(1, "#16181c"), DD.globalCompositeOperation = "source-over", DD.globalAlpha = 1, DD.fillStyle = iD, DD.fillRect(0, 0, CD, cD);
                                  const fD = (CD, cD) => {
                                      const pD = ID(CD[0], CD[1], CD[2]),
                                        iD = ID(cD[0], cD[1], cD[2]);
                                      pD && iD && (DD.beginPath(), DD.moveTo(pD.x, pD.y), DD.lineTo(iD.x, iD.y), DD.stroke())
                                    },
                                    bD = Math.ceil(pD) + 1,
                                    QD = Dp[1];
                                  DD.lineWidth = 1, DD.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let wD = -bD; wD <= bD; wD++) fD([wD + .5, QD, .5 - bD], [wD + .5, QD, bD + .5]), fD([.5 - bD, QD, wD + .5], [bD + .5, QD, wD + .5]);
                                  DD.strokeStyle = "rgba(255, 255, 255, 0.28)", DD.setLineDash([4, 4]);
                                  for (const wD of cp)
                                    for (const DD of cp) {
                                      const CD = [0, 1, 2].filter((CD => wD[CD] !== DD[CD]));
                                      1 === CD.length && wD[CD[0]] < DD[CD[0]] && fD(wD, DD)
                                    }
                                  DD.setLineDash([])
                                }(CD, XD, mD, PD, BD);
                                const HD = wD.current,
                                  UD = ID.map((DD => ({
                                    particle: DD,
                                    at: PD(DD.pos[0], DD.pos[1], DD.pos[2])
                                  }))).filter((DD => null !== DD.at)).sort(((DD, CD) => CD.at.depth - DD.at.depth));
                                CD.imageSmoothingEnabled = !1;
                                for (const DD of function(DD) {
                                    switch (DD) {
                                      case Tc.c.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case Tc.c.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case Tc.c.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case Tc.c.MultiplyAdd:
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
                                  }(nD.blendMode)) {
                                  CD.globalCompositeOperation = DD.operation;
                                  for (const {
                                      particle: ID,
                                      at: pD
                                    }
                                    of UD) {
                                    const [iD, fD, bD, QD] = ec(ID), wD = Math.max(1, ID.size * pD.scale);
                                    CD.globalAlpha = DD.usesAlpha ? Math.min(1, Math.max(0, QD)) : 1, HD ? CD.drawImage(cD.get(HD, iD, fD, bD), pD.x - wD / 2, pD.y - wD / 2, wD, wD) : (CD.fillStyle = `rgb(${255*iD}, ${255*fD}, ${255*bD})`, CD.fillRect(pD.x - wD / 2, pD.y - wD / 2, wD, wD))
                                  }
                                }
                                CD.globalCompositeOperation = "source-over", CD.globalAlpha = 1
                              };
                              tD = requestAnimationFrame(ND);
                              const gD = new IntersectionObserver((DD => {
                                let [CD] = DD;
                                ZD = CD.isIntersecting
                              }));
                              gD.observe(DD);
                              const XD = CD => {
                                  oD = CD.clientX, DD.setPointerCapture(CD.pointerId)
                                },
                                mD = DD => {
                                  null !== oD && (iD += .01 * (DD.clientX - oD), oD = DD.clientX)
                                },
                                nD = () => {
                                  oD = null
                                };
                              return DD.addEventListener("pointerdown", XD), DD.addEventListener("pointermove", mD), DD.addEventListener("pointerup", nD), DD.addEventListener("pointercancel", nD), () => {
                                cancelAnimationFrame(tD), gD.disconnect(), SD.current = null, DD.removeEventListener("pointerdown", XD), DD.removeEventListener("pointermove", mD), DD.removeEventListener("pointerup", nD), DD.removeEventListener("pointercancel", nD)
                              }
                            }), []), (0, tD.jsx)("canvas", {
                              ref: fD,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${CD.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const ip = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            fp = [{
                              mode: Tc.c.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: Tc.c.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: Tc.c.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: Tc.c.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: Tc.c.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            bp = (0, ID.forwardRef)((function(DD, CD) {
                              var cD, pD;
                              let {
                                textures: fD
                              } = DD;
                              const bD = gI(),
                                QD = (0, ID.useRef)(null),
                                [wD, SD] = (0, ID.useState)(Rc),
                                [BD, yD] = (0, ID.useState)("example"),
                                [MD, ZD] = (0, ID.useState)(0),
                                [vD, ND] = (0, ID.useState)(!1),
                                XD = DD => {
                                  const CD = "example" === DD ? Rc : Gc(DD);
                                  CD && (SD(CD), yD(DD))
                                };
                              (0, ID.useImperativeHandle)(CD, (() => ({
                                preview: DD => {
                                  var CD;
                                  XD(DD), null === (CD = QD.current) || void 0 === CD || CD.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const mD = DD => {
                                  SD({
                                    ...wD,
                                    ...DD
                                  }), yD(null)
                                },
                                nD = function(DD, CD) {
                                  if (null !== CD) return `${Fc}    presetId: "${CD}",\n${DI}\n})`;
                                  const cD = DD.velocityGradients.map((DD => `        {\n            timeFraction: ${hc(DD.timeFraction)},\n            factor: ${hc(DD.factor)},\n            factor2: ${hc(DD.factor2)},\n        },`)),
                                    ID = [`    dir1: ${rc(DD.dir1)},`, `    dir2: ${rc(DD.dir2)},`, DI, `    texture: "${DD.texture}",`, `    minLifeTime: ${hc(DD.minLifeTime)},`, `    maxLifeTime: ${hc(DD.maxLifeTime)},`, `    minEmitPower: ${hc(DD.minEmitPower)},`, `    maxEmitPower: ${hc(DD.maxEmitPower)},`, `    minSize: ${hc(DD.minSize)},`, `    maxSize: ${hc(DD.maxSize)},`, `    manualEmitCount: ${hc(DD.manualEmitCount)},`, `    gravity: ${rc(DD.gravity)},`, `    colorGradients: ${Ac(DD.colorGradients,"    ")},`, `    velocityGradients: ${cD.length>0?`[\n${cD.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${hc(DD.blendMode)},`];
                                  return void 0 !== DD.hideDist && ID.push(`    hideDist: ${hc(DD.hideDist)},`), `${Fc}${ID.join("\n")}\n})`
                                }(wD, null === BD || "example" === BD ? null : BD),
                                PD = fD.includes(wD.texture) ? fD : [...fD, wD.texture];
                              return (0, tD.jsxs)("section", {
                                ref: QD,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, tD.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, tD.jsxs)("div", {
                                    children: [(0, tD.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, tD.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, tD.jsx)(gD, {
                                    text: nD,
                                    label: "Copy code"
                                  })]
                                }), (0, tD.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, tD.jsx)("button", {
                                    type: "button",
                                    className: iD()("DocsVariantChip", {
                                      Active: "example" === BD
                                    }),
                                    onClick: () => {
                                      XD("example")
                                    },
                                    children: "Example"
                                  }), ip.filter((DD => null !== Gc(DD))).map((DD => (0, tD.jsx)("button", {
                                    type: "button",
                                    className: iD()("DocsVariantChip", {
                                      Active: BD === DD
                                    }),
                                    onClick: () => {
                                      XD(DD)
                                    },
                                    children: DD
                                  }, DD))), (0, tD.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== BD && void 0 !== BD ? BD : "custom",
                                    "aria-label": "Preset",
                                    onChange: DD => {
                                      XD(DD.target.value)
                                    },
                                    children: [(0, tD.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === BD && (0, tD.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), Lc.e.map((DD => (0, tD.jsx)("option", {
                                      value: DD,
                                      children: DD
                                    }, DD)))]
                                  })]
                                }), (0, tD.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, tD.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, tD.jsx)(pp, {
                                      opts: wD,
                                      textureUrl: null !== (cD = null === bD || void 0 === bD ? void 0 : bD.getParticleTextureUrl(wD.texture)) && void 0 !== cD ? cD : null,
                                      burst: MD,
                                      paused: vD
                                    }), (0, tD.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, tD.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          ZD(MD + 1)
                                        },
                                        children: [(0, tD.jsx)(oD, {
                                          name: "replay"
                                        }), (0, tD.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, tD.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": vD,
                                        onClick: () => {
                                          ND(!vD)
                                        },
                                        children: [(0, tD.jsx)(oD, {
                                          name: vD ? "play" : "pause"
                                        }), (0, tD.jsx)("span", {
                                          children: vD ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, tD.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, tD.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, tD.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, tD.jsx)("span", {
                                          children: "Texture"
                                        }), (0, tD.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: wD.texture
                                        })]
                                      }), (0, tD.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: PD.map((DD => {
                                          var CD;
                                          const cD = null !== (CD = null === bD || void 0 === bD ? void 0 : bD.getParticleTextureUrl(DD)) && void 0 !== CD ? CD : null;
                                          return (0, tD.jsx)("button", {
                                            type: "button",
                                            className: iD()("DocsParticleTexture", {
                                              Active: wD.texture === DD
                                            }),
                                            title: DD,
                                            "aria-label": DD,
                                            "aria-pressed": wD.texture === DD,
                                            onClick: () => {
                                              mD({
                                                texture: DD
                                              })
                                            },
                                            children: cD ? (0, tD.jsx)("img", {
                                              src: cD,
                                              alt: ""
                                            }) : (0, tD.jsx)(oD, {
                                              name: "image"
                                            })
                                          }, DD)
                                        }))
                                      })]
                                    }), (0, tD.jsx)(AI, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: wD.manualEmitCount,
                                      onChange: DD => {
                                        mD({
                                          manualEmitCount: DD
                                        })
                                      }
                                    }), (0, tD.jsx)(rI, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: wD.minLifeTime,
                                      high: wD.maxLifeTime,
                                      onChange: (DD, CD) => {
                                        mD({
                                          minLifeTime: DD,
                                          maxLifeTime: CD
                                        })
                                      }
                                    }), (0, tD.jsx)(rI, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: wD.minEmitPower,
                                      high: wD.maxEmitPower,
                                      onChange: (DD, CD) => {
                                        mD({
                                          minEmitPower: DD,
                                          maxEmitPower: CD
                                        })
                                      }
                                    }), (0, tD.jsx)(rI, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: wD.minSize,
                                      high: wD.maxSize,
                                      onChange: (DD, CD) => {
                                        mD({
                                          minSize: DD,
                                          maxSize: CD
                                        })
                                      }
                                    }), (0, tD.jsx)(AI, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (pD = wD.gravity[1]) && void 0 !== pD ? pD : 0,
                                      onChange: DD => {
                                        var CD, cD;
                                        mD({
                                          gravity: [null !== (CD = wD.gravity[0]) && void 0 !== CD ? CD : 0, DD, null !== (cD = wD.gravity[2]) && void 0 !== cD ? cD : 0]
                                        })
                                      }
                                    }), (0, tD.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, tD.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, tD.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, tD.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: wD.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: DD => {
                                          mD({
                                            blendMode: Number(DD.target.value)
                                          })
                                        },
                                        children: fp.map((DD => {
                                          let {
                                            mode: CD,
                                            label: cD
                                          } = DD;
                                          return (0, tD.jsx)("option", {
                                            value: CD,
                                            children: cD
                                          }, CD)
                                        }))
                                      })]
                                    }), (0, tD.jsx)(FI, {
                                      opts: wD,
                                      onChange: DD => {
                                        mD({
                                          colorGradients: DD
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, tD.jsx)(OD, {
                                  code: nD,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var Qp = cD(4274),
                            wp = cD(1872);

                          function Sp(DD, CD) {
                            return DD ? Qp.b.includes(CD) ? DD.getIngameIconUrl(CD) : DD.getItemIconUrl(CD) : null
                          }

                          function Bp(DD) {
                            var CD, cD, ID;
                            let {
                              part: pD,
                              assets: fD
                            } = DD;
                            const bD = Sp(fD, pD.icon),
                              QD = null !== (CD = null === (cD = pD.style) || void 0 === cD ? void 0 : cD.fontSize) && void 0 !== CD ? CD : "1.8em",
                              wD = (0, LC.Xb)(pD.style);
                            return (0, tD.jsxs)("span", {
                              className: iD()("DocsBloxdTextIcon", {
                                Missing: !bD
                              }),
                              style: {
                                width: QD,
                                height: QD,
                                opacity: null === (ID = pD.style) || void 0 === ID ? void 0 : ID.opacity
                              },
                              title: bD ? void 0 : `No Bloxd icon, item or block is called "${pD.icon}"`,
                              children: [bD && wD && (0, tD.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: wD,
                                  maskImage: `url("${bD}")`,
                                  WebkitMaskImage: `url("${bD}")`
                                }
                              }), bD ? (0, tD.jsx)("img", {
                                src: bD,
                                alt: "",
                                className: iD()({
                                  Tinted: wD
                                })
                              }) : (0, tD.jsx)(oD, {
                                name: "image"
                              })]
                            })
                          }

                          function yp(DD) {
                            let {
                              parts: CD,
                              className: cD
                            } = DD;
                            const ID = gI(),
                              pD = [];
                            let fD = [];
                            const bD = DD => {
                              fD.length > 0 && (pD.push((0, tD.jsx)(wp.c, {
                                text: fD
                              }, `run-${DD}`)), fD = [])
                            };
                            return CD.forEach(((DD, CD) => {
                              "icon" !== dC(DD) || GC(DD.icon) ? fD.push(DD) : (bD(CD), pD.push((0, tD.jsx)(Bp, {
                                part: DD,
                                assets: ID
                              }, `icon-${CD}`)))
                            })), bD(CD.length), (0, tD.jsx)("div", {
                              className: iD()("DocsStyledTextPreview", cD),
                              children: pD
                            })
                          }
                          const Mp = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let tp = null;

                          function Zp(DD) {
                            if (tp ??= document.createElement("canvas").getContext("2d"), !tp) return "#000000";
                            tp.fillStyle = "#000000", tp.fillStyle = DD;
                            const CD = tp.fillStyle;
                            return CD.startsWith("#") ? CD : "#000000"
                          }

                          function op(DD) {
                            let {
                              value: CD,
                              label: cD,
                              onChange: ID
                            } = DD;
                            return (0, tD.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, tD.jsx)("input", {
                                type: "color",
                                value: Zp(CD),
                                "aria-label": `${cD} picker`,
                                onChange: DD => {
                                  ID(DD.target.value)
                                }
                              }), (0, tD.jsx)("input", {
                                type: "text",
                                value: CD,
                                placeholder: "#ffb914 or gold",
                                "aria-label": cD,
                                spellCheck: !1,
                                onChange: DD => {
                                  ID(DD.target.value)
                                }
                              })]
                            })
                          }

                          function vp(DD) {
                            let {
                              value: CD,
                              fontAwesomeIcons: cD,
                              onChange: pD
                            } = DD;
                            const fD = gI(),
                              [bD, QD] = (0, ID.useState)(GC(CD) ? "fontAwesome" : "bloxd"),
                              [wD, SD] = (0, ID.useState)(""),
                              BD = wD.trim().toLowerCase(),
                              yD = "bloxd" === bD ? Qp.b : cD,
                              MD = BD ? yD.filter((DD => DD.toLowerCase().includes(BD))) : yD;
                            return (0, tD.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, tD.jsx)("input", {
                                type: "text",
                                value: CD,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: DD => {
                                  pD(DD.target.value)
                                }
                              }), (0, tD.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, tD.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((DD => (0, tD.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": bD === DD,
                                    className: iD()("DocsVariantChip", {
                                      Active: bD === DD
                                    }),
                                    onClick: () => {
                                      QD(DD)
                                    },
                                    children: "bloxd" === DD ? `Bloxd icons (${Qp.b.length})` : `Font Awesome (${cD.length})`
                                  }, DD))), (0, tD.jsx)("input", {
                                    type: "search",
                                    value: wD,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: DD => {
                                      SD(DD.target.value)
                                    }
                                  })
                                ]
                              }), (0, tD.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [MD.map((DD => {
                                  const cD = "bloxd" === bD ? Sp(fD, DD) : null;
                                  return (0, tD.jsx)("button", {
                                    type: "button",
                                    title: DD,
                                    "aria-label": DD,
                                    "aria-pressed": DD === CD,
                                    className: iD()("DocsIconPickerOption", {
                                      Active: DD === CD
                                    }),
                                    onClick: () => {
                                      pD(DD)
                                    },
                                    children: "fontAwesome" === bD ? (0, tD.jsx)(Xc.c, {
                                      name: DD
                                    }) : cD ? (0, tD.jsx)("img", {
                                      src: cD,
                                      alt: ""
                                    }) : (0, tD.jsx)(oD, {
                                      name: "image"
                                    })
                                  }, DD)
                                })), 0 === MD.length && (0, tD.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", wD, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function Np(DD) {
                            let {
                              property: CD,
                              value: cD,
                              fontAwesomeIcons: ID,
                              onChange: pD
                            } = DD;
                            const {
                              field: iD,
                              label: fD
                            } = CD, bD = DD => "" !== DD || CD.isRequired ? DD : void 0;
                            switch (iD.kind) {
                              case "text":
                                return iD.multiline ? (0, tD.jsx)("textarea", {
                                  value: String(null !== cD && void 0 !== cD ? cD : ""),
                                  rows: 2,
                                  "aria-label": fD,
                                  onChange: DD => {
                                    pD(DD.target.value)
                                  }
                                }) : (0, tD.jsx)("input", {
                                  type: "text",
                                  value: String(null !== cD && void 0 !== cD ? cD : ""),
                                  "aria-label": fD,
                                  onChange: DD => {
                                    pD(bD(DD.target.value))
                                  }
                                });
                              case "size":
                                return (0, tD.jsx)("input", {
                                  type: "text",
                                  value: String(null !== cD && void 0 !== cD ? cD : ""),
                                  placeholder: CD.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": fD,
                                  spellCheck: !1,
                                  onChange: DD => {
                                    pD(bD(DD.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, tD.jsx)(op, {
                                  value: String(null !== cD && void 0 !== cD ? cD : ""),
                                  label: fD,
                                  onChange: DD => {
                                    pD(bD(DD))
                                  }
                                });
                              case "colours": {
                                const DD = Array.isArray(cD) ? cD : [],
                                  CD = DD => {
                                    pD(DD.length > 0 ? DD : void 0)
                                  };
                                return (0, tD.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [DD.map(((cD, ID) => (0, tD.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, tD.jsx)(op, {
                                      value: cD,
                                      label: `${fD} ${ID+1}`,
                                      onChange: cD => {
                                        CD(DD.map(((DD, CD) => CD === ID ? cD : DD)))
                                      }
                                    }), (0, tD.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${ID+1}`,
                                      onClick: () => {
                                        CD(DD.filter(((DD, CD) => CD !== ID)))
                                      },
                                      children: (0, tD.jsx)(oD, {
                                        name: "cross"
                                      })
                                    })]
                                  }, ID))), (0, tD.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var cD;
                                      CD([...DD, null !== (cD = DD.at(-1)) && void 0 !== cD ? cD : "#ffffff"])
                                    },
                                    children: [(0, tD.jsx)(oD, {
                                      name: "plus"
                                    }), 0 === DD.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var QD;
                                const DD = "number" === typeof cD ? cD : Number(null !== (QD = CD.defaultText) && void 0 !== QD ? QD : 0);
                                return (0, tD.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, tD.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: DD,
                                    "aria-label": fD,
                                    onChange: DD => {
                                      pD(Number(DD.target.value))
                                    }
                                  }), (0, tD.jsx)("output", {
                                    children: DD.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, tD.jsxs)("select", {
                                  value: String(null !== cD && void 0 !== cD ? cD : ""),
                                  "aria-label": fD,
                                  onChange: DD => {
                                    pD(bD(DD.target.value))
                                  },
                                  children: [!CD.isRequired && (0, tD.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", CD.defaultText, ")"]
                                  }), iD.options.map((DD => (0, tD.jsx)("option", {
                                    value: DD,
                                    children: DD
                                  }, DD)))]
                                });
                              case "icon":
                                return (0, tD.jsx)(vp, {
                                  value: String(null !== cD && void 0 !== cD ? cD : ""),
                                  fontAwesomeIcons: ID,
                                  onChange: pD
                                })
                            }
                          }

                          function gp(DD) {
                            let CD;
                            try {
                              CD = JSON.parse(DD)
                            } catch (cD) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${cD.message}`
                              }
                            }
                            return cc(CD) ? {
                              part: CD,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function Xp(DD) {
                            let {
                              parts: CD,
                              index: cD,
                              fontAwesomeIcons: pD,
                              onChange: iD,
                              Zx: fD,
                              onClose: bD
                            } = DD;
                            const QD = (0, ID.useContext)(tC),
                              SD = (0, ID.useRef)(null),
                              BD = CD[cD],
                              yD = dC(BD),
                              [MD, ZD] = (0, ID.useState)((() => JSON.stringify(BD, null, 2))),
                              vD = (0, ID.useMemo)((() => "other" === yD ? gp(MD).error : null), [yD, MD]);
                            (0, ID.useEffect)((() => {
                              var DD;
                              null === (DD = SD.current) || void 0 === DD || DD.focus()
                            }), []);
                            const ND = (0, tD.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: DD => {
                                DD.target === DD.currentTarget && bD()
                              },
                              children: (0, tD.jsxs)("div", {
                                ref: SD,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${cD+1}: ${RC[yD]}`,
                                tabIndex: -1,
                                onKeyDown: DD => {
                                  "Escape" === DD.key ? (DD.stopPropagation(), bD()) : "Tab" === DD.key && SD.current && function(DD, CD) {
                                    const cD = Array.from(DD.querySelectorAll(qC)),
                                      ID = cD[0],
                                      pD = cD.at(-1);
                                    if (!ID || !pD) return;
                                    const iD = document.activeElement;
                                    !CD.shiftKey || iD !== ID && iD !== DD ? CD.shiftKey || iD !== pD || (CD.preventDefault(), ID.focus()) : (CD.preventDefault(), pD.focus())
                                  }(SD.current, DD)
                                },
                                children: [(0, tD.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, tD.jsxs)("div", {
                                    children: [(0, tD.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", cD + 1]
                                    }), (0, tD.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: RC[yD]
                                    })]
                                  }), (0, tD.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: bD,
                                    children: (0, tD.jsx)(oD, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, tD.jsx)(yp, {
                                  parts: CD,
                                  className: "DocsTextDialogPreview"
                                }), (0, tD.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === yD ? (0, tD.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, tD.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, tD.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: MD,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: DD => {
                                        ZD(DD.target.value);
                                        const CD = gp(DD.target.value);
                                        null !== CD.part && iD(CD.part)
                                      }
                                    }), vD && (0, tD.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: vD
                                    })]
                                  }) : WC[yD].map((DD => {
                                    const CD = EC(BD, DD.path),
                                      cD = DD.isRequired ? JSON.stringify(uC(BD, DD.path)) === JSON.stringify(BD) : void 0 === CD;
                                    return (0, tD.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, tD.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, tD.jsx)("span", {
                                          children: DD.label
                                        }), (0, tD.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: cD,
                                          "aria-label": `Reset ${DD.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            iD(uC(BD, DD.path))
                                          },
                                          children: [(0, tD.jsx)(oD, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, tD.jsx)(Np, {
                                        property: DD,
                                        value: CD,
                                        fontAwesomeIcons: pD,
                                        onChange: CD => {
                                          iD(eC(BD, DD.path, CD))
                                        }
                                      }), !DD.isRequired && (0, tD.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", DD.defaultText]
                                      })]
                                    }, DD.path.join("."))
                                  }))
                                }), (0, tD.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, tD.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: fD,
                                    children: [(0, tD.jsx)(oD, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, tD.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: bD,
                                    children: "Done"
                                  })]
                                }), (0, tD.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: Mp.map((DD => (0, tD.jsx)("option", {
                                    value: DD
                                  }, DD)))
                                })]
                              })
                            });
                            return QD ? (0, wD.createPortal)(ND, QD) : ND
                          }
                          const mp = [{
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
                            np = Object.keys(kC);

                          function Op(DD) {
                            let {
                              fontAwesomeIcons: CD
                            } = DD;
                            const [cD, pD] = (0, ID.useState)(mp[0].parts), [fD, bD] = (0, ID.useState)((() => FC(mp[0].parts))), [QD, wD] = (0, ID.useState)(null), [SD, BD] = (0, ID.useState)(!1), [yD, MD] = (0, ID.useState)(null), [ZD, vD] = (0, ID.useState)(!1), [ND, gD] = (0, ID.useState)(null), XD = (0, ID.useRef)(null), mD = FC(cD);
                            (0, ID.useLayoutEffect)((() => {
                              var DD;
                              if (!ND) return;
                              const CD = DD => {
                                  var CD;
                                  return null === (CD = XD.current) || void 0 === CD ? void 0 : CD.querySelector(`[data-focus-key="${DD}"]`)
                                },
                                cD = CD(ND.key);
                              null === (DD = cD && !cD.disabled ? cD : CD(ND.fallback)) || void 0 === DD || DD.focus(), gD(null)
                            }), [ND]);
                            const nD = DD => {
                                pD(DD), bD(FC(DD)), wD(null)
                              },
                              PD = DD => {
                                nD(cD.filter(((CD, cD) => cD !== DD))), gD({
                                  key: `edit-${Math.min(DD,cD.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              HD = (DD, CD) => {
                                const ID = [...cD],
                                  [pD] = ID.splice(DD, 1);
                                ID.splice(DD + CD, 0, pD), nD(ID);
                                gD({
                                  key: `${CD<0?"up":"down"}-${DD+CD}`,
                                  fallback: `edit-${DD+CD}`
                                })
                              };
                            return (0, tD.jsxs)("section", {
                              ref: XD,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, tD.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, tD.jsxs)("div", {
                                  children: [(0, tD.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, tD.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, tD.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: mp.map((DD => (0, tD.jsx)("button", {
                                  type: "button",
                                  className: iD()("DocsVariantChip", {
                                    Active: mD === FC(DD.parts)
                                  }),
                                  onClick: () => {
                                    nD(DD.parts)
                                  },
                                  children: DD.label
                                }, DD.label)))
                              }), (0, tD.jsx)(yp, {
                                parts: cD,
                                className: "DocsTextEditorPreview"
                              }), (0, tD.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, tD.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, tD.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, tD.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [cD.map(((DD, CD) => {
                                      const ID = dC(DD);
                                      return (0, tD.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, tD.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${CD}`,
                                          "aria-label": `Edit part ${CD+1}, ${RC[ID]}`,
                                          onClick: () => {
                                            MD(CD)
                                          },
                                          children: [(0, tD.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: RC[ID]
                                          }), (0, tD.jsx)(yp, {
                                            parts: [DD],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== ID && (0, tD.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: hC(DD)
                                          })]
                                        }), (0, tD.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, tD.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${CD+1} up`,
                                            "data-focus-key": `up-${CD}`,
                                            disabled: 0 === CD,
                                            onClick: () => {
                                              HD(CD, -1)
                                            },
                                            children: (0, tD.jsx)(oD, {
                                              name: "chevron-up"
                                            })
                                          }), (0, tD.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${CD+1} down`,
                                            "data-focus-key": `down-${CD}`,
                                            disabled: CD === cD.length - 1,
                                            onClick: () => {
                                              HD(CD, 1)
                                            },
                                            children: (0, tD.jsx)(oD, {
                                              name: "chevron-down"
                                            })
                                          }), (0, tD.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${CD+1}`,
                                            onClick: () => {
                                              PD(CD)
                                            },
                                            children: (0, tD.jsx)(oD, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, CD)
                                    })), 0 === cD.length && (0, tD.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, tD.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: DD => {
                                      "Escape" === DD.key && ZD && (DD.stopPropagation(), vD(!1), gD({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, tD.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": ZD,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        vD(!ZD)
                                      },
                                      children: [(0, tD.jsx)(oD, {
                                        name: "plus"
                                      }), "Add a part", (0, tD.jsx)(oD, {
                                        name: ZD ? "chevron-up" : "chevron-down"
                                      })]
                                    }), ZD && (0, tD.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: np.map((DD => (0, tD.jsx)("li", {
                                        children: (0, tD.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (DD => {
                                              nD([...cD, kC[DD]]), vD(!1), MD(cD.length)
                                            })(DD)
                                          },
                                          children: RC[DD]
                                        })
                                      }, DD)))
                                    })]
                                  })]
                                }), (0, tD.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, tD.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, tD.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": SD,
                                      onClick: () => {
                                        BD(!SD)
                                      },
                                      children: [(0, tD.jsx)(oD, {
                                        name: SD ? "check" : "pencil"
                                      }), SD ? "Done" : "Edit"]
                                    })]
                                  }), SD ? (0, tD.jsxs)(tD.Fragment, {
                                    children: [(0, tD.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: fD,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: DD => {
                                        bD(DD.target.value);
                                        const CD = Ic(DD.target.value);
                                        wD(CD.error), CD.parts && pD(CD.parts)
                                      }
                                    }), QD && (0, tD.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: QD
                                    })]
                                  }) : (0, tD.jsx)(OD, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${mD})`
                                  })]
                                })]
                              }), null !== yD && yD < cD.length && (0, tD.jsx)(Xp, {
                                parts: cD,
                                index: yD,
                                fontAwesomeIcons: CD,
                                onChange: DD => {
                                  ((DD, CD) => {
                                    nD(cD.map(((cD, ID) => ID === DD ? CD : cD)))
                                  })(yD, DD)
                                },
                                Zx: () => {
                                  PD(yD), MD(null)
                                },
                                onClose: () => {
                                  MD(null), gD({
                                    key: `edit-${yD}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var Pp = cD(4615),
                            Hp = cD(4599),
                            Up = cD(4608),
                            xp = cD(4618);
                          const qp = 40,
                            Jp = 800,
                            Kp = 150,
                            ap = 8e3,
                            Vp = 2e3;

                          function zp(DD, CD) {
                            return 12 * Math.log2(CD / DD)
                          }

                          function jp(DD, CD) {
                            return Math.round(DD * 2 ** (CD / 12) * 10) / 10
                          }

                          function lp(DD) {
                            return `${DD} ms`
                          }

                          function Lp(DD) {
                            return `${DD} st`
                          }
                          const Tp = [{
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

                          function Gp(DD) {
                            let {
                              synth: CD,
                              onChange: cD
                            } = DD;
                            const ID = (0, Pp.l)(CD);
                            return (0, tD.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, tD.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, tD.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, tD.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, tD.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, tD.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, tD.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: Pp.h.map((DD => (0, tD.jsx)("button", {
                                      type: "button",
                                      className: iD()("DocsVariantChip", {
                                        Active: CD.waveform === DD
                                      }),
                                      "aria-pressed": CD.waveform === DD,
                                      onClick: () => {
                                        cD({
                                          waveform: DD
                                        })
                                      },
                                      children: DD
                                    }, DD)))
                                  })]
                                }), (0, tD.jsx)(AI, {
                                  label: "Pitch",
                                  min: 0,
                                  max: zp(qp, Jp),
                                  step: .1,
                                  value: zp(qp, CD.pitchHz),
                                  format: () => `${CD.pitchHz} Hz`,
                                  onChange: DD => {
                                    cD({
                                      pitchHz: jp(qp, DD)
                                    })
                                  }
                                }), (0, tD.jsx)(AI, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: CD.syllableMs,
                                  format: lp,
                                  onChange: DD => {
                                    cD({
                                      syllableMs: DD
                                    })
                                  }
                                }), (0, tD.jsx)(AI, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: CD.volume,
                                  onChange: DD => {
                                    cD({
                                      volume: DD
                                    })
                                  }
                                })]
                              }), (0, tD.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, tD.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, tD.jsx)(AI, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: CD.durationMs,
                                  format: lp,
                                  onChange: DD => {
                                    cD({
                                      durationMs: DD
                                    })
                                  }
                                }), (0, tD.jsx)(AI, {
                                  label: "Fade in",
                                  min: 0,
                                  max: ID.durationMs,
                                  step: 1,
                                  value: ID.attackMs,
                                  format: lp,
                                  onChange: DD => {
                                    cD({
                                      attackMs: DD
                                    })
                                  }
                                }), (0, tD.jsx)(AI, {
                                  label: "Fade out",
                                  min: 0,
                                  max: ID.durationMs - ID.attackMs,
                                  step: 1,
                                  value: ID.releaseMs,
                                  format: lp,
                                  onChange: DD => {
                                    cD({
                                      releaseMs: DD
                                    })
                                  }
                                }), (0, tD.jsx)(AI, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: CD.glideSemitones,
                                  format: Lp,
                                  onChange: DD => {
                                    cD({
                                      glideSemitones: DD
                                    })
                                  }
                                }), (0, tD.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, tD.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== CD.lowpassHz,
                                    onChange: DD => {
                                      cD({
                                        lowpassHz: DD.target.checked ? Vp : null
                                      })
                                    }
                                  }), (0, tD.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== CD.lowpassHz && (0, tD.jsx)(AI, {
                                  label: "Filter",
                                  min: 0,
                                  max: zp(Kp, ap),
                                  step: .1,
                                  value: zp(Kp, CD.lowpassHz),
                                  format: () => `${CD.lowpassHz} Hz`,
                                  onChange: DD => {
                                    cD({
                                      lowpassHz: jp(Kp, DD)
                                    })
                                  }
                                })]
                              }), (0, tD.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, tD.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), Tp.map((DD => {
                                  let {
                                    key: ID,
                                    label: pD,
                                    max: iD
                                  } = DD;
                                  return (0, tD.jsx)(AI, {
                                    label: pD,
                                    min: 0,
                                    max: iD,
                                    step: .1,
                                    value: CD.intonation[ID],
                                    format: Lp,
                                    onChange: DD => {
                                      cD({
                                        intonation: {
                                          ...CD.intonation,
                                          [ID]: DD
                                        }
                                      })
                                    }
                                  }, ID)
                                }))]
                              })]
                            })
                          }
                          const Rp = Object.keys(Pp.k),
                            kp = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function dp(DD) {
                            var CD;
                            const cD = JSON.stringify((0, Pp.l)(DD));
                            return null !== (CD = Rp.find((DD => JSON.stringify((0, Pp.l)(Pp.k[DD])) === cD))) && void 0 !== CD ? CD : null
                          }

                          function Yp(DD) {
                            let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof DD || null === DD) return JSON.stringify(DD);
                            return `{\n${Object.entries(DD).map((DD=>{let[cD,ID]=DD;return`${CD}    ${cD}: ${Yp(ID,`${CD}    `)},`})).join("\n")}\n${CD}}`
                          }

                          function Wp(DD, CD, cD) {
                            const ID = dp(DD),
                              pD = [`    line: ${JSON.stringify(CD)},`];
                            return cD && pD.push(`    speakerName: ${JSON.stringify(cD)},`), pD.push("    voice,"), `const voice = ${ID?JSON.stringify(ID):Yp((0,Pp.l)(DD))}\n\napi.setClientOption(playerId, "dialogue", {\n${pD.join("\n")}\n})`
                          }
                          const sp = 400,
                            Ep = 90;
                          let ep = null;

                          function hp(DD, CD, cD) {
                            return ep ??= new AudioContext, ep.resume(), (0, xp.d)(ep, ep.destination, DD, CD, cD, (() => {}))
                          }

                          function rp() {
                            const [DD, CD] = (0, ID.useState)(Pp.k.regular), [cD, pD] = (0, ID.useState)(kp[0]), [fD, bD] = (0, ID.useState)("Innkeeper"), [QD, wD] = (0, ID.useState)(0), SD = SI((DD => DD.volume)), BD = (0, ID.useRef)(null), yD = (0, ID.useRef)(0), MD = (0, ID.useRef)(0), ZD = () => {
                              var DD;
                              null === (DD = BD.current) || void 0 === DD || DD.call(BD), BD.current = null
                            };
                            (0, ID.useEffect)((() => () => {
                              var DD;
                              null === (DD = BD.current) || void 0 === DD || DD.call(BD), window.clearTimeout(yD.current)
                            }), []);
                            const vD = (0, ID.useMemo)((() => ({
                                line: cD,
                                speakerName: fD || void 0,
                                voice: DD
                              })), [cD, fD, DD]),
                              ND = (0, ID.useRef)(vD);
                            ND.current = vD;
                            const XD = dp(DD),
                              mD = DD => {
                                window.clearTimeout(yD.current), ZD();
                                const {
                                  plan: CD,
                                  synth: cD
                                } = (0, Up.e)(DD);
                                cD && (BD.current = hp(cD, CD.blips, SD)), wD((DD => DD + 1))
                              },
                              nD = Wp(DD, cD, fD);
                            return (0, tD.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, tD.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, tD.jsxs)("div", {
                                  children: [(0, tD.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, tD.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, tD.jsx)(gD, {
                                  text: nD,
                                  label: "Copy code"
                                })]
                              }), (0, tD.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [Rp.map((DD => (0, tD.jsx)("button", {
                                  type: "button",
                                  className: iD()("DocsVariantChip", {
                                    Active: XD === DD
                                  }),
                                  "aria-pressed": XD === DD,
                                  onClick: () => {
                                    (DD => {
                                      const cD = Pp.k[DD];
                                      CD(cD), mD({
                                        ...vD,
                                        voice: cD
                                      })
                                    })(DD)
                                  },
                                  children: DD
                                }, DD))), !XD && (0, tD.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, tD.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, tD.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, tD.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, tD.jsx)(Hp.c, {
                                      display: vD
                                    }, QD)
                                  }), (0, tD.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: DD => {
                                      DD.preventDefault(), mD(vD)
                                    },
                                    children: [(0, tD.jsx)("input", {
                                      value: cD,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: DD => {
                                        pD(DD.target.value)
                                      }
                                    }), (0, tD.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, tD.jsx)(oD, {
                                        name: "play"
                                      }), (0, tD.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, tD.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: kp.map((DD => (0, tD.jsx)("button", {
                                      type: "button",
                                      className: iD()("DocsVariantChip", {
                                        Active: cD === DD
                                      }),
                                      onClick: () => {
                                        var CD;
                                        pD(CD = DD), mD({
                                          ...vD,
                                          line: CD
                                        })
                                      },
                                      children: DD
                                    }, DD)))
                                  }), (0, tD.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, tD.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, tD.jsx)("input", {
                                      value: fD,
                                      placeholder: "No name",
                                      onChange: DD => {
                                        bD(DD.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, tD.jsx)(Gp, {
                                  synth: DD,
                                  onChange: cD => {
                                    const ID = {
                                      ...DD,
                                      ...cD
                                    };
                                    CD(ID);
                                    const pD = {
                                        ...vD,
                                        voice: ID
                                      },
                                      iD = performance.now();
                                    if (iD - MD.current >= Ep) {
                                      MD.current = iD, ZD();
                                      const DD = (0, Up.e)(pD).plan.blips[0];
                                      DD && (BD.current = hp((0, Pp.l)(ID), [{
                                        ...DD,
                                        atMs: 0
                                      }], SD))
                                    }
                                    window.clearTimeout(yD.current), yD.current = window.setTimeout((() => {
                                      mD(ND.current)
                                    }), sp)
                                  }
                                })]
                              }), (0, tD.jsx)(OD, {
                                code: nD,
                                lang: "ts"
                              })]
                            })
                          }
                          var Ap = cD(4630);
                          const Fp = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            Di = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            Ci = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${Di}`, "g"), Ap.q],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, Ap.q]
                            ];

                          function ci(DD) {
                            return `${DD.pageId}#${DD.anchor}`
                          }
                          let Ii, ii, fi;

                          function bi(DD) {
                            const CD = (0, PD.j)(DD),
                              cD = new Set;
                            for (const [, , ID] of CD.matchAll(PD.e)) {
                              const DD = ID.startsWith("#") ? dD(ID) : null,
                                CD = DD ? ci({
                                  pageId: DD.page.id,
                                  anchor: DD.anchor
                                }) : null;
                              null !== CD && (Ii || (Ii = new Set(lD.flatMap((DD => qD(DD.layout) ? RD(DD).sections.map((CD => ci({
                                pageId: DD.id,
                                anchor: CD.heading.anchor
                              }))) : [])))), Ii).has(CD) && cD.add(CD)
                            }
                            for (const [, , ID] of CD.matchAll(Fp)) {
                              const DD = yC(ID);
                              DD && cD.add(ci(DD))
                            }
                            return cD
                          }

                          function Qi(DD, CD) {
                            const cD = new Set,
                              ID = function(DD) {
                                return DD.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(DD);
                            for (const [, pD] of ID.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) cD.add(pD);
                            for (const [pD, iD] of Ci)
                              for (const [, DD] of(0, Ap.f)(ID, pD, iD)) CD.has(DD) && cD.add(DD);
                            return cD
                          }

                          function wi(DD, CD, cD, ID) {
                            const pD = DD.get(CD);
                            pD ? !ID && pD.some((DD => DD.pageId === cD.pageId)) || pD.push(cD) : DD.set(CD, [cD])
                          }
                          const Si = /^[A-Za-z_$][\w$]*$/;

                          function Bi(DD) {
                            return Si.test(DD.name) ? DD.name : "options"
                          }

                          function yi(DD, CD) {
                            const cD = DD.params.map(Bi).join(", ");
                            return CD ? `${DD.name} = (${cD}) => {\n\t\n}` : `api.${DD.name}(${cD})`
                          }

                          function Mi(DD) {
                            let {
                              method: CD,
                              isCallback: cD
                            } = DD;
                            return (0, tD.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, tD.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [cD ? (0, tD.jsxs)(tD.Fragment, {
                                  children: [(0, tD.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: CD.name
                                  }), (0, tD.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, tD.jsxs)(tD.Fragment, {
                                  children: [(0, tD.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, tD.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: CD.name
                                  }), (0, tD.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), CD.params.map(((DD, cD) => (0, tD.jsxs)(ID.Fragment, {
                                  children: [cD > 0 && (0, tD.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, tD.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${CD.name}-${Bi(DD)}`,
                                    children: DD.name
                                  })]
                                }, DD.name))), (0, tD.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: cD ? ") => " : ")"
                                }), cD && !CD.returns && (0, tD.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), CD.returns && CD.returns.type && (0, tD.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!cD && (0, tD.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, tD.jsx)(HC, {
                                  type: CD.returns.type
                                })]
                              })]
                            })
                          }

                          function ti(DD) {
                            let {
                              title: CD,
                              references: cD
                            } = DD;
                            const pD = (0, ID.useContext)(MC);
                            return (0, tD.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, tD.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: CD
                              }), cD.map((DD => (0, tD.jsx)(fD.d, {
                                to: WD(pD, TD(DD.pageId), DD.anchor),
                                children: DD.label
                              }, `${DD.pageId}#${DD.anchor}`)))]
                            })
                          }

                          function Zi(DD) {
                            var CD, cD;
                            let {
                              pageId: ID,
                              anchor: pD
                            } = DD;
                            const iD = ci({
                                pageId: ID,
                                anchor: pD
                              }),
                              fD = null !== (CD = function() {
                                if (!fi) {
                                  fi = new Map;
                                  const ID = new Set(lD.filter((DD => "callbacks" === DD.layout)).flatMap((DD => RD(DD).sections.map((DD => DD.heading.text)))));
                                  for (const pD of lD)
                                    if ("article" === pD.layout || "snippets" === pD.layout)
                                      for (const iD of (0, PD.y)(RD(pD)))
                                        for (const {
                                            code: fD
                                          }
                                          of(0, PD.l)(iD.blocks))
                                          for (const bD of Qi(fD, ID)) {
                                            const ID = BC().get(bD);
                                            if (ID) {
                                              var DD, CD, cD;
                                              const fD = {
                                                pageId: pD.id,
                                                anchor: null !== (DD = null === (CD = iD.heading) || void 0 === CD ? void 0 : CD.anchor) && void 0 !== DD ? DD : "",
                                                label: null !== (cD = pD.navTitle) && void 0 !== cD ? cD : pD.title
                                              };
                                              wi(fi, ci(ID), fD, !1)
                                            }
                                          }
                                }
                                return fi
                              }().get(iD)) && void 0 !== CD ? CD : [],
                              bD = null !== (cD = function() {
                                if (!ii) {
                                  ii = new Map;
                                  const DD = TD("changelog");
                                  for (const CD of RD(DD).sections) {
                                    const cD = new Set(CD.blocks.flatMap((DD => [...bi(DD)])));
                                    for (const ID of cD) {
                                      const cD = {
                                        pageId: DD.id,
                                        anchor: CD.heading.anchor,
                                        label: CD.heading.text
                                      };
                                      wi(ii, ID, cD, !0)
                                    }
                                  }
                                }
                                return ii
                              }().get(iD)) && void 0 !== cD ? cD : [];
                            return 0 === fD.length && 0 === bD.length ? null : (0, tD.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [fD.length > 0 && (0, tD.jsx)(ti, {
                                title: "Used in",
                                references: fD
                              }), bD.length > 0 && (0, tD.jsx)(ti, {
                                title: "Changelog",
                                references: bD
                              })]
                            })
                          }

                          function oi(DD) {
                            let {
                              method: CD,
                              pageId: cD,
                              anchor: ID,
                              isCallback: pD
                            } = DD;
                            const iD = pD ? void 0 : bC().get(CD.name),
                              fD = CD.description.length > 0 || null === iD || void 0 === iD || !iD.description ? CD.description : (0, PD.C)(iD.description);
                            return (0, tD.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, tD.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, tD.jsx)(wc, {
                                  level: 2,
                                  text: CD.name,
                                  anchor: ID,
                                  className: "DocsCardTitle"
                                }), (0, tD.jsx)(gD, {
                                  text: yi(CD, pD),
                                  label: pD ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, tD.jsx)(Mi, {
                                method: CD,
                                isCallback: pD
                              }), iD && null !== iD.deprecation && (0, tD.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, tD.jsx)("strong", {
                                  children: "Deprecated"
                                }), iD.deprecation && (0, tD.jsxs)(tD.Fragment, {
                                  children: [": ", (0, tD.jsx)(nC, {
                                    text: (bD = iD.deprecation, (0, Ap.C)(bD, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, Ap.n)("`\\w"), (DD => {
                                      let [CD] = DD;
                                      return BC().has(CD) ? `\`${CD}\`` : CD
                                    })))
                                  })]
                                })]
                              }), fD.length > 0 && (0, tD.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, tD.jsx)(Mc, {
                                  blocks: fD
                                })
                              }), CD.params.length > 0 && (0, tD.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, tD.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, tD.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: CD.params.map((DD => (0, tD.jsxs)("div", {
                                    id: `${CD.name}-${Bi(DD)}`,
                                    className: "DocsParam",
                                    children: [(0, tD.jsxs)("dt", {
                                      children: [(0, tD.jsx)("code", {
                                        className: "DocsParamName",
                                        children: DD.name
                                      }), (0, tD.jsx)(HC, {
                                        type: DD.type
                                      })]
                                    }), DD.description && (0, tD.jsx)("dd", {
                                      children: (0, tD.jsx)(nC, {
                                        text: DD.description
                                      })
                                    })]
                                  }, DD.name)))
                                })]
                              }), CD.returns && (CD.returns.type || CD.returns.description.length > 0) && (0, tD.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, tD.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, tD.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [CD.returns.type && (0, tD.jsx)(HC, {
                                    type: CD.returns.type
                                  }), CD.returns.description.length > 0 && (0, tD.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, tD.jsx)(Mc, {
                                      blocks: CD.returns.description
                                    })
                                  })]
                                })]
                              }), (0, tD.jsx)(Zi, {
                                pageId: cD,
                                anchor: ID
                              })]
                            });
                            var bD
                          }

                          function vi(DD) {
                            var CD;
                            return null !== DD.defaultValue && "undefined" !== DD.defaultValue ? DD.defaultValue : null !== (CD = DD.example) && void 0 !== CD ? CD : "value"
                          }

                          function Ni(DD) {
                            let {
                              setting: CD,
                              pageId: cD,
                              anchor: ID,
                              setterSnippet: pD
                            } = DD;
                            const iD = null === CD.defaultValue ? null : vC(CD.defaultValue);
                            return (0, tD.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, tD.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, tD.jsx)(wc, {
                                  level: 2,
                                  text: CD.name,
                                  anchor: ID,
                                  className: "DocsCardTitle"
                                }), (0, tD.jsx)(gD, {
                                  text: pD(CD.name, vi(CD)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, tD.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, tD.jsxs)("div", {
                                  children: [(0, tD.jsx)("dt", {
                                    children: "Type"
                                  }), (0, tD.jsx)("dd", {
                                    children: (0, tD.jsx)(HC, {
                                      type: CD.type
                                    })
                                  })]
                                }), null !== CD.defaultValue && (0, tD.jsxs)("div", {
                                  children: [(0, tD.jsx)("dt", {
                                    children: "Default"
                                  }), (0, tD.jsx)("dd", {
                                    children: (0, tD.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [iD && (0, tD.jsx)(NC, {
                                        colour: iD
                                      }), CD.defaultValue]
                                    })
                                  })]
                                }), null !== CD.example && (0, tD.jsxs)("div", {
                                  children: [(0, tD.jsx)("dt", {
                                    children: "Example"
                                  }), (0, tD.jsx)("dd", {
                                    children: (0, tD.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: CD.example
                                    })
                                  })]
                                })]
                              }), CD.description.length > 0 && (0, tD.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, tD.jsx)(Mc, {
                                  blocks: CD.description
                                })
                              }), (0, tD.jsx)(Zi, {
                                pageId: cD,
                                anchor: ID
                              })]
                            })
                          }

                          function gi(DD) {
                            let {
                              section: CD
                            } = DD;
                            return (0, tD.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, tD.jsx)(wc, {
                                level: 2,
                                text: CD.heading.text,
                                anchor: CD.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, tD.jsx)("div", {
                                className: "DocsProse",
                                children: (0, tD.jsx)(Mc, {
                                  blocks: CD.blocks
                                })
                              })]
                            })
                          }

                          function Xi(DD) {
                            let {
                              section: CD
                            } = DD;
                            return (0, tD.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, tD.jsx)(wc, {
                                level: CD.heading.level,
                                text: CD.heading.text,
                                anchor: CD.heading.anchor
                              }), (0, tD.jsx)(Mc, {
                                blocks: CD.blocks
                              })]
                            })
                          }
                          const mi = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function ni(DD) {
                            let {
                              page: CD,
                              section: cD
                            } = DD;
                            if ("methods" === CD.layout || "callbacks" === CD.layout) return (0, tD.jsx)(oi, {
                              method: Oc(cD),
                              pageId: CD.id,
                              anchor: cD.heading.anchor,
                              isCallback: "callbacks" === CD.layout
                            });
                            if ("settings" === CD.layout) {
                              const DD = function(DD) {
                                const CD = {
                                  name: DD.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const ID of DD.blocks) {
                                  var cD;
                                  if (nc(ID)) continue;
                                  const DD = "paragraph" === ID.kind ? ID.text.match(Pc) : null;
                                  if (!DD) {
                                    CD.description.push(ID);
                                    continue
                                  }
                                  const pD = null !== (cD = mc(DD[2])) && void 0 !== cD ? cD : DD[2];
                                  "Type" === DD[1] ? CD.type = pD : "Default" === DD[1] ? CD.defaultValue = pD : "" !== pD && (CD.example = pD)
                                }
                                return CD.type ? CD : null
                              }(cD);
                              if (DD) return (0, tD.jsx)(Ni, {
                                setting: DD,
                                pageId: CD.id,
                                anchor: cD.heading.anchor,
                                setterSnippet: CD.setterSnippet
                              })
                            }
                            return "snippets" === CD.layout ? (0, tD.jsx)(gi, {
                              section: cD
                            }) : "changelog" === CD.layout ? (0, tD.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, tD.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, tD.jsx)(wc, {
                                  level: 2,
                                  text: cD.heading.text,
                                  anchor: cD.heading.anchor
                                })
                              }), (0, tD.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, tD.jsx)(Mc, {
                                  blocks: Hc(cD.blocks)
                                })
                              })]
                            }) : CD.gallery ? (0, tD.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, tD.jsx)(wc, {
                                level: cD.heading.level,
                                text: cD.heading.text,
                                anchor: cD.heading.anchor
                              }), (0, tD.jsx)(UI, {
                                kind: CD.gallery,
                                content: RD(CD),
                                blocks: cD.blocks
                              })]
                            }) : (0, tD.jsx)(Xi, {
                              section: cD
                            })
                          }

                          function Oi(DD) {
                            let {
                              page: CD,
                              onTocChange: cD
                            } = DD;
                            const pD = RD(CD),
                              [iD, fD] = (0, ID.useState)(""),
                              bD = "article" !== CD.layout,
                              QD = oc(CD.gallery) ? CD.gallery : null,
                              wD = null !== QD,
                              SD = iD.trim().toLowerCase(),
                              BD = (0, ID.useRef)(null),
                              yD = (0, ID.useCallback)((DD => {
                                var CD;
                                null === (CD = BD.current) || void 0 === CD || CD.preview(DD)
                              }), []),
                              MD = (0, ID.useMemo)((() => {
                                if (!CD.hasParticlePlayground) return [];
                                const DD = Jc(pD.intro).find((DD => "names" === DD.kind && !DD.names.some((DD => null !== Gc(DD.name)))));
                                return "names" === (null === DD || void 0 === DD ? void 0 : DD.kind) ? DD.names.map((DD => DD.name)) : []
                              }), [CD, pD]),
                              ZD = (0, ID.useMemo)((() => {
                                if (!CD.hasTextPlayground) return [];
                                const DD = pD.sections.flatMap((DD => DD.blocks.flatMap((DD => {
                                  var CD;
                                  return (null !== (CD = qc(DD)) && void 0 !== CD ? CD : []).flatMap((DD => GC(DD.name) ? [DD.name] : []))
                                }))));
                                return [...new Set(DD)]
                              }), [CD, pD]),
                              oD = (0, ID.useMemo)((() => SD ? pD.sections.filter((DD => function(DD, CD) {
                                return !!DD.heading.text.toLowerCase().includes(CD) || DD.blocks.some((DD => (0, PD.j)(DD).toLowerCase().includes(CD)))
                              }(DD, SD))) : pD.sections), [pD, SD]),
                              vD = (0, ID.useMemo)((() => function(DD, CD) {
                                return "article" !== DD.layout ? CD.map((DD => ({
                                  anchor: DD.heading.anchor,
                                  text: DD.heading.text,
                                  level: 2
                                }))) : CD.flatMap((DD => {
                                  const CD = DD.blocks.flatMap((DD => "heading" === DD.kind && 3 === DD.level ? [{
                                    anchor: DD.anchor,
                                    text: DD.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: DD.heading.anchor,
                                    text: DD.heading.text,
                                    level: 2
                                  }, ...CD]
                                }))
                              }(CD, oD)), [CD, oD]);
                            return (0, ID.useEffect)((() => {
                              cD(vD)
                            }), [vD, cD]), (0, tD.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, tD.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, tD.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: pD.title || CD.title
                                }), (0, tD.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: CD.summary
                                }), (0, tD.jsx)(eI, {
                                  page: CD
                                }), bD && (0, tD.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, tD.jsxs)("span", {
                                    children: [(0, tD.jsx)("strong", {
                                      children: pD.sections.length
                                    }), " ", mi[CD.layout]]
                                  })
                                })]
                              }), "" === CD.slug && (0, tD.jsx)(qI, {}), QD && (0, tD.jsx)(VI, {
                                kind: QD
                              }, QD), CD.hasParticlePlayground && (0, tD.jsx)(bp, {
                                ref: BD,
                                textures: MD
                              }), !wD && pD.intro.length > 0 && (0, tD.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: CD.gallery ? (0, tD.jsx)(vI.Provider, {
                                  value: CD.hasParticlePlayground ? yD : null,
                                  children: (0, tD.jsx)(UI, {
                                    kind: CD.gallery,
                                    content: pD,
                                    blocks: pD.intro
                                  })
                                }) : (0, tD.jsx)(Mc, {
                                  blocks: Hc(pD.intro)
                                })
                              }), CD.hasTextPlayground && (0, tD.jsx)(Op, {
                                fontAwesomeIcons: ZD
                              }), CD.hasVoicePlayground && (0, tD.jsx)(rp, {}), CD.childPageIds && (0, tD.jsx)(qI, {
                                cards: CD.childPageIds.map((DD => ({
                                  pageId: DD
                                }))),
                                label: CD.title
                              }), bD && (0, tD.jsx)(gc, {
                                className: "DocsFilterBar",
                                value: iD,
                                placeholder: `Filter ${pD.sections.length} ${mi[CD.layout]}\u2026`,
                                label: `Filter ${mi[CD.layout]}`,
                                onChange: fD,
                                count: SD ? {
                                  visible: oD.length,
                                  total: pD.sections.length
                                } : null
                              }), !wD && (0, tD.jsxs)("div", {
                                className: `DocsSections Layout-${CD.layout}`,
                                children: [oD.map((DD => (0, tD.jsx)(ni, {
                                  page: CD,
                                  section: DD
                                }, DD.heading.anchor))), 0 === oD.length && (0, tD.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", mi[CD.layout], " match \u201c", iD, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const Pi = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function Hi(DD) {
                            let {
                              entry: CD,
                              isActive: cD,
                              onNavigate: ID,
                              label: pD,
                              children: fD
                            } = DD;
                            return (0, tD.jsx)("a", {
                              href: `#${CD.anchor}`,
                              "aria-label": pD,
                              className: iD()(`Level${CD.level}`, {
                                Active: cD
                              }),
                              "aria-current": cD ? "location" : void 0,
                              onClick: DD => {
                                DD.preventDefault(), ID(CD.anchor)
                              },
                              children: fD
                            })
                          }

                          function Ui(DD) {
                            let {
                              toc: CD,
                              activeAnchor: cD,
                              onNavigate: pD
                            } = DD;
                            const fD = Math.max(0, CD.findIndex((DD => DD.anchor === cD))),
                              bD = (0, ID.useRef)(null),
                              QD = (0, ID.useRef)(!1);
                            (0, ID.useEffect)((() => {
                              var DD, cD;
                              const ID = null === (DD = bD.current) || void 0 === DD ? void 0 : DD.closest(".DocsToc"),
                                pD = null === (cD = bD.current) || void 0 === cD ? void 0 : cD.querySelector(".DocsTimelineNotch.Active");
                              if (!ID || !pD) return;
                              let iD = 0;
                              if (fD === CD.length - 1) iD = ID.scrollHeight;
                              else if (fD > 0) {
                                const DD = ID.getBoundingClientRect(),
                                  CD = pD.getBoundingClientRect();
                                iD = ID.scrollTop + CD.top + CD.height / 2 - (DD.top + ID.clientHeight / 2)
                              }
                              ID.scrollTo({
                                top: iD,
                                behavior: QD.current ? "smooth" : "auto"
                              }), QD.current = !0
                            }), [fD, CD.length]);
                            const wD = [];
                            return CD.forEach(((DD, CD) => {
                              var cD, ID, pD;
                              const iD = function(DD) {
                                  const CD = DD.trim().match(Pi);
                                  return CD ? {
                                    day: CD[1],
                                    month: `${CD[2]} ${CD[3]}`
                                  } : null
                                }(DD.text),
                                fD = null !== (cD = null === iD || void 0 === iD ? void 0 : iD.month) && void 0 !== cD ? cD : null;
                              null !== fD && (null === (ID = wD.at(-1)) || void 0 === ID ? void 0 : ID.month) === fD || wD.push({
                                month: fD,
                                entries: []
                              }), wD.at(-1).entries.push({
                                entry: DD,
                                day: null !== (pD = null === iD || void 0 === iD ? void 0 : iD.day) && void 0 !== pD ? pD : null,
                                index: CD
                              })
                            })), (0, tD.jsx)("ol", {
                              ref: bD,
                              className: "DocsTimeline",
                              children: wD.map((DD => {
                                let {
                                  month: CD,
                                  entries: cD
                                } = DD;
                                return (0, tD.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [CD && (0, tD.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: CD
                                  }), (0, tD.jsx)("ol", {
                                    children: cD.map((DD => {
                                      let {
                                        entry: CD,
                                        day: cD,
                                        index: ID
                                      } = DD;
                                      return (0, tD.jsx)("li", {
                                        className: iD()("DocsTimelineNotch", {
                                          Passed: ID < fD,
                                          Active: ID === fD
                                        }),
                                        children: (0, tD.jsx)(Hi, {
                                          entry: CD,
                                          isActive: ID === fD,
                                          onNavigate: pD,
                                          label: CD.text,
                                          children: (0, tD.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== cD && void 0 !== cD ? cD : CD.text
                                          })
                                        })
                                      }, CD.anchor)
                                    }))
                                  })]
                                }, cD[0].entry.anchor)
                              }))
                            })
                          }

                          function xi(DD) {
                            let {
                              isChangelog: CD,
                              toc: cD,
                              activeAnchor: ID,
                              onNavigate: pD
                            } = DD;
                            return 0 === cD.length ? null : (0, tD.jsxs)(tD.Fragment, {
                              children: [(0, tD.jsx)("div", {
                                className: "DocsTocTitle",
                                children: CD ? "Updates" : "On this page"
                              }), CD ? (0, tD.jsx)(Ui, {
                                toc: cD,
                                activeAnchor: ID,
                                onNavigate: pD
                              }) : (0, tD.jsx)("ul", {
                                children: cD.map((DD => (0, tD.jsx)("li", {
                                  children: (0, tD.jsx)(Hi, {
                                    entry: DD,
                                    isActive: DD.anchor === ID,
                                    onNavigate: pD,
                                    children: DD.text.replace(/`/g, "")
                                  })
                                }, DD.anchor)))
                              })]
                            })
                          }
                          const qi = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            Ji = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            Ki = 20,
                            ai = 10,
                            Vi = 40,
                            zi = 120;
                          let ji;

                          function li(DD) {
                            const CD = DD.gallery;
                            if (!CD) return [];
                            if (oc(CD)) return function(DD) {
                              return Nc(DD).entries.map((DD => DD.name))
                            }(CD).map((cD => ({
                              page: DD,
                              anchor: ac(CD, cD),
                              title: cD,
                              kind: Ji[CD],
                              text: "",
                              listedUnder: DD.title
                            })));
                            const cD = RD(DD);
                            return (0, PD.y)(cD).flatMap((ID => {
                              const pD = ID.heading ? `${DD.title} \u203a ${ID.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : DD.title;
                              return zc(CD, cD, ID.blocks).flatMap((cD => "names" !== cD.kind ? [] : cD.names.map((ID => {
                                const iD = cD.isSongs ? "Song" : Ji[CD];
                                return {
                                  page: DD,
                                  anchor: ID.anchor,
                                  title: ID.name,
                                  kind: iD,
                                  text: "",
                                  listedUnder: pD
                                }
                              }))))
                            }))
                          }

                          function Li(DD, CD, cD) {
                            const ID = DD.title.toLowerCase();
                            let pD = 0;
                            if (ID === CD) pD = 100;
                            else if (ID.startsWith(CD)) pD = 80;
                            else if (ID.includes(CD)) pD = 60;
                            else if (cD.every((DD => ID.includes(DD)))) pD = 45;
                            else {
                              if (!DD.text.toLowerCase().includes(CD)) return 0;
                              pD = 20
                            }
                            return pD - Math.min(ID.length / 10, 9) + ("Page" === DD.kind ? 8 : "Method" === DD.kind ? 3 : 0) - (DD.listedUnder ? Ki : 0)
                          }

                          function Ti(DD, CD) {
                            const cD = DD.toLowerCase().indexOf(CD),
                              ID = Math.max(0, cD - zi / 3);
                            return `${ID>0?"\u2026":""}${DD.slice(ID,ID+zi)}${ID+zi<DD.length?"\u2026":""}`
                          }

                          function Gi(DD) {
                            let {
                              text: CD,
                              query: cD
                            } = DD;
                            const ID = cD ? CD.toLowerCase().indexOf(cD) : -1;
                            return -1 === ID ? (0, tD.jsx)(tD.Fragment, {
                              children: CD
                            }) : (0, tD.jsxs)(tD.Fragment, {
                              children: [CD.slice(0, ID), (0, tD.jsx)("mark", {
                                children: CD.slice(ID, ID + cD.length)
                              }), CD.slice(ID + cD.length)]
                            })
                          }

                          function Ri(DD) {
                            let {
                              basePath: CD,
                              onClose: cD
                            } = DD;
                            const pD = (0, bD.x)(),
                              [fD, QD] = (0, ID.useState)(""),
                              [wD, SD] = (0, ID.useState)(0),
                              BD = (0, ID.useRef)(null),
                              yD = (0, ID.useRef)(null),
                              MD = fD.trim().toLowerCase(),
                              ZD = (0, ID.useMemo)((() => {
                                const DD = (ji || (ji = lD.flatMap((DD => {
                                  const CD = RD(DD);
                                  return [{
                                    page: DD,
                                    anchor: "",
                                    title: DD.title,
                                    kind: "Page",
                                    text: DD.summary
                                  }, ...CD.sections.flatMap((CD => {
                                    const cD = CD.blocks.filter((DD => "paragraph" === DD.kind)).map(PD.j).join(" ").replace(/[`*]/g, ""),
                                      ID = {
                                        page: DD,
                                        anchor: CD.heading.anchor,
                                        title: CD.heading.text.replace(/`/g, ""),
                                        kind: qi[DD.layout],
                                        text: cD
                                      },
                                      pD = CD.blocks.flatMap((CD => "article" === DD.layout && "heading" === CD.kind && 3 === CD.level ? [{
                                        page: DD,
                                        anchor: CD.anchor,
                                        title: CD.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: ID.title
                                      }] : []));
                                    return [ID, ...pD]
                                  })), ...li(DD)]
                                }))), ji);
                                if (!MD) return DD.filter((DD => "Page" === DD.kind));
                                const CD = MD.split(/\s+/);
                                let cD = 0;
                                return DD.map((DD => ({
                                  entry: DD,
                                  score: Li(DD, MD, CD)
                                }))).filter((DD => DD.score > 0)).sort(((DD, CD) => CD.score - DD.score)).filter((DD => !DD.entry.listedUnder || (cD++, cD <= ai))).slice(0, Vi).map((DD => DD.entry))
                              }), [MD]);
                            (0, ID.useEffect)((() => {
                              SD(0)
                            }), [MD]), (0, ID.useEffect)((() => {
                              const DD = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === DD || void 0 === DD || DD.focus()
                              }
                            }), []), (0, ID.useEffect)((() => {
                              var DD, CD;
                              null === (DD = BD.current) || void 0 === DD || null === (CD = DD.querySelector(".Active")) || void 0 === CD || CD.scrollIntoView({
                                block: "nearest"
                              })
                            }), [wD]);
                            const vD = DD => {
                              pD(WD(CD, DD.page, DD.anchor)), cD()
                            };
                            return (0, tD.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: DD => {
                                DD.target === DD.currentTarget && cD()
                              },
                              children: (0, tD.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: DD => {
                                  DD.target !== yD.current && DD.preventDefault()
                                },
                                onKeyDown: DD => {
                                  if ("Escape" === DD.key) cD();
                                  else if ("Tab" === DD.key) {
                                    var CD;
                                    DD.preventDefault(), null === (CD = yD.current) || void 0 === CD || CD.focus()
                                  }
                                },
                                children: [(0, tD.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, tD.jsx)(oD, {
                                    name: "magnifying-glass"
                                  }), (0, tD.jsx)("input", {
                                    ref: yD,
                                    autoFocus: !0,
                                    value: fD,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": ZD.length > 0 ? `DocsSearchResult-${wD}` : void 0,
                                    onChange: DD => {
                                      QD(DD.target.value)
                                    },
                                    onKeyDown: DD => {
                                      if ("ArrowDown" === DD.key || "ArrowUp" === DD.key) {
                                        DD.preventDefault();
                                        const CD = "ArrowDown" === DD.key ? 1 : -1;
                                        SD((wD + CD + ZD.length) % Math.max(ZD.length, 1))
                                      } else "Enter" === DD.key && ZD[wD] && vD(ZD[wD])
                                    }
                                  }), (0, tD.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, tD.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: BD,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!MD && (0, tD.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), ZD.map(((DD, CD) => {
                                    var cD;
                                    return (0, tD.jsxs)("li", {
                                      id: `DocsSearchResult-${CD}`,
                                      role: "option",
                                      "aria-selected": CD === wD,
                                      className: iD()("DocsSearchResult", {
                                        Active: CD === wD
                                      }),
                                      onMouseMove: () => {
                                        SD(CD)
                                      },
                                      onClick: () => {
                                        vD(DD)
                                      },
                                      children: [(0, tD.jsx)(oD, {
                                        name: DD.page.icon
                                      }), (0, tD.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, tD.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, tD.jsx)(Gi, {
                                            text: DD.title,
                                            query: MD
                                          })
                                        }), DD.text && (0, tD.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, tD.jsx)(Gi, {
                                            text: Ti(DD.text, MD),
                                            query: MD
                                          })
                                        })]
                                      }), (0, tD.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === DD.kind ? "Page" : null !== (cD = DD.listedUnder) && void 0 !== cD ? cD : `${DD.kind} \xb7 ${DD.page.title}`
                                      })]
                                    }, `${DD.page.id}#${DD.anchor}`)
                                  })), MD && 0 === ZD.length && (0, tD.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", fD, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function ki(DD, CD) {
                            if (CD < 10) return `${DD.toFixed(1)}s`;
                            const cD = Math.floor(DD);
                            return `${Math.floor(cD/60)}:${String(cD%60).padStart(2,"0")}`
                          }

                          function di() {
                            const DD = SI((DD => DD.track)),
                              CD = SI((DD => DD.volume)),
                              [cD, pD] = (0, ID.useState)(0),
                              fD = (0, ID.useRef)(CI);
                            if ((0, ID.useEffect)((() => {
                                if (!DD) return;
                                if (pD(tI()), "playing" !== DD.status) return;
                                let CD = 0;
                                const cD = () => {
                                  pD(tI()), CD = requestAnimationFrame(cD)
                                };
                                return CD = requestAnimationFrame(cD), () => {
                                  cancelAnimationFrame(CD)
                                }
                              }), [DD]), !DD) return null;
                            const bD = "paused" !== DD.status,
                              QD = Math.min(cD, DD.duration);
                            return (0, tD.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, tD.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, tD.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": bD ? `Pause ${DD.name}` : `Play ${DD.name}`,
                                  onClick: MI,
                                  children: (0, tD.jsx)(oD, {
                                    name: bD ? "pause" : "play"
                                  })
                                }), (0, tD.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, tD.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, tD.jsx)("code", {
                                      children: DD.name
                                    }), (0, tD.jsx)("span", {
                                      children: DD.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, tD.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, tD.jsx)("span", {
                                      children: ki(QD, DD.duration)
                                    }), (0, tD.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: DD.duration || 1,
                                      step: .01,
                                      value: QD,
                                      disabled: 0 === DD.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${ki(QD,DD.duration)} of ${ki(DD.duration,DD.duration)}`,
                                      onChange: DD => {
                                        const CD = Number(DD.target.value);
                                        ! function(DD) {
                                          var CD;
                                          fI = DD, null === (CD = pI) || void 0 === CD || CD.seek(DD)
                                        }(CD), pD(CD)
                                      }
                                    }), (0, tD.jsx)("span", {
                                      children: DD.duration > 0 ? ki(DD.duration, DD.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, tD.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, tD.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === CD ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === CD ? ZI(fD.current) : (fD.current = CD, ZI(0))
                                    },
                                    children: (0, tD.jsx)(oD, {
                                      name: "volume",
                                      className: iD()({
                                        Muted: 0 === CD
                                      })
                                    })
                                  }), (0, tD.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: CD,
                                    "aria-label": "Volume",
                                    onChange: DD => {
                                      ZI(Number(DD.target.value))
                                    }
                                  })]
                                }), (0, tD.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var CD;
                                    null === (CD = document.querySelector(`[data-docs-track="${CSS.escape(cI(DD.name,DD.isSong))}"]`)) || void 0 === CD || CD.focus(), oI()
                                  },
                                  children: (0, tD.jsx)(oD, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var Yi = cD(36);
                          const Wi = "docsTheme",
                            si = window.matchMedia("(prefers-color-scheme: light)");

                          function Ei(DD) {
                            let {
                              theme: CD,
                              onChange: cD
                            } = DD;
                            const ID = "dark" === CD ? "light" : "dark";
                            return (0, tD.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${ID} theme`,
                              title: `Switch to ${ID} theme`,
                              onClick: () => {
                                cD(ID)
                              },
                              children: (0, tD.jsx)(oD, {
                                name: "dark" === CD ? "moon" : "sun"
                              })
                            })
                          }
                          const ei = "https://github.com/Bloxdy/code-api",
                            ui = "https://discord.gg/playbloxd",
                            ri = 180,
                            Ai = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function Fi(DD) {
                            let {
                              basePath: CD,
                              activePageId: cD,
                              onNavigate: ID
                            } = DD;
                            return (0, tD.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: LD.map((DD => (0, tD.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, tD.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: DD.title
                                }), DD.pageIds.map((DD => {
                                  var pD;
                                  const bD = TD(DD);
                                  return (0, tD.jsxs)(fD.d, {
                                    to: WD(CD, bD),
                                    className: iD()("DocsNavLink", {
                                      Active: bD.id === cD
                                    }),
                                    "aria-current": bD.id === cD ? "page" : void 0,
                                    onClick: ID,
                                    children: [(0, tD.jsx)(oD, {
                                      name: bD.icon
                                    }), (0, tD.jsx)("span", {
                                      children: null !== (pD = bD.navTitle) && void 0 !== pD ? pD : bD.title
                                    })]
                                  }, bD.id)
                                }))]
                              }, DD.title)))
                            })
                          }

                          function Df(DD) {
                            let {
                              basePath: CD,
                              pageId: cD
                            } = DD;
                            const ID = LD.flatMap((DD => DD.pageIds)),
                              pD = ID.indexOf(cD),
                              iD = pD > 0 ? TD(ID[pD - 1]) : null,
                              bD = pD < ID.length - 1 ? TD(ID[pD + 1]) : null;
                            return (0, tD.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [iD ? (0, tD.jsxs)(fD.d, {
                                className: "DocsPagerLink Previous",
                                to: WD(CD, iD),
                                children: [(0, tD.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, tD.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: iD.title
                                })]
                              }) : (0, tD.jsx)("span", {}), bD && (0, tD.jsxs)(fD.d, {
                                className: "DocsPagerLink Next",
                                to: WD(CD, bD),
                                children: [(0, tD.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, tD.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: bD.title
                                })]
                              })]
                            })
                          }

                          function Cf(DD) {
                            let {
                              basePath: CD,
                              embedded: cD = !1
                            } = DD;
                            const {
                              pageSlug: pD = ""
                            } = (0, bD.F)(), wD = (0, bD.w)(), SD = (0, bD.x)(), BD = (yD = pD, lD.find((DD => DD.slug === yD)));
                            var yD;
                            const [MD, ZD] = function() {
                              const [DD, CD] = (0, ID.useState)((() => {
                                const DD = Yi.h.getItem(Wi);
                                return "dark" === DD || "light" === DD ? DD : null
                              })), [cD, pD] = (0, ID.useState)(si.matches ? "light" : "dark");
                              return (0, ID.useEffect)((() => {
                                const DD = () => {
                                  pD(si.matches ? "light" : "dark")
                                };
                                return si.addEventListener("change", DD), () => {
                                  si.removeEventListener("change", DD)
                                }
                              }), []), [null !== DD && void 0 !== DD ? DD : cD, DD => {
                                Yi.h.setItem(Wi, DD), CD(DD)
                              }]
                            }(), [vD, ND] = (0, ID.useState)(null), [gD, XD] = (0, ID.useState)(!1), [mD, nD] = (0, ID.useState)(!1), [OD, HD] = (0, ID.useState)([]), UD = function(DD, CD) {
                              const [cD, pD] = (0, ID.useState)("");
                              return (0, ID.useEffect)((() => {
                                if (!CD) return;
                                let cD = 0;
                                const ID = () => {
                                    var ID, iD;
                                    cD = 0;
                                    const fD = CD.getBoundingClientRect().top + ri;
                                    let bD = null !== (ID = null === (iD = DD[0]) || void 0 === iD ? void 0 : iD.anchor) && void 0 !== ID ? ID : "";
                                    for (const CD of DD) {
                                      const DD = document.getElementById(CD.anchor);
                                      DD && DD.getBoundingClientRect().top <= fD && (bD = CD.anchor)
                                    }
                                    CD.scrollTop + CD.clientHeight >= CD.scrollHeight - 2 && CD.scrollTop > 0 && DD.length > 0 && (bD = DD[DD.length - 1].anchor), pD(bD)
                                  },
                                  iD = () => {
                                    cD || (cD = requestAnimationFrame(ID))
                                  };
                                return ID(), CD.addEventListener("scroll", iD, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(cD), CD.removeEventListener("scroll", iD)
                                }
                              }), [DD, CD]), cD
                            }(OD, vD), xD = "" === pD && wD.hash ? function(DD) {
                              const CD = (0, PD.s)(DD);
                              if (kD(TD("welcome"), CD)) return null;
                              const cD = Object.hasOwn(YD, CD) ? YD[CD] : null;
                              if (cD) return {
                                page: TD(cD.pageId),
                                anchor: cD.anchor
                              };
                              const ID = TD("readme");
                              return kD(ID, CD) ? {
                                page: ID,
                                anchor: CD
                              } : dD(`#${CD}`)
                            }(wD.hash) : null;
                            (0, ID.useEffect)((() => (QD.d.set({
                              musicOnFromPage: !1
                            }), () => {
                              QD.d.set({
                                musicOnFromPage: !0
                              }), oI()
                            })), []), (0, ID.useEffect)((() => {
                              const DD = DD => {
                                const CD = DD.target;
                                if (CD.closest(".DocsTextDialog")) return;
                                const cD = CD.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(CD.tagName);
                                "k" === DD.key && (DD.metaKey || DD.ctrlKey) || "/" === DD.key && !cD ? (DD.preventDefault(), nD(!0)) : "Escape" === DD.key && XD(!1)
                              };
                              return window.addEventListener("keydown", DD), () => {
                                window.removeEventListener("keydown", DD)
                              }
                            }), []);
                            const qD = (0, ID.useRef)(null);
                            (0, ID.useLayoutEffect)((() => {
                              var DD, CD;
                              if (!vD) return;
                              const cD = qD.current === wD.pathname;
                              qD.current = wD.pathname;
                              const ID = (0, PD.s)(wD.hash),
                                pD = ID ? document.getElementById(ID) : null;
                              if (null === (DD = vD.querySelector(".DocsTargeted")) || void 0 === DD || DD.classList.remove("DocsTargeted"), null === pD || void 0 === pD || null === (CD = pD.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === CD || CD.classList.add("DocsTargeted"), pD) {
                                var iD;
                                const DD = pD.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (iD = pD.closest(".DocsChangelogEntry")) && void 0 !== iD ? iD : pD).scrollIntoView({
                                  block: DD ? "center" : "start",
                                  behavior: cD ? "smooth" : "auto"
                                })
                              } else cD || vD.scrollTo({
                                top: 0
                              })
                            }), [vD, wD.pathname, wD.hash, wD.key]);
                            const JD = (0, ID.useCallback)((() => {
                                XD(!1)
                              }), []),
                              KD = (0, ID.useCallback)((DD => {
                                SD({
                                  hash: DD
                                })
                              }), [SD]);
                            if (xD) return (0, tD.jsx)(bD.c, {
                              replace: !0,
                              to: WD(CD, xD.page, xD.anchor)
                            });
                            if (!BD) return (0, tD.jsx)(bD.c, {
                              replace: !0,
                              to: CD
                            });
                            const aD = cD ? "div" : "main";
                            return (0, tD.jsx)(MC.Provider, {
                              value: CD,
                              children: (0, tD.jsx)(tC.Provider, {
                                value: vD,
                                children: (0, tD.jsxs)("div", {
                                  ref: ND,
                                  className: iD()("DocsSite", {
                                    Embedded: cD,
                                    NavOpen: gD
                                  }),
                                  "data-theme": MD,
                                  children: [(0, tD.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, tD.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": gD ? "Close menu" : "Open menu",
                                      "aria-expanded": gD,
                                      onClick: () => {
                                        XD(!gD)
                                      },
                                      children: (0, tD.jsx)(oD, {
                                        name: gD ? "cross" : "menu"
                                      })
                                    }), (0, tD.jsxs)(fD.d, {
                                      to: CD,
                                      className: "DocsBrand",
                                      children: [(0, tD.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, tD.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, tD.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, tD.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        nD(!0)
                                      },
                                      children: [(0, tD.jsx)(oD, {
                                        name: "magnifying-glass"
                                      }), (0, tD.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, tD.jsxs)("kbd", {
                                        children: [Ai ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, tD.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, tD.jsxs)("a", {
                                        href: ui,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, tD.jsx)(oD, {
                                          name: "discord"
                                        }), (0, tD.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, tD.jsxs)("a", {
                                        href: ei,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, tD.jsx)(oD, {
                                          name: "external-link"
                                        }), (0, tD.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !cD && (0, tD.jsxs)(fD.d, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, tD.jsx)(oD, {
                                          name: "play"
                                        }), (0, tD.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, tD.jsx)(Ei, {
                                        theme: MD,
                                        onChange: ZD
                                      })]
                                    })]
                                  }), (0, tD.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, tD.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, tD.jsx)(Fi, {
                                        basePath: CD,
                                        activePageId: BD.id,
                                        onNavigate: JD
                                      })
                                    }), (0, tD.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: JD
                                    }), (0, tD.jsxs)(aD, {
                                      className: "DocsMain",
                                      children: [(0, tD.jsx)(Oi, {
                                        page: BD,
                                        onTocChange: HD
                                      }, BD.id), (0, tD.jsx)(Df, {
                                        basePath: CD,
                                        pageId: BD.id
                                      })]
                                    }), (0, tD.jsx)("aside", {
                                      className: iD()("DocsToc", {
                                        Timeline: "changelog" === BD.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, tD.jsx)(xi, {
                                        isChangelog: "changelog" === BD.layout,
                                        toc: OD,
                                        activeAnchor: UD,
                                        onNavigate: KD
                                      })
                                    })]
                                  }), (0, tD.jsx)(di, {}), mD && (0, tD.jsx)(Ri, {
                                    basePath: CD,
                                    onClose: () => {
                                      nD(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4534: (DD, CD, cD) => {
                          cD.d(CD, {
                            B: () => MD,
                            C: () => yD,
                            e: () => ID,
                            i: () => fD,
                            j: () => oD,
                            l: () => ZD,
                            o: () => bD,
                            s: () => pD,
                            u: () => iD,
                            y: () => tD
                          });
                          const ID = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function pD(DD) {
                            try {
                              return decodeURIComponent(DD.slice(1))
                            } catch {
                              return DD.slice(1)
                            }
                          }

                          function iD(DD) {
                            return DD.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const fD = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${ID.source}`, "g");

                          function bD(DD, CD) {
                            return 2 === DD.length ? CD.replace(/^ (.*) $/, "$1") : CD
                          }

                          function QD(DD) {
                            return "" === DD.trim()
                          }

                          function wD(DD) {
                            const CD = [];
                            for (const cD of DD.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) CD.length > 0 && CD[CD.length - 1].endsWith("\\") ? CD[CD.length - 1] += `|${cD}` : CD.push(cD);
                            return CD.map((DD => DD.trim().replaceAll("\\|", "|")))
                          }
                          const SD = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function BD(DD) {
                            const CD = [],
                              cD = [{
                                indent: -1,
                                items: CD
                              }];
                            let ID = null;
                            for (const pD of DD) {
                              const DD = pD.match(SD);
                              if (!DD) {
                                ID && (ID.text += ` ${pD.trim()}`);
                                continue
                              }
                              const CD = DD[1].replace(/\t/g, "  ").length;
                              for (; CD <= cD[cD.length - 1].indent;) cD.pop();
                              ID = {
                                text: DD[3].trim(),
                                children: []
                              }, cD[cD.length - 1].items.push(ID), cD.push({
                                indent: CD,
                                items: ID.children
                              })
                            }
                            return CD
                          }

                          function yD(DD) {
                            const CD = DD.replace(/\r\n/g, "\n").split("\n"),
                              cD = [];
                            let ID = 0;
                            for (; ID < CD.length;) {
                              const DD = CD[ID];
                              if (QD(DD)) {
                                ID++;
                                continue
                              }
                              const pD = DD.match(/^\s*```\s*(\w*)\s*$/);
                              if (pD) {
                                const DD = [];
                                for (ID++; ID < CD.length && !/^\s*```\s*$/.test(CD[ID]);) DD.push(CD[ID]), ID++;
                                ID++, cD.push({
                                  kind: "code",
                                  lang: pD[1] || "text",
                                  code: DD.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const fD = DD.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (fD) {
                                const DD = fD[2].trim();
                                cD.push({
                                  kind: "heading",
                                  level: fD[1].length,
                                  text: DD,
                                  anchor: iD(DD)
                                }), ID++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(DD)) {
                                cD.push({
                                  kind: "rule"
                                }), ID++;
                                continue
                              }
                              if (DD.trim().startsWith("|") && ID + 1 < CD.length && /^\s*\|[\s:|-]+\|\s*$/.test(CD[ID + 1])) {
                                const pD = wD(DD),
                                  iD = [];
                                for (ID += 2; ID < CD.length && CD[ID].trim().startsWith("|");) iD.push(wD(CD[ID])), ID++;
                                cD.push({
                                  kind: "table",
                                  header: pD,
                                  rows: iD
                                });
                                continue
                              }
                              if (DD.startsWith(">")) {
                                const DD = [];
                                for (; ID < CD.length && CD[ID].startsWith(">");) DD.push(CD[ID].replace(/^>\s?/, "")), ID++;
                                cD.push({
                                  kind: "quote",
                                  blocks: yD(DD.join("\n"))
                                });
                                continue
                              }
                              if (SD.test(DD)) {
                                const pD = [],
                                  iD = /^\s*\d+\./.test(DD);
                                for (; ID < CD.length && !QD(CD[ID]) && (SD.test(CD[ID]) || /^\s+\S/.test(CD[ID]));) pD.push(CD[ID]), ID++;
                                cD.push({
                                  kind: "list",
                                  ordered: iD,
                                  items: BD(pD)
                                });
                                continue
                              }
                              const bD = [];
                              for (; ID < CD.length && !QD(CD[ID]) && !/^\s*```/.test(CD[ID]) && !/^#{1,6}\s/.test(CD[ID]) && !CD[ID].startsWith(">") && !SD.test(CD[ID]) && (!CD[ID].trim().startsWith("|") || 0 !== bD.length);) bD.push(CD[ID].trim()), ID++;
                              0 === bD.length && (bD.push(CD[ID].trim()), ID++), cD.push({
                                kind: "paragraph",
                                text: bD.join(" ")
                              })
                            }
                            return cD
                          }

                          function MD(DD) {
                            let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const cD = yD(DD);
                            let ID = "";
                            const pD = [],
                              iD = [],
                              fD = new Map;
                            for (const wD of cD) {
                              if ("heading" === wD.kind) {
                                var bD;
                                const DD = (null !== (bD = fD.get(wD.anchor)) && void 0 !== bD ? bD : 0) + 1;
                                fD.set(wD.anchor, DD), DD > 1 && (wD.anchor = `${wD.anchor}-${DD}`)
                              }
                              if ("heading" === wD.kind && 1 === wD.level && !ID) {
                                ID = wD.text;
                                continue
                              }
                              if ("heading" === wD.kind && wD.level <= CD) {
                                iD.push({
                                  heading: wD,
                                  blocks: []
                                });
                                continue
                              }
                              const DD = iD.at(-1);
                              DD ? DD.blocks.push(wD) : pD.push(wD)
                            }
                            const QD = DD => {
                              for (;
                                "rule" === (null === (CD = DD.at(-1)) || void 0 === CD ? void 0 : CD.kind);) {
                                var CD;
                                DD.pop()
                              }
                            };
                            QD(pD);
                            for (const wD of iD) QD(wD.blocks);
                            return {
                              title: ID,
                              intro: pD,
                              sections: iD
                            }
                          }

                          function tD(DD) {
                            return [{
                              heading: null,
                              blocks: DD.intro
                            }, ...DD.sections.map((DD => ({
                              heading: DD.heading,
                              blocks: DD.blocks
                            })))]
                          }

                          function ZD(DD) {
                            return DD.flatMap((DD => "code" === DD.kind ? [DD] : "quote" === DD.kind ? ZD(DD.blocks) : []))
                          }

                          function oD(DD) {
                            switch (DD.kind) {
                              case "heading":
                              case "paragraph":
                                return DD.text;
                              case "code":
                                return DD.code;
                              case "table":
                                return [DD.header, ...DD.rows].map((DD => DD.join(" "))).join(" ");
                              case "list": {
                                const CD = DD => DD.map((DD => `${DD.text} ${CD(DD.children)}`)).join(" ");
                                return CD(DD.items)
                              }
                              case "quote":
                                return DD.blocks.map(oD).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4606: (DD, CD, cD) => {
                          cD.d(CD, {
                            b: () => bD
                          });
                          var ID = cD(53),
                            pD = cD(312),
                            iD = cD(1893),
                            fD = cD(1093);

                          function bD(DD) {
                            let {
                              text: CD
                            } = DD;
                            const cD = [];
                            let bD = "";
                            return (0, pD.bc)(CD).forEach(((DD, CD) => {
                              if ("string" === typeof DD || !(0, iD.g)(DD.icon)) return void(bD += "string" === typeof DD ? DD : DD.icon);
                              const pD = Math.max(0, bD.trimEnd().search(/\S{1,12}$/));
                              cD.push((0, fD.jsxs)(ID.Fragment, {
                                children: [bD.slice(0, pD), (0, fD.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [bD.slice(pD), (0, fD.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": DD.icon,
                                    children: (0, fD.jsx)(iD.d, {
                                      itemName: DD.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, CD)), bD = ""
                            })), cD.push(bD), (0, fD.jsx)(fD.Fragment, {
                              children: cD
                            })
                          }
                        }, 4557: (DD, CD, cD) => {
                          cD.d(CD, {
                            f: () => ND,
                            b: () => vD
                          });
                          var ID = cD(53),
                            pD = cD(1440),
                            iD = cD(1872),
                            fD = cD(4560),
                            bD = cD(1093);
                          const QD = (0, ID.memo)((function(DD) {
                            let {
                              initialParameters: CD
                            } = DD;
                            const cD = (0, ID.useRef)(null),
                              pD = (0, ID.useRef)(null),
                              QD = (0, ID.useRef)(0),
                              wD = (0, ID.useRef)(null),
                              SD = CD.description,
                              BD = CD.LD,
                              {
                                scale: yD,
                                rotation: MD
                              } = null !== CD && void 0 !== CD ? CD : {},
                              tD = (0, fD.e)();
                            return (0, ID.useEffect)((() => {
                              const DD = tD.onFrame((() => {
                                const DD = tD.getState();
                                if (!DD.isActive || !cD.current || !pD.current) return;
                                const CD = DD.state;
                                if (cD.current.value = CD.progress, CD.clickCount > QD.current) {
                                  QD.current = CD.clickCount;
                                  const DD = pD.current;
                                  DD.classList.add("pulse"), wD.current = setTimeout((() => {
                                    DD.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(wD.current), DD()
                              }
                            }), [tD]), (0, bD.jsx)(bD.Fragment, {
                              children: (0, bD.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== yD && {
                                    "--scale": yD
                                  },
                                  ...null !== MD && {
                                    "--rotation": `${MD}deg`
                                  }
                                },
                                children: [(0, bD.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: cD
                                }), (0, bD.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: pD,
                                  children: (0, bD.jsx)(iD.c, {
                                    text: [{
                                      icon: BD
                                    }]
                                  })
                                }), (0, bD.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, bD.jsx)(iD.c, {
                                    text: SD
                                  })
                                })]
                              })
                            })
                          }));
                          var wD = cD(1049),
                            SD = cD.n(wD);
                          const BD = 2 * Math.PI * 90,
                            yD = (0, ID.memo)((function(DD) {
                              let {
                                initialParameters: CD
                              } = DD;
                              const cD = (0, ID.useRef)(null),
                                pD = (0, ID.useRef)(null),
                                QD = (0, ID.useRef)(null),
                                wD = CD.label,
                                yD = CD.icon,
                                MD = CD.RD,
                                {
                                  scale: tD,
                                  rotation: ZD,
                                  kD: oD
                                } = null !== CD && void 0 !== CD ? CD : {},
                                vD = (0, fD.e)();
                              return (0, ID.useEffect)((() => {
                                const DD = vD.onFrame((() => {
                                  var DD, CD;
                                  const ID = vD.getState();
                                  if (!ID.isActive || !pD.current) return;
                                  const iD = ID.state,
                                    fD = null !== (DD = iD.timeRemaining) && void 0 !== DD ? DD : 0,
                                    bD = null !== (CD = iD.GD) && void 0 !== CD ? CD : 1,
                                    wD = BD * (1 - fD / bD);
                                  pD.current.style.strokeDashoffset = `${wD}`, cD.current && (cD.current.style.opacity = fD > 0 ? "1" : "0"), QD.current && MD && (QD.current.textContent = `${(fD/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  DD()
                                }
                              }), [vD, MD]), (0, bD.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: cD,
                                style: {
                                  ...null !== tD && {
                                    "--scale": tD
                                  },
                                  ...null !== ZD && {
                                    "--rotation": `${ZD}deg`
                                  }
                                },
                                children: [(0, bD.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, bD.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, bD.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, bD.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: BD,
                                      ref: pD
                                    })]
                                  }), (0, bD.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, bD.jsx)(iD.c, {
                                      text: [{
                                        icon: yD
                                      }],
                                      className: SD()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: oD
                                      })
                                    })
                                  })]
                                }), (0, bD.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, bD.jsx)(iD.c, {
                                    text: wD,
                                    className: "QTETimedClickLabelText"
                                  }), MD && (0, bD.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: QD
                                  })]
                                })]
                              })
                            })),
                            MD = (0, ID.memo)((function(DD) {
                              let {
                                initialParameters: CD
                              } = DD;
                              const cD = (0, ID.useRef)(null),
                                pD = (0, ID.useRef)(null),
                                QD = (0, ID.useRef)(null),
                                wD = (0, ID.useRef)(!1),
                                SD = CD.description,
                                BD = null === CD || void 0 === CD ? void 0 : CD.icon,
                                yD = (0, fD.e)();
                              return (0, ID.useEffect)((() => {
                                const DD = yD.onFrame((() => {
                                  const DD = yD.getState();
                                  if (!DD.isActive) return;
                                  const CD = DD.state;
                                  if (cD.current) {
                                    const DD = 100 * (CD.catchZonePosition - CD.YD / 2);
                                    cD.current.style.left = `${DD}%`, cD.current.style.width = 100 * CD.YD + "%", CD.isCatching !== wD.current && (wD.current = CD.isCatching, CD.isCatching ? cD.current.classList.add("catching") : cD.current.classList.remove("catching"))
                                  }
                                  pD.current && (pD.current.style.left = 100 * CD.moverPosition + "%"), QD.current && (QD.current.value = CD.progress)
                                }));
                                return () => {
                                  DD()
                                }
                              }), [yD]), (0, bD.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, bD.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, bD.jsx)(iD.c, {
                                    text: SD
                                  })
                                }), (0, bD.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: QD
                                }), (0, bD.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, bD.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: cD
                                  }), (0, bD.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: pD,
                                    children: (0, bD.jsx)("span", {
                                      children: BD && (0, bD.jsx)(iD.c, {
                                        text: [{
                                          icon: BD,
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
                          var tD = cD(624);
                          const ZD = (0, ID.memo)((function(DD) {
                              let {
                                initialParameters: CD
                              } = DD;
                              const cD = (0, ID.useRef)(null),
                                pD = CD.label,
                                QD = CD.rD,
                                {
                                  icon: wD,
                                  scale: SD,
                                  rotation: BD
                                } = null !== CD && void 0 !== CD ? CD : {},
                                yD = 100 * (.5 - QD / 2),
                                MD = 100 * QD,
                                ZD = (0, fD.e)();
                              return (0, ID.useEffect)((() => {
                                const DD = ZD.onFrame((() => {
                                  const DD = ZD.getState();
                                  if (!DD.isActive || !cD.current) return;
                                  const CD = DD.state;
                                  cD.current.style.left = 100 * CD.markerPosition + "%"
                                }));
                                return () => {
                                  DD()
                                }
                              }), [ZD]), (0, bD.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, tD.C)(SD) && {
                                    "--scale": SD
                                  },
                                  ...!(0, tD.C)(BD) && {
                                    "--rotation": `${BD}deg`
                                  }
                                },
                                children: [wD && (0, bD.jsx)(iD.c, {
                                  text: [{
                                    icon: wD
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, bD.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, bD.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${yD}%`,
                                      width: `${MD}%`
                                    }
                                  }), (0, bD.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: cD
                                  })]
                                }), (0, bD.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, bD.jsx)(iD.c, {
                                    text: pD
                                  })
                                })]
                              })
                            })),
                            oD = (0, ID.memo)((function(DD) {
                              let {
                                initialParameters: CD
                              } = DD;
                              const cD = (0, ID.useRef)(null),
                                [pD, QD] = (0, ID.useState)((() => new Array(CD.FD).fill("pending"))),
                                [wD, SD] = (0, ID.useState)((() => {
                                  const DD = CD.cC;
                                  return (0, tD.C)(DD) || DD <= 0 ? [] : new Array(DD).fill("pending")
                                })),
                                BD = CD.label,
                                {
                                  icon: yD
                                } = CD,
                                MD = (0, ID.useRef)(0),
                                ZD = (0, ID.useRef)(0),
                                oD = (0, ID.useRef)([]),
                                vD = (0, fD.e)();
                              return (0, ID.useEffect)((() => {
                                const DD = vD.onFrame((() => {
                                  const DD = vD.getState();
                                  if (!DD.isActive || !cD.current) return;
                                  const CD = DD.state,
                                    ID = 30 + 60 * CD.outerCircleProgress;
                                  if (cD.current.setAttribute("r", String(ID)), !0 === CD.lastClickResult && CD.successes > MD.current) {
                                    cD.current.classList.remove("QTERhythmClickOuterCircle--miss"), cD.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const DD = setTimeout((() => {
                                      var DD;
                                      null === (DD = cD.current) || void 0 === DD || DD.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    oD.current.push(DD)
                                  } else if (!1 === CD.lastClickResult && CD.misses > ZD.current) {
                                    cD.current.classList.remove("QTERhythmClickOuterCircle--hit"), cD.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const DD = setTimeout((() => {
                                      var DD;
                                      null === (DD = cD.current) || void 0 === DD || DD.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    oD.current.push(DD)
                                  }
                                  CD.successes === MD.current && CD.misses === ZD.current || (MD.current = CD.successes, ZD.current = CD.misses, QD((DD => {
                                    const cD = [...DD];
                                    for (let ID = 0; ID < CD.FD; ID++) cD[ID] = ID < CD.successes ? "success" : "pending";
                                    return cD
                                  })), SD((DD => {
                                    if (0 === DD.length) return DD;
                                    const cD = [...DD];
                                    for (let ID = 0; ID < cD.length; ID++) cD[ID] = ID < CD.misses ? "miss" : "pending";
                                    return cD
                                  })))
                                }));
                                return () => {
                                  DD();
                                  for (const DD of oD.current) clearTimeout(DD);
                                  oD.current = []
                                }
                              }), [vD]), (0, bD.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, bD.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: pD.map(((DD, CD) => (0, bD.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === DD ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, CD)))
                                }), (0, bD.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, bD.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, bD.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, bD.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: cD
                                    })]
                                  }), yD && (0, bD.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, bD.jsx)(iD.c, {
                                      text: [{
                                        icon: yD
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), wD.length > 0 && (0, bD.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: wD.map(((DD, CD) => (0, bD.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === DD ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, CD)))
                                }), (0, bD.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, bD.jsx)(iD.c, {
                                    text: BD
                                  })
                                })]
                              })
                            }));

                          function vD(DD) {
                            let {
                              qte: CD
                            } = DD;
                            switch (CD.type) {
                              case "progressBar":
                                return (0, bD.jsx)(QD, {
                                  initialParameters: CD.parameters
                                });
                              case "timedClick":
                                return (0, bD.jsx)(yD, {
                                  initialParameters: CD.parameters
                                });
                              case "gravityBar":
                                return (0, bD.jsx)(MD, {
                                  initialParameters: CD.parameters
                                });
                              case "precisionBar":
                                return (0, bD.jsx)(ZD, {
                                  initialParameters: CD.parameters
                                });
                              case "rhythmClick":
                                return (0, bD.jsx)(oD, {
                                  initialParameters: CD.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const ND = (0, ID.memo)((function() {
                            const [DD, CD] = (0, ID.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, pD.f)("qteStateUpdated", (DD => {
                              CD(DD)
                            })), DD.isActive && DD.type ? (0, bD.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, bD.jsx)(vD, {
                                qte: DD
                              })
                            }) : null
                          }))
                        }, 4560: (DD, CD, cD) => {
                          cD.d(CD, {
                            c: () => bD,
                            e: () => QD
                          });
                          var ID = cD(53),
                            pD = cD(1294),
                            iD = cD(4562);
                          const fD = {
                              getState: () => iD.e.getCurrentState(),
                              onFrame: pD.n
                            },
                            bD = (0, ID.createContext)(fD);

                          function QD() {
                            return (0, ID.useContext)(bD)
                          }
                        }, 4608: (DD, CD, cD) => {
                          cD.d(CD, {
                            d: () => zD,
                            e: () => VD
                          });
                          var ID = cD(4615),
                            pD = cD(312);
                          const iD = 120,
                            fD = 260,
                            bD = 1.15,
                            QD = 1.2,
                            wD = 2,
                            SD = 1.08,
                            BD = .8,
                            yD = .95,
                            MD = 8,
                            tD = "[\"')\\]\u300d\u300f\uff09]*",
                            ZD = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${tD}$`),
                            oD = new RegExp(`[?\uff1f]${tD}$`),
                            vD = new RegExp(`[!\uff01]${tD}$`),
                            ND = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            gD = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            XD = new RegExp(`[${gD}]`),
                            mD = new RegExp(`[${gD}]|[^${gD}]+`, "g"),
                            nD = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function OD(DD) {
                            let CD = 2166136261;
                            for (let cD = 0; cD < DD.length; cD++) CD ^= DD.charCodeAt(cD), CD = Math.imul(CD, 16777619);
                            return (CD >>> 0) / 4294967295 * 2 - 1
                          }

                          function PD(DD) {
                            var CD;
                            if (XD.test(DD)) return 1;
                            const cD = DD.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              ID = cD.replace(/[^0-9]/g, "");
                            if (ID.length > 0 && !/\p{L}/u.test(cD)) return Math.min(ID.length, 4);
                            const pD = null !== (CD = cD.match(nD)) && void 0 !== CD ? CD : [];
                            if (0 === pD.length) {
                              var iD, fD;
                              const DD = null !== (iD = null === (fD = cD.match(/\p{L}/gu)) || void 0 === fD ? void 0 : fD.length) && void 0 !== iD ? iD : 0;
                              return 0 === DD ? 0 : Math.min(Math.max(1, Math.round(DD / 2.5)), MD)
                            }
                            const bD = cD.replace(/[^\p{L}]/gu, ""),
                              QD = pD.length > 1 && "e" === pD.at(-1) && bD.endsWith("e") && !bD.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(DD.replace(/[^\p{L}]/gu, ""));
                            return Math.min(pD.length - (QD ? 1 : 0), MD)
                          }

                          function HD(DD) {
                            return DD.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function UD(DD) {
                            const CD = DD.replace(/[^\p{L}]/gu, "");
                            return CD.length >= 2 && CD === CD.toUpperCase() && CD !== CD.toLowerCase()
                          }

                          function xD(DD, CD) {
                            var cD;
                            const MD = CD && (0, ID.l)(CD),
                              tD = null !== (cD = null === MD || void 0 === MD ? void 0 : MD.syllableMs) && void 0 !== cD ? cD : ID.d,
                              gD = function(DD) {
                                const CD = [];
                                for (const ID of (0, pD.bc)(DD))
                                  if ("string" === typeof ID)
                                    for (const DD of ID.split(/(\s+)/)) {
                                      if ("" === DD) continue;
                                      if (/^\s+$/.test(DD)) {
                                        CD.push({
                                          kind: "space",
                                          text: DD
                                        });
                                        continue
                                      }
                                      if (!XD.test(DD)) {
                                        CD.push({
                                          kind: "word",
                                          text: DD,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let ID = !0;
                                      for (const pD of null !== (cD = DD.match(mD)) && void 0 !== cD ? cD : []) {
                                        var cD;
                                        const DD = CD.at(-1);
                                        ID || "word" !== (null === DD || void 0 === DD ? void 0 : DD.kind) || XD.test(pD) || /[\p{L}\p{N}]/u.test(pD) ? (ID || CD.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), CD.push({
                                          kind: "word",
                                          text: pD,
                                          delayMs: 0
                                        }), ID = !1) : DD.text += pD
                                      }
                                    } else CD.push({
                                      kind: "icon",
                                      text: ID.icon,
                                      delayMs: 0
                                    });
                                return CD
                              }(DD),
                              nD = [];
                            let xD = [];
                            for (const ID of gD) "space" !== ID.kind && (xD.push(ID), ZD.test(ID.text) && (nD.push(xD), xD = []));
                            nD.push(xD);
                            const qD = [];
                            let JD = 0;
                            for (const ID of nD) {
                              var KD, aD;
                              const DD = null !== (KD = null === (aD = ID.at(-1)) || void 0 === aD ? void 0 : aD.text) && void 0 !== KD ? KD : "",
                                CD = oD.test(DD),
                                cD = vD.test(DD),
                                pD = ID.map((DD => "word" === DD.kind ? PD(DD.text) : 1)),
                                gD = pD.findLastIndex((DD => DD > 0));
                              for (const [oD, vD] of ID.entries()) {
                                const DD = "word" === vD.kind,
                                  ID = pD[oD];
                                vD.delayMs = JD;
                                for (let pD = 0; MD && pD < ID; pD++) {
                                  const {
                                    intonation: iD
                                  } = MD;
                                  let fD = gD > 0 ? -iD.declineSemitones * (oD / gD) : 0;
                                  fD += OD(`${HD(vD.text)}|${pD}`) * iD.variationSemitones;
                                  const ZD = Math.min(1, iD.variationSemitones);
                                  let ND = MD.glideSemitones,
                                    XD = 1;
                                  cD && (fD += iD.exclaimLiftSemitones, XD *= bD), CD && oD === gD && (fD += iD.questionRiseSemitones * (ID > 1 ? .5 + .5 * pD / (ID - 1) : 1), pD === ID - 1 && (ND = Math.abs(ND) + iD.questionRiseSemitones / 2)), DD && UD(vD.text) && (fD += wD * ZD, XD *= QD), ID > 1 && 0 === pD && (fD += BD * ZD, XD *= SD), qD.push({
                                    atMs: JD + pD * tD,
                                    semitones: fD,
                                    glideSemitones: ND,
                                    durationMs: pD < ID - 1 ? Math.min(MD.durationMs, tD * yD) : MD.durationMs,
                                    level: XD
                                  })
                                }
                                JD += ID * tD + (ZD.test(vD.text) ? fD : ND.test(vD.text) ? iD : 0)
                              }
                            }
                            return {
                              pieces: gD.map((DD => "space" === DD.kind ? DD : "icon" === DD.kind ? {
                                kind: "icon",
                                icon: DD.text,
                                delayMs: DD.delayMs
                              } : {
                                kind: "word",
                                text: DD.text,
                                delayMs: DD.delayMs
                              })),
                              blips: qD
                            }
                          }
                          var qD = cD(1192),
                            JD = cD(1250),
                            KD = cD(1913);

                          function aD(DD) {
                            if ("string" === typeof DD) return DD;
                            const CD = JD.e.get().getCurrentLanguageCode();
                            return (0, qD.s)(CD, DD.translationKey, (0, qD.o)(DD.params, KD.c.shown))
                          }

                          function VD(DD) {
                            const CD = void 0 === DD.voice ? null : (0, ID.p)(DD.voice),
                              cD = CD && (0, ID.l)(CD);
                            return {
                              plan: xD(aD(DD.line), cD),
                              synth: cD
                            }
                          }

                          function zD(DD) {
                            const CD = [];
                            let cD = [];
                            for (const [pD, iD] of DD.entries()) {
                              var ID;
                              "space" === iD.kind && (" " !== iD.text || "icon" !== (null === (ID = DD[pD + 1]) || void 0 === ID ? void 0 : ID.kind)) ? (cD.length > 0 && CD.push(cD), CD.push([iD]), cD = []) : cD.push(iD)
                            }
                            return cD.length > 0 && CD.push(cD), CD
                          }
                        }, 4618: (DD, CD, cD) => {
                          cD.d(CD, {
                            d: () => SD,
                            g: () => BD
                          });
                          var ID = cD(4621),
                            pD = cD(16);
                          const iD = .25,
                            fD = .85,
                            bD = .02,
                            QD = .01;

                          function wD(DD, CD, cD, ID, pD, iD, bD) {
                            const {
                              waveform: QD,
                              pitchHz: wD,
                              attackMs: SD,
                              releaseMs: BD,
                              lowpassHz: yD
                            } = cD, MD = pD + ID.durationMs / 1e3, tD = wD * 2 ** (ID.semitones / 12), ZD = DD.createOscillator();
                            ZD.type = QD, ZD.frequency.setValueAtTime(tD, pD), ZD.frequency.exponentialRampToValueAtTime(tD * 2 ** (ID.glideSemitones / 12), MD);
                            const oD = pD + Math.min(SD, ID.durationMs) / 1e3,
                              vD = DD.createGain();
                            vD.gain.setValueAtTime(0, pD), vD.gain.linearRampToValueAtTime(iD, oD), vD.gain.linearRampToValueAtTime(iD * fD, Math.max(oD, MD - BD / 1e3)), vD.gain.linearRampToValueAtTime(0, MD);
                            const ND = [ZD];
                            if (null !== yD) {
                              const CD = DD.createBiquadFilter();
                              CD.type = "lowpass", CD.frequency.value = yD, ND.push(CD)
                            }
                            ND.push(vD, CD);
                            for (let fD = 1; fD < ND.length; fD++) ND[fD - 1].connect(ND[fD]);
                            return ZD.onended = () => {
                              for (const DD of ND.slice(0, -1)) DD.disconnect();
                              bD()
                            }, ZD.start(pD), ZD.stop(MD), ZD
                          }

                          function SD(DD, CD, cD, ID, pD, fD) {
                            if (0 === ID.length) return fD(), () => {};
                            const SD = iD * cD.volume * pD,
                              BD = DD.createGain();
                            BD.connect(CD);
                            const yD = DD.currentTime + bD,
                              MD = new Set;
                            for (const iD of ID) {
                              const CD = wD(DD, BD, cD, iD, yD + iD.atMs / 1e3, SD * iD.level, (() => {
                                MD.delete(CD), 0 === MD.size && (BD.disconnect(), fD())
                              }));
                              MD.add(CD)
                            }
                            return () => {
                              const CD = DD.currentTime;
                              BD.gain.setTargetAtTime(0, CD, QD);
                              for (const DD of MD) try {
                                DD.stop(CD + 5 * QD)
                              } catch {}
                            }
                          }

                          function BD(DD, CD) {
                            var cD;
                            const iD = ID.Howler.ctx,
                              fD = ID.Howler.masterGain;
                            if (!iD || !fD || !pD.d.get("soundOnFromAd")) return () => {};
                            const bD = ID.Howler;
                            return null === (cD = bD._autoResume) || void 0 === cD || cD.call(bD), SD(iD, fD, DD, CD, pD.d.get("soundVolume"), (() => {
                              var DD;
                              null === (DD = bD._autoSuspend) || void 0 === DD || DD.call(bD)
                            }))
                          }
                        }, 4621: (DD, CD, cD) => {
                          cD.r(CD), cD.d(CD, {
                            Howl: () => pD.Howl,
                            Howler: () => pD.Howler,
                            iosAudio: () => QD,
                            musicOutput: () => oD,
                            readyAudioContext: () => vD
                          });
                          var ID, pD = cD(4626),
                            iD = cD(90);
                          const fD = pD.Howler;
                          let bD;

                          function QD() {
                            return bD ??= "ios" === (0, iD.getOperatingSystem)(), bD
                          }

                          function wD() {
                            var DD, CD;
                            if (fD.ctx || !fD.usingWebAudio || "undefined" === typeof AudioContext || !QD()) return;
                            const cD = navigator.audioSession;
                            let ID;
                            "auto" === (null === cD || void 0 === cD ? void 0 : cD.type) && (cD.type = "ambient");
                            try {
                              ID = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const pD = ID.createGain();
                            pD.gain.setValueAtTime(fD._muted ? 0 : null !== (DD = fD._volume) && void 0 !== DD ? DD : 1, ID.currentTime), pD.connect(ID.destination), fD.ctx = ID, fD.masterGain = pD, null === (CD = fD._setup) || void 0 === CD || CD.call(fD)
                          }
                          fD._mobileUnloaded = !0;
                          const SD = fD.volume.bind(pD.Howler);
                          fD.volume = function() {
                            return wD(), SD(...arguments)
                          };
                          const BD = fD.mute.bind(pD.Howler);
                          fD.mute = DD => (wD(), BD(DD));
                          const yD = pD.Howl.prototype,
                            MD = yD.init;
                          yD.init = function(DD) {
                            return wD(), MD.call(this, DD)
                          };
                          let tD = 0;
                          const ZD = null === (ID = fD._autoSuspend) || void 0 === ID ? void 0 : ID.bind(pD.Howler);

                          function oD() {
                            vD();
                            const {
                              ctx: DD,
                              masterGain: CD
                            } = fD;
                            return DD && CD ? {
                              ctx: DD,
                              destination: CD,
                              holdAwake: DD => {
                                var CD, cD;
                                (tD += DD ? 1 : -1, DD) ? null === (CD = fD._autoResume) || void 0 === CD || CD.call(fD): null === (cD = fD._autoSuspend) || void 0 === cD || cD.call(fD)
                              },
                              wake: () => {
                                var CD;
                                "running" !== DD.state && (null === (CD = fD._autoResume) || void 0 === CD || CD.call(fD), DD.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function vD() {
                            var DD;
                            (fD.volume(), fD.ctx && fD.autoUnlock) && (null === (DD = fD._unlockAudio) || void 0 === DD || DD.call(fD))
                          }
                          ZD && (fD._autoSuspend = () => tD > 0 ? pD.Howler : ZD())
                        }, 4630: (DD, CD, cD) => {
                          function ID(DD) {
                            return {
                              notAfter: DD
                            }
                          }
                          cD.d(CD, {
                            C: () => SD,
                            F: () => BD,
                            e: () => QD,
                            f: () => wD,
                            j: () => bD,
                            n: () => ID,
                            q: () => pD,
                            u: () => iD,
                            y: () => fD
                          });
                          const pD = ID("\\w$."),
                            iD = ID("\\w.,");

                          function fD(DD) {
                            return CD => QD(CD, DD)
                          }

                          function bD(DD) {
                            return CD => !DD.test(CD.input.slice(0, CD.index))
                          }

                          function QD(DD, CD) {
                            return DD.index > 0 && new RegExp(`[${CD}]`).test(DD.input[DD.index - 1])
                          }

                          function wD(DD, CD, cD) {
                            return function(DD) {
                              return void 0 !== DD && "function" !== typeof DD
                            }(cD) ? function(DD, CD, cD) {
                              const ID = CD.flags.replace(/[gy]/g, ""),
                                pD = new RegExp(`[^${cD}](?:${CD.source})`, `${ID}g`),
                                iD = [],
                                fD = cD => {
                                  const ID = cD.index + cD[0].length;
                                  return ("" === cD[0] ? yD(DD, CD, ID) : ID) - 1
                                },
                                bD = new RegExp(`(?:${CD.source})`, `${ID}y`).exec(DD);
                              if (bD) {
                                if (iD.push(bD), !CD.global) return iD;
                                pD.lastIndex = fD(bD)
                              }
                              for (let QD = pD.exec(DD); QD; QD = pD.exec(DD)) {
                                const cD = yD(DD, CD, QD.index) - QD.index;
                                if (QD[0] = QD[0].slice(cD), QD.index += cD, iD.push(QD), !CD.global) break;
                                pD.lastIndex = fD(QD)
                              }
                              return iD
                            }(DD, CD, cD.notAfter) : function(DD, CD, cD) {
                              const ID = new RegExp(CD.source, `${CD.flags.replace(/[gy]/g,"")}g`),
                                pD = [];
                              for (let iD = ID.exec(DD); iD; iD = ID.exec(DD))
                                if (!cD || cD(iD)) {
                                  if (pD.push(iD), !CD.global) break;
                                  "" === iD[0] && (ID.lastIndex = yD(DD, CD, ID.lastIndex))
                                } else ID.lastIndex = yD(DD, CD, iD.index);
                              return pD
                            }(DD, CD, cD)
                          }

                          function SD(DD, CD, cD, ID) {
                            let pD = "",
                              iD = 0;
                            for (const fD of wD(DD, CD, cD)) pD += DD.slice(iD, fD.index) + ID(fD), iD = fD.index + fD[0].length;
                            return pD + DD.slice(iD)
                          }

                          function BD(DD, CD, cD) {
                            const ID = [];
                            let pD = 0;
                            for (const iD of wD(DD, CD, cD)) ID.push(DD.slice(pD, iD.index)), pD = iD.index + iD[0].length;
                            return [...ID, DD.slice(pD)]
                          }

                          function yD(DD, CD, cD) {
                            var ID;
                            return cD + (CD.unicode && (null !== (ID = DD.codePointAt(cD)) && void 0 !== ID ? ID : 0) > 65535 ? 2 : 1)
                          }
                        }, 4597: (DD, CD, cD) => {
                          cD.d(CD, {
                            b: () => pD,
                            c: () => QD,
                            g: () => iD,
                            i: () => fD,
                            k: () => bD,
                            l: () => oD,
                            m: () => SD,
                            p: () => BD,
                            q: () => ZD,
                            t: () => MD
                          });
                          var ID = cD(1577);
                          const pD = 24e3,
                            iD = "/docs/llms.txt",
                            fD = `${ID.c}${iD}`,
                            bD = "/llms.txt",
                            QD = "/docs/llms-full.txt";

                          function wD(DD) {
                            return DD || "index"
                          }

                          function SD(DD) {
                            return `/docs/${wD(DD)}.md`
                          }

                          function BD(DD, CD) {
                            return `/docs/${wD(DD)}/${CD+1}.md`
                          }
                          const yD = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function MD(DD) {
                            const CD = yD.exec(DD);
                            return null === CD ? null : {
                              name: CD[1],
                              part: void 0 === CD[2] ? null : Number(CD[2])
                            }
                          }
                          const tD = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function ZD(DD) {
                            const CD = tD.exec(DD);
                            if (null === CD) return null;
                            const [, cD = "", ID] = CD;
                            return void 0 === ID ? SD(cD) : BD(cD, Number(ID) - 1)
                          }

                          function oD(DD) {
                            return `/docsHtml/${wD(DD)}.html`
                          }
                        }, 4615: (DD, CD, cD) => {
                          cD.d(CD, {
                            d: () => pD,
                            h: () => ID,
                            k: () => iD,
                            l: () => QD,
                            p: () => fD
                          });
                          const ID = ["sine", "triangle", "square", "sawtooth"],
                            pD = 55,
                            iD = {
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

                          function fD(DD) {
                            return "string" !== typeof DD ? DD : Object.hasOwn(iD, DD) ? iD[DD] : null
                          }

                          function bD(DD, CD, cD) {
                            return Math.min(cD, Math.max(CD, DD))
                          }

                          function QD(DD) {
                            const CD = bD(DD.durationMs, 10, 500),
                              cD = bD(DD.attackMs, 0, CD),
                              {
                                intonation: pD
                              } = DD;
                            return {
                              waveform: ID.includes(DD.waveform) ? DD.waveform : "sine",
                              pitchHz: bD(DD.pitchHz, 20, 4e3),
                              glideSemitones: bD(DD.glideSemitones, -24, 24),
                              durationMs: CD,
                              attackMs: cD,
                              releaseMs: bD(DD.releaseMs, 0, CD - cD),
                              lowpassHz: null === DD.lowpassHz ? null : bD(DD.lowpassHz, 20, 2e4),
                              volume: bD(DD.volume, 0, 2),
                              intonation: {
                                variationSemitones: bD(pD.variationSemitones, 0, 6),
                                declineSemitones: bD(pD.declineSemitones, 0, 12),
                                questionRiseSemitones: bD(pD.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: bD(pD.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: bD(DD.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const DD in modules) Object.freeze(modules[DD]);