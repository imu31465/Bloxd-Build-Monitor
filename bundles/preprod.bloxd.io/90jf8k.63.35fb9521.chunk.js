export const id = 63;
export const ids = [63, 76];
export const modules = {
    3697: (FF, WF, SF) => {
        SF.r(WF), SF.d(WF, {
          default: () => pu
        });
        var CF = SF(46),
          AF = SF(918),
          uF = SF.n(AF),
          hF = SF(1354),
          bW = SF(1360),
          dF = SF(11),
          PF = SF(61),
          RF = SF(3705),
          iW = SF(3716),
          eF = SF(3720),
          EF = SF(3510),
          QF = SF(971);
        const rW = "/textures/docs/icons";

        function gW(FF) {
          let {
            name: WF,
            isTinted: SF,
            className: CF,
            style: AF
          } = FF;
          const hF = `${rW}/${WF}.png`;
          return SF ? (0, QF.jsxs)("span", {
            className: uF()("DocsPixelIcon", "Tinted", CF),
            "aria-hidden": "true",
            style: AF,
            children: [(0, QF.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${hF}")`,
                WebkitMaskImage: `url("${hF}")`
              }
            }), (0, QF.jsx)("img", {
              src: hF,
              alt: ""
            })]
          }) : (0, QF.jsx)("img", {
            className: uF()("DocsPixelIcon", CF),
            src: hF,
            alt: "",
            "aria-hidden": "true",
            style: AF
          })
        }
        const tW = 1500;

        function TF() {
          const [FF, WF] = (0, CF.useState)(null);
          (0, CF.useEffect)((() => {
            if (null === FF) return;
            const SF = setTimeout((() => {
              WF(null)
            }), tW);
            return () => {
              clearTimeout(SF)
            }
          }), [FF]);
          return [FF, FF => {
            (0, EF.e)(FF).then((() => {
              WF({
                text: FF,
                failed: !1
              })
            }), (SF => {
              console.error("Could not copy to the clipboard", SF), WF({
                text: FF,
                failed: !0
              })
            }))
          }]
        }

        function aW(FF) {
          let {
            text: WF,
            label: SF,
            className: CF
          } = FF;
          const [AF, hF] = TF(), bW = !1 === (null === AF || void 0 === AF ? void 0 : AF.failed);
          return (0, QF.jsxs)("button", {
            type: "button",
            className: uF()("DocsCopyButton", CF, {
              Copied: bW
            }),
            title: `Copy ${WF.length>40?"to clipboard":WF}`,
            "aria-label": SF ? void 0 : `Copy ${WF}`,
            onClick: FF => {
              FF.stopPropagation(), hF(WF)
            },
            children: [(0, QF.jsx)(gW, {
              name: bW ? "check" : "copy"
            }), SF && (0, QF.jsx)("span", {
              children: bW ? "Copied" : null !== AF && void 0 !== AF && AF.failed ? "Copy failed" : SF
            })]
          })
        }
        RF.c.registerLanguage("javascript", iW.e), RF.c.registerLanguage("typescript", eF.c);
        const kW = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          qW = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          VF = 24;

        function NF(FF) {
          let {
            code: WF,
            lang: SF,
            compact: AF = !1
          } = FF;
          const hF = (0, CF.useMemo)((() => function(FF, WF) {
              const SF = kW[WF];
              return SF ? RF.c.highlight(FF, {
                language: SF
              }).value : FF.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(WF, SF)), [WF, SF]),
            bW = WF.split("\n").length,
            dF = !AF && bW > VF + 6,
            [PF, iW] = (0, CF.useState)(!1),
            eF = kW[SF];
          return (0, QF.jsxs)("div", {
            className: uF()("DocsCodeBlock", {
              Compact: AF,
              Collapsed: dF && !PF
            }),
            children: [!AF && (0, QF.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, QF.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: eF ? qW[eF] : "Text"
              }), (0, QF.jsx)(aW, {
                text: WF,
                label: "Copy"
              })]
            }), (0, QF.jsx)("pre", {
              children: (0, QF.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: hF
                }
              })
            }), dF && (0, QF.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": PF,
              onClick: () => {
                iW(!PF)
              },
              children: [(0, QF.jsx)(gW, {
                name: PF ? "chevron-up" : "chevron-down"
              }), PF ? "Show less" : `Show all ${bW} lines`]
            })]
          })
        }
        var DF = SF(3725);
        var LF = SF(3733);
        const mW = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function OF(FF) {
          const WF = new Map;
          let SF, CF = [],
            AF = !1;
          const uF = () => {
            SF && WF.set(SF.name, SF.lines.join("\n").trimEnd())
          };
          for (const hF of FF.split("\n")) {
            const FF = hF.match(mW);
            AF || hF.startsWith("/*") ? (AF || (uF(), SF = void 0), CF.push(hF), AF = !hF.includes("*/")) : FF ? (uF(), SF = {
              name: FF[1],
              lines: [...CF, hF]
            }, CF = []) : SF && (hF.startsWith(" ") || hF.startsWith("\t") || /^[}\])|]/.test(hF)) ? SF.lines.push(hF) : SF && "" !== hF.trim() && (uF(), SF = void 0)
          }
          return uF(), WF
        }

        function xW(FF) {
          return "methods" === FF || "callbacks" === FF || "settings" === FF
        }
        const ZF = {
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
              setterSnippet: (FF, WF) => `api.setClientOption(playerId, "${FF}", ${WF})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (FF, WF) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${FF}", ${WF})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (FF, WF) => `api.setMobSetting(mobId, "${FF}", ${WF})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (FF, WF) => `api.setVehicleSetting(vehicleId, "${FF}", ${WF})`
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
          oF = {
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

        function YF(FF) {
          return FF.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function MF(FF) {
          let WF = !1;
          return FF.split("\n").map((FF => (FF.startsWith("```") && (WF = !WF), !WF && /^#{3,} /.test(FF) ? FF.slice(1) : FF))).join("\n")
        }

        function cW(FF) {
          return "readme" === FF ? "getting-started" : YF(FF)
        }
        const GF = "## Glossary of Referenced Types";
        const zW = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...LF.b.flatMap((FF => {
            const WF = {
              id: FF.id,
              slug: cW(FF.id),
              title: FF.title,
              markdown: FF.content,
              ...ZF[FF.id]
            };
            if ("readme" === FF.id) return function(FF) {
              const WF = FF.markdown.indexOf(GF),
                SF = FF.markdown.indexOf("\n```", WF),
                CF = FF.markdown.indexOf("\n```", SF + 1);
              if (-1 === WF || -1 === SF || -1 === CF) throw new Error(`Getting started has no "${GF}" section with a code block`);
              const AF = FF.markdown.slice(WF + 31, SF).trim(),
                uF = [...OF(FF.markdown.slice(FF.markdown.indexOf("\n", SF + 1) + 1, CF))].map((FF => {
                  let [WF, SF] = FF;
                  return `## ${WF}\n\n\`\`\`ts\n${SF}\n\`\`\`\n`
                })),
                hF = FF.markdown.slice(FF.markdown.indexOf("\n", CF + 1) + 1);
              return [{
                ...FF,
                markdown: `${FF.markdown.slice(0,WF)}${hF}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${AF}\n\n${uF.join("\n")}`
              }]
            }(WF);
            if ("howTo" === FF.id) {
              const {
                parent: FF,
                guides: SF
              } = function(FF) {
                const [WF, ...SF] = FF.markdown.split(/^(?=## )/m), CF = [WF], AF = [];
                for (const hF of SF) {
                  var uF;
                  const WF = hF.indexOf("\n"),
                    SF = hF.slice(3, WF).trim(),
                    bW = hF.slice(WF + 1);
                  if (!bW.includes("```")) {
                    CF.push(hF);
                    continue
                  }
                  const dF = null !== (uF = oF[SF]) && void 0 !== uF ? uF : {
                    icon: "lightbulb",
                    summary: `How to use ${SF.toLowerCase()} in World Code.`
                  };
                  AF.push({
                    id: `${FF.id}${SF.split(/[^A-Za-z0-9]+/).map((FF=>FF.charAt(0).toUpperCase()+FF.slice(1))).join("")}`,
                    slug: `${FF.slug}-${YF(SF)}`,
                    title: SF,
                    layout: "article",
                    sourceAnchor: (0, DF.o)(SF),
                    markdown: `# ${SF}\n\n${MF(bW)}`,
                    ...dF
                  })
                }
                return {
                  parent: {
                    ...FF,
                    markdown: CF.join(""),
                    childPageIds: AF.map((FF => FF.id))
                  },
                  guides: AF
                }
              }(WF);
              return [FF, ...SF]
            }
            return [WF]
          }))],
          IF = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...zW.filter((FF => void 0 !== FF.sourceAnchor)).map((FF => FF.id))]
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

        function fF(FF) {
          return zW.find((WF => WF.id === FF))
        }
        const yW = new Map;

        function sF(FF) {
          let WF = yW.get(FF.id);
          return WF || (WF = (0, DF.u)(FF.markdown, "changelog" === FF.layout ? 3 : 2), yW.set(FF.id, WF)), WF
        }

        function nF(FF, WF) {
          return sF(FF).sections.some((FF => FF.heading.anchor === WF || FF.blocks.some((FF => "heading" === FF.kind && FF.anchor === WF))))
        }

        function HF(FF) {
          const [WF, ...SF] = FF.replace(/^#/, "").split("-"), CF = zW.find((FF => FF.id === WF));
          if (!CF) return null;
          const AF = SF.length > 0 ? (0, DF.o)(SF.join("-")) : "";
          for (const hF of null !== (uF = CF.childPageIds) && void 0 !== uF ? uF : []) {
            var uF;
            const FF = fF(hF);
            if (FF.sourceAnchor === AF) return {
              page: FF,
              anchor: ""
            };
            if (nF(FF, AF)) return {
              page: FF,
              anchor: AF
            }
          }
          return {
            page: CF,
            anchor: AF
          }
        }
        const KF = {
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

        function wF(FF, WF) {
          let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const CF = WF.slug ? `${FF}/${WF.slug}` : FF;
          return SF ? `${CF}#${SF}` : CF
        }
        var XF = SF(3750);
        const UF = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          BF = new Set(["GameApi", "Console", "_TypeOf"]),
          jW = 4;

        function vW(FF) {
          let WF = FF.length;
          for (; WF > 0 && "" === FF[WF - 1].trim();) WF--;
          return FF.slice(0, WF)
        }

        function JF(FF) {
          var WF;
          const SF = vW(FF);
          if (null === (WF = SF.at(-1)) || void 0 === WF || !WF.trimEnd().endsWith("*/")) return {
            lines: SF,
            doc: ""
          };
          const CF = SF.findLastIndex((FF => FF.startsWith("/**")));
          return -1 === CF ? {
            lines: SF,
            doc: ""
          } : {
            lines: vW(SF.slice(0, CF)),
            doc: SF.slice(CF).join("\n")
          }
        }

        function pF(FF) {
          var WF;
          const SF = FF.split("\n"),
            CF = SF.flatMap(((FF, WF) => UF.test(FF) ? [WF] : []));
          let AF = JF(SF.slice(0, null !== (WF = CF[0]) && void 0 !== WF ? WF : SF.length)).doc;
          return CF.map(((FF, WF) => {
            var uF;
            const hF = JF(SF.slice(FF, null !== (uF = CF[WF + 1]) && void 0 !== uF ? uF : SF.length)),
              bW = {
                name: SF[FF].match(UF)[1],
                doc: AF,
                lines: hF.lines
              };
            return AF = hF.doc, bW
          }))
        }

        function lF(FF) {
          var WF;
          const SF = FF.match(/^readonly \[([\s\S]*)\]$/);
          return SF ? null !== (WF = SF[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== WF ? WF : [] : null
        }

        function FW(FF) {
          if (!FF.startsWith("{") || !FF.endsWith("}")) return null;
          const WF = {
              keys: [],
              values: []
            },
            SF = FF => {
              const SF = FF.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              SF && (WF.keys.push(SF[1].startsWith('"') ? SF[1] : `"${SF[1]}"`), WF.values.push(SF[2].trim()))
            };
          let CF = 0,
            AF = "";
          for (const uF of FF.slice(1, -1)) "{[(".includes(uF) ? CF++ : "}])".includes(uF) && CF--, ";" === uF && 0 === CF ? (SF(AF), AF = "") : AF += uF;
          return SF(AF), WF
        }

        function WW(FF) {
          return FF.length > jW ? `\n\t| ${FF.join("\n\t| ")}` : FF.join(" | ")
        }

        function SW(FF, WF) {
          const SF = function(FF, WF) {
            return FF.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((FF, SF) => {
              var CF;
              const AF = null === (CF = WF.get(SF)) || void 0 === CF ? void 0 : CF.object;
              return AF ? WW(AF.values) : FF
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((FF, SF) => {
              var CF, AF;
              const uF = null === (CF = WF.get(SF)) || void 0 === CF || null === (AF = CF.object) || void 0 === AF ? void 0 : AF.values.map(lF);
              return null !== uF && void 0 !== uF && uF.every((FF => null !== FF)) ? WW([...new Set(uF.flat())]) : FF
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((FF, SF) => {
              var CF;
              const AF = null === (CF = WF.get(SF)) || void 0 === CF ? void 0 : CF.members;
              return AF ? WW(AF) : FF
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((FF, SF) => {
              var CF;
              const AF = null === (CF = WF.get(SF)) || void 0 === CF ? void 0 : CF.object;
              return AF ? WW(AF.keys) : FF
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((FF, SF) => {
              var CF, AF;
              return null !== (CF = null === (AF = WF.get(SF)) || void 0 === AF ? void 0 : AF.text) && void 0 !== CF ? CF : FF
            }))
          }(FF.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), WF);
          return [FF.doc, SF].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function CW(FF) {
          const WF = pF(FF),
            SF = function(FF) {
              const WF = new Map,
                SF = FF.find((FF => "_TypeOf" === FF.name));
              let CF = null;
              const AF = () => {
                if (CF) {
                  const FF = CF.lines.join("\n");
                  WF.set(CF.name, {
                    text: FF,
                    members: lF(FF),
                    object: FW(FF)
                  })
                }
              };
              for (const uF of SF.lines.slice(1, -1)) {
                const FF = uF.match(/^\t([\w$]+): (.+)$/);
                FF ? (AF(), CF = {
                  name: FF[1],
                  lines: [FF[2]]
                }) : CF && CF.lines.push(uF.replace(/^\t/, ""))
              }
              return AF(), WF
            }(WF),
            CF = new Map;
          for (const AF of WF) BF.has(AF.name) || CF.has(AF.name) || CF.set(AF.name, SW(AF, SF));
          return CF
        }
        let AW, uW, hW;

        function bS() {
          return uW ??= function(FF) {
            const WF = pF(FF).find((FF => "GameApi" === FF.name)),
              SF = new Map,
              CF = WF.lines;
            for (let uF = 0; uF < CF.length; uF++) {
              var AF;
              if (!CF[uF].trimStart().startsWith("/**")) continue;
              const FF = uF;
              for (; uF < CF.length && !CF[uF].includes("*/");) uF++;
              const WF = null === (AF = CF[uF + 1]) || void 0 === AF ? void 0 : AF.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!WF) continue;
              let hF = null;
              const bW = [];
              let dF = "description",
                PF = !1;
              for (const SF of CF.slice(FF, uF + 1).join("\n").split("\n").map((FF => FF.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const FF = SF.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                FF ? (hF = FF[1].trim(), dF = "deprecation") : SF.startsWith("@") ? (dF = "otherTag", PF = !0) : "" === SF.trim() ? PF || (dF = "description", bW.push(SF)) : "deprecation" !== dF || /^[A-Z]/.test(SF.trim()) ? "otherTag" !== dF && (dF = "description", bW.push(SF)) : hF = `${hF} ${SF.trim()}`.trim()
              }
              SF.set(WF[1], {
                deprecation: hF,
                description: bW.join("\n").trim()
              })
            }
            return SF
          }(XF.default), uW
        }

        function dW() {
          if (!hW) {
            hW = new Map;
            for (const FF of zW) {
              const WF = (0, DF.s)(sF(FF)).flatMap((FF => FF.blocks));
              for (const FF of (0, DF.j)(WF))
                if ("ts" === FF.lang || "typescript" === FF.lang)
                  for (const [WF, SF] of OF(FF.code)) hW.set(WF, SF)
            }
            for (const [FF, WF] of(AW ??= CW(XF.default), AW)) hW.has(FF) || hW.set(FF, WF)
          }
          return hW
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
        let RW;

        function iS() {
          if (!RW) {
            RW = new Map;
            for (const FF of zW)
              if (xW(FF.layout))
                for (const WF of sF(FF).sections) RW.has(WF.heading.text) || RW.set(WF.heading.text, {
                  pageId: FF.id,
                  anchor: WF.heading.anchor
                })
          }
          return RW
        }

        function eW(FF) {
          const WF = FF.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return WF ? iS().get(WF[1]) : void 0
        }
        const EW = (0, CF.createContext)("/docs"),
          QW = (0, CF.createContext)(null),
          rS = (0, CF.createContext)(!1),
          gS = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function tS(FF) {
          const WF = FF.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return WF ? WF[1] : null
        }

        function TW(FF) {
          let {
            colour: WF
          } = FF;
          return (0, QF.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: WF
            },
            "aria-hidden": "true"
          })
        }

        function aS(FF) {
          const WF = [];
          let SF = 0;
          for (const CF of FF.matchAll(gS)) WF.push(FF.slice(SF, CF.index), (0, QF.jsx)(TW, {
            colour: CF[0]
          }), CF[0]), SF = CF.index + CF[0].length;
          return WF.push(FF.slice(SF)), WF
        }

        function kS(FF) {
          let {
            href: WF,
            children: SF
          } = FF;
          const AF = (0, CF.useContext)(EW);
          if (WF.startsWith("#")) {
            const FF = HF(WF);
            if (FF) return (0, QF.jsx)(hF.e, {
              to: wF(AF, FF.page, FF.anchor),
              children: (0, QF.jsx)(rS.Provider, {
                value: !0,
                children: SF
              })
            })
          }
          return (0, QF.jsx)("a", {
            href: WF,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, QF.jsx)(rS.Provider, {
              value: !0,
              children: SF
            })
          })
        }

        function qS(FF) {
          let {
            code: WF
          } = FF;
          const SF = (0, CF.useContext)(EW);
          if ((0, CF.useContext)(rS)) return (0, QF.jsx)("code", {
            className: "DocsInlineCode",
            children: WF
          });
          if (dW().has(WF)) return (0, QF.jsx)(LW, {
            type: WF
          });
          const AF = eW(WF);
          if (AF) return (0, QF.jsx)(hF.e, {
            className: "DocsInlineCode DocsSymbolLink",
            to: wF(SF, fF(AF.pageId), AF.anchor),
            children: WF
          });
          const uF = tS(WF);
          return (0, QF.jsxs)("code", {
            className: "DocsInlineCode",
            children: [uF && (0, QF.jsx)(TW, {
              colour: uF
            }), WF]
          })
        }

        function VW(FF) {
          let {
            text: WF
          } = FF;
          const SF = [];
          let AF = 0;
          for (const CF of WF.matchAll(DF.g)) {
            CF.index > AF && SF.push(...aS(WF.slice(AF, CF.index)));
            const [, FF, uF, hF, bW, dF] = CF;
            FF ? SF.push((0, QF.jsx)(qS, {
              code: (0, DF.l)(FF, uF)
            })) : hF ? SF.push((0, QF.jsx)("strong", {
              children: (0, QF.jsx)(VW, {
                text: hF
              })
            })) : SF.push((0, QF.jsx)(kS, {
              href: dF,
              children: (0, QF.jsx)(VW, {
                text: bW
              })
            })), AF = CF.index + CF[0].length
          }
          return AF < WF.length && SF.push(...aS(WF.slice(AF))), (0, QF.jsx)(QF.Fragment, {
            children: SF.map(((FF, WF) => (0, QF.jsx)(CF.Fragment, {
              children: FF
            }, WF)))
          })
        }
        const NW = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          DW = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function LW(FF) {
          let {
            type: WF
          } = FF;
          const SF = dW(),
            AF = [];
          for (const CF of WF.trim().matchAll(NW)) {
            const [FF, WF, uF, hF, bW] = CF;
            WF ? AF.push((0, QF.jsx)("span", {
              className: "DocsTypeString",
              children: FF
            })) : uF && SF.has(uF) ? AF.push((0, QF.jsx)(oW, {
              name: uF,
              definition: SF.get(uF)
            })) : uF ? AF.push((0, QF.jsx)("span", {
              className: DW.has(uF) ? "DocsTypeKeyword" : "DocsTypeName",
              children: FF
            })) : hF ? AF.push((0, QF.jsx)("span", {
              className: "DocsTypeNumber",
              children: FF
            })) : bW ? AF.push(" ") : AF.push((0, QF.jsx)("span", {
              className: "DocsTypePunctuation",
              children: FF
            }))
          }
          return (0, QF.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: AF.map(((FF, WF) => (0, QF.jsx)(CF.Fragment, {
              children: FF
            }, WF)))
          })
        }
        const mS = 480,
          OW = 6,
          xS = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let ZW = 0;

        function oW(FF) {
          let {
            name: WF,
            definition: SF
          } = FF;
          const AF = (0, CF.useContext)(EW),
            uF = PW[WF],
            bW = (0, CF.useRef)(null),
            dF = (0, CF.useRef)(null),
            RF = (0, CF.useRef)(null),
            [iW, eF] = (0, CF.useState)(!1),
            [EF, rW] = (0, CF.useState)(null),
            tW = (0, CF.useRef)(),
            TF = (0, CF.useContext)(QW),
            [aW] = (0, CF.useState)((() => "DocsTypePopover-" + ZW++)),
            kW = () => {
              clearTimeout(tW.current), eF(!0)
            },
            qW = () => {
              clearTimeout(tW.current), tW.current = setTimeout((() => {
                eF(!1)
              }), 120)
            };
          return (0, CF.useEffect)((() => {
            if (!iW) return;
            const FF = FF => {
              if ("Escape" === FF.key) {
                var WF, SF;
                if (null !== (WF = dF.current) && void 0 !== WF && WF.contains(document.activeElement)) null === (SF = bW.current) || void 0 === SF || SF.focus();
                eF(!1)
              }
            };
            return document.addEventListener("keydown", FF), () => {
              document.removeEventListener("keydown", FF)
            }
          }), [iW]), (0, CF.useEffect)((() => () => {
            clearTimeout(tW.current)
          }), []), (0, CF.useLayoutEffect)((() => {
            if (!iW || !bW.current || !dF.current) return void rW(null);
            const FF = bW.current.getBoundingClientRect(),
              WF = dF.current.offsetHeight,
              SF = Math.min(mS, window.innerWidth - 32),
              CF = Math.min(Math.max(16, FF.left), window.innerWidth - SF - 16),
              AF = FF.bottom + OW + WF < window.innerHeight;
            rW({
              left: CF,
              top: AF ? FF.bottom + OW : Math.max(16, FF.top - OW - WF)
            })
          }), [iW]), (0, QF.jsxs)(QF.Fragment, {
            children: [(0, QF.jsx)("button", {
              type: "button",
              ref: bW,
              className: "DocsTypeLink",
              "aria-expanded": iW,
              "aria-describedby": iW ? aW : void 0,
              onMouseEnter: kW,
              onMouseLeave: qW,
              onFocus: kW,
              onBlur: qW,
              onKeyDown: FF => {
                "Tab" === FF.key && !FF.shiftKey && RF.current && (FF.preventDefault(), RF.current.focus())
              },
              onClick: kW,
              children: WF
            }), iW && (0, PF.createPortal)((0, QF.jsxs)("span", {
              ref: dF,
              id: aW,
              className: "DocsTypePopover",
              role: "tooltip",
              style: EF ? {
                left: EF.left,
                top: EF.top,
                maxWidth: mS
              } : {
                visibility: "hidden"
              },
              onMouseEnter: kW,
              onMouseLeave: qW,
              onFocus: kW,
              onBlur: qW,
              children: [(0, QF.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, QF.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: WF
                }), uF && (0, QF.jsxs)(hF.e, {
                  ref: RF,
                  className: "DocsTypePopoverLink",
                  to: wF(AF, fF(uF)),
                  onClick: () => {
                    eF(!1)
                  },
                  onKeyDown: FF => {
                    if ("Tab" === FF.key) {
                      var WF;
                      if (FF.preventDefault(), FF.shiftKey || !bW.current || ! function(FF, WF) {
                          const SF = [...document.querySelectorAll(xS)],
                            CF = SF.slice(SF.indexOf(FF) + 1).find((FF => FF.getClientRects().length > 0 && !(null !== WF && void 0 !== WF && WF.contains(FF))));
                          return null === CF || void 0 === CF || CF.focus(), void 0 !== CF
                        }(bW.current, dF.current)) null === (WF = bW.current) || void 0 === WF || WF.focus();
                      FF.shiftKey || eF(!1)
                    }
                  },
                  children: [fF(uF).title, (0, QF.jsx)(gW, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, QF.jsx)(NF, {
                lang: "ts",
                code: SF,
                compact: !0
              })]
            }), null !== TF && void 0 !== TF ? TF : document.body)]
          })
        }
        var YW = SF(161),
          MW = SF(3755),
          cS = SF(3759),
          GW = SF(3764);
        const zS = {
          progressBar: {
            FY: 30,
            gJ: .075,
            Tv: 5,
            AY: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            aJ: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            Dv: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            mJ: !0,
            scale: 3,
            rotation: 15,
            xJ: !1
          },
          gravityBar: {
            FY: 30,
            vJ: .25,
            WJ: 3,
            dJ: .8,
            gravity: 1,
            PJ: 1.5,
            RJ: 8,
            QJ: 4,
            AY: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            VJ: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            LJ: 5,
            mp: 1200,
            OJ: .15,
            ZJ: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var IW = SF(220),
          fW = SF(1629);

        function yS(FF) {
          return FF.startsWith("fa-")
        }
        const sW = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          nW = {
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

        function HW(FF) {
          return "string" === typeof FF ? "text" : "entityName" in FF || "translationKey" in FF ? "other" : (0, IW.yb)(FF) ? "progressBar" : (0, IW.xb)(FF) ? "keyBinding" : "icon" in FF ? "icon" : "str" in FF && "string" === typeof FF.str ? "text" : "other"
        }
        const KW = [{
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
          wW = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...KW],
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
                options: fW.j
              },
              isRequired: !0
            }, ...KW],
            other: []
          };

        function XW(FF) {
          return "string" === typeof FF ? {
            str: FF
          } : FF
        }

        function UW(FF, WF) {
          let SF = XW(FF);
          for (const CF of WF) SF = SF && "object" === typeof SF ? SF[CF] : void 0;
          return SF
        }

        function BW(FF, WF, SF) {
          const CF = (FF, AF) => {
            var uF;
            const hF = WF[AF],
              bW = {
                ...FF
              };
            if (AF === WF.length - 1) return void 0 === SF ? delete bW[hF] : bW[hF] = SF, bW;
            const dF = CF(null !== (uF = FF[hF]) && void 0 !== uF ? uF : {}, AF + 1);
            return 0 === Object.keys(dF).length ? delete bW[hF] : bW[hF] = dF, bW
          };
          return function(FF) {
            const WF = Object.keys(FF);
            return "string" === typeof FF.str && 1 === WF.length ? FF.str : FF
          }(CF(XW(FF), 0))
        }

        function jS(FF, WF) {
          const SF = HW(FF),
            CF = wW[SF].find((FF => FF.path.join(".") === WF.join("."))),
            AF = null !== CF && void 0 !== CF && CF.isRequired && "other" !== SF ? UW(nW[SF], WF) : void 0;
          return BW(FF, WF, AF)
        }

        function vS(FF) {
          switch (HW(FF)) {
            case "text":
              return String(UW(FF, ["str"]));
            case "icon":
              return String(UW(FF, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(UW(FF,["progress"])))}%`;
            case "keyBinding":
              return String(UW(FF, ["action"]));
            case "other":
              return JSON.stringify(FF)
          }
        }
        const JW = /^[A-Za-z_$][\w$]*$/;

        function pW(FF) {
          if (Array.isArray(FF)) return `[${FF.map(pW).join(", ")}]`;
          if (FF && "object" === typeof FF) {
            const WF = Object.entries(FF).map((FF => {
              let [WF, SF] = FF;
              return `${JW.test(WF)?WF:JSON.stringify(WF)}: ${pW(SF)}`
            }));
            return 0 === WF.length ? "{}" : `{ ${WF.join(", ")} }`
          }
          return JSON.stringify(FF)
        }

        function lW(FF) {
          const WF = FF.map(pW),
            SF = `[${WF.join(", ")}]`;
          return SF.length <= 60 ? SF : `[\n${WF.map((FF=>`    ${FF},`)).join("\n")}\n]`
        }
        const FS = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function WS(FF) {
          let WF = "";
          for (let AF = 0; AF < FF.length; AF++) {
            const uF = FF[AF];
            if ("\\" === uF) {
              var SF;
              const CF = null !== (SF = FF[AF + 1]) && void 0 !== SF ? SF : "";
              WF += "'" === CF ? "'" : uF + CF, AF++
            } else if ('"' === uF) WF += '\\"';
            else {
              var CF;
              WF += null !== (CF = FS[uF]) && void 0 !== CF ? CF : uF
            }
          }
          return `"${WF}"`
        }

        function SS(FF) {
          if ("string" === typeof FF) return !0;
          if (!FF || "object" !== typeof FF || Array.isArray(FF)) return !1;
          const WF = FF;
          return "ProgressBar" === WF.type ? "number" === typeof WF.progress : "StyledKeyBinding" === WF.type ? fW.j.includes(WF.action) : "string" === typeof WF.icon || "string" === typeof WF.str || "string" === typeof WF.entityName || "string" === typeof WF.translationKey
        }

        function CS(FF) {
          let WF;
          try {
            WF = function(FF) {
              let WF = "",
                SF = "",
                CF = 0;
              const AF = () => {
                WF += SF.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), SF = ""
              };
              for (; CF < FF.length;) {
                const uF = FF.slice(CF).search(/["'`]|\/\//);
                if (-1 === uF) {
                  SF += FF.slice(CF);
                  break
                }
                SF += FF.slice(CF, CF + uF);
                const hF = CF + uF,
                  bW = FF[hF];
                if ("/" === bW) {
                  const WF = FF.indexOf("\n", hF);
                  CF = -1 === WF ? FF.length : WF;
                  continue
                }
                if (AF(), "`" === bW) throw new Error("Use quotes rather than template strings.");
                let dF = hF + 1;
                for (; dF < FF.length && FF[dF] !== bW;) dF += "\\" === FF[dF] ? 2 : 1;
                if (dF >= FF.length) throw new Error("A string is missing its closing quote.");
                const PF = FF.slice(hF + 1, dF);
                WF += WS(PF), CF = dF + 1
              }
              return AF(), JSON.parse(WF)
            }(FF.trim())
          } catch (CF) {
            return {
              parts: null,
              error: CF instanceof SyntaxError ? "This isn't a valid array yet." : CF.message
            }
          }
          if (!Array.isArray(WF)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const SF = WF.findIndex((FF => !SS(FF)));
          return -1 !== SF ? {
            parts: null,
            error: `Part ${SF+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: WF,
            error: null
          }
        }
        const AS = 1 / YW.h.clientTicksPerSecond,
          uS = 700,
          hS = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          bC = {
            progressBar: zS.progressBar.aJ,
            timedClick: zS.timedClick.icon,
            gravityBar: zS.gravityBar.icon,
            precisionBar: zS.precisionBar.icon,
            rhythmClick: zS.rhythmClick.icon
          };

        function dS(FF) {
          let {
            type: WF
          } = FF;
          const [SF, AF] = (0, CF.useState)("ready"), [hF, bW] = (0, CF.useState)(1), [dF, PF] = (0, CF.useState)(!0), RF = (0, CF.useRef)(null), iW = (0, CF.useRef)(null), eF = (0, CF.useRef)(null), EF = (0, CF.useRef)(new Set), rW = (0, CF.useRef)(!1), tW = bC[WF], TF = (0, CF.useMemo)((() => ({
            getState: () => {
              var FF, WF;
              return null !== (FF = null === (WF = eF.current) || void 0 === WF ? void 0 : WF.getState()) && void 0 !== FF ? FF : hS
            },
            onFrame: FF => (EF.current.add(FF), () => {
              EF.current.delete(FF)
            })
          })), []);
          (0, CF.useEffect)((() => {
            const FF = RF.current,
              WF = iW.current;
            if (!FF || !WF) return;
            const SF = new ResizeObserver((() => {
              bW(FF.clientWidth / Math.max(1, WF.offsetWidth))
            }));
            return SF.observe(FF), () => {
              SF.disconnect()
            }
          }), []), (0, CF.useEffect)((() => {
            var FF;
            if ("playing" !== SF) return;
            let CF = !1;
            const uF = new GW.f[WF](zS[WF], (FF => {
              CF = !0, PF(!1), AF(FF ? "succeeded" : "failed")
            }), (() => {}));
            eF.current = uF;
            let hF = 0,
              bW = performance.now(),
              dF = requestAnimationFrame((function FF(WF) {
                for (hF += Math.min(.25, (WF - bW) / 1e3), bW = WF; hF >= AS && !CF;) hF -= AS, uF.handleTick(AS);
                for (const SF of EF.current) SF();
                CF || (dF = requestAnimationFrame(FF))
              }));
            return null === (FF = RF.current) || void 0 === FF || FF.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(dF), uF.tearDown(), eF.current = null, rW.current = !1
            }
          }), [SF, WF]), (0, CF.useEffect)((() => {
            if (dF) return;
            const FF = setTimeout((() => {
              PF(!0)
            }), uS);
            return () => {
              clearTimeout(FF)
            }
          }), [dF]);
          const aW = FF => {
            var WF;
            "playing" === SF && rW.current !== FF && (rW.current = FF, null === (WF = eF.current) || void 0 === WF || WF.handleMouseInput(FF))
          };
          return (0, QF.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, QF.jsxs)("div", {
              ref: RF,
              className: uF()("DocsQteStage", {
                Playing: "playing" === SF
              }),
              tabIndex: "playing" === SF ? 0 : -1,
              role: "playing" === SF ? "button" : void 0,
              "aria-label": "playing" === SF ? `${WF} quick time event: click or press Space` : void 0,
              onPointerDown: FF => {
                0 === FF.button && aW(!0)
              },
              onPointerUp: () => {
                aW(!1)
              },
              onPointerLeave: () => {
                aW(!1)
              },
              onPointerCancel: () => {
                aW(!1)
              },
              onKeyDown: FF => {
                "playing" !== SF || " " !== FF.key && "Enter" !== FF.key || (FF.preventDefault(), aW(!0))
              },
              onKeyUp: FF => {
                "playing" !== SF || " " !== FF.key && "Enter" !== FF.key || aW(!1)
              },
              children: [(0, QF.jsx)("div", {
                ref: iW,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${hF})`
                },
                children: "playing" === SF && (0, QF.jsx)(cS.c.Provider, {
                  value: TF,
                  children: (0, QF.jsx)(MW.d, {
                    qte: {
                      type: WF,
                      parameters: zS[WF]
                    }
                  })
                })
              }), "playing" !== SF && (0, QF.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== SF && (0, QF.jsxs)("div", {
                  className: uF()("DocsQteResult", "succeeded" === SF ? "Succeeded" : "Failed"),
                  children: [(0, QF.jsx)(gW, {
                    name: "succeeded" === SF ? "check" : "cross",
                    isTinted: !0
                  }), (0, QF.jsx)("span", {
                    children: "succeeded" === SF ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, QF.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !dF,
                  onClick: () => {
                    AF("playing")
                  },
                  children: [(0, QF.jsx)(gW, {
                    name: "ready" === SF ? "play" : "replay"
                  }), (0, QF.jsx)("span", {
                    children: "ready" === SF ? `Try ${WF}` : "Play again"
                  })]
                })]
              })]
            }), tW && !yS(tW) && (0, QF.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, QF.jsx)("code", {
                children: tW
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function PS(FF) {
          let {
            level: WF,
            text: SF,
            anchor: CF,
            className: AF
          } = FF;
          const hF = `h${Math.min(WF,6)}`;
          return (0, QF.jsxs)(hF, {
                id: CF,
                className: uF()("DocsHeading", AF),
                children: [(0, QF.jsx)(VW, {
                      text: SF
                    }), (0, QF.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${CF}`,
                        "aria-label": `Link to ${SF.replace(/`/g,"")}`,children:"#"})]})}function RS(FF){let{items:WF,ordered:SF}=FF;const CF=SF?"ol":"ul";return(0,QF.jsx)(CF,{className:"DocsList",children:WF.map(((FF,WF)=>(0,QF.jsxs)("li",{children:[(0,QF.jsx)(VW,{text:FF.text}),FF.children.length>0&&(0,QF.jsx)(RS,{items:FF.children,ordered:SF})]},WF)))})}function iC(FF){const WF=FF[0],SF="paragraph"===(null===WF||void 0===WF?void 0:WF.kind)?WF.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(SF)?"warning":/^\*\*(tip|prefer)/.test(SF)?"tip":"note"}function eS(FF){let{block:WF}=FF;switch(WF.kind){case"heading":return(0,QF.jsx)(PS,{level:WF.level,text:WF.text,anchor:WF.anchor});case"paragraph":return(0,QF.jsx)("p",{children:(0,QF.jsx)(VW,{text:WF.text})});case"code":{const FF="ts"===WF.lang?function(FF){const WF=FF.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return WF&&Object.hasOwn(zS,WF[1])?WF[1]:null}(WF.code):null;return(0,QF.jsxs)(QF.Fragment,{children:[(0,QF.jsx)(NF,{code:WF.code,lang:WF.lang}),FF&&(0,QF.jsx)(dS,{type:FF})]})}case"table":return(0,QF.jsx)("div",{className:"DocsTableScroll",children:(0,QF.jsxs)("table",{className:"DocsTable",children:[(0,QF.jsx)("thead",{children:(0,QF.jsx)("tr",{children:WF.header.map(((FF,WF)=>(0,QF.jsx)("th",{children:(0,QF.jsx)(VW,{text:FF})},WF)))})}),(0,QF.jsx)("tbody",{children:WF.rows.map(((FF,WF)=>(0,QF.jsx)("tr",{children:FF.map(((FF,WF)=>(0,QF.jsx)("td",{children:(0,QF.jsx)(VW,{text:FF})},WF)))},WF)))})]})});case"list":return(0,QF.jsx)(RS,{items:WF.items,ordered:WF.ordered});case"quote":return(0,QF.jsx)("aside",{className:uF()("DocsCallout",iC(WF.blocks)),children:(0,QF.jsx)(ES,{blocks:WF.blocks})});case"rule":return(0,QF.jsx)("hr",{className:"DocsRule"})}}function ES(FF){let{blocks:WF}=FF;return(0,QF.jsx)(QF.Fragment,{children:WF.map(((FF,WF)=>(0,QF.jsx)(eS,{block:FF},WF)))})}var QS=SF(3741),rC=SF(3747);function gC(FF){return"blocks"===FF||"items"===FF}const tC=new Map;function TS(FF){let WF=tC.get(FF);return WF||(WF=function(FF){const WF={entries:[],legend:[],notes:[],examples:[]};let SF=!1;for(const uF of FF.split(/\r?\n/).slice(1)){if(uF.startsWith("#")){const FF=uF.replace(/^# ?/,""),CF=FF.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);CF?WF.legend.push({code:CF[1],meaning:CF[2],usage:CF[3].trim()}):/^Examples:/.test(FF.trim())?SF=!0:SF&&FF.trim()?WF.examples.push(FF.trim()):FF.trim()&&!/^\s/.test(FF)&&WF.notes.push(FF.trim());continue}const FF=uF.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var CF,AF;FF&&WF.entries.push({name:FF[1],variants:null!==(CF=null===(AF=FF[2])||void 0===AF?void 0:AF.split(","))&&void 0!==CF?CF:[]})}return WF}("blocks"===FF?QS:rC),tC.set(FF,WF)),WF}function aC(FF){let{className:WF,value:SF,placeholder:CF,label:AF,onChange:uF,count:hF,children:bW}=FF;return(0,QF.jsxs)("div",{className:WF,children:[(0,QF.jsx)(gW,{name:"magnifying-glass"}),(0,QF.jsx)("input",{type:"search",value:SF,placeholder:CF,"aria-label":AF,onChange:FF=>{uF(FF.target.value)}}),bW,hF&&(0,QF.jsxs)("span",{className:"DocsFilterCount",children:[hF.visible," of ",hF.total]})]})}var kC=SF(929);function qC(FF){const WF=FF.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return WF?WF[2]:null}function VS(FF){return"paragraph"===FF.kind&&""===FF.text.trim()}function NS(FF){const WF={name:FF.heading.text,description:[],params:[],returns:null};let SF="description";for(const AF of FF.blocks)if(!VS(AF))if("heading"===AF.kind&&/^Parameters:?$/.test(AF.text))SF="params";else if("heading"===AF.kind&&/^Returns:?$/.test(AF.text))SF="returns",WF.returns={type:"",description:[]};else if("params"!==SF||"table"!==AF.kind){if("returns"===SF&&"paragraph"===AF.kind&&""===WF.returns.type){const FF=qC(AF.text);if(null!==FF){WF.returns.type=FF.replaceAll("\\|","|");continue}}"returns"===SF?WF.returns.description.push(AF):WF.description.push(AF)}else for(const[FF,SF,uF]of AF.rows){var CF;WF.params.push({name:FF,type:null!==(CF=qC(SF))&&void 0!==CF?CF:SF,description:null!==uF&&void 0!==uF?uF:""})}return WF}const DS=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function LS(FF){return FF.filter((FF=>!VS(FF)))}const mC=/^[\w][\w .'&!:()-]*$/,OS=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function xC(FF){var WF;if("code"===FF.kind&&"text"===FF.lang){const WF=FF.code.split("\n").map((FF=>FF.trim())).filter(Boolean);return WF.length>0&&WF.every((FF=>mC.test(FF)))?WF.map((FF=>({name:FF}))):null}return"paragraph"===FF.kind&&OS.test(FF.text.trim())?[...FF.text.matchAll(/`([ ^ `]+)` / g)].flatMap((FF => FF[1].split(/,\s*/).map((FF => ({
                              name: FF.trim()
                            }))))): "table" === FF.kind && null !== (WF = FF.header[0]) && void 0 !== WF && WF.startsWith("Song") ? FF.rows.map((FF => {
                              let [WF, SF] = FF;
                              return {
                                name: WF.replace(/`/g, ""),
                                caption: SF
                              }
                            })) : null
                          }

                          function ZS(FF) {
                            const WF = [];
                            for (const SF of FF) {
                              const FF = xC(SF),
                                CF = WF.at(-1),
                                AF = "table" === SF.kind;
                              FF ? "names" === (null === CF || void 0 === CF ? void 0 : CF.kind) && CF.isSongs === AF ? CF.names.push(...FF) : WF.push({
                                kind: "names",
                                names: FF,
                                isSongs: AF
                              }) : WF.push({
                                kind: "block",
                                block: SF
                              })
                            }
                            return WF
                          }
                          const oS = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function YS(FF, WF) {
                            return `${oS[FF]}-${(0,DF.o)(WF)}`
                          }
                          const MS = new WeakMap;

                          function cC(FF, WF, SF) {
                            let CF = MS.get(WF);
                            if (!CF) {
                              CF = new Map;
                              const SF = new Set;
                              for (const AF of (0, DF.s)(WF)) {
                                const WF = ZS(LS(AF.blocks)).map((WF => {
                                  if ("block" === WF.kind) return WF;
                                  return {
                                    kind: "names",
                                    names: WF.names.map((WF => {
                                      var CF, uF;
                                      const hF = YS(FF, WF.name);
                                      let bW = hF;
                                      for (let FF = 2; SF.has(bW); FF++) bW = `${hF}-${FF}`;
                                      return SF.add(bW), {
                                        ...WF,
                                        anchor: bW,
                                        heading: null !== (CF = null === (uF = AF.heading) || void 0 === uF ? void 0 : uF.text) && void 0 !== CF ? CF : ""
                                      }
                                    })),
                                    isSongs: WF.isSongs
                                  }
                                }));
                                CF.set(AF.blocks, WF)
                              }
                              MS.set(WF, CF)
                            }
                            const AF = CF.get(SF);
                            if (!AF) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return AF
                          }
                          const GS = "/textures/docs/skinPreviews",
                            zC = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var IS = SF(3416),
                            fS = SF(3434);

                          function yC(FF) {
                            return Object.hasOwn(IS.g, FF) ? IS.g[FF] : null
                          }
                          const sS = {
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
                            blendMode: fS.f.Standard
                          };

                          function nS(FF, WF, SF) {
                            return WF + (SF - WF) * FF()
                          }

                          function HS(FF, WF, SF) {
                            return FF + (WF - FF) * SF
                          }

                          function KS(FF) {
                            return FF.length > 0 && "timeFraction" in FF[0]
                          }

                          function wS(FF, WF) {
                            if (0 === FF.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!KS(FF.colorGradients)) {
                              const SF = FF.colorGradients,
                                {
                                  color: CF
                                } = SF[Math.floor(WF() * SF.length) % SF.length];
                              return [{
                                at: 0,
                                colour: [CF[0] / 255, CF[1] / 255, CF[2] / 255, 1]
                              }]
                            }
                            return [...FF.colorGradients].sort(((FF, WF) => FF.timeFraction - WF.timeFraction)).map((FF => {
                              var SF, CF, AF;
                              const uF = FF.minColor,
                                hF = null !== (SF = FF.maxColor) && void 0 !== SF ? SF : uF,
                                bW = WF(),
                                dF = [HS(uF[0], hF[0], bW) / 255, HS(uF[1], hF[1], bW) / 255, HS(uF[2], hF[2], bW) / 255, HS(null !== (CF = uF[3]) && void 0 !== CF ? CF : 1, null !== (AF = hF[3]) && void 0 !== AF ? AF : 1, bW)];
                              return {
                                at: FF.timeFraction,
                                colour: dF
                              }
                            }))
                          }

                          function XS(FF, WF, SF, CF) {
                            const AF = nS(CF, FF.minEmitPower, FF.maxEmitPower),
                              uF = WF => nS(CF, Math.min(FF.dir1[WF], FF.dir2[WF]), Math.max(FF.dir1[WF], FF.dir2[WF])) * AF,
                              hF = [...FF.velocityGradients].sort(((FF, WF) => FF.timeFraction - WF.timeFraction)).map((FF => ({
                                at: FF.timeFraction,
                                factor: nS(CF, FF.factor, FF.factor2)
                              })));
                            return {
                              pos: [nS(CF, WF[0], SF[0]), nS(CF, WF[1], SF[1]), nS(CF, WF[2], SF[2])],
                              dir: [uF(0), uF(1), uF(2)],
                              age: 0,
                              life: nS(CF, FF.minLifeTime, FF.maxLifeTime),
                              size: nS(CF, FF.minSize, FF.maxSize),
                              colours: wS(FF, CF),
                              velocityFactors: hF
                            }
                          }

                          function US(FF, WF, SF, CF) {
                            if (WF < FF[0].at) return SF(Math.min(1, FF.length - 1));
                            for (let AF = 0; AF < FF.length - 1; AF++)
                              if (WF <= FF[AF + 1].at) {
                                const uF = FF[AF + 1].at - FF[AF].at;
                                return CF(SF(AF), SF(AF + 1), uF > 0 ? (WF - FF[AF].at) / uF : 1)
                              } return SF(FF.length - 1)
                          }

                          function BS(FF) {
                            return US(FF.colours, FF.age / FF.life, (WF => FF.colours[WF].colour), ((FF, WF, SF) => [HS(FF[0], WF[0], SF), HS(FF[1], WF[1], SF), HS(FF[2], WF[2], SF), HS(FF[3], WF[3], SF)]))
                          }

                          function jC(FF, WF, SF) {
                            if (FF.age += SF, FF.age >= FF.life) return !1;
                            const CF = function(FF) {
                              return 0 === FF.velocityFactors.length ? 1 : US(FF.velocityFactors, FF.age / FF.life, (WF => FF.velocityFactors[WF].factor), HS)
                            }(FF) * SF;
                            for (let uF = 0; uF < 3; uF++) {
                              var AF;
                              FF.pos[uF] += FF.dir[uF] * CF, FF.dir[uF] += (null !== (AF = WF[uF]) && void 0 !== AF ? AF : 0) * SF
                            }
                            return !0
                          }

                          function vC(FF) {
                            return String(Math.round(1e6 * FF) / 1e6)
                          }

                          function JS(FF) {
                            return `[${FF.map(vC).join(", ")}]`
                          }

                          function pS(FF, WF) {
                            const SF = `${WF}    `;
                            return `[\n${(KS(FF)?FF.map((FF=>{const WF=[`${SF}    timeFraction: ${vC(FF.timeFraction)},`,`${SF}    minColor: ${JS(FF.minColor)},`];return FF.maxColor&&WF.push(`${SF}    maxColor: ${JS(FF.maxColor)},`),`${SF}{\n${WF.join("\n")}\n${SF}},`})):FF.map((FF=>`
                            $ {
                              SF
                            } {
                              color: $ {
                                JS(FF.color)
                              }
                            }, `))).join("\n")}\n${WF}]`
                          }
                          const lS = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            FC = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const WC = .6;

                          function SC(FF, WF) {
                            return `${WF?"song":"sound"}:${FF}`
                          }
                          let CC = {
                              track: null,
                              volume: WC
                            },
                            AC = null,
                            uC = 0,
                            hC = 0;
                          const bA = new Set;

                          function dC(FF) {
                            CC = {
                              ...CC,
                              ...FF
                            }, bA.forEach((FF => {
                              FF()
                            }))
                          }

                          function PC(FF) {
                            CC.track && dC({
                              track: {
                                ...CC.track,
                                ...FF
                              }
                            })
                          }

                          function RC(FF) {
                            const [WF, SF] = (0, CF.useState)((() => FF(CC))), AF = (0, CF.useRef)(FF);
                            return AF.current = FF, (0, CF.useEffect)((() => {
                              const FF = () => {
                                SF((() => AF.current(CC)))
                              };
                              return bA.add(FF), FF(), () => {
                                bA.delete(FF)
                              }
                            }), []), WF
                          }

                          function iA() {
                            uC++;
                            const FF = AC;
                            AC = null, null === FF || void 0 === FF || FF.stop()
                          }

                          function eC(FF, WF) {
                            let CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            iA();
                            const AF = uC,
                              {
                                track: uF
                              } = CC,
                              hF = uF && uF.name === FF && uF.isSong === WF ? uF.duration : 0;
                            hC = CF, dC({
                              track: {
                                name: FF,
                                isSong: WF,
                                status: "loading",
                                duration: hF
                              }
                            }), Promise.all([SF.e(195), SF.e(219)]).then((() => SF(37767))).then((SF => {
                              let {
                                playDocsSound: uF
                              } = SF;
                              AF === uC && (AC = uF(FF, WF, CC.volume, CF, {
                                onPlay: FF => {
                                  AF === uC && PC({
                                    status: "playing",
                                    duration: FF
                                  })
                                },
                                onEnd: FF => {
                                  var WF, SF;
                                  AF === uC && (AC = null, FF ? dC({
                                    track: null
                                  }) : (hC = null !== (WF = null === (SF = CC.track) || void 0 === SF ? void 0 : SF.duration) && void 0 !== WF ? WF : 0, PC({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((WF => {
                              console.error(`Could not play docs sound ${FF}`, WF), AF === uC && dC({
                                track: null
                              })
                            }))
                          }

                          function EC() {
                            const {
                              track: FF
                            } = CC;
                            if (!FF) return;
                            if ("playing" === FF.status && AC) return hC = AC.fD(), AC.pause(), void PC({
                              status: "paused"
                            });
                            if ("loading" === FF.status) return iA(), void PC({
                              status: "paused"
                            });
                            if (AC) return void AC.resume();
                            const WF = FF.duration > 0 && hC >= FF.duration - .05;
                            eC(FF.name, FF.isSong, WF ? 0 : hC)
                          }

                          function QC() {
                            var FF;
                            return AC && "playing" === (null === (FF = CC.track) || void 0 === FF ? void 0 : FF.status) ? AC.fD() : hC
                          }

                          function rA(FF) {
                            var WF;
                            null === (WF = AC) || void 0 === WF || WF.setVolume(FF), dC({
                              volume: FF
                            })
                          }

                          function gA() {
                            iA(), hC = 0, dC({
                              track: null
                            })
                          }
                          const tA = (0, CF.createContext)(null);
                          let TC = null;

                          function aA() {
                            const [FF, WF] = (0, CF.useState)(null);
                            return (0, CF.useEffect)((() => {
                              let FF = !1;
                              return TC ??= Promise.all([SF.e(59), SF.e(62), SF.e(60), SF.e(61), SF.e(178), SF.e(81), SF.e(200)]).then((() => SF(37763))), TC.then((SF => {
                                FF || WF(SF)
                              }), (FF => {
                                console.error("Could not load the docs gallery's textures", FF), TC = null
                              })), () => {
                                FF = !0
                              }
                            }), []), FF
                          }
                          const kA = 24,
                            qA = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function VC(FF, WF) {
                            const SF = "skins" === FF ? function(FF, WF) {
                              const SF = zC.find((WF => FF.startsWith(WF.heading)));
                              return SF ? function(FF, WF) {
                                return `${FF}-${WF}`
                              }(SF.prefix, WF) : null
                            }(WF.heading, WF.name) : null;
                            return null === SF ? null : `${GS}/${SF}.webp`
                          }

                          function NC(FF) {
                            let {
                              kind: WF,
                              entry: SF,
                              assets: AF,
                              renderedUrl: hF
                            } = FF;
                            const {
                              name: bW
                            } = SF, [dF, PF] = (0, CF.useState)(!1);
                            if ("icons" === WF && yS(bW)) return (0, QF.jsx)(kC.e, {
                              className: "DocsTileIcon",
                              name: bW
                            });
                            let RF = null;
                            var iW;
                            if ("icons" === WF) RF = null !== (iW = null === AF || void 0 === AF ? void 0 : AF.getIngameIconUrl(bW)) && void 0 !== iW ? iW : null;
                            else if ("particles" === WF) {
                              var eF, EF, rW;
                              RF = null !== (eF = null === AF || void 0 === AF ? void 0 : AF.getParticleTextureUrl(null !== (EF = null === (rW = yC(bW)) || void 0 === rW ? void 0 : rW.texture) && void 0 !== EF ? EF : bW)) && void 0 !== eF ? eF : null
                            } else "skins" === WF && (RF = null !== hF && void 0 !== hF ? hF : qA.test(bW) ? `/textures/charSkins/previews/${bW}_preview.png` : null);
                            return !RF || dF ? (0, QF.jsx)(gW, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === WF ? "person" : "image"
                            }) : (0, QF.jsx)("img", {
                              className: uF()("DocsTileImage", {
                                Pixelated: "skins" !== WF
                              }),
                              src: RF,
                              srcSet: RF === hF ? `${RF} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${RF}`), PF(!0)
                              }
                            })
                          }

                          function DC(FF) {
                            let {
                              entry: WF,
                              isSong: SF
                            } = FF;
                            const CF = RC((FF => {
                                let {
                                  track: CF
                                } = FF;
                                return (null === CF || void 0 === CF ? void 0 : CF.name) === WF.name && CF.isSong === SF ? CF.status : null
                              })),
                              AF = null !== CF && "paused" !== CF;
                            return (0, QF.jsxs)("button", {
                              type: "button",
                              id: WF.anchor,
                              className: uF()("DocsSoundTile", {
                                Playing: AF
                              }),
                              "data-docs-track": SC(WF.name, SF),
                              "aria-label": AF ? `Pause ${WF.name}` : `Play ${WF.name}`,
                              onClick: () => {
                                null !== CF ? EC() : eC(WF.name, SF)
                              },
                              children: [(0, QF.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, QF.jsx)(gW, {
                                  name: AF ? "pause" : "play"
                                })
                              }), (0, QF.jsx)("code", {
                                className: "DocsSoundName",
                                children: WF.name
                              }), WF.caption && (0, QF.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: WF.caption
                              })]
                            })
                          }

                          function LC(FF) {
                            let {
                              kind: WF,
                              names: SF,
                              isSongs: AF
                            } = FF;
                            const hF = aA(),
                              [bW, dF] = TF(),
                              PF = !1 === (null === bW || void 0 === bW ? void 0 : bW.failed) ? bW.text : null,
                              RF = (0, CF.useContext)(tA),
                              [iW, eF] = (0, CF.useState)(""),
                              EF = iW.trim().toLowerCase(),
                              rW = EF ? SF.filter((FF => FF.name.toLowerCase().includes(EF))) : SF;
                            return (0, QF.jsxs)("div", {
                              className: "DocsGallery",
                              children: [SF.length > kA && (0, QF.jsx)(aC, {
                                className: "DocsGalleryFilter",
                                value: iW,
                                placeholder: `Filter ${SF.length} names\u2026`,
                                label: "Filter names",
                                onChange: eF,
                                count: EF ? {
                                  visible: rW.length,
                                  total: SF.length
                                } : null
                              }), (0, QF.jsx)("div", {
                                className: uF()("DocsGalleryGrid", `Kind-${WF}`, {
                                  Songs: AF
                                }),
                                children: rW.map((FF => {
                                  if ("sounds" === WF) return (0, QF.jsx)(DC, {
                                    entry: FF,
                                    isSong: AF
                                  }, FF.anchor);
                                  if (RF && "particles" === WF && yC(FF.name)) return (0, QF.jsxs)("button", {
                                    type: "button",
                                    id: FF.anchor,
                                    className: uF()("DocsTile Previewable", {
                                      Copied: PF === FF.name
                                    }),
                                    title: `Play "${FF.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      RF(FF.name), dF(FF.name)
                                    },
                                    children: [(0, QF.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, QF.jsx)(NC, {
                                        kind: WF,
                                        entry: FF,
                                        assets: hF,
                                        renderedUrl: null
                                      }), (0, QF.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, QF.jsx)(gW, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, QF.jsx)("span", {
                                      className: "DocsTileName",
                                      children: PF === FF.name ? "Copied!" : FF.name
                                    })]
                                  }, FF.anchor);
                                  const SF = VC(WF, FF);
                                  return (0, QF.jsxs)("button", {
                                    type: "button",
                                    id: FF.anchor,
                                    className: uF()("DocsTile", {
                                      Copied: PF === FF.name
                                    }),
                                    title: `Copy "${FF.name}"`,
                                    onClick: () => {
                                      dF(FF.name)
                                    },
                                    children: [(0, QF.jsx)("span", {
                                      className: uF()("DocsTilePreview", {
                                        Rendered: null !== SF
                                      }),
                                      children: (0, QF.jsx)(NC, {
                                        kind: WF,
                                        entry: FF,
                                        assets: hF,
                                        renderedUrl: SF
                                      })
                                    }), (0, QF.jsx)("span", {
                                      className: "DocsTileName",
                                      children: PF === FF.name ? "Copied!" : FF.name
                                    })]
                                  }, FF.anchor)
                                }))
                              })]
                            })
                          }

                          function mA(FF) {
                            let {
                              kind: WF,
                              content: SF,
                              blocks: CF
                            } = FF;
                            return (0, QF.jsx)(QF.Fragment, {
                              children: cC(WF, SF, CF).map(((FF, SF) => "block" === FF.kind ? (0, QF.jsx)(eS, {
                                block: FF.block
                              }, SF) : (0, QF.jsx)(LC, {
                                kind: WF,
                                names: FF.names,
                                isSongs: FF.isSongs
                              }, SF)))
                            })
                          }
                          const OC = [{
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

                          function xA(FF) {
                            let {
                              cards: WF = OC,
                              label: SF = "Start here"
                            } = FF;
                            const AF = (0, CF.useContext)(EW);
                            return (0, QF.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": SF,
                              children: WF.map((FF => {
                                let {
                                  pageId: WF,
                                  countNoun: SF
                                } = FF;
                                const CF = fF(WF);
                                return (0, QF.jsxs)(hF.e, {
                                  to: wF(AF, CF),
                                  className: "DocsLandingCard",
                                  children: [(0, QF.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, QF.jsx)(gW, {
                                      name: CF.icon
                                    })
                                  }), (0, QF.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: CF.title
                                  }), (0, QF.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: CF.summary
                                  }), SF && (0, QF.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [sF(CF).sections.length, " ", SF]
                                  })]
                                }, WF)
                              }))
                            })
                          }
                          const ZC = 240;

                          function oC(FF) {
                            let {
                              faces: WF
                            } = FF;
                            return (0, QF.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, QF.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${WF.top}")`
                                }
                              }), (0, QF.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${WF.left}")`
                                }
                              }), (0, QF.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${WF.right}")`
                                }
                              })]
                            })
                          }

                          function YC(FF) {
                            let {
                              src: WF
                            } = FF;
                            const [SF, AF] = (0, CF.useState)(!1);
                            return SF ? null : (0, QF.jsx)("img", {
                              src: WF,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${WF}`), AF(!0)
                              }
                            })
                          }

                          function MC(FF) {
                            let {
                              kind: WF
                            } = FF;
                            const SF = TS(WF),
                              AF = aA(),
                              hF = (0, bW.p)(),
                              [dF, PF] = (0, CF.useState)(""),
                              [RF, iW] = (0, CF.useState)(null),
                              [eF, EF] = (0, CF.useState)(ZC),
                              [rW, tW] = (0, CF.useState)(null),
                              TF = (0, CF.useRef)(null),
                              kW = dF.trim().toLowerCase();
                            (0, CF.useEffect)((() => {
                              const FF = (0, DF.m)(hF.hash),
                                CF = SF.entries.find((SF => YS(WF, SF.name) === FF));
                              if (CF) TF.current = CF.name, PF(CF.name), iW(null), tW(CF.name);
                              else if (null !== TF.current) {
                                const FF = TF.current;
                                TF.current = null, PF((WF => WF === FF ? "" : WF)), tW(null)
                              }
                            }), [SF, WF, hF.hash, hF.key]), (0, CF.useEffect)((() => {
                              var FF;
                              null !== rW && (null === (FF = document.getElementById(YS(WF, rW))) || void 0 === FF || FF.scrollIntoView({
                                block: "center"
                              }))
                            }), [WF, rW]);
                            const qW = SF.entries.filter((FF => (!kW || FF.name.toLowerCase().includes(kW)) && (!RF || FF.variants.includes(RF))));
                            return (0, QF.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [SF.notes.length > 0 && (0, QF.jsx)("div", {
                                className: "DocsProse",
                                children: SF.notes.map((FF => (0, QF.jsx)("p", {
                                  children: FF
                                }, FF)))
                              }), SF.legend.length > 0 && (0, QF.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, QF.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, QF.jsx)("thead", {
                                    children: (0, QF.jsxs)("tr", {
                                      children: [(0, QF.jsx)("th", {
                                        children: "Code"
                                      }), (0, QF.jsx)("th", {
                                        children: "Variant"
                                      }), (0, QF.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, QF.jsx)("tbody", {
                                    children: SF.legend.map((FF => (0, QF.jsxs)("tr", {
                                      children: [(0, QF.jsx)("td", {
                                        children: (0, QF.jsx)("button", {
                                          type: "button",
                                          className: uF()("DocsVariantChip", {
                                            Active: RF === FF.code
                                          }),
                                          "aria-pressed": RF === FF.code,
                                          title: `Show only ${WF} with ${FF.meaning} variants`,
                                          onClick: () => {
                                            iW(RF === FF.code ? null : FF.code)
                                          },
                                          children: FF.code
                                        })
                                      }), (0, QF.jsx)("td", {
                                        children: FF.meaning
                                      }), (0, QF.jsx)("td", {
                                        children: (0, QF.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: FF.usage
                                        })
                                      })]
                                    }, FF.code)))
                                  })]
                                })
                              }), SF.examples.length > 0 && (0, QF.jsx)(NF, {
                                lang: "text",
                                code: SF.examples.join("\n")
                              }), (0, QF.jsx)(aC, {
                                className: "DocsFilterBar",
                                value: dF,
                                placeholder: `Search ${SF.entries.length} ${WF}\u2026`,
                                label: `Search ${WF}`,
                                onChange: FF => {
                                  PF(FF), EF(ZC)
                                },
                                count: kW || RF ? {
                                  visible: qW.length,
                                  total: SF.entries.length
                                } : null,
                                children: RF && (0, QF.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    iW(null)
                                  },
                                  children: [RF, " ", (0, QF.jsx)(gW, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, QF.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: qW.slice(0, eF).map((FF => {
                                  const SF = "blocks" === WF ? null === AF || void 0 === AF ? void 0 : AF.getBlockFaces(FF.name) : null,
                                    CF = AF && !SF ? AF.getItemTextureUrl(FF.name) : null;
                                  return (0, QF.jsxs)("div", {
                                    id: YS(WF, FF.name),
                                    className: uF()("DocsCatalogueTile", {
                                      Linked: FF.name === rW
                                    }),
                                    children: [(0, QF.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [SF && (0, QF.jsx)(oC, {
                                        faces: SF
                                      }), CF && (0, QF.jsx)(YC, {
                                        src: CF
                                      })]
                                    }), (0, QF.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: FF.name
                                    }), FF.variants.length > 0 && (0, QF.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: FF.variants.map((FF => (0, QF.jsx)("span", {
                                        children: FF
                                      }, FF)))
                                    }), (0, QF.jsx)(aW, {
                                      text: FF.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, FF.name)
                                }))
                              }), qW.length > eF && (0, QF.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  EF(qW.length)
                                },
                                children: ["Show all ", qW.length]
                              }), 0 === qW.length && (0, QF.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", WF, " match."]
                              })]
                            })
                          }
                          var cA = SF(3820),
                            GC = SF(1421);
                          const zA = .95 * cA.e;

                          function IC(FF) {
                            return /^\s*```/.test(FF)
                          }

                          function fC(FF, WF) {
                            const SF = [
                              []
                            ];
                            let CF = !1;
                            for (const AF of FF.split("\n")) !CF && WF(AF) && SF.at(-1).length > 0 && SF.push([]), IC(AF) && (CF = !CF), SF.at(-1).push(AF);
                            return SF.map((FF => FF.join("\n").trim())).filter(Boolean)
                          }

                          function yA(FF, WF) {
                            const SF = `${"#".repeat(WF)} `,
                              CF = [];
                            let AF = !1;
                            for (const uF of FF.split("\n")) IC(uF) ? AF = !AF : !AF && uF.startsWith(SF) && CF.push(uF.slice(SF.length).trim());
                            return CF
                          }

                          function sC(FF) {
                            return FF.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class nC {
                            constructor(FF, WF) {
                              this.origin = WF, this.pages = void 0, this.partPaths = new Map;
                              const SF = FF.map((FF => {
                                const WF = function(FF, WF) {
                                  const SF = FF.map((FF => WF(FF) + 2)),
                                    CF = SF.reduce(((FF, WF) => FF + WF), 0),
                                    AF = CF / Math.ceil(CF / zA),
                                    uF = [];
                                  let hF = 0;
                                  return FF.forEach(((FF, WF) => {
                                    const CF = SF[WF];
                                    (0 === uF.length || hF + CF > zA || hF + CF / 2 > AF) && (uF.push([]), hF = 0), uF.at(-1).push(FF), hF += CF
                                  })), uF
                                }(fC(sC(FF), (FF => FF.startsWith("## "))).flatMap((FF => {
                                  var WF;
                                  const SF = null !== (WF = yA(FF, 2)[0]) && void 0 !== WF ? WF : "";
                                  if (FF.length <= zA) return [{
                                    markdown: FF,
                                    section: SF
                                  }];
                                  let CF = !1;
                                  return fC(FF, (FF => {
                                    const WF = CF && "" !== FF.trim();
                                    return CF = "" === FF.trim(), WF
                                  })).map((FF => ({
                                    markdown: FF,
                                    section: SF
                                  })))
                                })), (WF => this.resolveLinks(FF, WF.markdown).length));
                                return {
                                  page: FF,
                                  groups: WF.length > 1 ? WF : []
                                }
                              }));
                              for (const {
                                  page: CF,
                                  groups: AF
                                }
                                of SF) AF.forEach(((FF, WF) => {
                                const SF = (0, cA.v)(CF.slug, WF);
                                for (const AF of FF.flatMap((FF => [...yA(FF.markdown, 2), ...yA(FF.markdown, 3)]))) {
                                  const FF = `${CF.id}#${(0,DF.o)(AF)}`;
                                  this.partPaths.has(FF) || this.partPaths.set(FF, SF)
                                }
                              }));
                              this.pages = SF.map((FF => {
                                let {
                                  page: WF,
                                  groups: SF
                                } = FF;
                                return {
                                  page: WF,
                                  path: (0, cA.r)(WF.slug),
                                  markdown: `# ${WF.title}\n\n${this.resolveLinks(WF,sC(WF))}\n`,
                                  parts: SF.map(((FF, CF) => this.renderPart(WF, FF, CF, SF.length)))
                                }
                              }))
                            }
                            url(FF) {
                              return `${this.origin}${FF}`
                            }
                            getPage(FF) {
                              return this.pages.find((WF => WF.page.id === FF))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((FF => (FF.parts.length > 0 ? FF.parts : [{
                                path: FF.path,
                                label: "",
                                markdown: FF.markdown
                              }]).filter((FF => FF.markdown.length > cA.e))))
                            }
                            markdownUrl(FF, WF) {
                              const SF = WF && this.partPaths.get(`${FF.id}#${WF}`) || (0, cA.r)(FF.slug);
                              return this.url(WF ? `${SF}#${WF}` : SF)
                            }
                            resolveLinks(FF, WF) {
                              return WF.replace(/\]\((#[^)]+)\)/g, ((WF, SF) => {
                                var CF;
                                const AF = null !== (CF = HF(SF)) && void 0 !== CF ? CF : this.samePageTarget(FF, SF);
                                return AF ? `](${this.markdownUrl(AF.page,AF.anchor)})` : WF
                              }))
                            }
                            samePageTarget(FF, WF) {
                              const SF = (0, DF.o)(WF.slice(1));
                              return nF(FF, SF) ? {
                                page: FF,
                                anchor: SF
                              } : null
                            }
                            renderPart(FF, WF, SF, CF) {
                              const AF = function(FF) {
                                  const WF = FF.map((FF => FF.section)).filter(Boolean);
                                  if (0 === WF.length) return "";
                                  const SF = WF[0],
                                    CF = WF.at(-1);
                                  return SF === CF ? SF : `${SF} to ${CF}`
                                }(WF),
                                uF = WF.map((FF => FF.markdown)).join("\n\n"),
                                hF = AF ? `It covers ${AF}. ` : "",
                                bW = `Part ${SF+1} of ${CF} of [${FF.title}](${this.url((0,cA.r)(FF.slug))}). ${hF}[llms.txt](${this.url(cA.j)}) lists every part.`;
                              return {
                                path: (0, cA.v)(FF.slug, SF),
                                label: AF,
                                markdown: `# ${FF.title}, part ${SF+1} of ${CF}\n\n${bW}\n\n${this.resolveLinks(FF,uF)}\n`
                              }
                            }
                            llmsTxt(FF) {
                              const WF = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${HC(cA.e)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const SF of IF) {
                                WF.push("", `## ${SF.title}`, "");
                                for (const FF of SF.pageIds) {
                                  const SF = this.getPage(FF),
                                    {
                                      page: CF,
                                      parts: AF
                                    } = SF,
                                    uF = `About ${HC(SF.markdown.length)} tokens${AF.length>0?`, in ${AF.length} parts:`:"."}`;
                                  WF.push(`- [${CF.title}](${this.url(SF.path)}): ${CF.summary} ${uF}`), AF.forEach(((FF, SF) => {
                                    WF.push(`  - [Part ${SF+1}${FF.label?`: ${FF.label}`:""}](${this.url(FF.path)})`)
                                  }))
                                }
                              }
                              return WF.push("", "## Optional", "", `- [Every page in one file](${this.url(cA.h)}): About ${HC(FF.length)} tokens, for a model with a large context window.`, ""), WF.join("\n")
                            }
                            llmsFullTxt() {
                              return IF.flatMap((FF => FF.pageIds.map((FF => this.getPage(FF).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const FF = this.llmsFullTxt(),
                                WF = this.llmsTxt(FF),
                                SF = new Map([
                                  [cA.l, WF],
                                  [cA.j, WF],
                                  [cA.h, FF]
                                ]);
                              for (const CF of this.pages) {
                                SF.set(CF.path, CF.markdown);
                                for (const FF of CF.parts) SF.set(FF.path, FF.markdown)
                              }
                              return SF
                            }
                          }

                          function HC(FF) {
                            return `${Math.max(1,Math.round(FF/4e3))}K`
                          }
                          let KC = null;

                          function wC() {
                            return KC ??= new nC(zW, GC.d), KC
                          }
                          const XC = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function UC(FF) {
                            return wC().getPage(FF.id).parts.length > 0 ? `Read ${cA.k}, then the parts of the Bloxd Code API's ${FF.title} page it lists, so I can ask questions about it.` : `Read ${GC.d}${(0,cA.r)(FF.slug)} so I can ask questions about it. ${cA.k} lists every page of the Bloxd Code API docs.`
                          }

                          function BC(FF) {
                            let {
                              page: WF
                            } = FF;
                            const [SF, CF] = TF();
                            return (0, QF.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, QF.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  CF(wC().getPage(WF.id).markdown)
                                },
                                children: [(0, QF.jsx)(gW, {
                                  name: !1 === (null === SF || void 0 === SF ? void 0 : SF.failed) ? "check" : "copy"
                                }), (0, QF.jsx)("span", {
                                  children: SF ? SF.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), XC.map((FF => (0, QF.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${FF.url}${encodeURIComponent(UC(WF))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, QF.jsx)(gW, {
                                  name: "external-link"
                                }), (0, QF.jsxs)("span", {
                                  children: ["Open in ", FF.name]
                                })]
                              }, FF.name)))]
                            })
                          }

                          function jA(FF) {
                            return `#${[0,1,2].map((WF=>Math.round(Math.min(255,Math.max(0,FF[WF]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function vA(FF) {
                            return [parseInt(FF.slice(1, 3), 16), parseInt(FF.slice(3, 5), 16), parseInt(FF.slice(5, 7), 16)]
                          }

                          function JC(FF) {
                            let {
                              label: WF,
                              min: SF,
                              max: CF,
                              step: AF,
                              low: uF,
                              high: hF,
                              onChange: bW
                            } = FF;
                            return (0, QF.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, QF.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, QF.jsx)("span", {
                                  children: WF
                                }), (0, QF.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: uF === hF ? uF : `${uF}\u2013${hF}`
                                })]
                              }), (0, QF.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, QF.jsx)("input", {
                                  type: "range",
                                  min: SF,
                                  max: CF,
                                  step: AF,
                                  value: Math.min(CF, uF),
                                  "aria-label": `Minimum ${WF.toLowerCase()}`,
                                  onChange: FF => {
                                    const WF = Number(FF.target.value);
                                    bW(WF, Math.max(WF, hF))
                                  }
                                }), (0, QF.jsx)("input", {
                                  type: "range",
                                  min: SF,
                                  max: CF,
                                  step: AF,
                                  value: Math.min(CF, hF),
                                  "aria-label": `Maximum ${WF.toLowerCase()}`,
                                  onChange: FF => {
                                    const WF = Number(FF.target.value);
                                    bW(Math.min(WF, uF), WF)
                                  }
                                })]
                              })]
                            })
                          }

                          function pC(FF) {
                            let {
                              label: WF,
                              min: SF,
                              max: CF,
                              step: AF,
                              value: uF,
                              onChange: hF,
                              format: bW = String
                            } = FF;
                            return (0, QF.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, QF.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, QF.jsx)("span", {
                                  children: WF
                                }), (0, QF.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: bW(uF)
                                })]
                              }), (0, QF.jsx)("input", {
                                type: "range",
                                min: SF,
                                max: CF,
                                step: AF,
                                value: Math.min(CF, Math.max(SF, uF)),
                                "aria-label": WF,
                                onChange: FF => {
                                  hF(Number(FF.target.value))
                                }
                              })]
                            })
                          }

                          function lC(FF) {
                            let {
                              opts: WF,
                              onChange: SF
                            } = FF;
                            const CF = WF.colorGradients;
                            if (!KS(CF)) return (0, QF.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, QF.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, QF.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, QF.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: CF.map(((FF, WF) => (0, QF.jsx)("input", {
                                  type: "color",
                                  value: jA(FF.color),
                                  "aria-label": `Colour ${WF+1}`,
                                  onChange: FF => {
                                    const AF = [...CF];
                                    AF[WF] = {
                                      color: vA(FF.target.value)
                                    }, SF(AF)
                                  }
                                }, WF)))
                              })]
                            });
                            const AF = (FF, WF) => {
                              const AF = [...CF];
                              AF[FF] = WF, SF(AF)
                            };
                            return (0, QF.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, QF.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, QF.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, QF.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), CF.map(((FF, WF) => {
                                var SF;
                                const CF = null !== (SF = FF.maxColor) && void 0 !== SF ? SF : FF.minColor;
                                return (0, QF.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, QF.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * FF.timeFraction), "%"]
                                  }), (0, QF.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${jA(FF.minColor)}, ${jA(CF)})`
                                    }
                                  }), (0, QF.jsx)("input", {
                                    type: "color",
                                    value: jA(FF.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*FF.timeFraction)}%`,
                                    onChange: SF => {
                                      AF(WF, {
                                        ...FF,
                                        minColor: [...vA(SF.target.value), FF.minColor[3]]
                                      })
                                    }
                                  }), (0, QF.jsx)("input", {
                                    type: "color",
                                    value: jA(CF),
                                    "aria-label": `Maximum colour at ${Math.round(100*FF.timeFraction)}%`,
                                    onChange: SF => {
                                      AF(WF, {
                                        ...FF,
                                        maxColor: [...vA(SF.target.value), CF[3]]
                                      })
                                    }
                                  })]
                                }, WF)
                              }))]
                            })
                          }
                          const FA = [-.5, -.5, -.5],
                            WA = [.5, .5, .5],
                            SA = [0, 1, 2, 3, 4, 5, 6, 7].map((FF => [1 & FF ? WA[0] : FA[0], 2 & FF ? WA[1] : FA[1], 4 & FF ? WA[2] : FA[2]]));class CA {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(FF, WF, SF, CF) {
                              const AF = Math.round(31 * WF),
                                uF = Math.round(31 * SF),
                                hF = Math.round(31 * CF),
                                bW = `${AF}|${uF}|${hF}`;
                              let dF = this.tints.get(FF);
                              (!dF || dF.size > 2e3) && (dF = new Map, this.tints.set(FF, dF));
                              let PF = dF.get(bW);
                              if (PF) return PF;
                              PF = document.createElement("canvas"), PF.width = FF.naturalWidth || 16, PF.height = FF.naturalHeight || 16;
                              const RF = PF.getContext("2d");
                              return RF ? (RF.imageSmoothingEnabled = !1, RF.drawImage(FF, 0, 0, PF.width, PF.height), RF.globalCompositeOperation = "multiply", RF.fillStyle = `rgb(${AF/31*255}, ${uF/31*255}, ${hF/31*255})`, RF.fillRect(0, 0, PF.width, PF.height), RF.globalCompositeOperation = "destination-in", RF.drawImage(FF, 0, 0, PF.width, PF.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), dF.set(bW, PF), PF
                            }
                          }

                          function AA(FF) {
                            let {
                              opts: WF,
                              textureUrl: SF,
                              burst: AF,
                              paused: uF
                            } = FF;
                            const hF = (0, CF.useRef)(null),
                              bW = (0, CF.useRef)(WF);
                            bW.current = WF;
                            const dF = (0, CF.useRef)(uF);
                            dF.current = uF;
                            const PF = (0, CF.useRef)(null),
                              RF = (0, CF.useRef)(null),
                              iW = (0, CF.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(FF) {
                                let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const SF = [-.5, -.5, -.5],
                                  CF = [.5, .5, .5];
                                let AF = .5;
                                for (let uF = 0; uF < 40; uF++) {
                                  const uF = XS(FF, SF, CF, WF),
                                    hF = Math.max(uF.life / 30, .001);
                                  for (; jC(uF, FF.gravity, hF);) AF = Math.max(AF, Math.hypot(uF.pos[0], uF.pos[1], uF.pos[2]) + uF.size / 2)
                                }
                                return AF
                              }(WF)))), [WF]),
                              eF = (0, CF.useRef)(iW);
                            return eF.current = iW, (0, CF.useEffect)((() => {
                              if (PF.current = null, !SF) return;
                              const FF = new Image;
                              let WF = !1;
                              return FF.onload = () => {
                                WF || (PF.current = FF)
                              }, FF.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${SF}`)
                              }, FF.src = SF, () => {
                                WF = !0
                              }
                            }), [SF]), (0, CF.useEffect)((() => {
                              var FF;
                              null === (FF = RF.current) || void 0 === FF || FF.call(RF)
                            }), [WF, AF]), (0, CF.useEffect)((() => {
                              const FF = hF.current,
                                WF = null === FF || void 0 === FF ? void 0 : FF.getContext("2d");
                              if (!FF || !WF) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const SF = new CA;
                              let CF = [],
                                AF = 0,
                                uF = -.7,
                                iW = eF.current,
                                EF = performance.now(),
                                QF = 0,
                                rW = !0,
                                gW = null;
                              const tW = () => {
                                const FF = bW.current,
                                  WF = Math.min(400, Math.max(0, Math.ceil(FF.manualEmitCount)));
                                CF = [];
                                for (let SF = 0; SF < WF; SF++) CF.push(XS(FF, FA, WA, Math.random));
                                AF = 0
                              };
                              RF.current = tW, tW();
                              const TF = hF => {
                                QF = requestAnimationFrame(TF);
                                const RF = Math.min(.05, (hF - EF) / 1e3);
                                if (EF = hF, !rW) return;
                                const aW = window.devicePixelRatio || 1,
                                  kW = Math.round(FF.clientWidth * aW),
                                  qW = Math.round(FF.clientHeight * aW);
                                if (0 === kW || 0 === qW) return;
                                FF.width === kW && FF.height === qW || (FF.width = kW, FF.height = qW);
                                const VF = bW.current;
                                null === gW && (uF += .18 * RF), iW += (eF.current - iW) * Math.min(1, 4 * RF);
                                const NF = .6 * RF;
                                CF = CF.filter((FF => jC(FF, VF.gravity, NF))), 0 !== CF.length || dF.current || (AF += RF, AF > .6 && tW());
                                const DF = function(FF, WF, SF, CF) {
                                  const AF = 3.2 * CF,
                                    uF = .44 * Math.min(FF, WF) * AF / CF,
                                    hF = Math.cos(SF),
                                    bW = Math.sin(SF),
                                    dF = Math.cos(.42),
                                    PF = Math.sin(.42);
                                  return (SF, CF, RF) => {
                                    const iW = SF * bW + RF * hF,
                                      eF = AF - (CF * PF + iW * dF);
                                    if (eF < .05) return null;
                                    const EF = uF / eF;
                                    return {
                                      x: FF / 2 + (SF * hF - RF * bW) * EF,
                                      y: WF / 2 - (CF * dF - iW * PF) * EF,
                                      scale: EF,
                                      depth: eF
                                    }
                                  }
                                }(kW, qW, uF, iW);
                                ! function(FF, WF, SF, CF, AF) {
                                  const uF = FF.createLinearGradient(0, 0, 0, SF);
                                  uF.addColorStop(0, "#23262d"), uF.addColorStop(1, "#16181c"), FF.globalCompositeOperation = "source-over", FF.globalAlpha = 1, FF.fillStyle = uF, FF.fillRect(0, 0, WF, SF);
                                  const hF = (WF, SF) => {
                                      const AF = CF(WF[0], WF[1], WF[2]),
                                        uF = CF(SF[0], SF[1], SF[2]);
                                      AF && uF && (FF.beginPath(), FF.moveTo(AF.x, AF.y), FF.lineTo(uF.x, uF.y), FF.stroke())
                                    },
                                    bW = Math.ceil(AF) + 1,
                                    dF = FA[1];
                                  FF.lineWidth = 1, FF.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let PF = -bW; PF <= bW; PF++) hF([PF + .5, dF, .5 - bW], [PF + .5, dF, bW + .5]), hF([.5 - bW, dF, PF + .5], [bW + .5, dF, PF + .5]);
                                  FF.strokeStyle = "rgba(255, 255, 255, 0.28)", FF.setLineDash([4, 4]);
                                  for (const PF of SA)
                                    for (const FF of SA) {
                                      const WF = [0, 1, 2].filter((WF => PF[WF] !== FF[WF]));
                                      1 === WF.length && PF[WF[0]] < FF[WF[0]] && hF(PF, FF)
                                    }
                                  FF.setLineDash([])
                                }(WF, kW, qW, DF, iW);
                                const LF = PF.current,
                                  mW = CF.map((FF => ({
                                    particle: FF,
                                    at: DF(FF.pos[0], FF.pos[1], FF.pos[2])
                                  }))).filter((FF => null !== FF.at)).sort(((FF, WF) => WF.at.depth - FF.at.depth));
                                WF.imageSmoothingEnabled = !1;
                                for (const FF of function(FF) {
                                    switch (FF) {
                                      case fS.f.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case fS.f.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case fS.f.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case fS.f.MultiplyAdd:
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
                                  }(VF.blendMode)) {
                                  WF.globalCompositeOperation = FF.operation;
                                  for (const {
                                      particle: CF,
                                      at: AF
                                    }
                                    of mW) {
                                    const [uF, hF, bW, dF] = BS(CF), PF = Math.max(1, CF.size * AF.scale);
                                    WF.globalAlpha = FF.usesAlpha ? Math.min(1, Math.max(0, dF)) : 1, LF ? WF.drawImage(SF.get(LF, uF, hF, bW), AF.x - PF / 2, AF.y - PF / 2, PF, PF) : (WF.fillStyle = `rgb(${255*uF}, ${255*hF}, ${255*bW})`, WF.fillRect(AF.x - PF / 2, AF.y - PF / 2, PF, PF))
                                  }
                                }
                                WF.globalCompositeOperation = "source-over", WF.globalAlpha = 1
                              };
                              QF = requestAnimationFrame(TF);
                              const aW = new IntersectionObserver((FF => {
                                let [WF] = FF;
                                rW = WF.isIntersecting
                              }));
                              aW.observe(FF);
                              const kW = WF => {
                                  gW = WF.clientX, FF.setPointerCapture(WF.pointerId)
                                },
                                qW = FF => {
                                  null !== gW && (uF += .01 * (FF.clientX - gW), gW = FF.clientX)
                                },
                                VF = () => {
                                  gW = null
                                };
                              return FF.addEventListener("pointerdown", kW), FF.addEventListener("pointermove", qW), FF.addEventListener("pointerup", VF), FF.addEventListener("pointercancel", VF), () => {
                                cancelAnimationFrame(QF), aW.disconnect(), RF.current = null, FF.removeEventListener("pointerdown", kW), FF.removeEventListener("pointermove", qW), FF.removeEventListener("pointerup", VF), FF.removeEventListener("pointercancel", VF)
                              }
                            }), []), (0, QF.jsx)("canvas", {
                              ref: hF,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${WF.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const uA = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            hA = [{
                              mode: fS.f.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: fS.f.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: fS.f.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: fS.f.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: fS.f.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            bu = (0, CF.forwardRef)((function(FF, WF) {
                              var SF, AF;
                              let {
                                textures: hF
                              } = FF;
                              const bW = aA(),
                                dF = (0, CF.useRef)(null),
                                [PF, RF] = (0, CF.useState)(sS),
                                [iW, eF] = (0, CF.useState)("example"),
                                [EF, rW] = (0, CF.useState)(0),
                                [tW, TF] = (0, CF.useState)(!1),
                                kW = FF => {
                                  const WF = "example" === FF ? sS : yC(FF);
                                  WF && (RF(WF), eF(FF))
                                };
                              (0, CF.useImperativeHandle)(WF, (() => ({
                                preview: FF => {
                                  var WF;
                                  kW(FF), null === (WF = dF.current) || void 0 === WF || WF.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const qW = FF => {
                                  RF({
                                    ...PF,
                                    ...FF
                                  }), eF(null)
                                },
                                VF = function(FF, WF) {
                                  if (null !== WF) return `${lS}    presetId: "${WF}",\n${FC}\n})`;
                                  const SF = FF.velocityGradients.map((FF => `        {\n            timeFraction: ${vC(FF.timeFraction)},\n            factor: ${vC(FF.factor)},\n            factor2: ${vC(FF.factor2)},\n        },`)),
                                    CF = [`    dir1: ${JS(FF.dir1)},`, `    dir2: ${JS(FF.dir2)},`, FC, `    texture: "${FF.texture}",`, `    minLifeTime: ${vC(FF.minLifeTime)},`, `    maxLifeTime: ${vC(FF.maxLifeTime)},`, `    minEmitPower: ${vC(FF.minEmitPower)},`, `    maxEmitPower: ${vC(FF.maxEmitPower)},`, `    minSize: ${vC(FF.minSize)},`, `    maxSize: ${vC(FF.maxSize)},`, `    manualEmitCount: ${vC(FF.manualEmitCount)},`, `    gravity: ${JS(FF.gravity)},`, `    colorGradients: ${pS(FF.colorGradients,"    ")},`, `    velocityGradients: ${SF.length>0?`[\n${SF.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${vC(FF.blendMode)},`];
                                  return void 0 !== FF.hideDist && CF.push(`    hideDist: ${vC(FF.hideDist)},`), `${lS}${CF.join("\n")}\n})`
                                }(PF, null === iW || "example" === iW ? null : iW),
                                DF = hF.includes(PF.texture) ? hF : [...hF, PF.texture];
                              return (0, QF.jsxs)("section", {
                                ref: dF,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, QF.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, QF.jsxs)("div", {
                                    children: [(0, QF.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, QF.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, QF.jsx)(aW, {
                                    text: VF,
                                    label: "Copy code"
                                  })]
                                }), (0, QF.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, QF.jsx)("button", {
                                    type: "button",
                                    className: uF()("DocsVariantChip", {
                                      Active: "example" === iW
                                    }),
                                    onClick: () => {
                                      kW("example")
                                    },
                                    children: "Example"
                                  }), uA.filter((FF => null !== yC(FF))).map((FF => (0, QF.jsx)("button", {
                                    type: "button",
                                    className: uF()("DocsVariantChip", {
                                      Active: iW === FF
                                    }),
                                    onClick: () => {
                                      kW(FF)
                                    },
                                    children: FF
                                  }, FF))), (0, QF.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== iW && void 0 !== iW ? iW : "custom",
                                    "aria-label": "Preset",
                                    onChange: FF => {
                                      kW(FF.target.value)
                                    },
                                    children: [(0, QF.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === iW && (0, QF.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), IS.e.map((FF => (0, QF.jsx)("option", {
                                      value: FF,
                                      children: FF
                                    }, FF)))]
                                  })]
                                }), (0, QF.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, QF.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, QF.jsx)(AA, {
                                      opts: PF,
                                      textureUrl: null !== (SF = null === bW || void 0 === bW ? void 0 : bW.getParticleTextureUrl(PF.texture)) && void 0 !== SF ? SF : null,
                                      burst: EF,
                                      paused: tW
                                    }), (0, QF.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, QF.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          rW(EF + 1)
                                        },
                                        children: [(0, QF.jsx)(gW, {
                                          name: "replay"
                                        }), (0, QF.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, QF.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": tW,
                                        onClick: () => {
                                          TF(!tW)
                                        },
                                        children: [(0, QF.jsx)(gW, {
                                          name: tW ? "play" : "pause"
                                        }), (0, QF.jsx)("span", {
                                          children: tW ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, QF.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, QF.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, QF.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, QF.jsx)("span", {
                                          children: "Texture"
                                        }), (0, QF.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: PF.texture
                                        })]
                                      }), (0, QF.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: DF.map((FF => {
                                          var WF;
                                          const SF = null !== (WF = null === bW || void 0 === bW ? void 0 : bW.getParticleTextureUrl(FF)) && void 0 !== WF ? WF : null;
                                          return (0, QF.jsx)("button", {
                                            type: "button",
                                            className: uF()("DocsParticleTexture", {
                                              Active: PF.texture === FF
                                            }),
                                            title: FF,
                                            "aria-label": FF,
                                            "aria-pressed": PF.texture === FF,
                                            onClick: () => {
                                              qW({
                                                texture: FF
                                              })
                                            },
                                            children: SF ? (0, QF.jsx)("img", {
                                              src: SF,
                                              alt: ""
                                            }) : (0, QF.jsx)(gW, {
                                              name: "image"
                                            })
                                          }, FF)
                                        }))
                                      })]
                                    }), (0, QF.jsx)(pC, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: PF.manualEmitCount,
                                      onChange: FF => {
                                        qW({
                                          manualEmitCount: FF
                                        })
                                      }
                                    }), (0, QF.jsx)(JC, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: PF.minLifeTime,
                                      high: PF.maxLifeTime,
                                      onChange: (FF, WF) => {
                                        qW({
                                          minLifeTime: FF,
                                          maxLifeTime: WF
                                        })
                                      }
                                    }), (0, QF.jsx)(JC, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: PF.minEmitPower,
                                      high: PF.maxEmitPower,
                                      onChange: (FF, WF) => {
                                        qW({
                                          minEmitPower: FF,
                                          maxEmitPower: WF
                                        })
                                      }
                                    }), (0, QF.jsx)(JC, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: PF.minSize,
                                      high: PF.maxSize,
                                      onChange: (FF, WF) => {
                                        qW({
                                          minSize: FF,
                                          maxSize: WF
                                        })
                                      }
                                    }), (0, QF.jsx)(pC, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (AF = PF.gravity[1]) && void 0 !== AF ? AF : 0,
                                      onChange: FF => {
                                        var WF, SF;
                                        qW({
                                          gravity: [null !== (WF = PF.gravity[0]) && void 0 !== WF ? WF : 0, FF, null !== (SF = PF.gravity[2]) && void 0 !== SF ? SF : 0]
                                        })
                                      }
                                    }), (0, QF.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, QF.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, QF.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, QF.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: PF.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: FF => {
                                          qW({
                                            blendMode: Number(FF.target.value)
                                          })
                                        },
                                        children: hA.map((FF => {
                                          let {
                                            mode: WF,
                                            label: SF
                                          } = FF;
                                          return (0, QF.jsx)("option", {
                                            value: WF,
                                            children: SF
                                          }, WF)
                                        }))
                                      })]
                                    }), (0, QF.jsx)(lC, {
                                      opts: PF,
                                      onChange: FF => {
                                        qW({
                                          colorGradients: FF
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, QF.jsx)(NF, {
                                  code: VF,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var dA = SF(3561),
                            PA = SF(1546);

                          function RA(FF, WF) {
                            return FF ? dA.d.includes(WF) ? FF.getIngameIconUrl(WF) : FF.getItemIconUrl(WF) : null
                          }

                          function iu(FF) {
                            var WF, SF, CF;
                            let {
                              part: AF,
                              assets: hF
                            } = FF;
                            const bW = RA(hF, AF.icon),
                              dF = null !== (WF = null === (SF = AF.style) || void 0 === SF ? void 0 : SF.fontSize) && void 0 !== WF ? WF : "1.8em",
                              PF = (0, IW.Yb)(AF.style);
                            return (0, QF.jsxs)("span", {
                              className: uF()("DocsBloxdTextIcon", {
                                Missing: !bW
                              }),
                              style: {
                                width: dF,
                                height: dF,
                                opacity: null === (CF = AF.style) || void 0 === CF ? void 0 : CF.opacity
                              },
                              title: bW ? void 0 : `No Bloxd icon, item or block is called "${AF.icon}"`,
                              children: [bW && PF && (0, QF.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: PF,
                                  maskImage: `url("${bW}")`,
                                  WebkitMaskImage: `url("${bW}")`
                                }
                              }), bW ? (0, QF.jsx)("img", {
                                src: bW,
                                alt: "",
                                className: uF()({
                                  Tinted: PF
                                })
                              }) : (0, QF.jsx)(gW, {
                                name: "image"
                              })]
                            })
                          }

                          function eA(FF) {
                            let {
                              parts: WF,
                              className: SF
                            } = FF;
                            const CF = aA(),
                              AF = [];
                            let hF = [];
                            const bW = FF => {
                              hF.length > 0 && (AF.push((0, QF.jsx)(PA.d, {
                                text: hF
                              }, `run-${FF}`)), hF = [])
                            };
                            return WF.forEach(((FF, WF) => {
                              "icon" !== HW(FF) || yS(FF.icon) ? hF.push(FF) : (bW(WF), AF.push((0, QF.jsx)(iu, {
                                part: FF,
                                assets: CF
                              }, `icon-${WF}`)))
                            })), bW(WF.length), (0, QF.jsx)("div", {
                              className: uF()("DocsStyledTextPreview", SF),
                              children: AF
                            })
                          }
                          const EA = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let QA = null;

                          function ru(FF) {
                            if (QA ??= document.createElement("canvas").getContext("2d"), !QA) return "#000000";
                            QA.fillStyle = "#000000", QA.fillStyle = FF;
                            const WF = QA.fillStyle;
                            return WF.startsWith("#") ? WF : "#000000"
                          }

                          function gu(FF) {
                            let {
                              value: WF,
                              label: SF,
                              onChange: CF
                            } = FF;
                            return (0, QF.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, QF.jsx)("input", {
                                type: "color",
                                value: ru(WF),
                                "aria-label": `${SF} picker`,
                                onChange: FF => {
                                  CF(FF.target.value)
                                }
                              }), (0, QF.jsx)("input", {
                                type: "text",
                                value: WF,
                                placeholder: "#ffb914 or gold",
                                "aria-label": SF,
                                spellCheck: !1,
                                onChange: FF => {
                                  CF(FF.target.value)
                                }
                              })]
                            })
                          }

                          function tu(FF) {
                            let {
                              value: WF,
                              fontAwesomeIcons: SF,
                              onChange: AF
                            } = FF;
                            const hF = aA(),
                              [bW, dF] = (0, CF.useState)(yS(WF) ? "fontAwesome" : "bloxd"),
                              [PF, RF] = (0, CF.useState)(""),
                              iW = PF.trim().toLowerCase(),
                              eF = "bloxd" === bW ? dA.d : SF,
                              EF = iW ? eF.filter((FF => FF.toLowerCase().includes(iW))) : eF;
                            return (0, QF.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, QF.jsx)("input", {
                                type: "text",
                                value: WF,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: FF => {
                                  AF(FF.target.value)
                                }
                              }), (0, QF.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, QF.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((FF => (0, QF.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": bW === FF,
                                    className: uF()("DocsVariantChip", {
                                      Active: bW === FF
                                    }),
                                    onClick: () => {
                                      dF(FF)
                                    },
                                    children: "bloxd" === FF ? `Bloxd icons (${dA.d.length})` : `Font Awesome (${SF.length})`
                                  }, FF))), (0, QF.jsx)("input", {
                                    type: "search",
                                    value: PF,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: FF => {
                                      RF(FF.target.value)
                                    }
                                  })
                                ]
                              }), (0, QF.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [EF.map((FF => {
                                  const SF = "bloxd" === bW ? RA(hF, FF) : null;
                                  return (0, QF.jsx)("button", {
                                    type: "button",
                                    title: FF,
                                    "aria-label": FF,
                                    "aria-pressed": FF === WF,
                                    className: uF()("DocsIconPickerOption", {
                                      Active: FF === WF
                                    }),
                                    onClick: () => {
                                      AF(FF)
                                    },
                                    children: "fontAwesome" === bW ? (0, QF.jsx)(kC.e, {
                                      name: FF
                                    }) : SF ? (0, QF.jsx)("img", {
                                      src: SF,
                                      alt: ""
                                    }) : (0, QF.jsx)(gW, {
                                      name: "image"
                                    })
                                  }, FF)
                                })), 0 === EF.length && (0, QF.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", PF, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function TA(FF) {
                            let {
                              property: WF,
                              value: SF,
                              fontAwesomeIcons: CF,
                              onChange: AF
                            } = FF;
                            const {
                              field: uF,
                              label: hF
                            } = WF, bW = FF => "" !== FF || WF.isRequired ? FF : void 0;
                            switch (uF.kind) {
                              case "text":
                                return uF.multiline ? (0, QF.jsx)("textarea", {
                                  value: String(null !== SF && void 0 !== SF ? SF : ""),
                                  rows: 2,
                                  "aria-label": hF,
                                  onChange: FF => {
                                    AF(FF.target.value)
                                  }
                                }) : (0, QF.jsx)("input", {
                                  type: "text",
                                  value: String(null !== SF && void 0 !== SF ? SF : ""),
                                  "aria-label": hF,
                                  onChange: FF => {
                                    AF(bW(FF.target.value))
                                  }
                                });
                              case "size":
                                return (0, QF.jsx)("input", {
                                  type: "text",
                                  value: String(null !== SF && void 0 !== SF ? SF : ""),
                                  placeholder: WF.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": hF,
                                  spellCheck: !1,
                                  onChange: FF => {
                                    AF(bW(FF.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, QF.jsx)(gu, {
                                  value: String(null !== SF && void 0 !== SF ? SF : ""),
                                  label: hF,
                                  onChange: FF => {
                                    AF(bW(FF))
                                  }
                                });
                              case "colours": {
                                const FF = Array.isArray(SF) ? SF : [],
                                  WF = FF => {
                                    AF(FF.length > 0 ? FF : void 0)
                                  };
                                return (0, QF.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [FF.map(((SF, CF) => (0, QF.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, QF.jsx)(gu, {
                                      value: SF,
                                      label: `${hF} ${CF+1}`,
                                      onChange: SF => {
                                        WF(FF.map(((FF, WF) => WF === CF ? SF : FF)))
                                      }
                                    }), (0, QF.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${CF+1}`,
                                      onClick: () => {
                                        WF(FF.filter(((FF, WF) => WF !== CF)))
                                      },
                                      children: (0, QF.jsx)(gW, {
                                        name: "cross"
                                      })
                                    })]
                                  }, CF))), (0, QF.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var SF;
                                      WF([...FF, null !== (SF = FF.at(-1)) && void 0 !== SF ? SF : "#ffffff"])
                                    },
                                    children: [(0, QF.jsx)(gW, {
                                      name: "plus"
                                    }), 0 === FF.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var dF;
                                const FF = "number" === typeof SF ? SF : Number(null !== (dF = WF.defaultText) && void 0 !== dF ? dF : 0);
                                return (0, QF.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, QF.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: FF,
                                    "aria-label": hF,
                                    onChange: FF => {
                                      AF(Number(FF.target.value))
                                    }
                                  }), (0, QF.jsx)("output", {
                                    children: FF.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, QF.jsxs)("select", {
                                  value: String(null !== SF && void 0 !== SF ? SF : ""),
                                  "aria-label": hF,
                                  onChange: FF => {
                                    AF(bW(FF.target.value))
                                  },
                                  children: [!WF.isRequired && (0, QF.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", WF.defaultText, ")"]
                                  }), uF.options.map((FF => (0, QF.jsx)("option", {
                                    value: FF,
                                    children: FF
                                  }, FF)))]
                                });
                              case "icon":
                                return (0, QF.jsx)(tu, {
                                  value: String(null !== SF && void 0 !== SF ? SF : ""),
                                  fontAwesomeIcons: CF,
                                  onChange: AF
                                })
                            }
                          }

                          function au(FF) {
                            let WF;
                            try {
                              WF = JSON.parse(FF)
                            } catch (SF) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${SF.message}`
                              }
                            }
                            return SS(WF) ? {
                              part: WF,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function ku(FF) {
                            let {
                              parts: WF,
                              index: SF,
                              fontAwesomeIcons: AF,
                              onChange: uF,
                              eWF: hF,
                              onClose: bW
                            } = FF;
                            const dF = (0, CF.useContext)(QW),
                              RF = (0, CF.useRef)(null),
                              iW = WF[SF],
                              eF = HW(iW),
                              [EF, rW] = (0, CF.useState)((() => JSON.stringify(iW, null, 2))),
                              tW = (0, CF.useMemo)((() => "other" === eF ? au(EF).error : null), [eF, EF]);
                            (0, CF.useEffect)((() => {
                              var FF;
                              null === (FF = RF.current) || void 0 === FF || FF.focus()
                            }), []);
                            const TF = (0, QF.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: FF => {
                                FF.target === FF.currentTarget && bW()
                              },
                              children: (0, QF.jsxs)("div", {
                                ref: RF,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${SF+1}: ${sW[eF]}`,
                                tabIndex: -1,
                                onKeyDown: FF => {
                                  "Escape" === FF.key ? (FF.stopPropagation(), bW()) : "Tab" === FF.key && RF.current && function(FF, WF) {
                                    const SF = Array.from(FF.querySelectorAll(xS)),
                                      CF = SF[0],
                                      AF = SF.at(-1);
                                    if (!CF || !AF) return;
                                    const uF = document.activeElement;
                                    !WF.shiftKey || uF !== CF && uF !== FF ? WF.shiftKey || uF !== AF || (WF.preventDefault(), CF.focus()) : (WF.preventDefault(), AF.focus())
                                  }(RF.current, FF)
                                },
                                children: [(0, QF.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, QF.jsxs)("div", {
                                    children: [(0, QF.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", SF + 1]
                                    }), (0, QF.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: sW[eF]
                                    })]
                                  }), (0, QF.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: bW,
                                    children: (0, QF.jsx)(gW, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, QF.jsx)(eA, {
                                  parts: WF,
                                  className: "DocsTextDialogPreview"
                                }), (0, QF.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === eF ? (0, QF.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, QF.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, QF.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: EF,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: FF => {
                                        rW(FF.target.value);
                                        const WF = au(FF.target.value);
                                        null !== WF.part && uF(WF.part)
                                      }
                                    }), tW && (0, QF.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: tW
                                    })]
                                  }) : wW[eF].map((FF => {
                                    const WF = UW(iW, FF.path),
                                      SF = FF.isRequired ? JSON.stringify(jS(iW, FF.path)) === JSON.stringify(iW) : void 0 === WF;
                                    return (0, QF.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, QF.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, QF.jsx)("span", {
                                          children: FF.label
                                        }), (0, QF.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: SF,
                                          "aria-label": `Reset ${FF.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            uF(jS(iW, FF.path))
                                          },
                                          children: [(0, QF.jsx)(gW, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, QF.jsx)(TA, {
                                        property: FF,
                                        value: WF,
                                        fontAwesomeIcons: AF,
                                        onChange: WF => {
                                          uF(BW(iW, FF.path, WF))
                                        }
                                      }), !FF.isRequired && (0, QF.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", FF.defaultText]
                                      })]
                                    }, FF.path.join("."))
                                  }))
                                }), (0, QF.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, QF.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: hF,
                                    children: [(0, QF.jsx)(gW, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, QF.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: bW,
                                    children: "Done"
                                  })]
                                }), (0, QF.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: EA.map((FF => (0, QF.jsx)("option", {
                                    value: FF
                                  }, FF)))
                                })]
                              })
                            });
                            return dF ? (0, PF.createPortal)(TF, dF) : TF
                          }
                          const qu = [{
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
                            VA = Object.keys(nW);

                          function NA(FF) {
                            let {
                              fontAwesomeIcons: WF
                            } = FF;
                            const [SF, AF] = (0, CF.useState)(qu[0].parts), [hF, bW] = (0, CF.useState)((() => lW(qu[0].parts))), [dF, PF] = (0, CF.useState)(null), [RF, iW] = (0, CF.useState)(!1), [eF, EF] = (0, CF.useState)(null), [rW, tW] = (0, CF.useState)(!1), [TF, aW] = (0, CF.useState)(null), kW = (0, CF.useRef)(null), qW = lW(SF);
                            (0, CF.useLayoutEffect)((() => {
                              var FF;
                              if (!TF) return;
                              const WF = FF => {
                                  var WF;
                                  return null === (WF = kW.current) || void 0 === WF ? void 0 : WF.querySelector(`[data-focus-key="${FF}"]`)
                                },
                                SF = WF(TF.key);
                              null === (FF = SF && !SF.disabled ? SF : WF(TF.fallback)) || void 0 === FF || FF.focus(), aW(null)
                            }), [TF]);
                            const VF = FF => {
                                AF(FF), bW(lW(FF)), PF(null)
                              },
                              DF = FF => {
                                VF(SF.filter(((WF, SF) => SF !== FF))), aW({
                                  key: `edit-${Math.min(FF,SF.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              LF = (FF, WF) => {
                                const CF = [...SF],
                                  [AF] = CF.splice(FF, 1);
                                CF.splice(FF + WF, 0, AF), VF(CF);
                                aW({
                                  key: `${WF<0?"up":"down"}-${FF+WF}`,
                                  fallback: `edit-${FF+WF}`
                                })
                              };
                            return (0, QF.jsxs)("section", {
                              ref: kW,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, QF.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, QF.jsxs)("div", {
                                  children: [(0, QF.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, QF.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, QF.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: qu.map((FF => (0, QF.jsx)("button", {
                                  type: "button",
                                  className: uF()("DocsVariantChip", {
                                    Active: qW === lW(FF.parts)
                                  }),
                                  onClick: () => {
                                    VF(FF.parts)
                                  },
                                  children: FF.label
                                }, FF.label)))
                              }), (0, QF.jsx)(eA, {
                                parts: SF,
                                className: "DocsTextEditorPreview"
                              }), (0, QF.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, QF.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, QF.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, QF.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [SF.map(((FF, WF) => {
                                      const CF = HW(FF);
                                      return (0, QF.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, QF.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${WF}`,
                                          "aria-label": `Edit part ${WF+1}, ${sW[CF]}`,
                                          onClick: () => {
                                            EF(WF)
                                          },
                                          children: [(0, QF.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: sW[CF]
                                          }), (0, QF.jsx)(eA, {
                                            parts: [FF],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== CF && (0, QF.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: vS(FF)
                                          })]
                                        }), (0, QF.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, QF.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${WF+1} up`,
                                            "data-focus-key": `up-${WF}`,
                                            disabled: 0 === WF,
                                            onClick: () => {
                                              LF(WF, -1)
                                            },
                                            children: (0, QF.jsx)(gW, {
                                              name: "chevron-up"
                                            })
                                          }), (0, QF.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${WF+1} down`,
                                            "data-focus-key": `down-${WF}`,
                                            disabled: WF === SF.length - 1,
                                            onClick: () => {
                                              LF(WF, 1)
                                            },
                                            children: (0, QF.jsx)(gW, {
                                              name: "chevron-down"
                                            })
                                          }), (0, QF.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${WF+1}`,
                                            onClick: () => {
                                              DF(WF)
                                            },
                                            children: (0, QF.jsx)(gW, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, WF)
                                    })), 0 === SF.length && (0, QF.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, QF.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: FF => {
                                      "Escape" === FF.key && rW && (FF.stopPropagation(), tW(!1), aW({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, QF.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": rW,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        tW(!rW)
                                      },
                                      children: [(0, QF.jsx)(gW, {
                                        name: "plus"
                                      }), "Add a part", (0, QF.jsx)(gW, {
                                        name: rW ? "chevron-up" : "chevron-down"
                                      })]
                                    }), rW && (0, QF.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: VA.map((FF => (0, QF.jsx)("li", {
                                        children: (0, QF.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (FF => {
                                              VF([...SF, nW[FF]]), tW(!1), EF(SF.length)
                                            })(FF)
                                          },
                                          children: sW[FF]
                                        })
                                      }, FF)))
                                    })]
                                  })]
                                }), (0, QF.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, QF.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, QF.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": RF,
                                      onClick: () => {
                                        iW(!RF)
                                      },
                                      children: [(0, QF.jsx)(gW, {
                                        name: RF ? "check" : "pencil"
                                      }), RF ? "Done" : "Edit"]
                                    })]
                                  }), RF ? (0, QF.jsxs)(QF.Fragment, {
                                    children: [(0, QF.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: hF,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: FF => {
                                        bW(FF.target.value);
                                        const WF = CS(FF.target.value);
                                        PF(WF.error), WF.parts && AF(WF.parts)
                                      }
                                    }), dF && (0, QF.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: dF
                                    })]
                                  }) : (0, QF.jsx)(NF, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${qW})`
                                  })]
                                })]
                              }), null !== eF && eF < SF.length && (0, QF.jsx)(ku, {
                                parts: SF,
                                index: eF,
                                fontAwesomeIcons: WF,
                                onChange: FF => {
                                  ((FF, WF) => {
                                    VF(SF.map(((SF, CF) => CF === FF ? WF : SF)))
                                  })(eF, FF)
                                },
                                eWF: () => {
                                  DF(eF), EF(null)
                                },
                                onClose: () => {
                                  EF(null), aW({
                                    key: `edit-${eF}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var DA = SF(3847),
                            LA = SF(3823),
                            mu = SF(3840),
                            OA = SF(3851);
                          const xu = 40,
                            ZA = 800,
                            oA = 150,
                            YA = 8e3,
                            MA = 2e3;

                          function cu(FF, WF) {
                            return 12 * Math.log2(WF / FF)
                          }

                          function GA(FF, WF) {
                            return Math.round(FF * 2 ** (WF / 12) * 10) / 10
                          }

                          function zu(FF) {
                            return `${FF} ms`
                          }

                          function IA(FF) {
                            return `${FF} st`
                          }
                          const fA = [{
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

                          function yu(FF) {
                            let {
                              synth: WF,
                              onChange: SF
                            } = FF;
                            const CF = (0, DA.m)(WF);
                            return (0, QF.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, QF.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, QF.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, QF.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, QF.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, QF.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, QF.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: DA.g.map((FF => (0, QF.jsx)("button", {
                                      type: "button",
                                      className: uF()("DocsVariantChip", {
                                        Active: WF.waveform === FF
                                      }),
                                      "aria-pressed": WF.waveform === FF,
                                      onClick: () => {
                                        SF({
                                          waveform: FF
                                        })
                                      },
                                      children: FF
                                    }, FF)))
                                  })]
                                }), (0, QF.jsx)(pC, {
                                  label: "Pitch",
                                  min: 0,
                                  max: cu(xu, ZA),
                                  step: .1,
                                  value: cu(xu, WF.pitchHz),
                                  format: () => `${WF.pitchHz} Hz`,
                                  onChange: FF => {
                                    SF({
                                      pitchHz: GA(xu, FF)
                                    })
                                  }
                                }), (0, QF.jsx)(pC, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: WF.syllableMs,
                                  format: zu,
                                  onChange: FF => {
                                    SF({
                                      syllableMs: FF
                                    })
                                  }
                                }), (0, QF.jsx)(pC, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: WF.volume,
                                  onChange: FF => {
                                    SF({
                                      volume: FF
                                    })
                                  }
                                })]
                              }), (0, QF.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, QF.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, QF.jsx)(pC, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: WF.durationMs,
                                  format: zu,
                                  onChange: FF => {
                                    SF({
                                      durationMs: FF
                                    })
                                  }
                                }), (0, QF.jsx)(pC, {
                                  label: "Fade in",
                                  min: 0,
                                  max: CF.durationMs,
                                  step: 1,
                                  value: CF.attackMs,
                                  format: zu,
                                  onChange: FF => {
                                    SF({
                                      attackMs: FF
                                    })
                                  }
                                }), (0, QF.jsx)(pC, {
                                  label: "Fade out",
                                  min: 0,
                                  max: CF.durationMs - CF.attackMs,
                                  step: 1,
                                  value: CF.releaseMs,
                                  format: zu,
                                  onChange: FF => {
                                    SF({
                                      releaseMs: FF
                                    })
                                  }
                                }), (0, QF.jsx)(pC, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: WF.glideSemitones,
                                  format: IA,
                                  onChange: FF => {
                                    SF({
                                      glideSemitones: FF
                                    })
                                  }
                                }), (0, QF.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, QF.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== WF.lowpassHz,
                                    onChange: FF => {
                                      SF({
                                        lowpassHz: FF.target.checked ? MA : null
                                      })
                                    }
                                  }), (0, QF.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== WF.lowpassHz && (0, QF.jsx)(pC, {
                                  label: "Filter",
                                  min: 0,
                                  max: cu(oA, YA),
                                  step: .1,
                                  value: cu(oA, WF.lowpassHz),
                                  format: () => `${WF.lowpassHz} Hz`,
                                  onChange: FF => {
                                    SF({
                                      lowpassHz: GA(oA, FF)
                                    })
                                  }
                                })]
                              }), (0, QF.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, QF.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), fA.map((FF => {
                                  let {
                                    key: CF,
                                    label: AF,
                                    max: uF
                                  } = FF;
                                  return (0, QF.jsx)(pC, {
                                    label: AF,
                                    min: 0,
                                    max: uF,
                                    step: .1,
                                    value: WF.intonation[CF],
                                    format: IA,
                                    onChange: FF => {
                                      SF({
                                        intonation: {
                                          ...WF.intonation,
                                          [CF]: FF
                                        }
                                      })
                                    }
                                  }, CF)
                                }))]
                              })]
                            })
                          }
                          const sA = Object.keys(DA.j),
                            nA = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function HA(FF) {
                            var WF;
                            const SF = JSON.stringify((0, DA.m)(FF));
                            return null !== (WF = sA.find((FF => JSON.stringify((0, DA.m)(DA.j[FF])) === SF))) && void 0 !== WF ? WF : null
                          }

                          function KA(FF) {
                            let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof FF || null === FF) return JSON.stringify(FF);
                            return `{\n${Object.entries(FF).map((FF=>{let[SF,CF]=FF;return`${WF}    ${SF}: ${KA(CF,`${WF}    `)},`})).join("\n")}\n${WF}}`
                          }

                          function wA(FF, WF, SF) {
                            const CF = HA(FF),
                              AF = [`    line: ${JSON.stringify(WF)},`];
                            return SF && AF.push(`    speakerName: ${JSON.stringify(SF)},`), AF.push("    voice,"), `const voice = ${CF?JSON.stringify(CF):KA((0,DA.m)(FF))}\n\napi.setClientOption(playerId, "dialogue", {\n${AF.join("\n")}\n})`
                          }
                          const XA = 400,
                            UA = 90;
                          let BA = null;

                          function ju(FF, WF, SF) {
                            return BA ??= new AudioContext, BA.resume(), (0, OA.b)(BA, BA.destination, FF, WF, SF, (() => {}))
                          }

                          function vu() {
                            const [FF, WF] = (0, CF.useState)(DA.j.regular), [SF, AF] = (0, CF.useState)(nA[0]), [hF, bW] = (0, CF.useState)("Innkeeper"), [dF, PF] = (0, CF.useState)(0), RF = RC((FF => FF.volume)), iW = (0, CF.useRef)(null), eF = (0, CF.useRef)(0), EF = (0, CF.useRef)(0), rW = () => {
                              var FF;
                              null === (FF = iW.current) || void 0 === FF || FF.call(iW), iW.current = null
                            };
                            (0, CF.useEffect)((() => () => {
                              var FF;
                              null === (FF = iW.current) || void 0 === FF || FF.call(iW), window.clearTimeout(eF.current)
                            }), []);
                            const tW = (0, CF.useMemo)((() => ({
                                line: SF,
                                speakerName: hF || void 0,
                                voice: FF
                              })), [SF, hF, FF]),
                              TF = (0, CF.useRef)(tW);
                            TF.current = tW;
                            const kW = HA(FF),
                              qW = FF => {
                                window.clearTimeout(eF.current), rW();
                                const {
                                  plan: WF,
                                  synth: SF
                                } = (0, mu.c)(FF);
                                SF && (iW.current = ju(SF, WF.blips, RF)), PF((FF => FF + 1))
                              },
                              VF = wA(FF, SF, hF);
                            return (0, QF.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, QF.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, QF.jsxs)("div", {
                                  children: [(0, QF.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, QF.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, QF.jsx)(aW, {
                                  text: VF,
                                  label: "Copy code"
                                })]
                              }), (0, QF.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [sA.map((FF => (0, QF.jsx)("button", {
                                  type: "button",
                                  className: uF()("DocsVariantChip", {
                                    Active: kW === FF
                                  }),
                                  "aria-pressed": kW === FF,
                                  onClick: () => {
                                    (FF => {
                                      const SF = DA.j[FF];
                                      WF(SF), qW({
                                        ...tW,
                                        voice: SF
                                      })
                                    })(FF)
                                  },
                                  children: FF
                                }, FF))), !kW && (0, QF.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, QF.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, QF.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, QF.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, QF.jsx)(LA.c, {
                                      display: tW
                                    }, dF)
                                  }), (0, QF.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: FF => {
                                      FF.preventDefault(), qW(tW)
                                    },
                                    children: [(0, QF.jsx)("input", {
                                      value: SF,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: FF => {
                                        AF(FF.target.value)
                                      }
                                    }), (0, QF.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, QF.jsx)(gW, {
                                        name: "play"
                                      }), (0, QF.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, QF.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: nA.map((FF => (0, QF.jsx)("button", {
                                      type: "button",
                                      className: uF()("DocsVariantChip", {
                                        Active: SF === FF
                                      }),
                                      onClick: () => {
                                        var WF;
                                        AF(WF = FF), qW({
                                          ...tW,
                                          line: WF
                                        })
                                      },
                                      children: FF
                                    }, FF)))
                                  }), (0, QF.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, QF.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, QF.jsx)("input", {
                                      value: hF,
                                      placeholder: "No name",
                                      onChange: FF => {
                                        bW(FF.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, QF.jsx)(yu, {
                                  synth: FF,
                                  onChange: SF => {
                                    const CF = {
                                      ...FF,
                                      ...SF
                                    };
                                    WF(CF);
                                    const AF = {
                                        ...tW,
                                        voice: CF
                                      },
                                      uF = performance.now();
                                    if (uF - EF.current >= UA) {
                                      EF.current = uF, rW();
                                      const FF = (0, mu.c)(AF).plan.blips[0];
                                      FF && (iW.current = ju((0, DA.m)(CF), [{
                                        ...FF,
                                        atMs: 0
                                      }], RF))
                                    }
                                    window.clearTimeout(eF.current), eF.current = window.setTimeout((() => {
                                      qW(TF.current)
                                    }), XA)
                                  }
                                })]
                              }), (0, QF.jsx)(NF, {
                                code: VF,
                                lang: "ts"
                              })]
                            })
                          }
                          var JA = SF(3869);
                          const pA = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            lA = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            Fu = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${lA}`, "g"), JA.o],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, JA.o]
                            ];

                          function Wu(FF) {
                            return `${FF.pageId}#${FF.anchor}`
                          }
                          let Su, Cu, Au;

                          function uu(FF) {
                            const WF = (0, DF.i)(FF),
                              SF = new Set;
                            for (const [, , CF] of WF.matchAll(DF.e)) {
                              const FF = CF.startsWith("#") ? HF(CF) : null,
                                WF = FF ? Wu({
                                  pageId: FF.page.id,
                                  anchor: FF.anchor
                                }) : null;
                              null !== WF && (Su || (Su = new Set(zW.flatMap((FF => xW(FF.layout) ? sF(FF).sections.map((WF => Wu({
                                pageId: FF.id,
                                anchor: WF.heading.anchor
                              }))) : [])))), Su).has(WF) && SF.add(WF)
                            }
                            for (const [, , CF] of WF.matchAll(pA)) {
                              const FF = eW(CF);
                              FF && SF.add(Wu(FF))
                            }
                            return SF
                          }

                          function hu(FF, WF) {
                            const SF = new Set,
                              CF = function(FF) {
                                return FF.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(FF);
                            for (const [, AF] of CF.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) SF.add(AF);
                            for (const [AF, uF] of Fu)
                              for (const [, FF] of(0, JA.f)(CF, AF, uF)) WF.has(FF) && SF.add(FF);
                            return SF
                          }

                          function bh(FF, WF, SF, CF) {
                            const AF = FF.get(WF);
                            AF ? !CF && AF.some((FF => FF.pageId === SF.pageId)) || AF.push(SF) : FF.set(WF, [SF])
                          }
                          const du = /^[A-Za-z_$][\w$]*$/;

                          function Pu(FF) {
                            return du.test(FF.name) ? FF.name : "options"
                          }

                          function Ru(FF, WF) {
                            const SF = FF.params.map(Pu).join(", ");
                            return WF ? `${FF.name} = (${SF}) => {\n\t\n}` : `api.${FF.name}(${SF})`
                          }

                          function ih(FF) {
                            let {
                              method: WF,
                              isCallback: SF
                            } = FF;
                            return (0, QF.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, QF.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [SF ? (0, QF.jsxs)(QF.Fragment, {
                                  children: [(0, QF.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: WF.name
                                  }), (0, QF.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, QF.jsxs)(QF.Fragment, {
                                  children: [(0, QF.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, QF.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: WF.name
                                  }), (0, QF.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), WF.params.map(((FF, SF) => (0, QF.jsxs)(CF.Fragment, {
                                  children: [SF > 0 && (0, QF.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, QF.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${WF.name}-${Pu(FF)}`,
                                    children: FF.name
                                  })]
                                }, FF.name))), (0, QF.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: SF ? ") => " : ")"
                                }), SF && !WF.returns && (0, QF.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), WF.returns && WF.returns.type && (0, QF.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!SF && (0, QF.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, QF.jsx)(LW, {
                                  type: WF.returns.type
                                })]
                              })]
                            })
                          }

                          function eu(FF) {
                            let {
                              title: WF,
                              references: SF
                            } = FF;
                            const AF = (0, CF.useContext)(EW);
                            return (0, QF.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, QF.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: WF
                              }), SF.map((FF => (0, QF.jsx)(hF.e, {
                                to: wF(AF, fF(FF.pageId), FF.anchor),
                                children: FF.label
                              }, `${FF.pageId}#${FF.anchor}`)))]
                            })
                          }

                          function Eu(FF) {
                            var WF, SF;
                            let {
                              pageId: CF,
                              anchor: AF
                            } = FF;
                            const uF = Wu({
                                pageId: CF,
                                anchor: AF
                              }),
                              hF = null !== (WF = function() {
                                if (!Au) {
                                  Au = new Map;
                                  const CF = new Set(zW.filter((FF => "callbacks" === FF.layout)).flatMap((FF => sF(FF).sections.map((FF => FF.heading.text)))));
                                  for (const AF of zW)
                                    if ("article" === AF.layout || "snippets" === AF.layout)
                                      for (const uF of (0, DF.s)(sF(AF)))
                                        for (const {
                                            code: hF
                                          }
                                          of(0, DF.j)(uF.blocks))
                                          for (const bW of hu(hF, CF)) {
                                            const CF = iS().get(bW);
                                            if (CF) {
                                              var FF, WF, SF;
                                              const hF = {
                                                pageId: AF.id,
                                                anchor: null !== (FF = null === (WF = uF.heading) || void 0 === WF ? void 0 : WF.anchor) && void 0 !== FF ? FF : "",
                                                label: null !== (SF = AF.navTitle) && void 0 !== SF ? SF : AF.title
                                              };
                                              bh(Au, Wu(CF), hF, !1)
                                            }
                                          }
                                }
                                return Au
                              }().get(uF)) && void 0 !== WF ? WF : [],
                              bW = null !== (SF = function() {
                                if (!Cu) {
                                  Cu = new Map;
                                  const FF = fF("changelog");
                                  for (const WF of sF(FF).sections) {
                                    const SF = new Set(WF.blocks.flatMap((FF => [...uu(FF)])));
                                    for (const CF of SF) {
                                      const SF = {
                                        pageId: FF.id,
                                        anchor: WF.heading.anchor,
                                        label: WF.heading.text
                                      };
                                      bh(Cu, CF, SF, !0)
                                    }
                                  }
                                }
                                return Cu
                              }().get(uF)) && void 0 !== SF ? SF : [];
                            return 0 === hF.length && 0 === bW.length ? null : (0, QF.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [hF.length > 0 && (0, QF.jsx)(eu, {
                                title: "Used in",
                                references: hF
                              }), bW.length > 0 && (0, QF.jsx)(eu, {
                                title: "Changelog",
                                references: bW
                              })]
                            })
                          }

                          function Qu(FF) {
                            let {
                              method: WF,
                              pageId: SF,
                              anchor: CF,
                              isCallback: AF
                            } = FF;
                            const uF = AF ? void 0 : bS().get(WF.name),
                              hF = WF.description.length > 0 || null === uF || void 0 === uF || !uF.description ? WF.description : (0, DF.v)(uF.description);
                            return (0, QF.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, QF.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, QF.jsx)(PS, {
                                  level: 2,
                                  text: WF.name,
                                  anchor: CF,
                                  className: "DocsCardTitle"
                                }), (0, QF.jsx)(aW, {
                                  text: Ru(WF, AF),
                                  label: AF ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, QF.jsx)(ih, {
                                method: WF,
                                isCallback: AF
                              }), uF && null !== uF.deprecation && (0, QF.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, QF.jsx)("strong", {
                                  children: "Deprecated"
                                }), uF.deprecation && (0, QF.jsxs)(QF.Fragment, {
                                  children: [": ", (0, QF.jsx)(VW, {
                                    text: (bW = uF.deprecation, (0, JA.w)(bW, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, JA.k)("`\\w"), (FF => {
                                      let [WF] = FF;
                                      return iS().has(WF) ? `\`${WF}\`` : WF
                                    })))
                                  })]
                                })]
                              }), hF.length > 0 && (0, QF.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, QF.jsx)(ES, {
                                  blocks: hF
                                })
                              }), WF.params.length > 0 && (0, QF.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, QF.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, QF.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: WF.params.map((FF => (0, QF.jsxs)("div", {
                                    id: `${WF.name}-${Pu(FF)}`,
                                    className: "DocsParam",
                                    children: [(0, QF.jsxs)("dt", {
                                      children: [(0, QF.jsx)("code", {
                                        className: "DocsParamName",
                                        children: FF.name
                                      }), (0, QF.jsx)(LW, {
                                        type: FF.type
                                      })]
                                    }), FF.description && (0, QF.jsx)("dd", {
                                      children: (0, QF.jsx)(VW, {
                                        text: FF.description
                                      })
                                    })]
                                  }, FF.name)))
                                })]
                              }), WF.returns && (WF.returns.type || WF.returns.description.length > 0) && (0, QF.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, QF.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, QF.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [WF.returns.type && (0, QF.jsx)(LW, {
                                    type: WF.returns.type
                                  }), WF.returns.description.length > 0 && (0, QF.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, QF.jsx)(ES, {
                                      blocks: WF.returns.description
                                    })
                                  })]
                                })]
                              }), (0, QF.jsx)(Eu, {
                                pageId: SF,
                                anchor: CF
                              })]
                            });
                            var bW
                          }

                          function rh(FF) {
                            var WF;
                            return null !== FF.defaultValue && "undefined" !== FF.defaultValue ? FF.defaultValue : null !== (WF = FF.example) && void 0 !== WF ? WF : "value"
                          }

                          function gh(FF) {
                            let {
                              setting: WF,
                              pageId: SF,
                              anchor: CF,
                              setterSnippet: AF
                            } = FF;
                            const uF = null === WF.defaultValue ? null : tS(WF.defaultValue);
                            return (0, QF.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, QF.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, QF.jsx)(PS, {
                                  level: 2,
                                  text: WF.name,
                                  anchor: CF,
                                  className: "DocsCardTitle"
                                }), (0, QF.jsx)(aW, {
                                  text: AF(WF.name, rh(WF)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, QF.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, QF.jsxs)("div", {
                                  children: [(0, QF.jsx)("dt", {
                                    children: "Type"
                                  }), (0, QF.jsx)("dd", {
                                    children: (0, QF.jsx)(LW, {
                                      type: WF.type
                                    })
                                  })]
                                }), null !== WF.defaultValue && (0, QF.jsxs)("div", {
                                  children: [(0, QF.jsx)("dt", {
                                    children: "Default"
                                  }), (0, QF.jsx)("dd", {
                                    children: (0, QF.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [uF && (0, QF.jsx)(TW, {
                                        colour: uF
                                      }), WF.defaultValue]
                                    })
                                  })]
                                }), null !== WF.example && (0, QF.jsxs)("div", {
                                  children: [(0, QF.jsx)("dt", {
                                    children: "Example"
                                  }), (0, QF.jsx)("dd", {
                                    children: (0, QF.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: WF.example
                                    })
                                  })]
                                })]
                              }), WF.description.length > 0 && (0, QF.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, QF.jsx)(ES, {
                                  blocks: WF.description
                                })
                              }), (0, QF.jsx)(Eu, {
                                pageId: SF,
                                anchor: CF
                              })]
                            })
                          }

                          function th(FF) {
                            let {
                              section: WF
                            } = FF;
                            return (0, QF.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, QF.jsx)(PS, {
                                level: 2,
                                text: WF.heading.text,
                                anchor: WF.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, QF.jsx)("div", {
                                className: "DocsProse",
                                children: (0, QF.jsx)(ES, {
                                  blocks: WF.blocks
                                })
                              })]
                            })
                          }

                          function Tu(FF) {
                            let {
                              section: WF
                            } = FF;
                            return (0, QF.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, QF.jsx)(PS, {
                                level: WF.heading.level,
                                text: WF.heading.text,
                                anchor: WF.heading.anchor
                              }), (0, QF.jsx)(ES, {
                                blocks: WF.blocks
                              })]
                            })
                          }
                          const ah = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function kh(FF) {
                            let {
                              page: WF,
                              section: SF
                            } = FF;
                            if ("methods" === WF.layout || "callbacks" === WF.layout) return (0, QF.jsx)(Qu, {
                              method: NS(SF),
                              pageId: WF.id,
                              anchor: SF.heading.anchor,
                              isCallback: "callbacks" === WF.layout
                            });
                            if ("settings" === WF.layout) {
                              const FF = function(FF) {
                                const WF = {
                                  name: FF.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const CF of FF.blocks) {
                                  var SF;
                                  if (VS(CF)) continue;
                                  const FF = "paragraph" === CF.kind ? CF.text.match(DS) : null;
                                  if (!FF) {
                                    WF.description.push(CF);
                                    continue
                                  }
                                  const AF = null !== (SF = qC(FF[2])) && void 0 !== SF ? SF : FF[2];
                                  "Type" === FF[1] ? WF.type = AF : "Default" === FF[1] ? WF.defaultValue = AF : "" !== AF && (WF.example = AF)
                                }
                                return WF.type ? WF : null
                              }(SF);
                              if (FF) return (0, QF.jsx)(gh, {
                                setting: FF,
                                pageId: WF.id,
                                anchor: SF.heading.anchor,
                                setterSnippet: WF.setterSnippet
                              })
                            }
                            return "snippets" === WF.layout ? (0, QF.jsx)(th, {
                              section: SF
                            }) : "changelog" === WF.layout ? (0, QF.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, QF.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, QF.jsx)(PS, {
                                  level: 2,
                                  text: SF.heading.text,
                                  anchor: SF.heading.anchor
                                })
                              }), (0, QF.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, QF.jsx)(ES, {
                                  blocks: LS(SF.blocks)
                                })
                              })]
                            }) : WF.gallery ? (0, QF.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, QF.jsx)(PS, {
                                level: SF.heading.level,
                                text: SF.heading.text,
                                anchor: SF.heading.anchor
                              }), (0, QF.jsx)(mA, {
                                kind: WF.gallery,
                                content: sF(WF),
                                blocks: SF.blocks
                              })]
                            }) : (0, QF.jsx)(Tu, {
                              section: SF
                            })
                          }

                          function qh(FF) {
                            let {
                              page: WF,
                              onTocChange: SF
                            } = FF;
                            const AF = sF(WF),
                              [uF, hF] = (0, CF.useState)(""),
                              bW = "article" !== WF.layout,
                              dF = gC(WF.gallery) ? WF.gallery : null,
                              PF = null !== dF,
                              RF = uF.trim().toLowerCase(),
                              iW = (0, CF.useRef)(null),
                              eF = (0, CF.useCallback)((FF => {
                                var WF;
                                null === (WF = iW.current) || void 0 === WF || WF.preview(FF)
                              }), []),
                              EF = (0, CF.useMemo)((() => {
                                if (!WF.hasParticlePlayground) return [];
                                const FF = ZS(AF.intro).find((FF => "names" === FF.kind && !FF.names.some((FF => null !== yC(FF.name)))));
                                return "names" === (null === FF || void 0 === FF ? void 0 : FF.kind) ? FF.names.map((FF => FF.name)) : []
                              }), [WF, AF]),
                              rW = (0, CF.useMemo)((() => {
                                if (!WF.hasTextPlayground) return [];
                                const FF = AF.sections.flatMap((FF => FF.blocks.flatMap((FF => {
                                  var WF;
                                  return (null !== (WF = xC(FF)) && void 0 !== WF ? WF : []).flatMap((FF => yS(FF.name) ? [FF.name] : []))
                                }))));
                                return [...new Set(FF)]
                              }), [WF, AF]),
                              gW = (0, CF.useMemo)((() => RF ? AF.sections.filter((FF => function(FF, WF) {
                                return !!FF.heading.text.toLowerCase().includes(WF) || FF.blocks.some((FF => (0, DF.i)(FF).toLowerCase().includes(WF)))
                              }(FF, RF))) : AF.sections), [AF, RF]),
                              tW = (0, CF.useMemo)((() => function(FF, WF) {
                                return "article" !== FF.layout ? WF.map((FF => ({
                                  anchor: FF.heading.anchor,
                                  text: FF.heading.text,
                                  level: 2
                                }))) : WF.flatMap((FF => {
                                  const WF = FF.blocks.flatMap((FF => "heading" === FF.kind && 3 === FF.level ? [{
                                    anchor: FF.anchor,
                                    text: FF.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: FF.heading.anchor,
                                    text: FF.heading.text,
                                    level: 2
                                  }, ...WF]
                                }))
                              }(WF, gW)), [WF, gW]);
                            return (0, CF.useEffect)((() => {
                              SF(tW)
                            }), [tW, SF]), (0, QF.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, QF.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, QF.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: AF.title || WF.title
                                }), (0, QF.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: WF.summary
                                }), (0, QF.jsx)(BC, {
                                  page: WF
                                }), bW && (0, QF.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, QF.jsxs)("span", {
                                    children: [(0, QF.jsx)("strong", {
                                      children: AF.sections.length
                                    }), " ", ah[WF.layout]]
                                  })
                                })]
                              }), "" === WF.slug && (0, QF.jsx)(xA, {}), dF && (0, QF.jsx)(MC, {
                                kind: dF
                              }, dF), WF.hasParticlePlayground && (0, QF.jsx)(bu, {
                                ref: iW,
                                textures: EF
                              }), !PF && AF.intro.length > 0 && (0, QF.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: WF.gallery ? (0, QF.jsx)(tA.Provider, {
                                  value: WF.hasParticlePlayground ? eF : null,
                                  children: (0, QF.jsx)(mA, {
                                    kind: WF.gallery,
                                    content: AF,
                                    blocks: AF.intro
                                  })
                                }) : (0, QF.jsx)(ES, {
                                  blocks: LS(AF.intro)
                                })
                              }), WF.hasTextPlayground && (0, QF.jsx)(NA, {
                                fontAwesomeIcons: rW
                              }), WF.hasVoicePlayground && (0, QF.jsx)(vu, {}), WF.childPageIds && (0, QF.jsx)(xA, {
                                cards: WF.childPageIds.map((FF => ({
                                  pageId: FF
                                }))),
                                label: WF.title
                              }), bW && (0, QF.jsx)(aC, {
                                className: "DocsFilterBar",
                                value: uF,
                                placeholder: `Filter ${AF.sections.length} ${ah[WF.layout]}\u2026`,
                                label: `Filter ${ah[WF.layout]}`,
                                onChange: hF,
                                count: RF ? {
                                  visible: gW.length,
                                  total: AF.sections.length
                                } : null
                              }), !PF && (0, QF.jsxs)("div", {
                                className: `DocsSections Layout-${WF.layout}`,
                                children: [gW.map((FF => (0, QF.jsx)(kh, {
                                  page: WF,
                                  section: FF
                                }, FF.heading.anchor))), 0 === gW.length && (0, QF.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", ah[WF.layout], " match \u201c", uF, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const Vu = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function Nu(FF) {
                            let {
                              entry: WF,
                              isActive: SF,
                              onNavigate: CF,
                              label: AF,
                              children: hF
                            } = FF;
                            return (0, QF.jsx)("a", {
                              href: `#${WF.anchor}`,
                              "aria-label": AF,
                              className: uF()(`Level${WF.level}`, {
                                Active: SF
                              }),
                              "aria-current": SF ? "location" : void 0,
                              onClick: FF => {
                                FF.preventDefault(), CF(WF.anchor)
                              },
                              children: hF
                            })
                          }

                          function Du(FF) {
                            let {
                              toc: WF,
                              activeAnchor: SF,
                              onNavigate: AF
                            } = FF;
                            const hF = Math.max(0, WF.findIndex((FF => FF.anchor === SF))),
                              bW = (0, CF.useRef)(null),
                              dF = (0, CF.useRef)(!1);
                            (0, CF.useEffect)((() => {
                              var FF, SF;
                              const CF = null === (FF = bW.current) || void 0 === FF ? void 0 : FF.closest(".DocsToc"),
                                AF = null === (SF = bW.current) || void 0 === SF ? void 0 : SF.querySelector(".DocsTimelineNotch.Active");
                              if (!CF || !AF) return;
                              let uF = 0;
                              if (hF === WF.length - 1) uF = CF.scrollHeight;
                              else if (hF > 0) {
                                const FF = CF.getBoundingClientRect(),
                                  WF = AF.getBoundingClientRect();
                                uF = CF.scrollTop + WF.top + WF.height / 2 - (FF.top + CF.clientHeight / 2)
                              }
                              CF.scrollTo({
                                top: uF,
                                behavior: dF.current ? "smooth" : "auto"
                              }), dF.current = !0
                            }), [hF, WF.length]);
                            const PF = [];
                            return WF.forEach(((FF, WF) => {
                              var SF, CF, AF;
                              const uF = function(FF) {
                                  const WF = FF.trim().match(Vu);
                                  return WF ? {
                                    day: WF[1],
                                    month: `${WF[2]} ${WF[3]}`
                                  } : null
                                }(FF.text),
                                hF = null !== (SF = null === uF || void 0 === uF ? void 0 : uF.month) && void 0 !== SF ? SF : null;
                              null !== hF && (null === (CF = PF.at(-1)) || void 0 === CF ? void 0 : CF.month) === hF || PF.push({
                                month: hF,
                                entries: []
                              }), PF.at(-1).entries.push({
                                entry: FF,
                                day: null !== (AF = null === uF || void 0 === uF ? void 0 : uF.day) && void 0 !== AF ? AF : null,
                                index: WF
                              })
                            })), (0, QF.jsx)("ol", {
                              ref: bW,
                              className: "DocsTimeline",
                              children: PF.map((FF => {
                                let {
                                  month: WF,
                                  entries: SF
                                } = FF;
                                return (0, QF.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [WF && (0, QF.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: WF
                                  }), (0, QF.jsx)("ol", {
                                    children: SF.map((FF => {
                                      let {
                                        entry: WF,
                                        day: SF,
                                        index: CF
                                      } = FF;
                                      return (0, QF.jsx)("li", {
                                        className: uF()("DocsTimelineNotch", {
                                          Passed: CF < hF,
                                          Active: CF === hF
                                        }),
                                        children: (0, QF.jsx)(Nu, {
                                          entry: WF,
                                          isActive: CF === hF,
                                          onNavigate: AF,
                                          label: WF.text,
                                          children: (0, QF.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== SF && void 0 !== SF ? SF : WF.text
                                          })
                                        })
                                      }, WF.anchor)
                                    }))
                                  })]
                                }, SF[0].entry.anchor)
                              }))
                            })
                          }

                          function Lu(FF) {
                            let {
                              isChangelog: WF,
                              toc: SF,
                              activeAnchor: CF,
                              onNavigate: AF
                            } = FF;
                            return 0 === SF.length ? null : (0, QF.jsxs)(QF.Fragment, {
                              children: [(0, QF.jsx)("div", {
                                className: "DocsTocTitle",
                                children: WF ? "Updates" : "On this page"
                              }), WF ? (0, QF.jsx)(Du, {
                                toc: SF,
                                activeAnchor: CF,
                                onNavigate: AF
                              }) : (0, QF.jsx)("ul", {
                                children: SF.map((FF => (0, QF.jsx)("li", {
                                  children: (0, QF.jsx)(Nu, {
                                    entry: FF,
                                    isActive: FF.anchor === CF,
                                    onNavigate: AF,
                                    children: FF.text.replace(/`/g, "")
                                  })
                                }, FF.anchor)))
                              })]
                            })
                          }
                          const mh = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            Ou = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            xh = 20,
                            Zu = 10,
                            ou = 40,
                            Yu = 120;
                          let Mu;

                          function ch(FF) {
                            const WF = FF.gallery;
                            if (!WF) return [];
                            if (gC(WF)) return function(FF) {
                              return TS(FF).entries.map((FF => FF.name))
                            }(WF).map((SF => ({
                              page: FF,
                              anchor: YS(WF, SF),
                              title: SF,
                              kind: Ou[WF],
                              text: "",
                              listedUnder: FF.title
                            })));
                            const SF = sF(FF);
                            return (0, DF.s)(SF).flatMap((CF => {
                              const AF = CF.heading ? `${FF.title} \u203a ${CF.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : FF.title;
                              return cC(WF, SF, CF.blocks).flatMap((SF => "names" !== SF.kind ? [] : SF.names.map((CF => {
                                const uF = SF.isSongs ? "Song" : Ou[WF];
                                return {
                                  page: FF,
                                  anchor: CF.anchor,
                                  title: CF.name,
                                  kind: uF,
                                  text: "",
                                  listedUnder: AF
                                }
                              }))))
                            }))
                          }

                          function Gu(FF, WF, SF) {
                            const CF = FF.title.toLowerCase();
                            let AF = 0;
                            if (CF === WF) AF = 100;
                            else if (CF.startsWith(WF)) AF = 80;
                            else if (CF.includes(WF)) AF = 60;
                            else if (SF.every((FF => CF.includes(FF)))) AF = 45;
                            else {
                              if (!FF.text.toLowerCase().includes(WF)) return 0;
                              AF = 20
                            }
                            return AF - Math.min(CF.length / 10, 9) + ("Page" === FF.kind ? 8 : "Method" === FF.kind ? 3 : 0) - (FF.listedUnder ? xh : 0)
                          }

                          function zh(FF, WF) {
                            const SF = FF.toLowerCase().indexOf(WF),
                              CF = Math.max(0, SF - Yu / 3);
                            return `${CF>0?"\u2026":""}${FF.slice(CF,CF+Yu)}${CF+Yu<FF.length?"\u2026":""}`
                          }

                          function Iu(FF) {
                            let {
                              text: WF,
                              query: SF
                            } = FF;
                            const CF = SF ? WF.toLowerCase().indexOf(SF) : -1;
                            return -1 === CF ? (0, QF.jsx)(QF.Fragment, {
                              children: WF
                            }) : (0, QF.jsxs)(QF.Fragment, {
                              children: [WF.slice(0, CF), (0, QF.jsx)("mark", {
                                children: WF.slice(CF, CF + SF.length)
                              }), WF.slice(CF + SF.length)]
                            })
                          }

                          function fu(FF) {
                            let {
                              basePath: WF,
                              onClose: SF
                            } = FF;
                            const AF = (0, bW.q)(),
                              [hF, dF] = (0, CF.useState)(""),
                              [PF, RF] = (0, CF.useState)(0),
                              iW = (0, CF.useRef)(null),
                              eF = (0, CF.useRef)(null),
                              EF = hF.trim().toLowerCase(),
                              rW = (0, CF.useMemo)((() => {
                                const FF = (Mu || (Mu = zW.flatMap((FF => {
                                  const WF = sF(FF);
                                  return [{
                                    page: FF,
                                    anchor: "",
                                    title: FF.title,
                                    kind: "Page",
                                    text: FF.summary
                                  }, ...WF.sections.flatMap((WF => {
                                    const SF = WF.blocks.filter((FF => "paragraph" === FF.kind)).map(DF.i).join(" ").replace(/[`*]/g, ""),
                                      CF = {
                                        page: FF,
                                        anchor: WF.heading.anchor,
                                        title: WF.heading.text.replace(/`/g, ""),
                                        kind: mh[FF.layout],
                                        text: SF
                                      },
                                      AF = WF.blocks.flatMap((WF => "article" === FF.layout && "heading" === WF.kind && 3 === WF.level ? [{
                                        page: FF,
                                        anchor: WF.anchor,
                                        title: WF.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: CF.title
                                      }] : []));
                                    return [CF, ...AF]
                                  })), ...ch(FF)]
                                }))), Mu);
                                if (!EF) return FF.filter((FF => "Page" === FF.kind));
                                const WF = EF.split(/\s+/);
                                let SF = 0;
                                return FF.map((FF => ({
                                  entry: FF,
                                  score: Gu(FF, EF, WF)
                                }))).filter((FF => FF.score > 0)).sort(((FF, WF) => WF.score - FF.score)).filter((FF => !FF.entry.listedUnder || (SF++, SF <= Zu))).slice(0, ou).map((FF => FF.entry))
                              }), [EF]);
                            (0, CF.useEffect)((() => {
                              RF(0)
                            }), [EF]), (0, CF.useEffect)((() => {
                              const FF = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === FF || void 0 === FF || FF.focus()
                              }
                            }), []), (0, CF.useEffect)((() => {
                              var FF, WF;
                              null === (FF = iW.current) || void 0 === FF || null === (WF = FF.querySelector(".Active")) || void 0 === WF || WF.scrollIntoView({
                                block: "nearest"
                              })
                            }), [PF]);
                            const tW = FF => {
                              AF(wF(WF, FF.page, FF.anchor)), SF()
                            };
                            return (0, QF.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: FF => {
                                FF.target === FF.currentTarget && SF()
                              },
                              children: (0, QF.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: FF => {
                                  FF.target !== eF.current && FF.preventDefault()
                                },
                                onKeyDown: FF => {
                                  if ("Escape" === FF.key) SF();
                                  else if ("Tab" === FF.key) {
                                    var WF;
                                    FF.preventDefault(), null === (WF = eF.current) || void 0 === WF || WF.focus()
                                  }
                                },
                                children: [(0, QF.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, QF.jsx)(gW, {
                                    name: "magnifying-glass"
                                  }), (0, QF.jsx)("input", {
                                    ref: eF,
                                    autoFocus: !0,
                                    value: hF,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": rW.length > 0 ? `DocsSearchResult-${PF}` : void 0,
                                    onChange: FF => {
                                      dF(FF.target.value)
                                    },
                                    onKeyDown: FF => {
                                      if ("ArrowDown" === FF.key || "ArrowUp" === FF.key) {
                                        FF.preventDefault();
                                        const WF = "ArrowDown" === FF.key ? 1 : -1;
                                        RF((PF + WF + rW.length) % Math.max(rW.length, 1))
                                      } else "Enter" === FF.key && rW[PF] && tW(rW[PF])
                                    }
                                  }), (0, QF.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, QF.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: iW,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!EF && (0, QF.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), rW.map(((FF, WF) => {
                                    var SF;
                                    return (0, QF.jsxs)("li", {
                                      id: `DocsSearchResult-${WF}`,
                                      role: "option",
                                      "aria-selected": WF === PF,
                                      className: uF()("DocsSearchResult", {
                                        Active: WF === PF
                                      }),
                                      onMouseMove: () => {
                                        RF(WF)
                                      },
                                      onClick: () => {
                                        tW(FF)
                                      },
                                      children: [(0, QF.jsx)(gW, {
                                        name: FF.page.icon
                                      }), (0, QF.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, QF.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, QF.jsx)(Iu, {
                                            text: FF.title,
                                            query: EF
                                          })
                                        }), FF.text && (0, QF.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, QF.jsx)(Iu, {
                                            text: zh(FF.text, EF),
                                            query: EF
                                          })
                                        })]
                                      }), (0, QF.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === FF.kind ? "Page" : null !== (SF = FF.listedUnder) && void 0 !== SF ? SF : `${FF.kind} \xb7 ${FF.page.title}`
                                      })]
                                    }, `${FF.page.id}#${FF.anchor}`)
                                  })), EF && 0 === rW.length && (0, QF.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", hF, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function yh(FF, WF) {
                            if (WF < 10) return `${FF.toFixed(1)}s`;
                            const SF = Math.floor(FF);
                            return `${Math.floor(SF/60)}:${String(SF%60).padStart(2,"0")}`
                          }

                          function su() {
                            const FF = RC((FF => FF.track)),
                              WF = RC((FF => FF.volume)),
                              [SF, AF] = (0, CF.useState)(0),
                              hF = (0, CF.useRef)(WC);
                            if ((0, CF.useEffect)((() => {
                                if (!FF) return;
                                if (AF(QC()), "playing" !== FF.status) return;
                                let WF = 0;
                                const SF = () => {
                                  AF(QC()), WF = requestAnimationFrame(SF)
                                };
                                return WF = requestAnimationFrame(SF), () => {
                                  cancelAnimationFrame(WF)
                                }
                              }), [FF]), !FF) return null;
                            const bW = "paused" !== FF.status,
                              dF = Math.min(SF, FF.duration);
                            return (0, QF.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, QF.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, QF.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": bW ? `Pause ${FF.name}` : `Play ${FF.name}`,
                                  onClick: EC,
                                  children: (0, QF.jsx)(gW, {
                                    name: bW ? "pause" : "play"
                                  })
                                }), (0, QF.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, QF.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, QF.jsx)("code", {
                                      children: FF.name
                                    }), (0, QF.jsx)("span", {
                                      children: FF.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, QF.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, QF.jsx)("span", {
                                      children: yh(dF, FF.duration)
                                    }), (0, QF.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: FF.duration || 1,
                                      step: .01,
                                      value: dF,
                                      disabled: 0 === FF.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${yh(dF,FF.duration)} of ${yh(FF.duration,FF.duration)}`,
                                      onChange: FF => {
                                        const WF = Number(FF.target.value);
                                        ! function(FF) {
                                          var WF;
                                          hC = FF, null === (WF = AC) || void 0 === WF || WF.seek(FF)
                                        }(WF), AF(WF)
                                      }
                                    }), (0, QF.jsx)("span", {
                                      children: FF.duration > 0 ? yh(FF.duration, FF.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, QF.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, QF.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === WF ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === WF ? rA(hF.current) : (hF.current = WF, rA(0))
                                    },
                                    children: (0, QF.jsx)(gW, {
                                      name: "volume",
                                      className: uF()({
                                        Muted: 0 === WF
                                      })
                                    })
                                  }), (0, QF.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: WF,
                                    "aria-label": "Volume",
                                    onChange: FF => {
                                      rA(Number(FF.target.value))
                                    }
                                  })]
                                }), (0, QF.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var WF;
                                    null === (WF = document.querySelector(`[data-docs-track="${CSS.escape(SC(FF.name,FF.isSong))}"]`)) || void 0 === WF || WF.focus(), gA()
                                  },
                                  children: (0, QF.jsx)(gW, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var nu = SF(33);
                          const Hu = "docsTheme",
                            Ku = window.matchMedia("(prefers-color-scheme: light)");

                          function wu(FF) {
                            let {
                              theme: WF,
                              onChange: SF
                            } = FF;
                            const CF = "dark" === WF ? "light" : "dark";
                            return (0, QF.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${CF} theme`,
                              title: `Switch to ${CF} theme`,
                              onClick: () => {
                                SF(CF)
                              },
                              children: (0, QF.jsx)(gW, {
                                name: "dark" === WF ? "moon" : "sun"
                              })
                            })
                          }
                          const Xu = "https://github.com/Bloxdy/code-api",
                            Uu = "https://discord.gg/playbloxd",
                            Bu = 180,
                            jh = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function vh(FF) {
                            let {
                              basePath: WF,
                              activePageId: SF,
                              onNavigate: CF
                            } = FF;
                            return (0, QF.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: IF.map((FF => (0, QF.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, QF.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: FF.title
                                }), FF.pageIds.map((FF => {
                                  var AF;
                                  const bW = fF(FF);
                                  return (0, QF.jsxs)(hF.e, {
                                    to: wF(WF, bW),
                                    className: uF()("DocsNavLink", {
                                      Active: bW.id === SF
                                    }),
                                    "aria-current": bW.id === SF ? "page" : void 0,
                                    onClick: CF,
                                    children: [(0, QF.jsx)(gW, {
                                      name: bW.icon
                                    }), (0, QF.jsx)("span", {
                                      children: null !== (AF = bW.navTitle) && void 0 !== AF ? AF : bW.title
                                    })]
                                  }, bW.id)
                                }))]
                              }, FF.title)))
                            })
                          }

                          function Ju(FF) {
                            let {
                              basePath: WF,
                              pageId: SF
                            } = FF;
                            const CF = IF.flatMap((FF => FF.pageIds)),
                              AF = CF.indexOf(SF),
                              uF = AF > 0 ? fF(CF[AF - 1]) : null,
                              bW = AF < CF.length - 1 ? fF(CF[AF + 1]) : null;
                            return (0, QF.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [uF ? (0, QF.jsxs)(hF.e, {
                                className: "DocsPagerLink Previous",
                                to: wF(WF, uF),
                                children: [(0, QF.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, QF.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: uF.title
                                })]
                              }) : (0, QF.jsx)("span", {}), bW && (0, QF.jsxs)(hF.e, {
                                className: "DocsPagerLink Next",
                                to: wF(WF, bW),
                                children: [(0, QF.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, QF.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: bW.title
                                })]
                              })]
                            })
                          }

                          function pu(FF) {
                            let {
                              basePath: WF,
                              embedded: SF = !1
                            } = FF;
                            const {
                              pageSlug: AF = ""
                            } = (0, bW.v)(), PF = (0, bW.p)(), RF = (0, bW.q)(), iW = (eF = AF, zW.find((FF => FF.slug === eF)));
                            var eF;
                            const [EF, rW] = function() {
                              const [FF, WF] = (0, CF.useState)((() => {
                                const FF = nu.h.getItem(Hu);
                                return "dark" === FF || "light" === FF ? FF : null
                              })), [SF, AF] = (0, CF.useState)(Ku.matches ? "light" : "dark");
                              return (0, CF.useEffect)((() => {
                                const FF = () => {
                                  AF(Ku.matches ? "light" : "dark")
                                };
                                return Ku.addEventListener("change", FF), () => {
                                  Ku.removeEventListener("change", FF)
                                }
                              }), []), [null !== FF && void 0 !== FF ? FF : SF, FF => {
                                nu.h.setItem(Hu, FF), WF(FF)
                              }]
                            }(), [tW, TF] = (0, CF.useState)(null), [aW, kW] = (0, CF.useState)(!1), [qW, VF] = (0, CF.useState)(!1), [NF, LF] = (0, CF.useState)([]), mW = function(FF, WF) {
                              const [SF, AF] = (0, CF.useState)("");
                              return (0, CF.useEffect)((() => {
                                if (!WF) return;
                                let SF = 0;
                                const CF = () => {
                                    var CF, uF;
                                    SF = 0;
                                    const hF = WF.getBoundingClientRect().top + Bu;
                                    let bW = null !== (CF = null === (uF = FF[0]) || void 0 === uF ? void 0 : uF.anchor) && void 0 !== CF ? CF : "";
                                    for (const WF of FF) {
                                      const FF = document.getElementById(WF.anchor);
                                      FF && FF.getBoundingClientRect().top <= hF && (bW = WF.anchor)
                                    }
                                    WF.scrollTop + WF.clientHeight >= WF.scrollHeight - 2 && WF.scrollTop > 0 && FF.length > 0 && (bW = FF[FF.length - 1].anchor), AF(bW)
                                  },
                                  uF = () => {
                                    SF || (SF = requestAnimationFrame(CF))
                                  };
                                return CF(), WF.addEventListener("scroll", uF, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(SF), WF.removeEventListener("scroll", uF)
                                }
                              }), [FF, WF]), SF
                            }(NF, tW), OF = "" === AF && PF.hash ? function(FF) {
                              const WF = (0, DF.m)(FF);
                              if (nF(fF("welcome"), WF)) return null;
                              const SF = Object.hasOwn(KF, WF) ? KF[WF] : null;
                              if (SF) return {
                                page: fF(SF.pageId),
                                anchor: SF.anchor
                              };
                              const CF = fF("readme");
                              return nF(CF, WF) ? {
                                page: CF,
                                anchor: WF
                              } : HF(`#${WF}`)
                            }(PF.hash) : null;
                            (0, CF.useEffect)((() => (dF.b.set({
                              musicOnFromPage: !1
                            }), () => {
                              dF.b.set({
                                musicOnFromPage: !0
                              }), gA()
                            })), []), (0, CF.useEffect)((() => {
                              const FF = FF => {
                                const WF = FF.target;
                                if (WF.closest(".DocsTextDialog")) return;
                                const SF = WF.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(WF.tagName);
                                "k" === FF.key && (FF.metaKey || FF.ctrlKey) || "/" === FF.key && !SF ? (FF.preventDefault(), VF(!0)) : "Escape" === FF.key && kW(!1)
                              };
                              return window.addEventListener("keydown", FF), () => {
                                window.removeEventListener("keydown", FF)
                              }
                            }), []);
                            const xW = (0, CF.useRef)(null);
                            (0, CF.useLayoutEffect)((() => {
                              var FF, WF;
                              if (!tW) return;
                              const SF = xW.current === PF.pathname;
                              xW.current = PF.pathname;
                              const CF = (0, DF.m)(PF.hash),
                                AF = CF ? document.getElementById(CF) : null;
                              if (null === (FF = tW.querySelector(".DocsTargeted")) || void 0 === FF || FF.classList.remove("DocsTargeted"), null === AF || void 0 === AF || null === (WF = AF.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === WF || WF.classList.add("DocsTargeted"), AF) {
                                var uF;
                                const FF = AF.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (uF = AF.closest(".DocsChangelogEntry")) && void 0 !== uF ? uF : AF).scrollIntoView({
                                  block: FF ? "center" : "start",
                                  behavior: SF ? "smooth" : "auto"
                                })
                              } else SF || tW.scrollTo({
                                top: 0
                              })
                            }), [tW, PF.pathname, PF.hash, PF.key]);
                            const ZF = (0, CF.useCallback)((() => {
                                kW(!1)
                              }), []),
                              oF = (0, CF.useCallback)((FF => {
                                RF({
                                  hash: FF
                                })
                              }), [RF]);
                            if (OF) return (0, QF.jsx)(bW.b, {
                              replace: !0,
                              to: wF(WF, OF.page, OF.anchor)
                            });
                            if (!iW) return (0, QF.jsx)(bW.b, {
                              replace: !0,
                              to: WF
                            });
                            const YF = SF ? "div" : "main";
                            return (0, QF.jsx)(EW.Provider, {
                              value: WF,
                              children: (0, QF.jsx)(QW.Provider, {
                                value: tW,
                                children: (0, QF.jsxs)("div", {
                                  ref: TF,
                                  className: uF()("DocsSite", {
                                    Embedded: SF,
                                    NavOpen: aW
                                  }),
                                  "data-theme": EF,
                                  children: [(0, QF.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, QF.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": aW ? "Close menu" : "Open menu",
                                      "aria-expanded": aW,
                                      onClick: () => {
                                        kW(!aW)
                                      },
                                      children: (0, QF.jsx)(gW, {
                                        name: aW ? "cross" : "menu"
                                      })
                                    }), (0, QF.jsxs)(hF.e, {
                                      to: WF,
                                      className: "DocsBrand",
                                      children: [(0, QF.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, QF.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, QF.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, QF.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        VF(!0)
                                      },
                                      children: [(0, QF.jsx)(gW, {
                                        name: "magnifying-glass"
                                      }), (0, QF.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, QF.jsxs)("kbd", {
                                        children: [jh ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, QF.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, QF.jsxs)("a", {
                                        href: Uu,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, QF.jsx)(gW, {
                                          name: "discord"
                                        }), (0, QF.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, QF.jsxs)("a", {
                                        href: Xu,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, QF.jsx)(gW, {
                                          name: "external-link"
                                        }), (0, QF.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !SF && (0, QF.jsxs)(hF.e, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, QF.jsx)(gW, {
                                          name: "play"
                                        }), (0, QF.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, QF.jsx)(wu, {
                                        theme: EF,
                                        onChange: rW
                                      })]
                                    })]
                                  }), (0, QF.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, QF.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, QF.jsx)(vh, {
                                        basePath: WF,
                                        activePageId: iW.id,
                                        onNavigate: ZF
                                      })
                                    }), (0, QF.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: ZF
                                    }), (0, QF.jsxs)(YF, {
                                      className: "DocsMain",
                                      children: [(0, QF.jsx)(qh, {
                                        page: iW,
                                        onTocChange: LF
                                      }, iW.id), (0, QF.jsx)(Ju, {
                                        basePath: WF,
                                        pageId: iW.id
                                      })]
                                    }), (0, QF.jsx)("aside", {
                                      className: uF()("DocsToc", {
                                        Timeline: "changelog" === iW.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, QF.jsx)(Lu, {
                                        isChangelog: "changelog" === iW.layout,
                                        toc: NF,
                                        activeAnchor: mW,
                                        onNavigate: oF
                                      })
                                    })]
                                  }), (0, QF.jsx)(su, {}), qW && (0, QF.jsx)(fu, {
                                    basePath: WF,
                                    onClose: () => {
                                      VF(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 3725: (FF, WF, SF) => {
                          SF.d(WF, {
                            e: () => CF,
                            g: () => hF,
                            i: () => gW,
                            j: () => rW,
                            l: () => bW,
                            m: () => AF,
                            o: () => uF,
                            s: () => QF,
                            u: () => EF,
                            v: () => eF
                          });
                          const CF = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function AF(FF) {
                            try {
                              return decodeURIComponent(FF.slice(1))
                            } catch {
                              return FF.slice(1)
                            }
                          }

                          function uF(FF) {
                            return FF.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const hF = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${CF.source}`, "g");

                          function bW(FF, WF) {
                            return 2 === FF.length ? WF.replace(/^ (.*) $/, "$1") : WF
                          }

                          function dF(FF) {
                            return "" === FF.trim()
                          }

                          function PF(FF) {
                            const WF = [];
                            for (const SF of FF.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) WF.length > 0 && WF[WF.length - 1].endsWith("\\") ? WF[WF.length - 1] += `|${SF}` : WF.push(SF);
                            return WF.map((FF => FF.trim().replaceAll("\\|", "|")))
                          }
                          const RF = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function iW(FF) {
                            const WF = [],
                              SF = [{
                                indent: -1,
                                items: WF
                              }];
                            let CF = null;
                            for (const AF of FF) {
                              const FF = AF.match(RF);
                              if (!FF) {
                                CF && (CF.text += ` ${AF.trim()}`);
                                continue
                              }
                              const WF = FF[1].replace(/\t/g, "  ").length;
                              for (; WF <= SF[SF.length - 1].indent;) SF.pop();
                              CF = {
                                text: FF[3].trim(),
                                children: []
                              }, SF[SF.length - 1].items.push(CF), SF.push({
                                indent: WF,
                                items: CF.children
                              })
                            }
                            return WF
                          }

                          function eF(FF) {
                            const WF = FF.replace(/\r\n/g, "\n").split("\n"),
                              SF = [];
                            let CF = 0;
                            for (; CF < WF.length;) {
                              const FF = WF[CF];
                              if (dF(FF)) {
                                CF++;
                                continue
                              }
                              const AF = FF.match(/^\s*```\s*(\w*)\s*$/);
                              if (AF) {
                                const FF = [];
                                for (CF++; CF < WF.length && !/^\s*```\s*$/.test(WF[CF]);) FF.push(WF[CF]), CF++;
                                CF++, SF.push({
                                  kind: "code",
                                  lang: AF[1] || "text",
                                  code: FF.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const hF = FF.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (hF) {
                                const FF = hF[2].trim();
                                SF.push({
                                  kind: "heading",
                                  level: hF[1].length,
                                  text: FF,
                                  anchor: uF(FF)
                                }), CF++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(FF)) {
                                SF.push({
                                  kind: "rule"
                                }), CF++;
                                continue
                              }
                              if (FF.trim().startsWith("|") && CF + 1 < WF.length && /^\s*\|[\s:|-]+\|\s*$/.test(WF[CF + 1])) {
                                const AF = PF(FF),
                                  uF = [];
                                for (CF += 2; CF < WF.length && WF[CF].trim().startsWith("|");) uF.push(PF(WF[CF])), CF++;
                                SF.push({
                                  kind: "table",
                                  header: AF,
                                  rows: uF
                                });
                                continue
                              }
                              if (FF.startsWith(">")) {
                                const FF = [];
                                for (; CF < WF.length && WF[CF].startsWith(">");) FF.push(WF[CF].replace(/^>\s?/, "")), CF++;
                                SF.push({
                                  kind: "quote",
                                  blocks: eF(FF.join("\n"))
                                });
                                continue
                              }
                              if (RF.test(FF)) {
                                const AF = [],
                                  uF = /^\s*\d+\./.test(FF);
                                for (; CF < WF.length && !dF(WF[CF]) && (RF.test(WF[CF]) || /^\s+\S/.test(WF[CF]));) AF.push(WF[CF]), CF++;
                                SF.push({
                                  kind: "list",
                                  ordered: uF,
                                  items: iW(AF)
                                });
                                continue
                              }
                              const bW = [];
                              for (; CF < WF.length && !dF(WF[CF]) && !/^\s*```/.test(WF[CF]) && !/^#{1,6}\s/.test(WF[CF]) && !WF[CF].startsWith(">") && !RF.test(WF[CF]) && (!WF[CF].trim().startsWith("|") || 0 !== bW.length);) bW.push(WF[CF].trim()), CF++;
                              0 === bW.length && (bW.push(WF[CF].trim()), CF++), SF.push({
                                kind: "paragraph",
                                text: bW.join(" ")
                              })
                            }
                            return SF
                          }

                          function EF(FF) {
                            let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const SF = eF(FF);
                            let CF = "";
                            const AF = [],
                              uF = [],
                              hF = new Map;
                            for (const PF of SF) {
                              if ("heading" === PF.kind) {
                                var bW;
                                const FF = (null !== (bW = hF.get(PF.anchor)) && void 0 !== bW ? bW : 0) + 1;
                                hF.set(PF.anchor, FF), FF > 1 && (PF.anchor = `${PF.anchor}-${FF}`)
                              }
                              if ("heading" === PF.kind && 1 === PF.level && !CF) {
                                CF = PF.text;
                                continue
                              }
                              if ("heading" === PF.kind && PF.level <= WF) {
                                uF.push({
                                  heading: PF,
                                  blocks: []
                                });
                                continue
                              }
                              const FF = uF.at(-1);
                              FF ? FF.blocks.push(PF) : AF.push(PF)
                            }
                            const dF = FF => {
                              for (;
                                "rule" === (null === (WF = FF.at(-1)) || void 0 === WF ? void 0 : WF.kind);) {
                                var WF;
                                FF.pop()
                              }
                            };
                            dF(AF);
                            for (const PF of uF) dF(PF.blocks);
                            return {
                              title: CF,
                              intro: AF,
                              sections: uF
                            }
                          }

                          function QF(FF) {
                            return [{
                              heading: null,
                              blocks: FF.intro
                            }, ...FF.sections.map((FF => ({
                              heading: FF.heading,
                              blocks: FF.blocks
                            })))]
                          }

                          function rW(FF) {
                            return FF.flatMap((FF => "code" === FF.kind ? [FF] : "quote" === FF.kind ? rW(FF.blocks) : []))
                          }

                          function gW(FF) {
                            switch (FF.kind) {
                              case "heading":
                              case "paragraph":
                                return FF.text;
                              case "code":
                                return FF.code;
                              case "table":
                                return [FF.header, ...FF.rows].map((FF => FF.join(" "))).join(" ");
                              case "list": {
                                const WF = FF => FF.map((FF => `${FF.text} ${WF(FF.children)}`)).join(" ");
                                return WF(FF.items)
                              }
                              case "quote":
                                return FF.blocks.map(gW).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 3851: (FF, WF, SF) => {
                          SF.d(WF, {
                            b: () => RF,
                            c: () => iW
                          });
                          var CF = SF(3855),
                            AF = SF(11);
                          const uF = .25,
                            hF = .85,
                            bW = .02,
                            dF = .01;

                          function PF(FF, WF, SF, CF, AF, uF, bW) {
                            const {
                              waveform: dF,
                              pitchHz: PF,
                              attackMs: RF,
                              releaseMs: iW,
                              lowpassHz: eF
                            } = SF, EF = AF + CF.durationMs / 1e3, QF = PF * 2 ** (CF.semitones / 12), rW = FF.createOscillator();
                            rW.type = dF, rW.frequency.setValueAtTime(QF, AF), rW.frequency.exponentialRampToValueAtTime(QF * 2 ** (CF.glideSemitones / 12), EF);
                            const gW = AF + Math.min(RF, CF.durationMs) / 1e3,
                              tW = FF.createGain();
                            tW.gain.setValueAtTime(0, AF), tW.gain.linearRampToValueAtTime(uF, gW), tW.gain.linearRampToValueAtTime(uF * hF, Math.max(gW, EF - iW / 1e3)), tW.gain.linearRampToValueAtTime(0, EF);
                            const TF = [rW];
                            if (null !== eF) {
                              const WF = FF.createBiquadFilter();
                              WF.type = "lowpass", WF.frequency.value = eF, TF.push(WF)
                            }
                            TF.push(tW, WF);
                            for (let hF = 1; hF < TF.length; hF++) TF[hF - 1].connect(TF[hF]);
                            return rW.onended = () => {
                              for (const FF of TF.slice(0, -1)) FF.disconnect();
                              bW()
                            }, rW.start(AF), rW.stop(EF), rW
                          }

                          function RF(FF, WF, SF, CF, AF, hF) {
                            if (0 === CF.length) return hF(), () => {};
                            const RF = uF * SF.volume * AF,
                              iW = FF.createGain();
                            iW.connect(WF);
                            const eF = FF.currentTime + bW,
                              EF = new Set;
                            for (const uF of CF) {
                              const WF = PF(FF, iW, SF, uF, eF + uF.atMs / 1e3, RF * uF.level, (() => {
                                EF.delete(WF), 0 === EF.size && (iW.disconnect(), hF())
                              }));
                              EF.add(WF)
                            }
                            return () => {
                              const WF = FF.currentTime;
                              iW.gain.setTargetAtTime(0, WF, dF);
                              for (const FF of EF) try {
                                FF.stop(WF + 5 * dF)
                              } catch {}
                            }
                          }

                          function iW(FF, WF) {
                            var SF;
                            const uF = CF.c.ctx,
                              hF = CF.c.masterGain;
                            if (!uF || !hF || !AF.b.get("soundOnFromAd")) return () => {};
                            const bW = CF.c;
                            return null === (SF = bW._autoResume) || void 0 === SF || SF.call(bW), RF(uF, hF, FF, WF, AF.b.get("soundVolume"), (() => {
                              var FF;
                              null === (FF = bW._autoSuspend) || void 0 === FF || FF.call(bW)
                            }))
                          }
                        }, 3764: (FF, WF, SF) => {
                          SF.d(WF, {
                            c: () => kW,
                            f: () => tW
                          });
                          var CF = SF(1160),
                            AF = SF(20);
                          var uF = SF(271);
                          var hF = SF(568);
                          var bW = SF(1939),
                            dF = SF(3773),
                            PF = SF(3802),
                            RF = SF(3812);
                          class iW {
                            constructor(FF, WF, SF, CF, AF, uF) {
                              this.id = FF, this.type = WF, this.parameters = SF, this.tearDownNotification = CF, this.onDonePromise = AF, this.resolveRequest = uF
                            }
                          }
                          const eF = new Set(["primary-fire", "alt-fire", "TouchDig"]);
                          class EF {
                            constructor(FF, WF, SF, CF, AF, uF) {
                              this.id = FF, this.type = WF, this.parameters = SF, this.resolveRequest = CF, this.onDonePromise = AF, this.tearDownNotification = uF, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
                              const hF = tW[WF];
                              if (!hF) throw console.error(`No QTE implementation registered for type: ${WF}`), new Error(`No QTE implementation registered for type: ${WF}`);
                              this.implementation = new hF(SF, (FF => {
                                this.isCompleted = !0, this.resolveRequest(FF)
                              }), this.tearDownNotification), this.setupInputHandlers()
                            }
                            setupInputHandlers() {
                              this.mouseSub = AF.j.subscribe("QTEMouseState", (FF => {
                                let {
                                  isDown: WF
                                } = FF;
                                this.isCompleted || this.implementation.handleMouseInput(WF)
                              })), this.stopInputActions = (0, PF.h)((FF => {
                                this.isCompleted || !eF.has(FF.action) && !(0, PF.g)(FF) || this.implementation.handleMouseInput(FF.down)
                              })), this.tickSub = AF.j.subscribe("noaTick", (FF => {
                                if (this.isCompleted) return;
                                const WF = FF / 1e3;
                                this.implementation.handleTick(WF)
                              })), this.stopShellTicks = (0, dF.w)((() => {
                                this.isCompleted || this.implementation.handleTick(bW.s / 1e3)
                              }))
                            }
                            cleanup() {
                              var FF, WF;
                              this.mouseSub && (AF.j.unsubscribe(this.mouseSub), this.mouseSub = null), null === (FF = this.stopInputActions) || void 0 === FF || FF.call(this), this.stopInputActions = null, null === (WF = this.stopShellTicks) || void 0 === WF || WF.call(this), this.stopShellTicks = null, this.tickSub && (AF.j.unsubscribe(this.tickSub), this.tickSub = null)
                            }
                            async waitUntilDone() {
                              await this.onDonePromise
                            }
                            getState() {
                              return this.implementation.getState()
                            }
                            tearDown() {
                              this.isCompleted = !0, this.cleanup(), this.implementation.tearDown()
                            }
                          }
                          const QF = new CF.b,
                            rW = new Map;
                          let gW = null;
                          const tW = {
                            progressBar: class {
                              constructor(FF, WF, SF) {
                                var CF, AF, uF, hF;
                                this.resolveRequest = WF, this.tearDownNotification = SF, this.progress = 0, this.gJ = void 0, this.Tv = void 0, this.AY = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
                                const bW = FF;
                                this.gJ = null !== (CF = bW.gJ) && void 0 !== CF ? CF : .075, this.Tv = null !== (AF = bW.Tv) && void 0 !== AF ? AF : 1, this.progress = null !== (uF = bW.FY) && void 0 !== uF ? uF : 30, this.AY = null !== (hF = bW.AY) && void 0 !== hF && hF, this.parameters = bW
                              }
                              handleMouseInput(FF) {
                                FF && !this.isCompleted && (this.clickCount++, this.progress += this.Tv, this.progress >= 100 && this.complete(!0))
                              }
                              handleTick() {
                                if (!this.isCompleted)
                                  if (this.progress -= this.gJ, this.AY && this.progress <= 0) this.complete(!1);
                                  else if (this.progress <= 0) this.progress = 0;
                                else if (this.progress >= 100) return void this.complete(!0)
                              }
                              complete(FF) {
                                this.isCompleted = !0, this.resolveRequest(FF)
                              }
                              getState() {
                                return {
                                  type: this.type,
                                  parameters: this.parameters,
                                  state: {
                                    progress: this.progress,
                                    clickCount: this.clickCount
                                  },
                                  isActive: !0
                                }
                              }
                              tearDown() {
                                this.tearDownNotification()
                              }
                            },
                            timedClick: class {
                              constructor(FF, WF, SF) {
                                var CF;
                                this.resolveRequest = WF, this.tearDownNotification = SF, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = FF, this.timeWindowMs = null !== (CF = this.parameters.Dv) && void 0 !== CF ? CF : 3e3, this.startTime = Date.now()
                              }
                              handleMouseInput(FF) {
                                if (!FF || this.isCompleted) return;
                                Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
                              }
                              handleTick() {
                                if (this.isCompleted) return;
                                Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
                              }
                              complete(FF) {
                                this.isCompleted = !0, this.resolveRequest(FF)
                              }
                              getState() {
                                const FF = Date.now() - this.startTime,
                                  WF = Math.max(0, this.timeWindowMs - FF);
                                return {
                                  type: this.type,
                                  parameters: this.parameters,
                                  state: {
                                    timeRemaining: WF,
                                    Dv: this.timeWindowMs
                                  },
                                  isActive: !0
                                }
                              }
                              tearDown() {
                                this.tearDownNotification()
                              }
                            },
                            gravityBar: class {
                              constructor(FF, WF, SF) {
                                var CF;
                                this.resolveRequest = WF, this.tearDownNotification = SF, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
                                const AF = FF;
                                this.parameters = {
                                  ...AF,
                                  vJ: uF.c.clamp(AF.vJ, .05, 1)
                                }, this.progress = null !== (CF = AF.FY) && void 0 !== CF ? CF : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
                              }
                              handleMouseInput(FF) {
                                this.isMouseDown = FF
                              }
                              handleTick(FF) {
                                this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(FF))
                              }
                              updateMover() {
                                this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
                                const FF = Math.sign(this.moverTarget - this.moverPosition);
                                this.moverPosition += FF * this.parameters.WJ * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
                              }
                              pickNewMoverTarget() {
                                this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
                              }
                              randomNumTicksUntilDirectionChange() {
                                const FF = uF.c.clamp(1 - .7 * this.parameters.dJ, 0, 1.4);
                                return Math.floor(60 * FF + 40 * Math.random())
                              }
                              updateCatchZone() {
                                this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.PJ : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = uF.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
                                const FF = this.parameters.vJ / 2,
                                  WF = FF,
                                  SF = 1 - FF;
                                this.catchZonePosition <= WF ? (this.catchZonePosition = WF, this.catchZoneVelocity = 0) : this.catchZonePosition >= SF && (this.catchZonePosition = SF, this.catchZoneVelocity = 0)
                              }
                              isMoverInCatchZone() {
                                const FF = this.parameters.vJ / 2;
                                return this.moverPosition >= this.catchZonePosition - FF && this.moverPosition <= this.catchZonePosition + FF
                              }
                              updateProgress(FF) {
                                this.isMoverInCatchZone() ? this.progress += this.parameters.RJ * FF : this.progress -= this.parameters.QJ * FF, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.AY && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
                              }
                              complete(FF) {
                                this.isCompleted = !0, this.resolveRequest(FF)
                              }
                              getState() {
                                return {
                                  type: this.type,
                                  parameters: this.parameters,
                                  state: {
                                    catchZonePosition: this.catchZonePosition,
                                    vJ: this.parameters.vJ,
                                    moverPosition: this.moverPosition,
                                    progress: this.progress,
                                    isCatching: this.isMoverInCatchZone()
                                  },
                                  isActive: !0
                                }
                              }
                              tearDown() {
                                this.tearDownNotification()
                              }
                            },
                            precisionBar: class {
                              constructor(FF, WF, SF) {
                                var CF, AF, hF, bW, dF;
                                this.resolveRequest = WF, this.tearDownNotification = SF, this.startTime = void 0, this.speed = void 0, this.VJ = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
                                const PF = FF;
                                this.parameters = {
                                  ...PF,
                                  speed: null !== (CF = PF.speed) && void 0 !== CF ? CF : .5,
                                  VJ: uF.c.clamp(PF.VJ, .05, 1),
                                  label: null !== (AF = PF.label) && void 0 !== AF ? AF : [{
                                    str: "Click when the marker is within the green zone."
                                  }],
                                  icon: null !== (hF = PF.icon) && void 0 !== hF ? hF : null,
                                  scale: null !== (bW = PF.scale) && void 0 !== bW ? bW : 1,
                                  rotation: null !== (dF = PF.rotation) && void 0 !== dF ? dF : 0
                                }, this.speed = this.parameters.speed, this.VJ = this.parameters.VJ, this.startTime = Date.now()
                              }
                              handleMouseInput(FF) {
                                if (FF) {
                                  this.updateMarkerPosition();
                                  const FF = Math.abs(this.markerPosition - .5) <= this.VJ / 2;
                                  this.complete(FF)
                                }
                              }
                              handleTick() {
                                this.isCompleted || this.updateMarkerPosition()
                              }
                              updateMarkerPosition() {
                                const FF = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
                                this.markerPosition = FF <= .5 ? 2 * FF : 2 - 2 * FF
                              }
                              complete(FF) {
                                this.isCompleted = !0, this.resolveRequest(FF)
                              }
                              getState() {
                                return this.updateMarkerPosition(), {
                                  type: this.type,
                                  parameters: this.parameters,
                                  state: {
                                    markerPosition: this.markerPosition
                                  },
                                  isActive: !0
                                }
                              }
                              tearDown() {
                                this.tearDownNotification()
                              }
                            },
                            rhythmClick: class {
                              constructor(FF, WF, SF) {
                                this.resolveRequest = WF, this.tearDownNotification = SF, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = FF, this.shrinkStartTime = Date.now()
                              }
                              handleMouseInput(FF) {
                                if (!FF || this.isCompleted) return;
                                const WF = this.getOuterCircleProgress();
                                if (WF <= this.parameters.OJ && WF >= -this.parameters.OJ) {
                                  if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.LJ) return void this.complete(!0)
                                } else this.handleMiss();
                                this.shrinkStartTime = Date.now()
                              }
                              handleMiss() {
                                this.misses++, this.lastClickResult = !1, !(0, hF.Q)(this.parameters.ZJ) && this.misses > this.parameters.ZJ ? this.complete(!1) : this.shrinkStartTime = Date.now()
                              }
                              handleTick() {
                                if (this.isCompleted) return;
                                this.getOuterCircleProgress() < -this.parameters.OJ && this.handleMiss()
                              }
                              getOuterCircleProgress() {
                                return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.mp
                              }
                              complete(FF) {
                                this.isCompleted = !0, this.resolveRequest(FF)
                              }
                              getState() {
                                return {
                                  type: this.type,
                                  parameters: this.parameters,
                                  state: {
                                    outerCircleProgress: this.getOuterCircleProgress(),
                                    successes: this.successes,
                                    LJ: this.parameters.LJ,
                                    misses: this.misses,
                                    lastClickResult: this.lastClickResult
                                  },
                                  isActive: !0
                                }
                              }
                              tearDown() {
                                this.tearDownNotification()
                              }
                            }
                          };

                          function TF() {
                            (0, RF.h)(bW.z.Qte, gW ? bW.z.Qte : 0), gW ? AF.j.Uu("qteStateUpdated", gW.getState()) : AF.j.Uu("qteStateUpdated", {
                              type: null,
                              typeSpecificParameters: null,
                              isActive: !1
                            })
                          }
                          class aW {
                            constructor(FF, WF) {
                              this.resultPromise = FF, this.tearDownQTE = WF
                            }
                            static create(FF, WF, SF) {
                              const CF = Promise.race([FF, WF]);
                              return new aW(CF, SF)
                            }
                            async getResult() {
                              return await this.resultPromise
                            }
                          }
                          class kW {
                            static queueQTE(FF, WF, SF) {
                              let CF, AF;
                              const uF = new Promise((FF => {
                                  CF = FF
                                })),
                                hF = new Promise((FF => {
                                  AF = () => {
                                    FF("qteTornDown")
                                  }
                                })),
                                bW = Promise.race([uF, hF]).then((() => {})),
                                dF = new iW(FF, WF, SF, AF, bW, CF);
                              return rW.set(FF, dF), QF.enqueue(dF), gW || this.processNextQTE(), aW.create(uF, hF, AF)
                            }
                            static async processNextQTE() {
                              if (gW || QF.QC()) return void(QF.QC() && gW && (gW = null, TF()));
                              const FF = await QF.dequeue();
                              if (!rW.has(FF.id)) return void await this.processNextQTE();
                              rW.delete(FF.id);
                              const WF = new EF(FF.id, FF.type, FF.parameters, FF.resolveRequest, FF.onDonePromise, FF.tearDownNotification);
                              gW = WF, TF();
                              try {
                                await WF.waitUntilDone()
                              } catch (SF) {
                                console.error("Error while waiting for QTE to resolve:", SF.stack)
                              }
                              gW === WF && (gW.cleanup(), gW = null, TF()), await this.processNextQTE()
                            }
                            static cancelQTE(FF) {
                              if (gW && gW.id === FF) return gW.tearDown(), gW = null, TF(), void this.processNextQTE();
                              const WF = rW.get(FF);
                              WF && (rW.delete(FF), WF.tearDownNotification())
                            }
                            static getCurrentState() {
                              return gW ? gW.getState() : {
                                type: null,
                                parameters: null,
                                state: null,
                                isActive: !1
                              }
                            }
                            static reset() {
                              gW && (gW.tearDown(), gW = null), rW.forEach(((FF, WF) => {
                                this.cancelQTE(WF)
                              })), QF.emptyQueue(), rW.clear(), TF()
                            }
                          }
                        }, 3855: (FF, WF, SF) => {
                          SF.d(WF, {
                            Howl: () => CF.Howl,
                            c: () => CF.Howler
                          });
                          var CF = SF(3863);
                          CF.Howler._mobileUnloaded = !0
                        }, 3869: (FF, WF, SF) => {
                          function CF(FF) {
                            return {
                              notAfter: FF
                            }
                          }
                          SF.d(WF, {
                            d: () => dF,
                            f: () => PF,
                            i: () => bW,
                            k: () => CF,
                            o: () => AF,
                            r: () => uF,
                            u: () => hF,
                            w: () => RF,
                            z: () => iW
                          });
                          const AF = CF("\\w$."),
                            uF = CF("\\w.,");

                          function hF(FF) {
                            return WF => dF(WF, FF)
                          }

                          function bW(FF) {
                            return WF => !FF.test(WF.input.slice(0, WF.index))
                          }

                          function dF(FF, WF) {
                            return FF.index > 0 && new RegExp(`[${WF}]`).test(FF.input[FF.index - 1])
                          }

                          function PF(FF, WF, SF) {
                            return function(FF) {
                              return void 0 !== FF && "function" !== typeof FF
                            }(SF) ? function(FF, WF, SF) {
                              const CF = WF.flags.replace(/[gy]/g, ""),
                                AF = new RegExp(`[^${SF}](?:${WF.source})`, `${CF}g`),
                                uF = [],
                                hF = SF => {
                                  const CF = SF.index + SF[0].length;
                                  return ("" === SF[0] ? eF(FF, WF, CF) : CF) - 1
                                },
                                bW = new RegExp(`(?:${WF.source})`, `${CF}y`).exec(FF);
                              if (bW) {
                                if (uF.push(bW), !WF.global) return uF;
                                AF.lastIndex = hF(bW)
                              }
                              for (let dF = AF.exec(FF); dF; dF = AF.exec(FF)) {
                                const SF = eF(FF, WF, dF.index) - dF.index;
                                if (dF[0] = dF[0].slice(SF), dF.index += SF, uF.push(dF), !WF.global) break;
                                AF.lastIndex = hF(dF)
                              }
                              return uF
                            }(FF, WF, SF.notAfter) : function(FF, WF, SF) {
                              const CF = new RegExp(WF.source, `${WF.flags.replace(/[gy]/g,"")}g`),
                                AF = [];
                              for (let uF = CF.exec(FF); uF; uF = CF.exec(FF))
                                if (!SF || SF(uF)) {
                                  if (AF.push(uF), !WF.global) break;
                                  "" === uF[0] && (CF.lastIndex = eF(FF, WF, CF.lastIndex))
                                } else CF.lastIndex = eF(FF, WF, uF.index);
                              return AF
                            }(FF, WF, SF)
                          }

                          function RF(FF, WF, SF, CF) {
                            let AF = "",
                              uF = 0;
                            for (const hF of PF(FF, WF, SF)) AF += FF.slice(uF, hF.index) + CF(hF), uF = hF.index + hF[0].length;
                            return AF + FF.slice(uF)
                          }

                          function iW(FF, WF, SF) {
                            const CF = [];
                            let AF = 0;
                            for (const uF of PF(FF, WF, SF)) CF.push(FF.slice(AF, uF.index)), AF = uF.index + uF[0].length;
                            return [...CF, FF.slice(AF)]
                          }

                          function eF(FF, WF, SF) {
                            var CF;
                            return SF + (WF.unicode && (null !== (CF = FF.codePointAt(SF)) && void 0 !== CF ? CF : 0) > 65535 ? 2 : 1)
                          }
                        }, 3820: (FF, WF, SF) => {
                          SF.d(WF, {
                            e: () => AF,
                            h: () => dF,
                            j: () => uF,
                            k: () => hF,
                            l: () => bW,
                            n: () => gW,
                            r: () => RF,
                            v: () => iW,
                            w: () => rW,
                            x: () => EF
                          });
                          var CF = SF(1421);
                          const AF = 24e3,
                            uF = "/docs/llms.txt",
                            hF = `${CF.d}${uF}`,
                            bW = "/llms.txt",
                            dF = "/docs/llms-full.txt";

                          function PF(FF) {
                            return FF || "index"
                          }

                          function RF(FF) {
                            return `/docs/${PF(FF)}.md`
                          }

                          function iW(FF, WF) {
                            return `/docs/${PF(FF)}/${WF+1}.md`
                          }
                          const eF = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function EF(FF) {
                            const WF = eF.exec(FF);
                            return null === WF ? null : {
                              name: WF[1],
                              part: void 0 === WF[2] ? null : Number(WF[2])
                            }
                          }
                          const QF = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function rW(FF) {
                            const WF = QF.exec(FF);
                            if (null === WF) return null;
                            const [, SF = "", CF] = WF;
                            return void 0 === CF ? RF(SF) : iW(SF, Number(CF) - 1)
                          }

                          function gW(FF) {
                            return `/docsHtml/${PF(FF)}.html`
                          }
                        }
                      }; Object.freeze(modules);
                      for (const FF in modules) Object.freeze(modules[FF]);