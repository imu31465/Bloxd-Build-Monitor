export const id = 69;
export const ids = [69, 85];
export const modules = {
    4225: (JJ, cJ, ZJ) => {
      ZJ.d(cJ, {
        c: () => fJ,
        d: () => xJ
      });
      var FJ = ZJ(926),
        UJ = ZJ.n(FJ),
        eJ = ZJ(47),
        XJ = ZJ(1086),
        AJ = ZJ(4233),
        qJ = ZJ(1675),
        jJ = ZJ(2175),
        YJ = ZJ(4242),
        hJ = ZJ(990);
      const DJ = new WeakMap;
      let sJ = 0;

      function nJ(JJ) {
        let cJ = DJ.get(JJ);
        return void 0 === cJ && (cJ = sJ++, DJ.set(JJ, cJ)), cJ
      }

      function GJ(JJ) {
        let {
          piece: cJ
        } = JJ;
        return "space" === cJ.kind ? (0, hJ.jsx)(hJ.Fragment, {
          children: cJ.text
        }) : (0, hJ.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${cJ.delayMs}ms`
          },
          children: (0, hJ.jsx)(AJ.c, {
            text: "icon" === cJ.kind ? `[[${cJ.icon}]]` : cJ.text
          })
        })
      }

      function fJ(JJ) {
        let {
          display: cJ
        } = JJ;
        const {
          selectedLanguage: ZJ
        } = (0, XJ.F)(), FJ = (0, eJ.useMemo)((() => (0, YJ.d)((0, YJ.f)(cJ).plan.pieces)), [cJ, ZJ.code]);
        return (0, hJ.jsxs)("div", {
          className: UJ()("Dialogue", {
            DialogueAnimateIn: !1 !== cJ.animateIn
          }),
          children: [cJ.speakerName && (0, hJ.jsx)(qJ.d, {
            text: cJ.speakerName,
            className: "DialogueSpeaker"
          }), (0, hJ.jsx)("p", {
            className: "DialogueLine",
            children: FJ.map(((JJ, cJ) => 1 === JJ.length && "space" === JJ[0].kind ? JJ[0].text : (0, hJ.jsx)("span", {
              className: "DialogueGlue",
              children: JJ.map(((JJ, cJ) => (0, hJ.jsx)(GJ, {
                piece: JJ
              }, cJ)))
            }, cJ)))
          })]
        })
      }
      const xJ = (0, eJ.memo)((function() {
        const JJ = (0, jJ.f)("dialogue");
        return (0, hJ.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: JJ && (0, hJ.jsx)(fJ, {
            display: JJ
          }, nJ(JJ))
        })
      }))
    },
    4108: (JJ, cJ, ZJ) => {
        ZJ.r(cJ), ZJ.d(cJ, {
          default: () => oe
        });
        var FJ = ZJ(47),
          UJ = ZJ(926),
          eJ = ZJ.n(UJ),
          XJ = ZJ(1415),
          AJ = ZJ(1421),
          qJ = ZJ(13),
          jJ = ZJ(60),
          YJ = ZJ(4111),
          hJ = ZJ(4122),
          DJ = ZJ(4128),
          sJ = ZJ(3824),
          nJ = ZJ(990);
        const GJ = "/textures/docs/icons";

        function fJ(JJ) {
          let {
            name: cJ,
            isTinted: ZJ,
            className: FJ,
            style: UJ
          } = JJ;
          const XJ = `${GJ}/${cJ}.png`;
          return ZJ ? (0, nJ.jsxs)("span", {
            className: eJ()("DocsPixelIcon", "Tinted", FJ),
            "aria-hidden": "true",
            style: UJ,
            children: [(0, nJ.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${XJ}")`,
                WebkitMaskImage: `url("${XJ}")`
              }
            }), (0, nJ.jsx)("img", {
              src: XJ,
              alt: ""
            })]
          }) : (0, nJ.jsx)("img", {
            className: eJ()("DocsPixelIcon", FJ),
            src: XJ,
            alt: "",
            "aria-hidden": "true",
            style: UJ
          })
        }
        const xJ = 1500;

        function rJ() {
          const [JJ, cJ] = (0, FJ.useState)(null);
          (0, FJ.useEffect)((() => {
            if (null === JJ) return;
            const ZJ = setTimeout((() => {
              cJ(null)
            }), xJ);
            return () => {
              clearTimeout(ZJ)
            }
          }), [JJ]);
          return [JJ, JJ => {
            (0, sJ.c)(JJ).then((() => {
              cJ({
                text: JJ,
                failed: !1
              })
            }), (ZJ => {
              console.error("Could not copy to the clipboard", ZJ), cJ({
                text: JJ,
                failed: !0
              })
            }))
          }]
        }

        function vJ(JJ) {
          let {
            text: cJ,
            label: ZJ,
            className: FJ
          } = JJ;
          const [UJ, XJ] = rJ(), AJ = !1 === (null === UJ || void 0 === UJ ? void 0 : UJ.failed);
          return (0, nJ.jsxs)("button", {
            type: "button",
            className: eJ()("DocsCopyButton", FJ, {
              Copied: AJ
            }),
            title: `Copy ${cJ.length>40?"to clipboard":cJ}`,
            "aria-label": ZJ ? void 0 : `Copy ${cJ}`,
            onClick: JJ => {
              JJ.stopPropagation(), XJ(cJ)
            },
            children: [(0, nJ.jsx)(fJ, {
              name: AJ ? "check" : "copy"
            }), ZJ && (0, nJ.jsx)("span", {
              children: AJ ? "Copied" : null !== UJ && void 0 !== UJ && UJ.failed ? "Copy failed" : ZJ
            })]
          })
        }
        YJ.e.registerLanguage("javascript", hJ.e), YJ.e.registerLanguage("typescript", DJ.d);
        const mJ = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          QJ = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          EJ = 24;

        function VJ(JJ) {
          let {
            code: cJ,
            lang: ZJ,
            compact: UJ = !1
          } = JJ;
          const XJ = (0, FJ.useMemo)((() => function(JJ, cJ) {
              const ZJ = mJ[cJ];
              return ZJ ? YJ.e.highlight(JJ, {
                language: ZJ
              }).value : JJ.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(cJ, ZJ)), [cJ, ZJ]),
            AJ = cJ.split("\n").length,
            qJ = !UJ && AJ > EJ + 6,
            [jJ, hJ] = (0, FJ.useState)(!1),
            DJ = mJ[ZJ];
          return (0, nJ.jsxs)("div", {
            className: eJ()("DocsCodeBlock", {
              Compact: UJ,
              Collapsed: qJ && !jJ
            }),
            children: [!UJ && (0, nJ.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, nJ.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: DJ ? QJ[DJ] : "Text"
              }), (0, nJ.jsx)(vJ, {
                text: cJ,
                label: "Copy"
              })]
            }), (0, nJ.jsx)("pre", {
              children: (0, nJ.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: XJ
                }
              })
            }), qJ && (0, nJ.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": jJ,
              onClick: () => {
                hJ(!jJ)
              },
              children: [(0, nJ.jsx)(fJ, {
                name: jJ ? "chevron-up" : "chevron-down"
              }), jJ ? "Show less" : `Show all ${AJ} lines`]
            })]
          })
        }
        var KJ = ZJ(4133);
        var yJ = ZJ(4139);
        const SJ = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function IJ(JJ) {
          const cJ = new Map;
          let ZJ, FJ = [],
            UJ = !1;
          const eJ = () => {
            ZJ && cJ.set(ZJ.name, ZJ.lines.join("\n").trimEnd())
          };
          for (const XJ of JJ.split("\n")) {
            const JJ = XJ.match(SJ);
            UJ || XJ.startsWith("/*") ? (UJ || (eJ(), ZJ = void 0), FJ.push(XJ), UJ = !XJ.includes("*/")) : JJ ? (eJ(), ZJ = {
              name: JJ[1],
              lines: [...FJ, XJ]
            }, FJ = []) : ZJ && (XJ.startsWith(" ") || XJ.startsWith("\t") || /^[}\])|]/.test(XJ)) ? ZJ.lines.push(XJ) : ZJ && "" !== XJ.trim() && (eJ(), ZJ = void 0)
          }
          return eJ(), cJ
        }

        function MJ(JJ) {
          return "methods" === JJ || "callbacks" === JJ || "settings" === JJ
        }
        const bJ = {
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
              setterSnippet: (JJ, cJ) => `api.setClientOption(playerId, "${JJ}", ${cJ})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (JJ, cJ) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${JJ}", ${cJ})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (JJ, cJ) => `api.setMobSetting(mobId, "${JJ}", ${cJ})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (JJ, cJ) => `api.setVehicleSetting(vehicleId, "${JJ}", ${cJ})`
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
          wJ = {
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

        function WJ(JJ) {
          return JJ.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function gJ(JJ) {
          let cJ = !1;
          return JJ.split("\n").map((JJ => (JJ.startsWith("```") && (cJ = !cJ), !cJ && /^#{3,} /.test(JJ) ? JJ.slice(1) : JJ))).join("\n")
        }

        function HJ(JJ) {
          return "readme" === JJ ? "getting-started" : WJ(JJ)
        }
        const PJ = "## Glossary of Referenced Types";
        const kJ = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...yJ.c.flatMap((JJ => {
            const cJ = {
              id: JJ.id,
              slug: HJ(JJ.id),
              title: JJ.title,
              markdown: JJ.content,
              ...bJ[JJ.id]
            };
            if ("readme" === JJ.id) return function(JJ) {
              const cJ = JJ.markdown.indexOf(PJ),
                ZJ = JJ.markdown.indexOf("\n```", cJ),
                FJ = JJ.markdown.indexOf("\n```", ZJ + 1);
              if (-1 === cJ || -1 === ZJ || -1 === FJ) throw new Error(`Getting started has no "${PJ}" section with a code block`);
              const UJ = JJ.markdown.slice(cJ + 31, ZJ).trim(),
                eJ = [...IJ(JJ.markdown.slice(JJ.markdown.indexOf("\n", ZJ + 1) + 1, FJ))].map((JJ => {
                  let [cJ, ZJ] = JJ;
                  return `## ${cJ}\n\n\`\`\`ts\n${ZJ}\n\`\`\`\n`
                })),
                XJ = JJ.markdown.slice(JJ.markdown.indexOf("\n", FJ + 1) + 1);
              return [{
                ...JJ,
                markdown: `${JJ.markdown.slice(0,cJ)}${XJ}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${UJ}\n\n${eJ.join("\n")}`
              }]
            }(cJ);
            if ("howTo" === JJ.id) {
              const {
                parent: JJ,
                guides: ZJ
              } = function(JJ) {
                const [cJ, ...ZJ] = JJ.markdown.split(/^(?=## )/m), FJ = [cJ], UJ = [];
                for (const XJ of ZJ) {
                  var eJ;
                  const cJ = XJ.indexOf("\n"),
                    ZJ = XJ.slice(3, cJ).trim(),
                    AJ = XJ.slice(cJ + 1);
                  if (!AJ.includes("```")) {
                    FJ.push(XJ);
                    continue
                  }
                  const qJ = null !== (eJ = wJ[ZJ]) && void 0 !== eJ ? eJ : {
                    icon: "lightbulb",
                    summary: `How to use ${ZJ.toLowerCase()} in World Code.`
                  };
                  UJ.push({
                    id: `${JJ.id}${ZJ.split(/[^A-Za-z0-9]+/).map((JJ=>JJ.charAt(0).toUpperCase()+JJ.slice(1))).join("")}`,
                    slug: `${JJ.slug}-${WJ(ZJ)}`,
                    title: ZJ,
                    layout: "article",
                    sourceAnchor: (0, KJ.v)(ZJ),
                    markdown: `# ${ZJ}\n\n${gJ(AJ)}`,
                    ...qJ
                  })
                }
                return {
                  parent: {
                    ...JJ,
                    markdown: FJ.join(""),
                    childPageIds: UJ.map((JJ => JJ.id))
                  },
                  guides: UJ
                }
              }(cJ);
              return [JJ, ...ZJ]
            }
            return [cJ]
          }))],
          pJ = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...kJ.filter((JJ => void 0 !== JJ.sourceAnchor)).map((JJ => JJ.id))]
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

        function dJ(JJ) {
          return kJ.find((cJ => cJ.id === JJ))
        }
        const zJ = new Map;

        function NJ(JJ) {
          let cJ = zJ.get(JJ.id);
          return cJ || (cJ = (0, KJ.A)(JJ.markdown, "changelog" === JJ.layout ? 3 : 2), zJ.set(JJ.id, cJ)), cJ
        }

        function OJ(JJ, cJ) {
          return NJ(JJ).sections.some((JJ => JJ.heading.anchor === cJ || JJ.blocks.some((JJ => "heading" === JJ.kind && JJ.anchor === cJ))))
        }

        function TJ(JJ) {
          const [cJ, ...ZJ] = JJ.replace(/^#/, "").split("-"), FJ = kJ.find((JJ => JJ.id === cJ));
          if (!FJ) return null;
          const UJ = ZJ.length > 0 ? (0, KJ.v)(ZJ.join("-")) : "";
          for (const XJ of null !== (eJ = FJ.childPageIds) && void 0 !== eJ ? eJ : []) {
            var eJ;
            const JJ = dJ(XJ);
            if (JJ.sourceAnchor === UJ) return {
              page: JJ,
              anchor: ""
            };
            if (OJ(JJ, UJ)) return {
              page: JJ,
              anchor: UJ
            }
          }
          return {
            page: FJ,
            anchor: UJ
          }
        }
        const CJ = {
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

        function uJ(JJ, cJ) {
          let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const FJ = cJ.slug ? `${JJ}/${cJ.slug}` : JJ;
          return ZJ ? `${FJ}#${ZJ}` : FJ
        }
        var iJ = ZJ(4153);
        const RJ = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          LJ = new Set(["GameApi", "Console", "_TypeOf"]),
          aJ = 4;

        function BJ(JJ) {
          let cJ = JJ.length;
          for (; cJ > 0 && "" === JJ[cJ - 1].trim();) cJ--;
          return JJ.slice(0, cJ)
        }

        function tJ(JJ) {
          var cJ;
          const ZJ = BJ(JJ);
          if (null === (cJ = ZJ.at(-1)) || void 0 === cJ || !cJ.trimEnd().endsWith("*/")) return {
            lines: ZJ,
            doc: ""
          };
          const FJ = ZJ.findLastIndex((JJ => JJ.startsWith("/**")));
          return -1 === FJ ? {
            lines: ZJ,
            doc: ""
          } : {
            lines: BJ(ZJ.slice(0, FJ)),
            doc: ZJ.slice(FJ).join("\n")
          }
        }

        function oJ(JJ) {
          var cJ;
          const ZJ = JJ.split("\n"),
            FJ = ZJ.flatMap(((JJ, cJ) => RJ.test(JJ) ? [cJ] : []));
          let UJ = tJ(ZJ.slice(0, null !== (cJ = FJ[0]) && void 0 !== cJ ? cJ : ZJ.length)).doc;
          return FJ.map(((JJ, cJ) => {
            var eJ;
            const XJ = tJ(ZJ.slice(JJ, null !== (eJ = FJ[cJ + 1]) && void 0 !== eJ ? eJ : ZJ.length)),
              AJ = {
                name: ZJ[JJ].match(RJ)[1],
                doc: UJ,
                lines: XJ.lines
              };
            return UJ = XJ.doc, AJ
          }))
        }

        function lJ(JJ) {
          var cJ;
          const ZJ = JJ.match(/^readonly \[([\s\S]*)\]$/);
          return ZJ ? null !== (cJ = ZJ[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== cJ ? cJ : [] : null
        }

        function Jc(JJ) {
          if (!JJ.startsWith("{") || !JJ.endsWith("}")) return null;
          const cJ = {
              keys: [],
              values: []
            },
            ZJ = JJ => {
              const ZJ = JJ.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              ZJ && (cJ.keys.push(ZJ[1].startsWith('"') ? ZJ[1] : `"${ZJ[1]}"`), cJ.values.push(ZJ[2].trim()))
            };
          let FJ = 0,
            UJ = "";
          for (const eJ of JJ.slice(1, -1)) "{[(".includes(eJ) ? FJ++ : "}])".includes(eJ) && FJ--, ";" === eJ && 0 === FJ ? (ZJ(UJ), UJ = "") : UJ += eJ;
          return ZJ(UJ), cJ
        }

        function cc(JJ) {
          return JJ.length > aJ ? `\n\t| ${JJ.join("\n\t| ")}` : JJ.join(" | ")
        }

        function Zc(JJ, cJ) {
          const ZJ = function(JJ, cJ) {
            return JJ.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((JJ, ZJ) => {
              var FJ;
              const UJ = null === (FJ = cJ.get(ZJ)) || void 0 === FJ ? void 0 : FJ.object;
              return UJ ? cc(UJ.values) : JJ
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((JJ, ZJ) => {
              var FJ, UJ;
              const eJ = null === (FJ = cJ.get(ZJ)) || void 0 === FJ || null === (UJ = FJ.object) || void 0 === UJ ? void 0 : UJ.values.map(lJ);
              return null !== eJ && void 0 !== eJ && eJ.every((JJ => null !== JJ)) ? cc([...new Set(eJ.flat())]) : JJ
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((JJ, ZJ) => {
              var FJ;
              const UJ = null === (FJ = cJ.get(ZJ)) || void 0 === FJ ? void 0 : FJ.members;
              return UJ ? cc(UJ) : JJ
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((JJ, ZJ) => {
              var FJ;
              const UJ = null === (FJ = cJ.get(ZJ)) || void 0 === FJ ? void 0 : FJ.object;
              return UJ ? cc(UJ.keys) : JJ
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((JJ, ZJ) => {
              var FJ, UJ;
              return null !== (FJ = null === (UJ = cJ.get(ZJ)) || void 0 === UJ ? void 0 : UJ.text) && void 0 !== FJ ? FJ : JJ
            }))
          }(JJ.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), cJ);
          return [JJ.doc, ZJ].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function Fc(JJ) {
          const cJ = oJ(JJ),
            ZJ = function(JJ) {
              const cJ = new Map,
                ZJ = JJ.find((JJ => "_TypeOf" === JJ.name));
              let FJ = null;
              const UJ = () => {
                if (FJ) {
                  const JJ = FJ.lines.join("\n");
                  cJ.set(FJ.name, {
                    text: JJ,
                    members: lJ(JJ),
                    object: Jc(JJ)
                  })
                }
              };
              for (const eJ of ZJ.lines.slice(1, -1)) {
                const JJ = eJ.match(/^\t([\w$]+): (.+)$/);
                JJ ? (UJ(), FJ = {
                  name: JJ[1],
                  lines: [JJ[2]]
                }) : FJ && FJ.lines.push(eJ.replace(/^\t/, ""))
              }
              return UJ(), cJ
            }(cJ),
            FJ = new Map;
          for (const UJ of cJ) LJ.has(UJ.name) || FJ.has(UJ.name) || FJ.set(UJ.name, Zc(UJ, ZJ));
          return FJ
        }
        let Uc, ec, Xc;

        function Ac() {
          return ec ??= function(JJ) {
            const cJ = oJ(JJ).find((JJ => "GameApi" === JJ.name)),
              ZJ = new Map,
              FJ = cJ.lines;
            for (let eJ = 0; eJ < FJ.length; eJ++) {
              var UJ;
              if (!FJ[eJ].trimStart().startsWith("/**")) continue;
              const JJ = eJ;
              for (; eJ < FJ.length && !FJ[eJ].includes("*/");) eJ++;
              const cJ = null === (UJ = FJ[eJ + 1]) || void 0 === UJ ? void 0 : UJ.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!cJ) continue;
              let XJ = null;
              const AJ = [];
              let qJ = "description",
                jJ = !1;
              for (const ZJ of FJ.slice(JJ, eJ + 1).join("\n").split("\n").map((JJ => JJ.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const JJ = ZJ.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                JJ ? (XJ = JJ[1].trim(), qJ = "deprecation") : ZJ.startsWith("@") ? (qJ = "otherTag", jJ = !0) : "" === ZJ.trim() ? jJ || (qJ = "description", AJ.push(ZJ)) : "deprecation" !== qJ || /^[A-Z]/.test(ZJ.trim()) ? "otherTag" !== qJ && (qJ = "description", AJ.push(ZJ)) : XJ = `${XJ} ${ZJ.trim()}`.trim()
              }
              ZJ.set(cJ[1], {
                deprecation: XJ,
                description: AJ.join("\n").trim()
              })
            }
            return ZJ
          }(iJ.default), ec
        }

        function qc() {
          if (!Xc) {
            Xc = new Map;
            for (const JJ of kJ) {
              const cJ = (0, KJ.y)(NJ(JJ)).flatMap((JJ => JJ.blocks));
              for (const JJ of (0, KJ.l)(cJ))
                if ("ts" === JJ.lang || "typescript" === JJ.lang)
                  for (const [cJ, ZJ] of IJ(JJ.code)) Xc.set(cJ, ZJ)
            }
            for (const [JJ, cJ] of(Uc ??= Fc(iJ.default), Uc)) Xc.has(JJ) || Xc.set(JJ, cJ)
          }
          return Xc
        }
        const jc = {
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
        let Yc;

        function hc() {
          if (!Yc) {
            Yc = new Map;
            for (const JJ of kJ)
              if (MJ(JJ.layout))
                for (const cJ of NJ(JJ).sections) Yc.has(cJ.heading.text) || Yc.set(cJ.heading.text, {
                  pageId: JJ.id,
                  anchor: cJ.heading.anchor
                })
          }
          return Yc
        }

        function Dc(JJ) {
          const cJ = JJ.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return cJ ? hc().get(cJ[1]) : void 0
        }
        const sc = (0, FJ.createContext)("/docs"),
          nc = (0, FJ.createContext)(null),
          Gc = (0, FJ.createContext)(!1),
          fc = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function xc(JJ) {
          const cJ = JJ.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return cJ ? cJ[1] : null
        }

        function rc(JJ) {
          let {
            colour: cJ
          } = JJ;
          return (0, nJ.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: cJ
            },
            "aria-hidden": "true"
          })
        }

        function vc(JJ) {
          const cJ = [];
          let ZJ = 0;
          for (const FJ of JJ.matchAll(fc)) cJ.push(JJ.slice(ZJ, FJ.index), (0, nJ.jsx)(rc, {
            colour: FJ[0]
          }), FJ[0]), ZJ = FJ.index + FJ[0].length;
          return cJ.push(JJ.slice(ZJ)), cJ
        }

        function mc(JJ) {
          let {
            href: cJ,
            children: ZJ
          } = JJ;
          const UJ = (0, FJ.useContext)(sc);
          if (cJ.startsWith("#")) {
            const JJ = TJ(cJ);
            if (JJ) return (0, nJ.jsx)(XJ.c, {
              to: uJ(UJ, JJ.page, JJ.anchor),
              children: (0, nJ.jsx)(Gc.Provider, {
                value: !0,
                children: ZJ
              })
            })
          }
          return (0, nJ.jsx)("a", {
            href: cJ,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, nJ.jsx)(Gc.Provider, {
              value: !0,
              children: ZJ
            })
          })
        }

        function Qc(JJ) {
          let {
            code: cJ
          } = JJ;
          const ZJ = (0, FJ.useContext)(sc);
          if ((0, FJ.useContext)(Gc)) return (0, nJ.jsx)("code", {
            className: "DocsInlineCode",
            children: cJ
          });
          if (qc().has(cJ)) return (0, nJ.jsx)(yc, {
            type: cJ
          });
          const UJ = Dc(cJ);
          if (UJ) return (0, nJ.jsx)(XJ.c, {
            className: "DocsInlineCode DocsSymbolLink",
            to: uJ(ZJ, dJ(UJ.pageId), UJ.anchor),
            children: cJ
          });
          const eJ = xc(cJ);
          return (0, nJ.jsxs)("code", {
            className: "DocsInlineCode",
            children: [eJ && (0, nJ.jsx)(rc, {
              colour: eJ
            }), cJ]
          })
        }

        function Ec(JJ) {
          let {
            text: cJ
          } = JJ;
          const ZJ = [];
          let UJ = 0;
          for (const FJ of cJ.matchAll(KJ.g)) {
            FJ.index > UJ && ZJ.push(...vc(cJ.slice(UJ, FJ.index)));
            const [, JJ, eJ, XJ, AJ, qJ] = FJ;
            JJ ? ZJ.push((0, nJ.jsx)(Qc, {
              code: (0, KJ.p)(JJ, eJ)
            })) : XJ ? ZJ.push((0, nJ.jsx)("strong", {
              children: (0, nJ.jsx)(Ec, {
                text: XJ
              })
            })) : ZJ.push((0, nJ.jsx)(mc, {
              href: qJ,
              children: (0, nJ.jsx)(Ec, {
                text: AJ
              })
            })), UJ = FJ.index + FJ[0].length
          }
          return UJ < cJ.length && ZJ.push(...vc(cJ.slice(UJ))), (0, nJ.jsx)(nJ.Fragment, {
            children: ZJ.map(((JJ, cJ) => (0, nJ.jsx)(FJ.Fragment, {
              children: JJ
            }, cJ)))
          })
        }
        const Vc = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          Kc = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function yc(JJ) {
          let {
            type: cJ
          } = JJ;
          const ZJ = qc(),
            UJ = [];
          for (const FJ of cJ.trim().matchAll(Vc)) {
            const [JJ, cJ, eJ, XJ, AJ] = FJ;
            cJ ? UJ.push((0, nJ.jsx)("span", {
              className: "DocsTypeString",
              children: JJ
            })) : eJ && ZJ.has(eJ) ? UJ.push((0, nJ.jsx)(wc, {
              name: eJ,
              definition: ZJ.get(eJ)
            })) : eJ ? UJ.push((0, nJ.jsx)("span", {
              className: Kc.has(eJ) ? "DocsTypeKeyword" : "DocsTypeName",
              children: JJ
            })) : XJ ? UJ.push((0, nJ.jsx)("span", {
              className: "DocsTypeNumber",
              children: JJ
            })) : AJ ? UJ.push(" ") : UJ.push((0, nJ.jsx)("span", {
              className: "DocsTypePunctuation",
              children: JJ
            }))
          }
          return (0, nJ.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: UJ.map(((JJ, cJ) => (0, nJ.jsx)(FJ.Fragment, {
              children: JJ
            }, cJ)))
          })
        }
        const Sc = 480,
          Ic = 6,
          Mc = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let bc = 0;

        function wc(JJ) {
          let {
            name: cJ,
            definition: ZJ
          } = JJ;
          const UJ = (0, FJ.useContext)(sc),
            eJ = jc[cJ],
            AJ = (0, FJ.useRef)(null),
            qJ = (0, FJ.useRef)(null),
            YJ = (0, FJ.useRef)(null),
            [hJ, DJ] = (0, FJ.useState)(!1),
            [sJ, GJ] = (0, FJ.useState)(null),
            xJ = (0, FJ.useRef)(),
            rJ = (0, FJ.useContext)(nc),
            [vJ] = (0, FJ.useState)((() => "DocsTypePopover-" + bc++)),
            mJ = () => {
              clearTimeout(xJ.current), DJ(!0)
            },
            QJ = () => {
              clearTimeout(xJ.current), xJ.current = setTimeout((() => {
                DJ(!1)
              }), 120)
            };
          return (0, FJ.useEffect)((() => {
            if (!hJ) return;
            const JJ = JJ => {
              if ("Escape" === JJ.key) {
                var cJ, ZJ;
                if (null !== (cJ = qJ.current) && void 0 !== cJ && cJ.contains(document.activeElement)) null === (ZJ = AJ.current) || void 0 === ZJ || ZJ.focus();
                DJ(!1)
              }
            };
            return document.addEventListener("keydown", JJ), () => {
              document.removeEventListener("keydown", JJ)
            }
          }), [hJ]), (0, FJ.useEffect)((() => () => {
            clearTimeout(xJ.current)
          }), []), (0, FJ.useLayoutEffect)((() => {
            if (!hJ || !AJ.current || !qJ.current) return void GJ(null);
            const JJ = AJ.current.getBoundingClientRect(),
              cJ = qJ.current.offsetHeight,
              ZJ = Math.min(Sc, window.innerWidth - 32),
              FJ = Math.min(Math.max(16, JJ.left), window.innerWidth - ZJ - 16),
              UJ = JJ.bottom + Ic + cJ < window.innerHeight;
            GJ({
              left: FJ,
              top: UJ ? JJ.bottom + Ic : Math.max(16, JJ.top - Ic - cJ)
            })
          }), [hJ]), (0, nJ.jsxs)(nJ.Fragment, {
            children: [(0, nJ.jsx)("button", {
              type: "button",
              ref: AJ,
              className: "DocsTypeLink",
              "aria-expanded": hJ,
              "aria-describedby": hJ ? vJ : void 0,
              onMouseEnter: mJ,
              onMouseLeave: QJ,
              onFocus: mJ,
              onBlur: QJ,
              onKeyDown: JJ => {
                "Tab" === JJ.key && !JJ.shiftKey && YJ.current && (JJ.preventDefault(), YJ.current.focus())
              },
              onClick: mJ,
              children: cJ
            }), hJ && (0, jJ.createPortal)((0, nJ.jsxs)("span", {
              ref: qJ,
              id: vJ,
              className: "DocsTypePopover",
              role: "tooltip",
              style: sJ ? {
                left: sJ.left,
                top: sJ.top,
                maxWidth: Sc
              } : {
                visibility: "hidden"
              },
              onMouseEnter: mJ,
              onMouseLeave: QJ,
              onFocus: mJ,
              onBlur: QJ,
              children: [(0, nJ.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, nJ.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: cJ
                }), eJ && (0, nJ.jsxs)(XJ.c, {
                  ref: YJ,
                  className: "DocsTypePopoverLink",
                  to: uJ(UJ, dJ(eJ)),
                  onClick: () => {
                    DJ(!1)
                  },
                  onKeyDown: JJ => {
                    if ("Tab" === JJ.key) {
                      var cJ;
                      if (JJ.preventDefault(), JJ.shiftKey || !AJ.current || ! function(JJ, cJ) {
                          const ZJ = [...document.querySelectorAll(Mc)],
                            FJ = ZJ.slice(ZJ.indexOf(JJ) + 1).find((JJ => JJ.getClientRects().length > 0 && !(null !== cJ && void 0 !== cJ && cJ.contains(JJ))));
                          return null === FJ || void 0 === FJ || FJ.focus(), void 0 !== FJ
                        }(AJ.current, qJ.current)) null === (cJ = AJ.current) || void 0 === cJ || cJ.focus();
                      JJ.shiftKey || DJ(!1)
                    }
                  },
                  children: [dJ(eJ).title, (0, nJ.jsx)(fJ, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, nJ.jsx)(VJ, {
                lang: "ts",
                code: ZJ,
                compact: !0
              })]
            }), null !== rJ && void 0 !== rJ ? rJ : document.body)]
          })
        }
        var Wc = ZJ(157),
          gc = ZJ(4162),
          Hc = ZJ(4164),
          Pc = ZJ(4171);
        const kc = {
          progressBar: {
            KU: 30,
            yU: .075,
            SU: 5,
            IU: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            MU: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            wU: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            WU: !0,
            scale: 3,
            rotation: 15,
            gU: !1
          },
          gravityBar: {
            KU: 30,
            PU: .25,
            kU: 3,
            pU: .8,
            gravity: 1,
            dU: 1.5,
            zU: 8,
            NU: 4,
            IU: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            TU: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            uU: 5,
            iU: 1200,
            RU: .15,
            LU: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var pc = ZJ(227),
          dc = ZJ(1769);

        function zc(JJ) {
          return JJ.startsWith("fa-")
        }
        const Nc = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          Oc = {
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

        function Tc(JJ) {
          return "string" === typeof JJ ? "text" : "entityName" in JJ || "translationKey" in JJ ? "other" : (0, pc.lb)(JJ) ? "progressBar" : (0, pc.hb)(JJ) ? "keyBinding" : "icon" in JJ ? "icon" : "str" in JJ && "string" === typeof JJ.str ? "text" : "other"
        }
        const Cc = [{
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
          uc = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...Cc],
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
                options: dc.i
              },
              isRequired: !0
            }, ...Cc],
            other: []
          };

        function ic(JJ) {
          return "string" === typeof JJ ? {
            str: JJ
          } : JJ
        }

        function Rc(JJ, cJ) {
          let ZJ = ic(JJ);
          for (const FJ of cJ) ZJ = ZJ && "object" === typeof ZJ ? ZJ[FJ] : void 0;
          return ZJ
        }

        function Lc(JJ, cJ, ZJ) {
          const FJ = (JJ, UJ) => {
            var eJ;
            const XJ = cJ[UJ],
              AJ = {
                ...JJ
              };
            if (UJ === cJ.length - 1) return void 0 === ZJ ? delete AJ[XJ] : AJ[XJ] = ZJ, AJ;
            const qJ = FJ(null !== (eJ = JJ[XJ]) && void 0 !== eJ ? eJ : {}, UJ + 1);
            return 0 === Object.keys(qJ).length ? delete AJ[XJ] : AJ[XJ] = qJ, AJ
          };
          return function(JJ) {
            const cJ = Object.keys(JJ);
            return "string" === typeof JJ.str && 1 === cJ.length ? JJ.str : JJ
          }(FJ(ic(JJ), 0))
        }

        function ac(JJ, cJ) {
          const ZJ = Tc(JJ),
            FJ = uc[ZJ].find((JJ => JJ.path.join(".") === cJ.join("."))),
            UJ = null !== FJ && void 0 !== FJ && FJ.isRequired && "other" !== ZJ ? Rc(Oc[ZJ], cJ) : void 0;
          return Lc(JJ, cJ, UJ)
        }

        function Bc(JJ) {
          switch (Tc(JJ)) {
            case "text":
              return String(Rc(JJ, ["str"]));
            case "icon":
              return String(Rc(JJ, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(Rc(JJ,["progress"])))}%`;
            case "keyBinding":
              return String(Rc(JJ, ["action"]));
            case "other":
              return JSON.stringify(JJ)
          }
        }
        const tc = /^[A-Za-z_$][\w$]*$/;

        function oc(JJ) {
          if (Array.isArray(JJ)) return `[${JJ.map(oc).join(", ")}]`;
          if (JJ && "object" === typeof JJ) {
            const cJ = Object.entries(JJ).map((JJ => {
              let [cJ, ZJ] = JJ;
              return `${tc.test(cJ)?cJ:JSON.stringify(cJ)}: ${oc(ZJ)}`
            }));
            return 0 === cJ.length ? "{}" : `{ ${cJ.join(", ")} }`
          }
          return JSON.stringify(JJ)
        }

        function lc(JJ) {
          const cJ = JJ.map(oc),
            ZJ = `[${cJ.join(", ")}]`;
          return ZJ.length <= 60 ? ZJ : `[\n${cJ.map((JJ=>`    ${JJ},`)).join("\n")}\n]`
        }
        const JZ = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function cZ(JJ) {
          let cJ = "";
          for (let UJ = 0; UJ < JJ.length; UJ++) {
            const eJ = JJ[UJ];
            if ("\\" === eJ) {
              var ZJ;
              const FJ = null !== (ZJ = JJ[UJ + 1]) && void 0 !== ZJ ? ZJ : "";
              cJ += "'" === FJ ? "'" : eJ + FJ, UJ++
            } else if ('"' === eJ) cJ += '\\"';
            else {
              var FJ;
              cJ += null !== (FJ = JZ[eJ]) && void 0 !== FJ ? FJ : eJ
            }
          }
          return `"${cJ}"`
        }

        function ZZ(JJ) {
          if ("string" === typeof JJ) return !0;
          if (!JJ || "object" !== typeof JJ || Array.isArray(JJ)) return !1;
          const cJ = JJ;
          return "ProgressBar" === cJ.type ? "number" === typeof cJ.progress : "StyledKeyBinding" === cJ.type ? dc.i.includes(cJ.action) : "string" === typeof cJ.icon || "string" === typeof cJ.str || "string" === typeof cJ.entityName || "string" === typeof cJ.translationKey
        }

        function FZ(JJ) {
          let cJ;
          try {
            cJ = function(JJ) {
              let cJ = "",
                ZJ = "",
                FJ = 0;
              const UJ = () => {
                cJ += ZJ.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), ZJ = ""
              };
              for (; FJ < JJ.length;) {
                const eJ = JJ.slice(FJ).search(/["'`]|\/\//);
                if (-1 === eJ) {
                  ZJ += JJ.slice(FJ);
                  break
                }
                ZJ += JJ.slice(FJ, FJ + eJ);
                const XJ = FJ + eJ,
                  AJ = JJ[XJ];
                if ("/" === AJ) {
                  const cJ = JJ.indexOf("\n", XJ);
                  FJ = -1 === cJ ? JJ.length : cJ;
                  continue
                }
                if (UJ(), "`" === AJ) throw new Error("Use quotes rather than template strings.");
                let qJ = XJ + 1;
                for (; qJ < JJ.length && JJ[qJ] !== AJ;) qJ += "\\" === JJ[qJ] ? 2 : 1;
                if (qJ >= JJ.length) throw new Error("A string is missing its closing quote.");
                const jJ = JJ.slice(XJ + 1, qJ);
                cJ += cZ(jJ), FJ = qJ + 1
              }
              return UJ(), JSON.parse(cJ)
            }(JJ.trim())
          } catch (FJ) {
            return {
              parts: null,
              error: FJ instanceof SyntaxError ? "This isn't a valid array yet." : FJ.message
            }
          }
          if (!Array.isArray(cJ)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const ZJ = cJ.findIndex((JJ => !ZZ(JJ)));
          return -1 !== ZJ ? {
            parts: null,
            error: `Part ${ZJ+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: cJ,
            error: null
          }
        }
        const UZ = 1 / Wc.c.clientTicksPerSecond,
          eZ = 700,
          XZ = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          AZ = {
            progressBar: kc.progressBar.MU,
            timedClick: kc.timedClick.icon,
            gravityBar: kc.gravityBar.icon,
            precisionBar: kc.precisionBar.icon,
            rhythmClick: kc.rhythmClick.icon
          };

        function qZ(JJ) {
          let {
            type: cJ
          } = JJ;
          const [ZJ, UJ] = (0, FJ.useState)("ready"), [XJ, AJ] = (0, FJ.useState)(1), [qJ, jJ] = (0, FJ.useState)(!0), YJ = (0, FJ.useRef)(null), hJ = (0, FJ.useRef)(null), DJ = (0, FJ.useRef)(null), sJ = (0, FJ.useRef)(new Set), GJ = (0, FJ.useRef)(!1), xJ = AZ[cJ], rJ = (0, FJ.useMemo)((() => ({
            getState: () => {
              var JJ, cJ;
              return null !== (JJ = null === (cJ = DJ.current) || void 0 === cJ ? void 0 : cJ.getState()) && void 0 !== JJ ? JJ : XZ
            },
            onFrame: JJ => (sJ.current.add(JJ), () => {
              sJ.current.delete(JJ)
            })
          })), []);
          (0, FJ.useEffect)((() => {
            const JJ = YJ.current,
              cJ = hJ.current;
            if (!JJ || !cJ) return;
            const ZJ = new ResizeObserver((() => {
              AJ(JJ.clientWidth / Math.max(1, cJ.offsetWidth))
            }));
            return ZJ.observe(JJ), () => {
              ZJ.disconnect()
            }
          }), []), (0, FJ.useEffect)((() => {
            var JJ;
            if ("playing" !== ZJ) return;
            let FJ = !1;
            const eJ = new Pc.d[cJ](kc[cJ], (JJ => {
              FJ = !0, jJ(!1), UJ(JJ ? "succeeded" : "failed")
            }), (() => {}));
            DJ.current = eJ;
            let XJ = 0,
              AJ = performance.now(),
              qJ = requestAnimationFrame((function JJ(cJ) {
                for (XJ += Math.min(.25, (cJ - AJ) / 1e3), AJ = cJ; XJ >= UZ && !FJ;) XJ -= UZ, eJ.handleTick(UZ);
                for (const ZJ of sJ.current) ZJ();
                FJ || (qJ = requestAnimationFrame(JJ))
              }));
            return null === (JJ = YJ.current) || void 0 === JJ || JJ.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(qJ), eJ.tearDown(), DJ.current = null, GJ.current = !1
            }
          }), [ZJ, cJ]), (0, FJ.useEffect)((() => {
            if (qJ) return;
            const JJ = setTimeout((() => {
              jJ(!0)
            }), eZ);
            return () => {
              clearTimeout(JJ)
            }
          }), [qJ]);
          const vJ = JJ => {
            var cJ;
            "playing" === ZJ && GJ.current !== JJ && (GJ.current = JJ, null === (cJ = DJ.current) || void 0 === cJ || cJ.handleMouseInput(JJ))
          };
          return (0, nJ.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, nJ.jsxs)("div", {
              ref: YJ,
              className: eJ()("DocsQteStage", {
                Playing: "playing" === ZJ
              }),
              tabIndex: "playing" === ZJ ? 0 : -1,
              role: "playing" === ZJ ? "button" : void 0,
              "aria-label": "playing" === ZJ ? `${cJ} quick time event: click or press Space` : void 0,
              onPointerDown: JJ => {
                0 === JJ.button && vJ(!0)
              },
              onPointerUp: () => {
                vJ(!1)
              },
              onPointerLeave: () => {
                vJ(!1)
              },
              onPointerCancel: () => {
                vJ(!1)
              },
              onKeyDown: JJ => {
                "playing" !== ZJ || " " !== JJ.key && "Enter" !== JJ.key || (JJ.preventDefault(), vJ(!0))
              },
              onKeyUp: JJ => {
                "playing" !== ZJ || " " !== JJ.key && "Enter" !== JJ.key || vJ(!1)
              },
              children: [(0, nJ.jsx)("div", {
                ref: hJ,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${XJ})`
                },
                children: "playing" === ZJ && (0, nJ.jsx)(Hc.c.Provider, {
                  value: rJ,
                  children: (0, nJ.jsx)(gc.e, {
                    qte: {
                      type: cJ,
                      parameters: kc[cJ]
                    }
                  })
                })
              }), "playing" !== ZJ && (0, nJ.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== ZJ && (0, nJ.jsxs)("div", {
                  className: eJ()("DocsQteResult", "succeeded" === ZJ ? "Succeeded" : "Failed"),
                  children: [(0, nJ.jsx)(fJ, {
                    name: "succeeded" === ZJ ? "check" : "cross",
                    isTinted: !0
                  }), (0, nJ.jsx)("span", {
                    children: "succeeded" === ZJ ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, nJ.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !qJ,
                  onClick: () => {
                    UJ("playing")
                  },
                  children: [(0, nJ.jsx)(fJ, {
                    name: "ready" === ZJ ? "play" : "replay"
                  }), (0, nJ.jsx)("span", {
                    children: "ready" === ZJ ? `Try ${cJ}` : "Play again"
                  })]
                })]
              })]
            }), xJ && !zc(xJ) && (0, nJ.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, nJ.jsx)("code", {
                children: xJ
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function jZ(JJ) {
          let {
            level: cJ,
            text: ZJ,
            anchor: FJ,
            className: UJ
          } = JJ;
          const XJ = `h${Math.min(cJ,6)}`;
          return (0, nJ.jsxs)(XJ, {
                id: FJ,
                className: eJ()("DocsHeading", UJ),
                children: [(0, nJ.jsx)(Ec, {
                      text: ZJ
                    }), (0, nJ.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${FJ}`,
                        "aria-label": `Link to ${ZJ.replace(/`/g,"")}`,children:"#"})]})}function YZ(JJ){let{items:cJ,ordered:ZJ}=JJ;const FJ=ZJ?"ol":"ul";return(0,nJ.jsx)(FJ,{className:"DocsList",children:cJ.map(((JJ,cJ)=>(0,nJ.jsxs)("li",{children:[(0,nJ.jsx)(Ec,{text:JJ.text}),JJ.children.length>0&&(0,nJ.jsx)(YZ,{items:JJ.children,ordered:ZJ})]},cJ)))})}function hZ(JJ){const cJ=JJ[0],ZJ="paragraph"===(null===cJ||void 0===cJ?void 0:cJ.kind)?cJ.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(ZJ)?"warning":/^\*\*(tip|prefer)/.test(ZJ)?"tip":"note"}function DZ(JJ){let{block:cJ}=JJ;switch(cJ.kind){case"heading":return(0,nJ.jsx)(jZ,{level:cJ.level,text:cJ.text,anchor:cJ.anchor});case"paragraph":return(0,nJ.jsx)("p",{children:(0,nJ.jsx)(Ec,{text:cJ.text})});case"code":{const JJ="ts"===cJ.lang?function(JJ){const cJ=JJ.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return cJ&&Object.hasOwn(kc,cJ[1])?cJ[1]:null}(cJ.code):null;return(0,nJ.jsxs)(nJ.Fragment,{children:[(0,nJ.jsx)(VJ,{code:cJ.code,lang:cJ.lang}),JJ&&(0,nJ.jsx)(qZ,{type:JJ})]})}case"table":return(0,nJ.jsx)("div",{className:"DocsTableScroll",children:(0,nJ.jsxs)("table",{className:"DocsTable",children:[(0,nJ.jsx)("thead",{children:(0,nJ.jsx)("tr",{children:cJ.header.map(((JJ,cJ)=>(0,nJ.jsx)("th",{children:(0,nJ.jsx)(Ec,{text:JJ})},cJ)))})}),(0,nJ.jsx)("tbody",{children:cJ.rows.map(((JJ,cJ)=>(0,nJ.jsx)("tr",{children:JJ.map(((JJ,cJ)=>(0,nJ.jsx)("td",{children:(0,nJ.jsx)(Ec,{text:JJ})},cJ)))},cJ)))})]})});case"list":return(0,nJ.jsx)(YZ,{items:cJ.items,ordered:cJ.ordered});case"quote":return(0,nJ.jsx)("aside",{className:eJ()("DocsCallout",hZ(cJ.blocks)),children:(0,nJ.jsx)(sZ,{blocks:cJ.blocks})});case"rule":return(0,nJ.jsx)("hr",{className:"DocsRule"})}}function sZ(JJ){let{blocks:cJ}=JJ;return(0,nJ.jsx)(nJ.Fragment,{children:cJ.map(((JJ,cJ)=>(0,nJ.jsx)(DZ,{block:JJ},cJ)))})}var nZ=ZJ(4145),GZ=ZJ(4148);function fZ(JJ){return"blocks"===JJ||"items"===JJ}const xZ=new Map;function rZ(JJ){let cJ=xZ.get(JJ);return cJ||(cJ=function(JJ){const cJ={entries:[],legend:[],notes:[],examples:[]};let ZJ=!1;for(const eJ of JJ.split(/\r?\n/).slice(1)){if(eJ.startsWith("#")){const JJ=eJ.replace(/^# ?/,""),FJ=JJ.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);FJ?cJ.legend.push({code:FJ[1],meaning:FJ[2],usage:FJ[3].trim()}):/^Examples:/.test(JJ.trim())?ZJ=!0:ZJ&&JJ.trim()?cJ.examples.push(JJ.trim()):JJ.trim()&&!/^\s/.test(JJ)&&cJ.notes.push(JJ.trim());continue}const JJ=eJ.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var FJ,UJ;JJ&&cJ.entries.push({name:JJ[1],variants:null!==(FJ=null===(UJ=JJ[2])||void 0===UJ?void 0:UJ.split(","))&&void 0!==FJ?FJ:[]})}return cJ}("blocks"===JJ?nZ:GZ),xZ.set(JJ,cJ)),cJ}function vZ(JJ){let{className:cJ,value:ZJ,placeholder:FJ,label:UJ,onChange:eJ,count:XJ,children:AJ}=JJ;return(0,nJ.jsxs)("div",{className:cJ,children:[(0,nJ.jsx)(fJ,{name:"magnifying-glass"}),(0,nJ.jsx)("input",{type:"search",value:ZJ,placeholder:FJ,"aria-label":UJ,onChange:JJ=>{eJ(JJ.target.value)}}),AJ,XJ&&(0,nJ.jsxs)("span",{className:"DocsFilterCount",children:[XJ.visible," of ",XJ.total]})]})}var mZ=ZJ(942);function QZ(JJ){const cJ=JJ.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return cJ?cJ[2]:null}function EZ(JJ){return"paragraph"===JJ.kind&&""===JJ.text.trim()}function VZ(JJ){const cJ={name:JJ.heading.text,description:[],params:[],returns:null};let ZJ="description";for(const UJ of JJ.blocks)if(!EZ(UJ))if("heading"===UJ.kind&&/^Parameters:?$/.test(UJ.text))ZJ="params";else if("heading"===UJ.kind&&/^Returns:?$/.test(UJ.text))ZJ="returns",cJ.returns={type:"",description:[]};else if("params"!==ZJ||"table"!==UJ.kind){if("returns"===ZJ&&"paragraph"===UJ.kind&&""===cJ.returns.type){const JJ=QZ(UJ.text);if(null!==JJ){cJ.returns.type=JJ.replaceAll("\\|","|");continue}}"returns"===ZJ?cJ.returns.description.push(UJ):cJ.description.push(UJ)}else for(const[JJ,ZJ,eJ]of UJ.rows){var FJ;cJ.params.push({name:JJ,type:null!==(FJ=QZ(ZJ))&&void 0!==FJ?FJ:ZJ,description:null!==eJ&&void 0!==eJ?eJ:""})}return cJ}const KZ=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function yZ(JJ){return JJ.filter((JJ=>!EZ(JJ)))}const SZ=/^[\w][\w .'&!:()-]*$/,IZ=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function MZ(JJ){var cJ;if("code"===JJ.kind&&"text"===JJ.lang){const cJ=JJ.code.split("\n").map((JJ=>JJ.trim())).filter(Boolean);return cJ.length>0&&cJ.every((JJ=>SZ.test(JJ)))?cJ.map((JJ=>({name:JJ}))):null}return"paragraph"===JJ.kind&&IZ.test(JJ.text.trim())?[...JJ.text.matchAll(/`([ ^ `]+)` / g)].flatMap((JJ => JJ[1].split(/,\s*/).map((JJ => ({
                              name: JJ.trim()
                            }))))): "table" === JJ.kind && null !== (cJ = JJ.header[0]) && void 0 !== cJ && cJ.startsWith("Song") ? JJ.rows.map((JJ => {
                              let [cJ, ZJ] = JJ;
                              return {
                                name: cJ.replace(/`/g, ""),
                                caption: ZJ
                              }
                            })) : null
                          }

                          function bZ(JJ) {
                            const cJ = [];
                            for (const ZJ of JJ) {
                              const JJ = MZ(ZJ),
                                FJ = cJ.at(-1),
                                UJ = "table" === ZJ.kind;
                              JJ ? "names" === (null === FJ || void 0 === FJ ? void 0 : FJ.kind) && FJ.isSongs === UJ ? FJ.names.push(...JJ) : cJ.push({
                                kind: "names",
                                names: JJ,
                                isSongs: UJ
                              }) : cJ.push({
                                kind: "block",
                                block: ZJ
                              })
                            }
                            return cJ
                          }
                          const wZ = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function WZ(JJ, cJ) {
                            return `${wZ[JJ]}-${(0,KJ.v)(cJ)}`
                          }
                          const gZ = new WeakMap;

                          function HZ(JJ, cJ, ZJ) {
                            let FJ = gZ.get(cJ);
                            if (!FJ) {
                              FJ = new Map;
                              const ZJ = new Set;
                              for (const UJ of (0, KJ.y)(cJ)) {
                                const cJ = bZ(yZ(UJ.blocks)).map((cJ => {
                                  if ("block" === cJ.kind) return cJ;
                                  return {
                                    kind: "names",
                                    names: cJ.names.map((cJ => {
                                      var FJ, eJ;
                                      const XJ = WZ(JJ, cJ.name);
                                      let AJ = XJ;
                                      for (let JJ = 2; ZJ.has(AJ); JJ++) AJ = `${XJ}-${JJ}`;
                                      return ZJ.add(AJ), {
                                        ...cJ,
                                        anchor: AJ,
                                        heading: null !== (FJ = null === (eJ = UJ.heading) || void 0 === eJ ? void 0 : eJ.text) && void 0 !== FJ ? FJ : ""
                                      }
                                    })),
                                    isSongs: cJ.isSongs
                                  }
                                }));
                                FJ.set(UJ.blocks, cJ)
                              }
                              gZ.set(cJ, FJ)
                            }
                            const UJ = FJ.get(ZJ);
                            if (!UJ) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return UJ
                          }
                          const PZ = "/textures/docs/skinPreviews",
                            kZ = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var pZ = ZJ(3709),
                            dZ = ZJ(3726);

                          function zZ(JJ) {
                            return Object.hasOwn(pZ.f, JJ) ? pZ.f[JJ] : null
                          }
                          const NZ = {
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
                            blendMode: dZ.g.Standard
                          };

                          function OZ(JJ, cJ, ZJ) {
                            return cJ + (ZJ - cJ) * JJ()
                          }

                          function TZ(JJ, cJ, ZJ) {
                            return JJ + (cJ - JJ) * ZJ
                          }

                          function CZ(JJ) {
                            return JJ.length > 0 && "timeFraction" in JJ[0]
                          }

                          function uZ(JJ, cJ) {
                            if (0 === JJ.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!CZ(JJ.colorGradients)) {
                              const ZJ = JJ.colorGradients,
                                {
                                  color: FJ
                                } = ZJ[Math.floor(cJ() * ZJ.length) % ZJ.length];
                              return [{
                                at: 0,
                                colour: [FJ[0] / 255, FJ[1] / 255, FJ[2] / 255, 1]
                              }]
                            }
                            return [...JJ.colorGradients].sort(((JJ, cJ) => JJ.timeFraction - cJ.timeFraction)).map((JJ => {
                              var ZJ, FJ, UJ;
                              const eJ = JJ.minColor,
                                XJ = null !== (ZJ = JJ.maxColor) && void 0 !== ZJ ? ZJ : eJ,
                                AJ = cJ(),
                                qJ = [TZ(eJ[0], XJ[0], AJ) / 255, TZ(eJ[1], XJ[1], AJ) / 255, TZ(eJ[2], XJ[2], AJ) / 255, TZ(null !== (FJ = eJ[3]) && void 0 !== FJ ? FJ : 1, null !== (UJ = XJ[3]) && void 0 !== UJ ? UJ : 1, AJ)];
                              return {
                                at: JJ.timeFraction,
                                colour: qJ
                              }
                            }))
                          }

                          function iZ(JJ, cJ, ZJ, FJ) {
                            const UJ = OZ(FJ, JJ.minEmitPower, JJ.maxEmitPower),
                              eJ = cJ => OZ(FJ, Math.min(JJ.dir1[cJ], JJ.dir2[cJ]), Math.max(JJ.dir1[cJ], JJ.dir2[cJ])) * UJ,
                              XJ = [...JJ.velocityGradients].sort(((JJ, cJ) => JJ.timeFraction - cJ.timeFraction)).map((JJ => ({
                                at: JJ.timeFraction,
                                factor: OZ(FJ, JJ.factor, JJ.factor2)
                              })));
                            return {
                              pos: [OZ(FJ, cJ[0], ZJ[0]), OZ(FJ, cJ[1], ZJ[1]), OZ(FJ, cJ[2], ZJ[2])],
                              dir: [eJ(0), eJ(1), eJ(2)],
                              age: 0,
                              life: OZ(FJ, JJ.minLifeTime, JJ.maxLifeTime),
                              size: OZ(FJ, JJ.minSize, JJ.maxSize),
                              colours: uZ(JJ, FJ),
                              velocityFactors: XJ
                            }
                          }

                          function RZ(JJ, cJ, ZJ, FJ) {
                            if (cJ < JJ[0].at) return ZJ(Math.min(1, JJ.length - 1));
                            for (let UJ = 0; UJ < JJ.length - 1; UJ++)
                              if (cJ <= JJ[UJ + 1].at) {
                                const eJ = JJ[UJ + 1].at - JJ[UJ].at;
                                return FJ(ZJ(UJ), ZJ(UJ + 1), eJ > 0 ? (cJ - JJ[UJ].at) / eJ : 1)
                              } return ZJ(JJ.length - 1)
                          }

                          function LZ(JJ) {
                            return RZ(JJ.colours, JJ.age / JJ.life, (cJ => JJ.colours[cJ].colour), ((JJ, cJ, ZJ) => [TZ(JJ[0], cJ[0], ZJ), TZ(JJ[1], cJ[1], ZJ), TZ(JJ[2], cJ[2], ZJ), TZ(JJ[3], cJ[3], ZJ)]))
                          }

                          function aZ(JJ, cJ, ZJ) {
                            if (JJ.age += ZJ, JJ.age >= JJ.life) return !1;
                            const FJ = function(JJ) {
                              return 0 === JJ.velocityFactors.length ? 1 : RZ(JJ.velocityFactors, JJ.age / JJ.life, (cJ => JJ.velocityFactors[cJ].factor), TZ)
                            }(JJ) * ZJ;
                            for (let eJ = 0; eJ < 3; eJ++) {
                              var UJ;
                              JJ.pos[eJ] += JJ.dir[eJ] * FJ, JJ.dir[eJ] += (null !== (UJ = cJ[eJ]) && void 0 !== UJ ? UJ : 0) * ZJ
                            }
                            return !0
                          }

                          function BZ(JJ) {
                            return String(Math.round(1e6 * JJ) / 1e6)
                          }

                          function tZ(JJ) {
                            return `[${JJ.map(BZ).join(", ")}]`
                          }

                          function oZ(JJ, cJ) {
                            const ZJ = `${cJ}    `;
                            return `[\n${(CZ(JJ)?JJ.map((JJ=>{const cJ=[`${ZJ}    timeFraction: ${BZ(JJ.timeFraction)},`,`${ZJ}    minColor: ${tZ(JJ.minColor)},`];return JJ.maxColor&&cJ.push(`${ZJ}    maxColor: ${tZ(JJ.maxColor)},`),`${ZJ}{\n${cJ.join("\n")}\n${ZJ}},`})):JJ.map((JJ=>`
                            $ {
                              ZJ
                            } {
                              color: $ {
                                tZ(JJ.color)
                              }
                            }, `))).join("\n")}\n${cJ}]`
                          }
                          const lZ = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            JF = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const cF = .6;

                          function ZF(JJ, cJ) {
                            return `${cJ?"song":"sound"}:${JJ}`
                          }
                          let FF = {
                              track: null,
                              volume: cF
                            },
                            UF = null,
                            eF = 0,
                            XF = 0;
                          const AF = new Set;

                          function qF(JJ) {
                            FF = {
                              ...FF,
                              ...JJ
                            }, AF.forEach((JJ => {
                              JJ()
                            }))
                          }

                          function jF(JJ) {
                            FF.track && qF({
                              track: {
                                ...FF.track,
                                ...JJ
                              }
                            })
                          }

                          function YF(JJ) {
                            const [cJ, ZJ] = (0, FJ.useState)((() => JJ(FF))), UJ = (0, FJ.useRef)(JJ);
                            return UJ.current = JJ, (0, FJ.useEffect)((() => {
                              const JJ = () => {
                                ZJ((() => UJ.current(FF)))
                              };
                              return AF.add(JJ), JJ(), () => {
                                AF.delete(JJ)
                              }
                            }), []), cJ
                          }

                          function hF() {
                            eF++;
                            const JJ = UF;
                            UF = null, null === JJ || void 0 === JJ || JJ.stop()
                          }

                          function DF(JJ, cJ) {
                            let FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            hF();
                            const UJ = eF,
                              {
                                track: eJ
                              } = FF,
                              XJ = eJ && eJ.name === JJ && eJ.isSong === cJ ? eJ.duration : 0;
                            XF = FJ, qF({
                              track: {
                                name: JJ,
                                isSong: cJ,
                                status: "loading",
                                duration: XJ
                              }
                            }), Promise.all([ZJ.e(201), ZJ.e(229)]).then((() => ZJ(38603))).then((ZJ => {
                              let {
                                playDocsSound: eJ
                              } = ZJ;
                              UJ === eF && (UF = eJ(JJ, cJ, FF.volume, FJ, {
                                onPlay: JJ => {
                                  UJ === eF && jF({
                                    status: "playing",
                                    duration: JJ
                                  })
                                },
                                onEnd: JJ => {
                                  var cJ, ZJ;
                                  UJ === eF && (UF = null, JJ ? qF({
                                    track: null
                                  }) : (XF = null !== (cJ = null === (ZJ = FF.track) || void 0 === ZJ ? void 0 : ZJ.duration) && void 0 !== cJ ? cJ : 0, jF({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((cJ => {
                              console.error(`Could not play docs sound ${JJ}`, cJ), UJ === eF && qF({
                                track: null
                              })
                            }))
                          }

                          function sF() {
                            const {
                              track: JJ
                            } = FF;
                            if (!JJ) return;
                            if ("playing" === JJ.status && UF) return XF = UF.Om(), UF.pause(), void jF({
                              status: "paused"
                            });
                            if ("loading" === JJ.status) return hF(), void jF({
                              status: "paused"
                            });
                            if (UF) return void UF.resume();
                            const cJ = JJ.duration > 0 && XF >= JJ.duration - .05;
                            DF(JJ.name, JJ.isSong, cJ ? 0 : XF)
                          }

                          function nF() {
                            var JJ;
                            return UF && "playing" === (null === (JJ = FF.track) || void 0 === JJ ? void 0 : JJ.status) ? UF.Om() : XF
                          }

                          function GF(JJ) {
                            var cJ;
                            null === (cJ = UF) || void 0 === cJ || cJ.setVolume(JJ), qF({
                              volume: JJ
                            })
                          }

                          function fF() {
                            hF(), XF = 0, qF({
                              track: null
                            })
                          }
                          const xF = (0, FJ.createContext)(null);
                          let rF = null;

                          function vF() {
                            const [JJ, cJ] = (0, FJ.useState)(null);
                            return (0, FJ.useEffect)((() => {
                              let JJ = !1;
                              return rF ??= Promise.all([ZJ.e(64), ZJ.e(67), ZJ.e(66), ZJ.e(65), ZJ.e(185), ZJ.e(90), ZJ.e(208)]).then((() => ZJ(38594))), rF.then((ZJ => {
                                JJ || cJ(ZJ)
                              }), (JJ => {
                                console.error("Could not load the docs gallery's textures", JJ), rF = null
                              })), () => {
                                JJ = !0
                              }
                            }), []), JJ
                          }
                          const mF = 24,
                            QF = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function EF(JJ, cJ) {
                            const ZJ = "skins" === JJ ? function(JJ, cJ) {
                              const ZJ = kZ.find((cJ => JJ.startsWith(cJ.heading)));
                              return ZJ ? function(JJ, cJ) {
                                return `${JJ}-${cJ}`
                              }(ZJ.prefix, cJ) : null
                            }(cJ.heading, cJ.name) : null;
                            return null === ZJ ? null : `${PZ}/${ZJ}.webp`
                          }

                          function VF(JJ) {
                            let {
                              kind: cJ,
                              entry: ZJ,
                              assets: UJ,
                              renderedUrl: XJ
                            } = JJ;
                            const {
                              name: AJ
                            } = ZJ, [qJ, jJ] = (0, FJ.useState)(!1);
                            if ("icons" === cJ && zc(AJ)) return (0, nJ.jsx)(mZ.c, {
                              className: "DocsTileIcon",
                              name: AJ
                            });
                            let YJ = null;
                            var hJ;
                            if ("icons" === cJ) YJ = null !== (hJ = null === UJ || void 0 === UJ ? void 0 : UJ.getIngameIconUrl(AJ)) && void 0 !== hJ ? hJ : null;
                            else if ("particles" === cJ) {
                              var DJ, sJ, GJ;
                              YJ = null !== (DJ = null === UJ || void 0 === UJ ? void 0 : UJ.getParticleTextureUrl(null !== (sJ = null === (GJ = zZ(AJ)) || void 0 === GJ ? void 0 : GJ.texture) && void 0 !== sJ ? sJ : AJ)) && void 0 !== DJ ? DJ : null
                            } else "skins" === cJ && (YJ = null !== XJ && void 0 !== XJ ? XJ : QF.test(AJ) ? `/textures/charSkins/previews/${AJ}_preview.png` : null);
                            return !YJ || qJ ? (0, nJ.jsx)(fJ, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === cJ ? "person" : "image"
                            }) : (0, nJ.jsx)("img", {
                              className: eJ()("DocsTileImage", {
                                Pixelated: "skins" !== cJ
                              }),
                              src: YJ,
                              srcSet: YJ === XJ ? `${YJ} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${YJ}`), jJ(!0)
                              }
                            })
                          }

                          function KF(JJ) {
                            let {
                              entry: cJ,
                              isSong: ZJ
                            } = JJ;
                            const FJ = YF((JJ => {
                                let {
                                  track: FJ
                                } = JJ;
                                return (null === FJ || void 0 === FJ ? void 0 : FJ.name) === cJ.name && FJ.isSong === ZJ ? FJ.status : null
                              })),
                              UJ = null !== FJ && "paused" !== FJ;
                            return (0, nJ.jsxs)("button", {
                              type: "button",
                              id: cJ.anchor,
                              className: eJ()("DocsSoundTile", {
                                Playing: UJ
                              }),
                              "data-docs-track": ZF(cJ.name, ZJ),
                              "aria-label": UJ ? `Pause ${cJ.name}` : `Play ${cJ.name}`,
                              onClick: () => {
                                null !== FJ ? sF() : DF(cJ.name, ZJ)
                              },
                              children: [(0, nJ.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, nJ.jsx)(fJ, {
                                  name: UJ ? "pause" : "play"
                                })
                              }), (0, nJ.jsx)("code", {
                                className: "DocsSoundName",
                                children: cJ.name
                              }), cJ.caption && (0, nJ.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: cJ.caption
                              })]
                            })
                          }

                          function yF(JJ) {
                            let {
                              kind: cJ,
                              names: ZJ,
                              isSongs: UJ
                            } = JJ;
                            const XJ = vF(),
                              [AJ, qJ] = rJ(),
                              jJ = !1 === (null === AJ || void 0 === AJ ? void 0 : AJ.failed) ? AJ.text : null,
                              YJ = (0, FJ.useContext)(xF),
                              [hJ, DJ] = (0, FJ.useState)(""),
                              sJ = hJ.trim().toLowerCase(),
                              GJ = sJ ? ZJ.filter((JJ => JJ.name.toLowerCase().includes(sJ))) : ZJ;
                            return (0, nJ.jsxs)("div", {
                              className: "DocsGallery",
                              children: [ZJ.length > mF && (0, nJ.jsx)(vZ, {
                                className: "DocsGalleryFilter",
                                value: hJ,
                                placeholder: `Filter ${ZJ.length} names\u2026`,
                                label: "Filter names",
                                onChange: DJ,
                                count: sJ ? {
                                  visible: GJ.length,
                                  total: ZJ.length
                                } : null
                              }), (0, nJ.jsx)("div", {
                                className: eJ()("DocsGalleryGrid", `Kind-${cJ}`, {
                                  Songs: UJ
                                }),
                                children: GJ.map((JJ => {
                                  if ("sounds" === cJ) return (0, nJ.jsx)(KF, {
                                    entry: JJ,
                                    isSong: UJ
                                  }, JJ.anchor);
                                  if (YJ && "particles" === cJ && zZ(JJ.name)) return (0, nJ.jsxs)("button", {
                                    type: "button",
                                    id: JJ.anchor,
                                    className: eJ()("DocsTile Previewable", {
                                      Copied: jJ === JJ.name
                                    }),
                                    title: `Play "${JJ.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      YJ(JJ.name), qJ(JJ.name)
                                    },
                                    children: [(0, nJ.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, nJ.jsx)(VF, {
                                        kind: cJ,
                                        entry: JJ,
                                        assets: XJ,
                                        renderedUrl: null
                                      }), (0, nJ.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, nJ.jsx)(fJ, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, nJ.jsx)("span", {
                                      className: "DocsTileName",
                                      children: jJ === JJ.name ? "Copied!" : JJ.name
                                    })]
                                  }, JJ.anchor);
                                  const ZJ = EF(cJ, JJ);
                                  return (0, nJ.jsxs)("button", {
                                    type: "button",
                                    id: JJ.anchor,
                                    className: eJ()("DocsTile", {
                                      Copied: jJ === JJ.name
                                    }),
                                    title: `Copy "${JJ.name}"`,
                                    onClick: () => {
                                      qJ(JJ.name)
                                    },
                                    children: [(0, nJ.jsx)("span", {
                                      className: eJ()("DocsTilePreview", {
                                        Rendered: null !== ZJ
                                      }),
                                      children: (0, nJ.jsx)(VF, {
                                        kind: cJ,
                                        entry: JJ,
                                        assets: XJ,
                                        renderedUrl: ZJ
                                      })
                                    }), (0, nJ.jsx)("span", {
                                      className: "DocsTileName",
                                      children: jJ === JJ.name ? "Copied!" : JJ.name
                                    })]
                                  }, JJ.anchor)
                                }))
                              })]
                            })
                          }

                          function SF(JJ) {
                            let {
                              kind: cJ,
                              content: ZJ,
                              blocks: FJ
                            } = JJ;
                            return (0, nJ.jsx)(nJ.Fragment, {
                              children: HZ(cJ, ZJ, FJ).map(((JJ, ZJ) => "block" === JJ.kind ? (0, nJ.jsx)(DZ, {
                                block: JJ.block
                              }, ZJ) : (0, nJ.jsx)(yF, {
                                kind: cJ,
                                names: JJ.names,
                                isSongs: JJ.isSongs
                              }, ZJ)))
                            })
                          }
                          const IF = [{
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

                          function MF(JJ) {
                            let {
                              cards: cJ = IF,
                              label: ZJ = "Start here"
                            } = JJ;
                            const UJ = (0, FJ.useContext)(sc);
                            return (0, nJ.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": ZJ,
                              children: cJ.map((JJ => {
                                let {
                                  pageId: cJ,
                                  countNoun: ZJ
                                } = JJ;
                                const FJ = dJ(cJ);
                                return (0, nJ.jsxs)(XJ.c, {
                                  to: uJ(UJ, FJ),
                                  className: "DocsLandingCard",
                                  children: [(0, nJ.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, nJ.jsx)(fJ, {
                                      name: FJ.icon
                                    })
                                  }), (0, nJ.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: FJ.title
                                  }), (0, nJ.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: FJ.summary
                                  }), ZJ && (0, nJ.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [NJ(FJ).sections.length, " ", ZJ]
                                  })]
                                }, cJ)
                              }))
                            })
                          }
                          const bF = 240;

                          function wF(JJ) {
                            let {
                              faces: cJ
                            } = JJ;
                            return (0, nJ.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, nJ.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${cJ.top}")`
                                }
                              }), (0, nJ.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${cJ.left}")`
                                }
                              }), (0, nJ.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${cJ.right}")`
                                }
                              })]
                            })
                          }

                          function WF(JJ) {
                            let {
                              src: cJ
                            } = JJ;
                            const [ZJ, UJ] = (0, FJ.useState)(!1);
                            return ZJ ? null : (0, nJ.jsx)("img", {
                              src: cJ,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${cJ}`), UJ(!0)
                              }
                            })
                          }

                          function gF(JJ) {
                            let {
                              kind: cJ
                            } = JJ;
                            const ZJ = rZ(cJ),
                              UJ = vF(),
                              XJ = (0, AJ.q)(),
                              [qJ, jJ] = (0, FJ.useState)(""),
                              [YJ, hJ] = (0, FJ.useState)(null),
                              [DJ, sJ] = (0, FJ.useState)(bF),
                              [GJ, xJ] = (0, FJ.useState)(null),
                              rJ = (0, FJ.useRef)(null),
                              mJ = qJ.trim().toLowerCase();
                            (0, FJ.useEffect)((() => {
                              const JJ = (0, KJ.r)(XJ.hash),
                                FJ = ZJ.entries.find((ZJ => WZ(cJ, ZJ.name) === JJ));
                              if (FJ) rJ.current = FJ.name, jJ(FJ.name), hJ(null), xJ(FJ.name);
                              else if (null !== rJ.current) {
                                const JJ = rJ.current;
                                rJ.current = null, jJ((cJ => cJ === JJ ? "" : cJ)), xJ(null)
                              }
                            }), [ZJ, cJ, XJ.hash, XJ.key]), (0, FJ.useEffect)((() => {
                              var JJ;
                              null !== GJ && (null === (JJ = document.getElementById(WZ(cJ, GJ))) || void 0 === JJ || JJ.scrollIntoView({
                                block: "center"
                              }))
                            }), [cJ, GJ]);
                            const QJ = ZJ.entries.filter((JJ => (!mJ || JJ.name.toLowerCase().includes(mJ)) && (!YJ || JJ.variants.includes(YJ))));
                            return (0, nJ.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [ZJ.notes.length > 0 && (0, nJ.jsx)("div", {
                                className: "DocsProse",
                                children: ZJ.notes.map((JJ => (0, nJ.jsx)("p", {
                                  children: JJ
                                }, JJ)))
                              }), ZJ.legend.length > 0 && (0, nJ.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, nJ.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, nJ.jsx)("thead", {
                                    children: (0, nJ.jsxs)("tr", {
                                      children: [(0, nJ.jsx)("th", {
                                        children: "Code"
                                      }), (0, nJ.jsx)("th", {
                                        children: "Variant"
                                      }), (0, nJ.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, nJ.jsx)("tbody", {
                                    children: ZJ.legend.map((JJ => (0, nJ.jsxs)("tr", {
                                      children: [(0, nJ.jsx)("td", {
                                        children: (0, nJ.jsx)("button", {
                                          type: "button",
                                          className: eJ()("DocsVariantChip", {
                                            Active: YJ === JJ.code
                                          }),
                                          "aria-pressed": YJ === JJ.code,
                                          title: `Show only ${cJ} with ${JJ.meaning} variants`,
                                          onClick: () => {
                                            hJ(YJ === JJ.code ? null : JJ.code)
                                          },
                                          children: JJ.code
                                        })
                                      }), (0, nJ.jsx)("td", {
                                        children: JJ.meaning
                                      }), (0, nJ.jsx)("td", {
                                        children: (0, nJ.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: JJ.usage
                                        })
                                      })]
                                    }, JJ.code)))
                                  })]
                                })
                              }), ZJ.examples.length > 0 && (0, nJ.jsx)(VJ, {
                                lang: "text",
                                code: ZJ.examples.join("\n")
                              }), (0, nJ.jsx)(vZ, {
                                className: "DocsFilterBar",
                                value: qJ,
                                placeholder: `Search ${ZJ.entries.length} ${cJ}\u2026`,
                                label: `Search ${cJ}`,
                                onChange: JJ => {
                                  jJ(JJ), sJ(bF)
                                },
                                count: mJ || YJ ? {
                                  visible: QJ.length,
                                  total: ZJ.entries.length
                                } : null,
                                children: YJ && (0, nJ.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    hJ(null)
                                  },
                                  children: [YJ, " ", (0, nJ.jsx)(fJ, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, nJ.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: QJ.slice(0, DJ).map((JJ => {
                                  const ZJ = "blocks" === cJ ? null === UJ || void 0 === UJ ? void 0 : UJ.getBlockFaces(JJ.name) : null,
                                    FJ = UJ && !ZJ ? UJ.getItemTextureUrl(JJ.name) : null;
                                  return (0, nJ.jsxs)("div", {
                                    id: WZ(cJ, JJ.name),
                                    className: eJ()("DocsCatalogueTile", {
                                      Linked: JJ.name === GJ
                                    }),
                                    children: [(0, nJ.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [ZJ && (0, nJ.jsx)(wF, {
                                        faces: ZJ
                                      }), FJ && (0, nJ.jsx)(WF, {
                                        src: FJ
                                      })]
                                    }), (0, nJ.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: JJ.name
                                    }), JJ.variants.length > 0 && (0, nJ.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: JJ.variants.map((JJ => (0, nJ.jsx)("span", {
                                        children: JJ
                                      }, JJ)))
                                    }), (0, nJ.jsx)(vJ, {
                                      text: JJ.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, JJ.name)
                                }))
                              }), QJ.length > DJ && (0, nJ.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  sJ(QJ.length)
                                },
                                children: ["Show all ", QJ.length]
                              }), 0 === QJ.length && (0, nJ.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", cJ, " match."]
                              })]
                            })
                          }
                          var HF = ZJ(4220),
                            PF = ZJ(1475);
                          const kF = .95 * HF.b;

                          function pF(JJ) {
                            return /^\s*```/.test(JJ)
                          }

                          function dF(JJ, cJ) {
                            const ZJ = [
                              []
                            ];
                            let FJ = !1;
                            for (const UJ of JJ.split("\n")) !FJ && cJ(UJ) && ZJ.at(-1).length > 0 && ZJ.push([]), pF(UJ) && (FJ = !FJ), ZJ.at(-1).push(UJ);
                            return ZJ.map((JJ => JJ.join("\n").trim())).filter(Boolean)
                          }

                          function zF(JJ, cJ) {
                            const ZJ = `${"#".repeat(cJ)} `,
                              FJ = [];
                            let UJ = !1;
                            for (const eJ of JJ.split("\n")) pF(eJ) ? UJ = !UJ : !UJ && eJ.startsWith(ZJ) && FJ.push(eJ.slice(ZJ.length).trim());
                            return FJ
                          }

                          function NF(JJ) {
                            return JJ.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class OF {
                            constructor(JJ, cJ) {
                              this.origin = cJ, this.pages = void 0, this.partPaths = new Map;
                              const ZJ = JJ.map((JJ => {
                                const cJ = cJ => this.resolveLinks(JJ, cJ).length,
                                  ZJ = function(JJ, cJ) {
                                    const ZJ = JJ.map((JJ => cJ(JJ.markdown) + 2)),
                                      FJ = ZJ.reduce(((JJ, cJ) => JJ + cJ), 0),
                                      UJ = FJ / Math.ceil(FJ / kF),
                                      eJ = [];
                                    let XJ = 0;
                                    return JJ.forEach(((JJ, cJ) => {
                                      const FJ = ZJ[cJ];
                                      (0 === eJ.length || XJ + FJ > kF || XJ + FJ / 2 > UJ) && (eJ.push([]), XJ = 0), eJ.at(-1).push(JJ), XJ += FJ
                                    })), eJ
                                  }(function(JJ, cJ) {
                                    return dF(JJ, (JJ => JJ.startsWith("## "))).flatMap((JJ => {
                                      var ZJ;
                                      const FJ = null !== (ZJ = zF(JJ, 2)[0]) && void 0 !== ZJ ? ZJ : "";
                                      if (cJ(JJ) <= kF) return [{
                                        markdown: JJ,
                                        section: FJ
                                      }];
                                      let UJ = !1,
                                        eJ = "";
                                      return dF(JJ, (JJ => {
                                        const cJ = UJ && "" !== JJ.trim();
                                        return UJ = "" === JJ.trim(), cJ
                                      })).map((JJ => {
                                        var cJ;
                                        const ZJ = zF(JJ, 3),
                                          UJ = JJ.startsWith("### ") ? ZJ[0] : eJ;
                                        return eJ = null !== (cJ = ZJ.at(-1)) && void 0 !== cJ ? cJ : eJ, {
                                          markdown: JJ,
                                          section: FJ || UJ
                                        }
                                      }))
                                    }))
                                  }(NF(JJ), cJ), cJ);
                                return {
                                  page: JJ,
                                  groups: ZJ.length > 1 ? ZJ : []
                                }
                              }));
                              for (const {
                                  page: FJ,
                                  groups: UJ
                                }
                                of ZJ) UJ.forEach(((JJ, cJ) => {
                                const ZJ = (0, HF.o)(FJ.slug, cJ);
                                for (const UJ of JJ.flatMap((JJ => [...zF(JJ.markdown, 2), ...zF(JJ.markdown, 3)]))) {
                                  const JJ = `${FJ.id}#${(0,KJ.v)(UJ)}`;
                                  this.partPaths.has(JJ) || this.partPaths.set(JJ, ZJ)
                                }
                              }));
                              this.pages = ZJ.map((JJ => {
                                let {
                                  page: cJ,
                                  groups: ZJ
                                } = JJ;
                                return {
                                  page: cJ,
                                  path: (0, HF.n)(cJ.slug),
                                  markdown: `# ${cJ.title}\n\n${this.resolveLinks(cJ,NF(cJ))}\n`,
                                  parts: ZJ.map(((JJ, FJ) => this.renderPart(cJ, JJ, FJ, ZJ.length)))
                                }
                              }))
                            }
                            url(JJ) {
                              return `${this.origin}${JJ}`
                            }
                            getPage(JJ) {
                              return this.pages.find((cJ => cJ.page.id === JJ))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((JJ => (JJ.parts.length > 0 ? JJ.parts : [{
                                path: JJ.path,
                                label: "",
                                markdown: JJ.markdown
                              }]).filter((JJ => JJ.markdown.length > HF.b))))
                            }
                            markdownUrl(JJ, cJ) {
                              const ZJ = cJ && this.partPaths.get(`${JJ.id}#${cJ}`) || (0, HF.n)(JJ.slug);
                              return this.url(cJ ? `${ZJ}#${cJ}` : ZJ)
                            }
                            resolveLinks(JJ, cJ) {
                              return cJ.replace(/\]\((#[^)]+)\)/g, ((cJ, ZJ) => {
                                var FJ;
                                const UJ = null !== (FJ = TJ(ZJ)) && void 0 !== FJ ? FJ : this.samePageTarget(JJ, ZJ);
                                return UJ ? `](${this.markdownUrl(UJ.page,UJ.anchor)})` : cJ
                              }))
                            }
                            samePageTarget(JJ, cJ) {
                              const ZJ = (0, KJ.v)(cJ.slice(1));
                              return OJ(JJ, ZJ) ? {
                                page: JJ,
                                anchor: ZJ
                              } : null
                            }
                            renderPart(JJ, cJ, ZJ, FJ) {
                              const UJ = function(JJ) {
                                  const cJ = JJ.map((JJ => JJ.section)).filter(Boolean);
                                  if (0 === cJ.length) return "";
                                  const ZJ = cJ[0],
                                    FJ = cJ.at(-1);
                                  return ZJ === FJ ? ZJ : `${ZJ} to ${FJ}`
                                }(cJ),
                                eJ = cJ.map((JJ => JJ.markdown)).join("\n\n"),
                                XJ = UJ ? `It covers ${UJ}. ` : "",
                                AJ = `Part ${ZJ+1} of ${FJ} of [${JJ.title}](${this.url((0,HF.n)(JJ.slug))}). ${XJ}[llms.txt](${this.url(HF.e)}) lists every part.`;
                              return {
                                path: (0, HF.o)(JJ.slug, ZJ),
                                label: UJ,
                                markdown: `# ${JJ.title}, part ${ZJ+1} of ${FJ}\n\n${AJ}\n\n${this.resolveLinks(JJ,eJ)}\n`
                              }
                            }
                            llmsTxt(JJ) {
                              const cJ = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${TF(HF.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const ZJ of pJ) {
                                cJ.push("", `## ${ZJ.title}`, "");
                                for (const JJ of ZJ.pageIds) {
                                  const ZJ = this.getPage(JJ),
                                    {
                                      page: FJ,
                                      parts: UJ
                                    } = ZJ,
                                    eJ = `About ${TF(ZJ.markdown.length)} tokens${UJ.length>0?`, in ${UJ.length} parts:`:"."}`;
                                  cJ.push(`- [${FJ.title}](${this.url(ZJ.path)}): ${FJ.summary} ${eJ}`), UJ.forEach(((JJ, ZJ) => {
                                    cJ.push(`  - [Part ${ZJ+1}${JJ.label?`: ${JJ.label}`:""}](${this.url(JJ.path)})`)
                                  }))
                                }
                              }
                              return cJ.push("", "## Optional", "", `- [Every page in one file](${this.url(HF.d)}): About ${TF(JJ.length)} tokens, for a model with a large context window.`, ""), cJ.join("\n")
                            }
                            llmsFullTxt() {
                              return pJ.flatMap((JJ => JJ.pageIds.map((JJ => this.getPage(JJ).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const JJ = this.llmsFullTxt(),
                                cJ = this.llmsTxt(JJ),
                                ZJ = new Map([
                                  [HF.j, cJ],
                                  [HF.e, cJ],
                                  [HF.d, JJ]
                                ]);
                              for (const FJ of this.pages) {
                                ZJ.set(FJ.path, FJ.markdown);
                                for (const JJ of FJ.parts) ZJ.set(JJ.path, JJ.markdown)
                              }
                              return ZJ
                            }
                          }

                          function TF(JJ) {
                            return `${Math.max(1,Math.round(JJ/4e3))}K`
                          }
                          let CF = null;

                          function uF() {
                            return CF ??= new OF(kJ, PF.e), CF
                          }
                          const iF = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function RF(JJ) {
                            return uF().getPage(JJ.id).parts.length > 0 ? `Read ${HF.f}, then the parts of the Bloxd Code API's ${JJ.title} page it lists, so I can ask questions about it.` : `Read ${PF.e}${(0,HF.n)(JJ.slug)} so I can ask questions about it. ${HF.f} lists every page of the Bloxd Code API docs.`
                          }

                          function LF(JJ) {
                            let {
                              page: cJ
                            } = JJ;
                            const [ZJ, FJ] = rJ();
                            return (0, nJ.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, nJ.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  FJ(uF().getPage(cJ.id).markdown)
                                },
                                children: [(0, nJ.jsx)(fJ, {
                                  name: !1 === (null === ZJ || void 0 === ZJ ? void 0 : ZJ.failed) ? "check" : "copy"
                                }), (0, nJ.jsx)("span", {
                                  children: ZJ ? ZJ.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), iF.map((JJ => (0, nJ.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${JJ.url}${encodeURIComponent(RF(cJ))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, nJ.jsx)(fJ, {
                                  name: "external-link"
                                }), (0, nJ.jsxs)("span", {
                                  children: ["Open in ", JJ.name]
                                })]
                              }, JJ.name)))]
                            })
                          }

                          function aF(JJ) {
                            return `#${[0,1,2].map((cJ=>Math.round(Math.min(255,Math.max(0,JJ[cJ]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function BF(JJ) {
                            return [parseInt(JJ.slice(1, 3), 16), parseInt(JJ.slice(3, 5), 16), parseInt(JJ.slice(5, 7), 16)]
                          }

                          function tF(JJ) {
                            let {
                              label: cJ,
                              min: ZJ,
                              max: FJ,
                              step: UJ,
                              low: eJ,
                              high: XJ,
                              onChange: AJ
                            } = JJ;
                            return (0, nJ.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, nJ.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, nJ.jsx)("span", {
                                  children: cJ
                                }), (0, nJ.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: eJ === XJ ? eJ : `${eJ}\u2013${XJ}`
                                })]
                              }), (0, nJ.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, nJ.jsx)("input", {
                                  type: "range",
                                  min: ZJ,
                                  max: FJ,
                                  step: UJ,
                                  value: Math.min(FJ, eJ),
                                  "aria-label": `Minimum ${cJ.toLowerCase()}`,
                                  onChange: JJ => {
                                    const cJ = Number(JJ.target.value);
                                    AJ(cJ, Math.max(cJ, XJ))
                                  }
                                }), (0, nJ.jsx)("input", {
                                  type: "range",
                                  min: ZJ,
                                  max: FJ,
                                  step: UJ,
                                  value: Math.min(FJ, XJ),
                                  "aria-label": `Maximum ${cJ.toLowerCase()}`,
                                  onChange: JJ => {
                                    const cJ = Number(JJ.target.value);
                                    AJ(Math.min(cJ, eJ), cJ)
                                  }
                                })]
                              })]
                            })
                          }

                          function oF(JJ) {
                            let {
                              label: cJ,
                              min: ZJ,
                              max: FJ,
                              step: UJ,
                              value: eJ,
                              onChange: XJ,
                              format: AJ = String
                            } = JJ;
                            return (0, nJ.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, nJ.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, nJ.jsx)("span", {
                                  children: cJ
                                }), (0, nJ.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: AJ(eJ)
                                })]
                              }), (0, nJ.jsx)("input", {
                                type: "range",
                                min: ZJ,
                                max: FJ,
                                step: UJ,
                                value: Math.min(FJ, Math.max(ZJ, eJ)),
                                "aria-label": cJ,
                                onChange: JJ => {
                                  XJ(Number(JJ.target.value))
                                }
                              })]
                            })
                          }

                          function lF(JJ) {
                            let {
                              opts: cJ,
                              onChange: ZJ
                            } = JJ;
                            const FJ = cJ.colorGradients;
                            if (!CZ(FJ)) return (0, nJ.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, nJ.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, nJ.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, nJ.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: FJ.map(((JJ, cJ) => (0, nJ.jsx)("input", {
                                  type: "color",
                                  value: aF(JJ.color),
                                  "aria-label": `Colour ${cJ+1}`,
                                  onChange: JJ => {
                                    const UJ = [...FJ];
                                    UJ[cJ] = {
                                      color: BF(JJ.target.value)
                                    }, ZJ(UJ)
                                  }
                                }, cJ)))
                              })]
                            });
                            const UJ = (JJ, cJ) => {
                              const UJ = [...FJ];
                              UJ[JJ] = cJ, ZJ(UJ)
                            };
                            return (0, nJ.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, nJ.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, nJ.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, nJ.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), FJ.map(((JJ, cJ) => {
                                var ZJ;
                                const FJ = null !== (ZJ = JJ.maxColor) && void 0 !== ZJ ? ZJ : JJ.minColor;
                                return (0, nJ.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, nJ.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * JJ.timeFraction), "%"]
                                  }), (0, nJ.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${aF(JJ.minColor)}, ${aF(FJ)})`
                                    }
                                  }), (0, nJ.jsx)("input", {
                                    type: "color",
                                    value: aF(JJ.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*JJ.timeFraction)}%`,
                                    onChange: ZJ => {
                                      UJ(cJ, {
                                        ...JJ,
                                        minColor: [...BF(ZJ.target.value), JJ.minColor[3]]
                                      })
                                    }
                                  }), (0, nJ.jsx)("input", {
                                    type: "color",
                                    value: aF(FJ),
                                    "aria-label": `Maximum colour at ${Math.round(100*JJ.timeFraction)}%`,
                                    onChange: ZJ => {
                                      UJ(cJ, {
                                        ...JJ,
                                        maxColor: [...BF(ZJ.target.value), FJ[3]]
                                      })
                                    }
                                  })]
                                }, cJ)
                              }))]
                            })
                          }
                          const JU = [-.5, -.5, -.5],
                            cU = [.5, .5, .5],
                            ZU = [0, 1, 2, 3, 4, 5, 6, 7].map((JJ => [1 & JJ ? cU[0] : JU[0], 2 & JJ ? cU[1] : JU[1], 4 & JJ ? cU[2] : JU[2]]));class FU {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(JJ, cJ, ZJ, FJ) {
                              const UJ = Math.round(31 * cJ),
                                eJ = Math.round(31 * ZJ),
                                XJ = Math.round(31 * FJ),
                                AJ = `${UJ}|${eJ}|${XJ}`;
                              let qJ = this.tints.get(JJ);
                              (!qJ || qJ.size > 2e3) && (qJ = new Map, this.tints.set(JJ, qJ));
                              let jJ = qJ.get(AJ);
                              if (jJ) return jJ;
                              jJ = document.createElement("canvas"), jJ.width = JJ.naturalWidth || 16, jJ.height = JJ.naturalHeight || 16;
                              const YJ = jJ.getContext("2d");
                              return YJ ? (YJ.imageSmoothingEnabled = !1, YJ.drawImage(JJ, 0, 0, jJ.width, jJ.height), YJ.globalCompositeOperation = "multiply", YJ.fillStyle = `rgb(${UJ/31*255}, ${eJ/31*255}, ${XJ/31*255})`, YJ.fillRect(0, 0, jJ.width, jJ.height), YJ.globalCompositeOperation = "destination-in", YJ.drawImage(JJ, 0, 0, jJ.width, jJ.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), qJ.set(AJ, jJ), jJ
                            }
                          }

                          function UU(JJ) {
                            let {
                              opts: cJ,
                              textureUrl: ZJ,
                              burst: UJ,
                              paused: eJ
                            } = JJ;
                            const XJ = (0, FJ.useRef)(null),
                              AJ = (0, FJ.useRef)(cJ);
                            AJ.current = cJ;
                            const qJ = (0, FJ.useRef)(eJ);
                            qJ.current = eJ;
                            const jJ = (0, FJ.useRef)(null),
                              YJ = (0, FJ.useRef)(null),
                              hJ = (0, FJ.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(JJ) {
                                let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const ZJ = [-.5, -.5, -.5],
                                  FJ = [.5, .5, .5];
                                let UJ = .5;
                                for (let eJ = 0; eJ < 40; eJ++) {
                                  const eJ = iZ(JJ, ZJ, FJ, cJ),
                                    XJ = Math.max(eJ.life / 30, .001);
                                  for (; aZ(eJ, JJ.gravity, XJ);) UJ = Math.max(UJ, Math.hypot(eJ.pos[0], eJ.pos[1], eJ.pos[2]) + eJ.size / 2)
                                }
                                return UJ
                              }(cJ)))), [cJ]),
                              DJ = (0, FJ.useRef)(hJ);
                            return DJ.current = hJ, (0, FJ.useEffect)((() => {
                              if (jJ.current = null, !ZJ) return;
                              const JJ = new Image;
                              let cJ = !1;
                              return JJ.onload = () => {
                                cJ || (jJ.current = JJ)
                              }, JJ.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${ZJ}`)
                              }, JJ.src = ZJ, () => {
                                cJ = !0
                              }
                            }), [ZJ]), (0, FJ.useEffect)((() => {
                              var JJ;
                              null === (JJ = YJ.current) || void 0 === JJ || JJ.call(YJ)
                            }), [cJ, UJ]), (0, FJ.useEffect)((() => {
                              const JJ = XJ.current,
                                cJ = null === JJ || void 0 === JJ ? void 0 : JJ.getContext("2d");
                              if (!JJ || !cJ) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const ZJ = new FU;
                              let FJ = [],
                                UJ = 0,
                                eJ = -.7,
                                hJ = DJ.current,
                                sJ = performance.now(),
                                nJ = 0,
                                GJ = !0,
                                fJ = null;
                              const xJ = () => {
                                const JJ = AJ.current,
                                  cJ = Math.min(400, Math.max(0, Math.ceil(JJ.manualEmitCount)));
                                FJ = [];
                                for (let ZJ = 0; ZJ < cJ; ZJ++) FJ.push(iZ(JJ, JU, cU, Math.random));
                                UJ = 0
                              };
                              YJ.current = xJ, xJ();
                              const rJ = XJ => {
                                nJ = requestAnimationFrame(rJ);
                                const YJ = Math.min(.05, (XJ - sJ) / 1e3);
                                if (sJ = XJ, !GJ) return;
                                const vJ = window.devicePixelRatio || 1,
                                  mJ = Math.round(JJ.clientWidth * vJ),
                                  QJ = Math.round(JJ.clientHeight * vJ);
                                if (0 === mJ || 0 === QJ) return;
                                JJ.width === mJ && JJ.height === QJ || (JJ.width = mJ, JJ.height = QJ);
                                const EJ = AJ.current;
                                null === fJ && (eJ += .18 * YJ), hJ += (DJ.current - hJ) * Math.min(1, 4 * YJ);
                                const VJ = .6 * YJ;
                                FJ = FJ.filter((JJ => aZ(JJ, EJ.gravity, VJ))), 0 !== FJ.length || qJ.current || (UJ += YJ, UJ > .6 && xJ());
                                const KJ = function(JJ, cJ, ZJ, FJ) {
                                  const UJ = 3.2 * FJ,
                                    eJ = .44 * Math.min(JJ, cJ) * UJ / FJ,
                                    XJ = Math.cos(ZJ),
                                    AJ = Math.sin(ZJ),
                                    qJ = Math.cos(.42),
                                    jJ = Math.sin(.42);
                                  return (ZJ, FJ, YJ) => {
                                    const hJ = ZJ * AJ + YJ * XJ,
                                      DJ = UJ - (FJ * jJ + hJ * qJ);
                                    if (DJ < .05) return null;
                                    const sJ = eJ / DJ;
                                    return {
                                      x: JJ / 2 + (ZJ * XJ - YJ * AJ) * sJ,
                                      y: cJ / 2 - (FJ * qJ - hJ * jJ) * sJ,
                                      scale: sJ,
                                      depth: DJ
                                    }
                                  }
                                }(mJ, QJ, eJ, hJ);
                                ! function(JJ, cJ, ZJ, FJ, UJ) {
                                  const eJ = JJ.createLinearGradient(0, 0, 0, ZJ);
                                  eJ.addColorStop(0, "#23262d"), eJ.addColorStop(1, "#16181c"), JJ.globalCompositeOperation = "source-over", JJ.globalAlpha = 1, JJ.fillStyle = eJ, JJ.fillRect(0, 0, cJ, ZJ);
                                  const XJ = (cJ, ZJ) => {
                                      const UJ = FJ(cJ[0], cJ[1], cJ[2]),
                                        eJ = FJ(ZJ[0], ZJ[1], ZJ[2]);
                                      UJ && eJ && (JJ.beginPath(), JJ.moveTo(UJ.x, UJ.y), JJ.lineTo(eJ.x, eJ.y), JJ.stroke())
                                    },
                                    AJ = Math.ceil(UJ) + 1,
                                    qJ = JU[1];
                                  JJ.lineWidth = 1, JJ.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let jJ = -AJ; jJ <= AJ; jJ++) XJ([jJ + .5, qJ, .5 - AJ], [jJ + .5, qJ, AJ + .5]), XJ([.5 - AJ, qJ, jJ + .5], [AJ + .5, qJ, jJ + .5]);
                                  JJ.strokeStyle = "rgba(255, 255, 255, 0.28)", JJ.setLineDash([4, 4]);
                                  for (const jJ of ZU)
                                    for (const JJ of ZU) {
                                      const cJ = [0, 1, 2].filter((cJ => jJ[cJ] !== JJ[cJ]));
                                      1 === cJ.length && jJ[cJ[0]] < JJ[cJ[0]] && XJ(jJ, JJ)
                                    }
                                  JJ.setLineDash([])
                                }(cJ, mJ, QJ, KJ, hJ);
                                const yJ = jJ.current,
                                  SJ = FJ.map((JJ => ({
                                    particle: JJ,
                                    at: KJ(JJ.pos[0], JJ.pos[1], JJ.pos[2])
                                  }))).filter((JJ => null !== JJ.at)).sort(((JJ, cJ) => cJ.at.depth - JJ.at.depth));
                                cJ.imageSmoothingEnabled = !1;
                                for (const JJ of function(JJ) {
                                    switch (JJ) {
                                      case dZ.g.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case dZ.g.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case dZ.g.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case dZ.g.MultiplyAdd:
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
                                  }(EJ.blendMode)) {
                                  cJ.globalCompositeOperation = JJ.operation;
                                  for (const {
                                      particle: FJ,
                                      at: UJ
                                    }
                                    of SJ) {
                                    const [eJ, XJ, AJ, qJ] = LZ(FJ), jJ = Math.max(1, FJ.size * UJ.scale);
                                    cJ.globalAlpha = JJ.usesAlpha ? Math.min(1, Math.max(0, qJ)) : 1, yJ ? cJ.drawImage(ZJ.get(yJ, eJ, XJ, AJ), UJ.x - jJ / 2, UJ.y - jJ / 2, jJ, jJ) : (cJ.fillStyle = `rgb(${255*eJ}, ${255*XJ}, ${255*AJ})`, cJ.fillRect(UJ.x - jJ / 2, UJ.y - jJ / 2, jJ, jJ))
                                  }
                                }
                                cJ.globalCompositeOperation = "source-over", cJ.globalAlpha = 1
                              };
                              nJ = requestAnimationFrame(rJ);
                              const vJ = new IntersectionObserver((JJ => {
                                let [cJ] = JJ;
                                GJ = cJ.isIntersecting
                              }));
                              vJ.observe(JJ);
                              const mJ = cJ => {
                                  fJ = cJ.clientX, JJ.setPointerCapture(cJ.pointerId)
                                },
                                QJ = JJ => {
                                  null !== fJ && (eJ += .01 * (JJ.clientX - fJ), fJ = JJ.clientX)
                                },
                                EJ = () => {
                                  fJ = null
                                };
                              return JJ.addEventListener("pointerdown", mJ), JJ.addEventListener("pointermove", QJ), JJ.addEventListener("pointerup", EJ), JJ.addEventListener("pointercancel", EJ), () => {
                                cancelAnimationFrame(nJ), vJ.disconnect(), YJ.current = null, JJ.removeEventListener("pointerdown", mJ), JJ.removeEventListener("pointermove", QJ), JJ.removeEventListener("pointerup", EJ), JJ.removeEventListener("pointercancel", EJ)
                              }
                            }), []), (0, nJ.jsx)("canvas", {
                              ref: XJ,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${cJ.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const eU = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            XU = [{
                              mode: dZ.g.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: dZ.g.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: dZ.g.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: dZ.g.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: dZ.g.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            AU = (0, FJ.forwardRef)((function(JJ, cJ) {
                              var ZJ, UJ;
                              let {
                                textures: XJ
                              } = JJ;
                              const AJ = vF(),
                                qJ = (0, FJ.useRef)(null),
                                [jJ, YJ] = (0, FJ.useState)(NZ),
                                [hJ, DJ] = (0, FJ.useState)("example"),
                                [sJ, GJ] = (0, FJ.useState)(0),
                                [xJ, rJ] = (0, FJ.useState)(!1),
                                mJ = JJ => {
                                  const cJ = "example" === JJ ? NZ : zZ(JJ);
                                  cJ && (YJ(cJ), DJ(JJ))
                                };
                              (0, FJ.useImperativeHandle)(cJ, (() => ({
                                preview: JJ => {
                                  var cJ;
                                  mJ(JJ), null === (cJ = qJ.current) || void 0 === cJ || cJ.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const QJ = JJ => {
                                  YJ({
                                    ...jJ,
                                    ...JJ
                                  }), DJ(null)
                                },
                                EJ = function(JJ, cJ) {
                                  if (null !== cJ) return `${lZ}    presetId: "${cJ}",\n${JF}\n})`;
                                  const ZJ = JJ.velocityGradients.map((JJ => `        {\n            timeFraction: ${BZ(JJ.timeFraction)},\n            factor: ${BZ(JJ.factor)},\n            factor2: ${BZ(JJ.factor2)},\n        },`)),
                                    FJ = [`    dir1: ${tZ(JJ.dir1)},`, `    dir2: ${tZ(JJ.dir2)},`, JF, `    texture: "${JJ.texture}",`, `    minLifeTime: ${BZ(JJ.minLifeTime)},`, `    maxLifeTime: ${BZ(JJ.maxLifeTime)},`, `    minEmitPower: ${BZ(JJ.minEmitPower)},`, `    maxEmitPower: ${BZ(JJ.maxEmitPower)},`, `    minSize: ${BZ(JJ.minSize)},`, `    maxSize: ${BZ(JJ.maxSize)},`, `    manualEmitCount: ${BZ(JJ.manualEmitCount)},`, `    gravity: ${tZ(JJ.gravity)},`, `    colorGradients: ${oZ(JJ.colorGradients,"    ")},`, `    velocityGradients: ${ZJ.length>0?`[\n${ZJ.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${BZ(JJ.blendMode)},`];
                                  return void 0 !== JJ.hideDist && FJ.push(`    hideDist: ${BZ(JJ.hideDist)},`), `${lZ}${FJ.join("\n")}\n})`
                                }(jJ, null === hJ || "example" === hJ ? null : hJ),
                                KJ = XJ.includes(jJ.texture) ? XJ : [...XJ, jJ.texture];
                              return (0, nJ.jsxs)("section", {
                                ref: qJ,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, nJ.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, nJ.jsxs)("div", {
                                    children: [(0, nJ.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, nJ.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, nJ.jsx)(vJ, {
                                    text: EJ,
                                    label: "Copy code"
                                  })]
                                }), (0, nJ.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, nJ.jsx)("button", {
                                    type: "button",
                                    className: eJ()("DocsVariantChip", {
                                      Active: "example" === hJ
                                    }),
                                    onClick: () => {
                                      mJ("example")
                                    },
                                    children: "Example"
                                  }), eU.filter((JJ => null !== zZ(JJ))).map((JJ => (0, nJ.jsx)("button", {
                                    type: "button",
                                    className: eJ()("DocsVariantChip", {
                                      Active: hJ === JJ
                                    }),
                                    onClick: () => {
                                      mJ(JJ)
                                    },
                                    children: JJ
                                  }, JJ))), (0, nJ.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== hJ && void 0 !== hJ ? hJ : "custom",
                                    "aria-label": "Preset",
                                    onChange: JJ => {
                                      mJ(JJ.target.value)
                                    },
                                    children: [(0, nJ.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === hJ && (0, nJ.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), pZ.d.map((JJ => (0, nJ.jsx)("option", {
                                      value: JJ,
                                      children: JJ
                                    }, JJ)))]
                                  })]
                                }), (0, nJ.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, nJ.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, nJ.jsx)(UU, {
                                      opts: jJ,
                                      textureUrl: null !== (ZJ = null === AJ || void 0 === AJ ? void 0 : AJ.getParticleTextureUrl(jJ.texture)) && void 0 !== ZJ ? ZJ : null,
                                      burst: sJ,
                                      paused: xJ
                                    }), (0, nJ.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, nJ.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          GJ(sJ + 1)
                                        },
                                        children: [(0, nJ.jsx)(fJ, {
                                          name: "replay"
                                        }), (0, nJ.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, nJ.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": xJ,
                                        onClick: () => {
                                          rJ(!xJ)
                                        },
                                        children: [(0, nJ.jsx)(fJ, {
                                          name: xJ ? "play" : "pause"
                                        }), (0, nJ.jsx)("span", {
                                          children: xJ ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, nJ.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, nJ.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, nJ.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, nJ.jsx)("span", {
                                          children: "Texture"
                                        }), (0, nJ.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: jJ.texture
                                        })]
                                      }), (0, nJ.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: KJ.map((JJ => {
                                          var cJ;
                                          const ZJ = null !== (cJ = null === AJ || void 0 === AJ ? void 0 : AJ.getParticleTextureUrl(JJ)) && void 0 !== cJ ? cJ : null;
                                          return (0, nJ.jsx)("button", {
                                            type: "button",
                                            className: eJ()("DocsParticleTexture", {
                                              Active: jJ.texture === JJ
                                            }),
                                            title: JJ,
                                            "aria-label": JJ,
                                            "aria-pressed": jJ.texture === JJ,
                                            onClick: () => {
                                              QJ({
                                                texture: JJ
                                              })
                                            },
                                            children: ZJ ? (0, nJ.jsx)("img", {
                                              src: ZJ,
                                              alt: ""
                                            }) : (0, nJ.jsx)(fJ, {
                                              name: "image"
                                            })
                                          }, JJ)
                                        }))
                                      })]
                                    }), (0, nJ.jsx)(oF, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: jJ.manualEmitCount,
                                      onChange: JJ => {
                                        QJ({
                                          manualEmitCount: JJ
                                        })
                                      }
                                    }), (0, nJ.jsx)(tF, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: jJ.minLifeTime,
                                      high: jJ.maxLifeTime,
                                      onChange: (JJ, cJ) => {
                                        QJ({
                                          minLifeTime: JJ,
                                          maxLifeTime: cJ
                                        })
                                      }
                                    }), (0, nJ.jsx)(tF, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: jJ.minEmitPower,
                                      high: jJ.maxEmitPower,
                                      onChange: (JJ, cJ) => {
                                        QJ({
                                          minEmitPower: JJ,
                                          maxEmitPower: cJ
                                        })
                                      }
                                    }), (0, nJ.jsx)(tF, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: jJ.minSize,
                                      high: jJ.maxSize,
                                      onChange: (JJ, cJ) => {
                                        QJ({
                                          minSize: JJ,
                                          maxSize: cJ
                                        })
                                      }
                                    }), (0, nJ.jsx)(oF, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (UJ = jJ.gravity[1]) && void 0 !== UJ ? UJ : 0,
                                      onChange: JJ => {
                                        var cJ, ZJ;
                                        QJ({
                                          gravity: [null !== (cJ = jJ.gravity[0]) && void 0 !== cJ ? cJ : 0, JJ, null !== (ZJ = jJ.gravity[2]) && void 0 !== ZJ ? ZJ : 0]
                                        })
                                      }
                                    }), (0, nJ.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, nJ.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, nJ.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, nJ.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: jJ.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: JJ => {
                                          QJ({
                                            blendMode: Number(JJ.target.value)
                                          })
                                        },
                                        children: XU.map((JJ => {
                                          let {
                                            mode: cJ,
                                            label: ZJ
                                          } = JJ;
                                          return (0, nJ.jsx)("option", {
                                            value: cJ,
                                            children: ZJ
                                          }, cJ)
                                        }))
                                      })]
                                    }), (0, nJ.jsx)(lF, {
                                      opts: jJ,
                                      onChange: JJ => {
                                        QJ({
                                          colorGradients: JJ
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, nJ.jsx)(VJ, {
                                  code: EJ,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var qU = ZJ(3889),
                            jU = ZJ(1675);

                          function YU(JJ, cJ) {
                            return JJ ? qU.c.includes(cJ) ? JJ.getIngameIconUrl(cJ) : JJ.getItemIconUrl(cJ) : null
                          }

                          function hU(JJ) {
                            var cJ, ZJ, FJ;
                            let {
                              part: UJ,
                              assets: XJ
                            } = JJ;
                            const AJ = YU(XJ, UJ.icon),
                              qJ = null !== (cJ = null === (ZJ = UJ.style) || void 0 === ZJ ? void 0 : ZJ.fontSize) && void 0 !== cJ ? cJ : "1.8em",
                              jJ = (0, pc.Lb)(UJ.style);
                            return (0, nJ.jsxs)("span", {
                              className: eJ()("DocsBloxdTextIcon", {
                                Missing: !AJ
                              }),
                              style: {
                                width: qJ,
                                height: qJ,
                                opacity: null === (FJ = UJ.style) || void 0 === FJ ? void 0 : FJ.opacity
                              },
                              title: AJ ? void 0 : `No Bloxd icon, item or block is called "${UJ.icon}"`,
                              children: [AJ && jJ && (0, nJ.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: jJ,
                                  maskImage: `url("${AJ}")`,
                                  WebkitMaskImage: `url("${AJ}")`
                                }
                              }), AJ ? (0, nJ.jsx)("img", {
                                src: AJ,
                                alt: "",
                                className: eJ()({
                                  Tinted: jJ
                                })
                              }) : (0, nJ.jsx)(fJ, {
                                name: "image"
                              })]
                            })
                          }

                          function DU(JJ) {
                            let {
                              parts: cJ,
                              className: ZJ
                            } = JJ;
                            const FJ = vF(),
                              UJ = [];
                            let XJ = [];
                            const AJ = JJ => {
                              XJ.length > 0 && (UJ.push((0, nJ.jsx)(jU.d, {
                                text: XJ
                              }, `run-${JJ}`)), XJ = [])
                            };
                            return cJ.forEach(((JJ, cJ) => {
                              "icon" !== Tc(JJ) || zc(JJ.icon) ? XJ.push(JJ) : (AJ(cJ), UJ.push((0, nJ.jsx)(hU, {
                                part: JJ,
                                assets: FJ
                              }, `icon-${cJ}`)))
                            })), AJ(cJ.length), (0, nJ.jsx)("div", {
                              className: eJ()("DocsStyledTextPreview", ZJ),
                              children: UJ
                            })
                          }
                          const sU = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let nU = null;

                          function GU(JJ) {
                            if (nU ??= document.createElement("canvas").getContext("2d"), !nU) return "#000000";
                            nU.fillStyle = "#000000", nU.fillStyle = JJ;
                            const cJ = nU.fillStyle;
                            return cJ.startsWith("#") ? cJ : "#000000"
                          }

                          function fU(JJ) {
                            let {
                              value: cJ,
                              label: ZJ,
                              onChange: FJ
                            } = JJ;
                            return (0, nJ.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, nJ.jsx)("input", {
                                type: "color",
                                value: GU(cJ),
                                "aria-label": `${ZJ} picker`,
                                onChange: JJ => {
                                  FJ(JJ.target.value)
                                }
                              }), (0, nJ.jsx)("input", {
                                type: "text",
                                value: cJ,
                                placeholder: "#ffb914 or gold",
                                "aria-label": ZJ,
                                spellCheck: !1,
                                onChange: JJ => {
                                  FJ(JJ.target.value)
                                }
                              })]
                            })
                          }

                          function xU(JJ) {
                            let {
                              value: cJ,
                              fontAwesomeIcons: ZJ,
                              onChange: UJ
                            } = JJ;
                            const XJ = vF(),
                              [AJ, qJ] = (0, FJ.useState)(zc(cJ) ? "fontAwesome" : "bloxd"),
                              [jJ, YJ] = (0, FJ.useState)(""),
                              hJ = jJ.trim().toLowerCase(),
                              DJ = "bloxd" === AJ ? qU.c : ZJ,
                              sJ = hJ ? DJ.filter((JJ => JJ.toLowerCase().includes(hJ))) : DJ;
                            return (0, nJ.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, nJ.jsx)("input", {
                                type: "text",
                                value: cJ,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: JJ => {
                                  UJ(JJ.target.value)
                                }
                              }), (0, nJ.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, nJ.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((JJ => (0, nJ.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": AJ === JJ,
                                    className: eJ()("DocsVariantChip", {
                                      Active: AJ === JJ
                                    }),
                                    onClick: () => {
                                      qJ(JJ)
                                    },
                                    children: "bloxd" === JJ ? `Bloxd icons (${qU.c.length})` : `Font Awesome (${ZJ.length})`
                                  }, JJ))), (0, nJ.jsx)("input", {
                                    type: "search",
                                    value: jJ,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: JJ => {
                                      YJ(JJ.target.value)
                                    }
                                  })
                                ]
                              }), (0, nJ.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [sJ.map((JJ => {
                                  const ZJ = "bloxd" === AJ ? YU(XJ, JJ) : null;
                                  return (0, nJ.jsx)("button", {
                                    type: "button",
                                    title: JJ,
                                    "aria-label": JJ,
                                    "aria-pressed": JJ === cJ,
                                    className: eJ()("DocsIconPickerOption", {
                                      Active: JJ === cJ
                                    }),
                                    onClick: () => {
                                      UJ(JJ)
                                    },
                                    children: "fontAwesome" === AJ ? (0, nJ.jsx)(mZ.c, {
                                      name: JJ
                                    }) : ZJ ? (0, nJ.jsx)("img", {
                                      src: ZJ,
                                      alt: ""
                                    }) : (0, nJ.jsx)(fJ, {
                                      name: "image"
                                    })
                                  }, JJ)
                                })), 0 === sJ.length && (0, nJ.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", jJ, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function rU(JJ) {
                            let {
                              property: cJ,
                              value: ZJ,
                              fontAwesomeIcons: FJ,
                              onChange: UJ
                            } = JJ;
                            const {
                              field: eJ,
                              label: XJ
                            } = cJ, AJ = JJ => "" !== JJ || cJ.isRequired ? JJ : void 0;
                            switch (eJ.kind) {
                              case "text":
                                return eJ.multiline ? (0, nJ.jsx)("textarea", {
                                  value: String(null !== ZJ && void 0 !== ZJ ? ZJ : ""),
                                  rows: 2,
                                  "aria-label": XJ,
                                  onChange: JJ => {
                                    UJ(JJ.target.value)
                                  }
                                }) : (0, nJ.jsx)("input", {
                                  type: "text",
                                  value: String(null !== ZJ && void 0 !== ZJ ? ZJ : ""),
                                  "aria-label": XJ,
                                  onChange: JJ => {
                                    UJ(AJ(JJ.target.value))
                                  }
                                });
                              case "size":
                                return (0, nJ.jsx)("input", {
                                  type: "text",
                                  value: String(null !== ZJ && void 0 !== ZJ ? ZJ : ""),
                                  placeholder: cJ.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": XJ,
                                  spellCheck: !1,
                                  onChange: JJ => {
                                    UJ(AJ(JJ.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, nJ.jsx)(fU, {
                                  value: String(null !== ZJ && void 0 !== ZJ ? ZJ : ""),
                                  label: XJ,
                                  onChange: JJ => {
                                    UJ(AJ(JJ))
                                  }
                                });
                              case "colours": {
                                const JJ = Array.isArray(ZJ) ? ZJ : [],
                                  cJ = JJ => {
                                    UJ(JJ.length > 0 ? JJ : void 0)
                                  };
                                return (0, nJ.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [JJ.map(((ZJ, FJ) => (0, nJ.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, nJ.jsx)(fU, {
                                      value: ZJ,
                                      label: `${XJ} ${FJ+1}`,
                                      onChange: ZJ => {
                                        cJ(JJ.map(((JJ, cJ) => cJ === FJ ? ZJ : JJ)))
                                      }
                                    }), (0, nJ.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${FJ+1}`,
                                      onClick: () => {
                                        cJ(JJ.filter(((JJ, cJ) => cJ !== FJ)))
                                      },
                                      children: (0, nJ.jsx)(fJ, {
                                        name: "cross"
                                      })
                                    })]
                                  }, FJ))), (0, nJ.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var ZJ;
                                      cJ([...JJ, null !== (ZJ = JJ.at(-1)) && void 0 !== ZJ ? ZJ : "#ffffff"])
                                    },
                                    children: [(0, nJ.jsx)(fJ, {
                                      name: "plus"
                                    }), 0 === JJ.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var qJ;
                                const JJ = "number" === typeof ZJ ? ZJ : Number(null !== (qJ = cJ.defaultText) && void 0 !== qJ ? qJ : 0);
                                return (0, nJ.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, nJ.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: JJ,
                                    "aria-label": XJ,
                                    onChange: JJ => {
                                      UJ(Number(JJ.target.value))
                                    }
                                  }), (0, nJ.jsx)("output", {
                                    children: JJ.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, nJ.jsxs)("select", {
                                  value: String(null !== ZJ && void 0 !== ZJ ? ZJ : ""),
                                  "aria-label": XJ,
                                  onChange: JJ => {
                                    UJ(AJ(JJ.target.value))
                                  },
                                  children: [!cJ.isRequired && (0, nJ.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", cJ.defaultText, ")"]
                                  }), eJ.options.map((JJ => (0, nJ.jsx)("option", {
                                    value: JJ,
                                    children: JJ
                                  }, JJ)))]
                                });
                              case "icon":
                                return (0, nJ.jsx)(xU, {
                                  value: String(null !== ZJ && void 0 !== ZJ ? ZJ : ""),
                                  fontAwesomeIcons: FJ,
                                  onChange: UJ
                                })
                            }
                          }

                          function vU(JJ) {
                            let cJ;
                            try {
                              cJ = JSON.parse(JJ)
                            } catch (ZJ) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${ZJ.message}`
                              }
                            }
                            return ZZ(cJ) ? {
                              part: cJ,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function mU(JJ) {
                            let {
                              parts: cJ,
                              index: ZJ,
                              fontAwesomeIcons: UJ,
                              onChange: eJ,
                              jK: XJ,
                              onClose: AJ
                            } = JJ;
                            const qJ = (0, FJ.useContext)(nc),
                              YJ = (0, FJ.useRef)(null),
                              hJ = cJ[ZJ],
                              DJ = Tc(hJ),
                              [sJ, GJ] = (0, FJ.useState)((() => JSON.stringify(hJ, null, 2))),
                              xJ = (0, FJ.useMemo)((() => "other" === DJ ? vU(sJ).error : null), [DJ, sJ]);
                            (0, FJ.useEffect)((() => {
                              var JJ;
                              null === (JJ = YJ.current) || void 0 === JJ || JJ.focus()
                            }), []);
                            const rJ = (0, nJ.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: JJ => {
                                JJ.target === JJ.currentTarget && AJ()
                              },
                              children: (0, nJ.jsxs)("div", {
                                ref: YJ,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${ZJ+1}: ${Nc[DJ]}`,
                                tabIndex: -1,
                                onKeyDown: JJ => {
                                  "Escape" === JJ.key ? (JJ.stopPropagation(), AJ()) : "Tab" === JJ.key && YJ.current && function(JJ, cJ) {
                                    const ZJ = Array.from(JJ.querySelectorAll(Mc)),
                                      FJ = ZJ[0],
                                      UJ = ZJ.at(-1);
                                    if (!FJ || !UJ) return;
                                    const eJ = document.activeElement;
                                    !cJ.shiftKey || eJ !== FJ && eJ !== JJ ? cJ.shiftKey || eJ !== UJ || (cJ.preventDefault(), FJ.focus()) : (cJ.preventDefault(), UJ.focus())
                                  }(YJ.current, JJ)
                                },
                                children: [(0, nJ.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, nJ.jsxs)("div", {
                                    children: [(0, nJ.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", ZJ + 1]
                                    }), (0, nJ.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: Nc[DJ]
                                    })]
                                  }), (0, nJ.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: AJ,
                                    children: (0, nJ.jsx)(fJ, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, nJ.jsx)(DU, {
                                  parts: cJ,
                                  className: "DocsTextDialogPreview"
                                }), (0, nJ.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === DJ ? (0, nJ.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, nJ.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, nJ.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: sJ,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: JJ => {
                                        GJ(JJ.target.value);
                                        const cJ = vU(JJ.target.value);
                                        null !== cJ.part && eJ(cJ.part)
                                      }
                                    }), xJ && (0, nJ.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: xJ
                                    })]
                                  }) : uc[DJ].map((JJ => {
                                    const cJ = Rc(hJ, JJ.path),
                                      ZJ = JJ.isRequired ? JSON.stringify(ac(hJ, JJ.path)) === JSON.stringify(hJ) : void 0 === cJ;
                                    return (0, nJ.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, nJ.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, nJ.jsx)("span", {
                                          children: JJ.label
                                        }), (0, nJ.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: ZJ,
                                          "aria-label": `Reset ${JJ.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            eJ(ac(hJ, JJ.path))
                                          },
                                          children: [(0, nJ.jsx)(fJ, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, nJ.jsx)(rU, {
                                        property: JJ,
                                        value: cJ,
                                        fontAwesomeIcons: UJ,
                                        onChange: cJ => {
                                          eJ(Lc(hJ, JJ.path, cJ))
                                        }
                                      }), !JJ.isRequired && (0, nJ.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", JJ.defaultText]
                                      })]
                                    }, JJ.path.join("."))
                                  }))
                                }), (0, nJ.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, nJ.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: XJ,
                                    children: [(0, nJ.jsx)(fJ, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, nJ.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: AJ,
                                    children: "Done"
                                  })]
                                }), (0, nJ.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: sU.map((JJ => (0, nJ.jsx)("option", {
                                    value: JJ
                                  }, JJ)))
                                })]
                              })
                            });
                            return qJ ? (0, jJ.createPortal)(rJ, qJ) : rJ
                          }
                          const QU = [{
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
                            EU = Object.keys(Oc);

                          function VU(JJ) {
                            let {
                              fontAwesomeIcons: cJ
                            } = JJ;
                            const [ZJ, UJ] = (0, FJ.useState)(QU[0].parts), [XJ, AJ] = (0, FJ.useState)((() => lc(QU[0].parts))), [qJ, jJ] = (0, FJ.useState)(null), [YJ, hJ] = (0, FJ.useState)(!1), [DJ, sJ] = (0, FJ.useState)(null), [GJ, xJ] = (0, FJ.useState)(!1), [rJ, vJ] = (0, FJ.useState)(null), mJ = (0, FJ.useRef)(null), QJ = lc(ZJ);
                            (0, FJ.useLayoutEffect)((() => {
                              var JJ;
                              if (!rJ) return;
                              const cJ = JJ => {
                                  var cJ;
                                  return null === (cJ = mJ.current) || void 0 === cJ ? void 0 : cJ.querySelector(`[data-focus-key="${JJ}"]`)
                                },
                                ZJ = cJ(rJ.key);
                              null === (JJ = ZJ && !ZJ.disabled ? ZJ : cJ(rJ.fallback)) || void 0 === JJ || JJ.focus(), vJ(null)
                            }), [rJ]);
                            const EJ = JJ => {
                                UJ(JJ), AJ(lc(JJ)), jJ(null)
                              },
                              KJ = JJ => {
                                EJ(ZJ.filter(((cJ, ZJ) => ZJ !== JJ))), vJ({
                                  key: `edit-${Math.min(JJ,ZJ.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              yJ = (JJ, cJ) => {
                                const FJ = [...ZJ],
                                  [UJ] = FJ.splice(JJ, 1);
                                FJ.splice(JJ + cJ, 0, UJ), EJ(FJ);
                                vJ({
                                  key: `${cJ<0?"up":"down"}-${JJ+cJ}`,
                                  fallback: `edit-${JJ+cJ}`
                                })
                              };
                            return (0, nJ.jsxs)("section", {
                              ref: mJ,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, nJ.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, nJ.jsxs)("div", {
                                  children: [(0, nJ.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, nJ.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, nJ.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: QU.map((JJ => (0, nJ.jsx)("button", {
                                  type: "button",
                                  className: eJ()("DocsVariantChip", {
                                    Active: QJ === lc(JJ.parts)
                                  }),
                                  onClick: () => {
                                    EJ(JJ.parts)
                                  },
                                  children: JJ.label
                                }, JJ.label)))
                              }), (0, nJ.jsx)(DU, {
                                parts: ZJ,
                                className: "DocsTextEditorPreview"
                              }), (0, nJ.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, nJ.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, nJ.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, nJ.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [ZJ.map(((JJ, cJ) => {
                                      const FJ = Tc(JJ);
                                      return (0, nJ.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, nJ.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${cJ}`,
                                          "aria-label": `Edit part ${cJ+1}, ${Nc[FJ]}`,
                                          onClick: () => {
                                            sJ(cJ)
                                          },
                                          children: [(0, nJ.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: Nc[FJ]
                                          }), (0, nJ.jsx)(DU, {
                                            parts: [JJ],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== FJ && (0, nJ.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: Bc(JJ)
                                          })]
                                        }), (0, nJ.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, nJ.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${cJ+1} up`,
                                            "data-focus-key": `up-${cJ}`,
                                            disabled: 0 === cJ,
                                            onClick: () => {
                                              yJ(cJ, -1)
                                            },
                                            children: (0, nJ.jsx)(fJ, {
                                              name: "chevron-up"
                                            })
                                          }), (0, nJ.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${cJ+1} down`,
                                            "data-focus-key": `down-${cJ}`,
                                            disabled: cJ === ZJ.length - 1,
                                            onClick: () => {
                                              yJ(cJ, 1)
                                            },
                                            children: (0, nJ.jsx)(fJ, {
                                              name: "chevron-down"
                                            })
                                          }), (0, nJ.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${cJ+1}`,
                                            onClick: () => {
                                              KJ(cJ)
                                            },
                                            children: (0, nJ.jsx)(fJ, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, cJ)
                                    })), 0 === ZJ.length && (0, nJ.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, nJ.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: JJ => {
                                      "Escape" === JJ.key && GJ && (JJ.stopPropagation(), xJ(!1), vJ({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, nJ.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": GJ,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        xJ(!GJ)
                                      },
                                      children: [(0, nJ.jsx)(fJ, {
                                        name: "plus"
                                      }), "Add a part", (0, nJ.jsx)(fJ, {
                                        name: GJ ? "chevron-up" : "chevron-down"
                                      })]
                                    }), GJ && (0, nJ.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: EU.map((JJ => (0, nJ.jsx)("li", {
                                        children: (0, nJ.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (JJ => {
                                              EJ([...ZJ, Oc[JJ]]), xJ(!1), sJ(ZJ.length)
                                            })(JJ)
                                          },
                                          children: Nc[JJ]
                                        })
                                      }, JJ)))
                                    })]
                                  })]
                                }), (0, nJ.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, nJ.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, nJ.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": YJ,
                                      onClick: () => {
                                        hJ(!YJ)
                                      },
                                      children: [(0, nJ.jsx)(fJ, {
                                        name: YJ ? "check" : "pencil"
                                      }), YJ ? "Done" : "Edit"]
                                    })]
                                  }), YJ ? (0, nJ.jsxs)(nJ.Fragment, {
                                    children: [(0, nJ.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: XJ,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: JJ => {
                                        AJ(JJ.target.value);
                                        const cJ = FZ(JJ.target.value);
                                        jJ(cJ.error), cJ.parts && UJ(cJ.parts)
                                      }
                                    }), qJ && (0, nJ.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: qJ
                                    })]
                                  }) : (0, nJ.jsx)(VJ, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${QJ})`
                                  })]
                                })]
                              }), null !== DJ && DJ < ZJ.length && (0, nJ.jsx)(mU, {
                                parts: ZJ,
                                index: DJ,
                                fontAwesomeIcons: cJ,
                                onChange: JJ => {
                                  ((JJ, cJ) => {
                                    EJ(ZJ.map(((ZJ, FJ) => FJ === JJ ? cJ : ZJ)))
                                  })(DJ, JJ)
                                },
                                jK: () => {
                                  KJ(DJ), sJ(null)
                                },
                                onClose: () => {
                                  sJ(null), vJ({
                                    key: `edit-${DJ}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var KU = ZJ(4245),
                            yU = ZJ(4225),
                            SU = ZJ(4242),
                            IU = ZJ(4254);
                          const MU = 40,
                            bU = 800,
                            wU = 150,
                            WU = 8e3,
                            gU = 2e3;

                          function HU(JJ, cJ) {
                            return 12 * Math.log2(cJ / JJ)
                          }

                          function PU(JJ, cJ) {
                            return Math.round(JJ * 2 ** (cJ / 12) * 10) / 10
                          }

                          function kU(JJ) {
                            return `${JJ} ms`
                          }

                          function pU(JJ) {
                            return `${JJ} st`
                          }
                          const dU = [{
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

                          function zU(JJ) {
                            let {
                              synth: cJ,
                              onChange: ZJ
                            } = JJ;
                            const FJ = (0, KU.h)(cJ);
                            return (0, nJ.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, nJ.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, nJ.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, nJ.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, nJ.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, nJ.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, nJ.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: KU.d.map((JJ => (0, nJ.jsx)("button", {
                                      type: "button",
                                      className: eJ()("DocsVariantChip", {
                                        Active: cJ.waveform === JJ
                                      }),
                                      "aria-pressed": cJ.waveform === JJ,
                                      onClick: () => {
                                        ZJ({
                                          waveform: JJ
                                        })
                                      },
                                      children: JJ
                                    }, JJ)))
                                  })]
                                }), (0, nJ.jsx)(oF, {
                                  label: "Pitch",
                                  min: 0,
                                  max: HU(MU, bU),
                                  step: .1,
                                  value: HU(MU, cJ.pitchHz),
                                  format: () => `${cJ.pitchHz} Hz`,
                                  onChange: JJ => {
                                    ZJ({
                                      pitchHz: PU(MU, JJ)
                                    })
                                  }
                                }), (0, nJ.jsx)(oF, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: cJ.syllableMs,
                                  format: kU,
                                  onChange: JJ => {
                                    ZJ({
                                      syllableMs: JJ
                                    })
                                  }
                                }), (0, nJ.jsx)(oF, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: cJ.volume,
                                  onChange: JJ => {
                                    ZJ({
                                      volume: JJ
                                    })
                                  }
                                })]
                              }), (0, nJ.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, nJ.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, nJ.jsx)(oF, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: cJ.durationMs,
                                  format: kU,
                                  onChange: JJ => {
                                    ZJ({
                                      durationMs: JJ
                                    })
                                  }
                                }), (0, nJ.jsx)(oF, {
                                  label: "Fade in",
                                  min: 0,
                                  max: FJ.durationMs,
                                  step: 1,
                                  value: FJ.attackMs,
                                  format: kU,
                                  onChange: JJ => {
                                    ZJ({
                                      attackMs: JJ
                                    })
                                  }
                                }), (0, nJ.jsx)(oF, {
                                  label: "Fade out",
                                  min: 0,
                                  max: FJ.durationMs - FJ.attackMs,
                                  step: 1,
                                  value: FJ.releaseMs,
                                  format: kU,
                                  onChange: JJ => {
                                    ZJ({
                                      releaseMs: JJ
                                    })
                                  }
                                }), (0, nJ.jsx)(oF, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: cJ.glideSemitones,
                                  format: pU,
                                  onChange: JJ => {
                                    ZJ({
                                      glideSemitones: JJ
                                    })
                                  }
                                }), (0, nJ.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, nJ.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== cJ.lowpassHz,
                                    onChange: JJ => {
                                      ZJ({
                                        lowpassHz: JJ.target.checked ? gU : null
                                      })
                                    }
                                  }), (0, nJ.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== cJ.lowpassHz && (0, nJ.jsx)(oF, {
                                  label: "Filter",
                                  min: 0,
                                  max: HU(wU, WU),
                                  step: .1,
                                  value: HU(wU, cJ.lowpassHz),
                                  format: () => `${cJ.lowpassHz} Hz`,
                                  onChange: JJ => {
                                    ZJ({
                                      lowpassHz: PU(wU, JJ)
                                    })
                                  }
                                })]
                              }), (0, nJ.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, nJ.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), dU.map((JJ => {
                                  let {
                                    key: FJ,
                                    label: UJ,
                                    max: eJ
                                  } = JJ;
                                  return (0, nJ.jsx)(oF, {
                                    label: UJ,
                                    min: 0,
                                    max: eJ,
                                    step: .1,
                                    value: cJ.intonation[FJ],
                                    format: pU,
                                    onChange: JJ => {
                                      ZJ({
                                        intonation: {
                                          ...cJ.intonation,
                                          [FJ]: JJ
                                        }
                                      })
                                    }
                                  }, FJ)
                                }))]
                              })]
                            })
                          }
                          const NU = Object.keys(KU.f),
                            OU = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function TU(JJ) {
                            var cJ;
                            const ZJ = JSON.stringify((0, KU.h)(JJ));
                            return null !== (cJ = NU.find((JJ => JSON.stringify((0, KU.h)(KU.f[JJ])) === ZJ))) && void 0 !== cJ ? cJ : null
                          }

                          function CU(JJ) {
                            let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof JJ || null === JJ) return JSON.stringify(JJ);
                            return `{\n${Object.entries(JJ).map((JJ=>{let[ZJ,FJ]=JJ;return`${cJ}    ${ZJ}: ${CU(FJ,`${cJ}    `)},`})).join("\n")}\n${cJ}}`
                          }

                          function uU(JJ, cJ, ZJ) {
                            const FJ = TU(JJ),
                              UJ = [`    line: ${JSON.stringify(cJ)},`];
                            return ZJ && UJ.push(`    speakerName: ${JSON.stringify(ZJ)},`), UJ.push("    voice,"), `const voice = ${FJ?JSON.stringify(FJ):CU((0,KU.h)(JJ))}\n\napi.setClientOption(playerId, "dialogue", {\n${UJ.join("\n")}\n})`
                          }
                          const iU = 400,
                            RU = 90;
                          let LU = null;

                          function aU(JJ, cJ, ZJ) {
                            return LU ??= new AudioContext, LU.resume(), (0, IU.c)(LU, LU.destination, JJ, cJ, ZJ, (() => {}))
                          }

                          function BU() {
                            const [JJ, cJ] = (0, FJ.useState)(KU.f.regular), [ZJ, UJ] = (0, FJ.useState)(OU[0]), [XJ, AJ] = (0, FJ.useState)("Innkeeper"), [qJ, jJ] = (0, FJ.useState)(0), YJ = YF((JJ => JJ.volume)), hJ = (0, FJ.useRef)(null), DJ = (0, FJ.useRef)(0), sJ = (0, FJ.useRef)(0), GJ = () => {
                              var JJ;
                              null === (JJ = hJ.current) || void 0 === JJ || JJ.call(hJ), hJ.current = null
                            };
                            (0, FJ.useEffect)((() => () => {
                              var JJ;
                              null === (JJ = hJ.current) || void 0 === JJ || JJ.call(hJ), window.clearTimeout(DJ.current)
                            }), []);
                            const xJ = (0, FJ.useMemo)((() => ({
                                line: ZJ,
                                speakerName: XJ || void 0,
                                voice: JJ
                              })), [ZJ, XJ, JJ]),
                              rJ = (0, FJ.useRef)(xJ);
                            rJ.current = xJ;
                            const mJ = TU(JJ),
                              QJ = JJ => {
                                window.clearTimeout(DJ.current), GJ();
                                const {
                                  plan: cJ,
                                  synth: ZJ
                                } = (0, SU.f)(JJ);
                                ZJ && (hJ.current = aU(ZJ, cJ.blips, YJ)), jJ((JJ => JJ + 1))
                              },
                              EJ = uU(JJ, ZJ, XJ);
                            return (0, nJ.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, nJ.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, nJ.jsxs)("div", {
                                  children: [(0, nJ.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, nJ.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, nJ.jsx)(vJ, {
                                  text: EJ,
                                  label: "Copy code"
                                })]
                              }), (0, nJ.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [NU.map((JJ => (0, nJ.jsx)("button", {
                                  type: "button",
                                  className: eJ()("DocsVariantChip", {
                                    Active: mJ === JJ
                                  }),
                                  "aria-pressed": mJ === JJ,
                                  onClick: () => {
                                    (JJ => {
                                      const ZJ = KU.f[JJ];
                                      cJ(ZJ), QJ({
                                        ...xJ,
                                        voice: ZJ
                                      })
                                    })(JJ)
                                  },
                                  children: JJ
                                }, JJ))), !mJ && (0, nJ.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, nJ.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, nJ.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, nJ.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, nJ.jsx)(yU.c, {
                                      display: xJ
                                    }, qJ)
                                  }), (0, nJ.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: JJ => {
                                      JJ.preventDefault(), QJ(xJ)
                                    },
                                    children: [(0, nJ.jsx)("input", {
                                      value: ZJ,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: JJ => {
                                        UJ(JJ.target.value)
                                      }
                                    }), (0, nJ.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, nJ.jsx)(fJ, {
                                        name: "play"
                                      }), (0, nJ.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, nJ.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: OU.map((JJ => (0, nJ.jsx)("button", {
                                      type: "button",
                                      className: eJ()("DocsVariantChip", {
                                        Active: ZJ === JJ
                                      }),
                                      onClick: () => {
                                        var cJ;
                                        UJ(cJ = JJ), QJ({
                                          ...xJ,
                                          line: cJ
                                        })
                                      },
                                      children: JJ
                                    }, JJ)))
                                  }), (0, nJ.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, nJ.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, nJ.jsx)("input", {
                                      value: XJ,
                                      placeholder: "No name",
                                      onChange: JJ => {
                                        AJ(JJ.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, nJ.jsx)(zU, {
                                  synth: JJ,
                                  onChange: ZJ => {
                                    const FJ = {
                                      ...JJ,
                                      ...ZJ
                                    };
                                    cJ(FJ);
                                    const UJ = {
                                        ...xJ,
                                        voice: FJ
                                      },
                                      eJ = performance.now();
                                    if (eJ - sJ.current >= RU) {
                                      sJ.current = eJ, GJ();
                                      const JJ = (0, SU.f)(UJ).plan.blips[0];
                                      JJ && (hJ.current = aU((0, KU.h)(FJ), [{
                                        ...JJ,
                                        atMs: 0
                                      }], YJ))
                                    }
                                    window.clearTimeout(DJ.current), DJ.current = window.setTimeout((() => {
                                      QJ(rJ.current)
                                    }), iU)
                                  }
                                })]
                              }), (0, nJ.jsx)(VJ, {
                                code: EJ,
                                lang: "ts"
                              })]
                            })
                          }
                          var tU = ZJ(4275);
                          const oU = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            lU = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            Je = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${lU}`, "g"), tU.m],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, tU.m]
                            ];

                          function ce(JJ) {
                            return `${JJ.pageId}#${JJ.anchor}`
                          }
                          let Ze, Fe, Ue;

                          function ee(JJ) {
                            const cJ = (0, KJ.i)(JJ),
                              ZJ = new Set;
                            for (const [, , FJ] of cJ.matchAll(KJ.e)) {
                              const JJ = FJ.startsWith("#") ? TJ(FJ) : null,
                                cJ = JJ ? ce({
                                  pageId: JJ.page.id,
                                  anchor: JJ.anchor
                                }) : null;
                              null !== cJ && (Ze || (Ze = new Set(kJ.flatMap((JJ => MJ(JJ.layout) ? NJ(JJ).sections.map((cJ => ce({
                                pageId: JJ.id,
                                anchor: cJ.heading.anchor
                              }))) : [])))), Ze).has(cJ) && ZJ.add(cJ)
                            }
                            for (const [, , FJ] of cJ.matchAll(oU)) {
                              const JJ = Dc(FJ);
                              JJ && ZJ.add(ce(JJ))
                            }
                            return ZJ
                          }

                          function Xe(JJ, cJ) {
                            const ZJ = new Set,
                              FJ = function(JJ) {
                                return JJ.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(JJ);
                            for (const [, UJ] of FJ.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) ZJ.add(UJ);
                            for (const [UJ, eJ] of Je)
                              for (const [, JJ] of(0, tU.h)(FJ, UJ, eJ)) cJ.has(JJ) && ZJ.add(JJ);
                            return ZJ
                          }

                          function Ae(JJ, cJ, ZJ, FJ) {
                            const UJ = JJ.get(cJ);
                            UJ ? !FJ && UJ.some((JJ => JJ.pageId === ZJ.pageId)) || UJ.push(ZJ) : JJ.set(cJ, [ZJ])
                          }
                          const qe = /^[A-Za-z_$][\w$]*$/;

                          function je(JJ) {
                            return qe.test(JJ.name) ? JJ.name : "options"
                          }

                          function Ye(JJ, cJ) {
                            const ZJ = JJ.params.map(je).join(", ");
                            return cJ ? `${JJ.name} = (${ZJ}) => {\n\t\n}` : `api.${JJ.name}(${ZJ})`
                          }

                          function he(JJ) {
                            let {
                              method: cJ,
                              isCallback: ZJ
                            } = JJ;
                            return (0, nJ.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, nJ.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [ZJ ? (0, nJ.jsxs)(nJ.Fragment, {
                                  children: [(0, nJ.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: cJ.name
                                  }), (0, nJ.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, nJ.jsxs)(nJ.Fragment, {
                                  children: [(0, nJ.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, nJ.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: cJ.name
                                  }), (0, nJ.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), cJ.params.map(((JJ, ZJ) => (0, nJ.jsxs)(FJ.Fragment, {
                                  children: [ZJ > 0 && (0, nJ.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, nJ.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${cJ.name}-${je(JJ)}`,
                                    children: JJ.name
                                  })]
                                }, JJ.name))), (0, nJ.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: ZJ ? ") => " : ")"
                                }), ZJ && !cJ.returns && (0, nJ.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), cJ.returns && cJ.returns.type && (0, nJ.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!ZJ && (0, nJ.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, nJ.jsx)(yc, {
                                  type: cJ.returns.type
                                })]
                              })]
                            })
                          }

                          function De(JJ) {
                            let {
                              title: cJ,
                              references: ZJ
                            } = JJ;
                            const UJ = (0, FJ.useContext)(sc);
                            return (0, nJ.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, nJ.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: cJ
                              }), ZJ.map((JJ => (0, nJ.jsx)(XJ.c, {
                                to: uJ(UJ, dJ(JJ.pageId), JJ.anchor),
                                children: JJ.label
                              }, `${JJ.pageId}#${JJ.anchor}`)))]
                            })
                          }

                          function se(JJ) {
                            var cJ, ZJ;
                            let {
                              pageId: FJ,
                              anchor: UJ
                            } = JJ;
                            const eJ = ce({
                                pageId: FJ,
                                anchor: UJ
                              }),
                              XJ = null !== (cJ = function() {
                                if (!Ue) {
                                  Ue = new Map;
                                  const FJ = new Set(kJ.filter((JJ => "callbacks" === JJ.layout)).flatMap((JJ => NJ(JJ).sections.map((JJ => JJ.heading.text)))));
                                  for (const UJ of kJ)
                                    if ("article" === UJ.layout || "snippets" === UJ.layout)
                                      for (const eJ of (0, KJ.y)(NJ(UJ)))
                                        for (const {
                                            code: XJ
                                          }
                                          of(0, KJ.l)(eJ.blocks))
                                          for (const AJ of Xe(XJ, FJ)) {
                                            const FJ = hc().get(AJ);
                                            if (FJ) {
                                              var JJ, cJ, ZJ;
                                              const XJ = {
                                                pageId: UJ.id,
                                                anchor: null !== (JJ = null === (cJ = eJ.heading) || void 0 === cJ ? void 0 : cJ.anchor) && void 0 !== JJ ? JJ : "",
                                                label: null !== (ZJ = UJ.navTitle) && void 0 !== ZJ ? ZJ : UJ.title
                                              };
                                              Ae(Ue, ce(FJ), XJ, !1)
                                            }
                                          }
                                }
                                return Ue
                              }().get(eJ)) && void 0 !== cJ ? cJ : [],
                              AJ = null !== (ZJ = function() {
                                if (!Fe) {
                                  Fe = new Map;
                                  const JJ = dJ("changelog");
                                  for (const cJ of NJ(JJ).sections) {
                                    const ZJ = new Set(cJ.blocks.flatMap((JJ => [...ee(JJ)])));
                                    for (const FJ of ZJ) {
                                      const ZJ = {
                                        pageId: JJ.id,
                                        anchor: cJ.heading.anchor,
                                        label: cJ.heading.text
                                      };
                                      Ae(Fe, FJ, ZJ, !0)
                                    }
                                  }
                                }
                                return Fe
                              }().get(eJ)) && void 0 !== ZJ ? ZJ : [];
                            return 0 === XJ.length && 0 === AJ.length ? null : (0, nJ.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [XJ.length > 0 && (0, nJ.jsx)(De, {
                                title: "Used in",
                                references: XJ
                              }), AJ.length > 0 && (0, nJ.jsx)(De, {
                                title: "Changelog",
                                references: AJ
                              })]
                            })
                          }

                          function ne(JJ) {
                            let {
                              method: cJ,
                              pageId: ZJ,
                              anchor: FJ,
                              isCallback: UJ
                            } = JJ;
                            const eJ = UJ ? void 0 : Ac().get(cJ.name),
                              XJ = cJ.description.length > 0 || null === eJ || void 0 === eJ || !eJ.description ? cJ.description : (0, KJ.C)(eJ.description);
                            return (0, nJ.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, nJ.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, nJ.jsx)(jZ, {
                                  level: 2,
                                  text: cJ.name,
                                  anchor: FJ,
                                  className: "DocsCardTitle"
                                }), (0, nJ.jsx)(vJ, {
                                  text: Ye(cJ, UJ),
                                  label: UJ ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, nJ.jsx)(he, {
                                method: cJ,
                                isCallback: UJ
                              }), eJ && null !== eJ.deprecation && (0, nJ.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, nJ.jsx)("strong", {
                                  children: "Deprecated"
                                }), eJ.deprecation && (0, nJ.jsxs)(nJ.Fragment, {
                                  children: [": ", (0, nJ.jsx)(Ec, {
                                    text: (AJ = eJ.deprecation, (0, tU.q)(AJ, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, tU.k)("`\\w"), (JJ => {
                                      let [cJ] = JJ;
                                      return hc().has(cJ) ? `\`${cJ}\`` : cJ
                                    })))
                                  })]
                                })]
                              }), XJ.length > 0 && (0, nJ.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, nJ.jsx)(sZ, {
                                  blocks: XJ
                                })
                              }), cJ.params.length > 0 && (0, nJ.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, nJ.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, nJ.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: cJ.params.map((JJ => (0, nJ.jsxs)("div", {
                                    id: `${cJ.name}-${je(JJ)}`,
                                    className: "DocsParam",
                                    children: [(0, nJ.jsxs)("dt", {
                                      children: [(0, nJ.jsx)("code", {
                                        className: "DocsParamName",
                                        children: JJ.name
                                      }), (0, nJ.jsx)(yc, {
                                        type: JJ.type
                                      })]
                                    }), JJ.description && (0, nJ.jsx)("dd", {
                                      children: (0, nJ.jsx)(Ec, {
                                        text: JJ.description
                                      })
                                    })]
                                  }, JJ.name)))
                                })]
                              }), cJ.returns && (cJ.returns.type || cJ.returns.description.length > 0) && (0, nJ.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, nJ.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, nJ.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [cJ.returns.type && (0, nJ.jsx)(yc, {
                                    type: cJ.returns.type
                                  }), cJ.returns.description.length > 0 && (0, nJ.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, nJ.jsx)(sZ, {
                                      blocks: cJ.returns.description
                                    })
                                  })]
                                })]
                              }), (0, nJ.jsx)(se, {
                                pageId: ZJ,
                                anchor: FJ
                              })]
                            });
                            var AJ
                          }

                          function Ge(JJ) {
                            var cJ;
                            return null !== JJ.defaultValue && "undefined" !== JJ.defaultValue ? JJ.defaultValue : null !== (cJ = JJ.example) && void 0 !== cJ ? cJ : "value"
                          }

                          function fe(JJ) {
                            let {
                              setting: cJ,
                              pageId: ZJ,
                              anchor: FJ,
                              setterSnippet: UJ
                            } = JJ;
                            const eJ = null === cJ.defaultValue ? null : xc(cJ.defaultValue);
                            return (0, nJ.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, nJ.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, nJ.jsx)(jZ, {
                                  level: 2,
                                  text: cJ.name,
                                  anchor: FJ,
                                  className: "DocsCardTitle"
                                }), (0, nJ.jsx)(vJ, {
                                  text: UJ(cJ.name, Ge(cJ)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, nJ.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, nJ.jsxs)("div", {
                                  children: [(0, nJ.jsx)("dt", {
                                    children: "Type"
                                  }), (0, nJ.jsx)("dd", {
                                    children: (0, nJ.jsx)(yc, {
                                      type: cJ.type
                                    })
                                  })]
                                }), null !== cJ.defaultValue && (0, nJ.jsxs)("div", {
                                  children: [(0, nJ.jsx)("dt", {
                                    children: "Default"
                                  }), (0, nJ.jsx)("dd", {
                                    children: (0, nJ.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [eJ && (0, nJ.jsx)(rc, {
                                        colour: eJ
                                      }), cJ.defaultValue]
                                    })
                                  })]
                                }), null !== cJ.example && (0, nJ.jsxs)("div", {
                                  children: [(0, nJ.jsx)("dt", {
                                    children: "Example"
                                  }), (0, nJ.jsx)("dd", {
                                    children: (0, nJ.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: cJ.example
                                    })
                                  })]
                                })]
                              }), cJ.description.length > 0 && (0, nJ.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, nJ.jsx)(sZ, {
                                  blocks: cJ.description
                                })
                              }), (0, nJ.jsx)(se, {
                                pageId: ZJ,
                                anchor: FJ
                              })]
                            })
                          }

                          function xe(JJ) {
                            let {
                              section: cJ
                            } = JJ;
                            return (0, nJ.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, nJ.jsx)(jZ, {
                                level: 2,
                                text: cJ.heading.text,
                                anchor: cJ.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, nJ.jsx)("div", {
                                className: "DocsProse",
                                children: (0, nJ.jsx)(sZ, {
                                  blocks: cJ.blocks
                                })
                              })]
                            })
                          }

                          function re(JJ) {
                            let {
                              section: cJ
                            } = JJ;
                            return (0, nJ.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, nJ.jsx)(jZ, {
                                level: cJ.heading.level,
                                text: cJ.heading.text,
                                anchor: cJ.heading.anchor
                              }), (0, nJ.jsx)(sZ, {
                                blocks: cJ.blocks
                              })]
                            })
                          }
                          const ve = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function me(JJ) {
                            let {
                              page: cJ,
                              section: ZJ
                            } = JJ;
                            if ("methods" === cJ.layout || "callbacks" === cJ.layout) return (0, nJ.jsx)(ne, {
                              method: VZ(ZJ),
                              pageId: cJ.id,
                              anchor: ZJ.heading.anchor,
                              isCallback: "callbacks" === cJ.layout
                            });
                            if ("settings" === cJ.layout) {
                              const JJ = function(JJ) {
                                const cJ = {
                                  name: JJ.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const FJ of JJ.blocks) {
                                  var ZJ;
                                  if (EZ(FJ)) continue;
                                  const JJ = "paragraph" === FJ.kind ? FJ.text.match(KZ) : null;
                                  if (!JJ) {
                                    cJ.description.push(FJ);
                                    continue
                                  }
                                  const UJ = null !== (ZJ = QZ(JJ[2])) && void 0 !== ZJ ? ZJ : JJ[2];
                                  "Type" === JJ[1] ? cJ.type = UJ : "Default" === JJ[1] ? cJ.defaultValue = UJ : "" !== UJ && (cJ.example = UJ)
                                }
                                return cJ.type ? cJ : null
                              }(ZJ);
                              if (JJ) return (0, nJ.jsx)(fe, {
                                setting: JJ,
                                pageId: cJ.id,
                                anchor: ZJ.heading.anchor,
                                setterSnippet: cJ.setterSnippet
                              })
                            }
                            return "snippets" === cJ.layout ? (0, nJ.jsx)(xe, {
                              section: ZJ
                            }) : "changelog" === cJ.layout ? (0, nJ.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, nJ.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, nJ.jsx)(jZ, {
                                  level: 2,
                                  text: ZJ.heading.text,
                                  anchor: ZJ.heading.anchor
                                })
                              }), (0, nJ.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, nJ.jsx)(sZ, {
                                  blocks: yZ(ZJ.blocks)
                                })
                              })]
                            }) : cJ.gallery ? (0, nJ.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, nJ.jsx)(jZ, {
                                level: ZJ.heading.level,
                                text: ZJ.heading.text,
                                anchor: ZJ.heading.anchor
                              }), (0, nJ.jsx)(SF, {
                                kind: cJ.gallery,
                                content: NJ(cJ),
                                blocks: ZJ.blocks
                              })]
                            }) : (0, nJ.jsx)(re, {
                              section: ZJ
                            })
                          }

                          function Qe(JJ) {
                            let {
                              page: cJ,
                              onTocChange: ZJ
                            } = JJ;
                            const UJ = NJ(cJ),
                              [eJ, XJ] = (0, FJ.useState)(""),
                              AJ = "article" !== cJ.layout,
                              qJ = fZ(cJ.gallery) ? cJ.gallery : null,
                              jJ = null !== qJ,
                              YJ = eJ.trim().toLowerCase(),
                              hJ = (0, FJ.useRef)(null),
                              DJ = (0, FJ.useCallback)((JJ => {
                                var cJ;
                                null === (cJ = hJ.current) || void 0 === cJ || cJ.preview(JJ)
                              }), []),
                              sJ = (0, FJ.useMemo)((() => {
                                if (!cJ.hasParticlePlayground) return [];
                                const JJ = bZ(UJ.intro).find((JJ => "names" === JJ.kind && !JJ.names.some((JJ => null !== zZ(JJ.name)))));
                                return "names" === (null === JJ || void 0 === JJ ? void 0 : JJ.kind) ? JJ.names.map((JJ => JJ.name)) : []
                              }), [cJ, UJ]),
                              GJ = (0, FJ.useMemo)((() => {
                                if (!cJ.hasTextPlayground) return [];
                                const JJ = UJ.sections.flatMap((JJ => JJ.blocks.flatMap((JJ => {
                                  var cJ;
                                  return (null !== (cJ = MZ(JJ)) && void 0 !== cJ ? cJ : []).flatMap((JJ => zc(JJ.name) ? [JJ.name] : []))
                                }))));
                                return [...new Set(JJ)]
                              }), [cJ, UJ]),
                              fJ = (0, FJ.useMemo)((() => YJ ? UJ.sections.filter((JJ => function(JJ, cJ) {
                                return !!JJ.heading.text.toLowerCase().includes(cJ) || JJ.blocks.some((JJ => (0, KJ.i)(JJ).toLowerCase().includes(cJ)))
                              }(JJ, YJ))) : UJ.sections), [UJ, YJ]),
                              xJ = (0, FJ.useMemo)((() => function(JJ, cJ) {
                                return "article" !== JJ.layout ? cJ.map((JJ => ({
                                  anchor: JJ.heading.anchor,
                                  text: JJ.heading.text,
                                  level: 2
                                }))) : cJ.flatMap((JJ => {
                                  const cJ = JJ.blocks.flatMap((JJ => "heading" === JJ.kind && 3 === JJ.level ? [{
                                    anchor: JJ.anchor,
                                    text: JJ.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: JJ.heading.anchor,
                                    text: JJ.heading.text,
                                    level: 2
                                  }, ...cJ]
                                }))
                              }(cJ, fJ)), [cJ, fJ]);
                            return (0, FJ.useEffect)((() => {
                              ZJ(xJ)
                            }), [xJ, ZJ]), (0, nJ.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, nJ.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, nJ.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: UJ.title || cJ.title
                                }), (0, nJ.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: cJ.summary
                                }), (0, nJ.jsx)(LF, {
                                  page: cJ
                                }), AJ && (0, nJ.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, nJ.jsxs)("span", {
                                    children: [(0, nJ.jsx)("strong", {
                                      children: UJ.sections.length
                                    }), " ", ve[cJ.layout]]
                                  })
                                })]
                              }), "" === cJ.slug && (0, nJ.jsx)(MF, {}), qJ && (0, nJ.jsx)(gF, {
                                kind: qJ
                              }, qJ), cJ.hasParticlePlayground && (0, nJ.jsx)(AU, {
                                ref: hJ,
                                textures: sJ
                              }), !jJ && UJ.intro.length > 0 && (0, nJ.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: cJ.gallery ? (0, nJ.jsx)(xF.Provider, {
                                  value: cJ.hasParticlePlayground ? DJ : null,
                                  children: (0, nJ.jsx)(SF, {
                                    kind: cJ.gallery,
                                    content: UJ,
                                    blocks: UJ.intro
                                  })
                                }) : (0, nJ.jsx)(sZ, {
                                  blocks: yZ(UJ.intro)
                                })
                              }), cJ.hasTextPlayground && (0, nJ.jsx)(VU, {
                                fontAwesomeIcons: GJ
                              }), cJ.hasVoicePlayground && (0, nJ.jsx)(BU, {}), cJ.childPageIds && (0, nJ.jsx)(MF, {
                                cards: cJ.childPageIds.map((JJ => ({
                                  pageId: JJ
                                }))),
                                label: cJ.title
                              }), AJ && (0, nJ.jsx)(vZ, {
                                className: "DocsFilterBar",
                                value: eJ,
                                placeholder: `Filter ${UJ.sections.length} ${ve[cJ.layout]}\u2026`,
                                label: `Filter ${ve[cJ.layout]}`,
                                onChange: XJ,
                                count: YJ ? {
                                  visible: fJ.length,
                                  total: UJ.sections.length
                                } : null
                              }), !jJ && (0, nJ.jsxs)("div", {
                                className: `DocsSections Layout-${cJ.layout}`,
                                children: [fJ.map((JJ => (0, nJ.jsx)(me, {
                                  page: cJ,
                                  section: JJ
                                }, JJ.heading.anchor))), 0 === fJ.length && (0, nJ.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", ve[cJ.layout], " match \u201c", eJ, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const Ee = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function Ve(JJ) {
                            let {
                              entry: cJ,
                              isActive: ZJ,
                              onNavigate: FJ,
                              label: UJ,
                              children: XJ
                            } = JJ;
                            return (0, nJ.jsx)("a", {
                              href: `#${cJ.anchor}`,
                              "aria-label": UJ,
                              className: eJ()(`Level${cJ.level}`, {
                                Active: ZJ
                              }),
                              "aria-current": ZJ ? "location" : void 0,
                              onClick: JJ => {
                                JJ.preventDefault(), FJ(cJ.anchor)
                              },
                              children: XJ
                            })
                          }

                          function Ke(JJ) {
                            let {
                              toc: cJ,
                              activeAnchor: ZJ,
                              onNavigate: UJ
                            } = JJ;
                            const XJ = Math.max(0, cJ.findIndex((JJ => JJ.anchor === ZJ))),
                              AJ = (0, FJ.useRef)(null),
                              qJ = (0, FJ.useRef)(!1);
                            (0, FJ.useEffect)((() => {
                              var JJ, ZJ;
                              const FJ = null === (JJ = AJ.current) || void 0 === JJ ? void 0 : JJ.closest(".DocsToc"),
                                UJ = null === (ZJ = AJ.current) || void 0 === ZJ ? void 0 : ZJ.querySelector(".DocsTimelineNotch.Active");
                              if (!FJ || !UJ) return;
                              let eJ = 0;
                              if (XJ === cJ.length - 1) eJ = FJ.scrollHeight;
                              else if (XJ > 0) {
                                const JJ = FJ.getBoundingClientRect(),
                                  cJ = UJ.getBoundingClientRect();
                                eJ = FJ.scrollTop + cJ.top + cJ.height / 2 - (JJ.top + FJ.clientHeight / 2)
                              }
                              FJ.scrollTo({
                                top: eJ,
                                behavior: qJ.current ? "smooth" : "auto"
                              }), qJ.current = !0
                            }), [XJ, cJ.length]);
                            const jJ = [];
                            return cJ.forEach(((JJ, cJ) => {
                              var ZJ, FJ, UJ;
                              const eJ = function(JJ) {
                                  const cJ = JJ.trim().match(Ee);
                                  return cJ ? {
                                    day: cJ[1],
                                    month: `${cJ[2]} ${cJ[3]}`
                                  } : null
                                }(JJ.text),
                                XJ = null !== (ZJ = null === eJ || void 0 === eJ ? void 0 : eJ.month) && void 0 !== ZJ ? ZJ : null;
                              null !== XJ && (null === (FJ = jJ.at(-1)) || void 0 === FJ ? void 0 : FJ.month) === XJ || jJ.push({
                                month: XJ,
                                entries: []
                              }), jJ.at(-1).entries.push({
                                entry: JJ,
                                day: null !== (UJ = null === eJ || void 0 === eJ ? void 0 : eJ.day) && void 0 !== UJ ? UJ : null,
                                index: cJ
                              })
                            })), (0, nJ.jsx)("ol", {
                              ref: AJ,
                              className: "DocsTimeline",
                              children: jJ.map((JJ => {
                                let {
                                  month: cJ,
                                  entries: ZJ
                                } = JJ;
                                return (0, nJ.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [cJ && (0, nJ.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: cJ
                                  }), (0, nJ.jsx)("ol", {
                                    children: ZJ.map((JJ => {
                                      let {
                                        entry: cJ,
                                        day: ZJ,
                                        index: FJ
                                      } = JJ;
                                      return (0, nJ.jsx)("li", {
                                        className: eJ()("DocsTimelineNotch", {
                                          Passed: FJ < XJ,
                                          Active: FJ === XJ
                                        }),
                                        children: (0, nJ.jsx)(Ve, {
                                          entry: cJ,
                                          isActive: FJ === XJ,
                                          onNavigate: UJ,
                                          label: cJ.text,
                                          children: (0, nJ.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== ZJ && void 0 !== ZJ ? ZJ : cJ.text
                                          })
                                        })
                                      }, cJ.anchor)
                                    }))
                                  })]
                                }, ZJ[0].entry.anchor)
                              }))
                            })
                          }

                          function ye(JJ) {
                            let {
                              isChangelog: cJ,
                              toc: ZJ,
                              activeAnchor: FJ,
                              onNavigate: UJ
                            } = JJ;
                            return 0 === ZJ.length ? null : (0, nJ.jsxs)(nJ.Fragment, {
                              children: [(0, nJ.jsx)("div", {
                                className: "DocsTocTitle",
                                children: cJ ? "Updates" : "On this page"
                              }), cJ ? (0, nJ.jsx)(Ke, {
                                toc: ZJ,
                                activeAnchor: FJ,
                                onNavigate: UJ
                              }) : (0, nJ.jsx)("ul", {
                                children: ZJ.map((JJ => (0, nJ.jsx)("li", {
                                  children: (0, nJ.jsx)(Ve, {
                                    entry: JJ,
                                    isActive: JJ.anchor === FJ,
                                    onNavigate: UJ,
                                    children: JJ.text.replace(/`/g, "")
                                  })
                                }, JJ.anchor)))
                              })]
                            })
                          }
                          const Se = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            Ie = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            Me = 20,
                            be = 10,
                            we = 40,
                            We = 120;
                          let ge;

                          function He(JJ) {
                            const cJ = JJ.gallery;
                            if (!cJ) return [];
                            if (fZ(cJ)) return function(JJ) {
                              return rZ(JJ).entries.map((JJ => JJ.name))
                            }(cJ).map((ZJ => ({
                              page: JJ,
                              anchor: WZ(cJ, ZJ),
                              title: ZJ,
                              kind: Ie[cJ],
                              text: "",
                              listedUnder: JJ.title
                            })));
                            const ZJ = NJ(JJ);
                            return (0, KJ.y)(ZJ).flatMap((FJ => {
                              const UJ = FJ.heading ? `${JJ.title} \u203a ${FJ.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : JJ.title;
                              return HZ(cJ, ZJ, FJ.blocks).flatMap((ZJ => "names" !== ZJ.kind ? [] : ZJ.names.map((FJ => {
                                const eJ = ZJ.isSongs ? "Song" : Ie[cJ];
                                return {
                                  page: JJ,
                                  anchor: FJ.anchor,
                                  title: FJ.name,
                                  kind: eJ,
                                  text: "",
                                  listedUnder: UJ
                                }
                              }))))
                            }))
                          }

                          function Pe(JJ, cJ, ZJ) {
                            const FJ = JJ.title.toLowerCase();
                            let UJ = 0;
                            if (FJ === cJ) UJ = 100;
                            else if (FJ.startsWith(cJ)) UJ = 80;
                            else if (FJ.includes(cJ)) UJ = 60;
                            else if (ZJ.every((JJ => FJ.includes(JJ)))) UJ = 45;
                            else {
                              if (!JJ.text.toLowerCase().includes(cJ)) return 0;
                              UJ = 20
                            }
                            return UJ - Math.min(FJ.length / 10, 9) + ("Page" === JJ.kind ? 8 : "Method" === JJ.kind ? 3 : 0) - (JJ.listedUnder ? Me : 0)
                          }

                          function ke(JJ, cJ) {
                            const ZJ = JJ.toLowerCase().indexOf(cJ),
                              FJ = Math.max(0, ZJ - We / 3);
                            return `${FJ>0?"\u2026":""}${JJ.slice(FJ,FJ+We)}${FJ+We<JJ.length?"\u2026":""}`
                          }

                          function pe(JJ) {
                            let {
                              text: cJ,
                              query: ZJ
                            } = JJ;
                            const FJ = ZJ ? cJ.toLowerCase().indexOf(ZJ) : -1;
                            return -1 === FJ ? (0, nJ.jsx)(nJ.Fragment, {
                              children: cJ
                            }) : (0, nJ.jsxs)(nJ.Fragment, {
                              children: [cJ.slice(0, FJ), (0, nJ.jsx)("mark", {
                                children: cJ.slice(FJ, FJ + ZJ.length)
                              }), cJ.slice(FJ + ZJ.length)]
                            })
                          }

                          function de(JJ) {
                            let {
                              basePath: cJ,
                              onClose: ZJ
                            } = JJ;
                            const UJ = (0, AJ.r)(),
                              [XJ, qJ] = (0, FJ.useState)(""),
                              [jJ, YJ] = (0, FJ.useState)(0),
                              hJ = (0, FJ.useRef)(null),
                              DJ = (0, FJ.useRef)(null),
                              sJ = XJ.trim().toLowerCase(),
                              GJ = (0, FJ.useMemo)((() => {
                                const JJ = (ge || (ge = kJ.flatMap((JJ => {
                                  const cJ = NJ(JJ);
                                  return [{
                                    page: JJ,
                                    anchor: "",
                                    title: JJ.title,
                                    kind: "Page",
                                    text: JJ.summary
                                  }, ...cJ.sections.flatMap((cJ => {
                                    const ZJ = cJ.blocks.filter((JJ => "paragraph" === JJ.kind)).map(KJ.i).join(" ").replace(/[`*]/g, ""),
                                      FJ = {
                                        page: JJ,
                                        anchor: cJ.heading.anchor,
                                        title: cJ.heading.text.replace(/`/g, ""),
                                        kind: Se[JJ.layout],
                                        text: ZJ
                                      },
                                      UJ = cJ.blocks.flatMap((cJ => "article" === JJ.layout && "heading" === cJ.kind && 3 === cJ.level ? [{
                                        page: JJ,
                                        anchor: cJ.anchor,
                                        title: cJ.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: FJ.title
                                      }] : []));
                                    return [FJ, ...UJ]
                                  })), ...He(JJ)]
                                }))), ge);
                                if (!sJ) return JJ.filter((JJ => "Page" === JJ.kind));
                                const cJ = sJ.split(/\s+/);
                                let ZJ = 0;
                                return JJ.map((JJ => ({
                                  entry: JJ,
                                  score: Pe(JJ, sJ, cJ)
                                }))).filter((JJ => JJ.score > 0)).sort(((JJ, cJ) => cJ.score - JJ.score)).filter((JJ => !JJ.entry.listedUnder || (ZJ++, ZJ <= be))).slice(0, we).map((JJ => JJ.entry))
                              }), [sJ]);
                            (0, FJ.useEffect)((() => {
                              YJ(0)
                            }), [sJ]), (0, FJ.useEffect)((() => {
                              const JJ = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === JJ || void 0 === JJ || JJ.focus()
                              }
                            }), []), (0, FJ.useEffect)((() => {
                              var JJ, cJ;
                              null === (JJ = hJ.current) || void 0 === JJ || null === (cJ = JJ.querySelector(".Active")) || void 0 === cJ || cJ.scrollIntoView({
                                block: "nearest"
                              })
                            }), [jJ]);
                            const xJ = JJ => {
                              UJ(uJ(cJ, JJ.page, JJ.anchor)), ZJ()
                            };
                            return (0, nJ.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: JJ => {
                                JJ.target === JJ.currentTarget && ZJ()
                              },
                              children: (0, nJ.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: JJ => {
                                  JJ.target !== DJ.current && JJ.preventDefault()
                                },
                                onKeyDown: JJ => {
                                  if ("Escape" === JJ.key) ZJ();
                                  else if ("Tab" === JJ.key) {
                                    var cJ;
                                    JJ.preventDefault(), null === (cJ = DJ.current) || void 0 === cJ || cJ.focus()
                                  }
                                },
                                children: [(0, nJ.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, nJ.jsx)(fJ, {
                                    name: "magnifying-glass"
                                  }), (0, nJ.jsx)("input", {
                                    ref: DJ,
                                    autoFocus: !0,
                                    value: XJ,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": GJ.length > 0 ? `DocsSearchResult-${jJ}` : void 0,
                                    onChange: JJ => {
                                      qJ(JJ.target.value)
                                    },
                                    onKeyDown: JJ => {
                                      if ("ArrowDown" === JJ.key || "ArrowUp" === JJ.key) {
                                        JJ.preventDefault();
                                        const cJ = "ArrowDown" === JJ.key ? 1 : -1;
                                        YJ((jJ + cJ + GJ.length) % Math.max(GJ.length, 1))
                                      } else "Enter" === JJ.key && GJ[jJ] && xJ(GJ[jJ])
                                    }
                                  }), (0, nJ.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, nJ.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: hJ,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!sJ && (0, nJ.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), GJ.map(((JJ, cJ) => {
                                    var ZJ;
                                    return (0, nJ.jsxs)("li", {
                                      id: `DocsSearchResult-${cJ}`,
                                      role: "option",
                                      "aria-selected": cJ === jJ,
                                      className: eJ()("DocsSearchResult", {
                                        Active: cJ === jJ
                                      }),
                                      onMouseMove: () => {
                                        YJ(cJ)
                                      },
                                      onClick: () => {
                                        xJ(JJ)
                                      },
                                      children: [(0, nJ.jsx)(fJ, {
                                        name: JJ.page.icon
                                      }), (0, nJ.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, nJ.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, nJ.jsx)(pe, {
                                            text: JJ.title,
                                            query: sJ
                                          })
                                        }), JJ.text && (0, nJ.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, nJ.jsx)(pe, {
                                            text: ke(JJ.text, sJ),
                                            query: sJ
                                          })
                                        })]
                                      }), (0, nJ.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === JJ.kind ? "Page" : null !== (ZJ = JJ.listedUnder) && void 0 !== ZJ ? ZJ : `${JJ.kind} \xb7 ${JJ.page.title}`
                                      })]
                                    }, `${JJ.page.id}#${JJ.anchor}`)
                                  })), sJ && 0 === GJ.length && (0, nJ.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", XJ, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function ze(JJ, cJ) {
                            if (cJ < 10) return `${JJ.toFixed(1)}s`;
                            const ZJ = Math.floor(JJ);
                            return `${Math.floor(ZJ/60)}:${String(ZJ%60).padStart(2,"0")}`
                          }

                          function Ne() {
                            const JJ = YF((JJ => JJ.track)),
                              cJ = YF((JJ => JJ.volume)),
                              [ZJ, UJ] = (0, FJ.useState)(0),
                              XJ = (0, FJ.useRef)(cF);
                            if ((0, FJ.useEffect)((() => {
                                if (!JJ) return;
                                if (UJ(nF()), "playing" !== JJ.status) return;
                                let cJ = 0;
                                const ZJ = () => {
                                  UJ(nF()), cJ = requestAnimationFrame(ZJ)
                                };
                                return cJ = requestAnimationFrame(ZJ), () => {
                                  cancelAnimationFrame(cJ)
                                }
                              }), [JJ]), !JJ) return null;
                            const AJ = "paused" !== JJ.status,
                              qJ = Math.min(ZJ, JJ.duration);
                            return (0, nJ.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, nJ.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, nJ.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": AJ ? `Pause ${JJ.name}` : `Play ${JJ.name}`,
                                  onClick: sF,
                                  children: (0, nJ.jsx)(fJ, {
                                    name: AJ ? "pause" : "play"
                                  })
                                }), (0, nJ.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, nJ.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, nJ.jsx)("code", {
                                      children: JJ.name
                                    }), (0, nJ.jsx)("span", {
                                      children: JJ.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, nJ.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, nJ.jsx)("span", {
                                      children: ze(qJ, JJ.duration)
                                    }), (0, nJ.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: JJ.duration || 1,
                                      step: .01,
                                      value: qJ,
                                      disabled: 0 === JJ.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${ze(qJ,JJ.duration)} of ${ze(JJ.duration,JJ.duration)}`,
                                      onChange: JJ => {
                                        const cJ = Number(JJ.target.value);
                                        ! function(JJ) {
                                          var cJ;
                                          XF = JJ, null === (cJ = UF) || void 0 === cJ || cJ.seek(JJ)
                                        }(cJ), UJ(cJ)
                                      }
                                    }), (0, nJ.jsx)("span", {
                                      children: JJ.duration > 0 ? ze(JJ.duration, JJ.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, nJ.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, nJ.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === cJ ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === cJ ? GF(XJ.current) : (XJ.current = cJ, GF(0))
                                    },
                                    children: (0, nJ.jsx)(fJ, {
                                      name: "volume",
                                      className: eJ()({
                                        Muted: 0 === cJ
                                      })
                                    })
                                  }), (0, nJ.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: cJ,
                                    "aria-label": "Volume",
                                    onChange: JJ => {
                                      GF(Number(JJ.target.value))
                                    }
                                  })]
                                }), (0, nJ.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var cJ;
                                    null === (cJ = document.querySelector(`[data-docs-track="${CSS.escape(ZF(JJ.name,JJ.isSong))}"]`)) || void 0 === cJ || cJ.focus(), fF()
                                  },
                                  children: (0, nJ.jsx)(fJ, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var Oe = ZJ(29);
                          const Te = "docsTheme",
                            Ce = window.matchMedia("(prefers-color-scheme: light)");

                          function ue(JJ) {
                            let {
                              theme: cJ,
                              onChange: ZJ
                            } = JJ;
                            const FJ = "dark" === cJ ? "light" : "dark";
                            return (0, nJ.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${FJ} theme`,
                              title: `Switch to ${FJ} theme`,
                              onClick: () => {
                                ZJ(FJ)
                              },
                              children: (0, nJ.jsx)(fJ, {
                                name: "dark" === cJ ? "moon" : "sun"
                              })
                            })
                          }
                          const ie = "https://github.com/Bloxdy/code-api",
                            Re = "https://discord.gg/playbloxd",
                            Le = 180,
                            ae = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function Be(JJ) {
                            let {
                              basePath: cJ,
                              activePageId: ZJ,
                              onNavigate: FJ
                            } = JJ;
                            return (0, nJ.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: pJ.map((JJ => (0, nJ.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, nJ.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: JJ.title
                                }), JJ.pageIds.map((JJ => {
                                  var UJ;
                                  const AJ = dJ(JJ);
                                  return (0, nJ.jsxs)(XJ.c, {
                                    to: uJ(cJ, AJ),
                                    className: eJ()("DocsNavLink", {
                                      Active: AJ.id === ZJ
                                    }),
                                    "aria-current": AJ.id === ZJ ? "page" : void 0,
                                    onClick: FJ,
                                    children: [(0, nJ.jsx)(fJ, {
                                      name: AJ.icon
                                    }), (0, nJ.jsx)("span", {
                                      children: null !== (UJ = AJ.navTitle) && void 0 !== UJ ? UJ : AJ.title
                                    })]
                                  }, AJ.id)
                                }))]
                              }, JJ.title)))
                            })
                          }

                          function te(JJ) {
                            let {
                              basePath: cJ,
                              pageId: ZJ
                            } = JJ;
                            const FJ = pJ.flatMap((JJ => JJ.pageIds)),
                              UJ = FJ.indexOf(ZJ),
                              eJ = UJ > 0 ? dJ(FJ[UJ - 1]) : null,
                              AJ = UJ < FJ.length - 1 ? dJ(FJ[UJ + 1]) : null;
                            return (0, nJ.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [eJ ? (0, nJ.jsxs)(XJ.c, {
                                className: "DocsPagerLink Previous",
                                to: uJ(cJ, eJ),
                                children: [(0, nJ.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, nJ.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: eJ.title
                                })]
                              }) : (0, nJ.jsx)("span", {}), AJ && (0, nJ.jsxs)(XJ.c, {
                                className: "DocsPagerLink Next",
                                to: uJ(cJ, AJ),
                                children: [(0, nJ.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, nJ.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: AJ.title
                                })]
                              })]
                            })
                          }

                          function oe(JJ) {
                            let {
                              basePath: cJ,
                              embedded: ZJ = !1
                            } = JJ;
                            const {
                              pageSlug: UJ = ""
                            } = (0, AJ.x)(), jJ = (0, AJ.q)(), YJ = (0, AJ.r)(), hJ = (DJ = UJ, kJ.find((JJ => JJ.slug === DJ)));
                            var DJ;
                            const [sJ, GJ] = function() {
                              const [JJ, cJ] = (0, FJ.useState)((() => {
                                const JJ = Oe.j.getItem(Te);
                                return "dark" === JJ || "light" === JJ ? JJ : null
                              })), [ZJ, UJ] = (0, FJ.useState)(Ce.matches ? "light" : "dark");
                              return (0, FJ.useEffect)((() => {
                                const JJ = () => {
                                  UJ(Ce.matches ? "light" : "dark")
                                };
                                return Ce.addEventListener("change", JJ), () => {
                                  Ce.removeEventListener("change", JJ)
                                }
                              }), []), [null !== JJ && void 0 !== JJ ? JJ : ZJ, JJ => {
                                Oe.j.setItem(Te, JJ), cJ(JJ)
                              }]
                            }(), [xJ, rJ] = (0, FJ.useState)(null), [vJ, mJ] = (0, FJ.useState)(!1), [QJ, EJ] = (0, FJ.useState)(!1), [VJ, yJ] = (0, FJ.useState)([]), SJ = function(JJ, cJ) {
                              const [ZJ, UJ] = (0, FJ.useState)("");
                              return (0, FJ.useEffect)((() => {
                                if (!cJ) return;
                                let ZJ = 0;
                                const FJ = () => {
                                    var FJ, eJ;
                                    ZJ = 0;
                                    const XJ = cJ.getBoundingClientRect().top + Le;
                                    let AJ = null !== (FJ = null === (eJ = JJ[0]) || void 0 === eJ ? void 0 : eJ.anchor) && void 0 !== FJ ? FJ : "";
                                    for (const cJ of JJ) {
                                      const JJ = document.getElementById(cJ.anchor);
                                      JJ && JJ.getBoundingClientRect().top <= XJ && (AJ = cJ.anchor)
                                    }
                                    cJ.scrollTop + cJ.clientHeight >= cJ.scrollHeight - 2 && cJ.scrollTop > 0 && JJ.length > 0 && (AJ = JJ[JJ.length - 1].anchor), UJ(AJ)
                                  },
                                  eJ = () => {
                                    ZJ || (ZJ = requestAnimationFrame(FJ))
                                  };
                                return FJ(), cJ.addEventListener("scroll", eJ, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(ZJ), cJ.removeEventListener("scroll", eJ)
                                }
                              }), [JJ, cJ]), ZJ
                            }(VJ, xJ), IJ = "" === UJ && jJ.hash ? function(JJ) {
                              const cJ = (0, KJ.r)(JJ);
                              if (OJ(dJ("welcome"), cJ)) return null;
                              const ZJ = Object.hasOwn(CJ, cJ) ? CJ[cJ] : null;
                              if (ZJ) return {
                                page: dJ(ZJ.pageId),
                                anchor: ZJ.anchor
                              };
                              const FJ = dJ("readme");
                              return OJ(FJ, cJ) ? {
                                page: FJ,
                                anchor: cJ
                              } : TJ(`#${cJ}`)
                            }(jJ.hash) : null;
                            (0, FJ.useEffect)((() => (qJ.d.set({
                              musicOnFromPage: !1
                            }), () => {
                              qJ.d.set({
                                musicOnFromPage: !0
                              }), fF()
                            })), []), (0, FJ.useEffect)((() => {
                              const JJ = JJ => {
                                const cJ = JJ.target;
                                if (cJ.closest(".DocsTextDialog")) return;
                                const ZJ = cJ.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(cJ.tagName);
                                "k" === JJ.key && (JJ.metaKey || JJ.ctrlKey) || "/" === JJ.key && !ZJ ? (JJ.preventDefault(), EJ(!0)) : "Escape" === JJ.key && mJ(!1)
                              };
                              return window.addEventListener("keydown", JJ), () => {
                                window.removeEventListener("keydown", JJ)
                              }
                            }), []);
                            const MJ = (0, FJ.useRef)(null);
                            (0, FJ.useLayoutEffect)((() => {
                              var JJ, cJ;
                              if (!xJ) return;
                              const ZJ = MJ.current === jJ.pathname;
                              MJ.current = jJ.pathname;
                              const FJ = (0, KJ.r)(jJ.hash),
                                UJ = FJ ? document.getElementById(FJ) : null;
                              if (null === (JJ = xJ.querySelector(".DocsTargeted")) || void 0 === JJ || JJ.classList.remove("DocsTargeted"), null === UJ || void 0 === UJ || null === (cJ = UJ.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === cJ || cJ.classList.add("DocsTargeted"), UJ) {
                                var eJ;
                                const JJ = UJ.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (eJ = UJ.closest(".DocsChangelogEntry")) && void 0 !== eJ ? eJ : UJ).scrollIntoView({
                                  block: JJ ? "center" : "start",
                                  behavior: ZJ ? "smooth" : "auto"
                                })
                              } else ZJ || xJ.scrollTo({
                                top: 0
                              })
                            }), [xJ, jJ.pathname, jJ.hash, jJ.key]);
                            const bJ = (0, FJ.useCallback)((() => {
                                mJ(!1)
                              }), []),
                              wJ = (0, FJ.useCallback)((JJ => {
                                YJ({
                                  hash: JJ
                                })
                              }), [YJ]);
                            if (IJ) return (0, nJ.jsx)(AJ.c, {
                              replace: !0,
                              to: uJ(cJ, IJ.page, IJ.anchor)
                            });
                            if (!hJ) return (0, nJ.jsx)(AJ.c, {
                              replace: !0,
                              to: cJ
                            });
                            const WJ = ZJ ? "div" : "main";
                            return (0, nJ.jsx)(sc.Provider, {
                              value: cJ,
                              children: (0, nJ.jsx)(nc.Provider, {
                                value: xJ,
                                children: (0, nJ.jsxs)("div", {
                                  ref: rJ,
                                  className: eJ()("DocsSite", {
                                    Embedded: ZJ,
                                    NavOpen: vJ
                                  }),
                                  "data-theme": sJ,
                                  children: [(0, nJ.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, nJ.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": vJ ? "Close menu" : "Open menu",
                                      "aria-expanded": vJ,
                                      onClick: () => {
                                        mJ(!vJ)
                                      },
                                      children: (0, nJ.jsx)(fJ, {
                                        name: vJ ? "cross" : "menu"
                                      })
                                    }), (0, nJ.jsxs)(XJ.c, {
                                      to: cJ,
                                      className: "DocsBrand",
                                      children: [(0, nJ.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, nJ.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, nJ.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, nJ.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        EJ(!0)
                                      },
                                      children: [(0, nJ.jsx)(fJ, {
                                        name: "magnifying-glass"
                                      }), (0, nJ.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, nJ.jsxs)("kbd", {
                                        children: [ae ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, nJ.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, nJ.jsxs)("a", {
                                        href: Re,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, nJ.jsx)(fJ, {
                                          name: "discord"
                                        }), (0, nJ.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, nJ.jsxs)("a", {
                                        href: ie,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, nJ.jsx)(fJ, {
                                          name: "external-link"
                                        }), (0, nJ.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !ZJ && (0, nJ.jsxs)(XJ.c, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, nJ.jsx)(fJ, {
                                          name: "play"
                                        }), (0, nJ.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, nJ.jsx)(ue, {
                                        theme: sJ,
                                        onChange: GJ
                                      })]
                                    })]
                                  }), (0, nJ.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, nJ.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, nJ.jsx)(Be, {
                                        basePath: cJ,
                                        activePageId: hJ.id,
                                        onNavigate: bJ
                                      })
                                    }), (0, nJ.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: bJ
                                    }), (0, nJ.jsxs)(WJ, {
                                      className: "DocsMain",
                                      children: [(0, nJ.jsx)(Qe, {
                                        page: hJ,
                                        onTocChange: yJ
                                      }, hJ.id), (0, nJ.jsx)(te, {
                                        basePath: cJ,
                                        pageId: hJ.id
                                      })]
                                    }), (0, nJ.jsx)("aside", {
                                      className: eJ()("DocsToc", {
                                        Timeline: "changelog" === hJ.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, nJ.jsx)(ye, {
                                        isChangelog: "changelog" === hJ.layout,
                                        toc: VJ,
                                        activeAnchor: SJ,
                                        onNavigate: wJ
                                      })
                                    })]
                                  }), (0, nJ.jsx)(Ne, {}), QJ && (0, nJ.jsx)(de, {
                                    basePath: cJ,
                                    onClose: () => {
                                      EJ(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4133: (JJ, cJ, ZJ) => {
                          ZJ.d(cJ, {
                            A: () => sJ,
                            C: () => DJ,
                            e: () => FJ,
                            g: () => XJ,
                            i: () => fJ,
                            l: () => GJ,
                            p: () => AJ,
                            r: () => UJ,
                            v: () => eJ,
                            y: () => nJ
                          });
                          const FJ = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function UJ(JJ) {
                            try {
                              return decodeURIComponent(JJ.slice(1))
                            } catch {
                              return JJ.slice(1)
                            }
                          }

                          function eJ(JJ) {
                            return JJ.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const XJ = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${FJ.source}`, "g");

                          function AJ(JJ, cJ) {
                            return 2 === JJ.length ? cJ.replace(/^ (.*) $/, "$1") : cJ
                          }

                          function qJ(JJ) {
                            return "" === JJ.trim()
                          }

                          function jJ(JJ) {
                            const cJ = [];
                            for (const ZJ of JJ.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) cJ.length > 0 && cJ[cJ.length - 1].endsWith("\\") ? cJ[cJ.length - 1] += `|${ZJ}` : cJ.push(ZJ);
                            return cJ.map((JJ => JJ.trim().replaceAll("\\|", "|")))
                          }
                          const YJ = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function hJ(JJ) {
                            const cJ = [],
                              ZJ = [{
                                indent: -1,
                                items: cJ
                              }];
                            let FJ = null;
                            for (const UJ of JJ) {
                              const JJ = UJ.match(YJ);
                              if (!JJ) {
                                FJ && (FJ.text += ` ${UJ.trim()}`);
                                continue
                              }
                              const cJ = JJ[1].replace(/\t/g, "  ").length;
                              for (; cJ <= ZJ[ZJ.length - 1].indent;) ZJ.pop();
                              FJ = {
                                text: JJ[3].trim(),
                                children: []
                              }, ZJ[ZJ.length - 1].items.push(FJ), ZJ.push({
                                indent: cJ,
                                items: FJ.children
                              })
                            }
                            return cJ
                          }

                          function DJ(JJ) {
                            const cJ = JJ.replace(/\r\n/g, "\n").split("\n"),
                              ZJ = [];
                            let FJ = 0;
                            for (; FJ < cJ.length;) {
                              const JJ = cJ[FJ];
                              if (qJ(JJ)) {
                                FJ++;
                                continue
                              }
                              const UJ = JJ.match(/^\s*```\s*(\w*)\s*$/);
                              if (UJ) {
                                const JJ = [];
                                for (FJ++; FJ < cJ.length && !/^\s*```\s*$/.test(cJ[FJ]);) JJ.push(cJ[FJ]), FJ++;
                                FJ++, ZJ.push({
                                  kind: "code",
                                  lang: UJ[1] || "text",
                                  code: JJ.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const XJ = JJ.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (XJ) {
                                const JJ = XJ[2].trim();
                                ZJ.push({
                                  kind: "heading",
                                  level: XJ[1].length,
                                  text: JJ,
                                  anchor: eJ(JJ)
                                }), FJ++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(JJ)) {
                                ZJ.push({
                                  kind: "rule"
                                }), FJ++;
                                continue
                              }
                              if (JJ.trim().startsWith("|") && FJ + 1 < cJ.length && /^\s*\|[\s:|-]+\|\s*$/.test(cJ[FJ + 1])) {
                                const UJ = jJ(JJ),
                                  eJ = [];
                                for (FJ += 2; FJ < cJ.length && cJ[FJ].trim().startsWith("|");) eJ.push(jJ(cJ[FJ])), FJ++;
                                ZJ.push({
                                  kind: "table",
                                  header: UJ,
                                  rows: eJ
                                });
                                continue
                              }
                              if (JJ.startsWith(">")) {
                                const JJ = [];
                                for (; FJ < cJ.length && cJ[FJ].startsWith(">");) JJ.push(cJ[FJ].replace(/^>\s?/, "")), FJ++;
                                ZJ.push({
                                  kind: "quote",
                                  blocks: DJ(JJ.join("\n"))
                                });
                                continue
                              }
                              if (YJ.test(JJ)) {
                                const UJ = [],
                                  eJ = /^\s*\d+\./.test(JJ);
                                for (; FJ < cJ.length && !qJ(cJ[FJ]) && (YJ.test(cJ[FJ]) || /^\s+\S/.test(cJ[FJ]));) UJ.push(cJ[FJ]), FJ++;
                                ZJ.push({
                                  kind: "list",
                                  ordered: eJ,
                                  items: hJ(UJ)
                                });
                                continue
                              }
                              const AJ = [];
                              for (; FJ < cJ.length && !qJ(cJ[FJ]) && !/^\s*```/.test(cJ[FJ]) && !/^#{1,6}\s/.test(cJ[FJ]) && !cJ[FJ].startsWith(">") && !YJ.test(cJ[FJ]) && (!cJ[FJ].trim().startsWith("|") || 0 !== AJ.length);) AJ.push(cJ[FJ].trim()), FJ++;
                              0 === AJ.length && (AJ.push(cJ[FJ].trim()), FJ++), ZJ.push({
                                kind: "paragraph",
                                text: AJ.join(" ")
                              })
                            }
                            return ZJ
                          }

                          function sJ(JJ) {
                            let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const ZJ = DJ(JJ);
                            let FJ = "";
                            const UJ = [],
                              eJ = [],
                              XJ = new Map;
                            for (const jJ of ZJ) {
                              if ("heading" === jJ.kind) {
                                var AJ;
                                const JJ = (null !== (AJ = XJ.get(jJ.anchor)) && void 0 !== AJ ? AJ : 0) + 1;
                                XJ.set(jJ.anchor, JJ), JJ > 1 && (jJ.anchor = `${jJ.anchor}-${JJ}`)
                              }
                              if ("heading" === jJ.kind && 1 === jJ.level && !FJ) {
                                FJ = jJ.text;
                                continue
                              }
                              if ("heading" === jJ.kind && jJ.level <= cJ) {
                                eJ.push({
                                  heading: jJ,
                                  blocks: []
                                });
                                continue
                              }
                              const JJ = eJ.at(-1);
                              JJ ? JJ.blocks.push(jJ) : UJ.push(jJ)
                            }
                            const qJ = JJ => {
                              for (;
                                "rule" === (null === (cJ = JJ.at(-1)) || void 0 === cJ ? void 0 : cJ.kind);) {
                                var cJ;
                                JJ.pop()
                              }
                            };
                            qJ(UJ);
                            for (const jJ of eJ) qJ(jJ.blocks);
                            return {
                              title: FJ,
                              intro: UJ,
                              sections: eJ
                            }
                          }

                          function nJ(JJ) {
                            return [{
                              heading: null,
                              blocks: JJ.intro
                            }, ...JJ.sections.map((JJ => ({
                              heading: JJ.heading,
                              blocks: JJ.blocks
                            })))]
                          }

                          function GJ(JJ) {
                            return JJ.flatMap((JJ => "code" === JJ.kind ? [JJ] : "quote" === JJ.kind ? GJ(JJ.blocks) : []))
                          }

                          function fJ(JJ) {
                            switch (JJ.kind) {
                              case "heading":
                              case "paragraph":
                                return JJ.text;
                              case "code":
                                return JJ.code;
                              case "table":
                                return [JJ.header, ...JJ.rows].map((JJ => JJ.join(" "))).join(" ");
                              case "list": {
                                const cJ = JJ => JJ.map((JJ => `${JJ.text} ${cJ(JJ.children)}`)).join(" ");
                                return cJ(JJ.items)
                              }
                              case "quote":
                                return JJ.blocks.map(fJ).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4233: (JJ, cJ, ZJ) => {
                          ZJ.d(cJ, {
                            c: () => AJ
                          });
                          var FJ = ZJ(47),
                            UJ = ZJ(227),
                            eJ = ZJ(1688),
                            XJ = ZJ(990);

                          function AJ(JJ) {
                            let {
                              text: cJ
                            } = JJ;
                            const ZJ = [];
                            let AJ = "";
                            return (0, UJ.Sb)(cJ).forEach(((JJ, cJ) => {
                              if ("string" === typeof JJ || !(0, eJ.e)(JJ.icon)) return void(AJ += "string" === typeof JJ ? JJ : JJ.icon);
                              const UJ = Math.max(0, AJ.trimEnd().search(/\S{1,12}$/));
                              ZJ.push((0, XJ.jsxs)(FJ.Fragment, {
                                children: [AJ.slice(0, UJ), (0, XJ.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [AJ.slice(UJ), (0, XJ.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": JJ.icon,
                                    children: (0, XJ.jsx)(eJ.d, {
                                      itemName: JJ.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, cJ)), AJ = ""
                            })), ZJ.push(AJ), (0, XJ.jsx)(XJ.Fragment, {
                              children: ZJ
                            })
                          }
                        }, 4162: (JJ, cJ, ZJ) => {
                          ZJ.d(cJ, {
                            h: () => rJ,
                            e: () => xJ
                          });
                          var FJ = ZJ(47),
                            UJ = ZJ(1326),
                            eJ = ZJ(1675),
                            XJ = ZJ(4164),
                            AJ = ZJ(990);
                          const qJ = (0, FJ.memo)((function(JJ) {
                            let {
                              initialParameters: cJ
                            } = JJ;
                            const ZJ = (0, FJ.useRef)(null),
                              UJ = (0, FJ.useRef)(null),
                              qJ = (0, FJ.useRef)(0),
                              jJ = (0, FJ.useRef)(null),
                              YJ = cJ.description,
                              hJ = cJ.MU,
                              {
                                scale: DJ,
                                rotation: sJ
                              } = null !== cJ && void 0 !== cJ ? cJ : {},
                              nJ = (0, XJ.g)();
                            return (0, FJ.useEffect)((() => {
                              const JJ = nJ.onFrame((() => {
                                const JJ = nJ.getState();
                                if (!JJ.isActive || !ZJ.current || !UJ.current) return;
                                const cJ = JJ.state;
                                if (ZJ.current.value = cJ.progress, cJ.clickCount > qJ.current) {
                                  qJ.current = cJ.clickCount;
                                  const JJ = UJ.current;
                                  JJ.classList.add("pulse"), jJ.current = setTimeout((() => {
                                    JJ.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(jJ.current), JJ()
                              }
                            }), [nJ]), (0, AJ.jsx)(AJ.Fragment, {
                              children: (0, AJ.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== DJ && {
                                    "--scale": DJ
                                  },
                                  ...null !== sJ && {
                                    "--rotation": `${sJ}deg`
                                  }
                                },
                                children: [(0, AJ.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: ZJ
                                }), (0, AJ.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: UJ,
                                  children: (0, AJ.jsx)(eJ.d, {
                                    text: [{
                                      icon: hJ
                                    }]
                                  })
                                }), (0, AJ.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, AJ.jsx)(eJ.d, {
                                    text: YJ
                                  })
                                })]
                              })
                            })
                          }));
                          var jJ = ZJ(926),
                            YJ = ZJ.n(jJ);
                          const hJ = 2 * Math.PI * 90,
                            DJ = (0, FJ.memo)((function(JJ) {
                              let {
                                initialParameters: cJ
                              } = JJ;
                              const ZJ = (0, FJ.useRef)(null),
                                UJ = (0, FJ.useRef)(null),
                                qJ = (0, FJ.useRef)(null),
                                jJ = cJ.label,
                                DJ = cJ.icon,
                                sJ = cJ.WU,
                                {
                                  scale: nJ,
                                  rotation: GJ,
                                  gU: fJ
                                } = null !== cJ && void 0 !== cJ ? cJ : {},
                                xJ = (0, XJ.g)();
                              return (0, FJ.useEffect)((() => {
                                const JJ = xJ.onFrame((() => {
                                  var JJ, cJ;
                                  const FJ = xJ.getState();
                                  if (!FJ.isActive || !UJ.current) return;
                                  const eJ = FJ.state,
                                    XJ = null !== (JJ = eJ.timeRemaining) && void 0 !== JJ ? JJ : 0,
                                    AJ = null !== (cJ = eJ.wU) && void 0 !== cJ ? cJ : 1,
                                    jJ = hJ * (1 - XJ / AJ);
                                  UJ.current.style.strokeDashoffset = `${jJ}`, ZJ.current && (ZJ.current.style.opacity = XJ > 0 ? "1" : "0"), qJ.current && sJ && (qJ.current.textContent = `${(XJ/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  JJ()
                                }
                              }), [xJ, sJ]), (0, AJ.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: ZJ,
                                style: {
                                  ...null !== nJ && {
                                    "--scale": nJ
                                  },
                                  ...null !== GJ && {
                                    "--rotation": `${GJ}deg`
                                  }
                                },
                                children: [(0, AJ.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, AJ.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, AJ.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, AJ.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: hJ,
                                      ref: UJ
                                    })]
                                  }), (0, AJ.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, AJ.jsx)(eJ.d, {
                                      text: [{
                                        icon: DJ
                                      }],
                                      className: YJ()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: fJ
                                      })
                                    })
                                  })]
                                }), (0, AJ.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, AJ.jsx)(eJ.d, {
                                    text: jJ,
                                    className: "QTETimedClickLabelText"
                                  }), sJ && (0, AJ.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: qJ
                                  })]
                                })]
                              })
                            })),
                            sJ = (0, FJ.memo)((function(JJ) {
                              let {
                                initialParameters: cJ
                              } = JJ;
                              const ZJ = (0, FJ.useRef)(null),
                                UJ = (0, FJ.useRef)(null),
                                qJ = (0, FJ.useRef)(null),
                                jJ = (0, FJ.useRef)(!1),
                                YJ = cJ.description,
                                hJ = null === cJ || void 0 === cJ ? void 0 : cJ.icon,
                                DJ = (0, XJ.g)();
                              return (0, FJ.useEffect)((() => {
                                const JJ = DJ.onFrame((() => {
                                  const JJ = DJ.getState();
                                  if (!JJ.isActive) return;
                                  const cJ = JJ.state;
                                  if (ZJ.current) {
                                    const JJ = 100 * (cJ.catchZonePosition - cJ.PU / 2);
                                    ZJ.current.style.left = `${JJ}%`, ZJ.current.style.width = 100 * cJ.PU + "%", cJ.isCatching !== jJ.current && (jJ.current = cJ.isCatching, cJ.isCatching ? ZJ.current.classList.add("catching") : ZJ.current.classList.remove("catching"))
                                  }
                                  UJ.current && (UJ.current.style.left = 100 * cJ.moverPosition + "%"), qJ.current && (qJ.current.value = cJ.progress)
                                }));
                                return () => {
                                  JJ()
                                }
                              }), [DJ]), (0, AJ.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, AJ.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, AJ.jsx)(eJ.d, {
                                    text: YJ
                                  })
                                }), (0, AJ.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: qJ
                                }), (0, AJ.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, AJ.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: ZJ
                                  }), (0, AJ.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: UJ,
                                    children: (0, AJ.jsx)("span", {
                                      children: hJ && (0, AJ.jsx)(eJ.d, {
                                        text: [{
                                          icon: hJ,
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
                          var nJ = ZJ(535);
                          const GJ = (0, FJ.memo)((function(JJ) {
                              let {
                                initialParameters: cJ
                              } = JJ;
                              const ZJ = (0, FJ.useRef)(null),
                                UJ = cJ.label,
                                qJ = cJ.TU,
                                {
                                  icon: jJ,
                                  scale: YJ,
                                  rotation: hJ
                                } = null !== cJ && void 0 !== cJ ? cJ : {},
                                DJ = 100 * (.5 - qJ / 2),
                                sJ = 100 * qJ,
                                GJ = (0, XJ.g)();
                              return (0, FJ.useEffect)((() => {
                                const JJ = GJ.onFrame((() => {
                                  const JJ = GJ.getState();
                                  if (!JJ.isActive || !ZJ.current) return;
                                  const cJ = JJ.state;
                                  ZJ.current.style.left = 100 * cJ.markerPosition + "%"
                                }));
                                return () => {
                                  JJ()
                                }
                              }), [GJ]), (0, AJ.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, nJ.P)(YJ) && {
                                    "--scale": YJ
                                  },
                                  ...!(0, nJ.P)(hJ) && {
                                    "--rotation": `${hJ}deg`
                                  }
                                },
                                children: [jJ && (0, AJ.jsx)(eJ.d, {
                                  text: [{
                                    icon: jJ
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, AJ.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, AJ.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${DJ}%`,
                                      width: `${sJ}%`
                                    }
                                  }), (0, AJ.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: ZJ
                                  })]
                                }), (0, AJ.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, AJ.jsx)(eJ.d, {
                                    text: UJ
                                  })
                                })]
                              })
                            })),
                            fJ = (0, FJ.memo)((function(JJ) {
                              let {
                                initialParameters: cJ
                              } = JJ;
                              const ZJ = (0, FJ.useRef)(null),
                                [UJ, qJ] = (0, FJ.useState)((() => new Array(cJ.uU).fill("pending"))),
                                [jJ, YJ] = (0, FJ.useState)((() => {
                                  const JJ = cJ.LU;
                                  return (0, nJ.P)(JJ) || JJ <= 0 ? [] : new Array(JJ).fill("pending")
                                })),
                                hJ = cJ.label,
                                {
                                  icon: DJ
                                } = cJ,
                                sJ = (0, FJ.useRef)(0),
                                GJ = (0, FJ.useRef)(0),
                                fJ = (0, FJ.useRef)([]),
                                xJ = (0, XJ.g)();
                              return (0, FJ.useEffect)((() => {
                                const JJ = xJ.onFrame((() => {
                                  const JJ = xJ.getState();
                                  if (!JJ.isActive || !ZJ.current) return;
                                  const cJ = JJ.state,
                                    FJ = 30 + 60 * cJ.outerCircleProgress;
                                  if (ZJ.current.setAttribute("r", String(FJ)), !0 === cJ.lastClickResult && cJ.successes > sJ.current) {
                                    ZJ.current.classList.remove("QTERhythmClickOuterCircle--miss"), ZJ.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const JJ = setTimeout((() => {
                                      var JJ;
                                      null === (JJ = ZJ.current) || void 0 === JJ || JJ.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    fJ.current.push(JJ)
                                  } else if (!1 === cJ.lastClickResult && cJ.misses > GJ.current) {
                                    ZJ.current.classList.remove("QTERhythmClickOuterCircle--hit"), ZJ.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const JJ = setTimeout((() => {
                                      var JJ;
                                      null === (JJ = ZJ.current) || void 0 === JJ || JJ.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    fJ.current.push(JJ)
                                  }
                                  cJ.successes === sJ.current && cJ.misses === GJ.current || (sJ.current = cJ.successes, GJ.current = cJ.misses, qJ((JJ => {
                                    const ZJ = [...JJ];
                                    for (let FJ = 0; FJ < cJ.uU; FJ++) ZJ[FJ] = FJ < cJ.successes ? "success" : "pending";
                                    return ZJ
                                  })), YJ((JJ => {
                                    if (0 === JJ.length) return JJ;
                                    const ZJ = [...JJ];
                                    for (let FJ = 0; FJ < ZJ.length; FJ++) ZJ[FJ] = FJ < cJ.misses ? "miss" : "pending";
                                    return ZJ
                                  })))
                                }));
                                return () => {
                                  JJ();
                                  for (const JJ of fJ.current) clearTimeout(JJ);
                                  fJ.current = []
                                }
                              }), [xJ]), (0, AJ.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, AJ.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: UJ.map(((JJ, cJ) => (0, AJ.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === JJ ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, cJ)))
                                }), (0, AJ.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, AJ.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, AJ.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, AJ.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: ZJ
                                    })]
                                  }), DJ && (0, AJ.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, AJ.jsx)(eJ.d, {
                                      text: [{
                                        icon: DJ
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), jJ.length > 0 && (0, AJ.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: jJ.map(((JJ, cJ) => (0, AJ.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === JJ ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, cJ)))
                                }), (0, AJ.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, AJ.jsx)(eJ.d, {
                                    text: hJ
                                  })
                                })]
                              })
                            }));

                          function xJ(JJ) {
                            let {
                              qte: cJ
                            } = JJ;
                            switch (cJ.type) {
                              case "progressBar":
                                return (0, AJ.jsx)(qJ, {
                                  initialParameters: cJ.parameters
                                });
                              case "timedClick":
                                return (0, AJ.jsx)(DJ, {
                                  initialParameters: cJ.parameters
                                });
                              case "gravityBar":
                                return (0, AJ.jsx)(sJ, {
                                  initialParameters: cJ.parameters
                                });
                              case "precisionBar":
                                return (0, AJ.jsx)(GJ, {
                                  initialParameters: cJ.parameters
                                });
                              case "rhythmClick":
                                return (0, AJ.jsx)(fJ, {
                                  initialParameters: cJ.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const rJ = (0, FJ.memo)((function() {
                            const [JJ, cJ] = (0, FJ.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, UJ.i)("qteStateUpdated", (JJ => {
                              cJ(JJ)
                            })), JJ.isActive && JJ.type ? (0, AJ.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, AJ.jsx)(xJ, {
                                qte: JJ
                              })
                            }) : null
                          }))
                        }, 4164: (JJ, cJ, ZJ) => {
                          ZJ.d(cJ, {
                            c: () => AJ,
                            g: () => qJ
                          });
                          var FJ = ZJ(47),
                            UJ = ZJ(1192),
                            eJ = ZJ(4171);
                          const XJ = {
                              getState: () => eJ.c.getCurrentState(),
                              onFrame: UJ.n
                            },
                            AJ = (0, FJ.createContext)(XJ);

                          function qJ() {
                            return (0, FJ.useContext)(AJ)
                          }
                        }, 4242: (JJ, cJ, ZJ) => {
                          ZJ.d(cJ, {
                            d: () => HJ,
                            f: () => gJ
                          });
                          var FJ = ZJ(4245),
                            UJ = ZJ(227);
                          const eJ = 120,
                            XJ = 260,
                            AJ = 1.15,
                            qJ = 1.2,
                            jJ = 2,
                            YJ = 1.08,
                            hJ = .8,
                            DJ = .95,
                            sJ = 8,
                            nJ = "[\"')\\]\u300d\u300f\uff09]*",
                            GJ = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${nJ}$`),
                            fJ = new RegExp(`[?\uff1f]${nJ}$`),
                            xJ = new RegExp(`[!\uff01]${nJ}$`),
                            rJ = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            vJ = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            mJ = new RegExp(`[${vJ}]`),
                            QJ = new RegExp(`[${vJ}]|[^${vJ}]+`, "g"),
                            EJ = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function VJ(JJ) {
                            let cJ = 2166136261;
                            for (let ZJ = 0; ZJ < JJ.length; ZJ++) cJ ^= JJ.charCodeAt(ZJ), cJ = Math.imul(cJ, 16777619);
                            return (cJ >>> 0) / 4294967295 * 2 - 1
                          }

                          function KJ(JJ) {
                            var cJ;
                            if (mJ.test(JJ)) return 1;
                            const ZJ = JJ.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              FJ = ZJ.replace(/[^0-9]/g, "");
                            if (FJ.length > 0 && !/\p{L}/u.test(ZJ)) return Math.min(FJ.length, 4);
                            const UJ = null !== (cJ = ZJ.match(EJ)) && void 0 !== cJ ? cJ : [];
                            if (0 === UJ.length) {
                              var eJ, XJ;
                              const JJ = null !== (eJ = null === (XJ = ZJ.match(/\p{L}/gu)) || void 0 === XJ ? void 0 : XJ.length) && void 0 !== eJ ? eJ : 0;
                              return 0 === JJ ? 0 : Math.min(Math.max(1, Math.round(JJ / 2.5)), sJ)
                            }
                            const AJ = ZJ.replace(/[^\p{L}]/gu, ""),
                              qJ = UJ.length > 1 && "e" === UJ.at(-1) && AJ.endsWith("e") && !AJ.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(JJ.replace(/[^\p{L}]/gu, ""));
                            return Math.min(UJ.length - (qJ ? 1 : 0), sJ)
                          }

                          function yJ(JJ) {
                            return JJ.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function SJ(JJ) {
                            const cJ = JJ.replace(/[^\p{L}]/gu, "");
                            return cJ.length >= 2 && cJ === cJ.toUpperCase() && cJ !== cJ.toLowerCase()
                          }

                          function IJ(JJ, cJ) {
                            var ZJ;
                            const sJ = cJ && (0, FJ.h)(cJ),
                              nJ = null !== (ZJ = null === sJ || void 0 === sJ ? void 0 : sJ.syllableMs) && void 0 !== ZJ ? ZJ : FJ.c,
                              vJ = function(JJ) {
                                const cJ = [];
                                for (const FJ of (0, UJ.Sb)(JJ))
                                  if ("string" === typeof FJ)
                                    for (const JJ of FJ.split(/(\s+)/)) {
                                      if ("" === JJ) continue;
                                      if (/^\s+$/.test(JJ)) {
                                        cJ.push({
                                          kind: "space",
                                          text: JJ
                                        });
                                        continue
                                      }
                                      if (!mJ.test(JJ)) {
                                        cJ.push({
                                          kind: "word",
                                          text: JJ,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let FJ = !0;
                                      for (const UJ of null !== (ZJ = JJ.match(QJ)) && void 0 !== ZJ ? ZJ : []) {
                                        var ZJ;
                                        const JJ = cJ.at(-1);
                                        FJ || "word" !== (null === JJ || void 0 === JJ ? void 0 : JJ.kind) || mJ.test(UJ) || /[\p{L}\p{N}]/u.test(UJ) ? (FJ || cJ.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), cJ.push({
                                          kind: "word",
                                          text: UJ,
                                          delayMs: 0
                                        }), FJ = !1) : JJ.text += UJ
                                      }
                                    } else cJ.push({
                                      kind: "icon",
                                      text: FJ.icon,
                                      delayMs: 0
                                    });
                                return cJ
                              }(JJ),
                              EJ = [];
                            let IJ = [];
                            for (const FJ of vJ) "space" !== FJ.kind && (IJ.push(FJ), GJ.test(FJ.text) && (EJ.push(IJ), IJ = []));
                            EJ.push(IJ);
                            const MJ = [];
                            let bJ = 0;
                            for (const FJ of EJ) {
                              var wJ, WJ;
                              const JJ = null !== (wJ = null === (WJ = FJ.at(-1)) || void 0 === WJ ? void 0 : WJ.text) && void 0 !== wJ ? wJ : "",
                                cJ = fJ.test(JJ),
                                ZJ = xJ.test(JJ),
                                UJ = FJ.map((JJ => "word" === JJ.kind ? KJ(JJ.text) : 1)),
                                vJ = UJ.findLastIndex((JJ => JJ > 0));
                              for (const [fJ, xJ] of FJ.entries()) {
                                const JJ = "word" === xJ.kind,
                                  FJ = UJ[fJ];
                                xJ.delayMs = bJ;
                                for (let UJ = 0; sJ && UJ < FJ; UJ++) {
                                  const {
                                    intonation: eJ
                                  } = sJ;
                                  let XJ = vJ > 0 ? -eJ.declineSemitones * (fJ / vJ) : 0;
                                  XJ += VJ(`${yJ(xJ.text)}|${UJ}`) * eJ.variationSemitones;
                                  const GJ = Math.min(1, eJ.variationSemitones);
                                  let rJ = sJ.glideSemitones,
                                    mJ = 1;
                                  ZJ && (XJ += eJ.exclaimLiftSemitones, mJ *= AJ), cJ && fJ === vJ && (XJ += eJ.questionRiseSemitones * (FJ > 1 ? .5 + .5 * UJ / (FJ - 1) : 1), UJ === FJ - 1 && (rJ = Math.abs(rJ) + eJ.questionRiseSemitones / 2)), JJ && SJ(xJ.text) && (XJ += jJ * GJ, mJ *= qJ), FJ > 1 && 0 === UJ && (XJ += hJ * GJ, mJ *= YJ), MJ.push({
                                    atMs: bJ + UJ * nJ,
                                    semitones: XJ,
                                    glideSemitones: rJ,
                                    durationMs: UJ < FJ - 1 ? Math.min(sJ.durationMs, nJ * DJ) : sJ.durationMs,
                                    level: mJ
                                  })
                                }
                                bJ += FJ * nJ + (GJ.test(xJ.text) ? XJ : rJ.test(xJ.text) ? eJ : 0)
                              }
                            }
                            return {
                              pieces: vJ.map((JJ => "space" === JJ.kind ? JJ : "icon" === JJ.kind ? {
                                kind: "icon",
                                icon: JJ.text,
                                delayMs: JJ.delayMs
                              } : {
                                kind: "word",
                                text: JJ.text,
                                delayMs: JJ.delayMs
                              })),
                              blips: MJ
                            }
                          }
                          var MJ = ZJ(1086),
                            bJ = ZJ(1151),
                            wJ = ZJ(1712);

                          function WJ(JJ) {
                            if ("string" === typeof JJ) return JJ;
                            const cJ = bJ.e.get().getCurrentLanguageCode();
                            return (0, MJ.t)(cJ, JJ.translationKey, (0, MJ.s)(JJ.params, wJ.d.shown))
                          }

                          function gJ(JJ) {
                            const cJ = void 0 === JJ.voice ? null : (0, FJ.k)(JJ.voice),
                              ZJ = cJ && (0, FJ.h)(cJ);
                            return {
                              plan: IJ(WJ(JJ.line), ZJ),
                              synth: ZJ
                            }
                          }

                          function HJ(JJ) {
                            const cJ = [];
                            let ZJ = [];
                            for (const [UJ, eJ] of JJ.entries()) {
                              var FJ;
                              "space" === eJ.kind && (" " !== eJ.text || "icon" !== (null === (FJ = JJ[UJ + 1]) || void 0 === FJ ? void 0 : FJ.kind)) ? (ZJ.length > 0 && cJ.push(ZJ), cJ.push([eJ]), ZJ = []) : ZJ.push(eJ)
                            }
                            return ZJ.length > 0 && cJ.push(ZJ), cJ
                          }
                        }, 4254: (JJ, cJ, ZJ) => {
                          ZJ.d(cJ, {
                            c: () => YJ,
                            e: () => hJ
                          });
                          var FJ = ZJ(4259),
                            UJ = ZJ(13);
                          const eJ = .25,
                            XJ = .85,
                            AJ = .02,
                            qJ = .01;

                          function jJ(JJ, cJ, ZJ, FJ, UJ, eJ, AJ) {
                            const {
                              waveform: qJ,
                              pitchHz: jJ,
                              attackMs: YJ,
                              releaseMs: hJ,
                              lowpassHz: DJ
                            } = ZJ, sJ = UJ + FJ.durationMs / 1e3, nJ = jJ * 2 ** (FJ.semitones / 12), GJ = JJ.createOscillator();
                            GJ.type = qJ, GJ.frequency.setValueAtTime(nJ, UJ), GJ.frequency.exponentialRampToValueAtTime(nJ * 2 ** (FJ.glideSemitones / 12), sJ);
                            const fJ = UJ + Math.min(YJ, FJ.durationMs) / 1e3,
                              xJ = JJ.createGain();
                            xJ.gain.setValueAtTime(0, UJ), xJ.gain.linearRampToValueAtTime(eJ, fJ), xJ.gain.linearRampToValueAtTime(eJ * XJ, Math.max(fJ, sJ - hJ / 1e3)), xJ.gain.linearRampToValueAtTime(0, sJ);
                            const rJ = [GJ];
                            if (null !== DJ) {
                              const cJ = JJ.createBiquadFilter();
                              cJ.type = "lowpass", cJ.frequency.value = DJ, rJ.push(cJ)
                            }
                            rJ.push(xJ, cJ);
                            for (let XJ = 1; XJ < rJ.length; XJ++) rJ[XJ - 1].connect(rJ[XJ]);
                            return GJ.onended = () => {
                              for (const JJ of rJ.slice(0, -1)) JJ.disconnect();
                              AJ()
                            }, GJ.start(UJ), GJ.stop(sJ), GJ
                          }

                          function YJ(JJ, cJ, ZJ, FJ, UJ, XJ) {
                            if (0 === FJ.length) return XJ(), () => {};
                            const YJ = eJ * ZJ.volume * UJ,
                              hJ = JJ.createGain();
                            hJ.connect(cJ);
                            const DJ = JJ.currentTime + AJ,
                              sJ = new Set;
                            for (const eJ of FJ) {
                              const cJ = jJ(JJ, hJ, ZJ, eJ, DJ + eJ.atMs / 1e3, YJ * eJ.level, (() => {
                                sJ.delete(cJ), 0 === sJ.size && (hJ.disconnect(), XJ())
                              }));
                              sJ.add(cJ)
                            }
                            return () => {
                              const cJ = JJ.currentTime;
                              hJ.gain.setTargetAtTime(0, cJ, qJ);
                              for (const JJ of sJ) try {
                                JJ.stop(cJ + 5 * qJ)
                              } catch {}
                            }
                          }

                          function hJ(JJ, cJ) {
                            var ZJ;
                            const eJ = FJ.b.ctx,
                              XJ = FJ.b.masterGain;
                            if (!eJ || !XJ || !UJ.d.get("soundOnFromAd")) return () => {};
                            const AJ = FJ.b;
                            return null === (ZJ = AJ._autoResume) || void 0 === ZJ || ZJ.call(AJ), YJ(eJ, XJ, JJ, cJ, UJ.d.get("soundVolume"), (() => {
                              var JJ;
                              null === (JJ = AJ._autoSuspend) || void 0 === JJ || JJ.call(AJ)
                            }))
                          }
                        }, 4259: (JJ, cJ, ZJ) => {
                          ZJ.d(cJ, {
                            Howl: () => FJ.Howl,
                            b: () => FJ.Howler,
                            readyAudioContext: () => UJ
                          });
                          var FJ = ZJ(4267);

                          function UJ() {
                            const JJ = FJ.Howler;
                            var cJ;
                            (JJ.volume(), JJ.ctx && JJ.autoUnlock) && (null === (cJ = JJ._unlockAudio) || void 0 === cJ || cJ.call(JJ))
                          }
                          FJ.Howler._mobileUnloaded = !0
                        }, 4275: (JJ, cJ, ZJ) => {
                          function FJ(JJ) {
                            return {
                              notAfter: JJ
                            }
                          }
                          ZJ.d(cJ, {
                            d: () => qJ,
                            h: () => jJ,
                            j: () => AJ,
                            k: () => FJ,
                            m: () => UJ,
                            o: () => eJ,
                            p: () => XJ,
                            q: () => YJ,
                            u: () => hJ
                          });
                          const UJ = FJ("\\w$."),
                            eJ = FJ("\\w.,");

                          function XJ(JJ) {
                            return cJ => qJ(cJ, JJ)
                          }

                          function AJ(JJ) {
                            return cJ => !JJ.test(cJ.input.slice(0, cJ.index))
                          }

                          function qJ(JJ, cJ) {
                            return JJ.index > 0 && new RegExp(`[${cJ}]`).test(JJ.input[JJ.index - 1])
                          }

                          function jJ(JJ, cJ, ZJ) {
                            return function(JJ) {
                              return void 0 !== JJ && "function" !== typeof JJ
                            }(ZJ) ? function(JJ, cJ, ZJ) {
                              const FJ = cJ.flags.replace(/[gy]/g, ""),
                                UJ = new RegExp(`[^${ZJ}](?:${cJ.source})`, `${FJ}g`),
                                eJ = [],
                                XJ = ZJ => {
                                  const FJ = ZJ.index + ZJ[0].length;
                                  return ("" === ZJ[0] ? DJ(JJ, cJ, FJ) : FJ) - 1
                                },
                                AJ = new RegExp(`(?:${cJ.source})`, `${FJ}y`).exec(JJ);
                              if (AJ) {
                                if (eJ.push(AJ), !cJ.global) return eJ;
                                UJ.lastIndex = XJ(AJ)
                              }
                              for (let qJ = UJ.exec(JJ); qJ; qJ = UJ.exec(JJ)) {
                                const ZJ = DJ(JJ, cJ, qJ.index) - qJ.index;
                                if (qJ[0] = qJ[0].slice(ZJ), qJ.index += ZJ, eJ.push(qJ), !cJ.global) break;
                                UJ.lastIndex = XJ(qJ)
                              }
                              return eJ
                            }(JJ, cJ, ZJ.notAfter) : function(JJ, cJ, ZJ) {
                              const FJ = new RegExp(cJ.source, `${cJ.flags.replace(/[gy]/g,"")}g`),
                                UJ = [];
                              for (let eJ = FJ.exec(JJ); eJ; eJ = FJ.exec(JJ))
                                if (!ZJ || ZJ(eJ)) {
                                  if (UJ.push(eJ), !cJ.global) break;
                                  "" === eJ[0] && (FJ.lastIndex = DJ(JJ, cJ, FJ.lastIndex))
                                } else FJ.lastIndex = DJ(JJ, cJ, eJ.index);
                              return UJ
                            }(JJ, cJ, ZJ)
                          }

                          function YJ(JJ, cJ, ZJ, FJ) {
                            let UJ = "",
                              eJ = 0;
                            for (const XJ of jJ(JJ, cJ, ZJ)) UJ += JJ.slice(eJ, XJ.index) + FJ(XJ), eJ = XJ.index + XJ[0].length;
                            return UJ + JJ.slice(eJ)
                          }

                          function hJ(JJ, cJ, ZJ) {
                            const FJ = [];
                            let UJ = 0;
                            for (const eJ of jJ(JJ, cJ, ZJ)) FJ.push(JJ.slice(UJ, eJ.index)), UJ = eJ.index + eJ[0].length;
                            return [...FJ, JJ.slice(UJ)]
                          }

                          function DJ(JJ, cJ, ZJ) {
                            var FJ;
                            return ZJ + (cJ.unicode && (null !== (FJ = JJ.codePointAt(ZJ)) && void 0 !== FJ ? FJ : 0) > 65535 ? 2 : 1)
                          }
                        }, 4220: (JJ, cJ, ZJ) => {
                          ZJ.d(cJ, {
                            b: () => UJ,
                            d: () => qJ,
                            e: () => eJ,
                            f: () => XJ,
                            j: () => AJ,
                            l: () => fJ,
                            n: () => YJ,
                            o: () => hJ,
                            r: () => GJ,
                            u: () => sJ
                          });
                          var FJ = ZJ(1475);
                          const UJ = 24e3,
                            eJ = "/docs/llms.txt",
                            XJ = `${FJ.e}${eJ}`,
                            AJ = "/llms.txt",
                            qJ = "/docs/llms-full.txt";

                          function jJ(JJ) {
                            return JJ || "index"
                          }

                          function YJ(JJ) {
                            return `/docs/${jJ(JJ)}.md`
                          }

                          function hJ(JJ, cJ) {
                            return `/docs/${jJ(JJ)}/${cJ+1}.md`
                          }
                          const DJ = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function sJ(JJ) {
                            const cJ = DJ.exec(JJ);
                            return null === cJ ? null : {
                              name: cJ[1],
                              part: void 0 === cJ[2] ? null : Number(cJ[2])
                            }
                          }
                          const nJ = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function GJ(JJ) {
                            const cJ = nJ.exec(JJ);
                            if (null === cJ) return null;
                            const [, ZJ = "", FJ] = cJ;
                            return void 0 === FJ ? YJ(ZJ) : hJ(ZJ, Number(FJ) - 1)
                          }

                          function fJ(JJ) {
                            return `/docsHtml/${jJ(JJ)}.html`
                          }
                        }, 4245: (JJ, cJ, ZJ) => {
                          ZJ.d(cJ, {
                            c: () => UJ,
                            d: () => FJ,
                            f: () => eJ,
                            h: () => qJ,
                            k: () => XJ
                          });
                          const FJ = ["sine", "triangle", "square", "sawtooth"],
                            UJ = 55,
                            eJ = {
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

                          function XJ(JJ) {
                            return "string" !== typeof JJ ? JJ : Object.hasOwn(eJ, JJ) ? eJ[JJ] : null
                          }

                          function AJ(JJ, cJ, ZJ) {
                            return Math.min(ZJ, Math.max(cJ, JJ))
                          }

                          function qJ(JJ) {
                            const cJ = AJ(JJ.durationMs, 10, 500),
                              ZJ = AJ(JJ.attackMs, 0, cJ),
                              {
                                intonation: UJ
                              } = JJ;
                            return {
                              waveform: FJ.includes(JJ.waveform) ? JJ.waveform : "sine",
                              pitchHz: AJ(JJ.pitchHz, 20, 4e3),
                              glideSemitones: AJ(JJ.glideSemitones, -24, 24),
                              durationMs: cJ,
                              attackMs: ZJ,
                              releaseMs: AJ(JJ.releaseMs, 0, cJ - ZJ),
                              lowpassHz: null === JJ.lowpassHz ? null : AJ(JJ.lowpassHz, 20, 2e4),
                              volume: AJ(JJ.volume, 0, 2),
                              intonation: {
                                variationSemitones: AJ(UJ.variationSemitones, 0, 6),
                                declineSemitones: AJ(UJ.declineSemitones, 0, 12),
                                questionRiseSemitones: AJ(UJ.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: AJ(UJ.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: AJ(JJ.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const JJ in modules) Object.freeze(modules[JJ]);