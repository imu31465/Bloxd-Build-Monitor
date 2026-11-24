export const id = 79;
export const ids = [79, 95];
export const modules = {
    4932: (TT, UT, mT) => {
      mT.d(UT, {
        d: () => cT,
        f: () => vT
      });
      var WT = mT(1126),
        zT = mT.n(WT),
        MT = mT(63),
        gT = mT(1288),
        nT = mT(4936),
        HT = mT(2023),
        kT = mT(2552),
        jT = mT(4939),
        lT = mT(1188);
      const LT = new WeakMap;
      let pT = 0;

      function BT(TT) {
        let UT = LT.get(TT);
        return void 0 === UT && (UT = pT++, LT.set(TT, UT)), UT
      }

      function ZT(TT) {
        let {
          piece: UT
        } = TT;
        return "space" === UT.kind ? (0, lT.jsx)(lT.Fragment, {
          children: UT.text
        }) : (0, lT.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${UT.delayMs}ms`
          },
          children: (0, lT.jsx)(nT.b, {
            text: "icon" === UT.kind ? `[[${UT.icon}]]` : UT.text
          })
        })
      }

      function cT(TT) {
        let {
          display: UT
        } = TT;
        const {
          selectedLanguage: mT
        } = (0, gT.z)(), WT = (0, MT.useMemo)((() => (0, jT.d)((0, jT.e)(UT).plan.pieces)), [UT, mT.code]);
        return (0, lT.jsxs)("div", {
          className: zT()("Dialogue", {
            DialogueAnimateIn: !1 !== UT.animateIn
          }),
          children: [UT.speakerName && (0, lT.jsx)(HT.e, {
            text: UT.speakerName,
            className: "DialogueSpeaker"
          }), (0, lT.jsx)("p", {
            className: "DialogueLine",
            children: WT.map(((TT, UT) => 1 === TT.length && "space" === TT[0].kind ? TT[0].text : (0, lT.jsx)("span", {
              className: "DialogueGlue",
              children: TT.map(((TT, UT) => (0, lT.jsx)(ZT, {
                piece: TT
              }, UT)))
            }, UT)))
          })]
        })
      }
      const vT = (0, MT.memo)((function() {
        const TT = (0, kT.f)("dialogue");
        return (0, lT.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: TT && (0, lT.jsx)(cT, {
            display: TT
          }, BT(TT))
        })
      }))
    },
    4799: (TT, UT, mT) => {
        mT.r(UT), mT.d(UT, {
          default: () => Tg
        });
        var WT = mT(63),
          zT = mT(1126),
          MT = mT.n(zT),
          gT = mT(1639),
          nT = mT(1641),
          HT = mT(25),
          kT = mT(85),
          jT = mT(4808),
          lT = mT(4825),
          LT = mT(4833),
          pT = mT(4461),
          BT = mT(1188);
        const ZT = "/textures/docs/icons";

        function cT(TT) {
          let {
            name: UT,
            isTinted: mT,
            className: WT,
            style: zT
          } = TT;
          const gT = `${ZT}/${UT}.png`;
          return mT ? (0, BT.jsxs)("span", {
            className: MT()("DocsPixelIcon", "Tinted", WT),
            "aria-hidden": "true",
            style: zT,
            children: [(0, BT.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${gT}")`,
                WebkitMaskImage: `url("${gT}")`
              }
            }), (0, BT.jsx)("img", {
              src: gT,
              alt: ""
            })]
          }) : (0, BT.jsx)("img", {
            className: MT()("DocsPixelIcon", WT),
            src: gT,
            alt: "",
            "aria-hidden": "true",
            style: zT
          })
        }
        const vT = 1500;

        function fT() {
          const [TT, UT] = (0, WT.useState)(null);
          (0, WT.useEffect)((() => {
            if (null === TT) return;
            const mT = setTimeout((() => {
              UT(null)
            }), vT);
            return () => {
              clearTimeout(mT)
            }
          }), [TT]);
          return [TT, TT => {
            (0, pT.b)(TT).then((() => {
              UT({
                text: TT,
                failed: !1
              })
            }), (mT => {
              console.error("Could not copy to the clipboard", mT), UT({
                text: TT,
                failed: !0
              })
            }))
          }]
        }

        function qT(TT) {
          let {
            text: UT,
            label: mT,
            className: WT
          } = TT;
          const [zT, gT] = fT(), nT = !1 === (null === zT || void 0 === zT ? void 0 : zT.failed);
          return (0, BT.jsxs)("button", {
            type: "button",
            className: MT()("DocsCopyButton", WT, {
              Copied: nT
            }),
            title: `Copy ${UT.length>40?"to clipboard":UT}`,
            "aria-label": mT ? void 0 : `Copy ${UT}`,
            onClick: TT => {
              TT.stopPropagation(), gT(UT)
            },
            children: [(0, BT.jsx)(cT, {
              name: nT ? "check" : "copy"
            }), mT && (0, BT.jsx)("span", {
              children: nT ? "Copied" : null !== zT && void 0 !== zT && zT.failed ? "Copy failed" : mT
            })]
          })
        }
        jT.c.registerLanguage("javascript", lT.b), jT.c.registerLanguage("typescript", LT.d);
        const iT = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          bT = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          OT = 24;

        function eT(TT) {
          let {
            code: UT,
            lang: mT,
            compact: zT = !1
          } = TT;
          const gT = (0, WT.useMemo)((() => function(TT, UT) {
              const mT = iT[UT];
              return mT ? jT.c.highlight(TT, {
                language: mT
              }).value : TT.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(UT, mT)), [UT, mT]),
            nT = UT.split("\n").length,
            HT = !zT && nT > OT + 6,
            [kT, lT] = (0, WT.useState)(!1),
            LT = iT[mT];
          return (0, BT.jsxs)("div", {
            className: MT()("DocsCodeBlock", {
              Compact: zT,
              Collapsed: HT && !kT
            }),
            children: [!zT && (0, BT.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, BT.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: LT ? bT[LT] : "Text"
              }), (0, BT.jsx)(qT, {
                text: UT,
                label: "Copy"
              })]
            }), (0, BT.jsx)("pre", {
              children: (0, BT.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: gT
                }
              })
            }), HT && (0, BT.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": kT,
              onClick: () => {
                lT(!kT)
              },
              children: [(0, BT.jsx)(cT, {
                name: kT ? "chevron-up" : "chevron-down"
              }), kT ? "Show less" : `Show all ${nT} lines`]
            })]
          })
        }
        var YT = mT(4842);
        var JT = mT(4850);
        const xT = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function dT(TT) {
          const UT = new Map;
          let mT, WT = [],
            zT = !1;
          const MT = () => {
            mT && UT.set(mT.name, mT.lines.join("\n").trimEnd())
          };
          for (const gT of TT.split("\n")) {
            const TT = gT.match(xT);
            zT || gT.startsWith("/*") ? (zT || (MT(), mT = void 0), WT.push(gT), zT = !gT.includes("*/")) : TT ? (MT(), mT = {
              name: TT[1],
              lines: [...WT, gT]
            }, WT = []) : mT && (gT.startsWith(" ") || gT.startsWith("\t") || /^[}\])|]/.test(gT)) ? mT.lines.push(gT) : mT && "" !== gT.trim() && (MT(), mT = void 0)
          }
          return MT(), UT
        }

        function wT(TT) {
          return "methods" === TT || "callbacks" === TT || "settings" === TT
        }
        const tT = {
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
              setterSnippet: (TT, UT) => `api.setClientOption(playerId, "${TT}", ${UT})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (TT, UT) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${TT}", ${UT})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (TT, UT) => `api.setMobSetting(mobId, "${TT}", ${UT})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (TT, UT) => `api.setVehicleSetting(vehicleId, "${TT}", ${UT})`
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
          aT = {
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

        function yT(TT) {
          return TT.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function XT(TT) {
          let UT = !1;
          return TT.split("\n").map((TT => (TT.startsWith("```") && (UT = !UT), !UT && /^#{3,} /.test(TT) ? TT.slice(1) : TT))).join("\n")
        }

        function IT(TT) {
          return "readme" === TT ? "getting-started" : yT(TT)
        }
        const QT = "## Glossary of Referenced Types";
        const sT = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...JT.d.flatMap((TT => {
            const UT = {
              id: TT.id,
              slug: IT(TT.id),
              title: TT.title,
              markdown: TT.content,
              ...tT[TT.id]
            };
            if ("readme" === TT.id) return function(TT) {
              const UT = TT.markdown.indexOf(QT),
                mT = TT.markdown.indexOf("\n```", UT),
                WT = TT.markdown.indexOf("\n```", mT + 1);
              if (-1 === UT || -1 === mT || -1 === WT) throw new Error(`Getting started has no "${QT}" section with a code block`);
              const zT = TT.markdown.slice(UT + 31, mT).trim(),
                MT = [...dT(TT.markdown.slice(TT.markdown.indexOf("\n", mT + 1) + 1, WT))].map((TT => {
                  let [UT, mT] = TT;
                  return `## ${UT}\n\n\`\`\`ts\n${mT}\n\`\`\`\n`
                })),
                gT = TT.markdown.slice(TT.markdown.indexOf("\n", WT + 1) + 1);
              return [{
                ...TT,
                markdown: `${TT.markdown.slice(0,UT)}${gT}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${zT}\n\n${MT.join("\n")}`
              }]
            }(UT);
            if ("howTo" === TT.id) {
              const {
                parent: TT,
                guides: mT
              } = function(TT) {
                const [UT, ...mT] = TT.markdown.split(/^(?=## )/m), WT = [UT], zT = [];
                for (const gT of mT) {
                  var MT;
                  const UT = gT.indexOf("\n"),
                    mT = gT.slice(3, UT).trim(),
                    nT = gT.slice(UT + 1);
                  if (!nT.includes("```")) {
                    WT.push(gT);
                    continue
                  }
                  const HT = null !== (MT = aT[mT]) && void 0 !== MT ? MT : {
                    icon: "lightbulb",
                    summary: `How to use ${mT.toLowerCase()} in World Code.`
                  };
                  zT.push({
                    id: `${TT.id}${mT.split(/[^A-Za-z0-9]+/).map((TT=>TT.charAt(0).toUpperCase()+TT.slice(1))).join("")}`,
                    slug: `${TT.slug}-${yT(mT)}`,
                    title: mT,
                    layout: "article",
                    sourceAnchor: (0, YT.w)(mT),
                    markdown: `# ${mT}\n\n${XT(nT)}`,
                    ...HT
                  })
                }
                return {
                  parent: {
                    ...TT,
                    markdown: WT.join(""),
                    childPageIds: zT.map((TT => TT.id))
                  },
                  guides: zT
                }
              }(UT);
              return [TT, ...mT]
            }
            return [UT]
          }))],
          FT = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...sT.filter((TT => void 0 !== TT.sourceAnchor)).map((TT => TT.id))]
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

        function PT(TT) {
          return sT.find((UT => UT.id === TT))
        }
        const VT = new Map;

        function uT(TT) {
          let UT = VT.get(TT.id);
          return UT || (UT = (0, YT.E)(TT.markdown, "changelog" === TT.layout ? 3 : 2), VT.set(TT.id, UT)), UT
        }

        function CT(TT, UT) {
          return uT(TT).sections.some((TT => TT.heading.anchor === UT || TT.blocks.some((TT => "heading" === TT.kind && TT.anchor === UT))))
        }

        function rT(TT) {
          const [UT, ...mT] = TT.replace(/^#/, "").split("-"), WT = sT.find((TT => TT.id === UT));
          if (!WT) return null;
          const zT = mT.length > 0 ? (0, YT.w)(mT.join("-")) : "";
          for (const gT of null !== (MT = WT.childPageIds) && void 0 !== MT ? MT : []) {
            var MT;
            const TT = PT(gT);
            if (TT.sourceAnchor === zT) return {
              page: TT,
              anchor: ""
            };
            if (CT(TT, zT)) return {
              page: TT,
              anchor: zT
            }
          }
          return {
            page: WT,
            anchor: zT
          }
        }
        const KT = {
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

        function ST(TT, UT) {
          let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const WT = UT.slug ? `${TT}/${UT.slug}` : TT;
          return mT ? `${WT}#${mT}` : WT
        }
        var GT = mT(4866);
        const NT = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          ET = new Set(["GameApi", "Console", "_TypeOf"]),
          hT = 4;

        function DT(TT) {
          let UT = TT.length;
          for (; UT > 0 && "" === TT[UT - 1].trim();) UT--;
          return TT.slice(0, UT)
        }

        function oT(TT) {
          var UT;
          const mT = DT(TT);
          if (null === (UT = mT.at(-1)) || void 0 === UT || !UT.trimEnd().endsWith("*/")) return {
            lines: mT,
            doc: ""
          };
          const WT = mT.findLastIndex((TT => TT.startsWith("/**")));
          return -1 === WT ? {
            lines: mT,
            doc: ""
          } : {
            lines: DT(mT.slice(0, WT)),
            doc: mT.slice(WT).join("\n")
          }
        }

        function AT(TT) {
          var UT;
          const mT = TT.split("\n"),
            WT = mT.flatMap(((TT, UT) => NT.test(TT) ? [UT] : []));
          let zT = oT(mT.slice(0, null !== (UT = WT[0]) && void 0 !== UT ? UT : mT.length)).doc;
          return WT.map(((TT, UT) => {
            var MT;
            const gT = oT(mT.slice(TT, null !== (MT = WT[UT + 1]) && void 0 !== MT ? MT : mT.length)),
              nT = {
                name: mT[TT].match(NT)[1],
                doc: zT,
                lines: gT.lines
              };
            return zT = gT.doc, nT
          }))
        }

        function RT(TT) {
          var UT;
          const mT = TT.match(/^readonly \[([\s\S]*)\]$/);
          return mT ? null !== (UT = mT[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== UT ? UT : [] : null
        }

        function TU(TT) {
          if (!TT.startsWith("{") || !TT.endsWith("}")) return null;
          const UT = {
              keys: [],
              values: []
            },
            mT = TT => {
              const mT = TT.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              mT && (UT.keys.push(mT[1].startsWith('"') ? mT[1] : `"${mT[1]}"`), UT.values.push(mT[2].trim()))
            };
          let WT = 0,
            zT = "";
          for (const MT of TT.slice(1, -1)) "{[(".includes(MT) ? WT++ : "}])".includes(MT) && WT--, ";" === MT && 0 === WT ? (mT(zT), zT = "") : zT += MT;
          return mT(zT), UT
        }

        function UU(TT) {
          return TT.length > hT ? `\n\t| ${TT.join("\n\t| ")}` : TT.join(" | ")
        }

        function mU(TT, UT) {
          const mT = function(TT, UT) {
            return TT.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((TT, mT) => {
              var WT;
              const zT = null === (WT = UT.get(mT)) || void 0 === WT ? void 0 : WT.object;
              return zT ? UU(zT.values) : TT
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((TT, mT) => {
              var WT, zT;
              const MT = null === (WT = UT.get(mT)) || void 0 === WT || null === (zT = WT.object) || void 0 === zT ? void 0 : zT.values.map(RT);
              return null !== MT && void 0 !== MT && MT.every((TT => null !== TT)) ? UU([...new Set(MT.flat())]) : TT
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((TT, mT) => {
              var WT;
              const zT = null === (WT = UT.get(mT)) || void 0 === WT ? void 0 : WT.members;
              return zT ? UU(zT) : TT
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((TT, mT) => {
              var WT;
              const zT = null === (WT = UT.get(mT)) || void 0 === WT ? void 0 : WT.object;
              return zT ? UU(zT.keys) : TT
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((TT, mT) => {
              var WT, zT;
              return null !== (WT = null === (zT = UT.get(mT)) || void 0 === zT ? void 0 : zT.text) && void 0 !== WT ? WT : TT
            }))
          }(TT.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), UT);
          return [TT.doc, mT].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function WU(TT) {
          const UT = AT(TT),
            mT = function(TT) {
              const UT = new Map,
                mT = TT.find((TT => "_TypeOf" === TT.name));
              let WT = null;
              const zT = () => {
                if (WT) {
                  const TT = WT.lines.join("\n");
                  UT.set(WT.name, {
                    text: TT,
                    members: RT(TT),
                    object: TU(TT)
                  })
                }
              };
              for (const MT of mT.lines.slice(1, -1)) {
                const TT = MT.match(/^\t([\w$]+): (.+)$/);
                TT ? (zT(), WT = {
                  name: TT[1],
                  lines: [TT[2]]
                }) : WT && WT.lines.push(MT.replace(/^\t/, ""))
              }
              return zT(), UT
            }(UT),
            WT = new Map;
          for (const zT of UT) ET.has(zT.name) || WT.has(zT.name) || WT.set(zT.name, mU(zT, mT));
          return WT
        }
        let zU, MU, gU;

        function nU() {
          return MU ??= function(TT) {
            const UT = AT(TT).find((TT => "GameApi" === TT.name)),
              mT = new Map,
              WT = UT.lines;
            for (let MT = 0; MT < WT.length; MT++) {
              var zT;
              if (!WT[MT].trimStart().startsWith("/**")) continue;
              const TT = MT;
              for (; MT < WT.length && !WT[MT].includes("*/");) MT++;
              const UT = null === (zT = WT[MT + 1]) || void 0 === zT ? void 0 : zT.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!UT) continue;
              let gT = null;
              const nT = [];
              let HT = "description",
                kT = !1;
              for (const mT of WT.slice(TT, MT + 1).join("\n").split("\n").map((TT => TT.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const TT = mT.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                TT ? (gT = TT[1].trim(), HT = "deprecation") : mT.startsWith("@") ? (HT = "otherTag", kT = !0) : "" === mT.trim() ? kT || (HT = "description", nT.push(mT)) : "deprecation" !== HT || /^[A-Z]/.test(mT.trim()) ? "otherTag" !== HT && (HT = "description", nT.push(mT)) : gT = `${gT} ${mT.trim()}`.trim()
              }
              mT.set(UT[1], {
                deprecation: gT,
                description: nT.join("\n").trim()
              })
            }
            return mT
          }(GT.default), MU
        }

        function HU() {
          if (!gU) {
            gU = new Map;
            for (const TT of sT) {
              const UT = (0, YT.A)(uT(TT)).flatMap((TT => TT.blocks));
              for (const TT of (0, YT.n)(UT))
                if ("ts" === TT.lang || "typescript" === TT.lang)
                  for (const [UT, mT] of dT(TT.code)) gU.set(UT, mT)
            }
            for (const [TT, UT] of(zU ??= WU(GT.default), zU)) gU.has(TT) || gU.set(TT, UT)
          }
          return gU
        }
        const kU = {
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
        let jU;

        function lU() {
          if (!jU) {
            jU = new Map;
            for (const TT of sT)
              if (wT(TT.layout))
                for (const UT of uT(TT).sections) jU.has(UT.heading.text) || jU.set(UT.heading.text, {
                  pageId: TT.id,
                  anchor: UT.heading.anchor
                })
          }
          return jU
        }

        function LU(TT) {
          const UT = TT.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return UT ? lU().get(UT[1]) : void 0
        }
        const pU = (0, WT.createContext)("/docs"),
          BU = (0, WT.createContext)(null),
          ZU = (0, WT.createContext)(!1),
          cU = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function vU(TT) {
          const UT = TT.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return UT ? UT[1] : null
        }

        function fU(TT) {
          let {
            colour: UT
          } = TT;
          return (0, BT.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: UT
            },
            "aria-hidden": "true"
          })
        }

        function qU(TT) {
          const UT = [];
          let mT = 0;
          for (const WT of TT.matchAll(cU)) UT.push(TT.slice(mT, WT.index), (0, BT.jsx)(fU, {
            colour: WT[0]
          }), WT[0]), mT = WT.index + WT[0].length;
          return UT.push(TT.slice(mT)), UT
        }

        function iU(TT) {
          let {
            href: UT,
            children: mT
          } = TT;
          const zT = (0, WT.useContext)(pU);
          if (UT.startsWith("#")) {
            const TT = rT(UT);
            if (TT) return (0, BT.jsx)(gT.d, {
              to: ST(zT, TT.page, TT.anchor),
              children: (0, BT.jsx)(ZU.Provider, {
                value: !0,
                children: mT
              })
            })
          }
          return (0, BT.jsx)("a", {
            href: UT,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, BT.jsx)(ZU.Provider, {
              value: !0,
              children: mT
            })
          })
        }

        function bU(TT) {
          let {
            code: UT
          } = TT;
          const mT = (0, WT.useContext)(pU);
          if ((0, WT.useContext)(ZU)) return (0, BT.jsx)("code", {
            className: "DocsInlineCode",
            children: UT
          });
          if (HU().has(UT)) return (0, BT.jsx)(JU, {
            type: UT
          });
          const zT = LU(UT);
          if (zT) return (0, BT.jsx)(gT.d, {
            className: "DocsInlineCode DocsSymbolLink",
            to: ST(mT, PT(zT.pageId), zT.anchor),
            children: UT
          });
          const MT = vU(UT);
          return (0, BT.jsxs)("code", {
            className: "DocsInlineCode",
            children: [MT && (0, BT.jsx)(fU, {
              colour: MT
            }), UT]
          })
        }

        function OU(TT) {
          let {
            text: UT
          } = TT;
          const mT = [];
          let zT = 0;
          for (const WT of UT.matchAll(YT.h)) {
            WT.index > zT && mT.push(...qU(UT.slice(zT, WT.index)));
            const [, TT, MT, gT, nT, HT] = WT;
            TT ? mT.push((0, BT.jsx)(bU, {
              code: (0, YT.p)(TT, MT)
            })) : gT ? mT.push((0, BT.jsx)("strong", {
              children: (0, BT.jsx)(OU, {
                text: gT
              })
            })) : mT.push((0, BT.jsx)(iU, {
              href: HT,
              children: (0, BT.jsx)(OU, {
                text: nT
              })
            })), zT = WT.index + WT[0].length
          }
          return zT < UT.length && mT.push(...qU(UT.slice(zT))), (0, BT.jsx)(BT.Fragment, {
            children: mT.map(((TT, UT) => (0, BT.jsx)(WT.Fragment, {
              children: TT
            }, UT)))
          })
        }
        const eU = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          YU = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function JU(TT) {
          let {
            type: UT
          } = TT;
          const mT = HU(),
            zT = [];
          for (const WT of UT.trim().matchAll(eU)) {
            const [TT, UT, MT, gT, nT] = WT;
            UT ? zT.push((0, BT.jsx)("span", {
              className: "DocsTypeString",
              children: TT
            })) : MT && mT.has(MT) ? zT.push((0, BT.jsx)(aU, {
              name: MT,
              definition: mT.get(MT)
            })) : MT ? zT.push((0, BT.jsx)("span", {
              className: YU.has(MT) ? "DocsTypeKeyword" : "DocsTypeName",
              children: TT
            })) : gT ? zT.push((0, BT.jsx)("span", {
              className: "DocsTypeNumber",
              children: TT
            })) : nT ? zT.push(" ") : zT.push((0, BT.jsx)("span", {
              className: "DocsTypePunctuation",
              children: TT
            }))
          }
          return (0, BT.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: zT.map(((TT, UT) => (0, BT.jsx)(WT.Fragment, {
              children: TT
            }, UT)))
          })
        }
        const xU = 480,
          dU = 6,
          wU = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let tU = 0;

        function aU(TT) {
          let {
            name: UT,
            definition: mT
          } = TT;
          const zT = (0, WT.useContext)(pU),
            MT = kU[UT],
            nT = (0, WT.useRef)(null),
            HT = (0, WT.useRef)(null),
            jT = (0, WT.useRef)(null),
            [lT, LT] = (0, WT.useState)(!1),
            [pT, ZT] = (0, WT.useState)(null),
            vT = (0, WT.useRef)(),
            fT = (0, WT.useContext)(BU),
            [qT] = (0, WT.useState)((() => "DocsTypePopover-" + tU++)),
            iT = () => {
              clearTimeout(vT.current), LT(!0)
            },
            bT = () => {
              clearTimeout(vT.current), vT.current = setTimeout((() => {
                LT(!1)
              }), 120)
            };
          return (0, WT.useEffect)((() => {
            if (!lT) return;
            const TT = TT => {
              if ("Escape" === TT.key) {
                var UT, mT;
                if (null !== (UT = HT.current) && void 0 !== UT && UT.contains(document.activeElement)) null === (mT = nT.current) || void 0 === mT || mT.focus();
                LT(!1)
              }
            };
            return document.addEventListener("keydown", TT), () => {
              document.removeEventListener("keydown", TT)
            }
          }), [lT]), (0, WT.useEffect)((() => () => {
            clearTimeout(vT.current)
          }), []), (0, WT.useLayoutEffect)((() => {
            if (!lT || !nT.current || !HT.current) return void ZT(null);
            const TT = nT.current.getBoundingClientRect(),
              UT = HT.current.offsetHeight,
              mT = Math.min(xU, window.innerWidth - 32),
              WT = Math.min(Math.max(16, TT.left), window.innerWidth - mT - 16),
              zT = TT.bottom + dU + UT < window.innerHeight;
            ZT({
              left: WT,
              top: zT ? TT.bottom + dU : Math.max(16, TT.top - dU - UT)
            })
          }), [lT]), (0, BT.jsxs)(BT.Fragment, {
            children: [(0, BT.jsx)("button", {
              type: "button",
              ref: nT,
              className: "DocsTypeLink",
              "aria-expanded": lT,
              "aria-describedby": lT ? qT : void 0,
              onMouseEnter: iT,
              onMouseLeave: bT,
              onFocus: iT,
              onBlur: bT,
              onKeyDown: TT => {
                "Tab" === TT.key && !TT.shiftKey && jT.current && (TT.preventDefault(), jT.current.focus())
              },
              onClick: iT,
              children: UT
            }), lT && (0, kT.createPortal)((0, BT.jsxs)("span", {
              ref: HT,
              id: qT,
              className: "DocsTypePopover",
              role: "tooltip",
              style: pT ? {
                left: pT.left,
                top: pT.top,
                maxWidth: xU
              } : {
                visibility: "hidden"
              },
              onMouseEnter: iT,
              onMouseLeave: bT,
              onFocus: iT,
              onBlur: bT,
              children: [(0, BT.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, BT.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: UT
                }), MT && (0, BT.jsxs)(gT.d, {
                  ref: jT,
                  className: "DocsTypePopoverLink",
                  to: ST(zT, PT(MT)),
                  onClick: () => {
                    LT(!1)
                  },
                  onKeyDown: TT => {
                    if ("Tab" === TT.key) {
                      var UT;
                      if (TT.preventDefault(), TT.shiftKey || !nT.current || ! function(TT, UT) {
                          const mT = [...document.querySelectorAll(wU)],
                            WT = mT.slice(mT.indexOf(TT) + 1).find((TT => TT.getClientRects().length > 0 && !(null !== UT && void 0 !== UT && UT.contains(TT))));
                          return null === WT || void 0 === WT || WT.focus(), void 0 !== WT
                        }(nT.current, HT.current)) null === (UT = nT.current) || void 0 === UT || UT.focus();
                      TT.shiftKey || LT(!1)
                    }
                  },
                  children: [PT(MT).title, (0, BT.jsx)(cT, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, BT.jsx)(eT, {
                lang: "ts",
                code: mT,
                compact: !0
              })]
            }), null !== fT && void 0 !== fT ? fT : document.body)]
          })
        }
        var yU = mT(208),
          XU = mT(4869),
          IU = mT(4873),
          QU = mT(4879);
        const sU = {
          progressBar: {
            hT: 30,
            DT: .075,
            oT: 5,
            AT: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            UU: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            WU: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            zU: !0,
            scale: 3,
            rotation: 15,
            MU: !1
          },
          gravityBar: {
            hT: 30,
            nU: .25,
            HU: 3,
            kU: .8,
            gravity: 1,
            jU: 1.5,
            lU: 8,
            LU: 4,
            AT: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            BU: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            cU: 5,
            vU: 1200,
            fU: .15,
            qU: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var FU = mT(351),
          PU = mT(2111);

        function VU(TT) {
          return TT.startsWith("fa-")
        }
        const uU = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          CU = {
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

        function rU(TT) {
          return "string" === typeof TT ? "text" : "entityName" in TT || "translationKey" in TT ? "other" : (0, FU.kb)(TT) ? "progressBar" : (0, FU.gb)(TT) ? "keyBinding" : "icon" in TT ? "icon" : "str" in TT && "string" === typeof TT.str ? "text" : "other"
        }
        const KU = [{
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
          SU = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...KU],
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
                options: PU.l
              },
              isRequired: !0
            }, ...KU],
            other: []
          };

        function GU(TT) {
          return "string" === typeof TT ? {
            str: TT
          } : TT
        }

        function NU(TT, UT) {
          let mT = GU(TT);
          for (const WT of UT) mT = mT && "object" === typeof mT ? mT[WT] : void 0;
          return mT
        }

        function EU(TT, UT, mT) {
          const WT = (TT, zT) => {
            var MT;
            const gT = UT[zT],
              nT = {
                ...TT
              };
            if (zT === UT.length - 1) return void 0 === mT ? delete nT[gT] : nT[gT] = mT, nT;
            const HT = WT(null !== (MT = TT[gT]) && void 0 !== MT ? MT : {}, zT + 1);
            return 0 === Object.keys(HT).length ? delete nT[gT] : nT[gT] = HT, nT
          };
          return function(TT) {
            const UT = Object.keys(TT);
            return "string" === typeof TT.str && 1 === UT.length ? TT.str : TT
          }(WT(GU(TT), 0))
        }

        function hU(TT, UT) {
          const mT = rU(TT),
            WT = SU[mT].find((TT => TT.path.join(".") === UT.join("."))),
            zT = null !== WT && void 0 !== WT && WT.isRequired && "other" !== mT ? NU(CU[mT], UT) : void 0;
          return EU(TT, UT, zT)
        }

        function DU(TT) {
          switch (rU(TT)) {
            case "text":
              return String(NU(TT, ["str"]));
            case "icon":
              return String(NU(TT, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(NU(TT,["progress"])))}%`;
            case "keyBinding":
              return String(NU(TT, ["action"]));
            case "other":
              return JSON.stringify(TT)
          }
        }
        const oU = /^[A-Za-z_$][\w$]*$/;

        function AU(TT) {
          if (Array.isArray(TT)) return `[${TT.map(AU).join(", ")}]`;
          if (TT && "object" === typeof TT) {
            const UT = Object.entries(TT).map((TT => {
              let [UT, mT] = TT;
              return `${oU.test(UT)?UT:JSON.stringify(UT)}: ${AU(mT)}`
            }));
            return 0 === UT.length ? "{}" : `{ ${UT.join(", ")} }`
          }
          return JSON.stringify(TT)
        }

        function RU(TT) {
          const UT = TT.map(AU),
            mT = `[${UT.join(", ")}]`;
          return mT.length <= 60 ? mT : `[\n${UT.map((TT=>`    ${TT},`)).join("\n")}\n]`
        }
        const Tm = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function Um(TT) {
          let UT = "";
          for (let zT = 0; zT < TT.length; zT++) {
            const MT = TT[zT];
            if ("\\" === MT) {
              var mT;
              const WT = null !== (mT = TT[zT + 1]) && void 0 !== mT ? mT : "";
              UT += "'" === WT ? "'" : MT + WT, zT++
            } else if ('"' === MT) UT += '\\"';
            else {
              var WT;
              UT += null !== (WT = Tm[MT]) && void 0 !== WT ? WT : MT
            }
          }
          return `"${UT}"`
        }

        function mm(TT) {
          if ("string" === typeof TT) return !0;
          if (!TT || "object" !== typeof TT || Array.isArray(TT)) return !1;
          const UT = TT;
          return "ProgressBar" === UT.type ? "number" === typeof UT.progress : "StyledKeyBinding" === UT.type ? PU.l.includes(UT.action) : "string" === typeof UT.icon || "string" === typeof UT.str || "string" === typeof UT.entityName || "string" === typeof UT.translationKey
        }

        function Wm(TT) {
          let UT;
          try {
            UT = function(TT) {
              let UT = "",
                mT = "",
                WT = 0;
              const zT = () => {
                UT += mT.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), mT = ""
              };
              for (; WT < TT.length;) {
                const MT = TT.slice(WT).search(/["'`]|\/\//);
                if (-1 === MT) {
                  mT += TT.slice(WT);
                  break
                }
                mT += TT.slice(WT, WT + MT);
                const gT = WT + MT,
                  nT = TT[gT];
                if ("/" === nT) {
                  const UT = TT.indexOf("\n", gT);
                  WT = -1 === UT ? TT.length : UT;
                  continue
                }
                if (zT(), "`" === nT) throw new Error("Use quotes rather than template strings.");
                let HT = gT + 1;
                for (; HT < TT.length && TT[HT] !== nT;) HT += "\\" === TT[HT] ? 2 : 1;
                if (HT >= TT.length) throw new Error("A string is missing its closing quote.");
                const kT = TT.slice(gT + 1, HT);
                UT += Um(kT), WT = HT + 1
              }
              return zT(), JSON.parse(UT)
            }(TT.trim())
          } catch (WT) {
            return {
              parts: null,
              error: WT instanceof SyntaxError ? "This isn't a valid array yet." : WT.message
            }
          }
          if (!Array.isArray(UT)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const mT = UT.findIndex((TT => !mm(TT)));
          return -1 !== mT ? {
            parts: null,
            error: `Part ${mT+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: UT,
            error: null
          }
        }
        const zm = 1 / yU.f.clientTicksPerSecond,
          Mm = 700,
          gm = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          nm = {
            progressBar: sU.progressBar.UU,
            timedClick: sU.timedClick.icon,
            gravityBar: sU.gravityBar.icon,
            precisionBar: sU.precisionBar.icon,
            rhythmClick: sU.rhythmClick.icon
          };

        function Hm(TT) {
          let {
            type: UT
          } = TT;
          const [mT, zT] = (0, WT.useState)("ready"), [gT, nT] = (0, WT.useState)(1), [HT, kT] = (0, WT.useState)(!0), jT = (0, WT.useRef)(null), lT = (0, WT.useRef)(null), LT = (0, WT.useRef)(null), pT = (0, WT.useRef)(new Set), ZT = (0, WT.useRef)(!1), vT = nm[UT], fT = (0, WT.useMemo)((() => ({
            getState: () => {
              var TT, UT;
              return null !== (TT = null === (UT = LT.current) || void 0 === UT ? void 0 : UT.getState()) && void 0 !== TT ? TT : gm
            },
            onFrame: TT => (pT.current.add(TT), () => {
              pT.current.delete(TT)
            })
          })), []);
          (0, WT.useEffect)((() => {
            const TT = jT.current,
              UT = lT.current;
            if (!TT || !UT) return;
            const mT = new ResizeObserver((() => {
              nT(TT.clientWidth / Math.max(1, UT.offsetWidth))
            }));
            return mT.observe(TT), () => {
              mT.disconnect()
            }
          }), []), (0, WT.useEffect)((() => {
            var TT;
            if ("playing" !== mT) return;
            let WT = !1;
            const MT = new QU.e[UT](sU[UT], (TT => {
              WT = !0, kT(!1), zT(TT ? "succeeded" : "failed")
            }), (() => {}));
            LT.current = MT;
            let gT = 0,
              nT = performance.now(),
              HT = requestAnimationFrame((function TT(UT) {
                for (gT += Math.min(.25, (UT - nT) / 1e3), nT = UT; gT >= zm && !WT;) gT -= zm, MT.handleTick(zm);
                for (const mT of pT.current) mT();
                WT || (HT = requestAnimationFrame(TT))
              }));
            return null === (TT = jT.current) || void 0 === TT || TT.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(HT), MT.tearDown(), LT.current = null, ZT.current = !1
            }
          }), [mT, UT]), (0, WT.useEffect)((() => {
            if (HT) return;
            const TT = setTimeout((() => {
              kT(!0)
            }), Mm);
            return () => {
              clearTimeout(TT)
            }
          }), [HT]);
          const qT = TT => {
            var UT;
            "playing" === mT && ZT.current !== TT && (ZT.current = TT, null === (UT = LT.current) || void 0 === UT || UT.handleMouseInput(TT))
          };
          return (0, BT.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, BT.jsxs)("div", {
              ref: jT,
              className: MT()("DocsQteStage", {
                Playing: "playing" === mT
              }),
              tabIndex: "playing" === mT ? 0 : -1,
              role: "playing" === mT ? "button" : void 0,
              "aria-label": "playing" === mT ? `${UT} quick time event: click or press Space` : void 0,
              onPointerDown: TT => {
                0 === TT.button && qT(!0)
              },
              onPointerUp: () => {
                qT(!1)
              },
              onPointerLeave: () => {
                qT(!1)
              },
              onPointerCancel: () => {
                qT(!1)
              },
              onKeyDown: TT => {
                "playing" !== mT || " " !== TT.key && "Enter" !== TT.key || (TT.preventDefault(), qT(!0))
              },
              onKeyUp: TT => {
                "playing" !== mT || " " !== TT.key && "Enter" !== TT.key || qT(!1)
              },
              children: [(0, BT.jsx)("div", {
                ref: lT,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${gT})`
                },
                children: "playing" === mT && (0, BT.jsx)(IU.c.Provider, {
                  value: fT,
                  children: (0, BT.jsx)(XU.d, {
                    qte: {
                      type: UT,
                      parameters: sU[UT]
                    }
                  })
                })
              }), "playing" !== mT && (0, BT.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== mT && (0, BT.jsxs)("div", {
                  className: MT()("DocsQteResult", "succeeded" === mT ? "Succeeded" : "Failed"),
                  children: [(0, BT.jsx)(cT, {
                    name: "succeeded" === mT ? "check" : "cross",
                    isTinted: !0
                  }), (0, BT.jsx)("span", {
                    children: "succeeded" === mT ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, BT.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !HT,
                  onClick: () => {
                    zT("playing")
                  },
                  children: [(0, BT.jsx)(cT, {
                    name: "ready" === mT ? "play" : "replay"
                  }), (0, BT.jsx)("span", {
                    children: "ready" === mT ? `Try ${UT}` : "Play again"
                  })]
                })]
              })]
            }), vT && !VU(vT) && (0, BT.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, BT.jsx)("code", {
                children: vT
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function km(TT) {
          let {
            level: UT,
            text: mT,
            anchor: WT,
            className: zT
          } = TT;
          const gT = `h${Math.min(UT,6)}`;
          return (0, BT.jsxs)(gT, {
                id: WT,
                className: MT()("DocsHeading", zT),
                children: [(0, BT.jsx)(OU, {
                      text: mT
                    }), (0, BT.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${WT}`,
                        "aria-label": `Link to ${mT.replace(/`/g,"")}`,children:"#"})]})}function jm(TT){let{items:UT,ordered:mT}=TT;const WT=mT?"ol":"ul";return(0,BT.jsx)(WT,{className:"DocsList",children:UT.map(((TT,UT)=>(0,BT.jsxs)("li",{children:[(0,BT.jsx)(OU,{text:TT.text}),TT.children.length>0&&(0,BT.jsx)(jm,{items:TT.children,ordered:mT})]},UT)))})}function lm(TT){const UT=TT[0],mT="paragraph"===(null===UT||void 0===UT?void 0:UT.kind)?UT.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(mT)?"warning":/^\*\*(tip|prefer)/.test(mT)?"tip":"note"}function Lm(TT){let{block:UT}=TT;switch(UT.kind){case"heading":return(0,BT.jsx)(km,{level:UT.level,text:UT.text,anchor:UT.anchor});case"paragraph":return(0,BT.jsx)("p",{children:(0,BT.jsx)(OU,{text:UT.text})});case"code":{const TT="ts"===UT.lang?function(TT){const UT=TT.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return UT&&Object.hasOwn(sU,UT[1])?UT[1]:null}(UT.code):null;return(0,BT.jsxs)(BT.Fragment,{children:[(0,BT.jsx)(eT,{code:UT.code,lang:UT.lang}),TT&&(0,BT.jsx)(Hm,{type:TT})]})}case"table":return(0,BT.jsx)("div",{className:"DocsTableScroll",children:(0,BT.jsxs)("table",{className:"DocsTable",children:[(0,BT.jsx)("thead",{children:(0,BT.jsx)("tr",{children:UT.header.map(((TT,UT)=>(0,BT.jsx)("th",{children:(0,BT.jsx)(OU,{text:TT})},UT)))})}),(0,BT.jsx)("tbody",{children:UT.rows.map(((TT,UT)=>(0,BT.jsx)("tr",{children:TT.map(((TT,UT)=>(0,BT.jsx)("td",{children:(0,BT.jsx)(OU,{text:TT})},UT)))},UT)))})]})});case"list":return(0,BT.jsx)(jm,{items:UT.items,ordered:UT.ordered});case"quote":return(0,BT.jsx)("aside",{className:MT()("DocsCallout",lm(UT.blocks)),children:(0,BT.jsx)(pm,{blocks:UT.blocks})});case"rule":return(0,BT.jsx)("hr",{className:"DocsRule"})}}function pm(TT){let{blocks:UT}=TT;return(0,BT.jsx)(BT.Fragment,{children:UT.map(((TT,UT)=>(0,BT.jsx)(Lm,{block:TT},UT)))})}var Bm=mT(4856),Zm=mT(4859);function cm(TT){return"blocks"===TT||"items"===TT}const fm=new Map;function qm(TT){let UT=fm.get(TT);return UT||(UT=function(TT){const UT={entries:[],legend:[],notes:[],examples:[]};let mT=!1;for(const MT of TT.split(/\r?\n/).slice(1)){if(MT.startsWith("#")){const TT=MT.replace(/^# ?/,""),WT=TT.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);WT?UT.legend.push({code:WT[1],meaning:WT[2],usage:WT[3].trim()}):/^Examples:/.test(TT.trim())?mT=!0:mT&&TT.trim()?UT.examples.push(TT.trim()):TT.trim()&&!/^\s/.test(TT)&&UT.notes.push(TT.trim());continue}const TT=MT.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var WT,zT;TT&&UT.entries.push({name:TT[1],variants:null!==(WT=null===(zT=TT[2])||void 0===zT?void 0:zT.split(","))&&void 0!==WT?WT:[]})}return UT}("blocks"===TT?Bm:Zm),fm.set(TT,UT)),UT}function im(TT){let{className:UT,value:mT,placeholder:WT,label:zT,onChange:MT,count:gT,children:nT}=TT;return(0,BT.jsxs)("div",{className:UT,children:[(0,BT.jsx)(cT,{name:"magnifying-glass"}),(0,BT.jsx)("input",{type:"search",value:mT,placeholder:WT,"aria-label":zT,onChange:TT=>{MT(TT.target.value)}}),nT,gT&&(0,BT.jsxs)("span",{className:"DocsFilterCount",children:[gT.visible," of ",gT.total]})]})}var bm=mT(1135);function Om(TT){const UT=TT.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return UT?UT[2]:null}function em(TT){return"paragraph"===TT.kind&&""===TT.text.trim()}function Ym(TT){const UT={name:TT.heading.text,description:[],params:[],returns:null};let mT="description";for(const zT of TT.blocks)if(!em(zT))if("heading"===zT.kind&&/^Parameters:?$/.test(zT.text))mT="params";else if("heading"===zT.kind&&/^Returns:?$/.test(zT.text))mT="returns",UT.returns={type:"",description:[]};else if("params"!==mT||"table"!==zT.kind){if("returns"===mT&&"paragraph"===zT.kind&&""===UT.returns.type){const TT=Om(zT.text);if(null!==TT){UT.returns.type=TT.replaceAll("\\|","|");continue}}"returns"===mT?UT.returns.description.push(zT):UT.description.push(zT)}else for(const[TT,mT,MT]of zT.rows){var WT;UT.params.push({name:TT,type:null!==(WT=Om(mT))&&void 0!==WT?WT:mT,description:null!==MT&&void 0!==MT?MT:""})}return UT}const Jm=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function xm(TT){return TT.filter((TT=>!em(TT)))}const dm=/^[\w][\w .'&!:()-]*$/,wm=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function tm(TT){var UT;if("code"===TT.kind&&"text"===TT.lang){const UT=TT.code.split("\n").map((TT=>TT.trim())).filter(Boolean);return UT.length>0&&UT.every((TT=>dm.test(TT)))?UT.map((TT=>({name:TT}))):null}return"paragraph"===TT.kind&&wm.test(TT.text.trim())?[...TT.text.matchAll(/`([ ^ `]+)` / g)].flatMap((TT => TT[1].split(/,\s*/).map((TT => ({
                              name: TT.trim()
                            }))))): "table" === TT.kind && null !== (UT = TT.header[0]) && void 0 !== UT && UT.startsWith("Song") ? TT.rows.map((TT => {
                              let [UT, mT] = TT;
                              return {
                                name: UT.replace(/`/g, ""),
                                caption: mT
                              }
                            })) : null
                          }

                          function am(TT) {
                            const UT = [];
                            for (const mT of TT) {
                              const TT = tm(mT),
                                WT = UT.at(-1),
                                zT = "table" === mT.kind;
                              TT ? "names" === (null === WT || void 0 === WT ? void 0 : WT.kind) && WT.isSongs === zT ? WT.names.push(...TT) : UT.push({
                                kind: "names",
                                names: TT,
                                isSongs: zT
                              }) : UT.push({
                                kind: "block",
                                block: mT
                              })
                            }
                            return UT
                          }
                          const ym = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function Xm(TT, UT) {
                            return `${ym[TT]}-${(0,YT.w)(UT)}`
                          }
                          const Im = new WeakMap;

                          function Qm(TT, UT, mT) {
                            let WT = Im.get(UT);
                            if (!WT) {
                              WT = new Map;
                              const mT = new Set;
                              for (const zT of (0, YT.A)(UT)) {
                                const UT = am(xm(zT.blocks)).map((UT => {
                                  if ("block" === UT.kind) return UT;
                                  return {
                                    kind: "names",
                                    names: UT.names.map((UT => {
                                      var WT, MT;
                                      const gT = Xm(TT, UT.name);
                                      let nT = gT;
                                      for (let TT = 2; mT.has(nT); TT++) nT = `${gT}-${TT}`;
                                      return mT.add(nT), {
                                        ...UT,
                                        anchor: nT,
                                        heading: null !== (WT = null === (MT = zT.heading) || void 0 === MT ? void 0 : MT.text) && void 0 !== WT ? WT : ""
                                      }
                                    })),
                                    isSongs: UT.isSongs
                                  }
                                }));
                                WT.set(zT.blocks, UT)
                              }
                              Im.set(UT, WT)
                            }
                            const zT = WT.get(mT);
                            if (!zT) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return zT
                          }
                          const sm = "/textures/docs/skinPreviews",
                            Fm = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var Pm = mT(4311),
                            Vm = mT(4328);

                          function um(TT) {
                            return Object.hasOwn(Pm.c, TT) ? Pm.c[TT] : null
                          }
                          const Cm = {
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
                            blendMode: Vm.e.Standard
                          };

                          function rm(TT, UT, mT) {
                            return UT + (mT - UT) * TT()
                          }

                          function Km(TT, UT, mT) {
                            return TT + (UT - TT) * mT
                          }

                          function Sm(TT) {
                            return TT.length > 0 && "timeFraction" in TT[0]
                          }

                          function Gm(TT, UT) {
                            if (0 === TT.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!Sm(TT.colorGradients)) {
                              const mT = TT.colorGradients,
                                {
                                  color: WT
                                } = mT[Math.floor(UT() * mT.length) % mT.length];
                              return [{
                                at: 0,
                                colour: [WT[0] / 255, WT[1] / 255, WT[2] / 255, 1]
                              }]
                            }
                            return [...TT.colorGradients].sort(((TT, UT) => TT.timeFraction - UT.timeFraction)).map((TT => {
                              var mT, WT, zT;
                              const MT = TT.minColor,
                                gT = null !== (mT = TT.maxColor) && void 0 !== mT ? mT : MT,
                                nT = UT(),
                                HT = [Km(MT[0], gT[0], nT) / 255, Km(MT[1], gT[1], nT) / 255, Km(MT[2], gT[2], nT) / 255, Km(null !== (WT = MT[3]) && void 0 !== WT ? WT : 1, null !== (zT = gT[3]) && void 0 !== zT ? zT : 1, nT)];
                              return {
                                at: TT.timeFraction,
                                colour: HT
                              }
                            }))
                          }

                          function Nm(TT, UT, mT, WT) {
                            const zT = rm(WT, TT.minEmitPower, TT.maxEmitPower),
                              MT = UT => rm(WT, Math.min(TT.dir1[UT], TT.dir2[UT]), Math.max(TT.dir1[UT], TT.dir2[UT])) * zT,
                              gT = [...TT.velocityGradients].sort(((TT, UT) => TT.timeFraction - UT.timeFraction)).map((TT => ({
                                at: TT.timeFraction,
                                factor: rm(WT, TT.factor, TT.factor2)
                              })));
                            return {
                              pos: [rm(WT, UT[0], mT[0]), rm(WT, UT[1], mT[1]), rm(WT, UT[2], mT[2])],
                              dir: [MT(0), MT(1), MT(2)],
                              age: 0,
                              life: rm(WT, TT.minLifeTime, TT.maxLifeTime),
                              size: rm(WT, TT.minSize, TT.maxSize),
                              colours: Gm(TT, WT),
                              velocityFactors: gT
                            }
                          }

                          function Em(TT, UT, mT, WT) {
                            if (UT < TT[0].at) return mT(Math.min(1, TT.length - 1));
                            for (let zT = 0; zT < TT.length - 1; zT++)
                              if (UT <= TT[zT + 1].at) {
                                const MT = TT[zT + 1].at - TT[zT].at;
                                return WT(mT(zT), mT(zT + 1), MT > 0 ? (UT - TT[zT].at) / MT : 1)
                              } return mT(TT.length - 1)
                          }

                          function hm(TT) {
                            return Em(TT.colours, TT.age / TT.life, (UT => TT.colours[UT].colour), ((TT, UT, mT) => [Km(TT[0], UT[0], mT), Km(TT[1], UT[1], mT), Km(TT[2], UT[2], mT), Km(TT[3], UT[3], mT)]))
                          }

                          function Dm(TT, UT, mT) {
                            if (TT.age += mT, TT.age >= TT.life) return !1;
                            const WT = function(TT) {
                              return 0 === TT.velocityFactors.length ? 1 : Em(TT.velocityFactors, TT.age / TT.life, (UT => TT.velocityFactors[UT].factor), Km)
                            }(TT) * mT;
                            for (let MT = 0; MT < 3; MT++) {
                              var zT;
                              TT.pos[MT] += TT.dir[MT] * WT, TT.dir[MT] += (null !== (zT = UT[MT]) && void 0 !== zT ? zT : 0) * mT
                            }
                            return !0
                          }

                          function om(TT) {
                            return String(Math.round(1e6 * TT) / 1e6)
                          }

                          function Am(TT) {
                            return `[${TT.map(om).join(", ")}]`
                          }

                          function Rm(TT, UT) {
                            const mT = `${UT}    `;
                            return `[\n${(Sm(TT)?TT.map((TT=>{const UT=[`${mT}    timeFraction: ${om(TT.timeFraction)},`,`${mT}    minColor: ${Am(TT.minColor)},`];return TT.maxColor&&UT.push(`${mT}    maxColor: ${Am(TT.maxColor)},`),`${mT}{\n${UT.join("\n")}\n${mT}},`})):TT.map((TT=>`
                            $ {
                              mT
                            } {
                              color: $ {
                                Am(TT.color)
                              }
                            }, `))).join("\n")}\n${UT}]`
                          }
                          const TW = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            UW = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const mW = .6;

                          function WW(TT, UT) {
                            return `${UT?"song":"sound"}:${TT}`
                          }
                          let zW = {
                              track: null,
                              volume: mW
                            },
                            MW = null,
                            gW = 0,
                            nW = 0;
                          const HW = new Set;

                          function kW(TT) {
                            zW = {
                              ...zW,
                              ...TT
                            }, HW.forEach((TT => {
                              TT()
                            }))
                          }

                          function jW(TT) {
                            zW.track && kW({
                              track: {
                                ...zW.track,
                                ...TT
                              }
                            })
                          }

                          function lW(TT) {
                            const [UT, mT] = (0, WT.useState)((() => TT(zW))), zT = (0, WT.useRef)(TT);
                            return zT.current = TT, (0, WT.useEffect)((() => {
                              const TT = () => {
                                mT((() => zT.current(zW)))
                              };
                              return HW.add(TT), TT(), () => {
                                HW.delete(TT)
                              }
                            }), []), UT
                          }

                          function LW() {
                            gW++;
                            const TT = MW;
                            MW = null, null === TT || void 0 === TT || TT.stop()
                          }

                          function pW(TT, UT) {
                            let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            LW();
                            const zT = gW,
                              {
                                track: MT
                              } = zW,
                              gT = MT && MT.name === TT && MT.isSong === UT ? MT.duration : 0;
                            nW = WT, kW({
                              track: {
                                name: TT,
                                isSong: UT,
                                status: "loading",
                                duration: gT
                              }
                            }), Promise.all([mT.e(227), mT.e(253)]).then((() => mT(39890))).then((mT => {
                              let {
                                playDocsSound: MT
                              } = mT;
                              zT === gW && (MW = MT(TT, UT, zW.volume, WT, {
                                onPlay: TT => {
                                  zT === gW && jW({
                                    status: "playing",
                                    duration: TT
                                  })
                                },
                                onEnd: TT => {
                                  var UT, mT;
                                  zT === gW && (MW = null, TT ? kW({
                                    track: null
                                  }) : (nW = null !== (UT = null === (mT = zW.track) || void 0 === mT ? void 0 : mT.duration) && void 0 !== UT ? UT : 0, jW({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((UT => {
                              console.error(`Could not play docs sound ${TT}`, UT), zT === gW && kW({
                                track: null
                              })
                            }))
                          }

                          function BW() {
                            const {
                              track: TT
                            } = zW;
                            if (!TT) return;
                            if ("playing" === TT.status && MW) return nW = MW.Aq(), MW.pause(), void jW({
                              status: "paused"
                            });
                            if ("loading" === TT.status) return LW(), void jW({
                              status: "paused"
                            });
                            if (MW) return void MW.resume();
                            const UT = TT.duration > 0 && nW >= TT.duration - .05;
                            pW(TT.name, TT.isSong, UT ? 0 : nW)
                          }

                          function ZW() {
                            var TT;
                            return MW && "playing" === (null === (TT = zW.track) || void 0 === TT ? void 0 : TT.status) ? MW.Aq() : nW
                          }

                          function cW(TT) {
                            var UT;
                            null === (UT = MW) || void 0 === UT || UT.setVolume(TT), kW({
                              volume: TT
                            })
                          }

                          function vW() {
                            LW(), nW = 0, kW({
                              track: null
                            })
                          }
                          const fW = (0, WT.createContext)(null);
                          let qW = null;

                          function iW() {
                            const [TT, UT] = (0, WT.useState)(null);
                            return (0, WT.useEffect)((() => {
                              let TT = !1;
                              return qW ??= Promise.all([mT.e(73), mT.e(76), mT.e(75), mT.e(74), mT.e(188), mT.e(100), mT.e(231)]).then((() => mT(39888))), qW.then((mT => {
                                TT || UT(mT)
                              }), (TT => {
                                console.error("Could not load the docs gallery's textures", TT), qW = null
                              })), () => {
                                TT = !0
                              }
                            }), []), TT
                          }
                          const bW = 24,
                            OW = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function eW(TT, UT) {
                            const mT = "skins" === TT ? function(TT, UT) {
                              const mT = Fm.find((UT => TT.startsWith(UT.heading)));
                              return mT ? function(TT, UT) {
                                return `${TT}-${UT}`
                              }(mT.prefix, UT) : null
                            }(UT.heading, UT.name) : null;
                            return null === mT ? null : `${sm}/${mT}.webp`
                          }

                          function YW(TT) {
                            let {
                              kind: UT,
                              entry: mT,
                              assets: zT,
                              renderedUrl: gT
                            } = TT;
                            const {
                              name: nT
                            } = mT, [HT, kT] = (0, WT.useState)(!1);
                            if ("icons" === UT && VU(nT)) return (0, BT.jsx)(bm.c, {
                              className: "DocsTileIcon",
                              name: nT
                            });
                            let jT = null;
                            var lT;
                            if ("icons" === UT) jT = null !== (lT = null === zT || void 0 === zT ? void 0 : zT.getIngameIconUrl(nT)) && void 0 !== lT ? lT : null;
                            else if ("particles" === UT) {
                              var LT, pT, ZT;
                              jT = null !== (LT = null === zT || void 0 === zT ? void 0 : zT.getParticleTextureUrl(null !== (pT = null === (ZT = um(nT)) || void 0 === ZT ? void 0 : ZT.texture) && void 0 !== pT ? pT : nT)) && void 0 !== LT ? LT : null
                            } else "skins" === UT && (jT = null !== gT && void 0 !== gT ? gT : OW.test(nT) ? `/textures/charSkins/previews/${nT}_preview.png` : null);
                            return !jT || HT ? (0, BT.jsx)(cT, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === UT ? "person" : "image"
                            }) : (0, BT.jsx)("img", {
                              className: MT()("DocsTileImage", {
                                Pixelated: "skins" !== UT
                              }),
                              src: jT,
                              srcSet: jT === gT ? `${jT} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${jT}`), kT(!0)
                              }
                            })
                          }

                          function JW(TT) {
                            let {
                              entry: UT,
                              isSong: mT
                            } = TT;
                            const WT = lW((TT => {
                                let {
                                  track: WT
                                } = TT;
                                return (null === WT || void 0 === WT ? void 0 : WT.name) === UT.name && WT.isSong === mT ? WT.status : null
                              })),
                              zT = null !== WT && "paused" !== WT;
                            return (0, BT.jsxs)("button", {
                              type: "button",
                              id: UT.anchor,
                              className: MT()("DocsSoundTile", {
                                Playing: zT
                              }),
                              "data-docs-track": WW(UT.name, mT),
                              "aria-label": zT ? `Pause ${UT.name}` : `Play ${UT.name}`,
                              onClick: () => {
                                null !== WT ? BW() : pW(UT.name, mT)
                              },
                              children: [(0, BT.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, BT.jsx)(cT, {
                                  name: zT ? "pause" : "play"
                                })
                              }), (0, BT.jsx)("code", {
                                className: "DocsSoundName",
                                children: UT.name
                              }), UT.caption && (0, BT.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: UT.caption
                              })]
                            })
                          }

                          function xW(TT) {
                            let {
                              kind: UT,
                              names: mT,
                              isSongs: zT
                            } = TT;
                            const gT = iW(),
                              [nT, HT] = fT(),
                              kT = !1 === (null === nT || void 0 === nT ? void 0 : nT.failed) ? nT.text : null,
                              jT = (0, WT.useContext)(fW),
                              [lT, LT] = (0, WT.useState)(""),
                              pT = lT.trim().toLowerCase(),
                              ZT = pT ? mT.filter((TT => TT.name.toLowerCase().includes(pT))) : mT;
                            return (0, BT.jsxs)("div", {
                              className: "DocsGallery",
                              children: [mT.length > bW && (0, BT.jsx)(im, {
                                className: "DocsGalleryFilter",
                                value: lT,
                                placeholder: `Filter ${mT.length} names\u2026`,
                                label: "Filter names",
                                onChange: LT,
                                count: pT ? {
                                  visible: ZT.length,
                                  total: mT.length
                                } : null
                              }), (0, BT.jsx)("div", {
                                className: MT()("DocsGalleryGrid", `Kind-${UT}`, {
                                  Songs: zT
                                }),
                                children: ZT.map((TT => {
                                  if ("sounds" === UT) return (0, BT.jsx)(JW, {
                                    entry: TT,
                                    isSong: zT
                                  }, TT.anchor);
                                  if (jT && "particles" === UT && um(TT.name)) return (0, BT.jsxs)("button", {
                                    type: "button",
                                    id: TT.anchor,
                                    className: MT()("DocsTile Previewable", {
                                      Copied: kT === TT.name
                                    }),
                                    title: `Play "${TT.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      jT(TT.name), HT(TT.name)
                                    },
                                    children: [(0, BT.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, BT.jsx)(YW, {
                                        kind: UT,
                                        entry: TT,
                                        assets: gT,
                                        renderedUrl: null
                                      }), (0, BT.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, BT.jsx)(cT, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, BT.jsx)("span", {
                                      className: "DocsTileName",
                                      children: kT === TT.name ? "Copied!" : TT.name
                                    })]
                                  }, TT.anchor);
                                  const mT = eW(UT, TT);
                                  return (0, BT.jsxs)("button", {
                                    type: "button",
                                    id: TT.anchor,
                                    className: MT()("DocsTile", {
                                      Copied: kT === TT.name
                                    }),
                                    title: `Copy "${TT.name}"`,
                                    onClick: () => {
                                      HT(TT.name)
                                    },
                                    children: [(0, BT.jsx)("span", {
                                      className: MT()("DocsTilePreview", {
                                        Rendered: null !== mT
                                      }),
                                      children: (0, BT.jsx)(YW, {
                                        kind: UT,
                                        entry: TT,
                                        assets: gT,
                                        renderedUrl: mT
                                      })
                                    }), (0, BT.jsx)("span", {
                                      className: "DocsTileName",
                                      children: kT === TT.name ? "Copied!" : TT.name
                                    })]
                                  }, TT.anchor)
                                }))
                              })]
                            })
                          }

                          function dW(TT) {
                            let {
                              kind: UT,
                              content: mT,
                              blocks: WT
                            } = TT;
                            return (0, BT.jsx)(BT.Fragment, {
                              children: Qm(UT, mT, WT).map(((TT, mT) => "block" === TT.kind ? (0, BT.jsx)(Lm, {
                                block: TT.block
                              }, mT) : (0, BT.jsx)(xW, {
                                kind: UT,
                                names: TT.names,
                                isSongs: TT.isSongs
                              }, mT)))
                            })
                          }
                          const wW = [{
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

                          function tW(TT) {
                            let {
                              cards: UT = wW,
                              label: mT = "Start here"
                            } = TT;
                            const zT = (0, WT.useContext)(pU);
                            return (0, BT.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": mT,
                              children: UT.map((TT => {
                                let {
                                  pageId: UT,
                                  countNoun: mT
                                } = TT;
                                const WT = PT(UT);
                                return (0, BT.jsxs)(gT.d, {
                                  to: ST(zT, WT),
                                  className: "DocsLandingCard",
                                  children: [(0, BT.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, BT.jsx)(cT, {
                                      name: WT.icon
                                    })
                                  }), (0, BT.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: WT.title
                                  }), (0, BT.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: WT.summary
                                  }), mT && (0, BT.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [uT(WT).sections.length, " ", mT]
                                  })]
                                }, UT)
                              }))
                            })
                          }
                          const aW = 240;

                          function yW(TT) {
                            let {
                              faces: UT
                            } = TT;
                            return (0, BT.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, BT.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${UT.top}")`
                                }
                              }), (0, BT.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${UT.left}")`
                                }
                              }), (0, BT.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${UT.right}")`
                                }
                              })]
                            })
                          }

                          function XW(TT) {
                            let {
                              src: UT
                            } = TT;
                            const [mT, zT] = (0, WT.useState)(!1);
                            return mT ? null : (0, BT.jsx)("img", {
                              src: UT,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${UT}`), zT(!0)
                              }
                            })
                          }

                          function IW(TT) {
                            let {
                              kind: UT
                            } = TT;
                            const mT = qm(UT),
                              zT = iW(),
                              gT = (0, nT.p)(),
                              [HT, kT] = (0, WT.useState)(""),
                              [jT, lT] = (0, WT.useState)(null),
                              [LT, pT] = (0, WT.useState)(aW),
                              [ZT, vT] = (0, WT.useState)(null),
                              fT = (0, WT.useRef)(null),
                              iT = HT.trim().toLowerCase();
                            (0, WT.useEffect)((() => {
                              const TT = (0, YT.t)(gT.hash),
                                WT = mT.entries.find((mT => Xm(UT, mT.name) === TT));
                              if (WT) fT.current = WT.name, kT(WT.name), lT(null), vT(WT.name);
                              else if (null !== fT.current) {
                                const TT = fT.current;
                                fT.current = null, kT((UT => UT === TT ? "" : UT)), vT(null)
                              }
                            }), [mT, UT, gT.hash, gT.key]), (0, WT.useEffect)((() => {
                              var TT;
                              null !== ZT && (null === (TT = document.getElementById(Xm(UT, ZT))) || void 0 === TT || TT.scrollIntoView({
                                block: "center"
                              }))
                            }), [UT, ZT]);
                            const bT = mT.entries.filter((TT => (!iT || TT.name.toLowerCase().includes(iT)) && (!jT || TT.variants.includes(jT))));
                            return (0, BT.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [mT.notes.length > 0 && (0, BT.jsx)("div", {
                                className: "DocsProse",
                                children: mT.notes.map((TT => (0, BT.jsx)("p", {
                                  children: TT
                                }, TT)))
                              }), mT.legend.length > 0 && (0, BT.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, BT.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, BT.jsx)("thead", {
                                    children: (0, BT.jsxs)("tr", {
                                      children: [(0, BT.jsx)("th", {
                                        children: "Code"
                                      }), (0, BT.jsx)("th", {
                                        children: "Variant"
                                      }), (0, BT.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, BT.jsx)("tbody", {
                                    children: mT.legend.map((TT => (0, BT.jsxs)("tr", {
                                      children: [(0, BT.jsx)("td", {
                                        children: (0, BT.jsx)("button", {
                                          type: "button",
                                          className: MT()("DocsVariantChip", {
                                            Active: jT === TT.code
                                          }),
                                          "aria-pressed": jT === TT.code,
                                          title: `Show only ${UT} with ${TT.meaning} variants`,
                                          onClick: () => {
                                            lT(jT === TT.code ? null : TT.code)
                                          },
                                          children: TT.code
                                        })
                                      }), (0, BT.jsx)("td", {
                                        children: TT.meaning
                                      }), (0, BT.jsx)("td", {
                                        children: (0, BT.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: TT.usage
                                        })
                                      })]
                                    }, TT.code)))
                                  })]
                                })
                              }), mT.examples.length > 0 && (0, BT.jsx)(eT, {
                                lang: "text",
                                code: mT.examples.join("\n")
                              }), (0, BT.jsx)(im, {
                                className: "DocsFilterBar",
                                value: HT,
                                placeholder: `Search ${mT.entries.length} ${UT}\u2026`,
                                label: `Search ${UT}`,
                                onChange: TT => {
                                  kT(TT), pT(aW)
                                },
                                count: iT || jT ? {
                                  visible: bT.length,
                                  total: mT.entries.length
                                } : null,
                                children: jT && (0, BT.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    lT(null)
                                  },
                                  children: [jT, " ", (0, BT.jsx)(cT, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, BT.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: bT.slice(0, LT).map((TT => {
                                  const mT = "blocks" === UT ? null === zT || void 0 === zT ? void 0 : zT.getBlockFaces(TT.name) : null,
                                    WT = zT && !mT ? zT.getItemTextureUrl(TT.name) : null;
                                  return (0, BT.jsxs)("div", {
                                    id: Xm(UT, TT.name),
                                    className: MT()("DocsCatalogueTile", {
                                      Linked: TT.name === ZT
                                    }),
                                    children: [(0, BT.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [mT && (0, BT.jsx)(yW, {
                                        faces: mT
                                      }), WT && (0, BT.jsx)(XW, {
                                        src: WT
                                      })]
                                    }), (0, BT.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: TT.name
                                    }), TT.variants.length > 0 && (0, BT.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: TT.variants.map((TT => (0, BT.jsx)("span", {
                                        children: TT
                                      }, TT)))
                                    }), (0, BT.jsx)(qT, {
                                      text: TT.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, TT.name)
                                }))
                              }), bT.length > LT && (0, BT.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  pT(bT.length)
                                },
                                children: ["Show all ", bT.length]
                              }), 0 === bT.length && (0, BT.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", UT, " match."]
                              })]
                            })
                          }
                          var QW = mT(4918),
                            sW = mT(1710);
                          const FW = .95 * QW.b;

                          function PW(TT) {
                            return /^\s*```/.test(TT)
                          }

                          function VW(TT, UT) {
                            const mT = [
                              []
                            ];
                            let WT = !1;
                            for (const zT of TT.split("\n")) !WT && UT(zT) && mT.at(-1).length > 0 && mT.push([]), PW(zT) && (WT = !WT), mT.at(-1).push(zT);
                            return mT.map((TT => TT.join("\n").trim())).filter(Boolean)
                          }

                          function uW(TT, UT) {
                            const mT = `${"#".repeat(UT)} `,
                              WT = [];
                            let zT = !1;
                            for (const MT of TT.split("\n")) PW(MT) ? zT = !zT : !zT && MT.startsWith(mT) && WT.push(MT.slice(mT.length).trim());
                            return WT
                          }

                          function CW(TT) {
                            return TT.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class rW {
                            constructor(TT, UT) {
                              this.origin = UT, this.pages = void 0, this.partPaths = new Map;
                              const mT = TT.map((TT => {
                                const UT = UT => this.resolveLinks(TT, UT).length,
                                  mT = function(TT, UT) {
                                    const mT = TT.map((TT => UT(TT.markdown) + 2)),
                                      WT = mT.reduce(((TT, UT) => TT + UT), 0),
                                      zT = WT / Math.ceil(WT / FW),
                                      MT = [];
                                    let gT = 0;
                                    return TT.forEach(((TT, UT) => {
                                      const WT = mT[UT];
                                      (0 === MT.length || gT + WT > FW || gT + WT / 2 > zT) && (MT.push([]), gT = 0), MT.at(-1).push(TT), gT += WT
                                    })), MT
                                  }(function(TT, UT) {
                                    return VW(TT, (TT => TT.startsWith("## "))).flatMap((TT => {
                                      var mT;
                                      const WT = null !== (mT = uW(TT, 2)[0]) && void 0 !== mT ? mT : "";
                                      if (UT(TT) <= FW) return [{
                                        markdown: TT,
                                        section: WT
                                      }];
                                      let zT = !1,
                                        MT = "";
                                      return VW(TT, (TT => {
                                        const UT = zT && "" !== TT.trim();
                                        return zT = "" === TT.trim(), UT
                                      })).map((TT => {
                                        var UT;
                                        const mT = uW(TT, 3),
                                          zT = TT.startsWith("### ") ? mT[0] : MT;
                                        return MT = null !== (UT = mT.at(-1)) && void 0 !== UT ? UT : MT, {
                                          markdown: TT,
                                          section: WT || zT
                                        }
                                      }))
                                    }))
                                  }(CW(TT), UT), UT);
                                return {
                                  page: TT,
                                  groups: mT.length > 1 ? mT : []
                                }
                              }));
                              for (const {
                                  page: WT,
                                  groups: zT
                                }
                                of mT) zT.forEach(((TT, UT) => {
                                const mT = (0, QW.t)(WT.slug, UT);
                                for (const zT of TT.flatMap((TT => [...uW(TT.markdown, 2), ...uW(TT.markdown, 3)]))) {
                                  const TT = `${WT.id}#${(0,YT.w)(zT)}`;
                                  this.partPaths.has(TT) || this.partPaths.set(TT, mT)
                                }
                              }));
                              this.pages = mT.map((TT => {
                                let {
                                  page: UT,
                                  groups: mT
                                } = TT;
                                return {
                                  page: UT,
                                  path: (0, QW.r)(UT.slug),
                                  markdown: `# ${UT.title}\n\n${this.resolveLinks(UT,CW(UT))}\n`,
                                  parts: mT.map(((TT, WT) => this.renderPart(UT, TT, WT, mT.length)))
                                }
                              }))
                            }
                            url(TT) {
                              return `${this.origin}${TT}`
                            }
                            getPage(TT) {
                              return this.pages.find((UT => UT.page.id === TT))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((TT => (TT.parts.length > 0 ? TT.parts : [{
                                path: TT.path,
                                label: "",
                                markdown: TT.markdown
                              }]).filter((TT => TT.markdown.length > QW.b))))
                            }
                            markdownUrl(TT, UT) {
                              const mT = UT && this.partPaths.get(`${TT.id}#${UT}`) || (0, QW.r)(TT.slug);
                              return this.url(UT ? `${mT}#${UT}` : mT)
                            }
                            resolveLinks(TT, UT) {
                              return UT.replace(/\]\((#[^)]+)\)/g, ((UT, mT) => {
                                var WT;
                                const zT = null !== (WT = rT(mT)) && void 0 !== WT ? WT : this.samePageTarget(TT, mT);
                                return zT ? `](${this.markdownUrl(zT.page,zT.anchor)})` : UT
                              }))
                            }
                            samePageTarget(TT, UT) {
                              const mT = (0, YT.w)(UT.slice(1));
                              return CT(TT, mT) ? {
                                page: TT,
                                anchor: mT
                              } : null
                            }
                            renderPart(TT, UT, mT, WT) {
                              const zT = function(TT) {
                                  const UT = TT.map((TT => TT.section)).filter(Boolean);
                                  if (0 === UT.length) return "";
                                  const mT = UT[0],
                                    WT = UT.at(-1);
                                  return mT === WT ? mT : `${mT} to ${WT}`
                                }(UT),
                                MT = UT.map((TT => TT.markdown)).join("\n\n"),
                                gT = zT ? `It covers ${zT}. ` : "",
                                nT = `Part ${mT+1} of ${WT} of [${TT.title}](${this.url((0,QW.r)(TT.slug))}). ${gT}[llms.txt](${this.url(QW.h)}) lists every part.`;
                              return {
                                path: (0, QW.t)(TT.slug, mT),
                                label: zT,
                                markdown: `# ${TT.title}, part ${mT+1} of ${WT}\n\n${nT}\n\n${this.resolveLinks(TT,MT)}\n`
                              }
                            }
                            llmsTxt(TT) {
                              const UT = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${KW(QW.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const mT of FT) {
                                UT.push("", `## ${mT.title}`, "");
                                for (const TT of mT.pageIds) {
                                  const mT = this.getPage(TT),
                                    {
                                      page: WT,
                                      parts: zT
                                    } = mT,
                                    MT = `About ${KW(mT.markdown.length)} tokens${zT.length>0?`, in ${zT.length} parts:`:"."}`;
                                  UT.push(`- [${WT.title}](${this.url(mT.path)}): ${WT.summary} ${MT}`), zT.forEach(((TT, mT) => {
                                    UT.push(`  - [Part ${mT+1}${TT.label?`: ${TT.label}`:""}](${this.url(TT.path)})`)
                                  }))
                                }
                              }
                              return UT.push("", "## Optional", "", `- [Every page in one file](${this.url(QW.d)}): About ${KW(TT.length)} tokens, for a model with a large context window.`, ""), UT.join("\n")
                            }
                            llmsFullTxt() {
                              return FT.flatMap((TT => TT.pageIds.map((TT => this.getPage(TT).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const TT = this.llmsFullTxt(),
                                UT = this.llmsTxt(TT),
                                mT = new Map([
                                  [QW.m, UT],
                                  [QW.h, UT],
                                  [QW.d, TT]
                                ]);
                              for (const WT of this.pages) {
                                mT.set(WT.path, WT.markdown);
                                for (const TT of WT.parts) mT.set(TT.path, TT.markdown)
                              }
                              return mT
                            }
                          }

                          function KW(TT) {
                            return `${Math.max(1,Math.round(TT/4e3))}K`
                          }
                          let SW = null;

                          function GW() {
                            return SW ??= new rW(sT, sW.b), SW
                          }
                          var NW = mT(4923);
                          const EW = [NW.g, NW.o];

                          function hW(TT) {
                            return GW().getPage(TT.id).parts.length > 0 ? `Read ${QW.k}, then the parts of the Bloxd Code API's ${TT.title} page it lists, so I can ask questions about it.` : `Read ${sW.b}${(0,QW.r)(TT.slug)} so I can ask questions about it. ${NW.m}`
                          }

                          function DW(TT) {
                            let {
                              page: UT
                            } = TT;
                            const [mT, WT] = fT();
                            return (0, BT.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, BT.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  WT(GW().getPage(UT.id).markdown)
                                },
                                children: [(0, BT.jsx)(cT, {
                                  name: !1 === (null === mT || void 0 === mT ? void 0 : mT.failed) ? "check" : "copy"
                                }), (0, BT.jsx)("span", {
                                  children: mT ? mT.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), EW.map((TT => (0, BT.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, NW.c)(TT, hW(UT)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, BT.jsx)(cT, {
                                  name: "external-link"
                                }), (0, BT.jsxs)("span", {
                                  children: ["Open in ", TT.name]
                                })]
                              }, TT.name)))]
                            })
                          }

                          function oW(TT) {
                            return `#${[0,1,2].map((UT=>Math.round(Math.min(255,Math.max(0,TT[UT]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function AW(TT) {
                            return [parseInt(TT.slice(1, 3), 16), parseInt(TT.slice(3, 5), 16), parseInt(TT.slice(5, 7), 16)]
                          }

                          function RW(TT) {
                            let {
                              label: UT,
                              min: mT,
                              max: WT,
                              step: zT,
                              low: MT,
                              high: gT,
                              onChange: nT
                            } = TT;
                            return (0, BT.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, BT.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, BT.jsx)("span", {
                                  children: UT
                                }), (0, BT.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: MT === gT ? MT : `${MT}\u2013${gT}`
                                })]
                              }), (0, BT.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, BT.jsx)("input", {
                                  type: "range",
                                  min: mT,
                                  max: WT,
                                  step: zT,
                                  value: Math.min(WT, MT),
                                  "aria-label": `Minimum ${UT.toLowerCase()}`,
                                  onChange: TT => {
                                    const UT = Number(TT.target.value);
                                    nT(UT, Math.max(UT, gT))
                                  }
                                }), (0, BT.jsx)("input", {
                                  type: "range",
                                  min: mT,
                                  max: WT,
                                  step: zT,
                                  value: Math.min(WT, gT),
                                  "aria-label": `Maximum ${UT.toLowerCase()}`,
                                  onChange: TT => {
                                    const UT = Number(TT.target.value);
                                    nT(Math.min(UT, MT), UT)
                                  }
                                })]
                              })]
                            })
                          }

                          function Tz(TT) {
                            let {
                              label: UT,
                              min: mT,
                              max: WT,
                              step: zT,
                              value: MT,
                              onChange: gT,
                              format: nT = String
                            } = TT;
                            return (0, BT.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, BT.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, BT.jsx)("span", {
                                  children: UT
                                }), (0, BT.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: nT(MT)
                                })]
                              }), (0, BT.jsx)("input", {
                                type: "range",
                                min: mT,
                                max: WT,
                                step: zT,
                                value: Math.min(WT, Math.max(mT, MT)),
                                "aria-label": UT,
                                onChange: TT => {
                                  gT(Number(TT.target.value))
                                }
                              })]
                            })
                          }

                          function Uz(TT) {
                            let {
                              opts: UT,
                              onChange: mT
                            } = TT;
                            const WT = UT.colorGradients;
                            if (!Sm(WT)) return (0, BT.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, BT.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, BT.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, BT.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: WT.map(((TT, UT) => (0, BT.jsx)("input", {
                                  type: "color",
                                  value: oW(TT.color),
                                  "aria-label": `Colour ${UT+1}`,
                                  onChange: TT => {
                                    const zT = [...WT];
                                    zT[UT] = {
                                      color: AW(TT.target.value)
                                    }, mT(zT)
                                  }
                                }, UT)))
                              })]
                            });
                            const zT = (TT, UT) => {
                              const zT = [...WT];
                              zT[TT] = UT, mT(zT)
                            };
                            return (0, BT.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, BT.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, BT.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, BT.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), WT.map(((TT, UT) => {
                                var mT;
                                const WT = null !== (mT = TT.maxColor) && void 0 !== mT ? mT : TT.minColor;
                                return (0, BT.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, BT.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * TT.timeFraction), "%"]
                                  }), (0, BT.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${oW(TT.minColor)}, ${oW(WT)})`
                                    }
                                  }), (0, BT.jsx)("input", {
                                    type: "color",
                                    value: oW(TT.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*TT.timeFraction)}%`,
                                    onChange: mT => {
                                      zT(UT, {
                                        ...TT,
                                        minColor: [...AW(mT.target.value), TT.minColor[3]]
                                      })
                                    }
                                  }), (0, BT.jsx)("input", {
                                    type: "color",
                                    value: oW(WT),
                                    "aria-label": `Maximum colour at ${Math.round(100*TT.timeFraction)}%`,
                                    onChange: mT => {
                                      zT(UT, {
                                        ...TT,
                                        maxColor: [...AW(mT.target.value), WT[3]]
                                      })
                                    }
                                  })]
                                }, UT)
                              }))]
                            })
                          }
                          const mz = [-.5, -.5, -.5],
                            Wz = [.5, .5, .5],
                            zz = [0, 1, 2, 3, 4, 5, 6, 7].map((TT => [1 & TT ? Wz[0] : mz[0], 2 & TT ? Wz[1] : mz[1], 4 & TT ? Wz[2] : mz[2]]));class Mz {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(TT, UT, mT, WT) {
                              const zT = Math.round(31 * UT),
                                MT = Math.round(31 * mT),
                                gT = Math.round(31 * WT),
                                nT = `${zT}|${MT}|${gT}`;
                              let HT = this.tints.get(TT);
                              (!HT || HT.size > 2e3) && (HT = new Map, this.tints.set(TT, HT));
                              let kT = HT.get(nT);
                              if (kT) return kT;
                              kT = document.createElement("canvas"), kT.width = TT.naturalWidth || 16, kT.height = TT.naturalHeight || 16;
                              const jT = kT.getContext("2d");
                              return jT ? (jT.imageSmoothingEnabled = !1, jT.drawImage(TT, 0, 0, kT.width, kT.height), jT.globalCompositeOperation = "multiply", jT.fillStyle = `rgb(${zT/31*255}, ${MT/31*255}, ${gT/31*255})`, jT.fillRect(0, 0, kT.width, kT.height), jT.globalCompositeOperation = "destination-in", jT.drawImage(TT, 0, 0, kT.width, kT.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), HT.set(nT, kT), kT
                            }
                          }

                          function gz(TT) {
                            let {
                              opts: UT,
                              textureUrl: mT,
                              burst: zT,
                              paused: MT
                            } = TT;
                            const gT = (0, WT.useRef)(null),
                              nT = (0, WT.useRef)(UT);
                            nT.current = UT;
                            const HT = (0, WT.useRef)(MT);
                            HT.current = MT;
                            const kT = (0, WT.useRef)(null),
                              jT = (0, WT.useRef)(null),
                              lT = (0, WT.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(TT) {
                                let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const mT = [-.5, -.5, -.5],
                                  WT = [.5, .5, .5];
                                let zT = .5;
                                for (let MT = 0; MT < 40; MT++) {
                                  const MT = Nm(TT, mT, WT, UT),
                                    gT = Math.max(MT.life / 30, .001);
                                  for (; Dm(MT, TT.gravity, gT);) zT = Math.max(zT, Math.hypot(MT.pos[0], MT.pos[1], MT.pos[2]) + MT.size / 2)
                                }
                                return zT
                              }(UT)))), [UT]),
                              LT = (0, WT.useRef)(lT);
                            return LT.current = lT, (0, WT.useEffect)((() => {
                              if (kT.current = null, !mT) return;
                              const TT = new Image;
                              let UT = !1;
                              return TT.onload = () => {
                                UT || (kT.current = TT)
                              }, TT.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${mT}`)
                              }, TT.src = mT, () => {
                                UT = !0
                              }
                            }), [mT]), (0, WT.useEffect)((() => {
                              var TT;
                              null === (TT = jT.current) || void 0 === TT || TT.call(jT)
                            }), [UT, zT]), (0, WT.useEffect)((() => {
                              const TT = gT.current,
                                UT = null === TT || void 0 === TT ? void 0 : TT.getContext("2d");
                              if (!TT || !UT) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const mT = new Mz;
                              let WT = [],
                                zT = 0,
                                MT = -.7,
                                lT = LT.current,
                                pT = performance.now(),
                                BT = 0,
                                ZT = !0,
                                cT = null;
                              const vT = () => {
                                const TT = nT.current,
                                  UT = Math.min(400, Math.max(0, Math.ceil(TT.manualEmitCount)));
                                WT = [];
                                for (let mT = 0; mT < UT; mT++) WT.push(Nm(TT, mz, Wz, Math.random));
                                zT = 0
                              };
                              jT.current = vT, vT();
                              const fT = gT => {
                                BT = requestAnimationFrame(fT);
                                const jT = Math.min(.05, (gT - pT) / 1e3);
                                if (pT = gT, !ZT) return;
                                const qT = window.devicePixelRatio || 1,
                                  iT = Math.round(TT.clientWidth * qT),
                                  bT = Math.round(TT.clientHeight * qT);
                                if (0 === iT || 0 === bT) return;
                                TT.width === iT && TT.height === bT || (TT.width = iT, TT.height = bT);
                                const OT = nT.current;
                                null === cT && (MT += .18 * jT), lT += (LT.current - lT) * Math.min(1, 4 * jT);
                                const eT = .6 * jT;
                                WT = WT.filter((TT => Dm(TT, OT.gravity, eT))), 0 !== WT.length || HT.current || (zT += jT, zT > .6 && vT());
                                const YT = function(TT, UT, mT, WT) {
                                  const zT = 3.2 * WT,
                                    MT = .44 * Math.min(TT, UT) * zT / WT,
                                    gT = Math.cos(mT),
                                    nT = Math.sin(mT),
                                    HT = Math.cos(.42),
                                    kT = Math.sin(.42);
                                  return (mT, WT, jT) => {
                                    const lT = mT * nT + jT * gT,
                                      LT = zT - (WT * kT + lT * HT);
                                    if (LT < .05) return null;
                                    const pT = MT / LT;
                                    return {
                                      x: TT / 2 + (mT * gT - jT * nT) * pT,
                                      y: UT / 2 - (WT * HT - lT * kT) * pT,
                                      scale: pT,
                                      depth: LT
                                    }
                                  }
                                }(iT, bT, MT, lT);
                                ! function(TT, UT, mT, WT, zT) {
                                  const MT = TT.createLinearGradient(0, 0, 0, mT);
                                  MT.addColorStop(0, "#23262d"), MT.addColorStop(1, "#16181c"), TT.globalCompositeOperation = "source-over", TT.globalAlpha = 1, TT.fillStyle = MT, TT.fillRect(0, 0, UT, mT);
                                  const gT = (UT, mT) => {
                                      const zT = WT(UT[0], UT[1], UT[2]),
                                        MT = WT(mT[0], mT[1], mT[2]);
                                      zT && MT && (TT.beginPath(), TT.moveTo(zT.x, zT.y), TT.lineTo(MT.x, MT.y), TT.stroke())
                                    },
                                    nT = Math.ceil(zT) + 1,
                                    HT = mz[1];
                                  TT.lineWidth = 1, TT.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let kT = -nT; kT <= nT; kT++) gT([kT + .5, HT, .5 - nT], [kT + .5, HT, nT + .5]), gT([.5 - nT, HT, kT + .5], [nT + .5, HT, kT + .5]);
                                  TT.strokeStyle = "rgba(255, 255, 255, 0.28)", TT.setLineDash([4, 4]);
                                  for (const kT of zz)
                                    for (const TT of zz) {
                                      const UT = [0, 1, 2].filter((UT => kT[UT] !== TT[UT]));
                                      1 === UT.length && kT[UT[0]] < TT[UT[0]] && gT(kT, TT)
                                    }
                                  TT.setLineDash([])
                                }(UT, iT, bT, YT, lT);
                                const JT = kT.current,
                                  xT = WT.map((TT => ({
                                    particle: TT,
                                    at: YT(TT.pos[0], TT.pos[1], TT.pos[2])
                                  }))).filter((TT => null !== TT.at)).sort(((TT, UT) => UT.at.depth - TT.at.depth));
                                UT.imageSmoothingEnabled = !1;
                                for (const TT of function(TT) {
                                    switch (TT) {
                                      case Vm.e.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case Vm.e.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case Vm.e.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case Vm.e.MultiplyAdd:
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
                                  }(OT.blendMode)) {
                                  UT.globalCompositeOperation = TT.operation;
                                  for (const {
                                      particle: WT,
                                      at: zT
                                    }
                                    of xT) {
                                    const [MT, gT, nT, HT] = hm(WT), kT = Math.max(1, WT.size * zT.scale);
                                    UT.globalAlpha = TT.usesAlpha ? Math.min(1, Math.max(0, HT)) : 1, JT ? UT.drawImage(mT.get(JT, MT, gT, nT), zT.x - kT / 2, zT.y - kT / 2, kT, kT) : (UT.fillStyle = `rgb(${255*MT}, ${255*gT}, ${255*nT})`, UT.fillRect(zT.x - kT / 2, zT.y - kT / 2, kT, kT))
                                  }
                                }
                                UT.globalCompositeOperation = "source-over", UT.globalAlpha = 1
                              };
                              BT = requestAnimationFrame(fT);
                              const qT = new IntersectionObserver((TT => {
                                let [UT] = TT;
                                ZT = UT.isIntersecting
                              }));
                              qT.observe(TT);
                              const iT = UT => {
                                  cT = UT.clientX, TT.setPointerCapture(UT.pointerId)
                                },
                                bT = TT => {
                                  null !== cT && (MT += .01 * (TT.clientX - cT), cT = TT.clientX)
                                },
                                OT = () => {
                                  cT = null
                                };
                              return TT.addEventListener("pointerdown", iT), TT.addEventListener("pointermove", bT), TT.addEventListener("pointerup", OT), TT.addEventListener("pointercancel", OT), () => {
                                cancelAnimationFrame(BT), qT.disconnect(), jT.current = null, TT.removeEventListener("pointerdown", iT), TT.removeEventListener("pointermove", bT), TT.removeEventListener("pointerup", OT), TT.removeEventListener("pointercancel", OT)
                              }
                            }), []), (0, BT.jsx)("canvas", {
                              ref: gT,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${UT.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const nz = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            Hz = [{
                              mode: Vm.e.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: Vm.e.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: Vm.e.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: Vm.e.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: Vm.e.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            kz = (0, WT.forwardRef)((function(TT, UT) {
                              var mT, zT;
                              let {
                                textures: gT
                              } = TT;
                              const nT = iW(),
                                HT = (0, WT.useRef)(null),
                                [kT, jT] = (0, WT.useState)(Cm),
                                [lT, LT] = (0, WT.useState)("example"),
                                [pT, ZT] = (0, WT.useState)(0),
                                [vT, fT] = (0, WT.useState)(!1),
                                iT = TT => {
                                  const UT = "example" === TT ? Cm : um(TT);
                                  UT && (jT(UT), LT(TT))
                                };
                              (0, WT.useImperativeHandle)(UT, (() => ({
                                preview: TT => {
                                  var UT;
                                  iT(TT), null === (UT = HT.current) || void 0 === UT || UT.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const bT = TT => {
                                  jT({
                                    ...kT,
                                    ...TT
                                  }), LT(null)
                                },
                                OT = function(TT, UT) {
                                  if (null !== UT) return `${TW}    presetId: "${UT}",\n${UW}\n})`;
                                  const mT = TT.velocityGradients.map((TT => `        {\n            timeFraction: ${om(TT.timeFraction)},\n            factor: ${om(TT.factor)},\n            factor2: ${om(TT.factor2)},\n        },`)),
                                    WT = [`    dir1: ${Am(TT.dir1)},`, `    dir2: ${Am(TT.dir2)},`, UW, `    texture: "${TT.texture}",`, `    minLifeTime: ${om(TT.minLifeTime)},`, `    maxLifeTime: ${om(TT.maxLifeTime)},`, `    minEmitPower: ${om(TT.minEmitPower)},`, `    maxEmitPower: ${om(TT.maxEmitPower)},`, `    minSize: ${om(TT.minSize)},`, `    maxSize: ${om(TT.maxSize)},`, `    manualEmitCount: ${om(TT.manualEmitCount)},`, `    gravity: ${Am(TT.gravity)},`, `    colorGradients: ${Rm(TT.colorGradients,"    ")},`, `    velocityGradients: ${mT.length>0?`[\n${mT.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${om(TT.blendMode)},`];
                                  return void 0 !== TT.hideDist && WT.push(`    hideDist: ${om(TT.hideDist)},`), `${TW}${WT.join("\n")}\n})`
                                }(kT, null === lT || "example" === lT ? null : lT),
                                YT = gT.includes(kT.texture) ? gT : [...gT, kT.texture];
                              return (0, BT.jsxs)("section", {
                                ref: HT,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, BT.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, BT.jsxs)("div", {
                                    children: [(0, BT.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, BT.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, BT.jsx)(qT, {
                                    text: OT,
                                    label: "Copy code"
                                  })]
                                }), (0, BT.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, BT.jsx)("button", {
                                    type: "button",
                                    className: MT()("DocsVariantChip", {
                                      Active: "example" === lT
                                    }),
                                    onClick: () => {
                                      iT("example")
                                    },
                                    children: "Example"
                                  }), nz.filter((TT => null !== um(TT))).map((TT => (0, BT.jsx)("button", {
                                    type: "button",
                                    className: MT()("DocsVariantChip", {
                                      Active: lT === TT
                                    }),
                                    onClick: () => {
                                      iT(TT)
                                    },
                                    children: TT
                                  }, TT))), (0, BT.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== lT && void 0 !== lT ? lT : "custom",
                                    "aria-label": "Preset",
                                    onChange: TT => {
                                      iT(TT.target.value)
                                    },
                                    children: [(0, BT.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === lT && (0, BT.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), Pm.b.map((TT => (0, BT.jsx)("option", {
                                      value: TT,
                                      children: TT
                                    }, TT)))]
                                  })]
                                }), (0, BT.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, BT.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, BT.jsx)(gz, {
                                      opts: kT,
                                      textureUrl: null !== (mT = null === nT || void 0 === nT ? void 0 : nT.getParticleTextureUrl(kT.texture)) && void 0 !== mT ? mT : null,
                                      burst: pT,
                                      paused: vT
                                    }), (0, BT.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, BT.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          ZT(pT + 1)
                                        },
                                        children: [(0, BT.jsx)(cT, {
                                          name: "replay"
                                        }), (0, BT.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, BT.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": vT,
                                        onClick: () => {
                                          fT(!vT)
                                        },
                                        children: [(0, BT.jsx)(cT, {
                                          name: vT ? "play" : "pause"
                                        }), (0, BT.jsx)("span", {
                                          children: vT ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, BT.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, BT.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, BT.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, BT.jsx)("span", {
                                          children: "Texture"
                                        }), (0, BT.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: kT.texture
                                        })]
                                      }), (0, BT.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: YT.map((TT => {
                                          var UT;
                                          const mT = null !== (UT = null === nT || void 0 === nT ? void 0 : nT.getParticleTextureUrl(TT)) && void 0 !== UT ? UT : null;
                                          return (0, BT.jsx)("button", {
                                            type: "button",
                                            className: MT()("DocsParticleTexture", {
                                              Active: kT.texture === TT
                                            }),
                                            title: TT,
                                            "aria-label": TT,
                                            "aria-pressed": kT.texture === TT,
                                            onClick: () => {
                                              bT({
                                                texture: TT
                                              })
                                            },
                                            children: mT ? (0, BT.jsx)("img", {
                                              src: mT,
                                              alt: ""
                                            }) : (0, BT.jsx)(cT, {
                                              name: "image"
                                            })
                                          }, TT)
                                        }))
                                      })]
                                    }), (0, BT.jsx)(Tz, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: kT.manualEmitCount,
                                      onChange: TT => {
                                        bT({
                                          manualEmitCount: TT
                                        })
                                      }
                                    }), (0, BT.jsx)(RW, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: kT.minLifeTime,
                                      high: kT.maxLifeTime,
                                      onChange: (TT, UT) => {
                                        bT({
                                          minLifeTime: TT,
                                          maxLifeTime: UT
                                        })
                                      }
                                    }), (0, BT.jsx)(RW, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: kT.minEmitPower,
                                      high: kT.maxEmitPower,
                                      onChange: (TT, UT) => {
                                        bT({
                                          minEmitPower: TT,
                                          maxEmitPower: UT
                                        })
                                      }
                                    }), (0, BT.jsx)(RW, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: kT.minSize,
                                      high: kT.maxSize,
                                      onChange: (TT, UT) => {
                                        bT({
                                          minSize: TT,
                                          maxSize: UT
                                        })
                                      }
                                    }), (0, BT.jsx)(Tz, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (zT = kT.gravity[1]) && void 0 !== zT ? zT : 0,
                                      onChange: TT => {
                                        var UT, mT;
                                        bT({
                                          gravity: [null !== (UT = kT.gravity[0]) && void 0 !== UT ? UT : 0, TT, null !== (mT = kT.gravity[2]) && void 0 !== mT ? mT : 0]
                                        })
                                      }
                                    }), (0, BT.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, BT.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, BT.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, BT.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: kT.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: TT => {
                                          bT({
                                            blendMode: Number(TT.target.value)
                                          })
                                        },
                                        children: Hz.map((TT => {
                                          let {
                                            mode: UT,
                                            label: mT
                                          } = TT;
                                          return (0, BT.jsx)("option", {
                                            value: UT,
                                            children: mT
                                          }, UT)
                                        }))
                                      })]
                                    }), (0, BT.jsx)(Uz, {
                                      opts: kT,
                                      onChange: TT => {
                                        bT({
                                          colorGradients: TT
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, BT.jsx)(eT, {
                                  code: OT,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var jz = mT(4590),
                            lz = mT(2023);

                          function Lz(TT, UT) {
                            return TT ? jz.d.includes(UT) ? TT.getIngameIconUrl(UT) : TT.getItemIconUrl(UT) : null
                          }

                          function pz(TT) {
                            var UT, mT, WT;
                            let {
                              part: zT,
                              assets: gT
                            } = TT;
                            const nT = Lz(gT, zT.icon),
                              HT = null !== (UT = null === (mT = zT.style) || void 0 === mT ? void 0 : mT.fontSize) && void 0 !== UT ? UT : "1.8em",
                              kT = (0, FU.Ob)(zT.style);
                            return (0, BT.jsxs)("span", {
                              className: MT()("DocsBloxdTextIcon", {
                                Missing: !nT
                              }),
                              style: {
                                width: HT,
                                height: HT,
                                opacity: null === (WT = zT.style) || void 0 === WT ? void 0 : WT.opacity
                              },
                              title: nT ? void 0 : `No Bloxd icon, item or block is called "${zT.icon}"`,
                              children: [nT && kT && (0, BT.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: kT,
                                  maskImage: `url("${nT}")`,
                                  WebkitMaskImage: `url("${nT}")`
                                }
                              }), nT ? (0, BT.jsx)("img", {
                                src: nT,
                                alt: "",
                                className: MT()({
                                  Tinted: kT
                                })
                              }) : (0, BT.jsx)(cT, {
                                name: "image"
                              })]
                            })
                          }

                          function Bz(TT) {
                            let {
                              parts: UT,
                              className: mT
                            } = TT;
                            const WT = iW(),
                              zT = [];
                            let gT = [];
                            const nT = TT => {
                              gT.length > 0 && (zT.push((0, BT.jsx)(lz.e, {
                                text: gT
                              }, `run-${TT}`)), gT = [])
                            };
                            return UT.forEach(((TT, UT) => {
                              "icon" !== rU(TT) || VU(TT.icon) ? gT.push(TT) : (nT(UT), zT.push((0, BT.jsx)(pz, {
                                part: TT,
                                assets: WT
                              }, `icon-${UT}`)))
                            })), nT(UT.length), (0, BT.jsx)("div", {
                              className: MT()("DocsStyledTextPreview", mT),
                              children: zT
                            })
                          }
                          const Zz = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let cz = null;

                          function vz(TT) {
                            if (cz ??= document.createElement("canvas").getContext("2d"), !cz) return "#000000";
                            cz.fillStyle = "#000000", cz.fillStyle = TT;
                            const UT = cz.fillStyle;
                            return UT.startsWith("#") ? UT : "#000000"
                          }

                          function fz(TT) {
                            let {
                              value: UT,
                              label: mT,
                              onChange: WT
                            } = TT;
                            return (0, BT.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, BT.jsx)("input", {
                                type: "color",
                                value: vz(UT),
                                "aria-label": `${mT} picker`,
                                onChange: TT => {
                                  WT(TT.target.value)
                                }
                              }), (0, BT.jsx)("input", {
                                type: "text",
                                value: UT,
                                placeholder: "#ffb914 or gold",
                                "aria-label": mT,
                                spellCheck: !1,
                                onChange: TT => {
                                  WT(TT.target.value)
                                }
                              })]
                            })
                          }

                          function qz(TT) {
                            let {
                              value: UT,
                              fontAwesomeIcons: mT,
                              onChange: zT
                            } = TT;
                            const gT = iW(),
                              [nT, HT] = (0, WT.useState)(VU(UT) ? "fontAwesome" : "bloxd"),
                              [kT, jT] = (0, WT.useState)(""),
                              lT = kT.trim().toLowerCase(),
                              LT = "bloxd" === nT ? jz.d : mT,
                              pT = lT ? LT.filter((TT => TT.toLowerCase().includes(lT))) : LT;
                            return (0, BT.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, BT.jsx)("input", {
                                type: "text",
                                value: UT,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: TT => {
                                  zT(TT.target.value)
                                }
                              }), (0, BT.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, BT.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((TT => (0, BT.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": nT === TT,
                                    className: MT()("DocsVariantChip", {
                                      Active: nT === TT
                                    }),
                                    onClick: () => {
                                      HT(TT)
                                    },
                                    children: "bloxd" === TT ? `Bloxd icons (${jz.d.length})` : `Font Awesome (${mT.length})`
                                  }, TT))), (0, BT.jsx)("input", {
                                    type: "search",
                                    value: kT,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: TT => {
                                      jT(TT.target.value)
                                    }
                                  })
                                ]
                              }), (0, BT.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [pT.map((TT => {
                                  const mT = "bloxd" === nT ? Lz(gT, TT) : null;
                                  return (0, BT.jsx)("button", {
                                    type: "button",
                                    title: TT,
                                    "aria-label": TT,
                                    "aria-pressed": TT === UT,
                                    className: MT()("DocsIconPickerOption", {
                                      Active: TT === UT
                                    }),
                                    onClick: () => {
                                      zT(TT)
                                    },
                                    children: "fontAwesome" === nT ? (0, BT.jsx)(bm.c, {
                                      name: TT
                                    }) : mT ? (0, BT.jsx)("img", {
                                      src: mT,
                                      alt: ""
                                    }) : (0, BT.jsx)(cT, {
                                      name: "image"
                                    })
                                  }, TT)
                                })), 0 === pT.length && (0, BT.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", kT, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function iz(TT) {
                            let {
                              property: UT,
                              value: mT,
                              fontAwesomeIcons: WT,
                              onChange: zT
                            } = TT;
                            const {
                              field: MT,
                              label: gT
                            } = UT, nT = TT => "" !== TT || UT.isRequired ? TT : void 0;
                            switch (MT.kind) {
                              case "text":
                                return MT.multiline ? (0, BT.jsx)("textarea", {
                                  value: String(null !== mT && void 0 !== mT ? mT : ""),
                                  rows: 2,
                                  "aria-label": gT,
                                  onChange: TT => {
                                    zT(TT.target.value)
                                  }
                                }) : (0, BT.jsx)("input", {
                                  type: "text",
                                  value: String(null !== mT && void 0 !== mT ? mT : ""),
                                  "aria-label": gT,
                                  onChange: TT => {
                                    zT(nT(TT.target.value))
                                  }
                                });
                              case "size":
                                return (0, BT.jsx)("input", {
                                  type: "text",
                                  value: String(null !== mT && void 0 !== mT ? mT : ""),
                                  placeholder: UT.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": gT,
                                  spellCheck: !1,
                                  onChange: TT => {
                                    zT(nT(TT.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, BT.jsx)(fz, {
                                  value: String(null !== mT && void 0 !== mT ? mT : ""),
                                  label: gT,
                                  onChange: TT => {
                                    zT(nT(TT))
                                  }
                                });
                              case "colours": {
                                const TT = Array.isArray(mT) ? mT : [],
                                  UT = TT => {
                                    zT(TT.length > 0 ? TT : void 0)
                                  };
                                return (0, BT.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [TT.map(((mT, WT) => (0, BT.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, BT.jsx)(fz, {
                                      value: mT,
                                      label: `${gT} ${WT+1}`,
                                      onChange: mT => {
                                        UT(TT.map(((TT, UT) => UT === WT ? mT : TT)))
                                      }
                                    }), (0, BT.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${WT+1}`,
                                      onClick: () => {
                                        UT(TT.filter(((TT, UT) => UT !== WT)))
                                      },
                                      children: (0, BT.jsx)(cT, {
                                        name: "cross"
                                      })
                                    })]
                                  }, WT))), (0, BT.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var mT;
                                      UT([...TT, null !== (mT = TT.at(-1)) && void 0 !== mT ? mT : "#ffffff"])
                                    },
                                    children: [(0, BT.jsx)(cT, {
                                      name: "plus"
                                    }), 0 === TT.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var HT;
                                const TT = "number" === typeof mT ? mT : Number(null !== (HT = UT.defaultText) && void 0 !== HT ? HT : 0);
                                return (0, BT.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, BT.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: TT,
                                    "aria-label": gT,
                                    onChange: TT => {
                                      zT(Number(TT.target.value))
                                    }
                                  }), (0, BT.jsx)("output", {
                                    children: TT.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, BT.jsxs)("select", {
                                  value: String(null !== mT && void 0 !== mT ? mT : ""),
                                  "aria-label": gT,
                                  onChange: TT => {
                                    zT(nT(TT.target.value))
                                  },
                                  children: [!UT.isRequired && (0, BT.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", UT.defaultText, ")"]
                                  }), MT.options.map((TT => (0, BT.jsx)("option", {
                                    value: TT,
                                    children: TT
                                  }, TT)))]
                                });
                              case "icon":
                                return (0, BT.jsx)(qz, {
                                  value: String(null !== mT && void 0 !== mT ? mT : ""),
                                  fontAwesomeIcons: WT,
                                  onChange: zT
                                })
                            }
                          }

                          function bz(TT) {
                            let UT;
                            try {
                              UT = JSON.parse(TT)
                            } catch (mT) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${mT.message}`
                              }
                            }
                            return mm(UT) ? {
                              part: UT,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function Oz(TT) {
                            let {
                              parts: UT,
                              index: mT,
                              fontAwesomeIcons: zT,
                              onChange: MT,
                              yI: gT,
                              onClose: nT
                            } = TT;
                            const HT = (0, WT.useContext)(BU),
                              jT = (0, WT.useRef)(null),
                              lT = UT[mT],
                              LT = rU(lT),
                              [pT, ZT] = (0, WT.useState)((() => JSON.stringify(lT, null, 2))),
                              vT = (0, WT.useMemo)((() => "other" === LT ? bz(pT).error : null), [LT, pT]);
                            (0, WT.useEffect)((() => {
                              var TT;
                              null === (TT = jT.current) || void 0 === TT || TT.focus()
                            }), []);
                            const fT = (0, BT.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: TT => {
                                TT.target === TT.currentTarget && nT()
                              },
                              children: (0, BT.jsxs)("div", {
                                ref: jT,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${mT+1}: ${uU[LT]}`,
                                tabIndex: -1,
                                onKeyDown: TT => {
                                  "Escape" === TT.key ? (TT.stopPropagation(), nT()) : "Tab" === TT.key && jT.current && function(TT, UT) {
                                    const mT = Array.from(TT.querySelectorAll(wU)),
                                      WT = mT[0],
                                      zT = mT.at(-1);
                                    if (!WT || !zT) return;
                                    const MT = document.activeElement;
                                    !UT.shiftKey || MT !== WT && MT !== TT ? UT.shiftKey || MT !== zT || (UT.preventDefault(), WT.focus()) : (UT.preventDefault(), zT.focus())
                                  }(jT.current, TT)
                                },
                                children: [(0, BT.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, BT.jsxs)("div", {
                                    children: [(0, BT.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", mT + 1]
                                    }), (0, BT.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: uU[LT]
                                    })]
                                  }), (0, BT.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: nT,
                                    children: (0, BT.jsx)(cT, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, BT.jsx)(Bz, {
                                  parts: UT,
                                  className: "DocsTextDialogPreview"
                                }), (0, BT.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === LT ? (0, BT.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, BT.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, BT.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: pT,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: TT => {
                                        ZT(TT.target.value);
                                        const UT = bz(TT.target.value);
                                        null !== UT.part && MT(UT.part)
                                      }
                                    }), vT && (0, BT.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: vT
                                    })]
                                  }) : SU[LT].map((TT => {
                                    const UT = NU(lT, TT.path),
                                      mT = TT.isRequired ? JSON.stringify(hU(lT, TT.path)) === JSON.stringify(lT) : void 0 === UT;
                                    return (0, BT.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, BT.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, BT.jsx)("span", {
                                          children: TT.label
                                        }), (0, BT.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: mT,
                                          "aria-label": `Reset ${TT.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            MT(hU(lT, TT.path))
                                          },
                                          children: [(0, BT.jsx)(cT, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, BT.jsx)(iz, {
                                        property: TT,
                                        value: UT,
                                        fontAwesomeIcons: zT,
                                        onChange: UT => {
                                          MT(EU(lT, TT.path, UT))
                                        }
                                      }), !TT.isRequired && (0, BT.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", TT.defaultText]
                                      })]
                                    }, TT.path.join("."))
                                  }))
                                }), (0, BT.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, BT.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: gT,
                                    children: [(0, BT.jsx)(cT, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, BT.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: nT,
                                    children: "Done"
                                  })]
                                }), (0, BT.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: Zz.map((TT => (0, BT.jsx)("option", {
                                    value: TT
                                  }, TT)))
                                })]
                              })
                            });
                            return HT ? (0, kT.createPortal)(fT, HT) : fT
                          }
                          const ez = [{
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
                            Yz = Object.keys(CU);

                          function Jz(TT) {
                            let {
                              fontAwesomeIcons: UT
                            } = TT;
                            const [mT, zT] = (0, WT.useState)(ez[0].parts), [gT, nT] = (0, WT.useState)((() => RU(ez[0].parts))), [HT, kT] = (0, WT.useState)(null), [jT, lT] = (0, WT.useState)(!1), [LT, pT] = (0, WT.useState)(null), [ZT, vT] = (0, WT.useState)(!1), [fT, qT] = (0, WT.useState)(null), iT = (0, WT.useRef)(null), bT = RU(mT);
                            (0, WT.useLayoutEffect)((() => {
                              var TT;
                              if (!fT) return;
                              const UT = TT => {
                                  var UT;
                                  return null === (UT = iT.current) || void 0 === UT ? void 0 : UT.querySelector(`[data-focus-key="${TT}"]`)
                                },
                                mT = UT(fT.key);
                              null === (TT = mT && !mT.disabled ? mT : UT(fT.fallback)) || void 0 === TT || TT.focus(), qT(null)
                            }), [fT]);
                            const OT = TT => {
                                zT(TT), nT(RU(TT)), kT(null)
                              },
                              YT = TT => {
                                OT(mT.filter(((UT, mT) => mT !== TT))), qT({
                                  key: `edit-${Math.min(TT,mT.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              JT = (TT, UT) => {
                                const WT = [...mT],
                                  [zT] = WT.splice(TT, 1);
                                WT.splice(TT + UT, 0, zT), OT(WT);
                                qT({
                                  key: `${UT<0?"up":"down"}-${TT+UT}`,
                                  fallback: `edit-${TT+UT}`
                                })
                              };
                            return (0, BT.jsxs)("section", {
                              ref: iT,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, BT.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, BT.jsxs)("div", {
                                  children: [(0, BT.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, BT.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, BT.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: ez.map((TT => (0, BT.jsx)("button", {
                                  type: "button",
                                  className: MT()("DocsVariantChip", {
                                    Active: bT === RU(TT.parts)
                                  }),
                                  onClick: () => {
                                    OT(TT.parts)
                                  },
                                  children: TT.label
                                }, TT.label)))
                              }), (0, BT.jsx)(Bz, {
                                parts: mT,
                                className: "DocsTextEditorPreview"
                              }), (0, BT.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, BT.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, BT.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, BT.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [mT.map(((TT, UT) => {
                                      const WT = rU(TT);
                                      return (0, BT.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, BT.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${UT}`,
                                          "aria-label": `Edit part ${UT+1}, ${uU[WT]}`,
                                          onClick: () => {
                                            pT(UT)
                                          },
                                          children: [(0, BT.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: uU[WT]
                                          }), (0, BT.jsx)(Bz, {
                                            parts: [TT],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== WT && (0, BT.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: DU(TT)
                                          })]
                                        }), (0, BT.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, BT.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${UT+1} up`,
                                            "data-focus-key": `up-${UT}`,
                                            disabled: 0 === UT,
                                            onClick: () => {
                                              JT(UT, -1)
                                            },
                                            children: (0, BT.jsx)(cT, {
                                              name: "chevron-up"
                                            })
                                          }), (0, BT.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${UT+1} down`,
                                            "data-focus-key": `down-${UT}`,
                                            disabled: UT === mT.length - 1,
                                            onClick: () => {
                                              JT(UT, 1)
                                            },
                                            children: (0, BT.jsx)(cT, {
                                              name: "chevron-down"
                                            })
                                          }), (0, BT.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${UT+1}`,
                                            onClick: () => {
                                              YT(UT)
                                            },
                                            children: (0, BT.jsx)(cT, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, UT)
                                    })), 0 === mT.length && (0, BT.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, BT.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: TT => {
                                      "Escape" === TT.key && ZT && (TT.stopPropagation(), vT(!1), qT({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, BT.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": ZT,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        vT(!ZT)
                                      },
                                      children: [(0, BT.jsx)(cT, {
                                        name: "plus"
                                      }), "Add a part", (0, BT.jsx)(cT, {
                                        name: ZT ? "chevron-up" : "chevron-down"
                                      })]
                                    }), ZT && (0, BT.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: Yz.map((TT => (0, BT.jsx)("li", {
                                        children: (0, BT.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (TT => {
                                              OT([...mT, CU[TT]]), vT(!1), pT(mT.length)
                                            })(TT)
                                          },
                                          children: uU[TT]
                                        })
                                      }, TT)))
                                    })]
                                  })]
                                }), (0, BT.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, BT.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, BT.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": jT,
                                      onClick: () => {
                                        lT(!jT)
                                      },
                                      children: [(0, BT.jsx)(cT, {
                                        name: jT ? "check" : "pencil"
                                      }), jT ? "Done" : "Edit"]
                                    })]
                                  }), jT ? (0, BT.jsxs)(BT.Fragment, {
                                    children: [(0, BT.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: gT,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: TT => {
                                        nT(TT.target.value);
                                        const UT = Wm(TT.target.value);
                                        kT(UT.error), UT.parts && zT(UT.parts)
                                      }
                                    }), HT && (0, BT.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: HT
                                    })]
                                  }) : (0, BT.jsx)(eT, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${bT})`
                                  })]
                                })]
                              }), null !== LT && LT < mT.length && (0, BT.jsx)(Oz, {
                                parts: mT,
                                index: LT,
                                fontAwesomeIcons: UT,
                                onChange: TT => {
                                  ((TT, UT) => {
                                    OT(mT.map(((mT, WT) => WT === TT ? UT : mT)))
                                  })(LT, TT)
                                },
                                yI: () => {
                                  YT(LT), pT(null)
                                },
                                onClose: () => {
                                  pT(null), qT({
                                    key: `edit-${LT}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var xz = mT(4948),
                            dz = mT(4932),
                            wz = mT(4939),
                            tz = mT(4956);
                          const az = 40,
                            yz = 800,
                            Xz = 150,
                            Iz = 8e3,
                            Qz = 2e3;

                          function sz(TT, UT) {
                            return 12 * Math.log2(UT / TT)
                          }

                          function Fz(TT, UT) {
                            return Math.round(TT * 2 ** (UT / 12) * 10) / 10
                          }

                          function Pz(TT) {
                            return `${TT} ms`
                          }

                          function Vz(TT) {
                            return `${TT} st`
                          }
                          const uz = [{
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

                          function Cz(TT) {
                            let {
                              synth: UT,
                              onChange: mT
                            } = TT;
                            const WT = (0, xz.k)(UT);
                            return (0, BT.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, BT.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, BT.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, BT.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, BT.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, BT.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, BT.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: xz.e.map((TT => (0, BT.jsx)("button", {
                                      type: "button",
                                      className: MT()("DocsVariantChip", {
                                        Active: UT.waveform === TT
                                      }),
                                      "aria-pressed": UT.waveform === TT,
                                      onClick: () => {
                                        mT({
                                          waveform: TT
                                        })
                                      },
                                      children: TT
                                    }, TT)))
                                  })]
                                }), (0, BT.jsx)(Tz, {
                                  label: "Pitch",
                                  min: 0,
                                  max: sz(az, yz),
                                  step: .1,
                                  value: sz(az, UT.pitchHz),
                                  format: () => `${UT.pitchHz} Hz`,
                                  onChange: TT => {
                                    mT({
                                      pitchHz: Fz(az, TT)
                                    })
                                  }
                                }), (0, BT.jsx)(Tz, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: UT.syllableMs,
                                  format: Pz,
                                  onChange: TT => {
                                    mT({
                                      syllableMs: TT
                                    })
                                  }
                                }), (0, BT.jsx)(Tz, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: UT.volume,
                                  onChange: TT => {
                                    mT({
                                      volume: TT
                                    })
                                  }
                                })]
                              }), (0, BT.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, BT.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, BT.jsx)(Tz, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: UT.durationMs,
                                  format: Pz,
                                  onChange: TT => {
                                    mT({
                                      durationMs: TT
                                    })
                                  }
                                }), (0, BT.jsx)(Tz, {
                                  label: "Fade in",
                                  min: 0,
                                  max: WT.durationMs,
                                  step: 1,
                                  value: WT.attackMs,
                                  format: Pz,
                                  onChange: TT => {
                                    mT({
                                      attackMs: TT
                                    })
                                  }
                                }), (0, BT.jsx)(Tz, {
                                  label: "Fade out",
                                  min: 0,
                                  max: WT.durationMs - WT.attackMs,
                                  step: 1,
                                  value: WT.releaseMs,
                                  format: Pz,
                                  onChange: TT => {
                                    mT({
                                      releaseMs: TT
                                    })
                                  }
                                }), (0, BT.jsx)(Tz, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: UT.glideSemitones,
                                  format: Vz,
                                  onChange: TT => {
                                    mT({
                                      glideSemitones: TT
                                    })
                                  }
                                }), (0, BT.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, BT.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== UT.lowpassHz,
                                    onChange: TT => {
                                      mT({
                                        lowpassHz: TT.target.checked ? Qz : null
                                      })
                                    }
                                  }), (0, BT.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== UT.lowpassHz && (0, BT.jsx)(Tz, {
                                  label: "Filter",
                                  min: 0,
                                  max: sz(Xz, Iz),
                                  step: .1,
                                  value: sz(Xz, UT.lowpassHz),
                                  format: () => `${UT.lowpassHz} Hz`,
                                  onChange: TT => {
                                    mT({
                                      lowpassHz: Fz(Xz, TT)
                                    })
                                  }
                                })]
                              }), (0, BT.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, BT.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), uz.map((TT => {
                                  let {
                                    key: WT,
                                    label: zT,
                                    max: MT
                                  } = TT;
                                  return (0, BT.jsx)(Tz, {
                                    label: zT,
                                    min: 0,
                                    max: MT,
                                    step: .1,
                                    value: UT.intonation[WT],
                                    format: Vz,
                                    onChange: TT => {
                                      mT({
                                        intonation: {
                                          ...UT.intonation,
                                          [WT]: TT
                                        }
                                      })
                                    }
                                  }, WT)
                                }))]
                              })]
                            })
                          }
                          const rz = Object.keys(xz.h),
                            Kz = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function Sz(TT) {
                            var UT;
                            const mT = JSON.stringify((0, xz.k)(TT));
                            return null !== (UT = rz.find((TT => JSON.stringify((0, xz.k)(xz.h[TT])) === mT))) && void 0 !== UT ? UT : null
                          }

                          function Gz(TT) {
                            let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof TT || null === TT) return JSON.stringify(TT);
                            return `{\n${Object.entries(TT).map((TT=>{let[mT,WT]=TT;return`${UT}    ${mT}: ${Gz(WT,`${UT}    `)},`})).join("\n")}\n${UT}}`
                          }

                          function Nz(TT, UT, mT) {
                            const WT = Sz(TT),
                              zT = [`    line: ${JSON.stringify(UT)},`];
                            return mT && zT.push(`    speakerName: ${JSON.stringify(mT)},`), zT.push("    voice,"), `const voice = ${WT?JSON.stringify(WT):Gz((0,xz.k)(TT))}\n\napi.setClientOption(playerId, "dialogue", {\n${zT.join("\n")}\n})`
                          }
                          const Ez = 400,
                            hz = 90;
                          let Dz = null;

                          function oz(TT, UT, mT) {
                            return Dz ??= new AudioContext, Dz.resume(), (0, tz.c)(Dz, Dz.destination, TT, UT, mT, (() => {}))
                          }

                          function Az() {
                            const [TT, UT] = (0, WT.useState)(xz.h.regular), [mT, zT] = (0, WT.useState)(Kz[0]), [gT, nT] = (0, WT.useState)("Innkeeper"), [HT, kT] = (0, WT.useState)(0), jT = lW((TT => TT.volume)), lT = (0, WT.useRef)(null), LT = (0, WT.useRef)(0), pT = (0, WT.useRef)(0), ZT = () => {
                              var TT;
                              null === (TT = lT.current) || void 0 === TT || TT.call(lT), lT.current = null
                            };
                            (0, WT.useEffect)((() => () => {
                              var TT;
                              null === (TT = lT.current) || void 0 === TT || TT.call(lT), window.clearTimeout(LT.current)
                            }), []);
                            const vT = (0, WT.useMemo)((() => ({
                                line: mT,
                                speakerName: gT || void 0,
                                voice: TT
                              })), [mT, gT, TT]),
                              fT = (0, WT.useRef)(vT);
                            fT.current = vT;
                            const iT = Sz(TT),
                              bT = TT => {
                                window.clearTimeout(LT.current), ZT();
                                const {
                                  plan: UT,
                                  synth: mT
                                } = (0, wz.e)(TT);
                                mT && (lT.current = oz(mT, UT.blips, jT)), kT((TT => TT + 1))
                              },
                              OT = Nz(TT, mT, gT);
                            return (0, BT.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, BT.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, BT.jsxs)("div", {
                                  children: [(0, BT.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, BT.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, BT.jsx)(qT, {
                                  text: OT,
                                  label: "Copy code"
                                })]
                              }), (0, BT.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [rz.map((TT => (0, BT.jsx)("button", {
                                  type: "button",
                                  className: MT()("DocsVariantChip", {
                                    Active: iT === TT
                                  }),
                                  "aria-pressed": iT === TT,
                                  onClick: () => {
                                    (TT => {
                                      const mT = xz.h[TT];
                                      UT(mT), bT({
                                        ...vT,
                                        voice: mT
                                      })
                                    })(TT)
                                  },
                                  children: TT
                                }, TT))), !iT && (0, BT.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, BT.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, BT.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, BT.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, BT.jsx)(dz.d, {
                                      display: vT
                                    }, HT)
                                  }), (0, BT.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: TT => {
                                      TT.preventDefault(), bT(vT)
                                    },
                                    children: [(0, BT.jsx)("input", {
                                      value: mT,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: TT => {
                                        zT(TT.target.value)
                                      }
                                    }), (0, BT.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, BT.jsx)(cT, {
                                        name: "play"
                                      }), (0, BT.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, BT.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: Kz.map((TT => (0, BT.jsx)("button", {
                                      type: "button",
                                      className: MT()("DocsVariantChip", {
                                        Active: mT === TT
                                      }),
                                      onClick: () => {
                                        var UT;
                                        zT(UT = TT), bT({
                                          ...vT,
                                          line: UT
                                        })
                                      },
                                      children: TT
                                    }, TT)))
                                  }), (0, BT.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, BT.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, BT.jsx)("input", {
                                      value: gT,
                                      placeholder: "No name",
                                      onChange: TT => {
                                        nT(TT.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, BT.jsx)(Cz, {
                                  synth: TT,
                                  onChange: mT => {
                                    const WT = {
                                      ...TT,
                                      ...mT
                                    };
                                    UT(WT);
                                    const zT = {
                                        ...vT,
                                        voice: WT
                                      },
                                      MT = performance.now();
                                    if (MT - pT.current >= hz) {
                                      pT.current = MT, ZT();
                                      const TT = (0, wz.e)(zT).plan.blips[0];
                                      TT && (lT.current = oz((0, xz.k)(WT), [{
                                        ...TT,
                                        atMs: 0
                                      }], jT))
                                    }
                                    window.clearTimeout(LT.current), LT.current = window.setTimeout((() => {
                                      bT(fT.current)
                                    }), Ez)
                                  }
                                })]
                              }), (0, BT.jsx)(eT, {
                                code: OT,
                                lang: "ts"
                              })]
                            })
                          }
                          var Rz = mT(4972);
                          const TM = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            UM = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            mM = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${UM}`, "g"), Rz.n],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, Rz.n]
                            ];

                          function WM(TT) {
                            return `${TT.pageId}#${TT.anchor}`
                          }
                          let zM, MM, gM;

                          function nM(TT) {
                            const UT = (0, YT.l)(TT),
                              mT = new Set;
                            for (const [, , WT] of UT.matchAll(YT.e)) {
                              const TT = WT.startsWith("#") ? rT(WT) : null,
                                UT = TT ? WM({
                                  pageId: TT.page.id,
                                  anchor: TT.anchor
                                }) : null;
                              null !== UT && (zM || (zM = new Set(sT.flatMap((TT => wT(TT.layout) ? uT(TT).sections.map((UT => WM({
                                pageId: TT.id,
                                anchor: UT.heading.anchor
                              }))) : [])))), zM).has(UT) && mT.add(UT)
                            }
                            for (const [, , WT] of UT.matchAll(TM)) {
                              const TT = LU(WT);
                              TT && mT.add(WM(TT))
                            }
                            return mT
                          }

                          function HM(TT, UT) {
                            const mT = new Set,
                              WT = function(TT) {
                                return TT.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(TT);
                            for (const [, zT] of WT.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) mT.add(zT);
                            for (const [zT, MT] of mM)
                              for (const [, TT] of(0, Rz.e)(WT, zT, MT)) UT.has(TT) && mT.add(TT);
                            return mT
                          }

                          function kM(TT, UT, mT, WT) {
                            const zT = TT.get(UT);
                            zT ? !WT && zT.some((TT => TT.pageId === mT.pageId)) || zT.push(mT) : TT.set(UT, [mT])
                          }
                          const jM = /^[A-Za-z_$][\w$]*$/;

                          function lM(TT) {
                            return jM.test(TT.name) ? TT.name : "options"
                          }

                          function LM(TT, UT) {
                            const mT = TT.params.map(lM).join(", ");
                            return UT ? `${TT.name} = (${mT}) => {\n\t\n}` : `api.${TT.name}(${mT})`
                          }

                          function pM(TT) {
                            let {
                              method: UT,
                              isCallback: mT
                            } = TT;
                            return (0, BT.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, BT.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [mT ? (0, BT.jsxs)(BT.Fragment, {
                                  children: [(0, BT.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: UT.name
                                  }), (0, BT.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, BT.jsxs)(BT.Fragment, {
                                  children: [(0, BT.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, BT.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: UT.name
                                  }), (0, BT.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), UT.params.map(((TT, mT) => (0, BT.jsxs)(WT.Fragment, {
                                  children: [mT > 0 && (0, BT.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, BT.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${UT.name}-${lM(TT)}`,
                                    children: TT.name
                                  })]
                                }, TT.name))), (0, BT.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: mT ? ") => " : ")"
                                }), mT && !UT.returns && (0, BT.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), UT.returns && UT.returns.type && (0, BT.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!mT && (0, BT.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, BT.jsx)(JU, {
                                  type: UT.returns.type
                                })]
                              })]
                            })
                          }

                          function BM(TT) {
                            let {
                              title: UT,
                              references: mT
                            } = TT;
                            const zT = (0, WT.useContext)(pU);
                            return (0, BT.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, BT.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: UT
                              }), mT.map((TT => (0, BT.jsx)(gT.d, {
                                to: ST(zT, PT(TT.pageId), TT.anchor),
                                children: TT.label
                              }, `${TT.pageId}#${TT.anchor}`)))]
                            })
                          }

                          function ZM(TT) {
                            var UT, mT;
                            let {
                              pageId: WT,
                              anchor: zT
                            } = TT;
                            const MT = WM({
                                pageId: WT,
                                anchor: zT
                              }),
                              gT = null !== (UT = function() {
                                if (!gM) {
                                  gM = new Map;
                                  const WT = new Set(sT.filter((TT => "callbacks" === TT.layout)).flatMap((TT => uT(TT).sections.map((TT => TT.heading.text)))));
                                  for (const zT of sT)
                                    if ("article" === zT.layout || "snippets" === zT.layout)
                                      for (const MT of (0, YT.A)(uT(zT)))
                                        for (const {
                                            code: gT
                                          }
                                          of(0, YT.n)(MT.blocks))
                                          for (const nT of HM(gT, WT)) {
                                            const WT = lU().get(nT);
                                            if (WT) {
                                              var TT, UT, mT;
                                              const gT = {
                                                pageId: zT.id,
                                                anchor: null !== (TT = null === (UT = MT.heading) || void 0 === UT ? void 0 : UT.anchor) && void 0 !== TT ? TT : "",
                                                label: null !== (mT = zT.navTitle) && void 0 !== mT ? mT : zT.title
                                              };
                                              kM(gM, WM(WT), gT, !1)
                                            }
                                          }
                                }
                                return gM
                              }().get(MT)) && void 0 !== UT ? UT : [],
                              nT = null !== (mT = function() {
                                if (!MM) {
                                  MM = new Map;
                                  const TT = PT("changelog");
                                  for (const UT of uT(TT).sections) {
                                    const mT = new Set(UT.blocks.flatMap((TT => [...nM(TT)])));
                                    for (const WT of mT) {
                                      const mT = {
                                        pageId: TT.id,
                                        anchor: UT.heading.anchor,
                                        label: UT.heading.text
                                      };
                                      kM(MM, WT, mT, !0)
                                    }
                                  }
                                }
                                return MM
                              }().get(MT)) && void 0 !== mT ? mT : [];
                            return 0 === gT.length && 0 === nT.length ? null : (0, BT.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [gT.length > 0 && (0, BT.jsx)(BM, {
                                title: "Used in",
                                references: gT
                              }), nT.length > 0 && (0, BT.jsx)(BM, {
                                title: "Changelog",
                                references: nT
                              })]
                            })
                          }

                          function cM(TT) {
                            let {
                              method: UT,
                              pageId: mT,
                              anchor: WT,
                              isCallback: zT
                            } = TT;
                            const MT = zT ? void 0 : nU().get(UT.name),
                              gT = UT.description.length > 0 || null === MT || void 0 === MT || !MT.description ? UT.description : (0, YT.I)(MT.description);
                            return (0, BT.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, BT.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, BT.jsx)(km, {
                                  level: 2,
                                  text: UT.name,
                                  anchor: WT,
                                  className: "DocsCardTitle"
                                }), (0, BT.jsx)(qT, {
                                  text: LM(UT, zT),
                                  label: zT ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, BT.jsx)(pM, {
                                method: UT,
                                isCallback: zT
                              }), MT && null !== MT.deprecation && (0, BT.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, BT.jsx)("strong", {
                                  children: "Deprecated"
                                }), MT.deprecation && (0, BT.jsxs)(BT.Fragment, {
                                  children: [": ", (0, BT.jsx)(OU, {
                                    text: (nT = MT.deprecation, (0, Rz.s)(nT, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, Rz.j)("`\\w"), (TT => {
                                      let [UT] = TT;
                                      return lU().has(UT) ? `\`${UT}\`` : UT
                                    })))
                                  })]
                                })]
                              }), gT.length > 0 && (0, BT.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, BT.jsx)(pm, {
                                  blocks: gT
                                })
                              }), UT.params.length > 0 && (0, BT.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, BT.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, BT.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: UT.params.map((TT => (0, BT.jsxs)("div", {
                                    id: `${UT.name}-${lM(TT)}`,
                                    className: "DocsParam",
                                    children: [(0, BT.jsxs)("dt", {
                                      children: [(0, BT.jsx)("code", {
                                        className: "DocsParamName",
                                        children: TT.name
                                      }), (0, BT.jsx)(JU, {
                                        type: TT.type
                                      })]
                                    }), TT.description && (0, BT.jsx)("dd", {
                                      children: (0, BT.jsx)(OU, {
                                        text: TT.description
                                      })
                                    })]
                                  }, TT.name)))
                                })]
                              }), UT.returns && (UT.returns.type || UT.returns.description.length > 0) && (0, BT.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, BT.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, BT.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [UT.returns.type && (0, BT.jsx)(JU, {
                                    type: UT.returns.type
                                  }), UT.returns.description.length > 0 && (0, BT.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, BT.jsx)(pm, {
                                      blocks: UT.returns.description
                                    })
                                  })]
                                })]
                              }), (0, BT.jsx)(ZM, {
                                pageId: mT,
                                anchor: WT
                              })]
                            });
                            var nT
                          }

                          function vM(TT) {
                            var UT;
                            return null !== TT.defaultValue && "undefined" !== TT.defaultValue ? TT.defaultValue : null !== (UT = TT.example) && void 0 !== UT ? UT : "value"
                          }

                          function fM(TT) {
                            let {
                              setting: UT,
                              pageId: mT,
                              anchor: WT,
                              setterSnippet: zT
                            } = TT;
                            const MT = null === UT.defaultValue ? null : vU(UT.defaultValue);
                            return (0, BT.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, BT.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, BT.jsx)(km, {
                                  level: 2,
                                  text: UT.name,
                                  anchor: WT,
                                  className: "DocsCardTitle"
                                }), (0, BT.jsx)(qT, {
                                  text: zT(UT.name, vM(UT)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, BT.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, BT.jsxs)("div", {
                                  children: [(0, BT.jsx)("dt", {
                                    children: "Type"
                                  }), (0, BT.jsx)("dd", {
                                    children: (0, BT.jsx)(JU, {
                                      type: UT.type
                                    })
                                  })]
                                }), null !== UT.defaultValue && (0, BT.jsxs)("div", {
                                  children: [(0, BT.jsx)("dt", {
                                    children: "Default"
                                  }), (0, BT.jsx)("dd", {
                                    children: (0, BT.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [MT && (0, BT.jsx)(fU, {
                                        colour: MT
                                      }), UT.defaultValue]
                                    })
                                  })]
                                }), null !== UT.example && (0, BT.jsxs)("div", {
                                  children: [(0, BT.jsx)("dt", {
                                    children: "Example"
                                  }), (0, BT.jsx)("dd", {
                                    children: (0, BT.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: UT.example
                                    })
                                  })]
                                })]
                              }), UT.description.length > 0 && (0, BT.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, BT.jsx)(pm, {
                                  blocks: UT.description
                                })
                              }), (0, BT.jsx)(ZM, {
                                pageId: mT,
                                anchor: WT
                              })]
                            })
                          }

                          function qM(TT) {
                            let {
                              section: UT
                            } = TT;
                            return (0, BT.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, BT.jsx)(km, {
                                level: 2,
                                text: UT.heading.text,
                                anchor: UT.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, BT.jsx)("div", {
                                className: "DocsProse",
                                children: (0, BT.jsx)(pm, {
                                  blocks: UT.blocks
                                })
                              })]
                            })
                          }

                          function iM(TT) {
                            let {
                              section: UT
                            } = TT;
                            return (0, BT.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, BT.jsx)(km, {
                                level: UT.heading.level,
                                text: UT.heading.text,
                                anchor: UT.heading.anchor
                              }), (0, BT.jsx)(pm, {
                                blocks: UT.blocks
                              })]
                            })
                          }
                          const bM = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function OM(TT) {
                            let {
                              page: UT,
                              section: mT
                            } = TT;
                            if ("methods" === UT.layout || "callbacks" === UT.layout) return (0, BT.jsx)(cM, {
                              method: Ym(mT),
                              pageId: UT.id,
                              anchor: mT.heading.anchor,
                              isCallback: "callbacks" === UT.layout
                            });
                            if ("settings" === UT.layout) {
                              const TT = function(TT) {
                                const UT = {
                                  name: TT.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const WT of TT.blocks) {
                                  var mT;
                                  if (em(WT)) continue;
                                  const TT = "paragraph" === WT.kind ? WT.text.match(Jm) : null;
                                  if (!TT) {
                                    UT.description.push(WT);
                                    continue
                                  }
                                  const zT = null !== (mT = Om(TT[2])) && void 0 !== mT ? mT : TT[2];
                                  "Type" === TT[1] ? UT.type = zT : "Default" === TT[1] ? UT.defaultValue = zT : "" !== zT && (UT.example = zT)
                                }
                                return UT.type ? UT : null
                              }(mT);
                              if (TT) return (0, BT.jsx)(fM, {
                                setting: TT,
                                pageId: UT.id,
                                anchor: mT.heading.anchor,
                                setterSnippet: UT.setterSnippet
                              })
                            }
                            return "snippets" === UT.layout ? (0, BT.jsx)(qM, {
                              section: mT
                            }) : "changelog" === UT.layout ? (0, BT.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, BT.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, BT.jsx)(km, {
                                  level: 2,
                                  text: mT.heading.text,
                                  anchor: mT.heading.anchor
                                })
                              }), (0, BT.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, BT.jsx)(pm, {
                                  blocks: xm(mT.blocks)
                                })
                              })]
                            }) : UT.gallery ? (0, BT.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, BT.jsx)(km, {
                                level: mT.heading.level,
                                text: mT.heading.text,
                                anchor: mT.heading.anchor
                              }), (0, BT.jsx)(dW, {
                                kind: UT.gallery,
                                content: uT(UT),
                                blocks: mT.blocks
                              })]
                            }) : (0, BT.jsx)(iM, {
                              section: mT
                            })
                          }

                          function eM(TT) {
                            let {
                              page: UT,
                              onTocChange: mT
                            } = TT;
                            const zT = uT(UT),
                              [MT, gT] = (0, WT.useState)(""),
                              nT = "article" !== UT.layout,
                              HT = cm(UT.gallery) ? UT.gallery : null,
                              kT = null !== HT,
                              jT = MT.trim().toLowerCase(),
                              lT = (0, WT.useRef)(null),
                              LT = (0, WT.useCallback)((TT => {
                                var UT;
                                null === (UT = lT.current) || void 0 === UT || UT.preview(TT)
                              }), []),
                              pT = (0, WT.useMemo)((() => {
                                if (!UT.hasParticlePlayground) return [];
                                const TT = am(zT.intro).find((TT => "names" === TT.kind && !TT.names.some((TT => null !== um(TT.name)))));
                                return "names" === (null === TT || void 0 === TT ? void 0 : TT.kind) ? TT.names.map((TT => TT.name)) : []
                              }), [UT, zT]),
                              ZT = (0, WT.useMemo)((() => {
                                if (!UT.hasTextPlayground) return [];
                                const TT = zT.sections.flatMap((TT => TT.blocks.flatMap((TT => {
                                  var UT;
                                  return (null !== (UT = tm(TT)) && void 0 !== UT ? UT : []).flatMap((TT => VU(TT.name) ? [TT.name] : []))
                                }))));
                                return [...new Set(TT)]
                              }), [UT, zT]),
                              cT = (0, WT.useMemo)((() => jT ? zT.sections.filter((TT => function(TT, UT) {
                                return !!TT.heading.text.toLowerCase().includes(UT) || TT.blocks.some((TT => (0, YT.l)(TT).toLowerCase().includes(UT)))
                              }(TT, jT))) : zT.sections), [zT, jT]),
                              vT = (0, WT.useMemo)((() => function(TT, UT) {
                                return "article" !== TT.layout ? UT.map((TT => ({
                                  anchor: TT.heading.anchor,
                                  text: TT.heading.text,
                                  level: 2
                                }))) : UT.flatMap((TT => {
                                  const UT = TT.blocks.flatMap((TT => "heading" === TT.kind && 3 === TT.level ? [{
                                    anchor: TT.anchor,
                                    text: TT.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: TT.heading.anchor,
                                    text: TT.heading.text,
                                    level: 2
                                  }, ...UT]
                                }))
                              }(UT, cT)), [UT, cT]);
                            return (0, WT.useEffect)((() => {
                              mT(vT)
                            }), [vT, mT]), (0, BT.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, BT.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, BT.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: zT.title || UT.title
                                }), (0, BT.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: UT.summary
                                }), (0, BT.jsx)(DW, {
                                  page: UT
                                }), nT && (0, BT.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, BT.jsxs)("span", {
                                    children: [(0, BT.jsx)("strong", {
                                      children: zT.sections.length
                                    }), " ", bM[UT.layout]]
                                  })
                                })]
                              }), "" === UT.slug && (0, BT.jsx)(tW, {}), HT && (0, BT.jsx)(IW, {
                                kind: HT
                              }, HT), UT.hasParticlePlayground && (0, BT.jsx)(kz, {
                                ref: lT,
                                textures: pT
                              }), !kT && zT.intro.length > 0 && (0, BT.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: UT.gallery ? (0, BT.jsx)(fW.Provider, {
                                  value: UT.hasParticlePlayground ? LT : null,
                                  children: (0, BT.jsx)(dW, {
                                    kind: UT.gallery,
                                    content: zT,
                                    blocks: zT.intro
                                  })
                                }) : (0, BT.jsx)(pm, {
                                  blocks: xm(zT.intro)
                                })
                              }), UT.hasTextPlayground && (0, BT.jsx)(Jz, {
                                fontAwesomeIcons: ZT
                              }), UT.hasVoicePlayground && (0, BT.jsx)(Az, {}), UT.childPageIds && (0, BT.jsx)(tW, {
                                cards: UT.childPageIds.map((TT => ({
                                  pageId: TT
                                }))),
                                label: UT.title
                              }), nT && (0, BT.jsx)(im, {
                                className: "DocsFilterBar",
                                value: MT,
                                placeholder: `Filter ${zT.sections.length} ${bM[UT.layout]}\u2026`,
                                label: `Filter ${bM[UT.layout]}`,
                                onChange: gT,
                                count: jT ? {
                                  visible: cT.length,
                                  total: zT.sections.length
                                } : null
                              }), !kT && (0, BT.jsxs)("div", {
                                className: `DocsSections Layout-${UT.layout}`,
                                children: [cT.map((TT => (0, BT.jsx)(OM, {
                                  page: UT,
                                  section: TT
                                }, TT.heading.anchor))), 0 === cT.length && (0, BT.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", bM[UT.layout], " match \u201c", MT, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const YM = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function JM(TT) {
                            let {
                              entry: UT,
                              isActive: mT,
                              onNavigate: WT,
                              label: zT,
                              children: gT
                            } = TT;
                            return (0, BT.jsx)("a", {
                              href: `#${UT.anchor}`,
                              "aria-label": zT,
                              className: MT()(`Level${UT.level}`, {
                                Active: mT
                              }),
                              "aria-current": mT ? "location" : void 0,
                              onClick: TT => {
                                TT.preventDefault(), WT(UT.anchor)
                              },
                              children: gT
                            })
                          }

                          function xM(TT) {
                            let {
                              toc: UT,
                              activeAnchor: mT,
                              onNavigate: zT
                            } = TT;
                            const gT = Math.max(0, UT.findIndex((TT => TT.anchor === mT))),
                              nT = (0, WT.useRef)(null),
                              HT = (0, WT.useRef)(!1);
                            (0, WT.useEffect)((() => {
                              var TT, mT;
                              const WT = null === (TT = nT.current) || void 0 === TT ? void 0 : TT.closest(".DocsToc"),
                                zT = null === (mT = nT.current) || void 0 === mT ? void 0 : mT.querySelector(".DocsTimelineNotch.Active");
                              if (!WT || !zT) return;
                              let MT = 0;
                              if (gT === UT.length - 1) MT = WT.scrollHeight;
                              else if (gT > 0) {
                                const TT = WT.getBoundingClientRect(),
                                  UT = zT.getBoundingClientRect();
                                MT = WT.scrollTop + UT.top + UT.height / 2 - (TT.top + WT.clientHeight / 2)
                              }
                              WT.scrollTo({
                                top: MT,
                                behavior: HT.current ? "smooth" : "auto"
                              }), HT.current = !0
                            }), [gT, UT.length]);
                            const kT = [];
                            return UT.forEach(((TT, UT) => {
                              var mT, WT, zT;
                              const MT = function(TT) {
                                  const UT = TT.trim().match(YM);
                                  return UT ? {
                                    day: UT[1],
                                    month: `${UT[2]} ${UT[3]}`
                                  } : null
                                }(TT.text),
                                gT = null !== (mT = null === MT || void 0 === MT ? void 0 : MT.month) && void 0 !== mT ? mT : null;
                              null !== gT && (null === (WT = kT.at(-1)) || void 0 === WT ? void 0 : WT.month) === gT || kT.push({
                                month: gT,
                                entries: []
                              }), kT.at(-1).entries.push({
                                entry: TT,
                                day: null !== (zT = null === MT || void 0 === MT ? void 0 : MT.day) && void 0 !== zT ? zT : null,
                                index: UT
                              })
                            })), (0, BT.jsx)("ol", {
                              ref: nT,
                              className: "DocsTimeline",
                              children: kT.map((TT => {
                                let {
                                  month: UT,
                                  entries: mT
                                } = TT;
                                return (0, BT.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [UT && (0, BT.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: UT
                                  }), (0, BT.jsx)("ol", {
                                    children: mT.map((TT => {
                                      let {
                                        entry: UT,
                                        day: mT,
                                        index: WT
                                      } = TT;
                                      return (0, BT.jsx)("li", {
                                        className: MT()("DocsTimelineNotch", {
                                          Passed: WT < gT,
                                          Active: WT === gT
                                        }),
                                        children: (0, BT.jsx)(JM, {
                                          entry: UT,
                                          isActive: WT === gT,
                                          onNavigate: zT,
                                          label: UT.text,
                                          children: (0, BT.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== mT && void 0 !== mT ? mT : UT.text
                                          })
                                        })
                                      }, UT.anchor)
                                    }))
                                  })]
                                }, mT[0].entry.anchor)
                              }))
                            })
                          }

                          function dM(TT) {
                            let {
                              isChangelog: UT,
                              toc: mT,
                              activeAnchor: WT,
                              onNavigate: zT
                            } = TT;
                            return 0 === mT.length ? null : (0, BT.jsxs)(BT.Fragment, {
                              children: [(0, BT.jsx)("div", {
                                className: "DocsTocTitle",
                                children: UT ? "Updates" : "On this page"
                              }), UT ? (0, BT.jsx)(xM, {
                                toc: mT,
                                activeAnchor: WT,
                                onNavigate: zT
                              }) : (0, BT.jsx)("ul", {
                                children: mT.map((TT => (0, BT.jsx)("li", {
                                  children: (0, BT.jsx)(JM, {
                                    entry: TT,
                                    isActive: TT.anchor === WT,
                                    onNavigate: zT,
                                    children: TT.text.replace(/`/g, "")
                                  })
                                }, TT.anchor)))
                              })]
                            })
                          }
                          const wM = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            tM = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            aM = 20,
                            yM = 10,
                            XM = 40,
                            IM = 120;
                          let QM;

                          function sM(TT) {
                            const UT = TT.gallery;
                            if (!UT) return [];
                            if (cm(UT)) return function(TT) {
                              return qm(TT).entries.map((TT => TT.name))
                            }(UT).map((mT => ({
                              page: TT,
                              anchor: Xm(UT, mT),
                              title: mT,
                              kind: tM[UT],
                              text: "",
                              listedUnder: TT.title
                            })));
                            const mT = uT(TT);
                            return (0, YT.A)(mT).flatMap((WT => {
                              const zT = WT.heading ? `${TT.title} \u203a ${WT.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : TT.title;
                              return Qm(UT, mT, WT.blocks).flatMap((mT => "names" !== mT.kind ? [] : mT.names.map((WT => {
                                const MT = mT.isSongs ? "Song" : tM[UT];
                                return {
                                  page: TT,
                                  anchor: WT.anchor,
                                  title: WT.name,
                                  kind: MT,
                                  text: "",
                                  listedUnder: zT
                                }
                              }))))
                            }))
                          }

                          function FM(TT, UT, mT) {
                            const WT = TT.title.toLowerCase();
                            let zT = 0;
                            if (WT === UT) zT = 100;
                            else if (WT.startsWith(UT)) zT = 80;
                            else if (WT.includes(UT)) zT = 60;
                            else if (mT.every((TT => WT.includes(TT)))) zT = 45;
                            else {
                              if (!TT.text.toLowerCase().includes(UT)) return 0;
                              zT = 20
                            }
                            return zT - Math.min(WT.length / 10, 9) + ("Page" === TT.kind ? 8 : "Method" === TT.kind ? 3 : 0) - (TT.listedUnder ? aM : 0)
                          }

                          function PM(TT, UT) {
                            const mT = TT.toLowerCase().indexOf(UT),
                              WT = Math.max(0, mT - IM / 3);
                            return `${WT>0?"\u2026":""}${TT.slice(WT,WT+IM)}${WT+IM<TT.length?"\u2026":""}`
                          }

                          function VM(TT) {
                            let {
                              text: UT,
                              query: mT
                            } = TT;
                            const WT = mT ? UT.toLowerCase().indexOf(mT) : -1;
                            return -1 === WT ? (0, BT.jsx)(BT.Fragment, {
                              children: UT
                            }) : (0, BT.jsxs)(BT.Fragment, {
                              children: [UT.slice(0, WT), (0, BT.jsx)("mark", {
                                children: UT.slice(WT, WT + mT.length)
                              }), UT.slice(WT + mT.length)]
                            })
                          }

                          function uM(TT) {
                            let {
                              basePath: UT,
                              onClose: mT
                            } = TT;
                            const zT = (0, nT.s)(),
                              [gT, HT] = (0, WT.useState)(""),
                              [kT, jT] = (0, WT.useState)(0),
                              lT = (0, WT.useRef)(null),
                              LT = (0, WT.useRef)(null),
                              pT = gT.trim().toLowerCase(),
                              ZT = (0, WT.useMemo)((() => {
                                const TT = (QM || (QM = sT.flatMap((TT => {
                                  const UT = uT(TT);
                                  return [{
                                    page: TT,
                                    anchor: "",
                                    title: TT.title,
                                    kind: "Page",
                                    text: TT.summary
                                  }, ...UT.sections.flatMap((UT => {
                                    const mT = UT.blocks.filter((TT => "paragraph" === TT.kind)).map(YT.l).join(" ").replace(/[`*]/g, ""),
                                      WT = {
                                        page: TT,
                                        anchor: UT.heading.anchor,
                                        title: UT.heading.text.replace(/`/g, ""),
                                        kind: wM[TT.layout],
                                        text: mT
                                      },
                                      zT = UT.blocks.flatMap((UT => "article" === TT.layout && "heading" === UT.kind && 3 === UT.level ? [{
                                        page: TT,
                                        anchor: UT.anchor,
                                        title: UT.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: WT.title
                                      }] : []));
                                    return [WT, ...zT]
                                  })), ...sM(TT)]
                                }))), QM);
                                if (!pT) return TT.filter((TT => "Page" === TT.kind));
                                const UT = pT.split(/\s+/);
                                let mT = 0;
                                return TT.map((TT => ({
                                  entry: TT,
                                  score: FM(TT, pT, UT)
                                }))).filter((TT => TT.score > 0)).sort(((TT, UT) => UT.score - TT.score)).filter((TT => !TT.entry.listedUnder || (mT++, mT <= yM))).slice(0, XM).map((TT => TT.entry))
                              }), [pT]);
                            (0, WT.useEffect)((() => {
                              jT(0)
                            }), [pT]), (0, WT.useEffect)((() => {
                              const TT = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === TT || void 0 === TT || TT.focus()
                              }
                            }), []), (0, WT.useEffect)((() => {
                              var TT, UT;
                              null === (TT = lT.current) || void 0 === TT || null === (UT = TT.querySelector(".Active")) || void 0 === UT || UT.scrollIntoView({
                                block: "nearest"
                              })
                            }), [kT]);
                            const vT = TT => {
                              zT(ST(UT, TT.page, TT.anchor)), mT()
                            };
                            return (0, BT.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: TT => {
                                TT.target === TT.currentTarget && mT()
                              },
                              children: (0, BT.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: TT => {
                                  TT.target !== LT.current && TT.preventDefault()
                                },
                                onKeyDown: TT => {
                                  if ("Escape" === TT.key) mT();
                                  else if ("Tab" === TT.key) {
                                    var UT;
                                    TT.preventDefault(), null === (UT = LT.current) || void 0 === UT || UT.focus()
                                  }
                                },
                                children: [(0, BT.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, BT.jsx)(cT, {
                                    name: "magnifying-glass"
                                  }), (0, BT.jsx)("input", {
                                    ref: LT,
                                    autoFocus: !0,
                                    value: gT,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": ZT.length > 0 ? `DocsSearchResult-${kT}` : void 0,
                                    onChange: TT => {
                                      HT(TT.target.value)
                                    },
                                    onKeyDown: TT => {
                                      if ("ArrowDown" === TT.key || "ArrowUp" === TT.key) {
                                        TT.preventDefault();
                                        const UT = "ArrowDown" === TT.key ? 1 : -1;
                                        jT((kT + UT + ZT.length) % Math.max(ZT.length, 1))
                                      } else "Enter" === TT.key && ZT[kT] && vT(ZT[kT])
                                    }
                                  }), (0, BT.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, BT.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: lT,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!pT && (0, BT.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), ZT.map(((TT, UT) => {
                                    var mT;
                                    return (0, BT.jsxs)("li", {
                                      id: `DocsSearchResult-${UT}`,
                                      role: "option",
                                      "aria-selected": UT === kT,
                                      className: MT()("DocsSearchResult", {
                                        Active: UT === kT
                                      }),
                                      onMouseMove: () => {
                                        jT(UT)
                                      },
                                      onClick: () => {
                                        vT(TT)
                                      },
                                      children: [(0, BT.jsx)(cT, {
                                        name: TT.page.icon
                                      }), (0, BT.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, BT.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, BT.jsx)(VM, {
                                            text: TT.title,
                                            query: pT
                                          })
                                        }), TT.text && (0, BT.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, BT.jsx)(VM, {
                                            text: PM(TT.text, pT),
                                            query: pT
                                          })
                                        })]
                                      }), (0, BT.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === TT.kind ? "Page" : null !== (mT = TT.listedUnder) && void 0 !== mT ? mT : `${TT.kind} \xb7 ${TT.page.title}`
                                      })]
                                    }, `${TT.page.id}#${TT.anchor}`)
                                  })), pT && 0 === ZT.length && (0, BT.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", gT, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function CM(TT, UT) {
                            if (UT < 10) return `${TT.toFixed(1)}s`;
                            const mT = Math.floor(TT);
                            return `${Math.floor(mT/60)}:${String(mT%60).padStart(2,"0")}`
                          }

                          function rM() {
                            const TT = lW((TT => TT.track)),
                              UT = lW((TT => TT.volume)),
                              [mT, zT] = (0, WT.useState)(0),
                              gT = (0, WT.useRef)(mW);
                            if ((0, WT.useEffect)((() => {
                                if (!TT) return;
                                if (zT(ZW()), "playing" !== TT.status) return;
                                let UT = 0;
                                const mT = () => {
                                  zT(ZW()), UT = requestAnimationFrame(mT)
                                };
                                return UT = requestAnimationFrame(mT), () => {
                                  cancelAnimationFrame(UT)
                                }
                              }), [TT]), !TT) return null;
                            const nT = "paused" !== TT.status,
                              HT = Math.min(mT, TT.duration);
                            return (0, BT.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, BT.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, BT.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": nT ? `Pause ${TT.name}` : `Play ${TT.name}`,
                                  onClick: BW,
                                  children: (0, BT.jsx)(cT, {
                                    name: nT ? "pause" : "play"
                                  })
                                }), (0, BT.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, BT.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, BT.jsx)("code", {
                                      children: TT.name
                                    }), (0, BT.jsx)("span", {
                                      children: TT.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, BT.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, BT.jsx)("span", {
                                      children: CM(HT, TT.duration)
                                    }), (0, BT.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: TT.duration || 1,
                                      step: .01,
                                      value: HT,
                                      disabled: 0 === TT.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${CM(HT,TT.duration)} of ${CM(TT.duration,TT.duration)}`,
                                      onChange: TT => {
                                        const UT = Number(TT.target.value);
                                        ! function(TT) {
                                          var UT;
                                          nW = TT, null === (UT = MW) || void 0 === UT || UT.seek(TT)
                                        }(UT), zT(UT)
                                      }
                                    }), (0, BT.jsx)("span", {
                                      children: TT.duration > 0 ? CM(TT.duration, TT.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, BT.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, BT.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === UT ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === UT ? cW(gT.current) : (gT.current = UT, cW(0))
                                    },
                                    children: (0, BT.jsx)(cT, {
                                      name: "volume",
                                      className: MT()({
                                        Muted: 0 === UT
                                      })
                                    })
                                  }), (0, BT.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: UT,
                                    "aria-label": "Volume",
                                    onChange: TT => {
                                      cW(Number(TT.target.value))
                                    }
                                  })]
                                }), (0, BT.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var UT;
                                    null === (UT = document.querySelector(`[data-docs-track="${CSS.escape(WW(TT.name,TT.isSong))}"]`)) || void 0 === UT || UT.focus(), vW()
                                  },
                                  children: (0, BT.jsx)(cT, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var KM = mT(44);
                          const SM = "docsTheme",
                            GM = window.matchMedia("(prefers-color-scheme: light)");

                          function NM(TT) {
                            let {
                              theme: UT,
                              onChange: mT
                            } = TT;
                            const WT = "dark" === UT ? "light" : "dark";
                            return (0, BT.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${WT} theme`,
                              title: `Switch to ${WT} theme`,
                              onClick: () => {
                                mT(WT)
                              },
                              children: (0, BT.jsx)(cT, {
                                name: "dark" === UT ? "moon" : "sun"
                              })
                            })
                          }
                          const EM = "https://github.com/Bloxdy/code-api",
                            hM = "https://discord.gg/playbloxd",
                            DM = 180,
                            oM = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function AM(TT) {
                            let {
                              basePath: UT,
                              activePageId: mT,
                              onNavigate: WT
                            } = TT;
                            return (0, BT.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: FT.map((TT => (0, BT.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, BT.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: TT.title
                                }), TT.pageIds.map((TT => {
                                  var zT;
                                  const nT = PT(TT);
                                  return (0, BT.jsxs)(gT.d, {
                                    to: ST(UT, nT),
                                    className: MT()("DocsNavLink", {
                                      Active: nT.id === mT
                                    }),
                                    "aria-current": nT.id === mT ? "page" : void 0,
                                    onClick: WT,
                                    children: [(0, BT.jsx)(cT, {
                                      name: nT.icon
                                    }), (0, BT.jsx)("span", {
                                      children: null !== (zT = nT.navTitle) && void 0 !== zT ? zT : nT.title
                                    })]
                                  }, nT.id)
                                }))]
                              }, TT.title)))
                            })
                          }

                          function RM(TT) {
                            let {
                              basePath: UT,
                              pageId: mT
                            } = TT;
                            const WT = FT.flatMap((TT => TT.pageIds)),
                              zT = WT.indexOf(mT),
                              MT = zT > 0 ? PT(WT[zT - 1]) : null,
                              nT = zT < WT.length - 1 ? PT(WT[zT + 1]) : null;
                            return (0, BT.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [MT ? (0, BT.jsxs)(gT.d, {
                                className: "DocsPagerLink Previous",
                                to: ST(UT, MT),
                                children: [(0, BT.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, BT.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: MT.title
                                })]
                              }) : (0, BT.jsx)("span", {}), nT && (0, BT.jsxs)(gT.d, {
                                className: "DocsPagerLink Next",
                                to: ST(UT, nT),
                                children: [(0, BT.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, BT.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: nT.title
                                })]
                              })]
                            })
                          }

                          function Tg(TT) {
                            let {
                              basePath: UT,
                              embedded: mT = !1
                            } = TT;
                            const {
                              pageSlug: zT = ""
                            } = (0, nT.y)(), kT = (0, nT.p)(), jT = (0, nT.s)(), lT = (LT = zT, sT.find((TT => TT.slug === LT)));
                            var LT;
                            const [pT, ZT] = function() {
                              const [TT, UT] = (0, WT.useState)((() => {
                                const TT = KM.l.getItem(SM);
                                return "dark" === TT || "light" === TT ? TT : null
                              })), [mT, zT] = (0, WT.useState)(GM.matches ? "light" : "dark");
                              return (0, WT.useEffect)((() => {
                                const TT = () => {
                                  zT(GM.matches ? "light" : "dark")
                                };
                                return GM.addEventListener("change", TT), () => {
                                  GM.removeEventListener("change", TT)
                                }
                              }), []), [null !== TT && void 0 !== TT ? TT : mT, TT => {
                                KM.l.setItem(SM, TT), UT(TT)
                              }]
                            }(), [vT, fT] = (0, WT.useState)(null), [qT, iT] = (0, WT.useState)(!1), [bT, OT] = (0, WT.useState)(!1), [eT, JT] = (0, WT.useState)([]), xT = function(TT, UT) {
                              const [mT, zT] = (0, WT.useState)("");
                              return (0, WT.useEffect)((() => {
                                if (!UT) return;
                                let mT = 0;
                                const WT = () => {
                                    var WT, MT;
                                    mT = 0;
                                    const gT = UT.getBoundingClientRect().top + DM;
                                    let nT = null !== (WT = null === (MT = TT[0]) || void 0 === MT ? void 0 : MT.anchor) && void 0 !== WT ? WT : "";
                                    for (const UT of TT) {
                                      const TT = document.getElementById(UT.anchor);
                                      TT && TT.getBoundingClientRect().top <= gT && (nT = UT.anchor)
                                    }
                                    UT.scrollTop + UT.clientHeight >= UT.scrollHeight - 2 && UT.scrollTop > 0 && TT.length > 0 && (nT = TT[TT.length - 1].anchor), zT(nT)
                                  },
                                  MT = () => {
                                    mT || (mT = requestAnimationFrame(WT))
                                  };
                                return WT(), UT.addEventListener("scroll", MT, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(mT), UT.removeEventListener("scroll", MT)
                                }
                              }), [TT, UT]), mT
                            }(eT, vT), dT = "" === zT && kT.hash ? function(TT) {
                              const UT = (0, YT.t)(TT);
                              if (CT(PT("welcome"), UT)) return null;
                              const mT = Object.hasOwn(KT, UT) ? KT[UT] : null;
                              if (mT) return {
                                page: PT(mT.pageId),
                                anchor: mT.anchor
                              };
                              const WT = PT("readme");
                              return CT(WT, UT) ? {
                                page: WT,
                                anchor: UT
                              } : rT(`#${UT}`)
                            }(kT.hash) : null;
                            (0, WT.useEffect)((() => (HT.b.set({
                              musicOnFromPage: !1
                            }), () => {
                              HT.b.set({
                                musicOnFromPage: !0
                              }), vW()
                            })), []), (0, WT.useEffect)((() => {
                              const TT = TT => {
                                const UT = TT.target;
                                if (UT.closest(".DocsTextDialog")) return;
                                const mT = UT.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(UT.tagName);
                                "k" === TT.key && (TT.metaKey || TT.ctrlKey) || "/" === TT.key && !mT ? (TT.preventDefault(), OT(!0)) : "Escape" === TT.key && iT(!1)
                              };
                              return window.addEventListener("keydown", TT), () => {
                                window.removeEventListener("keydown", TT)
                              }
                            }), []);
                            const wT = (0, WT.useRef)(null);
                            (0, WT.useLayoutEffect)((() => {
                              var TT, UT;
                              if (!vT) return;
                              const mT = wT.current === kT.pathname;
                              wT.current = kT.pathname;
                              const WT = (0, YT.t)(kT.hash),
                                zT = WT ? document.getElementById(WT) : null;
                              if (null === (TT = vT.querySelector(".DocsTargeted")) || void 0 === TT || TT.classList.remove("DocsTargeted"), null === zT || void 0 === zT || null === (UT = zT.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === UT || UT.classList.add("DocsTargeted"), zT) {
                                var MT;
                                const TT = zT.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (MT = zT.closest(".DocsChangelogEntry")) && void 0 !== MT ? MT : zT).scrollIntoView({
                                  block: TT ? "center" : "start",
                                  behavior: mT ? "smooth" : "auto"
                                })
                              } else mT || vT.scrollTo({
                                top: 0
                              })
                            }), [vT, kT.pathname, kT.hash, kT.key]);
                            const tT = (0, WT.useCallback)((() => {
                                iT(!1)
                              }), []),
                              aT = (0, WT.useCallback)((TT => {
                                jT({
                                  hash: TT
                                })
                              }), [jT]);
                            if (dT) return (0, BT.jsx)(nT.d, {
                              replace: !0,
                              to: ST(UT, dT.page, dT.anchor)
                            });
                            if (!lT) return (0, BT.jsx)(nT.d, {
                              replace: !0,
                              to: UT
                            });
                            const yT = mT ? "div" : "main";
                            return (0, BT.jsx)(pU.Provider, {
                              value: UT,
                              children: (0, BT.jsx)(BU.Provider, {
                                value: vT,
                                children: (0, BT.jsxs)("div", {
                                  ref: fT,
                                  className: MT()("DocsSite", {
                                    Embedded: mT,
                                    NavOpen: qT
                                  }),
                                  "data-theme": pT,
                                  children: [(0, BT.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, BT.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": qT ? "Close menu" : "Open menu",
                                      "aria-expanded": qT,
                                      onClick: () => {
                                        iT(!qT)
                                      },
                                      children: (0, BT.jsx)(cT, {
                                        name: qT ? "cross" : "menu"
                                      })
                                    }), (0, BT.jsxs)(gT.d, {
                                      to: UT,
                                      className: "DocsBrand",
                                      children: [(0, BT.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, BT.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, BT.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, BT.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        OT(!0)
                                      },
                                      children: [(0, BT.jsx)(cT, {
                                        name: "magnifying-glass"
                                      }), (0, BT.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, BT.jsxs)("kbd", {
                                        children: [oM ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, BT.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, BT.jsxs)("a", {
                                        href: hM,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, BT.jsx)(cT, {
                                          name: "discord"
                                        }), (0, BT.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, BT.jsxs)("a", {
                                        href: EM,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, BT.jsx)(cT, {
                                          name: "external-link"
                                        }), (0, BT.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !mT && (0, BT.jsxs)(gT.d, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, BT.jsx)(cT, {
                                          name: "play"
                                        }), (0, BT.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, BT.jsx)(NM, {
                                        theme: pT,
                                        onChange: ZT
                                      })]
                                    })]
                                  }), (0, BT.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, BT.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, BT.jsx)(AM, {
                                        basePath: UT,
                                        activePageId: lT.id,
                                        onNavigate: tT
                                      })
                                    }), (0, BT.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: tT
                                    }), (0, BT.jsxs)(yT, {
                                      className: "DocsMain",
                                      children: [(0, BT.jsx)(eM, {
                                        page: lT,
                                        onTocChange: JT
                                      }, lT.id), (0, BT.jsx)(RM, {
                                        basePath: UT,
                                        pageId: lT.id
                                      })]
                                    }), (0, BT.jsx)("aside", {
                                      className: MT()("DocsToc", {
                                        Timeline: "changelog" === lT.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, BT.jsx)(dM, {
                                        isChangelog: "changelog" === lT.layout,
                                        toc: eT,
                                        activeAnchor: xT,
                                        onNavigate: aT
                                      })
                                    })]
                                  }), (0, BT.jsx)(rM, {}), bT && (0, BT.jsx)(uM, {
                                    basePath: UT,
                                    onClose: () => {
                                      OT(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4842: (TT, UT, mT) => {
                          mT.d(UT, {
                            A: () => BT,
                            E: () => pT,
                            I: () => LT,
                            e: () => WT,
                            h: () => gT,
                            l: () => cT,
                            n: () => ZT,
                            p: () => nT,
                            t: () => zT,
                            w: () => MT
                          });
                          const WT = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function zT(TT) {
                            try {
                              return decodeURIComponent(TT.slice(1))
                            } catch {
                              return TT.slice(1)
                            }
                          }

                          function MT(TT) {
                            return TT.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const gT = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${WT.source}`, "g");

                          function nT(TT, UT) {
                            return 2 === TT.length ? UT.replace(/^ (.*) $/, "$1") : UT
                          }

                          function HT(TT) {
                            return "" === TT.trim()
                          }

                          function kT(TT) {
                            const UT = [];
                            for (const mT of TT.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) UT.length > 0 && UT[UT.length - 1].endsWith("\\") ? UT[UT.length - 1] += `|${mT}` : UT.push(mT);
                            return UT.map((TT => TT.trim().replaceAll("\\|", "|")))
                          }
                          const jT = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function lT(TT) {
                            const UT = [],
                              mT = [{
                                indent: -1,
                                items: UT
                              }];
                            let WT = null;
                            for (const zT of TT) {
                              const TT = zT.match(jT);
                              if (!TT) {
                                WT && (WT.text += ` ${zT.trim()}`);
                                continue
                              }
                              const UT = TT[1].replace(/\t/g, "  ").length;
                              for (; UT <= mT[mT.length - 1].indent;) mT.pop();
                              WT = {
                                text: TT[3].trim(),
                                children: []
                              }, mT[mT.length - 1].items.push(WT), mT.push({
                                indent: UT,
                                items: WT.children
                              })
                            }
                            return UT
                          }

                          function LT(TT) {
                            const UT = TT.replace(/\r\n/g, "\n").split("\n"),
                              mT = [];
                            let WT = 0;
                            for (; WT < UT.length;) {
                              const TT = UT[WT];
                              if (HT(TT)) {
                                WT++;
                                continue
                              }
                              const zT = TT.match(/^\s*```\s*(\w*)\s*$/);
                              if (zT) {
                                const TT = [];
                                for (WT++; WT < UT.length && !/^\s*```\s*$/.test(UT[WT]);) TT.push(UT[WT]), WT++;
                                WT++, mT.push({
                                  kind: "code",
                                  lang: zT[1] || "text",
                                  code: TT.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const gT = TT.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (gT) {
                                const TT = gT[2].trim();
                                mT.push({
                                  kind: "heading",
                                  level: gT[1].length,
                                  text: TT,
                                  anchor: MT(TT)
                                }), WT++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(TT)) {
                                mT.push({
                                  kind: "rule"
                                }), WT++;
                                continue
                              }
                              if (TT.trim().startsWith("|") && WT + 1 < UT.length && /^\s*\|[\s:|-]+\|\s*$/.test(UT[WT + 1])) {
                                const zT = kT(TT),
                                  MT = [];
                                for (WT += 2; WT < UT.length && UT[WT].trim().startsWith("|");) MT.push(kT(UT[WT])), WT++;
                                mT.push({
                                  kind: "table",
                                  header: zT,
                                  rows: MT
                                });
                                continue
                              }
                              if (TT.startsWith(">")) {
                                const TT = [];
                                for (; WT < UT.length && UT[WT].startsWith(">");) TT.push(UT[WT].replace(/^>\s?/, "")), WT++;
                                mT.push({
                                  kind: "quote",
                                  blocks: LT(TT.join("\n"))
                                });
                                continue
                              }
                              if (jT.test(TT)) {
                                const zT = [],
                                  MT = /^\s*\d+\./.test(TT);
                                for (; WT < UT.length && !HT(UT[WT]) && (jT.test(UT[WT]) || /^\s+\S/.test(UT[WT]));) zT.push(UT[WT]), WT++;
                                mT.push({
                                  kind: "list",
                                  ordered: MT,
                                  items: lT(zT)
                                });
                                continue
                              }
                              const nT = [];
                              for (; WT < UT.length && !HT(UT[WT]) && !/^\s*```/.test(UT[WT]) && !/^#{1,6}\s/.test(UT[WT]) && !UT[WT].startsWith(">") && !jT.test(UT[WT]) && (!UT[WT].trim().startsWith("|") || 0 !== nT.length);) nT.push(UT[WT].trim()), WT++;
                              0 === nT.length && (nT.push(UT[WT].trim()), WT++), mT.push({
                                kind: "paragraph",
                                text: nT.join(" ")
                              })
                            }
                            return mT
                          }

                          function pT(TT) {
                            let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const mT = LT(TT);
                            let WT = "";
                            const zT = [],
                              MT = [],
                              gT = new Map;
                            for (const kT of mT) {
                              if ("heading" === kT.kind) {
                                var nT;
                                const TT = (null !== (nT = gT.get(kT.anchor)) && void 0 !== nT ? nT : 0) + 1;
                                gT.set(kT.anchor, TT), TT > 1 && (kT.anchor = `${kT.anchor}-${TT}`)
                              }
                              if ("heading" === kT.kind && 1 === kT.level && !WT) {
                                WT = kT.text;
                                continue
                              }
                              if ("heading" === kT.kind && kT.level <= UT) {
                                MT.push({
                                  heading: kT,
                                  blocks: []
                                });
                                continue
                              }
                              const TT = MT.at(-1);
                              TT ? TT.blocks.push(kT) : zT.push(kT)
                            }
                            const HT = TT => {
                              for (;
                                "rule" === (null === (UT = TT.at(-1)) || void 0 === UT ? void 0 : UT.kind);) {
                                var UT;
                                TT.pop()
                              }
                            };
                            HT(zT);
                            for (const kT of MT) HT(kT.blocks);
                            return {
                              title: WT,
                              intro: zT,
                              sections: MT
                            }
                          }

                          function BT(TT) {
                            return [{
                              heading: null,
                              blocks: TT.intro
                            }, ...TT.sections.map((TT => ({
                              heading: TT.heading,
                              blocks: TT.blocks
                            })))]
                          }

                          function ZT(TT) {
                            return TT.flatMap((TT => "code" === TT.kind ? [TT] : "quote" === TT.kind ? ZT(TT.blocks) : []))
                          }

                          function cT(TT) {
                            switch (TT.kind) {
                              case "heading":
                              case "paragraph":
                                return TT.text;
                              case "code":
                                return TT.code;
                              case "table":
                                return [TT.header, ...TT.rows].map((TT => TT.join(" "))).join(" ");
                              case "list": {
                                const UT = TT => TT.map((TT => `${TT.text} ${UT(TT.children)}`)).join(" ");
                                return UT(TT.items)
                              }
                              case "quote":
                                return TT.blocks.map(cT).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4936: (TT, UT, mT) => {
                          mT.d(UT, {
                            b: () => nT
                          });
                          var WT = mT(63),
                            zT = mT(351),
                            MT = mT(2034),
                            gT = mT(1188);

                          function nT(TT) {
                            let {
                              text: UT
                            } = TT;
                            const mT = [];
                            let nT = "";
                            return (0, zT.Wb)(UT).forEach(((TT, UT) => {
                              if ("string" === typeof TT || !(0, MT.e)(TT.icon)) return void(nT += "string" === typeof TT ? TT : TT.icon);
                              const zT = Math.max(0, nT.trimEnd().search(/\S{1,12}$/));
                              mT.push((0, gT.jsxs)(WT.Fragment, {
                                children: [nT.slice(0, zT), (0, gT.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [nT.slice(zT), (0, gT.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": TT.icon,
                                    children: (0, gT.jsx)(MT.b, {
                                      itemName: TT.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, UT)), nT = ""
                            })), mT.push(nT), (0, gT.jsx)(gT.Fragment, {
                              children: mT
                            })
                          }
                        }, 4869: (TT, UT, mT) => {
                          mT.d(UT, {
                            g: () => fT,
                            d: () => vT
                          });
                          var WT = mT(63),
                            zT = mT(1567),
                            MT = mT(2023),
                            gT = mT(4873),
                            nT = mT(1188);
                          const HT = (0, WT.memo)((function(TT) {
                            let {
                              initialParameters: UT
                            } = TT;
                            const mT = (0, WT.useRef)(null),
                              zT = (0, WT.useRef)(null),
                              HT = (0, WT.useRef)(0),
                              kT = (0, WT.useRef)(null),
                              jT = UT.description,
                              lT = UT.UU,
                              {
                                scale: LT,
                                rotation: pT
                              } = null !== UT && void 0 !== UT ? UT : {},
                              BT = (0, gT.e)();
                            return (0, WT.useEffect)((() => {
                              const TT = BT.onFrame((() => {
                                const TT = BT.getState();
                                if (!TT.isActive || !mT.current || !zT.current) return;
                                const UT = TT.state;
                                if (mT.current.value = UT.progress, UT.clickCount > HT.current) {
                                  HT.current = UT.clickCount;
                                  const TT = zT.current;
                                  TT.classList.add("pulse"), kT.current = setTimeout((() => {
                                    TT.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(kT.current), TT()
                              }
                            }), [BT]), (0, nT.jsx)(nT.Fragment, {
                              children: (0, nT.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== LT && {
                                    "--scale": LT
                                  },
                                  ...null !== pT && {
                                    "--rotation": `${pT}deg`
                                  }
                                },
                                children: [(0, nT.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: mT
                                }), (0, nT.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: zT,
                                  children: (0, nT.jsx)(MT.e, {
                                    text: [{
                                      icon: lT
                                    }]
                                  })
                                }), (0, nT.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, nT.jsx)(MT.e, {
                                    text: jT
                                  })
                                })]
                              })
                            })
                          }));
                          var kT = mT(1126),
                            jT = mT.n(kT);
                          const lT = 2 * Math.PI * 90,
                            LT = (0, WT.memo)((function(TT) {
                              let {
                                initialParameters: UT
                              } = TT;
                              const mT = (0, WT.useRef)(null),
                                zT = (0, WT.useRef)(null),
                                HT = (0, WT.useRef)(null),
                                kT = UT.label,
                                LT = UT.icon,
                                pT = UT.zU,
                                {
                                  scale: BT,
                                  rotation: ZT,
                                  MU: cT
                                } = null !== UT && void 0 !== UT ? UT : {},
                                vT = (0, gT.e)();
                              return (0, WT.useEffect)((() => {
                                const TT = vT.onFrame((() => {
                                  var TT, UT;
                                  const WT = vT.getState();
                                  if (!WT.isActive || !zT.current) return;
                                  const MT = WT.state,
                                    gT = null !== (TT = MT.timeRemaining) && void 0 !== TT ? TT : 0,
                                    nT = null !== (UT = MT.WU) && void 0 !== UT ? UT : 1,
                                    kT = lT * (1 - gT / nT);
                                  zT.current.style.strokeDashoffset = `${kT}`, mT.current && (mT.current.style.opacity = gT > 0 ? "1" : "0"), HT.current && pT && (HT.current.textContent = `${(gT/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  TT()
                                }
                              }), [vT, pT]), (0, nT.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: mT,
                                style: {
                                  ...null !== BT && {
                                    "--scale": BT
                                  },
                                  ...null !== ZT && {
                                    "--rotation": `${ZT}deg`
                                  }
                                },
                                children: [(0, nT.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, nT.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, nT.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, nT.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: lT,
                                      ref: zT
                                    })]
                                  }), (0, nT.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, nT.jsx)(MT.e, {
                                      text: [{
                                        icon: LT
                                      }],
                                      className: jT()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: cT
                                      })
                                    })
                                  })]
                                }), (0, nT.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, nT.jsx)(MT.e, {
                                    text: kT,
                                    className: "QTETimedClickLabelText"
                                  }), pT && (0, nT.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: HT
                                  })]
                                })]
                              })
                            })),
                            pT = (0, WT.memo)((function(TT) {
                              let {
                                initialParameters: UT
                              } = TT;
                              const mT = (0, WT.useRef)(null),
                                zT = (0, WT.useRef)(null),
                                HT = (0, WT.useRef)(null),
                                kT = (0, WT.useRef)(!1),
                                jT = UT.description,
                                lT = null === UT || void 0 === UT ? void 0 : UT.icon,
                                LT = (0, gT.e)();
                              return (0, WT.useEffect)((() => {
                                const TT = LT.onFrame((() => {
                                  const TT = LT.getState();
                                  if (!TT.isActive) return;
                                  const UT = TT.state;
                                  if (mT.current) {
                                    const TT = 100 * (UT.catchZonePosition - UT.nU / 2);
                                    mT.current.style.left = `${TT}%`, mT.current.style.width = 100 * UT.nU + "%", UT.isCatching !== kT.current && (kT.current = UT.isCatching, UT.isCatching ? mT.current.classList.add("catching") : mT.current.classList.remove("catching"))
                                  }
                                  zT.current && (zT.current.style.left = 100 * UT.moverPosition + "%"), HT.current && (HT.current.value = UT.progress)
                                }));
                                return () => {
                                  TT()
                                }
                              }), [LT]), (0, nT.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, nT.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, nT.jsx)(MT.e, {
                                    text: jT
                                  })
                                }), (0, nT.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: HT
                                }), (0, nT.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, nT.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: mT
                                  }), (0, nT.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: zT,
                                    children: (0, nT.jsx)("span", {
                                      children: lT && (0, nT.jsx)(MT.e, {
                                        text: [{
                                          icon: lT,
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
                          var BT = mT(653);
                          const ZT = (0, WT.memo)((function(TT) {
                              let {
                                initialParameters: UT
                              } = TT;
                              const mT = (0, WT.useRef)(null),
                                zT = UT.label,
                                HT = UT.BU,
                                {
                                  icon: kT,
                                  scale: jT,
                                  rotation: lT
                                } = null !== UT && void 0 !== UT ? UT : {},
                                LT = 100 * (.5 - HT / 2),
                                pT = 100 * HT,
                                ZT = (0, gT.e)();
                              return (0, WT.useEffect)((() => {
                                const TT = ZT.onFrame((() => {
                                  const TT = ZT.getState();
                                  if (!TT.isActive || !mT.current) return;
                                  const UT = TT.state;
                                  mT.current.style.left = 100 * UT.markerPosition + "%"
                                }));
                                return () => {
                                  TT()
                                }
                              }), [ZT]), (0, nT.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, BT.E)(jT) && {
                                    "--scale": jT
                                  },
                                  ...!(0, BT.E)(lT) && {
                                    "--rotation": `${lT}deg`
                                  }
                                },
                                children: [kT && (0, nT.jsx)(MT.e, {
                                  text: [{
                                    icon: kT
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, nT.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, nT.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${LT}%`,
                                      width: `${pT}%`
                                    }
                                  }), (0, nT.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: mT
                                  })]
                                }), (0, nT.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, nT.jsx)(MT.e, {
                                    text: zT
                                  })
                                })]
                              })
                            })),
                            cT = (0, WT.memo)((function(TT) {
                              let {
                                initialParameters: UT
                              } = TT;
                              const mT = (0, WT.useRef)(null),
                                [zT, HT] = (0, WT.useState)((() => new Array(UT.cU).fill("pending"))),
                                [kT, jT] = (0, WT.useState)((() => {
                                  const TT = UT.qU;
                                  return (0, BT.E)(TT) || TT <= 0 ? [] : new Array(TT).fill("pending")
                                })),
                                lT = UT.label,
                                {
                                  icon: LT
                                } = UT,
                                pT = (0, WT.useRef)(0),
                                ZT = (0, WT.useRef)(0),
                                cT = (0, WT.useRef)([]),
                                vT = (0, gT.e)();
                              return (0, WT.useEffect)((() => {
                                const TT = vT.onFrame((() => {
                                  const TT = vT.getState();
                                  if (!TT.isActive || !mT.current) return;
                                  const UT = TT.state,
                                    WT = 30 + 60 * UT.outerCircleProgress;
                                  if (mT.current.setAttribute("r", String(WT)), !0 === UT.lastClickResult && UT.successes > pT.current) {
                                    mT.current.classList.remove("QTERhythmClickOuterCircle--miss"), mT.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const TT = setTimeout((() => {
                                      var TT;
                                      null === (TT = mT.current) || void 0 === TT || TT.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    cT.current.push(TT)
                                  } else if (!1 === UT.lastClickResult && UT.misses > ZT.current) {
                                    mT.current.classList.remove("QTERhythmClickOuterCircle--hit"), mT.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const TT = setTimeout((() => {
                                      var TT;
                                      null === (TT = mT.current) || void 0 === TT || TT.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    cT.current.push(TT)
                                  }
                                  UT.successes === pT.current && UT.misses === ZT.current || (pT.current = UT.successes, ZT.current = UT.misses, HT((TT => {
                                    const mT = [...TT];
                                    for (let WT = 0; WT < UT.cU; WT++) mT[WT] = WT < UT.successes ? "success" : "pending";
                                    return mT
                                  })), jT((TT => {
                                    if (0 === TT.length) return TT;
                                    const mT = [...TT];
                                    for (let WT = 0; WT < mT.length; WT++) mT[WT] = WT < UT.misses ? "miss" : "pending";
                                    return mT
                                  })))
                                }));
                                return () => {
                                  TT();
                                  for (const TT of cT.current) clearTimeout(TT);
                                  cT.current = []
                                }
                              }), [vT]), (0, nT.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, nT.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: zT.map(((TT, UT) => (0, nT.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === TT ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, UT)))
                                }), (0, nT.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, nT.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, nT.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, nT.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: mT
                                    })]
                                  }), LT && (0, nT.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, nT.jsx)(MT.e, {
                                      text: [{
                                        icon: LT
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), kT.length > 0 && (0, nT.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: kT.map(((TT, UT) => (0, nT.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === TT ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, UT)))
                                }), (0, nT.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, nT.jsx)(MT.e, {
                                    text: lT
                                  })
                                })]
                              })
                            }));

                          function vT(TT) {
                            let {
                              qte: UT
                            } = TT;
                            switch (UT.type) {
                              case "progressBar":
                                return (0, nT.jsx)(HT, {
                                  initialParameters: UT.parameters
                                });
                              case "timedClick":
                                return (0, nT.jsx)(LT, {
                                  initialParameters: UT.parameters
                                });
                              case "gravityBar":
                                return (0, nT.jsx)(pT, {
                                  initialParameters: UT.parameters
                                });
                              case "precisionBar":
                                return (0, nT.jsx)(ZT, {
                                  initialParameters: UT.parameters
                                });
                              case "rhythmClick":
                                return (0, nT.jsx)(cT, {
                                  initialParameters: UT.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const fT = (0, WT.memo)((function() {
                            const [TT, UT] = (0, WT.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, zT.g)("qteStateUpdated", (TT => {
                              UT(TT)
                            })), TT.isActive && TT.type ? (0, nT.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, nT.jsx)(vT, {
                                qte: TT
                              })
                            }) : null
                          }))
                        }, 4873: (TT, UT, mT) => {
                          mT.d(UT, {
                            c: () => nT,
                            e: () => HT
                          });
                          var WT = mT(63),
                            zT = mT(1398),
                            MT = mT(4879);
                          const gT = {
                              getState: () => MT.b.getCurrentState(),
                              onFrame: zT.k
                            },
                            nT = (0, WT.createContext)(gT);

                          function HT() {
                            return (0, WT.useContext)(nT)
                          }
                        }, 4939: (TT, UT, mT) => {
                          mT.d(UT, {
                            d: () => IT,
                            e: () => XT
                          });
                          var WT = mT(4948),
                            zT = mT(351);
                          const MT = 120,
                            gT = 260,
                            nT = 1.15,
                            HT = 1.2,
                            kT = 2,
                            jT = 1.08,
                            lT = .8,
                            LT = .95,
                            pT = 8,
                            BT = "[\"')\\]\u300d\u300f\uff09]*",
                            ZT = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${BT}$`),
                            cT = new RegExp(`[?\uff1f]${BT}$`),
                            vT = new RegExp(`[!\uff01]${BT}$`),
                            fT = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            qT = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            iT = new RegExp(`[${qT}]`),
                            bT = new RegExp(`[${qT}]|[^${qT}]+`, "g"),
                            OT = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function eT(TT) {
                            let UT = 2166136261;
                            for (let mT = 0; mT < TT.length; mT++) UT ^= TT.charCodeAt(mT), UT = Math.imul(UT, 16777619);
                            return (UT >>> 0) / 4294967295 * 2 - 1
                          }

                          function YT(TT) {
                            var UT;
                            if (iT.test(TT)) return 1;
                            const mT = TT.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              WT = mT.replace(/[^0-9]/g, "");
                            if (WT.length > 0 && !/\p{L}/u.test(mT)) return Math.min(WT.length, 4);
                            const zT = null !== (UT = mT.match(OT)) && void 0 !== UT ? UT : [];
                            if (0 === zT.length) {
                              var MT, gT;
                              const TT = null !== (MT = null === (gT = mT.match(/\p{L}/gu)) || void 0 === gT ? void 0 : gT.length) && void 0 !== MT ? MT : 0;
                              return 0 === TT ? 0 : Math.min(Math.max(1, Math.round(TT / 2.5)), pT)
                            }
                            const nT = mT.replace(/[^\p{L}]/gu, ""),
                              HT = zT.length > 1 && "e" === zT.at(-1) && nT.endsWith("e") && !nT.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(TT.replace(/[^\p{L}]/gu, ""));
                            return Math.min(zT.length - (HT ? 1 : 0), pT)
                          }

                          function JT(TT) {
                            return TT.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function xT(TT) {
                            const UT = TT.replace(/[^\p{L}]/gu, "");
                            return UT.length >= 2 && UT === UT.toUpperCase() && UT !== UT.toLowerCase()
                          }

                          function dT(TT, UT) {
                            var mT;
                            const pT = UT && (0, WT.k)(UT),
                              BT = null !== (mT = null === pT || void 0 === pT ? void 0 : pT.syllableMs) && void 0 !== mT ? mT : WT.d,
                              qT = function(TT) {
                                const UT = [];
                                for (const WT of (0, zT.Wb)(TT))
                                  if ("string" === typeof WT)
                                    for (const TT of WT.split(/(\s+)/)) {
                                      if ("" === TT) continue;
                                      if (/^\s+$/.test(TT)) {
                                        UT.push({
                                          kind: "space",
                                          text: TT
                                        });
                                        continue
                                      }
                                      if (!iT.test(TT)) {
                                        UT.push({
                                          kind: "word",
                                          text: TT,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let WT = !0;
                                      for (const zT of null !== (mT = TT.match(bT)) && void 0 !== mT ? mT : []) {
                                        var mT;
                                        const TT = UT.at(-1);
                                        WT || "word" !== (null === TT || void 0 === TT ? void 0 : TT.kind) || iT.test(zT) || /[\p{L}\p{N}]/u.test(zT) ? (WT || UT.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), UT.push({
                                          kind: "word",
                                          text: zT,
                                          delayMs: 0
                                        }), WT = !1) : TT.text += zT
                                      }
                                    } else UT.push({
                                      kind: "icon",
                                      text: WT.icon,
                                      delayMs: 0
                                    });
                                return UT
                              }(TT),
                              OT = [];
                            let dT = [];
                            for (const WT of qT) "space" !== WT.kind && (dT.push(WT), ZT.test(WT.text) && (OT.push(dT), dT = []));
                            OT.push(dT);
                            const wT = [];
                            let tT = 0;
                            for (const WT of OT) {
                              var aT, yT;
                              const TT = null !== (aT = null === (yT = WT.at(-1)) || void 0 === yT ? void 0 : yT.text) && void 0 !== aT ? aT : "",
                                UT = cT.test(TT),
                                mT = vT.test(TT),
                                zT = WT.map((TT => "word" === TT.kind ? YT(TT.text) : 1)),
                                qT = zT.findLastIndex((TT => TT > 0));
                              for (const [cT, vT] of WT.entries()) {
                                const TT = "word" === vT.kind,
                                  WT = zT[cT];
                                vT.delayMs = tT;
                                for (let zT = 0; pT && zT < WT; zT++) {
                                  const {
                                    intonation: MT
                                  } = pT;
                                  let gT = qT > 0 ? -MT.declineSemitones * (cT / qT) : 0;
                                  gT += eT(`${JT(vT.text)}|${zT}`) * MT.variationSemitones;
                                  const ZT = Math.min(1, MT.variationSemitones);
                                  let fT = pT.glideSemitones,
                                    iT = 1;
                                  mT && (gT += MT.exclaimLiftSemitones, iT *= nT), UT && cT === qT && (gT += MT.questionRiseSemitones * (WT > 1 ? .5 + .5 * zT / (WT - 1) : 1), zT === WT - 1 && (fT = Math.abs(fT) + MT.questionRiseSemitones / 2)), TT && xT(vT.text) && (gT += kT * ZT, iT *= HT), WT > 1 && 0 === zT && (gT += lT * ZT, iT *= jT), wT.push({
                                    atMs: tT + zT * BT,
                                    semitones: gT,
                                    glideSemitones: fT,
                                    durationMs: zT < WT - 1 ? Math.min(pT.durationMs, BT * LT) : pT.durationMs,
                                    level: iT
                                  })
                                }
                                tT += WT * BT + (ZT.test(vT.text) ? gT : fT.test(vT.text) ? MT : 0)
                              }
                            }
                            return {
                              pieces: qT.map((TT => "space" === TT.kind ? TT : "icon" === TT.kind ? {
                                kind: "icon",
                                icon: TT.text,
                                delayMs: TT.delayMs
                              } : {
                                kind: "word",
                                text: TT.text,
                                delayMs: TT.delayMs
                              })),
                              blips: wT
                            }
                          }
                          var wT = mT(1288),
                            tT = mT(1345),
                            aT = mT(2054);

                          function yT(TT) {
                            if ("string" === typeof TT) return TT;
                            const UT = tT.f.get().getCurrentLanguageCode();
                            return (0, wT.r)(UT, TT.translationKey, (0, wT.o)(TT.params, aT.d.shown))
                          }

                          function XT(TT) {
                            const UT = void 0 === TT.voice ? null : (0, WT.l)(TT.voice),
                              mT = UT && (0, WT.k)(UT);
                            return {
                              plan: dT(yT(TT.line), mT),
                              synth: mT
                            }
                          }

                          function IT(TT) {
                            const UT = [];
                            let mT = [];
                            for (const [zT, MT] of TT.entries()) {
                              var WT;
                              "space" === MT.kind && (" " !== MT.text || "icon" !== (null === (WT = TT[zT + 1]) || void 0 === WT ? void 0 : WT.kind)) ? (mT.length > 0 && UT.push(mT), UT.push([MT]), mT = []) : mT.push(MT)
                            }
                            return mT.length > 0 && UT.push(mT), UT
                          }
                        }, 4956: (TT, UT, mT) => {
                          mT.d(UT, {
                            c: () => jT,
                            f: () => lT
                          });
                          var WT = mT(4959),
                            zT = mT(25);
                          const MT = .25,
                            gT = .85,
                            nT = .02,
                            HT = .01;

                          function kT(TT, UT, mT, WT, zT, MT, nT) {
                            const {
                              waveform: HT,
                              pitchHz: kT,
                              attackMs: jT,
                              releaseMs: lT,
                              lowpassHz: LT
                            } = mT, pT = zT + WT.durationMs / 1e3, BT = kT * 2 ** (WT.semitones / 12), ZT = TT.createOscillator();
                            ZT.type = HT, ZT.frequency.setValueAtTime(BT, zT), ZT.frequency.exponentialRampToValueAtTime(BT * 2 ** (WT.glideSemitones / 12), pT);
                            const cT = zT + Math.min(jT, WT.durationMs) / 1e3,
                              vT = TT.createGain();
                            vT.gain.setValueAtTime(0, zT), vT.gain.linearRampToValueAtTime(MT, cT), vT.gain.linearRampToValueAtTime(MT * gT, Math.max(cT, pT - lT / 1e3)), vT.gain.linearRampToValueAtTime(0, pT);
                            const fT = [ZT];
                            if (null !== LT) {
                              const UT = TT.createBiquadFilter();
                              UT.type = "lowpass", UT.frequency.value = LT, fT.push(UT)
                            }
                            fT.push(vT, UT);
                            for (let gT = 1; gT < fT.length; gT++) fT[gT - 1].connect(fT[gT]);
                            return ZT.onended = () => {
                              for (const TT of fT.slice(0, -1)) TT.disconnect();
                              nT()
                            }, ZT.start(zT), ZT.stop(pT), ZT
                          }

                          function jT(TT, UT, mT, WT, zT, gT) {
                            if (0 === WT.length) return gT(), () => {};
                            const jT = MT * mT.volume * zT,
                              lT = TT.createGain();
                            lT.connect(UT);
                            const LT = TT.currentTime + nT,
                              pT = new Set;
                            for (const MT of WT) {
                              const UT = kT(TT, lT, mT, MT, LT + MT.atMs / 1e3, jT * MT.level, (() => {
                                pT.delete(UT), 0 === pT.size && (lT.disconnect(), gT())
                              }));
                              pT.add(UT)
                            }
                            return () => {
                              const UT = TT.currentTime;
                              lT.gain.setTargetAtTime(0, UT, HT);
                              for (const TT of pT) try {
                                TT.stop(UT + 5 * HT)
                              } catch {}
                            }
                          }

                          function lT(TT, UT) {
                            var mT;
                            const MT = WT.Howler.ctx,
                              gT = WT.Howler.masterGain;
                            if (!MT || !gT || !zT.b.get("soundOnFromAd")) return () => {};
                            const nT = WT.Howler;
                            return null === (mT = nT._autoResume) || void 0 === mT || mT.call(nT), jT(MT, gT, TT, UT, zT.b.get("soundVolume"), (() => {
                              var TT;
                              null === (TT = nT._autoSuspend) || void 0 === TT || TT.call(nT)
                            }))
                          }
                        }, 4923: (TT, UT, mT) => {
                          mT.d(UT, {
                            c: () => nT,
                            g: () => zT,
                            i: () => HT,
                            m: () => gT,
                            o: () => MT
                          });
                          var WT = mT(4918);
                          const zT = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            MT = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            gT = `${WT.k} lists every page of the Bloxd Code API docs.`;

                          function nT(TT, UT) {
                            return `${TT.url}${encodeURIComponent(UT.toWellFormed())}`
                          }

                          function HT(TT) {
                            const UT = nT(zT, TT);
                            return UT.length <= 3e4 ? {
                              url: UT,
                              sendsPrompt: !0
                            } : {
                              url: new URL(zT.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 4959: (TT, UT, mT) => {
                          mT.r(UT), mT.d(UT, {
                            Howl: () => zT.Howl,
                            Howler: () => zT.Howler,
                            musicOutput: () => cT,
                            readyAudioContext: () => vT
                          });
                          var WT, zT = mT(4966),
                            MT = mT(3536),
                            gT = mT(4741);
                          const nT = zT.Howler;

                          function HT() {
                            var TT, UT;
                            if (nT.ctx || !nT.usingWebAudio || "undefined" === typeof AudioContext || !(0, gT.j)()) return;
                            const mT = navigator.audioSession;
                            let WT;
                            "auto" === (null === mT || void 0 === mT ? void 0 : mT.type) && (mT.type = "ambient");
                            try {
                              WT = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const zT = WT.createGain();
                            zT.gain.setValueAtTime(nT._muted ? 0 : null !== (TT = nT._volume) && void 0 !== TT ? TT : 1, WT.currentTime), zT.connect(WT.destination), nT.ctx = WT, nT.masterGain = zT, null === (UT = nT._setup) || void 0 === UT || UT.call(nT)
                          }
                          nT._mobileUnloaded = !0;
                          const kT = nT.volume.bind(zT.Howler);
                          nT.volume = function() {
                            return HT(), kT(...arguments)
                          };
                          const jT = nT.mute.bind(zT.Howler);
                          nT.mute = TT => (HT(), jT(TT));
                          const lT = zT.Howl.prototype,
                            LT = lT.init;

                          function pT() {
                            for (; nT._html5AudioPool.length < nT.html5PoolSize;) {
                              const TT = new Audio;
                              TT._unlocked = !0, nT._releaseHtml5Audio(TT)
                            }
                            for (const UT of nT._howls)
                              if (!UT._webAudio)
                                for (const mT of UT._getSoundIds()) {
                                  var TT;
                                  const WT = null === (TT = UT._soundById(mT)) || void 0 === TT ? void 0 : TT._node;
                                  WT && !WT._unlocked && (WT._unlocked = !0, WT.load())
                                }
                          }
                          lT.init = function(TT) {
                            return HT(), LT.call(this, TT)
                          }, (0, gT.j)() && (nT._unlockAudio = () => {
                            const TT = nT.ctx;
                            if (nT._audioUnlocked || !TT) return;
                            nT.autoUnlock = !1;
                            const UT = TT.createBuffer(1, 1, 22050);
                            nT._scratchBuffer = UT;
                            const mT = new AbortController;
                            let WT = "afterPaint";
                            const zT = () => {
                                var WT;
                                if (nT._audioUnlocked) return;
                                null === (WT = nT._autoResume) || void 0 === WT || WT.call(nT);
                                const zT = TT.createBufferSource();
                                zT.buffer = UT, zT.connect(TT.destination), zT.start(0), TT.resume().catch((() => {})), zT.onended = () => {
                                  zT.disconnect(0), nT._audioUnlocked = !0, mT.abort();
                                  for (const TT of nT._howls) TT._emit("unlock")
                                }
                              },
                              HT = () => {
                                pT(), zT()
                              },
                              kT = UT => {
                                if (pT(), "inTap" === WT) {
                                  if ("running" === TT.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), zT()
                                } else "afterPaint" === WT && (WT = "queued", (0, MT.e)(UT.timeStamp, (() => {
                                  WT = "inTap", zT()
                                })))
                              };
                            for (const MT of ["touchstart", "touchend"]) document.addEventListener(MT, HT, {
                              capture: !0,
                              signal: mT.signal
                            });
                            for (const MT of gT.c) document.addEventListener(MT, kT, {
                              capture: !0,
                              signal: mT.signal
                            })
                          });
                          let BT = 0;
                          const ZT = null === (WT = nT._autoSuspend) || void 0 === WT ? void 0 : WT.bind(zT.Howler);

                          function cT() {
                            vT();
                            const {
                              ctx: TT,
                              masterGain: UT
                            } = nT;
                            return TT && UT ? {
                              ctx: TT,
                              destination: UT,
                              holdAwake: TT => {
                                var UT, mT;
                                (BT += TT ? 1 : -1, TT) ? null === (UT = nT._autoResume) || void 0 === UT || UT.call(nT): null === (mT = nT._autoSuspend) || void 0 === mT || mT.call(nT)
                              },
                              wake: () => {
                                var UT;
                                "running" !== TT.state && (null === (UT = nT._autoResume) || void 0 === UT || UT.call(nT), TT.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function vT() {
                            var TT;
                            (nT.volume(), nT.ctx && nT.autoUnlock) && (null === (TT = nT._unlockAudio) || void 0 === TT || TT.call(nT))
                          }
                          ZT && (nT._autoSuspend = () => BT > 0 ? zT.Howler : ZT())
                        }, 4972: (TT, UT, mT) => {
                          function WT(TT) {
                            return {
                              notAfter: TT
                            }
                          }
                          mT.d(UT, {
                            d: () => HT,
                            e: () => kT,
                            f: () => nT,
                            j: () => WT,
                            n: () => zT,
                            o: () => MT,
                            p: () => gT,
                            s: () => jT,
                            v: () => lT
                          });
                          const zT = WT("\\w$."),
                            MT = WT("\\w.,");

                          function gT(TT) {
                            return UT => HT(UT, TT)
                          }

                          function nT(TT) {
                            return UT => !TT.test(UT.input.slice(0, UT.index))
                          }

                          function HT(TT, UT) {
                            return TT.index > 0 && new RegExp(`[${UT}]`).test(TT.input[TT.index - 1])
                          }

                          function kT(TT, UT, mT) {
                            return function(TT) {
                              return void 0 !== TT && "function" !== typeof TT
                            }(mT) ? function(TT, UT, mT) {
                              const WT = UT.flags.replace(/[gy]/g, ""),
                                zT = new RegExp(`[^${mT}](?:${UT.source})`, `${WT}g`),
                                MT = [],
                                gT = mT => {
                                  const WT = mT.index + mT[0].length;
                                  return ("" === mT[0] ? LT(TT, UT, WT) : WT) - 1
                                },
                                nT = new RegExp(`(?:${UT.source})`, `${WT}y`).exec(TT);
                              if (nT) {
                                if (MT.push(nT), !UT.global) return MT;
                                zT.lastIndex = gT(nT)
                              }
                              for (let HT = zT.exec(TT); HT; HT = zT.exec(TT)) {
                                const mT = LT(TT, UT, HT.index) - HT.index;
                                if (HT[0] = HT[0].slice(mT), HT.index += mT, MT.push(HT), !UT.global) break;
                                zT.lastIndex = gT(HT)
                              }
                              return MT
                            }(TT, UT, mT.notAfter) : function(TT, UT, mT) {
                              const WT = new RegExp(UT.source, `${UT.flags.replace(/[gy]/g,"")}g`),
                                zT = [];
                              for (let MT = WT.exec(TT); MT; MT = WT.exec(TT))
                                if (!mT || mT(MT)) {
                                  if (zT.push(MT), !UT.global) break;
                                  "" === MT[0] && (WT.lastIndex = LT(TT, UT, WT.lastIndex))
                                } else WT.lastIndex = LT(TT, UT, MT.index);
                              return zT
                            }(TT, UT, mT)
                          }

                          function jT(TT, UT, mT, WT) {
                            let zT = "",
                              MT = 0;
                            for (const gT of kT(TT, UT, mT)) zT += TT.slice(MT, gT.index) + WT(gT), MT = gT.index + gT[0].length;
                            return zT + TT.slice(MT)
                          }

                          function lT(TT, UT, mT) {
                            const WT = [];
                            let zT = 0;
                            for (const MT of kT(TT, UT, mT)) WT.push(TT.slice(zT, MT.index)), zT = MT.index + MT[0].length;
                            return [...WT, TT.slice(zT)]
                          }

                          function LT(TT, UT, mT) {
                            var WT;
                            return mT + (UT.unicode && (null !== (WT = TT.codePointAt(mT)) && void 0 !== WT ? WT : 0) > 65535 ? 2 : 1)
                          }
                        }, 4918: (TT, UT, mT) => {
                          mT.d(UT, {
                            b: () => zT,
                            d: () => HT,
                            h: () => MT,
                            k: () => gT,
                            m: () => nT,
                            o: () => cT,
                            r: () => jT,
                            t: () => lT,
                            v: () => ZT,
                            y: () => pT
                          });
                          var WT = mT(1710);
                          const zT = 24e3,
                            MT = "/docs/llms.txt",
                            gT = `${WT.b}${MT}`,
                            nT = "/llms.txt",
                            HT = "/docs/llms-full.txt";

                          function kT(TT) {
                            return TT || "index"
                          }

                          function jT(TT) {
                            return `/docs/${kT(TT)}.md`
                          }

                          function lT(TT, UT) {
                            return `/docs/${kT(TT)}/${UT+1}.md`
                          }
                          const LT = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function pT(TT) {
                            const UT = LT.exec(TT);
                            return null === UT ? null : {
                              name: UT[1],
                              part: void 0 === UT[2] ? null : Number(UT[2])
                            }
                          }
                          const BT = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function ZT(TT) {
                            const UT = BT.exec(TT);
                            if (null === UT) return null;
                            const [, mT = "", WT] = UT;
                            return void 0 === WT ? jT(mT) : lT(mT, Number(WT) - 1)
                          }

                          function cT(TT) {
                            return `/docsHtml/${kT(TT)}.html`
                          }
                        }, 4948: (TT, UT, mT) => {
                          mT.d(UT, {
                            d: () => zT,
                            e: () => WT,
                            h: () => MT,
                            k: () => HT,
                            l: () => gT
                          });
                          const WT = ["sine", "triangle", "square", "sawtooth"],
                            zT = 55,
                            MT = {
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

                          function gT(TT) {
                            return "string" !== typeof TT ? TT : Object.hasOwn(MT, TT) ? MT[TT] : null
                          }

                          function nT(TT, UT, mT) {
                            return Math.min(mT, Math.max(UT, TT))
                          }

                          function HT(TT) {
                            const UT = nT(TT.durationMs, 10, 500),
                              mT = nT(TT.attackMs, 0, UT),
                              {
                                intonation: zT
                              } = TT;
                            return {
                              waveform: WT.includes(TT.waveform) ? TT.waveform : "sine",
                              pitchHz: nT(TT.pitchHz, 20, 4e3),
                              glideSemitones: nT(TT.glideSemitones, -24, 24),
                              durationMs: UT,
                              attackMs: mT,
                              releaseMs: nT(TT.releaseMs, 0, UT - mT),
                              lowpassHz: null === TT.lowpassHz ? null : nT(TT.lowpassHz, 20, 2e4),
                              volume: nT(TT.volume, 0, 2),
                              intonation: {
                                variationSemitones: nT(zT.variationSemitones, 0, 6),
                                declineSemitones: nT(zT.declineSemitones, 0, 12),
                                questionRiseSemitones: nT(zT.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: nT(zT.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: nT(TT.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const TT in modules) Object.freeze(modules[TT]);