export const id = 63;
export const ids = [63, 76];
export const modules = {
    3671: (WW, RW, MW) => {
        MW.r(RW), MW.d(RW, {
          default: () => Zz
        });
        var wW = MW(75),
          CW = MW(897),
          zR = MW.n(CW),
          AW = MW(1336),
          bR = MW(1345),
          yR = MW(27),
          NW = MW(93),
          eW = MW(3674),
          BW = MW(3690),
          tR = MW(3699),
          TW = MW(3449),
          gR = MW(940);
        const iR = "/textures/docs/icons";

        function YW(WW) {
          let {
            name: RW,
            isTinted: MW,
            className: wW,
            style: CW
          } = WW;
          const AW = `${iR}/${RW}.png`;
          return MW ? (0, gR.jsxs)("span", {
            className: zR()("DocsPixelIcon", "Tinted", wW),
            "aria-hidden": "true",
            style: CW,
            children: [(0, gR.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${AW}")`,
                WebkitMaskImage: `url("${AW}")`
              }
            }), (0, gR.jsx)("img", {
              src: AW,
              alt: ""
            })]
          }) : (0, gR.jsx)("img", {
            className: zR()("DocsPixelIcon", wW),
            src: AW,
            alt: "",
            "aria-hidden": "true",
            style: CW
          })
        }
        const JW = 1500;

        function PW() {
          const [WW, RW] = (0, wW.useState)(null);
          (0, wW.useEffect)((() => {
            if (null === WW) return;
            const MW = setTimeout((() => {
              RW(null)
            }), JW);
            return () => {
              clearTimeout(MW)
            }
          }), [WW]);
          return [WW, WW => {
            (0, TW.c)(WW).then((() => {
              RW({
                text: WW,
                failed: !1
              })
            }), (MW => {
              console.error("Could not copy to the clipboard", MW), RW({
                text: WW,
                failed: !0
              })
            }))
          }]
        }

        function IW(WW) {
          let {
            text: RW,
            label: MW,
            className: wW
          } = WW;
          const [CW, AW] = PW(), bR = !1 === (null === CW || void 0 === CW ? void 0 : CW.failed);
          return (0, gR.jsxs)("button", {
            type: "button",
            className: zR()("DocsCopyButton", wW, {
              Copied: bR
            }),
            title: `Copy ${RW.length>40?"to clipboard":RW}`,
            "aria-label": MW ? void 0 : `Copy ${RW}`,
            onClick: WW => {
              WW.stopPropagation(), AW(RW)
            },
            children: [(0, gR.jsx)(YW, {
              name: bR ? "check" : "copy"
            }), MW && (0, gR.jsx)("span", {
              children: bR ? "Copied" : null !== CW && void 0 !== CW && CW.failed ? "Copy failed" : MW
            })]
          })
        }
        eW.b.registerLanguage("javascript", BW.d), eW.b.registerLanguage("typescript", tR.b);
        const oW = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          lW = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          FW = 24;

        function fW(WW) {
          let {
            code: RW,
            lang: MW,
            compact: CW = !1
          } = WW;
          const AW = (0, wW.useMemo)((() => function(WW, RW) {
              const MW = oW[RW];
              return MW ? eW.b.highlight(WW, {
                language: MW
              }).value : WW.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(RW, MW)), [RW, MW]),
            bR = RW.split("\n").length,
            yR = !CW && bR > FW + 6,
            [NW, BW] = (0, wW.useState)(!1),
            tR = oW[MW];
          return (0, gR.jsxs)("div", {
            className: zR()("DocsCodeBlock", {
              Compact: CW,
              Collapsed: yR && !NW
            }),
            children: [!CW && (0, gR.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, gR.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: tR ? lW[tR] : "Text"
              }), (0, gR.jsx)(IW, {
                text: RW,
                label: "Copy"
              })]
            }), (0, gR.jsx)("pre", {
              children: (0, gR.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: AW
                }
              })
            }), yR && (0, gR.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": NW,
              onClick: () => {
                BW(!NW)
              },
              children: [(0, gR.jsx)(YW, {
                name: NW ? "chevron-up" : "chevron-down"
              }), NW ? "Show less" : `Show all ${bR} lines`]
            })]
          })
        }
        var QW = MW(3705);
        var rR = MW(3713);
        const cR = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function XW(WW) {
          const RW = new Map;
          let MW, wW = [],
            CW = !1;
          const zR = () => {
            MW && RW.set(MW.name, MW.lines.join("\n").trimEnd())
          };
          for (const AW of WW.split("\n")) {
            const WW = AW.match(cR);
            CW || AW.startsWith("/*") ? (CW || (zR(), MW = void 0), wW.push(AW), CW = !AW.includes("*/")) : WW ? (zR(), MW = {
              name: WW[1],
              lines: [...wW, AW]
            }, wW = []) : MW && (AW.startsWith(" ") || AW.startsWith("\t") || /^[}\])|]/.test(AW)) ? MW.lines.push(AW) : MW && "" !== AW.trim() && (zR(), MW = void 0)
          }
          return zR(), RW
        }

        function jR(WW) {
          return "methods" === WW || "callbacks" === WW || "settings" === WW
        }
        const kR = {
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
              setterSnippet: (WW, RW) => `api.setClientOption(playerId, "${WW}", ${RW})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (WW, RW) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${WW}", ${RW})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (WW, RW) => `api.setMobSetting(mobId, "${WW}", ${RW})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (WW, RW) => `api.setVehicleSetting(vehicleId, "${WW}", ${RW})`
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
          aR = {
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

        function sW(WW) {
          return WW.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function dW(WW) {
          let RW = !1;
          return WW.split("\n").map((WW => (WW.startsWith("```") && (RW = !RW), !RW && /^#{3,} /.test(WW) ? WW.slice(1) : WW))).join("\n")
        }

        function pW(WW) {
          return "readme" === WW ? "getting-started" : sW(WW)
        }
        const hW = "## Glossary of Referenced Types";
        const UW = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...rR.b.flatMap((WW => {
            const RW = {
              id: WW.id,
              slug: pW(WW.id),
              title: WW.title,
              markdown: WW.content,
              ...kR[WW.id]
            };
            if ("readme" === WW.id) return function(WW) {
              const RW = WW.markdown.indexOf(hW),
                MW = WW.markdown.indexOf("\n```", RW),
                wW = WW.markdown.indexOf("\n```", MW + 1);
              if (-1 === RW || -1 === MW || -1 === wW) throw new Error(`Getting started has no "${hW}" section with a code block`);
              const CW = WW.markdown.slice(RW + 31, MW).trim(),
                zR = [...XW(WW.markdown.slice(WW.markdown.indexOf("\n", MW + 1) + 1, wW))].map((WW => {
                  let [RW, MW] = WW;
                  return `## ${RW}\n\n\`\`\`ts\n${MW}\n\`\`\`\n`
                })),
                AW = WW.markdown.slice(WW.markdown.indexOf("\n", wW + 1) + 1);
              return [{
                ...WW,
                markdown: `${WW.markdown.slice(0,RW)}${AW}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${CW}\n\n${zR.join("\n")}`
              }]
            }(RW);
            if ("howTo" === WW.id) {
              const {
                parent: WW,
                guides: MW
              } = function(WW) {
                const [RW, ...MW] = WW.markdown.split(/^(?=## )/m), wW = [RW], CW = [];
                for (const AW of MW) {
                  var zR;
                  const RW = AW.indexOf("\n"),
                    MW = AW.slice(3, RW).trim(),
                    bR = AW.slice(RW + 1);
                  if (!bR.includes("```")) {
                    wW.push(AW);
                    continue
                  }
                  const yR = null !== (zR = aR[MW]) && void 0 !== zR ? zR : {
                    icon: "lightbulb",
                    summary: `How to use ${MW.toLowerCase()} in World Code.`
                  };
                  CW.push({
                    id: `${WW.id}${MW.split(/[^A-Za-z0-9]+/).map((WW=>WW.charAt(0).toUpperCase()+WW.slice(1))).join("")}`,
                    slug: `${WW.slug}-${sW(MW)}`,
                    title: MW,
                    layout: "article",
                    sourceAnchor: (0, QW.s)(MW),
                    markdown: `# ${MW}\n\n${dW(bR)}`,
                    ...yR
                  })
                }
                return {
                  parent: {
                    ...WW,
                    markdown: wW.join(""),
                    childPageIds: CW.map((WW => WW.id))
                  },
                  guides: CW
                }
              }(RW);
              return [WW, ...MW]
            }
            return [RW]
          }))],
          EW = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...UW.filter((WW => void 0 !== WW.sourceAnchor)).map((WW => WW.id))]
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

        function VW(WW) {
          return UW.find((RW => RW.id === WW))
        }
        const mR = new Map;

        function xR(WW) {
          let RW = mR.get(WW.id);
          return RW || (RW = (0, QW.y)(WW.markdown, "changelog" === WW.layout ? 3 : 2), mR.set(WW.id, RW)), RW
        }

        function vR(WW, RW) {
          return xR(WW).sections.some((WW => WW.heading.anchor === RW || WW.blocks.some((WW => "heading" === WW.kind && WW.anchor === RW))))
        }

        function KW(WW) {
          const [RW, ...MW] = WW.replace(/^#/, "").split("-"), wW = UW.find((WW => WW.id === RW));
          if (!wW) return null;
          const CW = MW.length > 0 ? (0, QW.s)(MW.join("-")) : "";
          for (const AW of null !== (zR = wW.childPageIds) && void 0 !== zR ? zR : []) {
            var zR;
            const WW = VW(AW);
            if (WW.sourceAnchor === CW) return {
              page: WW,
              anchor: ""
            };
            if (vR(WW, CW)) return {
              page: WW,
              anchor: CW
            }
          }
          return {
            page: wW,
            anchor: CW
          }
        }
        const uW = {
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

        function OW(WW, RW) {
          let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const wW = RW.slug ? `${WW}/${RW.slug}` : WW;
          return MW ? `${wW}#${MW}` : wW
        }
        var nW = MW(3729);
        const GW = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          LW = new Set(["GameApi", "Console", "_TypeOf"]),
          HW = 4;

        function DW(WW) {
          let RW = WW.length;
          for (; RW > 0 && "" === WW[RW - 1].trim();) RW--;
          return WW.slice(0, RW)
        }

        function qR(WW) {
          var RW;
          const MW = DW(WW);
          if (null === (RW = MW.at(-1)) || void 0 === RW || !RW.trimEnd().endsWith("*/")) return {
            lines: MW,
            doc: ""
          };
          const wW = MW.findLastIndex((WW => WW.startsWith("/**")));
          return -1 === wW ? {
            lines: MW,
            doc: ""
          } : {
            lines: DW(MW.slice(0, wW)),
            doc: MW.slice(wW).join("\n")
          }
        }

        function ZW(WW) {
          var RW;
          const MW = WW.split("\n"),
            wW = MW.flatMap(((WW, RW) => GW.test(WW) ? [RW] : []));
          let CW = qR(MW.slice(0, null !== (RW = wW[0]) && void 0 !== RW ? RW : MW.length)).doc;
          return wW.map(((WW, RW) => {
            var zR;
            const AW = qR(MW.slice(WW, null !== (zR = wW[RW + 1]) && void 0 !== zR ? zR : MW.length)),
              bR = {
                name: MW[WW].match(GW)[1],
                doc: CW,
                lines: AW.lines
              };
            return CW = AW.doc, bR
          }))
        }

        function SW(WW) {
          var RW;
          const MW = WW.match(/^readonly \[([\s\S]*)\]$/);
          return MW ? null !== (RW = MW[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== RW ? RW : [] : null
        }

        function WR(WW) {
          if (!WW.startsWith("{") || !WW.endsWith("}")) return null;
          const RW = {
              keys: [],
              values: []
            },
            MW = WW => {
              const MW = WW.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              MW && (RW.keys.push(MW[1].startsWith('"') ? MW[1] : `"${MW[1]}"`), RW.values.push(MW[2].trim()))
            };
          let wW = 0,
            CW = "";
          for (const zR of WW.slice(1, -1)) "{[(".includes(zR) ? wW++ : "}])".includes(zR) && wW--, ";" === zR && 0 === wW ? (MW(CW), CW = "") : CW += zR;
          return MW(CW), RW
        }

        function RR(WW) {
          return WW.length > HW ? `\n\t| ${WW.join("\n\t| ")}` : WW.join(" | ")
        }

        function MR(WW, RW) {
          const MW = function(WW, RW) {
            return WW.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((WW, MW) => {
              var wW;
              const CW = null === (wW = RW.get(MW)) || void 0 === wW ? void 0 : wW.object;
              return CW ? RR(CW.values) : WW
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((WW, MW) => {
              var wW, CW;
              const zR = null === (wW = RW.get(MW)) || void 0 === wW || null === (CW = wW.object) || void 0 === CW ? void 0 : CW.values.map(SW);
              return null !== zR && void 0 !== zR && zR.every((WW => null !== WW)) ? RR([...new Set(zR.flat())]) : WW
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((WW, MW) => {
              var wW;
              const CW = null === (wW = RW.get(MW)) || void 0 === wW ? void 0 : wW.members;
              return CW ? RR(CW) : WW
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((WW, MW) => {
              var wW;
              const CW = null === (wW = RW.get(MW)) || void 0 === wW ? void 0 : wW.object;
              return CW ? RR(CW.keys) : WW
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((WW, MW) => {
              var wW, CW;
              return null !== (wW = null === (CW = RW.get(MW)) || void 0 === CW ? void 0 : CW.text) && void 0 !== wW ? wW : WW
            }))
          }(WW.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), RW);
          return [WW.doc, MW].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function wR(WW) {
          const RW = ZW(WW),
            MW = function(WW) {
              const RW = new Map,
                MW = WW.find((WW => "_TypeOf" === WW.name));
              let wW = null;
              const CW = () => {
                if (wW) {
                  const WW = wW.lines.join("\n");
                  RW.set(wW.name, {
                    text: WW,
                    members: SW(WW),
                    object: WR(WW)
                  })
                }
              };
              for (const zR of MW.lines.slice(1, -1)) {
                const WW = zR.match(/^\t([\w$]+): (.+)$/);
                WW ? (CW(), wW = {
                  name: WW[1],
                  lines: [WW[2]]
                }) : wW && wW.lines.push(zR.replace(/^\t/, ""))
              }
              return CW(), RW
            }(RW),
            wW = new Map;
          for (const CW of RW) LW.has(CW.name) || wW.has(CW.name) || wW.set(CW.name, MR(CW, MW));
          return wW
        }
        let CR, zM, AR;

        function bM() {
          return zM ??= function(WW) {
            const RW = ZW(WW).find((WW => "GameApi" === WW.name)),
              MW = new Map,
              wW = RW.lines;
            for (let zR = 0; zR < wW.length; zR++) {
              var CW;
              if (!wW[zR].trimStart().startsWith("/**")) continue;
              const WW = zR;
              for (; zR < wW.length && !wW[zR].includes("*/");) zR++;
              const RW = null === (CW = wW[zR + 1]) || void 0 === CW ? void 0 : CW.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!RW) continue;
              let AW = null;
              const bR = [];
              let yR = "description",
                NW = !1;
              for (const MW of wW.slice(WW, zR + 1).join("\n").split("\n").map((WW => WW.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const WW = MW.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                WW ? (AW = WW[1].trim(), yR = "deprecation") : MW.startsWith("@") ? (yR = "otherTag", NW = !0) : "" === MW.trim() ? NW || (yR = "description", bR.push(MW)) : "deprecation" !== yR || /^[A-Z]/.test(MW.trim()) ? "otherTag" !== yR && (yR = "description", bR.push(MW)) : AW = `${AW} ${MW.trim()}`.trim()
              }
              MW.set(RW[1], {
                deprecation: AW,
                description: bR.join("\n").trim()
              })
            }
            return MW
          }(nW.default), zM
        }

        function yM() {
          if (!AR) {
            AR = new Map;
            for (const WW of UW) {
              const RW = (0, QW.v)(xR(WW)).flatMap((WW => WW.blocks));
              for (const WW of (0, QW.l)(RW))
                if ("ts" === WW.lang || "typescript" === WW.lang)
                  for (const [RW, MW] of XW(WW.code)) AR.set(RW, MW)
            }
            for (const [WW, RW] of(CR ??= wR(nW.default), CR)) AR.has(WW) || AR.set(WW, RW)
          }
          return AR
        }
        const NR = {
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
        let eR;

        function BR() {
          if (!eR) {
            eR = new Map;
            for (const WW of UW)
              if (jR(WW.layout))
                for (const RW of xR(WW).sections) eR.has(RW.heading.text) || eR.set(RW.heading.text, {
                  pageId: WW.id,
                  anchor: RW.heading.anchor
                })
          }
          return eR
        }

        function tM(WW) {
          const RW = WW.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return RW ? BR().get(RW[1]) : void 0
        }
        const TR = (0, wW.createContext)("/docs"),
          gM = (0, wW.createContext)(null),
          iM = (0, wW.createContext)(!1),
          YR = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function JR(WW) {
          const RW = WW.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return RW ? RW[1] : null
        }

        function PR(WW) {
          let {
            colour: RW
          } = WW;
          return (0, gR.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: RW
            },
            "aria-hidden": "true"
          })
        }

        function IR(WW) {
          const RW = [];
          let MW = 0;
          for (const wW of WW.matchAll(YR)) RW.push(WW.slice(MW, wW.index), (0, gR.jsx)(PR, {
            colour: wW[0]
          }), wW[0]), MW = wW.index + wW[0].length;
          return RW.push(WW.slice(MW)), RW
        }

        function oR(WW) {
          let {
            href: RW,
            children: MW
          } = WW;
          const CW = (0, wW.useContext)(TR);
          if (RW.startsWith("#")) {
            const WW = KW(RW);
            if (WW) return (0, gR.jsx)(AW.e, {
              to: OW(CW, WW.page, WW.anchor),
              children: (0, gR.jsx)(iM.Provider, {
                value: !0,
                children: MW
              })
            })
          }
          return (0, gR.jsx)("a", {
            href: RW,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, gR.jsx)(iM.Provider, {
              value: !0,
              children: MW
            })
          })
        }

        function lR(WW) {
          let {
            code: RW
          } = WW;
          const MW = (0, wW.useContext)(TR);
          if ((0, wW.useContext)(iM)) return (0, gR.jsx)("code", {
            className: "DocsInlineCode",
            children: RW
          });
          if (yM().has(RW)) return (0, gR.jsx)(rM, {
            type: RW
          });
          const CW = tM(RW);
          if (CW) return (0, gR.jsx)(AW.e, {
            className: "DocsInlineCode DocsSymbolLink",
            to: OW(MW, VW(CW.pageId), CW.anchor),
            children: RW
          });
          const zR = JR(RW);
          return (0, gR.jsxs)("code", {
            className: "DocsInlineCode",
            children: [zR && (0, gR.jsx)(PR, {
              colour: zR
            }), RW]
          })
        }

        function FR(WW) {
          let {
            text: RW
          } = WW;
          const MW = [];
          let CW = 0;
          for (const wW of RW.matchAll(QW.f)) {
            wW.index > CW && MW.push(...IR(RW.slice(CW, wW.index)));
            const [, WW, zR, AW, bR, yR] = wW;
            WW ? MW.push((0, gR.jsx)(lR, {
              code: (0, QW.n)(WW, zR)
            })) : AW ? MW.push((0, gR.jsx)("strong", {
              children: (0, gR.jsx)(FR, {
                text: AW
              })
            })) : MW.push((0, gR.jsx)(oR, {
              href: yR,
              children: (0, gR.jsx)(FR, {
                text: bR
              })
            })), CW = wW.index + wW[0].length
          }
          return CW < RW.length && MW.push(...IR(RW.slice(CW))), (0, gR.jsx)(gR.Fragment, {
            children: MW.map(((WW, RW) => (0, gR.jsx)(wW.Fragment, {
              children: WW
            }, RW)))
          })
        }
        const fR = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          QR = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function rM(WW) {
          let {
            type: RW
          } = WW;
          const MW = yM(),
            CW = [];
          for (const wW of RW.trim().matchAll(fR)) {
            const [WW, RW, zR, AW, bR] = wW;
            RW ? CW.push((0, gR.jsx)("span", {
              className: "DocsTypeString",
              children: WW
            })) : zR && MW.has(zR) ? CW.push((0, gR.jsx)(aM, {
              name: zR,
              definition: MW.get(zR)
            })) : zR ? CW.push((0, gR.jsx)("span", {
              className: QR.has(zR) ? "DocsTypeKeyword" : "DocsTypeName",
              children: WW
            })) : AW ? CW.push((0, gR.jsx)("span", {
              className: "DocsTypeNumber",
              children: WW
            })) : bR ? CW.push(" ") : CW.push((0, gR.jsx)("span", {
              className: "DocsTypePunctuation",
              children: WW
            }))
          }
          return (0, gR.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: CW.map(((WW, RW) => (0, gR.jsx)(wW.Fragment, {
              children: WW
            }, RW)))
          })
        }
        const cM = 480,
          XR = 6,
          jM = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let kM = 0;

        function aM(WW) {
          let {
            name: RW,
            definition: MW
          } = WW;
          const CW = (0, wW.useContext)(TR),
            zR = NR[RW],
            bR = (0, wW.useRef)(null),
            yR = (0, wW.useRef)(null),
            eW = (0, wW.useRef)(null),
            [BW, tR] = (0, wW.useState)(!1),
            [TW, iR] = (0, wW.useState)(null),
            JW = (0, wW.useRef)(),
            PW = (0, wW.useContext)(gM),
            [IW] = (0, wW.useState)((() => "DocsTypePopover-" + kM++)),
            oW = () => {
              clearTimeout(JW.current), tR(!0)
            },
            lW = () => {
              clearTimeout(JW.current), JW.current = setTimeout((() => {
                tR(!1)
              }), 120)
            };
          return (0, wW.useEffect)((() => {
            if (!BW) return;
            const WW = WW => {
              if ("Escape" === WW.key) {
                var RW, MW;
                if (null !== (RW = yR.current) && void 0 !== RW && RW.contains(document.activeElement)) null === (MW = bR.current) || void 0 === MW || MW.focus();
                tR(!1)
              }
            };
            return document.addEventListener("keydown", WW), () => {
              document.removeEventListener("keydown", WW)
            }
          }), [BW]), (0, wW.useEffect)((() => () => {
            clearTimeout(JW.current)
          }), []), (0, wW.useLayoutEffect)((() => {
            if (!BW || !bR.current || !yR.current) return void iR(null);
            const WW = bR.current.getBoundingClientRect(),
              RW = yR.current.offsetHeight,
              MW = Math.min(cM, window.innerWidth - 32),
              wW = Math.min(Math.max(16, WW.left), window.innerWidth - MW - 16),
              CW = WW.bottom + XR + RW < window.innerHeight;
            iR({
              left: wW,
              top: CW ? WW.bottom + XR : Math.max(16, WW.top - XR - RW)
            })
          }), [BW]), (0, gR.jsxs)(gR.Fragment, {
            children: [(0, gR.jsx)("button", {
              type: "button",
              ref: bR,
              className: "DocsTypeLink",
              "aria-expanded": BW,
              "aria-describedby": BW ? IW : void 0,
              onMouseEnter: oW,
              onMouseLeave: lW,
              onFocus: oW,
              onBlur: lW,
              onKeyDown: WW => {
                "Tab" === WW.key && !WW.shiftKey && eW.current && (WW.preventDefault(), eW.current.focus())
              },
              onClick: oW,
              children: RW
            }), BW && (0, NW.createPortal)((0, gR.jsxs)("span", {
              ref: yR,
              id: IW,
              className: "DocsTypePopover",
              role: "tooltip",
              style: TW ? {
                left: TW.left,
                top: TW.top,
                maxWidth: cM
              } : {
                visibility: "hidden"
              },
              onMouseEnter: oW,
              onMouseLeave: lW,
              onFocus: oW,
              onBlur: lW,
              children: [(0, gR.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, gR.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: RW
                }), zR && (0, gR.jsxs)(AW.e, {
                  ref: eW,
                  className: "DocsTypePopoverLink",
                  to: OW(CW, VW(zR)),
                  onClick: () => {
                    tR(!1)
                  },
                  onKeyDown: WW => {
                    if ("Tab" === WW.key) {
                      var RW;
                      if (WW.preventDefault(), WW.shiftKey || !bR.current || ! function(WW, RW) {
                          const MW = [...document.querySelectorAll(jM)],
                            wW = MW.slice(MW.indexOf(WW) + 1).find((WW => WW.getClientRects().length > 0 && !(null !== RW && void 0 !== RW && RW.contains(WW))));
                          return null === wW || void 0 === wW || wW.focus(), void 0 !== wW
                        }(bR.current, yR.current)) null === (RW = bR.current) || void 0 === RW || RW.focus();
                      WW.shiftKey || tR(!1)
                    }
                  },
                  children: [VW(zR).title, (0, gR.jsx)(YW, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, gR.jsx)(fW, {
                lang: "ts",
                code: MW,
                compact: !0
              })]
            }), null !== PW && void 0 !== PW ? PW : document.body)]
          })
        }
        var sR = MW(173),
          dR = MW(3735),
          pR = MW(3741),
          hR = MW(3748);
        const UR = {
          progressBar: {
            rV: 30,
            J_: .075,
            P_: 5,
            cV: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            o_: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            F_: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            f_: !0,
            scale: 3,
            rotation: 15,
            Q_: !1
          },
          gravityBar: {
            rV: 30,
            h_: .25,
            U_: 3,
            E_: .8,
            gravity: 1,
            n_: 1.5,
            L_: 8,
            S_: 4,
            cV: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            B3: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            I3: 5,
            o3: 1200,
            r4: .15,
            X3: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var ER = MW(232),
          VR = MW(1586);

        function mM(WW) {
          return WW.startsWith("fa-")
        }
        const xM = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          vM = {
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

        function KR(WW) {
          return "string" === typeof WW ? "text" : "entityName" in WW || "translationKey" in WW ? "other" : (0, ER.sb)(WW) ? "progressBar" : (0, ER.qb)(WW) ? "keyBinding" : "icon" in WW ? "icon" : "str" in WW && "string" === typeof WW.str ? "text" : "other"
        }
        const uR = [{
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
          OR = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...uR],
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
                options: VR.j
              },
              isRequired: !0
            }, ...uR],
            other: []
          };

        function nR(WW) {
          return "string" === typeof WW ? {
            str: WW
          } : WW
        }

        function GR(WW, RW) {
          let MW = nR(WW);
          for (const wW of RW) MW = MW && "object" === typeof MW ? MW[wW] : void 0;
          return MW
        }

        function LR(WW, RW, MW) {
          const wW = (WW, CW) => {
            var zR;
            const AW = RW[CW],
              bR = {
                ...WW
              };
            if (CW === RW.length - 1) return void 0 === MW ? delete bR[AW] : bR[AW] = MW, bR;
            const yR = wW(null !== (zR = WW[AW]) && void 0 !== zR ? zR : {}, CW + 1);
            return 0 === Object.keys(yR).length ? delete bR[AW] : bR[AW] = yR, bR
          };
          return function(WW) {
            const RW = Object.keys(WW);
            return "string" === typeof WW.str && 1 === RW.length ? WW.str : WW
          }(wW(nR(WW), 0))
        }

        function HR(WW, RW) {
          const MW = KR(WW),
            wW = OR[MW].find((WW => WW.path.join(".") === RW.join("."))),
            CW = null !== wW && void 0 !== wW && wW.isRequired && "other" !== MW ? GR(vM[MW], RW) : void 0;
          return LR(WW, RW, CW)
        }

        function DR(WW) {
          switch (KR(WW)) {
            case "text":
              return String(GR(WW, ["str"]));
            case "icon":
              return String(GR(WW, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(GR(WW,["progress"])))}%`;
            case "keyBinding":
              return String(GR(WW, ["action"]));
            case "other":
              return JSON.stringify(WW)
          }
        }
        const qM = /^[A-Za-z_$][\w$]*$/;

        function ZR(WW) {
          if (Array.isArray(WW)) return `[${WW.map(ZR).join(", ")}]`;
          if (WW && "object" === typeof WW) {
            const RW = Object.entries(WW).map((WW => {
              let [RW, MW] = WW;
              return `${qM.test(RW)?RW:JSON.stringify(RW)}: ${ZR(MW)}`
            }));
            return 0 === RW.length ? "{}" : `{ ${RW.join(", ")} }`
          }
          return JSON.stringify(WW)
        }

        function SR(WW) {
          const RW = WW.map(ZR),
            MW = `[${RW.join(", ")}]`;
          return MW.length <= 60 ? MW : `[\n${RW.map((WW=>`    ${WW},`)).join("\n")}\n]`
        }
        const WM = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function RM(WW) {
          let RW = "";
          for (let CW = 0; CW < WW.length; CW++) {
            const zR = WW[CW];
            if ("\\" === zR) {
              var MW;
              const wW = null !== (MW = WW[CW + 1]) && void 0 !== MW ? MW : "";
              RW += "'" === wW ? "'" : zR + wW, CW++
            } else if ('"' === zR) RW += '\\"';
            else {
              var wW;
              RW += null !== (wW = WM[zR]) && void 0 !== wW ? wW : zR
            }
          }
          return `"${RW}"`
        }

        function MM(WW) {
          if ("string" === typeof WW) return !0;
          if (!WW || "object" !== typeof WW || Array.isArray(WW)) return !1;
          const RW = WW;
          return "ProgressBar" === RW.type ? "number" === typeof RW.progress : "StyledKeyBinding" === RW.type ? VR.j.includes(RW.action) : "string" === typeof RW.icon || "string" === typeof RW.str || "string" === typeof RW.entityName || "string" === typeof RW.translationKey
        }

        function wM(WW) {
          let RW;
          try {
            RW = function(WW) {
              let RW = "",
                MW = "",
                wW = 0;
              const CW = () => {
                RW += MW.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), MW = ""
              };
              for (; wW < WW.length;) {
                const zR = WW.slice(wW).search(/["'`]|\/\//);
                if (-1 === zR) {
                  MW += WW.slice(wW);
                  break
                }
                MW += WW.slice(wW, wW + zR);
                const AW = wW + zR,
                  bR = WW[AW];
                if ("/" === bR) {
                  const RW = WW.indexOf("\n", AW);
                  wW = -1 === RW ? WW.length : RW;
                  continue
                }
                if (CW(), "`" === bR) throw new Error("Use quotes rather than template strings.");
                let yR = AW + 1;
                for (; yR < WW.length && WW[yR] !== bR;) yR += "\\" === WW[yR] ? 2 : 1;
                if (yR >= WW.length) throw new Error("A string is missing its closing quote.");
                const NW = WW.slice(AW + 1, yR);
                RW += RM(NW), wW = yR + 1
              }
              return CW(), JSON.parse(RW)
            }(WW.trim())
          } catch (wW) {
            return {
              parts: null,
              error: wW instanceof SyntaxError ? "This isn't a valid array yet." : wW.message
            }
          }
          if (!Array.isArray(RW)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const MW = RW.findIndex((WW => !MM(WW)));
          return -1 !== MW ? {
            parts: null,
            error: `Part ${MW+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: RW,
            error: null
          }
        }
        const CM = 1 / sR.c.clientTicksPerSecond,
          zw = 700,
          AM = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          bw = {
            progressBar: UR.progressBar.o_,
            timedClick: UR.timedClick.icon,
            gravityBar: UR.gravityBar.icon,
            precisionBar: UR.precisionBar.icon,
            rhythmClick: UR.rhythmClick.icon
          };

        function yw(WW) {
          let {
            type: RW
          } = WW;
          const [MW, CW] = (0, wW.useState)("ready"), [AW, bR] = (0, wW.useState)(1), [yR, NW] = (0, wW.useState)(!0), eW = (0, wW.useRef)(null), BW = (0, wW.useRef)(null), tR = (0, wW.useRef)(null), TW = (0, wW.useRef)(new Set), iR = (0, wW.useRef)(!1), JW = bw[RW], PW = (0, wW.useMemo)((() => ({
            getState: () => {
              var WW, RW;
              return null !== (WW = null === (RW = tR.current) || void 0 === RW ? void 0 : RW.getState()) && void 0 !== WW ? WW : AM
            },
            onFrame: WW => (TW.current.add(WW), () => {
              TW.current.delete(WW)
            })
          })), []);
          (0, wW.useEffect)((() => {
            const WW = eW.current,
              RW = BW.current;
            if (!WW || !RW) return;
            const MW = new ResizeObserver((() => {
              bR(WW.clientWidth / Math.max(1, RW.offsetWidth))
            }));
            return MW.observe(WW), () => {
              MW.disconnect()
            }
          }), []), (0, wW.useEffect)((() => {
            var WW;
            if ("playing" !== MW) return;
            let wW = !1;
            const zR = new hR.g[RW](UR[RW], (WW => {
              wW = !0, NW(!1), CW(WW ? "succeeded" : "failed")
            }), (() => {}));
            tR.current = zR;
            let AW = 0,
              bR = performance.now(),
              yR = requestAnimationFrame((function WW(RW) {
                for (AW += Math.min(.25, (RW - bR) / 1e3), bR = RW; AW >= CM && !wW;) AW -= CM, zR.handleTick(CM);
                for (const MW of TW.current) MW();
                wW || (yR = requestAnimationFrame(WW))
              }));
            return null === (WW = eW.current) || void 0 === WW || WW.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(yR), zR.tearDown(), tR.current = null, iR.current = !1
            }
          }), [MW, RW]), (0, wW.useEffect)((() => {
            if (yR) return;
            const WW = setTimeout((() => {
              NW(!0)
            }), zw);
            return () => {
              clearTimeout(WW)
            }
          }), [yR]);
          const IW = WW => {
            var RW;
            "playing" === MW && iR.current !== WW && (iR.current = WW, null === (RW = tR.current) || void 0 === RW || RW.handleMouseInput(WW))
          };
          return (0, gR.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, gR.jsxs)("div", {
              ref: eW,
              className: zR()("DocsQteStage", {
                Playing: "playing" === MW
              }),
              tabIndex: "playing" === MW ? 0 : -1,
              role: "playing" === MW ? "button" : void 0,
              "aria-label": "playing" === MW ? `${RW} quick time event: click or press Space` : void 0,
              onPointerDown: WW => {
                0 === WW.button && IW(!0)
              },
              onPointerUp: () => {
                IW(!1)
              },
              onPointerLeave: () => {
                IW(!1)
              },
              onPointerCancel: () => {
                IW(!1)
              },
              onKeyDown: WW => {
                "playing" !== MW || " " !== WW.key && "Enter" !== WW.key || (WW.preventDefault(), IW(!0))
              },
              onKeyUp: WW => {
                "playing" !== MW || " " !== WW.key && "Enter" !== WW.key || IW(!1)
              },
              children: [(0, gR.jsx)("div", {
                ref: BW,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${AW})`
                },
                children: "playing" === MW && (0, gR.jsx)(pR.b.Provider, {
                  value: PW,
                  children: (0, gR.jsx)(dR.d, {
                    qte: {
                      type: RW,
                      parameters: UR[RW]
                    }
                  })
                })
              }), "playing" !== MW && (0, gR.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== MW && (0, gR.jsxs)("div", {
                  className: zR()("DocsQteResult", "succeeded" === MW ? "Succeeded" : "Failed"),
                  children: [(0, gR.jsx)(YW, {
                    name: "succeeded" === MW ? "check" : "cross",
                    isTinted: !0
                  }), (0, gR.jsx)("span", {
                    children: "succeeded" === MW ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, gR.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !yR,
                  onClick: () => {
                    CW("playing")
                  },
                  children: [(0, gR.jsx)(YW, {
                    name: "ready" === MW ? "play" : "replay"
                  }), (0, gR.jsx)("span", {
                    children: "ready" === MW ? `Try ${RW}` : "Play again"
                  })]
                })]
              })]
            }), JW && !mM(JW) && (0, gR.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, gR.jsx)("code", {
                children: JW
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function NM(WW) {
          let {
            level: RW,
            text: MW,
            anchor: wW,
            className: CW
          } = WW;
          const AW = `h${Math.min(RW,6)}`;
          return (0, gR.jsxs)(AW, {
                id: wW,
                className: zR()("DocsHeading", CW),
                children: [(0, gR.jsx)(FR, {
                      text: MW
                    }), (0, gR.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${wW}`,
                        "aria-label": `Link to ${MW.replace(/`/g,"")}`,children:"#"})]})}function eM(WW){let{items:RW,ordered:MW}=WW;const wW=MW?"ol":"ul";return(0,gR.jsx)(wW,{className:"DocsList",children:RW.map(((WW,RW)=>(0,gR.jsxs)("li",{children:[(0,gR.jsx)(FR,{text:WW.text}),WW.children.length>0&&(0,gR.jsx)(eM,{items:WW.children,ordered:MW})]},RW)))})}function BM(WW){const RW=WW[0],MW="paragraph"===(null===RW||void 0===RW?void 0:RW.kind)?RW.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(MW)?"warning":/^\*\*(tip|prefer)/.test(MW)?"tip":"note"}function tw(WW){let{block:RW}=WW;switch(RW.kind){case"heading":return(0,gR.jsx)(NM,{level:RW.level,text:RW.text,anchor:RW.anchor});case"paragraph":return(0,gR.jsx)("p",{children:(0,gR.jsx)(FR,{text:RW.text})});case"code":{const WW="ts"===RW.lang?function(WW){const RW=WW.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return RW&&Object.hasOwn(UR,RW[1])?RW[1]:null}(RW.code):null;return(0,gR.jsxs)(gR.Fragment,{children:[(0,gR.jsx)(fW,{code:RW.code,lang:RW.lang}),WW&&(0,gR.jsx)(yw,{type:WW})]})}case"table":return(0,gR.jsx)("div",{className:"DocsTableScroll",children:(0,gR.jsxs)("table",{className:"DocsTable",children:[(0,gR.jsx)("thead",{children:(0,gR.jsx)("tr",{children:RW.header.map(((WW,RW)=>(0,gR.jsx)("th",{children:(0,gR.jsx)(FR,{text:WW})},RW)))})}),(0,gR.jsx)("tbody",{children:RW.rows.map(((WW,RW)=>(0,gR.jsx)("tr",{children:WW.map(((WW,RW)=>(0,gR.jsx)("td",{children:(0,gR.jsx)(FR,{text:WW})},RW)))},RW)))})]})});case"list":return(0,gR.jsx)(eM,{items:RW.items,ordered:RW.ordered});case"quote":return(0,gR.jsx)("aside",{className:zR()("DocsCallout",BM(RW.blocks)),children:(0,gR.jsx)(TM,{blocks:RW.blocks})});case"rule":return(0,gR.jsx)("hr",{className:"DocsRule"})}}function TM(WW){let{blocks:RW}=WW;return(0,gR.jsx)(gR.Fragment,{children:RW.map(((WW,RW)=>(0,gR.jsx)(tw,{block:WW},RW)))})}var gw=MW(3718),iw=MW(3724);function YM(WW){return"blocks"===WW||"items"===WW}const JM=new Map;function PM(WW){let RW=JM.get(WW);return RW||(RW=function(WW){const RW={entries:[],legend:[],notes:[],examples:[]};let MW=!1;for(const zR of WW.split(/\r?\n/).slice(1)){if(zR.startsWith("#")){const WW=zR.replace(/^# ?/,""),wW=WW.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);wW?RW.legend.push({code:wW[1],meaning:wW[2],usage:wW[3].trim()}):/^Examples:/.test(WW.trim())?MW=!0:MW&&WW.trim()?RW.examples.push(WW.trim()):WW.trim()&&!/^\s/.test(WW)&&RW.notes.push(WW.trim());continue}const WW=zR.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var wW,CW;WW&&RW.entries.push({name:WW[1],variants:null!==(wW=null===(CW=WW[2])||void 0===CW?void 0:CW.split(","))&&void 0!==wW?wW:[]})}return RW}("blocks"===WW?gw:iw),JM.set(WW,RW)),RW}function IM(WW){let{className:RW,value:MW,placeholder:wW,label:CW,onChange:zR,count:AW,children:bR}=WW;return(0,gR.jsxs)("div",{className:RW,children:[(0,gR.jsx)(YW,{name:"magnifying-glass"}),(0,gR.jsx)("input",{type:"search",value:MW,placeholder:wW,"aria-label":CW,onChange:WW=>{zR(WW.target.value)}}),bR,AW&&(0,gR.jsxs)("span",{className:"DocsFilterCount",children:[AW.visible," of ",AW.total]})]})}var oM=MW(904);function lM(WW){const RW=WW.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return RW?RW[2]:null}function FM(WW){return"paragraph"===WW.kind&&""===WW.text.trim()}function fM(WW){const RW={name:WW.heading.text,description:[],params:[],returns:null};let MW="description";for(const CW of WW.blocks)if(!FM(CW))if("heading"===CW.kind&&/^Parameters:?$/.test(CW.text))MW="params";else if("heading"===CW.kind&&/^Returns:?$/.test(CW.text))MW="returns",RW.returns={type:"",description:[]};else if("params"!==MW||"table"!==CW.kind){if("returns"===MW&&"paragraph"===CW.kind&&""===RW.returns.type){const WW=lM(CW.text);if(null!==WW){RW.returns.type=WW.replaceAll("\\|","|");continue}}"returns"===MW?RW.returns.description.push(CW):RW.description.push(CW)}else for(const[WW,MW,zR]of CW.rows){var wW;RW.params.push({name:WW,type:null!==(wW=lM(MW))&&void 0!==wW?wW:MW,description:null!==zR&&void 0!==zR?zR:""})}return RW}const QM=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function rw(WW){return WW.filter((WW=>!FM(WW)))}const cwW=/^[\w][\w .'&!:()-]*$/,XM=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function jw(WW){var RW;if("code"===WW.kind&&"text"===WW.lang){const RW=WW.code.split("\n").map((WW=>WW.trim())).filter(Boolean);return RW.length>0&&RW.every((WW=>cwW.test(WW)))?RW.map((WW=>({name:WW}))):null}return"paragraph"===WW.kind&&XM.test(WW.text.trim())?[...WW.text.matchAll(/`([ ^ `]+)` / g)].flatMap((WW => WW[1].split(/,\s*/).map((WW => ({
                              name: WW.trim()
                            }))))): "table" === WW.kind && null !== (RW = WW.header[0]) && void 0 !== RW && RW.startsWith("Song") ? WW.rows.map((WW => {
                              let [RW, MW] = WW;
                              return {
                                name: RW.replace(/`/g, ""),
                                caption: MW
                              }
                            })) : null
                          }

                          function kw(WW) {
                            const RW = [];
                            for (const MW of WW) {
                              const WW = jw(MW),
                                wW = RW.at(-1),
                                CW = "table" === MW.kind;
                              WW ? "names" === (null === wW || void 0 === wW ? void 0 : wW.kind) && wW.isSongs === CW ? wW.names.push(...WW) : RW.push({
                                kind: "names",
                                names: WW,
                                isSongs: CW
                              }) : RW.push({
                                kind: "block",
                                block: MW
                              })
                            }
                            return RW
                          }
                          const aw = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function sM(WW, RW) {
                            return `${aw[WW]}-${(0,QW.s)(RW)}`
                          }
                          const dM = new WeakMap;

                          function pM(WW, RW, MW) {
                            let wW = dM.get(RW);
                            if (!wW) {
                              wW = new Map;
                              const MW = new Set;
                              for (const CW of (0, QW.v)(RW)) {
                                const RW = kw(rw(CW.blocks)).map((RW => {
                                  if ("block" === RW.kind) return RW;
                                  return {
                                    kind: "names",
                                    names: RW.names.map((RW => {
                                      var wW, zR;
                                      const AW = sM(WW, RW.name);
                                      let bR = AW;
                                      for (let WW = 2; MW.has(bR); WW++) bR = `${AW}-${WW}`;
                                      return MW.add(bR), {
                                        ...RW,
                                        anchor: bR,
                                        heading: null !== (wW = null === (zR = CW.heading) || void 0 === zR ? void 0 : zR.text) && void 0 !== wW ? wW : ""
                                      }
                                    })),
                                    isSongs: RW.isSongs
                                  }
                                }));
                                wW.set(CW.blocks, RW)
                              }
                              dM.set(RW, wW)
                            }
                            const CW = wW.get(MW);
                            if (!CW) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return CW
                          }
                          const hM = "/textures/docs/skinPreviews",
                            UM = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var EM = MW(3348),
                            VM = MW(3357);

                          function mw(WW) {
                            return Object.hasOwn(EM.d, WW) ? EM.d[WW] : null
                          }
                          const xw = {
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
                            blendMode: VM.f.Standard
                          };

                          function vw(WW, RW, MW) {
                            return RW + (MW - RW) * WW()
                          }

                          function KM(WW, RW, MW) {
                            return WW + (RW - WW) * MW
                          }

                          function uM(WW) {
                            return WW.length > 0 && "timeFraction" in WW[0]
                          }

                          function OM(WW, RW) {
                            if (0 === WW.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!uM(WW.colorGradients)) {
                              const MW = WW.colorGradients,
                                {
                                  color: wW
                                } = MW[Math.floor(RW() * MW.length) % MW.length];
                              return [{
                                at: 0,
                                colour: [wW[0] / 255, wW[1] / 255, wW[2] / 255, 1]
                              }]
                            }
                            return [...WW.colorGradients].sort(((WW, RW) => WW.timeFraction - RW.timeFraction)).map((WW => {
                              var MW, wW, CW;
                              const zR = WW.minColor,
                                AW = null !== (MW = WW.maxColor) && void 0 !== MW ? MW : zR,
                                bR = RW(),
                                yR = [KM(zR[0], AW[0], bR) / 255, KM(zR[1], AW[1], bR) / 255, KM(zR[2], AW[2], bR) / 255, KM(null !== (wW = zR[3]) && void 0 !== wW ? wW : 1, null !== (CW = AW[3]) && void 0 !== CW ? CW : 1, bR)];
                              return {
                                at: WW.timeFraction,
                                colour: yR
                              }
                            }))
                          }

                          function nM(WW, RW, MW, wW) {
                            const CW = vw(wW, WW.minEmitPower, WW.maxEmitPower),
                              zR = RW => vw(wW, Math.min(WW.dir1[RW], WW.dir2[RW]), Math.max(WW.dir1[RW], WW.dir2[RW])) * CW,
                              AW = [...WW.velocityGradients].sort(((WW, RW) => WW.timeFraction - RW.timeFraction)).map((WW => ({
                                at: WW.timeFraction,
                                factor: vw(wW, WW.factor, WW.factor2)
                              })));
                            return {
                              pos: [vw(wW, RW[0], MW[0]), vw(wW, RW[1], MW[1]), vw(wW, RW[2], MW[2])],
                              dir: [zR(0), zR(1), zR(2)],
                              age: 0,
                              life: vw(wW, WW.minLifeTime, WW.maxLifeTime),
                              size: vw(wW, WW.minSize, WW.maxSize),
                              colours: OM(WW, wW),
                              velocityFactors: AW
                            }
                          }

                          function GM(WW, RW, MW, wW) {
                            if (RW < WW[0].at) return MW(Math.min(1, WW.length - 1));
                            for (let CW = 0; CW < WW.length - 1; CW++)
                              if (RW <= WW[CW + 1].at) {
                                const zR = WW[CW + 1].at - WW[CW].at;
                                return wW(MW(CW), MW(CW + 1), zR > 0 ? (RW - WW[CW].at) / zR : 1)
                              } return MW(WW.length - 1)
                          }

                          function LM(WW) {
                            return GM(WW.colours, WW.age / WW.life, (RW => WW.colours[RW].colour), ((WW, RW, MW) => [KM(WW[0], RW[0], MW), KM(WW[1], RW[1], MW), KM(WW[2], RW[2], MW), KM(WW[3], RW[3], MW)]))
                          }

                          function HM(WW, RW, MW) {
                            if (WW.age += MW, WW.age >= WW.life) return !1;
                            const wW = function(WW) {
                              return 0 === WW.velocityFactors.length ? 1 : GM(WW.velocityFactors, WW.age / WW.life, (RW => WW.velocityFactors[RW].factor), KM)
                            }(WW) * MW;
                            for (let zR = 0; zR < 3; zR++) {
                              var CW;
                              WW.pos[zR] += WW.dir[zR] * wW, WW.dir[zR] += (null !== (CW = RW[zR]) && void 0 !== CW ? CW : 0) * MW
                            }
                            return !0
                          }

                          function DM(WW) {
                            return String(Math.round(1e6 * WW) / 1e6)
                          }

                          function qw(WW) {
                            return `[${WW.map(DM).join(", ")}]`
                          }

                          function ZM(WW, RW) {
                            const MW = `${RW}    `;
                            return `[\n${(uM(WW)?WW.map((WW=>{const RW=[`${MW}    timeFraction: ${DM(WW.timeFraction)},`,`${MW}    minColor: ${qw(WW.minColor)},`];return WW.maxColor&&RW.push(`${MW}    maxColor: ${qw(WW.maxColor)},`),`${MW}{\n${RW.join("\n")}\n${MW}},`})):WW.map((WW=>`
                            $ {
                              MW
                            } {
                              color: $ {
                                qw(WW.color)
                              }
                            }, `))).join("\n")}\n${RW}]`
                          }
                          const SM = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            Ww = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const Rw = .6;

                          function Mw(WW, RW) {
                            return `${RW?"song":"sound"}:${WW}`
                          }
                          let ww = {
                              track: null,
                              volume: Rw
                            },
                            Cw = null,
                            zC = 0,
                            Aw = 0;
                          const bC = new Set;

                          function yC(WW) {
                            ww = {
                              ...ww,
                              ...WW
                            }, bC.forEach((WW => {
                              WW()
                            }))
                          }

                          function Nw(WW) {
                            ww.track && yC({
                              track: {
                                ...ww.track,
                                ...WW
                              }
                            })
                          }

                          function ew(WW) {
                            const [RW, MW] = (0, wW.useState)((() => WW(ww))), CW = (0, wW.useRef)(WW);
                            return CW.current = WW, (0, wW.useEffect)((() => {
                              const WW = () => {
                                MW((() => CW.current(ww)))
                              };
                              return bC.add(WW), WW(), () => {
                                bC.delete(WW)
                              }
                            }), []), RW
                          }

                          function Bw() {
                            zC++;
                            const WW = Cw;
                            Cw = null, null === WW || void 0 === WW || WW.stop()
                          }

                          function tC(WW, RW) {
                            let wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            Bw();
                            const CW = zC,
                              {
                                track: zR
                              } = ww,
                              AW = zR && zR.name === WW && zR.isSong === RW ? zR.duration : 0;
                            Aw = wW, yC({
                              track: {
                                name: WW,
                                isSong: RW,
                                status: "loading",
                                duration: AW
                              }
                            }), Promise.all([MW.e(195), MW.e(219)]).then((() => MW(37398))).then((MW => {
                              let {
                                playDocsSound: zR
                              } = MW;
                              CW === zC && (Cw = zR(WW, RW, ww.volume, wW, {
                                onPlay: WW => {
                                  CW === zC && Nw({
                                    status: "playing",
                                    duration: WW
                                  })
                                },
                                onEnd: WW => {
                                  var RW, MW;
                                  CW === zC && (Cw = null, WW ? yC({
                                    track: null
                                  }) : (Aw = null !== (RW = null === (MW = ww.track) || void 0 === MW ? void 0 : MW.duration) && void 0 !== RW ? RW : 0, Nw({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((RW => {
                              console.error(`Could not play docs sound ${WW}`, RW), CW === zC && yC({
                                track: null
                              })
                            }))
                          }

                          function Tw() {
                            const {
                              track: WW
                            } = ww;
                            if (!WW) return;
                            if ("playing" === WW.status && Cw) return Aw = Cw.yX(), Cw.pause(), void Nw({
                              status: "paused"
                            });
                            if ("loading" === WW.status) return Bw(), void Nw({
                              status: "paused"
                            });
                            if (Cw) return void Cw.resume();
                            const RW = WW.duration > 0 && Aw >= WW.duration - .05;
                            tC(WW.name, WW.isSong, RW ? 0 : Aw)
                          }

                          function gC() {
                            var WW;
                            return Cw && "playing" === (null === (WW = ww.track) || void 0 === WW ? void 0 : WW.status) ? Cw.yX() : Aw
                          }

                          function iC(WW) {
                            var RW;
                            null === (RW = Cw) || void 0 === RW || RW.setVolume(WW), yC({
                              volume: WW
                            })
                          }

                          function Yw() {
                            Bw(), Aw = 0, yC({
                              track: null
                            })
                          }
                          const Jw = (0, wW.createContext)(null);
                          let Pw = null;

                          function Iw() {
                            const [WW, RW] = (0, wW.useState)(null);
                            return (0, wW.useEffect)((() => {
                              let WW = !1;
                              return Pw ??= Promise.all([MW.e(59), MW.e(62), MW.e(60), MW.e(61), MW.e(178), MW.e(81), MW.e(200)]).then((() => MW(37393))), Pw.then((MW => {
                                WW || RW(MW)
                              }), (WW => {
                                console.error("Could not load the docs gallery's textures", WW), Pw = null
                              })), () => {
                                WW = !0
                              }
                            }), []), WW
                          }
                          const ow = 24,
                            lw = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function Fw(WW, RW) {
                            const MW = "skins" === WW ? function(WW, RW) {
                              const MW = UM.find((RW => WW.startsWith(RW.heading)));
                              return MW ? function(WW, RW) {
                                return `${WW}-${RW}`
                              }(MW.prefix, RW) : null
                            }(RW.heading, RW.name) : null;
                            return null === MW ? null : `${hM}/${MW}.webp`
                          }

                          function fw(WW) {
                            let {
                              kind: RW,
                              entry: MW,
                              assets: CW,
                              renderedUrl: AW
                            } = WW;
                            const {
                              name: bR
                            } = MW, [yR, NW] = (0, wW.useState)(!1);
                            if ("icons" === RW && mM(bR)) return (0, gR.jsx)(oM.e, {
                              className: "DocsTileIcon",
                              name: bR
                            });
                            let eW = null;
                            var BW;
                            if ("icons" === RW) eW = null !== (BW = null === CW || void 0 === CW ? void 0 : CW.getIngameIconUrl(bR)) && void 0 !== BW ? BW : null;
                            else if ("particles" === RW) {
                              var tR, TW, iR;
                              eW = null !== (tR = null === CW || void 0 === CW ? void 0 : CW.getParticleTextureUrl(null !== (TW = null === (iR = mw(bR)) || void 0 === iR ? void 0 : iR.texture) && void 0 !== TW ? TW : bR)) && void 0 !== tR ? tR : null
                            } else "skins" === RW && (eW = null !== AW && void 0 !== AW ? AW : lw.test(bR) ? `/textures/charSkins/previews/${bR}_preview.png` : null);
                            return !eW || yR ? (0, gR.jsx)(YW, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === RW ? "person" : "image"
                            }) : (0, gR.jsx)("img", {
                              className: zR()("DocsTileImage", {
                                Pixelated: "skins" !== RW
                              }),
                              src: eW,
                              srcSet: eW === AW ? `${eW} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${eW}`), NW(!0)
                              }
                            })
                          }

                          function Qw(WW) {
                            let {
                              entry: RW,
                              isSong: MW
                            } = WW;
                            const wW = ew((WW => {
                                let {
                                  track: wW
                                } = WW;
                                return (null === wW || void 0 === wW ? void 0 : wW.name) === RW.name && wW.isSong === MW ? wW.status : null
                              })),
                              CW = null !== wW && "paused" !== wW;
                            return (0, gR.jsxs)("button", {
                              type: "button",
                              id: RW.anchor,
                              className: zR()("DocsSoundTile", {
                                Playing: CW
                              }),
                              "data-docs-track": Mw(RW.name, MW),
                              "aria-label": CW ? `Pause ${RW.name}` : `Play ${RW.name}`,
                              onClick: () => {
                                null !== wW ? Tw() : tC(RW.name, MW)
                              },
                              children: [(0, gR.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, gR.jsx)(YW, {
                                  name: CW ? "pause" : "play"
                                })
                              }), (0, gR.jsx)("code", {
                                className: "DocsSoundName",
                                children: RW.name
                              }), RW.caption && (0, gR.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: RW.caption
                              })]
                            })
                          }

                          function rC(WW) {
                            let {
                              kind: RW,
                              names: MW,
                              isSongs: CW
                            } = WW;
                            const AW = Iw(),
                              [bR, yR] = PW(),
                              NW = !1 === (null === bR || void 0 === bR ? void 0 : bR.failed) ? bR.text : null,
                              eW = (0, wW.useContext)(Jw),
                              [BW, tR] = (0, wW.useState)(""),
                              TW = BW.trim().toLowerCase(),
                              iR = TW ? MW.filter((WW => WW.name.toLowerCase().includes(TW))) : MW;
                            return (0, gR.jsxs)("div", {
                              className: "DocsGallery",
                              children: [MW.length > ow && (0, gR.jsx)(IM, {
                                className: "DocsGalleryFilter",
                                value: BW,
                                placeholder: `Filter ${MW.length} names\u2026`,
                                label: "Filter names",
                                onChange: tR,
                                count: TW ? {
                                  visible: iR.length,
                                  total: MW.length
                                } : null
                              }), (0, gR.jsx)("div", {
                                className: zR()("DocsGalleryGrid", `Kind-${RW}`, {
                                  Songs: CW
                                }),
                                children: iR.map((WW => {
                                  if ("sounds" === RW) return (0, gR.jsx)(Qw, {
                                    entry: WW,
                                    isSong: CW
                                  }, WW.anchor);
                                  if (eW && "particles" === RW && mw(WW.name)) return (0, gR.jsxs)("button", {
                                    type: "button",
                                    id: WW.anchor,
                                    className: zR()("DocsTile Previewable", {
                                      Copied: NW === WW.name
                                    }),
                                    title: `Play "${WW.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      eW(WW.name), yR(WW.name)
                                    },
                                    children: [(0, gR.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, gR.jsx)(fw, {
                                        kind: RW,
                                        entry: WW,
                                        assets: AW,
                                        renderedUrl: null
                                      }), (0, gR.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, gR.jsx)(YW, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, gR.jsx)("span", {
                                      className: "DocsTileName",
                                      children: NW === WW.name ? "Copied!" : WW.name
                                    })]
                                  }, WW.anchor);
                                  const MW = Fw(RW, WW);
                                  return (0, gR.jsxs)("button", {
                                    type: "button",
                                    id: WW.anchor,
                                    className: zR()("DocsTile", {
                                      Copied: NW === WW.name
                                    }),
                                    title: `Copy "${WW.name}"`,
                                    onClick: () => {
                                      yR(WW.name)
                                    },
                                    children: [(0, gR.jsx)("span", {
                                      className: zR()("DocsTilePreview", {
                                        Rendered: null !== MW
                                      }),
                                      children: (0, gR.jsx)(fw, {
                                        kind: RW,
                                        entry: WW,
                                        assets: AW,
                                        renderedUrl: MW
                                      })
                                    }), (0, gR.jsx)("span", {
                                      className: "DocsTileName",
                                      children: NW === WW.name ? "Copied!" : WW.name
                                    })]
                                  }, WW.anchor)
                                }))
                              })]
                            })
                          }

                          function cC(WW) {
                            let {
                              kind: RW,
                              content: MW,
                              blocks: wW
                            } = WW;
                            return (0, gR.jsx)(gR.Fragment, {
                              children: pM(RW, MW, wW).map(((WW, MW) => "block" === WW.kind ? (0, gR.jsx)(tw, {
                                block: WW.block
                              }, MW) : (0, gR.jsx)(rC, {
                                kind: RW,
                                names: WW.names,
                                isSongs: WW.isSongs
                              }, MW)))
                            })
                          }
                          const Xw = [{
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

                          function jC(WW) {
                            let {
                              cards: RW = Xw,
                              label: MW = "Start here"
                            } = WW;
                            const CW = (0, wW.useContext)(TR);
                            return (0, gR.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": MW,
                              children: RW.map((WW => {
                                let {
                                  pageId: RW,
                                  countNoun: MW
                                } = WW;
                                const wW = VW(RW);
                                return (0, gR.jsxs)(AW.e, {
                                  to: OW(CW, wW),
                                  className: "DocsLandingCard",
                                  children: [(0, gR.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, gR.jsx)(YW, {
                                      name: wW.icon
                                    })
                                  }), (0, gR.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: wW.title
                                  }), (0, gR.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: wW.summary
                                  }), MW && (0, gR.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [xR(wW).sections.length, " ", MW]
                                  })]
                                }, RW)
                              }))
                            })
                          }
                          const kC = 240;

                          function aC(WW) {
                            let {
                              faces: RW
                            } = WW;
                            return (0, gR.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, gR.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${RW.top}")`
                                }
                              }), (0, gR.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${RW.left}")`
                                }
                              }), (0, gR.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${RW.right}")`
                                }
                              })]
                            })
                          }

                          function sw(WW) {
                            let {
                              src: RW
                            } = WW;
                            const [MW, CW] = (0, wW.useState)(!1);
                            return MW ? null : (0, gR.jsx)("img", {
                              src: RW,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${RW}`), CW(!0)
                              }
                            })
                          }

                          function dw(WW) {
                            let {
                              kind: RW
                            } = WW;
                            const MW = PM(RW),
                              CW = Iw(),
                              AW = (0, bR.s)(),
                              [yR, NW] = (0, wW.useState)(""),
                              [eW, BW] = (0, wW.useState)(null),
                              [tR, TW] = (0, wW.useState)(kC),
                              [iR, JW] = (0, wW.useState)(null),
                              PW = (0, wW.useRef)(null),
                              oW = yR.trim().toLowerCase();
                            (0, wW.useEffect)((() => {
                              const WW = (0, QW.q)(AW.hash),
                                wW = MW.entries.find((MW => sM(RW, MW.name) === WW));
                              if (wW) PW.current = wW.name, NW(wW.name), BW(null), JW(wW.name);
                              else if (null !== PW.current) {
                                const WW = PW.current;
                                PW.current = null, NW((RW => RW === WW ? "" : RW)), JW(null)
                              }
                            }), [MW, RW, AW.hash, AW.key]), (0, wW.useEffect)((() => {
                              var WW;
                              null !== iR && (null === (WW = document.getElementById(sM(RW, iR))) || void 0 === WW || WW.scrollIntoView({
                                block: "center"
                              }))
                            }), [RW, iR]);
                            const lW = MW.entries.filter((WW => (!oW || WW.name.toLowerCase().includes(oW)) && (!eW || WW.variants.includes(eW))));
                            return (0, gR.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [MW.notes.length > 0 && (0, gR.jsx)("div", {
                                className: "DocsProse",
                                children: MW.notes.map((WW => (0, gR.jsx)("p", {
                                  children: WW
                                }, WW)))
                              }), MW.legend.length > 0 && (0, gR.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, gR.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, gR.jsx)("thead", {
                                    children: (0, gR.jsxs)("tr", {
                                      children: [(0, gR.jsx)("th", {
                                        children: "Code"
                                      }), (0, gR.jsx)("th", {
                                        children: "Variant"
                                      }), (0, gR.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, gR.jsx)("tbody", {
                                    children: MW.legend.map((WW => (0, gR.jsxs)("tr", {
                                      children: [(0, gR.jsx)("td", {
                                        children: (0, gR.jsx)("button", {
                                          type: "button",
                                          className: zR()("DocsVariantChip", {
                                            Active: eW === WW.code
                                          }),
                                          "aria-pressed": eW === WW.code,
                                          title: `Show only ${RW} with ${WW.meaning} variants`,
                                          onClick: () => {
                                            BW(eW === WW.code ? null : WW.code)
                                          },
                                          children: WW.code
                                        })
                                      }), (0, gR.jsx)("td", {
                                        children: WW.meaning
                                      }), (0, gR.jsx)("td", {
                                        children: (0, gR.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: WW.usage
                                        })
                                      })]
                                    }, WW.code)))
                                  })]
                                })
                              }), MW.examples.length > 0 && (0, gR.jsx)(fW, {
                                lang: "text",
                                code: MW.examples.join("\n")
                              }), (0, gR.jsx)(IM, {
                                className: "DocsFilterBar",
                                value: yR,
                                placeholder: `Search ${MW.entries.length} ${RW}\u2026`,
                                label: `Search ${RW}`,
                                onChange: WW => {
                                  NW(WW), TW(kC)
                                },
                                count: oW || eW ? {
                                  visible: lW.length,
                                  total: MW.entries.length
                                } : null,
                                children: eW && (0, gR.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    BW(null)
                                  },
                                  children: [eW, " ", (0, gR.jsx)(YW, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, gR.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: lW.slice(0, tR).map((WW => {
                                  const MW = "blocks" === RW ? null === CW || void 0 === CW ? void 0 : CW.getBlockFaces(WW.name) : null,
                                    wW = CW && !MW ? CW.getItemTextureUrl(WW.name) : null;
                                  return (0, gR.jsxs)("div", {
                                    id: sM(RW, WW.name),
                                    className: zR()("DocsCatalogueTile", {
                                      Linked: WW.name === iR
                                    }),
                                    children: [(0, gR.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [MW && (0, gR.jsx)(aC, {
                                        faces: MW
                                      }), wW && (0, gR.jsx)(sw, {
                                        src: wW
                                      })]
                                    }), (0, gR.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: WW.name
                                    }), WW.variants.length > 0 && (0, gR.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: WW.variants.map((WW => (0, gR.jsx)("span", {
                                        children: WW
                                      }, WW)))
                                    }), (0, gR.jsx)(IW, {
                                      text: WW.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, WW.name)
                                }))
                              }), lW.length > tR && (0, gR.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  TW(lW.length)
                                },
                                children: ["Show all ", lW.length]
                              }), 0 === lW.length && (0, gR.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", RW, " match."]
                              })]
                            })
                          }
                          var pw = MW(3799),
                            hw = MW(1413);
                          const Uw = .95 * pw.c;

                          function Ew(WW) {
                            return /^\s*```/.test(WW)
                          }

                          function Vw(WW, RW) {
                            const MW = [
                              []
                            ];
                            let wW = !1;
                            for (const CW of WW.split("\n")) !wW && RW(CW) && MW.at(-1).length > 0 && MW.push([]), Ew(CW) && (wW = !wW), MW.at(-1).push(CW);
                            return MW.map((WW => WW.join("\n").trim())).filter(Boolean)
                          }

                          function mC(WW, RW) {
                            const MW = `${"#".repeat(RW)} `,
                              wW = [];
                            let CW = !1;
                            for (const zR of WW.split("\n")) Ew(zR) ? CW = !CW : !CW && zR.startsWith(MW) && wW.push(zR.slice(MW.length).trim());
                            return wW
                          }

                          function xC(WW) {
                            return WW.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class vC {
                            constructor(WW, RW) {
                              this.origin = RW, this.pages = void 0, this.partPaths = new Map;
                              const MW = WW.map((WW => {
                                const RW = function(WW, RW) {
                                  const MW = WW.map((WW => RW(WW) + 2)),
                                    wW = MW.reduce(((WW, RW) => WW + RW), 0),
                                    CW = wW / Math.ceil(wW / Uw),
                                    zR = [];
                                  let AW = 0;
                                  return WW.forEach(((WW, RW) => {
                                    const wW = MW[RW];
                                    (0 === zR.length || AW + wW > Uw || AW + wW / 2 > CW) && (zR.push([]), AW = 0), zR.at(-1).push(WW), AW += wW
                                  })), zR
                                }(Vw(xC(WW), (WW => WW.startsWith("## "))).flatMap((WW => {
                                  var RW;
                                  const MW = null !== (RW = mC(WW, 2)[0]) && void 0 !== RW ? RW : "";
                                  if (WW.length <= Uw) return [{
                                    markdown: WW,
                                    section: MW
                                  }];
                                  let wW = !1;
                                  return Vw(WW, (WW => {
                                    const RW = wW && "" !== WW.trim();
                                    return wW = "" === WW.trim(), RW
                                  })).map((WW => ({
                                    markdown: WW,
                                    section: MW
                                  })))
                                })), (RW => this.resolveLinks(WW, RW.markdown).length));
                                return {
                                  page: WW,
                                  groups: RW.length > 1 ? RW : []
                                }
                              }));
                              for (const {
                                  page: wW,
                                  groups: CW
                                }
                                of MW) CW.forEach(((WW, RW) => {
                                const MW = (0, pw.u)(wW.slug, RW);
                                for (const CW of WW.flatMap((WW => [...mC(WW.markdown, 2), ...mC(WW.markdown, 3)]))) {
                                  const WW = `${wW.id}#${(0,QW.s)(CW)}`;
                                  this.partPaths.has(WW) || this.partPaths.set(WW, MW)
                                }
                              }));
                              this.pages = MW.map((WW => {
                                let {
                                  page: RW,
                                  groups: MW
                                } = WW;
                                return {
                                  page: RW,
                                  path: (0, pw.r)(RW.slug),
                                  markdown: `# ${RW.title}\n\n${this.resolveLinks(RW,xC(RW))}\n`,
                                  parts: MW.map(((WW, wW) => this.renderPart(RW, WW, wW, MW.length)))
                                }
                              }))
                            }
                            url(WW) {
                              return `${this.origin}${WW}`
                            }
                            getPage(WW) {
                              return this.pages.find((RW => RW.page.id === WW))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((WW => (WW.parts.length > 0 ? WW.parts : [{
                                path: WW.path,
                                label: "",
                                markdown: WW.markdown
                              }]).filter((WW => WW.markdown.length > pw.c))))
                            }
                            markdownUrl(WW, RW) {
                              const MW = RW && this.partPaths.get(`${WW.id}#${RW}`) || (0, pw.r)(WW.slug);
                              return this.url(RW ? `${MW}#${RW}` : MW)
                            }
                            resolveLinks(WW, RW) {
                              return RW.replace(/\]\((#[^)]+)\)/g, ((RW, MW) => {
                                var wW;
                                const CW = null !== (wW = KW(MW)) && void 0 !== wW ? wW : this.samePageTarget(WW, MW);
                                return CW ? `](${this.markdownUrl(CW.page,CW.anchor)})` : RW
                              }))
                            }
                            samePageTarget(WW, RW) {
                              const MW = (0, QW.s)(RW.slice(1));
                              return vR(WW, MW) ? {
                                page: WW,
                                anchor: MW
                              } : null
                            }
                            renderPart(WW, RW, MW, wW) {
                              const CW = function(WW) {
                                  const RW = WW.map((WW => WW.section)).filter(Boolean);
                                  if (0 === RW.length) return "";
                                  const MW = RW[0],
                                    wW = RW.at(-1);
                                  return MW === wW ? MW : `${MW} to ${wW}`
                                }(RW),
                                zR = RW.map((WW => WW.markdown)).join("\n\n"),
                                AW = CW ? `It covers ${CW}. ` : "",
                                bR = `Part ${MW+1} of ${wW} of [${WW.title}](${this.url((0,pw.r)(WW.slug))}). ${AW}[llms.txt](${this.url(pw.h)}) lists every part.`;
                              return {
                                path: (0, pw.u)(WW.slug, MW),
                                label: CW,
                                markdown: `# ${WW.title}, part ${MW+1} of ${wW}\n\n${bR}\n\n${this.resolveLinks(WW,zR)}\n`
                              }
                            }
                            llmsTxt(WW) {
                              const RW = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${Kw(pw.c)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const MW of EW) {
                                RW.push("", `## ${MW.title}`, "");
                                for (const WW of MW.pageIds) {
                                  const MW = this.getPage(WW),
                                    {
                                      page: wW,
                                      parts: CW
                                    } = MW,
                                    zR = `About ${Kw(MW.markdown.length)} tokens${CW.length>0?`, in ${CW.length} parts:`:"."}`;
                                  RW.push(`- [${wW.title}](${this.url(MW.path)}): ${wW.summary} ${zR}`), CW.forEach(((WW, MW) => {
                                    RW.push(`  - [Part ${MW+1}${WW.label?`: ${WW.label}`:""}](${this.url(WW.path)})`)
                                  }))
                                }
                              }
                              return RW.push("", "## Optional", "", `- [Every page in one file](${this.url(pw.d)}): About ${Kw(WW.length)} tokens, for a model with a large context window.`, ""), RW.join("\n")
                            }
                            llmsFullTxt() {
                              return EW.flatMap((WW => WW.pageIds.map((WW => this.getPage(WW).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const WW = this.llmsFullTxt(),
                                RW = this.llmsTxt(WW),
                                MW = new Map([
                                  [pw.m, RW],
                                  [pw.h, RW],
                                  [pw.d, WW]
                                ]);
                              for (const wW of this.pages) {
                                MW.set(wW.path, wW.markdown);
                                for (const WW of wW.parts) MW.set(WW.path, WW.markdown)
                              }
                              return MW
                            }
                          }

                          function Kw(WW) {
                            return `${Math.max(1,Math.round(WW/4e3))}K`
                          }
                          let uw = null;

                          function Ow() {
                            return uw ??= new vC(UW, hw.c), uw
                          }
                          const nw = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function Gw(WW) {
                            return Ow().getPage(WW.id).parts.length > 0 ? `Read ${pw.i}, then the parts of the Bloxd Code API's ${WW.title} page it lists, so I can ask questions about it.` : `Read ${hw.c}${(0,pw.r)(WW.slug)} so I can ask questions about it. ${pw.i} lists every page of the Bloxd Code API docs.`
                          }

                          function Lw(WW) {
                            let {
                              page: RW
                            } = WW;
                            const [MW, wW] = PW();
                            return (0, gR.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, gR.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  wW(Ow().getPage(RW.id).markdown)
                                },
                                children: [(0, gR.jsx)(YW, {
                                  name: !1 === (null === MW || void 0 === MW ? void 0 : MW.failed) ? "check" : "copy"
                                }), (0, gR.jsx)("span", {
                                  children: MW ? MW.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), nw.map((WW => (0, gR.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${WW.url}${encodeURIComponent(Gw(RW))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, gR.jsx)(YW, {
                                  name: "external-link"
                                }), (0, gR.jsxs)("span", {
                                  children: ["Open in ", WW.name]
                                })]
                              }, WW.name)))]
                            })
                          }

                          function Hw(WW) {
                            return `#${[0,1,2].map((RW=>Math.round(Math.min(255,Math.max(0,WW[RW]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function Dw(WW) {
                            return [parseInt(WW.slice(1, 3), 16), parseInt(WW.slice(3, 5), 16), parseInt(WW.slice(5, 7), 16)]
                          }

                          function qC(WW) {
                            let {
                              label: RW,
                              min: MW,
                              max: wW,
                              step: CW,
                              low: zR,
                              high: AW,
                              onChange: bR
                            } = WW;
                            return (0, gR.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, gR.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, gR.jsx)("span", {
                                  children: RW
                                }), (0, gR.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: zR === AW ? zR : `${zR}\u2013${AW}`
                                })]
                              }), (0, gR.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, gR.jsx)("input", {
                                  type: "range",
                                  min: MW,
                                  max: wW,
                                  step: CW,
                                  value: Math.min(wW, zR),
                                  "aria-label": `Minimum ${RW.toLowerCase()}`,
                                  onChange: WW => {
                                    const RW = Number(WW.target.value);
                                    bR(RW, Math.max(RW, AW))
                                  }
                                }), (0, gR.jsx)("input", {
                                  type: "range",
                                  min: MW,
                                  max: wW,
                                  step: CW,
                                  value: Math.min(wW, AW),
                                  "aria-label": `Maximum ${RW.toLowerCase()}`,
                                  onChange: WW => {
                                    const RW = Number(WW.target.value);
                                    bR(Math.min(RW, zR), RW)
                                  }
                                })]
                              })]
                            })
                          }

                          function Zw(WW) {
                            let {
                              label: RW,
                              min: MW,
                              max: wW,
                              step: CW,
                              value: zR,
                              onChange: AW,
                              format: bR = String
                            } = WW;
                            return (0, gR.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, gR.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, gR.jsx)("span", {
                                  children: RW
                                }), (0, gR.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: bR(zR)
                                })]
                              }), (0, gR.jsx)("input", {
                                type: "range",
                                min: MW,
                                max: wW,
                                step: CW,
                                value: Math.min(wW, Math.max(MW, zR)),
                                "aria-label": RW,
                                onChange: WW => {
                                  AW(Number(WW.target.value))
                                }
                              })]
                            })
                          }

                          function Sw(WW) {
                            let {
                              opts: RW,
                              onChange: MW
                            } = WW;
                            const wW = RW.colorGradients;
                            if (!uM(wW)) return (0, gR.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, gR.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, gR.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, gR.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: wW.map(((WW, RW) => (0, gR.jsx)("input", {
                                  type: "color",
                                  value: Hw(WW.color),
                                  "aria-label": `Colour ${RW+1}`,
                                  onChange: WW => {
                                    const CW = [...wW];
                                    CW[RW] = {
                                      color: Dw(WW.target.value)
                                    }, MW(CW)
                                  }
                                }, RW)))
                              })]
                            });
                            const CW = (WW, RW) => {
                              const CW = [...wW];
                              CW[WW] = RW, MW(CW)
                            };
                            return (0, gR.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, gR.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, gR.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, gR.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), wW.map(((WW, RW) => {
                                var MW;
                                const wW = null !== (MW = WW.maxColor) && void 0 !== MW ? MW : WW.minColor;
                                return (0, gR.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, gR.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * WW.timeFraction), "%"]
                                  }), (0, gR.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${Hw(WW.minColor)}, ${Hw(wW)})`
                                    }
                                  }), (0, gR.jsx)("input", {
                                    type: "color",
                                    value: Hw(WW.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*WW.timeFraction)}%`,
                                    onChange: MW => {
                                      CW(RW, {
                                        ...WW,
                                        minColor: [...Dw(MW.target.value), WW.minColor[3]]
                                      })
                                    }
                                  }), (0, gR.jsx)("input", {
                                    type: "color",
                                    value: Hw(wW),
                                    "aria-label": `Maximum colour at ${Math.round(100*WW.timeFraction)}%`,
                                    onChange: MW => {
                                      CW(RW, {
                                        ...WW,
                                        maxColor: [...Dw(MW.target.value), wW[3]]
                                      })
                                    }
                                  })]
                                }, RW)
                              }))]
                            })
                          }
                          const WC = [-.5, -.5, -.5],
                            RC = [.5, .5, .5],
                            MC = [0, 1, 2, 3, 4, 5, 6, 7].map((WW => [1 & WW ? RC[0] : WC[0], 2 & WW ? RC[1] : WC[1], 4 & WW ? RC[2] : WC[2]]));class wC {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(WW, RW, MW, wW) {
                              const CW = Math.round(31 * RW),
                                zR = Math.round(31 * MW),
                                AW = Math.round(31 * wW),
                                bR = `${CW}|${zR}|${AW}`;
                              let yR = this.tints.get(WW);
                              (!yR || yR.size > 2e3) && (yR = new Map, this.tints.set(WW, yR));
                              let NW = yR.get(bR);
                              if (NW) return NW;
                              NW = document.createElement("canvas"), NW.width = WW.naturalWidth || 16, NW.height = WW.naturalHeight || 16;
                              const eW = NW.getContext("2d");
                              return eW ? (eW.imageSmoothingEnabled = !1, eW.drawImage(WW, 0, 0, NW.width, NW.height), eW.globalCompositeOperation = "multiply", eW.fillStyle = `rgb(${CW/31*255}, ${zR/31*255}, ${AW/31*255})`, eW.fillRect(0, 0, NW.width, NW.height), eW.globalCompositeOperation = "destination-in", eW.drawImage(WW, 0, 0, NW.width, NW.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), yR.set(bR, NW), NW
                            }
                          }

                          function CC(WW) {
                            let {
                              opts: RW,
                              textureUrl: MW,
                              burst: CW,
                              paused: zR
                            } = WW;
                            const AW = (0, wW.useRef)(null),
                              bR = (0, wW.useRef)(RW);
                            bR.current = RW;
                            const yR = (0, wW.useRef)(zR);
                            yR.current = zR;
                            const NW = (0, wW.useRef)(null),
                              eW = (0, wW.useRef)(null),
                              BW = (0, wW.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(WW) {
                                let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const MW = [-.5, -.5, -.5],
                                  wW = [.5, .5, .5];
                                let CW = .5;
                                for (let zR = 0; zR < 40; zR++) {
                                  const zR = nM(WW, MW, wW, RW),
                                    AW = Math.max(zR.life / 30, .001);
                                  for (; HM(zR, WW.gravity, AW);) CW = Math.max(CW, Math.hypot(zR.pos[0], zR.pos[1], zR.pos[2]) + zR.size / 2)
                                }
                                return CW
                              }(RW)))), [RW]),
                              tR = (0, wW.useRef)(BW);
                            return tR.current = BW, (0, wW.useEffect)((() => {
                              if (NW.current = null, !MW) return;
                              const WW = new Image;
                              let RW = !1;
                              return WW.onload = () => {
                                RW || (NW.current = WW)
                              }, WW.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${MW}`)
                              }, WW.src = MW, () => {
                                RW = !0
                              }
                            }), [MW]), (0, wW.useEffect)((() => {
                              var WW;
                              null === (WW = eW.current) || void 0 === WW || WW.call(eW)
                            }), [RW, CW]), (0, wW.useEffect)((() => {
                              const WW = AW.current,
                                RW = null === WW || void 0 === WW ? void 0 : WW.getContext("2d");
                              if (!WW || !RW) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const MW = new wC;
                              let wW = [],
                                CW = 0,
                                zR = -.7,
                                BW = tR.current,
                                TW = performance.now(),
                                gR = 0,
                                iR = !0,
                                YW = null;
                              const JW = () => {
                                const WW = bR.current,
                                  RW = Math.min(400, Math.max(0, Math.ceil(WW.manualEmitCount)));
                                wW = [];
                                for (let MW = 0; MW < RW; MW++) wW.push(nM(WW, WC, RC, Math.random));
                                CW = 0
                              };
                              eW.current = JW, JW();
                              const PW = AW => {
                                gR = requestAnimationFrame(PW);
                                const eW = Math.min(.05, (AW - TW) / 1e3);
                                if (TW = AW, !iR) return;
                                const IW = window.devicePixelRatio || 1,
                                  oW = Math.round(WW.clientWidth * IW),
                                  lW = Math.round(WW.clientHeight * IW);
                                if (0 === oW || 0 === lW) return;
                                WW.width === oW && WW.height === lW || (WW.width = oW, WW.height = lW);
                                const FW = bR.current;
                                null === YW && (zR += .18 * eW), BW += (tR.current - BW) * Math.min(1, 4 * eW);
                                const fW = .6 * eW;
                                wW = wW.filter((WW => HM(WW, FW.gravity, fW))), 0 !== wW.length || yR.current || (CW += eW, CW > .6 && JW());
                                const QW = function(WW, RW, MW, wW) {
                                  const CW = 3.2 * wW,
                                    zR = .44 * Math.min(WW, RW) * CW / wW,
                                    AW = Math.cos(MW),
                                    bR = Math.sin(MW),
                                    yR = Math.cos(.42),
                                    NW = Math.sin(.42);
                                  return (MW, wW, eW) => {
                                    const BW = MW * bR + eW * AW,
                                      tR = CW - (wW * NW + BW * yR);
                                    if (tR < .05) return null;
                                    const TW = zR / tR;
                                    return {
                                      x: WW / 2 + (MW * AW - eW * bR) * TW,
                                      y: RW / 2 - (wW * yR - BW * NW) * TW,
                                      scale: TW,
                                      depth: tR
                                    }
                                  }
                                }(oW, lW, zR, BW);
                                ! function(WW, RW, MW, wW, CW) {
                                  const zR = WW.createLinearGradient(0, 0, 0, MW);
                                  zR.addColorStop(0, "#23262d"), zR.addColorStop(1, "#16181c"), WW.globalCompositeOperation = "source-over", WW.globalAlpha = 1, WW.fillStyle = zR, WW.fillRect(0, 0, RW, MW);
                                  const AW = (RW, MW) => {
                                      const CW = wW(RW[0], RW[1], RW[2]),
                                        zR = wW(MW[0], MW[1], MW[2]);
                                      CW && zR && (WW.beginPath(), WW.moveTo(CW.x, CW.y), WW.lineTo(zR.x, zR.y), WW.stroke())
                                    },
                                    bR = Math.ceil(CW) + 1,
                                    yR = WC[1];
                                  WW.lineWidth = 1, WW.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let NW = -bR; NW <= bR; NW++) AW([NW + .5, yR, .5 - bR], [NW + .5, yR, bR + .5]), AW([.5 - bR, yR, NW + .5], [bR + .5, yR, NW + .5]);
                                  WW.strokeStyle = "rgba(255, 255, 255, 0.28)", WW.setLineDash([4, 4]);
                                  for (const NW of MC)
                                    for (const WW of MC) {
                                      const RW = [0, 1, 2].filter((RW => NW[RW] !== WW[RW]));
                                      1 === RW.length && NW[RW[0]] < WW[RW[0]] && AW(NW, WW)
                                    }
                                  WW.setLineDash([])
                                }(RW, oW, lW, QW, BW);
                                const rR = NW.current,
                                  cR = wW.map((WW => ({
                                    particle: WW,
                                    at: QW(WW.pos[0], WW.pos[1], WW.pos[2])
                                  }))).filter((WW => null !== WW.at)).sort(((WW, RW) => RW.at.depth - WW.at.depth));
                                RW.imageSmoothingEnabled = !1;
                                for (const WW of function(WW) {
                                    switch (WW) {
                                      case VM.f.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case VM.f.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case VM.f.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case VM.f.MultiplyAdd:
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
                                  }(FW.blendMode)) {
                                  RW.globalCompositeOperation = WW.operation;
                                  for (const {
                                      particle: wW,
                                      at: CW
                                    }
                                    of cR) {
                                    const [zR, AW, bR, yR] = LM(wW), NW = Math.max(1, wW.size * CW.scale);
                                    RW.globalAlpha = WW.usesAlpha ? Math.min(1, Math.max(0, yR)) : 1, rR ? RW.drawImage(MW.get(rR, zR, AW, bR), CW.x - NW / 2, CW.y - NW / 2, NW, NW) : (RW.fillStyle = `rgb(${255*zR}, ${255*AW}, ${255*bR})`, RW.fillRect(CW.x - NW / 2, CW.y - NW / 2, NW, NW))
                                  }
                                }
                                RW.globalCompositeOperation = "source-over", RW.globalAlpha = 1
                              };
                              gR = requestAnimationFrame(PW);
                              const IW = new IntersectionObserver((WW => {
                                let [RW] = WW;
                                iR = RW.isIntersecting
                              }));
                              IW.observe(WW);
                              const oW = RW => {
                                  YW = RW.clientX, WW.setPointerCapture(RW.pointerId)
                                },
                                lW = WW => {
                                  null !== YW && (zR += .01 * (WW.clientX - YW), YW = WW.clientX)
                                },
                                FW = () => {
                                  YW = null
                                };
                              return WW.addEventListener("pointerdown", oW), WW.addEventListener("pointermove", lW), WW.addEventListener("pointerup", FW), WW.addEventListener("pointercancel", FW), () => {
                                cancelAnimationFrame(gR), IW.disconnect(), eW.current = null, WW.removeEventListener("pointerdown", oW), WW.removeEventListener("pointermove", lW), WW.removeEventListener("pointerup", FW), WW.removeEventListener("pointercancel", FW)
                              }
                            }), []), (0, gR.jsx)("canvas", {
                              ref: AW,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${RW.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const zz = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            AC = [{
                              mode: VM.f.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: VM.f.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: VM.f.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: VM.f.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: VM.f.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            bz = (0, wW.forwardRef)((function(WW, RW) {
                              var MW, CW;
                              let {
                                textures: AW
                              } = WW;
                              const bR = Iw(),
                                yR = (0, wW.useRef)(null),
                                [NW, eW] = (0, wW.useState)(xw),
                                [BW, tR] = (0, wW.useState)("example"),
                                [TW, iR] = (0, wW.useState)(0),
                                [JW, PW] = (0, wW.useState)(!1),
                                oW = WW => {
                                  const RW = "example" === WW ? xw : mw(WW);
                                  RW && (eW(RW), tR(WW))
                                };
                              (0, wW.useImperativeHandle)(RW, (() => ({
                                preview: WW => {
                                  var RW;
                                  oW(WW), null === (RW = yR.current) || void 0 === RW || RW.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const lW = WW => {
                                  eW({
                                    ...NW,
                                    ...WW
                                  }), tR(null)
                                },
                                FW = function(WW, RW) {
                                  if (null !== RW) return `${SM}    presetId: "${RW}",\n${Ww}\n})`;
                                  const MW = WW.velocityGradients.map((WW => `        {\n            timeFraction: ${DM(WW.timeFraction)},\n            factor: ${DM(WW.factor)},\n            factor2: ${DM(WW.factor2)},\n        },`)),
                                    wW = [`    dir1: ${qw(WW.dir1)},`, `    dir2: ${qw(WW.dir2)},`, Ww, `    texture: "${WW.texture}",`, `    minLifeTime: ${DM(WW.minLifeTime)},`, `    maxLifeTime: ${DM(WW.maxLifeTime)},`, `    minEmitPower: ${DM(WW.minEmitPower)},`, `    maxEmitPower: ${DM(WW.maxEmitPower)},`, `    minSize: ${DM(WW.minSize)},`, `    maxSize: ${DM(WW.maxSize)},`, `    manualEmitCount: ${DM(WW.manualEmitCount)},`, `    gravity: ${qw(WW.gravity)},`, `    colorGradients: ${ZM(WW.colorGradients,"    ")},`, `    velocityGradients: ${MW.length>0?`[\n${MW.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${DM(WW.blendMode)},`];
                                  return void 0 !== WW.hideDist && wW.push(`    hideDist: ${DM(WW.hideDist)},`), `${SM}${wW.join("\n")}\n})`
                                }(NW, null === BW || "example" === BW ? null : BW),
                                QW = AW.includes(NW.texture) ? AW : [...AW, NW.texture];
                              return (0, gR.jsxs)("section", {
                                ref: yR,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, gR.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, gR.jsxs)("div", {
                                    children: [(0, gR.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, gR.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, gR.jsx)(IW, {
                                    text: FW,
                                    label: "Copy code"
                                  })]
                                }), (0, gR.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, gR.jsx)("button", {
                                    type: "button",
                                    className: zR()("DocsVariantChip", {
                                      Active: "example" === BW
                                    }),
                                    onClick: () => {
                                      oW("example")
                                    },
                                    children: "Example"
                                  }), zz.filter((WW => null !== mw(WW))).map((WW => (0, gR.jsx)("button", {
                                    type: "button",
                                    className: zR()("DocsVariantChip", {
                                      Active: BW === WW
                                    }),
                                    onClick: () => {
                                      oW(WW)
                                    },
                                    children: WW
                                  }, WW))), (0, gR.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== BW && void 0 !== BW ? BW : "custom",
                                    "aria-label": "Preset",
                                    onChange: WW => {
                                      oW(WW.target.value)
                                    },
                                    children: [(0, gR.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === BW && (0, gR.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), EM.b.map((WW => (0, gR.jsx)("option", {
                                      value: WW,
                                      children: WW
                                    }, WW)))]
                                  })]
                                }), (0, gR.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, gR.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, gR.jsx)(CC, {
                                      opts: NW,
                                      textureUrl: null !== (MW = null === bR || void 0 === bR ? void 0 : bR.getParticleTextureUrl(NW.texture)) && void 0 !== MW ? MW : null,
                                      burst: TW,
                                      paused: JW
                                    }), (0, gR.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, gR.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          iR(TW + 1)
                                        },
                                        children: [(0, gR.jsx)(YW, {
                                          name: "replay"
                                        }), (0, gR.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, gR.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": JW,
                                        onClick: () => {
                                          PW(!JW)
                                        },
                                        children: [(0, gR.jsx)(YW, {
                                          name: JW ? "play" : "pause"
                                        }), (0, gR.jsx)("span", {
                                          children: JW ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, gR.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, gR.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, gR.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, gR.jsx)("span", {
                                          children: "Texture"
                                        }), (0, gR.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: NW.texture
                                        })]
                                      }), (0, gR.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: QW.map((WW => {
                                          var RW;
                                          const MW = null !== (RW = null === bR || void 0 === bR ? void 0 : bR.getParticleTextureUrl(WW)) && void 0 !== RW ? RW : null;
                                          return (0, gR.jsx)("button", {
                                            type: "button",
                                            className: zR()("DocsParticleTexture", {
                                              Active: NW.texture === WW
                                            }),
                                            title: WW,
                                            "aria-label": WW,
                                            "aria-pressed": NW.texture === WW,
                                            onClick: () => {
                                              lW({
                                                texture: WW
                                              })
                                            },
                                            children: MW ? (0, gR.jsx)("img", {
                                              src: MW,
                                              alt: ""
                                            }) : (0, gR.jsx)(YW, {
                                              name: "image"
                                            })
                                          }, WW)
                                        }))
                                      })]
                                    }), (0, gR.jsx)(Zw, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: NW.manualEmitCount,
                                      onChange: WW => {
                                        lW({
                                          manualEmitCount: WW
                                        })
                                      }
                                    }), (0, gR.jsx)(qC, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: NW.minLifeTime,
                                      high: NW.maxLifeTime,
                                      onChange: (WW, RW) => {
                                        lW({
                                          minLifeTime: WW,
                                          maxLifeTime: RW
                                        })
                                      }
                                    }), (0, gR.jsx)(qC, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: NW.minEmitPower,
                                      high: NW.maxEmitPower,
                                      onChange: (WW, RW) => {
                                        lW({
                                          minEmitPower: WW,
                                          maxEmitPower: RW
                                        })
                                      }
                                    }), (0, gR.jsx)(qC, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: NW.minSize,
                                      high: NW.maxSize,
                                      onChange: (WW, RW) => {
                                        lW({
                                          minSize: WW,
                                          maxSize: RW
                                        })
                                      }
                                    }), (0, gR.jsx)(Zw, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (CW = NW.gravity[1]) && void 0 !== CW ? CW : 0,
                                      onChange: WW => {
                                        var RW, MW;
                                        lW({
                                          gravity: [null !== (RW = NW.gravity[0]) && void 0 !== RW ? RW : 0, WW, null !== (MW = NW.gravity[2]) && void 0 !== MW ? MW : 0]
                                        })
                                      }
                                    }), (0, gR.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, gR.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, gR.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, gR.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: NW.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: WW => {
                                          lW({
                                            blendMode: Number(WW.target.value)
                                          })
                                        },
                                        children: AC.map((WW => {
                                          let {
                                            mode: RW,
                                            label: MW
                                          } = WW;
                                          return (0, gR.jsx)("option", {
                                            value: RW,
                                            children: MW
                                          }, RW)
                                        }))
                                      })]
                                    }), (0, gR.jsx)(Sw, {
                                      opts: NW,
                                      onChange: WW => {
                                        lW({
                                          colorGradients: WW
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, gR.jsx)(fW, {
                                  code: FW,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var yz = MW(3515),
                            NC = MW(1523);

                          function eC(WW, RW) {
                            return WW ? yz.e.includes(RW) ? WW.getIngameIconUrl(RW) : WW.getItemIconUrl(RW) : null
                          }

                          function BC(WW) {
                            var RW, MW, wW;
                            let {
                              part: CW,
                              assets: AW
                            } = WW;
                            const bR = eC(AW, CW.icon),
                              yR = null !== (RW = null === (MW = CW.style) || void 0 === MW ? void 0 : MW.fontSize) && void 0 !== RW ? RW : "1.8em",
                              NW = (0, ER.Lb)(CW.style);
                            return (0, gR.jsxs)("span", {
                              className: zR()("DocsBloxdTextIcon", {
                                Missing: !bR
                              }),
                              style: {
                                width: yR,
                                height: yR,
                                opacity: null === (wW = CW.style) || void 0 === wW ? void 0 : wW.opacity
                              },
                              title: bR ? void 0 : `No Bloxd icon, item or block is called "${CW.icon}"`,
                              children: [bR && NW && (0, gR.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: NW,
                                  maskImage: `url("${bR}")`,
                                  WebkitMaskImage: `url("${bR}")`
                                }
                              }), bR ? (0, gR.jsx)("img", {
                                src: bR,
                                alt: "",
                                className: zR()({
                                  Tinted: NW
                                })
                              }) : (0, gR.jsx)(YW, {
                                name: "image"
                              })]
                            })
                          }

                          function tz(WW) {
                            let {
                              parts: RW,
                              className: MW
                            } = WW;
                            const wW = Iw(),
                              CW = [];
                            let AW = [];
                            const bR = WW => {
                              AW.length > 0 && (CW.push((0, gR.jsx)(NC.c, {
                                text: AW
                              }, `run-${WW}`)), AW = [])
                            };
                            return RW.forEach(((WW, RW) => {
                              "icon" !== KR(WW) || mM(WW.icon) ? AW.push(WW) : (bR(RW), CW.push((0, gR.jsx)(BC, {
                                part: WW,
                                assets: wW
                              }, `icon-${RW}`)))
                            })), bR(RW.length), (0, gR.jsx)("div", {
                              className: zR()("DocsStyledTextPreview", MW),
                              children: CW
                            })
                          }
                          const TC = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let gz = null;

                          function iz(WW) {
                            if (gz ??= document.createElement("canvas").getContext("2d"), !gz) return "#000000";
                            gz.fillStyle = "#000000", gz.fillStyle = WW;
                            const RW = gz.fillStyle;
                            return RW.startsWith("#") ? RW : "#000000"
                          }

                          function YC(WW) {
                            let {
                              value: RW,
                              label: MW,
                              onChange: wW
                            } = WW;
                            return (0, gR.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, gR.jsx)("input", {
                                type: "color",
                                value: iz(RW),
                                "aria-label": `${MW} picker`,
                                onChange: WW => {
                                  wW(WW.target.value)
                                }
                              }), (0, gR.jsx)("input", {
                                type: "text",
                                value: RW,
                                placeholder: "#ffb914 or gold",
                                "aria-label": MW,
                                spellCheck: !1,
                                onChange: WW => {
                                  wW(WW.target.value)
                                }
                              })]
                            })
                          }

                          function JC(WW) {
                            let {
                              value: RW,
                              fontAwesomeIcons: MW,
                              onChange: CW
                            } = WW;
                            const AW = Iw(),
                              [bR, yR] = (0, wW.useState)(mM(RW) ? "fontAwesome" : "bloxd"),
                              [NW, eW] = (0, wW.useState)(""),
                              BW = NW.trim().toLowerCase(),
                              tR = "bloxd" === bR ? yz.e : MW,
                              TW = BW ? tR.filter((WW => WW.toLowerCase().includes(BW))) : tR;
                            return (0, gR.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, gR.jsx)("input", {
                                type: "text",
                                value: RW,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: WW => {
                                  CW(WW.target.value)
                                }
                              }), (0, gR.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, gR.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((WW => (0, gR.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": bR === WW,
                                    className: zR()("DocsVariantChip", {
                                      Active: bR === WW
                                    }),
                                    onClick: () => {
                                      yR(WW)
                                    },
                                    children: "bloxd" === WW ? `Bloxd icons (${yz.e.length})` : `Font Awesome (${MW.length})`
                                  }, WW))), (0, gR.jsx)("input", {
                                    type: "search",
                                    value: NW,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: WW => {
                                      eW(WW.target.value)
                                    }
                                  })
                                ]
                              }), (0, gR.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [TW.map((WW => {
                                  const MW = "bloxd" === bR ? eC(AW, WW) : null;
                                  return (0, gR.jsx)("button", {
                                    type: "button",
                                    title: WW,
                                    "aria-label": WW,
                                    "aria-pressed": WW === RW,
                                    className: zR()("DocsIconPickerOption", {
                                      Active: WW === RW
                                    }),
                                    onClick: () => {
                                      CW(WW)
                                    },
                                    children: "fontAwesome" === bR ? (0, gR.jsx)(oM.e, {
                                      name: WW
                                    }) : MW ? (0, gR.jsx)("img", {
                                      src: MW,
                                      alt: ""
                                    }) : (0, gR.jsx)(YW, {
                                      name: "image"
                                    })
                                  }, WW)
                                })), 0 === TW.length && (0, gR.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", NW, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function PC(WW) {
                            let {
                              property: RW,
                              value: MW,
                              fontAwesomeIcons: wW,
                              onChange: CW
                            } = WW;
                            const {
                              field: zR,
                              label: AW
                            } = RW, bR = WW => "" !== WW || RW.isRequired ? WW : void 0;
                            switch (zR.kind) {
                              case "text":
                                return zR.multiline ? (0, gR.jsx)("textarea", {
                                  value: String(null !== MW && void 0 !== MW ? MW : ""),
                                  rows: 2,
                                  "aria-label": AW,
                                  onChange: WW => {
                                    CW(WW.target.value)
                                  }
                                }) : (0, gR.jsx)("input", {
                                  type: "text",
                                  value: String(null !== MW && void 0 !== MW ? MW : ""),
                                  "aria-label": AW,
                                  onChange: WW => {
                                    CW(bR(WW.target.value))
                                  }
                                });
                              case "size":
                                return (0, gR.jsx)("input", {
                                  type: "text",
                                  value: String(null !== MW && void 0 !== MW ? MW : ""),
                                  placeholder: RW.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": AW,
                                  spellCheck: !1,
                                  onChange: WW => {
                                    CW(bR(WW.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, gR.jsx)(YC, {
                                  value: String(null !== MW && void 0 !== MW ? MW : ""),
                                  label: AW,
                                  onChange: WW => {
                                    CW(bR(WW))
                                  }
                                });
                              case "colours": {
                                const WW = Array.isArray(MW) ? MW : [],
                                  RW = WW => {
                                    CW(WW.length > 0 ? WW : void 0)
                                  };
                                return (0, gR.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [WW.map(((MW, wW) => (0, gR.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, gR.jsx)(YC, {
                                      value: MW,
                                      label: `${AW} ${wW+1}`,
                                      onChange: MW => {
                                        RW(WW.map(((WW, RW) => RW === wW ? MW : WW)))
                                      }
                                    }), (0, gR.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${wW+1}`,
                                      onClick: () => {
                                        RW(WW.filter(((WW, RW) => RW !== wW)))
                                      },
                                      children: (0, gR.jsx)(YW, {
                                        name: "cross"
                                      })
                                    })]
                                  }, wW))), (0, gR.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var MW;
                                      RW([...WW, null !== (MW = WW.at(-1)) && void 0 !== MW ? MW : "#ffffff"])
                                    },
                                    children: [(0, gR.jsx)(YW, {
                                      name: "plus"
                                    }), 0 === WW.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var yR;
                                const WW = "number" === typeof MW ? MW : Number(null !== (yR = RW.defaultText) && void 0 !== yR ? yR : 0);
                                return (0, gR.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, gR.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: WW,
                                    "aria-label": AW,
                                    onChange: WW => {
                                      CW(Number(WW.target.value))
                                    }
                                  }), (0, gR.jsx)("output", {
                                    children: WW.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, gR.jsxs)("select", {
                                  value: String(null !== MW && void 0 !== MW ? MW : ""),
                                  "aria-label": AW,
                                  onChange: WW => {
                                    CW(bR(WW.target.value))
                                  },
                                  children: [!RW.isRequired && (0, gR.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", RW.defaultText, ")"]
                                  }), zR.options.map((WW => (0, gR.jsx)("option", {
                                    value: WW,
                                    children: WW
                                  }, WW)))]
                                });
                              case "icon":
                                return (0, gR.jsx)(JC, {
                                  value: String(null !== MW && void 0 !== MW ? MW : ""),
                                  fontAwesomeIcons: wW,
                                  onChange: CW
                                })
                            }
                          }

                          function IC(WW) {
                            let RW;
                            try {
                              RW = JSON.parse(WW)
                            } catch (MW) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${MW.message}`
                              }
                            }
                            return MM(RW) ? {
                              part: RW,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function oC(WW) {
                            let {
                              parts: RW,
                              index: MW,
                              fontAwesomeIcons: CW,
                              onChange: zR,
                              NRW: AW,
                              onClose: bR
                            } = WW;
                            const yR = (0, wW.useContext)(gM),
                              eW = (0, wW.useRef)(null),
                              BW = RW[MW],
                              tR = KR(BW),
                              [TW, iR] = (0, wW.useState)((() => JSON.stringify(BW, null, 2))),
                              JW = (0, wW.useMemo)((() => "other" === tR ? IC(TW).error : null), [tR, TW]);
                            (0, wW.useEffect)((() => {
                              var WW;
                              null === (WW = eW.current) || void 0 === WW || WW.focus()
                            }), []);
                            const PW = (0, gR.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: WW => {
                                WW.target === WW.currentTarget && bR()
                              },
                              children: (0, gR.jsxs)("div", {
                                ref: eW,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${MW+1}: ${xM[tR]}`,
                                tabIndex: -1,
                                onKeyDown: WW => {
                                  "Escape" === WW.key ? (WW.stopPropagation(), bR()) : "Tab" === WW.key && eW.current && function(WW, RW) {
                                    const MW = Array.from(WW.querySelectorAll(jM)),
                                      wW = MW[0],
                                      CW = MW.at(-1);
                                    if (!wW || !CW) return;
                                    const zR = document.activeElement;
                                    !RW.shiftKey || zR !== wW && zR !== WW ? RW.shiftKey || zR !== CW || (RW.preventDefault(), wW.focus()) : (RW.preventDefault(), CW.focus())
                                  }(eW.current, WW)
                                },
                                children: [(0, gR.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, gR.jsxs)("div", {
                                    children: [(0, gR.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", MW + 1]
                                    }), (0, gR.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: xM[tR]
                                    })]
                                  }), (0, gR.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: bR,
                                    children: (0, gR.jsx)(YW, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, gR.jsx)(tz, {
                                  parts: RW,
                                  className: "DocsTextDialogPreview"
                                }), (0, gR.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === tR ? (0, gR.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, gR.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, gR.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: TW,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: WW => {
                                        iR(WW.target.value);
                                        const RW = IC(WW.target.value);
                                        null !== RW.part && zR(RW.part)
                                      }
                                    }), JW && (0, gR.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: JW
                                    })]
                                  }) : OR[tR].map((WW => {
                                    const RW = GR(BW, WW.path),
                                      MW = WW.isRequired ? JSON.stringify(HR(BW, WW.path)) === JSON.stringify(BW) : void 0 === RW;
                                    return (0, gR.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, gR.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, gR.jsx)("span", {
                                          children: WW.label
                                        }), (0, gR.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: MW,
                                          "aria-label": `Reset ${WW.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            zR(HR(BW, WW.path))
                                          },
                                          children: [(0, gR.jsx)(YW, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, gR.jsx)(PC, {
                                        property: WW,
                                        value: RW,
                                        fontAwesomeIcons: CW,
                                        onChange: RW => {
                                          zR(LR(BW, WW.path, RW))
                                        }
                                      }), !WW.isRequired && (0, gR.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", WW.defaultText]
                                      })]
                                    }, WW.path.join("."))
                                  }))
                                }), (0, gR.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, gR.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: AW,
                                    children: [(0, gR.jsx)(YW, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, gR.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: bR,
                                    children: "Done"
                                  })]
                                }), (0, gR.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: TC.map((WW => (0, gR.jsx)("option", {
                                    value: WW
                                  }, WW)))
                                })]
                              })
                            });
                            return yR ? (0, NW.createPortal)(PW, yR) : PW
                          }
                          const lC = [{
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
                            FC = Object.keys(vM);

                          function fC(WW) {
                            let {
                              fontAwesomeIcons: RW
                            } = WW;
                            const [MW, CW] = (0, wW.useState)(lC[0].parts), [AW, bR] = (0, wW.useState)((() => SR(lC[0].parts))), [yR, NW] = (0, wW.useState)(null), [eW, BW] = (0, wW.useState)(!1), [tR, TW] = (0, wW.useState)(null), [iR, JW] = (0, wW.useState)(!1), [PW, IW] = (0, wW.useState)(null), oW = (0, wW.useRef)(null), lW = SR(MW);
                            (0, wW.useLayoutEffect)((() => {
                              var WW;
                              if (!PW) return;
                              const RW = WW => {
                                  var RW;
                                  return null === (RW = oW.current) || void 0 === RW ? void 0 : RW.querySelector(`[data-focus-key="${WW}"]`)
                                },
                                MW = RW(PW.key);
                              null === (WW = MW && !MW.disabled ? MW : RW(PW.fallback)) || void 0 === WW || WW.focus(), IW(null)
                            }), [PW]);
                            const FW = WW => {
                                CW(WW), bR(SR(WW)), NW(null)
                              },
                              QW = WW => {
                                FW(MW.filter(((RW, MW) => MW !== WW))), IW({
                                  key: `edit-${Math.min(WW,MW.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              rR = (WW, RW) => {
                                const wW = [...MW],
                                  [CW] = wW.splice(WW, 1);
                                wW.splice(WW + RW, 0, CW), FW(wW);
                                IW({
                                  key: `${RW<0?"up":"down"}-${WW+RW}`,
                                  fallback: `edit-${WW+RW}`
                                })
                              };
                            return (0, gR.jsxs)("section", {
                              ref: oW,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, gR.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, gR.jsxs)("div", {
                                  children: [(0, gR.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, gR.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, gR.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: lC.map((WW => (0, gR.jsx)("button", {
                                  type: "button",
                                  className: zR()("DocsVariantChip", {
                                    Active: lW === SR(WW.parts)
                                  }),
                                  onClick: () => {
                                    FW(WW.parts)
                                  },
                                  children: WW.label
                                }, WW.label)))
                              }), (0, gR.jsx)(tz, {
                                parts: MW,
                                className: "DocsTextEditorPreview"
                              }), (0, gR.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, gR.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, gR.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, gR.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [MW.map(((WW, RW) => {
                                      const wW = KR(WW);
                                      return (0, gR.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, gR.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${RW}`,
                                          "aria-label": `Edit part ${RW+1}, ${xM[wW]}`,
                                          onClick: () => {
                                            TW(RW)
                                          },
                                          children: [(0, gR.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: xM[wW]
                                          }), (0, gR.jsx)(tz, {
                                            parts: [WW],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== wW && (0, gR.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: DR(WW)
                                          })]
                                        }), (0, gR.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, gR.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${RW+1} up`,
                                            "data-focus-key": `up-${RW}`,
                                            disabled: 0 === RW,
                                            onClick: () => {
                                              rR(RW, -1)
                                            },
                                            children: (0, gR.jsx)(YW, {
                                              name: "chevron-up"
                                            })
                                          }), (0, gR.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${RW+1} down`,
                                            "data-focus-key": `down-${RW}`,
                                            disabled: RW === MW.length - 1,
                                            onClick: () => {
                                              rR(RW, 1)
                                            },
                                            children: (0, gR.jsx)(YW, {
                                              name: "chevron-down"
                                            })
                                          }), (0, gR.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${RW+1}`,
                                            onClick: () => {
                                              QW(RW)
                                            },
                                            children: (0, gR.jsx)(YW, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, RW)
                                    })), 0 === MW.length && (0, gR.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, gR.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: WW => {
                                      "Escape" === WW.key && iR && (WW.stopPropagation(), JW(!1), IW({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, gR.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": iR,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        JW(!iR)
                                      },
                                      children: [(0, gR.jsx)(YW, {
                                        name: "plus"
                                      }), "Add a part", (0, gR.jsx)(YW, {
                                        name: iR ? "chevron-up" : "chevron-down"
                                      })]
                                    }), iR && (0, gR.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: FC.map((WW => (0, gR.jsx)("li", {
                                        children: (0, gR.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (WW => {
                                              FW([...MW, vM[WW]]), JW(!1), TW(MW.length)
                                            })(WW)
                                          },
                                          children: xM[WW]
                                        })
                                      }, WW)))
                                    })]
                                  })]
                                }), (0, gR.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, gR.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, gR.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": eW,
                                      onClick: () => {
                                        BW(!eW)
                                      },
                                      children: [(0, gR.jsx)(YW, {
                                        name: eW ? "check" : "pencil"
                                      }), eW ? "Done" : "Edit"]
                                    })]
                                  }), eW ? (0, gR.jsxs)(gR.Fragment, {
                                    children: [(0, gR.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: AW,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: WW => {
                                        bR(WW.target.value);
                                        const RW = wM(WW.target.value);
                                        NW(RW.error), RW.parts && CW(RW.parts)
                                      }
                                    }), yR && (0, gR.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: yR
                                    })]
                                  }) : (0, gR.jsx)(fW, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${lW})`
                                  })]
                                })]
                              }), null !== tR && tR < MW.length && (0, gR.jsx)(oC, {
                                parts: MW,
                                index: tR,
                                fontAwesomeIcons: RW,
                                onChange: WW => {
                                  ((WW, RW) => {
                                    FW(MW.map(((MW, wW) => wW === WW ? RW : MW)))
                                  })(tR, WW)
                                },
                                NRW: () => {
                                  QW(tR), TW(null)
                                },
                                onClose: () => {
                                  TW(null), IW({
                                    key: `edit-${tR}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var QC = MW(3820),
                            rz = MW(3803),
                            cz = MW(3813),
                            XC = MW(3828);
                          const jz = 40,
                            kz = 800,
                            az = 150,
                            sC = 8e3,
                            dC = 2e3;

                          function pC(WW, RW) {
                            return 12 * Math.log2(RW / WW)
                          }

                          function hC(WW, RW) {
                            return Math.round(WW * 2 ** (RW / 12) * 10) / 10
                          }

                          function UC(WW) {
                            return `${WW} ms`
                          }

                          function EC(WW) {
                            return `${WW} st`
                          }
                          const VC = [{
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

                          function mz(WW) {
                            let {
                              synth: RW,
                              onChange: MW
                            } = WW;
                            const wW = (0, QC.m)(RW);
                            return (0, gR.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, gR.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, gR.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, gR.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, gR.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, gR.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, gR.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: QC.e.map((WW => (0, gR.jsx)("button", {
                                      type: "button",
                                      className: zR()("DocsVariantChip", {
                                        Active: RW.waveform === WW
                                      }),
                                      "aria-pressed": RW.waveform === WW,
                                      onClick: () => {
                                        MW({
                                          waveform: WW
                                        })
                                      },
                                      children: WW
                                    }, WW)))
                                  })]
                                }), (0, gR.jsx)(Zw, {
                                  label: "Pitch",
                                  min: 0,
                                  max: pC(jz, kz),
                                  step: .1,
                                  value: pC(jz, RW.pitchHz),
                                  format: () => `${RW.pitchHz} Hz`,
                                  onChange: WW => {
                                    MW({
                                      pitchHz: hC(jz, WW)
                                    })
                                  }
                                }), (0, gR.jsx)(Zw, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: RW.syllableMs,
                                  format: UC,
                                  onChange: WW => {
                                    MW({
                                      syllableMs: WW
                                    })
                                  }
                                }), (0, gR.jsx)(Zw, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: RW.volume,
                                  onChange: WW => {
                                    MW({
                                      volume: WW
                                    })
                                  }
                                })]
                              }), (0, gR.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, gR.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, gR.jsx)(Zw, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: RW.durationMs,
                                  format: UC,
                                  onChange: WW => {
                                    MW({
                                      durationMs: WW
                                    })
                                  }
                                }), (0, gR.jsx)(Zw, {
                                  label: "Fade in",
                                  min: 0,
                                  max: wW.durationMs,
                                  step: 1,
                                  value: wW.attackMs,
                                  format: UC,
                                  onChange: WW => {
                                    MW({
                                      attackMs: WW
                                    })
                                  }
                                }), (0, gR.jsx)(Zw, {
                                  label: "Fade out",
                                  min: 0,
                                  max: wW.durationMs - wW.attackMs,
                                  step: 1,
                                  value: wW.releaseMs,
                                  format: UC,
                                  onChange: WW => {
                                    MW({
                                      releaseMs: WW
                                    })
                                  }
                                }), (0, gR.jsx)(Zw, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: RW.glideSemitones,
                                  format: EC,
                                  onChange: WW => {
                                    MW({
                                      glideSemitones: WW
                                    })
                                  }
                                }), (0, gR.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, gR.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== RW.lowpassHz,
                                    onChange: WW => {
                                      MW({
                                        lowpassHz: WW.target.checked ? dC : null
                                      })
                                    }
                                  }), (0, gR.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== RW.lowpassHz && (0, gR.jsx)(Zw, {
                                  label: "Filter",
                                  min: 0,
                                  max: pC(az, sC),
                                  step: .1,
                                  value: pC(az, RW.lowpassHz),
                                  format: () => `${RW.lowpassHz} Hz`,
                                  onChange: WW => {
                                    MW({
                                      lowpassHz: hC(az, WW)
                                    })
                                  }
                                })]
                              }), (0, gR.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, gR.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), VC.map((WW => {
                                  let {
                                    key: wW,
                                    label: CW,
                                    max: zR
                                  } = WW;
                                  return (0, gR.jsx)(Zw, {
                                    label: CW,
                                    min: 0,
                                    max: zR,
                                    step: .1,
                                    value: RW.intonation[wW],
                                    format: EC,
                                    onChange: WW => {
                                      MW({
                                        intonation: {
                                          ...RW.intonation,
                                          [wW]: WW
                                        }
                                      })
                                    }
                                  }, wW)
                                }))]
                              })]
                            })
                          }
                          const xz = Object.keys(QC.i),
                            vz = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function KC(WW) {
                            var RW;
                            const MW = JSON.stringify((0, QC.m)(WW));
                            return null !== (RW = xz.find((WW => JSON.stringify((0, QC.m)(QC.i[WW])) === MW))) && void 0 !== RW ? RW : null
                          }

                          function uC(WW) {
                            let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof WW || null === WW) return JSON.stringify(WW);
                            return `{\n${Object.entries(WW).map((WW=>{let[MW,wW]=WW;return`${RW}    ${MW}: ${uC(wW,`${RW}    `)},`})).join("\n")}\n${RW}}`
                          }

                          function OC(WW, RW, MW) {
                            const wW = KC(WW),
                              CW = [`    line: ${JSON.stringify(RW)},`];
                            return MW && CW.push(`    speakerName: ${JSON.stringify(MW)},`), CW.push("    voice,"), `const voice = ${wW?JSON.stringify(wW):uC((0,QC.m)(WW))}\n\napi.setClientOption(playerId, "dialogue", {\n${CW.join("\n")}\n})`
                          }
                          const nC = 400,
                            GC = 90;
                          let LC = null;

                          function HC(WW, RW, MW) {
                            return LC ??= new AudioContext, LC.resume(), (0, XC.c)(LC, LC.destination, WW, RW, MW, (() => {}))
                          }

                          function DC() {
                            const [WW, RW] = (0, wW.useState)(QC.i.regular), [MW, CW] = (0, wW.useState)(vz[0]), [AW, bR] = (0, wW.useState)("Innkeeper"), [yR, NW] = (0, wW.useState)(0), eW = ew((WW => WW.volume)), BW = (0, wW.useRef)(null), tR = (0, wW.useRef)(0), TW = (0, wW.useRef)(0), iR = () => {
                              var WW;
                              null === (WW = BW.current) || void 0 === WW || WW.call(BW), BW.current = null
                            };
                            (0, wW.useEffect)((() => () => {
                              var WW;
                              null === (WW = BW.current) || void 0 === WW || WW.call(BW), window.clearTimeout(tR.current)
                            }), []);
                            const JW = (0, wW.useMemo)((() => ({
                                line: MW,
                                speakerName: AW || void 0,
                                voice: WW
                              })), [MW, AW, WW]),
                              PW = (0, wW.useRef)(JW);
                            PW.current = JW;
                            const oW = KC(WW),
                              lW = WW => {
                                window.clearTimeout(tR.current), iR();
                                const {
                                  plan: RW,
                                  synth: MW
                                } = (0, cz.g)(WW);
                                MW && (BW.current = HC(MW, RW.blips, eW)), NW((WW => WW + 1))
                              },
                              FW = OC(WW, MW, AW);
                            return (0, gR.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, gR.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, gR.jsxs)("div", {
                                  children: [(0, gR.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, gR.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, gR.jsx)(IW, {
                                  text: FW,
                                  label: "Copy code"
                                })]
                              }), (0, gR.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [xz.map((WW => (0, gR.jsx)("button", {
                                  type: "button",
                                  className: zR()("DocsVariantChip", {
                                    Active: oW === WW
                                  }),
                                  "aria-pressed": oW === WW,
                                  onClick: () => {
                                    (WW => {
                                      const MW = QC.i[WW];
                                      RW(MW), lW({
                                        ...JW,
                                        voice: MW
                                      })
                                    })(WW)
                                  },
                                  children: WW
                                }, WW))), !oW && (0, gR.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, gR.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, gR.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, gR.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, gR.jsx)(rz.d, {
                                      display: JW
                                    }, yR)
                                  }), (0, gR.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: WW => {
                                      WW.preventDefault(), lW(JW)
                                    },
                                    children: [(0, gR.jsx)("input", {
                                      value: MW,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: WW => {
                                        CW(WW.target.value)
                                      }
                                    }), (0, gR.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, gR.jsx)(YW, {
                                        name: "play"
                                      }), (0, gR.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, gR.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: vz.map((WW => (0, gR.jsx)("button", {
                                      type: "button",
                                      className: zR()("DocsVariantChip", {
                                        Active: MW === WW
                                      }),
                                      onClick: () => {
                                        var RW;
                                        CW(RW = WW), lW({
                                          ...JW,
                                          line: RW
                                        })
                                      },
                                      children: WW
                                    }, WW)))
                                  }), (0, gR.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, gR.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, gR.jsx)("input", {
                                      value: AW,
                                      placeholder: "No name",
                                      onChange: WW => {
                                        bR(WW.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, gR.jsx)(mz, {
                                  synth: WW,
                                  onChange: MW => {
                                    const wW = {
                                      ...WW,
                                      ...MW
                                    };
                                    RW(wW);
                                    const CW = {
                                        ...JW,
                                        voice: wW
                                      },
                                      zR = performance.now();
                                    if (zR - TW.current >= GC) {
                                      TW.current = zR, iR();
                                      const WW = (0, cz.g)(CW).plan.blips[0];
                                      WW && (BW.current = HC((0, QC.m)(wW), [{
                                        ...WW,
                                        atMs: 0
                                      }], eW))
                                    }
                                    window.clearTimeout(tR.current), tR.current = window.setTimeout((() => {
                                      lW(PW.current)
                                    }), nC)
                                  }
                                })]
                              }), (0, gR.jsx)(fW, {
                                code: FW,
                                lang: "ts"
                              })]
                            })
                          }
                          var qz = MW(3849);
                          const ZC = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            SC = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            Wz = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${SC}`, "g"), qz.r],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, qz.r]
                            ];

                          function Rz(WW) {
                            return `${WW.pageId}#${WW.anchor}`
                          }
                          let Mz, wz, Cz;

                          function zA(WW) {
                            const RW = (0, QW.i)(WW),
                              MW = new Set;
                            for (const [, , wW] of RW.matchAll(QW.e)) {
                              const WW = wW.startsWith("#") ? KW(wW) : null,
                                RW = WW ? Rz({
                                  pageId: WW.page.id,
                                  anchor: WW.anchor
                                }) : null;
                              null !== RW && (Mz || (Mz = new Set(UW.flatMap((WW => jR(WW.layout) ? xR(WW).sections.map((RW => Rz({
                                pageId: WW.id,
                                anchor: RW.heading.anchor
                              }))) : [])))), Mz).has(RW) && MW.add(RW)
                            }
                            for (const [, , wW] of RW.matchAll(ZC)) {
                              const WW = tM(wW);
                              WW && MW.add(Rz(WW))
                            }
                            return MW
                          }

                          function Az(WW, RW) {
                            const MW = new Set,
                              wW = function(WW) {
                                return WW.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(WW);
                            for (const [, CW] of wW.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) MW.add(CW);
                            for (const [CW, zR] of Wz)
                              for (const [, WW] of(0, qz.i)(wW, CW, zR)) RW.has(WW) && MW.add(WW);
                            return MW
                          }

                          function bA(WW, RW, MW, wW) {
                            const CW = WW.get(RW);
                            CW ? !wW && CW.some((WW => WW.pageId === MW.pageId)) || CW.push(MW) : WW.set(RW, [MW])
                          }
                          const yA = /^[A-Za-z_$][\w$]*$/;

                          function Nz(WW) {
                            return yA.test(WW.name) ? WW.name : "options"
                          }

                          function ez(WW, RW) {
                            const MW = WW.params.map(Nz).join(", ");
                            return RW ? `${WW.name} = (${MW}) => {\n\t\n}` : `api.${WW.name}(${MW})`
                          }

                          function Bz(WW) {
                            let {
                              method: RW,
                              isCallback: MW
                            } = WW;
                            return (0, gR.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, gR.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [MW ? (0, gR.jsxs)(gR.Fragment, {
                                  children: [(0, gR.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: RW.name
                                  }), (0, gR.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, gR.jsxs)(gR.Fragment, {
                                  children: [(0, gR.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, gR.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: RW.name
                                  }), (0, gR.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), RW.params.map(((WW, MW) => (0, gR.jsxs)(wW.Fragment, {
                                  children: [MW > 0 && (0, gR.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, gR.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${RW.name}-${Nz(WW)}`,
                                    children: WW.name
                                  })]
                                }, WW.name))), (0, gR.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: MW ? ") => " : ")"
                                }), MW && !RW.returns && (0, gR.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), RW.returns && RW.returns.type && (0, gR.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!MW && (0, gR.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, gR.jsx)(rM, {
                                  type: RW.returns.type
                                })]
                              })]
                            })
                          }

                          function tA(WW) {
                            let {
                              title: RW,
                              references: MW
                            } = WW;
                            const CW = (0, wW.useContext)(TR);
                            return (0, gR.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, gR.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: RW
                              }), MW.map((WW => (0, gR.jsx)(AW.e, {
                                to: OW(CW, VW(WW.pageId), WW.anchor),
                                children: WW.label
                              }, `${WW.pageId}#${WW.anchor}`)))]
                            })
                          }

                          function Tz(WW) {
                            var RW, MW;
                            let {
                              pageId: wW,
                              anchor: CW
                            } = WW;
                            const zR = Rz({
                                pageId: wW,
                                anchor: CW
                              }),
                              AW = null !== (RW = function() {
                                if (!Cz) {
                                  Cz = new Map;
                                  const wW = new Set(UW.filter((WW => "callbacks" === WW.layout)).flatMap((WW => xR(WW).sections.map((WW => WW.heading.text)))));
                                  for (const CW of UW)
                                    if ("article" === CW.layout || "snippets" === CW.layout)
                                      for (const zR of (0, QW.v)(xR(CW)))
                                        for (const {
                                            code: AW
                                          }
                                          of(0, QW.l)(zR.blocks))
                                          for (const bR of Az(AW, wW)) {
                                            const wW = BR().get(bR);
                                            if (wW) {
                                              var WW, RW, MW;
                                              const AW = {
                                                pageId: CW.id,
                                                anchor: null !== (WW = null === (RW = zR.heading) || void 0 === RW ? void 0 : RW.anchor) && void 0 !== WW ? WW : "",
                                                label: null !== (MW = CW.navTitle) && void 0 !== MW ? MW : CW.title
                                              };
                                              bA(Cz, Rz(wW), AW, !1)
                                            }
                                          }
                                }
                                return Cz
                              }().get(zR)) && void 0 !== RW ? RW : [],
                              bR = null !== (MW = function() {
                                if (!wz) {
                                  wz = new Map;
                                  const WW = VW("changelog");
                                  for (const RW of xR(WW).sections) {
                                    const MW = new Set(RW.blocks.flatMap((WW => [...zA(WW)])));
                                    for (const wW of MW) {
                                      const MW = {
                                        pageId: WW.id,
                                        anchor: RW.heading.anchor,
                                        label: RW.heading.text
                                      };
                                      bA(wz, wW, MW, !0)
                                    }
                                  }
                                }
                                return wz
                              }().get(zR)) && void 0 !== MW ? MW : [];
                            return 0 === AW.length && 0 === bR.length ? null : (0, gR.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [AW.length > 0 && (0, gR.jsx)(tA, {
                                title: "Used in",
                                references: AW
                              }), bR.length > 0 && (0, gR.jsx)(tA, {
                                title: "Changelog",
                                references: bR
                              })]
                            })
                          }

                          function gA(WW) {
                            let {
                              method: RW,
                              pageId: MW,
                              anchor: wW,
                              isCallback: CW
                            } = WW;
                            const zR = CW ? void 0 : bM().get(RW.name),
                              AW = RW.description.length > 0 || null === zR || void 0 === zR || !zR.description ? RW.description : (0, QW.B)(zR.description);
                            return (0, gR.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, gR.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, gR.jsx)(NM, {
                                  level: 2,
                                  text: RW.name,
                                  anchor: wW,
                                  className: "DocsCardTitle"
                                }), (0, gR.jsx)(IW, {
                                  text: ez(RW, CW),
                                  label: CW ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, gR.jsx)(Bz, {
                                method: RW,
                                isCallback: CW
                              }), zR && null !== zR.deprecation && (0, gR.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, gR.jsx)("strong", {
                                  children: "Deprecated"
                                }), zR.deprecation && (0, gR.jsxs)(gR.Fragment, {
                                  children: [": ", (0, gR.jsx)(FR, {
                                    text: (bR = zR.deprecation, (0, qz.y)(bR, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, qz.n)("`\\w"), (WW => {
                                      let [RW] = WW;
                                      return BR().has(RW) ? `\`${RW}\`` : RW
                                    })))
                                  })]
                                })]
                              }), AW.length > 0 && (0, gR.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, gR.jsx)(TM, {
                                  blocks: AW
                                })
                              }), RW.params.length > 0 && (0, gR.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, gR.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, gR.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: RW.params.map((WW => (0, gR.jsxs)("div", {
                                    id: `${RW.name}-${Nz(WW)}`,
                                    className: "DocsParam",
                                    children: [(0, gR.jsxs)("dt", {
                                      children: [(0, gR.jsx)("code", {
                                        className: "DocsParamName",
                                        children: WW.name
                                      }), (0, gR.jsx)(rM, {
                                        type: WW.type
                                      })]
                                    }), WW.description && (0, gR.jsx)("dd", {
                                      children: (0, gR.jsx)(FR, {
                                        text: WW.description
                                      })
                                    })]
                                  }, WW.name)))
                                })]
                              }), RW.returns && (RW.returns.type || RW.returns.description.length > 0) && (0, gR.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, gR.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, gR.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [RW.returns.type && (0, gR.jsx)(rM, {
                                    type: RW.returns.type
                                  }), RW.returns.description.length > 0 && (0, gR.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, gR.jsx)(TM, {
                                      blocks: RW.returns.description
                                    })
                                  })]
                                })]
                              }), (0, gR.jsx)(Tz, {
                                pageId: MW,
                                anchor: wW
                              })]
                            });
                            var bR
                          }

                          function iA(WW) {
                            var RW;
                            return null !== WW.defaultValue && "undefined" !== WW.defaultValue ? WW.defaultValue : null !== (RW = WW.example) && void 0 !== RW ? RW : "value"
                          }

                          function Yz(WW) {
                            let {
                              setting: RW,
                              pageId: MW,
                              anchor: wW,
                              setterSnippet: CW
                            } = WW;
                            const zR = null === RW.defaultValue ? null : JR(RW.defaultValue);
                            return (0, gR.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, gR.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, gR.jsx)(NM, {
                                  level: 2,
                                  text: RW.name,
                                  anchor: wW,
                                  className: "DocsCardTitle"
                                }), (0, gR.jsx)(IW, {
                                  text: CW(RW.name, iA(RW)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, gR.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, gR.jsxs)("div", {
                                  children: [(0, gR.jsx)("dt", {
                                    children: "Type"
                                  }), (0, gR.jsx)("dd", {
                                    children: (0, gR.jsx)(rM, {
                                      type: RW.type
                                    })
                                  })]
                                }), null !== RW.defaultValue && (0, gR.jsxs)("div", {
                                  children: [(0, gR.jsx)("dt", {
                                    children: "Default"
                                  }), (0, gR.jsx)("dd", {
                                    children: (0, gR.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [zR && (0, gR.jsx)(PR, {
                                        colour: zR
                                      }), RW.defaultValue]
                                    })
                                  })]
                                }), null !== RW.example && (0, gR.jsxs)("div", {
                                  children: [(0, gR.jsx)("dt", {
                                    children: "Example"
                                  }), (0, gR.jsx)("dd", {
                                    children: (0, gR.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: RW.example
                                    })
                                  })]
                                })]
                              }), RW.description.length > 0 && (0, gR.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, gR.jsx)(TM, {
                                  blocks: RW.description
                                })
                              }), (0, gR.jsx)(Tz, {
                                pageId: MW,
                                anchor: wW
                              })]
                            })
                          }

                          function Jz(WW) {
                            let {
                              section: RW
                            } = WW;
                            return (0, gR.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, gR.jsx)(NM, {
                                level: 2,
                                text: RW.heading.text,
                                anchor: RW.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, gR.jsx)("div", {
                                className: "DocsProse",
                                children: (0, gR.jsx)(TM, {
                                  blocks: RW.blocks
                                })
                              })]
                            })
                          }

                          function Pz(WW) {
                            let {
                              section: RW
                            } = WW;
                            return (0, gR.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, gR.jsx)(NM, {
                                level: RW.heading.level,
                                text: RW.heading.text,
                                anchor: RW.heading.anchor
                              }), (0, gR.jsx)(TM, {
                                blocks: RW.blocks
                              })]
                            })
                          }
                          const Iz = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function oz(WW) {
                            let {
                              page: RW,
                              section: MW
                            } = WW;
                            if ("methods" === RW.layout || "callbacks" === RW.layout) return (0, gR.jsx)(gA, {
                              method: fM(MW),
                              pageId: RW.id,
                              anchor: MW.heading.anchor,
                              isCallback: "callbacks" === RW.layout
                            });
                            if ("settings" === RW.layout) {
                              const WW = function(WW) {
                                const RW = {
                                  name: WW.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const wW of WW.blocks) {
                                  var MW;
                                  if (FM(wW)) continue;
                                  const WW = "paragraph" === wW.kind ? wW.text.match(QM) : null;
                                  if (!WW) {
                                    RW.description.push(wW);
                                    continue
                                  }
                                  const CW = null !== (MW = lM(WW[2])) && void 0 !== MW ? MW : WW[2];
                                  "Type" === WW[1] ? RW.type = CW : "Default" === WW[1] ? RW.defaultValue = CW : "" !== CW && (RW.example = CW)
                                }
                                return RW.type ? RW : null
                              }(MW);
                              if (WW) return (0, gR.jsx)(Yz, {
                                setting: WW,
                                pageId: RW.id,
                                anchor: MW.heading.anchor,
                                setterSnippet: RW.setterSnippet
                              })
                            }
                            return "snippets" === RW.layout ? (0, gR.jsx)(Jz, {
                              section: MW
                            }) : "changelog" === RW.layout ? (0, gR.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, gR.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, gR.jsx)(NM, {
                                  level: 2,
                                  text: MW.heading.text,
                                  anchor: MW.heading.anchor
                                })
                              }), (0, gR.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, gR.jsx)(TM, {
                                  blocks: rw(MW.blocks)
                                })
                              })]
                            }) : RW.gallery ? (0, gR.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, gR.jsx)(NM, {
                                level: MW.heading.level,
                                text: MW.heading.text,
                                anchor: MW.heading.anchor
                              }), (0, gR.jsx)(cC, {
                                kind: RW.gallery,
                                content: xR(RW),
                                blocks: MW.blocks
                              })]
                            }) : (0, gR.jsx)(Pz, {
                              section: MW
                            })
                          }

                          function lz(WW) {
                            let {
                              page: RW,
                              onTocChange: MW
                            } = WW;
                            const CW = xR(RW),
                              [zR, AW] = (0, wW.useState)(""),
                              bR = "article" !== RW.layout,
                              yR = YM(RW.gallery) ? RW.gallery : null,
                              NW = null !== yR,
                              eW = zR.trim().toLowerCase(),
                              BW = (0, wW.useRef)(null),
                              tR = (0, wW.useCallback)((WW => {
                                var RW;
                                null === (RW = BW.current) || void 0 === RW || RW.preview(WW)
                              }), []),
                              TW = (0, wW.useMemo)((() => {
                                if (!RW.hasParticlePlayground) return [];
                                const WW = kw(CW.intro).find((WW => "names" === WW.kind && !WW.names.some((WW => null !== mw(WW.name)))));
                                return "names" === (null === WW || void 0 === WW ? void 0 : WW.kind) ? WW.names.map((WW => WW.name)) : []
                              }), [RW, CW]),
                              iR = (0, wW.useMemo)((() => {
                                if (!RW.hasTextPlayground) return [];
                                const WW = CW.sections.flatMap((WW => WW.blocks.flatMap((WW => {
                                  var RW;
                                  return (null !== (RW = jw(WW)) && void 0 !== RW ? RW : []).flatMap((WW => mM(WW.name) ? [WW.name] : []))
                                }))));
                                return [...new Set(WW)]
                              }), [RW, CW]),
                              YW = (0, wW.useMemo)((() => eW ? CW.sections.filter((WW => function(WW, RW) {
                                return !!WW.heading.text.toLowerCase().includes(RW) || WW.blocks.some((WW => (0, QW.i)(WW).toLowerCase().includes(RW)))
                              }(WW, eW))) : CW.sections), [CW, eW]),
                              JW = (0, wW.useMemo)((() => function(WW, RW) {
                                return "article" !== WW.layout ? RW.map((WW => ({
                                  anchor: WW.heading.anchor,
                                  text: WW.heading.text,
                                  level: 2
                                }))) : RW.flatMap((WW => {
                                  const RW = WW.blocks.flatMap((WW => "heading" === WW.kind && 3 === WW.level ? [{
                                    anchor: WW.anchor,
                                    text: WW.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: WW.heading.anchor,
                                    text: WW.heading.text,
                                    level: 2
                                  }, ...RW]
                                }))
                              }(RW, YW)), [RW, YW]);
                            return (0, wW.useEffect)((() => {
                              MW(JW)
                            }), [JW, MW]), (0, gR.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, gR.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, gR.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: CW.title || RW.title
                                }), (0, gR.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: RW.summary
                                }), (0, gR.jsx)(Lw, {
                                  page: RW
                                }), bR && (0, gR.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, gR.jsxs)("span", {
                                    children: [(0, gR.jsx)("strong", {
                                      children: CW.sections.length
                                    }), " ", Iz[RW.layout]]
                                  })
                                })]
                              }), "" === RW.slug && (0, gR.jsx)(jC, {}), yR && (0, gR.jsx)(dw, {
                                kind: yR
                              }, yR), RW.hasParticlePlayground && (0, gR.jsx)(bz, {
                                ref: BW,
                                textures: TW
                              }), !NW && CW.intro.length > 0 && (0, gR.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: RW.gallery ? (0, gR.jsx)(Jw.Provider, {
                                  value: RW.hasParticlePlayground ? tR : null,
                                  children: (0, gR.jsx)(cC, {
                                    kind: RW.gallery,
                                    content: CW,
                                    blocks: CW.intro
                                  })
                                }) : (0, gR.jsx)(TM, {
                                  blocks: rw(CW.intro)
                                })
                              }), RW.hasTextPlayground && (0, gR.jsx)(fC, {
                                fontAwesomeIcons: iR
                              }), RW.hasVoicePlayground && (0, gR.jsx)(DC, {}), RW.childPageIds && (0, gR.jsx)(jC, {
                                cards: RW.childPageIds.map((WW => ({
                                  pageId: WW
                                }))),
                                label: RW.title
                              }), bR && (0, gR.jsx)(IM, {
                                className: "DocsFilterBar",
                                value: zR,
                                placeholder: `Filter ${CW.sections.length} ${Iz[RW.layout]}\u2026`,
                                label: `Filter ${Iz[RW.layout]}`,
                                onChange: AW,
                                count: eW ? {
                                  visible: YW.length,
                                  total: CW.sections.length
                                } : null
                              }), !NW && (0, gR.jsxs)("div", {
                                className: `DocsSections Layout-${RW.layout}`,
                                children: [YW.map((WW => (0, gR.jsx)(oz, {
                                  page: RW,
                                  section: WW
                                }, WW.heading.anchor))), 0 === YW.length && (0, gR.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", Iz[RW.layout], " match \u201c", zR, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const Fz = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function fz(WW) {
                            let {
                              entry: RW,
                              isActive: MW,
                              onNavigate: wW,
                              label: CW,
                              children: AW
                            } = WW;
                            return (0, gR.jsx)("a", {
                              href: `#${RW.anchor}`,
                              "aria-label": CW,
                              className: zR()(`Level${RW.level}`, {
                                Active: MW
                              }),
                              "aria-current": MW ? "location" : void 0,
                              onClick: WW => {
                                WW.preventDefault(), wW(RW.anchor)
                              },
                              children: AW
                            })
                          }

                          function Qz(WW) {
                            let {
                              toc: RW,
                              activeAnchor: MW,
                              onNavigate: CW
                            } = WW;
                            const AW = Math.max(0, RW.findIndex((WW => WW.anchor === MW))),
                              bR = (0, wW.useRef)(null),
                              yR = (0, wW.useRef)(!1);
                            (0, wW.useEffect)((() => {
                              var WW, MW;
                              const wW = null === (WW = bR.current) || void 0 === WW ? void 0 : WW.closest(".DocsToc"),
                                CW = null === (MW = bR.current) || void 0 === MW ? void 0 : MW.querySelector(".DocsTimelineNotch.Active");
                              if (!wW || !CW) return;
                              let zR = 0;
                              if (AW === RW.length - 1) zR = wW.scrollHeight;
                              else if (AW > 0) {
                                const WW = wW.getBoundingClientRect(),
                                  RW = CW.getBoundingClientRect();
                                zR = wW.scrollTop + RW.top + RW.height / 2 - (WW.top + wW.clientHeight / 2)
                              }
                              wW.scrollTo({
                                top: zR,
                                behavior: yR.current ? "smooth" : "auto"
                              }), yR.current = !0
                            }), [AW, RW.length]);
                            const NW = [];
                            return RW.forEach(((WW, RW) => {
                              var MW, wW, CW;
                              const zR = function(WW) {
                                  const RW = WW.trim().match(Fz);
                                  return RW ? {
                                    day: RW[1],
                                    month: `${RW[2]} ${RW[3]}`
                                  } : null
                                }(WW.text),
                                AW = null !== (MW = null === zR || void 0 === zR ? void 0 : zR.month) && void 0 !== MW ? MW : null;
                              null !== AW && (null === (wW = NW.at(-1)) || void 0 === wW ? void 0 : wW.month) === AW || NW.push({
                                month: AW,
                                entries: []
                              }), NW.at(-1).entries.push({
                                entry: WW,
                                day: null !== (CW = null === zR || void 0 === zR ? void 0 : zR.day) && void 0 !== CW ? CW : null,
                                index: RW
                              })
                            })), (0, gR.jsx)("ol", {
                              ref: bR,
                              className: "DocsTimeline",
                              children: NW.map((WW => {
                                let {
                                  month: RW,
                                  entries: MW
                                } = WW;
                                return (0, gR.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [RW && (0, gR.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: RW
                                  }), (0, gR.jsx)("ol", {
                                    children: MW.map((WW => {
                                      let {
                                        entry: RW,
                                        day: MW,
                                        index: wW
                                      } = WW;
                                      return (0, gR.jsx)("li", {
                                        className: zR()("DocsTimelineNotch", {
                                          Passed: wW < AW,
                                          Active: wW === AW
                                        }),
                                        children: (0, gR.jsx)(fz, {
                                          entry: RW,
                                          isActive: wW === AW,
                                          onNavigate: CW,
                                          label: RW.text,
                                          children: (0, gR.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== MW && void 0 !== MW ? MW : RW.text
                                          })
                                        })
                                      }, RW.anchor)
                                    }))
                                  })]
                                }, MW[0].entry.anchor)
                              }))
                            })
                          }

                          function rA(WW) {
                            let {
                              isChangelog: RW,
                              toc: MW,
                              activeAnchor: wW,
                              onNavigate: CW
                            } = WW;
                            return 0 === MW.length ? null : (0, gR.jsxs)(gR.Fragment, {
                              children: [(0, gR.jsx)("div", {
                                className: "DocsTocTitle",
                                children: RW ? "Updates" : "On this page"
                              }), RW ? (0, gR.jsx)(Qz, {
                                toc: MW,
                                activeAnchor: wW,
                                onNavigate: CW
                              }) : (0, gR.jsx)("ul", {
                                children: MW.map((WW => (0, gR.jsx)("li", {
                                  children: (0, gR.jsx)(fz, {
                                    entry: WW,
                                    isActive: WW.anchor === wW,
                                    onNavigate: CW,
                                    children: WW.text.replace(/`/g, "")
                                  })
                                }, WW.anchor)))
                              })]
                            })
                          }
                          const cA = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            Xz = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            jA = 20,
                            kA = 10,
                            aA = 40,
                            sz = 120;
                          let dz;

                          function pz(WW) {
                            const RW = WW.gallery;
                            if (!RW) return [];
                            if (YM(RW)) return function(WW) {
                              return PM(WW).entries.map((WW => WW.name))
                            }(RW).map((MW => ({
                              page: WW,
                              anchor: sM(RW, MW),
                              title: MW,
                              kind: Xz[RW],
                              text: "",
                              listedUnder: WW.title
                            })));
                            const MW = xR(WW);
                            return (0, QW.v)(MW).flatMap((wW => {
                              const CW = wW.heading ? `${WW.title} \u203a ${wW.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : WW.title;
                              return pM(RW, MW, wW.blocks).flatMap((MW => "names" !== MW.kind ? [] : MW.names.map((wW => {
                                const zR = MW.isSongs ? "Song" : Xz[RW];
                                return {
                                  page: WW,
                                  anchor: wW.anchor,
                                  title: wW.name,
                                  kind: zR,
                                  text: "",
                                  listedUnder: CW
                                }
                              }))))
                            }))
                          }

                          function hz(WW, RW, MW) {
                            const wW = WW.title.toLowerCase();
                            let CW = 0;
                            if (wW === RW) CW = 100;
                            else if (wW.startsWith(RW)) CW = 80;
                            else if (wW.includes(RW)) CW = 60;
                            else if (MW.every((WW => wW.includes(WW)))) CW = 45;
                            else {
                              if (!WW.text.toLowerCase().includes(RW)) return 0;
                              CW = 20
                            }
                            return CW - Math.min(wW.length / 10, 9) + ("Page" === WW.kind ? 8 : "Method" === WW.kind ? 3 : 0) - (WW.listedUnder ? jA : 0)
                          }

                          function Uz(WW, RW) {
                            const MW = WW.toLowerCase().indexOf(RW),
                              wW = Math.max(0, MW - sz / 3);
                            return `${wW>0?"\u2026":""}${WW.slice(wW,wW+sz)}${wW+sz<WW.length?"\u2026":""}`
                          }

                          function Ez(WW) {
                            let {
                              text: RW,
                              query: MW
                            } = WW;
                            const wW = MW ? RW.toLowerCase().indexOf(MW) : -1;
                            return -1 === wW ? (0, gR.jsx)(gR.Fragment, {
                              children: RW
                            }) : (0, gR.jsxs)(gR.Fragment, {
                              children: [RW.slice(0, wW), (0, gR.jsx)("mark", {
                                children: RW.slice(wW, wW + MW.length)
                              }), RW.slice(wW + MW.length)]
                            })
                          }

                          function Vz(WW) {
                            let {
                              basePath: RW,
                              onClose: MW
                            } = WW;
                            const CW = (0, bR.u)(),
                              [AW, yR] = (0, wW.useState)(""),
                              [NW, eW] = (0, wW.useState)(0),
                              BW = (0, wW.useRef)(null),
                              tR = (0, wW.useRef)(null),
                              TW = AW.trim().toLowerCase(),
                              iR = (0, wW.useMemo)((() => {
                                const WW = (dz || (dz = UW.flatMap((WW => {
                                  const RW = xR(WW);
                                  return [{
                                    page: WW,
                                    anchor: "",
                                    title: WW.title,
                                    kind: "Page",
                                    text: WW.summary
                                  }, ...RW.sections.flatMap((RW => {
                                    const MW = RW.blocks.filter((WW => "paragraph" === WW.kind)).map(QW.i).join(" ").replace(/[`*]/g, ""),
                                      wW = {
                                        page: WW,
                                        anchor: RW.heading.anchor,
                                        title: RW.heading.text.replace(/`/g, ""),
                                        kind: cA[WW.layout],
                                        text: MW
                                      },
                                      CW = RW.blocks.flatMap((RW => "article" === WW.layout && "heading" === RW.kind && 3 === RW.level ? [{
                                        page: WW,
                                        anchor: RW.anchor,
                                        title: RW.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: wW.title
                                      }] : []));
                                    return [wW, ...CW]
                                  })), ...pz(WW)]
                                }))), dz);
                                if (!TW) return WW.filter((WW => "Page" === WW.kind));
                                const RW = TW.split(/\s+/);
                                let MW = 0;
                                return WW.map((WW => ({
                                  entry: WW,
                                  score: hz(WW, TW, RW)
                                }))).filter((WW => WW.score > 0)).sort(((WW, RW) => RW.score - WW.score)).filter((WW => !WW.entry.listedUnder || (MW++, MW <= kA))).slice(0, aA).map((WW => WW.entry))
                              }), [TW]);
                            (0, wW.useEffect)((() => {
                              eW(0)
                            }), [TW]), (0, wW.useEffect)((() => {
                              const WW = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === WW || void 0 === WW || WW.focus()
                              }
                            }), []), (0, wW.useEffect)((() => {
                              var WW, RW;
                              null === (WW = BW.current) || void 0 === WW || null === (RW = WW.querySelector(".Active")) || void 0 === RW || RW.scrollIntoView({
                                block: "nearest"
                              })
                            }), [NW]);
                            const JW = WW => {
                              CW(OW(RW, WW.page, WW.anchor)), MW()
                            };
                            return (0, gR.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: WW => {
                                WW.target === WW.currentTarget && MW()
                              },
                              children: (0, gR.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: WW => {
                                  WW.target !== tR.current && WW.preventDefault()
                                },
                                onKeyDown: WW => {
                                  if ("Escape" === WW.key) MW();
                                  else if ("Tab" === WW.key) {
                                    var RW;
                                    WW.preventDefault(), null === (RW = tR.current) || void 0 === RW || RW.focus()
                                  }
                                },
                                children: [(0, gR.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, gR.jsx)(YW, {
                                    name: "magnifying-glass"
                                  }), (0, gR.jsx)("input", {
                                    ref: tR,
                                    autoFocus: !0,
                                    value: AW,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": iR.length > 0 ? `DocsSearchResult-${NW}` : void 0,
                                    onChange: WW => {
                                      yR(WW.target.value)
                                    },
                                    onKeyDown: WW => {
                                      if ("ArrowDown" === WW.key || "ArrowUp" === WW.key) {
                                        WW.preventDefault();
                                        const RW = "ArrowDown" === WW.key ? 1 : -1;
                                        eW((NW + RW + iR.length) % Math.max(iR.length, 1))
                                      } else "Enter" === WW.key && iR[NW] && JW(iR[NW])
                                    }
                                  }), (0, gR.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, gR.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: BW,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!TW && (0, gR.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), iR.map(((WW, RW) => {
                                    var MW;
                                    return (0, gR.jsxs)("li", {
                                      id: `DocsSearchResult-${RW}`,
                                      role: "option",
                                      "aria-selected": RW === NW,
                                      className: zR()("DocsSearchResult", {
                                        Active: RW === NW
                                      }),
                                      onMouseMove: () => {
                                        eW(RW)
                                      },
                                      onClick: () => {
                                        JW(WW)
                                      },
                                      children: [(0, gR.jsx)(YW, {
                                        name: WW.page.icon
                                      }), (0, gR.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, gR.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, gR.jsx)(Ez, {
                                            text: WW.title,
                                            query: TW
                                          })
                                        }), WW.text && (0, gR.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, gR.jsx)(Ez, {
                                            text: Uz(WW.text, TW),
                                            query: TW
                                          })
                                        })]
                                      }), (0, gR.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === WW.kind ? "Page" : null !== (MW = WW.listedUnder) && void 0 !== MW ? MW : `${WW.kind} \xb7 ${WW.page.title}`
                                      })]
                                    }, `${WW.page.id}#${WW.anchor}`)
                                  })), TW && 0 === iR.length && (0, gR.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", AW, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function mA(WW, RW) {
                            if (RW < 10) return `${WW.toFixed(1)}s`;
                            const MW = Math.floor(WW);
                            return `${Math.floor(MW/60)}:${String(MW%60).padStart(2,"0")}`
                          }

                          function xA() {
                            const WW = ew((WW => WW.track)),
                              RW = ew((WW => WW.volume)),
                              [MW, CW] = (0, wW.useState)(0),
                              AW = (0, wW.useRef)(Rw);
                            if ((0, wW.useEffect)((() => {
                                if (!WW) return;
                                if (CW(gC()), "playing" !== WW.status) return;
                                let RW = 0;
                                const MW = () => {
                                  CW(gC()), RW = requestAnimationFrame(MW)
                                };
                                return RW = requestAnimationFrame(MW), () => {
                                  cancelAnimationFrame(RW)
                                }
                              }), [WW]), !WW) return null;
                            const bR = "paused" !== WW.status,
                              yR = Math.min(MW, WW.duration);
                            return (0, gR.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, gR.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, gR.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": bR ? `Pause ${WW.name}` : `Play ${WW.name}`,
                                  onClick: Tw,
                                  children: (0, gR.jsx)(YW, {
                                    name: bR ? "pause" : "play"
                                  })
                                }), (0, gR.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, gR.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, gR.jsx)("code", {
                                      children: WW.name
                                    }), (0, gR.jsx)("span", {
                                      children: WW.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, gR.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, gR.jsx)("span", {
                                      children: mA(yR, WW.duration)
                                    }), (0, gR.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: WW.duration || 1,
                                      step: .01,
                                      value: yR,
                                      disabled: 0 === WW.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${mA(yR,WW.duration)} of ${mA(WW.duration,WW.duration)}`,
                                      onChange: WW => {
                                        const RW = Number(WW.target.value);
                                        ! function(WW) {
                                          var RW;
                                          Aw = WW, null === (RW = Cw) || void 0 === RW || RW.seek(WW)
                                        }(RW), CW(RW)
                                      }
                                    }), (0, gR.jsx)("span", {
                                      children: WW.duration > 0 ? mA(WW.duration, WW.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, gR.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, gR.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === RW ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === RW ? iC(AW.current) : (AW.current = RW, iC(0))
                                    },
                                    children: (0, gR.jsx)(YW, {
                                      name: "volume",
                                      className: zR()({
                                        Muted: 0 === RW
                                      })
                                    })
                                  }), (0, gR.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: RW,
                                    "aria-label": "Volume",
                                    onChange: WW => {
                                      iC(Number(WW.target.value))
                                    }
                                  })]
                                }), (0, gR.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var RW;
                                    null === (RW = document.querySelector(`[data-docs-track="${CSS.escape(Mw(WW.name,WW.isSong))}"]`)) || void 0 === RW || RW.focus(), Yw()
                                  },
                                  children: (0, gR.jsx)(YW, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var vA = MW(50);
                          const Kz = "docsTheme",
                            uz = window.matchMedia("(prefers-color-scheme: light)");

                          function Oz(WW) {
                            let {
                              theme: RW,
                              onChange: MW
                            } = WW;
                            const wW = "dark" === RW ? "light" : "dark";
                            return (0, gR.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${wW} theme`,
                              title: `Switch to ${wW} theme`,
                              onClick: () => {
                                MW(wW)
                              },
                              children: (0, gR.jsx)(YW, {
                                name: "dark" === RW ? "moon" : "sun"
                              })
                            })
                          }
                          const nz = "https://github.com/Bloxdy/code-api",
                            Gz = "https://discord.gg/playbloxd",
                            Lz = 180,
                            Hz = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function Dz(WW) {
                            let {
                              basePath: RW,
                              activePageId: MW,
                              onNavigate: wW
                            } = WW;
                            return (0, gR.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: EW.map((WW => (0, gR.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, gR.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: WW.title
                                }), WW.pageIds.map((WW => {
                                  var CW;
                                  const bR = VW(WW);
                                  return (0, gR.jsxs)(AW.e, {
                                    to: OW(RW, bR),
                                    className: zR()("DocsNavLink", {
                                      Active: bR.id === MW
                                    }),
                                    "aria-current": bR.id === MW ? "page" : void 0,
                                    onClick: wW,
                                    children: [(0, gR.jsx)(YW, {
                                      name: bR.icon
                                    }), (0, gR.jsx)("span", {
                                      children: null !== (CW = bR.navTitle) && void 0 !== CW ? CW : bR.title
                                    })]
                                  }, bR.id)
                                }))]
                              }, WW.title)))
                            })
                          }

                          function qA(WW) {
                            let {
                              basePath: RW,
                              pageId: MW
                            } = WW;
                            const wW = EW.flatMap((WW => WW.pageIds)),
                              CW = wW.indexOf(MW),
                              zR = CW > 0 ? VW(wW[CW - 1]) : null,
                              bR = CW < wW.length - 1 ? VW(wW[CW + 1]) : null;
                            return (0, gR.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [zR ? (0, gR.jsxs)(AW.e, {
                                className: "DocsPagerLink Previous",
                                to: OW(RW, zR),
                                children: [(0, gR.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, gR.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: zR.title
                                })]
                              }) : (0, gR.jsx)("span", {}), bR && (0, gR.jsxs)(AW.e, {
                                className: "DocsPagerLink Next",
                                to: OW(RW, bR),
                                children: [(0, gR.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, gR.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: bR.title
                                })]
                              })]
                            })
                          }

                          function Zz(WW) {
                            let {
                              basePath: RW,
                              embedded: MW = !1
                            } = WW;
                            const {
                              pageSlug: CW = ""
                            } = (0, bR.A)(), NW = (0, bR.s)(), eW = (0, bR.u)(), BW = (tR = CW, UW.find((WW => WW.slug === tR)));
                            var tR;
                            const [TW, iR] = function() {
                              const [WW, RW] = (0, wW.useState)((() => {
                                const WW = vA.g.getItem(Kz);
                                return "dark" === WW || "light" === WW ? WW : null
                              })), [MW, CW] = (0, wW.useState)(uz.matches ? "light" : "dark");
                              return (0, wW.useEffect)((() => {
                                const WW = () => {
                                  CW(uz.matches ? "light" : "dark")
                                };
                                return uz.addEventListener("change", WW), () => {
                                  uz.removeEventListener("change", WW)
                                }
                              }), []), [null !== WW && void 0 !== WW ? WW : MW, WW => {
                                vA.g.setItem(Kz, WW), RW(WW)
                              }]
                            }(), [JW, PW] = (0, wW.useState)(null), [IW, oW] = (0, wW.useState)(!1), [lW, FW] = (0, wW.useState)(!1), [fW, rR] = (0, wW.useState)([]), cR = function(WW, RW) {
                              const [MW, CW] = (0, wW.useState)("");
                              return (0, wW.useEffect)((() => {
                                if (!RW) return;
                                let MW = 0;
                                const wW = () => {
                                    var wW, zR;
                                    MW = 0;
                                    const AW = RW.getBoundingClientRect().top + Lz;
                                    let bR = null !== (wW = null === (zR = WW[0]) || void 0 === zR ? void 0 : zR.anchor) && void 0 !== wW ? wW : "";
                                    for (const RW of WW) {
                                      const WW = document.getElementById(RW.anchor);
                                      WW && WW.getBoundingClientRect().top <= AW && (bR = RW.anchor)
                                    }
                                    RW.scrollTop + RW.clientHeight >= RW.scrollHeight - 2 && RW.scrollTop > 0 && WW.length > 0 && (bR = WW[WW.length - 1].anchor), CW(bR)
                                  },
                                  zR = () => {
                                    MW || (MW = requestAnimationFrame(wW))
                                  };
                                return wW(), RW.addEventListener("scroll", zR, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(MW), RW.removeEventListener("scroll", zR)
                                }
                              }), [WW, RW]), MW
                            }(fW, JW), XW = "" === CW && NW.hash ? function(WW) {
                              const RW = (0, QW.q)(WW);
                              if (vR(VW("welcome"), RW)) return null;
                              const MW = Object.hasOwn(uW, RW) ? uW[RW] : null;
                              if (MW) return {
                                page: VW(MW.pageId),
                                anchor: MW.anchor
                              };
                              const wW = VW("readme");
                              return vR(wW, RW) ? {
                                page: wW,
                                anchor: RW
                              } : KW(`#${RW}`)
                            }(NW.hash) : null;
                            (0, wW.useEffect)((() => (yR.b.set({
                              musicOnFromPage: !1
                            }), () => {
                              yR.b.set({
                                musicOnFromPage: !0
                              }), Yw()
                            })), []), (0, wW.useEffect)((() => {
                              const WW = WW => {
                                const RW = WW.target;
                                if (RW.closest(".DocsTextDialog")) return;
                                const MW = RW.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(RW.tagName);
                                "k" === WW.key && (WW.metaKey || WW.ctrlKey) || "/" === WW.key && !MW ? (WW.preventDefault(), FW(!0)) : "Escape" === WW.key && oW(!1)
                              };
                              return window.addEventListener("keydown", WW), () => {
                                window.removeEventListener("keydown", WW)
                              }
                            }), []);
                            const jR = (0, wW.useRef)(null);
                            (0, wW.useLayoutEffect)((() => {
                              var WW, RW;
                              if (!JW) return;
                              const MW = jR.current === NW.pathname;
                              jR.current = NW.pathname;
                              const wW = (0, QW.q)(NW.hash),
                                CW = wW ? document.getElementById(wW) : null;
                              if (null === (WW = JW.querySelector(".DocsTargeted")) || void 0 === WW || WW.classList.remove("DocsTargeted"), null === CW || void 0 === CW || null === (RW = CW.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === RW || RW.classList.add("DocsTargeted"), CW) {
                                var zR;
                                const WW = CW.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (zR = CW.closest(".DocsChangelogEntry")) && void 0 !== zR ? zR : CW).scrollIntoView({
                                  block: WW ? "center" : "start",
                                  behavior: MW ? "smooth" : "auto"
                                })
                              } else MW || JW.scrollTo({
                                top: 0
                              })
                            }), [JW, NW.pathname, NW.hash, NW.key]);
                            const kR = (0, wW.useCallback)((() => {
                                oW(!1)
                              }), []),
                              aR = (0, wW.useCallback)((WW => {
                                eW({
                                  hash: WW
                                })
                              }), [eW]);
                            if (XW) return (0, gR.jsx)(bR.d, {
                              replace: !0,
                              to: OW(RW, XW.page, XW.anchor)
                            });
                            if (!BW) return (0, gR.jsx)(bR.d, {
                              replace: !0,
                              to: RW
                            });
                            const sW = MW ? "div" : "main";
                            return (0, gR.jsx)(TR.Provider, {
                              value: RW,
                              children: (0, gR.jsx)(gM.Provider, {
                                value: JW,
                                children: (0, gR.jsxs)("div", {
                                  ref: PW,
                                  className: zR()("DocsSite", {
                                    Embedded: MW,
                                    NavOpen: IW
                                  }),
                                  "data-theme": TW,
                                  children: [(0, gR.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, gR.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": IW ? "Close menu" : "Open menu",
                                      "aria-expanded": IW,
                                      onClick: () => {
                                        oW(!IW)
                                      },
                                      children: (0, gR.jsx)(YW, {
                                        name: IW ? "cross" : "menu"
                                      })
                                    }), (0, gR.jsxs)(AW.e, {
                                      to: RW,
                                      className: "DocsBrand",
                                      children: [(0, gR.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, gR.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, gR.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, gR.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        FW(!0)
                                      },
                                      children: [(0, gR.jsx)(YW, {
                                        name: "magnifying-glass"
                                      }), (0, gR.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, gR.jsxs)("kbd", {
                                        children: [Hz ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, gR.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, gR.jsxs)("a", {
                                        href: Gz,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, gR.jsx)(YW, {
                                          name: "discord"
                                        }), (0, gR.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, gR.jsxs)("a", {
                                        href: nz,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, gR.jsx)(YW, {
                                          name: "external-link"
                                        }), (0, gR.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !MW && (0, gR.jsxs)(AW.e, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, gR.jsx)(YW, {
                                          name: "play"
                                        }), (0, gR.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, gR.jsx)(Oz, {
                                        theme: TW,
                                        onChange: iR
                                      })]
                                    })]
                                  }), (0, gR.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, gR.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, gR.jsx)(Dz, {
                                        basePath: RW,
                                        activePageId: BW.id,
                                        onNavigate: kR
                                      })
                                    }), (0, gR.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: kR
                                    }), (0, gR.jsxs)(sW, {
                                      className: "DocsMain",
                                      children: [(0, gR.jsx)(lz, {
                                        page: BW,
                                        onTocChange: rR
                                      }, BW.id), (0, gR.jsx)(qA, {
                                        basePath: RW,
                                        pageId: BW.id
                                      })]
                                    }), (0, gR.jsx)("aside", {
                                      className: zR()("DocsToc", {
                                        Timeline: "changelog" === BW.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, gR.jsx)(rA, {
                                        isChangelog: "changelog" === BW.layout,
                                        toc: fW,
                                        activeAnchor: cR,
                                        onNavigate: aR
                                      })
                                    })]
                                  }), (0, gR.jsx)(xA, {}), lW && (0, gR.jsx)(Vz, {
                                    basePath: RW,
                                    onClose: () => {
                                      FW(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 3705: (WW, RW, MW) => {
                          MW.d(RW, {
                            B: () => tR,
                            e: () => wW,
                            f: () => AW,
                            i: () => YW,
                            l: () => iR,
                            n: () => bR,
                            q: () => CW,
                            s: () => zR,
                            v: () => gR,
                            y: () => TW
                          });
                          const wW = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function CW(WW) {
                            try {
                              return decodeURIComponent(WW.slice(1))
                            } catch {
                              return WW.slice(1)
                            }
                          }

                          function zR(WW) {
                            return WW.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const AW = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${wW.source}`, "g");

                          function bR(WW, RW) {
                            return 2 === WW.length ? RW.replace(/^ (.*) $/, "$1") : RW
                          }

                          function yR(WW) {
                            return "" === WW.trim()
                          }

                          function NW(WW) {
                            const RW = [];
                            for (const MW of WW.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) RW.length > 0 && RW[RW.length - 1].endsWith("\\") ? RW[RW.length - 1] += `|${MW}` : RW.push(MW);
                            return RW.map((WW => WW.trim().replaceAll("\\|", "|")))
                          }
                          const eW = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function BW(WW) {
                            const RW = [],
                              MW = [{
                                indent: -1,
                                items: RW
                              }];
                            let wW = null;
                            for (const CW of WW) {
                              const WW = CW.match(eW);
                              if (!WW) {
                                wW && (wW.text += ` ${CW.trim()}`);
                                continue
                              }
                              const RW = WW[1].replace(/\t/g, "  ").length;
                              for (; RW <= MW[MW.length - 1].indent;) MW.pop();
                              wW = {
                                text: WW[3].trim(),
                                children: []
                              }, MW[MW.length - 1].items.push(wW), MW.push({
                                indent: RW,
                                items: wW.children
                              })
                            }
                            return RW
                          }

                          function tR(WW) {
                            const RW = WW.replace(/\r\n/g, "\n").split("\n"),
                              MW = [];
                            let wW = 0;
                            for (; wW < RW.length;) {
                              const WW = RW[wW];
                              if (yR(WW)) {
                                wW++;
                                continue
                              }
                              const CW = WW.match(/^\s*```\s*(\w*)\s*$/);
                              if (CW) {
                                const WW = [];
                                for (wW++; wW < RW.length && !/^\s*```\s*$/.test(RW[wW]);) WW.push(RW[wW]), wW++;
                                wW++, MW.push({
                                  kind: "code",
                                  lang: CW[1] || "text",
                                  code: WW.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const AW = WW.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (AW) {
                                const WW = AW[2].trim();
                                MW.push({
                                  kind: "heading",
                                  level: AW[1].length,
                                  text: WW,
                                  anchor: zR(WW)
                                }), wW++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(WW)) {
                                MW.push({
                                  kind: "rule"
                                }), wW++;
                                continue
                              }
                              if (WW.trim().startsWith("|") && wW + 1 < RW.length && /^\s*\|[\s:|-]+\|\s*$/.test(RW[wW + 1])) {
                                const CW = NW(WW),
                                  zR = [];
                                for (wW += 2; wW < RW.length && RW[wW].trim().startsWith("|");) zR.push(NW(RW[wW])), wW++;
                                MW.push({
                                  kind: "table",
                                  header: CW,
                                  rows: zR
                                });
                                continue
                              }
                              if (WW.startsWith(">")) {
                                const WW = [];
                                for (; wW < RW.length && RW[wW].startsWith(">");) WW.push(RW[wW].replace(/^>\s?/, "")), wW++;
                                MW.push({
                                  kind: "quote",
                                  blocks: tR(WW.join("\n"))
                                });
                                continue
                              }
                              if (eW.test(WW)) {
                                const CW = [],
                                  zR = /^\s*\d+\./.test(WW);
                                for (; wW < RW.length && !yR(RW[wW]) && (eW.test(RW[wW]) || /^\s+\S/.test(RW[wW]));) CW.push(RW[wW]), wW++;
                                MW.push({
                                  kind: "list",
                                  ordered: zR,
                                  items: BW(CW)
                                });
                                continue
                              }
                              const bR = [];
                              for (; wW < RW.length && !yR(RW[wW]) && !/^\s*```/.test(RW[wW]) && !/^#{1,6}\s/.test(RW[wW]) && !RW[wW].startsWith(">") && !eW.test(RW[wW]) && (!RW[wW].trim().startsWith("|") || 0 !== bR.length);) bR.push(RW[wW].trim()), wW++;
                              0 === bR.length && (bR.push(RW[wW].trim()), wW++), MW.push({
                                kind: "paragraph",
                                text: bR.join(" ")
                              })
                            }
                            return MW
                          }

                          function TW(WW) {
                            let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const MW = tR(WW);
                            let wW = "";
                            const CW = [],
                              zR = [],
                              AW = new Map;
                            for (const NW of MW) {
                              if ("heading" === NW.kind) {
                                var bR;
                                const WW = (null !== (bR = AW.get(NW.anchor)) && void 0 !== bR ? bR : 0) + 1;
                                AW.set(NW.anchor, WW), WW > 1 && (NW.anchor = `${NW.anchor}-${WW}`)
                              }
                              if ("heading" === NW.kind && 1 === NW.level && !wW) {
                                wW = NW.text;
                                continue
                              }
                              if ("heading" === NW.kind && NW.level <= RW) {
                                zR.push({
                                  heading: NW,
                                  blocks: []
                                });
                                continue
                              }
                              const WW = zR.at(-1);
                              WW ? WW.blocks.push(NW) : CW.push(NW)
                            }
                            const yR = WW => {
                              for (;
                                "rule" === (null === (RW = WW.at(-1)) || void 0 === RW ? void 0 : RW.kind);) {
                                var RW;
                                WW.pop()
                              }
                            };
                            yR(CW);
                            for (const NW of zR) yR(NW.blocks);
                            return {
                              title: wW,
                              intro: CW,
                              sections: zR
                            }
                          }

                          function gR(WW) {
                            return [{
                              heading: null,
                              blocks: WW.intro
                            }, ...WW.sections.map((WW => ({
                              heading: WW.heading,
                              blocks: WW.blocks
                            })))]
                          }

                          function iR(WW) {
                            return WW.flatMap((WW => "code" === WW.kind ? [WW] : "quote" === WW.kind ? iR(WW.blocks) : []))
                          }

                          function YW(WW) {
                            switch (WW.kind) {
                              case "heading":
                              case "paragraph":
                                return WW.text;
                              case "code":
                                return WW.code;
                              case "table":
                                return [WW.header, ...WW.rows].map((WW => WW.join(" "))).join(" ");
                              case "list": {
                                const RW = WW => WW.map((WW => `${WW.text} ${RW(WW.children)}`)).join(" ");
                                return RW(WW.items)
                              }
                              case "quote":
                                return WW.blocks.map(YW).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 3828: (WW, RW, MW) => {
                          MW.d(RW, {
                            c: () => eW,
                            g: () => BW
                          });
                          var wW = MW(3835),
                            CW = MW(27);
                          const zR = .25,
                            AW = .85,
                            bR = .02,
                            yR = .01;

                          function NW(WW, RW, MW, wW, CW, zR, bR) {
                            const {
                              waveform: yR,
                              pitchHz: NW,
                              attackMs: eW,
                              releaseMs: BW,
                              lowpassHz: tR
                            } = MW, TW = CW + wW.durationMs / 1e3, gR = NW * 2 ** (wW.semitones / 12), iR = WW.createOscillator();
                            iR.type = yR, iR.frequency.setValueAtTime(gR, CW), iR.frequency.exponentialRampToValueAtTime(gR * 2 ** (wW.glideSemitones / 12), TW);
                            const YW = CW + Math.min(eW, wW.durationMs) / 1e3,
                              JW = WW.createGain();
                            JW.gain.setValueAtTime(0, CW), JW.gain.linearRampToValueAtTime(zR, YW), JW.gain.linearRampToValueAtTime(zR * AW, Math.max(YW, TW - BW / 1e3)), JW.gain.linearRampToValueAtTime(0, TW);
                            const PW = [iR];
                            if (null !== tR) {
                              const RW = WW.createBiquadFilter();
                              RW.type = "lowpass", RW.frequency.value = tR, PW.push(RW)
                            }
                            PW.push(JW, RW);
                            for (let AW = 1; AW < PW.length; AW++) PW[AW - 1].connect(PW[AW]);
                            return iR.onended = () => {
                              for (const WW of PW.slice(0, -1)) WW.disconnect();
                              bR()
                            }, iR.start(CW), iR.stop(TW), iR
                          }

                          function eW(WW, RW, MW, wW, CW, AW) {
                            if (0 === wW.length) return AW(), () => {};
                            const eW = zR * MW.volume * CW,
                              BW = WW.createGain();
                            BW.connect(RW);
                            const tR = WW.currentTime + bR,
                              TW = new Set;
                            for (const zR of wW) {
                              const RW = NW(WW, BW, MW, zR, tR + zR.atMs / 1e3, eW * zR.level, (() => {
                                TW.delete(RW), 0 === TW.size && (BW.disconnect(), AW())
                              }));
                              TW.add(RW)
                            }
                            return () => {
                              const RW = WW.currentTime;
                              BW.gain.setTargetAtTime(0, RW, yR);
                              for (const WW of TW) try {
                                WW.stop(RW + 5 * yR)
                              } catch {}
                            }
                          }

                          function BW(WW, RW) {
                            var MW;
                            const zR = wW.d.ctx,
                              AW = wW.d.masterGain;
                            if (!zR || !AW || !CW.b.get("soundOnFromAd")) return () => {};
                            const bR = wW.d;
                            return null === (MW = bR._autoResume) || void 0 === MW || MW.call(bR), eW(zR, AW, WW, RW, CW.b.get("soundVolume"), (() => {
                              var WW;
                              null === (WW = bR._autoSuspend) || void 0 === WW || WW.call(bR)
                            }))
                          }
                        }, 3748: (WW, RW, MW) => {
                          MW.d(RW, {
                            e: () => oW,
                            g: () => JW
                          });
                          var wW = MW(1132),
                            CW = MW(33);
                          var zR = MW(284);
                          var AW = MW(564);
                          var bR = MW(1939),
                            yR = MW(3756),
                            NW = MW(3777),
                            eW = MW(3790);
                          class BW {
                            constructor(WW, RW, MW, wW, CW, zR) {
                              this.id = WW, this.type = RW, this.parameters = MW, this.tearDownNotification = wW, this.onDonePromise = CW, this.resolveRequest = zR
                            }
                          }
                          const tR = new Set(["primary-fire", "alt-fire", "TouchDig"]);
                          class TW {
                            constructor(WW, RW, MW, wW, CW, zR) {
                              this.id = WW, this.type = RW, this.parameters = MW, this.resolveRequest = wW, this.onDonePromise = CW, this.tearDownNotification = zR, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
                              const AW = JW[RW];
                              if (!AW) throw console.error(`No QTE implementation registered for type: ${RW}`), new Error(`No QTE implementation registered for type: ${RW}`);
                              this.implementation = new AW(MW, (WW => {
                                this.isCompleted = !0, this.resolveRequest(WW)
                              }), this.tearDownNotification), this.setupInputHandlers()
                            }
                            setupInputHandlers() {
                              this.mouseSub = CW.k.subscribe("QTEMouseState", (WW => {
                                let {
                                  isDown: RW
                                } = WW;
                                this.isCompleted || this.implementation.handleMouseInput(RW)
                              })), this.stopInputActions = (0, NW.l)((WW => {
                                this.isCompleted || !tR.has(WW.action) && !(0, NW.i)(WW) || this.implementation.handleMouseInput(WW.down)
                              })), this.tickSub = CW.k.subscribe("noaTick", (WW => {
                                if (this.isCompleted) return;
                                const RW = WW / 1e3;
                                this.implementation.handleTick(RW)
                              })), this.stopShellTicks = (0, yR.t)((() => {
                                this.isCompleted || this.implementation.handleTick(bR.t / 1e3)
                              }))
                            }
                            cleanup() {
                              var WW, RW;
                              this.mouseSub && (CW.k.unsubscribe(this.mouseSub), this.mouseSub = null), null === (WW = this.stopInputActions) || void 0 === WW || WW.call(this), this.stopInputActions = null, null === (RW = this.stopShellTicks) || void 0 === RW || RW.call(this), this.stopShellTicks = null, this.tickSub && (CW.k.unsubscribe(this.tickSub), this.tickSub = null)
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
                          const gR = new wW.d,
                            iR = new Map;
                          let YW = null;
                          const JW = {
                            progressBar: class {
                              constructor(WW, RW, MW) {
                                var wW, CW, zR, AW;
                                this.resolveRequest = RW, this.tearDownNotification = MW, this.progress = 0, this.J_ = void 0, this.P_ = void 0, this.cV = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
                                const bR = WW;
                                this.J_ = null !== (wW = bR.J_) && void 0 !== wW ? wW : .075, this.P_ = null !== (CW = bR.P_) && void 0 !== CW ? CW : 1, this.progress = null !== (zR = bR.rV) && void 0 !== zR ? zR : 30, this.cV = null !== (AW = bR.cV) && void 0 !== AW && AW, this.parameters = bR
                              }
                              handleMouseInput(WW) {
                                WW && !this.isCompleted && (this.clickCount++, this.progress += this.P_, this.progress >= 100 && this.complete(!0))
                              }
                              handleTick() {
                                if (!this.isCompleted)
                                  if (this.progress -= this.J_, this.cV && this.progress <= 0) this.complete(!1);
                                  else if (this.progress <= 0) this.progress = 0;
                                else if (this.progress >= 100) return void this.complete(!0)
                              }
                              complete(WW) {
                                this.isCompleted = !0, this.resolveRequest(WW)
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
                              constructor(WW, RW, MW) {
                                var wW;
                                this.resolveRequest = RW, this.tearDownNotification = MW, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = WW, this.timeWindowMs = null !== (wW = this.parameters.F_) && void 0 !== wW ? wW : 3e3, this.startTime = Date.now()
                              }
                              handleMouseInput(WW) {
                                if (!WW || this.isCompleted) return;
                                Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
                              }
                              handleTick() {
                                if (this.isCompleted) return;
                                Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
                              }
                              complete(WW) {
                                this.isCompleted = !0, this.resolveRequest(WW)
                              }
                              getState() {
                                const WW = Date.now() - this.startTime,
                                  RW = Math.max(0, this.timeWindowMs - WW);
                                return {
                                  type: this.type,
                                  parameters: this.parameters,
                                  state: {
                                    timeRemaining: RW,
                                    F_: this.timeWindowMs
                                  },
                                  isActive: !0
                                }
                              }
                              tearDown() {
                                this.tearDownNotification()
                              }
                            },
                            gravityBar: class {
                              constructor(WW, RW, MW) {
                                var wW;
                                this.resolveRequest = RW, this.tearDownNotification = MW, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
                                const CW = WW;
                                this.parameters = {
                                  ...CW,
                                  h_: zR.d.clamp(CW.h_, .05, 1)
                                }, this.progress = null !== (wW = CW.rV) && void 0 !== wW ? wW : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
                              }
                              handleMouseInput(WW) {
                                this.isMouseDown = WW
                              }
                              handleTick(WW) {
                                this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(WW))
                              }
                              updateMover() {
                                this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
                                const WW = Math.sign(this.moverTarget - this.moverPosition);
                                this.moverPosition += WW * this.parameters.U_ * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
                              }
                              pickNewMoverTarget() {
                                this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
                              }
                              randomNumTicksUntilDirectionChange() {
                                const WW = zR.d.clamp(1 - .7 * this.parameters.E_, 0, 1.4);
                                return Math.floor(60 * WW + 40 * Math.random())
                              }
                              updateCatchZone() {
                                this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.n_ : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = zR.d.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
                                const WW = this.parameters.h_ / 2,
                                  RW = WW,
                                  MW = 1 - WW;
                                this.catchZonePosition <= RW ? (this.catchZonePosition = RW, this.catchZoneVelocity = 0) : this.catchZonePosition >= MW && (this.catchZonePosition = MW, this.catchZoneVelocity = 0)
                              }
                              isMoverInCatchZone() {
                                const WW = this.parameters.h_ / 2;
                                return this.moverPosition >= this.catchZonePosition - WW && this.moverPosition <= this.catchZonePosition + WW
                              }
                              updateProgress(WW) {
                                this.isMoverInCatchZone() ? this.progress += this.parameters.L_ * WW : this.progress -= this.parameters.S_ * WW, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.cV && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
                              }
                              complete(WW) {
                                this.isCompleted = !0, this.resolveRequest(WW)
                              }
                              getState() {
                                return {
                                  type: this.type,
                                  parameters: this.parameters,
                                  state: {
                                    catchZonePosition: this.catchZonePosition,
                                    h_: this.parameters.h_,
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
                              constructor(WW, RW, MW) {
                                var wW, CW, AW, bR, yR;
                                this.resolveRequest = RW, this.tearDownNotification = MW, this.startTime = void 0, this.speed = void 0, this.B3 = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
                                const NW = WW;
                                this.parameters = {
                                  ...NW,
                                  speed: null !== (wW = NW.speed) && void 0 !== wW ? wW : .5,
                                  B3: zR.d.clamp(NW.B3, .05, 1),
                                  label: null !== (CW = NW.label) && void 0 !== CW ? CW : [{
                                    str: "Click when the marker is within the green zone."
                                  }],
                                  icon: null !== (AW = NW.icon) && void 0 !== AW ? AW : null,
                                  scale: null !== (bR = NW.scale) && void 0 !== bR ? bR : 1,
                                  rotation: null !== (yR = NW.rotation) && void 0 !== yR ? yR : 0
                                }, this.speed = this.parameters.speed, this.B3 = this.parameters.B3, this.startTime = Date.now()
                              }
                              handleMouseInput(WW) {
                                if (WW) {
                                  this.updateMarkerPosition();
                                  const WW = Math.abs(this.markerPosition - .5) <= this.B3 / 2;
                                  this.complete(WW)
                                }
                              }
                              handleTick() {
                                this.isCompleted || this.updateMarkerPosition()
                              }
                              updateMarkerPosition() {
                                const WW = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
                                this.markerPosition = WW <= .5 ? 2 * WW : 2 - 2 * WW
                              }
                              complete(WW) {
                                this.isCompleted = !0, this.resolveRequest(WW)
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
                              constructor(WW, RW, MW) {
                                this.resolveRequest = RW, this.tearDownNotification = MW, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = WW, this.shrinkStartTime = Date.now()
                              }
                              handleMouseInput(WW) {
                                if (!WW || this.isCompleted) return;
                                const RW = this.getOuterCircleProgress();
                                if (RW <= this.parameters.r4 && RW >= -this.parameters.r4) {
                                  if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.I3) return void this.complete(!0)
                                } else this.handleMiss();
                                this.shrinkStartTime = Date.now()
                              }
                              handleMiss() {
                                this.misses++, this.lastClickResult = !1, !(0, AW.S)(this.parameters.X3) && this.misses > this.parameters.X3 ? this.complete(!1) : this.shrinkStartTime = Date.now()
                              }
                              handleTick() {
                                if (this.isCompleted) return;
                                this.getOuterCircleProgress() < -this.parameters.r4 && this.handleMiss()
                              }
                              getOuterCircleProgress() {
                                return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.o3
                              }
                              complete(WW) {
                                this.isCompleted = !0, this.resolveRequest(WW)
                              }
                              getState() {
                                return {
                                  type: this.type,
                                  parameters: this.parameters,
                                  state: {
                                    outerCircleProgress: this.getOuterCircleProgress(),
                                    successes: this.successes,
                                    I3: this.parameters.I3,
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

                          function PW() {
                            (0, eW.j)(bR.z.Qte, YW ? bR.z.Qte : 0), YW ? CW.k.Sz("qteStateUpdated", YW.getState()) : CW.k.Sz("qteStateUpdated", {
                              type: null,
                              typeSpecificParameters: null,
                              isActive: !1
                            })
                          }
                          class IW {
                            constructor(WW, RW) {
                              this.resultPromise = WW, this.tearDownQTE = RW
                            }
                            static create(WW, RW, MW) {
                              const wW = Promise.race([WW, RW]);
                              return new IW(wW, MW)
                            }
                            async getResult() {
                              return await this.resultPromise
                            }
                          }
                          class oW {
                            static queueQTE(WW, RW, MW) {
                              let wW, CW;
                              const zR = new Promise((WW => {
                                  wW = WW
                                })),
                                AW = new Promise((WW => {
                                  CW = () => {
                                    WW("qteTornDown")
                                  }
                                })),
                                bR = Promise.race([zR, AW]).then((() => {})),
                                yR = new BW(WW, RW, MW, CW, bR, wW);
                              return iR.set(WW, yR), gR.enqueue(yR), YW || this.processNextQTE(), IW.create(zR, AW, CW)
                            }
                            static async processNextQTE() {
                              if (YW || gR.gC()) return void(gR.gC() && YW && (YW = null, PW()));
                              const WW = await gR.dequeue();
                              if (!iR.has(WW.id)) return void await this.processNextQTE();
                              iR.delete(WW.id);
                              const RW = new TW(WW.id, WW.type, WW.parameters, WW.resolveRequest, WW.onDonePromise, WW.tearDownNotification);
                              YW = RW, PW();
                              try {
                                await RW.waitUntilDone()
                              } catch (MW) {
                                console.error("Error while waiting for QTE to resolve:", MW.stack)
                              }
                              YW === RW && (YW.cleanup(), YW = null, PW()), await this.processNextQTE()
                            }
                            static cancelQTE(WW) {
                              if (YW && YW.id === WW) return YW.tearDown(), YW = null, PW(), void this.processNextQTE();
                              const RW = iR.get(WW);
                              RW && (iR.delete(WW), RW.tearDownNotification())
                            }
                            static getCurrentState() {
                              return YW ? YW.getState() : {
                                type: null,
                                parameters: null,
                                state: null,
                                isActive: !1
                              }
                            }
                            static reset() {
                              YW && (YW.tearDown(), YW = null), iR.forEach(((WW, RW) => {
                                this.cancelQTE(RW)
                              })), gR.emptyQueue(), iR.clear(), PW()
                            }
                          }
                        }, 3835: (WW, RW, MW) => {
                          MW.d(RW, {
                            Howl: () => wW.Howl,
                            d: () => wW.Howler
                          });
                          var wW = MW(3843);
                          wW.Howler._mobileUnloaded = !0
                        }, 3849: (WW, RW, MW) => {
                          function wW(WW) {
                            return {
                              notAfter: WW
                            }
                          }
                          MW.d(RW, {
                            C: () => BW,
                            e: () => yR,
                            i: () => NW,
                            l: () => bR,
                            n: () => wW,
                            r: () => CW,
                            t: () => zR,
                            v: () => AW,
                            y: () => eW
                          });
                          const CW = wW("\\w$."),
                            zR = wW("\\w.,");

                          function AW(WW) {
                            return RW => yR(RW, WW)
                          }

                          function bR(WW) {
                            return RW => !WW.test(RW.input.slice(0, RW.index))
                          }

                          function yR(WW, RW) {
                            return WW.index > 0 && new RegExp(`[${RW}]`).test(WW.input[WW.index - 1])
                          }

                          function NW(WW, RW, MW) {
                            return function(WW) {
                              return void 0 !== WW && "function" !== typeof WW
                            }(MW) ? function(WW, RW, MW) {
                              const wW = RW.flags.replace(/[gy]/g, ""),
                                CW = new RegExp(`[^${MW}](?:${RW.source})`, `${wW}g`),
                                zR = [],
                                AW = MW => {
                                  const wW = MW.index + MW[0].length;
                                  return ("" === MW[0] ? tR(WW, RW, wW) : wW) - 1
                                },
                                bR = new RegExp(`(?:${RW.source})`, `${wW}y`).exec(WW);
                              if (bR) {
                                if (zR.push(bR), !RW.global) return zR;
                                CW.lastIndex = AW(bR)
                              }
                              for (let yR = CW.exec(WW); yR; yR = CW.exec(WW)) {
                                const MW = tR(WW, RW, yR.index) - yR.index;
                                if (yR[0] = yR[0].slice(MW), yR.index += MW, zR.push(yR), !RW.global) break;
                                CW.lastIndex = AW(yR)
                              }
                              return zR
                            }(WW, RW, MW.notAfter) : function(WW, RW, MW) {
                              const wW = new RegExp(RW.source, `${RW.flags.replace(/[gy]/g,"")}g`),
                                CW = [];
                              for (let zR = wW.exec(WW); zR; zR = wW.exec(WW))
                                if (!MW || MW(zR)) {
                                  if (CW.push(zR), !RW.global) break;
                                  "" === zR[0] && (wW.lastIndex = tR(WW, RW, wW.lastIndex))
                                } else wW.lastIndex = tR(WW, RW, zR.index);
                              return CW
                            }(WW, RW, MW)
                          }

                          function eW(WW, RW, MW, wW) {
                            let CW = "",
                              zR = 0;
                            for (const AW of NW(WW, RW, MW)) CW += WW.slice(zR, AW.index) + wW(AW), zR = AW.index + AW[0].length;
                            return CW + WW.slice(zR)
                          }

                          function BW(WW, RW, MW) {
                            const wW = [];
                            let CW = 0;
                            for (const zR of NW(WW, RW, MW)) wW.push(WW.slice(CW, zR.index)), CW = zR.index + zR[0].length;
                            return [...wW, WW.slice(CW)]
                          }

                          function tR(WW, RW, MW) {
                            var wW;
                            return MW + (RW.unicode && (null !== (wW = WW.codePointAt(MW)) && void 0 !== wW ? wW : 0) > 65535 ? 2 : 1)
                          }
                        }, 3799: (WW, RW, MW) => {
                          MW.d(RW, {
                            A: () => TW,
                            c: () => CW,
                            d: () => yR,
                            h: () => zR,
                            i: () => AW,
                            m: () => bR,
                            n: () => YW,
                            r: () => eW,
                            u: () => BW,
                            x: () => iR
                          });
                          var wW = MW(1413);
                          const CW = 24e3,
                            zR = "/docs/llms.txt",
                            AW = `${wW.c}${zR}`,
                            bR = "/llms.txt",
                            yR = "/docs/llms-full.txt";

                          function NW(WW) {
                            return WW || "index"
                          }

                          function eW(WW) {
                            return `/docs/${NW(WW)}.md`
                          }

                          function BW(WW, RW) {
                            return `/docs/${NW(WW)}/${RW+1}.md`
                          }
                          const tR = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function TW(WW) {
                            const RW = tR.exec(WW);
                            return null === RW ? null : {
                              name: RW[1],
                              part: void 0 === RW[2] ? null : Number(RW[2])
                            }
                          }
                          const gR = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function iR(WW) {
                            const RW = gR.exec(WW);
                            if (null === RW) return null;
                            const [, MW = "", wW] = RW;
                            return void 0 === wW ? eW(MW) : BW(MW, Number(wW) - 1)
                          }

                          function YW(WW) {
                            return `/docsHtml/${NW(WW)}.html`
                          }
                        }
                      }; Object.freeze(modules);
                      for (const WW in modules) Object.freeze(modules[WW]);