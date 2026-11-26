export const id = 92;
export const ids = [92, 108];
export const modules = {
    5333: (VV, eV, xV) => {
      xV.d(eV, {
        e: () => EV,
        i: () => BV
      });
      var JV = xV(1146),
        YV = xV.n(JV),
        UV = xV(62),
        yV = xV(1220),
        pV = xV(5335),
        QV = xV(2021),
        nV = xV(2693),
        wV = xV(5339),
        ZV = xV(1321);
      const vV = new WeakMap;
      let rV = 0;

      function kV(VV) {
        let eV = vV.get(VV);
        return void 0 === eV && (eV = rV++, vV.set(VV, eV)), eV
      }

      function bV(VV) {
        let {
          piece: eV
        } = VV;
        return "space" === eV.kind ? (0, ZV.jsx)(ZV.Fragment, {
          children: eV.text
        }) : (0, ZV.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${eV.delayMs}ms`
          },
          children: (0, ZV.jsx)(pV.e, {
            text: "icon" === eV.kind ? `[[${eV.icon}]]` : eV.text
          })
        })
      }

      function EV(VV) {
        let {
          display: eV
        } = VV;
        const {
          selectedLanguage: xV
        } = (0, yV.A)(), JV = (0, UV.useMemo)((() => (0, wV.c)((0, wV.g)(eV).plan.pieces)), [eV, xV.code]);
        return (0, ZV.jsxs)("div", {
          className: YV()("Dialogue", {
            DialogueAnimateIn: !1 !== eV.animateIn
          }),
          children: [eV.speakerName && (0, ZV.jsx)(QV.b, {
            text: eV.speakerName,
            className: "DialogueSpeaker"
          }), (0, ZV.jsx)("p", {
            className: "DialogueLine",
            children: JV.map(((VV, eV) => 1 === VV.length && "space" === VV[0].kind ? VV[0].text : (0, ZV.jsx)("span", {
              className: "DialogueGlue",
              children: VV.map(((VV, eV) => (0, ZV.jsx)(bV, {
                piece: VV
              }, eV)))
            }, eV)))
          })]
        })
      }
      const BV = (0, UV.memo)((function() {
        const VV = (0, nV.j)("dialogue");
        return (0, ZV.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: VV && (0, ZV.jsx)(EV, {
            display: VV
          }, kV(VV))
        })
      }))
    },
    5222: (VV, eV, xV) => {
        xV.r(eV), xV.d(eV, {
          default: () => OU
        });
        var JV = xV(62),
          YV = xV(1146),
          UV = xV.n(YV),
          yV = xV(1616),
          pV = xV(1625),
          QV = xV(27),
          nV = xV(78),
          wV = xV(5226),
          ZV = xV(5239),
          vV = xV(5241),
          rV = xV(4788),
          kV = xV(1321);
        const bV = "/textures/docs/icons";

        function EV(VV) {
          let {
            name: eV,
            isTinted: xV,
            className: JV,
            style: YV
          } = VV;
          const yV = `${bV}/${eV}.png`;
          return xV ? (0, kV.jsxs)("span", {
            className: UV()("DocsPixelIcon", "Tinted", JV),
            "aria-hidden": "true",
            style: YV,
            children: [(0, kV.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${yV}")`,
                WebkitMaskImage: `url("${yV}")`
              }
            }), (0, kV.jsx)("img", {
              src: yV,
              alt: ""
            })]
          }) : (0, kV.jsx)("img", {
            className: UV()("DocsPixelIcon", JV),
            src: yV,
            alt: "",
            "aria-hidden": "true",
            style: YV
          })
        }
        const BV = 1500;

        function jV() {
          const [VV, eV] = (0, JV.useState)(null);
          (0, JV.useEffect)((() => {
            if (null === VV) return;
            const xV = setTimeout((() => {
              eV(null)
            }), BV);
            return () => {
              clearTimeout(xV)
            }
          }), [VV]);
          return [VV, VV => {
            (0, rV.b)(VV).then((() => {
              eV({
                text: VV,
                failed: !1
              })
            }), (xV => {
              console.error("Could not copy to the clipboard", xV), eV({
                text: VV,
                failed: !0
              })
            }))
          }]
        }

        function qV(VV) {
          let {
            text: eV,
            label: xV,
            className: JV
          } = VV;
          const [YV, yV] = jV(), pV = !1 === (null === YV || void 0 === YV ? void 0 : YV.failed);
          return (0, kV.jsxs)("button", {
            type: "button",
            className: UV()("DocsCopyButton", JV, {
              Copied: pV
            }),
            title: `Copy ${eV.length>40?"to clipboard":eV}`,
            "aria-label": xV ? void 0 : `Copy ${eV}`,
            onClick: VV => {
              VV.stopPropagation(), yV(eV)
            },
            children: [(0, kV.jsx)(EV, {
              name: pV ? "check" : "copy"
            }), xV && (0, kV.jsx)("span", {
              children: pV ? "Copied" : null !== YV && void 0 !== YV && YV.failed ? "Copy failed" : xV
            })]
          })
        }
        wV.c.registerLanguage("javascript", ZV.e), wV.c.registerLanguage("typescript", vV.b);
        const tV = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          FV = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          TV = 24;

        function PV(VV) {
          let {
            code: eV,
            lang: xV,
            compact: YV = !1
          } = VV;
          const yV = (0, JV.useMemo)((() => function(VV, eV) {
              const xV = tV[eV];
              return xV ? wV.c.highlight(VV, {
                language: xV
              }).value : VV.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(eV, xV)), [eV, xV]),
            pV = eV.split("\n").length,
            QV = !YV && pV > TV + 6,
            [nV, ZV] = (0, JV.useState)(!1),
            vV = tV[xV];
          return (0, kV.jsxs)("div", {
            className: UV()("DocsCodeBlock", {
              Compact: YV,
              Collapsed: QV && !nV
            }),
            children: [!YV && (0, kV.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, kV.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: vV ? FV[vV] : "Text"
              }), (0, kV.jsx)(qV, {
                text: eV,
                label: "Copy"
              })]
            }), (0, kV.jsx)("pre", {
              children: (0, kV.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: yV
                }
              })
            }), QV && (0, kV.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": nV,
              onClick: () => {
                ZV(!nV)
              },
              children: [(0, kV.jsx)(EV, {
                name: nV ? "chevron-up" : "chevron-down"
              }), nV ? "Show less" : `Show all ${pV} lines`]
            })]
          })
        }
        var AV = xV(5243);
        var NV = xV(5246);
        const XV = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function MV(VV) {
          const eV = new Map;
          let xV, JV = [],
            YV = !1;
          const UV = () => {
            xV && eV.set(xV.name, xV.lines.join("\n").trimEnd())
          };
          for (const yV of VV.split("\n")) {
            const VV = yV.match(XV);
            YV || yV.startsWith("/*") ? (YV || (UV(), xV = void 0), JV.push(yV), YV = !yV.includes("*/")) : VV ? (UV(), xV = {
              name: VV[1],
              lines: [...JV, yV]
            }, JV = []) : xV && (yV.startsWith(" ") || yV.startsWith("\t") || /^[}\])|]/.test(yV)) ? xV.lines.push(yV) : xV && "" !== yV.trim() && (UV(), xV = void 0)
          }
          return UV(), eV
        }

        function zV(VV) {
          return "methods" === VV || "callbacks" === VV || "settings" === VV
        }
        const GV = {
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
              setterSnippet: (VV, eV) => `api.setClientOption(playerId, "${VV}", ${eV})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (VV, eV) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${VV}", ${eV})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (VV, eV) => `api.setMobSetting(mobId, "${VV}", ${eV})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (VV, eV) => `api.setVehicleSetting(vehicleId, "${VV}", ${eV})`
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
          WV = {
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

        function RV(VV) {
          return VV.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function gV(VV) {
          let eV = !1;
          return VV.split("\n").map((VV => (VV.startsWith("```") && (eV = !eV), !eV && /^#{3,} /.test(VV) ? VV.slice(1) : VV))).join("\n")
        }

        function DV(VV) {
          return "readme" === VV ? "getting-started" : RV(VV)
        }
        const iV = "## Glossary of Referenced Types";
        const CV = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...NV.c.flatMap((VV => {
            const eV = {
              id: VV.id,
              slug: DV(VV.id),
              title: VV.title,
              markdown: VV.content,
              ...GV[VV.id]
            };
            if ("readme" === VV.id) return function(VV) {
              const eV = VV.markdown.indexOf(iV),
                xV = VV.markdown.indexOf("\n```", eV),
                JV = VV.markdown.indexOf("\n```", xV + 1);
              if (-1 === eV || -1 === xV || -1 === JV) throw new Error(`Getting started has no "${iV}" section with a code block`);
              const YV = VV.markdown.slice(eV + 31, xV).trim(),
                UV = [...MV(VV.markdown.slice(VV.markdown.indexOf("\n", xV + 1) + 1, JV))].map((VV => {
                  let [eV, xV] = VV;
                  return `## ${eV}\n\n\`\`\`ts\n${xV}\n\`\`\`\n`
                })),
                yV = VV.markdown.slice(VV.markdown.indexOf("\n", JV + 1) + 1);
              return [{
                ...VV,
                markdown: `${VV.markdown.slice(0,eV)}${yV}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${YV}\n\n${UV.join("\n")}`
              }]
            }(eV);
            if ("howTo" === VV.id) {
              const {
                parent: VV,
                guides: xV
              } = function(VV) {
                const [eV, ...xV] = VV.markdown.split(/^(?=## )/m), JV = [eV], YV = [];
                for (const yV of xV) {
                  var UV;
                  const eV = yV.indexOf("\n"),
                    xV = yV.slice(3, eV).trim(),
                    pV = yV.slice(eV + 1);
                  if (!pV.includes("```")) {
                    JV.push(yV);
                    continue
                  }
                  const QV = null !== (UV = WV[xV]) && void 0 !== UV ? UV : {
                    icon: "lightbulb",
                    summary: `How to use ${xV.toLowerCase()} in World Code.`
                  };
                  YV.push({
                    id: `${VV.id}${xV.split(/[^A-Za-z0-9]+/).map((VV=>VV.charAt(0).toUpperCase()+VV.slice(1))).join("")}`,
                    slug: `${VV.slug}-${RV(xV)}`,
                    title: xV,
                    layout: "article",
                    sourceAnchor: (0, AV.w)(xV),
                    markdown: `# ${xV}\n\n${gV(pV)}`,
                    ...QV
                  })
                }
                return {
                  parent: {
                    ...VV,
                    markdown: JV.join(""),
                    childPageIds: YV.map((VV => VV.id))
                  },
                  guides: YV
                }
              }(eV);
              return [VV, ...xV]
            }
            return [eV]
          }))],
          aV = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...CV.filter((VV => void 0 !== VV.sourceAnchor)).map((VV => VV.id))]
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

        function oV(VV) {
          return CV.find((eV => eV.id === VV))
        }
        const cV = new Map;

        function hV(VV) {
          let eV = cV.get(VV.id);
          return eV || (eV = (0, AV.E)(VV.markdown, "changelog" === VV.layout ? 3 : 2), cV.set(VV.id, eV)), eV
        }

        function lV(VV, eV) {
          return hV(VV).sections.some((VV => VV.heading.anchor === eV || VV.blocks.some((VV => "heading" === VV.kind && VV.anchor === eV))))
        }

        function LV(VV) {
          const [eV, ...xV] = VV.replace(/^#/, "").split("-"), JV = CV.find((VV => VV.id === eV));
          if (!JV) return null;
          const YV = xV.length > 0 ? (0, AV.w)(xV.join("-")) : "";
          for (const yV of null !== (UV = JV.childPageIds) && void 0 !== UV ? UV : []) {
            var UV;
            const VV = oV(yV);
            if (VV.sourceAnchor === YV) return {
              page: VV,
              anchor: ""
            };
            if (lV(VV, YV)) return {
              page: VV,
              anchor: YV
            }
          }
          return {
            page: JV,
            anchor: YV
          }
        }
        const fV = {
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

        function mV(VV, eV) {
          let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const JV = eV.slug ? `${VV}/${eV.slug}` : VV;
          return xV ? `${JV}#${xV}` : JV
        }
        var KV = xV(5259);
        const HV = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          uV = new Set(["GameApi", "Console", "_TypeOf"]),
          sV = 4;

        function SV(VV) {
          let eV = VV.length;
          for (; eV > 0 && "" === VV[eV - 1].trim();) eV--;
          return VV.slice(0, eV)
        }

        function IV(VV) {
          var eV;
          const xV = SV(VV);
          if (null === (eV = xV.at(-1)) || void 0 === eV || !eV.trimEnd().endsWith("*/")) return {
            lines: xV,
            doc: ""
          };
          const JV = xV.findLastIndex((VV => VV.startsWith("/**")));
          return -1 === JV ? {
            lines: xV,
            doc: ""
          } : {
            lines: SV(xV.slice(0, JV)),
            doc: xV.slice(JV).join("\n")
          }
        }

        function dV(VV) {
          var eV;
          const xV = VV.split("\n"),
            JV = xV.flatMap(((VV, eV) => HV.test(VV) ? [eV] : []));
          let YV = IV(xV.slice(0, null !== (eV = JV[0]) && void 0 !== eV ? eV : xV.length)).doc;
          return JV.map(((VV, eV) => {
            var UV;
            const yV = IV(xV.slice(VV, null !== (UV = JV[eV + 1]) && void 0 !== UV ? UV : xV.length)),
              pV = {
                name: xV[VV].match(HV)[1],
                doc: YV,
                lines: yV.lines
              };
            return YV = yV.doc, pV
          }))
        }

        function OV(VV) {
          var eV;
          const xV = VV.match(/^readonly \[([\s\S]*)\]$/);
          return xV ? null !== (eV = xV[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== eV ? eV : [] : null
        }

        function Ve(VV) {
          if (!VV.startsWith("{") || !VV.endsWith("}")) return null;
          const eV = {
              keys: [],
              values: []
            },
            xV = VV => {
              const xV = VV.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              xV && (eV.keys.push(xV[1].startsWith('"') ? xV[1] : `"${xV[1]}"`), eV.values.push(xV[2].trim()))
            };
          let JV = 0,
            YV = "";
          for (const UV of VV.slice(1, -1)) "{[(".includes(UV) ? JV++ : "}])".includes(UV) && JV--, ";" === UV && 0 === JV ? (xV(YV), YV = "") : YV += UV;
          return xV(YV), eV
        }

        function ee(VV) {
          return VV.length > sV ? `\n\t| ${VV.join("\n\t| ")}` : VV.join(" | ")
        }

        function xe(VV, eV) {
          const xV = function(VV, eV) {
            return VV.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((VV, xV) => {
              var JV;
              const YV = null === (JV = eV.get(xV)) || void 0 === JV ? void 0 : JV.object;
              return YV ? ee(YV.values) : VV
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((VV, xV) => {
              var JV, YV;
              const UV = null === (JV = eV.get(xV)) || void 0 === JV || null === (YV = JV.object) || void 0 === YV ? void 0 : YV.values.map(OV);
              return null !== UV && void 0 !== UV && UV.every((VV => null !== VV)) ? ee([...new Set(UV.flat())]) : VV
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((VV, xV) => {
              var JV;
              const YV = null === (JV = eV.get(xV)) || void 0 === JV ? void 0 : JV.members;
              return YV ? ee(YV) : VV
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((VV, xV) => {
              var JV;
              const YV = null === (JV = eV.get(xV)) || void 0 === JV ? void 0 : JV.object;
              return YV ? ee(YV.keys) : VV
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((VV, xV) => {
              var JV, YV;
              return null !== (JV = null === (YV = eV.get(xV)) || void 0 === YV ? void 0 : YV.text) && void 0 !== JV ? JV : VV
            }))
          }(VV.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), eV);
          return [VV.doc, xV].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function Je(VV) {
          const eV = dV(VV),
            xV = function(VV) {
              const eV = new Map,
                xV = VV.find((VV => "_TypeOf" === VV.name));
              let JV = null;
              const YV = () => {
                if (JV) {
                  const VV = JV.lines.join("\n");
                  eV.set(JV.name, {
                    text: VV,
                    members: OV(VV),
                    object: Ve(VV)
                  })
                }
              };
              for (const UV of xV.lines.slice(1, -1)) {
                const VV = UV.match(/^\t([\w$]+): (.+)$/);
                VV ? (YV(), JV = {
                  name: VV[1],
                  lines: [VV[2]]
                }) : JV && JV.lines.push(UV.replace(/^\t/, ""))
              }
              return YV(), eV
            }(eV),
            JV = new Map;
          for (const YV of eV) uV.has(YV.name) || JV.has(YV.name) || JV.set(YV.name, xe(YV, xV));
          return JV
        }
        let Ye, Ue, ye;

        function pe() {
          return Ue ??= function(VV) {
            const eV = dV(VV).find((VV => "GameApi" === VV.name)),
              xV = new Map,
              JV = eV.lines;
            for (let UV = 0; UV < JV.length; UV++) {
              var YV;
              if (!JV[UV].trimStart().startsWith("/**")) continue;
              const VV = UV;
              for (; UV < JV.length && !JV[UV].includes("*/");) UV++;
              const eV = null === (YV = JV[UV + 1]) || void 0 === YV ? void 0 : YV.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!eV) continue;
              let yV = null;
              const pV = [];
              let QV = "description",
                nV = !1;
              for (const xV of JV.slice(VV, UV + 1).join("\n").split("\n").map((VV => VV.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const VV = xV.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                VV ? (yV = VV[1].trim(), QV = "deprecation") : xV.startsWith("@") ? (QV = "otherTag", nV = !0) : "" === xV.trim() ? nV || (QV = "description", pV.push(xV)) : "deprecation" !== QV || /^[A-Z]/.test(xV.trim()) ? "otherTag" !== QV && (QV = "description", pV.push(xV)) : yV = `${yV} ${xV.trim()}`.trim()
              }
              xV.set(eV[1], {
                deprecation: yV,
                description: pV.join("\n").trim()
              })
            }
            return xV
          }(KV.default), Ue
        }

        function Qe() {
          if (!ye) {
            ye = new Map;
            for (const VV of CV) {
              const eV = (0, AV.A)(hV(VV)).flatMap((VV => VV.blocks));
              for (const VV of (0, AV.n)(eV))
                if ("ts" === VV.lang || "typescript" === VV.lang)
                  for (const [eV, xV] of MV(VV.code)) ye.set(eV, xV)
            }
            for (const [VV, eV] of(Ye ??= Je(KV.default), Ye)) ye.has(VV) || ye.set(VV, eV)
          }
          return ye
        }
        const ne = {
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
        let we;

        function Ze() {
          if (!we) {
            we = new Map;
            for (const VV of CV)
              if (zV(VV.layout))
                for (const eV of hV(VV).sections) we.has(eV.heading.text) || we.set(eV.heading.text, {
                  pageId: VV.id,
                  anchor: eV.heading.anchor
                })
          }
          return we
        }

        function ve(VV) {
          const eV = VV.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return eV ? Ze().get(eV[1]) : void 0
        }
        const re = (0, JV.createContext)("/docs"),
          ke = (0, JV.createContext)(null),
          be = (0, JV.createContext)(!1),
          Ee = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function Be(VV) {
          const eV = VV.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return eV ? eV[1] : null
        }

        function je(VV) {
          let {
            colour: eV
          } = VV;
          return (0, kV.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: eV
            },
            "aria-hidden": "true"
          })
        }

        function qe(VV) {
          const eV = [];
          let xV = 0;
          for (const JV of VV.matchAll(Ee)) eV.push(VV.slice(xV, JV.index), (0, kV.jsx)(je, {
            colour: JV[0]
          }), JV[0]), xV = JV.index + JV[0].length;
          return eV.push(VV.slice(xV)), eV
        }

        function te(VV) {
          let {
            href: eV,
            children: xV
          } = VV;
          const YV = (0, JV.useContext)(re);
          if (eV.startsWith("#")) {
            const VV = LV(eV);
            if (VV) return (0, kV.jsx)(yV.b, {
              to: mV(YV, VV.page, VV.anchor),
              children: (0, kV.jsx)(be.Provider, {
                value: !0,
                children: xV
              })
            })
          }
          return (0, kV.jsx)("a", {
            href: eV,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, kV.jsx)(be.Provider, {
              value: !0,
              children: xV
            })
          })
        }

        function Fe(VV) {
          let {
            code: eV
          } = VV;
          const xV = (0, JV.useContext)(re);
          if ((0, JV.useContext)(be)) return (0, kV.jsx)("code", {
            className: "DocsInlineCode",
            children: eV
          });
          if (Qe().has(eV)) return (0, kV.jsx)(Ne, {
            type: eV
          });
          const YV = ve(eV);
          if (YV) return (0, kV.jsx)(yV.b, {
            className: "DocsInlineCode DocsSymbolLink",
            to: mV(xV, oV(YV.pageId), YV.anchor),
            children: eV
          });
          const UV = Be(eV);
          return (0, kV.jsxs)("code", {
            className: "DocsInlineCode",
            children: [UV && (0, kV.jsx)(je, {
              colour: UV
            }), eV]
          })
        }

        function Te(VV) {
          let {
            text: eV
          } = VV;
          const xV = [];
          let YV = 0;
          for (const JV of eV.matchAll(AV.h)) {
            JV.index > YV && xV.push(...qe(eV.slice(YV, JV.index)));
            const [, VV, UV, yV, pV, QV] = JV;
            VV ? xV.push((0, kV.jsx)(Fe, {
              code: (0, AV.r)(VV, UV)
            })) : yV ? xV.push((0, kV.jsx)("strong", {
              children: (0, kV.jsx)(Te, {
                text: yV
              })
            })) : xV.push((0, kV.jsx)(te, {
              href: QV,
              children: (0, kV.jsx)(Te, {
                text: pV
              })
            })), YV = JV.index + JV[0].length
          }
          return YV < eV.length && xV.push(...qe(eV.slice(YV))), (0, kV.jsx)(kV.Fragment, {
            children: xV.map(((VV, eV) => (0, kV.jsx)(JV.Fragment, {
              children: VV
            }, eV)))
          })
        }
        const Pe = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          Ae = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function Ne(VV) {
          let {
            type: eV
          } = VV;
          const xV = Qe(),
            YV = [];
          for (const JV of eV.trim().matchAll(Pe)) {
            const [VV, eV, UV, yV, pV] = JV;
            eV ? YV.push((0, kV.jsx)("span", {
              className: "DocsTypeString",
              children: VV
            })) : UV && xV.has(UV) ? YV.push((0, kV.jsx)(We, {
              name: UV,
              definition: xV.get(UV)
            })) : UV ? YV.push((0, kV.jsx)("span", {
              className: Ae.has(UV) ? "DocsTypeKeyword" : "DocsTypeName",
              children: VV
            })) : yV ? YV.push((0, kV.jsx)("span", {
              className: "DocsTypeNumber",
              children: VV
            })) : pV ? YV.push(" ") : YV.push((0, kV.jsx)("span", {
              className: "DocsTypePunctuation",
              children: VV
            }))
          }
          return (0, kV.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: YV.map(((VV, eV) => (0, kV.jsx)(JV.Fragment, {
              children: VV
            }, eV)))
          })
        }
        const Xe = 480,
          Me = 6,
          ze = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Ge = 0;

        function We(VV) {
          let {
            name: eV,
            definition: xV
          } = VV;
          const YV = (0, JV.useContext)(re),
            UV = ne[eV],
            pV = (0, JV.useRef)(null),
            QV = (0, JV.useRef)(null),
            wV = (0, JV.useRef)(null),
            [ZV, vV] = (0, JV.useState)(!1),
            [rV, bV] = (0, JV.useState)(null),
            BV = (0, JV.useRef)(),
            jV = (0, JV.useContext)(ke),
            [qV] = (0, JV.useState)((() => "DocsTypePopover-" + Ge++)),
            tV = () => {
              clearTimeout(BV.current), vV(!0)
            },
            FV = () => {
              clearTimeout(BV.current), BV.current = setTimeout((() => {
                vV(!1)
              }), 120)
            };
          return (0, JV.useEffect)((() => {
            if (!ZV) return;
            const VV = VV => {
              if ("Escape" === VV.key) {
                var eV, xV;
                if (null !== (eV = QV.current) && void 0 !== eV && eV.contains(document.activeElement)) null === (xV = pV.current) || void 0 === xV || xV.focus();
                vV(!1)
              }
            };
            return document.addEventListener("keydown", VV), () => {
              document.removeEventListener("keydown", VV)
            }
          }), [ZV]), (0, JV.useEffect)((() => () => {
            clearTimeout(BV.current)
          }), []), (0, JV.useLayoutEffect)((() => {
            if (!ZV || !pV.current || !QV.current) return void bV(null);
            const VV = pV.current.getBoundingClientRect(),
              eV = QV.current.offsetHeight,
              xV = Math.min(Xe, window.innerWidth - 32),
              JV = Math.min(Math.max(16, VV.left), window.innerWidth - xV - 16),
              YV = VV.bottom + Me + eV < window.innerHeight;
            bV({
              left: JV,
              top: YV ? VV.bottom + Me : Math.max(16, VV.top - Me - eV)
            })
          }), [ZV]), (0, kV.jsxs)(kV.Fragment, {
            children: [(0, kV.jsx)("button", {
              type: "button",
              ref: pV,
              className: "DocsTypeLink",
              "aria-expanded": ZV,
              "aria-describedby": ZV ? qV : void 0,
              onMouseEnter: tV,
              onMouseLeave: FV,
              onFocus: tV,
              onBlur: FV,
              onKeyDown: VV => {
                "Tab" === VV.key && !VV.shiftKey && wV.current && (VV.preventDefault(), wV.current.focus())
              },
              onClick: tV,
              children: eV
            }), ZV && (0, nV.createPortal)((0, kV.jsxs)("span", {
              ref: QV,
              id: qV,
              className: "DocsTypePopover",
              role: "tooltip",
              style: rV ? {
                left: rV.left,
                top: rV.top,
                maxWidth: Xe
              } : {
                visibility: "hidden"
              },
              onMouseEnter: tV,
              onMouseLeave: FV,
              onFocus: tV,
              onBlur: FV,
              children: [(0, kV.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, kV.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: eV
                }), UV && (0, kV.jsxs)(yV.b, {
                  ref: wV,
                  className: "DocsTypePopoverLink",
                  to: mV(YV, oV(UV)),
                  onClick: () => {
                    vV(!1)
                  },
                  onKeyDown: VV => {
                    if ("Tab" === VV.key) {
                      var eV;
                      if (VV.preventDefault(), VV.shiftKey || !pV.current || ! function(VV, eV) {
                          const xV = [...document.querySelectorAll(ze)],
                            JV = xV.slice(xV.indexOf(VV) + 1).find((VV => VV.getClientRects().length > 0 && !(null !== eV && void 0 !== eV && eV.contains(VV))));
                          return null === JV || void 0 === JV || JV.focus(), void 0 !== JV
                        }(pV.current, QV.current)) null === (eV = pV.current) || void 0 === eV || eV.focus();
                      VV.shiftKey || vV(!1)
                    }
                  },
                  children: [oV(UV).title, (0, kV.jsx)(EV, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, kV.jsx)(PV, {
                lang: "ts",
                code: xV,
                compact: !0
              })]
            }), null !== jV && void 0 !== jV ? jV : document.body)]
          })
        }
        var Re = xV(206),
          ge = xV(5261),
          De = xV(5264),
          ie = xV(5273);
        const Ce = {
          progressBar: {
            cJ: 30,
            hJ: .075,
            lJ: 5,
            LJ: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            fJ: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            KJ: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            HJ: !0,
            scale: 3,
            rotation: 15,
            uJ: !1
          },
          gravityBar: {
            cJ: 30,
            SJ: .25,
            IJ: 3,
            dJ: .8,
            gravity: 1,
            OJ: 1.5,
            VY: 8,
            eY: 4,
            LJ: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            JY: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            UY: 5,
            yY: 1200,
            pY: .15,
            QY: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var ae = xV(364),
          oe = xV(2130);

        function ce(VV) {
          return VV.startsWith("fa-")
        }
        const he = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          le = {
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

        function Le(VV) {
          return "string" === typeof VV ? "text" : "entityName" in VV || "translationKey" in VV ? "other" : (0, ae.wb)(VV) ? "progressBar" : (0, ae.vb)(VV) ? "keyBinding" : "icon" in VV ? "icon" : "str" in VV && "string" === typeof VV.str ? "text" : "other"
        }
        const fe = [{
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
          me = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...fe],
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
                options: oe.i
              },
              isRequired: !0
            }, ...fe],
            other: []
          };

        function Ke(VV) {
          return "string" === typeof VV ? {
            str: VV
          } : VV
        }

        function He(VV, eV) {
          let xV = Ke(VV);
          for (const JV of eV) xV = xV && "object" === typeof xV ? xV[JV] : void 0;
          return xV
        }

        function ue(VV, eV, xV) {
          const JV = (VV, YV) => {
            var UV;
            const yV = eV[YV],
              pV = {
                ...VV
              };
            if (YV === eV.length - 1) return void 0 === xV ? delete pV[yV] : pV[yV] = xV, pV;
            const QV = JV(null !== (UV = VV[yV]) && void 0 !== UV ? UV : {}, YV + 1);
            return 0 === Object.keys(QV).length ? delete pV[yV] : pV[yV] = QV, pV
          };
          return function(VV) {
            const eV = Object.keys(VV);
            return "string" === typeof VV.str && 1 === eV.length ? VV.str : VV
          }(JV(Ke(VV), 0))
        }

        function se(VV, eV) {
          const xV = Le(VV),
            JV = me[xV].find((VV => VV.path.join(".") === eV.join("."))),
            YV = null !== JV && void 0 !== JV && JV.isRequired && "other" !== xV ? He(le[xV], eV) : void 0;
          return ue(VV, eV, YV)
        }

        function Se(VV) {
          switch (Le(VV)) {
            case "text":
              return String(He(VV, ["str"]));
            case "icon":
              return String(He(VV, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(He(VV,["progress"])))}%`;
            case "keyBinding":
              return String(He(VV, ["action"]));
            case "other":
              return JSON.stringify(VV)
          }
        }
        const Ie = /^[A-Za-z_$][\w$]*$/;

        function de(VV) {
          if (Array.isArray(VV)) return `[${VV.map(de).join(", ")}]`;
          if (VV && "object" === typeof VV) {
            const eV = Object.entries(VV).map((VV => {
              let [eV, xV] = VV;
              return `${Ie.test(eV)?eV:JSON.stringify(eV)}: ${de(xV)}`
            }));
            return 0 === eV.length ? "{}" : `{ ${eV.join(", ")} }`
          }
          return JSON.stringify(VV)
        }

        function Oe(VV) {
          const eV = VV.map(de),
            xV = `[${eV.join(", ")}]`;
          return xV.length <= 60 ? xV : `[\n${eV.map((VV=>`    ${VV},`)).join("\n")}\n]`
        }
        const Vx = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function ex(VV) {
          let eV = "";
          for (let YV = 0; YV < VV.length; YV++) {
            const UV = VV[YV];
            if ("\\" === UV) {
              var xV;
              const JV = null !== (xV = VV[YV + 1]) && void 0 !== xV ? xV : "";
              eV += "'" === JV ? "'" : UV + JV, YV++
            } else if ('"' === UV) eV += '\\"';
            else {
              var JV;
              eV += null !== (JV = Vx[UV]) && void 0 !== JV ? JV : UV
            }
          }
          return `"${eV}"`
        }

        function xx(VV) {
          if ("string" === typeof VV) return !0;
          if (!VV || "object" !== typeof VV || Array.isArray(VV)) return !1;
          const eV = VV;
          return "ProgressBar" === eV.type ? "number" === typeof eV.progress : "StyledKeyBinding" === eV.type ? oe.i.includes(eV.action) : "string" === typeof eV.icon || "string" === typeof eV.str || "string" === typeof eV.entityName || "string" === typeof eV.translationKey
        }

        function Jx(VV) {
          let eV;
          try {
            eV = function(VV) {
              let eV = "",
                xV = "",
                JV = 0;
              const YV = () => {
                eV += xV.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), xV = ""
              };
              for (; JV < VV.length;) {
                const UV = VV.slice(JV).search(/["'`]|\/\//);
                if (-1 === UV) {
                  xV += VV.slice(JV);
                  break
                }
                xV += VV.slice(JV, JV + UV);
                const yV = JV + UV,
                  pV = VV[yV];
                if ("/" === pV) {
                  const eV = VV.indexOf("\n", yV);
                  JV = -1 === eV ? VV.length : eV;
                  continue
                }
                if (YV(), "`" === pV) throw new Error("Use quotes rather than template strings.");
                let QV = yV + 1;
                for (; QV < VV.length && VV[QV] !== pV;) QV += "\\" === VV[QV] ? 2 : 1;
                if (QV >= VV.length) throw new Error("A string is missing its closing quote.");
                const nV = VV.slice(yV + 1, QV);
                eV += ex(nV), JV = QV + 1
              }
              return YV(), JSON.parse(eV)
            }(VV.trim())
          } catch (JV) {
            return {
              parts: null,
              error: JV instanceof SyntaxError ? "This isn't a valid array yet." : JV.message
            }
          }
          if (!Array.isArray(eV)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const xV = eV.findIndex((VV => !xx(VV)));
          return -1 !== xV ? {
            parts: null,
            error: `Part ${xV+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: eV,
            error: null
          }
        }
        const Yx = 1 / Re.f.clientTicksPerSecond,
          Ux = 700,
          yx = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          px = {
            progressBar: Ce.progressBar.fJ,
            timedClick: Ce.timedClick.icon,
            gravityBar: Ce.gravityBar.icon,
            precisionBar: Ce.precisionBar.icon,
            rhythmClick: Ce.rhythmClick.icon
          };

        function Qx(VV) {
          let {
            type: eV
          } = VV;
          const [xV, YV] = (0, JV.useState)("ready"), [yV, pV] = (0, JV.useState)(1), [QV, nV] = (0, JV.useState)(!0), wV = (0, JV.useRef)(null), ZV = (0, JV.useRef)(null), vV = (0, JV.useRef)(null), rV = (0, JV.useRef)(new Set), bV = (0, JV.useRef)(!1), BV = px[eV], jV = (0, JV.useMemo)((() => ({
            getState: () => {
              var VV, eV;
              return null !== (VV = null === (eV = vV.current) || void 0 === eV ? void 0 : eV.getState()) && void 0 !== VV ? VV : yx
            },
            onFrame: VV => (rV.current.add(VV), () => {
              rV.current.delete(VV)
            })
          })), []);
          (0, JV.useEffect)((() => {
            const VV = wV.current,
              eV = ZV.current;
            if (!VV || !eV) return;
            const xV = new ResizeObserver((() => {
              pV(VV.clientWidth / Math.max(1, eV.offsetWidth))
            }));
            return xV.observe(VV), () => {
              xV.disconnect()
            }
          }), []), (0, JV.useEffect)((() => {
            var VV;
            if ("playing" !== xV) return;
            let JV = !1;
            const UV = new ie.g[eV](Ce[eV], (VV => {
              JV = !0, nV(!1), YV(VV ? "succeeded" : "failed")
            }), (() => {}));
            vV.current = UV;
            let yV = 0,
              pV = performance.now(),
              QV = requestAnimationFrame((function VV(eV) {
                for (yV += Math.min(.25, (eV - pV) / 1e3), pV = eV; yV >= Yx && !JV;) yV -= Yx, UV.handleTick(Yx);
                for (const xV of rV.current) xV();
                JV || (QV = requestAnimationFrame(VV))
              }));
            return null === (VV = wV.current) || void 0 === VV || VV.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(QV), UV.tearDown(), vV.current = null, bV.current = !1
            }
          }), [xV, eV]), (0, JV.useEffect)((() => {
            if (QV) return;
            const VV = setTimeout((() => {
              nV(!0)
            }), Ux);
            return () => {
              clearTimeout(VV)
            }
          }), [QV]);
          const qV = VV => {
            var eV;
            "playing" === xV && bV.current !== VV && (bV.current = VV, null === (eV = vV.current) || void 0 === eV || eV.handleMouseInput(VV))
          };
          return (0, kV.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, kV.jsxs)("div", {
              ref: wV,
              className: UV()("DocsQteStage", {
                Playing: "playing" === xV
              }),
              tabIndex: "playing" === xV ? 0 : -1,
              role: "playing" === xV ? "button" : void 0,
              "aria-label": "playing" === xV ? `${eV} quick time event: click or press Space` : void 0,
              onPointerDown: VV => {
                0 === VV.button && qV(!0)
              },
              onPointerUp: () => {
                qV(!1)
              },
              onPointerLeave: () => {
                qV(!1)
              },
              onPointerCancel: () => {
                qV(!1)
              },
              onKeyDown: VV => {
                "playing" !== xV || " " !== VV.key && "Enter" !== VV.key || (VV.preventDefault(), qV(!0))
              },
              onKeyUp: VV => {
                "playing" !== xV || " " !== VV.key && "Enter" !== VV.key || qV(!1)
              },
              children: [(0, kV.jsx)("div", {
                ref: ZV,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${yV})`
                },
                children: "playing" === xV && (0, kV.jsx)(De.d.Provider, {
                  value: jV,
                  children: (0, kV.jsx)(ge.b, {
                    qte: {
                      type: eV,
                      parameters: Ce[eV]
                    }
                  })
                })
              }), "playing" !== xV && (0, kV.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== xV && (0, kV.jsxs)("div", {
                  className: UV()("DocsQteResult", "succeeded" === xV ? "Succeeded" : "Failed"),
                  children: [(0, kV.jsx)(EV, {
                    name: "succeeded" === xV ? "check" : "cross",
                    isTinted: !0
                  }), (0, kV.jsx)("span", {
                    children: "succeeded" === xV ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, kV.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !QV,
                  onClick: () => {
                    YV("playing")
                  },
                  children: [(0, kV.jsx)(EV, {
                    name: "ready" === xV ? "play" : "replay"
                  }), (0, kV.jsx)("span", {
                    children: "ready" === xV ? `Try ${eV}` : "Play again"
                  })]
                })]
              })]
            }), BV && !ce(BV) && (0, kV.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, kV.jsx)("code", {
                children: BV
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function nx(VV) {
          let {
            level: eV,
            text: xV,
            anchor: JV,
            className: YV
          } = VV;
          const yV = `h${Math.min(eV,6)}`;
          return (0, kV.jsxs)(yV, {
                id: JV,
                className: UV()("DocsHeading", YV),
                children: [(0, kV.jsx)(Te, {
                      text: xV
                    }), (0, kV.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${JV}`,
                        "aria-label": `Link to ${xV.replace(/`/g,"")}`,children:"#"})]})}function wx(VV){let{items:eV,ordered:xV}=VV;const JV=xV?"ol":"ul";return(0,kV.jsx)(JV,{className:"DocsList",children:eV.map(((VV,eV)=>(0,kV.jsxs)("li",{children:[(0,kV.jsx)(Te,{text:VV.text}),VV.children.length>0&&(0,kV.jsx)(wx,{items:VV.children,ordered:xV})]},eV)))})}function Zx(VV){const eV=VV[0],xV="paragraph"===(null===eV||void 0===eV?void 0:eV.kind)?eV.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(xV)?"warning":/^\*\*(tip|prefer)/.test(xV)?"tip":"note"}function vx(VV){let{block:eV}=VV;switch(eV.kind){case"heading":return(0,kV.jsx)(nx,{level:eV.level,text:eV.text,anchor:eV.anchor});case"paragraph":return(0,kV.jsx)("p",{children:(0,kV.jsx)(Te,{text:eV.text})});case"code":{const VV="ts"===eV.lang?function(VV){const eV=VV.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return eV&&Object.hasOwn(Ce,eV[1])?eV[1]:null}(eV.code):null;return(0,kV.jsxs)(kV.Fragment,{children:[(0,kV.jsx)(PV,{code:eV.code,lang:eV.lang}),VV&&(0,kV.jsx)(Qx,{type:VV})]})}case"table":return(0,kV.jsx)("div",{className:"DocsTableScroll",children:(0,kV.jsxs)("table",{className:"DocsTable",children:[(0,kV.jsx)("thead",{children:(0,kV.jsx)("tr",{children:eV.header.map(((VV,eV)=>(0,kV.jsx)("th",{children:(0,kV.jsx)(Te,{text:VV})},eV)))})}),(0,kV.jsx)("tbody",{children:eV.rows.map(((VV,eV)=>(0,kV.jsx)("tr",{children:VV.map(((VV,eV)=>(0,kV.jsx)("td",{children:(0,kV.jsx)(Te,{text:VV})},eV)))},eV)))})]})});case"list":return(0,kV.jsx)(wx,{items:eV.items,ordered:eV.ordered});case"quote":return(0,kV.jsx)("aside",{className:UV()("DocsCallout",Zx(eV.blocks)),children:(0,kV.jsx)(rx,{blocks:eV.blocks})});case"rule":return(0,kV.jsx)("hr",{className:"DocsRule"})}}function rx(VV){let{blocks:eV}=VV;return(0,kV.jsx)(kV.Fragment,{children:eV.map(((VV,eV)=>(0,kV.jsx)(vx,{block:VV},eV)))})}var kx=xV(5252),bx=xV(5255);function Ex(VV){return"blocks"===VV||"items"===VV}const Bx=new Map;function jx(VV){let eV=Bx.get(VV);return eV||(eV=function(VV){const eV={entries:[],legend:[],notes:[],examples:[]};let xV=!1;for(const UV of VV.split(/\r?\n/).slice(1)){if(UV.startsWith("#")){const VV=UV.replace(/^# ?/,""),JV=VV.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);JV?eV.legend.push({code:JV[1],meaning:JV[2],usage:JV[3].trim()}):/^Examples:/.test(VV.trim())?xV=!0:xV&&VV.trim()?eV.examples.push(VV.trim()):VV.trim()&&!/^\s/.test(VV)&&eV.notes.push(VV.trim());continue}const VV=UV.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var JV,YV;VV&&eV.entries.push({name:VV[1],variants:null!==(JV=null===(YV=VV[2])||void 0===YV?void 0:YV.split(","))&&void 0!==JV?JV:[]})}return eV}("blocks"===VV?kx:bx),Bx.set(VV,eV)),eV}function qx(VV){let{className:eV,value:xV,placeholder:JV,label:YV,onChange:UV,count:yV,children:pV}=VV;return(0,kV.jsxs)("div",{className:eV,children:[(0,kV.jsx)(EV,{name:"magnifying-glass"}),(0,kV.jsx)("input",{type:"search",value:xV,placeholder:JV,"aria-label":YV,onChange:VV=>{UV(VV.target.value)}}),pV,yV&&(0,kV.jsxs)("span",{className:"DocsFilterCount",children:[yV.visible," of ",yV.total]})]})}var tx=xV(1414);function Fx(VV){const eV=VV.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return eV?eV[2]:null}function Tx(VV){return"paragraph"===VV.kind&&""===VV.text.trim()}function Px(VV){const eV={name:VV.heading.text,description:[],params:[],returns:null};let xV="description";for(const YV of VV.blocks)if(!Tx(YV))if("heading"===YV.kind&&/^Parameters:?$/.test(YV.text))xV="params";else if("heading"===YV.kind&&/^Returns:?$/.test(YV.text))xV="returns",eV.returns={type:"",description:[]};else if("params"!==xV||"table"!==YV.kind){if("returns"===xV&&"paragraph"===YV.kind&&""===eV.returns.type){const VV=Fx(YV.text);if(null!==VV){eV.returns.type=VV.replaceAll("\\|","|");continue}}"returns"===xV?eV.returns.description.push(YV):eV.description.push(YV)}else for(const[VV,xV,UV]of YV.rows){var JV;eV.params.push({name:VV,type:null!==(JV=Fx(xV))&&void 0!==JV?JV:xV,description:null!==UV&&void 0!==UV?UV:""})}return eV}const Ax=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function Nx(VV){return VV.filter((VV=>!Tx(VV)))}const Xx=/^[\w][\w .'&!:()-]*$/,Mx=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function zx(VV){var eV;if("code"===VV.kind&&"text"===VV.lang){const eV=VV.code.split("\n").map((VV=>VV.trim())).filter(Boolean);return eV.length>0&&eV.every((VV=>Xx.test(VV)))?eV.map((VV=>({name:VV}))):null}return"paragraph"===VV.kind&&Mx.test(VV.text.trim())?[...VV.text.matchAll(/`([ ^ `]+)` / g)].flatMap((VV => VV[1].split(/,\s*/).map((VV => ({
                              name: VV.trim()
                            }))))): "table" === VV.kind && null !== (eV = VV.header[0]) && void 0 !== eV && eV.startsWith("Song") ? VV.rows.map((VV => {
                              let [eV, xV] = VV;
                              return {
                                name: eV.replace(/`/g, ""),
                                caption: xV
                              }
                            })) : null
                          }

                          function Gx(VV) {
                            const eV = [];
                            for (const xV of VV) {
                              const VV = zx(xV),
                                JV = eV.at(-1),
                                YV = "table" === xV.kind;
                              VV ? "names" === (null === JV || void 0 === JV ? void 0 : JV.kind) && JV.isSongs === YV ? JV.names.push(...VV) : eV.push({
                                kind: "names",
                                names: VV,
                                isSongs: YV
                              }) : eV.push({
                                kind: "block",
                                block: xV
                              })
                            }
                            return eV
                          }
                          const Wx = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function Rx(VV, eV) {
                            return `${Wx[VV]}-${(0,AV.w)(eV)}`
                          }
                          const gx = new WeakMap;

                          function Dx(VV, eV, xV) {
                            let JV = gx.get(eV);
                            if (!JV) {
                              JV = new Map;
                              const xV = new Set;
                              for (const YV of (0, AV.A)(eV)) {
                                const eV = Gx(Nx(YV.blocks)).map((eV => {
                                  if ("block" === eV.kind) return eV;
                                  return {
                                    kind: "names",
                                    names: eV.names.map((eV => {
                                      var JV, UV;
                                      const yV = Rx(VV, eV.name);
                                      let pV = yV;
                                      for (let VV = 2; xV.has(pV); VV++) pV = `${yV}-${VV}`;
                                      return xV.add(pV), {
                                        ...eV,
                                        anchor: pV,
                                        heading: null !== (JV = null === (UV = YV.heading) || void 0 === UV ? void 0 : UV.text) && void 0 !== JV ? JV : ""
                                      }
                                    })),
                                    isSongs: eV.isSongs
                                  }
                                }));
                                JV.set(YV.blocks, eV)
                              }
                              gx.set(eV, JV)
                            }
                            const YV = JV.get(xV);
                            if (!YV) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return YV
                          }
                          const ix = "/textures/docs/skinPreviews",
                            Cx = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var ax = xV(4628),
                            ox = xV(4642);

                          function cx(VV) {
                            return Object.hasOwn(ax.e, VV) ? ax.e[VV] : null
                          }
                          const hx = {
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
                            blendMode: ox.g.Standard
                          };

                          function lx(VV, eV, xV) {
                            return eV + (xV - eV) * VV()
                          }

                          function Lx(VV, eV, xV) {
                            return VV + (eV - VV) * xV
                          }

                          function fx(VV) {
                            return VV.length > 0 && "timeFraction" in VV[0]
                          }

                          function mx(VV, eV) {
                            if (0 === VV.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!fx(VV.colorGradients)) {
                              const xV = VV.colorGradients,
                                {
                                  color: JV
                                } = xV[Math.floor(eV() * xV.length) % xV.length];
                              return [{
                                at: 0,
                                colour: [JV[0] / 255, JV[1] / 255, JV[2] / 255, 1]
                              }]
                            }
                            return [...VV.colorGradients].sort(((VV, eV) => VV.timeFraction - eV.timeFraction)).map((VV => {
                              var xV, JV, YV;
                              const UV = VV.minColor,
                                yV = null !== (xV = VV.maxColor) && void 0 !== xV ? xV : UV,
                                pV = eV(),
                                QV = [Lx(UV[0], yV[0], pV) / 255, Lx(UV[1], yV[1], pV) / 255, Lx(UV[2], yV[2], pV) / 255, Lx(null !== (JV = UV[3]) && void 0 !== JV ? JV : 1, null !== (YV = yV[3]) && void 0 !== YV ? YV : 1, pV)];
                              return {
                                at: VV.timeFraction,
                                colour: QV
                              }
                            }))
                          }

                          function Kx(VV, eV, xV, JV) {
                            const YV = lx(JV, VV.minEmitPower, VV.maxEmitPower),
                              UV = eV => lx(JV, Math.min(VV.dir1[eV], VV.dir2[eV]), Math.max(VV.dir1[eV], VV.dir2[eV])) * YV,
                              yV = [...VV.velocityGradients].sort(((VV, eV) => VV.timeFraction - eV.timeFraction)).map((VV => ({
                                at: VV.timeFraction,
                                factor: lx(JV, VV.factor, VV.factor2)
                              })));
                            return {
                              pos: [lx(JV, eV[0], xV[0]), lx(JV, eV[1], xV[1]), lx(JV, eV[2], xV[2])],
                              dir: [UV(0), UV(1), UV(2)],
                              age: 0,
                              life: lx(JV, VV.minLifeTime, VV.maxLifeTime),
                              size: lx(JV, VV.minSize, VV.maxSize),
                              colours: mx(VV, JV),
                              velocityFactors: yV
                            }
                          }

                          function Hx(VV, eV, xV, JV) {
                            if (eV < VV[0].at) return xV(Math.min(1, VV.length - 1));
                            for (let YV = 0; YV < VV.length - 1; YV++)
                              if (eV <= VV[YV + 1].at) {
                                const UV = VV[YV + 1].at - VV[YV].at;
                                return JV(xV(YV), xV(YV + 1), UV > 0 ? (eV - VV[YV].at) / UV : 1)
                              } return xV(VV.length - 1)
                          }

                          function ux(VV) {
                            return Hx(VV.colours, VV.age / VV.life, (eV => VV.colours[eV].colour), ((VV, eV, xV) => [Lx(VV[0], eV[0], xV), Lx(VV[1], eV[1], xV), Lx(VV[2], eV[2], xV), Lx(VV[3], eV[3], xV)]))
                          }

                          function sx(VV, eV, xV) {
                            if (VV.age += xV, VV.age >= VV.life) return !1;
                            const JV = function(VV) {
                              return 0 === VV.velocityFactors.length ? 1 : Hx(VV.velocityFactors, VV.age / VV.life, (eV => VV.velocityFactors[eV].factor), Lx)
                            }(VV) * xV;
                            for (let UV = 0; UV < 3; UV++) {
                              var YV;
                              VV.pos[UV] += VV.dir[UV] * JV, VV.dir[UV] += (null !== (YV = eV[UV]) && void 0 !== YV ? YV : 0) * xV
                            }
                            return !0
                          }

                          function Sx(VV) {
                            return String(Math.round(1e6 * VV) / 1e6)
                          }

                          function Ix(VV) {
                            return `[${VV.map(Sx).join(", ")}]`
                          }

                          function dx(VV, eV) {
                            const xV = `${eV}    `;
                            return `[\n${(fx(VV)?VV.map((VV=>{const eV=[`${xV}    timeFraction: ${Sx(VV.timeFraction)},`,`${xV}    minColor: ${Ix(VV.minColor)},`];return VV.maxColor&&eV.push(`${xV}    maxColor: ${Ix(VV.maxColor)},`),`${xV}{\n${eV.join("\n")}\n${xV}},`})):VV.map((VV=>`
                            $ {
                              xV
                            } {
                              color: $ {
                                Ix(VV.color)
                              }
                            }, `))).join("\n")}\n${eV}]`
                          }
                          const Ox = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            VJ = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const eJ = .6;

                          function xJ(VV, eV) {
                            return `${eV?"song":"sound"}:${VV}`
                          }
                          let JJ = {
                              track: null,
                              volume: eJ
                            },
                            YJ = null,
                            UJ = 0,
                            yJ = 0;
                          const pJ = new Set;

                          function QJ(VV) {
                            JJ = {
                              ...JJ,
                              ...VV
                            }, pJ.forEach((VV => {
                              VV()
                            }))
                          }

                          function nJ(VV) {
                            JJ.track && QJ({
                              track: {
                                ...JJ.track,
                                ...VV
                              }
                            })
                          }

                          function wJ(VV) {
                            const [eV, xV] = (0, JV.useState)((() => VV(JJ))), YV = (0, JV.useRef)(VV);
                            return YV.current = VV, (0, JV.useEffect)((() => {
                              const VV = () => {
                                xV((() => YV.current(JJ)))
                              };
                              return pJ.add(VV), VV(), () => {
                                pJ.delete(VV)
                              }
                            }), []), eV
                          }

                          function ZJ() {
                            UJ++;
                            const VV = YJ;
                            YJ = null, null === VV || void 0 === VV || VV.stop()
                          }

                          function vJ(VV, eV) {
                            let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            ZJ();
                            const YV = UJ,
                              {
                                track: UV
                              } = JJ,
                              yV = UV && UV.name === VV && UV.isSong === eV ? UV.duration : 0;
                            yJ = JV, QJ({
                              track: {
                                name: VV,
                                isSong: eV,
                                status: "loading",
                                duration: yV
                              }
                            }), Promise.all([xV.e(245), xV.e(274)]).then((() => xV(41053))).then((xV => {
                              let {
                                playDocsSound: UV
                              } = xV;
                              YV === UJ && (YJ = UV(VV, eV, JJ.volume, JV, {
                                onPlay: VV => {
                                  YV === UJ && nJ({
                                    status: "playing",
                                    duration: VV
                                  })
                                },
                                onEnd: VV => {
                                  var eV, xV;
                                  YV === UJ && (YJ = null, VV ? QJ({
                                    track: null
                                  }) : (yJ = null !== (eV = null === (xV = JJ.track) || void 0 === xV ? void 0 : xV.duration) && void 0 !== eV ? eV : 0, nJ({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((eV => {
                              console.error(`Could not play docs sound ${VV}`, eV), YV === UJ && QJ({
                                track: null
                              })
                            }))
                          }

                          function rJ() {
                            const {
                              track: VV
                            } = JJ;
                            if (!VV) return;
                            if ("playing" === VV.status && YJ) return yJ = YJ.YF(), YJ.pause(), void nJ({
                              status: "paused"
                            });
                            if ("loading" === VV.status) return ZJ(), void nJ({
                              status: "paused"
                            });
                            if (YJ) return void YJ.resume();
                            const eV = VV.duration > 0 && yJ >= VV.duration - .05;
                            vJ(VV.name, VV.isSong, eV ? 0 : yJ)
                          }

                          function kJ() {
                            var VV;
                            return YJ && "playing" === (null === (VV = JJ.track) || void 0 === VV ? void 0 : VV.status) ? YJ.YF() : yJ
                          }

                          function bJ(VV) {
                            var eV;
                            null === (eV = YJ) || void 0 === eV || eV.setVolume(VV), QJ({
                              volume: VV
                            })
                          }

                          function EJ() {
                            ZJ(), yJ = 0, QJ({
                              track: null
                            })
                          }
                          const BJ = (0, JV.createContext)(null);
                          let jJ = null;

                          function qJ() {
                            const [VV, eV] = (0, JV.useState)(null);
                            return (0, JV.useEffect)((() => {
                              let VV = !1;
                              return jJ ??= Promise.all([xV.e(84), xV.e(87), xV.e(85), xV.e(86), xV.e(202), xV.e(113), xV.e(249)]).then((() => xV(41047))), jJ.then((xV => {
                                VV || eV(xV)
                              }), (VV => {
                                console.error("Could not load the docs gallery's textures", VV), jJ = null
                              })), () => {
                                VV = !0
                              }
                            }), []), VV
                          }
                          const tJ = 24,
                            FJ = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function TJ(VV, eV) {
                            const xV = "skins" === VV ? function(VV, eV) {
                              const xV = Cx.find((eV => VV.startsWith(eV.heading)));
                              return xV ? function(VV, eV) {
                                return `${VV}-${eV}`
                              }(xV.prefix, eV) : null
                            }(eV.heading, eV.name) : null;
                            return null === xV ? null : `${ix}/${xV}.webp`
                          }

                          function PJ(VV) {
                            let {
                              kind: eV,
                              entry: xV,
                              assets: YV,
                              renderedUrl: yV
                            } = VV;
                            const {
                              name: pV
                            } = xV, [QV, nV] = (0, JV.useState)(!1);
                            if ("icons" === eV && ce(pV)) return (0, kV.jsx)(tx.b, {
                              className: "DocsTileIcon",
                              name: pV
                            });
                            let wV = null;
                            var ZV;
                            if ("icons" === eV) wV = null !== (ZV = null === YV || void 0 === YV ? void 0 : YV.getIngameIconUrl(pV)) && void 0 !== ZV ? ZV : null;
                            else if ("particles" === eV) {
                              var vV, rV, bV;
                              wV = null !== (vV = null === YV || void 0 === YV ? void 0 : YV.getParticleTextureUrl(null !== (rV = null === (bV = cx(pV)) || void 0 === bV ? void 0 : bV.texture) && void 0 !== rV ? rV : pV)) && void 0 !== vV ? vV : null
                            } else "skins" === eV && (wV = null !== yV && void 0 !== yV ? yV : FJ.test(pV) ? `/textures/charSkins/previews/${pV}_preview.png` : null);
                            return !wV || QV ? (0, kV.jsx)(EV, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === eV ? "person" : "image"
                            }) : (0, kV.jsx)("img", {
                              className: UV()("DocsTileImage", {
                                Pixelated: "skins" !== eV
                              }),
                              src: wV,
                              srcSet: wV === yV ? `${wV} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${wV}`), nV(!0)
                              }
                            })
                          }

                          function AJ(VV) {
                            let {
                              entry: eV,
                              isSong: xV
                            } = VV;
                            const JV = wJ((VV => {
                                let {
                                  track: JV
                                } = VV;
                                return (null === JV || void 0 === JV ? void 0 : JV.name) === eV.name && JV.isSong === xV ? JV.status : null
                              })),
                              YV = null !== JV && "paused" !== JV;
                            return (0, kV.jsxs)("button", {
                              type: "button",
                              id: eV.anchor,
                              className: UV()("DocsSoundTile", {
                                Playing: YV
                              }),
                              "data-docs-track": xJ(eV.name, xV),
                              "aria-label": YV ? `Pause ${eV.name}` : `Play ${eV.name}`,
                              onClick: () => {
                                null !== JV ? rJ() : vJ(eV.name, xV)
                              },
                              children: [(0, kV.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, kV.jsx)(EV, {
                                  name: YV ? "pause" : "play"
                                })
                              }), (0, kV.jsx)("code", {
                                className: "DocsSoundName",
                                children: eV.name
                              }), eV.caption && (0, kV.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: eV.caption
                              })]
                            })
                          }

                          function NJ(VV) {
                            let {
                              kind: eV,
                              names: xV,
                              isSongs: YV
                            } = VV;
                            const yV = qJ(),
                              [pV, QV] = jV(),
                              nV = !1 === (null === pV || void 0 === pV ? void 0 : pV.failed) ? pV.text : null,
                              wV = (0, JV.useContext)(BJ),
                              [ZV, vV] = (0, JV.useState)(""),
                              rV = ZV.trim().toLowerCase(),
                              bV = rV ? xV.filter((VV => VV.name.toLowerCase().includes(rV))) : xV;
                            return (0, kV.jsxs)("div", {
                              className: "DocsGallery",
                              children: [xV.length > tJ && (0, kV.jsx)(qx, {
                                className: "DocsGalleryFilter",
                                value: ZV,
                                placeholder: `Filter ${xV.length} names\u2026`,
                                label: "Filter names",
                                onChange: vV,
                                count: rV ? {
                                  visible: bV.length,
                                  total: xV.length
                                } : null
                              }), (0, kV.jsx)("div", {
                                className: UV()("DocsGalleryGrid", `Kind-${eV}`, {
                                  Songs: YV
                                }),
                                children: bV.map((VV => {
                                  if ("sounds" === eV) return (0, kV.jsx)(AJ, {
                                    entry: VV,
                                    isSong: YV
                                  }, VV.anchor);
                                  if (wV && "particles" === eV && cx(VV.name)) return (0, kV.jsxs)("button", {
                                    type: "button",
                                    id: VV.anchor,
                                    className: UV()("DocsTile Previewable", {
                                      Copied: nV === VV.name
                                    }),
                                    title: `Play "${VV.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      wV(VV.name), QV(VV.name)
                                    },
                                    children: [(0, kV.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, kV.jsx)(PJ, {
                                        kind: eV,
                                        entry: VV,
                                        assets: yV,
                                        renderedUrl: null
                                      }), (0, kV.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, kV.jsx)(EV, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, kV.jsx)("span", {
                                      className: "DocsTileName",
                                      children: nV === VV.name ? "Copied!" : VV.name
                                    })]
                                  }, VV.anchor);
                                  const xV = TJ(eV, VV);
                                  return (0, kV.jsxs)("button", {
                                    type: "button",
                                    id: VV.anchor,
                                    className: UV()("DocsTile", {
                                      Copied: nV === VV.name
                                    }),
                                    title: `Copy "${VV.name}"`,
                                    onClick: () => {
                                      QV(VV.name)
                                    },
                                    children: [(0, kV.jsx)("span", {
                                      className: UV()("DocsTilePreview", {
                                        Rendered: null !== xV
                                      }),
                                      children: (0, kV.jsx)(PJ, {
                                        kind: eV,
                                        entry: VV,
                                        assets: yV,
                                        renderedUrl: xV
                                      })
                                    }), (0, kV.jsx)("span", {
                                      className: "DocsTileName",
                                      children: nV === VV.name ? "Copied!" : VV.name
                                    })]
                                  }, VV.anchor)
                                }))
                              })]
                            })
                          }

                          function XJ(VV) {
                            let {
                              kind: eV,
                              content: xV,
                              blocks: JV
                            } = VV;
                            return (0, kV.jsx)(kV.Fragment, {
                              children: Dx(eV, xV, JV).map(((VV, xV) => "block" === VV.kind ? (0, kV.jsx)(vx, {
                                block: VV.block
                              }, xV) : (0, kV.jsx)(NJ, {
                                kind: eV,
                                names: VV.names,
                                isSongs: VV.isSongs
                              }, xV)))
                            })
                          }
                          const MJ = [{
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

                          function zJ(VV) {
                            let {
                              cards: eV = MJ,
                              label: xV = "Start here"
                            } = VV;
                            const YV = (0, JV.useContext)(re);
                            return (0, kV.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": xV,
                              children: eV.map((VV => {
                                let {
                                  pageId: eV,
                                  countNoun: xV
                                } = VV;
                                const JV = oV(eV);
                                return (0, kV.jsxs)(yV.b, {
                                  to: mV(YV, JV),
                                  className: "DocsLandingCard",
                                  children: [(0, kV.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, kV.jsx)(EV, {
                                      name: JV.icon
                                    })
                                  }), (0, kV.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: JV.title
                                  }), (0, kV.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: JV.summary
                                  }), xV && (0, kV.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [hV(JV).sections.length, " ", xV]
                                  })]
                                }, eV)
                              }))
                            })
                          }
                          const GJ = 240;

                          function WJ(VV) {
                            let {
                              faces: eV
                            } = VV;
                            return (0, kV.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, kV.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${eV.top}")`
                                }
                              }), (0, kV.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${eV.left}")`
                                }
                              }), (0, kV.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${eV.right}")`
                                }
                              })]
                            })
                          }

                          function RJ(VV) {
                            let {
                              src: eV
                            } = VV;
                            const [xV, YV] = (0, JV.useState)(!1);
                            return xV ? null : (0, kV.jsx)("img", {
                              src: eV,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${eV}`), YV(!0)
                              }
                            })
                          }

                          function gJ(VV) {
                            let {
                              kind: eV
                            } = VV;
                            const xV = jx(eV),
                              YV = qJ(),
                              yV = (0, pV.r)(),
                              [QV, nV] = (0, JV.useState)(""),
                              [wV, ZV] = (0, JV.useState)(null),
                              [vV, rV] = (0, JV.useState)(GJ),
                              [bV, BV] = (0, JV.useState)(null),
                              jV = (0, JV.useRef)(null),
                              tV = QV.trim().toLowerCase();
                            (0, JV.useEffect)((() => {
                              const VV = (0, AV.v)(yV.hash),
                                JV = xV.entries.find((xV => Rx(eV, xV.name) === VV));
                              if (JV) jV.current = JV.name, nV(JV.name), ZV(null), BV(JV.name);
                              else if (null !== jV.current) {
                                const VV = jV.current;
                                jV.current = null, nV((eV => eV === VV ? "" : eV)), BV(null)
                              }
                            }), [xV, eV, yV.hash, yV.key]), (0, JV.useEffect)((() => {
                              var VV;
                              null !== bV && (null === (VV = document.getElementById(Rx(eV, bV))) || void 0 === VV || VV.scrollIntoView({
                                block: "center"
                              }))
                            }), [eV, bV]);
                            const FV = xV.entries.filter((VV => (!tV || VV.name.toLowerCase().includes(tV)) && (!wV || VV.variants.includes(wV))));
                            return (0, kV.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [xV.notes.length > 0 && (0, kV.jsx)("div", {
                                className: "DocsProse",
                                children: xV.notes.map((VV => (0, kV.jsx)("p", {
                                  children: VV
                                }, VV)))
                              }), xV.legend.length > 0 && (0, kV.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, kV.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, kV.jsx)("thead", {
                                    children: (0, kV.jsxs)("tr", {
                                      children: [(0, kV.jsx)("th", {
                                        children: "Code"
                                      }), (0, kV.jsx)("th", {
                                        children: "Variant"
                                      }), (0, kV.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, kV.jsx)("tbody", {
                                    children: xV.legend.map((VV => (0, kV.jsxs)("tr", {
                                      children: [(0, kV.jsx)("td", {
                                        children: (0, kV.jsx)("button", {
                                          type: "button",
                                          className: UV()("DocsVariantChip", {
                                            Active: wV === VV.code
                                          }),
                                          "aria-pressed": wV === VV.code,
                                          title: `Show only ${eV} with ${VV.meaning} variants`,
                                          onClick: () => {
                                            ZV(wV === VV.code ? null : VV.code)
                                          },
                                          children: VV.code
                                        })
                                      }), (0, kV.jsx)("td", {
                                        children: VV.meaning
                                      }), (0, kV.jsx)("td", {
                                        children: (0, kV.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: VV.usage
                                        })
                                      })]
                                    }, VV.code)))
                                  })]
                                })
                              }), xV.examples.length > 0 && (0, kV.jsx)(PV, {
                                lang: "text",
                                code: xV.examples.join("\n")
                              }), (0, kV.jsx)(qx, {
                                className: "DocsFilterBar",
                                value: QV,
                                placeholder: `Search ${xV.entries.length} ${eV}\u2026`,
                                label: `Search ${eV}`,
                                onChange: VV => {
                                  nV(VV), rV(GJ)
                                },
                                count: tV || wV ? {
                                  visible: FV.length,
                                  total: xV.entries.length
                                } : null,
                                children: wV && (0, kV.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    ZV(null)
                                  },
                                  children: [wV, " ", (0, kV.jsx)(EV, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, kV.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: FV.slice(0, vV).map((VV => {
                                  const xV = "blocks" === eV ? null === YV || void 0 === YV ? void 0 : YV.getBlockFaces(VV.name) : null,
                                    JV = YV && !xV ? YV.getItemTextureUrl(VV.name) : null;
                                  return (0, kV.jsxs)("div", {
                                    id: Rx(eV, VV.name),
                                    className: UV()("DocsCatalogueTile", {
                                      Linked: VV.name === bV
                                    }),
                                    children: [(0, kV.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [xV && (0, kV.jsx)(WJ, {
                                        faces: xV
                                      }), JV && (0, kV.jsx)(RJ, {
                                        src: JV
                                      })]
                                    }), (0, kV.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: VV.name
                                    }), VV.variants.length > 0 && (0, kV.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: VV.variants.map((VV => (0, kV.jsx)("span", {
                                        children: VV
                                      }, VV)))
                                    }), (0, kV.jsx)(qV, {
                                      text: VV.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, VV.name)
                                }))
                              }), FV.length > vV && (0, kV.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  rV(FV.length)
                                },
                                children: ["Show all ", FV.length]
                              }), 0 === FV.length && (0, kV.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", eV, " match."]
                              })]
                            })
                          }
                          var DJ = xV(5323),
                            iJ = xV(1682);
                          const CJ = .95 * DJ.b;

                          function aJ(VV) {
                            return /^\s*```/.test(VV)
                          }

                          function oJ(VV, eV) {
                            const xV = [
                              []
                            ];
                            let JV = !1;
                            for (const YV of VV.split("\n")) !JV && eV(YV) && xV.at(-1).length > 0 && xV.push([]), aJ(YV) && (JV = !JV), xV.at(-1).push(YV);
                            return xV.map((VV => VV.join("\n").trim())).filter(Boolean)
                          }

                          function cJ(VV, eV) {
                            const xV = `${"#".repeat(eV)} `,
                              JV = [];
                            let YV = !1;
                            for (const UV of VV.split("\n")) aJ(UV) ? YV = !YV : !YV && UV.startsWith(xV) && JV.push(UV.slice(xV.length).trim());
                            return JV
                          }

                          function hJ(VV) {
                            return VV.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class lJ {
                            constructor(VV, eV) {
                              this.origin = eV, this.pages = void 0, this.partPaths = new Map;
                              const xV = VV.map((VV => {
                                const eV = eV => this.resolveLinks(VV, eV).length,
                                  xV = function(VV, eV) {
                                    const xV = VV.map((VV => eV(VV.markdown) + 2)),
                                      JV = xV.reduce(((VV, eV) => VV + eV), 0),
                                      YV = JV / Math.ceil(JV / CJ),
                                      UV = [];
                                    let yV = 0;
                                    return VV.forEach(((VV, eV) => {
                                      const JV = xV[eV];
                                      (0 === UV.length || yV + JV > CJ || yV + JV / 2 > YV) && (UV.push([]), yV = 0), UV.at(-1).push(VV), yV += JV
                                    })), UV
                                  }(function(VV, eV) {
                                    return oJ(VV, (VV => VV.startsWith("## "))).flatMap((VV => {
                                      var xV;
                                      const JV = null !== (xV = cJ(VV, 2)[0]) && void 0 !== xV ? xV : "";
                                      if (eV(VV) <= CJ) return [{
                                        markdown: VV,
                                        section: JV
                                      }];
                                      let YV = !1,
                                        UV = "";
                                      return oJ(VV, (VV => {
                                        const eV = YV && "" !== VV.trim();
                                        return YV = "" === VV.trim(), eV
                                      })).map((VV => {
                                        var eV;
                                        const xV = cJ(VV, 3),
                                          YV = VV.startsWith("### ") ? xV[0] : UV;
                                        return UV = null !== (eV = xV.at(-1)) && void 0 !== eV ? eV : UV, {
                                          markdown: VV,
                                          section: JV || YV
                                        }
                                      }))
                                    }))
                                  }(hJ(VV), eV), eV);
                                return {
                                  page: VV,
                                  groups: xV.length > 1 ? xV : []
                                }
                              }));
                              for (const {
                                  page: JV,
                                  groups: YV
                                }
                                of xV) YV.forEach(((VV, eV) => {
                                const xV = (0, DJ.w)(JV.slug, eV);
                                for (const YV of VV.flatMap((VV => [...cJ(VV.markdown, 2), ...cJ(VV.markdown, 3)]))) {
                                  const VV = `${JV.id}#${(0,AV.w)(YV)}`;
                                  this.partPaths.has(VV) || this.partPaths.set(VV, xV)
                                }
                              }));
                              this.pages = xV.map((VV => {
                                let {
                                  page: eV,
                                  groups: xV
                                } = VV;
                                return {
                                  page: eV,
                                  path: (0, DJ.u)(eV.slug),
                                  markdown: `# ${eV.title}\n\n${this.resolveLinks(eV,hJ(eV))}\n`,
                                  parts: xV.map(((VV, JV) => this.renderPart(eV, VV, JV, xV.length)))
                                }
                              }))
                            }
                            url(VV) {
                              return `${this.origin}${VV}`
                            }
                            getPage(VV) {
                              return this.pages.find((eV => eV.page.id === VV))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((VV => (VV.parts.length > 0 ? VV.parts : [{
                                path: VV.path,
                                label: "",
                                markdown: VV.markdown
                              }]).filter((VV => VV.markdown.length > DJ.b))))
                            }
                            markdownUrl(VV, eV) {
                              const xV = eV && this.partPaths.get(`${VV.id}#${eV}`) || (0, DJ.u)(VV.slug);
                              return this.url(eV ? `${xV}#${eV}` : xV)
                            }
                            resolveLinks(VV, eV) {
                              return eV.replace(/\]\((#[^)]+)\)/g, ((eV, xV) => {
                                var JV;
                                const YV = null !== (JV = LV(xV)) && void 0 !== JV ? JV : this.samePageTarget(VV, xV);
                                return YV ? `](${this.markdownUrl(YV.page,YV.anchor)})` : eV
                              }))
                            }
                            samePageTarget(VV, eV) {
                              const xV = (0, AV.w)(eV.slice(1));
                              return lV(VV, xV) ? {
                                page: VV,
                                anchor: xV
                              } : null
                            }
                            renderPart(VV, eV, xV, JV) {
                              const YV = function(VV) {
                                  const eV = VV.map((VV => VV.section)).filter(Boolean);
                                  if (0 === eV.length) return "";
                                  const xV = eV[0],
                                    JV = eV.at(-1);
                                  return xV === JV ? xV : `${xV} to ${JV}`
                                }(eV),
                                UV = eV.map((VV => VV.markdown)).join("\n\n"),
                                yV = YV ? `It covers ${YV}. ` : "",
                                pV = `Part ${xV+1} of ${JV} of [${VV.title}](${this.url((0,DJ.u)(VV.slug))}). ${yV}[llms.txt](${this.url(DJ.i)}) lists every part.`;
                              return {
                                path: (0, DJ.w)(VV.slug, xV),
                                label: YV,
                                markdown: `# ${VV.title}, part ${xV+1} of ${JV}\n\n${pV}\n\n${this.resolveLinks(VV,UV)}\n`
                              }
                            }
                            llmsTxt(VV) {
                              const eV = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${LJ(DJ.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const xV of aV) {
                                eV.push("", `## ${xV.title}`, "");
                                for (const VV of xV.pageIds) {
                                  const xV = this.getPage(VV),
                                    {
                                      page: JV,
                                      parts: YV
                                    } = xV,
                                    UV = `About ${LJ(xV.markdown.length)} tokens${YV.length>0?`, in ${YV.length} parts:`:"."}`;
                                  eV.push(`- [${JV.title}](${this.url(xV.path)}): ${JV.summary} ${UV}`), YV.forEach(((VV, xV) => {
                                    eV.push(`  - [Part ${xV+1}${VV.label?`: ${VV.label}`:""}](${this.url(VV.path)})`)
                                  }))
                                }
                              }
                              return eV.push("", "## Optional", "", `- [Every page in one file](${this.url(DJ.e)}): About ${LJ(VV.length)} tokens, for a model with a large context window.`, ""), eV.join("\n")
                            }
                            llmsFullTxt() {
                              return aV.flatMap((VV => VV.pageIds.map((VV => this.getPage(VV).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const VV = this.llmsFullTxt(),
                                eV = this.llmsTxt(VV),
                                xV = new Map([
                                  [DJ.p, eV],
                                  [DJ.i, eV],
                                  [DJ.e, VV]
                                ]);
                              for (const JV of this.pages) {
                                xV.set(JV.path, JV.markdown);
                                for (const VV of JV.parts) xV.set(VV.path, VV.markdown)
                              }
                              return xV
                            }
                          }

                          function LJ(VV) {
                            return `${Math.max(1,Math.round(VV/4e3))}K`
                          }
                          let fJ = null;

                          function mJ() {
                            return fJ ??= new lJ(CV, iJ.d), fJ
                          }
                          var KJ = xV(5330);
                          const HJ = [KJ.e, KJ.o];

                          function uJ(VV) {
                            return mJ().getPage(VV.id).parts.length > 0 ? `Read ${DJ.l}, then the parts of the Bloxd Code API's ${VV.title} page it lists, so I can ask questions about it.` : `Read ${iJ.d}${(0,DJ.u)(VV.slug)} so I can ask questions about it. ${KJ.k}`
                          }

                          function sJ(VV) {
                            let {
                              page: eV
                            } = VV;
                            const [xV, JV] = jV();
                            return (0, kV.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, kV.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  JV(mJ().getPage(eV.id).markdown)
                                },
                                children: [(0, kV.jsx)(EV, {
                                  name: !1 === (null === xV || void 0 === xV ? void 0 : xV.failed) ? "check" : "copy"
                                }), (0, kV.jsx)("span", {
                                  children: xV ? xV.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), HJ.map((VV => (0, kV.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, KJ.c)(VV, uJ(eV)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, kV.jsx)(EV, {
                                  name: "external-link"
                                }), (0, kV.jsxs)("span", {
                                  children: ["Open in ", VV.name]
                                })]
                              }, VV.name)))]
                            })
                          }

                          function SJ(VV) {
                            return `#${[0,1,2].map((eV=>Math.round(Math.min(255,Math.max(0,VV[eV]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function IJ(VV) {
                            return [parseInt(VV.slice(1, 3), 16), parseInt(VV.slice(3, 5), 16), parseInt(VV.slice(5, 7), 16)]
                          }

                          function dJ(VV) {
                            let {
                              label: eV,
                              min: xV,
                              max: JV,
                              step: YV,
                              low: UV,
                              high: yV,
                              onChange: pV
                            } = VV;
                            return (0, kV.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, kV.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, kV.jsx)("span", {
                                  children: eV
                                }), (0, kV.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: UV === yV ? UV : `${UV}\u2013${yV}`
                                })]
                              }), (0, kV.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, kV.jsx)("input", {
                                  type: "range",
                                  min: xV,
                                  max: JV,
                                  step: YV,
                                  value: Math.min(JV, UV),
                                  "aria-label": `Minimum ${eV.toLowerCase()}`,
                                  onChange: VV => {
                                    const eV = Number(VV.target.value);
                                    pV(eV, Math.max(eV, yV))
                                  }
                                }), (0, kV.jsx)("input", {
                                  type: "range",
                                  min: xV,
                                  max: JV,
                                  step: YV,
                                  value: Math.min(JV, yV),
                                  "aria-label": `Maximum ${eV.toLowerCase()}`,
                                  onChange: VV => {
                                    const eV = Number(VV.target.value);
                                    pV(Math.min(eV, UV), eV)
                                  }
                                })]
                              })]
                            })
                          }

                          function OJ(VV) {
                            let {
                              label: eV,
                              min: xV,
                              max: JV,
                              step: YV,
                              value: UV,
                              onChange: yV,
                              format: pV = String
                            } = VV;
                            return (0, kV.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, kV.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, kV.jsx)("span", {
                                  children: eV
                                }), (0, kV.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: pV(UV)
                                })]
                              }), (0, kV.jsx)("input", {
                                type: "range",
                                min: xV,
                                max: JV,
                                step: YV,
                                value: Math.min(JV, Math.max(xV, UV)),
                                "aria-label": eV,
                                onChange: VV => {
                                  yV(Number(VV.target.value))
                                }
                              })]
                            })
                          }

                          function VY(VV) {
                            let {
                              opts: eV,
                              onChange: xV
                            } = VV;
                            const JV = eV.colorGradients;
                            if (!fx(JV)) return (0, kV.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, kV.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, kV.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, kV.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: JV.map(((VV, eV) => (0, kV.jsx)("input", {
                                  type: "color",
                                  value: SJ(VV.color),
                                  "aria-label": `Colour ${eV+1}`,
                                  onChange: VV => {
                                    const YV = [...JV];
                                    YV[eV] = {
                                      color: IJ(VV.target.value)
                                    }, xV(YV)
                                  }
                                }, eV)))
                              })]
                            });
                            const YV = (VV, eV) => {
                              const YV = [...JV];
                              YV[VV] = eV, xV(YV)
                            };
                            return (0, kV.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, kV.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, kV.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, kV.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), JV.map(((VV, eV) => {
                                var xV;
                                const JV = null !== (xV = VV.maxColor) && void 0 !== xV ? xV : VV.minColor;
                                return (0, kV.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, kV.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * VV.timeFraction), "%"]
                                  }), (0, kV.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${SJ(VV.minColor)}, ${SJ(JV)})`
                                    }
                                  }), (0, kV.jsx)("input", {
                                    type: "color",
                                    value: SJ(VV.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*VV.timeFraction)}%`,
                                    onChange: xV => {
                                      YV(eV, {
                                        ...VV,
                                        minColor: [...IJ(xV.target.value), VV.minColor[3]]
                                      })
                                    }
                                  }), (0, kV.jsx)("input", {
                                    type: "color",
                                    value: SJ(JV),
                                    "aria-label": `Maximum colour at ${Math.round(100*VV.timeFraction)}%`,
                                    onChange: xV => {
                                      YV(eV, {
                                        ...VV,
                                        maxColor: [...IJ(xV.target.value), JV[3]]
                                      })
                                    }
                                  })]
                                }, eV)
                              }))]
                            })
                          }
                          const eY = [-.5, -.5, -.5],
                            xY = [.5, .5, .5],
                            JY = [0, 1, 2, 3, 4, 5, 6, 7].map((VV => [1 & VV ? xY[0] : eY[0], 2 & VV ? xY[1] : eY[1], 4 & VV ? xY[2] : eY[2]]));class YY {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(VV, eV, xV, JV) {
                              const YV = Math.round(31 * eV),
                                UV = Math.round(31 * xV),
                                yV = Math.round(31 * JV),
                                pV = `${YV}|${UV}|${yV}`;
                              let QV = this.tints.get(VV);
                              (!QV || QV.size > 2e3) && (QV = new Map, this.tints.set(VV, QV));
                              let nV = QV.get(pV);
                              if (nV) return nV;
                              nV = document.createElement("canvas"), nV.width = VV.naturalWidth || 16, nV.height = VV.naturalHeight || 16;
                              const wV = nV.getContext("2d");
                              return wV ? (wV.imageSmoothingEnabled = !1, wV.drawImage(VV, 0, 0, nV.width, nV.height), wV.globalCompositeOperation = "multiply", wV.fillStyle = `rgb(${YV/31*255}, ${UV/31*255}, ${yV/31*255})`, wV.fillRect(0, 0, nV.width, nV.height), wV.globalCompositeOperation = "destination-in", wV.drawImage(VV, 0, 0, nV.width, nV.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), QV.set(pV, nV), nV
                            }
                          }

                          function UY(VV) {
                            let {
                              opts: eV,
                              textureUrl: xV,
                              burst: YV,
                              paused: UV
                            } = VV;
                            const yV = (0, JV.useRef)(null),
                              pV = (0, JV.useRef)(eV);
                            pV.current = eV;
                            const QV = (0, JV.useRef)(UV);
                            QV.current = UV;
                            const nV = (0, JV.useRef)(null),
                              wV = (0, JV.useRef)(null),
                              ZV = (0, JV.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(VV) {
                                let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const xV = [-.5, -.5, -.5],
                                  JV = [.5, .5, .5];
                                let YV = .5;
                                for (let UV = 0; UV < 40; UV++) {
                                  const UV = Kx(VV, xV, JV, eV),
                                    yV = Math.max(UV.life / 30, .001);
                                  for (; sx(UV, VV.gravity, yV);) YV = Math.max(YV, Math.hypot(UV.pos[0], UV.pos[1], UV.pos[2]) + UV.size / 2)
                                }
                                return YV
                              }(eV)))), [eV]),
                              vV = (0, JV.useRef)(ZV);
                            return vV.current = ZV, (0, JV.useEffect)((() => {
                              if (nV.current = null, !xV) return;
                              const VV = new Image;
                              let eV = !1;
                              return VV.onload = () => {
                                eV || (nV.current = VV)
                              }, VV.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${xV}`)
                              }, VV.src = xV, () => {
                                eV = !0
                              }
                            }), [xV]), (0, JV.useEffect)((() => {
                              var VV;
                              null === (VV = wV.current) || void 0 === VV || VV.call(wV)
                            }), [eV, YV]), (0, JV.useEffect)((() => {
                              const VV = yV.current,
                                eV = null === VV || void 0 === VV ? void 0 : VV.getContext("2d");
                              if (!VV || !eV) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const xV = new YY;
                              let JV = [],
                                YV = 0,
                                UV = -.7,
                                ZV = vV.current,
                                rV = performance.now(),
                                kV = 0,
                                bV = !0,
                                EV = null;
                              const BV = () => {
                                const VV = pV.current,
                                  eV = Math.min(400, Math.max(0, Math.ceil(VV.manualEmitCount)));
                                JV = [];
                                for (let xV = 0; xV < eV; xV++) JV.push(Kx(VV, eY, xY, Math.random));
                                YV = 0
                              };
                              wV.current = BV, BV();
                              const jV = yV => {
                                kV = requestAnimationFrame(jV);
                                const wV = Math.min(.05, (yV - rV) / 1e3);
                                if (rV = yV, !bV) return;
                                const qV = window.devicePixelRatio || 1,
                                  tV = Math.round(VV.clientWidth * qV),
                                  FV = Math.round(VV.clientHeight * qV);
                                if (0 === tV || 0 === FV) return;
                                VV.width === tV && VV.height === FV || (VV.width = tV, VV.height = FV);
                                const TV = pV.current;
                                null === EV && (UV += .18 * wV), ZV += (vV.current - ZV) * Math.min(1, 4 * wV);
                                const PV = .6 * wV;
                                JV = JV.filter((VV => sx(VV, TV.gravity, PV))), 0 !== JV.length || QV.current || (YV += wV, YV > .6 && BV());
                                const AV = function(VV, eV, xV, JV) {
                                  const YV = 3.2 * JV,
                                    UV = .44 * Math.min(VV, eV) * YV / JV,
                                    yV = Math.cos(xV),
                                    pV = Math.sin(xV),
                                    QV = Math.cos(.42),
                                    nV = Math.sin(.42);
                                  return (xV, JV, wV) => {
                                    const ZV = xV * pV + wV * yV,
                                      vV = YV - (JV * nV + ZV * QV);
                                    if (vV < .05) return null;
                                    const rV = UV / vV;
                                    return {
                                      x: VV / 2 + (xV * yV - wV * pV) * rV,
                                      y: eV / 2 - (JV * QV - ZV * nV) * rV,
                                      scale: rV,
                                      depth: vV
                                    }
                                  }
                                }(tV, FV, UV, ZV);
                                ! function(VV, eV, xV, JV, YV) {
                                  const UV = VV.createLinearGradient(0, 0, 0, xV);
                                  UV.addColorStop(0, "#23262d"), UV.addColorStop(1, "#16181c"), VV.globalCompositeOperation = "source-over", VV.globalAlpha = 1, VV.fillStyle = UV, VV.fillRect(0, 0, eV, xV);
                                  const yV = (eV, xV) => {
                                      const YV = JV(eV[0], eV[1], eV[2]),
                                        UV = JV(xV[0], xV[1], xV[2]);
                                      YV && UV && (VV.beginPath(), VV.moveTo(YV.x, YV.y), VV.lineTo(UV.x, UV.y), VV.stroke())
                                    },
                                    pV = Math.ceil(YV) + 1,
                                    QV = eY[1];
                                  VV.lineWidth = 1, VV.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let nV = -pV; nV <= pV; nV++) yV([nV + .5, QV, .5 - pV], [nV + .5, QV, pV + .5]), yV([.5 - pV, QV, nV + .5], [pV + .5, QV, nV + .5]);
                                  VV.strokeStyle = "rgba(255, 255, 255, 0.28)", VV.setLineDash([4, 4]);
                                  for (const nV of JY)
                                    for (const VV of JY) {
                                      const eV = [0, 1, 2].filter((eV => nV[eV] !== VV[eV]));
                                      1 === eV.length && nV[eV[0]] < VV[eV[0]] && yV(nV, VV)
                                    }
                                  VV.setLineDash([])
                                }(eV, tV, FV, AV, ZV);
                                const NV = nV.current,
                                  XV = JV.map((VV => ({
                                    particle: VV,
                                    at: AV(VV.pos[0], VV.pos[1], VV.pos[2])
                                  }))).filter((VV => null !== VV.at)).sort(((VV, eV) => eV.at.depth - VV.at.depth));
                                eV.imageSmoothingEnabled = !1;
                                for (const VV of function(VV) {
                                    switch (VV) {
                                      case ox.g.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case ox.g.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case ox.g.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case ox.g.MultiplyAdd:
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
                                  }(TV.blendMode)) {
                                  eV.globalCompositeOperation = VV.operation;
                                  for (const {
                                      particle: JV,
                                      at: YV
                                    }
                                    of XV) {
                                    const [UV, yV, pV, QV] = ux(JV), nV = Math.max(1, JV.size * YV.scale);
                                    eV.globalAlpha = VV.usesAlpha ? Math.min(1, Math.max(0, QV)) : 1, NV ? eV.drawImage(xV.get(NV, UV, yV, pV), YV.x - nV / 2, YV.y - nV / 2, nV, nV) : (eV.fillStyle = `rgb(${255*UV}, ${255*yV}, ${255*pV})`, eV.fillRect(YV.x - nV / 2, YV.y - nV / 2, nV, nV))
                                  }
                                }
                                eV.globalCompositeOperation = "source-over", eV.globalAlpha = 1
                              };
                              kV = requestAnimationFrame(jV);
                              const qV = new IntersectionObserver((VV => {
                                let [eV] = VV;
                                bV = eV.isIntersecting
                              }));
                              qV.observe(VV);
                              const tV = eV => {
                                  EV = eV.clientX, VV.setPointerCapture(eV.pointerId)
                                },
                                FV = VV => {
                                  null !== EV && (UV += .01 * (VV.clientX - EV), EV = VV.clientX)
                                },
                                TV = () => {
                                  EV = null
                                };
                              return VV.addEventListener("pointerdown", tV), VV.addEventListener("pointermove", FV), VV.addEventListener("pointerup", TV), VV.addEventListener("pointercancel", TV), () => {
                                cancelAnimationFrame(kV), qV.disconnect(), wV.current = null, VV.removeEventListener("pointerdown", tV), VV.removeEventListener("pointermove", FV), VV.removeEventListener("pointerup", TV), VV.removeEventListener("pointercancel", TV)
                              }
                            }), []), (0, kV.jsx)("canvas", {
                              ref: yV,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${eV.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const yY = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            pY = [{
                              mode: ox.g.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: ox.g.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: ox.g.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: ox.g.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: ox.g.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            QY = (0, JV.forwardRef)((function(VV, eV) {
                              var xV, YV;
                              let {
                                textures: yV
                              } = VV;
                              const pV = qJ(),
                                QV = (0, JV.useRef)(null),
                                [nV, wV] = (0, JV.useState)(hx),
                                [ZV, vV] = (0, JV.useState)("example"),
                                [rV, bV] = (0, JV.useState)(0),
                                [BV, jV] = (0, JV.useState)(!1),
                                tV = VV => {
                                  const eV = "example" === VV ? hx : cx(VV);
                                  eV && (wV(eV), vV(VV))
                                };
                              (0, JV.useImperativeHandle)(eV, (() => ({
                                preview: VV => {
                                  var eV;
                                  tV(VV), null === (eV = QV.current) || void 0 === eV || eV.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const FV = VV => {
                                  wV({
                                    ...nV,
                                    ...VV
                                  }), vV(null)
                                },
                                TV = function(VV, eV) {
                                  if (null !== eV) return `${Ox}    presetId: "${eV}",\n${VJ}\n})`;
                                  const xV = VV.velocityGradients.map((VV => `        {\n            timeFraction: ${Sx(VV.timeFraction)},\n            factor: ${Sx(VV.factor)},\n            factor2: ${Sx(VV.factor2)},\n        },`)),
                                    JV = [`    dir1: ${Ix(VV.dir1)},`, `    dir2: ${Ix(VV.dir2)},`, VJ, `    texture: "${VV.texture}",`, `    minLifeTime: ${Sx(VV.minLifeTime)},`, `    maxLifeTime: ${Sx(VV.maxLifeTime)},`, `    minEmitPower: ${Sx(VV.minEmitPower)},`, `    maxEmitPower: ${Sx(VV.maxEmitPower)},`, `    minSize: ${Sx(VV.minSize)},`, `    maxSize: ${Sx(VV.maxSize)},`, `    manualEmitCount: ${Sx(VV.manualEmitCount)},`, `    gravity: ${Ix(VV.gravity)},`, `    colorGradients: ${dx(VV.colorGradients,"    ")},`, `    velocityGradients: ${xV.length>0?`[\n${xV.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${Sx(VV.blendMode)},`];
                                  return void 0 !== VV.hideDist && JV.push(`    hideDist: ${Sx(VV.hideDist)},`), `${Ox}${JV.join("\n")}\n})`
                                }(nV, null === ZV || "example" === ZV ? null : ZV),
                                AV = yV.includes(nV.texture) ? yV : [...yV, nV.texture];
                              return (0, kV.jsxs)("section", {
                                ref: QV,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, kV.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, kV.jsxs)("div", {
                                    children: [(0, kV.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, kV.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, kV.jsx)(qV, {
                                    text: TV,
                                    label: "Copy code"
                                  })]
                                }), (0, kV.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, kV.jsx)("button", {
                                    type: "button",
                                    className: UV()("DocsVariantChip", {
                                      Active: "example" === ZV
                                    }),
                                    onClick: () => {
                                      tV("example")
                                    },
                                    children: "Example"
                                  }), yY.filter((VV => null !== cx(VV))).map((VV => (0, kV.jsx)("button", {
                                    type: "button",
                                    className: UV()("DocsVariantChip", {
                                      Active: ZV === VV
                                    }),
                                    onClick: () => {
                                      tV(VV)
                                    },
                                    children: VV
                                  }, VV))), (0, kV.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== ZV && void 0 !== ZV ? ZV : "custom",
                                    "aria-label": "Preset",
                                    onChange: VV => {
                                      tV(VV.target.value)
                                    },
                                    children: [(0, kV.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === ZV && (0, kV.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), ax.d.map((VV => (0, kV.jsx)("option", {
                                      value: VV,
                                      children: VV
                                    }, VV)))]
                                  })]
                                }), (0, kV.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, kV.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, kV.jsx)(UY, {
                                      opts: nV,
                                      textureUrl: null !== (xV = null === pV || void 0 === pV ? void 0 : pV.getParticleTextureUrl(nV.texture)) && void 0 !== xV ? xV : null,
                                      burst: rV,
                                      paused: BV
                                    }), (0, kV.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, kV.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          bV(rV + 1)
                                        },
                                        children: [(0, kV.jsx)(EV, {
                                          name: "replay"
                                        }), (0, kV.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, kV.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": BV,
                                        onClick: () => {
                                          jV(!BV)
                                        },
                                        children: [(0, kV.jsx)(EV, {
                                          name: BV ? "play" : "pause"
                                        }), (0, kV.jsx)("span", {
                                          children: BV ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, kV.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, kV.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, kV.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, kV.jsx)("span", {
                                          children: "Texture"
                                        }), (0, kV.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: nV.texture
                                        })]
                                      }), (0, kV.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: AV.map((VV => {
                                          var eV;
                                          const xV = null !== (eV = null === pV || void 0 === pV ? void 0 : pV.getParticleTextureUrl(VV)) && void 0 !== eV ? eV : null;
                                          return (0, kV.jsx)("button", {
                                            type: "button",
                                            className: UV()("DocsParticleTexture", {
                                              Active: nV.texture === VV
                                            }),
                                            title: VV,
                                            "aria-label": VV,
                                            "aria-pressed": nV.texture === VV,
                                            onClick: () => {
                                              FV({
                                                texture: VV
                                              })
                                            },
                                            children: xV ? (0, kV.jsx)("img", {
                                              src: xV,
                                              alt: ""
                                            }) : (0, kV.jsx)(EV, {
                                              name: "image"
                                            })
                                          }, VV)
                                        }))
                                      })]
                                    }), (0, kV.jsx)(OJ, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: nV.manualEmitCount,
                                      onChange: VV => {
                                        FV({
                                          manualEmitCount: VV
                                        })
                                      }
                                    }), (0, kV.jsx)(dJ, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: nV.minLifeTime,
                                      high: nV.maxLifeTime,
                                      onChange: (VV, eV) => {
                                        FV({
                                          minLifeTime: VV,
                                          maxLifeTime: eV
                                        })
                                      }
                                    }), (0, kV.jsx)(dJ, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: nV.minEmitPower,
                                      high: nV.maxEmitPower,
                                      onChange: (VV, eV) => {
                                        FV({
                                          minEmitPower: VV,
                                          maxEmitPower: eV
                                        })
                                      }
                                    }), (0, kV.jsx)(dJ, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: nV.minSize,
                                      high: nV.maxSize,
                                      onChange: (VV, eV) => {
                                        FV({
                                          minSize: VV,
                                          maxSize: eV
                                        })
                                      }
                                    }), (0, kV.jsx)(OJ, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (YV = nV.gravity[1]) && void 0 !== YV ? YV : 0,
                                      onChange: VV => {
                                        var eV, xV;
                                        FV({
                                          gravity: [null !== (eV = nV.gravity[0]) && void 0 !== eV ? eV : 0, VV, null !== (xV = nV.gravity[2]) && void 0 !== xV ? xV : 0]
                                        })
                                      }
                                    }), (0, kV.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, kV.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, kV.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, kV.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: nV.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: VV => {
                                          FV({
                                            blendMode: Number(VV.target.value)
                                          })
                                        },
                                        children: pY.map((VV => {
                                          let {
                                            mode: eV,
                                            label: xV
                                          } = VV;
                                          return (0, kV.jsx)("option", {
                                            value: eV,
                                            children: xV
                                          }, eV)
                                        }))
                                      })]
                                    }), (0, kV.jsx)(VY, {
                                      opts: nV,
                                      onChange: VV => {
                                        FV({
                                          colorGradients: VV
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, kV.jsx)(PV, {
                                  code: TV,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var nY = xV(4948),
                            wY = xV(2021);

                          function ZY(VV, eV) {
                            return VV ? nY.d.includes(eV) ? VV.getIngameIconUrl(eV) : VV.getItemIconUrl(eV) : null
                          }

                          function vY(VV) {
                            var eV, xV, JV;
                            let {
                              part: YV,
                              assets: yV
                            } = VV;
                            const pV = ZY(yV, YV.icon),
                              QV = null !== (eV = null === (xV = YV.style) || void 0 === xV ? void 0 : xV.fontSize) && void 0 !== eV ? eV : "1.8em",
                              nV = (0, ae.Yb)(YV.style);
                            return (0, kV.jsxs)("span", {
                              className: UV()("DocsBloxdTextIcon", {
                                Missing: !pV
                              }),
                              style: {
                                width: QV,
                                height: QV,
                                opacity: null === (JV = YV.style) || void 0 === JV ? void 0 : JV.opacity
                              },
                              title: pV ? void 0 : `No Bloxd icon, item or block is called "${YV.icon}"`,
                              children: [pV && nV && (0, kV.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: nV,
                                  maskImage: `url("${pV}")`,
                                  WebkitMaskImage: `url("${pV}")`
                                }
                              }), pV ? (0, kV.jsx)("img", {
                                src: pV,
                                alt: "",
                                className: UV()({
                                  Tinted: nV
                                })
                              }) : (0, kV.jsx)(EV, {
                                name: "image"
                              })]
                            })
                          }

                          function rY(VV) {
                            let {
                              parts: eV,
                              className: xV
                            } = VV;
                            const JV = qJ(),
                              YV = [];
                            let yV = [];
                            const pV = VV => {
                              yV.length > 0 && (YV.push((0, kV.jsx)(wY.b, {
                                text: yV
                              }, `run-${VV}`)), yV = [])
                            };
                            return eV.forEach(((VV, eV) => {
                              "icon" !== Le(VV) || ce(VV.icon) ? yV.push(VV) : (pV(eV), YV.push((0, kV.jsx)(vY, {
                                part: VV,
                                assets: JV
                              }, `icon-${eV}`)))
                            })), pV(eV.length), (0, kV.jsx)("div", {
                              className: UV()("DocsStyledTextPreview", xV),
                              children: YV
                            })
                          }
                          const kY = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let bY = null;

                          function EY(VV) {
                            if (bY ??= document.createElement("canvas").getContext("2d"), !bY) return "#000000";
                            bY.fillStyle = "#000000", bY.fillStyle = VV;
                            const eV = bY.fillStyle;
                            return eV.startsWith("#") ? eV : "#000000"
                          }

                          function BY(VV) {
                            let {
                              value: eV,
                              label: xV,
                              onChange: JV
                            } = VV;
                            return (0, kV.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, kV.jsx)("input", {
                                type: "color",
                                value: EY(eV),
                                "aria-label": `${xV} picker`,
                                onChange: VV => {
                                  JV(VV.target.value)
                                }
                              }), (0, kV.jsx)("input", {
                                type: "text",
                                value: eV,
                                placeholder: "#ffb914 or gold",
                                "aria-label": xV,
                                spellCheck: !1,
                                onChange: VV => {
                                  JV(VV.target.value)
                                }
                              })]
                            })
                          }

                          function jY(VV) {
                            let {
                              value: eV,
                              fontAwesomeIcons: xV,
                              onChange: YV
                            } = VV;
                            const yV = qJ(),
                              [pV, QV] = (0, JV.useState)(ce(eV) ? "fontAwesome" : "bloxd"),
                              [nV, wV] = (0, JV.useState)(""),
                              ZV = nV.trim().toLowerCase(),
                              vV = "bloxd" === pV ? nY.d : xV,
                              rV = ZV ? vV.filter((VV => VV.toLowerCase().includes(ZV))) : vV;
                            return (0, kV.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, kV.jsx)("input", {
                                type: "text",
                                value: eV,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: VV => {
                                  YV(VV.target.value)
                                }
                              }), (0, kV.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, kV.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((VV => (0, kV.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": pV === VV,
                                    className: UV()("DocsVariantChip", {
                                      Active: pV === VV
                                    }),
                                    onClick: () => {
                                      QV(VV)
                                    },
                                    children: "bloxd" === VV ? `Bloxd icons (${nY.d.length})` : `Font Awesome (${xV.length})`
                                  }, VV))), (0, kV.jsx)("input", {
                                    type: "search",
                                    value: nV,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: VV => {
                                      wV(VV.target.value)
                                    }
                                  })
                                ]
                              }), (0, kV.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [rV.map((VV => {
                                  const xV = "bloxd" === pV ? ZY(yV, VV) : null;
                                  return (0, kV.jsx)("button", {
                                    type: "button",
                                    title: VV,
                                    "aria-label": VV,
                                    "aria-pressed": VV === eV,
                                    className: UV()("DocsIconPickerOption", {
                                      Active: VV === eV
                                    }),
                                    onClick: () => {
                                      YV(VV)
                                    },
                                    children: "fontAwesome" === pV ? (0, kV.jsx)(tx.b, {
                                      name: VV
                                    }) : xV ? (0, kV.jsx)("img", {
                                      src: xV,
                                      alt: ""
                                    }) : (0, kV.jsx)(EV, {
                                      name: "image"
                                    })
                                  }, VV)
                                })), 0 === rV.length && (0, kV.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", nV, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function qY(VV) {
                            let {
                              property: eV,
                              value: xV,
                              fontAwesomeIcons: JV,
                              onChange: YV
                            } = VV;
                            const {
                              field: UV,
                              label: yV
                            } = eV, pV = VV => "" !== VV || eV.isRequired ? VV : void 0;
                            switch (UV.kind) {
                              case "text":
                                return UV.multiline ? (0, kV.jsx)("textarea", {
                                  value: String(null !== xV && void 0 !== xV ? xV : ""),
                                  rows: 2,
                                  "aria-label": yV,
                                  onChange: VV => {
                                    YV(VV.target.value)
                                  }
                                }) : (0, kV.jsx)("input", {
                                  type: "text",
                                  value: String(null !== xV && void 0 !== xV ? xV : ""),
                                  "aria-label": yV,
                                  onChange: VV => {
                                    YV(pV(VV.target.value))
                                  }
                                });
                              case "size":
                                return (0, kV.jsx)("input", {
                                  type: "text",
                                  value: String(null !== xV && void 0 !== xV ? xV : ""),
                                  placeholder: eV.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": yV,
                                  spellCheck: !1,
                                  onChange: VV => {
                                    YV(pV(VV.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, kV.jsx)(BY, {
                                  value: String(null !== xV && void 0 !== xV ? xV : ""),
                                  label: yV,
                                  onChange: VV => {
                                    YV(pV(VV))
                                  }
                                });
                              case "colours": {
                                const VV = Array.isArray(xV) ? xV : [],
                                  eV = VV => {
                                    YV(VV.length > 0 ? VV : void 0)
                                  };
                                return (0, kV.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [VV.map(((xV, JV) => (0, kV.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, kV.jsx)(BY, {
                                      value: xV,
                                      label: `${yV} ${JV+1}`,
                                      onChange: xV => {
                                        eV(VV.map(((VV, eV) => eV === JV ? xV : VV)))
                                      }
                                    }), (0, kV.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${JV+1}`,
                                      onClick: () => {
                                        eV(VV.filter(((VV, eV) => eV !== JV)))
                                      },
                                      children: (0, kV.jsx)(EV, {
                                        name: "cross"
                                      })
                                    })]
                                  }, JV))), (0, kV.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var xV;
                                      eV([...VV, null !== (xV = VV.at(-1)) && void 0 !== xV ? xV : "#ffffff"])
                                    },
                                    children: [(0, kV.jsx)(EV, {
                                      name: "plus"
                                    }), 0 === VV.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var QV;
                                const VV = "number" === typeof xV ? xV : Number(null !== (QV = eV.defaultText) && void 0 !== QV ? QV : 0);
                                return (0, kV.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, kV.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: VV,
                                    "aria-label": yV,
                                    onChange: VV => {
                                      YV(Number(VV.target.value))
                                    }
                                  }), (0, kV.jsx)("output", {
                                    children: VV.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, kV.jsxs)("select", {
                                  value: String(null !== xV && void 0 !== xV ? xV : ""),
                                  "aria-label": yV,
                                  onChange: VV => {
                                    YV(pV(VV.target.value))
                                  },
                                  children: [!eV.isRequired && (0, kV.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", eV.defaultText, ")"]
                                  }), UV.options.map((VV => (0, kV.jsx)("option", {
                                    value: VV,
                                    children: VV
                                  }, VV)))]
                                });
                              case "icon":
                                return (0, kV.jsx)(jY, {
                                  value: String(null !== xV && void 0 !== xV ? xV : ""),
                                  fontAwesomeIcons: JV,
                                  onChange: YV
                                })
                            }
                          }

                          function tY(VV) {
                            let eV;
                            try {
                              eV = JSON.parse(VV)
                            } catch (xV) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${xV.message}`
                              }
                            }
                            return xx(eV) ? {
                              part: eV,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function FY(VV) {
                            let {
                              parts: eV,
                              index: xV,
                              fontAwesomeIcons: YV,
                              onChange: UV,
                              bR: yV,
                              onClose: pV
                            } = VV;
                            const QV = (0, JV.useContext)(ke),
                              wV = (0, JV.useRef)(null),
                              ZV = eV[xV],
                              vV = Le(ZV),
                              [rV, bV] = (0, JV.useState)((() => JSON.stringify(ZV, null, 2))),
                              BV = (0, JV.useMemo)((() => "other" === vV ? tY(rV).error : null), [vV, rV]);
                            (0, JV.useEffect)((() => {
                              var VV;
                              null === (VV = wV.current) || void 0 === VV || VV.focus()
                            }), []);
                            const jV = (0, kV.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: VV => {
                                VV.target === VV.currentTarget && pV()
                              },
                              children: (0, kV.jsxs)("div", {
                                ref: wV,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${xV+1}: ${he[vV]}`,
                                tabIndex: -1,
                                onKeyDown: VV => {
                                  "Escape" === VV.key ? (VV.stopPropagation(), pV()) : "Tab" === VV.key && wV.current && function(VV, eV) {
                                    const xV = Array.from(VV.querySelectorAll(ze)),
                                      JV = xV[0],
                                      YV = xV.at(-1);
                                    if (!JV || !YV) return;
                                    const UV = document.activeElement;
                                    !eV.shiftKey || UV !== JV && UV !== VV ? eV.shiftKey || UV !== YV || (eV.preventDefault(), JV.focus()) : (eV.preventDefault(), YV.focus())
                                  }(wV.current, VV)
                                },
                                children: [(0, kV.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, kV.jsxs)("div", {
                                    children: [(0, kV.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", xV + 1]
                                    }), (0, kV.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: he[vV]
                                    })]
                                  }), (0, kV.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: pV,
                                    children: (0, kV.jsx)(EV, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, kV.jsx)(rY, {
                                  parts: eV,
                                  className: "DocsTextDialogPreview"
                                }), (0, kV.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === vV ? (0, kV.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, kV.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, kV.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: rV,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: VV => {
                                        bV(VV.target.value);
                                        const eV = tY(VV.target.value);
                                        null !== eV.part && UV(eV.part)
                                      }
                                    }), BV && (0, kV.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: BV
                                    })]
                                  }) : me[vV].map((VV => {
                                    const eV = He(ZV, VV.path),
                                      xV = VV.isRequired ? JSON.stringify(se(ZV, VV.path)) === JSON.stringify(ZV) : void 0 === eV;
                                    return (0, kV.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, kV.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, kV.jsx)("span", {
                                          children: VV.label
                                        }), (0, kV.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: xV,
                                          "aria-label": `Reset ${VV.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            UV(se(ZV, VV.path))
                                          },
                                          children: [(0, kV.jsx)(EV, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, kV.jsx)(qY, {
                                        property: VV,
                                        value: eV,
                                        fontAwesomeIcons: YV,
                                        onChange: eV => {
                                          UV(ue(ZV, VV.path, eV))
                                        }
                                      }), !VV.isRequired && (0, kV.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", VV.defaultText]
                                      })]
                                    }, VV.path.join("."))
                                  }))
                                }), (0, kV.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, kV.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: yV,
                                    children: [(0, kV.jsx)(EV, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, kV.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: pV,
                                    children: "Done"
                                  })]
                                }), (0, kV.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: kY.map((VV => (0, kV.jsx)("option", {
                                    value: VV
                                  }, VV)))
                                })]
                              })
                            });
                            return QV ? (0, nV.createPortal)(jV, QV) : jV
                          }
                          const TY = [{
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
                            PY = Object.keys(le);

                          function AY(VV) {
                            let {
                              fontAwesomeIcons: eV
                            } = VV;
                            const [xV, YV] = (0, JV.useState)(TY[0].parts), [yV, pV] = (0, JV.useState)((() => Oe(TY[0].parts))), [QV, nV] = (0, JV.useState)(null), [wV, ZV] = (0, JV.useState)(!1), [vV, rV] = (0, JV.useState)(null), [bV, BV] = (0, JV.useState)(!1), [jV, qV] = (0, JV.useState)(null), tV = (0, JV.useRef)(null), FV = Oe(xV);
                            (0, JV.useLayoutEffect)((() => {
                              var VV;
                              if (!jV) return;
                              const eV = VV => {
                                  var eV;
                                  return null === (eV = tV.current) || void 0 === eV ? void 0 : eV.querySelector(`[data-focus-key="${VV}"]`)
                                },
                                xV = eV(jV.key);
                              null === (VV = xV && !xV.disabled ? xV : eV(jV.fallback)) || void 0 === VV || VV.focus(), qV(null)
                            }), [jV]);
                            const TV = VV => {
                                YV(VV), pV(Oe(VV)), nV(null)
                              },
                              AV = VV => {
                                TV(xV.filter(((eV, xV) => xV !== VV))), qV({
                                  key: `edit-${Math.min(VV,xV.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              NV = (VV, eV) => {
                                const JV = [...xV],
                                  [YV] = JV.splice(VV, 1);
                                JV.splice(VV + eV, 0, YV), TV(JV);
                                qV({
                                  key: `${eV<0?"up":"down"}-${VV+eV}`,
                                  fallback: `edit-${VV+eV}`
                                })
                              };
                            return (0, kV.jsxs)("section", {
                              ref: tV,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, kV.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, kV.jsxs)("div", {
                                  children: [(0, kV.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, kV.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, kV.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: TY.map((VV => (0, kV.jsx)("button", {
                                  type: "button",
                                  className: UV()("DocsVariantChip", {
                                    Active: FV === Oe(VV.parts)
                                  }),
                                  onClick: () => {
                                    TV(VV.parts)
                                  },
                                  children: VV.label
                                }, VV.label)))
                              }), (0, kV.jsx)(rY, {
                                parts: xV,
                                className: "DocsTextEditorPreview"
                              }), (0, kV.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, kV.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, kV.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, kV.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [xV.map(((VV, eV) => {
                                      const JV = Le(VV);
                                      return (0, kV.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, kV.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${eV}`,
                                          "aria-label": `Edit part ${eV+1}, ${he[JV]}`,
                                          onClick: () => {
                                            rV(eV)
                                          },
                                          children: [(0, kV.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: he[JV]
                                          }), (0, kV.jsx)(rY, {
                                            parts: [VV],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== JV && (0, kV.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: Se(VV)
                                          })]
                                        }), (0, kV.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, kV.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${eV+1} up`,
                                            "data-focus-key": `up-${eV}`,
                                            disabled: 0 === eV,
                                            onClick: () => {
                                              NV(eV, -1)
                                            },
                                            children: (0, kV.jsx)(EV, {
                                              name: "chevron-up"
                                            })
                                          }), (0, kV.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${eV+1} down`,
                                            "data-focus-key": `down-${eV}`,
                                            disabled: eV === xV.length - 1,
                                            onClick: () => {
                                              NV(eV, 1)
                                            },
                                            children: (0, kV.jsx)(EV, {
                                              name: "chevron-down"
                                            })
                                          }), (0, kV.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${eV+1}`,
                                            onClick: () => {
                                              AV(eV)
                                            },
                                            children: (0, kV.jsx)(EV, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, eV)
                                    })), 0 === xV.length && (0, kV.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, kV.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: VV => {
                                      "Escape" === VV.key && bV && (VV.stopPropagation(), BV(!1), qV({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, kV.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": bV,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        BV(!bV)
                                      },
                                      children: [(0, kV.jsx)(EV, {
                                        name: "plus"
                                      }), "Add a part", (0, kV.jsx)(EV, {
                                        name: bV ? "chevron-up" : "chevron-down"
                                      })]
                                    }), bV && (0, kV.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: PY.map((VV => (0, kV.jsx)("li", {
                                        children: (0, kV.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (VV => {
                                              TV([...xV, le[VV]]), BV(!1), rV(xV.length)
                                            })(VV)
                                          },
                                          children: he[VV]
                                        })
                                      }, VV)))
                                    })]
                                  })]
                                }), (0, kV.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, kV.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, kV.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": wV,
                                      onClick: () => {
                                        ZV(!wV)
                                      },
                                      children: [(0, kV.jsx)(EV, {
                                        name: wV ? "check" : "pencil"
                                      }), wV ? "Done" : "Edit"]
                                    })]
                                  }), wV ? (0, kV.jsxs)(kV.Fragment, {
                                    children: [(0, kV.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: yV,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: VV => {
                                        pV(VV.target.value);
                                        const eV = Jx(VV.target.value);
                                        nV(eV.error), eV.parts && YV(eV.parts)
                                      }
                                    }), QV && (0, kV.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: QV
                                    })]
                                  }) : (0, kV.jsx)(PV, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${FV})`
                                  })]
                                })]
                              }), null !== vV && vV < xV.length && (0, kV.jsx)(FY, {
                                parts: xV,
                                index: vV,
                                fontAwesomeIcons: eV,
                                onChange: VV => {
                                  ((VV, eV) => {
                                    TV(xV.map(((xV, JV) => JV === VV ? eV : xV)))
                                  })(vV, VV)
                                },
                                bR: () => {
                                  AV(vV), rV(null)
                                },
                                onClose: () => {
                                  rV(null), qV({
                                    key: `edit-${vV}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var NY = xV(5342),
                            XY = xV(5333),
                            MY = xV(5339),
                            zY = xV(5351);
                          const GY = 40,
                            WY = 800,
                            RY = 150,
                            gY = 8e3,
                            DY = 2e3;

                          function iY(VV, eV) {
                            return 12 * Math.log2(eV / VV)
                          }

                          function CY(VV, eV) {
                            return Math.round(VV * 2 ** (eV / 12) * 10) / 10
                          }

                          function aY(VV) {
                            return `${VV} ms`
                          }

                          function oY(VV) {
                            return `${VV} st`
                          }
                          const cY = [{
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

                          function hY(VV) {
                            let {
                              synth: eV,
                              onChange: xV
                            } = VV;
                            const JV = (0, NY.j)(eV);
                            return (0, kV.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, kV.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, kV.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, kV.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, kV.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, kV.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, kV.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: NY.g.map((VV => (0, kV.jsx)("button", {
                                      type: "button",
                                      className: UV()("DocsVariantChip", {
                                        Active: eV.waveform === VV
                                      }),
                                      "aria-pressed": eV.waveform === VV,
                                      onClick: () => {
                                        xV({
                                          waveform: VV
                                        })
                                      },
                                      children: VV
                                    }, VV)))
                                  })]
                                }), (0, kV.jsx)(OJ, {
                                  label: "Pitch",
                                  min: 0,
                                  max: iY(GY, WY),
                                  step: .1,
                                  value: iY(GY, eV.pitchHz),
                                  format: () => `${eV.pitchHz} Hz`,
                                  onChange: VV => {
                                    xV({
                                      pitchHz: CY(GY, VV)
                                    })
                                  }
                                }), (0, kV.jsx)(OJ, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: eV.syllableMs,
                                  format: aY,
                                  onChange: VV => {
                                    xV({
                                      syllableMs: VV
                                    })
                                  }
                                }), (0, kV.jsx)(OJ, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: eV.volume,
                                  onChange: VV => {
                                    xV({
                                      volume: VV
                                    })
                                  }
                                })]
                              }), (0, kV.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, kV.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, kV.jsx)(OJ, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: eV.durationMs,
                                  format: aY,
                                  onChange: VV => {
                                    xV({
                                      durationMs: VV
                                    })
                                  }
                                }), (0, kV.jsx)(OJ, {
                                  label: "Fade in",
                                  min: 0,
                                  max: JV.durationMs,
                                  step: 1,
                                  value: JV.attackMs,
                                  format: aY,
                                  onChange: VV => {
                                    xV({
                                      attackMs: VV
                                    })
                                  }
                                }), (0, kV.jsx)(OJ, {
                                  label: "Fade out",
                                  min: 0,
                                  max: JV.durationMs - JV.attackMs,
                                  step: 1,
                                  value: JV.releaseMs,
                                  format: aY,
                                  onChange: VV => {
                                    xV({
                                      releaseMs: VV
                                    })
                                  }
                                }), (0, kV.jsx)(OJ, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: eV.glideSemitones,
                                  format: oY,
                                  onChange: VV => {
                                    xV({
                                      glideSemitones: VV
                                    })
                                  }
                                }), (0, kV.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, kV.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== eV.lowpassHz,
                                    onChange: VV => {
                                      xV({
                                        lowpassHz: VV.target.checked ? DY : null
                                      })
                                    }
                                  }), (0, kV.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== eV.lowpassHz && (0, kV.jsx)(OJ, {
                                  label: "Filter",
                                  min: 0,
                                  max: iY(RY, gY),
                                  step: .1,
                                  value: iY(RY, eV.lowpassHz),
                                  format: () => `${eV.lowpassHz} Hz`,
                                  onChange: VV => {
                                    xV({
                                      lowpassHz: CY(RY, VV)
                                    })
                                  }
                                })]
                              }), (0, kV.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, kV.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), cY.map((VV => {
                                  let {
                                    key: JV,
                                    label: YV,
                                    max: UV
                                  } = VV;
                                  return (0, kV.jsx)(OJ, {
                                    label: YV,
                                    min: 0,
                                    max: UV,
                                    step: .1,
                                    value: eV.intonation[JV],
                                    format: oY,
                                    onChange: VV => {
                                      xV({
                                        intonation: {
                                          ...eV.intonation,
                                          [JV]: VV
                                        }
                                      })
                                    }
                                  }, JV)
                                }))]
                              })]
                            })
                          }
                          const lY = Object.keys(NY.i),
                            LY = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function fY(VV) {
                            var eV;
                            const xV = JSON.stringify((0, NY.j)(VV));
                            return null !== (eV = lY.find((VV => JSON.stringify((0, NY.j)(NY.i[VV])) === xV))) && void 0 !== eV ? eV : null
                          }

                          function mY(VV) {
                            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof VV || null === VV) return JSON.stringify(VV);
                            return `{\n${Object.entries(VV).map((VV=>{let[xV,JV]=VV;return`${eV}    ${xV}: ${mY(JV,`${eV}    `)},`})).join("\n")}\n${eV}}`
                          }

                          function KY(VV, eV, xV) {
                            const JV = fY(VV),
                              YV = [`    line: ${JSON.stringify(eV)},`];
                            return xV && YV.push(`    speakerName: ${JSON.stringify(xV)},`), YV.push("    voice,"), `const voice = ${JV?JSON.stringify(JV):mY((0,NY.j)(VV))}\n\napi.setClientOption(playerId, "dialogue", {\n${YV.join("\n")}\n})`
                          }
                          const HY = 400,
                            uY = 90;
                          let sY = null;

                          function SY(VV, eV, xV) {
                            return sY ??= new AudioContext, sY.resume(), (0, zY.d)(sY, sY.destination, VV, eV, xV, (() => {}))
                          }

                          function IY() {
                            const [VV, eV] = (0, JV.useState)(NY.i.regular), [xV, YV] = (0, JV.useState)(LY[0]), [yV, pV] = (0, JV.useState)("Innkeeper"), [QV, nV] = (0, JV.useState)(0), wV = wJ((VV => VV.volume)), ZV = (0, JV.useRef)(null), vV = (0, JV.useRef)(0), rV = (0, JV.useRef)(0), bV = () => {
                              var VV;
                              null === (VV = ZV.current) || void 0 === VV || VV.call(ZV), ZV.current = null
                            };
                            (0, JV.useEffect)((() => () => {
                              var VV;
                              null === (VV = ZV.current) || void 0 === VV || VV.call(ZV), window.clearTimeout(vV.current)
                            }), []);
                            const BV = (0, JV.useMemo)((() => ({
                                line: xV,
                                speakerName: yV || void 0,
                                voice: VV
                              })), [xV, yV, VV]),
                              jV = (0, JV.useRef)(BV);
                            jV.current = BV;
                            const tV = fY(VV),
                              FV = VV => {
                                window.clearTimeout(vV.current), bV();
                                const {
                                  plan: eV,
                                  synth: xV
                                } = (0, MY.g)(VV);
                                xV && (ZV.current = SY(xV, eV.blips, wV)), nV((VV => VV + 1))
                              },
                              TV = KY(VV, xV, yV);
                            return (0, kV.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, kV.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, kV.jsxs)("div", {
                                  children: [(0, kV.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, kV.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, kV.jsx)(qV, {
                                  text: TV,
                                  label: "Copy code"
                                })]
                              }), (0, kV.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [lY.map((VV => (0, kV.jsx)("button", {
                                  type: "button",
                                  className: UV()("DocsVariantChip", {
                                    Active: tV === VV
                                  }),
                                  "aria-pressed": tV === VV,
                                  onClick: () => {
                                    (VV => {
                                      const xV = NY.i[VV];
                                      eV(xV), FV({
                                        ...BV,
                                        voice: xV
                                      })
                                    })(VV)
                                  },
                                  children: VV
                                }, VV))), !tV && (0, kV.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, kV.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, kV.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, kV.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, kV.jsx)(XY.e, {
                                      display: BV
                                    }, QV)
                                  }), (0, kV.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: VV => {
                                      VV.preventDefault(), FV(BV)
                                    },
                                    children: [(0, kV.jsx)("input", {
                                      value: xV,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: VV => {
                                        YV(VV.target.value)
                                      }
                                    }), (0, kV.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, kV.jsx)(EV, {
                                        name: "play"
                                      }), (0, kV.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, kV.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: LY.map((VV => (0, kV.jsx)("button", {
                                      type: "button",
                                      className: UV()("DocsVariantChip", {
                                        Active: xV === VV
                                      }),
                                      onClick: () => {
                                        var eV;
                                        YV(eV = VV), FV({
                                          ...BV,
                                          line: eV
                                        })
                                      },
                                      children: VV
                                    }, VV)))
                                  }), (0, kV.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, kV.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, kV.jsx)("input", {
                                      value: yV,
                                      placeholder: "No name",
                                      onChange: VV => {
                                        pV(VV.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, kV.jsx)(hY, {
                                  synth: VV,
                                  onChange: xV => {
                                    const JV = {
                                      ...VV,
                                      ...xV
                                    };
                                    eV(JV);
                                    const YV = {
                                        ...BV,
                                        voice: JV
                                      },
                                      UV = performance.now();
                                    if (UV - rV.current >= uY) {
                                      rV.current = UV, bV();
                                      const VV = (0, MY.g)(YV).plan.blips[0];
                                      VV && (ZV.current = SY((0, NY.j)(JV), [{
                                        ...VV,
                                        atMs: 0
                                      }], wV))
                                    }
                                    window.clearTimeout(vV.current), vV.current = window.setTimeout((() => {
                                      FV(jV.current)
                                    }), HY)
                                  }
                                })]
                              }), (0, kV.jsx)(PV, {
                                code: TV,
                                lang: "ts"
                              })]
                            })
                          }
                          var dY = xV(5364);
                          const OY = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            VU = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            eU = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${VU}`, "g"), dY.o],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, dY.o]
                            ];

                          function xU(VV) {
                            return `${VV.pageId}#${VV.anchor}`
                          }
                          let JU, YU, UU;

                          function yU(VV) {
                            const eV = (0, AV.l)(VV),
                              xV = new Set;
                            for (const [, , JV] of eV.matchAll(AV.d)) {
                              const VV = JV.startsWith("#") ? LV(JV) : null,
                                eV = VV ? xU({
                                  pageId: VV.page.id,
                                  anchor: VV.anchor
                                }) : null;
                              null !== eV && (JU || (JU = new Set(CV.flatMap((VV => zV(VV.layout) ? hV(VV).sections.map((eV => xU({
                                pageId: VV.id,
                                anchor: eV.heading.anchor
                              }))) : [])))), JU).has(eV) && xV.add(eV)
                            }
                            for (const [, , JV] of eV.matchAll(OY)) {
                              const VV = ve(JV);
                              VV && xV.add(xU(VV))
                            }
                            return xV
                          }

                          function pU(VV, eV) {
                            const xV = new Set,
                              JV = function(VV) {
                                return VV.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(VV);
                            for (const [, YV] of JV.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) xV.add(YV);
                            for (const [YV, UV] of eU)
                              for (const [, VV] of(0, dY.h)(JV, YV, UV)) eV.has(VV) && xV.add(VV);
                            return xV
                          }

                          function QU(VV, eV, xV, JV) {
                            const YV = VV.get(eV);
                            YV ? !JV && YV.some((VV => VV.pageId === xV.pageId)) || YV.push(xV) : VV.set(eV, [xV])
                          }
                          const nU = /^[A-Za-z_$][\w$]*$/;

                          function wU(VV) {
                            return nU.test(VV.name) ? VV.name : "options"
                          }

                          function ZU(VV, eV) {
                            const xV = VV.params.map(wU).join(", ");
                            return eV ? `${VV.name} = (${xV}) => {\n\t\n}` : `api.${VV.name}(${xV})`
                          }

                          function vU(VV) {
                            let {
                              method: eV,
                              isCallback: xV
                            } = VV;
                            return (0, kV.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, kV.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [xV ? (0, kV.jsxs)(kV.Fragment, {
                                  children: [(0, kV.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: eV.name
                                  }), (0, kV.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, kV.jsxs)(kV.Fragment, {
                                  children: [(0, kV.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, kV.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: eV.name
                                  }), (0, kV.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), eV.params.map(((VV, xV) => (0, kV.jsxs)(JV.Fragment, {
                                  children: [xV > 0 && (0, kV.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, kV.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${eV.name}-${wU(VV)}`,
                                    children: VV.name
                                  })]
                                }, VV.name))), (0, kV.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: xV ? ") => " : ")"
                                }), xV && !eV.returns && (0, kV.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), eV.returns && eV.returns.type && (0, kV.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!xV && (0, kV.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, kV.jsx)(Ne, {
                                  type: eV.returns.type
                                })]
                              })]
                            })
                          }

                          function rU(VV) {
                            let {
                              title: eV,
                              references: xV
                            } = VV;
                            const YV = (0, JV.useContext)(re);
                            return (0, kV.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, kV.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: eV
                              }), xV.map((VV => (0, kV.jsx)(yV.b, {
                                to: mV(YV, oV(VV.pageId), VV.anchor),
                                children: VV.label
                              }, `${VV.pageId}#${VV.anchor}`)))]
                            })
                          }

                          function kU(VV) {
                            var eV, xV;
                            let {
                              pageId: JV,
                              anchor: YV
                            } = VV;
                            const UV = xU({
                                pageId: JV,
                                anchor: YV
                              }),
                              yV = null !== (eV = function() {
                                if (!UU) {
                                  UU = new Map;
                                  const JV = new Set(CV.filter((VV => "callbacks" === VV.layout)).flatMap((VV => hV(VV).sections.map((VV => VV.heading.text)))));
                                  for (const YV of CV)
                                    if ("article" === YV.layout || "snippets" === YV.layout)
                                      for (const UV of (0, AV.A)(hV(YV)))
                                        for (const {
                                            code: yV
                                          }
                                          of(0, AV.n)(UV.blocks))
                                          for (const pV of pU(yV, JV)) {
                                            const JV = Ze().get(pV);
                                            if (JV) {
                                              var VV, eV, xV;
                                              const yV = {
                                                pageId: YV.id,
                                                anchor: null !== (VV = null === (eV = UV.heading) || void 0 === eV ? void 0 : eV.anchor) && void 0 !== VV ? VV : "",
                                                label: null !== (xV = YV.navTitle) && void 0 !== xV ? xV : YV.title
                                              };
                                              QU(UU, xU(JV), yV, !1)
                                            }
                                          }
                                }
                                return UU
                              }().get(UV)) && void 0 !== eV ? eV : [],
                              pV = null !== (xV = function() {
                                if (!YU) {
                                  YU = new Map;
                                  const VV = oV("changelog");
                                  for (const eV of hV(VV).sections) {
                                    const xV = new Set(eV.blocks.flatMap((VV => [...yU(VV)])));
                                    for (const JV of xV) {
                                      const xV = {
                                        pageId: VV.id,
                                        anchor: eV.heading.anchor,
                                        label: eV.heading.text
                                      };
                                      QU(YU, JV, xV, !0)
                                    }
                                  }
                                }
                                return YU
                              }().get(UV)) && void 0 !== xV ? xV : [];
                            return 0 === yV.length && 0 === pV.length ? null : (0, kV.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [yV.length > 0 && (0, kV.jsx)(rU, {
                                title: "Used in",
                                references: yV
                              }), pV.length > 0 && (0, kV.jsx)(rU, {
                                title: "Changelog",
                                references: pV
                              })]
                            })
                          }

                          function bU(VV) {
                            let {
                              method: eV,
                              pageId: xV,
                              anchor: JV,
                              isCallback: YV
                            } = VV;
                            const UV = YV ? void 0 : pe().get(eV.name),
                              yV = eV.description.length > 0 || null === UV || void 0 === UV || !UV.description ? eV.description : (0, AV.I)(UV.description);
                            return (0, kV.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, kV.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, kV.jsx)(nx, {
                                  level: 2,
                                  text: eV.name,
                                  anchor: JV,
                                  className: "DocsCardTitle"
                                }), (0, kV.jsx)(qV, {
                                  text: ZU(eV, YV),
                                  label: YV ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, kV.jsx)(vU, {
                                method: eV,
                                isCallback: YV
                              }), UV && null !== UV.deprecation && (0, kV.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, kV.jsx)("strong", {
                                  children: "Deprecated"
                                }), UV.deprecation && (0, kV.jsxs)(kV.Fragment, {
                                  children: [": ", (0, kV.jsx)(Te, {
                                    text: (pV = UV.deprecation, (0, dY.z)(pV, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, dY.l)("`\\w"), (VV => {
                                      let [eV] = VV;
                                      return Ze().has(eV) ? `\`${eV}\`` : eV
                                    })))
                                  })]
                                })]
                              }), yV.length > 0 && (0, kV.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, kV.jsx)(rx, {
                                  blocks: yV
                                })
                              }), eV.params.length > 0 && (0, kV.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, kV.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, kV.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: eV.params.map((VV => (0, kV.jsxs)("div", {
                                    id: `${eV.name}-${wU(VV)}`,
                                    className: "DocsParam",
                                    children: [(0, kV.jsxs)("dt", {
                                      children: [(0, kV.jsx)("code", {
                                        className: "DocsParamName",
                                        children: VV.name
                                      }), (0, kV.jsx)(Ne, {
                                        type: VV.type
                                      })]
                                    }), VV.description && (0, kV.jsx)("dd", {
                                      children: (0, kV.jsx)(Te, {
                                        text: VV.description
                                      })
                                    })]
                                  }, VV.name)))
                                })]
                              }), eV.returns && (eV.returns.type || eV.returns.description.length > 0) && (0, kV.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, kV.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, kV.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [eV.returns.type && (0, kV.jsx)(Ne, {
                                    type: eV.returns.type
                                  }), eV.returns.description.length > 0 && (0, kV.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, kV.jsx)(rx, {
                                      blocks: eV.returns.description
                                    })
                                  })]
                                })]
                              }), (0, kV.jsx)(kU, {
                                pageId: xV,
                                anchor: JV
                              })]
                            });
                            var pV
                          }

                          function EU(VV) {
                            var eV;
                            return null !== VV.defaultValue && "undefined" !== VV.defaultValue ? VV.defaultValue : null !== (eV = VV.example) && void 0 !== eV ? eV : "value"
                          }

                          function BU(VV) {
                            let {
                              setting: eV,
                              pageId: xV,
                              anchor: JV,
                              setterSnippet: YV
                            } = VV;
                            const UV = null === eV.defaultValue ? null : Be(eV.defaultValue);
                            return (0, kV.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, kV.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, kV.jsx)(nx, {
                                  level: 2,
                                  text: eV.name,
                                  anchor: JV,
                                  className: "DocsCardTitle"
                                }), (0, kV.jsx)(qV, {
                                  text: YV(eV.name, EU(eV)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, kV.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, kV.jsxs)("div", {
                                  children: [(0, kV.jsx)("dt", {
                                    children: "Type"
                                  }), (0, kV.jsx)("dd", {
                                    children: (0, kV.jsx)(Ne, {
                                      type: eV.type
                                    })
                                  })]
                                }), null !== eV.defaultValue && (0, kV.jsxs)("div", {
                                  children: [(0, kV.jsx)("dt", {
                                    children: "Default"
                                  }), (0, kV.jsx)("dd", {
                                    children: (0, kV.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [UV && (0, kV.jsx)(je, {
                                        colour: UV
                                      }), eV.defaultValue]
                                    })
                                  })]
                                }), null !== eV.example && (0, kV.jsxs)("div", {
                                  children: [(0, kV.jsx)("dt", {
                                    children: "Example"
                                  }), (0, kV.jsx)("dd", {
                                    children: (0, kV.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: eV.example
                                    })
                                  })]
                                })]
                              }), eV.description.length > 0 && (0, kV.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, kV.jsx)(rx, {
                                  blocks: eV.description
                                })
                              }), (0, kV.jsx)(kU, {
                                pageId: xV,
                                anchor: JV
                              })]
                            })
                          }

                          function jU(VV) {
                            let {
                              section: eV
                            } = VV;
                            return (0, kV.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, kV.jsx)(nx, {
                                level: 2,
                                text: eV.heading.text,
                                anchor: eV.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, kV.jsx)("div", {
                                className: "DocsProse",
                                children: (0, kV.jsx)(rx, {
                                  blocks: eV.blocks
                                })
                              })]
                            })
                          }

                          function qU(VV) {
                            let {
                              section: eV
                            } = VV;
                            return (0, kV.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, kV.jsx)(nx, {
                                level: eV.heading.level,
                                text: eV.heading.text,
                                anchor: eV.heading.anchor
                              }), (0, kV.jsx)(rx, {
                                blocks: eV.blocks
                              })]
                            })
                          }
                          const tU = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function FU(VV) {
                            let {
                              page: eV,
                              section: xV
                            } = VV;
                            if ("methods" === eV.layout || "callbacks" === eV.layout) return (0, kV.jsx)(bU, {
                              method: Px(xV),
                              pageId: eV.id,
                              anchor: xV.heading.anchor,
                              isCallback: "callbacks" === eV.layout
                            });
                            if ("settings" === eV.layout) {
                              const VV = function(VV) {
                                const eV = {
                                  name: VV.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const JV of VV.blocks) {
                                  var xV;
                                  if (Tx(JV)) continue;
                                  const VV = "paragraph" === JV.kind ? JV.text.match(Ax) : null;
                                  if (!VV) {
                                    eV.description.push(JV);
                                    continue
                                  }
                                  const YV = null !== (xV = Fx(VV[2])) && void 0 !== xV ? xV : VV[2];
                                  "Type" === VV[1] ? eV.type = YV : "Default" === VV[1] ? eV.defaultValue = YV : "" !== YV && (eV.example = YV)
                                }
                                return eV.type ? eV : null
                              }(xV);
                              if (VV) return (0, kV.jsx)(BU, {
                                setting: VV,
                                pageId: eV.id,
                                anchor: xV.heading.anchor,
                                setterSnippet: eV.setterSnippet
                              })
                            }
                            return "snippets" === eV.layout ? (0, kV.jsx)(jU, {
                              section: xV
                            }) : "changelog" === eV.layout ? (0, kV.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, kV.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, kV.jsx)(nx, {
                                  level: 2,
                                  text: xV.heading.text,
                                  anchor: xV.heading.anchor
                                })
                              }), (0, kV.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, kV.jsx)(rx, {
                                  blocks: Nx(xV.blocks)
                                })
                              })]
                            }) : eV.gallery ? (0, kV.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, kV.jsx)(nx, {
                                level: xV.heading.level,
                                text: xV.heading.text,
                                anchor: xV.heading.anchor
                              }), (0, kV.jsx)(XJ, {
                                kind: eV.gallery,
                                content: hV(eV),
                                blocks: xV.blocks
                              })]
                            }) : (0, kV.jsx)(qU, {
                              section: xV
                            })
                          }

                          function TU(VV) {
                            let {
                              page: eV,
                              onTocChange: xV
                            } = VV;
                            const YV = hV(eV),
                              [UV, yV] = (0, JV.useState)(""),
                              pV = "article" !== eV.layout,
                              QV = Ex(eV.gallery) ? eV.gallery : null,
                              nV = null !== QV,
                              wV = UV.trim().toLowerCase(),
                              ZV = (0, JV.useRef)(null),
                              vV = (0, JV.useCallback)((VV => {
                                var eV;
                                null === (eV = ZV.current) || void 0 === eV || eV.preview(VV)
                              }), []),
                              rV = (0, JV.useMemo)((() => {
                                if (!eV.hasParticlePlayground) return [];
                                const VV = Gx(YV.intro).find((VV => "names" === VV.kind && !VV.names.some((VV => null !== cx(VV.name)))));
                                return "names" === (null === VV || void 0 === VV ? void 0 : VV.kind) ? VV.names.map((VV => VV.name)) : []
                              }), [eV, YV]),
                              bV = (0, JV.useMemo)((() => {
                                if (!eV.hasTextPlayground) return [];
                                const VV = YV.sections.flatMap((VV => VV.blocks.flatMap((VV => {
                                  var eV;
                                  return (null !== (eV = zx(VV)) && void 0 !== eV ? eV : []).flatMap((VV => ce(VV.name) ? [VV.name] : []))
                                }))));
                                return [...new Set(VV)]
                              }), [eV, YV]),
                              EV = (0, JV.useMemo)((() => wV ? YV.sections.filter((VV => function(VV, eV) {
                                return !!VV.heading.text.toLowerCase().includes(eV) || VV.blocks.some((VV => (0, AV.l)(VV).toLowerCase().includes(eV)))
                              }(VV, wV))) : YV.sections), [YV, wV]),
                              BV = (0, JV.useMemo)((() => function(VV, eV) {
                                return "article" !== VV.layout ? eV.map((VV => ({
                                  anchor: VV.heading.anchor,
                                  text: VV.heading.text,
                                  level: 2
                                }))) : eV.flatMap((VV => {
                                  const eV = VV.blocks.flatMap((VV => "heading" === VV.kind && 3 === VV.level ? [{
                                    anchor: VV.anchor,
                                    text: VV.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: VV.heading.anchor,
                                    text: VV.heading.text,
                                    level: 2
                                  }, ...eV]
                                }))
                              }(eV, EV)), [eV, EV]);
                            return (0, JV.useEffect)((() => {
                              xV(BV)
                            }), [BV, xV]), (0, kV.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, kV.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, kV.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: YV.title || eV.title
                                }), (0, kV.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: eV.summary
                                }), (0, kV.jsx)(sJ, {
                                  page: eV
                                }), pV && (0, kV.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, kV.jsxs)("span", {
                                    children: [(0, kV.jsx)("strong", {
                                      children: YV.sections.length
                                    }), " ", tU[eV.layout]]
                                  })
                                })]
                              }), "" === eV.slug && (0, kV.jsx)(zJ, {}), QV && (0, kV.jsx)(gJ, {
                                kind: QV
                              }, QV), eV.hasParticlePlayground && (0, kV.jsx)(QY, {
                                ref: ZV,
                                textures: rV
                              }), !nV && YV.intro.length > 0 && (0, kV.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: eV.gallery ? (0, kV.jsx)(BJ.Provider, {
                                  value: eV.hasParticlePlayground ? vV : null,
                                  children: (0, kV.jsx)(XJ, {
                                    kind: eV.gallery,
                                    content: YV,
                                    blocks: YV.intro
                                  })
                                }) : (0, kV.jsx)(rx, {
                                  blocks: Nx(YV.intro)
                                })
                              }), eV.hasTextPlayground && (0, kV.jsx)(AY, {
                                fontAwesomeIcons: bV
                              }), eV.hasVoicePlayground && (0, kV.jsx)(IY, {}), eV.childPageIds && (0, kV.jsx)(zJ, {
                                cards: eV.childPageIds.map((VV => ({
                                  pageId: VV
                                }))),
                                label: eV.title
                              }), pV && (0, kV.jsx)(qx, {
                                className: "DocsFilterBar",
                                value: UV,
                                placeholder: `Filter ${YV.sections.length} ${tU[eV.layout]}\u2026`,
                                label: `Filter ${tU[eV.layout]}`,
                                onChange: yV,
                                count: wV ? {
                                  visible: EV.length,
                                  total: YV.sections.length
                                } : null
                              }), !nV && (0, kV.jsxs)("div", {
                                className: `DocsSections Layout-${eV.layout}`,
                                children: [EV.map((VV => (0, kV.jsx)(FU, {
                                  page: eV,
                                  section: VV
                                }, VV.heading.anchor))), 0 === EV.length && (0, kV.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", tU[eV.layout], " match \u201c", UV, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const PU = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function AU(VV) {
                            let {
                              entry: eV,
                              isActive: xV,
                              onNavigate: JV,
                              label: YV,
                              children: yV
                            } = VV;
                            return (0, kV.jsx)("a", {
                              href: `#${eV.anchor}`,
                              "aria-label": YV,
                              className: UV()(`Level${eV.level}`, {
                                Active: xV
                              }),
                              "aria-current": xV ? "location" : void 0,
                              onClick: VV => {
                                VV.preventDefault(), JV(eV.anchor)
                              },
                              children: yV
                            })
                          }

                          function NU(VV) {
                            let {
                              toc: eV,
                              activeAnchor: xV,
                              onNavigate: YV
                            } = VV;
                            const yV = Math.max(0, eV.findIndex((VV => VV.anchor === xV))),
                              pV = (0, JV.useRef)(null),
                              QV = (0, JV.useRef)(!1);
                            (0, JV.useEffect)((() => {
                              var VV, xV;
                              const JV = null === (VV = pV.current) || void 0 === VV ? void 0 : VV.closest(".DocsToc"),
                                YV = null === (xV = pV.current) || void 0 === xV ? void 0 : xV.querySelector(".DocsTimelineNotch.Active");
                              if (!JV || !YV) return;
                              let UV = 0;
                              if (yV === eV.length - 1) UV = JV.scrollHeight;
                              else if (yV > 0) {
                                const VV = JV.getBoundingClientRect(),
                                  eV = YV.getBoundingClientRect();
                                UV = JV.scrollTop + eV.top + eV.height / 2 - (VV.top + JV.clientHeight / 2)
                              }
                              JV.scrollTo({
                                top: UV,
                                behavior: QV.current ? "smooth" : "auto"
                              }), QV.current = !0
                            }), [yV, eV.length]);
                            const nV = [];
                            return eV.forEach(((VV, eV) => {
                              var xV, JV, YV;
                              const UV = function(VV) {
                                  const eV = VV.trim().match(PU);
                                  return eV ? {
                                    day: eV[1],
                                    month: `${eV[2]} ${eV[3]}`
                                  } : null
                                }(VV.text),
                                yV = null !== (xV = null === UV || void 0 === UV ? void 0 : UV.month) && void 0 !== xV ? xV : null;
                              null !== yV && (null === (JV = nV.at(-1)) || void 0 === JV ? void 0 : JV.month) === yV || nV.push({
                                month: yV,
                                entries: []
                              }), nV.at(-1).entries.push({
                                entry: VV,
                                day: null !== (YV = null === UV || void 0 === UV ? void 0 : UV.day) && void 0 !== YV ? YV : null,
                                index: eV
                              })
                            })), (0, kV.jsx)("ol", {
                              ref: pV,
                              className: "DocsTimeline",
                              children: nV.map((VV => {
                                let {
                                  month: eV,
                                  entries: xV
                                } = VV;
                                return (0, kV.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [eV && (0, kV.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: eV
                                  }), (0, kV.jsx)("ol", {
                                    children: xV.map((VV => {
                                      let {
                                        entry: eV,
                                        day: xV,
                                        index: JV
                                      } = VV;
                                      return (0, kV.jsx)("li", {
                                        className: UV()("DocsTimelineNotch", {
                                          Passed: JV < yV,
                                          Active: JV === yV
                                        }),
                                        children: (0, kV.jsx)(AU, {
                                          entry: eV,
                                          isActive: JV === yV,
                                          onNavigate: YV,
                                          label: eV.text,
                                          children: (0, kV.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== xV && void 0 !== xV ? xV : eV.text
                                          })
                                        })
                                      }, eV.anchor)
                                    }))
                                  })]
                                }, xV[0].entry.anchor)
                              }))
                            })
                          }

                          function XU(VV) {
                            let {
                              isChangelog: eV,
                              toc: xV,
                              activeAnchor: JV,
                              onNavigate: YV
                            } = VV;
                            return 0 === xV.length ? null : (0, kV.jsxs)(kV.Fragment, {
                              children: [(0, kV.jsx)("div", {
                                className: "DocsTocTitle",
                                children: eV ? "Updates" : "On this page"
                              }), eV ? (0, kV.jsx)(NU, {
                                toc: xV,
                                activeAnchor: JV,
                                onNavigate: YV
                              }) : (0, kV.jsx)("ul", {
                                children: xV.map((VV => (0, kV.jsx)("li", {
                                  children: (0, kV.jsx)(AU, {
                                    entry: VV,
                                    isActive: VV.anchor === JV,
                                    onNavigate: YV,
                                    children: VV.text.replace(/`/g, "")
                                  })
                                }, VV.anchor)))
                              })]
                            })
                          }
                          const MU = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            zU = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            GU = 20,
                            WU = 10,
                            RU = 40,
                            gU = 120;
                          let DU;

                          function iU(VV) {
                            const eV = VV.gallery;
                            if (!eV) return [];
                            if (Ex(eV)) return function(VV) {
                              return jx(VV).entries.map((VV => VV.name))
                            }(eV).map((xV => ({
                              page: VV,
                              anchor: Rx(eV, xV),
                              title: xV,
                              kind: zU[eV],
                              text: "",
                              listedUnder: VV.title
                            })));
                            const xV = hV(VV);
                            return (0, AV.A)(xV).flatMap((JV => {
                              const YV = JV.heading ? `${VV.title} \u203a ${JV.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : VV.title;
                              return Dx(eV, xV, JV.blocks).flatMap((xV => "names" !== xV.kind ? [] : xV.names.map((JV => {
                                const UV = xV.isSongs ? "Song" : zU[eV];
                                return {
                                  page: VV,
                                  anchor: JV.anchor,
                                  title: JV.name,
                                  kind: UV,
                                  text: "",
                                  listedUnder: YV
                                }
                              }))))
                            }))
                          }

                          function CU(VV, eV, xV) {
                            const JV = VV.title.toLowerCase();
                            let YV = 0;
                            if (JV === eV) YV = 100;
                            else if (JV.startsWith(eV)) YV = 80;
                            else if (JV.includes(eV)) YV = 60;
                            else if (xV.every((VV => JV.includes(VV)))) YV = 45;
                            else {
                              if (!VV.text.toLowerCase().includes(eV)) return 0;
                              YV = 20
                            }
                            return YV - Math.min(JV.length / 10, 9) + ("Page" === VV.kind ? 8 : "Method" === VV.kind ? 3 : 0) - (VV.listedUnder ? GU : 0)
                          }

                          function aU(VV, eV) {
                            const xV = VV.toLowerCase().indexOf(eV),
                              JV = Math.max(0, xV - gU / 3);
                            return `${JV>0?"\u2026":""}${VV.slice(JV,JV+gU)}${JV+gU<VV.length?"\u2026":""}`
                          }

                          function oU(VV) {
                            let {
                              text: eV,
                              query: xV
                            } = VV;
                            const JV = xV ? eV.toLowerCase().indexOf(xV) : -1;
                            return -1 === JV ? (0, kV.jsx)(kV.Fragment, {
                              children: eV
                            }) : (0, kV.jsxs)(kV.Fragment, {
                              children: [eV.slice(0, JV), (0, kV.jsx)("mark", {
                                children: eV.slice(JV, JV + xV.length)
                              }), eV.slice(JV + xV.length)]
                            })
                          }

                          function cU(VV) {
                            let {
                              basePath: eV,
                              onClose: xV
                            } = VV;
                            const YV = (0, pV.v)(),
                              [yV, QV] = (0, JV.useState)(""),
                              [nV, wV] = (0, JV.useState)(0),
                              ZV = (0, JV.useRef)(null),
                              vV = (0, JV.useRef)(null),
                              rV = yV.trim().toLowerCase(),
                              bV = (0, JV.useMemo)((() => {
                                const VV = (DU || (DU = CV.flatMap((VV => {
                                  const eV = hV(VV);
                                  return [{
                                    page: VV,
                                    anchor: "",
                                    title: VV.title,
                                    kind: "Page",
                                    text: VV.summary
                                  }, ...eV.sections.flatMap((eV => {
                                    const xV = eV.blocks.filter((VV => "paragraph" === VV.kind)).map(AV.l).join(" ").replace(/[`*]/g, ""),
                                      JV = {
                                        page: VV,
                                        anchor: eV.heading.anchor,
                                        title: eV.heading.text.replace(/`/g, ""),
                                        kind: MU[VV.layout],
                                        text: xV
                                      },
                                      YV = eV.blocks.flatMap((eV => "article" === VV.layout && "heading" === eV.kind && 3 === eV.level ? [{
                                        page: VV,
                                        anchor: eV.anchor,
                                        title: eV.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: JV.title
                                      }] : []));
                                    return [JV, ...YV]
                                  })), ...iU(VV)]
                                }))), DU);
                                if (!rV) return VV.filter((VV => "Page" === VV.kind));
                                const eV = rV.split(/\s+/);
                                let xV = 0;
                                return VV.map((VV => ({
                                  entry: VV,
                                  score: CU(VV, rV, eV)
                                }))).filter((VV => VV.score > 0)).sort(((VV, eV) => eV.score - VV.score)).filter((VV => !VV.entry.listedUnder || (xV++, xV <= WU))).slice(0, RU).map((VV => VV.entry))
                              }), [rV]);
                            (0, JV.useEffect)((() => {
                              wV(0)
                            }), [rV]), (0, JV.useEffect)((() => {
                              const VV = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === VV || void 0 === VV || VV.focus()
                              }
                            }), []), (0, JV.useEffect)((() => {
                              var VV, eV;
                              null === (VV = ZV.current) || void 0 === VV || null === (eV = VV.querySelector(".Active")) || void 0 === eV || eV.scrollIntoView({
                                block: "nearest"
                              })
                            }), [nV]);
                            const BV = VV => {
                              YV(mV(eV, VV.page, VV.anchor)), xV()
                            };
                            return (0, kV.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: VV => {
                                VV.target === VV.currentTarget && xV()
                              },
                              children: (0, kV.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: VV => {
                                  VV.target !== vV.current && VV.preventDefault()
                                },
                                onKeyDown: VV => {
                                  if ("Escape" === VV.key) xV();
                                  else if ("Tab" === VV.key) {
                                    var eV;
                                    VV.preventDefault(), null === (eV = vV.current) || void 0 === eV || eV.focus()
                                  }
                                },
                                children: [(0, kV.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, kV.jsx)(EV, {
                                    name: "magnifying-glass"
                                  }), (0, kV.jsx)("input", {
                                    ref: vV,
                                    autoFocus: !0,
                                    value: yV,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": bV.length > 0 ? `DocsSearchResult-${nV}` : void 0,
                                    onChange: VV => {
                                      QV(VV.target.value)
                                    },
                                    onKeyDown: VV => {
                                      if ("ArrowDown" === VV.key || "ArrowUp" === VV.key) {
                                        VV.preventDefault();
                                        const eV = "ArrowDown" === VV.key ? 1 : -1;
                                        wV((nV + eV + bV.length) % Math.max(bV.length, 1))
                                      } else "Enter" === VV.key && bV[nV] && BV(bV[nV])
                                    }
                                  }), (0, kV.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, kV.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: ZV,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!rV && (0, kV.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), bV.map(((VV, eV) => {
                                    var xV;
                                    return (0, kV.jsxs)("li", {
                                      id: `DocsSearchResult-${eV}`,
                                      role: "option",
                                      "aria-selected": eV === nV,
                                      className: UV()("DocsSearchResult", {
                                        Active: eV === nV
                                      }),
                                      onMouseMove: () => {
                                        wV(eV)
                                      },
                                      onClick: () => {
                                        BV(VV)
                                      },
                                      children: [(0, kV.jsx)(EV, {
                                        name: VV.page.icon
                                      }), (0, kV.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, kV.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, kV.jsx)(oU, {
                                            text: VV.title,
                                            query: rV
                                          })
                                        }), VV.text && (0, kV.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, kV.jsx)(oU, {
                                            text: aU(VV.text, rV),
                                            query: rV
                                          })
                                        })]
                                      }), (0, kV.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === VV.kind ? "Page" : null !== (xV = VV.listedUnder) && void 0 !== xV ? xV : `${VV.kind} \xb7 ${VV.page.title}`
                                      })]
                                    }, `${VV.page.id}#${VV.anchor}`)
                                  })), rV && 0 === bV.length && (0, kV.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", yV, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function hU(VV, eV) {
                            if (eV < 10) return `${VV.toFixed(1)}s`;
                            const xV = Math.floor(VV);
                            return `${Math.floor(xV/60)}:${String(xV%60).padStart(2,"0")}`
                          }

                          function lU() {
                            const VV = wJ((VV => VV.track)),
                              eV = wJ((VV => VV.volume)),
                              [xV, YV] = (0, JV.useState)(0),
                              yV = (0, JV.useRef)(eJ);
                            if ((0, JV.useEffect)((() => {
                                if (!VV) return;
                                if (YV(kJ()), "playing" !== VV.status) return;
                                let eV = 0;
                                const xV = () => {
                                  YV(kJ()), eV = requestAnimationFrame(xV)
                                };
                                return eV = requestAnimationFrame(xV), () => {
                                  cancelAnimationFrame(eV)
                                }
                              }), [VV]), !VV) return null;
                            const pV = "paused" !== VV.status,
                              QV = Math.min(xV, VV.duration);
                            return (0, kV.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, kV.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, kV.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": pV ? `Pause ${VV.name}` : `Play ${VV.name}`,
                                  onClick: rJ,
                                  children: (0, kV.jsx)(EV, {
                                    name: pV ? "pause" : "play"
                                  })
                                }), (0, kV.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, kV.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, kV.jsx)("code", {
                                      children: VV.name
                                    }), (0, kV.jsx)("span", {
                                      children: VV.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, kV.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, kV.jsx)("span", {
                                      children: hU(QV, VV.duration)
                                    }), (0, kV.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: VV.duration || 1,
                                      step: .01,
                                      value: QV,
                                      disabled: 0 === VV.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${hU(QV,VV.duration)} of ${hU(VV.duration,VV.duration)}`,
                                      onChange: VV => {
                                        const eV = Number(VV.target.value);
                                        ! function(VV) {
                                          var eV;
                                          yJ = VV, null === (eV = YJ) || void 0 === eV || eV.seek(VV)
                                        }(eV), YV(eV)
                                      }
                                    }), (0, kV.jsx)("span", {
                                      children: VV.duration > 0 ? hU(VV.duration, VV.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, kV.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, kV.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === eV ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === eV ? bJ(yV.current) : (yV.current = eV, bJ(0))
                                    },
                                    children: (0, kV.jsx)(EV, {
                                      name: "volume",
                                      className: UV()({
                                        Muted: 0 === eV
                                      })
                                    })
                                  }), (0, kV.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: eV,
                                    "aria-label": "Volume",
                                    onChange: VV => {
                                      bJ(Number(VV.target.value))
                                    }
                                  })]
                                }), (0, kV.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var eV;
                                    null === (eV = document.querySelector(`[data-docs-track="${CSS.escape(xJ(VV.name,VV.isSong))}"]`)) || void 0 === eV || eV.focus(), EJ()
                                  },
                                  children: (0, kV.jsx)(EV, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var LU = xV(40);
                          const fU = "docsTheme",
                            mU = window.matchMedia("(prefers-color-scheme: light)");

                          function KU(VV) {
                            let {
                              theme: eV,
                              onChange: xV
                            } = VV;
                            const JV = "dark" === eV ? "light" : "dark";
                            return (0, kV.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${JV} theme`,
                              title: `Switch to ${JV} theme`,
                              onClick: () => {
                                xV(JV)
                              },
                              children: (0, kV.jsx)(EV, {
                                name: "dark" === eV ? "moon" : "sun"
                              })
                            })
                          }
                          const HU = "https://github.com/Bloxdy/code-api",
                            uU = "https://discord.gg/playbloxd",
                            sU = 180,
                            SU = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function IU(VV) {
                            let {
                              basePath: eV,
                              activePageId: xV,
                              onNavigate: JV
                            } = VV;
                            return (0, kV.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: aV.map((VV => (0, kV.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, kV.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: VV.title
                                }), VV.pageIds.map((VV => {
                                  var YV;
                                  const pV = oV(VV);
                                  return (0, kV.jsxs)(yV.b, {
                                    to: mV(eV, pV),
                                    className: UV()("DocsNavLink", {
                                      Active: pV.id === xV
                                    }),
                                    "aria-current": pV.id === xV ? "page" : void 0,
                                    onClick: JV,
                                    children: [(0, kV.jsx)(EV, {
                                      name: pV.icon
                                    }), (0, kV.jsx)("span", {
                                      children: null !== (YV = pV.navTitle) && void 0 !== YV ? YV : pV.title
                                    })]
                                  }, pV.id)
                                }))]
                              }, VV.title)))
                            })
                          }

                          function dU(VV) {
                            let {
                              basePath: eV,
                              pageId: xV
                            } = VV;
                            const JV = aV.flatMap((VV => VV.pageIds)),
                              YV = JV.indexOf(xV),
                              UV = YV > 0 ? oV(JV[YV - 1]) : null,
                              pV = YV < JV.length - 1 ? oV(JV[YV + 1]) : null;
                            return (0, kV.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [UV ? (0, kV.jsxs)(yV.b, {
                                className: "DocsPagerLink Previous",
                                to: mV(eV, UV),
                                children: [(0, kV.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, kV.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: UV.title
                                })]
                              }) : (0, kV.jsx)("span", {}), pV && (0, kV.jsxs)(yV.b, {
                                className: "DocsPagerLink Next",
                                to: mV(eV, pV),
                                children: [(0, kV.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, kV.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: pV.title
                                })]
                              })]
                            })
                          }

                          function OU(VV) {
                            let {
                              basePath: eV,
                              embedded: xV = !1
                            } = VV;
                            const {
                              pageSlug: YV = ""
                            } = (0, pV.A)(), nV = (0, pV.r)(), wV = (0, pV.v)(), ZV = (vV = YV, CV.find((VV => VV.slug === vV)));
                            var vV;
                            const [rV, bV] = function() {
                              const [VV, eV] = (0, JV.useState)((() => {
                                const VV = LU.m.getItem(fU);
                                return "dark" === VV || "light" === VV ? VV : null
                              })), [xV, YV] = (0, JV.useState)(mU.matches ? "light" : "dark");
                              return (0, JV.useEffect)((() => {
                                const VV = () => {
                                  YV(mU.matches ? "light" : "dark")
                                };
                                return mU.addEventListener("change", VV), () => {
                                  mU.removeEventListener("change", VV)
                                }
                              }), []), [null !== VV && void 0 !== VV ? VV : xV, VV => {
                                LU.m.setItem(fU, VV), eV(VV)
                              }]
                            }(), [BV, jV] = (0, JV.useState)(null), [qV, tV] = (0, JV.useState)(!1), [FV, TV] = (0, JV.useState)(!1), [PV, NV] = (0, JV.useState)([]), XV = function(VV, eV) {
                              const [xV, YV] = (0, JV.useState)("");
                              return (0, JV.useEffect)((() => {
                                if (!eV) return;
                                let xV = 0;
                                const JV = () => {
                                    var JV, UV;
                                    xV = 0;
                                    const yV = eV.getBoundingClientRect().top + sU;
                                    let pV = null !== (JV = null === (UV = VV[0]) || void 0 === UV ? void 0 : UV.anchor) && void 0 !== JV ? JV : "";
                                    for (const eV of VV) {
                                      const VV = document.getElementById(eV.anchor);
                                      VV && VV.getBoundingClientRect().top <= yV && (pV = eV.anchor)
                                    }
                                    eV.scrollTop + eV.clientHeight >= eV.scrollHeight - 2 && eV.scrollTop > 0 && VV.length > 0 && (pV = VV[VV.length - 1].anchor), YV(pV)
                                  },
                                  UV = () => {
                                    xV || (xV = requestAnimationFrame(JV))
                                  };
                                return JV(), eV.addEventListener("scroll", UV, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(xV), eV.removeEventListener("scroll", UV)
                                }
                              }), [VV, eV]), xV
                            }(PV, BV), MV = "" === YV && nV.hash ? function(VV) {
                              const eV = (0, AV.v)(VV);
                              if (lV(oV("welcome"), eV)) return null;
                              const xV = Object.hasOwn(fV, eV) ? fV[eV] : null;
                              if (xV) return {
                                page: oV(xV.pageId),
                                anchor: xV.anchor
                              };
                              const JV = oV("readme");
                              return lV(JV, eV) ? {
                                page: JV,
                                anchor: eV
                              } : LV(`#${eV}`)
                            }(nV.hash) : null;
                            (0, JV.useEffect)((() => (QV.b.set({
                              musicOnFromPage: !1
                            }), () => {
                              QV.b.set({
                                musicOnFromPage: !0
                              }), EJ()
                            })), []), (0, JV.useEffect)((() => {
                              const VV = VV => {
                                const eV = VV.target;
                                if (eV.closest(".DocsTextDialog")) return;
                                const xV = eV.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(eV.tagName);
                                "k" === VV.key && (VV.metaKey || VV.ctrlKey) || "/" === VV.key && !xV ? (VV.preventDefault(), TV(!0)) : "Escape" === VV.key && tV(!1)
                              };
                              return window.addEventListener("keydown", VV), () => {
                                window.removeEventListener("keydown", VV)
                              }
                            }), []);
                            const zV = (0, JV.useRef)(null);
                            (0, JV.useLayoutEffect)((() => {
                              var VV, eV;
                              if (!BV) return;
                              const xV = zV.current === nV.pathname;
                              zV.current = nV.pathname;
                              const JV = (0, AV.v)(nV.hash),
                                YV = JV ? document.getElementById(JV) : null;
                              if (null === (VV = BV.querySelector(".DocsTargeted")) || void 0 === VV || VV.classList.remove("DocsTargeted"), null === YV || void 0 === YV || null === (eV = YV.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === eV || eV.classList.add("DocsTargeted"), YV) {
                                var UV;
                                const VV = YV.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (UV = YV.closest(".DocsChangelogEntry")) && void 0 !== UV ? UV : YV).scrollIntoView({
                                  block: VV ? "center" : "start",
                                  behavior: xV ? "smooth" : "auto"
                                })
                              } else xV || BV.scrollTo({
                                top: 0
                              })
                            }), [BV, nV.pathname, nV.hash, nV.key]);
                            const GV = (0, JV.useCallback)((() => {
                                tV(!1)
                              }), []),
                              WV = (0, JV.useCallback)((VV => {
                                wV({
                                  hash: VV
                                })
                              }), [wV]);
                            if (MV) return (0, kV.jsx)(pV.b, {
                              replace: !0,
                              to: mV(eV, MV.page, MV.anchor)
                            });
                            if (!ZV) return (0, kV.jsx)(pV.b, {
                              replace: !0,
                              to: eV
                            });
                            const RV = xV ? "div" : "main";
                            return (0, kV.jsx)(re.Provider, {
                              value: eV,
                              children: (0, kV.jsx)(ke.Provider, {
                                value: BV,
                                children: (0, kV.jsxs)("div", {
                                  ref: jV,
                                  className: UV()("DocsSite", {
                                    Embedded: xV,
                                    NavOpen: qV
                                  }),
                                  "data-theme": rV,
                                  children: [(0, kV.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, kV.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": qV ? "Close menu" : "Open menu",
                                      "aria-expanded": qV,
                                      onClick: () => {
                                        tV(!qV)
                                      },
                                      children: (0, kV.jsx)(EV, {
                                        name: qV ? "cross" : "menu"
                                      })
                                    }), (0, kV.jsxs)(yV.b, {
                                      to: eV,
                                      className: "DocsBrand",
                                      children: [(0, kV.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, kV.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, kV.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, kV.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        TV(!0)
                                      },
                                      children: [(0, kV.jsx)(EV, {
                                        name: "magnifying-glass"
                                      }), (0, kV.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, kV.jsxs)("kbd", {
                                        children: [SU ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, kV.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, kV.jsxs)("a", {
                                        href: uU,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, kV.jsx)(EV, {
                                          name: "discord"
                                        }), (0, kV.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, kV.jsxs)("a", {
                                        href: HU,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, kV.jsx)(EV, {
                                          name: "external-link"
                                        }), (0, kV.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !xV && (0, kV.jsxs)(yV.b, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, kV.jsx)(EV, {
                                          name: "play"
                                        }), (0, kV.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, kV.jsx)(KU, {
                                        theme: rV,
                                        onChange: bV
                                      })]
                                    })]
                                  }), (0, kV.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, kV.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, kV.jsx)(IU, {
                                        basePath: eV,
                                        activePageId: ZV.id,
                                        onNavigate: GV
                                      })
                                    }), (0, kV.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: GV
                                    }), (0, kV.jsxs)(RV, {
                                      className: "DocsMain",
                                      children: [(0, kV.jsx)(TU, {
                                        page: ZV,
                                        onTocChange: NV
                                      }, ZV.id), (0, kV.jsx)(dU, {
                                        basePath: eV,
                                        pageId: ZV.id
                                      })]
                                    }), (0, kV.jsx)("aside", {
                                      className: UV()("DocsToc", {
                                        Timeline: "changelog" === ZV.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, kV.jsx)(XU, {
                                        isChangelog: "changelog" === ZV.layout,
                                        toc: PV,
                                        activeAnchor: XV,
                                        onNavigate: WV
                                      })
                                    })]
                                  }), (0, kV.jsx)(lU, {}), FV && (0, kV.jsx)(cU, {
                                    basePath: eV,
                                    onClose: () => {
                                      TV(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 5243: (VV, eV, xV) => {
                          xV.d(eV, {
                            A: () => kV,
                            E: () => rV,
                            I: () => vV,
                            d: () => JV,
                            h: () => yV,
                            l: () => EV,
                            n: () => bV,
                            r: () => pV,
                            v: () => YV,
                            w: () => UV
                          });
                          const JV = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function YV(VV) {
                            try {
                              return decodeURIComponent(VV.slice(1))
                            } catch {
                              return VV.slice(1)
                            }
                          }

                          function UV(VV) {
                            return VV.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const yV = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${JV.source}`, "g");

                          function pV(VV, eV) {
                            return 2 === VV.length ? eV.replace(/^ (.*) $/, "$1") : eV
                          }

                          function QV(VV) {
                            return "" === VV.trim()
                          }

                          function nV(VV) {
                            const eV = [];
                            for (const xV of VV.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) eV.length > 0 && eV[eV.length - 1].endsWith("\\") ? eV[eV.length - 1] += `|${xV}` : eV.push(xV);
                            return eV.map((VV => VV.trim().replaceAll("\\|", "|")))
                          }
                          const wV = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function ZV(VV) {
                            const eV = [],
                              xV = [{
                                indent: -1,
                                items: eV
                              }];
                            let JV = null;
                            for (const YV of VV) {
                              const VV = YV.match(wV);
                              if (!VV) {
                                JV && (JV.text += ` ${YV.trim()}`);
                                continue
                              }
                              const eV = VV[1].replace(/\t/g, "  ").length;
                              for (; eV <= xV[xV.length - 1].indent;) xV.pop();
                              JV = {
                                text: VV[3].trim(),
                                children: []
                              }, xV[xV.length - 1].items.push(JV), xV.push({
                                indent: eV,
                                items: JV.children
                              })
                            }
                            return eV
                          }

                          function vV(VV) {
                            const eV = VV.replace(/\r\n/g, "\n").split("\n"),
                              xV = [];
                            let JV = 0;
                            for (; JV < eV.length;) {
                              const VV = eV[JV];
                              if (QV(VV)) {
                                JV++;
                                continue
                              }
                              const YV = VV.match(/^\s*```\s*(\w*)\s*$/);
                              if (YV) {
                                const VV = [];
                                for (JV++; JV < eV.length && !/^\s*```\s*$/.test(eV[JV]);) VV.push(eV[JV]), JV++;
                                JV++, xV.push({
                                  kind: "code",
                                  lang: YV[1] || "text",
                                  code: VV.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const yV = VV.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (yV) {
                                const VV = yV[2].trim();
                                xV.push({
                                  kind: "heading",
                                  level: yV[1].length,
                                  text: VV,
                                  anchor: UV(VV)
                                }), JV++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(VV)) {
                                xV.push({
                                  kind: "rule"
                                }), JV++;
                                continue
                              }
                              if (VV.trim().startsWith("|") && JV + 1 < eV.length && /^\s*\|[\s:|-]+\|\s*$/.test(eV[JV + 1])) {
                                const YV = nV(VV),
                                  UV = [];
                                for (JV += 2; JV < eV.length && eV[JV].trim().startsWith("|");) UV.push(nV(eV[JV])), JV++;
                                xV.push({
                                  kind: "table",
                                  header: YV,
                                  rows: UV
                                });
                                continue
                              }
                              if (VV.startsWith(">")) {
                                const VV = [];
                                for (; JV < eV.length && eV[JV].startsWith(">");) VV.push(eV[JV].replace(/^>\s?/, "")), JV++;
                                xV.push({
                                  kind: "quote",
                                  blocks: vV(VV.join("\n"))
                                });
                                continue
                              }
                              if (wV.test(VV)) {
                                const YV = [],
                                  UV = /^\s*\d+\./.test(VV);
                                for (; JV < eV.length && !QV(eV[JV]) && (wV.test(eV[JV]) || /^\s+\S/.test(eV[JV]));) YV.push(eV[JV]), JV++;
                                xV.push({
                                  kind: "list",
                                  ordered: UV,
                                  items: ZV(YV)
                                });
                                continue
                              }
                              const pV = [];
                              for (; JV < eV.length && !QV(eV[JV]) && !/^\s*```/.test(eV[JV]) && !/^#{1,6}\s/.test(eV[JV]) && !eV[JV].startsWith(">") && !wV.test(eV[JV]) && (!eV[JV].trim().startsWith("|") || 0 !== pV.length);) pV.push(eV[JV].trim()), JV++;
                              0 === pV.length && (pV.push(eV[JV].trim()), JV++), xV.push({
                                kind: "paragraph",
                                text: pV.join(" ")
                              })
                            }
                            return xV
                          }

                          function rV(VV) {
                            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const xV = vV(VV);
                            let JV = "";
                            const YV = [],
                              UV = [],
                              yV = new Map;
                            for (const nV of xV) {
                              if ("heading" === nV.kind) {
                                var pV;
                                const VV = (null !== (pV = yV.get(nV.anchor)) && void 0 !== pV ? pV : 0) + 1;
                                yV.set(nV.anchor, VV), VV > 1 && (nV.anchor = `${nV.anchor}-${VV}`)
                              }
                              if ("heading" === nV.kind && 1 === nV.level && !JV) {
                                JV = nV.text;
                                continue
                              }
                              if ("heading" === nV.kind && nV.level <= eV) {
                                UV.push({
                                  heading: nV,
                                  blocks: []
                                });
                                continue
                              }
                              const VV = UV.at(-1);
                              VV ? VV.blocks.push(nV) : YV.push(nV)
                            }
                            const QV = VV => {
                              for (;
                                "rule" === (null === (eV = VV.at(-1)) || void 0 === eV ? void 0 : eV.kind);) {
                                var eV;
                                VV.pop()
                              }
                            };
                            QV(YV);
                            for (const nV of UV) QV(nV.blocks);
                            return {
                              title: JV,
                              intro: YV,
                              sections: UV
                            }
                          }

                          function kV(VV) {
                            return [{
                              heading: null,
                              blocks: VV.intro
                            }, ...VV.sections.map((VV => ({
                              heading: VV.heading,
                              blocks: VV.blocks
                            })))]
                          }

                          function bV(VV) {
                            return VV.flatMap((VV => "code" === VV.kind ? [VV] : "quote" === VV.kind ? bV(VV.blocks) : []))
                          }

                          function EV(VV) {
                            switch (VV.kind) {
                              case "heading":
                              case "paragraph":
                                return VV.text;
                              case "code":
                                return VV.code;
                              case "table":
                                return [VV.header, ...VV.rows].map((VV => VV.join(" "))).join(" ");
                              case "list": {
                                const eV = VV => VV.map((VV => `${VV.text} ${eV(VV.children)}`)).join(" ");
                                return eV(VV.items)
                              }
                              case "quote":
                                return VV.blocks.map(EV).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 5335: (VV, eV, xV) => {
                          xV.d(eV, {
                            e: () => pV
                          });
                          var JV = xV(62),
                            YV = xV(364),
                            UV = xV(2039),
                            yV = xV(1321);

                          function pV(VV) {
                            let {
                              text: eV
                            } = VV;
                            const xV = [];
                            let pV = "";
                            return (0, YV.dc)(eV).forEach(((VV, eV) => {
                              if ("string" === typeof VV || !(0, UV.h)(VV.icon)) return void(pV += "string" === typeof VV ? VV : VV.icon);
                              const YV = Math.max(0, pV.trimEnd().search(/\S{1,12}$/));
                              xV.push((0, yV.jsxs)(JV.Fragment, {
                                children: [pV.slice(0, YV), (0, yV.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [pV.slice(YV), (0, yV.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": VV.icon,
                                    children: (0, yV.jsx)(UV.e, {
                                      itemName: VV.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, eV)), pV = ""
                            })), xV.push(pV), (0, yV.jsx)(yV.Fragment, {
                              children: xV
                            })
                          }
                        }, 5261: (VV, eV, xV) => {
                          xV.d(eV, {
                            e: () => jV,
                            b: () => BV
                          });
                          var JV = xV(62),
                            YV = xV(1542),
                            UV = xV(2021),
                            yV = xV(5264),
                            pV = xV(1321);
                          const QV = (0, JV.memo)((function(VV) {
                            let {
                              initialParameters: eV
                            } = VV;
                            const xV = (0, JV.useRef)(null),
                              YV = (0, JV.useRef)(null),
                              QV = (0, JV.useRef)(0),
                              nV = (0, JV.useRef)(null),
                              wV = eV.description,
                              ZV = eV.fJ,
                              {
                                scale: vV,
                                rotation: rV
                              } = null !== eV && void 0 !== eV ? eV : {},
                              kV = (0, yV.f)();
                            return (0, JV.useEffect)((() => {
                              const VV = kV.onFrame((() => {
                                const VV = kV.getState();
                                if (!VV.isActive || !xV.current || !YV.current) return;
                                const eV = VV.state;
                                if (xV.current.value = eV.progress, eV.clickCount > QV.current) {
                                  QV.current = eV.clickCount;
                                  const VV = YV.current;
                                  VV.classList.add("pulse"), nV.current = setTimeout((() => {
                                    VV.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(nV.current), VV()
                              }
                            }), [kV]), (0, pV.jsx)(pV.Fragment, {
                              children: (0, pV.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== vV && {
                                    "--scale": vV
                                  },
                                  ...null !== rV && {
                                    "--rotation": `${rV}deg`
                                  }
                                },
                                children: [(0, pV.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: xV
                                }), (0, pV.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: YV,
                                  children: (0, pV.jsx)(UV.b, {
                                    text: [{
                                      icon: ZV
                                    }]
                                  })
                                }), (0, pV.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, pV.jsx)(UV.b, {
                                    text: wV
                                  })
                                })]
                              })
                            })
                          }));
                          var nV = xV(1146),
                            wV = xV.n(nV);
                          const ZV = 2 * Math.PI * 90,
                            vV = (0, JV.memo)((function(VV) {
                              let {
                                initialParameters: eV
                              } = VV;
                              const xV = (0, JV.useRef)(null),
                                YV = (0, JV.useRef)(null),
                                QV = (0, JV.useRef)(null),
                                nV = eV.label,
                                vV = eV.icon,
                                rV = eV.HJ,
                                {
                                  scale: kV,
                                  rotation: bV,
                                  uJ: EV
                                } = null !== eV && void 0 !== eV ? eV : {},
                                BV = (0, yV.f)();
                              return (0, JV.useEffect)((() => {
                                const VV = BV.onFrame((() => {
                                  var VV, eV;
                                  const JV = BV.getState();
                                  if (!JV.isActive || !YV.current) return;
                                  const UV = JV.state,
                                    yV = null !== (VV = UV.timeRemaining) && void 0 !== VV ? VV : 0,
                                    pV = null !== (eV = UV.KJ) && void 0 !== eV ? eV : 1,
                                    nV = ZV * (1 - yV / pV);
                                  YV.current.style.strokeDashoffset = `${nV}`, xV.current && (xV.current.style.opacity = yV > 0 ? "1" : "0"), QV.current && rV && (QV.current.textContent = `${(yV/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  VV()
                                }
                              }), [BV, rV]), (0, pV.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: xV,
                                style: {
                                  ...null !== kV && {
                                    "--scale": kV
                                  },
                                  ...null !== bV && {
                                    "--rotation": `${bV}deg`
                                  }
                                },
                                children: [(0, pV.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, pV.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, pV.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, pV.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: ZV,
                                      ref: YV
                                    })]
                                  }), (0, pV.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, pV.jsx)(UV.b, {
                                      text: [{
                                        icon: vV
                                      }],
                                      className: wV()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: EV
                                      })
                                    })
                                  })]
                                }), (0, pV.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, pV.jsx)(UV.b, {
                                    text: nV,
                                    className: "QTETimedClickLabelText"
                                  }), rV && (0, pV.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: QV
                                  })]
                                })]
                              })
                            })),
                            rV = (0, JV.memo)((function(VV) {
                              let {
                                initialParameters: eV
                              } = VV;
                              const xV = (0, JV.useRef)(null),
                                YV = (0, JV.useRef)(null),
                                QV = (0, JV.useRef)(null),
                                nV = (0, JV.useRef)(!1),
                                wV = eV.description,
                                ZV = null === eV || void 0 === eV ? void 0 : eV.icon,
                                vV = (0, yV.f)();
                              return (0, JV.useEffect)((() => {
                                const VV = vV.onFrame((() => {
                                  const VV = vV.getState();
                                  if (!VV.isActive) return;
                                  const eV = VV.state;
                                  if (xV.current) {
                                    const VV = 100 * (eV.catchZonePosition - eV.SJ / 2);
                                    xV.current.style.left = `${VV}%`, xV.current.style.width = 100 * eV.SJ + "%", eV.isCatching !== nV.current && (nV.current = eV.isCatching, eV.isCatching ? xV.current.classList.add("catching") : xV.current.classList.remove("catching"))
                                  }
                                  YV.current && (YV.current.style.left = 100 * eV.moverPosition + "%"), QV.current && (QV.current.value = eV.progress)
                                }));
                                return () => {
                                  VV()
                                }
                              }), [vV]), (0, pV.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, pV.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, pV.jsx)(UV.b, {
                                    text: wV
                                  })
                                }), (0, pV.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: QV
                                }), (0, pV.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, pV.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: xV
                                  }), (0, pV.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: YV,
                                    children: (0, pV.jsx)("span", {
                                      children: ZV && (0, pV.jsx)(UV.b, {
                                        text: [{
                                          icon: ZV,
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
                          var kV = xV(657);
                          const bV = (0, JV.memo)((function(VV) {
                              let {
                                initialParameters: eV
                              } = VV;
                              const xV = (0, JV.useRef)(null),
                                YV = eV.label,
                                QV = eV.JY,
                                {
                                  icon: nV,
                                  scale: wV,
                                  rotation: ZV
                                } = null !== eV && void 0 !== eV ? eV : {},
                                vV = 100 * (.5 - QV / 2),
                                rV = 100 * QV,
                                bV = (0, yV.f)();
                              return (0, JV.useEffect)((() => {
                                const VV = bV.onFrame((() => {
                                  const VV = bV.getState();
                                  if (!VV.isActive || !xV.current) return;
                                  const eV = VV.state;
                                  xV.current.style.left = 100 * eV.markerPosition + "%"
                                }));
                                return () => {
                                  VV()
                                }
                              }), [bV]), (0, pV.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, kV.J)(wV) && {
                                    "--scale": wV
                                  },
                                  ...!(0, kV.J)(ZV) && {
                                    "--rotation": `${ZV}deg`
                                  }
                                },
                                children: [nV && (0, pV.jsx)(UV.b, {
                                  text: [{
                                    icon: nV
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, pV.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, pV.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${vV}%`,
                                      width: `${rV}%`
                                    }
                                  }), (0, pV.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: xV
                                  })]
                                }), (0, pV.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, pV.jsx)(UV.b, {
                                    text: YV
                                  })
                                })]
                              })
                            })),
                            EV = (0, JV.memo)((function(VV) {
                              let {
                                initialParameters: eV
                              } = VV;
                              const xV = (0, JV.useRef)(null),
                                [YV, QV] = (0, JV.useState)((() => new Array(eV.UY).fill("pending"))),
                                [nV, wV] = (0, JV.useState)((() => {
                                  const VV = eV.QY;
                                  return (0, kV.J)(VV) || VV <= 0 ? [] : new Array(VV).fill("pending")
                                })),
                                ZV = eV.label,
                                {
                                  icon: vV
                                } = eV,
                                rV = (0, JV.useRef)(0),
                                bV = (0, JV.useRef)(0),
                                EV = (0, JV.useRef)([]),
                                BV = (0, yV.f)();
                              return (0, JV.useEffect)((() => {
                                const VV = BV.onFrame((() => {
                                  const VV = BV.getState();
                                  if (!VV.isActive || !xV.current) return;
                                  const eV = VV.state,
                                    JV = 30 + 60 * eV.outerCircleProgress;
                                  if (xV.current.setAttribute("r", String(JV)), !0 === eV.lastClickResult && eV.successes > rV.current) {
                                    xV.current.classList.remove("QTERhythmClickOuterCircle--miss"), xV.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const VV = setTimeout((() => {
                                      var VV;
                                      null === (VV = xV.current) || void 0 === VV || VV.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    EV.current.push(VV)
                                  } else if (!1 === eV.lastClickResult && eV.misses > bV.current) {
                                    xV.current.classList.remove("QTERhythmClickOuterCircle--hit"), xV.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const VV = setTimeout((() => {
                                      var VV;
                                      null === (VV = xV.current) || void 0 === VV || VV.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    EV.current.push(VV)
                                  }
                                  eV.successes === rV.current && eV.misses === bV.current || (rV.current = eV.successes, bV.current = eV.misses, QV((VV => {
                                    const xV = [...VV];
                                    for (let JV = 0; JV < eV.UY; JV++) xV[JV] = JV < eV.successes ? "success" : "pending";
                                    return xV
                                  })), wV((VV => {
                                    if (0 === VV.length) return VV;
                                    const xV = [...VV];
                                    for (let JV = 0; JV < xV.length; JV++) xV[JV] = JV < eV.misses ? "miss" : "pending";
                                    return xV
                                  })))
                                }));
                                return () => {
                                  VV();
                                  for (const VV of EV.current) clearTimeout(VV);
                                  EV.current = []
                                }
                              }), [BV]), (0, pV.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, pV.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: YV.map(((VV, eV) => (0, pV.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === VV ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, eV)))
                                }), (0, pV.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, pV.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, pV.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, pV.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: xV
                                    })]
                                  }), vV && (0, pV.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, pV.jsx)(UV.b, {
                                      text: [{
                                        icon: vV
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), nV.length > 0 && (0, pV.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: nV.map(((VV, eV) => (0, pV.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === VV ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, eV)))
                                }), (0, pV.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, pV.jsx)(UV.b, {
                                    text: ZV
                                  })
                                })]
                              })
                            }));

                          function BV(VV) {
                            let {
                              qte: eV
                            } = VV;
                            switch (eV.type) {
                              case "progressBar":
                                return (0, pV.jsx)(QV, {
                                  initialParameters: eV.parameters
                                });
                              case "timedClick":
                                return (0, pV.jsx)(vV, {
                                  initialParameters: eV.parameters
                                });
                              case "gravityBar":
                                return (0, pV.jsx)(rV, {
                                  initialParameters: eV.parameters
                                });
                              case "precisionBar":
                                return (0, pV.jsx)(bV, {
                                  initialParameters: eV.parameters
                                });
                              case "rhythmClick":
                                return (0, pV.jsx)(EV, {
                                  initialParameters: eV.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const jV = (0, JV.memo)((function() {
                            const [VV, eV] = (0, JV.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, YV.g)("qteStateUpdated", (VV => {
                              eV(VV)
                            })), VV.isActive && VV.type ? (0, pV.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, pV.jsx)(BV, {
                                qte: VV
                              })
                            }) : null
                          }))
                        }, 5264: (VV, eV, xV) => {
                          xV.d(eV, {
                            d: () => pV,
                            f: () => QV
                          });
                          var JV = xV(62),
                            YV = xV(1348),
                            UV = xV(5273);
                          const yV = {
                              getState: () => UV.d.getCurrentState(),
                              onFrame: YV.v
                            },
                            pV = (0, JV.createContext)(yV);

                          function QV() {
                            return (0, JV.useContext)(pV)
                          }
                        }, 5339: (VV, eV, xV) => {
                          xV.d(eV, {
                            c: () => DV,
                            g: () => gV
                          });
                          var JV = xV(5342),
                            YV = xV(364);
                          const UV = 120,
                            yV = 260,
                            pV = 1.15,
                            QV = 1.2,
                            nV = 2,
                            wV = 1.08,
                            ZV = .8,
                            vV = .95,
                            rV = 8,
                            kV = "[\"')\\]\u300d\u300f\uff09]*",
                            bV = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${kV}$`),
                            EV = new RegExp(`[?\uff1f]${kV}$`),
                            BV = new RegExp(`[!\uff01]${kV}$`),
                            jV = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            qV = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            tV = new RegExp(`[${qV}]`),
                            FV = new RegExp(`[${qV}]|[^${qV}]+`, "g"),
                            TV = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function PV(VV) {
                            let eV = 2166136261;
                            for (let xV = 0; xV < VV.length; xV++) eV ^= VV.charCodeAt(xV), eV = Math.imul(eV, 16777619);
                            return (eV >>> 0) / 4294967295 * 2 - 1
                          }

                          function AV(VV) {
                            var eV;
                            if (tV.test(VV)) return 1;
                            const xV = VV.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              JV = xV.replace(/[^0-9]/g, "");
                            if (JV.length > 0 && !/\p{L}/u.test(xV)) return Math.min(JV.length, 4);
                            const YV = null !== (eV = xV.match(TV)) && void 0 !== eV ? eV : [];
                            if (0 === YV.length) {
                              var UV, yV;
                              const VV = null !== (UV = null === (yV = xV.match(/\p{L}/gu)) || void 0 === yV ? void 0 : yV.length) && void 0 !== UV ? UV : 0;
                              return 0 === VV ? 0 : Math.min(Math.max(1, Math.round(VV / 2.5)), rV)
                            }
                            const pV = xV.replace(/[^\p{L}]/gu, ""),
                              QV = YV.length > 1 && "e" === YV.at(-1) && pV.endsWith("e") && !pV.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(VV.replace(/[^\p{L}]/gu, ""));
                            return Math.min(YV.length - (QV ? 1 : 0), rV)
                          }

                          function NV(VV) {
                            return VV.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function XV(VV) {
                            const eV = VV.replace(/[^\p{L}]/gu, "");
                            return eV.length >= 2 && eV === eV.toUpperCase() && eV !== eV.toLowerCase()
                          }

                          function MV(VV, eV) {
                            var xV;
                            const rV = eV && (0, JV.j)(eV),
                              kV = null !== (xV = null === rV || void 0 === rV ? void 0 : rV.syllableMs) && void 0 !== xV ? xV : JV.e,
                              qV = function(VV) {
                                const eV = [];
                                for (const JV of (0, YV.dc)(VV))
                                  if ("string" === typeof JV)
                                    for (const VV of JV.split(/(\s+)/)) {
                                      if ("" === VV) continue;
                                      if (/^\s+$/.test(VV)) {
                                        eV.push({
                                          kind: "space",
                                          text: VV
                                        });
                                        continue
                                      }
                                      if (!tV.test(VV)) {
                                        eV.push({
                                          kind: "word",
                                          text: VV,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let JV = !0;
                                      for (const YV of null !== (xV = VV.match(FV)) && void 0 !== xV ? xV : []) {
                                        var xV;
                                        const VV = eV.at(-1);
                                        JV || "word" !== (null === VV || void 0 === VV ? void 0 : VV.kind) || tV.test(YV) || /[\p{L}\p{N}]/u.test(YV) ? (JV || eV.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), eV.push({
                                          kind: "word",
                                          text: YV,
                                          delayMs: 0
                                        }), JV = !1) : VV.text += YV
                                      }
                                    } else eV.push({
                                      kind: "icon",
                                      text: JV.icon,
                                      delayMs: 0
                                    });
                                return eV
                              }(VV),
                              TV = [];
                            let MV = [];
                            for (const JV of qV) "space" !== JV.kind && (MV.push(JV), bV.test(JV.text) && (TV.push(MV), MV = []));
                            TV.push(MV);
                            const zV = [];
                            let GV = 0;
                            for (const JV of TV) {
                              var WV, RV;
                              const VV = null !== (WV = null === (RV = JV.at(-1)) || void 0 === RV ? void 0 : RV.text) && void 0 !== WV ? WV : "",
                                eV = EV.test(VV),
                                xV = BV.test(VV),
                                YV = JV.map((VV => "word" === VV.kind ? AV(VV.text) : 1)),
                                qV = YV.findLastIndex((VV => VV > 0));
                              for (const [EV, BV] of JV.entries()) {
                                const VV = "word" === BV.kind,
                                  JV = YV[EV];
                                BV.delayMs = GV;
                                for (let YV = 0; rV && YV < JV; YV++) {
                                  const {
                                    intonation: UV
                                  } = rV;
                                  let yV = qV > 0 ? -UV.declineSemitones * (EV / qV) : 0;
                                  yV += PV(`${NV(BV.text)}|${YV}`) * UV.variationSemitones;
                                  const bV = Math.min(1, UV.variationSemitones);
                                  let jV = rV.glideSemitones,
                                    tV = 1;
                                  xV && (yV += UV.exclaimLiftSemitones, tV *= pV), eV && EV === qV && (yV += UV.questionRiseSemitones * (JV > 1 ? .5 + .5 * YV / (JV - 1) : 1), YV === JV - 1 && (jV = Math.abs(jV) + UV.questionRiseSemitones / 2)), VV && XV(BV.text) && (yV += nV * bV, tV *= QV), JV > 1 && 0 === YV && (yV += ZV * bV, tV *= wV), zV.push({
                                    atMs: GV + YV * kV,
                                    semitones: yV,
                                    glideSemitones: jV,
                                    durationMs: YV < JV - 1 ? Math.min(rV.durationMs, kV * vV) : rV.durationMs,
                                    level: tV
                                  })
                                }
                                GV += JV * kV + (bV.test(BV.text) ? yV : jV.test(BV.text) ? UV : 0)
                              }
                            }
                            return {
                              pieces: qV.map((VV => "space" === VV.kind ? VV : "icon" === VV.kind ? {
                                kind: "icon",
                                icon: VV.text,
                                delayMs: VV.delayMs
                              } : {
                                kind: "word",
                                text: VV.text,
                                delayMs: VV.delayMs
                              })),
                              blips: zV
                            }
                          }
                          var zV = xV(1220),
                            GV = xV(1279),
                            WV = xV(2059);

                          function RV(VV) {
                            if ("string" === typeof VV) return VV;
                            const eV = GV.c.get().getCurrentLanguageCode();
                            return (0, zV.r)(eV, VV.translationKey, (0, zV.p)(VV.params, WV.e.shown))
                          }

                          function gV(VV) {
                            const eV = void 0 === VV.voice ? null : (0, JV.n)(VV.voice),
                              xV = eV && (0, JV.j)(eV);
                            return {
                              plan: MV(RV(VV.line), xV),
                              synth: xV
                            }
                          }

                          function DV(VV) {
                            const eV = [];
                            let xV = [];
                            for (const [YV, UV] of VV.entries()) {
                              var JV;
                              "space" === UV.kind && (" " !== UV.text || "icon" !== (null === (JV = VV[YV + 1]) || void 0 === JV ? void 0 : JV.kind)) ? (xV.length > 0 && eV.push(xV), eV.push([UV]), xV = []) : xV.push(UV)
                            }
                            return xV.length > 0 && eV.push(xV), eV
                          }
                        }, 5351: (VV, eV, xV) => {
                          xV.d(eV, {
                            d: () => wV,
                            g: () => ZV
                          });
                          var JV = xV(5353),
                            YV = xV(27);
                          const UV = .25,
                            yV = .85,
                            pV = .02,
                            QV = .01;

                          function nV(VV, eV, xV, JV, YV, UV, pV) {
                            const {
                              waveform: QV,
                              pitchHz: nV,
                              attackMs: wV,
                              releaseMs: ZV,
                              lowpassHz: vV
                            } = xV, rV = YV + JV.durationMs / 1e3, kV = nV * 2 ** (JV.semitones / 12), bV = VV.createOscillator();
                            bV.type = QV, bV.frequency.setValueAtTime(kV, YV), bV.frequency.exponentialRampToValueAtTime(kV * 2 ** (JV.glideSemitones / 12), rV);
                            const EV = YV + Math.min(wV, JV.durationMs) / 1e3,
                              BV = VV.createGain();
                            BV.gain.setValueAtTime(0, YV), BV.gain.linearRampToValueAtTime(UV, EV), BV.gain.linearRampToValueAtTime(UV * yV, Math.max(EV, rV - ZV / 1e3)), BV.gain.linearRampToValueAtTime(0, rV);
                            const jV = [bV];
                            if (null !== vV) {
                              const eV = VV.createBiquadFilter();
                              eV.type = "lowpass", eV.frequency.value = vV, jV.push(eV)
                            }
                            jV.push(BV, eV);
                            for (let yV = 1; yV < jV.length; yV++) jV[yV - 1].connect(jV[yV]);
                            return bV.onended = () => {
                              for (const VV of jV.slice(0, -1)) VV.disconnect();
                              pV()
                            }, bV.start(YV), bV.stop(rV), bV
                          }

                          function wV(VV, eV, xV, JV, YV, yV) {
                            if (0 === JV.length) return yV(), () => {};
                            const wV = UV * xV.volume * YV,
                              ZV = VV.createGain();
                            ZV.connect(eV);
                            const vV = VV.currentTime + pV,
                              rV = new Set;
                            for (const UV of JV) {
                              const eV = nV(VV, ZV, xV, UV, vV + UV.atMs / 1e3, wV * UV.level, (() => {
                                rV.delete(eV), 0 === rV.size && (ZV.disconnect(), yV())
                              }));
                              rV.add(eV)
                            }
                            return () => {
                              const eV = VV.currentTime;
                              ZV.gain.setTargetAtTime(0, eV, QV);
                              for (const VV of rV) try {
                                VV.stop(eV + 5 * QV)
                              } catch {}
                            }
                          }

                          function ZV(VV, eV) {
                            var xV;
                            const UV = JV.Howler.ctx,
                              yV = JV.Howler.masterGain;
                            if (!UV || !yV || !YV.b.get("soundOnFromAd")) return () => {};
                            const pV = JV.Howler;
                            return null === (xV = pV._autoResume) || void 0 === xV || xV.call(pV), wV(UV, yV, VV, eV, YV.b.get("soundVolume"), (() => {
                              var VV;
                              null === (VV = pV._autoSuspend) || void 0 === VV || VV.call(pV)
                            }))
                          }
                        }, 5330: (VV, eV, xV) => {
                          xV.d(eV, {
                            c: () => pV,
                            e: () => YV,
                            g: () => QV,
                            k: () => yV,
                            o: () => UV
                          });
                          var JV = xV(5323);
                          const YV = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            UV = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            yV = `${JV.l} lists every page of the Bloxd Code API docs.`;

                          function pV(VV, eV) {
                            return `${VV.url}${encodeURIComponent(eV.toWellFormed())}`
                          }

                          function QV(VV) {
                            const eV = pV(YV, VV);
                            return eV.length <= 3e4 ? {
                              url: eV,
                              sendsPrompt: !0
                            } : {
                              url: new URL(YV.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 5353: (VV, eV, xV) => {
                          xV.r(eV), xV.d(eV, {
                            Howl: () => YV.Howl,
                            Howler: () => YV.Howler,
                            musicOutput: () => EV,
                            readyAudioContext: () => BV
                          });
                          var JV, YV = xV(5357),
                            UV = xV(3886),
                            yV = xV(5137);
                          const pV = YV.Howler;

                          function QV() {
                            var VV, eV;
                            if (pV.ctx || !pV.usingWebAudio || "undefined" === typeof AudioContext || !(0, yV.i)()) return;
                            const xV = navigator.audioSession;
                            let JV;
                            "auto" === (null === xV || void 0 === xV ? void 0 : xV.type) && (xV.type = "ambient");
                            try {
                              JV = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const YV = JV.createGain();
                            YV.gain.setValueAtTime(pV._muted ? 0 : null !== (VV = pV._volume) && void 0 !== VV ? VV : 1, JV.currentTime), YV.connect(JV.destination), pV.ctx = JV, pV.masterGain = YV, null === (eV = pV._setup) || void 0 === eV || eV.call(pV)
                          }
                          pV._mobileUnloaded = !0;
                          const nV = pV.volume.bind(YV.Howler);
                          pV.volume = function() {
                            return QV(), nV(...arguments)
                          };
                          const wV = pV.mute.bind(YV.Howler);
                          pV.mute = VV => (QV(), wV(VV));
                          const ZV = YV.Howl.prototype,
                            vV = ZV.init;

                          function rV() {
                            for (; pV._html5AudioPool.length < pV.html5PoolSize;) {
                              const VV = new Audio;
                              VV._unlocked = !0, pV._releaseHtml5Audio(VV)
                            }
                            for (const eV of pV._howls)
                              if (!eV._webAudio)
                                for (const xV of eV._getSoundIds()) {
                                  var VV;
                                  const JV = null === (VV = eV._soundById(xV)) || void 0 === VV ? void 0 : VV._node;
                                  JV && !JV._unlocked && (JV._unlocked = !0, JV.load())
                                }
                          }
                          ZV.init = function(VV) {
                            return QV(), vV.call(this, VV)
                          }, (0, yV.i)() && (pV._unlockAudio = () => {
                            const VV = pV.ctx;
                            if (pV._audioUnlocked || !VV) return;
                            pV.autoUnlock = !1;
                            const eV = VV.createBuffer(1, 1, 22050);
                            pV._scratchBuffer = eV;
                            const xV = new AbortController;
                            let JV = "afterPaint";
                            const YV = () => {
                                var JV;
                                if (pV._audioUnlocked) return;
                                null === (JV = pV._autoResume) || void 0 === JV || JV.call(pV);
                                const YV = VV.createBufferSource();
                                YV.buffer = eV, YV.connect(VV.destination), YV.start(0), VV.resume().catch((() => {})), YV.onended = () => {
                                  YV.disconnect(0), pV._audioUnlocked = !0, xV.abort();
                                  for (const VV of pV._howls) VV._emit("unlock")
                                }
                              },
                              QV = () => {
                                rV(), YV()
                              },
                              nV = eV => {
                                if (rV(), "inTap" === JV) {
                                  if ("running" === VV.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), YV()
                                } else "afterPaint" === JV && (JV = "queued", (0, UV.c)(eV.timeStamp, (() => {
                                  JV = "inTap", YV()
                                })))
                              };
                            for (const UV of ["touchstart", "touchend"]) document.addEventListener(UV, QV, {
                              capture: !0,
                              signal: xV.signal
                            });
                            for (const UV of yV.c) document.addEventListener(UV, nV, {
                              capture: !0,
                              signal: xV.signal
                            })
                          });
                          let kV = 0;
                          const bV = null === (JV = pV._autoSuspend) || void 0 === JV ? void 0 : JV.bind(YV.Howler);

                          function EV() {
                            BV();
                            const {
                              ctx: VV,
                              masterGain: eV
                            } = pV;
                            return VV && eV ? {
                              ctx: VV,
                              destination: eV,
                              holdAwake: VV => {
                                var eV, xV;
                                (kV += VV ? 1 : -1, VV) ? null === (eV = pV._autoResume) || void 0 === eV || eV.call(pV): null === (xV = pV._autoSuspend) || void 0 === xV || xV.call(pV)
                              },
                              wake: () => {
                                var eV;
                                "running" !== VV.state && (null === (eV = pV._autoResume) || void 0 === eV || eV.call(pV), VV.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function BV() {
                            var VV;
                            (pV.volume(), pV.ctx && pV.autoUnlock) && (null === (VV = pV._unlockAudio) || void 0 === VV || VV.call(pV))
                          }
                          bV && (pV._autoSuspend = () => kV > 0 ? YV.Howler : bV())
                        }, 5364: (VV, eV, xV) => {
                          function JV(VV) {
                            return {
                              notAfter: VV
                            }
                          }
                          xV.d(eV, {
                            B: () => ZV,
                            e: () => QV,
                            h: () => nV,
                            k: () => pV,
                            l: () => JV,
                            o: () => YV,
                            s: () => UV,
                            w: () => yV,
                            z: () => wV
                          });
                          const YV = JV("\\w$."),
                            UV = JV("\\w.,");

                          function yV(VV) {
                            return eV => QV(eV, VV)
                          }

                          function pV(VV) {
                            return eV => !VV.test(eV.input.slice(0, eV.index))
                          }

                          function QV(VV, eV) {
                            return VV.index > 0 && new RegExp(`[${eV}]`).test(VV.input[VV.index - 1])
                          }

                          function nV(VV, eV, xV) {
                            return function(VV) {
                              return void 0 !== VV && "function" !== typeof VV
                            }(xV) ? function(VV, eV, xV) {
                              const JV = eV.flags.replace(/[gy]/g, ""),
                                YV = new RegExp(`[^${xV}](?:${eV.source})`, `${JV}g`),
                                UV = [],
                                yV = xV => {
                                  const JV = xV.index + xV[0].length;
                                  return ("" === xV[0] ? vV(VV, eV, JV) : JV) - 1
                                },
                                pV = new RegExp(`(?:${eV.source})`, `${JV}y`).exec(VV);
                              if (pV) {
                                if (UV.push(pV), !eV.global) return UV;
                                YV.lastIndex = yV(pV)
                              }
                              for (let QV = YV.exec(VV); QV; QV = YV.exec(VV)) {
                                const xV = vV(VV, eV, QV.index) - QV.index;
                                if (QV[0] = QV[0].slice(xV), QV.index += xV, UV.push(QV), !eV.global) break;
                                YV.lastIndex = yV(QV)
                              }
                              return UV
                            }(VV, eV, xV.notAfter) : function(VV, eV, xV) {
                              const JV = new RegExp(eV.source, `${eV.flags.replace(/[gy]/g,"")}g`),
                                YV = [];
                              for (let UV = JV.exec(VV); UV; UV = JV.exec(VV))
                                if (!xV || xV(UV)) {
                                  if (YV.push(UV), !eV.global) break;
                                  "" === UV[0] && (JV.lastIndex = vV(VV, eV, JV.lastIndex))
                                } else JV.lastIndex = vV(VV, eV, UV.index);
                              return YV
                            }(VV, eV, xV)
                          }

                          function wV(VV, eV, xV, JV) {
                            let YV = "",
                              UV = 0;
                            for (const yV of nV(VV, eV, xV)) YV += VV.slice(UV, yV.index) + JV(yV), UV = yV.index + yV[0].length;
                            return YV + VV.slice(UV)
                          }

                          function ZV(VV, eV, xV) {
                            const JV = [];
                            let YV = 0;
                            for (const UV of nV(VV, eV, xV)) JV.push(VV.slice(YV, UV.index)), YV = UV.index + UV[0].length;
                            return [...JV, VV.slice(YV)]
                          }

                          function vV(VV, eV, xV) {
                            var JV;
                            return xV + (eV.unicode && (null !== (JV = VV.codePointAt(xV)) && void 0 !== JV ? JV : 0) > 65535 ? 2 : 1)
                          }
                        }, 5323: (VV, eV, xV) => {
                          xV.d(eV, {
                            C: () => rV,
                            b: () => YV,
                            e: () => QV,
                            i: () => UV,
                            l: () => yV,
                            p: () => pV,
                            t: () => EV,
                            u: () => wV,
                            w: () => ZV,
                            z: () => bV
                          });
                          var JV = xV(1682);
                          const YV = 24e3,
                            UV = "/docs/llms.txt",
                            yV = `${JV.d}${UV}`,
                            pV = "/llms.txt",
                            QV = "/docs/llms-full.txt";

                          function nV(VV) {
                            return VV || "index"
                          }

                          function wV(VV) {
                            return `/docs/${nV(VV)}.md`
                          }

                          function ZV(VV, eV) {
                            return `/docs/${nV(VV)}/${eV+1}.md`
                          }
                          const vV = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function rV(VV) {
                            const eV = vV.exec(VV);
                            return null === eV ? null : {
                              name: eV[1],
                              part: void 0 === eV[2] ? null : Number(eV[2])
                            }
                          }
                          const kV = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function bV(VV) {
                            const eV = kV.exec(VV);
                            if (null === eV) return null;
                            const [, xV = "", JV] = eV;
                            return void 0 === JV ? wV(xV) : ZV(xV, Number(JV) - 1)
                          }

                          function EV(VV) {
                            return `/docsHtml/${nV(VV)}.html`
                          }
                        }, 5342: (VV, eV, xV) => {
                          xV.d(eV, {
                            e: () => YV,
                            g: () => JV,
                            i: () => UV,
                            j: () => QV,
                            n: () => yV
                          });
                          const JV = ["sine", "triangle", "square", "sawtooth"],
                            YV = 55,
                            UV = {
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

                          function yV(VV) {
                            return "string" !== typeof VV ? VV : Object.hasOwn(UV, VV) ? UV[VV] : null
                          }

                          function pV(VV, eV, xV) {
                            return Math.min(xV, Math.max(eV, VV))
                          }

                          function QV(VV) {
                            const eV = pV(VV.durationMs, 10, 500),
                              xV = pV(VV.attackMs, 0, eV),
                              {
                                intonation: YV
                              } = VV;
                            return {
                              waveform: JV.includes(VV.waveform) ? VV.waveform : "sine",
                              pitchHz: pV(VV.pitchHz, 20, 4e3),
                              glideSemitones: pV(VV.glideSemitones, -24, 24),
                              durationMs: eV,
                              attackMs: xV,
                              releaseMs: pV(VV.releaseMs, 0, eV - xV),
                              lowpassHz: null === VV.lowpassHz ? null : pV(VV.lowpassHz, 20, 2e4),
                              volume: pV(VV.volume, 0, 2),
                              intonation: {
                                variationSemitones: pV(YV.variationSemitones, 0, 6),
                                declineSemitones: pV(YV.declineSemitones, 0, 12),
                                questionRiseSemitones: pV(YV.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: pV(YV.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: pV(VV.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const VV in modules) Object.freeze(modules[VV]);