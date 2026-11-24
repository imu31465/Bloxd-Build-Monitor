export const id = 78;
export const ids = [78, 93];
export const modules = {
    4967: (SS, HS, gS) => {
      gS.d(HS, {
        e: () => GS,
        f: () => CS
      });
      var tS = gS(1121),
        bS = gS.n(tS),
        XS = gS(64),
        xS = gS(1281),
        NS = gS(4976),
        qS = gS(2031),
        uS = gS(2537),
        IS = gS(4985),
        fS = gS(1181);
      const kS = new WeakMap;
      let aS = 0;

      function KS(SS) {
        let HS = kS.get(SS);
        return void 0 === HS && (HS = aS++, kS.set(SS, HS)), HS
      }

      function jS(SS) {
        let {
          piece: HS
        } = SS;
        return "space" === HS.kind ? (0, fS.jsx)(fS.Fragment, {
          children: HS.text
        }) : (0, fS.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${HS.delayMs}ms`
          },
          children: (0, fS.jsx)(NS.c, {
            text: "icon" === HS.kind ? `[[${HS.icon}]]` : HS.text
          })
        })
      }

      function GS(SS) {
        let {
          display: HS
        } = SS;
        const {
          selectedLanguage: gS
        } = (0, xS.F)(), tS = (0, XS.useMemo)((() => (0, IS.c)((0, IS.g)(HS).plan.pieces)), [HS, gS.code]);
        return (0, fS.jsxs)("div", {
          className: bS()("Dialogue", {
            DialogueAnimateIn: !1 !== HS.animateIn
          }),
          children: [HS.speakerName && (0, fS.jsx)(qS.c, {
            text: HS.speakerName,
            className: "DialogueSpeaker"
          }), (0, fS.jsx)("p", {
            className: "DialogueLine",
            children: tS.map(((SS, HS) => 1 === SS.length && "space" === SS[0].kind ? SS[0].text : (0, fS.jsx)("span", {
              className: "DialogueGlue",
              children: SS.map(((SS, HS) => (0, fS.jsx)(jS, {
                piece: SS
              }, HS)))
            }, HS)))
          })]
        })
      }
      const CS = (0, XS.memo)((function() {
        const SS = (0, uS.i)("dialogue");
        return (0, fS.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: SS && (0, fS.jsx)(GS, {
            display: SS
          }, KS(SS))
        })
      }))
    },
    4826: (SS, HS, gS) => {
        gS.r(HS), gS.d(HS, {
          default: () => rX
        });
        var tS = gS(64),
          bS = gS(1121),
          XS = gS.n(bS),
          xS = gS(1615),
          NS = gS(1622),
          qS = gS(24),
          uS = gS(77),
          IS = gS(4832),
          fS = gS(4848),
          kS = gS(4855),
          aS = gS(4481),
          KS = gS(1181);
        const jS = "/textures/docs/icons";

        function GS(SS) {
          let {
            name: HS,
            isTinted: gS,
            className: tS,
            style: bS
          } = SS;
          const xS = `${jS}/${HS}.png`;
          return gS ? (0, KS.jsxs)("span", {
            className: XS()("DocsPixelIcon", "Tinted", tS),
            "aria-hidden": "true",
            style: bS,
            children: [(0, KS.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${xS}")`,
                WebkitMaskImage: `url("${xS}")`
              }
            }), (0, KS.jsx)("img", {
              src: xS,
              alt: ""
            })]
          }) : (0, KS.jsx)("img", {
            className: XS()("DocsPixelIcon", tS),
            src: xS,
            alt: "",
            "aria-hidden": "true",
            style: bS
          })
        }
        const CS = 1500;

        function nS() {
          const [SS, HS] = (0, tS.useState)(null);
          (0, tS.useEffect)((() => {
            if (null === SS) return;
            const gS = setTimeout((() => {
              HS(null)
            }), CS);
            return () => {
              clearTimeout(gS)
            }
          }), [SS]);
          return [SS, SS => {
            (0, aS.e)(SS).then((() => {
              HS({
                text: SS,
                failed: !1
              })
            }), (gS => {
              console.error("Could not copy to the clipboard", gS), HS({
                text: SS,
                failed: !0
              })
            }))
          }]
        }

        function PS(SS) {
          let {
            text: HS,
            label: gS,
            className: tS
          } = SS;
          const [bS, xS] = nS(), NS = !1 === (null === bS || void 0 === bS ? void 0 : bS.failed);
          return (0, KS.jsxs)("button", {
            type: "button",
            className: XS()("DocsCopyButton", tS, {
              Copied: NS
            }),
            title: `Copy ${HS.length>40?"to clipboard":HS}`,
            "aria-label": gS ? void 0 : `Copy ${HS}`,
            onClick: SS => {
              SS.stopPropagation(), xS(HS)
            },
            children: [(0, KS.jsx)(GS, {
              name: NS ? "check" : "copy"
            }), gS && (0, KS.jsx)("span", {
              children: NS ? "Copied" : null !== bS && void 0 !== bS && bS.failed ? "Copy failed" : gS
            })]
          })
        }
        IS.d.registerLanguage("javascript", fS.e), IS.d.registerLanguage("typescript", kS.d);
        const QS = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          DS = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          wS = 24;

        function hS(SS) {
          let {
            code: HS,
            lang: gS,
            compact: bS = !1
          } = SS;
          const xS = (0, tS.useMemo)((() => function(SS, HS) {
              const gS = QS[HS];
              return gS ? IS.d.highlight(SS, {
                language: gS
              }).value : SS.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(HS, gS)), [HS, gS]),
            NS = HS.split("\n").length,
            qS = !bS && NS > wS + 6,
            [uS, fS] = (0, tS.useState)(!1),
            kS = QS[gS];
          return (0, KS.jsxs)("div", {
            className: XS()("DocsCodeBlock", {
              Compact: bS,
              Collapsed: qS && !uS
            }),
            children: [!bS && (0, KS.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, KS.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: kS ? DS[kS] : "Text"
              }), (0, KS.jsx)(PS, {
                text: HS,
                label: "Copy"
              })]
            }), (0, KS.jsx)("pre", {
              children: (0, KS.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: xS
                }
              })
            }), qS && (0, KS.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": uS,
              onClick: () => {
                fS(!uS)
              },
              children: [(0, KS.jsx)(GS, {
                name: uS ? "chevron-up" : "chevron-down"
              }), uS ? "Show less" : `Show all ${NS} lines`]
            })]
          })
        }
        var ZS = gS(4859);
        var JS = gS(4867);
        const OS = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function dS(SS) {
          const HS = new Map;
          let gS, tS = [],
            bS = !1;
          const XS = () => {
            gS && HS.set(gS.name, gS.lines.join("\n").trimEnd())
          };
          for (const xS of SS.split("\n")) {
            const SS = xS.match(OS);
            bS || xS.startsWith("/*") ? (bS || (XS(), gS = void 0), tS.push(xS), bS = !xS.includes("*/")) : SS ? (XS(), gS = {
              name: SS[1],
              lines: [...tS, xS]
            }, tS = []) : gS && (xS.startsWith(" ") || xS.startsWith("\t") || /^[}\])|]/.test(xS)) ? gS.lines.push(xS) : gS && "" !== xS.trim() && (XS(), gS = void 0)
          }
          return XS(), HS
        }

        function cS(SS) {
          return "methods" === SS || "callbacks" === SS || "settings" === SS
        }
        const vS = {
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
              setterSnippet: (SS, HS) => `api.setClientOption(playerId, "${SS}", ${HS})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (SS, HS) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${SS}", ${HS})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (SS, HS) => `api.setMobSetting(mobId, "${SS}", ${HS})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (SS, HS) => `api.setVehicleSetting(vehicleId, "${SS}", ${HS})`
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
          ES = {
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

        function LS(SS) {
          return SS.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function YS(SS) {
          let HS = !1;
          return SS.split("\n").map((SS => (SS.startsWith("```") && (HS = !HS), !HS && /^#{3,} /.test(SS) ? SS.slice(1) : SS))).join("\n")
        }

        function AS(SS) {
          return "readme" === SS ? "getting-started" : LS(SS)
        }
        const yS = "## Glossary of Referenced Types";
        const VS = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...JS.d.flatMap((SS => {
            const HS = {
              id: SS.id,
              slug: AS(SS.id),
              title: SS.title,
              markdown: SS.content,
              ...vS[SS.id]
            };
            if ("readme" === SS.id) return function(SS) {
              const HS = SS.markdown.indexOf(yS),
                gS = SS.markdown.indexOf("\n```", HS),
                tS = SS.markdown.indexOf("\n```", gS + 1);
              if (-1 === HS || -1 === gS || -1 === tS) throw new Error(`Getting started has no "${yS}" section with a code block`);
              const bS = SS.markdown.slice(HS + 31, gS).trim(),
                XS = [...dS(SS.markdown.slice(SS.markdown.indexOf("\n", gS + 1) + 1, tS))].map((SS => {
                  let [HS, gS] = SS;
                  return `## ${HS}\n\n\`\`\`ts\n${gS}\n\`\`\`\n`
                })),
                xS = SS.markdown.slice(SS.markdown.indexOf("\n", tS + 1) + 1);
              return [{
                ...SS,
                markdown: `${SS.markdown.slice(0,HS)}${xS}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${bS}\n\n${XS.join("\n")}`
              }]
            }(HS);
            if ("howTo" === SS.id) {
              const {
                parent: SS,
                guides: gS
              } = function(SS) {
                const [HS, ...gS] = SS.markdown.split(/^(?=## )/m), tS = [HS], bS = [];
                for (const xS of gS) {
                  var XS;
                  const HS = xS.indexOf("\n"),
                    gS = xS.slice(3, HS).trim(),
                    NS = xS.slice(HS + 1);
                  if (!NS.includes("```")) {
                    tS.push(xS);
                    continue
                  }
                  const qS = null !== (XS = ES[gS]) && void 0 !== XS ? XS : {
                    icon: "lightbulb",
                    summary: `How to use ${gS.toLowerCase()} in World Code.`
                  };
                  bS.push({
                    id: `${SS.id}${gS.split(/[^A-Za-z0-9]+/).map((SS=>SS.charAt(0).toUpperCase()+SS.slice(1))).join("")}`,
                    slug: `${SS.slug}-${LS(gS)}`,
                    title: gS,
                    layout: "article",
                    sourceAnchor: (0, ZS.r)(gS),
                    markdown: `# ${gS}\n\n${YS(NS)}`,
                    ...qS
                  })
                }
                return {
                  parent: {
                    ...SS,
                    markdown: tS.join(""),
                    childPageIds: bS.map((SS => SS.id))
                  },
                  guides: bS
                }
              }(HS);
              return [SS, ...gS]
            }
            return [HS]
          }))],
          iS = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...VS.filter((SS => void 0 !== SS.sourceAnchor)).map((SS => SS.id))]
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

        function WS(SS) {
          return VS.find((HS => HS.id === SS))
        }
        const zS = new Map;

        function US(SS) {
          let HS = zS.get(SS.id);
          return HS || (HS = (0, ZS.y)(SS.markdown, "changelog" === SS.layout ? 3 : 2), zS.set(SS.id, HS)), HS
        }

        function pS(SS, HS) {
          return US(SS).sections.some((SS => SS.heading.anchor === HS || SS.blocks.some((SS => "heading" === SS.kind && SS.anchor === HS))))
        }

        function sS(SS) {
          const [HS, ...gS] = SS.replace(/^#/, "").split("-"), tS = VS.find((SS => SS.id === HS));
          if (!tS) return null;
          const bS = gS.length > 0 ? (0, ZS.r)(gS.join("-")) : "";
          for (const xS of null !== (XS = tS.childPageIds) && void 0 !== XS ? XS : []) {
            var XS;
            const SS = WS(xS);
            if (SS.sourceAnchor === bS) return {
              page: SS,
              anchor: ""
            };
            if (pS(SS, bS)) return {
              page: SS,
              anchor: bS
            }
          }
          return {
            page: tS,
            anchor: bS
          }
        }
        const BS = {
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

        function MS(SS, HS) {
          let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const tS = HS.slug ? `${SS}/${HS.slug}` : SS;
          return gS ? `${tS}#${gS}` : tS
        }
        var FS = gS(4887);
        const RS = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          TS = new Set(["GameApi", "Console", "_TypeOf"]),
          oS = 4;

        function lS(SS) {
          let HS = SS.length;
          for (; HS > 0 && "" === SS[HS - 1].trim();) HS--;
          return SS.slice(0, HS)
        }

        function mS(SS) {
          var HS;
          const gS = lS(SS);
          if (null === (HS = gS.at(-1)) || void 0 === HS || !HS.trimEnd().endsWith("*/")) return {
            lines: gS,
            doc: ""
          };
          const tS = gS.findLastIndex((SS => SS.startsWith("/**")));
          return -1 === tS ? {
            lines: gS,
            doc: ""
          } : {
            lines: lS(gS.slice(0, tS)),
            doc: gS.slice(tS).join("\n")
          }
        }

        function eS(SS) {
          var HS;
          const gS = SS.split("\n"),
            tS = gS.flatMap(((SS, HS) => RS.test(SS) ? [HS] : []));
          let bS = mS(gS.slice(0, null !== (HS = tS[0]) && void 0 !== HS ? HS : gS.length)).doc;
          return tS.map(((SS, HS) => {
            var XS;
            const xS = mS(gS.slice(SS, null !== (XS = tS[HS + 1]) && void 0 !== XS ? XS : gS.length)),
              NS = {
                name: gS[SS].match(RS)[1],
                doc: bS,
                lines: xS.lines
              };
            return bS = xS.doc, NS
          }))
        }

        function rS(SS) {
          var HS;
          const gS = SS.match(/^readonly \[([\s\S]*)\]$/);
          return gS ? null !== (HS = gS[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== HS ? HS : [] : null
        }

        function SH(SS) {
          if (!SS.startsWith("{") || !SS.endsWith("}")) return null;
          const HS = {
              keys: [],
              values: []
            },
            gS = SS => {
              const gS = SS.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              gS && (HS.keys.push(gS[1].startsWith('"') ? gS[1] : `"${gS[1]}"`), HS.values.push(gS[2].trim()))
            };
          let tS = 0,
            bS = "";
          for (const XS of SS.slice(1, -1)) "{[(".includes(XS) ? tS++ : "}])".includes(XS) && tS--, ";" === XS && 0 === tS ? (gS(bS), bS = "") : bS += XS;
          return gS(bS), HS
        }

        function HH(SS) {
          return SS.length > oS ? `\n\t| ${SS.join("\n\t| ")}` : SS.join(" | ")
        }

        function gH(SS, HS) {
          const gS = function(SS, HS) {
            return SS.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((SS, gS) => {
              var tS;
              const bS = null === (tS = HS.get(gS)) || void 0 === tS ? void 0 : tS.object;
              return bS ? HH(bS.values) : SS
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((SS, gS) => {
              var tS, bS;
              const XS = null === (tS = HS.get(gS)) || void 0 === tS || null === (bS = tS.object) || void 0 === bS ? void 0 : bS.values.map(rS);
              return null !== XS && void 0 !== XS && XS.every((SS => null !== SS)) ? HH([...new Set(XS.flat())]) : SS
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((SS, gS) => {
              var tS;
              const bS = null === (tS = HS.get(gS)) || void 0 === tS ? void 0 : tS.members;
              return bS ? HH(bS) : SS
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((SS, gS) => {
              var tS;
              const bS = null === (tS = HS.get(gS)) || void 0 === tS ? void 0 : tS.object;
              return bS ? HH(bS.keys) : SS
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((SS, gS) => {
              var tS, bS;
              return null !== (tS = null === (bS = HS.get(gS)) || void 0 === bS ? void 0 : bS.text) && void 0 !== tS ? tS : SS
            }))
          }(SS.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), HS);
          return [SS.doc, gS].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function tH(SS) {
          const HS = eS(SS),
            gS = function(SS) {
              const HS = new Map,
                gS = SS.find((SS => "_TypeOf" === SS.name));
              let tS = null;
              const bS = () => {
                if (tS) {
                  const SS = tS.lines.join("\n");
                  HS.set(tS.name, {
                    text: SS,
                    members: rS(SS),
                    object: SH(SS)
                  })
                }
              };
              for (const XS of gS.lines.slice(1, -1)) {
                const SS = XS.match(/^\t([\w$]+): (.+)$/);
                SS ? (bS(), tS = {
                  name: SS[1],
                  lines: [SS[2]]
                }) : tS && tS.lines.push(XS.replace(/^\t/, ""))
              }
              return bS(), HS
            }(HS),
            tS = new Map;
          for (const bS of HS) TS.has(bS.name) || tS.has(bS.name) || tS.set(bS.name, gH(bS, gS));
          return tS
        }
        let bH, XH, xH;

        function NH() {
          return XH ??= function(SS) {
            const HS = eS(SS).find((SS => "GameApi" === SS.name)),
              gS = new Map,
              tS = HS.lines;
            for (let XS = 0; XS < tS.length; XS++) {
              var bS;
              if (!tS[XS].trimStart().startsWith("/**")) continue;
              const SS = XS;
              for (; XS < tS.length && !tS[XS].includes("*/");) XS++;
              const HS = null === (bS = tS[XS + 1]) || void 0 === bS ? void 0 : bS.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!HS) continue;
              let xS = null;
              const NS = [];
              let qS = "description",
                uS = !1;
              for (const gS of tS.slice(SS, XS + 1).join("\n").split("\n").map((SS => SS.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const SS = gS.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                SS ? (xS = SS[1].trim(), qS = "deprecation") : gS.startsWith("@") ? (qS = "otherTag", uS = !0) : "" === gS.trim() ? uS || (qS = "description", NS.push(gS)) : "deprecation" !== qS || /^[A-Z]/.test(gS.trim()) ? "otherTag" !== qS && (qS = "description", NS.push(gS)) : xS = `${xS} ${gS.trim()}`.trim()
              }
              gS.set(HS[1], {
                deprecation: xS,
                description: NS.join("\n").trim()
              })
            }
            return gS
          }(FS.default), XH
        }

        function qH() {
          if (!xH) {
            xH = new Map;
            for (const SS of VS) {
              const HS = (0, ZS.u)(US(SS)).flatMap((SS => SS.blocks));
              for (const SS of (0, ZS.h)(HS))
                if ("ts" === SS.lang || "typescript" === SS.lang)
                  for (const [HS, gS] of dS(SS.code)) xH.set(HS, gS)
            }
            for (const [SS, HS] of(bH ??= tH(FS.default), bH)) xH.has(SS) || xH.set(SS, HS)
          }
          return xH
        }
        const uH = {
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
        let IH;

        function fH() {
          if (!IH) {
            IH = new Map;
            for (const SS of VS)
              if (cS(SS.layout))
                for (const HS of US(SS).sections) IH.has(HS.heading.text) || IH.set(HS.heading.text, {
                  pageId: SS.id,
                  anchor: HS.heading.anchor
                })
          }
          return IH
        }

        function kH(SS) {
          const HS = SS.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return HS ? fH().get(HS[1]) : void 0
        }
        const aH = (0, tS.createContext)("/docs"),
          KH = (0, tS.createContext)(null),
          jH = (0, tS.createContext)(!1),
          GH = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function CH(SS) {
          const HS = SS.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return HS ? HS[1] : null
        }

        function nH(SS) {
          let {
            colour: HS
          } = SS;
          return (0, KS.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: HS
            },
            "aria-hidden": "true"
          })
        }

        function PH(SS) {
          const HS = [];
          let gS = 0;
          for (const tS of SS.matchAll(GH)) HS.push(SS.slice(gS, tS.index), (0, KS.jsx)(nH, {
            colour: tS[0]
          }), tS[0]), gS = tS.index + tS[0].length;
          return HS.push(SS.slice(gS)), HS
        }

        function QH(SS) {
          let {
            href: HS,
            children: gS
          } = SS;
          const bS = (0, tS.useContext)(aH);
          if (HS.startsWith("#")) {
            const SS = sS(HS);
            if (SS) return (0, KS.jsx)(xS.c, {
              to: MS(bS, SS.page, SS.anchor),
              children: (0, KS.jsx)(jH.Provider, {
                value: !0,
                children: gS
              })
            })
          }
          return (0, KS.jsx)("a", {
            href: HS,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, KS.jsx)(jH.Provider, {
              value: !0,
              children: gS
            })
          })
        }

        function DH(SS) {
          let {
            code: HS
          } = SS;
          const gS = (0, tS.useContext)(aH);
          if ((0, tS.useContext)(jH)) return (0, KS.jsx)("code", {
            className: "DocsInlineCode",
            children: HS
          });
          if (qH().has(HS)) return (0, KS.jsx)(JH, {
            type: HS
          });
          const bS = kH(HS);
          if (bS) return (0, KS.jsx)(xS.c, {
            className: "DocsInlineCode DocsSymbolLink",
            to: MS(gS, WS(bS.pageId), bS.anchor),
            children: HS
          });
          const XS = CH(HS);
          return (0, KS.jsxs)("code", {
            className: "DocsInlineCode",
            children: [XS && (0, KS.jsx)(nH, {
              colour: XS
            }), HS]
          })
        }

        function wH(SS) {
          let {
            text: HS
          } = SS;
          const gS = [];
          let bS = 0;
          for (const tS of HS.matchAll(ZS.e)) {
            tS.index > bS && gS.push(...PH(HS.slice(bS, tS.index)));
            const [, SS, XS, xS, NS, qS] = tS;
            SS ? gS.push((0, KS.jsx)(DH, {
              code: (0, ZS.l)(SS, XS)
            })) : xS ? gS.push((0, KS.jsx)("strong", {
              children: (0, KS.jsx)(wH, {
                text: xS
              })
            })) : gS.push((0, KS.jsx)(QH, {
              href: qS,
              children: (0, KS.jsx)(wH, {
                text: NS
              })
            })), bS = tS.index + tS[0].length
          }
          return bS < HS.length && gS.push(...PH(HS.slice(bS))), (0, KS.jsx)(KS.Fragment, {
            children: gS.map(((SS, HS) => (0, KS.jsx)(tS.Fragment, {
              children: SS
            }, HS)))
          })
        }
        const hH = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          ZH = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function JH(SS) {
          let {
            type: HS
          } = SS;
          const gS = qH(),
            bS = [];
          for (const tS of HS.trim().matchAll(hH)) {
            const [SS, HS, XS, xS, NS] = tS;
            HS ? bS.push((0, KS.jsx)("span", {
              className: "DocsTypeString",
              children: SS
            })) : XS && gS.has(XS) ? bS.push((0, KS.jsx)(EH, {
              name: XS,
              definition: gS.get(XS)
            })) : XS ? bS.push((0, KS.jsx)("span", {
              className: ZH.has(XS) ? "DocsTypeKeyword" : "DocsTypeName",
              children: SS
            })) : xS ? bS.push((0, KS.jsx)("span", {
              className: "DocsTypeNumber",
              children: SS
            })) : NS ? bS.push(" ") : bS.push((0, KS.jsx)("span", {
              className: "DocsTypePunctuation",
              children: SS
            }))
          }
          return (0, KS.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: bS.map(((SS, HS) => (0, KS.jsx)(tS.Fragment, {
              children: SS
            }, HS)))
          })
        }
        const OH = 480,
          dH = 6,
          cH = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let vH = 0;

        function EH(SS) {
          let {
            name: HS,
            definition: gS
          } = SS;
          const bS = (0, tS.useContext)(aH),
            XS = uH[HS],
            NS = (0, tS.useRef)(null),
            qS = (0, tS.useRef)(null),
            IS = (0, tS.useRef)(null),
            [fS, kS] = (0, tS.useState)(!1),
            [aS, jS] = (0, tS.useState)(null),
            CS = (0, tS.useRef)(),
            nS = (0, tS.useContext)(KH),
            [PS] = (0, tS.useState)((() => "DocsTypePopover-" + vH++)),
            QS = () => {
              clearTimeout(CS.current), kS(!0)
            },
            DS = () => {
              clearTimeout(CS.current), CS.current = setTimeout((() => {
                kS(!1)
              }), 120)
            };
          return (0, tS.useEffect)((() => {
            if (!fS) return;
            const SS = SS => {
              if ("Escape" === SS.key) {
                var HS, gS;
                if (null !== (HS = qS.current) && void 0 !== HS && HS.contains(document.activeElement)) null === (gS = NS.current) || void 0 === gS || gS.focus();
                kS(!1)
              }
            };
            return document.addEventListener("keydown", SS), () => {
              document.removeEventListener("keydown", SS)
            }
          }), [fS]), (0, tS.useEffect)((() => () => {
            clearTimeout(CS.current)
          }), []), (0, tS.useLayoutEffect)((() => {
            if (!fS || !NS.current || !qS.current) return void jS(null);
            const SS = NS.current.getBoundingClientRect(),
              HS = qS.current.offsetHeight,
              gS = Math.min(OH, window.innerWidth - 32),
              tS = Math.min(Math.max(16, SS.left), window.innerWidth - gS - 16),
              bS = SS.bottom + dH + HS < window.innerHeight;
            jS({
              left: tS,
              top: bS ? SS.bottom + dH : Math.max(16, SS.top - dH - HS)
            })
          }), [fS]), (0, KS.jsxs)(KS.Fragment, {
            children: [(0, KS.jsx)("button", {
              type: "button",
              ref: NS,
              className: "DocsTypeLink",
              "aria-expanded": fS,
              "aria-describedby": fS ? PS : void 0,
              onMouseEnter: QS,
              onMouseLeave: DS,
              onFocus: QS,
              onBlur: DS,
              onKeyDown: SS => {
                "Tab" === SS.key && !SS.shiftKey && IS.current && (SS.preventDefault(), IS.current.focus())
              },
              onClick: QS,
              children: HS
            }), fS && (0, uS.createPortal)((0, KS.jsxs)("span", {
              ref: qS,
              id: PS,
              className: "DocsTypePopover",
              role: "tooltip",
              style: aS ? {
                left: aS.left,
                top: aS.top,
                maxWidth: OH
              } : {
                visibility: "hidden"
              },
              onMouseEnter: QS,
              onMouseLeave: DS,
              onFocus: QS,
              onBlur: DS,
              children: [(0, KS.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, KS.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: HS
                }), XS && (0, KS.jsxs)(xS.c, {
                  ref: IS,
                  className: "DocsTypePopoverLink",
                  to: MS(bS, WS(XS)),
                  onClick: () => {
                    kS(!1)
                  },
                  onKeyDown: SS => {
                    if ("Tab" === SS.key) {
                      var HS;
                      if (SS.preventDefault(), SS.shiftKey || !NS.current || ! function(SS, HS) {
                          const gS = [...document.querySelectorAll(cH)],
                            tS = gS.slice(gS.indexOf(SS) + 1).find((SS => SS.getClientRects().length > 0 && !(null !== HS && void 0 !== HS && HS.contains(SS))));
                          return null === tS || void 0 === tS || tS.focus(), void 0 !== tS
                        }(NS.current, qS.current)) null === (HS = NS.current) || void 0 === HS || HS.focus();
                      SS.shiftKey || kS(!1)
                    }
                  },
                  children: [WS(XS).title, (0, KS.jsx)(GS, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, KS.jsx)(hS, {
                lang: "ts",
                code: gS,
                compact: !0
              })]
            }), null !== nS && void 0 !== nS ? nS : document.body)]
          })
        }
        var LH = gS(198),
          YH = gS(4894),
          AH = gS(4898),
          yH = gS(4904);
        const VH = {
          progressBar: {
            Qg: 30,
            Dg: .075,
            wg: 5,
            hg: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            Og: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            vg: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            Eg: !0,
            scale: 3,
            rotation: 15,
            Lg: !1
          },
          gravityBar: {
            Qg: 30,
            Ag: .25,
            yg: 3,
            Vg: .8,
            gravity: 1,
            ig: 1.5,
            Wg: 8,
            zg: 4,
            hg: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            sg: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            Mg: 5,
            Fg: 1200,
            Rg: .15,
            Tg: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var iH = gS(369),
          WH = gS(2115);

        function zH(SS) {
          return SS.startsWith("fa-")
        }
        const UH = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          pH = {
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

        function sH(SS) {
          return "string" === typeof SS ? "text" : "entityName" in SS || "translationKey" in SS ? "other" : (0, iH.zb)(SS) ? "progressBar" : (0, iH.vb)(SS) ? "keyBinding" : "icon" in SS ? "icon" : "str" in SS && "string" === typeof SS.str ? "text" : "other"
        }
        const BH = [{
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
          MH = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...BH],
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
                options: WH.k
              },
              isRequired: !0
            }, ...BH],
            other: []
          };

        function FH(SS) {
          return "string" === typeof SS ? {
            str: SS
          } : SS
        }

        function RH(SS, HS) {
          let gS = FH(SS);
          for (const tS of HS) gS = gS && "object" === typeof gS ? gS[tS] : void 0;
          return gS
        }

        function TH(SS, HS, gS) {
          const tS = (SS, bS) => {
            var XS;
            const xS = HS[bS],
              NS = {
                ...SS
              };
            if (bS === HS.length - 1) return void 0 === gS ? delete NS[xS] : NS[xS] = gS, NS;
            const qS = tS(null !== (XS = SS[xS]) && void 0 !== XS ? XS : {}, bS + 1);
            return 0 === Object.keys(qS).length ? delete NS[xS] : NS[xS] = qS, NS
          };
          return function(SS) {
            const HS = Object.keys(SS);
            return "string" === typeof SS.str && 1 === HS.length ? SS.str : SS
          }(tS(FH(SS), 0))
        }

        function oH(SS, HS) {
          const gS = sH(SS),
            tS = MH[gS].find((SS => SS.path.join(".") === HS.join("."))),
            bS = null !== tS && void 0 !== tS && tS.isRequired && "other" !== gS ? RH(pH[gS], HS) : void 0;
          return TH(SS, HS, bS)
        }

        function lH(SS) {
          switch (sH(SS)) {
            case "text":
              return String(RH(SS, ["str"]));
            case "icon":
              return String(RH(SS, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(RH(SS,["progress"])))}%`;
            case "keyBinding":
              return String(RH(SS, ["action"]));
            case "other":
              return JSON.stringify(SS)
          }
        }
        const mH = /^[A-Za-z_$][\w$]*$/;

        function eH(SS) {
          if (Array.isArray(SS)) return `[${SS.map(eH).join(", ")}]`;
          if (SS && "object" === typeof SS) {
            const HS = Object.entries(SS).map((SS => {
              let [HS, gS] = SS;
              return `${mH.test(HS)?HS:JSON.stringify(HS)}: ${eH(gS)}`
            }));
            return 0 === HS.length ? "{}" : `{ ${HS.join(", ")} }`
          }
          return JSON.stringify(SS)
        }

        function rH(SS) {
          const HS = SS.map(eH),
            gS = `[${HS.join(", ")}]`;
          return gS.length <= 60 ? gS : `[\n${HS.map((SS=>`    ${SS},`)).join("\n")}\n]`
        }
        const Sg = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function Hg(SS) {
          let HS = "";
          for (let bS = 0; bS < SS.length; bS++) {
            const XS = SS[bS];
            if ("\\" === XS) {
              var gS;
              const tS = null !== (gS = SS[bS + 1]) && void 0 !== gS ? gS : "";
              HS += "'" === tS ? "'" : XS + tS, bS++
            } else if ('"' === XS) HS += '\\"';
            else {
              var tS;
              HS += null !== (tS = Sg[XS]) && void 0 !== tS ? tS : XS
            }
          }
          return `"${HS}"`
        }

        function gg(SS) {
          if ("string" === typeof SS) return !0;
          if (!SS || "object" !== typeof SS || Array.isArray(SS)) return !1;
          const HS = SS;
          return "ProgressBar" === HS.type ? "number" === typeof HS.progress : "StyledKeyBinding" === HS.type ? WH.k.includes(HS.action) : "string" === typeof HS.icon || "string" === typeof HS.str || "string" === typeof HS.entityName || "string" === typeof HS.translationKey
        }

        function tg(SS) {
          let HS;
          try {
            HS = function(SS) {
              let HS = "",
                gS = "",
                tS = 0;
              const bS = () => {
                HS += gS.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), gS = ""
              };
              for (; tS < SS.length;) {
                const XS = SS.slice(tS).search(/["'`]|\/\//);
                if (-1 === XS) {
                  gS += SS.slice(tS);
                  break
                }
                gS += SS.slice(tS, tS + XS);
                const xS = tS + XS,
                  NS = SS[xS];
                if ("/" === NS) {
                  const HS = SS.indexOf("\n", xS);
                  tS = -1 === HS ? SS.length : HS;
                  continue
                }
                if (bS(), "`" === NS) throw new Error("Use quotes rather than template strings.");
                let qS = xS + 1;
                for (; qS < SS.length && SS[qS] !== NS;) qS += "\\" === SS[qS] ? 2 : 1;
                if (qS >= SS.length) throw new Error("A string is missing its closing quote.");
                const uS = SS.slice(xS + 1, qS);
                HS += Hg(uS), tS = qS + 1
              }
              return bS(), JSON.parse(HS)
            }(SS.trim())
          } catch (tS) {
            return {
              parts: null,
              error: tS instanceof SyntaxError ? "This isn't a valid array yet." : tS.message
            }
          }
          if (!Array.isArray(HS)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const gS = HS.findIndex((SS => !gg(SS)));
          return -1 !== gS ? {
            parts: null,
            error: `Part ${gS+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: HS,
            error: null
          }
        }
        const bg = 1 / LH.e.clientTicksPerSecond,
          Xg = 700,
          xg = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          Ng = {
            progressBar: VH.progressBar.Og,
            timedClick: VH.timedClick.icon,
            gravityBar: VH.gravityBar.icon,
            precisionBar: VH.precisionBar.icon,
            rhythmClick: VH.rhythmClick.icon
          };

        function qg(SS) {
          let {
            type: HS
          } = SS;
          const [gS, bS] = (0, tS.useState)("ready"), [xS, NS] = (0, tS.useState)(1), [qS, uS] = (0, tS.useState)(!0), IS = (0, tS.useRef)(null), fS = (0, tS.useRef)(null), kS = (0, tS.useRef)(null), aS = (0, tS.useRef)(new Set), jS = (0, tS.useRef)(!1), CS = Ng[HS], nS = (0, tS.useMemo)((() => ({
            getState: () => {
              var SS, HS;
              return null !== (SS = null === (HS = kS.current) || void 0 === HS ? void 0 : HS.getState()) && void 0 !== SS ? SS : xg
            },
            onFrame: SS => (aS.current.add(SS), () => {
              aS.current.delete(SS)
            })
          })), []);
          (0, tS.useEffect)((() => {
            const SS = IS.current,
              HS = fS.current;
            if (!SS || !HS) return;
            const gS = new ResizeObserver((() => {
              NS(SS.clientWidth / Math.max(1, HS.offsetWidth))
            }));
            return gS.observe(SS), () => {
              gS.disconnect()
            }
          }), []), (0, tS.useEffect)((() => {
            var SS;
            if ("playing" !== gS) return;
            let tS = !1;
            const XS = new yH.f[HS](VH[HS], (SS => {
              tS = !0, uS(!1), bS(SS ? "succeeded" : "failed")
            }), (() => {}));
            kS.current = XS;
            let xS = 0,
              NS = performance.now(),
              qS = requestAnimationFrame((function SS(HS) {
                for (xS += Math.min(.25, (HS - NS) / 1e3), NS = HS; xS >= bg && !tS;) xS -= bg, XS.handleTick(bg);
                for (const gS of aS.current) gS();
                tS || (qS = requestAnimationFrame(SS))
              }));
            return null === (SS = IS.current) || void 0 === SS || SS.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(qS), XS.tearDown(), kS.current = null, jS.current = !1
            }
          }), [gS, HS]), (0, tS.useEffect)((() => {
            if (qS) return;
            const SS = setTimeout((() => {
              uS(!0)
            }), Xg);
            return () => {
              clearTimeout(SS)
            }
          }), [qS]);
          const PS = SS => {
            var HS;
            "playing" === gS && jS.current !== SS && (jS.current = SS, null === (HS = kS.current) || void 0 === HS || HS.handleMouseInput(SS))
          };
          return (0, KS.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, KS.jsxs)("div", {
              ref: IS,
              className: XS()("DocsQteStage", {
                Playing: "playing" === gS
              }),
              tabIndex: "playing" === gS ? 0 : -1,
              role: "playing" === gS ? "button" : void 0,
              "aria-label": "playing" === gS ? `${HS} quick time event: click or press Space` : void 0,
              onPointerDown: SS => {
                0 === SS.button && PS(!0)
              },
              onPointerUp: () => {
                PS(!1)
              },
              onPointerLeave: () => {
                PS(!1)
              },
              onPointerCancel: () => {
                PS(!1)
              },
              onKeyDown: SS => {
                "playing" !== gS || " " !== SS.key && "Enter" !== SS.key || (SS.preventDefault(), PS(!0))
              },
              onKeyUp: SS => {
                "playing" !== gS || " " !== SS.key && "Enter" !== SS.key || PS(!1)
              },
              children: [(0, KS.jsx)("div", {
                ref: fS,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${xS})`
                },
                children: "playing" === gS && (0, KS.jsx)(AH.c.Provider, {
                  value: nS,
                  children: (0, KS.jsx)(YH.d, {
                    qte: {
                      type: HS,
                      parameters: VH[HS]
                    }
                  })
                })
              }), "playing" !== gS && (0, KS.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== gS && (0, KS.jsxs)("div", {
                  className: XS()("DocsQteResult", "succeeded" === gS ? "Succeeded" : "Failed"),
                  children: [(0, KS.jsx)(GS, {
                    name: "succeeded" === gS ? "check" : "cross",
                    isTinted: !0
                  }), (0, KS.jsx)("span", {
                    children: "succeeded" === gS ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, KS.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !qS,
                  onClick: () => {
                    bS("playing")
                  },
                  children: [(0, KS.jsx)(GS, {
                    name: "ready" === gS ? "play" : "replay"
                  }), (0, KS.jsx)("span", {
                    children: "ready" === gS ? `Try ${HS}` : "Play again"
                  })]
                })]
              })]
            }), CS && !zH(CS) && (0, KS.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, KS.jsx)("code", {
                children: CS
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function ug(SS) {
          let {
            level: HS,
            text: gS,
            anchor: tS,
            className: bS
          } = SS;
          const xS = `h${Math.min(HS,6)}`;
          return (0, KS.jsxs)(xS, {
                id: tS,
                className: XS()("DocsHeading", bS),
                children: [(0, KS.jsx)(wH, {
                      text: gS
                    }), (0, KS.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${tS}`,
                        "aria-label": `Link to ${gS.replace(/`/g,"")}`,children:"#"})]})}function Ig(SS){let{items:HS,ordered:gS}=SS;const tS=gS?"ol":"ul";return(0,KS.jsx)(tS,{className:"DocsList",children:HS.map(((SS,HS)=>(0,KS.jsxs)("li",{children:[(0,KS.jsx)(wH,{text:SS.text}),SS.children.length>0&&(0,KS.jsx)(Ig,{items:SS.children,ordered:gS})]},HS)))})}function fg(SS){const HS=SS[0],gS="paragraph"===(null===HS||void 0===HS?void 0:HS.kind)?HS.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(gS)?"warning":/^\*\*(tip|prefer)/.test(gS)?"tip":"note"}function kg(SS){let{block:HS}=SS;switch(HS.kind){case"heading":return(0,KS.jsx)(ug,{level:HS.level,text:HS.text,anchor:HS.anchor});case"paragraph":return(0,KS.jsx)("p",{children:(0,KS.jsx)(wH,{text:HS.text})});case"code":{const SS="ts"===HS.lang?function(SS){const HS=SS.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return HS&&Object.hasOwn(VH,HS[1])?HS[1]:null}(HS.code):null;return(0,KS.jsxs)(KS.Fragment,{children:[(0,KS.jsx)(hS,{code:HS.code,lang:HS.lang}),SS&&(0,KS.jsx)(qg,{type:SS})]})}case"table":return(0,KS.jsx)("div",{className:"DocsTableScroll",children:(0,KS.jsxs)("table",{className:"DocsTable",children:[(0,KS.jsx)("thead",{children:(0,KS.jsx)("tr",{children:HS.header.map(((SS,HS)=>(0,KS.jsx)("th",{children:(0,KS.jsx)(wH,{text:SS})},HS)))})}),(0,KS.jsx)("tbody",{children:HS.rows.map(((SS,HS)=>(0,KS.jsx)("tr",{children:SS.map(((SS,HS)=>(0,KS.jsx)("td",{children:(0,KS.jsx)(wH,{text:SS})},HS)))},HS)))})]})});case"list":return(0,KS.jsx)(Ig,{items:HS.items,ordered:HS.ordered});case"quote":return(0,KS.jsx)("aside",{className:XS()("DocsCallout",fg(HS.blocks)),children:(0,KS.jsx)(ag,{blocks:HS.blocks})});case"rule":return(0,KS.jsx)("hr",{className:"DocsRule"})}}function ag(SS){let{blocks:HS}=SS;return(0,KS.jsx)(KS.Fragment,{children:HS.map(((SS,HS)=>(0,KS.jsx)(kg,{block:SS},HS)))})}var Kg=gS(4874),jg=gS(4879);function Gg(SS){return"blocks"===SS||"items"===SS}const Cg=new Map;function ng(SS){let HS=Cg.get(SS);return HS||(HS=function(SS){const HS={entries:[],legend:[],notes:[],examples:[]};let gS=!1;for(const XS of SS.split(/\r?\n/).slice(1)){if(XS.startsWith("#")){const SS=XS.replace(/^# ?/,""),tS=SS.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);tS?HS.legend.push({code:tS[1],meaning:tS[2],usage:tS[3].trim()}):/^Examples:/.test(SS.trim())?gS=!0:gS&&SS.trim()?HS.examples.push(SS.trim()):SS.trim()&&!/^\s/.test(SS)&&HS.notes.push(SS.trim());continue}const SS=XS.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var tS,bS;SS&&HS.entries.push({name:SS[1],variants:null!==(tS=null===(bS=SS[2])||void 0===bS?void 0:bS.split(","))&&void 0!==tS?tS:[]})}return HS}("blocks"===SS?Kg:jg),Cg.set(SS,HS)),HS}function Pg(SS){let{className:HS,value:gS,placeholder:tS,label:bS,onChange:XS,count:xS,children:NS}=SS;return(0,KS.jsxs)("div",{className:HS,children:[(0,KS.jsx)(GS,{name:"magnifying-glass"}),(0,KS.jsx)("input",{type:"search",value:gS,placeholder:tS,"aria-label":bS,onChange:SS=>{XS(SS.target.value)}}),NS,xS&&(0,KS.jsxs)("span",{className:"DocsFilterCount",children:[xS.visible," of ",xS.total]})]})}var Qg=gS(1127);function Dg(SS){const HS=SS.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return HS?HS[2]:null}function wg(SS){return"paragraph"===SS.kind&&""===SS.text.trim()}function hg(SS){const HS={name:SS.heading.text,description:[],params:[],returns:null};let gS="description";for(const bS of SS.blocks)if(!wg(bS))if("heading"===bS.kind&&/^Parameters:?$/.test(bS.text))gS="params";else if("heading"===bS.kind&&/^Returns:?$/.test(bS.text))gS="returns",HS.returns={type:"",description:[]};else if("params"!==gS||"table"!==bS.kind){if("returns"===gS&&"paragraph"===bS.kind&&""===HS.returns.type){const SS=Dg(bS.text);if(null!==SS){HS.returns.type=SS.replaceAll("\\|","|");continue}}"returns"===gS?HS.returns.description.push(bS):HS.description.push(bS)}else for(const[SS,gS,XS]of bS.rows){var tS;HS.params.push({name:SS,type:null!==(tS=Dg(gS))&&void 0!==tS?tS:gS,description:null!==XS&&void 0!==XS?XS:""})}return HS}const Zg=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function Jg(SS){return SS.filter((SS=>!wg(SS)))}const Og=/^[\w][\w .'&!:()-]*$/,dg=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function cg(SS){var HS;if("code"===SS.kind&&"text"===SS.lang){const HS=SS.code.split("\n").map((SS=>SS.trim())).filter(Boolean);return HS.length>0&&HS.every((SS=>Og.test(SS)))?HS.map((SS=>({name:SS}))):null}return"paragraph"===SS.kind&&dg.test(SS.text.trim())?[...SS.text.matchAll(/`([ ^ `]+)` / g)].flatMap((SS => SS[1].split(/,\s*/).map((SS => ({
                              name: SS.trim()
                            }))))): "table" === SS.kind && null !== (HS = SS.header[0]) && void 0 !== HS && HS.startsWith("Song") ? SS.rows.map((SS => {
                              let [HS, gS] = SS;
                              return {
                                name: HS.replace(/`/g, ""),
                                caption: gS
                              }
                            })) : null
                          }

                          function vg(SS) {
                            const HS = [];
                            for (const gS of SS) {
                              const SS = cg(gS),
                                tS = HS.at(-1),
                                bS = "table" === gS.kind;
                              SS ? "names" === (null === tS || void 0 === tS ? void 0 : tS.kind) && tS.isSongs === bS ? tS.names.push(...SS) : HS.push({
                                kind: "names",
                                names: SS,
                                isSongs: bS
                              }) : HS.push({
                                kind: "block",
                                block: gS
                              })
                            }
                            return HS
                          }
                          const Eg = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function Lg(SS, HS) {
                            return `${Eg[SS]}-${(0,ZS.r)(HS)}`
                          }
                          const Yg = new WeakMap;

                          function Ag(SS, HS, gS) {
                            let tS = Yg.get(HS);
                            if (!tS) {
                              tS = new Map;
                              const gS = new Set;
                              for (const bS of (0, ZS.u)(HS)) {
                                const HS = vg(Jg(bS.blocks)).map((HS => {
                                  if ("block" === HS.kind) return HS;
                                  return {
                                    kind: "names",
                                    names: HS.names.map((HS => {
                                      var tS, XS;
                                      const xS = Lg(SS, HS.name);
                                      let NS = xS;
                                      for (let SS = 2; gS.has(NS); SS++) NS = `${xS}-${SS}`;
                                      return gS.add(NS), {
                                        ...HS,
                                        anchor: NS,
                                        heading: null !== (tS = null === (XS = bS.heading) || void 0 === XS ? void 0 : XS.text) && void 0 !== tS ? tS : ""
                                      }
                                    })),
                                    isSongs: HS.isSongs
                                  }
                                }));
                                tS.set(bS.blocks, HS)
                              }
                              Yg.set(HS, tS)
                            }
                            const bS = tS.get(gS);
                            if (!bS) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return bS
                          }
                          const yg = "/textures/docs/skinPreviews",
                            Vg = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var ig = gS(4346),
                            Wg = gS(4356);

                          function zg(SS) {
                            return Object.hasOwn(ig.g, SS) ? ig.g[SS] : null
                          }
                          const Ug = {
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
                            blendMode: Wg.g.Standard
                          };

                          function pg(SS, HS, gS) {
                            return HS + (gS - HS) * SS()
                          }

                          function sg(SS, HS, gS) {
                            return SS + (HS - SS) * gS
                          }

                          function Bg(SS) {
                            return SS.length > 0 && "timeFraction" in SS[0]
                          }

                          function Mg(SS, HS) {
                            if (0 === SS.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!Bg(SS.colorGradients)) {
                              const gS = SS.colorGradients,
                                {
                                  color: tS
                                } = gS[Math.floor(HS() * gS.length) % gS.length];
                              return [{
                                at: 0,
                                colour: [tS[0] / 255, tS[1] / 255, tS[2] / 255, 1]
                              }]
                            }
                            return [...SS.colorGradients].sort(((SS, HS) => SS.timeFraction - HS.timeFraction)).map((SS => {
                              var gS, tS, bS;
                              const XS = SS.minColor,
                                xS = null !== (gS = SS.maxColor) && void 0 !== gS ? gS : XS,
                                NS = HS(),
                                qS = [sg(XS[0], xS[0], NS) / 255, sg(XS[1], xS[1], NS) / 255, sg(XS[2], xS[2], NS) / 255, sg(null !== (tS = XS[3]) && void 0 !== tS ? tS : 1, null !== (bS = xS[3]) && void 0 !== bS ? bS : 1, NS)];
                              return {
                                at: SS.timeFraction,
                                colour: qS
                              }
                            }))
                          }

                          function Fg(SS, HS, gS, tS) {
                            const bS = pg(tS, SS.minEmitPower, SS.maxEmitPower),
                              XS = HS => pg(tS, Math.min(SS.dir1[HS], SS.dir2[HS]), Math.max(SS.dir1[HS], SS.dir2[HS])) * bS,
                              xS = [...SS.velocityGradients].sort(((SS, HS) => SS.timeFraction - HS.timeFraction)).map((SS => ({
                                at: SS.timeFraction,
                                factor: pg(tS, SS.factor, SS.factor2)
                              })));
                            return {
                              pos: [pg(tS, HS[0], gS[0]), pg(tS, HS[1], gS[1]), pg(tS, HS[2], gS[2])],
                              dir: [XS(0), XS(1), XS(2)],
                              age: 0,
                              life: pg(tS, SS.minLifeTime, SS.maxLifeTime),
                              size: pg(tS, SS.minSize, SS.maxSize),
                              colours: Mg(SS, tS),
                              velocityFactors: xS
                            }
                          }

                          function Rg(SS, HS, gS, tS) {
                            if (HS < SS[0].at) return gS(Math.min(1, SS.length - 1));
                            for (let bS = 0; bS < SS.length - 1; bS++)
                              if (HS <= SS[bS + 1].at) {
                                const XS = SS[bS + 1].at - SS[bS].at;
                                return tS(gS(bS), gS(bS + 1), XS > 0 ? (HS - SS[bS].at) / XS : 1)
                              } return gS(SS.length - 1)
                          }

                          function Tg(SS) {
                            return Rg(SS.colours, SS.age / SS.life, (HS => SS.colours[HS].colour), ((SS, HS, gS) => [sg(SS[0], HS[0], gS), sg(SS[1], HS[1], gS), sg(SS[2], HS[2], gS), sg(SS[3], HS[3], gS)]))
                          }

                          function og(SS, HS, gS) {
                            if (SS.age += gS, SS.age >= SS.life) return !1;
                            const tS = function(SS) {
                              return 0 === SS.velocityFactors.length ? 1 : Rg(SS.velocityFactors, SS.age / SS.life, (HS => SS.velocityFactors[HS].factor), sg)
                            }(SS) * gS;
                            for (let XS = 0; XS < 3; XS++) {
                              var bS;
                              SS.pos[XS] += SS.dir[XS] * tS, SS.dir[XS] += (null !== (bS = HS[XS]) && void 0 !== bS ? bS : 0) * gS
                            }
                            return !0
                          }

                          function lg(SS) {
                            return String(Math.round(1e6 * SS) / 1e6)
                          }

                          function mg(SS) {
                            return `[${SS.map(lg).join(", ")}]`
                          }

                          function eg(SS, HS) {
                            const gS = `${HS}    `;
                            return `[\n${(Bg(SS)?SS.map((SS=>{const HS=[`${gS}    timeFraction: ${lg(SS.timeFraction)},`,`${gS}    minColor: ${mg(SS.minColor)},`];return SS.maxColor&&HS.push(`${gS}    maxColor: ${mg(SS.maxColor)},`),`${gS}{\n${HS.join("\n")}\n${gS}},`})):SS.map((SS=>`
                            $ {
                              gS
                            } {
                              color: $ {
                                mg(SS.color)
                              }
                            }, `))).join("\n")}\n${HS}]`
                          }
                          const rg = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            St = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const Ht = .6;

                          function gt(SS, HS) {
                            return `${HS?"song":"sound"}:${SS}`
                          }
                          let tt = {
                              track: null,
                              volume: Ht
                            },
                            bt = null,
                            Xt = 0,
                            xt = 0;
                          const Nt = new Set;

                          function qt(SS) {
                            tt = {
                              ...tt,
                              ...SS
                            }, Nt.forEach((SS => {
                              SS()
                            }))
                          }

                          function ut(SS) {
                            tt.track && qt({
                              track: {
                                ...tt.track,
                                ...SS
                              }
                            })
                          }

                          function It(SS) {
                            const [HS, gS] = (0, tS.useState)((() => SS(tt))), bS = (0, tS.useRef)(SS);
                            return bS.current = SS, (0, tS.useEffect)((() => {
                              const SS = () => {
                                gS((() => bS.current(tt)))
                              };
                              return Nt.add(SS), SS(), () => {
                                Nt.delete(SS)
                              }
                            }), []), HS
                          }

                          function ft() {
                            Xt++;
                            const SS = bt;
                            bt = null, null === SS || void 0 === SS || SS.stop()
                          }

                          function kt(SS, HS) {
                            let tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            ft();
                            const bS = Xt,
                              {
                                track: XS
                              } = tt,
                              xS = XS && XS.name === SS && XS.isSong === HS ? XS.duration : 0;
                            xt = tS, qt({
                              track: {
                                name: SS,
                                isSong: HS,
                                status: "loading",
                                duration: xS
                              }
                            }), Promise.all([gS.e(222), gS.e(249)]).then((() => gS(39847))).then((gS => {
                              let {
                                playDocsSound: XS
                              } = gS;
                              bS === Xt && (bt = XS(SS, HS, tt.volume, tS, {
                                onPlay: SS => {
                                  bS === Xt && ut({
                                    status: "playing",
                                    duration: SS
                                  })
                                },
                                onEnd: SS => {
                                  var HS, gS;
                                  bS === Xt && (bt = null, SS ? qt({
                                    track: null
                                  }) : (xt = null !== (HS = null === (gS = tt.track) || void 0 === gS ? void 0 : gS.duration) && void 0 !== HS ? HS : 0, ut({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((HS => {
                              console.error(`Could not play docs sound ${SS}`, HS), bS === Xt && qt({
                                track: null
                              })
                            }))
                          }

                          function Kt() {
                            const {
                              track: SS
                            } = tt;
                            if (!SS) return;
                            if ("playing" === SS.status && bt) return xt = bt.lC(), bt.pause(), void ut({
                              status: "paused"
                            });
                            if ("loading" === SS.status) return ft(), void ut({
                              status: "paused"
                            });
                            if (bt) return void bt.resume();
                            const HS = SS.duration > 0 && xt >= SS.duration - .05;
                            kt(SS.name, SS.isSong, HS ? 0 : xt)
                          }

                          function jt() {
                            var SS;
                            return bt && "playing" === (null === (SS = tt.track) || void 0 === SS ? void 0 : SS.status) ? bt.lC() : xt
                          }

                          function Gt(SS) {
                            var HS;
                            null === (HS = bt) || void 0 === HS || HS.setVolume(SS), qt({
                              volume: SS
                            })
                          }

                          function Ct() {
                            ft(), xt = 0, qt({
                              track: null
                            })
                          }
                          const nt = (0, tS.createContext)(null);
                          let Pt = null;

                          function Qt() {
                            const [SS, HS] = (0, tS.useState)(null);
                            return (0, tS.useEffect)((() => {
                              let SS = !1;
                              return Pt ??= Promise.all([gS.e(72), gS.e(75), gS.e(74), gS.e(73), gS.e(186), gS.e(98), gS.e(226)]).then((() => gS(39839))), Pt.then((gS => {
                                SS || HS(gS)
                              }), (SS => {
                                console.error("Could not load the docs gallery's textures", SS), Pt = null
                              })), () => {
                                SS = !0
                              }
                            }), []), SS
                          }
                          const Dt = 24,
                            wt = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function ht(SS, HS) {
                            const gS = "skins" === SS ? function(SS, HS) {
                              const gS = Vg.find((HS => SS.startsWith(HS.heading)));
                              return gS ? function(SS, HS) {
                                return `${SS}-${HS}`
                              }(gS.prefix, HS) : null
                            }(HS.heading, HS.name) : null;
                            return null === gS ? null : `${yg}/${gS}.webp`
                          }

                          function Zt(SS) {
                            let {
                              kind: HS,
                              entry: gS,
                              assets: bS,
                              renderedUrl: xS
                            } = SS;
                            const {
                              name: NS
                            } = gS, [qS, uS] = (0, tS.useState)(!1);
                            if ("icons" === HS && zH(NS)) return (0, KS.jsx)(Qg.d, {
                              className: "DocsTileIcon",
                              name: NS
                            });
                            let IS = null;
                            var fS;
                            if ("icons" === HS) IS = null !== (fS = null === bS || void 0 === bS ? void 0 : bS.getIngameIconUrl(NS)) && void 0 !== fS ? fS : null;
                            else if ("particles" === HS) {
                              var kS, aS, jS;
                              IS = null !== (kS = null === bS || void 0 === bS ? void 0 : bS.getParticleTextureUrl(null !== (aS = null === (jS = zg(NS)) || void 0 === jS ? void 0 : jS.texture) && void 0 !== aS ? aS : NS)) && void 0 !== kS ? kS : null
                            } else "skins" === HS && (IS = null !== xS && void 0 !== xS ? xS : wt.test(NS) ? `/textures/charSkins/previews/${NS}_preview.png` : null);
                            return !IS || qS ? (0, KS.jsx)(GS, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === HS ? "person" : "image"
                            }) : (0, KS.jsx)("img", {
                              className: XS()("DocsTileImage", {
                                Pixelated: "skins" !== HS
                              }),
                              src: IS,
                              srcSet: IS === xS ? `${IS} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${IS}`), uS(!0)
                              }
                            })
                          }

                          function Jt(SS) {
                            let {
                              entry: HS,
                              isSong: gS
                            } = SS;
                            const tS = It((SS => {
                                let {
                                  track: tS
                                } = SS;
                                return (null === tS || void 0 === tS ? void 0 : tS.name) === HS.name && tS.isSong === gS ? tS.status : null
                              })),
                              bS = null !== tS && "paused" !== tS;
                            return (0, KS.jsxs)("button", {
                              type: "button",
                              id: HS.anchor,
                              className: XS()("DocsSoundTile", {
                                Playing: bS
                              }),
                              "data-docs-track": gt(HS.name, gS),
                              "aria-label": bS ? `Pause ${HS.name}` : `Play ${HS.name}`,
                              onClick: () => {
                                null !== tS ? Kt() : kt(HS.name, gS)
                              },
                              children: [(0, KS.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, KS.jsx)(GS, {
                                  name: bS ? "pause" : "play"
                                })
                              }), (0, KS.jsx)("code", {
                                className: "DocsSoundName",
                                children: HS.name
                              }), HS.caption && (0, KS.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: HS.caption
                              })]
                            })
                          }

                          function Ot(SS) {
                            let {
                              kind: HS,
                              names: gS,
                              isSongs: bS
                            } = SS;
                            const xS = Qt(),
                              [NS, qS] = nS(),
                              uS = !1 === (null === NS || void 0 === NS ? void 0 : NS.failed) ? NS.text : null,
                              IS = (0, tS.useContext)(nt),
                              [fS, kS] = (0, tS.useState)(""),
                              aS = fS.trim().toLowerCase(),
                              jS = aS ? gS.filter((SS => SS.name.toLowerCase().includes(aS))) : gS;
                            return (0, KS.jsxs)("div", {
                              className: "DocsGallery",
                              children: [gS.length > Dt && (0, KS.jsx)(Pg, {
                                className: "DocsGalleryFilter",
                                value: fS,
                                placeholder: `Filter ${gS.length} names\u2026`,
                                label: "Filter names",
                                onChange: kS,
                                count: aS ? {
                                  visible: jS.length,
                                  total: gS.length
                                } : null
                              }), (0, KS.jsx)("div", {
                                className: XS()("DocsGalleryGrid", `Kind-${HS}`, {
                                  Songs: bS
                                }),
                                children: jS.map((SS => {
                                  if ("sounds" === HS) return (0, KS.jsx)(Jt, {
                                    entry: SS,
                                    isSong: bS
                                  }, SS.anchor);
                                  if (IS && "particles" === HS && zg(SS.name)) return (0, KS.jsxs)("button", {
                                    type: "button",
                                    id: SS.anchor,
                                    className: XS()("DocsTile Previewable", {
                                      Copied: uS === SS.name
                                    }),
                                    title: `Play "${SS.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      IS(SS.name), qS(SS.name)
                                    },
                                    children: [(0, KS.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, KS.jsx)(Zt, {
                                        kind: HS,
                                        entry: SS,
                                        assets: xS,
                                        renderedUrl: null
                                      }), (0, KS.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, KS.jsx)(GS, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, KS.jsx)("span", {
                                      className: "DocsTileName",
                                      children: uS === SS.name ? "Copied!" : SS.name
                                    })]
                                  }, SS.anchor);
                                  const gS = ht(HS, SS);
                                  return (0, KS.jsxs)("button", {
                                    type: "button",
                                    id: SS.anchor,
                                    className: XS()("DocsTile", {
                                      Copied: uS === SS.name
                                    }),
                                    title: `Copy "${SS.name}"`,
                                    onClick: () => {
                                      qS(SS.name)
                                    },
                                    children: [(0, KS.jsx)("span", {
                                      className: XS()("DocsTilePreview", {
                                        Rendered: null !== gS
                                      }),
                                      children: (0, KS.jsx)(Zt, {
                                        kind: HS,
                                        entry: SS,
                                        assets: xS,
                                        renderedUrl: gS
                                      })
                                    }), (0, KS.jsx)("span", {
                                      className: "DocsTileName",
                                      children: uS === SS.name ? "Copied!" : SS.name
                                    })]
                                  }, SS.anchor)
                                }))
                              })]
                            })
                          }

                          function dt(SS) {
                            let {
                              kind: HS,
                              content: gS,
                              blocks: tS
                            } = SS;
                            return (0, KS.jsx)(KS.Fragment, {
                              children: Ag(HS, gS, tS).map(((SS, gS) => "block" === SS.kind ? (0, KS.jsx)(kg, {
                                block: SS.block
                              }, gS) : (0, KS.jsx)(Ot, {
                                kind: HS,
                                names: SS.names,
                                isSongs: SS.isSongs
                              }, gS)))
                            })
                          }
                          const ct = [{
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

                          function vt(SS) {
                            let {
                              cards: HS = ct,
                              label: gS = "Start here"
                            } = SS;
                            const bS = (0, tS.useContext)(aH);
                            return (0, KS.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": gS,
                              children: HS.map((SS => {
                                let {
                                  pageId: HS,
                                  countNoun: gS
                                } = SS;
                                const tS = WS(HS);
                                return (0, KS.jsxs)(xS.c, {
                                  to: MS(bS, tS),
                                  className: "DocsLandingCard",
                                  children: [(0, KS.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, KS.jsx)(GS, {
                                      name: tS.icon
                                    })
                                  }), (0, KS.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: tS.title
                                  }), (0, KS.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: tS.summary
                                  }), gS && (0, KS.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [US(tS).sections.length, " ", gS]
                                  })]
                                }, HS)
                              }))
                            })
                          }
                          const Et = 240;

                          function Lt(SS) {
                            let {
                              faces: HS
                            } = SS;
                            return (0, KS.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, KS.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${HS.top}")`
                                }
                              }), (0, KS.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${HS.left}")`
                                }
                              }), (0, KS.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${HS.right}")`
                                }
                              })]
                            })
                          }

                          function Yt(SS) {
                            let {
                              src: HS
                            } = SS;
                            const [gS, bS] = (0, tS.useState)(!1);
                            return gS ? null : (0, KS.jsx)("img", {
                              src: HS,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${HS}`), bS(!0)
                              }
                            })
                          }

                          function At(SS) {
                            let {
                              kind: HS
                            } = SS;
                            const gS = ng(HS),
                              bS = Qt(),
                              xS = (0, NS.t)(),
                              [qS, uS] = (0, tS.useState)(""),
                              [IS, fS] = (0, tS.useState)(null),
                              [kS, aS] = (0, tS.useState)(Et),
                              [jS, CS] = (0, tS.useState)(null),
                              nS = (0, tS.useRef)(null),
                              QS = qS.trim().toLowerCase();
                            (0, tS.useEffect)((() => {
                              const SS = (0, ZS.n)(xS.hash),
                                tS = gS.entries.find((gS => Lg(HS, gS.name) === SS));
                              if (tS) nS.current = tS.name, uS(tS.name), fS(null), CS(tS.name);
                              else if (null !== nS.current) {
                                const SS = nS.current;
                                nS.current = null, uS((HS => HS === SS ? "" : HS)), CS(null)
                              }
                            }), [gS, HS, xS.hash, xS.key]), (0, tS.useEffect)((() => {
                              var SS;
                              null !== jS && (null === (SS = document.getElementById(Lg(HS, jS))) || void 0 === SS || SS.scrollIntoView({
                                block: "center"
                              }))
                            }), [HS, jS]);
                            const DS = gS.entries.filter((SS => (!QS || SS.name.toLowerCase().includes(QS)) && (!IS || SS.variants.includes(IS))));
                            return (0, KS.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [gS.notes.length > 0 && (0, KS.jsx)("div", {
                                className: "DocsProse",
                                children: gS.notes.map((SS => (0, KS.jsx)("p", {
                                  children: SS
                                }, SS)))
                              }), gS.legend.length > 0 && (0, KS.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, KS.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, KS.jsx)("thead", {
                                    children: (0, KS.jsxs)("tr", {
                                      children: [(0, KS.jsx)("th", {
                                        children: "Code"
                                      }), (0, KS.jsx)("th", {
                                        children: "Variant"
                                      }), (0, KS.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, KS.jsx)("tbody", {
                                    children: gS.legend.map((SS => (0, KS.jsxs)("tr", {
                                      children: [(0, KS.jsx)("td", {
                                        children: (0, KS.jsx)("button", {
                                          type: "button",
                                          className: XS()("DocsVariantChip", {
                                            Active: IS === SS.code
                                          }),
                                          "aria-pressed": IS === SS.code,
                                          title: `Show only ${HS} with ${SS.meaning} variants`,
                                          onClick: () => {
                                            fS(IS === SS.code ? null : SS.code)
                                          },
                                          children: SS.code
                                        })
                                      }), (0, KS.jsx)("td", {
                                        children: SS.meaning
                                      }), (0, KS.jsx)("td", {
                                        children: (0, KS.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: SS.usage
                                        })
                                      })]
                                    }, SS.code)))
                                  })]
                                })
                              }), gS.examples.length > 0 && (0, KS.jsx)(hS, {
                                lang: "text",
                                code: gS.examples.join("\n")
                              }), (0, KS.jsx)(Pg, {
                                className: "DocsFilterBar",
                                value: qS,
                                placeholder: `Search ${gS.entries.length} ${HS}\u2026`,
                                label: `Search ${HS}`,
                                onChange: SS => {
                                  uS(SS), aS(Et)
                                },
                                count: QS || IS ? {
                                  visible: DS.length,
                                  total: gS.entries.length
                                } : null,
                                children: IS && (0, KS.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    fS(null)
                                  },
                                  children: [IS, " ", (0, KS.jsx)(GS, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, KS.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: DS.slice(0, kS).map((SS => {
                                  const gS = "blocks" === HS ? null === bS || void 0 === bS ? void 0 : bS.getBlockFaces(SS.name) : null,
                                    tS = bS && !gS ? bS.getItemTextureUrl(SS.name) : null;
                                  return (0, KS.jsxs)("div", {
                                    id: Lg(HS, SS.name),
                                    className: XS()("DocsCatalogueTile", {
                                      Linked: SS.name === jS
                                    }),
                                    children: [(0, KS.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [gS && (0, KS.jsx)(Lt, {
                                        faces: gS
                                      }), tS && (0, KS.jsx)(Yt, {
                                        src: tS
                                      })]
                                    }), (0, KS.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: SS.name
                                    }), SS.variants.length > 0 && (0, KS.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: SS.variants.map((SS => (0, KS.jsx)("span", {
                                        children: SS
                                      }, SS)))
                                    }), (0, KS.jsx)(PS, {
                                      text: SS.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, SS.name)
                                }))
                              }), DS.length > kS && (0, KS.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  aS(DS.length)
                                },
                                children: ["Show all ", DS.length]
                              }), 0 === DS.length && (0, KS.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", HS, " match."]
                              })]
                            })
                          }
                          var yt = gS(4960),
                            Vt = gS(1678);
                          const it = .95 * yt.c;

                          function Wt(SS) {
                            return /^\s*```/.test(SS)
                          }

                          function zt(SS, HS) {
                            const gS = [
                              []
                            ];
                            let tS = !1;
                            for (const bS of SS.split("\n")) !tS && HS(bS) && gS.at(-1).length > 0 && gS.push([]), Wt(bS) && (tS = !tS), gS.at(-1).push(bS);
                            return gS.map((SS => SS.join("\n").trim())).filter(Boolean)
                          }

                          function Ut(SS, HS) {
                            const gS = `${"#".repeat(HS)} `,
                              tS = [];
                            let bS = !1;
                            for (const XS of SS.split("\n")) Wt(XS) ? bS = !bS : !bS && XS.startsWith(gS) && tS.push(XS.slice(gS.length).trim());
                            return tS
                          }

                          function pt(SS) {
                            return SS.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class st {
                            constructor(SS, HS) {
                              this.origin = HS, this.pages = void 0, this.partPaths = new Map;
                              const gS = SS.map((SS => {
                                const HS = HS => this.resolveLinks(SS, HS).length,
                                  gS = function(SS, HS) {
                                    const gS = SS.map((SS => HS(SS.markdown) + 2)),
                                      tS = gS.reduce(((SS, HS) => SS + HS), 0),
                                      bS = tS / Math.ceil(tS / it),
                                      XS = [];
                                    let xS = 0;
                                    return SS.forEach(((SS, HS) => {
                                      const tS = gS[HS];
                                      (0 === XS.length || xS + tS > it || xS + tS / 2 > bS) && (XS.push([]), xS = 0), XS.at(-1).push(SS), xS += tS
                                    })), XS
                                  }(function(SS, HS) {
                                    return zt(SS, (SS => SS.startsWith("## "))).flatMap((SS => {
                                      var gS;
                                      const tS = null !== (gS = Ut(SS, 2)[0]) && void 0 !== gS ? gS : "";
                                      if (HS(SS) <= it) return [{
                                        markdown: SS,
                                        section: tS
                                      }];
                                      let bS = !1,
                                        XS = "";
                                      return zt(SS, (SS => {
                                        const HS = bS && "" !== SS.trim();
                                        return bS = "" === SS.trim(), HS
                                      })).map((SS => {
                                        var HS;
                                        const gS = Ut(SS, 3),
                                          bS = SS.startsWith("### ") ? gS[0] : XS;
                                        return XS = null !== (HS = gS.at(-1)) && void 0 !== HS ? HS : XS, {
                                          markdown: SS,
                                          section: tS || bS
                                        }
                                      }))
                                    }))
                                  }(pt(SS), HS), HS);
                                return {
                                  page: SS,
                                  groups: gS.length > 1 ? gS : []
                                }
                              }));
                              for (const {
                                  page: tS,
                                  groups: bS
                                }
                                of gS) bS.forEach(((SS, HS) => {
                                const gS = (0, yt.u)(tS.slug, HS);
                                for (const bS of SS.flatMap((SS => [...Ut(SS.markdown, 2), ...Ut(SS.markdown, 3)]))) {
                                  const SS = `${tS.id}#${(0,ZS.r)(bS)}`;
                                  this.partPaths.has(SS) || this.partPaths.set(SS, gS)
                                }
                              }));
                              this.pages = gS.map((SS => {
                                let {
                                  page: HS,
                                  groups: gS
                                } = SS;
                                return {
                                  page: HS,
                                  path: (0, yt.t)(HS.slug),
                                  markdown: `# ${HS.title}\n\n${this.resolveLinks(HS,pt(HS))}\n`,
                                  parts: gS.map(((SS, tS) => this.renderPart(HS, SS, tS, gS.length)))
                                }
                              }))
                            }
                            url(SS) {
                              return `${this.origin}${SS}`
                            }
                            getPage(SS) {
                              return this.pages.find((HS => HS.page.id === SS))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((SS => (SS.parts.length > 0 ? SS.parts : [{
                                path: SS.path,
                                label: "",
                                markdown: SS.markdown
                              }]).filter((SS => SS.markdown.length > yt.c))))
                            }
                            markdownUrl(SS, HS) {
                              const gS = HS && this.partPaths.get(`${SS.id}#${HS}`) || (0, yt.t)(SS.slug);
                              return this.url(HS ? `${gS}#${HS}` : gS)
                            }
                            resolveLinks(SS, HS) {
                              return HS.replace(/\]\((#[^)]+)\)/g, ((HS, gS) => {
                                var tS;
                                const bS = null !== (tS = sS(gS)) && void 0 !== tS ? tS : this.samePageTarget(SS, gS);
                                return bS ? `](${this.markdownUrl(bS.page,bS.anchor)})` : HS
                              }))
                            }
                            samePageTarget(SS, HS) {
                              const gS = (0, ZS.r)(HS.slice(1));
                              return pS(SS, gS) ? {
                                page: SS,
                                anchor: gS
                              } : null
                            }
                            renderPart(SS, HS, gS, tS) {
                              const bS = function(SS) {
                                  const HS = SS.map((SS => SS.section)).filter(Boolean);
                                  if (0 === HS.length) return "";
                                  const gS = HS[0],
                                    tS = HS.at(-1);
                                  return gS === tS ? gS : `${gS} to ${tS}`
                                }(HS),
                                XS = HS.map((SS => SS.markdown)).join("\n\n"),
                                xS = bS ? `It covers ${bS}. ` : "",
                                NS = `Part ${gS+1} of ${tS} of [${SS.title}](${this.url((0,yt.t)(SS.slug))}). ${xS}[llms.txt](${this.url(yt.h)}) lists every part.`;
                              return {
                                path: (0, yt.u)(SS.slug, gS),
                                label: bS,
                                markdown: `# ${SS.title}, part ${gS+1} of ${tS}\n\n${NS}\n\n${this.resolveLinks(SS,XS)}\n`
                              }
                            }
                            llmsTxt(SS) {
                              const HS = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${Bt(yt.c)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const gS of iS) {
                                HS.push("", `## ${gS.title}`, "");
                                for (const SS of gS.pageIds) {
                                  const gS = this.getPage(SS),
                                    {
                                      page: tS,
                                      parts: bS
                                    } = gS,
                                    XS = `About ${Bt(gS.markdown.length)} tokens${bS.length>0?`, in ${bS.length} parts:`:"."}`;
                                  HS.push(`- [${tS.title}](${this.url(gS.path)}): ${tS.summary} ${XS}`), bS.forEach(((SS, gS) => {
                                    HS.push(`  - [Part ${gS+1}${SS.label?`: ${SS.label}`:""}](${this.url(SS.path)})`)
                                  }))
                                }
                              }
                              return HS.push("", "## Optional", "", `- [Every page in one file](${this.url(yt.d)}): About ${Bt(SS.length)} tokens, for a model with a large context window.`, ""), HS.join("\n")
                            }
                            llmsFullTxt() {
                              return iS.flatMap((SS => SS.pageIds.map((SS => this.getPage(SS).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const SS = this.llmsFullTxt(),
                                HS = this.llmsTxt(SS),
                                gS = new Map([
                                  [yt.m, HS],
                                  [yt.h, HS],
                                  [yt.d, SS]
                                ]);
                              for (const tS of this.pages) {
                                gS.set(tS.path, tS.markdown);
                                for (const SS of tS.parts) gS.set(SS.path, SS.markdown)
                              }
                              return gS
                            }
                          }

                          function Bt(SS) {
                            return `${Math.max(1,Math.round(SS/4e3))}K`
                          }
                          let Mt = null;

                          function Ft() {
                            return Mt ??= new st(VS, Vt.d), Mt
                          }
                          const Rt = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function Tt(SS) {
                            return Ft().getPage(SS.id).parts.length > 0 ? `Read ${yt.j}, then the parts of the Bloxd Code API's ${SS.title} page it lists, so I can ask questions about it.` : `Read ${Vt.d}${(0,yt.t)(SS.slug)} so I can ask questions about it. ${yt.j} lists every page of the Bloxd Code API docs.`
                          }

                          function ot(SS) {
                            let {
                              page: HS
                            } = SS;
                            const [gS, tS] = nS();
                            return (0, KS.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, KS.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  tS(Ft().getPage(HS.id).markdown)
                                },
                                children: [(0, KS.jsx)(GS, {
                                  name: !1 === (null === gS || void 0 === gS ? void 0 : gS.failed) ? "check" : "copy"
                                }), (0, KS.jsx)("span", {
                                  children: gS ? gS.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), Rt.map((SS => (0, KS.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${SS.url}${encodeURIComponent(Tt(HS))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, KS.jsx)(GS, {
                                  name: "external-link"
                                }), (0, KS.jsxs)("span", {
                                  children: ["Open in ", SS.name]
                                })]
                              }, SS.name)))]
                            })
                          }

                          function lt(SS) {
                            return `#${[0,1,2].map((HS=>Math.round(Math.min(255,Math.max(0,SS[HS]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function mt(SS) {
                            return [parseInt(SS.slice(1, 3), 16), parseInt(SS.slice(3, 5), 16), parseInt(SS.slice(5, 7), 16)]
                          }

                          function et(SS) {
                            let {
                              label: HS,
                              min: gS,
                              max: tS,
                              step: bS,
                              low: XS,
                              high: xS,
                              onChange: NS
                            } = SS;
                            return (0, KS.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, KS.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, KS.jsx)("span", {
                                  children: HS
                                }), (0, KS.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: XS === xS ? XS : `${XS}\u2013${xS}`
                                })]
                              }), (0, KS.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, KS.jsx)("input", {
                                  type: "range",
                                  min: gS,
                                  max: tS,
                                  step: bS,
                                  value: Math.min(tS, XS),
                                  "aria-label": `Minimum ${HS.toLowerCase()}`,
                                  onChange: SS => {
                                    const HS = Number(SS.target.value);
                                    NS(HS, Math.max(HS, xS))
                                  }
                                }), (0, KS.jsx)("input", {
                                  type: "range",
                                  min: gS,
                                  max: tS,
                                  step: bS,
                                  value: Math.min(tS, xS),
                                  "aria-label": `Maximum ${HS.toLowerCase()}`,
                                  onChange: SS => {
                                    const HS = Number(SS.target.value);
                                    NS(Math.min(HS, XS), HS)
                                  }
                                })]
                              })]
                            })
                          }

                          function rt(SS) {
                            let {
                              label: HS,
                              min: gS,
                              max: tS,
                              step: bS,
                              value: XS,
                              onChange: xS,
                              format: NS = String
                            } = SS;
                            return (0, KS.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, KS.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, KS.jsx)("span", {
                                  children: HS
                                }), (0, KS.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: NS(XS)
                                })]
                              }), (0, KS.jsx)("input", {
                                type: "range",
                                min: gS,
                                max: tS,
                                step: bS,
                                value: Math.min(tS, Math.max(gS, XS)),
                                "aria-label": HS,
                                onChange: SS => {
                                  xS(Number(SS.target.value))
                                }
                              })]
                            })
                          }

                          function Sb(SS) {
                            let {
                              opts: HS,
                              onChange: gS
                            } = SS;
                            const tS = HS.colorGradients;
                            if (!Bg(tS)) return (0, KS.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, KS.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, KS.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, KS.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: tS.map(((SS, HS) => (0, KS.jsx)("input", {
                                  type: "color",
                                  value: lt(SS.color),
                                  "aria-label": `Colour ${HS+1}`,
                                  onChange: SS => {
                                    const bS = [...tS];
                                    bS[HS] = {
                                      color: mt(SS.target.value)
                                    }, gS(bS)
                                  }
                                }, HS)))
                              })]
                            });
                            const bS = (SS, HS) => {
                              const bS = [...tS];
                              bS[SS] = HS, gS(bS)
                            };
                            return (0, KS.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, KS.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, KS.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, KS.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), tS.map(((SS, HS) => {
                                var gS;
                                const tS = null !== (gS = SS.maxColor) && void 0 !== gS ? gS : SS.minColor;
                                return (0, KS.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, KS.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * SS.timeFraction), "%"]
                                  }), (0, KS.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${lt(SS.minColor)}, ${lt(tS)})`
                                    }
                                  }), (0, KS.jsx)("input", {
                                    type: "color",
                                    value: lt(SS.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*SS.timeFraction)}%`,
                                    onChange: gS => {
                                      bS(HS, {
                                        ...SS,
                                        minColor: [...mt(gS.target.value), SS.minColor[3]]
                                      })
                                    }
                                  }), (0, KS.jsx)("input", {
                                    type: "color",
                                    value: lt(tS),
                                    "aria-label": `Maximum colour at ${Math.round(100*SS.timeFraction)}%`,
                                    onChange: gS => {
                                      bS(HS, {
                                        ...SS,
                                        maxColor: [...mt(gS.target.value), tS[3]]
                                      })
                                    }
                                  })]
                                }, HS)
                              }))]
                            })
                          }
                          const Hb = [-.5, -.5, -.5],
                            gb = [.5, .5, .5],
                            tb = [0, 1, 2, 3, 4, 5, 6, 7].map((SS => [1 & SS ? gb[0] : Hb[0], 2 & SS ? gb[1] : Hb[1], 4 & SS ? gb[2] : Hb[2]]));class bb {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(SS, HS, gS, tS) {
                              const bS = Math.round(31 * HS),
                                XS = Math.round(31 * gS),
                                xS = Math.round(31 * tS),
                                NS = `${bS}|${XS}|${xS}`;
                              let qS = this.tints.get(SS);
                              (!qS || qS.size > 2e3) && (qS = new Map, this.tints.set(SS, qS));
                              let uS = qS.get(NS);
                              if (uS) return uS;
                              uS = document.createElement("canvas"), uS.width = SS.naturalWidth || 16, uS.height = SS.naturalHeight || 16;
                              const IS = uS.getContext("2d");
                              return IS ? (IS.imageSmoothingEnabled = !1, IS.drawImage(SS, 0, 0, uS.width, uS.height), IS.globalCompositeOperation = "multiply", IS.fillStyle = `rgb(${bS/31*255}, ${XS/31*255}, ${xS/31*255})`, IS.fillRect(0, 0, uS.width, uS.height), IS.globalCompositeOperation = "destination-in", IS.drawImage(SS, 0, 0, uS.width, uS.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), qS.set(NS, uS), uS
                            }
                          }

                          function Xb(SS) {
                            let {
                              opts: HS,
                              textureUrl: gS,
                              burst: bS,
                              paused: XS
                            } = SS;
                            const xS = (0, tS.useRef)(null),
                              NS = (0, tS.useRef)(HS);
                            NS.current = HS;
                            const qS = (0, tS.useRef)(XS);
                            qS.current = XS;
                            const uS = (0, tS.useRef)(null),
                              IS = (0, tS.useRef)(null),
                              fS = (0, tS.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(SS) {
                                let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const gS = [-.5, -.5, -.5],
                                  tS = [.5, .5, .5];
                                let bS = .5;
                                for (let XS = 0; XS < 40; XS++) {
                                  const XS = Fg(SS, gS, tS, HS),
                                    xS = Math.max(XS.life / 30, .001);
                                  for (; og(XS, SS.gravity, xS);) bS = Math.max(bS, Math.hypot(XS.pos[0], XS.pos[1], XS.pos[2]) + XS.size / 2)
                                }
                                return bS
                              }(HS)))), [HS]),
                              kS = (0, tS.useRef)(fS);
                            return kS.current = fS, (0, tS.useEffect)((() => {
                              if (uS.current = null, !gS) return;
                              const SS = new Image;
                              let HS = !1;
                              return SS.onload = () => {
                                HS || (uS.current = SS)
                              }, SS.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${gS}`)
                              }, SS.src = gS, () => {
                                HS = !0
                              }
                            }), [gS]), (0, tS.useEffect)((() => {
                              var SS;
                              null === (SS = IS.current) || void 0 === SS || SS.call(IS)
                            }), [HS, bS]), (0, tS.useEffect)((() => {
                              const SS = xS.current,
                                HS = null === SS || void 0 === SS ? void 0 : SS.getContext("2d");
                              if (!SS || !HS) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const gS = new bb;
                              let tS = [],
                                bS = 0,
                                XS = -.7,
                                fS = kS.current,
                                aS = performance.now(),
                                KS = 0,
                                jS = !0,
                                GS = null;
                              const CS = () => {
                                const SS = NS.current,
                                  HS = Math.min(400, Math.max(0, Math.ceil(SS.manualEmitCount)));
                                tS = [];
                                for (let gS = 0; gS < HS; gS++) tS.push(Fg(SS, Hb, gb, Math.random));
                                bS = 0
                              };
                              IS.current = CS, CS();
                              const nS = xS => {
                                KS = requestAnimationFrame(nS);
                                const IS = Math.min(.05, (xS - aS) / 1e3);
                                if (aS = xS, !jS) return;
                                const PS = window.devicePixelRatio || 1,
                                  QS = Math.round(SS.clientWidth * PS),
                                  DS = Math.round(SS.clientHeight * PS);
                                if (0 === QS || 0 === DS) return;
                                SS.width === QS && SS.height === DS || (SS.width = QS, SS.height = DS);
                                const wS = NS.current;
                                null === GS && (XS += .18 * IS), fS += (kS.current - fS) * Math.min(1, 4 * IS);
                                const hS = .6 * IS;
                                tS = tS.filter((SS => og(SS, wS.gravity, hS))), 0 !== tS.length || qS.current || (bS += IS, bS > .6 && CS());
                                const ZS = function(SS, HS, gS, tS) {
                                  const bS = 3.2 * tS,
                                    XS = .44 * Math.min(SS, HS) * bS / tS,
                                    xS = Math.cos(gS),
                                    NS = Math.sin(gS),
                                    qS = Math.cos(.42),
                                    uS = Math.sin(.42);
                                  return (gS, tS, IS) => {
                                    const fS = gS * NS + IS * xS,
                                      kS = bS - (tS * uS + fS * qS);
                                    if (kS < .05) return null;
                                    const aS = XS / kS;
                                    return {
                                      x: SS / 2 + (gS * xS - IS * NS) * aS,
                                      y: HS / 2 - (tS * qS - fS * uS) * aS,
                                      scale: aS,
                                      depth: kS
                                    }
                                  }
                                }(QS, DS, XS, fS);
                                ! function(SS, HS, gS, tS, bS) {
                                  const XS = SS.createLinearGradient(0, 0, 0, gS);
                                  XS.addColorStop(0, "#23262d"), XS.addColorStop(1, "#16181c"), SS.globalCompositeOperation = "source-over", SS.globalAlpha = 1, SS.fillStyle = XS, SS.fillRect(0, 0, HS, gS);
                                  const xS = (HS, gS) => {
                                      const bS = tS(HS[0], HS[1], HS[2]),
                                        XS = tS(gS[0], gS[1], gS[2]);
                                      bS && XS && (SS.beginPath(), SS.moveTo(bS.x, bS.y), SS.lineTo(XS.x, XS.y), SS.stroke())
                                    },
                                    NS = Math.ceil(bS) + 1,
                                    qS = Hb[1];
                                  SS.lineWidth = 1, SS.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let uS = -NS; uS <= NS; uS++) xS([uS + .5, qS, .5 - NS], [uS + .5, qS, NS + .5]), xS([.5 - NS, qS, uS + .5], [NS + .5, qS, uS + .5]);
                                  SS.strokeStyle = "rgba(255, 255, 255, 0.28)", SS.setLineDash([4, 4]);
                                  for (const uS of tb)
                                    for (const SS of tb) {
                                      const HS = [0, 1, 2].filter((HS => uS[HS] !== SS[HS]));
                                      1 === HS.length && uS[HS[0]] < SS[HS[0]] && xS(uS, SS)
                                    }
                                  SS.setLineDash([])
                                }(HS, QS, DS, ZS, fS);
                                const JS = uS.current,
                                  OS = tS.map((SS => ({
                                    particle: SS,
                                    at: ZS(SS.pos[0], SS.pos[1], SS.pos[2])
                                  }))).filter((SS => null !== SS.at)).sort(((SS, HS) => HS.at.depth - SS.at.depth));
                                HS.imageSmoothingEnabled = !1;
                                for (const SS of function(SS) {
                                    switch (SS) {
                                      case Wg.g.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case Wg.g.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case Wg.g.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case Wg.g.MultiplyAdd:
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
                                  }(wS.blendMode)) {
                                  HS.globalCompositeOperation = SS.operation;
                                  for (const {
                                      particle: tS,
                                      at: bS
                                    }
                                    of OS) {
                                    const [XS, xS, NS, qS] = Tg(tS), uS = Math.max(1, tS.size * bS.scale);
                                    HS.globalAlpha = SS.usesAlpha ? Math.min(1, Math.max(0, qS)) : 1, JS ? HS.drawImage(gS.get(JS, XS, xS, NS), bS.x - uS / 2, bS.y - uS / 2, uS, uS) : (HS.fillStyle = `rgb(${255*XS}, ${255*xS}, ${255*NS})`, HS.fillRect(bS.x - uS / 2, bS.y - uS / 2, uS, uS))
                                  }
                                }
                                HS.globalCompositeOperation = "source-over", HS.globalAlpha = 1
                              };
                              KS = requestAnimationFrame(nS);
                              const PS = new IntersectionObserver((SS => {
                                let [HS] = SS;
                                jS = HS.isIntersecting
                              }));
                              PS.observe(SS);
                              const QS = HS => {
                                  GS = HS.clientX, SS.setPointerCapture(HS.pointerId)
                                },
                                DS = SS => {
                                  null !== GS && (XS += .01 * (SS.clientX - GS), GS = SS.clientX)
                                },
                                wS = () => {
                                  GS = null
                                };
                              return SS.addEventListener("pointerdown", QS), SS.addEventListener("pointermove", DS), SS.addEventListener("pointerup", wS), SS.addEventListener("pointercancel", wS), () => {
                                cancelAnimationFrame(KS), PS.disconnect(), IS.current = null, SS.removeEventListener("pointerdown", QS), SS.removeEventListener("pointermove", DS), SS.removeEventListener("pointerup", wS), SS.removeEventListener("pointercancel", wS)
                              }
                            }), []), (0, KS.jsx)("canvas", {
                              ref: xS,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${HS.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const xb = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            Nb = [{
                              mode: Wg.g.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: Wg.g.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: Wg.g.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: Wg.g.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: Wg.g.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            qb = (0, tS.forwardRef)((function(SS, HS) {
                              var gS, bS;
                              let {
                                textures: xS
                              } = SS;
                              const NS = Qt(),
                                qS = (0, tS.useRef)(null),
                                [uS, IS] = (0, tS.useState)(Ug),
                                [fS, kS] = (0, tS.useState)("example"),
                                [aS, jS] = (0, tS.useState)(0),
                                [CS, nS] = (0, tS.useState)(!1),
                                QS = SS => {
                                  const HS = "example" === SS ? Ug : zg(SS);
                                  HS && (IS(HS), kS(SS))
                                };
                              (0, tS.useImperativeHandle)(HS, (() => ({
                                preview: SS => {
                                  var HS;
                                  QS(SS), null === (HS = qS.current) || void 0 === HS || HS.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const DS = SS => {
                                  IS({
                                    ...uS,
                                    ...SS
                                  }), kS(null)
                                },
                                wS = function(SS, HS) {
                                  if (null !== HS) return `${rg}    presetId: "${HS}",\n${St}\n})`;
                                  const gS = SS.velocityGradients.map((SS => `        {\n            timeFraction: ${lg(SS.timeFraction)},\n            factor: ${lg(SS.factor)},\n            factor2: ${lg(SS.factor2)},\n        },`)),
                                    tS = [`    dir1: ${mg(SS.dir1)},`, `    dir2: ${mg(SS.dir2)},`, St, `    texture: "${SS.texture}",`, `    minLifeTime: ${lg(SS.minLifeTime)},`, `    maxLifeTime: ${lg(SS.maxLifeTime)},`, `    minEmitPower: ${lg(SS.minEmitPower)},`, `    maxEmitPower: ${lg(SS.maxEmitPower)},`, `    minSize: ${lg(SS.minSize)},`, `    maxSize: ${lg(SS.maxSize)},`, `    manualEmitCount: ${lg(SS.manualEmitCount)},`, `    gravity: ${mg(SS.gravity)},`, `    colorGradients: ${eg(SS.colorGradients,"    ")},`, `    velocityGradients: ${gS.length>0?`[\n${gS.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${lg(SS.blendMode)},`];
                                  return void 0 !== SS.hideDist && tS.push(`    hideDist: ${lg(SS.hideDist)},`), `${rg}${tS.join("\n")}\n})`
                                }(uS, null === fS || "example" === fS ? null : fS),
                                ZS = xS.includes(uS.texture) ? xS : [...xS, uS.texture];
                              return (0, KS.jsxs)("section", {
                                ref: qS,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, KS.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, KS.jsxs)("div", {
                                    children: [(0, KS.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, KS.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, KS.jsx)(PS, {
                                    text: wS,
                                    label: "Copy code"
                                  })]
                                }), (0, KS.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, KS.jsx)("button", {
                                    type: "button",
                                    className: XS()("DocsVariantChip", {
                                      Active: "example" === fS
                                    }),
                                    onClick: () => {
                                      QS("example")
                                    },
                                    children: "Example"
                                  }), xb.filter((SS => null !== zg(SS))).map((SS => (0, KS.jsx)("button", {
                                    type: "button",
                                    className: XS()("DocsVariantChip", {
                                      Active: fS === SS
                                    }),
                                    onClick: () => {
                                      QS(SS)
                                    },
                                    children: SS
                                  }, SS))), (0, KS.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== fS && void 0 !== fS ? fS : "custom",
                                    "aria-label": "Preset",
                                    onChange: SS => {
                                      QS(SS.target.value)
                                    },
                                    children: [(0, KS.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === fS && (0, KS.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), ig.e.map((SS => (0, KS.jsx)("option", {
                                      value: SS,
                                      children: SS
                                    }, SS)))]
                                  })]
                                }), (0, KS.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, KS.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, KS.jsx)(Xb, {
                                      opts: uS,
                                      textureUrl: null !== (gS = null === NS || void 0 === NS ? void 0 : NS.getParticleTextureUrl(uS.texture)) && void 0 !== gS ? gS : null,
                                      burst: aS,
                                      paused: CS
                                    }), (0, KS.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, KS.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          jS(aS + 1)
                                        },
                                        children: [(0, KS.jsx)(GS, {
                                          name: "replay"
                                        }), (0, KS.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, KS.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": CS,
                                        onClick: () => {
                                          nS(!CS)
                                        },
                                        children: [(0, KS.jsx)(GS, {
                                          name: CS ? "play" : "pause"
                                        }), (0, KS.jsx)("span", {
                                          children: CS ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, KS.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, KS.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, KS.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, KS.jsx)("span", {
                                          children: "Texture"
                                        }), (0, KS.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: uS.texture
                                        })]
                                      }), (0, KS.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: ZS.map((SS => {
                                          var HS;
                                          const gS = null !== (HS = null === NS || void 0 === NS ? void 0 : NS.getParticleTextureUrl(SS)) && void 0 !== HS ? HS : null;
                                          return (0, KS.jsx)("button", {
                                            type: "button",
                                            className: XS()("DocsParticleTexture", {
                                              Active: uS.texture === SS
                                            }),
                                            title: SS,
                                            "aria-label": SS,
                                            "aria-pressed": uS.texture === SS,
                                            onClick: () => {
                                              DS({
                                                texture: SS
                                              })
                                            },
                                            children: gS ? (0, KS.jsx)("img", {
                                              src: gS,
                                              alt: ""
                                            }) : (0, KS.jsx)(GS, {
                                              name: "image"
                                            })
                                          }, SS)
                                        }))
                                      })]
                                    }), (0, KS.jsx)(rt, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: uS.manualEmitCount,
                                      onChange: SS => {
                                        DS({
                                          manualEmitCount: SS
                                        })
                                      }
                                    }), (0, KS.jsx)(et, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: uS.minLifeTime,
                                      high: uS.maxLifeTime,
                                      onChange: (SS, HS) => {
                                        DS({
                                          minLifeTime: SS,
                                          maxLifeTime: HS
                                        })
                                      }
                                    }), (0, KS.jsx)(et, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: uS.minEmitPower,
                                      high: uS.maxEmitPower,
                                      onChange: (SS, HS) => {
                                        DS({
                                          minEmitPower: SS,
                                          maxEmitPower: HS
                                        })
                                      }
                                    }), (0, KS.jsx)(et, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: uS.minSize,
                                      high: uS.maxSize,
                                      onChange: (SS, HS) => {
                                        DS({
                                          minSize: SS,
                                          maxSize: HS
                                        })
                                      }
                                    }), (0, KS.jsx)(rt, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (bS = uS.gravity[1]) && void 0 !== bS ? bS : 0,
                                      onChange: SS => {
                                        var HS, gS;
                                        DS({
                                          gravity: [null !== (HS = uS.gravity[0]) && void 0 !== HS ? HS : 0, SS, null !== (gS = uS.gravity[2]) && void 0 !== gS ? gS : 0]
                                        })
                                      }
                                    }), (0, KS.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, KS.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, KS.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, KS.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: uS.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: SS => {
                                          DS({
                                            blendMode: Number(SS.target.value)
                                          })
                                        },
                                        children: Nb.map((SS => {
                                          let {
                                            mode: HS,
                                            label: gS
                                          } = SS;
                                          return (0, KS.jsx)("option", {
                                            value: HS,
                                            children: gS
                                          }, HS)
                                        }))
                                      })]
                                    }), (0, KS.jsx)(Sb, {
                                      opts: uS,
                                      onChange: SS => {
                                        DS({
                                          colorGradients: SS
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, KS.jsx)(hS, {
                                  code: wS,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var ub = gS(4593),
                            Ib = gS(2031);

                          function fb(SS, HS) {
                            return SS ? ub.d.includes(HS) ? SS.getIngameIconUrl(HS) : SS.getItemIconUrl(HS) : null
                          }

                          function kb(SS) {
                            var HS, gS, tS;
                            let {
                              part: bS,
                              assets: xS
                            } = SS;
                            const NS = fb(xS, bS.icon),
                              qS = null !== (HS = null === (gS = bS.style) || void 0 === gS ? void 0 : gS.fontSize) && void 0 !== HS ? HS : "1.8em",
                              uS = (0, iH.Zb)(bS.style);
                            return (0, KS.jsxs)("span", {
                              className: XS()("DocsBloxdTextIcon", {
                                Missing: !NS
                              }),
                              style: {
                                width: qS,
                                height: qS,
                                opacity: null === (tS = bS.style) || void 0 === tS ? void 0 : tS.opacity
                              },
                              title: NS ? void 0 : `No Bloxd icon, item or block is called "${bS.icon}"`,
                              children: [NS && uS && (0, KS.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: uS,
                                  maskImage: `url("${NS}")`,
                                  WebkitMaskImage: `url("${NS}")`
                                }
                              }), NS ? (0, KS.jsx)("img", {
                                src: NS,
                                alt: "",
                                className: XS()({
                                  Tinted: uS
                                })
                              }) : (0, KS.jsx)(GS, {
                                name: "image"
                              })]
                            })
                          }

                          function ab(SS) {
                            let {
                              parts: HS,
                              className: gS
                            } = SS;
                            const tS = Qt(),
                              bS = [];
                            let xS = [];
                            const NS = SS => {
                              xS.length > 0 && (bS.push((0, KS.jsx)(Ib.c, {
                                text: xS
                              }, `run-${SS}`)), xS = [])
                            };
                            return HS.forEach(((SS, HS) => {
                              "icon" !== sH(SS) || zH(SS.icon) ? xS.push(SS) : (NS(HS), bS.push((0, KS.jsx)(kb, {
                                part: SS,
                                assets: tS
                              }, `icon-${HS}`)))
                            })), NS(HS.length), (0, KS.jsx)("div", {
                              className: XS()("DocsStyledTextPreview", gS),
                              children: bS
                            })
                          }
                          const Kb = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let jb = null;

                          function Gb(SS) {
                            if (jb ??= document.createElement("canvas").getContext("2d"), !jb) return "#000000";
                            jb.fillStyle = "#000000", jb.fillStyle = SS;
                            const HS = jb.fillStyle;
                            return HS.startsWith("#") ? HS : "#000000"
                          }

                          function Cb(SS) {
                            let {
                              value: HS,
                              label: gS,
                              onChange: tS
                            } = SS;
                            return (0, KS.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, KS.jsx)("input", {
                                type: "color",
                                value: Gb(HS),
                                "aria-label": `${gS} picker`,
                                onChange: SS => {
                                  tS(SS.target.value)
                                }
                              }), (0, KS.jsx)("input", {
                                type: "text",
                                value: HS,
                                placeholder: "#ffb914 or gold",
                                "aria-label": gS,
                                spellCheck: !1,
                                onChange: SS => {
                                  tS(SS.target.value)
                                }
                              })]
                            })
                          }

                          function nb(SS) {
                            let {
                              value: HS,
                              fontAwesomeIcons: gS,
                              onChange: bS
                            } = SS;
                            const xS = Qt(),
                              [NS, qS] = (0, tS.useState)(zH(HS) ? "fontAwesome" : "bloxd"),
                              [uS, IS] = (0, tS.useState)(""),
                              fS = uS.trim().toLowerCase(),
                              kS = "bloxd" === NS ? ub.d : gS,
                              aS = fS ? kS.filter((SS => SS.toLowerCase().includes(fS))) : kS;
                            return (0, KS.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, KS.jsx)("input", {
                                type: "text",
                                value: HS,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: SS => {
                                  bS(SS.target.value)
                                }
                              }), (0, KS.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, KS.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((SS => (0, KS.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": NS === SS,
                                    className: XS()("DocsVariantChip", {
                                      Active: NS === SS
                                    }),
                                    onClick: () => {
                                      qS(SS)
                                    },
                                    children: "bloxd" === SS ? `Bloxd icons (${ub.d.length})` : `Font Awesome (${gS.length})`
                                  }, SS))), (0, KS.jsx)("input", {
                                    type: "search",
                                    value: uS,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: SS => {
                                      IS(SS.target.value)
                                    }
                                  })
                                ]
                              }), (0, KS.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [aS.map((SS => {
                                  const gS = "bloxd" === NS ? fb(xS, SS) : null;
                                  return (0, KS.jsx)("button", {
                                    type: "button",
                                    title: SS,
                                    "aria-label": SS,
                                    "aria-pressed": SS === HS,
                                    className: XS()("DocsIconPickerOption", {
                                      Active: SS === HS
                                    }),
                                    onClick: () => {
                                      bS(SS)
                                    },
                                    children: "fontAwesome" === NS ? (0, KS.jsx)(Qg.d, {
                                      name: SS
                                    }) : gS ? (0, KS.jsx)("img", {
                                      src: gS,
                                      alt: ""
                                    }) : (0, KS.jsx)(GS, {
                                      name: "image"
                                    })
                                  }, SS)
                                })), 0 === aS.length && (0, KS.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", uS, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function Pb(SS) {
                            let {
                              property: HS,
                              value: gS,
                              fontAwesomeIcons: tS,
                              onChange: bS
                            } = SS;
                            const {
                              field: XS,
                              label: xS
                            } = HS, NS = SS => "" !== SS || HS.isRequired ? SS : void 0;
                            switch (XS.kind) {
                              case "text":
                                return XS.multiline ? (0, KS.jsx)("textarea", {
                                  value: String(null !== gS && void 0 !== gS ? gS : ""),
                                  rows: 2,
                                  "aria-label": xS,
                                  onChange: SS => {
                                    bS(SS.target.value)
                                  }
                                }) : (0, KS.jsx)("input", {
                                  type: "text",
                                  value: String(null !== gS && void 0 !== gS ? gS : ""),
                                  "aria-label": xS,
                                  onChange: SS => {
                                    bS(NS(SS.target.value))
                                  }
                                });
                              case "size":
                                return (0, KS.jsx)("input", {
                                  type: "text",
                                  value: String(null !== gS && void 0 !== gS ? gS : ""),
                                  placeholder: HS.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": xS,
                                  spellCheck: !1,
                                  onChange: SS => {
                                    bS(NS(SS.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, KS.jsx)(Cb, {
                                  value: String(null !== gS && void 0 !== gS ? gS : ""),
                                  label: xS,
                                  onChange: SS => {
                                    bS(NS(SS))
                                  }
                                });
                              case "colours": {
                                const SS = Array.isArray(gS) ? gS : [],
                                  HS = SS => {
                                    bS(SS.length > 0 ? SS : void 0)
                                  };
                                return (0, KS.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [SS.map(((gS, tS) => (0, KS.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, KS.jsx)(Cb, {
                                      value: gS,
                                      label: `${xS} ${tS+1}`,
                                      onChange: gS => {
                                        HS(SS.map(((SS, HS) => HS === tS ? gS : SS)))
                                      }
                                    }), (0, KS.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${tS+1}`,
                                      onClick: () => {
                                        HS(SS.filter(((SS, HS) => HS !== tS)))
                                      },
                                      children: (0, KS.jsx)(GS, {
                                        name: "cross"
                                      })
                                    })]
                                  }, tS))), (0, KS.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var gS;
                                      HS([...SS, null !== (gS = SS.at(-1)) && void 0 !== gS ? gS : "#ffffff"])
                                    },
                                    children: [(0, KS.jsx)(GS, {
                                      name: "plus"
                                    }), 0 === SS.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var qS;
                                const SS = "number" === typeof gS ? gS : Number(null !== (qS = HS.defaultText) && void 0 !== qS ? qS : 0);
                                return (0, KS.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, KS.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: SS,
                                    "aria-label": xS,
                                    onChange: SS => {
                                      bS(Number(SS.target.value))
                                    }
                                  }), (0, KS.jsx)("output", {
                                    children: SS.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, KS.jsxs)("select", {
                                  value: String(null !== gS && void 0 !== gS ? gS : ""),
                                  "aria-label": xS,
                                  onChange: SS => {
                                    bS(NS(SS.target.value))
                                  },
                                  children: [!HS.isRequired && (0, KS.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", HS.defaultText, ")"]
                                  }), XS.options.map((SS => (0, KS.jsx)("option", {
                                    value: SS,
                                    children: SS
                                  }, SS)))]
                                });
                              case "icon":
                                return (0, KS.jsx)(nb, {
                                  value: String(null !== gS && void 0 !== gS ? gS : ""),
                                  fontAwesomeIcons: tS,
                                  onChange: bS
                                })
                            }
                          }

                          function Qb(SS) {
                            let HS;
                            try {
                              HS = JSON.parse(SS)
                            } catch (gS) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${gS.message}`
                              }
                            }
                            return gg(HS) ? {
                              part: HS,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function Db(SS) {
                            let {
                              parts: HS,
                              index: gS,
                              fontAwesomeIcons: bS,
                              onChange: XS,
                              pE: xS,
                              onClose: NS
                            } = SS;
                            const qS = (0, tS.useContext)(KH),
                              IS = (0, tS.useRef)(null),
                              fS = HS[gS],
                              kS = sH(fS),
                              [aS, jS] = (0, tS.useState)((() => JSON.stringify(fS, null, 2))),
                              CS = (0, tS.useMemo)((() => "other" === kS ? Qb(aS).error : null), [kS, aS]);
                            (0, tS.useEffect)((() => {
                              var SS;
                              null === (SS = IS.current) || void 0 === SS || SS.focus()
                            }), []);
                            const nS = (0, KS.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: SS => {
                                SS.target === SS.currentTarget && NS()
                              },
                              children: (0, KS.jsxs)("div", {
                                ref: IS,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${gS+1}: ${UH[kS]}`,
                                tabIndex: -1,
                                onKeyDown: SS => {
                                  "Escape" === SS.key ? (SS.stopPropagation(), NS()) : "Tab" === SS.key && IS.current && function(SS, HS) {
                                    const gS = Array.from(SS.querySelectorAll(cH)),
                                      tS = gS[0],
                                      bS = gS.at(-1);
                                    if (!tS || !bS) return;
                                    const XS = document.activeElement;
                                    !HS.shiftKey || XS !== tS && XS !== SS ? HS.shiftKey || XS !== bS || (HS.preventDefault(), tS.focus()) : (HS.preventDefault(), bS.focus())
                                  }(IS.current, SS)
                                },
                                children: [(0, KS.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, KS.jsxs)("div", {
                                    children: [(0, KS.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", gS + 1]
                                    }), (0, KS.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: UH[kS]
                                    })]
                                  }), (0, KS.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: NS,
                                    children: (0, KS.jsx)(GS, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, KS.jsx)(ab, {
                                  parts: HS,
                                  className: "DocsTextDialogPreview"
                                }), (0, KS.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === kS ? (0, KS.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, KS.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, KS.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: aS,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: SS => {
                                        jS(SS.target.value);
                                        const HS = Qb(SS.target.value);
                                        null !== HS.part && XS(HS.part)
                                      }
                                    }), CS && (0, KS.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: CS
                                    })]
                                  }) : MH[kS].map((SS => {
                                    const HS = RH(fS, SS.path),
                                      gS = SS.isRequired ? JSON.stringify(oH(fS, SS.path)) === JSON.stringify(fS) : void 0 === HS;
                                    return (0, KS.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, KS.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, KS.jsx)("span", {
                                          children: SS.label
                                        }), (0, KS.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: gS,
                                          "aria-label": `Reset ${SS.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            XS(oH(fS, SS.path))
                                          },
                                          children: [(0, KS.jsx)(GS, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, KS.jsx)(Pb, {
                                        property: SS,
                                        value: HS,
                                        fontAwesomeIcons: bS,
                                        onChange: HS => {
                                          XS(TH(fS, SS.path, HS))
                                        }
                                      }), !SS.isRequired && (0, KS.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", SS.defaultText]
                                      })]
                                    }, SS.path.join("."))
                                  }))
                                }), (0, KS.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, KS.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: xS,
                                    children: [(0, KS.jsx)(GS, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, KS.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: NS,
                                    children: "Done"
                                  })]
                                }), (0, KS.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: Kb.map((SS => (0, KS.jsx)("option", {
                                    value: SS
                                  }, SS)))
                                })]
                              })
                            });
                            return qS ? (0, uS.createPortal)(nS, qS) : nS
                          }
                          const wb = [{
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
                            hb = Object.keys(pH);

                          function Zb(SS) {
                            let {
                              fontAwesomeIcons: HS
                            } = SS;
                            const [gS, bS] = (0, tS.useState)(wb[0].parts), [xS, NS] = (0, tS.useState)((() => rH(wb[0].parts))), [qS, uS] = (0, tS.useState)(null), [IS, fS] = (0, tS.useState)(!1), [kS, aS] = (0, tS.useState)(null), [jS, CS] = (0, tS.useState)(!1), [nS, PS] = (0, tS.useState)(null), QS = (0, tS.useRef)(null), DS = rH(gS);
                            (0, tS.useLayoutEffect)((() => {
                              var SS;
                              if (!nS) return;
                              const HS = SS => {
                                  var HS;
                                  return null === (HS = QS.current) || void 0 === HS ? void 0 : HS.querySelector(`[data-focus-key="${SS}"]`)
                                },
                                gS = HS(nS.key);
                              null === (SS = gS && !gS.disabled ? gS : HS(nS.fallback)) || void 0 === SS || SS.focus(), PS(null)
                            }), [nS]);
                            const wS = SS => {
                                bS(SS), NS(rH(SS)), uS(null)
                              },
                              ZS = SS => {
                                wS(gS.filter(((HS, gS) => gS !== SS))), PS({
                                  key: `edit-${Math.min(SS,gS.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              JS = (SS, HS) => {
                                const tS = [...gS],
                                  [bS] = tS.splice(SS, 1);
                                tS.splice(SS + HS, 0, bS), wS(tS);
                                PS({
                                  key: `${HS<0?"up":"down"}-${SS+HS}`,
                                  fallback: `edit-${SS+HS}`
                                })
                              };
                            return (0, KS.jsxs)("section", {
                              ref: QS,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, KS.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, KS.jsxs)("div", {
                                  children: [(0, KS.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, KS.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, KS.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: wb.map((SS => (0, KS.jsx)("button", {
                                  type: "button",
                                  className: XS()("DocsVariantChip", {
                                    Active: DS === rH(SS.parts)
                                  }),
                                  onClick: () => {
                                    wS(SS.parts)
                                  },
                                  children: SS.label
                                }, SS.label)))
                              }), (0, KS.jsx)(ab, {
                                parts: gS,
                                className: "DocsTextEditorPreview"
                              }), (0, KS.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, KS.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, KS.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, KS.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [gS.map(((SS, HS) => {
                                      const tS = sH(SS);
                                      return (0, KS.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, KS.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${HS}`,
                                          "aria-label": `Edit part ${HS+1}, ${UH[tS]}`,
                                          onClick: () => {
                                            aS(HS)
                                          },
                                          children: [(0, KS.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: UH[tS]
                                          }), (0, KS.jsx)(ab, {
                                            parts: [SS],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== tS && (0, KS.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: lH(SS)
                                          })]
                                        }), (0, KS.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, KS.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${HS+1} up`,
                                            "data-focus-key": `up-${HS}`,
                                            disabled: 0 === HS,
                                            onClick: () => {
                                              JS(HS, -1)
                                            },
                                            children: (0, KS.jsx)(GS, {
                                              name: "chevron-up"
                                            })
                                          }), (0, KS.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${HS+1} down`,
                                            "data-focus-key": `down-${HS}`,
                                            disabled: HS === gS.length - 1,
                                            onClick: () => {
                                              JS(HS, 1)
                                            },
                                            children: (0, KS.jsx)(GS, {
                                              name: "chevron-down"
                                            })
                                          }), (0, KS.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${HS+1}`,
                                            onClick: () => {
                                              ZS(HS)
                                            },
                                            children: (0, KS.jsx)(GS, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, HS)
                                    })), 0 === gS.length && (0, KS.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, KS.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: SS => {
                                      "Escape" === SS.key && jS && (SS.stopPropagation(), CS(!1), PS({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, KS.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": jS,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        CS(!jS)
                                      },
                                      children: [(0, KS.jsx)(GS, {
                                        name: "plus"
                                      }), "Add a part", (0, KS.jsx)(GS, {
                                        name: jS ? "chevron-up" : "chevron-down"
                                      })]
                                    }), jS && (0, KS.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: hb.map((SS => (0, KS.jsx)("li", {
                                        children: (0, KS.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (SS => {
                                              wS([...gS, pH[SS]]), CS(!1), aS(gS.length)
                                            })(SS)
                                          },
                                          children: UH[SS]
                                        })
                                      }, SS)))
                                    })]
                                  })]
                                }), (0, KS.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, KS.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, KS.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": IS,
                                      onClick: () => {
                                        fS(!IS)
                                      },
                                      children: [(0, KS.jsx)(GS, {
                                        name: IS ? "check" : "pencil"
                                      }), IS ? "Done" : "Edit"]
                                    })]
                                  }), IS ? (0, KS.jsxs)(KS.Fragment, {
                                    children: [(0, KS.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: xS,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: SS => {
                                        NS(SS.target.value);
                                        const HS = tg(SS.target.value);
                                        uS(HS.error), HS.parts && bS(HS.parts)
                                      }
                                    }), qS && (0, KS.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: qS
                                    })]
                                  }) : (0, KS.jsx)(hS, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${DS})`
                                  })]
                                })]
                              }), null !== kS && kS < gS.length && (0, KS.jsx)(Db, {
                                parts: gS,
                                index: kS,
                                fontAwesomeIcons: HS,
                                onChange: SS => {
                                  ((SS, HS) => {
                                    wS(gS.map(((gS, tS) => tS === SS ? HS : gS)))
                                  })(kS, SS)
                                },
                                pE: () => {
                                  ZS(kS), aS(null)
                                },
                                onClose: () => {
                                  aS(null), PS({
                                    key: `edit-${kS}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var Jb = gS(4992),
                            Ob = gS(4967),
                            db = gS(4985),
                            cb = gS(5e3);
                          const vb = 40,
                            Eb = 800,
                            Lb = 150,
                            Yb = 8e3,
                            Ab = 2e3;

                          function yb(SS, HS) {
                            return 12 * Math.log2(HS / SS)
                          }

                          function Vb(SS, HS) {
                            return Math.round(SS * 2 ** (HS / 12) * 10) / 10
                          }

                          function ib(SS) {
                            return `${SS} ms`
                          }

                          function Wb(SS) {
                            return `${SS} st`
                          }
                          const zb = [{
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

                          function Ub(SS) {
                            let {
                              synth: HS,
                              onChange: gS
                            } = SS;
                            const tS = (0, Jb.j)(HS);
                            return (0, KS.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, KS.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, KS.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, KS.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, KS.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, KS.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, KS.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: Jb.e.map((SS => (0, KS.jsx)("button", {
                                      type: "button",
                                      className: XS()("DocsVariantChip", {
                                        Active: HS.waveform === SS
                                      }),
                                      "aria-pressed": HS.waveform === SS,
                                      onClick: () => {
                                        gS({
                                          waveform: SS
                                        })
                                      },
                                      children: SS
                                    }, SS)))
                                  })]
                                }), (0, KS.jsx)(rt, {
                                  label: "Pitch",
                                  min: 0,
                                  max: yb(vb, Eb),
                                  step: .1,
                                  value: yb(vb, HS.pitchHz),
                                  format: () => `${HS.pitchHz} Hz`,
                                  onChange: SS => {
                                    gS({
                                      pitchHz: Vb(vb, SS)
                                    })
                                  }
                                }), (0, KS.jsx)(rt, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: HS.syllableMs,
                                  format: ib,
                                  onChange: SS => {
                                    gS({
                                      syllableMs: SS
                                    })
                                  }
                                }), (0, KS.jsx)(rt, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: HS.volume,
                                  onChange: SS => {
                                    gS({
                                      volume: SS
                                    })
                                  }
                                })]
                              }), (0, KS.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, KS.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, KS.jsx)(rt, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: HS.durationMs,
                                  format: ib,
                                  onChange: SS => {
                                    gS({
                                      durationMs: SS
                                    })
                                  }
                                }), (0, KS.jsx)(rt, {
                                  label: "Fade in",
                                  min: 0,
                                  max: tS.durationMs,
                                  step: 1,
                                  value: tS.attackMs,
                                  format: ib,
                                  onChange: SS => {
                                    gS({
                                      attackMs: SS
                                    })
                                  }
                                }), (0, KS.jsx)(rt, {
                                  label: "Fade out",
                                  min: 0,
                                  max: tS.durationMs - tS.attackMs,
                                  step: 1,
                                  value: tS.releaseMs,
                                  format: ib,
                                  onChange: SS => {
                                    gS({
                                      releaseMs: SS
                                    })
                                  }
                                }), (0, KS.jsx)(rt, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: HS.glideSemitones,
                                  format: Wb,
                                  onChange: SS => {
                                    gS({
                                      glideSemitones: SS
                                    })
                                  }
                                }), (0, KS.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, KS.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== HS.lowpassHz,
                                    onChange: SS => {
                                      gS({
                                        lowpassHz: SS.target.checked ? Ab : null
                                      })
                                    }
                                  }), (0, KS.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== HS.lowpassHz && (0, KS.jsx)(rt, {
                                  label: "Filter",
                                  min: 0,
                                  max: yb(Lb, Yb),
                                  step: .1,
                                  value: yb(Lb, HS.lowpassHz),
                                  format: () => `${HS.lowpassHz} Hz`,
                                  onChange: SS => {
                                    gS({
                                      lowpassHz: Vb(Lb, SS)
                                    })
                                  }
                                })]
                              }), (0, KS.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, KS.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), zb.map((SS => {
                                  let {
                                    key: tS,
                                    label: bS,
                                    max: XS
                                  } = SS;
                                  return (0, KS.jsx)(rt, {
                                    label: bS,
                                    min: 0,
                                    max: XS,
                                    step: .1,
                                    value: HS.intonation[tS],
                                    format: Wb,
                                    onChange: SS => {
                                      gS({
                                        intonation: {
                                          ...HS.intonation,
                                          [tS]: SS
                                        }
                                      })
                                    }
                                  }, tS)
                                }))]
                              })]
                            })
                          }
                          const pb = Object.keys(Jb.g),
                            sb = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function Bb(SS) {
                            var HS;
                            const gS = JSON.stringify((0, Jb.j)(SS));
                            return null !== (HS = pb.find((SS => JSON.stringify((0, Jb.j)(Jb.g[SS])) === gS))) && void 0 !== HS ? HS : null
                          }

                          function Mb(SS) {
                            let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof SS || null === SS) return JSON.stringify(SS);
                            return `{\n${Object.entries(SS).map((SS=>{let[gS,tS]=SS;return`${HS}    ${gS}: ${Mb(tS,`${HS}    `)},`})).join("\n")}\n${HS}}`
                          }

                          function Fb(SS, HS, gS) {
                            const tS = Bb(SS),
                              bS = [`    line: ${JSON.stringify(HS)},`];
                            return gS && bS.push(`    speakerName: ${JSON.stringify(gS)},`), bS.push("    voice,"), `const voice = ${tS?JSON.stringify(tS):Mb((0,Jb.j)(SS))}\n\napi.setClientOption(playerId, "dialogue", {\n${bS.join("\n")}\n})`
                          }
                          const Rb = 400,
                            Tb = 90;
                          let ob = null;

                          function lb(SS, HS, gS) {
                            return ob ??= new AudioContext, ob.resume(), (0, cb.c)(ob, ob.destination, SS, HS, gS, (() => {}))
                          }

                          function mb() {
                            const [SS, HS] = (0, tS.useState)(Jb.g.regular), [gS, bS] = (0, tS.useState)(sb[0]), [xS, NS] = (0, tS.useState)("Innkeeper"), [qS, uS] = (0, tS.useState)(0), IS = It((SS => SS.volume)), fS = (0, tS.useRef)(null), kS = (0, tS.useRef)(0), aS = (0, tS.useRef)(0), jS = () => {
                              var SS;
                              null === (SS = fS.current) || void 0 === SS || SS.call(fS), fS.current = null
                            };
                            (0, tS.useEffect)((() => () => {
                              var SS;
                              null === (SS = fS.current) || void 0 === SS || SS.call(fS), window.clearTimeout(kS.current)
                            }), []);
                            const CS = (0, tS.useMemo)((() => ({
                                line: gS,
                                speakerName: xS || void 0,
                                voice: SS
                              })), [gS, xS, SS]),
                              nS = (0, tS.useRef)(CS);
                            nS.current = CS;
                            const QS = Bb(SS),
                              DS = SS => {
                                window.clearTimeout(kS.current), jS();
                                const {
                                  plan: HS,
                                  synth: gS
                                } = (0, db.g)(SS);
                                gS && (fS.current = lb(gS, HS.blips, IS)), uS((SS => SS + 1))
                              },
                              wS = Fb(SS, gS, xS);
                            return (0, KS.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, KS.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, KS.jsxs)("div", {
                                  children: [(0, KS.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, KS.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, KS.jsx)(PS, {
                                  text: wS,
                                  label: "Copy code"
                                })]
                              }), (0, KS.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [pb.map((SS => (0, KS.jsx)("button", {
                                  type: "button",
                                  className: XS()("DocsVariantChip", {
                                    Active: QS === SS
                                  }),
                                  "aria-pressed": QS === SS,
                                  onClick: () => {
                                    (SS => {
                                      const gS = Jb.g[SS];
                                      HS(gS), DS({
                                        ...CS,
                                        voice: gS
                                      })
                                    })(SS)
                                  },
                                  children: SS
                                }, SS))), !QS && (0, KS.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, KS.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, KS.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, KS.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, KS.jsx)(Ob.e, {
                                      display: CS
                                    }, qS)
                                  }), (0, KS.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: SS => {
                                      SS.preventDefault(), DS(CS)
                                    },
                                    children: [(0, KS.jsx)("input", {
                                      value: gS,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: SS => {
                                        bS(SS.target.value)
                                      }
                                    }), (0, KS.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, KS.jsx)(GS, {
                                        name: "play"
                                      }), (0, KS.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, KS.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: sb.map((SS => (0, KS.jsx)("button", {
                                      type: "button",
                                      className: XS()("DocsVariantChip", {
                                        Active: gS === SS
                                      }),
                                      onClick: () => {
                                        var HS;
                                        bS(HS = SS), DS({
                                          ...CS,
                                          line: HS
                                        })
                                      },
                                      children: SS
                                    }, SS)))
                                  }), (0, KS.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, KS.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, KS.jsx)("input", {
                                      value: xS,
                                      placeholder: "No name",
                                      onChange: SS => {
                                        NS(SS.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, KS.jsx)(Ub, {
                                  synth: SS,
                                  onChange: gS => {
                                    const tS = {
                                      ...SS,
                                      ...gS
                                    };
                                    HS(tS);
                                    const bS = {
                                        ...CS,
                                        voice: tS
                                      },
                                      XS = performance.now();
                                    if (XS - aS.current >= Tb) {
                                      aS.current = XS, jS();
                                      const SS = (0, db.g)(bS).plan.blips[0];
                                      SS && (fS.current = lb((0, Jb.j)(tS), [{
                                        ...SS,
                                        atMs: 0
                                      }], IS))
                                    }
                                    window.clearTimeout(kS.current), kS.current = window.setTimeout((() => {
                                      DS(nS.current)
                                    }), Rb)
                                  }
                                })]
                              }), (0, KS.jsx)(hS, {
                                code: wS,
                                lang: "ts"
                              })]
                            })
                          }
                          var eb = gS(5017);
                          const rb = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            SX = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            HX = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${SX}`, "g"), eb.m],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, eb.m]
                            ];

                          function gX(SS) {
                            return `${SS.pageId}#${SS.anchor}`
                          }
                          let tX, bX, XX;

                          function xX(SS) {
                            const HS = (0, ZS.f)(SS),
                              gS = new Set;
                            for (const [, , tS] of HS.matchAll(ZS.d)) {
                              const SS = tS.startsWith("#") ? sS(tS) : null,
                                HS = SS ? gX({
                                  pageId: SS.page.id,
                                  anchor: SS.anchor
                                }) : null;
                              null !== HS && (tX || (tX = new Set(VS.flatMap((SS => cS(SS.layout) ? US(SS).sections.map((HS => gX({
                                pageId: SS.id,
                                anchor: HS.heading.anchor
                              }))) : [])))), tX).has(HS) && gS.add(HS)
                            }
                            for (const [, , tS] of HS.matchAll(rb)) {
                              const SS = kH(tS);
                              SS && gS.add(gX(SS))
                            }
                            return gS
                          }

                          function NX(SS, HS) {
                            const gS = new Set,
                              tS = function(SS) {
                                return SS.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(SS);
                            for (const [, bS] of tS.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) gS.add(bS);
                            for (const [bS, XS] of HX)
                              for (const [, SS] of(0, eb.f)(tS, bS, XS)) HS.has(SS) && gS.add(SS);
                            return gS
                          }

                          function qX(SS, HS, gS, tS) {
                            const bS = SS.get(HS);
                            bS ? !tS && bS.some((SS => SS.pageId === gS.pageId)) || bS.push(gS) : SS.set(HS, [gS])
                          }
                          const uX = /^[A-Za-z_$][\w$]*$/;

                          function IX(SS) {
                            return uX.test(SS.name) ? SS.name : "options"
                          }

                          function fX(SS, HS) {
                            const gS = SS.params.map(IX).join(", ");
                            return HS ? `${SS.name} = (${gS}) => {\n\t\n}` : `api.${SS.name}(${gS})`
                          }

                          function kX(SS) {
                            let {
                              method: HS,
                              isCallback: gS
                            } = SS;
                            return (0, KS.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, KS.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [gS ? (0, KS.jsxs)(KS.Fragment, {
                                  children: [(0, KS.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: HS.name
                                  }), (0, KS.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, KS.jsxs)(KS.Fragment, {
                                  children: [(0, KS.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, KS.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: HS.name
                                  }), (0, KS.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), HS.params.map(((SS, gS) => (0, KS.jsxs)(tS.Fragment, {
                                  children: [gS > 0 && (0, KS.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, KS.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${HS.name}-${IX(SS)}`,
                                    children: SS.name
                                  })]
                                }, SS.name))), (0, KS.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: gS ? ") => " : ")"
                                }), gS && !HS.returns && (0, KS.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), HS.returns && HS.returns.type && (0, KS.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!gS && (0, KS.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, KS.jsx)(JH, {
                                  type: HS.returns.type
                                })]
                              })]
                            })
                          }

                          function aX(SS) {
                            let {
                              title: HS,
                              references: gS
                            } = SS;
                            const bS = (0, tS.useContext)(aH);
                            return (0, KS.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, KS.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: HS
                              }), gS.map((SS => (0, KS.jsx)(xS.c, {
                                to: MS(bS, WS(SS.pageId), SS.anchor),
                                children: SS.label
                              }, `${SS.pageId}#${SS.anchor}`)))]
                            })
                          }

                          function KX(SS) {
                            var HS, gS;
                            let {
                              pageId: tS,
                              anchor: bS
                            } = SS;
                            const XS = gX({
                                pageId: tS,
                                anchor: bS
                              }),
                              xS = null !== (HS = function() {
                                if (!XX) {
                                  XX = new Map;
                                  const tS = new Set(VS.filter((SS => "callbacks" === SS.layout)).flatMap((SS => US(SS).sections.map((SS => SS.heading.text)))));
                                  for (const bS of VS)
                                    if ("article" === bS.layout || "snippets" === bS.layout)
                                      for (const XS of (0, ZS.u)(US(bS)))
                                        for (const {
                                            code: xS
                                          }
                                          of(0, ZS.h)(XS.blocks))
                                          for (const NS of NX(xS, tS)) {
                                            const tS = fH().get(NS);
                                            if (tS) {
                                              var SS, HS, gS;
                                              const xS = {
                                                pageId: bS.id,
                                                anchor: null !== (SS = null === (HS = XS.heading) || void 0 === HS ? void 0 : HS.anchor) && void 0 !== SS ? SS : "",
                                                label: null !== (gS = bS.navTitle) && void 0 !== gS ? gS : bS.title
                                              };
                                              qX(XX, gX(tS), xS, !1)
                                            }
                                          }
                                }
                                return XX
                              }().get(XS)) && void 0 !== HS ? HS : [],
                              NS = null !== (gS = function() {
                                if (!bX) {
                                  bX = new Map;
                                  const SS = WS("changelog");
                                  for (const HS of US(SS).sections) {
                                    const gS = new Set(HS.blocks.flatMap((SS => [...xX(SS)])));
                                    for (const tS of gS) {
                                      const gS = {
                                        pageId: SS.id,
                                        anchor: HS.heading.anchor,
                                        label: HS.heading.text
                                      };
                                      qX(bX, tS, gS, !0)
                                    }
                                  }
                                }
                                return bX
                              }().get(XS)) && void 0 !== gS ? gS : [];
                            return 0 === xS.length && 0 === NS.length ? null : (0, KS.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [xS.length > 0 && (0, KS.jsx)(aX, {
                                title: "Used in",
                                references: xS
                              }), NS.length > 0 && (0, KS.jsx)(aX, {
                                title: "Changelog",
                                references: NS
                              })]
                            })
                          }

                          function jX(SS) {
                            let {
                              method: HS,
                              pageId: gS,
                              anchor: tS,
                              isCallback: bS
                            } = SS;
                            const XS = bS ? void 0 : NH().get(HS.name),
                              xS = HS.description.length > 0 || null === XS || void 0 === XS || !XS.description ? HS.description : (0, ZS.A)(XS.description);
                            return (0, KS.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, KS.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, KS.jsx)(ug, {
                                  level: 2,
                                  text: HS.name,
                                  anchor: tS,
                                  className: "DocsCardTitle"
                                }), (0, KS.jsx)(PS, {
                                  text: fX(HS, bS),
                                  label: bS ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, KS.jsx)(kX, {
                                method: HS,
                                isCallback: bS
                              }), XS && null !== XS.deprecation && (0, KS.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, KS.jsx)("strong", {
                                  children: "Deprecated"
                                }), XS.deprecation && (0, KS.jsxs)(KS.Fragment, {
                                  children: [": ", (0, KS.jsx)(wH, {
                                    text: (NS = XS.deprecation, (0, eb.v)(NS, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, eb.k)("`\\w"), (SS => {
                                      let [HS] = SS;
                                      return fH().has(HS) ? `\`${HS}\`` : HS
                                    })))
                                  })]
                                })]
                              }), xS.length > 0 && (0, KS.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, KS.jsx)(ag, {
                                  blocks: xS
                                })
                              }), HS.params.length > 0 && (0, KS.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, KS.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, KS.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: HS.params.map((SS => (0, KS.jsxs)("div", {
                                    id: `${HS.name}-${IX(SS)}`,
                                    className: "DocsParam",
                                    children: [(0, KS.jsxs)("dt", {
                                      children: [(0, KS.jsx)("code", {
                                        className: "DocsParamName",
                                        children: SS.name
                                      }), (0, KS.jsx)(JH, {
                                        type: SS.type
                                      })]
                                    }), SS.description && (0, KS.jsx)("dd", {
                                      children: (0, KS.jsx)(wH, {
                                        text: SS.description
                                      })
                                    })]
                                  }, SS.name)))
                                })]
                              }), HS.returns && (HS.returns.type || HS.returns.description.length > 0) && (0, KS.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, KS.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, KS.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [HS.returns.type && (0, KS.jsx)(JH, {
                                    type: HS.returns.type
                                  }), HS.returns.description.length > 0 && (0, KS.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, KS.jsx)(ag, {
                                      blocks: HS.returns.description
                                    })
                                  })]
                                })]
                              }), (0, KS.jsx)(KX, {
                                pageId: gS,
                                anchor: tS
                              })]
                            });
                            var NS
                          }

                          function GX(SS) {
                            var HS;
                            return null !== SS.defaultValue && "undefined" !== SS.defaultValue ? SS.defaultValue : null !== (HS = SS.example) && void 0 !== HS ? HS : "value"
                          }

                          function CX(SS) {
                            let {
                              setting: HS,
                              pageId: gS,
                              anchor: tS,
                              setterSnippet: bS
                            } = SS;
                            const XS = null === HS.defaultValue ? null : CH(HS.defaultValue);
                            return (0, KS.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, KS.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, KS.jsx)(ug, {
                                  level: 2,
                                  text: HS.name,
                                  anchor: tS,
                                  className: "DocsCardTitle"
                                }), (0, KS.jsx)(PS, {
                                  text: bS(HS.name, GX(HS)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, KS.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, KS.jsxs)("div", {
                                  children: [(0, KS.jsx)("dt", {
                                    children: "Type"
                                  }), (0, KS.jsx)("dd", {
                                    children: (0, KS.jsx)(JH, {
                                      type: HS.type
                                    })
                                  })]
                                }), null !== HS.defaultValue && (0, KS.jsxs)("div", {
                                  children: [(0, KS.jsx)("dt", {
                                    children: "Default"
                                  }), (0, KS.jsx)("dd", {
                                    children: (0, KS.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [XS && (0, KS.jsx)(nH, {
                                        colour: XS
                                      }), HS.defaultValue]
                                    })
                                  })]
                                }), null !== HS.example && (0, KS.jsxs)("div", {
                                  children: [(0, KS.jsx)("dt", {
                                    children: "Example"
                                  }), (0, KS.jsx)("dd", {
                                    children: (0, KS.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: HS.example
                                    })
                                  })]
                                })]
                              }), HS.description.length > 0 && (0, KS.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, KS.jsx)(ag, {
                                  blocks: HS.description
                                })
                              }), (0, KS.jsx)(KX, {
                                pageId: gS,
                                anchor: tS
                              })]
                            })
                          }

                          function nX(SS) {
                            let {
                              section: HS
                            } = SS;
                            return (0, KS.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, KS.jsx)(ug, {
                                level: 2,
                                text: HS.heading.text,
                                anchor: HS.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, KS.jsx)("div", {
                                className: "DocsProse",
                                children: (0, KS.jsx)(ag, {
                                  blocks: HS.blocks
                                })
                              })]
                            })
                          }

                          function PX(SS) {
                            let {
                              section: HS
                            } = SS;
                            return (0, KS.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, KS.jsx)(ug, {
                                level: HS.heading.level,
                                text: HS.heading.text,
                                anchor: HS.heading.anchor
                              }), (0, KS.jsx)(ag, {
                                blocks: HS.blocks
                              })]
                            })
                          }
                          const QX = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function DX(SS) {
                            let {
                              page: HS,
                              section: gS
                            } = SS;
                            if ("methods" === HS.layout || "callbacks" === HS.layout) return (0, KS.jsx)(jX, {
                              method: hg(gS),
                              pageId: HS.id,
                              anchor: gS.heading.anchor,
                              isCallback: "callbacks" === HS.layout
                            });
                            if ("settings" === HS.layout) {
                              const SS = function(SS) {
                                const HS = {
                                  name: SS.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const tS of SS.blocks) {
                                  var gS;
                                  if (wg(tS)) continue;
                                  const SS = "paragraph" === tS.kind ? tS.text.match(Zg) : null;
                                  if (!SS) {
                                    HS.description.push(tS);
                                    continue
                                  }
                                  const bS = null !== (gS = Dg(SS[2])) && void 0 !== gS ? gS : SS[2];
                                  "Type" === SS[1] ? HS.type = bS : "Default" === SS[1] ? HS.defaultValue = bS : "" !== bS && (HS.example = bS)
                                }
                                return HS.type ? HS : null
                              }(gS);
                              if (SS) return (0, KS.jsx)(CX, {
                                setting: SS,
                                pageId: HS.id,
                                anchor: gS.heading.anchor,
                                setterSnippet: HS.setterSnippet
                              })
                            }
                            return "snippets" === HS.layout ? (0, KS.jsx)(nX, {
                              section: gS
                            }) : "changelog" === HS.layout ? (0, KS.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, KS.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, KS.jsx)(ug, {
                                  level: 2,
                                  text: gS.heading.text,
                                  anchor: gS.heading.anchor
                                })
                              }), (0, KS.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, KS.jsx)(ag, {
                                  blocks: Jg(gS.blocks)
                                })
                              })]
                            }) : HS.gallery ? (0, KS.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, KS.jsx)(ug, {
                                level: gS.heading.level,
                                text: gS.heading.text,
                                anchor: gS.heading.anchor
                              }), (0, KS.jsx)(dt, {
                                kind: HS.gallery,
                                content: US(HS),
                                blocks: gS.blocks
                              })]
                            }) : (0, KS.jsx)(PX, {
                              section: gS
                            })
                          }

                          function wX(SS) {
                            let {
                              page: HS,
                              onTocChange: gS
                            } = SS;
                            const bS = US(HS),
                              [XS, xS] = (0, tS.useState)(""),
                              NS = "article" !== HS.layout,
                              qS = Gg(HS.gallery) ? HS.gallery : null,
                              uS = null !== qS,
                              IS = XS.trim().toLowerCase(),
                              fS = (0, tS.useRef)(null),
                              kS = (0, tS.useCallback)((SS => {
                                var HS;
                                null === (HS = fS.current) || void 0 === HS || HS.preview(SS)
                              }), []),
                              aS = (0, tS.useMemo)((() => {
                                if (!HS.hasParticlePlayground) return [];
                                const SS = vg(bS.intro).find((SS => "names" === SS.kind && !SS.names.some((SS => null !== zg(SS.name)))));
                                return "names" === (null === SS || void 0 === SS ? void 0 : SS.kind) ? SS.names.map((SS => SS.name)) : []
                              }), [HS, bS]),
                              jS = (0, tS.useMemo)((() => {
                                if (!HS.hasTextPlayground) return [];
                                const SS = bS.sections.flatMap((SS => SS.blocks.flatMap((SS => {
                                  var HS;
                                  return (null !== (HS = cg(SS)) && void 0 !== HS ? HS : []).flatMap((SS => zH(SS.name) ? [SS.name] : []))
                                }))));
                                return [...new Set(SS)]
                              }), [HS, bS]),
                              GS = (0, tS.useMemo)((() => IS ? bS.sections.filter((SS => function(SS, HS) {
                                return !!SS.heading.text.toLowerCase().includes(HS) || SS.blocks.some((SS => (0, ZS.f)(SS).toLowerCase().includes(HS)))
                              }(SS, IS))) : bS.sections), [bS, IS]),
                              CS = (0, tS.useMemo)((() => function(SS, HS) {
                                return "article" !== SS.layout ? HS.map((SS => ({
                                  anchor: SS.heading.anchor,
                                  text: SS.heading.text,
                                  level: 2
                                }))) : HS.flatMap((SS => {
                                  const HS = SS.blocks.flatMap((SS => "heading" === SS.kind && 3 === SS.level ? [{
                                    anchor: SS.anchor,
                                    text: SS.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: SS.heading.anchor,
                                    text: SS.heading.text,
                                    level: 2
                                  }, ...HS]
                                }))
                              }(HS, GS)), [HS, GS]);
                            return (0, tS.useEffect)((() => {
                              gS(CS)
                            }), [CS, gS]), (0, KS.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, KS.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, KS.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: bS.title || HS.title
                                }), (0, KS.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: HS.summary
                                }), (0, KS.jsx)(ot, {
                                  page: HS
                                }), NS && (0, KS.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, KS.jsxs)("span", {
                                    children: [(0, KS.jsx)("strong", {
                                      children: bS.sections.length
                                    }), " ", QX[HS.layout]]
                                  })
                                })]
                              }), "" === HS.slug && (0, KS.jsx)(vt, {}), qS && (0, KS.jsx)(At, {
                                kind: qS
                              }, qS), HS.hasParticlePlayground && (0, KS.jsx)(qb, {
                                ref: fS,
                                textures: aS
                              }), !uS && bS.intro.length > 0 && (0, KS.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: HS.gallery ? (0, KS.jsx)(nt.Provider, {
                                  value: HS.hasParticlePlayground ? kS : null,
                                  children: (0, KS.jsx)(dt, {
                                    kind: HS.gallery,
                                    content: bS,
                                    blocks: bS.intro
                                  })
                                }) : (0, KS.jsx)(ag, {
                                  blocks: Jg(bS.intro)
                                })
                              }), HS.hasTextPlayground && (0, KS.jsx)(Zb, {
                                fontAwesomeIcons: jS
                              }), HS.hasVoicePlayground && (0, KS.jsx)(mb, {}), HS.childPageIds && (0, KS.jsx)(vt, {
                                cards: HS.childPageIds.map((SS => ({
                                  pageId: SS
                                }))),
                                label: HS.title
                              }), NS && (0, KS.jsx)(Pg, {
                                className: "DocsFilterBar",
                                value: XS,
                                placeholder: `Filter ${bS.sections.length} ${QX[HS.layout]}\u2026`,
                                label: `Filter ${QX[HS.layout]}`,
                                onChange: xS,
                                count: IS ? {
                                  visible: GS.length,
                                  total: bS.sections.length
                                } : null
                              }), !uS && (0, KS.jsxs)("div", {
                                className: `DocsSections Layout-${HS.layout}`,
                                children: [GS.map((SS => (0, KS.jsx)(DX, {
                                  page: HS,
                                  section: SS
                                }, SS.heading.anchor))), 0 === GS.length && (0, KS.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", QX[HS.layout], " match \u201c", XS, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const hX = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function ZX(SS) {
                            let {
                              entry: HS,
                              isActive: gS,
                              onNavigate: tS,
                              label: bS,
                              children: xS
                            } = SS;
                            return (0, KS.jsx)("a", {
                              href: `#${HS.anchor}`,
                              "aria-label": bS,
                              className: XS()(`Level${HS.level}`, {
                                Active: gS
                              }),
                              "aria-current": gS ? "location" : void 0,
                              onClick: SS => {
                                SS.preventDefault(), tS(HS.anchor)
                              },
                              children: xS
                            })
                          }

                          function JX(SS) {
                            let {
                              toc: HS,
                              activeAnchor: gS,
                              onNavigate: bS
                            } = SS;
                            const xS = Math.max(0, HS.findIndex((SS => SS.anchor === gS))),
                              NS = (0, tS.useRef)(null),
                              qS = (0, tS.useRef)(!1);
                            (0, tS.useEffect)((() => {
                              var SS, gS;
                              const tS = null === (SS = NS.current) || void 0 === SS ? void 0 : SS.closest(".DocsToc"),
                                bS = null === (gS = NS.current) || void 0 === gS ? void 0 : gS.querySelector(".DocsTimelineNotch.Active");
                              if (!tS || !bS) return;
                              let XS = 0;
                              if (xS === HS.length - 1) XS = tS.scrollHeight;
                              else if (xS > 0) {
                                const SS = tS.getBoundingClientRect(),
                                  HS = bS.getBoundingClientRect();
                                XS = tS.scrollTop + HS.top + HS.height / 2 - (SS.top + tS.clientHeight / 2)
                              }
                              tS.scrollTo({
                                top: XS,
                                behavior: qS.current ? "smooth" : "auto"
                              }), qS.current = !0
                            }), [xS, HS.length]);
                            const uS = [];
                            return HS.forEach(((SS, HS) => {
                              var gS, tS, bS;
                              const XS = function(SS) {
                                  const HS = SS.trim().match(hX);
                                  return HS ? {
                                    day: HS[1],
                                    month: `${HS[2]} ${HS[3]}`
                                  } : null
                                }(SS.text),
                                xS = null !== (gS = null === XS || void 0 === XS ? void 0 : XS.month) && void 0 !== gS ? gS : null;
                              null !== xS && (null === (tS = uS.at(-1)) || void 0 === tS ? void 0 : tS.month) === xS || uS.push({
                                month: xS,
                                entries: []
                              }), uS.at(-1).entries.push({
                                entry: SS,
                                day: null !== (bS = null === XS || void 0 === XS ? void 0 : XS.day) && void 0 !== bS ? bS : null,
                                index: HS
                              })
                            })), (0, KS.jsx)("ol", {
                              ref: NS,
                              className: "DocsTimeline",
                              children: uS.map((SS => {
                                let {
                                  month: HS,
                                  entries: gS
                                } = SS;
                                return (0, KS.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [HS && (0, KS.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: HS
                                  }), (0, KS.jsx)("ol", {
                                    children: gS.map((SS => {
                                      let {
                                        entry: HS,
                                        day: gS,
                                        index: tS
                                      } = SS;
                                      return (0, KS.jsx)("li", {
                                        className: XS()("DocsTimelineNotch", {
                                          Passed: tS < xS,
                                          Active: tS === xS
                                        }),
                                        children: (0, KS.jsx)(ZX, {
                                          entry: HS,
                                          isActive: tS === xS,
                                          onNavigate: bS,
                                          label: HS.text,
                                          children: (0, KS.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== gS && void 0 !== gS ? gS : HS.text
                                          })
                                        })
                                      }, HS.anchor)
                                    }))
                                  })]
                                }, gS[0].entry.anchor)
                              }))
                            })
                          }

                          function OX(SS) {
                            let {
                              isChangelog: HS,
                              toc: gS,
                              activeAnchor: tS,
                              onNavigate: bS
                            } = SS;
                            return 0 === gS.length ? null : (0, KS.jsxs)(KS.Fragment, {
                              children: [(0, KS.jsx)("div", {
                                className: "DocsTocTitle",
                                children: HS ? "Updates" : "On this page"
                              }), HS ? (0, KS.jsx)(JX, {
                                toc: gS,
                                activeAnchor: tS,
                                onNavigate: bS
                              }) : (0, KS.jsx)("ul", {
                                children: gS.map((SS => (0, KS.jsx)("li", {
                                  children: (0, KS.jsx)(ZX, {
                                    entry: SS,
                                    isActive: SS.anchor === tS,
                                    onNavigate: bS,
                                    children: SS.text.replace(/`/g, "")
                                  })
                                }, SS.anchor)))
                              })]
                            })
                          }
                          const dX = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            cX = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            vX = 20,
                            EX = 10,
                            LX = 40,
                            YX = 120;
                          let AX;

                          function yX(SS) {
                            const HS = SS.gallery;
                            if (!HS) return [];
                            if (Gg(HS)) return function(SS) {
                              return ng(SS).entries.map((SS => SS.name))
                            }(HS).map((gS => ({
                              page: SS,
                              anchor: Lg(HS, gS),
                              title: gS,
                              kind: cX[HS],
                              text: "",
                              listedUnder: SS.title
                            })));
                            const gS = US(SS);
                            return (0, ZS.u)(gS).flatMap((tS => {
                              const bS = tS.heading ? `${SS.title} \u203a ${tS.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : SS.title;
                              return Ag(HS, gS, tS.blocks).flatMap((gS => "names" !== gS.kind ? [] : gS.names.map((tS => {
                                const XS = gS.isSongs ? "Song" : cX[HS];
                                return {
                                  page: SS,
                                  anchor: tS.anchor,
                                  title: tS.name,
                                  kind: XS,
                                  text: "",
                                  listedUnder: bS
                                }
                              }))))
                            }))
                          }

                          function VX(SS, HS, gS) {
                            const tS = SS.title.toLowerCase();
                            let bS = 0;
                            if (tS === HS) bS = 100;
                            else if (tS.startsWith(HS)) bS = 80;
                            else if (tS.includes(HS)) bS = 60;
                            else if (gS.every((SS => tS.includes(SS)))) bS = 45;
                            else {
                              if (!SS.text.toLowerCase().includes(HS)) return 0;
                              bS = 20
                            }
                            return bS - Math.min(tS.length / 10, 9) + ("Page" === SS.kind ? 8 : "Method" === SS.kind ? 3 : 0) - (SS.listedUnder ? vX : 0)
                          }

                          function iX(SS, HS) {
                            const gS = SS.toLowerCase().indexOf(HS),
                              tS = Math.max(0, gS - YX / 3);
                            return `${tS>0?"\u2026":""}${SS.slice(tS,tS+YX)}${tS+YX<SS.length?"\u2026":""}`
                          }

                          function WX(SS) {
                            let {
                              text: HS,
                              query: gS
                            } = SS;
                            const tS = gS ? HS.toLowerCase().indexOf(gS) : -1;
                            return -1 === tS ? (0, KS.jsx)(KS.Fragment, {
                              children: HS
                            }) : (0, KS.jsxs)(KS.Fragment, {
                              children: [HS.slice(0, tS), (0, KS.jsx)("mark", {
                                children: HS.slice(tS, tS + gS.length)
                              }), HS.slice(tS + gS.length)]
                            })
                          }

                          function zX(SS) {
                            let {
                              basePath: HS,
                              onClose: gS
                            } = SS;
                            const bS = (0, NS.u)(),
                              [xS, qS] = (0, tS.useState)(""),
                              [uS, IS] = (0, tS.useState)(0),
                              fS = (0, tS.useRef)(null),
                              kS = (0, tS.useRef)(null),
                              aS = xS.trim().toLowerCase(),
                              jS = (0, tS.useMemo)((() => {
                                const SS = (AX || (AX = VS.flatMap((SS => {
                                  const HS = US(SS);
                                  return [{
                                    page: SS,
                                    anchor: "",
                                    title: SS.title,
                                    kind: "Page",
                                    text: SS.summary
                                  }, ...HS.sections.flatMap((HS => {
                                    const gS = HS.blocks.filter((SS => "paragraph" === SS.kind)).map(ZS.f).join(" ").replace(/[`*]/g, ""),
                                      tS = {
                                        page: SS,
                                        anchor: HS.heading.anchor,
                                        title: HS.heading.text.replace(/`/g, ""),
                                        kind: dX[SS.layout],
                                        text: gS
                                      },
                                      bS = HS.blocks.flatMap((HS => "article" === SS.layout && "heading" === HS.kind && 3 === HS.level ? [{
                                        page: SS,
                                        anchor: HS.anchor,
                                        title: HS.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: tS.title
                                      }] : []));
                                    return [tS, ...bS]
                                  })), ...yX(SS)]
                                }))), AX);
                                if (!aS) return SS.filter((SS => "Page" === SS.kind));
                                const HS = aS.split(/\s+/);
                                let gS = 0;
                                return SS.map((SS => ({
                                  entry: SS,
                                  score: VX(SS, aS, HS)
                                }))).filter((SS => SS.score > 0)).sort(((SS, HS) => HS.score - SS.score)).filter((SS => !SS.entry.listedUnder || (gS++, gS <= EX))).slice(0, LX).map((SS => SS.entry))
                              }), [aS]);
                            (0, tS.useEffect)((() => {
                              IS(0)
                            }), [aS]), (0, tS.useEffect)((() => {
                              const SS = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === SS || void 0 === SS || SS.focus()
                              }
                            }), []), (0, tS.useEffect)((() => {
                              var SS, HS;
                              null === (SS = fS.current) || void 0 === SS || null === (HS = SS.querySelector(".Active")) || void 0 === HS || HS.scrollIntoView({
                                block: "nearest"
                              })
                            }), [uS]);
                            const CS = SS => {
                              bS(MS(HS, SS.page, SS.anchor)), gS()
                            };
                            return (0, KS.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: SS => {
                                SS.target === SS.currentTarget && gS()
                              },
                              children: (0, KS.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: SS => {
                                  SS.target !== kS.current && SS.preventDefault()
                                },
                                onKeyDown: SS => {
                                  if ("Escape" === SS.key) gS();
                                  else if ("Tab" === SS.key) {
                                    var HS;
                                    SS.preventDefault(), null === (HS = kS.current) || void 0 === HS || HS.focus()
                                  }
                                },
                                children: [(0, KS.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, KS.jsx)(GS, {
                                    name: "magnifying-glass"
                                  }), (0, KS.jsx)("input", {
                                    ref: kS,
                                    autoFocus: !0,
                                    value: xS,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": jS.length > 0 ? `DocsSearchResult-${uS}` : void 0,
                                    onChange: SS => {
                                      qS(SS.target.value)
                                    },
                                    onKeyDown: SS => {
                                      if ("ArrowDown" === SS.key || "ArrowUp" === SS.key) {
                                        SS.preventDefault();
                                        const HS = "ArrowDown" === SS.key ? 1 : -1;
                                        IS((uS + HS + jS.length) % Math.max(jS.length, 1))
                                      } else "Enter" === SS.key && jS[uS] && CS(jS[uS])
                                    }
                                  }), (0, KS.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, KS.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: fS,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!aS && (0, KS.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), jS.map(((SS, HS) => {
                                    var gS;
                                    return (0, KS.jsxs)("li", {
                                      id: `DocsSearchResult-${HS}`,
                                      role: "option",
                                      "aria-selected": HS === uS,
                                      className: XS()("DocsSearchResult", {
                                        Active: HS === uS
                                      }),
                                      onMouseMove: () => {
                                        IS(HS)
                                      },
                                      onClick: () => {
                                        CS(SS)
                                      },
                                      children: [(0, KS.jsx)(GS, {
                                        name: SS.page.icon
                                      }), (0, KS.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, KS.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, KS.jsx)(WX, {
                                            text: SS.title,
                                            query: aS
                                          })
                                        }), SS.text && (0, KS.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, KS.jsx)(WX, {
                                            text: iX(SS.text, aS),
                                            query: aS
                                          })
                                        })]
                                      }), (0, KS.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === SS.kind ? "Page" : null !== (gS = SS.listedUnder) && void 0 !== gS ? gS : `${SS.kind} \xb7 ${SS.page.title}`
                                      })]
                                    }, `${SS.page.id}#${SS.anchor}`)
                                  })), aS && 0 === jS.length && (0, KS.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", xS, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function UX(SS, HS) {
                            if (HS < 10) return `${SS.toFixed(1)}s`;
                            const gS = Math.floor(SS);
                            return `${Math.floor(gS/60)}:${String(gS%60).padStart(2,"0")}`
                          }

                          function pX() {
                            const SS = It((SS => SS.track)),
                              HS = It((SS => SS.volume)),
                              [gS, bS] = (0, tS.useState)(0),
                              xS = (0, tS.useRef)(Ht);
                            if ((0, tS.useEffect)((() => {
                                if (!SS) return;
                                if (bS(jt()), "playing" !== SS.status) return;
                                let HS = 0;
                                const gS = () => {
                                  bS(jt()), HS = requestAnimationFrame(gS)
                                };
                                return HS = requestAnimationFrame(gS), () => {
                                  cancelAnimationFrame(HS)
                                }
                              }), [SS]), !SS) return null;
                            const NS = "paused" !== SS.status,
                              qS = Math.min(gS, SS.duration);
                            return (0, KS.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, KS.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, KS.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": NS ? `Pause ${SS.name}` : `Play ${SS.name}`,
                                  onClick: Kt,
                                  children: (0, KS.jsx)(GS, {
                                    name: NS ? "pause" : "play"
                                  })
                                }), (0, KS.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, KS.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, KS.jsx)("code", {
                                      children: SS.name
                                    }), (0, KS.jsx)("span", {
                                      children: SS.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, KS.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, KS.jsx)("span", {
                                      children: UX(qS, SS.duration)
                                    }), (0, KS.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: SS.duration || 1,
                                      step: .01,
                                      value: qS,
                                      disabled: 0 === SS.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${UX(qS,SS.duration)} of ${UX(SS.duration,SS.duration)}`,
                                      onChange: SS => {
                                        const HS = Number(SS.target.value);
                                        ! function(SS) {
                                          var HS;
                                          xt = SS, null === (HS = bt) || void 0 === HS || HS.seek(SS)
                                        }(HS), bS(HS)
                                      }
                                    }), (0, KS.jsx)("span", {
                                      children: SS.duration > 0 ? UX(SS.duration, SS.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, KS.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, KS.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === HS ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === HS ? Gt(xS.current) : (xS.current = HS, Gt(0))
                                    },
                                    children: (0, KS.jsx)(GS, {
                                      name: "volume",
                                      className: XS()({
                                        Muted: 0 === HS
                                      })
                                    })
                                  }), (0, KS.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: HS,
                                    "aria-label": "Volume",
                                    onChange: SS => {
                                      Gt(Number(SS.target.value))
                                    }
                                  })]
                                }), (0, KS.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var HS;
                                    null === (HS = document.querySelector(`[data-docs-track="${CSS.escape(gt(SS.name,SS.isSong))}"]`)) || void 0 === HS || HS.focus(), Ct()
                                  },
                                  children: (0, KS.jsx)(GS, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var sX = gS(45);
                          const BX = "docsTheme",
                            MX = window.matchMedia("(prefers-color-scheme: light)");

                          function FX(SS) {
                            let {
                              theme: HS,
                              onChange: gS
                            } = SS;
                            const tS = "dark" === HS ? "light" : "dark";
                            return (0, KS.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${tS} theme`,
                              title: `Switch to ${tS} theme`,
                              onClick: () => {
                                gS(tS)
                              },
                              children: (0, KS.jsx)(GS, {
                                name: "dark" === HS ? "moon" : "sun"
                              })
                            })
                          }
                          const RX = "https://github.com/Bloxdy/code-api",
                            TX = "https://discord.gg/playbloxd",
                            oX = 180,
                            lX = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function mX(SS) {
                            let {
                              basePath: HS,
                              activePageId: gS,
                              onNavigate: tS
                            } = SS;
                            return (0, KS.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: iS.map((SS => (0, KS.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, KS.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: SS.title
                                }), SS.pageIds.map((SS => {
                                  var bS;
                                  const NS = WS(SS);
                                  return (0, KS.jsxs)(xS.c, {
                                    to: MS(HS, NS),
                                    className: XS()("DocsNavLink", {
                                      Active: NS.id === gS
                                    }),
                                    "aria-current": NS.id === gS ? "page" : void 0,
                                    onClick: tS,
                                    children: [(0, KS.jsx)(GS, {
                                      name: NS.icon
                                    }), (0, KS.jsx)("span", {
                                      children: null !== (bS = NS.navTitle) && void 0 !== bS ? bS : NS.title
                                    })]
                                  }, NS.id)
                                }))]
                              }, SS.title)))
                            })
                          }

                          function eX(SS) {
                            let {
                              basePath: HS,
                              pageId: gS
                            } = SS;
                            const tS = iS.flatMap((SS => SS.pageIds)),
                              bS = tS.indexOf(gS),
                              XS = bS > 0 ? WS(tS[bS - 1]) : null,
                              NS = bS < tS.length - 1 ? WS(tS[bS + 1]) : null;
                            return (0, KS.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [XS ? (0, KS.jsxs)(xS.c, {
                                className: "DocsPagerLink Previous",
                                to: MS(HS, XS),
                                children: [(0, KS.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, KS.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: XS.title
                                })]
                              }) : (0, KS.jsx)("span", {}), NS && (0, KS.jsxs)(xS.c, {
                                className: "DocsPagerLink Next",
                                to: MS(HS, NS),
                                children: [(0, KS.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, KS.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: NS.title
                                })]
                              })]
                            })
                          }

                          function rX(SS) {
                            let {
                              basePath: HS,
                              embedded: gS = !1
                            } = SS;
                            const {
                              pageSlug: bS = ""
                            } = (0, NS.z)(), uS = (0, NS.t)(), IS = (0, NS.u)(), fS = (kS = bS, VS.find((SS => SS.slug === kS)));
                            var kS;
                            const [aS, jS] = function() {
                              const [SS, HS] = (0, tS.useState)((() => {
                                const SS = sX.g.getItem(BX);
                                return "dark" === SS || "light" === SS ? SS : null
                              })), [gS, bS] = (0, tS.useState)(MX.matches ? "light" : "dark");
                              return (0, tS.useEffect)((() => {
                                const SS = () => {
                                  bS(MX.matches ? "light" : "dark")
                                };
                                return MX.addEventListener("change", SS), () => {
                                  MX.removeEventListener("change", SS)
                                }
                              }), []), [null !== SS && void 0 !== SS ? SS : gS, SS => {
                                sX.g.setItem(BX, SS), HS(SS)
                              }]
                            }(), [CS, nS] = (0, tS.useState)(null), [PS, QS] = (0, tS.useState)(!1), [DS, wS] = (0, tS.useState)(!1), [hS, JS] = (0, tS.useState)([]), OS = function(SS, HS) {
                              const [gS, bS] = (0, tS.useState)("");
                              return (0, tS.useEffect)((() => {
                                if (!HS) return;
                                let gS = 0;
                                const tS = () => {
                                    var tS, XS;
                                    gS = 0;
                                    const xS = HS.getBoundingClientRect().top + oX;
                                    let NS = null !== (tS = null === (XS = SS[0]) || void 0 === XS ? void 0 : XS.anchor) && void 0 !== tS ? tS : "";
                                    for (const HS of SS) {
                                      const SS = document.getElementById(HS.anchor);
                                      SS && SS.getBoundingClientRect().top <= xS && (NS = HS.anchor)
                                    }
                                    HS.scrollTop + HS.clientHeight >= HS.scrollHeight - 2 && HS.scrollTop > 0 && SS.length > 0 && (NS = SS[SS.length - 1].anchor), bS(NS)
                                  },
                                  XS = () => {
                                    gS || (gS = requestAnimationFrame(tS))
                                  };
                                return tS(), HS.addEventListener("scroll", XS, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(gS), HS.removeEventListener("scroll", XS)
                                }
                              }), [SS, HS]), gS
                            }(hS, CS), dS = "" === bS && uS.hash ? function(SS) {
                              const HS = (0, ZS.n)(SS);
                              if (pS(WS("welcome"), HS)) return null;
                              const gS = Object.hasOwn(BS, HS) ? BS[HS] : null;
                              if (gS) return {
                                page: WS(gS.pageId),
                                anchor: gS.anchor
                              };
                              const tS = WS("readme");
                              return pS(tS, HS) ? {
                                page: tS,
                                anchor: HS
                              } : sS(`#${HS}`)
                            }(uS.hash) : null;
                            (0, tS.useEffect)((() => (qS.b.set({
                              musicOnFromPage: !1
                            }), () => {
                              qS.b.set({
                                musicOnFromPage: !0
                              }), Ct()
                            })), []), (0, tS.useEffect)((() => {
                              const SS = SS => {
                                const HS = SS.target;
                                if (HS.closest(".DocsTextDialog")) return;
                                const gS = HS.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(HS.tagName);
                                "k" === SS.key && (SS.metaKey || SS.ctrlKey) || "/" === SS.key && !gS ? (SS.preventDefault(), wS(!0)) : "Escape" === SS.key && QS(!1)
                              };
                              return window.addEventListener("keydown", SS), () => {
                                window.removeEventListener("keydown", SS)
                              }
                            }), []);
                            const cS = (0, tS.useRef)(null);
                            (0, tS.useLayoutEffect)((() => {
                              var SS, HS;
                              if (!CS) return;
                              const gS = cS.current === uS.pathname;
                              cS.current = uS.pathname;
                              const tS = (0, ZS.n)(uS.hash),
                                bS = tS ? document.getElementById(tS) : null;
                              if (null === (SS = CS.querySelector(".DocsTargeted")) || void 0 === SS || SS.classList.remove("DocsTargeted"), null === bS || void 0 === bS || null === (HS = bS.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === HS || HS.classList.add("DocsTargeted"), bS) {
                                var XS;
                                const SS = bS.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (XS = bS.closest(".DocsChangelogEntry")) && void 0 !== XS ? XS : bS).scrollIntoView({
                                  block: SS ? "center" : "start",
                                  behavior: gS ? "smooth" : "auto"
                                })
                              } else gS || CS.scrollTo({
                                top: 0
                              })
                            }), [CS, uS.pathname, uS.hash, uS.key]);
                            const vS = (0, tS.useCallback)((() => {
                                QS(!1)
                              }), []),
                              ES = (0, tS.useCallback)((SS => {
                                IS({
                                  hash: SS
                                })
                              }), [IS]);
                            if (dS) return (0, KS.jsx)(NS.e, {
                              replace: !0,
                              to: MS(HS, dS.page, dS.anchor)
                            });
                            if (!fS) return (0, KS.jsx)(NS.e, {
                              replace: !0,
                              to: HS
                            });
                            const LS = gS ? "div" : "main";
                            return (0, KS.jsx)(aH.Provider, {
                              value: HS,
                              children: (0, KS.jsx)(KH.Provider, {
                                value: CS,
                                children: (0, KS.jsxs)("div", {
                                  ref: nS,
                                  className: XS()("DocsSite", {
                                    Embedded: gS,
                                    NavOpen: PS
                                  }),
                                  "data-theme": aS,
                                  children: [(0, KS.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, KS.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": PS ? "Close menu" : "Open menu",
                                      "aria-expanded": PS,
                                      onClick: () => {
                                        QS(!PS)
                                      },
                                      children: (0, KS.jsx)(GS, {
                                        name: PS ? "cross" : "menu"
                                      })
                                    }), (0, KS.jsxs)(xS.c, {
                                      to: HS,
                                      className: "DocsBrand",
                                      children: [(0, KS.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, KS.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, KS.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, KS.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        wS(!0)
                                      },
                                      children: [(0, KS.jsx)(GS, {
                                        name: "magnifying-glass"
                                      }), (0, KS.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, KS.jsxs)("kbd", {
                                        children: [lX ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, KS.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, KS.jsxs)("a", {
                                        href: TX,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, KS.jsx)(GS, {
                                          name: "discord"
                                        }), (0, KS.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, KS.jsxs)("a", {
                                        href: RX,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, KS.jsx)(GS, {
                                          name: "external-link"
                                        }), (0, KS.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !gS && (0, KS.jsxs)(xS.c, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, KS.jsx)(GS, {
                                          name: "play"
                                        }), (0, KS.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, KS.jsx)(FX, {
                                        theme: aS,
                                        onChange: jS
                                      })]
                                    })]
                                  }), (0, KS.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, KS.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, KS.jsx)(mX, {
                                        basePath: HS,
                                        activePageId: fS.id,
                                        onNavigate: vS
                                      })
                                    }), (0, KS.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: vS
                                    }), (0, KS.jsxs)(LS, {
                                      className: "DocsMain",
                                      children: [(0, KS.jsx)(wX, {
                                        page: fS,
                                        onTocChange: JS
                                      }, fS.id), (0, KS.jsx)(eX, {
                                        basePath: HS,
                                        pageId: fS.id
                                      })]
                                    }), (0, KS.jsx)("aside", {
                                      className: XS()("DocsToc", {
                                        Timeline: "changelog" === fS.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, KS.jsx)(OX, {
                                        isChangelog: "changelog" === fS.layout,
                                        toc: hS,
                                        activeAnchor: OS,
                                        onNavigate: ES
                                      })
                                    })]
                                  }), (0, KS.jsx)(pX, {}), DS && (0, KS.jsx)(zX, {
                                    basePath: HS,
                                    onClose: () => {
                                      wS(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4859: (SS, HS, gS) => {
                          gS.d(HS, {
                            A: () => kS,
                            d: () => tS,
                            e: () => xS,
                            f: () => GS,
                            h: () => jS,
                            l: () => NS,
                            n: () => bS,
                            r: () => XS,
                            u: () => KS,
                            y: () => aS
                          });
                          const tS = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function bS(SS) {
                            try {
                              return decodeURIComponent(SS.slice(1))
                            } catch {
                              return SS.slice(1)
                            }
                          }

                          function XS(SS) {
                            return SS.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const xS = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${tS.source}`, "g");

                          function NS(SS, HS) {
                            return 2 === SS.length ? HS.replace(/^ (.*) $/, "$1") : HS
                          }

                          function qS(SS) {
                            return "" === SS.trim()
                          }

                          function uS(SS) {
                            const HS = [];
                            for (const gS of SS.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) HS.length > 0 && HS[HS.length - 1].endsWith("\\") ? HS[HS.length - 1] += `|${gS}` : HS.push(gS);
                            return HS.map((SS => SS.trim().replaceAll("\\|", "|")))
                          }
                          const IS = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function fS(SS) {
                            const HS = [],
                              gS = [{
                                indent: -1,
                                items: HS
                              }];
                            let tS = null;
                            for (const bS of SS) {
                              const SS = bS.match(IS);
                              if (!SS) {
                                tS && (tS.text += ` ${bS.trim()}`);
                                continue
                              }
                              const HS = SS[1].replace(/\t/g, "  ").length;
                              for (; HS <= gS[gS.length - 1].indent;) gS.pop();
                              tS = {
                                text: SS[3].trim(),
                                children: []
                              }, gS[gS.length - 1].items.push(tS), gS.push({
                                indent: HS,
                                items: tS.children
                              })
                            }
                            return HS
                          }

                          function kS(SS) {
                            const HS = SS.replace(/\r\n/g, "\n").split("\n"),
                              gS = [];
                            let tS = 0;
                            for (; tS < HS.length;) {
                              const SS = HS[tS];
                              if (qS(SS)) {
                                tS++;
                                continue
                              }
                              const bS = SS.match(/^\s*```\s*(\w*)\s*$/);
                              if (bS) {
                                const SS = [];
                                for (tS++; tS < HS.length && !/^\s*```\s*$/.test(HS[tS]);) SS.push(HS[tS]), tS++;
                                tS++, gS.push({
                                  kind: "code",
                                  lang: bS[1] || "text",
                                  code: SS.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const xS = SS.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (xS) {
                                const SS = xS[2].trim();
                                gS.push({
                                  kind: "heading",
                                  level: xS[1].length,
                                  text: SS,
                                  anchor: XS(SS)
                                }), tS++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(SS)) {
                                gS.push({
                                  kind: "rule"
                                }), tS++;
                                continue
                              }
                              if (SS.trim().startsWith("|") && tS + 1 < HS.length && /^\s*\|[\s:|-]+\|\s*$/.test(HS[tS + 1])) {
                                const bS = uS(SS),
                                  XS = [];
                                for (tS += 2; tS < HS.length && HS[tS].trim().startsWith("|");) XS.push(uS(HS[tS])), tS++;
                                gS.push({
                                  kind: "table",
                                  header: bS,
                                  rows: XS
                                });
                                continue
                              }
                              if (SS.startsWith(">")) {
                                const SS = [];
                                for (; tS < HS.length && HS[tS].startsWith(">");) SS.push(HS[tS].replace(/^>\s?/, "")), tS++;
                                gS.push({
                                  kind: "quote",
                                  blocks: kS(SS.join("\n"))
                                });
                                continue
                              }
                              if (IS.test(SS)) {
                                const bS = [],
                                  XS = /^\s*\d+\./.test(SS);
                                for (; tS < HS.length && !qS(HS[tS]) && (IS.test(HS[tS]) || /^\s+\S/.test(HS[tS]));) bS.push(HS[tS]), tS++;
                                gS.push({
                                  kind: "list",
                                  ordered: XS,
                                  items: fS(bS)
                                });
                                continue
                              }
                              const NS = [];
                              for (; tS < HS.length && !qS(HS[tS]) && !/^\s*```/.test(HS[tS]) && !/^#{1,6}\s/.test(HS[tS]) && !HS[tS].startsWith(">") && !IS.test(HS[tS]) && (!HS[tS].trim().startsWith("|") || 0 !== NS.length);) NS.push(HS[tS].trim()), tS++;
                              0 === NS.length && (NS.push(HS[tS].trim()), tS++), gS.push({
                                kind: "paragraph",
                                text: NS.join(" ")
                              })
                            }
                            return gS
                          }

                          function aS(SS) {
                            let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const gS = kS(SS);
                            let tS = "";
                            const bS = [],
                              XS = [],
                              xS = new Map;
                            for (const uS of gS) {
                              if ("heading" === uS.kind) {
                                var NS;
                                const SS = (null !== (NS = xS.get(uS.anchor)) && void 0 !== NS ? NS : 0) + 1;
                                xS.set(uS.anchor, SS), SS > 1 && (uS.anchor = `${uS.anchor}-${SS}`)
                              }
                              if ("heading" === uS.kind && 1 === uS.level && !tS) {
                                tS = uS.text;
                                continue
                              }
                              if ("heading" === uS.kind && uS.level <= HS) {
                                XS.push({
                                  heading: uS,
                                  blocks: []
                                });
                                continue
                              }
                              const SS = XS.at(-1);
                              SS ? SS.blocks.push(uS) : bS.push(uS)
                            }
                            const qS = SS => {
                              for (;
                                "rule" === (null === (HS = SS.at(-1)) || void 0 === HS ? void 0 : HS.kind);) {
                                var HS;
                                SS.pop()
                              }
                            };
                            qS(bS);
                            for (const uS of XS) qS(uS.blocks);
                            return {
                              title: tS,
                              intro: bS,
                              sections: XS
                            }
                          }

                          function KS(SS) {
                            return [{
                              heading: null,
                              blocks: SS.intro
                            }, ...SS.sections.map((SS => ({
                              heading: SS.heading,
                              blocks: SS.blocks
                            })))]
                          }

                          function jS(SS) {
                            return SS.flatMap((SS => "code" === SS.kind ? [SS] : "quote" === SS.kind ? jS(SS.blocks) : []))
                          }

                          function GS(SS) {
                            switch (SS.kind) {
                              case "heading":
                              case "paragraph":
                                return SS.text;
                              case "code":
                                return SS.code;
                              case "table":
                                return [SS.header, ...SS.rows].map((SS => SS.join(" "))).join(" ");
                              case "list": {
                                const HS = SS => SS.map((SS => `${SS.text} ${HS(SS.children)}`)).join(" ");
                                return HS(SS.items)
                              }
                              case "quote":
                                return SS.blocks.map(GS).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4976: (SS, HS, gS) => {
                          gS.d(HS, {
                            c: () => NS
                          });
                          var tS = gS(64),
                            bS = gS(369),
                            XS = gS(2050),
                            xS = gS(1181);

                          function NS(SS) {
                            let {
                              text: HS
                            } = SS;
                            const gS = [];
                            let NS = "";
                            return (0, bS.ec)(HS).forEach(((SS, HS) => {
                              if ("string" === typeof SS || !(0, XS.g)(SS.icon)) return void(NS += "string" === typeof SS ? SS : SS.icon);
                              const bS = Math.max(0, NS.trimEnd().search(/\S{1,12}$/));
                              gS.push((0, xS.jsxs)(tS.Fragment, {
                                children: [NS.slice(0, bS), (0, xS.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [NS.slice(bS), (0, xS.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": SS.icon,
                                    children: (0, xS.jsx)(XS.e, {
                                      itemName: SS.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, HS)), NS = ""
                            })), gS.push(NS), (0, xS.jsx)(xS.Fragment, {
                              children: gS
                            })
                          }
                        }, 4894: (SS, HS, gS) => {
                          gS.d(HS, {
                            f: () => nS,
                            d: () => CS
                          });
                          var tS = gS(64),
                            bS = gS(1522),
                            XS = gS(2031),
                            xS = gS(4898),
                            NS = gS(1181);
                          const qS = (0, tS.memo)((function(SS) {
                            let {
                              initialParameters: HS
                            } = SS;
                            const gS = (0, tS.useRef)(null),
                              bS = (0, tS.useRef)(null),
                              qS = (0, tS.useRef)(0),
                              uS = (0, tS.useRef)(null),
                              IS = HS.description,
                              fS = HS.Og,
                              {
                                scale: kS,
                                rotation: aS
                              } = null !== HS && void 0 !== HS ? HS : {},
                              KS = (0, xS.d)();
                            return (0, tS.useEffect)((() => {
                              const SS = KS.onFrame((() => {
                                const SS = KS.getState();
                                if (!SS.isActive || !gS.current || !bS.current) return;
                                const HS = SS.state;
                                if (gS.current.value = HS.progress, HS.clickCount > qS.current) {
                                  qS.current = HS.clickCount;
                                  const SS = bS.current;
                                  SS.classList.add("pulse"), uS.current = setTimeout((() => {
                                    SS.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(uS.current), SS()
                              }
                            }), [KS]), (0, NS.jsx)(NS.Fragment, {
                              children: (0, NS.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== kS && {
                                    "--scale": kS
                                  },
                                  ...null !== aS && {
                                    "--rotation": `${aS}deg`
                                  }
                                },
                                children: [(0, NS.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: gS
                                }), (0, NS.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: bS,
                                  children: (0, NS.jsx)(XS.c, {
                                    text: [{
                                      icon: fS
                                    }]
                                  })
                                }), (0, NS.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, NS.jsx)(XS.c, {
                                    text: IS
                                  })
                                })]
                              })
                            })
                          }));
                          var uS = gS(1121),
                            IS = gS.n(uS);
                          const fS = 2 * Math.PI * 90,
                            kS = (0, tS.memo)((function(SS) {
                              let {
                                initialParameters: HS
                              } = SS;
                              const gS = (0, tS.useRef)(null),
                                bS = (0, tS.useRef)(null),
                                qS = (0, tS.useRef)(null),
                                uS = HS.label,
                                kS = HS.icon,
                                aS = HS.Eg,
                                {
                                  scale: KS,
                                  rotation: jS,
                                  Lg: GS
                                } = null !== HS && void 0 !== HS ? HS : {},
                                CS = (0, xS.d)();
                              return (0, tS.useEffect)((() => {
                                const SS = CS.onFrame((() => {
                                  var SS, HS;
                                  const tS = CS.getState();
                                  if (!tS.isActive || !bS.current) return;
                                  const XS = tS.state,
                                    xS = null !== (SS = XS.timeRemaining) && void 0 !== SS ? SS : 0,
                                    NS = null !== (HS = XS.vg) && void 0 !== HS ? HS : 1,
                                    uS = fS * (1 - xS / NS);
                                  bS.current.style.strokeDashoffset = `${uS}`, gS.current && (gS.current.style.opacity = xS > 0 ? "1" : "0"), qS.current && aS && (qS.current.textContent = `${(xS/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  SS()
                                }
                              }), [CS, aS]), (0, NS.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: gS,
                                style: {
                                  ...null !== KS && {
                                    "--scale": KS
                                  },
                                  ...null !== jS && {
                                    "--rotation": `${jS}deg`
                                  }
                                },
                                children: [(0, NS.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, NS.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, NS.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, NS.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: fS,
                                      ref: bS
                                    })]
                                  }), (0, NS.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, NS.jsx)(XS.c, {
                                      text: [{
                                        icon: kS
                                      }],
                                      className: IS()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: GS
                                      })
                                    })
                                  })]
                                }), (0, NS.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, NS.jsx)(XS.c, {
                                    text: uS,
                                    className: "QTETimedClickLabelText"
                                  }), aS && (0, NS.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: qS
                                  })]
                                })]
                              })
                            })),
                            aS = (0, tS.memo)((function(SS) {
                              let {
                                initialParameters: HS
                              } = SS;
                              const gS = (0, tS.useRef)(null),
                                bS = (0, tS.useRef)(null),
                                qS = (0, tS.useRef)(null),
                                uS = (0, tS.useRef)(!1),
                                IS = HS.description,
                                fS = null === HS || void 0 === HS ? void 0 : HS.icon,
                                kS = (0, xS.d)();
                              return (0, tS.useEffect)((() => {
                                const SS = kS.onFrame((() => {
                                  const SS = kS.getState();
                                  if (!SS.isActive) return;
                                  const HS = SS.state;
                                  if (gS.current) {
                                    const SS = 100 * (HS.catchZonePosition - HS.Ag / 2);
                                    gS.current.style.left = `${SS}%`, gS.current.style.width = 100 * HS.Ag + "%", HS.isCatching !== uS.current && (uS.current = HS.isCatching, HS.isCatching ? gS.current.classList.add("catching") : gS.current.classList.remove("catching"))
                                  }
                                  bS.current && (bS.current.style.left = 100 * HS.moverPosition + "%"), qS.current && (qS.current.value = HS.progress)
                                }));
                                return () => {
                                  SS()
                                }
                              }), [kS]), (0, NS.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, NS.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, NS.jsx)(XS.c, {
                                    text: IS
                                  })
                                }), (0, NS.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: qS
                                }), (0, NS.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, NS.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: gS
                                  }), (0, NS.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: bS,
                                    children: (0, NS.jsx)("span", {
                                      children: fS && (0, NS.jsx)(XS.c, {
                                        text: [{
                                          icon: fS,
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
                          var KS = gS(680);
                          const jS = (0, tS.memo)((function(SS) {
                              let {
                                initialParameters: HS
                              } = SS;
                              const gS = (0, tS.useRef)(null),
                                bS = HS.label,
                                qS = HS.sg,
                                {
                                  icon: uS,
                                  scale: IS,
                                  rotation: fS
                                } = null !== HS && void 0 !== HS ? HS : {},
                                kS = 100 * (.5 - qS / 2),
                                aS = 100 * qS,
                                jS = (0, xS.d)();
                              return (0, tS.useEffect)((() => {
                                const SS = jS.onFrame((() => {
                                  const SS = jS.getState();
                                  if (!SS.isActive || !gS.current) return;
                                  const HS = SS.state;
                                  gS.current.style.left = 100 * HS.markerPosition + "%"
                                }));
                                return () => {
                                  SS()
                                }
                              }), [jS]), (0, NS.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, KS.K)(IS) && {
                                    "--scale": IS
                                  },
                                  ...!(0, KS.K)(fS) && {
                                    "--rotation": `${fS}deg`
                                  }
                                },
                                children: [uS && (0, NS.jsx)(XS.c, {
                                  text: [{
                                    icon: uS
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, NS.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, NS.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${kS}%`,
                                      width: `${aS}%`
                                    }
                                  }), (0, NS.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: gS
                                  })]
                                }), (0, NS.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, NS.jsx)(XS.c, {
                                    text: bS
                                  })
                                })]
                              })
                            })),
                            GS = (0, tS.memo)((function(SS) {
                              let {
                                initialParameters: HS
                              } = SS;
                              const gS = (0, tS.useRef)(null),
                                [bS, qS] = (0, tS.useState)((() => new Array(HS.Mg).fill("pending"))),
                                [uS, IS] = (0, tS.useState)((() => {
                                  const SS = HS.Tg;
                                  return (0, KS.K)(SS) || SS <= 0 ? [] : new Array(SS).fill("pending")
                                })),
                                fS = HS.label,
                                {
                                  icon: kS
                                } = HS,
                                aS = (0, tS.useRef)(0),
                                jS = (0, tS.useRef)(0),
                                GS = (0, tS.useRef)([]),
                                CS = (0, xS.d)();
                              return (0, tS.useEffect)((() => {
                                const SS = CS.onFrame((() => {
                                  const SS = CS.getState();
                                  if (!SS.isActive || !gS.current) return;
                                  const HS = SS.state,
                                    tS = 30 + 60 * HS.outerCircleProgress;
                                  if (gS.current.setAttribute("r", String(tS)), !0 === HS.lastClickResult && HS.successes > aS.current) {
                                    gS.current.classList.remove("QTERhythmClickOuterCircle--miss"), gS.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const SS = setTimeout((() => {
                                      var SS;
                                      null === (SS = gS.current) || void 0 === SS || SS.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    GS.current.push(SS)
                                  } else if (!1 === HS.lastClickResult && HS.misses > jS.current) {
                                    gS.current.classList.remove("QTERhythmClickOuterCircle--hit"), gS.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const SS = setTimeout((() => {
                                      var SS;
                                      null === (SS = gS.current) || void 0 === SS || SS.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    GS.current.push(SS)
                                  }
                                  HS.successes === aS.current && HS.misses === jS.current || (aS.current = HS.successes, jS.current = HS.misses, qS((SS => {
                                    const gS = [...SS];
                                    for (let tS = 0; tS < HS.Mg; tS++) gS[tS] = tS < HS.successes ? "success" : "pending";
                                    return gS
                                  })), IS((SS => {
                                    if (0 === SS.length) return SS;
                                    const gS = [...SS];
                                    for (let tS = 0; tS < gS.length; tS++) gS[tS] = tS < HS.misses ? "miss" : "pending";
                                    return gS
                                  })))
                                }));
                                return () => {
                                  SS();
                                  for (const SS of GS.current) clearTimeout(SS);
                                  GS.current = []
                                }
                              }), [CS]), (0, NS.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, NS.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: bS.map(((SS, HS) => (0, NS.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === SS ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, HS)))
                                }), (0, NS.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, NS.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, NS.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, NS.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: gS
                                    })]
                                  }), kS && (0, NS.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, NS.jsx)(XS.c, {
                                      text: [{
                                        icon: kS
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), uS.length > 0 && (0, NS.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: uS.map(((SS, HS) => (0, NS.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === SS ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, HS)))
                                }), (0, NS.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, NS.jsx)(XS.c, {
                                    text: fS
                                  })
                                })]
                              })
                            }));

                          function CS(SS) {
                            let {
                              qte: HS
                            } = SS;
                            switch (HS.type) {
                              case "progressBar":
                                return (0, NS.jsx)(qS, {
                                  initialParameters: HS.parameters
                                });
                              case "timedClick":
                                return (0, NS.jsx)(kS, {
                                  initialParameters: HS.parameters
                                });
                              case "gravityBar":
                                return (0, NS.jsx)(aS, {
                                  initialParameters: HS.parameters
                                });
                              case "precisionBar":
                                return (0, NS.jsx)(jS, {
                                  initialParameters: HS.parameters
                                });
                              case "rhythmClick":
                                return (0, NS.jsx)(GS, {
                                  initialParameters: HS.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const nS = (0, tS.memo)((function() {
                            const [SS, HS] = (0, tS.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, bS.g)("qteStateUpdated", (SS => {
                              HS(SS)
                            })), SS.isActive && SS.type ? (0, NS.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, NS.jsx)(CS, {
                                qte: SS
                              })
                            }) : null
                          }))
                        }, 4898: (SS, HS, gS) => {
                          gS.d(HS, {
                            c: () => NS,
                            d: () => qS
                          });
                          var tS = gS(64),
                            bS = gS(1378),
                            XS = gS(4904);
                          const xS = {
                              getState: () => XS.c.getCurrentState(),
                              onFrame: bS.q
                            },
                            NS = (0, tS.createContext)(xS);

                          function qS() {
                            return (0, tS.useContext)(NS)
                          }
                        }, 4985: (SS, HS, gS) => {
                          gS.d(HS, {
                            c: () => AS,
                            g: () => YS
                          });
                          var tS = gS(4992),
                            bS = gS(369);
                          const XS = 120,
                            xS = 260,
                            NS = 1.15,
                            qS = 1.2,
                            uS = 2,
                            IS = 1.08,
                            fS = .8,
                            kS = .95,
                            aS = 8,
                            KS = "[\"')\\]\u300d\u300f\uff09]*",
                            jS = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${KS}$`),
                            GS = new RegExp(`[?\uff1f]${KS}$`),
                            CS = new RegExp(`[!\uff01]${KS}$`),
                            nS = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            PS = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            QS = new RegExp(`[${PS}]`),
                            DS = new RegExp(`[${PS}]|[^${PS}]+`, "g"),
                            wS = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function hS(SS) {
                            let HS = 2166136261;
                            for (let gS = 0; gS < SS.length; gS++) HS ^= SS.charCodeAt(gS), HS = Math.imul(HS, 16777619);
                            return (HS >>> 0) / 4294967295 * 2 - 1
                          }

                          function ZS(SS) {
                            var HS;
                            if (QS.test(SS)) return 1;
                            const gS = SS.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              tS = gS.replace(/[^0-9]/g, "");
                            if (tS.length > 0 && !/\p{L}/u.test(gS)) return Math.min(tS.length, 4);
                            const bS = null !== (HS = gS.match(wS)) && void 0 !== HS ? HS : [];
                            if (0 === bS.length) {
                              var XS, xS;
                              const SS = null !== (XS = null === (xS = gS.match(/\p{L}/gu)) || void 0 === xS ? void 0 : xS.length) && void 0 !== XS ? XS : 0;
                              return 0 === SS ? 0 : Math.min(Math.max(1, Math.round(SS / 2.5)), aS)
                            }
                            const NS = gS.replace(/[^\p{L}]/gu, ""),
                              qS = bS.length > 1 && "e" === bS.at(-1) && NS.endsWith("e") && !NS.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(SS.replace(/[^\p{L}]/gu, ""));
                            return Math.min(bS.length - (qS ? 1 : 0), aS)
                          }

                          function JS(SS) {
                            return SS.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function OS(SS) {
                            const HS = SS.replace(/[^\p{L}]/gu, "");
                            return HS.length >= 2 && HS === HS.toUpperCase() && HS !== HS.toLowerCase()
                          }

                          function dS(SS, HS) {
                            var gS;
                            const aS = HS && (0, tS.j)(HS),
                              KS = null !== (gS = null === aS || void 0 === aS ? void 0 : aS.syllableMs) && void 0 !== gS ? gS : tS.d,
                              PS = function(SS) {
                                const HS = [];
                                for (const tS of (0, bS.ec)(SS))
                                  if ("string" === typeof tS)
                                    for (const SS of tS.split(/(\s+)/)) {
                                      if ("" === SS) continue;
                                      if (/^\s+$/.test(SS)) {
                                        HS.push({
                                          kind: "space",
                                          text: SS
                                        });
                                        continue
                                      }
                                      if (!QS.test(SS)) {
                                        HS.push({
                                          kind: "word",
                                          text: SS,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let tS = !0;
                                      for (const bS of null !== (gS = SS.match(DS)) && void 0 !== gS ? gS : []) {
                                        var gS;
                                        const SS = HS.at(-1);
                                        tS || "word" !== (null === SS || void 0 === SS ? void 0 : SS.kind) || QS.test(bS) || /[\p{L}\p{N}]/u.test(bS) ? (tS || HS.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), HS.push({
                                          kind: "word",
                                          text: bS,
                                          delayMs: 0
                                        }), tS = !1) : SS.text += bS
                                      }
                                    } else HS.push({
                                      kind: "icon",
                                      text: tS.icon,
                                      delayMs: 0
                                    });
                                return HS
                              }(SS),
                              wS = [];
                            let dS = [];
                            for (const tS of PS) "space" !== tS.kind && (dS.push(tS), jS.test(tS.text) && (wS.push(dS), dS = []));
                            wS.push(dS);
                            const cS = [];
                            let vS = 0;
                            for (const tS of wS) {
                              var ES, LS;
                              const SS = null !== (ES = null === (LS = tS.at(-1)) || void 0 === LS ? void 0 : LS.text) && void 0 !== ES ? ES : "",
                                HS = GS.test(SS),
                                gS = CS.test(SS),
                                bS = tS.map((SS => "word" === SS.kind ? ZS(SS.text) : 1)),
                                PS = bS.findLastIndex((SS => SS > 0));
                              for (const [GS, CS] of tS.entries()) {
                                const SS = "word" === CS.kind,
                                  tS = bS[GS];
                                CS.delayMs = vS;
                                for (let bS = 0; aS && bS < tS; bS++) {
                                  const {
                                    intonation: XS
                                  } = aS;
                                  let xS = PS > 0 ? -XS.declineSemitones * (GS / PS) : 0;
                                  xS += hS(`${JS(CS.text)}|${bS}`) * XS.variationSemitones;
                                  const jS = Math.min(1, XS.variationSemitones);
                                  let nS = aS.glideSemitones,
                                    QS = 1;
                                  gS && (xS += XS.exclaimLiftSemitones, QS *= NS), HS && GS === PS && (xS += XS.questionRiseSemitones * (tS > 1 ? .5 + .5 * bS / (tS - 1) : 1), bS === tS - 1 && (nS = Math.abs(nS) + XS.questionRiseSemitones / 2)), SS && OS(CS.text) && (xS += uS * jS, QS *= qS), tS > 1 && 0 === bS && (xS += fS * jS, QS *= IS), cS.push({
                                    atMs: vS + bS * KS,
                                    semitones: xS,
                                    glideSemitones: nS,
                                    durationMs: bS < tS - 1 ? Math.min(aS.durationMs, KS * kS) : aS.durationMs,
                                    level: QS
                                  })
                                }
                                vS += tS * KS + (jS.test(CS.text) ? xS : nS.test(CS.text) ? XS : 0)
                              }
                            }
                            return {
                              pieces: PS.map((SS => "space" === SS.kind ? SS : "icon" === SS.kind ? {
                                kind: "icon",
                                icon: SS.text,
                                delayMs: SS.delayMs
                              } : {
                                kind: "word",
                                text: SS.text,
                                delayMs: SS.delayMs
                              })),
                              blips: cS
                            }
                          }
                          var cS = gS(1281),
                            vS = gS(1334),
                            ES = gS(2069);

                          function LS(SS) {
                            if ("string" === typeof SS) return SS;
                            const HS = vS.f.get().getCurrentLanguageCode();
                            return (0, cS.x)(HS, SS.translationKey, (0, cS.t)(SS.params, ES.c.shown))
                          }

                          function YS(SS) {
                            const HS = void 0 === SS.voice ? null : (0, tS.k)(SS.voice),
                              gS = HS && (0, tS.j)(HS);
                            return {
                              plan: dS(LS(SS.line), gS),
                              synth: gS
                            }
                          }

                          function AS(SS) {
                            const HS = [];
                            let gS = [];
                            for (const [bS, XS] of SS.entries()) {
                              var tS;
                              "space" === XS.kind && (" " !== XS.text || "icon" !== (null === (tS = SS[bS + 1]) || void 0 === tS ? void 0 : tS.kind)) ? (gS.length > 0 && HS.push(gS), HS.push([XS]), gS = []) : gS.push(XS)
                            }
                            return gS.length > 0 && HS.push(gS), HS
                          }
                        }, 5e3: (SS, HS, gS) => {
                          gS.d(HS, {
                            c: () => IS,
                            d: () => fS
                          });
                          var tS = gS(5005),
                            bS = gS(24);
                          const XS = .25,
                            xS = .85,
                            NS = .02,
                            qS = .01;

                          function uS(SS, HS, gS, tS, bS, XS, NS) {
                            const {
                              waveform: qS,
                              pitchHz: uS,
                              attackMs: IS,
                              releaseMs: fS,
                              lowpassHz: kS
                            } = gS, aS = bS + tS.durationMs / 1e3, KS = uS * 2 ** (tS.semitones / 12), jS = SS.createOscillator();
                            jS.type = qS, jS.frequency.setValueAtTime(KS, bS), jS.frequency.exponentialRampToValueAtTime(KS * 2 ** (tS.glideSemitones / 12), aS);
                            const GS = bS + Math.min(IS, tS.durationMs) / 1e3,
                              CS = SS.createGain();
                            CS.gain.setValueAtTime(0, bS), CS.gain.linearRampToValueAtTime(XS, GS), CS.gain.linearRampToValueAtTime(XS * xS, Math.max(GS, aS - fS / 1e3)), CS.gain.linearRampToValueAtTime(0, aS);
                            const nS = [jS];
                            if (null !== kS) {
                              const HS = SS.createBiquadFilter();
                              HS.type = "lowpass", HS.frequency.value = kS, nS.push(HS)
                            }
                            nS.push(CS, HS);
                            for (let xS = 1; xS < nS.length; xS++) nS[xS - 1].connect(nS[xS]);
                            return jS.onended = () => {
                              for (const SS of nS.slice(0, -1)) SS.disconnect();
                              NS()
                            }, jS.start(bS), jS.stop(aS), jS
                          }

                          function IS(SS, HS, gS, tS, bS, xS) {
                            if (0 === tS.length) return xS(), () => {};
                            const IS = XS * gS.volume * bS,
                              fS = SS.createGain();
                            fS.connect(HS);
                            const kS = SS.currentTime + NS,
                              aS = new Set;
                            for (const XS of tS) {
                              const HS = uS(SS, fS, gS, XS, kS + XS.atMs / 1e3, IS * XS.level, (() => {
                                aS.delete(HS), 0 === aS.size && (fS.disconnect(), xS())
                              }));
                              aS.add(HS)
                            }
                            return () => {
                              const HS = SS.currentTime;
                              fS.gain.setTargetAtTime(0, HS, qS);
                              for (const SS of aS) try {
                                SS.stop(HS + 5 * qS)
                              } catch {}
                            }
                          }

                          function fS(SS, HS) {
                            var gS;
                            const XS = tS.Howler.ctx,
                              xS = tS.Howler.masterGain;
                            if (!XS || !xS || !bS.b.get("soundOnFromAd")) return () => {};
                            const NS = tS.Howler;
                            return null === (gS = NS._autoResume) || void 0 === gS || gS.call(NS), IS(XS, xS, SS, HS, bS.b.get("soundVolume"), (() => {
                              var SS;
                              null === (SS = NS._autoSuspend) || void 0 === SS || SS.call(NS)
                            }))
                          }
                        }, 5005: (SS, HS, gS) => {
                          gS.r(HS), gS.d(HS, {
                            Howl: () => bS.Howl,
                            Howler: () => bS.Howler,
                            musicOutput: () => GS,
                            readyAudioContext: () => CS
                          });
                          var tS, bS = gS(5011),
                            XS = gS(3577),
                            xS = gS(4775);
                          const NS = bS.Howler;

                          function qS() {
                            var SS, HS;
                            if (NS.ctx || !NS.usingWebAudio || "undefined" === typeof AudioContext || !(0, xS.k)()) return;
                            const gS = navigator.audioSession;
                            let tS;
                            "auto" === (null === gS || void 0 === gS ? void 0 : gS.type) && (gS.type = "ambient");
                            try {
                              tS = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const bS = tS.createGain();
                            bS.gain.setValueAtTime(NS._muted ? 0 : null !== (SS = NS._volume) && void 0 !== SS ? SS : 1, tS.currentTime), bS.connect(tS.destination), NS.ctx = tS, NS.masterGain = bS, null === (HS = NS._setup) || void 0 === HS || HS.call(NS)
                          }
                          NS._mobileUnloaded = !0;
                          const uS = NS.volume.bind(bS.Howler);
                          NS.volume = function() {
                            return qS(), uS(...arguments)
                          };
                          const IS = NS.mute.bind(bS.Howler);
                          NS.mute = SS => (qS(), IS(SS));
                          const fS = bS.Howl.prototype,
                            kS = fS.init;

                          function aS() {
                            for (; NS._html5AudioPool.length < NS.html5PoolSize;) {
                              const SS = new Audio;
                              SS._unlocked = !0, NS._releaseHtml5Audio(SS)
                            }
                            for (const HS of NS._howls)
                              if (!HS._webAudio)
                                for (const gS of HS._getSoundIds()) {
                                  var SS;
                                  const tS = null === (SS = HS._soundById(gS)) || void 0 === SS ? void 0 : SS._node;
                                  tS && !tS._unlocked && (tS._unlocked = !0, tS.load())
                                }
                          }
                          fS.init = function(SS) {
                            return qS(), kS.call(this, SS)
                          }, (0, xS.k)() && (NS._unlockAudio = () => {
                            const SS = NS.ctx;
                            if (NS._audioUnlocked || !SS) return;
                            NS.autoUnlock = !1;
                            const HS = SS.createBuffer(1, 1, 22050);
                            NS._scratchBuffer = HS;
                            const gS = new AbortController;
                            let tS = "afterPaint";
                            const bS = () => {
                                var tS;
                                if (NS._audioUnlocked) return;
                                null === (tS = NS._autoResume) || void 0 === tS || tS.call(NS);
                                const bS = SS.createBufferSource();
                                bS.buffer = HS, bS.connect(SS.destination), bS.start(0), SS.resume().catch((() => {})), bS.onended = () => {
                                  bS.disconnect(0), NS._audioUnlocked = !0, gS.abort();
                                  for (const SS of NS._howls) SS._emit("unlock")
                                }
                              },
                              qS = () => {
                                aS(), bS()
                              },
                              uS = HS => {
                                if (aS(), "inTap" === tS) {
                                  if ("running" === SS.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), bS()
                                } else "afterPaint" === tS && (tS = "queued", (0, XS.d)(HS.timeStamp, (() => {
                                  tS = "inTap", bS()
                                })))
                              };
                            for (const XS of ["touchstart", "touchend"]) document.addEventListener(XS, qS, {
                              capture: !0,
                              signal: gS.signal
                            });
                            for (const XS of xS.e) document.addEventListener(XS, uS, {
                              capture: !0,
                              signal: gS.signal
                            })
                          });
                          let KS = 0;
                          const jS = null === (tS = NS._autoSuspend) || void 0 === tS ? void 0 : tS.bind(bS.Howler);

                          function GS() {
                            CS();
                            const {
                              ctx: SS,
                              masterGain: HS
                            } = NS;
                            return SS && HS ? {
                              ctx: SS,
                              destination: HS,
                              holdAwake: SS => {
                                var HS, gS;
                                (KS += SS ? 1 : -1, SS) ? null === (HS = NS._autoResume) || void 0 === HS || HS.call(NS): null === (gS = NS._autoSuspend) || void 0 === gS || gS.call(NS)
                              },
                              wake: () => {
                                var HS;
                                "running" !== SS.state && (null === (HS = NS._autoResume) || void 0 === HS || HS.call(NS), SS.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function CS() {
                            var SS;
                            (NS.volume(), NS.ctx && NS.autoUnlock) && (null === (SS = NS._unlockAudio) || void 0 === SS || SS.call(NS))
                          }
                          jS && (NS._autoSuspend = () => KS > 0 ? bS.Howler : jS())
                        }, 5017: (SS, HS, gS) => {
                          function tS(SS) {
                            return {
                              notAfter: SS
                            }
                          }
                          gS.d(HS, {
                            b: () => qS,
                            f: () => uS,
                            j: () => NS,
                            k: () => tS,
                            m: () => bS,
                            q: () => XS,
                            r: () => xS,
                            v: () => IS,
                            z: () => fS
                          });
                          const bS = tS("\\w$."),
                            XS = tS("\\w.,");

                          function xS(SS) {
                            return HS => qS(HS, SS)
                          }

                          function NS(SS) {
                            return HS => !SS.test(HS.input.slice(0, HS.index))
                          }

                          function qS(SS, HS) {
                            return SS.index > 0 && new RegExp(`[${HS}]`).test(SS.input[SS.index - 1])
                          }

                          function uS(SS, HS, gS) {
                            return function(SS) {
                              return void 0 !== SS && "function" !== typeof SS
                            }(gS) ? function(SS, HS, gS) {
                              const tS = HS.flags.replace(/[gy]/g, ""),
                                bS = new RegExp(`[^${gS}](?:${HS.source})`, `${tS}g`),
                                XS = [],
                                xS = gS => {
                                  const tS = gS.index + gS[0].length;
                                  return ("" === gS[0] ? kS(SS, HS, tS) : tS) - 1
                                },
                                NS = new RegExp(`(?:${HS.source})`, `${tS}y`).exec(SS);
                              if (NS) {
                                if (XS.push(NS), !HS.global) return XS;
                                bS.lastIndex = xS(NS)
                              }
                              for (let qS = bS.exec(SS); qS; qS = bS.exec(SS)) {
                                const gS = kS(SS, HS, qS.index) - qS.index;
                                if (qS[0] = qS[0].slice(gS), qS.index += gS, XS.push(qS), !HS.global) break;
                                bS.lastIndex = xS(qS)
                              }
                              return XS
                            }(SS, HS, gS.notAfter) : function(SS, HS, gS) {
                              const tS = new RegExp(HS.source, `${HS.flags.replace(/[gy]/g,"")}g`),
                                bS = [];
                              for (let XS = tS.exec(SS); XS; XS = tS.exec(SS))
                                if (!gS || gS(XS)) {
                                  if (bS.push(XS), !HS.global) break;
                                  "" === XS[0] && (tS.lastIndex = kS(SS, HS, tS.lastIndex))
                                } else tS.lastIndex = kS(SS, HS, XS.index);
                              return bS
                            }(SS, HS, gS)
                          }

                          function IS(SS, HS, gS, tS) {
                            let bS = "",
                              XS = 0;
                            for (const xS of uS(SS, HS, gS)) bS += SS.slice(XS, xS.index) + tS(xS), XS = xS.index + xS[0].length;
                            return bS + SS.slice(XS)
                          }

                          function fS(SS, HS, gS) {
                            const tS = [];
                            let bS = 0;
                            for (const XS of uS(SS, HS, gS)) tS.push(SS.slice(bS, XS.index)), bS = XS.index + XS[0].length;
                            return [...tS, SS.slice(bS)]
                          }

                          function kS(SS, HS, gS) {
                            var tS;
                            return gS + (HS.unicode && (null !== (tS = SS.codePointAt(gS)) && void 0 !== tS ? tS : 0) > 65535 ? 2 : 1)
                          }
                        }, 4960: (SS, HS, gS) => {
                          gS.d(HS, {
                            c: () => bS,
                            d: () => qS,
                            h: () => XS,
                            j: () => xS,
                            m: () => NS,
                            q: () => GS,
                            t: () => IS,
                            u: () => fS,
                            v: () => jS,
                            x: () => aS
                          });
                          var tS = gS(1678);
                          const bS = 24e3,
                            XS = "/docs/llms.txt",
                            xS = `${tS.d}${XS}`,
                            NS = "/llms.txt",
                            qS = "/docs/llms-full.txt";

                          function uS(SS) {
                            return SS || "index"
                          }

                          function IS(SS) {
                            return `/docs/${uS(SS)}.md`
                          }

                          function fS(SS, HS) {
                            return `/docs/${uS(SS)}/${HS+1}.md`
                          }
                          const kS = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function aS(SS) {
                            const HS = kS.exec(SS);
                            return null === HS ? null : {
                              name: HS[1],
                              part: void 0 === HS[2] ? null : Number(HS[2])
                            }
                          }
                          const KS = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function jS(SS) {
                            const HS = KS.exec(SS);
                            if (null === HS) return null;
                            const [, gS = "", tS] = HS;
                            return void 0 === tS ? IS(gS) : fS(gS, Number(tS) - 1)
                          }

                          function GS(SS) {
                            return `/docsHtml/${uS(SS)}.html`
                          }
                        }, 4992: (SS, HS, gS) => {
                          gS.d(HS, {
                            d: () => bS,
                            e: () => tS,
                            g: () => XS,
                            j: () => qS,
                            k: () => xS
                          });
                          const tS = ["sine", "triangle", "square", "sawtooth"],
                            bS = 55,
                            XS = {
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

                          function xS(SS) {
                            return "string" !== typeof SS ? SS : Object.hasOwn(XS, SS) ? XS[SS] : null
                          }

                          function NS(SS, HS, gS) {
                            return Math.min(gS, Math.max(HS, SS))
                          }

                          function qS(SS) {
                            const HS = NS(SS.durationMs, 10, 500),
                              gS = NS(SS.attackMs, 0, HS),
                              {
                                intonation: bS
                              } = SS;
                            return {
                              waveform: tS.includes(SS.waveform) ? SS.waveform : "sine",
                              pitchHz: NS(SS.pitchHz, 20, 4e3),
                              glideSemitones: NS(SS.glideSemitones, -24, 24),
                              durationMs: HS,
                              attackMs: gS,
                              releaseMs: NS(SS.releaseMs, 0, HS - gS),
                              lowpassHz: null === SS.lowpassHz ? null : NS(SS.lowpassHz, 20, 2e4),
                              volume: NS(SS.volume, 0, 2),
                              intonation: {
                                variationSemitones: NS(bS.variationSemitones, 0, 6),
                                declineSemitones: NS(bS.declineSemitones, 0, 12),
                                questionRiseSemitones: NS(bS.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: NS(bS.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: NS(SS.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const SS in modules) Object.freeze(modules[SS]);