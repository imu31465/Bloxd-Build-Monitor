export const id = 75;
export const ids = [75, 91];
export const modules = {
    4408: (YY, rY, DY) => {
      DY.d(rY, {
        b: () => oY,
        d: () => WY
      });
      var FY = DY(1092),
        AY = DY.n(FY),
        IY = DY(61),
        RY = DY(1211),
        OY = DY(4410),
        gY = DY(1778),
        aY = DY(2282),
        vY = DY(4419),
        uY = DY(1125);
      const sY = new WeakMap;
      let iY = 0;

      function yY(YY) {
        let rY = sY.get(YY);
        return void 0 === rY && (rY = iY++, sY.set(YY, rY)), rY
      }

      function QY(YY) {
        let {
          piece: rY
        } = YY;
        return "space" === rY.kind ? (0, uY.jsx)(uY.Fragment, {
          children: rY.text
        }) : (0, uY.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${rY.delayMs}ms`
          },
          children: (0, uY.jsx)(OY.c, {
            text: "icon" === rY.kind ? `[[${rY.icon}]]` : rY.text
          })
        })
      }

      function oY(YY) {
        let {
          display: rY
        } = YY;
        const {
          selectedLanguage: DY
        } = (0, RY.C)(), FY = (0, IY.useMemo)((() => (0, vY.e)((0, vY.g)(rY).plan.pieces)), [rY, DY.code]);
        return (0, uY.jsxs)("div", {
          className: AY()("Dialogue", {
            DialogueAnimateIn: !1 !== rY.animateIn
          }),
          children: [rY.speakerName && (0, uY.jsx)(gY.b, {
            text: rY.speakerName,
            className: "DialogueSpeaker"
          }), (0, uY.jsx)("p", {
            className: "DialogueLine",
            children: FY.map(((YY, rY) => 1 === YY.length && "space" === YY[0].kind ? YY[0].text : (0, uY.jsx)("span", {
              className: "DialogueGlue",
              children: YY.map(((YY, rY) => (0, uY.jsx)(QY, {
                piece: YY
              }, rY)))
            }, rY)))
          })]
        })
      }
      const WY = (0, IY.memo)((function() {
        const YY = (0, aY.j)("dialogue");
        return (0, uY.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: YY && (0, uY.jsx)(oY, {
            display: YY
          }, yY(YY))
        })
      }))
    },
    4281: (YY, rY, DY) => {
        DY.r(rY), DY.d(rY, {
          default: () => LI
        });
        var FY = DY(61),
          AY = DY(1092),
          IY = DY.n(AY),
          RY = DY(1492),
          OY = DY(1501),
          gY = DY(19),
          aY = DY(76),
          vY = DY(4290),
          uY = DY(4299),
          sY = DY(4308),
          iY = DY(3918),
          yY = DY(1125);
        const QY = "/textures/docs/icons";

        function oY(YY) {
          let {
            name: rY,
            isTinted: DY,
            className: FY,
            style: AY
          } = YY;
          const RY = `${QY}/${rY}.png`;
          return DY ? (0, yY.jsxs)("span", {
            className: IY()("DocsPixelIcon", "Tinted", FY),
            "aria-hidden": "true",
            style: AY,
            children: [(0, yY.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${RY}")`,
                WebkitMaskImage: `url("${RY}")`
              }
            }), (0, yY.jsx)("img", {
              src: RY,
              alt: ""
            })]
          }) : (0, yY.jsx)("img", {
            className: IY()("DocsPixelIcon", FY),
            src: RY,
            alt: "",
            "aria-hidden": "true",
            style: AY
          })
        }
        const WY = 1500;

        function EY() {
          const [YY, rY] = (0, FY.useState)(null);
          (0, FY.useEffect)((() => {
            if (null === YY) return;
            const DY = setTimeout((() => {
              rY(null)
            }), WY);
            return () => {
              clearTimeout(DY)
            }
          }), [YY]);
          return [YY, YY => {
            (0, iY.b)(YY).then((() => {
              rY({
                text: YY,
                failed: !1
              })
            }), (DY => {
              console.error("Could not copy to the clipboard", DY), rY({
                text: YY,
                failed: !0
              })
            }))
          }]
        }

        function mY(YY) {
          let {
            text: rY,
            label: DY,
            className: FY
          } = YY;
          const [AY, RY] = EY(), OY = !1 === (null === AY || void 0 === AY ? void 0 : AY.failed);
          return (0, yY.jsxs)("button", {
            type: "button",
            className: IY()("DocsCopyButton", FY, {
              Copied: OY
            }),
            title: `Copy ${rY.length>40?"to clipboard":rY}`,
            "aria-label": DY ? void 0 : `Copy ${rY}`,
            onClick: YY => {
              YY.stopPropagation(), RY(rY)
            },
            children: [(0, yY.jsx)(oY, {
              name: OY ? "check" : "copy"
            }), DY && (0, yY.jsx)("span", {
              children: OY ? "Copied" : null !== AY && void 0 !== AY && AY.failed ? "Copy failed" : DY
            })]
          })
        }
        vY.e.registerLanguage("javascript", uY.d), vY.e.registerLanguage("typescript", sY.d);
        const VY = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          SY = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          lY = 24;

        function TY(YY) {
          let {
            code: rY,
            lang: DY,
            compact: AY = !1
          } = YY;
          const RY = (0, FY.useMemo)((() => function(YY, rY) {
              const DY = VY[rY];
              return DY ? vY.e.highlight(YY, {
                language: DY
              }).value : YY.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(rY, DY)), [rY, DY]),
            OY = rY.split("\n").length,
            gY = !AY && OY > lY + 6,
            [aY, uY] = (0, FY.useState)(!1),
            sY = VY[DY];
          return (0, yY.jsxs)("div", {
            className: IY()("DocsCodeBlock", {
              Compact: AY,
              Collapsed: gY && !aY
            }),
            children: [!AY && (0, yY.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, yY.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: sY ? SY[sY] : "Text"
              }), (0, yY.jsx)(mY, {
                text: rY,
                label: "Copy"
              })]
            }), (0, yY.jsx)("pre", {
              children: (0, yY.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: RY
                }
              })
            }), gY && (0, yY.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": aY,
              onClick: () => {
                uY(!aY)
              },
              children: [(0, yY.jsx)(oY, {
                name: aY ? "chevron-up" : "chevron-down"
              }), aY ? "Show less" : `Show all ${OY} lines`]
            })]
          })
        }
        var eY = DY(4313);
        var NY = DY(4322);
        const BY = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function cY(YY) {
          const rY = new Map;
          let DY, FY = [],
            AY = !1;
          const IY = () => {
            DY && rY.set(DY.name, DY.lines.join("\n").trimEnd())
          };
          for (const RY of YY.split("\n")) {
            const YY = RY.match(BY);
            AY || RY.startsWith("/*") ? (AY || (IY(), DY = void 0), FY.push(RY), AY = !RY.includes("*/")) : YY ? (IY(), DY = {
              name: YY[1],
              lines: [...FY, RY]
            }, FY = []) : DY && (RY.startsWith(" ") || RY.startsWith("\t") || /^[}\])|]/.test(RY)) ? DY.lines.push(RY) : DY && "" !== RY.trim() && (IY(), DY = void 0)
          }
          return IY(), rY
        }

        function KY(YY) {
          return "methods" === YY || "callbacks" === YY || "settings" === YY
        }
        const HY = {
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
              setterSnippet: (YY, rY) => `api.setClientOption(playerId, "${YY}", ${rY})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (YY, rY) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${YY}", ${rY})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (YY, rY) => `api.setMobSetting(mobId, "${YY}", ${rY})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (YY, rY) => `api.setVehicleSetting(vehicleId, "${YY}", ${rY})`
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
          zY = {
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

        function ZY(YY) {
          return YY.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function CY(YY) {
          let rY = !1;
          return YY.split("\n").map((YY => (YY.startsWith("```") && (rY = !rY), !rY && /^#{3,} /.test(YY) ? YY.slice(1) : YY))).join("\n")
        }

        function fY(YY) {
          return "readme" === YY ? "getting-started" : ZY(YY)
        }
        const jY = "## Glossary of Referenced Types";
        const hY = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...NY.b.flatMap((YY => {
            const rY = {
              id: YY.id,
              slug: fY(YY.id),
              title: YY.title,
              markdown: YY.content,
              ...HY[YY.id]
            };
            if ("readme" === YY.id) return function(YY) {
              const rY = YY.markdown.indexOf(jY),
                DY = YY.markdown.indexOf("\n```", rY),
                FY = YY.markdown.indexOf("\n```", DY + 1);
              if (-1 === rY || -1 === DY || -1 === FY) throw new Error(`Getting started has no "${jY}" section with a code block`);
              const AY = YY.markdown.slice(rY + 31, DY).trim(),
                IY = [...cY(YY.markdown.slice(YY.markdown.indexOf("\n", DY + 1) + 1, FY))].map((YY => {
                  let [rY, DY] = YY;
                  return `## ${rY}\n\n\`\`\`ts\n${DY}\n\`\`\`\n`
                })),
                RY = YY.markdown.slice(YY.markdown.indexOf("\n", FY + 1) + 1);
              return [{
                ...YY,
                markdown: `${YY.markdown.slice(0,rY)}${RY}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${AY}\n\n${IY.join("\n")}`
              }]
            }(rY);
            if ("howTo" === YY.id) {
              const {
                parent: YY,
                guides: DY
              } = function(YY) {
                const [rY, ...DY] = YY.markdown.split(/^(?=## )/m), FY = [rY], AY = [];
                for (const RY of DY) {
                  var IY;
                  const rY = RY.indexOf("\n"),
                    DY = RY.slice(3, rY).trim(),
                    OY = RY.slice(rY + 1);
                  if (!OY.includes("```")) {
                    FY.push(RY);
                    continue
                  }
                  const gY = null !== (IY = zY[DY]) && void 0 !== IY ? IY : {
                    icon: "lightbulb",
                    summary: `How to use ${DY.toLowerCase()} in World Code.`
                  };
                  AY.push({
                    id: `${YY.id}${DY.split(/[^A-Za-z0-9]+/).map((YY=>YY.charAt(0).toUpperCase()+YY.slice(1))).join("")}`,
                    slug: `${YY.slug}-${ZY(DY)}`,
                    title: DY,
                    layout: "article",
                    sourceAnchor: (0, eY.v)(DY),
                    markdown: `# ${DY}\n\n${CY(OY)}`,
                    ...gY
                  })
                }
                return {
                  parent: {
                    ...YY,
                    markdown: FY.join(""),
                    childPageIds: AY.map((YY => YY.id))
                  },
                  guides: AY
                }
              }(rY);
              return [YY, ...DY]
            }
            return [rY]
          }))],
          dY = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...hY.filter((YY => void 0 !== YY.sourceAnchor)).map((YY => YY.id))]
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

        function JY(YY) {
          return hY.find((rY => rY.id === YY))
        }
        const MY = new Map;

        function wY(YY) {
          let rY = MY.get(YY.id);
          return rY || (rY = (0, eY.z)(YY.markdown, "changelog" === YY.layout ? 3 : 2), MY.set(YY.id, rY)), rY
        }

        function bY(YY, rY) {
          return wY(YY).sections.some((YY => YY.heading.anchor === rY || YY.blocks.some((YY => "heading" === YY.kind && YY.anchor === rY))))
        }

        function XY(YY) {
          const [rY, ...DY] = YY.replace(/^#/, "").split("-"), FY = hY.find((YY => YY.id === rY));
          if (!FY) return null;
          const AY = DY.length > 0 ? (0, eY.v)(DY.join("-")) : "";
          for (const RY of null !== (IY = FY.childPageIds) && void 0 !== IY ? IY : []) {
            var IY;
            const YY = JY(RY);
            if (YY.sourceAnchor === AY) return {
              page: YY,
              anchor: ""
            };
            if (bY(YY, AY)) return {
              page: YY,
              anchor: AY
            }
          }
          return {
            page: FY,
            anchor: AY
          }
        }
        const qY = {
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

        function pY(YY, rY) {
          let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const FY = rY.slug ? `${YY}/${rY.slug}` : YY;
          return DY ? `${FY}#${DY}` : FY
        }
        var kY = DY(4340);
        const GY = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          xY = new Set(["GameApi", "Console", "_TypeOf"]),
          nY = 4;

        function PY(YY) {
          let rY = YY.length;
          for (; rY > 0 && "" === YY[rY - 1].trim();) rY--;
          return YY.slice(0, rY)
        }

        function UY(YY) {
          var rY;
          const DY = PY(YY);
          if (null === (rY = DY.at(-1)) || void 0 === rY || !rY.trimEnd().endsWith("*/")) return {
            lines: DY,
            doc: ""
          };
          const FY = DY.findLastIndex((YY => YY.startsWith("/**")));
          return -1 === FY ? {
            lines: DY,
            doc: ""
          } : {
            lines: PY(DY.slice(0, FY)),
            doc: DY.slice(FY).join("\n")
          }
        }

        function LY(YY) {
          var rY;
          const DY = YY.split("\n"),
            FY = DY.flatMap(((YY, rY) => GY.test(YY) ? [rY] : []));
          let AY = UY(DY.slice(0, null !== (rY = FY[0]) && void 0 !== rY ? rY : DY.length)).doc;
          return FY.map(((YY, rY) => {
            var IY;
            const RY = UY(DY.slice(YY, null !== (IY = FY[rY + 1]) && void 0 !== IY ? IY : DY.length)),
              OY = {
                name: DY[YY].match(GY)[1],
                doc: AY,
                lines: RY.lines
              };
            return AY = RY.doc, OY
          }))
        }

        function tY(YY) {
          var rY;
          const DY = YY.match(/^readonly \[([\s\S]*)\]$/);
          return DY ? null !== (rY = DY[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== rY ? rY : [] : null
        }

        function Yr(YY) {
          if (!YY.startsWith("{") || !YY.endsWith("}")) return null;
          const rY = {
              keys: [],
              values: []
            },
            DY = YY => {
              const DY = YY.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              DY && (rY.keys.push(DY[1].startsWith('"') ? DY[1] : `"${DY[1]}"`), rY.values.push(DY[2].trim()))
            };
          let FY = 0,
            AY = "";
          for (const IY of YY.slice(1, -1)) "{[(".includes(IY) ? FY++ : "}])".includes(IY) && FY--, ";" === IY && 0 === FY ? (DY(AY), AY = "") : AY += IY;
          return DY(AY), rY
        }

        function rr(YY) {
          return YY.length > nY ? `\n\t| ${YY.join("\n\t| ")}` : YY.join(" | ")
        }

        function Dr(YY, rY) {
          const DY = function(YY, rY) {
            return YY.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((YY, DY) => {
              var FY;
              const AY = null === (FY = rY.get(DY)) || void 0 === FY ? void 0 : FY.object;
              return AY ? rr(AY.values) : YY
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((YY, DY) => {
              var FY, AY;
              const IY = null === (FY = rY.get(DY)) || void 0 === FY || null === (AY = FY.object) || void 0 === AY ? void 0 : AY.values.map(tY);
              return null !== IY && void 0 !== IY && IY.every((YY => null !== YY)) ? rr([...new Set(IY.flat())]) : YY
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((YY, DY) => {
              var FY;
              const AY = null === (FY = rY.get(DY)) || void 0 === FY ? void 0 : FY.members;
              return AY ? rr(AY) : YY
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((YY, DY) => {
              var FY;
              const AY = null === (FY = rY.get(DY)) || void 0 === FY ? void 0 : FY.object;
              return AY ? rr(AY.keys) : YY
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((YY, DY) => {
              var FY, AY;
              return null !== (FY = null === (AY = rY.get(DY)) || void 0 === AY ? void 0 : AY.text) && void 0 !== FY ? FY : YY
            }))
          }(YY.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), rY);
          return [YY.doc, DY].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function Fr(YY) {
          const rY = LY(YY),
            DY = function(YY) {
              const rY = new Map,
                DY = YY.find((YY => "_TypeOf" === YY.name));
              let FY = null;
              const AY = () => {
                if (FY) {
                  const YY = FY.lines.join("\n");
                  rY.set(FY.name, {
                    text: YY,
                    members: tY(YY),
                    object: Yr(YY)
                  })
                }
              };
              for (const IY of DY.lines.slice(1, -1)) {
                const YY = IY.match(/^\t([\w$]+): (.+)$/);
                YY ? (AY(), FY = {
                  name: YY[1],
                  lines: [YY[2]]
                }) : FY && FY.lines.push(IY.replace(/^\t/, ""))
              }
              return AY(), rY
            }(rY),
            FY = new Map;
          for (const AY of rY) xY.has(AY.name) || FY.has(AY.name) || FY.set(AY.name, Dr(AY, DY));
          return FY
        }
        let Ar, Ir, Rr;

        function Or() {
          return Ir ??= function(YY) {
            const rY = LY(YY).find((YY => "GameApi" === YY.name)),
              DY = new Map,
              FY = rY.lines;
            for (let IY = 0; IY < FY.length; IY++) {
              var AY;
              if (!FY[IY].trimStart().startsWith("/**")) continue;
              const YY = IY;
              for (; IY < FY.length && !FY[IY].includes("*/");) IY++;
              const rY = null === (AY = FY[IY + 1]) || void 0 === AY ? void 0 : AY.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!rY) continue;
              let RY = null;
              const OY = [];
              let gY = "description",
                aY = !1;
              for (const DY of FY.slice(YY, IY + 1).join("\n").split("\n").map((YY => YY.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const YY = DY.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                YY ? (RY = YY[1].trim(), gY = "deprecation") : DY.startsWith("@") ? (gY = "otherTag", aY = !0) : "" === DY.trim() ? aY || (gY = "description", OY.push(DY)) : "deprecation" !== gY || /^[A-Z]/.test(DY.trim()) ? "otherTag" !== gY && (gY = "description", OY.push(DY)) : RY = `${RY} ${DY.trim()}`.trim()
              }
              DY.set(rY[1], {
                deprecation: RY,
                description: OY.join("\n").trim()
              })
            }
            return DY
          }(kY.default), Ir
        }

        function gr() {
          if (!Rr) {
            Rr = new Map;
            for (const YY of hY) {
              const rY = (0, eY.x)(wY(YY)).flatMap((YY => YY.blocks));
              for (const YY of (0, eY.l)(rY))
                if ("ts" === YY.lang || "typescript" === YY.lang)
                  for (const [rY, DY] of cY(YY.code)) Rr.set(rY, DY)
            }
            for (const [YY, rY] of(Ar ??= Fr(kY.default), Ar)) Rr.has(YY) || Rr.set(YY, rY)
          }
          return Rr
        }
        const ar = {
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
        let vr;

        function ur() {
          if (!vr) {
            vr = new Map;
            for (const YY of hY)
              if (KY(YY.layout))
                for (const rY of wY(YY).sections) vr.has(rY.heading.text) || vr.set(rY.heading.text, {
                  pageId: YY.id,
                  anchor: rY.heading.anchor
                })
          }
          return vr
        }

        function sr(YY) {
          const rY = YY.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return rY ? ur().get(rY[1]) : void 0
        }
        const ir = (0, FY.createContext)("/docs"),
          yr = (0, FY.createContext)(null),
          Qr = (0, FY.createContext)(!1),
          or = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function Wr(YY) {
          const rY = YY.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return rY ? rY[1] : null
        }

        function Er(YY) {
          let {
            colour: rY
          } = YY;
          return (0, yY.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: rY
            },
            "aria-hidden": "true"
          })
        }

        function mr(YY) {
          const rY = [];
          let DY = 0;
          for (const FY of YY.matchAll(or)) rY.push(YY.slice(DY, FY.index), (0, yY.jsx)(Er, {
            colour: FY[0]
          }), FY[0]), DY = FY.index + FY[0].length;
          return rY.push(YY.slice(DY)), rY
        }

        function Vr(YY) {
          let {
            href: rY,
            children: DY
          } = YY;
          const AY = (0, FY.useContext)(ir);
          if (rY.startsWith("#")) {
            const YY = XY(rY);
            if (YY) return (0, yY.jsx)(RY.e, {
              to: pY(AY, YY.page, YY.anchor),
              children: (0, yY.jsx)(Qr.Provider, {
                value: !0,
                children: DY
              })
            })
          }
          return (0, yY.jsx)("a", {
            href: rY,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, yY.jsx)(Qr.Provider, {
              value: !0,
              children: DY
            })
          })
        }

        function Sr(YY) {
          let {
            code: rY
          } = YY;
          const DY = (0, FY.useContext)(ir);
          if ((0, FY.useContext)(Qr)) return (0, yY.jsx)("code", {
            className: "DocsInlineCode",
            children: rY
          });
          if (gr().has(rY)) return (0, yY.jsx)(Nr, {
            type: rY
          });
          const AY = sr(rY);
          if (AY) return (0, yY.jsx)(RY.e, {
            className: "DocsInlineCode DocsSymbolLink",
            to: pY(DY, JY(AY.pageId), AY.anchor),
            children: rY
          });
          const IY = Wr(rY);
          return (0, yY.jsxs)("code", {
            className: "DocsInlineCode",
            children: [IY && (0, yY.jsx)(Er, {
              colour: IY
            }), rY]
          })
        }

        function lr(YY) {
          let {
            text: rY
          } = YY;
          const DY = [];
          let AY = 0;
          for (const FY of rY.matchAll(eY.f)) {
            FY.index > AY && DY.push(...mr(rY.slice(AY, FY.index)));
            const [, YY, IY, RY, OY, gY] = FY;
            YY ? DY.push((0, yY.jsx)(Sr, {
              code: (0, eY.o)(YY, IY)
            })) : RY ? DY.push((0, yY.jsx)("strong", {
              children: (0, yY.jsx)(lr, {
                text: RY
              })
            })) : DY.push((0, yY.jsx)(Vr, {
              href: gY,
              children: (0, yY.jsx)(lr, {
                text: OY
              })
            })), AY = FY.index + FY[0].length
          }
          return AY < rY.length && DY.push(...mr(rY.slice(AY))), (0, yY.jsx)(yY.Fragment, {
            children: DY.map(((YY, rY) => (0, yY.jsx)(FY.Fragment, {
              children: YY
            }, rY)))
          })
        }
        const Tr = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          er = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function Nr(YY) {
          let {
            type: rY
          } = YY;
          const DY = gr(),
            AY = [];
          for (const FY of rY.trim().matchAll(Tr)) {
            const [YY, rY, IY, RY, OY] = FY;
            rY ? AY.push((0, yY.jsx)("span", {
              className: "DocsTypeString",
              children: YY
            })) : IY && DY.has(IY) ? AY.push((0, yY.jsx)(zr, {
              name: IY,
              definition: DY.get(IY)
            })) : IY ? AY.push((0, yY.jsx)("span", {
              className: er.has(IY) ? "DocsTypeKeyword" : "DocsTypeName",
              children: YY
            })) : RY ? AY.push((0, yY.jsx)("span", {
              className: "DocsTypeNumber",
              children: YY
            })) : OY ? AY.push(" ") : AY.push((0, yY.jsx)("span", {
              className: "DocsTypePunctuation",
              children: YY
            }))
          }
          return (0, yY.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: AY.map(((YY, rY) => (0, yY.jsx)(FY.Fragment, {
              children: YY
            }, rY)))
          })
        }
        const Br = 480,
          cr = 6,
          Kr = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Hr = 0;

        function zr(YY) {
          let {
            name: rY,
            definition: DY
          } = YY;
          const AY = (0, FY.useContext)(ir),
            IY = ar[rY],
            OY = (0, FY.useRef)(null),
            gY = (0, FY.useRef)(null),
            vY = (0, FY.useRef)(null),
            [uY, sY] = (0, FY.useState)(!1),
            [iY, QY] = (0, FY.useState)(null),
            WY = (0, FY.useRef)(),
            EY = (0, FY.useContext)(yr),
            [mY] = (0, FY.useState)((() => "DocsTypePopover-" + Hr++)),
            VY = () => {
              clearTimeout(WY.current), sY(!0)
            },
            SY = () => {
              clearTimeout(WY.current), WY.current = setTimeout((() => {
                sY(!1)
              }), 120)
            };
          return (0, FY.useEffect)((() => {
            if (!uY) return;
            const YY = YY => {
              if ("Escape" === YY.key) {
                var rY, DY;
                if (null !== (rY = gY.current) && void 0 !== rY && rY.contains(document.activeElement)) null === (DY = OY.current) || void 0 === DY || DY.focus();
                sY(!1)
              }
            };
            return document.addEventListener("keydown", YY), () => {
              document.removeEventListener("keydown", YY)
            }
          }), [uY]), (0, FY.useEffect)((() => () => {
            clearTimeout(WY.current)
          }), []), (0, FY.useLayoutEffect)((() => {
            if (!uY || !OY.current || !gY.current) return void QY(null);
            const YY = OY.current.getBoundingClientRect(),
              rY = gY.current.offsetHeight,
              DY = Math.min(Br, window.innerWidth - 32),
              FY = Math.min(Math.max(16, YY.left), window.innerWidth - DY - 16),
              AY = YY.bottom + cr + rY < window.innerHeight;
            QY({
              left: FY,
              top: AY ? YY.bottom + cr : Math.max(16, YY.top - cr - rY)
            })
          }), [uY]), (0, yY.jsxs)(yY.Fragment, {
            children: [(0, yY.jsx)("button", {
              type: "button",
              ref: OY,
              className: "DocsTypeLink",
              "aria-expanded": uY,
              "aria-describedby": uY ? mY : void 0,
              onMouseEnter: VY,
              onMouseLeave: SY,
              onFocus: VY,
              onBlur: SY,
              onKeyDown: YY => {
                "Tab" === YY.key && !YY.shiftKey && vY.current && (YY.preventDefault(), vY.current.focus())
              },
              onClick: VY,
              children: rY
            }), uY && (0, aY.createPortal)((0, yY.jsxs)("span", {
              ref: gY,
              id: mY,
              className: "DocsTypePopover",
              role: "tooltip",
              style: iY ? {
                left: iY.left,
                top: iY.top,
                maxWidth: Br
              } : {
                visibility: "hidden"
              },
              onMouseEnter: VY,
              onMouseLeave: SY,
              onFocus: VY,
              onBlur: SY,
              children: [(0, yY.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, yY.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: rY
                }), IY && (0, yY.jsxs)(RY.e, {
                  ref: vY,
                  className: "DocsTypePopoverLink",
                  to: pY(AY, JY(IY)),
                  onClick: () => {
                    sY(!1)
                  },
                  onKeyDown: YY => {
                    if ("Tab" === YY.key) {
                      var rY;
                      if (YY.preventDefault(), YY.shiftKey || !OY.current || ! function(YY, rY) {
                          const DY = [...document.querySelectorAll(Kr)],
                            FY = DY.slice(DY.indexOf(YY) + 1).find((YY => YY.getClientRects().length > 0 && !(null !== rY && void 0 !== rY && rY.contains(YY))));
                          return null === FY || void 0 === FY || FY.focus(), void 0 !== FY
                        }(OY.current, gY.current)) null === (rY = OY.current) || void 0 === rY || rY.focus();
                      YY.shiftKey || sY(!1)
                    }
                  },
                  children: [JY(IY).title, (0, yY.jsx)(oY, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, yY.jsx)(TY, {
                lang: "ts",
                code: DY,
                compact: !0
              })]
            }), null !== EY && void 0 !== EY ? EY : document.body)]
          })
        }
        var Zr = DY(213),
          Cr = DY(4349),
          fr = DY(4355),
          jr = DY(4361);
        const hr = {
          progressBar: {
            wD: 30,
            bD: .075,
            XD: 5,
            qD: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            pD: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            GD: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            xD: !0,
            scale: 3,
            rotation: 15,
            nD: !1
          },
          gravityBar: {
            wD: 30,
            UD: .25,
            LD: 3,
            tD: .8,
            gravity: 1,
            YF: 1.5,
            rF: 8,
            DF: 4,
            qD: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            AF: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            RF: 5,
            gF: 1200,
            aF: .15,
            vF: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var dr = DY(332),
          Jr = DY(1861);

        function Mr(YY) {
          return YY.startsWith("fa-")
        }
        const wr = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          br = {
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

        function Xr(YY) {
          return "string" === typeof YY ? "text" : "entityName" in YY || "translationKey" in YY ? "other" : (0, dr.yb)(YY) ? "progressBar" : (0, dr.wb)(YY) ? "keyBinding" : "icon" in YY ? "icon" : "str" in YY && "string" === typeof YY.str ? "text" : "other"
        }
        const qr = [{
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
          pr = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...qr],
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
                options: Jr.h
              },
              isRequired: !0
            }, ...qr],
            other: []
          };

        function kr(YY) {
          return "string" === typeof YY ? {
            str: YY
          } : YY
        }

        function Gr(YY, rY) {
          let DY = kr(YY);
          for (const FY of rY) DY = DY && "object" === typeof DY ? DY[FY] : void 0;
          return DY
        }

        function xr(YY, rY, DY) {
          const FY = (YY, AY) => {
            var IY;
            const RY = rY[AY],
              OY = {
                ...YY
              };
            if (AY === rY.length - 1) return void 0 === DY ? delete OY[RY] : OY[RY] = DY, OY;
            const gY = FY(null !== (IY = YY[RY]) && void 0 !== IY ? IY : {}, AY + 1);
            return 0 === Object.keys(gY).length ? delete OY[RY] : OY[RY] = gY, OY
          };
          return function(YY) {
            const rY = Object.keys(YY);
            return "string" === typeof YY.str && 1 === rY.length ? YY.str : YY
          }(FY(kr(YY), 0))
        }

        function nr(YY, rY) {
          const DY = Xr(YY),
            FY = pr[DY].find((YY => YY.path.join(".") === rY.join("."))),
            AY = null !== FY && void 0 !== FY && FY.isRequired && "other" !== DY ? Gr(br[DY], rY) : void 0;
          return xr(YY, rY, AY)
        }

        function Pr(YY) {
          switch (Xr(YY)) {
            case "text":
              return String(Gr(YY, ["str"]));
            case "icon":
              return String(Gr(YY, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(Gr(YY,["progress"])))}%`;
            case "keyBinding":
              return String(Gr(YY, ["action"]));
            case "other":
              return JSON.stringify(YY)
          }
        }
        const Ur = /^[A-Za-z_$][\w$]*$/;

        function Lr(YY) {
          if (Array.isArray(YY)) return `[${YY.map(Lr).join(", ")}]`;
          if (YY && "object" === typeof YY) {
            const rY = Object.entries(YY).map((YY => {
              let [rY, DY] = YY;
              return `${Ur.test(rY)?rY:JSON.stringify(rY)}: ${Lr(DY)}`
            }));
            return 0 === rY.length ? "{}" : `{ ${rY.join(", ")} }`
          }
          return JSON.stringify(YY)
        }

        function tr(YY) {
          const rY = YY.map(Lr),
            DY = `[${rY.join(", ")}]`;
          return DY.length <= 60 ? DY : `[\n${rY.map((YY=>`    ${YY},`)).join("\n")}\n]`
        }
        const YD = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function rD(YY) {
          let rY = "";
          for (let AY = 0; AY < YY.length; AY++) {
            const IY = YY[AY];
            if ("\\" === IY) {
              var DY;
              const FY = null !== (DY = YY[AY + 1]) && void 0 !== DY ? DY : "";
              rY += "'" === FY ? "'" : IY + FY, AY++
            } else if ('"' === IY) rY += '\\"';
            else {
              var FY;
              rY += null !== (FY = YD[IY]) && void 0 !== FY ? FY : IY
            }
          }
          return `"${rY}"`
        }

        function DD(YY) {
          if ("string" === typeof YY) return !0;
          if (!YY || "object" !== typeof YY || Array.isArray(YY)) return !1;
          const rY = YY;
          return "ProgressBar" === rY.type ? "number" === typeof rY.progress : "StyledKeyBinding" === rY.type ? Jr.h.includes(rY.action) : "string" === typeof rY.icon || "string" === typeof rY.str || "string" === typeof rY.entityName || "string" === typeof rY.translationKey
        }

        function FD(YY) {
          let rY;
          try {
            rY = function(YY) {
              let rY = "",
                DY = "",
                FY = 0;
              const AY = () => {
                rY += DY.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), DY = ""
              };
              for (; FY < YY.length;) {
                const IY = YY.slice(FY).search(/["'`]|\/\//);
                if (-1 === IY) {
                  DY += YY.slice(FY);
                  break
                }
                DY += YY.slice(FY, FY + IY);
                const RY = FY + IY,
                  OY = YY[RY];
                if ("/" === OY) {
                  const rY = YY.indexOf("\n", RY);
                  FY = -1 === rY ? YY.length : rY;
                  continue
                }
                if (AY(), "`" === OY) throw new Error("Use quotes rather than template strings.");
                let gY = RY + 1;
                for (; gY < YY.length && YY[gY] !== OY;) gY += "\\" === YY[gY] ? 2 : 1;
                if (gY >= YY.length) throw new Error("A string is missing its closing quote.");
                const aY = YY.slice(RY + 1, gY);
                rY += rD(aY), FY = gY + 1
              }
              return AY(), JSON.parse(rY)
            }(YY.trim())
          } catch (FY) {
            return {
              parts: null,
              error: FY instanceof SyntaxError ? "This isn't a valid array yet." : FY.message
            }
          }
          if (!Array.isArray(rY)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const DY = rY.findIndex((YY => !DD(YY)));
          return -1 !== DY ? {
            parts: null,
            error: `Part ${DY+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: rY,
            error: null
          }
        }
        const AD = 1 / Zr.d.clientTicksPerSecond,
          ID = 700,
          RD = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          OD = {
            progressBar: hr.progressBar.pD,
            timedClick: hr.timedClick.icon,
            gravityBar: hr.gravityBar.icon,
            precisionBar: hr.precisionBar.icon,
            rhythmClick: hr.rhythmClick.icon
          };

        function gD(YY) {
          let {
            type: rY
          } = YY;
          const [DY, AY] = (0, FY.useState)("ready"), [RY, OY] = (0, FY.useState)(1), [gY, aY] = (0, FY.useState)(!0), vY = (0, FY.useRef)(null), uY = (0, FY.useRef)(null), sY = (0, FY.useRef)(null), iY = (0, FY.useRef)(new Set), QY = (0, FY.useRef)(!1), WY = OD[rY], EY = (0, FY.useMemo)((() => ({
            getState: () => {
              var YY, rY;
              return null !== (YY = null === (rY = sY.current) || void 0 === rY ? void 0 : rY.getState()) && void 0 !== YY ? YY : RD
            },
            onFrame: YY => (iY.current.add(YY), () => {
              iY.current.delete(YY)
            })
          })), []);
          (0, FY.useEffect)((() => {
            const YY = vY.current,
              rY = uY.current;
            if (!YY || !rY) return;
            const DY = new ResizeObserver((() => {
              OY(YY.clientWidth / Math.max(1, rY.offsetWidth))
            }));
            return DY.observe(YY), () => {
              DY.disconnect()
            }
          }), []), (0, FY.useEffect)((() => {
            var YY;
            if ("playing" !== DY) return;
            let FY = !1;
            const IY = new jr.e[rY](hr[rY], (YY => {
              FY = !0, aY(!1), AY(YY ? "succeeded" : "failed")
            }), (() => {}));
            sY.current = IY;
            let RY = 0,
              OY = performance.now(),
              gY = requestAnimationFrame((function YY(rY) {
                for (RY += Math.min(.25, (rY - OY) / 1e3), OY = rY; RY >= AD && !FY;) RY -= AD, IY.handleTick(AD);
                for (const DY of iY.current) DY();
                FY || (gY = requestAnimationFrame(YY))
              }));
            return null === (YY = vY.current) || void 0 === YY || YY.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(gY), IY.tearDown(), sY.current = null, QY.current = !1
            }
          }), [DY, rY]), (0, FY.useEffect)((() => {
            if (gY) return;
            const YY = setTimeout((() => {
              aY(!0)
            }), ID);
            return () => {
              clearTimeout(YY)
            }
          }), [gY]);
          const mY = YY => {
            var rY;
            "playing" === DY && QY.current !== YY && (QY.current = YY, null === (rY = sY.current) || void 0 === rY || rY.handleMouseInput(YY))
          };
          return (0, yY.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, yY.jsxs)("div", {
              ref: vY,
              className: IY()("DocsQteStage", {
                Playing: "playing" === DY
              }),
              tabIndex: "playing" === DY ? 0 : -1,
              role: "playing" === DY ? "button" : void 0,
              "aria-label": "playing" === DY ? `${rY} quick time event: click or press Space` : void 0,
              onPointerDown: YY => {
                0 === YY.button && mY(!0)
              },
              onPointerUp: () => {
                mY(!1)
              },
              onPointerLeave: () => {
                mY(!1)
              },
              onPointerCancel: () => {
                mY(!1)
              },
              onKeyDown: YY => {
                "playing" !== DY || " " !== YY.key && "Enter" !== YY.key || (YY.preventDefault(), mY(!0))
              },
              onKeyUp: YY => {
                "playing" !== DY || " " !== YY.key && "Enter" !== YY.key || mY(!1)
              },
              children: [(0, yY.jsx)("div", {
                ref: uY,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${RY})`
                },
                children: "playing" === DY && (0, yY.jsx)(fr.b.Provider, {
                  value: EY,
                  children: (0, yY.jsx)(Cr.b, {
                    qte: {
                      type: rY,
                      parameters: hr[rY]
                    }
                  })
                })
              }), "playing" !== DY && (0, yY.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== DY && (0, yY.jsxs)("div", {
                  className: IY()("DocsQteResult", "succeeded" === DY ? "Succeeded" : "Failed"),
                  children: [(0, yY.jsx)(oY, {
                    name: "succeeded" === DY ? "check" : "cross",
                    isTinted: !0
                  }), (0, yY.jsx)("span", {
                    children: "succeeded" === DY ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, yY.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !gY,
                  onClick: () => {
                    AY("playing")
                  },
                  children: [(0, yY.jsx)(oY, {
                    name: "ready" === DY ? "play" : "replay"
                  }), (0, yY.jsx)("span", {
                    children: "ready" === DY ? `Try ${rY}` : "Play again"
                  })]
                })]
              })]
            }), WY && !Mr(WY) && (0, yY.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, yY.jsx)("code", {
                children: WY
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function aD(YY) {
          let {
            level: rY,
            text: DY,
            anchor: FY,
            className: AY
          } = YY;
          const RY = `h${Math.min(rY,6)}`;
          return (0, yY.jsxs)(RY, {
                id: FY,
                className: IY()("DocsHeading", AY),
                children: [(0, yY.jsx)(lr, {
                      text: DY
                    }), (0, yY.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${FY}`,
                        "aria-label": `Link to ${DY.replace(/`/g,"")}`,children:"#"})]})}function vD(YY){let{items:rY,ordered:DY}=YY;const FY=DY?"ol":"ul";return(0,yY.jsx)(FY,{className:"DocsList",children:rY.map(((YY,rY)=>(0,yY.jsxs)("li",{children:[(0,yY.jsx)(lr,{text:YY.text}),YY.children.length>0&&(0,yY.jsx)(vD,{items:YY.children,ordered:DY})]},rY)))})}function uD(YY){const rY=YY[0],DY="paragraph"===(null===rY||void 0===rY?void 0:rY.kind)?rY.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(DY)?"warning":/^\*\*(tip|prefer)/.test(DY)?"tip":"note"}function sD(YY){let{block:rY}=YY;switch(rY.kind){case"heading":return(0,yY.jsx)(aD,{level:rY.level,text:rY.text,anchor:rY.anchor});case"paragraph":return(0,yY.jsx)("p",{children:(0,yY.jsx)(lr,{text:rY.text})});case"code":{const YY="ts"===rY.lang?function(YY){const rY=YY.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return rY&&Object.hasOwn(hr,rY[1])?rY[1]:null}(rY.code):null;return(0,yY.jsxs)(yY.Fragment,{children:[(0,yY.jsx)(TY,{code:rY.code,lang:rY.lang}),YY&&(0,yY.jsx)(gD,{type:YY})]})}case"table":return(0,yY.jsx)("div",{className:"DocsTableScroll",children:(0,yY.jsxs)("table",{className:"DocsTable",children:[(0,yY.jsx)("thead",{children:(0,yY.jsx)("tr",{children:rY.header.map(((YY,rY)=>(0,yY.jsx)("th",{children:(0,yY.jsx)(lr,{text:YY})},rY)))})}),(0,yY.jsx)("tbody",{children:rY.rows.map(((YY,rY)=>(0,yY.jsx)("tr",{children:YY.map(((YY,rY)=>(0,yY.jsx)("td",{children:(0,yY.jsx)(lr,{text:YY})},rY)))},rY)))})]})});case"list":return(0,yY.jsx)(vD,{items:rY.items,ordered:rY.ordered});case"quote":return(0,yY.jsx)("aside",{className:IY()("DocsCallout",uD(rY.blocks)),children:(0,yY.jsx)(iD,{blocks:rY.blocks})});case"rule":return(0,yY.jsx)("hr",{className:"DocsRule"})}}function iD(YY){let{blocks:rY}=YY;return(0,yY.jsx)(yY.Fragment,{children:rY.map(((YY,rY)=>(0,yY.jsx)(sD,{block:YY},rY)))})}var yD=DY(4327),QD=DY(4331);function oD(YY){return"blocks"===YY||"items"===YY}const WD=new Map;function ED(YY){let rY=WD.get(YY);return rY||(rY=function(YY){const rY={entries:[],legend:[],notes:[],examples:[]};let DY=!1;for(const IY of YY.split(/\r?\n/).slice(1)){if(IY.startsWith("#")){const YY=IY.replace(/^# ?/,""),FY=YY.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);FY?rY.legend.push({code:FY[1],meaning:FY[2],usage:FY[3].trim()}):/^Examples:/.test(YY.trim())?DY=!0:DY&&YY.trim()?rY.examples.push(YY.trim()):YY.trim()&&!/^\s/.test(YY)&&rY.notes.push(YY.trim());continue}const YY=IY.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var FY,AY;YY&&rY.entries.push({name:YY[1],variants:null!==(FY=null===(AY=YY[2])||void 0===AY?void 0:AY.split(","))&&void 0!==FY?FY:[]})}return rY}("blocks"===YY?yD:QD),WD.set(YY,rY)),rY}function mD(YY){let{className:rY,value:DY,placeholder:FY,label:AY,onChange:IY,count:RY,children:OY}=YY;return(0,yY.jsxs)("div",{className:rY,children:[(0,yY.jsx)(oY,{name:"magnifying-glass"}),(0,yY.jsx)("input",{type:"search",value:DY,placeholder:FY,"aria-label":AY,onChange:YY=>{IY(YY.target.value)}}),OY,RY&&(0,yY.jsxs)("span",{className:"DocsFilterCount",children:[RY.visible," of ",RY.total]})]})}var VD=DY(1098);function SD(YY){const rY=YY.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return rY?rY[2]:null}function lD(YY){return"paragraph"===YY.kind&&""===YY.text.trim()}function TD(YY){const rY={name:YY.heading.text,description:[],params:[],returns:null};let DY="description";for(const AY of YY.blocks)if(!lD(AY))if("heading"===AY.kind&&/^Parameters:?$/.test(AY.text))DY="params";else if("heading"===AY.kind&&/^Returns:?$/.test(AY.text))DY="returns",rY.returns={type:"",description:[]};else if("params"!==DY||"table"!==AY.kind){if("returns"===DY&&"paragraph"===AY.kind&&""===rY.returns.type){const YY=SD(AY.text);if(null!==YY){rY.returns.type=YY.replaceAll("\\|","|");continue}}"returns"===DY?rY.returns.description.push(AY):rY.description.push(AY)}else for(const[YY,DY,IY]of AY.rows){var FY;rY.params.push({name:YY,type:null!==(FY=SD(DY))&&void 0!==FY?FY:DY,description:null!==IY&&void 0!==IY?IY:""})}return rY}const eD=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function ND(YY){return YY.filter((YY=>!lD(YY)))}const BD=/^[\w][\w .'&!:()-]*$/,cD=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function KD(YY){var rY;if("code"===YY.kind&&"text"===YY.lang){const rY=YY.code.split("\n").map((YY=>YY.trim())).filter(Boolean);return rY.length>0&&rY.every((YY=>BD.test(YY)))?rY.map((YY=>({name:YY}))):null}return"paragraph"===YY.kind&&cD.test(YY.text.trim())?[...YY.text.matchAll(/`([ ^ `]+)` / g)].flatMap((YY => YY[1].split(/,\s*/).map((YY => ({
                              name: YY.trim()
                            }))))): "table" === YY.kind && null !== (rY = YY.header[0]) && void 0 !== rY && rY.startsWith("Song") ? YY.rows.map((YY => {
                              let [rY, DY] = YY;
                              return {
                                name: rY.replace(/`/g, ""),
                                caption: DY
                              }
                            })) : null
                          }

                          function HD(YY) {
                            const rY = [];
                            for (const DY of YY) {
                              const YY = KD(DY),
                                FY = rY.at(-1),
                                AY = "table" === DY.kind;
                              YY ? "names" === (null === FY || void 0 === FY ? void 0 : FY.kind) && FY.isSongs === AY ? FY.names.push(...YY) : rY.push({
                                kind: "names",
                                names: YY,
                                isSongs: AY
                              }) : rY.push({
                                kind: "block",
                                block: DY
                              })
                            }
                            return rY
                          }
                          const zD = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function ZD(YY, rY) {
                            return `${zD[YY]}-${(0,eY.v)(rY)}`
                          }
                          const CD = new WeakMap;

                          function fD(YY, rY, DY) {
                            let FY = CD.get(rY);
                            if (!FY) {
                              FY = new Map;
                              const DY = new Set;
                              for (const AY of (0, eY.x)(rY)) {
                                const rY = HD(ND(AY.blocks)).map((rY => {
                                  if ("block" === rY.kind) return rY;
                                  return {
                                    kind: "names",
                                    names: rY.names.map((rY => {
                                      var FY, IY;
                                      const RY = ZD(YY, rY.name);
                                      let OY = RY;
                                      for (let YY = 2; DY.has(OY); YY++) OY = `${RY}-${YY}`;
                                      return DY.add(OY), {
                                        ...rY,
                                        anchor: OY,
                                        heading: null !== (FY = null === (IY = AY.heading) || void 0 === IY ? void 0 : IY.text) && void 0 !== FY ? FY : ""
                                      }
                                    })),
                                    isSongs: rY.isSongs
                                  }
                                }));
                                FY.set(AY.blocks, rY)
                              }
                              CD.set(rY, FY)
                            }
                            const AY = FY.get(DY);
                            if (!AY) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return AY
                          }
                          const jD = "/textures/docs/skinPreviews",
                            hD = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var dD = DY(3806),
                            JD = DY(3815);

                          function MD(YY) {
                            return Object.hasOwn(dD.d, YY) ? dD.d[YY] : null
                          }
                          const wD = {
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
                            blendMode: JD.g.Standard
                          };

                          function bD(YY, rY, DY) {
                            return rY + (DY - rY) * YY()
                          }

                          function XD(YY, rY, DY) {
                            return YY + (rY - YY) * DY
                          }

                          function qD(YY) {
                            return YY.length > 0 && "timeFraction" in YY[0]
                          }

                          function pD(YY, rY) {
                            if (0 === YY.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!qD(YY.colorGradients)) {
                              const DY = YY.colorGradients,
                                {
                                  color: FY
                                } = DY[Math.floor(rY() * DY.length) % DY.length];
                              return [{
                                at: 0,
                                colour: [FY[0] / 255, FY[1] / 255, FY[2] / 255, 1]
                              }]
                            }
                            return [...YY.colorGradients].sort(((YY, rY) => YY.timeFraction - rY.timeFraction)).map((YY => {
                              var DY, FY, AY;
                              const IY = YY.minColor,
                                RY = null !== (DY = YY.maxColor) && void 0 !== DY ? DY : IY,
                                OY = rY(),
                                gY = [XD(IY[0], RY[0], OY) / 255, XD(IY[1], RY[1], OY) / 255, XD(IY[2], RY[2], OY) / 255, XD(null !== (FY = IY[3]) && void 0 !== FY ? FY : 1, null !== (AY = RY[3]) && void 0 !== AY ? AY : 1, OY)];
                              return {
                                at: YY.timeFraction,
                                colour: gY
                              }
                            }))
                          }

                          function kD(YY, rY, DY, FY) {
                            const AY = bD(FY, YY.minEmitPower, YY.maxEmitPower),
                              IY = rY => bD(FY, Math.min(YY.dir1[rY], YY.dir2[rY]), Math.max(YY.dir1[rY], YY.dir2[rY])) * AY,
                              RY = [...YY.velocityGradients].sort(((YY, rY) => YY.timeFraction - rY.timeFraction)).map((YY => ({
                                at: YY.timeFraction,
                                factor: bD(FY, YY.factor, YY.factor2)
                              })));
                            return {
                              pos: [bD(FY, rY[0], DY[0]), bD(FY, rY[1], DY[1]), bD(FY, rY[2], DY[2])],
                              dir: [IY(0), IY(1), IY(2)],
                              age: 0,
                              life: bD(FY, YY.minLifeTime, YY.maxLifeTime),
                              size: bD(FY, YY.minSize, YY.maxSize),
                              colours: pD(YY, FY),
                              velocityFactors: RY
                            }
                          }

                          function GD(YY, rY, DY, FY) {
                            if (rY < YY[0].at) return DY(Math.min(1, YY.length - 1));
                            for (let AY = 0; AY < YY.length - 1; AY++)
                              if (rY <= YY[AY + 1].at) {
                                const IY = YY[AY + 1].at - YY[AY].at;
                                return FY(DY(AY), DY(AY + 1), IY > 0 ? (rY - YY[AY].at) / IY : 1)
                              } return DY(YY.length - 1)
                          }

                          function xD(YY) {
                            return GD(YY.colours, YY.age / YY.life, (rY => YY.colours[rY].colour), ((YY, rY, DY) => [XD(YY[0], rY[0], DY), XD(YY[1], rY[1], DY), XD(YY[2], rY[2], DY), XD(YY[3], rY[3], DY)]))
                          }

                          function nD(YY, rY, DY) {
                            if (YY.age += DY, YY.age >= YY.life) return !1;
                            const FY = function(YY) {
                              return 0 === YY.velocityFactors.length ? 1 : GD(YY.velocityFactors, YY.age / YY.life, (rY => YY.velocityFactors[rY].factor), XD)
                            }(YY) * DY;
                            for (let IY = 0; IY < 3; IY++) {
                              var AY;
                              YY.pos[IY] += YY.dir[IY] * FY, YY.dir[IY] += (null !== (AY = rY[IY]) && void 0 !== AY ? AY : 0) * DY
                            }
                            return !0
                          }

                          function PD(YY) {
                            return String(Math.round(1e6 * YY) / 1e6)
                          }

                          function UD(YY) {
                            return `[${YY.map(PD).join(", ")}]`
                          }

                          function LD(YY, rY) {
                            const DY = `${rY}    `;
                            return `[\n${(qD(YY)?YY.map((YY=>{const rY=[`${DY}    timeFraction: ${PD(YY.timeFraction)},`,`${DY}    minColor: ${UD(YY.minColor)},`];return YY.maxColor&&rY.push(`${DY}    maxColor: ${UD(YY.maxColor)},`),`${DY}{\n${rY.join("\n")}\n${DY}},`})):YY.map((YY=>`
                            $ {
                              DY
                            } {
                              color: $ {
                                UD(YY.color)
                              }
                            }, `))).join("\n")}\n${rY}]`
                          }
                          const tD = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            YF = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const rF = .6;

                          function DF(YY, rY) {
                            return `${rY?"song":"sound"}:${YY}`
                          }
                          let FF = {
                              track: null,
                              volume: rF
                            },
                            AF = null,
                            IF = 0,
                            RF = 0;
                          const OF = new Set;

                          function gF(YY) {
                            FF = {
                              ...FF,
                              ...YY
                            }, OF.forEach((YY => {
                              YY()
                            }))
                          }

                          function aF(YY) {
                            FF.track && gF({
                              track: {
                                ...FF.track,
                                ...YY
                              }
                            })
                          }

                          function vF(YY) {
                            const [rY, DY] = (0, FY.useState)((() => YY(FF))), AY = (0, FY.useRef)(YY);
                            return AY.current = YY, (0, FY.useEffect)((() => {
                              const YY = () => {
                                DY((() => AY.current(FF)))
                              };
                              return OF.add(YY), YY(), () => {
                                OF.delete(YY)
                              }
                            }), []), rY
                          }

                          function uF() {
                            IF++;
                            const YY = AF;
                            AF = null, null === YY || void 0 === YY || YY.stop()
                          }

                          function sF(YY, rY) {
                            let FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            uF();
                            const AY = IF,
                              {
                                track: IY
                              } = FF,
                              RY = IY && IY.name === YY && IY.isSong === rY ? IY.duration : 0;
                            RF = FY, gF({
                              track: {
                                name: YY,
                                isSong: rY,
                                status: "loading",
                                duration: RY
                              }
                            }), Promise.all([DY.e(210), DY.e(238)]).then((() => DY(38946))).then((DY => {
                              let {
                                playDocsSound: IY
                              } = DY;
                              AY === IF && (AF = IY(YY, rY, FF.volume, FY, {
                                onPlay: YY => {
                                  AY === IF && aF({
                                    status: "playing",
                                    duration: YY
                                  })
                                },
                                onEnd: YY => {
                                  var rY, DY;
                                  AY === IF && (AF = null, YY ? gF({
                                    track: null
                                  }) : (RF = null !== (rY = null === (DY = FF.track) || void 0 === DY ? void 0 : DY.duration) && void 0 !== rY ? rY : 0, aF({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((rY => {
                              console.error(`Could not play docs sound ${YY}`, rY), AY === IF && gF({
                                track: null
                              })
                            }))
                          }

                          function iF() {
                            const {
                              track: YY
                            } = FF;
                            if (!YY) return;
                            if ("playing" === YY.status && AF) return RF = AF.lE(), AF.pause(), void aF({
                              status: "paused"
                            });
                            if ("loading" === YY.status) return uF(), void aF({
                              status: "paused"
                            });
                            if (AF) return void AF.resume();
                            const rY = YY.duration > 0 && RF >= YY.duration - .05;
                            sF(YY.name, YY.isSong, rY ? 0 : RF)
                          }

                          function yF() {
                            var YY;
                            return AF && "playing" === (null === (YY = FF.track) || void 0 === YY ? void 0 : YY.status) ? AF.lE() : RF
                          }

                          function QF(YY) {
                            var rY;
                            null === (rY = AF) || void 0 === rY || rY.setVolume(YY), gF({
                              volume: YY
                            })
                          }

                          function oF() {
                            uF(), RF = 0, gF({
                              track: null
                            })
                          }
                          const WF = (0, FY.createContext)(null);
                          let EF = null;

                          function mF() {
                            const [YY, rY] = (0, FY.useState)(null);
                            return (0, FY.useEffect)((() => {
                              let YY = !1;
                              return EF ??= Promise.all([DY.e(69), DY.e(72), DY.e(71), DY.e(70), DY.e(194), DY.e(97), DY.e(216)]).then((() => DY(38939))), EF.then((DY => {
                                YY || rY(DY)
                              }), (YY => {
                                console.error("Could not load the docs gallery's textures", YY), EF = null
                              })), () => {
                                YY = !0
                              }
                            }), []), YY
                          }
                          const VF = 24,
                            SF = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function lF(YY, rY) {
                            const DY = "skins" === YY ? function(YY, rY) {
                              const DY = hD.find((rY => YY.startsWith(rY.heading)));
                              return DY ? function(YY, rY) {
                                return `${YY}-${rY}`
                              }(DY.prefix, rY) : null
                            }(rY.heading, rY.name) : null;
                            return null === DY ? null : `${jD}/${DY}.webp`
                          }

                          function TF(YY) {
                            let {
                              kind: rY,
                              entry: DY,
                              assets: AY,
                              renderedUrl: RY
                            } = YY;
                            const {
                              name: OY
                            } = DY, [gY, aY] = (0, FY.useState)(!1);
                            if ("icons" === rY && Mr(OY)) return (0, yY.jsx)(VD.e, {
                              className: "DocsTileIcon",
                              name: OY
                            });
                            let vY = null;
                            var uY;
                            if ("icons" === rY) vY = null !== (uY = null === AY || void 0 === AY ? void 0 : AY.getIngameIconUrl(OY)) && void 0 !== uY ? uY : null;
                            else if ("particles" === rY) {
                              var sY, iY, QY;
                              vY = null !== (sY = null === AY || void 0 === AY ? void 0 : AY.getParticleTextureUrl(null !== (iY = null === (QY = MD(OY)) || void 0 === QY ? void 0 : QY.texture) && void 0 !== iY ? iY : OY)) && void 0 !== sY ? sY : null
                            } else "skins" === rY && (vY = null !== RY && void 0 !== RY ? RY : SF.test(OY) ? `/textures/charSkins/previews/${OY}_preview.png` : null);
                            return !vY || gY ? (0, yY.jsx)(oY, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === rY ? "person" : "image"
                            }) : (0, yY.jsx)("img", {
                              className: IY()("DocsTileImage", {
                                Pixelated: "skins" !== rY
                              }),
                              src: vY,
                              srcSet: vY === RY ? `${vY} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${vY}`), aY(!0)
                              }
                            })
                          }

                          function eF(YY) {
                            let {
                              entry: rY,
                              isSong: DY
                            } = YY;
                            const FY = vF((YY => {
                                let {
                                  track: FY
                                } = YY;
                                return (null === FY || void 0 === FY ? void 0 : FY.name) === rY.name && FY.isSong === DY ? FY.status : null
                              })),
                              AY = null !== FY && "paused" !== FY;
                            return (0, yY.jsxs)("button", {
                              type: "button",
                              id: rY.anchor,
                              className: IY()("DocsSoundTile", {
                                Playing: AY
                              }),
                              "data-docs-track": DF(rY.name, DY),
                              "aria-label": AY ? `Pause ${rY.name}` : `Play ${rY.name}`,
                              onClick: () => {
                                null !== FY ? iF() : sF(rY.name, DY)
                              },
                              children: [(0, yY.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, yY.jsx)(oY, {
                                  name: AY ? "pause" : "play"
                                })
                              }), (0, yY.jsx)("code", {
                                className: "DocsSoundName",
                                children: rY.name
                              }), rY.caption && (0, yY.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: rY.caption
                              })]
                            })
                          }

                          function NF(YY) {
                            let {
                              kind: rY,
                              names: DY,
                              isSongs: AY
                            } = YY;
                            const RY = mF(),
                              [OY, gY] = EY(),
                              aY = !1 === (null === OY || void 0 === OY ? void 0 : OY.failed) ? OY.text : null,
                              vY = (0, FY.useContext)(WF),
                              [uY, sY] = (0, FY.useState)(""),
                              iY = uY.trim().toLowerCase(),
                              QY = iY ? DY.filter((YY => YY.name.toLowerCase().includes(iY))) : DY;
                            return (0, yY.jsxs)("div", {
                              className: "DocsGallery",
                              children: [DY.length > VF && (0, yY.jsx)(mD, {
                                className: "DocsGalleryFilter",
                                value: uY,
                                placeholder: `Filter ${DY.length} names\u2026`,
                                label: "Filter names",
                                onChange: sY,
                                count: iY ? {
                                  visible: QY.length,
                                  total: DY.length
                                } : null
                              }), (0, yY.jsx)("div", {
                                className: IY()("DocsGalleryGrid", `Kind-${rY}`, {
                                  Songs: AY
                                }),
                                children: QY.map((YY => {
                                  if ("sounds" === rY) return (0, yY.jsx)(eF, {
                                    entry: YY,
                                    isSong: AY
                                  }, YY.anchor);
                                  if (vY && "particles" === rY && MD(YY.name)) return (0, yY.jsxs)("button", {
                                    type: "button",
                                    id: YY.anchor,
                                    className: IY()("DocsTile Previewable", {
                                      Copied: aY === YY.name
                                    }),
                                    title: `Play "${YY.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      vY(YY.name), gY(YY.name)
                                    },
                                    children: [(0, yY.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, yY.jsx)(TF, {
                                        kind: rY,
                                        entry: YY,
                                        assets: RY,
                                        renderedUrl: null
                                      }), (0, yY.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, yY.jsx)(oY, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, yY.jsx)("span", {
                                      className: "DocsTileName",
                                      children: aY === YY.name ? "Copied!" : YY.name
                                    })]
                                  }, YY.anchor);
                                  const DY = lF(rY, YY);
                                  return (0, yY.jsxs)("button", {
                                    type: "button",
                                    id: YY.anchor,
                                    className: IY()("DocsTile", {
                                      Copied: aY === YY.name
                                    }),
                                    title: `Copy "${YY.name}"`,
                                    onClick: () => {
                                      gY(YY.name)
                                    },
                                    children: [(0, yY.jsx)("span", {
                                      className: IY()("DocsTilePreview", {
                                        Rendered: null !== DY
                                      }),
                                      children: (0, yY.jsx)(TF, {
                                        kind: rY,
                                        entry: YY,
                                        assets: RY,
                                        renderedUrl: DY
                                      })
                                    }), (0, yY.jsx)("span", {
                                      className: "DocsTileName",
                                      children: aY === YY.name ? "Copied!" : YY.name
                                    })]
                                  }, YY.anchor)
                                }))
                              })]
                            })
                          }

                          function BF(YY) {
                            let {
                              kind: rY,
                              content: DY,
                              blocks: FY
                            } = YY;
                            return (0, yY.jsx)(yY.Fragment, {
                              children: fD(rY, DY, FY).map(((YY, DY) => "block" === YY.kind ? (0, yY.jsx)(sD, {
                                block: YY.block
                              }, DY) : (0, yY.jsx)(NF, {
                                kind: rY,
                                names: YY.names,
                                isSongs: YY.isSongs
                              }, DY)))
                            })
                          }
                          const cF = [{
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

                          function KF(YY) {
                            let {
                              cards: rY = cF,
                              label: DY = "Start here"
                            } = YY;
                            const AY = (0, FY.useContext)(ir);
                            return (0, yY.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": DY,
                              children: rY.map((YY => {
                                let {
                                  pageId: rY,
                                  countNoun: DY
                                } = YY;
                                const FY = JY(rY);
                                return (0, yY.jsxs)(RY.e, {
                                  to: pY(AY, FY),
                                  className: "DocsLandingCard",
                                  children: [(0, yY.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, yY.jsx)(oY, {
                                      name: FY.icon
                                    })
                                  }), (0, yY.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: FY.title
                                  }), (0, yY.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: FY.summary
                                  }), DY && (0, yY.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [wY(FY).sections.length, " ", DY]
                                  })]
                                }, rY)
                              }))
                            })
                          }
                          const HF = 240;

                          function zF(YY) {
                            let {
                              faces: rY
                            } = YY;
                            return (0, yY.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, yY.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${rY.top}")`
                                }
                              }), (0, yY.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${rY.left}")`
                                }
                              }), (0, yY.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${rY.right}")`
                                }
                              })]
                            })
                          }

                          function ZF(YY) {
                            let {
                              src: rY
                            } = YY;
                            const [DY, AY] = (0, FY.useState)(!1);
                            return DY ? null : (0, yY.jsx)("img", {
                              src: rY,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${rY}`), AY(!0)
                              }
                            })
                          }

                          function CF(YY) {
                            let {
                              kind: rY
                            } = YY;
                            const DY = ED(rY),
                              AY = mF(),
                              RY = (0, OY.u)(),
                              [gY, aY] = (0, FY.useState)(""),
                              [vY, uY] = (0, FY.useState)(null),
                              [sY, iY] = (0, FY.useState)(HF),
                              [QY, WY] = (0, FY.useState)(null),
                              EY = (0, FY.useRef)(null),
                              VY = gY.trim().toLowerCase();
                            (0, FY.useEffect)((() => {
                              const YY = (0, eY.s)(RY.hash),
                                FY = DY.entries.find((DY => ZD(rY, DY.name) === YY));
                              if (FY) EY.current = FY.name, aY(FY.name), uY(null), WY(FY.name);
                              else if (null !== EY.current) {
                                const YY = EY.current;
                                EY.current = null, aY((rY => rY === YY ? "" : rY)), WY(null)
                              }
                            }), [DY, rY, RY.hash, RY.key]), (0, FY.useEffect)((() => {
                              var YY;
                              null !== QY && (null === (YY = document.getElementById(ZD(rY, QY))) || void 0 === YY || YY.scrollIntoView({
                                block: "center"
                              }))
                            }), [rY, QY]);
                            const SY = DY.entries.filter((YY => (!VY || YY.name.toLowerCase().includes(VY)) && (!vY || YY.variants.includes(vY))));
                            return (0, yY.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [DY.notes.length > 0 && (0, yY.jsx)("div", {
                                className: "DocsProse",
                                children: DY.notes.map((YY => (0, yY.jsx)("p", {
                                  children: YY
                                }, YY)))
                              }), DY.legend.length > 0 && (0, yY.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, yY.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, yY.jsx)("thead", {
                                    children: (0, yY.jsxs)("tr", {
                                      children: [(0, yY.jsx)("th", {
                                        children: "Code"
                                      }), (0, yY.jsx)("th", {
                                        children: "Variant"
                                      }), (0, yY.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, yY.jsx)("tbody", {
                                    children: DY.legend.map((YY => (0, yY.jsxs)("tr", {
                                      children: [(0, yY.jsx)("td", {
                                        children: (0, yY.jsx)("button", {
                                          type: "button",
                                          className: IY()("DocsVariantChip", {
                                            Active: vY === YY.code
                                          }),
                                          "aria-pressed": vY === YY.code,
                                          title: `Show only ${rY} with ${YY.meaning} variants`,
                                          onClick: () => {
                                            uY(vY === YY.code ? null : YY.code)
                                          },
                                          children: YY.code
                                        })
                                      }), (0, yY.jsx)("td", {
                                        children: YY.meaning
                                      }), (0, yY.jsx)("td", {
                                        children: (0, yY.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: YY.usage
                                        })
                                      })]
                                    }, YY.code)))
                                  })]
                                })
                              }), DY.examples.length > 0 && (0, yY.jsx)(TY, {
                                lang: "text",
                                code: DY.examples.join("\n")
                              }), (0, yY.jsx)(mD, {
                                className: "DocsFilterBar",
                                value: gY,
                                placeholder: `Search ${DY.entries.length} ${rY}\u2026`,
                                label: `Search ${rY}`,
                                onChange: YY => {
                                  aY(YY), iY(HF)
                                },
                                count: VY || vY ? {
                                  visible: SY.length,
                                  total: DY.entries.length
                                } : null,
                                children: vY && (0, yY.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    uY(null)
                                  },
                                  children: [vY, " ", (0, yY.jsx)(oY, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, yY.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: SY.slice(0, sY).map((YY => {
                                  const DY = "blocks" === rY ? null === AY || void 0 === AY ? void 0 : AY.getBlockFaces(YY.name) : null,
                                    FY = AY && !DY ? AY.getItemTextureUrl(YY.name) : null;
                                  return (0, yY.jsxs)("div", {
                                    id: ZD(rY, YY.name),
                                    className: IY()("DocsCatalogueTile", {
                                      Linked: YY.name === QY
                                    }),
                                    children: [(0, yY.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [DY && (0, yY.jsx)(zF, {
                                        faces: DY
                                      }), FY && (0, yY.jsx)(ZF, {
                                        src: FY
                                      })]
                                    }), (0, yY.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: YY.name
                                    }), YY.variants.length > 0 && (0, yY.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: YY.variants.map((YY => (0, yY.jsx)("span", {
                                        children: YY
                                      }, YY)))
                                    }), (0, yY.jsx)(mY, {
                                      text: YY.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, YY.name)
                                }))
                              }), SY.length > sY && (0, yY.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  iY(SY.length)
                                },
                                children: ["Show all ", SY.length]
                              }), 0 === SY.length && (0, yY.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", rY, " match."]
                              })]
                            })
                          }
                          var fF = DY(4405),
                            jF = DY(1560);
                          const hF = .95 * fF.b;

                          function dF(YY) {
                            return /^\s*```/.test(YY)
                          }

                          function JF(YY, rY) {
                            const DY = [
                              []
                            ];
                            let FY = !1;
                            for (const AY of YY.split("\n")) !FY && rY(AY) && DY.at(-1).length > 0 && DY.push([]), dF(AY) && (FY = !FY), DY.at(-1).push(AY);
                            return DY.map((YY => YY.join("\n").trim())).filter(Boolean)
                          }

                          function MF(YY, rY) {
                            const DY = `${"#".repeat(rY)} `,
                              FY = [];
                            let AY = !1;
                            for (const IY of YY.split("\n")) dF(IY) ? AY = !AY : !AY && IY.startsWith(DY) && FY.push(IY.slice(DY.length).trim());
                            return FY
                          }

                          function wF(YY) {
                            return YY.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class bF {
                            constructor(YY, rY) {
                              this.origin = rY, this.pages = void 0, this.partPaths = new Map;
                              const DY = YY.map((YY => {
                                const rY = rY => this.resolveLinks(YY, rY).length,
                                  DY = function(YY, rY) {
                                    const DY = YY.map((YY => rY(YY.markdown) + 2)),
                                      FY = DY.reduce(((YY, rY) => YY + rY), 0),
                                      AY = FY / Math.ceil(FY / hF),
                                      IY = [];
                                    let RY = 0;
                                    return YY.forEach(((YY, rY) => {
                                      const FY = DY[rY];
                                      (0 === IY.length || RY + FY > hF || RY + FY / 2 > AY) && (IY.push([]), RY = 0), IY.at(-1).push(YY), RY += FY
                                    })), IY
                                  }(function(YY, rY) {
                                    return JF(YY, (YY => YY.startsWith("## "))).flatMap((YY => {
                                      var DY;
                                      const FY = null !== (DY = MF(YY, 2)[0]) && void 0 !== DY ? DY : "";
                                      if (rY(YY) <= hF) return [{
                                        markdown: YY,
                                        section: FY
                                      }];
                                      let AY = !1,
                                        IY = "";
                                      return JF(YY, (YY => {
                                        const rY = AY && "" !== YY.trim();
                                        return AY = "" === YY.trim(), rY
                                      })).map((YY => {
                                        var rY;
                                        const DY = MF(YY, 3),
                                          AY = YY.startsWith("### ") ? DY[0] : IY;
                                        return IY = null !== (rY = DY.at(-1)) && void 0 !== rY ? rY : IY, {
                                          markdown: YY,
                                          section: FY || AY
                                        }
                                      }))
                                    }))
                                  }(wF(YY), rY), rY);
                                return {
                                  page: YY,
                                  groups: DY.length > 1 ? DY : []
                                }
                              }));
                              for (const {
                                  page: FY,
                                  groups: AY
                                }
                                of DY) AY.forEach(((YY, rY) => {
                                const DY = (0, fF.w)(FY.slug, rY);
                                for (const AY of YY.flatMap((YY => [...MF(YY.markdown, 2), ...MF(YY.markdown, 3)]))) {
                                  const YY = `${FY.id}#${(0,eY.v)(AY)}`;
                                  this.partPaths.has(YY) || this.partPaths.set(YY, DY)
                                }
                              }));
                              this.pages = DY.map((YY => {
                                let {
                                  page: rY,
                                  groups: DY
                                } = YY;
                                return {
                                  page: rY,
                                  path: (0, fF.t)(rY.slug),
                                  markdown: `# ${rY.title}\n\n${this.resolveLinks(rY,wF(rY))}\n`,
                                  parts: DY.map(((YY, FY) => this.renderPart(rY, YY, FY, DY.length)))
                                }
                              }))
                            }
                            url(YY) {
                              return `${this.origin}${YY}`
                            }
                            getPage(YY) {
                              return this.pages.find((rY => rY.page.id === YY))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((YY => (YY.parts.length > 0 ? YY.parts : [{
                                path: YY.path,
                                label: "",
                                markdown: YY.markdown
                              }]).filter((YY => YY.markdown.length > fF.b))))
                            }
                            markdownUrl(YY, rY) {
                              const DY = rY && this.partPaths.get(`${YY.id}#${rY}`) || (0, fF.t)(YY.slug);
                              return this.url(rY ? `${DY}#${rY}` : DY)
                            }
                            resolveLinks(YY, rY) {
                              return rY.replace(/\]\((#[^)]+)\)/g, ((rY, DY) => {
                                var FY;
                                const AY = null !== (FY = XY(DY)) && void 0 !== FY ? FY : this.samePageTarget(YY, DY);
                                return AY ? `](${this.markdownUrl(AY.page,AY.anchor)})` : rY
                              }))
                            }
                            samePageTarget(YY, rY) {
                              const DY = (0, eY.v)(rY.slice(1));
                              return bY(YY, DY) ? {
                                page: YY,
                                anchor: DY
                              } : null
                            }
                            renderPart(YY, rY, DY, FY) {
                              const AY = function(YY) {
                                  const rY = YY.map((YY => YY.section)).filter(Boolean);
                                  if (0 === rY.length) return "";
                                  const DY = rY[0],
                                    FY = rY.at(-1);
                                  return DY === FY ? DY : `${DY} to ${FY}`
                                }(rY),
                                IY = rY.map((YY => YY.markdown)).join("\n\n"),
                                RY = AY ? `It covers ${AY}. ` : "",
                                OY = `Part ${DY+1} of ${FY} of [${YY.title}](${this.url((0,fF.t)(YY.slug))}). ${RY}[llms.txt](${this.url(fF.i)}) lists every part.`;
                              return {
                                path: (0, fF.w)(YY.slug, DY),
                                label: AY,
                                markdown: `# ${YY.title}, part ${DY+1} of ${FY}\n\n${OY}\n\n${this.resolveLinks(YY,IY)}\n`
                              }
                            }
                            llmsTxt(YY) {
                              const rY = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${XF(fF.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const DY of dY) {
                                rY.push("", `## ${DY.title}`, "");
                                for (const YY of DY.pageIds) {
                                  const DY = this.getPage(YY),
                                    {
                                      page: FY,
                                      parts: AY
                                    } = DY,
                                    IY = `About ${XF(DY.markdown.length)} tokens${AY.length>0?`, in ${AY.length} parts:`:"."}`;
                                  rY.push(`- [${FY.title}](${this.url(DY.path)}): ${FY.summary} ${IY}`), AY.forEach(((YY, DY) => {
                                    rY.push(`  - [Part ${DY+1}${YY.label?`: ${YY.label}`:""}](${this.url(YY.path)})`)
                                  }))
                                }
                              }
                              return rY.push("", "## Optional", "", `- [Every page in one file](${this.url(fF.f)}): About ${XF(YY.length)} tokens, for a model with a large context window.`, ""), rY.join("\n")
                            }
                            llmsFullTxt() {
                              return dY.flatMap((YY => YY.pageIds.map((YY => this.getPage(YY).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const YY = this.llmsFullTxt(),
                                rY = this.llmsTxt(YY),
                                DY = new Map([
                                  [fF.n, rY],
                                  [fF.i, rY],
                                  [fF.f, YY]
                                ]);
                              for (const FY of this.pages) {
                                DY.set(FY.path, FY.markdown);
                                for (const YY of FY.parts) DY.set(YY.path, YY.markdown)
                              }
                              return DY
                            }
                          }

                          function XF(YY) {
                            return `${Math.max(1,Math.round(YY/4e3))}K`
                          }
                          let qF = null;

                          function pF() {
                            return qF ??= new bF(hY, jF.e), qF
                          }
                          const kF = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function GF(YY) {
                            return pF().getPage(YY.id).parts.length > 0 ? `Read ${fF.l}, then the parts of the Bloxd Code API's ${YY.title} page it lists, so I can ask questions about it.` : `Read ${jF.e}${(0,fF.t)(YY.slug)} so I can ask questions about it. ${fF.l} lists every page of the Bloxd Code API docs.`
                          }

                          function xF(YY) {
                            let {
                              page: rY
                            } = YY;
                            const [DY, FY] = EY();
                            return (0, yY.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, yY.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  FY(pF().getPage(rY.id).markdown)
                                },
                                children: [(0, yY.jsx)(oY, {
                                  name: !1 === (null === DY || void 0 === DY ? void 0 : DY.failed) ? "check" : "copy"
                                }), (0, yY.jsx)("span", {
                                  children: DY ? DY.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), kF.map((YY => (0, yY.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${YY.url}${encodeURIComponent(GF(rY))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, yY.jsx)(oY, {
                                  name: "external-link"
                                }), (0, yY.jsxs)("span", {
                                  children: ["Open in ", YY.name]
                                })]
                              }, YY.name)))]
                            })
                          }

                          function nF(YY) {
                            return `#${[0,1,2].map((rY=>Math.round(Math.min(255,Math.max(0,YY[rY]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function PF(YY) {
                            return [parseInt(YY.slice(1, 3), 16), parseInt(YY.slice(3, 5), 16), parseInt(YY.slice(5, 7), 16)]
                          }

                          function UF(YY) {
                            let {
                              label: rY,
                              min: DY,
                              max: FY,
                              step: AY,
                              low: IY,
                              high: RY,
                              onChange: OY
                            } = YY;
                            return (0, yY.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, yY.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, yY.jsx)("span", {
                                  children: rY
                                }), (0, yY.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: IY === RY ? IY : `${IY}\u2013${RY}`
                                })]
                              }), (0, yY.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, yY.jsx)("input", {
                                  type: "range",
                                  min: DY,
                                  max: FY,
                                  step: AY,
                                  value: Math.min(FY, IY),
                                  "aria-label": `Minimum ${rY.toLowerCase()}`,
                                  onChange: YY => {
                                    const rY = Number(YY.target.value);
                                    OY(rY, Math.max(rY, RY))
                                  }
                                }), (0, yY.jsx)("input", {
                                  type: "range",
                                  min: DY,
                                  max: FY,
                                  step: AY,
                                  value: Math.min(FY, RY),
                                  "aria-label": `Maximum ${rY.toLowerCase()}`,
                                  onChange: YY => {
                                    const rY = Number(YY.target.value);
                                    OY(Math.min(rY, IY), rY)
                                  }
                                })]
                              })]
                            })
                          }

                          function LF(YY) {
                            let {
                              label: rY,
                              min: DY,
                              max: FY,
                              step: AY,
                              value: IY,
                              onChange: RY,
                              format: OY = String
                            } = YY;
                            return (0, yY.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, yY.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, yY.jsx)("span", {
                                  children: rY
                                }), (0, yY.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: OY(IY)
                                })]
                              }), (0, yY.jsx)("input", {
                                type: "range",
                                min: DY,
                                max: FY,
                                step: AY,
                                value: Math.min(FY, Math.max(DY, IY)),
                                "aria-label": rY,
                                onChange: YY => {
                                  RY(Number(YY.target.value))
                                }
                              })]
                            })
                          }

                          function tF(YY) {
                            let {
                              opts: rY,
                              onChange: DY
                            } = YY;
                            const FY = rY.colorGradients;
                            if (!qD(FY)) return (0, yY.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, yY.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, yY.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, yY.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: FY.map(((YY, rY) => (0, yY.jsx)("input", {
                                  type: "color",
                                  value: nF(YY.color),
                                  "aria-label": `Colour ${rY+1}`,
                                  onChange: YY => {
                                    const AY = [...FY];
                                    AY[rY] = {
                                      color: PF(YY.target.value)
                                    }, DY(AY)
                                  }
                                }, rY)))
                              })]
                            });
                            const AY = (YY, rY) => {
                              const AY = [...FY];
                              AY[YY] = rY, DY(AY)
                            };
                            return (0, yY.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, yY.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, yY.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, yY.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), FY.map(((YY, rY) => {
                                var DY;
                                const FY = null !== (DY = YY.maxColor) && void 0 !== DY ? DY : YY.minColor;
                                return (0, yY.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, yY.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * YY.timeFraction), "%"]
                                  }), (0, yY.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${nF(YY.minColor)}, ${nF(FY)})`
                                    }
                                  }), (0, yY.jsx)("input", {
                                    type: "color",
                                    value: nF(YY.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*YY.timeFraction)}%`,
                                    onChange: DY => {
                                      AY(rY, {
                                        ...YY,
                                        minColor: [...PF(DY.target.value), YY.minColor[3]]
                                      })
                                    }
                                  }), (0, yY.jsx)("input", {
                                    type: "color",
                                    value: nF(FY),
                                    "aria-label": `Maximum colour at ${Math.round(100*YY.timeFraction)}%`,
                                    onChange: DY => {
                                      AY(rY, {
                                        ...YY,
                                        maxColor: [...PF(DY.target.value), FY[3]]
                                      })
                                    }
                                  })]
                                }, rY)
                              }))]
                            })
                          }
                          const YA = [-.5, -.5, -.5],
                            rA = [.5, .5, .5],
                            DA = [0, 1, 2, 3, 4, 5, 6, 7].map((YY => [1 & YY ? rA[0] : YA[0], 2 & YY ? rA[1] : YA[1], 4 & YY ? rA[2] : YA[2]]));class FA {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(YY, rY, DY, FY) {
                              const AY = Math.round(31 * rY),
                                IY = Math.round(31 * DY),
                                RY = Math.round(31 * FY),
                                OY = `${AY}|${IY}|${RY}`;
                              let gY = this.tints.get(YY);
                              (!gY || gY.size > 2e3) && (gY = new Map, this.tints.set(YY, gY));
                              let aY = gY.get(OY);
                              if (aY) return aY;
                              aY = document.createElement("canvas"), aY.width = YY.naturalWidth || 16, aY.height = YY.naturalHeight || 16;
                              const vY = aY.getContext("2d");
                              return vY ? (vY.imageSmoothingEnabled = !1, vY.drawImage(YY, 0, 0, aY.width, aY.height), vY.globalCompositeOperation = "multiply", vY.fillStyle = `rgb(${AY/31*255}, ${IY/31*255}, ${RY/31*255})`, vY.fillRect(0, 0, aY.width, aY.height), vY.globalCompositeOperation = "destination-in", vY.drawImage(YY, 0, 0, aY.width, aY.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), gY.set(OY, aY), aY
                            }
                          }

                          function AA(YY) {
                            let {
                              opts: rY,
                              textureUrl: DY,
                              burst: AY,
                              paused: IY
                            } = YY;
                            const RY = (0, FY.useRef)(null),
                              OY = (0, FY.useRef)(rY);
                            OY.current = rY;
                            const gY = (0, FY.useRef)(IY);
                            gY.current = IY;
                            const aY = (0, FY.useRef)(null),
                              vY = (0, FY.useRef)(null),
                              uY = (0, FY.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(YY) {
                                let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const DY = [-.5, -.5, -.5],
                                  FY = [.5, .5, .5];
                                let AY = .5;
                                for (let IY = 0; IY < 40; IY++) {
                                  const IY = kD(YY, DY, FY, rY),
                                    RY = Math.max(IY.life / 30, .001);
                                  for (; nD(IY, YY.gravity, RY);) AY = Math.max(AY, Math.hypot(IY.pos[0], IY.pos[1], IY.pos[2]) + IY.size / 2)
                                }
                                return AY
                              }(rY)))), [rY]),
                              sY = (0, FY.useRef)(uY);
                            return sY.current = uY, (0, FY.useEffect)((() => {
                              if (aY.current = null, !DY) return;
                              const YY = new Image;
                              let rY = !1;
                              return YY.onload = () => {
                                rY || (aY.current = YY)
                              }, YY.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${DY}`)
                              }, YY.src = DY, () => {
                                rY = !0
                              }
                            }), [DY]), (0, FY.useEffect)((() => {
                              var YY;
                              null === (YY = vY.current) || void 0 === YY || YY.call(vY)
                            }), [rY, AY]), (0, FY.useEffect)((() => {
                              const YY = RY.current,
                                rY = null === YY || void 0 === YY ? void 0 : YY.getContext("2d");
                              if (!YY || !rY) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const DY = new FA;
                              let FY = [],
                                AY = 0,
                                IY = -.7,
                                uY = sY.current,
                                iY = performance.now(),
                                yY = 0,
                                QY = !0,
                                oY = null;
                              const WY = () => {
                                const YY = OY.current,
                                  rY = Math.min(400, Math.max(0, Math.ceil(YY.manualEmitCount)));
                                FY = [];
                                for (let DY = 0; DY < rY; DY++) FY.push(kD(YY, YA, rA, Math.random));
                                AY = 0
                              };
                              vY.current = WY, WY();
                              const EY = RY => {
                                yY = requestAnimationFrame(EY);
                                const vY = Math.min(.05, (RY - iY) / 1e3);
                                if (iY = RY, !QY) return;
                                const mY = window.devicePixelRatio || 1,
                                  VY = Math.round(YY.clientWidth * mY),
                                  SY = Math.round(YY.clientHeight * mY);
                                if (0 === VY || 0 === SY) return;
                                YY.width === VY && YY.height === SY || (YY.width = VY, YY.height = SY);
                                const lY = OY.current;
                                null === oY && (IY += .18 * vY), uY += (sY.current - uY) * Math.min(1, 4 * vY);
                                const TY = .6 * vY;
                                FY = FY.filter((YY => nD(YY, lY.gravity, TY))), 0 !== FY.length || gY.current || (AY += vY, AY > .6 && WY());
                                const eY = function(YY, rY, DY, FY) {
                                  const AY = 3.2 * FY,
                                    IY = .44 * Math.min(YY, rY) * AY / FY,
                                    RY = Math.cos(DY),
                                    OY = Math.sin(DY),
                                    gY = Math.cos(.42),
                                    aY = Math.sin(.42);
                                  return (DY, FY, vY) => {
                                    const uY = DY * OY + vY * RY,
                                      sY = AY - (FY * aY + uY * gY);
                                    if (sY < .05) return null;
                                    const iY = IY / sY;
                                    return {
                                      x: YY / 2 + (DY * RY - vY * OY) * iY,
                                      y: rY / 2 - (FY * gY - uY * aY) * iY,
                                      scale: iY,
                                      depth: sY
                                    }
                                  }
                                }(VY, SY, IY, uY);
                                ! function(YY, rY, DY, FY, AY) {
                                  const IY = YY.createLinearGradient(0, 0, 0, DY);
                                  IY.addColorStop(0, "#23262d"), IY.addColorStop(1, "#16181c"), YY.globalCompositeOperation = "source-over", YY.globalAlpha = 1, YY.fillStyle = IY, YY.fillRect(0, 0, rY, DY);
                                  const RY = (rY, DY) => {
                                      const AY = FY(rY[0], rY[1], rY[2]),
                                        IY = FY(DY[0], DY[1], DY[2]);
                                      AY && IY && (YY.beginPath(), YY.moveTo(AY.x, AY.y), YY.lineTo(IY.x, IY.y), YY.stroke())
                                    },
                                    OY = Math.ceil(AY) + 1,
                                    gY = YA[1];
                                  YY.lineWidth = 1, YY.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let aY = -OY; aY <= OY; aY++) RY([aY + .5, gY, .5 - OY], [aY + .5, gY, OY + .5]), RY([.5 - OY, gY, aY + .5], [OY + .5, gY, aY + .5]);
                                  YY.strokeStyle = "rgba(255, 255, 255, 0.28)", YY.setLineDash([4, 4]);
                                  for (const aY of DA)
                                    for (const YY of DA) {
                                      const rY = [0, 1, 2].filter((rY => aY[rY] !== YY[rY]));
                                      1 === rY.length && aY[rY[0]] < YY[rY[0]] && RY(aY, YY)
                                    }
                                  YY.setLineDash([])
                                }(rY, VY, SY, eY, uY);
                                const NY = aY.current,
                                  BY = FY.map((YY => ({
                                    particle: YY,
                                    at: eY(YY.pos[0], YY.pos[1], YY.pos[2])
                                  }))).filter((YY => null !== YY.at)).sort(((YY, rY) => rY.at.depth - YY.at.depth));
                                rY.imageSmoothingEnabled = !1;
                                for (const YY of function(YY) {
                                    switch (YY) {
                                      case JD.g.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case JD.g.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case JD.g.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case JD.g.MultiplyAdd:
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
                                  }(lY.blendMode)) {
                                  rY.globalCompositeOperation = YY.operation;
                                  for (const {
                                      particle: FY,
                                      at: AY
                                    }
                                    of BY) {
                                    const [IY, RY, OY, gY] = xD(FY), aY = Math.max(1, FY.size * AY.scale);
                                    rY.globalAlpha = YY.usesAlpha ? Math.min(1, Math.max(0, gY)) : 1, NY ? rY.drawImage(DY.get(NY, IY, RY, OY), AY.x - aY / 2, AY.y - aY / 2, aY, aY) : (rY.fillStyle = `rgb(${255*IY}, ${255*RY}, ${255*OY})`, rY.fillRect(AY.x - aY / 2, AY.y - aY / 2, aY, aY))
                                  }
                                }
                                rY.globalCompositeOperation = "source-over", rY.globalAlpha = 1
                              };
                              yY = requestAnimationFrame(EY);
                              const mY = new IntersectionObserver((YY => {
                                let [rY] = YY;
                                QY = rY.isIntersecting
                              }));
                              mY.observe(YY);
                              const VY = rY => {
                                  oY = rY.clientX, YY.setPointerCapture(rY.pointerId)
                                },
                                SY = YY => {
                                  null !== oY && (IY += .01 * (YY.clientX - oY), oY = YY.clientX)
                                },
                                lY = () => {
                                  oY = null
                                };
                              return YY.addEventListener("pointerdown", VY), YY.addEventListener("pointermove", SY), YY.addEventListener("pointerup", lY), YY.addEventListener("pointercancel", lY), () => {
                                cancelAnimationFrame(yY), mY.disconnect(), vY.current = null, YY.removeEventListener("pointerdown", VY), YY.removeEventListener("pointermove", SY), YY.removeEventListener("pointerup", lY), YY.removeEventListener("pointercancel", lY)
                              }
                            }), []), (0, yY.jsx)("canvas", {
                              ref: RY,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${rY.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const IA = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            RA = [{
                              mode: JD.g.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: JD.g.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: JD.g.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: JD.g.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: JD.g.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            OA = (0, FY.forwardRef)((function(YY, rY) {
                              var DY, AY;
                              let {
                                textures: RY
                              } = YY;
                              const OY = mF(),
                                gY = (0, FY.useRef)(null),
                                [aY, vY] = (0, FY.useState)(wD),
                                [uY, sY] = (0, FY.useState)("example"),
                                [iY, QY] = (0, FY.useState)(0),
                                [WY, EY] = (0, FY.useState)(!1),
                                VY = YY => {
                                  const rY = "example" === YY ? wD : MD(YY);
                                  rY && (vY(rY), sY(YY))
                                };
                              (0, FY.useImperativeHandle)(rY, (() => ({
                                preview: YY => {
                                  var rY;
                                  VY(YY), null === (rY = gY.current) || void 0 === rY || rY.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const SY = YY => {
                                  vY({
                                    ...aY,
                                    ...YY
                                  }), sY(null)
                                },
                                lY = function(YY, rY) {
                                  if (null !== rY) return `${tD}    presetId: "${rY}",\n${YF}\n})`;
                                  const DY = YY.velocityGradients.map((YY => `        {\n            timeFraction: ${PD(YY.timeFraction)},\n            factor: ${PD(YY.factor)},\n            factor2: ${PD(YY.factor2)},\n        },`)),
                                    FY = [`    dir1: ${UD(YY.dir1)},`, `    dir2: ${UD(YY.dir2)},`, YF, `    texture: "${YY.texture}",`, `    minLifeTime: ${PD(YY.minLifeTime)},`, `    maxLifeTime: ${PD(YY.maxLifeTime)},`, `    minEmitPower: ${PD(YY.minEmitPower)},`, `    maxEmitPower: ${PD(YY.maxEmitPower)},`, `    minSize: ${PD(YY.minSize)},`, `    maxSize: ${PD(YY.maxSize)},`, `    manualEmitCount: ${PD(YY.manualEmitCount)},`, `    gravity: ${UD(YY.gravity)},`, `    colorGradients: ${LD(YY.colorGradients,"    ")},`, `    velocityGradients: ${DY.length>0?`[\n${DY.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${PD(YY.blendMode)},`];
                                  return void 0 !== YY.hideDist && FY.push(`    hideDist: ${PD(YY.hideDist)},`), `${tD}${FY.join("\n")}\n})`
                                }(aY, null === uY || "example" === uY ? null : uY),
                                eY = RY.includes(aY.texture) ? RY : [...RY, aY.texture];
                              return (0, yY.jsxs)("section", {
                                ref: gY,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, yY.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, yY.jsxs)("div", {
                                    children: [(0, yY.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, yY.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, yY.jsx)(mY, {
                                    text: lY,
                                    label: "Copy code"
                                  })]
                                }), (0, yY.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, yY.jsx)("button", {
                                    type: "button",
                                    className: IY()("DocsVariantChip", {
                                      Active: "example" === uY
                                    }),
                                    onClick: () => {
                                      VY("example")
                                    },
                                    children: "Example"
                                  }), IA.filter((YY => null !== MD(YY))).map((YY => (0, yY.jsx)("button", {
                                    type: "button",
                                    className: IY()("DocsVariantChip", {
                                      Active: uY === YY
                                    }),
                                    onClick: () => {
                                      VY(YY)
                                    },
                                    children: YY
                                  }, YY))), (0, yY.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== uY && void 0 !== uY ? uY : "custom",
                                    "aria-label": "Preset",
                                    onChange: YY => {
                                      VY(YY.target.value)
                                    },
                                    children: [(0, yY.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === uY && (0, yY.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), dD.b.map((YY => (0, yY.jsx)("option", {
                                      value: YY,
                                      children: YY
                                    }, YY)))]
                                  })]
                                }), (0, yY.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, yY.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, yY.jsx)(AA, {
                                      opts: aY,
                                      textureUrl: null !== (DY = null === OY || void 0 === OY ? void 0 : OY.getParticleTextureUrl(aY.texture)) && void 0 !== DY ? DY : null,
                                      burst: iY,
                                      paused: WY
                                    }), (0, yY.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, yY.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          QY(iY + 1)
                                        },
                                        children: [(0, yY.jsx)(oY, {
                                          name: "replay"
                                        }), (0, yY.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, yY.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": WY,
                                        onClick: () => {
                                          EY(!WY)
                                        },
                                        children: [(0, yY.jsx)(oY, {
                                          name: WY ? "play" : "pause"
                                        }), (0, yY.jsx)("span", {
                                          children: WY ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, yY.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, yY.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, yY.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, yY.jsx)("span", {
                                          children: "Texture"
                                        }), (0, yY.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: aY.texture
                                        })]
                                      }), (0, yY.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: eY.map((YY => {
                                          var rY;
                                          const DY = null !== (rY = null === OY || void 0 === OY ? void 0 : OY.getParticleTextureUrl(YY)) && void 0 !== rY ? rY : null;
                                          return (0, yY.jsx)("button", {
                                            type: "button",
                                            className: IY()("DocsParticleTexture", {
                                              Active: aY.texture === YY
                                            }),
                                            title: YY,
                                            "aria-label": YY,
                                            "aria-pressed": aY.texture === YY,
                                            onClick: () => {
                                              SY({
                                                texture: YY
                                              })
                                            },
                                            children: DY ? (0, yY.jsx)("img", {
                                              src: DY,
                                              alt: ""
                                            }) : (0, yY.jsx)(oY, {
                                              name: "image"
                                            })
                                          }, YY)
                                        }))
                                      })]
                                    }), (0, yY.jsx)(LF, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: aY.manualEmitCount,
                                      onChange: YY => {
                                        SY({
                                          manualEmitCount: YY
                                        })
                                      }
                                    }), (0, yY.jsx)(UF, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: aY.minLifeTime,
                                      high: aY.maxLifeTime,
                                      onChange: (YY, rY) => {
                                        SY({
                                          minLifeTime: YY,
                                          maxLifeTime: rY
                                        })
                                      }
                                    }), (0, yY.jsx)(UF, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: aY.minEmitPower,
                                      high: aY.maxEmitPower,
                                      onChange: (YY, rY) => {
                                        SY({
                                          minEmitPower: YY,
                                          maxEmitPower: rY
                                        })
                                      }
                                    }), (0, yY.jsx)(UF, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: aY.minSize,
                                      high: aY.maxSize,
                                      onChange: (YY, rY) => {
                                        SY({
                                          minSize: YY,
                                          maxSize: rY
                                        })
                                      }
                                    }), (0, yY.jsx)(LF, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (AY = aY.gravity[1]) && void 0 !== AY ? AY : 0,
                                      onChange: YY => {
                                        var rY, DY;
                                        SY({
                                          gravity: [null !== (rY = aY.gravity[0]) && void 0 !== rY ? rY : 0, YY, null !== (DY = aY.gravity[2]) && void 0 !== DY ? DY : 0]
                                        })
                                      }
                                    }), (0, yY.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, yY.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, yY.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, yY.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: aY.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: YY => {
                                          SY({
                                            blendMode: Number(YY.target.value)
                                          })
                                        },
                                        children: RA.map((YY => {
                                          let {
                                            mode: rY,
                                            label: DY
                                          } = YY;
                                          return (0, yY.jsx)("option", {
                                            value: rY,
                                            children: DY
                                          }, rY)
                                        }))
                                      })]
                                    }), (0, yY.jsx)(tF, {
                                      opts: aY,
                                      onChange: YY => {
                                        SY({
                                          colorGradients: YY
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, yY.jsx)(TY, {
                                  code: lY,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var gA = DY(4014),
                            aA = DY(1778);

                          function vA(YY, rY) {
                            return YY ? gA.d.includes(rY) ? YY.getIngameIconUrl(rY) : YY.getItemIconUrl(rY) : null
                          }

                          function uA(YY) {
                            var rY, DY, FY;
                            let {
                              part: AY,
                              assets: RY
                            } = YY;
                            const OY = vA(RY, AY.icon),
                              gY = null !== (rY = null === (DY = AY.style) || void 0 === DY ? void 0 : DY.fontSize) && void 0 !== rY ? rY : "1.8em",
                              aY = (0, dr.Ub)(AY.style);
                            return (0, yY.jsxs)("span", {
                              className: IY()("DocsBloxdTextIcon", {
                                Missing: !OY
                              }),
                              style: {
                                width: gY,
                                height: gY,
                                opacity: null === (FY = AY.style) || void 0 === FY ? void 0 : FY.opacity
                              },
                              title: OY ? void 0 : `No Bloxd icon, item or block is called "${AY.icon}"`,
                              children: [OY && aY && (0, yY.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: aY,
                                  maskImage: `url("${OY}")`,
                                  WebkitMaskImage: `url("${OY}")`
                                }
                              }), OY ? (0, yY.jsx)("img", {
                                src: OY,
                                alt: "",
                                className: IY()({
                                  Tinted: aY
                                })
                              }) : (0, yY.jsx)(oY, {
                                name: "image"
                              })]
                            })
                          }

                          function sA(YY) {
                            let {
                              parts: rY,
                              className: DY
                            } = YY;
                            const FY = mF(),
                              AY = [];
                            let RY = [];
                            const OY = YY => {
                              RY.length > 0 && (AY.push((0, yY.jsx)(aA.b, {
                                text: RY
                              }, `run-${YY}`)), RY = [])
                            };
                            return rY.forEach(((YY, rY) => {
                              "icon" !== Xr(YY) || Mr(YY.icon) ? RY.push(YY) : (OY(rY), AY.push((0, yY.jsx)(uA, {
                                part: YY,
                                assets: FY
                              }, `icon-${rY}`)))
                            })), OY(rY.length), (0, yY.jsx)("div", {
                              className: IY()("DocsStyledTextPreview", DY),
                              children: AY
                            })
                          }
                          const iA = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let yA = null;

                          function QA(YY) {
                            if (yA ??= document.createElement("canvas").getContext("2d"), !yA) return "#000000";
                            yA.fillStyle = "#000000", yA.fillStyle = YY;
                            const rY = yA.fillStyle;
                            return rY.startsWith("#") ? rY : "#000000"
                          }

                          function oA(YY) {
                            let {
                              value: rY,
                              label: DY,
                              onChange: FY
                            } = YY;
                            return (0, yY.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, yY.jsx)("input", {
                                type: "color",
                                value: QA(rY),
                                "aria-label": `${DY} picker`,
                                onChange: YY => {
                                  FY(YY.target.value)
                                }
                              }), (0, yY.jsx)("input", {
                                type: "text",
                                value: rY,
                                placeholder: "#ffb914 or gold",
                                "aria-label": DY,
                                spellCheck: !1,
                                onChange: YY => {
                                  FY(YY.target.value)
                                }
                              })]
                            })
                          }

                          function WA(YY) {
                            let {
                              value: rY,
                              fontAwesomeIcons: DY,
                              onChange: AY
                            } = YY;
                            const RY = mF(),
                              [OY, gY] = (0, FY.useState)(Mr(rY) ? "fontAwesome" : "bloxd"),
                              [aY, vY] = (0, FY.useState)(""),
                              uY = aY.trim().toLowerCase(),
                              sY = "bloxd" === OY ? gA.d : DY,
                              iY = uY ? sY.filter((YY => YY.toLowerCase().includes(uY))) : sY;
                            return (0, yY.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, yY.jsx)("input", {
                                type: "text",
                                value: rY,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: YY => {
                                  AY(YY.target.value)
                                }
                              }), (0, yY.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, yY.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((YY => (0, yY.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": OY === YY,
                                    className: IY()("DocsVariantChip", {
                                      Active: OY === YY
                                    }),
                                    onClick: () => {
                                      gY(YY)
                                    },
                                    children: "bloxd" === YY ? `Bloxd icons (${gA.d.length})` : `Font Awesome (${DY.length})`
                                  }, YY))), (0, yY.jsx)("input", {
                                    type: "search",
                                    value: aY,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: YY => {
                                      vY(YY.target.value)
                                    }
                                  })
                                ]
                              }), (0, yY.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [iY.map((YY => {
                                  const DY = "bloxd" === OY ? vA(RY, YY) : null;
                                  return (0, yY.jsx)("button", {
                                    type: "button",
                                    title: YY,
                                    "aria-label": YY,
                                    "aria-pressed": YY === rY,
                                    className: IY()("DocsIconPickerOption", {
                                      Active: YY === rY
                                    }),
                                    onClick: () => {
                                      AY(YY)
                                    },
                                    children: "fontAwesome" === OY ? (0, yY.jsx)(VD.e, {
                                      name: YY
                                    }) : DY ? (0, yY.jsx)("img", {
                                      src: DY,
                                      alt: ""
                                    }) : (0, yY.jsx)(oY, {
                                      name: "image"
                                    })
                                  }, YY)
                                })), 0 === iY.length && (0, yY.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", aY, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function EA(YY) {
                            let {
                              property: rY,
                              value: DY,
                              fontAwesomeIcons: FY,
                              onChange: AY
                            } = YY;
                            const {
                              field: IY,
                              label: RY
                            } = rY, OY = YY => "" !== YY || rY.isRequired ? YY : void 0;
                            switch (IY.kind) {
                              case "text":
                                return IY.multiline ? (0, yY.jsx)("textarea", {
                                  value: String(null !== DY && void 0 !== DY ? DY : ""),
                                  rows: 2,
                                  "aria-label": RY,
                                  onChange: YY => {
                                    AY(YY.target.value)
                                  }
                                }) : (0, yY.jsx)("input", {
                                  type: "text",
                                  value: String(null !== DY && void 0 !== DY ? DY : ""),
                                  "aria-label": RY,
                                  onChange: YY => {
                                    AY(OY(YY.target.value))
                                  }
                                });
                              case "size":
                                return (0, yY.jsx)("input", {
                                  type: "text",
                                  value: String(null !== DY && void 0 !== DY ? DY : ""),
                                  placeholder: rY.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": RY,
                                  spellCheck: !1,
                                  onChange: YY => {
                                    AY(OY(YY.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, yY.jsx)(oA, {
                                  value: String(null !== DY && void 0 !== DY ? DY : ""),
                                  label: RY,
                                  onChange: YY => {
                                    AY(OY(YY))
                                  }
                                });
                              case "colours": {
                                const YY = Array.isArray(DY) ? DY : [],
                                  rY = YY => {
                                    AY(YY.length > 0 ? YY : void 0)
                                  };
                                return (0, yY.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [YY.map(((DY, FY) => (0, yY.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, yY.jsx)(oA, {
                                      value: DY,
                                      label: `${RY} ${FY+1}`,
                                      onChange: DY => {
                                        rY(YY.map(((YY, rY) => rY === FY ? DY : YY)))
                                      }
                                    }), (0, yY.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${FY+1}`,
                                      onClick: () => {
                                        rY(YY.filter(((YY, rY) => rY !== FY)))
                                      },
                                      children: (0, yY.jsx)(oY, {
                                        name: "cross"
                                      })
                                    })]
                                  }, FY))), (0, yY.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var DY;
                                      rY([...YY, null !== (DY = YY.at(-1)) && void 0 !== DY ? DY : "#ffffff"])
                                    },
                                    children: [(0, yY.jsx)(oY, {
                                      name: "plus"
                                    }), 0 === YY.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var gY;
                                const YY = "number" === typeof DY ? DY : Number(null !== (gY = rY.defaultText) && void 0 !== gY ? gY : 0);
                                return (0, yY.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, yY.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: YY,
                                    "aria-label": RY,
                                    onChange: YY => {
                                      AY(Number(YY.target.value))
                                    }
                                  }), (0, yY.jsx)("output", {
                                    children: YY.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, yY.jsxs)("select", {
                                  value: String(null !== DY && void 0 !== DY ? DY : ""),
                                  "aria-label": RY,
                                  onChange: YY => {
                                    AY(OY(YY.target.value))
                                  },
                                  children: [!rY.isRequired && (0, yY.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", rY.defaultText, ")"]
                                  }), IY.options.map((YY => (0, yY.jsx)("option", {
                                    value: YY,
                                    children: YY
                                  }, YY)))]
                                });
                              case "icon":
                                return (0, yY.jsx)(WA, {
                                  value: String(null !== DY && void 0 !== DY ? DY : ""),
                                  fontAwesomeIcons: FY,
                                  onChange: AY
                                })
                            }
                          }

                          function mA(YY) {
                            let rY;
                            try {
                              rY = JSON.parse(YY)
                            } catch (DY) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${DY.message}`
                              }
                            }
                            return DD(rY) ? {
                              part: rY,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function VA(YY) {
                            let {
                              parts: rY,
                              index: DY,
                              fontAwesomeIcons: AY,
                              onChange: IY,
                              kS: RY,
                              onClose: OY
                            } = YY;
                            const gY = (0, FY.useContext)(yr),
                              vY = (0, FY.useRef)(null),
                              uY = rY[DY],
                              sY = Xr(uY),
                              [iY, QY] = (0, FY.useState)((() => JSON.stringify(uY, null, 2))),
                              WY = (0, FY.useMemo)((() => "other" === sY ? mA(iY).error : null), [sY, iY]);
                            (0, FY.useEffect)((() => {
                              var YY;
                              null === (YY = vY.current) || void 0 === YY || YY.focus()
                            }), []);
                            const EY = (0, yY.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: YY => {
                                YY.target === YY.currentTarget && OY()
                              },
                              children: (0, yY.jsxs)("div", {
                                ref: vY,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${DY+1}: ${wr[sY]}`,
                                tabIndex: -1,
                                onKeyDown: YY => {
                                  "Escape" === YY.key ? (YY.stopPropagation(), OY()) : "Tab" === YY.key && vY.current && function(YY, rY) {
                                    const DY = Array.from(YY.querySelectorAll(Kr)),
                                      FY = DY[0],
                                      AY = DY.at(-1);
                                    if (!FY || !AY) return;
                                    const IY = document.activeElement;
                                    !rY.shiftKey || IY !== FY && IY !== YY ? rY.shiftKey || IY !== AY || (rY.preventDefault(), FY.focus()) : (rY.preventDefault(), AY.focus())
                                  }(vY.current, YY)
                                },
                                children: [(0, yY.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, yY.jsxs)("div", {
                                    children: [(0, yY.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", DY + 1]
                                    }), (0, yY.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: wr[sY]
                                    })]
                                  }), (0, yY.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: OY,
                                    children: (0, yY.jsx)(oY, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, yY.jsx)(sA, {
                                  parts: rY,
                                  className: "DocsTextDialogPreview"
                                }), (0, yY.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === sY ? (0, yY.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, yY.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, yY.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: iY,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: YY => {
                                        QY(YY.target.value);
                                        const rY = mA(YY.target.value);
                                        null !== rY.part && IY(rY.part)
                                      }
                                    }), WY && (0, yY.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: WY
                                    })]
                                  }) : pr[sY].map((YY => {
                                    const rY = Gr(uY, YY.path),
                                      DY = YY.isRequired ? JSON.stringify(nr(uY, YY.path)) === JSON.stringify(uY) : void 0 === rY;
                                    return (0, yY.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, yY.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, yY.jsx)("span", {
                                          children: YY.label
                                        }), (0, yY.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: DY,
                                          "aria-label": `Reset ${YY.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            IY(nr(uY, YY.path))
                                          },
                                          children: [(0, yY.jsx)(oY, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, yY.jsx)(EA, {
                                        property: YY,
                                        value: rY,
                                        fontAwesomeIcons: AY,
                                        onChange: rY => {
                                          IY(xr(uY, YY.path, rY))
                                        }
                                      }), !YY.isRequired && (0, yY.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", YY.defaultText]
                                      })]
                                    }, YY.path.join("."))
                                  }))
                                }), (0, yY.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, yY.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: RY,
                                    children: [(0, yY.jsx)(oY, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, yY.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: OY,
                                    children: "Done"
                                  })]
                                }), (0, yY.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: iA.map((YY => (0, yY.jsx)("option", {
                                    value: YY
                                  }, YY)))
                                })]
                              })
                            });
                            return gY ? (0, aY.createPortal)(EY, gY) : EY
                          }
                          const SA = [{
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
                            lA = Object.keys(br);

                          function TA(YY) {
                            let {
                              fontAwesomeIcons: rY
                            } = YY;
                            const [DY, AY] = (0, FY.useState)(SA[0].parts), [RY, OY] = (0, FY.useState)((() => tr(SA[0].parts))), [gY, aY] = (0, FY.useState)(null), [vY, uY] = (0, FY.useState)(!1), [sY, iY] = (0, FY.useState)(null), [QY, WY] = (0, FY.useState)(!1), [EY, mY] = (0, FY.useState)(null), VY = (0, FY.useRef)(null), SY = tr(DY);
                            (0, FY.useLayoutEffect)((() => {
                              var YY;
                              if (!EY) return;
                              const rY = YY => {
                                  var rY;
                                  return null === (rY = VY.current) || void 0 === rY ? void 0 : rY.querySelector(`[data-focus-key="${YY}"]`)
                                },
                                DY = rY(EY.key);
                              null === (YY = DY && !DY.disabled ? DY : rY(EY.fallback)) || void 0 === YY || YY.focus(), mY(null)
                            }), [EY]);
                            const lY = YY => {
                                AY(YY), OY(tr(YY)), aY(null)
                              },
                              eY = YY => {
                                lY(DY.filter(((rY, DY) => DY !== YY))), mY({
                                  key: `edit-${Math.min(YY,DY.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              NY = (YY, rY) => {
                                const FY = [...DY],
                                  [AY] = FY.splice(YY, 1);
                                FY.splice(YY + rY, 0, AY), lY(FY);
                                mY({
                                  key: `${rY<0?"up":"down"}-${YY+rY}`,
                                  fallback: `edit-${YY+rY}`
                                })
                              };
                            return (0, yY.jsxs)("section", {
                              ref: VY,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, yY.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, yY.jsxs)("div", {
                                  children: [(0, yY.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, yY.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, yY.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: SA.map((YY => (0, yY.jsx)("button", {
                                  type: "button",
                                  className: IY()("DocsVariantChip", {
                                    Active: SY === tr(YY.parts)
                                  }),
                                  onClick: () => {
                                    lY(YY.parts)
                                  },
                                  children: YY.label
                                }, YY.label)))
                              }), (0, yY.jsx)(sA, {
                                parts: DY,
                                className: "DocsTextEditorPreview"
                              }), (0, yY.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, yY.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, yY.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, yY.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [DY.map(((YY, rY) => {
                                      const FY = Xr(YY);
                                      return (0, yY.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, yY.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${rY}`,
                                          "aria-label": `Edit part ${rY+1}, ${wr[FY]}`,
                                          onClick: () => {
                                            iY(rY)
                                          },
                                          children: [(0, yY.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: wr[FY]
                                          }), (0, yY.jsx)(sA, {
                                            parts: [YY],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== FY && (0, yY.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: Pr(YY)
                                          })]
                                        }), (0, yY.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, yY.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${rY+1} up`,
                                            "data-focus-key": `up-${rY}`,
                                            disabled: 0 === rY,
                                            onClick: () => {
                                              NY(rY, -1)
                                            },
                                            children: (0, yY.jsx)(oY, {
                                              name: "chevron-up"
                                            })
                                          }), (0, yY.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${rY+1} down`,
                                            "data-focus-key": `down-${rY}`,
                                            disabled: rY === DY.length - 1,
                                            onClick: () => {
                                              NY(rY, 1)
                                            },
                                            children: (0, yY.jsx)(oY, {
                                              name: "chevron-down"
                                            })
                                          }), (0, yY.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${rY+1}`,
                                            onClick: () => {
                                              eY(rY)
                                            },
                                            children: (0, yY.jsx)(oY, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, rY)
                                    })), 0 === DY.length && (0, yY.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, yY.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: YY => {
                                      "Escape" === YY.key && QY && (YY.stopPropagation(), WY(!1), mY({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, yY.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": QY,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        WY(!QY)
                                      },
                                      children: [(0, yY.jsx)(oY, {
                                        name: "plus"
                                      }), "Add a part", (0, yY.jsx)(oY, {
                                        name: QY ? "chevron-up" : "chevron-down"
                                      })]
                                    }), QY && (0, yY.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: lA.map((YY => (0, yY.jsx)("li", {
                                        children: (0, yY.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (YY => {
                                              lY([...DY, br[YY]]), WY(!1), iY(DY.length)
                                            })(YY)
                                          },
                                          children: wr[YY]
                                        })
                                      }, YY)))
                                    })]
                                  })]
                                }), (0, yY.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, yY.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, yY.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": vY,
                                      onClick: () => {
                                        uY(!vY)
                                      },
                                      children: [(0, yY.jsx)(oY, {
                                        name: vY ? "check" : "pencil"
                                      }), vY ? "Done" : "Edit"]
                                    })]
                                  }), vY ? (0, yY.jsxs)(yY.Fragment, {
                                    children: [(0, yY.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: RY,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: YY => {
                                        OY(YY.target.value);
                                        const rY = FD(YY.target.value);
                                        aY(rY.error), rY.parts && AY(rY.parts)
                                      }
                                    }), gY && (0, yY.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: gY
                                    })]
                                  }) : (0, yY.jsx)(TY, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${SY})`
                                  })]
                                })]
                              }), null !== sY && sY < DY.length && (0, yY.jsx)(VA, {
                                parts: DY,
                                index: sY,
                                fontAwesomeIcons: rY,
                                onChange: YY => {
                                  ((YY, rY) => {
                                    lY(DY.map(((DY, FY) => FY === YY ? rY : DY)))
                                  })(sY, YY)
                                },
                                kS: () => {
                                  eY(sY), iY(null)
                                },
                                onClose: () => {
                                  iY(null), mY({
                                    key: `edit-${sY}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var eA = DY(4422),
                            NA = DY(4408),
                            BA = DY(4419),
                            cA = DY(4425);
                          const KA = 40,
                            HA = 800,
                            zA = 150,
                            ZA = 8e3,
                            CA = 2e3;

                          function fA(YY, rY) {
                            return 12 * Math.log2(rY / YY)
                          }

                          function jA(YY, rY) {
                            return Math.round(YY * 2 ** (rY / 12) * 10) / 10
                          }

                          function hA(YY) {
                            return `${YY} ms`
                          }

                          function dA(YY) {
                            return `${YY} st`
                          }
                          const JA = [{
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

                          function MA(YY) {
                            let {
                              synth: rY,
                              onChange: DY
                            } = YY;
                            const FY = (0, eA.l)(rY);
                            return (0, yY.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, yY.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, yY.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, yY.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, yY.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, yY.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, yY.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: eA.e.map((YY => (0, yY.jsx)("button", {
                                      type: "button",
                                      className: IY()("DocsVariantChip", {
                                        Active: rY.waveform === YY
                                      }),
                                      "aria-pressed": rY.waveform === YY,
                                      onClick: () => {
                                        DY({
                                          waveform: YY
                                        })
                                      },
                                      children: YY
                                    }, YY)))
                                  })]
                                }), (0, yY.jsx)(LF, {
                                  label: "Pitch",
                                  min: 0,
                                  max: fA(KA, HA),
                                  step: .1,
                                  value: fA(KA, rY.pitchHz),
                                  format: () => `${rY.pitchHz} Hz`,
                                  onChange: YY => {
                                    DY({
                                      pitchHz: jA(KA, YY)
                                    })
                                  }
                                }), (0, yY.jsx)(LF, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: rY.syllableMs,
                                  format: hA,
                                  onChange: YY => {
                                    DY({
                                      syllableMs: YY
                                    })
                                  }
                                }), (0, yY.jsx)(LF, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: rY.volume,
                                  onChange: YY => {
                                    DY({
                                      volume: YY
                                    })
                                  }
                                })]
                              }), (0, yY.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, yY.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, yY.jsx)(LF, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: rY.durationMs,
                                  format: hA,
                                  onChange: YY => {
                                    DY({
                                      durationMs: YY
                                    })
                                  }
                                }), (0, yY.jsx)(LF, {
                                  label: "Fade in",
                                  min: 0,
                                  max: FY.durationMs,
                                  step: 1,
                                  value: FY.attackMs,
                                  format: hA,
                                  onChange: YY => {
                                    DY({
                                      attackMs: YY
                                    })
                                  }
                                }), (0, yY.jsx)(LF, {
                                  label: "Fade out",
                                  min: 0,
                                  max: FY.durationMs - FY.attackMs,
                                  step: 1,
                                  value: FY.releaseMs,
                                  format: hA,
                                  onChange: YY => {
                                    DY({
                                      releaseMs: YY
                                    })
                                  }
                                }), (0, yY.jsx)(LF, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: rY.glideSemitones,
                                  format: dA,
                                  onChange: YY => {
                                    DY({
                                      glideSemitones: YY
                                    })
                                  }
                                }), (0, yY.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, yY.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== rY.lowpassHz,
                                    onChange: YY => {
                                      DY({
                                        lowpassHz: YY.target.checked ? CA : null
                                      })
                                    }
                                  }), (0, yY.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== rY.lowpassHz && (0, yY.jsx)(LF, {
                                  label: "Filter",
                                  min: 0,
                                  max: fA(zA, ZA),
                                  step: .1,
                                  value: fA(zA, rY.lowpassHz),
                                  format: () => `${rY.lowpassHz} Hz`,
                                  onChange: YY => {
                                    DY({
                                      lowpassHz: jA(zA, YY)
                                    })
                                  }
                                })]
                              }), (0, yY.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, yY.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), JA.map((YY => {
                                  let {
                                    key: FY,
                                    label: AY,
                                    max: IY
                                  } = YY;
                                  return (0, yY.jsx)(LF, {
                                    label: AY,
                                    min: 0,
                                    max: IY,
                                    step: .1,
                                    value: rY.intonation[FY],
                                    format: dA,
                                    onChange: YY => {
                                      DY({
                                        intonation: {
                                          ...rY.intonation,
                                          [FY]: YY
                                        }
                                      })
                                    }
                                  }, FY)
                                }))]
                              })]
                            })
                          }
                          const wA = Object.keys(eA.i),
                            bA = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function XA(YY) {
                            var rY;
                            const DY = JSON.stringify((0, eA.l)(YY));
                            return null !== (rY = wA.find((YY => JSON.stringify((0, eA.l)(eA.i[YY])) === DY))) && void 0 !== rY ? rY : null
                          }

                          function qA(YY) {
                            let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof YY || null === YY) return JSON.stringify(YY);
                            return `{\n${Object.entries(YY).map((YY=>{let[DY,FY]=YY;return`${rY}    ${DY}: ${qA(FY,`${rY}    `)},`})).join("\n")}\n${rY}}`
                          }

                          function pA(YY, rY, DY) {
                            const FY = XA(YY),
                              AY = [`    line: ${JSON.stringify(rY)},`];
                            return DY && AY.push(`    speakerName: ${JSON.stringify(DY)},`), AY.push("    voice,"), `const voice = ${FY?JSON.stringify(FY):qA((0,eA.l)(YY))}\n\napi.setClientOption(playerId, "dialogue", {\n${AY.join("\n")}\n})`
                          }
                          const kA = 400,
                            GA = 90;
                          let xA = null;

                          function nA(YY, rY, DY) {
                            return xA ??= new AudioContext, xA.resume(), (0, cA.d)(xA, xA.destination, YY, rY, DY, (() => {}))
                          }

                          function PA() {
                            const [YY, rY] = (0, FY.useState)(eA.i.regular), [DY, AY] = (0, FY.useState)(bA[0]), [RY, OY] = (0, FY.useState)("Innkeeper"), [gY, aY] = (0, FY.useState)(0), vY = vF((YY => YY.volume)), uY = (0, FY.useRef)(null), sY = (0, FY.useRef)(0), iY = (0, FY.useRef)(0), QY = () => {
                              var YY;
                              null === (YY = uY.current) || void 0 === YY || YY.call(uY), uY.current = null
                            };
                            (0, FY.useEffect)((() => () => {
                              var YY;
                              null === (YY = uY.current) || void 0 === YY || YY.call(uY), window.clearTimeout(sY.current)
                            }), []);
                            const WY = (0, FY.useMemo)((() => ({
                                line: DY,
                                speakerName: RY || void 0,
                                voice: YY
                              })), [DY, RY, YY]),
                              EY = (0, FY.useRef)(WY);
                            EY.current = WY;
                            const VY = XA(YY),
                              SY = YY => {
                                window.clearTimeout(sY.current), QY();
                                const {
                                  plan: rY,
                                  synth: DY
                                } = (0, BA.g)(YY);
                                DY && (uY.current = nA(DY, rY.blips, vY)), aY((YY => YY + 1))
                              },
                              lY = pA(YY, DY, RY);
                            return (0, yY.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, yY.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, yY.jsxs)("div", {
                                  children: [(0, yY.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, yY.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, yY.jsx)(mY, {
                                  text: lY,
                                  label: "Copy code"
                                })]
                              }), (0, yY.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [wA.map((YY => (0, yY.jsx)("button", {
                                  type: "button",
                                  className: IY()("DocsVariantChip", {
                                    Active: VY === YY
                                  }),
                                  "aria-pressed": VY === YY,
                                  onClick: () => {
                                    (YY => {
                                      const DY = eA.i[YY];
                                      rY(DY), SY({
                                        ...WY,
                                        voice: DY
                                      })
                                    })(YY)
                                  },
                                  children: YY
                                }, YY))), !VY && (0, yY.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, yY.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, yY.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, yY.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, yY.jsx)(NA.b, {
                                      display: WY
                                    }, gY)
                                  }), (0, yY.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: YY => {
                                      YY.preventDefault(), SY(WY)
                                    },
                                    children: [(0, yY.jsx)("input", {
                                      value: DY,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: YY => {
                                        AY(YY.target.value)
                                      }
                                    }), (0, yY.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, yY.jsx)(oY, {
                                        name: "play"
                                      }), (0, yY.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, yY.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: bA.map((YY => (0, yY.jsx)("button", {
                                      type: "button",
                                      className: IY()("DocsVariantChip", {
                                        Active: DY === YY
                                      }),
                                      onClick: () => {
                                        var rY;
                                        AY(rY = YY), SY({
                                          ...WY,
                                          line: rY
                                        })
                                      },
                                      children: YY
                                    }, YY)))
                                  }), (0, yY.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, yY.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, yY.jsx)("input", {
                                      value: RY,
                                      placeholder: "No name",
                                      onChange: YY => {
                                        OY(YY.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, yY.jsx)(MA, {
                                  synth: YY,
                                  onChange: DY => {
                                    const FY = {
                                      ...YY,
                                      ...DY
                                    };
                                    rY(FY);
                                    const AY = {
                                        ...WY,
                                        voice: FY
                                      },
                                      IY = performance.now();
                                    if (IY - iY.current >= GA) {
                                      iY.current = IY, QY();
                                      const YY = (0, BA.g)(AY).plan.blips[0];
                                      YY && (uY.current = nA((0, eA.l)(FY), [{
                                        ...YY,
                                        atMs: 0
                                      }], vY))
                                    }
                                    window.clearTimeout(sY.current), sY.current = window.setTimeout((() => {
                                      SY(EY.current)
                                    }), kA)
                                  }
                                })]
                              }), (0, yY.jsx)(TY, {
                                code: lY,
                                lang: "ts"
                              })]
                            })
                          }
                          var UA = DY(4443);
                          const LA = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            tA = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            YI = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${tA}`, "g"), UA.q],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, UA.q]
                            ];

                          function rI(YY) {
                            return `${YY.pageId}#${YY.anchor}`
                          }
                          let DI, FI, AI;

                          function II(YY) {
                            const rY = (0, eY.i)(YY),
                              DY = new Set;
                            for (const [, , FY] of rY.matchAll(eY.c)) {
                              const YY = FY.startsWith("#") ? XY(FY) : null,
                                rY = YY ? rI({
                                  pageId: YY.page.id,
                                  anchor: YY.anchor
                                }) : null;
                              null !== rY && (DI || (DI = new Set(hY.flatMap((YY => KY(YY.layout) ? wY(YY).sections.map((rY => rI({
                                pageId: YY.id,
                                anchor: rY.heading.anchor
                              }))) : [])))), DI).has(rY) && DY.add(rY)
                            }
                            for (const [, , FY] of rY.matchAll(LA)) {
                              const YY = sr(FY);
                              YY && DY.add(rI(YY))
                            }
                            return DY
                          }

                          function RI(YY, rY) {
                            const DY = new Set,
                              FY = function(YY) {
                                return YY.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(YY);
                            for (const [, AY] of FY.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) DY.add(AY);
                            for (const [AY, IY] of YI)
                              for (const [, YY] of(0, UA.g)(FY, AY, IY)) rY.has(YY) && DY.add(YY);
                            return DY
                          }

                          function OI(YY, rY, DY, FY) {
                            const AY = YY.get(rY);
                            AY ? !FY && AY.some((YY => YY.pageId === DY.pageId)) || AY.push(DY) : YY.set(rY, [DY])
                          }
                          const gI = /^[A-Za-z_$][\w$]*$/;

                          function aI(YY) {
                            return gI.test(YY.name) ? YY.name : "options"
                          }

                          function vI(YY, rY) {
                            const DY = YY.params.map(aI).join(", ");
                            return rY ? `${YY.name} = (${DY}) => {\n\t\n}` : `api.${YY.name}(${DY})`
                          }

                          function uI(YY) {
                            let {
                              method: rY,
                              isCallback: DY
                            } = YY;
                            return (0, yY.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, yY.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [DY ? (0, yY.jsxs)(yY.Fragment, {
                                  children: [(0, yY.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: rY.name
                                  }), (0, yY.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, yY.jsxs)(yY.Fragment, {
                                  children: [(0, yY.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, yY.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: rY.name
                                  }), (0, yY.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), rY.params.map(((YY, DY) => (0, yY.jsxs)(FY.Fragment, {
                                  children: [DY > 0 && (0, yY.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, yY.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${rY.name}-${aI(YY)}`,
                                    children: YY.name
                                  })]
                                }, YY.name))), (0, yY.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: DY ? ") => " : ")"
                                }), DY && !rY.returns && (0, yY.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), rY.returns && rY.returns.type && (0, yY.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!DY && (0, yY.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, yY.jsx)(Nr, {
                                  type: rY.returns.type
                                })]
                              })]
                            })
                          }

                          function sI(YY) {
                            let {
                              title: rY,
                              references: DY
                            } = YY;
                            const AY = (0, FY.useContext)(ir);
                            return (0, yY.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, yY.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: rY
                              }), DY.map((YY => (0, yY.jsx)(RY.e, {
                                to: pY(AY, JY(YY.pageId), YY.anchor),
                                children: YY.label
                              }, `${YY.pageId}#${YY.anchor}`)))]
                            })
                          }

                          function iI(YY) {
                            var rY, DY;
                            let {
                              pageId: FY,
                              anchor: AY
                            } = YY;
                            const IY = rI({
                                pageId: FY,
                                anchor: AY
                              }),
                              RY = null !== (rY = function() {
                                if (!AI) {
                                  AI = new Map;
                                  const FY = new Set(hY.filter((YY => "callbacks" === YY.layout)).flatMap((YY => wY(YY).sections.map((YY => YY.heading.text)))));
                                  for (const AY of hY)
                                    if ("article" === AY.layout || "snippets" === AY.layout)
                                      for (const IY of (0, eY.x)(wY(AY)))
                                        for (const {
                                            code: RY
                                          }
                                          of(0, eY.l)(IY.blocks))
                                          for (const OY of RI(RY, FY)) {
                                            const FY = ur().get(OY);
                                            if (FY) {
                                              var YY, rY, DY;
                                              const RY = {
                                                pageId: AY.id,
                                                anchor: null !== (YY = null === (rY = IY.heading) || void 0 === rY ? void 0 : rY.anchor) && void 0 !== YY ? YY : "",
                                                label: null !== (DY = AY.navTitle) && void 0 !== DY ? DY : AY.title
                                              };
                                              OI(AI, rI(FY), RY, !1)
                                            }
                                          }
                                }
                                return AI
                              }().get(IY)) && void 0 !== rY ? rY : [],
                              OY = null !== (DY = function() {
                                if (!FI) {
                                  FI = new Map;
                                  const YY = JY("changelog");
                                  for (const rY of wY(YY).sections) {
                                    const DY = new Set(rY.blocks.flatMap((YY => [...II(YY)])));
                                    for (const FY of DY) {
                                      const DY = {
                                        pageId: YY.id,
                                        anchor: rY.heading.anchor,
                                        label: rY.heading.text
                                      };
                                      OI(FI, FY, DY, !0)
                                    }
                                  }
                                }
                                return FI
                              }().get(IY)) && void 0 !== DY ? DY : [];
                            return 0 === RY.length && 0 === OY.length ? null : (0, yY.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [RY.length > 0 && (0, yY.jsx)(sI, {
                                title: "Used in",
                                references: RY
                              }), OY.length > 0 && (0, yY.jsx)(sI, {
                                title: "Changelog",
                                references: OY
                              })]
                            })
                          }

                          function yI(YY) {
                            let {
                              method: rY,
                              pageId: DY,
                              anchor: FY,
                              isCallback: AY
                            } = YY;
                            const IY = AY ? void 0 : Or().get(rY.name),
                              RY = rY.description.length > 0 || null === IY || void 0 === IY || !IY.description ? rY.description : (0, eY.A)(IY.description);
                            return (0, yY.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, yY.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, yY.jsx)(aD, {
                                  level: 2,
                                  text: rY.name,
                                  anchor: FY,
                                  className: "DocsCardTitle"
                                }), (0, yY.jsx)(mY, {
                                  text: vI(rY, AY),
                                  label: AY ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, yY.jsx)(uI, {
                                method: rY,
                                isCallback: AY
                              }), IY && null !== IY.deprecation && (0, yY.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, yY.jsx)("strong", {
                                  children: "Deprecated"
                                }), IY.deprecation && (0, yY.jsxs)(yY.Fragment, {
                                  children: [": ", (0, yY.jsx)(lr, {
                                    text: (OY = IY.deprecation, (0, UA.C)(OY, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, UA.m)("`\\w"), (YY => {
                                      let [rY] = YY;
                                      return ur().has(rY) ? `\`${rY}\`` : rY
                                    })))
                                  })]
                                })]
                              }), RY.length > 0 && (0, yY.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, yY.jsx)(iD, {
                                  blocks: RY
                                })
                              }), rY.params.length > 0 && (0, yY.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, yY.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, yY.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: rY.params.map((YY => (0, yY.jsxs)("div", {
                                    id: `${rY.name}-${aI(YY)}`,
                                    className: "DocsParam",
                                    children: [(0, yY.jsxs)("dt", {
                                      children: [(0, yY.jsx)("code", {
                                        className: "DocsParamName",
                                        children: YY.name
                                      }), (0, yY.jsx)(Nr, {
                                        type: YY.type
                                      })]
                                    }), YY.description && (0, yY.jsx)("dd", {
                                      children: (0, yY.jsx)(lr, {
                                        text: YY.description
                                      })
                                    })]
                                  }, YY.name)))
                                })]
                              }), rY.returns && (rY.returns.type || rY.returns.description.length > 0) && (0, yY.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, yY.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, yY.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [rY.returns.type && (0, yY.jsx)(Nr, {
                                    type: rY.returns.type
                                  }), rY.returns.description.length > 0 && (0, yY.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, yY.jsx)(iD, {
                                      blocks: rY.returns.description
                                    })
                                  })]
                                })]
                              }), (0, yY.jsx)(iI, {
                                pageId: DY,
                                anchor: FY
                              })]
                            });
                            var OY
                          }

                          function QI(YY) {
                            var rY;
                            return null !== YY.defaultValue && "undefined" !== YY.defaultValue ? YY.defaultValue : null !== (rY = YY.example) && void 0 !== rY ? rY : "value"
                          }

                          function oI(YY) {
                            let {
                              setting: rY,
                              pageId: DY,
                              anchor: FY,
                              setterSnippet: AY
                            } = YY;
                            const IY = null === rY.defaultValue ? null : Wr(rY.defaultValue);
                            return (0, yY.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, yY.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, yY.jsx)(aD, {
                                  level: 2,
                                  text: rY.name,
                                  anchor: FY,
                                  className: "DocsCardTitle"
                                }), (0, yY.jsx)(mY, {
                                  text: AY(rY.name, QI(rY)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, yY.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, yY.jsxs)("div", {
                                  children: [(0, yY.jsx)("dt", {
                                    children: "Type"
                                  }), (0, yY.jsx)("dd", {
                                    children: (0, yY.jsx)(Nr, {
                                      type: rY.type
                                    })
                                  })]
                                }), null !== rY.defaultValue && (0, yY.jsxs)("div", {
                                  children: [(0, yY.jsx)("dt", {
                                    children: "Default"
                                  }), (0, yY.jsx)("dd", {
                                    children: (0, yY.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [IY && (0, yY.jsx)(Er, {
                                        colour: IY
                                      }), rY.defaultValue]
                                    })
                                  })]
                                }), null !== rY.example && (0, yY.jsxs)("div", {
                                  children: [(0, yY.jsx)("dt", {
                                    children: "Example"
                                  }), (0, yY.jsx)("dd", {
                                    children: (0, yY.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: rY.example
                                    })
                                  })]
                                })]
                              }), rY.description.length > 0 && (0, yY.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, yY.jsx)(iD, {
                                  blocks: rY.description
                                })
                              }), (0, yY.jsx)(iI, {
                                pageId: DY,
                                anchor: FY
                              })]
                            })
                          }

                          function WI(YY) {
                            let {
                              section: rY
                            } = YY;
                            return (0, yY.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, yY.jsx)(aD, {
                                level: 2,
                                text: rY.heading.text,
                                anchor: rY.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, yY.jsx)("div", {
                                className: "DocsProse",
                                children: (0, yY.jsx)(iD, {
                                  blocks: rY.blocks
                                })
                              })]
                            })
                          }

                          function EI(YY) {
                            let {
                              section: rY
                            } = YY;
                            return (0, yY.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, yY.jsx)(aD, {
                                level: rY.heading.level,
                                text: rY.heading.text,
                                anchor: rY.heading.anchor
                              }), (0, yY.jsx)(iD, {
                                blocks: rY.blocks
                              })]
                            })
                          }
                          const mI = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function VI(YY) {
                            let {
                              page: rY,
                              section: DY
                            } = YY;
                            if ("methods" === rY.layout || "callbacks" === rY.layout) return (0, yY.jsx)(yI, {
                              method: TD(DY),
                              pageId: rY.id,
                              anchor: DY.heading.anchor,
                              isCallback: "callbacks" === rY.layout
                            });
                            if ("settings" === rY.layout) {
                              const YY = function(YY) {
                                const rY = {
                                  name: YY.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const FY of YY.blocks) {
                                  var DY;
                                  if (lD(FY)) continue;
                                  const YY = "paragraph" === FY.kind ? FY.text.match(eD) : null;
                                  if (!YY) {
                                    rY.description.push(FY);
                                    continue
                                  }
                                  const AY = null !== (DY = SD(YY[2])) && void 0 !== DY ? DY : YY[2];
                                  "Type" === YY[1] ? rY.type = AY : "Default" === YY[1] ? rY.defaultValue = AY : "" !== AY && (rY.example = AY)
                                }
                                return rY.type ? rY : null
                              }(DY);
                              if (YY) return (0, yY.jsx)(oI, {
                                setting: YY,
                                pageId: rY.id,
                                anchor: DY.heading.anchor,
                                setterSnippet: rY.setterSnippet
                              })
                            }
                            return "snippets" === rY.layout ? (0, yY.jsx)(WI, {
                              section: DY
                            }) : "changelog" === rY.layout ? (0, yY.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, yY.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, yY.jsx)(aD, {
                                  level: 2,
                                  text: DY.heading.text,
                                  anchor: DY.heading.anchor
                                })
                              }), (0, yY.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, yY.jsx)(iD, {
                                  blocks: ND(DY.blocks)
                                })
                              })]
                            }) : rY.gallery ? (0, yY.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, yY.jsx)(aD, {
                                level: DY.heading.level,
                                text: DY.heading.text,
                                anchor: DY.heading.anchor
                              }), (0, yY.jsx)(BF, {
                                kind: rY.gallery,
                                content: wY(rY),
                                blocks: DY.blocks
                              })]
                            }) : (0, yY.jsx)(EI, {
                              section: DY
                            })
                          }

                          function SI(YY) {
                            let {
                              page: rY,
                              onTocChange: DY
                            } = YY;
                            const AY = wY(rY),
                              [IY, RY] = (0, FY.useState)(""),
                              OY = "article" !== rY.layout,
                              gY = oD(rY.gallery) ? rY.gallery : null,
                              aY = null !== gY,
                              vY = IY.trim().toLowerCase(),
                              uY = (0, FY.useRef)(null),
                              sY = (0, FY.useCallback)((YY => {
                                var rY;
                                null === (rY = uY.current) || void 0 === rY || rY.preview(YY)
                              }), []),
                              iY = (0, FY.useMemo)((() => {
                                if (!rY.hasParticlePlayground) return [];
                                const YY = HD(AY.intro).find((YY => "names" === YY.kind && !YY.names.some((YY => null !== MD(YY.name)))));
                                return "names" === (null === YY || void 0 === YY ? void 0 : YY.kind) ? YY.names.map((YY => YY.name)) : []
                              }), [rY, AY]),
                              QY = (0, FY.useMemo)((() => {
                                if (!rY.hasTextPlayground) return [];
                                const YY = AY.sections.flatMap((YY => YY.blocks.flatMap((YY => {
                                  var rY;
                                  return (null !== (rY = KD(YY)) && void 0 !== rY ? rY : []).flatMap((YY => Mr(YY.name) ? [YY.name] : []))
                                }))));
                                return [...new Set(YY)]
                              }), [rY, AY]),
                              oY = (0, FY.useMemo)((() => vY ? AY.sections.filter((YY => function(YY, rY) {
                                return !!YY.heading.text.toLowerCase().includes(rY) || YY.blocks.some((YY => (0, eY.i)(YY).toLowerCase().includes(rY)))
                              }(YY, vY))) : AY.sections), [AY, vY]),
                              WY = (0, FY.useMemo)((() => function(YY, rY) {
                                return "article" !== YY.layout ? rY.map((YY => ({
                                  anchor: YY.heading.anchor,
                                  text: YY.heading.text,
                                  level: 2
                                }))) : rY.flatMap((YY => {
                                  const rY = YY.blocks.flatMap((YY => "heading" === YY.kind && 3 === YY.level ? [{
                                    anchor: YY.anchor,
                                    text: YY.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: YY.heading.anchor,
                                    text: YY.heading.text,
                                    level: 2
                                  }, ...rY]
                                }))
                              }(rY, oY)), [rY, oY]);
                            return (0, FY.useEffect)((() => {
                              DY(WY)
                            }), [WY, DY]), (0, yY.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, yY.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, yY.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: AY.title || rY.title
                                }), (0, yY.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: rY.summary
                                }), (0, yY.jsx)(xF, {
                                  page: rY
                                }), OY && (0, yY.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, yY.jsxs)("span", {
                                    children: [(0, yY.jsx)("strong", {
                                      children: AY.sections.length
                                    }), " ", mI[rY.layout]]
                                  })
                                })]
                              }), "" === rY.slug && (0, yY.jsx)(KF, {}), gY && (0, yY.jsx)(CF, {
                                kind: gY
                              }, gY), rY.hasParticlePlayground && (0, yY.jsx)(OA, {
                                ref: uY,
                                textures: iY
                              }), !aY && AY.intro.length > 0 && (0, yY.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: rY.gallery ? (0, yY.jsx)(WF.Provider, {
                                  value: rY.hasParticlePlayground ? sY : null,
                                  children: (0, yY.jsx)(BF, {
                                    kind: rY.gallery,
                                    content: AY,
                                    blocks: AY.intro
                                  })
                                }) : (0, yY.jsx)(iD, {
                                  blocks: ND(AY.intro)
                                })
                              }), rY.hasTextPlayground && (0, yY.jsx)(TA, {
                                fontAwesomeIcons: QY
                              }), rY.hasVoicePlayground && (0, yY.jsx)(PA, {}), rY.childPageIds && (0, yY.jsx)(KF, {
                                cards: rY.childPageIds.map((YY => ({
                                  pageId: YY
                                }))),
                                label: rY.title
                              }), OY && (0, yY.jsx)(mD, {
                                className: "DocsFilterBar",
                                value: IY,
                                placeholder: `Filter ${AY.sections.length} ${mI[rY.layout]}\u2026`,
                                label: `Filter ${mI[rY.layout]}`,
                                onChange: RY,
                                count: vY ? {
                                  visible: oY.length,
                                  total: AY.sections.length
                                } : null
                              }), !aY && (0, yY.jsxs)("div", {
                                className: `DocsSections Layout-${rY.layout}`,
                                children: [oY.map((YY => (0, yY.jsx)(VI, {
                                  page: rY,
                                  section: YY
                                }, YY.heading.anchor))), 0 === oY.length && (0, yY.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", mI[rY.layout], " match \u201c", IY, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const lI = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function TI(YY) {
                            let {
                              entry: rY,
                              isActive: DY,
                              onNavigate: FY,
                              label: AY,
                              children: RY
                            } = YY;
                            return (0, yY.jsx)("a", {
                              href: `#${rY.anchor}`,
                              "aria-label": AY,
                              className: IY()(`Level${rY.level}`, {
                                Active: DY
                              }),
                              "aria-current": DY ? "location" : void 0,
                              onClick: YY => {
                                YY.preventDefault(), FY(rY.anchor)
                              },
                              children: RY
                            })
                          }

                          function eI(YY) {
                            let {
                              toc: rY,
                              activeAnchor: DY,
                              onNavigate: AY
                            } = YY;
                            const RY = Math.max(0, rY.findIndex((YY => YY.anchor === DY))),
                              OY = (0, FY.useRef)(null),
                              gY = (0, FY.useRef)(!1);
                            (0, FY.useEffect)((() => {
                              var YY, DY;
                              const FY = null === (YY = OY.current) || void 0 === YY ? void 0 : YY.closest(".DocsToc"),
                                AY = null === (DY = OY.current) || void 0 === DY ? void 0 : DY.querySelector(".DocsTimelineNotch.Active");
                              if (!FY || !AY) return;
                              let IY = 0;
                              if (RY === rY.length - 1) IY = FY.scrollHeight;
                              else if (RY > 0) {
                                const YY = FY.getBoundingClientRect(),
                                  rY = AY.getBoundingClientRect();
                                IY = FY.scrollTop + rY.top + rY.height / 2 - (YY.top + FY.clientHeight / 2)
                              }
                              FY.scrollTo({
                                top: IY,
                                behavior: gY.current ? "smooth" : "auto"
                              }), gY.current = !0
                            }), [RY, rY.length]);
                            const aY = [];
                            return rY.forEach(((YY, rY) => {
                              var DY, FY, AY;
                              const IY = function(YY) {
                                  const rY = YY.trim().match(lI);
                                  return rY ? {
                                    day: rY[1],
                                    month: `${rY[2]} ${rY[3]}`
                                  } : null
                                }(YY.text),
                                RY = null !== (DY = null === IY || void 0 === IY ? void 0 : IY.month) && void 0 !== DY ? DY : null;
                              null !== RY && (null === (FY = aY.at(-1)) || void 0 === FY ? void 0 : FY.month) === RY || aY.push({
                                month: RY,
                                entries: []
                              }), aY.at(-1).entries.push({
                                entry: YY,
                                day: null !== (AY = null === IY || void 0 === IY ? void 0 : IY.day) && void 0 !== AY ? AY : null,
                                index: rY
                              })
                            })), (0, yY.jsx)("ol", {
                              ref: OY,
                              className: "DocsTimeline",
                              children: aY.map((YY => {
                                let {
                                  month: rY,
                                  entries: DY
                                } = YY;
                                return (0, yY.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [rY && (0, yY.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: rY
                                  }), (0, yY.jsx)("ol", {
                                    children: DY.map((YY => {
                                      let {
                                        entry: rY,
                                        day: DY,
                                        index: FY
                                      } = YY;
                                      return (0, yY.jsx)("li", {
                                        className: IY()("DocsTimelineNotch", {
                                          Passed: FY < RY,
                                          Active: FY === RY
                                        }),
                                        children: (0, yY.jsx)(TI, {
                                          entry: rY,
                                          isActive: FY === RY,
                                          onNavigate: AY,
                                          label: rY.text,
                                          children: (0, yY.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== DY && void 0 !== DY ? DY : rY.text
                                          })
                                        })
                                      }, rY.anchor)
                                    }))
                                  })]
                                }, DY[0].entry.anchor)
                              }))
                            })
                          }

                          function NI(YY) {
                            let {
                              isChangelog: rY,
                              toc: DY,
                              activeAnchor: FY,
                              onNavigate: AY
                            } = YY;
                            return 0 === DY.length ? null : (0, yY.jsxs)(yY.Fragment, {
                              children: [(0, yY.jsx)("div", {
                                className: "DocsTocTitle",
                                children: rY ? "Updates" : "On this page"
                              }), rY ? (0, yY.jsx)(eI, {
                                toc: DY,
                                activeAnchor: FY,
                                onNavigate: AY
                              }) : (0, yY.jsx)("ul", {
                                children: DY.map((YY => (0, yY.jsx)("li", {
                                  children: (0, yY.jsx)(TI, {
                                    entry: YY,
                                    isActive: YY.anchor === FY,
                                    onNavigate: AY,
                                    children: YY.text.replace(/`/g, "")
                                  })
                                }, YY.anchor)))
                              })]
                            })
                          }
                          const BI = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            cI = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            KI = 20,
                            HI = 10,
                            zI = 40,
                            ZI = 120;
                          let CI;

                          function fI(YY) {
                            const rY = YY.gallery;
                            if (!rY) return [];
                            if (oD(rY)) return function(YY) {
                              return ED(YY).entries.map((YY => YY.name))
                            }(rY).map((DY => ({
                              page: YY,
                              anchor: ZD(rY, DY),
                              title: DY,
                              kind: cI[rY],
                              text: "",
                              listedUnder: YY.title
                            })));
                            const DY = wY(YY);
                            return (0, eY.x)(DY).flatMap((FY => {
                              const AY = FY.heading ? `${YY.title} \u203a ${FY.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : YY.title;
                              return fD(rY, DY, FY.blocks).flatMap((DY => "names" !== DY.kind ? [] : DY.names.map((FY => {
                                const IY = DY.isSongs ? "Song" : cI[rY];
                                return {
                                  page: YY,
                                  anchor: FY.anchor,
                                  title: FY.name,
                                  kind: IY,
                                  text: "",
                                  listedUnder: AY
                                }
                              }))))
                            }))
                          }

                          function jI(YY, rY, DY) {
                            const FY = YY.title.toLowerCase();
                            let AY = 0;
                            if (FY === rY) AY = 100;
                            else if (FY.startsWith(rY)) AY = 80;
                            else if (FY.includes(rY)) AY = 60;
                            else if (DY.every((YY => FY.includes(YY)))) AY = 45;
                            else {
                              if (!YY.text.toLowerCase().includes(rY)) return 0;
                              AY = 20
                            }
                            return AY - Math.min(FY.length / 10, 9) + ("Page" === YY.kind ? 8 : "Method" === YY.kind ? 3 : 0) - (YY.listedUnder ? KI : 0)
                          }

                          function hI(YY, rY) {
                            const DY = YY.toLowerCase().indexOf(rY),
                              FY = Math.max(0, DY - ZI / 3);
                            return `${FY>0?"\u2026":""}${YY.slice(FY,FY+ZI)}${FY+ZI<YY.length?"\u2026":""}`
                          }

                          function dI(YY) {
                            let {
                              text: rY,
                              query: DY
                            } = YY;
                            const FY = DY ? rY.toLowerCase().indexOf(DY) : -1;
                            return -1 === FY ? (0, yY.jsx)(yY.Fragment, {
                              children: rY
                            }) : (0, yY.jsxs)(yY.Fragment, {
                              children: [rY.slice(0, FY), (0, yY.jsx)("mark", {
                                children: rY.slice(FY, FY + DY.length)
                              }), rY.slice(FY + DY.length)]
                            })
                          }

                          function JI(YY) {
                            let {
                              basePath: rY,
                              onClose: DY
                            } = YY;
                            const AY = (0, OY.y)(),
                              [RY, gY] = (0, FY.useState)(""),
                              [aY, vY] = (0, FY.useState)(0),
                              uY = (0, FY.useRef)(null),
                              sY = (0, FY.useRef)(null),
                              iY = RY.trim().toLowerCase(),
                              QY = (0, FY.useMemo)((() => {
                                const YY = (CI || (CI = hY.flatMap((YY => {
                                  const rY = wY(YY);
                                  return [{
                                    page: YY,
                                    anchor: "",
                                    title: YY.title,
                                    kind: "Page",
                                    text: YY.summary
                                  }, ...rY.sections.flatMap((rY => {
                                    const DY = rY.blocks.filter((YY => "paragraph" === YY.kind)).map(eY.i).join(" ").replace(/[`*]/g, ""),
                                      FY = {
                                        page: YY,
                                        anchor: rY.heading.anchor,
                                        title: rY.heading.text.replace(/`/g, ""),
                                        kind: BI[YY.layout],
                                        text: DY
                                      },
                                      AY = rY.blocks.flatMap((rY => "article" === YY.layout && "heading" === rY.kind && 3 === rY.level ? [{
                                        page: YY,
                                        anchor: rY.anchor,
                                        title: rY.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: FY.title
                                      }] : []));
                                    return [FY, ...AY]
                                  })), ...fI(YY)]
                                }))), CI);
                                if (!iY) return YY.filter((YY => "Page" === YY.kind));
                                const rY = iY.split(/\s+/);
                                let DY = 0;
                                return YY.map((YY => ({
                                  entry: YY,
                                  score: jI(YY, iY, rY)
                                }))).filter((YY => YY.score > 0)).sort(((YY, rY) => rY.score - YY.score)).filter((YY => !YY.entry.listedUnder || (DY++, DY <= HI))).slice(0, zI).map((YY => YY.entry))
                              }), [iY]);
                            (0, FY.useEffect)((() => {
                              vY(0)
                            }), [iY]), (0, FY.useEffect)((() => {
                              const YY = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === YY || void 0 === YY || YY.focus()
                              }
                            }), []), (0, FY.useEffect)((() => {
                              var YY, rY;
                              null === (YY = uY.current) || void 0 === YY || null === (rY = YY.querySelector(".Active")) || void 0 === rY || rY.scrollIntoView({
                                block: "nearest"
                              })
                            }), [aY]);
                            const WY = YY => {
                              AY(pY(rY, YY.page, YY.anchor)), DY()
                            };
                            return (0, yY.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: YY => {
                                YY.target === YY.currentTarget && DY()
                              },
                              children: (0, yY.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: YY => {
                                  YY.target !== sY.current && YY.preventDefault()
                                },
                                onKeyDown: YY => {
                                  if ("Escape" === YY.key) DY();
                                  else if ("Tab" === YY.key) {
                                    var rY;
                                    YY.preventDefault(), null === (rY = sY.current) || void 0 === rY || rY.focus()
                                  }
                                },
                                children: [(0, yY.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, yY.jsx)(oY, {
                                    name: "magnifying-glass"
                                  }), (0, yY.jsx)("input", {
                                    ref: sY,
                                    autoFocus: !0,
                                    value: RY,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": QY.length > 0 ? `DocsSearchResult-${aY}` : void 0,
                                    onChange: YY => {
                                      gY(YY.target.value)
                                    },
                                    onKeyDown: YY => {
                                      if ("ArrowDown" === YY.key || "ArrowUp" === YY.key) {
                                        YY.preventDefault();
                                        const rY = "ArrowDown" === YY.key ? 1 : -1;
                                        vY((aY + rY + QY.length) % Math.max(QY.length, 1))
                                      } else "Enter" === YY.key && QY[aY] && WY(QY[aY])
                                    }
                                  }), (0, yY.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, yY.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: uY,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!iY && (0, yY.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), QY.map(((YY, rY) => {
                                    var DY;
                                    return (0, yY.jsxs)("li", {
                                      id: `DocsSearchResult-${rY}`,
                                      role: "option",
                                      "aria-selected": rY === aY,
                                      className: IY()("DocsSearchResult", {
                                        Active: rY === aY
                                      }),
                                      onMouseMove: () => {
                                        vY(rY)
                                      },
                                      onClick: () => {
                                        WY(YY)
                                      },
                                      children: [(0, yY.jsx)(oY, {
                                        name: YY.page.icon
                                      }), (0, yY.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, yY.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, yY.jsx)(dI, {
                                            text: YY.title,
                                            query: iY
                                          })
                                        }), YY.text && (0, yY.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, yY.jsx)(dI, {
                                            text: hI(YY.text, iY),
                                            query: iY
                                          })
                                        })]
                                      }), (0, yY.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === YY.kind ? "Page" : null !== (DY = YY.listedUnder) && void 0 !== DY ? DY : `${YY.kind} \xb7 ${YY.page.title}`
                                      })]
                                    }, `${YY.page.id}#${YY.anchor}`)
                                  })), iY && 0 === QY.length && (0, yY.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", RY, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function MI(YY, rY) {
                            if (rY < 10) return `${YY.toFixed(1)}s`;
                            const DY = Math.floor(YY);
                            return `${Math.floor(DY/60)}:${String(DY%60).padStart(2,"0")}`
                          }

                          function wI() {
                            const YY = vF((YY => YY.track)),
                              rY = vF((YY => YY.volume)),
                              [DY, AY] = (0, FY.useState)(0),
                              RY = (0, FY.useRef)(rF);
                            if ((0, FY.useEffect)((() => {
                                if (!YY) return;
                                if (AY(yF()), "playing" !== YY.status) return;
                                let rY = 0;
                                const DY = () => {
                                  AY(yF()), rY = requestAnimationFrame(DY)
                                };
                                return rY = requestAnimationFrame(DY), () => {
                                  cancelAnimationFrame(rY)
                                }
                              }), [YY]), !YY) return null;
                            const OY = "paused" !== YY.status,
                              gY = Math.min(DY, YY.duration);
                            return (0, yY.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, yY.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, yY.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": OY ? `Pause ${YY.name}` : `Play ${YY.name}`,
                                  onClick: iF,
                                  children: (0, yY.jsx)(oY, {
                                    name: OY ? "pause" : "play"
                                  })
                                }), (0, yY.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, yY.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, yY.jsx)("code", {
                                      children: YY.name
                                    }), (0, yY.jsx)("span", {
                                      children: YY.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, yY.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, yY.jsx)("span", {
                                      children: MI(gY, YY.duration)
                                    }), (0, yY.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: YY.duration || 1,
                                      step: .01,
                                      value: gY,
                                      disabled: 0 === YY.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${MI(gY,YY.duration)} of ${MI(YY.duration,YY.duration)}`,
                                      onChange: YY => {
                                        const rY = Number(YY.target.value);
                                        ! function(YY) {
                                          var rY;
                                          RF = YY, null === (rY = AF) || void 0 === rY || rY.seek(YY)
                                        }(rY), AY(rY)
                                      }
                                    }), (0, yY.jsx)("span", {
                                      children: YY.duration > 0 ? MI(YY.duration, YY.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, yY.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, yY.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === rY ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === rY ? QF(RY.current) : (RY.current = rY, QF(0))
                                    },
                                    children: (0, yY.jsx)(oY, {
                                      name: "volume",
                                      className: IY()({
                                        Muted: 0 === rY
                                      })
                                    })
                                  }), (0, yY.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: rY,
                                    "aria-label": "Volume",
                                    onChange: YY => {
                                      QF(Number(YY.target.value))
                                    }
                                  })]
                                }), (0, yY.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var rY;
                                    null === (rY = document.querySelector(`[data-docs-track="${CSS.escape(DF(YY.name,YY.isSong))}"]`)) || void 0 === rY || rY.focus(), oF()
                                  },
                                  children: (0, yY.jsx)(oY, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var bI = DY(40);
                          const XI = "docsTheme",
                            qI = window.matchMedia("(prefers-color-scheme: light)");

                          function pI(YY) {
                            let {
                              theme: rY,
                              onChange: DY
                            } = YY;
                            const FY = "dark" === rY ? "light" : "dark";
                            return (0, yY.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${FY} theme`,
                              title: `Switch to ${FY} theme`,
                              onClick: () => {
                                DY(FY)
                              },
                              children: (0, yY.jsx)(oY, {
                                name: "dark" === rY ? "moon" : "sun"
                              })
                            })
                          }
                          const kI = "https://github.com/Bloxdy/code-api",
                            GI = "https://discord.gg/playbloxd",
                            xI = 180,
                            nI = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function PI(YY) {
                            let {
                              basePath: rY,
                              activePageId: DY,
                              onNavigate: FY
                            } = YY;
                            return (0, yY.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: dY.map((YY => (0, yY.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, yY.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: YY.title
                                }), YY.pageIds.map((YY => {
                                  var AY;
                                  const OY = JY(YY);
                                  return (0, yY.jsxs)(RY.e, {
                                    to: pY(rY, OY),
                                    className: IY()("DocsNavLink", {
                                      Active: OY.id === DY
                                    }),
                                    "aria-current": OY.id === DY ? "page" : void 0,
                                    onClick: FY,
                                    children: [(0, yY.jsx)(oY, {
                                      name: OY.icon
                                    }), (0, yY.jsx)("span", {
                                      children: null !== (AY = OY.navTitle) && void 0 !== AY ? AY : OY.title
                                    })]
                                  }, OY.id)
                                }))]
                              }, YY.title)))
                            })
                          }

                          function UI(YY) {
                            let {
                              basePath: rY,
                              pageId: DY
                            } = YY;
                            const FY = dY.flatMap((YY => YY.pageIds)),
                              AY = FY.indexOf(DY),
                              IY = AY > 0 ? JY(FY[AY - 1]) : null,
                              OY = AY < FY.length - 1 ? JY(FY[AY + 1]) : null;
                            return (0, yY.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [IY ? (0, yY.jsxs)(RY.e, {
                                className: "DocsPagerLink Previous",
                                to: pY(rY, IY),
                                children: [(0, yY.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, yY.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: IY.title
                                })]
                              }) : (0, yY.jsx)("span", {}), OY && (0, yY.jsxs)(RY.e, {
                                className: "DocsPagerLink Next",
                                to: pY(rY, OY),
                                children: [(0, yY.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, yY.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: OY.title
                                })]
                              })]
                            })
                          }

                          function LI(YY) {
                            let {
                              basePath: rY,
                              embedded: DY = !1
                            } = YY;
                            const {
                              pageSlug: AY = ""
                            } = (0, OY.D)(), aY = (0, OY.u)(), vY = (0, OY.y)(), uY = (sY = AY, hY.find((YY => YY.slug === sY)));
                            var sY;
                            const [iY, QY] = function() {
                              const [YY, rY] = (0, FY.useState)((() => {
                                const YY = bI.m.getItem(XI);
                                return "dark" === YY || "light" === YY ? YY : null
                              })), [DY, AY] = (0, FY.useState)(qI.matches ? "light" : "dark");
                              return (0, FY.useEffect)((() => {
                                const YY = () => {
                                  AY(qI.matches ? "light" : "dark")
                                };
                                return qI.addEventListener("change", YY), () => {
                                  qI.removeEventListener("change", YY)
                                }
                              }), []), [null !== YY && void 0 !== YY ? YY : DY, YY => {
                                bI.m.setItem(XI, YY), rY(YY)
                              }]
                            }(), [WY, EY] = (0, FY.useState)(null), [mY, VY] = (0, FY.useState)(!1), [SY, lY] = (0, FY.useState)(!1), [TY, NY] = (0, FY.useState)([]), BY = function(YY, rY) {
                              const [DY, AY] = (0, FY.useState)("");
                              return (0, FY.useEffect)((() => {
                                if (!rY) return;
                                let DY = 0;
                                const FY = () => {
                                    var FY, IY;
                                    DY = 0;
                                    const RY = rY.getBoundingClientRect().top + xI;
                                    let OY = null !== (FY = null === (IY = YY[0]) || void 0 === IY ? void 0 : IY.anchor) && void 0 !== FY ? FY : "";
                                    for (const rY of YY) {
                                      const YY = document.getElementById(rY.anchor);
                                      YY && YY.getBoundingClientRect().top <= RY && (OY = rY.anchor)
                                    }
                                    rY.scrollTop + rY.clientHeight >= rY.scrollHeight - 2 && rY.scrollTop > 0 && YY.length > 0 && (OY = YY[YY.length - 1].anchor), AY(OY)
                                  },
                                  IY = () => {
                                    DY || (DY = requestAnimationFrame(FY))
                                  };
                                return FY(), rY.addEventListener("scroll", IY, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(DY), rY.removeEventListener("scroll", IY)
                                }
                              }), [YY, rY]), DY
                            }(TY, WY), cY = "" === AY && aY.hash ? function(YY) {
                              const rY = (0, eY.s)(YY);
                              if (bY(JY("welcome"), rY)) return null;
                              const DY = Object.hasOwn(qY, rY) ? qY[rY] : null;
                              if (DY) return {
                                page: JY(DY.pageId),
                                anchor: DY.anchor
                              };
                              const FY = JY("readme");
                              return bY(FY, rY) ? {
                                page: FY,
                                anchor: rY
                              } : XY(`#${rY}`)
                            }(aY.hash) : null;
                            (0, FY.useEffect)((() => (gY.b.set({
                              musicOnFromPage: !1
                            }), () => {
                              gY.b.set({
                                musicOnFromPage: !0
                              }), oF()
                            })), []), (0, FY.useEffect)((() => {
                              const YY = YY => {
                                const rY = YY.target;
                                if (rY.closest(".DocsTextDialog")) return;
                                const DY = rY.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(rY.tagName);
                                "k" === YY.key && (YY.metaKey || YY.ctrlKey) || "/" === YY.key && !DY ? (YY.preventDefault(), lY(!0)) : "Escape" === YY.key && VY(!1)
                              };
                              return window.addEventListener("keydown", YY), () => {
                                window.removeEventListener("keydown", YY)
                              }
                            }), []);
                            const KY = (0, FY.useRef)(null);
                            (0, FY.useLayoutEffect)((() => {
                              var YY, rY;
                              if (!WY) return;
                              const DY = KY.current === aY.pathname;
                              KY.current = aY.pathname;
                              const FY = (0, eY.s)(aY.hash),
                                AY = FY ? document.getElementById(FY) : null;
                              if (null === (YY = WY.querySelector(".DocsTargeted")) || void 0 === YY || YY.classList.remove("DocsTargeted"), null === AY || void 0 === AY || null === (rY = AY.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === rY || rY.classList.add("DocsTargeted"), AY) {
                                var IY;
                                const YY = AY.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (IY = AY.closest(".DocsChangelogEntry")) && void 0 !== IY ? IY : AY).scrollIntoView({
                                  block: YY ? "center" : "start",
                                  behavior: DY ? "smooth" : "auto"
                                })
                              } else DY || WY.scrollTo({
                                top: 0
                              })
                            }), [WY, aY.pathname, aY.hash, aY.key]);
                            const HY = (0, FY.useCallback)((() => {
                                VY(!1)
                              }), []),
                              zY = (0, FY.useCallback)((YY => {
                                vY({
                                  hash: YY
                                })
                              }), [vY]);
                            if (cY) return (0, yY.jsx)(OY.e, {
                              replace: !0,
                              to: pY(rY, cY.page, cY.anchor)
                            });
                            if (!uY) return (0, yY.jsx)(OY.e, {
                              replace: !0,
                              to: rY
                            });
                            const ZY = DY ? "div" : "main";
                            return (0, yY.jsx)(ir.Provider, {
                              value: rY,
                              children: (0, yY.jsx)(yr.Provider, {
                                value: WY,
                                children: (0, yY.jsxs)("div", {
                                  ref: EY,
                                  className: IY()("DocsSite", {
                                    Embedded: DY,
                                    NavOpen: mY
                                  }),
                                  "data-theme": iY,
                                  children: [(0, yY.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, yY.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": mY ? "Close menu" : "Open menu",
                                      "aria-expanded": mY,
                                      onClick: () => {
                                        VY(!mY)
                                      },
                                      children: (0, yY.jsx)(oY, {
                                        name: mY ? "cross" : "menu"
                                      })
                                    }), (0, yY.jsxs)(RY.e, {
                                      to: rY,
                                      className: "DocsBrand",
                                      children: [(0, yY.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, yY.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, yY.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, yY.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        lY(!0)
                                      },
                                      children: [(0, yY.jsx)(oY, {
                                        name: "magnifying-glass"
                                      }), (0, yY.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, yY.jsxs)("kbd", {
                                        children: [nI ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, yY.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, yY.jsxs)("a", {
                                        href: GI,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, yY.jsx)(oY, {
                                          name: "discord"
                                        }), (0, yY.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, yY.jsxs)("a", {
                                        href: kI,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, yY.jsx)(oY, {
                                          name: "external-link"
                                        }), (0, yY.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !DY && (0, yY.jsxs)(RY.e, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, yY.jsx)(oY, {
                                          name: "play"
                                        }), (0, yY.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, yY.jsx)(pI, {
                                        theme: iY,
                                        onChange: QY
                                      })]
                                    })]
                                  }), (0, yY.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, yY.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, yY.jsx)(PI, {
                                        basePath: rY,
                                        activePageId: uY.id,
                                        onNavigate: HY
                                      })
                                    }), (0, yY.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: HY
                                    }), (0, yY.jsxs)(ZY, {
                                      className: "DocsMain",
                                      children: [(0, yY.jsx)(SI, {
                                        page: uY,
                                        onTocChange: NY
                                      }, uY.id), (0, yY.jsx)(UI, {
                                        basePath: rY,
                                        pageId: uY.id
                                      })]
                                    }), (0, yY.jsx)("aside", {
                                      className: IY()("DocsToc", {
                                        Timeline: "changelog" === uY.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, yY.jsx)(NI, {
                                        isChangelog: "changelog" === uY.layout,
                                        toc: TY,
                                        activeAnchor: BY,
                                        onNavigate: zY
                                      })
                                    })]
                                  }), (0, yY.jsx)(wI, {}), SY && (0, yY.jsx)(JI, {
                                    basePath: rY,
                                    onClose: () => {
                                      lY(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4313: (YY, rY, DY) => {
                          DY.d(rY, {
                            A: () => sY,
                            c: () => FY,
                            f: () => RY,
                            i: () => oY,
                            l: () => QY,
                            o: () => OY,
                            s: () => AY,
                            v: () => IY,
                            x: () => yY,
                            z: () => iY
                          });
                          const FY = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function AY(YY) {
                            try {
                              return decodeURIComponent(YY.slice(1))
                            } catch {
                              return YY.slice(1)
                            }
                          }

                          function IY(YY) {
                            return YY.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const RY = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${FY.source}`, "g");

                          function OY(YY, rY) {
                            return 2 === YY.length ? rY.replace(/^ (.*) $/, "$1") : rY
                          }

                          function gY(YY) {
                            return "" === YY.trim()
                          }

                          function aY(YY) {
                            const rY = [];
                            for (const DY of YY.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) rY.length > 0 && rY[rY.length - 1].endsWith("\\") ? rY[rY.length - 1] += `|${DY}` : rY.push(DY);
                            return rY.map((YY => YY.trim().replaceAll("\\|", "|")))
                          }
                          const vY = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function uY(YY) {
                            const rY = [],
                              DY = [{
                                indent: -1,
                                items: rY
                              }];
                            let FY = null;
                            for (const AY of YY) {
                              const YY = AY.match(vY);
                              if (!YY) {
                                FY && (FY.text += ` ${AY.trim()}`);
                                continue
                              }
                              const rY = YY[1].replace(/\t/g, "  ").length;
                              for (; rY <= DY[DY.length - 1].indent;) DY.pop();
                              FY = {
                                text: YY[3].trim(),
                                children: []
                              }, DY[DY.length - 1].items.push(FY), DY.push({
                                indent: rY,
                                items: FY.children
                              })
                            }
                            return rY
                          }

                          function sY(YY) {
                            const rY = YY.replace(/\r\n/g, "\n").split("\n"),
                              DY = [];
                            let FY = 0;
                            for (; FY < rY.length;) {
                              const YY = rY[FY];
                              if (gY(YY)) {
                                FY++;
                                continue
                              }
                              const AY = YY.match(/^\s*```\s*(\w*)\s*$/);
                              if (AY) {
                                const YY = [];
                                for (FY++; FY < rY.length && !/^\s*```\s*$/.test(rY[FY]);) YY.push(rY[FY]), FY++;
                                FY++, DY.push({
                                  kind: "code",
                                  lang: AY[1] || "text",
                                  code: YY.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const RY = YY.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (RY) {
                                const YY = RY[2].trim();
                                DY.push({
                                  kind: "heading",
                                  level: RY[1].length,
                                  text: YY,
                                  anchor: IY(YY)
                                }), FY++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(YY)) {
                                DY.push({
                                  kind: "rule"
                                }), FY++;
                                continue
                              }
                              if (YY.trim().startsWith("|") && FY + 1 < rY.length && /^\s*\|[\s:|-]+\|\s*$/.test(rY[FY + 1])) {
                                const AY = aY(YY),
                                  IY = [];
                                for (FY += 2; FY < rY.length && rY[FY].trim().startsWith("|");) IY.push(aY(rY[FY])), FY++;
                                DY.push({
                                  kind: "table",
                                  header: AY,
                                  rows: IY
                                });
                                continue
                              }
                              if (YY.startsWith(">")) {
                                const YY = [];
                                for (; FY < rY.length && rY[FY].startsWith(">");) YY.push(rY[FY].replace(/^>\s?/, "")), FY++;
                                DY.push({
                                  kind: "quote",
                                  blocks: sY(YY.join("\n"))
                                });
                                continue
                              }
                              if (vY.test(YY)) {
                                const AY = [],
                                  IY = /^\s*\d+\./.test(YY);
                                for (; FY < rY.length && !gY(rY[FY]) && (vY.test(rY[FY]) || /^\s+\S/.test(rY[FY]));) AY.push(rY[FY]), FY++;
                                DY.push({
                                  kind: "list",
                                  ordered: IY,
                                  items: uY(AY)
                                });
                                continue
                              }
                              const OY = [];
                              for (; FY < rY.length && !gY(rY[FY]) && !/^\s*```/.test(rY[FY]) && !/^#{1,6}\s/.test(rY[FY]) && !rY[FY].startsWith(">") && !vY.test(rY[FY]) && (!rY[FY].trim().startsWith("|") || 0 !== OY.length);) OY.push(rY[FY].trim()), FY++;
                              0 === OY.length && (OY.push(rY[FY].trim()), FY++), DY.push({
                                kind: "paragraph",
                                text: OY.join(" ")
                              })
                            }
                            return DY
                          }

                          function iY(YY) {
                            let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const DY = sY(YY);
                            let FY = "";
                            const AY = [],
                              IY = [],
                              RY = new Map;
                            for (const aY of DY) {
                              if ("heading" === aY.kind) {
                                var OY;
                                const YY = (null !== (OY = RY.get(aY.anchor)) && void 0 !== OY ? OY : 0) + 1;
                                RY.set(aY.anchor, YY), YY > 1 && (aY.anchor = `${aY.anchor}-${YY}`)
                              }
                              if ("heading" === aY.kind && 1 === aY.level && !FY) {
                                FY = aY.text;
                                continue
                              }
                              if ("heading" === aY.kind && aY.level <= rY) {
                                IY.push({
                                  heading: aY,
                                  blocks: []
                                });
                                continue
                              }
                              const YY = IY.at(-1);
                              YY ? YY.blocks.push(aY) : AY.push(aY)
                            }
                            const gY = YY => {
                              for (;
                                "rule" === (null === (rY = YY.at(-1)) || void 0 === rY ? void 0 : rY.kind);) {
                                var rY;
                                YY.pop()
                              }
                            };
                            gY(AY);
                            for (const aY of IY) gY(aY.blocks);
                            return {
                              title: FY,
                              intro: AY,
                              sections: IY
                            }
                          }

                          function yY(YY) {
                            return [{
                              heading: null,
                              blocks: YY.intro
                            }, ...YY.sections.map((YY => ({
                              heading: YY.heading,
                              blocks: YY.blocks
                            })))]
                          }

                          function QY(YY) {
                            return YY.flatMap((YY => "code" === YY.kind ? [YY] : "quote" === YY.kind ? QY(YY.blocks) : []))
                          }

                          function oY(YY) {
                            switch (YY.kind) {
                              case "heading":
                              case "paragraph":
                                return YY.text;
                              case "code":
                                return YY.code;
                              case "table":
                                return [YY.header, ...YY.rows].map((YY => YY.join(" "))).join(" ");
                              case "list": {
                                const rY = YY => YY.map((YY => `${YY.text} ${rY(YY.children)}`)).join(" ");
                                return rY(YY.items)
                              }
                              case "quote":
                                return YY.blocks.map(oY).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4410: (YY, rY, DY) => {
                          DY.d(rY, {
                            c: () => OY
                          });
                          var FY = DY(61),
                            AY = DY(332),
                            IY = DY(1793),
                            RY = DY(1125);

                          function OY(YY) {
                            let {
                              text: rY
                            } = YY;
                            const DY = [];
                            let OY = "";
                            return (0, AY.cc)(rY).forEach(((YY, rY) => {
                              if ("string" === typeof YY || !(0, IY.f)(YY.icon)) return void(OY += "string" === typeof YY ? YY : YY.icon);
                              const AY = Math.max(0, OY.trimEnd().search(/\S{1,12}$/));
                              DY.push((0, RY.jsxs)(FY.Fragment, {
                                children: [OY.slice(0, AY), (0, RY.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [OY.slice(AY), (0, RY.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": YY.icon,
                                    children: (0, RY.jsx)(IY.c, {
                                      itemName: YY.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, rY)), OY = ""
                            })), DY.push(OY), (0, RY.jsx)(RY.Fragment, {
                              children: DY
                            })
                          }
                        }, 4349: (YY, rY, DY) => {
                          DY.d(rY, {
                            c: () => EY,
                            b: () => WY
                          });
                          var FY = DY(61),
                            AY = DY(1430),
                            IY = DY(1778),
                            RY = DY(4355),
                            OY = DY(1125);
                          const gY = (0, FY.memo)((function(YY) {
                            let {
                              initialParameters: rY
                            } = YY;
                            const DY = (0, FY.useRef)(null),
                              AY = (0, FY.useRef)(null),
                              gY = (0, FY.useRef)(0),
                              aY = (0, FY.useRef)(null),
                              vY = rY.description,
                              uY = rY.pD,
                              {
                                scale: sY,
                                rotation: iY
                              } = null !== rY && void 0 !== rY ? rY : {},
                              yY = (0, RY.d)();
                            return (0, FY.useEffect)((() => {
                              const YY = yY.onFrame((() => {
                                const YY = yY.getState();
                                if (!YY.isActive || !DY.current || !AY.current) return;
                                const rY = YY.state;
                                if (DY.current.value = rY.progress, rY.clickCount > gY.current) {
                                  gY.current = rY.clickCount;
                                  const YY = AY.current;
                                  YY.classList.add("pulse"), aY.current = setTimeout((() => {
                                    YY.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(aY.current), YY()
                              }
                            }), [yY]), (0, OY.jsx)(OY.Fragment, {
                              children: (0, OY.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== sY && {
                                    "--scale": sY
                                  },
                                  ...null !== iY && {
                                    "--rotation": `${iY}deg`
                                  }
                                },
                                children: [(0, OY.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: DY
                                }), (0, OY.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: AY,
                                  children: (0, OY.jsx)(IY.b, {
                                    text: [{
                                      icon: uY
                                    }]
                                  })
                                }), (0, OY.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, OY.jsx)(IY.b, {
                                    text: vY
                                  })
                                })]
                              })
                            })
                          }));
                          var aY = DY(1092),
                            vY = DY.n(aY);
                          const uY = 2 * Math.PI * 90,
                            sY = (0, FY.memo)((function(YY) {
                              let {
                                initialParameters: rY
                              } = YY;
                              const DY = (0, FY.useRef)(null),
                                AY = (0, FY.useRef)(null),
                                gY = (0, FY.useRef)(null),
                                aY = rY.label,
                                sY = rY.icon,
                                iY = rY.xD,
                                {
                                  scale: yY,
                                  rotation: QY,
                                  nD: oY
                                } = null !== rY && void 0 !== rY ? rY : {},
                                WY = (0, RY.d)();
                              return (0, FY.useEffect)((() => {
                                const YY = WY.onFrame((() => {
                                  var YY, rY;
                                  const FY = WY.getState();
                                  if (!FY.isActive || !AY.current) return;
                                  const IY = FY.state,
                                    RY = null !== (YY = IY.timeRemaining) && void 0 !== YY ? YY : 0,
                                    OY = null !== (rY = IY.GD) && void 0 !== rY ? rY : 1,
                                    aY = uY * (1 - RY / OY);
                                  AY.current.style.strokeDashoffset = `${aY}`, DY.current && (DY.current.style.opacity = RY > 0 ? "1" : "0"), gY.current && iY && (gY.current.textContent = `${(RY/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  YY()
                                }
                              }), [WY, iY]), (0, OY.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: DY,
                                style: {
                                  ...null !== yY && {
                                    "--scale": yY
                                  },
                                  ...null !== QY && {
                                    "--rotation": `${QY}deg`
                                  }
                                },
                                children: [(0, OY.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, OY.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, OY.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, OY.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: uY,
                                      ref: AY
                                    })]
                                  }), (0, OY.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, OY.jsx)(IY.b, {
                                      text: [{
                                        icon: sY
                                      }],
                                      className: vY()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: oY
                                      })
                                    })
                                  })]
                                }), (0, OY.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, OY.jsx)(IY.b, {
                                    text: aY,
                                    className: "QTETimedClickLabelText"
                                  }), iY && (0, OY.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: gY
                                  })]
                                })]
                              })
                            })),
                            iY = (0, FY.memo)((function(YY) {
                              let {
                                initialParameters: rY
                              } = YY;
                              const DY = (0, FY.useRef)(null),
                                AY = (0, FY.useRef)(null),
                                gY = (0, FY.useRef)(null),
                                aY = (0, FY.useRef)(!1),
                                vY = rY.description,
                                uY = null === rY || void 0 === rY ? void 0 : rY.icon,
                                sY = (0, RY.d)();
                              return (0, FY.useEffect)((() => {
                                const YY = sY.onFrame((() => {
                                  const YY = sY.getState();
                                  if (!YY.isActive) return;
                                  const rY = YY.state;
                                  if (DY.current) {
                                    const YY = 100 * (rY.catchZonePosition - rY.UD / 2);
                                    DY.current.style.left = `${YY}%`, DY.current.style.width = 100 * rY.UD + "%", rY.isCatching !== aY.current && (aY.current = rY.isCatching, rY.isCatching ? DY.current.classList.add("catching") : DY.current.classList.remove("catching"))
                                  }
                                  AY.current && (AY.current.style.left = 100 * rY.moverPosition + "%"), gY.current && (gY.current.value = rY.progress)
                                }));
                                return () => {
                                  YY()
                                }
                              }), [sY]), (0, OY.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, OY.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, OY.jsx)(IY.b, {
                                    text: vY
                                  })
                                }), (0, OY.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: gY
                                }), (0, OY.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, OY.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: DY
                                  }), (0, OY.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: AY,
                                    children: (0, OY.jsx)("span", {
                                      children: uY && (0, OY.jsx)(IY.b, {
                                        text: [{
                                          icon: uY,
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
                          var yY = DY(625);
                          const QY = (0, FY.memo)((function(YY) {
                              let {
                                initialParameters: rY
                              } = YY;
                              const DY = (0, FY.useRef)(null),
                                AY = rY.label,
                                gY = rY.AF,
                                {
                                  icon: aY,
                                  scale: vY,
                                  rotation: uY
                                } = null !== rY && void 0 !== rY ? rY : {},
                                sY = 100 * (.5 - gY / 2),
                                iY = 100 * gY,
                                QY = (0, RY.d)();
                              return (0, FY.useEffect)((() => {
                                const YY = QY.onFrame((() => {
                                  const YY = QY.getState();
                                  if (!YY.isActive || !DY.current) return;
                                  const rY = YY.state;
                                  DY.current.style.left = 100 * rY.markerPosition + "%"
                                }));
                                return () => {
                                  YY()
                                }
                              }), [QY]), (0, OY.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, yY.H)(vY) && {
                                    "--scale": vY
                                  },
                                  ...!(0, yY.H)(uY) && {
                                    "--rotation": `${uY}deg`
                                  }
                                },
                                children: [aY && (0, OY.jsx)(IY.b, {
                                  text: [{
                                    icon: aY
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, OY.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, OY.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${sY}%`,
                                      width: `${iY}%`
                                    }
                                  }), (0, OY.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: DY
                                  })]
                                }), (0, OY.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, OY.jsx)(IY.b, {
                                    text: AY
                                  })
                                })]
                              })
                            })),
                            oY = (0, FY.memo)((function(YY) {
                              let {
                                initialParameters: rY
                              } = YY;
                              const DY = (0, FY.useRef)(null),
                                [AY, gY] = (0, FY.useState)((() => new Array(rY.RF).fill("pending"))),
                                [aY, vY] = (0, FY.useState)((() => {
                                  const YY = rY.vF;
                                  return (0, yY.H)(YY) || YY <= 0 ? [] : new Array(YY).fill("pending")
                                })),
                                uY = rY.label,
                                {
                                  icon: sY
                                } = rY,
                                iY = (0, FY.useRef)(0),
                                QY = (0, FY.useRef)(0),
                                oY = (0, FY.useRef)([]),
                                WY = (0, RY.d)();
                              return (0, FY.useEffect)((() => {
                                const YY = WY.onFrame((() => {
                                  const YY = WY.getState();
                                  if (!YY.isActive || !DY.current) return;
                                  const rY = YY.state,
                                    FY = 30 + 60 * rY.outerCircleProgress;
                                  if (DY.current.setAttribute("r", String(FY)), !0 === rY.lastClickResult && rY.successes > iY.current) {
                                    DY.current.classList.remove("QTERhythmClickOuterCircle--miss"), DY.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const YY = setTimeout((() => {
                                      var YY;
                                      null === (YY = DY.current) || void 0 === YY || YY.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    oY.current.push(YY)
                                  } else if (!1 === rY.lastClickResult && rY.misses > QY.current) {
                                    DY.current.classList.remove("QTERhythmClickOuterCircle--hit"), DY.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const YY = setTimeout((() => {
                                      var YY;
                                      null === (YY = DY.current) || void 0 === YY || YY.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    oY.current.push(YY)
                                  }
                                  rY.successes === iY.current && rY.misses === QY.current || (iY.current = rY.successes, QY.current = rY.misses, gY((YY => {
                                    const DY = [...YY];
                                    for (let FY = 0; FY < rY.RF; FY++) DY[FY] = FY < rY.successes ? "success" : "pending";
                                    return DY
                                  })), vY((YY => {
                                    if (0 === YY.length) return YY;
                                    const DY = [...YY];
                                    for (let FY = 0; FY < DY.length; FY++) DY[FY] = FY < rY.misses ? "miss" : "pending";
                                    return DY
                                  })))
                                }));
                                return () => {
                                  YY();
                                  for (const YY of oY.current) clearTimeout(YY);
                                  oY.current = []
                                }
                              }), [WY]), (0, OY.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, OY.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: AY.map(((YY, rY) => (0, OY.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === YY ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, rY)))
                                }), (0, OY.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, OY.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, OY.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, OY.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: DY
                                    })]
                                  }), sY && (0, OY.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, OY.jsx)(IY.b, {
                                      text: [{
                                        icon: sY
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), aY.length > 0 && (0, OY.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: aY.map(((YY, rY) => (0, OY.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === YY ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, rY)))
                                }), (0, OY.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, OY.jsx)(IY.b, {
                                    text: uY
                                  })
                                })]
                              })
                            }));

                          function WY(YY) {
                            let {
                              qte: rY
                            } = YY;
                            switch (rY.type) {
                              case "progressBar":
                                return (0, OY.jsx)(gY, {
                                  initialParameters: rY.parameters
                                });
                              case "timedClick":
                                return (0, OY.jsx)(sY, {
                                  initialParameters: rY.parameters
                                });
                              case "gravityBar":
                                return (0, OY.jsx)(iY, {
                                  initialParameters: rY.parameters
                                });
                              case "precisionBar":
                                return (0, OY.jsx)(QY, {
                                  initialParameters: rY.parameters
                                });
                              case "rhythmClick":
                                return (0, OY.jsx)(oY, {
                                  initialParameters: rY.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const EY = (0, FY.memo)((function() {
                            const [YY, rY] = (0, FY.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, AY.g)("qteStateUpdated", (YY => {
                              rY(YY)
                            })), YY.isActive && YY.type ? (0, OY.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, OY.jsx)(WY, {
                                qte: YY
                              })
                            }) : null
                          }))
                        }, 4355: (YY, rY, DY) => {
                          DY.d(rY, {
                            b: () => OY,
                            d: () => gY
                          });
                          var FY = DY(61),
                            AY = DY(1298),
                            IY = DY(4361);
                          const RY = {
                              getState: () => IY.b.getCurrentState(),
                              onFrame: AY.p
                            },
                            OY = (0, FY.createContext)(RY);

                          function gY() {
                            return (0, FY.useContext)(OY)
                          }
                        }, 4419: (YY, rY, DY) => {
                          DY.d(rY, {
                            e: () => fY,
                            g: () => CY
                          });
                          var FY = DY(4422),
                            AY = DY(332);
                          const IY = 120,
                            RY = 260,
                            OY = 1.15,
                            gY = 1.2,
                            aY = 2,
                            vY = 1.08,
                            uY = .8,
                            sY = .95,
                            iY = 8,
                            yY = "[\"')\\]\u300d\u300f\uff09]*",
                            QY = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${yY}$`),
                            oY = new RegExp(`[?\uff1f]${yY}$`),
                            WY = new RegExp(`[!\uff01]${yY}$`),
                            EY = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            mY = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            VY = new RegExp(`[${mY}]`),
                            SY = new RegExp(`[${mY}]|[^${mY}]+`, "g"),
                            lY = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function TY(YY) {
                            let rY = 2166136261;
                            for (let DY = 0; DY < YY.length; DY++) rY ^= YY.charCodeAt(DY), rY = Math.imul(rY, 16777619);
                            return (rY >>> 0) / 4294967295 * 2 - 1
                          }

                          function eY(YY) {
                            var rY;
                            if (VY.test(YY)) return 1;
                            const DY = YY.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              FY = DY.replace(/[^0-9]/g, "");
                            if (FY.length > 0 && !/\p{L}/u.test(DY)) return Math.min(FY.length, 4);
                            const AY = null !== (rY = DY.match(lY)) && void 0 !== rY ? rY : [];
                            if (0 === AY.length) {
                              var IY, RY;
                              const YY = null !== (IY = null === (RY = DY.match(/\p{L}/gu)) || void 0 === RY ? void 0 : RY.length) && void 0 !== IY ? IY : 0;
                              return 0 === YY ? 0 : Math.min(Math.max(1, Math.round(YY / 2.5)), iY)
                            }
                            const OY = DY.replace(/[^\p{L}]/gu, ""),
                              gY = AY.length > 1 && "e" === AY.at(-1) && OY.endsWith("e") && !OY.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(YY.replace(/[^\p{L}]/gu, ""));
                            return Math.min(AY.length - (gY ? 1 : 0), iY)
                          }

                          function NY(YY) {
                            return YY.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function BY(YY) {
                            const rY = YY.replace(/[^\p{L}]/gu, "");
                            return rY.length >= 2 && rY === rY.toUpperCase() && rY !== rY.toLowerCase()
                          }

                          function cY(YY, rY) {
                            var DY;
                            const iY = rY && (0, FY.l)(rY),
                              yY = null !== (DY = null === iY || void 0 === iY ? void 0 : iY.syllableMs) && void 0 !== DY ? DY : FY.b,
                              mY = function(YY) {
                                const rY = [];
                                for (const FY of (0, AY.cc)(YY))
                                  if ("string" === typeof FY)
                                    for (const YY of FY.split(/(\s+)/)) {
                                      if ("" === YY) continue;
                                      if (/^\s+$/.test(YY)) {
                                        rY.push({
                                          kind: "space",
                                          text: YY
                                        });
                                        continue
                                      }
                                      if (!VY.test(YY)) {
                                        rY.push({
                                          kind: "word",
                                          text: YY,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let FY = !0;
                                      for (const AY of null !== (DY = YY.match(SY)) && void 0 !== DY ? DY : []) {
                                        var DY;
                                        const YY = rY.at(-1);
                                        FY || "word" !== (null === YY || void 0 === YY ? void 0 : YY.kind) || VY.test(AY) || /[\p{L}\p{N}]/u.test(AY) ? (FY || rY.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), rY.push({
                                          kind: "word",
                                          text: AY,
                                          delayMs: 0
                                        }), FY = !1) : YY.text += AY
                                      }
                                    } else rY.push({
                                      kind: "icon",
                                      text: FY.icon,
                                      delayMs: 0
                                    });
                                return rY
                              }(YY),
                              lY = [];
                            let cY = [];
                            for (const FY of mY) "space" !== FY.kind && (cY.push(FY), QY.test(FY.text) && (lY.push(cY), cY = []));
                            lY.push(cY);
                            const KY = [];
                            let HY = 0;
                            for (const FY of lY) {
                              var zY, ZY;
                              const YY = null !== (zY = null === (ZY = FY.at(-1)) || void 0 === ZY ? void 0 : ZY.text) && void 0 !== zY ? zY : "",
                                rY = oY.test(YY),
                                DY = WY.test(YY),
                                AY = FY.map((YY => "word" === YY.kind ? eY(YY.text) : 1)),
                                mY = AY.findLastIndex((YY => YY > 0));
                              for (const [oY, WY] of FY.entries()) {
                                const YY = "word" === WY.kind,
                                  FY = AY[oY];
                                WY.delayMs = HY;
                                for (let AY = 0; iY && AY < FY; AY++) {
                                  const {
                                    intonation: IY
                                  } = iY;
                                  let RY = mY > 0 ? -IY.declineSemitones * (oY / mY) : 0;
                                  RY += TY(`${NY(WY.text)}|${AY}`) * IY.variationSemitones;
                                  const QY = Math.min(1, IY.variationSemitones);
                                  let EY = iY.glideSemitones,
                                    VY = 1;
                                  DY && (RY += IY.exclaimLiftSemitones, VY *= OY), rY && oY === mY && (RY += IY.questionRiseSemitones * (FY > 1 ? .5 + .5 * AY / (FY - 1) : 1), AY === FY - 1 && (EY = Math.abs(EY) + IY.questionRiseSemitones / 2)), YY && BY(WY.text) && (RY += aY * QY, VY *= gY), FY > 1 && 0 === AY && (RY += uY * QY, VY *= vY), KY.push({
                                    atMs: HY + AY * yY,
                                    semitones: RY,
                                    glideSemitones: EY,
                                    durationMs: AY < FY - 1 ? Math.min(iY.durationMs, yY * sY) : iY.durationMs,
                                    level: VY
                                  })
                                }
                                HY += FY * yY + (QY.test(WY.text) ? RY : EY.test(WY.text) ? IY : 0)
                              }
                            }
                            return {
                              pieces: mY.map((YY => "space" === YY.kind ? YY : "icon" === YY.kind ? {
                                kind: "icon",
                                icon: YY.text,
                                delayMs: YY.delayMs
                              } : {
                                kind: "word",
                                text: YY.text,
                                delayMs: YY.delayMs
                              })),
                              blips: KY
                            }
                          }
                          var KY = DY(1211),
                            HY = DY(1256),
                            zY = DY(1816);

                          function ZY(YY) {
                            if ("string" === typeof YY) return YY;
                            const rY = HY.h.get().getCurrentLanguageCode();
                            return (0, KY.u)(rY, YY.translationKey, (0, KY.r)(YY.params, zY.e.shown))
                          }

                          function CY(YY) {
                            const rY = void 0 === YY.voice ? null : (0, FY.m)(YY.voice),
                              DY = rY && (0, FY.l)(rY);
                            return {
                              plan: cY(ZY(YY.line), DY),
                              synth: DY
                            }
                          }

                          function fY(YY) {
                            const rY = [];
                            let DY = [];
                            for (const [AY, IY] of YY.entries()) {
                              var FY;
                              "space" === IY.kind && (" " !== IY.text || "icon" !== (null === (FY = YY[AY + 1]) || void 0 === FY ? void 0 : FY.kind)) ? (DY.length > 0 && rY.push(DY), rY.push([IY]), DY = []) : DY.push(IY)
                            }
                            return DY.length > 0 && rY.push(DY), rY
                          }
                        }, 4425: (YY, rY, DY) => {
                          DY.d(rY, {
                            d: () => vY,
                            e: () => uY
                          });
                          var FY = DY(4434),
                            AY = DY(19);
                          const IY = .25,
                            RY = .85,
                            OY = .02,
                            gY = .01;

                          function aY(YY, rY, DY, FY, AY, IY, OY) {
                            const {
                              waveform: gY,
                              pitchHz: aY,
                              attackMs: vY,
                              releaseMs: uY,
                              lowpassHz: sY
                            } = DY, iY = AY + FY.durationMs / 1e3, yY = aY * 2 ** (FY.semitones / 12), QY = YY.createOscillator();
                            QY.type = gY, QY.frequency.setValueAtTime(yY, AY), QY.frequency.exponentialRampToValueAtTime(yY * 2 ** (FY.glideSemitones / 12), iY);
                            const oY = AY + Math.min(vY, FY.durationMs) / 1e3,
                              WY = YY.createGain();
                            WY.gain.setValueAtTime(0, AY), WY.gain.linearRampToValueAtTime(IY, oY), WY.gain.linearRampToValueAtTime(IY * RY, Math.max(oY, iY - uY / 1e3)), WY.gain.linearRampToValueAtTime(0, iY);
                            const EY = [QY];
                            if (null !== sY) {
                              const rY = YY.createBiquadFilter();
                              rY.type = "lowpass", rY.frequency.value = sY, EY.push(rY)
                            }
                            EY.push(WY, rY);
                            for (let RY = 1; RY < EY.length; RY++) EY[RY - 1].connect(EY[RY]);
                            return QY.onended = () => {
                              for (const YY of EY.slice(0, -1)) YY.disconnect();
                              OY()
                            }, QY.start(AY), QY.stop(iY), QY
                          }

                          function vY(YY, rY, DY, FY, AY, RY) {
                            if (0 === FY.length) return RY(), () => {};
                            const vY = IY * DY.volume * AY,
                              uY = YY.createGain();
                            uY.connect(rY);
                            const sY = YY.currentTime + OY,
                              iY = new Set;
                            for (const IY of FY) {
                              const rY = aY(YY, uY, DY, IY, sY + IY.atMs / 1e3, vY * IY.level, (() => {
                                iY.delete(rY), 0 === iY.size && (uY.disconnect(), RY())
                              }));
                              iY.add(rY)
                            }
                            return () => {
                              const rY = YY.currentTime;
                              uY.gain.setTargetAtTime(0, rY, gY);
                              for (const YY of iY) try {
                                YY.stop(rY + 5 * gY)
                              } catch {}
                            }
                          }

                          function uY(YY, rY) {
                            var DY;
                            const IY = FY.Howler.ctx,
                              RY = FY.Howler.masterGain;
                            if (!IY || !RY || !AY.b.get("soundOnFromAd")) return () => {};
                            const OY = FY.Howler;
                            return null === (DY = OY._autoResume) || void 0 === DY || DY.call(OY), vY(IY, RY, YY, rY, AY.b.get("soundVolume"), (() => {
                              var YY;
                              null === (YY = OY._autoSuspend) || void 0 === YY || YY.call(OY)
                            }))
                          }
                        }, 4434: (YY, rY, DY) => {
                          DY.r(rY), DY.d(rY, {
                            Howl: () => AY.Howl,
                            Howler: () => AY.Howler,
                            iosAudio: () => gY,
                            musicOutput: () => oY,
                            readyAudioContext: () => WY
                          });
                          var FY, AY = DY(4438),
                            IY = DY(99);
                          const RY = AY.Howler;
                          let OY;

                          function gY() {
                            return OY ??= "ios" === (0, IY.getOperatingSystem)(), OY
                          }

                          function aY() {
                            var YY, rY;
                            if (RY.ctx || !RY.usingWebAudio || "undefined" === typeof AudioContext || !gY()) return;
                            const DY = navigator.audioSession;
                            let FY;
                            "auto" === (null === DY || void 0 === DY ? void 0 : DY.type) && (DY.type = "ambient");
                            try {
                              FY = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const AY = FY.createGain();
                            AY.gain.setValueAtTime(RY._muted ? 0 : null !== (YY = RY._volume) && void 0 !== YY ? YY : 1, FY.currentTime), AY.connect(FY.destination), RY.ctx = FY, RY.masterGain = AY, null === (rY = RY._setup) || void 0 === rY || rY.call(RY)
                          }
                          RY._mobileUnloaded = !0;
                          const vY = RY.volume.bind(AY.Howler);
                          RY.volume = function() {
                            return aY(), vY(...arguments)
                          };
                          const uY = RY.mute.bind(AY.Howler);
                          RY.mute = YY => (aY(), uY(YY));
                          const sY = AY.Howl.prototype,
                            iY = sY.init;
                          sY.init = function(YY) {
                            return aY(), iY.call(this, YY)
                          };
                          let yY = 0;
                          const QY = null === (FY = RY._autoSuspend) || void 0 === FY ? void 0 : FY.bind(AY.Howler);

                          function oY() {
                            WY();
                            const {
                              ctx: YY,
                              masterGain: rY
                            } = RY;
                            return YY && rY ? {
                              ctx: YY,
                              destination: rY,
                              holdAwake: YY => {
                                var rY, DY;
                                (yY += YY ? 1 : -1, YY) ? null === (rY = RY._autoResume) || void 0 === rY || rY.call(RY): null === (DY = RY._autoSuspend) || void 0 === DY || DY.call(RY)
                              },
                              wake: () => {
                                var rY;
                                "running" !== YY.state && (null === (rY = RY._autoResume) || void 0 === rY || rY.call(RY), YY.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function WY() {
                            var YY;
                            (RY.volume(), RY.ctx && RY.autoUnlock) && (null === (YY = RY._unlockAudio) || void 0 === YY || YY.call(RY))
                          }
                          QY && (RY._autoSuspend = () => yY > 0 ? AY.Howler : QY())
                        }, 4443: (YY, rY, DY) => {
                          function FY(YY) {
                            return {
                              notAfter: YY
                            }
                          }
                          DY.d(rY, {
                            C: () => vY,
                            F: () => uY,
                            d: () => gY,
                            g: () => aY,
                            j: () => OY,
                            m: () => FY,
                            q: () => AY,
                            u: () => IY,
                            y: () => RY
                          });
                          const AY = FY("\\w$."),
                            IY = FY("\\w.,");

                          function RY(YY) {
                            return rY => gY(rY, YY)
                          }

                          function OY(YY) {
                            return rY => !YY.test(rY.input.slice(0, rY.index))
                          }

                          function gY(YY, rY) {
                            return YY.index > 0 && new RegExp(`[${rY}]`).test(YY.input[YY.index - 1])
                          }

                          function aY(YY, rY, DY) {
                            return function(YY) {
                              return void 0 !== YY && "function" !== typeof YY
                            }(DY) ? function(YY, rY, DY) {
                              const FY = rY.flags.replace(/[gy]/g, ""),
                                AY = new RegExp(`[^${DY}](?:${rY.source})`, `${FY}g`),
                                IY = [],
                                RY = DY => {
                                  const FY = DY.index + DY[0].length;
                                  return ("" === DY[0] ? sY(YY, rY, FY) : FY) - 1
                                },
                                OY = new RegExp(`(?:${rY.source})`, `${FY}y`).exec(YY);
                              if (OY) {
                                if (IY.push(OY), !rY.global) return IY;
                                AY.lastIndex = RY(OY)
                              }
                              for (let gY = AY.exec(YY); gY; gY = AY.exec(YY)) {
                                const DY = sY(YY, rY, gY.index) - gY.index;
                                if (gY[0] = gY[0].slice(DY), gY.index += DY, IY.push(gY), !rY.global) break;
                                AY.lastIndex = RY(gY)
                              }
                              return IY
                            }(YY, rY, DY.notAfter) : function(YY, rY, DY) {
                              const FY = new RegExp(rY.source, `${rY.flags.replace(/[gy]/g,"")}g`),
                                AY = [];
                              for (let IY = FY.exec(YY); IY; IY = FY.exec(YY))
                                if (!DY || DY(IY)) {
                                  if (AY.push(IY), !rY.global) break;
                                  "" === IY[0] && (FY.lastIndex = sY(YY, rY, FY.lastIndex))
                                } else FY.lastIndex = sY(YY, rY, IY.index);
                              return AY
                            }(YY, rY, DY)
                          }

                          function vY(YY, rY, DY, FY) {
                            let AY = "",
                              IY = 0;
                            for (const RY of aY(YY, rY, DY)) AY += YY.slice(IY, RY.index) + FY(RY), IY = RY.index + RY[0].length;
                            return AY + YY.slice(IY)
                          }

                          function uY(YY, rY, DY) {
                            const FY = [];
                            let AY = 0;
                            for (const IY of aY(YY, rY, DY)) FY.push(YY.slice(AY, IY.index)), AY = IY.index + IY[0].length;
                            return [...FY, YY.slice(AY)]
                          }

                          function sY(YY, rY, DY) {
                            var FY;
                            return DY + (rY.unicode && (null !== (FY = YY.codePointAt(DY)) && void 0 !== FY ? FY : 0) > 65535 ? 2 : 1)
                          }
                        }, 4405: (YY, rY, DY) => {
                          DY.d(rY, {
                            b: () => AY,
                            f: () => gY,
                            i: () => IY,
                            l: () => RY,
                            n: () => OY,
                            q: () => oY,
                            t: () => vY,
                            w: () => uY,
                            y: () => QY,
                            z: () => iY
                          });
                          var FY = DY(1560);
                          const AY = 24e3,
                            IY = "/docs/llms.txt",
                            RY = `${FY.e}${IY}`,
                            OY = "/llms.txt",
                            gY = "/docs/llms-full.txt";

                          function aY(YY) {
                            return YY || "index"
                          }

                          function vY(YY) {
                            return `/docs/${aY(YY)}.md`
                          }

                          function uY(YY, rY) {
                            return `/docs/${aY(YY)}/${rY+1}.md`
                          }
                          const sY = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function iY(YY) {
                            const rY = sY.exec(YY);
                            return null === rY ? null : {
                              name: rY[1],
                              part: void 0 === rY[2] ? null : Number(rY[2])
                            }
                          }
                          const yY = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function QY(YY) {
                            const rY = yY.exec(YY);
                            if (null === rY) return null;
                            const [, DY = "", FY] = rY;
                            return void 0 === FY ? vY(DY) : uY(DY, Number(FY) - 1)
                          }

                          function oY(YY) {
                            return `/docsHtml/${aY(YY)}.html`
                          }
                        }, 4422: (YY, rY, DY) => {
                          DY.d(rY, {
                            b: () => AY,
                            e: () => FY,
                            i: () => IY,
                            l: () => gY,
                            m: () => RY
                          });
                          const FY = ["sine", "triangle", "square", "sawtooth"],
                            AY = 55,
                            IY = {
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

                          function RY(YY) {
                            return "string" !== typeof YY ? YY : Object.hasOwn(IY, YY) ? IY[YY] : null
                          }

                          function OY(YY, rY, DY) {
                            return Math.min(DY, Math.max(rY, YY))
                          }

                          function gY(YY) {
                            const rY = OY(YY.durationMs, 10, 500),
                              DY = OY(YY.attackMs, 0, rY),
                              {
                                intonation: AY
                              } = YY;
                            return {
                              waveform: FY.includes(YY.waveform) ? YY.waveform : "sine",
                              pitchHz: OY(YY.pitchHz, 20, 4e3),
                              glideSemitones: OY(YY.glideSemitones, -24, 24),
                              durationMs: rY,
                              attackMs: DY,
                              releaseMs: OY(YY.releaseMs, 0, rY - DY),
                              lowpassHz: null === YY.lowpassHz ? null : OY(YY.lowpassHz, 20, 2e4),
                              volume: OY(YY.volume, 0, 2),
                              intonation: {
                                variationSemitones: OY(AY.variationSemitones, 0, 6),
                                declineSemitones: OY(AY.declineSemitones, 0, 12),
                                questionRiseSemitones: OY(AY.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: OY(AY.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: OY(YY.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const YY in modules) Object.freeze(modules[YY]);