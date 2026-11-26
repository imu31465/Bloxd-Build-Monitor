export const id = 92;
export const ids = [92, 108];
export const modules = {
    5308: (HH, BH, LH) => {
      LH.d(BH, {
        e: () => WH,
        h: () => MH
      });
      var AH = LH(1038),
        rH = LH.n(AH),
        SH = LH(45),
        hH = LH(1123),
        tH = LH(5314),
        zH = LH(1967),
        CH = LH(2628),
        EH = LH(5319),
        XH = LH(1225);
      const GH = new WeakMap;
      let YH = 0;

      function uH(HH) {
        let BH = GH.get(HH);
        return void 0 === BH && (BH = YH++, GH.set(HH, BH)), BH
      }

      function QH(HH) {
        let {
          piece: BH
        } = HH;
        return "space" === BH.kind ? (0, XH.jsx)(XH.Fragment, {
          children: BH.text
        }) : (0, XH.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${BH.delayMs}ms`
          },
          children: (0, XH.jsx)(tH.b, {
            text: "icon" === BH.kind ? `[[${BH.icon}]]` : BH.text
          })
        })
      }

      function WH(HH) {
        let {
          display: BH
        } = HH;
        const {
          selectedLanguage: LH
        } = (0, hH.B)(), AH = (0, SH.useMemo)((() => (0, EH.b)((0, EH.d)(BH).plan.pieces)), [BH, LH.code]);
        return (0, XH.jsxs)("div", {
          className: rH()("Dialogue", {
            DialogueAnimateIn: !1 !== BH.animateIn
          }),
          children: [BH.speakerName && (0, XH.jsx)(zH.b, {
            text: BH.speakerName,
            className: "DialogueSpeaker"
          }), (0, XH.jsx)("p", {
            className: "DialogueLine",
            children: AH.map(((HH, BH) => 1 === HH.length && "space" === HH[0].kind ? HH[0].text : (0, XH.jsx)("span", {
              className: "DialogueGlue",
              children: HH.map(((HH, BH) => (0, XH.jsx)(QH, {
                piece: HH
              }, BH)))
            }, BH)))
          })]
        })
      }
      const MH = (0, SH.memo)((function() {
        const HH = (0, CH.j)("dialogue");
        return (0, XH.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: HH && (0, XH.jsx)(WH, {
            display: HH
          }, uH(HH))
        })
      }))
    },
    5188: (HH, BH, LH) => {
        LH.r(BH), LH.d(BH, {
          default: () => yS
        });
        var AH = LH(45),
          rH = LH(1038),
          SH = LH.n(rH),
          hH = LH(1511),
          tH = LH(1520),
          zH = LH(15),
          CH = LH(69),
          EH = LH(5194),
          XH = LH(5207),
          GH = LH(5214),
          YH = LH(4740),
          uH = LH(1225);
        const QH = "/textures/docs/icons";

        function WH(HH) {
          let {
            name: BH,
            isTinted: LH,
            className: AH,
            style: rH
          } = HH;
          const hH = `${QH}/${BH}.png`;
          return LH ? (0, uH.jsxs)("span", {
            className: SH()("DocsPixelIcon", "Tinted", AH),
            "aria-hidden": "true",
            style: rH,
            children: [(0, uH.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${hH}")`,
                WebkitMaskImage: `url("${hH}")`
              }
            }), (0, uH.jsx)("img", {
              src: hH,
              alt: ""
            })]
          }) : (0, uH.jsx)("img", {
            className: SH()("DocsPixelIcon", AH),
            src: hH,
            alt: "",
            "aria-hidden": "true",
            style: rH
          })
        }
        const MH = 1500;

        function xH() {
          const [HH, BH] = (0, AH.useState)(null);
          (0, AH.useEffect)((() => {
            if (null === HH) return;
            const LH = setTimeout((() => {
              BH(null)
            }), MH);
            return () => {
              clearTimeout(LH)
            }
          }), [HH]);
          return [HH, HH => {
            (0, YH.c)(HH).then((() => {
              BH({
                text: HH,
                failed: !1
              })
            }), (LH => {
              console.error("Could not copy to the clipboard", LH), BH({
                text: HH,
                failed: !0
              })
            }))
          }]
        }

        function vH(HH) {
          let {
            text: BH,
            label: LH,
            className: AH
          } = HH;
          const [rH, hH] = xH(), tH = !1 === (null === rH || void 0 === rH ? void 0 : rH.failed);
          return (0, uH.jsxs)("button", {
            type: "button",
            className: SH()("DocsCopyButton", AH, {
              Copied: tH
            }),
            title: "Copy to clipboard",
            "aria-label": LH ? void 0 : `Copy ${BH}`,
            onClick: HH => {
              HH.stopPropagation(), hH(BH)
            },
            children: [(0, uH.jsx)(WH, {
              name: tH ? "check" : "copy"
            }), LH && (0, uH.jsx)("span", {
              children: tH ? "Copied" : null !== rH && void 0 !== rH && rH.failed ? "Copy failed" : LH
            })]
          })
        }
        EH.c.registerLanguage("javascript", XH.e), EH.c.registerLanguage("typescript", GH.b);
        const PH = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          TH = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          UH = 24;

        function VH(HH) {
          let {
            code: BH,
            lang: LH,
            compact: rH = !1
          } = HH;
          const hH = (0, AH.useMemo)((() => function(HH, BH) {
              const LH = PH[BH];
              return LH ? EH.c.highlight(HH, {
                language: LH
              }).value : HH.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(BH, LH)), [BH, LH]),
            tH = BH.split("\n").length,
            zH = !rH && tH > UH + 6,
            [CH, XH] = (0, AH.useState)(!1),
            GH = PH[LH];
          return (0, uH.jsxs)("div", {
            className: SH()("DocsCodeBlock", {
              Compact: rH,
              Collapsed: zH && !CH
            }),
            children: [!rH && (0, uH.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, uH.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: GH ? TH[GH] : "Text"
              }), (0, uH.jsx)(vH, {
                text: BH,
                label: "Copy"
              })]
            }), (0, uH.jsx)("pre", {
              children: (0, uH.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: hH
                }
              })
            }), zH && (0, uH.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": CH,
              onClick: () => {
                XH(!CH)
              },
              children: [(0, uH.jsx)(WH, {
                name: CH ? "chevron-up" : "chevron-down"
              }), CH ? "Show less" : `Show all ${tH} lines`]
            })]
          })
        }
        var OH = LH(5218);
        var bH = LH(5220);
        const kH = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function mH(HH) {
          const BH = new Map;
          let LH, AH = [],
            rH = !1;
          const SH = () => {
            LH && BH.set(LH.name, LH.lines.join("\n").trimEnd())
          };
          for (const hH of HH.split("\n")) {
            const HH = hH.match(kH);
            rH || hH.startsWith("/*") ? (rH || (SH(), LH = void 0), AH.push(hH), rH = !hH.includes("*/")) : HH ? (SH(), LH = {
              name: HH[1],
              lines: [...AH, hH]
            }, AH = []) : LH && (hH.startsWith(" ") || hH.startsWith("\t") || /^[}\])|]/.test(hH)) ? LH.lines.push(hH) : LH && "" !== hH.trim() && (SH(), LH = void 0)
          }
          return SH(), BH
        }

        function oH(HH) {
          return "methods" === HH || "callbacks" === HH || "settings" === HH
        }
        const IH = {
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
              setterSnippet: (HH, BH) => `api.setClientOption(playerId, "${HH}", ${BH})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (HH, BH) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${HH}", ${BH})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (HH, BH) => `api.setMobSetting(mobId, "${HH}", ${BH})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (HH, BH) => `api.setVehicleSetting(vehicleId, "${HH}", ${BH})`
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
          fH = {
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

        function lH(HH) {
          return HH.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function KH(HH) {
          let BH = !1;
          return HH.split("\n").map((HH => (HH.startsWith("```") && (BH = !BH), !BH && /^#{3,} /.test(HH) ? HH.slice(1) : HH))).join("\n")
        }

        function cH(HH) {
          return "readme" === HH ? "getting-started" : lH(HH)
        }
        const eH = "## Glossary of Referenced Types";
        const qH = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...bH.c.flatMap((HH => {
            const BH = {
              id: HH.id,
              slug: cH(HH.id),
              title: HH.title,
              markdown: HH.content,
              ...IH[HH.id]
            };
            if ("readme" === HH.id) return function(HH) {
              const BH = HH.markdown.indexOf(eH),
                LH = HH.markdown.indexOf("\n```", BH),
                AH = HH.markdown.indexOf("\n```", LH + 1);
              if (-1 === BH || -1 === LH || -1 === AH) throw new Error(`Getting started has no "${eH}" section with a code block`);
              const rH = HH.markdown.slice(BH + 31, LH).trim(),
                SH = [...mH(HH.markdown.slice(HH.markdown.indexOf("\n", LH + 1) + 1, AH))].map((HH => {
                  let [BH, LH] = HH;
                  return `## ${BH}\n\n\`\`\`ts\n${LH}\n\`\`\`\n`
                })),
                hH = HH.markdown.slice(HH.markdown.indexOf("\n", AH + 1) + 1);
              return [{
                ...HH,
                markdown: `${HH.markdown.slice(0,BH)}${hH}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${rH}\n\n${SH.join("\n")}`
              }]
            }(BH);
            if ("howTo" === HH.id) {
              const {
                parent: HH,
                guides: LH
              } = function(HH) {
                const [BH, ...LH] = HH.markdown.split(/^(?=## )/m), AH = [BH], rH = [];
                for (const hH of LH) {
                  var SH;
                  const BH = hH.indexOf("\n"),
                    LH = hH.slice(3, BH).trim(),
                    tH = hH.slice(BH + 1);
                  if (!tH.includes("```")) {
                    AH.push(hH);
                    continue
                  }
                  const zH = null !== (SH = fH[LH]) && void 0 !== SH ? SH : {
                    icon: "lightbulb",
                    summary: `How to use ${LH.toLowerCase()} in World Code.`
                  };
                  rH.push({
                    id: `${HH.id}${LH.split(/[^A-Za-z0-9]+/).map((HH=>HH.charAt(0).toUpperCase()+HH.slice(1))).join("")}`,
                    slug: `${HH.slug}-${lH(LH)}`,
                    title: LH,
                    layout: "article",
                    sourceAnchor: (0, OH.r)(LH),
                    markdown: `# ${LH}\n\n${KH(tH)}`,
                    ...zH
                  })
                }
                return {
                  parent: {
                    ...HH,
                    markdown: AH.join(""),
                    childPageIds: rH.map((HH => HH.id))
                  },
                  guides: rH
                }
              }(BH);
              return [HH, ...LH]
            }
            return [BH]
          }))],
          gH = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...qH.filter((HH => void 0 !== HH.sourceAnchor)).map((HH => HH.id))]
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

        function NH(HH) {
          return qH.find((BH => BH.id === HH))
        }
        const RH = new Map;

        function jH(HH) {
          let BH = RH.get(HH.id);
          return BH || (BH = (0, OH.z)(HH.markdown, "changelog" === HH.layout ? 3 : 2), RH.set(HH.id, BH)), BH
        }

        function nH(HH, BH) {
          return jH(HH).sections.some((HH => HH.heading.anchor === BH || HH.blocks.some((HH => "heading" === HH.kind && HH.anchor === BH))))
        }

        function FH(HH) {
          const [BH, ...LH] = HH.replace(/^#/, "").split("-"), AH = qH.find((HH => HH.id === BH));
          if (!AH) return null;
          const rH = LH.length > 0 ? (0, OH.r)(LH.join("-")) : "";
          for (const hH of null !== (SH = AH.childPageIds) && void 0 !== SH ? SH : []) {
            var SH;
            const HH = NH(hH);
            if (HH.sourceAnchor === rH) return {
              page: HH,
              anchor: ""
            };
            if (nH(HH, rH)) return {
              page: HH,
              anchor: rH
            }
          }
          return {
            page: AH,
            anchor: rH
          }
        }
        const DH = {
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

        function wH(HH, BH) {
          let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const AH = BH.slug ? `${HH}/${BH.slug}` : HH;
          return LH ? `${AH}#${LH}` : AH
        }
        var ZH = LH(5240);
        const dH = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          aH = new Set(["GameApi", "Console", "_TypeOf"]),
          sH = 4;

        function JH(HH) {
          let BH = HH.length;
          for (; BH > 0 && "" === HH[BH - 1].trim();) BH--;
          return HH.slice(0, BH)
        }

        function iH(HH) {
          var BH;
          const LH = JH(HH);
          if (null === (BH = LH.at(-1)) || void 0 === BH || !BH.trimEnd().endsWith("*/")) return {
            lines: LH,
            doc: ""
          };
          const AH = LH.findLastIndex((HH => HH.startsWith("/**")));
          return -1 === AH ? {
            lines: LH,
            doc: ""
          } : {
            lines: JH(LH.slice(0, AH)),
            doc: LH.slice(AH).join("\n")
          }
        }

        function pH(HH) {
          var BH;
          const LH = HH.split("\n"),
            AH = LH.flatMap(((HH, BH) => dH.test(HH) ? [BH] : []));
          let rH = iH(LH.slice(0, null !== (BH = AH[0]) && void 0 !== BH ? BH : LH.length)).doc;
          return AH.map(((HH, BH) => {
            var SH;
            const hH = iH(LH.slice(HH, null !== (SH = AH[BH + 1]) && void 0 !== SH ? SH : LH.length)),
              tH = {
                name: LH[HH].match(dH)[1],
                doc: rH,
                lines: hH.lines
              };
            return rH = hH.doc, tH
          }))
        }

        function yH(HH) {
          var BH;
          const LH = HH.match(/^readonly \[([\s\S]*)\]$/);
          return LH ? null !== (BH = LH[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== BH ? BH : [] : null
        }

        function HB(HH) {
          if (!HH.startsWith("{") || !HH.endsWith("}")) return null;
          const BH = {
              keys: [],
              values: []
            },
            LH = HH => {
              const LH = HH.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              LH && (BH.keys.push(LH[1].startsWith('"') ? LH[1] : `"${LH[1]}"`), BH.values.push(LH[2].trim()))
            };
          let AH = 0,
            rH = "";
          for (const SH of HH.slice(1, -1)) "{[(".includes(SH) ? AH++ : "}])".includes(SH) && AH--, ";" === SH && 0 === AH ? (LH(rH), rH = "") : rH += SH;
          return LH(rH), BH
        }

        function BB(HH) {
          return HH.length > sH ? `\n\t| ${HH.join("\n\t| ")}` : HH.join(" | ")
        }

        function LB(HH, BH) {
          const LH = function(HH, BH) {
            return HH.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((HH, LH) => {
              var AH;
              const rH = null === (AH = BH.get(LH)) || void 0 === AH ? void 0 : AH.object;
              return rH ? BB(rH.values) : HH
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((HH, LH) => {
              var AH, rH;
              const SH = null === (AH = BH.get(LH)) || void 0 === AH || null === (rH = AH.object) || void 0 === rH ? void 0 : rH.values.map(yH);
              return null !== SH && void 0 !== SH && SH.every((HH => null !== HH)) ? BB([...new Set(SH.flat())]) : HH
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((HH, LH) => {
              var AH;
              const rH = null === (AH = BH.get(LH)) || void 0 === AH ? void 0 : AH.members;
              return rH ? BB(rH) : HH
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((HH, LH) => {
              var AH;
              const rH = null === (AH = BH.get(LH)) || void 0 === AH ? void 0 : AH.object;
              return rH ? BB(rH.keys) : HH
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((HH, LH) => {
              var AH, rH;
              return null !== (AH = null === (rH = BH.get(LH)) || void 0 === rH ? void 0 : rH.text) && void 0 !== AH ? AH : HH
            }))
          }(HH.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), BH);
          return [HH.doc, LH].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function AB(HH) {
          const BH = pH(HH),
            LH = function(HH) {
              const BH = new Map,
                LH = HH.find((HH => "_TypeOf" === HH.name));
              let AH = null;
              const rH = () => {
                if (AH) {
                  const HH = AH.lines.join("\n");
                  BH.set(AH.name, {
                    text: HH,
                    members: yH(HH),
                    object: HB(HH)
                  })
                }
              };
              for (const SH of LH.lines.slice(1, -1)) {
                const HH = SH.match(/^\t([\w$]+): (.+)$/);
                HH ? (rH(), AH = {
                  name: HH[1],
                  lines: [HH[2]]
                }) : AH && AH.lines.push(SH.replace(/^\t/, ""))
              }
              return rH(), BH
            }(BH),
            AH = new Map;
          for (const rH of BH) aH.has(rH.name) || AH.has(rH.name) || AH.set(rH.name, LB(rH, LH));
          return AH
        }
        let rB, SB, hB;

        function tB() {
          return SB ??= function(HH) {
            const BH = pH(HH).find((HH => "GameApi" === HH.name)),
              LH = new Map,
              AH = BH.lines;
            for (let SH = 0; SH < AH.length; SH++) {
              var rH;
              if (!AH[SH].trimStart().startsWith("/**")) continue;
              const HH = SH;
              for (; SH < AH.length && !AH[SH].includes("*/");) SH++;
              const BH = null === (rH = AH[SH + 1]) || void 0 === rH ? void 0 : rH.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!BH) continue;
              let hH = null;
              const tH = [];
              let zH = "description",
                CH = !1;
              for (const LH of AH.slice(HH, SH + 1).join("\n").split("\n").map((HH => HH.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const HH = LH.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                HH ? (hH = HH[1].trim(), zH = "deprecation") : LH.startsWith("@") ? (zH = "otherTag", CH = !0) : "" === LH.trim() ? CH || (zH = "description", tH.push(LH)) : "deprecation" !== zH || /^[A-Z]/.test(LH.trim()) ? "otherTag" !== zH && (zH = "description", tH.push(LH)) : hH = `${hH} ${LH.trim()}`.trim()
              }
              LH.set(BH[1], {
                deprecation: hH,
                description: tH.join("\n").trim()
              })
            }
            return LH
          }(ZH.default), SB
        }

        function zB() {
          if (!hB) {
            hB = new Map;
            for (const HH of qH) {
              const BH = (0, OH.v)(jH(HH)).flatMap((HH => HH.blocks));
              for (const HH of (0, OH.j)(BH))
                if ("ts" === HH.lang || "typescript" === HH.lang)
                  for (const [BH, LH] of mH(HH.code)) hB.set(BH, LH)
            }
            for (const [HH, BH] of(rB ??= AB(ZH.default), rB)) hB.has(HH) || hB.set(HH, BH)
          }
          return hB
        }
        const CB = {
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
        let EB;

        function XB() {
          if (!EB) {
            EB = new Map;
            for (const HH of qH)
              if (oH(HH.layout))
                for (const BH of jH(HH).sections) EB.has(BH.heading.text) || EB.set(BH.heading.text, {
                  pageId: HH.id,
                  anchor: BH.heading.anchor
                })
          }
          return EB
        }

        function GB(HH) {
          const BH = HH.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return BH ? XB().get(BH[1]) : void 0
        }
        const YB = (0, AH.createContext)("/docs"),
          uB = (0, AH.createContext)(null),
          QB = (0, AH.createContext)(!1),
          WB = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function MB(HH) {
          const BH = HH.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return BH ? BH[1] : null
        }

        function xB(HH) {
          let {
            colour: BH
          } = HH;
          return (0, uH.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: BH
            },
            "aria-hidden": "true"
          })
        }

        function vB(HH) {
          const BH = [];
          let LH = 0;
          for (const AH of HH.matchAll(WB)) BH.push(HH.slice(LH, AH.index), (0, uH.jsx)(xB, {
            colour: AH[0]
          }), AH[0]), LH = AH.index + AH[0].length;
          return BH.push(HH.slice(LH)), BH
        }

        function PB(HH) {
          let {
            href: BH,
            children: LH
          } = HH;
          const rH = (0, AH.useContext)(YB);
          if (BH.startsWith("#")) {
            const HH = FH(BH);
            if (HH) return (0, uH.jsx)(hH.e, {
              to: wH(rH, HH.page, HH.anchor),
              children: (0, uH.jsx)(QB.Provider, {
                value: !0,
                children: LH
              })
            })
          }
          return (0, uH.jsx)("a", {
            href: BH,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, uH.jsx)(QB.Provider, {
              value: !0,
              children: LH
            })
          })
        }

        function TB(HH) {
          let {
            code: BH
          } = HH;
          const LH = (0, AH.useContext)(YB);
          if ((0, AH.useContext)(QB)) return (0, uH.jsx)("code", {
            className: "DocsInlineCode",
            children: BH
          });
          if (zB().has(BH)) return (0, uH.jsx)(bB, {
            type: BH
          });
          const rH = GB(BH);
          if (rH) return (0, uH.jsx)(hH.e, {
            className: "DocsInlineCode DocsSymbolLink",
            to: wH(LH, NH(rH.pageId), rH.anchor),
            children: BH
          });
          const SH = MB(BH);
          return (0, uH.jsxs)("code", {
            className: "DocsInlineCode",
            children: [SH && (0, uH.jsx)(xB, {
              colour: SH
            }), BH]
          })
        }

        function UB(HH) {
          let {
            text: BH
          } = HH;
          const LH = [];
          let rH = 0;
          for (const AH of BH.matchAll(OH.e)) {
            AH.index > rH && LH.push(...vB(BH.slice(rH, AH.index)));
            const [, HH, SH, hH, tH, zH] = AH;
            HH ? LH.push((0, uH.jsx)(TB, {
              code: (0, OH.l)(HH, SH)
            })) : hH ? LH.push((0, uH.jsx)("strong", {
              children: (0, uH.jsx)(UB, {
                text: hH
              })
            })) : LH.push((0, uH.jsx)(PB, {
              href: zH,
              children: (0, uH.jsx)(UB, {
                text: tH
              })
            })), rH = AH.index + AH[0].length
          }
          return rH < BH.length && LH.push(...vB(BH.slice(rH))), (0, uH.jsx)(uH.Fragment, {
            children: LH.map(((HH, BH) => (0, uH.jsx)(AH.Fragment, {
              children: HH
            }, BH)))
          })
        }
        const VB = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          OB = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function bB(HH) {
          let {
            type: BH
          } = HH;
          const LH = zB(),
            rH = [];
          for (const AH of BH.trim().matchAll(VB)) {
            const [HH, BH, SH, hH, tH] = AH;
            BH ? rH.push((0, uH.jsx)("span", {
              className: "DocsTypeString",
              children: HH
            })) : SH && LH.has(SH) ? rH.push((0, uH.jsx)(fB, {
              name: SH,
              definition: LH.get(SH)
            })) : SH ? rH.push((0, uH.jsx)("span", {
              className: OB.has(SH) ? "DocsTypeKeyword" : "DocsTypeName",
              children: HH
            })) : hH ? rH.push((0, uH.jsx)("span", {
              className: "DocsTypeNumber",
              children: HH
            })) : tH ? rH.push(" ") : rH.push((0, uH.jsx)("span", {
              className: "DocsTypePunctuation",
              children: HH
            }))
          }
          return (0, uH.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: rH.map(((HH, BH) => (0, uH.jsx)(AH.Fragment, {
              children: HH
            }, BH)))
          })
        }
        const kB = 480,
          mB = 6,
          oB = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let IB = 0;

        function fB(HH) {
          let {
            name: BH,
            definition: LH
          } = HH;
          const rH = (0, AH.useContext)(YB),
            SH = CB[BH],
            tH = (0, AH.useRef)(null),
            zH = (0, AH.useRef)(null),
            EH = (0, AH.useRef)(null),
            [XH, GH] = (0, AH.useState)(!1),
            [YH, QH] = (0, AH.useState)(null),
            MH = (0, AH.useRef)(),
            xH = (0, AH.useContext)(uB),
            [vH] = (0, AH.useState)((() => "DocsTypePopover-" + IB++)),
            PH = () => {
              clearTimeout(MH.current), GH(!0)
            },
            TH = () => {
              clearTimeout(MH.current), MH.current = setTimeout((() => {
                GH(!1)
              }), 120)
            };
          return (0, AH.useEffect)((() => {
            if (!XH) return;
            const HH = HH => {
              if ("Escape" === HH.key) {
                var BH, LH;
                if (null !== (BH = zH.current) && void 0 !== BH && BH.contains(document.activeElement)) null === (LH = tH.current) || void 0 === LH || LH.focus();
                GH(!1)
              }
            };
            return document.addEventListener("keydown", HH), () => {
              document.removeEventListener("keydown", HH)
            }
          }), [XH]), (0, AH.useEffect)((() => () => {
            clearTimeout(MH.current)
          }), []), (0, AH.useLayoutEffect)((() => {
            if (!XH || !tH.current || !zH.current) return void QH(null);
            const HH = tH.current.getBoundingClientRect(),
              BH = zH.current.offsetHeight,
              LH = Math.min(kB, window.innerWidth - 32),
              AH = Math.min(Math.max(16, HH.left), window.innerWidth - LH - 16),
              rH = HH.bottom + mB + BH < window.innerHeight;
            QH({
              left: AH,
              top: rH ? HH.bottom + mB : Math.max(16, HH.top - mB - BH)
            })
          }), [XH]), (0, uH.jsxs)(uH.Fragment, {
            children: [(0, uH.jsx)("button", {
              type: "button",
              ref: tH,
              className: "DocsTypeLink",
              "aria-expanded": XH,
              "aria-describedby": XH ? vH : void 0,
              onMouseEnter: PH,
              onMouseLeave: TH,
              onFocus: PH,
              onBlur: TH,
              onKeyDown: HH => {
                "Tab" === HH.key && !HH.shiftKey && EH.current && (HH.preventDefault(), EH.current.focus())
              },
              onClick: PH,
              children: BH
            }), XH && (0, CH.createPortal)((0, uH.jsxs)("span", {
              ref: zH,
              id: vH,
              className: "DocsTypePopover",
              role: "tooltip",
              style: YH ? {
                left: YH.left,
                top: YH.top,
                maxWidth: kB
              } : {
                visibility: "hidden"
              },
              onMouseEnter: PH,
              onMouseLeave: TH,
              onFocus: PH,
              onBlur: TH,
              children: [(0, uH.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, uH.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: BH
                }), SH && (0, uH.jsxs)(hH.e, {
                  ref: EH,
                  className: "DocsTypePopoverLink",
                  to: wH(rH, NH(SH)),
                  onClick: () => {
                    GH(!1)
                  },
                  onKeyDown: HH => {
                    if ("Tab" === HH.key) {
                      var BH;
                      if (HH.preventDefault(), HH.shiftKey || !tH.current || ! function(HH, BH) {
                          const LH = [...document.querySelectorAll(oB)],
                            AH = LH.slice(LH.indexOf(HH) + 1).find((HH => HH.getClientRects().length > 0 && !(null !== BH && void 0 !== BH && BH.contains(HH))));
                          return null === AH || void 0 === AH || AH.focus(), void 0 !== AH
                        }(tH.current, zH.current)) null === (BH = tH.current) || void 0 === BH || BH.focus();
                      HH.shiftKey || GH(!1)
                    }
                  },
                  children: [NH(SH).title, (0, uH.jsx)(WH, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, uH.jsx)(VH, {
                lang: "ts",
                code: LH,
                compact: !0
              })]
            }), null !== xH && void 0 !== xH ? xH : document.body)]
          })
        }
        var lB = LH(176),
          KB = LH(5248),
          cB = LH(5250),
          eB = LH(5253);
        const qB = {
          progressBar: {
            jH: 30,
            nH: .075,
            FH: 5,
            DH: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            dH: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            sH: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            JH: !0,
            scale: 3,
            rotation: 15,
            iH: !1
          },
          gravityBar: {
            jH: 30,
            yH: .25,
            HB: 3,
            BB: .8,
            gravity: 1,
            LB: 1.5,
            AB: 8,
            rB: 4,
            DH: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            hB: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            zB: 5,
            CB: 1200,
            EB: .15,
            XB: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var gB = LH(304),
          NB = LH(2073);

        function RB(HH) {
          return HH.startsWith("fa-")
        }
        const jB = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          nB = {
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

        function FB(HH) {
          return "string" === typeof HH ? "text" : "entityName" in HH || "translationKey" in HH ? "other" : (0, gB.Eb)(HH) ? "progressBar" : (0, gB.Cb)(HH) ? "keyBinding" : "icon" in HH ? "icon" : "str" in HH && "string" === typeof HH.str ? "text" : "other"
        }
        const DB = [{
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
          wB = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...DB],
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
                options: NB.m
              },
              isRequired: !0
            }, ...DB],
            other: []
          };

        function ZB(HH) {
          return "string" === typeof HH ? {
            str: HH
          } : HH
        }

        function dB(HH, BH) {
          let LH = ZB(HH);
          for (const AH of BH) LH = LH && "object" === typeof LH ? LH[AH] : void 0;
          return LH
        }

        function aB(HH, BH, LH) {
          const AH = (HH, rH) => {
            var SH;
            const hH = BH[rH],
              tH = {
                ...HH
              };
            if (rH === BH.length - 1) return void 0 === LH ? delete tH[hH] : tH[hH] = LH, tH;
            const zH = AH(null !== (SH = HH[hH]) && void 0 !== SH ? SH : {}, rH + 1);
            return 0 === Object.keys(zH).length ? delete tH[hH] : tH[hH] = zH, tH
          };
          return function(HH) {
            const BH = Object.keys(HH);
            return "string" === typeof HH.str && 1 === BH.length ? HH.str : HH
          }(AH(ZB(HH), 0))
        }

        function sB(HH, BH) {
          const LH = FB(HH),
            AH = wB[LH].find((HH => HH.path.join(".") === BH.join("."))),
            rH = null !== AH && void 0 !== AH && AH.isRequired && "other" !== LH ? dB(nB[LH], BH) : void 0;
          return aB(HH, BH, rH)
        }

        function JB(HH) {
          switch (FB(HH)) {
            case "text":
              return String(dB(HH, ["str"]));
            case "icon":
              return String(dB(HH, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(dB(HH,["progress"])))}%`;
            case "keyBinding":
              return String(dB(HH, ["action"]));
            case "other":
              return JSON.stringify(HH)
          }
        }
        const iB = /^[A-Za-z_$][\w$]*$/;

        function pB(HH) {
          if (Array.isArray(HH)) return `[${HH.map(pB).join(", ")}]`;
          if (HH && "object" === typeof HH) {
            const BH = Object.entries(HH).map((HH => {
              let [BH, LH] = HH;
              return `${iB.test(BH)?BH:JSON.stringify(BH)}: ${pB(LH)}`
            }));
            return 0 === BH.length ? "{}" : `{ ${BH.join(", ")} }`
          }
          return JSON.stringify(HH)
        }

        function yB(HH) {
          const BH = HH.map(pB),
            LH = `[${BH.join(", ")}]`;
          return LH.length <= 60 ? LH : `[\n${BH.map((HH=>`    ${HH},`)).join("\n")}\n]`
        }
        const HL = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function BL(HH) {
          let BH = "";
          for (let rH = 0; rH < HH.length; rH++) {
            const SH = HH[rH];
            if ("\\" === SH) {
              var LH;
              const AH = null !== (LH = HH[rH + 1]) && void 0 !== LH ? LH : "";
              BH += "'" === AH ? "'" : SH + AH, rH++
            } else if ('"' === SH) BH += '\\"';
            else {
              var AH;
              BH += null !== (AH = HL[SH]) && void 0 !== AH ? AH : SH
            }
          }
          return `"${BH}"`
        }

        function LL(HH) {
          if ("string" === typeof HH) return !0;
          if (!HH || "object" !== typeof HH || Array.isArray(HH)) return !1;
          const BH = HH;
          return "ProgressBar" === BH.type ? "number" === typeof BH.progress : "StyledKeyBinding" === BH.type ? NB.m.includes(BH.action) : "string" === typeof BH.icon || "string" === typeof BH.str || "string" === typeof BH.entityName || "string" === typeof BH.translationKey
        }

        function AL(HH) {
          let BH;
          try {
            BH = function(HH) {
              let BH = "",
                LH = "",
                AH = 0;
              const rH = () => {
                BH += LH.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), LH = ""
              };
              for (; AH < HH.length;) {
                const SH = HH.slice(AH).search(/["'`]|\/\//);
                if (-1 === SH) {
                  LH += HH.slice(AH);
                  break
                }
                LH += HH.slice(AH, AH + SH);
                const hH = AH + SH,
                  tH = HH[hH];
                if ("/" === tH) {
                  const BH = HH.indexOf("\n", hH);
                  AH = -1 === BH ? HH.length : BH;
                  continue
                }
                if (rH(), "`" === tH) throw new Error("Use quotes rather than template strings.");
                let zH = hH + 1;
                for (; zH < HH.length && HH[zH] !== tH;) zH += "\\" === HH[zH] ? 2 : 1;
                if (zH >= HH.length) throw new Error("A string is missing its closing quote.");
                const CH = HH.slice(hH + 1, zH);
                BH += BL(CH), AH = zH + 1
              }
              return rH(), JSON.parse(BH)
            }(HH.trim())
          } catch (AH) {
            return {
              parts: null,
              error: AH instanceof SyntaxError ? "This isn't a valid array yet." : AH.message
            }
          }
          if (!Array.isArray(BH)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const LH = BH.findIndex((HH => !LL(HH)));
          return -1 !== LH ? {
            parts: null,
            error: `Part ${LH+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: BH,
            error: null
          }
        }
        const rL = 1 / lB.g.clientTicksPerSecond,
          SL = 700,
          hL = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          tL = {
            progressBar: qB.progressBar.dH,
            timedClick: qB.timedClick.icon,
            gravityBar: qB.gravityBar.icon,
            precisionBar: qB.precisionBar.icon,
            rhythmClick: qB.rhythmClick.icon
          };

        function zL(HH) {
          let {
            type: BH
          } = HH;
          const [LH, rH] = (0, AH.useState)("ready"), [hH, tH] = (0, AH.useState)(1), [zH, CH] = (0, AH.useState)(!0), EH = (0, AH.useRef)(null), XH = (0, AH.useRef)(null), GH = (0, AH.useRef)(null), YH = (0, AH.useRef)(new Set), QH = (0, AH.useRef)(!1), MH = tL[BH], xH = (0, AH.useMemo)((() => ({
            getState: () => {
              var HH, BH;
              return null !== (HH = null === (BH = GH.current) || void 0 === BH ? void 0 : BH.getState()) && void 0 !== HH ? HH : hL
            },
            onFrame: HH => (YH.current.add(HH), () => {
              YH.current.delete(HH)
            })
          })), []);
          (0, AH.useEffect)((() => {
            const HH = EH.current,
              BH = XH.current;
            if (!HH || !BH) return;
            const LH = new ResizeObserver((() => {
              tH(HH.clientWidth / Math.max(1, BH.offsetWidth))
            }));
            return LH.observe(HH), () => {
              LH.disconnect()
            }
          }), []), (0, AH.useEffect)((() => {
            var HH;
            if ("playing" !== LH) return;
            let AH = !1;
            const SH = new eB.f[BH](qB[BH], (HH => {
              AH = !0, CH(!1), rH(HH ? "succeeded" : "failed")
            }), (() => {}));
            GH.current = SH;
            let hH = 0,
              tH = performance.now(),
              zH = requestAnimationFrame((function HH(BH) {
                for (hH += Math.min(.25, (BH - tH) / 1e3), tH = BH; hH >= rL && !AH;) hH -= rL, SH.handleTick(rL);
                for (const LH of YH.current) LH();
                AH || (zH = requestAnimationFrame(HH))
              }));
            return null === (HH = EH.current) || void 0 === HH || HH.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(zH), SH.tearDown(), GH.current = null, QH.current = !1
            }
          }), [LH, BH]), (0, AH.useEffect)((() => {
            if (zH) return;
            const HH = setTimeout((() => {
              CH(!0)
            }), SL);
            return () => {
              clearTimeout(HH)
            }
          }), [zH]);
          const vH = HH => {
            var BH;
            "playing" === LH && QH.current !== HH && (QH.current = HH, null === (BH = GH.current) || void 0 === BH || BH.handleMouseInput(HH))
          };
          return (0, uH.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, uH.jsxs)("div", {
              ref: EH,
              className: SH()("DocsQteStage", {
                Playing: "playing" === LH
              }),
              tabIndex: "playing" === LH ? 0 : -1,
              role: "playing" === LH ? "button" : void 0,
              "aria-label": "playing" === LH ? `${BH} quick time event: click or press Space` : void 0,
              onPointerDown: HH => {
                0 === HH.button && vH(!0)
              },
              onPointerUp: () => {
                vH(!1)
              },
              onPointerLeave: () => {
                vH(!1)
              },
              onPointerCancel: () => {
                vH(!1)
              },
              onKeyDown: HH => {
                "playing" !== LH || " " !== HH.key && "Enter" !== HH.key || (HH.preventDefault(), vH(!0))
              },
              onKeyUp: HH => {
                "playing" !== LH || " " !== HH.key && "Enter" !== HH.key || vH(!1)
              },
              children: [(0, uH.jsx)("div", {
                ref: XH,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${hH})`
                },
                children: "playing" === LH && (0, uH.jsx)(cB.e.Provider, {
                  value: xH,
                  children: (0, uH.jsx)(KB.b, {
                    qte: {
                      type: BH,
                      parameters: qB[BH]
                    }
                  })
                })
              }), "playing" !== LH && (0, uH.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== LH && (0, uH.jsxs)("div", {
                  className: SH()("DocsQteResult", "succeeded" === LH ? "Succeeded" : "Failed"),
                  children: [(0, uH.jsx)(WH, {
                    name: "succeeded" === LH ? "check" : "cross",
                    isTinted: !0
                  }), (0, uH.jsx)("span", {
                    children: "succeeded" === LH ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, uH.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !zH,
                  onClick: () => {
                    rH("playing")
                  },
                  children: [(0, uH.jsx)(WH, {
                    name: "ready" === LH ? "play" : "replay"
                  }), (0, uH.jsx)("span", {
                    children: "ready" === LH ? `Try ${BH}` : "Play again"
                  })]
                })]
              })]
            }), MH && !RB(MH) && (0, uH.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, uH.jsx)("code", {
                children: MH
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function CL(HH) {
          let {
            level: BH,
            text: LH,
            anchor: AH,
            className: rH
          } = HH;
          const hH = `h${Math.min(BH,6)}`;
          return (0, uH.jsxs)(hH, {
                id: AH,
                className: SH()("DocsHeading", rH),
                children: [(0, uH.jsx)(UB, {
                      text: LH
                    }), (0, uH.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${AH}`,
                        "aria-label": `Link to ${LH.replace(/`/g,"")}`,children:"#"})]})}function EL(HH){let{items:BH,ordered:LH}=HH;const AH=LH?"ol":"ul";return(0,uH.jsx)(AH,{className:"DocsList",children:BH.map(((HH,BH)=>(0,uH.jsxs)("li",{children:[(0,uH.jsx)(UB,{text:HH.text}),HH.children.length>0&&(0,uH.jsx)(EL,{items:HH.children,ordered:LH})]},BH)))})}function XL(HH){const BH=HH[0],LH="paragraph"===(null===BH||void 0===BH?void 0:BH.kind)?BH.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(LH)?"warning":/^\*\*(tip|prefer)/.test(LH)?"tip":"note"}function GL(HH){let{block:BH}=HH;switch(BH.kind){case"heading":return(0,uH.jsx)(CL,{level:BH.level,text:BH.text,anchor:BH.anchor});case"paragraph":return(0,uH.jsx)("p",{children:(0,uH.jsx)(UB,{text:BH.text})});case"code":{const HH="ts"===BH.lang?function(HH){const BH=HH.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return BH&&Object.hasOwn(qB,BH[1])?BH[1]:null}(BH.code):null;return(0,uH.jsxs)(uH.Fragment,{children:[(0,uH.jsx)(VH,{code:BH.code,lang:BH.lang}),HH&&(0,uH.jsx)(zL,{type:HH})]})}case"table":return(0,uH.jsx)("div",{className:"DocsTableScroll",children:(0,uH.jsxs)("table",{className:"DocsTable",children:[(0,uH.jsx)("thead",{children:(0,uH.jsx)("tr",{children:BH.header.map(((HH,BH)=>(0,uH.jsx)("th",{children:(0,uH.jsx)(UB,{text:HH})},BH)))})}),(0,uH.jsx)("tbody",{children:BH.rows.map(((HH,BH)=>(0,uH.jsx)("tr",{children:HH.map(((HH,BH)=>(0,uH.jsx)("td",{children:(0,uH.jsx)(UB,{text:HH})},BH)))},BH)))})]})});case"list":return(0,uH.jsx)(EL,{items:BH.items,ordered:BH.ordered});case"quote":return(0,uH.jsx)("aside",{className:SH()("DocsCallout",XL(BH.blocks)),children:(0,uH.jsx)(YL,{blocks:BH.blocks})});case"rule":return(0,uH.jsx)("hr",{className:"DocsRule"})}}function YL(HH){let{blocks:BH}=HH;return(0,uH.jsx)(uH.Fragment,{children:BH.map(((HH,BH)=>(0,uH.jsx)(GL,{block:HH},BH)))})}var uL=LH(5228),QL=LH(5232);function WL(HH){return"blocks"===HH||"items"===HH}const ML=new Map;function xL(HH){let BH=ML.get(HH);return BH||(BH=function(HH){const BH={entries:[],legend:[],notes:[],examples:[]};let LH=!1;for(const SH of HH.split(/\r?\n/).slice(1)){if(SH.startsWith("#")){const HH=SH.replace(/^# ?/,""),AH=HH.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);AH?BH.legend.push({code:AH[1],meaning:AH[2],usage:AH[3].trim()}):/^Examples:/.test(HH.trim())?LH=!0:LH&&HH.trim()?BH.examples.push(HH.trim()):HH.trim()&&!/^\s/.test(HH)&&BH.notes.push(HH.trim());continue}const HH=SH.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var AH,rH;HH&&BH.entries.push({name:HH[1],variants:null!==(AH=null===(rH=HH[2])||void 0===rH?void 0:rH.split(","))&&void 0!==AH?AH:[]})}return BH}("blocks"===HH?uL:QL),ML.set(HH,BH)),BH}function vL(HH){let{className:BH,value:LH,placeholder:AH,label:rH,onChange:SH,count:hH,children:tH}=HH;return(0,uH.jsxs)("div",{className:BH,children:[(0,uH.jsx)(WH,{name:"magnifying-glass"}),(0,uH.jsx)("input",{type:"search",value:LH,placeholder:AH,"aria-label":rH,onChange:HH=>{SH(HH.target.value)}}),tH,hH&&(0,uH.jsxs)("span",{className:"DocsFilterCount",children:[hH.visible," of ",hH.total]})]})}var PL=LH(1315);function TL(HH){const BH=HH.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return BH?BH[2]:null}function UL(HH){return"paragraph"===HH.kind&&""===HH.text.trim()}function VL(HH){const BH={name:HH.heading.text,description:[],params:[],returns:null};let LH="description";for(const rH of HH.blocks)if(!UL(rH))if("heading"===rH.kind&&/^Parameters:?$/.test(rH.text))LH="params";else if("heading"===rH.kind&&/^Returns:?$/.test(rH.text))LH="returns",BH.returns={type:"",description:[]};else if("params"!==LH||"table"!==rH.kind){if("returns"===LH&&"paragraph"===rH.kind&&""===BH.returns.type){const HH=TL(rH.text);if(null!==HH){BH.returns.type=HH.replaceAll("\\|","|");continue}}"returns"===LH?BH.returns.description.push(rH):BH.description.push(rH)}else for(const[HH,LH,SH]of rH.rows){var AH;BH.params.push({name:HH,type:null!==(AH=TL(LH))&&void 0!==AH?AH:LH,description:null!==SH&&void 0!==SH?SH:""})}return BH}const OL=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function bL(HH){return HH.filter((HH=>!UL(HH)))}const kL=/^[\w][\w .'&!:()-]*$/,mL=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function oL(HH){var BH;if("code"===HH.kind&&"text"===HH.lang){const BH=HH.code.split("\n").map((HH=>HH.trim())).filter(Boolean);return BH.length>0&&BH.every((HH=>kL.test(HH)))?BH.map((HH=>({name:HH}))):null}return"paragraph"===HH.kind&&mL.test(HH.text.trim())?[...HH.text.matchAll(/`([ ^ `]+)` / g)].flatMap((HH => HH[1].split(/,\s*/).map((HH => ({
                              name: HH.trim()
                            }))))): "table" === HH.kind && null !== (BH = HH.header[0]) && void 0 !== BH && BH.startsWith("Song") ? HH.rows.map((HH => {
                              let [BH, LH] = HH;
                              return {
                                name: BH.replace(/`/g, ""),
                                caption: LH
                              }
                            })) : null
                          }

                          function IL(HH) {
                            const BH = [];
                            for (const LH of HH) {
                              const HH = oL(LH),
                                AH = BH.at(-1),
                                rH = "table" === LH.kind;
                              HH ? "names" === (null === AH || void 0 === AH ? void 0 : AH.kind) && AH.isSongs === rH ? AH.names.push(...HH) : BH.push({
                                kind: "names",
                                names: HH,
                                isSongs: rH
                              }) : BH.push({
                                kind: "block",
                                block: LH
                              })
                            }
                            return BH
                          }
                          const fL = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function lL(HH, BH) {
                            return `${fL[HH]}-${(0,OH.r)(BH)}`
                          }
                          const KL = new WeakMap;

                          function cL(HH, BH, LH) {
                            let AH = KL.get(BH);
                            if (!AH) {
                              AH = new Map;
                              const LH = new Set;
                              for (const rH of (0, OH.v)(BH)) {
                                const BH = IL(bL(rH.blocks)).map((BH => {
                                  if ("block" === BH.kind) return BH;
                                  return {
                                    kind: "names",
                                    names: BH.names.map((BH => {
                                      var AH, SH;
                                      const hH = lL(HH, BH.name);
                                      let tH = hH;
                                      for (let HH = 2; LH.has(tH); HH++) tH = `${hH}-${HH}`;
                                      return LH.add(tH), {
                                        ...BH,
                                        anchor: tH,
                                        heading: null !== (AH = null === (SH = rH.heading) || void 0 === SH ? void 0 : SH.text) && void 0 !== AH ? AH : ""
                                      }
                                    })),
                                    isSongs: BH.isSongs
                                  }
                                }));
                                AH.set(rH.blocks, BH)
                              }
                              KL.set(BH, AH)
                            }
                            const rH = AH.get(LH);
                            if (!rH) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return rH
                          }
                          const eL = "/textures/docs/skinPreviews",
                            qL = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var gL = LH(4599),
                            NL = LH(4617);

                          function RL(HH) {
                            return Object.hasOwn(gL.d, HH) ? gL.d[HH] : null
                          }
                          const jL = {
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
                            blendMode: NL.f.Standard
                          };

                          function nL(HH, BH, LH) {
                            return BH + (LH - BH) * HH()
                          }

                          function FL(HH, BH, LH) {
                            return HH + (BH - HH) * LH
                          }

                          function DL(HH) {
                            return HH.length > 0 && "timeFraction" in HH[0]
                          }

                          function wL(HH, BH) {
                            if (0 === HH.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!DL(HH.colorGradients)) {
                              const LH = HH.colorGradients,
                                {
                                  color: AH
                                } = LH[Math.floor(BH() * LH.length) % LH.length];
                              return [{
                                at: 0,
                                colour: [AH[0] / 255, AH[1] / 255, AH[2] / 255, 1]
                              }]
                            }
                            return [...HH.colorGradients].sort(((HH, BH) => HH.timeFraction - BH.timeFraction)).map((HH => {
                              var LH, AH, rH;
                              const SH = HH.minColor,
                                hH = null !== (LH = HH.maxColor) && void 0 !== LH ? LH : SH,
                                tH = BH(),
                                zH = [FL(SH[0], hH[0], tH) / 255, FL(SH[1], hH[1], tH) / 255, FL(SH[2], hH[2], tH) / 255, FL(null !== (AH = SH[3]) && void 0 !== AH ? AH : 1, null !== (rH = hH[3]) && void 0 !== rH ? rH : 1, tH)];
                              return {
                                at: HH.timeFraction,
                                colour: zH
                              }
                            }))
                          }

                          function ZL(HH, BH, LH, AH) {
                            const rH = nL(AH, HH.minEmitPower, HH.maxEmitPower),
                              SH = BH => nL(AH, Math.min(HH.dir1[BH], HH.dir2[BH]), Math.max(HH.dir1[BH], HH.dir2[BH])) * rH,
                              hH = [...HH.velocityGradients].sort(((HH, BH) => HH.timeFraction - BH.timeFraction)).map((HH => ({
                                at: HH.timeFraction,
                                factor: nL(AH, HH.factor, HH.factor2)
                              })));
                            return {
                              pos: [nL(AH, BH[0], LH[0]), nL(AH, BH[1], LH[1]), nL(AH, BH[2], LH[2])],
                              dir: [SH(0), SH(1), SH(2)],
                              age: 0,
                              life: nL(AH, HH.minLifeTime, HH.maxLifeTime),
                              size: nL(AH, HH.minSize, HH.maxSize),
                              colours: wL(HH, AH),
                              velocityFactors: hH
                            }
                          }

                          function dL(HH, BH, LH, AH) {
                            if (BH < HH[0].at) return LH(Math.min(1, HH.length - 1));
                            for (let rH = 0; rH < HH.length - 1; rH++)
                              if (BH <= HH[rH + 1].at) {
                                const SH = HH[rH + 1].at - HH[rH].at;
                                return AH(LH(rH), LH(rH + 1), SH > 0 ? (BH - HH[rH].at) / SH : 1)
                              } return LH(HH.length - 1)
                          }

                          function aL(HH) {
                            return dL(HH.colours, HH.age / HH.life, (BH => HH.colours[BH].colour), ((HH, BH, LH) => [FL(HH[0], BH[0], LH), FL(HH[1], BH[1], LH), FL(HH[2], BH[2], LH), FL(HH[3], BH[3], LH)]))
                          }

                          function sL(HH, BH, LH) {
                            if (HH.age += LH, HH.age >= HH.life) return !1;
                            const AH = function(HH) {
                              return 0 === HH.velocityFactors.length ? 1 : dL(HH.velocityFactors, HH.age / HH.life, (BH => HH.velocityFactors[BH].factor), FL)
                            }(HH) * LH;
                            for (let SH = 0; SH < 3; SH++) {
                              var rH;
                              HH.pos[SH] += HH.dir[SH] * AH, HH.dir[SH] += (null !== (rH = BH[SH]) && void 0 !== rH ? rH : 0) * LH
                            }
                            return !0
                          }

                          function JL(HH) {
                            return String(Math.round(1e6 * HH) / 1e6)
                          }

                          function iL(HH) {
                            return `[${HH.map(JL).join(", ")}]`
                          }

                          function pL(HH, BH) {
                            const LH = `${BH}    `;
                            return `[\n${(DL(HH)?HH.map((HH=>{const BH=[`${LH}    timeFraction: ${JL(HH.timeFraction)},`,`${LH}    minColor: ${iL(HH.minColor)},`];return HH.maxColor&&BH.push(`${LH}    maxColor: ${iL(HH.maxColor)},`),`${LH}{\n${BH.join("\n")}\n${LH}},`})):HH.map((HH=>`
                            $ {
                              LH
                            } {
                              color: $ {
                                iL(HH.color)
                              }
                            }, `))).join("\n")}\n${BH}]`
                          }
                          const yL = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            HA = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const BA = .6;

                          function LA(HH, BH) {
                            return `${BH?"song":"sound"}:${HH}`
                          }
                          let AA = {
                              track: null,
                              volume: BA
                            },
                            rA = null,
                            SA = 0,
                            hA = 0;
                          const tA = new Set;

                          function zA(HH) {
                            AA = {
                              ...AA,
                              ...HH
                            }, tA.forEach((HH => {
                              HH()
                            }))
                          }

                          function CA(HH) {
                            AA.track && zA({
                              track: {
                                ...AA.track,
                                ...HH
                              }
                            })
                          }

                          function EA(HH) {
                            const [BH, LH] = (0, AH.useState)((() => HH(AA))), rH = (0, AH.useRef)(HH);
                            return rH.current = HH, (0, AH.useEffect)((() => {
                              const HH = () => {
                                LH((() => rH.current(AA)))
                              };
                              return tA.add(HH), HH(), () => {
                                tA.delete(HH)
                              }
                            }), []), BH
                          }

                          function XA() {
                            SA++;
                            const HH = rA;
                            rA = null, null === HH || void 0 === HH || HH.stop()
                          }

                          function GA(HH, BH) {
                            let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            XA();
                            const rH = SA,
                              {
                                track: SH
                              } = AA,
                              hH = SH && SH.name === HH && SH.isSong === BH ? SH.duration : 0;
                            hA = AH, zA({
                              track: {
                                name: HH,
                                isSong: BH,
                                status: "loading",
                                duration: hH
                              }
                            }), Promise.all([LH.e(249), LH.e(278)]).then((() => LH(41086))).then((LH => {
                              let {
                                playDocsSound: SH
                              } = LH;
                              rH === SA && (rA = SH(HH, BH, AA.volume, AH, {
                                onPlay: HH => {
                                  rH === SA && CA({
                                    status: "playing",
                                    duration: HH
                                  })
                                },
                                onEnd: HH => {
                                  var BH, LH;
                                  rH === SA && (rA = null, HH ? zA({
                                    track: null
                                  }) : (hA = null !== (BH = null === (LH = AA.track) || void 0 === LH ? void 0 : LH.duration) && void 0 !== BH ? BH : 0, CA({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((BH => {
                              console.error(`Could not play docs sound ${HH}`, BH), rH === SA && zA({
                                track: null
                              })
                            }))
                          }

                          function YA() {
                            const {
                              track: HH
                            } = AA;
                            if (!HH) return;
                            if ("playing" === HH.status && rA) return hA = rA.hT(), rA.pause(), void CA({
                              status: "paused"
                            });
                            if ("loading" === HH.status) return XA(), void CA({
                              status: "paused"
                            });
                            if (rA) return void rA.resume();
                            const BH = HH.duration > 0 && hA >= HH.duration - .05;
                            GA(HH.name, HH.isSong, BH ? 0 : hA)
                          }

                          function uA() {
                            var HH;
                            return rA && "playing" === (null === (HH = AA.track) || void 0 === HH ? void 0 : HH.status) ? rA.hT() : hA
                          }

                          function QA(HH) {
                            var BH;
                            null === (BH = rA) || void 0 === BH || BH.setVolume(HH), zA({
                              volume: HH
                            })
                          }

                          function WA() {
                            XA(), hA = 0, zA({
                              track: null
                            })
                          }
                          const MA = (0, AH.createContext)(null);
                          let xA = null;

                          function vA() {
                            const [HH, BH] = (0, AH.useState)(null);
                            return (0, AH.useEffect)((() => {
                              let HH = !1;
                              return xA ??= Promise.all([LH.e(84), LH.e(87), LH.e(85), LH.e(86), LH.e(204), LH.e(35), LH.e(253)]).then((() => LH(41078))), xA.then((LH => {
                                HH || BH(LH)
                              }), (HH => {
                                console.error("Could not load the docs gallery's textures", HH), xA = null
                              })), () => {
                                HH = !0
                              }
                            }), []), HH
                          }
                          const PA = 24,
                            TA = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function UA(HH, BH) {
                            const LH = "skins" === HH ? function(HH, BH) {
                              const LH = qL.find((BH => HH.startsWith(BH.heading)));
                              return LH ? function(HH, BH) {
                                return `${HH}-${BH}`
                              }(LH.prefix, BH) : null
                            }(BH.heading, BH.name) : null;
                            return null === LH ? null : `${eL}/${LH}.webp`
                          }

                          function VA(HH) {
                            let {
                              kind: BH,
                              entry: LH,
                              assets: rH,
                              renderedUrl: hH
                            } = HH;
                            const {
                              name: tH
                            } = LH, [zH, CH] = (0, AH.useState)(!1);
                            if ("icons" === BH && RB(tH)) return (0, uH.jsx)(PL.c, {
                              className: "DocsTileIcon",
                              name: tH
                            });
                            let EH = null;
                            var XH;
                            if ("icons" === BH) EH = null !== (XH = null === rH || void 0 === rH ? void 0 : rH.getIngameIconUrl(tH)) && void 0 !== XH ? XH : null;
                            else if ("particles" === BH) {
                              var GH, YH, QH;
                              EH = null !== (GH = null === rH || void 0 === rH ? void 0 : rH.getParticleTextureUrl(null !== (YH = null === (QH = RL(tH)) || void 0 === QH ? void 0 : QH.texture) && void 0 !== YH ? YH : tH)) && void 0 !== GH ? GH : null
                            } else "skins" === BH && (EH = null !== hH && void 0 !== hH ? hH : TA.test(tH) ? `/textures/charSkins/previews/${tH}_preview.png` : null);
                            return !EH || zH ? (0, uH.jsx)(WH, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === BH ? "person" : "image"
                            }) : (0, uH.jsx)("img", {
                              className: SH()("DocsTileImage", {
                                Pixelated: "skins" !== BH
                              }),
                              src: EH,
                              srcSet: EH === hH ? `${EH} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${EH}`), CH(!0)
                              }
                            })
                          }

                          function OA(HH) {
                            let {
                              entry: BH,
                              isSong: LH
                            } = HH;
                            const AH = EA((HH => {
                                let {
                                  track: AH
                                } = HH;
                                return (null === AH || void 0 === AH ? void 0 : AH.name) === BH.name && AH.isSong === LH ? AH.status : null
                              })),
                              rH = null !== AH && "paused" !== AH;
                            return (0, uH.jsxs)("button", {
                              type: "button",
                              id: BH.anchor,
                              className: SH()("DocsSoundTile", {
                                Playing: rH
                              }),
                              "data-docs-track": LA(BH.name, LH),
                              "aria-label": rH ? `Pause ${BH.name}` : `Play ${BH.name}`,
                              onClick: () => {
                                null !== AH ? YA() : GA(BH.name, LH)
                              },
                              children: [(0, uH.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, uH.jsx)(WH, {
                                  name: rH ? "pause" : "play"
                                })
                              }), (0, uH.jsx)("code", {
                                className: "DocsSoundName",
                                children: BH.name
                              }), BH.caption && (0, uH.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: BH.caption
                              })]
                            })
                          }

                          function bA(HH) {
                            let {
                              kind: BH,
                              names: LH,
                              isSongs: rH
                            } = HH;
                            const hH = vA(),
                              [tH, zH] = xH(),
                              CH = !1 === (null === tH || void 0 === tH ? void 0 : tH.failed) ? tH.text : null,
                              EH = (0, AH.useContext)(MA),
                              [XH, GH] = (0, AH.useState)(""),
                              YH = XH.trim().toLowerCase(),
                              QH = YH ? LH.filter((HH => HH.name.toLowerCase().includes(YH))) : LH;
                            return (0, uH.jsxs)("div", {
                              className: "DocsGallery",
                              children: [LH.length > PA && (0, uH.jsx)(vL, {
                                className: "DocsGalleryFilter",
                                value: XH,
                                placeholder: `Filter ${LH.length} names\u2026`,
                                label: "Filter names",
                                onChange: GH,
                                count: YH ? {
                                  visible: QH.length,
                                  total: LH.length
                                } : null
                              }), (0, uH.jsx)("div", {
                                className: SH()("DocsGalleryGrid", `Kind-${BH}`, {
                                  Songs: rH
                                }),
                                children: QH.map((HH => {
                                  if ("sounds" === BH) return (0, uH.jsx)(OA, {
                                    entry: HH,
                                    isSong: rH
                                  }, HH.anchor);
                                  if (EH && "particles" === BH && RL(HH.name)) return (0, uH.jsxs)("button", {
                                    type: "button",
                                    id: HH.anchor,
                                    className: SH()("DocsTile Previewable", {
                                      Copied: CH === HH.name
                                    }),
                                    title: `Play "${HH.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      EH(HH.name), zH(HH.name)
                                    },
                                    children: [(0, uH.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, uH.jsx)(VA, {
                                        kind: BH,
                                        entry: HH,
                                        assets: hH,
                                        renderedUrl: null
                                      }), (0, uH.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, uH.jsx)(WH, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, uH.jsx)("span", {
                                      className: "DocsTileName",
                                      children: CH === HH.name ? "Copied!" : HH.name
                                    })]
                                  }, HH.anchor);
                                  const LH = UA(BH, HH);
                                  return (0, uH.jsxs)("button", {
                                    type: "button",
                                    id: HH.anchor,
                                    className: SH()("DocsTile", {
                                      Copied: CH === HH.name
                                    }),
                                    title: `Copy "${HH.name}"`,
                                    onClick: () => {
                                      zH(HH.name)
                                    },
                                    children: [(0, uH.jsx)("span", {
                                      className: SH()("DocsTilePreview", {
                                        Rendered: null !== LH
                                      }),
                                      children: (0, uH.jsx)(VA, {
                                        kind: BH,
                                        entry: HH,
                                        assets: hH,
                                        renderedUrl: LH
                                      })
                                    }), (0, uH.jsx)("span", {
                                      className: "DocsTileName",
                                      children: CH === HH.name ? "Copied!" : HH.name
                                    })]
                                  }, HH.anchor)
                                }))
                              })]
                            })
                          }

                          function kA(HH) {
                            let {
                              kind: BH,
                              content: LH,
                              blocks: AH
                            } = HH;
                            return (0, uH.jsx)(uH.Fragment, {
                              children: cL(BH, LH, AH).map(((HH, LH) => "block" === HH.kind ? (0, uH.jsx)(GL, {
                                block: HH.block
                              }, LH) : (0, uH.jsx)(bA, {
                                kind: BH,
                                names: HH.names,
                                isSongs: HH.isSongs
                              }, LH)))
                            })
                          }
                          const mA = [{
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

                          function oA(HH) {
                            let {
                              cards: BH = mA,
                              label: LH = "Start here"
                            } = HH;
                            const rH = (0, AH.useContext)(YB);
                            return (0, uH.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": LH,
                              children: BH.map((HH => {
                                let {
                                  pageId: BH,
                                  countNoun: LH
                                } = HH;
                                const AH = NH(BH);
                                return (0, uH.jsxs)(hH.e, {
                                  to: wH(rH, AH),
                                  className: "DocsLandingCard",
                                  children: [(0, uH.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, uH.jsx)(WH, {
                                      name: AH.icon
                                    })
                                  }), (0, uH.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: AH.title
                                  }), (0, uH.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: AH.summary
                                  }), LH && (0, uH.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [jH(AH).sections.length, " ", LH]
                                  })]
                                }, BH)
                              }))
                            })
                          }
                          const IA = 240;

                          function fA(HH) {
                            let {
                              faces: BH
                            } = HH;
                            return (0, uH.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, uH.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${BH.top}")`
                                }
                              }), (0, uH.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${BH.left}")`
                                }
                              }), (0, uH.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${BH.right}")`
                                }
                              })]
                            })
                          }

                          function lA(HH) {
                            let {
                              src: BH
                            } = HH;
                            const [LH, rH] = (0, AH.useState)(!1);
                            return LH ? null : (0, uH.jsx)("img", {
                              src: BH,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${BH}`), rH(!0)
                              }
                            })
                          }

                          function KA(HH) {
                            let {
                              kind: BH
                            } = HH;
                            const LH = xL(BH),
                              rH = vA(),
                              hH = (0, tH.s)(),
                              [zH, CH] = (0, AH.useState)(""),
                              [EH, XH] = (0, AH.useState)(null),
                              [GH, YH] = (0, AH.useState)(IA),
                              [QH, MH] = (0, AH.useState)(null),
                              xH = (0, AH.useRef)(null),
                              PH = zH.trim().toLowerCase();
                            (0, AH.useEffect)((() => {
                              const HH = (0, OH.p)(hH.hash),
                                AH = LH.entries.find((LH => lL(BH, LH.name) === HH));
                              if (AH) xH.current = AH.name, CH(AH.name), XH(null), MH(AH.name);
                              else if (null !== xH.current) {
                                const HH = xH.current;
                                xH.current = null, CH((BH => BH === HH ? "" : BH)), MH(null)
                              }
                            }), [LH, BH, hH.hash, hH.key]), (0, AH.useEffect)((() => {
                              var HH;
                              null !== QH && (null === (HH = document.getElementById(lL(BH, QH))) || void 0 === HH || HH.scrollIntoView({
                                block: "center"
                              }))
                            }), [BH, QH]);
                            const TH = LH.entries.filter((HH => (!PH || HH.name.toLowerCase().includes(PH)) && (!EH || HH.variants.includes(EH))));
                            return (0, uH.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [LH.notes.length > 0 && (0, uH.jsx)("div", {
                                className: "DocsProse",
                                children: LH.notes.map((HH => (0, uH.jsx)("p", {
                                  children: HH
                                }, HH)))
                              }), LH.legend.length > 0 && (0, uH.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, uH.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, uH.jsx)("thead", {
                                    children: (0, uH.jsxs)("tr", {
                                      children: [(0, uH.jsx)("th", {
                                        children: "Code"
                                      }), (0, uH.jsx)("th", {
                                        children: "Variant"
                                      }), (0, uH.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, uH.jsx)("tbody", {
                                    children: LH.legend.map((HH => (0, uH.jsxs)("tr", {
                                      children: [(0, uH.jsx)("td", {
                                        children: (0, uH.jsx)("button", {
                                          type: "button",
                                          className: SH()("DocsVariantChip", {
                                            Active: EH === HH.code
                                          }),
                                          "aria-pressed": EH === HH.code,
                                          title: `Show only ${BH} with ${HH.meaning} variants`,
                                          onClick: () => {
                                            XH(EH === HH.code ? null : HH.code)
                                          },
                                          children: HH.code
                                        })
                                      }), (0, uH.jsx)("td", {
                                        children: HH.meaning
                                      }), (0, uH.jsx)("td", {
                                        children: (0, uH.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: HH.usage
                                        })
                                      })]
                                    }, HH.code)))
                                  })]
                                })
                              }), LH.examples.length > 0 && (0, uH.jsx)(VH, {
                                lang: "text",
                                code: LH.examples.join("\n")
                              }), (0, uH.jsx)(vL, {
                                className: "DocsFilterBar",
                                value: zH,
                                placeholder: `Search ${LH.entries.length} ${BH}\u2026`,
                                label: `Search ${BH}`,
                                onChange: HH => {
                                  CH(HH), YH(IA)
                                },
                                count: PH || EH ? {
                                  visible: TH.length,
                                  total: LH.entries.length
                                } : null,
                                children: EH && (0, uH.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    XH(null)
                                  },
                                  children: [EH, " ", (0, uH.jsx)(WH, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, uH.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: TH.slice(0, GH).map((HH => {
                                  const LH = "blocks" === BH ? null === rH || void 0 === rH ? void 0 : rH.getBlockFaces(HH.name) : null,
                                    AH = rH && !LH ? rH.getItemTextureUrl(HH.name) : null;
                                  return (0, uH.jsxs)("div", {
                                    id: lL(BH, HH.name),
                                    className: SH()("DocsCatalogueTile", {
                                      Linked: HH.name === QH
                                    }),
                                    children: [(0, uH.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [LH && (0, uH.jsx)(fA, {
                                        faces: LH
                                      }), AH && (0, uH.jsx)(lA, {
                                        src: AH
                                      })]
                                    }), (0, uH.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: HH.name
                                    }), HH.variants.length > 0 && (0, uH.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: HH.variants.map((HH => (0, uH.jsx)("span", {
                                        children: HH
                                      }, HH)))
                                    }), (0, uH.jsx)(vH, {
                                      text: HH.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, HH.name)
                                }))
                              }), TH.length > GH && (0, uH.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  YH(TH.length)
                                },
                                children: ["Show all ", TH.length]
                              }), 0 === TH.length && (0, uH.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", BH, " match."]
                              })]
                            })
                          }
                          var cA = LH(5296),
                            eA = LH(1603);
                          const qA = .95 * cA.c;

                          function gA(HH) {
                            return /^\s*```/.test(HH)
                          }

                          function NA(HH, BH) {
                            const LH = [
                              []
                            ];
                            let AH = !1;
                            for (const rH of HH.split("\n")) !AH && BH(rH) && LH.at(-1).length > 0 && LH.push([]), gA(rH) && (AH = !AH), LH.at(-1).push(rH);
                            return LH.map((HH => HH.join("\n").trim())).filter(Boolean)
                          }

                          function RA(HH, BH) {
                            const LH = `${"#".repeat(BH)} `,
                              AH = [];
                            let rH = !1;
                            for (const SH of HH.split("\n")) gA(SH) ? rH = !rH : !rH && SH.startsWith(LH) && AH.push(SH.slice(LH.length).trim());
                            return AH
                          }

                          function jA(HH) {
                            return HH.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class nA {
                            constructor(HH, BH) {
                              this.origin = BH, this.pages = void 0, this.partPaths = new Map;
                              const LH = HH.map((HH => {
                                const BH = BH => this.resolveLinks(HH, BH).length,
                                  LH = function(HH, BH) {
                                    const LH = HH.map((HH => BH(HH.markdown) + 2)),
                                      AH = LH.reduce(((HH, BH) => HH + BH), 0),
                                      rH = AH / Math.ceil(AH / qA),
                                      SH = [];
                                    let hH = 0;
                                    return HH.forEach(((HH, BH) => {
                                      const AH = LH[BH];
                                      (0 === SH.length || hH + AH > qA || hH + AH / 2 > rH) && (SH.push([]), hH = 0), SH.at(-1).push(HH), hH += AH
                                    })), SH
                                  }(function(HH, BH) {
                                    return NA(HH, (HH => HH.startsWith("## "))).flatMap((HH => {
                                      var LH;
                                      const AH = null !== (LH = RA(HH, 2)[0]) && void 0 !== LH ? LH : "";
                                      if (BH(HH) <= qA) return [{
                                        markdown: HH,
                                        section: AH
                                      }];
                                      let rH = !1,
                                        SH = "";
                                      return NA(HH, (HH => {
                                        const BH = rH && "" !== HH.trim();
                                        return rH = "" === HH.trim(), BH
                                      })).map((HH => {
                                        var BH;
                                        const LH = RA(HH, 3),
                                          rH = HH.startsWith("### ") ? LH[0] : SH;
                                        return SH = null !== (BH = LH.at(-1)) && void 0 !== BH ? BH : SH, {
                                          markdown: HH,
                                          section: AH || rH
                                        }
                                      }))
                                    }))
                                  }(jA(HH), BH), BH);
                                return {
                                  page: HH,
                                  groups: LH.length > 1 ? LH : []
                                }
                              }));
                              for (const {
                                  page: AH,
                                  groups: rH
                                }
                                of LH) rH.forEach(((HH, BH) => {
                                const LH = (0, cA.u)(AH.slug, BH);
                                for (const rH of HH.flatMap((HH => [...RA(HH.markdown, 2), ...RA(HH.markdown, 3)]))) {
                                  const HH = `${AH.id}#${(0,OH.r)(rH)}`;
                                  this.partPaths.has(HH) || this.partPaths.set(HH, LH)
                                }
                              }));
                              this.pages = LH.map((HH => {
                                let {
                                  page: BH,
                                  groups: LH
                                } = HH;
                                return {
                                  page: BH,
                                  path: (0, cA.r)(BH.slug),
                                  markdown: `# ${BH.title}\n\n${this.resolveLinks(BH,jA(BH))}\n`,
                                  parts: LH.map(((HH, AH) => this.renderPart(BH, HH, AH, LH.length)))
                                }
                              }))
                            }
                            url(HH) {
                              return `${this.origin}${HH}`
                            }
                            getPage(HH) {
                              return this.pages.find((BH => BH.page.id === HH))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((HH => (HH.parts.length > 0 ? HH.parts : [{
                                path: HH.path,
                                label: "",
                                markdown: HH.markdown
                              }]).filter((HH => HH.markdown.length > cA.c))))
                            }
                            markdownUrl(HH, BH) {
                              const LH = BH && this.partPaths.get(`${HH.id}#${BH}`) || (0, cA.r)(HH.slug);
                              return this.url(BH ? `${LH}#${BH}` : LH)
                            }
                            resolveLinks(HH, BH) {
                              return BH.replace(/\]\((#[^)]+)\)/g, ((BH, LH) => {
                                var AH;
                                const rH = null !== (AH = FH(LH)) && void 0 !== AH ? AH : this.samePageTarget(HH, LH);
                                return rH ? `](${this.markdownUrl(rH.page,rH.anchor)})` : BH
                              }))
                            }
                            samePageTarget(HH, BH) {
                              const LH = (0, OH.r)(BH.slice(1));
                              return nH(HH, LH) ? {
                                page: HH,
                                anchor: LH
                              } : null
                            }
                            renderPart(HH, BH, LH, AH) {
                              const rH = function(HH) {
                                  const BH = HH.map((HH => HH.section)).filter(Boolean);
                                  if (0 === BH.length) return "";
                                  const LH = BH[0],
                                    AH = BH.at(-1);
                                  return LH === AH ? LH : `${LH} to ${AH}`
                                }(BH),
                                SH = BH.map((HH => HH.markdown)).join("\n\n"),
                                hH = rH ? `It covers ${rH}. ` : "",
                                tH = `Part ${LH+1} of ${AH} of [${HH.title}](${this.url((0,cA.r)(HH.slug))}). ${hH}[llms.txt](${this.url(cA.h)}) lists every part.`;
                              return {
                                path: (0, cA.u)(HH.slug, LH),
                                label: rH,
                                markdown: `# ${HH.title}, part ${LH+1} of ${AH}\n\n${tH}\n\n${this.resolveLinks(HH,SH)}\n`
                              }
                            }
                            llmsTxt(HH) {
                              const BH = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${FA(cA.c)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const LH of gH) {
                                BH.push("", `## ${LH.title}`, "");
                                for (const HH of LH.pageIds) {
                                  const LH = this.getPage(HH),
                                    {
                                      page: AH,
                                      parts: rH
                                    } = LH,
                                    SH = `About ${FA(LH.markdown.length)} tokens${rH.length>0?`, in ${rH.length} parts:`:"."}`;
                                  BH.push(`- [${AH.title}](${this.url(LH.path)}): ${AH.summary} ${SH}`), rH.forEach(((HH, LH) => {
                                    BH.push(`  - [Part ${LH+1}${HH.label?`: ${HH.label}`:""}](${this.url(HH.path)})`)
                                  }))
                                }
                              }
                              return BH.push("", "## Optional", "", `- [Every page in one file](${this.url(cA.g)}): About ${FA(HH.length)} tokens, for a model with a large context window.`, ""), BH.join("\n")
                            }
                            llmsFullTxt() {
                              return gH.flatMap((HH => HH.pageIds.map((HH => this.getPage(HH).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const HH = this.llmsFullTxt(),
                                BH = this.llmsTxt(HH),
                                LH = new Map([
                                  [cA.n, BH],
                                  [cA.h, BH],
                                  [cA.g, HH]
                                ]);
                              for (const AH of this.pages) {
                                LH.set(AH.path, AH.markdown);
                                for (const HH of AH.parts) LH.set(HH.path, HH.markdown)
                              }
                              return LH
                            }
                          }

                          function FA(HH) {
                            return `${Math.max(1,Math.round(HH/4e3))}K`
                          }
                          let DA = null;

                          function wA() {
                            return DA ??= new nA(qH, eA.c), DA
                          }
                          var ZA = LH(5302);
                          const dA = [ZA.h, ZA.p];

                          function aA(HH) {
                            return wA().getPage(HH.id).parts.length > 0 ? `Read ${cA.l}, then the parts of the Bloxd Code API's ${HH.title} page it lists, so I can ask questions about it.` : `Read ${eA.c}${(0,cA.r)(HH.slug)} so I can ask questions about it. ${ZA.o}`
                          }

                          function sA(HH) {
                            let {
                              page: BH
                            } = HH;
                            const [LH, AH] = xH();
                            return (0, uH.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, uH.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  AH(wA().getPage(BH.id).markdown)
                                },
                                children: [(0, uH.jsx)(WH, {
                                  name: !1 === (null === LH || void 0 === LH ? void 0 : LH.failed) ? "check" : "copy"
                                }), (0, uH.jsx)("span", {
                                  children: LH ? LH.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), dA.map((HH => (0, uH.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, ZA.e)(HH, aA(BH)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, uH.jsx)(WH, {
                                  name: "external-link"
                                }), (0, uH.jsxs)("span", {
                                  children: ["Open in ", HH.name]
                                })]
                              }, HH.name)))]
                            })
                          }

                          function JA(HH) {
                            return `#${[0,1,2].map((BH=>Math.round(Math.min(255,Math.max(0,HH[BH]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function iA(HH) {
                            return [parseInt(HH.slice(1, 3), 16), parseInt(HH.slice(3, 5), 16), parseInt(HH.slice(5, 7), 16)]
                          }

                          function pA(HH) {
                            let {
                              label: BH,
                              min: LH,
                              max: AH,
                              step: rH,
                              low: SH,
                              high: hH,
                              onChange: tH
                            } = HH;
                            return (0, uH.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, uH.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, uH.jsx)("span", {
                                  children: BH
                                }), (0, uH.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: SH === hH ? SH : `${SH}\u2013${hH}`
                                })]
                              }), (0, uH.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, uH.jsx)("input", {
                                  type: "range",
                                  min: LH,
                                  max: AH,
                                  step: rH,
                                  value: Math.min(AH, SH),
                                  "aria-label": `Minimum ${BH.toLowerCase()}`,
                                  onChange: HH => {
                                    const BH = Number(HH.target.value);
                                    tH(BH, Math.max(BH, hH))
                                  }
                                }), (0, uH.jsx)("input", {
                                  type: "range",
                                  min: LH,
                                  max: AH,
                                  step: rH,
                                  value: Math.min(AH, hH),
                                  "aria-label": `Maximum ${BH.toLowerCase()}`,
                                  onChange: HH => {
                                    const BH = Number(HH.target.value);
                                    tH(Math.min(BH, SH), BH)
                                  }
                                })]
                              })]
                            })
                          }

                          function yA(HH) {
                            let {
                              label: BH,
                              min: LH,
                              max: AH,
                              step: rH,
                              value: SH,
                              onChange: hH,
                              format: tH = String
                            } = HH;
                            return (0, uH.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, uH.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, uH.jsx)("span", {
                                  children: BH
                                }), (0, uH.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: tH(SH)
                                })]
                              }), (0, uH.jsx)("input", {
                                type: "range",
                                min: LH,
                                max: AH,
                                step: rH,
                                value: Math.min(AH, Math.max(LH, SH)),
                                "aria-label": BH,
                                onChange: HH => {
                                  hH(Number(HH.target.value))
                                }
                              })]
                            })
                          }

                          function Hr(HH) {
                            let {
                              opts: BH,
                              onChange: LH
                            } = HH;
                            const AH = BH.colorGradients;
                            if (!DL(AH)) return (0, uH.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, uH.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, uH.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, uH.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: AH.map(((HH, BH) => (0, uH.jsx)("input", {
                                  type: "color",
                                  value: JA(HH.color),
                                  "aria-label": `Colour ${BH+1}`,
                                  onChange: HH => {
                                    const rH = [...AH];
                                    rH[BH] = {
                                      color: iA(HH.target.value)
                                    }, LH(rH)
                                  }
                                }, BH)))
                              })]
                            });
                            const rH = (HH, BH) => {
                              const rH = [...AH];
                              rH[HH] = BH, LH(rH)
                            };
                            return (0, uH.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, uH.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, uH.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, uH.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), AH.map(((HH, BH) => {
                                var LH;
                                const AH = null !== (LH = HH.maxColor) && void 0 !== LH ? LH : HH.minColor;
                                return (0, uH.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, uH.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * HH.timeFraction), "%"]
                                  }), (0, uH.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${JA(HH.minColor)}, ${JA(AH)})`
                                    }
                                  }), (0, uH.jsx)("input", {
                                    type: "color",
                                    value: JA(HH.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*HH.timeFraction)}%`,
                                    onChange: LH => {
                                      rH(BH, {
                                        ...HH,
                                        minColor: [...iA(LH.target.value), HH.minColor[3]]
                                      })
                                    }
                                  }), (0, uH.jsx)("input", {
                                    type: "color",
                                    value: JA(AH),
                                    "aria-label": `Maximum colour at ${Math.round(100*HH.timeFraction)}%`,
                                    onChange: LH => {
                                      rH(BH, {
                                        ...HH,
                                        maxColor: [...iA(LH.target.value), AH[3]]
                                      })
                                    }
                                  })]
                                }, BH)
                              }))]
                            })
                          }
                          const Br = [-.5, -.5, -.5],
                            Lr = [.5, .5, .5],
                            Ar = [0, 1, 2, 3, 4, 5, 6, 7].map((HH => [1 & HH ? Lr[0] : Br[0], 2 & HH ? Lr[1] : Br[1], 4 & HH ? Lr[2] : Br[2]]));class rr {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(HH, BH, LH, AH) {
                              const rH = Math.round(31 * BH),
                                SH = Math.round(31 * LH),
                                hH = Math.round(31 * AH),
                                tH = `${rH}|${SH}|${hH}`;
                              let zH = this.tints.get(HH);
                              (!zH || zH.size > 2e3) && (zH = new Map, this.tints.set(HH, zH));
                              let CH = zH.get(tH);
                              if (CH) return CH;
                              CH = document.createElement("canvas"), CH.width = HH.naturalWidth || 16, CH.height = HH.naturalHeight || 16;
                              const EH = CH.getContext("2d");
                              return EH ? (EH.imageSmoothingEnabled = !1, EH.drawImage(HH, 0, 0, CH.width, CH.height), EH.globalCompositeOperation = "multiply", EH.fillStyle = `rgb(${rH/31*255}, ${SH/31*255}, ${hH/31*255})`, EH.fillRect(0, 0, CH.width, CH.height), EH.globalCompositeOperation = "destination-in", EH.drawImage(HH, 0, 0, CH.width, CH.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), zH.set(tH, CH), CH
                            }
                          }

                          function Sr(HH) {
                            let {
                              opts: BH,
                              textureUrl: LH,
                              burst: rH,
                              paused: SH
                            } = HH;
                            const hH = (0, AH.useRef)(null),
                              tH = (0, AH.useRef)(BH);
                            tH.current = BH;
                            const zH = (0, AH.useRef)(SH);
                            zH.current = SH;
                            const CH = (0, AH.useRef)(null),
                              EH = (0, AH.useRef)(null),
                              XH = (0, AH.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(HH) {
                                let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const LH = [-.5, -.5, -.5],
                                  AH = [.5, .5, .5];
                                let rH = .5;
                                for (let SH = 0; SH < 40; SH++) {
                                  const SH = ZL(HH, LH, AH, BH),
                                    hH = Math.max(SH.life / 30, .001);
                                  for (; sL(SH, HH.gravity, hH);) rH = Math.max(rH, Math.hypot(SH.pos[0], SH.pos[1], SH.pos[2]) + SH.size / 2)
                                }
                                return rH
                              }(BH)))), [BH]),
                              GH = (0, AH.useRef)(XH);
                            return GH.current = XH, (0, AH.useEffect)((() => {
                              if (CH.current = null, !LH) return;
                              const HH = new Image;
                              let BH = !1;
                              return HH.onload = () => {
                                BH || (CH.current = HH)
                              }, HH.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${LH}`)
                              }, HH.src = LH, () => {
                                BH = !0
                              }
                            }), [LH]), (0, AH.useEffect)((() => {
                              var HH;
                              null === (HH = EH.current) || void 0 === HH || HH.call(EH)
                            }), [BH, rH]), (0, AH.useEffect)((() => {
                              const HH = hH.current,
                                BH = null === HH || void 0 === HH ? void 0 : HH.getContext("2d");
                              if (!HH || !BH) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const LH = new rr;
                              let AH = [],
                                rH = 0,
                                SH = -.7,
                                XH = GH.current,
                                YH = performance.now(),
                                uH = 0,
                                QH = !0,
                                WH = null;
                              const MH = () => {
                                const HH = tH.current,
                                  BH = Math.min(400, Math.max(0, Math.ceil(HH.manualEmitCount)));
                                AH = [];
                                for (let LH = 0; LH < BH; LH++) AH.push(ZL(HH, Br, Lr, Math.random));
                                rH = 0
                              };
                              EH.current = MH, MH();
                              const xH = hH => {
                                uH = requestAnimationFrame(xH);
                                const EH = Math.min(.05, (hH - YH) / 1e3);
                                if (YH = hH, !QH) return;
                                const vH = window.devicePixelRatio || 1,
                                  PH = Math.round(HH.clientWidth * vH),
                                  TH = Math.round(HH.clientHeight * vH);
                                if (0 === PH || 0 === TH) return;
                                HH.width === PH && HH.height === TH || (HH.width = PH, HH.height = TH);
                                const UH = tH.current;
                                null === WH && (SH += .18 * EH), XH += (GH.current - XH) * Math.min(1, 4 * EH);
                                const VH = .6 * EH;
                                AH = AH.filter((HH => sL(HH, UH.gravity, VH))), 0 !== AH.length || zH.current || (rH += EH, rH > .6 && MH());
                                const OH = function(HH, BH, LH, AH) {
                                  const rH = 3.2 * AH,
                                    SH = .44 * Math.min(HH, BH) * rH / AH,
                                    hH = Math.cos(LH),
                                    tH = Math.sin(LH),
                                    zH = Math.cos(.42),
                                    CH = Math.sin(.42);
                                  return (LH, AH, EH) => {
                                    const XH = LH * tH + EH * hH,
                                      GH = rH - (AH * CH + XH * zH);
                                    if (GH < .05) return null;
                                    const YH = SH / GH;
                                    return {
                                      x: HH / 2 + (LH * hH - EH * tH) * YH,
                                      y: BH / 2 - (AH * zH - XH * CH) * YH,
                                      scale: YH,
                                      depth: GH
                                    }
                                  }
                                }(PH, TH, SH, XH);
                                ! function(HH, BH, LH, AH, rH) {
                                  const SH = HH.createLinearGradient(0, 0, 0, LH);
                                  SH.addColorStop(0, "#23262d"), SH.addColorStop(1, "#16181c"), HH.globalCompositeOperation = "source-over", HH.globalAlpha = 1, HH.fillStyle = SH, HH.fillRect(0, 0, BH, LH);
                                  const hH = (BH, LH) => {
                                      const rH = AH(BH[0], BH[1], BH[2]),
                                        SH = AH(LH[0], LH[1], LH[2]);
                                      rH && SH && (HH.beginPath(), HH.moveTo(rH.x, rH.y), HH.lineTo(SH.x, SH.y), HH.stroke())
                                    },
                                    tH = Math.ceil(rH) + 1,
                                    zH = Br[1];
                                  HH.lineWidth = 1, HH.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let CH = -tH; CH <= tH; CH++) hH([CH + .5, zH, .5 - tH], [CH + .5, zH, tH + .5]), hH([.5 - tH, zH, CH + .5], [tH + .5, zH, CH + .5]);
                                  HH.strokeStyle = "rgba(255, 255, 255, 0.28)", HH.setLineDash([4, 4]);
                                  for (const CH of Ar)
                                    for (const HH of Ar) {
                                      const BH = [0, 1, 2].filter((BH => CH[BH] !== HH[BH]));
                                      1 === BH.length && CH[BH[0]] < HH[BH[0]] && hH(CH, HH)
                                    }
                                  HH.setLineDash([])
                                }(BH, PH, TH, OH, XH);
                                const bH = CH.current,
                                  kH = AH.map((HH => ({
                                    particle: HH,
                                    at: OH(HH.pos[0], HH.pos[1], HH.pos[2])
                                  }))).filter((HH => null !== HH.at)).sort(((HH, BH) => BH.at.depth - HH.at.depth));
                                BH.imageSmoothingEnabled = !1;
                                for (const HH of function(HH) {
                                    switch (HH) {
                                      case NL.f.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case NL.f.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case NL.f.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case NL.f.MultiplyAdd:
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
                                  }(UH.blendMode)) {
                                  BH.globalCompositeOperation = HH.operation;
                                  for (const {
                                      particle: AH,
                                      at: rH
                                    }
                                    of kH) {
                                    const [SH, hH, tH, zH] = aL(AH), CH = Math.max(1, AH.size * rH.scale);
                                    BH.globalAlpha = HH.usesAlpha ? Math.min(1, Math.max(0, zH)) : 1, bH ? BH.drawImage(LH.get(bH, SH, hH, tH), rH.x - CH / 2, rH.y - CH / 2, CH, CH) : (BH.fillStyle = `rgb(${255*SH}, ${255*hH}, ${255*tH})`, BH.fillRect(rH.x - CH / 2, rH.y - CH / 2, CH, CH))
                                  }
                                }
                                BH.globalCompositeOperation = "source-over", BH.globalAlpha = 1
                              };
                              uH = requestAnimationFrame(xH);
                              const vH = new IntersectionObserver((HH => {
                                let [BH] = HH;
                                QH = BH.isIntersecting
                              }));
                              vH.observe(HH);
                              const PH = BH => {
                                  WH = BH.clientX, HH.setPointerCapture(BH.pointerId)
                                },
                                TH = HH => {
                                  null !== WH && (SH += .01 * (HH.clientX - WH), WH = HH.clientX)
                                },
                                UH = () => {
                                  WH = null
                                };
                              return HH.addEventListener("pointerdown", PH), HH.addEventListener("pointermove", TH), HH.addEventListener("pointerup", UH), HH.addEventListener("pointercancel", UH), () => {
                                cancelAnimationFrame(uH), vH.disconnect(), EH.current = null, HH.removeEventListener("pointerdown", PH), HH.removeEventListener("pointermove", TH), HH.removeEventListener("pointerup", UH), HH.removeEventListener("pointercancel", UH)
                              }
                            }), []), (0, uH.jsx)("canvas", {
                              ref: hH,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${BH.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const hr = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            tr = [{
                              mode: NL.f.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: NL.f.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: NL.f.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: NL.f.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: NL.f.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            zr = (0, AH.forwardRef)((function(HH, BH) {
                              var LH, rH;
                              let {
                                textures: hH
                              } = HH;
                              const tH = vA(),
                                zH = (0, AH.useRef)(null),
                                [CH, EH] = (0, AH.useState)(jL),
                                [XH, GH] = (0, AH.useState)("example"),
                                [YH, QH] = (0, AH.useState)(0),
                                [MH, xH] = (0, AH.useState)(!1),
                                PH = HH => {
                                  const BH = "example" === HH ? jL : RL(HH);
                                  BH && (EH(BH), GH(HH))
                                };
                              (0, AH.useImperativeHandle)(BH, (() => ({
                                preview: HH => {
                                  var BH;
                                  PH(HH), null === (BH = zH.current) || void 0 === BH || BH.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const TH = HH => {
                                  EH({
                                    ...CH,
                                    ...HH
                                  }), GH(null)
                                },
                                UH = function(HH, BH) {
                                  if (null !== BH) return `${yL}    presetId: "${BH}",\n${HA}\n})`;
                                  const LH = HH.velocityGradients.map((HH => `        {\n            timeFraction: ${JL(HH.timeFraction)},\n            factor: ${JL(HH.factor)},\n            factor2: ${JL(HH.factor2)},\n        },`)),
                                    AH = [`    dir1: ${iL(HH.dir1)},`, `    dir2: ${iL(HH.dir2)},`, HA, `    texture: "${HH.texture}",`, `    minLifeTime: ${JL(HH.minLifeTime)},`, `    maxLifeTime: ${JL(HH.maxLifeTime)},`, `    minEmitPower: ${JL(HH.minEmitPower)},`, `    maxEmitPower: ${JL(HH.maxEmitPower)},`, `    minSize: ${JL(HH.minSize)},`, `    maxSize: ${JL(HH.maxSize)},`, `    manualEmitCount: ${JL(HH.manualEmitCount)},`, `    gravity: ${iL(HH.gravity)},`, `    colorGradients: ${pL(HH.colorGradients,"    ")},`, `    velocityGradients: ${LH.length>0?`[\n${LH.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${JL(HH.blendMode)},`];
                                  return void 0 !== HH.hideDist && AH.push(`    hideDist: ${JL(HH.hideDist)},`), `${yL}${AH.join("\n")}\n})`
                                }(CH, null === XH || "example" === XH ? null : XH),
                                OH = hH.includes(CH.texture) ? hH : [...hH, CH.texture];
                              return (0, uH.jsxs)("section", {
                                ref: zH,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, uH.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, uH.jsxs)("div", {
                                    children: [(0, uH.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, uH.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, uH.jsx)(vH, {
                                    text: UH,
                                    label: "Copy code"
                                  })]
                                }), (0, uH.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, uH.jsx)("button", {
                                    type: "button",
                                    className: SH()("DocsVariantChip", {
                                      Active: "example" === XH
                                    }),
                                    onClick: () => {
                                      PH("example")
                                    },
                                    children: "Example"
                                  }), hr.filter((HH => null !== RL(HH))).map((HH => (0, uH.jsx)("button", {
                                    type: "button",
                                    className: SH()("DocsVariantChip", {
                                      Active: XH === HH
                                    }),
                                    onClick: () => {
                                      PH(HH)
                                    },
                                    children: HH
                                  }, HH))), (0, uH.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== XH && void 0 !== XH ? XH : "custom",
                                    "aria-label": "Preset",
                                    onChange: HH => {
                                      PH(HH.target.value)
                                    },
                                    children: [(0, uH.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === XH && (0, uH.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), gL.b.map((HH => (0, uH.jsx)("option", {
                                      value: HH,
                                      children: HH
                                    }, HH)))]
                                  })]
                                }), (0, uH.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, uH.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, uH.jsx)(Sr, {
                                      opts: CH,
                                      textureUrl: null !== (LH = null === tH || void 0 === tH ? void 0 : tH.getParticleTextureUrl(CH.texture)) && void 0 !== LH ? LH : null,
                                      burst: YH,
                                      paused: MH
                                    }), (0, uH.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, uH.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          QH(YH + 1)
                                        },
                                        children: [(0, uH.jsx)(WH, {
                                          name: "replay"
                                        }), (0, uH.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, uH.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": MH,
                                        onClick: () => {
                                          xH(!MH)
                                        },
                                        children: [(0, uH.jsx)(WH, {
                                          name: MH ? "play" : "pause"
                                        }), (0, uH.jsx)("span", {
                                          children: MH ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, uH.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, uH.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, uH.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, uH.jsx)("span", {
                                          children: "Texture"
                                        }), (0, uH.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: CH.texture
                                        })]
                                      }), (0, uH.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: OH.map((HH => {
                                          var BH;
                                          const LH = null !== (BH = null === tH || void 0 === tH ? void 0 : tH.getParticleTextureUrl(HH)) && void 0 !== BH ? BH : null;
                                          return (0, uH.jsx)("button", {
                                            type: "button",
                                            className: SH()("DocsParticleTexture", {
                                              Active: CH.texture === HH
                                            }),
                                            title: HH,
                                            "aria-label": HH,
                                            "aria-pressed": CH.texture === HH,
                                            onClick: () => {
                                              TH({
                                                texture: HH
                                              })
                                            },
                                            children: LH ? (0, uH.jsx)("img", {
                                              src: LH,
                                              alt: ""
                                            }) : (0, uH.jsx)(WH, {
                                              name: "image"
                                            })
                                          }, HH)
                                        }))
                                      })]
                                    }), (0, uH.jsx)(yA, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: CH.manualEmitCount,
                                      onChange: HH => {
                                        TH({
                                          manualEmitCount: HH
                                        })
                                      }
                                    }), (0, uH.jsx)(pA, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: CH.minLifeTime,
                                      high: CH.maxLifeTime,
                                      onChange: (HH, BH) => {
                                        TH({
                                          minLifeTime: HH,
                                          maxLifeTime: BH
                                        })
                                      }
                                    }), (0, uH.jsx)(pA, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: CH.minEmitPower,
                                      high: CH.maxEmitPower,
                                      onChange: (HH, BH) => {
                                        TH({
                                          minEmitPower: HH,
                                          maxEmitPower: BH
                                        })
                                      }
                                    }), (0, uH.jsx)(pA, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: CH.minSize,
                                      high: CH.maxSize,
                                      onChange: (HH, BH) => {
                                        TH({
                                          minSize: HH,
                                          maxSize: BH
                                        })
                                      }
                                    }), (0, uH.jsx)(yA, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (rH = CH.gravity[1]) && void 0 !== rH ? rH : 0,
                                      onChange: HH => {
                                        var BH, LH;
                                        TH({
                                          gravity: [null !== (BH = CH.gravity[0]) && void 0 !== BH ? BH : 0, HH, null !== (LH = CH.gravity[2]) && void 0 !== LH ? LH : 0]
                                        })
                                      }
                                    }), (0, uH.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, uH.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, uH.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, uH.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: CH.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: HH => {
                                          TH({
                                            blendMode: Number(HH.target.value)
                                          })
                                        },
                                        children: tr.map((HH => {
                                          let {
                                            mode: BH,
                                            label: LH
                                          } = HH;
                                          return (0, uH.jsx)("option", {
                                            value: BH,
                                            children: LH
                                          }, BH)
                                        }))
                                      })]
                                    }), (0, uH.jsx)(Hr, {
                                      opts: CH,
                                      onChange: HH => {
                                        TH({
                                          colorGradients: HH
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, uH.jsx)(VH, {
                                  code: UH,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var Cr = LH(4877),
                            Er = LH(1967);

                          function Xr(HH, BH) {
                            return HH ? Cr.b.includes(BH) ? HH.getIngameIconUrl(BH) : HH.getItemIconUrl(BH) : null
                          }

                          function Gr(HH) {
                            var BH, LH, AH;
                            let {
                              part: rH,
                              assets: hH
                            } = HH;
                            const tH = Xr(hH, rH.icon),
                              zH = null !== (BH = null === (LH = rH.style) || void 0 === LH ? void 0 : LH.fontSize) && void 0 !== BH ? BH : "1.8em",
                              CH = (0, gB.kc)(rH.style);
                            return (0, uH.jsxs)("span", {
                              className: SH()("DocsBloxdTextIcon", {
                                Missing: !tH
                              }),
                              style: {
                                width: zH,
                                height: zH,
                                opacity: null === (AH = rH.style) || void 0 === AH ? void 0 : AH.opacity
                              },
                              title: tH ? void 0 : "No Bloxd icon, item or block has this name",
                              children: [tH && CH && (0, uH.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: CH,
                                  maskImage: `url("${tH}")`,
                                  WebkitMaskImage: `url("${tH}")`
                                }
                              }), tH ? (0, uH.jsx)("img", {
                                src: tH,
                                alt: "",
                                className: SH()({
                                  Tinted: CH
                                })
                              }) : (0, uH.jsx)(WH, {
                                name: "image"
                              })]
                            })
                          }

                          function Yr(HH) {
                            let {
                              parts: BH,
                              className: LH
                            } = HH;
                            const AH = vA(),
                              rH = [];
                            let hH = [];
                            const tH = HH => {
                              hH.length > 0 && (rH.push((0, uH.jsx)(Er.b, {
                                text: hH
                              }, `run-${HH}`)), hH = [])
                            };
                            return BH.forEach(((HH, BH) => {
                              "icon" !== FB(HH) || RB(HH.icon) ? hH.push(HH) : (tH(BH), rH.push((0, uH.jsx)(Gr, {
                                part: HH,
                                assets: AH
                              }, `icon-${BH}`)))
                            })), tH(BH.length), (0, uH.jsx)("div", {
                              className: SH()("DocsStyledTextPreview", LH),
                              children: rH
                            })
                          }
                          const ur = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let Qr = null;

                          function Wr(HH) {
                            if (Qr ??= document.createElement("canvas").getContext("2d"), !Qr) return "#000000";
                            Qr.fillStyle = "#000000", Qr.fillStyle = HH;
                            const BH = Qr.fillStyle;
                            return BH.startsWith("#") ? BH : "#000000"
                          }

                          function Mr(HH) {
                            let {
                              value: BH,
                              label: LH,
                              onChange: AH
                            } = HH;
                            return (0, uH.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, uH.jsx)("input", {
                                type: "color",
                                value: Wr(BH),
                                "aria-label": `${LH} picker`,
                                onChange: HH => {
                                  AH(HH.target.value)
                                }
                              }), (0, uH.jsx)("input", {
                                type: "text",
                                value: BH,
                                placeholder: "#ffb914 or gold",
                                "aria-label": LH,
                                spellCheck: !1,
                                onChange: HH => {
                                  AH(HH.target.value)
                                }
                              })]
                            })
                          }

                          function xr(HH) {
                            let {
                              value: BH,
                              fontAwesomeIcons: LH,
                              onChange: rH
                            } = HH;
                            const hH = vA(),
                              [tH, zH] = (0, AH.useState)(RB(BH) ? "fontAwesome" : "bloxd"),
                              [CH, EH] = (0, AH.useState)(""),
                              XH = CH.trim().toLowerCase(),
                              GH = "bloxd" === tH ? Cr.b : LH,
                              YH = XH ? GH.filter((HH => HH.toLowerCase().includes(XH))) : GH;
                            return (0, uH.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, uH.jsx)("input", {
                                type: "text",
                                value: BH,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: HH => {
                                  rH(HH.target.value)
                                }
                              }), (0, uH.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, uH.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((HH => (0, uH.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": tH === HH,
                                    className: SH()("DocsVariantChip", {
                                      Active: tH === HH
                                    }),
                                    onClick: () => {
                                      zH(HH)
                                    },
                                    children: "bloxd" === HH ? `Bloxd icons (${Cr.b.length})` : `Font Awesome (${LH.length})`
                                  }, HH))), (0, uH.jsx)("input", {
                                    type: "search",
                                    value: CH,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: HH => {
                                      EH(HH.target.value)
                                    }
                                  })
                                ]
                              }), (0, uH.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [YH.map((HH => {
                                  const LH = "bloxd" === tH ? Xr(hH, HH) : null;
                                  return (0, uH.jsx)("button", {
                                    type: "button",
                                    title: HH,
                                    "aria-label": HH,
                                    "aria-pressed": HH === BH,
                                    className: SH()("DocsIconPickerOption", {
                                      Active: HH === BH
                                    }),
                                    onClick: () => {
                                      rH(HH)
                                    },
                                    children: "fontAwesome" === tH ? (0, uH.jsx)(PL.c, {
                                      name: HH
                                    }) : LH ? (0, uH.jsx)("img", {
                                      src: LH,
                                      alt: ""
                                    }) : (0, uH.jsx)(WH, {
                                      name: "image"
                                    })
                                  }, HH)
                                })), 0 === YH.length && (0, uH.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", CH, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function vr(HH) {
                            let {
                              property: BH,
                              value: LH,
                              fontAwesomeIcons: AH,
                              onChange: rH
                            } = HH;
                            const {
                              field: SH,
                              label: hH
                            } = BH, tH = HH => "" !== HH || BH.isRequired ? HH : void 0;
                            switch (SH.kind) {
                              case "text":
                                return SH.multiline ? (0, uH.jsx)("textarea", {
                                  value: String(null !== LH && void 0 !== LH ? LH : ""),
                                  rows: 2,
                                  "aria-label": hH,
                                  onChange: HH => {
                                    rH(HH.target.value)
                                  }
                                }) : (0, uH.jsx)("input", {
                                  type: "text",
                                  value: String(null !== LH && void 0 !== LH ? LH : ""),
                                  "aria-label": hH,
                                  onChange: HH => {
                                    rH(tH(HH.target.value))
                                  }
                                });
                              case "size":
                                return (0, uH.jsx)("input", {
                                  type: "text",
                                  value: String(null !== LH && void 0 !== LH ? LH : ""),
                                  placeholder: BH.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": hH,
                                  spellCheck: !1,
                                  onChange: HH => {
                                    rH(tH(HH.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, uH.jsx)(Mr, {
                                  value: String(null !== LH && void 0 !== LH ? LH : ""),
                                  label: hH,
                                  onChange: HH => {
                                    rH(tH(HH))
                                  }
                                });
                              case "colours": {
                                const HH = Array.isArray(LH) ? LH : [],
                                  BH = HH => {
                                    rH(HH.length > 0 ? HH : void 0)
                                  };
                                return (0, uH.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [HH.map(((LH, AH) => (0, uH.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, uH.jsx)(Mr, {
                                      value: LH,
                                      label: `${hH} ${AH+1}`,
                                      onChange: LH => {
                                        BH(HH.map(((HH, BH) => BH === AH ? LH : HH)))
                                      }
                                    }), (0, uH.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${AH+1}`,
                                      onClick: () => {
                                        BH(HH.filter(((HH, BH) => BH !== AH)))
                                      },
                                      children: (0, uH.jsx)(WH, {
                                        name: "cross"
                                      })
                                    })]
                                  }, AH))), (0, uH.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var LH;
                                      BH([...HH, null !== (LH = HH.at(-1)) && void 0 !== LH ? LH : "#ffffff"])
                                    },
                                    children: [(0, uH.jsx)(WH, {
                                      name: "plus"
                                    }), 0 === HH.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var zH;
                                const HH = "number" === typeof LH ? LH : Number(null !== (zH = BH.defaultText) && void 0 !== zH ? zH : 0);
                                return (0, uH.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, uH.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: HH,
                                    "aria-label": hH,
                                    onChange: HH => {
                                      rH(Number(HH.target.value))
                                    }
                                  }), (0, uH.jsx)("output", {
                                    children: HH.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, uH.jsxs)("select", {
                                  value: String(null !== LH && void 0 !== LH ? LH : ""),
                                  "aria-label": hH,
                                  onChange: HH => {
                                    rH(tH(HH.target.value))
                                  },
                                  children: [!BH.isRequired && (0, uH.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", BH.defaultText, ")"]
                                  }), SH.options.map((HH => (0, uH.jsx)("option", {
                                    value: HH,
                                    children: HH
                                  }, HH)))]
                                });
                              case "icon":
                                return (0, uH.jsx)(xr, {
                                  value: String(null !== LH && void 0 !== LH ? LH : ""),
                                  fontAwesomeIcons: AH,
                                  onChange: rH
                                })
                            }
                          }

                          function Pr(HH) {
                            let BH;
                            try {
                              BH = JSON.parse(HH)
                            } catch (LH) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${LH.message}`
                              }
                            }
                            return LL(BH) ? {
                              part: BH,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function Tr(HH) {
                            let {
                              parts: BH,
                              index: LH,
                              fontAwesomeIcons: rH,
                              onChange: SH,
                              bq: hH,
                              onClose: tH
                            } = HH;
                            const zH = (0, AH.useContext)(uB),
                              EH = (0, AH.useRef)(null),
                              XH = BH[LH],
                              GH = FB(XH),
                              [YH, QH] = (0, AH.useState)((() => JSON.stringify(XH, null, 2))),
                              MH = (0, AH.useMemo)((() => "other" === GH ? Pr(YH).error : null), [GH, YH]);
                            (0, AH.useEffect)((() => {
                              var HH;
                              null === (HH = EH.current) || void 0 === HH || HH.focus()
                            }), []);
                            const xH = (0, uH.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: HH => {
                                HH.target === HH.currentTarget && tH()
                              },
                              children: (0, uH.jsxs)("div", {
                                ref: EH,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${LH+1}: ${jB[GH]}`,
                                tabIndex: -1,
                                onKeyDown: HH => {
                                  "Escape" === HH.key ? (HH.stopPropagation(), tH()) : "Tab" === HH.key && EH.current && function(HH, BH) {
                                    const LH = Array.from(HH.querySelectorAll(oB)),
                                      AH = LH[0],
                                      rH = LH.at(-1);
                                    if (!AH || !rH) return;
                                    const SH = document.activeElement;
                                    !BH.shiftKey || SH !== AH && SH !== HH ? BH.shiftKey || SH !== rH || (BH.preventDefault(), AH.focus()) : (BH.preventDefault(), rH.focus())
                                  }(EH.current, HH)
                                },
                                children: [(0, uH.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, uH.jsxs)("div", {
                                    children: [(0, uH.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", LH + 1]
                                    }), (0, uH.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: jB[GH]
                                    })]
                                  }), (0, uH.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: tH,
                                    children: (0, uH.jsx)(WH, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, uH.jsx)(Yr, {
                                  parts: BH,
                                  className: "DocsTextDialogPreview"
                                }), (0, uH.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === GH ? (0, uH.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, uH.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, uH.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: YH,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: HH => {
                                        QH(HH.target.value);
                                        const BH = Pr(HH.target.value);
                                        null !== BH.part && SH(BH.part)
                                      }
                                    }), MH && (0, uH.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: MH
                                    })]
                                  }) : wB[GH].map((HH => {
                                    const BH = dB(XH, HH.path),
                                      LH = HH.isRequired ? JSON.stringify(sB(XH, HH.path)) === JSON.stringify(XH) : void 0 === BH;
                                    return (0, uH.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, uH.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, uH.jsx)("span", {
                                          children: HH.label
                                        }), (0, uH.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: LH,
                                          "aria-label": `Reset ${HH.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            SH(sB(XH, HH.path))
                                          },
                                          children: [(0, uH.jsx)(WH, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, uH.jsx)(vr, {
                                        property: HH,
                                        value: BH,
                                        fontAwesomeIcons: rH,
                                        onChange: BH => {
                                          SH(aB(XH, HH.path, BH))
                                        }
                                      }), !HH.isRequired && (0, uH.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", HH.defaultText]
                                      })]
                                    }, HH.path.join("."))
                                  }))
                                }), (0, uH.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, uH.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: hH,
                                    children: [(0, uH.jsx)(WH, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, uH.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: tH,
                                    children: "Done"
                                  })]
                                }), (0, uH.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: ur.map((HH => (0, uH.jsx)("option", {
                                    value: HH
                                  }, HH)))
                                })]
                              })
                            });
                            return zH ? (0, CH.createPortal)(xH, zH) : xH
                          }
                          const Ur = [{
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
                            Vr = Object.keys(nB);

                          function Or(HH) {
                            let {
                              fontAwesomeIcons: BH
                            } = HH;
                            const [LH, rH] = (0, AH.useState)(Ur[0].parts), [hH, tH] = (0, AH.useState)((() => yB(Ur[0].parts))), [zH, CH] = (0, AH.useState)(null), [EH, XH] = (0, AH.useState)(!1), [GH, YH] = (0, AH.useState)(null), [QH, MH] = (0, AH.useState)(!1), [xH, vH] = (0, AH.useState)(null), PH = (0, AH.useRef)(null), TH = yB(LH);
                            (0, AH.useLayoutEffect)((() => {
                              var HH;
                              if (!xH) return;
                              const BH = HH => {
                                  var BH;
                                  return null === (BH = PH.current) || void 0 === BH ? void 0 : BH.querySelector(`[data-focus-key="${HH}"]`)
                                },
                                LH = BH(xH.key);
                              null === (HH = LH && !LH.disabled ? LH : BH(xH.fallback)) || void 0 === HH || HH.focus(), vH(null)
                            }), [xH]);
                            const UH = HH => {
                                rH(HH), tH(yB(HH)), CH(null)
                              },
                              OH = HH => {
                                UH(LH.filter(((BH, LH) => LH !== HH))), vH({
                                  key: `edit-${Math.min(HH,LH.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              bH = (HH, BH) => {
                                const AH = [...LH],
                                  [rH] = AH.splice(HH, 1);
                                AH.splice(HH + BH, 0, rH), UH(AH);
                                vH({
                                  key: `${BH<0?"up":"down"}-${HH+BH}`,
                                  fallback: `edit-${HH+BH}`
                                })
                              };
                            return (0, uH.jsxs)("section", {
                              ref: PH,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, uH.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, uH.jsxs)("div", {
                                  children: [(0, uH.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, uH.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, uH.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: Ur.map((HH => (0, uH.jsx)("button", {
                                  type: "button",
                                  className: SH()("DocsVariantChip", {
                                    Active: TH === yB(HH.parts)
                                  }),
                                  onClick: () => {
                                    UH(HH.parts)
                                  },
                                  children: HH.label
                                }, HH.label)))
                              }), (0, uH.jsx)(Yr, {
                                parts: LH,
                                className: "DocsTextEditorPreview"
                              }), (0, uH.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, uH.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, uH.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, uH.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [LH.map(((HH, BH) => {
                                      const AH = FB(HH);
                                      return (0, uH.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, uH.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${BH}`,
                                          "aria-label": `Edit part ${BH+1}, ${jB[AH]}`,
                                          onClick: () => {
                                            YH(BH)
                                          },
                                          children: [(0, uH.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: jB[AH]
                                          }), (0, uH.jsx)(Yr, {
                                            parts: [HH],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== AH && (0, uH.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: JB(HH)
                                          })]
                                        }), (0, uH.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, uH.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${BH+1} up`,
                                            "data-focus-key": `up-${BH}`,
                                            disabled: 0 === BH,
                                            onClick: () => {
                                              bH(BH, -1)
                                            },
                                            children: (0, uH.jsx)(WH, {
                                              name: "chevron-up"
                                            })
                                          }), (0, uH.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${BH+1} down`,
                                            "data-focus-key": `down-${BH}`,
                                            disabled: BH === LH.length - 1,
                                            onClick: () => {
                                              bH(BH, 1)
                                            },
                                            children: (0, uH.jsx)(WH, {
                                              name: "chevron-down"
                                            })
                                          }), (0, uH.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${BH+1}`,
                                            onClick: () => {
                                              OH(BH)
                                            },
                                            children: (0, uH.jsx)(WH, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, BH)
                                    })), 0 === LH.length && (0, uH.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, uH.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: HH => {
                                      "Escape" === HH.key && QH && (HH.stopPropagation(), MH(!1), vH({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, uH.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": QH,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        MH(!QH)
                                      },
                                      children: [(0, uH.jsx)(WH, {
                                        name: "plus"
                                      }), "Add a part", (0, uH.jsx)(WH, {
                                        name: QH ? "chevron-up" : "chevron-down"
                                      })]
                                    }), QH && (0, uH.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: Vr.map((HH => (0, uH.jsx)("li", {
                                        children: (0, uH.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (HH => {
                                              UH([...LH, nB[HH]]), MH(!1), YH(LH.length)
                                            })(HH)
                                          },
                                          children: jB[HH]
                                        })
                                      }, HH)))
                                    })]
                                  })]
                                }), (0, uH.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, uH.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, uH.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": EH,
                                      onClick: () => {
                                        XH(!EH)
                                      },
                                      children: [(0, uH.jsx)(WH, {
                                        name: EH ? "check" : "pencil"
                                      }), EH ? "Done" : "Edit"]
                                    })]
                                  }), EH ? (0, uH.jsxs)(uH.Fragment, {
                                    children: [(0, uH.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: hH,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: HH => {
                                        tH(HH.target.value);
                                        const BH = AL(HH.target.value);
                                        CH(BH.error), BH.parts && rH(BH.parts)
                                      }
                                    }), zH && (0, uH.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: zH
                                    })]
                                  }) : (0, uH.jsx)(VH, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${TH})`
                                  })]
                                })]
                              }), null !== GH && GH < LH.length && (0, uH.jsx)(Tr, {
                                parts: LH,
                                index: GH,
                                fontAwesomeIcons: BH,
                                onChange: HH => {
                                  ((HH, BH) => {
                                    UH(LH.map(((LH, AH) => AH === HH ? BH : LH)))
                                  })(GH, HH)
                                },
                                bq: () => {
                                  OH(GH), YH(null)
                                },
                                onClose: () => {
                                  YH(null), vH({
                                    key: `edit-${GH}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var br = LH(5325),
                            kr = LH(5308),
                            mr = LH(5319),
                            or = LH(5333);
                          const Ir = 40,
                            fr = 800,
                            lr = 150,
                            Kr = 8e3,
                            cr = 2e3;

                          function er(HH, BH) {
                            return 12 * Math.log2(BH / HH)
                          }

                          function qr(HH, BH) {
                            return Math.round(HH * 2 ** (BH / 12) * 10) / 10
                          }

                          function gr(HH) {
                            return `${HH} ms`
                          }

                          function Nr(HH) {
                            return `${HH} st`
                          }
                          const Rr = [{
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

                          function jr(HH) {
                            let {
                              synth: BH,
                              onChange: LH
                            } = HH;
                            const AH = (0, br.k)(BH);
                            return (0, uH.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, uH.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, uH.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, uH.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, uH.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, uH.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, uH.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: br.g.map((HH => (0, uH.jsx)("button", {
                                      type: "button",
                                      className: SH()("DocsVariantChip", {
                                        Active: BH.waveform === HH
                                      }),
                                      "aria-pressed": BH.waveform === HH,
                                      onClick: () => {
                                        LH({
                                          waveform: HH
                                        })
                                      },
                                      children: HH
                                    }, HH)))
                                  })]
                                }), (0, uH.jsx)(yA, {
                                  label: "Pitch",
                                  min: 0,
                                  max: er(Ir, fr),
                                  step: .1,
                                  value: er(Ir, BH.pitchHz),
                                  format: () => `${BH.pitchHz} Hz`,
                                  onChange: HH => {
                                    LH({
                                      pitchHz: qr(Ir, HH)
                                    })
                                  }
                                }), (0, uH.jsx)(yA, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: BH.syllableMs,
                                  format: gr,
                                  onChange: HH => {
                                    LH({
                                      syllableMs: HH
                                    })
                                  }
                                }), (0, uH.jsx)(yA, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: BH.volume,
                                  onChange: HH => {
                                    LH({
                                      volume: HH
                                    })
                                  }
                                })]
                              }), (0, uH.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, uH.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, uH.jsx)(yA, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: BH.durationMs,
                                  format: gr,
                                  onChange: HH => {
                                    LH({
                                      durationMs: HH
                                    })
                                  }
                                }), (0, uH.jsx)(yA, {
                                  label: "Fade in",
                                  min: 0,
                                  max: AH.durationMs,
                                  step: 1,
                                  value: AH.attackMs,
                                  format: gr,
                                  onChange: HH => {
                                    LH({
                                      attackMs: HH
                                    })
                                  }
                                }), (0, uH.jsx)(yA, {
                                  label: "Fade out",
                                  min: 0,
                                  max: AH.durationMs - AH.attackMs,
                                  step: 1,
                                  value: AH.releaseMs,
                                  format: gr,
                                  onChange: HH => {
                                    LH({
                                      releaseMs: HH
                                    })
                                  }
                                }), (0, uH.jsx)(yA, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: BH.glideSemitones,
                                  format: Nr,
                                  onChange: HH => {
                                    LH({
                                      glideSemitones: HH
                                    })
                                  }
                                }), (0, uH.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, uH.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== BH.lowpassHz,
                                    onChange: HH => {
                                      LH({
                                        lowpassHz: HH.target.checked ? cr : null
                                      })
                                    }
                                  }), (0, uH.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== BH.lowpassHz && (0, uH.jsx)(yA, {
                                  label: "Filter",
                                  min: 0,
                                  max: er(lr, Kr),
                                  step: .1,
                                  value: er(lr, BH.lowpassHz),
                                  format: () => `${BH.lowpassHz} Hz`,
                                  onChange: HH => {
                                    LH({
                                      lowpassHz: qr(lr, HH)
                                    })
                                  }
                                })]
                              }), (0, uH.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, uH.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), Rr.map((HH => {
                                  let {
                                    key: AH,
                                    label: rH,
                                    max: SH
                                  } = HH;
                                  return (0, uH.jsx)(yA, {
                                    label: rH,
                                    min: 0,
                                    max: SH,
                                    step: .1,
                                    value: BH.intonation[AH],
                                    format: Nr,
                                    onChange: HH => {
                                      LH({
                                        intonation: {
                                          ...BH.intonation,
                                          [AH]: HH
                                        }
                                      })
                                    }
                                  }, AH)
                                }))]
                              })]
                            })
                          }
                          const nr = Object.keys(br.i),
                            Fr = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function Dr(HH) {
                            var BH;
                            const LH = JSON.stringify((0, br.k)(HH));
                            return null !== (BH = nr.find((HH => JSON.stringify((0, br.k)(br.i[HH])) === LH))) && void 0 !== BH ? BH : null
                          }

                          function wr(HH) {
                            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof HH || null === HH) return JSON.stringify(HH);
                            return `{\n${Object.entries(HH).map((HH=>{let[LH,AH]=HH;return`${BH}    ${LH}: ${wr(AH,`${BH}    `)},`})).join("\n")}\n${BH}}`
                          }

                          function Zr(HH, BH, LH) {
                            const AH = Dr(HH),
                              rH = [`    line: ${JSON.stringify(BH)},`];
                            return LH && rH.push(`    speakerName: ${JSON.stringify(LH)},`), rH.push("    voice,"), `const voice = ${AH?JSON.stringify(AH):wr((0,br.k)(HH))}\n\napi.setClientOption(playerId, "dialogue", {\n${rH.join("\n")}\n})`
                          }
                          const dr = 400,
                            ar = 90;
                          let sr = null;

                          function Jr(HH, BH, LH) {
                            return sr ??= new AudioContext, sr.resume(), (0, or.b)(sr, sr.destination, HH, BH, LH, (() => {}))
                          }

                          function ir() {
                            const [HH, BH] = (0, AH.useState)(br.i.regular), [LH, rH] = (0, AH.useState)(Fr[0]), [hH, tH] = (0, AH.useState)("Innkeeper"), [zH, CH] = (0, AH.useState)(0), EH = EA((HH => HH.volume)), XH = (0, AH.useRef)(null), GH = (0, AH.useRef)(0), YH = (0, AH.useRef)(0), QH = () => {
                              var HH;
                              null === (HH = XH.current) || void 0 === HH || HH.call(XH), XH.current = null
                            };
                            (0, AH.useEffect)((() => () => {
                              var HH;
                              null === (HH = XH.current) || void 0 === HH || HH.call(XH), window.clearTimeout(GH.current)
                            }), []);
                            const MH = (0, AH.useMemo)((() => ({
                                line: LH,
                                speakerName: hH || void 0,
                                voice: HH
                              })), [LH, hH, HH]),
                              xH = (0, AH.useRef)(MH);
                            xH.current = MH;
                            const PH = Dr(HH),
                              TH = HH => {
                                window.clearTimeout(GH.current), QH();
                                const {
                                  plan: BH,
                                  synth: LH
                                } = (0, mr.d)(HH);
                                LH && (XH.current = Jr(LH, BH.blips, EH)), CH((HH => HH + 1))
                              },
                              UH = Zr(HH, LH, hH);
                            return (0, uH.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, uH.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, uH.jsxs)("div", {
                                  children: [(0, uH.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, uH.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, uH.jsx)(vH, {
                                  text: UH,
                                  label: "Copy code"
                                })]
                              }), (0, uH.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [nr.map((HH => (0, uH.jsx)("button", {
                                  type: "button",
                                  className: SH()("DocsVariantChip", {
                                    Active: PH === HH
                                  }),
                                  "aria-pressed": PH === HH,
                                  onClick: () => {
                                    (HH => {
                                      const LH = br.i[HH];
                                      BH(LH), TH({
                                        ...MH,
                                        voice: LH
                                      })
                                    })(HH)
                                  },
                                  children: HH
                                }, HH))), !PH && (0, uH.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, uH.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, uH.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, uH.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, uH.jsx)(kr.e, {
                                      display: MH
                                    }, zH)
                                  }), (0, uH.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: HH => {
                                      HH.preventDefault(), TH(MH)
                                    },
                                    children: [(0, uH.jsx)("input", {
                                      value: LH,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: HH => {
                                        rH(HH.target.value)
                                      }
                                    }), (0, uH.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, uH.jsx)(WH, {
                                        name: "play"
                                      }), (0, uH.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, uH.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: Fr.map((HH => (0, uH.jsx)("button", {
                                      type: "button",
                                      className: SH()("DocsVariantChip", {
                                        Active: LH === HH
                                      }),
                                      onClick: () => {
                                        var BH;
                                        rH(BH = HH), TH({
                                          ...MH,
                                          line: BH
                                        })
                                      },
                                      children: HH
                                    }, HH)))
                                  }), (0, uH.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, uH.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, uH.jsx)("input", {
                                      value: hH,
                                      placeholder: "No name",
                                      onChange: HH => {
                                        tH(HH.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, uH.jsx)(jr, {
                                  synth: HH,
                                  onChange: LH => {
                                    const AH = {
                                      ...HH,
                                      ...LH
                                    };
                                    BH(AH);
                                    const rH = {
                                        ...MH,
                                        voice: AH
                                      },
                                      SH = performance.now();
                                    if (SH - YH.current >= ar) {
                                      YH.current = SH, QH();
                                      const HH = (0, mr.d)(rH).plan.blips[0];
                                      HH && (XH.current = Jr((0, br.k)(AH), [{
                                        ...HH,
                                        atMs: 0
                                      }], EH))
                                    }
                                    window.clearTimeout(GH.current), GH.current = window.setTimeout((() => {
                                      TH(xH.current)
                                    }), dr)
                                  }
                                })]
                              }), (0, uH.jsx)(VH, {
                                code: UH,
                                lang: "ts"
                              })]
                            })
                          }
                          var pr = LH(5347);
                          const yr = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            HS = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            BS = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${HS}`, "g"), pr.j],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, pr.j]
                            ];

                          function LS(HH) {
                            return `${HH.pageId}#${HH.anchor}`
                          }
                          let AS, rS, SS;

                          function hS(HH) {
                            const BH = (0, OH.f)(HH),
                              LH = new Set;
                            for (const [, , AH] of BH.matchAll(OH.c)) {
                              const HH = AH.startsWith("#") ? FH(AH) : null,
                                BH = HH ? LS({
                                  pageId: HH.page.id,
                                  anchor: HH.anchor
                                }) : null;
                              null !== BH && (AS || (AS = new Set(qH.flatMap((HH => oH(HH.layout) ? jH(HH).sections.map((BH => LS({
                                pageId: HH.id,
                                anchor: BH.heading.anchor
                              }))) : [])))), AS).has(BH) && LH.add(BH)
                            }
                            for (const [, , AH] of BH.matchAll(yr)) {
                              const HH = GB(AH);
                              HH && LH.add(LS(HH))
                            }
                            return LH
                          }

                          function tS(HH, BH) {
                            const LH = new Set,
                              AH = function(HH) {
                                return HH.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(HH);
                            for (const [, rH] of AH.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) LH.add(rH);
                            for (const [rH, SH] of BS)
                              for (const [, HH] of(0, pr.c)(AH, rH, SH)) BH.has(HH) && LH.add(HH);
                            return LH
                          }

                          function zS(HH, BH, LH, AH) {
                            const rH = HH.get(BH);
                            rH ? !AH && rH.some((HH => HH.pageId === LH.pageId)) || rH.push(LH) : HH.set(BH, [LH])
                          }
                          const CS = /^[A-Za-z_$][\w$]*$/;

                          function ES(HH) {
                            return CS.test(HH.name) ? HH.name : "options"
                          }

                          function XS(HH, BH) {
                            const LH = HH.params.map(ES).join(", ");
                            return BH ? `${HH.name} = (${LH}) => {\n\t\n}` : `api.${HH.name}(${LH})`
                          }

                          function GS(HH) {
                            let {
                              method: BH,
                              isCallback: LH
                            } = HH;
                            return (0, uH.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, uH.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [LH ? (0, uH.jsxs)(uH.Fragment, {
                                  children: [(0, uH.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: BH.name
                                  }), (0, uH.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, uH.jsxs)(uH.Fragment, {
                                  children: [(0, uH.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, uH.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: BH.name
                                  }), (0, uH.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), BH.params.map(((HH, LH) => (0, uH.jsxs)(AH.Fragment, {
                                  children: [LH > 0 && (0, uH.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, uH.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${BH.name}-${ES(HH)}`,
                                    children: HH.name
                                  })]
                                }, HH.name))), (0, uH.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: LH ? ") => " : ")"
                                }), LH && !BH.returns && (0, uH.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), BH.returns && BH.returns.type && (0, uH.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!LH && (0, uH.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, uH.jsx)(bB, {
                                  type: BH.returns.type
                                })]
                              })]
                            })
                          }

                          function YS(HH) {
                            let {
                              title: BH,
                              references: LH
                            } = HH;
                            const rH = (0, AH.useContext)(YB);
                            return (0, uH.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, uH.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: BH
                              }), LH.map((HH => (0, uH.jsx)(hH.e, {
                                to: wH(rH, NH(HH.pageId), HH.anchor),
                                children: HH.label
                              }, `${HH.pageId}#${HH.anchor}`)))]
                            })
                          }

                          function uS(HH) {
                            var BH, LH;
                            let {
                              pageId: AH,
                              anchor: rH
                            } = HH;
                            const SH = LS({
                                pageId: AH,
                                anchor: rH
                              }),
                              hH = null !== (BH = function() {
                                if (!SS) {
                                  SS = new Map;
                                  const AH = new Set(qH.filter((HH => "callbacks" === HH.layout)).flatMap((HH => jH(HH).sections.map((HH => HH.heading.text)))));
                                  for (const rH of qH)
                                    if ("article" === rH.layout || "snippets" === rH.layout)
                                      for (const SH of (0, OH.v)(jH(rH)))
                                        for (const {
                                            code: hH
                                          }
                                          of(0, OH.j)(SH.blocks))
                                          for (const tH of tS(hH, AH)) {
                                            const AH = XB().get(tH);
                                            if (AH) {
                                              var HH, BH, LH;
                                              const hH = {
                                                pageId: rH.id,
                                                anchor: null !== (HH = null === (BH = SH.heading) || void 0 === BH ? void 0 : BH.anchor) && void 0 !== HH ? HH : "",
                                                label: null !== (LH = rH.navTitle) && void 0 !== LH ? LH : rH.title
                                              };
                                              zS(SS, LS(AH), hH, !1)
                                            }
                                          }
                                }
                                return SS
                              }().get(SH)) && void 0 !== BH ? BH : [],
                              tH = null !== (LH = function() {
                                if (!rS) {
                                  rS = new Map;
                                  const HH = NH("changelog");
                                  for (const BH of jH(HH).sections) {
                                    const LH = new Set(BH.blocks.flatMap((HH => [...hS(HH)])));
                                    for (const AH of LH) {
                                      const LH = {
                                        pageId: HH.id,
                                        anchor: BH.heading.anchor,
                                        label: BH.heading.text
                                      };
                                      zS(rS, AH, LH, !0)
                                    }
                                  }
                                }
                                return rS
                              }().get(SH)) && void 0 !== LH ? LH : [];
                            return 0 === hH.length && 0 === tH.length ? null : (0, uH.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [hH.length > 0 && (0, uH.jsx)(YS, {
                                title: "Used in",
                                references: hH
                              }), tH.length > 0 && (0, uH.jsx)(YS, {
                                title: "Changelog",
                                references: tH
                              })]
                            })
                          }

                          function QS(HH) {
                            let {
                              method: BH,
                              pageId: LH,
                              anchor: AH,
                              isCallback: rH
                            } = HH;
                            const SH = rH ? void 0 : tB().get(BH.name),
                              hH = BH.description.length > 0 || null === SH || void 0 === SH || !SH.description ? BH.description : (0, OH.D)(SH.description);
                            return (0, uH.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, uH.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, uH.jsx)(CL, {
                                  level: 2,
                                  text: BH.name,
                                  anchor: AH,
                                  className: "DocsCardTitle"
                                }), (0, uH.jsx)(vH, {
                                  text: XS(BH, rH),
                                  label: rH ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, uH.jsx)(GS, {
                                method: BH,
                                isCallback: rH
                              }), SH && null !== SH.deprecation && (0, uH.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, uH.jsx)("strong", {
                                  children: "Deprecated"
                                }), SH.deprecation && (0, uH.jsxs)(uH.Fragment, {
                                  children: [": ", (0, uH.jsx)(UB, {
                                    text: (tH = SH.deprecation, (0, pr.o)(tH, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, pr.i)("`\\w"), (HH => {
                                      let [BH] = HH;
                                      return XB().has(BH) ? `\`${BH}\`` : BH
                                    })))
                                  })]
                                })]
                              }), hH.length > 0 && (0, uH.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, uH.jsx)(YL, {
                                  blocks: hH
                                })
                              }), BH.params.length > 0 && (0, uH.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, uH.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, uH.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: BH.params.map((HH => (0, uH.jsxs)("div", {
                                    id: `${BH.name}-${ES(HH)}`,
                                    className: "DocsParam",
                                    children: [(0, uH.jsxs)("dt", {
                                      children: [(0, uH.jsx)("code", {
                                        className: "DocsParamName",
                                        children: HH.name
                                      }), (0, uH.jsx)(bB, {
                                        type: HH.type
                                      })]
                                    }), HH.description && (0, uH.jsx)("dd", {
                                      children: (0, uH.jsx)(UB, {
                                        text: HH.description
                                      })
                                    })]
                                  }, HH.name)))
                                })]
                              }), BH.returns && (BH.returns.type || BH.returns.description.length > 0) && (0, uH.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, uH.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, uH.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [BH.returns.type && (0, uH.jsx)(bB, {
                                    type: BH.returns.type
                                  }), BH.returns.description.length > 0 && (0, uH.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, uH.jsx)(YL, {
                                      blocks: BH.returns.description
                                    })
                                  })]
                                })]
                              }), (0, uH.jsx)(uS, {
                                pageId: LH,
                                anchor: AH
                              })]
                            });
                            var tH
                          }

                          function WS(HH) {
                            var BH;
                            return null !== HH.defaultValue && "undefined" !== HH.defaultValue ? HH.defaultValue : null !== (BH = HH.example) && void 0 !== BH ? BH : "value"
                          }

                          function MS(HH) {
                            let {
                              setting: BH,
                              pageId: LH,
                              anchor: AH,
                              setterSnippet: rH
                            } = HH;
                            const SH = null === BH.defaultValue ? null : MB(BH.defaultValue);
                            return (0, uH.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, uH.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, uH.jsx)(CL, {
                                  level: 2,
                                  text: BH.name,
                                  anchor: AH,
                                  className: "DocsCardTitle"
                                }), (0, uH.jsx)(vH, {
                                  text: rH(BH.name, WS(BH)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, uH.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, uH.jsxs)("div", {
                                  children: [(0, uH.jsx)("dt", {
                                    children: "Type"
                                  }), (0, uH.jsx)("dd", {
                                    children: (0, uH.jsx)(bB, {
                                      type: BH.type
                                    })
                                  })]
                                }), null !== BH.defaultValue && (0, uH.jsxs)("div", {
                                  children: [(0, uH.jsx)("dt", {
                                    children: "Default"
                                  }), (0, uH.jsx)("dd", {
                                    children: (0, uH.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [SH && (0, uH.jsx)(xB, {
                                        colour: SH
                                      }), BH.defaultValue]
                                    })
                                  })]
                                }), null !== BH.example && (0, uH.jsxs)("div", {
                                  children: [(0, uH.jsx)("dt", {
                                    children: "Example"
                                  }), (0, uH.jsx)("dd", {
                                    children: (0, uH.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: BH.example
                                    })
                                  })]
                                })]
                              }), BH.description.length > 0 && (0, uH.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, uH.jsx)(YL, {
                                  blocks: BH.description
                                })
                              }), (0, uH.jsx)(uS, {
                                pageId: LH,
                                anchor: AH
                              })]
                            })
                          }

                          function xS(HH) {
                            let {
                              section: BH
                            } = HH;
                            return (0, uH.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, uH.jsx)(CL, {
                                level: 2,
                                text: BH.heading.text,
                                anchor: BH.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, uH.jsx)("div", {
                                className: "DocsProse",
                                children: (0, uH.jsx)(YL, {
                                  blocks: BH.blocks
                                })
                              })]
                            })
                          }

                          function vS(HH) {
                            let {
                              section: BH
                            } = HH;
                            return (0, uH.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, uH.jsx)(CL, {
                                level: BH.heading.level,
                                text: BH.heading.text,
                                anchor: BH.heading.anchor
                              }), (0, uH.jsx)(YL, {
                                blocks: BH.blocks
                              })]
                            })
                          }
                          const PS = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function TS(HH) {
                            let {
                              page: BH,
                              section: LH
                            } = HH;
                            if ("methods" === BH.layout || "callbacks" === BH.layout) return (0, uH.jsx)(QS, {
                              method: VL(LH),
                              pageId: BH.id,
                              anchor: LH.heading.anchor,
                              isCallback: "callbacks" === BH.layout
                            });
                            if ("settings" === BH.layout) {
                              const HH = function(HH) {
                                const BH = {
                                  name: HH.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const AH of HH.blocks) {
                                  var LH;
                                  if (UL(AH)) continue;
                                  const HH = "paragraph" === AH.kind ? AH.text.match(OL) : null;
                                  if (!HH) {
                                    BH.description.push(AH);
                                    continue
                                  }
                                  const rH = null !== (LH = TL(HH[2])) && void 0 !== LH ? LH : HH[2];
                                  "Type" === HH[1] ? BH.type = rH : "Default" === HH[1] ? BH.defaultValue = rH : "" !== rH && (BH.example = rH)
                                }
                                return BH.type ? BH : null
                              }(LH);
                              if (HH) return (0, uH.jsx)(MS, {
                                setting: HH,
                                pageId: BH.id,
                                anchor: LH.heading.anchor,
                                setterSnippet: BH.setterSnippet
                              })
                            }
                            return "snippets" === BH.layout ? (0, uH.jsx)(xS, {
                              section: LH
                            }) : "changelog" === BH.layout ? (0, uH.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, uH.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, uH.jsx)(CL, {
                                  level: 2,
                                  text: LH.heading.text,
                                  anchor: LH.heading.anchor
                                })
                              }), (0, uH.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, uH.jsx)(YL, {
                                  blocks: bL(LH.blocks)
                                })
                              })]
                            }) : BH.gallery ? (0, uH.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, uH.jsx)(CL, {
                                level: LH.heading.level,
                                text: LH.heading.text,
                                anchor: LH.heading.anchor
                              }), (0, uH.jsx)(kA, {
                                kind: BH.gallery,
                                content: jH(BH),
                                blocks: LH.blocks
                              })]
                            }) : (0, uH.jsx)(vS, {
                              section: LH
                            })
                          }

                          function US(HH) {
                            let {
                              page: BH,
                              onTocChange: LH
                            } = HH;
                            const rH = jH(BH),
                              [SH, hH] = (0, AH.useState)(""),
                              tH = "article" !== BH.layout,
                              zH = WL(BH.gallery) ? BH.gallery : null,
                              CH = null !== zH,
                              EH = SH.trim().toLowerCase(),
                              XH = (0, AH.useRef)(null),
                              GH = (0, AH.useCallback)((HH => {
                                var BH;
                                null === (BH = XH.current) || void 0 === BH || BH.preview(HH)
                              }), []),
                              YH = (0, AH.useMemo)((() => {
                                if (!BH.hasParticlePlayground) return [];
                                const HH = IL(rH.intro).find((HH => "names" === HH.kind && !HH.names.some((HH => null !== RL(HH.name)))));
                                return "names" === (null === HH || void 0 === HH ? void 0 : HH.kind) ? HH.names.map((HH => HH.name)) : []
                              }), [BH, rH]),
                              QH = (0, AH.useMemo)((() => {
                                if (!BH.hasTextPlayground) return [];
                                const HH = rH.sections.flatMap((HH => HH.blocks.flatMap((HH => {
                                  var BH;
                                  return (null !== (BH = oL(HH)) && void 0 !== BH ? BH : []).flatMap((HH => RB(HH.name) ? [HH.name] : []))
                                }))));
                                return [...new Set(HH)]
                              }), [BH, rH]),
                              WH = (0, AH.useMemo)((() => EH ? rH.sections.filter((HH => function(HH, BH) {
                                return !!HH.heading.text.toLowerCase().includes(BH) || HH.blocks.some((HH => (0, OH.f)(HH).toLowerCase().includes(BH)))
                              }(HH, EH))) : rH.sections), [rH, EH]),
                              MH = (0, AH.useMemo)((() => function(HH, BH) {
                                return "article" !== HH.layout ? BH.map((HH => ({
                                  anchor: HH.heading.anchor,
                                  text: HH.heading.text,
                                  level: 2
                                }))) : BH.flatMap((HH => {
                                  const BH = HH.blocks.flatMap((HH => "heading" === HH.kind && 3 === HH.level ? [{
                                    anchor: HH.anchor,
                                    text: HH.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: HH.heading.anchor,
                                    text: HH.heading.text,
                                    level: 2
                                  }, ...BH]
                                }))
                              }(BH, WH)), [BH, WH]);
                            return (0, AH.useEffect)((() => {
                              LH(MH)
                            }), [MH, LH]), (0, uH.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, uH.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, uH.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: rH.title || BH.title
                                }), (0, uH.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: BH.summary
                                }), (0, uH.jsx)(sA, {
                                  page: BH
                                }), tH && (0, uH.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, uH.jsxs)("span", {
                                    children: [(0, uH.jsx)("strong", {
                                      children: rH.sections.length
                                    }), " ", PS[BH.layout]]
                                  })
                                })]
                              }), "" === BH.slug && (0, uH.jsx)(oA, {}), zH && (0, uH.jsx)(KA, {
                                kind: zH
                              }, zH), BH.hasParticlePlayground && (0, uH.jsx)(zr, {
                                ref: XH,
                                textures: YH
                              }), !CH && rH.intro.length > 0 && (0, uH.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: BH.gallery ? (0, uH.jsx)(MA.Provider, {
                                  value: BH.hasParticlePlayground ? GH : null,
                                  children: (0, uH.jsx)(kA, {
                                    kind: BH.gallery,
                                    content: rH,
                                    blocks: rH.intro
                                  })
                                }) : (0, uH.jsx)(YL, {
                                  blocks: bL(rH.intro)
                                })
                              }), BH.hasTextPlayground && (0, uH.jsx)(Or, {
                                fontAwesomeIcons: QH
                              }), BH.hasVoicePlayground && (0, uH.jsx)(ir, {}), BH.childPageIds && (0, uH.jsx)(oA, {
                                cards: BH.childPageIds.map((HH => ({
                                  pageId: HH
                                }))),
                                label: BH.title
                              }), tH && (0, uH.jsx)(vL, {
                                className: "DocsFilterBar",
                                value: SH,
                                placeholder: `Filter ${rH.sections.length} ${PS[BH.layout]}\u2026`,
                                label: `Filter ${PS[BH.layout]}`,
                                onChange: hH,
                                count: EH ? {
                                  visible: WH.length,
                                  total: rH.sections.length
                                } : null
                              }), !CH && (0, uH.jsxs)("div", {
                                className: `DocsSections Layout-${BH.layout}`,
                                children: [WH.map((HH => (0, uH.jsx)(TS, {
                                  page: BH,
                                  section: HH
                                }, HH.heading.anchor))), 0 === WH.length && (0, uH.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", PS[BH.layout], " match \u201c", SH, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const VS = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function OS(HH) {
                            let {
                              entry: BH,
                              isActive: LH,
                              onNavigate: AH,
                              label: rH,
                              children: hH
                            } = HH;
                            return (0, uH.jsx)("a", {
                              href: `#${BH.anchor}`,
                              "aria-label": rH,
                              className: SH()(`Level${BH.level}`, {
                                Active: LH
                              }),
                              "aria-current": LH ? "location" : void 0,
                              onClick: HH => {
                                HH.preventDefault(), AH(BH.anchor)
                              },
                              children: hH
                            })
                          }

                          function bS(HH) {
                            let {
                              toc: BH,
                              activeAnchor: LH,
                              onNavigate: rH
                            } = HH;
                            const hH = Math.max(0, BH.findIndex((HH => HH.anchor === LH))),
                              tH = (0, AH.useRef)(null),
                              zH = (0, AH.useRef)(!1);
                            (0, AH.useEffect)((() => {
                              var HH, LH;
                              const AH = null === (HH = tH.current) || void 0 === HH ? void 0 : HH.closest(".DocsToc"),
                                rH = null === (LH = tH.current) || void 0 === LH ? void 0 : LH.querySelector(".DocsTimelineNotch.Active");
                              if (!AH || !rH) return;
                              let SH = 0;
                              if (hH === BH.length - 1) SH = AH.scrollHeight;
                              else if (hH > 0) {
                                const HH = AH.getBoundingClientRect(),
                                  BH = rH.getBoundingClientRect();
                                SH = AH.scrollTop + BH.top + BH.height / 2 - (HH.top + AH.clientHeight / 2)
                              }
                              AH.scrollTo({
                                top: SH,
                                behavior: zH.current ? "smooth" : "auto"
                              }), zH.current = !0
                            }), [hH, BH.length]);
                            const CH = [];
                            return BH.forEach(((HH, BH) => {
                              var LH, AH, rH;
                              const SH = function(HH) {
                                  const BH = HH.trim().match(VS);
                                  return BH ? {
                                    day: BH[1],
                                    month: `${BH[2]} ${BH[3]}`
                                  } : null
                                }(HH.text),
                                hH = null !== (LH = null === SH || void 0 === SH ? void 0 : SH.month) && void 0 !== LH ? LH : null;
                              null !== hH && (null === (AH = CH.at(-1)) || void 0 === AH ? void 0 : AH.month) === hH || CH.push({
                                month: hH,
                                entries: []
                              }), CH.at(-1).entries.push({
                                entry: HH,
                                day: null !== (rH = null === SH || void 0 === SH ? void 0 : SH.day) && void 0 !== rH ? rH : null,
                                index: BH
                              })
                            })), (0, uH.jsx)("ol", {
                              ref: tH,
                              className: "DocsTimeline",
                              children: CH.map((HH => {
                                let {
                                  month: BH,
                                  entries: LH
                                } = HH;
                                return (0, uH.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [BH && (0, uH.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: BH
                                  }), (0, uH.jsx)("ol", {
                                    children: LH.map((HH => {
                                      let {
                                        entry: BH,
                                        day: LH,
                                        index: AH
                                      } = HH;
                                      return (0, uH.jsx)("li", {
                                        className: SH()("DocsTimelineNotch", {
                                          Passed: AH < hH,
                                          Active: AH === hH
                                        }),
                                        children: (0, uH.jsx)(OS, {
                                          entry: BH,
                                          isActive: AH === hH,
                                          onNavigate: rH,
                                          label: BH.text,
                                          children: (0, uH.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== LH && void 0 !== LH ? LH : BH.text
                                          })
                                        })
                                      }, BH.anchor)
                                    }))
                                  })]
                                }, LH[0].entry.anchor)
                              }))
                            })
                          }

                          function kS(HH) {
                            let {
                              isChangelog: BH,
                              toc: LH,
                              activeAnchor: AH,
                              onNavigate: rH
                            } = HH;
                            return 0 === LH.length ? null : (0, uH.jsxs)(uH.Fragment, {
                              children: [(0, uH.jsx)("div", {
                                className: "DocsTocTitle",
                                children: BH ? "Updates" : "On this page"
                              }), BH ? (0, uH.jsx)(bS, {
                                toc: LH,
                                activeAnchor: AH,
                                onNavigate: rH
                              }) : (0, uH.jsx)("ul", {
                                children: LH.map((HH => (0, uH.jsx)("li", {
                                  children: (0, uH.jsx)(OS, {
                                    entry: HH,
                                    isActive: HH.anchor === AH,
                                    onNavigate: rH,
                                    children: HH.text.replace(/`/g, "")
                                  })
                                }, HH.anchor)))
                              })]
                            })
                          }
                          const mS = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            oS = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            IS = 20,
                            fS = 10,
                            lS = 40,
                            KS = 120;
                          let cS;

                          function eS(HH) {
                            const BH = HH.gallery;
                            if (!BH) return [];
                            if (WL(BH)) return function(HH) {
                              return xL(HH).entries.map((HH => HH.name))
                            }(BH).map((LH => ({
                              page: HH,
                              anchor: lL(BH, LH),
                              title: LH,
                              kind: oS[BH],
                              text: "",
                              listedUnder: HH.title
                            })));
                            const LH = jH(HH);
                            return (0, OH.v)(LH).flatMap((AH => {
                              const rH = AH.heading ? `${HH.title} \u203a ${AH.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : HH.title;
                              return cL(BH, LH, AH.blocks).flatMap((LH => "names" !== LH.kind ? [] : LH.names.map((AH => {
                                const SH = LH.isSongs ? "Song" : oS[BH];
                                return {
                                  page: HH,
                                  anchor: AH.anchor,
                                  title: AH.name,
                                  kind: SH,
                                  text: "",
                                  listedUnder: rH
                                }
                              }))))
                            }))
                          }

                          function qS(HH, BH, LH) {
                            const AH = HH.title.toLowerCase();
                            let rH = 0;
                            if (AH === BH) rH = 100;
                            else if (AH.startsWith(BH)) rH = 80;
                            else if (AH.includes(BH)) rH = 60;
                            else if (LH.every((HH => AH.includes(HH)))) rH = 45;
                            else {
                              if (!HH.text.toLowerCase().includes(BH)) return 0;
                              rH = 20
                            }
                            return rH - Math.min(AH.length / 10, 9) + ("Page" === HH.kind ? 8 : "Method" === HH.kind ? 3 : 0) - (HH.listedUnder ? IS : 0)
                          }

                          function gS(HH, BH) {
                            const LH = HH.toLowerCase().indexOf(BH),
                              AH = Math.max(0, LH - KS / 3);
                            return `${AH>0?"\u2026":""}${HH.slice(AH,AH+KS)}${AH+KS<HH.length?"\u2026":""}`
                          }

                          function NS(HH) {
                            let {
                              text: BH,
                              query: LH
                            } = HH;
                            const AH = LH ? BH.toLowerCase().indexOf(LH) : -1;
                            return -1 === AH ? (0, uH.jsx)(uH.Fragment, {
                              children: BH
                            }) : (0, uH.jsxs)(uH.Fragment, {
                              children: [BH.slice(0, AH), (0, uH.jsx)("mark", {
                                children: BH.slice(AH, AH + LH.length)
                              }), BH.slice(AH + LH.length)]
                            })
                          }

                          function RS(HH) {
                            let {
                              basePath: BH,
                              onClose: LH
                            } = HH;
                            const rH = (0, tH.u)(),
                              [hH, zH] = (0, AH.useState)(""),
                              [CH, EH] = (0, AH.useState)(0),
                              XH = (0, AH.useRef)(null),
                              GH = (0, AH.useRef)(null),
                              YH = hH.trim().toLowerCase(),
                              QH = (0, AH.useMemo)((() => {
                                const HH = (cS || (cS = qH.flatMap((HH => {
                                  const BH = jH(HH);
                                  return [{
                                    page: HH,
                                    anchor: "",
                                    title: HH.title,
                                    kind: "Page",
                                    text: HH.summary
                                  }, ...BH.sections.flatMap((BH => {
                                    const LH = BH.blocks.filter((HH => "paragraph" === HH.kind)).map(OH.f).join(" ").replace(/[`*]/g, ""),
                                      AH = {
                                        page: HH,
                                        anchor: BH.heading.anchor,
                                        title: BH.heading.text.replace(/`/g, ""),
                                        kind: mS[HH.layout],
                                        text: LH
                                      },
                                      rH = BH.blocks.flatMap((BH => "article" === HH.layout && "heading" === BH.kind && 3 === BH.level ? [{
                                        page: HH,
                                        anchor: BH.anchor,
                                        title: BH.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: AH.title
                                      }] : []));
                                    return [AH, ...rH]
                                  })), ...eS(HH)]
                                }))), cS);
                                if (!YH) return HH.filter((HH => "Page" === HH.kind));
                                const BH = YH.split(/\s+/);
                                let LH = 0;
                                return HH.map((HH => ({
                                  entry: HH,
                                  score: qS(HH, YH, BH)
                                }))).filter((HH => HH.score > 0)).sort(((HH, BH) => BH.score - HH.score)).filter((HH => !HH.entry.listedUnder || (LH++, LH <= fS))).slice(0, lS).map((HH => HH.entry))
                              }), [YH]);
                            (0, AH.useEffect)((() => {
                              EH(0)
                            }), [YH]), (0, AH.useEffect)((() => {
                              const HH = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === HH || void 0 === HH || HH.focus()
                              }
                            }), []), (0, AH.useEffect)((() => {
                              var HH, BH;
                              null === (HH = XH.current) || void 0 === HH || null === (BH = HH.querySelector(".Active")) || void 0 === BH || BH.scrollIntoView({
                                block: "nearest"
                              })
                            }), [CH]);
                            const MH = HH => {
                              rH(wH(BH, HH.page, HH.anchor)), LH()
                            };
                            return (0, uH.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: HH => {
                                HH.target === HH.currentTarget && LH()
                              },
                              children: (0, uH.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: HH => {
                                  HH.target !== GH.current && HH.preventDefault()
                                },
                                onKeyDown: HH => {
                                  if ("Escape" === HH.key) LH();
                                  else if ("Tab" === HH.key) {
                                    var BH;
                                    HH.preventDefault(), null === (BH = GH.current) || void 0 === BH || BH.focus()
                                  }
                                },
                                children: [(0, uH.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, uH.jsx)(WH, {
                                    name: "magnifying-glass"
                                  }), (0, uH.jsx)("input", {
                                    ref: GH,
                                    autoFocus: !0,
                                    value: hH,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": QH.length > 0 ? `DocsSearchResult-${CH}` : void 0,
                                    onChange: HH => {
                                      zH(HH.target.value)
                                    },
                                    onKeyDown: HH => {
                                      if ("ArrowDown" === HH.key || "ArrowUp" === HH.key) {
                                        HH.preventDefault();
                                        const BH = "ArrowDown" === HH.key ? 1 : -1;
                                        EH((CH + BH + QH.length) % Math.max(QH.length, 1))
                                      } else "Enter" === HH.key && QH[CH] && MH(QH[CH])
                                    }
                                  }), (0, uH.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, uH.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: XH,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!YH && (0, uH.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), QH.map(((HH, BH) => {
                                    var LH;
                                    return (0, uH.jsxs)("li", {
                                      id: `DocsSearchResult-${BH}`,
                                      role: "option",
                                      "aria-selected": BH === CH,
                                      className: SH()("DocsSearchResult", {
                                        Active: BH === CH
                                      }),
                                      onMouseMove: () => {
                                        EH(BH)
                                      },
                                      onClick: () => {
                                        MH(HH)
                                      },
                                      children: [(0, uH.jsx)(WH, {
                                        name: HH.page.icon
                                      }), (0, uH.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, uH.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, uH.jsx)(NS, {
                                            text: HH.title,
                                            query: YH
                                          })
                                        }), HH.text && (0, uH.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, uH.jsx)(NS, {
                                            text: gS(HH.text, YH),
                                            query: YH
                                          })
                                        })]
                                      }), (0, uH.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === HH.kind ? "Page" : null !== (LH = HH.listedUnder) && void 0 !== LH ? LH : `${HH.kind} \xb7 ${HH.page.title}`
                                      })]
                                    }, `${HH.page.id}#${HH.anchor}`)
                                  })), YH && 0 === QH.length && (0, uH.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", hH, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function jS(HH, BH) {
                            if (BH < 10) return `${HH.toFixed(1)}s`;
                            const LH = Math.floor(HH);
                            return `${Math.floor(LH/60)}:${String(LH%60).padStart(2,"0")}`
                          }

                          function nS() {
                            const HH = EA((HH => HH.track)),
                              BH = EA((HH => HH.volume)),
                              [LH, rH] = (0, AH.useState)(0),
                              hH = (0, AH.useRef)(BA);
                            if ((0, AH.useEffect)((() => {
                                if (!HH) return;
                                if (rH(uA()), "playing" !== HH.status) return;
                                let BH = 0;
                                const LH = () => {
                                  rH(uA()), BH = requestAnimationFrame(LH)
                                };
                                return BH = requestAnimationFrame(LH), () => {
                                  cancelAnimationFrame(BH)
                                }
                              }), [HH]), !HH) return null;
                            const tH = "paused" !== HH.status,
                              zH = Math.min(LH, HH.duration);
                            return (0, uH.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, uH.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, uH.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": tH ? `Pause ${HH.name}` : `Play ${HH.name}`,
                                  onClick: YA,
                                  children: (0, uH.jsx)(WH, {
                                    name: tH ? "pause" : "play"
                                  })
                                }), (0, uH.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, uH.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, uH.jsx)("code", {
                                      children: HH.name
                                    }), (0, uH.jsx)("span", {
                                      children: HH.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, uH.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, uH.jsx)("span", {
                                      children: jS(zH, HH.duration)
                                    }), (0, uH.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: HH.duration || 1,
                                      step: .01,
                                      value: zH,
                                      disabled: 0 === HH.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${jS(zH,HH.duration)} of ${jS(HH.duration,HH.duration)}`,
                                      onChange: HH => {
                                        const BH = Number(HH.target.value);
                                        ! function(HH) {
                                          var BH;
                                          hA = HH, null === (BH = rA) || void 0 === BH || BH.seek(HH)
                                        }(BH), rH(BH)
                                      }
                                    }), (0, uH.jsx)("span", {
                                      children: HH.duration > 0 ? jS(HH.duration, HH.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, uH.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, uH.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === BH ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === BH ? QA(hH.current) : (hH.current = BH, QA(0))
                                    },
                                    children: (0, uH.jsx)(WH, {
                                      name: "volume",
                                      className: SH()({
                                        Muted: 0 === BH
                                      })
                                    })
                                  }), (0, uH.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: BH,
                                    "aria-label": "Volume",
                                    onChange: HH => {
                                      QA(Number(HH.target.value))
                                    }
                                  })]
                                }), (0, uH.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var BH;
                                    null === (BH = document.querySelector(`[data-docs-track="${CSS.escape(LA(HH.name,HH.isSong))}"]`)) || void 0 === BH || BH.focus(), WA()
                                  },
                                  children: (0, uH.jsx)(WH, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var FS = LH(30);
                          const DS = "docsTheme",
                            wS = window.matchMedia("(prefers-color-scheme: light)");

                          function ZS(HH) {
                            let {
                              theme: BH,
                              onChange: LH
                            } = HH;
                            const AH = "dark" === BH ? "light" : "dark";
                            return (0, uH.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${AH} theme`,
                              title: `Switch to ${AH} theme`,
                              onClick: () => {
                                LH(AH)
                              },
                              children: (0, uH.jsx)(WH, {
                                name: "dark" === BH ? "moon" : "sun"
                              })
                            })
                          }
                          const dS = "https://github.com/Bloxdy/code-api",
                            aS = "https://discord.gg/playbloxd",
                            sS = 180,
                            JS = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function iS(HH) {
                            let {
                              basePath: BH,
                              activePageId: LH,
                              onNavigate: AH
                            } = HH;
                            return (0, uH.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: gH.map((HH => (0, uH.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, uH.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: HH.title
                                }), HH.pageIds.map((HH => {
                                  var rH;
                                  const tH = NH(HH);
                                  return (0, uH.jsxs)(hH.e, {
                                    to: wH(BH, tH),
                                    className: SH()("DocsNavLink", {
                                      Active: tH.id === LH
                                    }),
                                    "aria-current": tH.id === LH ? "page" : void 0,
                                    onClick: AH,
                                    children: [(0, uH.jsx)(WH, {
                                      name: tH.icon
                                    }), (0, uH.jsx)("span", {
                                      children: null !== (rH = tH.navTitle) && void 0 !== rH ? rH : tH.title
                                    })]
                                  }, tH.id)
                                }))]
                              }, HH.title)))
                            })
                          }

                          function pS(HH) {
                            let {
                              basePath: BH,
                              pageId: LH
                            } = HH;
                            const AH = gH.flatMap((HH => HH.pageIds)),
                              rH = AH.indexOf(LH),
                              SH = rH > 0 ? NH(AH[rH - 1]) : null,
                              tH = rH < AH.length - 1 ? NH(AH[rH + 1]) : null;
                            return (0, uH.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [SH ? (0, uH.jsxs)(hH.e, {
                                className: "DocsPagerLink Previous",
                                to: wH(BH, SH),
                                children: [(0, uH.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, uH.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: SH.title
                                })]
                              }) : (0, uH.jsx)("span", {}), tH && (0, uH.jsxs)(hH.e, {
                                className: "DocsPagerLink Next",
                                to: wH(BH, tH),
                                children: [(0, uH.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, uH.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: tH.title
                                })]
                              })]
                            })
                          }

                          function yS(HH) {
                            let {
                              basePath: BH,
                              embedded: LH = !1
                            } = HH;
                            const {
                              pageSlug: rH = ""
                            } = (0, tH.A)(), CH = (0, tH.s)(), EH = (0, tH.u)(), XH = (GH = rH, qH.find((HH => HH.slug === GH)));
                            var GH;
                            const [YH, QH] = function() {
                              const [HH, BH] = (0, AH.useState)((() => {
                                const HH = FS.e.getItem(DS);
                                return "dark" === HH || "light" === HH ? HH : null
                              })), [LH, rH] = (0, AH.useState)(wS.matches ? "light" : "dark");
                              return (0, AH.useEffect)((() => {
                                const HH = () => {
                                  rH(wS.matches ? "light" : "dark")
                                };
                                return wS.addEventListener("change", HH), () => {
                                  wS.removeEventListener("change", HH)
                                }
                              }), []), [null !== HH && void 0 !== HH ? HH : LH, HH => {
                                FS.e.setItem(DS, HH), BH(HH)
                              }]
                            }(), [MH, xH] = (0, AH.useState)(null), [vH, PH] = (0, AH.useState)(!1), [TH, UH] = (0, AH.useState)(!1), [VH, bH] = (0, AH.useState)([]), kH = function(HH, BH) {
                              const [LH, rH] = (0, AH.useState)("");
                              return (0, AH.useEffect)((() => {
                                if (!BH) return;
                                let LH = 0;
                                const AH = () => {
                                    var AH, SH;
                                    LH = 0;
                                    const hH = BH.getBoundingClientRect().top + sS;
                                    let tH = null !== (AH = null === (SH = HH[0]) || void 0 === SH ? void 0 : SH.anchor) && void 0 !== AH ? AH : "";
                                    for (const BH of HH) {
                                      const HH = document.getElementById(BH.anchor);
                                      HH && HH.getBoundingClientRect().top <= hH && (tH = BH.anchor)
                                    }
                                    BH.scrollTop + BH.clientHeight >= BH.scrollHeight - 2 && BH.scrollTop > 0 && HH.length > 0 && (tH = HH[HH.length - 1].anchor), rH(tH)
                                  },
                                  SH = () => {
                                    LH || (LH = requestAnimationFrame(AH))
                                  };
                                return AH(), BH.addEventListener("scroll", SH, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(LH), BH.removeEventListener("scroll", SH)
                                }
                              }), [HH, BH]), LH
                            }(VH, MH), mH = "" === rH && CH.hash ? function(HH) {
                              const BH = (0, OH.p)(HH);
                              if (nH(NH("welcome"), BH)) return null;
                              const LH = Object.hasOwn(DH, BH) ? DH[BH] : null;
                              if (LH) return {
                                page: NH(LH.pageId),
                                anchor: LH.anchor
                              };
                              const AH = NH("readme");
                              return nH(AH, BH) ? {
                                page: AH,
                                anchor: BH
                              } : FH(`#${BH}`)
                            }(CH.hash) : null;
                            (0, AH.useEffect)((() => (zH.c.set({
                              musicOnFromPage: !1
                            }), () => {
                              zH.c.set({
                                musicOnFromPage: !0
                              }), WA()
                            })), []), (0, AH.useEffect)((() => {
                              const HH = HH => {
                                const BH = HH.target;
                                if (BH.closest(".DocsTextDialog")) return;
                                const LH = BH.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(BH.tagName);
                                "k" === HH.key && (HH.metaKey || HH.ctrlKey) || "/" === HH.key && !LH ? (HH.preventDefault(), UH(!0)) : "Escape" === HH.key && PH(!1)
                              };
                              return window.addEventListener("keydown", HH), () => {
                                window.removeEventListener("keydown", HH)
                              }
                            }), []);
                            const oH = (0, AH.useRef)(null);
                            (0, AH.useLayoutEffect)((() => {
                              var HH, BH;
                              if (!MH) return;
                              const LH = oH.current === CH.pathname;
                              oH.current = CH.pathname;
                              const AH = (0, OH.p)(CH.hash),
                                rH = AH ? document.getElementById(AH) : null;
                              if (null === (HH = MH.querySelector(".DocsTargeted")) || void 0 === HH || HH.classList.remove("DocsTargeted"), null === rH || void 0 === rH || null === (BH = rH.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === BH || BH.classList.add("DocsTargeted"), rH) {
                                var SH;
                                const HH = rH.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (SH = rH.closest(".DocsChangelogEntry")) && void 0 !== SH ? SH : rH).scrollIntoView({
                                  block: HH ? "center" : "start",
                                  behavior: LH ? "smooth" : "auto"
                                })
                              } else LH || MH.scrollTo({
                                top: 0
                              })
                            }), [MH, CH.pathname, CH.hash, CH.key]);
                            const IH = (0, AH.useCallback)((() => {
                                PH(!1)
                              }), []),
                              fH = (0, AH.useCallback)((HH => {
                                EH({
                                  hash: HH
                                })
                              }), [EH]);
                            if (mH) return (0, uH.jsx)(tH.c, {
                              replace: !0,
                              to: wH(BH, mH.page, mH.anchor)
                            });
                            if (!XH) return (0, uH.jsx)(tH.c, {
                              replace: !0,
                              to: BH
                            });
                            const lH = LH ? "div" : "main";
                            return (0, uH.jsx)(YB.Provider, {
                              value: BH,
                              children: (0, uH.jsx)(uB.Provider, {
                                value: MH,
                                children: (0, uH.jsxs)("div", {
                                  ref: xH,
                                  className: SH()("DocsSite", {
                                    Embedded: LH,
                                    NavOpen: vH
                                  }),
                                  "data-theme": YH,
                                  children: [(0, uH.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, uH.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": vH ? "Close menu" : "Open menu",
                                      "aria-expanded": vH,
                                      onClick: () => {
                                        PH(!vH)
                                      },
                                      children: (0, uH.jsx)(WH, {
                                        name: vH ? "cross" : "menu"
                                      })
                                    }), (0, uH.jsxs)(hH.e, {
                                      to: BH,
                                      className: "DocsBrand",
                                      children: [(0, uH.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, uH.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, uH.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, uH.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        UH(!0)
                                      },
                                      children: [(0, uH.jsx)(WH, {
                                        name: "magnifying-glass"
                                      }), (0, uH.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, uH.jsxs)("kbd", {
                                        children: [JS ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, uH.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, uH.jsxs)("a", {
                                        href: aS,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, uH.jsx)(WH, {
                                          name: "discord"
                                        }), (0, uH.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, uH.jsxs)("a", {
                                        href: dS,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, uH.jsx)(WH, {
                                          name: "external-link"
                                        }), (0, uH.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !LH && (0, uH.jsxs)(hH.e, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, uH.jsx)(WH, {
                                          name: "play"
                                        }), (0, uH.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, uH.jsx)(ZS, {
                                        theme: YH,
                                        onChange: QH
                                      })]
                                    })]
                                  }), (0, uH.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, uH.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, uH.jsx)(iS, {
                                        basePath: BH,
                                        activePageId: XH.id,
                                        onNavigate: IH
                                      })
                                    }), (0, uH.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: IH
                                    }), (0, uH.jsxs)(lH, {
                                      className: "DocsMain",
                                      children: [(0, uH.jsx)(US, {
                                        page: XH,
                                        onTocChange: bH
                                      }, XH.id), (0, uH.jsx)(pS, {
                                        basePath: BH,
                                        pageId: XH.id
                                      })]
                                    }), (0, uH.jsx)("aside", {
                                      className: SH()("DocsToc", {
                                        Timeline: "changelog" === XH.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, uH.jsx)(kS, {
                                        isChangelog: "changelog" === XH.layout,
                                        toc: VH,
                                        activeAnchor: kH,
                                        onNavigate: fH
                                      })
                                    })]
                                  }), (0, uH.jsx)(nS, {}), TH && (0, uH.jsx)(RS, {
                                    basePath: BH,
                                    onClose: () => {
                                      UH(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 5218: (HH, BH, LH) => {
                          LH.d(BH, {
                            D: () => GH,
                            c: () => AH,
                            e: () => hH,
                            f: () => WH,
                            j: () => QH,
                            l: () => tH,
                            p: () => rH,
                            r: () => SH,
                            v: () => uH,
                            z: () => YH
                          });
                          const AH = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function rH(HH) {
                            try {
                              return decodeURIComponent(HH.slice(1))
                            } catch {
                              return HH.slice(1)
                            }
                          }

                          function SH(HH) {
                            return HH.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const hH = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${AH.source}`, "g");

                          function tH(HH, BH) {
                            return 2 === HH.length ? BH.replace(/^ (.*) $/, "$1") : BH
                          }

                          function zH(HH) {
                            return "" === HH.trim()
                          }

                          function CH(HH) {
                            const BH = [];
                            for (const LH of HH.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) BH.length > 0 && BH[BH.length - 1].endsWith("\\") ? BH[BH.length - 1] += `|${LH}` : BH.push(LH);
                            return BH.map((HH => HH.trim().replaceAll("\\|", "|")))
                          }
                          const EH = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function XH(HH) {
                            const BH = [],
                              LH = [{
                                indent: -1,
                                items: BH
                              }];
                            let AH = null;
                            for (const rH of HH) {
                              const HH = rH.match(EH);
                              if (!HH) {
                                AH && (AH.text += ` ${rH.trim()}`);
                                continue
                              }
                              const BH = HH[1].replace(/\t/g, "  ").length;
                              for (; BH <= LH[LH.length - 1].indent;) LH.pop();
                              AH = {
                                text: HH[3].trim(),
                                children: []
                              }, LH[LH.length - 1].items.push(AH), LH.push({
                                indent: BH,
                                items: AH.children
                              })
                            }
                            return BH
                          }

                          function GH(HH) {
                            const BH = HH.replace(/\r\n/g, "\n").split("\n"),
                              LH = [];
                            let AH = 0;
                            for (; AH < BH.length;) {
                              const HH = BH[AH];
                              if (zH(HH)) {
                                AH++;
                                continue
                              }
                              const rH = HH.match(/^\s*```\s*(\w*)\s*$/);
                              if (rH) {
                                const HH = [];
                                for (AH++; AH < BH.length && !/^\s*```\s*$/.test(BH[AH]);) HH.push(BH[AH]), AH++;
                                AH++, LH.push({
                                  kind: "code",
                                  lang: rH[1] || "text",
                                  code: HH.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const hH = HH.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (hH) {
                                const HH = hH[2].trim();
                                LH.push({
                                  kind: "heading",
                                  level: hH[1].length,
                                  text: HH,
                                  anchor: SH(HH)
                                }), AH++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(HH)) {
                                LH.push({
                                  kind: "rule"
                                }), AH++;
                                continue
                              }
                              if (HH.trim().startsWith("|") && AH + 1 < BH.length && /^\s*\|[\s:|-]+\|\s*$/.test(BH[AH + 1])) {
                                const rH = CH(HH),
                                  SH = [];
                                for (AH += 2; AH < BH.length && BH[AH].trim().startsWith("|");) SH.push(CH(BH[AH])), AH++;
                                LH.push({
                                  kind: "table",
                                  header: rH,
                                  rows: SH
                                });
                                continue
                              }
                              if (HH.startsWith(">")) {
                                const HH = [];
                                for (; AH < BH.length && BH[AH].startsWith(">");) HH.push(BH[AH].replace(/^>\s?/, "")), AH++;
                                LH.push({
                                  kind: "quote",
                                  blocks: GH(HH.join("\n"))
                                });
                                continue
                              }
                              if (EH.test(HH)) {
                                const rH = [],
                                  SH = /^\s*\d+\./.test(HH);
                                for (; AH < BH.length && !zH(BH[AH]) && (EH.test(BH[AH]) || /^\s+\S/.test(BH[AH]));) rH.push(BH[AH]), AH++;
                                LH.push({
                                  kind: "list",
                                  ordered: SH,
                                  items: XH(rH)
                                });
                                continue
                              }
                              const tH = [];
                              for (; AH < BH.length && !zH(BH[AH]) && !/^\s*```/.test(BH[AH]) && !/^#{1,6}\s/.test(BH[AH]) && !BH[AH].startsWith(">") && !EH.test(BH[AH]) && (!BH[AH].trim().startsWith("|") || 0 !== tH.length);) tH.push(BH[AH].trim()), AH++;
                              0 === tH.length && (tH.push(BH[AH].trim()), AH++), LH.push({
                                kind: "paragraph",
                                text: tH.join(" ")
                              })
                            }
                            return LH
                          }

                          function YH(HH) {
                            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const LH = GH(HH);
                            let AH = "";
                            const rH = [],
                              SH = [],
                              hH = new Map;
                            for (const CH of LH) {
                              if ("heading" === CH.kind) {
                                var tH;
                                const HH = (null !== (tH = hH.get(CH.anchor)) && void 0 !== tH ? tH : 0) + 1;
                                hH.set(CH.anchor, HH), HH > 1 && (CH.anchor = `${CH.anchor}-${HH}`)
                              }
                              if ("heading" === CH.kind && 1 === CH.level && !AH) {
                                AH = CH.text;
                                continue
                              }
                              if ("heading" === CH.kind && CH.level <= BH) {
                                SH.push({
                                  heading: CH,
                                  blocks: []
                                });
                                continue
                              }
                              const HH = SH.at(-1);
                              HH ? HH.blocks.push(CH) : rH.push(CH)
                            }
                            const zH = HH => {
                              for (;
                                "rule" === (null === (BH = HH.at(-1)) || void 0 === BH ? void 0 : BH.kind);) {
                                var BH;
                                HH.pop()
                              }
                            };
                            zH(rH);
                            for (const CH of SH) zH(CH.blocks);
                            return {
                              title: AH,
                              intro: rH,
                              sections: SH
                            }
                          }

                          function uH(HH) {
                            return [{
                              heading: null,
                              blocks: HH.intro
                            }, ...HH.sections.map((HH => ({
                              heading: HH.heading,
                              blocks: HH.blocks
                            })))]
                          }

                          function QH(HH) {
                            return HH.flatMap((HH => "code" === HH.kind ? [HH] : "quote" === HH.kind ? QH(HH.blocks) : []))
                          }

                          function WH(HH) {
                            switch (HH.kind) {
                              case "heading":
                              case "paragraph":
                                return HH.text;
                              case "code":
                                return HH.code;
                              case "table":
                                return [HH.header, ...HH.rows].map((HH => HH.join(" "))).join(" ");
                              case "list": {
                                const BH = HH => HH.map((HH => `${HH.text} ${BH(HH.children)}`)).join(" ");
                                return BH(HH.items)
                              }
                              case "quote":
                                return HH.blocks.map(WH).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 5314: (HH, BH, LH) => {
                          LH.d(BH, {
                            b: () => tH
                          });
                          var AH = LH(45),
                            rH = LH(304),
                            SH = LH(1986),
                            hH = LH(1225);

                          function tH(HH) {
                            let {
                              text: BH
                            } = HH;
                            const LH = [];
                            let tH = "";
                            return (0, rH.tc)(BH).forEach(((HH, BH) => {
                              if ("string" === typeof HH || !(0, SH.f)(HH.icon)) return void(tH += "string" === typeof HH ? HH : HH.icon);
                              const rH = Math.max(0, tH.trimEnd().search(/\S{1,12}$/));
                              LH.push((0, hH.jsxs)(AH.Fragment, {
                                children: [tH.slice(0, rH), (0, hH.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [tH.slice(rH), (0, hH.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": HH.icon,
                                    children: (0, hH.jsx)(SH.e, {
                                      itemName: HH.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, BH)), tH = ""
                            })), LH.push(tH), (0, hH.jsx)(hH.Fragment, {
                              children: LH
                            })
                          }
                        }, 5248: (HH, BH, LH) => {
                          LH.d(BH, {
                            f: () => xH,
                            b: () => MH
                          });
                          var AH = LH(45),
                            rH = LH(1450),
                            SH = LH(1967),
                            hH = LH(5250),
                            tH = LH(1225);
                          const zH = (0, AH.memo)((function(HH) {
                            let {
                              initialParameters: BH
                            } = HH;
                            const LH = (0, AH.useRef)(null),
                              rH = (0, AH.useRef)(null),
                              zH = (0, AH.useRef)(0),
                              CH = (0, AH.useRef)(null),
                              EH = BH.description,
                              XH = BH.dH,
                              {
                                scale: GH,
                                rotation: YH
                              } = null !== BH && void 0 !== BH ? BH : {},
                              uH = (0, hH.f)();
                            return (0, AH.useEffect)((() => {
                              const HH = uH.onFrame((() => {
                                const HH = uH.getState();
                                if (!HH.isActive || !LH.current || !rH.current) return;
                                const BH = HH.state;
                                if (LH.current.value = BH.progress, BH.clickCount > zH.current) {
                                  zH.current = BH.clickCount;
                                  const HH = rH.current;
                                  HH.classList.add("pulse"), CH.current = setTimeout((() => {
                                    HH.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(CH.current), HH()
                              }
                            }), [uH]), (0, tH.jsx)(tH.Fragment, {
                              children: (0, tH.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== GH && {
                                    "--scale": GH
                                  },
                                  ...null !== YH && {
                                    "--rotation": `${YH}deg`
                                  }
                                },
                                children: [(0, tH.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: LH
                                }), (0, tH.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: rH,
                                  children: (0, tH.jsx)(SH.b, {
                                    text: [{
                                      icon: XH
                                    }]
                                  })
                                }), (0, tH.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, tH.jsx)(SH.b, {
                                    text: EH
                                  })
                                })]
                              })
                            })
                          }));
                          var CH = LH(1038),
                            EH = LH.n(CH);
                          const XH = 2 * Math.PI * 90,
                            GH = (0, AH.memo)((function(HH) {
                              let {
                                initialParameters: BH
                              } = HH;
                              const LH = (0, AH.useRef)(null),
                                rH = (0, AH.useRef)(null),
                                zH = (0, AH.useRef)(null),
                                CH = BH.label,
                                GH = BH.icon,
                                YH = BH.JH,
                                {
                                  scale: uH,
                                  rotation: QH,
                                  iH: WH
                                } = null !== BH && void 0 !== BH ? BH : {},
                                MH = (0, hH.f)();
                              return (0, AH.useEffect)((() => {
                                const HH = MH.onFrame((() => {
                                  var HH, BH;
                                  const AH = MH.getState();
                                  if (!AH.isActive || !rH.current) return;
                                  const SH = AH.state,
                                    hH = null !== (HH = SH.timeRemaining) && void 0 !== HH ? HH : 0,
                                    tH = null !== (BH = SH.sH) && void 0 !== BH ? BH : 1,
                                    CH = XH * (1 - hH / tH);
                                  rH.current.style.strokeDashoffset = `${CH}`, LH.current && (LH.current.style.opacity = hH > 0 ? "1" : "0"), zH.current && YH && (zH.current.textContent = `${(hH/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  HH()
                                }
                              }), [MH, YH]), (0, tH.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: LH,
                                style: {
                                  ...null !== uH && {
                                    "--scale": uH
                                  },
                                  ...null !== QH && {
                                    "--rotation": `${QH}deg`
                                  }
                                },
                                children: [(0, tH.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, tH.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, tH.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, tH.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: XH,
                                      ref: rH
                                    })]
                                  }), (0, tH.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, tH.jsx)(SH.b, {
                                      text: [{
                                        icon: GH
                                      }],
                                      className: EH()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: WH
                                      })
                                    })
                                  })]
                                }), (0, tH.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, tH.jsx)(SH.b, {
                                    text: CH,
                                    className: "QTETimedClickLabelText"
                                  }), YH && (0, tH.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: zH
                                  })]
                                })]
                              })
                            })),
                            YH = (0, AH.memo)((function(HH) {
                              let {
                                initialParameters: BH
                              } = HH;
                              const LH = (0, AH.useRef)(null),
                                rH = (0, AH.useRef)(null),
                                zH = (0, AH.useRef)(null),
                                CH = (0, AH.useRef)(!1),
                                EH = BH.description,
                                XH = null === BH || void 0 === BH ? void 0 : BH.icon,
                                GH = (0, hH.f)();
                              return (0, AH.useEffect)((() => {
                                const HH = GH.onFrame((() => {
                                  const HH = GH.getState();
                                  if (!HH.isActive) return;
                                  const BH = HH.state;
                                  if (LH.current) {
                                    const HH = 100 * (BH.catchZonePosition - BH.yH / 2);
                                    LH.current.style.left = `${HH}%`, LH.current.style.width = 100 * BH.yH + "%", BH.isCatching !== CH.current && (CH.current = BH.isCatching, BH.isCatching ? LH.current.classList.add("catching") : LH.current.classList.remove("catching"))
                                  }
                                  rH.current && (rH.current.style.left = 100 * BH.moverPosition + "%"), zH.current && (zH.current.value = BH.progress)
                                }));
                                return () => {
                                  HH()
                                }
                              }), [GH]), (0, tH.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, tH.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, tH.jsx)(SH.b, {
                                    text: EH
                                  })
                                }), (0, tH.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: zH
                                }), (0, tH.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, tH.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: LH
                                  }), (0, tH.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: rH,
                                    children: (0, tH.jsx)("span", {
                                      children: XH && (0, tH.jsx)(SH.b, {
                                        text: [{
                                          icon: XH,
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
                          var uH = LH(619);
                          const QH = (0, AH.memo)((function(HH) {
                              let {
                                initialParameters: BH
                              } = HH;
                              const LH = (0, AH.useRef)(null),
                                rH = BH.label,
                                zH = BH.hB,
                                {
                                  icon: CH,
                                  scale: EH,
                                  rotation: XH
                                } = null !== BH && void 0 !== BH ? BH : {},
                                GH = 100 * (.5 - zH / 2),
                                YH = 100 * zH,
                                QH = (0, hH.f)();
                              return (0, AH.useEffect)((() => {
                                const HH = QH.onFrame((() => {
                                  const HH = QH.getState();
                                  if (!HH.isActive || !LH.current) return;
                                  const BH = HH.state;
                                  LH.current.style.left = 100 * BH.markerPosition + "%"
                                }));
                                return () => {
                                  HH()
                                }
                              }), [QH]), (0, tH.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, uH.M)(EH) && {
                                    "--scale": EH
                                  },
                                  ...!(0, uH.M)(XH) && {
                                    "--rotation": `${XH}deg`
                                  }
                                },
                                children: [CH && (0, tH.jsx)(SH.b, {
                                  text: [{
                                    icon: CH
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, tH.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, tH.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${GH}%`,
                                      width: `${YH}%`
                                    }
                                  }), (0, tH.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: LH
                                  })]
                                }), (0, tH.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, tH.jsx)(SH.b, {
                                    text: rH
                                  })
                                })]
                              })
                            })),
                            WH = (0, AH.memo)((function(HH) {
                              let {
                                initialParameters: BH
                              } = HH;
                              const LH = (0, AH.useRef)(null),
                                [rH, zH] = (0, AH.useState)((() => new Array(BH.zB).fill("pending"))),
                                [CH, EH] = (0, AH.useState)((() => {
                                  const HH = BH.XB;
                                  return (0, uH.M)(HH) || HH <= 0 ? [] : new Array(HH).fill("pending")
                                })),
                                XH = BH.label,
                                {
                                  icon: GH
                                } = BH,
                                YH = (0, AH.useRef)(0),
                                QH = (0, AH.useRef)(0),
                                WH = (0, AH.useRef)([]),
                                MH = (0, hH.f)();
                              return (0, AH.useEffect)((() => {
                                const HH = MH.onFrame((() => {
                                  const HH = MH.getState();
                                  if (!HH.isActive || !LH.current) return;
                                  const BH = HH.state,
                                    AH = 30 + 60 * BH.outerCircleProgress;
                                  if (LH.current.setAttribute("r", String(AH)), !0 === BH.lastClickResult && BH.successes > YH.current) {
                                    LH.current.classList.remove("QTERhythmClickOuterCircle--miss"), LH.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const HH = setTimeout((() => {
                                      var HH;
                                      null === (HH = LH.current) || void 0 === HH || HH.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    WH.current.push(HH)
                                  } else if (!1 === BH.lastClickResult && BH.misses > QH.current) {
                                    LH.current.classList.remove("QTERhythmClickOuterCircle--hit"), LH.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const HH = setTimeout((() => {
                                      var HH;
                                      null === (HH = LH.current) || void 0 === HH || HH.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    WH.current.push(HH)
                                  }
                                  BH.successes === YH.current && BH.misses === QH.current || (YH.current = BH.successes, QH.current = BH.misses, zH((HH => {
                                    const LH = [...HH];
                                    for (let AH = 0; AH < BH.zB; AH++) LH[AH] = AH < BH.successes ? "success" : "pending";
                                    return LH
                                  })), EH((HH => {
                                    if (0 === HH.length) return HH;
                                    const LH = [...HH];
                                    for (let AH = 0; AH < LH.length; AH++) LH[AH] = AH < BH.misses ? "miss" : "pending";
                                    return LH
                                  })))
                                }));
                                return () => {
                                  HH();
                                  for (const HH of WH.current) clearTimeout(HH);
                                  WH.current = []
                                }
                              }), [MH]), (0, tH.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, tH.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: rH.map(((HH, BH) => (0, tH.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === HH ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, BH)))
                                }), (0, tH.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, tH.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, tH.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, tH.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: LH
                                    })]
                                  }), GH && (0, tH.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, tH.jsx)(SH.b, {
                                      text: [{
                                        icon: GH
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), CH.length > 0 && (0, tH.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: CH.map(((HH, BH) => (0, tH.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === HH ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, BH)))
                                }), (0, tH.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, tH.jsx)(SH.b, {
                                    text: XH
                                  })
                                })]
                              })
                            }));

                          function MH(HH) {
                            let {
                              qte: BH
                            } = HH;
                            switch (BH.type) {
                              case "progressBar":
                                return (0, tH.jsx)(zH, {
                                  initialParameters: BH.parameters
                                });
                              case "timedClick":
                                return (0, tH.jsx)(GH, {
                                  initialParameters: BH.parameters
                                });
                              case "gravityBar":
                                return (0, tH.jsx)(YH, {
                                  initialParameters: BH.parameters
                                });
                              case "precisionBar":
                                return (0, tH.jsx)(QH, {
                                  initialParameters: BH.parameters
                                });
                              case "rhythmClick":
                                return (0, tH.jsx)(WH, {
                                  initialParameters: BH.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const xH = (0, AH.memo)((function() {
                            const [HH, BH] = (0, AH.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, rH.d)("qteStateUpdated", (HH => {
                              BH(HH)
                            })), HH.isActive && HH.type ? (0, tH.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, tH.jsx)(MH, {
                                qte: HH
                              })
                            }) : null
                          }))
                        }, 5250: (HH, BH, LH) => {
                          LH.d(BH, {
                            e: () => tH,
                            f: () => zH
                          });
                          var AH = LH(45),
                            rH = LH(1253),
                            SH = LH(5253);
                          const hH = {
                              getState: () => SH.d.getCurrentState(),
                              onFrame: rH.x
                            },
                            tH = (0, AH.createContext)(hH);

                          function zH() {
                            return (0, AH.useContext)(tH)
                          }
                        }, 5319: (HH, BH, LH) => {
                          LH.d(BH, {
                            b: () => cH,
                            d: () => KH
                          });
                          var AH = LH(5325),
                            rH = LH(304);
                          const SH = 120,
                            hH = 260,
                            tH = 1.15,
                            zH = 1.2,
                            CH = 2,
                            EH = 1.08,
                            XH = .8,
                            GH = .95,
                            YH = 8,
                            uH = "[\"')\\]\u300d\u300f\uff09]*",
                            QH = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${uH}$`),
                            WH = new RegExp(`[?\uff1f]${uH}$`),
                            MH = new RegExp(`[!\uff01]${uH}$`),
                            xH = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            vH = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            PH = new RegExp(`[${vH}]`),
                            TH = new RegExp(`[${vH}]|[^${vH}]+`, "g"),
                            UH = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function VH(HH) {
                            let BH = 2166136261;
                            for (let LH = 0; LH < HH.length; LH++) BH ^= HH.charCodeAt(LH), BH = Math.imul(BH, 16777619);
                            return (BH >>> 0) / 4294967295 * 2 - 1
                          }

                          function OH(HH) {
                            var BH;
                            if (PH.test(HH)) return 1;
                            const LH = HH.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              AH = LH.replace(/[^0-9]/g, "");
                            if (AH.length > 0 && !/\p{L}/u.test(LH)) return Math.min(AH.length, 4);
                            const rH = null !== (BH = LH.match(UH)) && void 0 !== BH ? BH : [];
                            if (0 === rH.length) {
                              var SH, hH;
                              const HH = null !== (SH = null === (hH = LH.match(/\p{L}/gu)) || void 0 === hH ? void 0 : hH.length) && void 0 !== SH ? SH : 0;
                              return 0 === HH ? 0 : Math.min(Math.max(1, Math.round(HH / 2.5)), YH)
                            }
                            const tH = LH.replace(/[^\p{L}]/gu, ""),
                              zH = rH.length > 1 && "e" === rH.at(-1) && tH.endsWith("e") && !tH.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(HH.replace(/[^\p{L}]/gu, ""));
                            return Math.min(rH.length - (zH ? 1 : 0), YH)
                          }

                          function bH(HH) {
                            return HH.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function kH(HH) {
                            const BH = HH.replace(/[^\p{L}]/gu, "");
                            return BH.length >= 2 && BH === BH.toUpperCase() && BH !== BH.toLowerCase()
                          }

                          function mH(HH, BH) {
                            var LH;
                            const YH = BH && (0, AH.k)(BH),
                              uH = null !== (LH = null === YH || void 0 === YH ? void 0 : YH.syllableMs) && void 0 !== LH ? LH : AH.e,
                              vH = function(HH) {
                                const BH = [];
                                for (const AH of (0, rH.tc)(HH))
                                  if ("string" === typeof AH)
                                    for (const HH of AH.split(/(\s+)/)) {
                                      if ("" === HH) continue;
                                      if (/^\s+$/.test(HH)) {
                                        BH.push({
                                          kind: "space",
                                          text: HH
                                        });
                                        continue
                                      }
                                      if (!PH.test(HH)) {
                                        BH.push({
                                          kind: "word",
                                          text: HH,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let AH = !0;
                                      for (const rH of null !== (LH = HH.match(TH)) && void 0 !== LH ? LH : []) {
                                        var LH;
                                        const HH = BH.at(-1);
                                        AH || "word" !== (null === HH || void 0 === HH ? void 0 : HH.kind) || PH.test(rH) || /[\p{L}\p{N}]/u.test(rH) ? (AH || BH.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), BH.push({
                                          kind: "word",
                                          text: rH,
                                          delayMs: 0
                                        }), AH = !1) : HH.text += rH
                                      }
                                    } else BH.push({
                                      kind: "icon",
                                      text: AH.icon,
                                      delayMs: 0
                                    });
                                return BH
                              }(HH),
                              UH = [];
                            let mH = [];
                            for (const AH of vH) "space" !== AH.kind && (mH.push(AH), QH.test(AH.text) && (UH.push(mH), mH = []));
                            UH.push(mH);
                            const oH = [];
                            let IH = 0;
                            for (const AH of UH) {
                              var fH, lH;
                              const HH = null !== (fH = null === (lH = AH.at(-1)) || void 0 === lH ? void 0 : lH.text) && void 0 !== fH ? fH : "",
                                BH = WH.test(HH),
                                LH = MH.test(HH),
                                rH = AH.map((HH => "word" === HH.kind ? OH(HH.text) : 1)),
                                vH = rH.findLastIndex((HH => HH > 0));
                              for (const [WH, MH] of AH.entries()) {
                                const HH = "word" === MH.kind,
                                  AH = rH[WH];
                                MH.delayMs = IH;
                                for (let rH = 0; YH && rH < AH; rH++) {
                                  const {
                                    intonation: SH
                                  } = YH;
                                  let hH = vH > 0 ? -SH.declineSemitones * (WH / vH) : 0;
                                  hH += VH(`${bH(MH.text)}|${rH}`) * SH.variationSemitones;
                                  const QH = Math.min(1, SH.variationSemitones);
                                  let xH = YH.glideSemitones,
                                    PH = 1;
                                  LH && (hH += SH.exclaimLiftSemitones, PH *= tH), BH && WH === vH && (hH += SH.questionRiseSemitones * (AH > 1 ? .5 + .5 * rH / (AH - 1) : 1), rH === AH - 1 && (xH = Math.abs(xH) + SH.questionRiseSemitones / 2)), HH && kH(MH.text) && (hH += CH * QH, PH *= zH), AH > 1 && 0 === rH && (hH += XH * QH, PH *= EH), oH.push({
                                    atMs: IH + rH * uH,
                                    semitones: hH,
                                    glideSemitones: xH,
                                    durationMs: rH < AH - 1 ? Math.min(YH.durationMs, uH * GH) : YH.durationMs,
                                    level: PH
                                  })
                                }
                                IH += AH * uH + (QH.test(MH.text) ? hH : xH.test(MH.text) ? SH : 0)
                              }
                            }
                            return {
                              pieces: vH.map((HH => "space" === HH.kind ? HH : "icon" === HH.kind ? {
                                kind: "icon",
                                icon: HH.text,
                                delayMs: HH.delayMs
                              } : {
                                kind: "word",
                                text: HH.text,
                                delayMs: HH.delayMs
                              })),
                              blips: oH
                            }
                          }
                          var oH = LH(1123),
                            IH = LH(1194),
                            fH = LH(2003);

                          function lH(HH) {
                            if ("string" === typeof HH) return HH;
                            const BH = IH.g.get().getCurrentLanguageCode();
                            return (0, oH.r)(BH, HH.translationKey, (0, oH.q)(HH.params, fH.c.shown))
                          }

                          function KH(HH) {
                            const BH = void 0 === HH.voice ? null : (0, AH.l)(HH.voice),
                              LH = BH && (0, AH.k)(BH);
                            return {
                              plan: mH(lH(HH.line), LH),
                              synth: LH
                            }
                          }

                          function cH(HH) {
                            const BH = [];
                            let LH = [];
                            for (const [rH, SH] of HH.entries()) {
                              var AH;
                              "space" === SH.kind && (" " !== SH.text || "icon" !== (null === (AH = HH[rH + 1]) || void 0 === AH ? void 0 : AH.kind)) ? (LH.length > 0 && BH.push(LH), BH.push([SH]), LH = []) : LH.push(SH)
                            }
                            return LH.length > 0 && BH.push(LH), BH
                          }
                        }, 5333: (HH, BH, LH) => {
                          LH.d(BH, {
                            b: () => EH,
                            f: () => XH
                          });
                          var AH = LH(5335),
                            rH = LH(15);
                          const SH = .25,
                            hH = .85,
                            tH = .02,
                            zH = .01;

                          function CH(HH, BH, LH, AH, rH, SH, tH) {
                            const {
                              waveform: zH,
                              pitchHz: CH,
                              attackMs: EH,
                              releaseMs: XH,
                              lowpassHz: GH
                            } = LH, YH = rH + AH.durationMs / 1e3, uH = CH * 2 ** (AH.semitones / 12), QH = HH.createOscillator();
                            QH.type = zH, QH.frequency.setValueAtTime(uH, rH), QH.frequency.exponentialRampToValueAtTime(uH * 2 ** (AH.glideSemitones / 12), YH);
                            const WH = rH + Math.min(EH, AH.durationMs) / 1e3,
                              MH = HH.createGain();
                            MH.gain.setValueAtTime(0, rH), MH.gain.linearRampToValueAtTime(SH, WH), MH.gain.linearRampToValueAtTime(SH * hH, Math.max(WH, YH - XH / 1e3)), MH.gain.linearRampToValueAtTime(0, YH);
                            const xH = [QH];
                            if (null !== GH) {
                              const BH = HH.createBiquadFilter();
                              BH.type = "lowpass", BH.frequency.value = GH, xH.push(BH)
                            }
                            xH.push(MH, BH);
                            for (let hH = 1; hH < xH.length; hH++) xH[hH - 1].connect(xH[hH]);
                            return QH.onended = () => {
                              for (const HH of xH.slice(0, -1)) HH.disconnect();
                              tH()
                            }, QH.start(rH), QH.stop(YH), QH
                          }

                          function EH(HH, BH, LH, AH, rH, hH) {
                            if (0 === AH.length) return hH(), () => {};
                            const EH = SH * LH.volume * rH,
                              XH = HH.createGain();
                            XH.connect(BH);
                            const GH = HH.currentTime + tH,
                              YH = new Set;
                            for (const SH of AH) {
                              const BH = CH(HH, XH, LH, SH, GH + SH.atMs / 1e3, EH * SH.level, (() => {
                                YH.delete(BH), 0 === YH.size && (XH.disconnect(), hH())
                              }));
                              YH.add(BH)
                            }
                            return () => {
                              const BH = HH.currentTime;
                              XH.gain.setTargetAtTime(0, BH, zH);
                              for (const HH of YH) try {
                                HH.stop(BH + 5 * zH)
                              } catch {}
                            }
                          }

                          function XH(HH, BH) {
                            var LH;
                            const SH = AH.Howler.ctx,
                              hH = AH.Howler.masterGain;
                            if (!SH || !hH || !rH.c.get("soundOnFromAd")) return () => {};
                            const tH = AH.Howler;
                            return null === (LH = tH._autoResume) || void 0 === LH || LH.call(tH), EH(SH, hH, HH, BH, rH.c.get("soundVolume"), (() => {
                              var HH;
                              null === (HH = tH._autoSuspend) || void 0 === HH || HH.call(tH)
                            }))
                          }
                        }, 5302: (HH, BH, LH) => {
                          LH.d(BH, {
                            e: () => tH,
                            h: () => rH,
                            l: () => zH,
                            o: () => hH,
                            p: () => SH
                          });
                          var AH = LH(5296);
                          const rH = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            SH = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            hH = `${AH.l} lists every page of the Bloxd Code API docs.`;

                          function tH(HH, BH) {
                            return `${HH.url}${encodeURIComponent(BH.toWellFormed())}`
                          }

                          function zH(HH) {
                            const BH = tH(rH, HH);
                            return BH.length <= 3e4 ? {
                              url: BH,
                              sendsPrompt: !0
                            } : {
                              url: new URL(rH.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 5335: (HH, BH, LH) => {
                          LH.r(BH), LH.d(BH, {
                            Howl: () => rH.Howl,
                            Howler: () => rH.Howler,
                            musicOutput: () => WH,
                            readyAudioContext: () => MH
                          });
                          var AH, rH = LH(5343),
                            SH = LH(3811),
                            hH = LH(5067);
                          const tH = rH.Howler;

                          function zH() {
                            var HH, BH;
                            if (tH.ctx || !tH.usingWebAudio || "undefined" === typeof AudioContext || !(0, hH.i)()) return;
                            const LH = navigator.audioSession;
                            let AH;
                            "auto" === (null === LH || void 0 === LH ? void 0 : LH.type) && (LH.type = "ambient");
                            try {
                              AH = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const rH = AH.createGain();
                            rH.gain.setValueAtTime(tH._muted ? 0 : null !== (HH = tH._volume) && void 0 !== HH ? HH : 1, AH.currentTime), rH.connect(AH.destination), tH.ctx = AH, tH.masterGain = rH, null === (BH = tH._setup) || void 0 === BH || BH.call(tH)
                          }
                          tH._mobileUnloaded = !0;
                          const CH = tH.volume.bind(rH.Howler);
                          tH.volume = function() {
                            return zH(), CH(...arguments)
                          };
                          const EH = tH.mute.bind(rH.Howler);
                          tH.mute = HH => (zH(), EH(HH));
                          const XH = rH.Howl.prototype,
                            GH = XH.init;

                          function YH() {
                            for (; tH._html5AudioPool.length < tH.html5PoolSize;) {
                              const HH = new Audio;
                              HH._unlocked = !0, tH._releaseHtml5Audio(HH)
                            }
                            for (const BH of tH._howls)
                              if (!BH._webAudio)
                                for (const LH of BH._getSoundIds()) {
                                  var HH;
                                  const AH = null === (HH = BH._soundById(LH)) || void 0 === HH ? void 0 : HH._node;
                                  AH && !AH._unlocked && (AH._unlocked = !0, AH.load())
                                }
                          }
                          XH.init = function(HH) {
                            return zH(), GH.call(this, HH)
                          }, (0, hH.i)() && (tH._unlockAudio = () => {
                            const HH = tH.ctx;
                            if (tH._audioUnlocked || !HH) return;
                            tH.autoUnlock = !1;
                            const BH = HH.createBuffer(1, 1, 22050);
                            tH._scratchBuffer = BH;
                            const LH = new AbortController;
                            let AH = "afterPaint";
                            const rH = () => {
                                var AH;
                                if (tH._audioUnlocked) return;
                                null === (AH = tH._autoResume) || void 0 === AH || AH.call(tH);
                                const rH = HH.createBufferSource();
                                rH.buffer = BH, rH.connect(HH.destination), rH.start(0), HH.resume().catch((() => {})), rH.onended = () => {
                                  rH.disconnect(0), tH._audioUnlocked = !0, LH.abort();
                                  for (const HH of tH._howls) HH._emit("unlock")
                                }
                              },
                              zH = () => {
                                YH(), rH()
                              },
                              CH = BH => {
                                if (YH(), "inTap" === AH) {
                                  if ("running" === HH.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), rH()
                                } else "afterPaint" === AH && (AH = "queued", (0, SH.c)(BH.timeStamp, (() => {
                                  AH = "inTap", rH()
                                })))
                              };
                            for (const SH of ["touchstart", "touchend"]) document.addEventListener(SH, zH, {
                              capture: !0,
                              signal: LH.signal
                            });
                            for (const SH of hH.d) document.addEventListener(SH, CH, {
                              capture: !0,
                              signal: LH.signal
                            })
                          });
                          let uH = 0;
                          const QH = null === (AH = tH._autoSuspend) || void 0 === AH ? void 0 : AH.bind(rH.Howler);

                          function WH() {
                            MH();
                            const {
                              ctx: HH,
                              masterGain: BH
                            } = tH;
                            return HH && BH ? {
                              ctx: HH,
                              destination: BH,
                              holdAwake: HH => {
                                var BH, LH;
                                (uH += HH ? 1 : -1, HH) ? null === (BH = tH._autoResume) || void 0 === BH || BH.call(tH): null === (LH = tH._autoSuspend) || void 0 === LH || LH.call(tH)
                              },
                              wake: () => {
                                var BH;
                                "running" !== HH.state && (null === (BH = tH._autoResume) || void 0 === BH || BH.call(tH), HH.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function MH() {
                            var HH;
                            (tH.volume(), tH.ctx && tH.autoUnlock) && (null === (HH = tH._unlockAudio) || void 0 === HH || HH.call(tH))
                          }
                          QH && (tH._autoSuspend = () => uH > 0 ? rH.Howler : QH())
                        }, 5347: (HH, BH, LH) => {
                          function AH(HH) {
                            return {
                              notAfter: HH
                            }
                          }
                          LH.d(BH, {
                            b: () => zH,
                            c: () => CH,
                            g: () => tH,
                            i: () => AH,
                            j: () => rH,
                            k: () => SH,
                            n: () => hH,
                            o: () => EH,
                            s: () => XH
                          });
                          const rH = AH("\\w$."),
                            SH = AH("\\w.,");

                          function hH(HH) {
                            return BH => zH(BH, HH)
                          }

                          function tH(HH) {
                            return BH => !HH.test(BH.input.slice(0, BH.index))
                          }

                          function zH(HH, BH) {
                            return HH.index > 0 && new RegExp(`[${BH}]`).test(HH.input[HH.index - 1])
                          }

                          function CH(HH, BH, LH) {
                            return function(HH) {
                              return void 0 !== HH && "function" !== typeof HH
                            }(LH) ? function(HH, BH, LH) {
                              const AH = BH.flags.replace(/[gy]/g, ""),
                                rH = new RegExp(`[^${LH}](?:${BH.source})`, `${AH}g`),
                                SH = [],
                                hH = LH => {
                                  const AH = LH.index + LH[0].length;
                                  return ("" === LH[0] ? GH(HH, BH, AH) : AH) - 1
                                },
                                tH = new RegExp(`(?:${BH.source})`, `${AH}y`).exec(HH);
                              if (tH) {
                                if (SH.push(tH), !BH.global) return SH;
                                rH.lastIndex = hH(tH)
                              }
                              for (let zH = rH.exec(HH); zH; zH = rH.exec(HH)) {
                                const LH = GH(HH, BH, zH.index) - zH.index;
                                if (zH[0] = zH[0].slice(LH), zH.index += LH, SH.push(zH), !BH.global) break;
                                rH.lastIndex = hH(zH)
                              }
                              return SH
                            }(HH, BH, LH.notAfter) : function(HH, BH, LH) {
                              const AH = new RegExp(BH.source, `${BH.flags.replace(/[gy]/g,"")}g`),
                                rH = [];
                              for (let SH = AH.exec(HH); SH; SH = AH.exec(HH))
                                if (!LH || LH(SH)) {
                                  if (rH.push(SH), !BH.global) break;
                                  "" === SH[0] && (AH.lastIndex = GH(HH, BH, AH.lastIndex))
                                } else AH.lastIndex = GH(HH, BH, SH.index);
                              return rH
                            }(HH, BH, LH)
                          }

                          function EH(HH, BH, LH, AH) {
                            let rH = "",
                              SH = 0;
                            for (const hH of CH(HH, BH, LH)) rH += HH.slice(SH, hH.index) + AH(hH), SH = hH.index + hH[0].length;
                            return rH + HH.slice(SH)
                          }

                          function XH(HH, BH, LH) {
                            const AH = [];
                            let rH = 0;
                            for (const SH of CH(HH, BH, LH)) AH.push(HH.slice(rH, SH.index)), rH = SH.index + SH[0].length;
                            return [...AH, HH.slice(rH)]
                          }

                          function GH(HH, BH, LH) {
                            var AH;
                            return LH + (BH.unicode && (null !== (AH = HH.codePointAt(LH)) && void 0 !== AH ? AH : 0) > 65535 ? 2 : 1)
                          }
                        }, 5296: (HH, BH, LH) => {
                          LH.d(BH, {
                            A: () => YH,
                            c: () => rH,
                            g: () => zH,
                            h: () => SH,
                            l: () => hH,
                            n: () => tH,
                            p: () => WH,
                            r: () => EH,
                            u: () => XH,
                            x: () => QH
                          });
                          var AH = LH(1603);
                          const rH = 24e3,
                            SH = "/docs/llms.txt",
                            hH = `${AH.c}${SH}`,
                            tH = "/llms.txt",
                            zH = "/docs/llms-full.txt";

                          function CH(HH) {
                            return HH || "index"
                          }

                          function EH(HH) {
                            return `/docs/${CH(HH)}.md`
                          }

                          function XH(HH, BH) {
                            return `/docs/${CH(HH)}/${BH+1}.md`
                          }
                          const GH = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function YH(HH) {
                            const BH = GH.exec(HH);
                            return null === BH ? null : {
                              name: BH[1],
                              part: void 0 === BH[2] ? null : Number(BH[2])
                            }
                          }
                          const uH = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function QH(HH) {
                            const BH = uH.exec(HH);
                            if (null === BH) return null;
                            const [, LH = "", AH] = BH;
                            return void 0 === AH ? EH(LH) : XH(LH, Number(AH) - 1)
                          }

                          function WH(HH) {
                            return `/docsHtml/${CH(HH)}.html`
                          }
                        }, 5325: (HH, BH, LH) => {
                          LH.d(BH, {
                            e: () => rH,
                            g: () => AH,
                            i: () => SH,
                            k: () => zH,
                            l: () => hH
                          });
                          const AH = ["sine", "triangle", "square", "sawtooth"],
                            rH = 55,
                            SH = {
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

                          function hH(HH) {
                            return "string" !== typeof HH ? HH : Object.hasOwn(SH, HH) ? SH[HH] : null
                          }

                          function tH(HH, BH, LH) {
                            return Math.min(LH, Math.max(BH, HH))
                          }

                          function zH(HH) {
                            const BH = tH(HH.durationMs, 10, 500),
                              LH = tH(HH.attackMs, 0, BH),
                              {
                                intonation: rH
                              } = HH;
                            return {
                              waveform: AH.includes(HH.waveform) ? HH.waveform : "sine",
                              pitchHz: tH(HH.pitchHz, 20, 4e3),
                              glideSemitones: tH(HH.glideSemitones, -24, 24),
                              durationMs: BH,
                              attackMs: LH,
                              releaseMs: tH(HH.releaseMs, 0, BH - LH),
                              lowpassHz: null === HH.lowpassHz ? null : tH(HH.lowpassHz, 20, 2e4),
                              volume: tH(HH.volume, 0, 2),
                              intonation: {
                                variationSemitones: tH(rH.variationSemitones, 0, 6),
                                declineSemitones: tH(rH.declineSemitones, 0, 12),
                                questionRiseSemitones: tH(rH.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: tH(rH.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: tH(HH.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const HH in modules) Object.freeze(modules[HH]);