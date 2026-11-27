export const id = 94;
export const ids = [94, 110];
export const modules = {
    5590: (WW, iW, OW) => {
      OW.d(iW, {
        e: () => jW,
        h: () => UW
      });
      var mW = OW(1089),
        EW = OW.n(mW),
        NW = OW(62),
        PW = OW(1172),
        LW = OW(5593),
        cW = OW(2021),
        wW = OW(3332),
        tW = OW(5599),
        ZW = OW(1283);
      const xW = new WeakMap;
      let lW = 0;

      function AW(WW) {
        let iW = xW.get(WW);
        return void 0 === iW && (iW = lW++, xW.set(WW, iW)), iW
      }

      function bW(WW) {
        let {
          piece: iW
        } = WW;
        return "space" === iW.kind ? (0, ZW.jsx)(ZW.Fragment, {
          children: iW.text
        }) : (0, ZW.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${iW.delayMs}ms`
          },
          children: (0, ZW.jsx)(LW.b, {
            text: "icon" === iW.kind ? `[[${iW.icon}]]` : iW.text
          })
        })
      }

      function jW(WW) {
        let {
          display: iW
        } = WW;
        const {
          selectedLanguage: OW
        } = (0, PW.B)(), mW = (0, NW.useMemo)((() => (0, tW.e)((0, tW.g)(iW).plan.pieces)), [iW, OW.code]);
        return (0, ZW.jsxs)("div", {
          className: EW()("Dialogue", {
            DialogueAnimateIn: !1 !== iW.animateIn
          }),
          children: [iW.speakerName && (0, ZW.jsx)(cW.d, {
            text: iW.speakerName,
            className: "DialogueSpeaker"
          }), (0, ZW.jsx)("p", {
            className: "DialogueLine",
            children: mW.map(((WW, iW) => 1 === WW.length && "space" === WW[0].kind ? WW[0].text : (0, ZW.jsx)("span", {
              className: "DialogueGlue",
              children: WW.map(((WW, iW) => (0, ZW.jsx)(bW, {
                piece: WW
              }, iW)))
            }, iW)))
          })]
        })
      }
      const UW = (0, NW.memo)((function() {
        const WW = (0, wW.e)("dialogue");
        return (0, ZW.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: WW && (0, ZW.jsx)(jW, {
            display: WW
          }, AW(WW))
        })
      }))
    },
    5455: (WW, iW, OW) => {
        OW.r(iW), OW.d(iW, {
          default: () => OP
        });
        var mW = OW(62),
          EW = OW(1089),
          NW = OW.n(EW),
          PW = OW(1607),
          LW = OW(1616),
          cW = OW(25),
          wW = OW(80),
          tW = OW(5460),
          ZW = OW(5467),
          xW = OW(5470),
          lW = OW(5038),
          AW = OW(1283);
        const bW = "/textures/docs/icons";

        function jW(WW) {
          let {
            name: iW,
            isTinted: OW,
            className: mW,
            style: EW
          } = WW;
          const PW = `${bW}/${iW}.png`;
          return OW ? (0, AW.jsxs)("span", {
            className: NW()("DocsPixelIcon", "Tinted", mW),
            "aria-hidden": "true",
            style: EW,
            children: [(0, AW.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${PW}")`,
                WebkitMaskImage: `url("${PW}")`
              }
            }), (0, AW.jsx)("img", {
              src: PW,
              alt: ""
            })]
          }) : (0, AW.jsx)("img", {
            className: NW()("DocsPixelIcon", mW),
            src: PW,
            alt: "",
            "aria-hidden": "true",
            style: EW
          })
        }
        const UW = 1500;

        function kW() {
          const [WW, iW] = (0, mW.useState)(null);
          (0, mW.useEffect)((() => {
            if (null === WW) return;
            const OW = setTimeout((() => {
              iW(null)
            }), UW);
            return () => {
              clearTimeout(OW)
            }
          }), [WW]);
          return [WW, WW => {
            (0, lW.b)(WW).then((() => {
              iW({
                text: WW,
                failed: !1
              })
            }), (OW => {
              console.error("Could not copy to the clipboard", OW), iW({
                text: WW,
                failed: !0
              })
            }))
          }]
        }

        function sW(WW) {
          let {
            text: iW,
            label: OW,
            className: mW
          } = WW;
          const [EW, PW] = kW(), LW = !1 === (null === EW || void 0 === EW ? void 0 : EW.failed);
          return (0, AW.jsxs)("button", {
            type: "button",
            className: NW()("DocsCopyButton", mW, {
              Copied: LW
            }),
            title: "Copy to clipboard",
            "aria-label": OW ? void 0 : `Copy ${iW}`,
            onClick: WW => {
              WW.stopPropagation(), PW(iW)
            },
            children: [(0, AW.jsx)(jW, {
              name: LW ? "check" : "copy"
            }), OW && (0, AW.jsx)("span", {
              children: LW ? "Copied" : null !== EW && void 0 !== EW && EW.failed ? "Copy failed" : OW
            })]
          })
        }
        tW.c.registerLanguage("javascript", ZW.e), tW.c.registerLanguage("typescript", xW.b);
        const MW = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          KW = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          SW = 24;

        function YW(WW) {
          let {
            code: iW,
            lang: OW,
            compact: EW = !1
          } = WW;
          const PW = (0, mW.useMemo)((() => function(WW, iW) {
              const OW = MW[iW];
              return OW ? tW.c.highlight(WW, {
                language: OW
              }).value : WW.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(iW, OW)), [iW, OW]),
            LW = iW.split("\n").length,
            cW = !EW && LW > SW + 6,
            [wW, ZW] = (0, mW.useState)(!1),
            xW = MW[OW];
          return (0, AW.jsxs)("div", {
            className: NW()("DocsCodeBlock", {
              Compact: EW,
              Collapsed: cW && !wW
            }),
            children: [!EW && (0, AW.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, AW.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: xW ? KW[xW] : "Text"
              }), (0, AW.jsx)(sW, {
                text: iW,
                label: "Copy"
              })]
            }), (0, AW.jsx)("pre", {
              children: (0, AW.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: PW
                }
              })
            }), cW && (0, AW.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": wW,
              onClick: () => {
                ZW(!wW)
              },
              children: [(0, AW.jsx)(jW, {
                name: wW ? "chevron-up" : "chevron-down"
              }), wW ? "Show less" : `Show all ${LW} lines`]
            })]
          })
        }
        var yW = OW(5479);
        var TW = OW(5488);
        const JW = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function hW(WW) {
          const iW = new Map;
          let OW, mW = [],
            EW = !1;
          const NW = () => {
            OW && iW.set(OW.name, OW.lines.join("\n").trimEnd())
          };
          for (const PW of WW.split("\n")) {
            const WW = PW.match(JW);
            EW || PW.startsWith("/*") ? (EW || (NW(), OW = void 0), mW.push(PW), EW = !PW.includes("*/")) : WW ? (NW(), OW = {
              name: WW[1],
              lines: [...mW, PW]
            }, mW = []) : OW && (PW.startsWith(" ") || PW.startsWith("\t") || /^[}\])|]/.test(PW)) ? OW.lines.push(PW) : OW && "" !== PW.trim() && (NW(), OW = void 0)
          }
          return NW(), iW
        }

        function HW(WW) {
          return "methods" === WW || "callbacks" === WW || "settings" === WW
        }
        const nW = {
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
              setterSnippet: (WW, iW) => `api.setClientOption(playerId, "${WW}", ${iW})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (WW, iW) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${WW}", ${iW})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (WW, iW) => `api.setMobSetting(mobId, "${WW}", ${iW})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (WW, iW) => `api.setVehicleSetting(vehicleId, "${WW}", ${iW})`
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
          uW = {
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

        function oW(WW) {
          return WW.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function dW(WW) {
          let iW = !1;
          return WW.split("\n").map((WW => (WW.startsWith("```") && (iW = !iW), !iW && /^#{3,} /.test(WW) ? WW.slice(1) : WW))).join("\n")
        }

        function eW(WW) {
          return "readme" === WW ? "getting-started" : oW(WW)
        }
        const vW = "## Glossary of Referenced Types";
        const gW = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...TW.b.flatMap((WW => {
            const iW = {
              id: WW.id,
              slug: eW(WW.id),
              title: WW.title,
              markdown: WW.content,
              ...nW[WW.id]
            };
            if ("readme" === WW.id) return function(WW) {
              const iW = WW.markdown.indexOf(vW),
                OW = WW.markdown.indexOf("\n```", iW),
                mW = WW.markdown.indexOf("\n```", OW + 1);
              if (-1 === iW || -1 === OW || -1 === mW) throw new Error(`Getting started has no "${vW}" section with a code block`);
              const EW = WW.markdown.slice(iW + 31, OW).trim(),
                NW = [...hW(WW.markdown.slice(WW.markdown.indexOf("\n", OW + 1) + 1, mW))].map((WW => {
                  let [iW, OW] = WW;
                  return `## ${iW}\n\n\`\`\`ts\n${OW}\n\`\`\`\n`
                })),
                PW = WW.markdown.slice(WW.markdown.indexOf("\n", mW + 1) + 1);
              return [{
                ...WW,
                markdown: `${WW.markdown.slice(0,iW)}${PW}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${EW}\n\n${NW.join("\n")}`
              }]
            }(iW);
            if ("howTo" === WW.id) {
              const {
                parent: WW,
                guides: OW
              } = function(WW) {
                const [iW, ...OW] = WW.markdown.split(/^(?=## )/m), mW = [iW], EW = [];
                for (const PW of OW) {
                  var NW;
                  const iW = PW.indexOf("\n"),
                    OW = PW.slice(3, iW).trim(),
                    LW = PW.slice(iW + 1);
                  if (!LW.includes("```")) {
                    mW.push(PW);
                    continue
                  }
                  const cW = null !== (NW = uW[OW]) && void 0 !== NW ? NW : {
                    icon: "lightbulb",
                    summary: `How to use ${OW.toLowerCase()} in World Code.`
                  };
                  EW.push({
                    id: `${WW.id}${OW.split(/[^A-Za-z0-9]+/).map((WW=>WW.charAt(0).toUpperCase()+WW.slice(1))).join("")}`,
                    slug: `${WW.slug}-${oW(OW)}`,
                    title: OW,
                    layout: "article",
                    sourceAnchor: (0, yW.s)(OW),
                    markdown: `# ${OW}\n\n${dW(LW)}`,
                    ...cW
                  })
                }
                return {
                  parent: {
                    ...WW,
                    markdown: mW.join(""),
                    childPageIds: EW.map((WW => WW.id))
                  },
                  guides: EW
                }
              }(iW);
              return [WW, ...OW]
            }
            return [iW]
          }))],
          DW = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...gW.filter((WW => void 0 !== WW.sourceAnchor)).map((WW => WW.id))]
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
          return gW.find((iW => iW.id === WW))
        }
        const pW = new Map;

        function fW(WW) {
          let iW = pW.get(WW.id);
          return iW || (iW = (0, yW.y)(WW.markdown, "changelog" === WW.layout ? 3 : 2), pW.set(WW.id, iW)), iW
        }

        function CW(WW, iW) {
          return fW(WW).sections.some((WW => WW.heading.anchor === iW || WW.blocks.some((WW => "heading" === WW.kind && WW.anchor === iW))))
        }

        function XW(WW) {
          const [iW, ...OW] = WW.replace(/^#/, "").split("-"), mW = gW.find((WW => WW.id === iW));
          if (!mW) return null;
          const EW = OW.length > 0 ? (0, yW.s)(OW.join("-")) : "";
          for (const PW of null !== (NW = mW.childPageIds) && void 0 !== NW ? NW : []) {
            var NW;
            const WW = VW(PW);
            if (WW.sourceAnchor === EW) return {
              page: WW,
              anchor: ""
            };
            if (CW(WW, EW)) return {
              page: WW,
              anchor: EW
            }
          }
          return {
            page: mW,
            anchor: EW
          }
        }
        const BW = {
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

        function qW(WW, iW) {
          let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const mW = iW.slug ? `${WW}/${iW.slug}` : WW;
          return OW ? `${mW}#${OW}` : mW
        }
        var RW = OW(5506);
        const GW = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          IW = new Set(["GameApi", "Console", "_TypeOf"]),
          aW = 4;

        function rW(WW) {
          let iW = WW.length;
          for (; iW > 0 && "" === WW[iW - 1].trim();) iW--;
          return WW.slice(0, iW)
        }

        function zW(WW) {
          var iW;
          const OW = rW(WW);
          if (null === (iW = OW.at(-1)) || void 0 === iW || !iW.trimEnd().endsWith("*/")) return {
            lines: OW,
            doc: ""
          };
          const mW = OW.findLastIndex((WW => WW.startsWith("/**")));
          return -1 === mW ? {
            lines: OW,
            doc: ""
          } : {
            lines: rW(OW.slice(0, mW)),
            doc: OW.slice(mW).join("\n")
          }
        }

        function FW(WW) {
          var iW;
          const OW = WW.split("\n"),
            mW = OW.flatMap(((WW, iW) => GW.test(WW) ? [iW] : []));
          let EW = zW(OW.slice(0, null !== (iW = mW[0]) && void 0 !== iW ? iW : OW.length)).doc;
          return mW.map(((WW, iW) => {
            var NW;
            const PW = zW(OW.slice(WW, null !== (NW = mW[iW + 1]) && void 0 !== NW ? NW : OW.length)),
              LW = {
                name: OW[WW].match(GW)[1],
                doc: EW,
                lines: PW.lines
              };
            return EW = PW.doc, LW
          }))
        }

        function QW(WW) {
          var iW;
          const OW = WW.match(/^readonly \[([\s\S]*)\]$/);
          return OW ? null !== (iW = OW[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== iW ? iW : [] : null
        }

        function Wi(WW) {
          if (!WW.startsWith("{") || !WW.endsWith("}")) return null;
          const iW = {
              keys: [],
              values: []
            },
            OW = WW => {
              const OW = WW.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              OW && (iW.keys.push(OW[1].startsWith('"') ? OW[1] : `"${OW[1]}"`), iW.values.push(OW[2].trim()))
            };
          let mW = 0,
            EW = "";
          for (const NW of WW.slice(1, -1)) "{[(".includes(NW) ? mW++ : "}])".includes(NW) && mW--, ";" === NW && 0 === mW ? (OW(EW), EW = "") : EW += NW;
          return OW(EW), iW
        }

        function ii(WW) {
          return WW.length > aW ? `\n\t| ${WW.join("\n\t| ")}` : WW.join(" | ")
        }

        function Oi(WW, iW) {
          const OW = function(WW, iW) {
            return WW.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((WW, OW) => {
              var mW;
              const EW = null === (mW = iW.get(OW)) || void 0 === mW ? void 0 : mW.object;
              return EW ? ii(EW.values) : WW
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((WW, OW) => {
              var mW, EW;
              const NW = null === (mW = iW.get(OW)) || void 0 === mW || null === (EW = mW.object) || void 0 === EW ? void 0 : EW.values.map(QW);
              return null !== NW && void 0 !== NW && NW.every((WW => null !== WW)) ? ii([...new Set(NW.flat())]) : WW
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((WW, OW) => {
              var mW;
              const EW = null === (mW = iW.get(OW)) || void 0 === mW ? void 0 : mW.members;
              return EW ? ii(EW) : WW
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((WW, OW) => {
              var mW;
              const EW = null === (mW = iW.get(OW)) || void 0 === mW ? void 0 : mW.object;
              return EW ? ii(EW.keys) : WW
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((WW, OW) => {
              var mW, EW;
              return null !== (mW = null === (EW = iW.get(OW)) || void 0 === EW ? void 0 : EW.text) && void 0 !== mW ? mW : WW
            }))
          }(WW.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), iW);
          return [WW.doc, OW].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function mi(WW) {
          const iW = FW(WW),
            OW = function(WW) {
              const iW = new Map,
                OW = WW.find((WW => "_TypeOf" === WW.name));
              let mW = null;
              const EW = () => {
                if (mW) {
                  const WW = mW.lines.join("\n");
                  iW.set(mW.name, {
                    text: WW,
                    members: QW(WW),
                    object: Wi(WW)
                  })
                }
              };
              for (const NW of OW.lines.slice(1, -1)) {
                const WW = NW.match(/^\t([\w$]+): (.+)$/);
                WW ? (EW(), mW = {
                  name: WW[1],
                  lines: [WW[2]]
                }) : mW && mW.lines.push(NW.replace(/^\t/, ""))
              }
              return EW(), iW
            }(iW),
            mW = new Map;
          for (const EW of iW) IW.has(EW.name) || mW.has(EW.name) || mW.set(EW.name, Oi(EW, OW));
          return mW
        }
        let Ei, Ni, Pi;

        function Li() {
          return Ni ??= function(WW) {
            const iW = FW(WW).find((WW => "GameApi" === WW.name)),
              OW = new Map,
              mW = iW.lines;
            for (let NW = 0; NW < mW.length; NW++) {
              var EW;
              if (!mW[NW].trimStart().startsWith("/**")) continue;
              const WW = NW;
              for (; NW < mW.length && !mW[NW].includes("*/");) NW++;
              const iW = null === (EW = mW[NW + 1]) || void 0 === EW ? void 0 : EW.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!iW) continue;
              let PW = null;
              const LW = [];
              let cW = "description",
                wW = !1;
              for (const OW of mW.slice(WW, NW + 1).join("\n").split("\n").map((WW => WW.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const WW = OW.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                WW ? (PW = WW[1].trim(), cW = "deprecation") : OW.startsWith("@") ? (cW = "otherTag", wW = !0) : "" === OW.trim() ? wW || (cW = "description", LW.push(OW)) : "deprecation" !== cW || /^[A-Z]/.test(OW.trim()) ? "otherTag" !== cW && (cW = "description", LW.push(OW)) : PW = `${PW} ${OW.trim()}`.trim()
              }
              OW.set(iW[1], {
                deprecation: PW,
                description: LW.join("\n").trim()
              })
            }
            return OW
          }(RW.default), Ni
        }

        function ci() {
          if (!Pi) {
            Pi = new Map;
            for (const WW of gW) {
              const iW = (0, yW.v)(fW(WW)).flatMap((WW => WW.blocks));
              for (const WW of (0, yW.j)(iW))
                if ("ts" === WW.lang || "typescript" === WW.lang)
                  for (const [iW, OW] of hW(WW.code)) Pi.set(iW, OW)
            }
            for (const [WW, iW] of(Ei ??= mi(RW.default), Ei)) Pi.has(WW) || Pi.set(WW, iW)
          }
          return Pi
        }
        const wi = {
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
        let ti;

        function Zi() {
          if (!ti) {
            ti = new Map;
            for (const WW of gW)
              if (HW(WW.layout))
                for (const iW of fW(WW).sections) ti.has(iW.heading.text) || ti.set(iW.heading.text, {
                  pageId: WW.id,
                  anchor: iW.heading.anchor
                })
          }
          return ti
        }

        function xi(WW) {
          const iW = WW.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return iW ? Zi().get(iW[1]) : void 0
        }
        const li = (0, mW.createContext)("/docs"),
          Ai = (0, mW.createContext)(null),
          bi = (0, mW.createContext)(!1),
          ji = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function Ui(WW) {
          const iW = WW.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return iW ? iW[1] : null
        }

        function ki(WW) {
          let {
            colour: iW
          } = WW;
          return (0, AW.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: iW
            },
            "aria-hidden": "true"
          })
        }

        function si(WW) {
          const iW = [];
          let OW = 0;
          for (const mW of WW.matchAll(ji)) iW.push(WW.slice(OW, mW.index), (0, AW.jsx)(ki, {
            colour: mW[0]
          }), mW[0]), OW = mW.index + mW[0].length;
          return iW.push(WW.slice(OW)), iW
        }

        function Mi(WW) {
          let {
            href: iW,
            children: OW
          } = WW;
          const EW = (0, mW.useContext)(li);
          if (iW.startsWith("#")) {
            const WW = XW(iW);
            if (WW) return (0, AW.jsx)(PW.b, {
              to: qW(EW, WW.page, WW.anchor),
              children: (0, AW.jsx)(bi.Provider, {
                value: !0,
                children: OW
              })
            })
          }
          return (0, AW.jsx)("a", {
            href: iW,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, AW.jsx)(bi.Provider, {
              value: !0,
              children: OW
            })
          })
        }

        function Ki(WW) {
          let {
            code: iW
          } = WW;
          const OW = (0, mW.useContext)(li);
          if ((0, mW.useContext)(bi)) return (0, AW.jsx)("code", {
            className: "DocsInlineCode",
            children: iW
          });
          if (ci().has(iW)) return (0, AW.jsx)(Ti, {
            type: iW
          });
          const EW = xi(iW);
          if (EW) return (0, AW.jsx)(PW.b, {
            className: "DocsInlineCode DocsSymbolLink",
            to: qW(OW, VW(EW.pageId), EW.anchor),
            children: iW
          });
          const NW = Ui(iW);
          return (0, AW.jsxs)("code", {
            className: "DocsInlineCode",
            children: [NW && (0, AW.jsx)(ki, {
              colour: NW
            }), iW]
          })
        }

        function Si(WW) {
          let {
            text: iW
          } = WW;
          const OW = [];
          let EW = 0;
          for (const mW of iW.matchAll(yW.e)) {
            mW.index > EW && OW.push(...si(iW.slice(EW, mW.index)));
            const [, WW, NW, PW, LW, cW] = mW;
            WW ? OW.push((0, AW.jsx)(Ki, {
              code: (0, yW.l)(WW, NW)
            })) : PW ? OW.push((0, AW.jsx)("strong", {
              children: (0, AW.jsx)(Si, {
                text: PW
              })
            })) : OW.push((0, AW.jsx)(Mi, {
              href: cW,
              children: (0, AW.jsx)(Si, {
                text: LW
              })
            })), EW = mW.index + mW[0].length
          }
          return EW < iW.length && OW.push(...si(iW.slice(EW))), (0, AW.jsx)(AW.Fragment, {
            children: OW.map(((WW, iW) => (0, AW.jsx)(mW.Fragment, {
              children: WW
            }, iW)))
          })
        }
        const Yi = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          yi = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function Ti(WW) {
          let {
            type: iW
          } = WW;
          const OW = ci(),
            EW = [];
          for (const mW of iW.trim().matchAll(Yi)) {
            const [WW, iW, NW, PW, LW] = mW;
            iW ? EW.push((0, AW.jsx)("span", {
              className: "DocsTypeString",
              children: WW
            })) : NW && OW.has(NW) ? EW.push((0, AW.jsx)(oi, {
              name: NW,
              definition: OW.get(NW)
            })) : NW ? EW.push((0, AW.jsx)("span", {
              className: yi.has(NW) ? "DocsTypeKeyword" : "DocsTypeName",
              children: WW
            })) : PW ? EW.push((0, AW.jsx)("span", {
              className: "DocsTypeNumber",
              children: WW
            })) : LW ? EW.push(" ") : EW.push((0, AW.jsx)("span", {
              className: "DocsTypePunctuation",
              children: WW
            }))
          }
          return (0, AW.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: EW.map(((WW, iW) => (0, AW.jsx)(mW.Fragment, {
              children: WW
            }, iW)))
          })
        }
        const Ji = 480,
          Hi = 6,
          ni = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let ui = 0;

        function oi(WW) {
          let {
            name: iW,
            definition: OW
          } = WW;
          const EW = (0, mW.useContext)(li),
            NW = wi[iW],
            LW = (0, mW.useRef)(null),
            cW = (0, mW.useRef)(null),
            tW = (0, mW.useRef)(null),
            [ZW, xW] = (0, mW.useState)(!1),
            [lW, bW] = (0, mW.useState)(null),
            UW = (0, mW.useRef)(),
            kW = (0, mW.useContext)(Ai),
            [sW] = (0, mW.useState)((() => "DocsTypePopover-" + ui++)),
            MW = () => {
              clearTimeout(UW.current), xW(!0)
            },
            KW = () => {
              clearTimeout(UW.current), UW.current = setTimeout((() => {
                xW(!1)
              }), 120)
            };
          return (0, mW.useEffect)((() => {
            if (!ZW) return;
            const WW = WW => {
              if ("Escape" === WW.key) {
                var iW, OW;
                if (null !== (iW = cW.current) && void 0 !== iW && iW.contains(document.activeElement)) null === (OW = LW.current) || void 0 === OW || OW.focus();
                xW(!1)
              }
            };
            return document.addEventListener("keydown", WW), () => {
              document.removeEventListener("keydown", WW)
            }
          }), [ZW]), (0, mW.useEffect)((() => () => {
            clearTimeout(UW.current)
          }), []), (0, mW.useLayoutEffect)((() => {
            if (!ZW || !LW.current || !cW.current) return void bW(null);
            const WW = LW.current.getBoundingClientRect(),
              iW = cW.current.offsetHeight,
              OW = Math.min(Ji, window.innerWidth - 32),
              mW = Math.min(Math.max(16, WW.left), window.innerWidth - OW - 16),
              EW = WW.bottom + Hi + iW < window.innerHeight;
            bW({
              left: mW,
              top: EW ? WW.bottom + Hi : Math.max(16, WW.top - Hi - iW)
            })
          }), [ZW]), (0, AW.jsxs)(AW.Fragment, {
            children: [(0, AW.jsx)("button", {
              type: "button",
              ref: LW,
              className: "DocsTypeLink",
              "aria-expanded": ZW,
              "aria-describedby": ZW ? sW : void 0,
              onMouseEnter: MW,
              onMouseLeave: KW,
              onFocus: MW,
              onBlur: KW,
              onKeyDown: WW => {
                "Tab" === WW.key && !WW.shiftKey && tW.current && (WW.preventDefault(), tW.current.focus())
              },
              onClick: MW,
              children: iW
            }), ZW && (0, wW.createPortal)((0, AW.jsxs)("span", {
              ref: cW,
              id: sW,
              className: "DocsTypePopover",
              role: "tooltip",
              style: lW ? {
                left: lW.left,
                top: lW.top,
                maxWidth: Ji
              } : {
                visibility: "hidden"
              },
              onMouseEnter: MW,
              onMouseLeave: KW,
              onFocus: MW,
              onBlur: KW,
              children: [(0, AW.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, AW.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: iW
                }), NW && (0, AW.jsxs)(PW.b, {
                  ref: tW,
                  className: "DocsTypePopoverLink",
                  to: qW(EW, VW(NW)),
                  onClick: () => {
                    xW(!1)
                  },
                  onKeyDown: WW => {
                    if ("Tab" === WW.key) {
                      var iW;
                      if (WW.preventDefault(), WW.shiftKey || !LW.current || ! function(WW, iW) {
                          const OW = [...document.querySelectorAll(ni)],
                            mW = OW.slice(OW.indexOf(WW) + 1).find((WW => WW.getClientRects().length > 0 && !(null !== iW && void 0 !== iW && iW.contains(WW))));
                          return null === mW || void 0 === mW || mW.focus(), void 0 !== mW
                        }(LW.current, cW.current)) null === (iW = LW.current) || void 0 === iW || iW.focus();
                      WW.shiftKey || xW(!1)
                    }
                  },
                  children: [VW(NW).title, (0, AW.jsx)(jW, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, AW.jsx)(YW, {
                lang: "ts",
                code: OW,
                compact: !0
              })]
            }), null !== kW && void 0 !== kW ? kW : document.body)]
          })
        }
        var di = OW(182),
          ei = OW(5510),
          vi = OW(5517),
          gi = OW(5525);
        const Di = {
          progressBar: {
            MN: 30,
            KN: .075,
            SN: 5,
            YN: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            yN: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            JN: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            hN: !0,
            scale: 3,
            rotation: 15,
            HN: !1
          },
          gravityBar: {
            MN: 30,
            uN: .25,
            oN: 3,
            dN: .8,
            gravity: 1,
            eN: 1.5,
            vN: 8,
            gN: 4,
            YN: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            VN: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            fN: 5,
            CN: 1200,
            XN: .15,
            BN: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var Vi = OW(327),
          fi = OW(2095);

        function Ci(WW) {
          return WW.startsWith("fa-")
        }
        const Xi = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          Bi = {
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

        function qi(WW) {
          return "string" === typeof WW ? "text" : "entityName" in WW || "translationKey" in WW ? "other" : (0, Vi.Cb)(WW) ? "progressBar" : (0, Vi.yb)(WW) ? "keyBinding" : "icon" in WW ? "icon" : "str" in WW && "string" === typeof WW.str ? "text" : "other"
        }
        const Ri = [{
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
          Gi = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...Ri],
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
                options: fi.i
              },
              isRequired: !0
            }, ...Ri],
            other: []
          };

        function Ii(WW) {
          return "string" === typeof WW ? {
            str: WW
          } : WW
        }

        function ai(WW, iW) {
          let OW = Ii(WW);
          for (const mW of iW) OW = OW && "object" === typeof OW ? OW[mW] : void 0;
          return OW
        }

        function ri(WW, iW, OW) {
          const mW = (WW, EW) => {
            var NW;
            const PW = iW[EW],
              LW = {
                ...WW
              };
            if (EW === iW.length - 1) return void 0 === OW ? delete LW[PW] : LW[PW] = OW, LW;
            const cW = mW(null !== (NW = WW[PW]) && void 0 !== NW ? NW : {}, EW + 1);
            return 0 === Object.keys(cW).length ? delete LW[PW] : LW[PW] = cW, LW
          };
          return function(WW) {
            const iW = Object.keys(WW);
            return "string" === typeof WW.str && 1 === iW.length ? WW.str : WW
          }(mW(Ii(WW), 0))
        }

        function zi(WW, iW) {
          const OW = qi(WW),
            mW = Gi[OW].find((WW => WW.path.join(".") === iW.join("."))),
            EW = null !== mW && void 0 !== mW && mW.isRequired && "other" !== OW ? ai(Bi[OW], iW) : void 0;
          return ri(WW, iW, EW)
        }

        function Fi(WW) {
          switch (qi(WW)) {
            case "text":
              return String(ai(WW, ["str"]));
            case "icon":
              return String(ai(WW, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(ai(WW,["progress"])))}%`;
            case "keyBinding":
              return String(ai(WW, ["action"]));
            case "other":
              return JSON.stringify(WW)
          }
        }
        const Qi = /^[A-Za-z_$][\w$]*$/;

        function WO(WW) {
          if (Array.isArray(WW)) return `[${WW.map(WO).join(", ")}]`;
          if (WW && "object" === typeof WW) {
            const iW = Object.entries(WW).map((WW => {
              let [iW, OW] = WW;
              return `${Qi.test(iW)?iW:JSON.stringify(iW)}: ${WO(OW)}`
            }));
            return 0 === iW.length ? "{}" : `{ ${iW.join(", ")} }`
          }
          return JSON.stringify(WW)
        }

        function iO(WW) {
          const iW = WW.map(WO),
            OW = `[${iW.join(", ")}]`;
          return OW.length <= 60 ? OW : `[\n${iW.map((WW=>`    ${WW},`)).join("\n")}\n]`
        }
        const OO = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function mO(WW) {
          let iW = "";
          for (let EW = 0; EW < WW.length; EW++) {
            const NW = WW[EW];
            if ("\\" === NW) {
              var OW;
              const mW = null !== (OW = WW[EW + 1]) && void 0 !== OW ? OW : "";
              iW += "'" === mW ? "'" : NW + mW, EW++
            } else if ('"' === NW) iW += '\\"';
            else {
              var mW;
              iW += null !== (mW = OO[NW]) && void 0 !== mW ? mW : NW
            }
          }
          return `"${iW}"`
        }

        function EO(WW) {
          if ("string" === typeof WW) return !0;
          if (!WW || "object" !== typeof WW || Array.isArray(WW)) return !1;
          const iW = WW;
          return "ProgressBar" === iW.type ? "number" === typeof iW.progress : "StyledKeyBinding" === iW.type ? fi.i.includes(iW.action) : "string" === typeof iW.icon || "string" === typeof iW.str || "string" === typeof iW.entityName || "string" === typeof iW.translationKey
        }

        function NO(WW) {
          let iW;
          try {
            iW = function(WW) {
              let iW = "",
                OW = "",
                mW = 0;
              const EW = () => {
                iW += OW.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), OW = ""
              };
              for (; mW < WW.length;) {
                const NW = WW.slice(mW).search(/["'`]|\/\//);
                if (-1 === NW) {
                  OW += WW.slice(mW);
                  break
                }
                OW += WW.slice(mW, mW + NW);
                const PW = mW + NW,
                  LW = WW[PW];
                if ("/" === LW) {
                  const iW = WW.indexOf("\n", PW);
                  mW = -1 === iW ? WW.length : iW;
                  continue
                }
                if (EW(), "`" === LW) throw new Error("Use quotes rather than template strings.");
                let cW = PW + 1;
                for (; cW < WW.length && WW[cW] !== LW;) cW += "\\" === WW[cW] ? 2 : 1;
                if (cW >= WW.length) throw new Error("A string is missing its closing quote.");
                const wW = WW.slice(PW + 1, cW);
                iW += mO(wW), mW = cW + 1
              }
              return EW(), JSON.parse(iW)
            }(WW.trim())
          } catch (mW) {
            return {
              parts: null,
              error: mW instanceof SyntaxError ? "This isn't a valid array yet." : mW.message
            }
          }
          if (!Array.isArray(iW)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const OW = iW.findIndex((WW => !EO(WW)));
          return -1 !== OW ? {
            parts: null,
            error: `Part ${OW+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: iW,
            error: null
          }
        }
        const PO = 1 / di.f.clientTicksPerSecond,
          LO = 700,
          cO = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          wO = {
            progressBar: Di.progressBar.yN,
            timedClick: Di.timedClick.icon,
            gravityBar: Di.gravityBar.icon,
            precisionBar: Di.precisionBar.icon,
            rhythmClick: Di.rhythmClick.icon
          };

        function tO(WW) {
          let {
            type: iW
          } = WW;
          const [OW, EW] = (0, mW.useState)("ready"), [PW, LW] = (0, mW.useState)(1), [cW, wW] = (0, mW.useState)(!0), tW = (0, mW.useRef)(null), ZW = (0, mW.useRef)(null), xW = (0, mW.useRef)(null), lW = (0, mW.useRef)(new Set), bW = (0, mW.useRef)(!1), UW = wO[iW], kW = (0, mW.useMemo)((() => ({
            getState: () => {
              var WW, iW;
              return null !== (WW = null === (iW = xW.current) || void 0 === iW ? void 0 : iW.getState()) && void 0 !== WW ? WW : cO
            },
            onFrame: WW => (lW.current.add(WW), () => {
              lW.current.delete(WW)
            })
          })), []);
          (0, mW.useEffect)((() => {
            const WW = tW.current,
              iW = ZW.current;
            if (!WW || !iW) return;
            const OW = new ResizeObserver((() => {
              LW(WW.clientWidth / Math.max(1, iW.offsetWidth))
            }));
            return OW.observe(WW), () => {
              OW.disconnect()
            }
          }), []), (0, mW.useEffect)((() => {
            var WW;
            if ("playing" !== OW) return;
            let mW = !1;
            const NW = new gi.f[iW](Di[iW], (WW => {
              mW = !0, wW(!1), EW(WW ? "succeeded" : "failed")
            }), (() => {}));
            xW.current = NW;
            let PW = 0,
              LW = performance.now(),
              cW = requestAnimationFrame((function WW(iW) {
                for (PW += Math.min(.25, (iW - LW) / 1e3), LW = iW; PW >= PO && !mW;) PW -= PO, NW.handleTick(PO);
                for (const OW of lW.current) OW();
                mW || (cW = requestAnimationFrame(WW))
              }));
            return null === (WW = tW.current) || void 0 === WW || WW.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(cW), NW.tearDown(), xW.current = null, bW.current = !1
            }
          }), [OW, iW]), (0, mW.useEffect)((() => {
            if (cW) return;
            const WW = setTimeout((() => {
              wW(!0)
            }), LO);
            return () => {
              clearTimeout(WW)
            }
          }), [cW]);
          const sW = WW => {
            var iW;
            "playing" === OW && bW.current !== WW && (bW.current = WW, null === (iW = xW.current) || void 0 === iW || iW.handleMouseInput(WW))
          };
          return (0, AW.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, AW.jsxs)("div", {
              ref: tW,
              className: NW()("DocsQteStage", {
                Playing: "playing" === OW
              }),
              tabIndex: "playing" === OW ? 0 : -1,
              role: "playing" === OW ? "button" : void 0,
              "aria-label": "playing" === OW ? `${iW} quick time event: click or press Space` : void 0,
              onPointerDown: WW => {
                0 === WW.button && sW(!0)
              },
              onPointerUp: () => {
                sW(!1)
              },
              onPointerLeave: () => {
                sW(!1)
              },
              onPointerCancel: () => {
                sW(!1)
              },
              onKeyDown: WW => {
                "playing" !== OW || " " !== WW.key && "Enter" !== WW.key || (WW.preventDefault(), sW(!0))
              },
              onKeyUp: WW => {
                "playing" !== OW || " " !== WW.key && "Enter" !== WW.key || sW(!1)
              },
              children: [(0, AW.jsx)("div", {
                ref: ZW,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${PW})`
                },
                children: "playing" === OW && (0, AW.jsx)(vi.e.Provider, {
                  value: kW,
                  children: (0, AW.jsx)(ei.e, {
                    qte: {
                      type: iW,
                      parameters: Di[iW]
                    }
                  })
                })
              }), "playing" !== OW && (0, AW.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== OW && (0, AW.jsxs)("div", {
                  className: NW()("DocsQteResult", "succeeded" === OW ? "Succeeded" : "Failed"),
                  children: [(0, AW.jsx)(jW, {
                    name: "succeeded" === OW ? "check" : "cross",
                    isTinted: !0
                  }), (0, AW.jsx)("span", {
                    children: "succeeded" === OW ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, AW.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !cW,
                  onClick: () => {
                    EW("playing")
                  },
                  children: [(0, AW.jsx)(jW, {
                    name: "ready" === OW ? "play" : "replay"
                  }), (0, AW.jsx)("span", {
                    children: "ready" === OW ? `Try ${iW}` : "Play again"
                  })]
                })]
              })]
            }), UW && !Ci(UW) && (0, AW.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, AW.jsx)("code", {
                children: UW
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function ZO(WW) {
          let {
            level: iW,
            text: OW,
            anchor: mW,
            className: EW
          } = WW;
          const PW = `h${Math.min(iW,6)}`;
          return (0, AW.jsxs)(PW, {
                id: mW,
                className: NW()("DocsHeading", EW),
                children: [(0, AW.jsx)(Si, {
                      text: OW
                    }), (0, AW.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${mW}`,
                        "aria-label": `Link to ${OW.replace(/`/g,"")}`,children:"#"})]})}function xO(WW){let{items:iW,ordered:OW}=WW;const mW=OW?"ol":"ul";return(0,AW.jsx)(mW,{className:"DocsList",children:iW.map(((WW,iW)=>(0,AW.jsxs)("li",{children:[(0,AW.jsx)(Si,{text:WW.text}),WW.children.length>0&&(0,AW.jsx)(xO,{items:WW.children,ordered:OW})]},iW)))})}function lO(WW){const iW=WW[0],OW="paragraph"===(null===iW||void 0===iW?void 0:iW.kind)?iW.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(OW)?"warning":/^\*\*(tip|prefer)/.test(OW)?"tip":"note"}function AO(WW){let{block:iW}=WW;switch(iW.kind){case"heading":return(0,AW.jsx)(ZO,{level:iW.level,text:iW.text,anchor:iW.anchor});case"paragraph":return(0,AW.jsx)("p",{children:(0,AW.jsx)(Si,{text:iW.text})});case"code":{const WW="ts"===iW.lang?function(WW){const iW=WW.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return iW&&Object.hasOwn(Di,iW[1])?iW[1]:null}(iW.code):null;return(0,AW.jsxs)(AW.Fragment,{children:[(0,AW.jsx)(YW,{code:iW.code,lang:iW.lang}),WW&&(0,AW.jsx)(tO,{type:WW})]})}case"table":return(0,AW.jsx)("div",{className:"DocsTableScroll",children:(0,AW.jsxs)("table",{className:"DocsTable",children:[(0,AW.jsx)("thead",{children:(0,AW.jsx)("tr",{children:iW.header.map(((WW,iW)=>(0,AW.jsx)("th",{children:(0,AW.jsx)(Si,{text:WW})},iW)))})}),(0,AW.jsx)("tbody",{children:iW.rows.map(((WW,iW)=>(0,AW.jsx)("tr",{children:WW.map(((WW,iW)=>(0,AW.jsx)("td",{children:(0,AW.jsx)(Si,{text:WW})},iW)))},iW)))})]})});case"list":return(0,AW.jsx)(xO,{items:iW.items,ordered:iW.ordered});case"quote":return(0,AW.jsx)("aside",{className:NW()("DocsCallout",lO(iW.blocks)),children:(0,AW.jsx)(bO,{blocks:iW.blocks})});case"rule":return(0,AW.jsx)("hr",{className:"DocsRule"})}}function bO(WW){let{blocks:iW}=WW;return(0,AW.jsx)(AW.Fragment,{children:iW.map(((WW,iW)=>(0,AW.jsx)(AO,{block:WW},iW)))})}var jO=OW(5495),UO=OW(5504);function kO(WW){return"blocks"===WW||"items"===WW}const sO=new Map;function MO(WW){let iW=sO.get(WW);return iW||(iW=function(WW){const iW={entries:[],legend:[],notes:[],examples:[]};let OW=!1;for(const NW of WW.split(/\r?\n/).slice(1)){if(NW.startsWith("#")){const WW=NW.replace(/^# ?/,""),mW=WW.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);mW?iW.legend.push({code:mW[1],meaning:mW[2],usage:mW[3].trim()}):/^Examples:/.test(WW.trim())?OW=!0:OW&&WW.trim()?iW.examples.push(WW.trim()):WW.trim()&&!/^\s/.test(WW)&&iW.notes.push(WW.trim());continue}const WW=NW.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var mW,EW;WW&&iW.entries.push({name:WW[1],variants:null!==(mW=null===(EW=WW[2])||void 0===EW?void 0:EW.split(","))&&void 0!==mW?mW:[]})}return iW}("blocks"===WW?jO:UO),sO.set(WW,iW)),iW}function KO(WW){let{className:iW,value:OW,placeholder:mW,label:EW,onChange:NW,count:PW,children:LW}=WW;return(0,AW.jsxs)("div",{className:iW,children:[(0,AW.jsx)(jW,{name:"magnifying-glass"}),(0,AW.jsx)("input",{type:"search",value:OW,placeholder:mW,"aria-label":EW,onChange:WW=>{NW(WW.target.value)}}),LW,PW&&(0,AW.jsxs)("span",{className:"DocsFilterCount",children:[PW.visible," of ",PW.total]})]})}var SO=OW(1391);function YO(WW){const iW=WW.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return iW?iW[2]:null}function yO(WW){return"paragraph"===WW.kind&&""===WW.text.trim()}function TO(WW){const iW={name:WW.heading.text,description:[],params:[],returns:null};let OW="description";for(const EW of WW.blocks)if(!yO(EW))if("heading"===EW.kind&&/^Parameters:?$/.test(EW.text))OW="params";else if("heading"===EW.kind&&/^Returns:?$/.test(EW.text))OW="returns",iW.returns={type:"",description:[]};else if("params"!==OW||"table"!==EW.kind){if("returns"===OW&&"paragraph"===EW.kind&&""===iW.returns.type){const WW=YO(EW.text);if(null!==WW){iW.returns.type=WW.replaceAll("\\|","|");continue}}"returns"===OW?iW.returns.description.push(EW):iW.description.push(EW)}else for(const[WW,OW,NW]of EW.rows){var mW;iW.params.push({name:WW,type:null!==(mW=YO(OW))&&void 0!==mW?mW:OW,description:null!==NW&&void 0!==NW?NW:""})}return iW}const JO=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function hO(WW){return WW.filter((WW=>!yO(WW)))}const HO=/^[\w][\w .'&!:()-]*$/,nO=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function uO(WW){var iW;if("code"===WW.kind&&"text"===WW.lang){const iW=WW.code.split("\n").map((WW=>WW.trim())).filter(Boolean);return iW.length>0&&iW.every((WW=>HO.test(WW)))?iW.map((WW=>({name:WW}))):null}return"paragraph"===WW.kind&&nO.test(WW.text.trim())?[...WW.text.matchAll(/`([ ^ `]+)` / g)].flatMap((WW => WW[1].split(/,\s*/).map((WW => ({
                              name: WW.trim()
                            }))))): "table" === WW.kind && null !== (iW = WW.header[0]) && void 0 !== iW && iW.startsWith("Song") ? WW.rows.map((WW => {
                              let [iW, OW] = WW;
                              return {
                                name: iW.replace(/`/g, ""),
                                caption: OW
                              }
                            })) : null
                          }

                          function oO(WW) {
                            const iW = [];
                            for (const OW of WW) {
                              const WW = uO(OW),
                                mW = iW.at(-1),
                                EW = "table" === OW.kind;
                              WW ? "names" === (null === mW || void 0 === mW ? void 0 : mW.kind) && mW.isSongs === EW ? mW.names.push(...WW) : iW.push({
                                kind: "names",
                                names: WW,
                                isSongs: EW
                              }) : iW.push({
                                kind: "block",
                                block: OW
                              })
                            }
                            return iW
                          }
                          const dO = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function eO(WW, iW) {
                            return `${dO[WW]}-${(0,yW.s)(iW)}`
                          }
                          const vO = new WeakMap;

                          function gO(WW, iW, OW) {
                            let mW = vO.get(iW);
                            if (!mW) {
                              mW = new Map;
                              const OW = new Set;
                              for (const EW of (0, yW.v)(iW)) {
                                const iW = oO(hO(EW.blocks)).map((iW => {
                                  if ("block" === iW.kind) return iW;
                                  return {
                                    kind: "names",
                                    names: iW.names.map((iW => {
                                      var mW, NW;
                                      const PW = eO(WW, iW.name);
                                      let LW = PW;
                                      for (let WW = 2; OW.has(LW); WW++) LW = `${PW}-${WW}`;
                                      return OW.add(LW), {
                                        ...iW,
                                        anchor: LW,
                                        heading: null !== (mW = null === (NW = EW.heading) || void 0 === NW ? void 0 : NW.text) && void 0 !== mW ? mW : ""
                                      }
                                    })),
                                    isSongs: iW.isSongs
                                  }
                                }));
                                mW.set(EW.blocks, iW)
                              }
                              vO.set(iW, mW)
                            }
                            const EW = mW.get(OW);
                            if (!EW) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return EW
                          }
                          const DO = "/textures/docs/skinPreviews",
                            VO = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var pO = OW(2918),
                            fO = OW(2937);

                          function CO(WW) {
                            return Object.hasOwn(pO.e, WW) ? pO.e[WW] : null
                          }
                          const XO = {
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
                            blendMode: fO.d.Standard
                          };

                          function BO(WW, iW, OW) {
                            return iW + (OW - iW) * WW()
                          }

                          function qO(WW, iW, OW) {
                            return WW + (iW - WW) * OW
                          }

                          function RO(WW) {
                            return WW.length > 0 && "timeFraction" in WW[0]
                          }

                          function GO(WW, iW) {
                            if (0 === WW.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!RO(WW.colorGradients)) {
                              const OW = WW.colorGradients,
                                {
                                  color: mW
                                } = OW[Math.floor(iW() * OW.length) % OW.length];
                              return [{
                                at: 0,
                                colour: [mW[0] / 255, mW[1] / 255, mW[2] / 255, 1]
                              }]
                            }
                            return [...WW.colorGradients].sort(((WW, iW) => WW.timeFraction - iW.timeFraction)).map((WW => {
                              var OW, mW, EW;
                              const NW = WW.minColor,
                                PW = null !== (OW = WW.maxColor) && void 0 !== OW ? OW : NW,
                                LW = iW(),
                                cW = [qO(NW[0], PW[0], LW) / 255, qO(NW[1], PW[1], LW) / 255, qO(NW[2], PW[2], LW) / 255, qO(null !== (mW = NW[3]) && void 0 !== mW ? mW : 1, null !== (EW = PW[3]) && void 0 !== EW ? EW : 1, LW)];
                              return {
                                at: WW.timeFraction,
                                colour: cW
                              }
                            }))
                          }

                          function IO(WW, iW, OW, mW) {
                            const EW = BO(mW, WW.minEmitPower, WW.maxEmitPower),
                              NW = iW => BO(mW, Math.min(WW.dir1[iW], WW.dir2[iW]), Math.max(WW.dir1[iW], WW.dir2[iW])) * EW,
                              PW = [...WW.velocityGradients].sort(((WW, iW) => WW.timeFraction - iW.timeFraction)).map((WW => ({
                                at: WW.timeFraction,
                                factor: BO(mW, WW.factor, WW.factor2)
                              })));
                            return {
                              pos: [BO(mW, iW[0], OW[0]), BO(mW, iW[1], OW[1]), BO(mW, iW[2], OW[2])],
                              dir: [NW(0), NW(1), NW(2)],
                              age: 0,
                              life: BO(mW, WW.minLifeTime, WW.maxLifeTime),
                              size: BO(mW, WW.minSize, WW.maxSize),
                              colours: GO(WW, mW),
                              velocityFactors: PW
                            }
                          }

                          function aO(WW, iW, OW, mW) {
                            if (iW < WW[0].at) return OW(Math.min(1, WW.length - 1));
                            for (let EW = 0; EW < WW.length - 1; EW++)
                              if (iW <= WW[EW + 1].at) {
                                const NW = WW[EW + 1].at - WW[EW].at;
                                return mW(OW(EW), OW(EW + 1), NW > 0 ? (iW - WW[EW].at) / NW : 1)
                              } return OW(WW.length - 1)
                          }

                          function rO(WW) {
                            return aO(WW.colours, WW.age / WW.life, (iW => WW.colours[iW].colour), ((WW, iW, OW) => [qO(WW[0], iW[0], OW), qO(WW[1], iW[1], OW), qO(WW[2], iW[2], OW), qO(WW[3], iW[3], OW)]))
                          }

                          function zO(WW, iW, OW) {
                            if (WW.age += OW, WW.age >= WW.life) return !1;
                            const mW = function(WW) {
                              return 0 === WW.velocityFactors.length ? 1 : aO(WW.velocityFactors, WW.age / WW.life, (iW => WW.velocityFactors[iW].factor), qO)
                            }(WW) * OW;
                            for (let NW = 0; NW < 3; NW++) {
                              var EW;
                              WW.pos[NW] += WW.dir[NW] * mW, WW.dir[NW] += (null !== (EW = iW[NW]) && void 0 !== EW ? EW : 0) * OW
                            }
                            return !0
                          }

                          function FO(WW) {
                            return String(Math.round(1e6 * WW) / 1e6)
                          }

                          function QO(WW) {
                            return `[${WW.map(FO).join(", ")}]`
                          }

                          function Wm(WW, iW) {
                            const OW = `${iW}    `;
                            return `[\n${(RO(WW)?WW.map((WW=>{const iW=[`${OW}    timeFraction: ${FO(WW.timeFraction)},`,`${OW}    minColor: ${QO(WW.minColor)},`];return WW.maxColor&&iW.push(`${OW}    maxColor: ${QO(WW.maxColor)},`),`${OW}{\n${iW.join("\n")}\n${OW}},`})):WW.map((WW=>`
                            $ {
                              OW
                            } {
                              color: $ {
                                QO(WW.color)
                              }
                            }, `))).join("\n")}\n${iW}]`
                          }
                          const im = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            Om = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const mm = .6;

                          function Em(WW, iW) {
                            return `${iW?"song":"sound"}:${WW}`
                          }
                          let Nm = {
                              track: null,
                              volume: mm
                            },
                            Pm = null,
                            Lm = 0,
                            cm = 0;
                          const wm = new Set;

                          function tm(WW) {
                            Nm = {
                              ...Nm,
                              ...WW
                            }, wm.forEach((WW => {
                              WW()
                            }))
                          }

                          function Zm(WW) {
                            Nm.track && tm({
                              track: {
                                ...Nm.track,
                                ...WW
                              }
                            })
                          }

                          function xm(WW) {
                            const [iW, OW] = (0, mW.useState)((() => WW(Nm))), EW = (0, mW.useRef)(WW);
                            return EW.current = WW, (0, mW.useEffect)((() => {
                              const WW = () => {
                                OW((() => EW.current(Nm)))
                              };
                              return wm.add(WW), WW(), () => {
                                wm.delete(WW)
                              }
                            }), []), iW
                          }

                          function lm() {
                            Lm++;
                            const WW = Pm;
                            Pm = null, null === WW || void 0 === WW || WW.stop()
                          }

                          function Am(WW, iW) {
                            let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            lm();
                            const EW = Lm,
                              {
                                track: NW
                              } = Nm,
                              PW = NW && NW.name === WW && NW.isSong === iW ? NW.duration : 0;
                            cm = mW, tm({
                              track: {
                                name: WW,
                                isSong: iW,
                                status: "loading",
                                duration: PW
                              }
                            }), Promise.all([OW.e(252), OW.e(284)]).then((() => OW(41336))).then((OW => {
                              let {
                                playDocsSound: NW
                              } = OW;
                              EW === Lm && (Pm = NW(WW, iW, Nm.volume, mW, {
                                onPlay: WW => {
                                  EW === Lm && Zm({
                                    status: "playing",
                                    duration: WW
                                  })
                                },
                                onEnd: WW => {
                                  var iW, OW;
                                  EW === Lm && (Pm = null, WW ? tm({
                                    track: null
                                  }) : (cm = null !== (iW = null === (OW = Nm.track) || void 0 === OW ? void 0 : OW.duration) && void 0 !== iW ? iW : 0, Zm({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((iW => {
                              console.error(`Could not play docs sound ${WW}`, iW), EW === Lm && tm({
                                track: null
                              })
                            }))
                          }

                          function bm() {
                            const {
                              track: WW
                            } = Nm;
                            if (!WW) return;
                            if ("playing" === WW.status && Pm) return cm = Pm.Vk(), Pm.pause(), void Zm({
                              status: "paused"
                            });
                            if ("loading" === WW.status) return lm(), void Zm({
                              status: "paused"
                            });
                            if (Pm) return void Pm.resume();
                            const iW = WW.duration > 0 && cm >= WW.duration - .05;
                            Am(WW.name, WW.isSong, iW ? 0 : cm)
                          }

                          function jm() {
                            var WW;
                            return Pm && "playing" === (null === (WW = Nm.track) || void 0 === WW ? void 0 : WW.status) ? Pm.Vk() : cm
                          }

                          function Um(WW) {
                            var iW;
                            null === (iW = Pm) || void 0 === iW || iW.setVolume(WW), tm({
                              volume: WW
                            })
                          }

                          function km() {
                            lm(), cm = 0, tm({
                              track: null
                            })
                          }
                          const sm = (0, mW.createContext)(null);
                          let Mm = null;

                          function Km() {
                            const [WW, iW] = (0, mW.useState)(null);
                            return (0, mW.useEffect)((() => {
                              let WW = !1;
                              return Mm ??= Promise.all([OW.e(85), OW.e(89), OW.e(86), OW.e(87), OW.e(88), OW.e(124), OW.e(36), OW.e(258)]).then((() => OW(41327))), Mm.then((OW => {
                                WW || iW(OW)
                              }), (WW => {
                                console.error("Could not load the docs gallery's textures", WW), Mm = null
                              })), () => {
                                WW = !0
                              }
                            }), []), WW
                          }
                          const Sm = 24,
                            Ym = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function ym(WW, iW) {
                            const OW = "skins" === WW ? function(WW, iW) {
                              const OW = VO.find((iW => WW.startsWith(iW.heading)));
                              return OW ? function(WW, iW) {
                                return `${WW}-${iW}`
                              }(OW.prefix, iW) : null
                            }(iW.heading, iW.name) : null;
                            return null === OW ? null : `${DO}/${OW}.webp`
                          }

                          function Tm(WW) {
                            let {
                              kind: iW,
                              entry: OW,
                              assets: EW,
                              renderedUrl: PW
                            } = WW;
                            const {
                              name: LW
                            } = OW, [cW, wW] = (0, mW.useState)(!1);
                            if ("icons" === iW && Ci(LW)) return (0, AW.jsx)(SO.c, {
                              className: "DocsTileIcon",
                              name: LW
                            });
                            let tW = null;
                            var ZW;
                            if ("icons" === iW) tW = null !== (ZW = null === EW || void 0 === EW ? void 0 : EW.getIngameIconUrl(LW)) && void 0 !== ZW ? ZW : null;
                            else if ("particles" === iW) {
                              var xW, lW, bW;
                              tW = null !== (xW = null === EW || void 0 === EW ? void 0 : EW.getParticleTextureUrl(null !== (lW = null === (bW = CO(LW)) || void 0 === bW ? void 0 : bW.texture) && void 0 !== lW ? lW : LW)) && void 0 !== xW ? xW : null
                            } else "skins" === iW && (tW = null !== PW && void 0 !== PW ? PW : Ym.test(LW) ? `/textures/charSkins/previews/${LW}_preview.png` : null);
                            return !tW || cW ? (0, AW.jsx)(jW, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === iW ? "person" : "image"
                            }) : (0, AW.jsx)("img", {
                              className: NW()("DocsTileImage", {
                                Pixelated: "skins" !== iW
                              }),
                              src: tW,
                              srcSet: tW === PW ? `${tW} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${tW}`), wW(!0)
                              }
                            })
                          }

                          function Jm(WW) {
                            let {
                              entry: iW,
                              isSong: OW
                            } = WW;
                            const mW = xm((WW => {
                                let {
                                  track: mW
                                } = WW;
                                return (null === mW || void 0 === mW ? void 0 : mW.name) === iW.name && mW.isSong === OW ? mW.status : null
                              })),
                              EW = null !== mW && "paused" !== mW;
                            return (0, AW.jsxs)("button", {
                              type: "button",
                              id: iW.anchor,
                              className: NW()("DocsSoundTile", {
                                Playing: EW
                              }),
                              "data-docs-track": Em(iW.name, OW),
                              "aria-label": EW ? `Pause ${iW.name}` : `Play ${iW.name}`,
                              onClick: () => {
                                null !== mW ? bm() : Am(iW.name, OW)
                              },
                              children: [(0, AW.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, AW.jsx)(jW, {
                                  name: EW ? "pause" : "play"
                                })
                              }), (0, AW.jsx)("code", {
                                className: "DocsSoundName",
                                children: iW.name
                              }), iW.caption && (0, AW.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: iW.caption
                              })]
                            })
                          }

                          function hm(WW) {
                            let {
                              kind: iW,
                              names: OW,
                              isSongs: EW
                            } = WW;
                            const PW = Km(),
                              [LW, cW] = kW(),
                              wW = !1 === (null === LW || void 0 === LW ? void 0 : LW.failed) ? LW.text : null,
                              tW = (0, mW.useContext)(sm),
                              [ZW, xW] = (0, mW.useState)(""),
                              lW = ZW.trim().toLowerCase(),
                              bW = lW ? OW.filter((WW => WW.name.toLowerCase().includes(lW))) : OW;
                            return (0, AW.jsxs)("div", {
                              className: "DocsGallery",
                              children: [OW.length > Sm && (0, AW.jsx)(KO, {
                                className: "DocsGalleryFilter",
                                value: ZW,
                                placeholder: `Filter ${OW.length} names\u2026`,
                                label: "Filter names",
                                onChange: xW,
                                count: lW ? {
                                  visible: bW.length,
                                  total: OW.length
                                } : null
                              }), (0, AW.jsx)("div", {
                                className: NW()("DocsGalleryGrid", `Kind-${iW}`, {
                                  Songs: EW
                                }),
                                children: bW.map((WW => {
                                  if ("sounds" === iW) return (0, AW.jsx)(Jm, {
                                    entry: WW,
                                    isSong: EW
                                  }, WW.anchor);
                                  if (tW && "particles" === iW && CO(WW.name)) return (0, AW.jsxs)("button", {
                                    type: "button",
                                    id: WW.anchor,
                                    className: NW()("DocsTile Previewable", {
                                      Copied: wW === WW.name
                                    }),
                                    title: `Play "${WW.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      tW(WW.name), cW(WW.name)
                                    },
                                    children: [(0, AW.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, AW.jsx)(Tm, {
                                        kind: iW,
                                        entry: WW,
                                        assets: PW,
                                        renderedUrl: null
                                      }), (0, AW.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, AW.jsx)(jW, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, AW.jsx)("span", {
                                      className: "DocsTileName",
                                      children: wW === WW.name ? "Copied!" : WW.name
                                    })]
                                  }, WW.anchor);
                                  const OW = ym(iW, WW);
                                  return (0, AW.jsxs)("button", {
                                    type: "button",
                                    id: WW.anchor,
                                    className: NW()("DocsTile", {
                                      Copied: wW === WW.name
                                    }),
                                    title: `Copy "${WW.name}"`,
                                    onClick: () => {
                                      cW(WW.name)
                                    },
                                    children: [(0, AW.jsx)("span", {
                                      className: NW()("DocsTilePreview", {
                                        Rendered: null !== OW
                                      }),
                                      children: (0, AW.jsx)(Tm, {
                                        kind: iW,
                                        entry: WW,
                                        assets: PW,
                                        renderedUrl: OW
                                      })
                                    }), (0, AW.jsx)("span", {
                                      className: "DocsTileName",
                                      children: wW === WW.name ? "Copied!" : WW.name
                                    })]
                                  }, WW.anchor)
                                }))
                              })]
                            })
                          }

                          function Hm(WW) {
                            let {
                              kind: iW,
                              content: OW,
                              blocks: mW
                            } = WW;
                            return (0, AW.jsx)(AW.Fragment, {
                              children: gO(iW, OW, mW).map(((WW, OW) => "block" === WW.kind ? (0, AW.jsx)(AO, {
                                block: WW.block
                              }, OW) : (0, AW.jsx)(hm, {
                                kind: iW,
                                names: WW.names,
                                isSongs: WW.isSongs
                              }, OW)))
                            })
                          }
                          const nm = [{
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

                          function um(WW) {
                            let {
                              cards: iW = nm,
                              label: OW = "Start here"
                            } = WW;
                            const EW = (0, mW.useContext)(li);
                            return (0, AW.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": OW,
                              children: iW.map((WW => {
                                let {
                                  pageId: iW,
                                  countNoun: OW
                                } = WW;
                                const mW = VW(iW);
                                return (0, AW.jsxs)(PW.b, {
                                  to: qW(EW, mW),
                                  className: "DocsLandingCard",
                                  children: [(0, AW.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, AW.jsx)(jW, {
                                      name: mW.icon
                                    })
                                  }), (0, AW.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: mW.title
                                  }), (0, AW.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: mW.summary
                                  }), OW && (0, AW.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [fW(mW).sections.length, " ", OW]
                                  })]
                                }, iW)
                              }))
                            })
                          }
                          const om = 240;

                          function dm(WW) {
                            let {
                              faces: iW
                            } = WW;
                            return (0, AW.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, AW.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${iW.top}")`
                                }
                              }), (0, AW.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${iW.left}")`
                                }
                              }), (0, AW.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${iW.right}")`
                                }
                              })]
                            })
                          }

                          function em(WW) {
                            let {
                              src: iW
                            } = WW;
                            const [OW, EW] = (0, mW.useState)(!1);
                            return OW ? null : (0, AW.jsx)("img", {
                              src: iW,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${iW}`), EW(!0)
                              }
                            })
                          }

                          function gm(WW) {
                            let {
                              kind: iW
                            } = WW;
                            const OW = MO(iW),
                              EW = Km(),
                              PW = (0, LW.u)(),
                              [cW, wW] = (0, mW.useState)(""),
                              [tW, ZW] = (0, mW.useState)(null),
                              [xW, lW] = (0, mW.useState)(om),
                              [bW, UW] = (0, mW.useState)(null),
                              kW = (0, mW.useRef)(null),
                              MW = cW.trim().toLowerCase();
                            (0, mW.useEffect)((() => {
                              const WW = (0, yW.o)(PW.hash),
                                mW = OW.entries.find((OW => eO(iW, OW.name) === WW));
                              if (mW) kW.current = mW.name, wW(mW.name), ZW(null), UW(mW.name);
                              else if (null !== kW.current) {
                                const WW = kW.current;
                                kW.current = null, wW((iW => iW === WW ? "" : iW)), UW(null)
                              }
                            }), [OW, iW, PW.hash, PW.key]), (0, mW.useEffect)((() => {
                              var WW;
                              null !== bW && (null === (WW = document.getElementById(eO(iW, bW))) || void 0 === WW || WW.scrollIntoView({
                                block: "center"
                              }))
                            }), [iW, bW]);
                            const KW = OW.entries.filter((WW => (!MW || WW.name.toLowerCase().includes(MW)) && (!tW || WW.variants.includes(tW))));
                            return (0, AW.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [OW.notes.length > 0 && (0, AW.jsx)("div", {
                                className: "DocsProse",
                                children: OW.notes.map((WW => (0, AW.jsx)("p", {
                                  children: WW
                                }, WW)))
                              }), OW.legend.length > 0 && (0, AW.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, AW.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, AW.jsx)("thead", {
                                    children: (0, AW.jsxs)("tr", {
                                      children: [(0, AW.jsx)("th", {
                                        children: "Code"
                                      }), (0, AW.jsx)("th", {
                                        children: "Variant"
                                      }), (0, AW.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, AW.jsx)("tbody", {
                                    children: OW.legend.map((WW => (0, AW.jsxs)("tr", {
                                      children: [(0, AW.jsx)("td", {
                                        children: (0, AW.jsx)("button", {
                                          type: "button",
                                          className: NW()("DocsVariantChip", {
                                            Active: tW === WW.code
                                          }),
                                          "aria-pressed": tW === WW.code,
                                          title: `Show only ${iW} with ${WW.meaning} variants`,
                                          onClick: () => {
                                            ZW(tW === WW.code ? null : WW.code)
                                          },
                                          children: WW.code
                                        })
                                      }), (0, AW.jsx)("td", {
                                        children: WW.meaning
                                      }), (0, AW.jsx)("td", {
                                        children: (0, AW.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: WW.usage
                                        })
                                      })]
                                    }, WW.code)))
                                  })]
                                })
                              }), OW.examples.length > 0 && (0, AW.jsx)(YW, {
                                lang: "text",
                                code: OW.examples.join("\n")
                              }), (0, AW.jsx)(KO, {
                                className: "DocsFilterBar",
                                value: cW,
                                placeholder: `Search ${OW.entries.length} ${iW}\u2026`,
                                label: `Search ${iW}`,
                                onChange: WW => {
                                  wW(WW), lW(om)
                                },
                                count: MW || tW ? {
                                  visible: KW.length,
                                  total: OW.entries.length
                                } : null,
                                children: tW && (0, AW.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    ZW(null)
                                  },
                                  children: [tW, " ", (0, AW.jsx)(jW, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, AW.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: KW.slice(0, xW).map((WW => {
                                  const OW = "blocks" === iW ? null === EW || void 0 === EW ? void 0 : EW.getBlockFaces(WW.name) : null,
                                    mW = EW && !OW ? EW.getItemTextureUrl(WW.name) : null;
                                  return (0, AW.jsxs)("div", {
                                    id: eO(iW, WW.name),
                                    className: NW()("DocsCatalogueTile", {
                                      Linked: WW.name === bW
                                    }),
                                    children: [(0, AW.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [OW && (0, AW.jsx)(dm, {
                                        faces: OW
                                      }), mW && (0, AW.jsx)(em, {
                                        src: mW
                                      })]
                                    }), (0, AW.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: WW.name
                                    }), WW.variants.length > 0 && (0, AW.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: WW.variants.map((WW => (0, AW.jsx)("span", {
                                        children: WW
                                      }, WW)))
                                    }), (0, AW.jsx)(sW, {
                                      text: WW.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, WW.name)
                                }))
                              }), KW.length > xW && (0, AW.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  lW(KW.length)
                                },
                                children: ["Show all ", KW.length]
                              }), 0 === KW.length && (0, AW.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", iW, " match."]
                              })]
                            })
                          }
                          var Dm = OW(5582),
                            Vm = OW(1685);
                          const pm = .95 * Dm.c;

                          function fm(WW) {
                            return /^\s*```/.test(WW)
                          }

                          function Cm(WW, iW) {
                            const OW = [
                              []
                            ];
                            let mW = !1;
                            for (const EW of WW.split("\n")) !mW && iW(EW) && OW.at(-1).length > 0 && OW.push([]), fm(EW) && (mW = !mW), OW.at(-1).push(EW);
                            return OW.map((WW => WW.join("\n").trim())).filter(Boolean)
                          }

                          function Xm(WW, iW) {
                            const OW = `${"#".repeat(iW)} `,
                              mW = [];
                            let EW = !1;
                            for (const NW of WW.split("\n")) fm(NW) ? EW = !EW : !EW && NW.startsWith(OW) && mW.push(NW.slice(OW.length).trim());
                            return mW
                          }

                          function Bm(WW) {
                            return WW.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class qm {
                            constructor(WW, iW) {
                              this.origin = iW, this.pages = void 0, this.partPaths = new Map;
                              const OW = WW.map((WW => {
                                const iW = iW => this.resolveLinks(WW, iW).length,
                                  OW = function(WW, iW) {
                                    const OW = WW.map((WW => iW(WW.markdown) + 2)),
                                      mW = OW.reduce(((WW, iW) => WW + iW), 0),
                                      EW = mW / Math.ceil(mW / pm),
                                      NW = [];
                                    let PW = 0;
                                    return WW.forEach(((WW, iW) => {
                                      const mW = OW[iW];
                                      (0 === NW.length || PW + mW > pm || PW + mW / 2 > EW) && (NW.push([]), PW = 0), NW.at(-1).push(WW), PW += mW
                                    })), NW
                                  }(function(WW, iW) {
                                    return Cm(WW, (WW => WW.startsWith("## "))).flatMap((WW => {
                                      var OW;
                                      const mW = null !== (OW = Xm(WW, 2)[0]) && void 0 !== OW ? OW : "";
                                      if (iW(WW) <= pm) return [{
                                        markdown: WW,
                                        section: mW
                                      }];
                                      let EW = !1,
                                        NW = "";
                                      return Cm(WW, (WW => {
                                        const iW = EW && "" !== WW.trim();
                                        return EW = "" === WW.trim(), iW
                                      })).map((WW => {
                                        var iW;
                                        const OW = Xm(WW, 3),
                                          EW = WW.startsWith("### ") ? OW[0] : NW;
                                        return NW = null !== (iW = OW.at(-1)) && void 0 !== iW ? iW : NW, {
                                          markdown: WW,
                                          section: mW || EW
                                        }
                                      }))
                                    }))
                                  }(Bm(WW), iW), iW);
                                return {
                                  page: WW,
                                  groups: OW.length > 1 ? OW : []
                                }
                              }));
                              for (const {
                                  page: mW,
                                  groups: EW
                                }
                                of OW) EW.forEach(((WW, iW) => {
                                const OW = (0, Dm.D)(mW.slug, iW);
                                for (const EW of WW.flatMap((WW => [...Xm(WW.markdown, 2), ...Xm(WW.markdown, 3)]))) {
                                  const WW = `${mW.id}#${(0,yW.s)(EW)}`;
                                  this.partPaths.has(WW) || this.partPaths.set(WW, OW)
                                }
                              }));
                              this.pages = OW.map((WW => {
                                let {
                                  page: iW,
                                  groups: OW
                                } = WW;
                                return {
                                  page: iW,
                                  path: (0, Dm.A)(iW.slug),
                                  markdown: `# ${iW.title}\n\n${this.resolveLinks(iW,Bm(iW))}\n`,
                                  parts: OW.map(((WW, mW) => this.renderPart(iW, WW, mW, OW.length)))
                                }
                              }))
                            }
                            url(WW) {
                              return `${this.origin}${WW}`
                            }
                            getPage(WW) {
                              return this.pages.find((iW => iW.page.id === WW))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((WW => (WW.parts.length > 0 ? WW.parts : [{
                                path: WW.path,
                                label: "",
                                markdown: WW.markdown
                              }]).filter((WW => WW.markdown.length > Dm.c))))
                            }
                            markdownUrl(WW, iW) {
                              const OW = iW && this.partPaths.get(`${WW.id}#${iW}`) || (0, Dm.A)(WW.slug);
                              return this.url(iW ? `${OW}#${iW}` : OW)
                            }
                            resolveLinks(WW, iW) {
                              return iW.replace(/\]\((#[^)]+)\)/g, ((iW, OW) => {
                                var mW;
                                const EW = null !== (mW = XW(OW)) && void 0 !== mW ? mW : this.samePageTarget(WW, OW);
                                return EW ? `](${this.markdownUrl(EW.page,EW.anchor)})` : iW
                              }))
                            }
                            samePageTarget(WW, iW) {
                              const OW = (0, yW.s)(iW.slice(1));
                              return CW(WW, OW) ? {
                                page: WW,
                                anchor: OW
                              } : null
                            }
                            renderPart(WW, iW, OW, mW) {
                              const EW = function(WW) {
                                  const iW = WW.map((WW => WW.section)).filter(Boolean);
                                  if (0 === iW.length) return "";
                                  const OW = iW[0],
                                    mW = iW.at(-1);
                                  return OW === mW ? OW : `${OW} to ${mW}`
                                }(iW),
                                NW = iW.map((WW => WW.markdown)).join("\n\n"),
                                PW = EW ? `It covers ${EW}. ` : "",
                                LW = `Part ${OW+1} of ${mW} of [${WW.title}](${this.url((0,Dm.A)(WW.slug))}). ${PW}[llms.txt](${this.url(Dm.k)}) lists every part.`;
                              return {
                                path: (0, Dm.D)(WW.slug, OW),
                                label: EW,
                                markdown: `# ${WW.title}, part ${OW+1} of ${mW}\n\n${LW}\n\n${this.resolveLinks(WW,NW)}\n`
                              }
                            }
                            llmsTxt(WW) {
                              const iW = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${Rm(Dm.c)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const OW of DW) {
                                iW.push("", `## ${OW.title}`, "");
                                for (const WW of OW.pageIds) {
                                  const OW = this.getPage(WW),
                                    {
                                      page: mW,
                                      parts: EW
                                    } = OW,
                                    NW = `About ${Rm(OW.markdown.length)} tokens${EW.length>0?`, in ${EW.length} parts:`:"."}`;
                                  iW.push(`- [${mW.title}](${this.url(OW.path)}): ${mW.summary} ${NW}`), EW.forEach(((WW, OW) => {
                                    iW.push(`  - [Part ${OW+1}${WW.label?`: ${WW.label}`:""}](${this.url(WW.path)})`)
                                  }))
                                }
                              }
                              return iW.push("", "## Optional", "", `- [Every page in one file](${this.url(Dm.g)}): About ${Rm(WW.length)} tokens, for a model with a large context window.`, ""), iW.join("\n")
                            }
                            llmsFullTxt() {
                              return DW.flatMap((WW => WW.pageIds.map((WW => this.getPage(WW).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const WW = this.llmsFullTxt(),
                                iW = this.llmsTxt(WW),
                                OW = new Map([
                                  [Dm.s, iW],
                                  [Dm.k, iW],
                                  [Dm.g, WW]
                                ]);
                              for (const mW of this.pages) {
                                OW.set(mW.path, mW.markdown);
                                for (const WW of mW.parts) OW.set(WW.path, WW.markdown)
                              }
                              return OW
                            }
                          }

                          function Rm(WW) {
                            return `${Math.max(1,Math.round(WW/4e3))}K`
                          }
                          let Gm = null;

                          function Im() {
                            return Gm ??= new qm(gW, Vm.d), Gm
                          }
                          var am = OW(5587);
                          const rm = [am.f, am.k];

                          function zm(WW) {
                            return Im().getPage(WW.id).parts.length > 0 ? `Read ${Dm.o}, then the parts of the Bloxd Code API's ${WW.title} page it lists, so I can ask questions about it.` : `Read ${Vm.d}${(0,Dm.A)(WW.slug)} so I can ask questions about it. ${am.i}`
                          }

                          function Fm(WW) {
                            let {
                              page: iW
                            } = WW;
                            const [OW, mW] = kW();
                            return (0, AW.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, AW.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  mW(Im().getPage(iW.id).markdown)
                                },
                                children: [(0, AW.jsx)(jW, {
                                  name: !1 === (null === OW || void 0 === OW ? void 0 : OW.failed) ? "check" : "copy"
                                }), (0, AW.jsx)("span", {
                                  children: OW ? OW.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), rm.map((WW => (0, AW.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, am.e)(WW, zm(iW)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, AW.jsx)(jW, {
                                  name: "external-link"
                                }), (0, AW.jsxs)("span", {
                                  children: ["Open in ", WW.name]
                                })]
                              }, WW.name)))]
                            })
                          }

                          function Qm(WW) {
                            return `#${[0,1,2].map((iW=>Math.round(Math.min(255,Math.max(0,WW[iW]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function WE(WW) {
                            return [parseInt(WW.slice(1, 3), 16), parseInt(WW.slice(3, 5), 16), parseInt(WW.slice(5, 7), 16)]
                          }

                          function iE(WW) {
                            let {
                              label: iW,
                              min: OW,
                              max: mW,
                              step: EW,
                              low: NW,
                              high: PW,
                              onChange: LW
                            } = WW;
                            return (0, AW.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, AW.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, AW.jsx)("span", {
                                  children: iW
                                }), (0, AW.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: NW === PW ? NW : `${NW}\u2013${PW}`
                                })]
                              }), (0, AW.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, AW.jsx)("input", {
                                  type: "range",
                                  min: OW,
                                  max: mW,
                                  step: EW,
                                  value: Math.min(mW, NW),
                                  "aria-label": `Minimum ${iW.toLowerCase()}`,
                                  onChange: WW => {
                                    const iW = Number(WW.target.value);
                                    LW(iW, Math.max(iW, PW))
                                  }
                                }), (0, AW.jsx)("input", {
                                  type: "range",
                                  min: OW,
                                  max: mW,
                                  step: EW,
                                  value: Math.min(mW, PW),
                                  "aria-label": `Maximum ${iW.toLowerCase()}`,
                                  onChange: WW => {
                                    const iW = Number(WW.target.value);
                                    LW(Math.min(iW, NW), iW)
                                  }
                                })]
                              })]
                            })
                          }

                          function OE(WW) {
                            let {
                              label: iW,
                              min: OW,
                              max: mW,
                              step: EW,
                              value: NW,
                              onChange: PW,
                              format: LW = String
                            } = WW;
                            return (0, AW.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, AW.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, AW.jsx)("span", {
                                  children: iW
                                }), (0, AW.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: LW(NW)
                                })]
                              }), (0, AW.jsx)("input", {
                                type: "range",
                                min: OW,
                                max: mW,
                                step: EW,
                                value: Math.min(mW, Math.max(OW, NW)),
                                "aria-label": iW,
                                onChange: WW => {
                                  PW(Number(WW.target.value))
                                }
                              })]
                            })
                          }

                          function mE(WW) {
                            let {
                              opts: iW,
                              onChange: OW
                            } = WW;
                            const mW = iW.colorGradients;
                            if (!RO(mW)) return (0, AW.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, AW.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, AW.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, AW.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: mW.map(((WW, iW) => (0, AW.jsx)("input", {
                                  type: "color",
                                  value: Qm(WW.color),
                                  "aria-label": `Colour ${iW+1}`,
                                  onChange: WW => {
                                    const EW = [...mW];
                                    EW[iW] = {
                                      color: WE(WW.target.value)
                                    }, OW(EW)
                                  }
                                }, iW)))
                              })]
                            });
                            const EW = (WW, iW) => {
                              const EW = [...mW];
                              EW[WW] = iW, OW(EW)
                            };
                            return (0, AW.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, AW.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, AW.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, AW.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), mW.map(((WW, iW) => {
                                var OW;
                                const mW = null !== (OW = WW.maxColor) && void 0 !== OW ? OW : WW.minColor;
                                return (0, AW.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, AW.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * WW.timeFraction), "%"]
                                  }), (0, AW.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${Qm(WW.minColor)}, ${Qm(mW)})`
                                    }
                                  }), (0, AW.jsx)("input", {
                                    type: "color",
                                    value: Qm(WW.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*WW.timeFraction)}%`,
                                    onChange: OW => {
                                      EW(iW, {
                                        ...WW,
                                        minColor: [...WE(OW.target.value), WW.minColor[3]]
                                      })
                                    }
                                  }), (0, AW.jsx)("input", {
                                    type: "color",
                                    value: Qm(mW),
                                    "aria-label": `Maximum colour at ${Math.round(100*WW.timeFraction)}%`,
                                    onChange: OW => {
                                      EW(iW, {
                                        ...WW,
                                        maxColor: [...WE(OW.target.value), mW[3]]
                                      })
                                    }
                                  })]
                                }, iW)
                              }))]
                            })
                          }
                          const EE = [-.5, -.5, -.5],
                            NE = [.5, .5, .5],
                            PE = [0, 1, 2, 3, 4, 5, 6, 7].map((WW => [1 & WW ? NE[0] : EE[0], 2 & WW ? NE[1] : EE[1], 4 & WW ? NE[2] : EE[2]]));class LE {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(WW, iW, OW, mW) {
                              const EW = Math.round(31 * iW),
                                NW = Math.round(31 * OW),
                                PW = Math.round(31 * mW),
                                LW = `${EW}|${NW}|${PW}`;
                              let cW = this.tints.get(WW);
                              (!cW || cW.size > 2e3) && (cW = new Map, this.tints.set(WW, cW));
                              let wW = cW.get(LW);
                              if (wW) return wW;
                              wW = document.createElement("canvas"), wW.width = WW.naturalWidth || 16, wW.height = WW.naturalHeight || 16;
                              const tW = wW.getContext("2d");
                              return tW ? (tW.imageSmoothingEnabled = !1, tW.drawImage(WW, 0, 0, wW.width, wW.height), tW.globalCompositeOperation = "multiply", tW.fillStyle = `rgb(${EW/31*255}, ${NW/31*255}, ${PW/31*255})`, tW.fillRect(0, 0, wW.width, wW.height), tW.globalCompositeOperation = "destination-in", tW.drawImage(WW, 0, 0, wW.width, wW.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), cW.set(LW, wW), wW
                            }
                          }

                          function cE(WW) {
                            let {
                              opts: iW,
                              textureUrl: OW,
                              burst: EW,
                              paused: NW
                            } = WW;
                            const PW = (0, mW.useRef)(null),
                              LW = (0, mW.useRef)(iW);
                            LW.current = iW;
                            const cW = (0, mW.useRef)(NW);
                            cW.current = NW;
                            const wW = (0, mW.useRef)(null),
                              tW = (0, mW.useRef)(null),
                              ZW = (0, mW.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(WW) {
                                let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const OW = [-.5, -.5, -.5],
                                  mW = [.5, .5, .5];
                                let EW = .5;
                                for (let NW = 0; NW < 40; NW++) {
                                  const NW = IO(WW, OW, mW, iW),
                                    PW = Math.max(NW.life / 30, .001);
                                  for (; zO(NW, WW.gravity, PW);) EW = Math.max(EW, Math.hypot(NW.pos[0], NW.pos[1], NW.pos[2]) + NW.size / 2)
                                }
                                return EW
                              }(iW)))), [iW]),
                              xW = (0, mW.useRef)(ZW);
                            return xW.current = ZW, (0, mW.useEffect)((() => {
                              if (wW.current = null, !OW) return;
                              const WW = new Image;
                              let iW = !1;
                              return WW.onload = () => {
                                iW || (wW.current = WW)
                              }, WW.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${OW}`)
                              }, WW.src = OW, () => {
                                iW = !0
                              }
                            }), [OW]), (0, mW.useEffect)((() => {
                              var WW;
                              null === (WW = tW.current) || void 0 === WW || WW.call(tW)
                            }), [iW, EW]), (0, mW.useEffect)((() => {
                              const WW = PW.current,
                                iW = null === WW || void 0 === WW ? void 0 : WW.getContext("2d");
                              if (!WW || !iW) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const OW = new LE;
                              let mW = [],
                                EW = 0,
                                NW = -.7,
                                ZW = xW.current,
                                lW = performance.now(),
                                AW = 0,
                                bW = !0,
                                jW = null;
                              const UW = () => {
                                const WW = LW.current,
                                  iW = Math.min(400, Math.max(0, Math.ceil(WW.manualEmitCount)));
                                mW = [];
                                for (let OW = 0; OW < iW; OW++) mW.push(IO(WW, EE, NE, Math.random));
                                EW = 0
                              };
                              tW.current = UW, UW();
                              const kW = PW => {
                                AW = requestAnimationFrame(kW);
                                const tW = Math.min(.05, (PW - lW) / 1e3);
                                if (lW = PW, !bW) return;
                                const sW = window.devicePixelRatio || 1,
                                  MW = Math.round(WW.clientWidth * sW),
                                  KW = Math.round(WW.clientHeight * sW);
                                if (0 === MW || 0 === KW) return;
                                WW.width === MW && WW.height === KW || (WW.width = MW, WW.height = KW);
                                const SW = LW.current;
                                null === jW && (NW += .18 * tW), ZW += (xW.current - ZW) * Math.min(1, 4 * tW);
                                const YW = .6 * tW;
                                mW = mW.filter((WW => zO(WW, SW.gravity, YW))), 0 !== mW.length || cW.current || (EW += tW, EW > .6 && UW());
                                const yW = function(WW, iW, OW, mW) {
                                  const EW = 3.2 * mW,
                                    NW = .44 * Math.min(WW, iW) * EW / mW,
                                    PW = Math.cos(OW),
                                    LW = Math.sin(OW),
                                    cW = Math.cos(.42),
                                    wW = Math.sin(.42);
                                  return (OW, mW, tW) => {
                                    const ZW = OW * LW + tW * PW,
                                      xW = EW - (mW * wW + ZW * cW);
                                    if (xW < .05) return null;
                                    const lW = NW / xW;
                                    return {
                                      x: WW / 2 + (OW * PW - tW * LW) * lW,
                                      y: iW / 2 - (mW * cW - ZW * wW) * lW,
                                      scale: lW,
                                      depth: xW
                                    }
                                  }
                                }(MW, KW, NW, ZW);
                                ! function(WW, iW, OW, mW, EW) {
                                  const NW = WW.createLinearGradient(0, 0, 0, OW);
                                  NW.addColorStop(0, "#23262d"), NW.addColorStop(1, "#16181c"), WW.globalCompositeOperation = "source-over", WW.globalAlpha = 1, WW.fillStyle = NW, WW.fillRect(0, 0, iW, OW);
                                  const PW = (iW, OW) => {
                                      const EW = mW(iW[0], iW[1], iW[2]),
                                        NW = mW(OW[0], OW[1], OW[2]);
                                      EW && NW && (WW.beginPath(), WW.moveTo(EW.x, EW.y), WW.lineTo(NW.x, NW.y), WW.stroke())
                                    },
                                    LW = Math.ceil(EW) + 1,
                                    cW = EE[1];
                                  WW.lineWidth = 1, WW.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let wW = -LW; wW <= LW; wW++) PW([wW + .5, cW, .5 - LW], [wW + .5, cW, LW + .5]), PW([.5 - LW, cW, wW + .5], [LW + .5, cW, wW + .5]);
                                  WW.strokeStyle = "rgba(255, 255, 255, 0.28)", WW.setLineDash([4, 4]);
                                  for (const wW of PE)
                                    for (const WW of PE) {
                                      const iW = [0, 1, 2].filter((iW => wW[iW] !== WW[iW]));
                                      1 === iW.length && wW[iW[0]] < WW[iW[0]] && PW(wW, WW)
                                    }
                                  WW.setLineDash([])
                                }(iW, MW, KW, yW, ZW);
                                const TW = wW.current,
                                  JW = mW.map((WW => ({
                                    particle: WW,
                                    at: yW(WW.pos[0], WW.pos[1], WW.pos[2])
                                  }))).filter((WW => null !== WW.at)).sort(((WW, iW) => iW.at.depth - WW.at.depth));
                                iW.imageSmoothingEnabled = !1;
                                for (const WW of function(WW) {
                                    switch (WW) {
                                      case fO.d.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case fO.d.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case fO.d.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case fO.d.MultiplyAdd:
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
                                  }(SW.blendMode)) {
                                  iW.globalCompositeOperation = WW.operation;
                                  for (const {
                                      particle: mW,
                                      at: EW
                                    }
                                    of JW) {
                                    const [NW, PW, LW, cW] = rO(mW), wW = Math.max(1, mW.size * EW.scale);
                                    iW.globalAlpha = WW.usesAlpha ? Math.min(1, Math.max(0, cW)) : 1, TW ? iW.drawImage(OW.get(TW, NW, PW, LW), EW.x - wW / 2, EW.y - wW / 2, wW, wW) : (iW.fillStyle = `rgb(${255*NW}, ${255*PW}, ${255*LW})`, iW.fillRect(EW.x - wW / 2, EW.y - wW / 2, wW, wW))
                                  }
                                }
                                iW.globalCompositeOperation = "source-over", iW.globalAlpha = 1
                              };
                              AW = requestAnimationFrame(kW);
                              const sW = new IntersectionObserver((WW => {
                                let [iW] = WW;
                                bW = iW.isIntersecting
                              }));
                              sW.observe(WW);
                              const MW = iW => {
                                  jW = iW.clientX, WW.setPointerCapture(iW.pointerId)
                                },
                                KW = WW => {
                                  null !== jW && (NW += .01 * (WW.clientX - jW), jW = WW.clientX)
                                },
                                SW = () => {
                                  jW = null
                                };
                              return WW.addEventListener("pointerdown", MW), WW.addEventListener("pointermove", KW), WW.addEventListener("pointerup", SW), WW.addEventListener("pointercancel", SW), () => {
                                cancelAnimationFrame(AW), sW.disconnect(), tW.current = null, WW.removeEventListener("pointerdown", MW), WW.removeEventListener("pointermove", KW), WW.removeEventListener("pointerup", SW), WW.removeEventListener("pointercancel", SW)
                              }
                            }), []), (0, AW.jsx)("canvas", {
                              ref: PW,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${iW.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const wE = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            tE = [{
                              mode: fO.d.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: fO.d.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: fO.d.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: fO.d.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: fO.d.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            ZE = (0, mW.forwardRef)((function(WW, iW) {
                              var OW, EW;
                              let {
                                textures: PW
                              } = WW;
                              const LW = Km(),
                                cW = (0, mW.useRef)(null),
                                [wW, tW] = (0, mW.useState)(XO),
                                [ZW, xW] = (0, mW.useState)("example"),
                                [lW, bW] = (0, mW.useState)(0),
                                [UW, kW] = (0, mW.useState)(!1),
                                MW = WW => {
                                  const iW = "example" === WW ? XO : CO(WW);
                                  iW && (tW(iW), xW(WW))
                                };
                              (0, mW.useImperativeHandle)(iW, (() => ({
                                preview: WW => {
                                  var iW;
                                  MW(WW), null === (iW = cW.current) || void 0 === iW || iW.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const KW = WW => {
                                  tW({
                                    ...wW,
                                    ...WW
                                  }), xW(null)
                                },
                                SW = function(WW, iW) {
                                  if (null !== iW) return `${im}    presetId: "${iW}",\n${Om}\n})`;
                                  const OW = WW.velocityGradients.map((WW => `        {\n            timeFraction: ${FO(WW.timeFraction)},\n            factor: ${FO(WW.factor)},\n            factor2: ${FO(WW.factor2)},\n        },`)),
                                    mW = [`    dir1: ${QO(WW.dir1)},`, `    dir2: ${QO(WW.dir2)},`, Om, `    texture: "${WW.texture}",`, `    minLifeTime: ${FO(WW.minLifeTime)},`, `    maxLifeTime: ${FO(WW.maxLifeTime)},`, `    minEmitPower: ${FO(WW.minEmitPower)},`, `    maxEmitPower: ${FO(WW.maxEmitPower)},`, `    minSize: ${FO(WW.minSize)},`, `    maxSize: ${FO(WW.maxSize)},`, `    manualEmitCount: ${FO(WW.manualEmitCount)},`, `    gravity: ${QO(WW.gravity)},`, `    colorGradients: ${Wm(WW.colorGradients,"    ")},`, `    velocityGradients: ${OW.length>0?`[\n${OW.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${FO(WW.blendMode)},`];
                                  return void 0 !== WW.hideDist && mW.push(`    hideDist: ${FO(WW.hideDist)},`), `${im}${mW.join("\n")}\n})`
                                }(wW, null === ZW || "example" === ZW ? null : ZW),
                                yW = PW.includes(wW.texture) ? PW : [...PW, wW.texture];
                              return (0, AW.jsxs)("section", {
                                ref: cW,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, AW.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, AW.jsxs)("div", {
                                    children: [(0, AW.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, AW.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, AW.jsx)(sW, {
                                    text: SW,
                                    label: "Copy code"
                                  })]
                                }), (0, AW.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, AW.jsx)("button", {
                                    type: "button",
                                    className: NW()("DocsVariantChip", {
                                      Active: "example" === ZW
                                    }),
                                    onClick: () => {
                                      MW("example")
                                    },
                                    children: "Example"
                                  }), wE.filter((WW => null !== CO(WW))).map((WW => (0, AW.jsx)("button", {
                                    type: "button",
                                    className: NW()("DocsVariantChip", {
                                      Active: ZW === WW
                                    }),
                                    onClick: () => {
                                      MW(WW)
                                    },
                                    children: WW
                                  }, WW))), (0, AW.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== ZW && void 0 !== ZW ? ZW : "custom",
                                    "aria-label": "Preset",
                                    onChange: WW => {
                                      MW(WW.target.value)
                                    },
                                    children: [(0, AW.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === ZW && (0, AW.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), pO.c.map((WW => (0, AW.jsx)("option", {
                                      value: WW,
                                      children: WW
                                    }, WW)))]
                                  })]
                                }), (0, AW.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, AW.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, AW.jsx)(cE, {
                                      opts: wW,
                                      textureUrl: null !== (OW = null === LW || void 0 === LW ? void 0 : LW.getParticleTextureUrl(wW.texture)) && void 0 !== OW ? OW : null,
                                      burst: lW,
                                      paused: UW
                                    }), (0, AW.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, AW.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          bW(lW + 1)
                                        },
                                        children: [(0, AW.jsx)(jW, {
                                          name: "replay"
                                        }), (0, AW.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, AW.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": UW,
                                        onClick: () => {
                                          kW(!UW)
                                        },
                                        children: [(0, AW.jsx)(jW, {
                                          name: UW ? "play" : "pause"
                                        }), (0, AW.jsx)("span", {
                                          children: UW ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, AW.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, AW.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, AW.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, AW.jsx)("span", {
                                          children: "Texture"
                                        }), (0, AW.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: wW.texture
                                        })]
                                      }), (0, AW.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: yW.map((WW => {
                                          var iW;
                                          const OW = null !== (iW = null === LW || void 0 === LW ? void 0 : LW.getParticleTextureUrl(WW)) && void 0 !== iW ? iW : null;
                                          return (0, AW.jsx)("button", {
                                            type: "button",
                                            className: NW()("DocsParticleTexture", {
                                              Active: wW.texture === WW
                                            }),
                                            title: WW,
                                            "aria-label": WW,
                                            "aria-pressed": wW.texture === WW,
                                            onClick: () => {
                                              KW({
                                                texture: WW
                                              })
                                            },
                                            children: OW ? (0, AW.jsx)("img", {
                                              src: OW,
                                              alt: ""
                                            }) : (0, AW.jsx)(jW, {
                                              name: "image"
                                            })
                                          }, WW)
                                        }))
                                      })]
                                    }), (0, AW.jsx)(OE, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: wW.manualEmitCount,
                                      onChange: WW => {
                                        KW({
                                          manualEmitCount: WW
                                        })
                                      }
                                    }), (0, AW.jsx)(iE, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: wW.minLifeTime,
                                      high: wW.maxLifeTime,
                                      onChange: (WW, iW) => {
                                        KW({
                                          minLifeTime: WW,
                                          maxLifeTime: iW
                                        })
                                      }
                                    }), (0, AW.jsx)(iE, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: wW.minEmitPower,
                                      high: wW.maxEmitPower,
                                      onChange: (WW, iW) => {
                                        KW({
                                          minEmitPower: WW,
                                          maxEmitPower: iW
                                        })
                                      }
                                    }), (0, AW.jsx)(iE, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: wW.minSize,
                                      high: wW.maxSize,
                                      onChange: (WW, iW) => {
                                        KW({
                                          minSize: WW,
                                          maxSize: iW
                                        })
                                      }
                                    }), (0, AW.jsx)(OE, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (EW = wW.gravity[1]) && void 0 !== EW ? EW : 0,
                                      onChange: WW => {
                                        var iW, OW;
                                        KW({
                                          gravity: [null !== (iW = wW.gravity[0]) && void 0 !== iW ? iW : 0, WW, null !== (OW = wW.gravity[2]) && void 0 !== OW ? OW : 0]
                                        })
                                      }
                                    }), (0, AW.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, AW.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, AW.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, AW.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: wW.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: WW => {
                                          KW({
                                            blendMode: Number(WW.target.value)
                                          })
                                        },
                                        children: tE.map((WW => {
                                          let {
                                            mode: iW,
                                            label: OW
                                          } = WW;
                                          return (0, AW.jsx)("option", {
                                            value: iW,
                                            children: OW
                                          }, iW)
                                        }))
                                      })]
                                    }), (0, AW.jsx)(mE, {
                                      opts: wW,
                                      onChange: WW => {
                                        KW({
                                          colorGradients: WW
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, AW.jsx)(YW, {
                                  code: SW,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var xE = OW(5185),
                            lE = OW(2021);

                          function AE(WW, iW) {
                            return WW ? xE.c.includes(iW) ? WW.getIngameIconUrl(iW) : WW.getItemIconUrl(iW) : null
                          }

                          function bE(WW) {
                            var iW, OW, mW;
                            let {
                              part: EW,
                              assets: PW
                            } = WW;
                            const LW = AE(PW, EW.icon),
                              cW = null !== (iW = null === (OW = EW.style) || void 0 === OW ? void 0 : OW.fontSize) && void 0 !== iW ? iW : "1.8em",
                              wW = (0, Vi.cc)(EW.style);
                            return (0, AW.jsxs)("span", {
                              className: NW()("DocsBloxdTextIcon", {
                                Missing: !LW
                              }),
                              style: {
                                width: cW,
                                height: cW,
                                opacity: null === (mW = EW.style) || void 0 === mW ? void 0 : mW.opacity
                              },
                              title: LW ? void 0 : "No Bloxd icon, item or block has this name",
                              children: [LW && wW && (0, AW.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: wW,
                                  maskImage: `url("${LW}")`,
                                  WebkitMaskImage: `url("${LW}")`
                                }
                              }), LW ? (0, AW.jsx)("img", {
                                src: LW,
                                alt: "",
                                className: NW()({
                                  Tinted: wW
                                })
                              }) : (0, AW.jsx)(jW, {
                                name: "image"
                              })]
                            })
                          }

                          function jE(WW) {
                            let {
                              parts: iW,
                              className: OW
                            } = WW;
                            const mW = Km(),
                              EW = [];
                            let PW = [];
                            const LW = WW => {
                              PW.length > 0 && (EW.push((0, AW.jsx)(lE.d, {
                                text: PW
                              }, `run-${WW}`)), PW = [])
                            };
                            return iW.forEach(((WW, iW) => {
                              "icon" !== qi(WW) || Ci(WW.icon) ? PW.push(WW) : (LW(iW), EW.push((0, AW.jsx)(bE, {
                                part: WW,
                                assets: mW
                              }, `icon-${iW}`)))
                            })), LW(iW.length), (0, AW.jsx)("div", {
                              className: NW()("DocsStyledTextPreview", OW),
                              children: EW
                            })
                          }
                          const UE = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let kE = null;

                          function sE(WW) {
                            if (kE ??= document.createElement("canvas").getContext("2d"), !kE) return "#000000";
                            kE.fillStyle = "#000000", kE.fillStyle = WW;
                            const iW = kE.fillStyle;
                            return iW.startsWith("#") ? iW : "#000000"
                          }

                          function ME(WW) {
                            let {
                              value: iW,
                              label: OW,
                              onChange: mW
                            } = WW;
                            return (0, AW.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, AW.jsx)("input", {
                                type: "color",
                                value: sE(iW),
                                "aria-label": `${OW} picker`,
                                onChange: WW => {
                                  mW(WW.target.value)
                                }
                              }), (0, AW.jsx)("input", {
                                type: "text",
                                value: iW,
                                placeholder: "#ffb914 or gold",
                                "aria-label": OW,
                                spellCheck: !1,
                                onChange: WW => {
                                  mW(WW.target.value)
                                }
                              })]
                            })
                          }

                          function KE(WW) {
                            let {
                              value: iW,
                              fontAwesomeIcons: OW,
                              onChange: EW
                            } = WW;
                            const PW = Km(),
                              [LW, cW] = (0, mW.useState)(Ci(iW) ? "fontAwesome" : "bloxd"),
                              [wW, tW] = (0, mW.useState)(""),
                              ZW = wW.trim().toLowerCase(),
                              xW = "bloxd" === LW ? xE.c : OW,
                              lW = ZW ? xW.filter((WW => WW.toLowerCase().includes(ZW))) : xW;
                            return (0, AW.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, AW.jsx)("input", {
                                type: "text",
                                value: iW,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: WW => {
                                  EW(WW.target.value)
                                }
                              }), (0, AW.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, AW.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((WW => (0, AW.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": LW === WW,
                                    className: NW()("DocsVariantChip", {
                                      Active: LW === WW
                                    }),
                                    onClick: () => {
                                      cW(WW)
                                    },
                                    children: "bloxd" === WW ? `Bloxd icons (${xE.c.length})` : `Font Awesome (${OW.length})`
                                  }, WW))), (0, AW.jsx)("input", {
                                    type: "search",
                                    value: wW,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: WW => {
                                      tW(WW.target.value)
                                    }
                                  })
                                ]
                              }), (0, AW.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [lW.map((WW => {
                                  const OW = "bloxd" === LW ? AE(PW, WW) : null;
                                  return (0, AW.jsx)("button", {
                                    type: "button",
                                    title: WW,
                                    "aria-label": WW,
                                    "aria-pressed": WW === iW,
                                    className: NW()("DocsIconPickerOption", {
                                      Active: WW === iW
                                    }),
                                    onClick: () => {
                                      EW(WW)
                                    },
                                    children: "fontAwesome" === LW ? (0, AW.jsx)(SO.c, {
                                      name: WW
                                    }) : OW ? (0, AW.jsx)("img", {
                                      src: OW,
                                      alt: ""
                                    }) : (0, AW.jsx)(jW, {
                                      name: "image"
                                    })
                                  }, WW)
                                })), 0 === lW.length && (0, AW.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", wW, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function SE(WW) {
                            let {
                              property: iW,
                              value: OW,
                              fontAwesomeIcons: mW,
                              onChange: EW
                            } = WW;
                            const {
                              field: NW,
                              label: PW
                            } = iW, LW = WW => "" !== WW || iW.isRequired ? WW : void 0;
                            switch (NW.kind) {
                              case "text":
                                return NW.multiline ? (0, AW.jsx)("textarea", {
                                  value: String(null !== OW && void 0 !== OW ? OW : ""),
                                  rows: 2,
                                  "aria-label": PW,
                                  onChange: WW => {
                                    EW(WW.target.value)
                                  }
                                }) : (0, AW.jsx)("input", {
                                  type: "text",
                                  value: String(null !== OW && void 0 !== OW ? OW : ""),
                                  "aria-label": PW,
                                  onChange: WW => {
                                    EW(LW(WW.target.value))
                                  }
                                });
                              case "size":
                                return (0, AW.jsx)("input", {
                                  type: "text",
                                  value: String(null !== OW && void 0 !== OW ? OW : ""),
                                  placeholder: iW.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": PW,
                                  spellCheck: !1,
                                  onChange: WW => {
                                    EW(LW(WW.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, AW.jsx)(ME, {
                                  value: String(null !== OW && void 0 !== OW ? OW : ""),
                                  label: PW,
                                  onChange: WW => {
                                    EW(LW(WW))
                                  }
                                });
                              case "colours": {
                                const WW = Array.isArray(OW) ? OW : [],
                                  iW = WW => {
                                    EW(WW.length > 0 ? WW : void 0)
                                  };
                                return (0, AW.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [WW.map(((OW, mW) => (0, AW.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, AW.jsx)(ME, {
                                      value: OW,
                                      label: `${PW} ${mW+1}`,
                                      onChange: OW => {
                                        iW(WW.map(((WW, iW) => iW === mW ? OW : WW)))
                                      }
                                    }), (0, AW.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${mW+1}`,
                                      onClick: () => {
                                        iW(WW.filter(((WW, iW) => iW !== mW)))
                                      },
                                      children: (0, AW.jsx)(jW, {
                                        name: "cross"
                                      })
                                    })]
                                  }, mW))), (0, AW.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var OW;
                                      iW([...WW, null !== (OW = WW.at(-1)) && void 0 !== OW ? OW : "#ffffff"])
                                    },
                                    children: [(0, AW.jsx)(jW, {
                                      name: "plus"
                                    }), 0 === WW.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var cW;
                                const WW = "number" === typeof OW ? OW : Number(null !== (cW = iW.defaultText) && void 0 !== cW ? cW : 0);
                                return (0, AW.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, AW.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: WW,
                                    "aria-label": PW,
                                    onChange: WW => {
                                      EW(Number(WW.target.value))
                                    }
                                  }), (0, AW.jsx)("output", {
                                    children: WW.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, AW.jsxs)("select", {
                                  value: String(null !== OW && void 0 !== OW ? OW : ""),
                                  "aria-label": PW,
                                  onChange: WW => {
                                    EW(LW(WW.target.value))
                                  },
                                  children: [!iW.isRequired && (0, AW.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", iW.defaultText, ")"]
                                  }), NW.options.map((WW => (0, AW.jsx)("option", {
                                    value: WW,
                                    children: WW
                                  }, WW)))]
                                });
                              case "icon":
                                return (0, AW.jsx)(KE, {
                                  value: String(null !== OW && void 0 !== OW ? OW : ""),
                                  fontAwesomeIcons: mW,
                                  onChange: EW
                                })
                            }
                          }

                          function YE(WW) {
                            let iW;
                            try {
                              iW = JSON.parse(WW)
                            } catch (OW) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${OW.message}`
                              }
                            }
                            return EO(iW) ? {
                              part: iW,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function yE(WW) {
                            let {
                              parts: iW,
                              index: OW,
                              fontAwesomeIcons: EW,
                              onChange: NW,
                              mH: PW,
                              onClose: LW
                            } = WW;
                            const cW = (0, mW.useContext)(Ai),
                              tW = (0, mW.useRef)(null),
                              ZW = iW[OW],
                              xW = qi(ZW),
                              [lW, bW] = (0, mW.useState)((() => JSON.stringify(ZW, null, 2))),
                              UW = (0, mW.useMemo)((() => "other" === xW ? YE(lW).error : null), [xW, lW]);
                            (0, mW.useEffect)((() => {
                              var WW;
                              null === (WW = tW.current) || void 0 === WW || WW.focus()
                            }), []);
                            const kW = (0, AW.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: WW => {
                                WW.target === WW.currentTarget && LW()
                              },
                              children: (0, AW.jsxs)("div", {
                                ref: tW,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${OW+1}: ${Xi[xW]}`,
                                tabIndex: -1,
                                onKeyDown: WW => {
                                  "Escape" === WW.key ? (WW.stopPropagation(), LW()) : "Tab" === WW.key && tW.current && function(WW, iW) {
                                    const OW = Array.from(WW.querySelectorAll(ni)),
                                      mW = OW[0],
                                      EW = OW.at(-1);
                                    if (!mW || !EW) return;
                                    const NW = document.activeElement;
                                    !iW.shiftKey || NW !== mW && NW !== WW ? iW.shiftKey || NW !== EW || (iW.preventDefault(), mW.focus()) : (iW.preventDefault(), EW.focus())
                                  }(tW.current, WW)
                                },
                                children: [(0, AW.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, AW.jsxs)("div", {
                                    children: [(0, AW.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", OW + 1]
                                    }), (0, AW.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: Xi[xW]
                                    })]
                                  }), (0, AW.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: LW,
                                    children: (0, AW.jsx)(jW, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, AW.jsx)(jE, {
                                  parts: iW,
                                  className: "DocsTextDialogPreview"
                                }), (0, AW.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === xW ? (0, AW.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, AW.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, AW.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: lW,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: WW => {
                                        bW(WW.target.value);
                                        const iW = YE(WW.target.value);
                                        null !== iW.part && NW(iW.part)
                                      }
                                    }), UW && (0, AW.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: UW
                                    })]
                                  }) : Gi[xW].map((WW => {
                                    const iW = ai(ZW, WW.path),
                                      OW = WW.isRequired ? JSON.stringify(zi(ZW, WW.path)) === JSON.stringify(ZW) : void 0 === iW;
                                    return (0, AW.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, AW.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, AW.jsx)("span", {
                                          children: WW.label
                                        }), (0, AW.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: OW,
                                          "aria-label": `Reset ${WW.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            NW(zi(ZW, WW.path))
                                          },
                                          children: [(0, AW.jsx)(jW, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, AW.jsx)(SE, {
                                        property: WW,
                                        value: iW,
                                        fontAwesomeIcons: EW,
                                        onChange: iW => {
                                          NW(ri(ZW, WW.path, iW))
                                        }
                                      }), !WW.isRequired && (0, AW.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", WW.defaultText]
                                      })]
                                    }, WW.path.join("."))
                                  }))
                                }), (0, AW.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, AW.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: PW,
                                    children: [(0, AW.jsx)(jW, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, AW.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: LW,
                                    children: "Done"
                                  })]
                                }), (0, AW.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: UE.map((WW => (0, AW.jsx)("option", {
                                    value: WW
                                  }, WW)))
                                })]
                              })
                            });
                            return cW ? (0, wW.createPortal)(kW, cW) : kW
                          }
                          const TE = [{
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
                            JE = Object.keys(Bi);

                          function hE(WW) {
                            let {
                              fontAwesomeIcons: iW
                            } = WW;
                            const [OW, EW] = (0, mW.useState)(TE[0].parts), [PW, LW] = (0, mW.useState)((() => iO(TE[0].parts))), [cW, wW] = (0, mW.useState)(null), [tW, ZW] = (0, mW.useState)(!1), [xW, lW] = (0, mW.useState)(null), [bW, UW] = (0, mW.useState)(!1), [kW, sW] = (0, mW.useState)(null), MW = (0, mW.useRef)(null), KW = iO(OW);
                            (0, mW.useLayoutEffect)((() => {
                              var WW;
                              if (!kW) return;
                              const iW = WW => {
                                  var iW;
                                  return null === (iW = MW.current) || void 0 === iW ? void 0 : iW.querySelector(`[data-focus-key="${WW}"]`)
                                },
                                OW = iW(kW.key);
                              null === (WW = OW && !OW.disabled ? OW : iW(kW.fallback)) || void 0 === WW || WW.focus(), sW(null)
                            }), [kW]);
                            const SW = WW => {
                                EW(WW), LW(iO(WW)), wW(null)
                              },
                              yW = WW => {
                                SW(OW.filter(((iW, OW) => OW !== WW))), sW({
                                  key: `edit-${Math.min(WW,OW.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              TW = (WW, iW) => {
                                const mW = [...OW],
                                  [EW] = mW.splice(WW, 1);
                                mW.splice(WW + iW, 0, EW), SW(mW);
                                sW({
                                  key: `${iW<0?"up":"down"}-${WW+iW}`,
                                  fallback: `edit-${WW+iW}`
                                })
                              };
                            return (0, AW.jsxs)("section", {
                              ref: MW,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, AW.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, AW.jsxs)("div", {
                                  children: [(0, AW.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, AW.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, AW.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: TE.map((WW => (0, AW.jsx)("button", {
                                  type: "button",
                                  className: NW()("DocsVariantChip", {
                                    Active: KW === iO(WW.parts)
                                  }),
                                  onClick: () => {
                                    SW(WW.parts)
                                  },
                                  children: WW.label
                                }, WW.label)))
                              }), (0, AW.jsx)(jE, {
                                parts: OW,
                                className: "DocsTextEditorPreview"
                              }), (0, AW.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, AW.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, AW.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, AW.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [OW.map(((WW, iW) => {
                                      const mW = qi(WW);
                                      return (0, AW.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, AW.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${iW}`,
                                          "aria-label": `Edit part ${iW+1}, ${Xi[mW]}`,
                                          onClick: () => {
                                            lW(iW)
                                          },
                                          children: [(0, AW.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: Xi[mW]
                                          }), (0, AW.jsx)(jE, {
                                            parts: [WW],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== mW && (0, AW.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: Fi(WW)
                                          })]
                                        }), (0, AW.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, AW.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${iW+1} up`,
                                            "data-focus-key": `up-${iW}`,
                                            disabled: 0 === iW,
                                            onClick: () => {
                                              TW(iW, -1)
                                            },
                                            children: (0, AW.jsx)(jW, {
                                              name: "chevron-up"
                                            })
                                          }), (0, AW.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${iW+1} down`,
                                            "data-focus-key": `down-${iW}`,
                                            disabled: iW === OW.length - 1,
                                            onClick: () => {
                                              TW(iW, 1)
                                            },
                                            children: (0, AW.jsx)(jW, {
                                              name: "chevron-down"
                                            })
                                          }), (0, AW.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${iW+1}`,
                                            onClick: () => {
                                              yW(iW)
                                            },
                                            children: (0, AW.jsx)(jW, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, iW)
                                    })), 0 === OW.length && (0, AW.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, AW.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: WW => {
                                      "Escape" === WW.key && bW && (WW.stopPropagation(), UW(!1), sW({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, AW.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": bW,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        UW(!bW)
                                      },
                                      children: [(0, AW.jsx)(jW, {
                                        name: "plus"
                                      }), "Add a part", (0, AW.jsx)(jW, {
                                        name: bW ? "chevron-up" : "chevron-down"
                                      })]
                                    }), bW && (0, AW.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: JE.map((WW => (0, AW.jsx)("li", {
                                        children: (0, AW.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (WW => {
                                              SW([...OW, Bi[WW]]), UW(!1), lW(OW.length)
                                            })(WW)
                                          },
                                          children: Xi[WW]
                                        })
                                      }, WW)))
                                    })]
                                  })]
                                }), (0, AW.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, AW.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, AW.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": tW,
                                      onClick: () => {
                                        ZW(!tW)
                                      },
                                      children: [(0, AW.jsx)(jW, {
                                        name: tW ? "check" : "pencil"
                                      }), tW ? "Done" : "Edit"]
                                    })]
                                  }), tW ? (0, AW.jsxs)(AW.Fragment, {
                                    children: [(0, AW.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: PW,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: WW => {
                                        LW(WW.target.value);
                                        const iW = NO(WW.target.value);
                                        wW(iW.error), iW.parts && EW(iW.parts)
                                      }
                                    }), cW && (0, AW.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: cW
                                    })]
                                  }) : (0, AW.jsx)(YW, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${KW})`
                                  })]
                                })]
                              }), null !== xW && xW < OW.length && (0, AW.jsx)(yE, {
                                parts: OW,
                                index: xW,
                                fontAwesomeIcons: iW,
                                onChange: WW => {
                                  ((WW, iW) => {
                                    SW(OW.map(((OW, mW) => mW === WW ? iW : OW)))
                                  })(xW, WW)
                                },
                                mH: () => {
                                  yW(xW), lW(null)
                                },
                                onClose: () => {
                                  lW(null), sW({
                                    key: `edit-${xW}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var HE = OW(5605),
                            nE = OW(5590),
                            uE = OW(5599),
                            oE = OW(5610);
                          const dE = 40,
                            eE = 800,
                            vE = 150,
                            gE = 8e3,
                            DE = 2e3;

                          function VE(WW, iW) {
                            return 12 * Math.log2(iW / WW)
                          }

                          function pE(WW, iW) {
                            return Math.round(WW * 2 ** (iW / 12) * 10) / 10
                          }

                          function fE(WW) {
                            return `${WW} ms`
                          }

                          function CE(WW) {
                            return `${WW} st`
                          }
                          const XE = [{
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

                          function BE(WW) {
                            let {
                              synth: iW,
                              onChange: OW
                            } = WW;
                            const mW = (0, HE.h)(iW);
                            return (0, AW.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, AW.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, AW.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, AW.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, AW.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, AW.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, AW.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: HE.e.map((WW => (0, AW.jsx)("button", {
                                      type: "button",
                                      className: NW()("DocsVariantChip", {
                                        Active: iW.waveform === WW
                                      }),
                                      "aria-pressed": iW.waveform === WW,
                                      onClick: () => {
                                        OW({
                                          waveform: WW
                                        })
                                      },
                                      children: WW
                                    }, WW)))
                                  })]
                                }), (0, AW.jsx)(OE, {
                                  label: "Pitch",
                                  min: 0,
                                  max: VE(dE, eE),
                                  step: .1,
                                  value: VE(dE, iW.pitchHz),
                                  format: () => `${iW.pitchHz} Hz`,
                                  onChange: WW => {
                                    OW({
                                      pitchHz: pE(dE, WW)
                                    })
                                  }
                                }), (0, AW.jsx)(OE, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: iW.syllableMs,
                                  format: fE,
                                  onChange: WW => {
                                    OW({
                                      syllableMs: WW
                                    })
                                  }
                                }), (0, AW.jsx)(OE, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: iW.volume,
                                  onChange: WW => {
                                    OW({
                                      volume: WW
                                    })
                                  }
                                })]
                              }), (0, AW.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, AW.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, AW.jsx)(OE, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: iW.durationMs,
                                  format: fE,
                                  onChange: WW => {
                                    OW({
                                      durationMs: WW
                                    })
                                  }
                                }), (0, AW.jsx)(OE, {
                                  label: "Fade in",
                                  min: 0,
                                  max: mW.durationMs,
                                  step: 1,
                                  value: mW.attackMs,
                                  format: fE,
                                  onChange: WW => {
                                    OW({
                                      attackMs: WW
                                    })
                                  }
                                }), (0, AW.jsx)(OE, {
                                  label: "Fade out",
                                  min: 0,
                                  max: mW.durationMs - mW.attackMs,
                                  step: 1,
                                  value: mW.releaseMs,
                                  format: fE,
                                  onChange: WW => {
                                    OW({
                                      releaseMs: WW
                                    })
                                  }
                                }), (0, AW.jsx)(OE, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: iW.glideSemitones,
                                  format: CE,
                                  onChange: WW => {
                                    OW({
                                      glideSemitones: WW
                                    })
                                  }
                                }), (0, AW.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, AW.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== iW.lowpassHz,
                                    onChange: WW => {
                                      OW({
                                        lowpassHz: WW.target.checked ? DE : null
                                      })
                                    }
                                  }), (0, AW.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== iW.lowpassHz && (0, AW.jsx)(OE, {
                                  label: "Filter",
                                  min: 0,
                                  max: VE(vE, gE),
                                  step: .1,
                                  value: VE(vE, iW.lowpassHz),
                                  format: () => `${iW.lowpassHz} Hz`,
                                  onChange: WW => {
                                    OW({
                                      lowpassHz: pE(vE, WW)
                                    })
                                  }
                                })]
                              }), (0, AW.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, AW.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), XE.map((WW => {
                                  let {
                                    key: mW,
                                    label: EW,
                                    max: NW
                                  } = WW;
                                  return (0, AW.jsx)(OE, {
                                    label: EW,
                                    min: 0,
                                    max: NW,
                                    step: .1,
                                    value: iW.intonation[mW],
                                    format: CE,
                                    onChange: WW => {
                                      OW({
                                        intonation: {
                                          ...iW.intonation,
                                          [mW]: WW
                                        }
                                      })
                                    }
                                  }, mW)
                                }))]
                              })]
                            })
                          }
                          const qE = Object.keys(HE.g),
                            RE = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function GE(WW) {
                            var iW;
                            const OW = JSON.stringify((0, HE.h)(WW));
                            return null !== (iW = qE.find((WW => JSON.stringify((0, HE.h)(HE.g[WW])) === OW))) && void 0 !== iW ? iW : null
                          }

                          function IE(WW) {
                            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof WW || null === WW) return JSON.stringify(WW);
                            return `{\n${Object.entries(WW).map((WW=>{let[OW,mW]=WW;return`${iW}    ${OW}: ${IE(mW,`${iW}    `)},`})).join("\n")}\n${iW}}`
                          }

                          function aE(WW, iW, OW) {
                            const mW = GE(WW),
                              EW = [`    line: ${JSON.stringify(iW)},`];
                            return OW && EW.push(`    speakerName: ${JSON.stringify(OW)},`), EW.push("    voice,"), `const voice = ${mW?JSON.stringify(mW):IE((0,HE.h)(WW))}\n\napi.setClientOption(playerId, "dialogue", {\n${EW.join("\n")}\n})`
                          }
                          const rE = 400,
                            zE = 90;
                          let FE = null;

                          function QE(WW, iW, OW) {
                            return FE ??= new AudioContext, FE.resume(), (0, oE.e)(FE, FE.destination, WW, iW, OW, (() => {}))
                          }

                          function WN() {
                            const [WW, iW] = (0, mW.useState)(HE.g.regular), [OW, EW] = (0, mW.useState)(RE[0]), [PW, LW] = (0, mW.useState)("Innkeeper"), [cW, wW] = (0, mW.useState)(0), tW = xm((WW => WW.volume)), ZW = (0, mW.useRef)(null), xW = (0, mW.useRef)(0), lW = (0, mW.useRef)(0), bW = () => {
                              var WW;
                              null === (WW = ZW.current) || void 0 === WW || WW.call(ZW), ZW.current = null
                            };
                            (0, mW.useEffect)((() => () => {
                              var WW;
                              null === (WW = ZW.current) || void 0 === WW || WW.call(ZW), window.clearTimeout(xW.current)
                            }), []);
                            const UW = (0, mW.useMemo)((() => ({
                                line: OW,
                                speakerName: PW || void 0,
                                voice: WW
                              })), [OW, PW, WW]),
                              kW = (0, mW.useRef)(UW);
                            kW.current = UW;
                            const MW = GE(WW),
                              KW = WW => {
                                window.clearTimeout(xW.current), bW();
                                const {
                                  plan: iW,
                                  synth: OW
                                } = (0, uE.g)(WW);
                                OW && (ZW.current = QE(OW, iW.blips, tW)), wW((WW => WW + 1))
                              },
                              SW = aE(WW, OW, PW);
                            return (0, AW.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, AW.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, AW.jsxs)("div", {
                                  children: [(0, AW.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, AW.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, AW.jsx)(sW, {
                                  text: SW,
                                  label: "Copy code"
                                })]
                              }), (0, AW.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [qE.map((WW => (0, AW.jsx)("button", {
                                  type: "button",
                                  className: NW()("DocsVariantChip", {
                                    Active: MW === WW
                                  }),
                                  "aria-pressed": MW === WW,
                                  onClick: () => {
                                    (WW => {
                                      const OW = HE.g[WW];
                                      iW(OW), KW({
                                        ...UW,
                                        voice: OW
                                      })
                                    })(WW)
                                  },
                                  children: WW
                                }, WW))), !MW && (0, AW.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, AW.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, AW.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, AW.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, AW.jsx)(nE.e, {
                                      display: UW
                                    }, cW)
                                  }), (0, AW.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: WW => {
                                      WW.preventDefault(), KW(UW)
                                    },
                                    children: [(0, AW.jsx)("input", {
                                      value: OW,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: WW => {
                                        EW(WW.target.value)
                                      }
                                    }), (0, AW.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, AW.jsx)(jW, {
                                        name: "play"
                                      }), (0, AW.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, AW.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: RE.map((WW => (0, AW.jsx)("button", {
                                      type: "button",
                                      className: NW()("DocsVariantChip", {
                                        Active: OW === WW
                                      }),
                                      onClick: () => {
                                        var iW;
                                        EW(iW = WW), KW({
                                          ...UW,
                                          line: iW
                                        })
                                      },
                                      children: WW
                                    }, WW)))
                                  }), (0, AW.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, AW.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, AW.jsx)("input", {
                                      value: PW,
                                      placeholder: "No name",
                                      onChange: WW => {
                                        LW(WW.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, AW.jsx)(BE, {
                                  synth: WW,
                                  onChange: OW => {
                                    const mW = {
                                      ...WW,
                                      ...OW
                                    };
                                    iW(mW);
                                    const EW = {
                                        ...UW,
                                        voice: mW
                                      },
                                      NW = performance.now();
                                    if (NW - lW.current >= zE) {
                                      lW.current = NW, bW();
                                      const WW = (0, uE.g)(EW).plan.blips[0];
                                      WW && (ZW.current = QE((0, HE.h)(mW), [{
                                        ...WW,
                                        atMs: 0
                                      }], tW))
                                    }
                                    window.clearTimeout(xW.current), xW.current = window.setTimeout((() => {
                                      KW(kW.current)
                                    }), rE)
                                  }
                                })]
                              }), (0, AW.jsx)(YW, {
                                code: SW,
                                lang: "ts"
                              })]
                            })
                          }
                          var iN = OW(5622);
                          const ON = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            mN = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            EN = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${mN}`, "g"), iN.k],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, iN.k]
                            ];

                          function NN(WW) {
                            return `${WW.pageId}#${WW.anchor}`
                          }
                          let PN, LN, cN;

                          function wN(WW) {
                            const iW = (0, yW.i)(WW),
                              OW = new Set;
                            for (const [, , mW] of iW.matchAll(yW.d)) {
                              const WW = mW.startsWith("#") ? XW(mW) : null,
                                iW = WW ? NN({
                                  pageId: WW.page.id,
                                  anchor: WW.anchor
                                }) : null;
                              null !== iW && (PN || (PN = new Set(gW.flatMap((WW => HW(WW.layout) ? fW(WW).sections.map((iW => NN({
                                pageId: WW.id,
                                anchor: iW.heading.anchor
                              }))) : [])))), PN).has(iW) && OW.add(iW)
                            }
                            for (const [, , mW] of iW.matchAll(ON)) {
                              const WW = xi(mW);
                              WW && OW.add(NN(WW))
                            }
                            return OW
                          }

                          function tN(WW, iW) {
                            const OW = new Set,
                              mW = function(WW) {
                                return WW.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(WW);
                            for (const [, EW] of mW.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) OW.add(EW);
                            for (const [EW, NW] of EN)
                              for (const [, WW] of(0, iN.e)(mW, EW, NW)) iW.has(WW) && OW.add(WW);
                            return OW
                          }

                          function ZN(WW, iW, OW, mW) {
                            const EW = WW.get(iW);
                            EW ? !mW && EW.some((WW => WW.pageId === OW.pageId)) || EW.push(OW) : WW.set(iW, [OW])
                          }
                          const xN = /^[A-Za-z_$][\w$]*$/;

                          function lN(WW) {
                            return xN.test(WW.name) ? WW.name : "options"
                          }

                          function AN(WW, iW) {
                            const OW = WW.params.map(lN).join(", ");
                            return iW ? `${WW.name} = (${OW}) => {\n\t\n}` : `api.${WW.name}(${OW})`
                          }

                          function bN(WW) {
                            let {
                              method: iW,
                              isCallback: OW
                            } = WW;
                            return (0, AW.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, AW.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [OW ? (0, AW.jsxs)(AW.Fragment, {
                                  children: [(0, AW.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: iW.name
                                  }), (0, AW.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, AW.jsxs)(AW.Fragment, {
                                  children: [(0, AW.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, AW.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: iW.name
                                  }), (0, AW.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), iW.params.map(((WW, OW) => (0, AW.jsxs)(mW.Fragment, {
                                  children: [OW > 0 && (0, AW.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, AW.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${iW.name}-${lN(WW)}`,
                                    children: WW.name
                                  })]
                                }, WW.name))), (0, AW.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: OW ? ") => " : ")"
                                }), OW && !iW.returns && (0, AW.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), iW.returns && iW.returns.type && (0, AW.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!OW && (0, AW.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, AW.jsx)(Ti, {
                                  type: iW.returns.type
                                })]
                              })]
                            })
                          }

                          function jN(WW) {
                            let {
                              title: iW,
                              references: OW
                            } = WW;
                            const EW = (0, mW.useContext)(li);
                            return (0, AW.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, AW.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: iW
                              }), OW.map((WW => (0, AW.jsx)(PW.b, {
                                to: qW(EW, VW(WW.pageId), WW.anchor),
                                children: WW.label
                              }, `${WW.pageId}#${WW.anchor}`)))]
                            })
                          }

                          function UN(WW) {
                            var iW, OW;
                            let {
                              pageId: mW,
                              anchor: EW
                            } = WW;
                            const NW = NN({
                                pageId: mW,
                                anchor: EW
                              }),
                              PW = null !== (iW = function() {
                                if (!cN) {
                                  cN = new Map;
                                  const mW = new Set(gW.filter((WW => "callbacks" === WW.layout)).flatMap((WW => fW(WW).sections.map((WW => WW.heading.text)))));
                                  for (const EW of gW)
                                    if ("article" === EW.layout || "snippets" === EW.layout)
                                      for (const NW of (0, yW.v)(fW(EW)))
                                        for (const {
                                            code: PW
                                          }
                                          of(0, yW.j)(NW.blocks))
                                          for (const LW of tN(PW, mW)) {
                                            const mW = Zi().get(LW);
                                            if (mW) {
                                              var WW, iW, OW;
                                              const PW = {
                                                pageId: EW.id,
                                                anchor: null !== (WW = null === (iW = NW.heading) || void 0 === iW ? void 0 : iW.anchor) && void 0 !== WW ? WW : "",
                                                label: null !== (OW = EW.navTitle) && void 0 !== OW ? OW : EW.title
                                              };
                                              ZN(cN, NN(mW), PW, !1)
                                            }
                                          }
                                }
                                return cN
                              }().get(NW)) && void 0 !== iW ? iW : [],
                              LW = null !== (OW = function() {
                                if (!LN) {
                                  LN = new Map;
                                  const WW = VW("changelog");
                                  for (const iW of fW(WW).sections) {
                                    const OW = new Set(iW.blocks.flatMap((WW => [...wN(WW)])));
                                    for (const mW of OW) {
                                      const OW = {
                                        pageId: WW.id,
                                        anchor: iW.heading.anchor,
                                        label: iW.heading.text
                                      };
                                      ZN(LN, mW, OW, !0)
                                    }
                                  }
                                }
                                return LN
                              }().get(NW)) && void 0 !== OW ? OW : [];
                            return 0 === PW.length && 0 === LW.length ? null : (0, AW.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [PW.length > 0 && (0, AW.jsx)(jN, {
                                title: "Used in",
                                references: PW
                              }), LW.length > 0 && (0, AW.jsx)(jN, {
                                title: "Changelog",
                                references: LW
                              })]
                            })
                          }

                          function kN(WW) {
                            let {
                              method: iW,
                              pageId: OW,
                              anchor: mW,
                              isCallback: EW
                            } = WW;
                            const NW = EW ? void 0 : Li().get(iW.name),
                              PW = iW.description.length > 0 || null === NW || void 0 === NW || !NW.description ? iW.description : (0, yW.B)(NW.description);
                            return (0, AW.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, AW.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, AW.jsx)(ZO, {
                                  level: 2,
                                  text: iW.name,
                                  anchor: mW,
                                  className: "DocsCardTitle"
                                }), (0, AW.jsx)(sW, {
                                  text: AN(iW, EW),
                                  label: EW ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, AW.jsx)(bN, {
                                method: iW,
                                isCallback: EW
                              }), NW && null !== NW.deprecation && (0, AW.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, AW.jsx)("strong", {
                                  children: "Deprecated"
                                }), NW.deprecation && (0, AW.jsxs)(AW.Fragment, {
                                  children: [": ", (0, AW.jsx)(Si, {
                                    text: (LW = NW.deprecation, (0, iN.q)(LW, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, iN.j)("`\\w"), (WW => {
                                      let [iW] = WW;
                                      return Zi().has(iW) ? `\`${iW}\`` : iW
                                    })))
                                  })]
                                })]
                              }), PW.length > 0 && (0, AW.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, AW.jsx)(bO, {
                                  blocks: PW
                                })
                              }), iW.params.length > 0 && (0, AW.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, AW.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, AW.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: iW.params.map((WW => (0, AW.jsxs)("div", {
                                    id: `${iW.name}-${lN(WW)}`,
                                    className: "DocsParam",
                                    children: [(0, AW.jsxs)("dt", {
                                      children: [(0, AW.jsx)("code", {
                                        className: "DocsParamName",
                                        children: WW.name
                                      }), (0, AW.jsx)(Ti, {
                                        type: WW.type
                                      })]
                                    }), WW.description && (0, AW.jsx)("dd", {
                                      children: (0, AW.jsx)(Si, {
                                        text: WW.description
                                      })
                                    })]
                                  }, WW.name)))
                                })]
                              }), iW.returns && (iW.returns.type || iW.returns.description.length > 0) && (0, AW.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, AW.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, AW.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [iW.returns.type && (0, AW.jsx)(Ti, {
                                    type: iW.returns.type
                                  }), iW.returns.description.length > 0 && (0, AW.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, AW.jsx)(bO, {
                                      blocks: iW.returns.description
                                    })
                                  })]
                                })]
                              }), (0, AW.jsx)(UN, {
                                pageId: OW,
                                anchor: mW
                              })]
                            });
                            var LW
                          }

                          function sN(WW) {
                            var iW;
                            return null !== WW.defaultValue && "undefined" !== WW.defaultValue ? WW.defaultValue : null !== (iW = WW.example) && void 0 !== iW ? iW : "value"
                          }

                          function MN(WW) {
                            let {
                              setting: iW,
                              pageId: OW,
                              anchor: mW,
                              setterSnippet: EW
                            } = WW;
                            const NW = null === iW.defaultValue ? null : Ui(iW.defaultValue);
                            return (0, AW.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, AW.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, AW.jsx)(ZO, {
                                  level: 2,
                                  text: iW.name,
                                  anchor: mW,
                                  className: "DocsCardTitle"
                                }), (0, AW.jsx)(sW, {
                                  text: EW(iW.name, sN(iW)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, AW.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, AW.jsxs)("div", {
                                  children: [(0, AW.jsx)("dt", {
                                    children: "Type"
                                  }), (0, AW.jsx)("dd", {
                                    children: (0, AW.jsx)(Ti, {
                                      type: iW.type
                                    })
                                  })]
                                }), null !== iW.defaultValue && (0, AW.jsxs)("div", {
                                  children: [(0, AW.jsx)("dt", {
                                    children: "Default"
                                  }), (0, AW.jsx)("dd", {
                                    children: (0, AW.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [NW && (0, AW.jsx)(ki, {
                                        colour: NW
                                      }), iW.defaultValue]
                                    })
                                  })]
                                }), null !== iW.example && (0, AW.jsxs)("div", {
                                  children: [(0, AW.jsx)("dt", {
                                    children: "Example"
                                  }), (0, AW.jsx)("dd", {
                                    children: (0, AW.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: iW.example
                                    })
                                  })]
                                })]
                              }), iW.description.length > 0 && (0, AW.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, AW.jsx)(bO, {
                                  blocks: iW.description
                                })
                              }), (0, AW.jsx)(UN, {
                                pageId: OW,
                                anchor: mW
                              })]
                            })
                          }

                          function KN(WW) {
                            let {
                              section: iW
                            } = WW;
                            return (0, AW.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, AW.jsx)(ZO, {
                                level: 2,
                                text: iW.heading.text,
                                anchor: iW.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, AW.jsx)("div", {
                                className: "DocsProse",
                                children: (0, AW.jsx)(bO, {
                                  blocks: iW.blocks
                                })
                              })]
                            })
                          }

                          function SN(WW) {
                            let {
                              section: iW
                            } = WW;
                            return (0, AW.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, AW.jsx)(ZO, {
                                level: iW.heading.level,
                                text: iW.heading.text,
                                anchor: iW.heading.anchor
                              }), (0, AW.jsx)(bO, {
                                blocks: iW.blocks
                              })]
                            })
                          }
                          const YN = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function yN(WW) {
                            let {
                              page: iW,
                              section: OW
                            } = WW;
                            if ("methods" === iW.layout || "callbacks" === iW.layout) return (0, AW.jsx)(kN, {
                              method: TO(OW),
                              pageId: iW.id,
                              anchor: OW.heading.anchor,
                              isCallback: "callbacks" === iW.layout
                            });
                            if ("settings" === iW.layout) {
                              const WW = function(WW) {
                                const iW = {
                                  name: WW.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const mW of WW.blocks) {
                                  var OW;
                                  if (yO(mW)) continue;
                                  const WW = "paragraph" === mW.kind ? mW.text.match(JO) : null;
                                  if (!WW) {
                                    iW.description.push(mW);
                                    continue
                                  }
                                  const EW = null !== (OW = YO(WW[2])) && void 0 !== OW ? OW : WW[2];
                                  "Type" === WW[1] ? iW.type = EW : "Default" === WW[1] ? iW.defaultValue = EW : "" !== EW && (iW.example = EW)
                                }
                                return iW.type ? iW : null
                              }(OW);
                              if (WW) return (0, AW.jsx)(MN, {
                                setting: WW,
                                pageId: iW.id,
                                anchor: OW.heading.anchor,
                                setterSnippet: iW.setterSnippet
                              })
                            }
                            return "snippets" === iW.layout ? (0, AW.jsx)(KN, {
                              section: OW
                            }) : "changelog" === iW.layout ? (0, AW.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, AW.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, AW.jsx)(ZO, {
                                  level: 2,
                                  text: OW.heading.text,
                                  anchor: OW.heading.anchor
                                })
                              }), (0, AW.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, AW.jsx)(bO, {
                                  blocks: hO(OW.blocks)
                                })
                              })]
                            }) : iW.gallery ? (0, AW.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, AW.jsx)(ZO, {
                                level: OW.heading.level,
                                text: OW.heading.text,
                                anchor: OW.heading.anchor
                              }), (0, AW.jsx)(Hm, {
                                kind: iW.gallery,
                                content: fW(iW),
                                blocks: OW.blocks
                              })]
                            }) : (0, AW.jsx)(SN, {
                              section: OW
                            })
                          }

                          function TN(WW) {
                            let {
                              page: iW,
                              onTocChange: OW
                            } = WW;
                            const EW = fW(iW),
                              [NW, PW] = (0, mW.useState)(""),
                              LW = "article" !== iW.layout,
                              cW = kO(iW.gallery) ? iW.gallery : null,
                              wW = null !== cW,
                              tW = NW.trim().toLowerCase(),
                              ZW = (0, mW.useRef)(null),
                              xW = (0, mW.useCallback)((WW => {
                                var iW;
                                null === (iW = ZW.current) || void 0 === iW || iW.preview(WW)
                              }), []),
                              lW = (0, mW.useMemo)((() => {
                                if (!iW.hasParticlePlayground) return [];
                                const WW = oO(EW.intro).find((WW => "names" === WW.kind && !WW.names.some((WW => null !== CO(WW.name)))));
                                return "names" === (null === WW || void 0 === WW ? void 0 : WW.kind) ? WW.names.map((WW => WW.name)) : []
                              }), [iW, EW]),
                              bW = (0, mW.useMemo)((() => {
                                if (!iW.hasTextPlayground) return [];
                                const WW = EW.sections.flatMap((WW => WW.blocks.flatMap((WW => {
                                  var iW;
                                  return (null !== (iW = uO(WW)) && void 0 !== iW ? iW : []).flatMap((WW => Ci(WW.name) ? [WW.name] : []))
                                }))));
                                return [...new Set(WW)]
                              }), [iW, EW]),
                              jW = (0, mW.useMemo)((() => tW ? EW.sections.filter((WW => function(WW, iW) {
                                return !!WW.heading.text.toLowerCase().includes(iW) || WW.blocks.some((WW => (0, yW.i)(WW).toLowerCase().includes(iW)))
                              }(WW, tW))) : EW.sections), [EW, tW]),
                              UW = (0, mW.useMemo)((() => function(WW, iW) {
                                return "article" !== WW.layout ? iW.map((WW => ({
                                  anchor: WW.heading.anchor,
                                  text: WW.heading.text,
                                  level: 2
                                }))) : iW.flatMap((WW => {
                                  const iW = WW.blocks.flatMap((WW => "heading" === WW.kind && 3 === WW.level ? [{
                                    anchor: WW.anchor,
                                    text: WW.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: WW.heading.anchor,
                                    text: WW.heading.text,
                                    level: 2
                                  }, ...iW]
                                }))
                              }(iW, jW)), [iW, jW]);
                            return (0, mW.useEffect)((() => {
                              OW(UW)
                            }), [UW, OW]), (0, AW.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, AW.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, AW.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: EW.title || iW.title
                                }), (0, AW.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: iW.summary
                                }), (0, AW.jsx)(Fm, {
                                  page: iW
                                }), LW && (0, AW.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, AW.jsxs)("span", {
                                    children: [(0, AW.jsx)("strong", {
                                      children: EW.sections.length
                                    }), " ", YN[iW.layout]]
                                  })
                                })]
                              }), "" === iW.slug && (0, AW.jsx)(um, {}), cW && (0, AW.jsx)(gm, {
                                kind: cW
                              }, cW), iW.hasParticlePlayground && (0, AW.jsx)(ZE, {
                                ref: ZW,
                                textures: lW
                              }), !wW && EW.intro.length > 0 && (0, AW.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: iW.gallery ? (0, AW.jsx)(sm.Provider, {
                                  value: iW.hasParticlePlayground ? xW : null,
                                  children: (0, AW.jsx)(Hm, {
                                    kind: iW.gallery,
                                    content: EW,
                                    blocks: EW.intro
                                  })
                                }) : (0, AW.jsx)(bO, {
                                  blocks: hO(EW.intro)
                                })
                              }), iW.hasTextPlayground && (0, AW.jsx)(hE, {
                                fontAwesomeIcons: bW
                              }), iW.hasVoicePlayground && (0, AW.jsx)(WN, {}), iW.childPageIds && (0, AW.jsx)(um, {
                                cards: iW.childPageIds.map((WW => ({
                                  pageId: WW
                                }))),
                                label: iW.title
                              }), LW && (0, AW.jsx)(KO, {
                                className: "DocsFilterBar",
                                value: NW,
                                placeholder: `Filter ${EW.sections.length} ${YN[iW.layout]}\u2026`,
                                label: `Filter ${YN[iW.layout]}`,
                                onChange: PW,
                                count: tW ? {
                                  visible: jW.length,
                                  total: EW.sections.length
                                } : null
                              }), !wW && (0, AW.jsxs)("div", {
                                className: `DocsSections Layout-${iW.layout}`,
                                children: [jW.map((WW => (0, AW.jsx)(yN, {
                                  page: iW,
                                  section: WW
                                }, WW.heading.anchor))), 0 === jW.length && (0, AW.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", YN[iW.layout], " match \u201c", NW, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const JN = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function hN(WW) {
                            let {
                              entry: iW,
                              isActive: OW,
                              onNavigate: mW,
                              label: EW,
                              children: PW
                            } = WW;
                            return (0, AW.jsx)("a", {
                              href: `#${iW.anchor}`,
                              "aria-label": EW,
                              className: NW()(`Level${iW.level}`, {
                                Active: OW
                              }),
                              "aria-current": OW ? "location" : void 0,
                              onClick: WW => {
                                WW.preventDefault(), mW(iW.anchor)
                              },
                              children: PW
                            })
                          }

                          function HN(WW) {
                            let {
                              toc: iW,
                              activeAnchor: OW,
                              onNavigate: EW
                            } = WW;
                            const PW = Math.max(0, iW.findIndex((WW => WW.anchor === OW))),
                              LW = (0, mW.useRef)(null),
                              cW = (0, mW.useRef)(!1);
                            (0, mW.useEffect)((() => {
                              var WW, OW;
                              const mW = null === (WW = LW.current) || void 0 === WW ? void 0 : WW.closest(".DocsToc"),
                                EW = null === (OW = LW.current) || void 0 === OW ? void 0 : OW.querySelector(".DocsTimelineNotch.Active");
                              if (!mW || !EW) return;
                              let NW = 0;
                              if (PW === iW.length - 1) NW = mW.scrollHeight;
                              else if (PW > 0) {
                                const WW = mW.getBoundingClientRect(),
                                  iW = EW.getBoundingClientRect();
                                NW = mW.scrollTop + iW.top + iW.height / 2 - (WW.top + mW.clientHeight / 2)
                              }
                              mW.scrollTo({
                                top: NW,
                                behavior: cW.current ? "smooth" : "auto"
                              }), cW.current = !0
                            }), [PW, iW.length]);
                            const wW = [];
                            return iW.forEach(((WW, iW) => {
                              var OW, mW, EW;
                              const NW = function(WW) {
                                  const iW = WW.trim().match(JN);
                                  return iW ? {
                                    day: iW[1],
                                    month: `${iW[2]} ${iW[3]}`
                                  } : null
                                }(WW.text),
                                PW = null !== (OW = null === NW || void 0 === NW ? void 0 : NW.month) && void 0 !== OW ? OW : null;
                              null !== PW && (null === (mW = wW.at(-1)) || void 0 === mW ? void 0 : mW.month) === PW || wW.push({
                                month: PW,
                                entries: []
                              }), wW.at(-1).entries.push({
                                entry: WW,
                                day: null !== (EW = null === NW || void 0 === NW ? void 0 : NW.day) && void 0 !== EW ? EW : null,
                                index: iW
                              })
                            })), (0, AW.jsx)("ol", {
                              ref: LW,
                              className: "DocsTimeline",
                              children: wW.map((WW => {
                                let {
                                  month: iW,
                                  entries: OW
                                } = WW;
                                return (0, AW.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [iW && (0, AW.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: iW
                                  }), (0, AW.jsx)("ol", {
                                    children: OW.map((WW => {
                                      let {
                                        entry: iW,
                                        day: OW,
                                        index: mW
                                      } = WW;
                                      return (0, AW.jsx)("li", {
                                        className: NW()("DocsTimelineNotch", {
                                          Passed: mW < PW,
                                          Active: mW === PW
                                        }),
                                        children: (0, AW.jsx)(hN, {
                                          entry: iW,
                                          isActive: mW === PW,
                                          onNavigate: EW,
                                          label: iW.text,
                                          children: (0, AW.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== OW && void 0 !== OW ? OW : iW.text
                                          })
                                        })
                                      }, iW.anchor)
                                    }))
                                  })]
                                }, OW[0].entry.anchor)
                              }))
                            })
                          }

                          function nN(WW) {
                            let {
                              isChangelog: iW,
                              toc: OW,
                              activeAnchor: mW,
                              onNavigate: EW
                            } = WW;
                            return 0 === OW.length ? null : (0, AW.jsxs)(AW.Fragment, {
                              children: [(0, AW.jsx)("div", {
                                className: "DocsTocTitle",
                                children: iW ? "Updates" : "On this page"
                              }), iW ? (0, AW.jsx)(HN, {
                                toc: OW,
                                activeAnchor: mW,
                                onNavigate: EW
                              }) : (0, AW.jsx)("ul", {
                                children: OW.map((WW => (0, AW.jsx)("li", {
                                  children: (0, AW.jsx)(hN, {
                                    entry: WW,
                                    isActive: WW.anchor === mW,
                                    onNavigate: EW,
                                    children: WW.text.replace(/`/g, "")
                                  })
                                }, WW.anchor)))
                              })]
                            })
                          }
                          const uN = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            oN = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            dN = 20,
                            eN = 10,
                            vN = 40,
                            gN = 120;
                          let DN;

                          function VN(WW) {
                            const iW = WW.gallery;
                            if (!iW) return [];
                            if (kO(iW)) return function(WW) {
                              return MO(WW).entries.map((WW => WW.name))
                            }(iW).map((OW => ({
                              page: WW,
                              anchor: eO(iW, OW),
                              title: OW,
                              kind: oN[iW],
                              text: "",
                              listedUnder: WW.title
                            })));
                            const OW = fW(WW);
                            return (0, yW.v)(OW).flatMap((mW => {
                              const EW = mW.heading ? `${WW.title} \u203a ${mW.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : WW.title;
                              return gO(iW, OW, mW.blocks).flatMap((OW => "names" !== OW.kind ? [] : OW.names.map((mW => {
                                const NW = OW.isSongs ? "Song" : oN[iW];
                                return {
                                  page: WW,
                                  anchor: mW.anchor,
                                  title: mW.name,
                                  kind: NW,
                                  text: "",
                                  listedUnder: EW
                                }
                              }))))
                            }))
                          }

                          function pN(WW, iW, OW) {
                            const mW = WW.title.toLowerCase();
                            let EW = 0;
                            if (mW === iW) EW = 100;
                            else if (mW.startsWith(iW)) EW = 80;
                            else if (mW.includes(iW)) EW = 60;
                            else if (OW.every((WW => mW.includes(WW)))) EW = 45;
                            else {
                              if (!WW.text.toLowerCase().includes(iW)) return 0;
                              EW = 20
                            }
                            return EW - Math.min(mW.length / 10, 9) + ("Page" === WW.kind ? 8 : "Method" === WW.kind ? 3 : 0) - (WW.listedUnder ? dN : 0)
                          }

                          function fN(WW, iW) {
                            const OW = WW.toLowerCase().indexOf(iW),
                              mW = Math.max(0, OW - gN / 3);
                            return `${mW>0?"\u2026":""}${WW.slice(mW,mW+gN)}${mW+gN<WW.length?"\u2026":""}`
                          }

                          function CN(WW) {
                            let {
                              text: iW,
                              query: OW
                            } = WW;
                            const mW = OW ? iW.toLowerCase().indexOf(OW) : -1;
                            return -1 === mW ? (0, AW.jsx)(AW.Fragment, {
                              children: iW
                            }) : (0, AW.jsxs)(AW.Fragment, {
                              children: [iW.slice(0, mW), (0, AW.jsx)("mark", {
                                children: iW.slice(mW, mW + OW.length)
                              }), iW.slice(mW + OW.length)]
                            })
                          }

                          function XN(WW) {
                            let {
                              basePath: iW,
                              onClose: OW
                            } = WW;
                            const EW = (0, LW.w)(),
                              [PW, cW] = (0, mW.useState)(""),
                              [wW, tW] = (0, mW.useState)(0),
                              ZW = (0, mW.useRef)(null),
                              xW = (0, mW.useRef)(null),
                              lW = PW.trim().toLowerCase(),
                              bW = (0, mW.useMemo)((() => {
                                const WW = (DN || (DN = gW.flatMap((WW => {
                                  const iW = fW(WW);
                                  return [{
                                    page: WW,
                                    anchor: "",
                                    title: WW.title,
                                    kind: "Page",
                                    text: WW.summary
                                  }, ...iW.sections.flatMap((iW => {
                                    const OW = iW.blocks.filter((WW => "paragraph" === WW.kind)).map(yW.i).join(" ").replace(/[`*]/g, ""),
                                      mW = {
                                        page: WW,
                                        anchor: iW.heading.anchor,
                                        title: iW.heading.text.replace(/`/g, ""),
                                        kind: uN[WW.layout],
                                        text: OW
                                      },
                                      EW = iW.blocks.flatMap((iW => "article" === WW.layout && "heading" === iW.kind && 3 === iW.level ? [{
                                        page: WW,
                                        anchor: iW.anchor,
                                        title: iW.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: mW.title
                                      }] : []));
                                    return [mW, ...EW]
                                  })), ...VN(WW)]
                                }))), DN);
                                if (!lW) return WW.filter((WW => "Page" === WW.kind));
                                const iW = lW.split(/\s+/);
                                let OW = 0;
                                return WW.map((WW => ({
                                  entry: WW,
                                  score: pN(WW, lW, iW)
                                }))).filter((WW => WW.score > 0)).sort(((WW, iW) => iW.score - WW.score)).filter((WW => !WW.entry.listedUnder || (OW++, OW <= eN))).slice(0, vN).map((WW => WW.entry))
                              }), [lW]);
                            (0, mW.useEffect)((() => {
                              tW(0)
                            }), [lW]), (0, mW.useEffect)((() => {
                              const WW = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === WW || void 0 === WW || WW.focus()
                              }
                            }), []), (0, mW.useEffect)((() => {
                              var WW, iW;
                              null === (WW = ZW.current) || void 0 === WW || null === (iW = WW.querySelector(".Active")) || void 0 === iW || iW.scrollIntoView({
                                block: "nearest"
                              })
                            }), [wW]);
                            const UW = WW => {
                              EW(qW(iW, WW.page, WW.anchor)), OW()
                            };
                            return (0, AW.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: WW => {
                                WW.target === WW.currentTarget && OW()
                              },
                              children: (0, AW.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: WW => {
                                  WW.target !== xW.current && WW.preventDefault()
                                },
                                onKeyDown: WW => {
                                  if ("Escape" === WW.key) OW();
                                  else if ("Tab" === WW.key) {
                                    var iW;
                                    WW.preventDefault(), null === (iW = xW.current) || void 0 === iW || iW.focus()
                                  }
                                },
                                children: [(0, AW.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, AW.jsx)(jW, {
                                    name: "magnifying-glass"
                                  }), (0, AW.jsx)("input", {
                                    ref: xW,
                                    autoFocus: !0,
                                    value: PW,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": bW.length > 0 ? `DocsSearchResult-${wW}` : void 0,
                                    onChange: WW => {
                                      cW(WW.target.value)
                                    },
                                    onKeyDown: WW => {
                                      if ("ArrowDown" === WW.key || "ArrowUp" === WW.key) {
                                        WW.preventDefault();
                                        const iW = "ArrowDown" === WW.key ? 1 : -1;
                                        tW((wW + iW + bW.length) % Math.max(bW.length, 1))
                                      } else "Enter" === WW.key && bW[wW] && UW(bW[wW])
                                    }
                                  }), (0, AW.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, AW.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: ZW,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!lW && (0, AW.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), bW.map(((WW, iW) => {
                                    var OW;
                                    return (0, AW.jsxs)("li", {
                                      id: `DocsSearchResult-${iW}`,
                                      role: "option",
                                      "aria-selected": iW === wW,
                                      className: NW()("DocsSearchResult", {
                                        Active: iW === wW
                                      }),
                                      onMouseMove: () => {
                                        tW(iW)
                                      },
                                      onClick: () => {
                                        UW(WW)
                                      },
                                      children: [(0, AW.jsx)(jW, {
                                        name: WW.page.icon
                                      }), (0, AW.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, AW.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, AW.jsx)(CN, {
                                            text: WW.title,
                                            query: lW
                                          })
                                        }), WW.text && (0, AW.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, AW.jsx)(CN, {
                                            text: fN(WW.text, lW),
                                            query: lW
                                          })
                                        })]
                                      }), (0, AW.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === WW.kind ? "Page" : null !== (OW = WW.listedUnder) && void 0 !== OW ? OW : `${WW.kind} \xb7 ${WW.page.title}`
                                      })]
                                    }, `${WW.page.id}#${WW.anchor}`)
                                  })), lW && 0 === bW.length && (0, AW.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", PW, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function BN(WW, iW) {
                            if (iW < 10) return `${WW.toFixed(1)}s`;
                            const OW = Math.floor(WW);
                            return `${Math.floor(OW/60)}:${String(OW%60).padStart(2,"0")}`
                          }

                          function qN() {
                            const WW = xm((WW => WW.track)),
                              iW = xm((WW => WW.volume)),
                              [OW, EW] = (0, mW.useState)(0),
                              PW = (0, mW.useRef)(mm);
                            if ((0, mW.useEffect)((() => {
                                if (!WW) return;
                                if (EW(jm()), "playing" !== WW.status) return;
                                let iW = 0;
                                const OW = () => {
                                  EW(jm()), iW = requestAnimationFrame(OW)
                                };
                                return iW = requestAnimationFrame(OW), () => {
                                  cancelAnimationFrame(iW)
                                }
                              }), [WW]), !WW) return null;
                            const LW = "paused" !== WW.status,
                              cW = Math.min(OW, WW.duration);
                            return (0, AW.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, AW.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, AW.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": LW ? `Pause ${WW.name}` : `Play ${WW.name}`,
                                  onClick: bm,
                                  children: (0, AW.jsx)(jW, {
                                    name: LW ? "pause" : "play"
                                  })
                                }), (0, AW.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, AW.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, AW.jsx)("code", {
                                      children: WW.name
                                    }), (0, AW.jsx)("span", {
                                      children: WW.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, AW.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, AW.jsx)("span", {
                                      children: BN(cW, WW.duration)
                                    }), (0, AW.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: WW.duration || 1,
                                      step: .01,
                                      value: cW,
                                      disabled: 0 === WW.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${BN(cW,WW.duration)} of ${BN(WW.duration,WW.duration)}`,
                                      onChange: WW => {
                                        const iW = Number(WW.target.value);
                                        ! function(WW) {
                                          var iW;
                                          cm = WW, null === (iW = Pm) || void 0 === iW || iW.seek(WW)
                                        }(iW), EW(iW)
                                      }
                                    }), (0, AW.jsx)("span", {
                                      children: WW.duration > 0 ? BN(WW.duration, WW.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, AW.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, AW.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === iW ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === iW ? Um(PW.current) : (PW.current = iW, Um(0))
                                    },
                                    children: (0, AW.jsx)(jW, {
                                      name: "volume",
                                      className: NW()({
                                        Muted: 0 === iW
                                      })
                                    })
                                  }), (0, AW.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: iW,
                                    "aria-label": "Volume",
                                    onChange: WW => {
                                      Um(Number(WW.target.value))
                                    }
                                  })]
                                }), (0, AW.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var iW;
                                    null === (iW = document.querySelector(`[data-docs-track="${CSS.escape(Em(WW.name,WW.isSong))}"]`)) || void 0 === iW || iW.focus(), km()
                                  },
                                  children: (0, AW.jsx)(jW, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var RN = OW(39);
                          const GN = "docsTheme",
                            IN = window.matchMedia("(prefers-color-scheme: light)");

                          function aN(WW) {
                            let {
                              theme: iW,
                              onChange: OW
                            } = WW;
                            const mW = "dark" === iW ? "light" : "dark";
                            return (0, AW.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${mW} theme`,
                              title: `Switch to ${mW} theme`,
                              onClick: () => {
                                OW(mW)
                              },
                              children: (0, AW.jsx)(jW, {
                                name: "dark" === iW ? "moon" : "sun"
                              })
                            })
                          }
                          const rN = "https://github.com/Bloxdy/code-api",
                            zN = "https://discord.gg/playbloxd",
                            FN = 180,
                            QN = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function WP(WW) {
                            let {
                              basePath: iW,
                              activePageId: OW,
                              onNavigate: mW
                            } = WW;
                            return (0, AW.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: DW.map((WW => (0, AW.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, AW.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: WW.title
                                }), WW.pageIds.map((WW => {
                                  var EW;
                                  const LW = VW(WW);
                                  return (0, AW.jsxs)(PW.b, {
                                    to: qW(iW, LW),
                                    className: NW()("DocsNavLink", {
                                      Active: LW.id === OW
                                    }),
                                    "aria-current": LW.id === OW ? "page" : void 0,
                                    onClick: mW,
                                    children: [(0, AW.jsx)(jW, {
                                      name: LW.icon
                                    }), (0, AW.jsx)("span", {
                                      children: null !== (EW = LW.navTitle) && void 0 !== EW ? EW : LW.title
                                    })]
                                  }, LW.id)
                                }))]
                              }, WW.title)))
                            })
                          }

                          function iP(WW) {
                            let {
                              basePath: iW,
                              pageId: OW
                            } = WW;
                            const mW = DW.flatMap((WW => WW.pageIds)),
                              EW = mW.indexOf(OW),
                              NW = EW > 0 ? VW(mW[EW - 1]) : null,
                              LW = EW < mW.length - 1 ? VW(mW[EW + 1]) : null;
                            return (0, AW.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [NW ? (0, AW.jsxs)(PW.b, {
                                className: "DocsPagerLink Previous",
                                to: qW(iW, NW),
                                children: [(0, AW.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, AW.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: NW.title
                                })]
                              }) : (0, AW.jsx)("span", {}), LW && (0, AW.jsxs)(PW.b, {
                                className: "DocsPagerLink Next",
                                to: qW(iW, LW),
                                children: [(0, AW.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, AW.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: LW.title
                                })]
                              })]
                            })
                          }

                          function OP(WW) {
                            let {
                              basePath: iW,
                              embedded: OW = !1
                            } = WW;
                            const {
                              pageSlug: EW = ""
                            } = (0, LW.z)(), wW = (0, LW.u)(), tW = (0, LW.w)(), ZW = (xW = EW, gW.find((WW => WW.slug === xW)));
                            var xW;
                            const [lW, bW] = function() {
                              const [WW, iW] = (0, mW.useState)((() => {
                                const WW = RN.i.getItem(GN);
                                return "dark" === WW || "light" === WW ? WW : null
                              })), [OW, EW] = (0, mW.useState)(IN.matches ? "light" : "dark");
                              return (0, mW.useEffect)((() => {
                                const WW = () => {
                                  EW(IN.matches ? "light" : "dark")
                                };
                                return IN.addEventListener("change", WW), () => {
                                  IN.removeEventListener("change", WW)
                                }
                              }), []), [null !== WW && void 0 !== WW ? WW : OW, WW => {
                                RN.i.setItem(GN, WW), iW(WW)
                              }]
                            }(), [UW, kW] = (0, mW.useState)(null), [sW, MW] = (0, mW.useState)(!1), [KW, SW] = (0, mW.useState)(!1), [YW, TW] = (0, mW.useState)([]), JW = function(WW, iW) {
                              const [OW, EW] = (0, mW.useState)("");
                              return (0, mW.useEffect)((() => {
                                if (!iW) return;
                                let OW = 0;
                                const mW = () => {
                                    var mW, NW;
                                    OW = 0;
                                    const PW = iW.getBoundingClientRect().top + FN;
                                    let LW = null !== (mW = null === (NW = WW[0]) || void 0 === NW ? void 0 : NW.anchor) && void 0 !== mW ? mW : "";
                                    for (const iW of WW) {
                                      const WW = document.getElementById(iW.anchor);
                                      WW && WW.getBoundingClientRect().top <= PW && (LW = iW.anchor)
                                    }
                                    iW.scrollTop + iW.clientHeight >= iW.scrollHeight - 2 && iW.scrollTop > 0 && WW.length > 0 && (LW = WW[WW.length - 1].anchor), EW(LW)
                                  },
                                  NW = () => {
                                    OW || (OW = requestAnimationFrame(mW))
                                  };
                                return mW(), iW.addEventListener("scroll", NW, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(OW), iW.removeEventListener("scroll", NW)
                                }
                              }), [WW, iW]), OW
                            }(YW, UW), hW = "" === EW && wW.hash ? function(WW) {
                              const iW = (0, yW.o)(WW);
                              if (CW(VW("welcome"), iW)) return null;
                              const OW = Object.hasOwn(BW, iW) ? BW[iW] : null;
                              if (OW) return {
                                page: VW(OW.pageId),
                                anchor: OW.anchor
                              };
                              const mW = VW("readme");
                              return CW(mW, iW) ? {
                                page: mW,
                                anchor: iW
                              } : XW(`#${iW}`)
                            }(wW.hash) : null;
                            (0, mW.useEffect)((() => (cW.d.set({
                              musicOnFromPage: !1
                            }), () => {
                              cW.d.set({
                                musicOnFromPage: !0
                              }), km()
                            })), []), (0, mW.useEffect)((() => {
                              const WW = WW => {
                                const iW = WW.target;
                                if (iW.closest(".DocsTextDialog")) return;
                                const OW = iW.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(iW.tagName);
                                "k" === WW.key && (WW.metaKey || WW.ctrlKey) || "/" === WW.key && !OW ? (WW.preventDefault(), SW(!0)) : "Escape" === WW.key && MW(!1)
                              };
                              return window.addEventListener("keydown", WW), () => {
                                window.removeEventListener("keydown", WW)
                              }
                            }), []);
                            const HW = (0, mW.useRef)(null);
                            (0, mW.useLayoutEffect)((() => {
                              var WW, iW;
                              if (!UW) return;
                              const OW = HW.current === wW.pathname;
                              HW.current = wW.pathname;
                              const mW = (0, yW.o)(wW.hash),
                                EW = mW ? document.getElementById(mW) : null;
                              if (null === (WW = UW.querySelector(".DocsTargeted")) || void 0 === WW || WW.classList.remove("DocsTargeted"), null === EW || void 0 === EW || null === (iW = EW.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === iW || iW.classList.add("DocsTargeted"), EW) {
                                var NW;
                                const WW = EW.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (NW = EW.closest(".DocsChangelogEntry")) && void 0 !== NW ? NW : EW).scrollIntoView({
                                  block: WW ? "center" : "start",
                                  behavior: OW ? "smooth" : "auto"
                                })
                              } else OW || UW.scrollTo({
                                top: 0
                              })
                            }), [UW, wW.pathname, wW.hash, wW.key]);
                            const nW = (0, mW.useCallback)((() => {
                                MW(!1)
                              }), []),
                              uW = (0, mW.useCallback)((WW => {
                                tW({
                                  hash: WW
                                })
                              }), [tW]);
                            if (hW) return (0, AW.jsx)(LW.d, {
                              replace: !0,
                              to: qW(iW, hW.page, hW.anchor)
                            });
                            if (!ZW) return (0, AW.jsx)(LW.d, {
                              replace: !0,
                              to: iW
                            });
                            const oW = OW ? "div" : "main";
                            return (0, AW.jsx)(li.Provider, {
                              value: iW,
                              children: (0, AW.jsx)(Ai.Provider, {
                                value: UW,
                                children: (0, AW.jsxs)("div", {
                                  ref: kW,
                                  className: NW()("DocsSite", {
                                    Embedded: OW,
                                    NavOpen: sW
                                  }),
                                  "data-theme": lW,
                                  children: [(0, AW.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, AW.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": sW ? "Close menu" : "Open menu",
                                      "aria-expanded": sW,
                                      onClick: () => {
                                        MW(!sW)
                                      },
                                      children: (0, AW.jsx)(jW, {
                                        name: sW ? "cross" : "menu"
                                      })
                                    }), (0, AW.jsxs)(PW.b, {
                                      to: iW,
                                      className: "DocsBrand",
                                      children: [(0, AW.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, AW.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, AW.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, AW.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        SW(!0)
                                      },
                                      children: [(0, AW.jsx)(jW, {
                                        name: "magnifying-glass"
                                      }), (0, AW.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, AW.jsxs)("kbd", {
                                        children: [QN ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, AW.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, AW.jsxs)("a", {
                                        href: zN,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, AW.jsx)(jW, {
                                          name: "discord"
                                        }), (0, AW.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, AW.jsxs)("a", {
                                        href: rN,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, AW.jsx)(jW, {
                                          name: "external-link"
                                        }), (0, AW.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !OW && (0, AW.jsxs)(PW.b, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, AW.jsx)(jW, {
                                          name: "play"
                                        }), (0, AW.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, AW.jsx)(aN, {
                                        theme: lW,
                                        onChange: bW
                                      })]
                                    })]
                                  }), (0, AW.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, AW.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, AW.jsx)(WP, {
                                        basePath: iW,
                                        activePageId: ZW.id,
                                        onNavigate: nW
                                      })
                                    }), (0, AW.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: nW
                                    }), (0, AW.jsxs)(oW, {
                                      className: "DocsMain",
                                      children: [(0, AW.jsx)(TN, {
                                        page: ZW,
                                        onTocChange: TW
                                      }, ZW.id), (0, AW.jsx)(iP, {
                                        basePath: iW,
                                        pageId: ZW.id
                                      })]
                                    }), (0, AW.jsx)("aside", {
                                      className: NW()("DocsToc", {
                                        Timeline: "changelog" === ZW.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, AW.jsx)(nN, {
                                        isChangelog: "changelog" === ZW.layout,
                                        toc: YW,
                                        activeAnchor: JW,
                                        onNavigate: uW
                                      })
                                    })]
                                  }), (0, AW.jsx)(qN, {}), KW && (0, AW.jsx)(XN, {
                                    basePath: iW,
                                    onClose: () => {
                                      SW(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 5479: (WW, iW, OW) => {
                          OW.d(iW, {
                            B: () => xW,
                            d: () => mW,
                            e: () => PW,
                            i: () => jW,
                            j: () => bW,
                            l: () => LW,
                            o: () => EW,
                            s: () => NW,
                            v: () => AW,
                            y: () => lW
                          });
                          const mW = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function EW(WW) {
                            try {
                              return decodeURIComponent(WW.slice(1))
                            } catch {
                              return WW.slice(1)
                            }
                          }

                          function NW(WW) {
                            return WW.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const PW = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${mW.source}`, "g");

                          function LW(WW, iW) {
                            return 2 === WW.length ? iW.replace(/^ (.*) $/, "$1") : iW
                          }

                          function cW(WW) {
                            return "" === WW.trim()
                          }

                          function wW(WW) {
                            const iW = [];
                            for (const OW of WW.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) iW.length > 0 && iW[iW.length - 1].endsWith("\\") ? iW[iW.length - 1] += `|${OW}` : iW.push(OW);
                            return iW.map((WW => WW.trim().replaceAll("\\|", "|")))
                          }
                          const tW = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function ZW(WW) {
                            const iW = [],
                              OW = [{
                                indent: -1,
                                items: iW
                              }];
                            let mW = null;
                            for (const EW of WW) {
                              const WW = EW.match(tW);
                              if (!WW) {
                                mW && (mW.text += ` ${EW.trim()}`);
                                continue
                              }
                              const iW = WW[1].replace(/\t/g, "  ").length;
                              for (; iW <= OW[OW.length - 1].indent;) OW.pop();
                              mW = {
                                text: WW[3].trim(),
                                children: []
                              }, OW[OW.length - 1].items.push(mW), OW.push({
                                indent: iW,
                                items: mW.children
                              })
                            }
                            return iW
                          }

                          function xW(WW) {
                            const iW = WW.replace(/\r\n/g, "\n").split("\n"),
                              OW = [];
                            let mW = 0;
                            for (; mW < iW.length;) {
                              const WW = iW[mW];
                              if (cW(WW)) {
                                mW++;
                                continue
                              }
                              const EW = WW.match(/^\s*```\s*(\w*)\s*$/);
                              if (EW) {
                                const WW = [];
                                for (mW++; mW < iW.length && !/^\s*```\s*$/.test(iW[mW]);) WW.push(iW[mW]), mW++;
                                mW++, OW.push({
                                  kind: "code",
                                  lang: EW[1] || "text",
                                  code: WW.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const PW = WW.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (PW) {
                                const WW = PW[2].trim();
                                OW.push({
                                  kind: "heading",
                                  level: PW[1].length,
                                  text: WW,
                                  anchor: NW(WW)
                                }), mW++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(WW)) {
                                OW.push({
                                  kind: "rule"
                                }), mW++;
                                continue
                              }
                              if (WW.trim().startsWith("|") && mW + 1 < iW.length && /^\s*\|[\s:|-]+\|\s*$/.test(iW[mW + 1])) {
                                const EW = wW(WW),
                                  NW = [];
                                for (mW += 2; mW < iW.length && iW[mW].trim().startsWith("|");) NW.push(wW(iW[mW])), mW++;
                                OW.push({
                                  kind: "table",
                                  header: EW,
                                  rows: NW
                                });
                                continue
                              }
                              if (WW.startsWith(">")) {
                                const WW = [];
                                for (; mW < iW.length && iW[mW].startsWith(">");) WW.push(iW[mW].replace(/^>\s?/, "")), mW++;
                                OW.push({
                                  kind: "quote",
                                  blocks: xW(WW.join("\n"))
                                });
                                continue
                              }
                              if (tW.test(WW)) {
                                const EW = [],
                                  NW = /^\s*\d+\./.test(WW);
                                for (; mW < iW.length && !cW(iW[mW]) && (tW.test(iW[mW]) || /^\s+\S/.test(iW[mW]));) EW.push(iW[mW]), mW++;
                                OW.push({
                                  kind: "list",
                                  ordered: NW,
                                  items: ZW(EW)
                                });
                                continue
                              }
                              const LW = [];
                              for (; mW < iW.length && !cW(iW[mW]) && !/^\s*```/.test(iW[mW]) && !/^#{1,6}\s/.test(iW[mW]) && !iW[mW].startsWith(">") && !tW.test(iW[mW]) && (!iW[mW].trim().startsWith("|") || 0 !== LW.length);) LW.push(iW[mW].trim()), mW++;
                              0 === LW.length && (LW.push(iW[mW].trim()), mW++), OW.push({
                                kind: "paragraph",
                                text: LW.join(" ")
                              })
                            }
                            return OW
                          }

                          function lW(WW) {
                            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const OW = xW(WW);
                            let mW = "";
                            const EW = [],
                              NW = [],
                              PW = new Map;
                            for (const wW of OW) {
                              if ("heading" === wW.kind) {
                                var LW;
                                const WW = (null !== (LW = PW.get(wW.anchor)) && void 0 !== LW ? LW : 0) + 1;
                                PW.set(wW.anchor, WW), WW > 1 && (wW.anchor = `${wW.anchor}-${WW}`)
                              }
                              if ("heading" === wW.kind && 1 === wW.level && !mW) {
                                mW = wW.text;
                                continue
                              }
                              if ("heading" === wW.kind && wW.level <= iW) {
                                NW.push({
                                  heading: wW,
                                  blocks: []
                                });
                                continue
                              }
                              const WW = NW.at(-1);
                              WW ? WW.blocks.push(wW) : EW.push(wW)
                            }
                            const cW = WW => {
                              for (;
                                "rule" === (null === (iW = WW.at(-1)) || void 0 === iW ? void 0 : iW.kind);) {
                                var iW;
                                WW.pop()
                              }
                            };
                            cW(EW);
                            for (const wW of NW) cW(wW.blocks);
                            return {
                              title: mW,
                              intro: EW,
                              sections: NW
                            }
                          }

                          function AW(WW) {
                            return [{
                              heading: null,
                              blocks: WW.intro
                            }, ...WW.sections.map((WW => ({
                              heading: WW.heading,
                              blocks: WW.blocks
                            })))]
                          }

                          function bW(WW) {
                            return WW.flatMap((WW => "code" === WW.kind ? [WW] : "quote" === WW.kind ? bW(WW.blocks) : []))
                          }

                          function jW(WW) {
                            switch (WW.kind) {
                              case "heading":
                              case "paragraph":
                                return WW.text;
                              case "code":
                                return WW.code;
                              case "table":
                                return [WW.header, ...WW.rows].map((WW => WW.join(" "))).join(" ");
                              case "list": {
                                const iW = WW => WW.map((WW => `${WW.text} ${iW(WW.children)}`)).join(" ");
                                return iW(WW.items)
                              }
                              case "quote":
                                return WW.blocks.map(jW).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 5593: (WW, iW, OW) => {
                          OW.d(iW, {
                            b: () => LW
                          });
                          var mW = OW(62),
                            EW = OW(327),
                            NW = OW(2032),
                            PW = OW(1283);

                          function LW(WW) {
                            let {
                              text: iW
                            } = WW;
                            const OW = [];
                            let LW = "";
                            return (0, EW.kc)(iW).forEach(((WW, iW) => {
                              if ("string" === typeof WW || !(0, NW.d)(WW.icon)) return void(LW += "string" === typeof WW ? WW : WW.icon);
                              const EW = Math.max(0, LW.trimEnd().search(/\S{1,12}$/));
                              OW.push((0, PW.jsxs)(mW.Fragment, {
                                children: [LW.slice(0, EW), (0, PW.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [LW.slice(EW), (0, PW.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": WW.icon,
                                    children: (0, PW.jsx)(NW.b, {
                                      itemName: WW.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, iW)), LW = ""
                            })), OW.push(LW), (0, PW.jsx)(PW.Fragment, {
                              children: OW
                            })
                          }
                        }, 5510: (WW, iW, OW) => {
                          OW.d(iW, {
                            h: () => kW,
                            e: () => UW
                          });
                          var mW = OW(62),
                            EW = OW(1526),
                            NW = OW(2021),
                            PW = OW(5517),
                            LW = OW(1283);
                          const cW = (0, mW.memo)((function(WW) {
                            let {
                              initialParameters: iW
                            } = WW;
                            const OW = (0, mW.useRef)(null),
                              EW = (0, mW.useRef)(null),
                              cW = (0, mW.useRef)(0),
                              wW = (0, mW.useRef)(null),
                              tW = iW.description,
                              ZW = iW.yN,
                              {
                                scale: xW,
                                rotation: lW
                              } = null !== iW && void 0 !== iW ? iW : {},
                              AW = (0, PW.f)();
                            return (0, mW.useEffect)((() => {
                              const WW = AW.onFrame((() => {
                                const WW = AW.getState();
                                if (!WW.isActive || !OW.current || !EW.current) return;
                                const iW = WW.state;
                                if (OW.current.value = iW.progress, iW.clickCount > cW.current) {
                                  cW.current = iW.clickCount;
                                  const WW = EW.current;
                                  WW.classList.add("pulse"), wW.current = setTimeout((() => {
                                    WW.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(wW.current), WW()
                              }
                            }), [AW]), (0, LW.jsx)(LW.Fragment, {
                              children: (0, LW.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== xW && {
                                    "--scale": xW
                                  },
                                  ...null !== lW && {
                                    "--rotation": `${lW}deg`
                                  }
                                },
                                children: [(0, LW.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: OW
                                }), (0, LW.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: EW,
                                  children: (0, LW.jsx)(NW.d, {
                                    text: [{
                                      icon: ZW
                                    }]
                                  })
                                }), (0, LW.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, LW.jsx)(NW.d, {
                                    text: tW
                                  })
                                })]
                              })
                            })
                          }));
                          var wW = OW(1089),
                            tW = OW.n(wW);
                          const ZW = 2 * Math.PI * 90,
                            xW = (0, mW.memo)((function(WW) {
                              let {
                                initialParameters: iW
                              } = WW;
                              const OW = (0, mW.useRef)(null),
                                EW = (0, mW.useRef)(null),
                                cW = (0, mW.useRef)(null),
                                wW = iW.label,
                                xW = iW.icon,
                                lW = iW.hN,
                                {
                                  scale: AW,
                                  rotation: bW,
                                  HN: jW
                                } = null !== iW && void 0 !== iW ? iW : {},
                                UW = (0, PW.f)();
                              return (0, mW.useEffect)((() => {
                                const WW = UW.onFrame((() => {
                                  var WW, iW;
                                  const mW = UW.getState();
                                  if (!mW.isActive || !EW.current) return;
                                  const NW = mW.state,
                                    PW = null !== (WW = NW.timeRemaining) && void 0 !== WW ? WW : 0,
                                    LW = null !== (iW = NW.JN) && void 0 !== iW ? iW : 1,
                                    wW = ZW * (1 - PW / LW);
                                  EW.current.style.strokeDashoffset = `${wW}`, OW.current && (OW.current.style.opacity = PW > 0 ? "1" : "0"), cW.current && lW && (cW.current.textContent = `${(PW/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  WW()
                                }
                              }), [UW, lW]), (0, LW.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: OW,
                                style: {
                                  ...null !== AW && {
                                    "--scale": AW
                                  },
                                  ...null !== bW && {
                                    "--rotation": `${bW}deg`
                                  }
                                },
                                children: [(0, LW.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, LW.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, LW.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, LW.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: ZW,
                                      ref: EW
                                    })]
                                  }), (0, LW.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, LW.jsx)(NW.d, {
                                      text: [{
                                        icon: xW
                                      }],
                                      className: tW()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: jW
                                      })
                                    })
                                  })]
                                }), (0, LW.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, LW.jsx)(NW.d, {
                                    text: wW,
                                    className: "QTETimedClickLabelText"
                                  }), lW && (0, LW.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: cW
                                  })]
                                })]
                              })
                            })),
                            lW = (0, mW.memo)((function(WW) {
                              let {
                                initialParameters: iW
                              } = WW;
                              const OW = (0, mW.useRef)(null),
                                EW = (0, mW.useRef)(null),
                                cW = (0, mW.useRef)(null),
                                wW = (0, mW.useRef)(!1),
                                tW = iW.description,
                                ZW = null === iW || void 0 === iW ? void 0 : iW.icon,
                                xW = (0, PW.f)();
                              return (0, mW.useEffect)((() => {
                                const WW = xW.onFrame((() => {
                                  const WW = xW.getState();
                                  if (!WW.isActive) return;
                                  const iW = WW.state;
                                  if (OW.current) {
                                    const WW = 100 * (iW.catchZonePosition - iW.uN / 2);
                                    OW.current.style.left = `${WW}%`, OW.current.style.width = 100 * iW.uN + "%", iW.isCatching !== wW.current && (wW.current = iW.isCatching, iW.isCatching ? OW.current.classList.add("catching") : OW.current.classList.remove("catching"))
                                  }
                                  EW.current && (EW.current.style.left = 100 * iW.moverPosition + "%"), cW.current && (cW.current.value = iW.progress)
                                }));
                                return () => {
                                  WW()
                                }
                              }), [xW]), (0, LW.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, LW.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, LW.jsx)(NW.d, {
                                    text: tW
                                  })
                                }), (0, LW.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: cW
                                }), (0, LW.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, LW.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: OW
                                  }), (0, LW.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: EW,
                                    children: (0, LW.jsx)("span", {
                                      children: ZW && (0, LW.jsx)(NW.d, {
                                        text: [{
                                          icon: ZW,
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
                          var AW = OW(643);
                          const bW = (0, mW.memo)((function(WW) {
                              let {
                                initialParameters: iW
                              } = WW;
                              const OW = (0, mW.useRef)(null),
                                EW = iW.label,
                                cW = iW.VN,
                                {
                                  icon: wW,
                                  scale: tW,
                                  rotation: ZW
                                } = null !== iW && void 0 !== iW ? iW : {},
                                xW = 100 * (.5 - cW / 2),
                                lW = 100 * cW,
                                bW = (0, PW.f)();
                              return (0, mW.useEffect)((() => {
                                const WW = bW.onFrame((() => {
                                  const WW = bW.getState();
                                  if (!WW.isActive || !OW.current) return;
                                  const iW = WW.state;
                                  OW.current.style.left = 100 * iW.markerPosition + "%"
                                }));
                                return () => {
                                  WW()
                                }
                              }), [bW]), (0, LW.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, AW.K)(tW) && {
                                    "--scale": tW
                                  },
                                  ...!(0, AW.K)(ZW) && {
                                    "--rotation": `${ZW}deg`
                                  }
                                },
                                children: [wW && (0, LW.jsx)(NW.d, {
                                  text: [{
                                    icon: wW
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, LW.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, LW.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${xW}%`,
                                      width: `${lW}%`
                                    }
                                  }), (0, LW.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: OW
                                  })]
                                }), (0, LW.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, LW.jsx)(NW.d, {
                                    text: EW
                                  })
                                })]
                              })
                            })),
                            jW = (0, mW.memo)((function(WW) {
                              let {
                                initialParameters: iW
                              } = WW;
                              const OW = (0, mW.useRef)(null),
                                [EW, cW] = (0, mW.useState)((() => new Array(iW.fN).fill("pending"))),
                                [wW, tW] = (0, mW.useState)((() => {
                                  const WW = iW.BN;
                                  return (0, AW.K)(WW) || WW <= 0 ? [] : new Array(WW).fill("pending")
                                })),
                                ZW = iW.label,
                                {
                                  icon: xW
                                } = iW,
                                lW = (0, mW.useRef)(0),
                                bW = (0, mW.useRef)(0),
                                jW = (0, mW.useRef)([]),
                                UW = (0, PW.f)();
                              return (0, mW.useEffect)((() => {
                                const WW = UW.onFrame((() => {
                                  const WW = UW.getState();
                                  if (!WW.isActive || !OW.current) return;
                                  const iW = WW.state,
                                    mW = 30 + 60 * iW.outerCircleProgress;
                                  if (OW.current.setAttribute("r", String(mW)), !0 === iW.lastClickResult && iW.successes > lW.current) {
                                    OW.current.classList.remove("QTERhythmClickOuterCircle--miss"), OW.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const WW = setTimeout((() => {
                                      var WW;
                                      null === (WW = OW.current) || void 0 === WW || WW.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    jW.current.push(WW)
                                  } else if (!1 === iW.lastClickResult && iW.misses > bW.current) {
                                    OW.current.classList.remove("QTERhythmClickOuterCircle--hit"), OW.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const WW = setTimeout((() => {
                                      var WW;
                                      null === (WW = OW.current) || void 0 === WW || WW.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    jW.current.push(WW)
                                  }
                                  iW.successes === lW.current && iW.misses === bW.current || (lW.current = iW.successes, bW.current = iW.misses, cW((WW => {
                                    const OW = [...WW];
                                    for (let mW = 0; mW < iW.fN; mW++) OW[mW] = mW < iW.successes ? "success" : "pending";
                                    return OW
                                  })), tW((WW => {
                                    if (0 === WW.length) return WW;
                                    const OW = [...WW];
                                    for (let mW = 0; mW < OW.length; mW++) OW[mW] = mW < iW.misses ? "miss" : "pending";
                                    return OW
                                  })))
                                }));
                                return () => {
                                  WW();
                                  for (const WW of jW.current) clearTimeout(WW);
                                  jW.current = []
                                }
                              }), [UW]), (0, LW.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, LW.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: EW.map(((WW, iW) => (0, LW.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === WW ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, iW)))
                                }), (0, LW.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, LW.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, LW.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, LW.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: OW
                                    })]
                                  }), xW && (0, LW.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, LW.jsx)(NW.d, {
                                      text: [{
                                        icon: xW
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), wW.length > 0 && (0, LW.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: wW.map(((WW, iW) => (0, LW.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === WW ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, iW)))
                                }), (0, LW.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, LW.jsx)(NW.d, {
                                    text: ZW
                                  })
                                })]
                              })
                            }));

                          function UW(WW) {
                            let {
                              qte: iW
                            } = WW;
                            switch (iW.type) {
                              case "progressBar":
                                return (0, LW.jsx)(cW, {
                                  initialParameters: iW.parameters
                                });
                              case "timedClick":
                                return (0, LW.jsx)(xW, {
                                  initialParameters: iW.parameters
                                });
                              case "gravityBar":
                                return (0, LW.jsx)(lW, {
                                  initialParameters: iW.parameters
                                });
                              case "precisionBar":
                                return (0, LW.jsx)(bW, {
                                  initialParameters: iW.parameters
                                });
                              case "rhythmClick":
                                return (0, LW.jsx)(jW, {
                                  initialParameters: iW.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const kW = (0, mW.memo)((function() {
                            const [WW, iW] = (0, mW.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, EW.e)("qteStateUpdated", (WW => {
                              iW(WW)
                            })), WW.isActive && WW.type ? (0, LW.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, LW.jsx)(UW, {
                                qte: WW
                              })
                            }) : null
                          }))
                        }, 5517: (WW, iW, OW) => {
                          OW.d(iW, {
                            e: () => LW,
                            f: () => cW
                          });
                          var mW = OW(62),
                            EW = OW(1301),
                            NW = OW(5525);
                          const PW = {
                              getState: () => NW.d.getCurrentState(),
                              onFrame: EW.q
                            },
                            LW = (0, mW.createContext)(PW);

                          function cW() {
                            return (0, mW.useContext)(LW)
                          }
                        }, 5599: (WW, iW, OW) => {
                          OW.d(iW, {
                            e: () => eW,
                            g: () => dW
                          });
                          var mW = OW(5605),
                            EW = OW(327);
                          const NW = 120,
                            PW = 260,
                            LW = 1.15,
                            cW = 1.2,
                            wW = 2,
                            tW = 1.08,
                            ZW = .8,
                            xW = .95,
                            lW = 8,
                            AW = "[\"')\\]\u300d\u300f\uff09]*",
                            bW = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${AW}$`),
                            jW = new RegExp(`[?\uff1f]${AW}$`),
                            UW = new RegExp(`[!\uff01]${AW}$`),
                            kW = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            sW = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            MW = new RegExp(`[${sW}]`),
                            KW = new RegExp(`[${sW}]|[^${sW}]+`, "g"),
                            SW = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function YW(WW) {
                            let iW = 2166136261;
                            for (let OW = 0; OW < WW.length; OW++) iW ^= WW.charCodeAt(OW), iW = Math.imul(iW, 16777619);
                            return (iW >>> 0) / 4294967295 * 2 - 1
                          }

                          function yW(WW) {
                            var iW;
                            if (MW.test(WW)) return 1;
                            const OW = WW.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              mW = OW.replace(/[^0-9]/g, "");
                            if (mW.length > 0 && !/\p{L}/u.test(OW)) return Math.min(mW.length, 4);
                            const EW = null !== (iW = OW.match(SW)) && void 0 !== iW ? iW : [];
                            if (0 === EW.length) {
                              var NW, PW;
                              const WW = null !== (NW = null === (PW = OW.match(/\p{L}/gu)) || void 0 === PW ? void 0 : PW.length) && void 0 !== NW ? NW : 0;
                              return 0 === WW ? 0 : Math.min(Math.max(1, Math.round(WW / 2.5)), lW)
                            }
                            const LW = OW.replace(/[^\p{L}]/gu, ""),
                              cW = EW.length > 1 && "e" === EW.at(-1) && LW.endsWith("e") && !LW.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(WW.replace(/[^\p{L}]/gu, ""));
                            return Math.min(EW.length - (cW ? 1 : 0), lW)
                          }

                          function TW(WW) {
                            return WW.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function JW(WW) {
                            const iW = WW.replace(/[^\p{L}]/gu, "");
                            return iW.length >= 2 && iW === iW.toUpperCase() && iW !== iW.toLowerCase()
                          }

                          function hW(WW, iW) {
                            var OW;
                            const lW = iW && (0, mW.h)(iW),
                              AW = null !== (OW = null === lW || void 0 === lW ? void 0 : lW.syllableMs) && void 0 !== OW ? OW : mW.d,
                              sW = function(WW) {
                                const iW = [];
                                for (const mW of (0, EW.kc)(WW))
                                  if ("string" === typeof mW)
                                    for (const WW of mW.split(/(\s+)/)) {
                                      if ("" === WW) continue;
                                      if (/^\s+$/.test(WW)) {
                                        iW.push({
                                          kind: "space",
                                          text: WW
                                        });
                                        continue
                                      }
                                      if (!MW.test(WW)) {
                                        iW.push({
                                          kind: "word",
                                          text: WW,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let mW = !0;
                                      for (const EW of null !== (OW = WW.match(KW)) && void 0 !== OW ? OW : []) {
                                        var OW;
                                        const WW = iW.at(-1);
                                        mW || "word" !== (null === WW || void 0 === WW ? void 0 : WW.kind) || MW.test(EW) || /[\p{L}\p{N}]/u.test(EW) ? (mW || iW.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), iW.push({
                                          kind: "word",
                                          text: EW,
                                          delayMs: 0
                                        }), mW = !1) : WW.text += EW
                                      }
                                    } else iW.push({
                                      kind: "icon",
                                      text: mW.icon,
                                      delayMs: 0
                                    });
                                return iW
                              }(WW),
                              SW = [];
                            let hW = [];
                            for (const mW of sW) "space" !== mW.kind && (hW.push(mW), bW.test(mW.text) && (SW.push(hW), hW = []));
                            SW.push(hW);
                            const HW = [];
                            let nW = 0;
                            for (const mW of SW) {
                              var uW, oW;
                              const WW = null !== (uW = null === (oW = mW.at(-1)) || void 0 === oW ? void 0 : oW.text) && void 0 !== uW ? uW : "",
                                iW = jW.test(WW),
                                OW = UW.test(WW),
                                EW = mW.map((WW => "word" === WW.kind ? yW(WW.text) : 1)),
                                sW = EW.findLastIndex((WW => WW > 0));
                              for (const [jW, UW] of mW.entries()) {
                                const WW = "word" === UW.kind,
                                  mW = EW[jW];
                                UW.delayMs = nW;
                                for (let EW = 0; lW && EW < mW; EW++) {
                                  const {
                                    intonation: NW
                                  } = lW;
                                  let PW = sW > 0 ? -NW.declineSemitones * (jW / sW) : 0;
                                  PW += YW(`${TW(UW.text)}|${EW}`) * NW.variationSemitones;
                                  const bW = Math.min(1, NW.variationSemitones);
                                  let kW = lW.glideSemitones,
                                    MW = 1;
                                  OW && (PW += NW.exclaimLiftSemitones, MW *= LW), iW && jW === sW && (PW += NW.questionRiseSemitones * (mW > 1 ? .5 + .5 * EW / (mW - 1) : 1), EW === mW - 1 && (kW = Math.abs(kW) + NW.questionRiseSemitones / 2)), WW && JW(UW.text) && (PW += wW * bW, MW *= cW), mW > 1 && 0 === EW && (PW += ZW * bW, MW *= tW), HW.push({
                                    atMs: nW + EW * AW,
                                    semitones: PW,
                                    glideSemitones: kW,
                                    durationMs: EW < mW - 1 ? Math.min(lW.durationMs, AW * xW) : lW.durationMs,
                                    level: MW
                                  })
                                }
                                nW += mW * AW + (bW.test(UW.text) ? PW : kW.test(UW.text) ? NW : 0)
                              }
                            }
                            return {
                              pieces: sW.map((WW => "space" === WW.kind ? WW : "icon" === WW.kind ? {
                                kind: "icon",
                                icon: WW.text,
                                delayMs: WW.delayMs
                              } : {
                                kind: "word",
                                text: WW.text,
                                delayMs: WW.delayMs
                              })),
                              blips: HW
                            }
                          }
                          var HW = OW(1172),
                            nW = OW(1244),
                            uW = OW(2042);

                          function oW(WW) {
                            if ("string" === typeof WW) return WW;
                            const iW = nW.e.get().getCurrentLanguageCode();
                            return (0, HW.p)(iW, WW.translationKey, (0, HW.o)(WW.params, uW.e.shown))
                          }

                          function dW(WW) {
                            const iW = void 0 === WW.voice ? null : (0, mW.j)(WW.voice),
                              OW = iW && (0, mW.h)(iW);
                            return {
                              plan: hW(oW(WW.line), OW),
                              synth: OW
                            }
                          }

                          function eW(WW) {
                            const iW = [];
                            let OW = [];
                            for (const [EW, NW] of WW.entries()) {
                              var mW;
                              "space" === NW.kind && (" " !== NW.text || "icon" !== (null === (mW = WW[EW + 1]) || void 0 === mW ? void 0 : mW.kind)) ? (OW.length > 0 && iW.push(OW), iW.push([NW]), OW = []) : OW.push(NW)
                            }
                            return OW.length > 0 && iW.push(OW), iW
                          }
                        }, 5610: (WW, iW, OW) => {
                          OW.d(iW, {
                            e: () => tW,
                            h: () => ZW
                          });
                          var mW = OW(5615),
                            EW = OW(25);
                          const NW = .25,
                            PW = .85,
                            LW = .02,
                            cW = .01;

                          function wW(WW, iW, OW, mW, EW, NW, LW) {
                            const {
                              waveform: cW,
                              pitchHz: wW,
                              attackMs: tW,
                              releaseMs: ZW,
                              lowpassHz: xW
                            } = OW, lW = EW + mW.durationMs / 1e3, AW = wW * 2 ** (mW.semitones / 12), bW = WW.createOscillator();
                            bW.type = cW, bW.frequency.setValueAtTime(AW, EW), bW.frequency.exponentialRampToValueAtTime(AW * 2 ** (mW.glideSemitones / 12), lW);
                            const jW = EW + Math.min(tW, mW.durationMs) / 1e3,
                              UW = WW.createGain();
                            UW.gain.setValueAtTime(0, EW), UW.gain.linearRampToValueAtTime(NW, jW), UW.gain.linearRampToValueAtTime(NW * PW, Math.max(jW, lW - ZW / 1e3)), UW.gain.linearRampToValueAtTime(0, lW);
                            const kW = [bW];
                            if (null !== xW) {
                              const iW = WW.createBiquadFilter();
                              iW.type = "lowpass", iW.frequency.value = xW, kW.push(iW)
                            }
                            kW.push(UW, iW);
                            for (let PW = 1; PW < kW.length; PW++) kW[PW - 1].connect(kW[PW]);
                            return bW.onended = () => {
                              for (const WW of kW.slice(0, -1)) WW.disconnect();
                              LW()
                            }, bW.start(EW), bW.stop(lW), bW
                          }

                          function tW(WW, iW, OW, mW, EW, PW) {
                            if (0 === mW.length) return PW(), () => {};
                            const tW = NW * OW.volume * EW,
                              ZW = WW.createGain();
                            ZW.connect(iW);
                            const xW = WW.currentTime + LW,
                              lW = new Set;
                            for (const NW of mW) {
                              const iW = wW(WW, ZW, OW, NW, xW + NW.atMs / 1e3, tW * NW.level, (() => {
                                lW.delete(iW), 0 === lW.size && (ZW.disconnect(), PW())
                              }));
                              lW.add(iW)
                            }
                            return () => {
                              const iW = WW.currentTime;
                              ZW.gain.setTargetAtTime(0, iW, cW);
                              for (const WW of lW) try {
                                WW.stop(iW + 5 * cW)
                              } catch {}
                            }
                          }

                          function ZW(WW, iW) {
                            var OW;
                            const NW = mW.Howler.ctx,
                              PW = mW.Howler.masterGain;
                            if (!NW || !PW || !EW.d.get("soundOnFromAd")) return () => {};
                            const LW = mW.Howler;
                            return null === (OW = LW._autoResume) || void 0 === OW || OW.call(LW), tW(NW, PW, WW, iW, EW.d.get("soundVolume"), (() => {
                              var WW;
                              null === (WW = LW._autoSuspend) || void 0 === WW || WW.call(LW)
                            }))
                          }
                        }, 5587: (WW, iW, OW) => {
                          OW.d(iW, {
                            e: () => LW,
                            f: () => EW,
                            h: () => cW,
                            i: () => PW,
                            k: () => NW
                          });
                          var mW = OW(5582);
                          const EW = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            NW = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            PW = `${mW.o} lists every page of the Bloxd Code API docs.`;

                          function LW(WW, iW) {
                            return `${WW.url}${encodeURIComponent(iW.toWellFormed())}`
                          }

                          function cW(WW) {
                            const iW = LW(EW, WW);
                            return iW.length <= 3e4 ? {
                              url: iW,
                              sendsPrompt: !0
                            } : {
                              url: new URL(EW.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 5615: (WW, iW, OW) => {
                          OW.r(iW), OW.d(iW, {
                            Howl: () => EW.Howl,
                            Howler: () => EW.Howler,
                            musicOutput: () => jW,
                            readyAudioContext: () => UW
                          });
                          var mW, EW = OW(5618),
                            NW = OW(4653),
                            PW = OW(5356);
                          const LW = EW.Howler;

                          function cW() {
                            var WW, iW;
                            if (LW.ctx || !LW.usingWebAudio || "undefined" === typeof AudioContext || !(0, PW.k)()) return;
                            const OW = navigator.audioSession;
                            let mW;
                            "auto" === (null === OW || void 0 === OW ? void 0 : OW.type) && (OW.type = "ambient");
                            try {
                              mW = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const EW = mW.createGain();
                            EW.gain.setValueAtTime(LW._muted ? 0 : null !== (WW = LW._volume) && void 0 !== WW ? WW : 1, mW.currentTime), EW.connect(mW.destination), LW.ctx = mW, LW.masterGain = EW, null === (iW = LW._setup) || void 0 === iW || iW.call(LW)
                          }
                          LW._mobileUnloaded = !0;
                          const wW = LW.volume.bind(EW.Howler);
                          LW.volume = function() {
                            return cW(), wW(...arguments)
                          };
                          const tW = LW.mute.bind(EW.Howler);
                          LW.mute = WW => (cW(), tW(WW));
                          const ZW = EW.Howl.prototype,
                            xW = ZW.init;

                          function lW() {
                            for (; LW._html5AudioPool.length < LW.html5PoolSize;) {
                              const WW = new Audio;
                              WW._unlocked = !0, LW._releaseHtml5Audio(WW)
                            }
                            for (const iW of LW._howls)
                              if (!iW._webAudio)
                                for (const OW of iW._getSoundIds()) {
                                  var WW;
                                  const mW = null === (WW = iW._soundById(OW)) || void 0 === WW ? void 0 : WW._node;
                                  mW && !mW._unlocked && (mW._unlocked = !0, mW.load())
                                }
                          }
                          ZW.init = function(WW) {
                            return cW(), xW.call(this, WW)
                          }, (0, PW.k)() && (LW._unlockAudio = () => {
                            const WW = LW.ctx;
                            if (LW._audioUnlocked || !WW) return;
                            LW.autoUnlock = !1;
                            const iW = WW.createBuffer(1, 1, 22050);
                            LW._scratchBuffer = iW;
                            const OW = new AbortController;
                            let mW = "afterPaint";
                            const EW = () => {
                                var mW;
                                if (LW._audioUnlocked) return;
                                null === (mW = LW._autoResume) || void 0 === mW || mW.call(LW);
                                const EW = WW.createBufferSource();
                                EW.buffer = iW, EW.connect(WW.destination), EW.start(0), WW.resume().catch((() => {})), EW.onended = () => {
                                  EW.disconnect(0), LW._audioUnlocked = !0, OW.abort();
                                  for (const WW of LW._howls) WW._emit("unlock")
                                }
                              },
                              cW = () => {
                                lW(), EW()
                              },
                              wW = iW => {
                                if (lW(), "inTap" === mW) {
                                  if ("running" === WW.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), EW()
                                } else "afterPaint" === mW && (mW = "queued", (0, NW.b)(iW.timeStamp, (() => {
                                  mW = "inTap", EW()
                                })))
                              };
                            for (const NW of ["touchstart", "touchend"]) document.addEventListener(NW, cW, {
                              capture: !0,
                              signal: OW.signal
                            });
                            for (const NW of PW.d) document.addEventListener(NW, wW, {
                              capture: !0,
                              signal: OW.signal
                            })
                          });
                          let AW = 0;
                          const bW = null === (mW = LW._autoSuspend) || void 0 === mW ? void 0 : mW.bind(EW.Howler);

                          function jW() {
                            UW();
                            const {
                              ctx: WW,
                              masterGain: iW
                            } = LW;
                            return WW && iW ? {
                              ctx: WW,
                              destination: iW,
                              holdAwake: WW => {
                                var iW, OW;
                                (AW += WW ? 1 : -1, WW) ? null === (iW = LW._autoResume) || void 0 === iW || iW.call(LW): null === (OW = LW._autoSuspend) || void 0 === OW || OW.call(LW)
                              },
                              wake: () => {
                                var iW;
                                "running" !== WW.state && (null === (iW = LW._autoResume) || void 0 === iW || iW.call(LW), WW.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function UW() {
                            var WW;
                            (LW.volume(), LW.ctx && LW.autoUnlock) && (null === (WW = LW._unlockAudio) || void 0 === WW || WW.call(LW))
                          }
                          bW && (LW._autoSuspend = () => AW > 0 ? EW.Howler : bW())
                        }, 5622: (WW, iW, OW) => {
                          function mW(WW) {
                            return {
                              notAfter: WW
                            }
                          }
                          OW.d(iW, {
                            c: () => cW,
                            e: () => wW,
                            f: () => LW,
                            j: () => mW,
                            k: () => EW,
                            n: () => NW,
                            o: () => PW,
                            q: () => tW,
                            r: () => ZW
                          });
                          const EW = mW("\\w$."),
                            NW = mW("\\w.,");

                          function PW(WW) {
                            return iW => cW(iW, WW)
                          }

                          function LW(WW) {
                            return iW => !WW.test(iW.input.slice(0, iW.index))
                          }

                          function cW(WW, iW) {
                            return WW.index > 0 && new RegExp(`[${iW}]`).test(WW.input[WW.index - 1])
                          }

                          function wW(WW, iW, OW) {
                            return function(WW) {
                              return void 0 !== WW && "function" !== typeof WW
                            }(OW) ? function(WW, iW, OW) {
                              const mW = iW.flags.replace(/[gy]/g, ""),
                                EW = new RegExp(`[^${OW}](?:${iW.source})`, `${mW}g`),
                                NW = [],
                                PW = OW => {
                                  const mW = OW.index + OW[0].length;
                                  return ("" === OW[0] ? xW(WW, iW, mW) : mW) - 1
                                },
                                LW = new RegExp(`(?:${iW.source})`, `${mW}y`).exec(WW);
                              if (LW) {
                                if (NW.push(LW), !iW.global) return NW;
                                EW.lastIndex = PW(LW)
                              }
                              for (let cW = EW.exec(WW); cW; cW = EW.exec(WW)) {
                                const OW = xW(WW, iW, cW.index) - cW.index;
                                if (cW[0] = cW[0].slice(OW), cW.index += OW, NW.push(cW), !iW.global) break;
                                EW.lastIndex = PW(cW)
                              }
                              return NW
                            }(WW, iW, OW.notAfter) : function(WW, iW, OW) {
                              const mW = new RegExp(iW.source, `${iW.flags.replace(/[gy]/g,"")}g`),
                                EW = [];
                              for (let NW = mW.exec(WW); NW; NW = mW.exec(WW))
                                if (!OW || OW(NW)) {
                                  if (EW.push(NW), !iW.global) break;
                                  "" === NW[0] && (mW.lastIndex = xW(WW, iW, mW.lastIndex))
                                } else mW.lastIndex = xW(WW, iW, NW.index);
                              return EW
                            }(WW, iW, OW)
                          }

                          function tW(WW, iW, OW, mW) {
                            let EW = "",
                              NW = 0;
                            for (const PW of wW(WW, iW, OW)) EW += WW.slice(NW, PW.index) + mW(PW), NW = PW.index + PW[0].length;
                            return EW + WW.slice(NW)
                          }

                          function ZW(WW, iW, OW) {
                            const mW = [];
                            let EW = 0;
                            for (const NW of wW(WW, iW, OW)) mW.push(WW.slice(EW, NW.index)), EW = NW.index + NW[0].length;
                            return [...mW, WW.slice(EW)]
                          }

                          function xW(WW, iW, OW) {
                            var mW;
                            return OW + (iW.unicode && (null !== (mW = WW.codePointAt(OW)) && void 0 !== mW ? mW : 0) > 65535 ? 2 : 1)
                          }
                        }, 5582: (WW, iW, OW) => {
                          OW.d(iW, {
                            A: () => tW,
                            D: () => ZW,
                            G: () => bW,
                            I: () => lW,
                            c: () => EW,
                            g: () => cW,
                            k: () => NW,
                            o: () => PW,
                            s: () => LW,
                            w: () => jW
                          });
                          var mW = OW(1685);
                          const EW = 24e3,
                            NW = "/docs/llms.txt",
                            PW = `${mW.d}${NW}`,
                            LW = "/llms.txt",
                            cW = "/docs/llms-full.txt";

                          function wW(WW) {
                            return WW || "index"
                          }

                          function tW(WW) {
                            return `/docs/${wW(WW)}.md`
                          }

                          function ZW(WW, iW) {
                            return `/docs/${wW(WW)}/${iW+1}.md`
                          }
                          const xW = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function lW(WW) {
                            const iW = xW.exec(WW);
                            return null === iW ? null : {
                              name: iW[1],
                              part: void 0 === iW[2] ? null : Number(iW[2])
                            }
                          }
                          const AW = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function bW(WW) {
                            const iW = AW.exec(WW);
                            if (null === iW) return null;
                            const [, OW = "", mW] = iW;
                            return void 0 === mW ? tW(OW) : ZW(OW, Number(mW) - 1)
                          }

                          function jW(WW) {
                            return `/docsHtml/${wW(WW)}.html`
                          }
                        }, 5605: (WW, iW, OW) => {
                          OW.d(iW, {
                            d: () => EW,
                            e: () => mW,
                            g: () => NW,
                            h: () => cW,
                            j: () => PW
                          });
                          const mW = ["sine", "triangle", "square", "sawtooth"],
                            EW = 55,
                            NW = {
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

                          function PW(WW) {
                            return "string" !== typeof WW ? WW : Object.hasOwn(NW, WW) ? NW[WW] : null
                          }

                          function LW(WW, iW, OW) {
                            return Math.min(OW, Math.max(iW, WW))
                          }

                          function cW(WW) {
                            const iW = LW(WW.durationMs, 10, 500),
                              OW = LW(WW.attackMs, 0, iW),
                              {
                                intonation: EW
                              } = WW;
                            return {
                              waveform: mW.includes(WW.waveform) ? WW.waveform : "sine",
                              pitchHz: LW(WW.pitchHz, 20, 4e3),
                              glideSemitones: LW(WW.glideSemitones, -24, 24),
                              durationMs: iW,
                              attackMs: OW,
                              releaseMs: LW(WW.releaseMs, 0, iW - OW),
                              lowpassHz: null === WW.lowpassHz ? null : LW(WW.lowpassHz, 20, 2e4),
                              volume: LW(WW.volume, 0, 2),
                              intonation: {
                                variationSemitones: LW(EW.variationSemitones, 0, 6),
                                declineSemitones: LW(EW.declineSemitones, 0, 12),
                                questionRiseSemitones: LW(EW.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: LW(EW.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: LW(WW.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const WW in modules) Object.freeze(modules[WW]);