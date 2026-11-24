export const id = 78;
export const ids = [78, 93];
export const modules = {
    4849: (DD, zD, wD) => {
      wD.d(zD, {
        e: () => GD,
        i: () => hD
      });
      var pD = wD(1044),
        sD = wD.n(pD),
        KD = wD(58),
        rD = wD(1200),
        LD = wD(4852),
        cD = wD(1895),
        gD = wD(2402),
        RD = wD(4859),
        AD = wD(1096);
      const UD = new WeakMap;
      let fD = 0;

      function ID(DD) {
        let zD = UD.get(DD);
        return void 0 === zD && (zD = fD++, UD.set(DD, zD)), zD
      }

      function BD(DD) {
        let {
          piece: zD
        } = DD;
        return "space" === zD.kind ? (0, AD.jsx)(AD.Fragment, {
          children: zD.text
        }) : (0, AD.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${zD.delayMs}ms`
          },
          children: (0, AD.jsx)(LD.d, {
            text: "icon" === zD.kind ? `[[${zD.icon}]]` : zD.text
          })
        })
      }

      function GD(DD) {
        let {
          display: zD
        } = DD;
        const {
          selectedLanguage: wD
        } = (0, rD.E)(), pD = (0, KD.useMemo)((() => (0, RD.d)((0, RD.g)(zD).plan.pieces)), [zD, wD.code]);
        return (0, AD.jsxs)("div", {
          className: sD()("Dialogue", {
            DialogueAnimateIn: !1 !== zD.animateIn
          }),
          children: [zD.speakerName && (0, AD.jsx)(cD.e, {
            text: zD.speakerName,
            className: "DialogueSpeaker"
          }), (0, AD.jsx)("p", {
            className: "DialogueLine",
            children: pD.map(((DD, zD) => 1 === DD.length && "space" === DD[0].kind ? DD[0].text : (0, AD.jsx)("span", {
              className: "DialogueGlue",
              children: DD.map(((DD, zD) => (0, AD.jsx)(BD, {
                piece: DD
              }, zD)))
            }, zD)))
          })]
        })
      }
      const hD = (0, KD.memo)((function() {
        const DD = (0, gD.h)("dialogue");
        return (0, AD.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: DD && (0, AD.jsx)(GD, {
            display: DD
          }, ID(DD))
        })
      }))
    },
    4742: (DD, zD, wD) => {
        wD.r(zD), wD.d(zD, {
          default: () => wr
        });
        var pD = wD(58),
          sD = wD(1044),
          KD = wD.n(sD),
          rD = wD(1516),
          LD = wD(1523),
          cD = wD(20),
          gD = wD(79),
          RD = wD(4744),
          AD = wD(4757),
          UD = wD(4763),
          fD = wD(4386),
          ID = wD(1096);
        const BD = "/textures/docs/icons";

        function GD(DD) {
          let {
            name: zD,
            isTinted: wD,
            className: pD,
            style: sD
          } = DD;
          const rD = `${BD}/${zD}.png`;
          return wD ? (0, ID.jsxs)("span", {
            className: KD()("DocsPixelIcon", "Tinted", pD),
            "aria-hidden": "true",
            style: sD,
            children: [(0, ID.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${rD}")`,
                WebkitMaskImage: `url("${rD}")`
              }
            }), (0, ID.jsx)("img", {
              src: rD,
              alt: ""
            })]
          }) : (0, ID.jsx)("img", {
            className: KD()("DocsPixelIcon", pD),
            src: rD,
            alt: "",
            "aria-hidden": "true",
            style: sD
          })
        }
        const hD = 1500;

        function nD() {
          const [DD, zD] = (0, pD.useState)(null);
          (0, pD.useEffect)((() => {
            if (null === DD) return;
            const wD = setTimeout((() => {
              zD(null)
            }), hD);
            return () => {
              clearTimeout(wD)
            }
          }), [DD]);
          return [DD, DD => {
            (0, fD.e)(DD).then((() => {
              zD({
                text: DD,
                failed: !1
              })
            }), (wD => {
              console.error("Could not copy to the clipboard", wD), zD({
                text: DD,
                failed: !0
              })
            }))
          }]
        }

        function MD(DD) {
          let {
            text: zD,
            label: wD,
            className: pD
          } = DD;
          const [sD, rD] = nD(), LD = !1 === (null === sD || void 0 === sD ? void 0 : sD.failed);
          return (0, ID.jsxs)("button", {
            type: "button",
            className: KD()("DocsCopyButton", pD, {
              Copied: LD
            }),
            title: `Copy ${zD.length>40?"to clipboard":zD}`,
            "aria-label": wD ? void 0 : `Copy ${zD}`,
            onClick: DD => {
              DD.stopPropagation(), rD(zD)
            },
            children: [(0, ID.jsx)(GD, {
              name: LD ? "check" : "copy"
            }), wD && (0, ID.jsx)("span", {
              children: LD ? "Copied" : null !== sD && void 0 !== sD && sD.failed ? "Copy failed" : wD
            })]
          })
        }
        RD.d.registerLanguage("javascript", AD.d), RD.d.registerLanguage("typescript", UD.e);
        const OD = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          JD = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          ED = 24;

        function QD(DD) {
          let {
            code: zD,
            lang: wD,
            compact: sD = !1
          } = DD;
          const rD = (0, pD.useMemo)((() => function(DD, zD) {
              const wD = OD[zD];
              return wD ? RD.d.highlight(DD, {
                language: wD
              }).value : DD.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(zD, wD)), [zD, wD]),
            LD = zD.split("\n").length,
            cD = !sD && LD > ED + 6,
            [gD, AD] = (0, pD.useState)(!1),
            UD = OD[wD];
          return (0, ID.jsxs)("div", {
            className: KD()("DocsCodeBlock", {
              Compact: sD,
              Collapsed: cD && !gD
            }),
            children: [!sD && (0, ID.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, ID.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: UD ? JD[UD] : "Text"
              }), (0, ID.jsx)(MD, {
                text: zD,
                label: "Copy"
              })]
            }), (0, ID.jsx)("pre", {
              children: (0, ID.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: rD
                }
              })
            }), cD && (0, ID.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": gD,
              onClick: () => {
                AD(!gD)
              },
              children: [(0, ID.jsx)(GD, {
                name: gD ? "chevron-up" : "chevron-down"
              }), gD ? "Show less" : `Show all ${LD} lines`]
            })]
          })
        }
        var XD = wD(4768);
        var VD = wD(4770);
        const PD = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function CD(DD) {
          const zD = new Map;
          let wD, pD = [],
            sD = !1;
          const KD = () => {
            wD && zD.set(wD.name, wD.lines.join("\n").trimEnd())
          };
          for (const rD of DD.split("\n")) {
            const DD = rD.match(PD);
            sD || rD.startsWith("/*") ? (sD || (KD(), wD = void 0), pD.push(rD), sD = !rD.includes("*/")) : DD ? (KD(), wD = {
              name: DD[1],
              lines: [...pD, rD]
            }, pD = []) : wD && (rD.startsWith(" ") || rD.startsWith("\t") || /^[}\])|]/.test(rD)) ? wD.lines.push(rD) : wD && "" !== rD.trim() && (KD(), wD = void 0)
          }
          return KD(), zD
        }

        function xD(DD) {
          return "methods" === DD || "callbacks" === DD || "settings" === DD
        }
        const TD = {
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
              setterSnippet: (DD, zD) => `api.setClientOption(playerId, "${DD}", ${zD})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (DD, zD) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${DD}", ${zD})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (DD, zD) => `api.setMobSetting(mobId, "${DD}", ${zD})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (DD, zD) => `api.setVehicleSetting(vehicleId, "${DD}", ${zD})`
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
          bD = {
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

        function jD(DD) {
          return DD.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function dD(DD) {
          let zD = !1;
          return DD.split("\n").map((DD => (DD.startsWith("```") && (zD = !zD), !zD && /^#{3,} /.test(DD) ? DD.slice(1) : DD))).join("\n")
        }

        function SD(DD) {
          return "readme" === DD ? "getting-started" : jD(DD)
        }
        const iD = "## Glossary of Referenced Types";
        const lD = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...VD.c.flatMap((DD => {
            const zD = {
              id: DD.id,
              slug: SD(DD.id),
              title: DD.title,
              markdown: DD.content,
              ...TD[DD.id]
            };
            if ("readme" === DD.id) return function(DD) {
              const zD = DD.markdown.indexOf(iD),
                wD = DD.markdown.indexOf("\n```", zD),
                pD = DD.markdown.indexOf("\n```", wD + 1);
              if (-1 === zD || -1 === wD || -1 === pD) throw new Error(`Getting started has no "${iD}" section with a code block`);
              const sD = DD.markdown.slice(zD + 31, wD).trim(),
                KD = [...CD(DD.markdown.slice(DD.markdown.indexOf("\n", wD + 1) + 1, pD))].map((DD => {
                  let [zD, wD] = DD;
                  return `## ${zD}\n\n\`\`\`ts\n${wD}\n\`\`\`\n`
                })),
                rD = DD.markdown.slice(DD.markdown.indexOf("\n", pD + 1) + 1);
              return [{
                ...DD,
                markdown: `${DD.markdown.slice(0,zD)}${rD}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${sD}\n\n${KD.join("\n")}`
              }]
            }(zD);
            if ("howTo" === DD.id) {
              const {
                parent: DD,
                guides: wD
              } = function(DD) {
                const [zD, ...wD] = DD.markdown.split(/^(?=## )/m), pD = [zD], sD = [];
                for (const rD of wD) {
                  var KD;
                  const zD = rD.indexOf("\n"),
                    wD = rD.slice(3, zD).trim(),
                    LD = rD.slice(zD + 1);
                  if (!LD.includes("```")) {
                    pD.push(rD);
                    continue
                  }
                  const cD = null !== (KD = bD[wD]) && void 0 !== KD ? KD : {
                    icon: "lightbulb",
                    summary: `How to use ${wD.toLowerCase()} in World Code.`
                  };
                  sD.push({
                    id: `${DD.id}${wD.split(/[^A-Za-z0-9]+/).map((DD=>DD.charAt(0).toUpperCase()+DD.slice(1))).join("")}`,
                    slug: `${DD.slug}-${jD(wD)}`,
                    title: wD,
                    layout: "article",
                    sourceAnchor: (0, XD.v)(wD),
                    markdown: `# ${wD}\n\n${dD(LD)}`,
                    ...cD
                  })
                }
                return {
                  parent: {
                    ...DD,
                    markdown: pD.join(""),
                    childPageIds: sD.map((DD => DD.id))
                  },
                  guides: sD
                }
              }(zD);
              return [DD, ...wD]
            }
            return [zD]
          }))],
          WD = [{
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

        function ND(DD) {
          return lD.find((zD => zD.id === DD))
        }
        const ZD = new Map;

        function yD(DD) {
          let zD = ZD.get(DD.id);
          return zD || (zD = (0, XD.A)(DD.markdown, "changelog" === DD.layout ? 3 : 2), ZD.set(DD.id, zD)), zD
        }

        function kD(DD, zD) {
          return yD(DD).sections.some((DD => DD.heading.anchor === zD || DD.blocks.some((DD => "heading" === DD.kind && DD.anchor === zD))))
        }

        function mD(DD) {
          const [zD, ...wD] = DD.replace(/^#/, "").split("-"), pD = lD.find((DD => DD.id === zD));
          if (!pD) return null;
          const sD = wD.length > 0 ? (0, XD.v)(wD.join("-")) : "";
          for (const rD of null !== (KD = pD.childPageIds) && void 0 !== KD ? KD : []) {
            var KD;
            const DD = ND(rD);
            if (DD.sourceAnchor === sD) return {
              page: DD,
              anchor: ""
            };
            if (kD(DD, sD)) return {
              page: DD,
              anchor: sD
            }
          }
          return {
            page: pD,
            anchor: sD
          }
        }
        const eD = {
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

        function oD(DD, zD) {
          let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const pD = zD.slug ? `${DD}/${zD.slug}` : DD;
          return wD ? `${pD}#${wD}` : pD
        }
        var aD = wD(4782);
        const uD = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          vD = new Set(["GameApi", "Console", "_TypeOf"]),
          tD = 4;

        function FD(DD) {
          let zD = DD.length;
          for (; zD > 0 && "" === DD[zD - 1].trim();) zD--;
          return DD.slice(0, zD)
        }

        function YD(DD) {
          var zD;
          const wD = FD(DD);
          if (null === (zD = wD.at(-1)) || void 0 === zD || !zD.trimEnd().endsWith("*/")) return {
            lines: wD,
            doc: ""
          };
          const pD = wD.findLastIndex((DD => DD.startsWith("/**")));
          return -1 === pD ? {
            lines: wD,
            doc: ""
          } : {
            lines: FD(wD.slice(0, pD)),
            doc: wD.slice(pD).join("\n")
          }
        }

        function HD(DD) {
          var zD;
          const wD = DD.split("\n"),
            pD = wD.flatMap(((DD, zD) => uD.test(DD) ? [zD] : []));
          let sD = YD(wD.slice(0, null !== (zD = pD[0]) && void 0 !== zD ? zD : wD.length)).doc;
          return pD.map(((DD, zD) => {
            var KD;
            const rD = YD(wD.slice(DD, null !== (KD = pD[zD + 1]) && void 0 !== KD ? KD : wD.length)),
              LD = {
                name: wD[DD].match(uD)[1],
                doc: sD,
                lines: rD.lines
              };
            return sD = rD.doc, LD
          }))
        }

        function qD(DD) {
          var zD;
          const wD = DD.match(/^readonly \[([\s\S]*)\]$/);
          return wD ? null !== (zD = wD[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== zD ? zD : [] : null
        }

        function Dz(DD) {
          if (!DD.startsWith("{") || !DD.endsWith("}")) return null;
          const zD = {
              keys: [],
              values: []
            },
            wD = DD => {
              const wD = DD.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              wD && (zD.keys.push(wD[1].startsWith('"') ? wD[1] : `"${wD[1]}"`), zD.values.push(wD[2].trim()))
            };
          let pD = 0,
            sD = "";
          for (const KD of DD.slice(1, -1)) "{[(".includes(KD) ? pD++ : "}])".includes(KD) && pD--, ";" === KD && 0 === pD ? (wD(sD), sD = "") : sD += KD;
          return wD(sD), zD
        }

        function zz(DD) {
          return DD.length > tD ? `\n\t| ${DD.join("\n\t| ")}` : DD.join(" | ")
        }

        function wz(DD, zD) {
          const wD = function(DD, zD) {
            return DD.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((DD, wD) => {
              var pD;
              const sD = null === (pD = zD.get(wD)) || void 0 === pD ? void 0 : pD.object;
              return sD ? zz(sD.values) : DD
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((DD, wD) => {
              var pD, sD;
              const KD = null === (pD = zD.get(wD)) || void 0 === pD || null === (sD = pD.object) || void 0 === sD ? void 0 : sD.values.map(qD);
              return null !== KD && void 0 !== KD && KD.every((DD => null !== DD)) ? zz([...new Set(KD.flat())]) : DD
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((DD, wD) => {
              var pD;
              const sD = null === (pD = zD.get(wD)) || void 0 === pD ? void 0 : pD.members;
              return sD ? zz(sD) : DD
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((DD, wD) => {
              var pD;
              const sD = null === (pD = zD.get(wD)) || void 0 === pD ? void 0 : pD.object;
              return sD ? zz(sD.keys) : DD
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((DD, wD) => {
              var pD, sD;
              return null !== (pD = null === (sD = zD.get(wD)) || void 0 === sD ? void 0 : sD.text) && void 0 !== pD ? pD : DD
            }))
          }(DD.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), zD);
          return [DD.doc, wD].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function pz(DD) {
          const zD = HD(DD),
            wD = function(DD) {
              const zD = new Map,
                wD = DD.find((DD => "_TypeOf" === DD.name));
              let pD = null;
              const sD = () => {
                if (pD) {
                  const DD = pD.lines.join("\n");
                  zD.set(pD.name, {
                    text: DD,
                    members: qD(DD),
                    object: Dz(DD)
                  })
                }
              };
              for (const KD of wD.lines.slice(1, -1)) {
                const DD = KD.match(/^\t([\w$]+): (.+)$/);
                DD ? (sD(), pD = {
                  name: DD[1],
                  lines: [DD[2]]
                }) : pD && pD.lines.push(KD.replace(/^\t/, ""))
              }
              return sD(), zD
            }(zD),
            pD = new Map;
          for (const sD of zD) vD.has(sD.name) || pD.has(sD.name) || pD.set(sD.name, wz(sD, wD));
          return pD
        }
        let sz, Kz, rz;

        function Lz() {
          return Kz ??= function(DD) {
            const zD = HD(DD).find((DD => "GameApi" === DD.name)),
              wD = new Map,
              pD = zD.lines;
            for (let KD = 0; KD < pD.length; KD++) {
              var sD;
              if (!pD[KD].trimStart().startsWith("/**")) continue;
              const DD = KD;
              for (; KD < pD.length && !pD[KD].includes("*/");) KD++;
              const zD = null === (sD = pD[KD + 1]) || void 0 === sD ? void 0 : sD.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!zD) continue;
              let rD = null;
              const LD = [];
              let cD = "description",
                gD = !1;
              for (const wD of pD.slice(DD, KD + 1).join("\n").split("\n").map((DD => DD.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const DD = wD.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                DD ? (rD = DD[1].trim(), cD = "deprecation") : wD.startsWith("@") ? (cD = "otherTag", gD = !0) : "" === wD.trim() ? gD || (cD = "description", LD.push(wD)) : "deprecation" !== cD || /^[A-Z]/.test(wD.trim()) ? "otherTag" !== cD && (cD = "description", LD.push(wD)) : rD = `${rD} ${wD.trim()}`.trim()
              }
              wD.set(zD[1], {
                deprecation: rD,
                description: LD.join("\n").trim()
              })
            }
            return wD
          }(aD.default), Kz
        }

        function cz() {
          if (!rz) {
            rz = new Map;
            for (const DD of lD) {
              const zD = (0, XD.w)(yD(DD)).flatMap((DD => DD.blocks));
              for (const DD of (0, XD.l)(zD))
                if ("ts" === DD.lang || "typescript" === DD.lang)
                  for (const [zD, wD] of CD(DD.code)) rz.set(zD, wD)
            }
            for (const [DD, zD] of(sz ??= pz(aD.default), sz)) rz.has(DD) || rz.set(DD, zD)
          }
          return rz
        }
        const gz = {
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
        let Rz;

        function Az() {
          if (!Rz) {
            Rz = new Map;
            for (const DD of lD)
              if (xD(DD.layout))
                for (const zD of yD(DD).sections) Rz.has(zD.heading.text) || Rz.set(zD.heading.text, {
                  pageId: DD.id,
                  anchor: zD.heading.anchor
                })
          }
          return Rz
        }

        function Uz(DD) {
          const zD = DD.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return zD ? Az().get(zD[1]) : void 0
        }
        const fz = (0, pD.createContext)("/docs"),
          Iz = (0, pD.createContext)(null),
          Bz = (0, pD.createContext)(!1),
          Gz = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function hz(DD) {
          const zD = DD.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return zD ? zD[1] : null
        }

        function nz(DD) {
          let {
            colour: zD
          } = DD;
          return (0, ID.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: zD
            },
            "aria-hidden": "true"
          })
        }

        function Mz(DD) {
          const zD = [];
          let wD = 0;
          for (const pD of DD.matchAll(Gz)) zD.push(DD.slice(wD, pD.index), (0, ID.jsx)(nz, {
            colour: pD[0]
          }), pD[0]), wD = pD.index + pD[0].length;
          return zD.push(DD.slice(wD)), zD
        }

        function Oz(DD) {
          let {
            href: zD,
            children: wD
          } = DD;
          const sD = (0, pD.useContext)(fz);
          if (zD.startsWith("#")) {
            const DD = mD(zD);
            if (DD) return (0, ID.jsx)(rD.e, {
              to: oD(sD, DD.page, DD.anchor),
              children: (0, ID.jsx)(Bz.Provider, {
                value: !0,
                children: wD
              })
            })
          }
          return (0, ID.jsx)("a", {
            href: zD,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, ID.jsx)(Bz.Provider, {
              value: !0,
              children: wD
            })
          })
        }

        function Jz(DD) {
          let {
            code: zD
          } = DD;
          const wD = (0, pD.useContext)(fz);
          if ((0, pD.useContext)(Bz)) return (0, ID.jsx)("code", {
            className: "DocsInlineCode",
            children: zD
          });
          if (cz().has(zD)) return (0, ID.jsx)(Vz, {
            type: zD
          });
          const sD = Uz(zD);
          if (sD) return (0, ID.jsx)(rD.e, {
            className: "DocsInlineCode DocsSymbolLink",
            to: oD(wD, ND(sD.pageId), sD.anchor),
            children: zD
          });
          const KD = hz(zD);
          return (0, ID.jsxs)("code", {
            className: "DocsInlineCode",
            children: [KD && (0, ID.jsx)(nz, {
              colour: KD
            }), zD]
          })
        }

        function Ez(DD) {
          let {
            text: zD
          } = DD;
          const wD = [];
          let sD = 0;
          for (const pD of zD.matchAll(XD.f)) {
            pD.index > sD && wD.push(...Mz(zD.slice(sD, pD.index)));
            const [, DD, KD, rD, LD, cD] = pD;
            DD ? wD.push((0, ID.jsx)(Jz, {
              code: (0, XD.o)(DD, KD)
            })) : rD ? wD.push((0, ID.jsx)("strong", {
              children: (0, ID.jsx)(Ez, {
                text: rD
              })
            })) : wD.push((0, ID.jsx)(Oz, {
              href: cD,
              children: (0, ID.jsx)(Ez, {
                text: LD
              })
            })), sD = pD.index + pD[0].length
          }
          return sD < zD.length && wD.push(...Mz(zD.slice(sD))), (0, ID.jsx)(ID.Fragment, {
            children: wD.map(((DD, zD) => (0, ID.jsx)(pD.Fragment, {
              children: DD
            }, zD)))
          })
        }
        const Qz = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          Xz = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function Vz(DD) {
          let {
            type: zD
          } = DD;
          const wD = cz(),
            sD = [];
          for (const pD of zD.trim().matchAll(Qz)) {
            const [DD, zD, KD, rD, LD] = pD;
            zD ? sD.push((0, ID.jsx)("span", {
              className: "DocsTypeString",
              children: DD
            })) : KD && wD.has(KD) ? sD.push((0, ID.jsx)(bz, {
              name: KD,
              definition: wD.get(KD)
            })) : KD ? sD.push((0, ID.jsx)("span", {
              className: Xz.has(KD) ? "DocsTypeKeyword" : "DocsTypeName",
              children: DD
            })) : rD ? sD.push((0, ID.jsx)("span", {
              className: "DocsTypeNumber",
              children: DD
            })) : LD ? sD.push(" ") : sD.push((0, ID.jsx)("span", {
              className: "DocsTypePunctuation",
              children: DD
            }))
          }
          return (0, ID.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: sD.map(((DD, zD) => (0, ID.jsx)(pD.Fragment, {
              children: DD
            }, zD)))
          })
        }
        const Pz = 480,
          Cz = 6,
          xz = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Tz = 0;

        function bz(DD) {
          let {
            name: zD,
            definition: wD
          } = DD;
          const sD = (0, pD.useContext)(fz),
            KD = gz[zD],
            LD = (0, pD.useRef)(null),
            cD = (0, pD.useRef)(null),
            RD = (0, pD.useRef)(null),
            [AD, UD] = (0, pD.useState)(!1),
            [fD, BD] = (0, pD.useState)(null),
            hD = (0, pD.useRef)(),
            nD = (0, pD.useContext)(Iz),
            [MD] = (0, pD.useState)((() => "DocsTypePopover-" + Tz++)),
            OD = () => {
              clearTimeout(hD.current), UD(!0)
            },
            JD = () => {
              clearTimeout(hD.current), hD.current = setTimeout((() => {
                UD(!1)
              }), 120)
            };
          return (0, pD.useEffect)((() => {
            if (!AD) return;
            const DD = DD => {
              if ("Escape" === DD.key) {
                var zD, wD;
                if (null !== (zD = cD.current) && void 0 !== zD && zD.contains(document.activeElement)) null === (wD = LD.current) || void 0 === wD || wD.focus();
                UD(!1)
              }
            };
            return document.addEventListener("keydown", DD), () => {
              document.removeEventListener("keydown", DD)
            }
          }), [AD]), (0, pD.useEffect)((() => () => {
            clearTimeout(hD.current)
          }), []), (0, pD.useLayoutEffect)((() => {
            if (!AD || !LD.current || !cD.current) return void BD(null);
            const DD = LD.current.getBoundingClientRect(),
              zD = cD.current.offsetHeight,
              wD = Math.min(Pz, window.innerWidth - 32),
              pD = Math.min(Math.max(16, DD.left), window.innerWidth - wD - 16),
              sD = DD.bottom + Cz + zD < window.innerHeight;
            BD({
              left: pD,
              top: sD ? DD.bottom + Cz : Math.max(16, DD.top - Cz - zD)
            })
          }), [AD]), (0, ID.jsxs)(ID.Fragment, {
            children: [(0, ID.jsx)("button", {
              type: "button",
              ref: LD,
              className: "DocsTypeLink",
              "aria-expanded": AD,
              "aria-describedby": AD ? MD : void 0,
              onMouseEnter: OD,
              onMouseLeave: JD,
              onFocus: OD,
              onBlur: JD,
              onKeyDown: DD => {
                "Tab" === DD.key && !DD.shiftKey && RD.current && (DD.preventDefault(), RD.current.focus())
              },
              onClick: OD,
              children: zD
            }), AD && (0, gD.createPortal)((0, ID.jsxs)("span", {
              ref: cD,
              id: MD,
              className: "DocsTypePopover",
              role: "tooltip",
              style: fD ? {
                left: fD.left,
                top: fD.top,
                maxWidth: Pz
              } : {
                visibility: "hidden"
              },
              onMouseEnter: OD,
              onMouseLeave: JD,
              onFocus: OD,
              onBlur: JD,
              children: [(0, ID.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, ID.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: zD
                }), KD && (0, ID.jsxs)(rD.e, {
                  ref: RD,
                  className: "DocsTypePopoverLink",
                  to: oD(sD, ND(KD)),
                  onClick: () => {
                    UD(!1)
                  },
                  onKeyDown: DD => {
                    if ("Tab" === DD.key) {
                      var zD;
                      if (DD.preventDefault(), DD.shiftKey || !LD.current || ! function(DD, zD) {
                          const wD = [...document.querySelectorAll(xz)],
                            pD = wD.slice(wD.indexOf(DD) + 1).find((DD => DD.getClientRects().length > 0 && !(null !== zD && void 0 !== zD && zD.contains(DD))));
                          return null === pD || void 0 === pD || pD.focus(), void 0 !== pD
                        }(LD.current, cD.current)) null === (zD = LD.current) || void 0 === zD || zD.focus();
                      DD.shiftKey || UD(!1)
                    }
                  },
                  children: [ND(KD).title, (0, ID.jsx)(GD, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, ID.jsx)(QD, {
                lang: "ts",
                code: wD,
                compact: !0
              })]
            }), null !== nD && void 0 !== nD ? nD : document.body)]
          })
        }
        var jz = wD(197),
          dz = wD(4785),
          Sz = wD(4787),
          iz = wD(4791);
        const lz = {
          progressBar: {
            Xw: 30,
            Vw: .075,
            Pw: 5,
            Cw: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            bw: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            dw: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            Sw: !0,
            scale: 3,
            rotation: 15,
            iw: !1
          },
          gravityBar: {
            Xw: 30,
            Ww: .25,
            Nw: 3,
            Zw: .8,
            gravity: 1,
            yw: 1.5,
            kw: 8,
            mw: 4,
            Cw: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            ow: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            uw: 5,
            tw: 1200,
            Fw: .15,
            Yw: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var Wz = wD(338),
          Nz = wD(1987);

        function Zz(DD) {
          return DD.startsWith("fa-")
        }
        const yz = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          kz = {
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

        function mz(DD) {
          return "string" === typeof DD ? "text" : "entityName" in DD || "translationKey" in DD ? "other" : (0, Wz.mb)(DD) ? "progressBar" : (0, Wz.jb)(DD) ? "keyBinding" : "icon" in DD ? "icon" : "str" in DD && "string" === typeof DD.str ? "text" : "other"
        }
        const ez = [{
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
          oz = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...ez],
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
                options: Nz.p
              },
              isRequired: !0
            }, ...ez],
            other: []
          };

        function az(DD) {
          return "string" === typeof DD ? {
            str: DD
          } : DD
        }

        function uz(DD, zD) {
          let wD = az(DD);
          for (const pD of zD) wD = wD && "object" === typeof wD ? wD[pD] : void 0;
          return wD
        }

        function vz(DD, zD, wD) {
          const pD = (DD, sD) => {
            var KD;
            const rD = zD[sD],
              LD = {
                ...DD
              };
            if (sD === zD.length - 1) return void 0 === wD ? delete LD[rD] : LD[rD] = wD, LD;
            const cD = pD(null !== (KD = DD[rD]) && void 0 !== KD ? KD : {}, sD + 1);
            return 0 === Object.keys(cD).length ? delete LD[rD] : LD[rD] = cD, LD
          };
          return function(DD) {
            const zD = Object.keys(DD);
            return "string" === typeof DD.str && 1 === zD.length ? DD.str : DD
          }(pD(az(DD), 0))
        }

        function tz(DD, zD) {
          const wD = mz(DD),
            pD = oz[wD].find((DD => DD.path.join(".") === zD.join("."))),
            sD = null !== pD && void 0 !== pD && pD.isRequired && "other" !== wD ? uz(kz[wD], zD) : void 0;
          return vz(DD, zD, sD)
        }

        function Fz(DD) {
          switch (mz(DD)) {
            case "text":
              return String(uz(DD, ["str"]));
            case "icon":
              return String(uz(DD, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(uz(DD,["progress"])))}%`;
            case "keyBinding":
              return String(uz(DD, ["action"]));
            case "other":
              return JSON.stringify(DD)
          }
        }
        const Yz = /^[A-Za-z_$][\w$]*$/;

        function Hz(DD) {
          if (Array.isArray(DD)) return `[${DD.map(Hz).join(", ")}]`;
          if (DD && "object" === typeof DD) {
            const zD = Object.entries(DD).map((DD => {
              let [zD, wD] = DD;
              return `${Yz.test(zD)?zD:JSON.stringify(zD)}: ${Hz(wD)}`
            }));
            return 0 === zD.length ? "{}" : `{ ${zD.join(", ")} }`
          }
          return JSON.stringify(DD)
        }

        function qz(DD) {
          const zD = DD.map(Hz),
            wD = `[${zD.join(", ")}]`;
          return wD.length <= 60 ? wD : `[\n${zD.map((DD=>`    ${DD},`)).join("\n")}\n]`
        }
        const Dw = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function zw(DD) {
          let zD = "";
          for (let sD = 0; sD < DD.length; sD++) {
            const KD = DD[sD];
            if ("\\" === KD) {
              var wD;
              const pD = null !== (wD = DD[sD + 1]) && void 0 !== wD ? wD : "";
              zD += "'" === pD ? "'" : KD + pD, sD++
            } else if ('"' === KD) zD += '\\"';
            else {
              var pD;
              zD += null !== (pD = Dw[KD]) && void 0 !== pD ? pD : KD
            }
          }
          return `"${zD}"`
        }

        function ww(DD) {
          if ("string" === typeof DD) return !0;
          if (!DD || "object" !== typeof DD || Array.isArray(DD)) return !1;
          const zD = DD;
          return "ProgressBar" === zD.type ? "number" === typeof zD.progress : "StyledKeyBinding" === zD.type ? Nz.p.includes(zD.action) : "string" === typeof zD.icon || "string" === typeof zD.str || "string" === typeof zD.entityName || "string" === typeof zD.translationKey
        }

        function pw(DD) {
          let zD;
          try {
            zD = function(DD) {
              let zD = "",
                wD = "",
                pD = 0;
              const sD = () => {
                zD += wD.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), wD = ""
              };
              for (; pD < DD.length;) {
                const KD = DD.slice(pD).search(/["'`]|\/\//);
                if (-1 === KD) {
                  wD += DD.slice(pD);
                  break
                }
                wD += DD.slice(pD, pD + KD);
                const rD = pD + KD,
                  LD = DD[rD];
                if ("/" === LD) {
                  const zD = DD.indexOf("\n", rD);
                  pD = -1 === zD ? DD.length : zD;
                  continue
                }
                if (sD(), "`" === LD) throw new Error("Use quotes rather than template strings.");
                let cD = rD + 1;
                for (; cD < DD.length && DD[cD] !== LD;) cD += "\\" === DD[cD] ? 2 : 1;
                if (cD >= DD.length) throw new Error("A string is missing its closing quote.");
                const gD = DD.slice(rD + 1, cD);
                zD += zw(gD), pD = cD + 1
              }
              return sD(), JSON.parse(zD)
            }(DD.trim())
          } catch (pD) {
            return {
              parts: null,
              error: pD instanceof SyntaxError ? "This isn't a valid array yet." : pD.message
            }
          }
          if (!Array.isArray(zD)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const wD = zD.findIndex((DD => !ww(DD)));
          return -1 !== wD ? {
            parts: null,
            error: `Part ${wD+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: zD,
            error: null
          }
        }
        const sw = 1 / jz.f.clientTicksPerSecond,
          Kw = 700,
          rw = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          Lw = {
            progressBar: lz.progressBar.bw,
            timedClick: lz.timedClick.icon,
            gravityBar: lz.gravityBar.icon,
            precisionBar: lz.precisionBar.icon,
            rhythmClick: lz.rhythmClick.icon
          };

        function gw(DD) {
          let {
            type: zD
          } = DD;
          const [wD, sD] = (0, pD.useState)("ready"), [rD, LD] = (0, pD.useState)(1), [cD, gD] = (0, pD.useState)(!0), RD = (0, pD.useRef)(null), AD = (0, pD.useRef)(null), UD = (0, pD.useRef)(null), fD = (0, pD.useRef)(new Set), BD = (0, pD.useRef)(!1), hD = Lw[zD], nD = (0, pD.useMemo)((() => ({
            getState: () => {
              var DD, zD;
              return null !== (DD = null === (zD = UD.current) || void 0 === zD ? void 0 : zD.getState()) && void 0 !== DD ? DD : rw
            },
            onFrame: DD => (fD.current.add(DD), () => {
              fD.current.delete(DD)
            })
          })), []);
          (0, pD.useEffect)((() => {
            const DD = RD.current,
              zD = AD.current;
            if (!DD || !zD) return;
            const wD = new ResizeObserver((() => {
              LD(DD.clientWidth / Math.max(1, zD.offsetWidth))
            }));
            return wD.observe(DD), () => {
              wD.disconnect()
            }
          }), []), (0, pD.useEffect)((() => {
            var DD;
            if ("playing" !== wD) return;
            let pD = !1;
            const KD = new iz.f[zD](lz[zD], (DD => {
              pD = !0, gD(!1), sD(DD ? "succeeded" : "failed")
            }), (() => {}));
            UD.current = KD;
            let rD = 0,
              LD = performance.now(),
              cD = requestAnimationFrame((function DD(zD) {
                for (rD += Math.min(.25, (zD - LD) / 1e3), LD = zD; rD >= sw && !pD;) rD -= sw, KD.handleTick(sw);
                for (const wD of fD.current) wD();
                pD || (cD = requestAnimationFrame(DD))
              }));
            return null === (DD = RD.current) || void 0 === DD || DD.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(cD), KD.tearDown(), UD.current = null, BD.current = !1
            }
          }), [wD, zD]), (0, pD.useEffect)((() => {
            if (cD) return;
            const DD = setTimeout((() => {
              gD(!0)
            }), Kw);
            return () => {
              clearTimeout(DD)
            }
          }), [cD]);
          const MD = DD => {
            var zD;
            "playing" === wD && BD.current !== DD && (BD.current = DD, null === (zD = UD.current) || void 0 === zD || zD.handleMouseInput(DD))
          };
          return (0, ID.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, ID.jsxs)("div", {
              ref: RD,
              className: KD()("DocsQteStage", {
                Playing: "playing" === wD
              }),
              tabIndex: "playing" === wD ? 0 : -1,
              role: "playing" === wD ? "button" : void 0,
              "aria-label": "playing" === wD ? `${zD} quick time event: click or press Space` : void 0,
              onPointerDown: DD => {
                0 === DD.button && MD(!0)
              },
              onPointerUp: () => {
                MD(!1)
              },
              onPointerLeave: () => {
                MD(!1)
              },
              onPointerCancel: () => {
                MD(!1)
              },
              onKeyDown: DD => {
                "playing" !== wD || " " !== DD.key && "Enter" !== DD.key || (DD.preventDefault(), MD(!0))
              },
              onKeyUp: DD => {
                "playing" !== wD || " " !== DD.key && "Enter" !== DD.key || MD(!1)
              },
              children: [(0, ID.jsx)("div", {
                ref: AD,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${rD})`
                },
                children: "playing" === wD && (0, ID.jsx)(Sz.e.Provider, {
                  value: nD,
                  children: (0, ID.jsx)(dz.d, {
                    qte: {
                      type: zD,
                      parameters: lz[zD]
                    }
                  })
                })
              }), "playing" !== wD && (0, ID.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== wD && (0, ID.jsxs)("div", {
                  className: KD()("DocsQteResult", "succeeded" === wD ? "Succeeded" : "Failed"),
                  children: [(0, ID.jsx)(GD, {
                    name: "succeeded" === wD ? "check" : "cross",
                    isTinted: !0
                  }), (0, ID.jsx)("span", {
                    children: "succeeded" === wD ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, ID.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !cD,
                  onClick: () => {
                    sD("playing")
                  },
                  children: [(0, ID.jsx)(GD, {
                    name: "ready" === wD ? "play" : "replay"
                  }), (0, ID.jsx)("span", {
                    children: "ready" === wD ? `Try ${zD}` : "Play again"
                  })]
                })]
              })]
            }), hD && !Zz(hD) && (0, ID.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, ID.jsx)("code", {
                children: hD
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function Rw(DD) {
          let {
            level: zD,
            text: wD,
            anchor: pD,
            className: sD
          } = DD;
          const rD = `h${Math.min(zD,6)}`;
          return (0, ID.jsxs)(rD, {
                id: pD,
                className: KD()("DocsHeading", sD),
                children: [(0, ID.jsx)(Ez, {
                      text: wD
                    }), (0, ID.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${pD}`,
                        "aria-label": `Link to ${wD.replace(/`/g,"")}`,children:"#"})]})}function Aw(DD){let{items:zD,ordered:wD}=DD;const pD=wD?"ol":"ul";return(0,ID.jsx)(pD,{className:"DocsList",children:zD.map(((DD,zD)=>(0,ID.jsxs)("li",{children:[(0,ID.jsx)(Ez,{text:DD.text}),DD.children.length>0&&(0,ID.jsx)(Aw,{items:DD.children,ordered:wD})]},zD)))})}function Uw(DD){const zD=DD[0],wD="paragraph"===(null===zD||void 0===zD?void 0:zD.kind)?zD.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(wD)?"warning":/^\*\*(tip|prefer)/.test(wD)?"tip":"note"}function fw(DD){let{block:zD}=DD;switch(zD.kind){case"heading":return(0,ID.jsx)(Rw,{level:zD.level,text:zD.text,anchor:zD.anchor});case"paragraph":return(0,ID.jsx)("p",{children:(0,ID.jsx)(Ez,{text:zD.text})});case"code":{const DD="ts"===zD.lang?function(DD){const zD=DD.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return zD&&Object.hasOwn(lz,zD[1])?zD[1]:null}(zD.code):null;return(0,ID.jsxs)(ID.Fragment,{children:[(0,ID.jsx)(QD,{code:zD.code,lang:zD.lang}),DD&&(0,ID.jsx)(gw,{type:DD})]})}case"table":return(0,ID.jsx)("div",{className:"DocsTableScroll",children:(0,ID.jsxs)("table",{className:"DocsTable",children:[(0,ID.jsx)("thead",{children:(0,ID.jsx)("tr",{children:zD.header.map(((DD,zD)=>(0,ID.jsx)("th",{children:(0,ID.jsx)(Ez,{text:DD})},zD)))})}),(0,ID.jsx)("tbody",{children:zD.rows.map(((DD,zD)=>(0,ID.jsx)("tr",{children:DD.map(((DD,zD)=>(0,ID.jsx)("td",{children:(0,ID.jsx)(Ez,{text:DD})},zD)))},zD)))})]})});case"list":return(0,ID.jsx)(Aw,{items:zD.items,ordered:zD.ordered});case"quote":return(0,ID.jsx)("aside",{className:KD()("DocsCallout",Uw(zD.blocks)),children:(0,ID.jsx)(Iw,{blocks:zD.blocks})});case"rule":return(0,ID.jsx)("hr",{className:"DocsRule"})}}function Iw(DD){let{blocks:zD}=DD;return(0,ID.jsx)(ID.Fragment,{children:zD.map(((DD,zD)=>(0,ID.jsx)(fw,{block:DD},zD)))})}var Bw=wD(4773),Gw=wD(4777);function hw(DD){return"blocks"===DD||"items"===DD}const nw=new Map;function Mw(DD){let zD=nw.get(DD);return zD||(zD=function(DD){const zD={entries:[],legend:[],notes:[],examples:[]};let wD=!1;for(const KD of DD.split(/\r?\n/).slice(1)){if(KD.startsWith("#")){const DD=KD.replace(/^# ?/,""),pD=DD.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);pD?zD.legend.push({code:pD[1],meaning:pD[2],usage:pD[3].trim()}):/^Examples:/.test(DD.trim())?wD=!0:wD&&DD.trim()?zD.examples.push(DD.trim()):DD.trim()&&!/^\s/.test(DD)&&zD.notes.push(DD.trim());continue}const DD=KD.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var pD,sD;DD&&zD.entries.push({name:DD[1],variants:null!==(pD=null===(sD=DD[2])||void 0===sD?void 0:sD.split(","))&&void 0!==pD?pD:[]})}return zD}("blocks"===DD?Bw:Gw),nw.set(DD,zD)),zD}function Ow(DD){let{className:zD,value:wD,placeholder:pD,label:sD,onChange:KD,count:rD,children:LD}=DD;return(0,ID.jsxs)("div",{className:zD,children:[(0,ID.jsx)(GD,{name:"magnifying-glass"}),(0,ID.jsx)("input",{type:"search",value:wD,placeholder:pD,"aria-label":sD,onChange:DD=>{KD(DD.target.value)}}),LD,rD&&(0,ID.jsxs)("span",{className:"DocsFilterCount",children:[rD.visible," of ",rD.total]})]})}var Jw=wD(1057);function Ew(DD){const zD=DD.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return zD?zD[2]:null}function Qw(DD){return"paragraph"===DD.kind&&""===DD.text.trim()}function Xw(DD){const zD={name:DD.heading.text,description:[],params:[],returns:null};let wD="description";for(const sD of DD.blocks)if(!Qw(sD))if("heading"===sD.kind&&/^Parameters:?$/.test(sD.text))wD="params";else if("heading"===sD.kind&&/^Returns:?$/.test(sD.text))wD="returns",zD.returns={type:"",description:[]};else if("params"!==wD||"table"!==sD.kind){if("returns"===wD&&"paragraph"===sD.kind&&""===zD.returns.type){const DD=Ew(sD.text);if(null!==DD){zD.returns.type=DD.replaceAll("\\|","|");continue}}"returns"===wD?zD.returns.description.push(sD):zD.description.push(sD)}else for(const[DD,wD,KD]of sD.rows){var pD;zD.params.push({name:DD,type:null!==(pD=Ew(wD))&&void 0!==pD?pD:wD,description:null!==KD&&void 0!==KD?KD:""})}return zD}const Vw=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function Pw(DD){return DD.filter((DD=>!Qw(DD)))}const Cw=/^[\w][\w .'&!:()-]*$/,xw=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function Tw(DD){var zD;if("code"===DD.kind&&"text"===DD.lang){const zD=DD.code.split("\n").map((DD=>DD.trim())).filter(Boolean);return zD.length>0&&zD.every((DD=>Cw.test(DD)))?zD.map((DD=>({name:DD}))):null}return"paragraph"===DD.kind&&xw.test(DD.text.trim())?[...DD.text.matchAll(/`([ ^ `]+)` / g)].flatMap((DD => DD[1].split(/,\s*/).map((DD => ({
                              name: DD.trim()
                            }))))): "table" === DD.kind && null !== (zD = DD.header[0]) && void 0 !== zD && zD.startsWith("Song") ? DD.rows.map((DD => {
                              let [zD, wD] = DD;
                              return {
                                name: zD.replace(/`/g, ""),
                                caption: wD
                              }
                            })) : null
                          }

                          function bw(DD) {
                            const zD = [];
                            for (const wD of DD) {
                              const DD = Tw(wD),
                                pD = zD.at(-1),
                                sD = "table" === wD.kind;
                              DD ? "names" === (null === pD || void 0 === pD ? void 0 : pD.kind) && pD.isSongs === sD ? pD.names.push(...DD) : zD.push({
                                kind: "names",
                                names: DD,
                                isSongs: sD
                              }) : zD.push({
                                kind: "block",
                                block: wD
                              })
                            }
                            return zD
                          }
                          const jw = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function dw(DD, zD) {
                            return `${jw[DD]}-${(0,XD.v)(zD)}`
                          }
                          const Sw = new WeakMap;

                          function iw(DD, zD, wD) {
                            let pD = Sw.get(zD);
                            if (!pD) {
                              pD = new Map;
                              const wD = new Set;
                              for (const sD of (0, XD.w)(zD)) {
                                const zD = bw(Pw(sD.blocks)).map((zD => {
                                  if ("block" === zD.kind) return zD;
                                  return {
                                    kind: "names",
                                    names: zD.names.map((zD => {
                                      var pD, KD;
                                      const rD = dw(DD, zD.name);
                                      let LD = rD;
                                      for (let DD = 2; wD.has(LD); DD++) LD = `${rD}-${DD}`;
                                      return wD.add(LD), {
                                        ...zD,
                                        anchor: LD,
                                        heading: null !== (pD = null === (KD = sD.heading) || void 0 === KD ? void 0 : KD.text) && void 0 !== pD ? pD : ""
                                      }
                                    })),
                                    isSongs: zD.isSongs
                                  }
                                }));
                                pD.set(sD.blocks, zD)
                              }
                              Sw.set(zD, pD)
                            }
                            const sD = pD.get(wD);
                            if (!sD) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return sD
                          }
                          const lw = "/textures/docs/skinPreviews",
                            Ww = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var Nw = wD(4242),
                            Zw = wD(4257);

                          function yw(DD) {
                            return Object.hasOwn(Nw.g, DD) ? Nw.g[DD] : null
                          }
                          const kw = {
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
                            blendMode: Zw.f.Standard
                          };

                          function mw(DD, zD, wD) {
                            return zD + (wD - zD) * DD()
                          }

                          function ew(DD, zD, wD) {
                            return DD + (zD - DD) * wD
                          }

                          function ow(DD) {
                            return DD.length > 0 && "timeFraction" in DD[0]
                          }

                          function aw(DD, zD) {
                            if (0 === DD.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!ow(DD.colorGradients)) {
                              const wD = DD.colorGradients,
                                {
                                  color: pD
                                } = wD[Math.floor(zD() * wD.length) % wD.length];
                              return [{
                                at: 0,
                                colour: [pD[0] / 255, pD[1] / 255, pD[2] / 255, 1]
                              }]
                            }
                            return [...DD.colorGradients].sort(((DD, zD) => DD.timeFraction - zD.timeFraction)).map((DD => {
                              var wD, pD, sD;
                              const KD = DD.minColor,
                                rD = null !== (wD = DD.maxColor) && void 0 !== wD ? wD : KD,
                                LD = zD(),
                                cD = [ew(KD[0], rD[0], LD) / 255, ew(KD[1], rD[1], LD) / 255, ew(KD[2], rD[2], LD) / 255, ew(null !== (pD = KD[3]) && void 0 !== pD ? pD : 1, null !== (sD = rD[3]) && void 0 !== sD ? sD : 1, LD)];
                              return {
                                at: DD.timeFraction,
                                colour: cD
                              }
                            }))
                          }

                          function uw(DD, zD, wD, pD) {
                            const sD = mw(pD, DD.minEmitPower, DD.maxEmitPower),
                              KD = zD => mw(pD, Math.min(DD.dir1[zD], DD.dir2[zD]), Math.max(DD.dir1[zD], DD.dir2[zD])) * sD,
                              rD = [...DD.velocityGradients].sort(((DD, zD) => DD.timeFraction - zD.timeFraction)).map((DD => ({
                                at: DD.timeFraction,
                                factor: mw(pD, DD.factor, DD.factor2)
                              })));
                            return {
                              pos: [mw(pD, zD[0], wD[0]), mw(pD, zD[1], wD[1]), mw(pD, zD[2], wD[2])],
                              dir: [KD(0), KD(1), KD(2)],
                              age: 0,
                              life: mw(pD, DD.minLifeTime, DD.maxLifeTime),
                              size: mw(pD, DD.minSize, DD.maxSize),
                              colours: aw(DD, pD),
                              velocityFactors: rD
                            }
                          }

                          function vw(DD, zD, wD, pD) {
                            if (zD < DD[0].at) return wD(Math.min(1, DD.length - 1));
                            for (let sD = 0; sD < DD.length - 1; sD++)
                              if (zD <= DD[sD + 1].at) {
                                const KD = DD[sD + 1].at - DD[sD].at;
                                return pD(wD(sD), wD(sD + 1), KD > 0 ? (zD - DD[sD].at) / KD : 1)
                              } return wD(DD.length - 1)
                          }

                          function tw(DD) {
                            return vw(DD.colours, DD.age / DD.life, (zD => DD.colours[zD].colour), ((DD, zD, wD) => [ew(DD[0], zD[0], wD), ew(DD[1], zD[1], wD), ew(DD[2], zD[2], wD), ew(DD[3], zD[3], wD)]))
                          }

                          function Fw(DD, zD, wD) {
                            if (DD.age += wD, DD.age >= DD.life) return !1;
                            const pD = function(DD) {
                              return 0 === DD.velocityFactors.length ? 1 : vw(DD.velocityFactors, DD.age / DD.life, (zD => DD.velocityFactors[zD].factor), ew)
                            }(DD) * wD;
                            for (let KD = 0; KD < 3; KD++) {
                              var sD;
                              DD.pos[KD] += DD.dir[KD] * pD, DD.dir[KD] += (null !== (sD = zD[KD]) && void 0 !== sD ? sD : 0) * wD
                            }
                            return !0
                          }

                          function Yw(DD) {
                            return String(Math.round(1e6 * DD) / 1e6)
                          }

                          function Hw(DD) {
                            return `[${DD.map(Yw).join(", ")}]`
                          }

                          function qw(DD, zD) {
                            const wD = `${zD}    `;
                            return `[\n${(ow(DD)?DD.map((DD=>{const zD=[`${wD}    timeFraction: ${Yw(DD.timeFraction)},`,`${wD}    minColor: ${Hw(DD.minColor)},`];return DD.maxColor&&zD.push(`${wD}    maxColor: ${Hw(DD.maxColor)},`),`${wD}{\n${zD.join("\n")}\n${wD}},`})):DD.map((DD=>`
                            $ {
                              wD
                            } {
                              color: $ {
                                Hw(DD.color)
                              }
                            }, `))).join("\n")}\n${zD}]`
                          }
                          const Dp = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            zp = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const wp = .6;

                          function pp(DD, zD) {
                            return `${zD?"song":"sound"}:${DD}`
                          }
                          let sp = {
                              track: null,
                              volume: wp
                            },
                            Kp = null,
                            rp = 0,
                            Lp = 0;
                          const cp = new Set;

                          function gp(DD) {
                            sp = {
                              ...sp,
                              ...DD
                            }, cp.forEach((DD => {
                              DD()
                            }))
                          }

                          function Rp(DD) {
                            sp.track && gp({
                              track: {
                                ...sp.track,
                                ...DD
                              }
                            })
                          }

                          function Ap(DD) {
                            const [zD, wD] = (0, pD.useState)((() => DD(sp))), sD = (0, pD.useRef)(DD);
                            return sD.current = DD, (0, pD.useEffect)((() => {
                              const DD = () => {
                                wD((() => sD.current(sp)))
                              };
                              return cp.add(DD), DD(), () => {
                                cp.delete(DD)
                              }
                            }), []), zD
                          }

                          function Up() {
                            rp++;
                            const DD = Kp;
                            Kp = null, null === DD || void 0 === DD || DD.stop()
                          }

                          function fp(DD, zD) {
                            let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            Up();
                            const sD = rp,
                              {
                                track: KD
                              } = sp,
                              rD = KD && KD.name === DD && KD.isSong === zD ? KD.duration : 0;
                            Lp = pD, gp({
                              track: {
                                name: DD,
                                isSong: zD,
                                status: "loading",
                                duration: rD
                              }
                            }), Promise.all([wD.e(222), wD.e(249)]).then((() => wD(39736))).then((wD => {
                              let {
                                playDocsSound: KD
                              } = wD;
                              sD === rp && (Kp = KD(DD, zD, sp.volume, pD, {
                                onPlay: DD => {
                                  sD === rp && Rp({
                                    status: "playing",
                                    duration: DD
                                  })
                                },
                                onEnd: DD => {
                                  var zD, wD;
                                  sD === rp && (Kp = null, DD ? gp({
                                    track: null
                                  }) : (Lp = null !== (zD = null === (wD = sp.track) || void 0 === wD ? void 0 : wD.duration) && void 0 !== zD ? zD : 0, Rp({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((zD => {
                              console.error(`Could not play docs sound ${DD}`, zD), sD === rp && gp({
                                track: null
                              })
                            }))
                          }

                          function Ip() {
                            const {
                              track: DD
                            } = sp;
                            if (!DD) return;
                            if ("playing" === DD.status && Kp) return Lp = Kp.PJ(), Kp.pause(), void Rp({
                              status: "paused"
                            });
                            if ("loading" === DD.status) return Up(), void Rp({
                              status: "paused"
                            });
                            if (Kp) return void Kp.resume();
                            const zD = DD.duration > 0 && Lp >= DD.duration - .05;
                            fp(DD.name, DD.isSong, zD ? 0 : Lp)
                          }

                          function Bp() {
                            var DD;
                            return Kp && "playing" === (null === (DD = sp.track) || void 0 === DD ? void 0 : DD.status) ? Kp.PJ() : Lp
                          }

                          function Gp(DD) {
                            var zD;
                            null === (zD = Kp) || void 0 === zD || zD.setVolume(DD), gp({
                              volume: DD
                            })
                          }

                          function hp() {
                            Up(), Lp = 0, gp({
                              track: null
                            })
                          }
                          const np = (0, pD.createContext)(null);
                          let Mp = null;

                          function Op() {
                            const [DD, zD] = (0, pD.useState)(null);
                            return (0, pD.useEffect)((() => {
                              let DD = !1;
                              return Mp ??= Promise.all([wD.e(72), wD.e(75), wD.e(74), wD.e(73), wD.e(186), wD.e(98), wD.e(226)]).then((() => wD(39733))), Mp.then((wD => {
                                DD || zD(wD)
                              }), (DD => {
                                console.error("Could not load the docs gallery's textures", DD), Mp = null
                              })), () => {
                                DD = !0
                              }
                            }), []), DD
                          }
                          const Jp = 24,
                            Ep = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function Qp(DD, zD) {
                            const wD = "skins" === DD ? function(DD, zD) {
                              const wD = Ww.find((zD => DD.startsWith(zD.heading)));
                              return wD ? function(DD, zD) {
                                return `${DD}-${zD}`
                              }(wD.prefix, zD) : null
                            }(zD.heading, zD.name) : null;
                            return null === wD ? null : `${lw}/${wD}.webp`
                          }

                          function Xp(DD) {
                            let {
                              kind: zD,
                              entry: wD,
                              assets: sD,
                              renderedUrl: rD
                            } = DD;
                            const {
                              name: LD
                            } = wD, [cD, gD] = (0, pD.useState)(!1);
                            if ("icons" === zD && Zz(LD)) return (0, ID.jsx)(Jw.e, {
                              className: "DocsTileIcon",
                              name: LD
                            });
                            let RD = null;
                            var AD;
                            if ("icons" === zD) RD = null !== (AD = null === sD || void 0 === sD ? void 0 : sD.getIngameIconUrl(LD)) && void 0 !== AD ? AD : null;
                            else if ("particles" === zD) {
                              var UD, fD, BD;
                              RD = null !== (UD = null === sD || void 0 === sD ? void 0 : sD.getParticleTextureUrl(null !== (fD = null === (BD = yw(LD)) || void 0 === BD ? void 0 : BD.texture) && void 0 !== fD ? fD : LD)) && void 0 !== UD ? UD : null
                            } else "skins" === zD && (RD = null !== rD && void 0 !== rD ? rD : Ep.test(LD) ? `/textures/charSkins/previews/${LD}_preview.png` : null);
                            return !RD || cD ? (0, ID.jsx)(GD, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === zD ? "person" : "image"
                            }) : (0, ID.jsx)("img", {
                              className: KD()("DocsTileImage", {
                                Pixelated: "skins" !== zD
                              }),
                              src: RD,
                              srcSet: RD === rD ? `${RD} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${RD}`), gD(!0)
                              }
                            })
                          }

                          function Vp(DD) {
                            let {
                              entry: zD,
                              isSong: wD
                            } = DD;
                            const pD = Ap((DD => {
                                let {
                                  track: pD
                                } = DD;
                                return (null === pD || void 0 === pD ? void 0 : pD.name) === zD.name && pD.isSong === wD ? pD.status : null
                              })),
                              sD = null !== pD && "paused" !== pD;
                            return (0, ID.jsxs)("button", {
                              type: "button",
                              id: zD.anchor,
                              className: KD()("DocsSoundTile", {
                                Playing: sD
                              }),
                              "data-docs-track": pp(zD.name, wD),
                              "aria-label": sD ? `Pause ${zD.name}` : `Play ${zD.name}`,
                              onClick: () => {
                                null !== pD ? Ip() : fp(zD.name, wD)
                              },
                              children: [(0, ID.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, ID.jsx)(GD, {
                                  name: sD ? "pause" : "play"
                                })
                              }), (0, ID.jsx)("code", {
                                className: "DocsSoundName",
                                children: zD.name
                              }), zD.caption && (0, ID.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: zD.caption
                              })]
                            })
                          }

                          function Pp(DD) {
                            let {
                              kind: zD,
                              names: wD,
                              isSongs: sD
                            } = DD;
                            const rD = Op(),
                              [LD, cD] = nD(),
                              gD = !1 === (null === LD || void 0 === LD ? void 0 : LD.failed) ? LD.text : null,
                              RD = (0, pD.useContext)(np),
                              [AD, UD] = (0, pD.useState)(""),
                              fD = AD.trim().toLowerCase(),
                              BD = fD ? wD.filter((DD => DD.name.toLowerCase().includes(fD))) : wD;
                            return (0, ID.jsxs)("div", {
                              className: "DocsGallery",
                              children: [wD.length > Jp && (0, ID.jsx)(Ow, {
                                className: "DocsGalleryFilter",
                                value: AD,
                                placeholder: `Filter ${wD.length} names\u2026`,
                                label: "Filter names",
                                onChange: UD,
                                count: fD ? {
                                  visible: BD.length,
                                  total: wD.length
                                } : null
                              }), (0, ID.jsx)("div", {
                                className: KD()("DocsGalleryGrid", `Kind-${zD}`, {
                                  Songs: sD
                                }),
                                children: BD.map((DD => {
                                  if ("sounds" === zD) return (0, ID.jsx)(Vp, {
                                    entry: DD,
                                    isSong: sD
                                  }, DD.anchor);
                                  if (RD && "particles" === zD && yw(DD.name)) return (0, ID.jsxs)("button", {
                                    type: "button",
                                    id: DD.anchor,
                                    className: KD()("DocsTile Previewable", {
                                      Copied: gD === DD.name
                                    }),
                                    title: `Play "${DD.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      RD(DD.name), cD(DD.name)
                                    },
                                    children: [(0, ID.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, ID.jsx)(Xp, {
                                        kind: zD,
                                        entry: DD,
                                        assets: rD,
                                        renderedUrl: null
                                      }), (0, ID.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, ID.jsx)(GD, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, ID.jsx)("span", {
                                      className: "DocsTileName",
                                      children: gD === DD.name ? "Copied!" : DD.name
                                    })]
                                  }, DD.anchor);
                                  const wD = Qp(zD, DD);
                                  return (0, ID.jsxs)("button", {
                                    type: "button",
                                    id: DD.anchor,
                                    className: KD()("DocsTile", {
                                      Copied: gD === DD.name
                                    }),
                                    title: `Copy "${DD.name}"`,
                                    onClick: () => {
                                      cD(DD.name)
                                    },
                                    children: [(0, ID.jsx)("span", {
                                      className: KD()("DocsTilePreview", {
                                        Rendered: null !== wD
                                      }),
                                      children: (0, ID.jsx)(Xp, {
                                        kind: zD,
                                        entry: DD,
                                        assets: rD,
                                        renderedUrl: wD
                                      })
                                    }), (0, ID.jsx)("span", {
                                      className: "DocsTileName",
                                      children: gD === DD.name ? "Copied!" : DD.name
                                    })]
                                  }, DD.anchor)
                                }))
                              })]
                            })
                          }

                          function Cp(DD) {
                            let {
                              kind: zD,
                              content: wD,
                              blocks: pD
                            } = DD;
                            return (0, ID.jsx)(ID.Fragment, {
                              children: iw(zD, wD, pD).map(((DD, wD) => "block" === DD.kind ? (0, ID.jsx)(fw, {
                                block: DD.block
                              }, wD) : (0, ID.jsx)(Pp, {
                                kind: zD,
                                names: DD.names,
                                isSongs: DD.isSongs
                              }, wD)))
                            })
                          }
                          const xp = [{
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

                          function Tp(DD) {
                            let {
                              cards: zD = xp,
                              label: wD = "Start here"
                            } = DD;
                            const sD = (0, pD.useContext)(fz);
                            return (0, ID.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": wD,
                              children: zD.map((DD => {
                                let {
                                  pageId: zD,
                                  countNoun: wD
                                } = DD;
                                const pD = ND(zD);
                                return (0, ID.jsxs)(rD.e, {
                                  to: oD(sD, pD),
                                  className: "DocsLandingCard",
                                  children: [(0, ID.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, ID.jsx)(GD, {
                                      name: pD.icon
                                    })
                                  }), (0, ID.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: pD.title
                                  }), (0, ID.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: pD.summary
                                  }), wD && (0, ID.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [yD(pD).sections.length, " ", wD]
                                  })]
                                }, zD)
                              }))
                            })
                          }
                          const bp = 240;

                          function jp(DD) {
                            let {
                              faces: zD
                            } = DD;
                            return (0, ID.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, ID.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${zD.top}")`
                                }
                              }), (0, ID.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${zD.left}")`
                                }
                              }), (0, ID.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${zD.right}")`
                                }
                              })]
                            })
                          }

                          function dp(DD) {
                            let {
                              src: zD
                            } = DD;
                            const [wD, sD] = (0, pD.useState)(!1);
                            return wD ? null : (0, ID.jsx)("img", {
                              src: zD,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${zD}`), sD(!0)
                              }
                            })
                          }

                          function Sp(DD) {
                            let {
                              kind: zD
                            } = DD;
                            const wD = Mw(zD),
                              sD = Op(),
                              rD = (0, LD.s)(),
                              [cD, gD] = (0, pD.useState)(""),
                              [RD, AD] = (0, pD.useState)(null),
                              [UD, fD] = (0, pD.useState)(bp),
                              [BD, hD] = (0, pD.useState)(null),
                              nD = (0, pD.useRef)(null),
                              OD = cD.trim().toLowerCase();
                            (0, pD.useEffect)((() => {
                              const DD = (0, XD.r)(rD.hash),
                                pD = wD.entries.find((wD => dw(zD, wD.name) === DD));
                              if (pD) nD.current = pD.name, gD(pD.name), AD(null), hD(pD.name);
                              else if (null !== nD.current) {
                                const DD = nD.current;
                                nD.current = null, gD((zD => zD === DD ? "" : zD)), hD(null)
                              }
                            }), [wD, zD, rD.hash, rD.key]), (0, pD.useEffect)((() => {
                              var DD;
                              null !== BD && (null === (DD = document.getElementById(dw(zD, BD))) || void 0 === DD || DD.scrollIntoView({
                                block: "center"
                              }))
                            }), [zD, BD]);
                            const JD = wD.entries.filter((DD => (!OD || DD.name.toLowerCase().includes(OD)) && (!RD || DD.variants.includes(RD))));
                            return (0, ID.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [wD.notes.length > 0 && (0, ID.jsx)("div", {
                                className: "DocsProse",
                                children: wD.notes.map((DD => (0, ID.jsx)("p", {
                                  children: DD
                                }, DD)))
                              }), wD.legend.length > 0 && (0, ID.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, ID.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, ID.jsx)("thead", {
                                    children: (0, ID.jsxs)("tr", {
                                      children: [(0, ID.jsx)("th", {
                                        children: "Code"
                                      }), (0, ID.jsx)("th", {
                                        children: "Variant"
                                      }), (0, ID.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, ID.jsx)("tbody", {
                                    children: wD.legend.map((DD => (0, ID.jsxs)("tr", {
                                      children: [(0, ID.jsx)("td", {
                                        children: (0, ID.jsx)("button", {
                                          type: "button",
                                          className: KD()("DocsVariantChip", {
                                            Active: RD === DD.code
                                          }),
                                          "aria-pressed": RD === DD.code,
                                          title: `Show only ${zD} with ${DD.meaning} variants`,
                                          onClick: () => {
                                            AD(RD === DD.code ? null : DD.code)
                                          },
                                          children: DD.code
                                        })
                                      }), (0, ID.jsx)("td", {
                                        children: DD.meaning
                                      }), (0, ID.jsx)("td", {
                                        children: (0, ID.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: DD.usage
                                        })
                                      })]
                                    }, DD.code)))
                                  })]
                                })
                              }), wD.examples.length > 0 && (0, ID.jsx)(QD, {
                                lang: "text",
                                code: wD.examples.join("\n")
                              }), (0, ID.jsx)(Ow, {
                                className: "DocsFilterBar",
                                value: cD,
                                placeholder: `Search ${wD.entries.length} ${zD}\u2026`,
                                label: `Search ${zD}`,
                                onChange: DD => {
                                  gD(DD), fD(bp)
                                },
                                count: OD || RD ? {
                                  visible: JD.length,
                                  total: wD.entries.length
                                } : null,
                                children: RD && (0, ID.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    AD(null)
                                  },
                                  children: [RD, " ", (0, ID.jsx)(GD, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, ID.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: JD.slice(0, UD).map((DD => {
                                  const wD = "blocks" === zD ? null === sD || void 0 === sD ? void 0 : sD.getBlockFaces(DD.name) : null,
                                    pD = sD && !wD ? sD.getItemTextureUrl(DD.name) : null;
                                  return (0, ID.jsxs)("div", {
                                    id: dw(zD, DD.name),
                                    className: KD()("DocsCatalogueTile", {
                                      Linked: DD.name === BD
                                    }),
                                    children: [(0, ID.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [wD && (0, ID.jsx)(jp, {
                                        faces: wD
                                      }), pD && (0, ID.jsx)(dp, {
                                        src: pD
                                      })]
                                    }), (0, ID.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: DD.name
                                    }), DD.variants.length > 0 && (0, ID.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: DD.variants.map((DD => (0, ID.jsx)("span", {
                                        children: DD
                                      }, DD)))
                                    }), (0, ID.jsx)(MD, {
                                      text: DD.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, DD.name)
                                }))
                              }), JD.length > UD && (0, ID.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  fD(JD.length)
                                },
                                children: ["Show all ", JD.length]
                              }), 0 === JD.length && (0, ID.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", zD, " match."]
                              })]
                            })
                          }
                          var ip = wD(4840),
                            lp = wD(1594);
                          const Wp = .95 * ip.d;

                          function Np(DD) {
                            return /^\s*```/.test(DD)
                          }

                          function Zp(DD, zD) {
                            const wD = [
                              []
                            ];
                            let pD = !1;
                            for (const sD of DD.split("\n")) !pD && zD(sD) && wD.at(-1).length > 0 && wD.push([]), Np(sD) && (pD = !pD), wD.at(-1).push(sD);
                            return wD.map((DD => DD.join("\n").trim())).filter(Boolean)
                          }

                          function yp(DD, zD) {
                            const wD = `${"#".repeat(zD)} `,
                              pD = [];
                            let sD = !1;
                            for (const KD of DD.split("\n")) Np(KD) ? sD = !sD : !sD && KD.startsWith(wD) && pD.push(KD.slice(wD.length).trim());
                            return pD
                          }

                          function kp(DD) {
                            return DD.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class mp {
                            constructor(DD, zD) {
                              this.origin = zD, this.pages = void 0, this.partPaths = new Map;
                              const wD = DD.map((DD => {
                                const zD = zD => this.resolveLinks(DD, zD).length,
                                  wD = function(DD, zD) {
                                    const wD = DD.map((DD => zD(DD.markdown) + 2)),
                                      pD = wD.reduce(((DD, zD) => DD + zD), 0),
                                      sD = pD / Math.ceil(pD / Wp),
                                      KD = [];
                                    let rD = 0;
                                    return DD.forEach(((DD, zD) => {
                                      const pD = wD[zD];
                                      (0 === KD.length || rD + pD > Wp || rD + pD / 2 > sD) && (KD.push([]), rD = 0), KD.at(-1).push(DD), rD += pD
                                    })), KD
                                  }(function(DD, zD) {
                                    return Zp(DD, (DD => DD.startsWith("## "))).flatMap((DD => {
                                      var wD;
                                      const pD = null !== (wD = yp(DD, 2)[0]) && void 0 !== wD ? wD : "";
                                      if (zD(DD) <= Wp) return [{
                                        markdown: DD,
                                        section: pD
                                      }];
                                      let sD = !1,
                                        KD = "";
                                      return Zp(DD, (DD => {
                                        const zD = sD && "" !== DD.trim();
                                        return sD = "" === DD.trim(), zD
                                      })).map((DD => {
                                        var zD;
                                        const wD = yp(DD, 3),
                                          sD = DD.startsWith("### ") ? wD[0] : KD;
                                        return KD = null !== (zD = wD.at(-1)) && void 0 !== zD ? zD : KD, {
                                          markdown: DD,
                                          section: pD || sD
                                        }
                                      }))
                                    }))
                                  }(kp(DD), zD), zD);
                                return {
                                  page: DD,
                                  groups: wD.length > 1 ? wD : []
                                }
                              }));
                              for (const {
                                  page: pD,
                                  groups: sD
                                }
                                of wD) sD.forEach(((DD, zD) => {
                                const wD = (0, ip.u)(pD.slug, zD);
                                for (const sD of DD.flatMap((DD => [...yp(DD.markdown, 2), ...yp(DD.markdown, 3)]))) {
                                  const DD = `${pD.id}#${(0,XD.v)(sD)}`;
                                  this.partPaths.has(DD) || this.partPaths.set(DD, wD)
                                }
                              }));
                              this.pages = wD.map((DD => {
                                let {
                                  page: zD,
                                  groups: wD
                                } = DD;
                                return {
                                  page: zD,
                                  path: (0, ip.q)(zD.slug),
                                  markdown: `# ${zD.title}\n\n${this.resolveLinks(zD,kp(zD))}\n`,
                                  parts: wD.map(((DD, pD) => this.renderPart(zD, DD, pD, wD.length)))
                                }
                              }))
                            }
                            url(DD) {
                              return `${this.origin}${DD}`
                            }
                            getPage(DD) {
                              return this.pages.find((zD => zD.page.id === DD))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((DD => (DD.parts.length > 0 ? DD.parts : [{
                                path: DD.path,
                                label: "",
                                markdown: DD.markdown
                              }]).filter((DD => DD.markdown.length > ip.d))))
                            }
                            markdownUrl(DD, zD) {
                              const wD = zD && this.partPaths.get(`${DD.id}#${zD}`) || (0, ip.q)(DD.slug);
                              return this.url(zD ? `${wD}#${zD}` : wD)
                            }
                            resolveLinks(DD, zD) {
                              return zD.replace(/\]\((#[^)]+)\)/g, ((zD, wD) => {
                                var pD;
                                const sD = null !== (pD = mD(wD)) && void 0 !== pD ? pD : this.samePageTarget(DD, wD);
                                return sD ? `](${this.markdownUrl(sD.page,sD.anchor)})` : zD
                              }))
                            }
                            samePageTarget(DD, zD) {
                              const wD = (0, XD.v)(zD.slice(1));
                              return kD(DD, wD) ? {
                                page: DD,
                                anchor: wD
                              } : null
                            }
                            renderPart(DD, zD, wD, pD) {
                              const sD = function(DD) {
                                  const zD = DD.map((DD => DD.section)).filter(Boolean);
                                  if (0 === zD.length) return "";
                                  const wD = zD[0],
                                    pD = zD.at(-1);
                                  return wD === pD ? wD : `${wD} to ${pD}`
                                }(zD),
                                KD = zD.map((DD => DD.markdown)).join("\n\n"),
                                rD = sD ? `It covers ${sD}. ` : "",
                                LD = `Part ${wD+1} of ${pD} of [${DD.title}](${this.url((0,ip.q)(DD.slug))}). ${rD}[llms.txt](${this.url(ip.k)}) lists every part.`;
                              return {
                                path: (0, ip.u)(DD.slug, wD),
                                label: sD,
                                markdown: `# ${DD.title}, part ${wD+1} of ${pD}\n\n${LD}\n\n${this.resolveLinks(DD,KD)}\n`
                              }
                            }
                            llmsTxt(DD) {
                              const zD = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${ep(ip.d)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const wD of WD) {
                                zD.push("", `## ${wD.title}`, "");
                                for (const DD of wD.pageIds) {
                                  const wD = this.getPage(DD),
                                    {
                                      page: pD,
                                      parts: sD
                                    } = wD,
                                    KD = `About ${ep(wD.markdown.length)} tokens${sD.length>0?`, in ${sD.length} parts:`:"."}`;
                                  zD.push(`- [${pD.title}](${this.url(wD.path)}): ${pD.summary} ${KD}`), sD.forEach(((DD, wD) => {
                                    zD.push(`  - [Part ${wD+1}${DD.label?`: ${DD.label}`:""}](${this.url(DD.path)})`)
                                  }))
                                }
                              }
                              return zD.push("", "## Optional", "", `- [Every page in one file](${this.url(ip.g)}): About ${ep(DD.length)} tokens, for a model with a large context window.`, ""), zD.join("\n")
                            }
                            llmsFullTxt() {
                              return WD.flatMap((DD => DD.pageIds.map((DD => this.getPage(DD).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const DD = this.llmsFullTxt(),
                                zD = this.llmsTxt(DD),
                                wD = new Map([
                                  [ip.n, zD],
                                  [ip.k, zD],
                                  [ip.g, DD]
                                ]);
                              for (const pD of this.pages) {
                                wD.set(pD.path, pD.markdown);
                                for (const DD of pD.parts) wD.set(DD.path, DD.markdown)
                              }
                              return wD
                            }
                          }

                          function ep(DD) {
                            return `${Math.max(1,Math.round(DD/4e3))}K`
                          }
                          let op = null;

                          function ap() {
                            return op ??= new mp(lD, lp.c), op
                          }
                          const vp = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function tp(DD) {
                            return ap().getPage(DD.id).parts.length > 0 ? `Read ${ip.l}, then the parts of the Bloxd Code API's ${DD.title} page it lists, so I can ask questions about it.` : `Read ${lp.c}${(0,ip.q)(DD.slug)} so I can ask questions about it. ${ip.l} lists every page of the Bloxd Code API docs.`
                          }

                          function Fp(DD) {
                            let {
                              page: zD
                            } = DD;
                            const [wD, pD] = nD();
                            return (0, ID.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, ID.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  pD(ap().getPage(zD.id).markdown)
                                },
                                children: [(0, ID.jsx)(GD, {
                                  name: !1 === (null === wD || void 0 === wD ? void 0 : wD.failed) ? "check" : "copy"
                                }), (0, ID.jsx)("span", {
                                  children: wD ? wD.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), vp.map((DD => (0, ID.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${DD.url}${encodeURIComponent(tp(zD))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, ID.jsx)(GD, {
                                  name: "external-link"
                                }), (0, ID.jsxs)("span", {
                                  children: ["Open in ", DD.name]
                                })]
                              }, DD.name)))]
                            })
                          }

                          function Yp(DD) {
                            return `#${[0,1,2].map((zD=>Math.round(Math.min(255,Math.max(0,DD[zD]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function Hp(DD) {
                            return [parseInt(DD.slice(1, 3), 16), parseInt(DD.slice(3, 5), 16), parseInt(DD.slice(5, 7), 16)]
                          }

                          function qp(DD) {
                            let {
                              label: zD,
                              min: wD,
                              max: pD,
                              step: sD,
                              low: KD,
                              high: rD,
                              onChange: LD
                            } = DD;
                            return (0, ID.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, ID.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, ID.jsx)("span", {
                                  children: zD
                                }), (0, ID.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: KD === rD ? KD : `${KD}\u2013${rD}`
                                })]
                              }), (0, ID.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, ID.jsx)("input", {
                                  type: "range",
                                  min: wD,
                                  max: pD,
                                  step: sD,
                                  value: Math.min(pD, KD),
                                  "aria-label": `Minimum ${zD.toLowerCase()}`,
                                  onChange: DD => {
                                    const zD = Number(DD.target.value);
                                    LD(zD, Math.max(zD, rD))
                                  }
                                }), (0, ID.jsx)("input", {
                                  type: "range",
                                  min: wD,
                                  max: pD,
                                  step: sD,
                                  value: Math.min(pD, rD),
                                  "aria-label": `Maximum ${zD.toLowerCase()}`,
                                  onChange: DD => {
                                    const zD = Number(DD.target.value);
                                    LD(Math.min(zD, KD), zD)
                                  }
                                })]
                              })]
                            })
                          }

                          function Ds(DD) {
                            let {
                              label: zD,
                              min: wD,
                              max: pD,
                              step: sD,
                              value: KD,
                              onChange: rD,
                              format: LD = String
                            } = DD;
                            return (0, ID.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, ID.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, ID.jsx)("span", {
                                  children: zD
                                }), (0, ID.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: LD(KD)
                                })]
                              }), (0, ID.jsx)("input", {
                                type: "range",
                                min: wD,
                                max: pD,
                                step: sD,
                                value: Math.min(pD, Math.max(wD, KD)),
                                "aria-label": zD,
                                onChange: DD => {
                                  rD(Number(DD.target.value))
                                }
                              })]
                            })
                          }

                          function zs(DD) {
                            let {
                              opts: zD,
                              onChange: wD
                            } = DD;
                            const pD = zD.colorGradients;
                            if (!ow(pD)) return (0, ID.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, ID.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, ID.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, ID.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: pD.map(((DD, zD) => (0, ID.jsx)("input", {
                                  type: "color",
                                  value: Yp(DD.color),
                                  "aria-label": `Colour ${zD+1}`,
                                  onChange: DD => {
                                    const sD = [...pD];
                                    sD[zD] = {
                                      color: Hp(DD.target.value)
                                    }, wD(sD)
                                  }
                                }, zD)))
                              })]
                            });
                            const sD = (DD, zD) => {
                              const sD = [...pD];
                              sD[DD] = zD, wD(sD)
                            };
                            return (0, ID.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, ID.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, ID.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, ID.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), pD.map(((DD, zD) => {
                                var wD;
                                const pD = null !== (wD = DD.maxColor) && void 0 !== wD ? wD : DD.minColor;
                                return (0, ID.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, ID.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * DD.timeFraction), "%"]
                                  }), (0, ID.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${Yp(DD.minColor)}, ${Yp(pD)})`
                                    }
                                  }), (0, ID.jsx)("input", {
                                    type: "color",
                                    value: Yp(DD.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*DD.timeFraction)}%`,
                                    onChange: wD => {
                                      sD(zD, {
                                        ...DD,
                                        minColor: [...Hp(wD.target.value), DD.minColor[3]]
                                      })
                                    }
                                  }), (0, ID.jsx)("input", {
                                    type: "color",
                                    value: Yp(pD),
                                    "aria-label": `Maximum colour at ${Math.round(100*DD.timeFraction)}%`,
                                    onChange: wD => {
                                      sD(zD, {
                                        ...DD,
                                        maxColor: [...Hp(wD.target.value), pD[3]]
                                      })
                                    }
                                  })]
                                }, zD)
                              }))]
                            })
                          }
                          const ws = [-.5, -.5, -.5],
                            ps = [.5, .5, .5],
                            ss = [0, 1, 2, 3, 4, 5, 6, 7].map((DD => [1 & DD ? ps[0] : ws[0], 2 & DD ? ps[1] : ws[1], 4 & DD ? ps[2] : ws[2]]));class Ks {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(DD, zD, wD, pD) {
                              const sD = Math.round(31 * zD),
                                KD = Math.round(31 * wD),
                                rD = Math.round(31 * pD),
                                LD = `${sD}|${KD}|${rD}`;
                              let cD = this.tints.get(DD);
                              (!cD || cD.size > 2e3) && (cD = new Map, this.tints.set(DD, cD));
                              let gD = cD.get(LD);
                              if (gD) return gD;
                              gD = document.createElement("canvas"), gD.width = DD.naturalWidth || 16, gD.height = DD.naturalHeight || 16;
                              const RD = gD.getContext("2d");
                              return RD ? (RD.imageSmoothingEnabled = !1, RD.drawImage(DD, 0, 0, gD.width, gD.height), RD.globalCompositeOperation = "multiply", RD.fillStyle = `rgb(${sD/31*255}, ${KD/31*255}, ${rD/31*255})`, RD.fillRect(0, 0, gD.width, gD.height), RD.globalCompositeOperation = "destination-in", RD.drawImage(DD, 0, 0, gD.width, gD.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), cD.set(LD, gD), gD
                            }
                          }

                          function rs(DD) {
                            let {
                              opts: zD,
                              textureUrl: wD,
                              burst: sD,
                              paused: KD
                            } = DD;
                            const rD = (0, pD.useRef)(null),
                              LD = (0, pD.useRef)(zD);
                            LD.current = zD;
                            const cD = (0, pD.useRef)(KD);
                            cD.current = KD;
                            const gD = (0, pD.useRef)(null),
                              RD = (0, pD.useRef)(null),
                              AD = (0, pD.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(DD) {
                                let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const wD = [-.5, -.5, -.5],
                                  pD = [.5, .5, .5];
                                let sD = .5;
                                for (let KD = 0; KD < 40; KD++) {
                                  const KD = uw(DD, wD, pD, zD),
                                    rD = Math.max(KD.life / 30, .001);
                                  for (; Fw(KD, DD.gravity, rD);) sD = Math.max(sD, Math.hypot(KD.pos[0], KD.pos[1], KD.pos[2]) + KD.size / 2)
                                }
                                return sD
                              }(zD)))), [zD]),
                              UD = (0, pD.useRef)(AD);
                            return UD.current = AD, (0, pD.useEffect)((() => {
                              if (gD.current = null, !wD) return;
                              const DD = new Image;
                              let zD = !1;
                              return DD.onload = () => {
                                zD || (gD.current = DD)
                              }, DD.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${wD}`)
                              }, DD.src = wD, () => {
                                zD = !0
                              }
                            }), [wD]), (0, pD.useEffect)((() => {
                              var DD;
                              null === (DD = RD.current) || void 0 === DD || DD.call(RD)
                            }), [zD, sD]), (0, pD.useEffect)((() => {
                              const DD = rD.current,
                                zD = null === DD || void 0 === DD ? void 0 : DD.getContext("2d");
                              if (!DD || !zD) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const wD = new Ks;
                              let pD = [],
                                sD = 0,
                                KD = -.7,
                                AD = UD.current,
                                fD = performance.now(),
                                ID = 0,
                                BD = !0,
                                GD = null;
                              const hD = () => {
                                const DD = LD.current,
                                  zD = Math.min(400, Math.max(0, Math.ceil(DD.manualEmitCount)));
                                pD = [];
                                for (let wD = 0; wD < zD; wD++) pD.push(uw(DD, ws, ps, Math.random));
                                sD = 0
                              };
                              RD.current = hD, hD();
                              const nD = rD => {
                                ID = requestAnimationFrame(nD);
                                const RD = Math.min(.05, (rD - fD) / 1e3);
                                if (fD = rD, !BD) return;
                                const MD = window.devicePixelRatio || 1,
                                  OD = Math.round(DD.clientWidth * MD),
                                  JD = Math.round(DD.clientHeight * MD);
                                if (0 === OD || 0 === JD) return;
                                DD.width === OD && DD.height === JD || (DD.width = OD, DD.height = JD);
                                const ED = LD.current;
                                null === GD && (KD += .18 * RD), AD += (UD.current - AD) * Math.min(1, 4 * RD);
                                const QD = .6 * RD;
                                pD = pD.filter((DD => Fw(DD, ED.gravity, QD))), 0 !== pD.length || cD.current || (sD += RD, sD > .6 && hD());
                                const XD = function(DD, zD, wD, pD) {
                                  const sD = 3.2 * pD,
                                    KD = .44 * Math.min(DD, zD) * sD / pD,
                                    rD = Math.cos(wD),
                                    LD = Math.sin(wD),
                                    cD = Math.cos(.42),
                                    gD = Math.sin(.42);
                                  return (wD, pD, RD) => {
                                    const AD = wD * LD + RD * rD,
                                      UD = sD - (pD * gD + AD * cD);
                                    if (UD < .05) return null;
                                    const fD = KD / UD;
                                    return {
                                      x: DD / 2 + (wD * rD - RD * LD) * fD,
                                      y: zD / 2 - (pD * cD - AD * gD) * fD,
                                      scale: fD,
                                      depth: UD
                                    }
                                  }
                                }(OD, JD, KD, AD);
                                ! function(DD, zD, wD, pD, sD) {
                                  const KD = DD.createLinearGradient(0, 0, 0, wD);
                                  KD.addColorStop(0, "#23262d"), KD.addColorStop(1, "#16181c"), DD.globalCompositeOperation = "source-over", DD.globalAlpha = 1, DD.fillStyle = KD, DD.fillRect(0, 0, zD, wD);
                                  const rD = (zD, wD) => {
                                      const sD = pD(zD[0], zD[1], zD[2]),
                                        KD = pD(wD[0], wD[1], wD[2]);
                                      sD && KD && (DD.beginPath(), DD.moveTo(sD.x, sD.y), DD.lineTo(KD.x, KD.y), DD.stroke())
                                    },
                                    LD = Math.ceil(sD) + 1,
                                    cD = ws[1];
                                  DD.lineWidth = 1, DD.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let gD = -LD; gD <= LD; gD++) rD([gD + .5, cD, .5 - LD], [gD + .5, cD, LD + .5]), rD([.5 - LD, cD, gD + .5], [LD + .5, cD, gD + .5]);
                                  DD.strokeStyle = "rgba(255, 255, 255, 0.28)", DD.setLineDash([4, 4]);
                                  for (const gD of ss)
                                    for (const DD of ss) {
                                      const zD = [0, 1, 2].filter((zD => gD[zD] !== DD[zD]));
                                      1 === zD.length && gD[zD[0]] < DD[zD[0]] && rD(gD, DD)
                                    }
                                  DD.setLineDash([])
                                }(zD, OD, JD, XD, AD);
                                const VD = gD.current,
                                  PD = pD.map((DD => ({
                                    particle: DD,
                                    at: XD(DD.pos[0], DD.pos[1], DD.pos[2])
                                  }))).filter((DD => null !== DD.at)).sort(((DD, zD) => zD.at.depth - DD.at.depth));
                                zD.imageSmoothingEnabled = !1;
                                for (const DD of function(DD) {
                                    switch (DD) {
                                      case Zw.f.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case Zw.f.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case Zw.f.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case Zw.f.MultiplyAdd:
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
                                  }(ED.blendMode)) {
                                  zD.globalCompositeOperation = DD.operation;
                                  for (const {
                                      particle: pD,
                                      at: sD
                                    }
                                    of PD) {
                                    const [KD, rD, LD, cD] = tw(pD), gD = Math.max(1, pD.size * sD.scale);
                                    zD.globalAlpha = DD.usesAlpha ? Math.min(1, Math.max(0, cD)) : 1, VD ? zD.drawImage(wD.get(VD, KD, rD, LD), sD.x - gD / 2, sD.y - gD / 2, gD, gD) : (zD.fillStyle = `rgb(${255*KD}, ${255*rD}, ${255*LD})`, zD.fillRect(sD.x - gD / 2, sD.y - gD / 2, gD, gD))
                                  }
                                }
                                zD.globalCompositeOperation = "source-over", zD.globalAlpha = 1
                              };
                              ID = requestAnimationFrame(nD);
                              const MD = new IntersectionObserver((DD => {
                                let [zD] = DD;
                                BD = zD.isIntersecting
                              }));
                              MD.observe(DD);
                              const OD = zD => {
                                  GD = zD.clientX, DD.setPointerCapture(zD.pointerId)
                                },
                                JD = DD => {
                                  null !== GD && (KD += .01 * (DD.clientX - GD), GD = DD.clientX)
                                },
                                ED = () => {
                                  GD = null
                                };
                              return DD.addEventListener("pointerdown", OD), DD.addEventListener("pointermove", JD), DD.addEventListener("pointerup", ED), DD.addEventListener("pointercancel", ED), () => {
                                cancelAnimationFrame(ID), MD.disconnect(), RD.current = null, DD.removeEventListener("pointerdown", OD), DD.removeEventListener("pointermove", JD), DD.removeEventListener("pointerup", ED), DD.removeEventListener("pointercancel", ED)
                              }
                            }), []), (0, ID.jsx)("canvas", {
                              ref: rD,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${zD.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const Ls = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            cs = [{
                              mode: Zw.f.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: Zw.f.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: Zw.f.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: Zw.f.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: Zw.f.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            gs = (0, pD.forwardRef)((function(DD, zD) {
                              var wD, sD;
                              let {
                                textures: rD
                              } = DD;
                              const LD = Op(),
                                cD = (0, pD.useRef)(null),
                                [gD, RD] = (0, pD.useState)(kw),
                                [AD, UD] = (0, pD.useState)("example"),
                                [fD, BD] = (0, pD.useState)(0),
                                [hD, nD] = (0, pD.useState)(!1),
                                OD = DD => {
                                  const zD = "example" === DD ? kw : yw(DD);
                                  zD && (RD(zD), UD(DD))
                                };
                              (0, pD.useImperativeHandle)(zD, (() => ({
                                preview: DD => {
                                  var zD;
                                  OD(DD), null === (zD = cD.current) || void 0 === zD || zD.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const JD = DD => {
                                  RD({
                                    ...gD,
                                    ...DD
                                  }), UD(null)
                                },
                                ED = function(DD, zD) {
                                  if (null !== zD) return `${Dp}    presetId: "${zD}",\n${zp}\n})`;
                                  const wD = DD.velocityGradients.map((DD => `        {\n            timeFraction: ${Yw(DD.timeFraction)},\n            factor: ${Yw(DD.factor)},\n            factor2: ${Yw(DD.factor2)},\n        },`)),
                                    pD = [`    dir1: ${Hw(DD.dir1)},`, `    dir2: ${Hw(DD.dir2)},`, zp, `    texture: "${DD.texture}",`, `    minLifeTime: ${Yw(DD.minLifeTime)},`, `    maxLifeTime: ${Yw(DD.maxLifeTime)},`, `    minEmitPower: ${Yw(DD.minEmitPower)},`, `    maxEmitPower: ${Yw(DD.maxEmitPower)},`, `    minSize: ${Yw(DD.minSize)},`, `    maxSize: ${Yw(DD.maxSize)},`, `    manualEmitCount: ${Yw(DD.manualEmitCount)},`, `    gravity: ${Hw(DD.gravity)},`, `    colorGradients: ${qw(DD.colorGradients,"    ")},`, `    velocityGradients: ${wD.length>0?`[\n${wD.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${Yw(DD.blendMode)},`];
                                  return void 0 !== DD.hideDist && pD.push(`    hideDist: ${Yw(DD.hideDist)},`), `${Dp}${pD.join("\n")}\n})`
                                }(gD, null === AD || "example" === AD ? null : AD),
                                XD = rD.includes(gD.texture) ? rD : [...rD, gD.texture];
                              return (0, ID.jsxs)("section", {
                                ref: cD,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, ID.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, ID.jsxs)("div", {
                                    children: [(0, ID.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, ID.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, ID.jsx)(MD, {
                                    text: ED,
                                    label: "Copy code"
                                  })]
                                }), (0, ID.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, ID.jsx)("button", {
                                    type: "button",
                                    className: KD()("DocsVariantChip", {
                                      Active: "example" === AD
                                    }),
                                    onClick: () => {
                                      OD("example")
                                    },
                                    children: "Example"
                                  }), Ls.filter((DD => null !== yw(DD))).map((DD => (0, ID.jsx)("button", {
                                    type: "button",
                                    className: KD()("DocsVariantChip", {
                                      Active: AD === DD
                                    }),
                                    onClick: () => {
                                      OD(DD)
                                    },
                                    children: DD
                                  }, DD))), (0, ID.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== AD && void 0 !== AD ? AD : "custom",
                                    "aria-label": "Preset",
                                    onChange: DD => {
                                      OD(DD.target.value)
                                    },
                                    children: [(0, ID.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === AD && (0, ID.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), Nw.c.map((DD => (0, ID.jsx)("option", {
                                      value: DD,
                                      children: DD
                                    }, DD)))]
                                  })]
                                }), (0, ID.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, ID.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, ID.jsx)(rs, {
                                      opts: gD,
                                      textureUrl: null !== (wD = null === LD || void 0 === LD ? void 0 : LD.getParticleTextureUrl(gD.texture)) && void 0 !== wD ? wD : null,
                                      burst: fD,
                                      paused: hD
                                    }), (0, ID.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, ID.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          BD(fD + 1)
                                        },
                                        children: [(0, ID.jsx)(GD, {
                                          name: "replay"
                                        }), (0, ID.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, ID.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": hD,
                                        onClick: () => {
                                          nD(!hD)
                                        },
                                        children: [(0, ID.jsx)(GD, {
                                          name: hD ? "play" : "pause"
                                        }), (0, ID.jsx)("span", {
                                          children: hD ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, ID.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, ID.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, ID.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, ID.jsx)("span", {
                                          children: "Texture"
                                        }), (0, ID.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: gD.texture
                                        })]
                                      }), (0, ID.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: XD.map((DD => {
                                          var zD;
                                          const wD = null !== (zD = null === LD || void 0 === LD ? void 0 : LD.getParticleTextureUrl(DD)) && void 0 !== zD ? zD : null;
                                          return (0, ID.jsx)("button", {
                                            type: "button",
                                            className: KD()("DocsParticleTexture", {
                                              Active: gD.texture === DD
                                            }),
                                            title: DD,
                                            "aria-label": DD,
                                            "aria-pressed": gD.texture === DD,
                                            onClick: () => {
                                              JD({
                                                texture: DD
                                              })
                                            },
                                            children: wD ? (0, ID.jsx)("img", {
                                              src: wD,
                                              alt: ""
                                            }) : (0, ID.jsx)(GD, {
                                              name: "image"
                                            })
                                          }, DD)
                                        }))
                                      })]
                                    }), (0, ID.jsx)(Ds, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: gD.manualEmitCount,
                                      onChange: DD => {
                                        JD({
                                          manualEmitCount: DD
                                        })
                                      }
                                    }), (0, ID.jsx)(qp, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: gD.minLifeTime,
                                      high: gD.maxLifeTime,
                                      onChange: (DD, zD) => {
                                        JD({
                                          minLifeTime: DD,
                                          maxLifeTime: zD
                                        })
                                      }
                                    }), (0, ID.jsx)(qp, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: gD.minEmitPower,
                                      high: gD.maxEmitPower,
                                      onChange: (DD, zD) => {
                                        JD({
                                          minEmitPower: DD,
                                          maxEmitPower: zD
                                        })
                                      }
                                    }), (0, ID.jsx)(qp, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: gD.minSize,
                                      high: gD.maxSize,
                                      onChange: (DD, zD) => {
                                        JD({
                                          minSize: DD,
                                          maxSize: zD
                                        })
                                      }
                                    }), (0, ID.jsx)(Ds, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (sD = gD.gravity[1]) && void 0 !== sD ? sD : 0,
                                      onChange: DD => {
                                        var zD, wD;
                                        JD({
                                          gravity: [null !== (zD = gD.gravity[0]) && void 0 !== zD ? zD : 0, DD, null !== (wD = gD.gravity[2]) && void 0 !== wD ? wD : 0]
                                        })
                                      }
                                    }), (0, ID.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, ID.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, ID.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, ID.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: gD.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: DD => {
                                          JD({
                                            blendMode: Number(DD.target.value)
                                          })
                                        },
                                        children: cs.map((DD => {
                                          let {
                                            mode: zD,
                                            label: wD
                                          } = DD;
                                          return (0, ID.jsx)("option", {
                                            value: zD,
                                            children: wD
                                          }, zD)
                                        }))
                                      })]
                                    }), (0, ID.jsx)(zs, {
                                      opts: gD,
                                      onChange: DD => {
                                        JD({
                                          colorGradients: DD
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, ID.jsx)(QD, {
                                  code: ED,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var Rs = wD(4499),
                            As = wD(1895);

                          function Us(DD, zD) {
                            return DD ? Rs.e.includes(zD) ? DD.getIngameIconUrl(zD) : DD.getItemIconUrl(zD) : null
                          }

                          function fs(DD) {
                            var zD, wD, pD;
                            let {
                              part: sD,
                              assets: rD
                            } = DD;
                            const LD = Us(rD, sD.icon),
                              cD = null !== (zD = null === (wD = sD.style) || void 0 === wD ? void 0 : wD.fontSize) && void 0 !== zD ? zD : "1.8em",
                              gD = (0, Wz.Pb)(sD.style);
                            return (0, ID.jsxs)("span", {
                              className: KD()("DocsBloxdTextIcon", {
                                Missing: !LD
                              }),
                              style: {
                                width: cD,
                                height: cD,
                                opacity: null === (pD = sD.style) || void 0 === pD ? void 0 : pD.opacity
                              },
                              title: LD ? void 0 : `No Bloxd icon, item or block is called "${sD.icon}"`,
                              children: [LD && gD && (0, ID.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: gD,
                                  maskImage: `url("${LD}")`,
                                  WebkitMaskImage: `url("${LD}")`
                                }
                              }), LD ? (0, ID.jsx)("img", {
                                src: LD,
                                alt: "",
                                className: KD()({
                                  Tinted: gD
                                })
                              }) : (0, ID.jsx)(GD, {
                                name: "image"
                              })]
                            })
                          }

                          function Is(DD) {
                            let {
                              parts: zD,
                              className: wD
                            } = DD;
                            const pD = Op(),
                              sD = [];
                            let rD = [];
                            const LD = DD => {
                              rD.length > 0 && (sD.push((0, ID.jsx)(As.e, {
                                text: rD
                              }, `run-${DD}`)), rD = [])
                            };
                            return zD.forEach(((DD, zD) => {
                              "icon" !== mz(DD) || Zz(DD.icon) ? rD.push(DD) : (LD(zD), sD.push((0, ID.jsx)(fs, {
                                part: DD,
                                assets: pD
                              }, `icon-${zD}`)))
                            })), LD(zD.length), (0, ID.jsx)("div", {
                              className: KD()("DocsStyledTextPreview", wD),
                              children: sD
                            })
                          }
                          const Bs = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let Gs = null;

                          function hs(DD) {
                            if (Gs ??= document.createElement("canvas").getContext("2d"), !Gs) return "#000000";
                            Gs.fillStyle = "#000000", Gs.fillStyle = DD;
                            const zD = Gs.fillStyle;
                            return zD.startsWith("#") ? zD : "#000000"
                          }

                          function ns(DD) {
                            let {
                              value: zD,
                              label: wD,
                              onChange: pD
                            } = DD;
                            return (0, ID.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, ID.jsx)("input", {
                                type: "color",
                                value: hs(zD),
                                "aria-label": `${wD} picker`,
                                onChange: DD => {
                                  pD(DD.target.value)
                                }
                              }), (0, ID.jsx)("input", {
                                type: "text",
                                value: zD,
                                placeholder: "#ffb914 or gold",
                                "aria-label": wD,
                                spellCheck: !1,
                                onChange: DD => {
                                  pD(DD.target.value)
                                }
                              })]
                            })
                          }

                          function Ms(DD) {
                            let {
                              value: zD,
                              fontAwesomeIcons: wD,
                              onChange: sD
                            } = DD;
                            const rD = Op(),
                              [LD, cD] = (0, pD.useState)(Zz(zD) ? "fontAwesome" : "bloxd"),
                              [gD, RD] = (0, pD.useState)(""),
                              AD = gD.trim().toLowerCase(),
                              UD = "bloxd" === LD ? Rs.e : wD,
                              fD = AD ? UD.filter((DD => DD.toLowerCase().includes(AD))) : UD;
                            return (0, ID.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, ID.jsx)("input", {
                                type: "text",
                                value: zD,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: DD => {
                                  sD(DD.target.value)
                                }
                              }), (0, ID.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, ID.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((DD => (0, ID.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": LD === DD,
                                    className: KD()("DocsVariantChip", {
                                      Active: LD === DD
                                    }),
                                    onClick: () => {
                                      cD(DD)
                                    },
                                    children: "bloxd" === DD ? `Bloxd icons (${Rs.e.length})` : `Font Awesome (${wD.length})`
                                  }, DD))), (0, ID.jsx)("input", {
                                    type: "search",
                                    value: gD,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: DD => {
                                      RD(DD.target.value)
                                    }
                                  })
                                ]
                              }), (0, ID.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [fD.map((DD => {
                                  const wD = "bloxd" === LD ? Us(rD, DD) : null;
                                  return (0, ID.jsx)("button", {
                                    type: "button",
                                    title: DD,
                                    "aria-label": DD,
                                    "aria-pressed": DD === zD,
                                    className: KD()("DocsIconPickerOption", {
                                      Active: DD === zD
                                    }),
                                    onClick: () => {
                                      sD(DD)
                                    },
                                    children: "fontAwesome" === LD ? (0, ID.jsx)(Jw.e, {
                                      name: DD
                                    }) : wD ? (0, ID.jsx)("img", {
                                      src: wD,
                                      alt: ""
                                    }) : (0, ID.jsx)(GD, {
                                      name: "image"
                                    })
                                  }, DD)
                                })), 0 === fD.length && (0, ID.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", gD, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function Os(DD) {
                            let {
                              property: zD,
                              value: wD,
                              fontAwesomeIcons: pD,
                              onChange: sD
                            } = DD;
                            const {
                              field: KD,
                              label: rD
                            } = zD, LD = DD => "" !== DD || zD.isRequired ? DD : void 0;
                            switch (KD.kind) {
                              case "text":
                                return KD.multiline ? (0, ID.jsx)("textarea", {
                                  value: String(null !== wD && void 0 !== wD ? wD : ""),
                                  rows: 2,
                                  "aria-label": rD,
                                  onChange: DD => {
                                    sD(DD.target.value)
                                  }
                                }) : (0, ID.jsx)("input", {
                                  type: "text",
                                  value: String(null !== wD && void 0 !== wD ? wD : ""),
                                  "aria-label": rD,
                                  onChange: DD => {
                                    sD(LD(DD.target.value))
                                  }
                                });
                              case "size":
                                return (0, ID.jsx)("input", {
                                  type: "text",
                                  value: String(null !== wD && void 0 !== wD ? wD : ""),
                                  placeholder: zD.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": rD,
                                  spellCheck: !1,
                                  onChange: DD => {
                                    sD(LD(DD.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, ID.jsx)(ns, {
                                  value: String(null !== wD && void 0 !== wD ? wD : ""),
                                  label: rD,
                                  onChange: DD => {
                                    sD(LD(DD))
                                  }
                                });
                              case "colours": {
                                const DD = Array.isArray(wD) ? wD : [],
                                  zD = DD => {
                                    sD(DD.length > 0 ? DD : void 0)
                                  };
                                return (0, ID.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [DD.map(((wD, pD) => (0, ID.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, ID.jsx)(ns, {
                                      value: wD,
                                      label: `${rD} ${pD+1}`,
                                      onChange: wD => {
                                        zD(DD.map(((DD, zD) => zD === pD ? wD : DD)))
                                      }
                                    }), (0, ID.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${pD+1}`,
                                      onClick: () => {
                                        zD(DD.filter(((DD, zD) => zD !== pD)))
                                      },
                                      children: (0, ID.jsx)(GD, {
                                        name: "cross"
                                      })
                                    })]
                                  }, pD))), (0, ID.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var wD;
                                      zD([...DD, null !== (wD = DD.at(-1)) && void 0 !== wD ? wD : "#ffffff"])
                                    },
                                    children: [(0, ID.jsx)(GD, {
                                      name: "plus"
                                    }), 0 === DD.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var cD;
                                const DD = "number" === typeof wD ? wD : Number(null !== (cD = zD.defaultText) && void 0 !== cD ? cD : 0);
                                return (0, ID.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, ID.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: DD,
                                    "aria-label": rD,
                                    onChange: DD => {
                                      sD(Number(DD.target.value))
                                    }
                                  }), (0, ID.jsx)("output", {
                                    children: DD.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, ID.jsxs)("select", {
                                  value: String(null !== wD && void 0 !== wD ? wD : ""),
                                  "aria-label": rD,
                                  onChange: DD => {
                                    sD(LD(DD.target.value))
                                  },
                                  children: [!zD.isRequired && (0, ID.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", zD.defaultText, ")"]
                                  }), KD.options.map((DD => (0, ID.jsx)("option", {
                                    value: DD,
                                    children: DD
                                  }, DD)))]
                                });
                              case "icon":
                                return (0, ID.jsx)(Ms, {
                                  value: String(null !== wD && void 0 !== wD ? wD : ""),
                                  fontAwesomeIcons: pD,
                                  onChange: sD
                                })
                            }
                          }

                          function Es(DD) {
                            let zD;
                            try {
                              zD = JSON.parse(DD)
                            } catch (wD) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${wD.message}`
                              }
                            }
                            return ww(zD) ? {
                              part: zD,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function Qs(DD) {
                            let {
                              parts: zD,
                              index: wD,
                              fontAwesomeIcons: sD,
                              onChange: KD,
                              hT: rD,
                              onClose: LD
                            } = DD;
                            const cD = (0, pD.useContext)(Iz),
                              RD = (0, pD.useRef)(null),
                              AD = zD[wD],
                              UD = mz(AD),
                              [fD, BD] = (0, pD.useState)((() => JSON.stringify(AD, null, 2))),
                              hD = (0, pD.useMemo)((() => "other" === UD ? Es(fD).error : null), [UD, fD]);
                            (0, pD.useEffect)((() => {
                              var DD;
                              null === (DD = RD.current) || void 0 === DD || DD.focus()
                            }), []);
                            const nD = (0, ID.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: DD => {
                                DD.target === DD.currentTarget && LD()
                              },
                              children: (0, ID.jsxs)("div", {
                                ref: RD,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${wD+1}: ${yz[UD]}`,
                                tabIndex: -1,
                                onKeyDown: DD => {
                                  "Escape" === DD.key ? (DD.stopPropagation(), LD()) : "Tab" === DD.key && RD.current && function(DD, zD) {
                                    const wD = Array.from(DD.querySelectorAll(xz)),
                                      pD = wD[0],
                                      sD = wD.at(-1);
                                    if (!pD || !sD) return;
                                    const KD = document.activeElement;
                                    !zD.shiftKey || KD !== pD && KD !== DD ? zD.shiftKey || KD !== sD || (zD.preventDefault(), pD.focus()) : (zD.preventDefault(), sD.focus())
                                  }(RD.current, DD)
                                },
                                children: [(0, ID.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, ID.jsxs)("div", {
                                    children: [(0, ID.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", wD + 1]
                                    }), (0, ID.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: yz[UD]
                                    })]
                                  }), (0, ID.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: LD,
                                    children: (0, ID.jsx)(GD, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, ID.jsx)(Is, {
                                  parts: zD,
                                  className: "DocsTextDialogPreview"
                                }), (0, ID.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === UD ? (0, ID.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, ID.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, ID.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: fD,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: DD => {
                                        BD(DD.target.value);
                                        const zD = Es(DD.target.value);
                                        null !== zD.part && KD(zD.part)
                                      }
                                    }), hD && (0, ID.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: hD
                                    })]
                                  }) : oz[UD].map((DD => {
                                    const zD = uz(AD, DD.path),
                                      wD = DD.isRequired ? JSON.stringify(tz(AD, DD.path)) === JSON.stringify(AD) : void 0 === zD;
                                    return (0, ID.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, ID.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, ID.jsx)("span", {
                                          children: DD.label
                                        }), (0, ID.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: wD,
                                          "aria-label": `Reset ${DD.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            KD(tz(AD, DD.path))
                                          },
                                          children: [(0, ID.jsx)(GD, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, ID.jsx)(Os, {
                                        property: DD,
                                        value: zD,
                                        fontAwesomeIcons: sD,
                                        onChange: zD => {
                                          KD(vz(AD, DD.path, zD))
                                        }
                                      }), !DD.isRequired && (0, ID.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", DD.defaultText]
                                      })]
                                    }, DD.path.join("."))
                                  }))
                                }), (0, ID.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, ID.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: rD,
                                    children: [(0, ID.jsx)(GD, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, ID.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: LD,
                                    children: "Done"
                                  })]
                                }), (0, ID.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: Bs.map((DD => (0, ID.jsx)("option", {
                                    value: DD
                                  }, DD)))
                                })]
                              })
                            });
                            return cD ? (0, gD.createPortal)(nD, cD) : nD
                          }
                          const Xs = [{
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
                            Vs = Object.keys(kz);

                          function Ps(DD) {
                            let {
                              fontAwesomeIcons: zD
                            } = DD;
                            const [wD, sD] = (0, pD.useState)(Xs[0].parts), [rD, LD] = (0, pD.useState)((() => qz(Xs[0].parts))), [cD, gD] = (0, pD.useState)(null), [RD, AD] = (0, pD.useState)(!1), [UD, fD] = (0, pD.useState)(null), [BD, hD] = (0, pD.useState)(!1), [nD, MD] = (0, pD.useState)(null), OD = (0, pD.useRef)(null), JD = qz(wD);
                            (0, pD.useLayoutEffect)((() => {
                              var DD;
                              if (!nD) return;
                              const zD = DD => {
                                  var zD;
                                  return null === (zD = OD.current) || void 0 === zD ? void 0 : zD.querySelector(`[data-focus-key="${DD}"]`)
                                },
                                wD = zD(nD.key);
                              null === (DD = wD && !wD.disabled ? wD : zD(nD.fallback)) || void 0 === DD || DD.focus(), MD(null)
                            }), [nD]);
                            const ED = DD => {
                                sD(DD), LD(qz(DD)), gD(null)
                              },
                              XD = DD => {
                                ED(wD.filter(((zD, wD) => wD !== DD))), MD({
                                  key: `edit-${Math.min(DD,wD.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              VD = (DD, zD) => {
                                const pD = [...wD],
                                  [sD] = pD.splice(DD, 1);
                                pD.splice(DD + zD, 0, sD), ED(pD);
                                MD({
                                  key: `${zD<0?"up":"down"}-${DD+zD}`,
                                  fallback: `edit-${DD+zD}`
                                })
                              };
                            return (0, ID.jsxs)("section", {
                              ref: OD,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, ID.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, ID.jsxs)("div", {
                                  children: [(0, ID.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, ID.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, ID.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: Xs.map((DD => (0, ID.jsx)("button", {
                                  type: "button",
                                  className: KD()("DocsVariantChip", {
                                    Active: JD === qz(DD.parts)
                                  }),
                                  onClick: () => {
                                    ED(DD.parts)
                                  },
                                  children: DD.label
                                }, DD.label)))
                              }), (0, ID.jsx)(Is, {
                                parts: wD,
                                className: "DocsTextEditorPreview"
                              }), (0, ID.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, ID.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, ID.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, ID.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [wD.map(((DD, zD) => {
                                      const pD = mz(DD);
                                      return (0, ID.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, ID.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${zD}`,
                                          "aria-label": `Edit part ${zD+1}, ${yz[pD]}`,
                                          onClick: () => {
                                            fD(zD)
                                          },
                                          children: [(0, ID.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: yz[pD]
                                          }), (0, ID.jsx)(Is, {
                                            parts: [DD],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== pD && (0, ID.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: Fz(DD)
                                          })]
                                        }), (0, ID.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, ID.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${zD+1} up`,
                                            "data-focus-key": `up-${zD}`,
                                            disabled: 0 === zD,
                                            onClick: () => {
                                              VD(zD, -1)
                                            },
                                            children: (0, ID.jsx)(GD, {
                                              name: "chevron-up"
                                            })
                                          }), (0, ID.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${zD+1} down`,
                                            "data-focus-key": `down-${zD}`,
                                            disabled: zD === wD.length - 1,
                                            onClick: () => {
                                              VD(zD, 1)
                                            },
                                            children: (0, ID.jsx)(GD, {
                                              name: "chevron-down"
                                            })
                                          }), (0, ID.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${zD+1}`,
                                            onClick: () => {
                                              XD(zD)
                                            },
                                            children: (0, ID.jsx)(GD, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, zD)
                                    })), 0 === wD.length && (0, ID.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, ID.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: DD => {
                                      "Escape" === DD.key && BD && (DD.stopPropagation(), hD(!1), MD({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, ID.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": BD,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        hD(!BD)
                                      },
                                      children: [(0, ID.jsx)(GD, {
                                        name: "plus"
                                      }), "Add a part", (0, ID.jsx)(GD, {
                                        name: BD ? "chevron-up" : "chevron-down"
                                      })]
                                    }), BD && (0, ID.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: Vs.map((DD => (0, ID.jsx)("li", {
                                        children: (0, ID.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (DD => {
                                              ED([...wD, kz[DD]]), hD(!1), fD(wD.length)
                                            })(DD)
                                          },
                                          children: yz[DD]
                                        })
                                      }, DD)))
                                    })]
                                  })]
                                }), (0, ID.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, ID.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, ID.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": RD,
                                      onClick: () => {
                                        AD(!RD)
                                      },
                                      children: [(0, ID.jsx)(GD, {
                                        name: RD ? "check" : "pencil"
                                      }), RD ? "Done" : "Edit"]
                                    })]
                                  }), RD ? (0, ID.jsxs)(ID.Fragment, {
                                    children: [(0, ID.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: rD,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: DD => {
                                        LD(DD.target.value);
                                        const zD = pw(DD.target.value);
                                        gD(zD.error), zD.parts && sD(zD.parts)
                                      }
                                    }), cD && (0, ID.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: cD
                                    })]
                                  }) : (0, ID.jsx)(QD, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${JD})`
                                  })]
                                })]
                              }), null !== UD && UD < wD.length && (0, ID.jsx)(Qs, {
                                parts: wD,
                                index: UD,
                                fontAwesomeIcons: zD,
                                onChange: DD => {
                                  ((DD, zD) => {
                                    ED(wD.map(((wD, pD) => pD === DD ? zD : wD)))
                                  })(UD, DD)
                                },
                                hT: () => {
                                  XD(UD), fD(null)
                                },
                                onClose: () => {
                                  fD(null), MD({
                                    key: `edit-${UD}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var Cs = wD(4866),
                            xs = wD(4849),
                            Ts = wD(4859),
                            bs = wD(4872);
                          const ds = 40,
                            Ss = 800,
                            is = 150,
                            ls = 8e3,
                            Ws = 2e3;

                          function Ns(DD, zD) {
                            return 12 * Math.log2(zD / DD)
                          }

                          function Zs(DD, zD) {
                            return Math.round(DD * 2 ** (zD / 12) * 10) / 10
                          }

                          function ys(DD) {
                            return `${DD} ms`
                          }

                          function ks(DD) {
                            return `${DD} st`
                          }
                          const ms = [{
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

                          function es(DD) {
                            let {
                              synth: zD,
                              onChange: wD
                            } = DD;
                            const pD = (0, Cs.i)(zD);
                            return (0, ID.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, ID.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, ID.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, ID.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, ID.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, ID.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, ID.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: Cs.g.map((DD => (0, ID.jsx)("button", {
                                      type: "button",
                                      className: KD()("DocsVariantChip", {
                                        Active: zD.waveform === DD
                                      }),
                                      "aria-pressed": zD.waveform === DD,
                                      onClick: () => {
                                        wD({
                                          waveform: DD
                                        })
                                      },
                                      children: DD
                                    }, DD)))
                                  })]
                                }), (0, ID.jsx)(Ds, {
                                  label: "Pitch",
                                  min: 0,
                                  max: Ns(ds, Ss),
                                  step: .1,
                                  value: Ns(ds, zD.pitchHz),
                                  format: () => `${zD.pitchHz} Hz`,
                                  onChange: DD => {
                                    wD({
                                      pitchHz: Zs(ds, DD)
                                    })
                                  }
                                }), (0, ID.jsx)(Ds, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: zD.syllableMs,
                                  format: ys,
                                  onChange: DD => {
                                    wD({
                                      syllableMs: DD
                                    })
                                  }
                                }), (0, ID.jsx)(Ds, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: zD.volume,
                                  onChange: DD => {
                                    wD({
                                      volume: DD
                                    })
                                  }
                                })]
                              }), (0, ID.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, ID.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, ID.jsx)(Ds, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: zD.durationMs,
                                  format: ys,
                                  onChange: DD => {
                                    wD({
                                      durationMs: DD
                                    })
                                  }
                                }), (0, ID.jsx)(Ds, {
                                  label: "Fade in",
                                  min: 0,
                                  max: pD.durationMs,
                                  step: 1,
                                  value: pD.attackMs,
                                  format: ys,
                                  onChange: DD => {
                                    wD({
                                      attackMs: DD
                                    })
                                  }
                                }), (0, ID.jsx)(Ds, {
                                  label: "Fade out",
                                  min: 0,
                                  max: pD.durationMs - pD.attackMs,
                                  step: 1,
                                  value: pD.releaseMs,
                                  format: ys,
                                  onChange: DD => {
                                    wD({
                                      releaseMs: DD
                                    })
                                  }
                                }), (0, ID.jsx)(Ds, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: zD.glideSemitones,
                                  format: ks,
                                  onChange: DD => {
                                    wD({
                                      glideSemitones: DD
                                    })
                                  }
                                }), (0, ID.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, ID.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== zD.lowpassHz,
                                    onChange: DD => {
                                      wD({
                                        lowpassHz: DD.target.checked ? Ws : null
                                      })
                                    }
                                  }), (0, ID.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== zD.lowpassHz && (0, ID.jsx)(Ds, {
                                  label: "Filter",
                                  min: 0,
                                  max: Ns(is, ls),
                                  step: .1,
                                  value: Ns(is, zD.lowpassHz),
                                  format: () => `${zD.lowpassHz} Hz`,
                                  onChange: DD => {
                                    wD({
                                      lowpassHz: Zs(is, DD)
                                    })
                                  }
                                })]
                              }), (0, ID.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, ID.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), ms.map((DD => {
                                  let {
                                    key: pD,
                                    label: sD,
                                    max: KD
                                  } = DD;
                                  return (0, ID.jsx)(Ds, {
                                    label: sD,
                                    min: 0,
                                    max: KD,
                                    step: .1,
                                    value: zD.intonation[pD],
                                    format: ks,
                                    onChange: DD => {
                                      wD({
                                        intonation: {
                                          ...zD.intonation,
                                          [pD]: DD
                                        }
                                      })
                                    }
                                  }, pD)
                                }))]
                              })]
                            })
                          }
                          const os = Object.keys(Cs.h),
                            as = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function us(DD) {
                            var zD;
                            const wD = JSON.stringify((0, Cs.i)(DD));
                            return null !== (zD = os.find((DD => JSON.stringify((0, Cs.i)(Cs.h[DD])) === wD))) && void 0 !== zD ? zD : null
                          }

                          function vs(DD) {
                            let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof DD || null === DD) return JSON.stringify(DD);
                            return `{\n${Object.entries(DD).map((DD=>{let[wD,pD]=DD;return`${zD}    ${wD}: ${vs(pD,`${zD}    `)},`})).join("\n")}\n${zD}}`
                          }

                          function ts(DD, zD, wD) {
                            const pD = us(DD),
                              sD = [`    line: ${JSON.stringify(zD)},`];
                            return wD && sD.push(`    speakerName: ${JSON.stringify(wD)},`), sD.push("    voice,"), `const voice = ${pD?JSON.stringify(pD):vs((0,Cs.i)(DD))}\n\napi.setClientOption(playerId, "dialogue", {\n${sD.join("\n")}\n})`
                          }
                          const Fs = 400,
                            Ys = 90;
                          let Hs = null;

                          function qs(DD, zD, wD) {
                            return Hs ??= new AudioContext, Hs.resume(), (0, bs.d)(Hs, Hs.destination, DD, zD, wD, (() => {}))
                          }

                          function DK() {
                            const [DD, zD] = (0, pD.useState)(Cs.h.regular), [wD, sD] = (0, pD.useState)(as[0]), [rD, LD] = (0, pD.useState)("Innkeeper"), [cD, gD] = (0, pD.useState)(0), RD = Ap((DD => DD.volume)), AD = (0, pD.useRef)(null), UD = (0, pD.useRef)(0), fD = (0, pD.useRef)(0), BD = () => {
                              var DD;
                              null === (DD = AD.current) || void 0 === DD || DD.call(AD), AD.current = null
                            };
                            (0, pD.useEffect)((() => () => {
                              var DD;
                              null === (DD = AD.current) || void 0 === DD || DD.call(AD), window.clearTimeout(UD.current)
                            }), []);
                            const hD = (0, pD.useMemo)((() => ({
                                line: wD,
                                speakerName: rD || void 0,
                                voice: DD
                              })), [wD, rD, DD]),
                              nD = (0, pD.useRef)(hD);
                            nD.current = hD;
                            const OD = us(DD),
                              JD = DD => {
                                window.clearTimeout(UD.current), BD();
                                const {
                                  plan: zD,
                                  synth: wD
                                } = (0, Ts.g)(DD);
                                wD && (AD.current = qs(wD, zD.blips, RD)), gD((DD => DD + 1))
                              },
                              ED = ts(DD, wD, rD);
                            return (0, ID.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, ID.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, ID.jsxs)("div", {
                                  children: [(0, ID.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, ID.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, ID.jsx)(MD, {
                                  text: ED,
                                  label: "Copy code"
                                })]
                              }), (0, ID.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [os.map((DD => (0, ID.jsx)("button", {
                                  type: "button",
                                  className: KD()("DocsVariantChip", {
                                    Active: OD === DD
                                  }),
                                  "aria-pressed": OD === DD,
                                  onClick: () => {
                                    (DD => {
                                      const wD = Cs.h[DD];
                                      zD(wD), JD({
                                        ...hD,
                                        voice: wD
                                      })
                                    })(DD)
                                  },
                                  children: DD
                                }, DD))), !OD && (0, ID.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, ID.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, ID.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, ID.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, ID.jsx)(xs.e, {
                                      display: hD
                                    }, cD)
                                  }), (0, ID.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: DD => {
                                      DD.preventDefault(), JD(hD)
                                    },
                                    children: [(0, ID.jsx)("input", {
                                      value: wD,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: DD => {
                                        sD(DD.target.value)
                                      }
                                    }), (0, ID.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, ID.jsx)(GD, {
                                        name: "play"
                                      }), (0, ID.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, ID.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: as.map((DD => (0, ID.jsx)("button", {
                                      type: "button",
                                      className: KD()("DocsVariantChip", {
                                        Active: wD === DD
                                      }),
                                      onClick: () => {
                                        var zD;
                                        sD(zD = DD), JD({
                                          ...hD,
                                          line: zD
                                        })
                                      },
                                      children: DD
                                    }, DD)))
                                  }), (0, ID.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, ID.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, ID.jsx)("input", {
                                      value: rD,
                                      placeholder: "No name",
                                      onChange: DD => {
                                        LD(DD.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, ID.jsx)(es, {
                                  synth: DD,
                                  onChange: wD => {
                                    const pD = {
                                      ...DD,
                                      ...wD
                                    };
                                    zD(pD);
                                    const sD = {
                                        ...hD,
                                        voice: pD
                                      },
                                      KD = performance.now();
                                    if (KD - fD.current >= Ys) {
                                      fD.current = KD, BD();
                                      const DD = (0, Ts.g)(sD).plan.blips[0];
                                      DD && (AD.current = qs((0, Cs.i)(pD), [{
                                        ...DD,
                                        atMs: 0
                                      }], RD))
                                    }
                                    window.clearTimeout(UD.current), UD.current = window.setTimeout((() => {
                                      JD(nD.current)
                                    }), Fs)
                                  }
                                })]
                              }), (0, ID.jsx)(QD, {
                                code: ED,
                                lang: "ts"
                              })]
                            })
                          }
                          var zK = wD(4884);
                          const wK = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            pK = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            sK = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${pK}`, "g"), zK.o],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, zK.o]
                            ];

                          function KK(DD) {
                            return `${DD.pageId}#${DD.anchor}`
                          }
                          let rK, LK, cK;

                          function gK(DD) {
                            const zD = (0, XD.j)(DD),
                              wD = new Set;
                            for (const [, , pD] of zD.matchAll(XD.d)) {
                              const DD = pD.startsWith("#") ? mD(pD) : null,
                                zD = DD ? KK({
                                  pageId: DD.page.id,
                                  anchor: DD.anchor
                                }) : null;
                              null !== zD && (rK || (rK = new Set(lD.flatMap((DD => xD(DD.layout) ? yD(DD).sections.map((zD => KK({
                                pageId: DD.id,
                                anchor: zD.heading.anchor
                              }))) : [])))), rK).has(zD) && wD.add(zD)
                            }
                            for (const [, , pD] of zD.matchAll(wK)) {
                              const DD = Uz(pD);
                              DD && wD.add(KK(DD))
                            }
                            return wD
                          }

                          function RK(DD, zD) {
                            const wD = new Set,
                              pD = function(DD) {
                                return DD.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(DD);
                            for (const [, sD] of pD.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) wD.add(sD);
                            for (const [sD, KD] of sK)
                              for (const [, DD] of(0, zK.f)(pD, sD, KD)) zD.has(DD) && wD.add(DD);
                            return wD
                          }

                          function AK(DD, zD, wD, pD) {
                            const sD = DD.get(zD);
                            sD ? !pD && sD.some((DD => DD.pageId === wD.pageId)) || sD.push(wD) : DD.set(zD, [wD])
                          }
                          const UK = /^[A-Za-z_$][\w$]*$/;

                          function fK(DD) {
                            return UK.test(DD.name) ? DD.name : "options"
                          }

                          function IK(DD, zD) {
                            const wD = DD.params.map(fK).join(", ");
                            return zD ? `${DD.name} = (${wD}) => {\n\t\n}` : `api.${DD.name}(${wD})`
                          }

                          function BK(DD) {
                            let {
                              method: zD,
                              isCallback: wD
                            } = DD;
                            return (0, ID.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, ID.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [wD ? (0, ID.jsxs)(ID.Fragment, {
                                  children: [(0, ID.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: zD.name
                                  }), (0, ID.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, ID.jsxs)(ID.Fragment, {
                                  children: [(0, ID.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, ID.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: zD.name
                                  }), (0, ID.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), zD.params.map(((DD, wD) => (0, ID.jsxs)(pD.Fragment, {
                                  children: [wD > 0 && (0, ID.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, ID.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${zD.name}-${fK(DD)}`,
                                    children: DD.name
                                  })]
                                }, DD.name))), (0, ID.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: wD ? ") => " : ")"
                                }), wD && !zD.returns && (0, ID.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), zD.returns && zD.returns.type && (0, ID.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!wD && (0, ID.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, ID.jsx)(Vz, {
                                  type: zD.returns.type
                                })]
                              })]
                            })
                          }

                          function GK(DD) {
                            let {
                              title: zD,
                              references: wD
                            } = DD;
                            const sD = (0, pD.useContext)(fz);
                            return (0, ID.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, ID.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: zD
                              }), wD.map((DD => (0, ID.jsx)(rD.e, {
                                to: oD(sD, ND(DD.pageId), DD.anchor),
                                children: DD.label
                              }, `${DD.pageId}#${DD.anchor}`)))]
                            })
                          }

                          function hK(DD) {
                            var zD, wD;
                            let {
                              pageId: pD,
                              anchor: sD
                            } = DD;
                            const KD = KK({
                                pageId: pD,
                                anchor: sD
                              }),
                              rD = null !== (zD = function() {
                                if (!cK) {
                                  cK = new Map;
                                  const pD = new Set(lD.filter((DD => "callbacks" === DD.layout)).flatMap((DD => yD(DD).sections.map((DD => DD.heading.text)))));
                                  for (const sD of lD)
                                    if ("article" === sD.layout || "snippets" === sD.layout)
                                      for (const KD of (0, XD.w)(yD(sD)))
                                        for (const {
                                            code: rD
                                          }
                                          of(0, XD.l)(KD.blocks))
                                          for (const LD of RK(rD, pD)) {
                                            const pD = Az().get(LD);
                                            if (pD) {
                                              var DD, zD, wD;
                                              const rD = {
                                                pageId: sD.id,
                                                anchor: null !== (DD = null === (zD = KD.heading) || void 0 === zD ? void 0 : zD.anchor) && void 0 !== DD ? DD : "",
                                                label: null !== (wD = sD.navTitle) && void 0 !== wD ? wD : sD.title
                                              };
                                              AK(cK, KK(pD), rD, !1)
                                            }
                                          }
                                }
                                return cK
                              }().get(KD)) && void 0 !== zD ? zD : [],
                              LD = null !== (wD = function() {
                                if (!LK) {
                                  LK = new Map;
                                  const DD = ND("changelog");
                                  for (const zD of yD(DD).sections) {
                                    const wD = new Set(zD.blocks.flatMap((DD => [...gK(DD)])));
                                    for (const pD of wD) {
                                      const wD = {
                                        pageId: DD.id,
                                        anchor: zD.heading.anchor,
                                        label: zD.heading.text
                                      };
                                      AK(LK, pD, wD, !0)
                                    }
                                  }
                                }
                                return LK
                              }().get(KD)) && void 0 !== wD ? wD : [];
                            return 0 === rD.length && 0 === LD.length ? null : (0, ID.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [rD.length > 0 && (0, ID.jsx)(GK, {
                                title: "Used in",
                                references: rD
                              }), LD.length > 0 && (0, ID.jsx)(GK, {
                                title: "Changelog",
                                references: LD
                              })]
                            })
                          }

                          function nK(DD) {
                            let {
                              method: zD,
                              pageId: wD,
                              anchor: pD,
                              isCallback: sD
                            } = DD;
                            const KD = sD ? void 0 : Lz().get(zD.name),
                              rD = zD.description.length > 0 || null === KD || void 0 === KD || !KD.description ? zD.description : (0, XD.D)(KD.description);
                            return (0, ID.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, ID.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, ID.jsx)(Rw, {
                                  level: 2,
                                  text: zD.name,
                                  anchor: pD,
                                  className: "DocsCardTitle"
                                }), (0, ID.jsx)(MD, {
                                  text: IK(zD, sD),
                                  label: sD ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, ID.jsx)(BK, {
                                method: zD,
                                isCallback: sD
                              }), KD && null !== KD.deprecation && (0, ID.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, ID.jsx)("strong", {
                                  children: "Deprecated"
                                }), KD.deprecation && (0, ID.jsxs)(ID.Fragment, {
                                  children: [": ", (0, ID.jsx)(Ez, {
                                    text: (LD = KD.deprecation, (0, zK.z)(LD, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, zK.l)("`\\w"), (DD => {
                                      let [zD] = DD;
                                      return Az().has(zD) ? `\`${zD}\`` : zD
                                    })))
                                  })]
                                })]
                              }), rD.length > 0 && (0, ID.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, ID.jsx)(Iw, {
                                  blocks: rD
                                })
                              }), zD.params.length > 0 && (0, ID.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, ID.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, ID.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: zD.params.map((DD => (0, ID.jsxs)("div", {
                                    id: `${zD.name}-${fK(DD)}`,
                                    className: "DocsParam",
                                    children: [(0, ID.jsxs)("dt", {
                                      children: [(0, ID.jsx)("code", {
                                        className: "DocsParamName",
                                        children: DD.name
                                      }), (0, ID.jsx)(Vz, {
                                        type: DD.type
                                      })]
                                    }), DD.description && (0, ID.jsx)("dd", {
                                      children: (0, ID.jsx)(Ez, {
                                        text: DD.description
                                      })
                                    })]
                                  }, DD.name)))
                                })]
                              }), zD.returns && (zD.returns.type || zD.returns.description.length > 0) && (0, ID.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, ID.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, ID.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [zD.returns.type && (0, ID.jsx)(Vz, {
                                    type: zD.returns.type
                                  }), zD.returns.description.length > 0 && (0, ID.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, ID.jsx)(Iw, {
                                      blocks: zD.returns.description
                                    })
                                  })]
                                })]
                              }), (0, ID.jsx)(hK, {
                                pageId: wD,
                                anchor: pD
                              })]
                            });
                            var LD
                          }

                          function MK(DD) {
                            var zD;
                            return null !== DD.defaultValue && "undefined" !== DD.defaultValue ? DD.defaultValue : null !== (zD = DD.example) && void 0 !== zD ? zD : "value"
                          }

                          function OK(DD) {
                            let {
                              setting: zD,
                              pageId: wD,
                              anchor: pD,
                              setterSnippet: sD
                            } = DD;
                            const KD = null === zD.defaultValue ? null : hz(zD.defaultValue);
                            return (0, ID.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, ID.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, ID.jsx)(Rw, {
                                  level: 2,
                                  text: zD.name,
                                  anchor: pD,
                                  className: "DocsCardTitle"
                                }), (0, ID.jsx)(MD, {
                                  text: sD(zD.name, MK(zD)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, ID.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, ID.jsxs)("div", {
                                  children: [(0, ID.jsx)("dt", {
                                    children: "Type"
                                  }), (0, ID.jsx)("dd", {
                                    children: (0, ID.jsx)(Vz, {
                                      type: zD.type
                                    })
                                  })]
                                }), null !== zD.defaultValue && (0, ID.jsxs)("div", {
                                  children: [(0, ID.jsx)("dt", {
                                    children: "Default"
                                  }), (0, ID.jsx)("dd", {
                                    children: (0, ID.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [KD && (0, ID.jsx)(nz, {
                                        colour: KD
                                      }), zD.defaultValue]
                                    })
                                  })]
                                }), null !== zD.example && (0, ID.jsxs)("div", {
                                  children: [(0, ID.jsx)("dt", {
                                    children: "Example"
                                  }), (0, ID.jsx)("dd", {
                                    children: (0, ID.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: zD.example
                                    })
                                  })]
                                })]
                              }), zD.description.length > 0 && (0, ID.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, ID.jsx)(Iw, {
                                  blocks: zD.description
                                })
                              }), (0, ID.jsx)(hK, {
                                pageId: wD,
                                anchor: pD
                              })]
                            })
                          }

                          function JK(DD) {
                            let {
                              section: zD
                            } = DD;
                            return (0, ID.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, ID.jsx)(Rw, {
                                level: 2,
                                text: zD.heading.text,
                                anchor: zD.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, ID.jsx)("div", {
                                className: "DocsProse",
                                children: (0, ID.jsx)(Iw, {
                                  blocks: zD.blocks
                                })
                              })]
                            })
                          }

                          function EK(DD) {
                            let {
                              section: zD
                            } = DD;
                            return (0, ID.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, ID.jsx)(Rw, {
                                level: zD.heading.level,
                                text: zD.heading.text,
                                anchor: zD.heading.anchor
                              }), (0, ID.jsx)(Iw, {
                                blocks: zD.blocks
                              })]
                            })
                          }
                          const QK = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function XK(DD) {
                            let {
                              page: zD,
                              section: wD
                            } = DD;
                            if ("methods" === zD.layout || "callbacks" === zD.layout) return (0, ID.jsx)(nK, {
                              method: Xw(wD),
                              pageId: zD.id,
                              anchor: wD.heading.anchor,
                              isCallback: "callbacks" === zD.layout
                            });
                            if ("settings" === zD.layout) {
                              const DD = function(DD) {
                                const zD = {
                                  name: DD.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const pD of DD.blocks) {
                                  var wD;
                                  if (Qw(pD)) continue;
                                  const DD = "paragraph" === pD.kind ? pD.text.match(Vw) : null;
                                  if (!DD) {
                                    zD.description.push(pD);
                                    continue
                                  }
                                  const sD = null !== (wD = Ew(DD[2])) && void 0 !== wD ? wD : DD[2];
                                  "Type" === DD[1] ? zD.type = sD : "Default" === DD[1] ? zD.defaultValue = sD : "" !== sD && (zD.example = sD)
                                }
                                return zD.type ? zD : null
                              }(wD);
                              if (DD) return (0, ID.jsx)(OK, {
                                setting: DD,
                                pageId: zD.id,
                                anchor: wD.heading.anchor,
                                setterSnippet: zD.setterSnippet
                              })
                            }
                            return "snippets" === zD.layout ? (0, ID.jsx)(JK, {
                              section: wD
                            }) : "changelog" === zD.layout ? (0, ID.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, ID.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, ID.jsx)(Rw, {
                                  level: 2,
                                  text: wD.heading.text,
                                  anchor: wD.heading.anchor
                                })
                              }), (0, ID.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, ID.jsx)(Iw, {
                                  blocks: Pw(wD.blocks)
                                })
                              })]
                            }) : zD.gallery ? (0, ID.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, ID.jsx)(Rw, {
                                level: wD.heading.level,
                                text: wD.heading.text,
                                anchor: wD.heading.anchor
                              }), (0, ID.jsx)(Cp, {
                                kind: zD.gallery,
                                content: yD(zD),
                                blocks: wD.blocks
                              })]
                            }) : (0, ID.jsx)(EK, {
                              section: wD
                            })
                          }

                          function VK(DD) {
                            let {
                              page: zD,
                              onTocChange: wD
                            } = DD;
                            const sD = yD(zD),
                              [KD, rD] = (0, pD.useState)(""),
                              LD = "article" !== zD.layout,
                              cD = hw(zD.gallery) ? zD.gallery : null,
                              gD = null !== cD,
                              RD = KD.trim().toLowerCase(),
                              AD = (0, pD.useRef)(null),
                              UD = (0, pD.useCallback)((DD => {
                                var zD;
                                null === (zD = AD.current) || void 0 === zD || zD.preview(DD)
                              }), []),
                              fD = (0, pD.useMemo)((() => {
                                if (!zD.hasParticlePlayground) return [];
                                const DD = bw(sD.intro).find((DD => "names" === DD.kind && !DD.names.some((DD => null !== yw(DD.name)))));
                                return "names" === (null === DD || void 0 === DD ? void 0 : DD.kind) ? DD.names.map((DD => DD.name)) : []
                              }), [zD, sD]),
                              BD = (0, pD.useMemo)((() => {
                                if (!zD.hasTextPlayground) return [];
                                const DD = sD.sections.flatMap((DD => DD.blocks.flatMap((DD => {
                                  var zD;
                                  return (null !== (zD = Tw(DD)) && void 0 !== zD ? zD : []).flatMap((DD => Zz(DD.name) ? [DD.name] : []))
                                }))));
                                return [...new Set(DD)]
                              }), [zD, sD]),
                              GD = (0, pD.useMemo)((() => RD ? sD.sections.filter((DD => function(DD, zD) {
                                return !!DD.heading.text.toLowerCase().includes(zD) || DD.blocks.some((DD => (0, XD.j)(DD).toLowerCase().includes(zD)))
                              }(DD, RD))) : sD.sections), [sD, RD]),
                              hD = (0, pD.useMemo)((() => function(DD, zD) {
                                return "article" !== DD.layout ? zD.map((DD => ({
                                  anchor: DD.heading.anchor,
                                  text: DD.heading.text,
                                  level: 2
                                }))) : zD.flatMap((DD => {
                                  const zD = DD.blocks.flatMap((DD => "heading" === DD.kind && 3 === DD.level ? [{
                                    anchor: DD.anchor,
                                    text: DD.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: DD.heading.anchor,
                                    text: DD.heading.text,
                                    level: 2
                                  }, ...zD]
                                }))
                              }(zD, GD)), [zD, GD]);
                            return (0, pD.useEffect)((() => {
                              wD(hD)
                            }), [hD, wD]), (0, ID.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, ID.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, ID.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: sD.title || zD.title
                                }), (0, ID.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: zD.summary
                                }), (0, ID.jsx)(Fp, {
                                  page: zD
                                }), LD && (0, ID.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, ID.jsxs)("span", {
                                    children: [(0, ID.jsx)("strong", {
                                      children: sD.sections.length
                                    }), " ", QK[zD.layout]]
                                  })
                                })]
                              }), "" === zD.slug && (0, ID.jsx)(Tp, {}), cD && (0, ID.jsx)(Sp, {
                                kind: cD
                              }, cD), zD.hasParticlePlayground && (0, ID.jsx)(gs, {
                                ref: AD,
                                textures: fD
                              }), !gD && sD.intro.length > 0 && (0, ID.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: zD.gallery ? (0, ID.jsx)(np.Provider, {
                                  value: zD.hasParticlePlayground ? UD : null,
                                  children: (0, ID.jsx)(Cp, {
                                    kind: zD.gallery,
                                    content: sD,
                                    blocks: sD.intro
                                  })
                                }) : (0, ID.jsx)(Iw, {
                                  blocks: Pw(sD.intro)
                                })
                              }), zD.hasTextPlayground && (0, ID.jsx)(Ps, {
                                fontAwesomeIcons: BD
                              }), zD.hasVoicePlayground && (0, ID.jsx)(DK, {}), zD.childPageIds && (0, ID.jsx)(Tp, {
                                cards: zD.childPageIds.map((DD => ({
                                  pageId: DD
                                }))),
                                label: zD.title
                              }), LD && (0, ID.jsx)(Ow, {
                                className: "DocsFilterBar",
                                value: KD,
                                placeholder: `Filter ${sD.sections.length} ${QK[zD.layout]}\u2026`,
                                label: `Filter ${QK[zD.layout]}`,
                                onChange: rD,
                                count: RD ? {
                                  visible: GD.length,
                                  total: sD.sections.length
                                } : null
                              }), !gD && (0, ID.jsxs)("div", {
                                className: `DocsSections Layout-${zD.layout}`,
                                children: [GD.map((DD => (0, ID.jsx)(XK, {
                                  page: zD,
                                  section: DD
                                }, DD.heading.anchor))), 0 === GD.length && (0, ID.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", QK[zD.layout], " match \u201c", KD, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const PK = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function CK(DD) {
                            let {
                              entry: zD,
                              isActive: wD,
                              onNavigate: pD,
                              label: sD,
                              children: rD
                            } = DD;
                            return (0, ID.jsx)("a", {
                              href: `#${zD.anchor}`,
                              "aria-label": sD,
                              className: KD()(`Level${zD.level}`, {
                                Active: wD
                              }),
                              "aria-current": wD ? "location" : void 0,
                              onClick: DD => {
                                DD.preventDefault(), pD(zD.anchor)
                              },
                              children: rD
                            })
                          }

                          function xK(DD) {
                            let {
                              toc: zD,
                              activeAnchor: wD,
                              onNavigate: sD
                            } = DD;
                            const rD = Math.max(0, zD.findIndex((DD => DD.anchor === wD))),
                              LD = (0, pD.useRef)(null),
                              cD = (0, pD.useRef)(!1);
                            (0, pD.useEffect)((() => {
                              var DD, wD;
                              const pD = null === (DD = LD.current) || void 0 === DD ? void 0 : DD.closest(".DocsToc"),
                                sD = null === (wD = LD.current) || void 0 === wD ? void 0 : wD.querySelector(".DocsTimelineNotch.Active");
                              if (!pD || !sD) return;
                              let KD = 0;
                              if (rD === zD.length - 1) KD = pD.scrollHeight;
                              else if (rD > 0) {
                                const DD = pD.getBoundingClientRect(),
                                  zD = sD.getBoundingClientRect();
                                KD = pD.scrollTop + zD.top + zD.height / 2 - (DD.top + pD.clientHeight / 2)
                              }
                              pD.scrollTo({
                                top: KD,
                                behavior: cD.current ? "smooth" : "auto"
                              }), cD.current = !0
                            }), [rD, zD.length]);
                            const gD = [];
                            return zD.forEach(((DD, zD) => {
                              var wD, pD, sD;
                              const KD = function(DD) {
                                  const zD = DD.trim().match(PK);
                                  return zD ? {
                                    day: zD[1],
                                    month: `${zD[2]} ${zD[3]}`
                                  } : null
                                }(DD.text),
                                rD = null !== (wD = null === KD || void 0 === KD ? void 0 : KD.month) && void 0 !== wD ? wD : null;
                              null !== rD && (null === (pD = gD.at(-1)) || void 0 === pD ? void 0 : pD.month) === rD || gD.push({
                                month: rD,
                                entries: []
                              }), gD.at(-1).entries.push({
                                entry: DD,
                                day: null !== (sD = null === KD || void 0 === KD ? void 0 : KD.day) && void 0 !== sD ? sD : null,
                                index: zD
                              })
                            })), (0, ID.jsx)("ol", {
                              ref: LD,
                              className: "DocsTimeline",
                              children: gD.map((DD => {
                                let {
                                  month: zD,
                                  entries: wD
                                } = DD;
                                return (0, ID.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [zD && (0, ID.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: zD
                                  }), (0, ID.jsx)("ol", {
                                    children: wD.map((DD => {
                                      let {
                                        entry: zD,
                                        day: wD,
                                        index: pD
                                      } = DD;
                                      return (0, ID.jsx)("li", {
                                        className: KD()("DocsTimelineNotch", {
                                          Passed: pD < rD,
                                          Active: pD === rD
                                        }),
                                        children: (0, ID.jsx)(CK, {
                                          entry: zD,
                                          isActive: pD === rD,
                                          onNavigate: sD,
                                          label: zD.text,
                                          children: (0, ID.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== wD && void 0 !== wD ? wD : zD.text
                                          })
                                        })
                                      }, zD.anchor)
                                    }))
                                  })]
                                }, wD[0].entry.anchor)
                              }))
                            })
                          }

                          function TK(DD) {
                            let {
                              isChangelog: zD,
                              toc: wD,
                              activeAnchor: pD,
                              onNavigate: sD
                            } = DD;
                            return 0 === wD.length ? null : (0, ID.jsxs)(ID.Fragment, {
                              children: [(0, ID.jsx)("div", {
                                className: "DocsTocTitle",
                                children: zD ? "Updates" : "On this page"
                              }), zD ? (0, ID.jsx)(xK, {
                                toc: wD,
                                activeAnchor: pD,
                                onNavigate: sD
                              }) : (0, ID.jsx)("ul", {
                                children: wD.map((DD => (0, ID.jsx)("li", {
                                  children: (0, ID.jsx)(CK, {
                                    entry: DD,
                                    isActive: DD.anchor === pD,
                                    onNavigate: sD,
                                    children: DD.text.replace(/`/g, "")
                                  })
                                }, DD.anchor)))
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
                            jK = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            dK = 20,
                            SK = 10,
                            iK = 40,
                            lK = 120;
                          let WK;

                          function NK(DD) {
                            const zD = DD.gallery;
                            if (!zD) return [];
                            if (hw(zD)) return function(DD) {
                              return Mw(DD).entries.map((DD => DD.name))
                            }(zD).map((wD => ({
                              page: DD,
                              anchor: dw(zD, wD),
                              title: wD,
                              kind: jK[zD],
                              text: "",
                              listedUnder: DD.title
                            })));
                            const wD = yD(DD);
                            return (0, XD.w)(wD).flatMap((pD => {
                              const sD = pD.heading ? `${DD.title} \u203a ${pD.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : DD.title;
                              return iw(zD, wD, pD.blocks).flatMap((wD => "names" !== wD.kind ? [] : wD.names.map((pD => {
                                const KD = wD.isSongs ? "Song" : jK[zD];
                                return {
                                  page: DD,
                                  anchor: pD.anchor,
                                  title: pD.name,
                                  kind: KD,
                                  text: "",
                                  listedUnder: sD
                                }
                              }))))
                            }))
                          }

                          function ZK(DD, zD, wD) {
                            const pD = DD.title.toLowerCase();
                            let sD = 0;
                            if (pD === zD) sD = 100;
                            else if (pD.startsWith(zD)) sD = 80;
                            else if (pD.includes(zD)) sD = 60;
                            else if (wD.every((DD => pD.includes(DD)))) sD = 45;
                            else {
                              if (!DD.text.toLowerCase().includes(zD)) return 0;
                              sD = 20
                            }
                            return sD - Math.min(pD.length / 10, 9) + ("Page" === DD.kind ? 8 : "Method" === DD.kind ? 3 : 0) - (DD.listedUnder ? dK : 0)
                          }

                          function yK(DD, zD) {
                            const wD = DD.toLowerCase().indexOf(zD),
                              pD = Math.max(0, wD - lK / 3);
                            return `${pD>0?"\u2026":""}${DD.slice(pD,pD+lK)}${pD+lK<DD.length?"\u2026":""}`
                          }

                          function kK(DD) {
                            let {
                              text: zD,
                              query: wD
                            } = DD;
                            const pD = wD ? zD.toLowerCase().indexOf(wD) : -1;
                            return -1 === pD ? (0, ID.jsx)(ID.Fragment, {
                              children: zD
                            }) : (0, ID.jsxs)(ID.Fragment, {
                              children: [zD.slice(0, pD), (0, ID.jsx)("mark", {
                                children: zD.slice(pD, pD + wD.length)
                              }), zD.slice(pD + wD.length)]
                            })
                          }

                          function mK(DD) {
                            let {
                              basePath: zD,
                              onClose: wD
                            } = DD;
                            const sD = (0, LD.w)(),
                              [rD, cD] = (0, pD.useState)(""),
                              [gD, RD] = (0, pD.useState)(0),
                              AD = (0, pD.useRef)(null),
                              UD = (0, pD.useRef)(null),
                              fD = rD.trim().toLowerCase(),
                              BD = (0, pD.useMemo)((() => {
                                const DD = (WK || (WK = lD.flatMap((DD => {
                                  const zD = yD(DD);
                                  return [{
                                    page: DD,
                                    anchor: "",
                                    title: DD.title,
                                    kind: "Page",
                                    text: DD.summary
                                  }, ...zD.sections.flatMap((zD => {
                                    const wD = zD.blocks.filter((DD => "paragraph" === DD.kind)).map(XD.j).join(" ").replace(/[`*]/g, ""),
                                      pD = {
                                        page: DD,
                                        anchor: zD.heading.anchor,
                                        title: zD.heading.text.replace(/`/g, ""),
                                        kind: bK[DD.layout],
                                        text: wD
                                      },
                                      sD = zD.blocks.flatMap((zD => "article" === DD.layout && "heading" === zD.kind && 3 === zD.level ? [{
                                        page: DD,
                                        anchor: zD.anchor,
                                        title: zD.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: pD.title
                                      }] : []));
                                    return [pD, ...sD]
                                  })), ...NK(DD)]
                                }))), WK);
                                if (!fD) return DD.filter((DD => "Page" === DD.kind));
                                const zD = fD.split(/\s+/);
                                let wD = 0;
                                return DD.map((DD => ({
                                  entry: DD,
                                  score: ZK(DD, fD, zD)
                                }))).filter((DD => DD.score > 0)).sort(((DD, zD) => zD.score - DD.score)).filter((DD => !DD.entry.listedUnder || (wD++, wD <= SK))).slice(0, iK).map((DD => DD.entry))
                              }), [fD]);
                            (0, pD.useEffect)((() => {
                              RD(0)
                            }), [fD]), (0, pD.useEffect)((() => {
                              const DD = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === DD || void 0 === DD || DD.focus()
                              }
                            }), []), (0, pD.useEffect)((() => {
                              var DD, zD;
                              null === (DD = AD.current) || void 0 === DD || null === (zD = DD.querySelector(".Active")) || void 0 === zD || zD.scrollIntoView({
                                block: "nearest"
                              })
                            }), [gD]);
                            const hD = DD => {
                              sD(oD(zD, DD.page, DD.anchor)), wD()
                            };
                            return (0, ID.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: DD => {
                                DD.target === DD.currentTarget && wD()
                              },
                              children: (0, ID.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: DD => {
                                  DD.target !== UD.current && DD.preventDefault()
                                },
                                onKeyDown: DD => {
                                  if ("Escape" === DD.key) wD();
                                  else if ("Tab" === DD.key) {
                                    var zD;
                                    DD.preventDefault(), null === (zD = UD.current) || void 0 === zD || zD.focus()
                                  }
                                },
                                children: [(0, ID.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, ID.jsx)(GD, {
                                    name: "magnifying-glass"
                                  }), (0, ID.jsx)("input", {
                                    ref: UD,
                                    autoFocus: !0,
                                    value: rD,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": BD.length > 0 ? `DocsSearchResult-${gD}` : void 0,
                                    onChange: DD => {
                                      cD(DD.target.value)
                                    },
                                    onKeyDown: DD => {
                                      if ("ArrowDown" === DD.key || "ArrowUp" === DD.key) {
                                        DD.preventDefault();
                                        const zD = "ArrowDown" === DD.key ? 1 : -1;
                                        RD((gD + zD + BD.length) % Math.max(BD.length, 1))
                                      } else "Enter" === DD.key && BD[gD] && hD(BD[gD])
                                    }
                                  }), (0, ID.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, ID.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: AD,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!fD && (0, ID.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), BD.map(((DD, zD) => {
                                    var wD;
                                    return (0, ID.jsxs)("li", {
                                      id: `DocsSearchResult-${zD}`,
                                      role: "option",
                                      "aria-selected": zD === gD,
                                      className: KD()("DocsSearchResult", {
                                        Active: zD === gD
                                      }),
                                      onMouseMove: () => {
                                        RD(zD)
                                      },
                                      onClick: () => {
                                        hD(DD)
                                      },
                                      children: [(0, ID.jsx)(GD, {
                                        name: DD.page.icon
                                      }), (0, ID.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, ID.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, ID.jsx)(kK, {
                                            text: DD.title,
                                            query: fD
                                          })
                                        }), DD.text && (0, ID.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, ID.jsx)(kK, {
                                            text: yK(DD.text, fD),
                                            query: fD
                                          })
                                        })]
                                      }), (0, ID.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === DD.kind ? "Page" : null !== (wD = DD.listedUnder) && void 0 !== wD ? wD : `${DD.kind} \xb7 ${DD.page.title}`
                                      })]
                                    }, `${DD.page.id}#${DD.anchor}`)
                                  })), fD && 0 === BD.length && (0, ID.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", rD, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function eK(DD, zD) {
                            if (zD < 10) return `${DD.toFixed(1)}s`;
                            const wD = Math.floor(DD);
                            return `${Math.floor(wD/60)}:${String(wD%60).padStart(2,"0")}`
                          }

                          function oK() {
                            const DD = Ap((DD => DD.track)),
                              zD = Ap((DD => DD.volume)),
                              [wD, sD] = (0, pD.useState)(0),
                              rD = (0, pD.useRef)(wp);
                            if ((0, pD.useEffect)((() => {
                                if (!DD) return;
                                if (sD(Bp()), "playing" !== DD.status) return;
                                let zD = 0;
                                const wD = () => {
                                  sD(Bp()), zD = requestAnimationFrame(wD)
                                };
                                return zD = requestAnimationFrame(wD), () => {
                                  cancelAnimationFrame(zD)
                                }
                              }), [DD]), !DD) return null;
                            const LD = "paused" !== DD.status,
                              cD = Math.min(wD, DD.duration);
                            return (0, ID.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, ID.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, ID.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": LD ? `Pause ${DD.name}` : `Play ${DD.name}`,
                                  onClick: Ip,
                                  children: (0, ID.jsx)(GD, {
                                    name: LD ? "pause" : "play"
                                  })
                                }), (0, ID.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, ID.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, ID.jsx)("code", {
                                      children: DD.name
                                    }), (0, ID.jsx)("span", {
                                      children: DD.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, ID.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, ID.jsx)("span", {
                                      children: eK(cD, DD.duration)
                                    }), (0, ID.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: DD.duration || 1,
                                      step: .01,
                                      value: cD,
                                      disabled: 0 === DD.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${eK(cD,DD.duration)} of ${eK(DD.duration,DD.duration)}`,
                                      onChange: DD => {
                                        const zD = Number(DD.target.value);
                                        ! function(DD) {
                                          var zD;
                                          Lp = DD, null === (zD = Kp) || void 0 === zD || zD.seek(DD)
                                        }(zD), sD(zD)
                                      }
                                    }), (0, ID.jsx)("span", {
                                      children: DD.duration > 0 ? eK(DD.duration, DD.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, ID.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, ID.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === zD ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === zD ? Gp(rD.current) : (rD.current = zD, Gp(0))
                                    },
                                    children: (0, ID.jsx)(GD, {
                                      name: "volume",
                                      className: KD()({
                                        Muted: 0 === zD
                                      })
                                    })
                                  }), (0, ID.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: zD,
                                    "aria-label": "Volume",
                                    onChange: DD => {
                                      Gp(Number(DD.target.value))
                                    }
                                  })]
                                }), (0, ID.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var zD;
                                    null === (zD = document.querySelector(`[data-docs-track="${CSS.escape(pp(DD.name,DD.isSong))}"]`)) || void 0 === zD || zD.focus(), hp()
                                  },
                                  children: (0, ID.jsx)(GD, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var aK = wD(35);
                          const uK = "docsTheme",
                            vK = window.matchMedia("(prefers-color-scheme: light)");

                          function tK(DD) {
                            let {
                              theme: zD,
                              onChange: wD
                            } = DD;
                            const pD = "dark" === zD ? "light" : "dark";
                            return (0, ID.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${pD} theme`,
                              title: `Switch to ${pD} theme`,
                              onClick: () => {
                                wD(pD)
                              },
                              children: (0, ID.jsx)(GD, {
                                name: "dark" === zD ? "moon" : "sun"
                              })
                            })
                          }
                          const FK = "https://github.com/Bloxdy/code-api",
                            YK = "https://discord.gg/playbloxd",
                            HK = 180,
                            qK = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function Dr(DD) {
                            let {
                              basePath: zD,
                              activePageId: wD,
                              onNavigate: pD
                            } = DD;
                            return (0, ID.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: WD.map((DD => (0, ID.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, ID.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: DD.title
                                }), DD.pageIds.map((DD => {
                                  var sD;
                                  const LD = ND(DD);
                                  return (0, ID.jsxs)(rD.e, {
                                    to: oD(zD, LD),
                                    className: KD()("DocsNavLink", {
                                      Active: LD.id === wD
                                    }),
                                    "aria-current": LD.id === wD ? "page" : void 0,
                                    onClick: pD,
                                    children: [(0, ID.jsx)(GD, {
                                      name: LD.icon
                                    }), (0, ID.jsx)("span", {
                                      children: null !== (sD = LD.navTitle) && void 0 !== sD ? sD : LD.title
                                    })]
                                  }, LD.id)
                                }))]
                              }, DD.title)))
                            })
                          }

                          function zr(DD) {
                            let {
                              basePath: zD,
                              pageId: wD
                            } = DD;
                            const pD = WD.flatMap((DD => DD.pageIds)),
                              sD = pD.indexOf(wD),
                              KD = sD > 0 ? ND(pD[sD - 1]) : null,
                              LD = sD < pD.length - 1 ? ND(pD[sD + 1]) : null;
                            return (0, ID.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [KD ? (0, ID.jsxs)(rD.e, {
                                className: "DocsPagerLink Previous",
                                to: oD(zD, KD),
                                children: [(0, ID.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, ID.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: KD.title
                                })]
                              }) : (0, ID.jsx)("span", {}), LD && (0, ID.jsxs)(rD.e, {
                                className: "DocsPagerLink Next",
                                to: oD(zD, LD),
                                children: [(0, ID.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, ID.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: LD.title
                                })]
                              })]
                            })
                          }

                          function wr(DD) {
                            let {
                              basePath: zD,
                              embedded: wD = !1
                            } = DD;
                            const {
                              pageSlug: sD = ""
                            } = (0, LD.C)(), gD = (0, LD.s)(), RD = (0, LD.w)(), AD = (UD = sD, lD.find((DD => DD.slug === UD)));
                            var UD;
                            const [fD, BD] = function() {
                              const [DD, zD] = (0, pD.useState)((() => {
                                const DD = aK.h.getItem(uK);
                                return "dark" === DD || "light" === DD ? DD : null
                              })), [wD, sD] = (0, pD.useState)(vK.matches ? "light" : "dark");
                              return (0, pD.useEffect)((() => {
                                const DD = () => {
                                  sD(vK.matches ? "light" : "dark")
                                };
                                return vK.addEventListener("change", DD), () => {
                                  vK.removeEventListener("change", DD)
                                }
                              }), []), [null !== DD && void 0 !== DD ? DD : wD, DD => {
                                aK.h.setItem(uK, DD), zD(DD)
                              }]
                            }(), [hD, nD] = (0, pD.useState)(null), [MD, OD] = (0, pD.useState)(!1), [JD, ED] = (0, pD.useState)(!1), [QD, VD] = (0, pD.useState)([]), PD = function(DD, zD) {
                              const [wD, sD] = (0, pD.useState)("");
                              return (0, pD.useEffect)((() => {
                                if (!zD) return;
                                let wD = 0;
                                const pD = () => {
                                    var pD, KD;
                                    wD = 0;
                                    const rD = zD.getBoundingClientRect().top + HK;
                                    let LD = null !== (pD = null === (KD = DD[0]) || void 0 === KD ? void 0 : KD.anchor) && void 0 !== pD ? pD : "";
                                    for (const zD of DD) {
                                      const DD = document.getElementById(zD.anchor);
                                      DD && DD.getBoundingClientRect().top <= rD && (LD = zD.anchor)
                                    }
                                    zD.scrollTop + zD.clientHeight >= zD.scrollHeight - 2 && zD.scrollTop > 0 && DD.length > 0 && (LD = DD[DD.length - 1].anchor), sD(LD)
                                  },
                                  KD = () => {
                                    wD || (wD = requestAnimationFrame(pD))
                                  };
                                return pD(), zD.addEventListener("scroll", KD, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(wD), zD.removeEventListener("scroll", KD)
                                }
                              }), [DD, zD]), wD
                            }(QD, hD), CD = "" === sD && gD.hash ? function(DD) {
                              const zD = (0, XD.r)(DD);
                              if (kD(ND("welcome"), zD)) return null;
                              const wD = Object.hasOwn(eD, zD) ? eD[zD] : null;
                              if (wD) return {
                                page: ND(wD.pageId),
                                anchor: wD.anchor
                              };
                              const pD = ND("readme");
                              return kD(pD, zD) ? {
                                page: pD,
                                anchor: zD
                              } : mD(`#${zD}`)
                            }(gD.hash) : null;
                            (0, pD.useEffect)((() => (cD.e.set({
                              musicOnFromPage: !1
                            }), () => {
                              cD.e.set({
                                musicOnFromPage: !0
                              }), hp()
                            })), []), (0, pD.useEffect)((() => {
                              const DD = DD => {
                                const zD = DD.target;
                                if (zD.closest(".DocsTextDialog")) return;
                                const wD = zD.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(zD.tagName);
                                "k" === DD.key && (DD.metaKey || DD.ctrlKey) || "/" === DD.key && !wD ? (DD.preventDefault(), ED(!0)) : "Escape" === DD.key && OD(!1)
                              };
                              return window.addEventListener("keydown", DD), () => {
                                window.removeEventListener("keydown", DD)
                              }
                            }), []);
                            const xD = (0, pD.useRef)(null);
                            (0, pD.useLayoutEffect)((() => {
                              var DD, zD;
                              if (!hD) return;
                              const wD = xD.current === gD.pathname;
                              xD.current = gD.pathname;
                              const pD = (0, XD.r)(gD.hash),
                                sD = pD ? document.getElementById(pD) : null;
                              if (null === (DD = hD.querySelector(".DocsTargeted")) || void 0 === DD || DD.classList.remove("DocsTargeted"), null === sD || void 0 === sD || null === (zD = sD.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === zD || zD.classList.add("DocsTargeted"), sD) {
                                var KD;
                                const DD = sD.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (KD = sD.closest(".DocsChangelogEntry")) && void 0 !== KD ? KD : sD).scrollIntoView({
                                  block: DD ? "center" : "start",
                                  behavior: wD ? "smooth" : "auto"
                                })
                              } else wD || hD.scrollTo({
                                top: 0
                              })
                            }), [hD, gD.pathname, gD.hash, gD.key]);
                            const TD = (0, pD.useCallback)((() => {
                                OD(!1)
                              }), []),
                              bD = (0, pD.useCallback)((DD => {
                                RD({
                                  hash: DD
                                })
                              }), [RD]);
                            if (CD) return (0, ID.jsx)(LD.b, {
                              replace: !0,
                              to: oD(zD, CD.page, CD.anchor)
                            });
                            if (!AD) return (0, ID.jsx)(LD.b, {
                              replace: !0,
                              to: zD
                            });
                            const jD = wD ? "div" : "main";
                            return (0, ID.jsx)(fz.Provider, {
                              value: zD,
                              children: (0, ID.jsx)(Iz.Provider, {
                                value: hD,
                                children: (0, ID.jsxs)("div", {
                                  ref: nD,
                                  className: KD()("DocsSite", {
                                    Embedded: wD,
                                    NavOpen: MD
                                  }),
                                  "data-theme": fD,
                                  children: [(0, ID.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, ID.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": MD ? "Close menu" : "Open menu",
                                      "aria-expanded": MD,
                                      onClick: () => {
                                        OD(!MD)
                                      },
                                      children: (0, ID.jsx)(GD, {
                                        name: MD ? "cross" : "menu"
                                      })
                                    }), (0, ID.jsxs)(rD.e, {
                                      to: zD,
                                      className: "DocsBrand",
                                      children: [(0, ID.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, ID.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, ID.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, ID.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        ED(!0)
                                      },
                                      children: [(0, ID.jsx)(GD, {
                                        name: "magnifying-glass"
                                      }), (0, ID.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, ID.jsxs)("kbd", {
                                        children: [qK ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, ID.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, ID.jsxs)("a", {
                                        href: YK,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, ID.jsx)(GD, {
                                          name: "discord"
                                        }), (0, ID.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, ID.jsxs)("a", {
                                        href: FK,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, ID.jsx)(GD, {
                                          name: "external-link"
                                        }), (0, ID.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !wD && (0, ID.jsxs)(rD.e, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, ID.jsx)(GD, {
                                          name: "play"
                                        }), (0, ID.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, ID.jsx)(tK, {
                                        theme: fD,
                                        onChange: BD
                                      })]
                                    })]
                                  }), (0, ID.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, ID.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, ID.jsx)(Dr, {
                                        basePath: zD,
                                        activePageId: AD.id,
                                        onNavigate: TD
                                      })
                                    }), (0, ID.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: TD
                                    }), (0, ID.jsxs)(jD, {
                                      className: "DocsMain",
                                      children: [(0, ID.jsx)(VK, {
                                        page: AD,
                                        onTocChange: VD
                                      }, AD.id), (0, ID.jsx)(zr, {
                                        basePath: zD,
                                        pageId: AD.id
                                      })]
                                    }), (0, ID.jsx)("aside", {
                                      className: KD()("DocsToc", {
                                        Timeline: "changelog" === AD.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, ID.jsx)(TK, {
                                        isChangelog: "changelog" === AD.layout,
                                        toc: QD,
                                        activeAnchor: PD,
                                        onNavigate: bD
                                      })
                                    })]
                                  }), (0, ID.jsx)(oK, {}), JD && (0, ID.jsx)(mK, {
                                    basePath: zD,
                                    onClose: () => {
                                      ED(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4768: (DD, zD, wD) => {
                          wD.d(zD, {
                            A: () => fD,
                            D: () => UD,
                            d: () => pD,
                            f: () => rD,
                            j: () => GD,
                            l: () => BD,
                            o: () => LD,
                            r: () => sD,
                            v: () => KD,
                            w: () => ID
                          });
                          const pD = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function sD(DD) {
                            try {
                              return decodeURIComponent(DD.slice(1))
                            } catch {
                              return DD.slice(1)
                            }
                          }

                          function KD(DD) {
                            return DD.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const rD = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${pD.source}`, "g");

                          function LD(DD, zD) {
                            return 2 === DD.length ? zD.replace(/^ (.*) $/, "$1") : zD
                          }

                          function cD(DD) {
                            return "" === DD.trim()
                          }

                          function gD(DD) {
                            const zD = [];
                            for (const wD of DD.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) zD.length > 0 && zD[zD.length - 1].endsWith("\\") ? zD[zD.length - 1] += `|${wD}` : zD.push(wD);
                            return zD.map((DD => DD.trim().replaceAll("\\|", "|")))
                          }
                          const RD = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function AD(DD) {
                            const zD = [],
                              wD = [{
                                indent: -1,
                                items: zD
                              }];
                            let pD = null;
                            for (const sD of DD) {
                              const DD = sD.match(RD);
                              if (!DD) {
                                pD && (pD.text += ` ${sD.trim()}`);
                                continue
                              }
                              const zD = DD[1].replace(/\t/g, "  ").length;
                              for (; zD <= wD[wD.length - 1].indent;) wD.pop();
                              pD = {
                                text: DD[3].trim(),
                                children: []
                              }, wD[wD.length - 1].items.push(pD), wD.push({
                                indent: zD,
                                items: pD.children
                              })
                            }
                            return zD
                          }

                          function UD(DD) {
                            const zD = DD.replace(/\r\n/g, "\n").split("\n"),
                              wD = [];
                            let pD = 0;
                            for (; pD < zD.length;) {
                              const DD = zD[pD];
                              if (cD(DD)) {
                                pD++;
                                continue
                              }
                              const sD = DD.match(/^\s*```\s*(\w*)\s*$/);
                              if (sD) {
                                const DD = [];
                                for (pD++; pD < zD.length && !/^\s*```\s*$/.test(zD[pD]);) DD.push(zD[pD]), pD++;
                                pD++, wD.push({
                                  kind: "code",
                                  lang: sD[1] || "text",
                                  code: DD.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const rD = DD.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (rD) {
                                const DD = rD[2].trim();
                                wD.push({
                                  kind: "heading",
                                  level: rD[1].length,
                                  text: DD,
                                  anchor: KD(DD)
                                }), pD++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(DD)) {
                                wD.push({
                                  kind: "rule"
                                }), pD++;
                                continue
                              }
                              if (DD.trim().startsWith("|") && pD + 1 < zD.length && /^\s*\|[\s:|-]+\|\s*$/.test(zD[pD + 1])) {
                                const sD = gD(DD),
                                  KD = [];
                                for (pD += 2; pD < zD.length && zD[pD].trim().startsWith("|");) KD.push(gD(zD[pD])), pD++;
                                wD.push({
                                  kind: "table",
                                  header: sD,
                                  rows: KD
                                });
                                continue
                              }
                              if (DD.startsWith(">")) {
                                const DD = [];
                                for (; pD < zD.length && zD[pD].startsWith(">");) DD.push(zD[pD].replace(/^>\s?/, "")), pD++;
                                wD.push({
                                  kind: "quote",
                                  blocks: UD(DD.join("\n"))
                                });
                                continue
                              }
                              if (RD.test(DD)) {
                                const sD = [],
                                  KD = /^\s*\d+\./.test(DD);
                                for (; pD < zD.length && !cD(zD[pD]) && (RD.test(zD[pD]) || /^\s+\S/.test(zD[pD]));) sD.push(zD[pD]), pD++;
                                wD.push({
                                  kind: "list",
                                  ordered: KD,
                                  items: AD(sD)
                                });
                                continue
                              }
                              const LD = [];
                              for (; pD < zD.length && !cD(zD[pD]) && !/^\s*```/.test(zD[pD]) && !/^#{1,6}\s/.test(zD[pD]) && !zD[pD].startsWith(">") && !RD.test(zD[pD]) && (!zD[pD].trim().startsWith("|") || 0 !== LD.length);) LD.push(zD[pD].trim()), pD++;
                              0 === LD.length && (LD.push(zD[pD].trim()), pD++), wD.push({
                                kind: "paragraph",
                                text: LD.join(" ")
                              })
                            }
                            return wD
                          }

                          function fD(DD) {
                            let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const wD = UD(DD);
                            let pD = "";
                            const sD = [],
                              KD = [],
                              rD = new Map;
                            for (const gD of wD) {
                              if ("heading" === gD.kind) {
                                var LD;
                                const DD = (null !== (LD = rD.get(gD.anchor)) && void 0 !== LD ? LD : 0) + 1;
                                rD.set(gD.anchor, DD), DD > 1 && (gD.anchor = `${gD.anchor}-${DD}`)
                              }
                              if ("heading" === gD.kind && 1 === gD.level && !pD) {
                                pD = gD.text;
                                continue
                              }
                              if ("heading" === gD.kind && gD.level <= zD) {
                                KD.push({
                                  heading: gD,
                                  blocks: []
                                });
                                continue
                              }
                              const DD = KD.at(-1);
                              DD ? DD.blocks.push(gD) : sD.push(gD)
                            }
                            const cD = DD => {
                              for (;
                                "rule" === (null === (zD = DD.at(-1)) || void 0 === zD ? void 0 : zD.kind);) {
                                var zD;
                                DD.pop()
                              }
                            };
                            cD(sD);
                            for (const gD of KD) cD(gD.blocks);
                            return {
                              title: pD,
                              intro: sD,
                              sections: KD
                            }
                          }

                          function ID(DD) {
                            return [{
                              heading: null,
                              blocks: DD.intro
                            }, ...DD.sections.map((DD => ({
                              heading: DD.heading,
                              blocks: DD.blocks
                            })))]
                          }

                          function BD(DD) {
                            return DD.flatMap((DD => "code" === DD.kind ? [DD] : "quote" === DD.kind ? BD(DD.blocks) : []))
                          }

                          function GD(DD) {
                            switch (DD.kind) {
                              case "heading":
                              case "paragraph":
                                return DD.text;
                              case "code":
                                return DD.code;
                              case "table":
                                return [DD.header, ...DD.rows].map((DD => DD.join(" "))).join(" ");
                              case "list": {
                                const zD = DD => DD.map((DD => `${DD.text} ${zD(DD.children)}`)).join(" ");
                                return zD(DD.items)
                              }
                              case "quote":
                                return DD.blocks.map(GD).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4852: (DD, zD, wD) => {
                          wD.d(zD, {
                            d: () => LD
                          });
                          var pD = wD(58),
                            sD = wD(338),
                            KD = wD(1915),
                            rD = wD(1096);

                          function LD(DD) {
                            let {
                              text: zD
                            } = DD;
                            const wD = [];
                            let LD = "";
                            return (0, sD.Vb)(zD).forEach(((DD, zD) => {
                              if ("string" === typeof DD || !(0, KD.f)(DD.icon)) return void(LD += "string" === typeof DD ? DD : DD.icon);
                              const sD = Math.max(0, LD.trimEnd().search(/\S{1,12}$/));
                              wD.push((0, rD.jsxs)(pD.Fragment, {
                                children: [LD.slice(0, sD), (0, rD.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [LD.slice(sD), (0, rD.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": DD.icon,
                                    children: (0, rD.jsx)(KD.d, {
                                      itemName: DD.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, zD)), LD = ""
                            })), wD.push(LD), (0, rD.jsx)(rD.Fragment, {
                              children: wD
                            })
                          }
                        }, 4785: (DD, zD, wD) => {
                          wD.d(zD, {
                            h: () => nD,
                            d: () => hD
                          });
                          var pD = wD(58),
                            sD = wD(1442),
                            KD = wD(1895),
                            rD = wD(4787),
                            LD = wD(1096);
                          const cD = (0, pD.memo)((function(DD) {
                            let {
                              initialParameters: zD
                            } = DD;
                            const wD = (0, pD.useRef)(null),
                              sD = (0, pD.useRef)(null),
                              cD = (0, pD.useRef)(0),
                              gD = (0, pD.useRef)(null),
                              RD = zD.description,
                              AD = zD.bw,
                              {
                                scale: UD,
                                rotation: fD
                              } = null !== zD && void 0 !== zD ? zD : {},
                              ID = (0, rD.g)();
                            return (0, pD.useEffect)((() => {
                              const DD = ID.onFrame((() => {
                                const DD = ID.getState();
                                if (!DD.isActive || !wD.current || !sD.current) return;
                                const zD = DD.state;
                                if (wD.current.value = zD.progress, zD.clickCount > cD.current) {
                                  cD.current = zD.clickCount;
                                  const DD = sD.current;
                                  DD.classList.add("pulse"), gD.current = setTimeout((() => {
                                    DD.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(gD.current), DD()
                              }
                            }), [ID]), (0, LD.jsx)(LD.Fragment, {
                              children: (0, LD.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== UD && {
                                    "--scale": UD
                                  },
                                  ...null !== fD && {
                                    "--rotation": `${fD}deg`
                                  }
                                },
                                children: [(0, LD.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: wD
                                }), (0, LD.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: sD,
                                  children: (0, LD.jsx)(KD.e, {
                                    text: [{
                                      icon: AD
                                    }]
                                  })
                                }), (0, LD.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, LD.jsx)(KD.e, {
                                    text: RD
                                  })
                                })]
                              })
                            })
                          }));
                          var gD = wD(1044),
                            RD = wD.n(gD);
                          const AD = 2 * Math.PI * 90,
                            UD = (0, pD.memo)((function(DD) {
                              let {
                                initialParameters: zD
                              } = DD;
                              const wD = (0, pD.useRef)(null),
                                sD = (0, pD.useRef)(null),
                                cD = (0, pD.useRef)(null),
                                gD = zD.label,
                                UD = zD.icon,
                                fD = zD.Sw,
                                {
                                  scale: ID,
                                  rotation: BD,
                                  iw: GD
                                } = null !== zD && void 0 !== zD ? zD : {},
                                hD = (0, rD.g)();
                              return (0, pD.useEffect)((() => {
                                const DD = hD.onFrame((() => {
                                  var DD, zD;
                                  const pD = hD.getState();
                                  if (!pD.isActive || !sD.current) return;
                                  const KD = pD.state,
                                    rD = null !== (DD = KD.timeRemaining) && void 0 !== DD ? DD : 0,
                                    LD = null !== (zD = KD.dw) && void 0 !== zD ? zD : 1,
                                    gD = AD * (1 - rD / LD);
                                  sD.current.style.strokeDashoffset = `${gD}`, wD.current && (wD.current.style.opacity = rD > 0 ? "1" : "0"), cD.current && fD && (cD.current.textContent = `${(rD/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  DD()
                                }
                              }), [hD, fD]), (0, LD.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: wD,
                                style: {
                                  ...null !== ID && {
                                    "--scale": ID
                                  },
                                  ...null !== BD && {
                                    "--rotation": `${BD}deg`
                                  }
                                },
                                children: [(0, LD.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, LD.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, LD.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, LD.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: AD,
                                      ref: sD
                                    })]
                                  }), (0, LD.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, LD.jsx)(KD.e, {
                                      text: [{
                                        icon: UD
                                      }],
                                      className: RD()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: GD
                                      })
                                    })
                                  })]
                                }), (0, LD.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, LD.jsx)(KD.e, {
                                    text: gD,
                                    className: "QTETimedClickLabelText"
                                  }), fD && (0, LD.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: cD
                                  })]
                                })]
                              })
                            })),
                            fD = (0, pD.memo)((function(DD) {
                              let {
                                initialParameters: zD
                              } = DD;
                              const wD = (0, pD.useRef)(null),
                                sD = (0, pD.useRef)(null),
                                cD = (0, pD.useRef)(null),
                                gD = (0, pD.useRef)(!1),
                                RD = zD.description,
                                AD = null === zD || void 0 === zD ? void 0 : zD.icon,
                                UD = (0, rD.g)();
                              return (0, pD.useEffect)((() => {
                                const DD = UD.onFrame((() => {
                                  const DD = UD.getState();
                                  if (!DD.isActive) return;
                                  const zD = DD.state;
                                  if (wD.current) {
                                    const DD = 100 * (zD.catchZonePosition - zD.Ww / 2);
                                    wD.current.style.left = `${DD}%`, wD.current.style.width = 100 * zD.Ww + "%", zD.isCatching !== gD.current && (gD.current = zD.isCatching, zD.isCatching ? wD.current.classList.add("catching") : wD.current.classList.remove("catching"))
                                  }
                                  sD.current && (sD.current.style.left = 100 * zD.moverPosition + "%"), cD.current && (cD.current.value = zD.progress)
                                }));
                                return () => {
                                  DD()
                                }
                              }), [UD]), (0, LD.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, LD.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, LD.jsx)(KD.e, {
                                    text: RD
                                  })
                                }), (0, LD.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: cD
                                }), (0, LD.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, LD.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: wD
                                  }), (0, LD.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: sD,
                                    children: (0, LD.jsx)("span", {
                                      children: AD && (0, LD.jsx)(KD.e, {
                                        text: [{
                                          icon: AD,
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
                          var ID = wD(619);
                          const BD = (0, pD.memo)((function(DD) {
                              let {
                                initialParameters: zD
                              } = DD;
                              const wD = (0, pD.useRef)(null),
                                sD = zD.label,
                                cD = zD.ow,
                                {
                                  icon: gD,
                                  scale: RD,
                                  rotation: AD
                                } = null !== zD && void 0 !== zD ? zD : {},
                                UD = 100 * (.5 - cD / 2),
                                fD = 100 * cD,
                                BD = (0, rD.g)();
                              return (0, pD.useEffect)((() => {
                                const DD = BD.onFrame((() => {
                                  const DD = BD.getState();
                                  if (!DD.isActive || !wD.current) return;
                                  const zD = DD.state;
                                  wD.current.style.left = 100 * zD.markerPosition + "%"
                                }));
                                return () => {
                                  DD()
                                }
                              }), [BD]), (0, LD.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, ID.B)(RD) && {
                                    "--scale": RD
                                  },
                                  ...!(0, ID.B)(AD) && {
                                    "--rotation": `${AD}deg`
                                  }
                                },
                                children: [gD && (0, LD.jsx)(KD.e, {
                                  text: [{
                                    icon: gD
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, LD.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, LD.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${UD}%`,
                                      width: `${fD}%`
                                    }
                                  }), (0, LD.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: wD
                                  })]
                                }), (0, LD.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, LD.jsx)(KD.e, {
                                    text: sD
                                  })
                                })]
                              })
                            })),
                            GD = (0, pD.memo)((function(DD) {
                              let {
                                initialParameters: zD
                              } = DD;
                              const wD = (0, pD.useRef)(null),
                                [sD, cD] = (0, pD.useState)((() => new Array(zD.uw).fill("pending"))),
                                [gD, RD] = (0, pD.useState)((() => {
                                  const DD = zD.Yw;
                                  return (0, ID.B)(DD) || DD <= 0 ? [] : new Array(DD).fill("pending")
                                })),
                                AD = zD.label,
                                {
                                  icon: UD
                                } = zD,
                                fD = (0, pD.useRef)(0),
                                BD = (0, pD.useRef)(0),
                                GD = (0, pD.useRef)([]),
                                hD = (0, rD.g)();
                              return (0, pD.useEffect)((() => {
                                const DD = hD.onFrame((() => {
                                  const DD = hD.getState();
                                  if (!DD.isActive || !wD.current) return;
                                  const zD = DD.state,
                                    pD = 30 + 60 * zD.outerCircleProgress;
                                  if (wD.current.setAttribute("r", String(pD)), !0 === zD.lastClickResult && zD.successes > fD.current) {
                                    wD.current.classList.remove("QTERhythmClickOuterCircle--miss"), wD.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const DD = setTimeout((() => {
                                      var DD;
                                      null === (DD = wD.current) || void 0 === DD || DD.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    GD.current.push(DD)
                                  } else if (!1 === zD.lastClickResult && zD.misses > BD.current) {
                                    wD.current.classList.remove("QTERhythmClickOuterCircle--hit"), wD.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const DD = setTimeout((() => {
                                      var DD;
                                      null === (DD = wD.current) || void 0 === DD || DD.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    GD.current.push(DD)
                                  }
                                  zD.successes === fD.current && zD.misses === BD.current || (fD.current = zD.successes, BD.current = zD.misses, cD((DD => {
                                    const wD = [...DD];
                                    for (let pD = 0; pD < zD.uw; pD++) wD[pD] = pD < zD.successes ? "success" : "pending";
                                    return wD
                                  })), RD((DD => {
                                    if (0 === DD.length) return DD;
                                    const wD = [...DD];
                                    for (let pD = 0; pD < wD.length; pD++) wD[pD] = pD < zD.misses ? "miss" : "pending";
                                    return wD
                                  })))
                                }));
                                return () => {
                                  DD();
                                  for (const DD of GD.current) clearTimeout(DD);
                                  GD.current = []
                                }
                              }), [hD]), (0, LD.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, LD.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: sD.map(((DD, zD) => (0, LD.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === DD ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, zD)))
                                }), (0, LD.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, LD.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, LD.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, LD.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: wD
                                    })]
                                  }), UD && (0, LD.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, LD.jsx)(KD.e, {
                                      text: [{
                                        icon: UD
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), gD.length > 0 && (0, LD.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: gD.map(((DD, zD) => (0, LD.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === DD ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, zD)))
                                }), (0, LD.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, LD.jsx)(KD.e, {
                                    text: AD
                                  })
                                })]
                              })
                            }));

                          function hD(DD) {
                            let {
                              qte: zD
                            } = DD;
                            switch (zD.type) {
                              case "progressBar":
                                return (0, LD.jsx)(cD, {
                                  initialParameters: zD.parameters
                                });
                              case "timedClick":
                                return (0, LD.jsx)(UD, {
                                  initialParameters: zD.parameters
                                });
                              case "gravityBar":
                                return (0, LD.jsx)(fD, {
                                  initialParameters: zD.parameters
                                });
                              case "precisionBar":
                                return (0, LD.jsx)(BD, {
                                  initialParameters: zD.parameters
                                });
                              case "rhythmClick":
                                return (0, LD.jsx)(GD, {
                                  initialParameters: zD.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const nD = (0, pD.memo)((function() {
                            const [DD, zD] = (0, pD.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, sD.g)("qteStateUpdated", (DD => {
                              zD(DD)
                            })), DD.isActive && DD.type ? (0, LD.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, LD.jsx)(hD, {
                                qte: DD
                              })
                            }) : null
                          }))
                        }, 4787: (DD, zD, wD) => {
                          wD.d(zD, {
                            e: () => LD,
                            g: () => cD
                          });
                          var pD = wD(58),
                            sD = wD(1309),
                            KD = wD(4791);
                          const rD = {
                              getState: () => KD.e.getCurrentState(),
                              onFrame: sD.s
                            },
                            LD = (0, pD.createContext)(rD);

                          function cD() {
                            return (0, pD.useContext)(LD)
                          }
                        }, 4859: (DD, zD, wD) => {
                          wD.d(zD, {
                            d: () => SD,
                            g: () => dD
                          });
                          var pD = wD(4866),
                            sD = wD(338);
                          const KD = 120,
                            rD = 260,
                            LD = 1.15,
                            cD = 1.2,
                            gD = 2,
                            RD = 1.08,
                            AD = .8,
                            UD = .95,
                            fD = 8,
                            ID = "[\"')\\]\u300d\u300f\uff09]*",
                            BD = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${ID}$`),
                            GD = new RegExp(`[?\uff1f]${ID}$`),
                            hD = new RegExp(`[!\uff01]${ID}$`),
                            nD = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            MD = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            OD = new RegExp(`[${MD}]`),
                            JD = new RegExp(`[${MD}]|[^${MD}]+`, "g"),
                            ED = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function QD(DD) {
                            let zD = 2166136261;
                            for (let wD = 0; wD < DD.length; wD++) zD ^= DD.charCodeAt(wD), zD = Math.imul(zD, 16777619);
                            return (zD >>> 0) / 4294967295 * 2 - 1
                          }

                          function XD(DD) {
                            var zD;
                            if (OD.test(DD)) return 1;
                            const wD = DD.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              pD = wD.replace(/[^0-9]/g, "");
                            if (pD.length > 0 && !/\p{L}/u.test(wD)) return Math.min(pD.length, 4);
                            const sD = null !== (zD = wD.match(ED)) && void 0 !== zD ? zD : [];
                            if (0 === sD.length) {
                              var KD, rD;
                              const DD = null !== (KD = null === (rD = wD.match(/\p{L}/gu)) || void 0 === rD ? void 0 : rD.length) && void 0 !== KD ? KD : 0;
                              return 0 === DD ? 0 : Math.min(Math.max(1, Math.round(DD / 2.5)), fD)
                            }
                            const LD = wD.replace(/[^\p{L}]/gu, ""),
                              cD = sD.length > 1 && "e" === sD.at(-1) && LD.endsWith("e") && !LD.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(DD.replace(/[^\p{L}]/gu, ""));
                            return Math.min(sD.length - (cD ? 1 : 0), fD)
                          }

                          function VD(DD) {
                            return DD.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function PD(DD) {
                            const zD = DD.replace(/[^\p{L}]/gu, "");
                            return zD.length >= 2 && zD === zD.toUpperCase() && zD !== zD.toLowerCase()
                          }

                          function CD(DD, zD) {
                            var wD;
                            const fD = zD && (0, pD.i)(zD),
                              ID = null !== (wD = null === fD || void 0 === fD ? void 0 : fD.syllableMs) && void 0 !== wD ? wD : pD.c,
                              MD = function(DD) {
                                const zD = [];
                                for (const pD of (0, sD.Vb)(DD))
                                  if ("string" === typeof pD)
                                    for (const DD of pD.split(/(\s+)/)) {
                                      if ("" === DD) continue;
                                      if (/^\s+$/.test(DD)) {
                                        zD.push({
                                          kind: "space",
                                          text: DD
                                        });
                                        continue
                                      }
                                      if (!OD.test(DD)) {
                                        zD.push({
                                          kind: "word",
                                          text: DD,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let pD = !0;
                                      for (const sD of null !== (wD = DD.match(JD)) && void 0 !== wD ? wD : []) {
                                        var wD;
                                        const DD = zD.at(-1);
                                        pD || "word" !== (null === DD || void 0 === DD ? void 0 : DD.kind) || OD.test(sD) || /[\p{L}\p{N}]/u.test(sD) ? (pD || zD.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), zD.push({
                                          kind: "word",
                                          text: sD,
                                          delayMs: 0
                                        }), pD = !1) : DD.text += sD
                                      }
                                    } else zD.push({
                                      kind: "icon",
                                      text: pD.icon,
                                      delayMs: 0
                                    });
                                return zD
                              }(DD),
                              ED = [];
                            let CD = [];
                            for (const pD of MD) "space" !== pD.kind && (CD.push(pD), BD.test(pD.text) && (ED.push(CD), CD = []));
                            ED.push(CD);
                            const xD = [];
                            let TD = 0;
                            for (const pD of ED) {
                              var bD, jD;
                              const DD = null !== (bD = null === (jD = pD.at(-1)) || void 0 === jD ? void 0 : jD.text) && void 0 !== bD ? bD : "",
                                zD = GD.test(DD),
                                wD = hD.test(DD),
                                sD = pD.map((DD => "word" === DD.kind ? XD(DD.text) : 1)),
                                MD = sD.findLastIndex((DD => DD > 0));
                              for (const [GD, hD] of pD.entries()) {
                                const DD = "word" === hD.kind,
                                  pD = sD[GD];
                                hD.delayMs = TD;
                                for (let sD = 0; fD && sD < pD; sD++) {
                                  const {
                                    intonation: KD
                                  } = fD;
                                  let rD = MD > 0 ? -KD.declineSemitones * (GD / MD) : 0;
                                  rD += QD(`${VD(hD.text)}|${sD}`) * KD.variationSemitones;
                                  const BD = Math.min(1, KD.variationSemitones);
                                  let nD = fD.glideSemitones,
                                    OD = 1;
                                  wD && (rD += KD.exclaimLiftSemitones, OD *= LD), zD && GD === MD && (rD += KD.questionRiseSemitones * (pD > 1 ? .5 + .5 * sD / (pD - 1) : 1), sD === pD - 1 && (nD = Math.abs(nD) + KD.questionRiseSemitones / 2)), DD && PD(hD.text) && (rD += gD * BD, OD *= cD), pD > 1 && 0 === sD && (rD += AD * BD, OD *= RD), xD.push({
                                    atMs: TD + sD * ID,
                                    semitones: rD,
                                    glideSemitones: nD,
                                    durationMs: sD < pD - 1 ? Math.min(fD.durationMs, ID * UD) : fD.durationMs,
                                    level: OD
                                  })
                                }
                                TD += pD * ID + (BD.test(hD.text) ? rD : nD.test(hD.text) ? KD : 0)
                              }
                            }
                            return {
                              pieces: MD.map((DD => "space" === DD.kind ? DD : "icon" === DD.kind ? {
                                kind: "icon",
                                icon: DD.text,
                                delayMs: DD.delayMs
                              } : {
                                kind: "word",
                                text: DD.text,
                                delayMs: DD.delayMs
                              })),
                              blips: xD
                            }
                          }
                          var xD = wD(1200),
                            TD = wD(1260),
                            bD = wD(1932);

                          function jD(DD) {
                            if ("string" === typeof DD) return DD;
                            const zD = TD.e.get().getCurrentLanguageCode();
                            return (0, xD.s)(zD, DD.translationKey, (0, xD.r)(DD.params, bD.d.shown))
                          }

                          function dD(DD) {
                            const zD = void 0 === DD.voice ? null : (0, pD.l)(DD.voice),
                              wD = zD && (0, pD.i)(zD);
                            return {
                              plan: CD(jD(DD.line), wD),
                              synth: wD
                            }
                          }

                          function SD(DD) {
                            const zD = [];
                            let wD = [];
                            for (const [sD, KD] of DD.entries()) {
                              var pD;
                              "space" === KD.kind && (" " !== KD.text || "icon" !== (null === (pD = DD[sD + 1]) || void 0 === pD ? void 0 : pD.kind)) ? (wD.length > 0 && zD.push(wD), zD.push([KD]), wD = []) : wD.push(KD)
                            }
                            return wD.length > 0 && zD.push(wD), zD
                          }
                        }, 4872: (DD, zD, wD) => {
                          wD.d(zD, {
                            d: () => RD,
                            g: () => AD
                          });
                          var pD = wD(4875),
                            sD = wD(20);
                          const KD = .25,
                            rD = .85,
                            LD = .02,
                            cD = .01;

                          function gD(DD, zD, wD, pD, sD, KD, LD) {
                            const {
                              waveform: cD,
                              pitchHz: gD,
                              attackMs: RD,
                              releaseMs: AD,
                              lowpassHz: UD
                            } = wD, fD = sD + pD.durationMs / 1e3, ID = gD * 2 ** (pD.semitones / 12), BD = DD.createOscillator();
                            BD.type = cD, BD.frequency.setValueAtTime(ID, sD), BD.frequency.exponentialRampToValueAtTime(ID * 2 ** (pD.glideSemitones / 12), fD);
                            const GD = sD + Math.min(RD, pD.durationMs) / 1e3,
                              hD = DD.createGain();
                            hD.gain.setValueAtTime(0, sD), hD.gain.linearRampToValueAtTime(KD, GD), hD.gain.linearRampToValueAtTime(KD * rD, Math.max(GD, fD - AD / 1e3)), hD.gain.linearRampToValueAtTime(0, fD);
                            const nD = [BD];
                            if (null !== UD) {
                              const zD = DD.createBiquadFilter();
                              zD.type = "lowpass", zD.frequency.value = UD, nD.push(zD)
                            }
                            nD.push(hD, zD);
                            for (let rD = 1; rD < nD.length; rD++) nD[rD - 1].connect(nD[rD]);
                            return BD.onended = () => {
                              for (const DD of nD.slice(0, -1)) DD.disconnect();
                              LD()
                            }, BD.start(sD), BD.stop(fD), BD
                          }

                          function RD(DD, zD, wD, pD, sD, rD) {
                            if (0 === pD.length) return rD(), () => {};
                            const RD = KD * wD.volume * sD,
                              AD = DD.createGain();
                            AD.connect(zD);
                            const UD = DD.currentTime + LD,
                              fD = new Set;
                            for (const KD of pD) {
                              const zD = gD(DD, AD, wD, KD, UD + KD.atMs / 1e3, RD * KD.level, (() => {
                                fD.delete(zD), 0 === fD.size && (AD.disconnect(), rD())
                              }));
                              fD.add(zD)
                            }
                            return () => {
                              const zD = DD.currentTime;
                              AD.gain.setTargetAtTime(0, zD, cD);
                              for (const DD of fD) try {
                                DD.stop(zD + 5 * cD)
                              } catch {}
                            }
                          }

                          function AD(DD, zD) {
                            var wD;
                            const KD = pD.Howler.ctx,
                              rD = pD.Howler.masterGain;
                            if (!KD || !rD || !sD.e.get("soundOnFromAd")) return () => {};
                            const LD = pD.Howler;
                            return null === (wD = LD._autoResume) || void 0 === wD || wD.call(LD), RD(KD, rD, DD, zD, sD.e.get("soundVolume"), (() => {
                              var DD;
                              null === (DD = LD._autoSuspend) || void 0 === DD || DD.call(LD)
                            }))
                          }
                        }, 4875: (DD, zD, wD) => {
                          wD.r(zD), wD.d(zD, {
                            Howl: () => sD.Howl,
                            Howler: () => sD.Howler,
                            musicOutput: () => GD,
                            readyAudioContext: () => hD
                          });
                          var pD, sD = wD(4877),
                            KD = wD(3444),
                            rD = wD(4682);
                          const LD = sD.Howler;

                          function cD() {
                            var DD, zD;
                            if (LD.ctx || !LD.usingWebAudio || "undefined" === typeof AudioContext || !(0, rD.l)()) return;
                            const wD = navigator.audioSession;
                            let pD;
                            "auto" === (null === wD || void 0 === wD ? void 0 : wD.type) && (wD.type = "ambient");
                            try {
                              pD = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const sD = pD.createGain();
                            sD.gain.setValueAtTime(LD._muted ? 0 : null !== (DD = LD._volume) && void 0 !== DD ? DD : 1, pD.currentTime), sD.connect(pD.destination), LD.ctx = pD, LD.masterGain = sD, null === (zD = LD._setup) || void 0 === zD || zD.call(LD)
                          }
                          LD._mobileUnloaded = !0;
                          const gD = LD.volume.bind(sD.Howler);
                          LD.volume = function() {
                            return cD(), gD(...arguments)
                          };
                          const RD = LD.mute.bind(sD.Howler);
                          LD.mute = DD => (cD(), RD(DD));
                          const AD = sD.Howl.prototype,
                            UD = AD.init;

                          function fD() {
                            for (; LD._html5AudioPool.length < LD.html5PoolSize;) {
                              const DD = new Audio;
                              DD._unlocked = !0, LD._releaseHtml5Audio(DD)
                            }
                            for (const zD of LD._howls)
                              if (!zD._webAudio)
                                for (const wD of zD._getSoundIds()) {
                                  var DD;
                                  const pD = null === (DD = zD._soundById(wD)) || void 0 === DD ? void 0 : DD._node;
                                  pD && !pD._unlocked && (pD._unlocked = !0, pD.load())
                                }
                          }
                          AD.init = function(DD) {
                            return cD(), UD.call(this, DD)
                          }, (0, rD.l)() && (LD._unlockAudio = () => {
                            const DD = LD.ctx;
                            if (LD._audioUnlocked || !DD) return;
                            LD.autoUnlock = !1;
                            const zD = DD.createBuffer(1, 1, 22050);
                            LD._scratchBuffer = zD;
                            const wD = new AbortController;
                            let pD = "afterPaint";
                            const sD = () => {
                                var pD;
                                if (LD._audioUnlocked) return;
                                null === (pD = LD._autoResume) || void 0 === pD || pD.call(LD);
                                const sD = DD.createBufferSource();
                                sD.buffer = zD, sD.connect(DD.destination), sD.start(0), DD.resume().catch((() => {})), sD.onended = () => {
                                  sD.disconnect(0), LD._audioUnlocked = !0, wD.abort();
                                  for (const DD of LD._howls) DD._emit("unlock")
                                }
                              },
                              cD = () => {
                                fD(), sD()
                              },
                              gD = zD => {
                                if (fD(), "inTap" === pD) {
                                  if ("running" === DD.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), sD()
                                } else "afterPaint" === pD && (pD = "queued", (0, KD.d)(zD.timeStamp, (() => {
                                  pD = "inTap", sD()
                                })))
                              };
                            for (const KD of ["touchstart", "touchend"]) document.addEventListener(KD, cD, {
                              capture: !0,
                              signal: wD.signal
                            });
                            for (const KD of rD.d) document.addEventListener(KD, gD, {
                              capture: !0,
                              signal: wD.signal
                            })
                          });
                          let ID = 0;
                          const BD = null === (pD = LD._autoSuspend) || void 0 === pD ? void 0 : pD.bind(sD.Howler);

                          function GD() {
                            hD();
                            const {
                              ctx: DD,
                              masterGain: zD
                            } = LD;
                            return DD && zD ? {
                              ctx: DD,
                              destination: zD,
                              holdAwake: DD => {
                                var zD, wD;
                                (ID += DD ? 1 : -1, DD) ? null === (zD = LD._autoResume) || void 0 === zD || zD.call(LD): null === (wD = LD._autoSuspend) || void 0 === wD || wD.call(LD)
                              },
                              wake: () => {
                                var zD;
                                "running" !== DD.state && (null === (zD = LD._autoResume) || void 0 === zD || zD.call(LD), DD.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function hD() {
                            var DD;
                            (LD.volume(), LD.ctx && LD.autoUnlock) && (null === (DD = LD._unlockAudio) || void 0 === DD || DD.call(LD))
                          }
                          BD && (LD._autoSuspend = () => ID > 0 ? sD.Howler : BD())
                        }, 4884: (DD, zD, wD) => {
                          function pD(DD) {
                            return {
                              notAfter: DD
                            }
                          }
                          wD.d(zD, {
                            C: () => AD,
                            c: () => cD,
                            f: () => gD,
                            j: () => LD,
                            l: () => pD,
                            o: () => sD,
                            s: () => KD,
                            w: () => rD,
                            z: () => RD
                          });
                          const sD = pD("\\w$."),
                            KD = pD("\\w.,");

                          function rD(DD) {
                            return zD => cD(zD, DD)
                          }

                          function LD(DD) {
                            return zD => !DD.test(zD.input.slice(0, zD.index))
                          }

                          function cD(DD, zD) {
                            return DD.index > 0 && new RegExp(`[${zD}]`).test(DD.input[DD.index - 1])
                          }

                          function gD(DD, zD, wD) {
                            return function(DD) {
                              return void 0 !== DD && "function" !== typeof DD
                            }(wD) ? function(DD, zD, wD) {
                              const pD = zD.flags.replace(/[gy]/g, ""),
                                sD = new RegExp(`[^${wD}](?:${zD.source})`, `${pD}g`),
                                KD = [],
                                rD = wD => {
                                  const pD = wD.index + wD[0].length;
                                  return ("" === wD[0] ? UD(DD, zD, pD) : pD) - 1
                                },
                                LD = new RegExp(`(?:${zD.source})`, `${pD}y`).exec(DD);
                              if (LD) {
                                if (KD.push(LD), !zD.global) return KD;
                                sD.lastIndex = rD(LD)
                              }
                              for (let cD = sD.exec(DD); cD; cD = sD.exec(DD)) {
                                const wD = UD(DD, zD, cD.index) - cD.index;
                                if (cD[0] = cD[0].slice(wD), cD.index += wD, KD.push(cD), !zD.global) break;
                                sD.lastIndex = rD(cD)
                              }
                              return KD
                            }(DD, zD, wD.notAfter) : function(DD, zD, wD) {
                              const pD = new RegExp(zD.source, `${zD.flags.replace(/[gy]/g,"")}g`),
                                sD = [];
                              for (let KD = pD.exec(DD); KD; KD = pD.exec(DD))
                                if (!wD || wD(KD)) {
                                  if (sD.push(KD), !zD.global) break;
                                  "" === KD[0] && (pD.lastIndex = UD(DD, zD, pD.lastIndex))
                                } else pD.lastIndex = UD(DD, zD, KD.index);
                              return sD
                            }(DD, zD, wD)
                          }

                          function RD(DD, zD, wD, pD) {
                            let sD = "",
                              KD = 0;
                            for (const rD of gD(DD, zD, wD)) sD += DD.slice(KD, rD.index) + pD(rD), KD = rD.index + rD[0].length;
                            return sD + DD.slice(KD)
                          }

                          function AD(DD, zD, wD) {
                            const pD = [];
                            let sD = 0;
                            for (const KD of gD(DD, zD, wD)) pD.push(DD.slice(sD, KD.index)), sD = KD.index + KD[0].length;
                            return [...pD, DD.slice(sD)]
                          }

                          function UD(DD, zD, wD) {
                            var pD;
                            return wD + (zD.unicode && (null !== (pD = DD.codePointAt(wD)) && void 0 !== pD ? pD : 0) > 65535 ? 2 : 1)
                          }
                        }, 4840: (DD, zD, wD) => {
                          wD.d(zD, {
                            d: () => sD,
                            g: () => cD,
                            k: () => KD,
                            l: () => rD,
                            n: () => LD,
                            p: () => GD,
                            q: () => RD,
                            u: () => AD,
                            y: () => BD,
                            z: () => fD
                          });
                          var pD = wD(1594);
                          const sD = 24e3,
                            KD = "/docs/llms.txt",
                            rD = `${pD.c}${KD}`,
                            LD = "/llms.txt",
                            cD = "/docs/llms-full.txt";

                          function gD(DD) {
                            return DD || "index"
                          }

                          function RD(DD) {
                            return `/docs/${gD(DD)}.md`
                          }

                          function AD(DD, zD) {
                            return `/docs/${gD(DD)}/${zD+1}.md`
                          }
                          const UD = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function fD(DD) {
                            const zD = UD.exec(DD);
                            return null === zD ? null : {
                              name: zD[1],
                              part: void 0 === zD[2] ? null : Number(zD[2])
                            }
                          }
                          const ID = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function BD(DD) {
                            const zD = ID.exec(DD);
                            if (null === zD) return null;
                            const [, wD = "", pD] = zD;
                            return void 0 === pD ? RD(wD) : AD(wD, Number(pD) - 1)
                          }

                          function GD(DD) {
                            return `/docsHtml/${gD(DD)}.html`
                          }
                        }, 4866: (DD, zD, wD) => {
                          wD.d(zD, {
                            c: () => sD,
                            g: () => pD,
                            h: () => KD,
                            i: () => cD,
                            l: () => rD
                          });
                          const pD = ["sine", "triangle", "square", "sawtooth"],
                            sD = 55,
                            KD = {
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

                          function rD(DD) {
                            return "string" !== typeof DD ? DD : Object.hasOwn(KD, DD) ? KD[DD] : null
                          }

                          function LD(DD, zD, wD) {
                            return Math.min(wD, Math.max(zD, DD))
                          }

                          function cD(DD) {
                            const zD = LD(DD.durationMs, 10, 500),
                              wD = LD(DD.attackMs, 0, zD),
                              {
                                intonation: sD
                              } = DD;
                            return {
                              waveform: pD.includes(DD.waveform) ? DD.waveform : "sine",
                              pitchHz: LD(DD.pitchHz, 20, 4e3),
                              glideSemitones: LD(DD.glideSemitones, -24, 24),
                              durationMs: zD,
                              attackMs: wD,
                              releaseMs: LD(DD.releaseMs, 0, zD - wD),
                              lowpassHz: null === DD.lowpassHz ? null : LD(DD.lowpassHz, 20, 2e4),
                              volume: LD(DD.volume, 0, 2),
                              intonation: {
                                variationSemitones: LD(sD.variationSemitones, 0, 6),
                                declineSemitones: LD(sD.declineSemitones, 0, 12),
                                questionRiseSemitones: LD(sD.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: LD(sD.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: LD(DD.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const DD in modules) Object.freeze(modules[DD]);