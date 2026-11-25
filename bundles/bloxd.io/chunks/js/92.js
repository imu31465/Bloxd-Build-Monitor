export const id = 92;
export const ids = [92, 108];
export const modules = {
    5233: (MM, rM, iM) => {
      iM.d(rM, {
        b: () => dM,
        e: () => yM
      });
      var OM = iM(1116),
        SM = iM.n(OM),
        jM = iM(44),
        aM = iM(1188),
        PM = iM(5242),
        nM = iM(2006),
        QM = iM(2640),
        zM = iM(5248),
        LM = iM(1303);
      const mM = new WeakMap;
      let HM = 0;

      function hM(MM) {
        let rM = mM.get(MM);
        return void 0 === rM && (rM = HM++, mM.set(MM, rM)), rM
      }

      function JM(MM) {
        let {
          piece: rM
        } = MM;
        return "space" === rM.kind ? (0, LM.jsx)(LM.Fragment, {
          children: rM.text
        }) : (0, LM.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${rM.delayMs}ms`
          },
          children: (0, LM.jsx)(PM.c, {
            text: "icon" === rM.kind ? `[[${rM.icon}]]` : rM.text
          })
        })
      }

      function dM(MM) {
        let {
          display: rM
        } = MM;
        const {
          selectedLanguage: iM
        } = (0, aM.A)(), OM = (0, jM.useMemo)((() => (0, zM.e)((0, zM.i)(rM).plan.pieces)), [rM, iM.code]);
        return (0, LM.jsxs)("div", {
          className: SM()("Dialogue", {
            DialogueAnimateIn: !1 !== rM.animateIn
          }),
          children: [rM.speakerName && (0, LM.jsx)(nM.b, {
            text: rM.speakerName,
            className: "DialogueSpeaker"
          }), (0, LM.jsx)("p", {
            className: "DialogueLine",
            children: OM.map(((MM, rM) => 1 === MM.length && "space" === MM[0].kind ? MM[0].text : (0, LM.jsx)("span", {
              className: "DialogueGlue",
              children: MM.map(((MM, rM) => (0, LM.jsx)(JM, {
                piece: MM
              }, rM)))
            }, rM)))
          })]
        })
      }
      const yM = (0, jM.memo)((function() {
        const MM = (0, QM.f)("dialogue");
        return (0, LM.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: MM && (0, LM.jsx)(dM, {
            display: MM
          }, hM(MM))
        })
      }))
    },
    5113: (MM, rM, iM) => {
        iM.r(rM), iM.d(rM, {
          default: () => ra
        });
        var OM = iM(44),
          SM = iM(1116),
          jM = iM.n(SM),
          aM = iM(1600),
          PM = iM(1608),
          nM = iM(19),
          QM = iM(65),
          zM = iM(5115),
          LM = iM(5125),
          mM = iM(5134),
          HM = iM(4718),
          hM = iM(1303);
        const JM = "/textures/docs/icons";

        function dM(MM) {
          let {
            name: rM,
            isTinted: iM,
            className: OM,
            style: SM
          } = MM;
          const aM = `${JM}/${rM}.png`;
          return iM ? (0, hM.jsxs)("span", {
            className: jM()("DocsPixelIcon", "Tinted", OM),
            "aria-hidden": "true",
            style: SM,
            children: [(0, hM.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${aM}")`,
                WebkitMaskImage: `url("${aM}")`
              }
            }), (0, hM.jsx)("img", {
              src: aM,
              alt: ""
            })]
          }) : (0, hM.jsx)("img", {
            className: jM()("DocsPixelIcon", OM),
            src: aM,
            alt: "",
            "aria-hidden": "true",
            style: SM
          })
        }
        const yM = 1500;

        function lM() {
          const [MM, rM] = (0, OM.useState)(null);
          (0, OM.useEffect)((() => {
            if (null === MM) return;
            const iM = setTimeout((() => {
              rM(null)
            }), yM);
            return () => {
              clearTimeout(iM)
            }
          }), [MM]);
          return [MM, MM => {
            (0, HM.c)(MM).then((() => {
              rM({
                text: MM,
                failed: !1
              })
            }), (iM => {
              console.error("Could not copy to the clipboard", iM), rM({
                text: MM,
                failed: !0
              })
            }))
          }]
        }

        function EM(MM) {
          let {
            text: rM,
            label: iM,
            className: OM
          } = MM;
          const [SM, aM] = lM(), PM = !1 === (null === SM || void 0 === SM ? void 0 : SM.failed);
          return (0, hM.jsxs)("button", {
            type: "button",
            className: jM()("DocsCopyButton", OM, {
              Copied: PM
            }),
            title: `Copy ${rM.length>40?"to clipboard":rM}`,
            "aria-label": iM ? void 0 : `Copy ${rM}`,
            onClick: MM => {
              MM.stopPropagation(), aM(rM)
            },
            children: [(0, hM.jsx)(dM, {
              name: PM ? "check" : "copy"
            }), iM && (0, hM.jsx)("span", {
              children: PM ? "Copied" : null !== SM && void 0 !== SM && SM.failed ? "Copy failed" : iM
            })]
          })
        }
        zM.d.registerLanguage("javascript", LM.c), zM.d.registerLanguage("typescript", mM.d);
        const UM = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          GM = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          CM = 24;

        function eM(MM) {
          let {
            code: rM,
            lang: iM,
            compact: SM = !1
          } = MM;
          const aM = (0, OM.useMemo)((() => function(MM, rM) {
              const iM = UM[rM];
              return iM ? zM.d.highlight(MM, {
                language: iM
              }).value : MM.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(rM, iM)), [rM, iM]),
            PM = rM.split("\n").length,
            nM = !SM && PM > CM + 6,
            [QM, LM] = (0, OM.useState)(!1),
            mM = UM[iM];
          return (0, hM.jsxs)("div", {
            className: jM()("DocsCodeBlock", {
              Compact: SM,
              Collapsed: nM && !QM
            }),
            children: [!SM && (0, hM.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, hM.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: mM ? GM[mM] : "Text"
              }), (0, hM.jsx)(EM, {
                text: rM,
                label: "Copy"
              })]
            }), (0, hM.jsx)("pre", {
              children: (0, hM.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: aM
                }
              })
            }), nM && (0, hM.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": QM,
              onClick: () => {
                LM(!QM)
              },
              children: [(0, hM.jsx)(dM, {
                name: QM ? "chevron-up" : "chevron-down"
              }), QM ? "Show less" : `Show all ${PM} lines`]
            })]
          })
        }
        var bM = iM(5142);
        var wM = iM(5150);
        const tM = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function gM(MM) {
          const rM = new Map;
          let iM, OM = [],
            SM = !1;
          const jM = () => {
            iM && rM.set(iM.name, iM.lines.join("\n").trimEnd())
          };
          for (const aM of MM.split("\n")) {
            const MM = aM.match(tM);
            SM || aM.startsWith("/*") ? (SM || (jM(), iM = void 0), OM.push(aM), SM = !aM.includes("*/")) : MM ? (jM(), iM = {
              name: MM[1],
              lines: [...OM, aM]
            }, OM = []) : iM && (aM.startsWith(" ") || aM.startsWith("\t") || /^[}\])|]/.test(aM)) ? iM.lines.push(aM) : iM && "" !== aM.trim() && (jM(), iM = void 0)
          }
          return jM(), rM
        }

        function uM(MM) {
          return "methods" === MM || "callbacks" === MM || "settings" === MM
        }
        const RM = {
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
              setterSnippet: (MM, rM) => `api.setClientOption(playerId, "${MM}", ${rM})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (MM, rM) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${MM}", ${rM})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (MM, rM) => `api.setMobSetting(mobId, "${MM}", ${rM})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (MM, rM) => `api.setVehicleSetting(vehicleId, "${MM}", ${rM})`
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
          pM = {
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

        function WM(MM) {
          return MM.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function sM(MM) {
          let rM = !1;
          return MM.split("\n").map((MM => (MM.startsWith("```") && (rM = !rM), !rM && /^#{3,} /.test(MM) ? MM.slice(1) : MM))).join("\n")
        }

        function DM(MM) {
          return "readme" === MM ? "getting-started" : WM(MM)
        }
        const kM = "## Glossary of Referenced Types";
        const ZM = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...wM.e.flatMap((MM => {
            const rM = {
              id: MM.id,
              slug: DM(MM.id),
              title: MM.title,
              markdown: MM.content,
              ...RM[MM.id]
            };
            if ("readme" === MM.id) return function(MM) {
              const rM = MM.markdown.indexOf(kM),
                iM = MM.markdown.indexOf("\n```", rM),
                OM = MM.markdown.indexOf("\n```", iM + 1);
              if (-1 === rM || -1 === iM || -1 === OM) throw new Error(`Getting started has no "${kM}" section with a code block`);
              const SM = MM.markdown.slice(rM + 31, iM).trim(),
                jM = [...gM(MM.markdown.slice(MM.markdown.indexOf("\n", iM + 1) + 1, OM))].map((MM => {
                  let [rM, iM] = MM;
                  return `## ${rM}\n\n\`\`\`ts\n${iM}\n\`\`\`\n`
                })),
                aM = MM.markdown.slice(MM.markdown.indexOf("\n", OM + 1) + 1);
              return [{
                ...MM,
                markdown: `${MM.markdown.slice(0,rM)}${aM}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${SM}\n\n${jM.join("\n")}`
              }]
            }(rM);
            if ("howTo" === MM.id) {
              const {
                parent: MM,
                guides: iM
              } = function(MM) {
                const [rM, ...iM] = MM.markdown.split(/^(?=## )/m), OM = [rM], SM = [];
                for (const aM of iM) {
                  var jM;
                  const rM = aM.indexOf("\n"),
                    iM = aM.slice(3, rM).trim(),
                    PM = aM.slice(rM + 1);
                  if (!PM.includes("```")) {
                    OM.push(aM);
                    continue
                  }
                  const nM = null !== (jM = pM[iM]) && void 0 !== jM ? jM : {
                    icon: "lightbulb",
                    summary: `How to use ${iM.toLowerCase()} in World Code.`
                  };
                  SM.push({
                    id: `${MM.id}${iM.split(/[^A-Za-z0-9]+/).map((MM=>MM.charAt(0).toUpperCase()+MM.slice(1))).join("")}`,
                    slug: `${MM.slug}-${WM(iM)}`,
                    title: iM,
                    layout: "article",
                    sourceAnchor: (0, bM.r)(iM),
                    markdown: `# ${iM}\n\n${sM(PM)}`,
                    ...nM
                  })
                }
                return {
                  parent: {
                    ...MM,
                    markdown: OM.join(""),
                    childPageIds: SM.map((MM => MM.id))
                  },
                  guides: SM
                }
              }(rM);
              return [MM, ...iM]
            }
            return [rM]
          }))],
          oM = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...ZM.filter((MM => void 0 !== MM.sourceAnchor)).map((MM => MM.id))]
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

        function fM(MM) {
          return ZM.find((rM => rM.id === MM))
        }
        const YM = new Map;

        function NM(MM) {
          let rM = YM.get(MM.id);
          return rM || (rM = (0, bM.z)(MM.markdown, "changelog" === MM.layout ? 3 : 2), YM.set(MM.id, rM)), rM
        }

        function AM(MM, rM) {
          return NM(MM).sections.some((MM => MM.heading.anchor === rM || MM.blocks.some((MM => "heading" === MM.kind && MM.anchor === rM))))
        }

        function xM(MM) {
          const [rM, ...iM] = MM.replace(/^#/, "").split("-"), OM = ZM.find((MM => MM.id === rM));
          if (!OM) return null;
          const SM = iM.length > 0 ? (0, bM.r)(iM.join("-")) : "";
          for (const aM of null !== (jM = OM.childPageIds) && void 0 !== jM ? jM : []) {
            var jM;
            const MM = fM(aM);
            if (MM.sourceAnchor === SM) return {
              page: MM,
              anchor: ""
            };
            if (AM(MM, SM)) return {
              page: MM,
              anchor: SM
            }
          }
          return {
            page: OM,
            anchor: SM
          }
        }
        const vM = {
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

        function FM(MM, rM) {
          let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const OM = rM.slug ? `${MM}/${rM.slug}` : MM;
          return iM ? `${OM}#${iM}` : OM
        }
        var BM = iM(5169);
        const XM = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          IM = new Set(["GameApi", "Console", "_TypeOf"]),
          KM = 4;

        function qM(MM) {
          let rM = MM.length;
          for (; rM > 0 && "" === MM[rM - 1].trim();) rM--;
          return MM.slice(0, rM)
        }

        function TM(MM) {
          var rM;
          const iM = qM(MM);
          if (null === (rM = iM.at(-1)) || void 0 === rM || !rM.trimEnd().endsWith("*/")) return {
            lines: iM,
            doc: ""
          };
          const OM = iM.findLastIndex((MM => MM.startsWith("/**")));
          return -1 === OM ? {
            lines: iM,
            doc: ""
          } : {
            lines: qM(iM.slice(0, OM)),
            doc: iM.slice(OM).join("\n")
          }
        }

        function VM(MM) {
          var rM;
          const iM = MM.split("\n"),
            OM = iM.flatMap(((MM, rM) => XM.test(MM) ? [rM] : []));
          let SM = TM(iM.slice(0, null !== (rM = OM[0]) && void 0 !== rM ? rM : iM.length)).doc;
          return OM.map(((MM, rM) => {
            var jM;
            const aM = TM(iM.slice(MM, null !== (jM = OM[rM + 1]) && void 0 !== jM ? jM : iM.length)),
              PM = {
                name: iM[MM].match(XM)[1],
                doc: SM,
                lines: aM.lines
              };
            return SM = aM.doc, PM
          }))
        }

        function cM(MM) {
          var rM;
          const iM = MM.match(/^readonly \[([\s\S]*)\]$/);
          return iM ? null !== (rM = iM[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== rM ? rM : [] : null
        }

        function Mr(MM) {
          if (!MM.startsWith("{") || !MM.endsWith("}")) return null;
          const rM = {
              keys: [],
              values: []
            },
            iM = MM => {
              const iM = MM.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              iM && (rM.keys.push(iM[1].startsWith('"') ? iM[1] : `"${iM[1]}"`), rM.values.push(iM[2].trim()))
            };
          let OM = 0,
            SM = "";
          for (const jM of MM.slice(1, -1)) "{[(".includes(jM) ? OM++ : "}])".includes(jM) && OM--, ";" === jM && 0 === OM ? (iM(SM), SM = "") : SM += jM;
          return iM(SM), rM
        }

        function rr(MM) {
          return MM.length > KM ? `\n\t| ${MM.join("\n\t| ")}` : MM.join(" | ")
        }

        function ir(MM, rM) {
          const iM = function(MM, rM) {
            return MM.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((MM, iM) => {
              var OM;
              const SM = null === (OM = rM.get(iM)) || void 0 === OM ? void 0 : OM.object;
              return SM ? rr(SM.values) : MM
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((MM, iM) => {
              var OM, SM;
              const jM = null === (OM = rM.get(iM)) || void 0 === OM || null === (SM = OM.object) || void 0 === SM ? void 0 : SM.values.map(cM);
              return null !== jM && void 0 !== jM && jM.every((MM => null !== MM)) ? rr([...new Set(jM.flat())]) : MM
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((MM, iM) => {
              var OM;
              const SM = null === (OM = rM.get(iM)) || void 0 === OM ? void 0 : OM.members;
              return SM ? rr(SM) : MM
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((MM, iM) => {
              var OM;
              const SM = null === (OM = rM.get(iM)) || void 0 === OM ? void 0 : OM.object;
              return SM ? rr(SM.keys) : MM
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((MM, iM) => {
              var OM, SM;
              return null !== (OM = null === (SM = rM.get(iM)) || void 0 === SM ? void 0 : SM.text) && void 0 !== OM ? OM : MM
            }))
          }(MM.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), rM);
          return [MM.doc, iM].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function Or(MM) {
          const rM = VM(MM),
            iM = function(MM) {
              const rM = new Map,
                iM = MM.find((MM => "_TypeOf" === MM.name));
              let OM = null;
              const SM = () => {
                if (OM) {
                  const MM = OM.lines.join("\n");
                  rM.set(OM.name, {
                    text: MM,
                    members: cM(MM),
                    object: Mr(MM)
                  })
                }
              };
              for (const jM of iM.lines.slice(1, -1)) {
                const MM = jM.match(/^\t([\w$]+): (.+)$/);
                MM ? (SM(), OM = {
                  name: MM[1],
                  lines: [MM[2]]
                }) : OM && OM.lines.push(jM.replace(/^\t/, ""))
              }
              return SM(), rM
            }(rM),
            OM = new Map;
          for (const SM of rM) IM.has(SM.name) || OM.has(SM.name) || OM.set(SM.name, ir(SM, iM));
          return OM
        }
        let Sr, jr, ar;

        function Pr() {
          return jr ??= function(MM) {
            const rM = VM(MM).find((MM => "GameApi" === MM.name)),
              iM = new Map,
              OM = rM.lines;
            for (let jM = 0; jM < OM.length; jM++) {
              var SM;
              if (!OM[jM].trimStart().startsWith("/**")) continue;
              const MM = jM;
              for (; jM < OM.length && !OM[jM].includes("*/");) jM++;
              const rM = null === (SM = OM[jM + 1]) || void 0 === SM ? void 0 : SM.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!rM) continue;
              let aM = null;
              const PM = [];
              let nM = "description",
                QM = !1;
              for (const iM of OM.slice(MM, jM + 1).join("\n").split("\n").map((MM => MM.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const MM = iM.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                MM ? (aM = MM[1].trim(), nM = "deprecation") : iM.startsWith("@") ? (nM = "otherTag", QM = !0) : "" === iM.trim() ? QM || (nM = "description", PM.push(iM)) : "deprecation" !== nM || /^[A-Z]/.test(iM.trim()) ? "otherTag" !== nM && (nM = "description", PM.push(iM)) : aM = `${aM} ${iM.trim()}`.trim()
              }
              iM.set(rM[1], {
                deprecation: aM,
                description: PM.join("\n").trim()
              })
            }
            return iM
          }(BM.default), jr
        }

        function nr() {
          if (!ar) {
            ar = new Map;
            for (const MM of ZM) {
              const rM = (0, bM.v)(NM(MM)).flatMap((MM => MM.blocks));
              for (const MM of (0, bM.l)(rM))
                if ("ts" === MM.lang || "typescript" === MM.lang)
                  for (const [rM, iM] of gM(MM.code)) ar.set(rM, iM)
            }
            for (const [MM, rM] of(Sr ??= Or(BM.default), Sr)) ar.has(MM) || ar.set(MM, rM)
          }
          return ar
        }
        const Qr = {
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
        let zr;

        function Lr() {
          if (!zr) {
            zr = new Map;
            for (const MM of ZM)
              if (uM(MM.layout))
                for (const rM of NM(MM).sections) zr.has(rM.heading.text) || zr.set(rM.heading.text, {
                  pageId: MM.id,
                  anchor: rM.heading.anchor
                })
          }
          return zr
        }

        function mr(MM) {
          const rM = MM.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return rM ? Lr().get(rM[1]) : void 0
        }
        const Hr = (0, OM.createContext)("/docs"),
          hr = (0, OM.createContext)(null),
          Jr = (0, OM.createContext)(!1),
          dr = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function yr(MM) {
          const rM = MM.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return rM ? rM[1] : null
        }

        function lr(MM) {
          let {
            colour: rM
          } = MM;
          return (0, hM.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: rM
            },
            "aria-hidden": "true"
          })
        }

        function Er(MM) {
          const rM = [];
          let iM = 0;
          for (const OM of MM.matchAll(dr)) rM.push(MM.slice(iM, OM.index), (0, hM.jsx)(lr, {
            colour: OM[0]
          }), OM[0]), iM = OM.index + OM[0].length;
          return rM.push(MM.slice(iM)), rM
        }

        function Ur(MM) {
          let {
            href: rM,
            children: iM
          } = MM;
          const SM = (0, OM.useContext)(Hr);
          if (rM.startsWith("#")) {
            const MM = xM(rM);
            if (MM) return (0, hM.jsx)(aM.b, {
              to: FM(SM, MM.page, MM.anchor),
              children: (0, hM.jsx)(Jr.Provider, {
                value: !0,
                children: iM
              })
            })
          }
          return (0, hM.jsx)("a", {
            href: rM,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, hM.jsx)(Jr.Provider, {
              value: !0,
              children: iM
            })
          })
        }

        function Gr(MM) {
          let {
            code: rM
          } = MM;
          const iM = (0, OM.useContext)(Hr);
          if ((0, OM.useContext)(Jr)) return (0, hM.jsx)("code", {
            className: "DocsInlineCode",
            children: rM
          });
          if (nr().has(rM)) return (0, hM.jsx)(wr, {
            type: rM
          });
          const SM = mr(rM);
          if (SM) return (0, hM.jsx)(aM.b, {
            className: "DocsInlineCode DocsSymbolLink",
            to: FM(iM, fM(SM.pageId), SM.anchor),
            children: rM
          });
          const jM = yr(rM);
          return (0, hM.jsxs)("code", {
            className: "DocsInlineCode",
            children: [jM && (0, hM.jsx)(lr, {
              colour: jM
            }), rM]
          })
        }

        function Cr(MM) {
          let {
            text: rM
          } = MM;
          const iM = [];
          let SM = 0;
          for (const OM of rM.matchAll(bM.h)) {
            OM.index > SM && iM.push(...Er(rM.slice(SM, OM.index)));
            const [, MM, jM, aM, PM, nM] = OM;
            MM ? iM.push((0, hM.jsx)(Gr, {
              code: (0, bM.n)(MM, jM)
            })) : aM ? iM.push((0, hM.jsx)("strong", {
              children: (0, hM.jsx)(Cr, {
                text: aM
              })
            })) : iM.push((0, hM.jsx)(Ur, {
              href: nM,
              children: (0, hM.jsx)(Cr, {
                text: PM
              })
            })), SM = OM.index + OM[0].length
          }
          return SM < rM.length && iM.push(...Er(rM.slice(SM))), (0, hM.jsx)(hM.Fragment, {
            children: iM.map(((MM, rM) => (0, hM.jsx)(OM.Fragment, {
              children: MM
            }, rM)))
          })
        }
        const er = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          br = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function wr(MM) {
          let {
            type: rM
          } = MM;
          const iM = nr(),
            SM = [];
          for (const OM of rM.trim().matchAll(er)) {
            const [MM, rM, jM, aM, PM] = OM;
            rM ? SM.push((0, hM.jsx)("span", {
              className: "DocsTypeString",
              children: MM
            })) : jM && iM.has(jM) ? SM.push((0, hM.jsx)(pr, {
              name: jM,
              definition: iM.get(jM)
            })) : jM ? SM.push((0, hM.jsx)("span", {
              className: br.has(jM) ? "DocsTypeKeyword" : "DocsTypeName",
              children: MM
            })) : aM ? SM.push((0, hM.jsx)("span", {
              className: "DocsTypeNumber",
              children: MM
            })) : PM ? SM.push(" ") : SM.push((0, hM.jsx)("span", {
              className: "DocsTypePunctuation",
              children: MM
            }))
          }
          return (0, hM.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: SM.map(((MM, rM) => (0, hM.jsx)(OM.Fragment, {
              children: MM
            }, rM)))
          })
        }
        const tr = 480,
          gr = 6,
          ur = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Rr = 0;

        function pr(MM) {
          let {
            name: rM,
            definition: iM
          } = MM;
          const SM = (0, OM.useContext)(Hr),
            jM = Qr[rM],
            PM = (0, OM.useRef)(null),
            nM = (0, OM.useRef)(null),
            zM = (0, OM.useRef)(null),
            [LM, mM] = (0, OM.useState)(!1),
            [HM, JM] = (0, OM.useState)(null),
            yM = (0, OM.useRef)(),
            lM = (0, OM.useContext)(hr),
            [EM] = (0, OM.useState)((() => "DocsTypePopover-" + Rr++)),
            UM = () => {
              clearTimeout(yM.current), mM(!0)
            },
            GM = () => {
              clearTimeout(yM.current), yM.current = setTimeout((() => {
                mM(!1)
              }), 120)
            };
          return (0, OM.useEffect)((() => {
            if (!LM) return;
            const MM = MM => {
              if ("Escape" === MM.key) {
                var rM, iM;
                if (null !== (rM = nM.current) && void 0 !== rM && rM.contains(document.activeElement)) null === (iM = PM.current) || void 0 === iM || iM.focus();
                mM(!1)
              }
            };
            return document.addEventListener("keydown", MM), () => {
              document.removeEventListener("keydown", MM)
            }
          }), [LM]), (0, OM.useEffect)((() => () => {
            clearTimeout(yM.current)
          }), []), (0, OM.useLayoutEffect)((() => {
            if (!LM || !PM.current || !nM.current) return void JM(null);
            const MM = PM.current.getBoundingClientRect(),
              rM = nM.current.offsetHeight,
              iM = Math.min(tr, window.innerWidth - 32),
              OM = Math.min(Math.max(16, MM.left), window.innerWidth - iM - 16),
              SM = MM.bottom + gr + rM < window.innerHeight;
            JM({
              left: OM,
              top: SM ? MM.bottom + gr : Math.max(16, MM.top - gr - rM)
            })
          }), [LM]), (0, hM.jsxs)(hM.Fragment, {
            children: [(0, hM.jsx)("button", {
              type: "button",
              ref: PM,
              className: "DocsTypeLink",
              "aria-expanded": LM,
              "aria-describedby": LM ? EM : void 0,
              onMouseEnter: UM,
              onMouseLeave: GM,
              onFocus: UM,
              onBlur: GM,
              onKeyDown: MM => {
                "Tab" === MM.key && !MM.shiftKey && zM.current && (MM.preventDefault(), zM.current.focus())
              },
              onClick: UM,
              children: rM
            }), LM && (0, QM.createPortal)((0, hM.jsxs)("span", {
              ref: nM,
              id: EM,
              className: "DocsTypePopover",
              role: "tooltip",
              style: HM ? {
                left: HM.left,
                top: HM.top,
                maxWidth: tr
              } : {
                visibility: "hidden"
              },
              onMouseEnter: UM,
              onMouseLeave: GM,
              onFocus: UM,
              onBlur: GM,
              children: [(0, hM.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, hM.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: rM
                }), jM && (0, hM.jsxs)(aM.b, {
                  ref: zM,
                  className: "DocsTypePopoverLink",
                  to: FM(SM, fM(jM)),
                  onClick: () => {
                    mM(!1)
                  },
                  onKeyDown: MM => {
                    if ("Tab" === MM.key) {
                      var rM;
                      if (MM.preventDefault(), MM.shiftKey || !PM.current || ! function(MM, rM) {
                          const iM = [...document.querySelectorAll(ur)],
                            OM = iM.slice(iM.indexOf(MM) + 1).find((MM => MM.getClientRects().length > 0 && !(null !== rM && void 0 !== rM && rM.contains(MM))));
                          return null === OM || void 0 === OM || OM.focus(), void 0 !== OM
                        }(PM.current, nM.current)) null === (rM = PM.current) || void 0 === rM || rM.focus();
                      MM.shiftKey || mM(!1)
                    }
                  },
                  children: [fM(jM).title, (0, hM.jsx)(dM, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, hM.jsx)(eM, {
                lang: "ts",
                code: iM,
                compact: !0
              })]
            }), null !== lM && void 0 !== lM ? lM : document.body)]
          })
        }
        var Wr = iM(181),
          sr = iM(5173),
          Dr = iM(5182),
          kr = iM(5184);
        const Zr = {
          progressBar: {
            uO: 30,
            RO: .075,
            pO: 5,
            WO: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            sO: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            kO: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            ZO: !0,
            scale: 3,
            rotation: 15,
            oO: !1
          },
          gravityBar: {
            uO: 30,
            YO: .25,
            AO: 3,
            xO: .8,
            gravity: 1,
            vO: 1.5,
            FO: 8,
            BO: 4,
            WO: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            IO: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            qO: 5,
            VO: 1200,
            cO: .15,
            MS: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var or = iM(313),
          fr = iM(2099);

        function Yr(MM) {
          return MM.startsWith("fa-")
        }
        const Nr = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          Ar = {
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

        function xr(MM) {
          return "string" === typeof MM ? "text" : "entityName" in MM || "translationKey" in MM ? "other" : (0, or.rb)(MM) ? "progressBar" : (0, or.nb)(MM) ? "keyBinding" : "icon" in MM ? "icon" : "str" in MM && "string" === typeof MM.str ? "text" : "other"
        }
        const vr = [{
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
          Fr = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...vr],
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
                options: fr.n
              },
              isRequired: !0
            }, ...vr],
            other: []
          };

        function Br(MM) {
          return "string" === typeof MM ? {
            str: MM
          } : MM
        }

        function Xr(MM, rM) {
          let iM = Br(MM);
          for (const OM of rM) iM = iM && "object" === typeof iM ? iM[OM] : void 0;
          return iM
        }

        function Ir(MM, rM, iM) {
          const OM = (MM, SM) => {
            var jM;
            const aM = rM[SM],
              PM = {
                ...MM
              };
            if (SM === rM.length - 1) return void 0 === iM ? delete PM[aM] : PM[aM] = iM, PM;
            const nM = OM(null !== (jM = MM[aM]) && void 0 !== jM ? jM : {}, SM + 1);
            return 0 === Object.keys(nM).length ? delete PM[aM] : PM[aM] = nM, PM
          };
          return function(MM) {
            const rM = Object.keys(MM);
            return "string" === typeof MM.str && 1 === rM.length ? MM.str : MM
          }(OM(Br(MM), 0))
        }

        function Kr(MM, rM) {
          const iM = xr(MM),
            OM = Fr[iM].find((MM => MM.path.join(".") === rM.join("."))),
            SM = null !== OM && void 0 !== OM && OM.isRequired && "other" !== iM ? Xr(Ar[iM], rM) : void 0;
          return Ir(MM, rM, SM)
        }

        function qr(MM) {
          switch (xr(MM)) {
            case "text":
              return String(Xr(MM, ["str"]));
            case "icon":
              return String(Xr(MM, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(Xr(MM,["progress"])))}%`;
            case "keyBinding":
              return String(Xr(MM, ["action"]));
            case "other":
              return JSON.stringify(MM)
          }
        }
        const Tr = /^[A-Za-z_$][\w$]*$/;

        function Vr(MM) {
          if (Array.isArray(MM)) return `[${MM.map(Vr).join(", ")}]`;
          if (MM && "object" === typeof MM) {
            const rM = Object.entries(MM).map((MM => {
              let [rM, iM] = MM;
              return `${Tr.test(rM)?rM:JSON.stringify(rM)}: ${Vr(iM)}`
            }));
            return 0 === rM.length ? "{}" : `{ ${rM.join(", ")} }`
          }
          return JSON.stringify(MM)
        }

        function cr(MM) {
          const rM = MM.map(Vr),
            iM = `[${rM.join(", ")}]`;
          return iM.length <= 60 ? iM : `[\n${rM.map((MM=>`    ${MM},`)).join("\n")}\n]`
        }
        const Mi = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function ri(MM) {
          let rM = "";
          for (let SM = 0; SM < MM.length; SM++) {
            const jM = MM[SM];
            if ("\\" === jM) {
              var iM;
              const OM = null !== (iM = MM[SM + 1]) && void 0 !== iM ? iM : "";
              rM += "'" === OM ? "'" : jM + OM, SM++
            } else if ('"' === jM) rM += '\\"';
            else {
              var OM;
              rM += null !== (OM = Mi[jM]) && void 0 !== OM ? OM : jM
            }
          }
          return `"${rM}"`
        }

        function ii(MM) {
          if ("string" === typeof MM) return !0;
          if (!MM || "object" !== typeof MM || Array.isArray(MM)) return !1;
          const rM = MM;
          return "ProgressBar" === rM.type ? "number" === typeof rM.progress : "StyledKeyBinding" === rM.type ? fr.n.includes(rM.action) : "string" === typeof rM.icon || "string" === typeof rM.str || "string" === typeof rM.entityName || "string" === typeof rM.translationKey
        }

        function Oi(MM) {
          let rM;
          try {
            rM = function(MM) {
              let rM = "",
                iM = "",
                OM = 0;
              const SM = () => {
                rM += iM.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), iM = ""
              };
              for (; OM < MM.length;) {
                const jM = MM.slice(OM).search(/["'`]|\/\//);
                if (-1 === jM) {
                  iM += MM.slice(OM);
                  break
                }
                iM += MM.slice(OM, OM + jM);
                const aM = OM + jM,
                  PM = MM[aM];
                if ("/" === PM) {
                  const rM = MM.indexOf("\n", aM);
                  OM = -1 === rM ? MM.length : rM;
                  continue
                }
                if (SM(), "`" === PM) throw new Error("Use quotes rather than template strings.");
                let nM = aM + 1;
                for (; nM < MM.length && MM[nM] !== PM;) nM += "\\" === MM[nM] ? 2 : 1;
                if (nM >= MM.length) throw new Error("A string is missing its closing quote.");
                const QM = MM.slice(aM + 1, nM);
                rM += ri(QM), OM = nM + 1
              }
              return SM(), JSON.parse(rM)
            }(MM.trim())
          } catch (OM) {
            return {
              parts: null,
              error: OM instanceof SyntaxError ? "This isn't a valid array yet." : OM.message
            }
          }
          if (!Array.isArray(rM)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const iM = rM.findIndex((MM => !ii(MM)));
          return -1 !== iM ? {
            parts: null,
            error: `Part ${iM+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: rM,
            error: null
          }
        }
        const Si = 1 / Wr.f.clientTicksPerSecond,
          ji = 700,
          ai = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          Pi = {
            progressBar: Zr.progressBar.sO,
            timedClick: Zr.timedClick.icon,
            gravityBar: Zr.gravityBar.icon,
            precisionBar: Zr.precisionBar.icon,
            rhythmClick: Zr.rhythmClick.icon
          };

        function ni(MM) {
          let {
            type: rM
          } = MM;
          const [iM, SM] = (0, OM.useState)("ready"), [aM, PM] = (0, OM.useState)(1), [nM, QM] = (0, OM.useState)(!0), zM = (0, OM.useRef)(null), LM = (0, OM.useRef)(null), mM = (0, OM.useRef)(null), HM = (0, OM.useRef)(new Set), JM = (0, OM.useRef)(!1), yM = Pi[rM], lM = (0, OM.useMemo)((() => ({
            getState: () => {
              var MM, rM;
              return null !== (MM = null === (rM = mM.current) || void 0 === rM ? void 0 : rM.getState()) && void 0 !== MM ? MM : ai
            },
            onFrame: MM => (HM.current.add(MM), () => {
              HM.current.delete(MM)
            })
          })), []);
          (0, OM.useEffect)((() => {
            const MM = zM.current,
              rM = LM.current;
            if (!MM || !rM) return;
            const iM = new ResizeObserver((() => {
              PM(MM.clientWidth / Math.max(1, rM.offsetWidth))
            }));
            return iM.observe(MM), () => {
              iM.disconnect()
            }
          }), []), (0, OM.useEffect)((() => {
            var MM;
            if ("playing" !== iM) return;
            let OM = !1;
            const jM = new kr.f[rM](Zr[rM], (MM => {
              OM = !0, QM(!1), SM(MM ? "succeeded" : "failed")
            }), (() => {}));
            mM.current = jM;
            let aM = 0,
              PM = performance.now(),
              nM = requestAnimationFrame((function MM(rM) {
                for (aM += Math.min(.25, (rM - PM) / 1e3), PM = rM; aM >= Si && !OM;) aM -= Si, jM.handleTick(Si);
                for (const iM of HM.current) iM();
                OM || (nM = requestAnimationFrame(MM))
              }));
            return null === (MM = zM.current) || void 0 === MM || MM.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(nM), jM.tearDown(), mM.current = null, JM.current = !1
            }
          }), [iM, rM]), (0, OM.useEffect)((() => {
            if (nM) return;
            const MM = setTimeout((() => {
              QM(!0)
            }), ji);
            return () => {
              clearTimeout(MM)
            }
          }), [nM]);
          const EM = MM => {
            var rM;
            "playing" === iM && JM.current !== MM && (JM.current = MM, null === (rM = mM.current) || void 0 === rM || rM.handleMouseInput(MM))
          };
          return (0, hM.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, hM.jsxs)("div", {
              ref: zM,
              className: jM()("DocsQteStage", {
                Playing: "playing" === iM
              }),
              tabIndex: "playing" === iM ? 0 : -1,
              role: "playing" === iM ? "button" : void 0,
              "aria-label": "playing" === iM ? `${rM} quick time event: click or press Space` : void 0,
              onPointerDown: MM => {
                0 === MM.button && EM(!0)
              },
              onPointerUp: () => {
                EM(!1)
              },
              onPointerLeave: () => {
                EM(!1)
              },
              onPointerCancel: () => {
                EM(!1)
              },
              onKeyDown: MM => {
                "playing" !== iM || " " !== MM.key && "Enter" !== MM.key || (MM.preventDefault(), EM(!0))
              },
              onKeyUp: MM => {
                "playing" !== iM || " " !== MM.key && "Enter" !== MM.key || EM(!1)
              },
              children: [(0, hM.jsx)("div", {
                ref: LM,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${aM})`
                },
                children: "playing" === iM && (0, hM.jsx)(Dr.c.Provider, {
                  value: lM,
                  children: (0, hM.jsx)(sr.e, {
                    qte: {
                      type: rM,
                      parameters: Zr[rM]
                    }
                  })
                })
              }), "playing" !== iM && (0, hM.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== iM && (0, hM.jsxs)("div", {
                  className: jM()("DocsQteResult", "succeeded" === iM ? "Succeeded" : "Failed"),
                  children: [(0, hM.jsx)(dM, {
                    name: "succeeded" === iM ? "check" : "cross",
                    isTinted: !0
                  }), (0, hM.jsx)("span", {
                    children: "succeeded" === iM ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, hM.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !nM,
                  onClick: () => {
                    SM("playing")
                  },
                  children: [(0, hM.jsx)(dM, {
                    name: "ready" === iM ? "play" : "replay"
                  }), (0, hM.jsx)("span", {
                    children: "ready" === iM ? `Try ${rM}` : "Play again"
                  })]
                })]
              })]
            }), yM && !Yr(yM) && (0, hM.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, hM.jsx)("code", {
                children: yM
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function Qi(MM) {
          let {
            level: rM,
            text: iM,
            anchor: OM,
            className: SM
          } = MM;
          const aM = `h${Math.min(rM,6)}`;
          return (0, hM.jsxs)(aM, {
                id: OM,
                className: jM()("DocsHeading", SM),
                children: [(0, hM.jsx)(Cr, {
                      text: iM
                    }), (0, hM.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${OM}`,
                        "aria-label": `Link to ${iM.replace(/`/g,"")}`,children:"#"})]})}function zi(MM){let{items:rM,ordered:iM}=MM;const OM=iM?"ol":"ul";return(0,hM.jsx)(OM,{className:"DocsList",children:rM.map(((MM,rM)=>(0,hM.jsxs)("li",{children:[(0,hM.jsx)(Cr,{text:MM.text}),MM.children.length>0&&(0,hM.jsx)(zi,{items:MM.children,ordered:iM})]},rM)))})}function Li(MM){const rM=MM[0],iM="paragraph"===(null===rM||void 0===rM?void 0:rM.kind)?rM.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(iM)?"warning":/^\*\*(tip|prefer)/.test(iM)?"tip":"note"}function mi(MM){let{block:rM}=MM;switch(rM.kind){case"heading":return(0,hM.jsx)(Qi,{level:rM.level,text:rM.text,anchor:rM.anchor});case"paragraph":return(0,hM.jsx)("p",{children:(0,hM.jsx)(Cr,{text:rM.text})});case"code":{const MM="ts"===rM.lang?function(MM){const rM=MM.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return rM&&Object.hasOwn(Zr,rM[1])?rM[1]:null}(rM.code):null;return(0,hM.jsxs)(hM.Fragment,{children:[(0,hM.jsx)(eM,{code:rM.code,lang:rM.lang}),MM&&(0,hM.jsx)(ni,{type:MM})]})}case"table":return(0,hM.jsx)("div",{className:"DocsTableScroll",children:(0,hM.jsxs)("table",{className:"DocsTable",children:[(0,hM.jsx)("thead",{children:(0,hM.jsx)("tr",{children:rM.header.map(((MM,rM)=>(0,hM.jsx)("th",{children:(0,hM.jsx)(Cr,{text:MM})},rM)))})}),(0,hM.jsx)("tbody",{children:rM.rows.map(((MM,rM)=>(0,hM.jsx)("tr",{children:MM.map(((MM,rM)=>(0,hM.jsx)("td",{children:(0,hM.jsx)(Cr,{text:MM})},rM)))},rM)))})]})});case"list":return(0,hM.jsx)(zi,{items:rM.items,ordered:rM.ordered});case"quote":return(0,hM.jsx)("aside",{className:jM()("DocsCallout",Li(rM.blocks)),children:(0,hM.jsx)(Hi,{blocks:rM.blocks})});case"rule":return(0,hM.jsx)("hr",{className:"DocsRule"})}}function Hi(MM){let{blocks:rM}=MM;return(0,hM.jsx)(hM.Fragment,{children:rM.map(((MM,rM)=>(0,hM.jsx)(mi,{block:MM},rM)))})}var Ji=iM(5158),di=iM(5162);function yi(MM){return"blocks"===MM||"items"===MM}const li=new Map;function Ei(MM){let rM=li.get(MM);return rM||(rM=function(MM){const rM={entries:[],legend:[],notes:[],examples:[]};let iM=!1;for(const jM of MM.split(/\r?\n/).slice(1)){if(jM.startsWith("#")){const MM=jM.replace(/^# ?/,""),OM=MM.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);OM?rM.legend.push({code:OM[1],meaning:OM[2],usage:OM[3].trim()}):/^Examples:/.test(MM.trim())?iM=!0:iM&&MM.trim()?rM.examples.push(MM.trim()):MM.trim()&&!/^\s/.test(MM)&&rM.notes.push(MM.trim());continue}const MM=jM.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var OM,SM;MM&&rM.entries.push({name:MM[1],variants:null!==(OM=null===(SM=MM[2])||void 0===SM?void 0:SM.split(","))&&void 0!==OM?OM:[]})}return rM}("blocks"===MM?Ji:di),li.set(MM,rM)),rM}function Ui(MM){let{className:rM,value:iM,placeholder:OM,label:SM,onChange:jM,count:aM,children:PM}=MM;return(0,hM.jsxs)("div",{className:rM,children:[(0,hM.jsx)(dM,{name:"magnifying-glass"}),(0,hM.jsx)("input",{type:"search",value:iM,placeholder:OM,"aria-label":SM,onChange:MM=>{jM(MM.target.value)}}),PM,aM&&(0,hM.jsxs)("span",{className:"DocsFilterCount",children:[aM.visible," of ",aM.total]})]})}var Gi=iM(1398);function Ci(MM){const rM=MM.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return rM?rM[2]:null}function ei(MM){return"paragraph"===MM.kind&&""===MM.text.trim()}function bi(MM){const rM={name:MM.heading.text,description:[],params:[],returns:null};let iM="description";for(const SM of MM.blocks)if(!ei(SM))if("heading"===SM.kind&&/^Parameters:?$/.test(SM.text))iM="params";else if("heading"===SM.kind&&/^Returns:?$/.test(SM.text))iM="returns",rM.returns={type:"",description:[]};else if("params"!==iM||"table"!==SM.kind){if("returns"===iM&&"paragraph"===SM.kind&&""===rM.returns.type){const MM=Ci(SM.text);if(null!==MM){rM.returns.type=MM.replaceAll("\\|","|");continue}}"returns"===iM?rM.returns.description.push(SM):rM.description.push(SM)}else for(const[MM,iM,jM]of SM.rows){var OM;rM.params.push({name:MM,type:null!==(OM=Ci(iM))&&void 0!==OM?OM:iM,description:null!==jM&&void 0!==jM?jM:""})}return rM}const wi=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function ti(MM){return MM.filter((MM=>!ei(MM)))}const gi=/^[\w][\w .'&!:()-]*$/,ui=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function Ri(MM){var rM;if("code"===MM.kind&&"text"===MM.lang){const rM=MM.code.split("\n").map((MM=>MM.trim())).filter(Boolean);return rM.length>0&&rM.every((MM=>gi.test(MM)))?rM.map((MM=>({name:MM}))):null}return"paragraph"===MM.kind&&ui.test(MM.text.trim())?[...MM.text.matchAll(/`([ ^ `]+)` / g)].flatMap((MM => MM[1].split(/,\s*/).map((MM => ({
                              name: MM.trim()
                            }))))): "table" === MM.kind && null !== (rM = MM.header[0]) && void 0 !== rM && rM.startsWith("Song") ? MM.rows.map((MM => {
                              let [rM, iM] = MM;
                              return {
                                name: rM.replace(/`/g, ""),
                                caption: iM
                              }
                            })) : null
                          }

                          function Wi(MM) {
                            const rM = [];
                            for (const iM of MM) {
                              const MM = Ri(iM),
                                OM = rM.at(-1),
                                SM = "table" === iM.kind;
                              MM ? "names" === (null === OM || void 0 === OM ? void 0 : OM.kind) && OM.isSongs === SM ? OM.names.push(...MM) : rM.push({
                                kind: "names",
                                names: MM,
                                isSongs: SM
                              }) : rM.push({
                                kind: "block",
                                block: iM
                              })
                            }
                            return rM
                          }
                          const si = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function Di(MM, rM) {
                            return `${si[MM]}-${(0,bM.r)(rM)}`
                          }
                          const ki = new WeakMap;

                          function Zi(MM, rM, iM) {
                            let OM = ki.get(rM);
                            if (!OM) {
                              OM = new Map;
                              const iM = new Set;
                              for (const SM of (0, bM.v)(rM)) {
                                const rM = Wi(ti(SM.blocks)).map((rM => {
                                  if ("block" === rM.kind) return rM;
                                  return {
                                    kind: "names",
                                    names: rM.names.map((rM => {
                                      var OM, jM;
                                      const aM = Di(MM, rM.name);
                                      let PM = aM;
                                      for (let MM = 2; iM.has(PM); MM++) PM = `${aM}-${MM}`;
                                      return iM.add(PM), {
                                        ...rM,
                                        anchor: PM,
                                        heading: null !== (OM = null === (jM = SM.heading) || void 0 === jM ? void 0 : jM.text) && void 0 !== OM ? OM : ""
                                      }
                                    })),
                                    isSongs: rM.isSongs
                                  }
                                }));
                                OM.set(SM.blocks, rM)
                              }
                              ki.set(rM, OM)
                            }
                            const SM = OM.get(iM);
                            if (!SM) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return SM
                          }
                          const oi = "/textures/docs/skinPreviews",
                            fi = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var Yi = iM(4560),
                            Ni = iM(4577);

                          function Ai(MM) {
                            return Object.hasOwn(Yi.d, MM) ? Yi.d[MM] : null
                          }
                          const xi = {
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
                            blendMode: Ni.d.Standard
                          };

                          function vi(MM, rM, iM) {
                            return rM + (iM - rM) * MM()
                          }

                          function Fi(MM, rM, iM) {
                            return MM + (rM - MM) * iM
                          }

                          function Bi(MM) {
                            return MM.length > 0 && "timeFraction" in MM[0]
                          }

                          function Xi(MM, rM) {
                            if (0 === MM.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!Bi(MM.colorGradients)) {
                              const iM = MM.colorGradients,
                                {
                                  color: OM
                                } = iM[Math.floor(rM() * iM.length) % iM.length];
                              return [{
                                at: 0,
                                colour: [OM[0] / 255, OM[1] / 255, OM[2] / 255, 1]
                              }]
                            }
                            return [...MM.colorGradients].sort(((MM, rM) => MM.timeFraction - rM.timeFraction)).map((MM => {
                              var iM, OM, SM;
                              const jM = MM.minColor,
                                aM = null !== (iM = MM.maxColor) && void 0 !== iM ? iM : jM,
                                PM = rM(),
                                nM = [Fi(jM[0], aM[0], PM) / 255, Fi(jM[1], aM[1], PM) / 255, Fi(jM[2], aM[2], PM) / 255, Fi(null !== (OM = jM[3]) && void 0 !== OM ? OM : 1, null !== (SM = aM[3]) && void 0 !== SM ? SM : 1, PM)];
                              return {
                                at: MM.timeFraction,
                                colour: nM
                              }
                            }))
                          }

                          function Ii(MM, rM, iM, OM) {
                            const SM = vi(OM, MM.minEmitPower, MM.maxEmitPower),
                              jM = rM => vi(OM, Math.min(MM.dir1[rM], MM.dir2[rM]), Math.max(MM.dir1[rM], MM.dir2[rM])) * SM,
                              aM = [...MM.velocityGradients].sort(((MM, rM) => MM.timeFraction - rM.timeFraction)).map((MM => ({
                                at: MM.timeFraction,
                                factor: vi(OM, MM.factor, MM.factor2)
                              })));
                            return {
                              pos: [vi(OM, rM[0], iM[0]), vi(OM, rM[1], iM[1]), vi(OM, rM[2], iM[2])],
                              dir: [jM(0), jM(1), jM(2)],
                              age: 0,
                              life: vi(OM, MM.minLifeTime, MM.maxLifeTime),
                              size: vi(OM, MM.minSize, MM.maxSize),
                              colours: Xi(MM, OM),
                              velocityFactors: aM
                            }
                          }

                          function Ki(MM, rM, iM, OM) {
                            if (rM < MM[0].at) return iM(Math.min(1, MM.length - 1));
                            for (let SM = 0; SM < MM.length - 1; SM++)
                              if (rM <= MM[SM + 1].at) {
                                const jM = MM[SM + 1].at - MM[SM].at;
                                return OM(iM(SM), iM(SM + 1), jM > 0 ? (rM - MM[SM].at) / jM : 1)
                              } return iM(MM.length - 1)
                          }

                          function qi(MM) {
                            return Ki(MM.colours, MM.age / MM.life, (rM => MM.colours[rM].colour), ((MM, rM, iM) => [Fi(MM[0], rM[0], iM), Fi(MM[1], rM[1], iM), Fi(MM[2], rM[2], iM), Fi(MM[3], rM[3], iM)]))
                          }

                          function Ti(MM, rM, iM) {
                            if (MM.age += iM, MM.age >= MM.life) return !1;
                            const OM = function(MM) {
                              return 0 === MM.velocityFactors.length ? 1 : Ki(MM.velocityFactors, MM.age / MM.life, (rM => MM.velocityFactors[rM].factor), Fi)
                            }(MM) * iM;
                            for (let jM = 0; jM < 3; jM++) {
                              var SM;
                              MM.pos[jM] += MM.dir[jM] * OM, MM.dir[jM] += (null !== (SM = rM[jM]) && void 0 !== SM ? SM : 0) * iM
                            }
                            return !0
                          }

                          function Vi(MM) {
                            return String(Math.round(1e6 * MM) / 1e6)
                          }

                          function ci(MM) {
                            return `[${MM.map(Vi).join(", ")}]`
                          }

                          function MO(MM, rM) {
                            const iM = `${rM}    `;
                            return `[\n${(Bi(MM)?MM.map((MM=>{const rM=[`${iM}    timeFraction: ${Vi(MM.timeFraction)},`,`${iM}    minColor: ${ci(MM.minColor)},`];return MM.maxColor&&rM.push(`${iM}    maxColor: ${ci(MM.maxColor)},`),`${iM}{\n${rM.join("\n")}\n${iM}},`})):MM.map((MM=>`
                            $ {
                              iM
                            } {
                              color: $ {
                                ci(MM.color)
                              }
                            }, `))).join("\n")}\n${rM}]`
                          }
                          const rO = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            iO = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const OO = .6;

                          function SO(MM, rM) {
                            return `${rM?"song":"sound"}:${MM}`
                          }
                          let jO = {
                              track: null,
                              volume: OO
                            },
                            aO = null,
                            PO = 0,
                            nO = 0;
                          const QO = new Set;

                          function zO(MM) {
                            jO = {
                              ...jO,
                              ...MM
                            }, QO.forEach((MM => {
                              MM()
                            }))
                          }

                          function LO(MM) {
                            jO.track && zO({
                              track: {
                                ...jO.track,
                                ...MM
                              }
                            })
                          }

                          function mO(MM) {
                            const [rM, iM] = (0, OM.useState)((() => MM(jO))), SM = (0, OM.useRef)(MM);
                            return SM.current = MM, (0, OM.useEffect)((() => {
                              const MM = () => {
                                iM((() => SM.current(jO)))
                              };
                              return QO.add(MM), MM(), () => {
                                QO.delete(MM)
                              }
                            }), []), rM
                          }

                          function HO() {
                            PO++;
                            const MM = aO;
                            aO = null, null === MM || void 0 === MM || MM.stop()
                          }

                          function hO(MM, rM) {
                            let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            HO();
                            const SM = PO,
                              {
                                track: jM
                              } = jO,
                              aM = jM && jM.name === MM && jM.isSong === rM ? jM.duration : 0;
                            nO = OM, zO({
                              track: {
                                name: MM,
                                isSong: rM,
                                status: "loading",
                                duration: aM
                              }
                            }), Promise.all([iM.e(245), iM.e(274)]).then((() => iM(40915))).then((iM => {
                              let {
                                playDocsSound: jM
                              } = iM;
                              SM === PO && (aO = jM(MM, rM, jO.volume, OM, {
                                onPlay: MM => {
                                  SM === PO && LO({
                                    status: "playing",
                                    duration: MM
                                  })
                                },
                                onEnd: MM => {
                                  var rM, iM;
                                  SM === PO && (aO = null, MM ? zO({
                                    track: null
                                  }) : (nO = null !== (rM = null === (iM = jO.track) || void 0 === iM ? void 0 : iM.duration) && void 0 !== rM ? rM : 0, LO({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((rM => {
                              console.error(`Could not play docs sound ${MM}`, rM), SM === PO && zO({
                                track: null
                              })
                            }))
                          }

                          function JO() {
                            const {
                              track: MM
                            } = jO;
                            if (!MM) return;
                            if ("playing" === MM.status && aO) return nO = aO.XE(), aO.pause(), void LO({
                              status: "paused"
                            });
                            if ("loading" === MM.status) return HO(), void LO({
                              status: "paused"
                            });
                            if (aO) return void aO.resume();
                            const rM = MM.duration > 0 && nO >= MM.duration - .05;
                            hO(MM.name, MM.isSong, rM ? 0 : nO)
                          }

                          function dO() {
                            var MM;
                            return aO && "playing" === (null === (MM = jO.track) || void 0 === MM ? void 0 : MM.status) ? aO.XE() : nO
                          }

                          function yO(MM) {
                            var rM;
                            null === (rM = aO) || void 0 === rM || rM.setVolume(MM), zO({
                              volume: MM
                            })
                          }

                          function lO() {
                            HO(), nO = 0, zO({
                              track: null
                            })
                          }
                          const EO = (0, OM.createContext)(null);
                          let UO = null;

                          function GO() {
                            const [MM, rM] = (0, OM.useState)(null);
                            return (0, OM.useEffect)((() => {
                              let MM = !1;
                              return UO ??= Promise.all([iM.e(84), iM.e(87), iM.e(85), iM.e(86), iM.e(202), iM.e(113), iM.e(249)]).then((() => iM(40906))), UO.then((iM => {
                                MM || rM(iM)
                              }), (MM => {
                                console.error("Could not load the docs gallery's textures", MM), UO = null
                              })), () => {
                                MM = !0
                              }
                            }), []), MM
                          }
                          const CO = 24,
                            eO = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function bO(MM, rM) {
                            const iM = "skins" === MM ? function(MM, rM) {
                              const iM = fi.find((rM => MM.startsWith(rM.heading)));
                              return iM ? function(MM, rM) {
                                return `${MM}-${rM}`
                              }(iM.prefix, rM) : null
                            }(rM.heading, rM.name) : null;
                            return null === iM ? null : `${oi}/${iM}.webp`
                          }

                          function wO(MM) {
                            let {
                              kind: rM,
                              entry: iM,
                              assets: SM,
                              renderedUrl: aM
                            } = MM;
                            const {
                              name: PM
                            } = iM, [nM, QM] = (0, OM.useState)(!1);
                            if ("icons" === rM && Yr(PM)) return (0, hM.jsx)(Gi.b, {
                              className: "DocsTileIcon",
                              name: PM
                            });
                            let zM = null;
                            var LM;
                            if ("icons" === rM) zM = null !== (LM = null === SM || void 0 === SM ? void 0 : SM.getIngameIconUrl(PM)) && void 0 !== LM ? LM : null;
                            else if ("particles" === rM) {
                              var mM, HM, JM;
                              zM = null !== (mM = null === SM || void 0 === SM ? void 0 : SM.getParticleTextureUrl(null !== (HM = null === (JM = Ai(PM)) || void 0 === JM ? void 0 : JM.texture) && void 0 !== HM ? HM : PM)) && void 0 !== mM ? mM : null
                            } else "skins" === rM && (zM = null !== aM && void 0 !== aM ? aM : eO.test(PM) ? `/textures/charSkins/previews/${PM}_preview.png` : null);
                            return !zM || nM ? (0, hM.jsx)(dM, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === rM ? "person" : "image"
                            }) : (0, hM.jsx)("img", {
                              className: jM()("DocsTileImage", {
                                Pixelated: "skins" !== rM
                              }),
                              src: zM,
                              srcSet: zM === aM ? `${zM} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${zM}`), QM(!0)
                              }
                            })
                          }

                          function tO(MM) {
                            let {
                              entry: rM,
                              isSong: iM
                            } = MM;
                            const OM = mO((MM => {
                                let {
                                  track: OM
                                } = MM;
                                return (null === OM || void 0 === OM ? void 0 : OM.name) === rM.name && OM.isSong === iM ? OM.status : null
                              })),
                              SM = null !== OM && "paused" !== OM;
                            return (0, hM.jsxs)("button", {
                              type: "button",
                              id: rM.anchor,
                              className: jM()("DocsSoundTile", {
                                Playing: SM
                              }),
                              "data-docs-track": SO(rM.name, iM),
                              "aria-label": SM ? `Pause ${rM.name}` : `Play ${rM.name}`,
                              onClick: () => {
                                null !== OM ? JO() : hO(rM.name, iM)
                              },
                              children: [(0, hM.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, hM.jsx)(dM, {
                                  name: SM ? "pause" : "play"
                                })
                              }), (0, hM.jsx)("code", {
                                className: "DocsSoundName",
                                children: rM.name
                              }), rM.caption && (0, hM.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: rM.caption
                              })]
                            })
                          }

                          function gO(MM) {
                            let {
                              kind: rM,
                              names: iM,
                              isSongs: SM
                            } = MM;
                            const aM = GO(),
                              [PM, nM] = lM(),
                              QM = !1 === (null === PM || void 0 === PM ? void 0 : PM.failed) ? PM.text : null,
                              zM = (0, OM.useContext)(EO),
                              [LM, mM] = (0, OM.useState)(""),
                              HM = LM.trim().toLowerCase(),
                              JM = HM ? iM.filter((MM => MM.name.toLowerCase().includes(HM))) : iM;
                            return (0, hM.jsxs)("div", {
                              className: "DocsGallery",
                              children: [iM.length > CO && (0, hM.jsx)(Ui, {
                                className: "DocsGalleryFilter",
                                value: LM,
                                placeholder: `Filter ${iM.length} names\u2026`,
                                label: "Filter names",
                                onChange: mM,
                                count: HM ? {
                                  visible: JM.length,
                                  total: iM.length
                                } : null
                              }), (0, hM.jsx)("div", {
                                className: jM()("DocsGalleryGrid", `Kind-${rM}`, {
                                  Songs: SM
                                }),
                                children: JM.map((MM => {
                                  if ("sounds" === rM) return (0, hM.jsx)(tO, {
                                    entry: MM,
                                    isSong: SM
                                  }, MM.anchor);
                                  if (zM && "particles" === rM && Ai(MM.name)) return (0, hM.jsxs)("button", {
                                    type: "button",
                                    id: MM.anchor,
                                    className: jM()("DocsTile Previewable", {
                                      Copied: QM === MM.name
                                    }),
                                    title: `Play "${MM.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      zM(MM.name), nM(MM.name)
                                    },
                                    children: [(0, hM.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, hM.jsx)(wO, {
                                        kind: rM,
                                        entry: MM,
                                        assets: aM,
                                        renderedUrl: null
                                      }), (0, hM.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, hM.jsx)(dM, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, hM.jsx)("span", {
                                      className: "DocsTileName",
                                      children: QM === MM.name ? "Copied!" : MM.name
                                    })]
                                  }, MM.anchor);
                                  const iM = bO(rM, MM);
                                  return (0, hM.jsxs)("button", {
                                    type: "button",
                                    id: MM.anchor,
                                    className: jM()("DocsTile", {
                                      Copied: QM === MM.name
                                    }),
                                    title: `Copy "${MM.name}"`,
                                    onClick: () => {
                                      nM(MM.name)
                                    },
                                    children: [(0, hM.jsx)("span", {
                                      className: jM()("DocsTilePreview", {
                                        Rendered: null !== iM
                                      }),
                                      children: (0, hM.jsx)(wO, {
                                        kind: rM,
                                        entry: MM,
                                        assets: aM,
                                        renderedUrl: iM
                                      })
                                    }), (0, hM.jsx)("span", {
                                      className: "DocsTileName",
                                      children: QM === MM.name ? "Copied!" : MM.name
                                    })]
                                  }, MM.anchor)
                                }))
                              })]
                            })
                          }

                          function uO(MM) {
                            let {
                              kind: rM,
                              content: iM,
                              blocks: OM
                            } = MM;
                            return (0, hM.jsx)(hM.Fragment, {
                              children: Zi(rM, iM, OM).map(((MM, iM) => "block" === MM.kind ? (0, hM.jsx)(mi, {
                                block: MM.block
                              }, iM) : (0, hM.jsx)(gO, {
                                kind: rM,
                                names: MM.names,
                                isSongs: MM.isSongs
                              }, iM)))
                            })
                          }
                          const RO = [{
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

                          function pO(MM) {
                            let {
                              cards: rM = RO,
                              label: iM = "Start here"
                            } = MM;
                            const SM = (0, OM.useContext)(Hr);
                            return (0, hM.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": iM,
                              children: rM.map((MM => {
                                let {
                                  pageId: rM,
                                  countNoun: iM
                                } = MM;
                                const OM = fM(rM);
                                return (0, hM.jsxs)(aM.b, {
                                  to: FM(SM, OM),
                                  className: "DocsLandingCard",
                                  children: [(0, hM.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, hM.jsx)(dM, {
                                      name: OM.icon
                                    })
                                  }), (0, hM.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: OM.title
                                  }), (0, hM.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: OM.summary
                                  }), iM && (0, hM.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [NM(OM).sections.length, " ", iM]
                                  })]
                                }, rM)
                              }))
                            })
                          }
                          const WO = 240;

                          function sO(MM) {
                            let {
                              faces: rM
                            } = MM;
                            return (0, hM.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, hM.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${rM.top}")`
                                }
                              }), (0, hM.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${rM.left}")`
                                }
                              }), (0, hM.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${rM.right}")`
                                }
                              })]
                            })
                          }

                          function DO(MM) {
                            let {
                              src: rM
                            } = MM;
                            const [iM, SM] = (0, OM.useState)(!1);
                            return iM ? null : (0, hM.jsx)("img", {
                              src: rM,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${rM}`), SM(!0)
                              }
                            })
                          }

                          function kO(MM) {
                            let {
                              kind: rM
                            } = MM;
                            const iM = Ei(rM),
                              SM = GO(),
                              aM = (0, PM.u)(),
                              [nM, QM] = (0, OM.useState)(""),
                              [zM, LM] = (0, OM.useState)(null),
                              [mM, HM] = (0, OM.useState)(WO),
                              [JM, yM] = (0, OM.useState)(null),
                              lM = (0, OM.useRef)(null),
                              UM = nM.trim().toLowerCase();
                            (0, OM.useEffect)((() => {
                              const MM = (0, bM.q)(aM.hash),
                                OM = iM.entries.find((iM => Di(rM, iM.name) === MM));
                              if (OM) lM.current = OM.name, QM(OM.name), LM(null), yM(OM.name);
                              else if (null !== lM.current) {
                                const MM = lM.current;
                                lM.current = null, QM((rM => rM === MM ? "" : rM)), yM(null)
                              }
                            }), [iM, rM, aM.hash, aM.key]), (0, OM.useEffect)((() => {
                              var MM;
                              null !== JM && (null === (MM = document.getElementById(Di(rM, JM))) || void 0 === MM || MM.scrollIntoView({
                                block: "center"
                              }))
                            }), [rM, JM]);
                            const GM = iM.entries.filter((MM => (!UM || MM.name.toLowerCase().includes(UM)) && (!zM || MM.variants.includes(zM))));
                            return (0, hM.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [iM.notes.length > 0 && (0, hM.jsx)("div", {
                                className: "DocsProse",
                                children: iM.notes.map((MM => (0, hM.jsx)("p", {
                                  children: MM
                                }, MM)))
                              }), iM.legend.length > 0 && (0, hM.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, hM.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, hM.jsx)("thead", {
                                    children: (0, hM.jsxs)("tr", {
                                      children: [(0, hM.jsx)("th", {
                                        children: "Code"
                                      }), (0, hM.jsx)("th", {
                                        children: "Variant"
                                      }), (0, hM.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, hM.jsx)("tbody", {
                                    children: iM.legend.map((MM => (0, hM.jsxs)("tr", {
                                      children: [(0, hM.jsx)("td", {
                                        children: (0, hM.jsx)("button", {
                                          type: "button",
                                          className: jM()("DocsVariantChip", {
                                            Active: zM === MM.code
                                          }),
                                          "aria-pressed": zM === MM.code,
                                          title: `Show only ${rM} with ${MM.meaning} variants`,
                                          onClick: () => {
                                            LM(zM === MM.code ? null : MM.code)
                                          },
                                          children: MM.code
                                        })
                                      }), (0, hM.jsx)("td", {
                                        children: MM.meaning
                                      }), (0, hM.jsx)("td", {
                                        children: (0, hM.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: MM.usage
                                        })
                                      })]
                                    }, MM.code)))
                                  })]
                                })
                              }), iM.examples.length > 0 && (0, hM.jsx)(eM, {
                                lang: "text",
                                code: iM.examples.join("\n")
                              }), (0, hM.jsx)(Ui, {
                                className: "DocsFilterBar",
                                value: nM,
                                placeholder: `Search ${iM.entries.length} ${rM}\u2026`,
                                label: `Search ${rM}`,
                                onChange: MM => {
                                  QM(MM), HM(WO)
                                },
                                count: UM || zM ? {
                                  visible: GM.length,
                                  total: iM.entries.length
                                } : null,
                                children: zM && (0, hM.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    LM(null)
                                  },
                                  children: [zM, " ", (0, hM.jsx)(dM, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, hM.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: GM.slice(0, mM).map((MM => {
                                  const iM = "blocks" === rM ? null === SM || void 0 === SM ? void 0 : SM.getBlockFaces(MM.name) : null,
                                    OM = SM && !iM ? SM.getItemTextureUrl(MM.name) : null;
                                  return (0, hM.jsxs)("div", {
                                    id: Di(rM, MM.name),
                                    className: jM()("DocsCatalogueTile", {
                                      Linked: MM.name === JM
                                    }),
                                    children: [(0, hM.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [iM && (0, hM.jsx)(sO, {
                                        faces: iM
                                      }), OM && (0, hM.jsx)(DO, {
                                        src: OM
                                      })]
                                    }), (0, hM.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: MM.name
                                    }), MM.variants.length > 0 && (0, hM.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: MM.variants.map((MM => (0, hM.jsx)("span", {
                                        children: MM
                                      }, MM)))
                                    }), (0, hM.jsx)(EM, {
                                      text: MM.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, MM.name)
                                }))
                              }), GM.length > mM && (0, hM.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  HM(GM.length)
                                },
                                children: ["Show all ", GM.length]
                              }), 0 === GM.length && (0, hM.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", rM, " match."]
                              })]
                            })
                          }
                          var ZO = iM(5221),
                            oO = iM(1663);
                          const fO = .95 * ZO.e;

                          function YO(MM) {
                            return /^\s*```/.test(MM)
                          }

                          function NO(MM, rM) {
                            const iM = [
                              []
                            ];
                            let OM = !1;
                            for (const SM of MM.split("\n")) !OM && rM(SM) && iM.at(-1).length > 0 && iM.push([]), YO(SM) && (OM = !OM), iM.at(-1).push(SM);
                            return iM.map((MM => MM.join("\n").trim())).filter(Boolean)
                          }

                          function AO(MM, rM) {
                            const iM = `${"#".repeat(rM)} `,
                              OM = [];
                            let SM = !1;
                            for (const jM of MM.split("\n")) YO(jM) ? SM = !SM : !SM && jM.startsWith(iM) && OM.push(jM.slice(iM.length).trim());
                            return OM
                          }

                          function xO(MM) {
                            return MM.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class vO {
                            constructor(MM, rM) {
                              this.origin = rM, this.pages = void 0, this.partPaths = new Map;
                              const iM = MM.map((MM => {
                                const rM = rM => this.resolveLinks(MM, rM).length,
                                  iM = function(MM, rM) {
                                    const iM = MM.map((MM => rM(MM.markdown) + 2)),
                                      OM = iM.reduce(((MM, rM) => MM + rM), 0),
                                      SM = OM / Math.ceil(OM / fO),
                                      jM = [];
                                    let aM = 0;
                                    return MM.forEach(((MM, rM) => {
                                      const OM = iM[rM];
                                      (0 === jM.length || aM + OM > fO || aM + OM / 2 > SM) && (jM.push([]), aM = 0), jM.at(-1).push(MM), aM += OM
                                    })), jM
                                  }(function(MM, rM) {
                                    return NO(MM, (MM => MM.startsWith("## "))).flatMap((MM => {
                                      var iM;
                                      const OM = null !== (iM = AO(MM, 2)[0]) && void 0 !== iM ? iM : "";
                                      if (rM(MM) <= fO) return [{
                                        markdown: MM,
                                        section: OM
                                      }];
                                      let SM = !1,
                                        jM = "";
                                      return NO(MM, (MM => {
                                        const rM = SM && "" !== MM.trim();
                                        return SM = "" === MM.trim(), rM
                                      })).map((MM => {
                                        var rM;
                                        const iM = AO(MM, 3),
                                          SM = MM.startsWith("### ") ? iM[0] : jM;
                                        return jM = null !== (rM = iM.at(-1)) && void 0 !== rM ? rM : jM, {
                                          markdown: MM,
                                          section: OM || SM
                                        }
                                      }))
                                    }))
                                  }(xO(MM), rM), rM);
                                return {
                                  page: MM,
                                  groups: iM.length > 1 ? iM : []
                                }
                              }));
                              for (const {
                                  page: OM,
                                  groups: SM
                                }
                                of iM) SM.forEach(((MM, rM) => {
                                const iM = (0, ZO.u)(OM.slug, rM);
                                for (const SM of MM.flatMap((MM => [...AO(MM.markdown, 2), ...AO(MM.markdown, 3)]))) {
                                  const MM = `${OM.id}#${(0,bM.r)(SM)}`;
                                  this.partPaths.has(MM) || this.partPaths.set(MM, iM)
                                }
                              }));
                              this.pages = iM.map((MM => {
                                let {
                                  page: rM,
                                  groups: iM
                                } = MM;
                                return {
                                  page: rM,
                                  path: (0, ZO.q)(rM.slug),
                                  markdown: `# ${rM.title}\n\n${this.resolveLinks(rM,xO(rM))}\n`,
                                  parts: iM.map(((MM, OM) => this.renderPart(rM, MM, OM, iM.length)))
                                }
                              }))
                            }
                            url(MM) {
                              return `${this.origin}${MM}`
                            }
                            getPage(MM) {
                              return this.pages.find((rM => rM.page.id === MM))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((MM => (MM.parts.length > 0 ? MM.parts : [{
                                path: MM.path,
                                label: "",
                                markdown: MM.markdown
                              }]).filter((MM => MM.markdown.length > ZO.e))))
                            }
                            markdownUrl(MM, rM) {
                              const iM = rM && this.partPaths.get(`${MM.id}#${rM}`) || (0, ZO.q)(MM.slug);
                              return this.url(rM ? `${iM}#${rM}` : iM)
                            }
                            resolveLinks(MM, rM) {
                              return rM.replace(/\]\((#[^)]+)\)/g, ((rM, iM) => {
                                var OM;
                                const SM = null !== (OM = xM(iM)) && void 0 !== OM ? OM : this.samePageTarget(MM, iM);
                                return SM ? `](${this.markdownUrl(SM.page,SM.anchor)})` : rM
                              }))
                            }
                            samePageTarget(MM, rM) {
                              const iM = (0, bM.r)(rM.slice(1));
                              return AM(MM, iM) ? {
                                page: MM,
                                anchor: iM
                              } : null
                            }
                            renderPart(MM, rM, iM, OM) {
                              const SM = function(MM) {
                                  const rM = MM.map((MM => MM.section)).filter(Boolean);
                                  if (0 === rM.length) return "";
                                  const iM = rM[0],
                                    OM = rM.at(-1);
                                  return iM === OM ? iM : `${iM} to ${OM}`
                                }(rM),
                                jM = rM.map((MM => MM.markdown)).join("\n\n"),
                                aM = SM ? `It covers ${SM}. ` : "",
                                PM = `Part ${iM+1} of ${OM} of [${MM.title}](${this.url((0,ZO.q)(MM.slug))}). ${aM}[llms.txt](${this.url(ZO.h)}) lists every part.`;
                              return {
                                path: (0, ZO.u)(MM.slug, iM),
                                label: SM,
                                markdown: `# ${MM.title}, part ${iM+1} of ${OM}\n\n${PM}\n\n${this.resolveLinks(MM,jM)}\n`
                              }
                            }
                            llmsTxt(MM) {
                              const rM = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${FO(ZO.e)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const iM of oM) {
                                rM.push("", `## ${iM.title}`, "");
                                for (const MM of iM.pageIds) {
                                  const iM = this.getPage(MM),
                                    {
                                      page: OM,
                                      parts: SM
                                    } = iM,
                                    jM = `About ${FO(iM.markdown.length)} tokens${SM.length>0?`, in ${SM.length} parts:`:"."}`;
                                  rM.push(`- [${OM.title}](${this.url(iM.path)}): ${OM.summary} ${jM}`), SM.forEach(((MM, iM) => {
                                    rM.push(`  - [Part ${iM+1}${MM.label?`: ${MM.label}`:""}](${this.url(MM.path)})`)
                                  }))
                                }
                              }
                              return rM.push("", "## Optional", "", `- [Every page in one file](${this.url(ZO.f)}): About ${FO(MM.length)} tokens, for a model with a large context window.`, ""), rM.join("\n")
                            }
                            llmsFullTxt() {
                              return oM.flatMap((MM => MM.pageIds.map((MM => this.getPage(MM).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const MM = this.llmsFullTxt(),
                                rM = this.llmsTxt(MM),
                                iM = new Map([
                                  [ZO.m, rM],
                                  [ZO.h, rM],
                                  [ZO.f, MM]
                                ]);
                              for (const OM of this.pages) {
                                iM.set(OM.path, OM.markdown);
                                for (const MM of OM.parts) iM.set(MM.path, MM.markdown)
                              }
                              return iM
                            }
                          }

                          function FO(MM) {
                            return `${Math.max(1,Math.round(MM/4e3))}K`
                          }
                          let BO = null;

                          function XO() {
                            return BO ??= new vO(ZM, oO.d), BO
                          }
                          var IO = iM(5230);
                          const KO = [IO.d, IO.m];

                          function qO(MM) {
                            return XO().getPage(MM.id).parts.length > 0 ? `Read ${ZO.k}, then the parts of the Bloxd Code API's ${MM.title} page it lists, so I can ask questions about it.` : `Read ${oO.d}${(0,ZO.q)(MM.slug)} so I can ask questions about it. ${IO.i}`
                          }

                          function TO(MM) {
                            let {
                              page: rM
                            } = MM;
                            const [iM, OM] = lM();
                            return (0, hM.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, hM.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  OM(XO().getPage(rM.id).markdown)
                                },
                                children: [(0, hM.jsx)(dM, {
                                  name: !1 === (null === iM || void 0 === iM ? void 0 : iM.failed) ? "check" : "copy"
                                }), (0, hM.jsx)("span", {
                                  children: iM ? iM.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), KO.map((MM => (0, hM.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, IO.c)(MM, qO(rM)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, hM.jsx)(dM, {
                                  name: "external-link"
                                }), (0, hM.jsxs)("span", {
                                  children: ["Open in ", MM.name]
                                })]
                              }, MM.name)))]
                            })
                          }

                          function VO(MM) {
                            return `#${[0,1,2].map((rM=>Math.round(Math.min(255,Math.max(0,MM[rM]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function cO(MM) {
                            return [parseInt(MM.slice(1, 3), 16), parseInt(MM.slice(3, 5), 16), parseInt(MM.slice(5, 7), 16)]
                          }

                          function MS(MM) {
                            let {
                              label: rM,
                              min: iM,
                              max: OM,
                              step: SM,
                              low: jM,
                              high: aM,
                              onChange: PM
                            } = MM;
                            return (0, hM.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, hM.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, hM.jsx)("span", {
                                  children: rM
                                }), (0, hM.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: jM === aM ? jM : `${jM}\u2013${aM}`
                                })]
                              }), (0, hM.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, hM.jsx)("input", {
                                  type: "range",
                                  min: iM,
                                  max: OM,
                                  step: SM,
                                  value: Math.min(OM, jM),
                                  "aria-label": `Minimum ${rM.toLowerCase()}`,
                                  onChange: MM => {
                                    const rM = Number(MM.target.value);
                                    PM(rM, Math.max(rM, aM))
                                  }
                                }), (0, hM.jsx)("input", {
                                  type: "range",
                                  min: iM,
                                  max: OM,
                                  step: SM,
                                  value: Math.min(OM, aM),
                                  "aria-label": `Maximum ${rM.toLowerCase()}`,
                                  onChange: MM => {
                                    const rM = Number(MM.target.value);
                                    PM(Math.min(rM, jM), rM)
                                  }
                                })]
                              })]
                            })
                          }

                          function rS(MM) {
                            let {
                              label: rM,
                              min: iM,
                              max: OM,
                              step: SM,
                              value: jM,
                              onChange: aM,
                              format: PM = String
                            } = MM;
                            return (0, hM.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, hM.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, hM.jsx)("span", {
                                  children: rM
                                }), (0, hM.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: PM(jM)
                                })]
                              }), (0, hM.jsx)("input", {
                                type: "range",
                                min: iM,
                                max: OM,
                                step: SM,
                                value: Math.min(OM, Math.max(iM, jM)),
                                "aria-label": rM,
                                onChange: MM => {
                                  aM(Number(MM.target.value))
                                }
                              })]
                            })
                          }

                          function iS(MM) {
                            let {
                              opts: rM,
                              onChange: iM
                            } = MM;
                            const OM = rM.colorGradients;
                            if (!Bi(OM)) return (0, hM.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, hM.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, hM.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, hM.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: OM.map(((MM, rM) => (0, hM.jsx)("input", {
                                  type: "color",
                                  value: VO(MM.color),
                                  "aria-label": `Colour ${rM+1}`,
                                  onChange: MM => {
                                    const SM = [...OM];
                                    SM[rM] = {
                                      color: cO(MM.target.value)
                                    }, iM(SM)
                                  }
                                }, rM)))
                              })]
                            });
                            const SM = (MM, rM) => {
                              const SM = [...OM];
                              SM[MM] = rM, iM(SM)
                            };
                            return (0, hM.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, hM.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, hM.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, hM.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), OM.map(((MM, rM) => {
                                var iM;
                                const OM = null !== (iM = MM.maxColor) && void 0 !== iM ? iM : MM.minColor;
                                return (0, hM.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, hM.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * MM.timeFraction), "%"]
                                  }), (0, hM.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${VO(MM.minColor)}, ${VO(OM)})`
                                    }
                                  }), (0, hM.jsx)("input", {
                                    type: "color",
                                    value: VO(MM.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*MM.timeFraction)}%`,
                                    onChange: iM => {
                                      SM(rM, {
                                        ...MM,
                                        minColor: [...cO(iM.target.value), MM.minColor[3]]
                                      })
                                    }
                                  }), (0, hM.jsx)("input", {
                                    type: "color",
                                    value: VO(OM),
                                    "aria-label": `Maximum colour at ${Math.round(100*MM.timeFraction)}%`,
                                    onChange: iM => {
                                      SM(rM, {
                                        ...MM,
                                        maxColor: [...cO(iM.target.value), OM[3]]
                                      })
                                    }
                                  })]
                                }, rM)
                              }))]
                            })
                          }
                          const OS = [-.5, -.5, -.5],
                            SS = [.5, .5, .5],
                            jS = [0, 1, 2, 3, 4, 5, 6, 7].map((MM => [1 & MM ? SS[0] : OS[0], 2 & MM ? SS[1] : OS[1], 4 & MM ? SS[2] : OS[2]]));class aS {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(MM, rM, iM, OM) {
                              const SM = Math.round(31 * rM),
                                jM = Math.round(31 * iM),
                                aM = Math.round(31 * OM),
                                PM = `${SM}|${jM}|${aM}`;
                              let nM = this.tints.get(MM);
                              (!nM || nM.size > 2e3) && (nM = new Map, this.tints.set(MM, nM));
                              let QM = nM.get(PM);
                              if (QM) return QM;
                              QM = document.createElement("canvas"), QM.width = MM.naturalWidth || 16, QM.height = MM.naturalHeight || 16;
                              const zM = QM.getContext("2d");
                              return zM ? (zM.imageSmoothingEnabled = !1, zM.drawImage(MM, 0, 0, QM.width, QM.height), zM.globalCompositeOperation = "multiply", zM.fillStyle = `rgb(${SM/31*255}, ${jM/31*255}, ${aM/31*255})`, zM.fillRect(0, 0, QM.width, QM.height), zM.globalCompositeOperation = "destination-in", zM.drawImage(MM, 0, 0, QM.width, QM.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), nM.set(PM, QM), QM
                            }
                          }

                          function PS(MM) {
                            let {
                              opts: rM,
                              textureUrl: iM,
                              burst: SM,
                              paused: jM
                            } = MM;
                            const aM = (0, OM.useRef)(null),
                              PM = (0, OM.useRef)(rM);
                            PM.current = rM;
                            const nM = (0, OM.useRef)(jM);
                            nM.current = jM;
                            const QM = (0, OM.useRef)(null),
                              zM = (0, OM.useRef)(null),
                              LM = (0, OM.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(MM) {
                                let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const iM = [-.5, -.5, -.5],
                                  OM = [.5, .5, .5];
                                let SM = .5;
                                for (let jM = 0; jM < 40; jM++) {
                                  const jM = Ii(MM, iM, OM, rM),
                                    aM = Math.max(jM.life / 30, .001);
                                  for (; Ti(jM, MM.gravity, aM);) SM = Math.max(SM, Math.hypot(jM.pos[0], jM.pos[1], jM.pos[2]) + jM.size / 2)
                                }
                                return SM
                              }(rM)))), [rM]),
                              mM = (0, OM.useRef)(LM);
                            return mM.current = LM, (0, OM.useEffect)((() => {
                              if (QM.current = null, !iM) return;
                              const MM = new Image;
                              let rM = !1;
                              return MM.onload = () => {
                                rM || (QM.current = MM)
                              }, MM.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${iM}`)
                              }, MM.src = iM, () => {
                                rM = !0
                              }
                            }), [iM]), (0, OM.useEffect)((() => {
                              var MM;
                              null === (MM = zM.current) || void 0 === MM || MM.call(zM)
                            }), [rM, SM]), (0, OM.useEffect)((() => {
                              const MM = aM.current,
                                rM = null === MM || void 0 === MM ? void 0 : MM.getContext("2d");
                              if (!MM || !rM) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const iM = new aS;
                              let OM = [],
                                SM = 0,
                                jM = -.7,
                                LM = mM.current,
                                HM = performance.now(),
                                hM = 0,
                                JM = !0,
                                dM = null;
                              const yM = () => {
                                const MM = PM.current,
                                  rM = Math.min(400, Math.max(0, Math.ceil(MM.manualEmitCount)));
                                OM = [];
                                for (let iM = 0; iM < rM; iM++) OM.push(Ii(MM, OS, SS, Math.random));
                                SM = 0
                              };
                              zM.current = yM, yM();
                              const lM = aM => {
                                hM = requestAnimationFrame(lM);
                                const zM = Math.min(.05, (aM - HM) / 1e3);
                                if (HM = aM, !JM) return;
                                const EM = window.devicePixelRatio || 1,
                                  UM = Math.round(MM.clientWidth * EM),
                                  GM = Math.round(MM.clientHeight * EM);
                                if (0 === UM || 0 === GM) return;
                                MM.width === UM && MM.height === GM || (MM.width = UM, MM.height = GM);
                                const CM = PM.current;
                                null === dM && (jM += .18 * zM), LM += (mM.current - LM) * Math.min(1, 4 * zM);
                                const eM = .6 * zM;
                                OM = OM.filter((MM => Ti(MM, CM.gravity, eM))), 0 !== OM.length || nM.current || (SM += zM, SM > .6 && yM());
                                const bM = function(MM, rM, iM, OM) {
                                  const SM = 3.2 * OM,
                                    jM = .44 * Math.min(MM, rM) * SM / OM,
                                    aM = Math.cos(iM),
                                    PM = Math.sin(iM),
                                    nM = Math.cos(.42),
                                    QM = Math.sin(.42);
                                  return (iM, OM, zM) => {
                                    const LM = iM * PM + zM * aM,
                                      mM = SM - (OM * QM + LM * nM);
                                    if (mM < .05) return null;
                                    const HM = jM / mM;
                                    return {
                                      x: MM / 2 + (iM * aM - zM * PM) * HM,
                                      y: rM / 2 - (OM * nM - LM * QM) * HM,
                                      scale: HM,
                                      depth: mM
                                    }
                                  }
                                }(UM, GM, jM, LM);
                                ! function(MM, rM, iM, OM, SM) {
                                  const jM = MM.createLinearGradient(0, 0, 0, iM);
                                  jM.addColorStop(0, "#23262d"), jM.addColorStop(1, "#16181c"), MM.globalCompositeOperation = "source-over", MM.globalAlpha = 1, MM.fillStyle = jM, MM.fillRect(0, 0, rM, iM);
                                  const aM = (rM, iM) => {
                                      const SM = OM(rM[0], rM[1], rM[2]),
                                        jM = OM(iM[0], iM[1], iM[2]);
                                      SM && jM && (MM.beginPath(), MM.moveTo(SM.x, SM.y), MM.lineTo(jM.x, jM.y), MM.stroke())
                                    },
                                    PM = Math.ceil(SM) + 1,
                                    nM = OS[1];
                                  MM.lineWidth = 1, MM.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let QM = -PM; QM <= PM; QM++) aM([QM + .5, nM, .5 - PM], [QM + .5, nM, PM + .5]), aM([.5 - PM, nM, QM + .5], [PM + .5, nM, QM + .5]);
                                  MM.strokeStyle = "rgba(255, 255, 255, 0.28)", MM.setLineDash([4, 4]);
                                  for (const QM of jS)
                                    for (const MM of jS) {
                                      const rM = [0, 1, 2].filter((rM => QM[rM] !== MM[rM]));
                                      1 === rM.length && QM[rM[0]] < MM[rM[0]] && aM(QM, MM)
                                    }
                                  MM.setLineDash([])
                                }(rM, UM, GM, bM, LM);
                                const wM = QM.current,
                                  tM = OM.map((MM => ({
                                    particle: MM,
                                    at: bM(MM.pos[0], MM.pos[1], MM.pos[2])
                                  }))).filter((MM => null !== MM.at)).sort(((MM, rM) => rM.at.depth - MM.at.depth));
                                rM.imageSmoothingEnabled = !1;
                                for (const MM of function(MM) {
                                    switch (MM) {
                                      case Ni.d.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case Ni.d.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case Ni.d.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case Ni.d.MultiplyAdd:
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
                                  }(CM.blendMode)) {
                                  rM.globalCompositeOperation = MM.operation;
                                  for (const {
                                      particle: OM,
                                      at: SM
                                    }
                                    of tM) {
                                    const [jM, aM, PM, nM] = qi(OM), QM = Math.max(1, OM.size * SM.scale);
                                    rM.globalAlpha = MM.usesAlpha ? Math.min(1, Math.max(0, nM)) : 1, wM ? rM.drawImage(iM.get(wM, jM, aM, PM), SM.x - QM / 2, SM.y - QM / 2, QM, QM) : (rM.fillStyle = `rgb(${255*jM}, ${255*aM}, ${255*PM})`, rM.fillRect(SM.x - QM / 2, SM.y - QM / 2, QM, QM))
                                  }
                                }
                                rM.globalCompositeOperation = "source-over", rM.globalAlpha = 1
                              };
                              hM = requestAnimationFrame(lM);
                              const EM = new IntersectionObserver((MM => {
                                let [rM] = MM;
                                JM = rM.isIntersecting
                              }));
                              EM.observe(MM);
                              const UM = rM => {
                                  dM = rM.clientX, MM.setPointerCapture(rM.pointerId)
                                },
                                GM = MM => {
                                  null !== dM && (jM += .01 * (MM.clientX - dM), dM = MM.clientX)
                                },
                                CM = () => {
                                  dM = null
                                };
                              return MM.addEventListener("pointerdown", UM), MM.addEventListener("pointermove", GM), MM.addEventListener("pointerup", CM), MM.addEventListener("pointercancel", CM), () => {
                                cancelAnimationFrame(hM), EM.disconnect(), zM.current = null, MM.removeEventListener("pointerdown", UM), MM.removeEventListener("pointermove", GM), MM.removeEventListener("pointerup", CM), MM.removeEventListener("pointercancel", CM)
                              }
                            }), []), (0, hM.jsx)("canvas", {
                              ref: aM,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${rM.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const nS = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            QS = [{
                              mode: Ni.d.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: Ni.d.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: Ni.d.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: Ni.d.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: Ni.d.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            zS = (0, OM.forwardRef)((function(MM, rM) {
                              var iM, SM;
                              let {
                                textures: aM
                              } = MM;
                              const PM = GO(),
                                nM = (0, OM.useRef)(null),
                                [QM, zM] = (0, OM.useState)(xi),
                                [LM, mM] = (0, OM.useState)("example"),
                                [HM, JM] = (0, OM.useState)(0),
                                [yM, lM] = (0, OM.useState)(!1),
                                UM = MM => {
                                  const rM = "example" === MM ? xi : Ai(MM);
                                  rM && (zM(rM), mM(MM))
                                };
                              (0, OM.useImperativeHandle)(rM, (() => ({
                                preview: MM => {
                                  var rM;
                                  UM(MM), null === (rM = nM.current) || void 0 === rM || rM.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const GM = MM => {
                                  zM({
                                    ...QM,
                                    ...MM
                                  }), mM(null)
                                },
                                CM = function(MM, rM) {
                                  if (null !== rM) return `${rO}    presetId: "${rM}",\n${iO}\n})`;
                                  const iM = MM.velocityGradients.map((MM => `        {\n            timeFraction: ${Vi(MM.timeFraction)},\n            factor: ${Vi(MM.factor)},\n            factor2: ${Vi(MM.factor2)},\n        },`)),
                                    OM = [`    dir1: ${ci(MM.dir1)},`, `    dir2: ${ci(MM.dir2)},`, iO, `    texture: "${MM.texture}",`, `    minLifeTime: ${Vi(MM.minLifeTime)},`, `    maxLifeTime: ${Vi(MM.maxLifeTime)},`, `    minEmitPower: ${Vi(MM.minEmitPower)},`, `    maxEmitPower: ${Vi(MM.maxEmitPower)},`, `    minSize: ${Vi(MM.minSize)},`, `    maxSize: ${Vi(MM.maxSize)},`, `    manualEmitCount: ${Vi(MM.manualEmitCount)},`, `    gravity: ${ci(MM.gravity)},`, `    colorGradients: ${MO(MM.colorGradients,"    ")},`, `    velocityGradients: ${iM.length>0?`[\n${iM.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${Vi(MM.blendMode)},`];
                                  return void 0 !== MM.hideDist && OM.push(`    hideDist: ${Vi(MM.hideDist)},`), `${rO}${OM.join("\n")}\n})`
                                }(QM, null === LM || "example" === LM ? null : LM),
                                bM = aM.includes(QM.texture) ? aM : [...aM, QM.texture];
                              return (0, hM.jsxs)("section", {
                                ref: nM,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, hM.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, hM.jsxs)("div", {
                                    children: [(0, hM.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, hM.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, hM.jsx)(EM, {
                                    text: CM,
                                    label: "Copy code"
                                  })]
                                }), (0, hM.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, hM.jsx)("button", {
                                    type: "button",
                                    className: jM()("DocsVariantChip", {
                                      Active: "example" === LM
                                    }),
                                    onClick: () => {
                                      UM("example")
                                    },
                                    children: "Example"
                                  }), nS.filter((MM => null !== Ai(MM))).map((MM => (0, hM.jsx)("button", {
                                    type: "button",
                                    className: jM()("DocsVariantChip", {
                                      Active: LM === MM
                                    }),
                                    onClick: () => {
                                      UM(MM)
                                    },
                                    children: MM
                                  }, MM))), (0, hM.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== LM && void 0 !== LM ? LM : "custom",
                                    "aria-label": "Preset",
                                    onChange: MM => {
                                      UM(MM.target.value)
                                    },
                                    children: [(0, hM.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === LM && (0, hM.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), Yi.b.map((MM => (0, hM.jsx)("option", {
                                      value: MM,
                                      children: MM
                                    }, MM)))]
                                  })]
                                }), (0, hM.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, hM.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, hM.jsx)(PS, {
                                      opts: QM,
                                      textureUrl: null !== (iM = null === PM || void 0 === PM ? void 0 : PM.getParticleTextureUrl(QM.texture)) && void 0 !== iM ? iM : null,
                                      burst: HM,
                                      paused: yM
                                    }), (0, hM.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, hM.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          JM(HM + 1)
                                        },
                                        children: [(0, hM.jsx)(dM, {
                                          name: "replay"
                                        }), (0, hM.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, hM.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": yM,
                                        onClick: () => {
                                          lM(!yM)
                                        },
                                        children: [(0, hM.jsx)(dM, {
                                          name: yM ? "play" : "pause"
                                        }), (0, hM.jsx)("span", {
                                          children: yM ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, hM.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, hM.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, hM.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, hM.jsx)("span", {
                                          children: "Texture"
                                        }), (0, hM.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: QM.texture
                                        })]
                                      }), (0, hM.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: bM.map((MM => {
                                          var rM;
                                          const iM = null !== (rM = null === PM || void 0 === PM ? void 0 : PM.getParticleTextureUrl(MM)) && void 0 !== rM ? rM : null;
                                          return (0, hM.jsx)("button", {
                                            type: "button",
                                            className: jM()("DocsParticleTexture", {
                                              Active: QM.texture === MM
                                            }),
                                            title: MM,
                                            "aria-label": MM,
                                            "aria-pressed": QM.texture === MM,
                                            onClick: () => {
                                              GM({
                                                texture: MM
                                              })
                                            },
                                            children: iM ? (0, hM.jsx)("img", {
                                              src: iM,
                                              alt: ""
                                            }) : (0, hM.jsx)(dM, {
                                              name: "image"
                                            })
                                          }, MM)
                                        }))
                                      })]
                                    }), (0, hM.jsx)(rS, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: QM.manualEmitCount,
                                      onChange: MM => {
                                        GM({
                                          manualEmitCount: MM
                                        })
                                      }
                                    }), (0, hM.jsx)(MS, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: QM.minLifeTime,
                                      high: QM.maxLifeTime,
                                      onChange: (MM, rM) => {
                                        GM({
                                          minLifeTime: MM,
                                          maxLifeTime: rM
                                        })
                                      }
                                    }), (0, hM.jsx)(MS, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: QM.minEmitPower,
                                      high: QM.maxEmitPower,
                                      onChange: (MM, rM) => {
                                        GM({
                                          minEmitPower: MM,
                                          maxEmitPower: rM
                                        })
                                      }
                                    }), (0, hM.jsx)(MS, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: QM.minSize,
                                      high: QM.maxSize,
                                      onChange: (MM, rM) => {
                                        GM({
                                          minSize: MM,
                                          maxSize: rM
                                        })
                                      }
                                    }), (0, hM.jsx)(rS, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (SM = QM.gravity[1]) && void 0 !== SM ? SM : 0,
                                      onChange: MM => {
                                        var rM, iM;
                                        GM({
                                          gravity: [null !== (rM = QM.gravity[0]) && void 0 !== rM ? rM : 0, MM, null !== (iM = QM.gravity[2]) && void 0 !== iM ? iM : 0]
                                        })
                                      }
                                    }), (0, hM.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, hM.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, hM.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, hM.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: QM.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: MM => {
                                          GM({
                                            blendMode: Number(MM.target.value)
                                          })
                                        },
                                        children: QS.map((MM => {
                                          let {
                                            mode: rM,
                                            label: iM
                                          } = MM;
                                          return (0, hM.jsx)("option", {
                                            value: rM,
                                            children: iM
                                          }, rM)
                                        }))
                                      })]
                                    }), (0, hM.jsx)(iS, {
                                      opts: QM,
                                      onChange: MM => {
                                        GM({
                                          colorGradients: MM
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, hM.jsx)(eM, {
                                  code: CM,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var LS = iM(4848),
                            mS = iM(2006);

                          function HS(MM, rM) {
                            return MM ? LS.e.includes(rM) ? MM.getIngameIconUrl(rM) : MM.getItemIconUrl(rM) : null
                          }

                          function hS(MM) {
                            var rM, iM, OM;
                            let {
                              part: SM,
                              assets: aM
                            } = MM;
                            const PM = HS(aM, SM.icon),
                              nM = null !== (rM = null === (iM = SM.style) || void 0 === iM ? void 0 : iM.fontSize) && void 0 !== rM ? rM : "1.8em",
                              QM = (0, or.Ub)(SM.style);
                            return (0, hM.jsxs)("span", {
                              className: jM()("DocsBloxdTextIcon", {
                                Missing: !PM
                              }),
                              style: {
                                width: nM,
                                height: nM,
                                opacity: null === (OM = SM.style) || void 0 === OM ? void 0 : OM.opacity
                              },
                              title: PM ? void 0 : `No Bloxd icon, item or block is called "${SM.icon}"`,
                              children: [PM && QM && (0, hM.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: QM,
                                  maskImage: `url("${PM}")`,
                                  WebkitMaskImage: `url("${PM}")`
                                }
                              }), PM ? (0, hM.jsx)("img", {
                                src: PM,
                                alt: "",
                                className: jM()({
                                  Tinted: QM
                                })
                              }) : (0, hM.jsx)(dM, {
                                name: "image"
                              })]
                            })
                          }

                          function JS(MM) {
                            let {
                              parts: rM,
                              className: iM
                            } = MM;
                            const OM = GO(),
                              SM = [];
                            let aM = [];
                            const PM = MM => {
                              aM.length > 0 && (SM.push((0, hM.jsx)(mS.b, {
                                text: aM
                              }, `run-${MM}`)), aM = [])
                            };
                            return rM.forEach(((MM, rM) => {
                              "icon" !== xr(MM) || Yr(MM.icon) ? aM.push(MM) : (PM(rM), SM.push((0, hM.jsx)(hS, {
                                part: MM,
                                assets: OM
                              }, `icon-${rM}`)))
                            })), PM(rM.length), (0, hM.jsx)("div", {
                              className: jM()("DocsStyledTextPreview", iM),
                              children: SM
                            })
                          }
                          const dS = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let yS = null;

                          function lS(MM) {
                            if (yS ??= document.createElement("canvas").getContext("2d"), !yS) return "#000000";
                            yS.fillStyle = "#000000", yS.fillStyle = MM;
                            const rM = yS.fillStyle;
                            return rM.startsWith("#") ? rM : "#000000"
                          }

                          function ES(MM) {
                            let {
                              value: rM,
                              label: iM,
                              onChange: OM
                            } = MM;
                            return (0, hM.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, hM.jsx)("input", {
                                type: "color",
                                value: lS(rM),
                                "aria-label": `${iM} picker`,
                                onChange: MM => {
                                  OM(MM.target.value)
                                }
                              }), (0, hM.jsx)("input", {
                                type: "text",
                                value: rM,
                                placeholder: "#ffb914 or gold",
                                "aria-label": iM,
                                spellCheck: !1,
                                onChange: MM => {
                                  OM(MM.target.value)
                                }
                              })]
                            })
                          }

                          function US(MM) {
                            let {
                              value: rM,
                              fontAwesomeIcons: iM,
                              onChange: SM
                            } = MM;
                            const aM = GO(),
                              [PM, nM] = (0, OM.useState)(Yr(rM) ? "fontAwesome" : "bloxd"),
                              [QM, zM] = (0, OM.useState)(""),
                              LM = QM.trim().toLowerCase(),
                              mM = "bloxd" === PM ? LS.e : iM,
                              HM = LM ? mM.filter((MM => MM.toLowerCase().includes(LM))) : mM;
                            return (0, hM.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, hM.jsx)("input", {
                                type: "text",
                                value: rM,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: MM => {
                                  SM(MM.target.value)
                                }
                              }), (0, hM.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, hM.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((MM => (0, hM.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": PM === MM,
                                    className: jM()("DocsVariantChip", {
                                      Active: PM === MM
                                    }),
                                    onClick: () => {
                                      nM(MM)
                                    },
                                    children: "bloxd" === MM ? `Bloxd icons (${LS.e.length})` : `Font Awesome (${iM.length})`
                                  }, MM))), (0, hM.jsx)("input", {
                                    type: "search",
                                    value: QM,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: MM => {
                                      zM(MM.target.value)
                                    }
                                  })
                                ]
                              }), (0, hM.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [HM.map((MM => {
                                  const iM = "bloxd" === PM ? HS(aM, MM) : null;
                                  return (0, hM.jsx)("button", {
                                    type: "button",
                                    title: MM,
                                    "aria-label": MM,
                                    "aria-pressed": MM === rM,
                                    className: jM()("DocsIconPickerOption", {
                                      Active: MM === rM
                                    }),
                                    onClick: () => {
                                      SM(MM)
                                    },
                                    children: "fontAwesome" === PM ? (0, hM.jsx)(Gi.b, {
                                      name: MM
                                    }) : iM ? (0, hM.jsx)("img", {
                                      src: iM,
                                      alt: ""
                                    }) : (0, hM.jsx)(dM, {
                                      name: "image"
                                    })
                                  }, MM)
                                })), 0 === HM.length && (0, hM.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", QM, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function GS(MM) {
                            let {
                              property: rM,
                              value: iM,
                              fontAwesomeIcons: OM,
                              onChange: SM
                            } = MM;
                            const {
                              field: jM,
                              label: aM
                            } = rM, PM = MM => "" !== MM || rM.isRequired ? MM : void 0;
                            switch (jM.kind) {
                              case "text":
                                return jM.multiline ? (0, hM.jsx)("textarea", {
                                  value: String(null !== iM && void 0 !== iM ? iM : ""),
                                  rows: 2,
                                  "aria-label": aM,
                                  onChange: MM => {
                                    SM(MM.target.value)
                                  }
                                }) : (0, hM.jsx)("input", {
                                  type: "text",
                                  value: String(null !== iM && void 0 !== iM ? iM : ""),
                                  "aria-label": aM,
                                  onChange: MM => {
                                    SM(PM(MM.target.value))
                                  }
                                });
                              case "size":
                                return (0, hM.jsx)("input", {
                                  type: "text",
                                  value: String(null !== iM && void 0 !== iM ? iM : ""),
                                  placeholder: rM.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": aM,
                                  spellCheck: !1,
                                  onChange: MM => {
                                    SM(PM(MM.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, hM.jsx)(ES, {
                                  value: String(null !== iM && void 0 !== iM ? iM : ""),
                                  label: aM,
                                  onChange: MM => {
                                    SM(PM(MM))
                                  }
                                });
                              case "colours": {
                                const MM = Array.isArray(iM) ? iM : [],
                                  rM = MM => {
                                    SM(MM.length > 0 ? MM : void 0)
                                  };
                                return (0, hM.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [MM.map(((iM, OM) => (0, hM.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, hM.jsx)(ES, {
                                      value: iM,
                                      label: `${aM} ${OM+1}`,
                                      onChange: iM => {
                                        rM(MM.map(((MM, rM) => rM === OM ? iM : MM)))
                                      }
                                    }), (0, hM.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${OM+1}`,
                                      onClick: () => {
                                        rM(MM.filter(((MM, rM) => rM !== OM)))
                                      },
                                      children: (0, hM.jsx)(dM, {
                                        name: "cross"
                                      })
                                    })]
                                  }, OM))), (0, hM.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var iM;
                                      rM([...MM, null !== (iM = MM.at(-1)) && void 0 !== iM ? iM : "#ffffff"])
                                    },
                                    children: [(0, hM.jsx)(dM, {
                                      name: "plus"
                                    }), 0 === MM.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var nM;
                                const MM = "number" === typeof iM ? iM : Number(null !== (nM = rM.defaultText) && void 0 !== nM ? nM : 0);
                                return (0, hM.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, hM.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: MM,
                                    "aria-label": aM,
                                    onChange: MM => {
                                      SM(Number(MM.target.value))
                                    }
                                  }), (0, hM.jsx)("output", {
                                    children: MM.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, hM.jsxs)("select", {
                                  value: String(null !== iM && void 0 !== iM ? iM : ""),
                                  "aria-label": aM,
                                  onChange: MM => {
                                    SM(PM(MM.target.value))
                                  },
                                  children: [!rM.isRequired && (0, hM.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", rM.defaultText, ")"]
                                  }), jM.options.map((MM => (0, hM.jsx)("option", {
                                    value: MM,
                                    children: MM
                                  }, MM)))]
                                });
                              case "icon":
                                return (0, hM.jsx)(US, {
                                  value: String(null !== iM && void 0 !== iM ? iM : ""),
                                  fontAwesomeIcons: OM,
                                  onChange: SM
                                })
                            }
                          }

                          function CS(MM) {
                            let rM;
                            try {
                              rM = JSON.parse(MM)
                            } catch (iM) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${iM.message}`
                              }
                            }
                            return ii(rM) ? {
                              part: rM,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function eS(MM) {
                            let {
                              parts: rM,
                              index: iM,
                              fontAwesomeIcons: SM,
                              onChange: jM,
                              vW: aM,
                              onClose: PM
                            } = MM;
                            const nM = (0, OM.useContext)(hr),
                              zM = (0, OM.useRef)(null),
                              LM = rM[iM],
                              mM = xr(LM),
                              [HM, JM] = (0, OM.useState)((() => JSON.stringify(LM, null, 2))),
                              yM = (0, OM.useMemo)((() => "other" === mM ? CS(HM).error : null), [mM, HM]);
                            (0, OM.useEffect)((() => {
                              var MM;
                              null === (MM = zM.current) || void 0 === MM || MM.focus()
                            }), []);
                            const lM = (0, hM.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: MM => {
                                MM.target === MM.currentTarget && PM()
                              },
                              children: (0, hM.jsxs)("div", {
                                ref: zM,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${iM+1}: ${Nr[mM]}`,
                                tabIndex: -1,
                                onKeyDown: MM => {
                                  "Escape" === MM.key ? (MM.stopPropagation(), PM()) : "Tab" === MM.key && zM.current && function(MM, rM) {
                                    const iM = Array.from(MM.querySelectorAll(ur)),
                                      OM = iM[0],
                                      SM = iM.at(-1);
                                    if (!OM || !SM) return;
                                    const jM = document.activeElement;
                                    !rM.shiftKey || jM !== OM && jM !== MM ? rM.shiftKey || jM !== SM || (rM.preventDefault(), OM.focus()) : (rM.preventDefault(), SM.focus())
                                  }(zM.current, MM)
                                },
                                children: [(0, hM.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, hM.jsxs)("div", {
                                    children: [(0, hM.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", iM + 1]
                                    }), (0, hM.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: Nr[mM]
                                    })]
                                  }), (0, hM.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: PM,
                                    children: (0, hM.jsx)(dM, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, hM.jsx)(JS, {
                                  parts: rM,
                                  className: "DocsTextDialogPreview"
                                }), (0, hM.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === mM ? (0, hM.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, hM.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, hM.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: HM,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: MM => {
                                        JM(MM.target.value);
                                        const rM = CS(MM.target.value);
                                        null !== rM.part && jM(rM.part)
                                      }
                                    }), yM && (0, hM.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: yM
                                    })]
                                  }) : Fr[mM].map((MM => {
                                    const rM = Xr(LM, MM.path),
                                      iM = MM.isRequired ? JSON.stringify(Kr(LM, MM.path)) === JSON.stringify(LM) : void 0 === rM;
                                    return (0, hM.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, hM.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, hM.jsx)("span", {
                                          children: MM.label
                                        }), (0, hM.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: iM,
                                          "aria-label": `Reset ${MM.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            jM(Kr(LM, MM.path))
                                          },
                                          children: [(0, hM.jsx)(dM, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, hM.jsx)(GS, {
                                        property: MM,
                                        value: rM,
                                        fontAwesomeIcons: SM,
                                        onChange: rM => {
                                          jM(Ir(LM, MM.path, rM))
                                        }
                                      }), !MM.isRequired && (0, hM.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", MM.defaultText]
                                      })]
                                    }, MM.path.join("."))
                                  }))
                                }), (0, hM.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, hM.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: aM,
                                    children: [(0, hM.jsx)(dM, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, hM.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: PM,
                                    children: "Done"
                                  })]
                                }), (0, hM.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: dS.map((MM => (0, hM.jsx)("option", {
                                    value: MM
                                  }, MM)))
                                })]
                              })
                            });
                            return nM ? (0, QM.createPortal)(lM, nM) : lM
                          }
                          const bS = [{
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
                            wS = Object.keys(Ar);

                          function tS(MM) {
                            let {
                              fontAwesomeIcons: rM
                            } = MM;
                            const [iM, SM] = (0, OM.useState)(bS[0].parts), [aM, PM] = (0, OM.useState)((() => cr(bS[0].parts))), [nM, QM] = (0, OM.useState)(null), [zM, LM] = (0, OM.useState)(!1), [mM, HM] = (0, OM.useState)(null), [JM, yM] = (0, OM.useState)(!1), [lM, EM] = (0, OM.useState)(null), UM = (0, OM.useRef)(null), GM = cr(iM);
                            (0, OM.useLayoutEffect)((() => {
                              var MM;
                              if (!lM) return;
                              const rM = MM => {
                                  var rM;
                                  return null === (rM = UM.current) || void 0 === rM ? void 0 : rM.querySelector(`[data-focus-key="${MM}"]`)
                                },
                                iM = rM(lM.key);
                              null === (MM = iM && !iM.disabled ? iM : rM(lM.fallback)) || void 0 === MM || MM.focus(), EM(null)
                            }), [lM]);
                            const CM = MM => {
                                SM(MM), PM(cr(MM)), QM(null)
                              },
                              bM = MM => {
                                CM(iM.filter(((rM, iM) => iM !== MM))), EM({
                                  key: `edit-${Math.min(MM,iM.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              wM = (MM, rM) => {
                                const OM = [...iM],
                                  [SM] = OM.splice(MM, 1);
                                OM.splice(MM + rM, 0, SM), CM(OM);
                                EM({
                                  key: `${rM<0?"up":"down"}-${MM+rM}`,
                                  fallback: `edit-${MM+rM}`
                                })
                              };
                            return (0, hM.jsxs)("section", {
                              ref: UM,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, hM.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, hM.jsxs)("div", {
                                  children: [(0, hM.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, hM.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, hM.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: bS.map((MM => (0, hM.jsx)("button", {
                                  type: "button",
                                  className: jM()("DocsVariantChip", {
                                    Active: GM === cr(MM.parts)
                                  }),
                                  onClick: () => {
                                    CM(MM.parts)
                                  },
                                  children: MM.label
                                }, MM.label)))
                              }), (0, hM.jsx)(JS, {
                                parts: iM,
                                className: "DocsTextEditorPreview"
                              }), (0, hM.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, hM.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, hM.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, hM.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [iM.map(((MM, rM) => {
                                      const OM = xr(MM);
                                      return (0, hM.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, hM.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${rM}`,
                                          "aria-label": `Edit part ${rM+1}, ${Nr[OM]}`,
                                          onClick: () => {
                                            HM(rM)
                                          },
                                          children: [(0, hM.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: Nr[OM]
                                          }), (0, hM.jsx)(JS, {
                                            parts: [MM],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== OM && (0, hM.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: qr(MM)
                                          })]
                                        }), (0, hM.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, hM.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${rM+1} up`,
                                            "data-focus-key": `up-${rM}`,
                                            disabled: 0 === rM,
                                            onClick: () => {
                                              wM(rM, -1)
                                            },
                                            children: (0, hM.jsx)(dM, {
                                              name: "chevron-up"
                                            })
                                          }), (0, hM.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${rM+1} down`,
                                            "data-focus-key": `down-${rM}`,
                                            disabled: rM === iM.length - 1,
                                            onClick: () => {
                                              wM(rM, 1)
                                            },
                                            children: (0, hM.jsx)(dM, {
                                              name: "chevron-down"
                                            })
                                          }), (0, hM.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${rM+1}`,
                                            onClick: () => {
                                              bM(rM)
                                            },
                                            children: (0, hM.jsx)(dM, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, rM)
                                    })), 0 === iM.length && (0, hM.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, hM.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: MM => {
                                      "Escape" === MM.key && JM && (MM.stopPropagation(), yM(!1), EM({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, hM.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": JM,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        yM(!JM)
                                      },
                                      children: [(0, hM.jsx)(dM, {
                                        name: "plus"
                                      }), "Add a part", (0, hM.jsx)(dM, {
                                        name: JM ? "chevron-up" : "chevron-down"
                                      })]
                                    }), JM && (0, hM.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: wS.map((MM => (0, hM.jsx)("li", {
                                        children: (0, hM.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (MM => {
                                              CM([...iM, Ar[MM]]), yM(!1), HM(iM.length)
                                            })(MM)
                                          },
                                          children: Nr[MM]
                                        })
                                      }, MM)))
                                    })]
                                  })]
                                }), (0, hM.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, hM.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, hM.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": zM,
                                      onClick: () => {
                                        LM(!zM)
                                      },
                                      children: [(0, hM.jsx)(dM, {
                                        name: zM ? "check" : "pencil"
                                      }), zM ? "Done" : "Edit"]
                                    })]
                                  }), zM ? (0, hM.jsxs)(hM.Fragment, {
                                    children: [(0, hM.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: aM,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: MM => {
                                        PM(MM.target.value);
                                        const rM = Oi(MM.target.value);
                                        QM(rM.error), rM.parts && SM(rM.parts)
                                      }
                                    }), nM && (0, hM.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: nM
                                    })]
                                  }) : (0, hM.jsx)(eM, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${GM})`
                                  })]
                                })]
                              }), null !== mM && mM < iM.length && (0, hM.jsx)(eS, {
                                parts: iM,
                                index: mM,
                                fontAwesomeIcons: rM,
                                onChange: MM => {
                                  ((MM, rM) => {
                                    CM(iM.map(((iM, OM) => OM === MM ? rM : iM)))
                                  })(mM, MM)
                                },
                                vW: () => {
                                  bM(mM), HM(null)
                                },
                                onClose: () => {
                                  HM(null), EM({
                                    key: `edit-${mM}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var gS = iM(5251),
                            uS = iM(5233),
                            RS = iM(5248),
                            pS = iM(5259);
                          const WS = 40,
                            sS = 800,
                            DS = 150,
                            kS = 8e3,
                            ZS = 2e3;

                          function oS(MM, rM) {
                            return 12 * Math.log2(rM / MM)
                          }

                          function fS(MM, rM) {
                            return Math.round(MM * 2 ** (rM / 12) * 10) / 10
                          }

                          function YS(MM) {
                            return `${MM} ms`
                          }

                          function NS(MM) {
                            return `${MM} st`
                          }
                          const AS = [{
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

                          function xS(MM) {
                            let {
                              synth: rM,
                              onChange: iM
                            } = MM;
                            const OM = (0, gS.p)(rM);
                            return (0, hM.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, hM.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, hM.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, hM.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, hM.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, hM.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, hM.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: gS.h.map((MM => (0, hM.jsx)("button", {
                                      type: "button",
                                      className: jM()("DocsVariantChip", {
                                        Active: rM.waveform === MM
                                      }),
                                      "aria-pressed": rM.waveform === MM,
                                      onClick: () => {
                                        iM({
                                          waveform: MM
                                        })
                                      },
                                      children: MM
                                    }, MM)))
                                  })]
                                }), (0, hM.jsx)(rS, {
                                  label: "Pitch",
                                  min: 0,
                                  max: oS(WS, sS),
                                  step: .1,
                                  value: oS(WS, rM.pitchHz),
                                  format: () => `${rM.pitchHz} Hz`,
                                  onChange: MM => {
                                    iM({
                                      pitchHz: fS(WS, MM)
                                    })
                                  }
                                }), (0, hM.jsx)(rS, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: rM.syllableMs,
                                  format: YS,
                                  onChange: MM => {
                                    iM({
                                      syllableMs: MM
                                    })
                                  }
                                }), (0, hM.jsx)(rS, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: rM.volume,
                                  onChange: MM => {
                                    iM({
                                      volume: MM
                                    })
                                  }
                                })]
                              }), (0, hM.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, hM.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, hM.jsx)(rS, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: rM.durationMs,
                                  format: YS,
                                  onChange: MM => {
                                    iM({
                                      durationMs: MM
                                    })
                                  }
                                }), (0, hM.jsx)(rS, {
                                  label: "Fade in",
                                  min: 0,
                                  max: OM.durationMs,
                                  step: 1,
                                  value: OM.attackMs,
                                  format: YS,
                                  onChange: MM => {
                                    iM({
                                      attackMs: MM
                                    })
                                  }
                                }), (0, hM.jsx)(rS, {
                                  label: "Fade out",
                                  min: 0,
                                  max: OM.durationMs - OM.attackMs,
                                  step: 1,
                                  value: OM.releaseMs,
                                  format: YS,
                                  onChange: MM => {
                                    iM({
                                      releaseMs: MM
                                    })
                                  }
                                }), (0, hM.jsx)(rS, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: rM.glideSemitones,
                                  format: NS,
                                  onChange: MM => {
                                    iM({
                                      glideSemitones: MM
                                    })
                                  }
                                }), (0, hM.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, hM.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== rM.lowpassHz,
                                    onChange: MM => {
                                      iM({
                                        lowpassHz: MM.target.checked ? ZS : null
                                      })
                                    }
                                  }), (0, hM.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== rM.lowpassHz && (0, hM.jsx)(rS, {
                                  label: "Filter",
                                  min: 0,
                                  max: oS(DS, kS),
                                  step: .1,
                                  value: oS(DS, rM.lowpassHz),
                                  format: () => `${rM.lowpassHz} Hz`,
                                  onChange: MM => {
                                    iM({
                                      lowpassHz: fS(DS, MM)
                                    })
                                  }
                                })]
                              }), (0, hM.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, hM.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), AS.map((MM => {
                                  let {
                                    key: OM,
                                    label: SM,
                                    max: jM
                                  } = MM;
                                  return (0, hM.jsx)(rS, {
                                    label: SM,
                                    min: 0,
                                    max: jM,
                                    step: .1,
                                    value: rM.intonation[OM],
                                    format: NS,
                                    onChange: MM => {
                                      iM({
                                        intonation: {
                                          ...rM.intonation,
                                          [OM]: MM
                                        }
                                      })
                                    }
                                  }, OM)
                                }))]
                              })]
                            })
                          }
                          const vS = Object.keys(gS.l),
                            FS = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function BS(MM) {
                            var rM;
                            const iM = JSON.stringify((0, gS.p)(MM));
                            return null !== (rM = vS.find((MM => JSON.stringify((0, gS.p)(gS.l[MM])) === iM))) && void 0 !== rM ? rM : null
                          }

                          function XS(MM) {
                            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof MM || null === MM) return JSON.stringify(MM);
                            return `{\n${Object.entries(MM).map((MM=>{let[iM,OM]=MM;return`${rM}    ${iM}: ${XS(OM,`${rM}    `)},`})).join("\n")}\n${rM}}`
                          }

                          function IS(MM, rM, iM) {
                            const OM = BS(MM),
                              SM = [`    line: ${JSON.stringify(rM)},`];
                            return iM && SM.push(`    speakerName: ${JSON.stringify(iM)},`), SM.push("    voice,"), `const voice = ${OM?JSON.stringify(OM):XS((0,gS.p)(MM))}\n\napi.setClientOption(playerId, "dialogue", {\n${SM.join("\n")}\n})`
                          }
                          const KS = 400,
                            qS = 90;
                          let TS = null;

                          function VS(MM, rM, iM) {
                            return TS ??= new AudioContext, TS.resume(), (0, pS.d)(TS, TS.destination, MM, rM, iM, (() => {}))
                          }

                          function cS() {
                            const [MM, rM] = (0, OM.useState)(gS.l.regular), [iM, SM] = (0, OM.useState)(FS[0]), [aM, PM] = (0, OM.useState)("Innkeeper"), [nM, QM] = (0, OM.useState)(0), zM = mO((MM => MM.volume)), LM = (0, OM.useRef)(null), mM = (0, OM.useRef)(0), HM = (0, OM.useRef)(0), JM = () => {
                              var MM;
                              null === (MM = LM.current) || void 0 === MM || MM.call(LM), LM.current = null
                            };
                            (0, OM.useEffect)((() => () => {
                              var MM;
                              null === (MM = LM.current) || void 0 === MM || MM.call(LM), window.clearTimeout(mM.current)
                            }), []);
                            const yM = (0, OM.useMemo)((() => ({
                                line: iM,
                                speakerName: aM || void 0,
                                voice: MM
                              })), [iM, aM, MM]),
                              lM = (0, OM.useRef)(yM);
                            lM.current = yM;
                            const UM = BS(MM),
                              GM = MM => {
                                window.clearTimeout(mM.current), JM();
                                const {
                                  plan: rM,
                                  synth: iM
                                } = (0, RS.i)(MM);
                                iM && (LM.current = VS(iM, rM.blips, zM)), QM((MM => MM + 1))
                              },
                              CM = IS(MM, iM, aM);
                            return (0, hM.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, hM.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, hM.jsxs)("div", {
                                  children: [(0, hM.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, hM.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, hM.jsx)(EM, {
                                  text: CM,
                                  label: "Copy code"
                                })]
                              }), (0, hM.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [vS.map((MM => (0, hM.jsx)("button", {
                                  type: "button",
                                  className: jM()("DocsVariantChip", {
                                    Active: UM === MM
                                  }),
                                  "aria-pressed": UM === MM,
                                  onClick: () => {
                                    (MM => {
                                      const iM = gS.l[MM];
                                      rM(iM), GM({
                                        ...yM,
                                        voice: iM
                                      })
                                    })(MM)
                                  },
                                  children: MM
                                }, MM))), !UM && (0, hM.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, hM.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, hM.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, hM.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, hM.jsx)(uS.b, {
                                      display: yM
                                    }, nM)
                                  }), (0, hM.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: MM => {
                                      MM.preventDefault(), GM(yM)
                                    },
                                    children: [(0, hM.jsx)("input", {
                                      value: iM,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: MM => {
                                        SM(MM.target.value)
                                      }
                                    }), (0, hM.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, hM.jsx)(dM, {
                                        name: "play"
                                      }), (0, hM.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, hM.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: FS.map((MM => (0, hM.jsx)("button", {
                                      type: "button",
                                      className: jM()("DocsVariantChip", {
                                        Active: iM === MM
                                      }),
                                      onClick: () => {
                                        var rM;
                                        SM(rM = MM), GM({
                                          ...yM,
                                          line: rM
                                        })
                                      },
                                      children: MM
                                    }, MM)))
                                  }), (0, hM.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, hM.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, hM.jsx)("input", {
                                      value: aM,
                                      placeholder: "No name",
                                      onChange: MM => {
                                        PM(MM.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, hM.jsx)(xS, {
                                  synth: MM,
                                  onChange: iM => {
                                    const OM = {
                                      ...MM,
                                      ...iM
                                    };
                                    rM(OM);
                                    const SM = {
                                        ...yM,
                                        voice: OM
                                      },
                                      jM = performance.now();
                                    if (jM - HM.current >= qS) {
                                      HM.current = jM, JM();
                                      const MM = (0, RS.i)(SM).plan.blips[0];
                                      MM && (LM.current = VS((0, gS.p)(OM), [{
                                        ...MM,
                                        atMs: 0
                                      }], zM))
                                    }
                                    window.clearTimeout(mM.current), mM.current = window.setTimeout((() => {
                                      GM(lM.current)
                                    }), KS)
                                  }
                                })]
                              }), (0, hM.jsx)(eM, {
                                code: CM,
                                lang: "ts"
                              })]
                            })
                          }
                          var Mj = iM(5273);
                          const rj = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            ij = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            Oj = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${ij}`, "g"), Mj.h],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, Mj.h]
                            ];

                          function Sj(MM) {
                            return `${MM.pageId}#${MM.anchor}`
                          }
                          let jj, aj, Pj;

                          function nj(MM) {
                            const rM = (0, bM.j)(MM),
                              iM = new Set;
                            for (const [, , OM] of rM.matchAll(bM.d)) {
                              const MM = OM.startsWith("#") ? xM(OM) : null,
                                rM = MM ? Sj({
                                  pageId: MM.page.id,
                                  anchor: MM.anchor
                                }) : null;
                              null !== rM && (jj || (jj = new Set(ZM.flatMap((MM => uM(MM.layout) ? NM(MM).sections.map((rM => Sj({
                                pageId: MM.id,
                                anchor: rM.heading.anchor
                              }))) : [])))), jj).has(rM) && iM.add(rM)
                            }
                            for (const [, , OM] of rM.matchAll(rj)) {
                              const MM = mr(OM);
                              MM && iM.add(Sj(MM))
                            }
                            return iM
                          }

                          function Qj(MM, rM) {
                            const iM = new Set,
                              OM = function(MM) {
                                return MM.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(MM);
                            for (const [, SM] of OM.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) iM.add(SM);
                            for (const [SM, jM] of Oj)
                              for (const [, MM] of(0, Mj.e)(OM, SM, jM)) rM.has(MM) && iM.add(MM);
                            return iM
                          }

                          function zj(MM, rM, iM, OM) {
                            const SM = MM.get(rM);
                            SM ? !OM && SM.some((MM => MM.pageId === iM.pageId)) || SM.push(iM) : MM.set(rM, [iM])
                          }
                          const Lj = /^[A-Za-z_$][\w$]*$/;

                          function mj(MM) {
                            return Lj.test(MM.name) ? MM.name : "options"
                          }

                          function Hj(MM, rM) {
                            const iM = MM.params.map(mj).join(", ");
                            return rM ? `${MM.name} = (${iM}) => {\n\t\n}` : `api.${MM.name}(${iM})`
                          }

                          function hj(MM) {
                            let {
                              method: rM,
                              isCallback: iM
                            } = MM;
                            return (0, hM.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, hM.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [iM ? (0, hM.jsxs)(hM.Fragment, {
                                  children: [(0, hM.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: rM.name
                                  }), (0, hM.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, hM.jsxs)(hM.Fragment, {
                                  children: [(0, hM.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, hM.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: rM.name
                                  }), (0, hM.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), rM.params.map(((MM, iM) => (0, hM.jsxs)(OM.Fragment, {
                                  children: [iM > 0 && (0, hM.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, hM.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${rM.name}-${mj(MM)}`,
                                    children: MM.name
                                  })]
                                }, MM.name))), (0, hM.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: iM ? ") => " : ")"
                                }), iM && !rM.returns && (0, hM.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), rM.returns && rM.returns.type && (0, hM.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!iM && (0, hM.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, hM.jsx)(wr, {
                                  type: rM.returns.type
                                })]
                              })]
                            })
                          }

                          function Jj(MM) {
                            let {
                              title: rM,
                              references: iM
                            } = MM;
                            const SM = (0, OM.useContext)(Hr);
                            return (0, hM.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, hM.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: rM
                              }), iM.map((MM => (0, hM.jsx)(aM.b, {
                                to: FM(SM, fM(MM.pageId), MM.anchor),
                                children: MM.label
                              }, `${MM.pageId}#${MM.anchor}`)))]
                            })
                          }

                          function dj(MM) {
                            var rM, iM;
                            let {
                              pageId: OM,
                              anchor: SM
                            } = MM;
                            const jM = Sj({
                                pageId: OM,
                                anchor: SM
                              }),
                              aM = null !== (rM = function() {
                                if (!Pj) {
                                  Pj = new Map;
                                  const OM = new Set(ZM.filter((MM => "callbacks" === MM.layout)).flatMap((MM => NM(MM).sections.map((MM => MM.heading.text)))));
                                  for (const SM of ZM)
                                    if ("article" === SM.layout || "snippets" === SM.layout)
                                      for (const jM of (0, bM.v)(NM(SM)))
                                        for (const {
                                            code: aM
                                          }
                                          of(0, bM.l)(jM.blocks))
                                          for (const PM of Qj(aM, OM)) {
                                            const OM = Lr().get(PM);
                                            if (OM) {
                                              var MM, rM, iM;
                                              const aM = {
                                                pageId: SM.id,
                                                anchor: null !== (MM = null === (rM = jM.heading) || void 0 === rM ? void 0 : rM.anchor) && void 0 !== MM ? MM : "",
                                                label: null !== (iM = SM.navTitle) && void 0 !== iM ? iM : SM.title
                                              };
                                              zj(Pj, Sj(OM), aM, !1)
                                            }
                                          }
                                }
                                return Pj
                              }().get(jM)) && void 0 !== rM ? rM : [],
                              PM = null !== (iM = function() {
                                if (!aj) {
                                  aj = new Map;
                                  const MM = fM("changelog");
                                  for (const rM of NM(MM).sections) {
                                    const iM = new Set(rM.blocks.flatMap((MM => [...nj(MM)])));
                                    for (const OM of iM) {
                                      const iM = {
                                        pageId: MM.id,
                                        anchor: rM.heading.anchor,
                                        label: rM.heading.text
                                      };
                                      zj(aj, OM, iM, !0)
                                    }
                                  }
                                }
                                return aj
                              }().get(jM)) && void 0 !== iM ? iM : [];
                            return 0 === aM.length && 0 === PM.length ? null : (0, hM.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [aM.length > 0 && (0, hM.jsx)(Jj, {
                                title: "Used in",
                                references: aM
                              }), PM.length > 0 && (0, hM.jsx)(Jj, {
                                title: "Changelog",
                                references: PM
                              })]
                            })
                          }

                          function yj(MM) {
                            let {
                              method: rM,
                              pageId: iM,
                              anchor: OM,
                              isCallback: SM
                            } = MM;
                            const jM = SM ? void 0 : Pr().get(rM.name),
                              aM = rM.description.length > 0 || null === jM || void 0 === jM || !jM.description ? rM.description : (0, bM.C)(jM.description);
                            return (0, hM.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, hM.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, hM.jsx)(Qi, {
                                  level: 2,
                                  text: rM.name,
                                  anchor: OM,
                                  className: "DocsCardTitle"
                                }), (0, hM.jsx)(EM, {
                                  text: Hj(rM, SM),
                                  label: SM ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, hM.jsx)(hj, {
                                method: rM,
                                isCallback: SM
                              }), jM && null !== jM.deprecation && (0, hM.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, hM.jsx)("strong", {
                                  children: "Deprecated"
                                }), jM.deprecation && (0, hM.jsxs)(hM.Fragment, {
                                  children: [": ", (0, hM.jsx)(Cr, {
                                    text: (PM = jM.deprecation, (0, Mj.p)(PM, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, Mj.g)("`\\w"), (MM => {
                                      let [rM] = MM;
                                      return Lr().has(rM) ? `\`${rM}\`` : rM
                                    })))
                                  })]
                                })]
                              }), aM.length > 0 && (0, hM.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, hM.jsx)(Hi, {
                                  blocks: aM
                                })
                              }), rM.params.length > 0 && (0, hM.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, hM.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, hM.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: rM.params.map((MM => (0, hM.jsxs)("div", {
                                    id: `${rM.name}-${mj(MM)}`,
                                    className: "DocsParam",
                                    children: [(0, hM.jsxs)("dt", {
                                      children: [(0, hM.jsx)("code", {
                                        className: "DocsParamName",
                                        children: MM.name
                                      }), (0, hM.jsx)(wr, {
                                        type: MM.type
                                      })]
                                    }), MM.description && (0, hM.jsx)("dd", {
                                      children: (0, hM.jsx)(Cr, {
                                        text: MM.description
                                      })
                                    })]
                                  }, MM.name)))
                                })]
                              }), rM.returns && (rM.returns.type || rM.returns.description.length > 0) && (0, hM.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, hM.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, hM.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [rM.returns.type && (0, hM.jsx)(wr, {
                                    type: rM.returns.type
                                  }), rM.returns.description.length > 0 && (0, hM.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, hM.jsx)(Hi, {
                                      blocks: rM.returns.description
                                    })
                                  })]
                                })]
                              }), (0, hM.jsx)(dj, {
                                pageId: iM,
                                anchor: OM
                              })]
                            });
                            var PM
                          }

                          function lj(MM) {
                            var rM;
                            return null !== MM.defaultValue && "undefined" !== MM.defaultValue ? MM.defaultValue : null !== (rM = MM.example) && void 0 !== rM ? rM : "value"
                          }

                          function Ej(MM) {
                            let {
                              setting: rM,
                              pageId: iM,
                              anchor: OM,
                              setterSnippet: SM
                            } = MM;
                            const jM = null === rM.defaultValue ? null : yr(rM.defaultValue);
                            return (0, hM.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, hM.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, hM.jsx)(Qi, {
                                  level: 2,
                                  text: rM.name,
                                  anchor: OM,
                                  className: "DocsCardTitle"
                                }), (0, hM.jsx)(EM, {
                                  text: SM(rM.name, lj(rM)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, hM.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, hM.jsxs)("div", {
                                  children: [(0, hM.jsx)("dt", {
                                    children: "Type"
                                  }), (0, hM.jsx)("dd", {
                                    children: (0, hM.jsx)(wr, {
                                      type: rM.type
                                    })
                                  })]
                                }), null !== rM.defaultValue && (0, hM.jsxs)("div", {
                                  children: [(0, hM.jsx)("dt", {
                                    children: "Default"
                                  }), (0, hM.jsx)("dd", {
                                    children: (0, hM.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [jM && (0, hM.jsx)(lr, {
                                        colour: jM
                                      }), rM.defaultValue]
                                    })
                                  })]
                                }), null !== rM.example && (0, hM.jsxs)("div", {
                                  children: [(0, hM.jsx)("dt", {
                                    children: "Example"
                                  }), (0, hM.jsx)("dd", {
                                    children: (0, hM.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: rM.example
                                    })
                                  })]
                                })]
                              }), rM.description.length > 0 && (0, hM.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, hM.jsx)(Hi, {
                                  blocks: rM.description
                                })
                              }), (0, hM.jsx)(dj, {
                                pageId: iM,
                                anchor: OM
                              })]
                            })
                          }

                          function Uj(MM) {
                            let {
                              section: rM
                            } = MM;
                            return (0, hM.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, hM.jsx)(Qi, {
                                level: 2,
                                text: rM.heading.text,
                                anchor: rM.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, hM.jsx)("div", {
                                className: "DocsProse",
                                children: (0, hM.jsx)(Hi, {
                                  blocks: rM.blocks
                                })
                              })]
                            })
                          }

                          function Gj(MM) {
                            let {
                              section: rM
                            } = MM;
                            return (0, hM.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, hM.jsx)(Qi, {
                                level: rM.heading.level,
                                text: rM.heading.text,
                                anchor: rM.heading.anchor
                              }), (0, hM.jsx)(Hi, {
                                blocks: rM.blocks
                              })]
                            })
                          }
                          const Cj = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function ej(MM) {
                            let {
                              page: rM,
                              section: iM
                            } = MM;
                            if ("methods" === rM.layout || "callbacks" === rM.layout) return (0, hM.jsx)(yj, {
                              method: bi(iM),
                              pageId: rM.id,
                              anchor: iM.heading.anchor,
                              isCallback: "callbacks" === rM.layout
                            });
                            if ("settings" === rM.layout) {
                              const MM = function(MM) {
                                const rM = {
                                  name: MM.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const OM of MM.blocks) {
                                  var iM;
                                  if (ei(OM)) continue;
                                  const MM = "paragraph" === OM.kind ? OM.text.match(wi) : null;
                                  if (!MM) {
                                    rM.description.push(OM);
                                    continue
                                  }
                                  const SM = null !== (iM = Ci(MM[2])) && void 0 !== iM ? iM : MM[2];
                                  "Type" === MM[1] ? rM.type = SM : "Default" === MM[1] ? rM.defaultValue = SM : "" !== SM && (rM.example = SM)
                                }
                                return rM.type ? rM : null
                              }(iM);
                              if (MM) return (0, hM.jsx)(Ej, {
                                setting: MM,
                                pageId: rM.id,
                                anchor: iM.heading.anchor,
                                setterSnippet: rM.setterSnippet
                              })
                            }
                            return "snippets" === rM.layout ? (0, hM.jsx)(Uj, {
                              section: iM
                            }) : "changelog" === rM.layout ? (0, hM.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, hM.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, hM.jsx)(Qi, {
                                  level: 2,
                                  text: iM.heading.text,
                                  anchor: iM.heading.anchor
                                })
                              }), (0, hM.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, hM.jsx)(Hi, {
                                  blocks: ti(iM.blocks)
                                })
                              })]
                            }) : rM.gallery ? (0, hM.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, hM.jsx)(Qi, {
                                level: iM.heading.level,
                                text: iM.heading.text,
                                anchor: iM.heading.anchor
                              }), (0, hM.jsx)(uO, {
                                kind: rM.gallery,
                                content: NM(rM),
                                blocks: iM.blocks
                              })]
                            }) : (0, hM.jsx)(Gj, {
                              section: iM
                            })
                          }

                          function bj(MM) {
                            let {
                              page: rM,
                              onTocChange: iM
                            } = MM;
                            const SM = NM(rM),
                              [jM, aM] = (0, OM.useState)(""),
                              PM = "article" !== rM.layout,
                              nM = yi(rM.gallery) ? rM.gallery : null,
                              QM = null !== nM,
                              zM = jM.trim().toLowerCase(),
                              LM = (0, OM.useRef)(null),
                              mM = (0, OM.useCallback)((MM => {
                                var rM;
                                null === (rM = LM.current) || void 0 === rM || rM.preview(MM)
                              }), []),
                              HM = (0, OM.useMemo)((() => {
                                if (!rM.hasParticlePlayground) return [];
                                const MM = Wi(SM.intro).find((MM => "names" === MM.kind && !MM.names.some((MM => null !== Ai(MM.name)))));
                                return "names" === (null === MM || void 0 === MM ? void 0 : MM.kind) ? MM.names.map((MM => MM.name)) : []
                              }), [rM, SM]),
                              JM = (0, OM.useMemo)((() => {
                                if (!rM.hasTextPlayground) return [];
                                const MM = SM.sections.flatMap((MM => MM.blocks.flatMap((MM => {
                                  var rM;
                                  return (null !== (rM = Ri(MM)) && void 0 !== rM ? rM : []).flatMap((MM => Yr(MM.name) ? [MM.name] : []))
                                }))));
                                return [...new Set(MM)]
                              }), [rM, SM]),
                              dM = (0, OM.useMemo)((() => zM ? SM.sections.filter((MM => function(MM, rM) {
                                return !!MM.heading.text.toLowerCase().includes(rM) || MM.blocks.some((MM => (0, bM.j)(MM).toLowerCase().includes(rM)))
                              }(MM, zM))) : SM.sections), [SM, zM]),
                              yM = (0, OM.useMemo)((() => function(MM, rM) {
                                return "article" !== MM.layout ? rM.map((MM => ({
                                  anchor: MM.heading.anchor,
                                  text: MM.heading.text,
                                  level: 2
                                }))) : rM.flatMap((MM => {
                                  const rM = MM.blocks.flatMap((MM => "heading" === MM.kind && 3 === MM.level ? [{
                                    anchor: MM.anchor,
                                    text: MM.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: MM.heading.anchor,
                                    text: MM.heading.text,
                                    level: 2
                                  }, ...rM]
                                }))
                              }(rM, dM)), [rM, dM]);
                            return (0, OM.useEffect)((() => {
                              iM(yM)
                            }), [yM, iM]), (0, hM.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, hM.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, hM.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: SM.title || rM.title
                                }), (0, hM.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: rM.summary
                                }), (0, hM.jsx)(TO, {
                                  page: rM
                                }), PM && (0, hM.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, hM.jsxs)("span", {
                                    children: [(0, hM.jsx)("strong", {
                                      children: SM.sections.length
                                    }), " ", Cj[rM.layout]]
                                  })
                                })]
                              }), "" === rM.slug && (0, hM.jsx)(pO, {}), nM && (0, hM.jsx)(kO, {
                                kind: nM
                              }, nM), rM.hasParticlePlayground && (0, hM.jsx)(zS, {
                                ref: LM,
                                textures: HM
                              }), !QM && SM.intro.length > 0 && (0, hM.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: rM.gallery ? (0, hM.jsx)(EO.Provider, {
                                  value: rM.hasParticlePlayground ? mM : null,
                                  children: (0, hM.jsx)(uO, {
                                    kind: rM.gallery,
                                    content: SM,
                                    blocks: SM.intro
                                  })
                                }) : (0, hM.jsx)(Hi, {
                                  blocks: ti(SM.intro)
                                })
                              }), rM.hasTextPlayground && (0, hM.jsx)(tS, {
                                fontAwesomeIcons: JM
                              }), rM.hasVoicePlayground && (0, hM.jsx)(cS, {}), rM.childPageIds && (0, hM.jsx)(pO, {
                                cards: rM.childPageIds.map((MM => ({
                                  pageId: MM
                                }))),
                                label: rM.title
                              }), PM && (0, hM.jsx)(Ui, {
                                className: "DocsFilterBar",
                                value: jM,
                                placeholder: `Filter ${SM.sections.length} ${Cj[rM.layout]}\u2026`,
                                label: `Filter ${Cj[rM.layout]}`,
                                onChange: aM,
                                count: zM ? {
                                  visible: dM.length,
                                  total: SM.sections.length
                                } : null
                              }), !QM && (0, hM.jsxs)("div", {
                                className: `DocsSections Layout-${rM.layout}`,
                                children: [dM.map((MM => (0, hM.jsx)(ej, {
                                  page: rM,
                                  section: MM
                                }, MM.heading.anchor))), 0 === dM.length && (0, hM.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", Cj[rM.layout], " match \u201c", jM, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const wj = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function tj(MM) {
                            let {
                              entry: rM,
                              isActive: iM,
                              onNavigate: OM,
                              label: SM,
                              children: aM
                            } = MM;
                            return (0, hM.jsx)("a", {
                              href: `#${rM.anchor}`,
                              "aria-label": SM,
                              className: jM()(`Level${rM.level}`, {
                                Active: iM
                              }),
                              "aria-current": iM ? "location" : void 0,
                              onClick: MM => {
                                MM.preventDefault(), OM(rM.anchor)
                              },
                              children: aM
                            })
                          }

                          function gj(MM) {
                            let {
                              toc: rM,
                              activeAnchor: iM,
                              onNavigate: SM
                            } = MM;
                            const aM = Math.max(0, rM.findIndex((MM => MM.anchor === iM))),
                              PM = (0, OM.useRef)(null),
                              nM = (0, OM.useRef)(!1);
                            (0, OM.useEffect)((() => {
                              var MM, iM;
                              const OM = null === (MM = PM.current) || void 0 === MM ? void 0 : MM.closest(".DocsToc"),
                                SM = null === (iM = PM.current) || void 0 === iM ? void 0 : iM.querySelector(".DocsTimelineNotch.Active");
                              if (!OM || !SM) return;
                              let jM = 0;
                              if (aM === rM.length - 1) jM = OM.scrollHeight;
                              else if (aM > 0) {
                                const MM = OM.getBoundingClientRect(),
                                  rM = SM.getBoundingClientRect();
                                jM = OM.scrollTop + rM.top + rM.height / 2 - (MM.top + OM.clientHeight / 2)
                              }
                              OM.scrollTo({
                                top: jM,
                                behavior: nM.current ? "smooth" : "auto"
                              }), nM.current = !0
                            }), [aM, rM.length]);
                            const QM = [];
                            return rM.forEach(((MM, rM) => {
                              var iM, OM, SM;
                              const jM = function(MM) {
                                  const rM = MM.trim().match(wj);
                                  return rM ? {
                                    day: rM[1],
                                    month: `${rM[2]} ${rM[3]}`
                                  } : null
                                }(MM.text),
                                aM = null !== (iM = null === jM || void 0 === jM ? void 0 : jM.month) && void 0 !== iM ? iM : null;
                              null !== aM && (null === (OM = QM.at(-1)) || void 0 === OM ? void 0 : OM.month) === aM || QM.push({
                                month: aM,
                                entries: []
                              }), QM.at(-1).entries.push({
                                entry: MM,
                                day: null !== (SM = null === jM || void 0 === jM ? void 0 : jM.day) && void 0 !== SM ? SM : null,
                                index: rM
                              })
                            })), (0, hM.jsx)("ol", {
                              ref: PM,
                              className: "DocsTimeline",
                              children: QM.map((MM => {
                                let {
                                  month: rM,
                                  entries: iM
                                } = MM;
                                return (0, hM.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [rM && (0, hM.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: rM
                                  }), (0, hM.jsx)("ol", {
                                    children: iM.map((MM => {
                                      let {
                                        entry: rM,
                                        day: iM,
                                        index: OM
                                      } = MM;
                                      return (0, hM.jsx)("li", {
                                        className: jM()("DocsTimelineNotch", {
                                          Passed: OM < aM,
                                          Active: OM === aM
                                        }),
                                        children: (0, hM.jsx)(tj, {
                                          entry: rM,
                                          isActive: OM === aM,
                                          onNavigate: SM,
                                          label: rM.text,
                                          children: (0, hM.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== iM && void 0 !== iM ? iM : rM.text
                                          })
                                        })
                                      }, rM.anchor)
                                    }))
                                  })]
                                }, iM[0].entry.anchor)
                              }))
                            })
                          }

                          function uj(MM) {
                            let {
                              isChangelog: rM,
                              toc: iM,
                              activeAnchor: OM,
                              onNavigate: SM
                            } = MM;
                            return 0 === iM.length ? null : (0, hM.jsxs)(hM.Fragment, {
                              children: [(0, hM.jsx)("div", {
                                className: "DocsTocTitle",
                                children: rM ? "Updates" : "On this page"
                              }), rM ? (0, hM.jsx)(gj, {
                                toc: iM,
                                activeAnchor: OM,
                                onNavigate: SM
                              }) : (0, hM.jsx)("ul", {
                                children: iM.map((MM => (0, hM.jsx)("li", {
                                  children: (0, hM.jsx)(tj, {
                                    entry: MM,
                                    isActive: MM.anchor === OM,
                                    onNavigate: SM,
                                    children: MM.text.replace(/`/g, "")
                                  })
                                }, MM.anchor)))
                              })]
                            })
                          }
                          const Rj = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            pj = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            Wj = 20,
                            sj = 10,
                            Dj = 40,
                            kj = 120;
                          let Zj;

                          function oj(MM) {
                            const rM = MM.gallery;
                            if (!rM) return [];
                            if (yi(rM)) return function(MM) {
                              return Ei(MM).entries.map((MM => MM.name))
                            }(rM).map((iM => ({
                              page: MM,
                              anchor: Di(rM, iM),
                              title: iM,
                              kind: pj[rM],
                              text: "",
                              listedUnder: MM.title
                            })));
                            const iM = NM(MM);
                            return (0, bM.v)(iM).flatMap((OM => {
                              const SM = OM.heading ? `${MM.title} \u203a ${OM.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : MM.title;
                              return Zi(rM, iM, OM.blocks).flatMap((iM => "names" !== iM.kind ? [] : iM.names.map((OM => {
                                const jM = iM.isSongs ? "Song" : pj[rM];
                                return {
                                  page: MM,
                                  anchor: OM.anchor,
                                  title: OM.name,
                                  kind: jM,
                                  text: "",
                                  listedUnder: SM
                                }
                              }))))
                            }))
                          }

                          function fj(MM, rM, iM) {
                            const OM = MM.title.toLowerCase();
                            let SM = 0;
                            if (OM === rM) SM = 100;
                            else if (OM.startsWith(rM)) SM = 80;
                            else if (OM.includes(rM)) SM = 60;
                            else if (iM.every((MM => OM.includes(MM)))) SM = 45;
                            else {
                              if (!MM.text.toLowerCase().includes(rM)) return 0;
                              SM = 20
                            }
                            return SM - Math.min(OM.length / 10, 9) + ("Page" === MM.kind ? 8 : "Method" === MM.kind ? 3 : 0) - (MM.listedUnder ? Wj : 0)
                          }

                          function Yj(MM, rM) {
                            const iM = MM.toLowerCase().indexOf(rM),
                              OM = Math.max(0, iM - kj / 3);
                            return `${OM>0?"\u2026":""}${MM.slice(OM,OM+kj)}${OM+kj<MM.length?"\u2026":""}`
                          }

                          function Nj(MM) {
                            let {
                              text: rM,
                              query: iM
                            } = MM;
                            const OM = iM ? rM.toLowerCase().indexOf(iM) : -1;
                            return -1 === OM ? (0, hM.jsx)(hM.Fragment, {
                              children: rM
                            }) : (0, hM.jsxs)(hM.Fragment, {
                              children: [rM.slice(0, OM), (0, hM.jsx)("mark", {
                                children: rM.slice(OM, OM + iM.length)
                              }), rM.slice(OM + iM.length)]
                            })
                          }

                          function Aj(MM) {
                            let {
                              basePath: rM,
                              onClose: iM
                            } = MM;
                            const SM = (0, PM.y)(),
                              [aM, nM] = (0, OM.useState)(""),
                              [QM, zM] = (0, OM.useState)(0),
                              LM = (0, OM.useRef)(null),
                              mM = (0, OM.useRef)(null),
                              HM = aM.trim().toLowerCase(),
                              JM = (0, OM.useMemo)((() => {
                                const MM = (Zj || (Zj = ZM.flatMap((MM => {
                                  const rM = NM(MM);
                                  return [{
                                    page: MM,
                                    anchor: "",
                                    title: MM.title,
                                    kind: "Page",
                                    text: MM.summary
                                  }, ...rM.sections.flatMap((rM => {
                                    const iM = rM.blocks.filter((MM => "paragraph" === MM.kind)).map(bM.j).join(" ").replace(/[`*]/g, ""),
                                      OM = {
                                        page: MM,
                                        anchor: rM.heading.anchor,
                                        title: rM.heading.text.replace(/`/g, ""),
                                        kind: Rj[MM.layout],
                                        text: iM
                                      },
                                      SM = rM.blocks.flatMap((rM => "article" === MM.layout && "heading" === rM.kind && 3 === rM.level ? [{
                                        page: MM,
                                        anchor: rM.anchor,
                                        title: rM.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: OM.title
                                      }] : []));
                                    return [OM, ...SM]
                                  })), ...oj(MM)]
                                }))), Zj);
                                if (!HM) return MM.filter((MM => "Page" === MM.kind));
                                const rM = HM.split(/\s+/);
                                let iM = 0;
                                return MM.map((MM => ({
                                  entry: MM,
                                  score: fj(MM, HM, rM)
                                }))).filter((MM => MM.score > 0)).sort(((MM, rM) => rM.score - MM.score)).filter((MM => !MM.entry.listedUnder || (iM++, iM <= sj))).slice(0, Dj).map((MM => MM.entry))
                              }), [HM]);
                            (0, OM.useEffect)((() => {
                              zM(0)
                            }), [HM]), (0, OM.useEffect)((() => {
                              const MM = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === MM || void 0 === MM || MM.focus()
                              }
                            }), []), (0, OM.useEffect)((() => {
                              var MM, rM;
                              null === (MM = LM.current) || void 0 === MM || null === (rM = MM.querySelector(".Active")) || void 0 === rM || rM.scrollIntoView({
                                block: "nearest"
                              })
                            }), [QM]);
                            const yM = MM => {
                              SM(FM(rM, MM.page, MM.anchor)), iM()
                            };
                            return (0, hM.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: MM => {
                                MM.target === MM.currentTarget && iM()
                              },
                              children: (0, hM.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: MM => {
                                  MM.target !== mM.current && MM.preventDefault()
                                },
                                onKeyDown: MM => {
                                  if ("Escape" === MM.key) iM();
                                  else if ("Tab" === MM.key) {
                                    var rM;
                                    MM.preventDefault(), null === (rM = mM.current) || void 0 === rM || rM.focus()
                                  }
                                },
                                children: [(0, hM.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, hM.jsx)(dM, {
                                    name: "magnifying-glass"
                                  }), (0, hM.jsx)("input", {
                                    ref: mM,
                                    autoFocus: !0,
                                    value: aM,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": JM.length > 0 ? `DocsSearchResult-${QM}` : void 0,
                                    onChange: MM => {
                                      nM(MM.target.value)
                                    },
                                    onKeyDown: MM => {
                                      if ("ArrowDown" === MM.key || "ArrowUp" === MM.key) {
                                        MM.preventDefault();
                                        const rM = "ArrowDown" === MM.key ? 1 : -1;
                                        zM((QM + rM + JM.length) % Math.max(JM.length, 1))
                                      } else "Enter" === MM.key && JM[QM] && yM(JM[QM])
                                    }
                                  }), (0, hM.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, hM.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: LM,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!HM && (0, hM.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), JM.map(((MM, rM) => {
                                    var iM;
                                    return (0, hM.jsxs)("li", {
                                      id: `DocsSearchResult-${rM}`,
                                      role: "option",
                                      "aria-selected": rM === QM,
                                      className: jM()("DocsSearchResult", {
                                        Active: rM === QM
                                      }),
                                      onMouseMove: () => {
                                        zM(rM)
                                      },
                                      onClick: () => {
                                        yM(MM)
                                      },
                                      children: [(0, hM.jsx)(dM, {
                                        name: MM.page.icon
                                      }), (0, hM.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, hM.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, hM.jsx)(Nj, {
                                            text: MM.title,
                                            query: HM
                                          })
                                        }), MM.text && (0, hM.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, hM.jsx)(Nj, {
                                            text: Yj(MM.text, HM),
                                            query: HM
                                          })
                                        })]
                                      }), (0, hM.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === MM.kind ? "Page" : null !== (iM = MM.listedUnder) && void 0 !== iM ? iM : `${MM.kind} \xb7 ${MM.page.title}`
                                      })]
                                    }, `${MM.page.id}#${MM.anchor}`)
                                  })), HM && 0 === JM.length && (0, hM.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", aM, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function xj(MM, rM) {
                            if (rM < 10) return `${MM.toFixed(1)}s`;
                            const iM = Math.floor(MM);
                            return `${Math.floor(iM/60)}:${String(iM%60).padStart(2,"0")}`
                          }

                          function vj() {
                            const MM = mO((MM => MM.track)),
                              rM = mO((MM => MM.volume)),
                              [iM, SM] = (0, OM.useState)(0),
                              aM = (0, OM.useRef)(OO);
                            if ((0, OM.useEffect)((() => {
                                if (!MM) return;
                                if (SM(dO()), "playing" !== MM.status) return;
                                let rM = 0;
                                const iM = () => {
                                  SM(dO()), rM = requestAnimationFrame(iM)
                                };
                                return rM = requestAnimationFrame(iM), () => {
                                  cancelAnimationFrame(rM)
                                }
                              }), [MM]), !MM) return null;
                            const PM = "paused" !== MM.status,
                              nM = Math.min(iM, MM.duration);
                            return (0, hM.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, hM.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, hM.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": PM ? `Pause ${MM.name}` : `Play ${MM.name}`,
                                  onClick: JO,
                                  children: (0, hM.jsx)(dM, {
                                    name: PM ? "pause" : "play"
                                  })
                                }), (0, hM.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, hM.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, hM.jsx)("code", {
                                      children: MM.name
                                    }), (0, hM.jsx)("span", {
                                      children: MM.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, hM.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, hM.jsx)("span", {
                                      children: xj(nM, MM.duration)
                                    }), (0, hM.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: MM.duration || 1,
                                      step: .01,
                                      value: nM,
                                      disabled: 0 === MM.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${xj(nM,MM.duration)} of ${xj(MM.duration,MM.duration)}`,
                                      onChange: MM => {
                                        const rM = Number(MM.target.value);
                                        ! function(MM) {
                                          var rM;
                                          nO = MM, null === (rM = aO) || void 0 === rM || rM.seek(MM)
                                        }(rM), SM(rM)
                                      }
                                    }), (0, hM.jsx)("span", {
                                      children: MM.duration > 0 ? xj(MM.duration, MM.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, hM.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, hM.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === rM ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === rM ? yO(aM.current) : (aM.current = rM, yO(0))
                                    },
                                    children: (0, hM.jsx)(dM, {
                                      name: "volume",
                                      className: jM()({
                                        Muted: 0 === rM
                                      })
                                    })
                                  }), (0, hM.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: rM,
                                    "aria-label": "Volume",
                                    onChange: MM => {
                                      yO(Number(MM.target.value))
                                    }
                                  })]
                                }), (0, hM.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var rM;
                                    null === (rM = document.querySelector(`[data-docs-track="${CSS.escape(SO(MM.name,MM.isSong))}"]`)) || void 0 === rM || rM.focus(), lO()
                                  },
                                  children: (0, hM.jsx)(dM, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var Fj = iM(30);
                          const Bj = "docsTheme",
                            Xj = window.matchMedia("(prefers-color-scheme: light)");

                          function Ij(MM) {
                            let {
                              theme: rM,
                              onChange: iM
                            } = MM;
                            const OM = "dark" === rM ? "light" : "dark";
                            return (0, hM.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${OM} theme`,
                              title: `Switch to ${OM} theme`,
                              onClick: () => {
                                iM(OM)
                              },
                              children: (0, hM.jsx)(dM, {
                                name: "dark" === rM ? "moon" : "sun"
                              })
                            })
                          }
                          const Kj = "https://github.com/Bloxdy/code-api",
                            qj = "https://discord.gg/playbloxd",
                            Tj = 180,
                            Vj = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function cj(MM) {
                            let {
                              basePath: rM,
                              activePageId: iM,
                              onNavigate: OM
                            } = MM;
                            return (0, hM.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: oM.map((MM => (0, hM.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, hM.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: MM.title
                                }), MM.pageIds.map((MM => {
                                  var SM;
                                  const PM = fM(MM);
                                  return (0, hM.jsxs)(aM.b, {
                                    to: FM(rM, PM),
                                    className: jM()("DocsNavLink", {
                                      Active: PM.id === iM
                                    }),
                                    "aria-current": PM.id === iM ? "page" : void 0,
                                    onClick: OM,
                                    children: [(0, hM.jsx)(dM, {
                                      name: PM.icon
                                    }), (0, hM.jsx)("span", {
                                      children: null !== (SM = PM.navTitle) && void 0 !== SM ? SM : PM.title
                                    })]
                                  }, PM.id)
                                }))]
                              }, MM.title)))
                            })
                          }

                          function Ma(MM) {
                            let {
                              basePath: rM,
                              pageId: iM
                            } = MM;
                            const OM = oM.flatMap((MM => MM.pageIds)),
                              SM = OM.indexOf(iM),
                              jM = SM > 0 ? fM(OM[SM - 1]) : null,
                              PM = SM < OM.length - 1 ? fM(OM[SM + 1]) : null;
                            return (0, hM.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [jM ? (0, hM.jsxs)(aM.b, {
                                className: "DocsPagerLink Previous",
                                to: FM(rM, jM),
                                children: [(0, hM.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, hM.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: jM.title
                                })]
                              }) : (0, hM.jsx)("span", {}), PM && (0, hM.jsxs)(aM.b, {
                                className: "DocsPagerLink Next",
                                to: FM(rM, PM),
                                children: [(0, hM.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, hM.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: PM.title
                                })]
                              })]
                            })
                          }

                          function ra(MM) {
                            let {
                              basePath: rM,
                              embedded: iM = !1
                            } = MM;
                            const {
                              pageSlug: SM = ""
                            } = (0, PM.D)(), QM = (0, PM.u)(), zM = (0, PM.y)(), LM = (mM = SM, ZM.find((MM => MM.slug === mM)));
                            var mM;
                            const [HM, JM] = function() {
                              const [MM, rM] = (0, OM.useState)((() => {
                                const MM = Fj.g.getItem(Bj);
                                return "dark" === MM || "light" === MM ? MM : null
                              })), [iM, SM] = (0, OM.useState)(Xj.matches ? "light" : "dark");
                              return (0, OM.useEffect)((() => {
                                const MM = () => {
                                  SM(Xj.matches ? "light" : "dark")
                                };
                                return Xj.addEventListener("change", MM), () => {
                                  Xj.removeEventListener("change", MM)
                                }
                              }), []), [null !== MM && void 0 !== MM ? MM : iM, MM => {
                                Fj.g.setItem(Bj, MM), rM(MM)
                              }]
                            }(), [yM, lM] = (0, OM.useState)(null), [EM, UM] = (0, OM.useState)(!1), [GM, CM] = (0, OM.useState)(!1), [eM, wM] = (0, OM.useState)([]), tM = function(MM, rM) {
                              const [iM, SM] = (0, OM.useState)("");
                              return (0, OM.useEffect)((() => {
                                if (!rM) return;
                                let iM = 0;
                                const OM = () => {
                                    var OM, jM;
                                    iM = 0;
                                    const aM = rM.getBoundingClientRect().top + Tj;
                                    let PM = null !== (OM = null === (jM = MM[0]) || void 0 === jM ? void 0 : jM.anchor) && void 0 !== OM ? OM : "";
                                    for (const rM of MM) {
                                      const MM = document.getElementById(rM.anchor);
                                      MM && MM.getBoundingClientRect().top <= aM && (PM = rM.anchor)
                                    }
                                    rM.scrollTop + rM.clientHeight >= rM.scrollHeight - 2 && rM.scrollTop > 0 && MM.length > 0 && (PM = MM[MM.length - 1].anchor), SM(PM)
                                  },
                                  jM = () => {
                                    iM || (iM = requestAnimationFrame(OM))
                                  };
                                return OM(), rM.addEventListener("scroll", jM, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(iM), rM.removeEventListener("scroll", jM)
                                }
                              }), [MM, rM]), iM
                            }(eM, yM), gM = "" === SM && QM.hash ? function(MM) {
                              const rM = (0, bM.q)(MM);
                              if (AM(fM("welcome"), rM)) return null;
                              const iM = Object.hasOwn(vM, rM) ? vM[rM] : null;
                              if (iM) return {
                                page: fM(iM.pageId),
                                anchor: iM.anchor
                              };
                              const OM = fM("readme");
                              return AM(OM, rM) ? {
                                page: OM,
                                anchor: rM
                              } : xM(`#${rM}`)
                            }(QM.hash) : null;
                            (0, OM.useEffect)((() => (nM.d.set({
                              musicOnFromPage: !1
                            }), () => {
                              nM.d.set({
                                musicOnFromPage: !0
                              }), lO()
                            })), []), (0, OM.useEffect)((() => {
                              const MM = MM => {
                                const rM = MM.target;
                                if (rM.closest(".DocsTextDialog")) return;
                                const iM = rM.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(rM.tagName);
                                "k" === MM.key && (MM.metaKey || MM.ctrlKey) || "/" === MM.key && !iM ? (MM.preventDefault(), CM(!0)) : "Escape" === MM.key && UM(!1)
                              };
                              return window.addEventListener("keydown", MM), () => {
                                window.removeEventListener("keydown", MM)
                              }
                            }), []);
                            const uM = (0, OM.useRef)(null);
                            (0, OM.useLayoutEffect)((() => {
                              var MM, rM;
                              if (!yM) return;
                              const iM = uM.current === QM.pathname;
                              uM.current = QM.pathname;
                              const OM = (0, bM.q)(QM.hash),
                                SM = OM ? document.getElementById(OM) : null;
                              if (null === (MM = yM.querySelector(".DocsTargeted")) || void 0 === MM || MM.classList.remove("DocsTargeted"), null === SM || void 0 === SM || null === (rM = SM.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === rM || rM.classList.add("DocsTargeted"), SM) {
                                var jM;
                                const MM = SM.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (jM = SM.closest(".DocsChangelogEntry")) && void 0 !== jM ? jM : SM).scrollIntoView({
                                  block: MM ? "center" : "start",
                                  behavior: iM ? "smooth" : "auto"
                                })
                              } else iM || yM.scrollTo({
                                top: 0
                              })
                            }), [yM, QM.pathname, QM.hash, QM.key]);
                            const RM = (0, OM.useCallback)((() => {
                                UM(!1)
                              }), []),
                              pM = (0, OM.useCallback)((MM => {
                                zM({
                                  hash: MM
                                })
                              }), [zM]);
                            if (gM) return (0, hM.jsx)(PM.e, {
                              replace: !0,
                              to: FM(rM, gM.page, gM.anchor)
                            });
                            if (!LM) return (0, hM.jsx)(PM.e, {
                              replace: !0,
                              to: rM
                            });
                            const WM = iM ? "div" : "main";
                            return (0, hM.jsx)(Hr.Provider, {
                              value: rM,
                              children: (0, hM.jsx)(hr.Provider, {
                                value: yM,
                                children: (0, hM.jsxs)("div", {
                                  ref: lM,
                                  className: jM()("DocsSite", {
                                    Embedded: iM,
                                    NavOpen: EM
                                  }),
                                  "data-theme": HM,
                                  children: [(0, hM.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, hM.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": EM ? "Close menu" : "Open menu",
                                      "aria-expanded": EM,
                                      onClick: () => {
                                        UM(!EM)
                                      },
                                      children: (0, hM.jsx)(dM, {
                                        name: EM ? "cross" : "menu"
                                      })
                                    }), (0, hM.jsxs)(aM.b, {
                                      to: rM,
                                      className: "DocsBrand",
                                      children: [(0, hM.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, hM.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, hM.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, hM.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        CM(!0)
                                      },
                                      children: [(0, hM.jsx)(dM, {
                                        name: "magnifying-glass"
                                      }), (0, hM.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, hM.jsxs)("kbd", {
                                        children: [Vj ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, hM.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, hM.jsxs)("a", {
                                        href: qj,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, hM.jsx)(dM, {
                                          name: "discord"
                                        }), (0, hM.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, hM.jsxs)("a", {
                                        href: Kj,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, hM.jsx)(dM, {
                                          name: "external-link"
                                        }), (0, hM.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !iM && (0, hM.jsxs)(aM.b, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, hM.jsx)(dM, {
                                          name: "play"
                                        }), (0, hM.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, hM.jsx)(Ij, {
                                        theme: HM,
                                        onChange: JM
                                      })]
                                    })]
                                  }), (0, hM.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, hM.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, hM.jsx)(cj, {
                                        basePath: rM,
                                        activePageId: LM.id,
                                        onNavigate: RM
                                      })
                                    }), (0, hM.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: RM
                                    }), (0, hM.jsxs)(WM, {
                                      className: "DocsMain",
                                      children: [(0, hM.jsx)(bj, {
                                        page: LM,
                                        onTocChange: wM
                                      }, LM.id), (0, hM.jsx)(Ma, {
                                        basePath: rM,
                                        pageId: LM.id
                                      })]
                                    }), (0, hM.jsx)("aside", {
                                      className: jM()("DocsToc", {
                                        Timeline: "changelog" === LM.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, hM.jsx)(uj, {
                                        isChangelog: "changelog" === LM.layout,
                                        toc: eM,
                                        activeAnchor: tM,
                                        onNavigate: pM
                                      })
                                    })]
                                  }), (0, hM.jsx)(vj, {}), GM && (0, hM.jsx)(Aj, {
                                    basePath: rM,
                                    onClose: () => {
                                      CM(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 5142: (MM, rM, iM) => {
                          iM.d(rM, {
                            C: () => mM,
                            d: () => OM,
                            h: () => aM,
                            j: () => dM,
                            l: () => JM,
                            n: () => PM,
                            q: () => SM,
                            r: () => jM,
                            v: () => hM,
                            z: () => HM
                          });
                          const OM = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function SM(MM) {
                            try {
                              return decodeURIComponent(MM.slice(1))
                            } catch {
                              return MM.slice(1)
                            }
                          }

                          function jM(MM) {
                            return MM.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const aM = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${OM.source}`, "g");

                          function PM(MM, rM) {
                            return 2 === MM.length ? rM.replace(/^ (.*) $/, "$1") : rM
                          }

                          function nM(MM) {
                            return "" === MM.trim()
                          }

                          function QM(MM) {
                            const rM = [];
                            for (const iM of MM.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) rM.length > 0 && rM[rM.length - 1].endsWith("\\") ? rM[rM.length - 1] += `|${iM}` : rM.push(iM);
                            return rM.map((MM => MM.trim().replaceAll("\\|", "|")))
                          }
                          const zM = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function LM(MM) {
                            const rM = [],
                              iM = [{
                                indent: -1,
                                items: rM
                              }];
                            let OM = null;
                            for (const SM of MM) {
                              const MM = SM.match(zM);
                              if (!MM) {
                                OM && (OM.text += ` ${SM.trim()}`);
                                continue
                              }
                              const rM = MM[1].replace(/\t/g, "  ").length;
                              for (; rM <= iM[iM.length - 1].indent;) iM.pop();
                              OM = {
                                text: MM[3].trim(),
                                children: []
                              }, iM[iM.length - 1].items.push(OM), iM.push({
                                indent: rM,
                                items: OM.children
                              })
                            }
                            return rM
                          }

                          function mM(MM) {
                            const rM = MM.replace(/\r\n/g, "\n").split("\n"),
                              iM = [];
                            let OM = 0;
                            for (; OM < rM.length;) {
                              const MM = rM[OM];
                              if (nM(MM)) {
                                OM++;
                                continue
                              }
                              const SM = MM.match(/^\s*```\s*(\w*)\s*$/);
                              if (SM) {
                                const MM = [];
                                for (OM++; OM < rM.length && !/^\s*```\s*$/.test(rM[OM]);) MM.push(rM[OM]), OM++;
                                OM++, iM.push({
                                  kind: "code",
                                  lang: SM[1] || "text",
                                  code: MM.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const aM = MM.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (aM) {
                                const MM = aM[2].trim();
                                iM.push({
                                  kind: "heading",
                                  level: aM[1].length,
                                  text: MM,
                                  anchor: jM(MM)
                                }), OM++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(MM)) {
                                iM.push({
                                  kind: "rule"
                                }), OM++;
                                continue
                              }
                              if (MM.trim().startsWith("|") && OM + 1 < rM.length && /^\s*\|[\s:|-]+\|\s*$/.test(rM[OM + 1])) {
                                const SM = QM(MM),
                                  jM = [];
                                for (OM += 2; OM < rM.length && rM[OM].trim().startsWith("|");) jM.push(QM(rM[OM])), OM++;
                                iM.push({
                                  kind: "table",
                                  header: SM,
                                  rows: jM
                                });
                                continue
                              }
                              if (MM.startsWith(">")) {
                                const MM = [];
                                for (; OM < rM.length && rM[OM].startsWith(">");) MM.push(rM[OM].replace(/^>\s?/, "")), OM++;
                                iM.push({
                                  kind: "quote",
                                  blocks: mM(MM.join("\n"))
                                });
                                continue
                              }
                              if (zM.test(MM)) {
                                const SM = [],
                                  jM = /^\s*\d+\./.test(MM);
                                for (; OM < rM.length && !nM(rM[OM]) && (zM.test(rM[OM]) || /^\s+\S/.test(rM[OM]));) SM.push(rM[OM]), OM++;
                                iM.push({
                                  kind: "list",
                                  ordered: jM,
                                  items: LM(SM)
                                });
                                continue
                              }
                              const PM = [];
                              for (; OM < rM.length && !nM(rM[OM]) && !/^\s*```/.test(rM[OM]) && !/^#{1,6}\s/.test(rM[OM]) && !rM[OM].startsWith(">") && !zM.test(rM[OM]) && (!rM[OM].trim().startsWith("|") || 0 !== PM.length);) PM.push(rM[OM].trim()), OM++;
                              0 === PM.length && (PM.push(rM[OM].trim()), OM++), iM.push({
                                kind: "paragraph",
                                text: PM.join(" ")
                              })
                            }
                            return iM
                          }

                          function HM(MM) {
                            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const iM = mM(MM);
                            let OM = "";
                            const SM = [],
                              jM = [],
                              aM = new Map;
                            for (const QM of iM) {
                              if ("heading" === QM.kind) {
                                var PM;
                                const MM = (null !== (PM = aM.get(QM.anchor)) && void 0 !== PM ? PM : 0) + 1;
                                aM.set(QM.anchor, MM), MM > 1 && (QM.anchor = `${QM.anchor}-${MM}`)
                              }
                              if ("heading" === QM.kind && 1 === QM.level && !OM) {
                                OM = QM.text;
                                continue
                              }
                              if ("heading" === QM.kind && QM.level <= rM) {
                                jM.push({
                                  heading: QM,
                                  blocks: []
                                });
                                continue
                              }
                              const MM = jM.at(-1);
                              MM ? MM.blocks.push(QM) : SM.push(QM)
                            }
                            const nM = MM => {
                              for (;
                                "rule" === (null === (rM = MM.at(-1)) || void 0 === rM ? void 0 : rM.kind);) {
                                var rM;
                                MM.pop()
                              }
                            };
                            nM(SM);
                            for (const QM of jM) nM(QM.blocks);
                            return {
                              title: OM,
                              intro: SM,
                              sections: jM
                            }
                          }

                          function hM(MM) {
                            return [{
                              heading: null,
                              blocks: MM.intro
                            }, ...MM.sections.map((MM => ({
                              heading: MM.heading,
                              blocks: MM.blocks
                            })))]
                          }

                          function JM(MM) {
                            return MM.flatMap((MM => "code" === MM.kind ? [MM] : "quote" === MM.kind ? JM(MM.blocks) : []))
                          }

                          function dM(MM) {
                            switch (MM.kind) {
                              case "heading":
                              case "paragraph":
                                return MM.text;
                              case "code":
                                return MM.code;
                              case "table":
                                return [MM.header, ...MM.rows].map((MM => MM.join(" "))).join(" ");
                              case "list": {
                                const rM = MM => MM.map((MM => `${MM.text} ${rM(MM.children)}`)).join(" ");
                                return rM(MM.items)
                              }
                              case "quote":
                                return MM.blocks.map(dM).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 5242: (MM, rM, iM) => {
                          iM.d(rM, {
                            c: () => PM
                          });
                          var OM = iM(44),
                            SM = iM(313),
                            jM = iM(2026),
                            aM = iM(1303);

                          function PM(MM) {
                            let {
                              text: rM
                            } = MM;
                            const iM = [];
                            let PM = "";
                            return (0, SM.bc)(rM).forEach(((MM, rM) => {
                              if ("string" === typeof MM || !(0, jM.d)(MM.icon)) return void(PM += "string" === typeof MM ? MM : MM.icon);
                              const SM = Math.max(0, PM.trimEnd().search(/\S{1,12}$/));
                              iM.push((0, aM.jsxs)(OM.Fragment, {
                                children: [PM.slice(0, SM), (0, aM.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [PM.slice(SM), (0, aM.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": MM.icon,
                                    children: (0, aM.jsx)(jM.b, {
                                      itemName: MM.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, rM)), PM = ""
                            })), iM.push(PM), (0, aM.jsx)(aM.Fragment, {
                              children: iM
                            })
                          }
                        }, 5173: (MM, rM, iM) => {
                          iM.d(rM, {
                            h: () => lM,
                            e: () => yM
                          });
                          var OM = iM(44),
                            SM = iM(1516),
                            jM = iM(2006),
                            aM = iM(5182),
                            PM = iM(1303);
                          const nM = (0, OM.memo)((function(MM) {
                            let {
                              initialParameters: rM
                            } = MM;
                            const iM = (0, OM.useRef)(null),
                              SM = (0, OM.useRef)(null),
                              nM = (0, OM.useRef)(0),
                              QM = (0, OM.useRef)(null),
                              zM = rM.description,
                              LM = rM.sO,
                              {
                                scale: mM,
                                rotation: HM
                              } = null !== rM && void 0 !== rM ? rM : {},
                              hM = (0, aM.g)();
                            return (0, OM.useEffect)((() => {
                              const MM = hM.onFrame((() => {
                                const MM = hM.getState();
                                if (!MM.isActive || !iM.current || !SM.current) return;
                                const rM = MM.state;
                                if (iM.current.value = rM.progress, rM.clickCount > nM.current) {
                                  nM.current = rM.clickCount;
                                  const MM = SM.current;
                                  MM.classList.add("pulse"), QM.current = setTimeout((() => {
                                    MM.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(QM.current), MM()
                              }
                            }), [hM]), (0, PM.jsx)(PM.Fragment, {
                              children: (0, PM.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== mM && {
                                    "--scale": mM
                                  },
                                  ...null !== HM && {
                                    "--rotation": `${HM}deg`
                                  }
                                },
                                children: [(0, PM.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: iM
                                }), (0, PM.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: SM,
                                  children: (0, PM.jsx)(jM.b, {
                                    text: [{
                                      icon: LM
                                    }]
                                  })
                                }), (0, PM.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, PM.jsx)(jM.b, {
                                    text: zM
                                  })
                                })]
                              })
                            })
                          }));
                          var QM = iM(1116),
                            zM = iM.n(QM);
                          const LM = 2 * Math.PI * 90,
                            mM = (0, OM.memo)((function(MM) {
                              let {
                                initialParameters: rM
                              } = MM;
                              const iM = (0, OM.useRef)(null),
                                SM = (0, OM.useRef)(null),
                                nM = (0, OM.useRef)(null),
                                QM = rM.label,
                                mM = rM.icon,
                                HM = rM.ZO,
                                {
                                  scale: hM,
                                  rotation: JM,
                                  oO: dM
                                } = null !== rM && void 0 !== rM ? rM : {},
                                yM = (0, aM.g)();
                              return (0, OM.useEffect)((() => {
                                const MM = yM.onFrame((() => {
                                  var MM, rM;
                                  const OM = yM.getState();
                                  if (!OM.isActive || !SM.current) return;
                                  const jM = OM.state,
                                    aM = null !== (MM = jM.timeRemaining) && void 0 !== MM ? MM : 0,
                                    PM = null !== (rM = jM.kO) && void 0 !== rM ? rM : 1,
                                    QM = LM * (1 - aM / PM);
                                  SM.current.style.strokeDashoffset = `${QM}`, iM.current && (iM.current.style.opacity = aM > 0 ? "1" : "0"), nM.current && HM && (nM.current.textContent = `${(aM/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  MM()
                                }
                              }), [yM, HM]), (0, PM.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: iM,
                                style: {
                                  ...null !== hM && {
                                    "--scale": hM
                                  },
                                  ...null !== JM && {
                                    "--rotation": `${JM}deg`
                                  }
                                },
                                children: [(0, PM.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, PM.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, PM.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, PM.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: LM,
                                      ref: SM
                                    })]
                                  }), (0, PM.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, PM.jsx)(jM.b, {
                                      text: [{
                                        icon: mM
                                      }],
                                      className: zM()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: dM
                                      })
                                    })
                                  })]
                                }), (0, PM.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, PM.jsx)(jM.b, {
                                    text: QM,
                                    className: "QTETimedClickLabelText"
                                  }), HM && (0, PM.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: nM
                                  })]
                                })]
                              })
                            })),
                            HM = (0, OM.memo)((function(MM) {
                              let {
                                initialParameters: rM
                              } = MM;
                              const iM = (0, OM.useRef)(null),
                                SM = (0, OM.useRef)(null),
                                nM = (0, OM.useRef)(null),
                                QM = (0, OM.useRef)(!1),
                                zM = rM.description,
                                LM = null === rM || void 0 === rM ? void 0 : rM.icon,
                                mM = (0, aM.g)();
                              return (0, OM.useEffect)((() => {
                                const MM = mM.onFrame((() => {
                                  const MM = mM.getState();
                                  if (!MM.isActive) return;
                                  const rM = MM.state;
                                  if (iM.current) {
                                    const MM = 100 * (rM.catchZonePosition - rM.YO / 2);
                                    iM.current.style.left = `${MM}%`, iM.current.style.width = 100 * rM.YO + "%", rM.isCatching !== QM.current && (QM.current = rM.isCatching, rM.isCatching ? iM.current.classList.add("catching") : iM.current.classList.remove("catching"))
                                  }
                                  SM.current && (SM.current.style.left = 100 * rM.moverPosition + "%"), nM.current && (nM.current.value = rM.progress)
                                }));
                                return () => {
                                  MM()
                                }
                              }), [mM]), (0, PM.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, PM.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, PM.jsx)(jM.b, {
                                    text: zM
                                  })
                                }), (0, PM.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: nM
                                }), (0, PM.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, PM.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: iM
                                  }), (0, PM.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: SM,
                                    children: (0, PM.jsx)("span", {
                                      children: LM && (0, PM.jsx)(jM.b, {
                                        text: [{
                                          icon: LM,
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
                          var hM = iM(625);
                          const JM = (0, OM.memo)((function(MM) {
                              let {
                                initialParameters: rM
                              } = MM;
                              const iM = (0, OM.useRef)(null),
                                SM = rM.label,
                                nM = rM.IO,
                                {
                                  icon: QM,
                                  scale: zM,
                                  rotation: LM
                                } = null !== rM && void 0 !== rM ? rM : {},
                                mM = 100 * (.5 - nM / 2),
                                HM = 100 * nM,
                                JM = (0, aM.g)();
                              return (0, OM.useEffect)((() => {
                                const MM = JM.onFrame((() => {
                                  const MM = JM.getState();
                                  if (!MM.isActive || !iM.current) return;
                                  const rM = MM.state;
                                  iM.current.style.left = 100 * rM.markerPosition + "%"
                                }));
                                return () => {
                                  MM()
                                }
                              }), [JM]), (0, PM.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, hM.J)(zM) && {
                                    "--scale": zM
                                  },
                                  ...!(0, hM.J)(LM) && {
                                    "--rotation": `${LM}deg`
                                  }
                                },
                                children: [QM && (0, PM.jsx)(jM.b, {
                                  text: [{
                                    icon: QM
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, PM.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, PM.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${mM}%`,
                                      width: `${HM}%`
                                    }
                                  }), (0, PM.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: iM
                                  })]
                                }), (0, PM.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, PM.jsx)(jM.b, {
                                    text: SM
                                  })
                                })]
                              })
                            })),
                            dM = (0, OM.memo)((function(MM) {
                              let {
                                initialParameters: rM
                              } = MM;
                              const iM = (0, OM.useRef)(null),
                                [SM, nM] = (0, OM.useState)((() => new Array(rM.qO).fill("pending"))),
                                [QM, zM] = (0, OM.useState)((() => {
                                  const MM = rM.MS;
                                  return (0, hM.J)(MM) || MM <= 0 ? [] : new Array(MM).fill("pending")
                                })),
                                LM = rM.label,
                                {
                                  icon: mM
                                } = rM,
                                HM = (0, OM.useRef)(0),
                                JM = (0, OM.useRef)(0),
                                dM = (0, OM.useRef)([]),
                                yM = (0, aM.g)();
                              return (0, OM.useEffect)((() => {
                                const MM = yM.onFrame((() => {
                                  const MM = yM.getState();
                                  if (!MM.isActive || !iM.current) return;
                                  const rM = MM.state,
                                    OM = 30 + 60 * rM.outerCircleProgress;
                                  if (iM.current.setAttribute("r", String(OM)), !0 === rM.lastClickResult && rM.successes > HM.current) {
                                    iM.current.classList.remove("QTERhythmClickOuterCircle--miss"), iM.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const MM = setTimeout((() => {
                                      var MM;
                                      null === (MM = iM.current) || void 0 === MM || MM.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    dM.current.push(MM)
                                  } else if (!1 === rM.lastClickResult && rM.misses > JM.current) {
                                    iM.current.classList.remove("QTERhythmClickOuterCircle--hit"), iM.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const MM = setTimeout((() => {
                                      var MM;
                                      null === (MM = iM.current) || void 0 === MM || MM.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    dM.current.push(MM)
                                  }
                                  rM.successes === HM.current && rM.misses === JM.current || (HM.current = rM.successes, JM.current = rM.misses, nM((MM => {
                                    const iM = [...MM];
                                    for (let OM = 0; OM < rM.qO; OM++) iM[OM] = OM < rM.successes ? "success" : "pending";
                                    return iM
                                  })), zM((MM => {
                                    if (0 === MM.length) return MM;
                                    const iM = [...MM];
                                    for (let OM = 0; OM < iM.length; OM++) iM[OM] = OM < rM.misses ? "miss" : "pending";
                                    return iM
                                  })))
                                }));
                                return () => {
                                  MM();
                                  for (const MM of dM.current) clearTimeout(MM);
                                  dM.current = []
                                }
                              }), [yM]), (0, PM.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, PM.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: SM.map(((MM, rM) => (0, PM.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === MM ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, rM)))
                                }), (0, PM.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, PM.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, PM.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, PM.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: iM
                                    })]
                                  }), mM && (0, PM.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, PM.jsx)(jM.b, {
                                      text: [{
                                        icon: mM
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), QM.length > 0 && (0, PM.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: QM.map(((MM, rM) => (0, PM.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === MM ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, rM)))
                                }), (0, PM.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, PM.jsx)(jM.b, {
                                    text: LM
                                  })
                                })]
                              })
                            }));

                          function yM(MM) {
                            let {
                              qte: rM
                            } = MM;
                            switch (rM.type) {
                              case "progressBar":
                                return (0, PM.jsx)(nM, {
                                  initialParameters: rM.parameters
                                });
                              case "timedClick":
                                return (0, PM.jsx)(mM, {
                                  initialParameters: rM.parameters
                                });
                              case "gravityBar":
                                return (0, PM.jsx)(HM, {
                                  initialParameters: rM.parameters
                                });
                              case "precisionBar":
                                return (0, PM.jsx)(JM, {
                                  initialParameters: rM.parameters
                                });
                              case "rhythmClick":
                                return (0, PM.jsx)(dM, {
                                  initialParameters: rM.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const lM = (0, OM.memo)((function() {
                            const [MM, rM] = (0, OM.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, SM.d)("qteStateUpdated", (MM => {
                              rM(MM)
                            })), MM.isActive && MM.type ? (0, PM.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, PM.jsx)(yM, {
                                qte: MM
                              })
                            }) : null
                          }))
                        }, 5182: (MM, rM, iM) => {
                          iM.d(rM, {
                            c: () => PM,
                            g: () => nM
                          });
                          var OM = iM(44),
                            SM = iM(1327),
                            jM = iM(5184);
                          const aM = {
                              getState: () => jM.d.getCurrentState(),
                              onFrame: SM.v
                            },
                            PM = (0, OM.createContext)(aM);

                          function nM() {
                            return (0, OM.useContext)(PM)
                          }
                        }, 5248: (MM, rM, iM) => {
                          iM.d(rM, {
                            e: () => DM,
                            i: () => sM
                          });
                          var OM = iM(5251),
                            SM = iM(313);
                          const jM = 120,
                            aM = 260,
                            PM = 1.15,
                            nM = 1.2,
                            QM = 2,
                            zM = 1.08,
                            LM = .8,
                            mM = .95,
                            HM = 8,
                            hM = "[\"')\\]\u300d\u300f\uff09]*",
                            JM = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${hM}$`),
                            dM = new RegExp(`[?\uff1f]${hM}$`),
                            yM = new RegExp(`[!\uff01]${hM}$`),
                            lM = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            EM = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            UM = new RegExp(`[${EM}]`),
                            GM = new RegExp(`[${EM}]|[^${EM}]+`, "g"),
                            CM = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function eM(MM) {
                            let rM = 2166136261;
                            for (let iM = 0; iM < MM.length; iM++) rM ^= MM.charCodeAt(iM), rM = Math.imul(rM, 16777619);
                            return (rM >>> 0) / 4294967295 * 2 - 1
                          }

                          function bM(MM) {
                            var rM;
                            if (UM.test(MM)) return 1;
                            const iM = MM.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              OM = iM.replace(/[^0-9]/g, "");
                            if (OM.length > 0 && !/\p{L}/u.test(iM)) return Math.min(OM.length, 4);
                            const SM = null !== (rM = iM.match(CM)) && void 0 !== rM ? rM : [];
                            if (0 === SM.length) {
                              var jM, aM;
                              const MM = null !== (jM = null === (aM = iM.match(/\p{L}/gu)) || void 0 === aM ? void 0 : aM.length) && void 0 !== jM ? jM : 0;
                              return 0 === MM ? 0 : Math.min(Math.max(1, Math.round(MM / 2.5)), HM)
                            }
                            const PM = iM.replace(/[^\p{L}]/gu, ""),
                              nM = SM.length > 1 && "e" === SM.at(-1) && PM.endsWith("e") && !PM.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(MM.replace(/[^\p{L}]/gu, ""));
                            return Math.min(SM.length - (nM ? 1 : 0), HM)
                          }

                          function wM(MM) {
                            return MM.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function tM(MM) {
                            const rM = MM.replace(/[^\p{L}]/gu, "");
                            return rM.length >= 2 && rM === rM.toUpperCase() && rM !== rM.toLowerCase()
                          }

                          function gM(MM, rM) {
                            var iM;
                            const HM = rM && (0, OM.p)(rM),
                              hM = null !== (iM = null === HM || void 0 === HM ? void 0 : HM.syllableMs) && void 0 !== iM ? iM : OM.d,
                              EM = function(MM) {
                                const rM = [];
                                for (const OM of (0, SM.bc)(MM))
                                  if ("string" === typeof OM)
                                    for (const MM of OM.split(/(\s+)/)) {
                                      if ("" === MM) continue;
                                      if (/^\s+$/.test(MM)) {
                                        rM.push({
                                          kind: "space",
                                          text: MM
                                        });
                                        continue
                                      }
                                      if (!UM.test(MM)) {
                                        rM.push({
                                          kind: "word",
                                          text: MM,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let OM = !0;
                                      for (const SM of null !== (iM = MM.match(GM)) && void 0 !== iM ? iM : []) {
                                        var iM;
                                        const MM = rM.at(-1);
                                        OM || "word" !== (null === MM || void 0 === MM ? void 0 : MM.kind) || UM.test(SM) || /[\p{L}\p{N}]/u.test(SM) ? (OM || rM.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), rM.push({
                                          kind: "word",
                                          text: SM,
                                          delayMs: 0
                                        }), OM = !1) : MM.text += SM
                                      }
                                    } else rM.push({
                                      kind: "icon",
                                      text: OM.icon,
                                      delayMs: 0
                                    });
                                return rM
                              }(MM),
                              CM = [];
                            let gM = [];
                            for (const OM of EM) "space" !== OM.kind && (gM.push(OM), JM.test(OM.text) && (CM.push(gM), gM = []));
                            CM.push(gM);
                            const uM = [];
                            let RM = 0;
                            for (const OM of CM) {
                              var pM, WM;
                              const MM = null !== (pM = null === (WM = OM.at(-1)) || void 0 === WM ? void 0 : WM.text) && void 0 !== pM ? pM : "",
                                rM = dM.test(MM),
                                iM = yM.test(MM),
                                SM = OM.map((MM => "word" === MM.kind ? bM(MM.text) : 1)),
                                EM = SM.findLastIndex((MM => MM > 0));
                              for (const [dM, yM] of OM.entries()) {
                                const MM = "word" === yM.kind,
                                  OM = SM[dM];
                                yM.delayMs = RM;
                                for (let SM = 0; HM && SM < OM; SM++) {
                                  const {
                                    intonation: jM
                                  } = HM;
                                  let aM = EM > 0 ? -jM.declineSemitones * (dM / EM) : 0;
                                  aM += eM(`${wM(yM.text)}|${SM}`) * jM.variationSemitones;
                                  const JM = Math.min(1, jM.variationSemitones);
                                  let lM = HM.glideSemitones,
                                    UM = 1;
                                  iM && (aM += jM.exclaimLiftSemitones, UM *= PM), rM && dM === EM && (aM += jM.questionRiseSemitones * (OM > 1 ? .5 + .5 * SM / (OM - 1) : 1), SM === OM - 1 && (lM = Math.abs(lM) + jM.questionRiseSemitones / 2)), MM && tM(yM.text) && (aM += QM * JM, UM *= nM), OM > 1 && 0 === SM && (aM += LM * JM, UM *= zM), uM.push({
                                    atMs: RM + SM * hM,
                                    semitones: aM,
                                    glideSemitones: lM,
                                    durationMs: SM < OM - 1 ? Math.min(HM.durationMs, hM * mM) : HM.durationMs,
                                    level: UM
                                  })
                                }
                                RM += OM * hM + (JM.test(yM.text) ? aM : lM.test(yM.text) ? jM : 0)
                              }
                            }
                            return {
                              pieces: EM.map((MM => "space" === MM.kind ? MM : "icon" === MM.kind ? {
                                kind: "icon",
                                icon: MM.text,
                                delayMs: MM.delayMs
                              } : {
                                kind: "word",
                                text: MM.text,
                                delayMs: MM.delayMs
                              })),
                              blips: uM
                            }
                          }
                          var uM = iM(1188),
                            RM = iM(1258),
                            pM = iM(2045);

                          function WM(MM) {
                            if ("string" === typeof MM) return MM;
                            const rM = RM.e.get().getCurrentLanguageCode();
                            return (0, uM.r)(rM, MM.translationKey, (0, uM.o)(MM.params, pM.c.shown))
                          }

                          function sM(MM) {
                            const rM = void 0 === MM.voice ? null : (0, OM.r)(MM.voice),
                              iM = rM && (0, OM.p)(rM);
                            return {
                              plan: gM(WM(MM.line), iM),
                              synth: iM
                            }
                          }

                          function DM(MM) {
                            const rM = [];
                            let iM = [];
                            for (const [SM, jM] of MM.entries()) {
                              var OM;
                              "space" === jM.kind && (" " !== jM.text || "icon" !== (null === (OM = MM[SM + 1]) || void 0 === OM ? void 0 : OM.kind)) ? (iM.length > 0 && rM.push(iM), rM.push([jM]), iM = []) : iM.push(jM)
                            }
                            return iM.length > 0 && rM.push(iM), rM
                          }
                        }, 5259: (MM, rM, iM) => {
                          iM.d(rM, {
                            d: () => zM,
                            g: () => LM
                          });
                          var OM = iM(5265),
                            SM = iM(19);
                          const jM = .25,
                            aM = .85,
                            PM = .02,
                            nM = .01;

                          function QM(MM, rM, iM, OM, SM, jM, PM) {
                            const {
                              waveform: nM,
                              pitchHz: QM,
                              attackMs: zM,
                              releaseMs: LM,
                              lowpassHz: mM
                            } = iM, HM = SM + OM.durationMs / 1e3, hM = QM * 2 ** (OM.semitones / 12), JM = MM.createOscillator();
                            JM.type = nM, JM.frequency.setValueAtTime(hM, SM), JM.frequency.exponentialRampToValueAtTime(hM * 2 ** (OM.glideSemitones / 12), HM);
                            const dM = SM + Math.min(zM, OM.durationMs) / 1e3,
                              yM = MM.createGain();
                            yM.gain.setValueAtTime(0, SM), yM.gain.linearRampToValueAtTime(jM, dM), yM.gain.linearRampToValueAtTime(jM * aM, Math.max(dM, HM - LM / 1e3)), yM.gain.linearRampToValueAtTime(0, HM);
                            const lM = [JM];
                            if (null !== mM) {
                              const rM = MM.createBiquadFilter();
                              rM.type = "lowpass", rM.frequency.value = mM, lM.push(rM)
                            }
                            lM.push(yM, rM);
                            for (let aM = 1; aM < lM.length; aM++) lM[aM - 1].connect(lM[aM]);
                            return JM.onended = () => {
                              for (const MM of lM.slice(0, -1)) MM.disconnect();
                              PM()
                            }, JM.start(SM), JM.stop(HM), JM
                          }

                          function zM(MM, rM, iM, OM, SM, aM) {
                            if (0 === OM.length) return aM(), () => {};
                            const zM = jM * iM.volume * SM,
                              LM = MM.createGain();
                            LM.connect(rM);
                            const mM = MM.currentTime + PM,
                              HM = new Set;
                            for (const jM of OM) {
                              const rM = QM(MM, LM, iM, jM, mM + jM.atMs / 1e3, zM * jM.level, (() => {
                                HM.delete(rM), 0 === HM.size && (LM.disconnect(), aM())
                              }));
                              HM.add(rM)
                            }
                            return () => {
                              const rM = MM.currentTime;
                              LM.gain.setTargetAtTime(0, rM, nM);
                              for (const MM of HM) try {
                                MM.stop(rM + 5 * nM)
                              } catch {}
                            }
                          }

                          function LM(MM, rM) {
                            var iM;
                            const jM = OM.Howler.ctx,
                              aM = OM.Howler.masterGain;
                            if (!jM || !aM || !SM.d.get("soundOnFromAd")) return () => {};
                            const PM = OM.Howler;
                            return null === (iM = PM._autoResume) || void 0 === iM || iM.call(PM), zM(jM, aM, MM, rM, SM.d.get("soundVolume"), (() => {
                              var MM;
                              null === (MM = PM._autoSuspend) || void 0 === MM || MM.call(PM)
                            }))
                          }
                        }, 5230: (MM, rM, iM) => {
                          iM.d(rM, {
                            c: () => PM,
                            d: () => SM,
                            g: () => nM,
                            i: () => aM,
                            m: () => jM
                          });
                          var OM = iM(5221);
                          const SM = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            jM = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            aM = `${OM.k} lists every page of the Bloxd Code API docs.`;

                          function PM(MM, rM) {
                            return `${MM.url}${encodeURIComponent(rM.toWellFormed())}`
                          }

                          function nM(MM) {
                            const rM = PM(SM, MM);
                            return rM.length <= 3e4 ? {
                              url: rM,
                              sendsPrompt: !0
                            } : {
                              url: new URL(SM.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 5265: (MM, rM, iM) => {
                          iM.r(rM), iM.d(rM, {
                            Howl: () => SM.Howl,
                            Howler: () => SM.Howler,
                            musicOutput: () => dM,
                            readyAudioContext: () => yM
                          });
                          var OM, SM = iM(5269),
                            jM = iM(3839),
                            aM = iM(5026);
                          const PM = SM.Howler;

                          function nM() {
                            var MM, rM;
                            if (PM.ctx || !PM.usingWebAudio || "undefined" === typeof AudioContext || !(0, aM.k)()) return;
                            const iM = navigator.audioSession;
                            let OM;
                            "auto" === (null === iM || void 0 === iM ? void 0 : iM.type) && (iM.type = "ambient");
                            try {
                              OM = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const SM = OM.createGain();
                            SM.gain.setValueAtTime(PM._muted ? 0 : null !== (MM = PM._volume) && void 0 !== MM ? MM : 1, OM.currentTime), SM.connect(OM.destination), PM.ctx = OM, PM.masterGain = SM, null === (rM = PM._setup) || void 0 === rM || rM.call(PM)
                          }
                          PM._mobileUnloaded = !0;
                          const QM = PM.volume.bind(SM.Howler);
                          PM.volume = function() {
                            return nM(), QM(...arguments)
                          };
                          const zM = PM.mute.bind(SM.Howler);
                          PM.mute = MM => (nM(), zM(MM));
                          const LM = SM.Howl.prototype,
                            mM = LM.init;

                          function HM() {
                            for (; PM._html5AudioPool.length < PM.html5PoolSize;) {
                              const MM = new Audio;
                              MM._unlocked = !0, PM._releaseHtml5Audio(MM)
                            }
                            for (const rM of PM._howls)
                              if (!rM._webAudio)
                                for (const iM of rM._getSoundIds()) {
                                  var MM;
                                  const OM = null === (MM = rM._soundById(iM)) || void 0 === MM ? void 0 : MM._node;
                                  OM && !OM._unlocked && (OM._unlocked = !0, OM.load())
                                }
                          }
                          LM.init = function(MM) {
                            return nM(), mM.call(this, MM)
                          }, (0, aM.k)() && (PM._unlockAudio = () => {
                            const MM = PM.ctx;
                            if (PM._audioUnlocked || !MM) return;
                            PM.autoUnlock = !1;
                            const rM = MM.createBuffer(1, 1, 22050);
                            PM._scratchBuffer = rM;
                            const iM = new AbortController;
                            let OM = "afterPaint";
                            const SM = () => {
                                var OM;
                                if (PM._audioUnlocked) return;
                                null === (OM = PM._autoResume) || void 0 === OM || OM.call(PM);
                                const SM = MM.createBufferSource();
                                SM.buffer = rM, SM.connect(MM.destination), SM.start(0), MM.resume().catch((() => {})), SM.onended = () => {
                                  SM.disconnect(0), PM._audioUnlocked = !0, iM.abort();
                                  for (const MM of PM._howls) MM._emit("unlock")
                                }
                              },
                              nM = () => {
                                HM(), SM()
                              },
                              QM = rM => {
                                if (HM(), "inTap" === OM) {
                                  if ("running" === MM.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), SM()
                                } else "afterPaint" === OM && (OM = "queued", (0, jM.d)(rM.timeStamp, (() => {
                                  OM = "inTap", SM()
                                })))
                              };
                            for (const jM of ["touchstart", "touchend"]) document.addEventListener(jM, nM, {
                              capture: !0,
                              signal: iM.signal
                            });
                            for (const jM of aM.e) document.addEventListener(jM, QM, {
                              capture: !0,
                              signal: iM.signal
                            })
                          });
                          let hM = 0;
                          const JM = null === (OM = PM._autoSuspend) || void 0 === OM ? void 0 : OM.bind(SM.Howler);

                          function dM() {
                            yM();
                            const {
                              ctx: MM,
                              masterGain: rM
                            } = PM;
                            return MM && rM ? {
                              ctx: MM,
                              destination: rM,
                              holdAwake: MM => {
                                var rM, iM;
                                (hM += MM ? 1 : -1, MM) ? null === (rM = PM._autoResume) || void 0 === rM || rM.call(PM): null === (iM = PM._autoSuspend) || void 0 === iM || iM.call(PM)
                              },
                              wake: () => {
                                var rM;
                                "running" !== MM.state && (null === (rM = PM._autoResume) || void 0 === rM || rM.call(PM), MM.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function yM() {
                            var MM;
                            (PM.volume(), PM.ctx && PM.autoUnlock) && (null === (MM = PM._unlockAudio) || void 0 === MM || MM.call(PM))
                          }
                          JM && (PM._autoSuspend = () => hM > 0 ? SM.Howler : JM())
                        }, 5273: (MM, rM, iM) => {
                          function OM(MM) {
                            return {
                              notAfter: MM
                            }
                          }
                          iM.d(rM, {
                            c: () => nM,
                            e: () => QM,
                            f: () => PM,
                            g: () => OM,
                            h: () => SM,
                            j: () => jM,
                            n: () => aM,
                            p: () => zM,
                            r: () => LM
                          });
                          const SM = OM("\\w$."),
                            jM = OM("\\w.,");

                          function aM(MM) {
                            return rM => nM(rM, MM)
                          }

                          function PM(MM) {
                            return rM => !MM.test(rM.input.slice(0, rM.index))
                          }

                          function nM(MM, rM) {
                            return MM.index > 0 && new RegExp(`[${rM}]`).test(MM.input[MM.index - 1])
                          }

                          function QM(MM, rM, iM) {
                            return function(MM) {
                              return void 0 !== MM && "function" !== typeof MM
                            }(iM) ? function(MM, rM, iM) {
                              const OM = rM.flags.replace(/[gy]/g, ""),
                                SM = new RegExp(`[^${iM}](?:${rM.source})`, `${OM}g`),
                                jM = [],
                                aM = iM => {
                                  const OM = iM.index + iM[0].length;
                                  return ("" === iM[0] ? mM(MM, rM, OM) : OM) - 1
                                },
                                PM = new RegExp(`(?:${rM.source})`, `${OM}y`).exec(MM);
                              if (PM) {
                                if (jM.push(PM), !rM.global) return jM;
                                SM.lastIndex = aM(PM)
                              }
                              for (let nM = SM.exec(MM); nM; nM = SM.exec(MM)) {
                                const iM = mM(MM, rM, nM.index) - nM.index;
                                if (nM[0] = nM[0].slice(iM), nM.index += iM, jM.push(nM), !rM.global) break;
                                SM.lastIndex = aM(nM)
                              }
                              return jM
                            }(MM, rM, iM.notAfter) : function(MM, rM, iM) {
                              const OM = new RegExp(rM.source, `${rM.flags.replace(/[gy]/g,"")}g`),
                                SM = [];
                              for (let jM = OM.exec(MM); jM; jM = OM.exec(MM))
                                if (!iM || iM(jM)) {
                                  if (SM.push(jM), !rM.global) break;
                                  "" === jM[0] && (OM.lastIndex = mM(MM, rM, OM.lastIndex))
                                } else OM.lastIndex = mM(MM, rM, jM.index);
                              return SM
                            }(MM, rM, iM)
                          }

                          function zM(MM, rM, iM, OM) {
                            let SM = "",
                              jM = 0;
                            for (const aM of QM(MM, rM, iM)) SM += MM.slice(jM, aM.index) + OM(aM), jM = aM.index + aM[0].length;
                            return SM + MM.slice(jM)
                          }

                          function LM(MM, rM, iM) {
                            const OM = [];
                            let SM = 0;
                            for (const jM of QM(MM, rM, iM)) OM.push(MM.slice(SM, jM.index)), SM = jM.index + jM[0].length;
                            return [...OM, MM.slice(SM)]
                          }

                          function mM(MM, rM, iM) {
                            var OM;
                            return iM + (rM.unicode && (null !== (OM = MM.codePointAt(iM)) && void 0 !== OM ? OM : 0) > 65535 ? 2 : 1)
                          }
                        }, 5221: (MM, rM, iM) => {
                          iM.d(rM, {
                            e: () => SM,
                            f: () => nM,
                            h: () => jM,
                            k: () => aM,
                            m: () => PM,
                            o: () => dM,
                            q: () => zM,
                            u: () => LM,
                            w: () => JM,
                            y: () => HM
                          });
                          var OM = iM(1663);
                          const SM = 24e3,
                            jM = "/docs/llms.txt",
                            aM = `${OM.d}${jM}`,
                            PM = "/llms.txt",
                            nM = "/docs/llms-full.txt";

                          function QM(MM) {
                            return MM || "index"
                          }

                          function zM(MM) {
                            return `/docs/${QM(MM)}.md`
                          }

                          function LM(MM, rM) {
                            return `/docs/${QM(MM)}/${rM+1}.md`
                          }
                          const mM = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function HM(MM) {
                            const rM = mM.exec(MM);
                            return null === rM ? null : {
                              name: rM[1],
                              part: void 0 === rM[2] ? null : Number(rM[2])
                            }
                          }
                          const hM = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function JM(MM) {
                            const rM = hM.exec(MM);
                            if (null === rM) return null;
                            const [, iM = "", OM] = rM;
                            return void 0 === OM ? zM(iM) : LM(iM, Number(OM) - 1)
                          }

                          function dM(MM) {
                            return `/docsHtml/${QM(MM)}.html`
                          }
                        }, 5251: (MM, rM, iM) => {
                          iM.d(rM, {
                            d: () => SM,
                            h: () => OM,
                            l: () => jM,
                            p: () => nM,
                            r: () => aM
                          });
                          const OM = ["sine", "triangle", "square", "sawtooth"],
                            SM = 55,
                            jM = {
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

                          function aM(MM) {
                            return "string" !== typeof MM ? MM : Object.hasOwn(jM, MM) ? jM[MM] : null
                          }

                          function PM(MM, rM, iM) {
                            return Math.min(iM, Math.max(rM, MM))
                          }

                          function nM(MM) {
                            const rM = PM(MM.durationMs, 10, 500),
                              iM = PM(MM.attackMs, 0, rM),
                              {
                                intonation: SM
                              } = MM;
                            return {
                              waveform: OM.includes(MM.waveform) ? MM.waveform : "sine",
                              pitchHz: PM(MM.pitchHz, 20, 4e3),
                              glideSemitones: PM(MM.glideSemitones, -24, 24),
                              durationMs: rM,
                              attackMs: iM,
                              releaseMs: PM(MM.releaseMs, 0, rM - iM),
                              lowpassHz: null === MM.lowpassHz ? null : PM(MM.lowpassHz, 20, 2e4),
                              volume: PM(MM.volume, 0, 2),
                              intonation: {
                                variationSemitones: PM(SM.variationSemitones, 0, 6),
                                declineSemitones: PM(SM.declineSemitones, 0, 12),
                                questionRiseSemitones: PM(SM.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: PM(SM.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: PM(MM.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const MM in modules) Object.freeze(modules[MM]);