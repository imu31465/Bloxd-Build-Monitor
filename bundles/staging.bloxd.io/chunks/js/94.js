export const id = 94;
export const ids = [94, 110];
export const modules = {
    5712: (RR, JR, GR) => {
      GR.d(JR, {
        b: () => LR,
        e: () => nR
      });
      var yR = GR(1163),
        tR = GR.n(yR),
        uR = GR(66),
        ZR = GR(1270),
        qR = GR(5719),
        iR = GR(2105),
        fR = GR(3465),
        VR = GR(5728),
        KR = GR(1378);
      const wR = new WeakMap;
      let rR = 0;

      function eR(RR) {
        let JR = wR.get(RR);
        return void 0 === JR && (JR = rR++, wR.set(RR, JR)), JR
      }

      function aR(RR) {
        let {
          piece: JR
        } = RR;
        return "space" === JR.kind ? (0, KR.jsx)(KR.Fragment, {
          children: JR.text
        }) : (0, KR.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${JR.delayMs}ms`
          },
          children: (0, KR.jsx)(qR.b, {
            text: "icon" === JR.kind ? `[[${JR.icon}]]` : JR.text
          })
        })
      }

      function LR(RR) {
        let {
          display: JR
        } = RR;
        const {
          selectedLanguage: GR
        } = (0, ZR.A)(), yR = (0, uR.useMemo)((() => (0, VR.e)((0, VR.f)(JR).plan.pieces)), [JR, GR.code]);
        return (0, KR.jsxs)("div", {
          className: tR()("Dialogue", {
            DialogueAnimateIn: !1 !== JR.animateIn
          }),
          children: [JR.speakerName && (0, KR.jsx)(iR.c, {
            text: JR.speakerName,
            className: "DialogueSpeaker"
          }), (0, KR.jsx)("p", {
            className: "DialogueLine",
            children: yR.map(((RR, JR) => 1 === RR.length && "space" === RR[0].kind ? RR[0].text : (0, KR.jsx)("span", {
              className: "DialogueGlue",
              children: RR.map(((RR, JR) => (0, KR.jsx)(aR, {
                piece: RR
              }, JR)))
            }, JR)))
          })]
        })
      }
      const nR = (0, uR.memo)((function() {
        const RR = (0, fR.f)("dialogue");
        return (0, KR.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: RR && (0, KR.jsx)(LR, {
            display: RR
          }, eR(RR))
        })
      }))
    },
    5603: (RR, JR, GR) => {
        GR.r(JR), GR.d(JR, {
          default: () => RZ
        });
        var yR = GR(66),
          tR = GR(1163),
          uR = GR.n(tR),
          ZR = GR(1671),
          qR = GR(1677),
          iR = GR(25),
          fR = GR(83),
          VR = GR(5610),
          KR = GR(5624),
          wR = GR(5629),
          rR = GR(5138),
          eR = GR(1378);
        const aR = "/textures/docs/icons";

        function LR(RR) {
          let {
            name: JR,
            isTinted: GR,
            className: yR,
            style: tR
          } = RR;
          const ZR = `${aR}/${JR}.png`;
          return GR ? (0, eR.jsxs)("span", {
            className: uR()("DocsPixelIcon", "Tinted", yR),
            "aria-hidden": "true",
            style: tR,
            children: [(0, eR.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${ZR}")`,
                WebkitMaskImage: `url("${ZR}")`
              }
            }), (0, eR.jsx)("img", {
              src: ZR,
              alt: ""
            })]
          }) : (0, eR.jsx)("img", {
            className: uR()("DocsPixelIcon", yR),
            src: ZR,
            alt: "",
            "aria-hidden": "true",
            style: tR
          })
        }
        const nR = 1500;

        function UR() {
          const [RR, JR] = (0, yR.useState)(null);
          (0, yR.useEffect)((() => {
            if (null === RR) return;
            const GR = setTimeout((() => {
              JR(null)
            }), nR);
            return () => {
              clearTimeout(GR)
            }
          }), [RR]);
          return [RR, RR => {
            (0, rR.e)(RR).then((() => {
              JR({
                text: RR,
                failed: !1
              })
            }), (GR => {
              console.error("Could not copy to the clipboard", GR), JR({
                text: RR,
                failed: !0
              })
            }))
          }]
        }

        function WR(RR) {
          let {
            text: JR,
            label: GR,
            className: yR
          } = RR;
          const [tR, ZR] = UR(), qR = !1 === (null === tR || void 0 === tR ? void 0 : tR.failed);
          return (0, eR.jsxs)("button", {
            type: "button",
            className: uR()("DocsCopyButton", yR, {
              Copied: qR
            }),
            title: "Copy to clipboard",
            "aria-label": GR ? void 0 : `Copy ${JR}`,
            onClick: RR => {
              RR.stopPropagation(), ZR(JR)
            },
            children: [(0, eR.jsx)(LR, {
              name: qR ? "check" : "copy"
            }), GR && (0, eR.jsx)("span", {
              children: qR ? "Copied" : null !== tR && void 0 !== tR && tR.failed ? "Copy failed" : GR
            })]
          })
        }
        VR.e.registerLanguage("javascript", KR.d), VR.e.registerLanguage("typescript", wR.c);
        const AR = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          CR = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          XR = 24;

        function MR(RR) {
          let {
            code: JR,
            lang: GR,
            compact: tR = !1
          } = RR;
          const ZR = (0, yR.useMemo)((() => function(RR, JR) {
              const GR = AR[JR];
              return GR ? VR.e.highlight(RR, {
                language: GR
              }).value : RR.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(JR, GR)), [JR, GR]),
            qR = JR.split("\n").length,
            iR = !tR && qR > XR + 6,
            [fR, KR] = (0, yR.useState)(!1),
            wR = AR[GR];
          return (0, eR.jsxs)("div", {
            className: uR()("DocsCodeBlock", {
              Compact: tR,
              Collapsed: iR && !fR
            }),
            children: [!tR && (0, eR.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, eR.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: wR ? CR[wR] : "Text"
              }), (0, eR.jsx)(WR, {
                text: JR,
                label: "Copy"
              })]
            }), (0, eR.jsx)("pre", {
              children: (0, eR.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: ZR
                }
              })
            }), iR && (0, eR.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": fR,
              onClick: () => {
                KR(!fR)
              },
              children: [(0, eR.jsx)(LR, {
                name: fR ? "chevron-up" : "chevron-down"
              }), fR ? "Show less" : `Show all ${qR} lines`]
            })]
          })
        }
        var BR = GR(5635);
        var lR = GR(5637);
        const pR = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function gR(RR) {
          const JR = new Map;
          let GR, yR = [],
            tR = !1;
          const uR = () => {
            GR && JR.set(GR.name, GR.lines.join("\n").trimEnd())
          };
          for (const ZR of RR.split("\n")) {
            const RR = ZR.match(pR);
            tR || ZR.startsWith("/*") ? (tR || (uR(), GR = void 0), yR.push(ZR), tR = !ZR.includes("*/")) : RR ? (uR(), GR = {
              name: RR[1],
              lines: [...yR, ZR]
            }, yR = []) : GR && (ZR.startsWith(" ") || ZR.startsWith("\t") || /^[}\])|]/.test(ZR)) ? GR.lines.push(ZR) : GR && "" !== ZR.trim() && (uR(), GR = void 0)
          }
          return uR(), JR
        }

        function bR(RR) {
          return "methods" === RR || "callbacks" === RR || "settings" === RR
        }
        const vR = {
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
              setterSnippet: (RR, JR) => `api.setClientOption(playerId, "${RR}", ${JR})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (RR, JR) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${RR}", ${JR})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (RR, JR) => `api.setMobSetting(mobId, "${RR}", ${JR})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (RR, JR) => `api.setVehicleSetting(vehicleId, "${RR}", ${JR})`
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
          OR = {
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

        function xR(RR) {
          return RR.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function NR(RR) {
          let JR = !1;
          return RR.split("\n").map((RR => (RR.startsWith("```") && (JR = !JR), !JR && /^#{3,} /.test(RR) ? RR.slice(1) : RR))).join("\n")
        }

        function DR(RR) {
          return "readme" === RR ? "getting-started" : xR(RR)
        }
        const HR = "## Glossary of Referenced Types";
        const oR = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...lR.e.flatMap((RR => {
            const JR = {
              id: RR.id,
              slug: DR(RR.id),
              title: RR.title,
              markdown: RR.content,
              ...vR[RR.id]
            };
            if ("readme" === RR.id) return function(RR) {
              const JR = RR.markdown.indexOf(HR),
                GR = RR.markdown.indexOf("\n```", JR),
                yR = RR.markdown.indexOf("\n```", GR + 1);
              if (-1 === JR || -1 === GR || -1 === yR) throw new Error(`Getting started has no "${HR}" section with a code block`);
              const tR = RR.markdown.slice(JR + 31, GR).trim(),
                uR = [...gR(RR.markdown.slice(RR.markdown.indexOf("\n", GR + 1) + 1, yR))].map((RR => {
                  let [JR, GR] = RR;
                  return `## ${JR}\n\n\`\`\`ts\n${GR}\n\`\`\`\n`
                })),
                ZR = RR.markdown.slice(RR.markdown.indexOf("\n", yR + 1) + 1);
              return [{
                ...RR,
                markdown: `${RR.markdown.slice(0,JR)}${ZR}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${tR}\n\n${uR.join("\n")}`
              }]
            }(JR);
            if ("howTo" === RR.id) {
              const {
                parent: RR,
                guides: GR
              } = function(RR) {
                const [JR, ...GR] = RR.markdown.split(/^(?=## )/m), yR = [JR], tR = [];
                for (const ZR of GR) {
                  var uR;
                  const JR = ZR.indexOf("\n"),
                    GR = ZR.slice(3, JR).trim(),
                    qR = ZR.slice(JR + 1);
                  if (!qR.includes("```")) {
                    yR.push(ZR);
                    continue
                  }
                  const iR = null !== (uR = OR[GR]) && void 0 !== uR ? uR : {
                    icon: "lightbulb",
                    summary: `How to use ${GR.toLowerCase()} in World Code.`
                  };
                  tR.push({
                    id: `${RR.id}${GR.split(/[^A-Za-z0-9]+/).map((RR=>RR.charAt(0).toUpperCase()+RR.slice(1))).join("")}`,
                    slug: `${RR.slug}-${xR(GR)}`,
                    title: GR,
                    layout: "article",
                    sourceAnchor: (0, BR.s)(GR),
                    markdown: `# ${GR}\n\n${NR(qR)}`,
                    ...iR
                  })
                }
                return {
                  parent: {
                    ...RR,
                    markdown: yR.join(""),
                    childPageIds: tR.map((RR => RR.id))
                  },
                  guides: tR
                }
              }(JR);
              return [RR, ...GR]
            }
            return [JR]
          }))],
          cR = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...oR.filter((RR => void 0 !== RR.sourceAnchor)).map((RR => RR.id))]
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

        function PR(RR) {
          return oR.find((JR => JR.id === RR))
        }
        const IR = new Map;

        function mR(RR) {
          let JR = IR.get(RR.id);
          return JR || (JR = (0, BR.x)(RR.markdown, "changelog" === RR.layout ? 3 : 2), IR.set(RR.id, JR)), JR
        }

        function zR(RR, JR) {
          return mR(RR).sections.some((RR => RR.heading.anchor === JR || RR.blocks.some((RR => "heading" === RR.kind && RR.anchor === JR))))
        }

        function SR(RR) {
          const [JR, ...GR] = RR.replace(/^#/, "").split("-"), yR = oR.find((RR => RR.id === JR));
          if (!yR) return null;
          const tR = GR.length > 0 ? (0, BR.s)(GR.join("-")) : "";
          for (const ZR of null !== (uR = yR.childPageIds) && void 0 !== uR ? uR : []) {
            var uR;
            const RR = PR(ZR);
            if (RR.sourceAnchor === tR) return {
              page: RR,
              anchor: ""
            };
            if (zR(RR, tR)) return {
              page: RR,
              anchor: tR
            }
          }
          return {
            page: yR,
            anchor: tR
          }
        }
        const jR = {
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

        function dR(RR, JR) {
          let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const yR = JR.slug ? `${RR}/${JR.slug}` : RR;
          return GR ? `${yR}#${GR}` : yR
        }
        var ER = GR(5650);
        const YR = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          kR = new Set(["GameApi", "Console", "_TypeOf"]),
          QR = 4;

        function FR(RR) {
          let JR = RR.length;
          for (; JR > 0 && "" === RR[JR - 1].trim();) JR--;
          return RR.slice(0, JR)
        }

        function TR(RR) {
          var JR;
          const GR = FR(RR);
          if (null === (JR = GR.at(-1)) || void 0 === JR || !JR.trimEnd().endsWith("*/")) return {
            lines: GR,
            doc: ""
          };
          const yR = GR.findLastIndex((RR => RR.startsWith("/**")));
          return -1 === yR ? {
            lines: GR,
            doc: ""
          } : {
            lines: FR(GR.slice(0, yR)),
            doc: GR.slice(yR).join("\n")
          }
        }

        function sR(RR) {
          var JR;
          const GR = RR.split("\n"),
            yR = GR.flatMap(((RR, JR) => YR.test(RR) ? [JR] : []));
          let tR = TR(GR.slice(0, null !== (JR = yR[0]) && void 0 !== JR ? JR : GR.length)).doc;
          return yR.map(((RR, JR) => {
            var uR;
            const ZR = TR(GR.slice(RR, null !== (uR = yR[JR + 1]) && void 0 !== uR ? uR : GR.length)),
              qR = {
                name: GR[RR].match(YR)[1],
                doc: tR,
                lines: ZR.lines
              };
            return tR = ZR.doc, qR
          }))
        }

        function hR(RR) {
          var JR;
          const GR = RR.match(/^readonly \[([\s\S]*)\]$/);
          return GR ? null !== (JR = GR[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== JR ? JR : [] : null
        }

        function RJ(RR) {
          if (!RR.startsWith("{") || !RR.endsWith("}")) return null;
          const JR = {
              keys: [],
              values: []
            },
            GR = RR => {
              const GR = RR.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              GR && (JR.keys.push(GR[1].startsWith('"') ? GR[1] : `"${GR[1]}"`), JR.values.push(GR[2].trim()))
            };
          let yR = 0,
            tR = "";
          for (const uR of RR.slice(1, -1)) "{[(".includes(uR) ? yR++ : "}])".includes(uR) && yR--, ";" === uR && 0 === yR ? (GR(tR), tR = "") : tR += uR;
          return GR(tR), JR
        }

        function JJ(RR) {
          return RR.length > QR ? `\n\t| ${RR.join("\n\t| ")}` : RR.join(" | ")
        }

        function GJ(RR, JR) {
          const GR = function(RR, JR) {
            return RR.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((RR, GR) => {
              var yR;
              const tR = null === (yR = JR.get(GR)) || void 0 === yR ? void 0 : yR.object;
              return tR ? JJ(tR.values) : RR
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((RR, GR) => {
              var yR, tR;
              const uR = null === (yR = JR.get(GR)) || void 0 === yR || null === (tR = yR.object) || void 0 === tR ? void 0 : tR.values.map(hR);
              return null !== uR && void 0 !== uR && uR.every((RR => null !== RR)) ? JJ([...new Set(uR.flat())]) : RR
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((RR, GR) => {
              var yR;
              const tR = null === (yR = JR.get(GR)) || void 0 === yR ? void 0 : yR.members;
              return tR ? JJ(tR) : RR
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((RR, GR) => {
              var yR;
              const tR = null === (yR = JR.get(GR)) || void 0 === yR ? void 0 : yR.object;
              return tR ? JJ(tR.keys) : RR
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((RR, GR) => {
              var yR, tR;
              return null !== (yR = null === (tR = JR.get(GR)) || void 0 === tR ? void 0 : tR.text) && void 0 !== yR ? yR : RR
            }))
          }(RR.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), JR);
          return [RR.doc, GR].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function yJ(RR) {
          const JR = sR(RR),
            GR = function(RR) {
              const JR = new Map,
                GR = RR.find((RR => "_TypeOf" === RR.name));
              let yR = null;
              const tR = () => {
                if (yR) {
                  const RR = yR.lines.join("\n");
                  JR.set(yR.name, {
                    text: RR,
                    members: hR(RR),
                    object: RJ(RR)
                  })
                }
              };
              for (const uR of GR.lines.slice(1, -1)) {
                const RR = uR.match(/^\t([\w$]+): (.+)$/);
                RR ? (tR(), yR = {
                  name: RR[1],
                  lines: [RR[2]]
                }) : yR && yR.lines.push(uR.replace(/^\t/, ""))
              }
              return tR(), JR
            }(JR),
            yR = new Map;
          for (const tR of JR) kR.has(tR.name) || yR.has(tR.name) || yR.set(tR.name, GJ(tR, GR));
          return yR
        }
        let tJ, uJ, ZJ;

        function qJ() {
          return uJ ??= function(RR) {
            const JR = sR(RR).find((RR => "GameApi" === RR.name)),
              GR = new Map,
              yR = JR.lines;
            for (let uR = 0; uR < yR.length; uR++) {
              var tR;
              if (!yR[uR].trimStart().startsWith("/**")) continue;
              const RR = uR;
              for (; uR < yR.length && !yR[uR].includes("*/");) uR++;
              const JR = null === (tR = yR[uR + 1]) || void 0 === tR ? void 0 : tR.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!JR) continue;
              let ZR = null;
              const qR = [];
              let iR = "description",
                fR = !1;
              for (const GR of yR.slice(RR, uR + 1).join("\n").split("\n").map((RR => RR.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const RR = GR.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                RR ? (ZR = RR[1].trim(), iR = "deprecation") : GR.startsWith("@") ? (iR = "otherTag", fR = !0) : "" === GR.trim() ? fR || (iR = "description", qR.push(GR)) : "deprecation" !== iR || /^[A-Z]/.test(GR.trim()) ? "otherTag" !== iR && (iR = "description", qR.push(GR)) : ZR = `${ZR} ${GR.trim()}`.trim()
              }
              GR.set(JR[1], {
                deprecation: ZR,
                description: qR.join("\n").trim()
              })
            }
            return GR
          }(ER.default), uJ
        }

        function iJ() {
          if (!ZJ) {
            ZJ = new Map;
            for (const RR of oR) {
              const JR = (0, BR.v)(mR(RR)).flatMap((RR => RR.blocks));
              for (const RR of (0, BR.l)(JR))
                if ("ts" === RR.lang || "typescript" === RR.lang)
                  for (const [JR, GR] of gR(RR.code)) ZJ.set(JR, GR)
            }
            for (const [RR, JR] of(tJ ??= yJ(ER.default), tJ)) ZJ.has(RR) || ZJ.set(RR, JR)
          }
          return ZJ
        }
        const fJ = {
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
        let VJ;

        function KJ() {
          if (!VJ) {
            VJ = new Map;
            for (const RR of oR)
              if (bR(RR.layout))
                for (const JR of mR(RR).sections) VJ.has(JR.heading.text) || VJ.set(JR.heading.text, {
                  pageId: RR.id,
                  anchor: JR.heading.anchor
                })
          }
          return VJ
        }

        function wJ(RR) {
          const JR = RR.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return JR ? KJ().get(JR[1]) : void 0
        }
        const rJ = (0, yR.createContext)("/docs"),
          eJ = (0, yR.createContext)(null),
          aJ = (0, yR.createContext)(!1),
          LJ = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function nJ(RR) {
          const JR = RR.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return JR ? JR[1] : null
        }

        function UJ(RR) {
          let {
            colour: JR
          } = RR;
          return (0, eR.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: JR
            },
            "aria-hidden": "true"
          })
        }

        function WJ(RR) {
          const JR = [];
          let GR = 0;
          for (const yR of RR.matchAll(LJ)) JR.push(RR.slice(GR, yR.index), (0, eR.jsx)(UJ, {
            colour: yR[0]
          }), yR[0]), GR = yR.index + yR[0].length;
          return JR.push(RR.slice(GR)), JR
        }

        function AJ(RR) {
          let {
            href: JR,
            children: GR
          } = RR;
          const tR = (0, yR.useContext)(rJ);
          if (JR.startsWith("#")) {
            const RR = SR(JR);
            if (RR) return (0, eR.jsx)(ZR.b, {
              to: dR(tR, RR.page, RR.anchor),
              children: (0, eR.jsx)(aJ.Provider, {
                value: !0,
                children: GR
              })
            })
          }
          return (0, eR.jsx)("a", {
            href: JR,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, eR.jsx)(aJ.Provider, {
              value: !0,
              children: GR
            })
          })
        }

        function CJ(RR) {
          let {
            code: JR
          } = RR;
          const GR = (0, yR.useContext)(rJ);
          if ((0, yR.useContext)(aJ)) return (0, eR.jsx)("code", {
            className: "DocsInlineCode",
            children: JR
          });
          if (iJ().has(JR)) return (0, eR.jsx)(lJ, {
            type: JR
          });
          const tR = wJ(JR);
          if (tR) return (0, eR.jsx)(ZR.b, {
            className: "DocsInlineCode DocsSymbolLink",
            to: dR(GR, PR(tR.pageId), tR.anchor),
            children: JR
          });
          const uR = nJ(JR);
          return (0, eR.jsxs)("code", {
            className: "DocsInlineCode",
            children: [uR && (0, eR.jsx)(UJ, {
              colour: uR
            }), JR]
          })
        }

        function XJ(RR) {
          let {
            text: JR
          } = RR;
          const GR = [];
          let tR = 0;
          for (const yR of JR.matchAll(BR.e)) {
            yR.index > tR && GR.push(...WJ(JR.slice(tR, yR.index)));
            const [, RR, uR, ZR, qR, iR] = yR;
            RR ? GR.push((0, eR.jsx)(CJ, {
              code: (0, BR.p)(RR, uR)
            })) : ZR ? GR.push((0, eR.jsx)("strong", {
              children: (0, eR.jsx)(XJ, {
                text: ZR
              })
            })) : GR.push((0, eR.jsx)(AJ, {
              href: iR,
              children: (0, eR.jsx)(XJ, {
                text: qR
              })
            })), tR = yR.index + yR[0].length
          }
          return tR < JR.length && GR.push(...WJ(JR.slice(tR))), (0, eR.jsx)(eR.Fragment, {
            children: GR.map(((RR, JR) => (0, eR.jsx)(yR.Fragment, {
              children: RR
            }, JR)))
          })
        }
        const MJ = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          BJ = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function lJ(RR) {
          let {
            type: JR
          } = RR;
          const GR = iJ(),
            tR = [];
          for (const yR of JR.trim().matchAll(MJ)) {
            const [RR, JR, uR, ZR, qR] = yR;
            JR ? tR.push((0, eR.jsx)("span", {
              className: "DocsTypeString",
              children: RR
            })) : uR && GR.has(uR) ? tR.push((0, eR.jsx)(OJ, {
              name: uR,
              definition: GR.get(uR)
            })) : uR ? tR.push((0, eR.jsx)("span", {
              className: BJ.has(uR) ? "DocsTypeKeyword" : "DocsTypeName",
              children: RR
            })) : ZR ? tR.push((0, eR.jsx)("span", {
              className: "DocsTypeNumber",
              children: RR
            })) : qR ? tR.push(" ") : tR.push((0, eR.jsx)("span", {
              className: "DocsTypePunctuation",
              children: RR
            }))
          }
          return (0, eR.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: tR.map(((RR, JR) => (0, eR.jsx)(yR.Fragment, {
              children: RR
            }, JR)))
          })
        }
        const pJ = 480,
          gJ = 6,
          bJ = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let vJ = 0;

        function OJ(RR) {
          let {
            name: JR,
            definition: GR
          } = RR;
          const tR = (0, yR.useContext)(rJ),
            uR = fJ[JR],
            qR = (0, yR.useRef)(null),
            iR = (0, yR.useRef)(null),
            VR = (0, yR.useRef)(null),
            [KR, wR] = (0, yR.useState)(!1),
            [rR, aR] = (0, yR.useState)(null),
            nR = (0, yR.useRef)(),
            UR = (0, yR.useContext)(eJ),
            [WR] = (0, yR.useState)((() => "DocsTypePopover-" + vJ++)),
            AR = () => {
              clearTimeout(nR.current), wR(!0)
            },
            CR = () => {
              clearTimeout(nR.current), nR.current = setTimeout((() => {
                wR(!1)
              }), 120)
            };
          return (0, yR.useEffect)((() => {
            if (!KR) return;
            const RR = RR => {
              if ("Escape" === RR.key) {
                var JR, GR;
                if (null !== (JR = iR.current) && void 0 !== JR && JR.contains(document.activeElement)) null === (GR = qR.current) || void 0 === GR || GR.focus();
                wR(!1)
              }
            };
            return document.addEventListener("keydown", RR), () => {
              document.removeEventListener("keydown", RR)
            }
          }), [KR]), (0, yR.useEffect)((() => () => {
            clearTimeout(nR.current)
          }), []), (0, yR.useLayoutEffect)((() => {
            if (!KR || !qR.current || !iR.current) return void aR(null);
            const RR = qR.current.getBoundingClientRect(),
              JR = iR.current.offsetHeight,
              GR = Math.min(pJ, window.innerWidth - 32),
              yR = Math.min(Math.max(16, RR.left), window.innerWidth - GR - 16),
              tR = RR.bottom + gJ + JR < window.innerHeight;
            aR({
              left: yR,
              top: tR ? RR.bottom + gJ : Math.max(16, RR.top - gJ - JR)
            })
          }), [KR]), (0, eR.jsxs)(eR.Fragment, {
            children: [(0, eR.jsx)("button", {
              type: "button",
              ref: qR,
              className: "DocsTypeLink",
              "aria-expanded": KR,
              "aria-describedby": KR ? WR : void 0,
              onMouseEnter: AR,
              onMouseLeave: CR,
              onFocus: AR,
              onBlur: CR,
              onKeyDown: RR => {
                "Tab" === RR.key && !RR.shiftKey && VR.current && (RR.preventDefault(), VR.current.focus())
              },
              onClick: AR,
              children: JR
            }), KR && (0, fR.createPortal)((0, eR.jsxs)("span", {
              ref: iR,
              id: WR,
              className: "DocsTypePopover",
              role: "tooltip",
              style: rR ? {
                left: rR.left,
                top: rR.top,
                maxWidth: pJ
              } : {
                visibility: "hidden"
              },
              onMouseEnter: AR,
              onMouseLeave: CR,
              onFocus: AR,
              onBlur: CR,
              children: [(0, eR.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, eR.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: JR
                }), uR && (0, eR.jsxs)(ZR.b, {
                  ref: VR,
                  className: "DocsTypePopoverLink",
                  to: dR(tR, PR(uR)),
                  onClick: () => {
                    wR(!1)
                  },
                  onKeyDown: RR => {
                    if ("Tab" === RR.key) {
                      var JR;
                      if (RR.preventDefault(), RR.shiftKey || !qR.current || ! function(RR, JR) {
                          const GR = [...document.querySelectorAll(bJ)],
                            yR = GR.slice(GR.indexOf(RR) + 1).find((RR => RR.getClientRects().length > 0 && !(null !== JR && void 0 !== JR && JR.contains(RR))));
                          return null === yR || void 0 === yR || yR.focus(), void 0 !== yR
                        }(qR.current, iR.current)) null === (JR = qR.current) || void 0 === JR || JR.focus();
                      RR.shiftKey || wR(!1)
                    }
                  },
                  children: [PR(uR).title, (0, eR.jsx)(LR, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, eR.jsx)(MR, {
                lang: "ts",
                code: GR,
                compact: !0
              })]
            }), null !== UR && void 0 !== UR ? UR : document.body)]
          })
        }
        var xJ = GR(203),
          NJ = GR(5653),
          DJ = GR(5656),
          HJ = GR(5658);
        const oJ = {
          progressBar: {
            pu: 30,
            gu: .075,
            bu: 5,
            vu: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            Ou: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            Du: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            Hu: !0,
            scale: 3,
            rotation: 15,
            ou: !1
          },
          gravityBar: {
            pu: 30,
            Pu: .25,
            Iu: 3,
            mu: .8,
            gravity: 1,
            zu: 1.5,
            Su: 8,
            ju: 4,
            vu: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            Eu: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            ku: 5,
            Qu: 1200,
            Fu: .15,
            Tu: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var cJ = GR(359),
          PJ = GR(2202);

        function IJ(RR) {
          return RR.startsWith("fa-")
        }
        const mJ = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          zJ = {
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

        function SJ(RR) {
          return "string" === typeof RR ? "text" : "entityName" in RR || "translationKey" in RR ? "other" : (0, cJ.sb)(RR) ? "progressBar" : (0, cJ.rb)(RR) ? "keyBinding" : "icon" in RR ? "icon" : "str" in RR && "string" === typeof RR.str ? "text" : "other"
        }
        const jJ = [{
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
          dJ = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...jJ],
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
                options: PJ.h
              },
              isRequired: !0
            }, ...jJ],
            other: []
          };

        function EJ(RR) {
          return "string" === typeof RR ? {
            str: RR
          } : RR
        }

        function YJ(RR, JR) {
          let GR = EJ(RR);
          for (const yR of JR) GR = GR && "object" === typeof GR ? GR[yR] : void 0;
          return GR
        }

        function kJ(RR, JR, GR) {
          const yR = (RR, tR) => {
            var uR;
            const ZR = JR[tR],
              qR = {
                ...RR
              };
            if (tR === JR.length - 1) return void 0 === GR ? delete qR[ZR] : qR[ZR] = GR, qR;
            const iR = yR(null !== (uR = RR[ZR]) && void 0 !== uR ? uR : {}, tR + 1);
            return 0 === Object.keys(iR).length ? delete qR[ZR] : qR[ZR] = iR, qR
          };
          return function(RR) {
            const JR = Object.keys(RR);
            return "string" === typeof RR.str && 1 === JR.length ? RR.str : RR
          }(yR(EJ(RR), 0))
        }

        function QJ(RR, JR) {
          const GR = SJ(RR),
            yR = dJ[GR].find((RR => RR.path.join(".") === JR.join("."))),
            tR = null !== yR && void 0 !== yR && yR.isRequired && "other" !== GR ? YJ(zJ[GR], JR) : void 0;
          return kJ(RR, JR, tR)
        }

        function FJ(RR) {
          switch (SJ(RR)) {
            case "text":
              return String(YJ(RR, ["str"]));
            case "icon":
              return String(YJ(RR, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(YJ(RR,["progress"])))}%`;
            case "keyBinding":
              return String(YJ(RR, ["action"]));
            case "other":
              return JSON.stringify(RR)
          }
        }
        const TJ = /^[A-Za-z_$][\w$]*$/;

        function sJ(RR) {
          if (Array.isArray(RR)) return `[${RR.map(sJ).join(", ")}]`;
          if (RR && "object" === typeof RR) {
            const JR = Object.entries(RR).map((RR => {
              let [JR, GR] = RR;
              return `${TJ.test(JR)?JR:JSON.stringify(JR)}: ${sJ(GR)}`
            }));
            return 0 === JR.length ? "{}" : `{ ${JR.join(", ")} }`
          }
          return JSON.stringify(RR)
        }

        function hJ(RR) {
          const JR = RR.map(sJ),
            GR = `[${JR.join(", ")}]`;
          return GR.length <= 60 ? GR : `[\n${JR.map((RR=>`    ${RR},`)).join("\n")}\n]`
        }
        const RG = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function JG(RR) {
          let JR = "";
          for (let tR = 0; tR < RR.length; tR++) {
            const uR = RR[tR];
            if ("\\" === uR) {
              var GR;
              const yR = null !== (GR = RR[tR + 1]) && void 0 !== GR ? GR : "";
              JR += "'" === yR ? "'" : uR + yR, tR++
            } else if ('"' === uR) JR += '\\"';
            else {
              var yR;
              JR += null !== (yR = RG[uR]) && void 0 !== yR ? yR : uR
            }
          }
          return `"${JR}"`
        }

        function GG(RR) {
          if ("string" === typeof RR) return !0;
          if (!RR || "object" !== typeof RR || Array.isArray(RR)) return !1;
          const JR = RR;
          return "ProgressBar" === JR.type ? "number" === typeof JR.progress : "StyledKeyBinding" === JR.type ? PJ.h.includes(JR.action) : "string" === typeof JR.icon || "string" === typeof JR.str || "string" === typeof JR.entityName || "string" === typeof JR.translationKey
        }

        function yG(RR) {
          let JR;
          try {
            JR = function(RR) {
              let JR = "",
                GR = "",
                yR = 0;
              const tR = () => {
                JR += GR.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), GR = ""
              };
              for (; yR < RR.length;) {
                const uR = RR.slice(yR).search(/["'`]|\/\//);
                if (-1 === uR) {
                  GR += RR.slice(yR);
                  break
                }
                GR += RR.slice(yR, yR + uR);
                const ZR = yR + uR,
                  qR = RR[ZR];
                if ("/" === qR) {
                  const JR = RR.indexOf("\n", ZR);
                  yR = -1 === JR ? RR.length : JR;
                  continue
                }
                if (tR(), "`" === qR) throw new Error("Use quotes rather than template strings.");
                let iR = ZR + 1;
                for (; iR < RR.length && RR[iR] !== qR;) iR += "\\" === RR[iR] ? 2 : 1;
                if (iR >= RR.length) throw new Error("A string is missing its closing quote.");
                const fR = RR.slice(ZR + 1, iR);
                JR += JG(fR), yR = iR + 1
              }
              return tR(), JSON.parse(JR)
            }(RR.trim())
          } catch (yR) {
            return {
              parts: null,
              error: yR instanceof SyntaxError ? "This isn't a valid array yet." : yR.message
            }
          }
          if (!Array.isArray(JR)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const GR = JR.findIndex((RR => !GG(RR)));
          return -1 !== GR ? {
            parts: null,
            error: `Part ${GR+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: JR,
            error: null
          }
        }
        const tG = 1 / xJ.g.clientTicksPerSecond,
          uG = 700,
          ZG = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          qG = {
            progressBar: oJ.progressBar.Ou,
            timedClick: oJ.timedClick.icon,
            gravityBar: oJ.gravityBar.icon,
            precisionBar: oJ.precisionBar.icon,
            rhythmClick: oJ.rhythmClick.icon
          };

        function iG(RR) {
          let {
            type: JR
          } = RR;
          const [GR, tR] = (0, yR.useState)("ready"), [ZR, qR] = (0, yR.useState)(1), [iR, fR] = (0, yR.useState)(!0), VR = (0, yR.useRef)(null), KR = (0, yR.useRef)(null), wR = (0, yR.useRef)(null), rR = (0, yR.useRef)(new Set), aR = (0, yR.useRef)(!1), nR = qG[JR], UR = (0, yR.useMemo)((() => ({
            getState: () => {
              var RR, JR;
              return null !== (RR = null === (JR = wR.current) || void 0 === JR ? void 0 : JR.getState()) && void 0 !== RR ? RR : ZG
            },
            onFrame: RR => (rR.current.add(RR), () => {
              rR.current.delete(RR)
            })
          })), []);
          (0, yR.useEffect)((() => {
            const RR = VR.current,
              JR = KR.current;
            if (!RR || !JR) return;
            const GR = new ResizeObserver((() => {
              qR(RR.clientWidth / Math.max(1, JR.offsetWidth))
            }));
            return GR.observe(RR), () => {
              GR.disconnect()
            }
          }), []), (0, yR.useEffect)((() => {
            var RR;
            if ("playing" !== GR) return;
            let yR = !1;
            const uR = new HJ.g[JR](oJ[JR], (RR => {
              yR = !0, fR(!1), tR(RR ? "succeeded" : "failed")
            }), (() => {}));
            wR.current = uR;
            let ZR = 0,
              qR = performance.now(),
              iR = requestAnimationFrame((function RR(JR) {
                for (ZR += Math.min(.25, (JR - qR) / 1e3), qR = JR; ZR >= tG && !yR;) ZR -= tG, uR.handleTick(tG);
                for (const GR of rR.current) GR();
                yR || (iR = requestAnimationFrame(RR))
              }));
            return null === (RR = VR.current) || void 0 === RR || RR.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(iR), uR.tearDown(), wR.current = null, aR.current = !1
            }
          }), [GR, JR]), (0, yR.useEffect)((() => {
            if (iR) return;
            const RR = setTimeout((() => {
              fR(!0)
            }), uG);
            return () => {
              clearTimeout(RR)
            }
          }), [iR]);
          const WR = RR => {
            var JR;
            "playing" === GR && aR.current !== RR && (aR.current = RR, null === (JR = wR.current) || void 0 === JR || JR.handleMouseInput(RR))
          };
          return (0, eR.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, eR.jsxs)("div", {
              ref: VR,
              className: uR()("DocsQteStage", {
                Playing: "playing" === GR
              }),
              tabIndex: "playing" === GR ? 0 : -1,
              role: "playing" === GR ? "button" : void 0,
              "aria-label": "playing" === GR ? `${JR} quick time event: click or press Space` : void 0,
              onPointerDown: RR => {
                0 === RR.button && WR(!0)
              },
              onPointerUp: () => {
                WR(!1)
              },
              onPointerLeave: () => {
                WR(!1)
              },
              onPointerCancel: () => {
                WR(!1)
              },
              onKeyDown: RR => {
                "playing" !== GR || " " !== RR.key && "Enter" !== RR.key || (RR.preventDefault(), WR(!0))
              },
              onKeyUp: RR => {
                "playing" !== GR || " " !== RR.key && "Enter" !== RR.key || WR(!1)
              },
              children: [(0, eR.jsx)("div", {
                ref: KR,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${ZR})`
                },
                children: "playing" === GR && (0, eR.jsx)(DJ.e.Provider, {
                  value: UR,
                  children: (0, eR.jsx)(NJ.d, {
                    qte: {
                      type: JR,
                      parameters: oJ[JR]
                    }
                  })
                })
              }), "playing" !== GR && (0, eR.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== GR && (0, eR.jsxs)("div", {
                  className: uR()("DocsQteResult", "succeeded" === GR ? "Succeeded" : "Failed"),
                  children: [(0, eR.jsx)(LR, {
                    name: "succeeded" === GR ? "check" : "cross",
                    isTinted: !0
                  }), (0, eR.jsx)("span", {
                    children: "succeeded" === GR ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, eR.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !iR,
                  onClick: () => {
                    tR("playing")
                  },
                  children: [(0, eR.jsx)(LR, {
                    name: "ready" === GR ? "play" : "replay"
                  }), (0, eR.jsx)("span", {
                    children: "ready" === GR ? `Try ${JR}` : "Play again"
                  })]
                })]
              })]
            }), nR && !IJ(nR) && (0, eR.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, eR.jsx)("code", {
                children: nR
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function fG(RR) {
          let {
            level: JR,
            text: GR,
            anchor: yR,
            className: tR
          } = RR;
          const ZR = `h${Math.min(JR,6)}`;
          return (0, eR.jsxs)(ZR, {
                id: yR,
                className: uR()("DocsHeading", tR),
                children: [(0, eR.jsx)(XJ, {
                      text: GR
                    }), (0, eR.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${yR}`,
                        "aria-label": `Link to ${GR.replace(/`/g,"")}`,children:"#"})]})}function VG(RR){let{items:JR,ordered:GR}=RR;const yR=GR?"ol":"ul";return(0,eR.jsx)(yR,{className:"DocsList",children:JR.map(((RR,JR)=>(0,eR.jsxs)("li",{children:[(0,eR.jsx)(XJ,{text:RR.text}),RR.children.length>0&&(0,eR.jsx)(VG,{items:RR.children,ordered:GR})]},JR)))})}function KG(RR){const JR=RR[0],GR="paragraph"===(null===JR||void 0===JR?void 0:JR.kind)?JR.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(GR)?"warning":/^\*\*(tip|prefer)/.test(GR)?"tip":"note"}function wG(RR){let{block:JR}=RR;switch(JR.kind){case"heading":return(0,eR.jsx)(fG,{level:JR.level,text:JR.text,anchor:JR.anchor});case"paragraph":return(0,eR.jsx)("p",{children:(0,eR.jsx)(XJ,{text:JR.text})});case"code":{const RR="ts"===JR.lang?function(RR){const JR=RR.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return JR&&Object.hasOwn(oJ,JR[1])?JR[1]:null}(JR.code):null;return(0,eR.jsxs)(eR.Fragment,{children:[(0,eR.jsx)(MR,{code:JR.code,lang:JR.lang}),RR&&(0,eR.jsx)(iG,{type:RR})]})}case"table":return(0,eR.jsx)("div",{className:"DocsTableScroll",children:(0,eR.jsxs)("table",{className:"DocsTable",children:[(0,eR.jsx)("thead",{children:(0,eR.jsx)("tr",{children:JR.header.map(((RR,JR)=>(0,eR.jsx)("th",{children:(0,eR.jsx)(XJ,{text:RR})},JR)))})}),(0,eR.jsx)("tbody",{children:JR.rows.map(((RR,JR)=>(0,eR.jsx)("tr",{children:RR.map(((RR,JR)=>(0,eR.jsx)("td",{children:(0,eR.jsx)(XJ,{text:RR})},JR)))},JR)))})]})});case"list":return(0,eR.jsx)(VG,{items:JR.items,ordered:JR.ordered});case"quote":return(0,eR.jsx)("aside",{className:uR()("DocsCallout",KG(JR.blocks)),children:(0,eR.jsx)(rG,{blocks:JR.blocks})});case"rule":return(0,eR.jsx)("hr",{className:"DocsRule"})}}function rG(RR){let{blocks:JR}=RR;return(0,eR.jsx)(eR.Fragment,{children:JR.map(((RR,JR)=>(0,eR.jsx)(wG,{block:RR},JR)))})}var eG=GR(5641),aG=GR(5645);function LG(RR){return"blocks"===RR||"items"===RR}const nG=new Map;function UG(RR){let JR=nG.get(RR);return JR||(JR=function(RR){const JR={entries:[],legend:[],notes:[],examples:[]};let GR=!1;for(const uR of RR.split(/\r?\n/).slice(1)){if(uR.startsWith("#")){const RR=uR.replace(/^# ?/,""),yR=RR.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);yR?JR.legend.push({code:yR[1],meaning:yR[2],usage:yR[3].trim()}):/^Examples:/.test(RR.trim())?GR=!0:GR&&RR.trim()?JR.examples.push(RR.trim()):RR.trim()&&!/^\s/.test(RR)&&JR.notes.push(RR.trim());continue}const RR=uR.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var yR,tR;RR&&JR.entries.push({name:RR[1],variants:null!==(yR=null===(tR=RR[2])||void 0===tR?void 0:tR.split(","))&&void 0!==yR?yR:[]})}return JR}("blocks"===RR?eG:aG),nG.set(RR,JR)),JR}function WG(RR){let{className:JR,value:GR,placeholder:yR,label:tR,onChange:uR,count:ZR,children:qR}=RR;return(0,eR.jsxs)("div",{className:JR,children:[(0,eR.jsx)(LR,{name:"magnifying-glass"}),(0,eR.jsx)("input",{type:"search",value:GR,placeholder:yR,"aria-label":tR,onChange:RR=>{uR(RR.target.value)}}),qR,ZR&&(0,eR.jsxs)("span",{className:"DocsFilterCount",children:[ZR.visible," of ",ZR.total]})]})}var AG=GR(1468);function CG(RR){const JR=RR.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return JR?JR[2]:null}function XG(RR){return"paragraph"===RR.kind&&""===RR.text.trim()}function MG(RR){const JR={name:RR.heading.text,description:[],params:[],returns:null};let GR="description";for(const tR of RR.blocks)if(!XG(tR))if("heading"===tR.kind&&/^Parameters:?$/.test(tR.text))GR="params";else if("heading"===tR.kind&&/^Returns:?$/.test(tR.text))GR="returns",JR.returns={type:"",description:[]};else if("params"!==GR||"table"!==tR.kind){if("returns"===GR&&"paragraph"===tR.kind&&""===JR.returns.type){const RR=CG(tR.text);if(null!==RR){JR.returns.type=RR.replaceAll("\\|","|");continue}}"returns"===GR?JR.returns.description.push(tR):JR.description.push(tR)}else for(const[RR,GR,uR]of tR.rows){var yR;JR.params.push({name:RR,type:null!==(yR=CG(GR))&&void 0!==yR?yR:GR,description:null!==uR&&void 0!==uR?uR:""})}return JR}const BG=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function lG(RR){return RR.filter((RR=>!XG(RR)))}const pG=/^[\w][\w .'&!:()-]*$/,gG=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function bG(RR){var JR;if("code"===RR.kind&&"text"===RR.lang){const JR=RR.code.split("\n").map((RR=>RR.trim())).filter(Boolean);return JR.length>0&&JR.every((RR=>pG.test(RR)))?JR.map((RR=>({name:RR}))):null}return"paragraph"===RR.kind&&gG.test(RR.text.trim())?[...RR.text.matchAll(/`([ ^ `]+)` / g)].flatMap((RR => RR[1].split(/,\s*/).map((RR => ({
                              name: RR.trim()
                            }))))): "table" === RR.kind && null !== (JR = RR.header[0]) && void 0 !== JR && JR.startsWith("Song") ? RR.rows.map((RR => {
                              let [JR, GR] = RR;
                              return {
                                name: JR.replace(/`/g, ""),
                                caption: GR
                              }
                            })) : null
                          }

                          function vG(RR) {
                            const JR = [];
                            for (const GR of RR) {
                              const RR = bG(GR),
                                yR = JR.at(-1),
                                tR = "table" === GR.kind;
                              RR ? "names" === (null === yR || void 0 === yR ? void 0 : yR.kind) && yR.isSongs === tR ? yR.names.push(...RR) : JR.push({
                                kind: "names",
                                names: RR,
                                isSongs: tR
                              }) : JR.push({
                                kind: "block",
                                block: GR
                              })
                            }
                            return JR
                          }
                          const OG = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function xG(RR, JR) {
                            return `${OG[RR]}-${(0,BR.s)(JR)}`
                          }
                          const NG = new WeakMap;

                          function DG(RR, JR, GR) {
                            let yR = NG.get(JR);
                            if (!yR) {
                              yR = new Map;
                              const GR = new Set;
                              for (const tR of (0, BR.v)(JR)) {
                                const JR = vG(lG(tR.blocks)).map((JR => {
                                  if ("block" === JR.kind) return JR;
                                  return {
                                    kind: "names",
                                    names: JR.names.map((JR => {
                                      var yR, uR;
                                      const ZR = xG(RR, JR.name);
                                      let qR = ZR;
                                      for (let RR = 2; GR.has(qR); RR++) qR = `${ZR}-${RR}`;
                                      return GR.add(qR), {
                                        ...JR,
                                        anchor: qR,
                                        heading: null !== (yR = null === (uR = tR.heading) || void 0 === uR ? void 0 : uR.text) && void 0 !== yR ? yR : ""
                                      }
                                    })),
                                    isSongs: JR.isSongs
                                  }
                                }));
                                yR.set(tR.blocks, JR)
                              }
                              NG.set(JR, yR)
                            }
                            const tR = yR.get(GR);
                            if (!tR) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return tR
                          }
                          const HG = "/textures/docs/skinPreviews",
                            oG = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var cG = GR(2997),
                            PG = GR(3017);

                          function IG(RR) {
                            return Object.hasOwn(cG.h, RR) ? cG.h[RR] : null
                          }
                          const mG = {
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
                            blendMode: PG.c.Standard
                          };

                          function zG(RR, JR, GR) {
                            return JR + (GR - JR) * RR()
                          }

                          function SG(RR, JR, GR) {
                            return RR + (JR - RR) * GR
                          }

                          function jG(RR) {
                            return RR.length > 0 && "timeFraction" in RR[0]
                          }

                          function dG(RR, JR) {
                            if (0 === RR.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!jG(RR.colorGradients)) {
                              const GR = RR.colorGradients,
                                {
                                  color: yR
                                } = GR[Math.floor(JR() * GR.length) % GR.length];
                              return [{
                                at: 0,
                                colour: [yR[0] / 255, yR[1] / 255, yR[2] / 255, 1]
                              }]
                            }
                            return [...RR.colorGradients].sort(((RR, JR) => RR.timeFraction - JR.timeFraction)).map((RR => {
                              var GR, yR, tR;
                              const uR = RR.minColor,
                                ZR = null !== (GR = RR.maxColor) && void 0 !== GR ? GR : uR,
                                qR = JR(),
                                iR = [SG(uR[0], ZR[0], qR) / 255, SG(uR[1], ZR[1], qR) / 255, SG(uR[2], ZR[2], qR) / 255, SG(null !== (yR = uR[3]) && void 0 !== yR ? yR : 1, null !== (tR = ZR[3]) && void 0 !== tR ? tR : 1, qR)];
                              return {
                                at: RR.timeFraction,
                                colour: iR
                              }
                            }))
                          }

                          function EG(RR, JR, GR, yR) {
                            const tR = zG(yR, RR.minEmitPower, RR.maxEmitPower),
                              uR = JR => zG(yR, Math.min(RR.dir1[JR], RR.dir2[JR]), Math.max(RR.dir1[JR], RR.dir2[JR])) * tR,
                              ZR = [...RR.velocityGradients].sort(((RR, JR) => RR.timeFraction - JR.timeFraction)).map((RR => ({
                                at: RR.timeFraction,
                                factor: zG(yR, RR.factor, RR.factor2)
                              })));
                            return {
                              pos: [zG(yR, JR[0], GR[0]), zG(yR, JR[1], GR[1]), zG(yR, JR[2], GR[2])],
                              dir: [uR(0), uR(1), uR(2)],
                              age: 0,
                              life: zG(yR, RR.minLifeTime, RR.maxLifeTime),
                              size: zG(yR, RR.minSize, RR.maxSize),
                              colours: dG(RR, yR),
                              velocityFactors: ZR
                            }
                          }

                          function YG(RR, JR, GR, yR) {
                            if (JR < RR[0].at) return GR(Math.min(1, RR.length - 1));
                            for (let tR = 0; tR < RR.length - 1; tR++)
                              if (JR <= RR[tR + 1].at) {
                                const uR = RR[tR + 1].at - RR[tR].at;
                                return yR(GR(tR), GR(tR + 1), uR > 0 ? (JR - RR[tR].at) / uR : 1)
                              } return GR(RR.length - 1)
                          }

                          function kG(RR) {
                            return YG(RR.colours, RR.age / RR.life, (JR => RR.colours[JR].colour), ((RR, JR, GR) => [SG(RR[0], JR[0], GR), SG(RR[1], JR[1], GR), SG(RR[2], JR[2], GR), SG(RR[3], JR[3], GR)]))
                          }

                          function QG(RR, JR, GR) {
                            if (RR.age += GR, RR.age >= RR.life) return !1;
                            const yR = function(RR) {
                              return 0 === RR.velocityFactors.length ? 1 : YG(RR.velocityFactors, RR.age / RR.life, (JR => RR.velocityFactors[JR].factor), SG)
                            }(RR) * GR;
                            for (let uR = 0; uR < 3; uR++) {
                              var tR;
                              RR.pos[uR] += RR.dir[uR] * yR, RR.dir[uR] += (null !== (tR = JR[uR]) && void 0 !== tR ? tR : 0) * GR
                            }
                            return !0
                          }

                          function FG(RR) {
                            return String(Math.round(1e6 * RR) / 1e6)
                          }

                          function TG(RR) {
                            return `[${RR.map(FG).join(", ")}]`
                          }

                          function sG(RR, JR) {
                            const GR = `${JR}    `;
                            return `[\n${(jG(RR)?RR.map((RR=>{const JR=[`${GR}    timeFraction: ${FG(RR.timeFraction)},`,`${GR}    minColor: ${TG(RR.minColor)},`];return RR.maxColor&&JR.push(`${GR}    maxColor: ${TG(RR.maxColor)},`),`${GR}{\n${JR.join("\n")}\n${GR}},`})):RR.map((RR=>`
                            $ {
                              GR
                            } {
                              color: $ {
                                TG(RR.color)
                              }
                            }, `))).join("\n")}\n${JR}]`
                          }
                          const hG = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            Ry = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const Jy = .6;

                          function Gy(RR, JR) {
                            return `${JR?"song":"sound"}:${RR}`
                          }
                          let yy = {
                              track: null,
                              volume: Jy
                            },
                            ty = null,
                            uy = 0,
                            Zy = 0;
                          const qy = new Set;

                          function iy(RR) {
                            yy = {
                              ...yy,
                              ...RR
                            }, qy.forEach((RR => {
                              RR()
                            }))
                          }

                          function fy(RR) {
                            yy.track && iy({
                              track: {
                                ...yy.track,
                                ...RR
                              }
                            })
                          }

                          function Vy(RR) {
                            const [JR, GR] = (0, yR.useState)((() => RR(yy))), tR = (0, yR.useRef)(RR);
                            return tR.current = RR, (0, yR.useEffect)((() => {
                              const RR = () => {
                                GR((() => tR.current(yy)))
                              };
                              return qy.add(RR), RR(), () => {
                                qy.delete(RR)
                              }
                            }), []), JR
                          }

                          function Ky() {
                            uy++;
                            const RR = ty;
                            ty = null, null === RR || void 0 === RR || RR.stop()
                          }

                          function wy(RR, JR) {
                            let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            Ky();
                            const tR = uy,
                              {
                                track: uR
                              } = yy,
                              ZR = uR && uR.name === RR && uR.isSong === JR ? uR.duration : 0;
                            Zy = yR, iy({
                              track: {
                                name: RR,
                                isSong: JR,
                                status: "loading",
                                duration: ZR
                              }
                            }), Promise.all([GR.e(252), GR.e(284)]).then((() => GR(41339))).then((GR => {
                              let {
                                playDocsSound: uR
                              } = GR;
                              tR === uy && (ty = uR(RR, JR, yy.volume, yR, {
                                onPlay: RR => {
                                  tR === uy && fy({
                                    status: "playing",
                                    duration: RR
                                  })
                                },
                                onEnd: RR => {
                                  var JR, GR;
                                  tR === uy && (ty = null, RR ? iy({
                                    track: null
                                  }) : (Zy = null !== (JR = null === (GR = yy.track) || void 0 === GR ? void 0 : GR.duration) && void 0 !== JR ? JR : 0, fy({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((JR => {
                              console.error(`Could not play docs sound ${RR}`, JR), tR === uy && iy({
                                track: null
                              })
                            }))
                          }

                          function ry() {
                            const {
                              track: RR
                            } = yy;
                            if (!RR) return;
                            if ("playing" === RR.status && ty) return Zy = ty.vW(), ty.pause(), void fy({
                              status: "paused"
                            });
                            if ("loading" === RR.status) return Ky(), void fy({
                              status: "paused"
                            });
                            if (ty) return void ty.resume();
                            const JR = RR.duration > 0 && Zy >= RR.duration - .05;
                            wy(RR.name, RR.isSong, JR ? 0 : Zy)
                          }

                          function ey() {
                            var RR;
                            return ty && "playing" === (null === (RR = yy.track) || void 0 === RR ? void 0 : RR.status) ? ty.vW() : Zy
                          }

                          function ay(RR) {
                            var JR;
                            null === (JR = ty) || void 0 === JR || JR.setVolume(RR), iy({
                              volume: RR
                            })
                          }

                          function Ly() {
                            Ky(), Zy = 0, iy({
                              track: null
                            })
                          }
                          const ny = (0, yR.createContext)(null);
                          let Uy = null;

                          function Wy() {
                            const [RR, JR] = (0, yR.useState)(null);
                            return (0, yR.useEffect)((() => {
                              let RR = !1;
                              return Uy ??= Promise.all([GR.e(85), GR.e(89), GR.e(86), GR.e(87), GR.e(88), GR.e(124), GR.e(36), GR.e(258)]).then((() => GR(41331))), Uy.then((GR => {
                                RR || JR(GR)
                              }), (RR => {
                                console.error("Could not load the docs gallery's textures", RR), Uy = null
                              })), () => {
                                RR = !0
                              }
                            }), []), RR
                          }
                          const Ay = 24,
                            Cy = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function Xy(RR, JR) {
                            const GR = "skins" === RR ? function(RR, JR) {
                              const GR = oG.find((JR => RR.startsWith(JR.heading)));
                              return GR ? function(RR, JR) {
                                return `${RR}-${JR}`
                              }(GR.prefix, JR) : null
                            }(JR.heading, JR.name) : null;
                            return null === GR ? null : `${HG}/${GR}.webp`
                          }

                          function My(RR) {
                            let {
                              kind: JR,
                              entry: GR,
                              assets: tR,
                              renderedUrl: ZR
                            } = RR;
                            const {
                              name: qR
                            } = GR, [iR, fR] = (0, yR.useState)(!1);
                            if ("icons" === JR && IJ(qR)) return (0, eR.jsx)(AG.d, {
                              className: "DocsTileIcon",
                              name: qR
                            });
                            let VR = null;
                            var KR;
                            if ("icons" === JR) VR = null !== (KR = null === tR || void 0 === tR ? void 0 : tR.getIngameIconUrl(qR)) && void 0 !== KR ? KR : null;
                            else if ("particles" === JR) {
                              var wR, rR, aR;
                              VR = null !== (wR = null === tR || void 0 === tR ? void 0 : tR.getParticleTextureUrl(null !== (rR = null === (aR = IG(qR)) || void 0 === aR ? void 0 : aR.texture) && void 0 !== rR ? rR : qR)) && void 0 !== wR ? wR : null
                            } else "skins" === JR && (VR = null !== ZR && void 0 !== ZR ? ZR : Cy.test(qR) ? `/textures/charSkins/previews/${qR}_preview.png` : null);
                            return !VR || iR ? (0, eR.jsx)(LR, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === JR ? "person" : "image"
                            }) : (0, eR.jsx)("img", {
                              className: uR()("DocsTileImage", {
                                Pixelated: "skins" !== JR
                              }),
                              src: VR,
                              srcSet: VR === ZR ? `${VR} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${VR}`), fR(!0)
                              }
                            })
                          }

                          function By(RR) {
                            let {
                              entry: JR,
                              isSong: GR
                            } = RR;
                            const yR = Vy((RR => {
                                let {
                                  track: yR
                                } = RR;
                                return (null === yR || void 0 === yR ? void 0 : yR.name) === JR.name && yR.isSong === GR ? yR.status : null
                              })),
                              tR = null !== yR && "paused" !== yR;
                            return (0, eR.jsxs)("button", {
                              type: "button",
                              id: JR.anchor,
                              className: uR()("DocsSoundTile", {
                                Playing: tR
                              }),
                              "data-docs-track": Gy(JR.name, GR),
                              "aria-label": tR ? `Pause ${JR.name}` : `Play ${JR.name}`,
                              onClick: () => {
                                null !== yR ? ry() : wy(JR.name, GR)
                              },
                              children: [(0, eR.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, eR.jsx)(LR, {
                                  name: tR ? "pause" : "play"
                                })
                              }), (0, eR.jsx)("code", {
                                className: "DocsSoundName",
                                children: JR.name
                              }), JR.caption && (0, eR.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: JR.caption
                              })]
                            })
                          }

                          function ly(RR) {
                            let {
                              kind: JR,
                              names: GR,
                              isSongs: tR
                            } = RR;
                            const ZR = Wy(),
                              [qR, iR] = UR(),
                              fR = !1 === (null === qR || void 0 === qR ? void 0 : qR.failed) ? qR.text : null,
                              VR = (0, yR.useContext)(ny),
                              [KR, wR] = (0, yR.useState)(""),
                              rR = KR.trim().toLowerCase(),
                              aR = rR ? GR.filter((RR => RR.name.toLowerCase().includes(rR))) : GR;
                            return (0, eR.jsxs)("div", {
                              className: "DocsGallery",
                              children: [GR.length > Ay && (0, eR.jsx)(WG, {
                                className: "DocsGalleryFilter",
                                value: KR,
                                placeholder: `Filter ${GR.length} names\u2026`,
                                label: "Filter names",
                                onChange: wR,
                                count: rR ? {
                                  visible: aR.length,
                                  total: GR.length
                                } : null
                              }), (0, eR.jsx)("div", {
                                className: uR()("DocsGalleryGrid", `Kind-${JR}`, {
                                  Songs: tR
                                }),
                                children: aR.map((RR => {
                                  if ("sounds" === JR) return (0, eR.jsx)(By, {
                                    entry: RR,
                                    isSong: tR
                                  }, RR.anchor);
                                  if (VR && "particles" === JR && IG(RR.name)) return (0, eR.jsxs)("button", {
                                    type: "button",
                                    id: RR.anchor,
                                    className: uR()("DocsTile Previewable", {
                                      Copied: fR === RR.name
                                    }),
                                    title: `Play "${RR.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      VR(RR.name), iR(RR.name)
                                    },
                                    children: [(0, eR.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, eR.jsx)(My, {
                                        kind: JR,
                                        entry: RR,
                                        assets: ZR,
                                        renderedUrl: null
                                      }), (0, eR.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, eR.jsx)(LR, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, eR.jsx)("span", {
                                      className: "DocsTileName",
                                      children: fR === RR.name ? "Copied!" : RR.name
                                    })]
                                  }, RR.anchor);
                                  const GR = Xy(JR, RR);
                                  return (0, eR.jsxs)("button", {
                                    type: "button",
                                    id: RR.anchor,
                                    className: uR()("DocsTile", {
                                      Copied: fR === RR.name
                                    }),
                                    title: `Copy "${RR.name}"`,
                                    onClick: () => {
                                      iR(RR.name)
                                    },
                                    children: [(0, eR.jsx)("span", {
                                      className: uR()("DocsTilePreview", {
                                        Rendered: null !== GR
                                      }),
                                      children: (0, eR.jsx)(My, {
                                        kind: JR,
                                        entry: RR,
                                        assets: ZR,
                                        renderedUrl: GR
                                      })
                                    }), (0, eR.jsx)("span", {
                                      className: "DocsTileName",
                                      children: fR === RR.name ? "Copied!" : RR.name
                                    })]
                                  }, RR.anchor)
                                }))
                              })]
                            })
                          }

                          function py(RR) {
                            let {
                              kind: JR,
                              content: GR,
                              blocks: yR
                            } = RR;
                            return (0, eR.jsx)(eR.Fragment, {
                              children: DG(JR, GR, yR).map(((RR, GR) => "block" === RR.kind ? (0, eR.jsx)(wG, {
                                block: RR.block
                              }, GR) : (0, eR.jsx)(ly, {
                                kind: JR,
                                names: RR.names,
                                isSongs: RR.isSongs
                              }, GR)))
                            })
                          }
                          const gy = [{
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

                          function by(RR) {
                            let {
                              cards: JR = gy,
                              label: GR = "Start here"
                            } = RR;
                            const tR = (0, yR.useContext)(rJ);
                            return (0, eR.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": GR,
                              children: JR.map((RR => {
                                let {
                                  pageId: JR,
                                  countNoun: GR
                                } = RR;
                                const yR = PR(JR);
                                return (0, eR.jsxs)(ZR.b, {
                                  to: dR(tR, yR),
                                  className: "DocsLandingCard",
                                  children: [(0, eR.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, eR.jsx)(LR, {
                                      name: yR.icon
                                    })
                                  }), (0, eR.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: yR.title
                                  }), (0, eR.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: yR.summary
                                  }), GR && (0, eR.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [mR(yR).sections.length, " ", GR]
                                  })]
                                }, JR)
                              }))
                            })
                          }
                          const vy = 240;

                          function Oy(RR) {
                            let {
                              faces: JR
                            } = RR;
                            return (0, eR.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, eR.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${JR.top}")`
                                }
                              }), (0, eR.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${JR.left}")`
                                }
                              }), (0, eR.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${JR.right}")`
                                }
                              })]
                            })
                          }

                          function xy(RR) {
                            let {
                              src: JR
                            } = RR;
                            const [GR, tR] = (0, yR.useState)(!1);
                            return GR ? null : (0, eR.jsx)("img", {
                              src: JR,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${JR}`), tR(!0)
                              }
                            })
                          }

                          function Ny(RR) {
                            let {
                              kind: JR
                            } = RR;
                            const GR = UG(JR),
                              tR = Wy(),
                              ZR = (0, qR.r)(),
                              [iR, fR] = (0, yR.useState)(""),
                              [VR, KR] = (0, yR.useState)(null),
                              [wR, rR] = (0, yR.useState)(vy),
                              [aR, nR] = (0, yR.useState)(null),
                              UR = (0, yR.useRef)(null),
                              AR = iR.trim().toLowerCase();
                            (0, yR.useEffect)((() => {
                              const RR = (0, BR.r)(ZR.hash),
                                yR = GR.entries.find((GR => xG(JR, GR.name) === RR));
                              if (yR) UR.current = yR.name, fR(yR.name), KR(null), nR(yR.name);
                              else if (null !== UR.current) {
                                const RR = UR.current;
                                UR.current = null, fR((JR => JR === RR ? "" : JR)), nR(null)
                              }
                            }), [GR, JR, ZR.hash, ZR.key]), (0, yR.useEffect)((() => {
                              var RR;
                              null !== aR && (null === (RR = document.getElementById(xG(JR, aR))) || void 0 === RR || RR.scrollIntoView({
                                block: "center"
                              }))
                            }), [JR, aR]);
                            const CR = GR.entries.filter((RR => (!AR || RR.name.toLowerCase().includes(AR)) && (!VR || RR.variants.includes(VR))));
                            return (0, eR.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [GR.notes.length > 0 && (0, eR.jsx)("div", {
                                className: "DocsProse",
                                children: GR.notes.map((RR => (0, eR.jsx)("p", {
                                  children: RR
                                }, RR)))
                              }), GR.legend.length > 0 && (0, eR.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, eR.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, eR.jsx)("thead", {
                                    children: (0, eR.jsxs)("tr", {
                                      children: [(0, eR.jsx)("th", {
                                        children: "Code"
                                      }), (0, eR.jsx)("th", {
                                        children: "Variant"
                                      }), (0, eR.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, eR.jsx)("tbody", {
                                    children: GR.legend.map((RR => (0, eR.jsxs)("tr", {
                                      children: [(0, eR.jsx)("td", {
                                        children: (0, eR.jsx)("button", {
                                          type: "button",
                                          className: uR()("DocsVariantChip", {
                                            Active: VR === RR.code
                                          }),
                                          "aria-pressed": VR === RR.code,
                                          title: `Show only ${JR} with ${RR.meaning} variants`,
                                          onClick: () => {
                                            KR(VR === RR.code ? null : RR.code)
                                          },
                                          children: RR.code
                                        })
                                      }), (0, eR.jsx)("td", {
                                        children: RR.meaning
                                      }), (0, eR.jsx)("td", {
                                        children: (0, eR.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: RR.usage
                                        })
                                      })]
                                    }, RR.code)))
                                  })]
                                })
                              }), GR.examples.length > 0 && (0, eR.jsx)(MR, {
                                lang: "text",
                                code: GR.examples.join("\n")
                              }), (0, eR.jsx)(WG, {
                                className: "DocsFilterBar",
                                value: iR,
                                placeholder: `Search ${GR.entries.length} ${JR}\u2026`,
                                label: `Search ${JR}`,
                                onChange: RR => {
                                  fR(RR), rR(vy)
                                },
                                count: AR || VR ? {
                                  visible: CR.length,
                                  total: GR.entries.length
                                } : null,
                                children: VR && (0, eR.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    KR(null)
                                  },
                                  children: [VR, " ", (0, eR.jsx)(LR, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, eR.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: CR.slice(0, wR).map((RR => {
                                  const GR = "blocks" === JR ? null === tR || void 0 === tR ? void 0 : tR.getBlockFaces(RR.name) : null,
                                    yR = tR && !GR ? tR.getItemTextureUrl(RR.name) : null;
                                  return (0, eR.jsxs)("div", {
                                    id: xG(JR, RR.name),
                                    className: uR()("DocsCatalogueTile", {
                                      Linked: RR.name === aR
                                    }),
                                    children: [(0, eR.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [GR && (0, eR.jsx)(Oy, {
                                        faces: GR
                                      }), yR && (0, eR.jsx)(xy, {
                                        src: yR
                                      })]
                                    }), (0, eR.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: RR.name
                                    }), RR.variants.length > 0 && (0, eR.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: RR.variants.map((RR => (0, eR.jsx)("span", {
                                        children: RR
                                      }, RR)))
                                    }), (0, eR.jsx)(WR, {
                                      text: RR.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, RR.name)
                                }))
                              }), CR.length > wR && (0, eR.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  rR(CR.length)
                                },
                                children: ["Show all ", CR.length]
                              }), 0 === CR.length && (0, eR.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", JR, " match."]
                              })]
                            })
                          }
                          var Dy = GR(5707),
                            Hy = GR(1746);
                          const oy = .95 * Dy.d;

                          function cy(RR) {
                            return /^\s*```/.test(RR)
                          }

                          function Py(RR, JR) {
                            const GR = [
                              []
                            ];
                            let yR = !1;
                            for (const tR of RR.split("\n")) !yR && JR(tR) && GR.at(-1).length > 0 && GR.push([]), cy(tR) && (yR = !yR), GR.at(-1).push(tR);
                            return GR.map((RR => RR.join("\n").trim())).filter(Boolean)
                          }

                          function Iy(RR, JR) {
                            const GR = `${"#".repeat(JR)} `,
                              yR = [];
                            let tR = !1;
                            for (const uR of RR.split("\n")) cy(uR) ? tR = !tR : !tR && uR.startsWith(GR) && yR.push(uR.slice(GR.length).trim());
                            return yR
                          }

                          function my(RR) {
                            return RR.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class zy {
                            constructor(RR, JR) {
                              this.origin = JR, this.pages = void 0, this.partPaths = new Map;
                              const GR = RR.map((RR => {
                                const JR = JR => this.resolveLinks(RR, JR).length,
                                  GR = function(RR, JR) {
                                    const GR = RR.map((RR => JR(RR.markdown) + 2)),
                                      yR = GR.reduce(((RR, JR) => RR + JR), 0),
                                      tR = yR / Math.ceil(yR / oy),
                                      uR = [];
                                    let ZR = 0;
                                    return RR.forEach(((RR, JR) => {
                                      const yR = GR[JR];
                                      (0 === uR.length || ZR + yR > oy || ZR + yR / 2 > tR) && (uR.push([]), ZR = 0), uR.at(-1).push(RR), ZR += yR
                                    })), uR
                                  }(function(RR, JR) {
                                    return Py(RR, (RR => RR.startsWith("## "))).flatMap((RR => {
                                      var GR;
                                      const yR = null !== (GR = Iy(RR, 2)[0]) && void 0 !== GR ? GR : "";
                                      if (JR(RR) <= oy) return [{
                                        markdown: RR,
                                        section: yR
                                      }];
                                      let tR = !1,
                                        uR = "";
                                      return Py(RR, (RR => {
                                        const JR = tR && "" !== RR.trim();
                                        return tR = "" === RR.trim(), JR
                                      })).map((RR => {
                                        var JR;
                                        const GR = Iy(RR, 3),
                                          tR = RR.startsWith("### ") ? GR[0] : uR;
                                        return uR = null !== (JR = GR.at(-1)) && void 0 !== JR ? JR : uR, {
                                          markdown: RR,
                                          section: yR || tR
                                        }
                                      }))
                                    }))
                                  }(my(RR), JR), JR);
                                return {
                                  page: RR,
                                  groups: GR.length > 1 ? GR : []
                                }
                              }));
                              for (const {
                                  page: yR,
                                  groups: tR
                                }
                                of GR) tR.forEach(((RR, JR) => {
                                const GR = (0, Dy.q)(yR.slug, JR);
                                for (const tR of RR.flatMap((RR => [...Iy(RR.markdown, 2), ...Iy(RR.markdown, 3)]))) {
                                  const RR = `${yR.id}#${(0,BR.s)(tR)}`;
                                  this.partPaths.has(RR) || this.partPaths.set(RR, GR)
                                }
                              }));
                              this.pages = GR.map((RR => {
                                let {
                                  page: JR,
                                  groups: GR
                                } = RR;
                                return {
                                  page: JR,
                                  path: (0, Dy.o)(JR.slug),
                                  markdown: `# ${JR.title}\n\n${this.resolveLinks(JR,my(JR))}\n`,
                                  parts: GR.map(((RR, yR) => this.renderPart(JR, RR, yR, GR.length)))
                                }
                              }))
                            }
                            url(RR) {
                              return `${this.origin}${RR}`
                            }
                            getPage(RR) {
                              return this.pages.find((JR => JR.page.id === RR))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((RR => (RR.parts.length > 0 ? RR.parts : [{
                                path: RR.path,
                                label: "",
                                markdown: RR.markdown
                              }]).filter((RR => RR.markdown.length > Dy.d))))
                            }
                            markdownUrl(RR, JR) {
                              const GR = JR && this.partPaths.get(`${RR.id}#${JR}`) || (0, Dy.o)(RR.slug);
                              return this.url(JR ? `${GR}#${JR}` : GR)
                            }
                            resolveLinks(RR, JR) {
                              return JR.replace(/\]\((#[^)]+)\)/g, ((JR, GR) => {
                                var yR;
                                const tR = null !== (yR = SR(GR)) && void 0 !== yR ? yR : this.samePageTarget(RR, GR);
                                return tR ? `](${this.markdownUrl(tR.page,tR.anchor)})` : JR
                              }))
                            }
                            samePageTarget(RR, JR) {
                              const GR = (0, BR.s)(JR.slice(1));
                              return zR(RR, GR) ? {
                                page: RR,
                                anchor: GR
                              } : null
                            }
                            renderPart(RR, JR, GR, yR) {
                              const tR = function(RR) {
                                  const JR = RR.map((RR => RR.section)).filter(Boolean);
                                  if (0 === JR.length) return "";
                                  const GR = JR[0],
                                    yR = JR.at(-1);
                                  return GR === yR ? GR : `${GR} to ${yR}`
                                }(JR),
                                uR = JR.map((RR => RR.markdown)).join("\n\n"),
                                ZR = tR ? `It covers ${tR}. ` : "",
                                qR = `Part ${GR+1} of ${yR} of [${RR.title}](${this.url((0,Dy.o)(RR.slug))}). ${ZR}[llms.txt](${this.url(Dy.i)}) lists every part.`;
                              return {
                                path: (0, Dy.q)(RR.slug, GR),
                                label: tR,
                                markdown: `# ${RR.title}, part ${GR+1} of ${yR}\n\n${qR}\n\n${this.resolveLinks(RR,uR)}\n`
                              }
                            }
                            llmsTxt(RR) {
                              const JR = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${Sy(Dy.d)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const GR of cR) {
                                JR.push("", `## ${GR.title}`, "");
                                for (const RR of GR.pageIds) {
                                  const GR = this.getPage(RR),
                                    {
                                      page: yR,
                                      parts: tR
                                    } = GR,
                                    uR = `About ${Sy(GR.markdown.length)} tokens${tR.length>0?`, in ${tR.length} parts:`:"."}`;
                                  JR.push(`- [${yR.title}](${this.url(GR.path)}): ${yR.summary} ${uR}`), tR.forEach(((RR, GR) => {
                                    JR.push(`  - [Part ${GR+1}${RR.label?`: ${RR.label}`:""}](${this.url(RR.path)})`)
                                  }))
                                }
                              }
                              return JR.push("", "## Optional", "", `- [Every page in one file](${this.url(Dy.g)}): About ${Sy(RR.length)} tokens, for a model with a large context window.`, ""), JR.join("\n")
                            }
                            llmsFullTxt() {
                              return cR.flatMap((RR => RR.pageIds.map((RR => this.getPage(RR).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const RR = this.llmsFullTxt(),
                                JR = this.llmsTxt(RR),
                                GR = new Map([
                                  [Dy.m, JR],
                                  [Dy.i, JR],
                                  [Dy.g, RR]
                                ]);
                              for (const yR of this.pages) {
                                GR.set(yR.path, yR.markdown);
                                for (const RR of yR.parts) GR.set(RR.path, RR.markdown)
                              }
                              return GR
                            }
                          }

                          function Sy(RR) {
                            return `${Math.max(1,Math.round(RR/4e3))}K`
                          }
                          let jy = null;

                          function dy() {
                            return jy ??= new zy(oR, Hy.c), jy
                          }
                          var Ey = GR(5710);
                          const Yy = [Ey.d, Ey.m];

                          function ky(RR) {
                            return dy().getPage(RR.id).parts.length > 0 ? `Read ${Dy.l}, then the parts of the Bloxd Code API's ${RR.title} page it lists, so I can ask questions about it.` : `Read ${Hy.c}${(0,Dy.o)(RR.slug)} so I can ask questions about it. ${Ey.j}`
                          }

                          function Qy(RR) {
                            let {
                              page: JR
                            } = RR;
                            const [GR, yR] = UR();
                            return (0, eR.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, eR.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  yR(dy().getPage(JR.id).markdown)
                                },
                                children: [(0, eR.jsx)(LR, {
                                  name: !1 === (null === GR || void 0 === GR ? void 0 : GR.failed) ? "check" : "copy"
                                }), (0, eR.jsx)("span", {
                                  children: GR ? GR.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), Yy.map((RR => (0, eR.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, Ey.b)(RR, ky(JR)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, eR.jsx)(LR, {
                                  name: "external-link"
                                }), (0, eR.jsxs)("span", {
                                  children: ["Open in ", RR.name]
                                })]
                              }, RR.name)))]
                            })
                          }

                          function Fy(RR) {
                            return `#${[0,1,2].map((JR=>Math.round(Math.min(255,Math.max(0,RR[JR]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function Ty(RR) {
                            return [parseInt(RR.slice(1, 3), 16), parseInt(RR.slice(3, 5), 16), parseInt(RR.slice(5, 7), 16)]
                          }

                          function sy(RR) {
                            let {
                              label: JR,
                              min: GR,
                              max: yR,
                              step: tR,
                              low: uR,
                              high: ZR,
                              onChange: qR
                            } = RR;
                            return (0, eR.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, eR.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, eR.jsx)("span", {
                                  children: JR
                                }), (0, eR.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: uR === ZR ? uR : `${uR}\u2013${ZR}`
                                })]
                              }), (0, eR.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, eR.jsx)("input", {
                                  type: "range",
                                  min: GR,
                                  max: yR,
                                  step: tR,
                                  value: Math.min(yR, uR),
                                  "aria-label": `Minimum ${JR.toLowerCase()}`,
                                  onChange: RR => {
                                    const JR = Number(RR.target.value);
                                    qR(JR, Math.max(JR, ZR))
                                  }
                                }), (0, eR.jsx)("input", {
                                  type: "range",
                                  min: GR,
                                  max: yR,
                                  step: tR,
                                  value: Math.min(yR, ZR),
                                  "aria-label": `Maximum ${JR.toLowerCase()}`,
                                  onChange: RR => {
                                    const JR = Number(RR.target.value);
                                    qR(Math.min(JR, uR), JR)
                                  }
                                })]
                              })]
                            })
                          }

                          function hy(RR) {
                            let {
                              label: JR,
                              min: GR,
                              max: yR,
                              step: tR,
                              value: uR,
                              onChange: ZR,
                              format: qR = String
                            } = RR;
                            return (0, eR.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, eR.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, eR.jsx)("span", {
                                  children: JR
                                }), (0, eR.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: qR(uR)
                                })]
                              }), (0, eR.jsx)("input", {
                                type: "range",
                                min: GR,
                                max: yR,
                                step: tR,
                                value: Math.min(yR, Math.max(GR, uR)),
                                "aria-label": JR,
                                onChange: RR => {
                                  ZR(Number(RR.target.value))
                                }
                              })]
                            })
                          }

                          function Rt(RR) {
                            let {
                              opts: JR,
                              onChange: GR
                            } = RR;
                            const yR = JR.colorGradients;
                            if (!jG(yR)) return (0, eR.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, eR.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, eR.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, eR.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: yR.map(((RR, JR) => (0, eR.jsx)("input", {
                                  type: "color",
                                  value: Fy(RR.color),
                                  "aria-label": `Colour ${JR+1}`,
                                  onChange: RR => {
                                    const tR = [...yR];
                                    tR[JR] = {
                                      color: Ty(RR.target.value)
                                    }, GR(tR)
                                  }
                                }, JR)))
                              })]
                            });
                            const tR = (RR, JR) => {
                              const tR = [...yR];
                              tR[RR] = JR, GR(tR)
                            };
                            return (0, eR.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, eR.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, eR.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, eR.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), yR.map(((RR, JR) => {
                                var GR;
                                const yR = null !== (GR = RR.maxColor) && void 0 !== GR ? GR : RR.minColor;
                                return (0, eR.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, eR.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * RR.timeFraction), "%"]
                                  }), (0, eR.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${Fy(RR.minColor)}, ${Fy(yR)})`
                                    }
                                  }), (0, eR.jsx)("input", {
                                    type: "color",
                                    value: Fy(RR.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*RR.timeFraction)}%`,
                                    onChange: GR => {
                                      tR(JR, {
                                        ...RR,
                                        minColor: [...Ty(GR.target.value), RR.minColor[3]]
                                      })
                                    }
                                  }), (0, eR.jsx)("input", {
                                    type: "color",
                                    value: Fy(yR),
                                    "aria-label": `Maximum colour at ${Math.round(100*RR.timeFraction)}%`,
                                    onChange: GR => {
                                      tR(JR, {
                                        ...RR,
                                        maxColor: [...Ty(GR.target.value), yR[3]]
                                      })
                                    }
                                  })]
                                }, JR)
                              }))]
                            })
                          }
                          const Jt = [-.5, -.5, -.5],
                            Gt = [.5, .5, .5],
                            yt = [0, 1, 2, 3, 4, 5, 6, 7].map((RR => [1 & RR ? Gt[0] : Jt[0], 2 & RR ? Gt[1] : Jt[1], 4 & RR ? Gt[2] : Jt[2]]));class tt {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(RR, JR, GR, yR) {
                              const tR = Math.round(31 * JR),
                                uR = Math.round(31 * GR),
                                ZR = Math.round(31 * yR),
                                qR = `${tR}|${uR}|${ZR}`;
                              let iR = this.tints.get(RR);
                              (!iR || iR.size > 2e3) && (iR = new Map, this.tints.set(RR, iR));
                              let fR = iR.get(qR);
                              if (fR) return fR;
                              fR = document.createElement("canvas"), fR.width = RR.naturalWidth || 16, fR.height = RR.naturalHeight || 16;
                              const VR = fR.getContext("2d");
                              return VR ? (VR.imageSmoothingEnabled = !1, VR.drawImage(RR, 0, 0, fR.width, fR.height), VR.globalCompositeOperation = "multiply", VR.fillStyle = `rgb(${tR/31*255}, ${uR/31*255}, ${ZR/31*255})`, VR.fillRect(0, 0, fR.width, fR.height), VR.globalCompositeOperation = "destination-in", VR.drawImage(RR, 0, 0, fR.width, fR.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), iR.set(qR, fR), fR
                            }
                          }

                          function ut(RR) {
                            let {
                              opts: JR,
                              textureUrl: GR,
                              burst: tR,
                              paused: uR
                            } = RR;
                            const ZR = (0, yR.useRef)(null),
                              qR = (0, yR.useRef)(JR);
                            qR.current = JR;
                            const iR = (0, yR.useRef)(uR);
                            iR.current = uR;
                            const fR = (0, yR.useRef)(null),
                              VR = (0, yR.useRef)(null),
                              KR = (0, yR.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(RR) {
                                let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const GR = [-.5, -.5, -.5],
                                  yR = [.5, .5, .5];
                                let tR = .5;
                                for (let uR = 0; uR < 40; uR++) {
                                  const uR = EG(RR, GR, yR, JR),
                                    ZR = Math.max(uR.life / 30, .001);
                                  for (; QG(uR, RR.gravity, ZR);) tR = Math.max(tR, Math.hypot(uR.pos[0], uR.pos[1], uR.pos[2]) + uR.size / 2)
                                }
                                return tR
                              }(JR)))), [JR]),
                              wR = (0, yR.useRef)(KR);
                            return wR.current = KR, (0, yR.useEffect)((() => {
                              if (fR.current = null, !GR) return;
                              const RR = new Image;
                              let JR = !1;
                              return RR.onload = () => {
                                JR || (fR.current = RR)
                              }, RR.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${GR}`)
                              }, RR.src = GR, () => {
                                JR = !0
                              }
                            }), [GR]), (0, yR.useEffect)((() => {
                              var RR;
                              null === (RR = VR.current) || void 0 === RR || RR.call(VR)
                            }), [JR, tR]), (0, yR.useEffect)((() => {
                              const RR = ZR.current,
                                JR = null === RR || void 0 === RR ? void 0 : RR.getContext("2d");
                              if (!RR || !JR) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const GR = new tt;
                              let yR = [],
                                tR = 0,
                                uR = -.7,
                                KR = wR.current,
                                rR = performance.now(),
                                eR = 0,
                                aR = !0,
                                LR = null;
                              const nR = () => {
                                const RR = qR.current,
                                  JR = Math.min(400, Math.max(0, Math.ceil(RR.manualEmitCount)));
                                yR = [];
                                for (let GR = 0; GR < JR; GR++) yR.push(EG(RR, Jt, Gt, Math.random));
                                tR = 0
                              };
                              VR.current = nR, nR();
                              const UR = ZR => {
                                eR = requestAnimationFrame(UR);
                                const VR = Math.min(.05, (ZR - rR) / 1e3);
                                if (rR = ZR, !aR) return;
                                const WR = window.devicePixelRatio || 1,
                                  AR = Math.round(RR.clientWidth * WR),
                                  CR = Math.round(RR.clientHeight * WR);
                                if (0 === AR || 0 === CR) return;
                                RR.width === AR && RR.height === CR || (RR.width = AR, RR.height = CR);
                                const XR = qR.current;
                                null === LR && (uR += .18 * VR), KR += (wR.current - KR) * Math.min(1, 4 * VR);
                                const MR = .6 * VR;
                                yR = yR.filter((RR => QG(RR, XR.gravity, MR))), 0 !== yR.length || iR.current || (tR += VR, tR > .6 && nR());
                                const BR = function(RR, JR, GR, yR) {
                                  const tR = 3.2 * yR,
                                    uR = .44 * Math.min(RR, JR) * tR / yR,
                                    ZR = Math.cos(GR),
                                    qR = Math.sin(GR),
                                    iR = Math.cos(.42),
                                    fR = Math.sin(.42);
                                  return (GR, yR, VR) => {
                                    const KR = GR * qR + VR * ZR,
                                      wR = tR - (yR * fR + KR * iR);
                                    if (wR < .05) return null;
                                    const rR = uR / wR;
                                    return {
                                      x: RR / 2 + (GR * ZR - VR * qR) * rR,
                                      y: JR / 2 - (yR * iR - KR * fR) * rR,
                                      scale: rR,
                                      depth: wR
                                    }
                                  }
                                }(AR, CR, uR, KR);
                                ! function(RR, JR, GR, yR, tR) {
                                  const uR = RR.createLinearGradient(0, 0, 0, GR);
                                  uR.addColorStop(0, "#23262d"), uR.addColorStop(1, "#16181c"), RR.globalCompositeOperation = "source-over", RR.globalAlpha = 1, RR.fillStyle = uR, RR.fillRect(0, 0, JR, GR);
                                  const ZR = (JR, GR) => {
                                      const tR = yR(JR[0], JR[1], JR[2]),
                                        uR = yR(GR[0], GR[1], GR[2]);
                                      tR && uR && (RR.beginPath(), RR.moveTo(tR.x, tR.y), RR.lineTo(uR.x, uR.y), RR.stroke())
                                    },
                                    qR = Math.ceil(tR) + 1,
                                    iR = Jt[1];
                                  RR.lineWidth = 1, RR.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let fR = -qR; fR <= qR; fR++) ZR([fR + .5, iR, .5 - qR], [fR + .5, iR, qR + .5]), ZR([.5 - qR, iR, fR + .5], [qR + .5, iR, fR + .5]);
                                  RR.strokeStyle = "rgba(255, 255, 255, 0.28)", RR.setLineDash([4, 4]);
                                  for (const fR of yt)
                                    for (const RR of yt) {
                                      const JR = [0, 1, 2].filter((JR => fR[JR] !== RR[JR]));
                                      1 === JR.length && fR[JR[0]] < RR[JR[0]] && ZR(fR, RR)
                                    }
                                  RR.setLineDash([])
                                }(JR, AR, CR, BR, KR);
                                const lR = fR.current,
                                  pR = yR.map((RR => ({
                                    particle: RR,
                                    at: BR(RR.pos[0], RR.pos[1], RR.pos[2])
                                  }))).filter((RR => null !== RR.at)).sort(((RR, JR) => JR.at.depth - RR.at.depth));
                                JR.imageSmoothingEnabled = !1;
                                for (const RR of function(RR) {
                                    switch (RR) {
                                      case PG.c.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case PG.c.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case PG.c.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case PG.c.MultiplyAdd:
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
                                  }(XR.blendMode)) {
                                  JR.globalCompositeOperation = RR.operation;
                                  for (const {
                                      particle: yR,
                                      at: tR
                                    }
                                    of pR) {
                                    const [uR, ZR, qR, iR] = kG(yR), fR = Math.max(1, yR.size * tR.scale);
                                    JR.globalAlpha = RR.usesAlpha ? Math.min(1, Math.max(0, iR)) : 1, lR ? JR.drawImage(GR.get(lR, uR, ZR, qR), tR.x - fR / 2, tR.y - fR / 2, fR, fR) : (JR.fillStyle = `rgb(${255*uR}, ${255*ZR}, ${255*qR})`, JR.fillRect(tR.x - fR / 2, tR.y - fR / 2, fR, fR))
                                  }
                                }
                                JR.globalCompositeOperation = "source-over", JR.globalAlpha = 1
                              };
                              eR = requestAnimationFrame(UR);
                              const WR = new IntersectionObserver((RR => {
                                let [JR] = RR;
                                aR = JR.isIntersecting
                              }));
                              WR.observe(RR);
                              const AR = JR => {
                                  LR = JR.clientX, RR.setPointerCapture(JR.pointerId)
                                },
                                CR = RR => {
                                  null !== LR && (uR += .01 * (RR.clientX - LR), LR = RR.clientX)
                                },
                                XR = () => {
                                  LR = null
                                };
                              return RR.addEventListener("pointerdown", AR), RR.addEventListener("pointermove", CR), RR.addEventListener("pointerup", XR), RR.addEventListener("pointercancel", XR), () => {
                                cancelAnimationFrame(eR), WR.disconnect(), VR.current = null, RR.removeEventListener("pointerdown", AR), RR.removeEventListener("pointermove", CR), RR.removeEventListener("pointerup", XR), RR.removeEventListener("pointercancel", XR)
                              }
                            }), []), (0, eR.jsx)("canvas", {
                              ref: ZR,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${JR.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const Zt = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            qt = [{
                              mode: PG.c.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: PG.c.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: PG.c.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: PG.c.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: PG.c.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            it = (0, yR.forwardRef)((function(RR, JR) {
                              var GR, tR;
                              let {
                                textures: ZR
                              } = RR;
                              const qR = Wy(),
                                iR = (0, yR.useRef)(null),
                                [fR, VR] = (0, yR.useState)(mG),
                                [KR, wR] = (0, yR.useState)("example"),
                                [rR, aR] = (0, yR.useState)(0),
                                [nR, UR] = (0, yR.useState)(!1),
                                AR = RR => {
                                  const JR = "example" === RR ? mG : IG(RR);
                                  JR && (VR(JR), wR(RR))
                                };
                              (0, yR.useImperativeHandle)(JR, (() => ({
                                preview: RR => {
                                  var JR;
                                  AR(RR), null === (JR = iR.current) || void 0 === JR || JR.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const CR = RR => {
                                  VR({
                                    ...fR,
                                    ...RR
                                  }), wR(null)
                                },
                                XR = function(RR, JR) {
                                  if (null !== JR) return `${hG}    presetId: "${JR}",\n${Ry}\n})`;
                                  const GR = RR.velocityGradients.map((RR => `        {\n            timeFraction: ${FG(RR.timeFraction)},\n            factor: ${FG(RR.factor)},\n            factor2: ${FG(RR.factor2)},\n        },`)),
                                    yR = [`    dir1: ${TG(RR.dir1)},`, `    dir2: ${TG(RR.dir2)},`, Ry, `    texture: "${RR.texture}",`, `    minLifeTime: ${FG(RR.minLifeTime)},`, `    maxLifeTime: ${FG(RR.maxLifeTime)},`, `    minEmitPower: ${FG(RR.minEmitPower)},`, `    maxEmitPower: ${FG(RR.maxEmitPower)},`, `    minSize: ${FG(RR.minSize)},`, `    maxSize: ${FG(RR.maxSize)},`, `    manualEmitCount: ${FG(RR.manualEmitCount)},`, `    gravity: ${TG(RR.gravity)},`, `    colorGradients: ${sG(RR.colorGradients,"    ")},`, `    velocityGradients: ${GR.length>0?`[\n${GR.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${FG(RR.blendMode)},`];
                                  return void 0 !== RR.hideDist && yR.push(`    hideDist: ${FG(RR.hideDist)},`), `${hG}${yR.join("\n")}\n})`
                                }(fR, null === KR || "example" === KR ? null : KR),
                                BR = ZR.includes(fR.texture) ? ZR : [...ZR, fR.texture];
                              return (0, eR.jsxs)("section", {
                                ref: iR,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, eR.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, eR.jsxs)("div", {
                                    children: [(0, eR.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, eR.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, eR.jsx)(WR, {
                                    text: XR,
                                    label: "Copy code"
                                  })]
                                }), (0, eR.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, eR.jsx)("button", {
                                    type: "button",
                                    className: uR()("DocsVariantChip", {
                                      Active: "example" === KR
                                    }),
                                    onClick: () => {
                                      AR("example")
                                    },
                                    children: "Example"
                                  }), Zt.filter((RR => null !== IG(RR))).map((RR => (0, eR.jsx)("button", {
                                    type: "button",
                                    className: uR()("DocsVariantChip", {
                                      Active: KR === RR
                                    }),
                                    onClick: () => {
                                      AR(RR)
                                    },
                                    children: RR
                                  }, RR))), (0, eR.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== KR && void 0 !== KR ? KR : "custom",
                                    "aria-label": "Preset",
                                    onChange: RR => {
                                      AR(RR.target.value)
                                    },
                                    children: [(0, eR.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === KR && (0, eR.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), cG.d.map((RR => (0, eR.jsx)("option", {
                                      value: RR,
                                      children: RR
                                    }, RR)))]
                                  })]
                                }), (0, eR.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, eR.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, eR.jsx)(ut, {
                                      opts: fR,
                                      textureUrl: null !== (GR = null === qR || void 0 === qR ? void 0 : qR.getParticleTextureUrl(fR.texture)) && void 0 !== GR ? GR : null,
                                      burst: rR,
                                      paused: nR
                                    }), (0, eR.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, eR.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          aR(rR + 1)
                                        },
                                        children: [(0, eR.jsx)(LR, {
                                          name: "replay"
                                        }), (0, eR.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, eR.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": nR,
                                        onClick: () => {
                                          UR(!nR)
                                        },
                                        children: [(0, eR.jsx)(LR, {
                                          name: nR ? "play" : "pause"
                                        }), (0, eR.jsx)("span", {
                                          children: nR ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, eR.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, eR.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, eR.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, eR.jsx)("span", {
                                          children: "Texture"
                                        }), (0, eR.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: fR.texture
                                        })]
                                      }), (0, eR.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: BR.map((RR => {
                                          var JR;
                                          const GR = null !== (JR = null === qR || void 0 === qR ? void 0 : qR.getParticleTextureUrl(RR)) && void 0 !== JR ? JR : null;
                                          return (0, eR.jsx)("button", {
                                            type: "button",
                                            className: uR()("DocsParticleTexture", {
                                              Active: fR.texture === RR
                                            }),
                                            title: RR,
                                            "aria-label": RR,
                                            "aria-pressed": fR.texture === RR,
                                            onClick: () => {
                                              CR({
                                                texture: RR
                                              })
                                            },
                                            children: GR ? (0, eR.jsx)("img", {
                                              src: GR,
                                              alt: ""
                                            }) : (0, eR.jsx)(LR, {
                                              name: "image"
                                            })
                                          }, RR)
                                        }))
                                      })]
                                    }), (0, eR.jsx)(hy, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: fR.manualEmitCount,
                                      onChange: RR => {
                                        CR({
                                          manualEmitCount: RR
                                        })
                                      }
                                    }), (0, eR.jsx)(sy, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: fR.minLifeTime,
                                      high: fR.maxLifeTime,
                                      onChange: (RR, JR) => {
                                        CR({
                                          minLifeTime: RR,
                                          maxLifeTime: JR
                                        })
                                      }
                                    }), (0, eR.jsx)(sy, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: fR.minEmitPower,
                                      high: fR.maxEmitPower,
                                      onChange: (RR, JR) => {
                                        CR({
                                          minEmitPower: RR,
                                          maxEmitPower: JR
                                        })
                                      }
                                    }), (0, eR.jsx)(sy, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: fR.minSize,
                                      high: fR.maxSize,
                                      onChange: (RR, JR) => {
                                        CR({
                                          minSize: RR,
                                          maxSize: JR
                                        })
                                      }
                                    }), (0, eR.jsx)(hy, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (tR = fR.gravity[1]) && void 0 !== tR ? tR : 0,
                                      onChange: RR => {
                                        var JR, GR;
                                        CR({
                                          gravity: [null !== (JR = fR.gravity[0]) && void 0 !== JR ? JR : 0, RR, null !== (GR = fR.gravity[2]) && void 0 !== GR ? GR : 0]
                                        })
                                      }
                                    }), (0, eR.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, eR.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, eR.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, eR.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: fR.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: RR => {
                                          CR({
                                            blendMode: Number(RR.target.value)
                                          })
                                        },
                                        children: qt.map((RR => {
                                          let {
                                            mode: JR,
                                            label: GR
                                          } = RR;
                                          return (0, eR.jsx)("option", {
                                            value: JR,
                                            children: GR
                                          }, JR)
                                        }))
                                      })]
                                    }), (0, eR.jsx)(Rt, {
                                      opts: fR,
                                      onChange: RR => {
                                        CR({
                                          colorGradients: RR
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, eR.jsx)(MR, {
                                  code: XR,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var ft = GR(5281),
                            Vt = GR(2105);

                          function Kt(RR, JR) {
                            return RR ? ft.c.includes(JR) ? RR.getIngameIconUrl(JR) : RR.getItemIconUrl(JR) : null
                          }

                          function wt(RR) {
                            var JR, GR, yR;
                            let {
                              part: tR,
                              assets: ZR
                            } = RR;
                            const qR = Kt(ZR, tR.icon),
                              iR = null !== (JR = null === (GR = tR.style) || void 0 === GR ? void 0 : GR.fontSize) && void 0 !== JR ? JR : "1.8em",
                              fR = (0, cJ.Zb)(tR.style);
                            return (0, eR.jsxs)("span", {
                              className: uR()("DocsBloxdTextIcon", {
                                Missing: !qR
                              }),
                              style: {
                                width: iR,
                                height: iR,
                                opacity: null === (yR = tR.style) || void 0 === yR ? void 0 : yR.opacity
                              },
                              title: qR ? void 0 : "No Bloxd icon, item or block has this name",
                              children: [qR && fR && (0, eR.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: fR,
                                  maskImage: `url("${qR}")`,
                                  WebkitMaskImage: `url("${qR}")`
                                }
                              }), qR ? (0, eR.jsx)("img", {
                                src: qR,
                                alt: "",
                                className: uR()({
                                  Tinted: fR
                                })
                              }) : (0, eR.jsx)(LR, {
                                name: "image"
                              })]
                            })
                          }

                          function rt(RR) {
                            let {
                              parts: JR,
                              className: GR
                            } = RR;
                            const yR = Wy(),
                              tR = [];
                            let ZR = [];
                            const qR = RR => {
                              ZR.length > 0 && (tR.push((0, eR.jsx)(Vt.c, {
                                text: ZR
                              }, `run-${RR}`)), ZR = [])
                            };
                            return JR.forEach(((RR, JR) => {
                              "icon" !== SJ(RR) || IJ(RR.icon) ? ZR.push(RR) : (qR(JR), tR.push((0, eR.jsx)(wt, {
                                part: RR,
                                assets: yR
                              }, `icon-${JR}`)))
                            })), qR(JR.length), (0, eR.jsx)("div", {
                              className: uR()("DocsStyledTextPreview", GR),
                              children: tR
                            })
                          }
                          const et = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let Lt = null;

                          function nt(RR) {
                            if (Lt ??= document.createElement("canvas").getContext("2d"), !Lt) return "#000000";
                            Lt.fillStyle = "#000000", Lt.fillStyle = RR;
                            const JR = Lt.fillStyle;
                            return JR.startsWith("#") ? JR : "#000000"
                          }

                          function Ut(RR) {
                            let {
                              value: JR,
                              label: GR,
                              onChange: yR
                            } = RR;
                            return (0, eR.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, eR.jsx)("input", {
                                type: "color",
                                value: nt(JR),
                                "aria-label": `${GR} picker`,
                                onChange: RR => {
                                  yR(RR.target.value)
                                }
                              }), (0, eR.jsx)("input", {
                                type: "text",
                                value: JR,
                                placeholder: "#ffb914 or gold",
                                "aria-label": GR,
                                spellCheck: !1,
                                onChange: RR => {
                                  yR(RR.target.value)
                                }
                              })]
                            })
                          }

                          function Wt(RR) {
                            let {
                              value: JR,
                              fontAwesomeIcons: GR,
                              onChange: tR
                            } = RR;
                            const ZR = Wy(),
                              [qR, iR] = (0, yR.useState)(IJ(JR) ? "fontAwesome" : "bloxd"),
                              [fR, VR] = (0, yR.useState)(""),
                              KR = fR.trim().toLowerCase(),
                              wR = "bloxd" === qR ? ft.c : GR,
                              rR = KR ? wR.filter((RR => RR.toLowerCase().includes(KR))) : wR;
                            return (0, eR.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, eR.jsx)("input", {
                                type: "text",
                                value: JR,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: RR => {
                                  tR(RR.target.value)
                                }
                              }), (0, eR.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, eR.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((RR => (0, eR.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": qR === RR,
                                    className: uR()("DocsVariantChip", {
                                      Active: qR === RR
                                    }),
                                    onClick: () => {
                                      iR(RR)
                                    },
                                    children: "bloxd" === RR ? `Bloxd icons (${ft.c.length})` : `Font Awesome (${GR.length})`
                                  }, RR))), (0, eR.jsx)("input", {
                                    type: "search",
                                    value: fR,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: RR => {
                                      VR(RR.target.value)
                                    }
                                  })
                                ]
                              }), (0, eR.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [rR.map((RR => {
                                  const GR = "bloxd" === qR ? Kt(ZR, RR) : null;
                                  return (0, eR.jsx)("button", {
                                    type: "button",
                                    title: RR,
                                    "aria-label": RR,
                                    "aria-pressed": RR === JR,
                                    className: uR()("DocsIconPickerOption", {
                                      Active: RR === JR
                                    }),
                                    onClick: () => {
                                      tR(RR)
                                    },
                                    children: "fontAwesome" === qR ? (0, eR.jsx)(AG.d, {
                                      name: RR
                                    }) : GR ? (0, eR.jsx)("img", {
                                      src: GR,
                                      alt: ""
                                    }) : (0, eR.jsx)(LR, {
                                      name: "image"
                                    })
                                  }, RR)
                                })), 0 === rR.length && (0, eR.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", fR, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function At(RR) {
                            let {
                              property: JR,
                              value: GR,
                              fontAwesomeIcons: yR,
                              onChange: tR
                            } = RR;
                            const {
                              field: uR,
                              label: ZR
                            } = JR, qR = RR => "" !== RR || JR.isRequired ? RR : void 0;
                            switch (uR.kind) {
                              case "text":
                                return uR.multiline ? (0, eR.jsx)("textarea", {
                                  value: String(null !== GR && void 0 !== GR ? GR : ""),
                                  rows: 2,
                                  "aria-label": ZR,
                                  onChange: RR => {
                                    tR(RR.target.value)
                                  }
                                }) : (0, eR.jsx)("input", {
                                  type: "text",
                                  value: String(null !== GR && void 0 !== GR ? GR : ""),
                                  "aria-label": ZR,
                                  onChange: RR => {
                                    tR(qR(RR.target.value))
                                  }
                                });
                              case "size":
                                return (0, eR.jsx)("input", {
                                  type: "text",
                                  value: String(null !== GR && void 0 !== GR ? GR : ""),
                                  placeholder: JR.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": ZR,
                                  spellCheck: !1,
                                  onChange: RR => {
                                    tR(qR(RR.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, eR.jsx)(Ut, {
                                  value: String(null !== GR && void 0 !== GR ? GR : ""),
                                  label: ZR,
                                  onChange: RR => {
                                    tR(qR(RR))
                                  }
                                });
                              case "colours": {
                                const RR = Array.isArray(GR) ? GR : [],
                                  JR = RR => {
                                    tR(RR.length > 0 ? RR : void 0)
                                  };
                                return (0, eR.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [RR.map(((GR, yR) => (0, eR.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, eR.jsx)(Ut, {
                                      value: GR,
                                      label: `${ZR} ${yR+1}`,
                                      onChange: GR => {
                                        JR(RR.map(((RR, JR) => JR === yR ? GR : RR)))
                                      }
                                    }), (0, eR.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${yR+1}`,
                                      onClick: () => {
                                        JR(RR.filter(((RR, JR) => JR !== yR)))
                                      },
                                      children: (0, eR.jsx)(LR, {
                                        name: "cross"
                                      })
                                    })]
                                  }, yR))), (0, eR.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var GR;
                                      JR([...RR, null !== (GR = RR.at(-1)) && void 0 !== GR ? GR : "#ffffff"])
                                    },
                                    children: [(0, eR.jsx)(LR, {
                                      name: "plus"
                                    }), 0 === RR.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var iR;
                                const RR = "number" === typeof GR ? GR : Number(null !== (iR = JR.defaultText) && void 0 !== iR ? iR : 0);
                                return (0, eR.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, eR.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: RR,
                                    "aria-label": ZR,
                                    onChange: RR => {
                                      tR(Number(RR.target.value))
                                    }
                                  }), (0, eR.jsx)("output", {
                                    children: RR.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, eR.jsxs)("select", {
                                  value: String(null !== GR && void 0 !== GR ? GR : ""),
                                  "aria-label": ZR,
                                  onChange: RR => {
                                    tR(qR(RR.target.value))
                                  },
                                  children: [!JR.isRequired && (0, eR.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", JR.defaultText, ")"]
                                  }), uR.options.map((RR => (0, eR.jsx)("option", {
                                    value: RR,
                                    children: RR
                                  }, RR)))]
                                });
                              case "icon":
                                return (0, eR.jsx)(Wt, {
                                  value: String(null !== GR && void 0 !== GR ? GR : ""),
                                  fontAwesomeIcons: yR,
                                  onChange: tR
                                })
                            }
                          }

                          function Ct(RR) {
                            let JR;
                            try {
                              JR = JSON.parse(RR)
                            } catch (GR) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${GR.message}`
                              }
                            }
                            return GG(JR) ? {
                              part: JR,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function Xt(RR) {
                            let {
                              parts: JR,
                              index: GR,
                              fontAwesomeIcons: tR,
                              onChange: uR,
                              eD: ZR,
                              onClose: qR
                            } = RR;
                            const iR = (0, yR.useContext)(eJ),
                              VR = (0, yR.useRef)(null),
                              KR = JR[GR],
                              wR = SJ(KR),
                              [rR, aR] = (0, yR.useState)((() => JSON.stringify(KR, null, 2))),
                              nR = (0, yR.useMemo)((() => "other" === wR ? Ct(rR).error : null), [wR, rR]);
                            (0, yR.useEffect)((() => {
                              var RR;
                              null === (RR = VR.current) || void 0 === RR || RR.focus()
                            }), []);
                            const UR = (0, eR.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: RR => {
                                RR.target === RR.currentTarget && qR()
                              },
                              children: (0, eR.jsxs)("div", {
                                ref: VR,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${GR+1}: ${mJ[wR]}`,
                                tabIndex: -1,
                                onKeyDown: RR => {
                                  "Escape" === RR.key ? (RR.stopPropagation(), qR()) : "Tab" === RR.key && VR.current && function(RR, JR) {
                                    const GR = Array.from(RR.querySelectorAll(bJ)),
                                      yR = GR[0],
                                      tR = GR.at(-1);
                                    if (!yR || !tR) return;
                                    const uR = document.activeElement;
                                    !JR.shiftKey || uR !== yR && uR !== RR ? JR.shiftKey || uR !== tR || (JR.preventDefault(), yR.focus()) : (JR.preventDefault(), tR.focus())
                                  }(VR.current, RR)
                                },
                                children: [(0, eR.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, eR.jsxs)("div", {
                                    children: [(0, eR.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", GR + 1]
                                    }), (0, eR.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: mJ[wR]
                                    })]
                                  }), (0, eR.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: qR,
                                    children: (0, eR.jsx)(LR, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, eR.jsx)(rt, {
                                  parts: JR,
                                  className: "DocsTextDialogPreview"
                                }), (0, eR.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === wR ? (0, eR.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, eR.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, eR.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: rR,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: RR => {
                                        aR(RR.target.value);
                                        const JR = Ct(RR.target.value);
                                        null !== JR.part && uR(JR.part)
                                      }
                                    }), nR && (0, eR.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: nR
                                    })]
                                  }) : dJ[wR].map((RR => {
                                    const JR = YJ(KR, RR.path),
                                      GR = RR.isRequired ? JSON.stringify(QJ(KR, RR.path)) === JSON.stringify(KR) : void 0 === JR;
                                    return (0, eR.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, eR.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, eR.jsx)("span", {
                                          children: RR.label
                                        }), (0, eR.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: GR,
                                          "aria-label": `Reset ${RR.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            uR(QJ(KR, RR.path))
                                          },
                                          children: [(0, eR.jsx)(LR, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, eR.jsx)(At, {
                                        property: RR,
                                        value: JR,
                                        fontAwesomeIcons: tR,
                                        onChange: JR => {
                                          uR(kJ(KR, RR.path, JR))
                                        }
                                      }), !RR.isRequired && (0, eR.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", RR.defaultText]
                                      })]
                                    }, RR.path.join("."))
                                  }))
                                }), (0, eR.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, eR.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: ZR,
                                    children: [(0, eR.jsx)(LR, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, eR.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: qR,
                                    children: "Done"
                                  })]
                                }), (0, eR.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: et.map((RR => (0, eR.jsx)("option", {
                                    value: RR
                                  }, RR)))
                                })]
                              })
                            });
                            return iR ? (0, fR.createPortal)(UR, iR) : UR
                          }
                          const Mt = [{
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
                            Bt = Object.keys(zJ);

                          function lt(RR) {
                            let {
                              fontAwesomeIcons: JR
                            } = RR;
                            const [GR, tR] = (0, yR.useState)(Mt[0].parts), [ZR, qR] = (0, yR.useState)((() => hJ(Mt[0].parts))), [iR, fR] = (0, yR.useState)(null), [VR, KR] = (0, yR.useState)(!1), [wR, rR] = (0, yR.useState)(null), [aR, nR] = (0, yR.useState)(!1), [UR, WR] = (0, yR.useState)(null), AR = (0, yR.useRef)(null), CR = hJ(GR);
                            (0, yR.useLayoutEffect)((() => {
                              var RR;
                              if (!UR) return;
                              const JR = RR => {
                                  var JR;
                                  return null === (JR = AR.current) || void 0 === JR ? void 0 : JR.querySelector(`[data-focus-key="${RR}"]`)
                                },
                                GR = JR(UR.key);
                              null === (RR = GR && !GR.disabled ? GR : JR(UR.fallback)) || void 0 === RR || RR.focus(), WR(null)
                            }), [UR]);
                            const XR = RR => {
                                tR(RR), qR(hJ(RR)), fR(null)
                              },
                              BR = RR => {
                                XR(GR.filter(((JR, GR) => GR !== RR))), WR({
                                  key: `edit-${Math.min(RR,GR.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              lR = (RR, JR) => {
                                const yR = [...GR],
                                  [tR] = yR.splice(RR, 1);
                                yR.splice(RR + JR, 0, tR), XR(yR);
                                WR({
                                  key: `${JR<0?"up":"down"}-${RR+JR}`,
                                  fallback: `edit-${RR+JR}`
                                })
                              };
                            return (0, eR.jsxs)("section", {
                              ref: AR,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, eR.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, eR.jsxs)("div", {
                                  children: [(0, eR.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, eR.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, eR.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: Mt.map((RR => (0, eR.jsx)("button", {
                                  type: "button",
                                  className: uR()("DocsVariantChip", {
                                    Active: CR === hJ(RR.parts)
                                  }),
                                  onClick: () => {
                                    XR(RR.parts)
                                  },
                                  children: RR.label
                                }, RR.label)))
                              }), (0, eR.jsx)(rt, {
                                parts: GR,
                                className: "DocsTextEditorPreview"
                              }), (0, eR.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, eR.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, eR.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, eR.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [GR.map(((RR, JR) => {
                                      const yR = SJ(RR);
                                      return (0, eR.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, eR.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${JR}`,
                                          "aria-label": `Edit part ${JR+1}, ${mJ[yR]}`,
                                          onClick: () => {
                                            rR(JR)
                                          },
                                          children: [(0, eR.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: mJ[yR]
                                          }), (0, eR.jsx)(rt, {
                                            parts: [RR],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== yR && (0, eR.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: FJ(RR)
                                          })]
                                        }), (0, eR.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, eR.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${JR+1} up`,
                                            "data-focus-key": `up-${JR}`,
                                            disabled: 0 === JR,
                                            onClick: () => {
                                              lR(JR, -1)
                                            },
                                            children: (0, eR.jsx)(LR, {
                                              name: "chevron-up"
                                            })
                                          }), (0, eR.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${JR+1} down`,
                                            "data-focus-key": `down-${JR}`,
                                            disabled: JR === GR.length - 1,
                                            onClick: () => {
                                              lR(JR, 1)
                                            },
                                            children: (0, eR.jsx)(LR, {
                                              name: "chevron-down"
                                            })
                                          }), (0, eR.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${JR+1}`,
                                            onClick: () => {
                                              BR(JR)
                                            },
                                            children: (0, eR.jsx)(LR, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, JR)
                                    })), 0 === GR.length && (0, eR.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, eR.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: RR => {
                                      "Escape" === RR.key && aR && (RR.stopPropagation(), nR(!1), WR({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, eR.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": aR,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        nR(!aR)
                                      },
                                      children: [(0, eR.jsx)(LR, {
                                        name: "plus"
                                      }), "Add a part", (0, eR.jsx)(LR, {
                                        name: aR ? "chevron-up" : "chevron-down"
                                      })]
                                    }), aR && (0, eR.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: Bt.map((RR => (0, eR.jsx)("li", {
                                        children: (0, eR.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (RR => {
                                              XR([...GR, zJ[RR]]), nR(!1), rR(GR.length)
                                            })(RR)
                                          },
                                          children: mJ[RR]
                                        })
                                      }, RR)))
                                    })]
                                  })]
                                }), (0, eR.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, eR.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, eR.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": VR,
                                      onClick: () => {
                                        KR(!VR)
                                      },
                                      children: [(0, eR.jsx)(LR, {
                                        name: VR ? "check" : "pencil"
                                      }), VR ? "Done" : "Edit"]
                                    })]
                                  }), VR ? (0, eR.jsxs)(eR.Fragment, {
                                    children: [(0, eR.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: ZR,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: RR => {
                                        qR(RR.target.value);
                                        const JR = yG(RR.target.value);
                                        fR(JR.error), JR.parts && tR(JR.parts)
                                      }
                                    }), iR && (0, eR.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: iR
                                    })]
                                  }) : (0, eR.jsx)(MR, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${CR})`
                                  })]
                                })]
                              }), null !== wR && wR < GR.length && (0, eR.jsx)(Xt, {
                                parts: GR,
                                index: wR,
                                fontAwesomeIcons: JR,
                                onChange: RR => {
                                  ((RR, JR) => {
                                    XR(GR.map(((GR, yR) => yR === RR ? JR : GR)))
                                  })(wR, RR)
                                },
                                eD: () => {
                                  BR(wR), rR(null)
                                },
                                onClose: () => {
                                  rR(null), WR({
                                    key: `edit-${wR}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var pt = GR(5733),
                            gt = GR(5712),
                            bt = GR(5728),
                            vt = GR(5736);
                          const Ot = 40,
                            xt = 800,
                            Nt = 150,
                            Dt = 8e3,
                            Ht = 2e3;

                          function ot(RR, JR) {
                            return 12 * Math.log2(JR / RR)
                          }

                          function ct(RR, JR) {
                            return Math.round(RR * 2 ** (JR / 12) * 10) / 10
                          }

                          function Pt(RR) {
                            return `${RR} ms`
                          }

                          function It(RR) {
                            return `${RR} st`
                          }
                          const mt = [{
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

                          function zt(RR) {
                            let {
                              synth: JR,
                              onChange: GR
                            } = RR;
                            const yR = (0, pt.i)(JR);
                            return (0, eR.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, eR.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, eR.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, eR.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, eR.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, eR.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, eR.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: pt.e.map((RR => (0, eR.jsx)("button", {
                                      type: "button",
                                      className: uR()("DocsVariantChip", {
                                        Active: JR.waveform === RR
                                      }),
                                      "aria-pressed": JR.waveform === RR,
                                      onClick: () => {
                                        GR({
                                          waveform: RR
                                        })
                                      },
                                      children: RR
                                    }, RR)))
                                  })]
                                }), (0, eR.jsx)(hy, {
                                  label: "Pitch",
                                  min: 0,
                                  max: ot(Ot, xt),
                                  step: .1,
                                  value: ot(Ot, JR.pitchHz),
                                  format: () => `${JR.pitchHz} Hz`,
                                  onChange: RR => {
                                    GR({
                                      pitchHz: ct(Ot, RR)
                                    })
                                  }
                                }), (0, eR.jsx)(hy, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: JR.syllableMs,
                                  format: Pt,
                                  onChange: RR => {
                                    GR({
                                      syllableMs: RR
                                    })
                                  }
                                }), (0, eR.jsx)(hy, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: JR.volume,
                                  onChange: RR => {
                                    GR({
                                      volume: RR
                                    })
                                  }
                                })]
                              }), (0, eR.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, eR.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, eR.jsx)(hy, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: JR.durationMs,
                                  format: Pt,
                                  onChange: RR => {
                                    GR({
                                      durationMs: RR
                                    })
                                  }
                                }), (0, eR.jsx)(hy, {
                                  label: "Fade in",
                                  min: 0,
                                  max: yR.durationMs,
                                  step: 1,
                                  value: yR.attackMs,
                                  format: Pt,
                                  onChange: RR => {
                                    GR({
                                      attackMs: RR
                                    })
                                  }
                                }), (0, eR.jsx)(hy, {
                                  label: "Fade out",
                                  min: 0,
                                  max: yR.durationMs - yR.attackMs,
                                  step: 1,
                                  value: yR.releaseMs,
                                  format: Pt,
                                  onChange: RR => {
                                    GR({
                                      releaseMs: RR
                                    })
                                  }
                                }), (0, eR.jsx)(hy, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: JR.glideSemitones,
                                  format: It,
                                  onChange: RR => {
                                    GR({
                                      glideSemitones: RR
                                    })
                                  }
                                }), (0, eR.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, eR.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== JR.lowpassHz,
                                    onChange: RR => {
                                      GR({
                                        lowpassHz: RR.target.checked ? Ht : null
                                      })
                                    }
                                  }), (0, eR.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== JR.lowpassHz && (0, eR.jsx)(hy, {
                                  label: "Filter",
                                  min: 0,
                                  max: ot(Nt, Dt),
                                  step: .1,
                                  value: ot(Nt, JR.lowpassHz),
                                  format: () => `${JR.lowpassHz} Hz`,
                                  onChange: RR => {
                                    GR({
                                      lowpassHz: ct(Nt, RR)
                                    })
                                  }
                                })]
                              }), (0, eR.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, eR.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), mt.map((RR => {
                                  let {
                                    key: yR,
                                    label: tR,
                                    max: uR
                                  } = RR;
                                  return (0, eR.jsx)(hy, {
                                    label: tR,
                                    min: 0,
                                    max: uR,
                                    step: .1,
                                    value: JR.intonation[yR],
                                    format: It,
                                    onChange: RR => {
                                      GR({
                                        intonation: {
                                          ...JR.intonation,
                                          [yR]: RR
                                        }
                                      })
                                    }
                                  }, yR)
                                }))]
                              })]
                            })
                          }
                          const St = Object.keys(pt.f),
                            jt = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function dt(RR) {
                            var JR;
                            const GR = JSON.stringify((0, pt.i)(RR));
                            return null !== (JR = St.find((RR => JSON.stringify((0, pt.i)(pt.f[RR])) === GR))) && void 0 !== JR ? JR : null
                          }

                          function Et(RR) {
                            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof RR || null === RR) return JSON.stringify(RR);
                            return `{\n${Object.entries(RR).map((RR=>{let[GR,yR]=RR;return`${JR}    ${GR}: ${Et(yR,`${JR}    `)},`})).join("\n")}\n${JR}}`
                          }

                          function Yt(RR, JR, GR) {
                            const yR = dt(RR),
                              tR = [`    line: ${JSON.stringify(JR)},`];
                            return GR && tR.push(`    speakerName: ${JSON.stringify(GR)},`), tR.push("    voice,"), `const voice = ${yR?JSON.stringify(yR):Et((0,pt.i)(RR))}\n\napi.setClientOption(playerId, "dialogue", {\n${tR.join("\n")}\n})`
                          }
                          const kt = 400,
                            Qt = 90;
                          let Ft = null;

                          function Tt(RR, JR, GR) {
                            return Ft ??= new AudioContext, Ft.resume(), (0, vt.c)(Ft, Ft.destination, RR, JR, GR, (() => {}))
                          }

                          function st() {
                            const [RR, JR] = (0, yR.useState)(pt.f.regular), [GR, tR] = (0, yR.useState)(jt[0]), [ZR, qR] = (0, yR.useState)("Innkeeper"), [iR, fR] = (0, yR.useState)(0), VR = Vy((RR => RR.volume)), KR = (0, yR.useRef)(null), wR = (0, yR.useRef)(0), rR = (0, yR.useRef)(0), aR = () => {
                              var RR;
                              null === (RR = KR.current) || void 0 === RR || RR.call(KR), KR.current = null
                            };
                            (0, yR.useEffect)((() => () => {
                              var RR;
                              null === (RR = KR.current) || void 0 === RR || RR.call(KR), window.clearTimeout(wR.current)
                            }), []);
                            const nR = (0, yR.useMemo)((() => ({
                                line: GR,
                                speakerName: ZR || void 0,
                                voice: RR
                              })), [GR, ZR, RR]),
                              UR = (0, yR.useRef)(nR);
                            UR.current = nR;
                            const AR = dt(RR),
                              CR = RR => {
                                window.clearTimeout(wR.current), aR();
                                const {
                                  plan: JR,
                                  synth: GR
                                } = (0, bt.f)(RR);
                                GR && (KR.current = Tt(GR, JR.blips, VR)), fR((RR => RR + 1))
                              },
                              XR = Yt(RR, GR, ZR);
                            return (0, eR.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, eR.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, eR.jsxs)("div", {
                                  children: [(0, eR.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, eR.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, eR.jsx)(WR, {
                                  text: XR,
                                  label: "Copy code"
                                })]
                              }), (0, eR.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [St.map((RR => (0, eR.jsx)("button", {
                                  type: "button",
                                  className: uR()("DocsVariantChip", {
                                    Active: AR === RR
                                  }),
                                  "aria-pressed": AR === RR,
                                  onClick: () => {
                                    (RR => {
                                      const GR = pt.f[RR];
                                      JR(GR), CR({
                                        ...nR,
                                        voice: GR
                                      })
                                    })(RR)
                                  },
                                  children: RR
                                }, RR))), !AR && (0, eR.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, eR.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, eR.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, eR.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, eR.jsx)(gt.b, {
                                      display: nR
                                    }, iR)
                                  }), (0, eR.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: RR => {
                                      RR.preventDefault(), CR(nR)
                                    },
                                    children: [(0, eR.jsx)("input", {
                                      value: GR,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: RR => {
                                        tR(RR.target.value)
                                      }
                                    }), (0, eR.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, eR.jsx)(LR, {
                                        name: "play"
                                      }), (0, eR.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, eR.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: jt.map((RR => (0, eR.jsx)("button", {
                                      type: "button",
                                      className: uR()("DocsVariantChip", {
                                        Active: GR === RR
                                      }),
                                      onClick: () => {
                                        var JR;
                                        tR(JR = RR), CR({
                                          ...nR,
                                          line: JR
                                        })
                                      },
                                      children: RR
                                    }, RR)))
                                  }), (0, eR.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, eR.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, eR.jsx)("input", {
                                      value: ZR,
                                      placeholder: "No name",
                                      onChange: RR => {
                                        qR(RR.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, eR.jsx)(zt, {
                                  synth: RR,
                                  onChange: GR => {
                                    const yR = {
                                      ...RR,
                                      ...GR
                                    };
                                    JR(yR);
                                    const tR = {
                                        ...nR,
                                        voice: yR
                                      },
                                      uR = performance.now();
                                    if (uR - rR.current >= Qt) {
                                      rR.current = uR, aR();
                                      const RR = (0, bt.f)(tR).plan.blips[0];
                                      RR && (KR.current = Tt((0, pt.i)(yR), [{
                                        ...RR,
                                        atMs: 0
                                      }], VR))
                                    }
                                    window.clearTimeout(wR.current), wR.current = window.setTimeout((() => {
                                      CR(UR.current)
                                    }), kt)
                                  }
                                })]
                              }), (0, eR.jsx)(MR, {
                                code: XR,
                                lang: "ts"
                              })]
                            })
                          }
                          var ht = GR(5751);
                          const Ru = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            Ju = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            Gu = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${Ju}`, "g"), ht.n],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, ht.n]
                            ];

                          function yu(RR) {
                            return `${RR.pageId}#${RR.anchor}`
                          }
                          let tu, uu, Zu;

                          function qu(RR) {
                            const JR = (0, BR.i)(RR),
                              GR = new Set;
                            for (const [, , yR] of JR.matchAll(BR.d)) {
                              const RR = yR.startsWith("#") ? SR(yR) : null,
                                JR = RR ? yu({
                                  pageId: RR.page.id,
                                  anchor: RR.anchor
                                }) : null;
                              null !== JR && (tu || (tu = new Set(oR.flatMap((RR => bR(RR.layout) ? mR(RR).sections.map((JR => yu({
                                pageId: RR.id,
                                anchor: JR.heading.anchor
                              }))) : [])))), tu).has(JR) && GR.add(JR)
                            }
                            for (const [, , yR] of JR.matchAll(Ru)) {
                              const RR = wJ(yR);
                              RR && GR.add(yu(RR))
                            }
                            return GR
                          }

                          function iu(RR, JR) {
                            const GR = new Set,
                              yR = function(RR) {
                                return RR.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(RR);
                            for (const [, tR] of yR.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) GR.add(tR);
                            for (const [tR, uR] of Gu)
                              for (const [, RR] of(0, ht.d)(yR, tR, uR)) JR.has(RR) && GR.add(RR);
                            return GR
                          }

                          function fu(RR, JR, GR, yR) {
                            const tR = RR.get(JR);
                            tR ? !yR && tR.some((RR => RR.pageId === GR.pageId)) || tR.push(GR) : RR.set(JR, [GR])
                          }
                          const Vu = /^[A-Za-z_$][\w$]*$/;

                          function Ku(RR) {
                            return Vu.test(RR.name) ? RR.name : "options"
                          }

                          function wu(RR, JR) {
                            const GR = RR.params.map(Ku).join(", ");
                            return JR ? `${RR.name} = (${GR}) => {\n\t\n}` : `api.${RR.name}(${GR})`
                          }

                          function ru(RR) {
                            let {
                              method: JR,
                              isCallback: GR
                            } = RR;
                            return (0, eR.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, eR.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [GR ? (0, eR.jsxs)(eR.Fragment, {
                                  children: [(0, eR.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: JR.name
                                  }), (0, eR.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, eR.jsxs)(eR.Fragment, {
                                  children: [(0, eR.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, eR.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: JR.name
                                  }), (0, eR.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), JR.params.map(((RR, GR) => (0, eR.jsxs)(yR.Fragment, {
                                  children: [GR > 0 && (0, eR.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, eR.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${JR.name}-${Ku(RR)}`,
                                    children: RR.name
                                  })]
                                }, RR.name))), (0, eR.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: GR ? ") => " : ")"
                                }), GR && !JR.returns && (0, eR.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), JR.returns && JR.returns.type && (0, eR.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!GR && (0, eR.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, eR.jsx)(lJ, {
                                  type: JR.returns.type
                                })]
                              })]
                            })
                          }

                          function eu(RR) {
                            let {
                              title: JR,
                              references: GR
                            } = RR;
                            const tR = (0, yR.useContext)(rJ);
                            return (0, eR.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, eR.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: JR
                              }), GR.map((RR => (0, eR.jsx)(ZR.b, {
                                to: dR(tR, PR(RR.pageId), RR.anchor),
                                children: RR.label
                              }, `${RR.pageId}#${RR.anchor}`)))]
                            })
                          }

                          function au(RR) {
                            var JR, GR;
                            let {
                              pageId: yR,
                              anchor: tR
                            } = RR;
                            const uR = yu({
                                pageId: yR,
                                anchor: tR
                              }),
                              ZR = null !== (JR = function() {
                                if (!Zu) {
                                  Zu = new Map;
                                  const yR = new Set(oR.filter((RR => "callbacks" === RR.layout)).flatMap((RR => mR(RR).sections.map((RR => RR.heading.text)))));
                                  for (const tR of oR)
                                    if ("article" === tR.layout || "snippets" === tR.layout)
                                      for (const uR of (0, BR.v)(mR(tR)))
                                        for (const {
                                            code: ZR
                                          }
                                          of(0, BR.l)(uR.blocks))
                                          for (const qR of iu(ZR, yR)) {
                                            const yR = KJ().get(qR);
                                            if (yR) {
                                              var RR, JR, GR;
                                              const ZR = {
                                                pageId: tR.id,
                                                anchor: null !== (RR = null === (JR = uR.heading) || void 0 === JR ? void 0 : JR.anchor) && void 0 !== RR ? RR : "",
                                                label: null !== (GR = tR.navTitle) && void 0 !== GR ? GR : tR.title
                                              };
                                              fu(Zu, yu(yR), ZR, !1)
                                            }
                                          }
                                }
                                return Zu
                              }().get(uR)) && void 0 !== JR ? JR : [],
                              qR = null !== (GR = function() {
                                if (!uu) {
                                  uu = new Map;
                                  const RR = PR("changelog");
                                  for (const JR of mR(RR).sections) {
                                    const GR = new Set(JR.blocks.flatMap((RR => [...qu(RR)])));
                                    for (const yR of GR) {
                                      const GR = {
                                        pageId: RR.id,
                                        anchor: JR.heading.anchor,
                                        label: JR.heading.text
                                      };
                                      fu(uu, yR, GR, !0)
                                    }
                                  }
                                }
                                return uu
                              }().get(uR)) && void 0 !== GR ? GR : [];
                            return 0 === ZR.length && 0 === qR.length ? null : (0, eR.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [ZR.length > 0 && (0, eR.jsx)(eu, {
                                title: "Used in",
                                references: ZR
                              }), qR.length > 0 && (0, eR.jsx)(eu, {
                                title: "Changelog",
                                references: qR
                              })]
                            })
                          }

                          function Lu(RR) {
                            let {
                              method: JR,
                              pageId: GR,
                              anchor: yR,
                              isCallback: tR
                            } = RR;
                            const uR = tR ? void 0 : qJ().get(JR.name),
                              ZR = JR.description.length > 0 || null === uR || void 0 === uR || !uR.description ? JR.description : (0, BR.A)(uR.description);
                            return (0, eR.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, eR.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, eR.jsx)(fG, {
                                  level: 2,
                                  text: JR.name,
                                  anchor: yR,
                                  className: "DocsCardTitle"
                                }), (0, eR.jsx)(WR, {
                                  text: wu(JR, tR),
                                  label: tR ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, eR.jsx)(ru, {
                                method: JR,
                                isCallback: tR
                              }), uR && null !== uR.deprecation && (0, eR.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, eR.jsx)("strong", {
                                  children: "Deprecated"
                                }), uR.deprecation && (0, eR.jsxs)(eR.Fragment, {
                                  children: [": ", (0, eR.jsx)(XJ, {
                                    text: (qR = uR.deprecation, (0, ht.s)(qR, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, ht.k)("`\\w"), (RR => {
                                      let [JR] = RR;
                                      return KJ().has(JR) ? `\`${JR}\`` : JR
                                    })))
                                  })]
                                })]
                              }), ZR.length > 0 && (0, eR.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, eR.jsx)(rG, {
                                  blocks: ZR
                                })
                              }), JR.params.length > 0 && (0, eR.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, eR.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, eR.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: JR.params.map((RR => (0, eR.jsxs)("div", {
                                    id: `${JR.name}-${Ku(RR)}`,
                                    className: "DocsParam",
                                    children: [(0, eR.jsxs)("dt", {
                                      children: [(0, eR.jsx)("code", {
                                        className: "DocsParamName",
                                        children: RR.name
                                      }), (0, eR.jsx)(lJ, {
                                        type: RR.type
                                      })]
                                    }), RR.description && (0, eR.jsx)("dd", {
                                      children: (0, eR.jsx)(XJ, {
                                        text: RR.description
                                      })
                                    })]
                                  }, RR.name)))
                                })]
                              }), JR.returns && (JR.returns.type || JR.returns.description.length > 0) && (0, eR.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, eR.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, eR.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [JR.returns.type && (0, eR.jsx)(lJ, {
                                    type: JR.returns.type
                                  }), JR.returns.description.length > 0 && (0, eR.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, eR.jsx)(rG, {
                                      blocks: JR.returns.description
                                    })
                                  })]
                                })]
                              }), (0, eR.jsx)(au, {
                                pageId: GR,
                                anchor: yR
                              })]
                            });
                            var qR
                          }

                          function nu(RR) {
                            var JR;
                            return null !== RR.defaultValue && "undefined" !== RR.defaultValue ? RR.defaultValue : null !== (JR = RR.example) && void 0 !== JR ? JR : "value"
                          }

                          function Uu(RR) {
                            let {
                              setting: JR,
                              pageId: GR,
                              anchor: yR,
                              setterSnippet: tR
                            } = RR;
                            const uR = null === JR.defaultValue ? null : nJ(JR.defaultValue);
                            return (0, eR.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, eR.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, eR.jsx)(fG, {
                                  level: 2,
                                  text: JR.name,
                                  anchor: yR,
                                  className: "DocsCardTitle"
                                }), (0, eR.jsx)(WR, {
                                  text: tR(JR.name, nu(JR)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, eR.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, eR.jsxs)("div", {
                                  children: [(0, eR.jsx)("dt", {
                                    children: "Type"
                                  }), (0, eR.jsx)("dd", {
                                    children: (0, eR.jsx)(lJ, {
                                      type: JR.type
                                    })
                                  })]
                                }), null !== JR.defaultValue && (0, eR.jsxs)("div", {
                                  children: [(0, eR.jsx)("dt", {
                                    children: "Default"
                                  }), (0, eR.jsx)("dd", {
                                    children: (0, eR.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [uR && (0, eR.jsx)(UJ, {
                                        colour: uR
                                      }), JR.defaultValue]
                                    })
                                  })]
                                }), null !== JR.example && (0, eR.jsxs)("div", {
                                  children: [(0, eR.jsx)("dt", {
                                    children: "Example"
                                  }), (0, eR.jsx)("dd", {
                                    children: (0, eR.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: JR.example
                                    })
                                  })]
                                })]
                              }), JR.description.length > 0 && (0, eR.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, eR.jsx)(rG, {
                                  blocks: JR.description
                                })
                              }), (0, eR.jsx)(au, {
                                pageId: GR,
                                anchor: yR
                              })]
                            })
                          }

                          function Wu(RR) {
                            let {
                              section: JR
                            } = RR;
                            return (0, eR.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, eR.jsx)(fG, {
                                level: 2,
                                text: JR.heading.text,
                                anchor: JR.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, eR.jsx)("div", {
                                className: "DocsProse",
                                children: (0, eR.jsx)(rG, {
                                  blocks: JR.blocks
                                })
                              })]
                            })
                          }

                          function Au(RR) {
                            let {
                              section: JR
                            } = RR;
                            return (0, eR.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, eR.jsx)(fG, {
                                level: JR.heading.level,
                                text: JR.heading.text,
                                anchor: JR.heading.anchor
                              }), (0, eR.jsx)(rG, {
                                blocks: JR.blocks
                              })]
                            })
                          }
                          const Cu = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function Xu(RR) {
                            let {
                              page: JR,
                              section: GR
                            } = RR;
                            if ("methods" === JR.layout || "callbacks" === JR.layout) return (0, eR.jsx)(Lu, {
                              method: MG(GR),
                              pageId: JR.id,
                              anchor: GR.heading.anchor,
                              isCallback: "callbacks" === JR.layout
                            });
                            if ("settings" === JR.layout) {
                              const RR = function(RR) {
                                const JR = {
                                  name: RR.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const yR of RR.blocks) {
                                  var GR;
                                  if (XG(yR)) continue;
                                  const RR = "paragraph" === yR.kind ? yR.text.match(BG) : null;
                                  if (!RR) {
                                    JR.description.push(yR);
                                    continue
                                  }
                                  const tR = null !== (GR = CG(RR[2])) && void 0 !== GR ? GR : RR[2];
                                  "Type" === RR[1] ? JR.type = tR : "Default" === RR[1] ? JR.defaultValue = tR : "" !== tR && (JR.example = tR)
                                }
                                return JR.type ? JR : null
                              }(GR);
                              if (RR) return (0, eR.jsx)(Uu, {
                                setting: RR,
                                pageId: JR.id,
                                anchor: GR.heading.anchor,
                                setterSnippet: JR.setterSnippet
                              })
                            }
                            return "snippets" === JR.layout ? (0, eR.jsx)(Wu, {
                              section: GR
                            }) : "changelog" === JR.layout ? (0, eR.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, eR.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, eR.jsx)(fG, {
                                  level: 2,
                                  text: GR.heading.text,
                                  anchor: GR.heading.anchor
                                })
                              }), (0, eR.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, eR.jsx)(rG, {
                                  blocks: lG(GR.blocks)
                                })
                              })]
                            }) : JR.gallery ? (0, eR.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, eR.jsx)(fG, {
                                level: GR.heading.level,
                                text: GR.heading.text,
                                anchor: GR.heading.anchor
                              }), (0, eR.jsx)(py, {
                                kind: JR.gallery,
                                content: mR(JR),
                                blocks: GR.blocks
                              })]
                            }) : (0, eR.jsx)(Au, {
                              section: GR
                            })
                          }

                          function Mu(RR) {
                            let {
                              page: JR,
                              onTocChange: GR
                            } = RR;
                            const tR = mR(JR),
                              [uR, ZR] = (0, yR.useState)(""),
                              qR = "article" !== JR.layout,
                              iR = LG(JR.gallery) ? JR.gallery : null,
                              fR = null !== iR,
                              VR = uR.trim().toLowerCase(),
                              KR = (0, yR.useRef)(null),
                              wR = (0, yR.useCallback)((RR => {
                                var JR;
                                null === (JR = KR.current) || void 0 === JR || JR.preview(RR)
                              }), []),
                              rR = (0, yR.useMemo)((() => {
                                if (!JR.hasParticlePlayground) return [];
                                const RR = vG(tR.intro).find((RR => "names" === RR.kind && !RR.names.some((RR => null !== IG(RR.name)))));
                                return "names" === (null === RR || void 0 === RR ? void 0 : RR.kind) ? RR.names.map((RR => RR.name)) : []
                              }), [JR, tR]),
                              aR = (0, yR.useMemo)((() => {
                                if (!JR.hasTextPlayground) return [];
                                const RR = tR.sections.flatMap((RR => RR.blocks.flatMap((RR => {
                                  var JR;
                                  return (null !== (JR = bG(RR)) && void 0 !== JR ? JR : []).flatMap((RR => IJ(RR.name) ? [RR.name] : []))
                                }))));
                                return [...new Set(RR)]
                              }), [JR, tR]),
                              LR = (0, yR.useMemo)((() => VR ? tR.sections.filter((RR => function(RR, JR) {
                                return !!RR.heading.text.toLowerCase().includes(JR) || RR.blocks.some((RR => (0, BR.i)(RR).toLowerCase().includes(JR)))
                              }(RR, VR))) : tR.sections), [tR, VR]),
                              nR = (0, yR.useMemo)((() => function(RR, JR) {
                                return "article" !== RR.layout ? JR.map((RR => ({
                                  anchor: RR.heading.anchor,
                                  text: RR.heading.text,
                                  level: 2
                                }))) : JR.flatMap((RR => {
                                  const JR = RR.blocks.flatMap((RR => "heading" === RR.kind && 3 === RR.level ? [{
                                    anchor: RR.anchor,
                                    text: RR.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: RR.heading.anchor,
                                    text: RR.heading.text,
                                    level: 2
                                  }, ...JR]
                                }))
                              }(JR, LR)), [JR, LR]);
                            return (0, yR.useEffect)((() => {
                              GR(nR)
                            }), [nR, GR]), (0, eR.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, eR.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, eR.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: tR.title || JR.title
                                }), (0, eR.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: JR.summary
                                }), (0, eR.jsx)(Qy, {
                                  page: JR
                                }), qR && (0, eR.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, eR.jsxs)("span", {
                                    children: [(0, eR.jsx)("strong", {
                                      children: tR.sections.length
                                    }), " ", Cu[JR.layout]]
                                  })
                                })]
                              }), "" === JR.slug && (0, eR.jsx)(by, {}), iR && (0, eR.jsx)(Ny, {
                                kind: iR
                              }, iR), JR.hasParticlePlayground && (0, eR.jsx)(it, {
                                ref: KR,
                                textures: rR
                              }), !fR && tR.intro.length > 0 && (0, eR.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: JR.gallery ? (0, eR.jsx)(ny.Provider, {
                                  value: JR.hasParticlePlayground ? wR : null,
                                  children: (0, eR.jsx)(py, {
                                    kind: JR.gallery,
                                    content: tR,
                                    blocks: tR.intro
                                  })
                                }) : (0, eR.jsx)(rG, {
                                  blocks: lG(tR.intro)
                                })
                              }), JR.hasTextPlayground && (0, eR.jsx)(lt, {
                                fontAwesomeIcons: aR
                              }), JR.hasVoicePlayground && (0, eR.jsx)(st, {}), JR.childPageIds && (0, eR.jsx)(by, {
                                cards: JR.childPageIds.map((RR => ({
                                  pageId: RR
                                }))),
                                label: JR.title
                              }), qR && (0, eR.jsx)(WG, {
                                className: "DocsFilterBar",
                                value: uR,
                                placeholder: `Filter ${tR.sections.length} ${Cu[JR.layout]}\u2026`,
                                label: `Filter ${Cu[JR.layout]}`,
                                onChange: ZR,
                                count: VR ? {
                                  visible: LR.length,
                                  total: tR.sections.length
                                } : null
                              }), !fR && (0, eR.jsxs)("div", {
                                className: `DocsSections Layout-${JR.layout}`,
                                children: [LR.map((RR => (0, eR.jsx)(Xu, {
                                  page: JR,
                                  section: RR
                                }, RR.heading.anchor))), 0 === LR.length && (0, eR.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", Cu[JR.layout], " match \u201c", uR, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const Bu = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function lu(RR) {
                            let {
                              entry: JR,
                              isActive: GR,
                              onNavigate: yR,
                              label: tR,
                              children: ZR
                            } = RR;
                            return (0, eR.jsx)("a", {
                              href: `#${JR.anchor}`,
                              "aria-label": tR,
                              className: uR()(`Level${JR.level}`, {
                                Active: GR
                              }),
                              "aria-current": GR ? "location" : void 0,
                              onClick: RR => {
                                RR.preventDefault(), yR(JR.anchor)
                              },
                              children: ZR
                            })
                          }

                          function pu(RR) {
                            let {
                              toc: JR,
                              activeAnchor: GR,
                              onNavigate: tR
                            } = RR;
                            const ZR = Math.max(0, JR.findIndex((RR => RR.anchor === GR))),
                              qR = (0, yR.useRef)(null),
                              iR = (0, yR.useRef)(!1);
                            (0, yR.useEffect)((() => {
                              var RR, GR;
                              const yR = null === (RR = qR.current) || void 0 === RR ? void 0 : RR.closest(".DocsToc"),
                                tR = null === (GR = qR.current) || void 0 === GR ? void 0 : GR.querySelector(".DocsTimelineNotch.Active");
                              if (!yR || !tR) return;
                              let uR = 0;
                              if (ZR === JR.length - 1) uR = yR.scrollHeight;
                              else if (ZR > 0) {
                                const RR = yR.getBoundingClientRect(),
                                  JR = tR.getBoundingClientRect();
                                uR = yR.scrollTop + JR.top + JR.height / 2 - (RR.top + yR.clientHeight / 2)
                              }
                              yR.scrollTo({
                                top: uR,
                                behavior: iR.current ? "smooth" : "auto"
                              }), iR.current = !0
                            }), [ZR, JR.length]);
                            const fR = [];
                            return JR.forEach(((RR, JR) => {
                              var GR, yR, tR;
                              const uR = function(RR) {
                                  const JR = RR.trim().match(Bu);
                                  return JR ? {
                                    day: JR[1],
                                    month: `${JR[2]} ${JR[3]}`
                                  } : null
                                }(RR.text),
                                ZR = null !== (GR = null === uR || void 0 === uR ? void 0 : uR.month) && void 0 !== GR ? GR : null;
                              null !== ZR && (null === (yR = fR.at(-1)) || void 0 === yR ? void 0 : yR.month) === ZR || fR.push({
                                month: ZR,
                                entries: []
                              }), fR.at(-1).entries.push({
                                entry: RR,
                                day: null !== (tR = null === uR || void 0 === uR ? void 0 : uR.day) && void 0 !== tR ? tR : null,
                                index: JR
                              })
                            })), (0, eR.jsx)("ol", {
                              ref: qR,
                              className: "DocsTimeline",
                              children: fR.map((RR => {
                                let {
                                  month: JR,
                                  entries: GR
                                } = RR;
                                return (0, eR.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [JR && (0, eR.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: JR
                                  }), (0, eR.jsx)("ol", {
                                    children: GR.map((RR => {
                                      let {
                                        entry: JR,
                                        day: GR,
                                        index: yR
                                      } = RR;
                                      return (0, eR.jsx)("li", {
                                        className: uR()("DocsTimelineNotch", {
                                          Passed: yR < ZR,
                                          Active: yR === ZR
                                        }),
                                        children: (0, eR.jsx)(lu, {
                                          entry: JR,
                                          isActive: yR === ZR,
                                          onNavigate: tR,
                                          label: JR.text,
                                          children: (0, eR.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== GR && void 0 !== GR ? GR : JR.text
                                          })
                                        })
                                      }, JR.anchor)
                                    }))
                                  })]
                                }, GR[0].entry.anchor)
                              }))
                            })
                          }

                          function gu(RR) {
                            let {
                              isChangelog: JR,
                              toc: GR,
                              activeAnchor: yR,
                              onNavigate: tR
                            } = RR;
                            return 0 === GR.length ? null : (0, eR.jsxs)(eR.Fragment, {
                              children: [(0, eR.jsx)("div", {
                                className: "DocsTocTitle",
                                children: JR ? "Updates" : "On this page"
                              }), JR ? (0, eR.jsx)(pu, {
                                toc: GR,
                                activeAnchor: yR,
                                onNavigate: tR
                              }) : (0, eR.jsx)("ul", {
                                children: GR.map((RR => (0, eR.jsx)("li", {
                                  children: (0, eR.jsx)(lu, {
                                    entry: RR,
                                    isActive: RR.anchor === yR,
                                    onNavigate: tR,
                                    children: RR.text.replace(/`/g, "")
                                  })
                                }, RR.anchor)))
                              })]
                            })
                          }
                          const bu = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            vu = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            Ou = 20,
                            xu = 10,
                            Nu = 40,
                            Du = 120;
                          let Hu;

                          function ou(RR) {
                            const JR = RR.gallery;
                            if (!JR) return [];
                            if (LG(JR)) return function(RR) {
                              return UG(RR).entries.map((RR => RR.name))
                            }(JR).map((GR => ({
                              page: RR,
                              anchor: xG(JR, GR),
                              title: GR,
                              kind: vu[JR],
                              text: "",
                              listedUnder: RR.title
                            })));
                            const GR = mR(RR);
                            return (0, BR.v)(GR).flatMap((yR => {
                              const tR = yR.heading ? `${RR.title} \u203a ${yR.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : RR.title;
                              return DG(JR, GR, yR.blocks).flatMap((GR => "names" !== GR.kind ? [] : GR.names.map((yR => {
                                const uR = GR.isSongs ? "Song" : vu[JR];
                                return {
                                  page: RR,
                                  anchor: yR.anchor,
                                  title: yR.name,
                                  kind: uR,
                                  text: "",
                                  listedUnder: tR
                                }
                              }))))
                            }))
                          }

                          function cu(RR, JR, GR) {
                            const yR = RR.title.toLowerCase();
                            let tR = 0;
                            if (yR === JR) tR = 100;
                            else if (yR.startsWith(JR)) tR = 80;
                            else if (yR.includes(JR)) tR = 60;
                            else if (GR.every((RR => yR.includes(RR)))) tR = 45;
                            else {
                              if (!RR.text.toLowerCase().includes(JR)) return 0;
                              tR = 20
                            }
                            return tR - Math.min(yR.length / 10, 9) + ("Page" === RR.kind ? 8 : "Method" === RR.kind ? 3 : 0) - (RR.listedUnder ? Ou : 0)
                          }

                          function Pu(RR, JR) {
                            const GR = RR.toLowerCase().indexOf(JR),
                              yR = Math.max(0, GR - Du / 3);
                            return `${yR>0?"\u2026":""}${RR.slice(yR,yR+Du)}${yR+Du<RR.length?"\u2026":""}`
                          }

                          function Iu(RR) {
                            let {
                              text: JR,
                              query: GR
                            } = RR;
                            const yR = GR ? JR.toLowerCase().indexOf(GR) : -1;
                            return -1 === yR ? (0, eR.jsx)(eR.Fragment, {
                              children: JR
                            }) : (0, eR.jsxs)(eR.Fragment, {
                              children: [JR.slice(0, yR), (0, eR.jsx)("mark", {
                                children: JR.slice(yR, yR + GR.length)
                              }), JR.slice(yR + GR.length)]
                            })
                          }

                          function mu(RR) {
                            let {
                              basePath: JR,
                              onClose: GR
                            } = RR;
                            const tR = (0, qR.v)(),
                              [ZR, iR] = (0, yR.useState)(""),
                              [fR, VR] = (0, yR.useState)(0),
                              KR = (0, yR.useRef)(null),
                              wR = (0, yR.useRef)(null),
                              rR = ZR.trim().toLowerCase(),
                              aR = (0, yR.useMemo)((() => {
                                const RR = (Hu || (Hu = oR.flatMap((RR => {
                                  const JR = mR(RR);
                                  return [{
                                    page: RR,
                                    anchor: "",
                                    title: RR.title,
                                    kind: "Page",
                                    text: RR.summary
                                  }, ...JR.sections.flatMap((JR => {
                                    const GR = JR.blocks.filter((RR => "paragraph" === RR.kind)).map(BR.i).join(" ").replace(/[`*]/g, ""),
                                      yR = {
                                        page: RR,
                                        anchor: JR.heading.anchor,
                                        title: JR.heading.text.replace(/`/g, ""),
                                        kind: bu[RR.layout],
                                        text: GR
                                      },
                                      tR = JR.blocks.flatMap((JR => "article" === RR.layout && "heading" === JR.kind && 3 === JR.level ? [{
                                        page: RR,
                                        anchor: JR.anchor,
                                        title: JR.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: yR.title
                                      }] : []));
                                    return [yR, ...tR]
                                  })), ...ou(RR)]
                                }))), Hu);
                                if (!rR) return RR.filter((RR => "Page" === RR.kind));
                                const JR = rR.split(/\s+/);
                                let GR = 0;
                                return RR.map((RR => ({
                                  entry: RR,
                                  score: cu(RR, rR, JR)
                                }))).filter((RR => RR.score > 0)).sort(((RR, JR) => JR.score - RR.score)).filter((RR => !RR.entry.listedUnder || (GR++, GR <= xu))).slice(0, Nu).map((RR => RR.entry))
                              }), [rR]);
                            (0, yR.useEffect)((() => {
                              VR(0)
                            }), [rR]), (0, yR.useEffect)((() => {
                              const RR = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === RR || void 0 === RR || RR.focus()
                              }
                            }), []), (0, yR.useEffect)((() => {
                              var RR, JR;
                              null === (RR = KR.current) || void 0 === RR || null === (JR = RR.querySelector(".Active")) || void 0 === JR || JR.scrollIntoView({
                                block: "nearest"
                              })
                            }), [fR]);
                            const nR = RR => {
                              tR(dR(JR, RR.page, RR.anchor)), GR()
                            };
                            return (0, eR.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: RR => {
                                RR.target === RR.currentTarget && GR()
                              },
                              children: (0, eR.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: RR => {
                                  RR.target !== wR.current && RR.preventDefault()
                                },
                                onKeyDown: RR => {
                                  if ("Escape" === RR.key) GR();
                                  else if ("Tab" === RR.key) {
                                    var JR;
                                    RR.preventDefault(), null === (JR = wR.current) || void 0 === JR || JR.focus()
                                  }
                                },
                                children: [(0, eR.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, eR.jsx)(LR, {
                                    name: "magnifying-glass"
                                  }), (0, eR.jsx)("input", {
                                    ref: wR,
                                    autoFocus: !0,
                                    value: ZR,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": aR.length > 0 ? `DocsSearchResult-${fR}` : void 0,
                                    onChange: RR => {
                                      iR(RR.target.value)
                                    },
                                    onKeyDown: RR => {
                                      if ("ArrowDown" === RR.key || "ArrowUp" === RR.key) {
                                        RR.preventDefault();
                                        const JR = "ArrowDown" === RR.key ? 1 : -1;
                                        VR((fR + JR + aR.length) % Math.max(aR.length, 1))
                                      } else "Enter" === RR.key && aR[fR] && nR(aR[fR])
                                    }
                                  }), (0, eR.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, eR.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: KR,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!rR && (0, eR.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), aR.map(((RR, JR) => {
                                    var GR;
                                    return (0, eR.jsxs)("li", {
                                      id: `DocsSearchResult-${JR}`,
                                      role: "option",
                                      "aria-selected": JR === fR,
                                      className: uR()("DocsSearchResult", {
                                        Active: JR === fR
                                      }),
                                      onMouseMove: () => {
                                        VR(JR)
                                      },
                                      onClick: () => {
                                        nR(RR)
                                      },
                                      children: [(0, eR.jsx)(LR, {
                                        name: RR.page.icon
                                      }), (0, eR.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, eR.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, eR.jsx)(Iu, {
                                            text: RR.title,
                                            query: rR
                                          })
                                        }), RR.text && (0, eR.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, eR.jsx)(Iu, {
                                            text: Pu(RR.text, rR),
                                            query: rR
                                          })
                                        })]
                                      }), (0, eR.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === RR.kind ? "Page" : null !== (GR = RR.listedUnder) && void 0 !== GR ? GR : `${RR.kind} \xb7 ${RR.page.title}`
                                      })]
                                    }, `${RR.page.id}#${RR.anchor}`)
                                  })), rR && 0 === aR.length && (0, eR.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", ZR, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function zu(RR, JR) {
                            if (JR < 10) return `${RR.toFixed(1)}s`;
                            const GR = Math.floor(RR);
                            return `${Math.floor(GR/60)}:${String(GR%60).padStart(2,"0")}`
                          }

                          function Su() {
                            const RR = Vy((RR => RR.track)),
                              JR = Vy((RR => RR.volume)),
                              [GR, tR] = (0, yR.useState)(0),
                              ZR = (0, yR.useRef)(Jy);
                            if ((0, yR.useEffect)((() => {
                                if (!RR) return;
                                if (tR(ey()), "playing" !== RR.status) return;
                                let JR = 0;
                                const GR = () => {
                                  tR(ey()), JR = requestAnimationFrame(GR)
                                };
                                return JR = requestAnimationFrame(GR), () => {
                                  cancelAnimationFrame(JR)
                                }
                              }), [RR]), !RR) return null;
                            const qR = "paused" !== RR.status,
                              iR = Math.min(GR, RR.duration);
                            return (0, eR.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, eR.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, eR.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": qR ? `Pause ${RR.name}` : `Play ${RR.name}`,
                                  onClick: ry,
                                  children: (0, eR.jsx)(LR, {
                                    name: qR ? "pause" : "play"
                                  })
                                }), (0, eR.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, eR.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, eR.jsx)("code", {
                                      children: RR.name
                                    }), (0, eR.jsx)("span", {
                                      children: RR.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, eR.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, eR.jsx)("span", {
                                      children: zu(iR, RR.duration)
                                    }), (0, eR.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: RR.duration || 1,
                                      step: .01,
                                      value: iR,
                                      disabled: 0 === RR.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${zu(iR,RR.duration)} of ${zu(RR.duration,RR.duration)}`,
                                      onChange: RR => {
                                        const JR = Number(RR.target.value);
                                        ! function(RR) {
                                          var JR;
                                          Zy = RR, null === (JR = ty) || void 0 === JR || JR.seek(RR)
                                        }(JR), tR(JR)
                                      }
                                    }), (0, eR.jsx)("span", {
                                      children: RR.duration > 0 ? zu(RR.duration, RR.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, eR.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, eR.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === JR ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === JR ? ay(ZR.current) : (ZR.current = JR, ay(0))
                                    },
                                    children: (0, eR.jsx)(LR, {
                                      name: "volume",
                                      className: uR()({
                                        Muted: 0 === JR
                                      })
                                    })
                                  }), (0, eR.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: JR,
                                    "aria-label": "Volume",
                                    onChange: RR => {
                                      ay(Number(RR.target.value))
                                    }
                                  })]
                                }), (0, eR.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var JR;
                                    null === (JR = document.querySelector(`[data-docs-track="${CSS.escape(Gy(RR.name,RR.isSong))}"]`)) || void 0 === JR || JR.focus(), Ly()
                                  },
                                  children: (0, eR.jsx)(LR, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var ju = GR(46);
                          const du = "docsTheme",
                            Eu = window.matchMedia("(prefers-color-scheme: light)");

                          function Yu(RR) {
                            let {
                              theme: JR,
                              onChange: GR
                            } = RR;
                            const yR = "dark" === JR ? "light" : "dark";
                            return (0, eR.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${yR} theme`,
                              title: `Switch to ${yR} theme`,
                              onClick: () => {
                                GR(yR)
                              },
                              children: (0, eR.jsx)(LR, {
                                name: "dark" === JR ? "moon" : "sun"
                              })
                            })
                          }
                          const ku = "https://github.com/Bloxdy/code-api",
                            Qu = "https://discord.gg/playbloxd",
                            Fu = 180,
                            Tu = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function su(RR) {
                            let {
                              basePath: JR,
                              activePageId: GR,
                              onNavigate: yR
                            } = RR;
                            return (0, eR.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: cR.map((RR => (0, eR.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, eR.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: RR.title
                                }), RR.pageIds.map((RR => {
                                  var tR;
                                  const qR = PR(RR);
                                  return (0, eR.jsxs)(ZR.b, {
                                    to: dR(JR, qR),
                                    className: uR()("DocsNavLink", {
                                      Active: qR.id === GR
                                    }),
                                    "aria-current": qR.id === GR ? "page" : void 0,
                                    onClick: yR,
                                    children: [(0, eR.jsx)(LR, {
                                      name: qR.icon
                                    }), (0, eR.jsx)("span", {
                                      children: null !== (tR = qR.navTitle) && void 0 !== tR ? tR : qR.title
                                    })]
                                  }, qR.id)
                                }))]
                              }, RR.title)))
                            })
                          }

                          function hu(RR) {
                            let {
                              basePath: JR,
                              pageId: GR
                            } = RR;
                            const yR = cR.flatMap((RR => RR.pageIds)),
                              tR = yR.indexOf(GR),
                              uR = tR > 0 ? PR(yR[tR - 1]) : null,
                              qR = tR < yR.length - 1 ? PR(yR[tR + 1]) : null;
                            return (0, eR.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [uR ? (0, eR.jsxs)(ZR.b, {
                                className: "DocsPagerLink Previous",
                                to: dR(JR, uR),
                                children: [(0, eR.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, eR.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: uR.title
                                })]
                              }) : (0, eR.jsx)("span", {}), qR && (0, eR.jsxs)(ZR.b, {
                                className: "DocsPagerLink Next",
                                to: dR(JR, qR),
                                children: [(0, eR.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, eR.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: qR.title
                                })]
                              })]
                            })
                          }

                          function RZ(RR) {
                            let {
                              basePath: JR,
                              embedded: GR = !1
                            } = RR;
                            const {
                              pageSlug: tR = ""
                            } = (0, qR.x)(), fR = (0, qR.r)(), VR = (0, qR.v)(), KR = (wR = tR, oR.find((RR => RR.slug === wR)));
                            var wR;
                            const [rR, aR] = function() {
                              const [RR, JR] = (0, yR.useState)((() => {
                                const RR = ju.i.getItem(du);
                                return "dark" === RR || "light" === RR ? RR : null
                              })), [GR, tR] = (0, yR.useState)(Eu.matches ? "light" : "dark");
                              return (0, yR.useEffect)((() => {
                                const RR = () => {
                                  tR(Eu.matches ? "light" : "dark")
                                };
                                return Eu.addEventListener("change", RR), () => {
                                  Eu.removeEventListener("change", RR)
                                }
                              }), []), [null !== RR && void 0 !== RR ? RR : GR, RR => {
                                ju.i.setItem(du, RR), JR(RR)
                              }]
                            }(), [nR, UR] = (0, yR.useState)(null), [WR, AR] = (0, yR.useState)(!1), [CR, XR] = (0, yR.useState)(!1), [MR, lR] = (0, yR.useState)([]), pR = function(RR, JR) {
                              const [GR, tR] = (0, yR.useState)("");
                              return (0, yR.useEffect)((() => {
                                if (!JR) return;
                                let GR = 0;
                                const yR = () => {
                                    var yR, uR;
                                    GR = 0;
                                    const ZR = JR.getBoundingClientRect().top + Fu;
                                    let qR = null !== (yR = null === (uR = RR[0]) || void 0 === uR ? void 0 : uR.anchor) && void 0 !== yR ? yR : "";
                                    for (const JR of RR) {
                                      const RR = document.getElementById(JR.anchor);
                                      RR && RR.getBoundingClientRect().top <= ZR && (qR = JR.anchor)
                                    }
                                    JR.scrollTop + JR.clientHeight >= JR.scrollHeight - 2 && JR.scrollTop > 0 && RR.length > 0 && (qR = RR[RR.length - 1].anchor), tR(qR)
                                  },
                                  uR = () => {
                                    GR || (GR = requestAnimationFrame(yR))
                                  };
                                return yR(), JR.addEventListener("scroll", uR, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(GR), JR.removeEventListener("scroll", uR)
                                }
                              }), [RR, JR]), GR
                            }(MR, nR), gR = "" === tR && fR.hash ? function(RR) {
                              const JR = (0, BR.r)(RR);
                              if (zR(PR("welcome"), JR)) return null;
                              const GR = Object.hasOwn(jR, JR) ? jR[JR] : null;
                              if (GR) return {
                                page: PR(GR.pageId),
                                anchor: GR.anchor
                              };
                              const yR = PR("readme");
                              return zR(yR, JR) ? {
                                page: yR,
                                anchor: JR
                              } : SR(`#${JR}`)
                            }(fR.hash) : null;
                            (0, yR.useEffect)((() => (iR.d.set({
                              musicOnFromPage: !1
                            }), () => {
                              iR.d.set({
                                musicOnFromPage: !0
                              }), Ly()
                            })), []), (0, yR.useEffect)((() => {
                              const RR = RR => {
                                const JR = RR.target;
                                if (JR.closest(".DocsTextDialog")) return;
                                const GR = JR.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(JR.tagName);
                                "k" === RR.key && (RR.metaKey || RR.ctrlKey) || "/" === RR.key && !GR ? (RR.preventDefault(), XR(!0)) : "Escape" === RR.key && AR(!1)
                              };
                              return window.addEventListener("keydown", RR), () => {
                                window.removeEventListener("keydown", RR)
                              }
                            }), []);
                            const bR = (0, yR.useRef)(null);
                            (0, yR.useLayoutEffect)((() => {
                              var RR, JR;
                              if (!nR) return;
                              const GR = bR.current === fR.pathname;
                              bR.current = fR.pathname;
                              const yR = (0, BR.r)(fR.hash),
                                tR = yR ? document.getElementById(yR) : null;
                              if (null === (RR = nR.querySelector(".DocsTargeted")) || void 0 === RR || RR.classList.remove("DocsTargeted"), null === tR || void 0 === tR || null === (JR = tR.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === JR || JR.classList.add("DocsTargeted"), tR) {
                                var uR;
                                const RR = tR.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (uR = tR.closest(".DocsChangelogEntry")) && void 0 !== uR ? uR : tR).scrollIntoView({
                                  block: RR ? "center" : "start",
                                  behavior: GR ? "smooth" : "auto"
                                })
                              } else GR || nR.scrollTo({
                                top: 0
                              })
                            }), [nR, fR.pathname, fR.hash, fR.key]);
                            const vR = (0, yR.useCallback)((() => {
                                AR(!1)
                              }), []),
                              OR = (0, yR.useCallback)((RR => {
                                VR({
                                  hash: RR
                                })
                              }), [VR]);
                            if (gR) return (0, eR.jsx)(qR.d, {
                              replace: !0,
                              to: dR(JR, gR.page, gR.anchor)
                            });
                            if (!KR) return (0, eR.jsx)(qR.d, {
                              replace: !0,
                              to: JR
                            });
                            const xR = GR ? "div" : "main";
                            return (0, eR.jsx)(rJ.Provider, {
                              value: JR,
                              children: (0, eR.jsx)(eJ.Provider, {
                                value: nR,
                                children: (0, eR.jsxs)("div", {
                                  ref: UR,
                                  className: uR()("DocsSite", {
                                    Embedded: GR,
                                    NavOpen: WR
                                  }),
                                  "data-theme": rR,
                                  children: [(0, eR.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, eR.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": WR ? "Close menu" : "Open menu",
                                      "aria-expanded": WR,
                                      onClick: () => {
                                        AR(!WR)
                                      },
                                      children: (0, eR.jsx)(LR, {
                                        name: WR ? "cross" : "menu"
                                      })
                                    }), (0, eR.jsxs)(ZR.b, {
                                      to: JR,
                                      className: "DocsBrand",
                                      children: [(0, eR.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, eR.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, eR.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, eR.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        XR(!0)
                                      },
                                      children: [(0, eR.jsx)(LR, {
                                        name: "magnifying-glass"
                                      }), (0, eR.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, eR.jsxs)("kbd", {
                                        children: [Tu ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, eR.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, eR.jsxs)("a", {
                                        href: Qu,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, eR.jsx)(LR, {
                                          name: "discord"
                                        }), (0, eR.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, eR.jsxs)("a", {
                                        href: ku,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, eR.jsx)(LR, {
                                          name: "external-link"
                                        }), (0, eR.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !GR && (0, eR.jsxs)(ZR.b, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, eR.jsx)(LR, {
                                          name: "play"
                                        }), (0, eR.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, eR.jsx)(Yu, {
                                        theme: rR,
                                        onChange: aR
                                      })]
                                    })]
                                  }), (0, eR.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, eR.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, eR.jsx)(su, {
                                        basePath: JR,
                                        activePageId: KR.id,
                                        onNavigate: vR
                                      })
                                    }), (0, eR.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: vR
                                    }), (0, eR.jsxs)(xR, {
                                      className: "DocsMain",
                                      children: [(0, eR.jsx)(Mu, {
                                        page: KR,
                                        onTocChange: lR
                                      }, KR.id), (0, eR.jsx)(hu, {
                                        basePath: JR,
                                        pageId: KR.id
                                      })]
                                    }), (0, eR.jsx)("aside", {
                                      className: uR()("DocsToc", {
                                        Timeline: "changelog" === KR.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, eR.jsx)(gu, {
                                        isChangelog: "changelog" === KR.layout,
                                        toc: MR,
                                        activeAnchor: pR,
                                        onNavigate: OR
                                      })
                                    })]
                                  }), (0, eR.jsx)(Su, {}), CR && (0, eR.jsx)(mu, {
                                    basePath: JR,
                                    onClose: () => {
                                      XR(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 5635: (RR, JR, GR) => {
                          GR.d(JR, {
                            A: () => wR,
                            d: () => yR,
                            e: () => ZR,
                            i: () => LR,
                            l: () => aR,
                            p: () => qR,
                            r: () => tR,
                            s: () => uR,
                            v: () => eR,
                            x: () => rR
                          });
                          const yR = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function tR(RR) {
                            try {
                              return decodeURIComponent(RR.slice(1))
                            } catch {
                              return RR.slice(1)
                            }
                          }

                          function uR(RR) {
                            return RR.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const ZR = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${yR.source}`, "g");

                          function qR(RR, JR) {
                            return 2 === RR.length ? JR.replace(/^ (.*) $/, "$1") : JR
                          }

                          function iR(RR) {
                            return "" === RR.trim()
                          }

                          function fR(RR) {
                            const JR = [];
                            for (const GR of RR.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) JR.length > 0 && JR[JR.length - 1].endsWith("\\") ? JR[JR.length - 1] += `|${GR}` : JR.push(GR);
                            return JR.map((RR => RR.trim().replaceAll("\\|", "|")))
                          }
                          const VR = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function KR(RR) {
                            const JR = [],
                              GR = [{
                                indent: -1,
                                items: JR
                              }];
                            let yR = null;
                            for (const tR of RR) {
                              const RR = tR.match(VR);
                              if (!RR) {
                                yR && (yR.text += ` ${tR.trim()}`);
                                continue
                              }
                              const JR = RR[1].replace(/\t/g, "  ").length;
                              for (; JR <= GR[GR.length - 1].indent;) GR.pop();
                              yR = {
                                text: RR[3].trim(),
                                children: []
                              }, GR[GR.length - 1].items.push(yR), GR.push({
                                indent: JR,
                                items: yR.children
                              })
                            }
                            return JR
                          }

                          function wR(RR) {
                            const JR = RR.replace(/\r\n/g, "\n").split("\n"),
                              GR = [];
                            let yR = 0;
                            for (; yR < JR.length;) {
                              const RR = JR[yR];
                              if (iR(RR)) {
                                yR++;
                                continue
                              }
                              const tR = RR.match(/^\s*```\s*(\w*)\s*$/);
                              if (tR) {
                                const RR = [];
                                for (yR++; yR < JR.length && !/^\s*```\s*$/.test(JR[yR]);) RR.push(JR[yR]), yR++;
                                yR++, GR.push({
                                  kind: "code",
                                  lang: tR[1] || "text",
                                  code: RR.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const ZR = RR.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (ZR) {
                                const RR = ZR[2].trim();
                                GR.push({
                                  kind: "heading",
                                  level: ZR[1].length,
                                  text: RR,
                                  anchor: uR(RR)
                                }), yR++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(RR)) {
                                GR.push({
                                  kind: "rule"
                                }), yR++;
                                continue
                              }
                              if (RR.trim().startsWith("|") && yR + 1 < JR.length && /^\s*\|[\s:|-]+\|\s*$/.test(JR[yR + 1])) {
                                const tR = fR(RR),
                                  uR = [];
                                for (yR += 2; yR < JR.length && JR[yR].trim().startsWith("|");) uR.push(fR(JR[yR])), yR++;
                                GR.push({
                                  kind: "table",
                                  header: tR,
                                  rows: uR
                                });
                                continue
                              }
                              if (RR.startsWith(">")) {
                                const RR = [];
                                for (; yR < JR.length && JR[yR].startsWith(">");) RR.push(JR[yR].replace(/^>\s?/, "")), yR++;
                                GR.push({
                                  kind: "quote",
                                  blocks: wR(RR.join("\n"))
                                });
                                continue
                              }
                              if (VR.test(RR)) {
                                const tR = [],
                                  uR = /^\s*\d+\./.test(RR);
                                for (; yR < JR.length && !iR(JR[yR]) && (VR.test(JR[yR]) || /^\s+\S/.test(JR[yR]));) tR.push(JR[yR]), yR++;
                                GR.push({
                                  kind: "list",
                                  ordered: uR,
                                  items: KR(tR)
                                });
                                continue
                              }
                              const qR = [];
                              for (; yR < JR.length && !iR(JR[yR]) && !/^\s*```/.test(JR[yR]) && !/^#{1,6}\s/.test(JR[yR]) && !JR[yR].startsWith(">") && !VR.test(JR[yR]) && (!JR[yR].trim().startsWith("|") || 0 !== qR.length);) qR.push(JR[yR].trim()), yR++;
                              0 === qR.length && (qR.push(JR[yR].trim()), yR++), GR.push({
                                kind: "paragraph",
                                text: qR.join(" ")
                              })
                            }
                            return GR
                          }

                          function rR(RR) {
                            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const GR = wR(RR);
                            let yR = "";
                            const tR = [],
                              uR = [],
                              ZR = new Map;
                            for (const fR of GR) {
                              if ("heading" === fR.kind) {
                                var qR;
                                const RR = (null !== (qR = ZR.get(fR.anchor)) && void 0 !== qR ? qR : 0) + 1;
                                ZR.set(fR.anchor, RR), RR > 1 && (fR.anchor = `${fR.anchor}-${RR}`)
                              }
                              if ("heading" === fR.kind && 1 === fR.level && !yR) {
                                yR = fR.text;
                                continue
                              }
                              if ("heading" === fR.kind && fR.level <= JR) {
                                uR.push({
                                  heading: fR,
                                  blocks: []
                                });
                                continue
                              }
                              const RR = uR.at(-1);
                              RR ? RR.blocks.push(fR) : tR.push(fR)
                            }
                            const iR = RR => {
                              for (;
                                "rule" === (null === (JR = RR.at(-1)) || void 0 === JR ? void 0 : JR.kind);) {
                                var JR;
                                RR.pop()
                              }
                            };
                            iR(tR);
                            for (const fR of uR) iR(fR.blocks);
                            return {
                              title: yR,
                              intro: tR,
                              sections: uR
                            }
                          }

                          function eR(RR) {
                            return [{
                              heading: null,
                              blocks: RR.intro
                            }, ...RR.sections.map((RR => ({
                              heading: RR.heading,
                              blocks: RR.blocks
                            })))]
                          }

                          function aR(RR) {
                            return RR.flatMap((RR => "code" === RR.kind ? [RR] : "quote" === RR.kind ? aR(RR.blocks) : []))
                          }

                          function LR(RR) {
                            switch (RR.kind) {
                              case "heading":
                              case "paragraph":
                                return RR.text;
                              case "code":
                                return RR.code;
                              case "table":
                                return [RR.header, ...RR.rows].map((RR => RR.join(" "))).join(" ");
                              case "list": {
                                const JR = RR => RR.map((RR => `${RR.text} ${JR(RR.children)}`)).join(" ");
                                return JR(RR.items)
                              }
                              case "quote":
                                return RR.blocks.map(LR).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 5719: (RR, JR, GR) => {
                          GR.d(JR, {
                            b: () => qR
                          });
                          var yR = GR(66),
                            tR = GR(359),
                            uR = GR(2123),
                            ZR = GR(1378);

                          function qR(RR) {
                            let {
                              text: JR
                            } = RR;
                            const GR = [];
                            let qR = "";
                            return (0, tR.dc)(JR).forEach(((RR, JR) => {
                              if ("string" === typeof RR || !(0, uR.c)(RR.icon)) return void(qR += "string" === typeof RR ? RR : RR.icon);
                              const tR = Math.max(0, qR.trimEnd().search(/\S{1,12}$/));
                              GR.push((0, ZR.jsxs)(yR.Fragment, {
                                children: [qR.slice(0, tR), (0, ZR.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [qR.slice(tR), (0, ZR.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": RR.icon,
                                    children: (0, ZR.jsx)(uR.b, {
                                      itemName: RR.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, JR)), qR = ""
                            })), GR.push(qR), (0, ZR.jsx)(ZR.Fragment, {
                              children: GR
                            })
                          }
                        }, 5653: (RR, JR, GR) => {
                          GR.d(JR, {
                            g: () => UR,
                            d: () => nR
                          });
                          var yR = GR(66),
                            tR = GR(1581),
                            uR = GR(2105),
                            ZR = GR(5656),
                            qR = GR(1378);
                          const iR = (0, yR.memo)((function(RR) {
                            let {
                              initialParameters: JR
                            } = RR;
                            const GR = (0, yR.useRef)(null),
                              tR = (0, yR.useRef)(null),
                              iR = (0, yR.useRef)(0),
                              fR = (0, yR.useRef)(null),
                              VR = JR.description,
                              KR = JR.Ou,
                              {
                                scale: wR,
                                rotation: rR
                              } = null !== JR && void 0 !== JR ? JR : {},
                              eR = (0, ZR.g)();
                            return (0, yR.useEffect)((() => {
                              const RR = eR.onFrame((() => {
                                const RR = eR.getState();
                                if (!RR.isActive || !GR.current || !tR.current) return;
                                const JR = RR.state;
                                if (GR.current.value = JR.progress, JR.clickCount > iR.current) {
                                  iR.current = JR.clickCount;
                                  const RR = tR.current;
                                  RR.classList.add("pulse"), fR.current = setTimeout((() => {
                                    RR.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(fR.current), RR()
                              }
                            }), [eR]), (0, qR.jsx)(qR.Fragment, {
                              children: (0, qR.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== wR && {
                                    "--scale": wR
                                  },
                                  ...null !== rR && {
                                    "--rotation": `${rR}deg`
                                  }
                                },
                                children: [(0, qR.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: GR
                                }), (0, qR.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: tR,
                                  children: (0, qR.jsx)(uR.c, {
                                    text: [{
                                      icon: KR
                                    }]
                                  })
                                }), (0, qR.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, qR.jsx)(uR.c, {
                                    text: VR
                                  })
                                })]
                              })
                            })
                          }));
                          var fR = GR(1163),
                            VR = GR.n(fR);
                          const KR = 2 * Math.PI * 90,
                            wR = (0, yR.memo)((function(RR) {
                              let {
                                initialParameters: JR
                              } = RR;
                              const GR = (0, yR.useRef)(null),
                                tR = (0, yR.useRef)(null),
                                iR = (0, yR.useRef)(null),
                                fR = JR.label,
                                wR = JR.icon,
                                rR = JR.Hu,
                                {
                                  scale: eR,
                                  rotation: aR,
                                  ou: LR
                                } = null !== JR && void 0 !== JR ? JR : {},
                                nR = (0, ZR.g)();
                              return (0, yR.useEffect)((() => {
                                const RR = nR.onFrame((() => {
                                  var RR, JR;
                                  const yR = nR.getState();
                                  if (!yR.isActive || !tR.current) return;
                                  const uR = yR.state,
                                    ZR = null !== (RR = uR.timeRemaining) && void 0 !== RR ? RR : 0,
                                    qR = null !== (JR = uR.Du) && void 0 !== JR ? JR : 1,
                                    fR = KR * (1 - ZR / qR);
                                  tR.current.style.strokeDashoffset = `${fR}`, GR.current && (GR.current.style.opacity = ZR > 0 ? "1" : "0"), iR.current && rR && (iR.current.textContent = `${(ZR/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  RR()
                                }
                              }), [nR, rR]), (0, qR.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: GR,
                                style: {
                                  ...null !== eR && {
                                    "--scale": eR
                                  },
                                  ...null !== aR && {
                                    "--rotation": `${aR}deg`
                                  }
                                },
                                children: [(0, qR.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, qR.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, qR.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, qR.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: KR,
                                      ref: tR
                                    })]
                                  }), (0, qR.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, qR.jsx)(uR.c, {
                                      text: [{
                                        icon: wR
                                      }],
                                      className: VR()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: LR
                                      })
                                    })
                                  })]
                                }), (0, qR.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, qR.jsx)(uR.c, {
                                    text: fR,
                                    className: "QTETimedClickLabelText"
                                  }), rR && (0, qR.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: iR
                                  })]
                                })]
                              })
                            })),
                            rR = (0, yR.memo)((function(RR) {
                              let {
                                initialParameters: JR
                              } = RR;
                              const GR = (0, yR.useRef)(null),
                                tR = (0, yR.useRef)(null),
                                iR = (0, yR.useRef)(null),
                                fR = (0, yR.useRef)(!1),
                                VR = JR.description,
                                KR = null === JR || void 0 === JR ? void 0 : JR.icon,
                                wR = (0, ZR.g)();
                              return (0, yR.useEffect)((() => {
                                const RR = wR.onFrame((() => {
                                  const RR = wR.getState();
                                  if (!RR.isActive) return;
                                  const JR = RR.state;
                                  if (GR.current) {
                                    const RR = 100 * (JR.catchZonePosition - JR.Pu / 2);
                                    GR.current.style.left = `${RR}%`, GR.current.style.width = 100 * JR.Pu + "%", JR.isCatching !== fR.current && (fR.current = JR.isCatching, JR.isCatching ? GR.current.classList.add("catching") : GR.current.classList.remove("catching"))
                                  }
                                  tR.current && (tR.current.style.left = 100 * JR.moverPosition + "%"), iR.current && (iR.current.value = JR.progress)
                                }));
                                return () => {
                                  RR()
                                }
                              }), [wR]), (0, qR.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, qR.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, qR.jsx)(uR.c, {
                                    text: VR
                                  })
                                }), (0, qR.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: iR
                                }), (0, qR.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, qR.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: GR
                                  }), (0, qR.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: tR,
                                    children: (0, qR.jsx)("span", {
                                      children: KR && (0, qR.jsx)(uR.c, {
                                        text: [{
                                          icon: KR,
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
                          var eR = GR(679);
                          const aR = (0, yR.memo)((function(RR) {
                              let {
                                initialParameters: JR
                              } = RR;
                              const GR = (0, yR.useRef)(null),
                                tR = JR.label,
                                iR = JR.Eu,
                                {
                                  icon: fR,
                                  scale: VR,
                                  rotation: KR
                                } = null !== JR && void 0 !== JR ? JR : {},
                                wR = 100 * (.5 - iR / 2),
                                rR = 100 * iR,
                                aR = (0, ZR.g)();
                              return (0, yR.useEffect)((() => {
                                const RR = aR.onFrame((() => {
                                  const RR = aR.getState();
                                  if (!RR.isActive || !GR.current) return;
                                  const JR = RR.state;
                                  GR.current.style.left = 100 * JR.markerPosition + "%"
                                }));
                                return () => {
                                  RR()
                                }
                              }), [aR]), (0, qR.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, eR.I)(VR) && {
                                    "--scale": VR
                                  },
                                  ...!(0, eR.I)(KR) && {
                                    "--rotation": `${KR}deg`
                                  }
                                },
                                children: [fR && (0, qR.jsx)(uR.c, {
                                  text: [{
                                    icon: fR
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, qR.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, qR.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${wR}%`,
                                      width: `${rR}%`
                                    }
                                  }), (0, qR.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: GR
                                  })]
                                }), (0, qR.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, qR.jsx)(uR.c, {
                                    text: tR
                                  })
                                })]
                              })
                            })),
                            LR = (0, yR.memo)((function(RR) {
                              let {
                                initialParameters: JR
                              } = RR;
                              const GR = (0, yR.useRef)(null),
                                [tR, iR] = (0, yR.useState)((() => new Array(JR.ku).fill("pending"))),
                                [fR, VR] = (0, yR.useState)((() => {
                                  const RR = JR.Tu;
                                  return (0, eR.I)(RR) || RR <= 0 ? [] : new Array(RR).fill("pending")
                                })),
                                KR = JR.label,
                                {
                                  icon: wR
                                } = JR,
                                rR = (0, yR.useRef)(0),
                                aR = (0, yR.useRef)(0),
                                LR = (0, yR.useRef)([]),
                                nR = (0, ZR.g)();
                              return (0, yR.useEffect)((() => {
                                const RR = nR.onFrame((() => {
                                  const RR = nR.getState();
                                  if (!RR.isActive || !GR.current) return;
                                  const JR = RR.state,
                                    yR = 30 + 60 * JR.outerCircleProgress;
                                  if (GR.current.setAttribute("r", String(yR)), !0 === JR.lastClickResult && JR.successes > rR.current) {
                                    GR.current.classList.remove("QTERhythmClickOuterCircle--miss"), GR.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const RR = setTimeout((() => {
                                      var RR;
                                      null === (RR = GR.current) || void 0 === RR || RR.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    LR.current.push(RR)
                                  } else if (!1 === JR.lastClickResult && JR.misses > aR.current) {
                                    GR.current.classList.remove("QTERhythmClickOuterCircle--hit"), GR.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const RR = setTimeout((() => {
                                      var RR;
                                      null === (RR = GR.current) || void 0 === RR || RR.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    LR.current.push(RR)
                                  }
                                  JR.successes === rR.current && JR.misses === aR.current || (rR.current = JR.successes, aR.current = JR.misses, iR((RR => {
                                    const GR = [...RR];
                                    for (let yR = 0; yR < JR.ku; yR++) GR[yR] = yR < JR.successes ? "success" : "pending";
                                    return GR
                                  })), VR((RR => {
                                    if (0 === RR.length) return RR;
                                    const GR = [...RR];
                                    for (let yR = 0; yR < GR.length; yR++) GR[yR] = yR < JR.misses ? "miss" : "pending";
                                    return GR
                                  })))
                                }));
                                return () => {
                                  RR();
                                  for (const RR of LR.current) clearTimeout(RR);
                                  LR.current = []
                                }
                              }), [nR]), (0, qR.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, qR.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: tR.map(((RR, JR) => (0, qR.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === RR ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, JR)))
                                }), (0, qR.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, qR.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, qR.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, qR.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: GR
                                    })]
                                  }), wR && (0, qR.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, qR.jsx)(uR.c, {
                                      text: [{
                                        icon: wR
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), fR.length > 0 && (0, qR.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: fR.map(((RR, JR) => (0, qR.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === RR ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, JR)))
                                }), (0, qR.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, qR.jsx)(uR.c, {
                                    text: KR
                                  })
                                })]
                              })
                            }));

                          function nR(RR) {
                            let {
                              qte: JR
                            } = RR;
                            switch (JR.type) {
                              case "progressBar":
                                return (0, qR.jsx)(iR, {
                                  initialParameters: JR.parameters
                                });
                              case "timedClick":
                                return (0, qR.jsx)(wR, {
                                  initialParameters: JR.parameters
                                });
                              case "gravityBar":
                                return (0, qR.jsx)(rR, {
                                  initialParameters: JR.parameters
                                });
                              case "precisionBar":
                                return (0, qR.jsx)(aR, {
                                  initialParameters: JR.parameters
                                });
                              case "rhythmClick":
                                return (0, qR.jsx)(LR, {
                                  initialParameters: JR.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const UR = (0, yR.memo)((function() {
                            const [RR, JR] = (0, yR.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, tR.f)("qteStateUpdated", (RR => {
                              JR(RR)
                            })), RR.isActive && RR.type ? (0, qR.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, qR.jsx)(nR, {
                                qte: RR
                              })
                            }) : null
                          }))
                        }, 5656: (RR, JR, GR) => {
                          GR.d(JR, {
                            e: () => qR,
                            g: () => iR
                          });
                          var yR = GR(66),
                            tR = GR(1397),
                            uR = GR(5658);
                          const ZR = {
                              getState: () => uR.d.getCurrentState(),
                              onFrame: tR.B
                            },
                            qR = (0, yR.createContext)(ZR);

                          function iR() {
                            return (0, yR.useContext)(qR)
                          }
                        }, 5728: (RR, JR, GR) => {
                          GR.d(JR, {
                            e: () => DR,
                            f: () => NR
                          });
                          var yR = GR(5733),
                            tR = GR(359);
                          const uR = 120,
                            ZR = 260,
                            qR = 1.15,
                            iR = 1.2,
                            fR = 2,
                            VR = 1.08,
                            KR = .8,
                            wR = .95,
                            rR = 8,
                            eR = "[\"')\\]\u300d\u300f\uff09]*",
                            aR = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${eR}$`),
                            LR = new RegExp(`[?\uff1f]${eR}$`),
                            nR = new RegExp(`[!\uff01]${eR}$`),
                            UR = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            WR = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            AR = new RegExp(`[${WR}]`),
                            CR = new RegExp(`[${WR}]|[^${WR}]+`, "g"),
                            XR = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function MR(RR) {
                            let JR = 2166136261;
                            for (let GR = 0; GR < RR.length; GR++) JR ^= RR.charCodeAt(GR), JR = Math.imul(JR, 16777619);
                            return (JR >>> 0) / 4294967295 * 2 - 1
                          }

                          function BR(RR) {
                            var JR;
                            if (AR.test(RR)) return 1;
                            const GR = RR.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              yR = GR.replace(/[^0-9]/g, "");
                            if (yR.length > 0 && !/\p{L}/u.test(GR)) return Math.min(yR.length, 4);
                            const tR = null !== (JR = GR.match(XR)) && void 0 !== JR ? JR : [];
                            if (0 === tR.length) {
                              var uR, ZR;
                              const RR = null !== (uR = null === (ZR = GR.match(/\p{L}/gu)) || void 0 === ZR ? void 0 : ZR.length) && void 0 !== uR ? uR : 0;
                              return 0 === RR ? 0 : Math.min(Math.max(1, Math.round(RR / 2.5)), rR)
                            }
                            const qR = GR.replace(/[^\p{L}]/gu, ""),
                              iR = tR.length > 1 && "e" === tR.at(-1) && qR.endsWith("e") && !qR.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(RR.replace(/[^\p{L}]/gu, ""));
                            return Math.min(tR.length - (iR ? 1 : 0), rR)
                          }

                          function lR(RR) {
                            return RR.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function pR(RR) {
                            const JR = RR.replace(/[^\p{L}]/gu, "");
                            return JR.length >= 2 && JR === JR.toUpperCase() && JR !== JR.toLowerCase()
                          }

                          function gR(RR, JR) {
                            var GR;
                            const rR = JR && (0, yR.i)(JR),
                              eR = null !== (GR = null === rR || void 0 === rR ? void 0 : rR.syllableMs) && void 0 !== GR ? GR : yR.b,
                              WR = function(RR) {
                                const JR = [];
                                for (const yR of (0, tR.dc)(RR))
                                  if ("string" === typeof yR)
                                    for (const RR of yR.split(/(\s+)/)) {
                                      if ("" === RR) continue;
                                      if (/^\s+$/.test(RR)) {
                                        JR.push({
                                          kind: "space",
                                          text: RR
                                        });
                                        continue
                                      }
                                      if (!AR.test(RR)) {
                                        JR.push({
                                          kind: "word",
                                          text: RR,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let yR = !0;
                                      for (const tR of null !== (GR = RR.match(CR)) && void 0 !== GR ? GR : []) {
                                        var GR;
                                        const RR = JR.at(-1);
                                        yR || "word" !== (null === RR || void 0 === RR ? void 0 : RR.kind) || AR.test(tR) || /[\p{L}\p{N}]/u.test(tR) ? (yR || JR.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), JR.push({
                                          kind: "word",
                                          text: tR,
                                          delayMs: 0
                                        }), yR = !1) : RR.text += tR
                                      }
                                    } else JR.push({
                                      kind: "icon",
                                      text: yR.icon,
                                      delayMs: 0
                                    });
                                return JR
                              }(RR),
                              XR = [];
                            let gR = [];
                            for (const yR of WR) "space" !== yR.kind && (gR.push(yR), aR.test(yR.text) && (XR.push(gR), gR = []));
                            XR.push(gR);
                            const bR = [];
                            let vR = 0;
                            for (const yR of XR) {
                              var OR, xR;
                              const RR = null !== (OR = null === (xR = yR.at(-1)) || void 0 === xR ? void 0 : xR.text) && void 0 !== OR ? OR : "",
                                JR = LR.test(RR),
                                GR = nR.test(RR),
                                tR = yR.map((RR => "word" === RR.kind ? BR(RR.text) : 1)),
                                WR = tR.findLastIndex((RR => RR > 0));
                              for (const [LR, nR] of yR.entries()) {
                                const RR = "word" === nR.kind,
                                  yR = tR[LR];
                                nR.delayMs = vR;
                                for (let tR = 0; rR && tR < yR; tR++) {
                                  const {
                                    intonation: uR
                                  } = rR;
                                  let ZR = WR > 0 ? -uR.declineSemitones * (LR / WR) : 0;
                                  ZR += MR(`${lR(nR.text)}|${tR}`) * uR.variationSemitones;
                                  const aR = Math.min(1, uR.variationSemitones);
                                  let UR = rR.glideSemitones,
                                    AR = 1;
                                  GR && (ZR += uR.exclaimLiftSemitones, AR *= qR), JR && LR === WR && (ZR += uR.questionRiseSemitones * (yR > 1 ? .5 + .5 * tR / (yR - 1) : 1), tR === yR - 1 && (UR = Math.abs(UR) + uR.questionRiseSemitones / 2)), RR && pR(nR.text) && (ZR += fR * aR, AR *= iR), yR > 1 && 0 === tR && (ZR += KR * aR, AR *= VR), bR.push({
                                    atMs: vR + tR * eR,
                                    semitones: ZR,
                                    glideSemitones: UR,
                                    durationMs: tR < yR - 1 ? Math.min(rR.durationMs, eR * wR) : rR.durationMs,
                                    level: AR
                                  })
                                }
                                vR += yR * eR + (aR.test(nR.text) ? ZR : UR.test(nR.text) ? uR : 0)
                              }
                            }
                            return {
                              pieces: WR.map((RR => "space" === RR.kind ? RR : "icon" === RR.kind ? {
                                kind: "icon",
                                icon: RR.text,
                                delayMs: RR.delayMs
                              } : {
                                kind: "word",
                                text: RR.text,
                                delayMs: RR.delayMs
                              })),
                              blips: bR
                            }
                          }
                          var bR = GR(1270),
                            vR = GR(1343),
                            OR = GR(2137);

                          function xR(RR) {
                            if ("string" === typeof RR) return RR;
                            const JR = vR.g.get().getCurrentLanguageCode();
                            return (0, bR.r)(JR, RR.translationKey, (0, bR.o)(RR.params, OR.e.shown))
                          }

                          function NR(RR) {
                            const JR = void 0 === RR.voice ? null : (0, yR.m)(RR.voice),
                              GR = JR && (0, yR.i)(JR);
                            return {
                              plan: gR(xR(RR.line), GR),
                              synth: GR
                            }
                          }

                          function DR(RR) {
                            const JR = [];
                            let GR = [];
                            for (const [tR, uR] of RR.entries()) {
                              var yR;
                              "space" === uR.kind && (" " !== uR.text || "icon" !== (null === (yR = RR[tR + 1]) || void 0 === yR ? void 0 : yR.kind)) ? (GR.length > 0 && JR.push(GR), JR.push([uR]), GR = []) : GR.push(uR)
                            }
                            return GR.length > 0 && JR.push(GR), JR
                          }
                        }, 5736: (RR, JR, GR) => {
                          GR.d(JR, {
                            c: () => VR,
                            d: () => KR
                          });
                          var yR = GR(5742),
                            tR = GR(25);
                          const uR = .25,
                            ZR = .85,
                            qR = .02,
                            iR = .01;

                          function fR(RR, JR, GR, yR, tR, uR, qR) {
                            const {
                              waveform: iR,
                              pitchHz: fR,
                              attackMs: VR,
                              releaseMs: KR,
                              lowpassHz: wR
                            } = GR, rR = tR + yR.durationMs / 1e3, eR = fR * 2 ** (yR.semitones / 12), aR = RR.createOscillator();
                            aR.type = iR, aR.frequency.setValueAtTime(eR, tR), aR.frequency.exponentialRampToValueAtTime(eR * 2 ** (yR.glideSemitones / 12), rR);
                            const LR = tR + Math.min(VR, yR.durationMs) / 1e3,
                              nR = RR.createGain();
                            nR.gain.setValueAtTime(0, tR), nR.gain.linearRampToValueAtTime(uR, LR), nR.gain.linearRampToValueAtTime(uR * ZR, Math.max(LR, rR - KR / 1e3)), nR.gain.linearRampToValueAtTime(0, rR);
                            const UR = [aR];
                            if (null !== wR) {
                              const JR = RR.createBiquadFilter();
                              JR.type = "lowpass", JR.frequency.value = wR, UR.push(JR)
                            }
                            UR.push(nR, JR);
                            for (let ZR = 1; ZR < UR.length; ZR++) UR[ZR - 1].connect(UR[ZR]);
                            return aR.onended = () => {
                              for (const RR of UR.slice(0, -1)) RR.disconnect();
                              qR()
                            }, aR.start(tR), aR.stop(rR), aR
                          }

                          function VR(RR, JR, GR, yR, tR, ZR) {
                            if (0 === yR.length) return ZR(), () => {};
                            const VR = uR * GR.volume * tR,
                              KR = RR.createGain();
                            KR.connect(JR);
                            const wR = RR.currentTime + qR,
                              rR = new Set;
                            for (const uR of yR) {
                              const JR = fR(RR, KR, GR, uR, wR + uR.atMs / 1e3, VR * uR.level, (() => {
                                rR.delete(JR), 0 === rR.size && (KR.disconnect(), ZR())
                              }));
                              rR.add(JR)
                            }
                            return () => {
                              const JR = RR.currentTime;
                              KR.gain.setTargetAtTime(0, JR, iR);
                              for (const RR of rR) try {
                                RR.stop(JR + 5 * iR)
                              } catch {}
                            }
                          }

                          function KR(RR, JR) {
                            var GR;
                            const uR = yR.Howler.ctx,
                              ZR = yR.Howler.masterGain;
                            if (!uR || !ZR || !tR.d.get("soundOnFromAd")) return () => {};
                            const qR = yR.Howler;
                            return null === (GR = qR._autoResume) || void 0 === GR || GR.call(qR), VR(uR, ZR, RR, JR, tR.d.get("soundVolume"), (() => {
                              var RR;
                              null === (RR = qR._autoSuspend) || void 0 === RR || RR.call(qR)
                            }))
                          }
                        }, 5710: (RR, JR, GR) => {
                          GR.d(JR, {
                            b: () => qR,
                            d: () => tR,
                            g: () => iR,
                            j: () => ZR,
                            m: () => uR
                          });
                          var yR = GR(5707);
                          const tR = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            uR = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            ZR = `${yR.l} lists every page of the Bloxd Code API docs.`;

                          function qR(RR, JR) {
                            return `${RR.url}${encodeURIComponent(JR.toWellFormed())}`
                          }

                          function iR(RR) {
                            const JR = qR(tR, RR);
                            return JR.length <= 3e4 ? {
                              url: JR,
                              sendsPrompt: !0
                            } : {
                              url: new URL(tR.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 5742: (RR, JR, GR) => {
                          GR.r(JR), GR.d(JR, {
                            Howl: () => tR.Howl,
                            Howler: () => tR.Howler,
                            musicOutput: () => LR,
                            readyAudioContext: () => nR
                          });
                          var yR, tR = GR(5744),
                            uR = GR(4757),
                            ZR = GR(5456);
                          const qR = tR.Howler;

                          function iR() {
                            var RR, JR;
                            if (qR.ctx || !qR.usingWebAudio || "undefined" === typeof AudioContext || !(0, ZR.h)()) return;
                            const GR = navigator.audioSession;
                            let yR;
                            "auto" === (null === GR || void 0 === GR ? void 0 : GR.type) && (GR.type = "ambient");
                            try {
                              yR = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const tR = yR.createGain();
                            tR.gain.setValueAtTime(qR._muted ? 0 : null !== (RR = qR._volume) && void 0 !== RR ? RR : 1, yR.currentTime), tR.connect(yR.destination), qR.ctx = yR, qR.masterGain = tR, null === (JR = qR._setup) || void 0 === JR || JR.call(qR)
                          }
                          qR._mobileUnloaded = !0;
                          const fR = qR.volume.bind(tR.Howler);
                          qR.volume = function() {
                            return iR(), fR(...arguments)
                          };
                          const VR = qR.mute.bind(tR.Howler);
                          qR.mute = RR => (iR(), VR(RR));
                          const KR = tR.Howl.prototype,
                            wR = KR.init;

                          function rR() {
                            for (; qR._html5AudioPool.length < qR.html5PoolSize;) {
                              const RR = new Audio;
                              RR._unlocked = !0, qR._releaseHtml5Audio(RR)
                            }
                            for (const JR of qR._howls)
                              if (!JR._webAudio)
                                for (const GR of JR._getSoundIds()) {
                                  var RR;
                                  const yR = null === (RR = JR._soundById(GR)) || void 0 === RR ? void 0 : RR._node;
                                  yR && !yR._unlocked && (yR._unlocked = !0, yR.load())
                                }
                          }
                          KR.init = function(RR) {
                            return iR(), wR.call(this, RR)
                          }, (0, ZR.h)() && (qR._unlockAudio = () => {
                            const RR = qR.ctx;
                            if (qR._audioUnlocked || !RR) return;
                            qR.autoUnlock = !1;
                            const JR = RR.createBuffer(1, 1, 22050);
                            qR._scratchBuffer = JR;
                            const GR = new AbortController;
                            let yR = "afterPaint";
                            const tR = () => {
                                var yR;
                                if (qR._audioUnlocked) return;
                                null === (yR = qR._autoResume) || void 0 === yR || yR.call(qR);
                                const tR = RR.createBufferSource();
                                tR.buffer = JR, tR.connect(RR.destination), tR.start(0), RR.resume().catch((() => {})), tR.onended = () => {
                                  tR.disconnect(0), qR._audioUnlocked = !0, GR.abort();
                                  for (const RR of qR._howls) RR._emit("unlock")
                                }
                              },
                              iR = () => {
                                rR(), tR()
                              },
                              fR = JR => {
                                if (rR(), "inTap" === yR) {
                                  if ("running" === RR.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), tR()
                                } else "afterPaint" === yR && (yR = "queued", (0, uR.d)(JR.timeStamp, (() => {
                                  yR = "inTap", tR()
                                })))
                              };
                            for (const uR of ["touchstart", "touchend"]) document.addEventListener(uR, iR, {
                              capture: !0,
                              signal: GR.signal
                            });
                            for (const uR of ZR.b) document.addEventListener(uR, fR, {
                              capture: !0,
                              signal: GR.signal
                            })
                          });
                          let eR = 0;
                          const aR = null === (yR = qR._autoSuspend) || void 0 === yR ? void 0 : yR.bind(tR.Howler);

                          function LR() {
                            nR();
                            const {
                              ctx: RR,
                              masterGain: JR
                            } = qR;
                            return RR && JR ? {
                              ctx: RR,
                              destination: JR,
                              holdAwake: RR => {
                                var JR, GR;
                                (eR += RR ? 1 : -1, RR) ? null === (JR = qR._autoResume) || void 0 === JR || JR.call(qR): null === (GR = qR._autoSuspend) || void 0 === GR || GR.call(qR)
                              },
                              wake: () => {
                                var JR;
                                "running" !== RR.state && (null === (JR = qR._autoResume) || void 0 === JR || JR.call(qR), RR.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function nR() {
                            var RR;
                            (qR.volume(), qR.ctx && qR.autoUnlock) && (null === (RR = qR._unlockAudio) || void 0 === RR || RR.call(qR))
                          }
                          aR && (qR._autoSuspend = () => eR > 0 ? tR.Howler : aR())
                        }, 5751: (RR, JR, GR) => {
                          function yR(RR) {
                            return {
                              notAfter: RR
                            }
                          }
                          GR.d(JR, {
                            c: () => iR,
                            d: () => fR,
                            g: () => qR,
                            k: () => yR,
                            n: () => tR,
                            p: () => uR,
                            r: () => ZR,
                            s: () => VR,
                            v: () => KR
                          });
                          const tR = yR("\\w$."),
                            uR = yR("\\w.,");

                          function ZR(RR) {
                            return JR => iR(JR, RR)
                          }

                          function qR(RR) {
                            return JR => !RR.test(JR.input.slice(0, JR.index))
                          }

                          function iR(RR, JR) {
                            return RR.index > 0 && new RegExp(`[${JR}]`).test(RR.input[RR.index - 1])
                          }

                          function fR(RR, JR, GR) {
                            return function(RR) {
                              return void 0 !== RR && "function" !== typeof RR
                            }(GR) ? function(RR, JR, GR) {
                              const yR = JR.flags.replace(/[gy]/g, ""),
                                tR = new RegExp(`[^${GR}](?:${JR.source})`, `${yR}g`),
                                uR = [],
                                ZR = GR => {
                                  const yR = GR.index + GR[0].length;
                                  return ("" === GR[0] ? wR(RR, JR, yR) : yR) - 1
                                },
                                qR = new RegExp(`(?:${JR.source})`, `${yR}y`).exec(RR);
                              if (qR) {
                                if (uR.push(qR), !JR.global) return uR;
                                tR.lastIndex = ZR(qR)
                              }
                              for (let iR = tR.exec(RR); iR; iR = tR.exec(RR)) {
                                const GR = wR(RR, JR, iR.index) - iR.index;
                                if (iR[0] = iR[0].slice(GR), iR.index += GR, uR.push(iR), !JR.global) break;
                                tR.lastIndex = ZR(iR)
                              }
                              return uR
                            }(RR, JR, GR.notAfter) : function(RR, JR, GR) {
                              const yR = new RegExp(JR.source, `${JR.flags.replace(/[gy]/g,"")}g`),
                                tR = [];
                              for (let uR = yR.exec(RR); uR; uR = yR.exec(RR))
                                if (!GR || GR(uR)) {
                                  if (tR.push(uR), !JR.global) break;
                                  "" === uR[0] && (yR.lastIndex = wR(RR, JR, yR.lastIndex))
                                } else yR.lastIndex = wR(RR, JR, uR.index);
                              return tR
                            }(RR, JR, GR)
                          }

                          function VR(RR, JR, GR, yR) {
                            let tR = "",
                              uR = 0;
                            for (const ZR of fR(RR, JR, GR)) tR += RR.slice(uR, ZR.index) + yR(ZR), uR = ZR.index + ZR[0].length;
                            return tR + RR.slice(uR)
                          }

                          function KR(RR, JR, GR) {
                            const yR = [];
                            let tR = 0;
                            for (const uR of fR(RR, JR, GR)) yR.push(RR.slice(tR, uR.index)), tR = uR.index + uR[0].length;
                            return [...yR, RR.slice(tR)]
                          }

                          function wR(RR, JR, GR) {
                            var yR;
                            return GR + (JR.unicode && (null !== (yR = RR.codePointAt(GR)) && void 0 !== yR ? yR : 0) > 65535 ? 2 : 1)
                          }
                        }, 5707: (RR, JR, GR) => {
                          GR.d(JR, {
                            d: () => tR,
                            g: () => iR,
                            i: () => uR,
                            l: () => ZR,
                            m: () => qR,
                            n: () => LR,
                            o: () => VR,
                            q: () => KR,
                            s: () => aR,
                            t: () => rR
                          });
                          var yR = GR(1746);
                          const tR = 24e3,
                            uR = "/docs/llms.txt",
                            ZR = `${yR.c}${uR}`,
                            qR = "/llms.txt",
                            iR = "/docs/llms-full.txt";

                          function fR(RR) {
                            return RR || "index"
                          }

                          function VR(RR) {
                            return `/docs/${fR(RR)}.md`
                          }

                          function KR(RR, JR) {
                            return `/docs/${fR(RR)}/${JR+1}.md`
                          }
                          const wR = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function rR(RR) {
                            const JR = wR.exec(RR);
                            return null === JR ? null : {
                              name: JR[1],
                              part: void 0 === JR[2] ? null : Number(JR[2])
                            }
                          }
                          const eR = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function aR(RR) {
                            const JR = eR.exec(RR);
                            if (null === JR) return null;
                            const [, GR = "", yR] = JR;
                            return void 0 === yR ? VR(GR) : KR(GR, Number(yR) - 1)
                          }

                          function LR(RR) {
                            return `/docsHtml/${fR(RR)}.html`
                          }
                        }, 5733: (RR, JR, GR) => {
                          GR.d(JR, {
                            b: () => tR,
                            e: () => yR,
                            f: () => uR,
                            i: () => iR,
                            m: () => ZR
                          });
                          const yR = ["sine", "triangle", "square", "sawtooth"],
                            tR = 55,
                            uR = {
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

                          function ZR(RR) {
                            return "string" !== typeof RR ? RR : Object.hasOwn(uR, RR) ? uR[RR] : null
                          }

                          function qR(RR, JR, GR) {
                            return Math.min(GR, Math.max(JR, RR))
                          }

                          function iR(RR) {
                            const JR = qR(RR.durationMs, 10, 500),
                              GR = qR(RR.attackMs, 0, JR),
                              {
                                intonation: tR
                              } = RR;
                            return {
                              waveform: yR.includes(RR.waveform) ? RR.waveform : "sine",
                              pitchHz: qR(RR.pitchHz, 20, 4e3),
                              glideSemitones: qR(RR.glideSemitones, -24, 24),
                              durationMs: JR,
                              attackMs: GR,
                              releaseMs: qR(RR.releaseMs, 0, JR - GR),
                              lowpassHz: null === RR.lowpassHz ? null : qR(RR.lowpassHz, 20, 2e4),
                              volume: qR(RR.volume, 0, 2),
                              intonation: {
                                variationSemitones: qR(tR.variationSemitones, 0, 6),
                                declineSemitones: qR(tR.declineSemitones, 0, 12),
                                questionRiseSemitones: qR(tR.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: qR(tR.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: qR(RR.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const RR in modules) Object.freeze(modules[RR]);